"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["192701"],{941430:function(n,e,s){s.r(e),s.d(e,{metadata:()=>l,contentTitle:()=>a,default:()=>o,assets:()=>r,toc:()=>d,frontMatter:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/numeric-functions/radians","title":"RADIANS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/numeric-functions/radians.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/numeric-functions","slug":"/sql-manual/sql-functions/scalar-functions/numeric-functions/radians","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/numeric-functions/radians","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"RADIANS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"POW","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/numeric-functions/pow"},"next":{"title":"SIGN","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/numeric-functions/sign"}}'),t=s("785893"),c=s("250065");let i={title:"RADIANS",language:"zh-CN"},a=void 0,r={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function u(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsxs)(e.p,{children:["\u8FD4\u56DE",(0,t.jsx)(e.code,{children:"x"}),"\u7684\u5F27\u5EA6\u503C, \u4ECE\u5EA6\u8F6C\u6362\u4E3A\u5F27\u5EA6."]}),"\n",(0,t.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"RADIANS(<x>)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u53C2\u6570"}),(0,t.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<x>"})}),(0,t.jsx)(e.td,{children:"\u9700\u8981\u88AB\u8BA1\u7B97\u7684\u4ECE\u5EA6"})]})})]}),"\n",(0,t.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,t.jsx)(e.p,{children:"\u8FD4\u56DE\u4E00\u4E2A\u6574\u578B\u6216\u8005\u6D6E\u70B9\u6570\u3002\u7279\u6B8A\u60C5\u51B5\uFF1A"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u5F53\u53C2\u6570 x is NULL\uFF0C\u8FD4\u56DE NULL"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select radians(0);\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+----------------------------+\n| radians(cast(0 as DOUBLE)) |\n+----------------------------+\n|                        0.0 |\n+----------------------------+\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select radians(30);\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+-----------------------------+\n| radians(cast(30 as DOUBLE)) |\n+-----------------------------+\n|          0.5235987755982988 |\n+-----------------------------+\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select radians(90);\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+-----------------------------+\n| radians(cast(90 as DOUBLE)) |\n+-----------------------------+\n|          1.5707963267948966 |\n+-----------------------------+\n"})})]})}function o(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return a},a:function(){return i}});var l=s(667294);let t={},c=l.createContext(t);function i(n){let e=l.useContext(c);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),l.createElement(c.Provider,{value:e},n.children)}}}]);