var re=Object.defineProperty,ie=Object.defineProperties;var ce=Object.getOwnPropertyDescriptors;var K=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable;var H=(e,l,o)=>l in e?re(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,B=(e,l)=>{for(var o in l||(l={}))de.call(l,o)&&H(e,o,l[o]);if(K)for(var o of K(l))fe.call(l,o)&&H(e,o,l[o]);return e},X=(e,l)=>ie(e,ce(l));var C=(e,l,o)=>new Promise((w,f)=>{var g=n=>{try{r(o.next(n))}catch(m){f(m)}},c=n=>{try{r(o.throw(n))}catch(m){f(m)}},r=n=>n.done?w(n.value):Promise.resolve(n.value).then(g,c);r((o=o.apply(e,l)).next())});import{d as ee,o as d,c as A,a as pe,h as u,aD as W,ap as q,cG as _e,aC as te,cH as Y,aB as me,r as S,b as ge,z as N,au as be,aI as ye,cI as ve,n as Be,J as G,B as y,w as a,i as O,p as L,F as Q,b8 as Z,O as $,j,t as D,K as I,W as ke,X as Oe,N as we,G as Pe,cJ as Fe,l as he,cK as Ce,m as Se,M as Ne,L as x,bW as Ve,Q as Me,ar as je,as as De,cL as Ee,cM as ze,k as Ue}from"./index.1d473b98.js";import{s as $e,p as T,Q as Ie}from"./propTypes.365761aa.js";import{D as Re}from"./DownOutlined.1ed8b71f.js";const Te={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Ae=pe("path",{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 0 0 140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z",fill:"currentColor"},null,-1),Ge=[Ae],Le=ee({name:"UpOutlined",render:function(l,o){return d(),A("svg",Te,Ge)}});function Qe(e){return e==="NInput"?"\u8BF7\u8F93\u5165":["NPicker","NSelect","NCheckbox","NRadio","NSwitch","NDatePicker","NTimePicker"].includes(e)?"\u8BF7\u9009\u62E9":""}function We({emit:e,getProps:l,formModel:o,getSchema:w,formElRef:f,defaultFormModel:g,loadingSub:c,handleFormValues:r}){function n(){return C(this,null,function*(){var s;return(s=u(f))==null?void 0:s.validate()})}function m(s){return C(this,null,function*(){s&&s.preventDefault(),c.value=!0;const{submitFunc:b}=u(l);if(b&&W(b))return yield b(),c.value=!1,!1;if(!u(f))return!1;try{yield n();const p=V();return c.value=!1,e("submit",p),p}catch(p){return e("submit",!1),c.value=!1,console.error(p),!1}})}function P(){return C(this,null,function*(){var s;yield(s=u(f))==null?void 0:s.restoreValidation()})}function E(){return C(this,null,function*(){const{resetFunc:s,submitOnReset:b}=u(l);if(s&&W(s)&&(yield s()),!u(f))return;Object.keys(o).forEach(M=>{o[M]=u(g)[M]||null}),yield P();const p=r(q(u(o)));e("reset",p),b&&(yield m())})}function V(){return u(f)?r(q(u(o))):{}}function z(s){return C(this,null,function*(){const b=u(w).map(v=>v.field).filter(Boolean);Object.keys(s).forEach(v=>{const p=s[v];b.includes(v)&&(o[v]=p)})})}function k(s){c.value=s}return{handleSubmit:m,validate:n,resetFields:E,getFieldsValue:V,clearValidate:P,setFieldsValue:z,setLoading:k}}function Je({defaultFormModel:e,getSchema:l,formModel:o}){function w(g){if(!_e(g))return{};const c={};for(const r of Object.entries(g)){let[,n]=r;const[m]=r;!m||te(n)&&n.length===0||W(n)||Y(n)||(me(n)&&(n=n.trim()),$e(c,m,n))}return c}function f(){const g=u(l),c={};g.forEach(r=>{const{defaultValue:n}=r;Y(n)||(c[r.field]=n,o[r.field]=n)}),e.value=c}return{handleFormValues:w,initDefault:f}}const Ke={labelWidth:{type:[Number,String],default:80},schemas:{type:[Array],default:()=>[]},layout:{type:String,default:"inline"},inline:{type:Boolean,default:!1},size:{type:String,default:"medium"},labelPlacement:{type:String,default:"left"},isFull:{type:Boolean,default:!0},showActionButtonGroup:T.bool.def(!0),showResetButton:T.bool.def(!0),resetButtonOptions:Object,showSubmitButton:T.bool.def(!0),submitButtonOptions:Object,showAdvancedButton:T.bool.def(!0),submitButtonText:{type:String,default:"\u67E5\u8BE2"},resetButtonText:{type:String,default:"\u91CD\u7F6E"},gridProps:Object,giProps:Object,baseGridStyle:{type:Object},collapsed:{type:Boolean,default:!1},collapsedRows:{type:Number,default:1}},He=ee({name:"BasicForm",components:{DownOutlined:Re,UpOutlined:Le,QuestionCircleOutlined:Ie},props:B({},Ke),emits:["reset","submit","register"],setup(e,{emit:l,attrs:o}){const w=S({}),f=ge({}),g=S({}),c=S(null),r=S(null),n=S(!0),m=S(!1),P=S(!1),E=N(()=>Object.assign({size:e.size,type:"primary"},e.submitButtonOptions)),V=N(()=>Object.assign({size:e.size,type:"default"},e.resetButtonOptions));function z(i){var h;const F=(h=i.componentProps)!=null?h:{},U=i.component;return B({clearable:!0,placeholder:Qe(u(U))},F)}const k=N(()=>{const i=B(B({},e),u(g)),F={rules:{}};return(i.schemas||[]).forEach(h=>{h.rules&&te(h.rules)&&(F.rules[h.field]=h.rules)}),B(B({},i),u(F))}),s=N(()=>{const{layout:i}=u(k);return i==="inline"}),b=N(()=>{const{gridProps:i}=u(k);return X(B({},i),{collapsed:s.value?n.value:!1,responsive:"screen"})}),v=N(()=>B(B(B({},o),e),u(k))),p=N(()=>{const i=u(c)||u(k).schemas;for(const F of i){const{defaultValue:U}=F;U&&(F.defaultValue=U)}return i}),{handleFormValues:M,initDefault:R}=Je({defaultFormModel:w,getSchema:p,formModel:f}),{handleSubmit:t,validate:_,resetFields:J,getFieldsValue:ne,clearValidate:oe,setFieldsValue:le}=We({emit:l,getProps:k,formModel:f,getSchema:p,formElRef:r,defaultFormModel:w,loadingSub:m,handleFormValues:M});function se(){n.value=!n.value}function ue(i){return C(this,null,function*(){g.value=ve(u(g)||{},i)})}const ae={getFieldsValue:ne,setFieldsValue:le,resetFields:J,validate:_,clearValidate:oe,setProps:ue,submit:t};return be(()=>p.value,i=>{u(P)||i!=null&&i.length&&(R(),P.value=!0)}),ye(()=>{R(),l("register",ae)}),{formElRef:r,formModel:f,getGrid:b,getProps:k,getBindValue:v,getSchema:p,getSubmitBtnOptions:E,getResetBtnOptions:V,handleSubmit:t,resetFields:J,loadingSub:m,isInline:s,getComponentProps:z,unfoldToggle:se}}});function Xe(e,l,o,w,f,g){const c=G("QuestionCircleOutlined"),r=we,n=Me,m=je,P=Pe,E=De,V=Ee,z=ze,k=Ue,s=Fe,b=he,v=G("DownOutlined"),p=G("UpOutlined"),M=Ce,R=Se;return d(),y(R,$(e.getBindValue,{model:e.formModel,ref:"formElRef"}),{default:a(()=>[O(M,ke(Oe(e.getGrid)),{default:a(()=>[(d(!0),A(Q,null,L(e.getSchema,t=>(d(),y(s,$(t.giProps,{key:t.field}),{default:a(()=>[O(k,{label:t.label,path:t.field},Ne({default:a(()=>[t.slot?x(e.$slots,t.slot,{key:0,model:e.formModel,field:t.field,value:e.formModel[t.field]},void 0,!0):t.component==="NCheckbox"?(d(),y(E,{key:1,value:e.formModel[t.field],"onUpdate:value":_=>e.formModel[t.field]=_},{default:a(()=>[O(P,null,{default:a(()=>[(d(!0),A(Q,null,L(t.componentProps.options,_=>(d(),y(m,{key:_.value,value:_.value,label:_.label},null,8,["value","label"]))),128))]),_:2},1024)]),_:2},1032,["value","onUpdate:value"])):t.component==="NRadioGroup"?(d(),y(z,{key:2,value:e.formModel[t.field],"onUpdate:value":_=>e.formModel[t.field]=_},{default:a(()=>[O(P,null,{default:a(()=>[(d(!0),A(Q,null,L(t.componentProps.options,_=>(d(),y(V,{key:_.value,value:_.value},{default:a(()=>[j(D(_.label),1)]),_:2},1032,["value"]))),128))]),_:2},1024)]),_:2},1032,["value","onUpdate:value"])):(d(),y(Ve(t.component),$({key:3},e.getComponentProps(t),{value:e.formModel[t.field],"onUpdate:value":_=>e.formModel[t.field]=_,class:{isFull:t.isFull!=!1&&e.getProps.isFull}}),null,16,["value","onUpdate:value","class"])),t.suffix?x(e.$slots,t.suffix,{key:4,model:e.formModel,field:t.field,value:e.formModel[t.field]},void 0,!0):I("",!0)]),_:2},[t.labelMessage?{name:"label",fn:a(()=>[j(D(t.label)+" ",1),O(n,{trigger:"hover",style:Z(t.labelMessageStyle)},{trigger:a(()=>[O(r,{size:"18",class:"text-gray-400 cursor-pointer"},{default:a(()=>[O(c)]),_:1})]),default:a(()=>[j(" "+D(t.labelMessage),1)]),_:2},1032,["style"])]),key:"0"}:void 0]),1032,["label","path"])]),_:2},1040))),128)),e.getProps.showActionButtonGroup?(d(),y(s,{key:0,span:e.isInline?"":24,suffix:!!e.isInline},{default:a(({overflow:t})=>[O(P,{align:"center",justify:e.isInline?"end":"start",style:Z({"margin-left":`${e.isInline?12:e.getProps.labelWidth}px`})},{default:a(()=>[e.getProps.showSubmitButton?(d(),y(b,$({key:0},e.getSubmitBtnOptions,{onClick:e.handleSubmit,loading:e.loadingSub}),{default:a(()=>[j(D(e.getProps.submitButtonText),1)]),_:1},16,["onClick","loading"])):I("",!0),e.getProps.showResetButton?(d(),y(b,$({key:1},e.getResetBtnOptions,{onClick:e.resetFields}),{default:a(()=>[j(D(e.getProps.resetButtonText),1)]),_:1},16,["onClick"])):I("",!0),e.isInline&&e.getProps.showAdvancedButton?(d(),y(b,{key:2,type:"primary",text:"","icon-placement":"right",onClick:e.unfoldToggle},{icon:a(()=>[t?(d(),y(r,{key:0,size:"14",class:"unfold-icon"},{default:a(()=>[O(v)]),_:1})):(d(),y(r,{key:1,size:"14",class:"unfold-icon"},{default:a(()=>[O(p)]),_:1}))]),default:a(()=>[j(" "+D(t?"\u5C55\u5F00":"\u6536\u8D77"),1)]),_:2},1032,["onClick"])):I("",!0)]),_:2},1032,["justify","style"])]),_:1},8,["span","suffix"])):I("",!0)]),_:3},16)]),_:3},16,["model"])}const et=Be(He,[["render",Xe],["__scopeId","data-v-fd343dc0"]]);export{et as B};