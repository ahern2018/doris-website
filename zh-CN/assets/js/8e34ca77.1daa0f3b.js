"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["701923"],{487624:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/avg","title":"AVG","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/aggregate-functions/avg.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/avg","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/avg","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"AVG","language":"zh-CN"},"sidebar":"docs","previous":{"title":"MAX_BY","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/max-by"},"next":{"title":"AVG_WEIGHTED","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/avg-weighted"}}'),l=t("785893"),i=t("250065");let a={title:"AVG",language:"zh-CN"},r=void 0,c={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u8BA1\u7B97\u6307\u5B9A\u5217\u6216\u8868\u8FBE\u5F0F\u7684\u6240\u6709\u975ENULL\u503C\u7684\u5E73\u5747\u503C\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"AVG([DISTINCT] <expr>)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u53C2\u6570"}),(0,l.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<expr>"})}),(0,l.jsx)(n.td,{children:"\u662F\u4E00\u4E2A\u8868\u8FBE\u5F0F\u6216\u5217\uFF0C\u901A\u5E38\u662F\u4E00\u4E2A\u6570\u503C\u5217\u6216\u8005\u80FD\u591F\u8F6C\u6362\u4E3A\u6570\u503C\u7684\u8868\u8FBE\u5F0F"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"[DISTINCT]"})}),(0,l.jsx)(n.td,{children:"\u662F\u4E00\u4E2A\u53EF\u9009\u7684\u5173\u952E\u5B57\uFF0C\u8868\u793A\u5BF9expr\u4E2D\u7684\u91CD\u590D\u503C\u8FDB\u884C\u53BB\u91CD\u540E\u518D\u8BA1\u7B97\u5E73\u5747\u503C"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(n.p,{children:"\u8FD4\u56DE\u6240\u9009\u5217\u6216\u8868\u8FBE\u5F0F\u7684\u5E73\u5747\u503C\uFF0C\u5982\u679C\u7EC4\u5185\u7684\u6240\u6709\u8BB0\u5F55\u5747\u4E3ANULL\uFF0C\u5219\u8BE5\u51FD\u6570\u8FD4\u56DENULL"}),"\n",(0,l.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT datetime, AVG(cost_time) FROM log_statis group by datetime;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+---------------------+--------------------+\n| datetime            | avg(`cost_time`)   |\n+---------------------+--------------------+\n| 2019-07-03 21:01:20 | 25.827794561933533 |\n+---------------------+--------------------+\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT datetime, AVG(distinct cost_time) FROM log_statis group by datetime;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+---------------------+---------------------------+\n| datetime            | avg(DISTINCT `cost_time`) |\n+---------------------+---------------------------+\n| 2019-07-04 02:23:24 |        20.666666666666668 |\n+---------------------+---------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var s=t(667294);let l={},i=s.createContext(l);function a(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);