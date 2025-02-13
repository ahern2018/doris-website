"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["674600"],{594204:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>d});var s=JSON.parse('{"id":"sql-manual/sql-statements/account-management/SET-PASSWORD","title":"SET PASSWORD","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/account-management/SET-PASSWORD.md","sourceDirName":"sql-manual/sql-statements/account-management","slug":"/sql-manual/sql-statements/account-management/SET-PASSWORD","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/account-management/SET-PASSWORD","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SET PASSWORD","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DROP USER","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/account-management/DROP-USER"},"next":{"title":"CREATE ROLE","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/account-management/CREATE-ROLE"}}'),l=t("785893"),i=t("250065");let d={title:"SET PASSWORD",language:"zh-CN"},r=void 0,c={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"SET PASSWORD \u8BED\u53E5\u7528\u4E8E\u4FEE\u6539\u4E00\u4E2A\u7528\u6237\u7684\u767B\u5F55\u5BC6\u7801\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SET PASSWORD [FOR <user_identity>] =\n    [ PASSWORD(<plain_password>)] | [<hashed_password> ]\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["1. ",(0,l.jsx)(n.code,{children:"<plain_password>"})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u8F93\u5165\u7684\u662F\u660E\u6587\u5BC6\u7801,\u4EE5\u5BC6\u7801 ",(0,l.jsx)(n.code,{children:"123456"})," \u4E3A\u4F8B\uFF0C\u76F4\u63A5\u4F7F\u7528 \u5B57\u7B26\u4E32",(0,l.jsx)(n.code,{children:"123456"}),"\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["2. ",(0,l.jsx)(n.code,{children:"<hashed_password>"})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u8F93\u5165\u7684\u662F\u5DF2\u52A0\u5BC6\u7684\u5BC6\u7801\u3002\u4EE5\u5BC6\u7801 ",(0,l.jsx)(n.code,{children:"123456"})," \u4E3A\u4F8B\uFF0C\u76F4\u63A5\u4F7F\u7528\u5B57\u7B26\u4E32",(0,l.jsx)(n.code,{children:"*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9"}),", \u5B57\u7B26\u4E32\u4E3A\u51FD\u6570 ",(0,l.jsx)(n.code,{children:"PASSWORD('123456')"})," \u7684\u8FD4\u56DE\u503C\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["1. ",(0,l.jsx)(n.code,{children:"<user_identity>"})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u5FC5\u987B\u5B8C\u5168\u5339\u914D\u5728\u4F7F\u7528 CREATE USER \u521B\u5EFA\u7528\u6237\u65F6\u6307\u5B9A\u7684 user_identity\uFF0C\u5426\u5219\u4F1A\u62A5\u9519\u7528\u6237\u4E0D\u5B58\u5728\u3002\u5982\u679C\u4E0D\u6307\u5B9A user_identity\uFF0C\u5219\u5F53\u524D\u7528\u6237\u4E3A 'username'@'ip'\uFF0C\u8FD9\u4E2A\u5F53\u524D\u7528\u6237\uFF0C\u53EF\u80FD\u65E0\u6CD5\u5339\u914D\u4EFB\u4F55 user_identity\u3002\u53EF\u4EE5\u901A\u8FC7 SHOW GRANTS \u67E5\u770B\u5F53\u524D\u7528\u6237\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"ADMIN_PRIV"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u7528\u6237\uFF08User\uFF09\u6216 \u89D2\u8272\uFF08Role\uFF09"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u7528\u6237\u6216\u8005\u89D2\u8272\u62E5\u6709 ADMIN_PRIV \u6743\u9650\u624D\u80FD\u4FEE\u6539\u6240\u6709\u7528\u6237\u7684\u5BC6\u7801\uFF0C\u5426\u5219\u53EA\u80FD\u4FEE\u6539\u5F53\u524D\u7528\u6237\u7684\u5BC6\u7801"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u5982\u679C ",(0,l.jsx)(n.code,{children:"FOR user_identity"})," \u5B57\u6BB5\u4E0D\u5B58\u5728\uFF0C\u90A3\u4E48\u4FEE\u6539\u5F53\u524D\u7528\u6237\u7684\u5BC6\u7801\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u4FEE\u6539\u5F53\u524D\u7528\u6237\u7684\u5BC6\u7801"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SET PASSWORD = PASSWORD('123456')\nSET PASSWORD = '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9'\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u4FEE\u6539\u6307\u5B9A\u7528\u6237\u5BC6\u7801"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SET PASSWORD FOR 'jack'@'192.%' = PASSWORD('123456')\nSET PASSWORD FOR 'jack'@['domain'] = '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9'\n"})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return d}});var s=t(667294);let l={},i=s.createContext(l);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);