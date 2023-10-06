import{d as k,f as w,r as D,b as c,z as U,y as I,o as T,c as P,i as e,w as l,B as x,h as z,j as i,_ as R,k as q,m as j,q as M,U as S,E as $,l as H,C as N,G as V,H as G}from"./index.01d75b1f.js";import{ProductTypeHelper as F,productItemColumns as O}from"./columns.264dd869.js";import"./TableAction.vue_vue_type_script_lang.0baed75c.js";import{T as J}from"./TableAction.7d636d25.js";import"./vuedraggable.umd.10929f00.js";import"./useDesignSetting.368f861b.js";import"./propTypes.c8bac16a.js";import"./FormOutlined.69e32c70.js";import"./ReloadOutlined.2448a37b.js";import"./componentSetting.152e7e8a.js";import"./index.9396dfdb.js";import"./DownOutlined.7e89ef81.js";const oe=k({__name:"index",setup(K){const b=w(),s=D(!1),f=c([]),n=c({id:null,productType:null,name:null,specifications:null,amount:null,unitPrice:null,unit:null,material:null,technicalRequirements:null,remark:null}),v=()=>{console.log("\u70B9\u51FB\u4E86\u8FD4\u56DE\u4EA7\u54C1\u5217\u8868\u9875"),b.push({name:"product-list"})},y=()=>{s.value=!0},E=()=>{f.push(n),s.value=!1};c({width:200,title:"\u64CD\u4F5C",key:"action",fixed:"right",align:"center",render(d){return U(J,{style:"button",actions:[{label:"\u5220\u9664",onClick:()=>{},ifShow:()=>!0,auth:["basic_list"]}]})}});const r=c({id:null,description:null,entryCriteria:null}),h=I(()=>Array.from(F.productTypeMapper.keys()).map(d=>({label:F.getDesc(d),value:d})));return(d,u)=>{const o=R,a=q,C=j,_=M,g=S,m=$,p=H,B=N,A=V;return T(),P("div",null,[e(_,{bordered:!1,class:"proCard mt-4",size:"small",segmented:{content:!0}},{default:l(()=>[e(C,{model:r,ref:"productFormRef","label-placement":"left","label-width":"auto",inline:"",class:"py-4"},{default:l(()=>[x(e(a,{label:"\u5BA2\u6237Id",path:"id",hidden:""},{default:l(()=>[e(o,{placeholder:"\u5BA2\u6237Id",readonly:"",value:r.id,"onUpdate:value":u[0]||(u[0]=t=>r.id=t),hidden:""},null,8,["value"])]),_:1},512),[[G,!1]]),e(a,{label:"\u4EA7\u54C1\u63CF\u8FF0",path:"description"},{default:l(()=>[e(o,{placeholder:"\u4EA7\u54C1\u63CF\u8FF0",value:r.description,"onUpdate:value":u[1]||(u[1]=t=>r.description=t)},null,8,["value"])]),_:1}),e(a,{label:"\u5165\u7EA7\u63CF\u8FF0",path:"entryCriteria"},{default:l(()=>[e(o,{placeholder:"\u5165\u7EA7\u63CF\u8FF0",value:r.entryCriteria,"onUpdate:value":u[2]||(u[2]=t=>r.entryCriteria=t)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1}),e(_,{bordered:!1,class:"proCard mt-4",size:"small",segmented:{content:!0}},{default:l(()=>[e(m,null,{default:l(()=>[e(g,{columns:z(O),data:f,pagination:!1,bordered:!1},null,8,["columns","data"])]),_:1}),e(m,{justify:"center"},{default:l(()=>[e(p,{type:"info",size:"large",onClick:y},{default:l(()=>[i(" \u6DFB\u52A0\u4EA7\u54C1\u660E\u7EC6 ")]),_:1})]),_:1})]),_:1}),e(A,{show:s.value,"onUpdate:show":u[13]||(u[13]=t=>s.value=t),"show-icon":!1,preset:"card",size:"huge",style:{width:"800px"},title:"\u65B0\u5EFA\u4EA7\u54C1\u660E\u7EC6"},{footer:l(()=>[e(m,{justify:"center"},{default:l(()=>[e(p,{onClick:u[12]||(u[12]=()=>s.value=!1)},{default:l(()=>[i("\u53D6\u6D88")]),_:1}),e(p,{type:"info",onClick:E},{default:l(()=>[i("\u786E\u5B9A")]),_:1})]),_:1})]),default:l(()=>[e(C,{ref:"productItemFormRef","label-width":"auto","label-placement":"left",model:n},{default:l(()=>[e(a,{label:"\u4EA7\u54C1\u7C7B\u578B",path:"productType"},{default:l(()=>[e(B,{value:n.productType,"onUpdate:value":u[3]||(u[3]=t=>n.productType=t),placeholder:"\u4EA7\u54C1\u7C7B\u578B",options:h.value,size:"small"},null,8,["value","options"])]),_:1}),e(a,{label:"\u540D\u79F0",path:"name"},{default:l(()=>[e(o,{value:n.name,"onUpdate:value":u[4]||(u[4]=t=>n.name=t),placeholder:"\u8F93\u5165\u540D\u79F0"},null,8,["value"])]),_:1}),e(a,{label:"\u89C4\u683C\u578B\u53F7",path:"specifications"},{default:l(()=>[e(o,{value:n.specifications,"onUpdate:value":u[5]||(u[5]=t=>n.specifications=t),placeholder:"\u89C4\u683C\u578B\u53F7"},null,8,["value"])]),_:1}),e(a,{label:"\u6570\u91CF",path:"amount"},{default:l(()=>[e(o,{value:n.amount,"onUpdate:value":u[6]||(u[6]=t=>n.amount=t),placeholder:"\u6570\u91CF"},null,8,["value"])]),_:1}),e(a,{label:"\u5355\u4EF7",path:"unitPrice"},{default:l(()=>[e(o,{value:n.unitPrice,"onUpdate:value":u[7]||(u[7]=t=>n.unitPrice=t),placeholder:"\u5355\u4EF7"},null,8,["value"])]),_:1}),e(a,{label:"\u5355\u4F4D",path:"unit"},{default:l(()=>[e(o,{value:n.unit,"onUpdate:value":u[8]||(u[8]=t=>n.unit=t),placeholder:"\u5355\u4F4D"},null,8,["value"])]),_:1}),e(a,{label:"\u6750\u6599\u578B\u53F7",path:"material"},{default:l(()=>[e(o,{value:n.material,"onUpdate:value":u[9]||(u[9]=t=>n.material=t),placeholder:"\u6750\u6599\u578B\u53F7"},null,8,["value"])]),_:1}),e(a,{label:"\u6280\u672F\u8981\u6C42",path:"technicalRequirements"},{default:l(()=>[e(o,{value:n.technicalRequirements,"onUpdate:value":u[10]||(u[10]=t=>n.technicalRequirements=t),placeholder:"\u6280\u672F\u8981\u6C42"},null,8,["value"])]),_:1}),e(a,{label:"\u5907\u6CE8",path:"remark"},{default:l(()=>[e(o,{value:n.remark,"onUpdate:value":u[11]||(u[11]=t=>n.remark=t),placeholder:"\u5907\u6CE8"},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["show"]),e(_,{bordered:!1,class:"proCard mt-4",size:"small",segmented:{content:!0}},{default:l(()=>[e(m,{justify:"center"},{default:l(()=>[e(p,{type:"default",onClick:v},{default:l(()=>[i(" \u8FD4\u56DE ")]),_:1}),e(p,{type:"success",onClick:v},{default:l(()=>[i(" \u63D0\u4EA4 ")]),_:1})]),_:1})]),_:1})])}}});export{oe as default};
