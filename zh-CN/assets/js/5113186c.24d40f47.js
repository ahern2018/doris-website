"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["862329"],{859575:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>a,default:()=>d,assets:()=>r,toc:()=>h,frontMatter:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/xxhash-64","title":"XXHASH_64","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/xxhash-64.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/encrypt-digest-functions","slug":"/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/xxhash-64","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/xxhash-64","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"XXHASH_64","language":"zh-CN"},"sidebar":"docs","previous":{"title":"XXHASH_32","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/xxhash-32"},"next":{"title":"cosine_distance","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/distance-functions/cosine-distance"}}'),l=s("785893"),c=s("250065");let i={title:"XXHASH_64",language:"zh-CN"},a=void 0,r={},h=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"\u8BA1\u7B97\u8F93\u5165\u5B57\u7B26\u4E32\u768464\u4F4Dxxhash\u503C"}),"\n",(0,l.jsxs)(e.p,{children:["-\u6CE8\uFF1A\u7ECF\u8FC7\u6D4B\u8BD5xxhash_64\u7684\u6027\u80FD\u5927\u7EA6\u662Fmurmur_hash3_64\u76842\u500D\uFF0C\u6240\u4EE5\u5728\u8BA1\u7B97hash\u503C\u65F6\uFF0C\u66F4\u63A8\u8350\u4F7F\u7528",(0,l.jsx)(e.code,{children:"xxhash_64"}),"\uFF0C\u800C\u4E0D\u662F",(0,l.jsx)(e.code,{children:"murmur_hash3_64"}),"\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"XXHASH_64( <str> [ , <str> ... ] )\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u53C2\u6570"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<str>"})}),(0,l.jsx)(e.td,{children:"\u9700\u8981\u88AB\u8BA1\u7B9764\u4F4Dxxhash\u7684\u503C"})]})})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(e.p,{children:"\u8FD4\u56DE\u8F93\u5165\u5B57\u7B26\u4E32\u768464\u4F4Dxxhash\u503C\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:'select xxhash_64(NULL), xxhash_64("hello"), xxhash_64("hello", "world");\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+-----------------+----------------------+-----------------------------+\n| xxhash_64(NULL) | xxhash_64('hello')   | xxhash_64('hello', 'world') |\n+-----------------+----------------------+-----------------------------+\n|            NULL | -7685981735718036227 |         7001965798170371843 |\n+-----------------+----------------------+-----------------------------+\n"})})]})}function d(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return a},a:function(){return i}});var t=s(667294);let l={},c=t.createContext(l);function i(n){let e=t.useContext(c);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),t.createElement(c.Provider,{value:e},n.children)}}}]);