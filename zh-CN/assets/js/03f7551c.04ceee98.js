"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["111582"],{742199:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>h,assets:()=>i,toc:()=>d,frontMatter:()=>a});var r=JSON.parse('{"id":"sql-manual/sql-functions/table-valued-functions/s3","title":"S3","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/table-valued-functions/s3.md","sourceDirName":"sql-manual/sql-functions/table-valued-functions","slug":"/sql-manual/sql-functions/table-valued-functions/s3","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/table-valued-functions/s3","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"S3","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Outer \u7EC4\u5408\u5668","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/table-functions/explode-numbers-outer"},"next":{"title":"HDFS","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/table-valued-functions/hdfs"}}'),t=s("785893"),c=s("250065");let a={title:"S3",language:"zh-CN"},l=void 0,i={},d=[{value:"S3",id:"s3",level:2},{value:"Name",id:"name",level:3},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function o(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"s3",children:"S3"}),"\n",(0,t.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,t.jsx)(n.p,{children:"s3"}),"\n",(0,t.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsxs)(n.p,{children:["S3 \u8868\u51FD\u6570\uFF08table-valued-function,tvf\uFF09\uFF0C\u53EF\u4EE5\u8BA9\u7528\u6237\u50CF\u8BBF\u95EE\u5173\u7CFB\u8868\u683C\u5F0F\u6570\u636E\u4E00\u6837\uFF0C\u8BFB\u53D6\u5E76\u8BBF\u95EE S3 \u517C\u5BB9\u7684\u5BF9\u8C61\u5B58\u50A8\u4E0A\u7684\u6587\u4EF6\u5185\u5BB9\u3002\u76EE\u524D\u652F\u6301",(0,t.jsx)(n.code,{children:"csv/csv_with_names/csv_with_names_and_types/json/parquet/orc"}),"\u6587\u4EF6\u683C\u5F0F\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u8BED\u6CD5"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'s3(\n  "uri" = "..",\n  "s3.access_key" = "...",\n  "s3.secret_key" = "...",\n  "s3.region" = "...",\n  "format" = "csv",\n  "keyn" = "valuen",\n  ...\n  );\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u53C2\u6570\u8BF4\u660E"})}),"\n",(0,t.jsxs)(n.p,{children:["S3 TVF \u4E2D\u7684\u6BCF\u4E00\u4E2A\u53C2\u6570\u90FD\u662F\u4E00\u4E2A ",(0,t.jsx)(n.code,{children:'"key"="value"'})," \u5BF9\u3002\n\u8BBF\u95EE S3 \u76F8\u5173\u53C2\u6570\uFF1A"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"uri"}),"\uFF1A (\u5FC5\u586B) \u8BBF\u95EE S3 \u7684 URI\uFF0CS3 \u8868\u51FD\u6570\u4F1A\u6839\u636E ",(0,t.jsx)(n.code,{children:"use_path_style"})," \u53C2\u6570\u6765\u51B3\u5B9A\u662F\u5426\u4F7F\u7528 Path Style \u8BBF\u95EE\u65B9\u5F0F\uFF0C\u9ED8\u8BA4\u4E3A Virtual-hosted Style \u65B9\u5F0F"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"s3.access_key"}),"\uFF1A (\u5FC5\u586B)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"s3.secret_key"}),"\uFF1A (\u5FC5\u586B)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"s3.region"}),"\uFF1A (\u9009\u586B)\u3002\u5982\u679C Minio \u670D\u52A1\u8BBE\u7F6E\u4E86\u5176\u4ED6\u7684 Region\uFF0C\u90A3\u4E48\u5FC5\u586B\uFF0C\u5426\u5219\u9ED8\u8BA4\u4F7F\u7528",(0,t.jsx)(n.code,{children:"us-east-1"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"s3.session_token"}),"\uFF1A (\u9009\u586B)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"use_path_style"}),"\uFF1A(\u9009\u586B) \u9ED8\u8BA4\u4E3A",(0,t.jsx)(n.code,{children:"false"})," \u3002S3 SDK \u9ED8\u8BA4\u4F7F\u7528 Virtual-hosted Syle \u65B9\u5F0F\u3002\u4F46\u67D0\u4E9B\u5BF9\u8C61\u5B58\u50A8\u7CFB\u7EDF\u53EF\u80FD\u6CA1\u5F00\u542F\u6216\u6CA1\u652F\u6301 Virtual-hosted Style \u65B9\u5F0F\u7684\u8BBF\u95EE\uFF0C\u6B64\u65F6\u6211\u4EEC\u53EF\u4EE5\u6DFB\u52A0 ",(0,t.jsx)(n.code,{children:"use_path_style"})," \u53C2\u6570\u6765\u5F3A\u5236\u4F7F\u7528 Path Style \u65B9\u5F0F\u3002\u6BD4\u5982 ",(0,t.jsx)(n.code,{children:"minio"})," \u9ED8\u8BA4\u60C5\u51B5\u4E0B\u53EA\u5141\u8BB8 ",(0,t.jsx)(n.code,{children:"path style"})," \u8BBF\u95EE\u65B9\u5F0F\uFF0C\u6240\u4EE5\u5728\u8BBF\u95EE MinIO \u65F6\u8981\u52A0\u4E0A ",(0,t.jsx)(n.code,{children:"use_path_style=true"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"force_parsing_by_standard_uri"}),"\uFF1A\uFF08\u9009\u586B\uFF09\u9ED8\u8BA4 ",(0,t.jsx)(n.code,{children:"false"})," \u3002\u6211\u4EEC\u53EF\u4EE5\u6DFB\u52A0 ",(0,t.jsx)(n.code,{children:"force_parsing_by_standard_uri"})," \u53C2\u6570\u6765\u5F3A\u5236\u5C06\u975E\u6807\u51C6\u7684 URI \u89E3\u6790\u4E3A\u6807\u51C6 URI\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u5BF9\u4E8E AWS S3\uFF0C\u6807\u51C6 uri styles \u6709\u4EE5\u4E0B\u51E0\u79CD\uFF1A"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["AWS Client Style(Hadoop S3 Style): ",(0,t.jsx)(n.code,{children:"s3://my-bucket/path/to/file?versionId=abc123&partNumber=77&partNumber=88"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["Virtual Host Style:",(0,t.jsx)(n.code,{children:"https://my-bucket.s3.us-west-1.amazonaws.com/resources/doc.txt?versionId=abc123&partNumber=77&partNumber=88"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["Path Style:",(0,t.jsx)(n.code,{children:"https://s3.us-west-1.amazonaws.com/my-bucket/resources/doc.txt?versionId=abc123&partNumber=77&partNumber=88"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u9664\u4E86\u652F\u6301\u4EE5\u4E0A\u4E09\u4E2A\u6807\u51C6\u5E38\u89C1\u7684 URI Styles, \u8FD8\u652F\u6301\u5176\u4ED6\u4E00\u4E9B URI Styles\uFF08\u4E5F\u8BB8\u4E0D\u5E38\u89C1\uFF0C\u4F46\u4E5F\u6709\u53EF\u80FD\u6709\uFF09\uFF1A"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Virtual Host AWS Client (Hadoop S3) Mixed Style:\n",(0,t.jsx)(n.code,{children:"s3://my-bucket.s3.us-west-1.amazonaws.com/resources/doc.txt?versionId=abc123&partNumber=77&partNumber=88"})]}),"\n",(0,t.jsxs)(n.li,{children:["Path AWS Client (Hadoop S3) Mixed Style:\n",(0,t.jsx)(n.code,{children:"s3://s3.us-west-1.amazonaws.com/my-bucket/resources/doc.txt?versionId=abc123&partNumber=77&partNumber=88"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u8BE6\u7EC6\u4F7F\u7528\u6848\u4F8B\u53EF\u4EE5\u53C2\u8003\u6700\u4E0B\u65B9 Best Practice\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u6587\u4EF6\u683C\u5F0F\u53C2\u6570\uFF1A"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"format"}),"\uFF1A(\u5FC5\u586B) \u76EE\u524D\u652F\u6301 ",(0,t.jsx)(n.code,{children:"csv/csv_with_names/csv_with_names_and_types/json/parquet/orc"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"column_separator"}),"\uFF1A(\u9009\u586B) \u5217\u5206\u5272\u7B26\uFF0C\u9ED8\u8BA4\u4E3A",(0,t.jsx)(n.code,{children:"\\t"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"line_delimiter"}),"\uFF1A(\u9009\u586B) \u884C\u5206\u5272\u7B26\uFF0C\u9ED8\u8BA4\u4E3A",(0,t.jsx)(n.code,{children:"\\n"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"compress_type"}),": (\u9009\u586B) \u76EE\u524D\u652F\u6301 ",(0,t.jsx)(n.code,{children:"UNKNOWN/PLAIN/GZ/LZO/BZ2/LZ4FRAME/DEFLATE/SNAPPYBLOCK"}),"\u3002\u9ED8\u8BA4\u503C\u4E3A ",(0,t.jsx)(n.code,{children:"UNKNOWN"}),", \u5C06\u4F1A\u6839\u636E ",(0,t.jsx)(n.code,{children:"uri"})," \u7684\u540E\u7F00\u81EA\u52A8\u63A8\u65AD\u7C7B\u578B\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4E0B\u9762 6 \u4E2A\u53C2\u6570\u662F\u7528\u4E8E JSON \u683C\u5F0F\u7684\u5BFC\u5165\uFF0C\u5177\u4F53\u4F7F\u7528\u65B9\u6CD5\u53EF\u4EE5\u53C2\u7167\uFF1A",(0,t.jsx)(n.a,{href:"../../../data-operate/import/import-way/load-json-format.md",children:"Json Load"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"read_json_by_line"}),"\uFF1A (\u9009\u586B) \u9ED8\u8BA4\u4E3A ",(0,t.jsx)(n.code,{children:'"true"'})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"strip_outer_array"}),"\uFF1A (\u9009\u586B) \u9ED8\u8BA4\u4E3A ",(0,t.jsx)(n.code,{children:'"false"'})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"json_root"}),"\uFF1A (\u9009\u586B) \u9ED8\u8BA4\u4E3A\u7A7A"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"jsonpaths"}),"\uFF1A (\u9009\u586B) \u9ED8\u8BA4\u4E3A\u7A7A"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"num_as_string"}),"\uFF1A (\u9009\u586B) \u9ED8\u8BA4\u4E3A ",(0,t.jsx)(n.code,{children:"false"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"fuzzy_parse"}),"\uFF1A (\u9009\u586B) \u9ED8\u8BA4\u4E3A ",(0,t.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u4E0B\u9762 2 \u4E2A\u53C2\u6570\u662F\u7528\u4E8E CSV \u683C\u5F0F\u7684\u5BFC\u5165"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"trim_double_quotes"}),"\uFF1A\u5E03\u5C14\u7C7B\u578B\uFF0C\u9009\u586B\uFF0C\u9ED8\u8BA4\u503C\u4E3A ",(0,t.jsx)(n.code,{children:"false"}),"\uFF0C\u4E3A ",(0,t.jsx)(n.code,{children:"true"})," \u65F6\u8868\u793A\u88C1\u526A\u6389 CSV \u6587\u4EF6\u6BCF\u4E2A\u5B57\u6BB5\u6700\u5916\u5C42\u7684\u53CC\u5F15\u53F7"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"skip_lines"}),"\uFF1A\u6574\u6570\u7C7B\u578B\uFF0C\u9009\u586B\uFF0C\u9ED8\u8BA4\u503C\u4E3A 0\uFF0C\u542B\u4E49\u4E3A\u8DF3\u8FC7 CSV \u6587\u4EF6\u7684\u524D\u51E0\u884C\u3002\u5F53\u8BBE\u7F6E format \u8BBE\u7F6E\u4E3A ",(0,t.jsx)(n.code,{children:"csv_with_names"})," \u6216 ",(0,t.jsx)(n.code,{children:"csv_with_names_and_types"})," \u65F6\uFF0C\u8BE5\u53C2\u6570\u4F1A\u5931\u6548"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u5176\u4ED6\u53C2\u6570\uFF1A"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"path_partition_keys"}),"\uFF1A\uFF08\u9009\u586B\uFF09\u6307\u5B9A\u6587\u4EF6\u8DEF\u5F84\u4E2D\u643A\u5E26\u7684\u5206\u533A\u5217\u540D\uFF0C\u4F8B\u5982 ",(0,t.jsx)(n.code,{children:'/path/to/city=beijing/date="2023-07-09"'}),", \u5219\u586B\u5199 ",(0,t.jsx)(n.code,{children:'path_partition_keys="city,date"'}),"\uFF0C\u5C06\u4F1A\u81EA\u52A8\u4ECE\u8DEF\u5F84\u4E2D\u8BFB\u53D6\u76F8\u5E94\u5217\u540D\u548C\u5217\u503C\u8FDB\u884C\u5BFC\u5165\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"resource"}),"\uFF1A\uFF08\u9009\u586B\uFF09\u6307\u5B9A Resource \u540D\uFF0CS3 TVF \u53EF\u4EE5\u5229\u7528\u5DF2\u6709\u7684 S3 Resource \u6765\u76F4\u63A5\u8BBF\u95EE S3\u3002\u521B\u5EFA S3 Resource \u7684\u65B9\u6CD5\u53EF\u4EE5\u53C2\u7167 ",(0,t.jsx)(n.a,{href:"../../sql-statements/Data-Definition-Statements/Create/CREATE-RESOURCE.md",children:"CREATE-RESOURCE"}),"\u3002\u8BE5\u529F\u80FD\u81EA 2.1.4 \u7248\u672C\u5F00\u59CB\u652F\u6301\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"\u6CE8\u610F",type:"tip",children:(0,t.jsx)(n.p,{children:"\u76F4\u63A5\u67E5\u8BE2 TVF \u6216\u57FA\u4E8E\u8BE5 TVF \u521B\u5EFA View \uFF0C\u9700\u8981\u62E5\u6709\u8BE5 Resource \u7684 USAGE \u6743\u9650\uFF0C\u67E5\u8BE2\u57FA\u4E8E TVF \u521B\u5EFA\u7684 View \uFF0C\u53EA\u9700\u8981\u8BE5 View \u7684 SELECT \u6743\u9650\u3002"})}),"\n",(0,t.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,t.jsx)(n.p,{children:"\u8BFB\u53D6\u5E76\u8BBF\u95EE S3 \u517C\u5BB9\u7684\u5BF9\u8C61\u5B58\u50A8\u4E0A\u7684 CSV \u683C\u5F0F\u6587\u4EF6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'select * from s3("uri" = "http://127.0.0.1:9312/test2/student1.csv",\n                "s3.access_key"= "minioadmin",\n                "s3.secret_key" = "minioadmin",\n                "format" = "csv",\n                "use_path_style" = "true") order by c1;\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u53EF\u4EE5\u914D\u5408 ",(0,t.jsx)(n.code,{children:"desc function"})," \u4F7F\u7528"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'MySQL [(none)]> Desc function s3("uri" = "http://127.0.0.1:9312/test2/student1.csv",\n                 "s3.access_key"= "minioadmin",\n                 "s3.secret_key" = "minioadmin",\n                 "format" = "csv",\n                 "use_path_style" = "true");\n'})}),"\n",(0,t.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"S3, table-valued-function, TVF\n"})}),"\n",(0,t.jsx)(n.h3,{id:"best-practice",children:"Best Practice"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u4E0D\u540C url schema \u7684\u5199\u6CD5"}),"\nhttp:// \u3001https:// \u4F7F\u7528\u793A\u4F8B\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'// \u6CE8\u610FURI Bucket\u5199\u6CD5\u4EE5\u53CA`use_path_style`\u53C2\u6570\u8BBE\u7F6E\uFF0CHTTP \u540C\u7406\u3002\n// \u7531\u4E8E\u8BBE\u7F6E\u4E86 `"use_path_style"="true"`, \u6240\u4EE5\u5C06\u91C7\u7528 Path Style \u7684\u65B9\u5F0F\u8BBF\u95EE S3\u3002\nselect * from s3(\n    "uri" = "https://endpoint/bucket/file/student.csv",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "format" = "csv",\n    "use_path_style"="true");\n\n// \u6CE8\u610F URI Bucket\u5199\u6CD5\u4EE5\u53CAuse_path_style\u53C2\u6570\u8BBE\u7F6E\uFF0Chttp\u540C\u7406\u3002\n// \u7531\u4E8E\u8BBE\u7F6E\u4E86 `"use_path_style"="false"`, \u6240\u4EE5\u5C06\u91C7\u7528 Virtual-hosted Style \u65B9\u5F0F\u8BBF\u95EE S3\u3002\nselect * from s3(\n    "uri" = "https://bucket.endpoint/bucket/file/student.csv",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "format" = "csv",\n    "use_path_style"="false");\n\n// \u963F\u91CC\u4E91 OSS \u548C\u817E\u8BAF\u4E91 COS \u91C7\u7528 Virtual-hosted Style \u65B9\u5F0F\u8BBF\u95EE S3\u3002\n// OSS\nselect * from s3(\n    "uri" = "http://example-bucket.oss-cn-beijing.aliyuncs.com/your-folder/file.parquet",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "s3.region" = "oss-cn-beijing",\n    "format" = "parquet",\n    "use_path_style" = "false");\n// COS\nselect * from s3(\n    "uri" = "https://example-bucket.cos.ap-hongkong.myqcloud.com/your-folder/file.parquet",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "s3.region" = "ap-hongkong",\n    "format" = "parquet",\n    "use_path_style" = "false");\n\n// MinIO\nselect * from s3(\n    "uri" = "s3://bucket/file.csv",\n    "s3.endpoint" = "http://172.21.0.101:9000",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "s3.region" = "us-east-1",\n    "format" = "csv"\n);\n\n// \u767E\u5EA6\u4E91 BOS \u91C7\u7528\u517C\u5BB9 S3 \u534F\u8BAE\u7684 Virtual-hosted Style \u65B9\u5F0F\u8BBF\u95EE S3\u3002\n// BOS\nselect * from s3(\n    "uri" = "https://example-bucket.s3.bj.bcebos.com/your-folder/file.parquet",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "s3.region" = "bj",\n    "format" = "parquet",\n    "use_path_style" = "false");\n'})}),"\n",(0,t.jsx)(n.p,{children:"s3:// \u4F7F\u7528\u793A\u4F8B\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'// \u6CE8\u610F URI Bucket \u5199\u6CD5, \u65E0\u9700\u8BBE\u7F6E `use_path_style` \u53C2\u6570\u3002\n// \u5C06\u91C7\u7528 Virtual-hosted Style \u65B9\u5F0F\u8BBF\u95EE S3\u3002\nselect * from s3(\n    "uri" = "s3://bucket/file/student.csv",\n    "s3.endpoint"= "endpont",\n    "s3.region"= "region",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "format" = "csv");    \n'})}),"\n",(0,t.jsx)(n.p,{children:"\u5176\u5B83\u652F\u6301\u7684 URI \u98CE\u683C\u793A\u4F8B\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'// Virtual Host AWS Client (Hadoop S3) Mixed Style\u3002\u901A\u8FC7\u8BBE\u7F6E `use_path_style = false` \u4EE5\u53CA `force_parsing_by_standard_uri = true` \u6765\u4F7F\u7528\u3002\nselect * from s3(\n    "URI" = "s3://my-bucket.s3.us-west-1.amazonaws.com/resources/doc.txt?versionId=abc123&partNumber=77&partNumber=88",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "format" = "csv",\n    "use_path_style"="false",\n    "force_parsing_by_standard_uri"="true");\n\n// Path AWS Client (Hadoop S3) Mixed Style\u3002\u901A\u8FC7\u8BBE\u7F6E `use_path_style = true` \u4EE5\u53CA `force_parsing_by_standard_uri = true` \u6765\u4F7F\u7528\u3002\nselect * from s3(\n    "URI" = "s3://s3.us-west-1.amazonaws.com/my-bucket/resources/doc.txt?versionId=abc123&partNumber=77&partNumber=88",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "format" = "csv",\n    "use_path_style"="true",\n    "force_parsing_by_standard_uri"="true");\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"CSV format"}),"\n\u7531\u4E8E S3 table-valued-function \u4E8B\u5148\u5E76\u4E0D\u77E5\u9053 Table Schema\uFF0C\u6240\u4EE5\u4F1A\u5148\u8BFB\u4E00\u904D\u6587\u4EF6\u6765\u89E3\u6790\u51FA Table Schema\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"csv"})," \u683C\u5F0F\uFF1AS3 table-valued-function \u8BFB\u53D6 S3 \u4E0A\u7684\u6587\u4EF6\u5E76\u5F53\u4F5C CSV \u6587\u4EF6\u6765\u5904\u7406\uFF0C\u8BFB\u53D6\u6587\u4EF6\u4E2D\u7684\u7B2C\u4E00\u884C\u7528\u4E8E\u89E3\u6790 Table Schema\u3002\u6587\u4EF6\u7B2C\u4E00\u884C\u7684\u5217\u4E2A\u6570 ",(0,t.jsx)(n.code,{children:"n"})," \u5C06\u4F5C\u4E3A Table Schema \u7684\u5217\u4E2A\u6570\uFF0CTable Schema \u7684\u5217\u540D\u5219\u81EA\u52A8\u53D6\u540D\u4E3A ",(0,t.jsx)(n.code,{children:"c1, c2, ..., cn"})," \uFF0C\u5217\u7C7B\u578B\u90FD\u8BBE\u7F6E\u4E3A ",(0,t.jsx)(n.code,{children:"String"}),", \u4E3E\u4F8B\uFF1A"]}),"\n",(0,t.jsx)(n.p,{children:"student1.csv \u6587\u4EF6\u5185\u5BB9\u4E3A\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"1,ftw,12\n2,zs,18\n3,ww,20\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4F7F\u7528 S3 TVF"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'MySQL [(none)]> select * from s3("uri" = "http://127.0.0.1:9312/test2/student1.csv",\n->                 "s3.access_key"= "minioadmin",\n->                 "s3.secret_key" = "minioadmin",\n->                 "format" = "csv",\n->                 "use_path_style" = "true") order by c1;\n+------+------+------+\n| c1   | c2   | c3   |\n+------+------+------+\n| 1    | ftw  | 12   |\n| 2    | zs   | 18   |\n| 3    | ww   | 20   |\n+------+------+------+\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u53EF\u4EE5\u914D\u5408 ",(0,t.jsx)(n.code,{children:"desc function S3()"})," \u6765\u67E5\u770B Table Schema"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'MySQL [(none)]> Desc function s3("uri" = "http://127.0.0.1:9312/test2/student1.csv",\n->                 "s3.access_key"= "minioadmin",\n->                 "s3.secret_key" = "minioadmin",\n->                 "format" = "csv",\n->                 "use_path_style" = "true");\n+-------+------+------+-------+---------+-------+\n| Field | Type | Null | Key   | Default | Extra |\n+-------+------+------+-------+---------+-------+\n| c1    | TEXT | Yes  | false | NULL    | NONE  |\n| c2    | TEXT | Yes  | false | NULL    | NONE  |\n| c3    | TEXT | Yes  | false | NULL    | NONE  |\n+-------+------+------+-------+---------+-------+\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"csv_with_names format"}),"\n",(0,t.jsx)(n.code,{children:"csv_with_names"})," \u683C\u5F0F\uFF1A\u89E3\u6790\u6587\u4EF6\u7684\u7B2C\u4E00\u884C\u4F5C\u4E3A Table Schema \u7684\u5217\u4E2A\u6570\u548C\u5217\u540D\uFF0C\u5217\u7C7B\u578B\u5219\u90FD\u8BBE\u7F6E\u4E3A ",(0,t.jsx)(n.code,{children:"String"}),", \u4E3E\u4F8B\uFF1A"]}),"\n",(0,t.jsx)(n.p,{children:"student_with_names.csv \u6587\u4EF6\u5185\u5BB9\u4E3A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"id,name,age\n1,ftw,12\n2,zs,18\n3,ww,20\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4F7F\u7528 S3 tvf"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'MySQL [(none)]> select * from s3("uri" = "http://127.0.0.1:9312/test2/student_with_names.csv",\n->                 "s3.access_key"= "minioadmin",\n->                 "s3.secret_key" = "minioadmin",\n->                 "format" = "csv_with_names",\n->                 "use_path_style" = "true") order by id;\n+------+------+------+\n| id   | name | age  |\n+------+------+------+\n| 1    | ftw  | 12   |\n| 2    | zs   | 18   |\n| 3    | ww   | 20   |\n+------+------+------+\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u540C\u6837\u914D\u5408 ",(0,t.jsx)(n.code,{children:"desc function S3()"})," \u53EF\u67E5\u770B Table Schema"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'MySQL [(none)]> Desc function s3("uri" = "http://127.0.0.1:9312/test2/student_with_names.csv",\n->                 "s3.access_key"= "minioadmin",\n->                 "s3.secret_key" = "minioadmin",\n->                 "format" = "csv_with_names",\n->                 "use_path_style" = "true");\n+-------+------+------+-------+---------+-------+\n| Field | Type | Null | Key   | Default | Extra |\n+-------+------+------+-------+---------+-------+\n| id    | TEXT | Yes  | false | NULL    | NONE  |\n| name  | TEXT | Yes  | false | NULL    | NONE  |\n| age   | TEXT | Yes  | false | NULL    | NONE  |\n+-------+------+------+-------+---------+-------+\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"csv_with_names_and_types foramt"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"csv_with_names_and_types"})," \u683C\u5F0F\uFF1A\u76EE\u524D\u6682\u4E0D\u652F\u6301\u4ECE CSV \u6587\u4EF6\u4E2D\u89E3\u6790\u51FA Column Type\u3002\u4F7F\u7528\u8BE5 Format \u65F6\uFF0CS3 TVF \u4F1A\u89E3\u6790\u6587\u4EF6\u7684\u7B2C\u4E00\u884C\u4F5C\u4E3A Table Schema \u7684\u5217\u4E2A\u6570\u548C\u5217\u540D\uFF0C\u5217\u7C7B\u578B\u5219\u90FD\u8BBE\u7F6E\u4E3A String\uFF0C\u540C\u65F6\u5C06\u5FFD\u7565\u8BE5\u6587\u4EF6\u7684\u7B2C\u4E8C\u884C\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"student_with_names_and_types.csv"})," \u6587\u4EF6\u5185\u5BB9\u4E3A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"id,name,age\nINT,STRING,INT\n1,ftw,12\n2,zs,18\n3,ww,20\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4F7F\u7528 S3 TVF"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'MySQL [(none)]> select * from s3("uri" = "http://127.0.0.1:9312/test2/student_with_names_and_types.csv",\n->                 "s3.access_key"= "minioadmin",\n->                 "s3.secret_key" = "minioadmin",\n->                 "format" = "csv_with_names_and_types",\n->                 "use_path_style" = "true") order by id;\n+------+------+------+\n| id   | name | age  |\n+------+------+------+\n| 1    | ftw  | 12   |\n| 2    | zs   | 18   |\n| 3    | ww   | 20   |\n+------+------+------+\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u540C\u6837\u914D\u5408 ",(0,t.jsx)(n.code,{children:"desc function S3()"})," \u53EF\u67E5\u770B Table Schema"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'MySQL [(none)]> Desc function s3("uri" = "http://127.0.0.1:9312/test2/student_with_names_and_types.csv",\n->                 "s3.access_key"= "minioadmin",\n->                 "s3.secret_key" = "minioadmin",\n->                 "format" = "csv_with_names_and_types",\n->                 "use_path_style" = "true");\n+-------+------+------+-------+---------+-------+\n| Field | Type | Null | Key   | Default | Extra |\n+-------+------+------+-------+---------+-------+\n| id    | TEXT | Yes  | false | NULL    | NONE  |\n| name  | TEXT | Yes  | false | NULL    | NONE  |\n| age   | TEXT | Yes  | false | NULL    | NONE  |\n+-------+------+------+-------+---------+-------+\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"JSON format"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"json"})," \u683C\u5F0F\uFF1AJSON \u683C\u5F0F\u6D89\u53CA\u5230\u8F83\u591A\u7684\u53EF\u9009\u53C2\u6570\uFF0C\u5404\u4E2A\u53C2\u6570\u7684\u610F\u4E49\u53EF\u4EE5\u53C2\u8003\uFF1A",(0,t.jsx)(n.a,{href:"../../../data-operate/import/import-way/load-json-format.md",children:"Json Load"}),"\u3002S3 TVF \u67E5\u8BE2 JSON \u683C\u5F0F\u6587\u4EF6\u65F6\u6839\u636E ",(0,t.jsx)(n.code,{children:"json_root"})," \u548C ",(0,t.jsx)(n.code,{children:"jsonpaths"})," \u53C2\u6570\u5B9A\u4F4D\u5230\u4E00\u4E2A JSON \u5BF9\u8C61\uFF0C\u5C06\u8BE5\u5BF9\u8C61\u7684\u4E2D\u7684 ",(0,t.jsx)(n.code,{children:"key"})," \u4F5C\u4E3A Table Schema \u7684\u5217\u540D\uFF0C\u5217\u7C7B\u578B\u90FD\u8BBE\u7F6E\u4E3A String\u3002\u4E3E\u4F8B\uFF1A"]}),"\n",(0,t.jsx)(n.p,{children:"data.json \u6587\u4EF6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'[{"id":1, "name":"ftw", "age":18}]\n[{"id":2, "name":"xxx", "age":17}]\n[{"id":3, "name":"yyy", "age":19}]\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u4F7F\u7528 S3 TVF \u67E5\u8BE2"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'MySQL [(none)]> select * from s3(\n    "uri" = "http://127.0.0.1:9312/test2/data.json",\n    "s3.access_key"= "minioadmin",\n    "s3.secret_key" = "minioadmin",\n    "format" = "json",\n    "strip_outer_array" = "true",\n    "read_json_by_line" = "true",\n    "use_path_style"="true");\n+------+------+------+\n| id   | name | age  |\n+------+------+------+\n| 1    | ftw  | 18   |\n| 2    | xxx  | 17   |\n| 3    | yyy  | 19   |\n+------+------+------+\n\nMySQL [(none)]> select * from s3(\n    "uri" = "http://127.0.0.1:9312/test2/data.json",\n    "s3.access_key"= "minioadmin",\n    "s3.secret_key" = "minioadmin",\n    "format" = "json",\n    "strip_outer_array" = "true",\n    "jsonpaths" = "[\\"$.id\\", \\"$.age\\"]",\n    "use_path_style"="true");\n+------+------+\n| id   | age  |\n+------+------+\n| 1    | 18   |\n| 2    | 17   |\n| 3    | 19   |\n+------+------+\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Parquet format"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"parquet"})," \u683C\u5F0F\uFF1AS3 TVF \u652F\u6301\u4ECE Parquet \u6587\u4EF6\u4E2D\u89E3\u6790\u51FA Table Schema \u7684\u5217\u540D\u3001\u5217\u7C7B\u578B\u3002\u4E3E\u4F8B\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'MySQL [(none)]> select * from s3(\n    "uri" = "http://127.0.0.1:9312/test2/test.snappy.parquet",\n    "s3.access_key"= "minioadmin",\n    "s3.secret_key" = "minioadmin",\n    "format" = "parquet",\n    "use_path_style"="true") limit 5;\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n| p_partkey | p_name                                   | p_mfgr         | p_brand  | p_type                  | p_size | p_container | p_retailprice | p_comment           |\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n|         1 | goldenrod lavender spring chocolate lace | Manufacturer#1 | Brand#13 | PROMO BURNISHED COPPER  |      7 | JUMBO PKG   |           901 | ly. slyly ironi     |\n|         2 | blush thistle blue yellow saddle         | Manufacturer#1 | Brand#13 | LARGE BRUSHED BRASS     |      1 | LG CASE     |           902 | lar accounts amo    |\n|         3 | spring green yellow purple cornsilk      | Manufacturer#4 | Brand#42 | STANDARD POLISHED BRASS |     21 | WRAP CASE   |           903 | egular deposits hag |\n|         4 | cornflower chocolate smoke green pink    | Manufacturer#3 | Brand#34 | SMALL PLATED BRASS      |     14 | MED DRUM    |           904 | p furiously r       |\n|         5 | forest brown coral puff cream            | Manufacturer#3 | Brand#32 | STANDARD POLISHED TIN   |     15 | SM PKG      |           905 |  wake carefully     |\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'MySQL [(none)]> desc function s3(\n    "uri" = "http://127.0.0.1:9312/test2/test.snappy.parquet",\n    "s3.access_key"= "minioadmin",\n    "s3.secret_key" = "minioadmin",\n    "format" = "parquet",\n    "use_path_style"="true");\n+---------------+--------------+------+-------+---------+-------+\n| Field         | Type         | Null | Key   | Default | Extra |\n+---------------+--------------+------+-------+---------+-------+\n| p_partkey     | INT          | Yes  | false | NULL    | NONE  |\n| p_name        | TEXT         | Yes  | false | NULL    | NONE  |\n| p_mfgr        | TEXT         | Yes  | false | NULL    | NONE  |\n| p_brand       | TEXT         | Yes  | false | NULL    | NONE  |\n| p_type        | TEXT         | Yes  | false | NULL    | NONE  |\n| p_size        | INT          | Yes  | false | NULL    | NONE  |\n| p_container   | TEXT         | Yes  | false | NULL    | NONE  |\n| p_retailprice | DECIMAL(9,0) | Yes  | false | NULL    | NONE  |\n| p_comment     | TEXT         | Yes  | false | NULL    | NONE  |\n+---------------+--------------+------+-------+---------+-------+\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"orc format"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"orc"})," \u683C\u5F0F\uFF1A\u548C ",(0,t.jsx)(n.code,{children:"parquet"})," format \u4F7F\u7528\u65B9\u6CD5\u4E00\u81F4\uFF0C\u5C06 ",(0,t.jsx)(n.code,{children:"format"})," \u53C2\u6570\u8BBE\u7F6E\u4E3A ",(0,t.jsx)(n.code,{children:"orc"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'MySQL [(none)]> select * from s3(\n    "uri" = "http://127.0.0.1:9312/test2/test.snappy.orc",\n    "s3.access_key"= "minioadmin",\n    "s3.secret_key" = "minioadmin",\n    "format" = "orc",\n    "use_path_style"="true") limit 5;\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n| p_partkey | p_name                                   | p_mfgr         | p_brand  | p_type                  | p_size | p_container | p_retailprice | p_comment           |\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n|         1 | goldenrod lavender spring chocolate lace | Manufacturer#1 | Brand#13 | PROMO BURNISHED COPPER  |      7 | JUMBO PKG   |           901 | ly. slyly ironi     |\n|         2 | blush thistle blue yellow saddle         | Manufacturer#1 | Brand#13 | LARGE BRUSHED BRASS     |      1 | LG CASE     |           902 | lar accounts amo    |\n|         3 | spring green yellow purple cornsilk      | Manufacturer#4 | Brand#42 | STANDARD POLISHED BRASS |     21 | WRAP CASE   |           903 | egular deposits hag |\n|         4 | cornflower chocolate smoke green pink    | Manufacturer#3 | Brand#34 | SMALL PLATED BRASS      |     14 | MED DRUM    |           904 | p furiously r       |\n|         5 | forest brown coral puff cream            | Manufacturer#3 | Brand#32 | STANDARD POLISHED TIN   |     15 | SM PKG      |           905 |  wake carefully     |\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"avro format"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"avro"}),"  \u683C\u5F0F\uFF1AS3 TVF \u652F\u6301\u4ECE avro \u6587\u4EF6\u4E2D\u89E3\u6790\u51FA Table Schema \u7684\u5217\u540D\u3001\u5217\u7C7B\u578B\u3002\u4E3E\u4F8B\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'select * from s3(\n         "uri" = "http://127.0.0.1:9312/test2/person.avro",\n         "ACCESS_KEY" = "ak",\n         "SECRET_KEY" = "sk",\n         "FORMAT" = "avro");\n+--------+--------------+-------------+-----------------+\n| name   | boolean_type | double_type | long_type       |\n+--------+--------------+-------------+-----------------+\n| Alyssa |            1 |     10.0012 | 100000000221133 |\n| Ben    |            0 |    5555.999 |      4009990000 |\n| lisi   |            0 | 5992225.999 |      9099933330 |\n+--------+--------------+-------------+-----------------+\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"URI \u5305\u542B\u901A\u914D\u7B26"})}),"\n",(0,t.jsxs)(n.p,{children:["URI \u53EF\u4EE5\u4F7F\u7528\u901A\u914D\u7B26\u6765\u8BFB\u53D6\u591A\u4E2A\u6587\u4EF6\u3002\u6CE8\u610F\uFF1A\u5982\u679C\u4F7F\u7528\u901A\u914D\u7B26\u8981\u4FDD\u8BC1\u5404\u4E2A\u6587\u4EF6\u7684\u683C\u5F0F\u662F\u4E00\u81F4\u7684 (\u5C24\u5176\u662F ",(0,t.jsx)(n.code,{children:"csv"}),"/",(0,t.jsx)(n.code,{children:"csv_with_names"}),"/",(0,t.jsx)(n.code,{children:"csv_with_names_and_types"})," \u7B97\u505A\u4E0D\u540C\u7684\u683C\u5F0F)\uFF0CS3 TVF \u7528\u7B2C\u4E00\u4E2A\u6587\u4EF6\u6765\u89E3\u6790\u51FA Table Schema\u3002\n\u5982\u4E0B\u4E24\u4E2A CSV \u6587\u4EF6\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"// file1.csv\n1,aaa,18\n2,qqq,20\n3,qwe,19\n\n// file2.csv\n5,cyx,19\n6,ftw,21\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u53EF\u4EE5\u5728 URI \u4E0A\u4F7F\u7528\u901A\u914D\u7B26\u6765\u5BFC\u5165\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'MySQL [(none)]> select * from s3(\n        "uri" = "http://127.0.0.1:9312/test2/file*.csv",\n        "s3.access_key"= "minioadmin",\n        "s3.secret_key" = "minioadmin",\n        "format" = "csv",\n        "use_path_style"="true");\n+------+------+------+\n| c1   | c2   | c3   |\n+------+------+------+\n| 1    | aaa  | 18   |\n| 2    | qqq  | 20   |\n| 3    | qwe  | 19   |\n| 5    | cyx  | 19   |\n| 6    | ftw  | 21   |\n+------+------+------+\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["\u914D\u5408 ",(0,t.jsx)(n.code,{children:"insert into"})," \u548C ",(0,t.jsx)(n.code,{children:"cast"})," \u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"S3"})," TVF"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'// \u521B\u5EFA Doris \u5185\u90E8\u8868\nCREATE TABLE IF NOT EXISTS ${testTable}\n    (\n        id int,\n        name varchar(50),\n        age int\n    )\n    COMMENT "my first table"\n    DISTRIBUTED BY HASH(id) BUCKETS 32\n    PROPERTIES("replication_num" = "1");\n\n// \u4F7F\u7528 S3 \u63D2\u5165\u6570\u636E\ninsert into ${testTable} (id,name,age)\nselect cast (id as INT) as id, name, cast (age as INT) as age\nfrom s3(\n    "uri" = "${uri}",\n    "s3.access_key"= "${ak}",\n    "s3.secret_key" = "${sk}",\n    "format" = "${format}",\n    "strip_outer_array" = "true",\n    "read_json_by_line" = "true",\n    "use_path_style" = "true");\n'})})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return a}});var r=s(667294);let t={},c=r.createContext(t);function a(e){let n=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);