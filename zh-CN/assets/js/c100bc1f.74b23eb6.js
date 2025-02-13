"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["200218"],{440467:function(l,n,e){e.r(n),e.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>d,assets:()=>i,toc:()=>h,frontMatter:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/hll-functions/hll-from-base64","title":"HLL_FROM_BASE64","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/hll-functions/hll-from-base64.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/hll-functions","slug":"/sql-manual/sql-functions/scalar-functions/hll-functions/hll-from-base64","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/hll-functions/hll-from-base64","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"HLL_FROM_BASE64","language":"zh-CN"},"sidebar":"docs","previous":{"title":"HLL_EMPTY","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/hll-functions/hll-empty"},"next":{"title":"HLL_HASH","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/hll-functions/hll-hash"}}'),a=e("785893"),t=e("250065");let c={title:"HLL_FROM_BASE64",language:"zh-CN"},r=void 0,i={},h=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(l){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...l.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,a.jsxs)(n.p,{children:["\u5C06\u4E00\u4E2A base64 \u7F16\u7801\u7684\u5B57\u7B26\u4E32\uFF08\u901A\u5E38\u7531 ",(0,a.jsx)(n.code,{children:"HLL_TO_BASE64"})," \u51FD\u6570\u751F\u6210\uFF09\u8F6C\u6362\u4E3A HLL \u7C7B\u578B\u3002\u5982\u679C\u8F93\u5165\u5B57\u7B26\u4E32\u4E0D\u5408\u6CD5\u6216\u4E3A NULL\uFF0C\u5219\u8FD4\u56DE NULL\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"HLL_FROM_BASE64(<input>)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"\u53C2\u6570"}),(0,a.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<input>"})}),(0,a.jsxs)(n.td,{children:["base64 \u7F16\u7801\u7684\u5B57\u7B26\u4E32\uFF0C\u901A\u5E38\u7531 ",(0,a.jsx)(n.code,{children:"HLL_TO_BASE64"})," \u51FD\u6570\u751F\u6210\u3002\u5982\u679C\u5B57\u7B26\u4E32\u4E0D\u5408\u6CD5\uFF0C\u5219\u8FD4\u56DE NULL\u3002"]})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select hll_union_agg(hll_from_base64(hll_to_base64(pv))), hll_union_agg(pv) from test_hll;\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+---------------------------------------------------+-------------------+\n| hll_union_agg(hll_from_base64(hll_to_base64(pv))) | hll_union_agg(pv) |\n+---------------------------------------------------+-------------------+\n|                                                 3 |                 3 |\n+---------------------------------------------------+-------------------+\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select hll_cardinality(hll_from_base64(hll_to_base64(hll_hash('abc'))));\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+------------------------------------------------------------------+\n| hll_cardinality(hll_from_base64(hll_to_base64(hll_hash('abc')))) |\n+------------------------------------------------------------------+\n|                                                                1 |\n+------------------------------------------------------------------+\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select hll_cardinality(hll_from_base64(hll_to_base64(hll_hash(''))));\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+---------------------------------------------------------------+\n| hll_cardinality(hll_from_base64(hll_to_base64(hll_hash('')))) |\n+---------------------------------------------------------------+\n|                                                             1 |\n+---------------------------------------------------------------+\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select hll_cardinality(hll_from_base64(hll_to_base64(hll_hash(NULL))));\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+-----------------------------------------------------------------+\n| hll_cardinality(hll_from_base64(hll_to_base64(hll_hash(NULL)))) |\n+-----------------------------------------------------------------+\n|                                                               0 |\n+-----------------------------------------------------------------+\n"})})]})}function d(l={}){let{wrapper:n}={...(0,t.a)(),...l.components};return n?(0,a.jsx)(n,{...l,children:(0,a.jsx)(o,{...l})}):o(l)}},250065:function(l,n,e){e.d(n,{Z:function(){return r},a:function(){return c}});var s=e(667294);let a={},t=s.createContext(a);function c(l){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof l?l(n):{...n,...l}},[n,l])}function r(l){let n;return n=l.disableParentContext?"function"==typeof l.components?l.components(a):l.components||a:c(l.components),s.createElement(t.Provider,{value:n},l.children)}}}]);