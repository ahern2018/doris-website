"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["564313"],{102549:function(n,e,s){s.r(e),s.d(e,{metadata:()=>l,contentTitle:()=>r,default:()=>u,assets:()=>a,toc:()=>o,frontMatter:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/numeric-functions/log2","title":"LOG2","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/numeric-functions/log2.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/numeric-functions","slug":"/sql-manual/sql-functions/scalar-functions/numeric-functions/log2","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/numeric-functions/log2","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"LOG2","language":"zh-CN"},"sidebar":"docs","previous":{"title":"LOG","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/numeric-functions/log"},"next":{"title":"LOG10","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/numeric-functions/log10"}}'),c=s("785893"),t=s("250065");let i={title:"LOG2",language:"zh-CN"},r=void 0,a={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function d(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,c.jsxs)(e.p,{children:["\u8FD4\u56DE\u4EE5",(0,c.jsx)(e.code,{children:"2"}),"\u4E3A\u5E95\u7684",(0,c.jsx)(e.code,{children:"x"}),"\u7684\u81EA\u7136\u5BF9\u6570\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"LOG2(<x>)\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"\u53C2\u6570"}),(0,c.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,c.jsx)(e.tbody,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"<x>"})}),(0,c.jsx)(e.td,{children:"\u771F\u6570 \u5FC5\u987B\u5927\u4E8E0"})]})})]}),"\n",(0,c.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,c.jsx)(e.p,{children:"\u8FD4\u56DE\u4E00\u4E2A\u6D6E\u70B9\u6570\u3002\u7279\u6B8A\u60C5\u51B5\uFF1A"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\u5F53x\u4E3ANULL\u65F6\uFF0C\u8FD4\u56DE ",(0,c.jsx)(e.code,{children:"NULL"})]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"select log2(1);\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-text",children:"+-------------------------+\n| log2(cast(1 as DOUBLE)) |\n+-------------------------+\n|                     0.0 |\n+-------------------------+\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"select log2(2);\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-text",children:"+-------------------------+\n| log2(cast(2 as DOUBLE)) |\n+-------------------------+\n|                     1.0 |\n+-------------------------+\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"select log2(10);\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-text",children:"+--------------------------+\n| log2(cast(10 as DOUBLE)) |\n+--------------------------+\n|       3.3219280948873626 |\n+--------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(d,{...n})}):d(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return r},a:function(){return i}});var l=s(667294);let c={},t=l.createContext(c);function i(n){let e=l.useContext(t);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:i(n.components),l.createElement(t.Provider,{value:e},n.children)}}}]);