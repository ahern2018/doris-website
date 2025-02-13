"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["883474"],{485653:function(e,n,f){f.r(n),f.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>c,assets:()=>r,toc:()=>d,frontMatter:()=>a});var t=JSON.parse('{"id":"sql-manual/sql-data-types/ip/IPV6","title":"IPV6","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-data-types/ip/IPV6.md","sourceDirName":"sql-manual/sql-data-types/ip","slug":"/sql-manual/sql-data-types/ip/IPV6","permalink":"/docs/3.0/sql-manual/sql-data-types/ip/IPV6","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"IPV6","language":"en"},"sidebar":"docs","previous":{"title":"IPV4","permalink":"/docs/3.0/sql-manual/sql-data-types/ip/IPV4"},"next":{"title":"ABS","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/numeric-functions/abs"}}'),s=f("785893"),i=f("250065");let a={title:"IPV6",language:"en"},l=void 0,r={},d=[{value:"IPV6",id:"ipv6",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"ipv6",children:"IPV6"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.p,{children:"IPv6 type, stored in UInt128 format in 16 bytes, used to represent IPv6 addresses.\nThe range of values is ['::', 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff']."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Inputs that exceed the value range or have invalid format will return NULL"})}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.p,{children:"Create table example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'CREATE TABLE ipv6_test (\n  `id` int,\n  `ip_v6` ipv6\n) ENGINE=OLAP\nDISTRIBUTED BY HASH(`id`) BUCKETS 4\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1"\n);\n'})}),"\n",(0,s.jsx)(n.p,{children:"Insert data example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"insert into ipv6_test values(1, '::');\ninsert into ipv6_test values(2, '2001:16a0:2:200a::2');\ninsert into ipv6_test values(3, 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff');\ninsert into ipv6_test values(4, 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffffg'); // invalid data\n"})}),"\n",(0,s.jsx)(n.p,{children:"Select data example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql> select * from ipv6_test order by id;\n+------+-----------------------------------------+\n| id   | ip_v6                                   |\n+------+-----------------------------------------+\n|    1 | ::                                      |\n|    2 | 2001:16a0:2:200a::2                     |\n|    3 | ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff |\n|    4 | NULL                                    |\n+------+-----------------------------------------+\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.p,{children:"IPV6"})]})}function c(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,f){f.d(n,{Z:function(){return l},a:function(){return a}});var t=f(667294);let s={},i=t.createContext(s);function a(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);