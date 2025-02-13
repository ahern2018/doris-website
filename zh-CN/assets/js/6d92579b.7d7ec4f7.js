"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["892736"],{288524:function(n,e,t){t.r(e),t.d(e,{metadata:()=>l,contentTitle:()=>r,default:()=>x,assets:()=>a,toc:()=>c,frontMatter:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/data-and-status-management/SET-TABLE-STATUS","title":"SET TABLE STATUS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/table-and-view/data-and-status-management/SET-TABLE-STATUS.md","sourceDirName":"sql-manual/sql-statements/table-and-view/data-and-status-management","slug":"/sql-manual/sql-statements/table-and-view/data-and-status-management/SET-TABLE-STATUS","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/data-and-status-management/SET-TABLE-STATUS","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SET TABLE STATUS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CANCEL REPAIR TABLE","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/data-and-status-management/CANCEL-REPAIR-TABLE"},"next":{"title":"SET TABLE PARTITION VERSION","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/data-and-status-management/SET-TABLE-PARTITION-VERSION"}}'),s=t("785893"),d=t("250065");let i={title:"SET TABLE STATUS",language:"zh-CN"},r=void 0,a={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function h(n){let e={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"SET TABLE STATUS"})," \u8BED\u53E5\u7528\u4E8E\u624B\u52A8\u8BBE\u7F6E OLAP \u8868\u7684\u72B6\u6001\u3002\u8BE5\u8BED\u53E5\u5177\u6709\u4EE5\u4E0B\u529F\u80FD\uFF1A"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4EC5\u652F\u6301 OLAP \u8868\u7684\u72B6\u6001\u8BBE\u7F6E"}),"\n",(0,s.jsx)(e.li,{children:"\u53EF\u4EE5\u5C06\u8868\u72B6\u6001\u4FEE\u6539\u4E3A\u6307\u5B9A\u7684\u76EE\u6807\u72B6\u6001"}),"\n",(0,s.jsx)(e.li,{children:"\u7528\u4E8E\u89E3\u9664\u56E0\u8868\u72B6\u6001\u5BFC\u81F4\u7684\u4EFB\u52A1\u963B\u585E"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u652F\u6301\u7684\u72B6\u6001"}),"\uFF1A"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u72B6\u6001"}),(0,s.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"NORMAL"}),(0,s.jsx)(e.td,{children:"\u8868\u793A\u8868\u5904\u4E8E\u6B63\u5E38\u72B6\u6001"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"ROLLUP"}),(0,s.jsx)(e.td,{children:"\u8868\u793A\u8868\u6B63\u5728\u8FDB\u884C ROLLUP \u64CD\u4F5C"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"SCHEMA_CHANGE"}),(0,s.jsx)(e.td,{children:"\u8868\u793A\u8868\u6B63\u5728\u8FDB\u884C Schema \u53D8\u66F4"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"BACKUP"}),(0,s.jsx)(e.td,{children:"\u8868\u793A\u8868\u6B63\u5728\u8FDB\u884C\u5907\u4EFD"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"RESTORE"}),(0,s.jsx)(e.td,{children:"\u8868\u793A\u8868\u6B63\u5728\u8FDB\u884C\u6062\u590D"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"WAITING_STABLE"}),(0,s.jsx)(e.td,{children:"\u8868\u793A\u8868\u6B63\u5728\u7B49\u5F85\u7A33\u5B9A\u72B6\u6001"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'ADMIN SET TABLE <table_name> STATUS PROPERTIES ("<key>" = "<value>" [, ...]);\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u5176\u4E2D\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'<key>\n  : "state"\n\n<value>\n  : "NORMAL"\n  | "ROLLUP"\n  | "SCHEMA_CHANGE"\n  | "BACKUP"\n  | "RESTORE"\n  | "WAITING_STABLE"\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.strong,{children:["1. ",(0,s.jsx)(e.code,{children:"<table_name>"})]})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u6307\u5B9A\u8981\u8BBE\u7F6E\u72B6\u6001\u7684\u8868\u540D\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u8868\u540D\u5728\u5176\u6240\u5728\u7684\u6570\u636E\u5E93\u4E2D\u5FC5\u987B\u552F\u4E00\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.strong,{children:["2. ",(0,s.jsx)(e.code,{children:'PROPERTIES ("state" = "<value>")'})]})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u6307\u5B9A\u8868\u7684\u76EE\u6807\u72B6\u6001\u3002"}),"\n",(0,s.jsx)(e.p,{children:'\u5FC5\u987B\u8BBE\u7F6E "state" \u5C5E\u6027\uFF0C\u4E14\u503C\u5FC5\u987B\u662F\u652F\u6301\u7684\u72B6\u6001\u4E4B\u4E00\u3002'}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"ADMIN"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u7CFB\u7EDF"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u7528\u6237\u5FC5\u987B\u62E5\u6709 ADMIN \u6743\u9650\u624D\u80FD\u6267\u884C\u8BE5\u547D\u4EE4"})]})})]}),"\n",(0,s.jsx)(e.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u6B64\u547D\u4EE4\u4EC5\u7528\u4E8E\u7D27\u6025\u6545\u969C\u4FEE\u590D\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C"}),"\n",(0,s.jsx)(e.li,{children:"\u4EC5\u652F\u6301 OLAP \u8868\uFF0C\u4E0D\u652F\u6301\u5176\u4ED6\u7C7B\u578B\u7684\u8868"}),"\n",(0,s.jsx)(e.li,{children:"\u5982\u679C\u8868\u5DF2\u7ECF\u5904\u4E8E\u76EE\u6807\u72B6\u6001\uFF0C\u8BE5\u547D\u4EE4\u5C06\u88AB\u5FFD\u7565"}),"\n",(0,s.jsx)(e.li,{children:"\u4E0D\u5F53\u7684\u72B6\u6001\u8BBE\u7F6E\u53EF\u80FD\u4F1A\u5BFC\u81F4\u7CFB\u7EDF\u5F02\u5E38\uFF0C\u5EFA\u8BAE\u5728\u6280\u672F\u652F\u6301\u6307\u5BFC\u4E0B\u4F7F\u7528"}),"\n",(0,s.jsx)(e.li,{children:"\u4FEE\u6539\u72B6\u6001\u540E\uFF0C\u5EFA\u8BAE\u53CA\u65F6\u89C2\u5BDF\u7CFB\u7EDF\u8FD0\u884C\u60C5\u51B5"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5C06\u8868\u72B6\u6001\u8BBE\u7F6E\u4E3A NORMAL\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'ADMIN SET TABLE tbl1 STATUS PROPERTIES("state" = "NORMAL");\n'})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5C06\u8868\u72B6\u6001\u8BBE\u7F6E\u4E3A SCHEMA_CHANGE\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'ADMIN SET TABLE tbl2 STATUS PROPERTIES("state" = "SCHEMA_CHANGE");\n'})}),"\n"]}),"\n"]})]})}function x(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return i}});var l=t(667294);let s={},d=l.createContext(s);function i(n){let e=l.useContext(d);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),l.createElement(d.Provider,{value:e},n.children)}}}]);