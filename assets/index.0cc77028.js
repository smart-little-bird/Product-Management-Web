import{B as x}from"./BasicUpload.2f5b1124.js";import{d as y,cO as U,r as V,u as j,b as d,o as q,c as w,a as f,i as e,w as u,j as r,h as _,q as N,_ as R,k as S,l as J,B as P,m as T,cI as G,cJ as H}from"./index.1027d362.js";import"./componentSetting.152e7e8a.js";import"./DeleteOutlined.234fae29.js";import"./PlusOutlined.396ebacd.js";const I={class:"n-layout-page-header"},L={style:{"margin-left":"80px"}},K=y({__name:"index",setup(M){const g=U(),F={name:{required:!0,message:"\u8BF7\u8F93\u5165\u9884\u7EA6\u59D3\u540D",trigger:"blur"},remark:{required:!0,message:"\u8BF7\u8F93\u5165\u9884\u7EA6\u5907\u6CE8",trigger:"blur"},images:{required:!0,type:"array",message:"\u8BF7\u4E0A\u4F20\u75C5\u4F8B\u56FE\u7247",trigger:"change"}},l=V(null),m=j(),{uploadUrl:E}=g,n=d({name:"",mobile:"",images:["https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"]}),C=d({platform:"miniPrograms",timestamp:new Date().getTime(),token:"Q6fFCuhc1vkKn5JNFWaCLf6gRAc5n0LQHd08dSnG4qo="});function v(){l.value.validate(o=>{o?m.error("\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8BF7\u586B\u5199\u5B8C\u6574\u4FE1\u606F"):m.success("\u9A8C\u8BC1\u6210\u529F")})}function b(){l.value.restoreValidation()}function B(o){n.images=_(o)}return(o,t)=>{const i=N,p=R,s=S,c=J,h=P,A=T,D=G,k=H;return q(),w("div",null,[f("div",I,[e(i,{bordered:!1,title:"\u4E0A\u4F20\u56FE\u7247"},{default:u(()=>[r(" \u4E0A\u4F20\u56FE\u7247\uFF0C\u7528\u4E8E\u5411\u7528\u6237\u6536\u96C6\u56FE\u7247\u4FE1\u606F ")]),_:1})]),e(i,{bordered:!1,class:"mt-4 proCard"},{default:u(()=>[e(k,{cols:"2 s:1 m:3 l:3 xl:3 2xl:3",responsive:"screen"},{default:u(()=>[e(D,{offset:"0 s:0 m:1 l:1 xl:1 2xl:1"},{default:u(()=>[e(A,{"label-width":80,model:n,rules:F,"label-placement":"left",ref_key:"formRef",ref:l,class:"py-8"},{default:u(()=>[e(s,{label:"\u9884\u7EA6\u59D3\u540D",path:"name"},{default:u(()=>[e(p,{value:n.name,"onUpdate:value":t[0]||(t[0]=a=>n.name=a),placeholder:"\u8F93\u5165\u59D3\u540D"},null,8,["value"])]),_:1}),e(s,{label:"\u9884\u7EA6\u53F7\u7801",path:"mobile"},{default:u(()=>[e(p,{placeholder:"\u7535\u8BDD\u53F7\u7801",value:n.mobile,"onUpdate:value":t[1]||(t[1]=a=>n.mobile=a)},null,8,["value"])]),_:1}),e(s,{label:"\u75C5\u4F8B\u56FE\u7247",path:"images"},{default:u(()=>[e(_(x),{action:`${_(E)}/v1.0/files`,headers:C,data:{type:0},name:"files",width:100,height:100,onUploadChange:B,value:n.images,"onUpdate:value":t[2]||(t[2]=a=>n.images=a),helpText:"\u5355\u4E2A\u6587\u4EF6\u4E0D\u8D85\u8FC72MB\uFF0C\u6700\u591A\u53EA\u80FD\u4E0A\u4F2010\u4E2A\u6587\u4EF6"},null,8,["action","headers","value"])]),_:1}),f("div",L,[e(h,null,{default:u(()=>[e(c,{type:"primary",onClick:v},{default:u(()=>[r("\u63D0\u4EA4\u9884\u7EA6")]),_:1}),e(c,{onClick:b},{default:u(()=>[r("\u91CD\u7F6E")]),_:1})]),_:1})])]),_:1},8,["model"])]),_:1})]),_:1})]),_:1})])}}});export{K as default};