import{d as f,r as g,u as v,b,o as C,A as x,w as n,i as u,a as A,j as D,_ as E,k,l as y,E as U,m as V,cJ as h,cK as q}from"./index.b0b3a750.js";const $=f({__name:"BasicSetting",setup(w){const m={name:{required:!0,message:"\u8BF7\u8F93\u5165\u6635\u79F0",trigger:"blur"},email:{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1",trigger:"blur"},mobile:{required:!0,message:"\u8BF7\u8F93\u5165\u8054\u7CFB\u7535\u8BDD",trigger:"input"}},s=g(null),_=v(),e=b({name:"",mobile:"",email:"",address:""});function p(){s.value.validate(r=>{r?_.error("\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8BF7\u586B\u5199\u5B8C\u6574\u4FE1\u606F"):_.success("\u9A8C\u8BC1\u6210\u529F")})}return(r,l)=>{const o=E,t=k,i=y,d=U,c=V,F=h,B=q;return C(),x(B,{cols:"2 s:2 m:2 l:3 xl:3 2xl:3",responsive:"screen"},{default:n(()=>[u(F,null,{default:n(()=>[u(c,{"label-width":80,model:e,rules:m,ref_key:"formRef",ref:s},{default:n(()=>[u(t,{label:"\u6635\u79F0",path:"name"},{default:n(()=>[u(o,{value:e.name,"onUpdate:value":l[0]||(l[0]=a=>e.name=a),placeholder:"\u8BF7\u8F93\u5165\u6635\u79F0"},null,8,["value"])]),_:1}),u(t,{label:"\u90AE\u7BB1",path:"email"},{default:n(()=>[u(o,{placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1",value:e.email,"onUpdate:value":l[1]||(l[1]=a=>e.email=a)},null,8,["value"])]),_:1}),u(t,{label:"\u8054\u7CFB\u7535\u8BDD",path:"mobile"},{default:n(()=>[u(o,{placeholder:"\u8BF7\u8F93\u5165\u8054\u7CFB\u7535\u8BDD",value:e.mobile,"onUpdate:value":l[2]||(l[2]=a=>e.mobile=a)},null,8,["value"])]),_:1}),u(t,{label:"\u8054\u7CFB\u5730\u5740",path:"address"},{default:n(()=>[u(o,{value:e.address,"onUpdate:value":l[3]||(l[3]=a=>e.address=a),type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u8054\u7CFB\u5730\u5740"},null,8,["value"])]),_:1}),A("div",null,[u(d,null,{default:n(()=>[u(i,{type:"primary",onClick:p},{default:n(()=>[D("\u66F4\u65B0\u57FA\u672C\u4FE1\u606F")]),_:1})]),_:1})])]),_:1},8,["model"])]),_:1})]),_:1})}}});export{$ as _};
