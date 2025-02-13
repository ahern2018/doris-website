"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["863203"],{414521:function(e,n,l){l.r(n),l.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>p,assets:()=>c,toc:()=>t,frontMatter:()=>d});var s=JSON.parse('{"id":"sql-manual/sql-statements/recycle/RECOVER","title":"RECOVER","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/recycle/RECOVER.md","sourceDirName":"sql-manual/sql-statements/recycle","slug":"/sql-manual/sql-statements/recycle/RECOVER","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/recycle/RECOVER","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"RECOVER","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DROP CATALOG RECYCLE BIN","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/recycle/DROP-CATALOG-RECYCLE-BIN"},"next":{"title":"CREATE FUNCTION","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/function/CREATE-FUNCTION"}}'),a=l("785893"),i=l("250065");let d={title:"RECOVER",language:"zh-CN"},r=void 0,c={},t=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:3}];function x(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,a.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u6062\u590D\u4E4B\u524D\u5220\u9664\u7684 database\u3001table \u6216\u8005 partition\u3002\u652F\u6301\u901A\u8FC7 name\u3001id \u6765\u6062\u590D\u6307\u5B9A\u7684\u5143\u4FE1\u606F\uFF0C\u5E76\u4E14\u652F\u6301\u5C06\u6062\u590D\u7684\u5143\u4FE1\u606F\u91CD\u547D\u540D\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u53EF\u4EE5\u901A\u8FC7 ",(0,a.jsx)(n.code,{children:"SHOW CATALOG RECYCLE BIN"})," \u6765\u67E5\u8BE2\u5F53\u524D\u53EF\u6062\u590D\u7684\u5143\u4FE1\u606F\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u4EE5 name \u6062\u590D database"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"RECOVER DATABASE db_name;\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u4EE5 name \u6062\u590D table"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"RECOVER TABLE [db_name.]table_name;\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u4EE5 name \u6062\u590D partition"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"RECOVER PARTITION partition_name FROM [db_name.]table_name;\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u4EE5 name \u548C id \u6062\u590D database"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"RECOVER DATABASE db_name db_id;\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u4EE5 name \u548C id \u6062\u590D table"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"RECOVER TABLE [db_name.]table_name table_id;\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u4EE5 name \u548C id \u6062\u590D partition"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"RECOVER PARTITION partition_name partition_id FROM [db_name.]table_name;\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u4EE5 name \u6062\u590D database \u5E76\u8BBE\u5B9A\u65B0\u540D\u5B57"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"RECOVER DATABASE db_name AS new_db_name;\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u4EE5 name \u548C id \u6062\u590D table \u5E76\u8BBE\u5B9A\u65B0\u540D\u5B57"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"RECOVER TABLE [db_name.]table_name table_id AS new_table_name;\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u4EE5 name \u548C id \u6062\u590D partition \u5E76\u8BBE\u5B9A\u65B0\u540D\u5B57"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"RECOVER PARTITION partition_name partition_id AS new_partition_name FROM [db_name.]table_name;\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u8BF4\u660E\uFF1A"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\u8BE5\u64CD\u4F5C\u4EC5\u80FD\u6062\u590D\u4E4B\u524D\u4E00\u6BB5\u65F6\u95F4\u5185\u5220\u9664\u7684\u5143\u4FE1\u606F\u3002\u9ED8\u8BA4\u4E3A 1 \u5929\u3002\uFF08\u53EF\u901A\u8FC7 fe.conf \u4E2D",(0,a.jsx)(n.code,{children:"catalog_trash_expire_second"}),"\u53C2\u6570\u914D\u7F6E\uFF09"]}),"\n",(0,a.jsx)(n.li,{children:"\u5982\u679C\u6062\u590D\u5143\u4FE1\u606F\u65F6\u6CA1\u6709\u6307\u5B9A id\uFF0C\u5219\u9ED8\u8BA4\u6062\u590D\u6700\u540E\u4E00\u4E2A\u5220\u9664\u7684\u540C\u540D\u5143\u6570\u636E\u3002"}),"\n",(0,a.jsxs)(n.li,{children:["\u53EF\u4EE5\u901A\u8FC7 ",(0,a.jsx)(n.code,{children:"SHOW CATALOG RECYCLE BIN"})," \u6765\u67E5\u8BE2\u5F53\u524D\u53EF\u6062\u590D\u7684\u5143\u4FE1\u606F\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"\u6062\u590D\u540D\u4E3A example_db \u7684 database"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"RECOVER DATABASE example_db;\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"\u6062\u590D\u540D\u4E3A example_tbl \u7684 table"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"RECOVER TABLE example_db.example_tbl;\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"\u6062\u590D\u8868 example_tbl \u4E2D\u540D\u4E3A p1 \u7684 partition"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"RECOVER PARTITION p1 FROM example_tbl;\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"\u6062\u590D example_db_id \u4E14\u540D\u4E3A example_db \u7684 database"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"RECOVER DATABASE example_db example_db_id;\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"5",children:["\n",(0,a.jsx)(n.li,{children:"\u6062\u590D example_tbl_id \u4E14\u540D\u4E3A example_tbl \u7684 table"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"RECOVER TABLE example_db.example_tbl example_tbl_id;\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"6",children:["\n",(0,a.jsx)(n.li,{children:"\u6062\u590D\u8868 example_tbl \u4E2D p1_id \u4E14\u540D\u4E3A p1 \u7684 partition"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"RECOVER PARTITION p1 p1_id FROM example_tbl;\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"7",children:["\n",(0,a.jsx)(n.li,{children:"\u6062\u590D example_db_id \u4E14\u540D\u4E3A example_db \u7684 database\uFF0C\u5E76\u8BBE\u5B9A\u65B0\u540D\u5B57 new_example_db"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"RECOVER DATABASE example_db example_db_id AS new_example_db;\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"8",children:["\n",(0,a.jsx)(n.li,{children:"\u6062\u590D\u540D\u4E3A example_tbl \u7684 table\uFF0C\u5E76\u8BBE\u5B9A\u65B0\u540D\u5B57 new_example_tbl"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"RECOVER TABLE example_db.example_tbl AS new_example_tbl;\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"9",children:["\n",(0,a.jsx)(n.li,{children:"\u6062\u590D\u8868 example_tbl \u4E2D p1_id \u4E14\u540D\u4E3A p1 \u7684 partition\uFF0C\u5E76\u8BBE\u5B9A\u65B0\u540D\u5B57 new_p1"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"RECOVER PARTITION p1 p1_id AS new_p1 FROM example_tbl;\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"RECOVER\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return r},a:function(){return d}});var s=l(667294);let a={},i=s.createContext(a);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);