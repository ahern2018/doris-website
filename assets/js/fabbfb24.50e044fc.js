"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["395469"],{143296:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>a,default:()=>d,assets:()=>c,toc:()=>o,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/ip-functions/ipv4-string-to-num-or-null","title":"IPV4_STRING_TO_NUM_OR_NULL","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/ip-functions/ipv4-string-to-num-or-null.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/ip-functions","slug":"/sql-manual/sql-functions/scalar-functions/ip-functions/ipv4-string-to-num-or-null","permalink":"/docs/sql-manual/sql-functions/scalar-functions/ip-functions/ipv4-string-to-num-or-null","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"IPV4_STRING_TO_NUM_OR_NULL","language":"en"},"sidebar":"docs","previous":{"title":"IPV4_STRING_TO_NUM_OR_DEFAULT","permalink":"/docs/sql-manual/sql-functions/scalar-functions/ip-functions/ipv4-string-to-num-or-default"},"next":{"title":"IPV6_NUM_TO_STRING","permalink":"/docs/sql-manual/sql-functions/scalar-functions/ip-functions/ipv6-num-to-string"}}'),i=s("785893"),r=s("250065");let l={title:"IPV4_STRING_TO_NUM_OR_NULL",language:"en"},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Alias",id:"alias",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function u(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(e.p,{children:"Takes a string containing an IPv4 address in the format A.B.C.D (dot-separated numbers in decimal form). Returns a BIGINT number representing the corresponding IPv4 address in big endian."}),"\n",(0,i.jsx)(e.h2,{id:"alias",children:"Alias"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"INET_ATON"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"IPV4_STRING_TO_NUM_OR_NULL(<ipv4_string>)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Parameter"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<ipv4_string>"})}),(0,i.jsx)(e.td,{children:"String type of ipv4, like 'A.B.C.D'"})]})})]}),"\n",(0,i.jsx)(e.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsx)(e.p,{children:"Returns a BIGINT number representing the corresponding IPv4 address in big endian."}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["If the input string is not a valid IPv4 address, ",(0,i.jsx)(e.code,{children:"NULL"})," is returned."]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select ipv4_string_to_num_or_null('192.168.0.1'); \n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+-------------------------------------------+ \n| ipv4_string_to_num_or_null('192.168.0.1') | \n+-------------------------------------------+ \n| 3232235521                                | \n+-------------------------------------------+ \n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select str, ipv4_string_to_num_or_null(str) from ipv4_str; \n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+-----------------+---------------------------------+ \n|str              | ipv4_string_to_num_or_null(str) | \n+-----------------+---------------------------------+ \n| 0.0.0.0         | 0                               | \n| 127.0.0.1       | 2130706433                      | \n| 255.255.255.255 | 4294967295                      | \n| invalid         | NULL                            | \n+-----------------+---------------------------------+ \n"})})]})}function d(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return a},a:function(){return l}});var t=s(667294);let i={},r=t.createContext(i);function l(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);