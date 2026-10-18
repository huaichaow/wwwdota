import{$ as e,$n as t,$r as n,$t as r,A as i,Aa as a,An as o,Ar as s,At as c,B as l,Ba as u,Bi as d,Bt as f,C as p,Ca as m,Ci as h,Cr as g,Ct as _,D as v,Da as y,Di as b,Dr as x,Dt as S,E as C,Er as w,Et as T,F as E,Fa as D,Fi as O,Fn as ee,Ft as k,G as A,Ga as te,Gn as ne,Gr as re,Gt as ie,H as j,Ha as ae,Hr as oe,Ht as se,I as ce,Ia as le,Ii as ue,In as de,It as M,Jn as fe,Jr as N,K as pe,Ki as me,Kn as he,Kr as ge,Kt as _e,L as ve,La as ye,Ln as be,Lt as xe,M as Se,Ma as Ce,Mi as we,Mn as Te,Mr as Ee,Mt as P,N as De,Na as F,Ni as Oe,Nn as I,Nr as ke,Nt as L,O as R,Oa as Ae,Or as je,Ot as Me,P as Ne,Pa as Pe,Pi as Fe,Pr as Ie,Pt as Le,Q as Re,Qi as ze,Qn as Be,Qr as Ve,R as He,Ra as Ue,Rn as We,Rt as Ge,S as Ke,Sa as qe,Si as Je,Sr as Ye,St as Xe,T as Ze,Ta as Qe,Ti as $e,Tr as et,Tt as z,U as tt,Ua as nt,Un as rt,Ur as it,Ut as at,V as ot,Vi as st,Vr as ct,Vt as lt,W as ut,Wa as B,Wn as dt,Wr as ft,Wt as pt,X as mt,Xi as ht,Xn as gt,Xr as _t,Y as V,Yi as vt,Yn as yt,Yr as bt,Yt as xt,Z as St,Zi as Ct,Zn as wt,Zr as Tt,_ as Et,_i as Dt,_r as Ot,_t as kt,ai as At,ar as jt,at as Mt,ba as Nt,br as Pt,bt as Ft,c as It,ca as Lt,ci as Rt,cr as zt,ct as Bt,da as Vt,di as Ht,dr as Ut,dt as Wt,ea as Gt,ei as Kt,en as qt,er as Jt,et as Yt,f as Xt,fa as Zt,fr as Qt,ft as $t,g as en,ga as tn,gi as nn,gr as rn,gt as an,h as on,ha as sn,hr as H,ht as cn,i as ln,ii as un,ir as dn,it as fn,j as pn,ji as mn,jn as hn,jr as gn,jt as _n,k as vn,ka as yn,kr as bn,kt as xn,l as Sn,la as Cn,li as wn,lt as Tn,m as En,ma as Dn,mr as On,mt as kn,n as An,na as jn,ni as Mn,nr as Nn,o as Pn,oi as Fn,or as In,ot as Ln,p as Rn,pi as zn,pr as Bn,pt as Vn,q as Hn,qr as Un,qt as Wn,r as Gn,ri as Kn,rr as qn,rt as Jn,si as Yn,st as Xn,ti as Zn,tr as Qn,tt as $n,u as er,ua as U,ui as tr,ur as nr,ut as rr,v as ir,va as ar,vr as or,vt as sr,w as W,wa as cr,wi as lr,wr as ur,wt as dr,x as fr,xa as pr,xr as mr,xt as hr,y as gr,ya as G,yr as _r,yt as vr,z as yr,zi as br,zr as xr,zt as Sr}from"./spellFx-CaraOHvI.js";var Cr=class{constructor(){this.static=new Uint8Array(G*G),this.dynamic=new Uint16Array(G*G),this.treeMask=new Uint8Array(G*G),this.treeVersion=0,this.navVersion=0,this.clearance=new Uint8Array(G*G),this.clearanceVersion=-1;let e=G*G;this.g=new Float32Array(e),this.f=new Float32Array(e),this.parent=new Int32Array(e),this.openGen=new Uint32Array(e),this.closedGen=new Uint32Array(e),this.gen=0,this.heap=new Int32Array(e),this.heapSize=0}idx(e,t){return t*G+e}toCell(e){return Math.max(0,Math.min(G-1,Math.floor(e/2)))}blockedCell(e,t){if(e<0||t<0||e>=G||t>=G)return!0;let n=t*G+e;return this.static[n]!==0||this.dynamic[n]!==0}blockedAt(e,t){return e<.5||t<.5||e>m-.5||t>m-.5||this.blockedCell(Math.floor(e/2),Math.floor(t/2))}addTree(e,t,n,r=!1){let i=this.treePath??=new Uint8Array(G*G),a=this.treeVis??=new Uint8Array(G*G),o=this.underTree??=new Uint8Array(G*G),s=this.idx(this.toCell(e),this.toCell(t)),c=!1,l=e=>{i[e]++===0&&(o[e]=this.static[e]),this.static[e]=1,a[e]++,this.treeMask[e]=1};this._circle(e,t,n,e=>{e===s&&(c=!0),l(e)}),r&&!c&&l(s),a[s]++,this.treeMask[s]=1,this.navVersion++,this.treeVersion++}removeTree(e,t,n,r=!1){let i=this.treePath,a=this.treeVis,o=this.underTree;if(!i)return;let s=this.idx(this.toCell(e),this.toCell(t)),c=!1,l=e=>{i[e]>0&&--i[e]===0&&(this.static[e]=o[e]),a[e]>0&&--a[e]===0&&(this.treeMask[e]=0)};this._circle(e,t,n,e=>{e===s&&(c=!0),l(e)}),r&&!c&&l(s),a[s]>0&&--a[s]===0&&(this.treeMask[s]=0),this.navVersion++,this.treeVersion++}addCells(e){for(let t of e)this.dynamic[t]++;this.navVersion++}removeCells(e){for(let t of e)this.dynamic[t]>0&&this.dynamic[t]--;this.navVersion++}blockCell(e,t){this.static[this.idx(e,t)]=1,this.navVersion++}setStaticCircle(e,t,n){this._circle(e,t,n,e=>{this.static[e]=1}),this.navVersion++}addDynamicCircle(e,t,n){this._circle(e,t,n,e=>{this.dynamic[e]++}),this.navVersion++}removeDynamicCircle(e,t,n){this._circle(e,t,n,e=>{this.dynamic[e]>0&&this.dynamic[e]--}),this.navVersion++}_rebuildClearance(){let e=this.clearance,t=this.static,n=this.dynamic;for(let r=0;r<G;r++)for(let i=0;i<G;i++){let a=r*G+i;if(t[a]!==0||n[a]!==0){e[a]=0;continue}let o=Math.min(i+1,r+1,G-i,G-r,255);if(i>0&&e[a-1]+1<o&&(o=e[a-1]+1),r>0){let t=a-G;e[t]+1<o&&(o=e[t]+1),i>0&&e[t-1]+1<o&&(o=e[t-1]+1),i<G-1&&e[t+1]+1<o&&(o=e[t+1]+1)}e[a]=o}for(let t=G-1;t>=0;t--)for(let n=G-1;n>=0;n--){let r=t*G+n,i=e[r];if(i!==0){if(n<G-1&&e[r+1]+1<i&&(i=e[r+1]+1),t<G-1){let t=r+G;e[t]+1<i&&(i=e[t]+1),n>0&&e[t-1]+1<i&&(i=e[t-1]+1),n<G-1&&e[t+1]+1<i&&(i=e[t+1]+1)}e[r]=i}}let r=G+1;this.bsat||=new Int32Array(r*r);let i=this.bsat;for(let t=0;t<G;t++){let n=0;for(let a=0;a<G;a++)n+=+(e[t*G+a]===0),i[(t+1)*r+a+1]=i[t*r+a+1]+n}this.clearanceVersion=this.navVersion}_circle(e,t,n,r){let i=this.toCell(e-n),a=this.toCell(e+n),o=this.toCell(t-n),s=this.toCell(t+n);for(let c=o;c<=s;c++)for(let o=i;o<=a;o++){let i=(o+.5)*2,a=(c+.5)*2;(i-e)**2+(a-t)**2<=n*n&&r(this.idx(o,c))}}lineClear(e,t,n,r){this.clearanceVersion!==this.navVersion&&this._rebuildClearance();let i=.5,a=m-.5;{let i=1e-6,o=e<n?e:n,s=e<n?n:e,c=t<r?t:r,l=t<r?r:t;if(o>=.500001&&c>=.500001&&s<=a-i&&l<=a-i){let e=G+1,t=this.bsat,n=Math.floor((o-i)/2),r=Math.floor((s+i)/2)+1,a=Math.floor((c-i)/2),u=Math.floor((l+i)/2)+1;if(t[u*e+r]-t[a*e+r]-t[u*e+n]+t[a*e+n]===0)return!0}}let o=n-e,s=r-t,c=U(o,s),l=Math.ceil(c/.8),u=this.clearance;for(let n=1;n<=l;){let r=n/l,c=e+o*r,d=t+s*r;if(c<i||d<i||c>a||d>a)return!1;let f=Math.floor(c/2),p=Math.floor(d/2),m=u[p*G+f];if(m===0)return!1;let h=Math.max((f-m+1)*2,i),g=Math.min((f+m)*2,a+1e-9),_=Math.max((p-m+1)*2,i),v=Math.min((p+m)*2,a+1e-9),y=1/0,b=1/0;o>0?y=(g-e)/o:o<0&&(y=(h-e)/o),s>0?b=(v-t)/s:s<0&&(b=(_-t)/s);let x=Math.min(l,Math.floor(Math.min(y,b)*l)+1);if(!(x>n)){n++;continue}let S=f-m+1,C=f+m-1,w=p-m+1,T=p+m-1;for(;x>n;x--){let n=x/l,r=e+o*n,c=t+s*n;if(r<i||c<i||r>a||c>a)continue;let u=Math.floor(r/2),d=Math.floor(c/2);if(u>=S&&u<=C&&d>=w&&d<=T)break}n=x+1}return!0}boxClear(e,t,n,r){if(this.clearanceVersion!==this.navVersion&&this._rebuildClearance(),!(e>=0&&t>=0&&e<m&&t<m))return!1;let i=Math.floor(e/2),a=Math.floor(t/2),o=this.clearance[a*G+i];if(o===0)return!1;let s=1e-6,c=.5,l=m-.5,u=Math.max((i-o+1)*2,c)+s,d=Math.min((i+o)*2,l)-s,f=Math.max((a-o+1)*2,c)+s,p=Math.min((a+o)*2,l)-s;return e>=u&&e<=d&&n>=u&&n<=d&&t>=f&&t<=p&&r>=f&&r<=p}lineClearRef(e,t,n,r){let i=n-e,a=r-t,o=U(i,a),s=Math.ceil(o/.8);for(let n=1;n<=s;n++){let r=n/s;if(this.blockedAt(e+i*r,t+a*r))return!1}return!0}nearestFree(e,t){if(!this.blockedCell(e,t))return[e,t];for(let n=1;n<12;n++)for(let r=-n;r<=n;r++)for(let i=-n;i<=n;i++)if((Math.abs(i)===n||Math.abs(r)===n)&&!this.blockedCell(e+i,t+r))return[e+i,t+r];return null}_push(e){let t=this.heap,n=this.f,r=this.heapSize++;for(t[r]=e;r>0;){let e=r-1>>1;if(n[t[e]]<=n[t[r]])break;let i=t[e];t[e]=t[r],t[r]=i,r=e}}_pop(){let e=this.heap,t=this.f,n=e[0],r=e[--this.heapSize];if(this.heapSize>0){e[0]=r;let n=0;for(;;){let r=2*n+1,i=r+1,a=n;if(r<this.heapSize&&t[e[r]]<t[e[a]]&&(a=r),i<this.heapSize&&t[e[i]]<t[e[a]]&&(a=i),a===n)break;let o=e[a];e[a]=e[n],e[n]=o,n=a}}return n}findPath(e,t,n,r){if(this.lineClear(e,t,n,r))return[{x:n,z:r}];let i=this.nearestFree(this.toCell(e),this.toCell(t)),a=this.nearestFree(this.toCell(n),this.toCell(r));if(!i||!a)return null;let o=this.idx(i[0],i[1]),s=this.idx(a[0],a[1]),c=++this.gen,{g:l,f:u,parent:d,openGen:f,closedGen:p}=this,m=a[0],h=a[1],g=(e,t)=>{let n=Math.abs(e-m),r=Math.abs(t-h);return n+r+(Math.SQRT2-2)*Math.min(n,r)};this.heapSize=0,l[o]=0,u[o]=g(i[0],i[1]),d[o]=-1,f[o]=c,this._push(o);let _=!1,v=0;for(;this.heapSize>0;){let e=this._pop();if(p[e]===c)continue;if(p[e]=c,e===s){_=!0;break}if(++v>9e3)break;let t=e%G,n=e/G|0;for(let r=-1;r<=1;r++)for(let i=-1;i<=1;i++){if(!i&&!r)continue;let a=t+i,o=n+r;if(this.blockedCell(a,o)||i&&r&&(this.blockedCell(t+i,n)||this.blockedCell(t,n+r)))continue;let s=o*G+a;if(p[s]===c)continue;let m=l[e]+(i&&r?Math.SQRT2:1);(f[s]!==c||m<l[s])&&(f[s]=c,l[s]=m,u[s]=m+g(a,o),d[s]=e,this._push(s))}}if(!_)return null;let y=[];for(let e=s;e!==-1;e=d[e])y.push(e);y.reverse();let b=y.map(e=>({x:(e%G+.5)*2,z:((e/G|0)+.5)*2}));this.blockedAt(n,r)||(b[b.length-1]={x:n,z:r});let x=[],S=e,C=t,w=0;for(;w<b.length;){let e=b.length-1;for(;e>w&&!this.lineClear(S,C,b[e].x,b[e].z);)e--;x.push(b[e]),S=b[e].x,C=b[e].z,w=e+1}return x}},wr=Math.ceil(m/8);function Tr(e,t,n,r,i,a){let o=i-n,s=a-r,c=o*o+s*s,l=c>0?Math.max(0,Math.min(1,((e-n)*o+(t-r)*s)/c)):0;return U(e-(n+o*l),t-(r+s*l))}var Er=new Set([`ring`,`column`,`slash`,`rocket`,`blink`]),Dr=class{constructor({seed:e=1}={}){this.seed=e>>>0,this.rng=we(this.seed),this.tick=0,this.units=[],this.byId=new Map,this.nextId=1,this.time=0,this.projectiles=[],this.zones=[],this.timers=[],this.events=[],this.heroes=[],this.clones=[],this.nav=new Cr,this.fog=new Cn(this),this.hashHead=new Int32Array(wr*wr).fill(-1),this.hashTail=new Int32Array(wr*wr),this.hashNext=new Int32Array(256),this.hashList=[],this.hashOverflow=new Map,this.teamKills=[0,0],this.firstBlood=!1,this.winner=-1,this.spawner=null,this.trees=[],this.treesDown=[],this.treeVersion=0,this.treeBase=void 0,this.tempTrees=[],this.treeFree=[],this.blockers=[],this.softBlockers=0,this.blockerVersion=0,this.historyUnits=[],this.visionSpots=[],this.runes=[],this.groundItems=[],this.jungle=null,this.runeSpawner=null,this.controllers=[],this.abilityCtx=null,this.couriers=null,this.shopStock=b()}add(e,t=!0){return e.id=this.nextId++,e.world=this,e.acquireTimer=t?this.rng()*.4:0,this.units.push(e),this.byId.set(e.id,e),e.clone?this.clones.push(e):e.kind===`hero`&&!e.illusion&&(this.heroes.push(e),d(e)),e}get isNight(){return this.time<(this.darkUntil||0)||this.time%600>=300}get timeOfDay(){return this.time%600/600}get phaseRemaining(){let e=this.time%600;return e<300?300-e:600-e}emit(e){e.ab===void 0&&Er.has(e.type)&&(e.ab=this.abilityCtx??null),(this.events.length<4e3||e.type===`death`||e.type===`gameover`||e.type===`killfeed`||e.type===`announce`)&&this.events.push(e)}schedule(e,t){this.timers.push({at:this.time+e,fn:t})}step(e){this.tick++;let t=this.isNight;this.time+=e,this.isNight!==t&&(this.emit({type:`phase`,night:this.isNight}),this.fog.timer=0),this.rebuildHash(!0),this.spawner?.update(e),this.jungle?.update(e),this.runeSpawner?.update(e),this.treesDown.length&&this.tick%30==0&&Gt(this),this.tempTrees.length&&Ct(this),this.blockers.length&&jn(this,e),mn(this,e);for(let t of this.controllers)t.update(e);for(let e=this.timers.length-1;e>=0;e--)if(this.timers[e].at<=this.time){let t=this.timers[e];this.timers.splice(e,1),t.fn()}let n=this.units.length;if(this.tick&1)for(let t=n-1;t>=0;t--){let n=this.units[t];!n.removed&&!n.scenery&&n.update(e)}else for(let t=0;t<n;t++){let n=this.units[t];!n.removed&&!n.scenery&&n.update(e)}this.separate(),this.updateProjectiles(e),this.updateZones(e),this.fog.update(e),this.tick%6==0&&br(this);for(let t of this.heroes)t.gold+=Qe*e;let r=this.units,i=0;for(let e=0;e<r.length;e++){let t=r[e];if(t.removed){this.byId.delete(t.id),this.fog.staticCache.delete(t);continue}i!==e&&(r[i]=t),i++}i!==r.length&&(r.length=i,this.clones.length&&(this.clones=this.clones.filter(e=>!e.removed)))}rebuildHash(e=!1){let t=this.hashHead,n=this.hashTail,r=this.hashList;t.fill(-1),this.hashOverflow.size&&this.hashOverflow.clear();let i=this.units;this.hashNext.length<i.length&&(this.hashNext=new Int32Array(Math.max(i.length,this.hashNext.length*2)));let a=this.hashNext,o=0;for(let s=0;s<i.length;s++){let c=i[s];if(e&&(c.px=c.x,c.pz=c.z),!c.alive||c.removed||c.scenery)continue;let l=Math.floor(c.x/8),u=Math.floor(c.z/8),d=o++;if(r[d]=c,c._hk=d,a[d]=-1,l>=0&&u>=0&&l<wr&&u<wr){let e=u*wr+l;t[e]<0?t[e]=d:a[n[e]]=d,n[e]=d;continue}let f=l+u*1e3,p=this.hashOverflow.get(f);p?(a[p.tail]=d,p.tail=d):this.hashOverflow.set(f,{head:d,tail:d})}r.length=o}_cellHead(e,t){if(e>=0&&t>=0&&e<wr&&t<wr)return this.hashHead[t*wr+e];if(!this.hashOverflow.size)return-1;let n=this.hashOverflow.get(e+t*1e3);return n?n.head:-1}query(e,t,n,r){let i=this.hashList,a=this.hashNext,o=Math.floor((e-n)/8),s=Math.floor((e+n)/8),c=Math.floor((t-n)/8),l=Math.floor((t+n)/8);for(let e=c;e<=l;e++)for(let t=o;t<=s;t++)for(let n=this._cellHead(t,e);n>=0;n=a[n]){let e=i[n];e.alive&&!e.removed&&r(e)}}queryInto(e,t,n,r){let i=this.hashList,a=this.hashNext,o=Math.floor((e-n)/8),s=Math.floor((e+n)/8),c=Math.floor((t-n)/8),l=Math.floor((t+n)/8);for(let e=c;e<=l;e++)for(let t=o;t<=s;t++)for(let n=this._cellHead(t,e);n>=0;n=a[n]){let e=i[n];e.alive&&!e.removed&&r.push(e)}return r}unitsInRadius(e,t,n,r){let i=[],a=n+5,o=this.hashList,s=this.hashNext,c=Math.floor((e-a)/8),l=Math.floor((e+a)/8),u=Math.floor((t-a)/8),d=Math.floor((t+a)/8);for(let a=u;a<=d;a++)for(let u=c;u<=l;u++)for(let c=this._cellHead(u,a);c>=0;c=s[c]){let a=o[c];a.alive&&!a.removed&&U(a.x-e,a.z-t)-a.radius<=n&&(!r||r(a))&&i.push(a)}return i}enemiesInRadius(e,t,n,r,{buildings:i=!1,heroesOnly:a=!1,neutrals:o=!0}={}){return this.unitsInRadius(t,n,r,t=>t.team!==e&&t.kind!==`ward`&&t.kind!==`courier`&&(o||t.team!==2)&&!t.isInvulnerable()&&(i||!t.isBuilding)&&(!a||t.kind===`hero`))}alliesInRadius(e,t,n,r,{buildings:i=!1,heroesOnly:a=!1}={}){return this.unitsInRadius(t,n,r,t=>t.team===e&&t.kind!==`ward`&&t.kind!==`courier`&&(i||!t.isBuilding)&&(!a||t.kind===`hero`))}isVisible(e,t){return e===2?!0:t.mods?.vanished&&t.team!==e||(t.invisible||t.mods?.invisible)&&t.team!==e&&!this.fog.trueSeen(e,t.x,t.z)?!1:t.team===e||t.isBuilding?!0:this.fog.visible(e,t.x,t.z)}isPointVisible(e,t,n){return e===2||this.fog.visible(e,t,n)}dealDamage(e,t,n,r,i){return O(this,e,t,n,r,i)}kill(e,t){ue(this,e,t)}separate(){let e=this.units,t=this.hashList,n=this.hashNext,r=t.length;if(!this.sepX||this.sepX.length<r){let e=Math.max(256,r*2);this.sepX=new Float64Array(e),this.sepZ=new Float64Array(e),this.sepR=new Float64Array(e),this.sepId=new Float64Array(e),this.sepF=new Uint8Array(e)}let i=this.sepX,a=this.sepZ,o=this.sepR,s=this.sepId,c=this.sepF;for(let e=0;e<r;e++){let n=t[e];i[e]=n.x,a[e]=n.z,o[e]=n.radius,s[e]=n.id,c[e]=(!n.alive||n.removed||n.immobile||n.flying||n.mods.phased?1:0)|(n.dormant?2:0)}let l=(this.tick&1)==1,u=e.length;for(let d=0;d<u;d++){let f=e[l?u-1-d:d];if(!f.alive||f.immobile||f.removed||f.dormant||f.flying||f.mods.phased)continue;let p=f._hk,m=p>=0&&p<r&&t[p]===f?p:-1,h=f.id,g=f.radius,_=f.x,v=f.z,y=g+2,b=Math.floor((_-y)/8),x=Math.floor((_+y)/8),S=Math.floor((v-y)/8),C=Math.floor((v+y)/8);for(let e=S;e<=C;e++)for(let r=b;r<=x;r++)for(let u=this._cellHead(r,e);u>=0;u=n[u]){let e=c[u];if(e&1||u===m||(l?s[u]>h:s[u]<h)&&!(e&2))continue;let n=i[u]-_,r=a[u]-v,d=g+o[u],p=n*n+r*r;if(p>=d*d)continue;let y=Math.sqrt(p),b,x;if(y<.001){let e=this.rng()*Math.PI*2;b=Math.cos(e),x=Math.sin(e),y=0}else b=n/y,x=r/y;let S=(d-y)*.5;f.tryMove(-b*S,-x*S),_=f.x,v=f.z,m>=0&&(i[m]=_,a[m]=v);let C=t[u];C.tryMove(b*S,x*S),i[u]=C.x,a[u]=C.z}}}spawnProjectile(e){return e.x=e.source.x,e.z=e.source.z,e.y=e.y??1.4,e.tx=e.target.x,e.tz=e.target.z,e.alive=!0,e.owner=e.source.owner||e.source,e.ability=e.ability??this.abilityCtx,this.projectiles.push(e),e}spawnLineProjectile(e){let t=e.source,n=e.x-t.x,r=e.z-t.z,i=U(n,r);return i<.001?(n=Math.sin(t.facing),r=Math.cos(t.facing)):(n/=i,r/=i),e.line={dx:n,dz:r,max:e.range,traveled:0,width:e.width??1,hit:new Set},e.team=t.team,e.target=null,e.x=t.x,e.z=t.z,e.y=e.y??1.4,e.alive=!0,e.owner=t.owner||t,e.ability=e.ability??this.abilityCtx,this.projectiles.push(e),e}stepLineProjectile(e,t){let n=e.line,r=Math.min(e.speed*t,n.max-n.traveled),i=e.x,a=e.z;e.x+=n.dx*r,e.z+=n.dz*r,n.traveled+=r;let o=(e.hitFilter?this.unitsInRadius(e.x,e.z,n.width+r/2,e.hitFilter):this.enemiesInRadius(e.team,e.x,e.z,n.width+r/2)).filter(t=>!n.hit.has(t.id)&&Tr(t.x,t.z,i,a,e.x,e.z)-t.radius<=n.width).sort((e,t)=>U(e.x-i,e.z-a)-U(t.x-i,t.z-a)||e.id-t.id);for(let t of o){n.hit.add(t.id);let r=this.abilityCtx;if(this.abilityCtx=e.ability,e.onHit?.(t,e),this.abilityCtx=r,!e.pierce||!e.alive){e.alive=!1;return}}if(n.traveled>=n.max-1e-6&&(e.alive=!1,e.onEnd)){let t=this.abilityCtx;this.abilityCtx=e.ability,e.onEnd(e),this.abilityCtx=t}}updateProjectiles(e){for(let t of this.projectiles){if(!t.alive)continue;if(t.line){this.stepLineProjectile(t,e);continue}t.target&&t.target.alive&&(t.tx=t.target.x,t.tz=t.target.z);let n=t.tx-t.x,r=t.tz-t.z,i=U(n,r),a=t.speed*e;if(i<=a+.3){t.x=t.tx,t.z=t.tz,t.alive=!1;let e=this.abilityCtx;this.abilityCtx=t.ability,t.target&&t.target.alive?t.onHit?.(t.target,t):t.onMiss?.(t),this.abilityCtx=e}else t.x+=n/i*a,t.z+=r/i*a}this.projectiles.some(e=>!e.alive)&&(this.projectiles=this.projectiles.filter(e=>e.alive))}addZone(e){return e.remaining=e.duration,e.acc=0,e.alive=!0,e.id=this.nextId++,e.ability=e.ability??this.abilityCtx,e.follow&&(e.x=e.follow.x,e.z=e.follow.z),this.zones.push(e),e}updateZones(e){for(let t of this.zones){if(!t.alive)continue;if(t.follow){if(!t.follow.alive){t.alive=!1;continue}t.x=t.follow.x,t.z=t.follow.z}t.remaining-=e,t.acc+=e;let n=this.abilityCtx;for(this.abilityCtx=t.ability;t.acc>=t.interval&&t.alive;)t.acc-=t.interval,t.onTick?.(t,this);this.abilityCtx=n,t.remaining<=0&&(t.alive=!1)}this.zones.some(e=>!e.alive)&&(this.zones=this.zones.filter(e=>e.alive))}onAttackAggro(e,t){if(e.kind!==`hero`||t.kind!==`hero`)return;let n=this.queryInto(e.x,e.z,16,[]);for(let t=0;t<n.length;t++){let r=n[t];if(r.team===e.team||r.team>1)continue;let i=r.dist(e);r.kind===`creep`&&i<10?r.drawAggro(e,2.5):r.kind===`tower`&&r.edgeDist(e)<=r.getRange()&&r.drawAggro(e)}}},Or=[1,2,3,4,5],kr={1:`Carry`,2:`Mid`,3:`Offlane`,4:`Roamer`,5:`Support`},Ar=[{1:`bot`,5:`bot`,2:`mid`,3:`top`,4:`top`},{1:`top`,5:`top`,2:`mid`,3:`bot`,4:`bot`}],jr=[1,0,0,1,1,0,0,1,1],Mr=[0,1,1,0,0,1,1,0,0,1];function Nr(e){return we((e>>>0^1592594996)>>>0)}function Pr(e,t){return(e.positions||[]).find(e=>t.has(e))??Math.min(...t)}function Fr({seed:e=1,playerHeroId:t=null,picks:n=null,heroes:r=ke}={}){if(n)return Ir(e,n,r);let i=Nr(e),a=new Map(r.map(e=>[e.id,e]));t===`random`&&(t=Oe(r,i).id);let o=[[],[]],s=[new Set(Or),new Set(Or)],c=new Set,l=(e,t)=>{let n=Pr(t,s[e]);s[e].delete(n),c.add(t.id),o[e].push({id:t.id,pos:n})},u=Mr;if(!t)i()<.5&&(u=Mr.map(e=>1-e));else{let e=a.get(t);if(!e)throw Error(`Unknown hero id: ${t}`);l(0,e),u=jr}for(let e of u){let t=r.filter(e=>!c.has(e.id));if(!t.length)break;let n=s[e],a=t.filter(e=>n.has(e.positions?.[0]));a.length||(a=t.filter(e=>(e.positions||[]).some(e=>n.has(e)))),a.length||(a=t),l(e,Oe(a,i))}for(let e of o)e.sort((e,t)=>e.pos-t.pos);return{teams:o,playerHeroId:t}}function Ir(e,t,n){let r=Nr(e),i=new Map(n.map(e=>[e.id,e])),a=[[],[]],o=[new Set(Or),new Set(Or)],s=new Set,c=(e,t)=>{let n=Pr(t,o[e]);o[e].delete(n),s.add(t.id),a[e].push({id:t.id,pos:n})};for(let e of t){let t=e?.team;if(t!==0&&t!==1)throw Error(`Invalid pick team: ${t}`);let n=i.get(e.heroId);if(!n)throw Error(`Unknown hero id: ${e.heroId}`);if(s.has(n.id))throw Error(`Hero picked twice: ${n.id}`);if(a[t].length>=5)throw Error(`Too many picks for team ${t}`);c(t,n)}let l=r()<.5,u=0;for(;a[0].length<5||a[1].length<5;){let e;e=a[0].length===a[1].length?l?1-Mr[u%Mr.length]:Mr[u%Mr.length]:a[0].length<a[1].length?0:1,u++;let t=n.filter(e=>!s.has(e.id));if(!t.length)break;let i=o[e],d=t.filter(e=>i.has(e.positions?.[0]));d.length||(d=t.filter(e=>(e.positions||[]).some(e=>i.has(e)))),d.length||(d=t),c(e,Oe(d,r))}for(let e of a)e.sort((e,t)=>e.pos-t.pos);return{teams:a,playerHeroId:null}}function Lr(e,t=ke){let n=new Map(t.map(e=>[e.id,e]));if(e.length&&e.every(e=>e&&typeof e==`object`)){for(let t of e)if(!n.has(t.id))throw Error(`Unknown hero id: ${t.id}`);return e.map(e=>({id:e.id,pos:e.pos})).sort((e,t)=>e.pos-t.pos)}let r=new Set(Or),i=[];for(let t of e){let e=n.get(t);if(!e)throw Error(`Unknown hero id: ${t}`);let a=r.size?Pr(e,r):i.length+1;r.delete(a),i.push({id:t,pos:a})}return i.sort((e,t)=>e.pos-t.pos)}function Rr(e,t){let n=pr[e].map(e=>({...e})),r=t===0?n:n.reverse();return r.push({...Vt[1-t]}),r}function zr(){let e=[0,0];return cr.map(t=>({id:`${t.side?`d`:`r`}${e[t.side]++}`,x:t.x,z:t.z,type:t.type,side:t.side}))}function Br(){let e=u.towers.filter(e=>e.tier<4).map(e=>({...e})),t=u.towers.filter(e=>e.tier===4).map(e=>({...e}));return{towers:e,barracks:u.barracks.map(e=>({...e})),tier4:t,trees:u.trees.map(([e,t,n,r,i])=>({x:e,z:t,s:Math.max(.8,Math.min(1.3,n)),h:i/10,k:r})),camps:zr(),bossPit:{...Zt},runeSpots:y.map(e=>({...e})),walk:u.navCell===2?nt:null,levels:te(2,G)}}var Vr=[],Hr=class extends ht{constructor(e,t,n,r,i={}){super(e,t,n,r),this.lane=i.lane,this.tier=i.tier,this.label=i.tier?`T${i.tier} ${i.lane} tower`:e.name,this.aggroTarget=null,this.immobile=!0,this.ignoresNeutrals=!0,this.ignoresWards=!0}drawAggro(e){this.validTarget(e)&&(this.aggroTarget=e)}inRange(e){return this.edgeDist(e)<=this.getRange()}think(e){this.acquireTimer-=e;let t=this.order.type===`attack`?this.order.target:null;if(this.aggroTarget&&this.validTarget(this.aggroTarget)&&this.inRange(this.aggroTarget)?t=this.aggroTarget:this.aggroTarget=null,t&&(!this.validTarget(t)||!this.inRange(t))&&(t=null),!t&&this.acquireTimer<=0){this.acquireTimer=.2;let e=null,n=1/0,r=null,i=1/0,a=this.world.queryInto(this.x,this.z,this.getRange()+6,Vr);for(let t=0;t<a.length;t++){let o=a[t];if(!this.validTarget(o)||o.isBuilding||!this.inRange(o))continue;let s=this.dist(o);o.kind===`hero`?s<i&&(i=s,r=o):s<n&&(n=s,e=o)}a.length=0,t=e||r}this.order=t?{type:`attack`,target:t}:{type:`idle`}}},Ur=class extends ht{constructor(e,t,n,r,i={}){super(e,t,n,r),this.lane=i.lane,this.label=i.lane?`${i.lane} barracks`:e.name,this.immobile=!0}},Wr=class{constructor(e,t){this.world=e,this.barracks=t,this.nextWave=2,this.wave=0,this.paths={};for(let e of qe)this.paths[e]=[Rr(e,0),Rr(e,1)]}update(){this.world.time>=this.nextWave&&(this.spawnWave(),this.nextWave+=30)}enemyBarracksDown(e,t,n){let r=this.barracks.find(r=>r.team!==e&&r.lane===t&&(!n||!r.kind||r.kind===n));return!!r&&!r.unit.alive}spawnWave(){this.wave++;let e=Math.min(1.8,1+(this.wave-1)*.018);for(let t=0;t<2;t++){let n=this.wave%2==1?t:1-t;for(let t of qe){let r=this.paths[t][n],i=3+ +(this.wave%6==0),a=[];for(let e=0;e<i;e++)a.push(`melee`);a.push(`ranged`);let o=r[0],s=r[1],c=U(s.x-o.x,s.z-o.z),l=(s.x-o.x)/c,u=(s.z-o.z)/c;a.forEach((i,s)=>{let c=i===`melee`?F.creepMelee:F.creepRanged,d=this.enemyBarracksDown(n,t,i),f=e*(d?1.8:1),p={...c,maxHp:Math.round(c.maxHp*f),dmgMin:c.dmgMin*f,dmgMax:c.dmgMax*f,bountyGold:Math.round(c.bountyGold*(d?.6:1)),isSuper:d},m=i===`melee`?0:2.5,h=(s-(a.length-1)/2)*1.6,g=o.x-l*m-u*h,_=o.z-u*m+l*h;this.world.add(new Ee(p,n,g,_,t,r,i))})}}}},Gr=e=>e.replace(/_(0|1|top|bot)$/,``),Kr=class extends Ur{constructor(e){let t=e.model?.startsWith(`buildings/`);super({kind:`shop`,name:e.name,maxHp:1e3,sight:0,isBuilding:!0,invulnerable:!0,radius:t?1.8:.7},e.team??2,e.x,e.z),this.shopId=e.id,this.shopKind=e.kind,this.vendor=Gr(e.id),this.model=this.vendor,this.label=e.name,this.scenery=!0}update(){}},qr={1:1800,2:1900,3:2100,4:2300},Jr={1:0,2:12,3:24,4:30};function Yr(e,t){t.walk&&(e.nav.static.set(t.walk),e.nav.navVersion++),e.visionLevels=t.levels??null,e.trees=t.trees;for(let n of t.trees)e.nav.addTree(n.x,n.z,1*n.s);let n=(t,n=t.radius*.85)=>(t.navRadius=n,e.add(t),e.nav.addDynamicCircle(t.x,t.z,n),t);e.towers=[];let r={};for(let i of[...t.towers,...t.tier4]){let t=n(new Hr({...F.tower,maxHp:qr[i.tier],dmgMin:F.tower.dmgMin+Jr[i.tier],dmgMax:F.tower.dmgMax+Jr[i.tier],projColor:i.team===0?10289052:16751738},i.team,i.x,i.z,{lane:i.lane,tier:i.tier}));e.towers.push(t),(r[`${i.team}-${i.lane}`]||={})[i.tier]=t,i.tier===4&&(r[`${i.team}-t4`]||=[]).push(t)}let i=[];for(let e of t.barracks){let t=n(new Ur(F.barracks,e.team,e.x,e.z,{lane:e.lane}));i.push({team:e.team,lane:e.lane,kind:e.kind,unit:t})}e.ancients=[],e.fountains=[];for(let t=0;t<2;t++){let a=Vt[t],o=n(new Ur(F.ancient,t,a.x,a.z));e.ancients.push(o);let s=ar[t],c=new Hr({...F.fountain,projColor:t===0?10289104:16756892},t,s.x,s.z);e.fountains.push(n(c,2.2)),e.towers.push(c);for(let e of qe){let n=r[`${t}-${e}`];n[2].protectedBy=[n[1]],n[3].protectedBy=[n[2]];for(let r of i)r.team===t&&r.lane===e&&(r.unit.protectedBy=[n[3]])}let l=qe.map(e=>r[`${t}-${e}`][3]);for(let e of r[`${t}-t4`])e.protectedBy=l,e.protectMode=`all`;o.protectedBy=r[`${t}-t4`]}e.shops=[];for(let t of Ae){let n=new Kr(t);n.navRadius=n.radius*.85,e.add(n,!1),e.nav.addDynamicCircle(n.x,n.z,n.navRadius),e.shops.push(n)}e.spawner=new Wr(e,i)}function Xr(e,t){e.jungle=new ft(e,t.camps,t.bossPit),e.runeSpawner=new oe(e,t.runeSpots)}var Zr={physical:0,magical:1,pure:2},Qr=[`physical`,`magical`,`pure`],$r=1,ei=2,ti=class{constructor(e=64){this.size=e,this.t=new Float64Array(e),this.amount=new Float64Array(e),this.srcId=new Int32Array(e),this.creditId=new Int32Array(e),this.type=new Uint8Array(e),this.flags=new Uint8Array(e),this.srcName=Array(e).fill(``),this.srcKind=Array(e).fill(``),this.ability=Array(e).fill(null),this.head=0,this.count=0}push(e,t,n,r,i,a,o,s){let c=this.head;this.t[c]=e,this.amount[c]=t,this.srcId[c]=n?n.id:-1,this.creditId[c]=r?r.id:-1,this.type[c]=typeof i==`number`?i:Zr[i]??0,this.flags[c]=(a?$r:0)|(o?ei:0),this.srcName[c]=n?String(n.displayName??n.name??``):``,this.srcKind[c]=n?String(n.kind??``):``,this.ability[c]=s??null,this.head=(c+1)%this.size,this.count<this.size&&this.count++}clear(){this.head=0,this.count=0,this.ability.fill(null)}forEach(e){let t=(this.head-this.count+this.size)%this.size;for(let n=0;n<this.count;n++)e((t+n)%this.size)}};function ni(e,t,n=10){let r=new Map,i=0,a=t-n;e.forEach(n=>{let o=e.t[n];if(o<a||o>t)return;let s=e.srcId[n],c=r.get(s);c||(c={srcId:s,creditId:e.creditId[n],name:e.srcName[n],kind:e.srcKind[n],total:0,physical:0,magical:0,pure:0,attacks:0,crits:0,abilities:{},first:o,last:o},r.set(s,c));let l=e.amount[n];c.total+=l,c[Qr[e.type[n]]??`physical`]+=l,e.flags[n]&$r&&c.attacks++,e.flags[n]&ei&&c.crits++;let u=e.ability[n];u&&(c.abilities[u]=(c.abilities[u]||0)+l),o<c.first&&(c.first=o),o>c.last&&(c.last=o),i+=l});let o=[...r.values()].sort((e,t)=>t.total-e.total||e.srcId-t.srcId);return{total:i,window:n,rows:o}}var ri=3,ii=30,ai=4,oi=class extends ht{constructor(e){let t=ar[e],n=e===0?1:-1,r={x:t.x+n*4,z:t.z-n*4};super(F.courier,e,r.x,r.z),this.name=`Courier`,this.flying=!0,this.home=r,this.state=`home`,this.targetId=null,this.respawnTimer=0,this.trips=0,this.drops=0,this.autoAttack=!1,this.errands=[],this.parkedAt=-1,this.lastPurchaseAt=-1/0}get displayName(){return`Courier`}get atHome(){return this.alive&&this.state===`home`&&U(this.x-this.home.x,this.z-this.home.z)<=1.5}update(e){if(!this.alive){this.respawnTimer-=e,this.respawnTimer<=0&&this.respawn();return}super.update(e)}respawn(){this.x=this.home.x,this.z=this.home.z,this.px=this.x,this.pz=this.z,this.alive=!0,this.hp=this.maxHp,this.state=`home`,this.targetId=null,this.respawnTimer=0,this.errands.length=0,this.parkedAt=-1,this.world.emit({type:`respawn`,unit:this,inPlace:!1})}executeOrder(){}tryMove(e,t){this.x=Math.max(1,Math.min(m-1,this.x+e)),this.z=Math.max(1,Math.min(m-1,this.z+t))}flyTo(e,t,n){let r=e-this.x,i=t-this.z,a=U(r,i),o=this.getMoveSpeed()*n;return this.faceTo(e,t),a<=o?(this.tryMove(r,i),this.moving=a>0,!0):(this.tryMove(r/a*o,i/a*o),this.moving=!0,!1)}owners(){let e=[];for(let t of this.world.heroes)if(t.team===this.team){for(let n of t.deliveries)if(n.courier===this.id&&!n.held){e.push(t);break}}return e}loadAll(){let e=!1;for(let t of this.world.heroes)t.team===this.team&&t.alive&&!n(t)&&At(t,this)&&(e=!0);return e}servable(e){return!!e&&e.alive&&!n(e)&&e.deliveries.some(e=>e.courier===this.id&&!e.held)}pickTarget(){let e=null,t=1/0;for(let r of this.owners()){if(!r.alive||n(r))continue;let i=this.dist(r);(i<t||i===t&&e&&r.id<e.id)&&(t=i,e=r)}return e}dropTo(e){Mn(e,this)&&this.drops++}addErrand(e,t,n){let r=si(this,e,t,n);if(r)return r;let i={owner:e.id,shop:Ve[t],items:[...n]},a=this.errands.findIndex(t=>t.owner===e.id);return a>=0?this.errands[a]=i:this.errands.push(i),this.state=`shop`,this.parkedAt=-1,null}deliverNow(e){let t=ci(this,e);if(t)return t;for(let t of e.deliveries)t.courier===this.id&&t.held&&(t.stack||Kn(e)>0)&&(t.held=!1);return this.state===`shop`&&!this.errands.length?(this.parkedAt=-1,this.afterErrands()):(this.state===`return`||this.state===`deliver`)&&this.servable(e)&&(this.state===`return`&&this.trips++,this.state=`deliver`,this.targetId=e.id),null}runErrands(){let e=this.errands[0].shop,t=!1;for(let n=0;n<this.errands.length;n++){let r=this.errands[n];if(r.shop!==e)continue;let i=this.world.byId.get(r.owner);if(i&&!i.removed)for(let e of r.items)Kt(i,e);r.items.length||(t=!0),this.errands.splice(n--,1)}t&&(this.parkedAt=this.world.time)}afterErrands(){this.errands.length||(this.state=this.pickTarget()?`deliver`:`return`,this.targetId=null,this.state===`deliver`&&this.trips++)}think(e){let t=this.world;switch(this.state){case`shop`:{if(this.parkedAt>=0&&!this.errands.length){(t.time-Math.max(this.parkedAt,this.lastPurchaseAt)>=ri&&this.pickTarget()||t.time-this.parkedAt>=ii)&&(this.parkedAt=-1,this.afterErrands());break}if(!this.errands.length){this.afterErrands();break}let n=this.errands[0].shop;if(U(this.x-n.x,this.z-n.z)<=ai){this.runErrands(),this.parkedAt<0&&this.afterErrands();break}this.flyTo(n.x,n.z,e);break}case`home`:if(U(this.x-this.home.x,this.z-this.home.z)>1.5){this.state=`return`;break}this.loadAll(),this.pickTarget()&&(this.state=`deliver`,this.targetId=null,this.trips++);break;case`deliver`:{let n=this.targetId==null?null:t.byId.get(this.targetId);if(this.servable(n)||(n=this.pickTarget(),this.targetId=n?n.id:null),!n){this.state=`return`,this.targetId=null;break}if(this.dist(n)<=2.5){this.dropTo(n),this.targetId=null;break}this.flyTo(n.x,n.z,e);break}case`return`:this.flyTo(this.home.x,this.home.z,e)&&(this.state=`home`);break;default:this.state=`return`}}};function si(e,t,n,r){let i=Ve[n];if(!i||i.team!=null&&i.team!==t.team)return`Invalid shop`;if(!Array.isArray(r)||r.length>6)return`Invalid order`;for(let e of r){let t=xr[e];if(!t)return`Unknown item`;if(!zn(t).includes(i))return`${i.name} doesn't sell that`}if(!e||e.removed)return`No courier`;if(!e.alive)return`Courier is dead`;let a=e.errands??[];return!a.some(e=>e.owner===t.id)&&a.length>=10?`Courier is busy`:null}function ci(e,t){return!e||e.removed?`No courier`:e.alive?t.alive?n(t)?`You are at base`:t.deliveries.some(t=>t.courier===e.id)||t.stash.some(Boolean)?null:`Nothing to deliver`:`Dead`:`Courier is dead`}function li(e,t){return e.add(new oi(t))}function ui(e,t){return t!==0&&t!==1?null:(e.couriers||=[null,null],e.couriers[t]||(e.couriers[t]=li(e,t)),e.couriers[t])}function di(e,t){if(!e||!t)return 1/0;let n=Math.max(1,e.getMoveSpeed()),r=(e,n)=>Math.max(0,U(t.x-e,t.z-n)-tn),i=e.home.x,a=e.home.z;if(!e.alive)return e.respawnTimer+r(i,a)/n;if(e.state===`deliver`){if(e.targetId===t.id||e.targetId==null)return r(e.x,e.z)/n;let i=e.world?.byId.get(e.targetId);return i?(U(i.x-e.x,i.z-e.z)+r(i.x,i.z))/n:r(e.x,e.z)/n}return e.state===`return`?(U(i-e.x,a-e.z)+r(i,a))/n:r(e.x,e.z)/n}var fi=.25,pi=1.6,mi=18,hi=.2,gi=`ability_orb`;function _i(e,t,n){if(!e.alive||!t.alive||t.isInvulnerable()||n.def.noReflect||t.spellTargeted?.(e,n))return;let r=e.world,i=r.abilityCtx;r.abilityCtx=n.def.id,n.def.active?n.def.active.use(e,t.x,t.z,t,n):n.def.cast(e,n,t,t.x,t.z,r,{fromInvis:!1}),r.abilityCtx=i,r.emit({type:`cast`,unit:e,ab:n,target:t,x:t.x,z:t.z})}var vi=[`onAttackStart`,`onAttackLanded`,`onAttacked`,`onTakeDamage`,`aura`,`onTick`,`onDeath`,`onSpellTarget`,`onEnemyCast`,`onHeroDeath`],yi=Object.freeze([]),bi=Object.freeze({def:Object.freeze({})}),xi=class e extends ht{constructor(t,n,r){let i=ar[n],a={kind:`hero`,name:t.name,maxHp:t.hp,maxMana:t.mana,radius:.85,sight:t.sight??18,nightSight:t.nightSight??11,attackPoint:t.attackPoint??.3,projSpeed:t.projSpeed??0,projColor:t.projColor,magicResist:fi},o=e.spawnPoint(n,r);super(a,n,o.x,o.z),this.def=t,this.slot=r,this.displayName=t.name,this.level=1,this.xp=0,this.skillPoints=1,this.abilities=vt(t).map((e,t)=>new me(e,this,t)),this.lastCast=null,this.items=[null,null,null,null,null,null],this.stash=[,,,,,,].fill(null),this.itemCds=new Map,this._hookSlots=[],this._itemHooks=null,this.deliveries=[],this.itemUses={},this.consumed=[],this.gold=625,this.kills=0,this.deaths=0,this.assists=0,this.lastHits=0,this.killStreak=0,this.multiKill=0,this.lastKillTime=null,this.denies=0,this.canDenyAllies=!0,this.buybackReadyAt=0,this.buybacks=0,this.respawnTimer=0,this.respawnInPlace=null,this.autoAttack=!0,this.isBot=!1,this.brain=null,this.auraTimer=0,this.fountain=i,this.wasAtShop=!1,this.goldEarned=0,this.runesPicked=0,this.wardsPlaced=0,this.damageLog=new ti,this.computeStats(!0),this.immobile=!1,this.autocastTimer=0}static spawnPoint(e,t){let n=ar[e],r=t/5*Math.PI*.5+(e===0?-Math.PI/2:Math.PI/2);return{x:n.x+Math.cos(r)*5+(e===0?3:-3),z:n.z+Math.sin(r)*5+(e===0?-3:3)}}get isRanged(){return!!this.def.ranged&&!this.meleeForm||!!this.rangedForm}missileKey(){return this.morph?.spec.projArt??this.def.id}itemStats(){let e={hp:0,mana:0,hpRegen:0,manaRegen:0,manaRegenPct:0,armor:0,dmg:0,aspd:0,ms:0,msPct:0,range:0,mr:0,str:0,agi:0,int:0,trueSight:0,evasion:0},t=0,n=(n,r)=>{for(let i in r){let a=r[i];i===`ms`&&n.def.boots?t=Math.max(t,a):i===`msPct`||i===`trueSight`?e[i]=Math.max(e[i],a):i===`mr`||i===`evasion`?e[i]=1-(1-e[i])*(1-a):i===`all`?(e.str+=a,e.agi+=a,e.int+=a):e[i]+=a}};for(let e of this.items)e&&(e.def.stats&&n(e,e.def.stats),e.def.slotStats&&n(e,e.def.slotStats(e)));for(let e of this.consumed)n(bi,xr[e].consumedStats);return e.ms+=t,e}computeStats(e=!1){let t=this.def,n=this.itemStats(),r=lr(t,this.level);this.baseAttrs=r;let i={range:0,str:0,agi:0,int:0,hp:0,mana:0,armor:0,ms:0,melee:!1,bat:0};if(this.alive)for(let e of this.buffs)e.str&&(i.str+=e.str),e.agi&&(i.agi+=e.agi),e.int&&(i.int+=e.int);for(let e of this.abilities)if(e.level>0&&e.def.stats){let t=e.def.stats(e);for(let e in t)e===`melee`?i.melee=i.melee||!!t.melee:e===`bat`?i.bat=t.bat||i.bat:i[e]=(i[e]||0)+t[e]}let a=this.morph?.spec,o=a&&a.ranged!==void 0?!!a.ranged:!!t.ranged&&!i.melee;this.meleeForm=!!t.ranged&&!o,this.rangedForm=!t.ranged&&o,this.bonusAttrs={str:n.str+i.str,agi:n.agi+i.agi,int:n.int+i.int};let s={};for(let e of Je)s[e]=r[e]+this.bonusAttrs[e];this.attrs=s;let c=h(t,s),l=this.maxHp?this.hp/this.maxHp:1,u=this.maxMana?this.mana/this.maxMana:1;this.maxHp=c.hp+n.hp+i.hp,this.maxMana=c.mana+n.mana+i.mana,this.hpRegen=c.hpRegen+n.hpRegen,this.manaRegen=c.manaRegen*(1+n.manaRegenPct)+n.manaRegen,this.armor=c.armor+n.armor+i.armor;let d=c.dmg+n.dmg;this.dmgMin=d-3,this.dmgMax=d+3;let f=a?.bat||i.bat;this.attackRate=f>0?1/f:t.aspd,this.ias=c.ias+n.aspd,this.moveSpeed=(t.ms+n.ms+i.ms)*(1+n.msPct),this.trueSight=n.trueSight,this.evasion=n.evasion,this.magicResist=1-.75*(1-n.mr);let p=a?.range??(this.meleeForm?pi:t.range);this.attackRange=p+(o?n.range:0)+(i.range||0),this.projSpeed=o?a?.projSpeed??t.projSpeed??mi:0,this.hp=e?this.maxHp:Math.max(1,l*this.maxHp),this.mana=e?this.maxMana:u*this.maxMana}gainXp(e){if(this.level>=25)return;this.xp+=e;let t=!1;for(;this.level<25&&this.xp>=Pe[this.level];)this.level++,this.skillPoints++,t=!0;if(t){let e=this.baseAttrs;this.computeStats(),this.hp=Math.min(this.maxHp,this.hp+(this.baseAttrs.str-e.str)*19),this.mana=Math.min(this.maxMana,this.mana+(this.baseAttrs.int-e.int)*13),this.world.emit({type:`levelup`,unit:this})}}levelAbility(e){let t=this.abilities[e];return!t||!t.canLevel()?!1:(t.level++,this.skillPoints--,this.computeStats(),!0)}addItem(e){let t=this.items.indexOf(null);return t<0?!1:(this.items[t]=e,this.bindItem(e),this.computeStats(),!0)}ensureCourier(){return this.world?ui(this.world,this.team):null}hasItem(e){return this.items.some(t=>t&&t.def.id===e)}hasScepter(){return this.hasItem(`aghanims_scepter`)||!!this.consumed?.includes(`aghanims_scepter`)}bindItem(e){if(e.owner===this)return;let t=this.itemCds.get(e.cdKey);t||(t={t:0},this.itemCds.set(e.cdKey,t)),t.t=Math.max(t.t,e.cd),e._cd=t,e.owner=this}itemHooks(e){if(this.mods.broken)return yi;let t=this.items,n=this._hookSlots,r=!!this._itemHooks&&n.length===t.length;for(let e=0;r&&e<t.length;e++)t[e]!==n[e]&&(r=!1);if(!r){let e=[];for(let n of t)for(let t of n?.def.passives??yi)(!this.illusion||t.illusion)&&e.push([t,n]);e.sort((e,t)=>(t[0].priority??0)-(e[0].priority??0));let n=new Set,r=[];for(let t of e)n.has(t[0].id)||(n.add(t[0].id),r.push(t));let i={};for(let e of vi){let t=r.filter(([t])=>t[e]);t.length&&(i[e]=t)}let a=r.filter(([e])=>e.uam);a.length&&(i.uam=a),this._itemHooks=i,this._hookSlots=t.slice()}return this._itemHooks[e]??yi}castCheck(e){if(!this.alive)return`Dead`;if(!e)return`Nothing there`;if(e.isPassive)return`Passive`;if(e.shown===!1)return`Not available`;if(e.level===0)return`Not learned`;if(this.mods.stunned)return`Stunned`;if(this.mods.busy)return`Busy`;if(this.mods.hexed)return`Hexed`;if(this.mods.taunt&&!e.def.active)return`Taunted`;if(this.mods.silenced&&!e.def.active)return`Silenced`;if(this.mods.muted&&e.def.active)return`Muted`;if(this.mods.rooted&&e.def.mobility)return`Rooted`;if(e.cd>0)return`On cooldown`;if(e.def.charges&&e.syncCharges&&(e.syncCharges(),e.charges<=0))return`No charges`;if(this.mana<e.manaCost&&!(e.isToggle&&e.on))return`Not enough mana`;if(e.def.castCheck){let t=e.def.castCheck(this,e);if(t)return t}return e.def.active?.check?.(this,e)??null}validCastTarget(e,t){if(!t||!t.alive||t.removed||t.kind===`ward`||t.kind===`courier`)return!1;if(e.def.orb)return this.validTarget(t)&&this.orbCanHit(e,t);let n=e.def.active??e.def;if(n.targetFilter&&!n.targetFilter(this,t)||e.def.active&&!n.pierces&&t.team!==this.team&&t.mods.magicImmune)return!1;let r=(e.def.active?n.targetTeam:e.field?.(`targetTeam`)??n.targetTeam)||`enemy`;return r===`enemy`?t.team!==this.team&&!t.isInvulnerable()&&!t.isBuilding&&this.world.isVisible(this.team,t):r===`ally`?t.team===this.team&&!t.isBuilding:!t.isBuilding&&(t.team===this.team||!t.isInvulnerable()&&this.world.isVisible(this.team,t))}castAbility(e,t=null,n=null,r=null){let i=this.castCheck(e);if(i)return i;if(e.isToggle)return this.toggleAbility(e);if(e.target===`unit`&&!this.validCastTarget(e,t))return`Invalid target`;if(e.target===`point`&&e.def.active?.pointCheck){let t=e.def.active.pointCheck(this,n,r);if(t)return t}if(e.def.orb&&e.target===`unit`)return this.issue({type:`attack`,target:t,orb:e}),null;if(this.channel&&this.interruptChannel(`order`),e.target===`none`&&!(e.castPoint>0))return this.doCast(e,null,this.x,this.z),null;let a=this.order.type===`cast`?{type:`idle`}:this.order;return this.order={type:`cast`,ab:e,target:t,x:n,z:r,after:a.type===`attack`?a:{type:`idle`}},null}executeCast(e,t){let n=e.ab;if(this.castCheck(n)){this.order={type:`idle`};return}let r=e.x,i=e.z,a=0;if(n.target===`none`&&(r=this.x,i=this.z),n.target===`unit`){if(!this.validCastTarget(n,e.target)){this.order={type:`idle`};return}r=e.target.x,i=e.target.z,a=e.target.radius+this.radius}let o=n.castRange+a;if(!e.cp&&this.distXZ(r,i)>o){this.moveTo(r,i,t,o-.2,n.target===`unit`?e.target:null);return}this.faceTo(r,i);let s=n.castPoint||0;s>0&&(e.cp=(e.cp||0)+t,this.attackAnim=.3,e.cp<s-1e-6)||(this.order=e.after&&e.after.type===`attack`&&this.validAttackTarget(e.after.target)?e.after:{type:`idle`},this.doCast(n,e.target,r,i))}get inCastPoint(){return this.order.type===`cast`&&this.order.cp>0}breakCast(e){if(this.inCastPoint&&(e.stun||e.hex||e.cyclone||e.taunt||e.silence&&!this.order.ab.def.active)&&(this.order={type:`idle`}),this.channel){let t=e.cyclone?`cyclone`:e.stun?`stun`:e.hex?`hex`:e.taunt?`taunt`:e.silence&&!this.channel.item?`silence`:null;t&&this.interruptChannel(t)}}startChannel(e,t,{target:n=null,x:r=this.x,z:i=this.z,onTick:a=null,onEnd:o=null}={}){return this.channel&&this.interruptChannel(`order`),this.order={type:`idle`},this.path=null,this.windup=0,this.channel={ab:e,item:!!e.def.active,target:n,x:r,z:i,duration:t,elapsed:0,order:this.order,data:{},onTick:a,onEnd:o},this.channel}channelBreak(e){if(!this.alive)return`death`;let t=this.mods;return t.cyclone?`cyclone`:t.stunned?`stun`:t.hexed?`hex`:t.taunt?`taunt`:t.silenced&&!e.item?`silence`:this.order===e.order?null:`order`}updateChannel(e){let t=this.channel,n=this.channelBreak(t);if(n){this.interruptChannel(n);return}let r=Math.min(e,t.duration-t.elapsed);t.elapsed+=e;let i=this.world,a=i.abilityCtx;i.abilityCtx=t.ab.def.id,r>0&&(t.onTick?.(this,t.ab,r,i,t),!t.item&&this.channel===t&&t.ab.def.onChannelTick?.(this,t.ab,r,i,t)),i.abilityCtx=a,this.channel===t&&t.elapsed>=t.duration-1e-6&&this.endChannel(!1,`done`)}interruptChannel(e=`interrupt`){this.channel&&this.endChannel(!0,e)}endChannel(e,t){let n=this.channel;if(!n)return;this.channel=null;let r=this.world,i=r.abilityCtx;r.abilityCtx=n.ab.def.id;let a={interrupted:e,reason:t,elapsed:Math.min(n.elapsed,n.duration),ch:n};n.onEnd?.(this,n.ab,r,a),n.item||n.ab.def.onChannelEnd?.(this,n.ab,r,a),r.abilityCtx=i}executePickup(e,t){let n=e.rune;if(!n||!n.alive){this.order={type:`idle`};return}this.moveTo(n.x,n.z,t,1.8)&&(it(this.world,this,n),this.order={type:`idle`})}executeItemOrder(e,t){let n=this.world,r=()=>{this.order={type:`idle`}};if(e.type===`pickupItem`){let i=e.item;if(!i||!i.alive){r();return}this.moveTo(i.x,i.z,t,2)&&(Tt(n,this,i),r());return}if(!this.items.includes(e.item)){r();return}if(e.type===`drop`){this.moveTo(e.x,e.z,t,3)&&(re(n,this,e.item,e.x,e.z),r());return}let i=e.target;if(Un(this,e.item,i)){r();return}if(this.edgeDist(i)<=2.5){N(n,this,e.item,i),r();return}this.moveTo(i.x,i.z,t,Nt+i.radius+this.radius-.2,i)}doCast(e,t,n,r){if(e.isToggle){this.toggleAbility(e);return}if(e.def.orb&&!e.def.cast){t&&this.issue({type:`attack`,target:t,orb:e});return}let i=!!e.def.active,a=e.def.keepInvis||e.def.active?.keepInvis,o=this.world,s=o.abilityCtx,c=!!t&&t.team!==this.team,l=c&&!!t.spellTargeted?.(this,e),u=c&&!l&&t.mods.reflect;if(o.abilityCtx=e.def.id,i){let i=l||e.def.active.use(this,n,r,t,e);if(o.abilityCtx=s,i===!1)return;a||Lt(this),this.mana-=e.manaCost,e.cd=e.cooldown,e.def.charges&&(e.charges--,e.charges<=0&&(this.items[this.items.indexOf(e)]=null,this.computeStats())),u&&_i(t,this,e)}else{let i=a?{wasInvisible:!!this.mods.invisible}:Lt(this);this.mana-=e.manaCost,e.cd=e.cooldown,e.def.charges&&e.spendCharge();let c=(!l&&e.def.cast(this,e,t,n,r,this.world,{fromInvis:i.wasInvisible}))===!1||!this.alive?0:e.channelTime;if(c>0&&this.startChannel(e,c,{target:t,x:n,z:r}),o.abilityCtx=s,u&&_i(t,this,e),e.def.castRecord!==!1&&(this.lastCast={def:e.def,level:e.level,time:o.time}),e.def.castRecord!==!1)for(let t of this.abilities)t.level>0&&t.def.onAbilityCast&&t.def.onAbilityCast(this,t,e);if(e.def.castRecord!==!1){for(let t of o.heroes)if(!t.illusion){if(t.team===this.team){if(t.alive)for(let n of t.abilities)n.level>0&&n.def.onAllyCast&&n.def.onAllyCast(t,n,this,e);continue}for(let n of t.abilities)n.level>0&&n.def.onEnemyCast&&n.def.onEnemyCast(t,n,this,e);if(t.alive)for(let[n,r]of t.itemHooks(`onEnemyCast`))n.onEnemyCast(t,r,this,e)}}}this.attackAnim=.3,this.world.emit({type:`cast`,unit:this,ab:e,target:t,x:n,z:r})}isUam(e){return e.uam===!0||e.uam===`melee`&&!this.isRanged}onAttackStart(e){for(let t of this.abilities)t.level>0&&t.def.onAttackStart&&t.def.onAttackStart(this,t,e);e.uam=null;let t=this.pickOrb(e.target);if(t)this.useOrb(t,e);else for(let[t]of this.itemHooks(`uam`))if(this.isUam(t)){e.uam=t.id;break}for(let[t,n]of this.itemHooks(`onAttackStart`))t.uam&&t.id!==e.uam&&this.isUam(t)||t.onAttackStart(this,n,e);e.critMult>1&&(e.dmg*=e.critMult,e.crit=!0)}orbCanHit(e,t){let n=e.def.orb;return!t||!t.alive||t.team===this.team||t.isBuilding&&!n.buildings?!1:!n.canHit||!!n.canHit(this,e,t)}orbReady(e,t){return e.level>0&&e.cd<=0&&this.mana>=e.manaCost&&(!e.def.orb.hpCost||this.hp>e.orbHpCost)&&this.orbCanHit(e,t)}pickOrb(e){let t=this.order,n=null;if(t.type===`attack`&&t.orb&&(t.target===e&&(n=t.orb),t.orb=null),this.illusion||this.mods.silenced)return null;if(n&&this.orbReady(n,e))return n;for(let t of this.abilities)if(t.auto&&t.def.orb&&this.orbReady(t,e))return t;return null}useOrb(e,t){let n=e.def.orb;this.mana-=e.manaCost,n.hpCost&&(this.hp=Math.max(1,this.hp-e.orbHpCost)),e.cd=e.cooldown,t.orb=e,t.uam=gi,n.projArt&&(t.projArt=n.projArt),n.projColor!==void 0&&(t.projColor=n.projColor),n.onStart?.(this,e,t)}onAttackLanded(e,t){if(t.orb){let n=this.world,r=n.abilityCtx;n.abilityCtx=t.orb.def.id,t.orb.def.orb.onHit?.(this,t.orb,e,t,n),n.abilityCtx=r}for(let n of this.abilities)n.level>0&&n.def.onAttackLanded&&n.def.onAttackLanded(this,n,e,t);if(this.buffs.length)for(let n of this.buffs.slice())n.onAttackLanded?.(this,n,e,t);for(let[n,r]of this.itemHooks(`onAttackLanded`))n.uam&&n.id!==t.uam&&this.isUam(n)||n.onAttackLanded(this,r,e,t)}onAttacked(e,t){for(let n of this.abilities)n.level>0&&n.def.onAttacked&&n.def.onAttacked(this,n,e,t);for(let[n,r]of this.itemHooks(`onAttacked`))n.onAttacked(this,r,e,t)}onTakeDamage(e,t,n,r){let i=this.itemHooks(`onTakeDamage`);if(!i.length)return e;let a={amount:e,type:t,source:n,flags:r,block:0};for(let[e,t]of i)e.onTakeDamage(this,t,a);return a.block>this.mods.dmgBlock&&(a.amount-=a.block-this.mods.dmgBlock),a.amount}abilityDamageHooks(e){for(let t of this.abilities)if(t.level>0&&t.def.onTakeDamage&&(t.def.onTakeDamage(this,t,e),!(e.amount>0)))return 0;return e.amount}onKill(e,t){for(let n of this.abilities)n.level>0&&n.def.onKill&&n.def.onKill(this,n,e,t);for(let n of this.buffs.slice())n.onKill?.(this,n,e,t)}preventDeath(e,t,n){if(this.illusion)return!1;for(let r of this.abilities)if(r.level>0&&r.def.onLethal&&r.def.onLethal(this,r,e,t,n))return!0;return!1}onDeath(e){for(let e of this.abilities)e.on&&!e.def.toggleKeepOnDeath&&this.setToggle(e,!1,`death`);for(let t of this.abilities)t.level>0&&t.def.onDeath&&t.def.onDeath(this,t,{killer:e});for(let[t,n]of this.itemHooks(`onDeath`))t.onDeath(this,n,e);ge(this);for(let t of this.world.heroes)if(t!==this){if(!t.illusion)for(let n of t.abilities)n.level>0&&n.def.onHeroDeath&&n.def.onHeroDeath(t,n,this,e);for(let[n,r]of t.itemHooks(`onHeroDeath`))n.onHeroDeath(t,r,this,e)}}toggleItem(e){let t=this.items[e];if(!t)return`Nothing there`;let n=t.def;if(n.toggle===void 0)return`Cannot toggle that`;if(!this.alive)return`Dead`;if(this.mods.stunned)return`Stunned`;if(this.mods.hexed)return`Hexed`;let r=this.hp,i=this.maxHp;return t.toggle=n.nextToggle?n.nextToggle(t.toggle):!t.toggle,this.computeStats(),n.onToggle?.(this,t,r,i),null}toggleAbility(e){let t=!e.on;return t&&(e.def.keepInvis||Lt(this),this.mana-=e.manaCost),e.cd=e.cooldown,this.setToggle(e,t,`cast`),t&&this.world.emit({type:`cast`,unit:this,ab:e,target:null,x:this.x,z:this.z}),null}setToggle(e,t,n=`cast`){if(!e.isToggle||e.on===t)return;e.on=t;let r=this.world,i=r.abilityCtx;r.abilityCtx=e.def.id,e.def.onToggle?.(this,e,t,r,n),r.abilityCtx=i}updateToggles(e){if(this.illusion)return;let t=this.world;for(let n of this.abilities){if(!n.on)continue;let r=n.manaPerSec*e;if(r>0){if(this.mana<r){this.setToggle(n,!1,`mana`);continue}this.mana-=r}if(n.def.toggleTick){let r=t.abilityCtx;t.abilityCtx=n.def.id,n.def.toggleTick(this,n,e,t),t.abilityCtx=r}}if(this.autocastTimer-=e,!(this.autocastTimer>0)&&(this.autocastTimer=hi,!(this.channel||this.order.type===`cast`)))for(let e of this.abilities){if(!e.auto||!e.def.autocastTarget||this.castCheck(e))continue;let n=e.def.autocastTarget(this,e,t);if(!(!n||!this.validCastTarget(e,n)||this.edgeDist(n)>e.castRange)){this.doCast(e,n,n.x,n.z);return}}}setAutocast(e,t=void 0){let n=this.abilities[e];return n?n.def.autocast?n.level===0?`Not learned`:(n.auto=t===void 0?!n.auto:!!t,null):`No autocast`:`Nothing there`}spellTargeted(e,t){if(!this.illusion){for(let n of this.abilities)if(n.level>0&&n.def.onSpellTarget&&n.def.onSpellTarget(this,n,e,t))return!0}for(let[n,r]of this.itemHooks(`onSpellTarget`))if(n.onSpellTarget(this,r,e,t))return!0;return super.spellTargeted(e,t)}buybackCost(){return le(this.level,Fn(this))}buybackError(){return this.alive?`You are alive`:this.respawnInPlace?`Reincarnating`:this.world.time<this.buybackReadyAt?`Buyback on cooldown`:this.gold<this.buybackCost()?`Not enough gold`:null}buyback(){let e=this.buybackError();if(e)return e;let t=this.buybackCost();return this.gold-=t,this.buybackReadyAt=this.world.time+360,this.respawnTimer=0,this.respawn(),this.buybacks++,this.world.emit({type:`buyback`,unit:this,cost:t}),this.world.emit({type:`killfeed`,text:`${this.displayName} bought back`,team:this.team,victimTeam:this.team}),null}respawn(){let t=!!this.respawnInPlace,n=this.respawnInPlace??e.spawnPoint(this.team,this.slot);this.respawnInPlace=null,this.damageLog.clear(),this.x=n.x,this.z=n.z,this.px=n.x,this.pz=n.z,this.alive=!0,this.computeStats(),this.hp=this.maxHp,this.mana=this.maxMana,this.order={type:`idle`},this.channel=null,this.path=null,this.autoTarget=null,this.world.emit({type:`respawn`,unit:this,inPlace:t})}update(e){for(let t of this.abilities)t.tick(e);for(let e of this.items)e&&e.owner!==this&&this.bindItem(e);for(let e of this.stash)e&&e.owner!==this&&this.bindItem(e);for(let t of this.itemCds.values())t.t>0&&(t.t-=e);if(!this.illusion&&!this.clone&&Dt(this),!this.alive){this.channel&&this.interruptChannel(`death`),this.respawnTimer-=e,this.respawnTimer<=0?this.respawn():this.brain?.updateDead?.(e);return}if(this.distXZ(this.fountain.x,this.fountain.z)<15&&(this.hp=Math.min(this.maxHp,this.hp+this.maxHp*.07*e),this.mana=Math.min(this.maxMana,this.mana+this.maxMana*.07*e)),this.updateToggles(e),this.auraTimer-=e,this.auraTimer<=0){this.auraTimer=.5;for(let e of this.abilities)e.level>0&&e.def.aura&&e.def.aura(this,e,this.world);for(let[e,t]of this.itemHooks(`aura`))e.aura(this,t,this.world)}for(let[t,n]of this.itemHooks(`onTick`))t.onTick(this,n,e);super.update(e)}think(e){this.brain&&this.brain.update(e)}},Si=Object.freeze({REPLACED:4001,PROTOCOL:4002,RATE:4008,ROOM_CLOSED:4010,SERVER_FULL:4013});Object.freeze({BAD_VERSION:`bad_version`,HELLO_FIRST:`hello_first`,BAD_MESSAGE:`bad_message`,NOT_FOUND:`not_found`,FULL:`full`,STARTED:`started`,NOT_IN_ROOM:`not_in_room`,IN_ROOM:`in_room`,NOT_HOST:`not_host`,SLOT_TAKEN:`slot_taken`,HERO_TAKEN:`hero_taken`,NOT_READY:`not_ready`,TOO_MANY_ROOMS:`too_many_rooms`,NOT_PLAYING:`not_playing`}),Object.freeze([`alert`,`danger`,`omw`,`attack`,`defend`,`missing`]);var Ci=Object.freeze([`hello`,`rooms`,`create`,`join`,`leave`,`slot`,`pick`,`ready`,`opts`,`start`,`order`,`ack`,`cam`,`ping`,`tping`,`chat`,`resync`]);Object.freeze([`welcome`,`error`,`rooms`,`room`,`start`,`snap`,`orderErr`,`pong`,`tping`,`chat`,`gameover`]),new Set(Ci);var wi=new Set([`idle`,`hold`,`move`,`attackMove`,`attack`,`cast`,`pickup`,`pickupItem`,`drop`,`give`]),Ti=new Set([`idle`,`hold`,`move`,`attackMove`,`attack`,`cast`]),Ei=e=>typeof e==`number`&&Number.isFinite(e),Di=(e,t)=>Number.isInteger(e)&&e>=0&&e<t;function Oi(e,t){if(!e||!t)return null;let n=e.abilities?e.abilities.indexOf(t):-1;if(n>=0)return{src:`ability`,slot:n};let r=e.items?e.items.indexOf(t):-1;return r>=0?{src:`item`,slot:r}:null}function ki(e,t){if(!Number.isInteger(t))return null;let n=e.byId.get(t);return n&&!n.removed?n:null}function Ai(e,t){return Number.isInteger(t)&&e.runes.find(e=>e.alive&&e.id===t)||null}function ji(e,t,n){return t===`ability`?e.abilities&&Di(n,e.abilities.length)?e.abilities[n]:null:t===`item`&&e.items&&Di(n,e.items.length)?e.items[n]:null}function Mi(e,t,n){if(!n||typeof n!=`object`||!wi.has(n.type))return null;switch(n.type){case`idle`:case`hold`:return{type:n.type};case`move`:case`attackMove`:return!Ei(n.x)||!Ei(n.z)?null:{type:n.type,x:n.x,z:n.z};case`attack`:{let t=ki(e,n.target);return t?{type:`attack`,target:t}:null}case`pickup`:{let t=Ai(e,n.target);return t?{type:`pickup`,rune:t}:null}case`pickupItem`:{let t=Number.isInteger(n.target)?bt(e,n.target):null;return t?{type:`pickupItem`,item:t}:null}case`drop`:{let e=ji(t,`item`,n.slot);return!e||!Ei(n.x)||!Ei(n.z)?null:{type:`drop`,item:e,x:n.x,z:n.z}}case`give`:{let r=ji(t,`item`,n.slot),i=ki(e,n.target);return r&&i?{type:`give`,item:r,target:i}:null}case`cast`:{let r=ji(t,n.src,n.slot);if(!r)return null;let i=null,a=null,o=null;if(r.target===`unit`){if(i=ki(e,n.target),!i)return null}else if(r.target===`point`){if(!Ei(n.x)||!Ei(n.z))return null;a=n.x,o=n.z}else{if(n.x!=null&&!Ei(n.x)||n.z!=null&&!Ei(n.z))return null;a=n.x??null,o=n.z??null}let s={type:`cast`,ab:r,target:i,x:a,z:o};if(n.after!==void 0){let r=Mi(e,t,n.after);if(!r)return null;s.after=r}return s}default:return null}}function Ni(e,t,n){try{if(!n||typeof n!=`object`||typeof n.type!=`string`)return`Invalid order`;switch(n.type){case`learn`:return Di(n.slot,t.abilities.length)?t.levelAbility(n.slot)?null:t.skillPoints>0?`Cannot level that yet`:`No skill points`:`Invalid order`;case`buy`:return typeof n.item==`string`?Kt(t,n.item):`Invalid order`;case`sell`:{let e=n.from??`items`;return e!==`items`&&e!==`stash`||!Di(n.slot,(e===`stash`?t.stash:t.items).length)?`Invalid order`:Ht(t,n.slot,e)}case`swap`:{let e=e=>e===`items`||e===`stash`;return!e(n.from)||!e(n.to)||!Di(n.slot,t[n.from]?.length??0)||!Di(n.toSlot,t[n.to]?.length??0)?`Invalid order`:nn(t,n.from,n.slot,n.to,n.toSlot)}case`courierShop`:{if(typeof n.shop!=`string`||!Array.isArray(n.items)||n.items.some(e=>typeof e!=`string`))return`Invalid order`;let e=t.kind===`hero`&&!t.illusion?t.ensureCourier?.():null;return e?e.addErrand(t,n.shop,n.items):`No courier`}case`courierDeliver`:{let e=t.kind===`hero`&&!t.illusion?t.ensureCourier?.():null;return e?e.deliverNow(t):`No courier`}case`buyback`:return t.buyback();case`toggle`:return!Di(n.slot,t.items?.length??0)||!t.toggleItem?`Invalid order`:t.toggleItem(n.slot);case`autocast`:return!Di(n.slot,t.abilities?.length??0)||typeof n.on!=`boolean`||!t.setAutocast?`Invalid order`:t.setAutocast(n.slot,n.on)}let r=Mi(e,t,n);if(!r)return`Invalid order`;switch(r.type){case`idle`:return t.stop(),null;case`attack`:{let e=r.target;return e.team===t.team?t.canDeny(e)?(t.issue(r),null):e!==t&&e.alive&&e.kind===`creep`&&t.canDenyAllies?`Can only deny below 50% HP`:e.alive&&e.kind===`tower`&&t.canDenyAllies&&!e.isInvulnerable()?`Can only deny towers below 10% HP`:`Cannot attack that`:t.validTarget(e)?(t.issue(r),null):e.isInvulnerable()?`Target is invulnerable`:`Cannot attack that`}case`cast`:return t.castAbility(r.ab,r.target,r.x,r.z);case`pickup`:return t.kind===`hero`?e.isPointVisible(t.team,r.rune.x,r.rune.z)?(t.issue(r),null):`Cannot see that`:`Invalid order`;case`pickupItem`:return t.kind!==`hero`&&!t.carriesItems?`Invalid order`:e.isPointVisible(t.team,r.item.x,r.item.z)?_t(t,r.item)||(t.issue(r),null):`Cannot see that`;case`drop`:return t.alive?r.item.def.undroppable?`Cannot drop that`:(t.issue(r),null):`Dead`;case`give`:return t.alive?Un(t,r.item,r.target)||(t.issue(r),null):`Dead`;default:return t.issue(r),null}}catch(e){return`Order failed: ${e?.message??e}`}}function Pi(e,t){return!e||!t?!1:t===e||t.owner===e&&!!t.controllable&&t.alive&&!t.removed}function Fi(e,t,n,r){try{if(n===t)return Ni(e,t,r);if(!Pi(t,n))return`Not your unit`;if(n.orderTypes){if(!r||typeof r!=`object`||!n.orderTypes.has(r.type))return`Invalid order`;let t=Ni(e,n,r);return!t&&r.type!==`toggle`&&r.type!==`autocast`&&st(n),t}if(!r||typeof r!=`object`||!Ti.has(r.type)||r.type===`cast`&&r.src!==`ability`)return`Invalid order`;if((r.type===`move`||r.type===`attackMove`)&&n.immobile)return`Cannot move`;let i=Mi(e,n,r);if(!i)return`Invalid order`;i.type===`cast`&&i.after&&delete i.after;let a=null;switch(i.type){case`idle`:n.stop();break;case`attack`:!n.validTarget(i.target)||!(n.attackRate>0)?a=i.target.isInvulnerable()?`Target is invulnerable`:`Cannot attack that`:n.issue(i);break;case`cast`:a=n.castAbility?n.castAbility(i.ab,i.target,i.x,i.z):`Cannot do that`;break;default:n.issue(i)}return a||st(n),a}catch(e){return`Order failed: ${e?.message??e}`}}function Ii(e,t,n,r){if(!Array.isArray(n)||!n.length||n.length>32)return`Invalid order`;let i=null,a=!1,o=new Set;for(let s of n){if(!Number.isInteger(s)||o.has(s))continue;o.add(s);let n=s===t?.id?t:e.byId.get(s),c=n?Fi(e,t,n,r):`Not your unit`;c?i===null&&(i=c):a=!0}return a?null:i??`No units`}function Li(e){if(!e.alive)return 0;let t=e.avgDamage()/e.getAttackInterval(),n=0;for(let t=0;t<4&&t<e.abilities.length;t++){let r=e.abilities[t];r.level>0&&!r.isPassive&&r.cd<=0&&r.manaCost<=e.mana&&n++}return e.hp*(1+e.getArmor()*.04)*.01*(t+n*25+e.level*4)}function Ri(e){let t=e.clones;return t?.length?t.filter(e=>e.kind===`hero`):null}function zi(e,t){let n=e.world,r=r=>r.team!==e.team&&r.alive&&!r.isInvulnerable()&&n.isVisible(e.team,r)&&r.dist(e)<=t,i=n.heroes.filter(r),a=Ri(n);if(a)for(let e of a)r(e)&&i.push(e);return i}function Bi(e,t){let n=n=>n.team===e.team&&n.alive&&n.dist(e)<=t,r=e.world.heroes.filter(n),i=Ri(e.world);if(i)for(let e of i)n(e)&&r.push(e);return r}function Vi(e,t){let n=e.world;return n.unitsInRadius(e.x,e.z,t,t=>t.kind===`creep`&&t.team!==e.team&&n.isVisible(e.team,t))}function Hi(e,t){return e.world.unitsInRadius(e.x,e.z,t,t=>t.kind===`creep`&&t.team===e.team)}function Ui(e,t,n,r=1){return e.world.towers.filter(i=>i.alive&&i.team!==e.team&&U(i.x-t,i.z-n)<=i.getRange()+i.radius+e.radius+r)}var Wi=.5;function Gi(e,t){let n=e.hp/e.maxHp>Wi,r=null,i=-1/0;for(let a of t){let t=-a.hp/a.maxHp*100-a.dist(e)*2-a.hp*.02;n&&Ki(a)&&a.dist(e)<=14&&(t+=20),qi(a)&&(t-=20),t>i&&(i=t,r=a)}return r}function Ki(e){return!!e.isRanged&&e.def?.positions?.[0]===1}function qi(e){return!!e.abilities?.some(e=>e.level>0&&e.def.aiPunishesAttacks)}function Ji(e,t){return e.world.unitsInRadius(e.x,e.z,t,t=>(t.kind===`neutral`||t.kind===`boss`)&&t.order.type===`attack`&&t.order.target===e).sort((t,n)=>t.dist(e)-n.dist(e)||t.id-n.id)}var Yi=10,Xi=8,Zi={laning:0,group:2,push:2,boss:3,defend:4},Qi=30,$i=90,ea=60,ta=45,na=60,ra=110,ia=3,aa={lane:0,jungle:1,ward:2,guard:3,gank:3,group:4,keeper:4,push:4.5,leave:5,boss:5,defend:6},oa=e=>e.kind===`ancient`?10:e.kind===`barracks`?7:{4:8,3:6,2:4,1:2}[e.tier]??2,sa=e=>e.kind===`ancient`||e.kind===`barracks`||e.kind===`tower`&&e.tier>=3,ca={};for(let e of qe){let t=pr[e],n=[0];for(let e=1;e<t.length;e++)n.push(n[e-1]+U(t[e].x-t[e-1].x,t[e].z-t[e-1].z));ca[e]={pts:t,cum:n,total:n[n.length-1]}}function la(e,t,n,r){let{pts:i,cum:a,total:o}=ca[t],s=1/0,c=0;for(let e=1;e<i.length;e++){let t=i[e-1],o=i[e],l=o.x-t.x,u=o.z-t.z,d=l*l+u*u,f=d?Math.max(0,Math.min(1,((n-t.x)*l+(r-t.z)*u)/d)):0,p=U(n-(t.x+l*f),r-(t.z+u*f));p<s&&(s=p,c=a[e-1]+Math.sqrt(d)*f)}let l=c/o;return{frac:e===0?l:1-l,dist:s}}function ua(e,t=0){return e.avgDamage()/e.getAttackInterval()*Fe(t)}function da(e){return e.alive?Li(e)*(e.maxHp/Math.max(1,e.hp)):0}function fa(e){let t=$e(e.def,e.level),n=t.dmg*e.def.aspd*(1+t.ias);return t.hp*(1+t.armor*.04)*.01*(n+Math.min(3,Math.ceil(e.level/2))*25+e.level*4)}function pa(e,t){let n=0,r=0,i=0,a=0,o=Fe(e.getArmor());for(let e of t.units)e.alive&&!e.removed&&(n+=e.hp,r+=e.getArmor(),i++,a+=e.avgDamage()*e.attackRate*o);if(!i)return{ehp:0,ttk:0,dmgTaken:0};let s=Math.max(1,ua(e,r/i)),c=n/s;return{ehp:n,ttk:c,dmgTaken:.6*a*c}}var ma={small:3,medium:5,large:7},ha=Object.freeze({group:!0,defend:!0,jungle:!0,gank:!0,boss:!0,wards:!0,focus:!0,courier:!0}),ga=class{constructor(e,t,n,{startAt:r=.5,features:i=ha}={}){this.world=e,this.features={...ha,...i},this.team=t,this.profile=n,this.nextAt=r,this.members=[],this.mode=`laning`,this.modeSince=0,this.pending=null,this.lastSeen=new Map,this.laneState={},this.threats=[],this.threatsAt=-1/0,this.tasks=new Map,this.campClaims=new Map,this.campAvoid=new Map,this.boss={phase:null,rally:null,startedAt:0,lastHp:0,lastHpAt:0,cooldownUntil:0,aegisOnly:!1,carryId:null},this.bossDeadAt=null,this.group=null,this.groupCdUntil=0,this.gankCd=new Map,this.gankerCd=new Map,this.focusTarget=null;for(let e of qe)this.laneState[e]=this.emptyLane()}emptyLane(){return{ownFront:null,enemyFront:null,ownTower:null,enemyTower:null,ownCreeps:0,enemyCreeps:0,ownBest:-1/0,enemyBest:-1/0}}addMember(e){this.members.push(e)}removeMember(e){let t=this.members.indexOf(e);t>=0&&this.members.splice(t,1),this.tasks.delete(e.id);for(let[t,n]of[...this.campClaims])n===e.id&&this.campClaims.delete(t);this.gankerCd.delete(e.id),this.boss.carryId===e.id&&(this.boss.carryId=null)}taskFor(e){return this.tasks.get(e.id)??null}update(){this.world.time+1e-9<this.nextAt||(this.nextAt+=this.profile.teamTick,this.cycle())}cycle(){this.updateMemory(),this.computeLaneState(),this.computeThreats(),this.updateFocus(),this.decideMode(),this.assignTasks()}enemies(){return this.world.heroes.filter(e=>e.team!==this.team&&e.team<=1)}visible(e){return e.alive&&!e.removed&&this.world.isVisible(this.team,e)}updateMemory(){let e=this.world;for(let t of this.enemies())this.visible(t)&&this.lastSeen.set(t.id,{x:t.x,z:t.z,t:e.time,level:t.level,power:da(t)});let t=e.jungle;if(t?.bossPit){let n=t.boss;n&&n.alive&&this.visible(n)?this.bossDeadAt=null:!n&&this.bossDeadAt===null&&(t.bossKills>0||e.isPointVisible(this.team,t.bossPit.x,t.bossPit.z))&&(this.bossDeadAt=e.time)}}estPower(e){if(!e.alive)return 0;if(this.visible(e))return da(e);let t=this.lastSeen.get(e.id);return Math.max(t?t.power:0,fa(e))}ownPower(){return this.world.heroes.filter(e=>e.team===this.team).reduce((e,t)=>e+da(t),0)}enemyPower(){return this.enemies().reduce((e,t)=>e+this.estPower(t),0)}bossKnownAlive(){let e=this.world.jungle;return e?.bossPit?this.bossDeadAt===null?!!e.boss||e.bossKills===0:this.world.time>=this.bossDeadAt+660:!1}computeLaneState(){let e=this.world,t=this.team,n=this.laneState;for(let e of qe)n[e]=this.emptyLane();for(let r of e.units){if(r.kind!==`creep`||!r.alive||r.removed)continue;let i=n[r.lane];if(i){if(r.team===t){i.ownCreeps++;let e=r.progress();e>i.ownBest&&(i.ownBest=e,i.ownFront=r)}else if(e.isVisible(t,r)){i.enemyCreeps++;let e=r.progress();e>i.enemyBest&&(i.enemyBest=e,i.enemyFront=r)}}}for(let r of e.towers??[]){if(r.kind!==`tower`||!r.alive||!n[r.lane])continue;let e=n[r.lane];r.team===t?(!e.ownTower||r.tier<e.ownTower.tier)&&(e.ownTower=r):(!e.enemyTower||r.tier<e.enemyTower.tier)&&(e.enemyTower=r)}}ownBuildings(){let e=this.world,t=this.team,n=[];for(let r of e.towers??[])r.kind===`tower`&&r.team===t&&n.push(r);for(let r of e.spawner?.barracks??[])r.team===t&&n.push(r.unit);return e.ancients?.[t]&&n.push(e.ancients[t]),n}computeThreats(){let e=this.world,t=this.team;this.threatsAt=e.time;let n=[],r=[];for(let i of this.ownBuildings()){if(!i.alive||i.removed||!(i.lastDamagedTime>=e.time-3))continue;let a=[],o=0;r.length=0,e.queryInto(i.x,i.z,20,r);for(let n of r){if(n.team===t||n.team>1||!e.isVisible(t,n))continue;let r=n.dist(i);n.kind===`hero`?r<=20&&!n.isInvulnerable()&&a.push(n):(n.kind===`creep`||n.kind===`summon`)&&r<=14&&o++}let s=oa(i)+2*a.length+Math.floor(o/4);n.push({building:i,score:s,attackers:{heroes:a,creeps:o}})}return n.sort((e,t)=>t.score-e.score||e.building.id-t.building.id),this.threats=n,n}buybackThreat(){this.threatsAt<this.world.time-this.profile.teamTick-1e-9&&this.computeThreats();for(let e of this.threats){let t=e.building;if((t.kind===`barracks`||t.kind===`ancient`||t.kind===`tower`&&t.tier===4)&&(t.hp<t.maxHp*.5||e.attackers.heroes.length))return t}return null}updateFocus(){if(this.focusTarget=null,!this.profile.focusFire||!this.features.focus)return;let e=null,t=1,n=1/0,r=this.world.heroes.filter(e=>e.team===this.team&&e.alive);for(let i of this.enemies()){if(!this.visible(i)||i.isInvulnerable())continue;let a=r.filter(e=>e.dist(i)<=15).length,o=i.hp/i.maxHp;(a>t||a===t&&a>=2&&o<n)&&(e=i,t=a,n=o)}this.focusTarget=t>=2?e:null}alive(){return this.members.filter(e=>e.alive)}available(e){return e.alive&&!e.brain?.retreating}eta(e,t,n){return e.distXZ(t,n)/Math.max(1,e.getMoveSpeed())}setMode(e){if(e===this.mode)return;let t=this.mode;this.mode=e,this.modeSince=this.world.time,this.pending=null,this.world.emit({type:`teamMode`,team:this.team,mode:e,prev:t})}decideMode(){let e=this.world,{mode:t,immediate:n}=this.desiredMode();if(t===this.mode){this.pending=null;return}if(n||this.mode===`group`&&t===`push`||this.mode===`push`&&t===`group`){this.enterMode(t);return}this.pending&&this.pending.mode===t?this.pending.count++:this.pending={mode:t,count:1};let r=Zi[t]>Zi[this.mode];this.pending.count>=2&&(r||e.time-this.modeSince>=Yi)&&this.enterMode(t)}enterMode(e){let t=this.mode===`group`||this.mode===`push`,n=e===`group`||e===`push`;this.mode===`boss`&&e!==`boss`&&this.endBoss(!!this.world.jungle?.boss?.alive),t&&!n&&(this.group=null),e===`boss`&&this.mode!==`boss`&&this.startBoss(),n&&!this.group&&this.startGroup(),this.setMode(e)}desiredMode(){let e=this.features;return e.defend&&this.threats.find(e=>sa(e.building)&&e.attackers.heroes.length>0)?{mode:`defend`,immediate:!0}:this.mode===`boss`?this.bossAbortReason()?(this.endBoss(!0),{mode:e.group&&this.groupTriggered()?`group`:`laning`,immediate:!0}):{mode:`boss`,immediate:!1}:e.defend&&this.outerDefenders().length?{mode:`defend`,immediate:!1}:e.boss&&this.bossStartOk()?{mode:`boss`,immediate:!1}:this.mode===`group`||this.mode===`push`?this.groupAbortReason()?(this.groupCdUntil=this.world.time+Qi,this.group=null,{mode:`laning`,immediate:!0}):{mode:this.groupPhaseMode(),immediate:!1}:e.group&&this.groupTriggered()?{mode:`group`,immediate:!1}:{mode:`laning`,immediate:!1}}respondersFor(e,t){let n=e.building,r=e.attackers.heroes;if(sa(n)&&r.length>=2)return this.alive().filter(e=>!t.has(e.id));let i=this.alive().filter(e=>!t.has(e.id)&&this.available(e)&&e.hp>e.maxHp*.4&&this.eta(e,n.x,n.z)<=25).sort((e,t)=>this.eta(e,n.x,n.z)-this.eta(t,n.x,n.z)||e.id-t.id),a=r.length?r.length+1:Math.min(2,Math.max(1,Math.ceil(e.attackers.creeps/4))),o=i.slice(0,a);return r.length&&!sa(n)&&o.reduce((e,t)=>e+Li(t),0)<.7*r.reduce((e,t)=>e+Li(t),0)?[]:o}outerDefenders(){let e=[],t=new Set;for(let n of this.threats)if(n.attackers.heroes.length&&!sa(n.building))for(let r of this.respondersFor(n,t))t.add(r.id),e.push(r);return e}groupTriggered(){let e=this.world,t=this.profile;return e.time<this.groupCdUntil||this.alive().filter(e=>this.available(e)).length<3||this.groupWeak()?!1:e.time>=t.groupTime||qe.filter(t=>!e.towers.some(e=>e.kind===`tower`&&e.team!==this.team&&e.lane===t&&e.tier===1&&e.alive)).length>=2&&this.ownPower()>=1.1*this.enemyPower()||this.world.heroes.some(e=>e.team===this.team&&e.alive&&e.buffs.some(e=>e.id===`aegis`))?!0:this.enemies().filter(e=>!e.alive&&e.respawnTimer>15).length>=2}enemyBarracksDown(){return(this.world.spawner?.barracks??[]).some(e=>e.team!==this.team&&!e.unit.alive)}laneTarget(e){let t=this.world,n=this.laneState[e].enemyTower;if(n)return n;let r=(t.spawner?.barracks??[]).find(t=>t.team!==this.team&&t.lane===e&&t.unit.alive);return r?r.unit:(t.towers??[]).filter(e=>e.kind===`tower`&&e.team!==this.team&&e.tier===4&&e.alive).sort((e,t)=>e.id-t.id)[0]??t.ancients?.[1-this.team]??null}closing(){return qe.some(e=>this.laneStage(e)>=ia)}laneStage(e){let t=this.laneState[e].enemyTower;return t?t.tier:(this.world.spawner?.barracks??[]).find(t=>t.team!==this.team&&t.lane===e&&t.unit.alive)?3.5:4}pickGroupLane(e=null){let t=null,n=null;for(let e of qe){let r=this.laneStage(e),i=this.laneState[e].enemyTower,a=[r,i?-i.hp/i.maxHp:0];(!n||a[0]>n[0]||a[0]===n[0]&&a[1]>n[1])&&(t=e,n=a)}if(n&&n[0]>=ia)return e&&this.laneStage(e)>=ia?e:t;let r=null,i=null;for(let e of qe){let t=this.laneState[e],n=t.enemyTower,a=[n?n.tier:4,n?n.hp/n.maxHp:1,-(t.ownBest===-1/0?-1e9:t.ownBest)];(!i||a[0]<i[0]||a[0]===i[0]&&(a[1]<i[1]||a[1]===i[1]&&a[2]<i[2]))&&(r=e,i=a)}if(e&&r!==e){let t=this.laneState[e].enemyTower;if((t?t.tier:4)<=i[0]+1)return e}return r??`mid`}startGroup(){let e=this.world,t=this.pickGroupLane(),n=this.laneTarget(t);this.group={lane:t,targetId:n?n.id:null,phase:`assemble`,since:e.time,assembleStart:e.time,deathsAtStart:this.members.reduce((e,t)=>e+t.deaths,0)};let r=this.assemblePoint(t);this.group.x=r.x,this.group.z=r.z}pickKeeper(){if(!this.group||this.enemyBarracksDown())return null;let e=this.world,t=this.alive().filter(e=>this.available(e));if(t.length<4)return null;let n=qe.filter(e=>e!==this.group.lane),r=null,i=-1/0;for(let e of n){let t=this.laneState[e];t.enemyFront&&t.enemyBest>i&&(i=t.enemyBest,r=e)}if(!r){let e=1/0;for(let t of n){let n=this.laneState[t],i=n.ownBest===-1/0?-1e9:n.ownBest;i<e&&(e=i,r=t)}}let a=null;if(e.time<1500&&(a=t.find(e=>e.position===1)??null),!a){let e=this.laneState[r].enemyFront??this.laneState[r].ownTower;a=e?t.slice().sort((t,n)=>t.dist(e)-n.dist(e)||t.id-n.id)[0]:t[0]}return{hero:a,lane:r}}groupMembers(e){return this.alive().filter(t=>!e||t!==e.hero)}assemblePoint(e){let t=this.laneState[e],n=Vt[this.team],r=t.ownFront&&t.ownFront.alive?t.ownFront:null,i=r??t.ownTower??this.world.ancients?.[this.team]??n,a=Math.max(1,U(n.x-i.x,n.z-i.z)),o=r?6:-4;return{x:i.x+(n.x-i.x)/a*o,z:i.z+(n.z-i.z)/a*o}}groupPhaseMode(){let e=this.group;if(!e)return`group`;let t=this.world,n=e.targetId==null?null:t.byId.get(e.targetId);if(e.targetId!=null&&(!n||!n.alive)){let n=this.pickGroupLane(e.lane),r=this.laneTarget(n);n!==e.lane&&(e.phase=`assemble`,e.assembleStart=t.time),e.lane=n,e.targetId=r?r.id:null}if(e.phase===`advance`&&n&&n.alive&&(e.tgtHp===void 0||n.hp<e.tgtHp-n.maxHp*.1?(e.tgtHp=n.hp,e.tgtHpAt=t.time):t.time-e.tgtHpAt>45&&(e.phase=`assemble`,e.assembleStart=t.time,e.tgtHp=void 0)),e.phase===`assemble`){let n=this.groupMembers(this.pickKeeper()).filter(e=>this.available(e)),r=this.assemblePoint(e.lane);e.x=r.x,e.z=r.z;let i=0,a=0;for(let e of n)i+=e.x,a+=e.z;n.length&&(i/=n.length,a/=n.length);let o=n.filter(e=>e.distXZ(i,a)<=14&&e.distXZ(r.x,r.z)<=20).length;(this.enemiesDownFor(20)>=2||o>=Math.max(3,n.length-1)||t.time-e.assembleStart>=20)&&(e.phase=`advance`,e.tgtHp=void 0)}return e.phase===`advance`?`push`:`group`}groupWeak(){if(this.ownPower()<.8*this.enemyPower())return`power`;let e=this.alive();return e.reduce((e,t)=>e+t.hp/t.maxHp,0)/Math.max(1,e.length)<.45?`hp`:null}enemiesDownFor(e){return this.enemies().filter(t=>!t.alive&&t.respawnTimer>e).length}groupAbortReason(){let e=this.group;return e?this.alive().filter(e=>this.available(e)).length<3?`few`:this.members.reduce((e,t)=>e+t.deaths,0)-e.deathsAtStart>=2?`losses`:this.groupWeak()||(e.phase===`advance`&&this.enemies().every(e=>e.alive)&&!this.laneState[e.lane].ownFront?`nowave`:null):`none`}bossPit(){return this.world.jungle?.bossPit??null}bossRally(){let e=this.bossPit(),t=Vt[this.team],n=U(t.x-e.x,t.z-e.z);return{x:e.x+(t.x-e.x)/n*12,z:e.z+(t.z-e.z)/n*12}}bossStartOk(){let e=this.world,t=this.profile,n=this.bossPit();if(!t.boss||!n||e.time<t.bossMinTime||e.time<this.boss.cooldownUntil||(this.mode===`group`||this.mode===`push`)&&(this.group?.phase===`advance`||this.closing())||!this.bossKnownAlive()||this.threats.some(e=>e.attackers.heroes.length||sa(e.building)))return!1;let r=this.alive().filter(e=>this.available(e)&&e.hp>e.maxHp*.6);if(r.length<4)return!1;let i=this.alive(),a=i.reduce((e,t)=>e+t.level,0)/i.length;if(a<t.bossMinAvgLevel)return!1;let o=e.jungle.boss,s=o&&this.visible(o)?o.hp:D(e.time),c=r.reduce((e,t)=>e+ua(t,18),0);if(s/Math.max(1,c)>45)return!1;let l=this.enemies(),u=l.filter(e=>!e.alive).length;if(u<3){let t=u;for(let r of l){if(!r.alive)continue;let i=this.lastSeen.get(r.id);i&&e.time-i.t<=10&&U(i.x-n.x,i.z-n.z)>50&&t++}if(t<l.length-1)return!1}let d=l.filter(e=>e.alive);return a>=(d.length?d.reduce((e,t)=>e+t.level,0)/d.length:0)-1}startBoss(){let e=this.world,t=this.boss;t.phase=`gather`,t.rally=this.bossRally(),t.startedAt=e.time,t.gatherStart=e.time,t.lastHp=1/0,t.lastHpAt=e.time,t.aegisOnly=!1,t.carryId=null}endBoss(e){let t=this.world,n=this.boss;if(!n.phase)return;e&&(n.cooldownUntil=t.time+$i),n.phase=null,n.aegisOnly=!1;let r=this.bossPit(),i=Vt[this.team],a=U(i.x-r.x,i.z-r.z),o={x:r.x+(i.x-r.x)/a*19,z:r.z+(i.z-r.z)/a*19};for(let e of this.alive())e.distXZ(r.x,r.z)>15||this.tasks.set(e.id,{kind:`leave`,prio:aa.leave,x:o.x,z:o.z,since:t.time,until:t.time+10,pit:r})}bossCarry(){let e=this.alive().filter(e=>this.available(e));return e.length?e.find(e=>e.position===1)??e.slice().sort((e,t)=>Fn(t)-Fn(e)||e.id-t.id)[0]:null}aegisOnly(e){let t=this.boss,n=t.carryId==null?null:this.world.byId.get(t.carryId);if(!n||!n.alive||!e)return!1;let r=this.bossPit(),i=this.alive().filter(e=>e.distXZ(r.x,r.z)<=20).reduce((t,n)=>t+ua(n,e.getArmor()),0),a=ua(n,e.getArmor());return e.hp<Math.max(3*a,Math.min(1.5*i,.8*6*a))}bossAbortReason(){let e=this.world,t=this.boss,n=this.bossPit(),r=e.jungle?.boss;if((!r||!r.alive)&&(t.phase===`attack`||e.isPointVisible(this.team,n.x,n.z)||!r))return this.endBoss(!1),`done`;if(e.time-t.startedAt>75)return`timeout`;if(this.threats.some(e=>sa(e.building)||e.attackers.heroes.length&&e.building.tier>=2))return`threat`;let i=this.enemies().filter(e=>this.visible(e)&&e.distXZ(n.x,n.z)<=30),a=this.alive().filter(e=>e.distXZ(n.x,n.z)<=30);if(i.length>=2&&a.reduce((e,t)=>e+Li(t),0)<i.reduce((e,t)=>e+Li(t),0))return`contested`;if(t.phase===`gather`){let n=this.alive().filter(e=>e.distXZ(t.rally.x,t.rally.z)<=10).length,i=Math.min(4,this.alive().filter(e=>this.available(e)).length);if(n>=i&&i>=3)t.phase=`attack`,t.lastHp=r?r.hp:1/0,t.lastHpAt=e.time;else if(e.time-t.gatherStart>25)return`gather-timeout`;return null}if(this.alive().filter(e=>e.distXZ(n.x,n.z)<=20).length<3)return`few`;if(r&&this.visible(r)){r.hp<t.lastHp-1&&(t.lastHp=r.hp,t.lastHpAt=e.time);let n=this.bossCarry();t.carryId=n?n.id:null,t.aegisOnly=this.aegisOnly(r)}return e.time-t.lastHpAt>15?`stalled`:null}gankEligible(e){let t=this.profile;if(t.gank===`none`||!this.available(e)||e.hp<e.maxHp*.6||(this.gankerCd.get(e.id)??-1/0)>this.world.time)return!1;let n=e.position;if(t.gank===`roamer`){if(n===4){if(e.level<3)return!1}else if(n===2){let t=e.abilities[3];if(e.level<6||!t||t.level===0||!t.isReady()||e.mana<t.manaCost)return!1}else return!1}else if(n!==2&&n!==3&&n!==4||e.level<3)return!1;let r=this.mainSpell(e);return!r||e.mana>=r.manaCost}mainSpell(e){let t=e.abilities[3];if(t&&t.level>0&&!t.isPassive)return t;for(let t of e.def.skillOrder??[0,1,2]){let n=e.abilities[t];if(n&&n.level>0&&!n.isPassive)return n}return null}enemyTowerNear(e,t,n){for(let r of this.world.towers??[])if(r.kind===`tower`&&r.alive&&r.team!==this.team&&U(r.x-e,r.z-t)<=r.getRange()+r.radius+n)return r;return null}gankLane(e){for(let t of qe){let n=la(this.team,t,e.x,e.z);if(n.dist<10&&n.frac<.5)return t}for(let t of this.world.towers??[])if(t.kind===`tower`&&t.alive&&t.team===this.team&&t.tier<=2&&t.dist(e)<=20)return t.lane;return null}gankTargetOk(e,t=!0){let n=this.world;if(!this.visible(e)||e.isInvulnerable()||t&&(e.hp>=e.maxHp*.75||(this.gankCd.get(e.id)??-1/0)>n.time||!this.gankLane(e)))return!1;let r=1/0;for(let t of n.towers??[])t.kind===`tower`&&t.alive&&t.team===e.team&&(r=Math.min(r,t.dist(e)));return r<=25?!1:!this.enemies().some(t=>t!==e&&this.visible(t)&&t.dist(e)<=18)}junglePos(e){let t=this.world,n=e.position;return n===1||n===3&&t.time>=480?`all`:(n===4||n===5)&&e.level>=6?`small`:null}laneEmpty(e){let t=this.world;for(let n of t.queryInto(e.x,e.z,40,[]))if(n.kind===`creep`&&n.team!==this.team&&n.team<=1&&t.isVisible(this.team,n)&&n.dist(e)<=40)return!1;return!0}campSafe(e,t){let n=this.world;if(this.enemyTowerNear(t.x,t.z,6))return!1;for(let e of this.lastSeen.values())if(n.time-e.t<=8&&U(e.x-t.x,e.z-t.z)<=25)return!1;return pa(e,t).dmgTaken<this.profile.jungleSafety*e.hp}campAlive(e){return e.units.some(e=>e.alive&&!e.removed)}pickCamp(e,t,n=null){let r=this.world,i=this.profile,a=null,o=na;for(let s of r.jungle?.camps??[]){if(s.side!==this.team&&!(r.time>=i.jungleEnemyTime&&r.isPointVisible(this.team,s.x,s.z))||(t===`small`||i.jungle===`small`)&&s.type!==`small`||e.level<ma[s.type]||!this.campAlive(s))continue;let c=this.campClaims.get(s.id);if(c!==void 0&&c!==e.id||n?.has(s.id)||(this.campAvoid.get(s.id)??-1/0)>r.time)continue;let l=e.distXZ(s.x,s.z);l>=o||this.campSafe(e,s)&&(a=s,o=l)}return a}wardNeeds(){let e=this.world,t=sn[this.team],n=e.units.filter(e=>e.kind===`ward`&&e.team===this.team&&e.alive&&e.wardType===`observer`),r=this.threats.some(e=>sa(e.building)),i=e.time<900,a=this.profile.boss&&e.time>=this.profile.bossMinTime-60&&this.bossKnownAlive(),o=[];return t.forEach((e,t)=>{if(n.some(t=>t.distXZ(e.x,e.z)<10))return;let s=e.tags,c=e.pri;if(s.includes(`boss`)){if(!a&&this.mode!==`boss`)return;c+=2}else if(s.includes(`highground`)){if(!r)return;c+=3}else if(i&&!s.includes(`early`))return;o.push({...e,pri:c,i:t})}),o.sort((e,t)=>t.pri-e.pri||e.i-t.i),o}wardSpotSafe(e,t){let n=this.world;if(e.hp<e.maxHp*.6||this.enemies().some(e=>this.visible(e)&&e.distXZ(t.x,t.z)<=20))return!1;for(let r of n.towers??[]){if(!r.alive||r.team===this.team)continue;let n=t.x-e.x,i=t.z-e.z,a=n*n+i*i,o=a?Math.max(0,Math.min(1,((r.x-e.x)*n+(r.z-e.z)*i)/a)):0;if(U(r.x-(e.x+n*o),r.z-(e.z+i*o))<=r.getRange()+r.radius+2)return!1}return!0}assignTasks(){let e=this.world.time,t=new Map,n=new Set,r=(e,r)=>{n.has(e.id)||(t.set(e.id,r),n.add(e.id))};for(let t of this.members){let n=this.tasks.get(t.id);(!t.alive||n&&(n.done||n.until!==void 0&&e>=n.until))&&this.endTask(t,n)}for(let e of this.alive()){let t=this.tasks.get(e.id);t&&t.kind===`leave`&&(e.distXZ(t.pit.x,t.pit.z)>15?t.done=!0:r(e,t))}for(let e of this.features.defend?this.threats:[]){let t=e.building,i=e.attackers.heroes.length;if((i||e.attackers.creeps)&&(this.mode!==`boss`||sa(t))){if(!i&&!sa(t)){if(this.mode===`group`||this.mode===`push`)continue;let e=this.alive().find(e=>!n.has(e.id)&&this.available(e)&&e.brain?.homeLane===t.lane);e||=this.alive().filter(e=>!n.has(e.id)&&this.available(e)&&this.eta(e,t.x,t.z)<=25).sort((e,n)=>this.eta(e,t.x,t.z)-this.eta(n,t.x,t.z)||e.id-n.id)[0],e&&r(e,{kind:`lane`,prio:aa.guard,lane:t.lane,guard:t.id});continue}for(let i of this.respondersFor(e,n))r(i,{kind:`defend`,prio:aa.defend,targetId:t.id,lane:t.lane??i.brain?.homeLane,x:t.x,z:t.z})}}if(this.mode===`boss`&&this.boss.phase){let e=this.boss;for(let t of this.alive())r(t,{kind:`boss`,prio:aa.boss,phase:e.phase,x:e.rally.x,z:e.rally.z})}if((this.mode===`group`||this.mode===`push`)&&this.group){let e=this.group,t=this.pickKeeper();t&&!n.has(t.hero.id)&&r(t.hero,{kind:`lane`,prio:aa.keeper,lane:t.lane,keeper:!0});for(let n of this.groupMembers(t))e.phase===`assemble`?r(n,{kind:`group`,prio:aa.group,lane:e.lane,x:e.x,z:e.z}):r(n,{kind:`lane`,prio:aa.push,lane:e.lane,aggressive:!0})}this.features.gank&&(this.mode===`laning`||this.mode===`defend`)&&this.assignGanks(r,n),this.features.wards&&this.assignWards(r,n),this.features.jungle&&(this.mode===`laning`||this.mode===`defend`)&&this.assignJungle(r,n);for(let n of this.members){if(!n.alive)continue;let r=t.get(n.id)??{kind:`lane`,prio:aa.lane,lane:n.brain?.homeLane??`mid`},i=this.tasks.get(n.id);if(i&&_a(i,r)){for(let e of[`x`,`z`,`phase`,`lane`])r[e]!==void 0&&(i[e]=r[e]);continue}i&&!i.done&&e-i.since<Xi&&r.prio<=i.prio&&this.stillValid(n,i)||(i&&this.endTask(n,i),r.since=e,this.tasks.set(n.id,r),r.kind===`jungle`&&this.campClaims.set(r.campId,n.id))}}stillValid(e,t){if(t.kind===`jungle`){let e=this.world.jungle?.camps.find(e=>e.id===t.campId);return!!e&&(this.campAlive(e)||t.phase===`leave`)}return t.kind===`gank`?!this.gankAbort(e,t):t.kind===`boss`?this.mode===`boss`:t.kind===`group`||t.aggressive||t.keeper?this.mode===`group`||this.mode===`push`:!0}endTask(e,t){if(!t){this.tasks.delete(e.id);return}let n=this.world;t.kind===`jungle`&&(this.campClaims.get(t.campId)===e.id&&this.campClaims.delete(t.campId),t.aborted&&this.campAvoid.set(t.campId,n.time+20)),t.kind===`gank`&&(this.gankCd.set(t.targetId,n.time+ea),this.gankerCd.set(e.id,n.time+ta)),this.tasks.delete(e.id)}gankAbort(e,t){let n=this.world,r=n.byId.get(t.targetId);if(!r||!r.alive)return`dead`;if(this.visible(r)&&(t.seenAt=n.time),n.time-(t.seenAt??t.since)>6)return`unseen`;if(this.visible(r)&&this.enemyTowerNear(r.x,r.z,2))return`tower`;if(n.time-t.since>30)return`timeout`;if(e.hp<e.maxHp*.4)return`hp`;let i=this.enemies().filter(e=>e!==r&&this.visible(e)&&e.dist(r)<=18);if(i.length){let t=this.world.heroes.filter(e=>e.team===this.team&&e.alive&&e.dist(r)<=25);if(t.reduce((e,t)=>e+Li(t),0)+Li(e)*+!t.includes(e)<[r,...i].reduce((e,t)=>e+Li(t),0))return`outnumbered`}return null}assignGanks(e,t){let n=this.world;for(let n of this.alive()){let r=this.tasks.get(n.id);if(r&&r.kind===`gank`&&!t.has(n.id)){if(this.gankAbort(n,r)){r.done=!0,this.endTask(n,r);continue}e(n,r),this.gankParty(e,t,r)}}if(this.profile.gank!==`none`)for(let r of this.enemies()){if(!this.gankTargetOk(r)||[...this.tasks.values()].some(e=>e.kind===`gank`&&e.targetId===r.id))continue;let i=this.gankLane(r),a=null,o=20;for(let e of this.alive()){if(t.has(e.id)||!this.gankEligible(e)||e.dist(r)<=25)continue;let n=this.eta(e,r.x,r.z);n<=o&&(o=n,a=e)}if(!a)continue;let s={kind:`gank`,prio:aa.gank,targetId:r.id,lane:i,seenAt:n.time};e(a,s),this.gankParty(e,t,s)}}gankParty(e,t,n){for(let r of this.alive())!t.has(r.id)&&this.available(r)&&r.brain?.homeLane===n.lane&&e(r,{kind:`lane`,prio:aa.lane+.5,lane:n.lane,gankTarget:n.targetId})}assignWards(e,t){let n=this.world,r=this.alive().filter(e=>!t.has(e.id)&&this.available(e)&&(e.position===5||e.position===4)&&e.items.some(e=>e&&e.def.id===`observer`)).sort((e,t)=>t.position-e.position||e.id-t.id);if(!r.length)return;let i=null,a=new Set([...this.tasks.values()].filter(e=>e.kind===`ward`&&!e.done).map(e=>e.spot));for(let t of r){let r=this.tasks.get(t.id);if(r&&r.kind===`ward`){if(!n.units.some(e=>e.kind===`ward`&&e.team===this.team&&e.alive&&e.distXZ(r.x,r.z)<10)&&this.wardSpotSafe(t,r)){e(t,r),a.add(r.spot);continue}r.done=!0;continue}i??=this.wardNeeds();let o=null;for(let e of i)if(!a.has(e.i)&&!(t.distXZ(e.x,e.z)>ra)&&this.wardSpotSafe(t,e)){o=e;break}o&&(a.add(o.i),e(t,{kind:`ward`,prio:aa.ward,x:o.x,z:o.z,spot:o.i,range:8}))}}assignJungle(e,t){let n=this.world;if(!n.jungle)return;let r=new Set;for(let i of this.alive()){if(t.has(i.id))continue;let a=this.tasks.get(i.id);if(a&&a.kind===`jungle`&&!a.done){let t=n.jungle.camps.find(e=>e.id===a.campId);if(t&&(this.campAlive(t)||a.phase===`leave`)){e(i,a),r.add(t.id);continue}a.done=!0,this.endTask(i,a)}if(!this.available(i)||i.hp<i.maxHp*.6)continue;let o=this.junglePos(i);if(!o||!this.laneEmpty(i))continue;let s=this.pickCamp(i,o,r);s&&(e(i,{kind:`jungle`,prio:aa.jungle,campId:s.id,phase:`approach`,x:s.x,z:s.z}),r.add(s.id))}}};function _a(e,t){if(e.kind!==t.kind)return!1;switch(e.kind){case`lane`:return e.lane===t.lane&&!!e.aggressive==!!t.aggressive&&!!e.keeper==!!t.keeper&&(e.guard??null)===(t.guard??null)&&(e.gankTarget??null)===(t.gankTarget??null);case`jungle`:return e.campId===t.campId;case`gank`:return e.targetId===t.targetId;case`defend`:return e.targetId===t.targetId;case`ward`:return e.spot===t.spot;case`group`:case`boss`:return!0;case`leave`:return e===t;default:return!1}}function va(e,t,n=.5){return Math.abs(e.x-t.x)<=4+n&&Math.abs(e.z-t.z)<=4+n}function ya(e){let t=e.abilities,n=t[3],r=t.slice(0,3).some(e=>e&&e.level>0);if(n&&n.canLevel()&&(r||!n.def.levelsAt))return 3;let i=e.def.skillOrder||[0,1,2];for(let e of i)if(t[e]&&t[e].level===0&&t[e].canLevel())return e;for(let e of i)if(t[e]&&t[e].canLevel())return e;return-1}var ba=18,xa=10,Sa=14,Ca=4,wa=10,Ta=24,Ea=8,Da=1,Oa=24,ka=20,Aa=25,ja=30,Ma=1e3,Na=.6,Pa=8,Fa=.6,Ia=120,La=25,Ra=18,za=10,Ba=new Set([`observer`,`sentry`,`dust`,`gem`,`smoke`,`aegis`]),Va=[{id:`scythe_of_vyse`,disable:!0},{id:`orchid_malevolence`,disable:!0},{id:`abyssal_blade`,disable:!0},{id:`ethereal_blade`},{id:`dagon`},{id:`euls_scepter`,disable:!0},{id:`heavens_halberd`,disable:!0},{id:`rod_of_atos`},{id:`medallion_of_courage`},{id:`solar_crest`},{id:`diffusal_blade`},{id:`urn_of_shadows`}],Ha=e=>e.mods.stunned||e.mods.hexed||e.mods.silenced||e.mods.cyclone,Ua=class{constructor(e,t,{profile:n=Dn.normal,team:r=null}={}){this.h=e,this.lane=t,this.homeLane=t,this.profile=n,this.team=r,this.timer=e.world.rng()*n.tickJitter,this.retreating=!1,this.buildIndex=0,this.deadTimer=0,this.defend=null,this.nextWardBuy=0,this.nextSentryBuy=0,this.nextSentryAt=0,this.escapeOk=!0,this.wantCast=[],this.lhSkip=null,this.aggressive=!1,this.snipe=null,this.shopTrip=null,this.nextShopAt=0,this.shopTripRetry=0}task(){return this.team?this.team.taskFor(this.h):null}updateDead(e){if(!this.profile.buyback||(this.deadTimer-=e,this.deadTimer>0))return;this.deadTimer=1;let t=this.h,n=t.world;if(n.time<1080||t.respawnTimer<12||t.buybackError())return;let r=this.team?this.team.buybackThreat():this.baseThreat(),i=!1;!r&&t.respawnTimer>=25&&t.gold>=t.buybackCost()*1.5&&(i=n.heroes.some(e=>e!==t&&e.alive&&e.team===t.team&&zi(e,18).length>=2)),(r||i)&&(Ni(n,t,{type:`buyback`})||(this.retreating=!1,r&&(this.defend={x:r.x,z:r.z,until:n.time+25})))}baseThreat(){let e=this.h,t=e.world;for(let n of t.units)if(n.team===e.team&&n.alive&&!n.removed&&(n.kind===`barracks`||n.kind===`ancient`||n.kind===`tower`&&n.tier===4)&&n.lastDamagedTime>=t.time-3&&(n.hp<n.maxHp*.5||zi(e,1/0).some(e=>e.dist(n)<=25)))return n;return null}update(e){if(this.timer-=e,this.timer>0)return;let t=this.profile;this.timer=t.tick;let r=this.h,i=r.world;if(this.levelSkills(),this.driveUnits(),r.channel&&!this.fleeChannel()||((i.time>=this.nextShopAt||this.shopTrip||n(r))&&(this.nextShopAt=i.time+Da,this.shop(),this.shopWards(),this.shopDust(),this.shopSentry()),r.order.type===`cast`)||this.tryDust())return;let a=this.task(),o=r.hp/r.maxHp;for(let e of r.summons??[])e.linked&&e.alive&&(o=Math.min(o,e.hp/e.maxHp));let s=zi(r,22),c=Bi(r,22),l=Vi(r,14);if(r.order.type===`pickupItem`&&r.order.item?.alive&&!s.some(e=>e.dist(r)<10))return;if(this.retreating){let e=o>.92&&(r.maxMana===0||r.mana/r.maxMana>.45);if((e||o>.75&&!s.length&&n(r))&&e&&(this.retreating=!1),this.retreating){if(this.useConsumables(s),this.tryEscapeItems(s),this.escapeOk&&this.tryEscape(s))return;this.goHome();return}}if(o<t.retreatHp||o<t.retreatOutnumberedHp&&s.length>c.length){if(this.retreating=!0,this.escapeOk=t.escapeChance>=1||i.rng()<t.escapeChance,this.useConsumables(s),this.tryEscapeItems(s),this.escapeOk&&this.tryEscape(s))return;this.goHome();return}if((r.order.type===`pickup`||r.order.type===`pickupItem`)&&!s.some(e=>e.dist(r)<12))return;let u=!1,d=null;if(s.length){let e=c.filter(e=>e.dist(r)<18).reduce((e,t)=>e+Li(t),0),n=s.filter(e=>e.dist(r)<20).reduce((e,t)=>e+Li(t),0);d=Gi(r,s);let i=t.focusFire?this.team?.focusTarget:null;i&&i!==d&&s.includes(i)&&i.dist(r)<=12&&(d=i);let l=a&&(a.kind===`gank`||a.kind===`defend`||a.kind===`group`||a.kind===`boss`||a.aggressive||a.gankTarget!==void 0)?.85:1,f=Ui(r,d.x,d.z,1),p=d.hp/d.maxHp<t.killableHp,m=f.every(e=>e.order.type===`attack`&&e.order.target&&e.order.target.kind===`creep`),h=p&&o>.55&&(m||c.length>=3);if(u=(e>=n*t.fightRatio*l||p&&o>.4)&&(!f.length||h),!u&&o>Na){let e=s.find(e=>Ki(e)&&e.dist(r)<14&&s.every(t=>t===e||t.dist(e)>Pa)&&!Ui(r,e.x,e.z,1).length);e&&(u=!0,d=e)}if(!u&&s.some(e=>e.dist(r)<10)){this.backOff();return}}if(!u){let e=a&&(a.kind===`jungle`||a.kind===`boss`)?[]:Ji(r,10);if(e.length){o>.5?(r.order.type!==`attack`||r.order.target!==e[0])&&r.issue({type:`attack`,target:e[0]}):this.backOff();return}if(!s.length&&(this.tryRune()||this.tryWard()||this.trySentry()||this.tryShopTrip())||this.tryClearTraps(s)||this.tryCourierSnipe(s))return}if(u&&this.tryClearTraps(s,!0))return;let f={target:d,enemyHeroes:s,allyHeroes:c,enemyCreeps:l,fighting:u};if(this.fightingAt=u?i.time:this.fightingAt,this.updateAutocast(f),!this.tryAbilities(f)&&!this.tryItems(f)){if(u&&d){(r.order.type!==`attack`||r.order.target!==d)&&r.issue({type:`attack`,target:d});return}this.executeTask(a,l)}}tryCourierSnipe(e){let t=this.h,n=t.world;if(!this.team?.features?.courier)return!1;let r=n.couriers?.[1-t.team],i=this.snipe;if(!i&&(!r||!r.alive||t.dist(r)>xa))return!1;let a=r&&r.alive&&t.validAttackTarget(r)&&!e.some(e=>e.dist(t)<=Sa);return i&&n.time<i.until&&a?((t.order.type!==`attack`||t.order.target!==r)&&t.issue({type:`attack`,target:r}),!0):i&&n.time<i.retryAt?(t.order.type===`attack`&&t.order.target===r&&t.stop(),!1):(this.snipe=null,!a||t.dist(r)>xa?!1:(this.snipe={id:r.id,until:n.time+Ca,retryAt:n.time+Ca+wa},t.issue({type:`attack`,target:r}),!0))}executeTask(e,t){if(this.aggressive=!1,!e){this.lane=this.homeLane,this.laneLogic(t);return}switch(e.kind){case`defend`:this.defendLogic(e,t);return;case`jungle`:this.jungleLogic(e,t);return;case`gank`:this.gankLogic(e,t);return;case`boss`:this.bossLogic(e,t);return;case`group`:if(this.lane=e.lane,this.h.distXZ(e.x,e.z)<=5&&this.farmNearby(t))return;this.goTo(e.x,e.z,3);return;case`leave`:this.goTo(e.x,e.z,1.5);return;default:this.lane=e.lane??this.homeLane,this.aggressive=!!e.aggressive,this.laneLogic(t)}}goTo(e,t,n=2){let r=this.h,i=r.order;r.distXZ(e,t)>n?(i.type!==`move`||U(i.x-e,i.z-t)>2)&&r.issue({type:`move`,x:e,z:t}):i.type===`move`&&r.issue({type:`idle`})}attackUnit(e){let t=this.h;(t.order.type!==`attack`||t.order.target!==e)&&t.issue({type:`attack`,target:e})}defendLogic(e,t){let n=this.h,r=n.world,i=r.byId.get(e.targetId);if(this.lane=e.lane??this.homeLane,!i||!i.alive){this.laneLogic(t);return}if(n.dist(i)>14){this.goTo(i.x,i.z,8);return}if(this.farmNearby(t))return;let a=null,o=1/0;for(let e of r.unitsInRadius(i.x,i.z,14,e=>e.kind===`creep`&&e.team!==n.team&&r.isVisible(n.team,e))){let t=e.dist(n);t<o&&(o=t,a=e)}if(a){this.attackUnit(a);return}this.goTo(i.x,i.z,7)}jungleLogic(e,t){let n=this.h,r=n.world,i=r.jungle?.camps.find(t=>t.id===e.campId);if(!i){e.done=!0,this.laneLogic(t);return}let a=Vt[n.team],o=Math.max(1,U(a.x-i.x,a.z-i.z)),s=(a.x-i.x)/o,c=(a.z-i.z)/o;if(e.phase===`leave`){if(n.distXZ(i.x,i.z)>18){e.done=!0,this.laneLogic(t);return}this.goTo(e.lx,e.lz,1);return}let l=i.units.filter(e=>e.alive&&!e.removed);if(!l.length){if(e.done=!0,va(n,i)&&r.time%60>=57){this.goTo(i.x+s*7,i.z+c*7,1);return}this.lane=this.homeLane,this.laneLogic(t);return}if(e.phase===`clear`){let t=pa(n,i);if(n.hp<n.maxHp*.35||t.dmgTaken>n.hp*.9){let t=null,a=1/0;for(let e of r.towers){if(e.kind!==`tower`||!e.alive||e.team!==n.team)continue;let r=U(e.x-i.x,e.z-i.z);r<a&&(a=r,t=e)}let o=t?{x:(t.x-i.x)/Math.max(1,a),z:(t.z-i.z)/Math.max(1,a)}:{x:s,z:c};e.phase=`leave`,e.aborted=!0,e.lx=i.x+o.x*21,e.lz=i.z+o.z*21,this.goTo(e.lx,e.lz,1);return}}if(e.phase===`approach`){if(n.distXZ(i.x,i.z)>7){this.goTo(i.x+s*3,i.z+c*3,1);return}e.phase=`clear`}let u=null;for(let e of l)U(e.x-i.x,e.z-i.z)>9||!n.validTarget(e)||(!u||e.hp<u.hp||e.hp===u.hp&&e.id<u.id)&&(u=e);if(!u){this.goTo(i.x,i.z,2);return}this.attackUnit(u)}gankLogic(e,t){let n=this.h,r=n.world,i=r.byId.get(e.targetId);if(!i||!i.alive){e.done=!0,this.laneLogic(t);return}if(r.isVisible(n.team,i)){if(n.dist(i)<=n.getRange()+4){this.attackUnit(i);return}this.goTo(i.x,i.z,1.5);return}let a=this.team.lastSeen.get(i.id);a?this.goTo(a.x,a.z,2):(e.done=!0,this.laneLogic(t))}bossLogic(e,t){let n=this.h,r=n.world,i=this.team.boss,a=r.jungle?.bossPit;if(!a||!i.phase){this.laneLogic(t);return}if(e.phase===`gather`||i.phase===`gather`){this.goTo(e.x,e.z,3);return}let o=r.jungle.boss,s=e.x-a.x,c=e.z-a.z,l=Math.max(1,U(s,c));if(i.carryId!==n.id&&(i.aegisOnly||o&&o.alive&&this.team.aegisOnly(o))){if(n.order.type===`attack`&&n.order.target===o&&n.issue({type:`idle`}),o&&o.alive&&o.order.target===n){let e=n.x-o.x,t=n.z-o.z,r=Math.max(.1,U(e,t));n.issue({type:`move`,x:n.x+e/r*6,z:n.z+t/r*6});return}this.goTo(a.x+s/l*8,a.z+c/l*8,1.5);return}if(o&&o.alive&&o.order.type===`attack`&&o.order.target===n&&n.hp<n.maxHp*.35){this.goTo(e.x,e.z,1.5);return}if(o&&o.alive&&r.isVisible(n.team,o)){this.attackUnit(o);return}let u=n.order;(u.type!==`attackMove`||u.x!==a.x||u.z!==a.z)&&n.issue({type:`attackMove`,x:a.x,z:a.z})}levelSkills(){let e=this.h,t=10;for(;e.skillPoints>0&&t-->0;){let t=ya(e);if(t<0)break;e.levelAbility(t)}}shop(){let e=this.h,t=e.def.build;for(let n=0;n<4&&this.buildIndex<t.length;n++){let n=Yn(e,t[this.buildIndex]);if(!n){this.makeRoom(t[this.buildIndex]);return}if(n.owned){this.buildIndex++;continue}if(n.remote){this.fetchRemote(xr[n.remote]);return}let r=xr[n.buy];if(this.sideShopFor(r))return;this.shopTrip=null;let i=!!r.components&&wn(e,r.id).used.some(t=>t.arr===e.items);if(Kn(e)<=0&&!(r.charges&&e.hasItem(r.id))&&!i){if(tr(e))return;let t=this.sellableSlot();if(t<0||e.items[t].def.cost>=r.cost){this.buildIndex++;return}Ht(e,t)}if(Kt(e,r.id))return}}makeRoom(e){let t=this.h,n=Kn(t);if(n>=2||!xr[e]?.components||tr(t))return;let{missing:r}=wn(t,e);if(n>=1&&r.length===1||!r.some(e=>xr[e].cost<=t.gold))return;let i=this.sellableSlot();i>=0&&Ht(t,i)}sideShopFor(e){let t=this.h,n=t.world;if(e.components||!t.alive||n.time<this.shopTripRetry||Zn(t,e).to!==`stash`)return!1;let r=null,i=Aa;for(let n of zn(e)){if(n.kind!==`side`)continue;let e=t.distXZ(n.x,n.z);e<i&&(i=e,r=n)}return r?((!this.shopTrip||this.shopTrip.shop!==r)&&(this.shopTrip={shop:r,until:n.time+ka}),!0):!1}fetchRemote(e){let t=this.h,n=t.world;if(!t.alive)return;let r=null,i=1/0;for(let n of zn(e)){if(n.kind===`base`)continue;let e=t.distXZ(n.x,n.z);e<i&&(i=e,r=n)}if(!r)return;if(i<=Oa){(!this.shopTrip||this.shopTrip.shop!==r)&&(this.shopTrip={shop:r,until:n.time+ka});return}this.shopTrip=null;let a=n.couriers?.[t.team];if(!a||!a.alive||a.errands?.some(e=>e.owner===t.id))return;let o=null,s=1/0;for(let t of zn(e)){if(t.kind===`base`)continue;let e=a.distXZ(t.x,t.z);e<s&&(s=e,o=t)}Ni(n,t,{type:`courierShop`,shop:o.id,items:[e.id]})}tryShopTrip(){let e=this.shopTrip,t=this.h;return e?t.world.time>e.until?(this.shopTrip=null,this.shopTripRetry=t.world.time+ja,!1):!un(t,e.shop)&&(this.goTo(e.shop.x,e.shop.z,2),!0):!1}sellableSlot(){let e=this.h,t=e.def.build,n=new Set;for(let e of t.slice(this.buildIndex))if(n.add(e),xr[e])for(let t of ct(xr[e]))n.add(t);let r=-1;return e.items.forEach((i,a)=>{let o=i?.def;!o||o.recipeFor||o.boots||n.has(o.id)||Ba.has(o.id)||o.cost>=Ma&&(o.components||t.includes(o.id))||(r<0||o.cost<e.items[r].def.cost)&&(r=a)}),r}tryAbilities(e){let t=this.h,n=this.profile,r=t.abilities.length;for(let i=0;i<r;i++){let r=i===0?3:i<=3?i-1:i,a=t.abilities[r];if(!a||!a.def.ai||!a.isReady()||t.mods.silenced||r>=4&&!a.shown)continue;let o=a.def.ai(t,a,e);if(!o){n.abilityDelay>0&&(this.wantCast[r]=void 0);continue}if(n.holdDisables&&a.def.disable){let t=o.target??e.target;if(t&&t.mods?.stunned)continue}if(n.abilityDelay>0){let e=this.wantCast[r];if(e===void 0){this.wantCast[r]=t.world.time;continue}if(t.world.time-e<n.abilityDelay)continue}if(n.abilityChance<1&&t.world.rng()>=n.abilityChance)continue;let s;if(a.target===`none`||a.isToggle)s=t.castAbility(a);else if(a.target===`unit`){if(!o.target||o.target.dist(t)>a.castRange+10)continue;s=t.castAbility(a,o.target)}else{if(t.distXZ(o.x,o.z)>a.castRange+10)continue;s=t.castAbility(a,null,o.x,o.z)}if(!s)return n.abilityDelay>0&&(this.wantCast[r]=void 0),!0}return!1}driveUnits(){let e=this.h,t=e.summons;if(!t?.length)return;let n=e.world,r=!this.retreating&&n.time-(this.fightingAt??-1/0)<=2;for(let n of t){if(!n.clone||!n.alive||n.removed||n.commanded||n.order.type===`cast`||n.channel||n.mods.stunned||n.mods.silenced||n.mods.hexed||n.mods.busy)continue;let t=zi(n,22),i={target:t.length?Gi(n,t):null,enemyHeroes:t,allyHeroes:Bi(n,22),enemyCreeps:Vi(n,14),fighting:r&&t.length>0,owner:e},a=n.abilities.length;for(let e=0;e<a;e++){let t=e===0?3:e<=3?e-1:e,r=n.abilities[t];if(!r||!r.def.ai||!r.isReady()||t>=4&&!r.shown||n.castCheck(r))continue;let a=r.def.ai(n,r,i);if(!a)continue;let o;if(r.target===`none`||r.isToggle)o=n.castAbility(r);else if(r.target===`unit`){if(!a.target||a.target.dist(n)>r.castRange+10)continue;o=n.castAbility(r,a.target)}else{if(n.distXZ(a.x,a.z)>r.castRange+10)continue;o=n.castAbility(r,null,a.x,a.z)}if(!o)break}}}updateAutocast(e){let t=this.h;for(let n of t.abilities){if(!n.def.autocast||n.level===0)continue;let r;if(n.def.autocastAi)r=!!n.def.autocastAi(t,n,e);else if(n.def.orb){let n=t.order;r=e.fighting||n.type===`attack`&&n.target?.kind===`hero`||t.maxMana>0&&t.mana/t.maxMana>Fa}else r=!0;n.auto=r}}fleeChannel(){let e=this.h,t=e.channel.ab.def;return t.mobility||t.active?.mobility||e.hp/e.maxHp>=this.profile.retreatHp?!1:zi(e,12).length>0}tryEscape(e){let t=this.h;if(t.mods.silenced||t.mods.stunned||t.mods.busy)return!1;for(let n of t.abilities){if(!n.def.escape||!n.isReady()||!n.shown||n.def.mobility&&t.mods.rooted)continue;let r=n.def.escape(t,n,{enemies:e});if(!r)continue;let i;if(i=n.target===`none`||n.isToggle?t.castAbility(n):n.target===`point`?t.castAbility(n,null,r.x,r.z):t.castAbility(n,r.target),!i)return n.target!==`none`&&!n.isToggle}return!1}tryDust(){let e=this.h,t=e.world,n=e.lastHitBy;if(!n||n.kind!==`hero`||n.team===e.team||!n.alive||!(e.lastDamagedTime>=t.time-.5)||t.isVisible(e.team,n)||n.dist(e)>10)return!1;let r=this.findItem(`dust`);return!r||!r.isReady()?!1:!e.castAbility(r)}findItem(e){return this.h.items.find(t=>t&&t.def.id===e)}readyItem(e){for(let t of this.h.items)if(t&&(t.def.id===e||t.def.levelOf===e)&&t.isReady())return t;return null}useItem(e,t=null){let n=this.h,r=this.readyItem(e);return!r||n.castCheck(r)?!1:r.target===`unit`?!t||t.dist(n)>r.castRange+4?!1:!n.castAbility(r,t):!n.castAbility(r)}tryEscapeItems(e){let t=this.h;if(t.mods.stunned||t.mods.busy)return;let n=t.hp/t.maxHp,r=this.readyItem(`magic_wand`)??this.readyItem(`magic_stick`);if(r&&n<.35&&r.charges>=3&&t.castAbility(r),e.some(e=>e.dist(t)<9)){if(t.moving&&!t.mods.rooted){let e=this.readyItem(`force_staff`);if(e&&!t.castCheck(e)){t.castAbility(e,t);return}}this.useItem(`phase_boots`)}}tryRune(){let e=this.h,t=e.world,n=null,r=ba;for(let i of t.runes){if(!i.alive)continue;let a=e.distXZ(i.x,i.z);a<r&&t.isPointVisible(e.team,i.x,i.z)&&(r=a,n=i)}return n?!Ui(e,n.x,n.z,2).length&&!Ni(t,e,{type:`pickup`,target:n.id}):this.tryGroundItem()}tryGroundItem(){let e=this.h,t=e.world,n=null,r=ba;for(let i of t.groundItems){let a=e.distXZ(i.x,i.z);a>=r||!t.isPointVisible(e.team,i.x,i.z)||_t(e,i)||t.heroes.some(t=>t!==e&&t.team===e.team&&t.order.type===`pickupItem`&&t.order.item===i)||(r=a,n=i)}return!n||Ui(e,n.x,n.z,2).length?!1:!Ni(t,e,{type:`pickupItem`,target:n.id})}shopWards(){let e=this.h;!(e.def.positions?.[0]>=4)||!n(e)||e.world.time<this.nextWardBuy||this.findItem(`observer`)||e.gold<250||Kn(e)<=0||Kt(e,`observer`)||(this.nextWardBuy=e.world.time+360/this.profile.wardRate)}shopDust(){let e=this.h;this.dustBought||!(e.def.positions?.[0]>=4)||!n(e)||e.gold<200||Kn(e)<=0||e.world.heroes.some(t=>t.team!==e.team&&t.def.tags?.includes(`invisible`))&&(Rt(e,`dust`)>0||!Kt(e,`dust`))&&(this.dustBought=!0)}shopSentry(){let e=this.h,t=e.world;!(e.def.positions?.[0]>=4)||!n(e)||t.time<this.nextSentryBuy||e.gold<250||Kn(e)<=0||t.heroes.some(t=>t.team!==e.team&&t.def.tags?.includes(`mines`))&&(Rt(e,`sentry`)>0||!Kt(e,`sentry`))&&(this.nextSentryBuy=t.time+Ia)}trySentry(){let e=this.h,t=e.world,n=this.findItem(`sentry`);return!n||!n.isReady()||t.time<this.nextSentryAt||e.distXZ(e.fountain.x,e.fountain.z)<40||!t.heroes.some(t=>t.team!==e.team&&t.def.tags?.includes(`mines`))||t.units.some(t=>t.kind===`ward`&&t.wardType===`sentry`&&t.team===e.team&&t.alive&&t.dist(e)<Ra)?!1:(this.nextSentryAt=t.time+La,!e.castAbility(n,null,e.x,e.z))}tryClearTraps(e,t=!1){let n=this.h,r=n.world;if(n.mods.disarmed)return!1;let i=r.unitsInRadius(n.x,n.z,za,e=>e.kind===`summon`&&e.team!==n.team&&e.tpl?.botTarget&&n.validTarget(e)).sort((e,t)=>e.dist(n)-t.dist(n)||e.id-t.id),a=i.find(e=>e.tpl.heroHits)??(t||e.some(e=>e.dist(n)<10)?null:i[0]);return a?((n.order.type!==`attack`||n.order.target!==a)&&n.issue({type:`attack`,target:a}),!0):!1}tryWard(){let e=this.h,t=e.world,n=this.findItem(`observer`);if(!n||!n.isReady())return!1;if(this.team){let t=this.task();return!t||t.kind!==`ward`||t.done?!1:e.distXZ(t.x,t.z)>9?(this.goTo(t.x,t.z,8),!0):(t.done=!0,!e.castAbility(n,null,t.x,t.z))}let r=null,i=Ta;for(let n of sn[e.team]){if(!n.tags.includes(`early`))continue;let a=e.distXZ(n.x,n.z);a>=i||t.units.some(t=>t.kind===`ward`&&t.team===e.team&&t.alive&&t.distXZ(n.x,n.z)<8)||(i=a,r=n)}return!!r&&!e.castAbility(n,null,r.x,r.z)}tryItems(e){let t=this.h;if(t.mods.stunned||t.mods.busy||t.mods.hexed)return!1;if(this.tryFightItems(e)||this.trySupportItems(e))return!0;let n=this.findItem(`kelens_dagger`);if(n&&n.isReady()&&e.fighting&&e.target&&!t.isRanged){let r=e.target.dist(t);if(r>7&&r<n.castRange+1)return!t.castAbility(n,null,e.target.x,e.target.z)}let r=this.findItem(`arcane_boots`);return r&&r.isReady()&&e.allyHeroes.filter(e=>e.dist(t)<12&&e.maxMana-e.mana>160).length>=2?!t.castAbility(r):!e.fighting&&this.tryMidas(e)?!0:(this.useConsumables(e.enemyHeroes),!1)}tryFightItems(e){let t=this.h,n=e.target;if(!e.fighting||!n||!n.alive)return!1;let r=n.dist(t),i=t.hp/t.maxHp,a=e.enemyHeroes.filter(e=>e.dist(t)<10).length,o=r<t.getRange()+3;if((a>=2||a>=1&&i<.6)&&!t.mods.magicImmune&&this.useItem(`black_king_bar`)||r<10&&this.useItem(`manta_style`)||r<14&&this.useItem(`necronomicon`)||o&&i>.5&&this.useItem(`mask_of_madness`)||o&&i<.5&&this.useItem(`satanic`)||o&&this.useItem(`ancient_janggo`)||r<4&&t.lastHitBy?.kind===`hero`&&this.useItem(`blade_mail`)||o&&this.useItem(`mjollnir`,t))return!0;let s=this.readyItem(`shivas_guard`);if(s&&e.enemyHeroes.some(e=>e.dist(t)<s.radius-1)&&this.useItem(`shivas_guard`))return!0;for(let{id:e,disable:t}of Va)if(!(t&&Ha(n))&&this.useItem(e,n))return!0;return!1}trySupportItems(e){let t=this.h,n=e.allyHeroes.filter(e=>e.dist(t)<12),r=n.filter(e=>e.maxHp-e.hp>250&&e.hp/e.maxHp<.6).length;if((r>=2||r>=1&&t.hp/t.maxHp<.4)&&(this.useItem(`guardian_greaves`)||this.useItem(`mekansm`)))return!0;if(!e.fighting||e.enemyHeroes.filter(e=>e.dist(t)<12).length===0)return!1;if(n.length>=2&&(this.useItem(`pipe_of_insight`)||this.useItem(`crimson_guard`)||this.useItem(`nathrezim_buckler`)))return!0;if(this.readyItem(`glimmer_cape`)){let e=t.hp/t.maxHp<.35?t:null;for(let t of n)t.hp/t.maxHp<.35&&!t.mods.invisible&&(!e||t.hp/t.maxHp<e.hp/e.maxHp)&&(e=t);if(e&&this.useItem(`glimmer_cape`,e))return!0}return!1}tryMidas(e){let t=this.readyItem(`hand_of_midas`);if(!t)return!1;let n=this.h,r=null;for(let i of e.enemyCreeps)i.alive&&i.dist(n)<t.castRange+3&&(!r||i.bountyXp>r.bountyXp||i.bountyXp===r.bountyXp&&i.id<r.id)&&(r=i);return!!r&&this.useItem(`hand_of_midas`,r)}useConsumables(e){let t=this.h;if(e.some(e=>e.dist(t)<12))return;let r=this.findItem(`salve`);r&&t.hp/t.maxHp<.55&&!t.buffs.some(e=>e.id===`salve`)&&!n(t)&&t.castAbility(r);let i=this.findItem(`clarity`);if(i&&t.maxMana&&t.mana/t.maxMana<.4&&!t.buffs.some(e=>e.id===`clarity`)&&!n(t)&&t.castAbility(i),n(t))return;let a=this.readyItem(`bottle`);a&&!a.def.active.check(t,a)&&!t.buffs.some(e=>e.id===`bottle_regen`)&&(t.hp/t.maxHp<.7||t.maxMana&&t.mana/t.maxMana<.5)&&t.castAbility(a);let o=this.readyItem(`tango`);if(o&&t.hp/t.maxHp<.6&&t.maxHp-t.hp>150&&!t.buffs.some(e=>e.id===`tango`)){let e=ze(t.world,t.x,t.z,Ea);e>=0&&t.castAbility(o,null,t.world.trees[e].x,t.world.trees[e].z)}}goHome(){let e=ar[this.h.team],t=this.h.order;(t.type!==`move`||U(t.x-e.x,t.z-e.z)>6)&&this.h.issue({type:`move`,x:e.x+(this.h.team===0?5:-5),z:e.z+(this.h.team===0?-5:5)})}rallyPoint(){let e=this.h,t=e.world.towers.filter(t=>t.team===e.team&&t.lane===this.lane&&t.alive);if(t.length){let n=t.reduce((e,t)=>e.tier<t.tier?e:t),r=Vt[1-e.team],i=U(r.x-n.x,r.z-n.z);return{x:n.x+(r.x-n.x)/i*4,z:n.z+(r.z-n.z)/i*4}}return Vt[e.team]}backOff(){let e=this.h,t=this.rallyPoint(),n=ar[e.team],r=e.distXZ(t.x,t.z)<6?n:t;e.issue({type:`move`,x:r.x,z:r.z})}laneLogic(e){let t=this.h,n=t.world;if(this.defend){let e=this.defend;if(n.time>e.until)this.defend=null;else if(t.distXZ(e.x,e.z)>10){let n=t.order;(n.type!==`attackMove`||n.x!==e.x||n.z!==e.z)&&t.issue({type:`attackMove`,x:e.x,z:e.z});return}}let r=this.aggressive&&t.hp>t.maxHp*.5&&Bi(t,14).length>=4;if(!r&&n.towers.some(e=>e.alive&&e.team!==t.team&&e.order.type===`attack`&&e.order.target===t)){this.backOff();return}if(this.farmNearby(e))return;let i=t.mods.invisible&&zi(t,20).length>0,a=e=>{(t.order.type!==`attack`||t.order.target!==e)&&t.issue({type:`attack`,target:e})};if(!i){let e=Hi(t,20),i=n.unitsInRadius(t.x,t.z,16,n=>n.isBuilding&&n.team!==t.team&&n.kind!==`fountain`&&!n.isInvulnerable()&&(e.length>=1&&Hi(n,11).length>=2||this.aggressive&&Bi(t,14).length>=3&&(r||n.kind!==`tower`||n.hp<n.maxHp*.25||n.order.type===`attack`&&n.order.target?.kind===`creep`)))[0];if(i){a(i);return}}let o=null,s=this.team?.laneState?.[this.lane];if(s&&(!s.ownFront||s.ownFront.alive))o=s.ownFront;else{let e=-1/0;for(let r of n.units){if(r.kind!==`creep`||r.team!==t.team||r.lane!==this.lane||!r.alive)continue;let n=r.progress();n>e&&(e=n,o=r)}}let c;if(o){let e=Vt[t.team],n=Math.max(1,o.distXZ(e.x,e.z));c={x:o.x+(e.x-o.x)/n*3.5,z:o.z+(e.z-o.z)/n*3.5},Ui(t,c.x,c.z,0).length&&Hi(o,8).length<2&&(c=this.rallyPoint())}else c=this.rallyPoint();let l=t.order;t.distXZ(c.x,c.z)>3&&(l.type!==`move`||U(l.x-c.x,l.z-c.z)>2)?t.issue({type:`move`,x:c.x,z:c.z}):t.distXZ(c.x,c.z)<=3&&l.type===`move`&&t.issue({type:`idle`})}farmNearby(e){let t=this.h,n=t.world,r=Hi(t,20),i=t.avgDamage(),a=t.mods.invisible&&zi(t,20).length>0,o=e=>{(t.order.type!==`attack`||t.order.target!==e)&&t.issue({type:`attack`,target:e})},s=this.profile;this.lhSkip&&(n.time>=this.lhSkip.until||!this.lhSkip.target.alive)&&(this.lhSkip=null);let c=this.lhSkip?.target,l=r.length&&!a?e.filter(e=>e!==c&&e.dist(t)<12&&this.safeToHit(e)):[],u=this.lastHitTarget(l,i);if(u&&s.lastHitMiss>0&&n.rng()<s.lastHitMiss&&(this.lhSkip={target:u,until:n.time+1},l.splice(l.indexOf(u),1),u=null),u)return o(u),!0;let d=a?null:this.denyTarget(r,i);return d&&s.denyChance<1&&n.rng()>=s.denyChance&&(d=null),d?(o(d),!0):l.length?(s.lastHitMiss>0?o(l.reduce((e,n)=>t.dist(n)<t.dist(e)?n:e)):o(l.sort((e,t)=>e.hp-t.hp)[0]),!0):!1}lastHitTarget(e,t){let n=this.profile,r=null;for(let i of e){let e=t*n.lastHitSlack;n.lastHitArmor&&(e*=Fe(i.getArmor()));let a=n.lastHitPredict?i.hp-this.incomingDamage(i):i.hp;a>0&&a<e&&(!r||i.hp<r.hp)&&(r=i)}return r}incomingDamage(e){let t=this.h,n=t.world,r=Fe(e.getArmor()),i=t.attackPoint+(t.projSpeed>0?t.dist(e)/t.projSpeed:0),a=0;for(let i of n.projectiles)i.alive&&!i.line&&i.target===e&&i.source!==t&&i.source.attackRate>0&&(a+=i.source.avgDamage()*r);let o=n.queryInto(e.x,e.z,14,[]);for(let n of o)n===t||n.team===e.team||n.attackRate<=0||n.order.type!==`attack`||n.order.target!==e||n.edgeDist(e)>n.getRange()+.5||(a+=n.avgDamage()*r/n.getAttackInterval()*i);return a}denyTarget(e,t){let n=this.h,r=null;for(let i of e)i.dist(n)>=12||!n.canDeny(i)||i.hp>=t*Fe(i.getArmor())*1.05||(!r||i.hp<r.hp)&&(r=i);return r||n.world.towers.find(e=>e.kind===`tower`&&e.team===n.team&&e.dist(n)<14&&n.canDeny(e))||null}safeToHit(e){return Ui(this.h,e.x,e.z,1.5).every(e=>e.order.type===`attack`&&e.order.target&&e.order.target.kind===`creep`)}};function Wa({seed:e=1,playerHeroId:t=null,humans:n=null,lineups:r=null,difficulty:i=`normal`,teamFeatures:a=null}={}){if(n)return Ga({seed:e,humans:n,difficulty:i,teamFeatures:a});let o=Ue(i),s=o.map(e=>ye(e)),c=new Dr({seed:e}),l=Br();Yr(c,l),Xr(c,l);let u=Fr({seed:e,playerHeroId:t});t=u.playerHeroId;let d=[0,1].map(e=>r?.[e]?Lr(r[e]):u.teams[e]);if(t&&!d[0].some(e=>e.id===t))throw Error(`Player hero ${t} is not in the Sentinel lineup`);let f=[0,1].map(e=>new ga(c,e,s[e],{startAt:.5,...a?{features:a}:{}}));c.controllers.push(...f),c.teamBrains=f;let p=null;for(let e of[0,1]){let n=d[e];if(e===0&&t){let e=n.find(e=>e.id===t);n=[e,...n.filter(t=>t!==e)]}n.forEach((n,r)=>{let i=Ie[n.id],a=c.add(new xi(i,e,r));a.position=n.pos;let o=Ar[e][n.pos]??`mid`;e===0&&r===0&&t?(a.isBot=!1,a.lane=o,p=a):(a.isBot=!0,a.brain=new Ua(a,o,{profile:s[e],team:f[e]}),f[e].addMember(a))})}return c.couriers=[0,1].map(e=>li(c,e)),c.fog.recompute(),{world:c,player:p,players:p?[p]:[],draft:{teams:d,playerHeroId:t,difficulty:{0:o[0],1:o[1]}}}}function Ga({seed:e,humans:t,difficulty:n,teamFeatures:r}){let i=Ue(n),a=i.map(e=>ye(e)),o=new Dr({seed:e}),s=Br();Yr(o,s),Xr(o,s);let c=Fr({seed:e,picks:t}).teams,l=new Set(t.map(e=>e.heroId)),u=[0,1].map(e=>new ga(o,e,a[e],{startAt:.5,...r?{features:r}:{}}));o.controllers.push(...u),o.teamBrains=u;let d=new Map;for(let e of[0,1])c[e].forEach((t,n)=>{let r=Ie[t.id],i=o.add(new xi(r,e,n));i.position=t.pos;let s=Ar[e][t.pos]??`mid`;i.lane=s,l.has(t.id)?(i.isBot=!1,d.set(t.id,i)):(i.isBot=!0,i.brain=new Ua(i,s,{profile:a[e],team:u[e]}),u[e].addMember(i))});o.couriers=[0,1].map(e=>li(o,e)),o.fog.recompute();let f=t.map(e=>d.get(e.heroId));return{world:o,player:f[0]??null,players:f,draft:{teams:c,playerHeroId:null,humans:t.map(e=>({team:e.team,heroId:e.heroId})),difficulty:{0:i[0],1:i[1]}}}}function Ka(e,{maxSeconds:t=1/0,onEvent:n=null,onTick:r=null}={}){for(;e.winner<0&&e.time<t;){if(r?.(e),e.step(Ce),n)for(let t of e.events)n(t,e);e.events.length=0}return e}function qa(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ja(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var K={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},q={common:{diffuse:{value:new W(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _},alphaMap:{value:null},alphaMapTransform:{value:new _},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _}},envmap:{envMap:{value:null},envMapRotation:{value:new _},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _},normalScale:{value:new On(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new W(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new W(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _},alphaTest:{value:0},uvTransform:{value:new _}},sprite:{diffuse:{value:new W(16777215)},opacity:{value:1},center:{value:new On(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _},alphaMap:{value:null},alphaMapTransform:{value:new _},alphaTest:{value:0}}},Ya={basic:{uniforms:je([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.fog]),vertexShader:K.meshbasic_vert,fragmentShader:K.meshbasic_frag},lambert:{uniforms:je([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new W(0)},envMapIntensity:{value:1}}]),vertexShader:K.meshlambert_vert,fragmentShader:K.meshlambert_frag},phong:{uniforms:je([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new W(0)},specular:{value:new W(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:K.meshphong_vert,fragmentShader:K.meshphong_frag},standard:{uniforms:je([q.common,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.roughnessmap,q.metalnessmap,q.fog,q.lights,{emissive:{value:new W(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag},toon:{uniforms:je([q.common,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.gradientmap,q.fog,q.lights,{emissive:{value:new W(0)}}]),vertexShader:K.meshtoon_vert,fragmentShader:K.meshtoon_frag},matcap:{uniforms:je([q.common,q.bumpmap,q.normalmap,q.displacementmap,q.fog,{matcap:{value:null}}]),vertexShader:K.meshmatcap_vert,fragmentShader:K.meshmatcap_frag},points:{uniforms:je([q.points,q.fog]),vertexShader:K.points_vert,fragmentShader:K.points_frag},dashed:{uniforms:je([q.common,q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:K.linedashed_vert,fragmentShader:K.linedashed_frag},depth:{uniforms:je([q.common,q.displacementmap]),vertexShader:K.depth_vert,fragmentShader:K.depth_frag},normal:{uniforms:je([q.common,q.bumpmap,q.normalmap,q.displacementmap,{opacity:{value:1}}]),vertexShader:K.meshnormal_vert,fragmentShader:K.meshnormal_frag},sprite:{uniforms:je([q.sprite,q.fog]),vertexShader:K.sprite_vert,fragmentShader:K.sprite_frag},background:{uniforms:{uvTransform:{value:new _},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:K.background_vert,fragmentShader:K.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _}},vertexShader:K.backgroundCube_vert,fragmentShader:K.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:K.cube_vert,fragmentShader:K.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:K.equirect_vert,fragmentShader:K.equirect_frag},distance:{uniforms:je([q.common,q.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:K.distance_vert,fragmentShader:K.distance_frag},shadow:{uniforms:je([q.lights,q.fog,{color:{value:new W(0)},opacity:{value:1}}]),vertexShader:K.shadow_vert,fragmentShader:K.shadow_frag}};Ya.physical={uniforms:je([Ya.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _},clearcoatNormalScale:{value:new On(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _},sheen:{value:0},sheenColor:{value:new W(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _},transmissionSamplerSize:{value:new On},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _},attenuationDistance:{value:0},attenuationColor:{value:new W(0)},specularColor:{value:new W(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _},anisotropyVector:{value:new On},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag};var Xa={r:0,b:0,g:0},Za=new dr,Qa=new _;Qa.set(-1,0,0,0,1,0,0,0,1);function $a(e,t,n,r,i,a){let o=new W(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new z(new Et(1,1,1),new he({name:`BackgroundCubeMaterial`,uniforms:mr(Ya.backgroundCube.uniforms),vertexShader:Ya.backgroundCube.vertexShader,fragmentShader:Ya.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Za.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Qa),l.material.toneMapped=Ze.getTransfer(i.colorSpace)!==dt,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new z(new lt(2,2),new he({name:`BackgroundMaterial`,uniforms:mr(Ya.background.uniforms),vertexShader:Ya.background.vertexShader,fragmentShader:Ya.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(i.colorSpace)!==dt,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Xa,w(e)),n.buffers.color.setClear(Xa.r,Xa.g,Xa.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function eo(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function to(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function no(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function c(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let u=n.precision===void 0?`highp`:n.precision,d=l(u);d!==u&&(s(`WebGLRenderer:`,u,`not supported, using`,d,`instead.`),u=d);let f=n.logarithmicDepthBuffer===!0,p=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&p===!1&&s(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_TEXTURE_SIZE),_=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),v=e.getParameter(e.MAX_VERTEX_ATTRIBS),y=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),b=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),S=e.getParameter(e.MAX_SAMPLES),C=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:c,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:x,maxSamples:S,samples:C}}function ro(e){let t=this,n=null,r=0,i=!1,a=!1,o=new f,s=new _,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var io=4,ao=6,oo=20,so=256,co=new Ge,lo=new W,uo=null,fo=0,po=0,mo=!1,ho=new H,go=new H,_o=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=ho}=i;uo=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),po=this._renderer.getActiveMipmapLevel(),mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Co(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(uo,fo,po),this._renderer.xr.enabled=mo,e.scissorTest=!1,bo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uo=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),po=this._renderer.getActiveMipmapLevel(),mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:mt,format:r,colorSpace:an,depthBuffer:!1},i=yo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yo(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=vo(r)),this._blurMaterial=So(r,e,t),this._ggxMaterial=xo(r,e,t)}return i}_compileMaterial(e){let t=new z(new gr,e);this._renderer.compile(t,co)}_sceneToCubeUV(e,t,n,r,i){let a=new Sr(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(lo),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new z(new Et,new T({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(lo),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;bo(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Co());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;bo(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,co)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-io?n-d+io:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,bo(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,co),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,bo(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,co)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];bo(t,3*l*(r>this._lodMax-io?r-this._lodMax+io:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,co)}};function vo(e){let t=[],n=[],r=e,i=e-io+1+ao;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?go.set(1,r,n):e===1?go.set(-n,1,-r):e===2?go.set(-n,r,1):e===3?go.set(-1,r,-n):e===4?go.set(-n,-1,r):go.set(n,r,-1),go.toArray(l,(e*6+t)*3)}}let u=new gr;u.setAttribute(`position`,new ir(c,3)),u.setAttribute(`outputDirection`,new ir(l,3)),n.push(new z(u,null)),r>io&&r--}return{lodMeshes:n,sizeLods:t}}function yo(e,t,n){let r=new _r(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function bo(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function xo(e,t,n){return new he({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:so,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:To(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function So(e,t,n){return new he({name:`SphericalGaussianBlur`,defines:{SAMPLES:oo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:To(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Co(){return new he({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function wo(){return new he({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function To(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Eo=class extends _r{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new vn(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Et(5,5,5),i=new he({name:`CubemapFromEquirect`,uniforms:mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new z(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Vn),new v(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Do(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Eo(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new _o(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new _o(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Oo(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&gn(`WebGLRenderer: `+e+` extension not supported.`),t}}}function ko(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?dn:qn)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Ao(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function jo(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:ur(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Mo(e,t,n){let r=new WeakMap,i=new rn;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Se(h,p,m,u);g.type=A,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new On(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function No(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Po={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Fo(e,t,n,r,i,a){let o=new _r(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new gr;l.setAttribute(`position`,new ut([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new ut([0,2,0,0,2,0],2));let u=new Te({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new z(l,u),f=new Ge(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new _r(t,n,{type:mt,depthBuffer:!1,stencilBuffer:!1}),c=new _r(t,n,{type:mt,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Ze.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Po[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Io=new Qn,Lo=new ce(1,1),Ro=new Se,zo=new pn,Bo=new vn,Vo=[],Ho=[],Uo=new Float32Array(16),Wo=new Float32Array(9),Go=new Float32Array(4);function Ko(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Vo[i];if(a===void 0&&(a=new Float32Array(i),Vo[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function qo(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Jo(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Yo(e,t){let n=Ho[t];n===void 0&&(n=new Int32Array(t),Ho[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Xo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Zo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qo(n,t))return;e.uniform2fv(this.addr,t),Jo(n,t)}}function Qo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(qo(n,t))return;e.uniform3fv(this.addr,t),Jo(n,t)}}function $o(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qo(n,t))return;e.uniform4fv(this.addr,t),Jo(n,t)}}function es(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(qo(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Jo(n,t)}else{if(qo(n,r))return;Go.set(r),e.uniformMatrix2fv(this.addr,!1,Go),Jo(n,r)}}function ts(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(qo(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Jo(n,t)}else{if(qo(n,r))return;Wo.set(r),e.uniformMatrix3fv(this.addr,!1,Wo),Jo(n,r)}}function ns(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(qo(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Jo(n,t)}else{if(qo(n,r))return;Uo.set(r),e.uniformMatrix4fv(this.addr,!1,Uo),Jo(n,r)}}function rs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function is(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qo(n,t))return;e.uniform2iv(this.addr,t),Jo(n,t)}}function as(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(qo(n,t))return;e.uniform3iv(this.addr,t),Jo(n,t)}}function os(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qo(n,t))return;e.uniform4iv(this.addr,t),Jo(n,t)}}function ss(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function cs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qo(n,t))return;e.uniform2uiv(this.addr,t),Jo(n,t)}}function ls(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(qo(n,t))return;e.uniform3uiv(this.addr,t),Jo(n,t)}}function us(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qo(n,t))return;e.uniform4uiv(this.addr,t),Jo(n,t)}}function ds(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Lo.compareFunction=n.isReversedDepthBuffer()?518:515,a=Lo):a=Io,n.setTexture2D(t||a,i)}function fs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||zo,i)}function ps(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Bo,i)}function ms(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Ro,i)}function hs(e){switch(e){case 5126:return Xo;case 35664:return Zo;case 35665:return Qo;case 35666:return $o;case 35674:return es;case 35675:return ts;case 35676:return ns;case 5124:case 35670:return rs;case 35667:case 35671:return is;case 35668:case 35672:return as;case 35669:case 35673:return os;case 5125:return ss;case 36294:return cs;case 36295:return ls;case 36296:return us;case 35678:case 36198:case 36298:case 36306:case 35682:return ds;case 35679:case 36299:case 36307:return fs;case 35680:case 36300:case 36308:case 36293:return ps;case 36289:case 36303:case 36311:case 36292:return ms}}function gs(e,t){e.uniform1fv(this.addr,t)}function _s(e,t){let n=Ko(t,this.size,2);e.uniform2fv(this.addr,n)}function vs(e,t){let n=Ko(t,this.size,3);e.uniform3fv(this.addr,n)}function ys(e,t){let n=Ko(t,this.size,4);e.uniform4fv(this.addr,n)}function bs(e,t){let n=Ko(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function xs(e,t){let n=Ko(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Ss(e,t){let n=Ko(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Cs(e,t){e.uniform1iv(this.addr,t)}function ws(e,t){e.uniform2iv(this.addr,t)}function Ts(e,t){e.uniform3iv(this.addr,t)}function Es(e,t){e.uniform4iv(this.addr,t)}function Ds(e,t){e.uniform1uiv(this.addr,t)}function Os(e,t){e.uniform2uiv(this.addr,t)}function ks(e,t){e.uniform3uiv(this.addr,t)}function As(e,t){e.uniform4uiv(this.addr,t)}function js(e,t,n){let r=this.cache,i=t.length,a=Yo(n,i);qo(r,a)||(e.uniform1iv(this.addr,a),Jo(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Lo:Io;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Ms(e,t,n){let r=this.cache,i=t.length,a=Yo(n,i);qo(r,a)||(e.uniform1iv(this.addr,a),Jo(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||zo,a[e])}function Ns(e,t,n){let r=this.cache,i=t.length,a=Yo(n,i);qo(r,a)||(e.uniform1iv(this.addr,a),Jo(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Bo,a[e])}function Ps(e,t,n){let r=this.cache,i=t.length,a=Yo(n,i);qo(r,a)||(e.uniform1iv(this.addr,a),Jo(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Ro,a[e])}function Fs(e){switch(e){case 5126:return gs;case 35664:return _s;case 35665:return vs;case 35666:return ys;case 35674:return bs;case 35675:return xs;case 35676:return Ss;case 5124:case 35670:return Cs;case 35667:case 35671:return ws;case 35668:case 35672:return Ts;case 35669:case 35673:return Es;case 5125:return Ds;case 36294:return Os;case 36295:return ks;case 36296:return As;case 35678:case 36198:case 36298:case 36306:case 35682:return js;case 35679:case 36299:case 36307:return Ms;case 35680:case 36300:case 36308:case 36293:return Ns;case 36289:case 36303:case 36311:case 36292:return Ps}}var Is=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hs(t.type)}},Ls=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fs(t.type)}},Rs=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},zs=/(\w+)(\])?(\[|\.)?/g;function Bs(e,t){e.seq.push(t),e.map[t.id]=t}function Vs(e,t,n){let r=e.name,i=r.length;for(zs.lastIndex=0;;){let a=zs.exec(r),o=zs.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Bs(n,l===void 0?new Is(s,e,t):new Ls(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Rs(s),Bs(n,e)),n=e}}}var Hs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Vs(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Us(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Ws=37297,Gs=0;function Ks(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var qs=new _;function Js(e){Ze._getMatrix(qs,Ze.workingColorSpace,e);let t=`mat3( ${qs.elements.map(e=>e.toFixed(4))} )`;switch(Ze.getTransfer(e)){case kt:return[t,`LinearTransferOETF`];case dt:return[t,`sRGBTransferOETF`];default:return s(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Ys(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ks(e.getShaderSource(t),r)}return i}function Xs(e,t){let n=Js(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Zs={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Qs(e,t){let n=Zs[t];return n===void 0?(s(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var $s=new H;function ec(){return Ze.getLuminanceCoefficients($s),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${$s.x.toFixed(4)}, ${$s.y.toFixed(4)}, ${$s.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function tc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(ic).join(`
`)}function nc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function rc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function ic(e){return e!==``}function ac(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function oc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var sc=/^[ \t]*#include +<([\w\d./]+)>/gm;function cc(e){return e.replace(sc,uc)}var lc=new Map;function uc(e,t){let n=K[t];if(n===void 0){let e=lc.get(t);if(e!==void 0)n=K[e],s(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return cc(n)}var dc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fc(e){return e.replace(dc,pc)}function pc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function mc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var hc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function gc(e){return hc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var _c={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function vc(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:_c[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var yc={302:`ENVMAP_MODE_REFRACTION`};function bc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:yc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var xc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Sc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:xc[e.combine]||`ENVMAP_BLENDING_NONE`}function Cc(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function wc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,c=n.fragmentShader,l=gc(n),u=vc(n),d=bc(n),f=Sc(n),p=Cc(n),m=tc(n),h=nc(a),g=i.createProgram(),_,v,y=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h].filter(ic).join(`
`),_.length>0&&(_+=`
`),v=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h].filter(ic).join(`
`),v.length>0&&(v+=`
`)):(_=[mc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+d:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+l:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(ic).join(`
`),v=[mc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMap?`#define `+f:``,p?`#define CUBEUV_TEXEL_WIDTH `+p.texelWidth:``,p?`#define CUBEUV_TEXEL_HEIGHT `+p.texelHeight:``,p?`#define CUBEUV_MAX_MIP `+p.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+l:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:K.tonemapping_pars_fragment,n.toneMapping===0?``:Qs(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,K.colorspace_pars_fragment,Xs(`linearToOutputTexel`,n.outputColorSpace),ec(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(ic).join(`
`)),o=cc(o),o=ac(o,n),o=oc(o,n),c=cc(c),c=ac(c,n),c=oc(c,n),o=fc(o),c=fc(c),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[m,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+_,v=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+v);let b=y+_+o,x=y+v+c,S=Us(i,i.VERTEX_SHADER,b),C=Us(i,i.FRAGMENT_SHADER,x);i.attachShader(g,S),i.attachShader(g,C),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,`position`):i.bindAttribLocation(g,0,n.index0AttributeName),i.linkProgram(g);function w(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(g)||``,r=i.getShaderInfoLog(S)||``,a=i.getShaderInfoLog(C)||``,o=n.trim(),c=r.trim(),l=a.trim(),u=!0,d=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1){if(u=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,g,S,C);else{let e=Ys(i,S,`vertex`),n=Ys(i,C,`fragment`);ur(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(c===``||l===``)&&(d=!1):s(`WebGLProgram: Program Info Log:`,o);d&&(t.diagnostics={runnable:u,programLog:o,vertexShader:{log:c,prefix:_},fragmentShader:{log:l,prefix:v}})}i.deleteShader(S),i.deleteShader(C),T=new Hs(i,g),E=rc(i,g)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(g,Ws)),D},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Gs++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=C,this}var Tc=0,Ec=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Dc(e),t.set(e,n)),n}},Dc=class{constructor(e){this.id=Tc++,this.code=e,this.usedTimes=0}};function Oc(e){return e===1030||e===37490||e===36285}function kc(e,t,n,r,i,a){let o=new Bt,c=new Ec,l=new Set,u=[],d=new Map,f=r.logarithmicDepthBuffer,p=r.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return l.add(e),e===0?`uv`:`uv${e}`}function g(i,o,u,d,g,_){let v=d.fog,y=g.geometry,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?d.environment:null,x=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,S=t.get(i.envMap||b,x),C=S&&S.mapping===306?S.image.height:null,w=m[i.type];i.precision!==null&&(p=r.getMaxPrecision(i.precision),p!==i.precision&&s(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,p,`instead.`));let T=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,E=T===void 0?0:T.length,D=0;y.morphAttributes.position!==void 0&&(D=1),y.morphAttributes.normal!==void 0&&(D=2),y.morphAttributes.color!==void 0&&(D=3);let O,ee,k,A;if(w){let e=Ya[w];O=e.vertexShader,ee=e.fragmentShader}else{O=i.vertexShader,ee=i.fragmentShader;let e=c.getVertexShaderStage(i),t=c.getFragmentShaderStage(i);c.update(i,e,t),k=e.id,A=t.id}let te=e.getRenderTarget(),ne=e.state.buffers.depth.getReversed(),re=g.isInstancedMesh===!0,ie=g.isBatchedMesh===!0,j=!!i.map,ae=!!i.matcap,oe=!!S,se=!!i.aoMap,ce=!!i.lightMap,le=!!i.bumpMap&&i.wireframe===!1,ue=!!i.normalMap,de=!!i.displacementMap,M=!!i.emissiveMap,fe=!!i.metalnessMap,N=!!i.roughnessMap,pe=i.anisotropy>0,me=i.clearcoat>0,he=i.dispersion>0,ge=i.retroreflectivity>0,_e=i.iridescence>0,ve=i.sheen>0,ye=i.transmission>0,be=pe&&!!i.anisotropyMap,xe=me&&!!i.clearcoatMap,Se=me&&!!i.clearcoatNormalMap,Ce=me&&!!i.clearcoatRoughnessMap,we=_e&&!!i.iridescenceMap,Te=_e&&!!i.iridescenceThicknessMap,Ee=ve&&!!i.sheenColorMap,P=ve&&!!i.sheenRoughnessMap,De=!!i.specularMap,F=!!i.specularColorMap,Oe=!!i.specularIntensityMap,I=ye&&!!i.transmissionMap,ke=ye&&!!i.thicknessMap,L=!!i.gradientMap,R=!!i.alphaMap,Ae=i.alphaTest>0,je=!!i.alphaHash,Me=!!i.extensions,Ne=0;i.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ne=e.toneMapping);let Pe={shaderID:w,shaderType:i.type,shaderName:i.name,vertexShader:O,fragmentShader:ee,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:p,batching:ie,batchingColor:ie&&g._colorsTexture!==null,instancing:re,instancingColor:re&&g.instanceColor!==null,instancingMorph:re&&g.morphTexture!==null,outputColorSpace:te===null?e.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:j,matcap:ae,envMap:oe,envMapMode:oe&&S.mapping,envMapCubeUVHeight:C,aoMap:se,lightMap:ce,bumpMap:le,normalMap:ue,displacementMap:de,emissiveMap:M,normalMapObjectSpace:ue&&i.normalMapType===1,normalMapTangentSpace:ue&&i.normalMapType===0,packedNormalMap:ue&&i.normalMapType===0&&Oc(i.normalMap.format),metalnessMap:fe,roughnessMap:N,anisotropy:pe,anisotropyMap:be,clearcoat:me,clearcoatMap:xe,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ce,dispersion:he,retroreflection:ge,iridescence:_e,iridescenceMap:we,iridescenceThicknessMap:Te,sheen:ve,sheenColorMap:Ee,sheenRoughnessMap:P,specularMap:De,specularColorMap:F,specularIntensityMap:Oe,transmission:ye,transmissionMap:I,thicknessMap:ke,gradientMap:L,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:R,alphaTest:Ae,alphaHash:je,combine:i.combine,mapUv:j&&h(i.map.channel),aoMapUv:se&&h(i.aoMap.channel),lightMapUv:ce&&h(i.lightMap.channel),bumpMapUv:le&&h(i.bumpMap.channel),normalMapUv:ue&&h(i.normalMap.channel),displacementMapUv:de&&h(i.displacementMap.channel),emissiveMapUv:M&&h(i.emissiveMap.channel),metalnessMapUv:fe&&h(i.metalnessMap.channel),roughnessMapUv:N&&h(i.roughnessMap.channel),anisotropyMapUv:be&&h(i.anisotropyMap.channel),clearcoatMapUv:xe&&h(i.clearcoatMap.channel),clearcoatNormalMapUv:Se&&h(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&h(i.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&h(i.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&h(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&h(i.sheenColorMap.channel),sheenRoughnessMapUv:P&&h(i.sheenRoughnessMap.channel),specularMapUv:De&&h(i.specularMap.channel),specularColorMapUv:F&&h(i.specularColorMap.channel),specularIntensityMapUv:Oe&&h(i.specularIntensityMap.channel),transmissionMapUv:I&&h(i.transmissionMap.channel),thicknessMapUv:ke&&h(i.thicknessMap.channel),alphaMapUv:R&&h(i.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(ue||pe),vertexNormals:!!y.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:g.isPoints===!0&&!!y.attributes.uv&&(j||R),fog:!!v,useFog:i.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||y.attributes.normal===void 0&&ue===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ne,skinning:g.isSkinnedMesh===!0,hasPositionAttribute:y.attributes.position!==void 0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:D,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:_.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ne,decodeVideoTexture:j&&i.map.isVideoTexture===!0&&Ze.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:M&&i.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Me&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Me&&i.extensions.multiDraw===!0||ie)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function b(e){let t=m[e.type],n;if(t){let e=Ya[t];n=jt.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r=d.get(n);return r===void 0?(r=new wc(e,n,t,i),u.push(r),d.set(n,r)):++r.usedTimes,r}function S(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),d.delete(e.cacheKey),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:w}}function Ac(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function jc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Mc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Nc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||jc),r.length>1&&r.sort(t||Mc),i.length>1&&i.sort(t||Mc)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Pc(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Nc,e.set(t,[i])):n>=r.length?(i=new Nc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Fc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new H,color:new W};break;case`SpotLight`:n={position:new H,direction:new H,color:new W,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new H,color:new W,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new H,skyColor:new W,groundColor:new W};break;case`RectAreaLight`:n={color:new W,position:new H,halfWidth:new H,halfHeight:new H}}return e[t.id]=n,n}}}function Ic(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new On};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new On};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new On,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Lc=0;function Rc(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function zc(e){let t=new Fc,n=Ic(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new H);let i=new H,a=new dr,o=new dr;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Rc);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=q.LTC_FLOAT_1,r.rectAreaLTC2=q.LTC_FLOAT_2):(r.rectAreaLTC1=q.LTC_HALF_1,r.rectAreaLTC2=q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Lc++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Bc(e){let t=new zc(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Vc(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Bc(e),t.set(n,[a])):r>=i.length?(a=new Bc(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Hc=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Uc=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Wc=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],Gc=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Kc=new dr,qc=new H,Jc=new H;function Yc(e,t,n){let r=new Hn,i=new On,a=new On,c=new rn,l=new S,u=new Me,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new he({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new On},radius:{value:4}},vertexShader:Hc,fragmentShader:Uc}),h=m.clone();h.defines.HORIZONTAL_PASS=1;let g=new gr;g.setAttribute(`position`,new ir(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new z(g,m),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,l){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(s(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=y!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){s(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;i.copy(p.mapSize);let g=p.getFrameExtents();i.multiply(g),a.copy(p.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(a.x=Math.floor(f/g.x),i.x=a.x*g.x,p.mapSize.x=a.x),i.y>f&&(a.y=Math.floor(f/g.y),i.y=a.y*g.y,p.mapSize.y=a.y));let _=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=_,p.map===null||h===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){s(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new _r(i.x,i.y,{format:o,type:mt,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new ce(i.x,i.y,A),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=Ne,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=P,p.map.depthTexture.magFilter=P}else d.isPointLight?(p.map=new Eo(i.x),p.map.depthTexture=new R(i.x,nr)):(p.map=new _r(i.x,i.y),p.map.depthTexture=new ce(i.x,i.y,nr)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=Ne,this.type===1?(p.map.depthTexture.compareFunction=_?518:515,p.map.depthTexture.minFilter=Vn,p.map.depthTexture.magFilter=Vn):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=P,p.map.depthTexture.magFilter=P);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==i.x||p.map.height!==i.y)&&p.map.setSize(i.x,i.y);let v=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);for(let t=0;t<v;t++){let i=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),qc.setFromMatrixPosition(d.matrixWorld),e.position.copy(qc),Jc.copy(e.position),Jc.add(Wc[t]),e.up.copy(Gc[t]),e.lookAt(Jc),e.updateMatrixWorld(),n.makeTranslation(-qc.x,-qc.y,-qc.z),Kc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Kc,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),m.viewport(c)}r=p.getFrustum(t),C(n,l,i,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&b(p,l),p.needsUpdate=!1}y=this.type,v.needsUpdate=!1,e.setRenderTarget(u,d,p)};function b(n,r){let a=t.update(_);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null?n.mapPass=new _r(i.x,i.y,{format:o,type:mt}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,m,_,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value.set(n.map.width,n.map.height),h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,_,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,w)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function C(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=x(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)C(c[e],i,a,o,s)}function w(e){e.target.removeEventListener(`dispose`,w);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Xc(e,t){function n(){let t=!1,n=new rn,r=null,i=new rn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?M(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=be[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?M(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,A=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,re=0,ie=e.getParameter(e.VERSION);ie.indexOf(`WebGL`)===-1?ie.indexOf(`OpenGL ES`)!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),ne=re>=2):(re=parseFloat(/^WebGL (\d)/.exec(ie)[1]),ne=re>=1);let j=null,ae={},oe=e.getParameter(e.SCISSOR_BOX),se=e.getParameter(e.VIEWPORT),ce=new rn().fromArray(oe),le=new rn().fromArray(se);function ue(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let de={};de[e.TEXTURE_2D]=ue(e.TEXTURE_2D,e.TEXTURE_2D,1),de[e.TEXTURE_CUBE_MAP]=ue(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[e.TEXTURE_2D_ARRAY]=ue(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),de[e.TEXTURE_3D]=ue(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),M(e.DEPTH_TEST),o.setFunc(3),ye(!1),xe(1),M(e.CULL_FACE),_e(0);function M(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function fe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function N(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function pe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function me(t){return h!==t&&(e.useProgram(t),h=t,!0)}let he={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};he[103]=e.MIN,he[104]=e.MAX;let ge={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function _e(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(fe(e.BLEND),g=!1);return}if(g===!1&&(M(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:ur(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:ur(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:ur(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:ur(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(he[n],he[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ge[r],ge[i],ge[o],ge[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ve(t,n){t.side===2?fe(e.CULL_FACE):M(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ye(r),t.blending===1&&t.transparent===!1?_e(0):_e(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Ce(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?M(e.SAMPLE_ALPHA_TO_COVERAGE):fe(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function xe(t){t===0?fe(e.CULL_FACE):(M(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function Se(t){t!==ee&&(ne&&e.lineWidth(t),ee=t)}function Ce(t,n,r){t?(M(e.POLYGON_OFFSET_FILL),(k!==n||A!==r)&&(k=n,A=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):fe(e.POLYGON_OFFSET_FILL)}function we(t){t?M(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function Te(t){t===void 0&&(t=e.TEXTURE0+te-1),j!==t&&(e.activeTexture(t),j=t)}function Ee(t,n,r){r===void 0&&(r=j===null?e.TEXTURE0+te-1:j);let i=ae[r];i===void 0&&(i={type:void 0,texture:void 0},ae[r]=i),(i.type!==t||i.texture!==n)&&(j!==r&&(e.activeTexture(r),j=r),e.bindTexture(t,n||de[t]),i.type=t,i.texture=n)}function P(){let t=ae[j];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function De(){try{e.compressedTexImage2D(...arguments)}catch(e){ur(`WebGLState:`,e)}}function F(){try{e.compressedTexImage3D(...arguments)}catch(e){ur(`WebGLState:`,e)}}function Oe(){try{e.texSubImage2D(...arguments)}catch(e){ur(`WebGLState:`,e)}}function I(){try{e.texSubImage3D(...arguments)}catch(e){ur(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage2D(...arguments)}catch(e){ur(`WebGLState:`,e)}}function L(){try{e.compressedTexSubImage3D(...arguments)}catch(e){ur(`WebGLState:`,e)}}function R(){try{e.texStorage2D(...arguments)}catch(e){ur(`WebGLState:`,e)}}function Ae(){try{e.texStorage3D(...arguments)}catch(e){ur(`WebGLState:`,e)}}function je(){try{e.texImage2D(...arguments)}catch(e){ur(`WebGLState:`,e)}}function Me(){try{e.texImage3D(...arguments)}catch(e){ur(`WebGLState:`,e)}}function Ne(t){return d[t]===void 0?e.getParameter(t):d[t]}function Pe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Fe(t){ce.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ce.copy(t))}function Ie(t){le.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),le.copy(t))}function Le(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Re(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function ze(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},j=null,ae={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,A=null,ce.set(0,0,e.canvas.width,e.canvas.height),le.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:M,disable:fe,bindFramebuffer:N,drawBuffers:pe,useProgram:me,setBlending:_e,setMaterial:ve,setFlipSided:ye,setCullFace:xe,setLineWidth:Se,setPolygonOffset:Ce,setScissorTest:we,activeTexture:Te,bindTexture:Ee,unbindTexture:P,compressedTexImage2D:De,compressedTexImage3D:F,texImage2D:je,texImage3D:Me,pixelStorei:Pe,getParameter:Ne,updateUBOMapping:Le,uniformBlockBinding:Re,texStorage2D:R,texStorage3D:Ae,texSubImage2D:Oe,texSubImage3D:I,compressedTexSubImage2D:ke,compressedTexSubImage3D:L,scissor:Fe,viewport:Ie,reset:ze}}function Zc(e,t,n,r,i,a,o){let c=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,l=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),u=new On,d=new WeakMap,f=new Set,m,h=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function v(e,t){return _?new OffscreenCanvas(e,t):g(`canvas`)}function y(e,t,n){let r=1,i=R(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);m===void 0&&(m=v(n,a));let o=t?v(n,a):m;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),s(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&s(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function b(e){return e.generateMipmaps}function x(t){e.generateMipmap(t)}function S(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function C(n,r,i,a,o,c=!1){if(n!==null){if(e[n]!==void 0)return e[n];s(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let l;a&&(l=t.get(`EXT_texture_norm16`),l||s(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let u=r;if(r===e.RED&&(i===e.FLOAT&&(u=e.R32F),i===e.HALF_FLOAT&&(u=e.R16F),i===e.UNSIGNED_BYTE&&(u=e.R8),i===e.UNSIGNED_SHORT&&l&&(u=l.R16_EXT),i===e.SHORT&&l&&(u=l.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(u=e.R8UI),i===e.UNSIGNED_SHORT&&(u=e.R16UI),i===e.UNSIGNED_INT&&(u=e.R32UI),i===e.BYTE&&(u=e.R8I),i===e.SHORT&&(u=e.R16I),i===e.INT&&(u=e.R32I)),r===e.RG&&(i===e.FLOAT&&(u=e.RG32F),i===e.HALF_FLOAT&&(u=e.RG16F),i===e.UNSIGNED_BYTE&&(u=e.RG8),i===e.UNSIGNED_SHORT&&l&&(u=l.RG16_EXT),i===e.SHORT&&l&&(u=l.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(u=e.RG8UI),i===e.UNSIGNED_SHORT&&(u=e.RG16UI),i===e.UNSIGNED_INT&&(u=e.RG32UI),i===e.BYTE&&(u=e.RG8I),i===e.SHORT&&(u=e.RG16I),i===e.INT&&(u=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(u=e.RGB8UI),i===e.UNSIGNED_SHORT&&(u=e.RGB16UI),i===e.UNSIGNED_INT&&(u=e.RGB32UI),i===e.BYTE&&(u=e.RGB8I),i===e.SHORT&&(u=e.RGB16I),i===e.INT&&(u=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(u=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(u=e.RGBA16UI),i===e.UNSIGNED_INT&&(u=e.RGBA32UI),i===e.BYTE&&(u=e.RGBA8I),i===e.SHORT&&(u=e.RGBA16I),i===e.INT&&(u=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&l&&(u=l.RGB16_EXT),i===e.SHORT&&l&&(u=l.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(u=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(u=e.R11F_G11F_B10F)),r===e.RGBA){let t=c?kt:Ze.getTransfer(o);i===e.FLOAT&&(u=e.RGBA32F),i===e.HALF_FLOAT&&(u=e.RGBA16F),i===e.UNSIGNED_BYTE&&(u=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&l&&(u=l.RGBA16_EXT),i===e.SHORT&&l&&(u=l.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(u=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(u=e.RGB5_A1)}return(u===e.R16F||u===e.R32F||u===e.RG16F||u===e.RG32F||u===e.RGBA16F||u===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),u}function w(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,s(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function T(e,t){return b(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function D(e){let t=e.target;t.removeEventListener(`dispose`,D),ee(t),t.isVideoTexture&&d.delete(t),t.isHTMLTexture&&f.delete(t)}function O(e){let t=e.target;t.removeEventListener(`dispose`,O),A(t)}function ee(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=h.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&k(e),Object.keys(i).length===0&&h.delete(n)}r.remove(e)}function k(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=h.get(i);delete a[n.__cacheKey],o.memory.textures--}function A(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let te=0;function ne(){te=0}function re(){return te}function ie(e){te=e}function j(){let e=te;return e>=i.maxTextures&&s(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),te+=1,e}function ae(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function oe(t,i){let a=r.get(t);if(t.isVideoTexture&&I(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)s(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)s(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ge(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function se(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ge(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function ce(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ge(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function le(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){_e(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ue={[de]:e.REPEAT,[p]:e.CLAMP_TO_EDGE,[_n]:e.MIRRORED_REPEAT},M={[P]:e.NEAREST,[Le]:e.NEAREST_MIPMAP_NEAREST,[L]:e.NEAREST_MIPMAP_LINEAR,[Vn]:e.LINEAR,[cn]:e.LINEAR_MIPMAP_NEAREST,[kn]:e.LINEAR_MIPMAP_LINEAR},fe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function N(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&s(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ue[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ue[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ue[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,M[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,M[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,fe[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function pe(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,D));let i=n.source,a=h.get(i);a===void 0&&(a={},h.set(i,a));let s=ae(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&k(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function me(e,t,n){return Math.floor(Math.floor(e/n)/t)}function he(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=me(n.start,r.width,4),c=me(t.start,r.width,4);n.start<=i+1&&a===c&&me(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ge(t,o,c){let l=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(l=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(l=e.TEXTURE_3D);let u=pe(t,o),d=o.source;n.bindTexture(l,t.__webglTexture,e.TEXTURE0+c);let p=r.get(d);if(d.version!==p.__version||u===!0){if(n.activeTexture(e.TEXTURE0+c),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Ze.getPrimaries(Ze.workingColorSpace),r=o.colorSpace===``?null:Ze.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=y(o.image,!1,i.maxTextureSize);t=ke(o,t);let r=a.convert(o.format,o.colorSpace),m=a.convert(o.type),h=C(o.internalFormat,r,m,o.normalized,o.colorSpace,o.isVideoTexture);N(l,o);let g,_=o.mipmaps,v=o.isVideoTexture!==!0,S=p.__version===void 0||u===!0,D=d.dataReady,O=T(o,t);if(o.isDepthTexture)h=w(o.format===E,o.type),S&&(v?n.texStorage2D(e.TEXTURE_2D,1,h,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,h,t.width,t.height,0,r,m,null));else if(o.isDataTexture){if(_.length>0){v&&S&&n.texStorage2D(e.TEXTURE_2D,O,h,_[0].width,_[0].height);for(let t=0,i=_.length;t<i;t++)g=_[t],v?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,g.width,g.height,r,m,g.data):n.texImage2D(e.TEXTURE_2D,t,h,g.width,g.height,0,r,m,g.data);o.generateMipmaps=!1}else v?(S&&n.texStorage2D(e.TEXTURE_2D,O,h,t.width,t.height),D&&he(o,t,r,m)):n.texImage2D(e.TEXTURE_2D,0,h,t.width,t.height,0,r,m,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){v&&S&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,h,_[0].width,_[0].height,t.depth);for(let i=0,a=_.length;i<a;i++)if(g=_[i],o.format!==1023){if(r!==null){if(v){if(D){if(o.layerUpdates.size>0){let t=et(g.width,g.height,o.format,o.type);for(let a of o.layerUpdates){let o=g.data.subarray(a*t/g.data.BYTES_PER_ELEMENT,(a+1)*t/g.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,g.width,g.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,g.width,g.height,t.depth,r,g.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,h,g.width,g.height,t.depth,0,g.data,0,0)}else s(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else v?D&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,g.width,g.height,t.depth,r,m,g.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,h,g.width,g.height,t.depth,0,r,m,g.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{v&&S&&n.texStorage2D(e.TEXTURE_2D,O,h,_[0].width,_[0].height);for(let t=0,i=_.length;t<i;t++)g=_[t],o.format===1023?v?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,g.width,g.height,r,m,g.data):n.texImage2D(e.TEXTURE_2D,t,h,g.width,g.height,0,r,m,g.data):r===null?s(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):v?D&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,g.width,g.height,r,g.data):n.compressedTexImage2D(e.TEXTURE_2D,t,h,g.width,g.height,0,g.data)}}else if(o.isDataArrayTexture){if(v){if(S&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,h,t.width,t.height,t.depth),D){if(o.layerUpdates.size>0){let i=et(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,m,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,m,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,h,t.width,t.height,t.depth,0,r,m,t.data)}else if(o.isData3DTexture)v?(S&&n.texStorage3D(e.TEXTURE_3D,O,h,t.width,t.height,t.depth),D&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,m,t.data)):n.texImage3D(e.TEXTURE_3D,0,h,t.width,t.height,t.depth,0,r,m,t.data);else if(o.isFramebufferTexture){if(S){if(v)n.texStorage2D(e.TEXTURE_2D,O,h,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<O;t++)n.texImage2D(e.TEXTURE_2D,t,h,i,a,0,r,m,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),f.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of f)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(_.length>0){if(v&&S){let t=R(_[0]);n.texStorage2D(e.TEXTURE_2D,O,h,t.width,t.height)}for(let t=0,i=_.length;t<i;t++)g=_[t],v?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,m,g):n.texImage2D(e.TEXTURE_2D,t,h,r,m,g);o.generateMipmaps=!1}else if(v){if(S){let r=R(t);n.texStorage2D(e.TEXTURE_2D,O,h,r.width,r.height)}D&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,m,t)}else n.texImage2D(e.TEXTURE_2D,0,h,r,m,t);b(o)&&x(l),p.__version=d.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function _e(t,o,c){if(o.image.length!==6)return;let l=pe(t,o),u=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+c);let d=r.get(u);if(u.version!==d.__version||l===!0){n.activeTexture(e.TEXTURE0+c);let t=Ze.getPrimaries(Ze.workingColorSpace),r=o.colorSpace===``?null:Ze.getPrimaries(o.colorSpace),f=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,f);let p=o.isCompressedTexture||o.image[0].isCompressedTexture,m=o.image[0]&&o.image[0].isDataTexture,h=[];for(let e=0;e<6;e++)!p&&!m?h[e]=y(o.image[e],!0,i.maxCubemapSize):h[e]=m?o.image[e].image:o.image[e],h[e]=ke(o,h[e]);let g=h[0],_=a.convert(o.format,o.colorSpace),v=a.convert(o.type),S=C(o.internalFormat,_,v,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,E=d.__version===void 0||l===!0,D=u.dataReady,O=T(o,g);N(e.TEXTURE_CUBE_MAP,o);let ee;if(p){w&&E&&n.texStorage2D(e.TEXTURE_CUBE_MAP,O,S,g.width,g.height);for(let t=0;t<6;t++){ee=h[t].mipmaps;for(let r=0;r<ee.length;r++){let i=ee[r];o.format===1023?w?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,_,v,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,S,i.width,i.height,0,_,v,i.data):_===null?s(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?D&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,_,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,S,i.width,i.height,0,i.data)}}}else{if(ee=o.mipmaps,w&&E){ee.length>0&&O++;let t=R(h[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,O,S,t.width,t.height)}for(let t=0;t<6;t++)if(m){w?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,h[t].width,h[t].height,_,v,h[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,S,h[t].width,h[t].height,0,_,v,h[t].data);for(let r=0;r<ee.length;r++){let i=ee[r].image[t].image;w?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,_,v,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,S,i.width,i.height,0,_,v,i.data)}}else{w?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,_,v,h[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,S,_,v,h[t]);for(let r=0;r<ee.length;r++){let i=ee[r];w?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,_,v,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,S,_,v,i.image[t])}}}b(o)&&x(e.TEXTURE_CUBE_MAP),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ve(t,i,o,s,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=C(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Oe(i)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,s,l,h.__webglTexture,0,F(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,s,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ye(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=w(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Oe(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,F(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,F(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],s=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=C(o.internalFormat,s,l,o.normalized,o.colorSpace);Oe(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,F(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,F(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function be(t,i,o){let s=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),s){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,D)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),N(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else oe(i.depthTexture,0);let u=l.__webglTexture,d=F(i),f=s?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Oe(i)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Oe(i)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function xe(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)be(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?be(i.__webglFramebuffer[0],t,0):be(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ye(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ye(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Se(t,n,i){let a=r.get(t);n!==void 0&&ve(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&xe(t)}function Ce(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,O);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Oe(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=C(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=F(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),ye(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),N(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)ve(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else ve(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);b(i)&&x(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),N(c,a),ve(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),b(a)&&x(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),N(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)ve(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else ve(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);b(i)&&x(r),n.unbindTexture()}t.depthBuffer&&xe(t)}function we(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(b(a)){let t=S(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),x(t),n.unbindTexture()}}}let Te=[],Ee=[];function De(t){if(t.samples>0){if(Oe(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),l===!0&&(Te.length=0,Ee.length=0,Te.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(Te.push(c),Ee.push(c),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ee)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Te))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&l){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function F(e){return Math.min(i.maxSamples,e.samples)}function Oe(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function I(e){let t=o.render.frame;d.get(e)!==t&&(d.set(e,t),e.update())}function ke(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Ze.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&s(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):ur(`WebGLTextures: Unsupported texture color space:`,n)),t}function R(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(u.width=e.naturalWidth||e.width,u.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(u.width=e.displayWidth,u.height=e.displayHeight):(u.width=e.width,u.height=e.height),u}this.allocateTextureUnit=j,this.resetTextureUnits=ne,this.getTextureUnits=re,this.setTextureUnits=ie,this.setTexture2D=oe,this.setTexture2DArray=se,this.setTexture3D=ce,this.setTextureCube=le,this.rebindTextures=Se,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Qc(e,t){function n(n,r=``){let i,a=Ze.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var $c=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,el=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,tl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new j(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new he({vertexShader:$c,fragmentShader:el,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new z(new lt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nl=class extends ot{constructor(e,t){super();let n=this,i=null,a=1,o=null,c=`local-floor`,l=1,u=null,d=null,f=null,p=null,m=null,h=null,g=typeof XRWebGLBinding<`u`,_=new tl,v={},y=t.getContextAttributes(),b=null,x=null,S=[],C=[],w=new On,T=null,D=null,O=new Sr;O.viewport=new rn;let ee=new Sr;ee.viewport=new rn;let k=[O,ee],A=new En,te=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=S[e];return t===void 0&&(t=new Pt,S[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=S[e];return t===void 0&&(t=new Pt,S[e]=t),t.getGripSpace()},this.getHand=function(e){let t=S[e];return t===void 0&&(t=new Pt,S[e]=t),t.getHandSpace()};function re(e){let t=C.indexOf(e.inputSource);if(t===-1)return;let n=S[t];n!==void 0&&(n.update(e.inputSource,e.frame,u||o),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ie(){i.removeEventListener(`select`,re),i.removeEventListener(`selectstart`,re),i.removeEventListener(`selectend`,re),i.removeEventListener(`squeeze`,re),i.removeEventListener(`squeezestart`,re),i.removeEventListener(`squeezeend`,re),i.removeEventListener(`end`,ie),i.removeEventListener(`inputsourceschange`,ae);for(let e=0;e<S.length;e++){let t=C[e];t!==null&&(C[e]=null,S[e].disconnect(t))}te=null,ne=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(b),m=null,p=null,f=null,i=null,x=null,N.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),D!==null){let e=D.camera;e.fov=D.fov,e.zoom=D.zoom,e.updateProjectionMatrix(),D=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){a=e,n.isPresenting===!0&&s(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){c=e,n.isPresenting===!0&&s(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(e){u=e},this.getBaseLayer=function(){return p===null?m:p},this.getBinding=function(){return f===null&&g&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return h},this.getSession=function(){return i},this.setSession=async function(s){if(i=s,i!==null){if(b=e.getRenderTarget(),i.addEventListener(`select`,re),i.addEventListener(`selectstart`,re),i.addEventListener(`selectend`,re),i.addEventListener(`squeeze`,re),i.addEventListener(`squeezestart`,re),i.addEventListener(`squeezeend`,re),i.addEventListener(`end`,ie),i.addEventListener(`inputsourceschange`,ae),y.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,o=null,s=null;y.depth&&(s=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?E:Ne,o=y.stencil?zt:nr);let c={colorFormat:t.RGBA8,depthFormat:s,scaleFactor:a};f=this.getBinding(),p=f.createProjectionLayer(c),i.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),x=new _r(p.textureWidth,p.textureHeight,{format:r,type:In,depthTexture:new ce(p.textureWidth,p.textureHeight,o,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(i,t,n),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new _r(m.framebufferWidth,m.framebufferHeight,{format:r,type:In,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await i.requestReferenceSpace(c),N.setContext(i),N.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ae(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=C.indexOf(n);r>=0&&(C[r]=null,S[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=C.indexOf(n);if(r===-1){for(let e=0;e<S.length;e++)if(e>=C.length){C.push(n),r=e;break}else if(C[e]===null){C[e]=n,r=e;break}if(r===-1)break}let i=S[r];i&&i.connect(n)}}let oe=new H,se=new H;function le(e,t,n){oe.setFromMatrixPosition(t.matrixWorld),se.setFromMatrixPosition(n.matrixWorld);let r=oe.distanceTo(se),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ue(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(i===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),A.near=ee.near=O.near=t,A.far=ee.far=O.far=n,(te!==A.near||ne!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),te=A.near,ne=A.far),A.layers.mask=e.layers.mask|6,O.layers.mask=A.layers.mask&-5,ee.layers.mask=A.layers.mask&-3;let r=e.parent,a=A.cameras;ue(A,r);for(let e=0;e<a.length;e++)ue(a[e],r);a.length===2?le(A,O,ee):A.projectionMatrix.copy(O.projectionMatrix),D===null&&e.isPerspectiveCamera&&(D={camera:e,fov:e.fov,zoom:e.zoom}),de(e,A,r)};function de(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=xt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(p!==null||m!==null)return l},this.setFoveation=function(e){l=e,p!==null&&(p.fixedFoveation=e),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(A)},this.getCameraTexture=function(e){return v[e]};let M=null;function fe(t,r){if(d=r.getViewerPose(u||o),h=r,d!==null){let t=d.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let r=!1;t.length!==A.cameras.length&&(A.cameras.length=0,r=!0);for(let n=0;n<t.length;n++){let i=t[n],a=null;if(m!==null)a=m.getViewport(i);else{let t=f.getViewSubImage(p,i);a=t.viewport,n===0&&(e.setRenderTargetTextures(x,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(x))}let o=k[n];o===void 0&&(o=new Sr,o.layers.enable(n),o.viewport=new rn,k[n]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),r===!0&&A.cameras.push(o)}let a=i.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&i.depthUsage==`gpu-optimized`&&g){f=n.getBinding();let e=f.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,i.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),f=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new j,v[n]=e);let t=f.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<S.length;e++){let t=C[e],n=S[e];t!==null&&n!==void 0&&n.update(t,r,u||o)}M&&M(t,r),r.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:r}),h=null}let N=new qa;N.setAnimationLoop(fe),this.setAnimationLoop=function(e){M=e},this.dispose=function(){}}},rl=new dr,il=new _;il.set(-1,0,0,0,1,0,0,0,1);function al(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,w(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(rl.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(il),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function ol(e,t,n,r){let i={},a={},o=[],c=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function u(e,n){let o=i[e.id];o===void 0&&(_(e),o=d(e),i[e.id]=o,e.addEventListener(`dispose`,y));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(p(e),a[e.id]=c)}function d(t){let n=f();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function f(){for(let e=0;e<c;e++)if(o.indexOf(e)===-1)return o.push(e),e;return ur(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function p(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)m(t[n],e,n,a);else m(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function m(t,n,r,i){if(g(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=v(i);h(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else h(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function h(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function g(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function _(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=v(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function v(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?s(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):s(`WebGLRenderer: Unsupported uniform value type.`,e),t}function y(t){let n=t.target;n.removeEventListener(`dispose`,y);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function b(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:l,update:u,dispose:b}}var sl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),cl=null;function ll(){return cl===null&&(cl=new De(sl,16,16,o,mt),cl.name=`DFG_LUT`,cl.minFilter=Vn,cl.magFilter=Vn,cl.wrapS=p,cl.wrapT=p,cl.generateMipmaps=!1,cl.needsUpdate=!0),cl}var ul=class{constructor(e={}){let{canvas:t=Ye(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u=`default`,failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=In}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);m=n.getContextAttributes().alpha}else m=a;let h=p,g=new Set([qt,hn,ee]),_=new Set([In,nr,Bn,zt,Ut,Qt]),v=new Uint32Array(4),y=new Int32Array(4),b=new H,S=null,C=null,w=[],T=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,O=!1,k=null,A=null,te=null,ne=null;this._outputColorSpace=rt;let re=0,ie=0,j=null,ae=-1,oe=null,se=new rn,ce=new rn,le=null,ue=new W(0),de=0,M=t.width,fe=t.height,N=1,pe=null,me=null,he=new rn(0,0,M,fe),ge=new rn(0,0,M,fe),_e=!1,ve=new Hn,ye=!1,be=!1,xe=new dr,Se=new H,Ce=new rn,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Te=!1;function Ee(){return j===null?N:1}let P=n;function De(e,n){return t.getContext(e,n)}let F,Oe,I,ke,L,R,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,Xe,!1),t.addEventListener(`webglcontextrestored`,Qe,!1),t.addEventListener(`webglcontextcreationerror`,$e,!1),P===null){let t=`webgl2`;if(P=De(t,e),P===null)throw De(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}qe()}catch(e){throw t.removeEventListener(`webglcontextlost`,Xe,!1),t.removeEventListener(`webglcontextrestored`,Qe,!1),t.removeEventListener(`webglcontextcreationerror`,$e,!1),ur(`WebGLRenderer: `+e.message),e}function qe(){F=new Oo(P),F.init(),We=new Qc(P,F),Oe=new no(P,F,e,We),I=new Xc(P,F),Oe.reversedDepthBuffer&&f&&I.buffers.depth.setReversed(!0),A=P.createFramebuffer(),te=P.createFramebuffer(),ne=P.createFramebuffer(),ke=new jo(P),L=new Ac,R=new Zc(P,F,I,L,Oe,We,ke),Ae=new Do(D),je=new Ja(P),Ge=new eo(P,je),Me=new ko(P,je,ke,Ge),Ne=new No(P,Me,je,Ge,ke),Ve=new Mo(P,Oe,R),Re=new ro(L),Pe=new kc(D,Ae,F,Oe,Ge,Re),Fe=new al(D,L),Ie=new Pc,Le=new Vc(F),Be=new $a(D,Ae,I,Ne,m,c),ze=new Yc(D,Ne,Oe),Ke=new ol(P,ke,Oe,I),He=new to(P,F,ke),Ue=new Ao(P,F,ke),ke.programs=Pe.programs,D.capabilities=Oe,D.extensions=F,D.properties=L,D.renderLists=Ie,D.shadowMap=ze,D.state=I,D.info=ke}h!==1009&&(E=new Fo(h,t.width,t.height,o,r,i));let Je=new nl(D,P);this.xr=Je,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let e=F.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=F.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(e){e!==void 0&&(N=e,this.setSize(M,fe,!1))},this.getSize=function(e){return e.set(M,fe)},this.setSize=function(e,n,r=!0){if(Je.isPresenting){s(`WebGLRenderer: Can't change size while VR device is presenting.`);return}M=e,fe=n,t.width=Math.floor(e*N),t.height=Math.floor(n*N),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(M*N,fe*N).floor()},this.setDrawingBufferSize=function(e,n,r){M=e,fe=n,N=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(h===1009){ur(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){s(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}E.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(se)},this.getViewport=function(e){return e.copy(he)},this.setViewport=function(e,t,n,r){e.isVector4?he.set(e.x,e.y,e.z,e.w):he.set(e,t,n,r),I.viewport(se.copy(he).multiplyScalar(N).round())},this.getScissor=function(e){return e.copy(ge)},this.setScissor=function(e,t,n,r){e.isVector4?ge.set(e.x,e.y,e.z,e.w):ge.set(e,t,n,r),I.scissor(ce.copy(ge).multiplyScalar(N).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(e){I.setScissorTest(_e=e)},this.setOpaqueSort=function(e){pe=e},this.setTransparentSort=function(e){me=e},this.getClearColor=function(e){return e.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(j!==null){let t=j.texture.format;e=g.has(t)}if(e){let e=j.texture.type,t=_.has(e),n=Be.getClearColor(),r=Be.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(v[0]=i,v[1]=a,v[2]=o,v[3]=r,P.clearBufferuiv(P.COLOR,0,v)):(y[0]=i,y[1]=a,y[2]=o,y[3]=r,P.clearBufferiv(P.COLOR,0,y))}else r|=P.COLOR_BUFFER_BIT}t&&(r|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&P.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),k=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Xe,!1),t.removeEventListener(`webglcontextrestored`,Qe,!1),t.removeEventListener(`webglcontextcreationerror`,$e,!1),Be.dispose(),Ie.dispose(),Le.dispose(),L.dispose(),Ae.dispose(),Ne.dispose(),Ge.dispose(),Ke.dispose(),Pe.dispose(),Je.dispose(),Je.removeEventListener(`sessionstart`,ot),Je.removeEventListener(`sessionend`,st),ct.stop()};function Xe(e){e.preventDefault(),x(`WebGLRenderer: Context Lost.`),O=!0}function Qe(){x(`WebGLRenderer: Context Restored.`),O=!1;let e=ke.autoReset,t=ze.enabled,n=ze.autoUpdate,r=ze.needsUpdate,i=ze.type;qe(),ke.autoReset=e,ze.enabled=t,ze.autoUpdate=n,ze.needsUpdate=r,ze.type=i}function $e(e){ur(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function et(e){let t=e.target;t.removeEventListener(`dispose`,et),z(t)}function z(e){tt(e),L.remove(e)}function tt(e){let t=L.get(e).programs;t!==void 0&&(t.forEach(function(e){Pe.releaseProgram(e)}),e.isShaderMaterial&&Pe.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=we);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=V(e,t,n,r,i);I.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Me.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Ge.setup(i,r,s,n,c);let h,g=He;if(c!==null&&(h=je.get(c),g=Ue,g.setIndex(h)),i.isMesh)r.wireframe===!0?(I.setLineWidth(r.wireframeLinewidth*Ee()),g.setMode(P.LINES)):g.setMode(P.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),I.setLineWidth(e*Ee()),i.isLineSegments?g.setMode(P.LINES):i.isLineLoop?g.setMode(P.LINE_LOOP):g.setMode(P.LINE_STRIP)}else i.isPoints?g.setMode(P.POINTS):i.isSprite&&g.setMode(P.TRIANGLES);if(i.isBatchedMesh){if(F.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?je.get(c).bytesPerElement:1,o=L.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(P,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function nt(e,t,n,r){k!==null&&e.isNodeMaterial&&k.setObject(r,e),ye===!0&&Re.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,pt(e,t,r),e.side=0,e.needsUpdate=!0,pt(e,t,r),e.side=2):pt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),k!==null&&k.renderStart(e,t,n),C=Le.get(n),C.init(t),T.push(C),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(C.pushLight(e),e.castShadow&&C.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(C.pushLight(e),e.castShadow&&C.pushShadow(e))}),C.setupLights(),k!==null&&k.updateLights(C.state.lightsArray),be=this.localClippingEnabled,ye=Re.init(this.clippingPlanes,be),ye===!0&&Re.setGlobalState(this.clippingPlanes,t),k!==null&&ze.render(C.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];nt(o,n,t,e),r.add(o)}else nt(i,n,t,e),r.add(i)}}),C=T.pop(),k!==null&&k.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=L.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}F.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let it=null;function at(e){it&&it(e)}function ot(){ct.stop()}function st(){ct.start()}let ct=new qa;ct.setAnimationLoop(at),typeof self<`u`&&ct.setContext(self),this.setAnimationLoop=function(e){it=e,Je.setAnimationLoop(e),e===null?ct.stop():ct.start()},Je.addEventListener(`sessionstart`,ot),Je.addEventListener(`sessionend`,st),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){ur(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(O===!0)return;k!==null&&k.renderStart(e,t);let n=Je.enabled===!0&&Je.isPresenting===!0,r=E!==null&&(j===null||n)&&E.begin(D,j);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Je.enabled===!0&&Je.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Je.cameraAutoUpdate===!0&&Je.updateCamera(t),t=Je.getCamera()),e.isScene===!0&&e.onBeforeRender(D,e,t,j),C=Le.get(e,T.length),C.init(t),C.state.textureUnits=R.getTextureUnits(),T.push(C),xe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ve.setFromProjectionMatrix(xe,or,t.reversedDepth),be=this.localClippingEnabled,ye=Re.init(this.clippingPlanes,be),S=Ie.get(e,w.length),S.init(),w.push(S),Je.enabled===!0&&Je.isPresenting===!0){let e=D.xr.getDepthSensingMesh();e!==null&&lt(e,t,-1/0,D.sortObjects)}lt(e,t,0,D.sortObjects),S.finish(),k!==null&&k.updateLights(C.state.lightsArray),D.sortObjects===!0&&S.sort(pe,me),Te=Je.enabled===!1||Je.isPresenting===!1||Je.hasDepthSensing()===!1,Te&&Be.addToRenderList(S,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ye===!0&&Re.beginShadows();let i=C.state.shadowsArray;if(ze.render(i,e,t),ye===!0&&Re.endShadows(),(r&&E.hasRenderPass())===!1){let n=S.opaque,r=S.transmissive;if(C.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];B(n,r,e,a)}Te&&Be.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];ut(S,e,n,n.viewport)}}else r.length>0&&B(n,r,e,t),Te&&Be.render(e),ut(S,e,t)}j!==null&&ie===0&&(R.updateMultisampleRenderTarget(j),R.updateRenderTargetMipmap(j)),r&&E.end(D),e.isScene===!0&&e.onAfterRender(D,e,t),Ge.resetDefaultState(),ae=-1,oe=null,T.pop(),T.length>0?(C=T[T.length-1],R.setTextureUnits(C.state.textureUnits),ye===!0&&Re.setGlobalState(D.clippingPlanes,C.state.camera)):C=null,w.pop(),S=w.length>0?w[w.length-1]:null,k!==null&&k.renderEnd()};function lt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)C.pushLightProbeGrid(e);else if(e.isLight)C.pushLight(e),e.castShadow&&C.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(ve)){r&&Ce.setFromMatrixPosition(e.matrixWorld).applyMatrix4(xe);let i=Ne.update(e),a=e.material;a.visible&&S.push(e,i,a,n,Ce.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(ve))){let i=Ne.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ce.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ce.copy(e.boundingSphere.center)),Ce.applyMatrix4(e.matrixWorld).applyMatrix4(xe)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&S.push(e,i,c,n,Ce.z,s,t)}}else a.visible&&S.push(e,i,a,n,Ce.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)lt(i[e],t,n,r)}function ut(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;C.setupLightsView(n),ye===!0&&Re.setGlobalState(D.clippingPlanes,n),r&&I.viewport(se.copy(r)),i.length>0&&dt(i,t,n),a.length>0&&dt(a,t,n),o.length>0&&dt(o,t,n),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function B(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[r.id]===void 0){let e=F.has(`EXT_color_buffer_half_float`)||F.has(`EXT_color_buffer_float`);C.state.transmissionRenderTarget[r.id]=new _r(1,1,{generateMipmaps:!0,type:e?mt:In,minFilter:kn,samples:Math.max(4,Oe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}let a=C.state.transmissionRenderTarget[r.id],o=r.viewport||se;a.setSize(o.z*D.transmissionResolutionScale,o.w*D.transmissionResolutionScale);let s=D.getRenderTarget(),c=D.getActiveCubeFace(),l=D.getActiveMipmapLevel();D.setRenderTarget(a),D.getClearColor(ue),de=D.getClearAlpha(),de<1&&D.setClearColor(16777215,.5),D.clear(),Te&&Be.render(n);let u=D.toneMapping;D.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),C.setupLightsView(r),ye===!0&&Re.setGlobalState(D.clippingPlanes,r),dt(e,n,r),R.updateMultisampleRenderTarget(a),R.updateRenderTargetMipmap(a),F.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,ft(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(R.updateMultisampleRenderTarget(a),R.updateRenderTargetMipmap(a))}D.setRenderTarget(s,c,l),D.setClearColor(ue,de),d!==void 0&&(r.viewport=d),D.toneMapping=u}function dt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&ft(o,t,n,s,l,c)}}function ft(e,t,n,r,i,a){k!==null&&i.isNodeMaterial&&k.setObject(e,i),e.onBeforeRender(D,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(D,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,D.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,D.renderBufferDirect(n,t,r,i,e,a),i.side=2):D.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(D,t,n,r,i,a)}function pt(e,t,n){t.isScene!==!0&&(t=we);let r=L.get(e),i=C.state.lights,a=C.state.shadowsArray,o=i.state.version,s=Pe.getParameters(e,i.state,a,t,n,C.state.lightProbeGridArray),c=Pe.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ae.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,et),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return gt(e,s),d}else s.uniforms=Pe.getUniforms(e),k!==null&&e.isNodeMaterial&&k.build(e,n,s),e.onBeforeCompile(s,D),d=Pe.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Re.uniform),gt(e,s),r.needsLights=yt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=C.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function ht(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Hs.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function gt(e,t){let n=L.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function _t(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];b.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(b))return n}return null}function V(e,t,n,r,i){t.isScene!==!0&&(t=we),R.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=j===null?D.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ze.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ae.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(h=D.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=L.get(r),y=C.state.lights;if(ye===!0&&(be===!0||e!==oe)){let t=e===oe&&r.id===ae;Re.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Re.numPlanes||v.numIntersection!==Re.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=C.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=pt(r,t,i),k&&r.isNodeMaterial&&k.onUpdateProgram(r,x,v));let S=!1,w=!1,T=!1,E=x.getUniforms(),O=v.uniforms;if(I.useProgram(x.program)&&(S=!0,w=!0,T=!0),r.id!==ae&&(ae=r.id,w=!0),v.needsLights){let e=_t(C.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(S||oe!==e){I.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(P,`projectionMatrix`,e.projectionMatrix),E.setValue(P,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(P,Se.setFromMatrixPosition(e.matrixWorld)),Oe.logarithmicDepthBuffer&&E.setValue(P,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(P,`isOrthographic`,e.isOrthographicCamera===!0),oe!==e&&(oe=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(P,`sunShadowMap`,y.state.sunShadowMap,R),y.state.directionalShadowMap.length>0&&E.setValue(P,`directionalShadowMap`,y.state.directionalShadowMap,R),y.state.spotShadowMap.length>0&&E.setValue(P,`spotShadowMap`,y.state.spotShadowMap,R),y.state.pointShadowMap.length>0&&E.setValue(P,`pointShadowMap`,y.state.pointShadowMap,R)),i.isSkinnedMesh){E.setOptional(P,i,`bindMatrix`),E.setOptional(P,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(P,`boneTexture`,e.boneTexture,R))}i.isBatchedMesh&&(E.setOptional(P,i,`batchingTexture`),E.setValue(P,`batchingTexture`,i._matricesTexture,R),E.setOptional(P,i,`batchingIdTexture`),E.setValue(P,`batchingIdTexture`,i._indirectTexture,R),E.setOptional(P,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(P,`batchingColorTexture`,i._colorsTexture,R));let ee=n.morphAttributes;if((ee.position!==void 0||ee.normal!==void 0||ee.color!==void 0)&&Ve.update(i,n,x),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(P,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=ll()),w){if(E.setValue(P,`toneMappingExposure`,D.toneMappingExposure),v.needsLights&&vt(O,T),a&&r.fog===!0&&Fe.refreshFogUniforms(O,a),Fe.refreshMaterialUniforms(O,r,N,fe,C.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;O.probesSH.value=e.texture,O.probesMin.value.copy(e.boundingBox.min),O.probesMax.value.copy(e.boundingBox.max),O.probesResolution.value.copy(e.resolution)}Hs.upload(P,ht(v),O,R)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Hs.upload(P,ht(v),O,R),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(P,`center`,i.center),E.setValue(P,`modelViewMatrix`,i.modelViewMatrix),E.setValue(P,`normalMatrix`,i.normalMatrix),E.setValue(P,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ke.update(n,x),Ke.bind(n,x)}}return x}function vt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function yt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return re},this.getActiveMipmapLevel=function(){return ie},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(e,t,n){let r=L.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),L.get(e.texture).__webglTexture=t,L.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=L.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){j=e,re=t,ie=n;let r=null,i=!1,a=!1;if(e){let o=L.get(e);if(o.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(P.FRAMEBUFFER,o.__webglFramebuffer),se.copy(e.viewport),ce.copy(e.scissor),le=e.scissorTest,I.viewport(se),I.scissor(ce),I.setScissorTest(le),ae=-1;return}if(o.__webglFramebuffer===void 0)R.setupRenderTarget(e);else if(o.__hasExternalTextures)R.rebindTextures(e,L.get(e.texture).__webglTexture,L.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&L.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);R.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=L.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&R.useMultisampledRTT(e)===!1?L.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,se.copy(e.viewport),ce.copy(e.scissor),le=e.scissorTest}else se.copy(he).multiplyScalar(N).floor(),ce.copy(ge).multiplyScalar(N).floor(),le=_e;if(n!==0&&(r=A),I.bindFramebuffer(P.FRAMEBUFFER,r)&&I.drawBuffers(e,r),I.viewport(se),I.scissor(ce),I.setScissorTest(le),i){let r=L.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=L.get(e.textures[t]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=L.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,t.__webglTexture,n)}ae=-1};function bt(e){let t=L.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Oe.textureFormatReadable(e.format),t.__typeReadable=Oe.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){ur(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){I.bindFramebuffer(P.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let u=bt(o);if(u.__formatReadable===!1){ur(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){ur(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&P.readPixels(t,n,r,i,We.convert(c),We.convert(l),a)}finally{let e=j===null?null:L.get(j).__webglFramebuffer;I.bindFramebuffer(P.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){I.bindFramebuffer(P.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let d=bt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.bufferData(P.PIXEL_PACK_BUFFER,a.byteLength,P.STREAM_READ),P.readPixels(t,n,r,i,We.convert(l),We.convert(u),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let p=j===null?null:L.get(j).__webglFramebuffer;I.bindFramebuffer(P.FRAMEBUFFER,p);let m=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await bn(P,m,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,a),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(f),P.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;R.setTexture2D(e,0),P.copyTexSubImage2D(P.TEXTURE_2D,n,0,0,o,s,i,a),I.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=We.convert(t.format),_=We.convert(t.type),v;t.isData3DTexture?(R.setTexture3D(t,0),v=P.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(R.setTexture2DArray(t,0),v=P.TEXTURE_2D_ARRAY):(R.setTexture2D(t,0),v=P.TEXTURE_2D),I.activeTexture(P.TEXTURE0),I.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,t.flipY),I.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),I.pixelStorei(P.UNPACK_ALIGNMENT,t.unpackAlignment);let y=I.getParameter(P.UNPACK_ROW_LENGTH),b=I.getParameter(P.UNPACK_IMAGE_HEIGHT),x=I.getParameter(P.UNPACK_SKIP_PIXELS),S=I.getParameter(P.UNPACK_SKIP_ROWS),C=I.getParameter(P.UNPACK_SKIP_IMAGES);I.pixelStorei(P.UNPACK_ROW_LENGTH,h.width),I.pixelStorei(P.UNPACK_IMAGE_HEIGHT,h.height),I.pixelStorei(P.UNPACK_SKIP_PIXELS,l),I.pixelStorei(P.UNPACK_SKIP_ROWS,u),I.pixelStorei(P.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=L.get(e),r=L.get(t),h=L.get(n.__renderTarget),g=L.get(r.__renderTarget);I.bindFramebuffer(P.READ_FRAMEBUFFER,h.__webglFramebuffer),I.bindFramebuffer(P.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,L.get(e).__webglTexture,i,d+n),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,L.get(t).__webglTexture,a,m+n)),P.blitFramebuffer(l,u,o,s,f,p,o,s,P.DEPTH_BUFFER_BIT,P.NEAREST);I.bindFramebuffer(P.READ_FRAMEBUFFER,null),I.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||L.has(e)){let n=L.get(e),r=L.get(t);I.bindFramebuffer(P.READ_FRAMEBUFFER,te),I.bindFramebuffer(P.DRAW_FRAMEBUFFER,ne);for(let e=0;e<c;e++)w?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,n.__webglTexture,i),T?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,r.__webglTexture,a),i===0?T?P.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):P.copyTexSubImage2D(v,a,f,p,l,u,o,s):P.blitFramebuffer(l,u,o,s,f,p,o,s,P.COLOR_BUFFER_BIT,P.NEAREST);I.bindFramebuffer(P.READ_FRAMEBUFFER,null),I.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?P.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h);I.pixelStorei(P.UNPACK_ROW_LENGTH,y),I.pixelStorei(P.UNPACK_IMAGE_HEIGHT,b),I.pixelStorei(P.UNPACK_SKIP_PIXELS,x),I.pixelStorei(P.UNPACK_SKIP_ROWS,S),I.pixelStorei(P.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&P.generateMipmap(v),I.unbindTexture()},this.initRenderTarget=function(e){L.get(e).__webglFramebuffer===void 0&&R.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?R.setTextureCube(e,0):e.isData3DTexture?R.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?R.setTexture2DArray(e,0):R.setTexture2D(e,0),I.unbindTexture()},this.resetState=function(){re=0,ie=0,j=null,I.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return or}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}};function dl(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));return i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`),e.setIndex(i),e.clearGroups(),e}return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}function fl(e){let t=new Map,n=new Map,r=e.clone();return pl(e,r,function(e,r){t.set(r,e),n.set(e,r)}),r.traverse(function(e){if(!e.isSkinnedMesh)return;let r=e,i=t.get(e),a=i.skeleton.bones;r.skeleton=i.skeleton.clone(),r.bindMatrix.copy(i.bindMatrix),r.skeleton.bones=a.map(function(e){return n.get(e)}),r.bind(r.skeleton,r.bindMatrix)}),r}function pl(e,t,n){n(e,t);for(let r=0;r<e.children.length;r++)pl(e.children[r],t.children[r],n)}var ml=class extends sr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new bl(e)}),this.register(function(e){return new xl(e)}),this.register(function(e){return new Al(e)}),this.register(function(e){return new jl(e)}),this.register(function(e){return new Ml(e)}),this.register(function(e){return new Cl(e)}),this.register(function(e){return new wl(e)}),this.register(function(e){return new Tl(e)}),this.register(function(e){return new El(e)}),this.register(function(e){return new yl(e)}),this.register(function(e){return new Dl(e)}),this.register(function(e){return new Sl(e)}),this.register(function(e){return new kl(e)}),this.register(function(e){return new Ol(e)}),this.register(function(e){return new _l(e)}),this.register(function(e){return new Nl(e,J.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new Nl(e,J.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new Pl(e)})}load(e,t,n,r){let i=this,a;if(this.resourcePath!==``)a=this.resourcePath;else if(this.path!==``){let t=vr.extractUrlBase(e);a=vr.resolveURL(t,this.path)}else a=vr.extractUrlBase(e);this.manager.itemStart(e);let o=function(t){r?r(t):console.error(t),i.manager.itemError(e),i.manager.itemEnd(e)},s=new tt(this.manager);s.setPath(this.path),s.setResponseType(`arraybuffer`),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(n){try{i.parse(n,a,function(n){t(n),i.manager.itemEnd(e)},o)}catch(e){o(e)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let i,a={},o={},s=new TextDecoder;if(typeof e==`string`)i=JSON.parse(e);else if(e instanceof ArrayBuffer){if(s.decode(new Uint8Array(e,0,4))===Fl){try{a[J.KHR_BINARY_GLTF]=new Rl(e)}catch(e){r&&r(e);return}i=JSON.parse(a[J.KHR_BINARY_GLTF].content)}else i=JSON.parse(s.decode(e))}else i=e;if(i.asset===void 0||i.asset.version[0]<2){r&&r(Error(`THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`));return}let c=new uu(i,{path:t||this.resourcePath||``,crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](c);t.name||console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),o[t.name]=t,a[t.name]=!0}if(i.extensionsUsed)for(let e=0;e<i.extensionsUsed.length;++e){let t=i.extensionsUsed[e],n=i.extensionsRequired||[];switch(t){case J.KHR_MATERIALS_UNLIT:a[t]=new vl;break;case J.KHR_DRACO_MESH_COMPRESSION:a[t]=new zl(i,this.dracoLoader);break;case J.KHR_TEXTURE_TRANSFORM:a[t]=new Bl;break;case J.KHR_MESH_QUANTIZATION:a[t]=new Vl;break;default:n.indexOf(t)>=0&&o[t]===void 0&&console.warn(`THREE.GLTFLoader: Unknown extension "`+t+`".`)}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,i){n.parse(e,t,r,i)})}};function hl(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function gl(e,t,n){let r=e.json.materials[t];return r.extensions&&r.extensions[n]?r.extensions[n]:null}var J={KHR_BINARY_GLTF:`KHR_binary_glTF`,KHR_DRACO_MESH_COMPRESSION:`KHR_draco_mesh_compression`,KHR_LIGHTS_PUNCTUAL:`KHR_lights_punctual`,KHR_MATERIALS_CLEARCOAT:`KHR_materials_clearcoat`,KHR_MATERIALS_DISPERSION:`KHR_materials_dispersion`,KHR_MATERIALS_IOR:`KHR_materials_ior`,KHR_MATERIALS_SHEEN:`KHR_materials_sheen`,KHR_MATERIALS_SPECULAR:`KHR_materials_specular`,KHR_MATERIALS_TRANSMISSION:`KHR_materials_transmission`,KHR_MATERIALS_IRIDESCENCE:`KHR_materials_iridescence`,KHR_MATERIALS_ANISOTROPY:`KHR_materials_anisotropy`,KHR_MATERIALS_UNLIT:`KHR_materials_unlit`,KHR_MATERIALS_VOLUME:`KHR_materials_volume`,KHR_TEXTURE_BASISU:`KHR_texture_basisu`,KHR_TEXTURE_TRANSFORM:`KHR_texture_transform`,KHR_MESH_QUANTIZATION:`KHR_mesh_quantization`,KHR_MATERIALS_EMISSIVE_STRENGTH:`KHR_materials_emissive_strength`,EXT_MATERIALS_BUMP:`EXT_materials_bump`,EXT_TEXTURE_WEBP:`EXT_texture_webp`,EXT_TEXTURE_AVIF:`EXT_texture_avif`,EXT_MESHOPT_COMPRESSION:`EXT_meshopt_compression`,KHR_MESHOPT_COMPRESSION:`KHR_meshopt_compression`,EXT_MESH_GPU_INSTANCING:`EXT_mesh_gpu_instancing`},_l=class{constructor(e){this.parser=e,this.name=J.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n=`light:`+e,r=t.cache.get(n);if(r)return r;let i=t.json,a=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e],o,s=new W(16777215);a.color!==void 0&&s.setRGB(a.color[0],a.color[1],a.color[2],an);let c=a.range===void 0?0:a.range;switch(a.type){case`directional`:o=new ve(s),o.target.position.set(0,0,-1),o.add(o.target);break;case`point`:o=new se(s),o.distance=c;break;case`spot`:o=new Be(s),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle===void 0?0:a.spot.innerConeAngle,a.spot.outerConeAngle=a.spot.outerConeAngle===void 0?Math.PI/4:a.spot.outerConeAngle,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw Error(`THREE.GLTFLoader: Unexpected light type: `+a.type)}return o.position.set(0,0,0),nu(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||`light_`+e),r=Promise.resolve(o),t.cache.add(n,r),r}getDependency(e,t){if(e===`light`)return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],i=(r.extensions&&r.extensions[this.name]||{}).light;return i===void 0?null:this._loadLight(i).then(function(e){return n._getNodeRef(t.cache,i,e)})}},vl=class{constructor(){this.name=J.KHR_MATERIALS_UNLIT}getMaterialType(){return T}extendParams(e,t,n){let r=[];e.color=new W(1,1,1),e.opacity=1;let i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){let t=i.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],an),e.opacity=t[3]}i.baseColorTexture!==void 0&&r.push(n.assignTexture(e,`map`,i.baseColorTexture,rt))}return Promise.all(r)}},yl=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=gl(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},bl=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return gl(this.parser,e,this.name)===null?null:xn}extendMaterialParams(e,t){let n=gl(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatMap`,n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatRoughnessMap`,n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,`clearcoatNormalMap`,n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let e=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new On(e,e)}return Promise.all(r)}},xl=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_DISPERSION}getMaterialType(e){return gl(this.parser,e,this.name)===null?null:xn}extendMaterialParams(e,t){let n=gl(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion===void 0?0:n.dispersion),Promise.resolve()}},Sl=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return gl(this.parser,e,this.name)===null?null:xn}extendMaterialParams(e,t){let n=gl(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceMap`,n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceThicknessMap`,n.iridescenceThicknessTexture)),Promise.all(r)}},Cl=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_SHEEN}getMaterialType(e){return gl(this.parser,e,this.name)===null?null:xn}extendMaterialParams(e,t){let n=gl(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new W(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let e=n.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],an)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenColorMap`,n.sheenColorTexture,rt)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenRoughnessMap`,n.sheenRoughnessTexture)),Promise.all(r)}},wl=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return gl(this.parser,e,this.name)===null?null:xn}extendMaterialParams(e,t){let n=gl(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,`transmissionMap`,n.transmissionTexture)),Promise.all(r)}},Tl=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_VOLUME}getMaterialType(e){return gl(this.parser,e,this.name)===null?null:xn}extendMaterialParams(e,t){let n=gl(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor===void 0?0:n.thicknessFactor,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`thicknessMap`,n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let i=n.attenuationColor||[1,1,1];return t.attenuationColor=new W().setRGB(i[0],i[1],i[2],an),Promise.all(r)}},El=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_IOR}getMaterialType(e){return gl(this.parser,e,this.name)===null?null:xn}extendMaterialParams(e,t){let n=gl(this.parser,e,this.name);return n===null?Promise.resolve():(t.ior=n.ior===void 0?1.5:n.ior,t.ior===0&&(t.ior=1e3),Promise.resolve())}},Dl=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_SPECULAR}getMaterialType(e){return gl(this.parser,e,this.name)===null?null:xn}extendMaterialParams(e,t){let n=gl(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor===void 0?1:n.specularFactor,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularIntensityMap`,n.specularTexture));let i=n.specularColorFactor||[1,1,1];return t.specularColor=new W().setRGB(i[0],i[1],i[2],an),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularColorMap`,n.specularColorTexture,rt)),Promise.all(r)}},Ol=class{constructor(e){this.parser=e,this.name=J.EXT_MATERIALS_BUMP}getMaterialType(e){return gl(this.parser,e,this.name)===null?null:xn}extendMaterialParams(e,t){let n=gl(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor===void 0?1:n.bumpFactor,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,`bumpMap`,n.bumpTexture)),Promise.all(r)}},kl=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return gl(this.parser,e,this.name)===null?null:xn}extendMaterialParams(e,t){let n=gl(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,`anisotropyMap`,n.anisotropyTexture)),Promise.all(r)}},Al=class{constructor(e){this.parser=e,this.name=J.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let i=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`);return null}return t.loadTextureImage(e,i.source,a)}},jl=class{constructor(e){this.parser=e,this.name=J.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},Ml=class{constructor(e){this.parser=e,this.name=J.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},Nl=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let e=n.extensions[this.name],r=this.parser.getDependency(`buffer`,e.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`);return null}return r.then(function(t){let n=e.byteOffset||0,r=e.byteLength||0,a=e.count,o=e.byteStride,s=new Uint8Array(t,n,r);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(a,o,s,e.mode,e.filter).then(function(e){return e.buffer}):i.ready.then(function(){let t=new ArrayBuffer(a*o);return i.decodeGltfBuffer(new Uint8Array(t),a,o,s,e.mode,e.filter),t})})}return null}},Pl=class{constructor(e){this.name=J.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let e of r.primitives)if(e.mode!==Gl.TRIANGLES&&e.mode!==Gl.TRIANGLE_STRIP&&e.mode!==Gl.TRIANGLE_FAN&&e.mode!==void 0)return null;let i=n.extensions[this.name].attributes,a=[],o={};for(let e in i)a.push(this.parser.getDependency(`accessor`,i[e]).then(t=>(o[e]=t,o[e])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(e=>{let t=e.pop(),n=t.isGroup?t.children:[t],r=e[0].count,i=[];for(let e of n){let t=new dr,n=new H,a=new _e,s=new H(1,1,1),c=new $n(e.geometry,e.material,r);for(let e=0;e<r;e++)o.TRANSLATION&&n.fromBufferAttribute(o.TRANSLATION,e),o.ROTATION&&a.fromBufferAttribute(o.ROTATION,e),o.SCALE&&s.fromBufferAttribute(o.SCALE,e),c.setMatrixAt(e,t.compose(n,a,s));let l=null;for(let e in o)if(e===`_COLOR_0`){let t=o[e];c.instanceColor=new Yt(t.array,t.itemSize,t.normalized)}else if(e!==`TRANSLATION`&&e!==`ROTATION`&&e!==`SCALE`){if(l===null){let e=c.geometry;l=new gr,l.name=e.name;for(let t in e.attributes)l.setAttribute(t,e.attributes[t]);for(let t in e.morphAttributes)l.morphAttributes[t]=e.morphAttributes[t];e.index!==null&&l.setIndex(e.index),l.morphTargetsRelative=e.morphTargetsRelative;for(let t of e.groups)l.addGroup(t.start,t.count,t.materialIndex);e.boundingBox!==null&&(l.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(l.boundingSphere=e.boundingSphere.clone()),l.drawRange.start=e.drawRange.start,l.drawRange.count=e.drawRange.count,l.userData=Object.assign({},e.userData),c.geometry=l}let t=o[e];l.setAttribute(e,new Yt(t.array,t.itemSize,t.normalized))}M.prototype.copy.call(c,e),this.parser.assignFinalMaterial(c),i.push(c)}return t.isGroup?(t.clear(),t.add(...i),t):i[0]}))}},Fl=`glTF`,Il=12,Ll={JSON:1313821514,BIN:5130562},Rl=class{constructor(e){this.name=J.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Il),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Fl)throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);if(this.header.version<2)throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);let r=this.header.length-Il,i=new DataView(e,Il),a=0;for(;a<r;){let t=i.getUint32(a,!0);a+=4;let r=i.getUint32(a,!0);if(a+=4,r===Ll.JSON){let r=new Uint8Array(e,Il+a,t);this.content=n.decode(r)}else if(r===Ll.BIN){let n=Il+a;this.body=e.slice(n,n+t)}a+=t}if(this.content===null)throw Error(`THREE.GLTFLoader: JSON content not found.`)}},zl=class{constructor(e,t){if(!t)throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);this.name=J.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,i=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},s={},c={};for(let e in a){let t=Xl[e]||e.toLowerCase();o[t]=a[e]}for(let t in e.attributes){let r=Xl[t]||t.toLowerCase();if(a[t]!==void 0){let i=n.accessors[e.attributes[t]];c[r]=Kl[i.componentType].name,s[r]=i.normalized===!0}}return t.getDependency(`bufferView`,i).then(function(e){return new Promise(function(t,n){r.decodeDracoFile(e,function(e){for(let t in e.attributes){let n=e.attributes[t],r=s[t];r!==void 0&&(n.normalized=r)}t(e)},o,c,an,n)})})}},Bl=class{constructor(){this.name=J.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let t=Math.cos(e.rotation),n=Math.sin(e.rotation);e.matrix.set(e.repeat.x*t,e.repeat.y*n,e.offset.x,-e.repeat.x*n,e.repeat.y*t,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Vl=class{constructor(){this.name=J.KHR_MESH_QUANTIZATION}},Hl=class extends Mt{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r*3+r;for(let e=0;e!==r;e++)t[e]=n[i+e];return t}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=o*2,c=o*3,l=r-t,u=(n-t)/l,d=u*u,f=d*u,p=e*c,m=p-c,h=-2*f+3*d,g=f-d,_=1-h,v=g-d+u;for(let e=0;e!==o;e++){let t=a[m+e+o],n=a[m+e+s]*l,r=a[p+e+o],c=a[p+e]*l;i[e]=_*t+v*n+h*r+g*c}return i}},Ul=new _e,Wl=class extends Hl{interpolate_(e,t,n,r){let i=super.interpolate_(e,t,n,r);return Ul.fromArray(i).normalize().toArray(i),i}},Gl={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Kl={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ql={9728:P,9729:Vn,9984:Le,9985:cn,9986:L,9987:kn},Jl={33071:p,33648:_n,10497:de},Yl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Xl={POSITION:`position`,NORMAL:`normal`,TANGENT:`tangent`,TEXCOORD_0:`uv`,TEXCOORD_1:`uv1`,TEXCOORD_2:`uv2`,TEXCOORD_3:`uv3`,COLOR_0:`color`,WEIGHTS_0:`skinWeight`,JOINTS_0:`skinIndex`},Zl={scale:`scale`,translation:`position`,rotation:`quaternion`,weights:`morphTargetInfluences`},Ql={CUBICSPLINE:void 0,LINEAR:Xn,STEP:Ln},$l={OPAQUE:`OPAQUE`,MASK:`MASK`,BLEND:`BLEND`};function eu(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new c({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),e.DefaultMaterial}function tu(e,t,n){for(let r in n.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=n.extensions[r])}function nu(e,t){t.extras!==void 0&&(typeof t.extras==`object`?Object.assign(e.userData,t.extras):console.warn(`THREE.GLTFLoader: Ignoring primitive type .extras, `+t.extras))}function ru(e,t,n){let r=!1,i=!1,a=!1;for(let e=0,n=t.length;e<n;e++){let n=t[e];if(n.POSITION!==void 0&&(r=!0),n.NORMAL!==void 0&&(i=!0),n.COLOR_0!==void 0&&(a=!0),r&&i&&a)break}if(!r&&!i&&!a)return Promise.resolve(e);let o=[],s=[],c=[];for(let l=0,u=t.length;l<u;l++){let u=t[l];if(r){let t=u.POSITION===void 0?e.attributes.position:n.getDependency(`accessor`,u.POSITION);o.push(t)}if(i){let t=u.NORMAL===void 0?e.attributes.normal:n.getDependency(`accessor`,u.NORMAL);s.push(t)}if(a){let t=u.COLOR_0===void 0?e.attributes.color:n.getDependency(`accessor`,u.COLOR_0);c.push(t)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(c)]).then(function(t){let n=t[0],o=t[1],s=t[2];return r&&(e.morphAttributes.position=n),i&&(e.morphAttributes.normal=o),a&&(e.morphAttributes.color=s),e.morphTargetsRelative=!0,e})}function iu(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,r=t.weights.length;n<r;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){let n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let t=0,r=n.length;t<r;t++)e.morphTargetDictionary[n[t]]=t}else console.warn(`THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`)}}function au(e){let t,n=e.extensions&&e.extensions[J.KHR_DRACO_MESH_COMPRESSION];if(t=n?`draco:`+n.bufferView+`:`+n.indices+`:`+ou(n.attributes):e.indices+`:`+ou(e.attributes)+`:`+e.mode,e.targets!==void 0)for(let n=0,r=e.targets.length;n<r;n++)t+=`:`+ou(e.targets[n]);return t}function ou(e){let t=``,n=Object.keys(e).sort();for(let r=0,i=n.length;r<i;r++)t+=n[r]+`:`+e[n[r]]+`;`;return t}function su(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error(`THREE.GLTFLoader: Unsupported normalized accessor component type.`)}}function cu(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?`image/jpeg`:e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?`image/webp`:e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?`image/ktx2`:`image/png`}var lu=new dr,uu=class{constructor(t={},n={}){this.json=t,this.extensions={},this.plugins={},this.options=n,this.cache=new hl,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let r=!1,i=-1,a=!1,o=-1;if(typeof navigator<`u`&&navigator.userAgent!==void 0){let e=navigator.userAgent;r=/^((?!chrome|android).)*safari/i.test(e)===!0;let t=e.match(/Version\/(\d+)/);i=r&&t?parseInt(t[1],10):-1,a=e.indexOf(`Firefox`)>-1,o=a?e.match(/Firefox\/([0-9]+)\./)[1]:-1}this.textureLoader=typeof createImageBitmap>`u`||r&&i<17||a&&o<98?new Nn(this.options.manager):new e(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new tt(this.options.manager),this.fileLoader.setResponseType(`arraybuffer`),this.options.crossOrigin===`use-credentials`&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([n.getDependencies(`scene`),n.getDependencies(`animation`),n.getDependencies(`camera`)])}).then(function(t){let a={scene:t[0][r.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:r.asset,parser:n,userData:{}};return tu(i,a,r),nu(a,r),Promise.all(n._invokeAll(function(e){return e.afterRoot&&e.afterRoot(a)})).then(function(){for(let e of a.scenes)e.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n].joints;for(let t=0,n=r.length;t<n;t++)e[r[t]].isBone=!0}for(let t=0,r=e.length;t<r;t++){let r=e[t];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),i=(e,t)=>{let n=this.associations.get(e);n!=null&&this.associations.set(t,n);for(let[n,r]of e.children.entries())i(r,t.children[n])};return i(n,r),r.name+=`_instance_`+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let i=e(t[r]);i&&n.push(i)}return n}getDependency(e,t){let n=e+`:`+t,r=this.cache.get(n);if(!r){switch(e){case`scene`:r=this.loadScene(t);break;case`node`:r=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case`mesh`:r=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case`accessor`:r=this.loadAccessor(t);break;case`bufferView`:r=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case`buffer`:r=this.loadBuffer(t);break;case`material`:r=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case`texture`:r=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case`skin`:r=this.loadSkin(t);break;case`animation`:r=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case`camera`:r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!r)throw Error(`Unknown type: `+e)}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e===`mesh`?`es`:`s`)]||[];t=Promise.all(r.map(function(t,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!==`arraybuffer`)throw Error(`THREE.GLTFLoader: `+t.type+` buffer type is not supported.`);if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[J.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(e,i){n.load(vr.resolveURL(t.uri,r.path),e,void 0,function(){i(Error(`THREE.GLTFLoader: Failed to load buffer "`+t.uri+`".`))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency(`buffer`,t.buffer).then(function(e){let n=t.byteLength||0,r=t.byteOffset||0;return e.slice(r,r+n)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let e=Yl[r.type],t=Kl[r.componentType],n=r.normalized===!0,i=new t(r.count*e);return Promise.resolve(new ir(i,e,n))}let i=[];return r.bufferView===void 0?i.push(null):i.push(this.getDependency(`bufferView`,r.bufferView)),r.sparse!==void 0&&(i.push(this.getDependency(`bufferView`,r.sparse.indices.bufferView)),i.push(this.getDependency(`bufferView`,r.sparse.values.bufferView))),Promise.all(i).then(function(e){let i=e[0],a=Yl[r.type],o=Kl[r.componentType],s=o.BYTES_PER_ELEMENT,c=s*a,l=r.byteOffset||0,u=r.bufferView===void 0?void 0:n.bufferViews[r.bufferView].byteStride,d=r.normalized===!0,f,p;if(u&&u!==c){let e=Math.floor(l/u),n=`InterleavedBuffer:`+r.bufferView+`:`+r.componentType+`:`+e+`:`+r.count,c=t.cache.get(n);c||(f=new o(i,e*u,r.count*u/s),c=new Jn(f,u/s),t.cache.add(n,c)),p=new fn(c,a,l%u/s,d)}else f=i===null?new o(r.count*a):new o(i,l,r.count*a),p=new ir(f,a,d);if(r.sparse!==void 0){let t=Yl.SCALAR,n=Kl[r.sparse.indices.componentType],s=r.sparse.indices.byteOffset||0,c=r.sparse.values.byteOffset||0,l=new n(e[1],s,r.sparse.count*t),u=new o(e[2],c,r.sparse.count*a);i!==null&&(p=new ir(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(p.setX(t,u[e*a]),a>=2&&p.setY(t,u[e*a+1]),a>=3&&p.setZ(t,u[e*a+2]),a>=4&&p.setW(t,u[e*a+3]),a>=5)throw Error(`THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`)}p.normalized=d}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,i=t.images[r],a=this.textureLoader;if(i.uri){let e=n.manager.getHandler(i.uri);e!==null&&(a=e)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let r=this,i=this.json,a=i.textures[e],o=i.images[t],s=(o.uri||o.bufferView)+`:`+a.sampler;if(this.textureCache[s])return this.textureCache[s];let c=this.loadImageSource(t,n).then(function(t){t.flipY=!1,t.name=a.name||o.name||``,t.name===``&&typeof o.uri==`string`&&o.uri.startsWith(`data:image/`)===!1&&(t.name=o.uri);let n=(i.samplers||{})[a.sampler]||{};return t.magFilter=ql[n.magFilter]||1006,t.minFilter=ql[n.minFilter]||1008,t.wrapS=Jl[n.wrapS]||1e3,t.wrapT=Jl[n.wrapT]||1e3,t.generateMipmaps=!t.isCompressedTexture&&t.minFilter!==1003&&t.minFilter!==1006,r.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[s]=c,c}loadImageSource(e,t){let n=this,r=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(e=>e.clone());let a=r.images[e],o=self.URL||self.webkitURL,s=a.uri||``,c=!1;if(a.bufferView!==void 0)s=n.getDependency(`bufferView`,a.bufferView).then(function(e){c=!0;let t=new Blob([e],{type:a.mimeType});return s=o.createObjectURL(t),s});else if(a.uri===void 0)throw Error(`THREE.GLTFLoader: Image `+e+` is missing URI and bufferView`);let l=Promise.resolve(s).then(function(e){return new Promise(function(n,r){let a=n;t.isImageBitmapLoader===!0&&(a=function(e){let t=new Qn(e);t.needsUpdate=!0,n(t)}),t.load(vr.resolveURL(e,i.path),a,void 0,r)})}).then(function(e){return c===!0&&o.revokeObjectURL(s),nu(e,a),e.userData.mimeType=a.mimeType||cu(a.uri),e}).catch(function(e){throw console.error(`THREE.GLTFLoader: Couldn't load texture`,s),e});return this.sourceCache[e]=l,l}assignTexture(e,t,n,r){let i=this;return this.getDependency(`texture`,n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),i.extensions[J.KHR_TEXTURE_TRANSFORM]){let e=n.extensions===void 0?void 0:n.extensions[J.KHR_TEXTURE_TRANSFORM];if(e){let t=i.associations.get(a);a=i.extensions[J.KHR_TEXTURE_TRANSFORM].extendTexture(a,e),i.associations.set(a,t)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let e=`PointsMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new pt,hr.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,t.sizeAttenuation=!1,this.cache.add(e,t)),n=t}else if(e.isLine){let e=`LineBasicMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new rr,hr.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,this.cache.add(e,t)),n=t}if(r||i||a){let e=`ClonedMaterial:`+n.uuid+`:`;r&&(e+=`derivative-tangents:`),i&&(e+=`vertex-colors:`),a&&(e+=`flat-shading:`);let t=this.cache.get(e);t||(t=n.clone(),i&&(t.vertexColors=!0),a&&(t.flatShading=!0),r&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(n))),n=t}e.material=n}getMaterialType(){return c}loadMaterial(e){let t=this,n=this.json,r=this.extensions,i=n.materials[e],a,o={},s=i.extensions||{},c=[];if(s[J.KHR_MATERIALS_UNLIT]){let e=r[J.KHR_MATERIALS_UNLIT];a=e.getMaterialType(),c.push(e.extendParams(o,i,t))}else{let n=i.pbrMetallicRoughness||{};if(o.color=new W(1,1,1),o.opacity=1,Array.isArray(n.baseColorFactor)){let e=n.baseColorFactor;o.color.setRGB(e[0],e[1],e[2],an),o.opacity=e[3]}n.baseColorTexture!==void 0&&c.push(t.assignTexture(o,`map`,n.baseColorTexture,rt)),o.metalness=n.metallicFactor===void 0?1:n.metallicFactor,o.roughness=n.roughnessFactor===void 0?1:n.roughnessFactor,n.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,`metalnessMap`,n.metallicRoughnessTexture)),c.push(t.assignTexture(o,`roughnessMap`,n.metallicRoughnessTexture))),a=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,o)})))}i.doubleSided===!0&&(o.side=2);let l=i.alphaMode||$l.OPAQUE;if(l===$l.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===$l.MASK&&(o.alphaTest=i.alphaCutoff===void 0?.5:i.alphaCutoff)),i.normalTexture!==void 0&&a!==T&&(c.push(t.assignTexture(o,`normalMap`,i.normalTexture)),o.normalScale=new On(1,1),i.normalTexture.scale!==void 0)){let e=i.normalTexture.scale;o.normalScale.set(e,e)}if(i.occlusionTexture!==void 0&&a!==T&&(c.push(t.assignTexture(o,`aoMap`,i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&a!==T){let e=i.emissiveFactor;o.emissive=new W().setRGB(e[0],e[1],e[2],an)}return i.emissiveTexture!==void 0&&a!==T&&c.push(t.assignTexture(o,`emissiveMap`,i.emissiveTexture,rt)),Promise.all(c).then(function(){let n=new a(o);return i.name&&(n.name=i.name),nu(n,i),t.associations.set(n,{materials:e}),i.extensions&&tu(r,n,i),n})}createUniqueName(e){let t=ie.sanitizeNodeName(e||``);return t in this.nodeNamesUsed?t+`_`+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function i(e){return n[J.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(n){return fu(n,e,t)})}let a=[];for(let n=0,o=e.length;n<o;n++){let o=e[n],s=au(o),c=r[s];if(c)a.push(c.promise);else{let e;e=o.extensions&&o.extensions[J.KHR_DRACO_MESH_COMPRESSION]?i(o):fu(new gr,o,t),o.mode===Gl.TRIANGLE_STRIP?e=e.then(e=>dl(e,1)):o.mode===Gl.TRIANGLE_FAN&&(e=e.then(e=>dl(e,2))),r[s]={primitive:o,promise:e},a.push(e)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,i=n.meshes[e],a=i.primitives,o=[];for(let e=0,t=a.length;e<t;e++){let t=a[e].material===void 0?eu(this.cache):this.getDependency(`material`,a[e].material);o.push(t)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(n){let o=n.slice(0,n.length-1),s=n[n.length-1],c=[];for(let n=0,l=s.length;n<l;n++){let l=s[n],u=a[n],d,f=o[n];if(u.mode===Gl.TRIANGLES||u.mode===Gl.TRIANGLE_STRIP||u.mode===Gl.TRIANGLE_FAN||u.mode===void 0){let e=i.isSkinnedMesh===!0,t=l.hasAttribute(`skinIndex`)&&l.hasAttribute(`skinWeight`);e&&t===!1&&console.warn(`THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.`),d=e&&t?new yt(l,f):new z(l,f),d.isSkinnedMesh===!0&&d.normalizeSkinWeights()}else if(u.mode===Gl.LINES)d=new $t(l,f);else if(u.mode===Gl.LINE_STRIP)d=new Tn(l,f);else if(u.mode===Gl.LINE_LOOP)d=new Wt(l,f);else if(u.mode===Gl.POINTS)d=new at(l,f);else throw Error(`THREE.GLTFLoader: Primitive mode unsupported: `+u.mode);Object.keys(d.geometry.morphAttributes).length>0&&iu(d,i),d.name=t.createUniqueName(i.name||`mesh_`+e),nu(d,i),u.extensions&&tu(r,d,u),t.assignFinalMaterial(d),c.push(d)}for(let n=0,r=c.length;n<r;n++)t.associations.set(c[n],{meshes:e,primitives:n});if(c.length===1)return i.extensions&&tu(r,c[0],i),c[0];let l=new V;i.extensions&&tu(r,l,i),t.associations.set(l,{meshes:e});for(let e=0,t=c.length;e<t;e++)l.add(c[e]);return l})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn(`THREE.GLTFLoader: Missing camera parameters.`);return}return n.type===`perspective`?t=new Sr(Xe.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type===`orthographic`&&(t=new Ge(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),nu(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let e=0,r=t.joints.length;e<r;e++)n.push(this._loadNodeShallow(t.joints[e]));return t.inverseBindMatrices===void 0?n.push(null):n.push(this.getDependency(`accessor`,t.inverseBindMatrices)),Promise.all(n).then(function(e){let n=e.pop(),r=e,i=[],a=[];for(let e=0,o=r.length;e<o;e++){let o=r[e];if(o){i.push(o);let t=new dr;n!==null&&t.fromArray(n.array,e*16),a.push(t)}else console.warn(`THREE.GLTFLoader: Joint "%s" could not be found.`,t.joints[e])}return new fe(i,a)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],i=r.name?r.name:`animation_`+e,a=[],o=[],s=[],c=[],l=[];for(let e=0,t=r.channels.length;e<t;e++){let t=r.channels[e],n=r.samplers[t.sampler],i=t.target,u=i.node,d=r.parameters===void 0?n.input:r.parameters[n.input],f=r.parameters===void 0?n.output:r.parameters[n.output];i.node!==void 0&&(a.push(this.getDependency(`node`,u)),o.push(this.getDependency(`accessor`,d)),s.push(this.getDependency(`accessor`,f)),c.push(n),l.push(i))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(s),Promise.all(c),Promise.all(l)]).then(function(e){let t=e[0],a=e[1],o=e[2],s=e[3],c=e[4],l=[];for(let e=0,r=t.length;e<r;e++){let r=t[e],i=a[e],u=o[e],d=s[e],f=c[e];if(r===void 0)continue;r.updateMatrix&&r.updateMatrix();let p=n._createAnimationTracks(r,i,u,d,f);if(p)for(let e=0;e<p.length;e++)l.push(p[e])}let u=new Xt(i,void 0,l);return nu(u,r),u})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency(`mesh`,r.mesh).then(function(e){let t=n._getNodeRef(n.meshCache,r.mesh,e);return r.weights!==void 0&&t.traverse(function(e){if(e.isMesh)for(let t=0,n=r.weights.length;t<n;t++)e.morphTargetInfluences[t]=r.weights[t]}),t})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],i=n._loadNodeShallow(e),a=[],o=r.children||[];for(let e=0,t=o.length;e<t;e++)a.push(n.getDependency(`node`,o[e]));let s=r.skin===void 0?Promise.resolve(null):n.getDependency(`skin`,r.skin);return Promise.all([i,Promise.all(a),s]).then(function(e){let t=e[0],n=e[1],r=e[2];r!==null&&t.traverse(function(e){e.isSkinnedMesh&&e.bind(r,lu)});for(let e=0,r=n.length;e<r;e++)t.add(n[e]);if(t.userData.pivot!==void 0&&n.length>0){let e=t.userData.pivot,r=n[0];t.pivot=new H().fromArray(e),t.position.x-=e[0],t.position.y-=e[1],t.position.z-=e[2],r.position.set(0,0,0),delete t.userData.pivot}return t})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let i=t.nodes[e],a=i.name?r.createUniqueName(i.name):``,o=[],s=r._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return s&&o.push(s),i.camera!==void 0&&o.push(r.getDependency(`camera`,i.camera).then(function(e){return r._getNodeRef(r.cameraCache,i.camera,e)})),r._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){o.push(e)}),this.nodeCache[e]=Promise.all(o).then(function(t){let o;if(o=i.isBone===!0?new on:t.length>1?new V:t.length===1?t[0]:new M,o!==t[0])for(let e=0,n=t.length;e<n;e++)o.add(t[e]);if(i.name&&(o.userData.name=i.name,o.name=a),nu(o,i),i.extensions&&tu(n,o,i),i.matrix!==void 0){let e=new dr;e.fromArray(i.matrix),o.applyMatrix4(e)}else i.translation!==void 0&&o.position.fromArray(i.translation),i.rotation!==void 0&&o.quaternion.fromArray(i.rotation),i.scale!==void 0&&o.scale.fromArray(i.scale);if(!r.associations.has(o))r.associations.set(o,{});else if(i.mesh!==void 0&&r.meshCache.refs[i.mesh]>1){let e=r.associations.get(o);r.associations.set(o,{...e})}return r.associations.get(o).nodes=e,o}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,i=new V;n.name&&(i.name=r.createUniqueName(n.name)),nu(i,n),n.extensions&&tu(t,i,n);let a=n.nodes||[],o=[];for(let e=0,t=a.length;e<t;e++)o.push(r.getDependency(`node`,a[e]));return Promise.all(o).then(function(e){for(let t=0,n=e.length;t<n;t++){let n=e[t];n.parent===null?i.add(n):i.add(fl(n))}return r.associations=(e=>{let t=new Map;for(let[e,n]of r.associations)(e instanceof hr||e instanceof Qn)&&t.set(e,n);return e.traverse(e=>{let n=r.associations.get(e);n!=null&&t.set(e,n)}),t})(i),i})}_createAnimationTracks(e,t,n,r,i){let a=[],o=e.name?e.name:e.uuid,s=[];function c(e){e.morphTargetInfluences&&s.push(e.name?e.name:e.uuid)}Zl[i.path]===Zl.weights?(c(e),e.isGroup&&e.children.forEach(c)):s.push(o);let l;switch(Zl[i.path]){case Zl.weights:l=k;break;case Zl.rotation:l=Wn;break;case Zl.translation:case Zl.scale:l=Ot;break;default:switch(n.itemSize){case 1:l=k;break;default:l=Ot}}let u=r.interpolation===void 0?Xn:Ql[r.interpolation],d=this._getArrayFromAccessor(n);for(let e=0,n=s.length;e<n;e++){let n=new l(s[e]+`.`+Zl[i.path],t.array,d,u);r.interpolation===`CUBICSPLINE`&&this._createCubicSplineTrackInterpolant(n),a.push(n)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let e=su(t.constructor),n=new Float32Array(t.length);for(let r=0,i=t.length;r<i;r++)n[r]=t[r]*e;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(e){return new(this instanceof Wn?Wl:Hl)(this.times,this.values,this.getValueSize()/3,e)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function du(e,t,n){let r=t.attributes,i=new en;if(r.POSITION!==void 0){let e=n.json.accessors[r.POSITION],t=e.min,a=e.max;if(t!==void 0&&a!==void 0){if(i.set(new H(t[0],t[1],t[2]),new H(a[0],a[1],a[2])),e.normalized){let t=su(Kl[e.componentType]);i.min.multiplyScalar(t),i.max.multiplyScalar(t)}}else{console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`);return}}else return;let a=t.targets;if(a!==void 0){let e=new H,t=new H;for(let r=0,i=a.length;r<i;r++){let i=a[r];if(i.POSITION!==void 0){let r=n.json.accessors[i.POSITION],a=r.min,o=r.max;if(a!==void 0&&o!==void 0){if(t.setX(Math.max(Math.abs(a[0]),Math.abs(o[0]))),t.setY(Math.max(Math.abs(a[1]),Math.abs(o[1]))),t.setZ(Math.max(Math.abs(a[2]),Math.abs(o[2]))),r.normalized){let e=su(Kl[r.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)}}i.expandByVector(e)}e.boundingBox=i;let o=new gt;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,e.boundingSphere=o}function fu(e,t,n){let r=t.attributes,i=[];function a(t,r){return n.getDependency(`accessor`,t).then(function(t){e.setAttribute(r,t)})}for(let t in r){let n=Xl[t]||t.toLowerCase();n in e.attributes||i.push(a(r[t],n))}if(t.indices!==void 0&&!e.index){let r=n.getDependency(`accessor`,t.indices).then(function(t){e.setIndex(t)});i.push(r)}return Ze.workingColorSpace!==`srgb-linear`&&`COLOR_0`in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),nu(e,t),du(e,t,n),Promise.all(i).then(function(){return t.targets===void 0?e:ru(e,t.targets,n)})}var pu=(function(){var e=`b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb`,t=`b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb`,n=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),r=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!=`object`)return{supported:!1};var i=WebAssembly.validate(n)?s(t):s(e),a,o=WebAssembly.instantiate(i,{}).then(function(e){a=e.instance,a.exports.__wasm_call_ctors()});function s(e){for(var t=new Uint8Array(e.length),n=0;n<e.length;++n){var i=e.charCodeAt(n);t[n]=i>96?i-97:i>64?i-39:i+4}for(var a=0,n=0;n<e.length;++n)t[a++]=t[n]<60?r[t[n]]:(t[n]-60)*64+t[++n];return t.buffer.slice(0,a)}function c(e,t,n,r,i,a,o){var s=e.exports.sbrk,c=r+3&-4,l=s(c*i),u=s(a.length),d=new Uint8Array(e.exports.memory.buffer);d.set(a,u);var f=t(l,r,i,u,a.length);if(f==0&&o&&o(l,c,i),n.set(d.subarray(l,l+r*i)),s(l-s(0)),f!=0)throw Error(`Malformed buffer data: `+f)}var l={NONE:``,OCTAHEDRAL:`meshopt_decodeFilterOct`,QUATERNION:`meshopt_decodeFilterQuat`,EXPONENTIAL:`meshopt_decodeFilterExp`,COLOR:`meshopt_decodeFilterColor`},u={ATTRIBUTES:`meshopt_decodeVertexBuffer`,TRIANGLES:`meshopt_decodeIndexBuffer`,INDICES:`meshopt_decodeIndexSequence`},d=[],f=0;function p(e){var t={object:new Worker(e),pending:0,requests:{}};return t.object.onmessage=function(e){var n=e.data;t.pending-=n.count,t.requests[n.id][n.action](n.value),delete t.requests[n.id]},t}function m(e){for(var t=`self.ready = WebAssembly.instantiate(new Uint8Array([`+new Uint8Array(i)+`]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = `+g.name+`;`+c.toString()+g.toString(),n=new Blob([t],{type:`text/javascript`}),r=URL.createObjectURL(n),a=d.length;a<e;++a)d[a]=p(r);for(var a=e;a<d.length;++a)d[a].object.postMessage({});d.length=e,URL.revokeObjectURL(r)}function h(e,t,n,r,i){for(var a=d[0],o=1;o<d.length;++o)d[o].pending<a.pending&&(a=d[o]);return new Promise(function(o,s){var c=new Uint8Array(n),l=++f;a.pending+=e,a.requests[l]={resolve:o,reject:s},a.object.postMessage({id:l,count:e,size:t,source:c,mode:r,filter:i},[c.buffer])})}function g(e){var t=e.data;self.ready.then(function(e){if(!t.id)return self.close();try{var n=new Uint8Array(t.count*t.size);c(e,e.exports[t.mode],n,t.count,t.size,t.source,e.exports[t.filter]),self.postMessage({id:t.id,count:t.count,action:`resolve`,value:n},[n.buffer])}catch(e){self.postMessage({id:t.id,count:t.count,action:`reject`,value:e})}})}return{ready:o,supported:!0,useWorkers:function(e){m(e)},decodeVertexBuffer:function(e,t,n,r,i){c(a,a.exports.meshopt_decodeVertexBuffer,e,t,n,r,a.exports[l[i]])},decodeIndexBuffer:function(e,t,n,r){c(a,a.exports.meshopt_decodeIndexBuffer,e,t,n,r)},decodeIndexSequence:function(e,t,n,r){c(a,a.exports.meshopt_decodeIndexSequence,e,t,n,r)},decodeGltfBuffer:function(e,t,n,r,i,o){c(a,a.exports[u[i]],e,t,n,r,a.exports[l[o]])},decodeGltfBufferAsync:function(e,t,n,r,i){return d.length>0?h(e,t,n,u[r],l[i]):o.then(function(){var o=new Uint8Array(e*t);return c(a,a.exports[u[r]],o,e,t,n,a.exports[l[i]]),o})}}})(),mu={kensei:{height:2.4,runSpeed:6.5},rime:{height:2.3,runSpeed:6.5},brakk:{height:2.6,runSpeed:7.5},vesper:{height:2.4,runSpeed:6.5},solenne:{height:2.5,runSpeed:6.5},marksman:{height:2.3,fire:.167,runSpeed:6.9},kaelis:{height:2.4,runSpeed:6.5},tamsin:{height:2,runSpeed:7,lift:1.2},mossa:{height:2.9,runSpeed:6.5},gorran:{height:3,runSpeed:6.5},valken:{height:2.7,runSpeed:6.5},pyra:{height:2.3,runSpeed:6.5},malric:{height:2.5,runSpeed:6.5},astrap:{height:2.3,runSpeed:6.5},shendra:{height:2.6,runSpeed:6.5},selene:{height:2.6,runSpeed:7.5},kelvane:{height:2.7,runSpeed:6.5},zephar:{height:2.2,runSpeed:7,lift:1.2},leviath:{height:3,runSpeed:6.5},korrhoof:{height:3,runSpeed:6.5},dunescar:{height:2.2,runSpeed:6.5},zalumi:{height:2.3,runSpeed:6.5},nullblade:{height:2.5,runSpeed:6.5},slithar:{height:2.6,runSpeed:6.5},ursolk:{height:2.7,runSpeed:6.5},morrik:{height:2.6,runSpeed:6.5},gorehorn:{height:2.9,runSpeed:6.5},sanguis:{height:2.3,runSpeed:6.5},quillon:{height:2.4,runSpeed:6.5},mortain:{height:2.7,runSpeed:7},tresca:{height:2.6,runSpeed:7},vexis:{height:2.4,runSpeed:6.5},aerin:{height:2.4,runSpeed:6.5},virex:{height:2.4,runSpeed:6},nightfin:{height:2.2,runSpeed:6.5},drakon:{height:2.5,runSpeed:6.5},drakon_green:{height:3.4,runSpeed:6.5},drakon_red:{height:3.4,runSpeed:6.5},drakon_blue:{height:3.4,runSpeed:6.5},vodrak:{height:2.4,runSpeed:6.5},rhastok:{height:2.6,runSpeed:6.5},somnar:{height:2.3,runSpeed:6.5},netherix:{height:2.3,runSpeed:6.5},gravax:{height:2.7,runSpeed:6.5},luminos:{height:2.4,runSpeed:6.5},grimdal:{height:2.5,runSpeed:6.5},banshra:{height:2.4,runSpeed:6.5},skelkor:{height:2.7,runSpeed:6.5},nevrak:{height:2.8,runSpeed:6.5},kaldris:{height:2.9,runSpeed:6.5},gizmar:{height:2.1,runSpeed:6.5},veyra:{height:2.4,runSpeed:6.5},vypris:{height:2.8,runSpeed:6.5},ashkar:{height:2.5,runSpeed:6.5},pyrebone:{height:2.3,runSpeed:6.5},hushveil:{height:2.4,runSpeed:6.5},obsidra:{height:2.8,runSpeed:6.5},dryalis:{height:2.5,runSpeed:7},pyrice:{height:2.8,runSpeed:6.5},gorgara:{height:2.6,runSpeed:6},jahrak:{height:2.7,runSpeed:6.5},vorlash:{height:2.8,runSpeed:7},psylith:{height:2.4,runSpeed:6.5},skulkin:{height:2,runSpeed:6.5},gondrik:{height:2.3,runSpeed:6.5},scarabis:{height:2.2,runSpeed:6.5},lunara:{height:2.9,runSpeed:7},threadix:{height:2.4,runSpeed:6.5},voltrath:{height:2.8,runSpeed:6.5},nerissa:{height:2.6,runSpeed:6.5},lancyr:{height:2.5,runSpeed:6.5},terrox:{height:2.6,runSpeed:6.5},terrox_meta:{height:3.4,runSpeed:6.5},chaoryn:{height:2.9,runSpeed:7},aquor:{height:2.6,runSpeed:6},vulfgar:{height:2.7,runSpeed:6.5},vulfgar_wolf:{height:2.2,runSpeed:7},razzik:{height:2.8,runSpeed:6},ghoulex:{height:2,runSpeed:6.5},nethrak:{height:2.5,runSpeed:6.5},seerath:{height:2.6,runSpeed:6.5},mercurine:{height:2.7,runSpeed:6.5},spirit_wolf:{height:1.5,runSpeed:7},butchar:{height:2.9,runSpeed:6},rivetrix:{height:2.5,runSpeed:6.5},bouldar:{height:2.9,runSpeed:6},admirax:{height:2.6,runSpeed:6.5},magnoth:{height:2.8,runSpeed:6.5},jinzor:{height:3,runSpeed:7},ymirak:{height:2.7,runSpeed:6.5},barkhold:{height:3.6,runSpeed:5.5},kaolith:{height:2.6,runSpeed:6.5},shredrik:{height:2.9,runSpeed:6},wispyr:{height:1.6,runSpeed:6.5,lift:1.2},ignaris:{height:2.8,runSpeed:6.5,lift:.8},blastkin:{height:1.8,runSpeed:6},chronar:{height:2.7,runSpeed:6.5},galvorn:{height:2.5,runSpeed:6.5},emberon:{height:2.5,runSpeed:6.5},arcanor:{height:2.5,runSpeed:6.5},thaumar:{height:2.6,runSpeed:6.5},infernox:{height:3.2,runSpeed:6.5},ogrund:{height:2.8,runSpeed:6},nocturn:{height:3,runSpeed:6.5},rotgar:{height:2.4,runSpeed:6},rotgar_golem:{height:3.3,runSpeed:6},titanor:{height:3,runSpeed:6.5},fatewyn:{height:2.3,runSpeed:6.5},glacivyr:{height:2.8,runSpeed:7,lift:1},delvik:{height:2,runSpeed:6.5},brewgar:{height:2.8,runSpeed:6.5},sylvrak:{height:2.7,runSpeed:6.5},gargolth:{height:2.6,runSpeed:7,lift:1},rexmar:{height:2.7,runSpeed:6.5},arachnis:{height:2,runSpeed:7},zealorn:{height:2.6,runSpeed:6.5},zetrix:{height:2.5,runSpeed:6.5},azgaroth:{height:3.6,runSpeed:6},faelix:{height:2.2,runSpeed:7,lift:1.2},forge_spirit:{height:1.8,runSpeed:6.5},astral_spirit:{height:2.8,runSpeed:7},spirit_bear:{height:2.6,runSpeed:6.5},brew_earth:{height:2.7,runSpeed:6.5},brew_storm:{height:2.7,runSpeed:6.5},brew_fire:{height:2.7,runSpeed:6.5},familiar:{height:2,runSpeed:7.5,lift:.8},hawk:{height:1.4,runSpeed:7,lift:1.6},boar:{height:1.5,runSpeed:6.5},spiderling:{height:.9,runSpeed:7},spiderite:{height:.6,runSpeed:7},creep_radiant_melee:{height:2.1,runSpeed:5},creep_radiant_ranged:{height:1.9,runSpeed:5},creep_dire_melee:{height:1.6,runSpeed:5.5},creep_dire_ranged:{height:1.9,runSpeed:5},kobold:{height:1.3,runSpeed:5},koboldChief:{height:1.6,runSpeed:5},wolf:{height:1.4,runSpeed:6},alphaWolf:{height:1.8,runSpeed:6},centaur:{height:2.9,runSpeed:6.5},outrunner:{height:2.4,runSpeed:6.5},trollShaman:{height:2,runSpeed:5},boss:{height:4.8,runSpeed:5},tower_radiant:{width:4.6},tower_dire:{width:4.6},barracks_radiant:{width:6.4},barracks_dire:{width:6},ancient_radiant:{width:9.5},ancient_dire:{width:9.5},fountain_radiant:{width:7.5},fountain_dire:{width:7.5},ward:{height:2},plague_ward:{height:1.8},death_ward:{height:2.4},nether_ward:{height:1.6},golem:{height:3.2,runSpeed:6.5},courier:{height:1.6,runSpeed:7},shop_ancient_of_wonders:{width:4.2},shop_tomb_of_relics:{width:4.2},shop_cache_of_quelthelas:{width:3.8},shop_demon_relics:{width:3.6},shop_black_market:{width:4.2},shop_goblin_laboratory:{width:3.8},shop_goblin_merchant:{width:3.8},shop_furbolg_hut:{width:3.6},shop_sena:{height:2},shop_weapons_dealer:{height:2.2},shop_gateway_relics:{height:2},shop_supportive_vestments:{height:2},shop_arcane_sanctum:{height:2.2},shop_protectorate:{height:2.3},shop_ancient_weaponry:{height:2.4},shop_enchanted_artifacts:{height:1.6,lift:.8},shop_secret_shop:{height:2.2},tree_radiant:{height:5.4},tree_dire:{height:5.4}},hu=[`radiant`,`dire`],gu=new Set([`turret`,`psionic_trap`,`power_cog`,`frozen_sigil`,`land_mine`,`stasis_trap`,`remote_mine`,`stone_remnant`,`fire_spirit`,`io_spirit`,`chakram`,`supernova`,`tombstone`]),_u=new Set([`spirit_bear`,`brew_earth`,`brew_storm`,`brew_fire`,`familiar`,`hawk`,`boar`,`spiderling`,`spiderite`]);function vu(e){switch(e.kind){case`hero`:{let t=e.morph?.model;return[t&&yu.has(t)?t:e.def.id]}case`creep`:return[`creep_${hu[e.team]}_${e.variant}`,e.isSuper?{height:mu[`creep_${hu[e.team]}_${e.variant}`].height*1.25}:null];case`neutral`:return[e.model];case`boss`:return[`boss`];case`tower`:case`barracks`:case`ancient`:case`fountain`:return[`${e.kind}_${hu[e.team]}`];case`ward`:return[`ward`];case`courier`:return[`courier`];case`shop`:return e.vendor?[`shop_${e.vendor}`]:null;case`summon`:return gu.has(e.model)?null:e.model===`fire_remnant`?[`emberon`,{height:2.4}]:e.model===`plague_ward`||e.model===`death_ward`||e.model===`nether_ward`||e.model===`golem`||e.model===`spirit_wolf`?[e.model]:e.model===`eidolon`?[`gravax`,{height:1.5}]:e.model===`forge_spirit`||e.model===`astral_spirit`||_u.has(e.model)?[e.model]:e.model===`tomb_zombie`?[`rotgar`,{height:1.7}]:e.model?.startsWith(`creep_`)&&mu[e.model]?[e.model]:e.model===`necro_warrior`||e.model===`necro_archer`?[`creep_dire_${e.model===`necro_archer`?`ranged`:`melee`}`]:[`creep_radiant_melee`,e.model===`elder`?{height:3.6}:null];default:return null}}var yu=new Map,bu=null,xu=Object.keys(mu).length;function Su(e=()=>{}){if(bu)return bu;let t=new ml().setMeshoptDecoder(pu);return bu=Promise.all(Object.entries(mu).map(([n,r])=>t.loadAsync(`models/${n}.glb`).then(e=>{let t=e.scene,i=e.animations.find(e=>e.name===`idle`);i&&new Rn(t).clipAction(i).play().getMixer().update(0),t.updateMatrixWorld(!0);let a=new en().setFromObject(t,!0);t.traverse(e=>{e.isMesh&&e.material.name===`additive`&&wu(e.material)});let o=a.getSize(new H).max(new H(.001,.001,.001));yu.set(n,{scene:t,clips:e.animations,size:o,minY:a.min.y,cfg:r,teamMats:new Map})}).catch(()=>{}).finally(e))),bu}function Cu(e,t){return t.width?t.width/Math.max(e.x,e.z):t.height/e.y}function wu(e){e.blending=2,e.depthWrite=!1,e.transparent=!0}var Tu=e=>!!e&&yu.has(e),Eu=e=>{let t=vu(e);return!!t&&yu.has(t[0])};function Du(e,t,n){let r=`${t.uuid}:${n}`;if(e.teamMats.has(r))return e.teamMats.get(r);let i=t.map.image,a=document.createElement(`canvas`);a.width=i.width,a.height=i.height;let o=a.getContext(`2d`);o.fillStyle=`#${(yn[n]??16777215).toString(16).padStart(6,`0`)}`,o.fillRect(0,0,a.width,a.height),o.drawImage(i,0,0);let s=new fr(a);s.flipY=!1,s.colorSpace=rt,s.wrapS=s.wrapT=de;let c=t.clone();return c.map=s,e.teamMats.set(r,c),c}function Ou(e){let[t,n]=vu(e),r=yu.get(t),i={...r.cfg,...n},a=fl(r.scene),o=Cu(r.size,i);i.height=r.size.y*o,a.scale.setScalar(o),a.position.y=(i.lift??0)-Math.max(0,r.minY)*o,a.traverse(t=>{t.isMesh&&(t.castShadow=t.material.name!==`additive`,t.frustumCulled=!1,t.material.name===`teamcolor`&&(t.material=Du(r,t.material,e.team)))});let s=new Rn(a),c={};for(let e of r.clips)c[e.name]=s.clipAction(e);c.attack??=c.cast,c.cast??=c.attack;for(let e of[`attack`,`cast`,`death`])c[e]&&(c[e].setLoop(Ft,1),c[e].clampWhenFinished=!0);return i.fire===void 0&&(i.fire=(c.attack?.getClip().duration??.5)*.4),i.runSpeed??=6,{model:a,mixer:s,actions:c,cfg:i}}function ku(e){let t=yu.get(e);if(!t)return null;let n=Cu(t.size,t.cfg),r=[];return t.scene.traverse(e=>{if(!e.isMesh)return;let t=e.geometry.clone();for(let[e,n]of Object.entries(t.attributes)){if(!n.normalized&&n.array instanceof Float32Array&&!n.isInterleavedBufferAttribute)continue;let r=new Float32Array(n.count*n.itemSize);for(let e=0;e<n.count;e++)for(let t=0;t<n.itemSize;t++)r[e*n.itemSize+t]=n.getComponent(e,t);t.setAttribute(e,new ir(r,n.itemSize))}if(e.isSkinnedMesh){let n=t.attributes.position,r=new H;for(let t=0;t<n.count;t++)e.applyBoneTransform(t,r.fromBufferAttribute(n,t)),n.setXYZ(t,r.x,r.y,r.z)}t.deleteAttribute(`skinIndex`),t.deleteAttribute(`skinWeight`),t.applyMatrix4(e.matrixWorld),t.scale(n,n,n),r.push({geometry:t,material:e.material})}),r}var Au=`fx/doodads/terrain/cliffs/`,ju={CCgr:`fx/replaceabletextures/cliff/c_cliff1.png`,CCdi:`fx/replaceabletextures/cliff/c_cliff0.png`},Mu={CCgr:`Cgrs`,CCdi:`Cdrt`},{nodes:Nu,step:Pu,heights:Fu,layers:Iu,ramp:Lu,cliffTex:Ru,cliffVar:zu,layerStep:Bu,cliffset:Vu}=ae,Hu=Bu/128,Uu=(e,t)=>t*Nu+e,Wu=e=>Fu[e]-(Iu[e]-2)*Bu;function Gu(){let e=[];for(let t=0;t<Nu-1;t++)for(let n=0;n<Nu-1;n++){let r=Uu(n,t+1),i=Uu(n,t),a=Uu(n+1,t),o=Uu(n+1,t+1),s=[Iu[r],Iu[i],Iu[a],Iu[o]],c=Math.min(...s);if(Math.max(...s)===c||Lu[r]&&Lu[i]&&Lu[a]&&Lu[o])continue;let l=[r,i,a,o].map(e=>Ru[e]).find(e=>e!==15)??0;e.push({i:n,j:t,base:c,letters:s.map(e=>String.fromCharCode(97+e-c)).join(``),variation:zu[r],type:Vu[l]??Vu[0]})}return e}function Ku(){let e=new Int8Array(Nu*Nu).fill(-1),t=new Map(Gu().map(e=>[e.j*(Nu-1)+e.i,e]));for(let n=1;n<Nu-1;n++)for(let r=1;r<Nu-1;r++)for(let i=-1;i<1&&e[Uu(r,n)]<0;i++)for(let a=-1;a<1;a++){let o=t.get((n+i)*(Nu-1)+r+a);if(o){e[Uu(r,n)]=ae.tileset.indexOf(Mu[o.type]??Mu.CCgr);break}}return e}function qu(e){let t=Sn(e);return t.flipY=!1,t.colorSpace=rt,t.wrapS=t.wrapT=de,t.anisotropy=4,t}var Ju=null;function Yu(){return Ju??=(async()=>{let e;try{let t=await It(`${Au}index.json`);if(!t)return null;e=new Set(JSON.parse(new TextDecoder().decode(t)))}catch{return null}let t=Gu(),n=t=>{let n=0;for(;e.has(`cliffs${t.letters}${n}`);)n++;return n?`cliffs${t.letters}${t.variation%n}`:null},r=[...new Set(t.map(n).filter(Boolean))],i=new Map;return await Promise.all([...r.map(async e=>{try{let t=await It(`${Au}${e}.mdx`);t&&i.set(e,er(t))}catch{}}),...Object.values(ju).map(e=>It(e))]),{cells:t,fileOf:n,models:i}})()}async function Xu(e){let t=await Yu();if(!t)return null;let{cells:n,fileOf:r,models:i}=t,a=new Map,o=new Set;for(let e of n){let t=i.get(r(e));if(!t)continue;let n=a.get(e.type);n||(n={pos:[],nrm:[],uv:[],idx:[]},a.set(e.type,n));let s=(e.i+1)*Pu,c=(e.j+1)*Pu,l=Wu(Uu(e.i,e.j)),u=Wu(Uu(e.i+1,e.j)),d=Wu(Uu(e.i,e.j+1)),f=Wu(Uu(e.i+1,e.j+1)),p=(e.base-2)*Bu;for(let e of t.geosets){let t=n.pos.length/3;for(let t=0;t<e.pos.length/3;t++){let r=e.pos[t*3],i=e.pos[t*3+1],a=e.pos[t*3+2],o=s+r*Hu,m=c-i*Hu,h=Math.max(0,Math.min(1,(r+128)/128)),g=Math.max(0,Math.min(1,i/128)),_=(d+(f-d)*h)*(1-g)+(l+(u-l)*h)*g;n.pos.push(o,_+p+a*Hu,m),n.nrm.push(e.nrm[t*3],e.nrm[t*3+2],-e.nrm[t*3+1]),n.uv.push(e.uv[t*2],e.uv[t*2+1])}for(let r of e.idx)n.idx.push(t+r)}o.add(e.j*(Nu-1)+e.i)}for(let[t,n]of a){let r=new gr;r.setAttribute(`position`,new ut(n.pos,3)),r.setAttribute(`normal`,new ut(n.nrm,3)),r.setAttribute(`uv`,new ut(n.uv,2)),r.setIndex(n.idx);let i=new z(r,new c({map:qu(ju[t]??ju.CCgr),roughness:.92,metalness:0}));i.castShadow=!0,i.receiveShadow=!0,i.name=`cliffs-${t}`,e.add(i)}return o}var Zu=[`Cdrt`,`Cdrd`,`Cvin`,`Cgrs`,`Clvg`,`Zvin`,`Zbks`,`Ndrd`],Qu=ae.step,$u=ae.nodes,ed=512,td=256,nd=null,rd=()=>nd;function id(){return id.p?id.p:id.p=new Promise(e=>{let t=new Image;t.onload=()=>{if(t.width!==ed||t.height!==td*Zu.length)return e(null);let n=document.createElement(`canvas`).getContext(`2d`,{willReadFrequently:!0});n.canvas.width=t.width,n.canvas.height=t.height,n.drawImage(t,0,0);let r=new Uint8Array(n.getImageData(0,0,t.width,t.height).data.buffer),i=(e,t,n)=>((e*td+n)*ed+t)*4;nd={data:r,extended:Zu.map((e,t)=>r[i(t,300,32)+3]>0),avg:Zu.map((e,t)=>{let n=[0,0,0];for(let e=192;e<256;e++)for(let a=192;a<256;a++)for(let o=0;o<3;o++)n[o]+=r[i(t,a,e)+o];return n.map(e=>e/4096)})},e(nd)},t.onerror=()=>e(null),t.src=`terrain/ground.png`})}function ad(){let e=new Uint8Array($u*$u*2),t=Ku();for(let n=0;n<$u*$u;n++)e[n*2]=t[n]>=0?t[n]:ae.tiles[n],e[n*2+1]=ae.variations[n]%18;return e}var od=(e,t)=>e?t<16?16+t:t===16?15:0:t===0?0:15;function sd(e,t,n,r,i,a){let o=Math.min(e,t,n,r);a.length=0,a.push(o,od(nd.extended[o],i));for(let i=o+1;i<Zu.length;i++){let o=r===i|(n===i)<<1|(t===i)<<2|(e===i)<<3;o&&a.push(i,o)}return a}function cd(e){let t=ad(),n=document.createElement(`canvas`);n.width=n.height=512;let r=n.getContext(`2d`),i=r.createImageData(512,512),a=[],o=(e,n)=>t[(n*$u+e)*2];for(let e=0;e<512;e++)for(let n=0;n<512;n++){let r=(n+.5)/512*($u-1),s=(e+.5)/512*($u-1),c=Math.min($u-2,Math.floor(r)),l=Math.min($u-2,Math.floor(s)),u=Math.floor((r-c)*64),d=Math.floor((s-l)*64);sd(o(c,l),o(c+1,l),o(c,l+1),o(c+1,l+1),t[(l*$u+c)*2+1],a);let f=[0,0,0];for(let e=0;e<a.length;e+=2){let t=a[e],n=a[e+1],r=n<16?n%4:4+(n-16)%4,i=n<16?n>>2:n-16>>2,o=((t*td+i*64+d)*ed+r*64+u)*4,s=e?nd.data[o+3]/255:1;for(let e=0;e<3;e++)f[e]+=((nd.data[o+e]+nd.avg[t][e])*.5-f[e])*s}let p=(e*512+n)*4;for(let e=0;e<3;e++)i.data[p+e]=f[e]*1.2;i.data[p+3]=255}return r.putImageData(i,0,0),n.tileGrid=t,n}function ld(e){let t=new De(new Uint8Array($u*$u*4),$u,$u,r);for(let n=0;n<$u*$u;n++)t.image.data[n*4]=e[n*2],t.image.data[n*4+1]=e[n*2+1];t.needsUpdate=!0;let n=new Se(nd.data,ed,td,Zu.length);n.colorSpace=rt,n.minFilter=kn,n.generateMipmaps=!0,n.anisotropy=8,n.needsUpdate=!0;let i=nd.extended.reduce((e,t,n)=>e|(t?1<<n:0),0),a={uNodes:{value:t},uTiles:{value:n}},o=new c({roughness:.95,metalness:0});return o.onBeforeCompile=e=>{Object.assign(e.uniforms,a),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec2 vGroundXZ;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vGroundXZ = (modelMatrix * vec4(transformed, 1.0)).xz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec2 vGroundXZ;
uniform sampler2D uNodes;
uniform highp sampler2DArray uTiles;
const vec2 CELL_UV = vec2(64.0 / ${ed}.0, 64.0 / ${td}.0);
// One 64px cell of a tile texture; gradients from the continuous grid position so mips don't pop at seams.
vec4 tileCell(int layer, int cell, vec2 f, vec2 gx, vec2 gy) {
  vec2 origin = cell < 16 ? vec2(cell % 4, cell / 4) : vec2(4 + (cell - 16) % 4, (cell - 16) / 4);
  vec2 uv = (origin + clamp(f, 0.5 / 64.0, 1.0 - 0.5 / 64.0)) * CELL_UV;
  return textureGrad(uTiles, vec3(uv, float(layer)), gx, gy);
}
int nodeTile(ivec2 p) { return int(texelFetch(uNodes, p, 0).r * 255.0 + 0.5); }`).replace(`#include <map_fragment>`,`{
  vec2 g = clamp(vGroundXZ / ${Qu.toFixed(2)}, vec2(0.0), vec2(${$u-1}.0 - 0.001));
  ivec2 c = ivec2(floor(g));
  vec2 f = g - vec2(c);
  vec2 gx = dFdx(g) * CELL_UV, gy = dFdy(g) * CELL_UV;
  int tl = nodeTile(c), tr = nodeTile(c + ivec2(1, 0)), bl = nodeTile(c + ivec2(0, 1)), br = nodeTile(c + ivec2(1, 1));
  int lo = min(min(tl, tr), min(bl, br));
  int v = int(texelFetch(uNodes, c, 0).g * 255.0 + 0.5);
  bool ext = ((${i} >> lo) & 1) == 1;
  int full = ext ? (v < 16 ? 16 + v : (v == 16 ? 15 : 0)) : (v == 0 ? 0 : 15);
  vec3 col = tileCell(lo, full, f, gx, gy).rgb;
  for (int l = lo + 1; l < ${Zu.length}; l++) {
    int bits = (br == l ? 1 : 0) | (bl == l ? 2 : 0) | (tr == l ? 4 : 0) | (tl == l ? 8 : 0);
    if (bits == 0) continue;
    vec4 t = tileCell(l, bits, f, gx, gy);
    col = mix(col, t.rgb, t.a);
  }
  diffuseColor.rgb *= col * 1.2; // WC3 lights its ground brightly
}`)},o.customProgramCacheKey=()=>`wc3-ground`,o}var ud=1024,Y=ud/m;function dd(e){return rd()?cd(e??Br().trees):fd()}function fd(){let e=document.createElement(`canvas`);e.width=e.height=ud;let t=e.getContext(`2d`),n=we(7),r=t.createLinearGradient(0,ud,ud,0);r.addColorStop(0,`#3f6b2f`),r.addColorStop(.5,`#3a5f2c`),r.addColorStop(1,`#3b3f2a`),t.fillStyle=r,t.fillRect(0,0,ud,ud);for(let e=0;e<2600;e++){let e=n()*ud,r=n()*ud,i=4+n()*18;t.fillStyle=`rgba(${n()<.5?`30,60,20`:`90,120,50`},${.06+n()*.08})`,t.beginPath(),t.arc(e,r,i,0,Math.PI*2),t.fill()}let i=[`rgba(150,190,140,0.55)`,`rgba(110,70,60,0.6)`];Vt.forEach((e,n)=>{let r=t.createRadialGradient(e.x*Y,e.z*Y,10,e.x*Y,e.z*Y,44*Y);r.addColorStop(0,i[n]),r.addColorStop(1,`rgba(0,0,0,0)`),t.fillStyle=r,t.beginPath(),t.arc(e.x*Y,e.z*Y,44*Y,0,Math.PI*2),t.fill(),t.fillStyle=n===0?`#9a9a82`:`#6d5a52`,t.beginPath(),t.arc(e.x*Y,e.z*Y,13*Y,0,Math.PI*2),t.fill()}),ar.forEach((e,n)=>{t.fillStyle=n===0?`#a7b39a`:`#7d625a`,t.beginPath(),t.arc(e.x*Y,e.z*Y,9*Y,0,Math.PI*2),t.fill()}),t.lineCap=`round`,t.strokeStyle=`#2b5560`,t.lineWidth=11*Y,t.beginPath(),t.moveTo(-10,-10),t.lineTo(1034,1034),t.stroke(),t.strokeStyle=`#3c7f8f`,t.lineWidth=7*Y,t.beginPath(),t.moveTo(-10,-10),t.lineTo(1034,1034),t.stroke(),t.lineJoin=`round`;let a=(e,n)=>{t.strokeStyle=e,t.lineWidth=n*Y;for(let e of Object.values(pr)){t.beginPath(),t.moveTo(e[0].x*Y,e[0].z*Y);for(let n of e.slice(1))t.lineTo(n.x*Y,n.z*Y);t.stroke()}for(let e=0;e<2;e++){let n=Vt[e];for(let r of Object.values(pr)){let i=e===0?r[0]:r[r.length-1];t.beginPath(),t.moveTo(n.x*Y,n.z*Y),t.lineTo(i.x*Y,i.z*Y),t.stroke()}}};a(`#6b5a3c`,9),a(`#8a7550`,6.5);let o=(e,n,r,i,a)=>{let o=t.createRadialGradient(e*Y,n*Y,0,e*Y,n*Y,r*Y);o.addColorStop(0,i),o.addColorStop(1,a),t.fillStyle=o,t.beginPath(),t.arc(e*Y,n*Y,r*Y,0,Math.PI*2),t.fill()};for(let e of zr())o(e.x,e.z,5.5,`rgba(110,88,55,0.75)`,`rgba(110,88,55,0)`);o(Zt.x,Zt.z,8,`rgba(40,34,30,0.85)`,`rgba(40,34,30,0)`);for(let e=0;e<1500;e++)t.fillStyle=`rgba(60,45,25,${n()*.15})`,t.fillRect(n()*ud,n()*ud,3,3);return e}function pd(e=0){let{nodes:t,step:n,heights:r}=ae,i=new Float32Array(t*t*3),a=new Float32Array(t*t*2);for(let o=0;o<t;o++)for(let s=0;s<t;s++){let c=o*t+s;i[c*3]=s*n,i[c*3+1]=r[c]+e,i[c*3+2]=o*n,a[c*2]=s/(t-1),a[c*2+1]=1-o/(t-1)}let o=new gr;return o.setAttribute(`position`,new ir(i,3)),o.setAttribute(`uv`,new ir(a,2)),o.setIndex(md()),o.computeVertexNormals(),o}function md(e=null){let{nodes:t}=ae,n=new Uint32Array((t-1)*(t-1)*6),r=0;for(let i=0;i<t-1;i++)for(let a=0;a<t-1;a++){if(e?.has(i*(t-1)+a))continue;let o=i*t+a,s=o+1,c=o+t,l=c+1;n[r++]=o,n[r++]=c,n[r++]=s,n[r++]=s,n[r++]=c,n[r++]=l}return new ir(r===n.length?n:n.slice(0,r),1)}var hd={shallowMin:[200,255,255,10],shallowMax:[200,255,255,219],deepMin:[200,255,255,219],deepMax:[255,255,255,250],minDepth:10/128,deepLevel:64/128,maxDepth:72/128,frames:45,fps:12},gd=[.25,.42,.62];function _d(e){let t=hd,n=(e,t,n)=>e.map((e,r)=>(e+(t[r]-e)*n)/255);return e<=t.deepLevel?n(t.shallowMin,t.shallowMax,Math.max(0,e-t.minDepth)/(t.deepLevel-t.minDepth)):n(t.deepMin,t.deepMax,Math.min(e-t.deepLevel,t.maxDepth-t.deepLevel)/(t.maxDepth-t.deepLevel))}var vd=null;function yd(){return vd??=new Promise(e=>{let t=new Image;t.onload=()=>e(t.height===t.width*hd.frames?t:null),t.onerror=()=>e(null),t.src=`terrain/water.png`})}function bd(e){yd().then(t=>{if(!t)return;let n=t.width;e(Array.from({length:hd.frames},(e,r)=>{let i=document.createElement(`canvas`);i.width=i.height=n,i.getContext(`2d`).drawImage(t,0,-r*n);let a=new fr(i);return a.colorSpace=rt,a.wrapS=a.wrapT=de,a.anisotropy=4,a}))})}function xd(){let{nodes:e,step:t,heights:n,water:r,waterLevel:i,layerStep:a}=ae;if(i==null)return null;let o=[],s=[],l=[],u=[],d=new Map,f=(r,c)=>{let u=c*e+r;if(d.has(u))return d.get(u);let f=_d(Math.max(0,(i-n[u])/a));return o.push(r*t,i,c*t),l.push(r,c),s.push(f[0],f[1],f[2],f[3]),d.set(u,o.length/3-1),o.length/3-1};for(let t=0;t<e-1;t++)for(let n=0;n<e-1;n++){let i=t*e+n;if(!(r[i]||r[i+1]||r[i+e]||r[i+e+1]))continue;let a=f(n,t),o=f(n+1,t),s=f(n,t+1),c=f(n+1,t+1);u.push(a,s,o,o,s,c)}if(!u.length)return null;let p=new gr;p.setAttribute(`position`,new ut(o,3)),p.setAttribute(`color`,new ut(s,4)),p.setAttribute(`uv`,new ut(l,2)),p.setIndex(u),p.computeVertexNormals();let m=new c({color:new W(...gd),vertexColors:!0,transparent:!0,roughness:.5,metalness:0,depthWrite:!1}),h=new z(p,m);return bd(e=>{m.color.setScalar(1.2),m.map=e[0],m.needsUpdate=!0,h.onBeforeRender=()=>{m.map=e[Math.floor(performance.now()/1e3*hd.fps)%hd.frames]}}),h.renderOrder=2,h.name=`water`,h}function Sd(e,t,n){let r;if(t.tileGrid&&rd())r=ld(t.tileGrid);else{let e=new fr(t);e.colorSpace=rt,e.anisotropy=4,r=new c({map:e,roughness:.95,metalness:0})}let i=new z(pd(),r);i.receiveShadow=!0,Xu(e).then(e=>{e?.size&&i.geometry.setIndex(md(e))}),i.name=`ground`,e.add(i);let a=new z(new lt(m*4,m*4),new c({color:t.tileGrid?1779232:1912344,roughness:1}));a.rotation.x=-Math.PI/2,a.position.set(m/2,Math.min(...ae.heights)-.5,m/2),e.add(a);let o=xd();o&&e.add(o);let s=[];for(let e=0;e<2;e++)for(let t=0;t<Cd;t++)s.push({x:0,z:0,s:1,h:.5,k:e});let l=n.concat(s),u=l.map(()=>[]);return Ad(e,l,u)||jd(e,l,u),{ground:i,trees:new Od(u,n.length)}}var Cd=64,wd=new _e,Td=new H(0,1,0);function Ed(e,t){return wd.setFromAxisAngle(Td,e.h*Math.PI*2),t.compose(new H(e.x,B(e.x,e.z),e.z),wd,new H(e.s,e.s*(.9+e.h*.3),e.s))}var Dd=new dr().makeScale(0,0,0),Od=class{constructor(e,t){this.slots=e,this.hidden=new Set,this.base=t,this.free=[[],[]];for(let e=0;e<128;e++)this.free[e<Cd?0:1].push(t+e),this.setVisible(t+e,!1);this.used=new Map}setVisible(e,t){if(this.hidden.has(e)!==!t){t?this.hidden.delete(e):this.hidden.add(e);for(let[n,r,i]of this.slots[e]??[])n.setMatrixAt(r,t?i:Dd),n.instanceMatrix.needsUpdate=!0}}sync(e,t=[]){for(let t=0;t<this.base&&t<e.length;t++)this.setVisible(t,!e[t].dead);let n=new Set;for(let r of t)e[r]&&!e[r].dead&&n.add(e[r]);for(let[e,t]of this.used)n.has(e)||(this.setVisible(t,!1),this.used.delete(e),this.free[t<this.base+Cd?0:1].push(t));for(let e of n){if(this.used.has(e))continue;let t=e.k??0,n=this.free[t].pop()??this.free[1-t].pop();if(n!==void 0){this.used.set(e,n);for(let t of this.slots[n])Ed(e,t[2]);this.hidden.add(n),this.setVisible(n,!0)}}}},kd=e=>(e.x+(m-e.z))/(m*2);function Ad(e,t,n){let r=[ku(`tree_radiant`),ku(`tree_dire`)];if(!r[0]||!r[1])return!1;let i=new dr,a=new _e,o=new H(0,1,0),s=new W;return r.forEach((r,c)=>{let l=[];t.forEach((e,t)=>{(e.k??+(kd(e)>.5))===c&&l.push(t)});for(let{geometry:c,material:u}of r){let r=new $n(c,u,l.length);l.forEach((e,c)=>{let l=t[e];a.setFromAxisAngle(o,l.h*Math.PI*2),i.compose(new H(l.x,B(l.x,l.z),l.z),a,new H(l.s,l.s*(.9+l.h*.3),l.s)),r.setMatrixAt(c,i),n[e].push([r,c,i.clone()]),s.setScalar(.85+l.h*.15),r.setColorAt(c,s)}),r.castShadow=!0,r.instanceMatrix.needsUpdate=!0,e.add(r)}}),!0}function jd(e,t,n){let r=t.length,a=new i(.22,.32,1.4,6);a.translate(0,.7,0);let o=new C(1.25,2.6,7);o.translate(0,2.6,0);let s=new C(.9,2,7);s.translate(0,3.7,0);let l=new $n(a,new c({color:5979426,roughness:1}),r),u=new c({color:16777215,roughness:.9,flatShading:!0}),d=new $n(o,u,r),f=new $n(s,u,r),p=new dr,m=new _e,h=new W;t.forEach((e,t)=>{let r=e.s;m.setFromAxisAngle(new H(0,1,0),e.h*Math.PI*2),p.compose(new H(e.x,B(e.x,e.z),e.z),m,new H(r,r*(.9+e.h*.3),r)),l.setMatrixAt(t,p),d.setMatrixAt(t,p),f.setMatrixAt(t,p);let i=p.clone();n[t].push([l,t,i],[d,t,i],[f,t,i]);let a=kd(e);h.setHSL(.27-a*.12+e.h*.04,.45-a*.15,.22+e.h*.08),d.setColorAt(t,h),h.offsetHSL(0,0,.05),f.setColorAt(t,h)});for(let t of[l,d,f])t.castShadow=!0,t.receiveShadow=!1,t.instanceMatrix.needsUpdate=!0,e.add(t)}var Md=`ability0.ability1.ability2.ability3.ability4.ability5.ability6.ability7.item0.item1.item2.item3.item4.item5.attackMove.stop.hold.shop.camLock.center.scoreboard.pause.speed.settings.showRange.selectHero.selectAll.selectUnits.nextUnit.group0.group1.group2.group3`.split(`.`),Nd={ability0:`Ability 1`,ability1:`Ability 2`,ability2:`Ability 3`,ability3:`Ultimate`,ability4:`Extra ability 1`,ability5:`Extra ability 2`,ability6:`Extra ability 3`,ability7:`Extra ability 4`,item0:`Item 1`,item1:`Item 2`,item2:`Item 3`,item3:`Item 4`,item4:`Item 5`,item5:`Item 6`,attackMove:`Attack-move`,stop:`Stop`,hold:`Hold position`,shop:`Shop`,camLock:`Lock camera`,center:`Center on selection`,scoreboard:`Scoreboard (hold)`,pause:`Pause`,speed:`Game speed`,settings:`Settings`,showRange:`Show attack range (hold)`,selectHero:`Select hero`,selectAll:`Select all units`,selectUnits:`Select other units`,nextUnit:`Next unit type`,group0:`Control group 1`,group1:`Control group 2`,group2:`Control group 3`,group3:`Control group 4`},Pd=Object.freeze({ability0:`KeyQ`,ability1:`KeyW`,ability2:`KeyE`,ability3:`KeyR`,ability4:`KeyD`,ability5:`KeyF`,ability6:`KeyC`,ability7:`KeyV`,item0:`Digit1`,item1:`Digit2`,item2:`Digit3`,item3:`Digit4`,item4:`Digit5`,item5:`Digit6`,attackMove:`KeyA`,stop:`KeyS`,hold:`KeyH`,shop:`KeyB`,camLock:`KeyY`,center:`Space`,scoreboard:`Backquote`,pause:`KeyP`,speed:`F9`,settings:`F10`,showRange:`AltLeft`,selectHero:`F1`,selectAll:`F2`,selectUnits:`F3`,nextUnit:`Tab`,group0:`Digit7`,group1:`Digit8`,group2:`Digit9`,group3:`Digit0`}),Fd=new Set([`Escape`,`ControlLeft`,`ControlRight`,`MetaLeft`,`MetaRight`,`OSLeft`,`OSRight`]),Id=/^[A-Za-z][A-Za-z0-9]*$/;function Ld(e){return typeof e==`string`&&Id.test(e)&&!Fd.has(e)}var Rd=/^(ability|item|group)(\d)$/;function zd(e){let t=new Map;for(let n of Md){let r=e[n];if(!r||t.has(r))continue;let i=Rd.exec(n);t.set(r,{action:n,index:i?Number(i[2]):-1})}return t}function Bd(e,t,n){if(!Md.includes(t))return{bindings:e,swappedWith:null,error:`Unknown action`};if(!Ld(n))return{bindings:e,swappedWith:null,error:`That key is reserved`};let r={...e},i=r[t],a=null;for(let e of Md)e!==t&&r[e]===n&&(r[e]=i,a=e);return r[t]=n,{bindings:r,swappedWith:a}}function Vd(e){let t=e&&typeof e==`object`?e:{},n={},r=new Set,i=[];for(let e of Md){let a=t[e];Ld(a)&&!r.has(a)?(n[e]=a,r.add(a)):i.push(e)}for(let e of i){let t=Pd[e];if(!r.has(t)){n[e]=t,r.add(t);continue}let i=Md.map(e=>Pd[e]).find(e=>!r.has(e));i?(n[e]=i,r.add(i)):n[e]=``}return n}var Hd={Space:`Space`,Tab:`Tab`,Enter:`Enter`,Backspace:`Bksp`,Backquote:"`",Minus:`-`,Equal:`=`,BracketLeft:`[`,BracketRight:`]`,Backslash:`\\`,Semicolon:`;`,Quote:`'`,Comma:`,`,Period:`.`,Slash:`/`,AltLeft:`Alt`,AltRight:`AltGr`,ShiftLeft:`Shift`,ShiftRight:`RShift`,CapsLock:`Caps`,ArrowLeft:`←`,ArrowRight:`→`,ArrowUp:`↑`,ArrowDown:`↓`,Insert:`Ins`,Delete:`Del`,Home:`Home`,End:`End`,PageUp:`PgUp`,PageDown:`PgDn`};function Ud(e){if(!e)return`—`;if(Hd[e])return Hd[e];let t=/^Key([A-Z])$/.exec(e);return t||(t=/^Digit(\d)$/.exec(e),t)?t[1]:(t=/^Numpad(.+)$/.exec(e),t?`Num${t[1]}`:e)}var Wd=[`dota`,`slots`],Gd=Object.freeze([`KeyW`,`KeyT`,`KeyN`,`Tab`]),Kd=e=>typeof e==`string`&&/^[A-Z]$/.test(e)?`Key${e}`:null,qd=Array.from({length:8},(e,t)=>`ability${t}`),Jd=e=>qd.includes(e),Yd=qd.slice(4);function Xd(e){let t=(e?.abilities??[]).slice(0,4).map(e=>Kd(e.hotkey));return t.length===4&&t.every(Boolean)&&new Set(t).size===4?t:null}function Zd(e,t,n=`dota`,r=null){let i=n===`dota`?Xd(t):null,a={...e};i&&i.forEach((e,t)=>{a[`ability${t}`]=e});let o=r?r.slice(4):(t?.extra??[]).map(e=>({def:e,shown:!0})),s=new Set(qd.slice(0,4).map(e=>a[e]).filter(Boolean));for(let t=4;t<8;t++){let r=`ability${t}`,i=o[t-4];if(a[r]=``,!i?.def||i.shown===!1||i.def.placeholder)continue;let c=[n===`dota`?Kd(i.def.hotkey):null,e[r],...Yd.map(t=>e[t])].find(e=>e&&!s.has(e))??``;a[r]=c,c&&s.add(c)}return a}function Qd(e){return(e?.abilities??[]).map(e=>({def:e.def,shown:e.shown!==!1}))}function $d(e){let t=``;for(let n=4;n<e.length;n++)t+=`${e[n].def.id}${e[n].shown?`+`:`-`},`;return t}function ef(e,t,n=null){return Zd(e?.hotkeys??{...Pd},t,e?.interface?.abilityKeys??`dota`,n)}function tf(e,t,n=`dota`){let r=(t??[]).slice(0,4),i=r.map(e=>Kd(e?.hotkey)),a=n===`dota`&&i.every(Boolean)&&new Set(i).size===i.length,o={...e};for(let t=0;t<8;t++)o[`ability${t}`]=t<r.length?a?i[t]:e[`ability${t}`]:``;return o}function nf(e,t){return tf(e?.hotkeys??{...Pd},t,e?.interface?.abilityKeys??`dota`)}function rf(e,t){let n=e[t];return!n||Jd(t)?Ud(n):qd.some(t=>e[t]===n)?`Ctrl+${Ud(n)}`:Ud(n)}function af(e){let t=new Map;for(let n of Md.filter(e=>!Jd(e))){let r=e[n];if(!r||t.has(r))continue;let i=Rd.exec(n);t.set(r,{action:n,index:i?Number(i[2]):-1})}return t}function of(e,t){let n=e[`ability${t}`];return n?`Alt+${Ud(n)}`:`—`}var sf=`ancientsClash.settings`,cf={off:0,low:1024,high:2048},lf={low:{shadows:`off`,pixelRatio:1,antialias:!1,particles:`low`,fireflies:!1},medium:{shadows:`low`,pixelRatio:1.25,antialias:!0,particles:`medium`,fireflies:!0},high:{shadows:`high`,pixelRatio:1.75,antialias:!0,particles:`high`,fireflies:!0}},uf=Object.freeze({version:2,audio:{master:.8,sfx:.9,music:.45,ui:.7,voice:.9,announcer:!0,muted:!1},graphics:{preset:`high`,shadows:`high`,pixelRatio:1.75,antialias:!0,particles:`high`,fireflies:!0},interface:{healthBars:`all`,damageNumbers:!0,hoverRange:!0,unitTooltip:!0,edgePanSpeed:1,lockCursor:!0,quickCast:!1,tutorial:!0,uiScale:1,abilityKeys:`dota`},hotkeys:{...Pd}}),df={audio:{master:[`num`,0,1],sfx:[`num`,0,1],music:[`num`,0,1],ui:[`num`,0,1],voice:[`num`,0,1],announcer:[`bool`],muted:[`bool`]},graphics:{preset:[`enum`,[`low`,`medium`,`high`,`custom`]],shadows:[`enum`,[`off`,`low`,`high`]],pixelRatio:[`num`,.5,2],antialias:[`bool`],particles:[`enum`,[`low`,`medium`,`high`]],fireflies:[`bool`]},interface:{healthBars:[`enum`,[`all`,`heroes`,`off`]],damageNumbers:[`bool`],hoverRange:[`bool`],unitTooltip:[`bool`],edgePanSpeed:[`num`,0,2],lockCursor:[`bool`],quickCast:[`bool`],tutorial:[`bool`],uiScale:[`num`,.6,1.4],abilityKeys:[`enum`,Wd]}};function ff(e){return JSON.parse(JSON.stringify(e))}function pf(e,t,n){switch(e[0]){case`num`:{let r=typeof t==`number`?t:typeof t==`string`&&t.trim()!==``?Number(t):NaN;return Number.isFinite(r)?Math.max(e[1],Math.min(e[2],r)):n}case`enum`:return e[1].includes(t)?t:n;case`bool`:return typeof t==`boolean`?t:n;default:return n}}function mf(e){let t={...e};return(!t.version||t.version<1)&&(typeof t.volume==`number`&&!t.audio&&(t.audio={master:t.volume}),t.keys&&!t.hotkeys&&(t.hotkeys=t.keys)),(!t.version||t.version<2)&&t.hotkeys&&typeof t.hotkeys==`object`&&t.hotkeys.scoreboard===`Tab`&&!t.hotkeys.nextUnit&&(t.hotkeys={...t.hotkeys,scoreboard:`Backquote`}),t}function hf(e){let t=e&&typeof e==`object`&&!Array.isArray(e)?mf(e):{},n={version:2};for(let[e,r]of Object.entries(df)){let i=t[e]&&typeof t[e]==`object`?t[e]:{};n[e]={};for(let[t,a]of Object.entries(r))n[e][t]=pf(a,i[t],uf[e][t])}return n.hotkeys=Vd(t.hotkeys),n}function gf(){return hf(ff(uf))}function _f(e){try{let t=e?.getItem(sf);return t?hf(JSON.parse(t)):gf()}catch{return gf()}}function vf(e,t){try{return e?.setItem(sf,JSON.stringify(t)),!0}catch{return!1}}function yf(e,t,n){let r=Array.isArray(t)?t:String(t).split(`.`),i=ff(e),a=i;for(let e=0;e<r.length-1;e++)(!a[r[e]]||typeof a[r[e]]!=`object`)&&(a[r[e]]={}),a=a[r[e]];return a[r[r.length-1]]=n,r[0]===`graphics`&&(r[1]===`preset`&&lf[n]?Object.assign(i.graphics,lf[n]):r[1]!==`preset`&&(i.graphics.preset=`custom`)),hf(i)}function bf(e,t){return!!e&&!!t&&e.graphics?.antialias!==t.graphics?.antialias}var xf={fissure:{kind:`rocks`,color:7033398,size:.95,gap:1.1},ice:{kind:`rocks`,color:12576511,size:.8,gap:1,emissive:2775680,crystal:!0},field:{kind:`curtain`,color:10149119,opacity:.28,height:2.6},replica:{kind:`curtain`,color:9079551,opacity:.32,height:3.2},cog:{kind:`curtain`,color:10147839,opacity:.16,height:1.6},default:{kind:`rocks`,color:8026746,size:.8,gap:1.1}},Sf=new He(1,0),Cf=new xe(1,0);function wf(e,t,n){let r=Math.sin(e*12.9898+t*78.233+n*37.719)*43758.5453;return r-Math.floor(r)}function Tf(e,t){let n=[];if(e.shape===`line`){let r=e.x2-e.x,i=e.z2-e.z,a=Math.max(1,Math.round(Math.hypot(r,i)/t));for(let t=0;t<=a;t++)n.push({x:e.x+r*t/a,z:e.z+i*t/a,a:Math.atan2(r,i)})}else{let r=Math.max(.5,e.r),i=Math.max(6,Math.round(Math.PI*2*r/t));for(let t=0;t<i;t++){let a=t/i*Math.PI*2;n.push({x:e.x+Math.sin(a)*r,z:e.z+Math.cos(a)*r,a:a+Math.PI/2})}}return n}var Ef=class{constructor(e){this.scene=e,this.meshes=new Map,this.version=-1,this.mats=new Map,this.time=0}mat(e){let t=this.mats.get(e);return t||(t=e.kind===`curtain`?new T({color:e.color,transparent:!0,opacity:e.opacity,side:2,depthWrite:!1}):new c({color:e.color,roughness:e.crystal?.3:1,flatShading:!0,emissive:e.emissive??0}),this.mats.set(e,t),t)}build(e){let t=xf[e.style]??xf.default,n=new V;if(t.kind===`curtain`){if(e.shape===`line`){let r=Math.hypot(e.x2-e.x,e.z2-e.z),i=new z(new lt(Math.max(.1,r),t.height),this.mat(t)),a=(e.x+e.x2)/2,o=(e.z+e.z2)/2;i.position.set(a,B(a,o)+t.height/2,o),i.rotation.y=Math.atan2(e.x2-e.x,e.z2-e.z)-Math.PI/2,n.add(i)}else{let r=new i(e.r,e.r,t.height,40,1,e.shape===`ring`),a=new z(r,this.mat(t));a.position.set(e.x,B(e.x,e.z)+t.height/2,e.z),n.add(a)}}else{let r=this.mat(t),i=e.shape===`circle`?[{x:e.x,z:e.z,a:0}]:Tf(e,t.gap),a=t.crystal?Cf:Sf;i.forEach((i,o)=>{let s=(e.shape===`circle`?Math.max(.6,e.r):t.size)*(.75+wf(e.id,o,1)*.5),c=new z(a,r);c.position.set(i.x,B(i.x,i.z)+s*(t.crystal?.9:.45),i.z),c.scale.set(s,s*(t.crystal?1.8:1+wf(e.id,o,2)*.6),s),c.rotation.set(wf(e.id,o,3)*.6,wf(e.id,o,4)*Math.PI*2,wf(e.id,o,5)*.6),c.castShadow=!0,n.add(c)})}return n.userData.rise=0,n.scale.y=.01,this.scene.add(n),n}sync(e,t){if((e.blockerVersion??0)!==this.version){this.version=e.blockerVersion??0;let t=new Set;for(let n of e.blockers??[])t.add(n.id),this.meshes.has(n.id)||this.meshes.set(n.id,this.build(n));for(let[e,n]of this.meshes)t.has(e)||(this.scene.remove(n),n.traverse(e=>{e.geometry&&e.geometry!==Sf&&e.geometry!==Cf&&e.geometry.dispose()}),this.meshes.delete(e))}if(this.hides)for(let t of e.blockers??[]){let e=this.meshes.get(t.id);e&&(e.visible=!this.hides(t))}for(let e of this.meshes.values())e.userData.rise>=1||(e.userData.rise=Math.min(1,e.userData.rise+t*5),e.scale.y=Math.max(.01,e.userData.rise))}},Df=new Map;function X(e,t={}){let n=`${e}-${t.emissive??``}-${t.flat??1}`;return Df.has(n)||Df.set(n,new c({color:e,roughness:t.roughness??.7,metalness:t.metalness??.05,flatShading:t.flat??!0,emissive:t.emissive??0,emissiveIntensity:t.emissive?.9:0})),Df.get(n)}var Z={box:new Et(1,1,1),sphere:new wt(1,10,8),cyl:new i(1,1,1,8),cone:new C(1,1,8),oct:new xe(1,0),ico:new Re(1,0),disc:new Ke(1,24)};function Q(e,t,n,r,i,a=0,o=0,s=0){let c=new z(e,t);return c.scale.set(n,r,i),c.position.set(a,o,s),c.castShadow=!0,c}function Of(e){let t=new z(Z.disc,new T({color:0,transparent:!0,opacity:.3,depthWrite:!1}));return t.rotation.x=-Math.PI/2,t.scale.setScalar(e),t.position.y=.05,t}function kf(e,t){let n=new V,r=new V;n.add(r);let i=X(e.color),a=X(e.accent),o=X(e.skin),s=(e,t,n,i)=>{let a=new V;return a.position.set(e,t,n),i.position.x-=e,i.position.y-=t,i.position.z-=n,a.add(i),r.add(a),a},c=[-.22,.22].map(e=>s(e,.8,0,Q(Z.box,a,.28,.8,.3,e,.4,0)));r.add(Q(Z.cyl,i,.5,1,.42,0,1.25,0)),r.add(Q(Z.sphere,a,.26,.2,.26,-.52,1.7,0)),r.add(Q(Z.sphere,a,.26,.2,.26,.52,1.7,0)),r.add(Q(Z.sphere,o,.3,.32,.3,0,2.05,0));let l=[s(-.6,1.65,0,Q(Z.box,i,.18,.7,.18,-.6,1.3,0)),s(.6,1.65,.05,Q(Z.box,i,.18,.7,.18,.6,1.3,.05))],u=new V;u.position.set(.62-.6,1-1.65,.2);let d=X(14212579,{metalness:.6,roughness:.3});switch(e.weapon){case`blade`:u.add(Q(Z.box,d,.08,.08,1.6,0,.1,.75)),u.add(Q(Z.box,a,.3,.08,.08,0,.1,0)),r.add(Q(Z.cone,i,.18,.4,.18,0,2.45,-.05));break;case`staff`:u.add(Q(Z.cyl,X(8018490),.06,2.2,.06,0,.6,.1)),u.add(Q(Z.oct,X(e.accent,{emissive:8377599}),.24,.3,.24,0,1.8,.1)),r.add(Q(Z.cone,i,.36,.7,.36,0,2.45,0)),r.add(Q(Z.cone,i,.62,1.1,.62,0,.55,0));break;case`gun`:u.add(Q(Z.cyl,X(3815994,{metalness:.6}),.07,1.8,.07,0,.35,.6)),u.children[0].rotation.x=Math.PI/2,u.add(Q(Z.box,X(7031338),.14,.2,.6,0,.3,-.2)),r.add(Q(Z.cyl,a,.42,.12,.42,0,2.28,0)),r.add(Q(Z.cyl,a,.24,.3,.24,0,2.42,0));break;case`axe`:u.add(Q(Z.cyl,X(5913122),.07,1.8,.07,0,.5,.2)),u.add(Q(Z.box,d,.08,.7,.6,0,1.25,.45)),r.scale.set(1.15,1.1,1.15),r.add(Q(Z.cone,d,.08,.35,.08,-.22,2.35,0)),r.add(Q(Z.cone,d,.08,.35,.08,.22,2.35,0));break;case`daggers`:{let e=X(12167384,{metalness:.6,roughness:.3});u.add(Q(Z.box,e,.06,.06,.75,0,.05,.4)),u.add(Q(Z.box,a,.2,.06,.06,0,.05,.02));let t=new V;t.position.set(-.62+.6,1-1.65,.25),t.add(Q(Z.box,e,.06,.06,.75,0,.05,.4)),t.add(Q(Z.box,a,.2,.06,.06,0,.05,.02)),l[0].add(t),r.add(Q(Z.cone,i,.4,.6,.4,0,2.3,-.04)),r.add(Q(Z.cyl,X(6966463),.36,.12,.34,0,1.82,0)),r.add(Q(Z.box,X(6966463),.12,.45,.05,.1,1.55,-.3));break}case`branch`:{let e=X(7031339),t=Q(Z.cyl,e,.07,1.4,.07,0,.4,.1),n=Q(Z.cyl,e,.06,.9,.06,.06,1.45,.12);n.rotation.z=-.25,u.add(t,n),u.add(Q(Z.ico,X(10216314,{emissive:5941306}),.22,.22,.22,.14,1.95,.12));for(let e of[-1,1]){let t=Q(Z.cone,X(8018490),.06,.55,.06,e*.2,2.45,0);t.rotation.z=-e*.5,r.add(t)}r.add(Q(Z.cone,i,.62,1.1,.62,0,.55,0));break}case`wrench`:u.add(Q(Z.cyl,X(4868682,{metalness:.6}),.06,1.3,.06,0,.5,.15)),u.add(Q(Z.box,d,.32,.22,.12,0,1.2,.15)),u.add(Q(Z.box,d,.08,.2,.12,-.12,1.38,.15)),u.add(Q(Z.box,d,.08,.2,.12,.12,1.38,.15)),r.add(Q(Z.box,a,.62,.7,.32,0,1.35,-.42)),r.add(Q(Z.cyl,X(16757575,{emissive:16742944}),.08,.05,.08,0,2.6,-.42).rotateX(0)),r.add(Q(Z.box,X(1710618),.5,.08,.08,0,2.12,.22)),r.add(Q(Z.cyl,X(10147839,{emissive:4894975}),.09,.06,.09,-.11,2.12,.28).rotateX(Math.PI/2)),r.add(Q(Z.cyl,X(10147839,{emissive:4894975}),.09,.06,.09,.11,2.12,.28).rotateX(Math.PI/2));break;case`shield`:u.add(Q(Z.cyl,X(5913122),.06,1.1,.06,0,.4,.15)),u.add(Q(Z.ico,d,.2,.2,.2,0,1,.15)),r.add(Q(Z.box,X(e.accent,{metalness:.4}),.12,1.2,.8,-.78,1.2,.2)),r.add(Q(Z.box,X(14205040,{metalness:.5}),.14,.2,.2,-.85,1.25,.2)),r.add(Q(Z.cyl,X(e.color,{metalness:.3}),.34,.16,.34,0,2.3,0)),r.scale.set(1.2,1.1,1.2);break;case`spear`:{let t=Q(Z.cyl,X(14212579,{metalness:.4}),.05,2.4,.05,0,.6,.35);t.rotation.x=.35,u.add(t),u.add(Q(Z.oct,X(10147839,{emissive:4903167}),.14,.32,.14,0,1.75,.78));for(let t=-1;t<=1;t++){let n=Q(Z.cone,X(e.accent),.07,.4,.07,t*.12,2.4,-.05-Math.abs(t)*.05);n.rotation.z=-t*.35,r.add(n)}r.add(Q(Z.cyl,X(10147839),.34,.1,.32,0,1.82,0)),r.add(Q(Z.box,X(10147839),.1,.4,.05,-.12,1.58,-.3));break}default:{let e=Q(Z.sphere,X(16773808,{emissive:16764992}),.28,.28,.28,0,.8,.3);u.add(e),r.add(Q(Z.cone,i,.6,1.1,.6,0,.55,0)),r.add(Q(Z.cyl,X(16770688,{emissive:16760880}),.35,.05,.35,0,2.5,0));break}}return l[1].add(u),Af(n),n.userData={body:r,weapon:u,legs:c,arms:l,weaponArm:l[1],height:2.6,phase:0,castT:0},n}function Af(e){e.add(Of(1))}function jf(e){let t=new V,{model:n,mixer:r,actions:i,cfg:a}=Ou(e);t.add(n);let o={model:n,mixer:r,actions:i,cfg:a,anim:null,height:a.height+(a.lift??0)+.2,castT:0,windup:0,windupStart:0};if(e.kind===`hero`)Af(t);else if(e.kind===`creep`)t.add(Of(e.radius+.1));else if(e.kind===`neutral`||e.kind===`boss`)t.add(Of(e.radius+.1));else if(e.kind===`courier`){o.flyY=3,o.height=a.height+3;let n=Of(e.radius+.2);n.position.y=-2.95,t.add(n)}return t.userData=o,t}function Mf(e){let t=new V,n=new V;t.add(n);let r=e.team,i=r===0?7319119:10242618,a=r===0?4153130:5056032,o=e.isSuper?1.25:1;if(e.variant===`melee`){for(let e of[-1,1]){let t=Q(Z.box,X(a),.22,.5,.25,e*.18,.25,0);t.userData={leg:e,hipY:.5},n.add(t)}n.add(Q(Z.box,X(i),.65,.65,.45,0,.82,0)),n.add(Q(Z.sphere,X(i),.24,.24,.24,0,1.32,.02)),n.add(Q(Z.box,X(13619151,{metalness:.5}),.06,.06,.8,.42,.75,.35))}else n.add(Q(Z.cone,X(i),.42,1.2,.42,0,.6,0)),n.add(Q(Z.sphere,X(a),.22,.22,.22,0,1.3,0)),n.add(Q(Z.sphere,X(r===0?12582832:16763024,{emissive:r===0?7339887:16748352}),.12,.12,.12,.35,.9,.3));return n.scale.setScalar(o),t.add(Of(.7*o)),t.userData={body:n,height:1.7*o},t}function Nf(e){let t=new V,n=e.team,r=X(n===0?12104602:7232856),i=X(n===0?9407090:4864566);t.add(Q(Z.cyl,i,2,.6,2,0,.3,0)),t.add(Q(Z.cyl,r,1.3,4.2,1.3,0,2.6,0)),t.add(Q(Z.cyl,i,1.7,.5,1.7,0,4.9,0));let a=Q(Z.oct,X(yn[n],{emissive:yn[n]}),.7,1.1,.7,0,6.3,0);return t.add(a),t.add(Of(2.4)),t.userData={crystal:a,height:7.6},t}function Pf(e){let t=new V,n=e.team;t.add(Q(Z.box,X(n===0?11051658:6180426),4.2,2.2,3.4,0,1.1,0));let r=Q(Z.cone,X(yn[n]),3.2,1.8,3.2,0,3.1,0);return r.geometry=new C(1,1,4),r.rotation.y=Math.PI/4,t.add(r),t.add(Q(Z.box,X(2759956),.9,1.3,.1,0,.65,1.72)),t.userData={height:4.6},t}function Ff(e){let t=new V,n=e.team,r=yn[n];t.add(Q(Z.cyl,X(n===0?11907226:5916740),4.2,1.2,4.2,0,.6,0)),t.add(Q(Z.cyl,X(n===0?9407090:4141100),3,1.2,3,0,1.8,0));let i=Q(Z.ico,X(r,{emissive:r}),2,3.2,2,0,5.8,0);t.add(i);for(let e=0;e<4;e++){let n=e/4*Math.PI*2;t.add(Q(Z.cone,X(r,{emissive:r}),.4,2.2,.4,Math.cos(n)*3.2,3.2,Math.sin(n)*3.2))}return t.userData={crystal:i,height:10.5,spin:!0},t}function If(e){let t=new V,n=e.team;t.add(Q(Z.cyl,X(n===0?13223084:7166549),3.6,.5,3.6,0,.25,0));let r=Q(Z.cyl,X(n===0?8380616:16748399,{emissive:n===0?3121024:10436399}),2.8,.15,2.8,0,.55,0);t.add(r);let i=Q(Z.oct,X(yn[n],{emissive:yn[n]}),.8,1.6,.8,0,2.6,0);return t.add(i),t.userData={crystal:i,height:0},t}function Lf(e){let t=new V,n=Math.max(.8,e.radius),r=X(8018490),i=X(4864554);if(e.shopKind===`side`){for(let[e,r]of[[-1,-1],[1,-1],[-1,1],[1,1]])t.add(Q(Z.cyl,i,.12*n,1.9*n,.12*n,e*.85*n,.95*n,r*.7*n));t.add(Q(Z.box,r,1.8*n,.7*n,.6*n,0,.35*n,.45*n));for(let e=0;e<4;e++)t.add(Q(Z.box,X(e%2?15261896:4165471),.5*n,.12*n,1.8*n,(e-1.5)*.5*n,2*n,0));t.add(Q(Z.box,X(11567168),.4*n,.4*n,.4*n,-.5*n,.9*n,.45*n)),t.add(Q(Z.sphere,X(13647936),.2*n,.2*n,.2*n,.4*n,.9*n,.45*n)),t.userData={height:2.2*n}}else if(e.shopKind===`secret`){let e=X(3816008);t.add(Q(Z.cyl,e,1.1*n,1.4*n,1.1*n,0,.7*n,0)),t.add(Q(Z.cone,X(2761269),1.4*n,1.2*n,1.4*n,0,2*n,0)),t.add(Q(Z.box,X(657936),.5*n,.8*n,.1*n,0,.4*n,1.08*n));let r=Q(Z.ico,X(10448895,{emissive:6963152}),.3*n,.3*n,.3*n,0,2.9*n,0);t.add(r),t.userData={crystal:r,spin:!0,height:3*n}}else{let i=e.team<=1?e.team:0;t.add(Q(Z.box,X(i===0?14208944:6968656),1.7*n,1.3*n,1.5*n,0,.65*n,0));let a=Q(Z.cone,X(yn[i]),1.5*n,1*n,1.5*n,0,1.8*n,0);a.rotation.y=Math.PI/4,t.add(a),t.add(Q(Z.box,r,.45*n,.75*n,.1*n,0,.38*n,.76*n)),t.add(Q(Z.cyl,X(15911244,{emissive:9071120}),.28*n,.05*n,.28*n,.55*n,1*n,.78*n)),t.userData={height:2.3*n}}return t.add(Of(n*1.3)),t}function Rf(e){let t=new V,n=e.radius,r=X(4867392);for(let e=0;e<6;e++){let e=Math.random()*Math.PI*2,i=Math.random()*n*.7,a=Q(Z.box,r,.5+Math.random()*n*.4,.3+Math.random()*.5,.5+Math.random()*n*.4,Math.cos(e)*i,.2,Math.sin(e)*i);a.rotation.y=Math.random()*3,t.add(a)}return t}var zf={kobold:{shape:`kobold`,main:9071173,dark:5914664,s:.85},koboldChief:{shape:`kobold`,main:10517056,dark:6965794,s:1.05,crest:!0},wolf:{shape:`wolf`,main:7171442,dark:4539722,s:.95},alphaWolf:{shape:`wolf`,main:4868693,dark:2763315,s:1.2,crest:!0},centaur:{shape:`centaur`,main:8015662,dark:5190176,s:1.25},outrunner:{shape:`centaur`,main:9398853,dark:6045736,s:.95},trollShaman:{shape:`troll`,main:5208682,dark:3100485,s:1},spirit_wolf:{shape:`wolf`,main:9091304,dark:4876954,s:.95}};function Bf(e){let t=zf[e.model]??zf.kobold,n=new V,r=new V;n.add(r);let i=X(t.main),a=X(t.dark),o=X(16769184,{emissive:16752704}),s=1.6;switch(t.shape){case`wolf`:r.add(Q(Z.box,i,.55,.5,1.3,0,.75,0)),r.add(Q(Z.box,i,.42,.4,.5,0,.95,.8)),r.add(Q(Z.cone,a,.12,.25,.12,-.13,1.25,.75)),r.add(Q(Z.cone,a,.12,.25,.12,.13,1.25,.75)),r.add(Q(Z.box,a,.28,.22,.3,0,.85,1.1));for(let[e,t]of[[-.2,.45],[.2,.45],[-.2,-.45],[.2,-.45]])r.add(Q(Z.box,a,.14,.55,.14,e,.28,t));r.add(Q(Z.cone,i,.1,.6,.1,0,.9,-.85).rotateX(-1.1)),r.add(Q(Z.sphere,o,.05,.05,.05,-.12,1.02,1.05),Q(Z.sphere,o,.05,.05,.05,.12,1.02,1.05)),s=1.5;break;case`centaur`:r.add(Q(Z.box,i,.7,.6,1.5,0,.95,-.15));for(let[e,t]of[[-.25,.4],[.25,.4],[-.25,-.7],[.25,-.7]])r.add(Q(Z.box,a,.16,.7,.16,e,.35,t));r.add(Q(Z.cyl,i,.32,.9,.28,0,1.65,.45)),r.add(Q(Z.sphere,a,.24,.26,.24,0,2.25,.5)),r.add(Q(Z.cone,X(14209216),.06,.3,.06,-.15,2.5,.5),Q(Z.cone,X(14209216),.06,.3,.06,.15,2.5,.5)),r.add(Q(Z.box,X(10132122,{metalness:.5}),.08,1.1,.08,.45,1.7,.75)),s=2.6;break;case`troll`:r.add(Q(Z.cone,i,.45,1.3,.45,0,.65,0)),r.add(Q(Z.sphere,a,.26,.3,.26,0,1.45,.05)),r.add(Q(Z.cone,a,.07,.4,.07,-.25,1.6,0).rotateZ(1),Q(Z.cone,a,.07,.4,.07,.25,1.6,0).rotateZ(-1)),r.add(Q(Z.cyl,X(6965802),.05,1.8,.05,.42,1,.2)),r.add(Q(Z.oct,X(10289018,{emissive:5230656}),.16,.2,.16,.42,2,.2)),s=2;break;default:r.add(Q(Z.box,a,.18,.4,.2,-.14,.2,0),Q(Z.box,a,.18,.4,.2,.14,.2,0)),r.add(Q(Z.sphere,i,.35,.4,.3,0,.75,0)),r.add(Q(Z.sphere,i,.24,.24,.26,0,1.25,.08)),r.add(Q(Z.box,a,.16,.12,.22,0,1.2,.3)),r.add(Q(Z.cyl,X(6965802),.04,.9,.04,.35,.8,.2)),r.add(Q(Z.sphere,o,.04,.04,.04,-.09,1.3,.3),Q(Z.sphere,o,.04,.04,.04,.09,1.3,.3)),s=1.5}return t.crest&&r.add(Q(Z.cone,X(13647920),.14,.4,.14,0,s*.92,.05)),r.scale.setScalar(t.s),n.add(Of(.75*t.s)),n.userData={body:r,height:s*t.s},n}function Vf(e){let t=new V,n=new V;t.add(n);let r=X(6249045),i=X(3814963),a=X(5204538),o=X(16756832,{emissive:16742944});n.add(Q(Z.box,i,.6,1.4,.7,-.6,.7,0),Q(Z.box,i,.6,1.4,.7,.6,.7,0)),n.add(Q(Z.ico,r,1.5,1.4,1.2,0,2.3,0)),n.add(Q(Z.sphere,a,1.3,.35,1.05,0,3.15,-.2)),n.add(Q(Z.ico,r,.65,.6,.6,0,3.6,.55)),n.add(Q(Z.sphere,o,.12,.08,.06,-.24,3.7,1.1),Q(Z.sphere,o,.12,.08,.06,.24,3.7,1.1));let s=Q(Z.cone,X(14208952),.15,.9,.15,-.55,4.1,.45);s.rotation.z=.6;let c=Q(Z.cone,X(14208952),.15,.9,.15,.55,4.1,.45);return c.rotation.z=-.6,n.add(s,c),n.add(Q(Z.box,r,.5,1.6,.5,-1.65,2.2,.2),Q(Z.box,r,.5,1.6,.5,1.65,2.2,.2)),n.add(Q(Z.ico,i,.55,.55,.55,-1.7,1.25,.3),Q(Z.ico,i,.55,.55,.55,1.7,1.25,.3)),n.add(Q(Z.oct,o,.3,.45,.3,0,2.4,1.15)),t.add(Of(2.6)),t.userData={body:n,height:4.6},t}function Hf(e){let t=new V,n=e.wardType===`sentry`?5941503:16765773;t.add(Q(Z.cyl,X(6965802),.06,1.6,.06,0,.8,0)),t.add(Q(Z.cyl,X(4863008),.25,.1,.25,0,.05,0));let r=Q(Z.sphere,X(n,{emissive:n}),.22,.22,.22,0,1.75,0);return t.add(r),t.add(Q(Z.sphere,X(1118481),.1,.1,.06,0,1.75,.18)),t.userData={height:2,eye:r},t}var Uf={spirit_bear:{shape:`beast`,main:9067066,dark:5913130,s:1.6},boar:{shape:`beast`,main:8018506,dark:4864554,s:.9},hawk:{shape:`bird`,main:13150328,dark:14202954},familiar:{shape:`bird`,main:6974066,dark:4868690,s:1.2},spiderling:{shape:`spider`,main:4876858,dark:2767402},spiderite:{shape:`spider`,main:5921338,dark:3815978,s:.7},brew_earth:{shape:`elemental`,main:9075290,dark:5917242,s:1.1},brew_storm:{shape:`elemental`,main:9099519,glow:3836632,dark:5933752},brew_fire:{shape:`elemental`,main:16742954,glow:16726528,dark:12077594}};function Wf(e){let t=new V,n=new V;t.add(n);let r=2,i=null;if(e.model===`turret`){let e=X(6974058,{metalness:.5}),t=X(3815994,{metalness:.4});n.add(Q(Z.box,t,1.1,.5,1.1,0,.25,0)),n.add(Q(Z.cyl,e,.35,.6,.35,0,.8,0)),i=new V,i.position.y=1.2,i.add(Q(Z.box,e,.5,.4,.6,0,0,0)),i.add(Q(Z.cyl,t,.12,.9,.12,0,0,.6).rotateX(Math.PI/2)),i.add(Q(Z.sphere,X(16757575,{emissive:16742944}),.12,.12,.12,0,0,1.08)),n.add(i),r=1.8}else if(e.model===`plague_ward`){let e=X(6986282),t=X(13162602),i=X(16730666,{emissive:16722432});n.add(Q(Z.cyl,X(5916210),.08,.8,.08,0,.4,0)),n.add(Q(Z.cyl,e,.32,.25,.32,0,.15,0)),n.add(Q(Z.cyl,e,.14,.9,.14,0,.7,.05).rotateX(-.2)),n.add(Q(Z.sphere,t,.2,.16,.26,0,1.2,.18)),n.add(Q(Z.sphere,i,.04,.04,.04,-.08,1.25,.36),Q(Z.sphere,i,.04,.04,.04,.08,1.25,.36)),r=1.4}else if(e.model===`necro_warrior`||e.model===`necro_archer`){let t=X(3813448,{metalness:.4}),a=X(10124031,{emissive:6961919});n.add(Q(Z.box,t,.18,.7,.2,-.17,.35,0),Q(Z.box,t,.18,.7,.2,.17,.35,0)),n.add(Q(Z.cyl,t,.36,.8,.3,0,1.1,0)),n.add(Q(Z.sphere,t,.22,.24,.22,0,1.68,0)),n.add(Q(Z.sphere,a,.05,.05,.05,-.08,1.7,.18),Q(Z.sphere,a,.05,.05,.05,.08,1.7,.18)),i=new V,i.position.set(.42,1.1,.1),e.model===`necro_archer`?i.add(Q(Z.cyl,X(5916210),.04,1.2,.04,0,0,.1)):i.add(Q(Z.box,X(11579592,{metalness:.6}),.08,.9,.04,0,.3,.2)),n.add(i),r=2}else if(e.model===`death_ward`){let e=X(4863012),t=X(10147914,{emissive:5941290});n.add(Q(Z.cyl,e,.22,1.6,.22,0,.8,0)),n.add(Q(Z.box,X(6965802),.7,.12,.12,0,1.3,0)),n.add(Q(Z.sphere,X(15261896),.26,.28,.26,0,1.85,0)),n.add(Q(Z.sphere,t,.06,.06,.06,-.09,1.88,.2),Q(Z.sphere,t,.06,.06,.06,.09,1.88,.2)),r=2.2}else if(e.model===`nether_ward`)n.add(Q(Z.cyl,X(5921370),.35,.5,.35,0,.25,0)),n.add(Q(Z.cone,X(10157930,{emissive:5963562}),.3,.7,.3,0,.85,0)),r=1.3;else if(e.model===`golem`){let e=X(4864562),t=X(16742954,{emissive:16730624});n.add(Q(Z.box,e,.32,.9,.36,-.3,.45,0),Q(Z.box,e,.32,.9,.36,.3,.45,0)),n.add(Q(Z.ico,e,.75,.8,.6,0,1.55,0)),n.add(Q(Z.box,e,.3,1,.3,-.85,1.35,.1),Q(Z.box,e,.3,1,.3,.85,1.35,.1)),n.add(Q(Z.sphere,t,.28,.24,.28,0,2.3,.1)),r=2.8}else if(e.model===`psionic_trap`){let e=X(13667071,{emissive:9059071});n.add(Q(Z.cyl,e,.55,.05,.55,0,.03,0)),n.add(Q(Z.oct,e,.12,.3,.12,0,.25,0)),r=.5}else if(e.model===`power_cog`){let e=X(12095546,{metalness:.6}),t=X(10147839,{emissive:4889343}),i=new V;i.position.y=.9,i.add(Q(Z.cyl,e,.8,.25,.8,0,0,0).rotateX(Math.PI/2));for(let t=0;t<8;t++){let n=t*Math.PI/4;i.add(Q(Z.box,e,.22,.22,.28,Math.sin(n)*.85,Math.cos(n)*.85,0))}i.add(Q(Z.sphere,t,.22,.22,.2,0,0,.12)),n.add(i),n.add(Q(Z.box,X(5917226),.5,.2,.4,0,.1,0)),r=1.9}else if(e.model===`land_mine`||e.model===`stasis_trap`||e.model===`remote_mine`){let t=X(e.model===`stasis_trap`?4876938:5917242,{metalness:.4}),i=X(e.model===`stasis_trap`?10147839:16738874,{emissive:e.model===`stasis_trap`?3836671:16726528});if(n.add(Q(Z.cyl,t,.45,.22,.45,0,.11,0)),n.add(Q(Z.sphere,i,.12,.08,.12,0,.26,0)),e.model===`stasis_trap`)for(let e=0;e<6;e++){let r=e*Math.PI/3;n.add(Q(Z.cone,t,.08,.3,.08,Math.sin(r)*.45,.25,Math.cos(r)*.45))}e.model===`remote_mine`&&n.add(Q(Z.cyl,t,.03,.6,.03,.2,.5,0),Q(Z.sphere,i,.06,.06,.06,.2,.82,0)),r=.6}else if(e.model===`stone_remnant`)n.add(Q(Z.ico,X(8024674),.75,.85,.75,0,.8,0)),n.add(Q(Z.ico,X(10143850,{emissive:3828250}),.3,.3,.3,0,1,.5)),r=1.7;else if(e.model===`fire_spirit`||e.model===`io_spirit`){let t=e.model===`fire_spirit`?16747066:14217471;n.add(Q(Z.sphere,X(t,{emissive:t}),.28,.28,.28,0,1.6,0)),r=2}else if(e.model===`chakram`){let e=X(13158600,{metalness:.8}),t=new V;t.position.y=1.1,t.add(Q(Z.cyl,e,.9,.08,.9,0,0,0).rotateX(Math.PI/2));for(let n=0;n<10;n++){let r=n*Math.PI/5;t.add(Q(Z.cone,e,.12,.3,.06,Math.sin(r)*.95,Math.cos(r)*.95,0).rotateZ(-r))}n.add(t),r=2}else if(e.model===`supernova`){n.add(Q(Z.sphere,X(16765002,{emissive:16752672}),1.3,1.3,1.3,0,1.6,0));for(let e=0;e<8;e++){let t=e*Math.PI/4;n.add(Q(Z.cone,X(16742944,{emissive:16734720}),.25,.7,.25,Math.sin(t)*1.5,1.6,Math.cos(t)*1.5).rotateX(Math.PI/2).rotateZ(0))}r=3.4}else if(e.model===`frozen_sigil`){let e=X(12576511,{emissive:3832496});n.add(Q(Z.oct,e,.35,.7,.35,0,1.4,0));for(let t=0;t<3;t++){let r=t*Math.PI*2/3;n.add(Q(Z.oct,e,.12,.35,.12,Math.sin(r)*.6,1.2,Math.cos(r)*.6))}r=2}else if(e.model===`eidolon`){let e=X(5913258,{emissive:3807882});n.add(Q(Z.oct,e,.4,.8,.4,0,1.1,0)),n.add(Q(Z.oct,e,.2,.4,.2,-.4,.9,0),Q(Z.oct,e,.2,.4,.2,.4,.9,0)),r=1.6}else if(e.model===`tombstone`){let e=X(6974050),t=X(10147962,{emissive:4885050});n.add(Q(Z.box,e,1.2,.3,.8,0,.15,0)),n.add(Q(Z.box,e,.7,1.5,.25,0,1,0)),n.add(Q(Z.box,e,.12,.7,.05,0,1.25,.14),Q(Z.box,e,.45,.12,.05,0,1.4,.14)),n.add(Q(Z.sphere,t,.12,.12,.12,0,1.85,0)),r=2}else if(e.model===`forge_spirit`||e.model===`astral_spirit`||e.model===`tomb_zombie`){let t={forge_spirit:[16738858,16726528],astral_spirit:[9099519,3836632],tomb_zombie:[6978138,0]}[e.model],i=X(t[0],t[1]?{emissive:t[1]}:{});n.add(Q(Z.box,i,.16,.6,.18,-.16,.3,0),Q(Z.box,i,.16,.6,.18,.16,.3,0)),n.add(Q(Z.cyl,i,.32,.8,.28,0,1,0)),n.add(Q(Z.sphere,i,.22,.22,.22,0,1.58,.05)),n.add(Q(Z.box,i,.1,.6,.1,-.36,1.05,.15).rotateX(-.8),Q(Z.box,i,.1,.6,.1,.36,1.05,.15).rotateX(-.8)),e.model===`astral_spirit`&&n.scale.setScalar(1.3),r=e.model===`astral_spirit`?2.4:1.8}else if(Uf[e.model]){let t=Uf[e.model],i=X(t.main,t.glow?{emissive:t.glow}:{}),a=X(t.dark??t.main);if(t.shape===`beast`){n.add(Q(Z.sphere,i,.55,.45,.8,0,.75,0)),n.add(Q(Z.sphere,i,.32,.3,.34,0,.95,.8));for(let[e,t]of[[-.3,.45],[.3,.45],[-.3,-.45],[.3,-.45]])n.add(Q(Z.box,a,.16,.5,.16,e,.25,t));r=1.5}else if(t.shape===`bird`)n.add(Q(Z.sphere,i,.3,.26,.5,0,1.6,0),Q(Z.cone,a,.06,.2,.06,0,1.62,.5).rotateX(Math.PI/2)),n.add(Q(Z.box,i,1.6,.05,.4,0,1.65,0)),r=2;else if(t.shape===`spider`){n.add(Q(Z.sphere,i,.4,.3,.5,0,.4,-.2),Q(Z.sphere,a,.22,.2,.24,0,.4,.35));for(let e=0;e<8;e++){let t=e<4?-1:1,r=(e%4-1.5)*.2;n.add(Q(Z.box,a,.6,.05,.05,t*.45,.3,r).rotateZ(t*.5))}r=.9}else n.add(Q(Z.box,a,.2,.7,.22,-.2,.35,0),Q(Z.box,a,.2,.7,.22,.2,.35,0)),n.add(Q(Z.cyl,i,.45,1,.38,0,1.2,0)),n.add(Q(Z.sphere,i,.3,.3,.3,0,1.95,.05)),n.add(Q(Z.box,i,.14,.7,.14,-.5,1.25,.1).rotateX(-.6),Q(Z.box,i,.14,.7,.14,.5,1.25,.1).rotateX(-.6)),r=2.3;n.scale.setScalar(t.s??1),r*=t.s??1}else{let t=e.model===`elder`?1.8:1,i=X(7031339),a=X(e.model===`elder`?4160047:5941306);n.add(Q(Z.box,i,.16,.5,.18,-.16,.25,0),Q(Z.box,i,.16,.5,.18,.16,.25,0)),n.add(Q(Z.cyl,i,.28,1.1,.28,0,1,0)),n.add(Q(Z.box,i,.12,.7,.12,-.38,1.2,.1).rotateZ(.6),Q(Z.box,i,.12,.7,.12,.38,1.2,.1).rotateZ(-.6)),n.add(Q(Z.ico,a,.62,.55,.62,0,1.8,0)),n.add(Q(Z.sphere,X(14221210,{emissive:10216314}),.05,.05,.05,-.1,1.3,.26),Q(Z.sphere,X(14221210,{emissive:10216314}),.05,.05,.05,.1,1.3,.26)),n.scale.setScalar(t),r=e.model===`elder`?3.4:2}return t.add(Of(e.radius+.1)),t.userData={body:n,barrel:i,height:r},t}function Gf(e){let t=new V,n=new V;t.add(n);let r=yn[e.team],i=X(e.team===0?15262408:4864586),a=X(r);n.add(Q(Z.sphere,i,.42,.36,.62,0,0,0)),n.add(Q(Z.sphere,i,.26,.26,.26,0,.22,.5)),n.add(Q(Z.cone,X(15773744),.08,.26,.08,0,.2,.8).rotateX(Math.PI/2)),n.add(Q(Z.box,a,.5,.06,.32,0,.12,-.55).rotateX(-.3)),n.add(Q(Z.box,X(9067050),.36,.3,.3,0,-.38,.05));let o=[];for(let e of[-1,1]){let t=new V;t.position.set(e*.3,.12,0),t.add(Q(Z.box,a,.9,.06,.45,e*.45,0,0)),n.add(t),o.push(t)}let s=Of(e.radius+.2);return s.position.y=-2.95,t.add(s),t.userData={body:n,wings:o,height:4.2,flyY:3},t}var Kf={haste:16730666,regen:4915034,dd:4885247,bounty:16762928};function qf(e){let t=new V,n=Kf[e]??16777215,r=new V,i=new c({color:n,emissive:n,emissiveIntensity:1.1,roughness:.3,flatShading:!0});e===`bounty`?r.add(Q(Z.cyl,i,.55,.14,.55,0,0,0).rotateX(Math.PI/2)):e===`haste`?r.add(Q(Z.cone,i,.45,.9,.45,0,0,0)):e===`regen`?r.add(Q(Z.ico,i,.5,.5,.5,0,0,0)):r.add(Q(Z.oct,i,.42,.7,.42,0,0,0)),r.position.y=1.2,t.add(r);let a=new z(Z.disc,new T({color:n,transparent:!0,opacity:.35,depthWrite:!1}));return a.rotation.x=-Math.PI/2,a.scale.setScalar(1.2),a.position.y=.06,t.add(a),t.userData={gem:r,glow:a},t}var Jf=new Map;function Yf(e){let t=Jf.get(e);if(t)return t;let n=document.createElement(`canvas`);n.width=n.height=64;let r=n.getContext(`2d`);return r.fillStyle=`rgba(20, 16, 10, 0.75)`,r.beginPath(),r.arc(32,32,30,0,Math.PI*2),r.fill(),r.strokeStyle=`#d8b25a`,r.lineWidth=3,r.stroke(),r.font=`36px sans-serif`,r.textAlign=`center`,r.textBaseline=`middle`,r.fillText(e||`?`,32,35),t=new fr(n),t.colorSpace=rt,Jf.set(e,t),t}function Xf(e){let n=new V,r=new c({color:9071162,roughness:.8,flatShading:!0});n.add(Q(Z.ico,r,.35,.28,.35,0,.25,0));let i=new t(new Jt({map:Yf(e?.icon),depthWrite:!1}));i.scale.setScalar(1.1),i.position.y=1.3,n.add(i);let a=new z(Z.disc,new T({color:16767370,transparent:!0,opacity:.25,depthWrite:!1}));return a.rotation.x=-Math.PI/2,a.scale.setScalar(.8),a.position.y=.06,n.add(a),n.userData={icon:i,glow:a},n}function Zf(e){if(Eu(e))return jf(e);switch(e.kind){case`hero`:return kf(e.def,e.team);case`creep`:return Mf(e);case`tower`:return Nf(e);case`barracks`:return Pf(e);case`ancient`:return Ff(e);case`fountain`:return If(e);case`shop`:return Lf(e);case`neutral`:return Bf(e);case`boss`:return Vf(e);case`ward`:return Hf(e);case`summon`:return zf[e.model]?Bf(e):Wf(e);case`courier`:return Gf(e);default:return new V}}var $=`Abilities\\Weapons\\`,Qf={rime:{art:`Abilities\\Spells\\Undead\\DarkRitual\\DarkRitualTarget.mdx`,launch:[15,0,66]},marksman:{art:`${$}Rifle\\RifleImpact.mdx`,instant:!0,launch:[0,0,30]},kaelis:{art:`war3mapImported\\BlueMissile.mdx`},tamsin:{art:`${$}Rifle\\RifleImpact.mdx`,instant:!0},mossa:{art:`${$}DemonHunterMissile\\DemonHunterMissile.mdx`,arc:.1},solenne:{art:`${$}PriestMissile\\PriestMissile.mdx`,arc:.1},pyra:{art:`war3mapImported\\LinaHandAttachments.mdx`},malric:{art:`war3mapImported\\Warlock_Projectile.mdx`},astrap:{art:`${$}GryphonRiderMissile\\GryphonRiderMissile.mdx`},selene:{art:`${$}SentinelMissile\\SentinelMissile.mdx`,arc:.05},kelvane:{art:`${$}LichMissile\\LichMissile.mdx`},zephar:{art:`${$}DragonHawkMissile\\DragonHawkMissile.mdx`},zalumi:{art:`${$}WingedSerpentMissile\\WingedSerpentMissile.mdx`},shendra:{art:`units\\nightelf\\Vengeance\\Vengeance.mdx`},morrik:{art:`Abilities\\Spells\\Undead\\OrbOfDeath\\AnnihilationMissile.mdx`},vexis:{art:`war3mapImported\\KnifeMissile.mdx`},aerin:{art:`${$}Arrow\\ArrowMissile.mdx`,arc:.1},virex:{art:`${$}ChimaeraAcidMissile\\ChimaeraAcidMissile.mdx`},drakon:{art:`${$}GreenDragonMissile\\GreenDragonMissile.mdx`},drakon_red:{art:`${$}RedDragonBreath\\RedDragonMissile.mdx`},drakon_blue:{art:`${$}FrostWyrmMissile\\FrostWyrmMissile.mdx`},plague_ward:{art:`Abilities\\Weapons\\snapMissile\\snapMissile.mdx`,arc:.15},vodrak:{art:`${$}WitchDoctorMissile\\WitchDoctorMissile.mdx`,arc:.1},rhastok:{art:`${$}ShadowHunterMissile\\ShadowHunterMissile.mdx`},somnar:{art:`${$}VoidWalkerMissile\\VoidWalkerMissile.mdx`},netherix:{art:`${$}GreenDragonMissile\\GreenDragonMissile.mdx`},gravax:{art:`${$}SpiritOfVengeanceMissile\\SpiritOfVengeanceMissile.mdx`},luminos:{art:`${$}FaerieDragonMissile\\FaerieDragonMissile.mdx`},grimdal:{art:`${$}VengeanceMissile\\VengeanceMissile.mdx`},banshra:{art:`${$}DragonHawkMissile\\DragonHawkMissile.mdx`},nevrak:{art:`ShadowMissile.mdx`},kaldris:{art:`war3mapImported\\SoulMissile.mdx`},gizmar:{art:`Abilities\\Spells\\Orc\\LightningBolt\\LightningBoltMissile.mdx`},veyra:{art:`${$}Arrow\\ArrowMissile.mdx`,arc:.1},vypris:{art:`Abilities\\Spells\\Items\\OrbVenom\\OrbVenomMissile.mdx`},ashkar:{art:`${$}HunterMissile\\HunterMissile.mdx`,arc:.1},pyrebone:{art:`${$}MoonPriestessMissile\\MoonPriestessMissile.mdx`,arc:.1},hushveil:{art:`${$}BloodElfSpellThiefMISSILE\\BloodElfSpellThiefMISSILE.mdx`},obsidra:{art:`${$}AvengerMissile\\AvengerMissile.mdx`},dryalis:{art:`${$}Dryadmissile\\Dryadmissile.mdx`,arc:.1},pyrice:{art:`Abilities\\Spells\\Other\\ForkedLightning\\ForkedLightningTarget.mdx`},gorgara:{art:`${$}NagaArrowMissile\\NagaArrowMissile.mdx`,arc:.1},jahrak:{art:`${$}Axe\\AxeMissile.mdx`,arc:.1},vorlash:{art:`${$}KeeperGroveMissile\\KeeperGroveMissile.mdx`},psylith:{art:`${$}WardenMissile\\WardenMissile.mdx`},lunara:{art:`${$}Arrow\\ArrowMissile.mdx`,arc:.1},threadix:{art:`${$}CryptFiendMissile\\CryptFiendMissile.mdx`},voltrath:{art:`Abilities\\Spells\\Demon\\DemonBoltImpact\\DemonBoltImpact.mdx`,instant:!0},death_ward:{art:`${$}SerpentWardMissile\\SerpentWardMissile.mdx`,launch:[0,0,90],arc:.15},eidolon:{art:`${$}VoidWalkerMissile\\VoidWalkerMissile.mdx`},creep_radiant_ranged:{art:`${$}DruidoftheTalonMissile\\DruidoftheTalonMissile.mdx`,arc:.15},creep_dire_ranged:{art:`${$}NecromancerMissile\\NecromancerMissile.mdx`},tower_radiant:{art:`${$}AncientProtectorMissile\\AncientProtectorMissile.mdx`,arc:.1,launch:[0,80,310],impact:120},tower_dire:{art:`${$}ZigguratMissile\\ZigguratMissile.mdx`,arc:.15,launch:[0,0,145],impact:120},fountain_radiant:{art:`${$}RedDragonBreath\\RedDragonMissile.mdx`,launch:[0,0,120]},fountain_dire:{art:`${$}RedDragonBreath\\RedDragonMissile.mdx`,launch:[0,0,120]},trollShaman:{art:`${$}FireballMissile\\FireballMissile.mdx`,arc:.15},outrunner:{art:`${$}Arrow\\ArrowMissile.mdx`,arc:.15},turret:{art:`${$}GyroCopter\\GyroCopterMissile.mdx`},assassinate:{art:`${$}CannonTowerMissile\\CannonTowerMissile.mdx`,launch:[0,0,30]},homing_missile:{art:`war3mapImported\\CleanerV5.mdx`,launch:[0,0,120]},stifling_dagger:{art:`${$}WardenMissile\\WardenMissile.mdx`,launch:[0,0,70]},magic_missile:{art:`Abilities\\Spells\\Other\\FrostBolt\\FrostBoltMissile.mdx`,scale:1.5},chain_frost:{art:`${$}FrostWyrmMissile\\FrostWyrmMissile.mdx`},storm_hammer:{art:`Abilities\\Spells\\Human\\StormBolt\\StormBoltMissile.mdx`,scale:2},arcane_bolt:{art:`Abilities\\Weapons\\WingedSerpentMissile\\WingedSerpentMissile.mdx`,scale:2},concussive_shot:{art:`war3mapImported\\DivineWrathMissile.mdx`},poison_touch:{art:`${$}GargoyleMissile\\GargoyleMissile.mdx`,scale:1.5},death_coil:{art:`Abilities\\Spells\\Undead\\AnimateDead\\AnimateDeadTarget.mdx`,instant:!0,impact:0},shadow_strike:{art:`Abilities\\Spells\\NightElf\\shadowstrike\\ShadowStrikeMissile.mdx`},shackleshot:{art:`${$}ColdArrow\\ColdArrowMissile.mdx`,scale:.8},paralyzing_cask:{art:`Abilities\\Spells\\Other\\AcidBomb\\BottleMissile.mdx`,scale:1.4,arc:.15},hellfire_blast:{art:`${$}LordofFlameMissile\\LordofFlameMissile.mdx`,scale:1.4},exorcism:{art:`Abilities\\Spells\\Undead\\Possession\\PossessionMissile.mdx`},heat_seeking_missile:{art:`Abilities\\Spells\\Other\\TinkerRocket\\TinkerRocketMissile.mdx`,arc:.1,launch:[0,0,100]},dragon_slave:{art:`FireFlyGroundEffect.mdx`,launch:[0,0,0],impact:0},earth_spike:{art:`Abilities\\Spells\\Undead\\Impale\\ImpaleMissTarget.mdx`,trail:1.4},wave_of_terror:{art:`Abilities\\Spells\\Other\\HowlOfTerror\\HowlCaster.mdx`,trail:3},gush:{art:`Units\\Human\\WaterElemental\\WaterElemental.mdx`,launch:[0,0,0],impact:0},viscous_nasal_goo:{art:`Abilities\\Spells\\NightElf\\CorrosiveBreath\\CorrosiveBreathMissile.mdx`},sonic_wave:{art:`effects\\SonicBreathStream.mdx`,launch:[0,0,0],impact:0},powershot:{art:`${$}BallistaMissile\\BallistaMissile.mdx`,scale:.8,trail:2,trailArt:`effects\\Tornado.mdx`},venomous_gale:{art:`Abilities\\Spells\\NightElf\\shadowstrike\\ShadowStrikeMissile.mdx`,scale:2,launch:[0,0,30],impact:30},breathe_fire:{art:`Abilities\\Spells\\Other\\BreathOfFire\\BreathOfFireMissile.mdx`,launch:[0,0,0],impact:0},illuminate:{art:`war3mapImported\\Illuminate.mdx`,launch:[0,0,0],impact:0},carrion_swarm:{art:`Abilities\\Spells\\Undead\\CarrionSwarm\\CarrionSwarmMissile.mdx`,launch:[0,0,0],impact:0},requiem_of_souls:{art:`hunzhiwange.mdx`,launch:[0,0,0],impact:0},ice_blast:{art:`war3mapImported\\PlasmaShot.mdx`,scale:.85},gust:{art:`war3mapImported\\Gust.mdx`,launch:[0,0,0],impact:0},viper_strike:{art:`Abilities\\Spells\\NightElf\\shadowstrike\\ShadowStrikeMissile.mdx`,scale:1.4},dual_breath:{art:`Abilities\\Spells\\Other\\BreathOfFrost\\BreathOfFrostMissile.mdx`,launch:[0,0,0],impact:0,trail:2,trailArt:`Abilities\\Spells\\Other\\BreathOfFire\\BreathOfFireMissile.mdx`},whirling_axes:{art:`${$}RexxarMissile\\RexxarMissile.mdx`,scale:.7},impale:{art:`Abilities\\Spells\\Undead\\Impale\\ImpaleMissTarget.mdx`,trail:1.4},elunes_arrow:{art:`${$}BallistaMissile\\BallistaMissile.mdx`,scale:.8},the_swarm:{art:`${$}CryptFiendMissile\\CryptFiendMissile.mdx`,scale:1.4},mystic_snake:{art:`war3mapImported\\MysticSnake_FX_v1.mdx`,scale:1.2},frost_arrows:{art:`Abilities\\Spells\\Other\\FrostArrows\\NagaColdArrowMissile.mdx`,arc:.15},poison_attack:{art:`Abilities\\Spells\\NightElf\\CorrosiveBreath\\CorrosiveBreathMissile.mdx`},burning_spear:{art:`${$}FlamingArrow\\FlamingArrowMissile.mdx`},searing_arrows:{art:`${$}SearingArrow\\SearingArrowMissile.mdx`,arc:.1},glaives_of_wisdom:{art:`effects\\GlaivesOfWisdomMissile_2.mdx`,arc:.1},arcane_orb:{art:`${$}IllidanMissile\\IllidanMissile.mdx`},impetus:{art:`${$}WyvernSpear\\WyvernSpearMissile.mdx`,arc:.53,hit:`Abilities\\Spells\\NightElf\\ThornsAura\\ThornsAuraDamage.mdx`},liquid_fire:{art:`Abilities\\Spells\\Other\\ForkedLightning\\ForkedLightningTarget.mdx`},aquor:{art:`${$}SeaElementalMissile\\SeaElementalMissile.mdx`},nethrak:{art:`war3mapImported\\EredarMissile.mdx`},terrox_meta:{art:`${$}IllidanMissile\\IllidanMissile.mdx`},ensnare:{art:`Abilities\\Spells\\Orc\\Ensnare\\ensnaremissile.mdx`},spirit_lance:{art:`war3mapImported\\Gaussgun.mdx`,hit:`${$}IllidanMissile\\IllidanMissile.mdx`},chaos_bolt:{art:`war3mapImported\\ChaosBolt.mdx`},adaptive_strike:{art:`Abilities\\Spells\\Other\\AcidBomb\\BottleMissile.mdx`,arc:.4,hit:`Abilities\\Spells\\Other\\CrushingWave\\CrushingWaveDamage.mdx`},unstable_concoction:{art:`${$}PhoenixMissile\\Phoenix_Missile.mdx`},shadow_poison:{art:`war3mapImported\\shamanyouranus-ShadowyMissile.mdx`,scale:.8},spectral_dagger:{art:`${$}WardenMissile\\WardenMissile.mdx`},shuriken_toss:{art:`${$}SentinelMissile\\SentinelMissile.mdx`,scale:.8},jinzor:{art:`${$}BatTrollMissile\\BatTrollMissile.mdx`,arc:.1},meat_hook:{art:`${$}WardenMissile\\WardenMissile.mdx`,scale:1.4},hookshot:{art:`${$}WardenMissile\\WardenMissile.mdx`,scale:1.4},rocket_flare:{art:`Abilities\\Spells\\Other\\TinkerRocket\\TinkerRocketMissile.mdx`,launch:[0,0,120]},ghost_ship:{art:`Units\\Creeps\\UndeadDestroyerShip\\UndeadDestroyerShip.mdx`,scale:.8,launch:[0,0,0],impact:0,trail:2,trailArt:`effects\\BoatWave.mdx`},shock_wave:{art:`Abilities\\Spells\\Orc\\Shockwave\\ShockwaveMissile.mdx`,launch:[0,0,0],impact:0},flamebreak:{art:`war3mapImported\\FlameBreakMissile.mdx`,arc:.2},ice_shards:{art:`war3mapImported\\IceBolt.mdx`,scale:1.3},wispyr:{art:`Abilities\\Spells\\NightElf\\SpiritOfVengeance\\SpiritOfVengeanceBirthMissile.mdx`},ignaris:{art:`war3mapImported\\Phoenix_Missile_smaller.mdx`},blastkin:{art:`${$}Mortar\\MortarMissile.mdx`,arc:.3},galvorn:{art:`Abilities\\Spells\\Human\\StormBolt\\StormBoltMissile.mdx`},timber_chain:{art:`war3mapImported\\TimberChainHead.mdx`,scale:1.3,trail:.6,trailArt:`war3mapImported\\TimberChainElement_V1_02.mdx`},fire_spirits:{art:`war3mapImported\\FireSpirit_2.mdx`,scale:1.6,arc:.15},arcanor:{art:`${$}BloodElfMissile\\BloodElfMissile.mdx`},thaumar:{art:`${$}PriestMissile\\PriestMissile.mdx`,arc:.1},fatewyn:{art:`${$}PriestMissile\\PriestMissile.mdx`,arc:.1},glacivyr:{art:`war3mapImported\\WinterWyvernMissile.mdx`},forge_spirit:{art:`${$}LavaSpawnMissile\\LavaSpawnMissile.mdx`},splinter_blast:{art:`war3mapImported\\SplinterBlastMainProjectile_PE.mdx`,scale:1.3},fortunes_end:{art:`H\\Oracle\\FortuneEnd.mdx`,scale:.3,hit:`war3mapImported\\FortunesEndTarget.mdx`},tornado:{art:`Abilities\\Spells\\Other\\Tornado\\TornadoElemental.mdx`,scale:.6,launch:[0,0,0],impact:0},deafening_blast:{art:`Abilities\\Spells\\Items\\WandOfNeutralization\\NeutralizationMissile.mdx`,scale:2.7},sylvrak:{art:`${$}RexxarMissile\\RexxarMissile.mdx`},gargolth:{art:`Abilities\\Spells\\Other\\BlackArrow\\BlackArrowMissile.mdx`},zealorn:{art:`${$}FarseerMissile\\FarseerMissile.mdx`,arc:.1},zetrix:{art:`war3mapImported\\GnollMissile.mdx`},faelix:{art:`${$}FaerieDragonMissile\\FaerieDragonMissile.mdx`},brew_storm:{art:`Units\\Creeps\\StormPandarenBrewmaster\\StormPandarenBrewmaster_Missile.mdx`},boar:{art:`${$}QuillSprayMissile\\QuillSprayMissile.mdx`},spark_wraith:{art:`war3mapImported\\SparkWraith2.mdx`},illusory_orb:{art:`war3mapImported\\IllusoryOrb_Pulse.mdx`,scale:3},refraction:{art:`war3mapImported\\Lanaya_RefProjectile.mdx`}},$f=[0,0,60],ep=60,tp=e=>e?Qf[e]??null:null,np=class{constructor(e,t){this.def=e,this.sx=t.x,this.sz=t.z,this.traveled=0,this.lx=t.x,this.lz=t.z,this.yaw=0,this.launchH=(e.launch??$f)[2]*ln,this.impactH=(e.impact??ep)*ln,this.side=(e.launch??$f)[1]*ln,this.fwd=(e.launch??$f)[0]*ln}step(e,t,n,r,i){this.traveled+=Math.hypot(e-this.lx,t-this.lz),this.lx=e,this.lz=t;let a=n===void 0?0:Math.hypot(n-e,r-t),o=Math.max(.001,this.traveled+a),s=Math.min(1,this.traveled/o),c=n===void 0?0:n-e,l=n===void 0?0:r-t;c*c+l*l>1e-6&&(this.yaw=Math.atan2(c,l));let u=1-s,d=Math.sin(this.yaw),f=Math.cos(this.yaw),p=(d*this.fwd+f*this.side)*u,m=(f*this.fwd-d*this.side)*u,h=(this.def.arc??0)*o;return i.x=e+p,i.z=t+m,i.y=this.launchH+(this.impactH-this.launchH)*s+4*h*s*(1-s),i.yaw=this.yaw,i.pitch=Math.atan2(this.impactH-this.launchH+4*h*(1-2*s),o),i}},rp=`UI/Feedback/Confirmation/Confirmation.mdx`,ip=new wt(1,8,6),ap=new We(.9,1,48),op=new Ke(1,40),sp=new i(1,1,1,16,1,!0),cp=new xe(.25,0);function lp(e,t=1){return new T({color:e,transparent:!0,opacity:t,depthWrite:!1,side:2,blending:2})}var up=new Map;function dp(e,t){let n=`${e}|${t}`,r=up.get(n);return r||(r=lp(e,t),up.set(n,r)),r}var fp=12,pp=class{constructor(e){this.scene=e,this.projMeshes=new Map,this.zoneMeshes=new Map,this.effects=[],this.free=new Map,this.pooledLive=0,this.frame=0,this.zoneFrame=0,this.particles=null,this.fx=new Gn(e),this.camera=null,this.missiles=new Map,this.hidesZone=null;for(let e of Object.values(Qf))for(let t of[e.art,e.trailArt,e.hit])t&&Pn(t);Pn(rp)}syncProjectiles(e,t){let n=++this.frame;for(let r of e){if(this.syncMissile(r,t,n))continue;let e=this.projMeshes.get(r);e||(e=new z(ip,dp(r.color??16777215,.95)),e.scale.setScalar(r.size??.3),this.scene.add(e),this.projMeshes.set(r,e),r.rx=r.x,r.rz=r.z),e.userData.frame=n,r.rx+=(r.x-r.rx)*Math.min(1,.5+t*.5),r.rz+=(r.z-r.rz)*Math.min(1,.5+t*.5),e.position.set(r.rx,(r.y??1.4)+B(r.rx,r.rz),r.rz)}for(let[e,t]of this.projMeshes)t.userData.frame!==n&&(this.scene.remove(t),this.projMeshes.delete(e));for(let[e,t]of this.missiles)t.frame!==n&&(this.missiles.delete(e),t.def.instant?this.fx.burst(t.def.art,t.x,t.y,t.z,{yaw:t.yaw,seq:`birth`}):t.handle?.kill(),t.def.hit&&this.fx.burst(t.def.hit,t.x,t.y,t.z,{yaw:t.yaw}))}syncMissile(e,t,n){let r=this.missiles.get(e);if(!r){let t=tp(e.art);if(!t||!Pn(t.art))return!1;e.rx=e.x,e.rz=e.z,r={def:t,flight:new np(t,e),handle:t.instant||t.trail&&!t.trailArt?null:this.fx.spawn(t.art,{scale:t.scale??1}),pose:{},next:0},this.missiles.set(e,r)}r.frame=n,e.rx+=(e.x-e.rx)*Math.min(1,.5+t*.5),e.rz+=(e.z-e.rz)*Math.min(1,.5+t*.5);let i=e.target,a=e.line?e.x+e.line.dx:i?.alive!==!1&&i?i.x:e.tx,o=e.line?e.z+e.line.dz:i?.alive!==!1&&i?i.z:e.tz,s=r.flight.step(e.rx,e.rz,a,o,r.pose);for(s.y+=B(s.x,s.z),r.x=s.x,r.y=s.y,r.z=s.z,r.yaw=s.yaw,r.handle?.set(s.x,s.y,s.z,s.yaw,s.pitch);r.def.trail&&r.flight.traveled>=r.next;r.next+=r.def.trail){let e=r.def.trailArt??r.def.art;this.fx.burst(e,s.x,B(s.x,s.z),s.z,{yaw:s.yaw,scale:r.def.trailArt?1:r.def.scale??1})}return!0}syncZones(e,t,n=1/60){let r=++this.zoneFrame;for(let i of e){if(this.hidesZone?.(i))continue;let e=this.zoneMeshes.get(i);if(!e){e=new V;let t=new z(ap,lp(i.color,.8));t.rotation.x=-Math.PI/2;let n=new z(op,dp(i.color,i.style===`spin`?.12:.18));if(n.rotation.x=-Math.PI/2,e.add(t,n),e.userData.shards=[],i.style===`blizzard`||i.style===`shrapnel`||i.style===`spin`){let t=i.style===`spin`?6:18,n=dp(i.color,.9);for(let r=0;r<t;r++){let t=new z(cp,n);t.userData={a:Math.random()*Math.PI*2,d:Math.random(),h:Math.random()*8,sp:6+Math.random()*6},e.add(t),e.userData.shards.push(t)}}this.scene.add(e),this.zoneMeshes.set(i,e)}e.userData.frame=r,e.position.set(i.x,.12+B(i.x,i.z),i.z),e.children[0].scale.setScalar(i.r),e.children[1].scale.setScalar(i.r);let a=Math.min(1,i.remaining/.4);e.children[0].material.opacity=.8*a;for(let r of e.userData.shards){let e=r.userData;if(i.style===`spin`){let n=e.a+t*14;r.position.set(Math.cos(n)*i.r*.8,1.2,Math.sin(n)*i.r*.8),r.scale.set(1,1,4),r.rotation.y=-n}else{e.h-=e.sp*n,e.h<0&&(e.h=8,e.a=Math.random()*Math.PI*2,e.d=Math.random());let t=Math.sqrt(e.d)*i.r;r.position.set(Math.cos(e.a)*t,e.h,Math.sin(e.a)*t)}}}for(let[e,t]of this.zoneMeshes)t.userData.frame!==r&&(this.scene.remove(t),t.children[0].material.dispose(),this.zoneMeshes.delete(e))}add(e,t,n,r=null){if(this.scene.add(e),this.effects.push({mesh:e,t:0,duration:t,update:n,poolKey:r}),r&&(this.pooledLive++,this.pooledLive>64)){let e=this.effects.find(e=>e.poolKey&&e.t<e.duration);e&&(e.t=e.duration)}}acquire(e,t){let n=`${e}|${t}`,r=this.free.get(n)?.pop();return r?{m:r,key:n}:{m:new z(e===`ring`?ap:sp,lp(t,.9)),key:n}}release(e){let t=e.mesh,n=this.free.get(e.poolKey);n||(n=[],this.free.set(e.poolKey,n)),n.length<fp?(t.rotation.set(0,0,0),t.scale.setScalar(1),n.push(t)):t.material.dispose(),this.pooledLive--}ring(e,t,n,r,i=.5){let{m:a,key:o}=this.acquire(`ring`,r);a.rotation.set(-Math.PI/2,0,0),a.position.set(e,.15+B(e,t),t),a.scale.setScalar(n*.3),a.material.opacity=.9,this.add(a,i,(e,t)=>{a.scale.setScalar(n*(.3+.7*Math.sqrt(t))),a.material.opacity=.9*(1-t)},o)}column(e,t,n,r=.8,i=1.2){let{m:a,key:o}=this.acquire(`column`,n);a.position.set(e,4+B(e,t),t),a.scale.set(i,8,i),a.material.opacity=.7,this.add(a,r,(e,t)=>{a.material.opacity=.7*(1-t),a.scale.set(i*(1-t*.5),8,i*(1-t*.5))},o)}line(e,t,n,r,i,a=.3,o=1.2){let s=new gr().setFromPoints([new H(e,o+B(e,t),t),new H(n,o+B(n,r),r)]),c=new Tn(s,new rr({color:i,transparent:!0,blending:2}));this.add(c,a,(e,t)=>{c.material.opacity=1-t})}stunMarker(e,t,n=16769104){let{m:r,key:i}=this.acquire(`ring`,n);r.rotation.set(-Math.PI/2,0,0),r.scale.setScalar(.6),r.material.opacity=.9,r.position.set(e.x,(e.kind===`hero`?2.9:1.9)+B(e.x,e.z),e.z),this.add(r,Math.min(t,4),(t,n)=>{if(!e.alive){t.t=t.duration;return}r.position.set(e.x,(e.kind===`hero`?2.9:1.9)+B(e.x,e.z),e.z),r.rotation.z+=.15,r.material.opacity=.9},i)}aimLine(e,t,n){let r=new gr().setFromPoints([new H,new H]),i=new Tn(r,new rr({color:16724016,transparent:!0}));this.add(i,n,(n,a)=>{let o=r.attributes.position;o.setXYZ(0,e.x,1.6+B(e.x,e.z),e.z),o.setXYZ(1,t.x,1.2+B(t.x,t.z),t.z),o.needsUpdate=!0,i.material.opacity=.4+.6*Math.abs(Math.sin(a*20))})}rocket(e,t,n,r,i=16757575,a=.35){let o=new z(ip,dp(i,1));o.scale.setScalar(.22);let s=!1;this.add(o,a,(a,c)=>{let l=e+(n-e)*c,u=t+(r-t)*c;o.position.set(l,1.4+Math.sin(c*Math.PI)*4+B(l,u),u),c>=1&&!s&&(s=!0,this.ring(n,r,1.3,i,.3),this.particles&&(this.particles.burst(n,r,{n:14,speed:7,up:4,life:.4,size:.4,color:i,y:.6,grav:14,drag:2}),this.particles.dust(n,r,1.2,6)))}),o.userData.sharedMat=!0}dash(e,t,n,r,i=10147839){this.line(e,t,n,r,i,.45,1),this.line(e,t,n,r,16777215,.25,1.4),this.ring(e,t,1.4,i,.35),this.ring(n,r,1.8,i,.45)}marker(e,t,n){Pn(rp)?this.fx.burst(rp,e,B(e,t),t,{tint:n}):this.ring(e,t,1.2,n,.45)}update(e){this.camera&&this.fx.update(e,this.camera);for(let t=this.effects.length-1;t>=0;t--){let n=this.effects[t];n.t+=e;let r=Math.min(1,n.t/n.duration);n.update?.(n,r),n.t>=n.duration&&(this.scene.remove(n.mesh),n.poolKey?this.release(n):(n.mesh.userData.sharedMat||n.mesh.material?.dispose(),n.mesh.geometry&&n.mesh.isLine&&n.mesh.geometry.dispose()),this.effects.splice(t,1))}}},mp=class{constructor(e){this.data=new Uint8Array(G*G*4),this.alpha=new Float32Array(G*G).fill(1),this.tex=new De(this.data,G,G,r),this.tex.magFilter=Vn,this.tex.minFilter=Vn,this.tex.needsUpdate=!0;let t=new z(pd(.25),new T({map:this.tex,transparent:!0,depthWrite:!1,color:16777215}));t.renderOrder=1,e.add(t),this.mesh=t,this.enabled=!0}update(e,t){let n=Math.min(1,t*6),r=this.data;for(let t=0;t<G;t++){let i=(G-1-t)*G;for(let a=0;a<G;a++){let o=t*G+a,s=this.enabled&&!e[o]?1:0;this.alpha[o]+=(s-this.alpha[o])*n;let c=(i+a)*4;r[c]=8,r[c+1]=10,r[c+2]=18,r[c+3]=this.alpha[o]*150}}this.tex.needsUpdate=!0}},hp=new H,gp={x:0,y:0},_p=(e,t)=>Math.imul(e^(t|0),16777619)+2654435769|0;function vp(e,t,n,r=`all`,i=0,a=0){let o=_p(2166136261,Math.round(e[12]*100));o=_p(o,Math.round(e[13]*100)),o=_p(o,Math.round(e[14]*100)),o=_p(o,Math.round(t*100)),o=_p(o,n.length),o=_p(o,r===`all`?1:r===`heroes`?2:3),o=_p(o,i),o=_p(o,a);for(let e=0;e<n.length;e++){let t=n[e],r=t.unit;o=_p(o,r.id),o=_p(o,Math.round(t.x*10)),o=_p(o,Math.round(t.z*10)),o=_p(o,Math.round(r.hp)),o=_p(o,Math.round(r.mana??0)),o=_p(o,(r.level??0)*4+ +!!r.mods?.stunned+(r.isBuilding&&r.isInvulnerable?.()?2:0));let i=r.channel;i&&(o=_p(o,1+Math.round(i.elapsed/i.duration*64)));let a=r.buffs;if(a)for(let e=0;e<a.length;e++)(a[e].shield>0||a[e].id===`aegis`)&&(o=_p(o,Math.round(a[e].shield||7)))}return o}var yp=`rgba(0,0,0,0.75)`,bp=`rgba(255,240,170,0.85)`,xp=`rgba(0,0,0,0.45)`,Sp=`#3d7bff`,Cp=`#cfe6ff`,wp=[`#5ce65c`,`#3aa63a`,`#e0a83a`,`#d23a2e`,`#5c7f5c`,`#8a5a55`],Tp=[yp,...wp,bp,xp,Sp,Cp],Ep=class{constructor(e,t=2){this.canvas=e,this.ctx=e.getContext(`2d`),this.texts=[],this.flags={healthBars:`all`,damageNumbers:!0},this.maxDpr=t,this.buckets=new Map(Tp.map(e=>[e,[]])),this.badges=new Map,this.lastSig=null,this.skipped=0,this.labels=[],this.heroBuf=[],this.nLabels=0,this.resize()}setMaxDpr(e){e!==this.maxDpr&&(this.maxDpr=e,this.resize())}resize(){let e=Math.min(window.devicePixelRatio||1,2,this.maxDpr);this.dpr=e,this.canvas.width=window.innerWidth*e,this.canvas.height=window.innerHeight*e,this.canvas.style.width=`${window.innerWidth}px`,this.canvas.style.height=`${window.innerHeight}px`,this.lastSig=null,this.clearBadges()}project(e,t,n,r){return hp.set(t,n,r).project(e),hp.z>1?null:(gp.x=(hp.x*.5+.5)*window.innerWidth,gp.y=(-hp.y*.5+.5)*window.innerHeight,gp)}floatText(e,t,n,r=14,i,a){this.texts.push({x:e?e.x:i,z:e?e.z:a,y:(e?e.kind===`hero`?3.4:2.2:2)+B(e?e.x:i,e?e.z:a),text:t,color:n,size:r,t:0,life:1.1,dx:(Math.random()-.5)*.8}),this.texts.length>80&&this.texts.shift()}rect(e,t,n,r,i){this.buckets.get(e).push(t,n,r,i)}label(e,t,n,r,i){let a=this.labels[this.nLabels];a||(a={text:``,x:0,y:0,color:``,font:``},this.labels.push(a)),a.text=e,a.x=t,a.y=n,a.color=r,a.font=i,this.nLabels++}clearBadges(){for(let e of this.badges.values())e.img.close?.();this.badges.clear()}badge(e,t){let n=`${e.displayName}|${e.level}|${+!!t}|${this.dpr}`,r=this.badges.get(n);if(r)return r;this.badges.size>200&&this.clearBadges();let i=this.dpr,a=typeof OffscreenCanvas<`u`,o=a?new OffscreenCanvas(Math.ceil(160*i),Math.ceil(30*i)):document.createElement(`canvas`);a||(o.width=Math.ceil(160*i),o.height=Math.ceil(30*i));let s=o.getContext(`2d`);return s.setTransform(i,0,0,i,0,0),s.textAlign=`center`,s.font=`11px sans-serif`,s.fillStyle=t?`#d6ffd6`:`#ffd6d0`,s.fillText(e.displayName,80,12),s.fillStyle=`rgba(0,0,0,0.8)`,s.fillRect(31,14,16,13),s.fillStyle=`#ffe9a8`,s.font=`bold 10px sans-serif`,s.fillText(String(e.level),39,24),r={img:a?o.transferToImageBitmap():o,w:160,h:30},this.badges.set(n,r),r}draw(e,t,n,r,i=null){let a=this.ctx,o=window.innerWidth,s=window.innerHeight,c=this.flags.healthBars,l=this.texts.length>0||i&&i.length>0,u=vp(e.matrixWorld.elements,e.position.y,t,c,o,s);if(!l&&u===this.lastSig)return this.skipped++,!1;this.lastSig=l?null:u,a.setTransform(this.dpr,0,0,this.dpr,0,0),a.clearRect(0,0,o,s);for(let e of this.buckets.values())e.length=0;this.nLabels=0;let d=this.heroBuf;if(d.length=0,c!==`off`){for(let r=0;r<t.length;r++){let{unit:i,x:a,z:l,height:u}=t[r];if(i.kind===`fountain`||i.kind===`shop`||c===`heroes`&&i.kind!==`hero`&&!i.isBuilding&&!(i.controllable&&i.owner===n))continue;let f=this.project(e,a,u+.4,l);if(!f||f.x<-60||f.y<-30||f.x>o+60||f.y>s+30)continue;let p=f.x,m=f.y,h=i.kind===`hero`,g=i.isBuilding,_=i.kind===`boss`,v=h?64:_?90:g?80:i.kind===`ward`?22:34,y=h||g||_?7:4,b=Math.round(p-v/2),x=Math.round(m),S=i.team===n.team,C=Math.max(0,i.hp/i.maxHp);this.rect(yp,b-1,x-1,v+2,y+2+(h?4:0));let w=i.team===2,T=i===n?wp[0]:S?wp[1]:w?wp[2]:wp[3];g&&i.isInvulnerable()&&(T=S?wp[4]:wp[5]),this.rect(T,b,x,v*C,y);let E=0,D=!1,O=i.buffs;for(let e=0;e<O.length;e++){let t=O[e];t.shield>0&&(E+=t.shield),t.id===`aegis`&&(D=!0)}if(E>0&&this.rect(bp,b+v*C,x,Math.min(v*(1-C),v*E/i.maxHp),y),h){for(let e=250;e<i.maxHp;e+=250)this.rect(xp,b+Math.round(v*e/i.maxHp),x,1,y);this.rect(Sp,b,x+y+1,v*(i.maxMana?i.mana/i.maxMana:0),3),d.push(b,x,i,S),i.mods.stunned&&this.label(`STUNNED`,p,x-16,`#ffe050`,`11px sans-serif`);let e=i.channel;e&&e.duration>0&&(this.rect(yp,b-1,x+y+5,v+2,4),this.rect(Cp,b,x+y+6,v*Math.min(1,e.elapsed/e.duration),2)),D&&this.label(`AEGIS`,p+v/2+18,x+7,`#ffd34d`,`11px sans-serif`)}else _&&this.label(i.displayName||i.name,p,x-4,`#ffcf80`,`bold 12px sans-serif`)}for(let[e,t]of this.buckets)if(t.length){a.fillStyle=e,a.beginPath();for(let e=0;e<t.length;e+=4)a.rect(t[e],t[e+1],t[e+2],t[e+3]);a.fill()}for(let e=0;e<d.length;e+=4){let t=this.badge(d[e+2],d[e+3]);a.drawImage(t.img,d[e]-48,d[e+1]-16,t.w,t.h)}if(this.nLabels){a.textAlign=`center`;for(let e=0;e<this.nLabels;e++){let t=this.labels[e];a.font=t.font,a.fillStyle=t.color,a.fillText(t.text,t.x,t.y)}}}if(i){a.textAlign=`center`;for(let t of i){let n=this.project(e,t.x,2.5+B(t.x,t.z),t.z);if(!n)continue;let r=t.age/t.life;a.globalAlpha=Math.max(0,1-r*r);let i=Math.abs(Math.sin(t.age*6))*6;a.font=`bold 30px sans-serif`,a.lineWidth=4,a.strokeStyle=`rgba(0,0,0,0.85)`,a.strokeText(`!`,n.x,n.y-i),a.fillStyle=t.color??`#ffd34d`,a.fillText(`!`,n.x,n.y-i),a.globalAlpha=1}}a.textAlign=`center`;for(let t=this.texts.length-1;t>=0;t--){let n=this.texts[t];if(n.t+=r,n.t>=n.life){this.texts.splice(t,1);continue}let i=this.project(e,n.x+n.dx*n.t,n.y+n.t*1.6,n.z);if(!i)continue;let o=n.t/n.life;a.globalAlpha=1-o*o,a.font=`bold ${n.size}px sans-serif`,a.lineWidth=3,a.strokeStyle=`rgba(0,0,0,0.8)`,a.strokeText(n.text,i.x,i.y),a.fillStyle=n.color,a.fillText(n.text,i.x,i.y),a.globalAlpha=1}return!0}},Dp=[`px`,`py`,`pz`,`vx`,`vy`,`vz`,`life`,`maxLife`,`size`,`r`,`g`,`b`,`drag`,`grav`];function Op(){return{px:0,py:0,pz:0,vx:0,vy:0,vz:0,life:1,size:1,r:1,g:1,b:1,drag:0,grav:0}}var kp=class{ground=null;constructor(e){this.cap=e;for(let t of Dp)this[t]=new Float32Array(e);this.cursor=0,this.highWater=0,this.live=0,this.rec=Op()}emit(e,t){let n=this.rec;for(let r=0;r<e;r++){n.px=n.py=n.pz=n.vx=n.vy=n.vz=0,n.life=1,n.size=1,n.r=n.g=n.b=1,n.drag=0,n.grav=0,t(n,r,e),this.ground&&(n.py+=this.ground(n.px,n.pz));let i=this.cursor;this.life[i]<=0&&this.live++,this.px[i]=n.px,this.py[i]=n.py,this.pz[i]=n.pz,this.vx[i]=n.vx,this.vy[i]=n.vy,this.vz[i]=n.vz,this.life[i]=n.life,this.maxLife[i]=n.life,this.size[i]=n.size,this.r[i]=n.r,this.g[i]=n.g,this.b[i]=n.b,this.drag[i]=n.drag,this.grav[i]=n.grav,this.cursor=i+1===this.cap?0:i+1,i+1>this.highWater&&(this.highWater=i+1)}}step(e){let{px:t,py:n,pz:r,vx:i,vy:a,vz:o,life:s,drag:c,grav:l}=this,u=0;for(let d=0,f=this.highWater;d<f;d++){if(s[d]<=0)continue;if(s[d]-=e,s[d]<=0){s[d]=0;continue}u++;let f=c[d]>0?Math.max(0,1-c[d]*e):1;i[d]*=f,o[d]*=f,a[d]=a[d]*f-l[d]*e,t[d]+=i[d]*e,n[d]+=a[d]*e,r[d]+=o[d]*e}this.live=u;let d=this.highWater;for(;d>0&&s[d-1]<=0;)d--;this.highWater=d}age(e){return this.maxLife[e]>0?1-this.life[e]/this.maxLife[e]:1}clear(){this.life.fill(0),this.cursor=0,this.highWater=0,this.live=0}},Ap={low:1024,medium:2048,high:4096},jp={low:.35,medium:.65,high:1},Mp=`
attribute float size;
attribute float alpha;
attribute vec3 pcolor;
uniform float uScale;
varying vec3 vColor;
varying float vAlpha;
void main() {
  vColor = pcolor;
  vAlpha = alpha;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = alpha > 0.0 ? size * uScale / max(0.1, -mv.z) : 0.0;
  gl_Position = projectionMatrix * mv;
}`,Np=`
varying vec3 vColor;
varying float vAlpha;
uniform float uSoft;
void main() {
  vec2 d = gl_PointCoord - 0.5;
  float r = length(d) * 2.0;
  if (r > 1.0) discard;
  float a = vAlpha * pow(1.0 - r, uSoft);
  gl_FragColor = vec4(vColor, a);
}`;function Pp(e,t){return new he({vertexShader:Mp,fragmentShader:Np,uniforms:{uScale:{value:400},uSoft:{value:t}},transparent:!0,depthWrite:!1,blending:e?2:1})}var Fp=class{constructor(e,t,n){this.scene=e,this.additive=n,this.material=Pp(n,n?1.6:1.1),this.points=null,this.setCapacity(t)}setCapacity(e){this.points&&(this.scene.remove(this.points),this.points.geometry.dispose()),this.pool=new kp(e),this.pool.ground=B;let t=new gr,n=t=>{let n=new ir(new Float32Array(e*t),t);return n.setUsage(yr),n};this.aPos=n(3),this.aCol=n(3),this.aSize=n(1),this.aAlpha=n(1),t.setAttribute(`position`,this.aPos),t.setAttribute(`pcolor`,this.aCol),t.setAttribute(`size`,this.aSize),t.setAttribute(`alpha`,this.aAlpha),t.setDrawRange(0,0),this.points=new at(t,this.material),this.points.frustumCulled=!1,this.points.renderOrder=5,this.scene.add(this.points),this.uploaded=0}update(e){let t=this.pool;t.step(e);let n=t.highWater,r=this.aPos.array,i=this.aCol.array,a=this.aSize.array,o=this.aAlpha.array;for(let e=0;e<n;e++){let n=t.life[e];if(n<=0){o[e]=0;continue}let s=1-n/t.maxLife[e],c=e*3;r[c]=t.px[e],r[c+1]=t.py[e],r[c+2]=t.pz[e],i[c]=t.r[e],i[c+1]=t.g[e],i[c+2]=t.b[e],a[e]=t.size[e]*(.7+.5*s),o[e]=s<.5?1:1-(s-.5)*2}let s=Math.max(n,this.uploaded);for(let e=n;e<s;e++)o[e]=0;if(s>0)for(let[e,t]of[[this.aPos,3],[this.aCol,3],[this.aSize,1],[this.aAlpha,1]])e.clearUpdateRanges(),e.addUpdateRange(0,s*t),e.needsUpdate=!0;this.uploaded=n,this.points.geometry.setDrawRange(0,n),this.points.visible=n>0}},Ip=120,Lp=class{constructor(e){let t=new gr;this.pos=new Float32Array(360),this.alpha=new Float32Array(Ip);let n=new Float32Array(360),r=new Float32Array(Ip);this.seed=new Float32Array(480);for(let e=0;e<Ip;e++)n[e*3]=.85,n[e*3+1]=1,n[e*3+2]=.45,r[e]=.35+Math.random()*.25,this.seed[e*4]=(Math.random()-.5)*80,this.seed[e*4+1]=(Math.random()-.5)*80,this.seed[e*4+2]=Math.random()*100,this.seed[e*4+3]=.6+Math.random()*.8;this.aPos=new ir(this.pos,3).setUsage(yr),this.aAlpha=new ir(this.alpha,1).setUsage(yr),t.setAttribute(`position`,this.aPos),t.setAttribute(`pcolor`,new ir(n,3)),t.setAttribute(`size`,new ir(r,1)),t.setAttribute(`alpha`,this.aAlpha),this.points=new at(t,Pp(!0,2.2)),this.points.frustumCulled=!1,this.points.renderOrder=6,this.points.visible=!1,e.add(this.points)}update(e,t,n,r,i){let a=i&&r>.02;if(this.points.visible=a,!a)return;let o=this.seed;for(let i=0;i<Ip;i++){let a=o[i*4+2],s=o[i*4+3],c=o[i*4]+Math.sin(e*.13*s+a)*4,l=o[i*4+1]+Math.cos(e*.11*s+a*1.3)*4;c=((c-t)%80+120)%80-40+t,l=((l-n)%80+120)%80-40+n,this.pos[i*3]=c+Math.sin(e*.9*s+a)*1.2,this.pos[i*3+1]=B(this.pos[i*3],l)+1.2+Math.sin(e*1.3*s+a*2)*.7+i%3*.5,this.pos[i*3+2]=l+Math.cos(e*.8*s+a)*1.2;let u=.5+.5*Math.sin(e*2.2*s+a*3);this.alpha[i]=r*(.25+.75*u*u)}this.aPos.needsUpdate=!0,this.aAlpha.needsUpdate=!0}},Rp=new W;function zp(e){return Rp.setHex(e),Rp}var Bp=class{constructor(e,t=`high`,n=!0){this.scene=e,this.quality=Ap[t]?t:`high`,this.scale=jp[this.quality];let r=Ap[this.quality];this.add=new Fp(e,r,!0),this.norm=new Fp(e,r>>1,!1),this.fireflies=new Lp(e),this.firefliesOn=n,this.time=0}setQuality(e,t){t!==void 0&&(this.firefliesOn=t),Ap[e]&&e!==this.quality&&(this.quality=e,this.scale=jp[e],this.add.setCapacity(Ap[e]),this.norm.setCapacity(Ap[e]>>1))}setViewport(e,t){let n=e/(2*Math.tan(t*Math.PI/360));this.add.material.uniforms.uScale.value=n,this.norm.material.uniforms.uScale.value=n,this.fireflies.points.material.uniforms.uScale.value=n}n(e){return Math.max(1,Math.round(e*this.scale))}update(e,t,n,r){this.time+=e,this.add.update(e),this.norm.update(e),this.fireflies.update(this.time,t,n,r,this.firefliesOn&&this.quality!==`low`)}burst(e,t,n){let r=n.additive===!1?this.norm:this.add,i=zp(n.color??16777215),a=i.r,o=i.g,s=i.b,c=n.speed??4,l=n.up??2,u=n.life??.6,d=n.size??.4,f=n.y??1,p=n.spread??.3,m=n.jitter??.15;r.pool.emit(this.n(n.n??12),r=>{let i=Math.random()*Math.PI*2,h=c*(.4+Math.random()*.6);r.px=e+Math.cos(i)*p*Math.random(),r.pz=t+Math.sin(i)*p*Math.random(),r.py=f+(Math.random()-.5)*p,r.vx=Math.cos(i)*h,r.vz=Math.sin(i)*h,r.vy=l*(.5+Math.random()),r.life=u*(.7+Math.random()*.6),r.size=d*(.7+Math.random()*.6);let g=1-m+Math.random()*m*2;r.r=a*g,r.g=o*g,r.b=s*g,r.grav=n.grav??9,r.drag=n.drag??2})}hitSpark(e,t,n=1.2,r=!1){this.burst(e,t,{n:r?22:7,speed:r?9:6,up:2.5,life:r?.45:.3,size:r?.5:.32,color:r?16756816:16773296,y:n,grav:14,drag:3})}blood(e,t,n=1){this.burst(e,t,{n:6,speed:3,up:2.5,life:.5,size:.3,color:9048080,y:n,grav:16,drag:1,additive:!1})}magicBurst(e,t,n,r=1.6){this.burst(e,t,{n:18,speed:4.5,up:1.5,life:.55,size:.5,color:n,y:r,grav:-1,drag:3,spread:.6})}levelUp(e,t){let n=zp(16765773),r=n.r,i=n.g,a=n.b,o=this.n(36);this.add.pool.emit(o,(n,s)=>{let c=s/o*Math.PI*6;n.px=e+Math.cos(c)*1.1,n.pz=t+Math.sin(c)*1.1,n.py=.2+s/o*1.5,n.vx=-Math.sin(c)*1.5,n.vz=Math.cos(c)*1.5,n.vy=3.2,n.life=.9,n.size=.45,n.r=r,n.g=i,n.b=a,n.drag=1.5})}deathBurst(e,t,n=16777215,r=!1){this.burst(e,t,{n:r?34:14,speed:r?6:4,up:3,life:.7,size:r?.6:.42,color:n,y:.9,grav:6,drag:2.5,spread:.5})}dust(e,t,n=1.5,r=14,i=9075298){let a=zp(i),o=a.r,s=a.g,c=a.b;this.norm.pool.emit(this.n(r),r=>{let i=Math.random()*Math.PI*2,a=Math.random()*n;r.px=e+Math.cos(i)*a,r.pz=t+Math.sin(i)*a,r.py=.4+Math.random()*1.2;let l=1+Math.random()*2.5;r.vx=Math.cos(i)*l,r.vz=Math.sin(i)*l,r.vy=.6+Math.random()*1.6,r.life=1.4+Math.random()*1.2,r.size=2.2+Math.random()*2.2+n*.3;let u=.85+Math.random()*.3;r.r=o*u,r.g=s*u,r.b=c*u,r.drag=1.6,r.grav=-.2})}runeSparkle(e,t){this.burst(e,t,{n:24,speed:2.5,up:3.5,life:.8,size:.4,color:16777215,y:1.2,grav:2,drag:1.5,spread:.8})}aegisGlow(e,t){this.burst(e,t,{n:30,speed:2,up:4.5,life:1,size:.55,color:16765773,y:.4,grav:-1,drag:1.2,spread:1.2})}courierPuff(e,t,n=3){this.burst(e,t,{n:10,speed:2,up:.8,life:.6,size:.6,color:15790320,y:n,grav:0,drag:2.5,additive:!1})}streak(e,t,n,r,i,a=1.2){let o=zp(i),s=o.r,c=o.g,l=o.b,u=this.n(20);this.add.pool.emit(u,(i,o)=>{let d=(o+Math.random())/u;i.px=e+(n-e)*d+(Math.random()-.5)*.4,i.pz=t+(r-t)*d+(Math.random()-.5)*.4,i.py=a+(Math.random()-.5)*.6,i.vy=.5+Math.random(),i.life=.25+d*.3,i.size=.45,i.r=s,i.g=c,i.b=l,i.drag=2})}},Vp=new dr,Hp=new _e,Up=new l,Wp=new H,Gp=new H,Kp=new dr().makeScale(0,0,0),qp=class{constructor(e,{cap:t=256,geometry:n=new Et(1,1,1),material:r=null}={}){this.cap=t;let i=r??new c({roughness:.85,metalness:.05,flatShading:!0});this.mesh=new $n(n,i,t),this.mesh.instanceMatrix.setUsage(yr),this.mesh.castShadow=!0,this.mesh.frustumCulled=!1,this.mesh.count=0;for(let e=0;e<t;e++)this.mesh.setMatrixAt(e,Kp),this.mesh.setColorAt(e,zp(16777215));e.add(this.mesh);let a=(e=1)=>new Float32Array(t*e);this.p=a(3),this.v=a(3),this.rot=a(3),this.av=a(3),this.life=a(),this.maxLife=a(),this.size=a(),this.g=a(),this.cursor=0,this.highWater=0}spawn(e,t,n,r,i,{y:a=1.5,speed:o=7,up:s=8,size:c=.5,life:l=2.4}={}){for(let u=0;u<r;u++){let r=this.cursor;this.cursor=(r+1)%this.cap,r+1>this.highWater&&(this.highWater=r+1);let u=Math.random()*Math.PI*2,d=Math.random()*n;this.p[r*3]=e+Math.cos(u)*d,this.p[r*3+2]=t+Math.sin(u)*d,this.g[r]=B(this.p[r*3],this.p[r*3+2]),this.p[r*3+1]=this.g[r]+a*(.3+Math.random());let f=o*(.3+Math.random()*.7);this.v[r*3]=Math.cos(u)*f,this.v[r*3+1]=s*(.4+Math.random()*.8),this.v[r*3+2]=Math.sin(u)*f;for(let e=0;e<3;e++)this.rot[r*3+e]=Math.random()*6,this.av[r*3+e]=(Math.random()-.5)*12;this.life[r]=this.maxLife[r]=l*(.7+Math.random()*.6),this.size[r]=c*(.5+Math.random()),this.mesh.setColorAt(r,zp(i[Math.random()*i.length|0]))}this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}update(e){let t=this.highWater;if(t===0){this.mesh.visible=!1;return}this.mesh.visible=!0;let n=0;for(let r=0;r<t;r++){if(this.life[r]<=0){this.mesh.setMatrixAt(r,Kp);continue}if(this.life[r]-=e,this.life[r]<=0){this.life[r]=0,this.mesh.setMatrixAt(r,Kp);continue}n=r+1;let t=r*3,i=this.size[r];this.v[t+1]-=25*e;for(let n=0;n<3;n++)this.p[t+n]+=this.v[t+n]*e,this.rot[t+n]+=this.av[t+n]*e;let a=this.g[r]+i*.4;if(this.p[t+1]<a){this.p[t+1]=a,this.v[t+1]<0&&(this.v[t+1]*=-.3),this.v[t]*=.6,this.v[t+2]*=.6;for(let e=0;e<3;e++)this.av[t+e]*=.7}let o=this.life[r]/this.maxLife[r],s=i*Math.min(1,o/.3);Up.set(this.rot[t],this.rot[t+1],this.rot[t+2]),Hp.setFromEuler(Up),Wp.set(this.p[t],this.p[t+1],this.p[t+2]),Gp.set(s,s,s),Vp.compose(Wp,Hp,Gp),this.mesh.setMatrixAt(r,Vp)}this.mesh.count=t,this.mesh.instanceMatrix.clearUpdateRanges(),this.mesh.instanceMatrix.addUpdateRange(0,t*16),this.mesh.instanceMatrix.needsUpdate=!0,n===0&&(this.highWater=0,this.cursor=0)}};function Jp(e,t,n,r,i,a=0,o=0){let s=Math.cos(i),c=Math.sin(i),l=Math.cos(o),u=Math.sin(o);return e[0]=s,e[1]=0,e[2]=-c,e[3]=0,e[4]=c*u,e[5]=l,e[6]=s*u,e[7]=0,e[8]=c*l,e[9]=-u,e[10]=s*l,e[11]=0,e[12]=t,e[13]=n+a,e[14]=r,e[15]=1,e}function Yp(e,t,n){let r=Math.cos(n),i=Math.sin(n);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=r,e[6]=i,e[7]=0,e[8]=0,e[9]=-i,e[10]=r,e[11]=0,e[12]=0,e[13]=t-r*t,e[14]=-(i*t),e[15]=1,e}var Xp=new dr,Zp=new dr,Qp=new dr,$p=new dr,em=class{constructor(e,t=160){this.scene=e,this.cap=t,this.variants=new Map}variant(e,t,n){let r=e*4+(t?2:0)+ +!!n,i=this.variants.get(r);if(i)return i;let a=Mf({team:e,variant:t?`ranged`:`melee`,isSuper:n});a.updateMatrixWorld(!0);let o=a.userData.body,s=n?1.25:1;return i={key:r,count:0,cap:this.cap,parts:[],height:a.userData.height},a.traverse(e=>{if(!e.isMesh)return;let t=!1;for(let n=e.parent;n;n=n.parent)if(n===o){t=!0;break}let n={geometry:e.geometry,material:e.material,local:e.matrixWorld.clone(),isBodyPart:t,leg:e.userData.leg??0,hip:(e.userData.hipY??0)*s,castShadow:e.castShadow,mesh:null};n.mesh=this.makeMesh(n,i.cap),i.parts.push(n)}),this.variants.set(r,i),i}makeMesh(e,t){let n=new $n(e.geometry,e.material,t);return n.instanceMatrix.setUsage(yr),n.castShadow=e.castShadow,n.frustumCulled=!1,n.count=0,this.scene.add(n),n}grow(e){e.cap*=2;for(let t of e.parts){let n=t.mesh;t.mesh=this.makeMesh(t,e.cap),t.mesh.instanceMatrix.array.set(n.instanceMatrix.array),this.scene.remove(n),n.dispose()}}heightOf(e){return(e.isSuper?1.25:1)*1.7}begin(){for(let e of this.variants.values())e.count=0}push(e,t,n,r,i=0,a=0,o=0,s=0){let c=this.variant(e.team,e.variant!==`melee`,!!e.isSuper);c.count>=c.cap&&this.grow(c);let l=c.count++;Jp(Xp.elements,t,s,n,r,i,a),Jp(Zp.elements,t,s,n,r,0,0);for(let e of c.parts)e.leg&&o!==0?(Yp(Qp.elements,e.hip,o*e.leg),$p.multiplyMatrices(Xp,Qp).multiply(e.local)):$p.multiplyMatrices(e.isBodyPart?Xp:Zp,e.local),e.mesh.setMatrixAt(l,$p)}end(){let e=0;for(let t of this.variants.values())for(let n of t.parts){let r=n.mesh;r.count=t.count,r.visible=t.count>0,t.count>0&&(r.instanceMatrix.clearUpdateRanges(),r.instanceMatrix.addUpdateRange(0,t.count*16),r.instanceMatrix.needsUpdate=!0,e++)}return e}},tm=new H;function nm(e,t,n,r,i,a){return tm.set(t,n,r).project(e),!(tm.z>-1&&tm.z<1)||Math.abs(tm.x)>1.25||Math.abs(tm.y)>1.25?null:{x:(tm.x*.5+.5)*i,y:(-tm.y*.5+.5)*a}}function rm(e,t){return Math.min(160,Math.max(16,e*t*1.2))}var im=new I,am=new Set([`hero`,`creep`,`neutral`,`boss`,`summon`]),om=[[12104602,9407090,11051658,7301720],[7232856,4864566,6180426,3812392]],sm={tower:14,barracks:12,ancient:40},cm=.4,lm=6094698,um=16730685,dm=new H,fm=new Hn,pm=new dr,mm=new gt(new H,2.5);function hm(e,t){return mm.center.set(e,1,t),fm.intersectsSphere(mm)}var gm={day:{hemi:new W(14216447),hemiI:1.2,sun:new W(16773590),sunI:2.2,bg:new W(988184),exposure:1.05},night:{hemi:new W(9413590),hemiI:.95,sun:new W(10467071),sunI:1.3,bg:new W(461330),exposure:1}},_m={color:12571391,intensity:160,distance:18,height:6};function vm(e){if(e<300)return 0;let t=e%600,n=e=>Math.min(1,e/8);return t>=300?n(t-300):1-n(t)}function ym(e,t,n){let r=t-e;for(;r>Math.PI;)r-=Math.PI*2;for(;r<-Math.PI;)r+=Math.PI*2;return e+r*n}var bm=new W(7315711);function xm(e){e.traverse(e=>{if(!e.isMesh||!e.material||e.material.transparent)return;let t=e.material.clone();t.color&&t.color.multiply(bm),t.emissive&&t.emissive.setHex(1718922),e.material=t})}function Sm(e,t){if(t.tint&&!Tu(t.model)){let n=new W(t.tint);e.traverse(e=>{if(!e.isMesh||!e.material||e.material.transparent)return;let t=e.material.clone();t.color&&t.color.lerp(n,.55),t.emissive&&t.emissive.copy(n).multiplyScalar(.25),e.material=t})}let n=t.scale??1;n!==1&&(e.scale.setScalar(n),e.userData.baseScale=n)}function Cm(e,t){let n=e.userData;if(!!n.translucent!==t){n.translucent=t,n.mats||(n.mats=[],e.traverse(e=>{if(!e.isMesh||!e.material||e.material.transparent)return;let t=e.material.clone();t.transparent=!0,t.opacity=.4,t.depthWrite=!1,n.mats.push({mesh:e,base:e.material,ghost:t})}));for(let e of n.mats)e.mesh.material=t?e.ghost:e.base}}var wm=class{constructor(e,t,n,r=uf.graphics){this.world=e,this.player=t,this.graphics={...uf.graphics,...r};let i=document.getElementById(`scene`);this.renderer=new ul({canvas:i,antialias:!!this.graphics.antialias,powerPreference:`high-performance`}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,this.graphics.pixelRatio)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=1,this.renderer.outputColorSpace=rt,this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.05;let a=new ne;a.background=new W(988184),a.fog=new pe(988184,120,260),this.scene=a,this.camera=new Sr(42,window.innerWidth/window.innerHeight,1,600),this.cam={x:t.x,z:t.z-6,dist:46,locked:!1},this.hemi=new St(14216447,4207391,1.2),a.add(this.hemi),this.nightK=-1;let o=new ve(16773590,2.2),s=cf[this.graphics.shadows]??2048;o.castShadow=s>0,o.shadow.mapSize.set(s||1024,s||1024);let c=o.shadow.camera;c.left=-60,c.right=60,c.top=60,c.bottom=-60,c.near=10,c.far=220,o.shadow.bias=-8e-4,a.add(o),a.add(o.target),this.sun=o,this.heroGlow=new se(_m.color,0,_m.distance,2),a.add(this.heroGlow),this.treeInstances=Sd(a,n,e.trees).trees,this.treeVersion=0,this.blockerMeshes=new Ef(a),this.vfx=new pp(a),this.vfx.camera=this.camera,this.spellFx=new An(this.vfx.fx,e=>this.heightOf(e)),this.vfx.hidesZone=e=>this.spellFx.hidesZone(e),this.blockerMeshes.hides=e=>this.spellFx.hidesBlocker(e),this.fog=new mp(a),this.overlay=new Ep(document.getElementById(`overlay`),this.graphics.pixelRatio),this.pings=null,this.meshes=new Map,this.runeMeshes=new Map,this.liveRunes=new Set,this.itemMeshes=new Map,this.time=0,this.particles=new Bp(a,this.graphics.particles,this.graphics.fireflies),this.particles.setViewport(window.innerHeight,this.camera.fov),this.vfx.particles=this.particles,this.debris=new qp(a,{cap:256}),this.shards=new qp(a,{cap:96,geometry:new xe(.5,0),material:new T({toneMapped:!1})}),this.shards.mesh.castShadow=!1,this.shake=0,this.creeps=new em(a),this.glbCreepKinds=new Map,this.creepFacing=new Map,this.dyingCreeps=[],this.bars=[],this.barPool=[];let l=e=>new T({color:e,transparent:!0,opacity:.55,depthWrite:!1,side:2});this.rangeRing=new z(new We(.97,1,96),l(10473727)),this.rangeRing.rotation.x=-Math.PI/2,this.aoeRing=new z(new We(.92,1,64),l(16765562)),this.aoeRing.rotation.x=-Math.PI/2,this.rangeRing.visible=this.aoeRing.visible=!1,a.add(this.rangeRing,this.aoeRing),this.aoeSplat=null,this.indicator=null,this.hoverRing=new z(new We(.97,1,96),l(7208829)),this.hoverRing.rotation.x=-Math.PI/2,this.hoverRing.visible=!1,a.add(this.hoverRing),this.hover=null,this.attackRing=new z(new We(.8,1,48),l(16729156)),this.attackRing.rotation.x=-Math.PI/2,this.attackRing.material.opacity=.85,this.attackRing.visible=!1,a.add(this.attackRing),this.attackTarget=null,this.selRingGeo=new We(.86,1,40),this.selRings=[],this.selected=null,this.selectedActive=null,this.inspected=[],this.hovered=null,this.boxPreview=null,window.addEventListener(`resize`,()=>this.resize())}buildAoeSplat(e){let t=new lt(2,2,24,24);t.rotateX(-Math.PI/2);let n=new z(t,new T({transparent:!0,depthWrite:!1,toneMapped:!1,side:2}));n.userData.flat=Float32Array.from(t.attributes.position.array),n.frustumCulled=!1,n.renderOrder=1,n.visible=!1;let r=Sn(`fx/replaceabletextures/selection/spellareaofeffect_${e===0?`ne`:`undead`}.png`,()=>{r.image&&(r.colorSpace=rt,n.material.map=r,n.material.needsUpdate=!0,n.userData.ready=!0)});return this.scene.add(n),n}drapeAoeSplat(e,t,n){let r=this.aoeSplat,i=r.userData.flat,a=r.geometry.attributes.position,o=B(e,t);for(let r=0;r<a.count;r++){let s=i[r*3]*n,c=i[r*3+2]*n;a.setXYZ(r,s,B(e+s,t+c)-o+.26,c)}a.needsUpdate=!0,r.position.set(e,o,t),r.visible=!0}resize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.overlay.resize(),this.particles.setViewport(window.innerHeight,this.camera.fov)}applyGraphics(e){this.graphics={...this.graphics,...e};let t=Math.min(window.devicePixelRatio||1,this.graphics.pixelRatio);Math.abs(t-this.renderer.getPixelRatio())>1e-6&&(this.renderer.setPixelRatio(t),this.renderer.setSize(window.innerWidth,window.innerHeight));let n=cf[this.graphics.shadows]??2048,r=this.sun;r.castShadow=n>0,n>0&&r.shadow.mapSize.x!==n&&(r.shadow.mapSize.set(n,n),r.shadow.map?.dispose(),r.shadow.map=null),this.overlay.setMaxDpr(this.graphics.pixelRatio),this.particles.setQuality(this.graphics.particles,this.graphics.fireflies)}viewExtents(){let e=this.cam,t=this.camera.aspect,n=this.viewExt;if(n&&n.dist===e.dist&&n.aspect===t)return n;let r=this.viewProbe??=new Sr;r.fov=this.camera.fov,r.aspect=t,r.near=1,r.far=600,r.updateProjectionMatrix(),r.position.set(0,e.dist,e.dist*.62),r.lookAt(0,0,0),r.updateMatrixWorld();let i=(e,t)=>{dm.set(e,t,.5).unproject(r).sub(r.position);let n=-r.position.y/dm.y;return{x:r.position.x+dm.x*n,z:r.position.z+dm.z*n}},a=i(1,-1);return this.viewExt={dist:e.dist,aspect:t,hwLow:a.x,far:-i(0,1).z,near:a.z},this.viewExt}clampCamera(){let e=this.cam,t=this.viewExtents(),n=(e,t,n)=>t>n?(t+n)/2:Math.max(t,Math.min(n,e));e.x=n(e.x,t.hwLow,m-t.hwLow),e.z=n(e.z,t.far,m-t.near)}updateCamera(){let e=this.cam;e.locked&&this.player.alive&&(e.x=this.player.x,e.z=this.player.z-4),this.clampCamera();let t=this.shake,n=this.time,r=t>0?Math.sin(n*61)*t:0,i=t>0?Math.sin(n*47+1)*t*.5:0,a=t>0?Math.cos(n*53)*t:0;this.camera.position.set(e.x+r,0+e.dist+i,e.z+e.dist*.62+a),this.camera.lookAt(e.x+r,0,e.z+a),this.sun.position.set(e.x+35,90,e.z+25),this.sun.target.position.set(e.x,0,e.z);let o=this.player;this.heroGlow.intensity=o.alive?_m.intensity*Math.max(0,this.nightK):0,this.heroGlow.position.set(o.x,B(o.x,o.z)+_m.height,o.z)}updateLighting(e){let t=vm(e);if(t===this.nightK)return;this.nightK=t;let n=gm.day,r=gm.night;this.hemi.color.copy(n.hemi).lerp(r.hemi,t),this.hemi.intensity=n.hemiI+(r.hemiI-n.hemiI)*t,this.sun.color.copy(n.sun).lerp(r.sun,t),this.sun.intensity=n.sunI+(r.sunI-n.sunI)*t,this.scene.background.copy(n.bg).lerp(r.bg,t),this.scene.fog.color.copy(n.bg).lerp(r.bg,t),this.renderer.toneMappingExposure=n.exposure+(r.exposure-n.exposure)*t}screenToGround(e,t){im.setFromCamera({x:e/window.innerWidth*2-1,y:-(t/window.innerHeight)*2+1},this.camera);let n=im.ray.origin,r=im.ray.direction;if(r.y>=-1e-4)return null;let i=e=>n.y+r.y*e-B(n.x+r.x*e,n.z+r.z*e),a=0,o=0;for(let e=.5;e<900;e+=.5){if(i(e)<=0){o=e;break}a=e}if(!o)return null;for(let e=0;e<12;e++){let e=(a+o)/2;i(e)>0?a=e:o=e}return{x:n.x+r.x*o,z:n.z+r.z*o}}groundToScreen(e,t,n=0){return dm.set(e,n+B(e,t),t).project(this.camera),{x:(dm.x*.5+.5)*window.innerWidth,y:(-dm.y*.5+.5)*window.innerHeight}}pickableScreen(e,t,n=0){return nm(this.camera,e,n+B(e,t),t,window.innerWidth,window.innerHeight)}heightOf(e,t=this.meshes.get(e)){return t?t.userData.height??2:e.kind===`creep`?this.creeps.heightOf(e):2}pickUnit(e,t,n,r=0){let i=null,a=1/0;for(let o of this.world.units){if(!o.alive||o.removed||!this.world.isVisible(this.player.team,o)||n&&!n(o))continue;let s=this.meshes.get(o),c=this.heightOf(o,s),l=s?.userData.flyY??0,u=Math.max(l+1,c*.6),d=this.pickableScreen(o.x,o.z,l),f=d&&this.pickableScreen(o.x,o.z,u);if(!f)continue;let p=Math.abs(d.y-f.y)/Math.max(.1,u-l),m=rm(o.radius,p)+r,h=Math.max(0,Math.min(1,(t-d.y)/(f.y-d.y||1))),g=d.x+(f.x-d.x)*h,_=d.y+(f.y-d.y)*h,v=Math.hypot(e-g,t-_);v<m&&v<a&&(a=v,i=o)}return i}unitsInRect(e,t,n,r,i){let a=Math.min(e,n),o=Math.max(e,n),s=Math.min(t,r),c=Math.max(t,r),l=[];for(let e of this.world.units){if(!e.alive||e.removed||!i(e))continue;let t=this.pickableScreen(e.x,e.z,this.heightOf(e)*.4);t&&t.x>=a&&t.x<=o&&t.y>=s&&t.y<=c&&l.push(e)}return l}unitsOnScreen(e){return this.unitsInRect(0,0,window.innerWidth,window.innerHeight,e)}syncSelectionRings(e=1){let t=this.selected??[],n=this.selectedActive,r=this.player.team,i=0,a=(t,n)=>{if(!t||!t.alive||t.removed||!this.world.isVisible(r,t))return;let a=this.selRings[i];a||(a=new z(this.selRingGeo,new T({color:lm,transparent:!0,opacity:1,depthWrite:!1,side:2})),a.rotation.x=-Math.PI/2,this.scene.add(a),this.selRings.push(a)),a.visible=!0;let o=t.px??t.x,s=t.pz??t.z,c=o+(t.x-o)*e,l=s+(t.z-s)*e;a.position.set(c,B(c,l)+.22,l),a.scale.setScalar(t.radius+.35),a.material.color.setHex(t.team===r?lm:um),a.material.opacity=n,i++};for(let e of t)a(e,!n||n.includes(e)?1:.6);let o=this.inspected,s=this.hovered;for(let e of o)t.includes(e)||a(e,1);for(let e of this.boxPreview??[])!t.includes(e)&&!o.includes(e)&&a(e,.6);s&&!o.includes(s)&&!t.includes(s)&&!this.boxPreview?.includes(s)&&!this.attackTarget&&a(s,.6);for(let e=i;e<this.selRings.length;e++)this.selRings[e].visible=!1}pickRune(e,t){let n=null,r=24;for(let i of this.world.runes){if(!i.alive||!this.world.isPointVisible(this.player.team,i.x,i.z))continue;let a=this.pickableScreen(i.x,i.z,0),o=a&&this.pickableScreen(i.x,i.z,1.2);if(!o)continue;let s=Math.min(Math.hypot(e-a.x,t-a.y),Math.hypot(e-o.x,t-o.y));s<r&&(r=s,n=i)}return n}syncRunes(){let e=this.world,t=this.liveRunes;t.clear();for(let n of e.runes){if(!n.alive)continue;t.add(n.id);let r=this.runeMeshes.get(n.id);if(r||(r=qf(n.type),r.position.set(n.x,B(n.x,n.z),n.z),this.scene.add(r),this.runeMeshes.set(n.id,r)),r.visible=e.isPointVisible(this.player.team,n.x,n.z),!r.visible)continue;let i=r.userData.gem;i.position.y=1.2+Math.sin(this.time*2.4+n.id)*.18,i.rotation.y=this.time*1.6,r.userData.glow.material.opacity=.28+Math.sin(this.time*3+n.id)*.1}for(let[e,n]of this.runeMeshes)t.has(e)||(this.scene.remove(n),n.traverse(e=>{e.material&&e.material.dispose()}),this.runeMeshes.delete(e))}pickGroundItem(e,t){let n=null,r=24;for(let i of this.world.groundItems??[]){if(!i.alive||!this.world.isPointVisible(this.player.team,i.x,i.z))continue;let a=this.pickableScreen(i.x,i.z,.3),o=a&&this.pickableScreen(i.x,i.z,1.3);if(!o)continue;let s=Math.min(Math.hypot(e-a.x,t-a.y),Math.hypot(e-o.x,t-o.y));s<r&&(r=s,n=i)}return n}syncGroundItems(){let e=this.world,t=new Set;for(let n of e.groundItems??[]){if(!n.alive)continue;t.add(n.id);let r=this.itemMeshes.get(n.id);r||(r=Xf(n.item.def),this.scene.add(r),this.itemMeshes.set(n.id,r)),r.position.set(n.x,B(n.x,n.z),n.z),r.visible=e.isPointVisible(this.player.team,n.x,n.z),r.visible&&(r.userData.icon.position.y=1.3+Math.sin(this.time*2+n.id)*.1)}for(let[e,n]of this.itemMeshes)t.has(e)||(this.scene.remove(n),n.traverse(e=>{e.material&&e.material.dispose()}),this.itemMeshes.delete(e))}spellCtx(){let e=this.player.team,t=this.world;return{team:e,vis:n=>!!n&&t.isVisible(e,n),pt:(n,r)=>t.isPointVisible(e,n,r)}}handleEvents(e){let t=this.overlay,n=this.player,r=e=>e&&this.world.isVisible(n.team,e),i=this.particles,a=this.spellCtx();for(let o of e)if(!this.spellFx.onEvent(o,a))switch(o.type){case`damage`:if(!r(o.unit))break;if(o.isAttack&&Math.abs(o.unit.x-this.cam.x)<50&&Math.abs(o.unit.z-this.cam.z)<45){let e=o.unit,t=e.isBuilding?Math.min(4,this.heightOf(e)*.5):e.kind===`courier`?3:1.2;(o.crit||e.kind===`hero`||e.isBuilding||e.kind===`boss`)&&i.hitSpark(e.x,e.z,t,!!o.crit),am.has(e.kind)&&e.model!==`turret`&&i.blood(e.x,e.z,t*.85)}if(!t.flags.damageNumbers)break;o.crit?t.floatText(o.unit,`${Math.round(o.amount)}!`,`#ff5a3c`,17):!o.isAttack&&o.amount>=5&&(o.source===n||o.unit===n||o.unit.kind===`hero`)&&t.floatText(o.unit,String(Math.round(o.amount)),o.dmgType===`pure`?`#ffffff`:`#c58bff`,13);break;case`gold`:o.unit===n&&t.floatText(o.unit,`+${o.amount}`,`#ffd34d`,13);break;case`heal`:t.flags.damageNumbers&&r(o.unit)&&o.amount>15&&t.floatText(o.unit,`+${Math.round(o.amount)}`,`#6dff7d`,13);break;case`levelup`:r(o.unit)&&(this.spellFx.levelUp(o.unit)||this.vfx.column(o.unit.x,o.unit.z,16765773,.9,1.1),i.levelUp(o.unit.x,o.unit.z),o.unit===n&&t.floatText(o.unit,`LEVEL UP`,`#ffe680`,15));break;case`ring`:this.vfx.ring(o.x,o.z,o.r,o.color,o.duration);break;case`column`:this.vfx.column(o.x,o.z,o.color,o.duration,o.r);break;case`slash`:this.vfx.line(o.x,o.z,o.x2,o.z2,o.color,.35);break;case`blink`:this.vfx.ring(o.x,o.z,2,12165375,.4),this.vfx.ring(o.x2,o.z2,2,12165375,.4),(this.world.isPointVisible(n.team,o.x,o.z)||this.world.isPointVisible(n.team,o.x2,o.z2))&&i.streak(o.x,o.z,o.x2,o.z2,12165375);break;case`stun`:r(o.unit)&&(this.vfx.stunMarker(o.unit,o.duration,o.color),i.burst(o.unit.x,o.unit.z,{n:10,speed:3,up:3,life:.4,size:.35,color:o.color??16769104,y:o.unit.kind===`hero`?2.6:1.7,grav:6,drag:2}));break;case`cast`:if(r(o.unit)){let e=this.meshes.get(o.unit);e&&(e.userData.castT=e.userData.mixer?.7:.35),i.magicBurst(o.unit.x,o.unit.z,o.unit.def?.projColor??o.unit.def?.color??16777215,1.8)}break;case`aim`:this.vfx.aimLine(o.unit,o.target,o.duration);break;case`deny`:r(o.unit)&&t.floatText(o.unit,`!`,`#f0f0f0`,22);break;case`death`:{let e=o.unit;e.isBuilding&&(this.vfx.ring(e.x,e.z,e.radius*2.5,16751168,.9),this.destroyBuilding(e)),o.aegis&&r(e)&&this.vfx.column(e.x,e.z,16765773,1.2,1.4),e.kind===`boss`&&this.vfx.ring(e.x,e.z,7,16752704,1),e.kind===`creep`&&!this.glbCreep(e)?((r(e)||this.creepFacing.has(e))&&(this.dyingCreeps.push({u:e,t:0,x:e.x,z:e.z,f:this.creepFacing.get(e)??e.facing}),i.deathBurst(e.x,e.z,e.team===0?10216314:16747114)),this.creepFacing.delete(e)):!o.aegis&&r(e)&&(e.kind===`neutral`||e.kind===`summon`?i.deathBurst(e.x,e.z,14207136):e.kind===`hero`?(i.deathBurst(e.x,e.z,e.def?.color??16777215,!0),i.dust(e.x,e.z,1.2,10)):e.kind===`boss`?(i.deathBurst(e.x,e.z,16752704,!0),i.dust(e.x,e.z,3,24)):e.kind===`courier`&&i.courierPuff(e.x,e.z,3));break}case`respawn`:{let e=this.meshes.get(o.unit);e&&(e.visible=!0,e.position.set(o.unit.x,(e.userData.flyY??0)+B(o.unit.x,o.unit.z),o.unit.z),e.rotation.z=0,e.scale.setScalar(1),e.userData.dieT=0,e.userData.body&&e.userData.body.rotation.set(0,0,0),e.userData.mixer&&(e.userData.mixer.stopAllAction(),e.userData.anim=null)),o.unit.kind===`courier`&&r(o.unit)&&i.courierPuff(o.unit.x,o.unit.z,3),o.unit.kind===`hero`&&r(o.unit)&&o.inPlace&&this.vfx.column(o.unit.x,o.unit.z,16765773,1,1.2);break}case`rune`:r(o.unit)&&(this.vfx.ring(o.x,o.z,2.5,16777215,.5),i.runeSparkle(o.x,o.z),o.unit===n&&t.floatText(o.unit,o.runeType===`bounty`?`BOUNTY`:`RUNE`,`#ffffff`,14));break;case`aegis`:r(o.unit)&&(this.vfx.column(o.unit.x,o.unit.z,16765773,1.2,1.3),i.aegisGlow(o.unit.x,o.unit.z));break;case`summon`:r(o.unit)&&this.vfx.ring(o.unit.x,o.unit.z,o.unit.radius+1.2,10216314,.5);break;case`illusion`:o.unit.team===n.team&&r(o.unit)&&this.vfx.ring(o.unit.x,o.unit.z,o.unit.radius+1.2,10139903,.5);break;case`summonExpired`:(o.unit.illusion||o.unit.copy)&&r(o.unit)&&i.deathBurst(o.unit.x,o.unit.z,10139903);break;case`combine`:o.unit===n&&this.vfx.column(o.unit.x,o.unit.z,15911244,.7,.9);break;case`dash`:if(r(o.unit)){let e=o.unit.def?.projColor??10147839;this.vfx.dash(o.x,o.z,o.x2,o.z2,e),i.streak(o.x,o.z,o.x2,o.z2,e,1.1)}break;case`rocket`:this.world.isPointVisible(n.team,o.x2,o.z2)&&this.vfx.rocket(o.x,o.z,o.x2,o.z2,16757575,o.barrage?.5:.35)}}destroyBuilding(e){let t=this.meshes.get(e);if(t?.userData.destroyT!==void 0)return;let n=e.radius,r=om[e.team]??om[0],i=e.kind===`ancient`,a=t?.userData.height??5;this.debris.spawn(e.x,e.z,n*.8,i?40:20+(Math.random()*12|0),r,{y:a*.45,speed:i?10:7,up:i?12:9,size:i?.9:.6}),this.particles.dust(e.x,e.z,n*1.1,i?60:30+(Math.random()*14|0),e.team===0?10129528:6969938),this.particles.deathBurst(e.x,e.z,16756832,!0);let o=t?.userData.crystal;if(o){let t=yn[e.team]??16777215;this.shards.spawn(e.x,e.z,.6,i?30:14,[t,16777215],{y:o.position.y,speed:6,up:6,size:i?.7:.45,life:1.8}),this.particles.burst(e.x,e.z,{n:26,speed:7,up:3,life:.6,size:.55,color:t,y:o.position.y,grav:5,drag:2}),o.visible=!1}let s=Math.max(1,Math.hypot(e.x-this.cam.x,e.z-this.cam.z));this.shake=Math.max(this.shake,Math.min(.8,(sm[e.kind]??10)/s)),t&&(t.userData.destroyT=0)}animateHero(e,t,n){let r=t.body;if(t.baseSY===void 0&&(t.baseSY=r.scale.y),e.mods.stunned){r.rotation.x=-.15;return}let i=t.legs,a=t.arms,o=Math.max(0,1-n*12),s=0,c=0;if(e.moving){t.phase+=n*e.getMoveSpeed()*1.6;let o=Math.sin(t.phase);i[0].rotation.x=o*.6,i[1].rotation.x=-o*.6,a[0].rotation.x=-o*.4,a[1].rotation.x=o*.4,s=Math.abs(o)*.1,r.scale.y=t.baseSY}else i[0].rotation.x*=o,i[1].rotation.x*=o,a[0].rotation.x*=o,a[1].rotation.x*=o,r.scale.y=t.baseSY*(1+Math.sin(this.time*2+e.id)*.015);if(e.windup>0){let n=Math.max(0,Math.min(1,1-e.windup/Math.max(.05,e.attackPoint)));t.weaponArm.rotation.x=-1.6*n}else if(e.attackAnim>0){let n=Math.min(1,e.attackAnim/.25);e.projSpeed>0?(t.weaponArm.rotation.x=-1.4*n,c=-.18*n):t.weaponArm.rotation.x=.6-2.2*n}if(t.castT>0){t.castT=Math.max(0,t.castT-n);let e=-2.6*Math.sin(t.castT/.35*Math.PI);a[0].rotation.x=e,a[1].rotation.x=e}r.position.y=s,r.rotation.x=c}playClip(e,t,n=1,r=!1){let i=e.actions[t];if(!i||(i.timeScale=n,e.anim===t&&!r))return;let a=e.actions[e.anim];i.reset().play(),a&&a!==i&&i.crossFadeFrom(a,.12,!1),e.anim=t}glbCreep(e){let t=e.team*4+(e.variant===`melee`?0:1)+(e.isSuper?2:0),n=this.glbCreepKinds.get(t);return n===void 0&&this.glbCreepKinds.set(t,n=Eu(e)),n}animateModel(e,t,n){let r=e.windup>t.windup+1e-4;r&&(t.windupStart=e.windup),t.windup=e.windup,t.castT>0&&(t.castT=Math.max(0,t.castT-n)),!e.mods.stunned&&(t.castT>0?this.playClip(t,`cast`,t.actions.cast?t.actions.cast.getClip().duration/.7:1):e.windup>0||e.attackAnim>0?this.playClip(t,`attack`,t.cfg.fire/Math.max(.05,t.windupStart||e.attackPoint),r):e.moving?this.playClip(t,`run`,e.getMoveSpeed()/t.cfg.runSpeed):this.playClip(t,`idle`),t.mixer.update(n))}pushBar(e,t,n,r){let i=this.barPool[this.bars.length];i||(i={unit:null,x:0,z:0,height:0},this.barPool.push(i)),i.unit=e,i.x=t,i.z=n,i.height=r,this.bars.push(i)}render(e,t){this.time+=t,this.shake=Math.max(0,this.shake-t*1.4);let n=this.world,r=this.player;this.updateCamera(),this.updateLighting(n.time),this.camera.updateMatrixWorld(),pm.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),fm.setFromProjectionMatrix(pm),this.bars.length=0;let i=this.creeps;i.begin();for(let a of n.units){let o=a.px+(a.x-a.px)*e,s=a.pz+(a.z-a.pz)*e,c=B(o,s);if(a.kind===`creep`&&!this.glbCreep(a)){if(!a.alive||a.removed||!n.isVisible(r.team,a))continue;if(!hm(o,s)){this.creepFacing.set(a,a.facing);continue}let e=this.creepFacing.get(a);e=e===void 0?a.facing:ym(e,a.facing,Math.min(1,t*14)),this.creepFacing.set(a,e);let l=this.time*11+a.id,u=a.moving?Math.abs(Math.sin(l))*.12:0,d=a.attackAnim>0?Math.sin(a.attackAnim/.25*Math.PI):0,f=a.mods.stunned?-.15:d*.3,p=a.moving&&a.variant===`melee`?Math.sin(l)*.5:0;i.push(a,o,s,e,u,f,p,c),a.hp<a.maxHp&&this.pushBar(a,o,s,i.heightOf(a)+c);continue}let l=this.meshes.get(a),u=a.morph,d=u&&(u.model||u.tint||(u.scale??1)!==1)?`${u.model??``}|${u.tint??``}|${u.scale??1}`:``;if(l&&a.alive&&!a.removed&&(l.userData.morphKey??``)!==d&&(this.scene.remove(l),this.meshes.delete(a),n.isVisible(r.team,a)&&this.vfx.column(a.x,a.z,a.morph?.tint??16760944,.6,1.4),l=null),!l){if(a.removed)continue;l=Zf(a),l.userData.morphKey=d,a.morph&&Sm(l,a.morph),a.illusion&&a.team===r.team&&xm(l),l.userData.unit=a,l.userData.dieT=0,l.rotation.y=a.facing,this.scene.add(l),this.meshes.set(a,l)}let f=l.userData;if(!a.alive){if(a.removed)continue;if(f.dieT+=t,f.gy??=c,f.legs){let e=Math.min(1,f.dieT/.6);f.body.rotation.x=-1.3*e*(2-e),f.body.position.y=0;let t=Math.min(1,Math.max(0,f.dieT-.6)/.8);l.position.y=f.gy-t*1.5,t>=1&&(l.visible=!1)}else if(f.mixer){this.playClip(f,`death`),f.mixer.update(t);let e=Math.min(1,Math.max(0,f.dieT-2)/.8);l.position.y=f.gy-e*1.5,e>=1&&(l.visible=!1)}else{let e=Math.min(1,f.dieT/.8);l.position.y=f.gy+(f.flyY??0)*(1-e)-e*1.5,l.rotation.z=e*.6,e>=1&&(l.visible=!1)}continue}l.rotation.z=0;let p=n.isVisible(r.team,a);if(l.visible=p,p){if(f.gy=c,l.position.set(o,(f.flyY??0)+c,s),l.rotation.y=ym(l.rotation.y,a.facing,Math.min(1,t*14)),f.mixer&&!hm(o,s)){l.visible=!1;continue}if(Cm(l,!!a.mods.invisible&&a.team===r.team||!!a.mods.ethereal),a.mods.cyclone&&(l.position.y+=2+Math.sin(this.time*4+a.id)*.2,l.rotation.y=this.time*9),!!a.mods.hexed!=!!f.hexed&&(f.hexed=!!a.mods.hexed,l.scale.setScalar((f.hexed?.45:1)*(f.baseScale??1))),f.legs)this.animateHero(a,f,t);else if(f.mixer)this.animateModel(a,f,t);else if(f.wings){let e=Math.sin(this.time*14+a.id)*.7;f.wings[0].rotation.z=e,f.wings[1].rotation.z=-e,l.position.y=c+f.flyY+Math.sin(this.time*3+a.id)*.25,f.body.rotation.x=a.moving?.15:0}else if(f.body){f.body.position.y=a.moving?Math.abs(Math.sin(this.time*11+a.id))*.12:0;let e=a.attackAnim>0?Math.sin(a.attackAnim/.25*Math.PI):0;f.body.rotation.x=e*.3,f.weapon&&(f.weapon.rotation.x=-e*1.4),a.mods.stunned&&(f.body.rotation.x=-.15)}f.crystal&&(f.crystal.rotation.y+=t*(f.spin?.4:1.2),f.crystal.position.y=(f.spin?5.8:a.kind===`fountain`?2.6:6.3)+Math.sin(this.time*2+a.id)*.15),(a.hp<a.maxHp||a.kind===`hero`||a.kind===`boss`)&&this.pushBar(a,o,s,(f.height??2)+c+(f.flyY??0))}}for(let e=this.dyingCreeps.length-1;e>=0;e--){let n=this.dyingCreeps[e];n.t+=t;let r=n.t/.7;if(r>=1){this.dyingCreeps.splice(e,1);continue}hm(n.x,n.z)&&i.push(n.u,n.x,n.z,n.f,0,r*.8,0,B(n.x,n.z)-r*1.4)}if(i.end(),(this.time*2|0)!=((this.time-t)*2|0))for(let e of this.creepFacing.keys())(e.removed||!e.alive)&&this.creepFacing.delete(e);for(let[e,n]of this.meshes){if(!e.removed)continue;let r=n.userData;if(e.isBuilding){r.destroyT===void 0&&this.destroyBuilding(e),r.destroyT+=t;let i=Math.min(1,r.destroyT/cm);if(n.position.y=B(e.x,e.z)-i*1.2,n.scale.set(1+i*.08,1-i*.35,1+i*.08),r.destroyT<cm)continue;this.scene.remove(n);let a=Rf(e);a.position.set(e.x,B(e.x,e.z),e.z),this.scene.add(a),this.meshes.delete(e);continue}r.dieT+=t;let i;r.mixer?(this.playClip(r,`death`),r.mixer.update(t),i=Math.max(0,r.dieT-1.6)/.8):(i=r.dieT/.7,n.rotation.z=i*.8),n.position.y=(r.gy??0)-i*1.4,i>=1&&(this.scene.remove(n),this.meshes.delete(e))}this.syncRunes(),this.syncGroundItems(),(n.treeVersion??0)!==this.treeVersion&&(this.treeVersion=n.treeVersion,this.treeInstances.sync(n.trees,n.tempTrees)),this.blockerMeshes.sync(n,t),this.vfx.syncProjectiles(n.projectiles,e),this.vfx.syncZones(n.zones,this.time,t),this.spellFx.sync(n,this.spellCtx(),t),this.vfx.update(t),this.particles.update(t,this.cam.x,this.cam.z,this.nightK<0?0:this.nightK),this.debris.update(t),this.shards.update(t),this.fog.update(n.fog.vis[r.team],t),this.syncSelectionRings(e);let a=this.indicator,o=a?.unit??r;a&&o.alive?(a.range>0&&Number.isFinite(a.range)?(this.rangeRing.visible=!0,this.rangeRing.position.set(o.x,B(o.x,o.z)+.25,o.z),this.rangeRing.scale.setScalar(a.range+o.radius)):this.rangeRing.visible=!1,a.radius>0&&a.x!==void 0?(this.aoeSplat??=this.buildAoeSplat(r.team)).userData.ready?(this.aoeRing.visible=!1,this.drapeAoeSplat(a.x,a.z,a.radius)):(this.aoeRing.visible=!0,this.aoeRing.position.set(a.x,B(a.x,a.z)+.26,a.z),this.aoeRing.scale.setScalar(a.radius)):(this.aoeRing.visible=!1,this.aoeSplat&&(this.aoeSplat.visible=!1))):(this.rangeRing.visible=this.aoeRing.visible=!1,this.aoeSplat&&(this.aoeSplat.visible=!1));let s=this.hover;if(s&&s.unit.alive&&!s.unit.removed&&n.isVisible(r.team,s.unit)){let e=s.unit;this.hoverRing.visible=!0,this.hoverRing.position.set(e.x,B(e.x,e.z)+.24,e.z),this.hoverRing.scale.setScalar(e.getRange()+e.radius),this.hoverRing.material.color.setHex(s.ally?7208829:16734794)}else this.hoverRing.visible=!1;let c=this.attackTarget;c&&c.alive&&!c.removed&&n.isVisible(r.team,c)?(this.attackRing.visible=!0,this.attackRing.position.set(c.x,B(c.x,c.z)+.27,c.z),this.attackRing.scale.setScalar((c.radius+.6)*(1+.08*Math.sin(this.time*8)))):this.attackRing.visible=!1,this.renderer.render(this.scene,this.camera),this.overlay.draw(this.camera,this.bars,r,t,this.pings?.active())}},Tm={haste:`#ff5a3c`,regen:`#6dff7d`,dd:`#5a9bff`,bounty:`#ffd34d`},Em=class{constructor(e,t){this.game=e,this.world=e.world,this.player=e.player,this.canvas=document.getElementById(`minimap`),this.ctx=this.canvas.getContext(`2d`),this.size=this.canvas.width,this.scale=this.size/m,this.bg=document.createElement(`canvas`),this.bg.width=this.bg.height=this.size;let n=this.bg.getContext(`2d`);n.drawImage(t,0,0,this.size,this.size),n.fillStyle=`rgba(20,45,18,0.9)`;for(let e of this.world.trees)n.fillRect(e.x*this.scale-1,e.z*this.scale-1,2.2,2.2);let r=this.world.jungle;if(r){n.strokeStyle=`rgba(0,0,0,0.7)`,n.lineWidth=1;for(let e of r.camps){let t=e.x*this.scale,r=e.z*this.scale,i=e.type===`large`?4:e.type===`medium`?3.4:2.8;n.fillStyle=`rgba(232,163,58,0.55)`,n.beginPath(),n.moveTo(t,r-i),n.lineTo(t+i,r+i*.8),n.lineTo(t-i,r+i*.8),n.closePath(),n.fill(),n.stroke()}r.bossPit&&(n.strokeStyle=`rgba(255,160,64,0.8)`,n.lineWidth=1.5,n.beginPath(),n.arc(r.bossPit.x*this.scale,r.bossPit.z*this.scale,6,0,Math.PI*2),n.stroke())}let i=Ae.filter(e=>e.kind!==`base`).map(e=>({x:e.x,z:e.z,secret:e.kind===`secret`}));for(let e of[0,1]){let t=Ae.filter(t=>t.kind===`base`&&t.team===e);t.length&&i.push({x:t.reduce((e,t)=>e+t.x,0)/t.length,z:t.reduce((e,t)=>e+t.z,0)/t.length})}let a=new Set;for(let e of i){let t=Math.round(e.x*this.scale),r=Math.round(e.z*this.scale),i=`${Math.round(t/6)},${Math.round(r/6)}`;a.has(i)||(a.add(i),n.beginPath(),n.arc(t,r,3.2,0,Math.PI*2),n.fillStyle=e.secret?`#9f6fff`:`#f2c94c`,n.fill(),n.lineWidth=1,n.strokeStyle=`#000`,n.stroke())}this.fogCanvas=document.createElement(`canvas`),this.fogCanvas.width=this.fogCanvas.height=G,this.fogCtx=this.fogCanvas.getContext(`2d`),this.fogImg=this.fogCtx.createImageData(G,G),this.timer=0;let o=!1,s=e=>{let t=this.canvas.getBoundingClientRect();return{x:(e.clientX-t.left)/t.width*m,z:(e.clientY-t.top)/t.height*m}};this.canvas.addEventListener(`mousedown`,t=>{t.preventDefault(),t.stopPropagation();let n=s(t);if(t.button===0&&t.altKey){e.pings?.send(n.x,n.z);return}t.button===0&&e.controls?.minimapClick(n.x,n.z)||(t.button===0?(o=!0,this.moveCamera(n)):t.button===2&&e.controls&&(e.controls.sendUnitsOrder({type:`move`,x:n.x,z:n.z})||e.renderer.vfx.marker(n.x,n.z,7208829)))}),window.addEventListener(`mousemove`,e=>{o&&this.moveCamera(s(e))}),window.addEventListener(`mouseup`,()=>{o=!1}),this.canvas.addEventListener(`contextmenu`,e=>e.preventDefault())}moveCamera(e){let t=this.game.renderer.cam;t.x=e.x,t.z=e.z,t.locked=!1}draw(e){if(this.timer-=e,this.timer>0)return;this.timer=.1;let t=this.ctx,n=this.scale,r=this.world,i=this.player;t.drawImage(this.bg,0,0);let o=r.fog.vis[i.team],s=this.fogImg.data;for(let e=0;e<G*G;e++)s[e*4]=5,s[e*4+1]=8,s[e*4+2]=14,s[e*4+3]=o[e]?0:140;this.fogCtx.putImageData(this.fogImg,0,0),t.imageSmoothingEnabled=!0,t.drawImage(this.fogCanvas,0,0,this.size,this.size);for(let e of r.units){if(!e.alive||!r.isVisible(i.team,e))continue;let o=e.x*n,s=e.z*n;if(e.kind!==`shop`){if(e.isBuilding){let n=e.kind===`ancient`?5:e.kind===`fountain`?4:3;t.fillStyle=a[e.team],t.strokeStyle=`#000`,t.lineWidth=1,t.fillRect(o-n,s-n,n*2,n*2),t.strokeRect(o-n,s-n,n*2,n*2)}else e.kind===`creep`?(t.fillStyle=e.team===0?`#7ee07e`:`#f07a6a`,t.fillRect(o-1.2,s-1.2,2.4,2.4)):e.kind===`neutral`?(t.fillStyle=a[2],t.fillRect(o-1.1,s-1.1,2.2,2.2)):e.kind===`summon`?(t.beginPath(),t.arc(o,s,2,0,Math.PI*2),t.fillStyle=a[e.team],t.fill()):e.kind===`boss`?(t.beginPath(),t.arc(o,s,4,0,Math.PI*2),t.fillStyle=`#ff9a3a`,t.fill(),t.lineWidth=1.2,t.strokeStyle=`#000`,t.stroke()):e.kind===`courier`?(t.beginPath(),t.moveTo(o,s-3.2),t.lineTo(o+3,s+2.4),t.lineTo(o-3,s+2.4),t.closePath(),t.fillStyle=a[e.team],t.fill(),t.lineWidth=1,t.strokeStyle=e.team===i.team?`#fff`:`#000`,t.stroke()):e.kind===`ward`&&e.team===i.team&&(t.beginPath(),t.arc(o,s,e.getSight()*n,0,Math.PI*2),t.lineWidth=1,t.strokeStyle=e.wardType===`sentry`?`rgba(90,168,255,0.5)`:`rgba(255,211,77,0.5)`,t.stroke(),t.fillStyle=e.wardType===`sentry`?`#5aa8ff`:`#ffd34d`,t.fillRect(o-1.8,s-1.8,3.6,3.6))}}for(let e of r.runes){if(!e.alive||!r.isPointVisible(i.team,e.x,e.z))continue;let a=e.x*n,o=e.z*n;t.beginPath(),t.moveTo(a,o-4),t.lineTo(a+3.5,o),t.lineTo(a,o+4),t.lineTo(a-3.5,o),t.closePath(),t.fillStyle=Tm[e.type]??`#fff`,t.fill(),t.lineWidth=1,t.strokeStyle=`#000`,t.stroke()}for(let e of r.heroes)e.alive&&r.isVisible(i.team,e)&&(t.beginPath(),t.arc(e.x*n,e.z*n,e===i?5:4,0,Math.PI*2),t.fillStyle=e===i?`#ffffff`:a[e.team],t.fill(),t.lineWidth=1.5,t.strokeStyle=e===i?a[e.team]:`#000`,t.stroke());let c=this.game.pings?.active();if(c)for(let e of c){let r=e.x*n,i=e.z*n;for(let n=0;n<2;n++){let a=(e.age*1.4+n*.5)%1;t.beginPath(),t.arc(r,i,3+a*14,0,Math.PI*2),t.lineWidth=2,t.strokeStyle=`rgba(255,211,77,${(1-a)*(1-e.age/e.life)+.15})`,t.stroke()}t.fillStyle=`#ffd34d`,t.font=`bold 12px sans-serif`,t.textAlign=`center`,t.fillText(`!`,r,i+4)}let l=this.game.renderer,u=[[0,0],[window.innerWidth,0],[window.innerWidth,window.innerHeight],[0,window.innerHeight]].map(([e,t])=>l.screenToGround(e,t));u.every(Boolean)&&(t.beginPath(),u.forEach((e,r)=>r?t.lineTo(e.x*n,e.z*n):t.moveTo(e.x*n,e.z*n)),t.closePath(),t.strokeStyle=`rgba(255,255,255,0.8)`,t.lineWidth=1,t.stroke())}};export{Su as A,xi as B,$d as C,id as D,yd as E,Oi as F,Gr as G,ci as H,Pi as I,Or as J,Br as K,Ni as L,Ka as M,ya as N,Yu as O,Ti as P,Cr as Q,Ii as R,Bd as S,dd as T,si as U,di as V,ni as W,Fr as X,kr as Y,Dr as Z,ef as _,lf as a,Ud as b,_f as c,yf as d,Md as f,rf as g,Qd as h,uf as i,Wa as j,xu as k,hf as l,Gd as m,wm as n,gf as o,Nd as p,Ar as q,Qf as r,bf as s,Em as t,vf as u,af as v,nf as w,of as x,zd as y,Si as z};