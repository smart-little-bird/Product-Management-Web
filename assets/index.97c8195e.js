import{d3 as t}from"./index.d04f1737.js";const o="contract";function p(r){return t.request({url:`/${o}`,method:"post",params:r})}function i(r,e){return t.request({url:`/${o}/${r}`,method:"post",params:e})}function l(r){return t.request({url:`/${o}`,method:"get",params:r}).then(e=>{var n,u,s,c;return{list:e==null?void 0:e.contractListDtos,page:(n=e==null?void 0:e.page)==null?void 0:n.pageIndex,pageSize:(u=e==null?void 0:e.page)==null?void 0:u.pageSize,total:(s=e==null?void 0:e.page)==null?void 0:s.total,pageCount:(c=e==null?void 0:e.contractListDtos)==null?void 0:c.length}})}function h(r){return t.request({url:`/${o}/${r}`,method:"get"})}function $(r){return t.request({url:`/${o}/${r}`,method:"patch"})}export{h as a,p as c,$ as d,l as g,i as u};
