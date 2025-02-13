"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["131341"],{458215:function(n,e,s){s.r(e),s.d(e,{metadata:()=>l,contentTitle:()=>d,default:()=>a,assets:()=>r,toc:()=>h,frontMatter:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-statements/account-management/ALTER-USER","title":"ALTER USER","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/account-management/ALTER-USER.md","sourceDirName":"sql-manual/sql-statements/account-management","slug":"/sql-manual/sql-statements/account-management/ALTER-USER","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/account-management/ALTER-USER","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ALTER USER","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CREATE USER","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/account-management/CREATE-USER"},"next":{"title":"DROP USER","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/account-management/DROP-USER"}}'),c=s("785893"),t=s("250065");let i={title:"ALTER USER",language:"zh-CN"},d=void 0,r={},h=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(n){let e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,c.jsx)(e.p,{children:"ALTER USER \u8BED\u53E5\u7528\u4E8E\u4FEE\u6539\u4E00\u4E2A\u7528\u6237\u7684\u8D26\u6237\u5C5E\u6027\uFF0C\u5305\u62EC\u5BC6\u7801\u3001\u548C\u5BC6\u7801\u7B56\u7565\u7B49"}),"\n",(0,c.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"ALTER USER [IF EXISTS] <user_identity> [IDENTIFIED BY <password>]\n[<password_policy>]\n[<comment>]\n\nALTER USER [IF EXISTS] <user_identity> [IDENTIFIED BY <password>]\n[<password_policy>]\n[<comment>]\n\npassword_policy:\n    1. PASSWORD_HISTORY { <n> | DEFAULT }\n    2. PASSWORD_EXPIRE { DEFAULT | NEVER | INTERVAL <n> { DAY | HOUR | SECOND }}\n    3. FAILED_LOGIN_ATTEMPTS <n>\n    4. PASSWORD_LOCK_TIME { UNBOUNDED \uFF5C <n> { DAY | HOUR | SECOND }}\n    5. ACCOUNT_UNLOCK\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsxs)(e.strong,{children:["1. ",(0,c.jsx)(e.code,{children:"<user_identity"}),">"]})}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsxs)(e.p,{children:["\u4E00\u4E2A\u7528\u6237\u7684\u552F\u4E00\u6807\u8BC6\uFF0C\u8BED\u6CD5\u4E3A\uFF1A'user_name'@'host'\n",(0,c.jsx)(e.code,{children:"user_identity"})," \u7531\u4E24\u90E8\u5206\u7EC4\u6210\uFF0Cuser_name \u548C host\uFF0C\u5176\u4E2D username \u4E3A\u7528\u6237\u540D\u3002host \u6807\u8BC6\u7528\u6237\u7AEF\u8FDE\u63A5\u6240\u5728\u7684\u4E3B\u673A\u5730\u5740\u3002host \u90E8\u5206\u53EF\u4EE5\u4F7F\u7528 % \u8FDB\u884C\u6A21\u7CCA\u5339\u914D\u3002\u5982\u679C\u4E0D\u6307\u5B9A host\uFF0C\u9ED8\u8BA4\u4E3A '%'\uFF0C\u5373\u8868\u793A\u8BE5\u7528\u6237\u53EF\u4EE5\u4ECE\u4EFB\u610F host \u8FDE\u63A5\u5230 Doris\u3002\nhost \u90E8\u5206\u4E5F\u53EF\u6307\u5B9A\u4E3A domain\uFF0C\uFF0C\u5373\u4F7F\u7528\u4E2D\u62EC\u53F7\u5305\u56F4\uFF0C\u5219 Doris \u4F1A\u8BA4\u4E3A\u8FD9\u4E2A\u662F\u4E00\u4E2A domain\uFF0C\u5E76\u5C1D\u8BD5\u89E3\u6790\u5176 ip \u5730\u5740\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsxs)(e.strong,{children:["1. ",(0,c.jsx)(e.code,{children:"<password>"})]})}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsx)(e.p,{children:"\u6307\u5B9A\u7528\u6237\u5BC6\u7801"}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsxs)(e.strong,{children:["2. ",(0,c.jsx)(e.code,{children:"<password_policy>"})]})}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsx)(e.p,{children:"\u7528\u4E8E\u6307\u5B9A\u5BC6\u7801\u8BA4\u8BC1\u767B\u5F55\u76F8\u5173\u7B56\u7565\u7684\u5B50\u53E5\uFF0C\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u7B56\u7565\uFF1A"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.code,{children:"PASSWORD_HISTORY { <n> | DEFAULT }"})}),"\n",(0,c.jsxs)(e.p,{children:["\u662F\u5426\u5141\u8BB8\u5F53\u524D\u7528\u6237\u91CD\u7F6E\u5BC6\u7801\u65F6\u4F7F\u7528\u5386\u53F2\u5BC6\u7801\u3002\u5982 ",(0,c.jsx)(e.code,{children:"PASSWORD_HISTORY 10"})," \u8868\u793A\u7981\u6B62\u4F7F\u7528\u8FC7\u53BB 10 \u6B21\u8BBE\u7F6E\u8FC7\u7684\u5BC6\u7801\u4E3A\u65B0\u5BC6\u7801\u3002\u5982\u679C\u8BBE\u7F6E\u4E3A ",(0,c.jsx)(e.code,{children:"PASSWORD_HISTORY DEFAULT"}),"\uFF0C\u5219\u4F1A\u4F7F\u7528\u5168\u5C40\u53D8\u91CF ",(0,c.jsx)(e.code,{children:"password_history"})," \u4E2D\u7684\u503C\u3002",(0,c.jsx)(e.code,{children:"0"})," \u8868\u793A\u4E0D\u542F\u7528\u8FD9\u4E2A\u529F\u80FD\u3002\u9ED8\u8BA4\u4E3A 0\u3002"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.code,{children:"PASSWORD_EXPIRE { DEFAULT | NEVER | INTERVAL <n> { DAY | HOUR | SECOND }}"})}),"\n",(0,c.jsxs)(e.p,{children:["\u8BBE\u7F6E\u5F53\u524D\u7528\u6237\u5BC6\u7801\u7684\u8FC7\u671F\u65F6\u95F4\u3002\u5982 ",(0,c.jsx)(e.code,{children:"PASSWORD_EXPIRE INTERVAL 10 DAY"})," \u8868\u793A\u5BC6\u7801\u4F1A\u5728 10 \u5929\u540E\u8FC7\u671F\u3002",(0,c.jsx)(e.code,{children:"PASSWORD_EXPIRE NEVER"})," \u8868\u793A\u5BC6\u7801\u4E0D\u8FC7\u671F\u3002\u5982\u679C\u8BBE\u7F6E\u4E3A ",(0,c.jsx)(e.code,{children:"PASSWORD_EXPIRE DEFAULT"}),"\uFF0C\u5219\u4F1A\u4F7F\u7528\u5168\u5C40\u53D8\u91CF ",(0,c.jsx)(e.code,{children:"default_password_lifetime"})," \u4E2D\u7684\u503C\u3002\u9ED8\u8BA4\u4E3A NEVER\uFF08\u6216 0\uFF09\uFF0C\u8868\u793A\u4E0D\u4F1A\u8FC7\u671F\u3002"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.code,{children:"FAILED_LOGIN_ATTEMPTS <n>"})}),"\n",(0,c.jsxs)(e.p,{children:["\u8BBE\u7F6E\u5F53\u524D\u7528\u6237\u767B\u5F55\u65F6\uFF0C\u5982\u679C\u4F7F\u7528\u9519\u8BEF\u7684\u5BC6\u7801\u767B\u5F55 n \u6B21\u540E\uFF0C\u8D26\u6237\u5C06\u88AB\u9501\u5B9A\u3002\u5982 ",(0,c.jsx)(e.code,{children:"FAILED_LOGIN_ATTEMPTS 3"})," \u8868\u793A\u5982\u679C 3 \u6B21\u9519\u8BEF\u767B\u5F55\uFF0C\u5219\u8D26\u6237\u4F1A\u88AB\u9501\u5B9A\u3002\n\u88AB\u9501\u5B9A\u7684\u8D26\u6237\u53EF\u4EE5\u901A\u8FC7 ALTER USER \u8BED\u53E5\u4E3B\u52A8\u89E3\u9501\u3002"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.code,{children:"PASSWORD_LOCK_TIME { UNBOUNDED \uFF5C <n> { DAY | HOUR | SECOND }}"})}),"\n",(0,c.jsxs)(e.p,{children:["\u8BBE\u7F6E\u5982\u679C\u8D26\u6237\u88AB\u9501\u5B9A\uFF0C\u5C06\u8BBE\u7F6E\u9501\u5B9A\u65F6\u95F4\u3002\u5982 ",(0,c.jsx)(e.code,{children:"PASSWORD_LOCK_TIME 1 DAY"})," \u8868\u793A\u8D26\u6237\u4F1A\u88AB\u9501\u5B9A\u4E00\u5929\u3002"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.code,{children:"ACCOUNT_UNLOCK"})}),"\n",(0,c.jsx)(e.p,{children:"\u89E3\u9501\u7528\u6237"}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsxs)(e.strong,{children:["3. ",(0,c.jsx)(e.code,{children:"<comment>"})]})}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsx)(e.p,{children:"\u6307\u5B9A\u7528\u6237\u6CE8\u91CA"}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,c.jsx)(e.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{style:{textAlign:"left"},children:"\u6743\u9650"}),(0,c.jsx)(e.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61"}),(0,c.jsx)(e.th,{style:{textAlign:"left"},children:"\u8BF4\u660E"})]})}),(0,c.jsx)(e.tbody,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{style:{textAlign:"left"},children:"ADMIN_PRIV"}),(0,c.jsx)(e.td,{style:{textAlign:"left"},children:"\u5168\u5C40"}),(0,c.jsx)(e.td,{style:{textAlign:"left"}})]})})]}),"\n",(0,c.jsx)(e.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,c.jsxs)(e.ol,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["\u4ECE 2.0 \u7248\u672C\u5F00\u59CB\uFF0C\u6B64\u547D\u4EE4\u4E0D\u518D\u652F\u6301\u4FEE\u6539\u7528\u6237\u89D2\u8272\uFF0C\u76F8\u5173\u64CD\u4F5C\u8BF7\u4F7F\u7528",(0,c.jsx)(e.a,{href:"./GRANT.md",children:"GRANT"}),"\u548C",(0,c.jsx)(e.a,{href:"./REVOKE.md",children:"REVOKE"}),"\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u5728\u4E00\u4E2A ALTER USER \u547D\u4EE4\u4E2D\uFF0C\u53EA\u80FD\u540C\u65F6\u5BF9\u4EE5\u4E0B\u8D26\u6237\u5C5E\u6027\u4E2D\u7684\u4E00\u9879\u8FDB\u884C\u4FEE\u6539\uFF1A"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u4FEE\u6539\u5BC6\u7801"}),"\n",(0,c.jsx)(e.li,{children:"\u4FEE\u6539 PASSWORD_HISTORY"}),"\n",(0,c.jsx)(e.li,{children:"\u4FEE\u6539 PASSWORD_EXPIRE"}),"\n",(0,c.jsx)(e.li,{children:"\u4FEE\u6539 FAILED_LOGIN_ATTEMPTS \u548C PASSWORD_LOCK_TIME"}),"\n",(0,c.jsx)(e.li,{children:"\u89E3\u9501\u7528\u6237"}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u4FEE\u6539\u7528\u6237\u7684\u5BC6\u7801"}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"ALTER USER jack@'%' IDENTIFIED BY \"12345\";\n"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u4FEE\u6539\u7528\u6237\u7684\u5BC6\u7801\u7B56\u7565"}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"ALTER USER jack@'%' FAILED_LOGIN_ATTEMPTS 3 PASSWORD_LOCK_TIME 1 DAY;\n"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u89E3\u9501\u4E00\u4E2A\u7528\u6237"}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"ALTER USER jack@'%' ACCOUNT_UNLOCK\n"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u4FEE\u6539\u4E00\u4E2A\u7528\u6237\u7684\u6CE8\u91CA"}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"ALTER USER jack@'%' COMMENT \"this is my first user\"\n"})})]})}function a(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return d},a:function(){return i}});var l=s(667294);let c={},t=l.createContext(c);function i(n){let e=l.useContext(t);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:i(n.components),l.createElement(t.Provider,{value:e},n.children)}}}]);