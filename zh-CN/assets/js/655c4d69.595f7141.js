"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["610902"],{806481:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>a,default:()=>u,assets:()=>r,toc:()=>d,frontMatter:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-and-not-count","title":"BITMAP_AND_NOT_COUNT,BITMAP_ANDNOT_COUNT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-and-not-count.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/bitmap-functions","slug":"/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-and-not-count","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-and-not-count","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"BITMAP_AND_NOT_COUNT,BITMAP_ANDNOT_COUNT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"BITMAP_AND_COUNT","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-and-count"},"next":{"title":"BITMAP_XOR_COUNT","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-xor-count"}}'),i=t("785893"),l=t("250065");let c={title:"BITMAP_AND_NOT_COUNT,BITMAP_ANDNOT_COUNT",language:"zh-CN"},a=void 0,r={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u522B\u540D",id:"\u522B\u540D",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsxs)(e.p,{children:["\u5C06\u4E24\u4E2A BITMAP \u8FDB\u884C\u4E0E\u975E\u64CD\u4F5C\u5E76\u8FD4\u56DE\u8BA1\u7B97\u7ED3\u679C\u96C6\u7684\u5143\u7D20\u4E2A\u6570\uFF0C\u5176\u4E2D\u5165\u53C2\u7B2C\u4E00\u4E2A\u53EB ",(0,i.jsx)(e.code,{children:"\u57FA\u51C6 BITMAP"}),"\uFF0C \u7B2C\u4E8C\u4E2A\u53EB ",(0,i.jsx)(e.code,{children:"\u6392\u9664 BITMAP"}),"\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u522B\u540D",children:"\u522B\u540D"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"BITMAP_ANDNOT_COUNT"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"BITMAP_AND_NOT_COUNT(<bitmap1>, <bitmap2>)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u53C2\u6570"}),(0,i.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<bitmap1>"})}),(0,i.jsxs)(e.td,{children:["\u88AB\u6C42\u4E0E\u975E\u7684",(0,i.jsx)(e.code,{children:"\u57FA\u51C6 BITMAP"})]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<bitmap2>"})}),(0,i.jsxs)(e.td,{children:["\u88AB\u6C42\u4E0E\u975E\u7684",(0,i.jsx)(e.code,{children:"\u6392\u9664 BITMAP"})]})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsx)(e.p,{children:"\u8FD4\u56DE\u6574\u6570\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5F53\u53C2\u6570\u5B58\u5728\u7A7A\u503C\u65F6\uFF0C\u8FD4\u56DE NULL"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select bitmap_and_not_count(null, bitmap_from_string('1,2,3')) banc1, bitmap_and_not_count(bitmap_from_string('1,2,3') ,null) banc2;\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+-------+-------+\n| banc1 | banc2 |\n+-------+-------+\n|     0 |     0 |\n+-------+-------+\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select bitmap_and_not_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5')) banc;\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+------+\n| banc |\n+------+\n|    2 |\n+------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return c}});var s=t(667294);let i={},l=s.createContext(i);function c(n){let e=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);