"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["332689"],{965705:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>i,default:()=>d,assets:()=>r,toc:()=>o,frontMatter:()=>c});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/map-functions/map-contains-value","title":"MAP_CONTAINS_VALUE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/map-functions/map-contains-value.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/map-functions","slug":"/sql-manual/sql-functions/scalar-functions/map-functions/map-contains-value","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/map-functions/map-contains-value","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"MAP_CONTAINS_VALUE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"MAP_CONTAINS_KEY","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/map-functions/map-contains-key"},"next":{"title":"STRUCT","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/struct-functions/struct"}}'),a=s("785893"),l=s("250065");let c={title:"MAP_CONTAINS_VALUE",language:"zh-CN"},i=void 0,r={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function u(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,a.jsxs)(e.p,{children:["\u5224\u65AD\u7ED9\u5B9A ",(0,a.jsx)(e.code,{children:"map"})," \u4E2D\u662F\u5426\u5305\u542B\u7279\u5B9A\u7684\u503C ",(0,a.jsx)(e.code,{children:"value"})]}),"\n",(0,a.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"MAP_CONTAINS_VALUE(<map>, <value>)\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"\u53C2\u6570"}),(0,a.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"<map>"})}),(0,a.jsx)(e.td,{children:"\u8F93\u5165\u7684 map \u5185\u5BB9"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"<value>"})}),(0,a.jsx)(e.td,{children:"\u9700\u8981\u68C0\u7D22\u7684 value"})]})]})]}),"\n",(0,a.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,a.jsxs)(e.p,{children:["\u5224\u65AD\u7ED9\u5B9A ",(0,a.jsx)(e.code,{children:"map"})," \u4E2D\u662F\u5426\u5305\u542B\u7279\u5B9A\u7684\u503C ",(0,a.jsx)(e.code,{children:"value"}),",\u5B58\u5728\u8FD4\u56DE 1 ,\u4E0D\u5B58\u5728\u8FD4\u56DE 0 \u3002"]}),"\n",(0,a.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'select map_contains_value(map(null, 1, 2, null), null),map_contains_value(map(1, "100", 0.1, 2), 101);\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:"+-------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------+\n| map_contains_value(map(NULL, 1, 2, NULL), NULL) | map_contains_value(map(cast(1 as DECIMALV3(2, 1)), '100', cast(0.1 as DECIMALV3(2, 1)), cast(2 as TEXT)), cast(101 as VARCHAR(3))) |\n+-------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------+\n|                                               1 |                                                                                                                                  0 |\n+-------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------+\n"})})]})}function d(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(u,{...n})}):u(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return c}});var t=s(667294);let a={},l=t.createContext(a);function c(n){let e=t.useContext(l);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:c(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);