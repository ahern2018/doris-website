"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["773960"],{100309:function(e,n,l){l.r(n),l.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>h,assets:()=>t,toc:()=>a,frontMatter:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-statements/recycle/RECOVER","title":"RECOVER","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/recycle/RECOVER.md","sourceDirName":"sql-manual/sql-statements/recycle","slug":"/sql-manual/sql-statements/recycle/RECOVER","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/recycle/RECOVER","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"RECOVER","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DROP CATALOG RECYCLE BIN","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/recycle/DROP-CATALOG-RECYCLE-BIN"},"next":{"title":"CREATE FUNCTION","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/function/CREATE-FUNCTION"}}'),d=l("785893"),i=l("250065");let c={title:"RECOVER",language:"zh-CN"},r=void 0,t={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5\uFF1A",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function x(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,d.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u6062\u590D\u4E4B\u524D\u5220\u9664\u7684 database\u3001table \u6216\u8005 partition\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u652F\u6301\u901A\u8FC7 name\u3001id \u6765\u6062\u590D\u6307\u5B9A\u7684\u5143\u4FE1\u606F\uFF0C\u5E76\u4E14\u652F\u6301\u5C06\u6062\u590D\u7684\u5143\u4FE1\u606F\u91CD\u547D\u540D\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"RECOVER { DATABASE <db_name> [<db_id>] [AS <new_db_name>] \n        | TABLE [<db_name>.]<table_name> [<table_id>] [AS <new_table_name>] \n        | PARTITION <partition_name> [<partition_id>] FROM [<db_name>.]<table_name> [AS <new_partition_name>] }\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,d.jsx)(n.p,{children:"\u6062\u590D\u6570\u636E\u5E93"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.strong,{children:["1. ",(0,d.jsx)(n.code,{children:"<db_name>"})]})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"\u8981\u6062\u590D\u7684\u6570\u636E\u5E93\u540D\u79F0\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u6062\u590D\u6570\u636E\u8868"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.strong,{children:["1. ",(0,d.jsx)(n.code,{children:"<table_name>"})]})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"\u8981\u6062\u590D\u7684\u8868\u540D\u79F0\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u6062\u590D\u5206\u533A"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.strong,{children:["1. ",(0,d.jsx)(n.code,{children:"<partition_name>"})]})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"\u8981\u6062\u590D\u7684\u6570\u636E\u5E93\u540D\u79F0\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.strong,{children:["2. ",(0,d.jsx)(n.code,{children:"<table_name>"})]})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"\u8981\u6062\u590D\u7684\u5206\u533A\u6240\u5728\u7684\u8868\u540D\u79F0\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,d.jsx)(n.p,{children:"\u6062\u590D\u6570\u636E\u5E93"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.strong,{children:["1. ",(0,d.jsx)(n.code,{children:"<db_id>"})]})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"\u8981\u6062\u590D\u7684\u6570\u636E\u5E93 ID\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.strong,{children:["2. ",(0,d.jsx)(n.code,{children:"<new_db_name>"})]})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"\u6062\u590D\u540E\u65B0\u7684\u6570\u636E\u5E93\u540D\u79F0\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u6062\u590D\u6570\u636E\u8868"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.strong,{children:["1. ",(0,d.jsx)(n.code,{children:"<db_name>"})]})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"\u8981\u6062\u590D\u7684\u8868\u6240\u5728\u7684\u6570\u636E\u5E93\u540D\u79F0\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.strong,{children:["2. ",(0,d.jsx)(n.code,{children:"<table_id>"})]})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"\u8981\u6062\u590D\u7684\u8868 ID\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.strong,{children:["3. ",(0,d.jsx)(n.code,{children:"<new_table_name>"})]})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"\u6062\u590D\u540E\u65B0\u7684\u6570\u636E\u8868\u540D\u79F0\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u6062\u590D\u5206\u533A"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.strong,{children:["1. ",(0,d.jsx)(n.code,{children:"<partition_id>"})]})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"\u8981\u6062\u590D\u7684\u5206\u533A ID\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.strong,{children:["2. ",(0,d.jsx)(n.code,{children:"<db_name>"})]})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"\u8981\u6062\u590D\u5206\u533A\u6240\u5728\u8868\u7684\u6570\u636E\u5E93\u540D\u79F0\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.strong,{children:["3. ",(0,d.jsx)(n.code,{children:"<new_partition_name>"})]})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"\u6062\u590D\u540E\u65B0\u7684\u5206\u533A\u540D\u79F0\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u6743\u9650"}),(0,d.jsx)(n.th,{children:"\u5BF9\u8C61"}),(0,d.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ADMIN_PRIV"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{})]})})]}),"\n",(0,d.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u8BE5\u64CD\u4F5C\u4EC5\u80FD\u6062\u590D\u4E4B\u524D\u4E00\u6BB5\u65F6\u95F4\u5185\u5220\u9664\u7684\u5143\u4FE1\u606F\u3002\u9ED8\u8BA4\u4E3A 1 \u5929\u3002\uFF08\u53EF\u901A\u8FC7 fe.conf \u4E2D",(0,d.jsx)(n.code,{children:"catalog_trash_expire_second"}),"\u53C2\u6570\u914D\u7F6E\uFF09"]}),"\n",(0,d.jsx)(n.li,{children:"\u5982\u679C\u6062\u590D\u5143\u4FE1\u606F\u65F6\u6CA1\u6709\u6307\u5B9A id\uFF0C\u5219\u9ED8\u8BA4\u6062\u590D\u6700\u540E\u4E00\u4E2A\u5220\u9664\u7684\u540C\u540D\u5143\u6570\u636E\u3002"}),"\n",(0,d.jsxs)(n.li,{children:["\u53EF\u4EE5\u901A\u8FC7 ",(0,d.jsx)(n.code,{children:"SHOW CATALOG RECYCLE BIN"})," \u6765\u67E5\u8BE2\u5F53\u524D\u53EF\u6062\u590D\u7684\u5143\u4FE1\u606F\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u6062\u590D\u540D\u4E3A example_db \u7684 database"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"RECOVER DATABASE example_db;\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u6062\u590D\u540D\u4E3A example_tbl \u7684 table"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"RECOVER TABLE example_db.example_tbl;\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u6062\u590D\u8868 example_tbl \u4E2D\u540D\u4E3A p1 \u7684 partition"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"RECOVER PARTITION p1 FROM example_tbl;\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u6062\u590D example_db_id \u4E14\u540D\u4E3A example_db \u7684 database"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"RECOVER DATABASE example_db example_db_id;\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u6062\u590D example_tbl_id \u4E14\u540D\u4E3A example_tbl \u7684 table"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"RECOVER TABLE example_db.example_tbl example_tbl_id;\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u6062\u590D\u8868 example_tbl \u4E2D p1_id \u4E14\u540D\u4E3A p1 \u7684 partition"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"RECOVER PARTITION p1 p1_id FROM example_tbl;\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u6062\u590D example_db_id \u4E14\u540D\u4E3A example_db \u7684 database\uFF0C\u5E76\u8BBE\u5B9A\u65B0\u540D\u5B57 new_example_db"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"RECOVER DATABASE example_db example_db_id AS new_example_db;\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u6062\u590D\u540D\u4E3A example_tbl \u7684 table\uFF0C\u5E76\u8BBE\u5B9A\u65B0\u540D\u5B57 new_example_tbl"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"RECOVER TABLE example_db.example_tbl AS new_example_tbl;\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u6062\u590D\u8868 example_tbl \u4E2D p1_id \u4E14\u540D\u4E3A p1 \u7684 partition\uFF0C\u5E76\u8BBE\u5B9A\u65B0\u540D\u5B57 new_p1"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"RECOVER PARTITION p1 p1_id AS new_p1 FROM example_tbl;\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return r},a:function(){return c}});var s=l(667294);let d={},i=s.createContext(d);function c(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);