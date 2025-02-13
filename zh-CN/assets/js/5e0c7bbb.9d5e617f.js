"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["954427"],{790749:function(n,e,i){i.r(e),i.d(e,{metadata:()=>t,contentTitle:()=>l,default:()=>u,assets:()=>a,toc:()=>d,frontMatter:()=>c});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/ip-functions/ipv6-cidr-to-range","title":"IPV6_CIDR_TO_RANGE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/ip-functions/ipv6-cidr-to-range.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/ip-functions","slug":"/sql-manual/sql-functions/scalar-functions/ip-functions/ipv6-cidr-to-range","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/ip-functions/ipv6-cidr-to-range","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"IPV6_CIDR_TO_RANGE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"IPV4_CIDR_TO_RANGE","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/ip-functions/ipv4-cidr-to-range"},"next":{"title":"IS_IP_ADDRESS_IN_RANGE","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/ip-functions/is-ip-address-in-range"}}'),s=i("785893"),r=i("250065");let c={title:"IPV6_CIDR_TO_RANGE",language:"zh-CN"},l=void 0,a={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(e.p,{children:"\u63A5\u6536\u4E00\u4E2AIPv6\u548C\u4E00\u4E2A\u5305\u542BCIDR\u7684Int16\u503C\u3002\u8FD4\u56DE\u4E00\u4E2A\u7ED3\u6784\u4F53\uFF0C\u5176\u4E2D\u5305\u542B\u4E24\u4E2AIPv6\u5B57\u6BB5\u5206\u522B\u8868\u793A\u5B50\u7F51\u7684\u8F83\u4F4E\u8303\u56F4\uFF08min\uFF09\u548C\u8F83\u9AD8\u8303\u56F4\uFF08max\uFF09\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"IPV6_CIDR_TO_RANGE(ip_v6, cidr)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Parameter"}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"<ip_v6>"})}),(0,s.jsx)(e.td,{children:"\u5B57\u7B26\u4E32\u7C7B\u578B\u7684ipv6\u5730\u5740"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"<cidr>"})}),(0,s.jsx)(e.td,{children:"cidr\u503C"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,s.jsx)(e.p,{children:"\u8FD4\u56DE\u4E00\u4E2A\u7ED3\u6784\u4F53\uFF0C\u5176\u4E2D\u5305\u542B\u4E24\u4E2AIPv6\u5B57\u6BB5\u5206\u522B\u8868\u793A\u5B50\u7F51\u7684\u8F83\u4F4E\u8303\u56F4\uFF08min\uFF09\u548C\u8F83\u9AD8\u8303\u56F4\uFF08max\uFF09\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5982\u679C\u8F93\u5165\u4E3ANULL, \u5219\u8FD4\u56DENULL"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"SELECT ipv6_cidr_to_range(to_ipv6('2001:0db8:0000:85a3:0000:0000:ac1f:8001'), 32), ipv6_cidr_to_range(NULL, NULL);\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:'+----------------------------------------------------------------------------+--------------------------------+\n| ipv6_cidr_to_range(to_ipv6(\'2001:0db8:0000:85a3:0000:0000:ac1f:8001\'), 32) | ipv6_cidr_to_range(NULL, NULL) |\n+----------------------------------------------------------------------------+--------------------------------+\n| {"min":"2001:db8::", "max":"2001:db8:ffff:ffff:ffff:ffff:ffff:ffff"}       | NULL                           |\n+----------------------------------------------------------------------------+--------------------------------+\n'})})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return l},a:function(){return c}});var t=i(667294);let s={},r=t.createContext(s);function c(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);