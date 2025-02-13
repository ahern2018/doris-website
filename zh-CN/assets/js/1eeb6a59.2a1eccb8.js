"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["568106"],{713100:function(n,e,s){s.r(e),s.d(e,{metadata:()=>d,contentTitle:()=>i,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>l});var d=JSON.parse('{"id":"sql-manual/sql-functions/table-valued-functions/hdfs","title":"HDFS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/table-valued-functions/hdfs.md","sourceDirName":"sql-manual/sql-functions/table-valued-functions","slug":"/sql-manual/sql-functions/table-valued-functions/hdfs","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/table-valued-functions/hdfs","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"HDFS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"S3","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/table-valued-functions/s3"},"next":{"title":"LOCAL","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/table-valued-functions/local"}}'),r=s("785893"),t=s("250065");let l={title:"HDFS",language:"zh-CN"},i=void 0,c={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u586B\u53C2\u6570 (Required Parameters)",id:"\u5FC5\u586B\u53C2\u6570-required-parameters",level:2},{value:"\u53EF\u9009\u53C2\u6570 (Optional Parameters)",id:"\u53EF\u9009\u53C2\u6570-optional-parameters",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(n){let e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsxs)(e.p,{children:["HDFS \u8868\u51FD\u6570\uFF08table-valued-function,tvf\uFF09\uFF0C\u53EF\u4EE5\u8BA9\u7528\u6237\u50CF\u8BBF\u95EE\u5173\u7CFB\u8868\u683C\u5F0F\u6570\u636E\u4E00\u6837\uFF0C\u8BFB\u53D6\u5E76\u8BBF\u95EE HDFS \u4E0A\u7684\u6587\u4EF6\u5185\u5BB9\u3002\u76EE\u524D\u652F\u6301",(0,r.jsx)(e.code,{children:"csv/csv_with_names/csv_with_names_and_types/json/parquet/orc"}),"\u6587\u4EF6\u683C\u5F0F\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'HDFS(\n    "uri" = "<uri>",\n    "fs.defaultFS" = "<fs_defaultFS>",\n    "hadoop.username" = "<hadoop_username>",\n    "format" = "<format>",\n    [, "<optional_property_key>" = "<optional_property_value>" [, ...] ]\n  );\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\u5FC5\u586B\u53C2\u6570-required-parameters",children:"\u5FC5\u586B\u53C2\u6570 (Required Parameters)"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u53C2\u6570"}),(0,r.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"uri"})}),(0,r.jsx)(e.td,{children:"\u8BBF\u95EE HDFS \u7684 URI\u3002\u5982\u679C URI \u8DEF\u5F84\u4E0D\u5B58\u5728\u6216\u6587\u4EF6\u4E3A\u7A7A\uFF0CHDFS TVF \u5C06\u8FD4\u56DE\u7A7A\u96C6\u5408\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"fs.defaultFS"})}),(0,r.jsx)(e.td,{children:"HDFS \u7684\u9ED8\u8BA4\u6587\u4EF6\u7CFB\u7EDF URI"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"hadoop.username"})}),(0,r.jsx)(e.td,{children:"\u5FC5\u586B\uFF0C\u53EF\u4EE5\u662F\u4EFB\u610F\u5B57\u7B26\u4E32\uFF0C\u4F46\u4E0D\u80FD\u4E3A\u7A7A\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"format"})}),(0,r.jsxs)(e.td,{children:["\u6587\u4EF6\u683C\u5F0F\uFF0C\u5FC5\u586B\uFF0C\u76EE\u524D\u652F\u6301 ",(0,r.jsx)(e.code,{children:"csv/csv_with_names/csv_with_names_and_types/json/parquet/orc/avro"})]})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u53EF\u9009\u53C2\u6570-optional-parameters",children:"\u53EF\u9009\u53C2\u6570 (Optional Parameters)"}),"\n",(0,r.jsxs)(e.p,{children:["\u4E0A\u8FF0\u8BED\u6CD5\u4E2D\u7684 ",(0,r.jsx)(e.code,{children:"optional_property_key"})," \u53EF\u4EE5\u6309\u9700\u4ECE\u4EE5\u4E0B\u5217\u8868\u4E2D\u9009\u53D6\u5BF9\u5E94\u7684\u53C2\u6570\uFF0C",(0,r.jsx)(e.code,{children:"optional_property_value"})," \u5219\u4E3A\u8BE5\u53C2\u6570\u7684\u503C"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u53C2\u6570"}),(0,r.jsx)(e.th,{children:"\u8BF4\u660E"}),(0,r.jsx)(e.th,{children:"\u5907\u6CE8"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"hadoop.security.authentication"})}),(0,r.jsx)(e.td,{children:"HDFS \u5B89\u5168\u8BA4\u8BC1\u7C7B\u578B"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"hadoop.username"})}),(0,r.jsx)(e.td,{children:"\u5907\u7528 HDFS \u7528\u6237\u540D"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"hadoop.kerberos.principal"})}),(0,r.jsx)(e.td,{children:"Kerberos \u4E3B\u4F53"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"hadoop.kerberos.keytab"})}),(0,r.jsx)(e.td,{children:"Kerberos \u5BC6\u94A5\u8868"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"dfs.client.read.shortcircuit"})}),(0,r.jsx)(e.td,{children:"\u542F\u7528\u77ED\u8DEF\u8BFB\u53D6"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"dfs.domain.socket.path"})}),(0,r.jsx)(e.td,{children:"\u57DF\u5957\u63A5\u5B57\u8DEF\u5F84"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"dfs.nameservices"})}),(0,r.jsx)(e.td,{children:"HA \u6A21\u5F0F\u4E0B\u7684\u547D\u540D\u670D\u52A1"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"dfs.ha.namenodes.your-nameservices"})}),(0,r.jsx)(e.td,{children:"HA \u6A21\u5F0F\u4E0B\u7684 namenode \u8282\u70B9\u914D\u7F6E"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"dfs.namenode.rpc-address.your-nameservices.your-namenode"})}),(0,r.jsx)(e.td,{children:"\u6307\u5B9A namenode \u7684 RPC \u5730\u5740"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"dfs.client.failover.proxy.provider.your-nameservices"})}),(0,r.jsx)(e.td,{children:"\u6307\u5B9A failover \u7684\u4EE3\u7406\u63D0\u4F9B\u7A0B\u5E8F"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"column_separator"})}),(0,r.jsxs)(e.td,{children:["\u5217\u5206\u5272\u7B26\uFF0C\u9ED8\u8BA4\u4E3A ",(0,r.jsx)(e.code,{children:"\\t"})]}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"line_delimiter"})}),(0,r.jsxs)(e.td,{children:["\u884C\u5206\u5272\u7B26\uFF0C\u9ED8\u8BA4\u4E3A ",(0,r.jsx)(e.code,{children:"\\n"})]}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"compress_type"})}),(0,r.jsx)(e.td,{children:"\u76EE\u524D\u652F\u6301 UNKNOWN/PLAIN/GZ/LZO/BZ2/LZ4FRAME/DEFLATE/SNAPPYBLOCK\u3002\u9ED8\u8BA4\u503C\u4E3A UNKNOWN, \u5C06\u4F1A\u6839\u636E uri \u7684\u540E\u7F00\u81EA\u52A8\u63A8\u65AD\u7C7B\u578B"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"read_json_by_line"})}),(0,r.jsxs)(e.td,{children:["\u5BF9 JSON \u683C\u5F0F\u5BFC\u5165\uFF0C\u9ED8\u8BA4\u4E3A ",(0,r.jsx)(e.code,{children:"true"})]}),(0,r.jsxs)(e.td,{children:["\u53C2\u8003\uFF1A",(0,r.jsx)(e.a,{href:"../../../data-operate/import/import-way/load-json-format.md",children:"JSON Load"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"strip_outer_array"})}),(0,r.jsxs)(e.td,{children:["\u5BF9 JSON \u683C\u5F0F\u5BFC\u5165\uFF0C\u9ED8\u8BA4\u4E3A ",(0,r.jsx)(e.code,{children:"false"})]}),(0,r.jsxs)(e.td,{children:["\u53C2\u8003\uFF1A",(0,r.jsx)(e.a,{href:"../../../data-operate/import/import-way/load-json-format.md",children:"JSON Load"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"json_root"})}),(0,r.jsx)(e.td,{children:"\u5BF9 JSON \u683C\u5F0F\u5BFC\u5165\uFF0C\u9ED8\u8BA4\u4E3A\u7A7A"}),(0,r.jsxs)(e.td,{children:["\u53C2\u8003\uFF1A",(0,r.jsx)(e.a,{href:"../../../data-operate/import/import-way/load-json-format.md",children:"JSON Load"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"json_paths"})}),(0,r.jsx)(e.td,{children:"\u5BF9 JSON \u683C\u5F0F\u5BFC\u5165\uFF0C\u9ED8\u8BA4\u4E3A\u7A7A"}),(0,r.jsxs)(e.td,{children:["\u53C2\u8003\uFF1A",(0,r.jsx)(e.a,{href:"../../../data-operate/import/import-way/load-json-format.md",children:"JSON Load"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"num_as_string"})}),(0,r.jsxs)(e.td,{children:["\u5BF9 JSON \u683C\u5F0F\u5BFC\u5165\uFF0C\u9ED8\u8BA4\u4E3A ",(0,r.jsx)(e.code,{children:"false"})]}),(0,r.jsxs)(e.td,{children:["\u53C2\u8003\uFF1A",(0,r.jsx)(e.a,{href:"../../../data-operate/import/import-way/load-json-format.md",children:"JSON Load"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"fuzzy_parse"})}),(0,r.jsxs)(e.td,{children:["\u5BF9 JSON \u683C\u5F0F\u5BFC\u5165\uFF0C\u9ED8\u8BA4\u4E3A ",(0,r.jsx)(e.code,{children:"false"})]}),(0,r.jsxs)(e.td,{children:["\u53C2\u8003\uFF1A",(0,r.jsx)(e.a,{href:"../../../data-operate/import/import-way/load-json-format.md",children:"JSON Load"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"trim_double_quotes"})}),(0,r.jsxs)(e.td,{children:["\u5BF9 CSV \u683C\u5F0F\u5BFC\u5165\uFF0C\u5E03\u5C14\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u4E3A ",(0,r.jsx)(e.code,{children:"false"}),"\uFF0C\u4E3A ",(0,r.jsx)(e.code,{children:"true"})," \u65F6\u88C1\u526A\u6BCF\u4E2A\u5B57\u6BB5\u7684\u5916\u5C42\u53CC\u5F15\u53F7"]}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"skip_lines"})}),(0,r.jsxs)(e.td,{children:["\u5BF9 CSV \u683C\u5F0F\u5BFC\u5165\uFF0C\u6574\u6570\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u4E3A 0\uFF0C\u8DF3\u8FC7 CSV \u6587\u4EF6\u524D\u51E0\u884C\uFF0C",(0,r.jsx)(e.code,{children:"csv_with_names"})," \u6216 ",(0,r.jsx)(e.code,{children:"csv_with_names_and_types"})," \u65F6\u5931\u6548"]}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"path_partition_keys"})}),(0,r.jsx)(e.td,{children:'\u6307\u5B9A\u6587\u4EF6\u8DEF\u5F84\u4E2D\u643A\u5E26\u7684\u5206\u533A\u5217\u540D\uFF0C\u4F8B\u5982/path/to/city=beijing/date="2023-07-09", \u5219\u586B\u5199path_partition_keys="city,date"\uFF0C\u5C06\u4F1A\u81EA\u52A8\u4ECE\u8DEF\u5F84\u4E2D\u8BFB\u53D6\u76F8\u5E94\u5217\u540D\u548C\u5217\u503C\u8FDB\u884C\u5BFC\u5165'}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"resource"})}),(0,r.jsxs)(e.td,{children:["\u6307\u5B9A Resource \u540D\uFF0CHDFS TVF \u53EF\u4EE5\u5229\u7528\u5DF2\u6709\u7684 HFDS Resource \u6765\u76F4\u63A5\u8BBF\u95EE HDFS\u3002\u521B\u5EFA HDFS Resource \u7684\u65B9\u6CD5\u53EF\u4EE5\u53C2\u7167 ",(0,r.jsx)(e.a,{href:"../../sql-statements/cluster-management/compute-management/CREATE-RESOURCE",children:"CREATE-RESOURCE"})]}),(0,r.jsx)(e.td,{children:"\u4EC5\u652F\u6301 2.1.4 \u53CA\u4EE5\u4E0A\u7248\u672C"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,r.jsx)(e.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,r.jsx)(e.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"USAGE_PRIV"}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"\u8868"}),(0,r.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"SELECT_PRIV"}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"\u8868"}),(0,r.jsx)(e.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u8BFB\u53D6\u5E76\u8BBF\u95EE HDFS \u5B58\u50A8\u4E0A\u7684 CSV \u683C\u5F0F\u6587\u4EF6"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'select * from hdfs(\n              "uri" = "hdfs://127.0.0.1:842/user/doris/csv_format_test/student.csv",\n              "fs.defaultFS" = "hdfs://127.0.0.1:8424",\n              "hadoop.username" = "doris",\n              "format" = "csv");\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"  +------+---------+------+\n  | c1   | c2      | c3   |\n  +------+---------+------+\n  | 1    | alice   | 18   |\n  | 2    | bob     | 20   |\n  | 3    | jack    | 24   |\n  | 4    | jackson | 19   |\n  | 5    | liming  | 18   |\n  +------+---------+------+\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u8BFB\u53D6\u5E76\u8BBF\u95EE HA \u6A21\u5F0F\u7684 HDFS \u5B58\u50A8\u4E0A\u7684 CSV \u683C\u5F0F\u6587\u4EF6"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'select * from hdfs(\n            "uri" = "hdfs://127.0.0.1:842/user/doris/csv_format_test/student.csv",\n            "fs.defaultFS" = "hdfs://127.0.0.1:8424",\n            "hadoop.username" = "doris",\n            "format" = "csv",\n            "dfs.nameservices" = "my_hdfs",\n            "dfs.ha.namenodes.my_hdfs" = "nn1,nn2",\n            "dfs.namenode.rpc-address.my_hdfs.nn1" = "nanmenode01:8020",\n            "dfs.namenode.rpc-address.my_hdfs.nn2" = "nanmenode02:8020",\n            "dfs.client.failover.proxy.provider.my_hdfs" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider");\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"  +------+---------+------+\n  | c1   | c2      | c3   |\n  +------+---------+------+\n  | 1    | alice   | 18   |\n  | 2    | bob     | 20   |\n  | 3    | jack    | 24   |\n  | 4    | jackson | 19   |\n  | 5    | liming  | 18   |\n  +------+---------+------+\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u53EF\u4EE5\u914D\u5408 ",(0,r.jsx)(e.code,{children:"desc function"})," \u4F7F\u7528\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'desc function hdfs(\n            "uri" = "hdfs://127.0.0.1:8424/user/doris/csv_format_test/student_with_names.csv",\n            "fs.defaultFS" = "hdfs://127.0.0.1:8424",\n            "hadoop.username" = "doris",\n            "format" = "csv_with_names");\n'})}),"\n"]}),"\n"]})]})}function h(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return l}});var d=s(667294);let r={},t=d.createContext(r);function l(n){let e=d.useContext(t);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),d.createElement(t.Provider,{value:e},n.children)}}}]);