import{i as n,s as a}from"./index.78dd5efb.js";let t=function(e){return e[e.Shafting=0]="Shafting",e[e.RudderSystem=1]="RudderSystem",e[e.Standard=2]="Standard",e[e.NonStandard=3]="NonStandard",e}({});const i={productTypeMapper:new Map([[t.Shafting,"\u8F74\u7CFB"],[t.RudderSystem,"\u8235\u7CFB"],[t.Standard,"\u6807\u51C6\u4EF6"],[t.NonStandard,"\u975E\u6807\u4EF6"]]),getDesc:e=>i.productTypeMapper.get(e)},d=[{title:"\u5E8F\u53F7",key:"id",width:100,align:"center"},{title:"\u4EA7\u54C1\u63CF\u8FF0",key:"description",align:"center",width:150},{title:"\u5165\u7EA7\u63CF\u8FF0",key:"entryCriteria",align:"center",width:100}],l=[{title:"\u5E8F\u53F7",key:"id",width:100,align:"center"},{title:"\u4EA7\u54C1\u7C7B\u578B",key:"productType",align:"center",width:100,render(e){n(a,{bordered:!0,round:!0,size:"medium",type:e.productType===t.Shafting?"success":e.clientType===t.RudderSystem?"info":e.clientType===t.NonStandard?"warning":"default"},{default:()=>i.getDesc(e.productType)})}},{title:"\u540D\u79F0",key:"name",align:"center",width:100},{title:"\u89C4\u683C",key:"specifications",align:"center",width:100},{title:"\u6570\u91CF",key:"amount",align:"center",width:100},{title:"\u5355\u4EF7",key:"unitPrice",align:"center",width:100},{title:"\u5355\u4F4D",key:"unit",align:"center",width:100},{title:"\u6750\u8D28",key:"material",align:"center",width:100},{title:"\u6280\u672F\u8981\u6C42",key:"technicalRequirements",align:"center",width:100},{title:"\u5907\u6CE8",key:"remark",align:"center",width:150}];export{t as ProductType,i as ProductTypeHelper,d as columns,l as productItemColumns};
