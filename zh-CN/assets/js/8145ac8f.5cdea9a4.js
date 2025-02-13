"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["814002"],{960561:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>i,default:()=>u,assets:()=>d,toc:()=>a,frontMatter:()=>c});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/sub-replace","title":"SUB_REPLACE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/string-functions/sub-replace.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/sub-replace","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/sub-replace","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SUB_REPLACE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"COUNT_SUBSTRINGS","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/count_substrings"},"next":{"title":"APPEND_TRAILING_CHAR_IF_ABSENT","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/append-trailing-char-if-absent"}}'),r=s("785893"),l=s("250065");let c={title:"SUB_REPLACE",language:"zh-CN"},i=void 0,d={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"sub_replace"})," \u51FD\u6570\u7528\u4E8E\u66FF\u6362\u5B57\u7B26\u4E32\u4E2D\u7684\u5B50\u5B57\u7B26\u4E32\u3002\u53EF\u4EE5\u6307\u5B9A\u8981\u66FF\u6362\u7684\u5B50\u5B57\u7B26\u4E32\u548C\u66FF\u6362\u7684\u76EE\u6807\u5B57\u7B26\u4E32\uFF0C\u8FD4\u56DE\u7528",(0,r.jsx)(e.code,{children:"new_str"})," \u5B57\u7B26\u4E32\u66FF\u6362 ",(0,r.jsx)(e.code,{children:"str"})," \u4E2D\u4ECE ",(0,r.jsx)(e.code,{children:"start"})," \u5F00\u59CB\u957F\u5EA6\u4E3Alen\u7684\u65B0\u5B57\u7B26\u4E32\u3002\u5176\u4E2D ",(0,r.jsx)(e.code,{children:"start"}),", ",(0,r.jsx)(e.code,{children:"len"})," \u4E3A\u8D1F\u6574\u6570\uFF0C\u8FD4\u56DE NULL, \u4E14 ",(0,r.jsx)(e.code,{children:"len"})," \u7684\u9ED8\u8BA4\u503C\u4E3A ",(0,r.jsx)(e.code,{children:"new_str"})," \u7684\u957F\u5EA6\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"sub_replace(<str>, <new_str>, [ ,<start> [ , <len> ] ])\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u53C2\u6570"}),(0,r.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<str>"})}),(0,r.jsx)(e.td,{children:"\u8981\u8FDB\u884C\u66FF\u6362\u64CD\u4F5C\u7684\u76EE\u6807\u5B57\u7B26\u4E32"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<new_str>"})}),(0,r.jsx)(e.td,{children:"\u7528\u4E8E\u66FF\u6362\u7684\u76EE\u6807\u5B57\u7B26\u4E32"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<start>"})}),(0,r.jsx)(e.td,{children:"\u662F\u66FF\u6362\u64CD\u4F5C\u5F00\u59CB\u7684\u4F4D\u7F6E\uFF0C\u8868\u793A\u4ECE\u5B57\u7B26\u4E32\u4E2D\u7684\u54EA\u4E2A\u4F4D\u7F6E\u5F00\u59CB\u8FDB\u884C\u66FF\u6362"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<len>"})}),(0,r.jsx)(e.td,{children:"\u662F\u4E00\u4E2A\u53EF\u9009\u53C2\u6570\uFF0C\u8868\u793A\u8981\u66FF\u6362\u7684\u5B50\u5B57\u7B26\u4E32\u7684\u957F\u5EA6"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,r.jsx)(e.p,{children:"\u8FD4\u56DE\u66FF\u6362\u540E\u7684\u5B57\u7B26\u4E32\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'select sub_replace("this is origin str","NEW-STR",1);\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+-------------------------------------------------+\n| sub_replace('this is origin str', 'NEW-STR', 1) |\n+-------------------------------------------------+\n| tNEW-STRorigin str                              |\n+-------------------------------------------------+\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'select sub_replace("doris","***",1,2);\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+-----------------------------------+\n| sub_replace('doris', '***', 1, 2) |\n+-----------------------------------+\n| d***is                            |\n+-----------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return c}});var t=s(667294);let r={},l=t.createContext(r);function c(n){let e=t.useContext(l);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);