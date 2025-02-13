"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["234424"],{537309:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>a,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/ip-functions/ipv6-string-to-num","title":"IPV6_STRING_TO_NUM","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/ip-functions/ipv6-string-to-num.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/ip-functions","slug":"/sql-manual/sql-functions/scalar-functions/ip-functions/ipv6-string-to-num","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/ip-functions/ipv6-string-to-num","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"IPV6_STRING_TO_NUM","language":"en"},"sidebar":"docs","previous":{"title":"IPV6_NUM_TO_STRING","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/ip-functions/ipv6-num-to-string"},"next":{"title":"IPV6_STRING_TO_NUM_OR_DEFAULT","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/ip-functions/ipv6-string-to-num-or-default"}}'),i=t("785893"),r=t("250065");let l={title:"IPV6_STRING_TO_NUM",language:"en"},a=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(e.p,{children:"The reverse function of IPv6NumToString, it takes an IP address String and returns an IPv6 address in binary format."}),"\n",(0,i.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"IPV6_STRING_TO_NUM(<ipv6_string>)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Parameter"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<ipv6_string>"})}),(0,i.jsx)(e.td,{children:"An IPv6 address of type String"})]})})]}),"\n",(0,i.jsx)(e.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsx)(e.p,{children:"Returns an IPv6 address in binary format."}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Will return an error if the input string is not a valid IP address or ",(0,i.jsx)(e.code,{children:"NULL"})]}),"\n",(0,i.jsx)(e.li,{children:"If the input string contains a valid IPv4 address, returns its IPv6 equivalent."}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select hex(ipv6_string_to_num('1111::ffff')), hex(ipv6_string_to_num('192.168.0.1'));\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+---------------------------------------+----------------------------------------+\n| hex(ipv6_string_to_num('1111::ffff')) | hex(ipv6_string_to_num('192.168.0.1')) |\n+---------------------------------------+----------------------------------------+\n| 1111000000000000000000000000FFFF      | 00000000000000000000FFFFC0A80001       |\n+---------------------------------------+----------------------------------------+\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select hex(ipv6_string_to_num('notaaddress'));\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"ERROR 1105 (HY000): errCode = 2, detailMessage = (172.17.0.2)[CANCELLED][E33] Invalid IPv6 value\n"})})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return l}});var s=t(667294);let i={},r=s.createContext(i);function l(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);