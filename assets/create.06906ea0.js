import{d as B,f as I,r as F,b as r,c1 as D,o as x,c as T,i as e,w as t,c4 as z,h as m,j as a,_ as P,k as j,m as N,ca as R,N as S,l as U,c6 as M,c7 as V,cb as $}from"./index.f60d6bba.js";import{_ as q}from"./product-item-form.vue_vue_type_script_setup_true_lang.cd20469d.js";import{productItemColumns as O}from"./datas.7c81ffee.js";import{B as G}from"./TableAction.vue_vue_type_script_lang.9235bd2d.js";import{T as H}from"./TableAction.a98d6964.js";import{P as J}from"./PlusOutlined.d12fc65b.js";import"./vuedraggable.umd.9f4126b2.js";import"./useDesignSetting.56cc026d.js";import"./SettingOutlined.1fba4437.js";import"./propTypes.4706eaf1.js";import"./FormOutlined.d635f030.js";import"./ReloadOutlined.3f65a739.js";import"./componentSetting.152e7e8a.js";import"./index.c622879e.js";import"./DownOutlined.13db5421.js";const ie=B({__name:"create",setup(K){const h=I(),g=F(),s=F(!1),_=r([]),f=r({}),C=()=>{console.log("\u70B9\u51FB\u4E86\u8FD4\u56DE\u4EA7\u54C1\u5217\u8868\u9875"),h.push({name:"product-list"})},y=()=>{s.value=!0},v=()=>{_.push(f),s.value=!1},w=r({width:200,title:"\u64CD\u4F5C",key:"action",fixed:"right",align:"center",render(E){return console.log(E),D(H,{style:"button",actions:[{label:"\u5220\u9664",onClick:()=>{},ifShow:()=>!0}]})}}),u=r({id:null,description:null,entryCriteria:null,productItemDtos:[]});return(E,o)=>{const i=P,c=j,b=N,d=R,A=S,l=U,p=M,k=V;return x(),T("div",null,[e(d,{bordered:!1,class:"mt-4 proCard",size:"small",segmented:{content:!0}},{default:t(()=>[e(b,{model:u,ref:"productFormRef","label-placement":"left","label-width":"auto",inline:"",class:"py-4"},{default:t(()=>[z(e(c,{label:"\u5BA2\u6237Id",path:"id",hidden:""},{default:t(()=>[e(i,{placeholder:"\u5BA2\u6237Id",readonly:"",value:u.id,"onUpdate:value":o[0]||(o[0]=n=>u.id=n),hidden:""},null,8,["value"])]),_:1},512),[[$,!1]]),e(c,{label:"\u4EA7\u54C1\u63CF\u8FF0",path:"description"},{default:t(()=>[e(i,{placeholder:"\u4EA7\u54C1\u63CF\u8FF0",value:u.description,"onUpdate:value":o[1]||(o[1]=n=>u.description=n)},null,8,["value"])]),_:1}),e(c,{label:"\u5165\u7EA7\u63CF\u8FF0",path:"entryCriteria"},{default:t(()=>[e(i,{placeholder:"\u5165\u7EA7\u63CF\u8FF0",value:u.entryCriteria,"onUpdate:value":o[2]||(o[2]=n=>u.entryCriteria=n)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1}),e(d,{bordered:!1,class:"mt-4 proCard",size:"small",segmented:{content:!0}},{default:t(()=>[e(m(G),{columns:m(O),"row-key":n=>n.id,ref_key:"actionRef",ref:g,dataSource:_,actionColumn:w,"scroll-x":1090,pagination:!1,showToolBar:!1},{tableTitle:t(()=>[e(l,{type:"primary",onClick:y},{icon:t(()=>[e(A,null,{default:t(()=>[e(m(J))]),_:1})]),default:t(()=>[a(" \u6DFB\u52A0\u4EA7\u54C1\u660E\u7EC6 ")]),_:1})]),_:1},8,["columns","row-key","dataSource","actionColumn"]),e(p,{justify:"center"},{default:t(()=>[e(l,{quaternary:"",type:"info",size:"large",onClick:y},{default:t(()=>[a(" \u6DFB\u52A0\u4EA7\u54C1\u660E\u7EC6 ")]),_:1})]),_:1})]),_:1}),e(k,{show:s.value,"onUpdate:show":o[4]||(o[4]=n=>s.value=n),"show-icon":!1,preset:"card",size:"huge",style:{width:"800px"},title:"\u65B0\u5EFA\u4EA7\u54C1\u660E\u7EC6"},{footer:t(()=>[e(p,{justify:"center"},{default:t(()=>[e(l,{onClick:o[3]||(o[3]=()=>s.value=!1)},{default:t(()=>[a("\u53D6\u6D88")]),_:1}),e(l,{type:"info",onClick:v},{default:t(()=>[a("\u786E\u5B9A")]),_:1})]),_:1})]),default:t(()=>[e(q,{item:f},null,8,["item"])]),_:1},8,["show"]),e(d,{bordered:!1,class:"mt-4 proCard",size:"small",segmented:{content:!0}},{default:t(()=>[e(p,{justify:"center"},{default:t(()=>[e(l,{type:"default",onClick:C},{default:t(()=>[a(" \u8FD4\u56DE ")]),_:1}),e(l,{type:"success",onClick:C},{default:t(()=>[a(" \u63D0\u4EA4 ")]),_:1})]),_:1})]),_:1})])}}});export{ie as default};