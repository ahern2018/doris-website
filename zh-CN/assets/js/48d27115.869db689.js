"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["322356"],{757924:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>c,default:()=>d,assets:()=>o,toc:()=>a,frontMatter:()=>r});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/ip-functions/ipv4-string-to-num-or-null","title":"IPV4_STRING_TO_NUM_OR_NULL","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/ip-functions/ipv4-string-to-num-or-null.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/ip-functions","slug":"/sql-manual/sql-functions/scalar-functions/ip-functions/ipv4-string-to-num-or-null","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/ip-functions/ipv4-string-to-num-or-null","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"IPV4_STRING_TO_NUM_OR_NULL","language":"zh-CN"},"sidebar":"docs","previous":{"title":"IPV4_STRING_TO_NUM_OR_DEFAULT","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/ip-functions/ipv4-string-to-num-or-default"},"next":{"title":"IPV6_NUM_TO_STRING","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/ip-functions/ipv6-num-to-string"}}'),l=s("785893"),i=s("250065");let r={title:"IPV4_STRING_TO_NUM_OR_NULL",language:"zh-CN"},c=void 0,o={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u522B\u540D",id:"\u522B\u540D",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function u(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"\u83B7\u53D6\u5305\u542B IPv4 \u5730\u5740\u7684\u5B57\u7B26\u4E32\uFF0C\u683C\u5F0F\u4E3A A.B.C.D\uFF08\u70B9\u5206\u9694\u7684\u5341\u8FDB\u5236\u6570\u5B57\uFF09\u3002\u8FD4\u56DE\u4E00\u4E2A BIGINT \u6570\u5B57\uFF0C\u8868\u793A\u76F8\u5E94\u7684\u5927\u7AEF IPv4 \u5730\u5740\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u522B\u540D",children:"\u522B\u540D"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"INET_ATON"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"IPV4_STRING_TO_NUM_OR_NULL(<ipv4_string>)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"Parameter"}),(0,l.jsx)(e.th,{children:"Description"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<ipv4_string>"})}),(0,l.jsx)(e.td,{children:"\u5B57\u7B26\u4E32\u7C7B\u578B\u7684ipv4\u5730\u5740, \u4F8B\u5982 'A.B.C.D'"})]})})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(e.p,{children:"\u8FD4\u56DE\u4E00\u4E2A BIGINT \u6570\u5B57\uFF0C\u8868\u793A\u76F8\u5E94\u7684\u5927\u7AEF IPv4 \u5730\u5740"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u5982\u679C\u8F93\u5165\u5B57\u7B26\u4E32\u4E0D\u662F\u6709\u6548\u7684 IPv4 \u5730\u5740\uFF0C\u5C06\u8FD4\u56DE ",(0,l.jsx)(e.code,{children:"NULL"})]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"select ipv4_string_to_num_or_null('192.168.0.1'); \n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+-------------------------------------------+ \n| ipv4_string_to_num_or_null('192.168.0.1') | \n+-------------------------------------------+ \n| 3232235521                                | \n+-------------------------------------------+ \n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"select str, ipv4_string_to_num_or_null(str) from ipv4_str; \n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+-----------------+---------------------------------+ \n|str              | ipv4_string_to_num_or_null(str) | \n+-----------------+---------------------------------+ \n| 0.0.0.0         | 0                               | \n| 127.0.0.1       | 2130706433                      | \n| 255.255.255.255 | 4294967295                      | \n| invalid         | NULL                            | \n+-----------------+---------------------------------+ \n"})})]})}function d(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(u,{...n})}):u(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return r}});var t=s(667294);let l={},i=t.createContext(l);function r(n){let e=t.useContext(i);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);