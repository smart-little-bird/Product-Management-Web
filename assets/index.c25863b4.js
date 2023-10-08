var O=Object.defineProperty;var v=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var y=(s,n,o)=>n in s?O(s,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[n]=o,w=(s,n)=>{for(var o in n||(n={}))W.call(n,o)&&y(s,o,n[o]);if(v)for(var o of v(n))Y.call(n,o)&&y(s,o,n[o]);return s};var C=(s,n,o)=>new Promise((g,d)=>{var _=l=>{try{c(o.next(l))}catch(p){d(p)}},i=l=>{try{c(o.throw(l))}catch(p){d(p)}},c=l=>l.done?g(l.value):Promise.resolve(l.value).then(_,i);c((o=o.apply(s,n)).next())});import{B as H}from"./Table.ead24b83.js";import{T as J}from"./TableAction.dc8472a0.js";import{B as Q}from"./BasicForm.b53758ce.js";import{u as X}from"./useForm.dcb05ca9.js";import{g as Z}from"./list.760ca159.js";import{c8 as A,e$ as ee,d as ue,f as oe,r as F,b as D,o as te,ca as le,w as t,i as u,h as m,j as b,_ as ne,N as ae,l as se,k as re,cY as ie,m as ce,cd as de,ce as pe,q as me}from"./index.78dd5efb.js";import{P as _e}from"./PlusOutlined.26b656e9.js";import"./TableAction.vue_vue_type_script_lang.f8adb63d.js";import"./vuedraggable.umd.2d2675ab.js";import"./useDesignSetting.53518c36.js";import"./propTypes.1aa6f62a.js";import"./FormOutlined.e6e9f888.js";import"./ReloadOutlined.6a50ffc1.js";import"./componentSetting.152e7e8a.js";import"./index.775d06e9.js";import"./DownOutlined.138b77ef.js";const fe=[{title:"id",key:"id",width:100},{title:"\u540D\u79F0",key:"name",width:100},{title:"\u5934\u50CF",key:"avatar",width:100,render(s){return A(ee,{size:48,src:s.avatar})}},{title:"\u5730\u5740",key:"address",auth:["basic_list"],ifShow:s=>!0,width:150},{title:"\u5F00\u59CB\u65E5\u671F",key:"beginTime",width:160},{title:"\u7ED3\u675F\u65E5\u671F",key:"endTime",width:160},{title:"\u521B\u5EFA\u65F6\u95F4",key:"date",width:100}],Ue=ue({__name:"index",setup(s){const n={name:{required:!0,trigger:["blur","input"],message:"\u8BF7\u8F93\u5165\u540D\u79F0"},address:{required:!0,trigger:["blur","input"],message:"\u8BF7\u8F93\u5165\u5730\u5740"},date:{type:"number",required:!0,trigger:["blur","change"],message:"\u8BF7\u9009\u62E9\u65E5\u671F"}},o=[{field:"name",labelMessage:"\u8FD9\u662F\u4E00\u4E2A\u63D0\u793A",component:"NInput",label:"\u59D3\u540D",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D",onInput:e=>{console.log(e)}},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D",trigger:["blur"]}]},{field:"mobile",component:"NInputNumber",label:"\u624B\u673A",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801",showButton:!1,onInput:e=>{console.log(e)}}},{field:"type",component:"NSelect",label:"\u7C7B\u578B",componentProps:{placeholder:"\u8BF7\u9009\u62E9\u7C7B\u578B",options:[{label:"\u8212\u9002\u6027",value:1},{label:"\u7ECF\u6D4E\u6027",value:2}],onUpdateValue:e=>{console.log(e)}}},{field:"makeDate",component:"NDatePicker",label:"\u9884\u7EA6\u65F6\u95F4",defaultValue:118313526e4,componentProps:{type:"date",clearable:!0,onUpdateValue:e=>{console.log(e)}}},{field:"makeTime",component:"NTimePicker",label:"\u505C\u7559\u65F6\u95F4",componentProps:{clearable:!0,onUpdateValue:e=>{console.log(e)}}},{field:"status",label:"\u72B6\u6001",slot:"statusSlot"},{field:"makeProject",component:"NCheckbox",label:"\u9884\u7EA6\u9879\u76EE",componentProps:{placeholder:"\u8BF7\u9009\u62E9\u9884\u7EA6\u9879\u76EE",options:[{label:"\u79CD\u7259",value:1},{label:"\u8865\u7259",value:2},{label:"\u6839\u7BA1",value:3}],onUpdateChecked:e=>{console.log(e)}}},{field:"makeSource",component:"NRadioGroup",label:"\u6765\u6E90",componentProps:{options:[{label:"\u7F51\u4E0A",value:1},{label:"\u95E8\u5E97",value:2}],onUpdateChecked:e=>{console.log(e)}}}],g=oe(),d=F(null),_=F(),i=F(!1),c=F(!1),l=D({name:"",address:"",date:null}),p=D({width:220,title:"\u64CD\u4F5C",key:"action",fixed:"right",render(e){return A(J,{style:"button",actions:[{label:"\u5220\u9664",onClick:$.bind(null,e),ifShow:()=>!0,auth:["basic_list"]},{label:"\u7F16\u8F91",onClick:S.bind(null,e),ifShow:()=>!0,auth:["basic_list"]}],dropDownActions:[{label:"\u542F\u7528",key:"enabled",ifShow:()=>!0},{label:"\u7981\u7528",key:"disabled",ifShow:()=>!0}],select:a=>{window.$message.info(`\u60A8\u70B9\u51FB\u4E86\uFF0C${a} \u6309\u94AE`)}})}}),[P,{getFieldsValue:T}]=X({gridProps:{cols:"1 s:1 m:2 l:3 xl:4 2xl:4"},labelWidth:80,schemas:o});function N(){i.value=!0}const R=e=>C(this,null,function*(){return yield Z(w(w({},T()),e))});function U(e){console.log(e)}function B(){_.value.reload()}function x(e){e.preventDefault(),c.value=!0,d.value.validate(a=>{a?window.$message.error("\u8BF7\u586B\u5199\u5B8C\u6574\u4FE1\u606F"):(window.$message.success("\u65B0\u5EFA\u6210\u529F"),setTimeout(()=>{i.value=!1,B()})),c.value=!1})}function S(e){console.log("\u70B9\u51FB\u4E86\u7F16\u8F91",e),g.push({name:"basic-info",params:{id:e.id}})}function $(e){console.log("\u70B9\u51FB\u4E86\u5220\u9664",e),window.$message.info("\u70B9\u51FB\u4E86\u5220\u9664")}function V(e){console.log(e),B()}function q(e){console.log(e)}return(e,a)=>{const h=ne,I=ae,f=se,E=re,j=ie,L=ce,M=de,z=pe,G=me;return te(),le(G,{bordered:!1,class:"proCard"},{default:t(()=>[u(m(Q),{onRegister:m(P),onSubmit:V,onReset:q},{statusSlot:t(({model:r,field:k})=>[u(h,{value:r[k],"onUpdate:value":K=>r[k]=K},null,8,["value","onUpdate:value"])]),_:1},8,["onRegister"]),u(m(H),{columns:m(fe),request:R,"row-key":r=>r.id,ref_key:"actionRef",ref:_,actionColumn:p,"onUpdate:checkedRowKeys":U,"scroll-x":1090},{tableTitle:t(()=>[u(f,{type:"primary",onClick:N},{icon:t(()=>[u(I,null,{default:t(()=>[u(m(_e))]),_:1})]),default:t(()=>[b(" \u65B0\u5EFA ")]),_:1})]),toolbar:t(()=>[u(f,{type:"primary",onClick:B},{default:t(()=>[b("\u5237\u65B0\u6570\u636E")]),_:1})]),_:1},8,["columns","row-key","actionColumn"]),u(z,{show:i.value,"onUpdate:show":a[4]||(a[4]=r=>i.value=r),"show-icon":!1,preset:"dialog",title:"\u65B0\u5EFA"},{action:t(()=>[u(M,null,{default:t(()=>[u(f,{onClick:a[3]||(a[3]=()=>i.value=!1)},{default:t(()=>[b("\u53D6\u6D88")]),_:1}),u(f,{type:"info",loading:c.value,onClick:x},{default:t(()=>[b("\u786E\u5B9A")]),_:1},8,["loading"])]),_:1})]),default:t(()=>[u(L,{model:l,rules:n,ref_key:"formRef",ref:d,"label-placement":"left","label-width":80,class:"py-4"},{default:t(()=>[u(E,{label:"\u540D\u79F0",path:"name"},{default:t(()=>[u(h,{placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",value:l.name,"onUpdate:value":a[0]||(a[0]=r=>l.name=r)},null,8,["value"])]),_:1}),u(E,{label:"\u5730\u5740",path:"address"},{default:t(()=>[u(h,{type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u5730\u5740",value:l.address,"onUpdate:value":a[1]||(a[1]=r=>l.address=r)},null,8,["value"])]),_:1}),u(E,{label:"\u65E5\u671F",path:"date"},{default:t(()=>[u(j,{type:"datetime",placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",value:l.date,"onUpdate:value":a[2]||(a[2]=r=>l.date=r)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["show"])]),_:1})}}});export{Ue as default};
