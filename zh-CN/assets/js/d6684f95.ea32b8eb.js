"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["102898"],{979891:function(n,s,e){e.r(s),e.d(s,{metadata:()=>t,contentTitle:()=>l,default:()=>a,assets:()=>o,toc:()=>u,frontMatter:()=>c});var t=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/substring","title":"SUBSTRING","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/string-functions/substring.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/substring","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/substring","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"SUBSTRING","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SUBSTR","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/substr"},"next":{"title":"SUB_REPLACE","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/sub-replace"}}'),i=e("785893"),r=e("250065");let c={title:"SUBSTRING",language:"zh-CN"},l=void 0,o={},u=[{value:"substring",id:"substring",level:2},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"keywords",id:"keywords",level:3}];function d(n){let s={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"substring",children:"substring"}),"\n",(0,i.jsx)(s.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(s.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"VARCHAR substring(VARCHAR str, INT pos[, INT len])"})}),"\n",(0,i.jsxs)(s.p,{children:["\u6CA1\u6709 ",(0,i.jsx)(s.code,{children:"len"})," \u53C2\u6570\u65F6\u8FD4\u56DE\u4ECE\u4F4D\u7F6E ",(0,i.jsx)(s.code,{children:"pos"})," \u5F00\u59CB\u7684\u5B57\u7B26\u4E32 ",(0,i.jsx)(s.code,{children:"str"})," \u7684\u4E00\u4E2A\u5B50\u5B57\u7B26\u4E32\uFF0C\n\u5728\u6709 ",(0,i.jsx)(s.code,{children:"len"})," \u53C2\u6570\u65F6\u8FD4\u56DE\u4ECE\u4F4D\u7F6E ",(0,i.jsx)(s.code,{children:"pos"})," \u5F00\u59CB\u7684\u5B57\u7B26\u4E32 ",(0,i.jsx)(s.code,{children:"str"})," \u7684\u4E00\u4E2A\u957F\u5EA6\u4E3A ",(0,i.jsx)(s.code,{children:"len"})," \u5B50\u5B57\u7B26\u4E32\uFF0C\n",(0,i.jsx)(s.code,{children:"pos"})," \u53C2\u6570\u53EF\u4EE5\u4F7F\u7528\u8D1F\u503C\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u5B50\u5B57\u7B26\u4E32\u662F\u4EE5\u5B57\u7B26\u4E32 ",(0,i.jsx)(s.code,{children:"str"})," \u672B\u5C3E\u5F00\u59CB\u8BA1\u7B97 ",(0,i.jsx)(s.code,{children:"pos"})," \u4E2A\u5B57\u7B26\uFF0C\u800C\u4E0D\u662F\u5F00\u5934,\n",(0,i.jsx)(s.code,{children:"pos"})," \u7684\u503C\u4E3A 0 \u8FD4\u56DE\u4E00\u4E2A\u7A7A\u5B57\u7B26\u4E32\u3002"]}),"\n",(0,i.jsx)(s.p,{children:"\u5BF9\u4E8E\u6240\u6709\u5F62\u5F0F\u7684 SUBSTRING()\uFF0C\u8981\u4ECE\u4E2D\u63D0\u53D6\u5B50\u5B57\u7B26\u4E32\u7684\u5B57\u7B26\u4E32\u4E2D\u7B2C\u4E00\u4E2A\u5B57\u7B26\u7684\u4F4D\u7F6E\u4E3A1\u3002"}),"\n",(0,i.jsx)(s.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"mysql> select substring('abc1', 2);\n+-----------------------------+\n| substring('abc1', 2)        |\n+-----------------------------+\n| bc1                         |\n+-----------------------------+\n\nmysql> select substring('abc1', -2);\n+-----------------------------+\n| substring('abc1', -2)       |\n+-----------------------------+\n| c1                          |\n+-----------------------------+\n\nmysql> select substring('abc1', 0);\n+----------------------+\n| substring('abc1', 0) |\n+----------------------+\n|                      |\n+----------------------+\n\nmysql> select substring('abc1', 5);\n+-----------------------------+\n| substring('abc1', 5)        |\n+-----------------------------+\n| NULL                        |\n+-----------------------------+\n\nmysql> select substring('abc1def', 2, 2);\n+-----------------------------+\n| substring('abc1def', 2, 2)  |\n+-----------------------------+\n| bc                          |\n+-----------------------------+\n"})}),"\n",(0,i.jsx)(s.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"SUBSTRING, STRING\n"})})]})}function a(n={}){let{wrapper:s}={...(0,r.a)(),...n.components};return s?(0,i.jsx)(s,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},250065:function(n,s,e){e.d(s,{Z:function(){return l},a:function(){return c}});var t=e(667294);let i={},r=t.createContext(i);function c(n){let s=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(s):{...s,...n}},[s,n])}function l(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),t.createElement(r.Provider,{value:s},n.children)}}}]);