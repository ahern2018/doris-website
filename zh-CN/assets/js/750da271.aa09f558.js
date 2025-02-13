"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["543487"],{854660:function(e,n,l){l.r(n),l.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>u,assets:()=>c,toc:()=>t,frontMatter:()=>d});var i=JSON.parse('{"id":"table-design/auto-increment","title":"\u81EA\u589E\u5217","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/table-design/auto-increment.md","sourceDirName":"table-design","slug":"/table-design/auto-increment","permalink":"/zh-CN/docs/dev/table-design/auto-increment","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u81EA\u589E\u5217","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Schema \u53D8\u66F4","permalink":"/zh-CN/docs/dev/table-design/schema-change"},"next":{"title":"\u51B7\u70ED\u6570\u636E\u5206\u5C42\u6982\u8FF0","permalink":"/zh-CN/docs/dev/table-design/tiered-storage/overview"}}'),s=l("785893"),r=l("250065");let d={title:"\u81EA\u589E\u5217",language:"zh-CN"},a=void 0,c={},t=[{value:"\u529F\u80FD",id:"\u529F\u80FD",level:2},{value:"\u552F\u4E00\u6027",id:"\u552F\u4E00\u6027",level:3},{value:"\u805A\u96C6\u6027",id:"\u805A\u96C6\u6027",level:3},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:3},{value:"\u7EA6\u675F\u548C\u9650\u5236",id:"\u7EA6\u675F\u548C\u9650\u5236",level:3},{value:"\u4F7F\u7528\u65B9\u5F0F",id:"\u4F7F\u7528\u65B9\u5F0F",level:2},{value:"\u666E\u901A\u5BFC\u5165",id:"\u666E\u901A\u5BFC\u5165",level:3},{value:"\u90E8\u5206\u5217\u66F4\u65B0",id:"\u90E8\u5206\u5217\u66F4\u65B0",level:3},{value:"\u4F7F\u7528\u573A\u666F",id:"\u4F7F\u7528\u573A\u666F",level:2},{value:"\u5B57\u5178\u7F16\u7801",id:"\u5B57\u5178\u7F16\u7801",level:3},{value:"\u9AD8\u6548\u5206\u9875",id:"\u9AD8\u6548\u5206\u9875",level:3}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u5728 Doris \u4E2D\uFF0C\u81EA\u589E\u5217\uFF08Auto Increment Column\uFF09\u662F\u4E00\u79CD\u81EA\u52A8\u751F\u6210\u552F\u4E00\u6570\u5B57\u503C\u7684\u529F\u80FD\uFF0C\u5E38\u7528\u4E8E\u4E3A\u6BCF\u4E00\u884C\u6570\u636E\u751F\u6210\u552F\u4E00\u7684\u6807\u8BC6\u7B26\uFF0C\u5982\u4E3B\u952E\u3002\u6BCF\u5F53\u63D2\u5165\u65B0\u8BB0\u5F55\u65F6\uFF0C\u81EA\u589E\u5217\u4F1A\u81EA\u52A8\u5206\u914D\u4E00\u4E2A\u9012\u589E\u7684\u503C\uFF0C\u907F\u514D\u4E86\u624B\u52A8\u6307\u5B9A\u6570\u5B57\u7684\u7E41\u7410\u64CD\u4F5C\u3002\u4F7F\u7528 Doris \u81EA\u589E\u5217\uFF0C\u53EF\u4EE5\u786E\u4FDD\u6570\u636E\u7684\u552F\u4E00\u6027\u548C\u4E00\u81F4\u6027\uFF0C\u7B80\u5316\u6570\u636E\u63D2\u5165\u8FC7\u7A0B\uFF0C\u51CF\u5C11\u4EBA\u4E3A\u9519\u8BEF\uFF0C\u5E76\u63D0\u9AD8\u6570\u636E\u7BA1\u7406\u7684\u6548\u7387\u3002\u8FD9\u4F7F\u5F97\u81EA\u589E\u5217\u6210\u4E3A\u5904\u7406\u9700\u8981\u552F\u4E00\u6807\u8BC6\u7684\u573A\u666F\uFF08\u5982\u7528\u6237 ID \u7B49\uFF09\u65F6\u7684\u7406\u60F3\u9009\u62E9\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u529F\u80FD",children:"\u529F\u80FD"}),"\n",(0,s.jsx)(n.p,{children:"\u5BF9\u4E8E\u5177\u6709\u81EA\u589E\u5217\u7684\u8868\uFF0CDoris \u5904\u7406\u6570\u636E\u5199\u5165\u7684\u65B9\u5F0F\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u81EA\u52A8\u586B\u5145\uFF08\u5217\u6392\u9664\uFF09"}),"\uFF1A\n\u5982\u679C\u5199\u5165\u7684\u6570\u636E\u4E0D\u5305\u62EC\u81EA\u589E\u5217\uFF0CDoris \u4F1A\u751F\u6210\u5E76\u586B\u5145\u8BE5\u5217\u7684\u552F\u4E00\u503C\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u90E8\u5206\u6307\u5B9A\uFF08\u5217\u5305\u542B\uFF09"}),"\uFF1A"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7A7A\u503C"}),"\uFF1ADoris \u4F1A\u7528\u7CFB\u7EDF\u751F\u6210\u7684\u552F\u4E00\u503C\u66FF\u6362\u5199\u5165\u6570\u636E\u4E2D\u7684\u7A7A\u503C\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u975E\u7A7A\u503C"}),"\uFF1A\u7528\u6237\u63D0\u4F9B\u7684\u503C\u4FDD\u6301\u4E0D\u53D8\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"\u91CD\u8981",type:"caution",children:(0,s.jsx)(n.p,{children:"\u7528\u6237\u63D0\u4F9B\u7684\u975E\u7A7A\u503C\u53EF\u80FD\u4F1A\u7834\u574F\u81EA\u589E\u5217\u7684\u552F\u4E00\u6027\u3002"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u552F\u4E00\u6027",children:"\u552F\u4E00\u6027"}),"\n",(0,s.jsxs)(n.p,{children:["Doris \u4FDD\u8BC1\u81EA\u589E\u5217\u4E2D\u751F\u6210\u7684\u503C\u5177\u6709",(0,s.jsx)(n.strong,{children:"\u8868\u7EA7\u552F\u4E00\u6027"}),"\u3002\u4F46\u662F\uFF1A"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u4FDD\u8BC1\u552F\u4E00\u6027"}),"\uFF1A\u8FD9\u4EC5\u9002\u7528\u4E8E\u7CFB\u7EDF\u751F\u6210\u7684\u503C\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7528\u6237\u63D0\u4F9B\u7684\u503C"}),"\uFF1ADoris \u4E0D\u4F1A\u9A8C\u8BC1\u6216\u5F3A\u5236\u6267\u884C\u7528\u6237\u5728\u81EA\u589E\u5217\u4E2D\u6307\u5B9A\u7684\u503C\u7684\u552F\u4E00\u6027\u3002\u8FD9\u53EF\u80FD\u5BFC\u81F4\u91CD\u590D\u6761\u76EE\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u805A\u96C6\u6027",children:"\u805A\u96C6\u6027"}),"\n",(0,s.jsxs)(n.p,{children:["Doris \u751F\u6210\u7684\u81EA\u589E\u503C\u901A\u5E38\u662F",(0,s.jsx)(n.strong,{children:"\u5BC6\u96C6\u7684"}),"\uFF0C\u4F46\u6709\u4E00\u4E9B\u8003\u8651\uFF1A"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u6F5C\u5728\u7684\u95F4\u9699"}),"\uFF1A\u7531\u4E8E\u6027\u80FD\u4F18\u5316\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u95F4\u9699\u3002\u6BCF\u4E2A\u540E\u7AEF\u8282\u70B9\uFF08BE\uFF09\u4F1A\u9884\u5206\u914D\u4E00\u5757\u552F\u4E00\u503C\u4EE5\u63D0\u9AD8\u6548\u7387\uFF0C\u8FD9\u4E9B\u5757\u5728\u8282\u70B9\u4E4B\u95F4\u4E0D\u91CD\u53E0\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u975E\u65F6\u95F4\u987A\u5E8F\u503C"}),"\uFF1ADoris \u4E0D\u4FDD\u8BC1\u540E\u7EED\u5199\u5165\u751F\u6210\u7684\u503C\u5927\u4E8E\u65E9\u671F\u5199\u5165\u7684\u503C\u3002"]}),"\n",(0,s.jsx)(n.admonition,{title:"\u6CE8\u610F",type:"info",children:(0,s.jsx)(n.p,{children:"\u81EA\u589E\u503C\u4E0D\u80FD\u7528\u4E8E\u63A8\u65AD\u5199\u5165\u7684\u65F6\u95F4\u987A\u5E8F\u3002"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsxs)(n.p,{children:["\u8981\u4F7F\u7528\u81EA\u589E\u5217\uFF0C\u9700\u8981\u5728\u5EFA\u8868",(0,s.jsx)(n.a,{href:"../sql-manual/sql-statements/table-and-view/table/CREATE-TABLE",children:"CREATE-TABLE"}),"\u65F6\u4E3A\u5BF9\u5E94\u7684\u5217\u6DFB\u52A0",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"}),"\u5C5E\u6027\u3002\u82E5\u8981\u624B\u52A8\u6307\u5B9A\u81EA\u589E\u5217\u8D77\u59CB\u503C\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5EFA\u8868\u65F6",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT(start_value)"}),"\u8BED\u53E5\u6307\u5B9A\uFF0C\u5982\u679C\u672A\u6307\u5B9A\uFF0C\u5219\u9ED8\u8BA4\u8D77\u59CB\u503C\u4E3A 1\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u521B\u5EFA\u4E00\u4E2A Dupliciate \u6A21\u578B\u8868\uFF0C\u5176\u4E2D\u4E00\u4E2A key \u5217\u662F\u81EA\u589E\u5217"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `demo`.`tbl` (\n      `id` BIGINT NOT NULL AUTO_INCREMENT,\n      `value` BIGINT NOT NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"\u521B\u5EFA\u4E00\u4E2A Dupliciate \u6A21\u578B\u8868\uFF0C\u5176\u4E2D\u4E00\u4E2A key \u5217\u662F\u81EA\u589E\u5217\uFF0C\u5E76\u8BBE\u7F6E\u8D77\u59CB\u503C\u4E3A 100"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `demo`.`tbl` (\n      `id` BIGINT NOT NULL AUTO_INCREMENT(100),\n      `value` BIGINT NOT NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"\u521B\u5EFA\u4E00\u4E2A Dupliciate \u6A21\u578B\u8868\uFF0C\u5176\u4E2D\u4E00\u4E2A value \u5217\u662F\u81EA\u589E\u5217"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `demo`.`tbl` (\n      `uid` BIGINT NOT NULL,\n      `name` BIGINT NOT NULL,\n      `id` BIGINT NOT NULL AUTO_INCREMENT,\n      `value` BIGINT NOT NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`uid`, `name`)\nDISTRIBUTED BY HASH(`uid`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"\u521B\u5EFA\u4E00\u4E2A Unique \u6A21\u578B\u8868\uFF0C\u5176\u4E2D\u4E00\u4E2A key \u5217\u662F\u81EA\u589E\u5217"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `demo`.`tbl` (\n      `id` BIGINT NOT NULL AUTO_INCREMENT,\n      `name` varchar(65533) NOT NULL,\n      `value` int(11) NOT NULL\n) ENGINE=OLAP\nUNIQUE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"\u521B\u5EFA\u4E00\u4E2A Unique \u6A21\u578B\u8868\uFF0C\u5176\u4E2D\u4E00\u4E2A value \u5217\u662F\u81EA\u589E\u5217"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `demo`.`tbl` (\n      `text` varchar(65533) NOT NULL,\n      `id` BIGINT NOT NULL AUTO_INCREMENT,\n) ENGINE=OLAP\nUNIQUE KEY(`text`)\nDISTRIBUTED BY HASH(`text`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u7EA6\u675F\u548C\u9650\u5236",children:"\u7EA6\u675F\u548C\u9650\u5236"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u4EC5 Duplicate \u6A21\u578B\u8868\u548C Unique \u6A21\u578B\u8868\u53EF\u4EE5\u5305\u542B\u81EA\u589E\u5217\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u4E00\u5F20\u8868\u6700\u591A\u53EA\u80FD\u5305\u542B\u4E00\u4E2A\u81EA\u589E\u5217\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u81EA\u589E\u5217\u7684\u7C7B\u578B\u5FC5\u987B\u662F BIGINT \u7C7B\u578B\uFF0C\u4E14\u5FC5\u987B\u4E3A NOT NULL\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u81EA\u589E\u5217\u624B\u52A8\u6307\u5B9A\u7684\u8D77\u59CB\u503C\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E 0\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4F7F\u7528\u65B9\u5F0F",children:"\u4F7F\u7528\u65B9\u5F0F"}),"\n",(0,s.jsx)(n.h3,{id:"\u666E\u901A\u5BFC\u5165",children:"\u666E\u901A\u5BFC\u5165"}),"\n",(0,s.jsx)(n.p,{children:"\u4EE5\u4E0B\u8868\u4E3A\u4F8B\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `demo`.`tbl` (\n    `id` BIGINT NOT NULL AUTO_INCREMENT,\n    `name` varchar(65533) NOT NULL,\n    `value` int(11) NOT NULL\n) ENGINE=OLAP\nUNIQUE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u4F7F\u7528 insert into \u8BED\u53E5\u5BFC\u5165\u5E76\u4E14\u4E0D\u6307\u5B9A\u81EA\u589E\u5217",(0,s.jsx)(n.code,{children:"id"}),"\u65F6\uFF0C",(0,s.jsx)(n.code,{children:"id"}),"\u5217\u4F1A\u88AB\u81EA\u52A8\u586B\u5145\u751F\u6210\u7684\u503C\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql> insert into tbl(name, value) values(\"Bob\", 10), (\"Alice\", 20), (\"Jack\", 30);\nQuery OK, 3 rows affected (0.09 sec)\n{'label':'label_183babcb84ad4023_a2d6266ab73fb5aa', 'status':'VISIBLE', 'txnId':'7'}\n\nmysql> select * from tbl order by id;\n+------+-------+-------+\n| id   | name  | value |\n+------+-------+-------+\n|    1 | Bob   |    10 |\n|    2 | Alice |    20 |\n|    3 | Jack  |    30 |\n+------+-------+-------+\n3 rows in set (0.05 sec)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u7C7B\u4F3C\u5730\uFF0C\u4F7F\u7528 stream load \u5BFC\u5165\u6587\u4EF6 test.csv \u4E14\u4E0D\u6307\u5B9A\u81EA\u589E\u5217",(0,s.jsx)(n.code,{children:"id"}),"\uFF0C",(0,s.jsx)(n.code,{children:"id"}),"\u5217\u4F1A\u88AB\u81EA\u52A8\u586B\u5145\u751F\u6210\u7684\u503C\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"test.csv:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Tom,40\nJohn,50\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'curl --location-trusted -u user:passwd -H "columns:name,value" -H "column_separator:," -T ./test.csv http://{host}:{port}/api/{db}/tbl/_stream_load\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql> select * from tbl order by id;\n+------+-------+-------+\n| id   | name  | value |\n+------+-------+-------+\n|    1 | Bob   |    10 |\n|    2 | Alice |    20 |\n|    3 | Jack  |    30 |\n|    4 | Tom   |    40 |\n|    5 | John  |    50 |\n+------+-------+-------+\n5 rows in set (0.04 sec)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4F7F\u7528 insert into \u5BFC\u5165\u65F6\u6307\u5B9A\u81EA\u589E\u5217",(0,s.jsx)(n.code,{children:"id"}),"\uFF0C\u5219\u8BE5\u5217\u6570\u636E\u4E2D\u7684 null \u503C\u4F1A\u88AB\u751F\u6210\u7684\u503C\u66FF\u6362\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql> insert into tbl(id, name, value) values(null, \"Doris\", 60), (null, \"Nereids\", 70);\nQuery OK, 2 rows affected (0.07 sec)\n{'label':'label_9cb0c01db1a0402c_a2b8b44c11ce4703', 'status':'VISIBLE', 'txnId':'10'}\n\nmysql> select * from tbl order by id;\n+------+---------+-------+\n| id   | name    | value |\n+------+---------+-------+\n|    1 | Bob     |    10 |\n|    2 | Alice   |    20 |\n|    3 | Jack    |    30 |\n|    4 | Tom     |    40 |\n|    5 | John    |    50 |\n|    6 | Doris   |    60 |\n|    7 | Nereids |    70 |\n+------+---------+-------+\n7 rows in set (0.04 sec)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u90E8\u5206\u5217\u66F4\u65B0",children:"\u90E8\u5206\u5217\u66F4\u65B0"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u5BF9\u4E00\u5F20\u5305\u542B\u81EA\u589E\u5217\u7684 merge-on-write Unique \u8868\u8FDB\u884C\u90E8\u5206\u5217\u66F4\u65B0\u65F6\uFF0C\u5982\u679C\u81EA\u589E\u5217\u662F key \u5217\uFF0C\u7531\u4E8E\u90E8\u5206\u5217\u66F4\u65B0\u65F6\u7528\u6237\u5FC5\u987B\u663E\u793A\u6307\u5B9A key \u5217\uFF0C\u90E8\u5206\u5217\u66F4\u65B0\u7684\u76EE\u6807\u5217\u5FC5\u987B\u5305\u542B\u81EA\u589E\u5217\u3002\u6B64\u65F6\u7684\u5BFC\u5165\u884C\u4E3A\u548C\u666E\u901A\u7684\u90E8\u5206\u5217\u66F4\u65B0\u76F8\u540C\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql> CREATE TABLE `demo`.`tbl2` (\n    ->     `id` BIGINT NOT NULL AUTO_INCREMENT,\n    ->     `name` varchar(65533) NOT NULL,\n    ->     `value` int(11) NOT NULL DEFAULT \"0\"\n    -> ) ENGINE=OLAP\n    -> UNIQUE KEY(`id`)\n    -> DISTRIBUTED BY HASH(`id`) BUCKETS 10\n    -> PROPERTIES (\n    -> \"replication_allocation\" = \"tag.location.default: 3\",\n    -> \"enable_unique_key_merge_on_write\" = \"true\"\n    -> );\nQuery OK, 0 rows affected (0.03 sec)\n\nmysql> insert into tbl2(id, name, value) values(1, \"Bob\", 10), (2, \"Alice\", 20), (3, \"Jack\", 30);\nQuery OK, 3 rows affected (0.14 sec)\n{'label':'label_5538549c866240b6_bce75ef323ac22a0', 'status':'VISIBLE', 'txnId':'1004'}\n\nmysql> select * from tbl2 order by id;\n+------+-------+-------+\n| id   | name  | value |\n+------+-------+-------+\n|    1 | Bob   |    10 |\n|    2 | Alice |    20 |\n|    3 | Jack  |    30 |\n+------+-------+-------+\n3 rows in set (0.08 sec)\n\nmysql> set enable_unique_key_partial_update=true;\nQuery OK, 0 rows affected (0.01 sec)\n\nmysql> set enable_insert_strict=false;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> insert into tbl2(id, name) values(1, \"modified\"), (4, \"added\");\nQuery OK, 2 rows affected (0.06 sec)\n{'label':'label_3e68324cfd87457d_a6166cc0a878cfdc', 'status':'VISIBLE', 'txnId':'1005'}\n\nmysql> select * from tbl2 order by id;\n+------+----------+-------+\n| id   | name     | value |\n+------+----------+-------+\n|    1 | modified |    10 |\n|    2 | Alice    |    20 |\n|    3 | Jack     |    30 |\n|    4 | added    |     0 |\n+------+----------+-------+\n4 rows in set (0.04 sec)\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5F53\u81EA\u589E\u5217\u662F\u975E key \u5217\u65F6\uFF0C\u5982\u679C\u7528\u6237\u6CA1\u6709\u6307\u5B9A\u81EA\u589E\u5217\u7684\u503C\uFF0C\u5176\u503C\u4F1A\u4ECE\u8868\u4E2D\u539F\u6709\u7684\u6570\u636E\u884C\u4E2D\u8FDB\u884C\u8865\u9F50\u3002\u5982\u679C\u7528\u6237\u6307\u5B9A\u4E86\u81EA\u589E\u5217\uFF0C\u5219\u8BE5\u5217\u6570\u636E\u4E2D\u7684 null \u503C\u4F1A\u88AB\u66FF\u6362\u4E3A\u751F\u6210\u51FA\u7684\u503C\uFF0C\u975E null \u503C\u5219\u4FDD\u6301\u4E0D\u53D8\uFF0C\u7136\u540E\u4EE5\u90E8\u5206\u5217\u66F4\u65B0\u7684\u8BED\u4E49\u63D2\u5165\u8BE5\u8868\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql> CREATE TABLE `demo`.`tbl3` (\n    ->     `id` BIGINT NOT NULL,\n    ->     `name` varchar(100) NOT NULL,\n    ->     `score` BIGINT NOT NULL,\n    ->     `aid` BIGINT NOT NULL AUTO_INCREMENT\n    -> ) ENGINE=OLAP\n    -> UNIQUE KEY(`id`)\n    -> DISTRIBUTED BY HASH(`id`) BUCKETS 1\n    -> PROPERTIES (\n    -> \"replication_allocation\" = \"tag.location.default: 3\",\n    -> \"enable_unique_key_merge_on_write\" = \"true\"\n    -> );\nQuery OK, 0 rows affected (0.16 sec)\n\nmysql> insert into tbl3(id, name, score) values(1, \"Doris\", 100), (2, \"Nereids\", 200), (3, \"Bob\", 300);\nQuery OK, 3 rows affected (0.28 sec)\n{'label':'label_c52b2c246e244dda_9b91ee5e27a31f9b', 'status':'VISIBLE', 'txnId':'2003'}\n\nmysql> select * from tbl3 order by id;\n+------+---------+-------+------+\n| id   | name    | score | aid  |\n+------+---------+-------+------+\n|    1 | Doris   |   100 |    0 |\n|    2 | Nereids |   200 |    1 |\n|    3 | Bob     |   300 |    2 |\n+------+---------+-------+------+\n3 rows in set (0.13 sec)\n\nmysql> set enable_unique_key_partial_update=true;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> set enable_insert_strict=false;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> insert into tbl3(id, score) values(1, 999), (2, 888);\nQuery OK, 2 rows affected (0.07 sec)\n{'label':'label_dfec927d7a4343ca_9f9ade581391de97', 'status':'VISIBLE', 'txnId':'2004'}\n\nmysql> select * from tbl3 order by id;\n+------+---------+-------+------+\n| id   | name    | score | aid  |\n+------+---------+-------+------+\n|    1 | Doris   |   999 |    0 |\n|    2 | Nereids |   888 |    1 |\n|    3 | Bob     |   300 |    2 |\n+------+---------+-------+------+\n3 rows in set (0.06 sec)\n\nmysql> insert into tbl3(id, aid) values(1, 1000), (3, 500);\nQuery OK, 2 rows affected (0.07 sec)\n{'label':'label_b26012959f714f60_abe23c87a06aa0bf', 'status':'VISIBLE', 'txnId':'2005'}\n\nmysql> select * from tbl3 order by id;\n+------+---------+-------+------+\n| id   | name    | score | aid  |\n+------+---------+-------+------+\n|    1 | Doris   |   999 | 1000 |\n|    2 | Nereids |   888 |    1 |\n|    3 | Bob     |   300 |  500 |\n+------+---------+-------+------+\n3 rows in set (0.06 sec)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4F7F\u7528\u573A\u666F",children:"\u4F7F\u7528\u573A\u666F"}),"\n",(0,s.jsx)(n.h3,{id:"\u5B57\u5178\u7F16\u7801",children:"\u5B57\u5178\u7F16\u7801"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u7528\u6237\u753B\u50CF\u573A\u666F\u4E2D\u4F7F\u7528 bitmap \u505A\u4EBA\u7FA4\u5206\u6790\u65F6\u9700\u8981\u6784\u5EFA\u7528\u6237\u5B57\u5178\uFF0C\u6BCF\u4E2A\u7528\u6237\u5BF9\u5E94\u4E00\u4E2A\u552F\u4E00\u7684\u6574\u6570\u5B57\u5178\u503C\uFF0C\u805A\u96C6\u7684\u5B57\u5178\u503C\u53EF\u4EE5\u83B7\u5F97\u66F4\u597D\u7684 bitmap \u6027\u80FD\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4EE5\u79BB\u7EBF uv\uFF0Cpv \u5206\u6790\u573A\u666F\u4E3A\u4F8B\uFF0C\u5047\u8BBE\u6709\u5982\u4E0B\u7528\u6237\u884C\u4E3A\u8868\u5B58\u653E\u660E\u7EC6\u6570\u636E\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `demo`.`dwd_dup_tbl` (\n    `user_id` varchar(50) NOT NULL,\n    `dim1` varchar(50) NOT NULL,\n    `dim2` varchar(50) NOT NULL,\n    `dim3` varchar(50) NOT NULL,\n    `dim4` varchar(50) NOT NULL,\n    `dim5` varchar(50) NOT NULL,\n    `visit_time` DATE NOT NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`user_id`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 32\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u5229\u7528\u81EA\u589E\u5217\u521B\u5EFA\u5982\u4E0B\u5B57\u5178\u8868"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `demo`.`dictionary_tbl` (\n    `user_id` varchar(50) NOT NULL,\n    `aid` BIGINT NOT NULL AUTO_INCREMENT\n) ENGINE=OLAP\nUNIQUE KEY(`user_id`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 32\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3",\n"enable_unique_key_merge_on_write" = "true"\n);\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5C06\u5B58\u91CF\u6570\u636E\u4E2D\u7684",(0,s.jsx)(n.code,{children:"user_id"}),"\u5BFC\u5165\u5B57\u5178\u8868\uFF0C\u5EFA\u7ACB",(0,s.jsx)(n.code,{children:"user_id"}),"\u5230\u6574\u6570\u503C\u7684\u7F16\u7801\u6620\u5C04"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"insert into dictionary_tbl(user_id)\nselect user_id from dwd_dup_tbl group by user_id;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6216\u8005\u4F7F\u7528\u5982\u4E0B\u65B9\u5F0F\u4EC5\u5C06\u589E\u91CF\u6570\u636E\u4E2D\u7684",(0,s.jsx)(n.code,{children:"user_id"}),"\u5BFC\u5165\u5230\u5B57\u5178\u8868"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"insert into dictionary_tbl(user_id)\nselect dwd_dup_tbl.user_id from dwd_dup_tbl left join dictionary_tbl\non dwd_dup_tbl.user_id = dictionary_tbl.user_id where dwd_dup_tbl.visit_time > '2023-12-10' and dictionary_tbl.user_id is NULL;\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5B9E\u9645\u573A\u666F\u4E2D\u4E5F\u53EF\u4EE5\u4F7F\u7528 flink connector \u628A\u6570\u636E\u5199\u5165\u5230 doris\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u5047\u8BBE",(0,s.jsx)(n.code,{children:"dim1"}),", ",(0,s.jsx)(n.code,{children:"dim3"}),", ",(0,s.jsx)(n.code,{children:"dim5"}),"\u662F\u6211\u4EEC\u5173\u5FC3\u7684\u7EDF\u8BA1\u7EF4\u5EA6\uFF0C\u5EFA\u7ACB\u5982\u4E0B\u805A\u5408\u8868\u5B58\u653E\u805A\u5408\u7ED3\u679C"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `demo`.`dws_agg_tbl` (\n    `dim1` varchar(50) NOT NULL,\n    `dim3` varchar(50) NOT NULL,\n    `dim5` varchar(50) NOT NULL,\n    `user_id_bitmap` BITMAP BITMAP_UNION NOT NULL,\n    `pv` BIGINT SUM NOT NULL \n) ENGINE=OLAP\nAGGREGATE KEY(`dim1`,`dim3`,`dim5`)\nDISTRIBUTED BY HASH(`dim1`) BUCKETS 32\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u5C06\u6570\u636E\u805A\u5408\u8FD0\u7B97\u540E\u5B58\u653E\u81F3\u805A\u5408\u7ED3\u679C\u8868"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"insert into dws_agg_tbl\nselect dwd_dup_tbl.dim1, dwd_dup_tbl.dim3, dwd_dup_tbl.dim5, BITMAP_UNION(TO_BITMAP(dictionary_tbl.aid)), COUNT(1)\nfrom dwd_dup_tbl INNER JOIN dictionary_tbl on dwd_dup_tbl.user_id = dictionary_tbl.user_id\ngroup by dwd_dup_tbl.dim1, dwd_dup_tbl.dim3, dwd_dup_tbl.dim5;\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7528\u5982\u4E0B\u8BED\u53E5\u8FDB\u884C uv, pv \u67E5\u8BE2"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select dim1, dim3, dim5, bitmap_count(user_id_bitmap) as uv, pv from dws_agg_tbl;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u9AD8\u6548\u5206\u9875",children:"\u9AD8\u6548\u5206\u9875"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u9875\u9762\u5C55\u793A\u6570\u636E\u65F6\uFF0C\u5F80\u5F80\u9700\u8981\u505A\u5206\u9875\u5C55\u793A\u3002\u4F20\u7EDF\u7684\u5206\u9875\u901A\u5E38\u4F7F\u7528 SQL \u4E2D\u7684 ",(0,s.jsx)(n.code,{children:"limit"}),", ",(0,s.jsx)(n.code,{children:"offset"})," + ",(0,s.jsx)(n.code,{children:"order by"})," \u8FDB\u884C\u67E5\u8BE2\u3002\u4F8B\u5982\u6709\u5982\u4E0B\u4E1A\u52A1\u8868\u9700\u8981\u8FDB\u884C\u5C55\u793A\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `demo`.`records_tbl` (\n    `user_id` int(11) NOT NULL COMMENT "",\n    `name` varchar(26) NOT NULL COMMENT "",\n    `address` varchar(41) NOT NULL COMMENT "",\n    `city` varchar(11) NOT NULL COMMENT "",\n    `nation` varchar(16) NOT NULL COMMENT "",\n    `region` varchar(13) NOT NULL COMMENT "",\n    `phone` varchar(16) NOT NULL COMMENT "",\n    `mktsegment` varchar(11) NOT NULL COMMENT ""\n) DUPLICATE KEY (`user_id`, `name`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u5047\u8BBE\u5728\u5206\u9875\u5C55\u793A\u4E2D\uFF0C\u6BCF\u9875\u5C55\u793A 100 \u6761\u6570\u636E\u3002\u90A3\u4E48\u83B7\u53D6\u7B2C 1 \u9875\u7684\u6570\u636E\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B sql \u8FDB\u884C\u67E5\u8BE2\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select * from records_tbl order by user_id, name limit 100;\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u83B7\u53D6\u7B2C 2 \u9875\u7684\u6570\u636E\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B sql \u8FDB\u884C\u67E5\u8BE2\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select * from records_tbl order by user_id, name limit 100 offset 100;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u7136\u800C\uFF0C\u5F53\u8FDB\u884C\u6DF1\u5206\u9875\u67E5\u8BE2\u65F6 (offset \u5F88\u5927\u65F6)\uFF0C\u5373\u4F7F\u5B9E\u9645\u9700\u8981\u9700\u8981\u7684\u6570\u636E\u884C\u5F88\u5C11\uFF0C\u8BE5\u65B9\u6CD5\u4F9D\u7136\u4F1A\u5C06\u5168\u90E8\u6570\u636E\u8BFB\u53D6\u5230\u5185\u5B58\u4E2D\u8FDB\u884C\u5168\u91CF\u6392\u5E8F\u540E\u518D\u8FDB\u884C\u540E\u7EED\u5904\u7406\uFF0C\u8FD9\u79CD\u65B9\u6CD5\u6BD4\u8F83\u4F4E\u6548\u3002\u53EF\u4EE5\u901A\u8FC7\u81EA\u589E\u5217\u7ED9\u6BCF\u884C\u6570\u636E\u4E00\u4E2A\u552F\u4E00\u503C\uFF0C\u5728\u67E5\u8BE2\u65F6\u5C31\u53EF\u4EE5\u901A\u8FC7\u8BB0\u5F55\u4E4B\u524D\u9875\u9762",(0,s.jsx)(n.code,{children:"unique_value"}),"\u5217\u7684\u6700\u5927\u503C",(0,s.jsx)(n.code,{children:"max_value"}),"\uFF0C\u7136\u540E\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"where unique_value > max_value limit rows_per_page"})," \u7684\u65B9\u5F0F\u901A\u8FC7\u63D0\u4E0B\u63A8\u8C13\u8BCD\u63D0\u524D\u8FC7\u6EE4\u5927\u91CF\u6570\u636E\uFF0C\u4ECE\u800C\u66F4\u9AD8\u6548\u5730\u5B9E\u73B0\u5206\u9875\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4ECD\u7136\u4EE5\u4E0A\u8FF0\u4E1A\u52A1\u8868\u4E3A\u4F8B\uFF0C\u901A\u8FC7\u5728\u8868\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u81EA\u589E\u5217\u4ECE\u800C\u8D4B\u4E88\u6BCF\u4E00\u884C\u4E00\u4E2A\u552F\u4E00\u6807\u8BC6\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `demo`.`records_tbl2` (\n    `user_id` int(11) NOT NULL COMMENT "",\n    `name` varchar(26) NOT NULL COMMENT "",\n    `address` varchar(41) NOT NULL COMMENT "",\n    `city` varchar(11) NOT NULL COMMENT "",\n    `nation` varchar(16) NOT NULL COMMENT "",\n    `region` varchar(13) NOT NULL COMMENT "",\n    `phone` varchar(16) NOT NULL COMMENT "",\n    `mktsegment` varchar(11) NOT NULL COMMENT "",\n    `unique_value` BIGINT NOT NULL AUTO_INCREMENT\n) DUPLICATE KEY (`user_id`, `name`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u5206\u9875\u5C55\u793A\u4E2D\uFF0C\u6BCF\u9875\u5C55\u793A 100 \u6761\u6570\u636E\uFF0C\u4F7F\u7528\u5982\u4E0B\u65B9\u5F0F\u83B7\u53D6\u7B2C\u4E00\u9875\u7684\u6570\u636E\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select * from records_tbl2 order by unique_value limit 100;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u901A\u8FC7\u7A0B\u5E8F\u8BB0\u5F55\u4E0B\u8FD4\u56DE\u7ED3\u679C\u4E2D",(0,s.jsx)(n.code,{children:"unique_value"}),"\u4E2D\u7684\u6700\u5927\u503C\uFF0C\u5047\u8BBE\u4E3A 99\uFF0C\u5219\u53EF\u7528\u5982\u4E0B\u65B9\u5F0F\u67E5\u8BE2\u7B2C 2 \u9875\u7684\u6570\u636E\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select * from records_tbl2 where unique_value > 99 order by unique_value limit 100;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679C\u8981\u76F4\u63A5\u67E5\u8BE2\u4E00\u4E2A\u9760\u540E\u9875\u9762\u7684\u5185\u5BB9\uFF0C\u6B64\u65F6\u4E0D\u65B9\u4FBF\u76F4\u63A5\u83B7\u53D6\u4E4B\u524D\u9875\u9762\u6570\u636E\u4E2D",(0,s.jsx)(n.code,{children:"unique_value"}),"\u7684\u6700\u5927\u503C\u65F6\uFF0C\u4F8B\u5982\u8981\u76F4\u63A5\u83B7\u53D6\u7B2C 101 \u9875\u7684\u5185\u5BB9\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B\u65B9\u5F0F\u8FDB\u884C\u67E5\u8BE2"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select user_id, name, address, city, nation, region, phone, mktsegment\nfrom records_tbl2, (select unique_value as max_value from records_tbl2 order by unique_value limit 1 offset 9999) as previous_data\nwhere records_tbl2.unique_value > previous_data.max_value\norder by unique_value limit 100;\n"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return a},a:function(){return d}});var i=l(667294);let s={},r=i.createContext(s);function d(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);