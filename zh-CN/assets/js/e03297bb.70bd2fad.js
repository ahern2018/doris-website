"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["270052"],{505760:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>c,default:()=>d,assets:()=>a,toc:()=>o,frontMatter:()=>r});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/ip-functions/ipv6-string-to-num","title":"IPV6_STRING_TO_NUM","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/ip-functions/ipv6-string-to-num.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/ip-functions","slug":"/sql-manual/sql-functions/scalar-functions/ip-functions/ipv6-string-to-num","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/ip-functions/ipv6-string-to-num","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"IPV6_STRING_TO_NUM","language":"zh-CN"},"sidebar":"docs","previous":{"title":"IPV6_NUM_TO_STRING","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/ip-functions/ipv6-num-to-string"},"next":{"title":"IPV6_STRING_TO_NUM_OR_DEFAULT","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/ip-functions/ipv6-string-to-num-or-default"}}'),i=s("785893"),l=s("250065");let r={title:"IPV6_STRING_TO_NUM",language:"zh-CN"},c=void 0,a={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function u(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(e.p,{children:"IPv6NumToString \u7684\u53CD\u5411\u51FD\u6570\uFF0C\u5B83\u63A5\u53D7\u4E00\u4E2A IP \u5730\u5740\u5B57\u7B26\u4E32\u5E76\u8FD4\u56DE\u4E8C\u8FDB\u5236\u683C\u5F0F\u7684 IPv6 \u5730\u5740\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"IPV6_STRING_TO_NUM(<ipv6_string>)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Parameter"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<ipv6_string>"})}),(0,i.jsx)(e.td,{children:"\u5B57\u7B26\u4E32\u7C7B\u578B\u7684ipv6\u5730\u5740"})]})})]}),"\n",(0,i.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsx)(e.p,{children:"\u8FD4\u56DE\u4E8C\u8FDB\u5236\u683C\u5F0F\u7684 IPv6 \u5730\u5740\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u5982\u679C\u8F93\u5165\u975E\u6CD5\u7684 IP \u5730\u5740\u6216\u8005 ",(0,i.jsx)(e.code,{children:"NULL"}),"\uFF0C\u4F1A\u629B\u51FA\u5F02\u5E38"]}),"\n",(0,i.jsx)(e.li,{children:"\u5982\u679C\u8F93\u5165\u5B57\u7B26\u4E32\u5305\u542B\u6709\u6548\u7684 IPv4 \u5730\u5740\uFF0C\u5219\u8FD4\u56DE\u5176\u7B49\u6548\u7684 IPv6 \u5730\u5740\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select hex(ipv6_string_to_num('1111::ffff')), hex(ipv6_string_to_num('192.168.0.1'));\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+---------------------------------------+----------------------------------------+\n| hex(ipv6_string_to_num('1111::ffff')) | hex(ipv6_string_to_num('192.168.0.1')) |\n+---------------------------------------+----------------------------------------+\n| 1111000000000000000000000000FFFF      | 00000000000000000000FFFFC0A80001       |\n+---------------------------------------+----------------------------------------+\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select hex(ipv6_string_to_num('notaaddress'));\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"ERROR 1105 (HY000): errCode = 2, detailMessage = (172.17.0.2)[CANCELLED][E33] Invalid IPv6 value\n"})})]})}function d(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return r}});var t=s(667294);let i={},l=t.createContext(i);function r(n){let e=t.useContext(l);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);