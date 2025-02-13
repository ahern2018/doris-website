"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["757268"],{592368:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>c,default:()=>h,assets:()=>d,toc:()=>a,frontMatter:()=>r});var t=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/regexp/regexp","title":"REGEXP","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/string-functions/regexp/regexp.md","sourceDirName":"sql-manual/sql-functions/string-functions/regexp","slug":"/sql-manual/sql-functions/string-functions/regexp/","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/regexp/","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"REGEXP","language":"zh-CN"},"sidebar":"docs","previous":{"title":"NOT LIKE","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/like/not-like"},"next":{"title":"REGEXP_EXTRACT","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/regexp/regexp-extract"}}'),l=s("785893"),i=s("250065");let r={title:"REGEXP",language:"zh-CN"},c=void 0,d={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:3}];function o(n){let e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"\u5BF9\u5B57\u7B26\u4E32 str \u8FDB\u884C\u6B63\u5219\u5339\u914D\uFF0C\u5339\u914D\u4E0A\u7684\u5219\u8FD4\u56DE true\uFF0C\u6CA1\u5339\u914D\u4E0A\u5219\u8FD4\u56DE false\u3002pattern \u4E3A\u6B63\u5219\u8868\u8FBE\u5F0F\u3002"}),"\n",(0,l.jsxs)(e.p,{children:["\u5B57\u7B26\u96C6\u5339\u914D\u9700\u8981\u4F7F\u7528 Unicode \u6807\u51C6\u5B57\u7B26\u7C7B\u578B\u3002\u4F8B\u5982\uFF0C\u5339\u914D\u4E2D\u6587\u8BF7\u4F7F\u7528 ",(0,l.jsx)(e.code,{children:"\\p{Han}"}),"\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"REGEXP(<str>, <pattern>)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u53C2\u6570"}),(0,l.jsx)(e.th,{children:"\u63CF\u8FF0"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<str>"})}),(0,l.jsx)(e.td,{children:"\u9700\u8981\u8FDB\u884C\u6B63\u5219\u5339\u914D\u7684\u5217\u3002"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<pattern>"})}),(0,l.jsx)(e.td,{children:"\u76EE\u6807\u6A21\u5F0F\u3002"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsxs)(e.p,{children:["\u4E00\u4E2A ",(0,l.jsx)(e.code,{children:"BOOLEAN"})," \u503C\uFF0C\u6307\u793A\u5339\u914D\u662F\u5426\u6210\u529F"]}),"\n",(0,l.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsx)(e.p,{children:"\u8BA9\u6211\u4EEC\u51C6\u5907\u4E00\u4E9B\u6570\u636E\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE test ( k1 VARCHAR(255) ) properties(\"replication_num\"=\"1\")\n\nINSERT INTO test (k1) VALUES ('billie eillish'), ('It\\'s ok'), ('billie jean'), ('hello world');\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u73B0\u5728\u8FDB\u884C ",(0,l.jsx)(e.code,{children:"REGEXP"})]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"--- \u67E5\u627E k1 \u5B57\u6BB5\u4E2D\u4EE5 'billie' \u4E3A\u5F00\u5934\u7684\u6240\u6709\u6570\u636E\nSELECT k1 FROM test WHERE k1 REGEXP '^billie'\n--------------\n\n+----------------+\n| k1             |\n+----------------+\n| billie eillish |\n| billie jean    |\n+----------------+\n2 rows in set (0.02 sec)\n\n--- \u67E5\u627E k1 \u5B57\u6BB5\u4E2D\u4EE5 'ok' \u4E3A\u7ED3\u5C3E\u7684\u6240\u6709\u6570\u636E\uFF1A\nSELECT k1 FROM test WHERE k1 REGEXP 'ok$'\n--------------\n\n+---------+\n| k1      |\n+---------+\n| It's ok |\n+---------+\n1 row in set (0.03 sec)\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u4E2D\u6587\u5B57\u7B26\u793A\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"mysql> select regexp('\u8FD9\u662F\u4E00\u6BB5\u4E2D\u6587This is a passage in English 1234567', '\\\\p{Han}');\n+-----------------------------------------------------------------------------+\n| ('\u8FD9\u662F\u4E00\u6BB5\u4E2D\u6587This is a passage in English 1234567' regexp '\\p{Han}')         |\n+-----------------------------------------------------------------------------+\n|                                                                           1 |\n+-----------------------------------------------------------------------------+\n"})}),"\n",(0,l.jsx)(e.h3,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"REGEXP\n"})})]})}function h(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return r}});var t=s(667294);let l={},i=t.createContext(l);function r(n){let e=t.useContext(i);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);