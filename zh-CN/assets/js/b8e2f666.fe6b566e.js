"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["973135"],{85710:function(n,e,s){s.r(e),s.d(e,{metadata:()=>l,contentTitle:()=>r,default:()=>o,assets:()=>a,toc:()=>d,frontMatter:()=>t});var l=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/numeric-functions/sign","title":"SIGN","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/numeric-functions/sign.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/numeric-functions","slug":"/sql-manual/sql-functions/scalar-functions/numeric-functions/sign","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/numeric-functions/sign","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SIGN","language":"zh-CN"},"sidebar":"docs","previous":{"title":"RADIANS","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/numeric-functions/radians"},"next":{"title":"POSITIVE","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/numeric-functions/positive"}}'),i=s("785893"),c=s("250065");let t={title:"SIGN",language:"zh-CN"},r=void 0,a={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function u(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsxs)(e.p,{children:["\u8FD4\u56DE",(0,i.jsx)(e.code,{children:"x"}),"\u7684\u7B26\u53F7\u3002\u8D1F\u6570\uFF0C\u96F6\u6216\u6B63\u6570\u5206\u522B\u5BF9\u5E94-1\uFF0C0\u62161\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SIGN(x)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u53C2\u6570"}),(0,i.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<x>"})}),(0,i.jsx)(e.td,{children:"\u81EA\u53D8\u91CF"})]})})]}),"\n",(0,i.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsx)(e.p,{children:"\u8FD4\u56DE\u4E00\u4E2A\u6574\u578B\uFF1A"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5F53 x > 0 \u65F6\uFF0C\u8FD4\u56DE 1\uFF0C\u4EE3\u8868\u6574\u6570\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5F53 x = 0 \u65F6\uFF0C\u8FD4\u56DE 0\uFF0C\u4EE3\u8868\u96F6\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5F53 x < 0 \u65F6\uFF0C\u8FD4\u56DE -1\uFF0C\u4EE3\u8868\u8D1F\u6570\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5F53 x is NULL\u65F6\uFF0C\u8FD4\u56DE NULL\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select sign(3);\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+-------------------------+\n| sign(cast(3 as DOUBLE)) |\n+-------------------------+\n|                       1 |\n+-------------------------+\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select sign(0);\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+-------------------------+\n| sign(cast(0 as DOUBLE)) |\n+-------------------------+\n|                       0 |\n+-------------------------+\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select sign(-10.0);\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+-----------------------------+\n| sign(cast(-10.0 as DOUBLE)) |\n+-----------------------------+\n|                          -1 |\n+-----------------------------+\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select sign(null);\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+------------+\n| sign(NULL) |\n+------------+\n|       NULL |\n+------------+\n"})})]})}function o(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return r},a:function(){return t}});var l=s(667294);let i={},c=l.createContext(i);function t(n){let e=l.useContext(c);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),l.createElement(c.Provider,{value:e},n.children)}}}]);