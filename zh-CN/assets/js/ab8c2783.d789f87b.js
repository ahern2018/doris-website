"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["884991"],{901379:function(e,n,t){t.r(n),t.d(n,{metadata:()=>l,contentTitle:()=>a,default:()=>h,assets:()=>r,toc:()=>c,frontMatter:()=>d});var l=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/index/DROP-INDEX","title":"DROP INDEX","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/table-and-view/index/DROP-INDEX.md","sourceDirName":"sql-manual/sql-statements/table-and-view/index","slug":"/sql-manual/sql-statements/table-and-view/index/DROP-INDEX","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/index/DROP-INDEX","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"DROP INDEX","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CREATE INDEX","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/index/CREATE-INDEX"},"next":{"title":"SHOW INDEX","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/index/SHOW-INDEX"}}'),s=t("785893"),i=t("250065");let d={title:"DROP INDEX",language:"zh-CN"},a=void 0,r={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u4ECE\u4E00\u4E2A\u8868\u4E2D\u5220\u9664\u6307\u5B9A\u540D\u79F0\u7684\u7D22\u5F15\uFF0C\u76EE\u524D\u4EC5\u652F\u6301 bitmap \u7D22\u5F15\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DROP INDEX [ IF EXISTS ] <index_name> ON [ <db_name> . ] <table_name>;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["1. ",(0,s.jsx)(n.code,{children:"<index_name>"})]}),"\uFF1A\u7D22\u5F15\u540D\u79F0\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["2. ",(0,s.jsx)(n.code,{children:"<table_name>"})]}),"\uFF1A\u7D22\u5F15\u5F52\u5C5E\u7684\u8868\u540D\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["1. ",(0,s.jsx)(n.code,{children:"<db_name>"})]}),"\uFF1A\u5E93\u540D\uFF0C\u9009\u586B\uFF0C\u4E0D\u586B\u9ED8\u8BA4\u5F53\u524D\u5E93\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"ALTER_PRIV"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u8868\uFF08Table\uFF09"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"DROP INDEX \u5C5E\u4E8E\u8868 ALTER \u64CD\u4F5C"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5220\u9664\u7D22\u5F15"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DROP INDEX IF NOT EXISTS index_name ON table1 ;\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return d}});var l=t(667294);let s={},i=l.createContext(s);function d(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);