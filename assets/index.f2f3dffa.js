import{bz as y,az as P,as as b,bS as F,r as M,a_ as C,aR as O,aY as S,h as j}from"./index.a7e8f465.js";var v;const g=typeof window!="undefined",z=e=>typeof e=="function",W=e=>typeof e=="number",E=(e,o,n)=>Math.min(n,Math.max(o,e)),m=()=>{};g&&((v=window==null?void 0:window.navigator)==null?void 0:v.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function d(e){return typeof e=="function"?e():j(e)}function x(e,o){function n(...r){return new Promise((i,t)=>{Promise.resolve(e(()=>o.apply(this,r),{fn:o,thisArg:this,args:r})).then(i).catch(t)})}return n}function A(e,o={}){let n,r,i=m;const t=u=>{clearTimeout(u),i(),i=m};return u=>{const a=d(e),s=d(o.maxWait);return n&&t(n),a<=0||s!==void 0&&s<=0?(r&&(t(r),r=null),Promise.resolve(u())):new Promise((c,p)=>{i=o.rejectOnCancel?p:c,s&&!r&&(r=setTimeout(()=>{n&&t(n),r=null,c(u())},s)),n=setTimeout(()=>{r&&t(r),r=null,c(u())},a)})}}function R(e,o=!0,n=!0,r=!1){let i=0,t,l=!0,u=m,a;const s=()=>{t&&(clearTimeout(t),t=void 0,u(),u=m)};return p=>{const f=d(e),h=Date.now()-i,w=()=>a=p();return s(),f<=0?(i=Date.now(),w()):(h>f&&(n||!l)?(i=Date.now(),w()):o&&(a=new Promise((T,D)=>{u=r?D:T,t=setTimeout(()=>{i=Date.now(),l=!0,T(w()),s()},Math.max(0,f-h))})),!n&&!t&&(t=setTimeout(()=>l=!0,f)),l=!1,a)}}function I(e){return e}function U(e){return O()?(S(e),!0):!1}function L(e,o=200,n={}){return x(A(o,n),e)}function N(e,o=200,n=!1,r=!0,i=!1){return x(R(o,n,r,i),e)}function V(e,o=!0){y()?P(e):o?e():b(e)}function Y(e){y()&&F(e)}function k(e,o,n={}){const{immediate:r=!0}=n,i=M(!1);let t=null;function l(){t&&(clearTimeout(t),t=null)}function u(){i.value=!1,l()}function a(...s){l(),i.value=!0,t=setTimeout(()=>{i.value=!1,t=null,e(...s)},d(o))}return r&&(i.value=!0,g&&a()),U(u),{isPending:C(i),start:a,stop:u}}export{Y as a,z as b,W as c,k as d,U as e,E as f,g,N as h,I as i,m as n,V as t,L as u};
