"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["481654"],{148682:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>c,default:()=>o,assets:()=>r,toc:()=>u,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/sum0","title":"SUM0","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/aggregate-functions/sum0.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/sum0","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/sum0","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SUM0","language":"zh-CN"},"sidebar":"docs","previous":{"title":"QUANTILE_UNION","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/quantile-union"},"next":{"title":"WINDOW_FUNNEL","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/window-funnel"}}'),l=t("785893"),i=t("250065");let a={title:"SUM0",language:"zh-CN"},c=void 0,r={},u=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function d(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"\u7528\u4E8E\u8FD4\u56DE\u9009\u4E2D\u5B57\u6BB5\u6240\u6709\u503C\u7684\u548C\u3002\u4E0E SUM \u51FD\u6570\u4E0D\u540C\u7684\u662F\uFF0C\u5F53\u8F93\u5165\u503C\u5168\u4E3A NULL \u65F6\uFF0CSUM0 \u8FD4\u56DE 0 \u800C\u4E0D\u662F NULL\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SUM0(<expr>)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u53C2\u6570"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<expr>"})}),(0,l.jsx)(e.td,{children:"\u8981\u8BA1\u7B97\u548C\u7684\u5B57\u6BB5"})]})})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(e.p,{children:"\u8FD4\u56DE\u9009\u4E2D\u5B57\u6BB5\u6240\u6709\u503C\u7684\u548C\u3002\u5982\u679C\u6240\u6709\u503C\u90FD\u4E3A NULL\uFF0C\u5219\u8FD4\u56DE 0\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:'-- \u521B\u5EFA\u793A\u4F8B\u8868\nCREATE TABLE sales_table (\n    product_id INT,\n    price DECIMAL(10,2),\n    quantity INT,\n    discount DECIMAL(10,2)\n) DISTRIBUTED BY HASH(product_id)\nPROPERTIES (\n    "replication_num" = "1"\n);\n\n-- \u63D2\u5165\u6D4B\u8BD5\u6570\u636E\nINSERT INTO sales_table VALUES\n(1, 99.99, 2, NULL),\n(2, 159.99, 1, NULL),\n(3, 49.99, 5, NULL),\n(4, 299.99, 1, NULL),\n(5, 79.99, 3, NULL);\n\n-- \u5BF9\u6BD4 SUM \u548C SUM0 \u7684\u533A\u522B\nSELECT \n    SUM(discount) as sum_discount,    -- \u8FD4\u56DE NULL\n    SUM0(discount) as sum0_discount   -- \u8FD4\u56DE 0\nFROM sales_table;\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+--------------+---------------+\n| sum_discount | sum0_discount |\n+--------------+---------------+\n|         NULL |          0.00 |\n+--------------+---------------+\n"})})]})}function o(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return a}});var s=t(667294);let l={},i=s.createContext(l);function a(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:a(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);