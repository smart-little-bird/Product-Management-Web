import{_ as f}from"./TableAction.vue_vue_type_script_lang.2d6a2831.js";import{n as g,a8 as h,o as n,c as i,a as r,F as w,p as $,z as s,w as t,aA as k,aw as p,i as a,av as _,N as v,l as y,aC as A,aB as D,j as N,t as b}from"./index.1027d362.js";const B={class:"tableAction"},S={class:"flex items-center justify-center"},C={class:"flex items-center"},V=r("span",null,"\u66F4\u591A",-1);function F(e,L,O,P,T,j){const c=v,l=y,d=h("DownOutlined"),m=A;return n(),i("div",B,[r("div",S,[(n(!0),i(w,null,$(e.getActions,(o,u)=>(n(),s(l,p({key:`${u}-${o.label}`},o,{class:"mx-1"}),D({default:t(()=>[N(b(o.label)+" ",1)]),_:2},[o.hasOwnProperty("icon")?{name:"icon",fn:t(()=>[a(c,{component:o.icon},null,8,["component"])]),key:"0"}:void 0]),1040))),128)),e.dropDownActions&&e.getDropdownList.length?(n(),s(m,{key:0,trigger:"hover",options:e.getDropdownList,onSelect:e.select},{default:t(()=>[k(e.$slots,"more"),e.$slots.more?_("",!0):(n(),s(l,p({key:0},e.getMoreProps,{class:"mx-1","icon-placement":"right"}),{default:t(()=>[r("div",C,[V,a(c,{size:"14",class:"ml-1"},{default:t(()=>[a(d)]),_:1})])]),_:1},16))]),_:3},8,["options","onSelect"])):_("",!0)])])}const E=g(f,[["render",F]]);export{E as T};