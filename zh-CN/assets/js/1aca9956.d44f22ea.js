"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["443028"],{126574:function(e,n,l){l.r(n),l.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>u,assets:()=>a,toc:()=>d,frontMatter:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-functions/table-functions/explode-numbers","title":"EXPLODE_NUMBERS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/table-functions/explode-numbers.md","sourceDirName":"sql-manual/sql-functions/table-functions","slug":"/sql-manual/sql-functions/table-functions/explode-numbers","permalink":"/zh-CN/docs/sql-manual/sql-functions/table-functions/explode-numbers","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"EXPLODE_NUMBERS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"EXPLODE_SPLIT","permalink":"/zh-CN/docs/sql-manual/sql-functions/table-functions/explode-split"},"next":{"title":"S3","permalink":"/zh-CN/docs/sql-manual/sql-functions/table-valued-functions/s3"}}'),t=l("785893"),r=l("250065");let c={title:"EXPLODE_NUMBERS",language:"zh-CN"},i=void 0,a={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"explode_numbers"})," \u8868\u51FD\u6570\uFF0C\u63A5\u53D7\u4E00\u4E2A\u6574\u6570 n \uFF0C\u5C06\u8303\u56F4\u7684\u6240\u6709\u6570\u5B57\u5C55\u5F00\u4E3A\u591A\u884C\uFF0C\u6BCF\u884C\u4E00\u4E2A\u6570\u5B57\u3002\u5E38\u7528\u4E8E\u751F\u6210\u8FDE\u7EED\u6570\u5B57\u7684\u5E8F\u5217\uFF0C\u914D\u5408 LATERAL VIEW \u4F7F\u7528\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"explode_numbers_outer"})," \u4E0E ",(0,t.jsx)(n.code,{children:"explode_numbers"})," \u4E0D\u540C\u7684\u662F\uFF0C\u4F1A\u5728\u8868\u51FD\u6570\u751F\u62100\u884C\u6570\u636E\u65F6\u6DFB\u52A0\u4E00\u884C",(0,t.jsx)(n.code,{children:"Null"}),"\u6570\u636E\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"EXPLODE_NUMBERS(<n>)\nEXPLODE_NUMBERS_OUTER(<n>)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u53C2\u6570"}),(0,t.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"<n>"})}),(0,t.jsx)(n.td,{children:"\u6574\u6570\u7C7B\u578B"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,t.jsx)(n.p,{children:"\u8FD4\u56DE\u4E00\u4E2A[0,n)\u7684\u5E8F\u5217"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5F53\u4E3A 0 \u6216\u8005 NULL \u65F6\u4E0D\u8FD4\u56DE"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select e1 from (select 1 k1) as t lateral view explode_numbers(5) tmp1 as e1;\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+------+\n| e1   |\n+------+\n|    0 |\n|    1 |\n|    2 |\n|    3 |\n|    4 |\n+------+\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select e1 from (select 1 k1) as t lateral view explode_numbers(0) tmp1 as e1;\nEmpty set\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select e1 from (select 1 k1) as t lateral view explode_numbers_outer(0) tmp1 as e1;\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+------+\n| e1   |\n+------+\n| NULL |\n+------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return i},a:function(){return c}});var s=l(667294);let t={},r=s.createContext(t);function c(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);