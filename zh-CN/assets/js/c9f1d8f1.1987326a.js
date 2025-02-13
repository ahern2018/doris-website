"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["242145"],{397965:function(e,n,s){s.r(n),s.d(n,{metadata:()=>l,contentTitle:()=>r,default:()=>h,assets:()=>d,toc:()=>a,frontMatter:()=>c});var l=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/DML/INSERT-OVERWRITE","title":"INSERT OVERWRITE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/data-modification/DML/INSERT-OVERWRITE.md","sourceDirName":"sql-manual/sql-statements/data-modification/DML","slug":"/sql-manual/sql-statements/data-modification/DML/INSERT-OVERWRITE","permalink":"/zh-CN/docs/sql-manual/sql-statements/data-modification/DML/INSERT-OVERWRITE","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"INSERT OVERWRITE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"INSERT","permalink":"/zh-CN/docs/sql-manual/sql-statements/data-modification/DML/INSERT"},"next":{"title":"SHOW LAST INSERT","permalink":"/zh-CN/docs/sql-manual/sql-statements/data-modification/DML/SHOW-LAST-INSERT"}}'),t=s("785893"),i=s("250065");let c={title:"INSERT OVERWRITE",language:"zh-CN"},r=void 0,d={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"For Auto Partition Table",id:"for-auto-partition-table",level:4},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"Overwrite Table",id:"overwrite-table",level:4},{value:"Overwrite Table Partition",id:"overwrite-table-partition",level:4},{value:"Overwrite Auto Detect Partition",id:"overwrite-auto-detect-partition",level:4},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2}];function o(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7684\u529F\u80FD\u662F\u91CD\u5199\u8868\u6216\u8868\u7684\u67D0\u4E9B\u5206\u533A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"INSERT OVERWRITE table table_name\n    [ PARTITION (p1, ... | *) ]\n    [ WITH LABEL label]\n    [ (column [, ...]) ]\n    [ [ hint [, ...] ] ]\n    { VALUES ( { expression | DEFAULT } [, ...] ) [, ...] | query }\n"})}),"\n",(0,t.jsx)(n.p,{children:"Parameters"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["table_name: \u9700\u8981\u91CD\u5199\u7684\u76EE\u7684\u8868\u3002\u8FD9\u4E2A\u8868\u5FC5\u987B\u5B58\u5728\u3002\u53EF\u4EE5\u662F ",(0,t.jsx)(n.code,{children:"db_name.table_name"})," \u5F62\u5F0F"]}),"\n",(0,t.jsx)(n.p,{children:"partitions: \u9700\u8981\u91CD\u5199\u7684\u76EE\u6807\u5206\u533A\uFF0C\u652F\u6301\u4E24\u79CD\u5F62\u5F0F\uFF1A"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5206\u533A\u540D\u3002\u5FC5\u987B\u662F ",(0,t.jsx)(n.code,{children:"table_name"})," \u4E2D\u5B58\u5728\u7684\u5206\u533A\uFF0C\u591A\u4E2A\u5206\u533A\u540D\u79F0\u7528\u9017\u53F7\u5206\u9694\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u661F\u53F7 (*)\u3002\u5F00\u542F",(0,t.jsx)(n.a,{href:"#overwrite-auto-detect-partition",children:"\u81EA\u52A8\u68C0\u6D4B\u5206\u533A"}),"\u529F\u80FD\u3002\u5199\u5165\u64CD\u4F5C\u5C06\u4F1A\u81EA\u52A8\u68C0\u6D4B\u6570\u636E\u6240\u6D89\u53CA\u7684\u5206\u533A\uFF0C\u5E76\u8986\u5199\u8FD9\u4E9B\u5206\u533A\u3002\u8BE5\u529F\u80FD\u81EA Apache Doris 2.1.3 \u7248\u672C\u5F00\u59CB\u652F\u6301\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"label: \u4E3A Insert \u4EFB\u52A1\u6307\u5B9A\u4E00\u4E2A label"}),"\n",(0,t.jsxs)(n.p,{children:["column_name: \u6307\u5B9A\u7684\u76EE\u7684\u5217\uFF0C\u5FC5\u987B\u662F ",(0,t.jsx)(n.code,{children:"table_name"})," \u4E2D\u5B58\u5728\u7684\u5217"]}),"\n",(0,t.jsx)(n.p,{children:"expression: \u9700\u8981\u8D4B\u503C\u7ED9\u67D0\u4E2A\u5217\u7684\u5BF9\u5E94\u8868\u8FBE\u5F0F"}),"\n",(0,t.jsx)(n.p,{children:"DEFAULT: \u8BA9\u5BF9\u5E94\u5217\u4F7F\u7528\u9ED8\u8BA4\u503C"}),"\n",(0,t.jsx)(n.p,{children:"query: \u4E00\u4E2A\u666E\u901A\u67E5\u8BE2\uFF0C\u67E5\u8BE2\u7684\u7ED3\u679C\u4F1A\u91CD\u5199\u5230\u76EE\u6807\u4E2D"}),"\n",(0,t.jsxs)(n.p,{children:["hint: \u7528\u4E8E\u6307\u793A ",(0,t.jsx)(n.code,{children:"INSERT"})," \u6267\u884C\u884C\u4E3A\u7684\u4E00\u4E9B\u6307\u793A\u7B26\u3002\u76EE\u524D hint \u6709\u4E09\u4E2A\u53EF\u9009\u503C",(0,t.jsx)(n.code,{children:"/*+ STREAMING */"}),"\u3001",(0,t.jsx)(n.code,{children:"/*+ SHUFFLE */"}),"\u6216",(0,t.jsx)(n.code,{children:"/*+ NOSHUFFLE */"})]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"STREAMING\uFF1A\u76EE\u524D\u65E0\u5B9E\u9645\u4F5C\u7528\uFF0C\u53EA\u662F\u4E3A\u4E86\u517C\u5BB9\u4E4B\u524D\u7684\u7248\u672C\uFF0C\u56E0\u6B64\u4FDD\u7559\u3002\uFF08\u4E4B\u524D\u7684\u7248\u672C\u52A0\u4E0A\u8FD9\u4E2A hint \u4F1A\u8FD4\u56DE label\uFF0C\u73B0\u5728\u9ED8\u8BA4\u90FD\u4F1A\u8FD4\u56DE label\uFF09"}),"\n",(0,t.jsx)(n.li,{children:"SHUFFLE\uFF1A\u5F53\u76EE\u6807\u8868\u662F\u5206\u533A\u8868\uFF0C\u5F00\u542F\u8FD9\u4E2A hint \u4F1A\u8FDB\u884C repartiiton\u3002"}),"\n",(0,t.jsx)(n.li,{children:"NOSHUFFLE\uFF1A\u5373\u4F7F\u76EE\u6807\u8868\u662F\u5206\u533A\u8868\uFF0C\u4E5F\u4E0D\u4F1A\u8FDB\u884C repartiiton\uFF0C\u4F46\u4F1A\u505A\u4E00\u4E9B\u5176\u4ED6\u64CD\u4F5C\u4EE5\u4FDD\u8BC1\u6570\u636E\u6B63\u786E\u843D\u5230\u5404\u4E2A\u5206\u533A\u4E2D\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u6CE8\u610F\uFF1A"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5728\u5F53\u524D\u7248\u672C\u4E2D\uFF0C\u4F1A\u8BDD\u53D8\u91CF ",(0,t.jsx)(n.code,{children:"enable_insert_strict"})," \u9ED8\u8BA4\u4E3A ",(0,t.jsx)(n.code,{children:"true"}),"\uFF0C\u5982\u679C\u6267\u884C ",(0,t.jsx)(n.code,{children:"INSERT OVERWRITE"})," \u8BED\u53E5\u65F6\uFF0C\u5BF9\u4E8E\u6709\u4E0D\u7B26\u5408\u76EE\u6807\u8868\u683C\u5F0F\u7684\u6570\u636E\u88AB\u8FC7\u6EE4\u6389\u7684\u8BDD\u4F1A\u91CD\u5199\u76EE\u6807\u8868\u5931\u8D25\uFF08\u6BD4\u5982\u91CD\u5199\u5206\u533A\u65F6\uFF0C\u4E0D\u6EE1\u8DB3\u6240\u6709\u5206\u533A\u6761\u4EF6\u7684\u6570\u636E\u4F1A\u88AB\u8FC7\u6EE4\uFF09\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"INSERT OVERWRITE \u8BED\u53E5\u4F1A\u9996\u5148\u521B\u5EFA\u4E00\u4E2A\u65B0\u8868\uFF0C\u5C06\u9700\u8981\u91CD\u5199\u7684\u6570\u636E\u63D2\u5165\u5230\u65B0\u8868\u4E2D\uFF0C\u6700\u540E\u539F\u5B50\u6027\u7684\u7528\u65B0\u8868\u66FF\u6362\u65E7\u8868\u5E76\u4FEE\u6539\u540D\u79F0\u3002\u56E0\u6B64\uFF0C\u5728\u91CD\u5199\u8868\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u65E7\u8868\u4E2D\u7684\u6570\u636E\u5728\u91CD\u5199\u5B8C\u6BD5\u4E4B\u524D\u4ECD\u7136\u53EF\u4EE5\u6B63\u5E38\u8BBF\u95EE\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"for-auto-partition-table",children:"For Auto Partition Table"}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679C INSERT OVERWRITE \u7684\u76EE\u6807\u8868\u662F\u81EA\u52A8\u5206\u533A\u8868\uFF0C\u90A3\u4E48\u884C\u4E3A\u53D7\u5230 ",(0,t.jsx)(n.a,{href:"../#%E5%8F%98%E9%87%8F",children:"Session Variable"})," ",(0,t.jsx)(n.code,{children:"enable_auto_create_when_overwrite"})," \u7684\u63A7\u5236\uFF0C\u5177\u4F53\u884C\u4E3A\u5982\u4E0B\uFF1A"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u82E5\u672A\u6307\u5B9A PARTITION\uFF08\u8986\u5199\u6574\u8868\uFF09\uFF0C\u5F53 ",(0,t.jsx)(n.code,{children:"enable_auto_create_when_overwrite"})," \u4E3A ",(0,t.jsx)(n.code,{children:"true"}),"\uFF0C\u5728\u8986\u5199\u6574\u8868\u5DF2\u6709\u6570\u636E\u7684\u540C\u65F6\uFF0C\u5BF9\u4E8E\u6CA1\u6709\u5BF9\u5E94\u5206\u533A\u7684\u6570\u636E\uFF0C\u6309\u7167\u8BE5\u8868\u7684\u81EA\u52A8\u5206\u533A\u89C4\u5219\u521B\u5EFA\u5206\u533A\uFF0C\u5E76\u5BB9\u7EB3\u8FD9\u4E9B\u539F\u672C\u6CA1\u6709\u5BF9\u5E94\u5206\u533A\u7684\u6570\u636E\u3002\u5982\u679C ",(0,t.jsx)(n.code,{children:"enable_auto_create_when_overwrite"})," \u4E3A ",(0,t.jsx)(n.code,{children:"false"}),"\uFF0C\u672A\u627E\u5230\u5206\u533A\u7684\u6570\u636E\u5C06\u7D2F\u8BA1\u9519\u8BEF\u884C\u76F4\u5230\u5931\u8D25\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"\u5982\u679C\u6307\u5B9A\u4E86\u8986\u5199\u7684 PARTITION\uFF0C\u90A3\u4E48\u5728\u6B64\u8FC7\u7A0B\u4E2D\uFF0CAUTO PARTITION \u8868\u8868\u73B0\u5F97\u5982\u540C\u666E\u901A\u5206\u533A\u8868\u4E00\u6837\uFF0C\u4E0D\u6EE1\u8DB3\u73B0\u6709\u5206\u533A\u6761\u4EF6\u7684\u6570\u636E\u5C06\u88AB\u8FC7\u6EE4\uFF0C\u800C\u975E\u521B\u5EFA\u65B0\u7684\u5206\u533A\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["\u82E5\u6307\u5B9A PARTITION \u4E3A ",(0,t.jsx)(n.code,{children:"partition(*)"})," \uFF08\u81EA\u52A8\u68C0\u6D4B\u5206\u533A\u5E76\u8986\u5199\uFF09\uFF0C\u5F53 ",(0,t.jsx)(n.code,{children:"enable_auto_create_when_overwrite"})," \u4E3A ",(0,t.jsx)(n.code,{children:"true"}),"\uFF0C\u5BF9\u4E8E\u90A3\u4E9B\u5728\u8868\u4E2D\u6709\u5BF9\u5E94\u5206\u533A\u7684\u6570\u636E\uFF0C\u8986\u5199\u5B83\u4EEC\u5BF9\u5E94\u7684\u5206\u533A\uFF0C\u5176\u4ED6\u5DF2\u6709\u5206\u533A\u4E0D\u53D8\u3002\u540C\u65F6\uFF0C\u5BF9\u4E8E\u6CA1\u6709\u5BF9\u5E94\u5206\u533A\u7684\u6570\u636E\uFF0C\u6309\u7167\u8BE5\u8868\u7684\u81EA\u52A8\u5206\u533A\u89C4\u5219\u521B\u5EFA\u5206\u533A\uFF0C\u5E76\u5BB9\u7EB3\u8FD9\u4E9B\u539F\u672C\u6CA1\u6709\u5BF9\u5E94\u5206\u533A\u7684\u6570\u636E\u3002\u5982\u679C ",(0,t.jsx)(n.code,{children:"enable_auto_create_when_overwrite"})," \u4E3A ",(0,t.jsx)(n.code,{children:"false"}),"\uFF0C\u672A\u627E\u5230\u5206\u533A\u7684\u6570\u636E\u5C06\u7D2F\u8BA1\u9519\u8BEF\u884C\u76F4\u5230\u5931\u8D25\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"enable_auto_create_when_overwrite"})," \u81EA 2.1.8 \u5F15\u5165\uFF0C\u5728\u6CA1\u6709 ",(0,t.jsx)(n.code,{children:"enable_auto_create_when_overwrite"})," \u7684\u7248\u672C\uFF0C\u884C\u4E3A\u5982\u540C\u8BE5\u53D8\u91CF\u503C\u4E3A ",(0,t.jsx)(n.code,{children:"false"}),"\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u793A\u4F8B\u5982\u4E0B\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'mysql> create table auto_list(\n    ->              k0 varchar null\n    ->          )\n    ->          auto partition by list (k0)\n    ->          (\n    ->              PARTITION p1 values in (("Beijing"), ("BEIJING")),\n    ->              PARTITION p2 values in (("Shanghai"), ("SHANGHAI")),\n    ->              PARTITION p3 values in (("xxx"), ("XXX")),\n    ->              PARTITION p4 values in (("list"), ("LIST")),\n    ->              PARTITION p5 values in (("1234567"), ("7654321"))\n    ->          )\n    ->          DISTRIBUTED BY HASH(`k0`) BUCKETS 1\n    ->          properties("replication_num" = "1");\nQuery OK, 0 rows affected (0.14 sec)\n\nmysql> insert into auto_list values ("Beijing"),("Shanghai"),("xxx"),("list"),("1234567");\nQuery OK, 5 rows affected (0.22 sec)\n\nmysql> insert overwrite table auto_list partition(*) values ("BEIJING"), ("new1");\nQuery OK, 2 rows affected (0.28 sec)\n\nmysql> select * from auto_list;\n+----------+ --- p1 \u88AB\u8986\u5199\uFF0Cnew1 \u5F97\u5230\u4E86\u65B0\u5206\u533A\uFF0C\u5176\u4ED6\u5206\u533A\u6570\u636E\u672A\u53D8\n| k0       |\n+----------+\n| 1234567  |\n| BEIJING  |\n| list     |\n| xxx      |\n| new1     |\n| Shanghai |\n+----------+\n6 rows in set (0.48 sec)\n\nmysql> insert overwrite table auto_list values ("SHANGHAI"), ("new2");\nQuery OK, 2 rows affected (0.17 sec)\n\nmysql> select * from auto_list;\n+----------+ --- \u6574\u8868\u539F\u6709\u6570\u636E\u88AB\u8986\u5199\uFF0C\u540C\u65F6 new2 \u5F97\u5230\u4E86\u65B0\u5206\u533A\n| k0       |\n+----------+\n| new2     |\n| SHANGHAI |\n+----------+\n2 rows in set (0.15 sec)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,t.jsxs)(n.p,{children:["\u5047\u8BBE\u6709",(0,t.jsx)(n.code,{children:"test"})," \u8868\u3002\u8BE5\u8868\u5305\u542B\u4E24\u4E2A\u5217",(0,t.jsx)(n.code,{children:"c1"}),", ",(0,t.jsx)(n.code,{children:"c2"}),"\uFF0C\u4E24\u4E2A\u5206\u533A",(0,t.jsx)(n.code,{children:"p1"}),",",(0,t.jsx)(n.code,{children:"p2"}),"\u3002\u5EFA\u8868\u8BED\u53E5\u5982\u4E0B\u6240\u793A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE IF NOT EXISTS test (\n  `c1` int NOT NULL DEFAULT "1",\n  `c2` int NOT NULL DEFAULT "4"\n) ENGINE=OLAP\nUNIQUE KEY(`c1`)\nPARTITION BY LIST (`c1`)\n(\nPARTITION p1 VALUES IN ("1","2","3"),\nPARTITION p2 VALUES IN ("4","5","6")\n)\nDISTRIBUTED BY HASH(`c1`) BUCKETS 3\nPROPERTIES (\n  "replication_allocation" = "tag.location.default: 1",\n  "in_memory" = "false",\n  "storage_format" = "V2"\n);\n'})}),"\n",(0,t.jsx)(n.h4,{id:"overwrite-table",children:"Overwrite Table"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["VALUES \u7684\u5F62\u5F0F\u91CD\u5199",(0,t.jsx)(n.code,{children:"test"}),"\u8868"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"# \u5355\u884C\u91CD\u5199\nINSERT OVERWRITE table test VALUES (1, 2);\nINSERT OVERWRITE table test (c1, c2) VALUES (1, 2);\nINSERT OVERWRITE table test (c1, c2) VALUES (1, DEFAULT);\nINSERT OVERWRITE table test (c1) VALUES (1);\n# \u591A\u884C\u91CD\u5199\nINSERT OVERWRITE table test VALUES (1, 2), (3, 2 + 2);\nINSERT OVERWRITE table test (c1, c2) VALUES (1, 2), (3, 2 * 2);\nINSERT OVERWRITE table test (c1, c2) VALUES (1, DEFAULT), (3, DEFAULT);\nINSERT OVERWRITE table test (c1) VALUES (1), (3);\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u7B2C\u4E00\u6761\u8BED\u53E5\u548C\u7B2C\u4E8C\u6761\u8BED\u53E5\u7684\u6548\u679C\u4E00\u81F4\uFF0C\u91CD\u5199\u65F6\u5982\u679C\u4E0D\u6307\u5B9A\u76EE\u6807\u5217\uFF0C\u4F1A\u4F7F\u7528\u8868\u4E2D\u7684\u5217\u987A\u5E8F\u6765\u4F5C\u4E3A\u9ED8\u8BA4\u7684\u76EE\u6807\u5217\u3002\u91CD\u5199\u6210\u529F\u540E\u8868",(0,t.jsx)(n.code,{children:"test"}),"\u4E2D\u53EA\u6709\u4E00\u884C\u6570\u636E\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u7B2C\u4E09\u6761\u8BED\u53E5\u548C\u7B2C\u56DB\u6761\u8BED\u53E5\u7684\u6548\u679C\u4E00\u81F4\uFF0C\u6CA1\u6709\u6307\u5B9A\u7684\u5217",(0,t.jsx)(n.code,{children:"c2"}),"\u4F1A\u4F7F\u7528\u9ED8\u8BA4\u503C 4 \u6765\u5B8C\u6210\u6570\u636E\u91CD\u5199\u3002\u91CD\u5199\u6210\u529F\u540E\u8868",(0,t.jsx)(n.code,{children:"test"}),"\u4E2D\u53EA\u6709\u4E00\u884C\u6570\u636E\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u7B2C\u4E94\u6761\u8BED\u53E5\u548C\u7B2C\u516D\u6761\u8BED\u53E5\u7684\u6548\u679C\u4E00\u81F4\uFF0C\u5728\u8BED\u53E5\u4E2D\u53EF\u4EE5\u4F7F\u7528\u8868\u8FBE\u5F0F\uFF08\u5982",(0,t.jsx)(n.code,{children:"2+2"}),"\uFF0C",(0,t.jsx)(n.code,{children:"2*2"}),"\uFF09\uFF0C\u6267\u884C\u8BED\u53E5\u7684\u65F6\u5019\u4F1A\u8BA1\u7B97\u51FA\u8868\u8FBE\u5F0F\u7684\u7ED3\u679C\u518D\u91CD\u5199\u8868",(0,t.jsx)(n.code,{children:"test"}),"\u3002\u91CD\u5199\u6210\u529F\u540E\u8868",(0,t.jsx)(n.code,{children:"test"}),"\u4E2D\u6709\u4E24\u884C\u6570\u636E\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u7B2C\u4E03\u6761\u8BED\u53E5\u548C\u7B2C\u516B\u6761\u8BED\u53E5\u7684\u6548\u679C\u4E00\u81F4\uFF0C\u6CA1\u6709\u6307\u5B9A\u7684\u5217",(0,t.jsx)(n.code,{children:"c2"}),"\u4F1A\u4F7F\u7528\u9ED8\u8BA4\u503C 4 \u6765\u5B8C\u6210\u6570\u636E\u91CD\u5199\u3002\u91CD\u5199\u6210\u529F\u540E\u8868",(0,t.jsx)(n.code,{children:"test"}),"\u4E2D\u6709\u4E24\u884C\u6570\u636E\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u67E5\u8BE2\u8BED\u53E5\u7684\u5F62\u5F0F\u91CD\u5199",(0,t.jsx)(n.code,{children:"test"}),"\u8868\uFF0C\u8868",(0,t.jsx)(n.code,{children:"test2"}),"\u548C\u8868",(0,t.jsx)(n.code,{children:"test"}),"\u7684\u6570\u636E\u683C\u5F0F\u9700\u8981\u4FDD\u6301\u4E00\u81F4\uFF0C\u5982\u679C\u4E0D\u4E00\u81F4\u4F1A\u89E6\u53D1\u6570\u636E\u7C7B\u578B\u7684\u9690\u5F0F\u8F6C\u6362"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"INSERT OVERWRITE table test SELECT * FROM test2;\nINSERT OVERWRITE table test (c1, c2) SELECT * from test2;\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u7B2C\u4E00\u6761\u8BED\u53E5\u548C\u7B2C\u4E8C\u6761\u8BED\u53E5\u7684\u6548\u679C\u4E00\u81F4\uFF0C\u8BE5\u8BED\u53E5\u7684\u4F5C\u7528\u662F\u5C06\u6570\u636E\u4ECE\u8868",(0,t.jsx)(n.code,{children:"test2"}),"\u4E2D\u53D6\u51FA\uFF0C\u4F7F\u7528\u53D6\u51FA\u7684\u6570\u636E\u91CD\u5199\u8868",(0,t.jsx)(n.code,{children:"test"}),"\u3002\u91CD\u5199\u6210\u529F\u540E\u8868",(0,t.jsx)(n.code,{children:"test"}),"\u4E2D\u7684\u6570\u636E\u548C\u8868",(0,t.jsx)(n.code,{children:"test2"}),"\u4E2D\u7684\u6570\u636E\u4FDD\u6301\u4E00\u81F4\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u91CD\u5199 ",(0,t.jsx)(n.code,{children:"test"})," \u8868\u5E76\u6307\u5B9A label"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"INSERT OVERWRITE table test WITH LABEL `label1` SELECT * FROM test2;\nINSERT OVERWRITE table test WITH LABEL `label2` (c1, c2) SELECT * from test2;\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u7528\u6237\u53EF\u4EE5\u901A\u8FC7",(0,t.jsx)(n.code,{children:"SHOW LOAD;"}),"\u547D\u4EE4\u67E5\u770B\u6B64",(0,t.jsx)(n.code,{children:"label"}),"\u5BFC\u5165\u4F5C\u4E1A\u7684\u72B6\u6001\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F label \u5177\u6709\u552F\u4E00\u6027\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"overwrite-table-partition",children:"Overwrite Table Partition"}),"\n",(0,t.jsx)(n.p,{children:"\u4F7F\u7528 INSERT OVERWRITE \u91CD\u5199\u5206\u533A\u65F6\uFF0C\u5B9E\u9645\u6211\u4EEC\u662F\u5C06\u5982\u4E0B\u4E09\u6B65\u64CD\u4F5C\u5C01\u88C5\u4E3A\u4E00\u4E2A\u4E8B\u52A1\u5E76\u6267\u884C\uFF0C\u5982\u679C\u4E2D\u9014\u5931\u8D25\uFF0C\u5DF2\u8FDB\u884C\u7684\u64CD\u4F5C\u5C06\u4F1A\u56DE\u6EDA\uFF1A"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5047\u8BBE\u6307\u5B9A\u91CD\u5199\u5206\u533A p1\uFF0C\u9996\u5148\u521B\u5EFA\u4E00\u4E2A\u4E0E\u91CD\u5199\u7684\u76EE\u6807\u5206\u533A\u7ED3\u6784\u76F8\u540C\u7684\u7A7A\u4E34\u65F6\u5206\u533A ",(0,t.jsx)(n.code,{children:"pTMP"})]}),"\n",(0,t.jsxs)(n.li,{children:["\u5411 ",(0,t.jsx)(n.code,{children:"pTMP"})," \u4E2D\u5199\u5165\u6570\u636E"]}),"\n",(0,t.jsxs)(n.li,{children:["\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"pTMP"})," \u539F\u5B50\u66FF\u6362 ",(0,t.jsx)(n.code,{children:"p1"})," \u5206\u533A"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u4E3E\u4F8B\u5982\u4E0B\uFF1A"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["VALUES \u7684\u5F62\u5F0F\u91CD\u5199",(0,t.jsx)(n.code,{children:"test"}),"\u8868\u5206\u533A",(0,t.jsx)(n.code,{children:"P1"}),"\u548C",(0,t.jsx)(n.code,{children:"p2"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"# \u5355\u884C\u91CD\u5199\nINSERT OVERWRITE table test PARTITION(p1,p2) VALUES (1, 2);\nINSERT OVERWRITE table test PARTITION(p1,p2) (c1, c2) VALUES (1, 2);\nINSERT OVERWRITE table test PARTITION(p1,p2) (c1, c2) VALUES (1, DEFAULT);\nINSERT OVERWRITE table test PARTITION(p1,p2) (c1) VALUES (1);\n# \u591A\u884C\u91CD\u5199\nINSERT OVERWRITE table test PARTITION(p1,p2) VALUES (1, 2), (4, 2 + 2);\nINSERT OVERWRITE table test PARTITION(p1,p2) (c1, c2) VALUES (1, 2), (4, 2 * 2);\nINSERT OVERWRITE table test PARTITION(p1,p2) (c1, c2) VALUES (1, DEFAULT), (4, DEFAULT);\nINSERT OVERWRITE table test PARTITION(p1,p2) (c1) VALUES (1), (4);\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4EE5\u4E0A\u8BED\u53E5\u4E0E\u91CD\u5199\u8868\u4E0D\u540C\u7684\u662F\uFF0C\u5B83\u4EEC\u90FD\u662F\u91CD\u5199\u8868\u4E2D\u7684\u5206\u533A\u3002\u5206\u533A\u53EF\u4EE5\u4E00\u6B21\u91CD\u5199\u4E00\u4E2A\u5206\u533A\u4E5F\u53EF\u4EE5\u4E00\u6B21\u91CD\u5199\u591A\u4E2A\u5206\u533A\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u53EA\u6709\u6EE1\u8DB3\u5BF9\u5E94\u5206\u533A\u8FC7\u6EE4\u6761\u4EF6\u7684\u6570\u636E\u624D\u80FD\u591F\u91CD\u5199\u6210\u529F\u3002\u5982\u679C\u91CD\u5199\u7684\u6570\u636E\u4E2D\u6709\u6570\u636E\u4E0D\u6EE1\u8DB3\u5176\u4E2D\u4EFB\u610F\u4E00\u4E2A\u5206\u533A\uFF0C\u90A3\u4E48\u672C\u6B21\u91CD\u5199\u4F1A\u5931\u8D25\u3002\u4E00\u4E2A\u5931\u8D25\u7684\u4F8B\u5B50\u5982\u4E0B\u6240\u793A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"INSERT OVERWRITE table test PARTITION(p1,p2) VALUES (7, 2);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4EE5\u4E0A\u8BED\u53E5\u91CD\u5199\u7684\u6570\u636E",(0,t.jsx)(n.code,{children:"c1=7"}),"\u5206\u533A",(0,t.jsx)(n.code,{children:"p1"}),"\u548C",(0,t.jsx)(n.code,{children:"p2"}),"\u7684\u6761\u4EF6\u90FD\u4E0D\u6EE1\u8DB3\uFF0C\u56E0\u6B64\u4F1A\u91CD\u5199\u5931\u8D25\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u67E5\u8BE2\u8BED\u53E5\u7684\u5F62\u5F0F\u91CD\u5199",(0,t.jsx)(n.code,{children:"test"}),"\u8868\u5206\u533A",(0,t.jsx)(n.code,{children:"P1"}),"\u548C",(0,t.jsx)(n.code,{children:"p2"}),"\uFF0C\u8868",(0,t.jsx)(n.code,{children:"test2"}),"\u548C\u8868",(0,t.jsx)(n.code,{children:"test"}),"\u7684\u6570\u636E\u683C\u5F0F\u9700\u8981\u4FDD\u6301\u4E00\u81F4\uFF0C\u5982\u679C\u4E0D\u4E00\u81F4\u4F1A\u89E6\u53D1\u6570\u636E\u7C7B\u578B\u7684\u9690\u5F0F\u8F6C\u6362"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"INSERT OVERWRITE table test PARTITION(p1,p2) SELECT * FROM test2;\nINSERT OVERWRITE table test PARTITION(p1,p2) (c1, c2) SELECT * from test2;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u91CD\u5199 ",(0,t.jsx)(n.code,{children:"test"})," \u8868\u5206\u533A",(0,t.jsx)(n.code,{children:"P1"}),"\u548C",(0,t.jsx)(n.code,{children:"p2"}),"\u5E76\u6307\u5B9A label"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"INSERT OVERWRITE table test PARTITION(p1,p2) WITH LABEL `label3` SELECT * FROM test2;\nINSERT OVERWRITE table test PARTITION(p1,p2) WITH LABEL `label4` (c1, c2) SELECT * from test2;\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"overwrite-auto-detect-partition",children:"Overwrite Auto Detect Partition"}),"\n",(0,t.jsxs)(n.p,{children:["\u5F53 INSERT OVERWRITE \u547D\u4EE4\u6307\u5B9A\u7684 PARTITION \u5B50\u53E5\u4E3A ",(0,t.jsx)(n.code,{children:"PARTITION(*)"})," \u65F6\uFF0C\u6B64\u6B21\u8986\u5199\u5C06\u4F1A\u81EA\u52A8\u68C0\u6D4B\u5206\u533A\u6570\u636E\u6240\u5728\u7684\u5206\u533A\u3002\u4F8B\u5982\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'mysql> create table test(\n    -> k0 int null\n    -> )\n    -> partition by range (k0)\n    -> (\n    -> PARTITION p10 values less than (10),\n    -> PARTITION p100 values less than (100),\n    -> PARTITION pMAX values less than (maxvalue)\n    -> )\n    -> DISTRIBUTED BY HASH(`k0`) BUCKETS 1\n    -> properties("replication_num" = "1");\nQuery OK, 0 rows affected (0.11 sec)\n\nmysql> insert into test values (1), (2), (15), (100), (200);\nQuery OK, 5 rows affected (0.29 sec)\n\nmysql> select * from test order by k0;\n+------+\n| k0   |\n+------+\n|    1 |\n|    2 |\n|   15 |\n|  100 |\n|  200 |\n+------+\n5 rows in set (0.23 sec)\n\nmysql> insert overwrite table test partition(*) values (3), (1234);\nQuery OK, 2 rows affected (0.24 sec)\n\nmysql> select * from test order by k0;\n+------+\n| k0   |\n+------+\n|    3 |\n|   15 |\n| 1234 |\n+------+\n3 rows in set (0.20 sec)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C\u6570\u636E 3\u30011234 \u6240\u5728\u7684\u5206\u533A ",(0,t.jsx)(n.code,{children:"p10"})," \u548C ",(0,t.jsx)(n.code,{children:"pMAX"})," \u4E2D\u7684\u5168\u90E8\u6570\u636E\u5747\u88AB\u8986\u5199\uFF0C\u800C ",(0,t.jsx)(n.code,{children:"p100"})," \u5206\u533A\u672A\u53D1\u751F\u53D8\u5316\u3002\u8BE5\u64CD\u4F5C\u53EF\u4EE5\u7406\u89E3\u4E3A INSERT OVERWRITE \u64CD\u4F5C\u65F6\u901A\u8FC7 PARTITION \u5B50\u53E5\u6307\u5B9A\u8986\u5199\u7279\u5B9A\u5206\u533A\u7684\u8BED\u6CD5\u7CD6\uFF0C\u5B83\u7684\u5B9E\u73B0\u539F\u7406\u4E0E",(0,t.jsx)(n.a,{href:"#overwrite-table-partition",children:"\u6307\u5B9A\u91CD\u5199\u7279\u5B9A\u5206\u533A"}),"\u76F8\u540C\u3002\u901A\u8FC7 ",(0,t.jsx)(n.code,{children:"PARTITION(*)"})," \u7684\u8BED\u6CD5\uFF0C\u5728\u8986\u5199\u5927\u91CF\u5206\u533A\u6570\u636E\u65F6\u6211\u4EEC\u53EF\u4EE5\u514D\u4E8E\u624B\u52A8\u586B\u5199\u5168\u90E8\u5206\u533A\u540D\u7684\u7E41\u7410\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"INSERT OVERWRITE, OVERWRITE, AUTO DETECT\n"})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return c}});var l=s(667294);let t={},i=l.createContext(t);function c(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);