"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["801884"],{740671:function(e,n,t){t.r(n),t.d(n,{metadata:()=>l,contentTitle:()=>d,default:()=>o,assets:()=>r,toc:()=>c,frontMatter:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/data-and-status-management/CANCEL-REPAIR-TABLE","title":"CANCEL REPAIR TABLE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/CANCEL-REPAIR-TABLE.md","sourceDirName":"sql-manual/sql-statements/table-and-view/data-and-status-management","slug":"/sql-manual/sql-statements/table-and-view/data-and-status-management/CANCEL-REPAIR-TABLE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/CANCEL-REPAIR-TABLE","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"CANCEL REPAIR TABLE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"REPAIR TABLE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/REPAIR-TABLE"},"next":{"title":"SET TABLE STATUS","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/SET-TABLE-STATUS"}}'),s=t("785893"),a=t("250065");let i={title:"CANCEL REPAIR TABLE",language:"zh-CN"},d=void 0,r={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function h(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"CANCEL REPAIR TABLE"})," \u8BED\u53E5\u7528\u4E8E\u53D6\u6D88\u5BF9\u6307\u5B9A\u8868\u6216\u5206\u533A\u7684\u9AD8\u4F18\u5148\u7EA7\u4FEE\u590D\u3002\u8BE5\u8BED\u53E5\u5177\u6709\u4EE5\u4E0B\u529F\u80FD\uFF1A"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u53EF\u4EE5\u53D6\u6D88\u6574\u4E2A\u8868\u7684\u9AD8\u4F18\u5148\u7EA7\u4FEE\u590D"}),"\n",(0,s.jsx)(n.li,{children:"\u53EF\u4EE5\u53D6\u6D88\u6307\u5B9A\u5206\u533A\u7684\u9AD8\u4F18\u5148\u7EA7\u4FEE\u590D"}),"\n",(0,s.jsx)(n.li,{children:"\u4E0D\u5F71\u54CD\u7CFB\u7EDF\u9ED8\u8BA4\u7684\u526F\u672C\u4FEE\u590D\u673A\u5236"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ADMIN CANCEL REPAIR TABLE <table_name> [ PARTITION (<partition_name> [, ...]) ];\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["1. ",(0,s.jsx)(n.code,{children:"<table_name>"})]})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u6307\u5B9A\u8981\u53D6\u6D88\u4FEE\u590D\u7684\u8868\u540D\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8868\u540D\u5728\u5176\u6240\u5728\u7684\u6570\u636E\u5E93\u4E2D\u5FC5\u987B\u552F\u4E00\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["1. ",(0,s.jsx)(n.code,{children:"PARTITION (<partition_name> [, ...])"})]})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u6307\u5B9A\u8981\u53D6\u6D88\u4FEE\u590D\u7684\u5206\u533A\u540D\u79F0\u5217\u8868\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679C\u4E0D\u6307\u5B9A\u6B64\u53C2\u6570\uFF0C\u5219\u53D6\u6D88\u6574\u4E2A\u8868\u7684\u9AD8\u4F18\u5148\u7EA7\u4FEE\u590D\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"ADMIN"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u7CFB\u7EDF"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u7528\u6237\u5FC5\u987B\u62E5\u6709 ADMIN \u6743\u9650\u624D\u80FD\u6267\u884C\u8BE5\u547D\u4EE4"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u8BE5\u8BED\u53E5\u4EC5\u53D6\u6D88\u9AD8\u4F18\u5148\u7EA7\u4FEE\u590D\uFF0C\u4E0D\u4F1A\u505C\u6B62\u7CFB\u7EDF\u7684\u9ED8\u8BA4\u526F\u672C\u4FEE\u590D\u673A\u5236"}),"\n",(0,s.jsx)(n.li,{children:"\u53D6\u6D88\u540E\uFF0C\u7CFB\u7EDF\u4ECD\u4F1A\u4EE5\u9ED8\u8BA4\u8C03\u5EA6\u65B9\u5F0F\u4FEE\u590D\u526F\u672C"}),"\n",(0,s.jsxs)(n.li,{children:["\u5982\u679C\u9700\u8981\u91CD\u65B0\u8BBE\u7F6E\u9AD8\u4F18\u5148\u7EA7\u4FEE\u590D\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"ADMIN REPAIR TABLE"})," \u547D\u4EE4"]}),"\n",(0,s.jsx)(n.li,{children:"\u8BE5\u547D\u4EE4\u6267\u884C\u540E\u7ACB\u5373\u751F\u6548"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u53D6\u6D88\u6574\u4E2A\u8868\u7684\u9AD8\u4F18\u5148\u7EA7\u4FEE\u590D\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ADMIN CANCEL REPAIR TABLE tbl;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u53D6\u6D88\u6307\u5B9A\u5206\u533A\u7684\u9AD8\u4F18\u5148\u7EA7\u4FEE\u590D\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ADMIN CANCEL REPAIR TABLE tbl PARTITION(p1, p2);\n"})}),"\n"]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var l=t(667294);let s={},a=l.createContext(s);function i(e){let n=l.useContext(a);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);