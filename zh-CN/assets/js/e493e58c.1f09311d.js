"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["485949"],{777833:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>c,default:()=>u,assets:()=>a,toc:()=>d,frontMatter:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/ltrim","title":"LTRIM","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/string-functions/ltrim.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/ltrim","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/ltrim","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"LTRIM","language":"zh-CN"},"sidebar":"docs","previous":{"title":"TRIM","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/trim"},"next":{"title":"RTRIM","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/rtrim"}}'),r=s("785893"),l=s("250065");let i={title:"LTRIM",language:"zh-CN"},c=void 0,a={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(e.p,{children:"LTRIM \u51FD\u6570\u7528\u4E8E\u53BB\u9664\u5B57\u7B26\u4E32\u5DE6\u4FA7\uFF08\u5F00\u5934\u90E8\u5206\uFF09\u8FDE\u7EED\u51FA\u73B0\u7A7A\u683C\u6216\u6307\u5B9A\u5B57\u7B26\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"LTRIM( <str> [, <trim_chars> ] )\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u53C2\u6570"}),(0,r.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<str>"})}),(0,r.jsx)(e.td,{children:"\u9700\u8981\u88AB\u4FEE\u526A\u7684\u5B57\u7B26\u4E32"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<trim_chars>"})}),(0,r.jsxs)(e.td,{children:["\u53EF\u9009\u53C2\u6570\u3002\u5982\u679C\u63D0\u4F9B\u4E86\u8BE5\u53C2\u6570\uFF0CLTRIM \u51FD\u6570\u5C06\u53BB\u9664",(0,r.jsx)(e.code,{children:"<str>"}),"\u5DE6\u4FA7\u51FA\u73B0\u7684",(0,r.jsx)(e.code,{children:"<trim_chars>"}),"\u4E2D\u7684\u6240\u6709\u5B57\u7B26\u3002\u5982\u679C\u672A\u63D0\u4F9B\u6B64\u53C2\u6570\uFF0CLTRIM \u51FD\u6570\u5C06\u4EC5\u53BB\u9664",(0,r.jsx)(e.code,{children:"<str>"}),"\u5DE6\u4FA7\u7684\u7A7A\u683C\u5B57\u7B26\u3002"]})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,r.jsxs)(e.p,{children:["\u8FD4\u56DE",(0,r.jsx)(e.code,{children:"<str>"}),"\u5DE6\u4FA7\u53BB\u9664",(0,r.jsx)(e.code,{children:"<trim_chars>"}),"\u540E\u7684\u5B57\u7B26\u4E32\u3002\u7279\u6B8A\u60C5\u51B5\uFF1A"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u4EFB\u610F\u4E24\u4E2A\u53C2\u6570\u4E2D\u6709\u4E00\u4E2A\u4E3A NULL\uFF0C\u5219\u8FD4\u56DE NULL"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SELECT ltrim('   ab d') str;\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+------+\n| str  |\n+------+\n| ab d |\n+------+\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SELECT ltrim('ababccaab','ab') str;\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+-------+\n| str   |\n+-------+\n| ccaab |\n+-------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return i}});var t=s(667294);let r={},l=t.createContext(r);function i(n){let e=t.useContext(l);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);