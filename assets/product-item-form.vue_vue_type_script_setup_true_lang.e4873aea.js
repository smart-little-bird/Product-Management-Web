import{ProductTypeHelper as m}from"./columns.2b36e4dd.js";import{d as _,ak as f,o as v,ca as C,w as n,i as u,h as l,cf as F,k as b,_ as B,m as h}from"./index.4a94e73d.js";const k=_({__name:"product-item-form",props:{item:{}},setup(i){const e=i.item,s=f(()=>Array.from(m.productTypeMapper.keys()).map(r=>({label:String(m.getDesc(r)),value:String(r)})));return(r,t)=>{const d=F,o=b,p=B,c=h;return v(),C(c,{ref:"productItemFormRef","label-width":"auto","label-placement":"left",model:l(e)},{default:n(()=>[u(o,{label:"\u4EA7\u54C1\u7C7B\u578B",path:"productType"},{default:n(()=>[u(d,{value:l(e).productType,"onUpdate:value":t[0]||(t[0]=a=>l(e).productType=a),placeholder:"\u4EA7\u54C1\u7C7B\u578B",options:s.value,size:"small"},null,8,["value","options"])]),_:1}),u(o,{label:"\u540D\u79F0",path:"name"},{default:n(()=>[u(p,{value:l(e).name,"onUpdate:value":t[1]||(t[1]=a=>l(e).name=a),placeholder:"\u8F93\u5165\u540D\u79F0"},null,8,["value"])]),_:1}),u(o,{label:"\u89C4\u683C\u578B\u53F7",path:"specifications"},{default:n(()=>[u(p,{value:l(e).specifications,"onUpdate:value":t[2]||(t[2]=a=>l(e).specifications=a),placeholder:"\u89C4\u683C\u578B\u53F7"},null,8,["value"])]),_:1}),u(o,{label:"\u6570\u91CF",path:"amount"},{default:n(()=>[u(p,{value:l(e).amount,"onUpdate:value":t[3]||(t[3]=a=>l(e).amount=a),placeholder:"\u6570\u91CF"},null,8,["value"])]),_:1}),u(o,{label:"\u5355\u4EF7",path:"unitPrice"},{default:n(()=>[u(p,{onModel:l(e).unitPrice,placeholder:"\u5355\u4EF7"},null,8,["onModel"])]),_:1}),u(o,{label:"\u5355\u4F4D",path:"unit"},{default:n(()=>[u(p,{value:l(e).unit,"onUpdate:value":t[4]||(t[4]=a=>l(e).unit=a),placeholder:"\u5355\u4F4D"},null,8,["value"])]),_:1}),u(o,{label:"\u6750\u6599\u578B\u53F7",path:"material"},{default:n(()=>[u(p,{value:l(e).material,"onUpdate:value":t[5]||(t[5]=a=>l(e).material=a),placeholder:"\u6750\u6599\u578B\u53F7"},null,8,["value"])]),_:1}),u(o,{label:"\u6280\u672F\u8981\u6C42",path:"technicalRequirements"},{default:n(()=>[u(p,{value:l(e).technicalRequirements,"onUpdate:value":t[6]||(t[6]=a=>l(e).technicalRequirements=a),placeholder:"\u6280\u672F\u8981\u6C42"},null,8,["value"])]),_:1}),u(o,{label:"\u5907\u6CE8",path:"remark"},{default:n(()=>[u(p,{value:l(e).remark,"onUpdate:value":t[7]||(t[7]=a=>l(e).remark=a),placeholder:"\u5907\u6CE8"},null,8,["value"])]),_:1})]),_:1},8,["model"])}}});export{k as _};
