var a=(i,o,t)=>new Promise((r,m)=>{var u=n=>{try{s(t.next(n))}catch(l){m(l)}},e=n=>{try{s(t.throw(n))}catch(l){m(l)}},s=n=>n.done?r(n.value):Promise.resolve(n.value).then(u,e);s((t=t.apply(i,o)).next())});import{r as f,bR as d,h as c,cM as h,af as w,cN as y,ar as F}from"./index.2eb66744.js";function b(i){const o=f(null),t=f(!1);function r(){return a(this,null,function*(){const e=c(o);return e||console.error("The form instance has not been obtained, please make sure that the form has been rendered when performing the form operation!"),yield F(),e})}function m(e){d(()=>{o.value=null,t.value=null}),!(c(t)&&h()&&e===c(o))&&(o.value=e,t.value=!0,w(()=>i,()=>{i&&e.setProps(y(i))},{immediate:!0,deep:!0}))}return[m,{setProps:e=>a(this,null,function*(){yield(yield r()).setProps(e)}),resetFields:()=>a(this,null,function*(){r().then(e=>a(this,null,function*(){yield e.resetFields()}))}),clearValidate:e=>a(this,null,function*(){yield(yield r()).clearValidate(e)}),getFieldsValue:()=>{var e;return(e=c(o))==null?void 0:e.getFieldsValue()},setFieldsValue:e=>a(this,null,function*(){yield(yield r()).setFieldsValue(e)}),submit:()=>a(this,null,function*(){return(yield r()).submit()}),validate:e=>a(this,null,function*(){return(yield r()).validate(e)}),setLoading:e=>{t.value=e},setSchema:e=>a(this,null,function*(){(yield r()).setSchema(e)})}]}export{b as u};