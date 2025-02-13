"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["698164"],{387429:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>c,default:()=>h,assets:()=>a,toc:()=>d,frontMatter:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/regexp-extract","title":"REGEXP_EXTRACT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/string-functions/regexp-extract.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/regexp-extract","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/regexp-extract","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"REGEXP_EXTRACT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"REGEXP","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/regexp"},"next":{"title":"REGEXP_EXTRACT_ALL","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/regexp-extract-all"}}'),r=s("785893"),l=s("250065");let i={title:"REGEXP_EXTRACT",language:"zh-CN"},c=void 0,a={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"keywords",id:"keywords",level:3}];function o(n){let e={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(e.p,{children:"\u5B57\u7B26\u4E32 STR \u8FDB\u884C\u6B63\u5219\u5339\u914D\uFF0C\u62BD\u53D6\u7B26\u5408 pattern \u7684\u7B2C POS \u4E2A\u5339\u914D\u90E8\u5206\u3002\u9700\u8981 pattern \u5B8C\u5168\u5339\u914D STR \u4E2D\u7684\u67D0\u90E8\u5206\uFF0C\u8FD9\u6837\u624D\u80FD\u8FD4\u56DE pattern \u90E8\u5206\u4E2D\u9700\u5339\u914D\u90E8\u5206\u3002"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5982\u679C\u6CA1\u6709\u5339\u914D\uFF0C\u8FD4\u56DE\u7A7A\u5B57\u7B26\u4E32\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u5B57\u7B26\u96C6\u5339\u914D\u9700\u8981\u4F7F\u7528 Unicode \u6807\u51C6\u5B57\u7B26\u7C7B\u578B\u3002\u4F8B\u5982\uFF0C\u5339\u914D\u4E2D\u6587\u8BF7\u4F7F\u7528 ",(0,r.jsx)(e.code,{children:"\\p{Han}"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"REGEXP_EXTRACT(<str>, <pattern>, <pos>)\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u53C2\u6570"}),(0,r.jsx)(e.th,{children:"\u63CF\u8FF0"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<str>"})}),(0,r.jsx)(e.td,{children:"\u9700\u8981\u8FDB\u884C\u6B63\u5219\u5339\u914D\u7684\u5217\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<pattern>"})}),(0,r.jsx)(e.td,{children:"\u76EE\u6807\u6A21\u5F0F\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<pos>"})}),(0,r.jsxs)(e.td,{children:["\u7528\u4E8E\u6307\u5B9A\u4ECE\u5B57\u7B26\u4E32\u4E2D\u7684\u54EA\u4E2A\u4F4D\u7F6E\u5F00\u59CB\u641C\u7D22\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u7684\u53C2\u6570\u3002\u5B83\u662F\u4E00\u4E2A\u8868\u793A\u5B57\u7B26\u4E32\u4E2D\u5B57\u7B26\u4F4D\u7F6E\u7684\u6574\u6570\u503C\uFF08\u4ECE 1 \u5F00\u59CB\uFF09\u3002\u5FC5\u987B\u6307\u5B9A ",(0,r.jsx)(e.code,{children:"pos"}),"\u3002"]})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,r.jsxs)(e.p,{children:["\u5339\u914D ",(0,r.jsx)(e.code,{children:"<pattern>"})," \u7684\u90E8\u5206\u3002\u7C7B\u578B\u662F ",(0,r.jsx)(e.code,{children:"Varchar"}),"\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"mysql> SELECT regexp_extract('AbCdE', '([[:lower:]]+)C([[:lower:]]+)', 1);\n+-------------------------------------------------------------+\n| regexp_extract('AbCdE', '([[:lower:]]+)C([[:lower:]]+)', 1) |\n+-------------------------------------------------------------+\n| b                                                           |\n+-------------------------------------------------------------+\n\nmysql> SELECT regexp_extract('AbCdE', '([[:lower:]]+)C([[:lower:]]+)', 2);\n+-------------------------------------------------------------+\n| regexp_extract('AbCdE', '([[:lower:]]+)C([[:lower:]]+)', 2) |\n+-------------------------------------------------------------+\n| d                                                           |\n+-------------------------------------------------------------+\n\nmysql> select regexp_extract('\u8FD9\u662F\u4E00\u6BB5\u4E2D\u6587This is a passage in English 1234567', '(\\\\p{Han}+)(.+)', 2);\n+-----------------------------------------------------------------------------------------------+\n| regexp_extract('\u8FD9\u662F\u4E00\u6BB5\u4E2D\u6587This is a passage in English 1234567', '(\\p{Han}+)(.+)', 2)       |\n+-----------------------------------------------------------------------------------------------+\n| This is a passage in English 1234567                                                          |\n+-----------------------------------------------------------------------------------------------+\n"})}),"\n",(0,r.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"REGEXP_EXTRACT,REGEXP,EXTRACT\n"})})]})}function h(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return i}});var t=s(667294);let r={},l=t.createContext(r);function i(n){let e=t.useContext(l);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);