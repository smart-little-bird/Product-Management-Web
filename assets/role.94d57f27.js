var W=Object.defineProperty;var b=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var E=(n,t,u)=>t in n?W(n,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):n[t]=u,g=(n,t)=>{for(var u in t||(t={}))$.call(t,u)&&E(n,u,t[u]);if(b)for(var u of b(t))J.call(t,u)&&E(n,u,t[u]);return n};var D=(n,t,u)=>new Promise((h,c)=>{var f=l=>{try{d(u.next(l))}catch(s){c(s)}},r=l=>{try{d(u.throw(l))}catch(s){c(s)}},d=l=>l.done?h(l.value):Promise.resolve(l.value).then(f,r);d((u=u.apply(n,t)).next())});import{B as Q}from"./TableAction.vue_vue_type_script_lang.9235bd2d.js";import{T as B}from"./TableAction.a98d6964.js";import{d3 as X,c1 as T,d4 as Y,d as Z,f as ee,u as ue,r as i,b as C,cU as te,fT as ne,o as ae,c as oe,a as w,i as a,w as o,j as _,h as m,t as x,fW as le,ca as se,N as ie,l as ce,fV as re,c6 as de,c7 as pe}from"./index.f60d6bba.js";import{P as fe}from"./PlusOutlined.d12fc65b.js";import"./vuedraggable.umd.9f4126b2.js";import"./useDesignSetting.56cc026d.js";import"./SettingOutlined.1fba4437.js";import"./propTypes.4706eaf1.js";import"./FormOutlined.d635f030.js";import"./ReloadOutlined.3f65a739.js";import"./componentSetting.152e7e8a.js";import"./index.c622879e.js";import"./DownOutlined.13db5421.js";function _e(){return X.request({url:"/role/list",method:"GET"})}const me=[{title:"id",key:"id"},{title:"\u89D2\u8272\u540D\u79F0",key:"name"},{title:"\u8BF4\u660E",key:"explain"},{title:"\u662F\u5426\u9ED8\u8BA4\u89D2\u8272",key:"isDefault",render(n){return T(Y,{type:n.isDefault?"success":"error"},{default:()=>n.isDefault?"\u662F":"\u5426"})}},{title:"\u521B\u5EFA\u65F6\u95F4",key:"create_date"}],he={class:"n-layout-page-header"},ve={class:"py-3 menu-list"},Me=Z({__name:"role",setup(n){const t=ee(),u=ue(),h=i(),c=i(!1),f=i(!1),r=i(!1),d=i(""),l=i([]),s=i([]),p=i(["console","step-form"]),A=C({pageSize:5,name:"xiaoMa"}),K=C({width:250,title:"\u64CD\u4F5C",key:"action",fixed:"right",render(e){return T(B,{style:"button",actions:[{label:"\u83DC\u5355\u6743\u9650",onClick:V.bind(null,e),ifShow:()=>!0,auth:["basic_list"]},{label:"\u7F16\u8F91",onClick:U.bind(null,e),ifShow:()=>!0,auth:["basic_list"]},{label:"\u5220\u9664",onClick:L.bind(null,e),ifShow:()=>!0,auth:["basic_list"]}]})}}),M=e=>D(this,null,function*(){return g(g({},m(A)),e),yield _e()});function R(e){console.log(e)}function N(){h.value.reload()}function S(e){e.preventDefault(),f.value=!0,setTimeout(()=>{c.value=!1,u.success("\u63D0\u4EA4\u6210\u529F"),N(),f.value=!1},200)}function U(e){console.log("\u70B9\u51FB\u4E86\u7F16\u8F91",e),t.push({name:"basic-info",params:{id:e.id}})}function L(e){console.log("\u70B9\u51FB\u4E86\u5220\u9664",e),u.info("\u70B9\u51FB\u4E86\u5220\u9664")}function V(e){d.value=`\u5206\u914D ${e.name} \u7684\u83DC\u5355\u6743\u9650`,p.value=e.menu_keys,c.value=!0}function q(e){p.value=[p.value,...e]}function H(e){s.value=e}function P(){s.value.length?s.value=[]:s.value=l.value.map(e=>e.key)}function j(){r.value?(p.value=[],r.value=!1):(p.value=le(l.value),r.value=!0)}return te(()=>D(this,null,function*(){const e=yield ne();s.value=e.list.map(v=>v.key),l.value=e.list})),(e,v)=>{const F=se,z=ie,y=ce,G=re,I=de,O=pe;return ae(),oe("div",null,[w("div",he,[a(F,{bordered:!1,title:"\u89D2\u8272\u6743\u9650\u7BA1\u7406"},{default:o(()=>[_(" \u9875\u9762\u6570\u636E\u4E3A Mock \u793A\u4F8B\u6570\u636E\uFF0C\u975E\u771F\u5B9E\u6570\u636E\u3002 ")]),_:1})]),a(F,{bordered:!1,class:"mt-4 proCard"},{default:o(()=>[a(m(Q),{columns:m(me),request:M,"row-key":k=>k.id,ref_key:"actionRef",ref:h,actionColumn:K,"onUpdate:checkedRowKeys":R},{tableTitle:o(()=>[a(y,{type:"primary"},{icon:o(()=>[a(z,null,{default:o(()=>[a(m(fe))]),_:1})]),default:o(()=>[_(" \u6DFB\u52A0\u89D2\u8272 ")]),_:1})]),action:o(()=>[a(m(B))]),_:1},8,["columns","row-key","actionColumn"])]),_:1}),a(O,{show:c.value,"onUpdate:show":v[0]||(v[0]=k=>c.value=k),"show-icon":!1,preset:"dialog",title:d.value},{action:o(()=>[a(I,null,{default:o(()=>[a(y,{type:"info",ghost:"","icon-placement":"left",onClick:P},{default:o(()=>[_(" \u5168\u90E8"+x(s.value.length?"\u6536\u8D77":"\u5C55\u5F00"),1)]),_:1}),a(y,{type:"info",ghost:"","icon-placement":"left",onClick:j},{default:o(()=>[_(" \u5168\u90E8"+x(r.value?"\u53D6\u6D88":"\u9009\u62E9"),1)]),_:1}),a(y,{type:"primary",loading:f.value,onClick:S},{default:o(()=>[_("\u63D0\u4EA4")]),_:1},8,["loading"])]),_:1})]),default:o(()=>[w("div",ve,[a(G,{"block-line":"",cascade:"",checkable:"","virtual-scroll":!0,data:l.value,expandedKeys:s.value,"checked-keys":p.value,style:{"max-height":"950px",overflow:"hidden"},"onUpdate:checkedKeys":q,"onUpdate:expandedKeys":H},null,8,["data","expandedKeys","checked-keys"])])]),_:1},8,["show","title"])])}}});export{Me as default};