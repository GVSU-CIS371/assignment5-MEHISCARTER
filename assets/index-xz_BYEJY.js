(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ae={},qr=[],$t=()=>{},cd=()=>!1,Yo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Jc=n=>n.startsWith("onUpdate:"),lt=Object.assign,Xc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},__=Object.prototype.hasOwnProperty,Te=(n,e)=>__.call(n,e),re=Array.isArray,zr=n=>mi(n)==="[object Map]",ld=n=>mi(n)==="[object Set]",Ju=n=>mi(n)==="[object Date]",le=n=>typeof n=="function",Be=n=>typeof n=="string",Nt=n=>typeof n=="symbol",Ce=n=>n!==null&&typeof n=="object",ud=n=>(Ce(n)||le(n))&&le(n.then)&&le(n.catch),hd=Object.prototype.toString,mi=n=>hd.call(n),y_=n=>mi(n).slice(8,-1),fd=n=>mi(n)==="[object Object]",Zo=n=>Be(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,js=Qc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ea=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},v_=/-\w/g,Kn=ea(n=>n.replace(v_,e=>e.slice(1).toUpperCase())),E_=/\B([A-Z])/g,br=ea(n=>n.replace(E_,"-$1").toLowerCase()),dd=ea(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ha=ea(n=>n?`on${dd(n)}`:""),Un=(n,e)=>!Object.is(n,e),ao=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},pd=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},Yc=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Xu;const ta=()=>Xu||(Xu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function cs(n){if(re(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=Be(r)?A_(r):cs(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Be(n)||Ce(n))return n}const T_=/;(?![^(]*\))/g,I_=/:([^]+)/,w_=/\/\*[^]*?\*\//g;function A_(n){const e={};return n.replace(w_,"").split(T_).forEach(t=>{if(t){const r=t.split(I_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Zc(n){let e="";if(Be(n))e=n;else if(re(n))for(let t=0;t<n.length;t++){const r=Zc(n[t]);r&&(e+=r+" ")}else if(Ce(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const b_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",S_=Qc(b_);function gd(n){return!!n||n===""}function R_(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=wo(n[r],e[r]);return t}function wo(n,e){if(n===e)return!0;let t=Ju(n),r=Ju(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=Nt(n),r=Nt(e),t||r)return n===e;if(t=re(n),r=re(e),t||r)return t&&r?R_(n,e):!1;if(t=Ce(n),r=Ce(e),t||r){if(!t||!r)return!1;const s=Object.keys(n).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in n){const c=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(c&&!l||!c&&l||!wo(n[a],e[a]))return!1}}return String(n)===String(e)}const md=n=>!!(n&&n.__v_isRef===!0),Cn=n=>Be(n)?n:n==null?"":re(n)||Ce(n)&&(n.toString===hd||!le(n.toString))?md(n)?Cn(n.value):JSON.stringify(n,_d,2):String(n),_d=(n,e)=>md(e)?_d(n,e.value):zr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[qa(r,i)+" =>"]=s,t),{})}:ld(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>qa(t))}:Nt(e)?qa(e):Ce(e)&&!re(e)&&!fd(e)?String(e):e,qa=(n,e="")=>{var t;return Nt(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let st;class yd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=st,!e&&st&&(this.index=(st.scopes||(st.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=st;try{return st=this,e()}finally{st=t}}}on(){++this._on===1&&(this.prevScope=st,st=this)}off(){this._on>0&&--this._on===0&&(st=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function vd(n){return new yd(n)}function Ed(){return st}function C_(n,e=!1){st&&st.cleanups.push(n)}let Re;const za=new WeakSet;class Td{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,st&&st.active&&st.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,za.has(this)&&(za.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||wd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Yu(this),Ad(this);const e=Re,t=Dt;Re=this,Dt=!0;try{return this.fn()}finally{bd(this),Re=e,Dt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)nl(e);this.deps=this.depsTail=void 0,Yu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?za.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){fc(this)&&this.run()}get dirty(){return fc(this)}}let Id=0,$s,Hs;function wd(n,e=!1){if(n.flags|=8,e){n.next=Hs,Hs=n;return}n.next=$s,$s=n}function el(){Id++}function tl(){if(--Id>0)return;if(Hs){let e=Hs;for(Hs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;$s;){let e=$s;for($s=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function Ad(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function bd(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),nl(r),P_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function fc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Sd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Sd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ni)||(n.globalVersion=ni,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!fc(n))))return;n.flags|=2;const e=n.dep,t=Re,r=Dt;Re=n,Dt=!0;try{Ad(n);const s=n.fn(n._value);(e.version===0||Un(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Re=t,Dt=r,bd(n),n.flags&=-3}}function nl(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)nl(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function P_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Dt=!0;const Rd=[];function fn(){Rd.push(Dt),Dt=!1}function dn(){const n=Rd.pop();Dt=n===void 0?!0:n}function Yu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Re;Re=void 0;try{e()}finally{Re=t}}}let ni=0;class V_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class rl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Re||!Dt||Re===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Re)t=this.activeLink=new V_(Re,this),Re.deps?(t.prevDep=Re.depsTail,Re.depsTail.nextDep=t,Re.depsTail=t):Re.deps=Re.depsTail=t,Cd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=Re.depsTail,t.nextDep=void 0,Re.depsTail.nextDep=t,Re.depsTail=t,Re.deps===t&&(Re.deps=r)}return t}trigger(e){this.version++,ni++,this.notify(e)}notify(e){el();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{tl()}}}function Cd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Cd(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ao=new WeakMap,gr=Symbol(""),dc=Symbol(""),ri=Symbol("");function ot(n,e,t){if(Dt&&Re){let r=Ao.get(n);r||Ao.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new rl),s.map=r,s.key=t),s.track()}}function sn(n,e,t,r,s,i){const a=Ao.get(n);if(!a){ni++;return}const c=l=>{l&&l.trigger()};if(el(),e==="clear")a.forEach(c);else{const l=re(n),h=l&&Zo(t);if(l&&t==="length"){const d=Number(r);a.forEach((p,y)=>{(y==="length"||y===ri||!Nt(y)&&y>=d)&&c(p)})}else switch((t!==void 0||a.has(void 0))&&c(a.get(t)),h&&c(a.get(ri)),e){case"add":l?h&&c(a.get("length")):(c(a.get(gr)),zr(n)&&c(a.get(dc)));break;case"delete":l||(c(a.get(gr)),zr(n)&&c(a.get(dc)));break;case"set":zr(n)&&c(a.get(gr));break}}tl()}function k_(n,e){const t=Ao.get(n);return t&&t.get(e)}function Mr(n){const e=ye(n);return e===n?e:(ot(e,"iterate",ri),Et(n)?e:e.map(xt))}function na(n){return ot(n=ye(n),"iterate",ri),n}function Vn(n,e){return pn(n)?un(n)?Zr(xt(e)):Zr(e):xt(e)}const D_={__proto__:null,[Symbol.iterator](){return Wa(this,Symbol.iterator,n=>Vn(this,n))},concat(...n){return Mr(this).concat(...n.map(e=>re(e)?Mr(e):e))},entries(){return Wa(this,"entries",n=>(n[1]=Vn(this,n[1]),n))},every(n,e){return nn(this,"every",n,e,void 0,arguments)},filter(n,e){return nn(this,"filter",n,e,t=>t.map(r=>Vn(this,r)),arguments)},find(n,e){return nn(this,"find",n,e,t=>Vn(this,t),arguments)},findIndex(n,e){return nn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return nn(this,"findLast",n,e,t=>Vn(this,t),arguments)},findLastIndex(n,e){return nn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return nn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ka(this,"includes",n)},indexOf(...n){return Ka(this,"indexOf",n)},join(n){return Mr(this).join(n)},lastIndexOf(...n){return Ka(this,"lastIndexOf",n)},map(n,e){return nn(this,"map",n,e,void 0,arguments)},pop(){return ks(this,"pop")},push(...n){return ks(this,"push",n)},reduce(n,...e){return Zu(this,"reduce",n,e)},reduceRight(n,...e){return Zu(this,"reduceRight",n,e)},shift(){return ks(this,"shift")},some(n,e){return nn(this,"some",n,e,void 0,arguments)},splice(...n){return ks(this,"splice",n)},toReversed(){return Mr(this).toReversed()},toSorted(n){return Mr(this).toSorted(n)},toSpliced(...n){return Mr(this).toSpliced(...n)},unshift(...n){return ks(this,"unshift",n)},values(){return Wa(this,"values",n=>Vn(this,n))}};function Wa(n,e,t){const r=na(n),s=r[e]();return r!==n&&!Et(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=t(i.value)),i}),s}const O_=Array.prototype;function nn(n,e,t,r,s,i){const a=na(n),c=a!==n&&!Et(n),l=a[e];if(l!==O_[e]){const p=l.apply(n,i);return c?xt(p):p}let h=t;a!==n&&(c?h=function(p,y){return t.call(this,Vn(n,p),y,n)}:t.length>2&&(h=function(p,y){return t.call(this,p,y,n)}));const d=l.call(a,h,r);return c&&s?s(d):d}function Zu(n,e,t,r){const s=na(n);let i=t;return s!==n&&(Et(n)?t.length>3&&(i=function(a,c,l){return t.call(this,a,c,l,n)}):i=function(a,c,l){return t.call(this,a,Vn(n,c),l,n)}),s[e](i,...r)}function Ka(n,e,t){const r=ye(n);ot(r,"iterate",ri);const s=r[e](...t);return(s===-1||s===!1)&&sa(t[0])?(t[0]=ye(t[0]),r[e](...t)):s}function ks(n,e,t=[]){fn(),el();const r=ye(n)[e].apply(n,t);return tl(),dn(),r}const N_=Qc("__proto__,__v_isRef,__isVue"),Pd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Nt));function x_(n){Nt(n)||(n=String(n));const e=ye(this);return ot(e,"has",n),e.hasOwnProperty(n)}class Vd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?z_:Nd:i?Od:Dd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=re(e);if(!s){let l;if(a&&(l=D_[t]))return l;if(t==="hasOwnProperty")return x_}const c=Reflect.get(e,t,Me(e)?e:r);if((Nt(t)?Pd.has(t):N_(t))||(s||ot(e,"get",t),i))return c;if(Me(c)){const l=a&&Zo(t)?c:c.value;return s&&Ce(l)?gc(l):l}return Ce(c)?s?gc(c):ra(c):c}}class kd extends Vd{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];const a=re(e)&&Zo(t);if(!this._isShallow){const h=pn(i);if(!Et(r)&&!pn(r)&&(i=ye(i),r=ye(r)),!a&&Me(i)&&!Me(r))return h||(i.value=r),!0}const c=a?Number(t)<e.length:Te(e,t),l=Reflect.set(e,t,r,Me(e)?e:s);return e===ye(s)&&(c?Un(r,i)&&sn(e,"set",t,r):sn(e,"add",t,r)),l}deleteProperty(e,t){const r=Te(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&sn(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!Nt(t)||!Pd.has(t))&&ot(e,"has",t),r}ownKeys(e){return ot(e,"iterate",re(e)?"length":gr),Reflect.ownKeys(e)}}class M_ extends Vd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const L_=new kd,F_=new M_,U_=new kd(!0);const pc=n=>n,Qi=n=>Reflect.getPrototypeOf(n);function B_(n,e,t){return function(...r){const s=this.__v_raw,i=ye(s),a=zr(i),c=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,h=s[n](...r),d=t?pc:e?Zr:xt;return!e&&ot(i,"iterate",l?dc:gr),{next(){const{value:p,done:y}=h.next();return y?{value:p,done:y}:{value:c?[d(p[0]),d(p[1])]:d(p),done:y}},[Symbol.iterator](){return this}}}}function Ji(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function j_(n,e){const t={get(s){const i=this.__v_raw,a=ye(i),c=ye(s);n||(Un(s,c)&&ot(a,"get",s),ot(a,"get",c));const{has:l}=Qi(a),h=e?pc:n?Zr:xt;if(l.call(a,s))return h(i.get(s));if(l.call(a,c))return h(i.get(c));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&ot(ye(s),"iterate",gr),s.size},has(s){const i=this.__v_raw,a=ye(i),c=ye(s);return n||(Un(s,c)&&ot(a,"has",s),ot(a,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const a=this,c=a.__v_raw,l=ye(c),h=e?pc:n?Zr:xt;return!n&&ot(l,"iterate",gr),c.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return lt(t,n?{add:Ji("add"),set:Ji("set"),delete:Ji("delete"),clear:Ji("clear")}:{add(s){!e&&!Et(s)&&!pn(s)&&(s=ye(s));const i=ye(this);return Qi(i).has.call(i,s)||(i.add(s),sn(i,"add",s,s)),this},set(s,i){!e&&!Et(i)&&!pn(i)&&(i=ye(i));const a=ye(this),{has:c,get:l}=Qi(a);let h=c.call(a,s);h||(s=ye(s),h=c.call(a,s));const d=l.call(a,s);return a.set(s,i),h?Un(i,d)&&sn(a,"set",s,i):sn(a,"add",s,i),this},delete(s){const i=ye(this),{has:a,get:c}=Qi(i);let l=a.call(i,s);l||(s=ye(s),l=a.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&sn(i,"delete",s,void 0),h},clear(){const s=ye(this),i=s.size!==0,a=s.clear();return i&&sn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=B_(s,n,e)}),t}function sl(n,e){const t=j_(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(Te(t,s)&&s in r?t:r,s,i)}const $_={get:sl(!1,!1)},H_={get:sl(!1,!0)},q_={get:sl(!0,!1)};const Dd=new WeakMap,Od=new WeakMap,Nd=new WeakMap,z_=new WeakMap;function W_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function K_(n){return n.__v_skip||!Object.isExtensible(n)?0:W_(y_(n))}function ra(n){return pn(n)?n:il(n,!1,L_,$_,Dd)}function G_(n){return il(n,!1,U_,H_,Od)}function gc(n){return il(n,!0,F_,q_,Nd)}function il(n,e,t,r,s){if(!Ce(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=K_(n);if(i===0)return n;const a=s.get(n);if(a)return a;const c=new Proxy(n,i===2?r:t);return s.set(n,c),c}function un(n){return pn(n)?un(n.__v_raw):!!(n&&n.__v_isReactive)}function pn(n){return!!(n&&n.__v_isReadonly)}function Et(n){return!!(n&&n.__v_isShallow)}function sa(n){return n?!!n.__v_raw:!1}function ye(n){const e=n&&n.__v_raw;return e?ye(e):n}function ol(n){return!Te(n,"__v_skip")&&Object.isExtensible(n)&&pd(n,"__v_skip",!0),n}const xt=n=>Ce(n)?ra(n):n,Zr=n=>Ce(n)?gc(n):n;function Me(n){return n?n.__v_isRef===!0:!1}function al(n){return Q_(n,!1)}function Q_(n,e){return Me(n)?n:new J_(n,e)}class J_{constructor(e,t){this.dep=new rl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ye(e),this._value=t?e:xt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||Et(e)||pn(e);e=r?e:ye(e),Un(e,t)&&(this._rawValue=e,this._value=r?e:xt(e),this.dep.trigger())}}function Ee(n){return Me(n)?n.value:n}const X_={get:(n,e,t)=>e==="__v_raw"?n:Ee(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return Me(s)&&!Me(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function xd(n){return un(n)?n:new Proxy(n,X_)}function Y_(n){const e=re(n)?new Array(n.length):{};for(const t in n)e[t]=ey(n,t);return e}class Z_{constructor(e,t,r){this._object=e,this._key=t,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._raw=ye(e);let s=!0,i=e;if(!re(e)||!Zo(String(t)))do s=!sa(i)||Et(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=Ee(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Me(this._raw[this._key])){const t=this._object[this._key];if(Me(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return k_(this._raw,this._key)}}function ey(n,e,t){return new Z_(n,e,t)}class ty{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new rl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ni-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Re!==this)return wd(this,!0),!0}get value(){const e=this.dep.track();return Sd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ny(n,e,t=!1){let r,s;return le(n)?r=n:(r=n.get,s=n.set),new ty(r,s,t)}const Xi={},bo=new WeakMap;let ur;function ry(n,e=!1,t=ur){if(t){let r=bo.get(t);r||bo.set(t,r=[]),r.push(n)}}function sy(n,e,t=Ae){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:c,call:l}=t,h=q=>s?q:Et(q)||s===!1||s===0?on(q,1):on(q);let d,p,y,b,V=!1,M=!1;if(Me(n)?(p=()=>n.value,V=Et(n)):un(n)?(p=()=>h(n),V=!0):re(n)?(M=!0,V=n.some(q=>un(q)||Et(q)),p=()=>n.map(q=>{if(Me(q))return q.value;if(un(q))return h(q);if(le(q))return l?l(q,2):q()})):le(n)?e?p=l?()=>l(n,2):n:p=()=>{if(y){fn();try{y()}finally{dn()}}const q=ur;ur=d;try{return l?l(n,3,[b]):n(b)}finally{ur=q}}:p=$t,e&&s){const q=p,oe=s===!0?1/0:s;p=()=>on(q(),oe)}const L=Ed(),z=()=>{d.stop(),L&&L.active&&Xc(L.effects,d)};if(i&&e){const q=e;e=(...oe)=>{q(...oe),z()}}let K=M?new Array(n.length).fill(Xi):Xi;const G=q=>{if(!(!(d.flags&1)||!d.dirty&&!q))if(e){const oe=d.run();if(s||V||(M?oe.some((ve,I)=>Un(ve,K[I])):Un(oe,K))){y&&y();const ve=ur;ur=d;try{const I=[oe,K===Xi?void 0:M&&K[0]===Xi?[]:K,b];K=oe,l?l(e,3,I):e(...I)}finally{ur=ve}}}else d.run()};return c&&c(G),d=new Td(p),d.scheduler=a?()=>a(G,!1):G,b=q=>ry(q,!1,d),y=d.onStop=()=>{const q=bo.get(d);if(q){if(l)l(q,4);else for(const oe of q)oe();bo.delete(d)}},e?r?G(!0):K=d.run():a?a(G.bind(null,!0),!0):d.run(),z.pause=d.pause.bind(d),z.resume=d.resume.bind(d),z.stop=z,z}function on(n,e=1/0,t){if(e<=0||!Ce(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Me(n))on(n.value,e,t);else if(re(n))for(let r=0;r<n.length;r++)on(n[r],e,t);else if(ld(n)||zr(n))n.forEach(r=>{on(r,e,t)});else if(fd(n)){for(const r in n)on(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&on(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _i(n,e,t,r){try{return r?n(...r):n()}catch(s){ia(s,e,t)}}function Gt(n,e,t,r){if(le(n)){const s=_i(n,e,t,r);return s&&ud(s)&&s.catch(i=>{ia(i,e,t)}),s}if(re(n)){const s=[];for(let i=0;i<n.length;i++)s.push(Gt(n[i],e,t,r));return s}}function ia(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ae;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;c;){const d=c.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](n,l,h)===!1)return}c=c.parent}if(i){fn(),_i(i,null,10,[n,l,h]),dn();return}}iy(n,t,s,r,a)}function iy(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const pt=[];let Ut=-1;const Wr=[];let kn=null,Ur=0;const Md=Promise.resolve();let So=null;function Ld(n){const e=So||Md;return n?e.then(this?n.bind(this):n):e}function oy(n){let e=Ut+1,t=pt.length;for(;e<t;){const r=e+t>>>1,s=pt[r],i=si(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function cl(n){if(!(n.flags&1)){const e=si(n),t=pt[pt.length-1];!t||!(n.flags&2)&&e>=si(t)?pt.push(n):pt.splice(oy(e),0,n),n.flags|=1,Fd()}}function Fd(){So||(So=Md.then(Bd))}function ay(n){re(n)?Wr.push(...n):kn&&n.id===-1?kn.splice(Ur+1,0,n):n.flags&1||(Wr.push(n),n.flags|=1),Fd()}function eh(n,e,t=Ut+1){for(;t<pt.length;t++){const r=pt[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;pt.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ud(n){if(Wr.length){const e=[...new Set(Wr)].sort((t,r)=>si(t)-si(r));if(Wr.length=0,kn){kn.push(...e);return}for(kn=e,Ur=0;Ur<kn.length;Ur++){const t=kn[Ur];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}kn=null,Ur=0}}const si=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Bd(n){try{for(Ut=0;Ut<pt.length;Ut++){const e=pt[Ut];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),_i(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ut<pt.length;Ut++){const e=pt[Ut];e&&(e.flags&=-2)}Ut=-1,pt.length=0,Ud(),So=null,(pt.length||Wr.length)&&Bd()}}let ct=null,jd=null;function Ro(n){const e=ct;return ct=n,jd=n&&n.type.__scopeId||null,e}function Ns(n,e=ct,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&uh(-1);const i=Ro(e);let a;try{a=n(...s)}finally{Ro(i),r._d&&uh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Lr(n,e){if(ct===null)return n;const t=la(ct),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,c,l=Ae]=e[s];i&&(le(i)&&(i={mounted:i,updated:i}),i.deep&&on(a),r.push({dir:i,instance:t,value:a,oldValue:void 0,arg:c,modifiers:l}))}return n}function cr(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(fn(),Gt(l,t,8,[n.el,c,n,e]),dn())}}const cy=Symbol("_vte"),ly=n=>n.__isTeleport,uy=Symbol("_leaveCb");function ll(n,e){n.shapeFlag&6&&n.component?(n.transition=e,ll(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function yi(n,e){return le(n)?lt({name:n.name},e,{setup:n}):n}function $d(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const Co=new WeakMap;function qs(n,e,t,r,s=!1){if(re(n)){n.forEach((V,M)=>qs(V,e&&(re(e)?e[M]:e),t,r,s));return}if(Kr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&qs(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?la(r.component):r.el,a=s?null:i,{i:c,r:l}=n,h=e&&e.r,d=c.refs===Ae?c.refs={}:c.refs,p=c.setupState,y=ye(p),b=p===Ae?cd:V=>Te(y,V);if(h!=null&&h!==l){if(th(e),Be(h))d[h]=null,b(h)&&(p[h]=null);else if(Me(h)){h.value=null;const V=e;V.k&&(d[V.k]=null)}}if(le(l))_i(l,c,12,[a,d]);else{const V=Be(l),M=Me(l);if(V||M){const L=()=>{if(n.f){const z=V?b(l)?p[l]:d[l]:l.value;if(s)re(z)&&Xc(z,i);else if(re(z))z.includes(i)||z.push(i);else if(V)d[l]=[i],b(l)&&(p[l]=d[l]);else{const K=[i];l.value=K,n.k&&(d[n.k]=K)}}else V?(d[l]=a,b(l)&&(p[l]=a)):M&&(l.value=a,n.k&&(d[n.k]=a))};if(a){const z=()=>{L(),Co.delete(n)};z.id=-1,Co.set(n,z),yt(z,t)}else th(n),L()}}}function th(n){const e=Co.get(n);e&&(e.flags|=8,Co.delete(n))}ta().requestIdleCallback;ta().cancelIdleCallback;const Kr=n=>!!n.type.__asyncLoader,Hd=n=>n.type.__isKeepAlive;function hy(n,e){qd(n,"a",e)}function fy(n,e){qd(n,"da",e)}function qd(n,e,t=gt){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(oa(e,r,t),t){let s=t.parent;for(;s&&s.parent;)Hd(s.parent.vnode)&&dy(r,e,t,s),s=s.parent}}function dy(n,e,t,r){const s=oa(e,n,r,!0);zd(()=>{Xc(r[e],s)},t)}function oa(n,e,t=gt,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{fn();const c=vi(t),l=Gt(e,t,n,a);return c(),dn(),l});return r?s.unshift(i):s.push(i),i}}const En=n=>(e,t=gt)=>{(!oi||n==="sp")&&oa(n,(...r)=>e(...r),t)},py=En("bm"),gy=En("m"),my=En("bu"),_y=En("u"),yy=En("bum"),zd=En("um"),vy=En("sp"),Ey=En("rtg"),Ty=En("rtc");function Iy(n,e=gt){oa("ec",n,e)}const wy=Symbol.for("v-ndc");function On(n,e,t,r){let s;const i=t,a=re(n);if(a||Be(n)){const c=a&&un(n);let l=!1,h=!1;c&&(l=!Et(n),h=pn(n),n=na(n)),s=new Array(n.length);for(let d=0,p=n.length;d<p;d++)s[d]=e(l?h?Zr(xt(n[d])):xt(n[d]):n[d],d,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let c=0;c<n;c++)s[c]=e(c+1,c,void 0,i)}else if(Ce(n))if(n[Symbol.iterator])s=Array.from(n,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(n);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const d=c[l];s[l]=e(n[d],d,l,i)}}else s=[];return s}function co(n,e,t={},r,s){if(ct.ce||ct.parent&&Kr(ct.parent)&&ct.parent.ce){const h=Object.keys(t).length>0;return e!=="default"&&(t.name=e),ge(),Nn(xe,null,[Tt("slot",t,r)],h?-2:64)}let i=n[e];i&&i._c&&(i._d=!1),ge();const a=i&&Wd(i(t)),c=t.key||a&&a.key,l=Nn(xe,{key:(c&&!Nt(c)?c:`_${e}`)+(!a&&r?"_fb":"")},a||[],a&&n._===1?64:-2);return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function Wd(n){return n.some(e=>fl(e)?!(e.type===gn||e.type===xe&&!Wd(e.children)):!0)?n:null}const mc=n=>n?dp(n)?la(n):mc(n.parent):null,zs=lt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>mc(n.parent),$root:n=>mc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Gd(n),$forceUpdate:n=>n.f||(n.f=()=>{cl(n.update)}),$nextTick:n=>n.n||(n.n=Ld.bind(n.proxy)),$watch:n=>My.bind(n)}),Ga=(n,e)=>n!==Ae&&!n.__isScriptSetup&&Te(n,e),Ay={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=n;if(e[0]!=="$"){const y=a[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(Ga(r,e))return a[e]=1,r[e];if(s!==Ae&&Te(s,e))return a[e]=2,s[e];if(Te(i,e))return a[e]=3,i[e];if(t!==Ae&&Te(t,e))return a[e]=4,t[e];_c&&(a[e]=0)}}const h=zs[e];let d,p;if(h)return e==="$attrs"&&ot(n.attrs,"get",""),h(n);if((d=c.__cssModules)&&(d=d[e]))return d;if(t!==Ae&&Te(t,e))return a[e]=4,t[e];if(p=l.config.globalProperties,Te(p,e))return p[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return Ga(s,e)?(s[e]=t,!0):r!==Ae&&Te(r,e)?(r[e]=t,!0):Te(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,props:i,type:a}},c){let l;return!!(t[c]||n!==Ae&&c[0]!=="$"&&Te(n,c)||Ga(e,c)||Te(i,c)||Te(r,c)||Te(zs,c)||Te(s.config.globalProperties,c)||(l=a.__cssModules)&&l[c])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Te(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function nh(n){return re(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let _c=!0;function by(n){const e=Gd(n),t=n.proxy,r=n.ctx;_c=!1,e.beforeCreate&&rh(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:h,created:d,beforeMount:p,mounted:y,beforeUpdate:b,updated:V,activated:M,deactivated:L,beforeDestroy:z,beforeUnmount:K,destroyed:G,unmounted:q,render:oe,renderTracked:ve,renderTriggered:I,errorCaptured:m,serverPrefetch:_,expose:T,inheritAttrs:w,components:S,directives:E,filters:ht}=e;if(h&&Sy(h,r,null),a)for(const ae in a){const me=a[ae];le(me)&&(r[ae]=me.bind(t))}if(s){const ae=s.call(t,t);Ce(ae)&&(n.data=ra(ae))}if(_c=!0,i)for(const ae in i){const me=i[ae],Rt=le(me)?me.bind(t,t):le(me.get)?me.get.bind(t,t):$t,tr=!le(me)&&le(me.set)?me.set.bind(t):$t,Yt=gp({get:Rt,set:tr});Object.defineProperty(r,ae,{enumerable:!0,configurable:!0,get:()=>Yt.value,set:je=>Yt.value=je})}if(c)for(const ae in c)Kd(c[ae],r,t,ae);if(l){const ae=le(l)?l.call(t):l;Reflect.ownKeys(ae).forEach(me=>{Dy(me,ae[me])})}d&&rh(d,n,"c");function De(ae,me){re(me)?me.forEach(Rt=>ae(Rt.bind(t))):me&&ae(me.bind(t))}if(De(py,p),De(gy,y),De(my,b),De(_y,V),De(hy,M),De(fy,L),De(Iy,m),De(Ty,ve),De(Ey,I),De(yy,K),De(zd,q),De(vy,_),re(T))if(T.length){const ae=n.exposed||(n.exposed={});T.forEach(me=>{Object.defineProperty(ae,me,{get:()=>t[me],set:Rt=>t[me]=Rt,enumerable:!0})})}else n.exposed||(n.exposed={});oe&&n.render===$t&&(n.render=oe),w!=null&&(n.inheritAttrs=w),S&&(n.components=S),E&&(n.directives=E),_&&$d(n)}function Sy(n,e,t=$t){re(n)&&(n=yc(n));for(const r in n){const s=n[r];let i;Ce(s)?"default"in s?i=Ws(s.from||r,s.default,!0):i=Ws(s.from||r):i=Ws(s),Me(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function rh(n,e,t){Gt(re(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function Kd(n,e,t,r){let s=r.includes(".")?Xd(t,r):()=>t[r];if(Be(n)){const i=e[n];le(i)&&lo(s,i)}else if(le(n))lo(s,n.bind(t));else if(Ce(n))if(re(n))n.forEach(i=>Kd(i,e,t,r));else{const i=le(n.handler)?n.handler.bind(t):e[n.handler];le(i)&&lo(s,i,n)}}function Gd(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!t&&!r?l=e:(l={},s.length&&s.forEach(h=>Po(l,h,a,!0)),Po(l,e,a)),Ce(e)&&i.set(e,l),l}function Po(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&Po(n,i,t,!0),s&&s.forEach(a=>Po(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const c=Ry[a]||t&&t[a];n[a]=c?c(n[a],e[a]):e[a]}return n}const Ry={data:sh,props:ih,emits:ih,methods:xs,computed:xs,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:xs,directives:xs,watch:Py,provide:sh,inject:Cy};function sh(n,e){return e?n?function(){return lt(le(n)?n.call(this,this):n,le(e)?e.call(this,this):e)}:e:n}function Cy(n,e){return xs(yc(n),yc(e))}function yc(n){if(re(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function dt(n,e){return n?[...new Set([].concat(n,e))]:e}function xs(n,e){return n?lt(Object.create(null),n,e):e}function ih(n,e){return n?re(n)&&re(e)?[...new Set([...n,...e])]:lt(Object.create(null),nh(n),nh(e??{})):e}function Py(n,e){if(!n)return e;if(!e)return n;const t=lt(Object.create(null),n);for(const r in e)t[r]=dt(n[r],e[r]);return t}function Qd(){return{app:null,config:{isNativeTag:cd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vy=0;function ky(n,e){return function(r,s=null){le(r)||(r=lt({},r)),s!=null&&!Ce(s)&&(s=null);const i=Qd(),a=new WeakSet,c=[];let l=!1;const h=i.app={_uid:Vy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:dv,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&le(d.install)?(a.add(d),d.install(h,...p)):le(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,y){if(!l){const b=h._ceVNode||Tt(r,s);return b.appContext=i,y===!0?y="svg":y===!1&&(y=void 0),n(b,d,y),l=!0,h._container=d,d.__vue_app__=h,la(b.component)}},onUnmount(d){c.push(d)},unmount(){l&&(Gt(c,h._instance,16),n(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=mr;mr=h;try{return d()}finally{mr=p}}};return h}}let mr=null;function Dy(n,e){if(gt){let t=gt.provides;const r=gt.parent&&gt.parent.provides;r===t&&(t=gt.provides=Object.create(r)),t[n]=e}}function Ws(n,e,t=!1){const r=fp();if(r||mr){let s=mr?mr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&le(e)?e.call(r&&r.proxy):e}}function Oy(){return!!(fp()||mr)}const Ny=Symbol.for("v-scx"),xy=()=>Ws(Ny);function lo(n,e,t){return Jd(n,e,t)}function Jd(n,e,t=Ae){const{immediate:r,deep:s,flush:i,once:a}=t,c=lt({},t),l=e&&r||!e&&i!=="post";let h;if(oi){if(i==="sync"){const b=xy();h=b.__watcherHandles||(b.__watcherHandles=[])}else if(!l){const b=()=>{};return b.stop=$t,b.resume=$t,b.pause=$t,b}}const d=gt;c.call=(b,V,M)=>Gt(b,d,V,M);let p=!1;i==="post"?c.scheduler=b=>{yt(b,d&&d.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(b,V)=>{V?b():cl(b)}),c.augmentJob=b=>{e&&(b.flags|=4),p&&(b.flags|=2,d&&(b.id=d.uid,b.i=d))};const y=sy(n,e,c);return oi&&(h?h.push(y):l&&y()),y}function My(n,e,t){const r=this.proxy,s=Be(n)?n.includes(".")?Xd(r,n):()=>r[n]:n.bind(r,r);let i;le(e)?i=e:(i=e.handler,t=e);const a=vi(this),c=Jd(s,i.bind(r),t);return a(),c}function Xd(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const Ly=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Kn(e)}Modifiers`]||n[`${br(e)}Modifiers`];function Fy(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Ae;let s=t;const i=e.startsWith("update:"),a=i&&Ly(r,e.slice(7));a&&(a.trim&&(s=t.map(d=>Be(d)?d.trim():d)),a.number&&(s=t.map(Yc)));let c,l=r[c=Ha(e)]||r[c=Ha(Kn(e))];!l&&i&&(l=r[c=Ha(br(e))]),l&&Gt(l,n,6,s);const h=r[c+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,Gt(h,n,6,s)}}const Uy=new WeakMap;function Yd(n,e,t=!1){const r=t?Uy:e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},c=!1;if(!le(n)){const l=h=>{const d=Yd(h,e,!0);d&&(c=!0,lt(a,d))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!i&&!c?(Ce(n)&&r.set(n,null),null):(re(i)?i.forEach(l=>a[l]=null):lt(a,i),Ce(n)&&r.set(n,a),a)}function aa(n,e){return!n||!Yo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Te(n,e[0].toLowerCase()+e.slice(1))||Te(n,br(e))||Te(n,e))}function oh(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:h,renderCache:d,props:p,data:y,setupState:b,ctx:V,inheritAttrs:M}=n,L=Ro(n);let z,K;try{if(t.shapeFlag&4){const q=s||r,oe=q;z=jt(h.call(oe,q,d,p,b,y,V)),K=c}else{const q=e;z=jt(q.length>1?q(p,{attrs:c,slots:a,emit:l}):q(p,null)),K=e.props?c:By(c)}}catch(q){Ks.length=0,ia(q,n,1),z=Tt(gn)}let G=z;if(K&&M!==!1){const q=Object.keys(K),{shapeFlag:oe}=G;q.length&&oe&7&&(i&&q.some(Jc)&&(K=jy(K,i)),G=es(G,K,!1,!0))}return t.dirs&&(G=es(G,null,!1,!0),G.dirs=G.dirs?G.dirs.concat(t.dirs):t.dirs),t.transition&&ll(G,t.transition),z=G,Ro(L),z}const By=n=>{let e;for(const t in n)(t==="class"||t==="style"||Yo(t))&&((e||(e={}))[t]=n[t]);return e},jy=(n,e)=>{const t={};for(const r in n)(!Jc(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function $y(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?ah(r,a,h):!!a;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const y=d[p];if(a[y]!==r[y]&&!aa(h,y))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?ah(r,a,h):!0:!!a;return!1}function ah(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!aa(t,i))return!0}return!1}function Hy({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const Zd={},ep=()=>Object.create(Zd),tp=n=>Object.getPrototypeOf(n)===Zd;function qy(n,e,t,r=!1){const s={},i=ep();n.propsDefaults=Object.create(null),np(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:G_(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function zy(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,c=ye(s),[l]=n.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=n.vnode.dynamicProps;for(let p=0;p<d.length;p++){let y=d[p];if(aa(n.emitsOptions,y))continue;const b=e[y];if(l)if(Te(i,y))b!==i[y]&&(i[y]=b,h=!0);else{const V=Kn(y);s[V]=vc(l,c,V,b,n,!1)}else b!==i[y]&&(i[y]=b,h=!0)}}}else{np(n,e,s,i)&&(h=!0);let d;for(const p in c)(!e||!Te(e,p)&&((d=br(p))===p||!Te(e,d)))&&(l?t&&(t[p]!==void 0||t[d]!==void 0)&&(s[p]=vc(l,c,p,void 0,n,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Te(e,p))&&(delete i[p],h=!0)}h&&sn(n.attrs,"set","")}function np(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,c;if(e)for(let l in e){if(js(l))continue;const h=e[l];let d;s&&Te(s,d=Kn(l))?!i||!i.includes(d)?t[d]=h:(c||(c={}))[d]=h:aa(n.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,a=!0)}if(i){const l=ye(t),h=c||Ae;for(let d=0;d<i.length;d++){const p=i[d];t[p]=vc(s,l,p,h[p],n,!Te(h,p))}}return a}function vc(n,e,t,r,s,i){const a=n[t];if(a!=null){const c=Te(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&le(l)){const{propsDefaults:h}=s;if(t in h)r=h[t];else{const d=vi(s);r=h[t]=l.call(null,e),d()}}else r=l;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===br(t))&&(r=!0))}return r}const Wy=new WeakMap;function rp(n,e,t=!1){const r=t?Wy:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},c=[];let l=!1;if(!le(n)){const d=p=>{l=!0;const[y,b]=rp(p,e,!0);lt(a,y),b&&c.push(...b)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!i&&!l)return Ce(n)&&r.set(n,qr),qr;if(re(i))for(let d=0;d<i.length;d++){const p=Kn(i[d]);ch(p)&&(a[p]=Ae)}else if(i)for(const d in i){const p=Kn(d);if(ch(p)){const y=i[d],b=a[p]=re(y)||le(y)?{type:y}:lt({},y),V=b.type;let M=!1,L=!0;if(re(V))for(let z=0;z<V.length;++z){const K=V[z],G=le(K)&&K.name;if(G==="Boolean"){M=!0;break}else G==="String"&&(L=!1)}else M=le(V)&&V.name==="Boolean";b[0]=M,b[1]=L,(M||Te(b,"default"))&&c.push(p)}}const h=[a,c];return Ce(n)&&r.set(n,h),h}function ch(n){return n[0]!=="$"&&!js(n)}const ul=n=>n==="_"||n==="_ctx"||n==="$stable",hl=n=>re(n)?n.map(jt):[jt(n)],Ky=(n,e,t)=>{if(e._n)return e;const r=Ns((...s)=>hl(e(...s)),t);return r._c=!1,r},sp=(n,e,t)=>{const r=n._ctx;for(const s in n){if(ul(s))continue;const i=n[s];if(le(i))e[s]=Ky(s,i,r);else if(i!=null){const a=hl(i);e[s]=()=>a}}},ip=(n,e)=>{const t=hl(e);n.slots.default=()=>t},op=(n,e,t)=>{for(const r in e)(t||!ul(r))&&(n[r]=e[r])},Gy=(n,e,t)=>{const r=n.slots=ep();if(n.vnode.shapeFlag&32){const s=e._;s?(op(r,e,t),t&&pd(r,"_",s,!0)):sp(e,r)}else e&&ip(n,e)},Qy=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=Ae;if(r.shapeFlag&32){const c=e._;c?t&&c===1?i=!1:op(s,e,t):(i=!e.$stable,sp(e,s)),a=e}else e&&(ip(n,e),a={default:1});if(i)for(const c in s)!ul(c)&&a[c]==null&&delete s[c]},yt=ev;function Jy(n){return Xy(n)}function Xy(n,e){const t=ta();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:d,parentNode:p,nextSibling:y,setScopeId:b=$t,insertStaticContent:V}=n,M=(v,A,P,F=null,O=null,N=null,$=void 0,B=null,U=!!A.dynamicChildren)=>{if(v===A)return;v&&!Ds(v,A)&&(F=Zt(v),je(v,O,N,!0),v=null),A.patchFlag===-2&&(U=!1,A.dynamicChildren=null);const{type:x,ref:Y,shapeFlag:H}=A;switch(x){case ca:L(v,A,P,F);break;case gn:z(v,A,P,F);break;case Ja:v==null&&K(A,P,F,$);break;case xe:S(v,A,P,F,O,N,$,B,U);break;default:H&1?oe(v,A,P,F,O,N,$,B,U):H&6?E(v,A,P,F,O,N,$,B,U):(H&64||H&128)&&x.process(v,A,P,F,O,N,$,B,U,Lt)}Y!=null&&O?qs(Y,v&&v.ref,N,A||v,!A):Y==null&&v&&v.ref!=null&&qs(v.ref,null,N,v,!0)},L=(v,A,P,F)=>{if(v==null)r(A.el=c(A.children),P,F);else{const O=A.el=v.el;A.children!==v.children&&h(O,A.children)}},z=(v,A,P,F)=>{v==null?r(A.el=l(A.children||""),P,F):A.el=v.el},K=(v,A,P,F)=>{[v.el,v.anchor]=V(v.children,A,P,F,v.el,v.anchor)},G=({el:v,anchor:A},P,F)=>{let O;for(;v&&v!==A;)O=y(v),r(v,P,F),v=O;r(A,P,F)},q=({el:v,anchor:A})=>{let P;for(;v&&v!==A;)P=y(v),s(v),v=P;s(A)},oe=(v,A,P,F,O,N,$,B,U)=>{if(A.type==="svg"?$="svg":A.type==="math"&&($="mathml"),v==null)ve(A,P,F,O,N,$,B,U);else{const x=v.el&&v.el._isVueCE?v.el:null;try{x&&x._beginPatch(),_(v,A,O,N,$,B,U)}finally{x&&x._endPatch()}}},ve=(v,A,P,F,O,N,$,B)=>{let U,x;const{props:Y,shapeFlag:H,transition:J,dirs:te}=v;if(U=v.el=a(v.type,N,Y&&Y.is,Y),H&8?d(U,v.children):H&16&&m(v.children,U,null,F,O,Qa(v,N),$,B),te&&cr(v,null,F,"created"),I(U,v,v.scopeId,$,F),Y){for(const ce in Y)ce!=="value"&&!js(ce)&&i(U,ce,null,Y[ce],N,F);"value"in Y&&i(U,"value",null,Y.value,N),(x=Y.onVnodeBeforeMount)&&Ft(x,F,v)}te&&cr(v,null,F,"beforeMount");const Z=Yy(O,J);Z&&J.beforeEnter(U),r(U,A,P),((x=Y&&Y.onVnodeMounted)||Z||te)&&yt(()=>{x&&Ft(x,F,v),Z&&J.enter(U),te&&cr(v,null,F,"mounted")},O)},I=(v,A,P,F,O)=>{if(P&&b(v,P),F)for(let N=0;N<F.length;N++)b(v,F[N]);if(O){let N=O.subTree;if(A===N||lp(N.type)&&(N.ssContent===A||N.ssFallback===A)){const $=O.vnode;I(v,$,$.scopeId,$.slotScopeIds,O.parent)}}},m=(v,A,P,F,O,N,$,B,U=0)=>{for(let x=U;x<v.length;x++){const Y=v[x]=B?Dn(v[x]):jt(v[x]);M(null,Y,A,P,F,O,N,$,B)}},_=(v,A,P,F,O,N,$)=>{const B=A.el=v.el;let{patchFlag:U,dynamicChildren:x,dirs:Y}=A;U|=v.patchFlag&16;const H=v.props||Ae,J=A.props||Ae;let te;if(P&&lr(P,!1),(te=J.onVnodeBeforeUpdate)&&Ft(te,P,A,v),Y&&cr(A,v,P,"beforeUpdate"),P&&lr(P,!0),(H.innerHTML&&J.innerHTML==null||H.textContent&&J.textContent==null)&&d(B,""),x?T(v.dynamicChildren,x,B,P,F,Qa(A,O),N):$||me(v,A,B,null,P,F,Qa(A,O),N,!1),U>0){if(U&16)w(B,H,J,P,O);else if(U&2&&H.class!==J.class&&i(B,"class",null,J.class,O),U&4&&i(B,"style",H.style,J.style,O),U&8){const Z=A.dynamicProps;for(let ce=0;ce<Z.length;ce++){const de=Z[ce],Ke=H[de],Ge=J[de];(Ge!==Ke||de==="value")&&i(B,de,Ke,Ge,O,P)}}U&1&&v.children!==A.children&&d(B,A.children)}else!$&&x==null&&w(B,H,J,P,O);((te=J.onVnodeUpdated)||Y)&&yt(()=>{te&&Ft(te,P,A,v),Y&&cr(A,v,P,"updated")},F)},T=(v,A,P,F,O,N,$)=>{for(let B=0;B<A.length;B++){const U=v[B],x=A[B],Y=U.el&&(U.type===xe||!Ds(U,x)||U.shapeFlag&198)?p(U.el):P;M(U,x,Y,null,F,O,N,$,!0)}},w=(v,A,P,F,O)=>{if(A!==P){if(A!==Ae)for(const N in A)!js(N)&&!(N in P)&&i(v,N,A[N],null,O,F);for(const N in P){if(js(N))continue;const $=P[N],B=A[N];$!==B&&N!=="value"&&i(v,N,B,$,O,F)}"value"in P&&i(v,"value",A.value,P.value,O)}},S=(v,A,P,F,O,N,$,B,U)=>{const x=A.el=v?v.el:c(""),Y=A.anchor=v?v.anchor:c("");let{patchFlag:H,dynamicChildren:J,slotScopeIds:te}=A;te&&(B=B?B.concat(te):te),v==null?(r(x,P,F),r(Y,P,F),m(A.children||[],P,Y,O,N,$,B,U)):H>0&&H&64&&J&&v.dynamicChildren?(T(v.dynamicChildren,J,P,O,N,$,B),(A.key!=null||O&&A===O.subTree)&&ap(v,A,!0)):me(v,A,P,Y,O,N,$,B,U)},E=(v,A,P,F,O,N,$,B,U)=>{A.slotScopeIds=B,v==null?A.shapeFlag&512?O.ctx.activate(A,P,F,$,U):ht(A,P,F,O,N,$,U):Mt(v,A,U)},ht=(v,A,P,F,O,N,$)=>{const B=v.component=av(v,F,O);if(Hd(v)&&(B.ctx.renderer=Lt),cv(B,!1,$),B.asyncDep){if(O&&O.registerDep(B,De,$),!v.el){const U=B.subTree=Tt(gn);z(null,U,A,P),v.placeholder=U.el}}else De(B,v,A,P,O,N,$)},Mt=(v,A,P)=>{const F=A.component=v.component;if($y(v,A,P))if(F.asyncDep&&!F.asyncResolved){ae(F,A,P);return}else F.next=A,F.update();else A.el=v.el,F.vnode=A},De=(v,A,P,F,O,N,$)=>{const B=()=>{if(v.isMounted){let{next:H,bu:J,u:te,parent:Z,vnode:ce}=v;{const et=cp(v);if(et){H&&(H.el=ce.el,ae(v,H,$)),et.asyncDep.then(()=>{v.isUnmounted||B()});return}}let de=H,Ke;lr(v,!1),H?(H.el=ce.el,ae(v,H,$)):H=ce,J&&ao(J),(Ke=H.props&&H.props.onVnodeBeforeUpdate)&&Ft(Ke,Z,H,ce),lr(v,!0);const Ge=oh(v),wt=v.subTree;v.subTree=Ge,M(wt,Ge,p(wt.el),Zt(wt),v,O,N),H.el=Ge.el,de===null&&Hy(v,Ge.el),te&&yt(te,O),(Ke=H.props&&H.props.onVnodeUpdated)&&yt(()=>Ft(Ke,Z,H,ce),O)}else{let H;const{el:J,props:te}=A,{bm:Z,m:ce,parent:de,root:Ke,type:Ge}=v,wt=Kr(A);lr(v,!1),Z&&ao(Z),!wt&&(H=te&&te.onVnodeBeforeMount)&&Ft(H,de,A),lr(v,!0);{Ke.ce&&Ke.ce._def.shadowRoot!==!1&&Ke.ce._injectChildStyle(Ge);const et=v.subTree=oh(v);M(null,et,P,F,v,O,N),A.el=et.el}if(ce&&yt(ce,O),!wt&&(H=te&&te.onVnodeMounted)){const et=A;yt(()=>Ft(H,de,et),O)}(A.shapeFlag&256||de&&Kr(de.vnode)&&de.vnode.shapeFlag&256)&&v.a&&yt(v.a,O),v.isMounted=!0,A=P=F=null}};v.scope.on();const U=v.effect=new Td(B);v.scope.off();const x=v.update=U.run.bind(U),Y=v.job=U.runIfDirty.bind(U);Y.i=v,Y.id=v.uid,U.scheduler=()=>cl(Y),lr(v,!0),x()},ae=(v,A,P)=>{A.component=v;const F=v.vnode.props;v.vnode=A,v.next=null,zy(v,A.props,F,P),Qy(v,A.children,P),fn(),eh(v),dn()},me=(v,A,P,F,O,N,$,B,U=!1)=>{const x=v&&v.children,Y=v?v.shapeFlag:0,H=A.children,{patchFlag:J,shapeFlag:te}=A;if(J>0){if(J&128){tr(x,H,P,F,O,N,$,B,U);return}else if(J&256){Rt(x,H,P,F,O,N,$,B,U);return}}te&8?(Y&16&&rr(x,O,N),H!==x&&d(P,H)):Y&16?te&16?tr(x,H,P,F,O,N,$,B,U):rr(x,O,N,!0):(Y&8&&d(P,""),te&16&&m(H,P,F,O,N,$,B,U))},Rt=(v,A,P,F,O,N,$,B,U)=>{v=v||qr,A=A||qr;const x=v.length,Y=A.length,H=Math.min(x,Y);let J;for(J=0;J<H;J++){const te=A[J]=U?Dn(A[J]):jt(A[J]);M(v[J],te,P,null,O,N,$,B,U)}x>Y?rr(v,O,N,!0,!1,H):m(A,P,F,O,N,$,B,U,H)},tr=(v,A,P,F,O,N,$,B,U)=>{let x=0;const Y=A.length;let H=v.length-1,J=Y-1;for(;x<=H&&x<=J;){const te=v[x],Z=A[x]=U?Dn(A[x]):jt(A[x]);if(Ds(te,Z))M(te,Z,P,null,O,N,$,B,U);else break;x++}for(;x<=H&&x<=J;){const te=v[H],Z=A[J]=U?Dn(A[J]):jt(A[J]);if(Ds(te,Z))M(te,Z,P,null,O,N,$,B,U);else break;H--,J--}if(x>H){if(x<=J){const te=J+1,Z=te<Y?A[te].el:F;for(;x<=J;)M(null,A[x]=U?Dn(A[x]):jt(A[x]),P,Z,O,N,$,B,U),x++}}else if(x>J)for(;x<=H;)je(v[x],O,N,!0),x++;else{const te=x,Z=x,ce=new Map;for(x=Z;x<=J;x++){const Qe=A[x]=U?Dn(A[x]):jt(A[x]);Qe.key!=null&&ce.set(Qe.key,x)}let de,Ke=0;const Ge=J-Z+1;let wt=!1,et=0;const In=new Array(Ge);for(x=0;x<Ge;x++)In[x]=0;for(x=te;x<=H;x++){const Qe=v[x];if(Ke>=Ge){je(Qe,O,N,!0);continue}let At;if(Qe.key!=null)At=ce.get(Qe.key);else for(de=Z;de<=J;de++)if(In[de-Z]===0&&Ds(Qe,A[de])){At=de;break}At===void 0?je(Qe,O,N,!0):(In[At-Z]=x+1,At>=et?et=At:wt=!0,M(Qe,A[At],P,null,O,N,$,B,U),Ke++)}const ys=wt?Zy(In):qr;for(de=ys.length-1,x=Ge-1;x>=0;x--){const Qe=Z+x,At=A[Qe],Oi=A[Qe+1],kr=Qe+1<Y?Oi.el||Oi.placeholder:F;In[x]===0?M(null,At,P,kr,O,N,$,B,U):wt&&(de<0||x!==ys[de]?Yt(At,P,kr,2):de--)}}},Yt=(v,A,P,F,O=null)=>{const{el:N,type:$,transition:B,children:U,shapeFlag:x}=v;if(x&6){Yt(v.component.subTree,A,P,F);return}if(x&128){v.suspense.move(A,P,F);return}if(x&64){$.move(v,A,P,Lt);return}if($===xe){r(N,A,P);for(let H=0;H<U.length;H++)Yt(U[H],A,P,F);r(v.anchor,A,P);return}if($===Ja){G(v,A,P);return}if(F!==2&&x&1&&B)if(F===0)B.beforeEnter(N),r(N,A,P),yt(()=>B.enter(N),O);else{const{leave:H,delayLeave:J,afterLeave:te}=B,Z=()=>{v.ctx.isUnmounted?s(N):r(N,A,P)},ce=()=>{N._isLeaving&&N[uy](!0),H(N,()=>{Z(),te&&te()})};J?J(N,Z,ce):ce()}else r(N,A,P)},je=(v,A,P,F=!1,O=!1)=>{const{type:N,props:$,ref:B,children:U,dynamicChildren:x,shapeFlag:Y,patchFlag:H,dirs:J,cacheIndex:te}=v;if(H===-2&&(O=!1),B!=null&&(fn(),qs(B,null,P,v,!0),dn()),te!=null&&(A.renderCache[te]=void 0),Y&256){A.ctx.deactivate(v);return}const Z=Y&1&&J,ce=!Kr(v);let de;if(ce&&(de=$&&$.onVnodeBeforeUnmount)&&Ft(de,A,v),Y&6)nr(v.component,P,F);else{if(Y&128){v.suspense.unmount(P,F);return}Z&&cr(v,null,A,"beforeUnmount"),Y&64?v.type.remove(v,A,P,Lt,F):x&&!x.hasOnce&&(N!==xe||H>0&&H&64)?rr(x,A,P,!1,!0):(N===xe&&H&384||!O&&Y&16)&&rr(U,A,P),F&&$e(v)}(ce&&(de=$&&$.onVnodeUnmounted)||Z)&&yt(()=>{de&&Ft(de,A,v),Z&&cr(v,null,A,"unmounted")},P)},$e=v=>{const{type:A,el:P,anchor:F,transition:O}=v;if(A===xe){Ca(P,F);return}if(A===Ja){q(v);return}const N=()=>{s(P),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(v.shapeFlag&1&&O&&!O.persisted){const{leave:$,delayLeave:B}=O,U=()=>$(P,N);B?B(v.el,N,U):U()}else N()},Ca=(v,A)=>{let P;for(;v!==A;)P=y(v),s(v),v=P;s(A)},nr=(v,A,P)=>{const{bum:F,scope:O,job:N,subTree:$,um:B,m:U,a:x}=v;lh(U),lh(x),F&&ao(F),O.stop(),N&&(N.flags|=8,je($,v,A,P)),B&&yt(B,A),yt(()=>{v.isUnmounted=!0},A)},rr=(v,A,P,F=!1,O=!1,N=0)=>{for(let $=N;$<v.length;$++)je(v[$],A,P,F,O)},Zt=v=>{if(v.shapeFlag&6)return Zt(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const A=y(v.anchor||v.el),P=A&&A[cy];return P?y(P):A};let ms=!1;const Di=(v,A,P)=>{v==null?A._vnode&&je(A._vnode,null,null,!0):M(A._vnode||null,v,A,null,null,null,P),A._vnode=v,ms||(ms=!0,eh(),Ud(),ms=!1)},Lt={p:M,um:je,m:Yt,r:$e,mt:ht,mc:m,pc:me,pbc:T,n:Zt,o:n};return{render:Di,hydrate:void 0,createApp:ky(Di)}}function Qa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function lr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Yy(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function ap(n,e,t=!1){const r=n.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Dn(s[i]),c.el=a.el),!t&&c.patchFlag!==-2&&ap(a,c)),c.type===ca&&c.patchFlag!==-1&&(c.el=a.el),c.type===gn&&!c.el&&(c.el=a.el)}}function Zy(n){const e=n.slice(),t=[0];let r,s,i,a,c;const l=n.length;for(r=0;r<l;r++){const h=n[r];if(h!==0){if(s=t[t.length-1],n[s]<h){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)c=i+a>>1,n[t[c]]<h?i=c+1:a=c;h<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function cp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:cp(e)}function lh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const lp=n=>n.__isSuspense;function ev(n,e){e&&e.pendingBranch?re(n)?e.effects.push(...n):e.effects.push(n):ay(n)}const xe=Symbol.for("v-fgt"),ca=Symbol.for("v-txt"),gn=Symbol.for("v-cmt"),Ja=Symbol.for("v-stc"),Ks=[];let vt=null;function ge(n=!1){Ks.push(vt=n?null:[])}function tv(){Ks.pop(),vt=Ks[Ks.length-1]||null}let ii=1;function uh(n,e=!1){ii+=n,n<0&&vt&&e&&(vt.hasOnce=!0)}function up(n){return n.dynamicChildren=ii>0?vt||qr:null,tv(),ii>0&&vt&&vt.push(n),n}function Se(n,e,t,r,s,i){return up(be(n,e,t,r,s,i,!0))}function Nn(n,e,t,r,s){return up(Tt(n,e,t,r,s,!0))}function fl(n){return n?n.__v_isVNode===!0:!1}function Ds(n,e){return n.type===e.type&&n.key===e.key}const hp=({key:n})=>n??null,uo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Be(n)||Me(n)||le(n)?{i:ct,r:n,k:e,f:!!t}:n:null);function be(n,e=null,t=null,r=0,s=null,i=n===xe?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&hp(e),ref:e&&uo(e),scopeId:jd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ct};return c?(dl(l,t),i&128&&n.normalize(l)):t&&(l.shapeFlag|=Be(t)?8:16),ii>0&&!a&&vt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&vt.push(l),l}const Tt=nv;function nv(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===wy)&&(n=gn),fl(n)){const c=es(n,e,!0);return t&&dl(c,t),ii>0&&!i&&vt&&(c.shapeFlag&6?vt[vt.indexOf(n)]=c:vt.push(c)),c.patchFlag=-2,c}if(fv(n)&&(n=n.__vccOpts),e){e=rv(e);let{class:c,style:l}=e;c&&!Be(c)&&(e.class=Zc(c)),Ce(l)&&(sa(l)&&!re(l)&&(l=lt({},l)),e.style=cs(l))}const a=Be(n)?1:lp(n)?128:ly(n)?64:Ce(n)?4:le(n)?2:0;return be(n,e,t,r,s,a,i,!0)}function rv(n){return n?sa(n)||tp(n)?lt({},n):n:null}function es(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:l}=n,h=e?sv(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&hp(h),ref:e&&e.ref?t&&i?re(i)?i.concat(uo(e)):[i,uo(e)]:uo(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:c,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==xe?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&es(n.ssContent),ssFallback:n.ssFallback&&es(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&r&&ll(d,l.clone(d)),d}function Ms(n=" ",e=0){return Tt(ca,null,n,e)}function Gs(n="",e=!1){return e?(ge(),Nn(gn,null,n)):Tt(gn,null,n)}function jt(n){return n==null||typeof n=="boolean"?Tt(gn):re(n)?Tt(xe,null,n.slice()):fl(n)?Dn(n):Tt(ca,null,String(n))}function Dn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:es(n)}function dl(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(re(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),dl(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!tp(e)?e._ctx=ct:s===3&&ct&&(ct.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else le(e)?(e={default:e,_ctx:ct},t=32):(e=String(e),r&64?(t=16,e=[Ms(e)]):t=8);n.children=e,n.shapeFlag|=t}function sv(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Zc([e.class,r.class]));else if(s==="style")e.style=cs([e.style,r.style]);else if(Yo(s)){const i=e[s],a=r[s];a&&i!==a&&!(re(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Ft(n,e,t,r=null){Gt(n,e,7,[t,r])}const iv=Qd();let ov=0;function av(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||iv,i={uid:ov++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new yd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:rp(r,s),emitsOptions:Yd(r,s),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:r.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Fy.bind(null,i),n.ce&&n.ce(i),i}let gt=null;const fp=()=>gt||ct;let Vo,Ec;{const n=ta(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Vo=e("__VUE_INSTANCE_SETTERS__",t=>gt=t),Ec=e("__VUE_SSR_SETTERS__",t=>oi=t)}const vi=n=>{const e=gt;return Vo(n),n.scope.on(),()=>{n.scope.off(),Vo(e)}},hh=()=>{gt&&gt.scope.off(),Vo(null)};function dp(n){return n.vnode.shapeFlag&4}let oi=!1;function cv(n,e=!1,t=!1){e&&Ec(e);const{props:r,children:s}=n.vnode,i=dp(n);qy(n,r,i,e),Gy(n,s,t||e);const a=i?lv(n,e):void 0;return e&&Ec(!1),a}function lv(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Ay);const{setup:r}=t;if(r){fn();const s=n.setupContext=r.length>1?hv(n):null,i=vi(n),a=_i(r,n,0,[n.props,s]),c=ud(a);if(dn(),i(),(c||n.sp)&&!Kr(n)&&$d(n),c){if(a.then(hh,hh),e)return a.then(l=>{fh(n,l)}).catch(l=>{ia(l,n,0)});n.asyncDep=a}else fh(n,a)}else pp(n)}function fh(n,e,t){le(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ce(e)&&(n.setupState=xd(e)),pp(n)}function pp(n,e,t){const r=n.type;n.render||(n.render=r.render||$t);{const s=vi(n);fn();try{by(n)}finally{dn(),s()}}}const uv={get(n,e){return ot(n,"get",""),n[e]}};function hv(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,uv),slots:n.slots,emit:n.emit,expose:e}}function la(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(xd(ol(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in zs)return zs[t](n)},has(e,t){return t in e||t in zs}})):n.proxy}function fv(n){return le(n)&&"__vccOpts"in n}const gp=(n,e)=>ny(n,e,oi),dv="3.5.25";/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Tc;const dh=typeof window<"u"&&window.trustedTypes;if(dh)try{Tc=dh.createPolicy("vue",{createHTML:n=>n})}catch{}const mp=Tc?n=>Tc.createHTML(n):n=>n,pv="http://www.w3.org/2000/svg",gv="http://www.w3.org/1998/Math/MathML",rn=typeof document<"u"?document:null,ph=rn&&rn.createElement("template"),mv={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?rn.createElementNS(pv,n):e==="mathml"?rn.createElementNS(gv,n):t?rn.createElement(n,{is:t}):rn.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>rn.createTextNode(n),createComment:n=>rn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>rn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{ph.innerHTML=mp(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const c=ph.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},_v=Symbol("_vtc");function yv(n,e,t){const r=n[_v];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const gh=Symbol("_vod"),vv=Symbol("_vsh"),Ev=Symbol(""),Tv=/(?:^|;)\s*display\s*:/;function Iv(n,e,t){const r=n.style,s=Be(t);let i=!1;if(t&&!s){if(e)if(Be(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();t[c]==null&&ho(r,c,"")}else for(const a in e)t[a]==null&&ho(r,a,"");for(const a in t)a==="display"&&(i=!0),ho(r,a,t[a])}else if(s){if(e!==t){const a=r[Ev];a&&(t+=";"+a),r.cssText=t,i=Tv.test(t)}}else e&&n.removeAttribute("style");gh in n&&(n[gh]=i?r.display:"",n[vv]&&(r.display="none"))}const mh=/\s*!important$/;function ho(n,e,t){if(re(t))t.forEach(r=>ho(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=wv(n,e);mh.test(t)?n.setProperty(br(r),t.replace(mh,""),"important"):n[r]=t}}const _h=["Webkit","Moz","ms"],Xa={};function wv(n,e){const t=Xa[e];if(t)return t;let r=Kn(e);if(r!=="filter"&&r in n)return Xa[e]=r;r=dd(r);for(let s=0;s<_h.length;s++){const i=_h[s]+r;if(i in n)return Xa[e]=i}return e}const yh="http://www.w3.org/1999/xlink";function vh(n,e,t,r,s,i=S_(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(yh,e.slice(6,e.length)):n.setAttributeNS(yh,e,t):t==null||i&&!gd(t)?n.removeAttribute(e):n.setAttribute(e,i?"":Nt(t)?String(t):t)}function Eh(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?mp(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(c!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=gd(t):t==null&&c==="string"?(t="",a=!0):c==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function fr(n,e,t,r){n.addEventListener(e,t,r)}function Av(n,e,t,r){n.removeEventListener(e,t,r)}const Th=Symbol("_vei");function bv(n,e,t,r,s=null){const i=n[Th]||(n[Th]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=Sv(e);if(r){const h=i[e]=Pv(r,s);fr(n,c,h,l)}else a&&(Av(n,c,a,l),i[e]=void 0)}}const Ih=/(?:Once|Passive|Capture)$/;function Sv(n){let e;if(Ih.test(n)){e={};let r;for(;r=n.match(Ih);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):br(n.slice(2)),e]}let Ya=0;const Rv=Promise.resolve(),Cv=()=>Ya||(Rv.then(()=>Ya=0),Ya=Date.now());function Pv(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Gt(Vv(r,t.value),e,5,[r])};return t.value=n,t.attached=Cv(),t}function Vv(n,e){if(re(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const wh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,kv=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?yv(n,r,a):e==="style"?Iv(n,t,r):Yo(e)?Jc(e)||bv(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Dv(n,e,r,a))?(Eh(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&vh(n,e,r,a,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Be(r))?Eh(n,Kn(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),vh(n,e,r,a))};function Dv(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&wh(e)&&le(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return wh(e)&&Be(t)?!1:e in n}const ko=n=>{const e=n.props["onUpdate:modelValue"]||!1;return re(e)?t=>ao(e,t):e};function Ov(n){n.target.composing=!0}function Ah(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Gr=Symbol("_assign");function bh(n,e,t){return e&&(n=n.trim()),t&&(n=Yc(n)),n}const Nv={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[Gr]=ko(s);const i=r||s.props&&s.props.type==="number";fr(n,e?"change":"input",a=>{a.target.composing||n[Gr](bh(n.value,t,i))}),(t||i)&&fr(n,"change",()=>{n.value=bh(n.value,t,i)}),e||(fr(n,"compositionstart",Ov),fr(n,"compositionend",Ah),fr(n,"change",Ah))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},a){if(n[Gr]=ko(a),n.composing)return;const c=(i||n.type==="number")&&!/^0\d/.test(n.value)?Yc(n.value):n.value,l=e??"";c!==l&&(document.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===l)||(n.value=l))}},Os={created(n,{value:e},t){n.checked=wo(e,t.props.value),n[Gr]=ko(t),fr(n,"change",()=>{n[Gr](xv(n))})},beforeUpdate(n,{value:e,oldValue:t},r){n[Gr]=ko(r),e!==t&&(n.checked=wo(e,r.props.value))}};function xv(n){return"_value"in n?n._value:n.value}const Mv=lt({patchProp:kv},mv);let Sh;function Lv(){return Sh||(Sh=Jy(Mv))}const Fv=((...n)=>{const e=Lv().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=Bv(r);if(!s)return;const i=e._component;!le(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,Uv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function Uv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Bv(n){return Be(n)?document.querySelector(n):n}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let _p;const ua=n=>_p=n,yp=Symbol();function Ic(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var Qs;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Qs||(Qs={}));function jv(){const n=vd(!0),e=n.run(()=>al({}));let t=[],r=[];const s=ol({install(i){ua(s),s._a=i,i.provide(yp,s),i.config.globalProperties.$pinia=s,r.forEach(a=>t.push(a)),r=[]},use(i){return this._a?t.push(i):r.push(i),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const vp=()=>{};function Rh(n,e,t,r=vp){n.add(e);const s=()=>{n.delete(e)&&r()};return!t&&Ed()&&C_(s),s}function Fr(n,...e){n.forEach(t=>{t(...e)})}const $v=n=>n(),Ch=Symbol(),Za=Symbol();function wc(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,r)=>n.set(r,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const r=e[t],s=n[t];Ic(s)&&Ic(r)&&n.hasOwnProperty(t)&&!Me(r)&&!un(r)?n[t]=wc(s,r):n[t]=r}return n}const Hv=Symbol();function qv(n){return!Ic(n)||!Object.prototype.hasOwnProperty.call(n,Hv)}const{assign:Pn}=Object;function zv(n){return!!(Me(n)&&n.effect)}function Wv(n,e,t,r){const{state:s,actions:i,getters:a}=e,c=t.state.value[n];let l;function h(){c||(t.state.value[n]=s?s():{});const d=Y_(t.state.value[n]);return Pn(d,i,Object.keys(a||{}).reduce((p,y)=>(p[y]=ol(gp(()=>{ua(t);const b=t._s.get(n);return a[y].call(b,b)})),p),{}))}return l=Ep(n,h,e,t,r,!0),l}function Ep(n,e,t={},r,s,i){let a;const c=Pn({actions:{}},t),l={deep:!0};let h,d,p=new Set,y=new Set,b;const V=r.state.value[n];!i&&!V&&(r.state.value[n]={}),al({});let M;function L(m){let _;h=d=!1,typeof m=="function"?(m(r.state.value[n]),_={type:Qs.patchFunction,storeId:n,events:b}):(wc(r.state.value[n],m),_={type:Qs.patchObject,payload:m,storeId:n,events:b});const T=M=Symbol();Ld().then(()=>{M===T&&(h=!0)}),d=!0,Fr(p,_,r.state.value[n])}const z=i?function(){const{state:_}=t,T=_?_():{};this.$patch(w=>{Pn(w,T)})}:vp;function K(){a.stop(),p.clear(),y.clear(),r._s.delete(n)}const G=(m,_="")=>{if(Ch in m)return m[Za]=_,m;const T=function(){ua(r);const w=Array.from(arguments),S=new Set,E=new Set;function ht(ae){S.add(ae)}function Mt(ae){E.add(ae)}Fr(y,{args:w,name:T[Za],store:oe,after:ht,onError:Mt});let De;try{De=m.apply(this&&this.$id===n?this:oe,w)}catch(ae){throw Fr(E,ae),ae}return De instanceof Promise?De.then(ae=>(Fr(S,ae),ae)).catch(ae=>(Fr(E,ae),Promise.reject(ae))):(Fr(S,De),De)};return T[Ch]=!0,T[Za]=_,T},q={_p:r,$id:n,$onAction:Rh.bind(null,y),$patch:L,$reset:z,$subscribe(m,_={}){const T=Rh(p,m,_.detached,()=>w()),w=a.run(()=>lo(()=>r.state.value[n],S=>{(_.flush==="sync"?d:h)&&m({storeId:n,type:Qs.direct,events:b},S)},Pn({},l,_)));return T},$dispose:K},oe=ra(q);r._s.set(n,oe);const I=(r._a&&r._a.runWithContext||$v)(()=>r._e.run(()=>(a=vd()).run(()=>e({action:G}))));for(const m in I){const _=I[m];if(Me(_)&&!zv(_)||un(_))i||(V&&qv(_)&&(Me(_)?_.value=V[m]:wc(_,V[m])),r.state.value[n][m]=_);else if(typeof _=="function"){const T=G(_,m);I[m]=T,c.actions[m]=_}}return Pn(oe,I),Pn(ye(oe),I),Object.defineProperty(oe,"$state",{get:()=>r.state.value[n],set:m=>{L(_=>{Pn(_,m)})}}),r._p.forEach(m=>{Pn(oe,a.run(()=>m({store:oe,app:r._a,pinia:r,options:c})))}),V&&i&&t.hydrate&&t.hydrate(oe.$state,V),h=!0,d=!0,oe}/*! #__NO_SIDE_EFFECTS__ */function Kv(n,e,t){let r;const s=typeof e=="function";r=s?t:e;function i(a,c){const l=Oy();return a=a||(l?Ws(yp,null):null),a&&ua(a),a=_p,a._s.has(n)||(s?Ep(n,e,r,a):Wv(n,r,a)),a._s.get(n)}return i.$id=n,i}function Gv(n,e){if(n==null)return;let t=n;for(let r=0;r<e.length;r++){if(t===void 0||t[e[r]]===void 0)return;if(t===null||t[e[r]]===null)return null;t=t[e[r]]}return t}function pl(n,e,t){if(t.length===0)return e;const r=t[0];return t.length>1&&(e=pl(typeof n!="object"||n===null||!Object.prototype.hasOwnProperty.call(n,r)?Number.isInteger(Number(t[1]))?[]:{}:n[r],e,Array.prototype.slice.call(t,1))),Number.isInteger(Number(r))&&Array.isArray(n)?n.slice()[r]:Object.assign({},n,{[r]:e})}function Tp(n,e){if(n==null||e.length===0)return n;if(e.length===1){if(n==null)return n;if(Number.isInteger(e[0])&&Array.isArray(n))return Array.prototype.slice.call(n,0).splice(e[0],1);const t={};for(const r in n)t[r]=n[r];return delete t[e[0]],t}if(n[e[0]]==null){if(Number.isInteger(e[0])&&Array.isArray(n))return Array.prototype.concat.call([],n);const t={};for(const r in n)t[r]=n[r];return t}return pl(n,Tp(n[e[0]],Array.prototype.slice.call(e,1)),[e[0]])}function Ip(n,e){return e.map(t=>t.split(".")).map(t=>[t,Gv(n,t)]).filter(t=>t[1]!==void 0).reduce((t,r)=>pl(t,r[1],r[0]),{})}function wp(n,e){return e.map(t=>t.split(".")).reduce((t,r)=>Tp(t,r),n)}function Ph(n,{storage:e,serializer:t,key:r,debug:s,pick:i,omit:a,beforeHydrate:c,afterHydrate:l},h,d=!0){try{d&&(c==null||c(h));const p=e.getItem(r);if(p){const y=t.deserialize(p),b=i?Ip(y,i):y,V=a?wp(b,a):b;n.$patch(V)}d&&(l==null||l(h))}catch(p){s&&console.error("[pinia-plugin-persistedstate]",p)}}function Vh(n,{storage:e,serializer:t,key:r,debug:s,pick:i,omit:a}){try{const c=i?Ip(n,i):n,l=a?wp(c,a):c,h=t.serialize(l);e.setItem(r,h)}catch(c){s&&console.error("[pinia-plugin-persistedstate]",c)}}function Qv(n,e){return typeof n=="function"?n(e):typeof n=="string"?n:e}function Jv(n,e,t){const{pinia:r,store:s,options:{persist:i=t}}=n;if(!i)return;// v8 ignore if -- @preserve
if(!(s.$id in r.state.value)){const c=r._s.get(s.$id.replace("__hot:",""));c&&Promise.resolve().then(()=>c.$persist());return}const a=(Array.isArray(i)?i:i===!0?[{}]:[i]).map(e);s.$hydrate=({runHooks:c=!0}={})=>{a.forEach(l=>{Ph(s,l,n,c)})},s.$persist=()=>{a.forEach(c=>{Vh(s.$state,c)})},a.forEach(c=>{Ph(s,c,n),s.$subscribe((l,h)=>Vh(h,c),{detached:!0})})}function Xv(n={}){return function(e){Jv(e,t=>{const r=Qv(t.key,e.store.$id);return{key:(n.key?n.key:s=>s)(r),debug:t.debug??n.debug??!1,serializer:t.serializer??n.serializer??{serialize:s=>JSON.stringify(s),deserialize:s=>JSON.parse(s)},storage:t.storage??n.storage??window.localStorage,beforeHydrate:t.beforeHydrate??n.beforeHydrate,afterHydrate:t.afterHydrate??n.afterHydrate,pick:t.pick,omit:t.omit}},n.auto??!1)}}var Yv=Xv();const Sr=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},Zv={},eE={class:"carafe"};function tE(n,e){return ge(),Se("div",eE,[co(n.$slots,"top",{},void 0,!0),co(n.$slots,"mid",{},void 0,!0),co(n.$slots,"bottom",{},void 0,!0)])}const nE=Sr(Zv,[["render",tE],["__scopeId","data-v-43d2bfc5"]]),rE={},sE={class:"mug"};function iE(n,e){return ge(),Se("div",sE,[co(n.$slots,"default")])}const oE=Sr(rE,[["render",iE]]),kh=["Hot","Cold"],Dh=[{id:"b1",name:"Black Tea",color:"#8B4513"},{id:"b2",name:"Green Tea",color:"#C8E6C9"},{id:"b3",name:"Coffee",color:"#6F4E37"}],Oh=[{id:"s1",name:"No Syrup",color:"#c6c6c6"},{id:"s2",name:"Vanilla",color:"#FFEFD5"},{id:"s3",name:"Caramel",color:"#DAA520"},{id:"s4",name:"Hazelnut",color:"#6B4423"}],Nh=[{id:"c1",name:"No Cream",color:"transparent"},{id:"c2",name:"Milk",color:"AliceBlue"},{id:"c3",name:"Cream",color:"#F5F5DC"},{id:"c4",name:"Half & Half",color:"#FFFACD"}],aE=()=>{};var xh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},cE=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},bp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let y=(c&15)<<2|h>>6,b=h&63;l||(b=64,a||(y=64)),r.push(t[d],t[p],t[y],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ap(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):cE(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new lE;const y=i<<2|c>>4;if(r.push(y),h!==64){const b=c<<4&240|h>>2;if(r.push(b),p!==64){const V=h<<6&192|p;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class lE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uE=function(n){const e=Ap(n);return bp.encodeByteArray(e,!0)},Do=function(n){return uE(n).replace(/\./g,"")},Sp=function(n){try{return bp.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE=()=>hE().__FIREBASE_DEFAULTS__,dE=()=>{if(typeof process>"u"||typeof xh>"u")return;const n=xh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},pE=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Sp(n[1]);return e&&JSON.parse(e)},ha=()=>{try{return aE()||fE()||dE()||pE()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Rp=n=>{var e,t;return(t=(e=ha())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},gE=n=>{const e=Rp(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Cp=()=>{var n;return(n=ha())===null||n===void 0?void 0:n.config},Pp=n=>{var e;return(e=ha())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Vp(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Do(JSON.stringify(t)),Do(JSON.stringify(a)),""].join(".")}const Js={};function yE(){const n={prod:[],emulator:[]};for(const e of Object.keys(Js))Js[e]?n.emulator.push(e):n.prod.push(e);return n}function vE(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Mh=!1;function kp(n,e){if(typeof window>"u"||typeof document>"u"||!ls(window.location.host)||Js[n]===e||Js[n]||Mh)return;Js[n]=e;function t(y){return`__firebase__banner__${y}`}const r="__firebase__banner",i=yE().prod.length>0;function a(){const y=document.getElementById(r);y&&y.remove()}function c(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function l(y,b){y.setAttribute("width","24"),y.setAttribute("id",b),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function h(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{Mh=!0,a()},y}function d(y,b){y.setAttribute("id",b),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function p(){const y=vE(r),b=t("text"),V=document.getElementById(b)||document.createElement("span"),M=t("learnmore"),L=document.getElementById(M)||document.createElement("a"),z=t("preprendIcon"),K=document.getElementById(z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const G=y.element;c(G),d(L,M);const q=h();l(K,z),G.append(K,V,L,q),document.body.appendChild(G)}i?(V.innerText="Preview backend disconnected.",K.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(K.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function EE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function TE(){var n;const e=(n=ha())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function IE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function wE(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function AE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bE(){const n=ut();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function SE(){return!TE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function RE(){try{return typeof indexedDB=="object"}catch{return!1}}function CE(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE="FirebaseError";class Tn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=PE,Object.setPrototypeOf(this,Tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ei.prototype.create)}}class Ei{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?VE(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Tn(s,c,r)}}function VE(n,e){return n.replace(kE,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const kE=/\{\$([^}]+)}/g;function DE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Er(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Lh(i)&&Lh(a)){if(!Er(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Lh(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function OE(n,e){const t=new NE(n,e);return t.subscribe.bind(t)}class NE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");xE(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=ec),s.error===void 0&&(s.error=ec),s.complete===void 0&&(s.complete=ec);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xE(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ec(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(n){return n&&n._delegate?n._delegate:n}class Tr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new mE;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(FE(e))try{this.getOrInitializeService({instanceIdentifier:hr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hr){return this.instances.has(e)}getOptions(e=hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:LE(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hr){return this.component?this.component.multipleInstances?e:hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function LE(n){return n===hr?void 0:n}function FE(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ME(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(he||(he={}));const BE={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},jE=he.INFO,$E={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},HE=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=$E[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gl{constructor(e){this.name=e,this._logLevel=jE,this._logHandler=HE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const qE=(n,e)=>e.some(t=>n instanceof t);let Fh,Uh;function zE(){return Fh||(Fh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function WE(){return Uh||(Uh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dp=new WeakMap,Ac=new WeakMap,Op=new WeakMap,tc=new WeakMap,ml=new WeakMap;function KE(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Bn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Dp.set(t,n)}).catch(()=>{}),ml.set(e,n),e}function GE(n){if(Ac.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Ac.set(n,e)}let bc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ac.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Op.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Bn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function QE(n){bc=n(bc)}function JE(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(nc(this),e,...t);return Op.set(r,e.sort?e.sort():[e]),Bn(r)}:WE().includes(n)?function(...e){return n.apply(nc(this),e),Bn(Dp.get(this))}:function(...e){return Bn(n.apply(nc(this),e))}}function XE(n){return typeof n=="function"?JE(n):(n instanceof IDBTransaction&&GE(n),qE(n,zE())?new Proxy(n,bc):n)}function Bn(n){if(n instanceof IDBRequest)return KE(n);if(tc.has(n))return tc.get(n);const e=XE(n);return e!==n&&(tc.set(n,e),ml.set(e,n)),e}const nc=n=>ml.get(n);function YE(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=Bn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Bn(a.result),l.oldVersion,l.newVersion,Bn(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const ZE=["get","getKey","getAll","getAllKeys","count"],eT=["put","add","delete","clear"],rc=new Map;function Bh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(rc.get(e))return rc.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=eT.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ZE.includes(t)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return rc.set(e,i),i}QE(n=>({...n,get:(e,t,r)=>Bh(e,t)||n.get(e,t,r),has:(e,t)=>!!Bh(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(nT(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function nT(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sc="@firebase/app",jh="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=new gl("@firebase/app"),rT="@firebase/app-compat",sT="@firebase/analytics-compat",iT="@firebase/analytics",oT="@firebase/app-check-compat",aT="@firebase/app-check",cT="@firebase/auth",lT="@firebase/auth-compat",uT="@firebase/database",hT="@firebase/data-connect",fT="@firebase/database-compat",dT="@firebase/functions",pT="@firebase/functions-compat",gT="@firebase/installations",mT="@firebase/installations-compat",_T="@firebase/messaging",yT="@firebase/messaging-compat",vT="@firebase/performance",ET="@firebase/performance-compat",TT="@firebase/remote-config",IT="@firebase/remote-config-compat",wT="@firebase/storage",AT="@firebase/storage-compat",bT="@firebase/firestore",ST="@firebase/ai",RT="@firebase/firestore-compat",CT="firebase",PT="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="[DEFAULT]",VT={[Sc]:"fire-core",[rT]:"fire-core-compat",[iT]:"fire-analytics",[sT]:"fire-analytics-compat",[aT]:"fire-app-check",[oT]:"fire-app-check-compat",[cT]:"fire-auth",[lT]:"fire-auth-compat",[uT]:"fire-rtdb",[hT]:"fire-data-connect",[fT]:"fire-rtdb-compat",[dT]:"fire-fn",[pT]:"fire-fn-compat",[gT]:"fire-iid",[mT]:"fire-iid-compat",[_T]:"fire-fcm",[yT]:"fire-fcm-compat",[vT]:"fire-perf",[ET]:"fire-perf-compat",[TT]:"fire-rc",[IT]:"fire-rc-compat",[wT]:"fire-gcs",[AT]:"fire-gcs-compat",[bT]:"fire-fst",[RT]:"fire-fst-compat",[ST]:"fire-vertex","fire-js":"fire-js",[CT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=new Map,kT=new Map,Cc=new Map;function $h(n,e){try{n.container.addComponent(e)}catch(t){mn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ts(n){const e=n.name;if(Cc.has(e))return mn.debug(`There were multiple attempts to register component ${e}.`),!1;Cc.set(e,n);for(const t of Oo.values())$h(t,n);for(const t of kT.values())$h(t,n);return!0}function _l(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Pt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jn=new Ei("app","Firebase",DT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=PT;function Np(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Rc,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw jn.create("bad-app-name",{appName:String(s)});if(t||(t=Cp()),!t)throw jn.create("no-options");const i=Oo.get(s);if(i){if(Er(t,i.options)&&Er(r,i.config))return i;throw jn.create("duplicate-app",{appName:s})}const a=new UE(s);for(const l of Cc.values())a.addComponent(l);const c=new OT(t,r,a);return Oo.set(s,c),c}function xp(n=Rc){const e=Oo.get(n);if(!e&&n===Rc&&Cp())return Np();if(!e)throw jn.create("no-app",{appName:n});return e}function $n(n,e,t){var r;let s=(r=VT[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mn.warn(c.join(" "));return}ts(new Tr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT="firebase-heartbeat-database",xT=1,ai="firebase-heartbeat-store";let sc=null;function Mp(){return sc||(sc=YE(NT,xT,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ai)}catch(t){console.warn(t)}}}}).catch(n=>{throw jn.create("idb-open",{originalErrorMessage:n.message})})),sc}async function MT(n){try{const t=(await Mp()).transaction(ai),r=await t.objectStore(ai).get(Lp(n));return await t.done,r}catch(e){if(e instanceof Tn)mn.warn(e.message);else{const t=jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mn.warn(t.message)}}}async function Hh(n,e){try{const r=(await Mp()).transaction(ai,"readwrite");await r.objectStore(ai).put(e,Lp(n)),await r.done}catch(t){if(t instanceof Tn)mn.warn(t.message);else{const r=jn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});mn.warn(r.message)}}}function Lp(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT=1024,FT=30;class UT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new jT(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=qh();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>FT){const a=$T(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){mn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=qh(),{heartbeatsToSend:r,unsentEntries:s}=BT(this._heartbeatsCache.heartbeats),i=Do(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return mn.warn(t),""}}}function qh(){return new Date().toISOString().substring(0,10)}function BT(n,e=LT){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),zh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),zh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class jT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return RE()?CE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await MT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function zh(n){return Do(JSON.stringify({version:2,heartbeats:n})).length}function $T(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HT(n){ts(new Tr("platform-logger",e=>new tT(e),"PRIVATE")),ts(new Tr("heartbeat",e=>new UT(e),"PRIVATE")),$n(Sc,jh,n),$n(Sc,jh,"esm2017"),$n("fire-js","")}HT("");var Wh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hn,Fp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,m){function _(){}_.prototype=m.prototype,I.D=m.prototype,I.prototype=new _,I.prototype.constructor=I,I.C=function(T,w,S){for(var E=Array(arguments.length-2),ht=2;ht<arguments.length;ht++)E[ht-2]=arguments[ht];return m.prototype[w].apply(T,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,m,_){_||(_=0);var T=Array(16);if(typeof m=="string")for(var w=0;16>w;++w)T[w]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(w=0;16>w;++w)T[w]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=I.g[0],_=I.g[1],w=I.g[2];var S=I.g[3],E=m+(S^_&(w^S))+T[0]+3614090360&4294967295;m=_+(E<<7&4294967295|E>>>25),E=S+(w^m&(_^w))+T[1]+3905402710&4294967295,S=m+(E<<12&4294967295|E>>>20),E=w+(_^S&(m^_))+T[2]+606105819&4294967295,w=S+(E<<17&4294967295|E>>>15),E=_+(m^w&(S^m))+T[3]+3250441966&4294967295,_=w+(E<<22&4294967295|E>>>10),E=m+(S^_&(w^S))+T[4]+4118548399&4294967295,m=_+(E<<7&4294967295|E>>>25),E=S+(w^m&(_^w))+T[5]+1200080426&4294967295,S=m+(E<<12&4294967295|E>>>20),E=w+(_^S&(m^_))+T[6]+2821735955&4294967295,w=S+(E<<17&4294967295|E>>>15),E=_+(m^w&(S^m))+T[7]+4249261313&4294967295,_=w+(E<<22&4294967295|E>>>10),E=m+(S^_&(w^S))+T[8]+1770035416&4294967295,m=_+(E<<7&4294967295|E>>>25),E=S+(w^m&(_^w))+T[9]+2336552879&4294967295,S=m+(E<<12&4294967295|E>>>20),E=w+(_^S&(m^_))+T[10]+4294925233&4294967295,w=S+(E<<17&4294967295|E>>>15),E=_+(m^w&(S^m))+T[11]+2304563134&4294967295,_=w+(E<<22&4294967295|E>>>10),E=m+(S^_&(w^S))+T[12]+1804603682&4294967295,m=_+(E<<7&4294967295|E>>>25),E=S+(w^m&(_^w))+T[13]+4254626195&4294967295,S=m+(E<<12&4294967295|E>>>20),E=w+(_^S&(m^_))+T[14]+2792965006&4294967295,w=S+(E<<17&4294967295|E>>>15),E=_+(m^w&(S^m))+T[15]+1236535329&4294967295,_=w+(E<<22&4294967295|E>>>10),E=m+(w^S&(_^w))+T[1]+4129170786&4294967295,m=_+(E<<5&4294967295|E>>>27),E=S+(_^w&(m^_))+T[6]+3225465664&4294967295,S=m+(E<<9&4294967295|E>>>23),E=w+(m^_&(S^m))+T[11]+643717713&4294967295,w=S+(E<<14&4294967295|E>>>18),E=_+(S^m&(w^S))+T[0]+3921069994&4294967295,_=w+(E<<20&4294967295|E>>>12),E=m+(w^S&(_^w))+T[5]+3593408605&4294967295,m=_+(E<<5&4294967295|E>>>27),E=S+(_^w&(m^_))+T[10]+38016083&4294967295,S=m+(E<<9&4294967295|E>>>23),E=w+(m^_&(S^m))+T[15]+3634488961&4294967295,w=S+(E<<14&4294967295|E>>>18),E=_+(S^m&(w^S))+T[4]+3889429448&4294967295,_=w+(E<<20&4294967295|E>>>12),E=m+(w^S&(_^w))+T[9]+568446438&4294967295,m=_+(E<<5&4294967295|E>>>27),E=S+(_^w&(m^_))+T[14]+3275163606&4294967295,S=m+(E<<9&4294967295|E>>>23),E=w+(m^_&(S^m))+T[3]+4107603335&4294967295,w=S+(E<<14&4294967295|E>>>18),E=_+(S^m&(w^S))+T[8]+1163531501&4294967295,_=w+(E<<20&4294967295|E>>>12),E=m+(w^S&(_^w))+T[13]+2850285829&4294967295,m=_+(E<<5&4294967295|E>>>27),E=S+(_^w&(m^_))+T[2]+4243563512&4294967295,S=m+(E<<9&4294967295|E>>>23),E=w+(m^_&(S^m))+T[7]+1735328473&4294967295,w=S+(E<<14&4294967295|E>>>18),E=_+(S^m&(w^S))+T[12]+2368359562&4294967295,_=w+(E<<20&4294967295|E>>>12),E=m+(_^w^S)+T[5]+4294588738&4294967295,m=_+(E<<4&4294967295|E>>>28),E=S+(m^_^w)+T[8]+2272392833&4294967295,S=m+(E<<11&4294967295|E>>>21),E=w+(S^m^_)+T[11]+1839030562&4294967295,w=S+(E<<16&4294967295|E>>>16),E=_+(w^S^m)+T[14]+4259657740&4294967295,_=w+(E<<23&4294967295|E>>>9),E=m+(_^w^S)+T[1]+2763975236&4294967295,m=_+(E<<4&4294967295|E>>>28),E=S+(m^_^w)+T[4]+1272893353&4294967295,S=m+(E<<11&4294967295|E>>>21),E=w+(S^m^_)+T[7]+4139469664&4294967295,w=S+(E<<16&4294967295|E>>>16),E=_+(w^S^m)+T[10]+3200236656&4294967295,_=w+(E<<23&4294967295|E>>>9),E=m+(_^w^S)+T[13]+681279174&4294967295,m=_+(E<<4&4294967295|E>>>28),E=S+(m^_^w)+T[0]+3936430074&4294967295,S=m+(E<<11&4294967295|E>>>21),E=w+(S^m^_)+T[3]+3572445317&4294967295,w=S+(E<<16&4294967295|E>>>16),E=_+(w^S^m)+T[6]+76029189&4294967295,_=w+(E<<23&4294967295|E>>>9),E=m+(_^w^S)+T[9]+3654602809&4294967295,m=_+(E<<4&4294967295|E>>>28),E=S+(m^_^w)+T[12]+3873151461&4294967295,S=m+(E<<11&4294967295|E>>>21),E=w+(S^m^_)+T[15]+530742520&4294967295,w=S+(E<<16&4294967295|E>>>16),E=_+(w^S^m)+T[2]+3299628645&4294967295,_=w+(E<<23&4294967295|E>>>9),E=m+(w^(_|~S))+T[0]+4096336452&4294967295,m=_+(E<<6&4294967295|E>>>26),E=S+(_^(m|~w))+T[7]+1126891415&4294967295,S=m+(E<<10&4294967295|E>>>22),E=w+(m^(S|~_))+T[14]+2878612391&4294967295,w=S+(E<<15&4294967295|E>>>17),E=_+(S^(w|~m))+T[5]+4237533241&4294967295,_=w+(E<<21&4294967295|E>>>11),E=m+(w^(_|~S))+T[12]+1700485571&4294967295,m=_+(E<<6&4294967295|E>>>26),E=S+(_^(m|~w))+T[3]+2399980690&4294967295,S=m+(E<<10&4294967295|E>>>22),E=w+(m^(S|~_))+T[10]+4293915773&4294967295,w=S+(E<<15&4294967295|E>>>17),E=_+(S^(w|~m))+T[1]+2240044497&4294967295,_=w+(E<<21&4294967295|E>>>11),E=m+(w^(_|~S))+T[8]+1873313359&4294967295,m=_+(E<<6&4294967295|E>>>26),E=S+(_^(m|~w))+T[15]+4264355552&4294967295,S=m+(E<<10&4294967295|E>>>22),E=w+(m^(S|~_))+T[6]+2734768916&4294967295,w=S+(E<<15&4294967295|E>>>17),E=_+(S^(w|~m))+T[13]+1309151649&4294967295,_=w+(E<<21&4294967295|E>>>11),E=m+(w^(_|~S))+T[4]+4149444226&4294967295,m=_+(E<<6&4294967295|E>>>26),E=S+(_^(m|~w))+T[11]+3174756917&4294967295,S=m+(E<<10&4294967295|E>>>22),E=w+(m^(S|~_))+T[2]+718787259&4294967295,w=S+(E<<15&4294967295|E>>>17),E=_+(S^(w|~m))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+m&4294967295,I.g[1]=I.g[1]+(w+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+w&4294967295,I.g[3]=I.g[3]+S&4294967295}r.prototype.u=function(I,m){m===void 0&&(m=I.length);for(var _=m-this.blockSize,T=this.B,w=this.h,S=0;S<m;){if(w==0)for(;S<=_;)s(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<m;)if(T[w++]=I.charCodeAt(S++),w==this.blockSize){s(this,T),w=0;break}}else for(;S<m;)if(T[w++]=I[S++],w==this.blockSize){s(this,T),w=0;break}}this.h=w,this.o+=m},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var m=1;m<I.length-8;++m)I[m]=0;var _=8*this.o;for(m=I.length-8;m<I.length;++m)I[m]=_&255,_/=256;for(this.u(I),I=Array(16),m=_=0;4>m;++m)for(var T=0;32>T;T+=8)I[_++]=this.g[m]>>>T&255;return I};function i(I,m){var _=c;return Object.prototype.hasOwnProperty.call(_,I)?_[I]:_[I]=m(I)}function a(I,m){this.h=m;for(var _=[],T=!0,w=I.length-1;0<=w;w--){var S=I[w]|0;T&&S==m||(_[w]=S,T=!1)}this.g=_}var c={};function l(I){return-128<=I&&128>I?i(I,function(m){return new a([m|0],0>m?-1:0)}):new a([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return L(h(-I));for(var m=[],_=1,T=0;I>=_;T++)m[T]=I/_|0,_*=4294967296;return new a(m,0)}function d(I,m){if(I.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(I.charAt(0)=="-")return L(d(I.substring(1),m));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(m,8)),T=p,w=0;w<I.length;w+=8){var S=Math.min(8,I.length-w),E=parseInt(I.substring(w,w+S),m);8>S?(S=h(Math.pow(m,S)),T=T.j(S).add(h(E))):(T=T.j(_),T=T.add(h(E)))}return T}var p=l(0),y=l(1),b=l(16777216);n=a.prototype,n.m=function(){if(M(this))return-L(this).m();for(var I=0,m=1,_=0;_<this.g.length;_++){var T=this.i(_);I+=(0<=T?T:4294967296+T)*m,m*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(V(this))return"0";if(M(this))return"-"+L(this).toString(I);for(var m=h(Math.pow(I,6)),_=this,T="";;){var w=q(_,m).g;_=z(_,w.j(m));var S=((0<_.g.length?_.g[0]:_.h)>>>0).toString(I);if(_=w,V(_))return S+T;for(;6>S.length;)S="0"+S;T=S+T}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function V(I){if(I.h!=0)return!1;for(var m=0;m<I.g.length;m++)if(I.g[m]!=0)return!1;return!0}function M(I){return I.h==-1}n.l=function(I){return I=z(this,I),M(I)?-1:V(I)?0:1};function L(I){for(var m=I.g.length,_=[],T=0;T<m;T++)_[T]=~I.g[T];return new a(_,~I.h).add(y)}n.abs=function(){return M(this)?L(this):this},n.add=function(I){for(var m=Math.max(this.g.length,I.g.length),_=[],T=0,w=0;w<=m;w++){var S=T+(this.i(w)&65535)+(I.i(w)&65535),E=(S>>>16)+(this.i(w)>>>16)+(I.i(w)>>>16);T=E>>>16,S&=65535,E&=65535,_[w]=E<<16|S}return new a(_,_[_.length-1]&-2147483648?-1:0)};function z(I,m){return I.add(L(m))}n.j=function(I){if(V(this)||V(I))return p;if(M(this))return M(I)?L(this).j(L(I)):L(L(this).j(I));if(M(I))return L(this.j(L(I)));if(0>this.l(b)&&0>I.l(b))return h(this.m()*I.m());for(var m=this.g.length+I.g.length,_=[],T=0;T<2*m;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var w=0;w<I.g.length;w++){var S=this.i(T)>>>16,E=this.i(T)&65535,ht=I.i(w)>>>16,Mt=I.i(w)&65535;_[2*T+2*w]+=E*Mt,K(_,2*T+2*w),_[2*T+2*w+1]+=S*Mt,K(_,2*T+2*w+1),_[2*T+2*w+1]+=E*ht,K(_,2*T+2*w+1),_[2*T+2*w+2]+=S*ht,K(_,2*T+2*w+2)}for(T=0;T<m;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=m;T<2*m;T++)_[T]=0;return new a(_,0)};function K(I,m){for(;(I[m]&65535)!=I[m];)I[m+1]+=I[m]>>>16,I[m]&=65535,m++}function G(I,m){this.g=I,this.h=m}function q(I,m){if(V(m))throw Error("division by zero");if(V(I))return new G(p,p);if(M(I))return m=q(L(I),m),new G(L(m.g),L(m.h));if(M(m))return m=q(I,L(m)),new G(L(m.g),m.h);if(30<I.g.length){if(M(I)||M(m))throw Error("slowDivide_ only works with positive integers.");for(var _=y,T=m;0>=T.l(I);)_=oe(_),T=oe(T);var w=ve(_,1),S=ve(T,1);for(T=ve(T,2),_=ve(_,2);!V(T);){var E=S.add(T);0>=E.l(I)&&(w=w.add(_),S=E),T=ve(T,1),_=ve(_,1)}return m=z(I,w.j(m)),new G(w,m)}for(w=p;0<=I.l(m);){for(_=Math.max(1,Math.floor(I.m()/m.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),S=h(_),E=S.j(m);M(E)||0<E.l(I);)_-=T,S=h(_),E=S.j(m);V(S)&&(S=y),w=w.add(S),I=z(I,E)}return new G(w,I)}n.A=function(I){return q(this,I).h},n.and=function(I){for(var m=Math.max(this.g.length,I.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)&I.i(T);return new a(_,this.h&I.h)},n.or=function(I){for(var m=Math.max(this.g.length,I.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)|I.i(T);return new a(_,this.h|I.h)},n.xor=function(I){for(var m=Math.max(this.g.length,I.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)^I.i(T);return new a(_,this.h^I.h)};function oe(I){for(var m=I.g.length+1,_=[],T=0;T<m;T++)_[T]=I.i(T)<<1|I.i(T-1)>>>31;return new a(_,I.h)}function ve(I,m){var _=m>>5;m%=32;for(var T=I.g.length-_,w=[],S=0;S<T;S++)w[S]=0<m?I.i(S+_)>>>m|I.i(S+_+1)<<32-m:I.i(S+_);return new a(w,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Fp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,Hn=a}).apply(typeof Wh<"u"?Wh:typeof self<"u"?self:typeof window<"u"?window:{});var Yi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Up,Ls,Bp,fo,Pc,jp,$p,Hp;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yi=="object"&&Yi];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var R=o[g];if(!(R in f))break e;f=f[R]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,g=!1,R={next:function(){if(!g&&f<o.length){var C=f++;return{value:u(C,o[C]),done:!1}}return g=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function p(o,u,f){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,g),o.apply(u,R)}}return function(){return o.apply(u,arguments)}}function y(o,u,f){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,y.apply(null,arguments)}function b(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function V(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(g,R,C){for(var j=Array(arguments.length-2),we=2;we<arguments.length;we++)j[we-2]=arguments[we];return u.prototype[R].apply(g,j)}}function M(o){const u=o.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function L(o,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(l(g)){const R=o.length||0,C=g.length||0;o.length=R+C;for(let j=0;j<C;j++)o[R+j]=g[j]}else o.push(g)}}class z{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function K(o){return/^[\s\xa0]*$/.test(o)}function G(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function q(o){return q[" "](o),o}q[" "]=function(){};var oe=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function ve(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function I(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function m(o){const u={};for(const f in o)u[f]=o[f];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let f,g;for(let R=1;R<arguments.length;R++){g=arguments[R];for(f in g)o[f]=g[f];for(let C=0;C<_.length;C++)f=_[C],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function w(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function S(o){c.setTimeout(()=>{throw o},0)}function E(){var o=Rt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ht{constructor(){this.h=this.g=null}add(u,f){const g=Mt.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Mt=new z(()=>new De,o=>o.reset());class De{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ae,me=!1,Rt=new ht,tr=()=>{const o=c.Promise.resolve(void 0);ae=()=>{o.then(Yt)}};var Yt=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(f){S(f)}var u=Mt;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}me=!1};function je(){this.s=this.s,this.C=this.C}je.prototype.s=!1,je.prototype.ma=function(){this.s||(this.s=!0,this.N())},je.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $e(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}$e.prototype.h=function(){this.defaultPrevented=!0};var Ca=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return o})();function nr(o,u){if($e.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(oe){e:{try{q(u.nodeName);var R=!0;break e}catch{}R=!1}R||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:rr[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&nr.aa.h.call(this)}}V(nr,$e);var rr={2:"touch",3:"pen",4:"mouse"};nr.prototype.h=function(){nr.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Zt="closure_listenable_"+(1e6*Math.random()|0),ms=0;function Di(o,u,f,g,R){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=R,this.key=++ms,this.da=this.fa=!1}function Lt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function _s(o){this.src=o,this.g={},this.h=0}_s.prototype.add=function(o,u,f,g,R){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var j=A(o,u,g,R);return-1<j?(u=o[j],f||(u.fa=!1)):(u=new Di(u,this.src,C,!!g,R),u.fa=f,o.push(u)),u};function v(o,u){var f=u.type;if(f in o.g){var g=o.g[f],R=Array.prototype.indexOf.call(g,u,void 0),C;(C=0<=R)&&Array.prototype.splice.call(g,R,1),C&&(Lt(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function A(o,u,f,g){for(var R=0;R<o.length;++R){var C=o[R];if(!C.da&&C.listener==u&&C.capture==!!f&&C.ha==g)return R}return-1}var P="closure_lm_"+(1e6*Math.random()|0),F={};function O(o,u,f,g,R){if(Array.isArray(u)){for(var C=0;C<u.length;C++)O(o,u[C],f,g,R);return null}return f=te(f),o&&o[Zt]?o.K(u,f,h(g)?!!g.capture:!1,R):N(o,u,f,!1,g,R)}function N(o,u,f,g,R,C){if(!u)throw Error("Invalid event type");var j=h(R)?!!R.capture:!!R,we=H(o);if(we||(o[P]=we=new _s(o)),f=we.add(u,f,g,j,C),f.proxy)return f;if(g=$(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)Ca||(R=j),R===void 0&&(R=!1),o.addEventListener(u.toString(),g,R);else if(o.attachEvent)o.attachEvent(x(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function $(){function o(f){return u.call(o.src,o.listener,f)}const u=Y;return o}function B(o,u,f,g,R){if(Array.isArray(u))for(var C=0;C<u.length;C++)B(o,u[C],f,g,R);else g=h(g)?!!g.capture:!!g,f=te(f),o&&o[Zt]?(o=o.i,u=String(u).toString(),u in o.g&&(C=o.g[u],f=A(C,f,g,R),-1<f&&(Lt(C[f]),Array.prototype.splice.call(C,f,1),C.length==0&&(delete o.g[u],o.h--)))):o&&(o=H(o))&&(u=o.g[u.toString()],o=-1,u&&(o=A(u,f,g,R)),(f=-1<o?u[o]:null)&&U(f))}function U(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Zt])v(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(x(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=H(u))?(v(f,o),f.h==0&&(f.src=null,u[P]=null)):Lt(o)}}}function x(o){return o in F?F[o]:F[o]="on"+o}function Y(o,u){if(o.da)o=!0;else{u=new nr(u,this);var f=o.listener,g=o.ha||o.src;o.fa&&U(o),o=f.call(g,u)}return o}function H(o){return o=o[P],o instanceof _s?o:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function te(o){return typeof o=="function"?o:(o[J]||(o[J]=function(u){return o.handleEvent(u)}),o[J])}function Z(){je.call(this),this.i=new _s(this),this.M=this,this.F=null}V(Z,je),Z.prototype[Zt]=!0,Z.prototype.removeEventListener=function(o,u,f,g){B(this,o,u,f,g)};function ce(o,u){var f,g=o.F;if(g)for(f=[];g;g=g.F)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new $e(u,o);else if(u instanceof $e)u.target=u.target||o;else{var R=u;u=new $e(g,o),T(u,R)}if(R=!0,f)for(var C=f.length-1;0<=C;C--){var j=u.g=f[C];R=de(j,g,!0,u)&&R}if(j=u.g=o,R=de(j,g,!0,u)&&R,R=de(j,g,!1,u)&&R,f)for(C=0;C<f.length;C++)j=u.g=f[C],R=de(j,g,!1,u)&&R}Z.prototype.N=function(){if(Z.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],g=0;g<f.length;g++)Lt(f[g]);delete o.g[u],o.h--}}this.F=null},Z.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},Z.prototype.L=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function de(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var R=!0,C=0;C<u.length;++C){var j=u[C];if(j&&!j.da&&j.capture==f){var we=j.listener,Je=j.ha||j.src;j.fa&&v(o.i,j),R=we.call(Je,g)!==!1&&R}}return R&&!g.defaultPrevented}function Ke(o,u,f){if(typeof o=="function")f&&(o=y(o,f));else if(o&&typeof o.handleEvent=="function")o=y(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function Ge(o){o.g=Ke(()=>{o.g=null,o.i&&(o.i=!1,Ge(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class wt extends je{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ge(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function et(o){je.call(this),this.h=o,this.g={}}V(et,je);var In=[];function ys(o){ve(o.g,function(u,f){this.g.hasOwnProperty(f)&&U(u)},o),o.g={}}et.prototype.N=function(){et.aa.N.call(this),ys(this)},et.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qe=c.JSON.stringify,At=c.JSON.parse,Oi=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function kr(){}kr.prototype.h=null;function iu(o){return o.h||(o.h=o.i())}function ou(){}var vs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Pa(){$e.call(this,"d")}V(Pa,$e);function Va(){$e.call(this,"c")}V(Va,$e);var sr={},au=null;function Ni(){return au=au||new Z}sr.La="serverreachability";function cu(o){$e.call(this,sr.La,o)}V(cu,$e);function Es(o){const u=Ni();ce(u,new cu(u))}sr.STAT_EVENT="statevent";function lu(o,u){$e.call(this,sr.STAT_EVENT,o),this.stat=u}V(lu,$e);function ft(o){const u=Ni();ce(u,new lu(u,o))}sr.Ma="timingevent";function uu(o,u){$e.call(this,sr.Ma,o),this.size=u}V(uu,$e);function Ts(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function Is(){this.g=!0}Is.prototype.xa=function(){this.g=!1};function Gm(o,u,f,g,R,C){o.info(function(){if(o.g)if(C)for(var j="",we=C.split("&"),Je=0;Je<we.length;Je++){var _e=we[Je].split("=");if(1<_e.length){var tt=_e[0];_e=_e[1];var nt=tt.split("_");j=2<=nt.length&&nt[1]=="type"?j+(tt+"="+_e+"&"):j+(tt+"=redacted&")}}else j=null;else j=C;return"XMLHTTP REQ ("+g+") [attempt "+R+"]: "+u+`
`+f+`
`+j})}function Qm(o,u,f,g,R,C,j){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+R+"]: "+u+`
`+f+`
`+C+" "+j})}function Dr(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Xm(o,f)+(g?" "+g:"")})}function Jm(o,u){o.info(function(){return"TIMEOUT: "+u})}Is.prototype.info=function(){};function Xm(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var g=f[o];if(!(2>g.length)){var R=g[1];if(Array.isArray(R)&&!(1>R.length)){var C=R[0];if(C!="noop"&&C!="stop"&&C!="close")for(var j=1;j<R.length;j++)R[j]=""}}}}return Qe(f)}catch{return u}}var xi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},hu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ka;function Mi(){}V(Mi,kr),Mi.prototype.g=function(){return new XMLHttpRequest},Mi.prototype.i=function(){return{}},ka=new Mi;function wn(o,u,f,g){this.j=o,this.i=u,this.l=f,this.R=g||1,this.U=new et(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new fu}function fu(){this.i=null,this.g="",this.h=!1}var du={},Da={};function Oa(o,u,f){o.L=1,o.v=Bi(en(u)),o.m=f,o.P=!0,pu(o,null)}function pu(o,u){o.F=Date.now(),Li(o),o.A=en(o.v);var f=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),Cu(f.i,"t",g),o.C=0,f=o.j.J,o.h=new fu,o.g=Wu(o.j,f?u:null,!o.m),0<o.O&&(o.M=new wt(y(o.Y,o,o.g),o.O)),u=o.U,f=o.g,g=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(In[0]=R.toString()),R=In);for(var C=0;C<R.length;C++){var j=O(f,R[C],g||u.handleEvent,!1,u.h||u);if(!j)break;u.g[j.key]=j}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Es(),Gm(o.i,o.u,o.A,o.l,o.R,o.m)}wn.prototype.ca=function(o){o=o.target;const u=this.M;u&&tn(o)==3?u.j():this.Y(o)},wn.prototype.Y=function(o){try{if(o==this.g)e:{const nt=tn(this.g);var u=this.g.Ba();const xr=this.g.Z();if(!(3>nt)&&(nt!=3||this.g&&(this.h.h||this.g.oa()||xu(this.g)))){this.J||nt!=4||u==7||(u==8||0>=xr?Es(3):Es(2)),Na(this);var f=this.g.Z();this.X=f;t:if(gu(this)){var g=xu(this.g);o="";var R=g.length,C=tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ir(this),ws(this);var j="";break t}this.h.i=new c.TextDecoder}for(u=0;u<R;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(C&&u==R-1)});g.length=0,this.h.g+=o,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=f==200,Qm(this.i,this.u,this.A,this.l,this.R,nt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var we,Je=this.g;if((we=Je.g?Je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(we)){var _e=we;break t}}_e=null}if(f=_e)Dr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xa(this,f);else{this.o=!1,this.s=3,ft(12),ir(this),ws(this);break e}}if(this.P){f=!0;let Ct;for(;!this.J&&this.C<j.length;)if(Ct=Ym(this,j),Ct==Da){nt==4&&(this.s=4,ft(14),f=!1),Dr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ct==du){this.s=4,ft(15),Dr(this.i,this.l,j,"[Invalid Chunk]"),f=!1;break}else Dr(this.i,this.l,Ct,null),xa(this,Ct);if(gu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nt!=4||j.length!=0||this.h.h||(this.s=1,ft(16),f=!1),this.o=this.o&&f,!f)Dr(this.i,this.l,j,"[Invalid Chunked Response]"),ir(this),ws(this);else if(0<j.length&&!this.W){this.W=!0;var tt=this.j;tt.g==this&&tt.ba&&!tt.M&&(tt.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),ja(tt),tt.M=!0,ft(11))}}else Dr(this.i,this.l,j,null),xa(this,j);nt==4&&ir(this),this.o&&!this.J&&(nt==4?$u(this.j,this):(this.o=!1,Li(this)))}else g_(this.g),f==400&&0<j.indexOf("Unknown SID")?(this.s=3,ft(12)):(this.s=0,ft(13)),ir(this),ws(this)}}}catch{}finally{}};function gu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Ym(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?Da:(f=Number(u.substring(f,g)),isNaN(f)?du:(g+=1,g+f>u.length?Da:(u=u.slice(g,g+f),o.C=g+f,u)))}wn.prototype.cancel=function(){this.J=!0,ir(this)};function Li(o){o.S=Date.now()+o.I,mu(o,o.I)}function mu(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Ts(y(o.ba,o),u)}function Na(o){o.B&&(c.clearTimeout(o.B),o.B=null)}wn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Jm(this.i,this.A),this.L!=2&&(Es(),ft(17)),ir(this),this.s=2,ws(this)):mu(this,this.S-o)};function ws(o){o.j.G==0||o.J||$u(o.j,o)}function ir(o){Na(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,ys(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function xa(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||Ma(f.h,o))){if(!o.K&&Ma(f.h,o)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var R=g;if(R[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Wi(f),qi(f);else break e;Ba(f),ft(18)}}else f.za=R[1],0<f.za-f.T&&37500>R[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ts(y(f.Za,f),6e3));if(1>=vu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else ar(f,11)}else if((o.K||f.g==o)&&Wi(f),!K(u))for(R=f.Da.g.parse(u),u=0;u<R.length;u++){let _e=R[u];if(f.T=_e[0],_e=_e[1],f.G==2)if(_e[0]=="c"){f.K=_e[1],f.ia=_e[2];const tt=_e[3];tt!=null&&(f.la=tt,f.j.info("VER="+f.la));const nt=_e[4];nt!=null&&(f.Aa=nt,f.j.info("SVER="+f.Aa));const xr=_e[5];xr!=null&&typeof xr=="number"&&0<xr&&(g=1.5*xr,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Ct=o.g;if(Ct){const Gi=Ct.g?Ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gi){var C=g.h;C.g||Gi.indexOf("spdy")==-1&&Gi.indexOf("quic")==-1&&Gi.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(La(C,C.h),C.h=null))}if(g.D){const $a=Ct.g?Ct.g.getResponseHeader("X-HTTP-Session-Id"):null;$a&&(g.ya=$a,Pe(g.I,g.D,$a))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var j=o;if(g.qa=zu(g,g.J?g.ia:null,g.W),j.K){Eu(g.h,j);var we=j,Je=g.L;Je&&(we.I=Je),we.B&&(Na(we),Li(we)),g.g=j}else Bu(g);0<f.i.length&&zi(f)}else _e[0]!="stop"&&_e[0]!="close"||ar(f,7);else f.G==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?ar(f,7):Ua(f):_e[0]!="noop"&&f.l&&f.l.ta(_e),f.v=0)}}Es(4)}catch{}}var Zm=class{constructor(o,u){this.g=o,this.map=u}};function _u(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function yu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function vu(o){return o.h?1:o.g?o.g.size:0}function Ma(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function La(o,u){o.g?o.g.add(u):o.h=u}function Eu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}_u.prototype.cancel=function(){if(this.i=Tu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Tu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return M(o.i)}function e_(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],f=o.length,g=0;g<f;g++)u.push(o[g]);return u}u=[],f=0;for(g in o)u[f++]=o[g];return u}function t_(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const g in o)u[f++]=g;return u}}}function Iu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=t_(o),g=e_(o),R=g.length,C=0;C<R;C++)u.call(void 0,g[C],f&&f[C],o)}var wu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function n_(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var g=o[f].indexOf("="),R=null;if(0<=g){var C=o[f].substring(0,g);R=o[f].substring(g+1)}else C=o[f];u(C,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function or(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof or){this.h=o.h,Fi(this,o.j),this.o=o.o,this.g=o.g,Ui(this,o.s),this.l=o.l;var u=o.i,f=new Ss;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Au(this,f),this.m=o.m}else o&&(u=String(o).match(wu))?(this.h=!1,Fi(this,u[1]||"",!0),this.o=As(u[2]||""),this.g=As(u[3]||"",!0),Ui(this,u[4]),this.l=As(u[5]||"",!0),Au(this,u[6]||"",!0),this.m=As(u[7]||"")):(this.h=!1,this.i=new Ss(null,this.h))}or.prototype.toString=function(){var o=[],u=this.j;u&&o.push(bs(u,bu,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(bs(u,bu,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(bs(f,f.charAt(0)=="/"?i_:s_,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",bs(f,a_)),o.join("")};function en(o){return new or(o)}function Fi(o,u,f){o.j=f?As(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ui(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Au(o,u,f){u instanceof Ss?(o.i=u,c_(o.i,o.h)):(f||(u=bs(u,o_)),o.i=new Ss(u,o.h))}function Pe(o,u,f){o.i.set(u,f)}function Bi(o){return Pe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function As(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function bs(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,r_),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function r_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var bu=/[#\/\?@]/g,s_=/[#\?:]/g,i_=/[#\?]/g,o_=/[#\?@]/g,a_=/#/g;function Ss(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function An(o){o.g||(o.g=new Map,o.h=0,o.i&&n_(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=Ss.prototype,n.add=function(o,u){An(this),this.i=null,o=Or(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function Su(o,u){An(o),u=Or(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Ru(o,u){return An(o),u=Or(o,u),o.g.has(u)}n.forEach=function(o,u){An(this),this.g.forEach(function(f,g){f.forEach(function(R){o.call(u,R,g,this)},this)},this)},n.na=function(){An(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const R=o[g];for(let C=0;C<R.length;C++)f.push(u[g])}return f},n.V=function(o){An(this);let u=[];if(typeof o=="string")Ru(this,o)&&(u=u.concat(this.g.get(Or(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},n.set=function(o,u){return An(this),this.i=null,o=Or(this,o),Ru(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Cu(o,u,f){Su(o,u),0<f.length&&(o.i=null,o.g.set(Or(o,u),M(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const C=encodeURIComponent(String(g)),j=this.V(g);for(g=0;g<j.length;g++){var R=C;j[g]!==""&&(R+="="+encodeURIComponent(String(j[g]))),o.push(R)}}return this.i=o.join("&")};function Or(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function c_(o,u){u&&!o.j&&(An(o),o.i=null,o.g.forEach(function(f,g){var R=g.toLowerCase();g!=R&&(Su(this,g),Cu(this,R,f))},o)),o.j=u}function l_(o,u){const f=new Is;if(c.Image){const g=new Image;g.onload=b(bn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=b(bn,f,"TestLoadImage: error",!1,u,g),g.onabort=b(bn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=b(bn,f,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function u_(o,u){const f=new Is,g=new AbortController,R=setTimeout(()=>{g.abort(),bn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(C=>{clearTimeout(R),C.ok?bn(f,"TestPingServer: ok",!0,u):bn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),bn(f,"TestPingServer: error",!1,u)})}function bn(o,u,f,g,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),g(f)}catch{}}function h_(){this.g=new Oi}function f_(o,u,f){const g=f||"";try{Iu(o,function(R,C){let j=R;h(R)&&(j=Qe(R)),u.push(g+C+"="+encodeURIComponent(j))})}catch(R){throw u.push(g+"type="+encodeURIComponent("_badmap")),R}}function ji(o){this.l=o.Ub||null,this.j=o.eb||!1}V(ji,kr),ji.prototype.g=function(){return new $i(this.l,this.j)},ji.prototype.i=(function(o){return function(){return o}})({});function $i(o,u){Z.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V($i,Z),n=$i.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Cs(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rs(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Cs(this)),this.g&&(this.readyState=3,Cs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Pu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Pu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Rs(this):Cs(this),this.readyState==3&&Pu(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Rs(this))},n.Qa=function(o){this.g&&(this.response=o,Rs(this))},n.ga=function(){this.g&&Rs(this)};function Rs(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Cs(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function Cs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty($i.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Vu(o){let u="";return ve(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function Fa(o,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Vu(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Pe(o,u,f))}function Ne(o){Z.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(Ne,Z);var d_=/^https?$/i,p_=["POST","PUT"];n=Ne.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ka.g(),this.v=this.o?iu(this.o):iu(ka),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){ku(this,C);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var R in g)f.set(R,g[R]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const C of g.keys())f.set(C,g.get(C));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(C=>C.toLowerCase()=="content-type"),R=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(p_,u,void 0))||g||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,j]of f)this.g.setRequestHeader(C,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Nu(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){ku(this,C)}};function ku(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Du(o),Hi(o)}function Du(o){o.A||(o.A=!0,ce(o,"complete"),ce(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ce(this,"complete"),ce(this,"abort"),Hi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Hi(this,!0)),Ne.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ou(this):this.bb())},n.bb=function(){Ou(this)};function Ou(o){if(o.h&&typeof a<"u"&&(!o.v[1]||tn(o)!=4||o.Z()!=2)){if(o.u&&tn(o)==4)Ke(o.Ea,0,o);else if(ce(o,"readystatechange"),tn(o)==4){o.h=!1;try{const j=o.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=j===0){var R=String(o.D).match(wu)[1]||null;!R&&c.self&&c.self.location&&(R=c.self.location.protocol.slice(0,-1)),g=!d_.test(R?R.toLowerCase():"")}f=g}if(f)ce(o,"complete"),ce(o,"success");else{o.m=6;try{var C=2<tn(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",Du(o)}}finally{Hi(o)}}}}function Hi(o,u){if(o.g){Nu(o);const f=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ce(o,"ready");try{f.onreadystatechange=g}catch{}}}function Nu(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function tn(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<tn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),At(u)}};function xu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function g_(o){const u={};o=(o.g&&2<=tn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(K(o[g]))continue;var f=w(o[g]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const C=u[R]||[];u[R]=C,C.push(f)}I(u,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ps(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Mu(o){this.Aa=0,this.i=[],this.j=new Is,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ps("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ps("baseRetryDelayMs",5e3,o),this.cb=Ps("retryDelaySeedMs",1e4,o),this.Wa=Ps("forwardChannelMaxRetries",2,o),this.wa=Ps("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new _u(o&&o.concurrentRequestLimit),this.Da=new h_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Mu.prototype,n.la=8,n.G=1,n.connect=function(o,u,f,g){ft(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=zu(this,null,this.W),zi(this)};function Ua(o){if(Lu(o),o.G==3){var u=o.U++,f=en(o.I);if(Pe(f,"SID",o.K),Pe(f,"RID",u),Pe(f,"TYPE","terminate"),Vs(o,f),u=new wn(o,o.j,u),u.L=2,u.v=Bi(en(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.v,f=!0),f||(u.g=Wu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Li(u)}qu(o)}function qi(o){o.g&&(ja(o),o.g.cancel(),o.g=null)}function Lu(o){qi(o),o.u&&(c.clearTimeout(o.u),o.u=null),Wi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function zi(o){if(!yu(o.h)&&!o.s){o.s=!0;var u=o.Ga;ae||tr(),me||(ae(),me=!0),Rt.add(u,o),o.B=0}}function m_(o,u){return vu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Ts(y(o.Ga,o,u),Hu(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new wn(this,this.j,o);let C=this.o;if(this.S&&(C?(C=m(C),T(C,this.S)):C=this.S),this.m!==null||this.O||(R.H=C,C=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Uu(this,R,u),f=en(this.I),Pe(f,"RID",o),Pe(f,"CVER",22),this.D&&Pe(f,"X-HTTP-Session-Id",this.D),Vs(this,f),C&&(this.O?u="headers="+encodeURIComponent(String(Vu(C)))+"&"+u:this.m&&Fa(f,this.m,C)),La(this.h,R),this.Ua&&Pe(f,"TYPE","init"),this.P?(Pe(f,"$req",u),Pe(f,"SID","null"),R.T=!0,Oa(R,f,null)):Oa(R,f,u),this.G=2}}else this.G==3&&(o?Fu(this,o):this.i.length==0||yu(this.h)||Fu(this))};function Fu(o,u){var f;u?f=u.l:f=o.U++;const g=en(o.I);Pe(g,"SID",o.K),Pe(g,"RID",f),Pe(g,"AID",o.T),Vs(o,g),o.m&&o.o&&Fa(g,o.m,o.o),f=new wn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Uu(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),La(o.h,f),Oa(f,g,u)}function Vs(o,u){o.H&&ve(o.H,function(f,g){Pe(u,g,f)}),o.l&&Iu({},function(f,g){Pe(u,g,f)})}function Uu(o,u,f){f=Math.min(o.i.length,f);var g=o.l?y(o.l.Na,o.l,o):null;e:{var R=o.i;let C=-1;for(;;){const j=["count="+f];C==-1?0<f?(C=R[0].g,j.push("ofs="+C)):C=0:j.push("ofs="+C);let we=!0;for(let Je=0;Je<f;Je++){let _e=R[Je].g;const tt=R[Je].map;if(_e-=C,0>_e)C=Math.max(0,R[Je].g-100),we=!1;else try{f_(tt,j,"req"+_e+"_")}catch{g&&g(tt)}}if(we){g=j.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,g}function Bu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;ae||tr(),me||(ae(),me=!0),Rt.add(u,o),o.v=0}}function Ba(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Ts(y(o.Fa,o),Hu(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,ju(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Ts(y(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ft(10),qi(this),ju(this))};function ja(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function ju(o){o.g=new wn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=en(o.qa);Pe(u,"RID","rpc"),Pe(u,"SID",o.K),Pe(u,"AID",o.T),Pe(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Pe(u,"TO",o.ja),Pe(u,"TYPE","xmlhttp"),Vs(o,u),o.m&&o.o&&Fa(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Bi(en(u)),f.m=null,f.P=!0,pu(f,o)}n.Za=function(){this.C!=null&&(this.C=null,qi(this),Ba(this),ft(19))};function Wi(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function $u(o,u){var f=null;if(o.g==u){Wi(o),ja(o),o.g=null;var g=2}else if(Ma(o.h,u))f=u.D,Eu(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var R=o.B;g=Ni(),ce(g,new uu(g,f)),zi(o)}else Bu(o);else if(R=u.s,R==3||R==0&&0<u.X||!(g==1&&m_(o,u)||g==2&&Ba(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),R){case 1:ar(o,5);break;case 4:ar(o,10);break;case 3:ar(o,6);break;default:ar(o,2)}}}function Hu(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function ar(o,u){if(o.j.info("Error code "+u),u==2){var f=y(o.fb,o),g=o.Xa;const R=!g;g=new or(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Fi(g,"https"),Bi(g),R?l_(g.toString(),f):u_(g.toString(),f)}else ft(2);o.G=0,o.l&&o.l.sa(u),qu(o),Lu(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function qu(o){if(o.G=0,o.ka=[],o.l){const u=Tu(o.h);(u.length!=0||o.i.length!=0)&&(L(o.ka,u),L(o.ka,o.i),o.h.i.length=0,M(o.i),o.i.length=0),o.l.ra()}}function zu(o,u,f){var g=f instanceof or?en(f):new or(f);if(g.g!="")u&&(g.g=u+"."+g.g),Ui(g,g.s);else{var R=c.location;g=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;var C=new or(null);g&&Fi(C,g),u&&(C.g=u),R&&Ui(C,R),f&&(C.l=f),g=C}return f=o.D,u=o.ya,f&&u&&Pe(g,f,u),Pe(g,"VER",o.la),Vs(o,g),g}function Wu(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Ne(new ji({eb:f})):new Ne(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ku(){}n=Ku.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ki(){}Ki.prototype.g=function(o,u){return new _t(o,u)};function _t(o,u){Z.call(this),this.g=new Mu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!K(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!K(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Nr(this)}V(_t,Z),_t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_t.prototype.close=function(){Ua(this.g)},_t.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=Qe(o),o=f);u.i.push(new Zm(u.Ya++,o)),u.G==3&&zi(u)},_t.prototype.N=function(){this.g.l=null,delete this.j,Ua(this.g),delete this.g,_t.aa.N.call(this)};function Gu(o){Pa.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}V(Gu,Pa);function Qu(){Va.call(this),this.status=1}V(Qu,Va);function Nr(o){this.g=o}V(Nr,Ku),Nr.prototype.ua=function(){ce(this.g,"a")},Nr.prototype.ta=function(o){ce(this.g,new Gu(o))},Nr.prototype.sa=function(o){ce(this.g,new Qu)},Nr.prototype.ra=function(){ce(this.g,"b")},Ki.prototype.createWebChannel=Ki.prototype.g,_t.prototype.send=_t.prototype.o,_t.prototype.open=_t.prototype.m,_t.prototype.close=_t.prototype.close,Hp=function(){return new Ki},$p=function(){return Ni()},jp=sr,Pc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},xi.NO_ERROR=0,xi.TIMEOUT=8,xi.HTTP_ERROR=6,fo=xi,hu.COMPLETE="complete",Bp=hu,ou.EventType=vs,vs.OPEN="a",vs.CLOSE="b",vs.ERROR="c",vs.MESSAGE="d",Z.prototype.listen=Z.prototype.K,Ls=ou,Ne.prototype.listenOnce=Ne.prototype.L,Ne.prototype.getLastError=Ne.prototype.Ka,Ne.prototype.getLastErrorCode=Ne.prototype.Ba,Ne.prototype.getStatus=Ne.prototype.Z,Ne.prototype.getResponseJson=Ne.prototype.Oa,Ne.prototype.getResponseText=Ne.prototype.oa,Ne.prototype.send=Ne.prototype.ea,Ne.prototype.setWithCredentials=Ne.prototype.Ha,Up=Ne}).apply(typeof Yi<"u"?Yi:typeof self<"u"?self:typeof window<"u"?window:{});const Kh="@firebase/firestore",Gh="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hs="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new gl("@firebase/firestore");function Br(){return Ir.logLevel}function W(n,...e){if(Ir.logLevel<=he.DEBUG){const t=e.map(yl);Ir.debug(`Firestore (${hs}): ${n}`,...t)}}function _n(n,...e){if(Ir.logLevel<=he.ERROR){const t=e.map(yl);Ir.error(`Firestore (${hs}): ${n}`,...t)}}function Gn(n,...e){if(Ir.logLevel<=he.WARN){const t=e.map(yl);Ir.warn(`Firestore (${hs}): ${n}`,...t)}}function yl(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,qp(n,r,t)}function qp(n,e,t){let r=`FIRESTORE (${hs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw _n(r),new Error(r)}function Ie(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||qp(e,s,r)}function ie(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends Tn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(it.UNAUTHENTICATED)))}shutdown(){}}class zT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class WT{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ie(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new qn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qn,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qn)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ie(typeof r.accessToken=="string",31837,{l:r}),new zp(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string",2055,{h:e}),new it(e)}}class KT{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class GT{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new KT(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(it.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Qh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class QT{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Pt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ie(this.o===void 0,3512);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,W("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Qh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ie(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Qh(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=JT(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ue(n,e){return n<e?-1:n>e?1:0}function Vc(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return ue(r,s);{const i=Wp(),a=XT(i.encode(Jh(n,t)),i.encode(Jh(e,t)));return a!==0?a:ue(r,s)}}t+=r>65535?2:1}return ue(n.length,e.length)}function Jh(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function XT(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return ue(n[t],e[t]);return ue(n.length,e.length)}function ns(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh="__name__";class Bt{constructor(e,t,r){t===void 0?t=0:t>e.length&&ee(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ee(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Bt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Bt?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Bt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ue(e.length,t.length)}static compareSegments(e,t){const r=Bt.isNumericId(e),s=Bt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Bt.extractNumericId(e).compare(Bt.extractNumericId(t)):Vc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Hn.fromString(e.substring(4,e.length-2))}}class Ve extends Bt{construct(e,t,r){return new Ve(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new Ve(t)}static emptyPath(){return new Ve([])}}const YT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends Bt{construct(e,t,r){return new Ye(e,t,r)}static isValidIdentifier(e){return YT.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Xh}static keyField(){return new Ye([Xh])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Q(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new Q(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Q(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new Q(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(t)}static emptyPath(){return new Ye([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Ve.fromString(e))}static fromName(e){return new X(Ve.fromString(e).popFirst(5))}static empty(){return new X(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ve.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Ve(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(n,e,t){if(!t)throw new Q(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function ZT(n,e,t,r){if(e===!0&&r===!0)throw new Q(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Yh(n){if(!X.isDocumentKey(n))throw new Q(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Zh(n){if(X.isDocumentKey(n))throw new Q(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Gp(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function El(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ee(12329,{type:typeof n})}function zn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Q(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=El(n);throw new Q(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ii(n,e){if(!Gp(n))throw new Q(D.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new Q(D.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef=-62135596800,tf=1e6;class ke{static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*tf);return new ke(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Q(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Q(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ef)throw new Q(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/tf}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ke._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ii(e,ke._jsonSchema))return new ke(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ef;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ke._jsonSchemaVersion="firestore/timestamp/1.0",ke._jsonSchema={type:Ue("string",ke._jsonSchemaVersion),seconds:Ue("number"),nanoseconds:Ue("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new ke(0,0))}static max(){return new se(new ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=-1;function eI(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new ke(t+1,0):new ke(t,r));return new Qn(s,X.empty(),e)}function tI(n){return new Qn(n.readTime,n.key,ci)}class Qn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Qn(se.min(),X.empty(),ci)}static max(){return new Qn(se.max(),X.empty(),ci)}}function nI(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=X.comparator(n.documentKey,e.documentKey),t!==0?t:ue(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==rI)throw n;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):k.reject(t)}static resolve(e){return new k(((t,r)=>{t(e)}))}static reject(e){return new k(((t,r)=>{r(e)}))}static waitFor(e){return new k(((t,r)=>{let s=0,i=0,a=!1;e.forEach((c=>{++s,c.next((()=>{++i,a&&i===s&&t()}),(l=>r(l)))})),a=!0,i===s&&t()}))}static or(e){let t=k.resolve(!1);for(const r of e)t=t.next((s=>s?k.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new k(((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next((d=>{a[h]=d,++c,c===i&&r(a)}),(d=>s(d)))}}))}static doWhile(e,t){return new k(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function iI(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ds(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}fa.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=-1;function da(n){return n==null}function No(n){return n===0&&1/n==-1/0}function oI(n){return typeof n=="number"&&Number.isInteger(n)&&!No(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp="";function aI(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=nf(e)),e=cI(n.get(t),e);return nf(e)}function cI(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Qp:t+="";break;default:t+=i}}return t}function nf(n){return n+Qp+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Rr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Jp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,t){this.comparator=e,this.root=t||Xe.EMPTY}insert(e,t){return new Oe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zi(this.root,e,this.comparator,!0)}}class Zi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Xe.RED,this.left=s??Xe.EMPTY,this.right=i??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Xe(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Xe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ee(27949);return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw ee(57766)}get value(){throw ee(16141)}get color(){throw ee(16727)}get left(){throw ee(29726)}get right(){throw ee(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Xe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new sf(this.data.getIterator())}getIteratorFrom(e){return new sf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ze(this.comparator);return t.data=e,t}}class sf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new Vt([])}unionWith(e){let t=new ze(Ye.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Vt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ns(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Xp("Invalid base64 string: "+i):i}})(e);return new Ze(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new Ze(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const lI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jn(n){if(Ie(!!n,39018),typeof n=="string"){let e=0;const t=lI.exec(n);if(Ie(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(n.seconds),nanos:Le(n.nanos)}}function Le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Xn(n){return typeof n=="string"?Ze.fromBase64String(n):Ze.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp="server_timestamp",Zp="__type__",eg="__previous_value__",tg="__local_write_time__";function Il(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Zp])===null||t===void 0?void 0:t.stringValue)===Yp}function pa(n){const e=n.mapValue.fields[eg];return Il(e)?pa(e):e}function li(n){const e=Jn(n.mapValue.fields[tg].timestampValue);return new ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e,t,r,s,i,a,c,l,h,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=d}}const xo="(default)";class ui{constructor(e,t){this.projectId=e,this.database=t||xo}static empty(){return new ui("","")}get isDefaultDatabase(){return this.database===xo}isEqual(e){return e instanceof ui&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng="__type__",hI="__max__",eo={mapValue:{}},rg="__vector__",Mo="value";function Yn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Il(n)?4:dI(n)?9007199254740991:fI(n)?10:11:ee(28295,{value:n})}function Qt(n,e){if(n===e)return!0;const t=Yn(n);if(t!==Yn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return li(n).isEqual(li(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Jn(s.timestampValue),c=Jn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return Xn(s.bytesValue).isEqual(Xn(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return Le(s.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(s.geoPointValue.longitude)===Le(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Le(s.integerValue)===Le(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Le(s.doubleValue),c=Le(i.doubleValue);return a===c?No(a)===No(c):isNaN(a)&&isNaN(c)}return!1})(n,e);case 9:return ns(n.arrayValue.values||[],e.arrayValue.values||[],Qt);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(rf(a)!==rf(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!Qt(a[l],c[l])))return!1;return!0})(n,e);default:return ee(52216,{left:n})}}function hi(n,e){return(n.values||[]).find((t=>Qt(t,e)))!==void 0}function rs(n,e){if(n===e)return 0;const t=Yn(n),r=Yn(e);if(t!==r)return ue(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ue(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=Le(i.integerValue||i.doubleValue),l=Le(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return of(n.timestampValue,e.timestampValue);case 4:return of(li(n),li(e));case 5:return Vc(n.stringValue,e.stringValue);case 6:return(function(i,a){const c=Xn(i),l=Xn(a);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=ue(c[h],l[h]);if(d!==0)return d}return ue(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=ue(Le(i.latitude),Le(a.latitude));return c!==0?c:ue(Le(i.longitude),Le(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return af(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var c,l,h,d;const p=i.fields||{},y=a.fields||{},b=(c=p[Mo])===null||c===void 0?void 0:c.arrayValue,V=(l=y[Mo])===null||l===void 0?void 0:l.arrayValue,M=ue(((h=b==null?void 0:b.values)===null||h===void 0?void 0:h.length)||0,((d=V==null?void 0:V.values)===null||d===void 0?void 0:d.length)||0);return M!==0?M:af(b,V)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===eo.mapValue&&a===eo.mapValue)return 0;if(i===eo.mapValue)return 1;if(a===eo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const y=Vc(l[p],d[p]);if(y!==0)return y;const b=rs(c[l[p]],h[d[p]]);if(b!==0)return b}return ue(l.length,d.length)})(n.mapValue,e.mapValue);default:throw ee(23264,{le:t})}}function of(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ue(n,e);const t=Jn(n),r=Jn(e),s=ue(t.seconds,r.seconds);return s!==0?s:ue(t.nanos,r.nanos)}function af(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=rs(t[s],r[s]);if(i)return i}return ue(t.length,r.length)}function ss(n){return kc(n)}function kc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Jn(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Xn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return X.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=kc(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${kc(t.fields[a])}`;return s+"}"})(n.mapValue):ee(61005,{value:n})}function po(n){switch(Yn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=pa(n);return e?16+po(e):16;case 5:return 2*n.stringValue.length;case 6:return Xn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+po(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Rr(r.fields,((i,a)=>{s+=i.length+po(a)})),s})(n.mapValue);default:throw ee(13486,{value:n})}}function Dc(n){return!!n&&"integerValue"in n}function wl(n){return!!n&&"arrayValue"in n}function cf(n){return!!n&&"nullValue"in n}function lf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function go(n){return!!n&&"mapValue"in n}function fI(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[ng])===null||t===void 0?void 0:t.stringValue)===rg}function Xs(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Rr(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Xs(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Xs(n.arrayValue.values[t]);return e}return Object.assign({},n)}function dI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===hI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!go(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xs(t)}setAll(e){let t=Ye.emptyPath(),r={},s=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=Xs(a):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());go(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Qt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];go(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Rr(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new bt(Xs(this.value))}}function sg(n){const e=[];return Rr(n.fields,((t,r)=>{const s=new Ye([t]);if(go(r)){const i=sg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new Vt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new at(e,0,se.min(),se.min(),se.min(),bt.empty(),0)}static newFoundDocument(e,t,r,s){return new at(e,1,t,se.min(),r,s,0)}static newNoDocument(e,t){return new at(e,2,t,se.min(),se.min(),bt.empty(),0)}static newUnknownDocument(e,t){return new at(e,3,t,se.min(),se.min(),bt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof at&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,t){this.position=e,this.inclusive=t}}function uf(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(a.referenceValue),t.key):r=rs(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function hf(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Qt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,t="asc"){this.field=e,this.dir=t}}function pI(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{}class He extends ig{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new mI(e,t,r):t==="array-contains"?new vI(e,r):t==="in"?new EI(e,r):t==="not-in"?new TI(e,r):t==="array-contains-any"?new II(e,r):new He(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new _I(e,r):new yI(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(rs(t,this.value)):t!==null&&Yn(this.value)===Yn(t)&&this.matchesComparison(rs(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Jt extends ig{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Jt(e,t)}matches(e){return og(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function og(n){return n.op==="and"}function ag(n){return gI(n)&&og(n)}function gI(n){for(const e of n.filters)if(e instanceof Jt)return!1;return!0}function Oc(n){if(n instanceof He)return n.field.canonicalString()+n.op.toString()+ss(n.value);if(ag(n))return n.filters.map((e=>Oc(e))).join(",");{const e=n.filters.map((t=>Oc(t))).join(",");return`${n.op}(${e})`}}function cg(n,e){return n instanceof He?(function(r,s){return s instanceof He&&r.op===s.op&&r.field.isEqual(s.field)&&Qt(r.value,s.value)})(n,e):n instanceof Jt?(function(r,s){return s instanceof Jt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,c)=>i&&cg(a,s.filters[c])),!0):!1})(n,e):void ee(19439)}function lg(n){return n instanceof He?(function(t){return`${t.field.canonicalString()} ${t.op} ${ss(t.value)}`})(n):n instanceof Jt?(function(t){return t.op.toString()+" {"+t.getFilters().map(lg).join(" ,")+"}"})(n):"Filter"}class mI extends He{constructor(e,t,r){super(e,t,r),this.key=X.fromName(r.referenceValue)}matches(e){const t=X.comparator(e.key,this.key);return this.matchesComparison(t)}}class _I extends He{constructor(e,t){super(e,"in",t),this.keys=ug("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class yI extends He{constructor(e,t){super(e,"not-in",t),this.keys=ug("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function ug(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>X.fromName(r.referenceValue)))}class vI extends He{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return wl(t)&&hi(t.arrayValue,this.value)}}class EI extends He{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&hi(this.value.arrayValue,t)}}class TI extends He{constructor(e,t){super(e,"not-in",t)}matches(e){if(hi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!hi(this.value.arrayValue,t)}}class II extends He{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!wl(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>hi(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Pe=null}}function ff(n,e=null,t=[],r=[],s=null,i=null,a=null){return new wI(n,e,t,r,s,i,a)}function Al(n){const e=ie(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Oc(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),da(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>ss(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>ss(r))).join(",")),e.Pe=t}return e.Pe}function bl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!pI(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!cg(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!hf(n.startAt,e.startAt)&&hf(n.endAt,e.endAt)}function Nc(n){return X.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function AI(n,e,t,r,s,i,a,c){return new ga(n,e,t,r,s,i,a,c)}function Sl(n){return new ga(n)}function df(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function bI(n){return n.collectionGroup!==null}function Ys(n){const e=ie(n);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ze(Ye.comparator);return a.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Fo(i,r))})),t.has(Ye.keyField().canonicalString())||e.Te.push(new Fo(Ye.keyField(),r))}return e.Te}function Ht(n){const e=ie(n);return e.Ie||(e.Ie=SI(e,Ys(n))),e.Ie}function SI(n,e){if(n.limitType==="F")return ff(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Fo(s.field,i)}));const t=n.endAt?new Lo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Lo(n.startAt.position,n.startAt.inclusive):null;return ff(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function xc(n,e,t){return new ga(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ma(n,e){return bl(Ht(n),Ht(e))&&n.limitType===e.limitType}function hg(n){return`${Al(Ht(n))}|lt:${n.limitType}`}function jr(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>lg(s))).join(", ")}]`),da(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>ss(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>ss(s))).join(",")),`Target(${r})`})(Ht(n))}; limitType=${n.limitType})`}function _a(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of Ys(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,c,l){const h=uf(a,c,l);return a.inclusive?h<=0:h<0})(r.startAt,Ys(r),s)||r.endAt&&!(function(a,c,l){const h=uf(a,c,l);return a.inclusive?h>=0:h>0})(r.endAt,Ys(r),s))})(n,e)}function RI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function fg(n){return(e,t)=>{let r=!1;for(const s of Ys(n)){const i=CI(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function CI(n,e,t){const r=n.field.isKeyField()?X.comparator(e.key,t.key):(function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?rs(l,h):ee(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ee(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Rr(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Jp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=new Oe(X.comparator);function yn(){return PI}const dg=new Oe(X.comparator);function Fs(...n){let e=dg;for(const t of n)e=e.insert(t.key,t);return e}function pg(n){let e=dg;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function dr(){return Zs()}function gg(){return Zs()}function Zs(){return new Cr((n=>n.toString()),((n,e)=>n.isEqual(e)))}const VI=new Oe(X.comparator),kI=new ze(X.comparator);function fe(...n){let e=kI;for(const t of n)e=e.add(t);return e}const DI=new ze(ue);function OI(){return DI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:No(e)?"-0":e}}function mg(n){return{integerValue:""+n}}function NI(n,e){return oI(e)?mg(e):Rl(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(){this._=void 0}}function xI(n,e,t){return n instanceof Uo?(function(s,i){const a={fields:{[Zp]:{stringValue:Yp},[tg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Il(i)&&(i=pa(i)),i&&(a.fields[eg]=i),{mapValue:a}})(t,e):n instanceof fi?yg(n,e):n instanceof di?vg(n,e):(function(s,i){const a=_g(s,i),c=pf(a)+pf(s.Ee);return Dc(a)&&Dc(s.Ee)?mg(c):Rl(s.serializer,c)})(n,e)}function MI(n,e,t){return n instanceof fi?yg(n,e):n instanceof di?vg(n,e):t}function _g(n,e){return n instanceof Bo?(function(r){return Dc(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Uo extends ya{}class fi extends ya{constructor(e){super(),this.elements=e}}function yg(n,e){const t=Eg(e);for(const r of n.elements)t.some((s=>Qt(s,r)))||t.push(r);return{arrayValue:{values:t}}}class di extends ya{constructor(e){super(),this.elements=e}}function vg(n,e){let t=Eg(e);for(const r of n.elements)t=t.filter((s=>!Qt(s,r)));return{arrayValue:{values:t}}}class Bo extends ya{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function pf(n){return Le(n.integerValue||n.doubleValue)}function Eg(n){return wl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function LI(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof fi&&s instanceof fi||r instanceof di&&s instanceof di?ns(r.elements,s.elements,Qt):r instanceof Bo&&s instanceof Bo?Qt(r.Ee,s.Ee):r instanceof Uo&&s instanceof Uo})(n.transform,e.transform)}class FI{constructor(e,t){this.version=e,this.transformResults=t}}class hn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new hn}static exists(e){return new hn(void 0,e)}static updateTime(e){return new hn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class va{}function Tg(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new wg(n.key,hn.none()):new wi(n.key,n.data,hn.none());{const t=n.data,r=bt.empty();let s=new ze(Ye.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Pr(n.key,r,new Vt(s.toArray()),hn.none())}}function UI(n,e,t){n instanceof wi?(function(s,i,a){const c=s.value.clone(),l=mf(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):n instanceof Pr?(function(s,i,a){if(!mo(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=mf(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Ig(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function ei(n,e,t,r){return n instanceof wi?(function(i,a,c,l){if(!mo(i.precondition,a))return c;const h=i.value.clone(),d=_f(i.fieldTransforms,l,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(n,e,t,r):n instanceof Pr?(function(i,a,c,l){if(!mo(i.precondition,a))return c;const h=_f(i.fieldTransforms,l,a),d=a.data;return d.setAll(Ig(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(n,e,t,r):(function(i,a,c){return mo(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,e,t)}function BI(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=_g(r.transform,s||null);i!=null&&(t===null&&(t=bt.empty()),t.set(r.field,i))}return t||null}function gf(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ns(r,s,((i,a)=>LI(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class wi extends va{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Pr extends va{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ig(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function mf(n,e,t){const r=new Map;Ie(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,MI(a,c,t[s]))}return r}function _f(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,xI(i,a,e))}return r}class wg extends va{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jI extends va{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&UI(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ei(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ei(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=gg();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const l=Tg(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(se.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),fe())}isEqual(e){return this.batchId===e.batchId&&ns(this.mutations,e.mutations,((t,r)=>gf(t,r)))&&ns(this.baseMutations,e.baseMutations,((t,r)=>gf(t,r)))}}class Cl{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Ie(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return VI})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Cl(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe,pe;function zI(n){switch(n){case D.OK:return ee(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return ee(15467,{code:n})}}function Ag(n){if(n===void 0)return _n("GRPC error has no .code"),D.UNKNOWN;switch(n){case Fe.OK:return D.OK;case Fe.CANCELLED:return D.CANCELLED;case Fe.UNKNOWN:return D.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return D.INTERNAL;case Fe.UNAVAILABLE:return D.UNAVAILABLE;case Fe.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Fe.NOT_FOUND:return D.NOT_FOUND;case Fe.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Fe.ABORTED:return D.ABORTED;case Fe.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Fe.DATA_LOSS:return D.DATA_LOSS;default:return ee(39323,{code:n})}}(pe=Fe||(Fe={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI=new Hn([4294967295,4294967295],0);function yf(n){const e=Wp().encode(n),t=new Fp;return t.update(e),new Uint8Array(t.digest())}function vf(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Hn([t,r],0),new Hn([s,i],0)]}class Pl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Us(`Invalid padding: ${t}`);if(r<0)throw new Us(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Us(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Us(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Hn.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(Hn.fromNumber(r)));return s.compare(WI)===1&&(s=new Hn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=yf(e),[r,s]=vf(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);if(!this.ye(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Pl(i,s,t);return r.forEach((c=>a.insert(c))),a}insert(e){if(this.fe===0)return;const t=yf(e),[r,s]=vf(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);this.we(a)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Us extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ai.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ea(se.min(),s,new Oe(ue),yn(),fe())}}class Ai{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ai(r,t,fe(),fe(),fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class bg{constructor(e,t){this.targetId=e,this.De=t}}class Sg{constructor(e,t,r=Ze.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Ef{constructor(){this.ve=0,this.Ce=Tf(),this.Fe=Ze.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=fe(),t=fe(),r=fe();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:ee(38017,{changeType:i})}})),new Ai(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=Tf()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ie(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class KI{constructor(e){this.We=e,this.Ge=new Map,this.ze=yn(),this.je=to(),this.Je=to(),this.He=new Oe(ue)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:ee(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const i=s.target;if(Nc(i))if(r===0){const a=new X(i.path);this.Xe(t,a,at.newNoDocument(a,se.min()))}else Ie(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const c=this._t(e),l=c?this.ut(c,e,a):1;if(l!==0){this.rt(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,h)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Xn(r).toUint8Array()}catch(l){if(l instanceof Xp)return Gn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Pl(a,s,i)}catch(l){return Gn(l instanceof Us?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.fe===0?null:c}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const a=this.We.lt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,i,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((i,a)=>{const c=this.st(a);if(c){if(i.current&&Nc(c.target)){const l=new X(c.target.path);this.Tt(l).has(a)||this.It(a,l)||this.Xe(a,l,at.newNoDocument(l,e))}i.Ne&&(t.set(a,i.Le()),i.ke())}}));let r=fe();this.Je.forEach(((i,a)=>{let c=!0;a.forEachWhile((l=>{const h=this.st(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.ze.forEach(((i,a)=>a.setReadTime(e)));const s=new Ea(e,t,this.He,this.ze,r);return this.ze=yn(),this.je=to(),this.Je=to(),this.He=new Oe(ue),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Ef,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new ze(ue),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new ze(ue),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||W("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Ef),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function to(){return new Oe(X.comparator)}function Tf(){return new Oe(X.comparator)}const GI={asc:"ASCENDING",desc:"DESCENDING"},QI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},JI={and:"AND",or:"OR"};class XI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Mc(n,e){return n.useProto3Json||da(e)?e:{value:e}}function jo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Rg(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function YI(n,e){return jo(n,e.toTimestamp())}function qt(n){return Ie(!!n,49232),se.fromTimestamp((function(t){const r=Jn(t);return new ke(r.seconds,r.nanos)})(n))}function Vl(n,e){return Lc(n,e).canonicalString()}function Lc(n,e){const t=(function(s){return new Ve(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Cg(n){const e=Ve.fromString(n);return Ie(Og(e),10190,{key:e.toString()}),e}function Fc(n,e){return Vl(n.databaseId,e.path)}function ic(n,e){const t=Cg(e);if(t.get(1)!==n.databaseId.projectId)throw new Q(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Q(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new X(Vg(t))}function Pg(n,e){return Vl(n.databaseId,e)}function ZI(n){const e=Cg(n);return e.length===4?Ve.emptyPath():Vg(e)}function Uc(n){return new Ve(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Vg(n){return Ie(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function If(n,e,t){return{name:Fc(n,e),fields:t.value.mapValue.fields}}function ew(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ee(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,d){return h.useProto3Json?(Ie(d===void 0||typeof d=="string",58123),Ze.fromBase64String(d||"")):(Ie(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Ze.fromUint8Array(d||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(h){const d=h.code===void 0?D.UNKNOWN:Ag(h.code);return new Q(d,h.message||"")})(a);t=new Sg(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ic(n,r.document.name),i=qt(r.document.updateTime),a=r.document.createTime?qt(r.document.createTime):se.min(),c=new bt({mapValue:{fields:r.document.fields}}),l=at.newFoundDocument(s,i,a,c),h=r.targetIds||[],d=r.removedTargetIds||[];t=new _o(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ic(n,r.document),i=r.readTime?qt(r.readTime):se.min(),a=at.newNoDocument(s,i),c=r.removedTargetIds||[];t=new _o([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ic(n,r.document),i=r.removedTargetIds||[];t=new _o([],i,s,null)}else{if(!("filter"in e))return ee(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new qI(s,i),c=r.targetId;t=new bg(c,a)}}return t}function tw(n,e){let t;if(e instanceof wi)t={update:If(n,e.key,e.value)};else if(e instanceof wg)t={delete:Fc(n,e.key)};else if(e instanceof Pr)t={update:If(n,e.key,e.data),updateMask:uw(e.fieldMask)};else{if(!(e instanceof jI))return ee(16599,{Rt:e.type});t={verify:Fc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const c=a.transform;if(c instanceof Uo)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof fi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof di)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Bo)return{fieldPath:a.field.canonicalString(),increment:c.Ee};throw ee(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:YI(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee(27497)})(n,e.precondition)),t}function nw(n,e){return n&&n.length>0?(Ie(e!==void 0,14353),n.map((t=>(function(s,i){let a=s.updateTime?qt(s.updateTime):qt(i);return a.isEqual(se.min())&&(a=qt(i)),new FI(a,s.transformResults||[])})(t,e)))):[]}function rw(n,e){return{documents:[Pg(n,e.path)]}}function sw(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Pg(n,s);const i=(function(h){if(h.length!==0)return Dg(Jt.create(h,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((d=>(function(y){return{field:$r(y.field),direction:aw(y.dir)}})(d)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Mc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{Vt:t,parent:s}}function iw(n){let e=ZI(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Ie(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=(function(p){const y=kg(p);return y instanceof Jt&&ag(y)?y.getFilters():[y]})(t.where));let a=[];t.orderBy&&(a=(function(p){return p.map((y=>(function(V){return new Fo(Hr(V.field),(function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(y)))})(t.orderBy));let c=null;t.limit&&(c=(function(p){let y;return y=typeof p=="object"?p.value:p,da(y)?null:y})(t.limit));let l=null;t.startAt&&(l=(function(p){const y=!!p.before,b=p.values||[];return new Lo(b,y)})(t.startAt));let h=null;return t.endAt&&(h=(function(p){const y=!p.before,b=p.values||[];return new Lo(b,y)})(t.endAt)),AI(e,s,a,i,c,"F",l,h)}function ow(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function kg(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Hr(t.unaryFilter.field);return He.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Hr(t.unaryFilter.field);return He.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Hr(t.unaryFilter.field);return He.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Hr(t.unaryFilter.field);return He.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ee(61313);default:return ee(60726)}})(n):n.fieldFilter!==void 0?(function(t){return He.create(Hr(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ee(58110);default:return ee(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Jt.create(t.compositeFilter.filters.map((r=>kg(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ee(1026)}})(t.compositeFilter.op))})(n):ee(30097,{filter:n})}function aw(n){return GI[n]}function cw(n){return QI[n]}function lw(n){return JI[n]}function $r(n){return{fieldPath:n.canonicalString()}}function Hr(n){return Ye.fromServerFormat(n.fieldPath)}function Dg(n){return n instanceof He?(function(t){if(t.op==="=="){if(lf(t.value))return{unaryFilter:{field:$r(t.field),op:"IS_NAN"}};if(cf(t.value))return{unaryFilter:{field:$r(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(lf(t.value))return{unaryFilter:{field:$r(t.field),op:"IS_NOT_NAN"}};if(cf(t.value))return{unaryFilter:{field:$r(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$r(t.field),op:cw(t.op),value:t.value}}})(n):n instanceof Jt?(function(t){const r=t.getFilters().map((s=>Dg(s)));return r.length===1?r[0]:{compositeFilter:{op:lw(t.op),filters:r}}})(n):ee(54877,{filter:n})}function uw(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Og(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,t,r,s,i=se.min(),a=se.min(),c=Ze.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Fn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e){this.gt=e}}function fw(n){const e=iw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?xc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(){this.Dn=new pw}addToCollectionParentIndex(e,t){return this.Dn.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(Qn.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(Qn.min())}updateCollectionGroup(e,t,r){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class pw{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ze(Ve.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ze(Ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ng=41943040;class mt{static withCacheSize(e){return new mt(e,mt.DEFAULT_COLLECTION_PERCENTILE,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mt.DEFAULT_COLLECTION_PERCENTILE=10,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,mt.DEFAULT=new mt(Ng,mt.DEFAULT_COLLECTION_PERCENTILE,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),mt.DISABLED=new mt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new is(0)}static ur(){return new is(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af="LruGarbageCollector",gw=1048576;function bf([n,e],[t,r]){const s=ue(n,t);return s===0?ue(e,r):s}class mw{constructor(e){this.Tr=e,this.buffer=new ze(bf),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();bf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class _w{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){W(Af,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ds(t)?W(Af,"Ignoring IndexedDB error during garbage collection: ",t):await fs(t)}await this.Rr(3e5)}))}}class yw{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return k.resolve(fa.ue);const r=new mw(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(wf)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wf):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,i,a,c,l,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,t)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(h=Date.now(),Br()<=he.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-d}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function vw(n,e){return new yw(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(){this.changes=new Cr((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,at.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?k.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&ei(r.mutation,s,Vt.empty(),ke.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,fe()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=fe()){const s=dr();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let a=Fs();return i.forEach(((c,l)=>{a=a.insert(c,l.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=dr();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,fe())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,r,s){let i=yn();const a=Zs(),c=(function(){return Zs()})();return t.forEach(((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Pr)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),ei(d.mutation,h,d.mutation.getFieldMask(),ke.now())):a.set(h.key,Vt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((h,d)=>a.set(h,d))),t.forEach(((h,d)=>{var p;return c.set(h,new Tw(d,(p=a.get(h))!==null&&p!==void 0?p:null))})),c)))}recalculateAndSaveOverlays(e,t){const r=Zs();let s=new Oe(((a,c)=>a-c)),i=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((l=>{const h=t.get(l);if(h===null)return;let d=r.get(l)||Vt.empty();d=c.applyToLocalView(h,d),r.set(l,d);const p=(s.get(c.batchId)||fe()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,p=gg();d.forEach((y=>{if(!i.has(y)){const b=Tg(t.get(y),r.get(y));b!==null&&p.set(y,b),i=i.add(y)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return k.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(a){return X.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):bI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):k.resolve(dr());let c=ci,l=i;return a.next((h=>k.forEach(h,((d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?k.resolve():this.remoteDocumentCache.getEntry(e,d).next((y=>{l=l.insert(d,y)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,l,h,fe()))).next((d=>({batchId:c,changes:pg(d)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new X(t)).next((r=>{let s=Fs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Fs();return this.indexManager.getCollectionParents(e,i).next((c=>k.forEach(c,(l=>{const h=(function(p,y){return new ga(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((d=>{d.forEach(((p,y)=>{a=a.insert(p,y)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((a=>{i.forEach(((l,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,at.newInvalidDocument(d)))}));let c=Fs();return a.forEach(((l,h)=>{const d=i.get(l);d!==void 0&&ei(d.mutation,h,Vt.empty(),ke.now()),_a(t,h)&&(c=c.insert(l,h))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return k.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:qt(s.createTime)}})(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:fw(s.bundledQuery),readTime:qt(s.readTime)}})(t)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(){this.overlays=new Oe(X.comparator),this.kr=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const r=dr();return k.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.wt(e,t,i)})),k.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),k.resolve()}getOverlaysForCollection(e,t,r){const s=dr(),i=t.length+1,a=new X(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return k.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Oe(((h,d)=>h-d));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=dr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=dr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,d)=>c.set(h,d))),!(c.size()>=s)););return k.resolve(c)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new HI(t,r));let i=this.kr.get(t);i===void 0&&(i=fe(),this.kr.set(t,i)),this.kr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(){this.sessionToken=Ze.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(){this.qr=new ze(We.Qr),this.$r=new ze(We.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new We(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new We(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new X(new Ve([])),r=new We(t,e),s=new We(t,e+1),i=[];return this.$r.forEachInRange([r,s],(a=>{this.Wr(a),i.push(a.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new X(new Ve([])),r=new We(t,e),s=new We(t,e+1);let i=fe();return this.$r.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new We(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return X.comparator(e.key,t.key)||ue(e.Hr,t.Hr)}static Ur(e,t){return ue(e.Hr,t.Hr)||X.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new ze(We.Qr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new $I(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Yr=this.Yr.add(new We(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,t){return k.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?Tl:this.er-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new We(t,0),s=new We(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(a=>{const c=this.Zr(a.Hr);i.push(c)})),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ze(ue);return t.forEach((s=>{const i=new We(s,0),a=new We(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],(c=>{r=r.add(c.Hr)}))})),k.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const a=new We(new X(i),0);let c=new ze(ue);return this.Yr.forEachWhile((l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Hr)),!0)}),a),k.resolve(this.ei(c))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){Ie(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return k.forEach(t.mutations,(s=>{const i=new We(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new We(t,0),s=this.Yr.firstAfterOrEqual(r);return k.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e){this.ni=e,this.docs=(function(){return new Oe(X.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return k.resolve(r?r.document.mutableCopy():at.newInvalidDocument(t))}getEntries(e,t){let r=yn();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():at.newInvalidDocument(s))})),k.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=yn();const a=t.path,c=new X(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||nI(tI(d),r)<=0||(s.has(d.key)||_a(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,t,r,s){ee(9500)}ri(e,t){return k.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new Cw(this)}getSize(e){return k.resolve(this.size)}}class Cw extends Ew{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),k.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e){this.persistence=e,this.ii=new Cr((t=>Al(t)),bl),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.si=0,this.oi=new kl,this.targetCount=0,this._i=is.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),k.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new is(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.hr(t),k.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ii.forEach(((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),k.waitFor(i).next((()=>s))}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return k.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),k.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),k.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return k.resolve(r)}containsKey(e,t){return k.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,t){this.ai={},this.overlays={},this.ui=new fa(0),this.ci=!1,this.ci=!0,this.li=new bw,this.referenceDelegate=e(this),this.hi=new Pw(this),this.indexManager=new dw,this.remoteDocumentCache=(function(s){return new Rw(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new hw(t),this.Ti=new ww(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Aw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new Sw(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){W("MemoryPersistence","Starting transaction:",e);const s=new Vw(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,t){return k.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class Vw extends sI{constructor(e){super(),this.currentSequenceNumber=e}}class Dl{constructor(e){this.persistence=e,this.Ai=new kl,this.Ri=null}static Vi(e){return new Dl(e)}get mi(){if(this.Ri)return this.Ri;throw ee(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),k.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),k.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.mi,(r=>{const s=X.fromPath(r);return this.fi(e,s).next((i=>{i||t.removeEntry(s,se.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return k.or([()=>k.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class $o{constructor(e,t){this.persistence=e,this.gi=new Cr((r=>aI(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=vw(this,t)}static Vi(e,t){return new $o(e,t)}Ii(){}di(e){return k.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return k.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?k.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(a=>this.Sr(e,a,t).next((c=>{c||(r++,i.removeEntry(a,se.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),k.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),k.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),k.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=po(e.data.value)),t}Sr(e,t,r){return k.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return k.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=fe(),s=fe();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ol(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return SE()?8:iI(ut())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ps(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ys(e,t,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new kw;return this.ws(e,t,a).next((c=>{if(i.result=c,this.Rs)return this.Ss(e,t,a,c.size)}))})).next((()=>i.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(Br()<=he.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",jr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),k.resolve()):(Br()<=he.DEBUG&&W("QueryEngine","Query:",jr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Br()<=he.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",jr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ht(t))):k.resolve())}ps(e,t){if(df(t))return k.resolve(null);let r=Ht(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=xc(t,null,"F"),r=Ht(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=fe(...i);return this.gs.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const h=this.bs(t,c);return this.Ds(t,h,a,l.readTime)?this.ps(e,xc(t,null,"F")):this.vs(e,h,t,l)}))))})))))}ys(e,t,r,s){return df(t)||s.isEqual(se.min())?k.resolve(null):this.gs.getDocuments(e,r).next((i=>{const a=this.bs(t,i);return this.Ds(t,a,r,s)?k.resolve(null):(Br()<=he.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),jr(t)),this.vs(e,a,t,eI(s,ci)).next((c=>c)))}))}bs(e,t){let r=new ze(fg(e));return t.forEach(((s,i)=>{_a(e,i)&&(r=r.add(i))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,t,r){return Br()<=he.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",jr(t)),this.gs.getDocumentsMatchingQuery(e,t,Qn.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl="LocalStore",Ow=3e8;class Nw{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new Oe(ue),this.Ms=new Cr((i=>Al(i)),bl),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Iw(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function xw(n,e,t,r){return new Nw(n,e,t,r)}async function Mg(n,e){const t=ie(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],c=[];let l=fe();for(const h of s){a.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return t.localDocuments.getDocuments(r,l).next((h=>({Bs:h,removedBatchIds:a,addedBatchIds:c})))}))}))}function Mw(n,e){const t=ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return(function(c,l,h,d){const p=h.batch,y=p.keys();let b=k.resolve();return y.forEach((V=>{b=b.next((()=>d.getEntry(l,V))).next((M=>{const L=h.docVersions.get(V);Ie(L!==null,48541),M.version.compareTo(L)<0&&(p.applyToRemoteDocument(M,h),M.isValidDocument()&&(M.setReadTime(h.commitVersion),d.addEntry(M)))}))})),b.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=fe();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function Lg(n){const e=ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function Lw(n,e){const t=ie(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const c=[];e.targetChanges.forEach(((d,p)=>{const y=s.get(p);if(!y)return;c.push(t.hi.removeMatchingKeys(i,d.removedDocuments,p).next((()=>t.hi.addMatchingKeys(i,d.addedDocuments,p))));let b=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(Ze.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):d.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(d.resumeToken,r)),s=s.insert(p,b),(function(M,L,z){return M.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=Ow?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0})(y,b,d)&&c.push(t.hi.updateTargetData(i,b))}));let l=yn(),h=fe();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))})),c.push(Fw(i,a,e.documentUpdates).next((d=>{l=d.Ls,h=d.ks}))),!r.isEqual(se.min())){const d=t.hi.getLastRemoteSnapshotVersion(i).next((p=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(d)}return k.waitFor(c).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,l,h))).next((()=>l))})).then((i=>(t.Fs=s,i)))}function Fw(n,e,t){let r=fe(),s=fe();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let a=yn();return t.forEach(((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(se.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):W(Nl,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)})),{Ls:a,ks:s}}))}function Uw(n,e){const t=ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Tl),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Bw(n,e){const t=ie(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((i=>i?(s=i,k.resolve(s)):t.hi.allocateTargetId(r).next((a=>(s=new Fn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function Bc(n,e,t){const r=ie(n),s=r.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!ds(a))throw a;W(Nl,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function Sf(n,e,t){const r=ie(n);let s=se.min(),i=fe();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(l,h,d){const p=ie(l),y=p.Ms.get(d);return y!==void 0?k.resolve(p.Fs.get(y)):p.hi.getTargetData(h,d)})(r,a,Ht(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,c.targetId).next((l=>{i=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:se.min(),t?i:fe()))).next((c=>(jw(r,RI(e),c),{documents:c,qs:i})))))}function jw(n,e,t){let r=n.xs.get(e)||se.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.xs.set(e,r)}class Rf{constructor(){this.activeTargetIds=OI()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $w{constructor(){this.Fo=new Rf,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Rf,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf="ConnectivityMonitor";class Pf{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){W(Cf,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){W(Cf,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let no=null;function jc(){return no===null?no=(function(){return 268435456+Math.round(2147483648*Math.random())})():no++,"0x"+no.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc="RestConnection",qw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class zw{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===xo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=jc(),c=this.Go(e,t.toUriEncodedString());W(oc,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,s,i);const{host:h}=new URL(c),d=ls(h);return this.jo(e,c,l,r,d).then((p=>(W(oc,`Received RPC '${e}' ${a}: `,p),p)),(p=>{throw Gn(oc,`RPC '${e}' ${a} failed with error: `,p,"url: ",c,"request:",r),p}))}Jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+hs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,t){const r=qw[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt="WebChannelConnection";class Kw extends zw{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,i){const a=jc();return new Promise(((c,l)=>{const h=new Up;h.setWithCredentials(!0),h.listenOnce(Bp.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case fo.NO_ERROR:const p=h.getResponseJson();W(rt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),c(p);break;case fo.TIMEOUT:W(rt,`RPC '${e}' ${a} timed out`),l(new Q(D.DEADLINE_EXCEEDED,"Request time out"));break;case fo.HTTP_ERROR:const y=h.getStatus();if(W(rt,`RPC '${e}' ${a} failed with status:`,y,"response text:",h.getResponseText()),y>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const V=b==null?void 0:b.error;if(V&&V.status&&V.message){const M=(function(z){const K=z.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(K)>=0?K:D.UNKNOWN})(V.status);l(new Q(M,V.message))}else l(new Q(D.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new Q(D.UNAVAILABLE,"Connection failed."));break;default:ee(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{W(rt,`RPC '${e}' ${a} completed.`)}}));const d=JSON.stringify(s);W(rt,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",d,r,15)}))}P_(e,t,r){const s=jc(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Hp(),c=$p(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const d=i.join("");W(rt,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=a.createWebChannel(d,l);this.T_(p);let y=!1,b=!1;const V=new Ww({Ho:L=>{b?W(rt,`Not sending because RPC '${e}' stream ${s} is closed:`,L):(y||(W(rt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),y=!0),W(rt,`RPC '${e}' stream ${s} sending:`,L),p.send(L))},Yo:()=>p.close()}),M=(L,z,K)=>{L.listen(z,(G=>{try{K(G)}catch(q){setTimeout((()=>{throw q}),0)}}))};return M(p,Ls.EventType.OPEN,(()=>{b||(W(rt,`RPC '${e}' stream ${s} transport opened.`),V.s_())})),M(p,Ls.EventType.CLOSE,(()=>{b||(b=!0,W(rt,`RPC '${e}' stream ${s} transport closed`),V.__(),this.I_(p))})),M(p,Ls.EventType.ERROR,(L=>{b||(b=!0,Gn(rt,`RPC '${e}' stream ${s} transport errored. Name:`,L.name,"Message:",L.message),V.__(new Q(D.UNAVAILABLE,"The operation could not be completed")))})),M(p,Ls.EventType.MESSAGE,(L=>{var z;if(!b){const K=L.data[0];Ie(!!K,16349);const G=K,q=(G==null?void 0:G.error)||((z=G[0])===null||z===void 0?void 0:z.error);if(q){W(rt,`RPC '${e}' stream ${s} received error:`,q);const oe=q.status;let ve=(function(_){const T=Fe[_];if(T!==void 0)return Ag(T)})(oe),I=q.message;ve===void 0&&(ve=D.INTERNAL,I="Unknown error status: "+oe+" with message "+q.message),b=!0,V.__(new Q(ve,I)),p.close()}else W(rt,`RPC '${e}' stream ${s} received:`,K),V.a_(K)}})),M(c,jp.STAT_EVENT,(L=>{L.stat===Pc.PROXY?W(rt,`RPC '${e}' stream ${s} detected buffering proxy`):L.stat===Pc.NOPROXY&&W(rt,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{V.o_()}),0),V}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function ac(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(n){return new XI(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf="PersistentStream";class Ug{constructor(e,t,r,s,i,a,c,l){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Fg(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(_n(t.toString()),_n("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new Q(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return W(Vf,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(W(Vf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Gw extends Ug{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=ew(this.serializer,e),r=(function(i){if(!("targetChange"in i))return se.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?se.min():a.readTime?qt(a.readTime):se.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Uc(this.serializer),t.addTarget=(function(i,a){let c;const l=a.target;if(c=Nc(l)?{documents:rw(i,l)}:{query:sw(i,l).Vt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Rg(i,a.resumeToken);const h=Mc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(se.min())>0){c.readTime=jo(i,a.snapshotVersion.toTimestamp());const h=Mc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const r=ow(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Uc(this.serializer),t.removeTarget=e,this.k_(t)}}class Qw extends Ug{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Ie(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ie(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ie(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=nw(e.writeResults,e.commitTime),r=qt(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Uc(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>tw(this.serializer,r)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{}class Xw extends Jw{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new Q(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(e,Lc(t,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Q(D.UNKNOWN,i.toString())}))}Jo(e,t,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Jo(e,Lc(t,r),s,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Q(D.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class Yw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(_n(t),this._a=!1):W("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="RemoteStore";class Zw{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{Vr(this)&&(W(wr,"Restarting streams for network reachability change."),await(async function(l){const h=ie(l);h.Ia.add(4),await bi(h),h.Aa.set("Unknown"),h.Ia.delete(4),await Ia(h)})(this))}))})),this.Aa=new Yw(r,s)}}async function Ia(n){if(Vr(n))for(const e of n.da)await e(!0)}async function bi(n){for(const e of n.da)await e(!1)}function Bg(n,e){const t=ie(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Fl(t)?Ll(t):ps(t).x_()&&Ml(t,e))}function xl(n,e){const t=ie(n),r=ps(t);t.Ta.delete(e),r.x_()&&jg(t,e),t.Ta.size===0&&(r.x_()?r.B_():Vr(t)&&t.Aa.set("Unknown"))}function Ml(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ps(n).H_(e)}function jg(n,e){n.Ra.$e(e),ps(n).Y_(e)}function Ll(n){n.Ra=new KI({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),ps(n).start(),n.Aa.aa()}function Fl(n){return Vr(n)&&!ps(n).M_()&&n.Ta.size>0}function Vr(n){return ie(n).Ia.size===0}function $g(n){n.Ra=void 0}async function eA(n){n.Aa.set("Online")}async function tA(n){n.Ta.forEach(((e,t)=>{Ml(n,e)}))}async function nA(n,e){$g(n),Fl(n)?(n.Aa.la(e),Ll(n)):n.Aa.set("Unknown")}async function rA(n,e,t){if(n.Aa.set("Online"),e instanceof Sg&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ta.delete(c),s.Ra.removeTarget(c))})(n,e)}catch(r){W(wr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ho(n,r)}else if(e instanceof _o?n.Ra.Ye(e):e instanceof bg?n.Ra.it(e):n.Ra.et(e),!t.isEqual(se.min()))try{const r=await Lg(n.localStore);t.compareTo(r)>=0&&await(function(i,a){const c=i.Ra.Pt(a);return c.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.Ta.get(h);d&&i.Ta.set(h,d.withResumeToken(l.resumeToken,a))}})),c.targetMismatches.forEach(((l,h)=>{const d=i.Ta.get(l);if(!d)return;i.Ta.set(l,d.withResumeToken(Ze.EMPTY_BYTE_STRING,d.snapshotVersion)),jg(i,l);const p=new Fn(d.target,l,h,d.sequenceNumber);Ml(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){W(wr,"Failed to raise snapshot:",r),await Ho(n,r)}}async function Ho(n,e,t){if(!ds(e))throw e;n.Ia.add(1),await bi(n),n.Aa.set("Offline"),t||(t=()=>Lg(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{W(wr,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Ia(n)}))}function Hg(n,e){return e().catch((t=>Ho(n,t,e)))}async function wa(n){const e=ie(n),t=Zn(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Tl;for(;sA(e);)try{const s=await Uw(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,iA(e,s)}catch(s){await Ho(e,s)}qg(e)&&zg(e)}function sA(n){return Vr(n)&&n.Pa.length<10}function iA(n,e){n.Pa.push(e);const t=Zn(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function qg(n){return Vr(n)&&!Zn(n).M_()&&n.Pa.length>0}function zg(n){Zn(n).start()}async function oA(n){Zn(n).na()}async function aA(n){const e=Zn(n);for(const t of n.Pa)e.X_(t.mutations)}async function cA(n,e,t){const r=n.Pa.shift(),s=Cl.from(r,e,t);await Hg(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await wa(n)}async function lA(n,e){e&&Zn(n).Z_&&await(async function(r,s){if((function(a){return zI(a)&&a!==D.ABORTED})(s.code)){const i=r.Pa.shift();Zn(r).N_(),await Hg(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await wa(r)}})(n,e),qg(n)&&zg(n)}async function kf(n,e){const t=ie(n);t.asyncQueue.verifyOperationInProgress(),W(wr,"RemoteStore received new credentials");const r=Vr(t);t.Ia.add(3),await bi(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Ia(t)}async function uA(n,e){const t=ie(n);e?(t.Ia.delete(2),await Ia(t)):e||(t.Ia.add(2),await bi(t),t.Aa.set("Unknown"))}function ps(n){return n.Va||(n.Va=(function(t,r,s){const i=ie(t);return i.ia(),new Gw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:eA.bind(null,n),e_:tA.bind(null,n),n_:nA.bind(null,n),J_:rA.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Fl(n)?Ll(n):n.Aa.set("Unknown")):(await n.Va.stop(),$g(n))}))),n.Va}function Zn(n){return n.ma||(n.ma=(function(t,r,s){const i=ie(t);return i.ia(),new Qw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:oA.bind(null,n),n_:lA.bind(null,n),ea:aA.bind(null,n),ta:cA.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await wa(n)):(await n.ma.stop(),n.Pa.length>0&&(W(wr,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new Ul(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bl(n,e){if(_n("AsyncQueue",`${e}: ${n}`),ds(n))return new Q(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{static emptySet(e){return new Qr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||X.comparator(t.key,r.key):(t,r)=>X.comparator(t.key,r.key),this.keyedMap=Fs(),this.sortedSet=new Oe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Qr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Qr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(){this.fa=new Oe(X.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ee(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class os{constructor(e,t,r,s,i,a,c,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new os(e,t,Qr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ma(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class fA{constructor(){this.queries=Of(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=ie(t),i=s.queries;s.queries=Of(),i.forEach(((a,c)=>{for(const l of c.wa)l.onError(r)}))})(this,new Q(D.ABORTED,"Firestore shutting down"))}}function Of(){return new Cr((n=>hg(n)),ma)}async function Wg(n,e){const t=ie(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new hA,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await t.onListen(s,!0);break;case 1:i.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Bl(a,`Initialization of query '${jr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&jl(t)}async function Kg(n,e){const t=ie(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function dA(n,e){const t=ie(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.wa)c.Ca(s)&&(r=!0);a.ya=s}}r&&jl(t)}function pA(n,e,t){const r=ie(n),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(t);r.queries.delete(e)}function jl(n){n.Da.forEach((e=>{e.next()}))}var $c,Nf;(Nf=$c||($c={})).Fa="default",Nf.Cache="cache";class Gg{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new os(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=os.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==$c.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e){this.key=e}}class Jg{constructor(e){this.key=e}}class gA{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=fe(),this.mutatedKeys=fe(),this.Xa=fg(e),this.eu=new Qr(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Df,s=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((d,p)=>{const y=s.get(d),b=_a(this.query,p)?p:null,V=!!y&&this.mutatedKeys.has(y.key),M=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let L=!1;y&&b?y.data.isEqual(b.data)?V!==M&&(r.track({type:3,doc:b}),L=!0):this.iu(y,b)||(r.track({type:2,doc:b}),L=!0,(l&&this.Xa(b,l)>0||h&&this.Xa(b,h)<0)&&(c=!0)):!y&&b?(r.track({type:0,doc:b}),L=!0):y&&!b&&(r.track({type:1,doc:y}),L=!0,(l||h)&&(c=!0)),L&&(b?(a=a.add(b),i=M?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{eu:a,ru:r,Ds:c,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((d,p)=>(function(b,V){const M=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee(20277,{At:L})}};return M(b)-M(V)})(d.type,p.type)||this.Xa(d.doc,p.doc))),this.su(r),s=s!=null&&s;const c=t&&!s?this.ou():[],l=this.Za.size===0&&this.current&&!s?1:0,h=l!==this.Ya;return this.Ya=l,a.length!==0||h?{snapshot:new os(this.query,e.eu,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Df,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=fe(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new Jg(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new Qg(r))})),t}uu(e){this.Ha=e.qs,this.Za=fe();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return os.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const $l="SyncEngine";class mA{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class _A{constructor(e){this.key=e,this.lu=!1}}class yA{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new Cr((c=>hg(c)),ma),this.Tu=new Map,this.Iu=new Set,this.du=new Oe(X.comparator),this.Eu=new Map,this.Au=new kl,this.Ru={},this.Vu=new Map,this.mu=is.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function vA(n,e,t=!0){const r=nm(n);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await Xg(r,e,t,!0),s}async function EA(n,e){const t=nm(n);await Xg(t,e,!0,!1)}async function Xg(n,e,t,r){const s=await Bw(n.localStore,Ht(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await TA(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Bg(n.remoteStore,s),c}async function TA(n,e,t,r,s){n.gu=(p,y,b)=>(async function(M,L,z,K){let G=L.view.nu(z);G.Ds&&(G=await Sf(M.localStore,L.query,!1).then((({documents:I})=>L.view.nu(I,G))));const q=K&&K.targetChanges.get(L.targetId),oe=K&&K.targetMismatches.get(L.targetId)!=null,ve=L.view.applyChanges(G,M.isPrimaryClient,q,oe);return Mf(M,L.targetId,ve._u),ve.snapshot})(n,p,y,b);const i=await Sf(n.localStore,e,!0),a=new gA(e,i.qs),c=a.nu(i.documents),l=Ai.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,l);Mf(n,t,h._u);const d=new mA(e,t,a);return n.Pu.set(e,d),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),h.snapshot}async function IA(n,e,t){const r=ie(n),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((a=>!ma(a,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Bc(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&xl(r.remoteStore,s.targetId),Hc(r,s.targetId)})).catch(fs)):(Hc(r,s.targetId),await Bc(r.localStore,s.targetId,!0))}async function wA(n,e){const t=ie(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),xl(t.remoteStore,r.targetId))}async function AA(n,e,t){const r=kA(n);try{const s=await(function(a,c){const l=ie(a),h=ke.now(),d=c.reduce(((b,V)=>b.add(V.key)),fe());let p,y;return l.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let V=yn(),M=fe();return l.Os.getEntries(b,d).next((L=>{V=L,V.forEach(((z,K)=>{K.isValidDocument()||(M=M.add(z))}))})).next((()=>l.localDocuments.getOverlayedDocuments(b,V))).next((L=>{p=L;const z=[];for(const K of c){const G=BI(K,p.get(K.key).overlayedDocument);G!=null&&z.push(new Pr(K.key,G,sg(G.value.mapValue),hn.exists(!0)))}return l.mutationQueue.addMutationBatch(b,h,z,c)})).next((L=>{y=L;const z=L.applyToLocalDocumentSet(p,M);return l.documentOverlayCache.saveOverlays(b,L.batchId,z)}))})).then((()=>({batchId:y.batchId,changes:pg(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,l){let h=a.Ru[a.currentUser.toKey()];h||(h=new Oe(ue)),h=h.insert(c,l),a.Ru[a.currentUser.toKey()]=h})(r,s.batchId,t),await Si(r,s.changes),await wa(r.remoteStore)}catch(s){const i=Bl(s,"Failed to persist write");t.reject(i)}}async function Yg(n,e){const t=ie(n);try{const r=await Lw(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.Eu.get(i);a&&(Ie(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?Ie(a.lu,14607):s.removedDocuments.size>0&&(Ie(a.lu,42227),a.lu=!1))})),await Si(t,r,e)}catch(r){await fs(r)}}function xf(n,e,t){const r=ie(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const l=ie(a);l.onlineState=c;let h=!1;l.queries.forEach(((d,p)=>{for(const y of p.wa)y.va(c)&&(h=!0)})),h&&jl(l)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function bA(n,e,t){const r=ie(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),i=s&&s.key;if(i){let a=new Oe(X.comparator);a=a.insert(i,at.newNoDocument(i,se.min()));const c=fe().add(i),l=new Ea(se.min(),new Map,new Oe(ue),a,c);await Yg(r,l),r.du=r.du.remove(i),r.Eu.delete(e),Hl(r)}else await Bc(r.localStore,e,!1).then((()=>Hc(r,e,t))).catch(fs)}async function SA(n,e){const t=ie(n),r=e.batch.batchId;try{const s=await Mw(t.localStore,e);em(t,r,null),Zg(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Si(t,s)}catch(s){await fs(s)}}async function RA(n,e,t){const r=ie(n);try{const s=await(function(a,c){const l=ie(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let d;return l.mutationQueue.lookupMutationBatch(h,c).next((p=>(Ie(p!==null,37113),d=p.keys(),l.mutationQueue.removeMutationBatch(h,p)))).next((()=>l.mutationQueue.performConsistencyCheck(h))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(h,d,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d))).next((()=>l.localDocuments.getDocuments(h,d)))}))})(r.localStore,e);em(r,e,t),Zg(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Si(r,s)}catch(s){await fs(s)}}function Zg(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function em(n,e,t){const r=ie(n);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Hc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||tm(n,r)}))}function tm(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(xl(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Hl(n))}function Mf(n,e,t){for(const r of t)r instanceof Qg?(n.Au.addReference(r.key,e),CA(n,r)):r instanceof Jg?(W($l,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||tm(n,r.key)):ee(19791,{yu:r})}function CA(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(W($l,"New document in limbo: "+t),n.Iu.add(r),Hl(n))}function Hl(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new X(Ve.fromString(e)),r=n.mu.next();n.Eu.set(r,new _A(t)),n.du=n.du.insert(t,r),Bg(n.remoteStore,new Fn(Ht(Sl(t.path)),r,"TargetPurposeLimboResolution",fa.ue))}}async function Si(n,e,t){const r=ie(n),s=[],i=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((c,l)=>{a.push(r.gu(l,e,t).then((h=>{var d;if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=t==null?void 0:t.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Ol.Es(l.targetId,h);i.push(p)}})))})),await Promise.all(a),r.hu.J_(s),await(async function(l,h){const d=ie(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>k.forEach(h,(y=>k.forEach(y.Is,(b=>d.persistence.referenceDelegate.addReference(p,y.targetId,b))).next((()=>k.forEach(y.ds,(b=>d.persistence.referenceDelegate.removeReference(p,y.targetId,b)))))))))}catch(p){if(!ds(p))throw p;W(Nl,"Failed to update sequence numbers: "+p)}for(const p of h){const y=p.targetId;if(!p.fromCache){const b=d.Fs.get(y),V=b.snapshotVersion,M=b.withLastLimboFreeSnapshotVersion(V);d.Fs=d.Fs.insert(y,M)}}})(r.localStore,i))}async function PA(n,e){const t=ie(n);if(!t.currentUser.isEqual(e)){W($l,"User change. New user:",e.toKey());const r=await Mg(t.localStore,e);t.currentUser=e,(function(i,a){i.Vu.forEach((c=>{c.forEach((l=>{l.reject(new Q(D.CANCELLED,a))}))})),i.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Si(t,r.Bs)}}function VA(n,e){const t=ie(n),r=t.Eu.get(e);if(r&&r.lu)return fe().add(r.key);{let s=fe();const i=t.Tu.get(e);if(!i)return s;for(const a of i){const c=t.Pu.get(a);s=s.unionWith(c.view.tu)}return s}}function nm(n){const e=ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Yg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=VA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bA.bind(null,e),e.hu.J_=dA.bind(null,e.eventManager),e.hu.pu=pA.bind(null,e.eventManager),e}function kA(n){const e=ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=SA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=RA.bind(null,e),e}class qo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ta(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return xw(this.persistence,new Dw,e.initialUser,this.serializer)}Du(e){return new xg(Dl.Vi,this.serializer)}bu(e){return new $w}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}qo.provider={build:()=>new qo};class DA extends qo{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Ie(this.persistence.referenceDelegate instanceof $o,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new _w(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?mt.withCacheSize(this.cacheSizeBytes):mt.DEFAULT;return new xg((r=>$o.Vi(r,t)),this.serializer)}}class qc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>xf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=PA.bind(null,this.syncEngine),await uA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new fA})()}createDatastore(e){const t=Ta(e.databaseInfo.databaseId),r=(function(i){return new Kw(i)})(e.databaseInfo);return(function(i,a,c,l){return new Xw(i,a,c,l)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,a,c){return new Zw(r,s,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>xf(this.syncEngine,t,0)),(function(){return Pf.C()?new Pf:new Hw})())}createSyncEngine(e,t){return(function(s,i,a,c,l,h,d){const p=new yA(s,i,a,c,l,h);return d&&(p.fu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=ie(s);W(wr,"RemoteStore shutting down."),i.Ia.add(5),await bi(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}qc.provider={build:()=>new qc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):_n("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er="FirestoreClient";class OA{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=it.UNAUTHENTICATED,this.clientId=vl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{W(er,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(W(er,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Bl(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function cc(n,e){n.asyncQueue.verifyOperationInProgress(),W(er,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Mg(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Gn("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{W("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Gn("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function Lf(n,e){n.asyncQueue.verifyOperationInProgress();const t=await NA(n);W(er,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>kf(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>kf(e.remoteStore,s))),n._onlineComponents=e}async function NA(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){W(er,"Using user provided OfflineComponentProvider");try{await cc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Gn("Error using user provided cache. Falling back to memory cache: "+t),await cc(n,new qo)}}else W(er,"Using default OfflineComponentProvider"),await cc(n,new DA(void 0));return n._offlineComponents}async function sm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(W(er,"Using user provided OnlineComponentProvider"),await Lf(n,n._uninitializedComponentsProvider._online)):(W(er,"Using default OnlineComponentProvider"),await Lf(n,new qc))),n._onlineComponents}function xA(n){return sm(n).then((e=>e.syncEngine))}async function zc(n){const e=await sm(n),t=e.eventManager;return t.onListen=vA.bind(null,e.syncEngine),t.onUnlisten=IA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=EA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=wA.bind(null,e.syncEngine),t}function MA(n,e,t={}){const r=new qn;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,l,h){const d=new rm({next:y=>{d.Ou(),a.enqueueAndForget((()=>Kg(i,p))),y.fromCache&&l.source==="server"?h.reject(new Q(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),p=new Gg(c,d,{includeMetadataChanges:!0,ka:!0});return Wg(i,p)})(await zc(n),n.asyncQueue,e,t,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om="firestore.googleapis.com",Uf=!0;class Bf{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Q(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=om,this.ssl=Uf}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Uf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Ng;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<gw)throw new Q(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ZT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=im((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Q(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Q(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Q(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Aa{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new qT;switch(r.type){case"firstParty":return new GT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Ff.get(t);r&&(W("ComponentProvider","Removing Datastore"),Ff.delete(t),r.terminate())})(this),Promise.resolve()}}function LA(n,e,t,r={}){var s;n=zn(n,Aa);const i=ls(e),a=n._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),l=`${e}:${t}`;i&&(Vp(`https://${l}`),kp("Firestore",!0)),a.host!==om&&a.host!==l&&Gn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:l,ssl:i,emulatorOptions:r});if(!Er(h,c)&&(n._setSettings(h),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=it.MOCK_USER;else{d=_E(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new Q(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new it(y)}n._authCredentials=new zT(new zp(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ri(this.firestore,e,this._query)}}class qe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qe(this.firestore,e,this._key)}toJSON(){return{type:qe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Ii(t,qe._jsonSchema))return new qe(e,r||null,new X(Ve.fromString(t.referencePath)))}}qe._jsonSchemaVersion="firestore/documentReference/1.0",qe._jsonSchema={type:Ue("string",qe._jsonSchemaVersion),referencePath:Ue("string")};class Wn extends Ri{constructor(e,t,r){super(e,t,Sl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qe(this.firestore,null,new X(e))}withConverter(e){return new Wn(this.firestore,e,this._path)}}function ro(n,e,...t){if(n=It(n),Kp("collection","path",e),n instanceof Aa){const r=Ve.fromString(e,...t);return Zh(r),new Wn(n,null,r)}{if(!(n instanceof qe||n instanceof Wn))throw new Q(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ve.fromString(e,...t));return Zh(r),new Wn(n.firestore,null,r)}}function so(n,e,...t){if(n=It(n),arguments.length===1&&(e=vl.newId()),Kp("doc","path",e),n instanceof Aa){const r=Ve.fromString(e,...t);return Yh(r),new qe(n,null,new X(r))}{if(!(n instanceof qe||n instanceof Wn))throw new Q(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ve.fromString(e,...t));return Yh(r),new qe(n.firestore,n instanceof Wn?n.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf="AsyncQueue";class $f{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Fg(this,"async_queue_retry"),this.oc=()=>{const r=ac();r&&W(jf,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=ac();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=ac();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new qn;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ds(e))throw e;W(jf,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,_n("INTERNAL UNHANDLED ERROR: ",Hf(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=Ul.createAndSchedule(this,e,t,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&ee(47125,{hc:Hf(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Hf(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qf(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}class pi extends Aa{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new $f,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new $f(e),this._firestoreClient=void 0,await e}}}function FA(n,e){const t=typeof n=="object"?n:xp(),r=typeof n=="string"?n:xo,s=_l(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=gE("firestore");i&&LA(s,...i)}return s}function ql(n){if(n._terminated)throw new Q(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||UA(n),n._firestoreClient}function UA(n){var e,t,r;const s=n._freezeSettings(),i=(function(c,l,h,d){return new uI(c,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,im(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new OA(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&(function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this._byteString=e}static fromBase64String(e){try{return new St(Ze.fromBase64String(e))}catch(t){throw new Q(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new St(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:St._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ii(e,St._jsonSchema))return St.fromBase64String(e.bytes)}}St._jsonSchemaVersion="firestore/bytes/1.0",St._jsonSchema={type:Ue("string",St._jsonSchemaVersion),bytes:Ue("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Q(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Q(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Q(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:zt._jsonSchemaVersion}}static fromJSON(e){if(Ii(e,zt._jsonSchema))return new zt(e.latitude,e.longitude)}}zt._jsonSchemaVersion="firestore/geoPoint/1.0",zt._jsonSchema={type:Ue("string",zt._jsonSchemaVersion),latitude:Ue("number"),longitude:Ue("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Wt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ii(e,Wt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Wt(e.vectorValues);throw new Q(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Wt._jsonSchemaVersion="firestore/vectorValue/1.0",Wt._jsonSchema={type:Ue("string",Wt._jsonSchemaVersion),vectorValues:Ue("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA=/^__.*__$/;class jA{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Pr(e,this.data,this.fieldMask,t,this.fieldTransforms):new wi(e,this.data,t,this.fieldTransforms)}}function cm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee(40011,{Ec:n})}}class Wl{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Wl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return zo(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(cm(this.Ec)&&BA.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class $A{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ta(e)}Dc(e,t,r,s=!1){return new Wl({Ec:e,methodName:t,bc:r,path:Ye.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function HA(n){const e=n._freezeSettings(),t=Ta(n._databaseId);return new $A(n._databaseId,!!e.ignoreUndefinedProperties,t)}function qA(n,e,t,r,s,i={}){const a=n.Dc(i.merge||i.mergeFields?2:0,e,t,s);fm("Data must be an object, but it was:",a,r);const c=um(r,a);let l,h;if(i.merge)l=new Vt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const y=zA(e,p,t);if(!a.contains(y))throw new Q(D.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);KA(d,y)||d.push(y)}l=new Vt(d),h=a.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,h=a.fieldTransforms;return new jA(new bt(c),l,h)}function lm(n,e){if(hm(n=It(n)))return fm("Unsupported field value:",e,n),um(n,e);if(n instanceof am)return(function(r,s){if(!cm(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const c of r){let l=lm(c,s.yc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=It(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return NI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ke.fromDate(r);return{timestampValue:jo(s.serializer,i)}}if(r instanceof ke){const i=new ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:jo(s.serializer,i)}}if(r instanceof zt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof St)return{bytesValue:Rg(s.serializer,r._byteString)};if(r instanceof qe){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Vl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Wt)return(function(a,c){return{mapValue:{fields:{[ng]:{stringValue:rg},[Mo]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw c.wc("VectorValues must only contain numeric values.");return Rl(c.serializer,h)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${El(r)}`)})(n,e)}function um(n,e){const t={};return Jp(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rr(n,((r,s)=>{const i=lm(s,e.Vc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function hm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ke||n instanceof zt||n instanceof St||n instanceof qe||n instanceof am||n instanceof Wt)}function fm(n,e,t){if(!hm(t)||!Gp(t)){const r=El(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function zA(n,e,t){if((e=It(e))instanceof zl)return e._internalPath;if(typeof e=="string")return dm(n,e);throw zo("Field path arguments must be of type string or ",n,!1,void 0,t)}const WA=new RegExp("[~\\*/\\[\\]]");function dm(n,e,t){if(e.search(WA)>=0)throw zo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new zl(...e.split("."))._internalPath}catch{throw zo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function zo(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new Q(D.INVALID_ARGUMENT,c+n+l)}function KA(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new GA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(gm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class GA extends pm{data(){return super.data()}}function gm(n,e){return typeof e=="string"?dm(n,e):e instanceof zl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new Q(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class QA{convertValue(e,t="none"){switch(Yn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Xn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ee(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Rr(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[Mo].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((a=>Le(a.doubleValue)));return new Wt(i)}convertGeoPoint(e){return new zt(Le(e.latitude),Le(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=pa(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(li(e));default:return null}}convertTimestamp(e){const t=Jn(e);return new ke(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Ve.fromString(e);Ie(Og(r),9688,{name:e});const s=new ui(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(t)||_n(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JA(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Bs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _r extends pm{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new yo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(gm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=_r._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}_r._jsonSchemaVersion="firestore/documentSnapshot/1.0",_r._jsonSchema={type:Ue("string",_r._jsonSchemaVersion),bundleSource:Ue("string","DocumentSnapshot"),bundleName:Ue("string"),bundle:Ue("string")};class yo extends _r{data(e={}){return super.data(e)}}class yr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Bs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new yo(this._firestore,this._userDataWriter,r.key,r,new Bs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Q(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const l=new yo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Bs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new yo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Bs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:XA(c.type),doc:l,oldIndex:h,newIndex:d}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=yr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=vl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function XA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee(61501,{type:n})}}yr._jsonSchemaVersion="firestore/querySnapshot/1.0",yr._jsonSchema={type:Ue("string",yr._jsonSchemaVersion),bundleSource:Ue("string","QuerySnapshot"),bundleName:Ue("string"),bundle:Ue("string")};class Kl extends QA{constructor(e){super(),this.firestore=e}convertBytes(e){return new St(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,t)}}function lc(n){n=zn(n,Ri);const e=zn(n.firestore,pi),t=ql(e),r=new Kl(e);return mm(n._query),MA(t,n._query).then((s=>new yr(e,r,n,s)))}function io(n,e,t){n=zn(n,qe);const r=zn(n.firestore,pi),s=JA(n.converter,e,t);return ZA(r,[qA(HA(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,hn.none())])}function YA(n,...e){var t,r,s;n=It(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||qf(e[a])||(i=e[a++]);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(qf(e[a])){const p=e[a];e[a]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[a+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[a+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,h,d;if(n instanceof qe)h=zn(n.firestore,pi),d=Sl(n._key.path),l={next:p=>{e[a]&&e[a](e0(h,n,p))},error:e[a+1],complete:e[a+2]};else{const p=zn(n,Ri);h=zn(p.firestore,pi),d=p._query;const y=new Kl(h);l={next:b=>{e[a]&&e[a](new yr(h,y,p,b))},error:e[a+1],complete:e[a+2]},mm(n._query)}return(function(y,b,V,M){const L=new rm(M),z=new Gg(b,L,V);return y.asyncQueue.enqueueAndForget((async()=>Wg(await zc(y),z))),()=>{L.Ou(),y.asyncQueue.enqueueAndForget((async()=>Kg(await zc(y),z)))}})(ql(h),d,c,l)}function ZA(n,e){return(function(r,s){const i=new qn;return r.asyncQueue.enqueueAndForget((async()=>AA(await xA(r),s,i))),i.promise})(ql(n),e)}function e0(n,e,t){const r=t.docs.get(e._key),s=new Kl(n);return new _r(n,s,e._key,r,new Bs(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){hs=s})(us),ts(new Tr("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new pi(new WT(r.getProvider("auth-internal")),new QT(a,r.getProvider("app-check-internal")),(function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Q(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ui(h.options.projectId,d)})(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),$n(Kh,Gh,e),$n(Kh,Gh,"esm2017")})();var t0="firebase",n0="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$n(t0,n0,"app");const r0={apiKey:"AIzaSyDtS7-vuJ5TDEBaKqLXkvEYRjXYhu1XSY8",authDomain:"cis371-e15a4.firebaseapp.com",projectId:"cis371-e15a4",storageBucket:"cis371-e15a4.firebasestorage.app",messagingSenderId:"698632450490",appId:"1:698632450490:web:5bd30d0bfb263bc65fed83"},s0=Np(r0),Sn=FA(s0),Ci=Kv("BeverageStore",{state:()=>({temps:kh,currentTemp:kh[0],bases:[],currentBase:null,syrups:[],currentSyrup:null,creamers:[],currentCreamer:null,beverages:[],currentBeverage:null,currentName:"",user:null,snapshotUnsubscribe:null}),actions:{init(){const n=ro(Sn,"bases");lc(n).then(r=>{r.empty?(Dh.forEach(s=>{const i=so(Sn,`bases/${s.id}`);io(i,{name:s.name,color:s.color}).then(()=>{console.log(`New base with ID ${s.id} inserted`)}).catch(a=>{console.error("Error adding document: ",a)})}),this.bases=Dh):this.bases=r.docs.map(s=>({id:s.id,name:s.data().name,color:s.data().color})),this.currentBase=this.bases[0],console.log("getting bases: ",this.bases)}).catch(r=>{console.error("Error getting documents:",r)});const e=ro(Sn,"syrups");lc(e).then(r=>{r.empty?(Oh.forEach(s=>{const i=so(Sn,`syrups/${s.id}`);io(i,{name:s.name,color:s.color}).then(()=>{console.log(`New syrup with ID ${s.id} inserted`)}).catch(a=>{console.error("Error adding document: ",a)})}),this.syrups=Oh):(this.syrups=r.docs.map(s=>({id:s.id,name:s.data().name,color:s.data().color})),console.log("getting syrups: ",this.syrups)),this.currentSyrup=this.syrups[0]}).catch(r=>{console.error("Error getting syrups:",r)});const t=ro(Sn,"creamers");lc(t).then(r=>{r.empty?(Nh.forEach(s=>{const i=so(Sn,`creamers/${s.id}`);io(i,{name:s.name,color:s.color}).then(()=>{console.log(`New creamer with ID ${s.id} inserted`)}).catch(a=>{console.error("Error adding document: ",a)})}),this.creamers=Nh):(this.creamers=r.docs.map(s=>({id:s.id,name:s.data().name,color:s.data().color})),console.log("getting creamers: ",this.creamers)),this.currentCreamer=this.creamers[0]}).catch(r=>{console.error("Error getting creamers:",r)})},showBeverage(){this.currentBeverage&&(this.currentName=this.currentBeverage.name,this.currentTemp=this.currentBeverage.temp,this.currentBase=this.currentBeverage.base,this.currentSyrup=this.currentBeverage.syrup,this.currentCreamer=this.currentBeverage.creamer,console.log("currentBeverage changed",this.currentBase,this.currentCreamer,this.currentSyrup))},makeBeverage(){var r,s,i;if(!this.user)return Promise.resolve("Sign in first");const n=this.currentName||crypto.randomUUID(),e=so(Sn,"users",this.user.uid,"beverages",n),t={name:this.currentName||"New Beverage",temp:this.currentTemp,baseID:((r=this.currentBase)==null?void 0:r.id)||null,syrupID:((s=this.currentSyrup)==null?void 0:s.id)||null,creamerID:((i=this.currentCreamer)==null?void 0:i.id)||null};return io(e,t,{merge:!0}).then(()=>(console.log("Saved Beverage: ",t),"Beverage Saved!"))},setUser(n){if(this.snapshotUnsubscribe&&(this.snapshotUnsubscribe(),this.snapshotUnsubscribe=null),this.user=n,!n){this.beverages=[],this.currentBeverage=null;return}const e=ro(Sn,"users",n.uid,"beverages");this.snapshotUnsubscribe=YA(e,t=>{const r=t.docs.map(s=>{const i=s.data();return{id:s.id,name:i.name,temp:this.temps.find(a=>a===i.temp),base:this.bases.find(a=>a.id===i.baseID),syrup:this.syrups.find(a=>a.id===i.syrupID),creamer:this.creamers.find(a=>a.id===i.creamerID)}});if(this.beverages=r,r.length>0){const s=this.currentBeverage&&r.some(i=>i.id===this.currentBeverage.id);this.currentBeverage=s?r.find(i=>i.id===this.currentBeverage.id):r[0]}else this.currentBase=null})}}}),i0=yi({__name:"Syrup",setup(n){const e=Ci();return(t,r)=>{var s;return ge(),Se("div",{class:"syrup",style:cs({"--texture-color":(s=Ee(e).currentSyrup)==null?void 0:s.color})},null,4)}}}),o0=Sr(i0,[["__scopeId","data-v-969d30c3"]]),a0=yi({__name:"Base",setup(n){const e=Ci();return(t,r)=>{var s;return ge(),Se("div",{class:"baseBeverage",style:cs({backgroundColor:(s=Ee(e).currentBase)==null?void 0:s.color})},null,4)}}}),c0=Sr(a0,[["__scopeId","data-v-f853ce7d"]]),l0={class:"froth"},u0=yi({__name:"Creamer",setup(n){const e=Ci();return(t,r)=>(ge(),Se("div",l0,[(ge(),Se(xe,null,On(5,()=>{var s;return be("div",{class:"foam",style:cs({backgroundColor:(s=Ee(e).currentCreamer)==null?void 0:s.color})},null,4)}),64))]))}}),h0=Sr(u0,[["__scopeId","data-v-416a324e"]]),f0={},d0={id:"steam"},p0={class:"stream"};function g0(n,e){return ge(),Se("div",d0,[(ge(),Se(xe,null,On(3,()=>be("div",p0)),64))])}const m0=Sr(f0,[["render",g0]]),_0={},y0={id:"condensation"},v0={class:"flake"};function E0(n,e){return ge(),Se("div",y0,[(ge(),Se(xe,null,On(3,()=>be("div",v0)),64))])}const T0=Sr(_0,[["render",E0]]),I0=yi({__name:"Beverage",props:{isIced:{type:Boolean}},setup(n){const e=Ci();return(t,r)=>(ge(),Nn(oE,null,{default:Ns(()=>[n.isIced?(ge(),Nn(T0,{key:0})):(ge(),Nn(m0,{key:1})),Tt(nE,null,{top:Ns(()=>{var s;return[((s=Ee(e).currentCreamer)==null?void 0:s.color)!=="transparent"?(ge(),Nn(h0,{key:0})):Gs("",!0)]}),mid:Ns(()=>{var s;return[((s=Ee(e).currentSyrup)==null?void 0:s.color)!=="transparent"?(ge(),Nn(o0,{key:0})):Gs("",!0)]}),bottom:Ns(()=>[Tt(c0)]),_:1})]),_:1}))}});function Gl(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function _m(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const w0=_m,ym=new Ei("auth","Firebase",_m());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo=new gl("@firebase/auth");function A0(n,...e){Wo.logLevel<=he.WARN&&Wo.warn(`Auth (${us}): ${n}`,...e)}function vo(n,...e){Wo.logLevel<=he.ERROR&&Wo.error(`Auth (${us}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(n,...e){throw Jl(n,...e)}function Ot(n,...e){return Jl(n,...e)}function Ql(n,e,t){const r=Object.assign(Object.assign({},w0()),{[e]:t});return new Ei("auth","Firebase",r).create(e,{appName:n.name})}function vr(n){return Ql(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function b0(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Xt(n,"argument-error"),Ql(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Jl(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ym.create(n,...e)}function ne(n,e,...t){if(!n)throw Jl(e,...t)}function cn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw vo(e),new Error(e)}function vn(n,e){n||cn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function S0(){return zf()==="http:"||zf()==="https:"}function zf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(S0()||wE()||"connection"in navigator)?navigator.onLine:!0}function C0(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,t){this.shortDelay=e,this.longDelay=t,vn(t>e,"Short delay should be less than long delay!"),this.isMobile=EE()||AE()}get(){return R0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(n,e){vn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],k0=new Pi(3e4,6e4);function Yl(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function gs(n,e,t,r,s={}){return Em(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Ti(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:l},i);return IE()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&ls(n.emulatorConfig.host)&&(h.credentials="include"),vm.fetch()(await Tm(n,n.config.apiHost,t,c),h)})}async function Em(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},P0),e);try{const s=new O0(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw oo(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw oo(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw oo(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw oo(n,"user-disabled",a);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Ql(n,d,h);Xt(n,d)}}catch(s){if(s instanceof Tn)throw s;Xt(n,"network-request-failed",{message:String(s)})}}async function D0(n,e,t,r,s={}){const i=await gs(n,e,t,r,s);return"mfaPendingCredential"in i&&Xt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Tm(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?Xl(n.config,s):`${n.config.apiScheme}://${s}`;return V0.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class O0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ot(this.auth,"network-request-failed")),k0.get())})}}function oo(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Ot(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N0(n,e){return gs(n,"POST","/v1/accounts:delete",e)}async function Ko(n,e){return gs(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function x0(n,e=!1){const t=It(n),r=await t.getIdToken(e),s=Zl(r);ne(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ti(uc(s.auth_time)),issuedAtTime:ti(uc(s.iat)),expirationTime:ti(uc(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function uc(n){return Number(n)*1e3}function Zl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return vo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Sp(t);return s?JSON.parse(s):(vo("Failed to decode base64 JWT payload"),null)}catch(s){return vo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Wf(n){const e=Zl(n);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Tn&&M0(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function M0({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ti(this.lastLoginAt),this.creationTime=ti(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Go(n){var e;const t=n.auth,r=await n.getIdToken(),s=await gi(n,Ko(t,{idToken:r}));ne(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Im(i.providerUserInfo):[],c=U0(n.providerData,a),l=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Kc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,p)}async function F0(n){const e=It(n);await Go(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function U0(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Im(n){return n.map(e=>{var{providerId:t}=e,r=Gl(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B0(n,e){const t=await Em(n,{},async()=>{const r=Ti({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Tm(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&ls(n.emulatorConfig.host)&&(l.credentials="include"),vm.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function j0(n,e){return gs(n,"POST","/v2/accounts:revokeToken",Yl(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const t=Wf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await B0(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Jr;return r&&(ne(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ne(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ne(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jr,this.toJSON())}_performRefresh(){return cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(n,e){ne(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class kt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Gl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new L0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Kc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await gi(this,this.stsTokenManager.getToken(this.auth,e));return ne(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return x0(this,e)}reload(){return F0(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new kt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Go(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pt(this.auth.app))return Promise.reject(vr(this.auth));const e=await this.getIdToken();return await gi(this,N0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,l,h,d;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,y=(s=t.email)!==null&&s!==void 0?s:void 0,b=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,V=(a=t.photoURL)!==null&&a!==void 0?a:void 0,M=(c=t.tenantId)!==null&&c!==void 0?c:void 0,L=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,z=(h=t.createdAt)!==null&&h!==void 0?h:void 0,K=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:G,emailVerified:q,isAnonymous:oe,providerData:ve,stsTokenManager:I}=t;ne(G&&I,e,"internal-error");const m=Jr.fromJSON(this.name,I);ne(typeof G=="string",e,"internal-error"),Rn(p,e.name),Rn(y,e.name),ne(typeof q=="boolean",e,"internal-error"),ne(typeof oe=="boolean",e,"internal-error"),Rn(b,e.name),Rn(V,e.name),Rn(M,e.name),Rn(L,e.name),Rn(z,e.name),Rn(K,e.name);const _=new kt({uid:G,auth:e,email:y,emailVerified:q,displayName:p,isAnonymous:oe,photoURL:V,phoneNumber:b,tenantId:M,stsTokenManager:m,createdAt:z,lastLoginAt:K});return ve&&Array.isArray(ve)&&(_.providerData=ve.map(T=>Object.assign({},T))),L&&(_._redirectEventId=L),_}static async _fromIdTokenResponse(e,t,r=!1){const s=new Jr;s.updateFromServerResponse(t);const i=new kt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Go(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ne(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Im(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Jr;c.updateFromIdToken(r);const l=new kt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Kc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf=new Map;function ln(n){vn(n instanceof Function,"Expected a class definition");let e=Kf.get(n);return e?(vn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Kf.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}wm.type="NONE";const Gf=wm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(n,e,t){return`firebase:${n}:${e}:${t}`}class Xr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Eo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Eo("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ko(this.auth,{idToken:e}).catch(()=>{});return t?kt._fromGetAccountInfoResponse(this.auth,t,e):null}return kt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Xr(ln(Gf),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||ln(Gf);const a=Eo(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const d=await h._get(a);if(d){let p;if(typeof d=="string"){const y=await Ko(e,{idToken:d}).catch(()=>{});if(!y)break;p=await kt._fromGetAccountInfoResponse(e,y,d)}else p=kt._fromJSON(e,d);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Xr(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Xr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Am(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Pm(e))return"Blackberry";if(Vm(e))return"Webos";if(bm(e))return"Safari";if((e.includes("chrome/")||Sm(e))&&!e.includes("edge/"))return"Chrome";if(Cm(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Am(n=ut()){return/firefox\//i.test(n)}function bm(n=ut()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sm(n=ut()){return/crios\//i.test(n)}function Rm(n=ut()){return/iemobile/i.test(n)}function Cm(n=ut()){return/android/i.test(n)}function Pm(n=ut()){return/blackberry/i.test(n)}function Vm(n=ut()){return/webos/i.test(n)}function eu(n=ut()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function $0(n=ut()){var e;return eu(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function H0(){return bE()&&document.documentMode===10}function km(n=ut()){return eu(n)||Cm(n)||Vm(n)||Pm(n)||/windows phone/i.test(n)||Rm(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(n,e=[]){let t;switch(n){case"Browser":t=Qf(ut());break;case"Worker":t=`${Qf(ut())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${us}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z0(n,e={}){return gs(n,"GET","/v2/passwordPolicy",Yl(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0=6;class K0{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:W0,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jf(this),this.idTokenSubscription=new Jf(this),this.beforeStateQueue=new q0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ym,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ln(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Xr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ko(this,{idToken:e}),r=await kt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Pt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Go(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=C0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pt(this.app))return Promise.reject(vr(this));const t=e?It(e):null;return t&&ne(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pt(this.app)?Promise.reject(vr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pt(this.app)?Promise.reject(vr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await z0(this),t=new K0(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ei("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await j0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ln(e)||this._popupRedirectResolver;ne(t,this,"argument-error"),this.redirectPersistenceManager=await Xr.create(this,[ln(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Pt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&A0(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ba(n){return It(n)}class Jf{constructor(e){this.auth=e,this.observer=null,this.addObserver=OE(t=>this.observer=t)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Q0(n){tu=n}function J0(n){return tu.loadJS(n)}function X0(){return tu.gapiScript}function Y0(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z0(n,e){const t=_l(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Er(i,e??{}))return s;Xt(s,"already-initialized")}return t.initialize({options:e})}function eb(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(ln);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function tb(n,e,t){const r=ba(n);ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Om(e),{host:a,port:c}=nb(e),l=c===null?"":`:${c}`,h={url:`${i}//${a}${l}/`},d=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ne(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ne(Er(h,r.config.emulator)&&Er(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,ls(a)?(Vp(`${i}//${a}${l}`),kp("Auth",!0)):rb()}function Om(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function nb(n){const e=Om(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Xf(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Xf(a)}}}function Xf(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function rb(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return cn("not implemented")}_getIdTokenResponse(e){return cn("not implemented")}_linkToIdToken(e,t){return cn("not implemented")}_getReauthenticationResolver(e){return cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yr(n,e){return D0(n,"POST","/v1/accounts:signInWithIdp",Yl(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb="http://localhost";class Ar extends Nm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ar(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Xt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Gl(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Ar(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Yr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Yr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Yr(e,t)}buildRequest(){const e={requestUri:sb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ti(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi extends nu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Vi{constructor(){super("facebook.com")}static credential(e){return Ar._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";xn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends Vi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ar._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return an.credential(t,r)}catch{return null}}}an.GOOGLE_SIGN_IN_METHOD="google.com";an.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Vi{constructor(){super("github.com")}static credential(e){return Ar._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.GITHUB_SIGN_IN_METHOD="github.com";Mn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends Vi{constructor(){super("twitter.com")}static credential(e,t){return Ar._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Ln.credential(t,r)}catch{return null}}}Ln.TWITTER_SIGN_IN_METHOD="twitter.com";Ln.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await kt._fromIdTokenResponse(e,r,s),a=Yf(r);return new as({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Yf(r);return new as({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Yf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo extends Tn{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Qo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Qo(e,t,r,s)}}function xm(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Qo._fromErrorAndOperation(n,i,e,r):i})}async function ib(n,e,t=!1){const r=await gi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return as._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ob(n,e,t=!1){const{auth:r}=n;if(Pt(r.app))return Promise.reject(vr(r));const s="reauthenticate";try{const i=await gi(n,xm(r,s,e,n),t);ne(i.idToken,r,"internal-error");const a=Zl(i.idToken);ne(a,r,"internal-error");const{sub:c}=a;return ne(n.uid===c,r,"user-mismatch"),as._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Xt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ab(n,e,t=!1){if(Pt(n.app))return Promise.reject(vr(n));const r="signIn",s=await xm(n,r,e),i=await as._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function cb(n,e,t,r){return It(n).onIdTokenChanged(e,t,r)}function lb(n,e,t){return It(n).beforeAuthStateChanged(e,t)}function ub(n){return It(n).signOut()}const Jo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Jo,"1"),this.storage.removeItem(Jo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb=1e3,fb=10;class Lm extends Mm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=km(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);H0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,fb):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},hb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Lm.type="LOCAL";const db=Lm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm extends Mm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Fm.type="SESSION";const Um=Fm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Sa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),l=await pb(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=ru("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const y=p;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(y.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(){return window}function mb(n){Kt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(){return typeof Kt().WorkerGlobalScope<"u"&&typeof Kt().importScripts=="function"}async function _b(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yb(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function vb(){return Bm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm="firebaseLocalStorageDb",Eb=1,Xo="firebaseLocalStorage",$m="fbase_key";class ki{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ra(n,e){return n.transaction([Xo],e?"readwrite":"readonly").objectStore(Xo)}function Tb(){const n=indexedDB.deleteDatabase(jm);return new ki(n).toPromise()}function Gc(){const n=indexedDB.open(jm,Eb);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Xo,{keyPath:$m})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Xo)?e(r):(r.close(),await Tb(),e(await Gc()))})})}async function Zf(n,e,t){const r=Ra(n,!0).put({[$m]:e,value:t});return new ki(r).toPromise()}async function Ib(n,e){const t=Ra(n,!1).get(e),r=await new ki(t).toPromise();return r===void 0?null:r.value}function ed(n,e){const t=Ra(n,!0).delete(e);return new ki(t).toPromise()}const wb=800,Ab=3;class Hm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Ab)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sa._getInstance(vb()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await _b(),!this.activeServiceWorker)return;this.sender=new gb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gc();return await Zf(e,Jo,"1"),await ed(e,Jo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Zf(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Ib(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ed(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ra(s,!1).getAll();return new ki(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hm.type="LOCAL";const bb=Hm;new Pi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(n,e){return e?ln(e):(ne(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su extends Nm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Yr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Yr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Sb(n){return ab(n.auth,new su(n),n.bypassAuthState)}function Rb(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),ob(t,new su(n),n.bypassAuthState)}async function Cb(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),ib(t,new su(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Sb;case"linkViaPopup":case"linkViaRedirect":return Cb;case"reauthViaPopup":case"reauthViaRedirect":return Rb;default:Xt(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb=new Pi(2e3,1e4);async function Vb(n,e,t){if(Pt(n.app))return Promise.reject(Ot(n,"operation-not-supported-in-this-environment"));const r=ba(n);b0(n,e,nu);const s=qm(r,t);return new pr(r,"signInViaPopup",e,s).executeNotNull()}class pr extends zm{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,pr.currentPopupAction&&pr.currentPopupAction.cancel(),pr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=ru();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Pb.get())};e()}}pr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb="pendingRedirect",To=new Map;class Db extends zm{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=To.get(this.auth._key());if(!e){try{const r=await Ob(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}To.set(this.auth._key(),e)}return this.bypassAuthState||To.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ob(n,e){const t=Mb(e),r=xb(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Nb(n,e){To.set(n._key(),e)}function xb(n){return ln(n._redirectPersistence)}function Mb(n){return Eo(kb,n.config.apiKey,n.name)}async function Lb(n,e,t=!1){if(Pt(n.app))return Promise.reject(vr(n));const r=ba(n),s=qm(r,e),a=await new Db(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb=600*1e3;class Ub{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Bb(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Wm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ot(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Fb&&this.cachedEventUids.clear(),this.cachedEventUids.has(td(e))}saveEventToCache(e){this.cachedEventUids.add(td(e)),this.lastProcessedEventTime=Date.now()}}function td(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Wm({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Bb(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wm(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jb(n,e={}){return gs(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hb=/^https?/;async function qb(n){if(n.config.emulator)return;const{authorizedDomains:e}=await jb(n);for(const t of e)try{if(zb(t))return}catch{}Xt(n,"unauthorized-domain")}function zb(n){const e=Wc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Hb.test(t))return!1;if($b.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb=new Pi(3e4,6e4);function nd(){const n=Kt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Kb(n){return new Promise((e,t)=>{var r,s,i;function a(){nd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{nd(),t(Ot(n,"network-request-failed"))},timeout:Wb.get()})}if(!((s=(r=Kt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Kt().gapi)===null||i===void 0)&&i.load)a();else{const c=Y0("iframefcb");return Kt()[c]=()=>{gapi.load?a():t(Ot(n,"network-request-failed"))},J0(`${X0()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Io=null,e})}let Io=null;function Gb(n){return Io=Io||Kb(n),Io}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb=new Pi(5e3,15e3),Jb="__/auth/iframe",Xb="emulator/auth/iframe",Yb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eS(n){const e=n.config;ne(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Xl(e,Xb):`https://${n.config.authDomain}/${Jb}`,r={apiKey:e.apiKey,appName:n.name,v:us},s=Zb.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Ti(r).slice(1)}`}async function tS(n){const e=await Gb(n),t=Kt().gapi;return ne(t,n,"internal-error"),e.open({where:document.body,url:eS(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Yb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Ot(n,"network-request-failed"),c=Kt().setTimeout(()=>{i(a)},Qb.get());function l(){Kt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rS=500,sS=600,iS="_blank",oS="http://localhost";class rd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aS(n,e,t,r=rS,s=sS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},nS),{width:r.toString(),height:s.toString(),top:i,left:a}),h=ut().toLowerCase();t&&(c=Sm(h)?iS:t),Am(h)&&(e=e||oS,l.scrollbars="yes");const d=Object.entries(l).reduce((y,[b,V])=>`${y}${b}=${V},`,"");if($0(h)&&c!=="_self")return cS(e||"",c),new rd(null);const p=window.open(e||"",c,d);ne(p,n,"popup-blocked");try{p.focus()}catch{}return new rd(p)}function cS(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS="__/auth/handler",uS="emulator/auth/handler",hS=encodeURIComponent("fac");async function sd(n,e,t,r,s,i){ne(n.config.authDomain,n,"auth-domain-config-required"),ne(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:us,eventId:s};if(e instanceof nu){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",DE(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof Vi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await n._getAppCheckToken(),h=l?`#${hS}=${encodeURIComponent(l)}`:"";return`${fS(n)}?${Ti(c).slice(1)}${h}`}function fS({config:n}){return n.emulator?Xl(n,uS):`https://${n.authDomain}/${lS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc="webStorageSupport";class dS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Um,this._completeRedirectFn=Lb,this._overrideRedirectResult=Nb}async _openPopup(e,t,r,s){var i;vn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await sd(e,t,r,Wc(),s);return aS(e,a,ru())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await sd(e,t,r,Wc(),s);return mb(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(vn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await tS(e),r=new Ub(e);return t.register("authEvent",s=>(ne(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(hc,{type:hc},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[hc];a!==void 0&&t(!!a),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=qb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return km()||bm()||eu()}}const pS=dS;var id="@firebase/auth",od="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mS(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _S(n){ts(new Tr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;ne(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dm(n)},h=new G0(r,s,i,l);return eb(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ts(new Tr("auth-internal",e=>{const t=ba(e.getProvider("auth").getImmediate());return(r=>new gS(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),$n(id,od,mS(n)),$n(id,od,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS=300,vS=Pp("authIdTokenMaxAge")||yS;let ad=null;const ES=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>vS)return;const s=t==null?void 0:t.token;ad!==s&&(ad=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function TS(n=xp()){const e=_l(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Z0(n,{popupRedirectResolver:pS,persistence:[bb,db,Um]}),r=Pp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=ES(i.toString());lb(t,a,()=>a(t.currentUser)),cb(t,c=>a(c))}}const s=Rp("auth");return s&&tb(t,`http://${s}`),t}function IS(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Q0({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Ot("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",IS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_S("Browser");const wS=["id","value"],AS=["id","value"],bS=["id","value"],SS=["id","value"],RS={key:0,class:"auth-row"},CS={key:1,class:"auth-row"},PS={class:"user"},VS={key:2},kS={key:3,class:"makeBeverage_button"},DS={key:4,class:"status-message"},OS={style:{"margin-top":"20px"}},NS=["id","value"],xS=["for"],MS=yi({__name:"App",setup(n){const e=Ci();e.init();const t=al(""),r=l=>{t.value=l,setTimeout(()=>{t.value=""},5e3)},s=TS(),i=async()=>{const l=new an;try{const h=await Vb(s,l);e.setUser(h.user)}catch(h){console.error("Error signing in: ",h)}},a=async()=>{try{await ub(s),e.setUser(null)}catch(l){console.error("Error signing out: ",l)}},c=async()=>{const l=await e.makeBeverage();l&&r(l)};return(l,h)=>(ge(),Se(xe,null,[be("div",null,[Tt(I0,{isIced:Ee(e).currentTemp==="Cold"},null,8,["isIced"]),be("ul",null,[be("li",null,[(ge(!0),Se(xe,null,On(Ee(e).temps,d=>(ge(),Se("label",{key:d},[Lr(be("input",{type:"radio",name:"temperature",id:`r${d}`,value:d,"onUpdate:modelValue":h[0]||(h[0]=p=>Ee(e).currentTemp=p)},null,8,wS),[[Os,Ee(e).currentTemp]]),Ms(" "+Cn(d),1)]))),128))])]),be("ul",null,[be("li",null,[(ge(!0),Se(xe,null,On(Ee(e).bases,d=>(ge(),Se("label",{key:d.id},[Lr(be("input",{type:"radio",name:"bases",id:`r${d.id}`,value:d,"onUpdate:modelValue":h[1]||(h[1]=p=>Ee(e).currentBase=p)},null,8,AS),[[Os,Ee(e).currentBase]]),Ms(" "+Cn(d.name),1)]))),128))])]),be("ul",null,[be("li",null,[(ge(!0),Se(xe,null,On(Ee(e).syrups,d=>(ge(),Se("label",{key:d.id},[Lr(be("input",{type:"radio",name:"syrups",id:`r${d.id}`,value:d,"onUpdate:modelValue":h[2]||(h[2]=p=>Ee(e).currentSyrup=p)},null,8,bS),[[Os,Ee(e).currentSyrup]]),Ms(" "+Cn(d.name),1)]))),128))])]),be("ul",null,[be("li",null,[(ge(!0),Se(xe,null,On(Ee(e).creamers,d=>(ge(),Se("label",{key:d.id},[Lr(be("input",{type:"radio",name:"creamers",id:`r${d.id}`,value:d,"onUpdate:modelValue":h[3]||(h[3]=p=>Ee(e).currentCreamer=p)},null,8,SS),[[Os,Ee(e).currentCreamer]]),Ms(" "+Cn(d.name),1)]))),128))])]),Ee(e).user?(ge(),Se("div",CS,[be("span",PS,"Signed in as "+Cn(Ee(e).user.email),1),be("button",{class:"signout-btn",onClick:a},"Sign Out")])):(ge(),Se("div",RS,[be("button",{onClick:i},"Sign in with Google")])),Ee(e).user?(ge(),Se("div",VS,[Lr(be("input",{"onUpdate:modelValue":h[4]||(h[4]=d=>Ee(e).currentName=d),type:"text",placeholder:"Beverage Name"},null,512),[[Nv,Ee(e).currentName]])])):Gs("",!0),Ee(e).user?(ge(),Se("div",kS,[be("button",{onClick:c},"🍺 Make Beverage")])):Gs("",!0),t.value?(ge(),Se("p",DS,Cn(t.value),1)):Gs("",!0)]),be("div",OS,[(ge(!0),Se(xe,null,On(Ee(e).beverages,d=>(ge(),Se(xe,{key:d.id},[Lr(be("input",{type:"radio",id:d.id,value:d,"onUpdate:modelValue":h[5]||(h[5]=p=>Ee(e).currentBeverage=p),onChange:h[6]||(h[6]=p=>Ee(e).showBeverage())},null,40,NS),[[Os,Ee(e).currentBeverage]]),be("label",{for:d.id},Cn(d.name),9,xS)],64))),128))])],64))}}),Km=jv();Km.use(Yv);Fv(MS).use(Km).mount("#app");
