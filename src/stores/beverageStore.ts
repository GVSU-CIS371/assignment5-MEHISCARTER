import { defineStore } from "pinia";
import {
  BaseBeverageType,
  CreamerType,
  SyrupType,
  BeverageType,
} from "../types/beverage";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";
import syrups from "../data/syrups.json";
import creamers from "../data/creamers.json";
import db from "../firebase.ts";
import {
  collection,
  getDocs,
  setDoc,
  doc,
  QuerySnapshot,
  QueryDocumentSnapshot,
  onSnapshot,
  query,
  where,
  Unsubscribe,
} from "firebase/firestore";
import type { User } from "firebase/auth";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[0],
    bases: [] as BaseBeverageType[],
    currentBase: null as BaseBeverageType | null,
    syrups: [] as SyrupType[],
    currentSyrup: null as SyrupType | null,
    creamers: [] as CreamerType[],
    currentCreamer: null as CreamerType | null,
    beverages: [] as BeverageType[],
    currentBeverage: null as BeverageType | null,
    currentName: "",
    user: null as User | null,
    snapshotUnsubscribe: null as Unsubscribe | null,
  }),

  actions: {
    init() {
      const baseCollection = collection(db, "bases");
      getDocs(baseCollection)
        .then((qs: QuerySnapshot) => {
          if (qs.empty) {
            bases.forEach((b) => {
              const base = doc(db, `bases/${b.id}`);
              setDoc(base, { name: b.name, color: b.color })
                .then(() => {
                  console.log(`New base with ID ${b.id} inserted`);
                })
                .catch((error: any) => {
                  console.error("Error adding document: ", error);
                });
            });
            this.bases = bases;
          } else {
            this.bases = qs.docs.map((qd: QueryDocumentSnapshot) => ({
              id: qd.id,
              name: qd.data().name,
              color: qd.data().color,
            })) as BaseBeverageType[];
          }
          this.currentBase = this.bases[0];
          console.log("getting bases: ", this.bases);
        })
        .catch((error: any) => {
          console.error("Error getting documents:", error);
        });
      const syrupCollection = collection(db, "syrups");
      getDocs(syrupCollection)
        .then((qs: QuerySnapshot) => {
          if (qs.empty) {
            syrups.forEach((b) => {
              const syrup = doc(db, `syrups/${b.id}`);
              setDoc(syrup, { name: b.name, color: b.color })
                .then(() => {
                  console.log(`New syrup with ID ${b.id} inserted`);
                })
                .catch((error: any) => {
                  console.error("Error adding document: ", error);
                });
            });
            this.syrups = syrups;
          } else {
            this.syrups = qs.docs.map((qd: QueryDocumentSnapshot) => ({
              id: qd.id,
              name: qd.data().name,
              color: qd.data().color,
            })) as SyrupType[];
            console.log("getting syrups: ", this.syrups);
          }
          this.currentSyrup = this.syrups[0];
        })
        .catch((error: any) => {
          console.error("Error getting syrups:", error);
        });

      const creamerCollection = collection(db, "creamers");
      getDocs(creamerCollection)
        .then((qs: QuerySnapshot) => {
          if (qs.empty) {
            creamers.forEach((b) => {
              const creamer = doc(db, `creamers/${b.id}`);
              setDoc(creamer, { name: b.name, color: b.color })
                .then(() => {
                  console.log(`New creamer with ID ${b.id} inserted`);
                })
                .catch((error: any) => {
                  console.error("Error adding document: ", error);
                });
            });
            this.creamers = creamers;
          } else {
            this.creamers = qs.docs.map((qd: QueryDocumentSnapshot) => ({
              id: qd.id,
              name: qd.data().name,
              color: qd.data().color,
            })) as CreamerType[];

            console.log("getting creamers: ", this.creamers);
          }
          this.currentCreamer = this.creamers[0];
        })
        .catch((error: any) => {
          console.error("Error getting creamers:", error);
        });
    },

    showBeverage() {
      if (!this.currentBeverage) return;
      this.currentName = this.currentBeverage.name;
      this.currentTemp = this.currentBeverage.temp;
      this.currentBase = this.currentBeverage.base;
      this.currentSyrup = this.currentBeverage.syrup;
      this.currentCreamer = this.currentBeverage.creamer;
      console.log(
        `currentBeverage changed`,
        this.currentBase,
        this.currentCreamer,
        this.currentSyrup
      );
    },
// -------------------------------------------------------
    makeBeverage(): Promise<string> {
      if (!this.user) {
        return Promise.resolve("Sign in first");
      }

      const bevID = this.currentName || crypto.randomUUID();

      const ref = doc(db, "users", this.user.uid, "beverages", bevID);

      const payload = {
        name: this.currentName || "New Beverage",
        temp: this.currentTemp,
        baseID: this.currentBase?.id || null,
        syrupID: this.currentSyrup?.id || null,
        creamerID: this.currentCreamer?.id || null,
      };

      return setDoc(ref, payload, {merge: true})
      .then(() => {
        console.log("Saved Beverage: ", payload);
        return "Beverage Saved!";
      })
    },

    setUser(user: User | null) {
      if (this.snapshotUnsubscribe) {
        this.snapshotUnsubscribe();
        this.snapshotUnsubscribe = null;
      }

      this.user = user;

      if (!user) {
        this.beverages = [];
        this.currentBeverage = null;
        return;
      }

      const beverageCol = collection(db, "users", user.uid, "beverages")

      this.snapshotUnsubscribe = onSnapshot(
        beverageCol,
        (snapshot) => {
          const list: BeverageType[] = snapshot.docs.map((d) => {
            const data = d.data();
            return {
              id: d.id,
              name: data.name,
              temp: this.temps.find((t) => t === data.temp)!,
              base: this.bases.find((b) => b.id === data.baseID)!,
              syrup: this.syrups.find((s) => s.id === data.syrupID)!,
              creamer: this.creamers.find((c) => c.id === data.creamerID)!,
            } as BeverageType;
          });

        this.beverages = list;

        if (list.length > 0) {
          const exists = 
          this.currentBeverage && list.some((b) => b.id === this.currentBeverage!.id);

          this.currentBeverage = 
          exists ? list.find((b) => b.id === this.currentBeverage!.id)! : list[0];
        } else {
          this.currentBase = null;
        }
        }
      );
    },
  },
});
