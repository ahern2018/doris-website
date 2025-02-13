"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["448817"],{139092:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>i,default:()=>d,assets:()=>a,toc:()=>u,frontMatter:()=>c});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/murmur-hash3-32","title":"MURMUR_HASH3_32","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/murmur-hash3-32.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/encrypt-digest-functions","slug":"/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/murmur-hash3-32","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/murmur-hash3-32","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"MURMUR_HASH3_32","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHA2","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/sha2"},"next":{"title":"MURMUR_HASH3_32","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/murmur-hash3-32"}}'),r=s("785893"),l=s("250065");let c={title:"MURMUR_HASH3_32",language:"zh-CN"},i=void 0,a={},u=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function h(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(e.p,{children:"\u8BA1\u7B97 32\u4F4Dmurmur3 hash\u503C"}),"\n",(0,r.jsxs)(e.p,{children:["-\u6CE8\uFF1A\u5728\u8BA1\u7B97hash\u503C\u65F6\uFF0C\u66F4\u63A8\u8350\u4F7F\u7528",(0,r.jsx)(e.code,{children:"xxhash_32"}),"\uFF0C\u800C\u4E0D\u662F",(0,r.jsx)(e.code,{children:"murmur_hash3_32"}),"\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"MURMUR_HASH3_32( <str> [ , <str> ... ] )\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u53C2\u6570"}),(0,r.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<str>"})}),(0,r.jsx)(e.td,{children:"\u9700\u8981\u88AB\u8BA1\u7B9732\u4F4Dmurmur3 hash\u7684\u503C"})]})})]}),"\n",(0,r.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,r.jsx)(e.p,{children:"\u8FD4\u56DE\u8F93\u5165\u5B57\u7B26\u4E32\u768432\u4F4Dmurmur3 hash\u503C\u3002"}),"\n",(0,r.jsx)(e.p,{children:"-\u5F53\u53C2\u6570\u4E3ANULL\u65F6\uFF0C\u8FD4\u56DENULL"}),"\n",(0,r.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'select murmur_hash3_32(null), murmur_hash3_32("hello"), murmur_hash3_32("hello", "world");\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+-----------------------+--------------------------+-----------------------------------+\n| murmur_hash3_32(NULL) | murmur_hash3_32('hello') | murmur_hash3_32('hello', 'world') |\n+-----------------------+--------------------------+-----------------------------------+\n|                  NULL |               1321743225 |                         984713481 |\n+-----------------------+--------------------------+-----------------------------------+\n"})})]})}function d(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return c}});var t=s(667294);let r={},l=t.createContext(r);function c(n){let e=t.useContext(l);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);