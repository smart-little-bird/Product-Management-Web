var dt=Object.defineProperty,ft=Object.defineProperties;var gt=Object.getOwnPropertyDescriptors;var Te=Object.getOwnPropertySymbols;var mt=Object.prototype.hasOwnProperty,pt=Object.prototype.propertyIsEnumerable;var $e=(e,t,n)=>t in e?dt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,S=(e,t)=>{for(var n in t||(t={}))mt.call(t,n)&&$e(e,n,t[n]);if(Te)for(var n of Te(t))pt.call(t,n)&&$e(e,n,t[n]);return e},H=(e,t)=>ft(e,gt(t));var U=(e,t,n)=>new Promise((o,i)=>{var u=s=>{try{a(n.next(s))}catch(l){i(l)}},g=s=>{try{a(n.throw(s))}catch(l){i(l)}},a=s=>s.done?o(s.value):Promise.resolve(s.value).then(u,g);a((n=n.apply(e,t)).next())});import{ci as Fe,cj as ht,ck as vt,cl as _t,cm as Ct,cn as bt,co as wt,cp as yt,cq as kt,cr as He,cs as St,ct as Dt,cu as Ot,cv as Nt,cw as Tt,cx as $t,aP as Ft,aR as Et,b1 as Ue,b2 as Me,d as j,o as B,c as q,a as N,cy as zt,cz as Rt,cA as Lt,r as R,b as qe,ak as E,cB as me,cC as ae,cD as Ke,c9 as te,h as r,n as Se,cE as V,ca as De,w as y,i as _,j as oe,cF as Ee,N as pe,cG as We,l as Pt,cd as xt,cH as Oe,cI as Ye,cJ as It,cK as Ze,cL as he,_ as At,cM as Bt,cf as Vt,cN as Ge,cO as Ht,cP as Ut,c8 as W,cQ as Mt,cR as ue,cS as A,cT as ye,cU as ne,cV as ee,bc as ze,cW as je,cX as qt,cb as Re,ch as Le,t as ke,cY as le,cZ as Qe,c_ as Je,c$ as Xe,d0 as et,d1 as be,d2 as Kt,p as Wt,F as Yt,d3 as Zt,d4 as Gt,d5 as jt,d6 as Qt,d7 as Jt}from"./index.d7359774.js";import{D as Xt}from"./vuedraggable.umd.4b8d9550.js";import{u as en}from"./useDesignSetting.285b446c.js";import{p as fe,s as tn,Q as nn}from"./propTypes.12df6813.js";import{F as tt}from"./FormOutlined.20a196d3.js";import{C as on,a as sn,R as an}from"./ReloadOutlined.a9378331.js";import{c as ln}from"./componentSetting.152e7e8a.js";import{u as cn,t as rn,a as un}from"./index.9e8645af.js";import{D as dn}from"./DownOutlined.09cc0b3e.js";var Pe=Fe?Fe.isConcatSpreadable:void 0;function fn(e){return ht(e)||vt(e)||!!(Pe&&e&&e[Pe])}function nt(e,t,n,o,i){var u=-1,g=e.length;for(n||(n=fn),i||(i=[]);++u<g;){var a=e[u];t>0&&n(a)?t>1?nt(a,t-1,n,o,i):_t(i,a):o||(i[i.length]=a)}return i}function gn(e){var t=e==null?0:e.length;return t?nt(e,1):[]}function mn(e){return Ct(bt(e,void 0,gn),e+"")}function pn(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}function hn(e,t){return t.length<2?e:wt(e,yt(t,0,-1))}function vn(e,t){return kt(e,t)}function _n(e,t){return t=He(t,e),e=hn(e,t),e==null||delete e[St(pn(t))]}function Cn(e){return Dt(e)?void 0:e}var bn=1,wn=2,yn=4,kn=mn(function(e,t){var n={};if(e==null)return n;var o=!1;t=Ot(t,function(u){return u=He(u,e),o||(o=u.length>1),u}),Nt(e,Tt(e),n),o&&(n=$t(n,bn|wn|yn,Cn));for(var i=t.length;i--;)_n(n,t[i]);return n});const Sn=kn;function xe(e,t){var n;Ft(1,arguments);var o=Et((n=t==null?void 0:t.additionalDigits)!==null&&n!==void 0?n:2);if(o!==2&&o!==1&&o!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(!(typeof e=="string"||Object.prototype.toString.call(e)==="[object String]"))return new Date(NaN);var i=Tn(e),u;if(i.date){var g=$n(i.date,o);u=Fn(g.restDateString,g.year)}if(!u||isNaN(u.getTime()))return new Date(NaN);var a=u.getTime(),s=0,l;if(i.time&&(s=En(i.time),isNaN(s)))return new Date(NaN);if(i.timezone){if(l=zn(i.timezone),isNaN(l))return new Date(NaN)}else{var C=new Date(a+s),T=new Date(0);return T.setFullYear(C.getUTCFullYear(),C.getUTCMonth(),C.getUTCDate()),T.setHours(C.getUTCHours(),C.getUTCMinutes(),C.getUTCSeconds(),C.getUTCMilliseconds()),T}return new Date(a+s+l)}var de={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},Dn=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,On=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,Nn=/^([+-])(\d{2})(?::?(\d{2}))?$/;function Tn(e){var t={},n=e.split(de.dateTimeDelimiter),o;if(n.length>2)return t;if(/:/.test(n[0])?o=n[0]:(t.date=n[0],o=n[1],de.timeZoneDelimiter.test(t.date)&&(t.date=e.split(de.timeZoneDelimiter)[0],o=e.substr(t.date.length,e.length))),o){var i=de.timezone.exec(o);i?(t.time=o.replace(i[1],""),t.timezone=i[1]):t.time=o}return t}function $n(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),o=e.match(n);if(!o)return{year:NaN,restDateString:""};var i=o[1]?parseInt(o[1]):null,u=o[2]?parseInt(o[2]):null;return{year:u===null?i:u*100,restDateString:e.slice((o[1]||o[2]).length)}}function Fn(e,t){if(t===null)return new Date(NaN);var n=e.match(Dn);if(!n)return new Date(NaN);var o=!!n[4],i=se(n[1]),u=se(n[2])-1,g=se(n[3]),a=se(n[4]),s=se(n[5])-1;if(o)return In(t,a,s)?Rn(t,a,s):new Date(NaN);var l=new Date(0);return!Pn(t,u,g)||!xn(t,i)?new Date(NaN):(l.setUTCFullYear(t,u,Math.max(i,g)),l)}function se(e){return e?parseInt(e):1}function En(e){var t=e.match(On);if(!t)return NaN;var n=we(t[1]),o=we(t[2]),i=we(t[3]);return An(n,o,i)?n*Ue+o*Me+i*1e3:NaN}function we(e){return e&&parseFloat(e.replace(",","."))||0}function zn(e){if(e==="Z")return 0;var t=e.match(Nn);if(!t)return 0;var n=t[1]==="+"?-1:1,o=parseInt(t[2]),i=t[3]&&parseInt(t[3])||0;return Bn(o,i)?n*(o*Ue+i*Me):NaN}function Rn(e,t,n){var o=new Date(0);o.setUTCFullYear(e,0,4);var i=o.getUTCDay()||7,u=(t-1)*7+n+1-i;return o.setUTCDate(o.getUTCDate()+u),o}var Ln=[31,null,31,30,31,30,31,31,30,31,30,31];function ot(e){return e%400===0||e%4===0&&e%100!==0}function Pn(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(Ln[t]||(ot(e)?29:28))}function xn(e,t){return t>=1&&t<=(ot(e)?366:365)}function In(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}function An(e,t,n){return e===24?t===0&&n===0:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}function Bn(e,t){return t>=0&&t<=59}const Vn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Hn=N("path",{d:"M840 836H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm0-724H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM610.8 378c6 0 9.4-7 5.7-11.7L515.7 238.7a7.14 7.14 0 0 0-11.3 0L403.6 366.3a7.23 7.23 0 0 0 5.7 11.7H476v268h-62.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V378h62.8z",fill:"currentColor"},null,-1),Un=[Hn],Mn=j({name:"ColumnHeightOutlined",render:function(t,n){return B(),q("svg",Vn,Un)}}),qn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Kn=N("path",{d:"M909.3 506.3L781.7 405.6a7.23 7.23 0 0 0-11.7 5.7V476H548V254h64.8c6 0 9.4-7 5.7-11.7L517.7 114.7a7.14 7.14 0 0 0-11.3 0L405.6 242.3a7.23 7.23 0 0 0 5.7 11.7H476v222H254v-64.8c0-6-7-9.4-11.7-5.7L114.7 506.3a7.14 7.14 0 0 0 0 11.3l127.5 100.8c4.7 3.7 11.7.4 11.7-5.7V548h222v222h-64.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V548h222v64.8c0 6 7 9.4 11.7 5.7l127.5-100.8a7.3 7.3 0 0 0 .1-11.4z",fill:"currentColor"},null,-1),Wn=[Kn],Yn=j({name:"DragOutlined",render:function(t,n){return B(),q("svg",qn,Wn)}}),Zn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Gn=N("path",{d:"M762 164h-64c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V172c0-4.4-3.6-8-8-8zm-508 0v72.4c0 9.5 4.2 18.4 11.4 24.5L564.6 512L265.4 763.1c-7.2 6.1-11.4 15-11.4 24.5V860c0 6.8 7.9 10.5 13.1 6.1L689 512L267.1 157.9A7.95 7.95 0 0 0 254 164z",fill:"currentColor"},null,-1),jn=[Gn],Qn=j({name:"VerticalLeftOutlined",render:function(t,n){return B(),q("svg",Zn,jn)}}),Jn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Xn=N("path",{d:"M326 164h-64c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V172c0-4.4-3.6-8-8-8zm444 72.4V164c0-6.8-7.9-10.5-13.1-6.1L335 512l421.9 354.1c5.2 4.4 13.1.7 13.1-6.1v-72.4c0-9.4-4.2-18.4-11.4-24.5L459.4 512l299.2-251.1c7.2-6.1 11.4-15.1 11.4-24.5z",fill:"currentColor"},null,-1),eo=[Xn],to=j({name:"VerticalRightOutlined",render:function(t,n){return B(),q("svg",Jn,eo)}}),st=Symbol("s-table");function no(e){zt(st,e)}function it(){return Rt(st)}const oo=j({name:"ColumnSetting",components:{SettingOutlined:Lt,DragOutlined:Yn,Draggable:Xt,VerticalRightOutlined:to,VerticalLeftOutlined:Qn},setup(){const{getDarkTheme:e}=en(),t=it(),n=R([]),o=R([]),i=qe({selection:!1,checkAll:!0,checkList:[],defaultCheckList:[]}),u=E(()=>i.selection);me(()=>{t.getColumns().length&&g()});function g(){const f=l(),p=f.map(b=>b.key);i.checkList=p,i.defaultCheckList=p;const k=f.filter(b=>b.key!="action"&&b.title!="\u64CD\u4F5C");n.value.length||(n.value=ae(k),o.value=ae(k))}function a(f){i.selection&&f.unshift("selection"),s(f)}function s(f){t.setColumns(f)}function l(){let f=[];return t.getColumns().forEach(p=>{f.push(S({},p))}),f}function C(){i.checkList=[...i.defaultCheckList],i.checkAll=!0;let p=t.getCacheColumns().map(k=>H(S({},k),{fixed:void 0}));s(p),n.value=p}function T(f){let p=t.getCacheColumns(!0);f?(s(p),i.checkList=p):(s([]),i.checkList=[])}function L(){const f=te(r(n));n.value=f,s(f)}function d(f){let p=t.getCacheColumns();f?(p.unshift({type:"selection",key:"selection"}),s(p)):(p.splice(0,1),s(p))}function m(f){return f.draggedContext.element.draggable!==!1}function h(f,p){if(!i.checkList.includes(f.key))return;let k=l();const b=f.fixed===p?void 0:p;let I=k.findIndex(M=>M.key===f.key);I!==-1&&(k[I].fixed=b),t.setCacheColumnsField(f.key,{fixed:b}),n.value[I].fixed=b,s(k)}return H(S({},Ke(i)),{columnsList:n,getDarkTheme:e,onChange:a,onCheckAll:T,onSelection:d,onMove:m,resetColumns:C,fixedColumn:h,draggableEnd:L,getSelection:u})}});const so={class:"cursor-pointer table-toolbar-right-icon"},io={class:"table-toolbar-inner-popover-title"},ao={class:"table-toolbar-inner"},lo={class:"fixed-item"},co=N("span",null,"\u56FA\u5B9A\u5230\u5DE6\u4FA7",-1),ro=N("span",null,"\u56FA\u5B9A\u5230\u53F3\u4FA7",-1),uo=N("span",null,"\u5217\u8BBE\u7F6E",-1);function fo(e,t,n,o,i,u){const g=V("SettingOutlined"),a=pe,s=We,l=Pt,C=xt,T=V("DragOutlined"),L=V("VerticalRightOutlined"),d=Oe,m=Ye,h=V("VerticalLeftOutlined"),f=V("Draggable"),p=It,k=Ze;return B(),De(d,{trigger:"hover"},{trigger:y(()=>[N("div",so,[_(k,{trigger:"click",width:230,class:"toolbar-popover",placement:"bottom-end"},{trigger:y(()=>[_(a,{size:"18"},{default:y(()=>[_(g)]),_:1})]),header:y(()=>[N("div",io,[_(C,null,{default:y(()=>[_(s,{checked:e.checkAll,"onUpdate:checked":[t[0]||(t[0]=b=>e.checkAll=b),e.onCheckAll]},{default:y(()=>[oe("\u5217\u5C55\u793A")]),_:1},8,["checked","onUpdate:checked"]),_(s,{checked:e.selection,"onUpdate:checked":[t[1]||(t[1]=b=>e.selection=b),e.onSelection]},{default:y(()=>[oe("\u52FE\u9009\u5217")]),_:1},8,["checked","onUpdate:checked"]),_(l,{text:"",type:"info",size:"small",class:"mt-1",onClick:e.resetColumns},{default:y(()=>[oe("\u91CD\u7F6E")]),_:1},8,["onClick"])]),_:1})])]),default:y(()=>[N("div",ao,[_(p,{value:e.checkList,"onUpdate:value":[t[3]||(t[3]=b=>e.checkList=b),e.onChange]},{default:y(()=>[_(f,{modelValue:e.columnsList,"onUpdate:modelValue":t[2]||(t[2]=b=>e.columnsList=b),animation:"300","item-key":"key",filter:".no-draggable",move:e.onMove,onEnd:e.draggableEnd},{item:y(({element:b})=>[N("div",{class:Ee(["table-toolbar-inner-checkbox",{"table-toolbar-inner-checkbox-dark":e.getDarkTheme===!0,"no-draggable":b.draggable===!1}])},[N("span",{class:Ee(["drag-icon",{"drag-icon-hidden":b.draggable===!1}])},[_(a,{size:"18"},{default:y(()=>[_(T)]),_:1})],2),_(s,{value:b.key,label:b.title},null,8,["value","label"]),N("div",lo,[_(d,{trigger:"hover",placement:"bottom"},{trigger:y(()=>[_(a,{size:"18",color:b.fixed==="left"?"#2080f0":void 0,class:"cursor-pointer",onClick:I=>e.fixedColumn(b,"left")},{default:y(()=>[_(L)]),_:2},1032,["color","onClick"])]),default:y(()=>[co]),_:2},1024),_(m,{vertical:""}),_(d,{trigger:"hover",placement:"bottom"},{trigger:y(()=>[_(a,{size:"18",color:b.fixed==="right"?"#2080f0":void 0,class:"cursor-pointer",onClick:I=>e.fixedColumn(b,"right")},{default:y(()=>[_(h)]),_:2},1032,["color","onClick"])]),default:y(()=>[ro]),_:2},1024)])],2)]),_:1},8,["modelValue","move","onEnd"])]),_:1},8,["value","onUpdate:value"])])]),_:1})])]),default:y(()=>[uo]),_:1})}const at=Se(oo,[["render",fo]]);function go(e){const t=R(r(e).loading);he(()=>r(e).loading,i=>{t.value=i});const n=E(()=>r(t));function o(i){t.value=i}return{getLoading:n,setLoading:o}}var lt=(e=>(e.NInput="on-input",e.NInputNumber="on-input",e.NSelect="on-update:value",e.NSwitch="on-update:value",e.NCheckbox="on-update:value",e.NDatePicker="on-update:value",e.NTimePicker="on-update:value",e))(lt||{});const Q=new Map;Q.set("NInput",At);Q.set("NInputNumber",Bt);Q.set("NSelect",Vt);Q.set("NSwitch",Ge);Q.set("NCheckbox",We);Q.set("NDatePicker",Ht);Q.set("NTimePicker",Ut);const mo=({component:e="NInput",rule:t=!0,ruleMessage:n,popoverVisible:o},{attrs:i})=>{const u=Q.get(e),g=W(u,i);return t?W(Ze,{"display-directive":"show",show:!!o,manual:"manual"},{trigger:()=>g,default:()=>W("span",{style:{color:"red",width:"90px",display:"inline-block"}},{default:()=>n})}):g};function po(e){return!e||!e.getBoundingClientRect?0:e.getBoundingClientRect()}function ho(e){const t=document.documentElement,n=t.scrollLeft,o=t.scrollTop,i=t.clientLeft,u=t.clientTop,g=window.pageXOffset,a=window.pageYOffset,s=po(e),{left:l,top:C,width:T,height:L}=s,d=(g||n)-(i||0),m=(a||o)-(u||0),h=l+g,f=C+a,p=h-d,k=f-m,b=window.document.documentElement.clientWidth,I=window.document.documentElement.clientHeight;return{left:p,top:k,right:b-T-p,bottom:I-L-k,rightIncludeBody:b-p,bottomIncludeBody:I-k}}function Ie(e,t,n){e&&t&&n&&e.addEventListener(t,n,!1)}const ge=new Map;let Ae;Mt||(Ie(document,"mousedown",e=>Ae=e),Ie(document,"mouseup",e=>{for(const{documentHandler:t}of ge.values())t(e,Ae)}));function Be(e,t){let n=[];return Array.isArray(t.arg)?n=t.arg:n.push(t.arg),function(o,i){const u=t.instance.popperRef,g=o.target,a=i.target,s=!t||!t.instance,l=!g||!a,C=e.contains(g)||e.contains(a),T=e===g,L=n.length&&n.some(m=>m==null?void 0:m.contains(g))||n.length&&n.includes(a),d=u&&(u.contains(g)||u.contains(a));s||l||C||T||L||d||t.value()}}const vo={beforeMount(e,t){ge.set(e,{documentHandler:Be(e,t),bindingFn:t.value})},updated(e,t){ge.set(e,{documentHandler:Be(e,t),bindingFn:t.value})},unmounted(e){ge.delete(e)}};function Ve(e){return e==="NInput"?"\u8BF7\u8F93\u5165":["NPicker","NSelect","NCheckbox","NRadio","NSwitch","NDatePicker","NTimePicker"].includes(e)?"\u8BF7\u9009\u62E9":""}const _o=j({name:"EditableCell",components:{FormOutlined:tt,CloseOutlined:on,CheckOutlined:sn,CellComponent:mo},directives:{clickOutside:vo},props:{value:{type:[String,Number,Boolean,Object],default:""},record:{type:Object},column:{type:Object,default:()=>({})},index:fe.number},setup(e){const t=it(),n=R(!1),o=R(),i=R(!1),u=R(""),g=R([]),a=R(e.value),s=R(e.value),l=E(()=>{var c;return((c=e.column)==null?void 0:c.editComponent)||"NInput"}),C=E(()=>{var c;return(c=e.column)==null?void 0:c.editRule}),T=E(()=>r(u)&&r(i)),L=E(()=>{const c=r(l);return["NCheckbox","NRadio"].includes(c)}),d=E(()=>{var K,O,X,ce;const c=(O=(K=e.column)==null?void 0:K.editComponentProps)!=null?O:{},v=(ce=(X=e.column)==null?void 0:X.editComponent)!=null?ce:null,w=r(l),$={},D=r(L);let P=D?"checked":"value";const F=r(a);let z=D?ue(F)&&A(F)?F:!!F:F;w==="NDatePicker"&&(ye(z)?c.valueFormat?P="formatted-value":z=xe(z).getTime():ne(z)&&(c.valueFormat?P="formatted-value":z=z.map(ve=>xe(ve).getTime())));const x=v?lt[v]:void 0;return H(S(S({placeholder:Ve(r(l))},$),Sn(c,"onChange")),{[x]:k,[P]:z})}),m=E(()=>{var F,z;const{editComponentProps:c,editValueMap:v}=e.column,w=r(a);if(v&&ee(v))return v(w);if(!r(l).includes("NSelect"))return w;const P=((F=c==null?void 0:c.options)!=null?F:r(g)||[]).find(x=>`${x.value}`==`${w}`);return(z=P==null?void 0:P.label)!=null?z:w}),h=E(()=>{const{align:c="center"}=e.column;return`edit-cell-align-${c}`}),f=E(()=>{const{editable:c}=e.record||{};return!!c});me(()=>{s.value=e.value}),me(()=>{const{editable:c}=e.column;(A(c)||A(r(f)))&&(n.value=!!c||r(f))});function p(){var c;r(f)||r((c=e.column)==null?void 0:c.editRow)||(u.value="",n.value=!0,je(()=>{var w;const v=r(o);(w=v==null?void 0:v.focus)==null||w.call(v)}))}function k(v){return U(this,arguments,function*(c){var P,F,z,x,K;const w=r(l),$=(F=(P=e.column)==null?void 0:P.editComponentProps)!=null?F:{};c?(c==null?void 0:c.target)&&Reflect.has(c.target,"value")?a.value=c.target.value:w==="NCheckbox"?a.value=c.target.checked:(ye(c)||A(c)||ue(c))&&(a.value=c):a.value=c,w==="NDatePicker"&&(ue(a.value)?$.valueFormat&&(a.value=ze(a.value,$.valueFormat)):ne(a.value)&&$.valueFormat&&(a.value=a.value.map(O=>{ze(O,$.valueFormat)})));const D=(x=(z=e.column)==null?void 0:z.editComponentProps)==null?void 0:x.onChange;D&&ee(D)&&D(...arguments),(K=t.emit)==null||K.call(t,"edit-change",{column:e.column,value:r(a),record:te(e.record)}),yield b()})}function b(){return U(this,null,function*(){const{column:c,record:v}=e,{editRule:w}=c,$=r(a);if(w){if(A(w)&&!$&&!ue($)){i.value=!0;const D=r(l);return u.value=Ve(D),!1}if(ee(w)){const D=yield w($,v);return D?(u.value=D,i.value=!0,!1):(u.value="",!0)}}return u.value="",!0})}function I(c=!0,v=!0){return U(this,null,function*(){var x;if(v&&!(yield b()))return!1;const{column:w,index:$,record:D}=e;if(!D)return!1;const{key:P}=w,F=r(a);if(!P)return;tn(D,P,F),c&&((x=t.emit)==null||x.call(t,"edit-end",{record:D,index:$,key:P,value:F})),n.value=!1})}function M(){return U(this,null,function*(){var c;(c=e.column)!=null&&c.editRow||(yield I())})}function J(){var D;n.value=!1,a.value=s.value;const{column:c,index:v,record:w}=e,{key:$}=c;i.value=!0,u.value="",(D=t.emit)==null||D.call(t,"edit-cancel",{record:w,index:v,key:$,value:r(a)})}function Y(){var v;if(((v=e.column)==null?void 0:v.editable)||r(f))return;r(l).includes("NInput")&&J()}function Z(c){g.value=c}function G(c,v){var w;e.record&&(ne(e.record[c])?(w=e.record[c])==null||w.push(v):e.record[c]=[v])}return e.record&&(G("submitCbs",I),G("validCbs",b),G("cancelCbs",J),e.column.key&&(e.record.editValueRefs||(e.record.editValueRefs={}),e.record.editValueRefs[e.column.key]=a),e.record.onCancelEdit=()=>{var c,v;ne((c=e.record)==null?void 0:c.cancelCbs)&&((v=e.record)==null||v.cancelCbs.forEach(w=>w()))},e.record.onSubmitEdit=()=>U(this,null,function*(){var c,v,w,$;if(ne((c=e.record)==null?void 0:c.submitCbs)){const D=(((v=e.record)==null?void 0:v.validCbs)||[]).map(x=>x());return(yield Promise.all(D)).every(x=>!!x)?((((w=e.record)==null?void 0:w.submitCbs)||[]).forEach(x=>x(!1,!1)),($=t.emit)==null||$.call(t,"edit-row-end"),!0):void 0}})),{isEdit:n,handleEdit:p,currentValueRef:a,handleSubmit:I,handleChange:k,handleCancel:J,elRef:o,getComponent:l,getRule:C,onClickOutside:Y,ruleMessage:u,getRuleVisible:T,getComponentProps:d,handleOptionsChange:Z,getWrapperClass:h,getRowEditable:f,getValues:m,handleEnter:M}}});const Co={class:"editable-cell"},bo={class:"flex editable-cell-content"},wo={class:"editable-cell-content-comp"},yo={key:0,class:"editable-cell-action"};function ko(e,t,n,o,i,u){const g=V("FormOutlined"),a=pe,s=V("CellComponent"),l=V("CheckOutlined"),C=V("CloseOutlined"),T=qt("click-outside");return B(),q("div",Co,[Re(N("div",{class:"editable-cell-content",onClick:t[0]||(t[0]=(...L)=>e.handleEdit&&e.handleEdit(...L))},[oe(ke(e.getValues)+" ",1),e.column.editRow?le("",!0):(B(),De(a,{key:0,class:"edit-icon"},{default:y(()=>[_(g)]),_:1}))],512),[[Le,!e.isEdit]]),Re((B(),q("div",bo,[N("div",wo,[_(s,Qe(e.getComponentProps,{component:e.getComponent,popoverVisible:e.getRuleVisible,ruleMessage:e.ruleMessage,rule:e.getRule,class:e.getWrapperClass,ref:"elRef",onOptionsChange:e.handleOptionsChange,onPressEnter:e.handleEnter}),null,16,["component","popoverVisible","ruleMessage","rule","class","onOptionsChange","onPressEnter"])]),e.getRowEditable?le("",!0):(B(),q("div",yo,[_(a,{class:"mx-2 cursor-pointer"},{default:y(()=>[_(l,{onClick:e.handleSubmit},null,8,["onClick"])]),_:1}),_(a,{class:"mx-2 cursor-pointer"},{default:y(()=>[_(C,{onClick:e.handleCancel},null,8,["onClick"])]),_:1})]))])),[[Le,e.isEdit],[T,e.onClickOutside]])])}const So=Se(_o,[["render",ko]]);function Do(e){return(t,n)=>{const o=e.key,i=t[o];return t.onEdit=(u,g=!1)=>U(this,null,function*(){var a,s;return g||(t.editable=u),!u&&g?(yield(a=t.onSubmitEdit)==null?void 0:a.call(t))?(t.editable=!1,!0):!1:(!u&&!g&&((s=t.onCancelEdit)==null||s.call(t)),!0)}),W(So,{value:i,record:t,column:e,index:n})}}function Oo(e){const t=R(r(e).columns);let n=r(e).columns;const o=E(()=>{const d=ae(r(t));return s(e,d),d||[]}),{hasPermission:i}=Je();function u(d){const m=d.ifShow;let h=!0;return A(m)&&(h=m),ee(m)&&(h=m(d)),h}const g=(d,m)=>W(Oe,null,{trigger:()=>d,default:()=>m}),a=E(()=>{const d=r(o);return ae(d).filter(h=>i(h.auth)&&u(h)).map(h=>{h.ellipsis=typeof h.ellipsis=="undefined"?{tooltip:!0}:!1;const{edit:f}=h;if(f&&(h.render=Do(h),f)){const p=h.title;h.title=()=>g(W("span",{},[W("span",{style:{"margin-right":"5px"}},p),W(pe,{size:14},{default:()=>W(tt)})]),"\u8BE5\u5217\u53EF\u7F16\u8F91")}return h})});he(()=>r(e).columns,d=>{t.value=d,n=d});function s(d,m){const{actionColumn:h}=r(d);!h||!m.find(f=>f.key==="action")&&m.push(S({},h))}function l(d){const m=ae(d);if(!ne(m))return;if(!m.length){t.value=[];return}const h=n.map(f=>f.key);if(!ye(m[0]))t.value=m;else{const f=[];n.forEach(p=>{d.includes(p.key)&&f.push(S({},p))}),vn(h,m)||f.sort((p,k)=>h.indexOf(p.key)-h.indexOf(k.key)),t.value=f}}function C(){return te(r(o)).map(m=>H(S({},m),{title:m.title,key:m.key,fixed:m.fixed||void 0}))}function T(d){return d?n.map(m=>m.key):n}function L(d,m){!d||!m||n.forEach(h=>{if(h.key===d){Object.assign(h,m);return}})}return{getColumnsRef:o,getCacheColumns:T,setCacheColumnsField:L,setColumns:l,getColumns:C,getPageColumns:a}}const{table:No}=ln,{apiSetting:To,defaultPageSize:$o,pageSizes:Fo}=No,Eo=$o,ie=To,zo=Fo;function Ro(e,{getPaginationInfo:t,setPagination:n,setLoading:o,tableData:i},u){const g=R([]);me(()=>{i.value=r(g)}),he(()=>r(e).dataSource,()=>{const{dataSource:d}=r(e);d&&(g.value=d)},{immediate:!0});const a=E(()=>{const{rowKey:d}=r(e);return d||(()=>"key")}),s=E(()=>{const d=r(g);return!d||d.length===0?r(g):r(g)});function l(d){return U(this,null,function*(){try{o(!0);const{request:m,pagination:h,beforeRequest:f,afterRequest:p}=r(e);if(!m)return;const k=ie.pageField,b=ie.sizeField,I=ie.totalField,M=ie.listField,J=ie.countField;let Y={};const{page:Z=1,pageSize:G=10}=r(t);A(h)&&!h||A(t)?Y={}:(Y[k]=d&&d[k]||Z,Y[b]=G);let c=S(S({},Y),d);f&&ee(f)&&(c=(yield f(c))||c);const v=yield m(c),w=v[I],$=v[k],D=v[J],P=v[M]?v[M]:[];if(w){const z=Math.ceil(D/G);if(Z>z)return n({page:z,itemCount:D}),yield l(d)}let F=v[M]?v[M]:[];p&&ee(p)&&(F=(yield p(F))||F),g.value=F,n({page:$,pageCount:w,itemCount:D}),d&&d[k]&&n({page:d[k]||1}),u("fetch-success",{items:r(F),resultTotal:w})}catch(m){console.error(m),u("fetch-error",m),g.value=[],n({pageCount:0})}finally{o(!1)}})}Xe(()=>{setTimeout(()=>{l()},16)});function C(d){g.value=d}function T(){return s.value}function L(d){return U(this,null,function*(){yield l(d)})}return{fetch:l,getRowKey:a,getDataSourceRef:s,getDataSource:T,setTableData:C,reload:L}}function Lo(e){const t=R({}),n=R(!0);he(()=>r(e).pagination,s=>{!A(s)&&s&&(t.value=S(S({},r(t)),s!=null?s:{}))});const o=E(()=>{const{pagination:s}=r(e);return!r(n)||A(s)&&!s?!1:S(S({page:1,pageSize:Eo,pageSizes:zo,showSizePicker:!0,showQuickJumper:!0,prefix:l=>`\u5171 ${l.itemCount} \u6761`},A(s)?{}:s),r(t))});function i(s){const l=r(o);t.value=S(S({},A(l)?{}:l),s)}function u(){return r(o)}function g(){return r(n)}function a(s){return U(this,null,function*(){n.value=s})}return{getPagination:u,getPaginationInfo:o,setShowPagination:a,getShowPagination:g,setPagination:i}}const Po=H(S({},et.props),{title:{type:String,default:null},titleTooltip:{type:String,default:null},size:{type:String,default:"medium"},dataSource:{type:[Object],default:()=>[]},columns:{type:[Array],default:()=>[],required:!0},beforeRequest:{type:Function,default:null},request:{type:Function,default:null},afterRequest:{type:Function,default:null},rowKey:{type:[String,Function],default:void 0},pagination:{type:[Object,Boolean],default:()=>{}},showPagination:{type:[String,Boolean],default:"auto"},actionColumn:{type:Object,default:null},canResize:fe.bool.def(!0),resizeHeightOffset:fe.number.def(0),showToolBar:fe.bool.def(!0)});function xo(e,t=150,n){let o=()=>{e()};o=cn(o,t);const u=()=>{n&&n.immediate&&o(),window.addEventListener("resize",o)},g=()=>{window.removeEventListener("resize",o)};return rn(()=>{u()}),un(()=>{g()}),[u,g]}const Io=[{type:"menu",label:"\u7D27\u51D1",key:"small"},{type:"menu",label:"\u9ED8\u8BA4",key:"medium"},{type:"menu",label:"\u5BBD\u677E",key:"large"}],Ao=j({components:{ReloadOutlined:an,ColumnHeightOutlined:Mn,ColumnSetting:at,QuestionCircleOutlined:nn},props:S({},Po),emits:["fetch-success","fetch-error","update:checked-row-keys","edit-end","edit-cancel","edit-row-end","edit-change"],setup(e,{emit:t}){const n=R(150),o=R(null),i=R(null);let u;const g=R(!0),a=R([]),s=R(),l=R(!0),C=E(()=>S(S({},e),r(s))),{getLoading:T,setLoading:L}=go(C),{getPaginationInfo:d,setPagination:m}=Lo(C),{getDataSourceRef:h,getDataSource:f,getRowKey:p,reload:k}=Ro(C,{getPaginationInfo:d,setPagination:m,tableData:a,setLoading:L},t),{getPageColumns:b,setColumns:I,getColumns:M,getCacheColumns:J,setCacheColumnsField:Y}=Oo(C),Z=qe({tableSize:r(C).size||"medium",isColumnSetting:!1});function G(O){m({page:O}),k()}function c(O){m({page:1,pageSize:O}),k()}function v(O){Z.tableSize=O}const w=E(()=>Z.tableSize),$=E(()=>{const O=r(h),X=O.length?`${r(n)}px`:"auto";return H(S({},r(C)),{loading:r(T),columns:te(r(b)),rowKey:r(p),data:O,size:r(w),remote:!0,"max-height":X})}),D=E(()=>te(r(d)));function P(O){s.value=S(S({},r(s)),O)}const F=O=>g.value=O,z={reload:k,setColumns:I,setLoading:L,setProps:P,getColumns:M,getPageColumns:b,getCacheColumns:J,setCacheColumnsField:Y,emit:t},x=E(()=>{const{canResize:O}=r(C);return O});function K(){return U(this,null,function*(){const O=r(o);if(!O||!r(x))return;const X=O==null?void 0:O.$el,ce=X.querySelector(".n-data-table-thead "),{bottomIncludeBody:ve}=ho(ce),ct=64;let _e=2,rt=24;if(!A(r(D)))if(u=X.querySelector(".n-data-table__pagination"),u){const ut=u.offsetHeight;_e+=ut||0}else _e+=28;let re=ve-(ct+_e+rt+(e.resizeHeightOffset||0));const Ce=e.maxHeight;re=Ce&&Ce<re?Ce:re,n.value=re})}return xo(K,280),Xe(()=>{je(()=>{K()})}),no(H(S({},z),{wrapRef:i,getBindValues:$})),H(S({},Ke(Z)),{isShowToolBar:l,tableElRef:o,getBindValues:$,getDataSource:f,densityOptions:Io,reload:k,densitySelect:v,updatePage:G,updatePageSize:c,pagination:D,tableAction:z,setStriped:F,isStriped:g})}});const Ne=e=>(Qt("data-v-e68e9256"),e=e(),Jt(),e),Bo={class:"table-toolbar"},Vo={class:"flex items-center table-toolbar-left"},Ho={key:0,class:"table-toolbar-left-title"},Uo={key:0,class:"flex items-center table-toolbar-right"},Mo={class:"mr-2 table-toolbar-right-icon"},qo=Ne(()=>N("span",null,"\u8868\u683C\u6591\u9A6C\u7EB9",-1)),Ko=Ne(()=>N("span",null,"\u5237\u65B0",-1)),Wo={class:"table-toolbar-right-icon"},Yo=Ne(()=>N("span",null,"\u5BC6\u5EA6",-1)),Zo={class:"s-table"};function Go(e,t,n,o,i,u){const g=V("QuestionCircleOutlined"),a=pe,s=Oe,l=Ge,C=Ye,T=V("ReloadOutlined"),L=V("ColumnHeightOutlined"),d=Zt,m=at,h=et;return B(),q(Yt,null,[N("div",Bo,[N("div",Vo,[e.title?(B(),q("div",Ho,[oe(ke(e.title)+" ",1),e.titleTooltip?(B(),De(s,{key:0,trigger:"hover"},{trigger:y(()=>[_(a,{size:"18",class:"ml-1 text-gray-400 cursor-pointer"},{default:y(()=>[_(g)]),_:1})]),default:y(()=>[oe(" "+ke(e.titleTooltip),1)]),_:1})):le("",!0)])):le("",!0),be(e.$slots,"tableTitle",{},void 0,!0)]),e.showToolBar?(B(),q("div",Uo,[be(e.$slots,"toolbar",{},void 0,!0),_(s,{trigger:"hover"},{trigger:y(()=>[N("div",Mo,[_(l,{value:e.isStriped,"onUpdate:value":[t[0]||(t[0]=f=>e.isStriped=f),e.setStriped]},null,8,["value","onUpdate:value"])])]),default:y(()=>[qo]),_:1}),_(C,{vertical:""}),_(s,{trigger:"hover"},{trigger:y(()=>[N("div",{class:"table-toolbar-right-icon",onClick:t[1]||(t[1]=(...f)=>e.reload&&e.reload(...f))},[_(a,{size:"18"},{default:y(()=>[_(T)]),_:1})])]),default:y(()=>[Ko]),_:1}),_(s,{trigger:"hover"},{trigger:y(()=>[N("div",Wo,[_(d,{onSelect:e.densitySelect,trigger:"click",options:e.densityOptions,value:e.tableSize,"onUpdate:value":t[2]||(t[2]=f=>e.tableSize=f)},{default:y(()=>[_(a,{size:"18"},{default:y(()=>[_(L)]),_:1})]),_:1},8,["onSelect","options","value"])])]),default:y(()=>[Yo]),_:1}),_(m)])):le("",!0)]),N("div",Zo,[_(h,Qe({ref:"tableElRef"},e.getBindValues,{striped:e.isStriped,pagination:e.pagination,"onUpdate:page":e.updatePage,"onUpdate:pageSize":e.updatePageSize}),Kt({_:2},[Wt(Object.keys(e.$slots),f=>({name:f,fn:y(p=>[be(e.$slots,f,Gt(jt(p)),void 0,!0)])}))]),1040,["striped","pagination","onUpdate:page","onUpdate:pageSize"])])],64)}const as=Se(Ao,[["render",Go],["__scopeId","data-v-e68e9256"]]),ls=j({name:"TableAction",components:{DownOutlined:dn},props:{actions:{type:Array,default:null,required:!0},dropDownActions:{type:Array,default:null},style:{type:String,default:"button"},select:{type:Function,default:()=>{}}},setup(e){const{hasPermission:t}=Je(),n=e.style==="button"?"default":e.style==="text"?"primary":"default",o=e.style==="button"?void 0:e.style==="text"?!0:void 0,i=E(()=>({text:o,type:n,size:"small"})),u=E(()=>(te(e.dropDownActions)||[]).filter(s=>t(s.auth)&&g(s)).map(s=>{const{popConfirm:l}=s;return H(S(S({size:"small",text:o,type:n},s),l),{onConfirm:l==null?void 0:l.confirm,onCancel:l==null?void 0:l.cancel})}));function g(s){const l=s.ifShow;let C=!0;return A(l)&&(C=l),ee(l)&&(C=l(s)),C}return{getActions:E(()=>(te(e.actions)||[]).filter(s=>t(s.auth)&&g(s)).map(s=>{const{popConfirm:l}=s;return H(S(S({size:"small",text:o,type:n},s),l||{}),{onConfirm:l==null?void 0:l.confirm,onCancel:l==null?void 0:l.cancel,enable:!!l})})),getDropdownList:u,getMoreProps:i}}});export{as as B,ls as _,xe as p};
