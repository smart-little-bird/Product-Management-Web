import{d as F,r as a,u as x,o as C,A as b,w as u,i as e,a as t,j as i,k as w,S as A,_ as y,l as S,E as k,m as N}from"./index.01d75b1f.js";const V=t("span",null,"NaiveUiAdmin@163.com",-1),q=t("span",null,"NaiveUiAdmin@qq.com",-1),U=t("span",null,"Ah jung",-1),j=t("span",null,"\uFFE51980",-1),R={style:{"margin-left":"80px"}},M=F({__name:"Step2",emits:["prevStep","nextStep"],setup(T,{emit:s}){const l=a(null),m=x(),_=a(!1),o=a({password:"086611"}),d={password:{required:!0,message:"\u8BF7\u8F93\u5165\u652F\u4ED8\u5BC6\u7801",trigger:"blur"}};function f(){s("prevStep")}function g(){_.value=!0,l.value.validate(p=>{p?m.error("\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8BF7\u586B\u5199\u5B8C\u6574\u4FE1\u606F"):setTimeout(()=>{s("nextStep")},1500)})}return(p,c)=>{const n=w,v=A,B=y,r=S,h=k,E=N;return C(),b(E,{"label-width":90,model:o.value,rules:d,"label-placement":"left",ref_key:"form2Ref",ref:l,style:{"max-width":"500px",margin:"40px auto 0 80px"}},{default:u(()=>[e(n,{label:"\u4ED8\u6B3E\u8D26\u6237",path:"myAccount"},{default:u(()=>[V]),_:1}),e(n,{label:"\u6536\u6B3E\u8D26\u6237",path:"account"},{default:u(()=>[q]),_:1}),e(n,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D",path:"name"},{default:u(()=>[U]),_:1}),e(n,{label:"\u8F6C\u8D26\u91D1\u989D",path:"money"},{default:u(()=>[j]),_:1}),e(v),e(n,{label:"\u652F\u4ED8\u5BC6\u7801",path:"password"},{default:u(()=>[e(B,{type:"password",value:o.value.password,"onUpdate:value":c[0]||(c[0]=D=>o.value.password=D)},null,8,["value"])]),_:1}),t("div",R,[e(h,null,{default:u(()=>[e(r,{type:"primary",loading:_.value,onClick:g},{default:u(()=>[i("\u63D0\u4EA4")]),_:1},8,["loading"]),e(r,{onClick:f},{default:u(()=>[i("\u4E0A\u4E00\u6B65")]),_:1})]),_:1})])]),_:1},8,["model"])}}});export{M as _};
