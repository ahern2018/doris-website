"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["465269"],{957173:function(n,e,t){t.r(e),t.d(e,{metadata:()=>l,contentTitle:()=>o,default:()=>d,assets:()=>c,toc:()=>a,frontMatter:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/ip-functions/to-ipv4-or-default","title":"TO_IPV4_OR_DEFAULT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/ip-functions/to-ipv4-or-default.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/ip-functions","slug":"/sql-manual/sql-functions/scalar-functions/ip-functions/to-ipv4-or-default","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/ip-functions/to-ipv4-or-default","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"TO_IPV4_OR_DEFAULT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"TO_IPV4","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/ip-functions/to-ipv4"},"next":{"title":"TO_IPV4_OR_NULL","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/ip-functions/to-ipv4-or-null"}}'),s=t("785893"),i=t("250065");let r={title:"TO_IPV4_OR_DEFAULT",language:"zh-CN"},o=void 0,c={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function u(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(e.p,{children:"\u8F93\u5165IPv4\u5730\u5740\u7684\u5B57\u7B26\u4E32\u5F62\u5F0F\uFF0C\u5E76\u8FD4\u56DEIPv4\u7C7B\u578B\u7684\u503C\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"TO_IPV4_OR_DEFAULT(<ipv4_str>)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Parameter"}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"<ipv4_str>"})}),(0,s.jsx)(e.td,{children:"\u5B57\u7B26\u4E32\u7C7B\u578B\u7684ipv4\u5730\u5740"})]})})]}),"\n",(0,s.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,s.jsx)(e.p,{children:"\u8FD4\u56DEIPv4\u7C7B\u578B\u7684\u503C\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5982\u679CIPv4\u5730\u5740\u7684\u683C\u5F0F\u975E\u6CD5\uFF0C\u5219\u8FD4\u56DE0.0.0.0"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"SELECT to_ipv4_or_default('255.255.255.255'), to_ipv4_or_default('.'), to_ipv4_or_default(NULL);\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"+---------------------------------------+-------------------------+--------------------------+\n| to_ipv4_or_default('255.255.255.255') | to_ipv4_or_default('.') | to_ipv4_or_default(NULL) |\n+---------------------------------------+-------------------------+--------------------------+\n| 255.255.255.255                       | 0.0.0.0                 | 0.0.0.0                  |\n+---------------------------------------+-------------------------+--------------------------+\n"})})]})}function d(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return r}});var l=t(667294);let s={},i=l.createContext(s);function r(n){let e=l.useContext(i);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),l.createElement(i.Provider,{value:e},n.children)}}}]);