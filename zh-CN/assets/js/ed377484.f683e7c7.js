"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["580276"],{91961:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>E,assets:()=>c,toc:()=>d,frontMatter:()=>l});var t=JSON.parse('{"id":"table-design/data-partitioning/basic-concepts","title":"\u57FA\u672C\u6982\u5FF5","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/table-design/data-partitioning/basic-concepts.md","sourceDirName":"table-design/data-partitioning","slug":"/table-design/data-partitioning/basic-concepts","permalink":"/zh-CN/docs/2.0/table-design/data-partitioning/basic-concepts","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"\u57FA\u672C\u6982\u5FF5","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u884C\u5217\u6DF7\u5B58","permalink":"/zh-CN/docs/2.0/table-design/row-store"},"next":{"title":"\u624B\u52A8\u5206\u533A","permalink":"/zh-CN/docs/2.0/table-design/data-partitioning/manual-partitioning"}}'),a=i("785893"),s=i("250065");let l={title:"\u57FA\u672C\u6982\u5FF5",language:"zh-CN"},r=void 0,c={},d=[{value:"Row &amp; Column",id:"row--column",level:2},{value:"\u5206\u533A\u548C\u5206\u6876\uFF08Partition &amp; Bucket\uFF09",id:"\u5206\u533A\u548C\u5206\u6876partition--bucket",level:2},{value:"\u5206\u533A",id:"\u5206\u533A",level:3},{value:"\u5206\u6876",id:"\u5206\u6876",level:3},{value:"\u5EFA\u8868\u4E3E\u4F8B",id:"\u5EFA\u8868\u4E3E\u4F8B",level:2},{value:"\u67E5\u770B\u5206\u533A\u4FE1\u606F",id:"\u67E5\u770B\u5206\u533A\u4FE1\u606F",level:2},{value:"\u4FEE\u6539\u5206\u533A\u4FE1\u606F",id:"\u4FEE\u6539\u5206\u533A\u4FE1\u606F",level:2}];function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"\u672C\u6587\u6863\u4E3B\u8981\u4ECB\u7ECD Doris \u7684\u5EFA\u8868\u548C\u6570\u636E\u5212\u5206\uFF0C\u4EE5\u53CA\u5EFA\u8868\u64CD\u4F5C\u4E2D\u53EF\u80FD\u9047\u5230\u7684\u95EE\u9898\u548C\u89E3\u51B3\u65B9\u6CD5\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"row--column",children:"Row & Column"}),"\n",(0,a.jsx)(n.p,{children:"\u5728 Doris \u4E2D\uFF0C\u6570\u636E\u90FD\u4EE5\u8868\uFF08Table\uFF09\u7684\u5F62\u5F0F\u8FDB\u884C\u903B\u8F91\u4E0A\u7684\u63CF\u8FF0\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u4E00\u5F20\u8868\u5305\u62EC\u884C\uFF08Row\uFF09\u548C\u5217\uFF08Column\uFF09\uFF1A"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Row\uFF1A\u5373\u7528\u6237\u7684\u4E00\u884C\u6570\u636E\uFF1B"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Column\uFF1A\u7528\u4E8E\u63CF\u8FF0\u4E00\u884C\u6570\u636E\u4E2D\u4E0D\u540C\u7684\u5B57\u6BB5\uFF1B"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Column \u53EF\u4EE5\u5206\u4E3A\u4E24\u5927\u7C7B\uFF1AKey \u548C Value\u3002\u4ECE\u4E1A\u52A1\u89D2\u5EA6\u770B\uFF0CKey \u548C Value \u53EF\u4EE5\u5206\u522B\u5BF9\u5E94\u7EF4\u5EA6\u5217\u548C\u6307\u6807\u5217\u3002Doris \u7684 key \u5217\u662F\u5EFA\u8868\u8BED\u53E5\u4E2D\u6307\u5B9A\u7684\u5217\uFF0C\u5EFA\u8868\u8BED\u53E5\u4E2D\u7684\u5173\u952E\u5B57'unique key'\u6216'aggregate key'\u6216'duplicate key'\u540E\u9762\u7684\u5217\u5C31\u662F key \u5217\uFF0C\u9664\u4E86 key \u5217\u5269\u4E0B\u7684\u5C31\u662F value \u5217\u3002\u4ECE\u805A\u5408\u6A21\u578B\u7684\u89D2\u5EA6\u6765\u8BF4\uFF0CKey \u5217\u76F8\u540C\u7684\u884C\uFF0C\u4F1A\u805A\u5408\u6210\u4E00\u884C\u3002\u5176\u4E2D Value \u5217\u7684\u805A\u5408\u65B9\u5F0F\u7531\u7528\u6237\u5728\u5EFA\u8868\u65F6\u6307\u5B9A\u3002\u5173\u4E8E\u66F4\u591A\u805A\u5408\u6A21\u578B\u7684\u4ECB\u7ECD\uFF0C\u53EF\u4EE5\u53C2\u9605 ",(0,a.jsx)(n.a,{href:"../../table-design/data-model/overview",children:"Doris \u6570\u636E\u6A21\u578B"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u5206\u533A\u548C\u5206\u6876partition--bucket",children:"\u5206\u533A\u548C\u5206\u6876\uFF08Partition & Bucket\uFF09"}),"\n",(0,a.jsx)(n.p,{children:"Doris \u4F7F\u7528\u5206\u533A\u548C\u5206\u6876\u7684\u4E24\u5C42\u5212\u5206\u65B9\u5F0F\u6765\u7EC4\u7EC7\u548C\u7BA1\u7406\u6570\u636E\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"\u5206\u533A",children:"\u5206\u533A"}),"\n",(0,a.jsx)(n.p,{children:"\u5206\u533A\u662F\u6307\u6839\u636E\u8868\u4E2D\u7279\u5B9A\u5217\u7684\u503C\u8FDB\u884C\u5206\u6BB5\uFF0C\u5C06\u8868\u4E2D\u7684\u6570\u636E\u5212\u5206\u4E3A\u66F4\u5C0F\uFF0C\u66F4\u6613\u4E8E\u7BA1\u7406\u7684\u4E0D\u76F8\u4EA4\u7684\u5B50\u96C6\uFF0C\u6BCF\u4E00\u4E2A\u6570\u636E\u5B50\u96C6\u79F0\u4E3A\u4E00\u4E2A\u5206\u533A\u3002\u6BCF\u4E00\u884C\u6570\u636E\u5C5E\u4E8E\u4E14\u53EA\u5C5E\u4E8E\u4E00\u4E2A\u7279\u5B9A\u7684\u5206\u533A\u3002\u5206\u533A\u53EF\u4EE5\u89C6\u4E3A\u6700\u5C0F\u7684\u903B\u8F91\u7BA1\u7406\u5355\u5143\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u76EE\u524D Doris \u652F\u6301 Range \u548C List \u7684\u5206\u533A\u5212\u5206\u65B9\u5F0F\u3002\u5EFA\u8868\u65F6\u5982\u679C\u4E0D\u6307\u5B9A\u5206\u533A\uFF0C\u6B64\u65F6 Doris \u4F1A\u751F\u6210\u4E00\u4E2A\u9ED8\u8BA4\u7684\u5206\u533A\u5305\u542B\u8868\u4E2D\u7684\u6240\u6709\u6570\u636E\uFF0C\u8FD9\u4E2A\u5206\u533A\u5BF9\u7528\u6237\u662F\u900F\u660E\u7684\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u5408\u7406\u5730\u6839\u636E\u6570\u636E\u5206\u5E03\u7279\u5F81\u548C\u67E5\u8BE2\u6A21\u5F0F\u8FDB\u884C\u5206\u533A\u6709\u8BB8\u591A\u597D\u5904\uFF1A"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u67E5\u8BE2\u6027\u80FD\u63D0\u5347\uFF1A\u901A\u8FC7\u5206\u533A\uFF0C\u7CFB\u7EDF\u53EF\u4EE5\u6839\u636E\u67E5\u8BE2\u7684\u6761\u4EF6\u88C1\u526A\u4E0D\u76F8\u5173\u7684\u5206\u533A\uFF0C\u51CF\u5C11\u4E86\u6570\u636E\u626B\u63CF\u91CF\uFF0C\u663E\u8457\u63D0\u9AD8\u4E86\u67E5\u8BE2\u6548\u7387\u3002\u7279\u522B\u662F\u5728\u5904\u7406\u5927\u89C4\u6A21\u6570\u636E\u96C6\u65F6\uFF0C\u5206\u533A\u7B56\u7565\u80FD\u5927\u5E45\u5EA6\u964D\u4F4EI/O\u8D1F\u62C5\u3002"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u7BA1\u7406\u7075\u6D3B\u6027\uFF1A\u5206\u533A\u4F7F\u5F97\u6570\u636E\u53EF\u4EE5\u6309\u65F6\u95F4\u3001\u5730\u57DF\u7B49\u903B\u8F91\u8FDB\u884C\u5206\u5272\uFF0C\u65B9\u4FBF\u6570\u636E\u7684\u5F52\u6863\u3001\u6E05\u7406\u548C\u5907\u4EFD\u3002\u4F8B\u5982\uFF0C\u6309\u65F6\u95F4\u5206\u533A\u53EF\u4EE5\u6709\u6548\u5730\u7BA1\u7406\u5386\u53F2\u6570\u636E\u548C\u65B0\u589E\u6570\u636E\uFF0C\u652F\u6301\u57FA\u4E8E\u65F6\u95F4\u7684\u9AD8\u6548\u6570\u636E\u7EF4\u62A4\u7B56\u7565\u3002"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"\u5206\u6876",children:"\u5206\u6876"}),"\n",(0,a.jsx)(n.p,{children:"\u5206\u6876\u662F\u6307\u5C06\u4E00\u4E2A\u5206\u533A\u4E2D\u7684\u6570\u636E\u8FDB\u4E00\u6B65\u6309\u7167\u67D0\u79CD\u89C4\u5219\u88AB\u5212\u5206\u66F4\u5C0F\u7684\u4E0D\u76F8\u4EA4\u7684\u6570\u636E\u5355\u5143\u3002\u6BCF\u4E00\u884C\u6570\u636E\u5C5E\u4E8E\u4E14\u53EA\u5C5E\u4E8E\u4E00\u4E2A\u7279\u5B9A\u7684\u5206\u6876\u3002\u4E0E\u6839\u636E\u7279\u5B9A\u5217\u503C\u5BF9\u6570\u636E\u8FDB\u884C\u5206\u6BB5\u7684\u5206\u533A\u4E0D\u540C\uFF0C\u5206\u6876\u5C1D\u8BD5\u5C06\u6570\u636E\u5747\u5300\u5206\u5E03\u5728\u9884\u5B9A\u4E49\u7684\u6876\u4E2D\uFF0C\u4ECE\u800C\u51CF\u5C11\u6570\u636E\u503E\u659C\u7684\u95EE\u9898\u3002\u5206\u6876\u901A\u8FC7\u786E\u4FDD\u6570\u636E\u5206\u5E03\u5747\u5300\u5E76\u63D0\u9AD8\u6570\u636E\u5C40\u90E8\u6027\u4EE5\u63D0\u5347\u67E5\u8BE2\u6267\u884C\u7684\u6027\u80FD\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u76EE\u524D Doris \u652F\u6301 Hash \u548C Random \u7684\u5206\u6876\u5212\u5206\u65B9\u5F0F\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u4E00\u4E2A\u5206\u6876\u5728\u7269\u7406\u4E0A\u5BF9\u5E94\u4E00\u4E2A\u6570\u636E\u5206\u7247\uFF08Tablet\uFF09\uFF0C\u6570\u636E\u5206\u7247\u5728\u7269\u7406\u4E0A\u662F\u72EC\u7ACB\u5B58\u50A8\u7684\uFF0C\u5B83\u662F\u6570\u636E\u79FB\u52A8\u3001\u590D\u5236\u7B49\u64CD\u4F5C\u7684\u6700\u5C0F\u7269\u7406\u5B58\u50A8\u5355\u5143\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u5408\u7406\u5730\u5206\u6876\u80FD\u591F\u5E26\u6765\u8BB8\u591A\u6536\u76CA\uFF1A"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u5747\u5300\u6570\u636E\u5206\u5E03\uFF1A\u5206\u6876\u53EF\u4EE5\u5C06\u6570\u636E\u5747\u5300\u5730\u5206\u5E03\u5728\u5404\u4E2A\u6876\u4E2D\uFF0C\u51CF\u5C11\u4E86\u6570\u636E\u96C6\u4E2D\u6216\u503E\u659C\u7684\u98CE\u9669\uFF0C\u4ECE\u800C\u907F\u514D\u4E86\u90E8\u5206\u8282\u70B9\u6216\u5B58\u50A8\u8BBE\u5907\u7684\u8D44\u6E90\u8FC7\u8F7D\u95EE\u9898\u3002"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u51CF\u5C11\u70ED\u70B9\uFF1A\u901A\u8FC7\u5747\u5300\u5206\u5E03\u6570\u636E\uFF0C\u5206\u6876\u6709\u52A9\u4E8E\u51CF\u5C11\u67D0\u4E9B\u7279\u5B9A\u8282\u70B9\u6216\u5206\u533A\u8FC7\u5EA6\u8D1F\u8F7D\u7684\u73B0\u8C61\uFF0C\u907F\u514D\u70ED\u70B9\u95EE\u9898\uFF0C\u63D0\u5347\u7CFB\u7EDF\u7684\u7A33\u5B9A\u6027\u548C\u5904\u7406\u80FD\u529B\u3002"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u63D0\u9AD8\u5E76\u53D1\u6027\u80FD\uFF1A\u5206\u6876\u5E2E\u52A9\u63D0\u9AD8\u5E76\u53D1\u67E5\u8BE2\u7684\u6027\u80FD\uFF0C\u7279\u522B\u662F\u5F53\u591A\u4E2A\u67E5\u8BE2\u8BF7\u6C42\u9700\u8981\u8BBF\u95EE\u76F8\u540C\u5206\u533A\u4E2D\u7684\u4E0D\u540C\u6570\u636E\u65F6\uFF0C\u5206\u6876\u7684\u7C92\u5EA6\u4F7F\u5F97\u7CFB\u7EDF\u80FD\u591F\u6709\u6548\u5730\u5E76\u884C\u5904\u7406\u591A\u4E2A\u8BF7\u6C42\uFF0C\u4ECE\u800C\u63D0\u5347\u541E\u5410\u91CF\u3002"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u5EFA\u8868\u4E3E\u4F8B",children:"\u5EFA\u8868\u4E3E\u4F8B"}),"\n",(0,a.jsxs)(n.p,{children:["Doris \u7684\u5EFA\u8868\u662F\u4E00\u4E2A\u540C\u6B65\u547D\u4EE4\uFF0CSQL \u6267\u884C\u5B8C\u6210\u5373\u8FD4\u56DE\u7ED3\u679C\uFF0C\u547D\u4EE4\u8FD4\u56DE\u6210\u529F\u5373\u8868\u793A\u5EFA\u8868\u6210\u529F\u3002\u5177\u4F53\u5EFA\u8868\u8BED\u6CD5\u53EF\u4EE5\u53C2\u8003",(0,a.jsx)(n.a,{href:"../../sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE",children:"CREATE TABLE"}),"\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 ",(0,a.jsx)(n.code,{children:"HELP CREATE TABLE"})," \u67E5\u770B\u66F4\u591A\u5E2E\u52A9\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u8FD9\u91CC\u7ED9\u51FA\u4E86\u4E00\u4E2A\u91C7\u7528\u4E86 Range \u5206\u533A \u548C Hash \u5206\u6876\u7684\u5EFA\u8868\u4E3E\u4F8B\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'-- Range Partition\nCREATE TABLE IF NOT EXISTS example_range_tbl\n(\n    `user_id` LARGEINT NOT NULL COMMENT "\u7528\u6237id",\n    `date` DATE NOT NULL COMMENT "\u6570\u636E\u704C\u5165\u65E5\u671F\u65F6\u95F4",\n    `timestamp` DATETIME NOT NULL COMMENT "\u6570\u636E\u704C\u5165\u7684\u65F6\u95F4\u6233",\n    `city` VARCHAR(20) COMMENT "\u7528\u6237\u6240\u5728\u57CE\u5E02",\n    `age` SMALLINT COMMENT "\u7528\u6237\u5E74\u9F84",\n    `sex` TINYINT COMMENT "\u7528\u6237\u6027\u522B",\n    `last_visit_date` DATETIME REPLACE DEFAULT "1970-01-01 00:00:00" COMMENT "\u7528\u6237\u6700\u540E\u4E00\u6B21\u8BBF\u95EE\u65F6\u95F4",\n    `cost` BIGINT SUM DEFAULT "0" COMMENT "\u7528\u6237\u603B\u6D88\u8D39",\n    `max_dwell_time` INT MAX DEFAULT "0" COMMENT "\u7528\u6237\u6700\u5927\u505C\u7559\u65F6\u95F4",\n    `min_dwell_time` INT MIN DEFAULT "99999" COMMENT "\u7528\u6237\u6700\u5C0F\u505C\u7559\u65F6\u95F4"\n)\nENGINE=OLAP\nAGGREGATE KEY(`user_id`, `date`, `timestamp`, `city`, `age`, `sex`)\nPARTITION BY RANGE(`date`)\n(\n    PARTITION `p201701` VALUES [("2017-01-01"),  ("2017-02-01")),\n    PARTITION `p201702` VALUES [("2017-02-01"), ("2017-03-01")),\n    PARTITION `p201703` VALUES [("2017-03-01"), ("2017-04-01"))\n)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 16\nPROPERTIES\n(\n    "replication_num" = "1"\n);\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u8FD9\u91CC\u4EE5 AGGREGATE KEY \u6570\u636E\u6A21\u578B\u4E3A\u4F8B\u8FDB\u884C\u8BF4\u660E\u3002AGGREGATE KEY \u6570\u636E\u6A21\u578B\u4E2D\uFF0C\u6240\u6709\u6CA1\u6709\u6307\u5B9A\u805A\u5408\u65B9\u5F0F\uFF08SUM\u3001REPLACE\u3001MAX\u3001MIN\uFF09\u7684\u5217\u89C6\u4E3A Key \u5217\u3002\u800C\u5176\u4F59\u5219\u4E3A Value \u5217\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u5728\u5EFA\u8868\u8BED\u53E5\u7684\u6700\u540E PROPERTIES \u4E2D\uFF0C\u5173\u4E8E PROPERTIES \u4E2D\u53EF\u4EE5\u8BBE\u7F6E\u7684\u76F8\u5173\u53C2\u6570\uFF0C\u53EF\u4EE5\u67E5\u770B",(0,a.jsx)(n.a,{href:"../../sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE",children:"CREATE TABLE"}),"\u4E2D\u7684\u8BE6\u7EC6\u4ECB\u7ECD\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"ENGINE \u7684\u7C7B\u578B\u662F OLAP\uFF0C\u5373\u9ED8\u8BA4\u7684 ENGINE \u7C7B\u578B\u3002\u5728 Doris \u4E2D\uFF0C\u53EA\u6709\u8FD9\u4E2A ENGINE \u7C7B\u578B\u662F\u7531 Doris \u8D1F\u8D23\u6570\u636E\u7BA1\u7406\u548C\u5B58\u50A8\u7684\u3002\u5176\u4ED6 ENGINE \u7C7B\u578B\uFF0C\u5982 MySQL\u3001 Broker\u3001ES \u7B49\u7B49\uFF0C\u672C\u8D28\u4E0A\u53EA\u662F\u5BF9\u5916\u90E8\u5176\u4ED6\u6570\u636E\u5E93\u6216\u7CFB\u7EDF\u4E2D\u7684\u8868\u7684\u6620\u5C04\uFF0C\u4EE5\u4FDD\u8BC1 Doris \u53EF\u4EE5\u8BFB\u53D6\u8FD9\u4E9B\u6570\u636E\u3002\u800C Doris \u672C\u8EAB\u5E76\u4E0D\u521B\u5EFA\u3001\u7BA1\u7406\u548C\u5B58\u50A8\u4EFB\u4F55\u975E OLAP ENGINE \u7C7B\u578B\u7684\u8868\u548C\u6570\u636E\u3002"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"IF NOT EXISTS"}),"\u8868\u793A\u5982\u679C\u6CA1\u6709\u521B\u5EFA\u8FC7\u8BE5\u8868\uFF0C\u5219\u521B\u5EFA\u3002\u6CE8\u610F\u8FD9\u91CC\u53EA\u5224\u65AD\u8868\u540D\u662F\u5426\u5B58\u5728\uFF0C\u800C\u4E0D\u4F1A\u5224\u65AD\u65B0\u5EFA\u8868 Schema \u662F\u5426\u4E0E\u5DF2\u5B58\u5728\u7684\u8868 Schema \u76F8\u540C\u3002\u6240\u4EE5\u5982\u679C\u5B58\u5728\u4E00\u4E2A\u540C\u540D\u4F46\u4E0D\u540C Schema \u7684\u8868\uFF0C\u8BE5\u547D\u4EE4\u4E5F\u4F1A\u8FD4\u56DE\u6210\u529F\uFF0C\u4F46\u5E76\u4E0D\u4EE3\u8868\u5DF2\u7ECF\u521B\u5EFA\u4E86\u65B0\u7684\u8868\u548C\u65B0\u7684 Schema\u3002\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u67E5\u770B\u5206\u533A\u4FE1\u606F",children:"\u67E5\u770B\u5206\u533A\u4FE1\u606F"}),"\n",(0,a.jsx)(n.p,{children:"\u53EF\u4EE5\u901A\u8FC7 show create table \u6765\u67E5\u770B\u8868\u7684\u5206\u533A\u4FE1\u606F\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"> show create table  example_range_tbl \n+-------------------+---------------------------------------------------------------------------------------------------------+                                                                                                            \n| Table             | Create Table                                                                                            |                                                                                                            \n+-------------------+---------------------------------------------------------------------------------------------------------+                                                                                                            \n| example_range_tbl | CREATE TABLE `example_range_tbl` (                                                                      |                                                                                                            \n|                   |   `user_id` largeint(40) NOT NULL COMMENT '\u7528\u6237id',                                                     |                                                                                                            \n|                   |   `date` date NOT NULL COMMENT '\u6570\u636E\u704C\u5165\u65E5\u671F\u65F6\u95F4',                                                      |                                                                                                            \n|                   |   `timestamp` datetime NOT NULL COMMENT '\u6570\u636E\u704C\u5165\u7684\u65F6\u95F4\u6233',                                             |                                                                                                            \n|                   |   `city` varchar(20) NULL COMMENT '\u7528\u6237\u6240\u5728\u57CE\u5E02',                                                       |                                                                                                            \n|                   |   `age` smallint(6) NULL COMMENT '\u7528\u6237\u5E74\u9F84',                                                            |                                                                                                            \n|                   |   `sex` tinyint(4) NULL COMMENT '\u7528\u6237\u6027\u522B',                                                             |                                                                                                            \n|                   |   `last_visit_date` datetime REPLACE NULL DEFAULT \"1970-01-01 00:00:00\" COMMENT '\u7528\u6237\u6700\u540E\u4E00\u6B21\u8BBF\u95EE\u65F6\u95F4', |                                                                                                            \n|                   |   `cost` bigint(20) SUM NULL DEFAULT \"0\" COMMENT '\u7528\u6237\u603B\u6D88\u8D39',                                          |                                                                                                            \n|                   |   `max_dwell_time` int(11) MAX NULL DEFAULT \"0\" COMMENT '\u7528\u6237\u6700\u5927\u505C\u7559\u65F6\u95F4',                             |                                                                                                            \n|                   |   `min_dwell_time` int(11) MIN NULL DEFAULT \"99999\" COMMENT '\u7528\u6237\u6700\u5C0F\u505C\u7559\u65F6\u95F4'                          |                                                                                                            \n|                   | ) ENGINE=OLAP                                                                                           |                                                                                                            \n|                   | AGGREGATE KEY(`user_id`, `date`, `timestamp`, `city`, `age`, `sex`)                                     |                                                                                                            \n|                   | COMMENT 'OLAP'                                                                                          |                                                                                                            \n|                   | PARTITION BY RANGE(`date`)                                                                              |                                                                                                            \n|                   | (PARTITION p201701 VALUES [('0000-01-01'), ('2017-02-01')),                                             |                                                                                                            \n|                   | PARTITION p201702 VALUES [('2017-02-01'), ('2017-03-01')),                                              |                                                                                                            \n|                   | PARTITION p201703 VALUES [('2017-03-01'), ('2017-04-01')))                                              |                                                                                                            \n|                   | DISTRIBUTED BY HASH(`user_id`) BUCKETS 16                                                               |                                                                                                            \n|                   | PROPERTIES (                                                                                            |                                                                                                            \n|                   | \"replication_allocation\" = \"tag.location.default: 1\",                                                   |                                                                                                            \n|                   | \"is_being_synced\" = \"false\",                                                                            |                                                                                                            \n|                   | \"storage_format\" = \"V2\",                                                                                |                                                                                                            \n|                   | \"light_schema_change\" = \"true\",                                                                         |                                                                                                            \n|                   | \"disable_auto_compaction\" = \"false\",                                                                    |                                                                                                            \n|                   | \"enable_single_replica_compaction\" = \"false\"                                                            |                                                                                                            \n|                   | );                                                                                                      |                                                                                                            \n+-------------------+---------------------------------------------------------------------------------------------------------+   \n"})}),"\n",(0,a.jsx)(n.p,{children:"\u53EF\u4EE5\u901A\u8FC7 show partitions from your_table \u6765\u67E5\u770B\u8868\u7684\u5206\u533A\u4FE1\u606F\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"> show partitions from example_range_tbl\n+-------------+---------------+----------------+---------------------+--------+--------------+--------------------------------------------------------------------------------+-----------------+---------+----------------+---------------\n+---------------------+---------------------+--------------------------+----------+------------+-------------------------+-----------+                                                                                                     \n| PartitionId | PartitionName | VisibleVersion | VisibleVersionTime  | State  | PartitionKey | Range                                                                          | DistributionKey | Buckets | ReplicationNum | StorageMedium \n| CooldownTime        | RemoteStoragePolicy | LastConsistencyCheckTime | DataSize | IsInMemory | ReplicaAllocation       | IsMutable |                                                                                                     \n+-------------+---------------+----------------+---------------------+--------+--------------+--------------------------------------------------------------------------------+-----------------+---------+----------------+---------------\n+---------------------+---------------------+--------------------------+----------+------------+-------------------------+-----------+                                                                                                     \n| 28731       | p201701       | 1              | 2024-01-25 10:50:51 | NORMAL | date         | [types: [DATEV2]; keys: [0000-01-01]; ..types: [DATEV2]; keys: [2017-02-01]; ) | user_id         | 16      | 1              | HDD           \n| 9999-12-31 23:59:59 |                     |                    | 0.000    | false      | tag.location.default: 1 | true      |                                                                                                     \n| 28732       | p201702       | 1              | 2024-01-25 10:50:51 | NORMAL | date         | [types: [DATEV2]; keys: [2017-02-01]; ..types: [DATEV2]; keys: [2017-03-01]; ) | user_id         | 16      | 1              | HDD           \n| 9999-12-31 23:59:59 |                     |                    | 0.000    | false      | tag.location.default: 1 | true      |                                                                                                     \n| 28733       | p201703       | 1              | 2024-01-25 10:50:51 | NORMAL | date         | [types: [DATEV2]; keys: [2017-03-01]; ..types: [DATEV2]; keys: [2017-04-01]; ) | user_id         | 16      | 1              | HDD           \n| 9999-12-31 23:59:59 |                     |                    | 0.000    | false      | tag.location.default: 1 | true      |                                                                                                     \n+-------------+---------------+----------------+---------------------+--------+--------------+--------------------------------------------------------------------------------+-----------------+---------+----------------+---------------\n+---------------------+---------------------+--------------------------+----------+------------+-------------------------+-----------+                  \n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u4FEE\u6539\u5206\u533A\u4FE1\u606F",children:"\u4FEE\u6539\u5206\u533A\u4FE1\u606F"}),"\n",(0,a.jsx)(n.p,{children:"\u901A\u8FC7 alter table add partition \u6765\u589E\u52A0\u65B0\u7684\u5206\u533A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_range_tbl ADD  PARTITION p201704 VALUES LESS THAN("2020-05-01") DISTRIBUTED BY HASH(`user_id`) BUCKETS 5;\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u5176\u5B83\u66F4\u591A\u5206\u533A\u4FEE\u6539\u64CD\u4F5C\uFF0C\u53C2\u89C1 SQL \u624B\u518C ",(0,a.jsx)(n.a,{href:"../../sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION",children:"ALTER-TABLE-PARTITION"}),"\u3002"]})]})}function E(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return l}});var t=i(667294);let a={},s=t.createContext(a);function l(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);