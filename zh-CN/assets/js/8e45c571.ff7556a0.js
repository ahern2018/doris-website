"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["430310"],{521214:function(n,e,t){t.r(e),t.d(e,{metadata:()=>l,contentTitle:()=>c,default:()=>u,assets:()=>i,toc:()=>d,frontMatter:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/array-agg","title":"ARRAY_AGG","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/aggregate-functions/array-agg.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/array-agg","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/array-agg","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ARRAY_AGG","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ANY_VALUE","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/any-value"},"next":{"title":"MAP_AGG","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/map-agg"}}'),s=t("785893"),a=t("250065");let r={title:"ARRAY_AGG",language:"zh-CN"},c=void 0,i={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(e.p,{children:"\u5C06\u4E00\u5217\u4E2D\u7684\u503C\uFF08\u5305\u62EC\u7A7A\u503C null\uFF09\u4E32\u8054\u6210\u4E00\u4E2A\u6570\u7EC4\uFF0C\u53EF\u4EE5\u7528\u4E8E\u591A\u884C\u8F6C\u4E00\u884C\uFF08\u884C\u8F6C\u5217\uFF09\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"ARRAY_AGG(<col>)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u53C2\u6570"}),(0,s.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"<col>"})}),(0,s.jsx)(e.td,{children:"\u786E\u5B9A\u8981\u653E\u5165\u6570\u7EC4\u7684\u503C\u7684\u8868\u8FBE\u5F0F\uFF08\u901A\u5E38\u662F\u5217\u540D\uFF09"})]})})]}),"\n",(0,s.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,s.jsx)(e.p,{children:"\u8FD4\u56DE ARRAY \u7C7B\u578B\u7684\u503C\uFF0C\u7279\u6B8A\u60C5\u51B5\uFF1A"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u6570\u7EC4\u4E2D\u5143\u7D20\u4E0D\u4FDD\u8BC1\u987A\u5E8F\u3002"}),"\n",(0,s.jsxs)(e.li,{children:["\u8FD4\u56DE\u8F6C\u6362\u751F\u6210\u7684\u6570\u7EC4\u3002\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u7C7B\u578B\u4E0E ",(0,s.jsx)(e.code,{children:"col"})," \u7C7B\u578B\u4E00\u81F4\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"select * from test_doris_array_agg;\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"+------+------+\n\n| c1   | c2   |\n\n+------+------+\n\n|    1 | a    |\n\n|    1 | b    |\n\n|    2 | c    |\n\n|    2 | NULL |\n\n|    3 | NULL |\n\n+------+------+\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"select c1, array_agg(c2) from test_doris_array_agg group by c1;\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:'+------+-----------------+\n\n| c1   | array_agg(`c2`) |\n\n+------+-----------------+\n\n|    1 | ["a","b"]       |\n\n|    2 | [NULL,"c"]      |\n\n|    3 | [NULL]          |\n\n+------+-----------------+\n'})})]})}function u(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return r}});var l=t(667294);let s={},a=l.createContext(s);function r(n){let e=l.useContext(a);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),l.createElement(a.Provider,{value:e},n.children)}}}]);