"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["809642"],{687762:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>l,default:()=>u,assets:()=>o,toc:()=>d,frontMatter:()=>c});var i=JSON.parse('{"id":"sql-manual/sql-functions/distance-functions/inner-product","title":"inner_product","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/distance-functions/inner-product.md","sourceDirName":"sql-manual/sql-functions/distance-functions","slug":"/sql-manual/sql-functions/distance-functions/inner-product","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/distance-functions/inner-product","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"inner_product","language":"zh-CN"},"sidebar":"docs","previous":{"title":"cosine_distance","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/distance-functions/cosine-distance"},"next":{"title":"l1_distance","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/distance-functions/l1-distance"}}'),r=t("785893"),s=t("250065");let c={title:"inner_product",language:"zh-CN"},l=void 0,o={},d=[{value:"inner_product",id:"inner_product",level:2},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:3},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"keywords",id:"keywords",level:3}];function a(n){let e={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"inner_product",children:"inner_product"}),"\n",(0,r.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"DOUBLE inner_product(ARRAY<T> array1, ARRAY<T> array2)\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u8BA1\u7B97\u4E24\u4E2A\u5927\u5C0F\u76F8\u540C\u7684\u5411\u91CF\u7684\u6807\u91CF\u79EF\n\u5982\u679C\u8F93\u5165array\u4E3ANULL\uFF0C\u6216\u8005array\u4E2D\u4EFB\u4F55\u5143\u7D20\u4E3ANULL\uFF0C\u5219\u8FD4\u56DENULL"}),"\n",(0,r.jsx)(e.h3,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u8F93\u5165\u6570\u7EC4\u7684\u5B50\u7C7B\u578B\u652F\u6301\uFF1ATINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT\u3001FLOAT\u3001DOUBLE"}),"\n",(0,r.jsx)(e.li,{children:"\u8F93\u5165\u6570\u7EC4array1\u548Carray2\uFF0C\u5143\u7D20\u6570\u91CF\u9700\u4FDD\u6301\u4E00\u81F4"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"sql> SELECT inner_product([1, 2], [2, 3]);\n+-----------------------------------------+\n| inner_product(ARRAY(1, 2), ARRAY(2, 3)) |\n+-----------------------------------------+\n|                                       8 |\n+-----------------------------------------+\n"})}),"\n",(0,r.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"INNER_PRODUCT,DISTANCE,ARRAY\n"})})]})}function u(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return l},a:function(){return c}});var i=t(667294);let r={},s=i.createContext(r);function c(n){let e=i.useContext(s);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);