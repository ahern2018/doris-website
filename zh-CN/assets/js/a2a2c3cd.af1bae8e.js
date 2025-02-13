"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["759614"],{711857:function(n,e,s){s.r(e),s.d(e,{metadata:()=>a,contentTitle:()=>i,default:()=>u,assets:()=>r,toc:()=>o,frontMatter:()=>c});var a=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/map-functions/map-values","title":"MAP_VALUES","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/map-functions/map-values.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/map-functions","slug":"/sql-manual/sql-functions/scalar-functions/map-functions/map-values","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/map-functions/map-values","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"MAP_VALUES","language":"zh-CN"},"sidebar":"docs","previous":{"title":"MAP_KEYS","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/map-functions/map-keys"},"next":{"title":"MAP_SIZE","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/map-functions/map-size"}}'),t=s("785893"),l=s("250065");let c={title:"MAP_VALUES",language:"zh-CN"},i=void 0,r={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function d(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsxs)(e.p,{children:["\u5C06\u7ED9\u5B9A ",(0,t.jsx)(e.code,{children:"map"})," \u7684\u503C\u63D0\u53D6\u6210\u4E00\u4E2A\u5BF9\u5E94\u7C7B\u578B\u7684 ",(0,t.jsx)(e.code,{children:"ARRAY"})]}),"\n",(0,t.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"MAP_VALUES(<map>)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u53C2\u6570"}),(0,t.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<map>"})}),(0,t.jsx)(e.td,{children:"\u8F93\u5165\u7684 map \u5185\u5BB9"})]})})]}),"\n",(0,t.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,t.jsxs)(e.p,{children:["\u5C06\u7ED9\u5B9A ",(0,t.jsx)(e.code,{children:"map"})," \u7684\u503C\u63D0\u53D6\u6210\u4E00\u4E2A\u5BF9\u5E94\u7C7B\u578B\u7684 ",(0,t.jsx)(e.code,{children:"ARRAY"})]}),"\n",(0,t.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'select map_values(map()),map_values(map(1, "100", 0.1, 2));\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:'+-------------------+---------------------------------------------------------------------------------------------------+\n| map_values(map()) | map_values(map(cast(1 as DECIMALV3(2, 1)), \'100\', cast(0.1 as DECIMALV3(2, 1)), cast(2 as TEXT))) |\n+-------------------+---------------------------------------------------------------------------------------------------+\n| []                | ["100", "2"]                                                                                      |\n+-------------------+---------------------------------------------------------------------------------------------------+\n'})})]})}function u(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return c}});var a=s(667294);let t={},l=a.createContext(t);function c(n){let e=a.useContext(l);return a.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),a.createElement(l.Provider,{value:e},n.children)}}}]);