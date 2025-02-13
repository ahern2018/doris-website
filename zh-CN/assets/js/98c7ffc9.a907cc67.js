"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["789234"],{830098:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>i,default:()=>u,assets:()=>r,toc:()=>d,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/hour","title":"HOUR","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/date-time-functions/hour.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/hour","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/hour","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"HOUR","language":"zh-CN"},"sidebar":"docs","previous":{"title":"MONTHNAME","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/monthname"},"next":{"title":"MINUTE","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/minute"}}'),a=t("785893"),c=t("250065");let l={title:"HOUR",language:"zh-CN"},i=void 0,r={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,a.jsx)(e.p,{children:"\u83B7\u5F97\u65E5\u671F\u65F6\u95F4\u4E2D\u7684\u5C0F\u65F6\u7684\u4FE1\u606F\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"HOUR(<dt>)\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"\u53C2\u6570"}),(0,a.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,a.jsx)(e.tbody,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"<dt>"})}),(0,a.jsx)(e.td,{children:"\u9700\u8981\u8BA1\u7B97\u7684\u65E5\u671F"})]})})]}),"\n",(0,a.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,a.jsx)(e.p,{children:"\u8FD4\u56DE\u65E5\u671F\u4E2D\u7684\u5C0F\u65F6\u7684\u4FE1\u606F\u3002\u8FD4\u56DE\u503C\u8303\u56F4\u4ECE 0-23\u3002\u5F53\u53C2\u6570\u4E3A Time\uFF0C\u8FD4\u56DE\u503C\u53EF\u4EE5\u5927\u4E8E 24"}),"\n",(0,a.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"select hour('2018-12-31 23:59:59');\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:"+-----------------------------+\n| hour('2018-12-31 23:59:59') |\n+-----------------------------+\n|                          23 |\n+-----------------------------+\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"select cast(4562632 as time),hour(cast(4562632 as time)), minute(cast(4562632 as time)),second(cast(4562632 as time));\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:"+-----------------------+-----------------------------+-------------------------------+-------------------------------+\n| cast(4562632 as TIME) | hour(cast(4562632 as TIME)) | minute(cast(4562632 as TIME)) | second(cast(4562632 as TIME)) |\n+-----------------------+-----------------------------+-------------------------------+-------------------------------+\n| 456:26:32             |                         456 |                            26 |                            32 |\n+-----------------------+-----------------------------+-------------------------------+-------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return i},a:function(){return l}});var s=t(667294);let a={},c=s.createContext(a);function l(n){let e=s.useContext(c);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:l(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);