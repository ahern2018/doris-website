"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["974779"],{47164:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>a,default:()=>u,assets:()=>r,toc:()=>d,frontMatter:()=>c});var t=JSON.parse('{"id":"sql-manual/sql-functions/distance-functions/l1-distance","title":"l1_distance","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/distance-functions/l1-distance.md","sourceDirName":"sql-manual/sql-functions/distance-functions","slug":"/sql-manual/sql-functions/distance-functions/l1-distance","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/distance-functions/l1-distance","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"l1_distance","language":"zh-CN"},"sidebar":"docs","previous":{"title":"inner_product","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/distance-functions/inner-product"},"next":{"title":"l2_distance","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/distance-functions/l2-distance"}}'),i=s("785893"),l=s("250065");let c={title:"l1_distance",language:"zh-CN"},a=void 0,r={},d=[{value:"l1_distance",id:"l1_distance",level:2},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:3},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"keywords",id:"keywords",level:3}];function o(n){let e={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"l1_distance",children:"l1_distance"}),"\n",(0,i.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"DOUBLE l1_distance(ARRAY<T> array1, ARRAY<T> array2)\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u8BA1\u7B97L1\u7A7A\u95F4\u4E2D\u4E24\u70B9\uFF08\u5411\u91CF\u503C\u4E3A\u5750\u6807\uFF09\u4E4B\u95F4\u7684\u8DDD\u79BB\n\u5982\u679C\u8F93\u5165array\u4E3ANULL\uFF0C\u6216\u8005array\u4E2D\u4EFB\u4F55\u5143\u7D20\u4E3ANULL\uFF0C\u5219\u8FD4\u56DENULL"}),"\n",(0,i.jsx)(e.h3,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u8F93\u5165\u6570\u7EC4\u7684\u5B50\u7C7B\u578B\u652F\u6301\uFF1ATINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT\u3001FLOAT\u3001DOUBLE"}),"\n",(0,i.jsx)(e.li,{children:"\u8F93\u5165\u6570\u7EC4array1\u548Carray2\uFF0C\u5143\u7D20\u6570\u91CF\u9700\u4FDD\u6301\u4E00\u81F4"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"sql> SELECT l1_distance([1, 2], [2, 3]);\n+---------------------------------------+\n| l1_distance(ARRAY(1, 2), ARRAY(2, 3)) |\n+---------------------------------------+\n|                                     2 |\n+---------------------------------------+\n"})}),"\n",(0,i.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"L1_DISTANCE,DISTANCE,L1,ARRAY\n"})})]})}function u(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return a},a:function(){return c}});var t=s(667294);let i={},l=t.createContext(i);function c(n){let e=t.useContext(l);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);