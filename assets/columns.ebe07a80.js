import{i,s as r}from"./index.1d473b98.js";let t=function(e){return e[e.Enterprise=0]="Enterprise",e[e.Personage=1]="Personage",e[e.ThreeWay=2]="ThreeWay",e}({});const n={clientTypeMapper:new Map([[t.Enterprise,"\u4F01\u4E1A"],[t.Personage,"\u4E2A\u4EBA"],[t.ThreeWay,"\u5176\u4ED6"]]),getDesc:e=>n.clientTypeMapper.get(e)},c=[{title:"\u5E8F\u53F7",key:"id",width:100,align:"center"},{title:"\u5BA2\u6237\u540D\u79F0",key:"name",align:"center",width:150},{title:"\u5BA2\u6237\u7C7B\u578B",key:"clientType",align:"center",width:100,render(e){return i(r,{bordered:!0,round:!0,size:"medium",type:e.clientType===t.Enterprise?"success":e.clientType===t.Personage?"info":"default"},{default:()=>n.getDesc(e.clientType)})}},{title:"\u5BA2\u6237\u5730\u5740",align:"center",key:"address",render(e){return`${e.province} ${e.city} ${e.street}\uFF1B\u90AE\u7F16\uFF1A${e.zipCode}`},width:150},{align:"center",title:"\u4EE3\u7406\u8054\u7CFB\u4EBA",key:"clientAgentName",width:150,render(e){return e.clientAgent.name}},{align:"center",title:"\u4EE3\u7406\u8054\u7CFB\u65B9\u5F0F",key:"clientAgentPhoneNumber",width:150,render(e){return e.clientAgent.phoneNumber}},{align:"center",title:"\u5BA2\u6237\u7A0E\u53F7",key:"tFN",width:150},{align:"center",title:"\u5BA2\u6237\u94F6\u884C\u62AC\u5934",key:"bankTitle",width:150},{align:"center",title:"\u5BA2\u6237\u94F6\u884C\u8D26\u53F7",key:"bankAccount",width:150},{align:"center",title:"\u5F00\u7968\u7535\u8BDD",key:"billingTelephone ",width:150},{align:"center",title:"\u8054\u7CFB\u7535\u8BDD",key:"contactNumber",width:150},{align:"center",title:"\u5BA2\u6237\u90AE\u7BB1",key:"email",width:150},{align:"center",title:"\u5BA2\u6237\u4F20\u771F",key:"fax",width:150}];export{t as ClientType,n as ClientTypeHelper,c as columns};