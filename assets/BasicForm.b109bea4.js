var re=Object.defineProperty,ie=Object.defineProperties;var ce=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable;var Z=(e,l,o)=>l in e?re(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,B=(e,l)=>{for(var o in l||(l={}))de.call(l,o)&&Z(e,o,l[o]);if(Y)for(var o of Y(l))fe.call(l,o)&&Z(e,o,l[o]);return e},q=(e,l)=>ie(e,ce(l));var h=(e,l,o)=>new Promise((w,f)=>{var g=n=>{try{r(o.next(n))}catch(m){f(m)}},c=n=>{try{r(o.throw(n))}catch(m){f(m)}},r=n=>n.done?w(n.value):Promise.resolve(n.value).then(g,c);r((o=o.apply(e,l)).next())});import{d as ee,o as d,c as I,a as pe,h as u,cO as W,c2 as H,fC as _e,cN as te,fD as J,cM as me,r as S,b as ge,ae as N,cE as ye,cU as be,fE as ve,n as Be,cx as G,c3 as b,w as a,i as O,c$ as ke,d0 as Oe,cZ as L,cY as Q,cS as R,cX as we,cW as K,j,t as E,ei as Pe,cR as $,dy as x,N as Fe,cA as Ce,cz as he,c6 as Se,cC as Ne,fF as Ve,fG as Me,k as je,f0 as Ee,l as De,e$ as Ue,m as ze}from"./index.f60d6bba.js";import{s as Re,p as A,Q as $e}from"./propTypes.4706eaf1.js";import{D as Te}from"./DownOutlined.13db5421.js";const Ae={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Ie=pe("path",{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 0 0 140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z",fill:"currentColor"},null,-1),Ge=[Ie],Le=ee({name:"UpOutlined",render:function(l,o){return d(),I("svg",Ae,Ge)}});function Qe(e){return e==="NInput"?"\u8BF7\u8F93\u5165":["NPicker","NSelect","NCheckbox","NRadio","NSwitch","NDatePicker","NTimePicker"].includes(e)?"\u8BF7\u9009\u62E9":""}function We({emit:e,getProps:l,formModel:o,getSchema:w,formElRef:f,defaultFormModel:g,loadingSub:c,handleFormValues:r}){function n(){return h(this,null,function*(){var s;return(s=u(f))==null?void 0:s.validate()})}function m(s){return h(this,null,function*(){s&&s.preventDefault(),c.value=!0;const{submitFunc:y}=u(l);if(y&&W(y))return yield y(),c.value=!1,!1;if(!u(f))return!1;try{yield n();const p=V();return c.value=!1,e("submit",p),p}catch(p){return e("submit",!1),c.value=!1,console.error(p),!1}})}function P(){return h(this,null,function*(){var s;yield(s=u(f))==null?void 0:s.restoreValidation()})}function D(){return h(this,null,function*(){const{resetFunc:s,submitOnReset:y}=u(l);if(s&&W(s)&&(yield s()),!u(f))return;Object.keys(o).forEach(M=>{o[M]=u(g)[M]||null}),yield P();const p=r(H(u(o)));e("reset",p),y&&(yield m())})}function V(){return u(f)?r(H(u(o))):{}}function U(s){return h(this,null,function*(){const y=u(w).map(v=>v.field).filter(Boolean);Object.keys(s).forEach(v=>{const p=s[v];y.includes(v)&&(o[v]=p)})})}function k(s){c.value=s}return{handleSubmit:m,validate:n,resetFields:D,getFieldsValue:V,clearValidate:P,setFieldsValue:U,setLoading:k}}function Xe({defaultFormModel:e,getSchema:l,formModel:o}){function w(g){if(!_e(g))return{};const c={};for(const r of Object.entries(g)){let[,n]=r;const[m]=r;!m||te(n)&&n.length===0||W(n)||J(n)||(me(n)&&(n=n.trim()),Re(c,m,n))}return c}function f(){const g=u(l),c={};g.forEach(r=>{const{defaultValue:n}=r;J(n)||(c[r.field]=n,o[r.field]=n)}),e.value=c}return{handleFormValues:w,initDefault:f}}const Ye={labelWidth:{type:[Number,String],default:80},schemas:{type:[Array],default:()=>[]},layout:{type:String,default:"inline"},inline:{type:Boolean,default:!1},size:{type:String,default:"medium"},labelPlacement:{type:String,default:"left"},isFull:{type:Boolean,default:!0},showActionButtonGroup:A.bool.def(!0),showResetButton:A.bool.def(!0),resetButtonOptions:Object,showSubmitButton:A.bool.def(!0),submitButtonOptions:Object,showAdvancedButton:A.bool.def(!0),submitButtonText:{type:String,default:"\u67E5\u8BE2"},resetButtonText:{type:String,default:"\u91CD\u7F6E"},gridProps:Object,giProps:Object,baseGridStyle:{type:Object},collapsed:{type:Boolean,default:!1},collapsedRows:{type:Number,default:1}},Ze=ee({name:"BasicForm",components:{DownOutlined:Te,UpOutlined:Le,QuestionCircleOutlined:$e},props:B({},Ye),emits:["reset","submit","register"],setup(e,{emit:l,attrs:o}){const w=S({}),f=ge({}),g=S({}),c=S(null),r=S(null),n=S(!0),m=S(!1),P=S(!1),D=N(()=>Object.assign({size:e.size,type:"primary"},e.submitButtonOptions)),V=N(()=>Object.assign({size:e.size,type:"default"},e.resetButtonOptions));function U(i){var C;const F=(C=i.componentProps)!=null?C:{},z=i.component;return B({clearable:!0,placeholder:Qe(u(z))},F)}const k=N(()=>{const i=B(B({},e),u(g)),F={rules:{}};return(i.schemas||[]).forEach(C=>{C.rules&&te(C.rules)&&(F.rules[C.field]=C.rules)}),B(B({},i),u(F))}),s=N(()=>{const{layout:i}=u(k);return i==="inline"}),y=N(()=>{const{gridProps:i}=u(k);return q(B({},i),{collapsed:s.value?n.value:!1,responsive:"screen"})}),v=N(()=>B(B(B({},o),e),u(k))),p=N(()=>{const i=u(c)||u(k).schemas;for(const F of i){const{defaultValue:z}=F;z&&(F.defaultValue=z)}return i}),{handleFormValues:M,initDefault:T}=Xe({defaultFormModel:w,getSchema:p,formModel:f}),{handleSubmit:t,validate:_,resetFields:X,getFieldsValue:ne,clearValidate:oe,setFieldsValue:le}=We({emit:l,getProps:k,formModel:f,getSchema:p,formElRef:r,defaultFormModel:w,loadingSub:m,handleFormValues:M});function se(){n.value=!n.value}function ue(i){return h(this,null,function*(){g.value=ve(u(g)||{},i)})}const ae={getFieldsValue:ne,setFieldsValue:le,resetFields:X,validate:_,clearValidate:oe,setProps:ue,submit:t};return ye(()=>p.value,i=>{u(P)||i!=null&&i.length&&(T(),P.value=!0)}),be(()=>{T(),l("register",ae)}),{formElRef:r,formModel:f,getGrid:y,getProps:k,getBindValue:v,getSchema:p,getSubmitBtnOptions:D,getResetBtnOptions:V,handleSubmit:t,resetFields:X,loadingSub:m,isInline:s,getComponentProps:U,unfoldToggle:se}}});function qe(e,l,o,w,f,g){const c=G("QuestionCircleOutlined"),r=Fe,n=Ce,m=he,P=Se,D=Ne,V=Ve,U=Me,k=je,s=Ee,y=De,v=G("DownOutlined"),p=G("UpOutlined"),M=Ue,T=ze;return d(),b(T,R(e.getBindValue,{model:e.formModel,ref:"formElRef"}),{default:a(()=>[O(M,ke(Oe(e.getGrid)),{default:a(()=>[(d(!0),I(L,null,Q(e.getSchema,t=>(d(),b(s,R(t.giProps,{key:t.field}),{default:a(()=>[O(k,{label:t.label,path:t.field},we({default:a(()=>[t.slot?K(e.$slots,t.slot,{key:0,model:e.formModel,field:t.field,value:e.formModel[t.field]},void 0,!0):t.component==="NCheckbox"?(d(),b(D,{key:1,value:e.formModel[t.field],"onUpdate:value":_=>e.formModel[t.field]=_},{default:a(()=>[O(P,null,{default:a(()=>[(d(!0),I(L,null,Q(t.componentProps.options,_=>(d(),b(m,{key:_.value,value:_.value,label:_.label},null,8,["value","label"]))),128))]),_:2},1024)]),_:2},1032,["value","onUpdate:value"])):t.component==="NRadioGroup"?(d(),b(U,{key:2,value:e.formModel[t.field],"onUpdate:value":_=>e.formModel[t.field]=_},{default:a(()=>[O(P,null,{default:a(()=>[(d(!0),I(L,null,Q(t.componentProps.options,_=>(d(),b(V,{key:_.value,value:_.value},{default:a(()=>[j(E(_.label),1)]),_:2},1032,["value"]))),128))]),_:2},1024)]),_:2},1032,["value","onUpdate:value"])):(d(),b(Pe(t.component),R({key:3},e.getComponentProps(t),{value:e.formModel[t.field],"onUpdate:value":_=>e.formModel[t.field]=_,class:{isFull:t.isFull!=!1&&e.getProps.isFull}}),null,16,["value","onUpdate:value","class"])),t.suffix?K(e.$slots,t.suffix,{key:4,model:e.formModel,field:t.field,value:e.formModel[t.field]},void 0,!0):$("",!0)]),_:2},[t.labelMessage?{name:"label",fn:a(()=>[j(E(t.label)+" ",1),O(n,{trigger:"hover",style:x(t.labelMessageStyle)},{trigger:a(()=>[O(r,{size:"18",class:"text-gray-400 cursor-pointer"},{default:a(()=>[O(c)]),_:1})]),default:a(()=>[j(" "+E(t.labelMessage),1)]),_:2},1032,["style"])]),key:"0"}:void 0]),1032,["label","path"])]),_:2},1040))),128)),e.getProps.showActionButtonGroup?(d(),b(s,{key:0,span:e.isInline?"":24,suffix:!!e.isInline},{default:a(({overflow:t})=>[O(P,{align:"center",justify:e.isInline?"end":"start",style:x({"margin-left":`${e.isInline?12:e.getProps.labelWidth}px`})},{default:a(()=>[e.getProps.showSubmitButton?(d(),b(y,R({key:0},e.getSubmitBtnOptions,{onClick:e.handleSubmit,loading:e.loadingSub}),{default:a(()=>[j(E(e.getProps.submitButtonText),1)]),_:1},16,["onClick","loading"])):$("",!0),e.getProps.showResetButton?(d(),b(y,R({key:1},e.getResetBtnOptions,{onClick:e.resetFields}),{default:a(()=>[j(E(e.getProps.resetButtonText),1)]),_:1},16,["onClick"])):$("",!0),e.isInline&&e.getProps.showAdvancedButton?(d(),b(y,{key:2,type:"primary",text:"","icon-placement":"right",onClick:e.unfoldToggle},{icon:a(()=>[t?(d(),b(r,{key:0,size:"14",class:"unfold-icon"},{default:a(()=>[O(v)]),_:1})):(d(),b(r,{key:1,size:"14",class:"unfold-icon"},{default:a(()=>[O(p)]),_:1}))]),default:a(()=>[j(" "+E(t?"\u5C55\u5F00":"\u6536\u8D77"),1)]),_:2},1032,["onClick"])):$("",!0)]),_:2},1032,["justify","style"])]),_:1},8,["span","suffix"])):$("",!0)]),_:3},16)]),_:3},16,["model"])}const et=Be(Ze,[["render",qe],["__scopeId","data-v-fd343dc0"]]);export{et as B};
