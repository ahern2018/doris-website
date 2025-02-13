"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["500487"],{78107:function(e,n,s){s.r(n),s.d(n,{metadata:()=>c,contentTitle:()=>t,default:()=>u,assets:()=>o,toc:()=>i,frontMatter:()=>d});var c=JSON.parse('{"id":"data-operate/update/unique-update-concurrent-control","title":"\u4E3B\u952E\u6A21\u578B\u7684\u66F4\u65B0\u5E76\u53D1\u63A7\u5236","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/data-operate/update/unique-update-concurrent-control.md","sourceDirName":"data-operate/update","slug":"/data-operate/update/unique-update-concurrent-control","permalink":"/zh-CN/docs/3.0/data-operate/update/unique-update-concurrent-control","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"\u4E3B\u952E\u6A21\u578B\u7684\u66F4\u65B0\u5E76\u53D1\u63A7\u5236","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u805A\u5408\u6A21\u578B\u7684\u5BFC\u5165\u66F4\u65B0","permalink":"/zh-CN/docs/3.0/data-operate/update/update-of-aggregate-model"},"next":{"title":"\u5220\u9664\u64CD\u4F5C\u6982\u8FF0","permalink":"/zh-CN/docs/3.0/data-operate/delete/delete-overview"}}'),r=s("785893"),l=s("250065");let d={title:"\u4E3B\u952E\u6A21\u578B\u7684\u66F4\u65B0\u5E76\u53D1\u63A7\u5236",language:"zh-CN"},t=void 0,o={},i=[{value:"\u6982\u89C8",id:"\u6982\u89C8",level:2},{value:"UPDATE \u5E76\u53D1\u63A7\u5236",id:"update-\u5E76\u53D1\u63A7\u5236",level:2},{value:"Sequence \u5217",id:"sequence-\u5217",level:2},{value:"\u542F\u7528 sequence column \u652F\u6301",id:"\u542F\u7528-sequence-column-\u652F\u6301",level:3},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:3},{value:"\u6CE8\u610F",id:"\u6CE8\u610F",level:3}];function a(e){let n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u6982\u89C8",children:"\u6982\u89C8"}),"\n",(0,r.jsx)(n.p,{children:"Doris \u91C7\u7528\u591A\u7248\u672C\u5E76\u53D1\u63A7\u5236\u673A\u5236\uFF08MVCC - Multi-Version Concurrency Control\uFF09\u6765\u7BA1\u7406\u5E76\u53D1\u66F4\u65B0\u3002\u6BCF\u6B21\u6570\u636E\u5199\u5165\u64CD\u4F5C\u5747\u4F1A\u5206\u914D\u4E00\u4E2A\u5199\u5165\u4E8B\u52A1\uFF0C\u8BE5\u4E8B\u52A1\u786E\u4FDD\u6570\u636E\u5199\u5165\u7684\u539F\u5B50\u6027\uFF08\u5373\u5199\u5165\u64CD\u4F5C\u8981\u4E48\u5B8C\u5168\u6210\u529F\uFF0C\u8981\u4E48\u5B8C\u5168\u5931\u8D25\uFF09\u3002\u5728\u5199\u5165\u4E8B\u52A1\u63D0\u4EA4\u65F6\uFF0C\u7CFB\u7EDF\u4F1A\u4E3A\u5176\u5206\u914D\u4E00\u4E2A\u7248\u672C\u53F7\u3002\u5F53\u7528\u6237\u4F7F\u7528 Unique Key \u6A21\u578B\u5E76\u591A\u6B21\u5BFC\u5165\u6570\u636E\u65F6\uFF0C\u5982\u679C\u5B58\u5728\u91CD\u590D\u4E3B\u952E\uFF0CDoris \u4F1A\u6839\u636E\u7248\u672C\u53F7\u786E\u5B9A\u8986\u76D6\u987A\u5E8F\uFF1A\u7248\u672C\u53F7\u8F83\u9AD8\u7684\u6570\u636E\u4F1A\u8986\u76D6\u7248\u672C\u53F7\u8F83\u4F4E\u7684\u6570\u636E\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u67D0\u4E9B\u573A\u666F\u4E2D\uFF0C\u7528\u6237\u53EF\u80FD\u9700\u8981\u901A\u8FC7\u5728\u5EFA\u8868\u8BED\u53E5\u4E2D\u6307\u5B9A sequence \u5217\u6765\u7075\u6D3B\u8C03\u6574\u6570\u636E\u7684\u751F\u6548\u987A\u5E8F\u3002\u4F8B\u5982\uFF0C\u5F53\u901A\u8FC7\u591A\u7EBF\u7A0B\u5E76\u53D1\u540C\u6B65\u6570\u636E\u5230 Doris \u65F6\uFF0C\u4E0D\u540C\u7EBF\u7A0B\u7684\u6570\u636E\u53EF\u80FD\u4F1A\u4E71\u5E8F\u5230\u8FBE\u3002\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u53EF\u80FD\u51FA\u73B0\u65E7\u6570\u636E\u56E0\u8F83\u665A\u5230\u8FBE\u800C\u9519\u8BEF\u8986\u76D6\u65B0\u6570\u636E\u7684\u60C5\u51B5\u3002\u4E3A\u89E3\u51B3\u8FD9\u4E00\u95EE\u9898\uFF0C\u7528\u6237\u53EF\u4EE5\u4E3A\u65E7\u6570\u636E\u6307\u5B9A\u8F83\u4F4E\u7684 sequence \u503C\uFF0C\u4E3A\u65B0\u6570\u636E\u6307\u5B9A\u8F83\u9AD8\u7684 sequence \u503C\uFF0C\u4ECE\u800C\u8BA9 Doris \u6839\u636E\u7528\u6237\u63D0\u4F9B\u7684 sequence \u503C\u6765\u6B63\u786E\u786E\u5B9A\u6570\u636E\u7684\u66F4\u65B0\u987A\u5E8F\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u6B64\u5916\uFF0C",(0,r.jsx)(n.code,{children:"UPDATE"})," \u8BED\u53E5\u4E0E\u901A\u8FC7\u5BFC\u5165\u5B9E\u73B0\u66F4\u65B0\u5728\u5E95\u5C42\u673A\u5236\u4E0A\u5B58\u5728\u8F83\u5927\u5DEE\u5F02\u3002",(0,r.jsx)(n.code,{children:"UPDATE"})," \u64CD\u4F5C\u6D89\u53CA\u4E24\u4E2A\u6B65\u9AA4\uFF1A\u4ECE\u6570\u636E\u5E93\u4E2D\u8BFB\u53D6\u5F85\u66F4\u65B0\u7684\u6570\u636E\uFF0C\u4EE5\u53CA\u5199\u5165\u66F4\u65B0\u540E\u7684\u6570\u636E\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C",(0,r.jsx)(n.code,{children:"UPDATE"})," \u8BED\u53E5\u901A\u8FC7\u8868\u7EA7\u9501\u63D0\u4F9B\u4E86 Serializable \u9694\u79BB\u7EA7\u522B\u7684\u4E8B\u52A1\u80FD\u529B\uFF0C\u5373\u591A\u4E2A ",(0,r.jsx)(n.code,{children:"UPDATE"})," \u64CD\u4F5C\u53EA\u80FD\u4E32\u884C\u6267\u884C\u3002\u7528\u6237\u4E5F\u53EF\u4EE5\u901A\u8FC7\u8C03\u6574\u914D\u7F6E\u7ED5\u8FC7\u8FD9\u4E00\u9650\u5236\uFF0C\u5177\u4F53\u65B9\u6CD5\u8BF7\u53C2\u9605\u4EE5\u4E0B\u7AE0\u8282\u7684\u8BE6\u7EC6\u8BF4\u660E\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"update-\u5E76\u53D1\u63A7\u5236",children:"UPDATE \u5E76\u53D1\u63A7\u5236"}),"\n",(0,r.jsxs)(n.p,{children:["\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5E76\u4E0D\u5141\u8BB8\u540C\u4E00\u65F6\u95F4\u5BF9\u540C\u4E00\u5F20\u8868\u5E76\u53D1\u8FDB\u884C\u591A\u4E2A ",(0,r.jsx)(n.code,{children:"UPDATE"})," \u64CD\u4F5C\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4E3B\u8981\u539F\u56E0\u662F\uFF0CDoris \u76EE\u524D\u652F\u6301\u7684\u662F\u884C\u66F4\u65B0\uFF0C\u8FD9\u610F\u5473\u7740\uFF0C\u5373\u4F7F\u7528\u6237\u58F0\u660E\u7684\u662F ",(0,r.jsx)(n.code,{children:"SET v2 = 1"}),"\uFF0C\u5B9E\u9645\u4E0A\uFF0C\u5176\u4ED6\u6240\u6709\u7684 Value \u5217\u4E5F\u4F1A\u88AB\u8986\u76D6\u4E00\u904D\uFF08\u5C3D\u7BA1\u503C\u6CA1\u6709\u53D8\u5316\uFF09\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8FD9\u5C31\u4F1A\u5B58\u5728\u4E00\u4E2A\u95EE\u9898\uFF0C\u5982\u679C\u540C\u65F6\u6709\u4E24\u4E2A ",(0,r.jsx)(n.code,{children:"UPDATE"})," \u64CD\u4F5C\u5BF9\u540C\u4E00\u884C\u8FDB\u884C\u66F4\u65B0\uFF0C\u90A3\u4E48\u5176\u884C\u4E3A\u53EF\u80FD\u662F\u4E0D\u786E\u5B9A\u7684\uFF0C\u4E5F\u5C31\u662F\u53EF\u80FD\u5B58\u5728\u810F\u6570\u636E\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4F46\u5728\u5B9E\u9645\u5E94\u7528\u4E2D\uFF0C\u5982\u679C\u7528\u6237\u81EA\u5DF1\u53EF\u4EE5\u4FDD\u8BC1\u5373\u4F7F\u5E76\u53D1\u66F4\u65B0\uFF0C\u4E5F\u4E0D\u4F1A\u540C\u65F6\u5BF9\u540C\u4E00\u884C\u8FDB\u884C\u64CD\u4F5C\u7684\u8BDD\uFF0C\u5C31\u53EF\u4EE5\u624B\u52A8\u6253\u5F00\u5E76\u53D1\u9650\u5236\u3002\u901A\u8FC7\u4FEE\u6539 FE \u914D\u7F6E ",(0,r.jsx)(n.code,{children:"enable_concurrent_update"}),"\uFF0C\u5F53\u8BE5\u914D\u7F6E\u503C\u8BBE\u7F6E\u4E3A ",(0,r.jsx)(n.code,{children:"true"})," \u65F6\uFF0C\u66F4\u65B0\u547D\u4EE4\u5C06\u4E0D\u518D\u63D0\u4F9B\u4E8B\u52A1\u4FDD\u8BC1\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"sequence-\u5217",children:"Sequence \u5217"}),"\n",(0,r.jsx)(n.p,{children:"Unique \u6A21\u578B\u4E3B\u8981\u9488\u5BF9\u9700\u8981\u552F\u4E00\u4E3B\u952E\u7684\u573A\u666F\uFF0C\u53EF\u4EE5\u4FDD\u8BC1\u4E3B\u952E\u552F\u4E00\u6027\u7EA6\u675F\uFF0C\u5728\u540C\u4E00\u6279\u6B21\u4E2D\u5BFC\u5165\u6216\u8005\u4E0D\u540C\u6279\u6B21\u4E2D\u5BFC\u5165\u7684\u6570\u636E\uFF0C\u66FF\u6362\u987A\u5E8F\u4E0D\u505A\u4FDD\u8BC1\u3002\u66FF\u6362\u987A\u5E8F\u65E0\u6CD5\u4FDD\u8BC1\u5219\u65E0\u6CD5\u786E\u5B9A\u6700\u7EC8\u5BFC\u5165\u5230\u8868\u4E2D\u7684\u5177\u4F53\u6570\u636E\uFF0C\u5B58\u5728\u4E86\u4E0D\u786E\u5B9A\u6027\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0CDoris \u652F\u6301\u4E86 sequence \u5217\uFF0C\u901A\u8FC7\u7528\u6237\u5728\u5BFC\u5165\u65F6\u6307\u5B9A sequence \u5217\uFF0C\u76F8\u540C key \u5217\u4E0B\uFF0C\u6309\u7167 sequence \u5217\u7684\u503C\u8FDB\u884C\u66FF\u6362\uFF0C\u8F83\u5927\u503C\u53EF\u4EE5\u66FF\u6362\u8F83\u5C0F\u503C\uFF0C\u53CD\u4E4B\u5219\u65E0\u6CD5\u66FF\u6362\u3002\u8BE5\u65B9\u6CD5\u5C06\u987A\u5E8F\u7684\u786E\u5B9A\u4EA4\u7ED9\u4E86\u7528\u6237\uFF0C\u7531\u7528\u6237\u63A7\u5236\u66FF\u6362\u987A\u5E8F\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u5B9E\u73B0\u5C42\u9762\uFF0CDoris \u589E\u52A0\u4E86\u4E00\u4E2A\u9690\u85CF\u5217 ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.strong,{children:"DORIS_SEQUENCE_COL"})})," \uFF0C\u8BE5\u5217\u7684\u7C7B\u578B\u7531\u7528\u6237\u5728\u5EFA\u8868\u65F6\u6307\u5B9A\uFF0C\u5728\u5BFC\u5165\u65F6\u786E\u5B9A\u8BE5\u5217\u5177\u4F53\u503C\uFF0C\u5E76\u4F9D\u636E\u8BE5\u503C\u51B3\u5B9A\u76F8\u540C Key \u5217\u4E0B\uFF0C\u54EA\u4E00\u884C\u751F\u6548\u3002"]}),"\n",(0,r.jsx)(n.admonition,{title:"\u6CE8\u610F",type:"caution",children:(0,r.jsx)(n.p,{children:"sequence \u5217\u76EE\u524D\u53EA\u652F\u6301 Unique \u6A21\u578B\u3002"})}),"\n",(0,r.jsx)(n.h3,{id:"\u542F\u7528-sequence-column-\u652F\u6301",children:"\u542F\u7528 sequence column \u652F\u6301"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u65B0\u5EFA\u8868\u65F6\u5982\u679C\u8BBE\u7F6E\u4E86 ",(0,r.jsx)(n.code,{children:"function_column.sequence_col"})," \u6216\u8005 ",(0,r.jsx)(n.code,{children:"function_column.sequence_type"})," \uFF0C\u5219\u65B0\u5EFA\u8868\u5C06\u652F\u6301 sequence column\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5BF9\u4E8E\u4E00\u4E2A\u4E0D\u652F\u6301 sequence column \u7684\u8868\uFF0C\u5982\u679C\u60F3\u8981\u4F7F\u7528\u8BE5\u529F\u80FD\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B\u8BED\u53E5\uFF1A ",(0,r.jsx)(n.code,{children:'ALTER TABLE example_db.my_table ENABLE FEATURE "SEQUENCE_LOAD" WITH PROPERTIES ("function_column.sequence_type" = "Date")'})," \u6765\u542F\u7528\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679C\u4E0D\u786E\u5B9A\u4E00\u4E2A\u8868\u662F\u5426\u652F\u6301 sequence column\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E\u4E00\u4E2A session variable \u6765\u663E\u793A\u9690\u85CF\u5217 ",(0,r.jsx)(n.code,{children:"SET show_hidden_columns=true"})," \uFF0C\u4E4B\u540E\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"desc tablename"}),"\uFF0C\u5982\u679C\u8F93\u51FA\u4E2D\u6709 ",(0,r.jsx)(n.code,{children:"__DORIS_SEQUENCE_COL__"})," \u5217\u5219\u652F\u6301\uFF0C\u5982\u679C\u6CA1\u6709\u5219\u4E0D\u652F\u6301\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,r.jsx)(n.p,{children:"\u4E0B\u9762\u4EE5 Stream Load \u4E3A\u4F8B\u5C55\u793A\u4F7F\u7528\u65B9\u5F0F\uFF1A"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"1. \u521B\u5EFA\u652F\u6301 sequence col \u7684\u8868"})}),"\n",(0,r.jsx)(n.p,{children:"\u521B\u5EFA unique \u6A21\u578B\u7684 test_table \u6570\u636E\u8868\uFF0C\u5E76\u6307\u5B9A sequence \u5217\u6620\u5C04\u5230\u8868\u4E2D\u7684 modify_date \u5217\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE test.test_table\n(\n    user_id bigint,\n    date date,\n    group_id bigint,\n    modify_date date,\n    keyword VARCHAR(128)\n)\nUNIQUE KEY(user_id, date, group_id)\nDISTRIBUTED BY HASH (user_id) BUCKETS 32\nPROPERTIES(\n    "function_column.sequence_col" = \'modify_date\',\n    "replication_num" = "1",\n    "in_memory" = "false"\n);\n'})}),"\n",(0,r.jsx)(n.p,{children:"sequence_col \u7528\u6765\u6307\u5B9A sequence \u5217\u5230\u8868\u4E2D\u67D0\u4E00\u5217\u7684\u6620\u5C04\uFF0C\u8BE5\u5217\u53EF\u4EE5\u4E3A\u6574\u578B\u548C\u65F6\u95F4\u7C7B\u578B\uFF08DATE\u3001DATETIME\uFF09\uFF0C\u521B\u5EFA\u540E\u4E0D\u80FD\u66F4\u6539\u8BE5\u5217\u7684\u7C7B\u578B\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u521B\u5EFA\u597D\u7684\u8868\u7ED3\u6784\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"MySQL>  desc test_table;\n+-------------+--------------+------+-------+---------+---------+\n| Field       | Type         | Null | Key   | Default | Extra   |\n+-------------+--------------+------+-------+---------+---------+\n| user_id     | BIGINT       | No   | true  | NULL    |         |\n| date        | DATE         | No   | true  | NULL    |         |\n| group_id    | BIGINT       | No   | true  | NULL    |         |\n| modify_date | DATE         | No   | false | NULL    | REPLACE |\n| keyword     | VARCHAR(128) | No   | false | NULL    | REPLACE |\n+-------------+--------------+------+-------+---------+---------+\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u9664\u4E86\u4E0A\u8FF0\u6309\u7167\u5217\u6620\u5C04\u7684\u65B9\u5F0F\u6765\u6307\u5B9A sequence \u4E4B\u5916\uFF0CDoris \u8FD8\u652F\u6301\u6839\u636E\u6307\u5B9A\u7C7B\u578B\u521B\u5EFA sequence \u5217\u7684\u8BED\u6CD5\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u4E0D\u8981\u6C42\u5EFA\u8868\u65F6 schema \u4E2D\u5FC5\u987B\u6709\u4E00\u5217\u6765\u505A\u6620\u5C04\uFF0C\u4E0B\u9762\u662F\u5BF9\u5E94\u7684\u8BED\u6CD5\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"PROPERTIES (\n    \"function_column.sequence_type\" = 'Date',\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:"sequence_type \u7528\u6765\u6307\u5B9A sequence \u5217\u7684\u7C7B\u578B\uFF0C\u53EF\u4EE5\u4E3A\u6574\u578B\u548C\u65F6\u95F4\u7C7B\u578B\uFF08DATE\u3001DATETIME\uFF09\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"2. \u5BFC\u5165\u6570\u636E\uFF1A"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4F7F\u7528\u5217\u6620\u5C04\u7684\u65B9\u5F0F (",(0,r.jsx)(n.code,{children:"function_column.sequence_col"}),") \u6765\u6307\u5B9A sequence \u5217\uFF0C\u4E0D\u9700\u8981\u4FEE\u6539\u4EFB\u4F55\u53C2\u6570\u3002\u4E0B\u9762\u6211\u4EEC\u7528 Stream Load \u5BFC\u5165\u5982\u4E0B\u6570\u636E\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"1	2020-02-22	1	2020-02-21	a\n1	2020-02-22	1	2020-02-22	b\n1	2020-02-22	1	2020-03-05	c\n1	2020-02-22	1	2020-02-26	d\n1	2020-02-22	1	2020-02-23	e\n1	2020-02-22	1	2020-02-24	b\n"})}),"\n",(0,r.jsx)(n.p,{children:"stream load \u547D\u4EE4\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"curl --location-trusted -u root: -T testData http://host:port/api/test/test_table/_stream_load\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u7ED3\u679C\u4E3A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"MySQL> select * from test_table;\n+---------+------------+----------+-------------+---------+\n| user_id | date       | group_id | modify_date | keyword |\n+---------+------------+----------+-------------+---------+\n|       1 | 2020-02-22 |        1 | 2020-03-05  | c       |\n+---------+------------+----------+-------------+---------+\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u8FD9\u6B21\u5BFC\u5165\u4E2D\uFF0C\u56E0 sequence column \u7684\u503C\uFF08\u4E5F\u5C31\u662F modify_date \u4E2D\u7684\u503C\uFF09\u4E2D '2020-03-05' \u4E3A\u6700\u5927\u503C\uFF0C\u6240\u4EE5 keyword \u5217\u4E2D\u6700\u7EC8\u4FDD\u7559\u4E86 c\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679C\u5EFA\u8868\u65F6\u4F7F\u7528\u4E86 ",(0,r.jsx)(n.code,{children:"function_column.sequence_col"})," \u65B9\u5F0F\u6765\u6307\u5B9A sequence \u5217\uFF0C\u5728\u5BFC\u5165\u65F6\u9700\u8981\u6307\u5B9A sequence \u5217\u5230\u5176\u4ED6\u5217\u7684\u6620\u5C04\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"1. Stream Load"})}),"\n",(0,r.jsxs)(n.p,{children:["stream load \u7684\u5199\u6CD5\u662F\u5728 header \u4E2D\u7684 ",(0,r.jsx)(n.code,{children:"function_column.sequence_col"})," \u5B57\u6BB5\u6DFB\u52A0\u9690\u85CF\u5217\u5BF9\u5E94\u7684 source_sequence \u7684\u6620\u5C04\uFF0C\u793A\u4F8B"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'curl --location-trusted -u root -H "columns: k1,k2,source_sequence,v1,v2" -H "function_column.sequence_col: source_sequence" -T testData http://host:port/api/testDb/testTbl/_stream_load\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"2. Broker Load"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 ",(0,r.jsx)(n.code,{children:"ORDER BY"})," \u5904\u8BBE\u7F6E\u9690\u85CF\u5217\u6620\u5C04\u7684 source_sequence \u5B57\u6BB5"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'LOAD LABEL db1.label1\n(\n    DATA INFILE("hdfs://host:port/user/data/*/test.txt")\n    INTO TABLE `tbl1`\n    COLUMNS TERMINATED BY ","\n    (k1,k2,source_sequence,v1,v2)\n    ORDER BY source_sequence\n)\nWITH BROKER \'broker\'\n(\n    "username"="user",\n    "password"="pass"\n)\nPROPERTIES\n(\n    "timeout" = "3600"\n);\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"3. Routine Load"})}),"\n",(0,r.jsx)(n.p,{children:"\u6620\u5C04\u65B9\u5F0F\u540C\u4E0A\uFF0C\u793A\u4F8B\u5982\u4E0B"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'CREATE ROUTINE LOAD example_db.test1 ON example_tbl \n    [WITH MERGE|APPEND|DELETE]\n    COLUMNS(k1, k2, source_sequence, v1, v2),\n    WHERE k1  100 and k2 like "%doris%"\n    [ORDER BY source_sequence]\n    PROPERTIES\n    (\n        "desired_concurrent_number"="3",\n        "max_batch_interval" = "20",\n        "max_batch_rows" = "300000",\n        "max_batch_size" = "209715200",\n        "strict_mode" = "false"\n    )\n    FROM KAFKA\n    (\n        "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n        "kafka_topic" = "my_topic",\n        "kafka_partitions" = "0,1,2,3",\n        "kafka_offsets" = "101,0,0,200"\n    );\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"3. \u66FF\u6362\u987A\u5E8F\u7684\u4FDD\u8BC1"})}),"\n",(0,r.jsx)(n.p,{children:"\u4E0A\u8FF0\u6B65\u9AA4\u5B8C\u6210\u540E\uFF0C\u63A5\u7740\u5BFC\u5165\u5982\u4E0B\u6570\u636E"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"1	2020-02-22	1	2020-02-22	a\n1	2020-02-22	1	2020-02-23	b\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u67E5\u8BE2\u6570\u636E"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"MySQL [test]> select * from test_table;\n+---------+------------+----------+-------------+---------+\n| user_id | date       | group_id | modify_date | keyword |\n+---------+------------+----------+-------------+---------+\n|       1 | 2020-02-22 |        1 | 2020-03-05  | c       |\n+---------+------------+----------+-------------+---------+\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u8FD9\u6B21\u5BFC\u5165\u7684\u6570\u636E\u4E2D\uFF0C\u4F1A\u6BD4\u8F83\u6240\u6709\u5DF2\u5BFC\u5165\u6570\u636E\u7684 sequence column (\u4E5F\u5C31\u662F modify_date)\uFF0C\u5176\u4E2D '2020-03-05' \u4E3A\u6700\u5927\u503C\uFF0C\u6240\u4EE5 keyword \u5217\u4E2D\u6700\u7EC8\u4FDD\u7559\u4E86 c\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"4. \u518D\u5C1D\u8BD5\u5BFC\u5165\u5982\u4E0B\u6570\u636E"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"1	2020-02-22	1	2020-02-22	a\n1	2020-02-22	1	2020-03-23	w\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u67E5\u8BE2\u6570\u636E"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"MySQL [test]> select * from test_table;\n+---------+------------+----------+-------------+---------+\n| user_id | date       | group_id | modify_date | keyword |\n+---------+------------+----------+-------------+---------+\n|       1 | 2020-02-22 |        1 | 2020-03-23  | w       |\n+---------+------------+----------+-------------+---------+\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6B64\u65F6\u5C31\u53EF\u4EE5\u66FF\u6362\u8868\u4E2D\u539F\u6709\u7684\u6570\u636E\u3002\u7EFC\u4E0A\uFF0C\u5728\u5BFC\u5165\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u6BD4\u8F83\u6240\u6709\u6279\u6B21\u7684 sequence \u5217\u503C\uFF0C\u9009\u62E9\u503C\u6700\u5927\u7684\u8BB0\u5F55\u5BFC\u5165 Doris \u8868\u4E2D\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u6CE8\u610F",children:"\u6CE8\u610F"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u4E3A\u9632\u6B62\u8BEF\u7528\uFF0C\u5728 StreamLoad/BrokerLoad \u7B49\u5BFC\u5165\u4EFB\u52A1\u4EE5\u53CA\u884C\u66F4\u65B0 insert \u8BED\u53E5\u4E2D\uFF0C\u7528\u6237\u5FC5\u987B\u663E\u793A\u6307\u5B9A sequence \u5217 (\u9664\u975E sequence \u5217\u7684\u9ED8\u8BA4\u503C\u4E3A CURRENT_TIMESTAMP)\uFF0C\u4E0D\u7136\u4F1A\u6536\u5230\u4EE5\u4E0B\u62A5\u9519\u4FE1\u606F\uFF1A"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"Table test_tbl has sequence column, need to specify the sequence column\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u81EA\u7248\u672C 2.0 \u8D77\uFF0CDoris \u5BF9 Unique Key \u8868\u7684 Merge-on-Write \u5B9E\u73B0\u652F\u6301\u4E86\u90E8\u5206\u5217\u66F4\u65B0\u80FD\u529B\uFF0C\u5728\u90E8\u5206\u5217\u66F4\u65B0\u5BFC\u5165\u4E2D\uFF0C\u7528\u6237\u6BCF\u6B21\u53EF\u4EE5\u53EA\u66F4\u65B0\u4E00\u90E8\u5206\u5217\uFF0C\u56E0\u6B64\u5E76\u4E0D\u662F\u5FC5\u987B\u8981\u5305\u542B sequence \u5217\u3002\u82E5\u7528\u6237\u63D0\u4EA4\u7684\u5BFC\u5165\u4EFB\u52A1\u4E2D\uFF0C\u5305\u542B sequence \u5217\uFF0C\u5219\u884C\u4E3A\u65E0\u5F71\u54CD\uFF1B\u82E5\u7528\u6237\u63D0\u4EA4\u7684\u5BFC\u5165\u4EFB\u52A1\u4E0D\u5305\u542B sequence \u5217\uFF0CDoris \u4F1A\u4F7F\u7528\u5339\u914D\u7684\u5386\u53F2\u6570\u636E\u4E2D\u7684 sequence \u5217\u4F5C\u4E3A\u66F4\u65B0\u540E\u8BE5\u884C\u7684 sequence \u5217\u7684\u503C\u3002\u5982\u679C\u5386\u53F2\u6570\u636E\u4E2D\u4E0D\u5B58\u5728\u76F8\u540C key \u7684\u5217\uFF0C\u5219\u4F1A\u81EA\u52A8\u7528 null \u6216\u9ED8\u8BA4\u503C\u586B\u5145\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5F53\u51FA\u73B0\u5E76\u53D1\u5BFC\u5165\u65F6\uFF0CDoris \u4F1A\u5229\u7528 MVCC \u673A\u5236\u6765\u4FDD\u8BC1\u6570\u636E\u7684\u6B63\u786E\u6027\u3002\u5982\u679C\u4E24\u6279\u6570\u636E\u5BFC\u5165\u90FD\u66F4\u65B0\u4E86\u4E00\u4E2A\u76F8\u540C key \u7684\u4E0D\u540C\u5217\uFF0C\u5219\u5176\u4E2D\u7CFB\u7EDF\u7248\u672C\u8F83\u9AD8\u7684\u5BFC\u5165\u4EFB\u52A1\u4F1A\u5728\u7248\u672C\u8F83\u4F4E\u7684\u5BFC\u5165\u4EFB\u52A1\u6210\u529F\u540E\uFF0C\u4F7F\u7528\u7248\u672C\u8F83\u4F4E\u7684\u5BFC\u5165\u4EFB\u52A1\u5199\u5165\u7684\u76F8\u540C key \u7684\u6570\u636E\u884C\u91CD\u65B0\u8FDB\u884C\u8865\u9F50\u3002"}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return d}});var c=s(667294);let r={},l=c.createContext(r);function d(e){let n=c.useContext(l);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),c.createElement(l.Provider,{value:n},e.children)}}}]);