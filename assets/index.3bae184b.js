var N=Object.defineProperty;var g=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var B=(a,t,o)=>t in a?N(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o,w=(a,t)=>{for(var o in t||(t={}))$.call(t,o)&&B(a,o,t[o]);if(g)for(var o of g(t))q.call(t,o)&&B(a,o,t[o]);return a};var b=(a,t,o)=>new Promise((d,r)=>{var l=s=>{try{c(o.next(s))}catch(i){r(i)}},p=s=>{try{c(o.throw(s))}catch(i){r(i)}},c=s=>s.done?d(s.value):Promise.resolve(s.value).then(l,p);c((o=o.apply(a,t)).next())});import{B as I}from"./TableAction.vue_vue_type_script_lang.1c2bca59.js";import{T as M}from"./TableAction.834b521e.js";import{r as O,a as U}from"./index.6b264d0f.js";import{columns as V}from"./datas.3faac027.js";import{d as j,f as z,r as k,e_ as K,u as L,b as E,c1 as S,c2 as G,o as H,c as J,i as n,w as u,h as _,j as y,N as Q,l as W,c6 as X,c7 as Y,cb as Z,c8 as oo}from"./index.d04f1737.js";import{_ as eo}from"./info.vue_vue_type_script_setup_true_lang.86b77c02.js";import{P as to}from"./PlusOutlined.881e5cd6.js";import{P as no}from"./PlusCircleOutlined.553bafb5.js";import"./vuedraggable.umd.dbed3df3.js";import"./useDesignSetting.27c03548.js";import"./SettingOutlined.a2d84f6b.js";import"./propTypes.6dfba07c.js";import"./FormOutlined.505aa824.js";import"./ReloadOutlined.5b29b40d.js";import"./componentSetting.e6bd74f7.js";import"./index.067aa104.js";import"./DownOutlined.1cb69bd2.js";const Eo=j({__name:"index",setup(a){const t=z(),o=k(),d=K(),r=L(),l=k(!1),p=E({product:{}}),c=E({width:"20%",title:"\u64CD\u4F5C",key:"action",fixed:"right",align:"center",render(e){return S(M,{style:"button",actions:[{label:"\u8BE6\u60C5",onClick:v.bind(null,e)},{label:"\u7F16\u8F91",onClick:x.bind(null,e)},{label:"\u5220\u9664",type:"error",onClick:D.bind(null,e)}]})}});function s(){t.push({name:"product-create"})}const i=e=>b(this,null,function*(){return yield U(w({},e))});function F(e){console.log(e)}function v(e){console.log("\u70B9\u51FB\u4E86\u67E5\u770B\u8BE6\u60C5",e),l.value=!0,p.product=G(e)}function x(e){console.log("\u70B9\u51FB\u4E86\u7F16\u8F91",e),t.push({name:"product-create",query:{productId:e.id}})}function D(e){console.log("\u70B9\u51FB\u4E86\u5220\u9664",e),d.error({title:"\u63D0\u793A",content:`\u60A8\u60F3\u5220\u9664 \u3010${e.description}\u3011`,positiveText:"\u786E\u5B9A",negativeText:"\u53D6\u6D88",onPositiveClick:()=>{O(e.id).then(()=>{r.success("\u5220\u9664\u6210\u529F"),o.value.reload()})},onNegativeClick:()=>{}})}return(e,f)=>{const C=Q,h=W,A=X,P=Y,T=Z,R=oo;return H(),J("div",null,[n(T,{bordered:!1,class:"proCard"},{default:u(()=>[n(_(I),{columns:_(V),request:i,"row-key":m=>m.id,ref_key:"actionRef",ref:o,actionColumn:c,"onUpdate:checkedRowKeys":F,"scroll-x":1090},{tableTitle:u(()=>[n(P,null,{default:u(()=>[n(h,{type:"primary",onClick:s},{icon:u(()=>[n(C,null,{default:u(()=>[n(_(to))]),_:1})]),default:u(()=>[y(" \u65B0\u5EFA\u4EA7\u54C1 ")]),_:1}),n(A,{hidden:""},{default:u(()=>[n(h,{type:"success"},{icon:u(()=>[n(C,null,{default:u(()=>[n(_(no))]),_:1})]),default:u(()=>[y("\u5BFC\u5165\u4EA7\u54C1")]),_:1})]),_:1})]),_:1})]),_:1},8,["columns","row-key","actionColumn"])]),_:1}),n(R,{style:{"max-width":"70%"},preset:"card",title:"\u4EA7\u54C1\u8BE6\u60C5",size:"huge",show:l.value,"onUpdate:show":f[0]||(f[0]=m=>l.value=m)},{default:u(()=>[n(eo,{product:p.product},null,8,["product"])]),_:1},8,["show"])])}}});export{Eo as default};