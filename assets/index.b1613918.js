var T=Object.defineProperty;var f=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var _=(o,e,n)=>e in o?T(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,h=(o,e)=>{for(var n in e||(e={}))x.call(e,n)&&_(o,n,e[n]);if(f)for(var n of f(e))N.call(e,n)&&_(o,n,e[n]);return o};var b=(o,e,n)=>new Promise((s,r)=>{var m=l=>{try{a(n.next(l))}catch(i){r(i)}},d=l=>{try{a(n.throw(l))}catch(i){r(i)}},a=l=>l.done?s(l.value):Promise.resolve(l.value).then(m,d);a((n=n.apply(o,e)).next())});import{B as A}from"./Table.2aa380cf.js";import{T as P}from"./TableAction.0fb00f71.js";import{y as R,d as D,f as S,r as B,b as C,A as q,o as v,B as $,w as u,i as c,h as p,j as V,N as j,l as z,q as I}from"./index.e434ca51.js";import{columns as K}from"./columns.368c15f8.js";import{P as L}from"./PlusOutlined.4d290cd8.js";import"./TableAction.vue_vue_type_script_lang.c979dbb9.js";import"./vuedraggable.umd.4bc7a6a2.js";import"./useDesignSetting.6899d57a.js";import"./propTypes.7943b1fa.js";import"./FormOutlined.e2fafe9e.js";import"./ReloadOutlined.cf59f1fb.js";import"./componentSetting.152e7e8a.js";import"./index.3001e737.js";import"./DownOutlined.1451d5b7.js";const M="product";function O(o){return R.request({url:`/${M}`,method:"get",params:o})}const rn=D({__name:"index",setup(o){const e=S(),n=B(),s=B(!1),r=C({id:null,name:"",clientType:null,date:null,province:null,city:null,street:null,zipCode:null,clientAgent:{name:null,phoneNumber:null},tFN:null,bankTitle:null,bankAccount:null,billingTelephone:null,contactNumber:null,email:null,fax:null}),m=C({width:200,title:"\u64CD\u4F5C",key:"action",fixed:"right",align:"center",render(t){return q(P,{style:"button",actions:[{label:"\u8BE6\u60C5",onClick:i.bind(null,t),ifShow:()=>!0,auth:["basic_list"]},{label:"\u7F16\u8F91",onClick:w.bind(null,t),ifShow:()=>!0,auth:["basic_list"]},{label:"\u5220\u9664",onClick:g.bind(null,t),ifShow:()=>!0,auth:["basic_list"]}]})}});function d(){e.push({name:"product-create"})}const a=t=>b(this,null,function*(){return yield O(h({},t))});function l(t){console.log(t)}function i(t){console.log("\u70B9\u51FB\u4E86\u67E5\u770B\u8BE6\u60C5",t),e.push({name:"client-detail",params:{id:t.id}})}function w(t){console.log("\u70B9\u51FB\u4E86\u7F16\u8F91",t),s.value=!0,r.id=t.id}function g(t){console.log("\u70B9\u51FB\u4E86\u5220\u9664",t),window.$message.info("\u70B9\u51FB\u4E86\u5220\u9664")}return(t,U)=>{const k=j,y=z,F=I;return v(),$(F,{bordered:!1,class:"proCard"},{default:u(()=>[c(p(A),{columns:p(K),request:a,"row-key":E=>E.id,ref_key:"actionRef",ref:n,actionColumn:m,"onUpdate:checkedRowKeys":l,"scroll-x":1090},{tableTitle:u(()=>[c(y,{type:"primary",onClick:d},{icon:u(()=>[c(k,null,{default:u(()=>[c(p(L))]),_:1})]),default:u(()=>[V(" \u65B0\u5EFA\u4EA7\u54C1 ")]),_:1})]),toolbar:u(()=>[]),_:1},8,["columns","row-key","actionColumn"])]),_:1})}}});export{rn as default};
