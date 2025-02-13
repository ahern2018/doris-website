"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["833960"],{889243:function(n,e,a){a.r(e),a.d(e,{metadata:()=>l,contentTitle:()=>c,default:()=>u,assets:()=>i,toc:()=>d,frontMatter:()=>t});var l=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/array-functions/array","title":"ARRAY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/array-functions/array.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/array-functions","slug":"/sql-manual/sql-functions/scalar-functions/array-functions/array","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/array-functions/array","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ARRAY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"BIT_SHIFT_RIGHT","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/bitwise-functions/bitshiftright"},"next":{"title":"ARRAY_MAX","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/array-functions/array-max"}}'),s=a("785893"),r=a("250065");let t={title:"ARRAY",language:"zh-CN"},c=void 0,i={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(e.p,{children:"\u6839\u636E\u53C2\u6570\u6784\u9020\u5E76\u8FD4\u56DEarray, \u53C2\u6570\u53EF\u4EE5\u662F\u591A\u5217\u6216\u8005\u5E38\u91CF"}),"\n",(0,s.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"ARRAY([ <element> [, ...] ])\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u53C2\u6570"}),(0,s.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"<element>"})}),(0,s.jsx)(e.td,{children:"\u53C2\u6570\u53EF\u4EE5\u662F\u591A\u5217\u6216\u8005\u5E38\u91CF"})]})})]}),"\n",(0,s.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,s.jsx)(e.p,{children:"\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4"}),"\n",(0,s.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'select array("1", 2, 1.1);\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:'+------------------------------------------------+\n| array(\'1\', cast(2 as TEXT), cast(1.1 as TEXT)) |\n+------------------------------------------------+\n| ["1", "2", "1.1"]                              |\n+------------------------------------------------+\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"select array(null, 1);\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"+----------------+\n| array(NULL, 1) |\n+----------------+\n| [NULL, 1]      |\n+----------------+\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"select array(1, 2, 3);\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"+----------------+\n| array(1, 2, 3) |\n+----------------+\n| [1, 2, 3]      |\n+----------------+\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"select array(qid, creationDate, null) from nested  limit 4;\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:'+-------------------------------------------------------+\n| array(cast(qid as DATETIMEV2(0)), creationDate, NULL) |\n+-------------------------------------------------------+\n| [null, "2009-06-16 07:40:56", null]                   |\n| [null, "2009-06-16 07:50:05", null]                   |\n| [null, "2009-06-16 08:09:18", null]                   |\n| [null, "2009-06-16 08:15:45", null]                   |\n+-------------------------------------------------------+\n'})})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},250065:function(n,e,a){a.d(e,{Z:function(){return c},a:function(){return t}});var l=a(667294);let s={},r=l.createContext(s);function t(n){let e=l.useContext(r);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);