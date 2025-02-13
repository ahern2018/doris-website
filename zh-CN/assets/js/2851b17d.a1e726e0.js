"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["100811"],{379944:function(n,e,s){s.r(e),s.d(e,{metadata:()=>a,contentTitle:()=>c,default:()=>d,assets:()=>i,toc:()=>u,frontMatter:()=>l});var a=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/array-functions/array-pushback","title":"ARRAY_PUSHBACK","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/array-functions/array-pushback.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/array-functions","slug":"/sql-manual/sql-functions/scalar-functions/array-functions/array-pushback","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/array-functions/array-pushback","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ARRAY_PUSHBACK","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAY_PUSHFRONT","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/array-functions/array-pushfront"},"next":{"title":"ARRAY_COMPACY","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/array-functions/array-compact"}}'),r=s("785893"),t=s("250065");let l={title:"ARRAY_PUSHBACK",language:"zh-CN"},c=void 0,i={},u=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(e.p,{children:"\u5C06 value \u6DFB\u52A0\u5230\u6570\u7EC4\u7684\u5C3E\u90E8\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"ARRAY_PUSHBACK(<arr>, <value>)\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u53C2\u6570"}),(0,r.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<arr>"})}),(0,r.jsx)(e.td,{children:"\u5BF9\u5E94\u6570\u7EC4"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<value>"})}),(0,r.jsx)(e.td,{children:"\u5F85\u6DFB\u52A0\u7684\u503C"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,r.jsx)(e.p,{children:"\u8FD4\u56DE\u6DFB\u52A0 value \u540E\u7684\u6570\u7EC4"}),"\n",(0,r.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SELECT ARRAY_PUSHBACK([1, 2], 3),ARRAY_PUSHBACK([3, 4], 6);\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+---------------------------+---------------------------+\n| array_pushback([1, 2], 3) | array_pushback([3, 4], 6) |\n+---------------------------+---------------------------+\n| [1, 2, 3]                 | [3, 4, 6]                 |\n+---------------------------+---------------------------+\n"})})]})}function d(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return l}});var a=s(667294);let r={},t=a.createContext(r);function l(n){let e=a.useContext(t);return a.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),a.createElement(t.Provider,{value:e},n.children)}}}]);