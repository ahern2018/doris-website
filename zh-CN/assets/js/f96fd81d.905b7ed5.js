"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["346798"],{94723:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>l,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-from-array","title":"BITMAP_FROM_ARRAY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-from-array.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/bitmap-functions","slug":"/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-from-array","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-from-array","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"BITMAP_FROM_ARRAY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"BITMAP_TO_ARRAY","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-to-array"},"next":{"title":"BITMAP_EMPTY","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-empty"}}'),a=t("785893"),i=t("250065");let r={title:"BITMAP_FROM_ARRAY",language:"zh-CN"},l=void 0,c={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function d(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,a.jsx)(e.p,{children:"\u5C06\u4E00\u4E2A TINYINT/SMALLINT/INT/BIGINT \u7C7B\u578B\u7684\u6570\u7EC4\u8F6C\u5316\u4E3A\u4E00\u4E2A BITMAP\uFF0C\u5F53\u8F93\u5165\u5B57\u6BB5\u4E0D\u5408\u6CD5\u65F6\uFF0C\u7ED3\u679C\u8FD4\u56DE NULL"}),"\n",(0,a.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"BITMAP_FROM_ARRAY(<arr>)\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"\u53C2\u6570"}),(0,a.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,a.jsx)(e.tbody,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"<arr>"})}),(0,a.jsx)(e.td,{children:"\u6574\u5F62\u6570\u7EC4"})]})})]}),"\n",(0,a.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,a.jsx)(e.p,{children:"\u8FD4\u56DE\u4E00\u4E2A BITMAP"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u5F53\u8F93\u5165\u5B57\u6BB5\u4E0D\u5408\u6CD5\u65F6\uFF0C\u7ED3\u679C\u8FD4\u56DE NULL"}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"SELECT bitmap_to_string(bitmap_from_array(array(1, 0, 1, 1, 0, 1, 0))) AS bs;\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:"+------+\n| bs   |\n+------+\n| 0,1  |\n+------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return l},a:function(){return r}});var s=t(667294);let a={},i=s.createContext(a);function r(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);