import{d as w,f as A,r as I,b as r,c8 as k,o as D,c as B,i as e,w as t,cb as x,h as z,j as s,_ as j,k as U,m as $,q as P,cr as T,l as q,cd as M,ce as N,ch as R}from"./index.18710603.js";import{_ as S}from"./product-item-form.vue_vue_type_script_setup_true_lang.75c4cdbc.js";import{productItemColumns as V}from"./columns.396d8587.js";import"./TableAction.vue_vue_type_script_lang.8f78339d.js";import{T as G}from"./TableAction.d592df8c.js";import"./vuedraggable.umd.d3c3b4ba.js";import"./useDesignSetting.3388fe58.js";import"./propTypes.86c838ff.js";import"./FormOutlined.4196c560.js";import"./ReloadOutlined.4c36b044.js";import"./componentSetting.152e7e8a.js";import"./index.479ac649.js";import"./DownOutlined.27d3b675.js";const ue=w({__name:"create",setup(H){const g=A(),l=I(!1),_=r([]),m=r({}),f=()=>{console.log("\u70B9\u51FB\u4E86\u8FD4\u56DE\u4EA7\u54C1\u5217\u8868\u9875"),g.push({name:"product-list"})},h=()=>{l.value=!0},F=()=>{_.push(m),l.value=!1},v=r({width:200,title:"\u64CD\u4F5C",key:"action",fixed:"right",align:"center",render(C){return console.log(C),k(G,{style:"button",actions:[{label:"\u5220\u9664",onClick:()=>{},ifShow:()=>!0}]})}}),n=r({id:null,description:null,entryCriteria:null,productItemDtos:[]});return(C,o)=>{const i=j,d=U,E=$,c=P,y=T,a=q,p=M,b=N;return D(),B("div",null,[e(c,{bordered:!1,class:"mt-4 proCard",size:"small",segmented:{content:!0}},{default:t(()=>[e(E,{model:n,ref:"productFormRef","label-placement":"left","label-width":"auto",inline:"",class:"py-4"},{default:t(()=>[x(e(d,{label:"\u5BA2\u6237Id",path:"id",hidden:""},{default:t(()=>[e(i,{placeholder:"\u5BA2\u6237Id",readonly:"",value:n.id,"onUpdate:value":o[0]||(o[0]=u=>n.id=u),hidden:""},null,8,["value"])]),_:1},512),[[R,!1]]),e(d,{label:"\u4EA7\u54C1\u63CF\u8FF0",path:"description"},{default:t(()=>[e(i,{placeholder:"\u4EA7\u54C1\u63CF\u8FF0",value:n.description,"onUpdate:value":o[1]||(o[1]=u=>n.description=u)},null,8,["value"])]),_:1}),e(d,{label:"\u5165\u7EA7\u63CF\u8FF0",path:"entryCriteria"},{default:t(()=>[e(i,{placeholder:"\u5165\u7EA7\u63CF\u8FF0",value:n.entryCriteria,"onUpdate:value":o[2]||(o[2]=u=>n.entryCriteria=u)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1}),e(c,{bordered:!1,class:"mt-4 proCard",size:"small",segmented:{content:!0}},{default:t(()=>[e(y,{columns:z(V),data:_,pagination:!1,bordered:!1,actionColumn:v,size:"small"},null,8,["columns","data","actionColumn"]),e(p,{justify:"center"},{default:t(()=>[e(a,{quaternary:"",type:"info",size:"large",onClick:h},{default:t(()=>[s(" \u6DFB\u52A0\u4EA7\u54C1\u660E\u7EC6 ")]),_:1})]),_:1})]),_:1}),e(b,{show:l.value,"onUpdate:show":o[4]||(o[4]=u=>l.value=u),"show-icon":!1,preset:"card",size:"huge",style:{width:"800px"},title:"\u65B0\u5EFA\u4EA7\u54C1\u660E\u7EC6"},{footer:t(()=>[e(p,{justify:"center"},{default:t(()=>[e(a,{onClick:o[3]||(o[3]=()=>l.value=!1)},{default:t(()=>[s("\u53D6\u6D88")]),_:1}),e(a,{type:"info",onClick:F},{default:t(()=>[s("\u786E\u5B9A")]),_:1})]),_:1})]),default:t(()=>[e(S,{item:m},null,8,["item"])]),_:1},8,["show"]),e(c,{bordered:!1,class:"mt-4 proCard",size:"small",segmented:{content:!0}},{default:t(()=>[e(p,{justify:"center"},{default:t(()=>[e(a,{type:"default",onClick:f},{default:t(()=>[s(" \u8FD4\u56DE ")]),_:1}),e(a,{type:"success",onClick:f},{default:t(()=>[s(" \u63D0\u4EA4 ")]),_:1})]),_:1})]),_:1})])}}});export{ue as default};
