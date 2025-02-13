"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["3780"],{927310:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>a,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/quantile-union","title":"QUANTILE_UNION","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/aggregate-functions/quantile-union.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/quantile-union","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/quantile-union","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"QUANTILE_UNION","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ORTHOGONAL_BITMAP_UNION_COUNT","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/orthogonal-bitmap-union-count"},"next":{"title":"REGR_INTERCEPT","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/regr-intercept"}}'),i=t("785893"),r=t("250065");let l={title:"QUANTILE_UNION",language:"zh-CN"},a=void 0,o={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function d(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"QUANTILE_UNION"})," \u51FD\u6570\u7528\u4E8E\u5408\u5E76\u591A\u4E2A\u5206\u4F4D\u6570\u8BA1\u7B97\u7684\u4E2D\u95F4\u7ED3\u679C\u3002\u8FD9\u4E2A\u51FD\u6570\u901A\u5E38\u4E0E ",(0,i.jsx)(e.code,{children:"QUANTILE_STATE"})," \u914D\u5408\u4F7F\u7528\uFF0C\u7279\u522B\u9002\u7528\u4E8E\u9700\u8981\u5206\u9636\u6BB5\u8BA1\u7B97\u5206\u4F4D\u6570\u7684\u573A\u666F\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"QUANTILE_UNION(<query_state>)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u53C2\u6570"}),(0,i.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<query_state>"})}),(0,i.jsxs)(e.td,{children:["\u7531 ",(0,i.jsx)(e.code,{children:"TO_QUANTILE_STATE"})," \u51FD\u6570\u751F\u6210\u7684\u4E2D\u95F4\u72B6\u6001"]})]})})]}),"\n",(0,i.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsxs)(e.p,{children:["\u8FD4\u56DE\u4E00\u4E2A\u53EF\u4EE5\u7528\u4E8E\u8FDB\u4E00\u6B65\u5206\u4F4D\u6570\u8BA1\u7B97\u7684\u805A\u5408\u72B6\u6001\u3002\u6B64\u51FD\u6570\u8FD4\u56DE\u7684\u7ED3\u679C\u4ECD\u662F ",(0,i.jsx)(e.code,{children:"QUANTILE_STATE"}),"\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"-- \u521B\u5EFA\u793A\u4F8B\u8868\nCREATE TABLE response_times (\n    request_id INT,\n    response_time DOUBLE,\n    region STRING\n) DUPLICATE KEY(request_id)\nDISTRIBUTED BY HASH(request_id) BUCKETS AUTO\nPROPERTIES (\n    \"replication_allocation\" = \"tag.location.default: 1\"\n);\n\n-- \u63D2\u5165\u793A\u4F8B\u6570\u636E\nINSERT INTO response_times VALUES\n(1, 10.5, 'east'),\n(2, 15.2, 'east'),\n(3, 20.1, 'west'),\n(4, 25.8, 'east'),\n(5, 30.3, 'west'),\n(6, 35.7, 'east'),\n(7, 40.2, 'west'),\n(8, 45.9, 'east'),\n(9, 50.4, 'west'),\n(10, 100.6, 'east');\n\n-- \u6309\u533A\u57DF\u8BA1\u7B97\u54CD\u5E94\u65F6\u95F4\u768450%\u5206\u4F4D\u6570\nSELECT \n    region,\n    QUANTILE_PERCENT(\n        QUANTILE_UNION(\n            TO_QUANTILE_STATE(response_time, 2048)\n        ),\n        0.5\n    ) AS median_response_time\nFROM response_times\nGROUP BY region;\n\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+--------+----------------------+\n| region | median_response_time |\n+--------+----------------------+\n| west   |                35.25 |\n| east   |                30.75 |\n+--------+----------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return l}});var s=t(667294);let i={},r=s.createContext(i);function l(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);