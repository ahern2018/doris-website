"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["994180"],{576207:function(e,n,l){l.r(n),l.d(n,{metadata:()=>a,contentTitle:()=>d,default:()=>o,assets:()=>r,toc:()=>t,frontMatter:()=>c});var a=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-COLUMN","title":"ALTER TABLE COLUMN","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-COLUMN.md","sourceDirName":"sql-manual/sql-statements/table-and-view/table","slug":"/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-COLUMN","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-COLUMN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ALTER TABLE COLUMN","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DESCRIBE","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/table/DESC-TABLE"},"next":{"title":"ALTER TABLE PARTITION","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-PARTITION"}}'),s=l("785893"),i=l("250065");let c={title:"ALTER TABLE COLUMN",language:"zh-CN"},d=void 0,r={},t=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5\uFF1A",id:"\u8BED\u6CD5",level:3},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:3}];function x(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsxs)(n.p,{children:["\u8BE5\u8BED\u53E5\u7528\u4E8E\u5BF9\u5DF2\u6709 table \u8FDB\u884C Schema change \u64CD\u4F5C\u3002schema change \u662F\u5F02\u6B65\u7684\uFF0C\u4EFB\u52A1\u63D0\u4EA4\u6210\u529F\u5219\u8FD4\u56DE\uFF0C\u4E4B\u540E\u53EF\u4F7F\u7528",(0,s.jsx)(n.a,{href:"../../../../sql-manual/sql-statements/table-and-view/table/SHOW-ALTER-TABLE",children:"SHOW ALTER TABLE COLUMN"})," \u547D\u4EE4\u67E5\u770B\u8FDB\u5EA6\u3002"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Doris \u5728\u5EFA\u8868\u4E4B\u540E\u6709\u7269\u5316\u7D22\u5F15\u7684\u6982\u5FF5\uFF0C\u5728\u5EFA\u8868\u6210\u529F\u540E\u4E3A base \u8868\uFF0C\u7269\u5316\u7D22\u5F15\u4E3A base index\uFF0C\u57FA\u4E8E base \u8868\u53EF\u4EE5\u521B\u5EFA rollup index\u3002\u5176\u4E2D base index \u548C rollup index \u90FD\u662F\u7269\u5316\u7D22\u5F15\uFF0C\u5728\u8FDB\u884C schema change \u64CD\u4F5C\u65F6\u5982\u679C\u4E0D\u6307\u5B9A rollup_index_name \u9ED8\u8BA4\u57FA\u4E8E base \u8868\u8FDB\u884C\u64CD\u4F5C\u3002\nDoris \u5728 1.2.0 \u652F\u6301\u4E86 light schema change \u8F7B\u91CF\u8868\u7ED3\u6784\u53D8\u66F4\uFF0C\u5BF9\u4E8E\u503C\u5217\u7684\u52A0\u51CF\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u66F4\u5FEB\u5730\uFF0C\u540C\u6B65\u5730\u5B8C\u6210\u3002\u53EF\u4EE5\u5728\u5EFA\u8868\u65F6\u624B\u52A8\u6307\u5B9A \"light_schema_change\" = 'true'\uFF0C2.0.0 \u53CA\u4E4B\u540E\u7248\u672C\u8BE5\u53C2\u6570\u9ED8\u8BA4\u5F00\u542F\u3002"})}),"\n",(0,s.jsx)(n.h3,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE [database.]table alter_clause;\n"})}),"\n",(0,s.jsx)(n.p,{children:"schema change \u7684 alter_clause \u652F\u6301\u5982\u4E0B\u51E0\u79CD\u4FEE\u6539\u65B9\u5F0F\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"1. \u6DFB\u52A0\u5217\uFF0C\u5411\u6307\u5B9A\u7684 index \u4F4D\u7F6E\u8FDB\u884C\u5217\u6DFB\u52A0"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u8BED\u6CD5"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE [database.]table table_name ADD COLUMN column_name column_type [KEY | agg_type] [DEFAULT "default_value"]\n[AFTER column_name|FIRST]\n[TO rollup_index_name]\n[PROPERTIES ("key"="value", ...)]\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u5411 example_db.my_table \u7684 key_1 \u540E\u6DFB\u52A0\u4E00\u4E2A key \u5217 new_col (\u975E\u805A\u5408\u6A21\u578B)"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nADD COLUMN new_col INT KEY DEFAULT "0" AFTER key_1;\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"\u5411 example_db.my_table \u7684 value_1 \u540E\u6DFB\u52A0\u4E00\u4E2A value \u5217 new_col (\u975E\u805A\u5408\u6A21\u578B)"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nADD COLUMN new_col INT DEFAULT "0" AFTER value_1;\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"\u5411 example_db.my_table \u7684 key_1 \u540E\u6DFB\u52A0\u4E00\u4E2A key \u5217 new_col (\u805A\u5408\u6A21\u578B)"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nADD COLUMN new_col INT KEY DEFAULT "0" AFTER key_1;\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"\u5411 example_db.my_table \u7684 value_1 \u540E\u6DFB\u52A0\u4E00\u4E2A value \u5217 new_col SUM \u805A\u5408\u7C7B\u578B (\u805A\u5408\u6A21\u578B)"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table   \nADD COLUMN new_col INT SUM DEFAULT "0" AFTER value_1; \n'})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"\u5C06 new_col \u6DFB\u52A0\u5230 example_db.my_table \u8868\u7684\u9996\u5217\u4F4D\u7F6E (\u975E\u805A\u5408\u6A21\u578B)"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nADD COLUMN new_col INT KEY DEFAULT "0" FIRST;\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u805A\u5408\u6A21\u578B\u5982\u679C\u589E\u52A0 value \u5217\uFF0C\u9700\u8981\u6307\u5B9A agg_type"}),"\n",(0,s.jsx)(n.li,{children:"\u975E\u805A\u5408\u6A21\u578B\uFF08\u5982 DUPLICATE KEY\uFF09\u5982\u679C\u589E\u52A0 key \u5217\uFF0C\u9700\u8981\u6307\u5B9A KEY \u5173\u952E\u5B57"}),"\n",(0,s.jsx)(n.li,{children:"\u4E0D\u80FD\u5728 rollup index \u4E2D\u589E\u52A0 base index \u4E2D\u5DF2\u7ECF\u5B58\u5728\u7684\u5217\uFF08\u5982\u6709\u9700\u8981\uFF0C\u53EF\u4EE5\u91CD\u65B0\u521B\u5EFA\u4E00\u4E2A rollup index\uFF09"}),"\n"]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"2. \u6DFB\u52A0\u591A\u5217\uFF0C\u5411\u6307\u5B9A\u7684 index \u4F4D\u7F6E\u8FDB\u884C\u591A\u5217\u6DFB\u52A0"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u8BED\u6CD5"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE [database.]table table_name ADD COLUMN (column_name1 column_type [KEY | agg_type] DEFAULT "default_value", ...)\n[TO rollup_index_name]\n[PROPERTIES ("key"="value", ...)]\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u5411 example_db.my_table \u4E2D\u6DFB\u52A0\u591A\u5217\uFF0Cnew_col \u548C new_col2 \u90FD\u662F SUM \u805A\u5408\u7C7B\u578B (\u805A\u5408\u6A21\u578B)"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nADD COLUMN (new_col1 INT SUM DEFAULT "0" ,new_col2 INT SUM DEFAULT "0");\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"\u5411 example_db.my_table \u4E2D\u6DFB\u52A0\u591A\u5217 (\u975E\u805A\u5408\u6A21\u578B)\uFF0C\u5176\u4E2D new_col1 \u4E3A KEY \u5217\uFF0Cnew_col2 \u4E3A value \u5217"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nADD COLUMN (new_col1 INT key DEFAULT "0" , new_col2 INT DEFAULT "0");\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u805A\u5408\u6A21\u578B\u5982\u679C\u589E\u52A0 value \u5217\uFF0C\u9700\u8981\u6307\u5B9A agg_type"}),"\n",(0,s.jsx)(n.li,{children:"\u805A\u5408\u6A21\u578B\u5982\u679C\u589E\u52A0 key \u5217\uFF0C\u9700\u8981\u6307\u5B9A KEY \u5173\u952E\u5B57"}),"\n",(0,s.jsx)(n.li,{children:"\u4E0D\u80FD\u5728 rollup index \u4E2D\u589E\u52A0 base index \u4E2D\u5DF2\u7ECF\u5B58\u5728\u7684\u5217\uFF08\u5982\u6709\u9700\u8981\uFF0C\u53EF\u4EE5\u91CD\u65B0\u521B\u5EFA\u4E00\u4E2A rollup index\uFF09"}),"\n"]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"3. \u5220\u9664\u5217\uFF0C\u4ECE\u6307\u5B9A index \u4E2D\u5220\u9664\u4E00\u5217"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u8BED\u6CD5"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE [database.]table table_name DROP COLUMN column_name\n[FROM rollup_index_name]\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4ECE example_db.my_table \u4E2D\u5220\u9664 col1 \u5217"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE example_db.my_table DROP COLUMN col1;\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4E0D\u80FD\u5220\u9664\u5206\u533A\u5217"}),"\n",(0,s.jsx)(n.li,{children:"\u805A\u5408\u6A21\u578B\u4E0D\u80FD\u5220\u9664 KEY \u5217"}),"\n",(0,s.jsx)(n.li,{children:"\u5982\u679C\u662F\u4ECE base index \u4E2D\u5220\u9664\u5217\uFF0C\u5219\u5982\u679C rollup index \u4E2D\u5305\u542B\u8BE5\u5217\uFF0C\u4E5F\u4F1A\u88AB\u5220\u9664"}),"\n"]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"4. \u4FEE\u6539\u6307\u5B9A\u5217\u7C7B\u578B\u4EE5\u53CA\u5217\u4F4D\u7F6E"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u8BED\u6CD5"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE [database.]table table_name MODIFY COLUMN column_name column_type [KEY | agg_type] [NULL | NOT NULL] [DEFAULT "default_value"]\n[AFTER column_name|FIRST]\n[FROM rollup_index_name]\n[PROPERTIES ("key"="value", ...)]\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u4FEE\u6539 example_db.my_table \u7684 key \u5217 col1 \u7684\u7C7B\u578B\u4E3A BIGINT\uFF0C\u5E76\u79FB\u52A8\u5230 col2 \u5217\u540E\u9762\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table \nMODIFY COLUMN col1 BIGINT KEY DEFAULT "1" AFTER col2;\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"\u65E0\u8BBA\u662F\u4FEE\u6539 key \u5217\u8FD8\u662F value \u5217\u90FD\u9700\u8981\u58F0\u660E\u5B8C\u6574\u7684 column \u4FE1\u606F"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:'\u4FEE\u6539 example_db.my_table \u7684 val1 \u5217\u6700\u5927\u957F\u5EA6\u3002\u539F val1 \u4E3A (val1 VARCHAR(32) REPLACE DEFAULT "abc")'}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table \nMODIFY COLUMN val1 VARCHAR(64) REPLACE DEFAULT "abc";\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"\u53EA\u80FD\u4FEE\u6539\u5217\u7684\u7C7B\u578B\uFF0C\u5217\u7684\u5176\u4ED6\u5C5E\u6027\u7EF4\u6301\u539F\u6837"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"\u4FEE\u6539 Duplicate key \u8868 Key \u5217\u7684\u67D0\u4E2A\u5B57\u6BB5\u7684\u957F\u5EA6"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE example_db.my_table \nMODIFY COLUMN k3 VARCHAR(50) KEY NULL COMMENT 'to 50';\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u805A\u5408\u6A21\u578B\u5982\u679C\u4FEE\u6539 value \u5217\uFF0C\u9700\u8981\u6307\u5B9A agg_type"}),"\n",(0,s.jsx)(n.li,{children:"\u975E\u805A\u5408\u7C7B\u578B\u5982\u679C\u4FEE\u6539 key \u5217\uFF0C\u9700\u8981\u6307\u5B9A KEY \u5173\u952E\u5B57"}),"\n",(0,s.jsx)(n.li,{children:"\u53EA\u80FD\u4FEE\u6539\u5217\u7684\u7C7B\u578B\uFF0C\u5217\u7684\u5176\u4ED6\u5C5E\u6027\u7EF4\u6301\u539F\u6837\uFF08\u5373\u5176\u4ED6\u5C5E\u6027\u9700\u5728\u8BED\u53E5\u4E2D\u6309\u7167\u539F\u5C5E\u6027\u663E\u5F0F\u7684\u5199\u51FA\uFF0C\u53C2\u89C1 example 8\uFF09"}),"\n",(0,s.jsx)(n.li,{children:"\u5206\u533A\u5217\u548C\u5206\u6876\u5217\u4E0D\u80FD\u505A\u4EFB\u4F55\u4FEE\u6539"}),"\n",(0,s.jsxs)(n.li,{children:["\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u7C7B\u578B\u7684\u8F6C\u6362\uFF08\u7CBE\u5EA6\u635F\u5931\u7531\u7528\u6237\u4FDD\u8BC1\uFF09\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"TINYINT/SMALLINT/INT/BIGINT/LARGEINT/FLOAT/DOUBLE \u7C7B\u578B\u5411\u8303\u56F4\u66F4\u5927\u7684\u6570\u5B57\u7C7B\u578B\u8F6C\u6362"}),"\n",(0,s.jsx)(n.li,{children:"TINTINT/SMALLINT/INT/BIGINT/LARGEINT/FLOAT/DOUBLE/DECIMAL \u8F6C\u6362\u6210 VARCHAR"}),"\n",(0,s.jsx)(n.li,{children:"VARCHAR \u652F\u6301\u4FEE\u6539\u6700\u5927\u957F\u5EA6"}),"\n",(0,s.jsx)(n.li,{children:"VARCHAR/CHAR \u8F6C\u6362\u6210 TINTINT/SMALLINT/INT/BIGINT/LARGEINT/FLOAT/DOUBLE"}),"\n",(0,s.jsx)(n.li,{children:'VARCHAR/CHAR \u8F6C\u6362\u6210 DATE (\u76EE\u524D\u652F\u6301"%Y-%m-%d", "%y-%m-%d", "%Y%m%d", "%y%m%d", "%Y/%m/%d, "%y/%m/%d"\u516D\u79CD\u683C\u5F0F\u5316\u683C\u5F0F)'}),"\n",(0,s.jsxs)(n.li,{children:["DATETIME \u8F6C\u6362\u6210 DATE(\u4EC5\u4FDD\u7559\u5E74 - \u6708 - \u65E5\u4FE1\u606F\uFF0C\u4F8B\u5982\uFF1A",(0,s.jsx)(n.code,{children:"2019-12-09 21:47:05"})," <--\x3e ",(0,s.jsx)(n.code,{children:"2019-12-09"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["DATE \u8F6C\u6362\u6210 DATETIME(\u65F6\u5206\u79D2\u81EA\u52A8\u8865\u96F6\uFF0C\u4F8B\u5982\uFF1A",(0,s.jsx)(n.code,{children:"2019-12-09"})," <--\x3e ",(0,s.jsx)(n.code,{children:"2019-12-09 00:00:00"}),")"]}),"\n",(0,s.jsx)(n.li,{children:"FLOAT \u8F6C\u6362\u6210 DOUBLE"}),"\n",(0,s.jsx)(n.li,{children:"INT \u8F6C\u6362\u6210 DATE (\u5982\u679C INT \u7C7B\u578B\u6570\u636E\u4E0D\u5408\u6CD5\u5219\u8F6C\u6362\u5931\u8D25\uFF0C\u539F\u59CB\u6570\u636E\u4E0D\u53D8)"}),"\n",(0,s.jsx)(n.li,{children:"\u9664 DATE \u4E0E DATETIME \u4EE5\u5916\u90FD\u53EF\u4EE5\u8F6C\u6362\u6210 STRING\uFF0C\u4F46\u662F STRING \u4E0D\u80FD\u8F6C\u6362\u4EFB\u4F55\u5176\u4ED6\u7C7B\u578B"}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"5. \u5BF9\u6307\u5B9A\u8868\u7684\u5217\u8FDB\u884C\u91CD\u65B0\u6392\u5E8F"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u8BED\u6CD5"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE [database.]table table_name ORDER BY (column_name1, column_name2, ...)\n[FROM rollup_index_name]\n[PROPERTIES ("key"="value", ...)]\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u8C03\u6574 example_db.my_table \u7684 key \u5217 \u548C value \u5217\u7684\u987A\u5E8F\uFF08\u975E\u805A\u5408\u6A21\u578B\uFF09"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `my_table`(\n`k_1` INT NULL,\n`k_2` INT NULL,\n`v_1` INT NULL,\n`v_2` varchar NULL,\n`v_3` varchar NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`k_1`, `k_2`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`k_1`) BUCKETS 5\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1"\n);\n\nALTER TABLE example_db.my_table ORDER BY (k_2,k_1,v_3,v_2,v_1);\n\nmysql> desc my_table;\n+-------+------------+------+-------+---------+-------+\n| Field | Type       | Null | Key   | Default | Extra |\n+-------+------------+------+-------+---------+-------+\n| k_2   | INT        | Yes  | true  | NULL    |       |\n| k_1   | INT        | Yes  | true  | NULL    |       |\n| v_3   | VARCHAR(*) | Yes  | false | NULL    | NONE  |\n| v_2   | VARCHAR(*) | Yes  | false | NULL    | NONE  |\n| v_1   | INT        | Yes  | false | NULL    | NONE  |\n+-------+------------+------+-------+---------+-------+\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"\u540C\u65F6\u6267\u884C\u6DFB\u52A0\u5217\u548C\u5217\u6392\u5E8F\u64CD\u4F5C"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `my_table` (\n`k_1` INT NULL,\n`k_2` INT NULL,\n`v_1` INT NULL,\n`v_2` varchar NULL,\n`v_3` varchar NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`k_1`, `k_2`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`k_1`) BUCKETS 5\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1"\n);\n\nALTER TABLE example_db.my_table\nADD COLUMN col INT DEFAULT "0" AFTER v_1,\nORDER BY (k_2,k_1,v_3,v_2,v_1,col);\n\nmysql> desc my_table;\n+-------+------------+------+-------+---------+-------+\n| Field | Type       | Null | Key   | Default | Extra |\n+-------+------------+------+-------+---------+-------+\n| k_2   | INT        | Yes  | true  | NULL    |       |\n| k_1   | INT        | Yes  | true  | NULL    |       |\n| v_3   | VARCHAR(*) | Yes  | false | NULL    | NONE  |\n| v_2   | VARCHAR(*) | Yes  | false | NULL    | NONE  |\n| v_1   | INT        | Yes  | false | NULL    | NONE  |\n| col   | INT        | Yes  | false | 0       | NONE  |\n+-------+------------+------+-------+---------+-------+\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"index \u4E2D\u7684\u6240\u6709\u5217\u90FD\u8981\u5199\u51FA\u6765"}),"\n",(0,s.jsx)(n.li,{children:"value \u5217\u5728 key \u5217\u4E4B\u540E"}),"\n",(0,s.jsx)(n.li,{children:"key \u5217\u53EA\u80FD\u8C03\u6574 key \u5217\u7684\u8303\u56F4\u5185\u8FDB\u884C\u8C03\u6574\uFF0Cvalue \u5217\u540C\u7406"}),"\n"]})}),"\n",(0,s.jsx)(n.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"ALTER, TABLE, COLUMN, ALTER TABLE\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"})]})}function o(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return d},a:function(){return c}});var a=l(667294);let s={},i=a.createContext(s);function c(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);