var h=Object.defineProperty;var _=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var y=(i,t,e)=>t in i?h(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,m=(i,t)=>{for(var e in t||(t={}))w.call(t,e)&&y(i,e,t[e]);if(_)for(var e of _(t))E.call(t,e)&&y(i,e,t[e]);return i};var f=(i,t,e)=>new Promise((s,l)=>{var r=o=>{try{a(e.next(o))}catch(n){l(n)}},d=o=>{try{a(e.throw(o))}catch(n){l(n)}},a=o=>o.done?s(o.value):Promise.resolve(o.value).then(r,d);a((e=e.apply(i,t)).next())});import{B as g}from"./TableAction.vue_vue_type_script_lang.09757c4d.js";import{g as b}from"./list.ad80e0f6.js";import{c8 as v,e$ as T,d as x,r as B,b as D,o as R,ca as M,w as p,i as k,j as N,h as C,l as H,q as A}from"./index.d7359774.js";import"./vuedraggable.umd.4b8d9550.js";import"./useDesignSetting.285b446c.js";import"./propTypes.12df6813.js";import"./FormOutlined.20a196d3.js";import"./ReloadOutlined.a9378331.js";import"./componentSetting.152e7e8a.js";import"./index.9e8645af.js";import"./DownOutlined.09cc0b3e.js";const P=[{title:"id",key:"id",width:100},{title:"\u7F16\u7801",key:"no",width:100},{title:"\u540D\u79F0",key:"name",editComponent:"NInput",editRule:!0,edit:!0,width:200},{title:"\u5934\u50CF",key:"avatar",width:100,render(i){return v(T,{size:48,src:i.avatar})}},{title:"\u5730\u5740",key:"address",editComponent:"NSelect",editComponentProps:{options:[{label:"\u5E7F\u4E1C\u7701",value:1},{label:"\u6D59\u6C5F\u7701",value:2}]},edit:!0,width:200,ellipsis:!1},{title:"\u5F00\u59CB\u65E5\u671F",key:"beginTime",edit:!0,width:160,editComponent:"NDatePicker",editComponentProps:{type:"datetime",format:"yyyy-MM-dd HH:mm:ss",valueFormat:"yyyy-MM-dd HH:mm:ss"},ellipsis:!1},{title:"\u7ED3\u675F\u65E5\u671F",key:"endTime",width:160},{title:"\u521B\u5EFA\u65F6\u95F4",key:"date",width:160},{title:"\u505C\u7559\u65F6\u95F4",key:"time",width:80}],O=x({__name:"editCell",setup(i){const t=B(),e=D({pageSize:5,name:"xiaoMa"});function s({column:o,value:n,record:u}){o.key==="id"&&(u.editValueRefs.name4.value=`${n}`),console.log(o,n,u)}const l=o=>f(this,null,function*(){return yield b(m(m({},e),o))});function r(o){console.log(o)}function d(){console.log(t.value),t.value.reload()}function a({record:o,index:n,key:u,value:c}){console.log(c)}return(o,n)=>{const u=H,c=A;return R(),M(c,{bordered:!1,class:"proCard"},{default:p(()=>[k(C(g),{title:"\u8868\u683C\u5217\u8868",titleTooltip:"\u8FD9\u662F\u4E00\u4E2A\u63D0\u793A",columns:C(P),request:l,"row-key":F=>F.id,ref_key:"actionRef",ref:t,onEditEnd:a,onEditChange:s,"onUpdate:checkedRowKeys":r,"scroll-x":1360},{toolbar:p(()=>[k(u,{type:"primary",onClick:d},{default:p(()=>[N("\u5237\u65B0\u6570\u636E")]),_:1})]),_:1},8,["columns","row-key"])]),_:1})}}});export{O as default};
