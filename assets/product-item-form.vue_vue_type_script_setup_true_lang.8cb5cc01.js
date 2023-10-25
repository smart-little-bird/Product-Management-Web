import{ProductTypeHelper as s}from"./datas.3faac027.js";import{d as g,ae as f,o as v,c4 as C,w as n,i as u,h as t,c9 as B,k as y,_ as h,cG as q,c7 as U,m as E}from"./index.d04f1737.js";const k=g({__name:"product-item-form",props:{item:{}},setup(m){const e=m.item,d={productType:{required:!0,type:"number",trigger:["blur","change"],message:"\u8BF7\u9009\u62E9\u4EA7\u54C1\u7C7B\u578B"},name:{required:!0,trigger:["blur","input"],message:"\u8BF7\u8F93\u5165\u540D\u79F0"},specifications:{required:!0,trigger:["blur","input"],message:"\u8BF7\u8F93\u5165\u89C4\u683C\u578B\u53F7"},amount:{required:!0,type:"number",trigger:["blur","input"]},unitPrice:{required:!0,type:"number",trigger:["blur","input"]},unit:{required:!0,trigger:["blur","input"],message:"\u8BF7\u8F93\u5165\u5355\u4F4D"},material:{required:!0,trigger:["blur","input"],message:"\u8BF7\u8F93\u5165\u6750\u6599\u578B\u53F7"},technicalRequirements:{required:!0,trigger:["blur","input"],message:"\u8BF7\u8F93\u5165\u6280\u672F\u8981\u6C42"}},c=f(()=>Array.from(s.productTypeMapper.keys()).map(p=>({label:String(s.getDesc(p)),value:p})));return(p,l)=>{const _=B,r=y,o=h,i=q,b=U,F=E;return v(),C(F,{ref:"productItemFormRef","label-width":"auto","label-placement":"left",model:t(e),rules:d},{default:n(()=>[u(b,{vertical:""},{default:n(()=>[u(r,{label:"\u4EA7\u54C1\u7C7B\u578B",path:"productType"},{default:n(()=>[u(_,{value:t(e).productType,"onUpdate:value":l[0]||(l[0]=a=>t(e).productType=a),placeholder:"\u4EA7\u54C1\u7C7B\u578B",clearable:"",options:c.value,size:"small"},null,8,["value","options"])]),_:1}),u(r,{label:"\u540D\u79F0",path:"name"},{default:n(()=>[u(o,{clearable:"",value:t(e).name,"onUpdate:value":l[1]||(l[1]=a=>t(e).name=a),placeholder:"\u8F93\u5165\u540D\u79F0"},null,8,["value"])]),_:1}),u(r,{label:"\u89C4\u683C\u578B\u53F7",path:"specifications"},{default:n(()=>[u(o,{clearable:"",value:t(e).specifications,"onUpdate:value":l[2]||(l[2]=a=>t(e).specifications=a),placeholder:"\u89C4\u683C\u578B\u53F7"},null,8,["value"])]),_:1}),u(r,{label:"\u6570\u91CF",path:"amount"},{default:n(()=>[u(i,{style:{width:"100%"},"show-button":!1,clearable:"",value:t(e).amount,"onUpdate:value":l[3]||(l[3]=a=>t(e).amount=a),placeholder:"\u6570\u91CF"},null,8,["value"])]),_:1}),u(r,{label:"\u5355\u4EF7",path:"unitPrice"},{default:n(()=>[u(i,{style:{width:"100%"},"show-button":!1,clearable:"",value:t(e).unitPrice,"onUpdate:value":l[4]||(l[4]=a=>t(e).unitPrice=a),placeholder:"\u5355\u4EF7"},null,8,["value"])]),_:1}),u(r,{label:"\u5355\u4F4D",path:"unit"},{default:n(()=>[u(o,{clearable:"",value:t(e).unit,"onUpdate:value":l[5]||(l[5]=a=>t(e).unit=a),placeholder:"\u5355\u4F4D"},null,8,["value"])]),_:1}),u(r,{label:"\u6750\u6599\u578B\u53F7",path:"material"},{default:n(()=>[u(o,{clearable:"",value:t(e).material,"onUpdate:value":l[6]||(l[6]=a=>t(e).material=a),placeholder:"\u6750\u6599\u578B\u53F7"},null,8,["value"])]),_:1}),u(r,{label:"\u6280\u672F\u8981\u6C42",path:"technicalRequirements"},{default:n(()=>[u(o,{clearable:"",value:t(e).technicalRequirements,"onUpdate:value":l[7]||(l[7]=a=>t(e).technicalRequirements=a),placeholder:"\u6280\u672F\u8981\u6C42"},null,8,["value"])]),_:1}),u(r,{label:"\u5907\u6CE8",path:"remark"},{default:n(()=>[u(o,{clearable:"",value:t(e).remark,"onUpdate:value":l[8]||(l[8]=a=>t(e).remark=a),placeholder:"\u5907\u6CE8"},null,8,["value"])]),_:1})]),_:1})]),_:1},8,["model"])}}});export{k as _};
