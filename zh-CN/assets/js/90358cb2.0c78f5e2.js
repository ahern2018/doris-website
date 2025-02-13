"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["60107"],{672012:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>c,default:()=>h,assets:()=>d,toc:()=>a,frontMatter:()=>r});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/trim-in","title":"TRIM_IN","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/string-functions/trim-in.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/trim-in","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/string-functions/trim-in","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"TRIM_IN","language":"zh-CN"},"sidebar":"docs","previous":{"title":"RTRIM","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/string-functions/rtrim"},"next":{"title":"LTRIM_IN","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/string-functions/ltrim-in"}}'),l=s("785893"),i=s("250065");let r={title:"TRIM_IN",language:"zh-CN"},c=void 0,d={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsxs)(e.p,{children:["\u5F53\u6CA1\u6709 ",(0,l.jsx)(e.code,{children:"rhs"})," \u53C2\u6570\u65F6\uFF0C\u5C06\u53C2\u6570 ",(0,l.jsx)(e.code,{children:"str"})," \u4E2D\u53F3\u4FA7\u548C\u5DE6\u4FA7\u5F00\u59CB\u90E8\u5206\u8FDE\u7EED\u51FA\u73B0\u7684\u7A7A\u683C\u53BB\u6389\uFF1B\u5F53\u6709 ",(0,l.jsx)(e.code,{children:"rhs"})," \u53C2\u6570\u65F6\uFF0C\u5728\u5B57\u7B26\u4E32\u7684\u4E24\u7AEF\u67E5\u627E\u5E76\u79FB\u9664 ",(0,l.jsx)(e.code,{children:"rhs"})," \u5B57\u7B26\u96C6\u5408\u4E2D\u7684\u4EFB\u4F55\u5B57\u7B26\uFF08\u4E0D\u8003\u8651\u987A\u5E8F\uFF09"]}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"\nTRIM_IN( <str> [ , <rhs>])\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u53C2\u6570"}),(0,l.jsx)(e.th,{children:"\u63CF\u8FF0"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<str>"})}),(0,l.jsx)(e.td,{children:"\u5220\u9664\u8BE5\u5B57\u7B26\u4E32\u4E24\u7AEF\u7684\u7A7A\u683C"})]})})]}),"\n",(0,l.jsx)(e.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u53C2\u6570"}),(0,l.jsx)(e.th,{children:"\u63CF\u8FF0"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<rhs>"})}),(0,l.jsx)(e.td,{children:"\u53BB\u6389\u8BE5\u6307\u5B9A\u5B57\u7B26"})]})})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(e.p,{children:"\u5220\u9664\u4E24\u7AEF\u7684\u7A7A\u683C\u6216\u6307\u5B9A\u5B57\u7B26\u540E\u7684\u5B57\u7B26\u4E32"}),"\n",(0,l.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u79FB\u9664\u5B57\u7B26\u4E32\u4E24\u7AEF\u7684\u7A7A\u683C\uFF1A"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"\nSELECT trim_in('   ab d   ') str;\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"+------+\n| str  |\n+------+\n|  ab d|\n+------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT trim_in('ababccaab','ab') str;\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"\n+------+\n| str  |\n+------+\n| cc   |\n+------+\n\n"})})]})}function h(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return r}});var t=s(667294);let l={},i=t.createContext(l);function r(n){let e=t.useContext(i);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);