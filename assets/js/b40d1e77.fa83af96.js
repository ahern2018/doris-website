"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["458286"],{447852:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>a,default:()=>o,assets:()=>f,toc:()=>c,frontMatter:()=>l});var i=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/ip-functions/is-ipv6-string","title":"IS_IPV6_STRING","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/ip-functions/is-ipv6-string.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/ip-functions","slug":"/sql-manual/sql-functions/scalar-functions/ip-functions/is-ipv6-string","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/ip-functions/is-ipv6-string","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"IS_IPV6_STRING","language":"en"},"sidebar":"docs","previous":{"title":"IS_IPV4_STRING","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/ip-functions/is-ipv4-string"},"next":{"title":"TO_IPV4","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/ip-functions/to-ipv4"}}'),s=t("785893"),r=t("250065");let l={title:"IS_IPV6_STRING",language:"en"},a=void 0,f={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.p,{children:"Determine whether an IPv6-type address is a valid IPv6 address."}),"\n",(0,s.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"IS_IPV6_STRING(<ipv6_str>)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Parameter"}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"<ipv6_str>"})}),(0,s.jsx)(e.td,{children:"An IPv6 address of type String"})]})})]}),"\n",(0,s.jsx)(e.h2,{id:"return-value",children:"Return Value"}),"\n",(0,s.jsx)(e.p,{children:"If it is a correctly formatted and valid IPv6 address, return true; On the contrary, return false."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"If input is NULL, the function returns NULL."}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE `test_is_ipv6_string` (\n      `id` int,\n      `ip_v6` string\n    ) ENGINE=OLAP\n    DISTRIBUTED BY HASH(`id`) BUCKETS 4\n    PROPERTIES (\n    \"replication_allocation\" = \"tag.location.default: 1\"\n    );\n    \ninsert into test_is_ipv6_string values(0, NULL), (1, '::'), (2, ''), (3, '2001:1b70:a1:610::b102:2'), (4, 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffffg');\n\nselect id, ip_v6, is_ipv6_string(ip_v6) from test_is_ipv6_string order by id;\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"+------+------------------------------------------+-----------------------+\n| id   | ip_v6                                    | is_ipv6_string(ip_v6) |\n+------+------------------------------------------+-----------------------+\n|    0 | NULL                                     |                  NULL |\n|    1 | ::                                       |                     1 |\n|    2 |                                          |                     0 |\n|    3 | 2001:1b70:a1:610::b102:2                 |                     1 |\n|    4 | ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffffg |                     0 |\n+------+------------------------------------------+-----------------------+\n"})})]})}function o(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return l}});var i=t(667294);let s={},r=i.createContext(s);function l(n){let e=i.useContext(r);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);