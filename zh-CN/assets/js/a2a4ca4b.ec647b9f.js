"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["311832"],{671900:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>r,default:()=>u,assets:()=>l,toc:()=>d,frontMatter:()=>a});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/distance-functions/cosine-distance","title":"cosine_distance","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/distance-functions/cosine-distance.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/distance-functions","slug":"/sql-manual/sql-functions/scalar-functions/distance-functions/cosine-distance","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/distance-functions/cosine-distance","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"cosine_distance","language":"zh-CN"},"sidebar":"docs","previous":{"title":"XXHASH_64","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/xxhash-64"},"next":{"title":"inner_product","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/distance-functions/inner-product"}}'),c=s("785893"),i=s("250065");let a={title:"cosine_distance",language:"zh-CN"},r=void 0,l={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,c.jsx)(e.p,{children:"\u8BA1\u7B97\u4E24\u4E2A\u5411\u91CF\uFF08\u5411\u91CF\u503C\u4E3A\u5750\u6807\uFF09\u4E4B\u95F4\u7684\u4F59\u5F26\u8DDD\u79BB"}),"\n",(0,c.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"COSINE_DISTANCE(<array1>, <array2>)\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"\u53C2\u6570"}),(0,c.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,c.jsxs)(e.tbody,{children:[(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"<array1>"})}),(0,c.jsx)(e.td,{children:"\u7B2C\u4E00\u4E2A\u5411\u91CF\uFF08\u5411\u91CF\u503C\u4E3A\u5750\u6807\uFF09\uFF0C\u8F93\u5165\u6570\u7EC4\u7684\u5B50\u7C7B\u578B\u652F\u6301\uFF1ATINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT\u3001FLOAT\u3001DOUBLE\uFF0C\u5143\u7D20\u6570\u91CF\u9700\u4E0Earray2\u4FDD\u6301\u4E00\u81F4"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"<array2>"})}),(0,c.jsx)(e.td,{children:"\u7B2C\u4E8C\u4E2A\u5411\u91CF\uFF08\u5411\u91CF\u503C\u4E3A\u5750\u6807\uFF09\uFF0C\u8F93\u5165\u6570\u7EC4\u7684\u5B50\u7C7B\u578B\u652F\u6301\uFF1ATINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT\u3001FLOAT\u3001DOUBLE\uFF0C\u5143\u7D20\u6570\u91CF\u9700\u4E0Earray1\u4FDD\u6301\u4E00\u81F4"})]})]})]}),"\n",(0,c.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,c.jsx)(e.p,{children:"\u8FD4\u56DE\u4E24\u4E2A\u5411\u91CF\uFF08\u5411\u91CF\u503C\u4E3A\u5750\u6807\uFF09\u4E4B\u95F4\u7684\u4F59\u5F26\u8DDD\u79BB\u3002\u5982\u679C\u8F93\u5165array\u4E3ANULL\uFF0C\u6216\u8005array\u4E2D\u4EFB\u4F55\u5143\u7D20\u4E3ANULL\uFF0C\u5219\u8FD4\u56DENULL\u3002"}),"\n",(0,c.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"SELECT COSINE_DISTANCE([1, 2], [2, 3]),COSINE_DISTANCE([3, 6], [4, 7]);\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-text",children:"+---------------------------------+---------------------------------+\n| cosine_distance([1, 2], [2, 3]) | cosine_distance([3, 6], [4, 7]) |\n+---------------------------------+---------------------------------+\n|            0.007722123286332261 |           0.0015396467945875125 |\n+---------------------------------+---------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return r},a:function(){return a}});var t=s(667294);let c={},i=t.createContext(c);function a(n){let e=t.useContext(i);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:a(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);