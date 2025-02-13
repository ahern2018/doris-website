"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["436411"],{118260:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>i,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>t});var r=JSON.parse('{"id":"ecosystem/doris-streamloader","title":"Doris Streamloader","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/ecosystem/doris-streamloader.md","sourceDirName":"ecosystem","slug":"/ecosystem/doris-streamloader","permalink":"/zh-CN/docs/2.0/ecosystem/doris-streamloader","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Doris Streamloader","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Doris Kafka Connector","permalink":"/zh-CN/docs/2.0/ecosystem/doris-kafka-connector"},"next":{"title":"Apache Superset","permalink":"/zh-CN/docs/2.0/ecosystem/bi/apache-superset"}}'),d=s("785893"),l=s("250065");let t={title:"Doris Streamloader",language:"zh-CN"},i=void 0,c={},o=[{value:"\u6982\u8FF0",id:"\u6982\u8FF0",level:2},{value:"\u83B7\u53D6\u4E0E\u5B89\u88C5",id:"\u83B7\u53D6\u4E0E\u5B89\u88C5",level:2},{value:"\u4F7F\u7528\u65B9\u6CD5",id:"\u4F7F\u7528\u65B9\u6CD5",level:2},{value:"\u7ED3\u679C\u8BF4\u660E",id:"\u7ED3\u679C\u8BF4\u660E",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:2},{value:"1. \u53C2\u6570\u63A8\u8350",id:"1-\u53C2\u6570\u63A8\u8350",level:3},{value:"2. \u63A8\u8350\u547D\u4EE4",id:"2-\u63A8\u8350\u547D\u4EE4",level:3},{value:"3. FAQ",id:"3-faq",level:3}];function a(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"\u6982\u8FF0",children:"\u6982\u8FF0"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"https://github.com/apache/doris-streamloader",children:"Doris Streamloader"})," \u662F\u4E00\u6B3E\u7528\u4E8E\u5C06\u6570\u636E\u5BFC\u5165 Doris \u6570\u636E\u5E93\u7684\u4E13\u7528\u5BA2\u6237\u7AEF\u5DE5\u5177\u3002\u76F8\u6BD4\u4E8E\u76F4\u63A5\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"curl"})," \u7684\u5355\u5E76\u53D1\u5BFC\u5165\uFF0C\u8BE5\u5DE5\u5177\u53EF\u4EE5\u63D0\u4F9B\u591A\u5E76\u53D1\u5BFC\u5165\u7684\u529F\u80FD\uFF0C\u964D\u4F4E\u5927\u6570\u636E\u91CF\u5BFC\u5165\u7684\u8017\u65F6\u3002\u62E5\u6709\u4EE5\u4E0B\u529F\u80FD\uFF1A"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u5E76\u53D1\u5BFC\u5165\uFF0C\u5B9E\u73B0 Stream Load \u7684\u591A\u5E76\u53D1\u5BFC\u5165\u3002\u53EF\u4EE5\u901A\u8FC7 workers \u503C\u8BBE\u7F6E\u5E76\u53D1\u6570\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u591A\u6587\u4EF6\u5BFC\u5165\uFF0C\u4E00\u6B21\u5BFC\u5165\u53EF\u4EE5\u540C\u65F6\u5BFC\u5165\u591A\u4E2A\u6587\u4EF6\u53CA\u76EE\u5F55\uFF0C\u652F\u6301\u8BBE\u7F6E\u901A\u914D\u7B26\u4EE5\u53CA\u4F1A\u81EA\u52A8\u9012\u5F52\u83B7\u53D6\u6587\u4EF6\u5939\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u65AD\u70B9\u7EED\u4F20\uFF0C\u5728\u5BFC\u5165\u8FC7\u7A0B\u4E2D\u53EF\u80FD\u51FA\u73B0\u90E8\u5206\u5931\u8D25\u7684\u60C5\u51B5\uFF0C\u652F\u6301\u5728\u5931\u8D25\u70B9\u5904\u8FDB\u884C\u7EE7\u7EED\u4F20\u8F93\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u81EA\u52A8\u91CD\u4F20\uFF0C\u5728\u5BFC\u5165\u51FA\u73B0\u5931\u8D25\u7684\u60C5\u51B5\u540E\uFF0C\u65E0\u9700\u624B\u52A8\u91CD\u4F20\uFF0C\u5DE5\u5177\u4F1A\u81EA\u52A8\u91CD\u4F20\u9ED8\u8BA4\u7684\u6B21\u6570\uFF0C\u5982\u679C\u4ECD\u7136\u4E0D\u6210\u529F\uFF0C\u6253\u5370\u51FA\u624B\u52A8\u91CD\u4F20\u7684\u547D\u4EE4\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u83B7\u53D6\u4E0E\u5B89\u88C5",children:"\u83B7\u53D6\u4E0E\u5B89\u88C5"}),"\n",(0,d.jsxs)(n.p,{children:["\u6E90\u4EE3\u7801\uFF1A",(0,d.jsx)(n.a,{href:"https://github.com/apache/doris-streamloader",children:"https://github.com/apache/doris-streamloader"}),"\n\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF1A",(0,d.jsx)(n.a,{href:"https://doris.apache.org/zh-CN/download",children:"https://doris.apache.org/zh-CN/download"})]}),"\n",(0,d.jsx)(n.admonition,{type:"note",children:(0,d.jsx)(n.p,{children:"\u83B7\u53D6\u7ED3\u679C\u5373\u4E3A\u53EF\u6267\u884C\u4E8C\u8FDB\u5236\u3002"})}),"\n",(0,d.jsx)(n.h2,{id:"\u4F7F\u7528\u65B9\u6CD5",children:"\u4F7F\u7528\u65B9\u6CD5"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"\ndoris-streamloader --source_file={FILE_LIST} --url={FE_OR_BE_SERVER_URL}:{PORT} --header={STREAMLOAD_HEADER} --db={TARGET_DATABASE} --table={TARGET_TABLE}\n\n"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.strong,{children:["1. ",(0,d.jsx)(n.code,{children:"FILE_LIST"})," \u652F\u6301\uFF1A"]})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u5355\u4E2A\u6587\u4EF6"}),"\n",(0,d.jsx)(n.p,{children:"\u4F8B\u5982\uFF1A\u5BFC\u5165\u5355\u4E2A\u6587\u4EF6 file.csv"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'doris-streamloader --source_file="dir" --url="http://localhost:8330" --header="column_separator:|?columns:col1,col2" --db="testdb" --table="testtbl"\n'})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u5355\u4E2A\u76EE\u5F55"}),"\n",(0,d.jsx)(n.p,{children:"\u4F8B\u5982\uFF1A\u5BFC\u5165\u5355\u4E2A\u76EE\u5F55 dir"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'doris-streamloader --source_file="dir" --url="http://localhost:8330" --header="column_separator:|?columns:col1,col2" --db="testdb" --table="testtbl"        \n'})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u5E26\u901A\u914D\u7B26\u7684\u6587\u4EF6\u540D\uFF08\u9700\u8981\u7528\u5F15\u53F7\u5305\u56F4\uFF09"}),"\n",(0,d.jsx)(n.p,{children:"\u4F8B\u5982\uFF1A\u5BFC\u5165 file0.csv, file1.csv, file2.csv"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'doris-streamloader --source_file="file*" --url="http://localhost:8330" --header="column_separator:|?columns:col1,col2" --db="testdb" --table="testtbl"\n'})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u9017\u53F7\u5206\u9694\u7684\u6587\u4EF6\u540D\u5217\u8868"}),"\n",(0,d.jsx)(n.p,{children:"\u4F8B\u5982\uFF1A\u5BFC\u5165 file0.csv, file1.csv file2.csv"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'doris-streamloader --source_file="file0.csv,file1.csv,file2.csv" --url="http://localhost:8330" --header="column_separator:|?columns:col1,col2" --db="testdb" --table="testtbl"\n'})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u9017\u53F7\u5206\u9694\u7684\u76EE\u5F55\u5217\u8868"}),"\n",(0,d.jsx)(n.p,{children:"\u4F8B\u5982\uFF1A\u5BFC\u5165 dir1, dir2,dir3"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'doris-streamloader --source_file="dir1,dir2,dir3" --url="http://localhost:8330" --header="column_separator:|?columns:col1,col2" --db="testdb" --table="testtbl" \n'})}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"2."})," ",(0,d.jsx)(n.code,{children:"STREAMLOAD_HEADER"})," ",(0,d.jsx)(n.strong,{children:"\u652F\u6301 Stream Load \u7684\u6240\u6709\u53C2\u6570\uFF0C\u591A\u4E2A\u53C2\u6570\u4E4B\u95F4\u7528  '?' \u5206\u9694\u3002"})]}),"\n",(0,d.jsx)(n.p,{children:"\u7528\u6CD5\u4E3E\u4F8B\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:'doris-streamloader --source_file="data.csv" --url="http://localhost:8330" --header="column_separator:|?columns:col1,col2" --db="testdb" --table="testtbl"\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u4E0A\u8FF0\u53C2\u6570\u5747\u4E3A\u5FC5\u8981\u53C2\u6570\uFF0C\u4E0B\u9762\u4ECB\u7ECD\u53EF\u9009\u53C2\u6570\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u53C2\u6570\u540D"}),(0,d.jsx)(n.th,{children:"\u542B\u4E49"}),(0,d.jsx)(n.th,{children:"\u9ED8\u8BA4\u503C"}),(0,d.jsx)(n.th,{children:"\u5EFA\u8BAE"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"--u"}),(0,d.jsx)(n.td,{children:"\u6570\u636E\u5E93\u7528\u6237\u540D"}),(0,d.jsx)(n.td,{children:"root"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"--p"}),(0,d.jsx)(n.td,{children:"\u6570\u636E\u5E93\u7528\u6237\u5BF9\u5E94\u7684\u5BC6\u7801"}),(0,d.jsx)(n.td,{children:"\u7A7A\u5B57\u7B26\u4E32"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"--compress"}),(0,d.jsx)(n.td,{children:"\u5BFC\u5165\u6570\u636E\u662F\u5426\u5728 HTTP \u4F20\u8F93\u65F6\u538B\u7F29"}),(0,d.jsx)(n.td,{children:"false"}),(0,d.jsx)(n.td,{children:"\u4FDD\u6301\u9ED8\u8BA4\uFF0C\u6253\u5F00\u540E\u538B\u7F29\u89E3\u538B\u4F1A\u5206\u522B\u589E\u52A0\u5DE5\u5177\u548C Doris BE \u7684 CPU \u538B\u529B\uFF0C\u6240\u4EE5\u4EC5\u5728\u6570\u636E\u6E90\u6240\u5728\u673A\u5668\u7F51\u7EDC\u5E26\u5BBD\u74F6\u9888\u65F6\u6253\u5F00"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"--timeout"}),(0,d.jsx)(n.td,{children:"\u5411 Doris \u53D1\u9001 HTTP \u8BF7\u6C42\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\uFF1A\u79D2"}),(0,d.jsx)(n.td,{children:"60*60*10"}),(0,d.jsx)(n.td,{children:"\u4FDD\u6301\u9ED8\u8BA4"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"--batch"}),(0,d.jsx)(n.td,{children:"\u6587\u4EF6\u6279\u91CF\u8BFB\u53D6\u548C\u53D1\u9001\u7684\u7C92\u5EA6\uFF0C\u5355\u4F4D\uFF1A\u884C"}),(0,d.jsx)(n.td,{children:"4096"}),(0,d.jsx)(n.td,{children:"\u4FDD\u6301\u9ED8\u8BA4"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"--batch_byte"}),(0,d.jsx)(n.td,{children:"\u6587\u4EF6\u6279\u91CF\u8BFB\u53D6\u548C\u53D1\u9001\u7684\u7C92\u5EA6\uFF0C\u5355\u4F4D\uFF1Abyte"}),(0,d.jsx)(n.td,{children:"943718400 (900MB)"}),(0,d.jsx)(n.td,{children:"\u4FDD\u6301\u9ED8\u8BA4"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"--workers"}),(0,d.jsx)(n.td,{children:"\u5BFC\u5165\u7684\u5E76\u53D1\u6570"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"\u8BBE\u7F6E\u6210 0 \u4E3A\u81EA\u52A8\u6A21\u5F0F\uFF0C\u4F1A\u6839\u636E\u5BFC\u5165\u6570\u636E\u7684\u5927\u5C0F\uFF0C\u78C1\u76D8\u7684\u541E\u5410\u91CF\uFF0CStream Load \u5BFC\u5165\u901F\u5EA6\u8BA1\u7B97\u4E00\u4E2A\u503C\u3002\u4E5F\u53EF\u4EE5\u624B\u52A8\u8BBE\u7F6E\uFF0C\u6027\u80FD\u597D\u7684\u96C6\u7FA4\u53EF\u4EE5\u8BBE\u7F6E\u5927\u70B9\uFF0C\u6700\u597D\u4E0D\u8981\u8D85\u8FC7 10\u3002\u5982\u679C\u89C2\u5BDF\u5230\u5BFC\u5165\u5185\u5B58\u8FC7\u9AD8\uFF08\u901A\u8FC7\u89C2\u5BDF Memtracker \u6216\u8005 Exceed \u65E5\u5FD7\uFF09, \u5219\u53EF\u9002\u5F53\u964D\u4F4E worker \u6570\u91CF"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"--disk_throughput"}),(0,d.jsx)(n.td,{children:"\u78C1\u76D8\u7684\u541E\u5410\u91CF\uFF0C\u5355\u4F4D MB/s"}),(0,d.jsx)(n.td,{children:"800"}),(0,d.jsx)(n.td,{children:"\u901A\u5E38\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\u3002\u8BE5\u503C\u53C2\u4E0E --workers \u7684\u81EA\u52A8\u63A8\u7B97\u8FC7\u7A0B\u3002\u5982\u679C\u5E0C\u671B\u901A\u8FC7\u5DE5\u5177\u80FD\u8BA1\u7B97\u51FA\u4E00\u4E2A\u9002\u5F53\u7684 workers \u6570\uFF0C\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u78C1\u76D8\u541E\u5410\u8BBE\u7F6E\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"--streamload_throughput"}),(0,d.jsx)(n.td,{children:"Stream Load \u5BFC\u5165\u5B9E\u9645\u7684\u541E\u5410\u5927\u5C0F\uFF0C\u5355\u4F4D MB/s"}),(0,d.jsx)(n.td,{children:"100"}),(0,d.jsx)(n.td,{children:"\u901A\u5E38\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\u3002\u8BE5\u503C\u53C2\u4E0E --workers \u7684\u81EA\u52A8\u63A8\u7B97\u8FC7\u7A0B\u3002\u9ED8\u8BA4\u503C\u662F\u901A\u8FC7\u6BCF\u65E5\u6027\u80FD\u6D4B\u8BD5\u73AF\u5883\u7ED9\u51FA\u7684 Stream Load \u541E\u5410\u91CF\u4EE5\u53CA\u6027\u80FD\u53EF\u9884\u6D4B\u6027\u5F97\u51FA\u7684\u3002\u5982\u679C\u5E0C\u671B\u901A\u8FC7\u5DE5\u5177\u80FD\u8BA1\u7B97\u51FA\u4E00\u4E2A\u9002\u5F53\u7684 workers \u6570\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u5B9E\u6D4B\u7684 Stream Load \u7684\u541E\u5410\uFF0C\u5373\uFF1A(LoadBytes*1000)/(LoadTimeMs*1024*1024) \u8BA1\u7B97\u51FA\u5B9E\u9645\u7684\u541E\u5410\u91CF"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"--max_byte_per_task"}),(0,d.jsx)(n.td,{children:"\u6BCF\u4E2A\u5BFC\u5165\u4EFB\u52A1\u6570\u636E\u91CF\u7684\u6700\u5927\u5927\u5C0F\uFF0C\u8D85\u8FC7\u8FD9\u4E2A\u503C\u5269\u4E0B\u7684\u6570\u636E\u4F1A\u88AB\u62C6\u5206\u5230\u4E00\u4E2A\u65B0\u7684\u5BFC\u5165\u4EFB\u52A1\u4E2D\u3002"}),(0,d.jsx)(n.td,{children:"107374182400 (100G)"}),(0,d.jsx)(n.td,{children:"\u5EFA\u8BAE\u8BBE\u7F6E\u4E00\u4E2A\u5F88\u5927\u7684\u503C\u6765\u51CF\u5C11\u5BFC\u5165\u7684\u7248\u672C\u6570\u3002\u4F46\u5982\u679C\u9047\u5230 body exceed max size \u9519\u8BEF\u4E14\u4E0D\u60F3\u8C03\u6574 streaming_load_max_mb \u53C2\u6570\uFF08\u9700\u91CD\u542F be\uFF09\uFF0C\u53C8\u6216\u662F\u9047\u5230 -238 TOO MANY SEGMENT \u9519\u8BEF\uFF0C\u53EF\u4EE5\u4E34\u65F6\u8C03\u5C0F\u8FD9\u4E2A\u914D\u7F6E"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"--check_utf8"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.p,{children:"\u662F\u5426\u5BF9\u5BFC\u5165\u6570\u636E\u7684\u7F16\u7801\u8FDB\u884C\u68C0\u67E5\uFF1A"}),"   ",(0,d.jsx)(n.p,{children:" 1\uFF09false\uFF0C\u90A3\u4E48\u4E0D\u505A\u68C0\u67E5\u76F4\u63A5\u5C06\u539F\u59CB\u6570\u636E\u5BFC\u5165; 2\uFF09true\uFF0C\u90A3\u4E48\u5BF9\u6570\u636E\u4E2D\u975E utf-8 \u7F16\u7801\u7684\u5B57\u7B26\u7528 \uFFFD \u8FDB\u884C\u66FF\u4EE3"})]}),(0,d.jsx)(n.td,{children:"true"}),(0,d.jsx)(n.td,{children:"\u4FDD\u6301\u9ED8\u8BA4"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"--debug"}),(0,d.jsx)(n.td,{children:"\u6253\u5370 Debug \u65E5\u5FD7"}),(0,d.jsx)(n.td,{children:"false"}),(0,d.jsx)(n.td,{children:"\u4FDD\u6301\u9ED8\u8BA4"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"--auto_retry"}),(0,d.jsx)(n.td,{children:"\u81EA\u52A8\u91CD\u4F20\u5931\u8D25\u7684 worker \u5E8F\u53F7\u548C task \u5E8F\u53F7\u7684\u5217\u8868"}),(0,d.jsx)(n.td,{children:"\u7A7A\u5B57\u7B26\u4E32"}),(0,d.jsx)(n.td,{children:'\u4EC5\u5BFC\u5165\u5931\u8D25\u65F6\u91CD\u4F20\u4F7F\u7528\uFF0C\u6B63\u5E38\u5BFC\u5165\u65E0\u9700\u5173\u5FC3\u3002\u5931\u8D25\u65F6\u4F1A\u63D0\u793A\u5177\u4F53\u53C2\u6570\u5185\u5BB9\uFF0C\u590D\u5236\u6267\u884C\u5373\u53EF\u3002\u4F8B\uFF1A\u5982\u679C --auto_retry="1,1,2,1" \u5219\u8868\u793A\uFF1A\u9700\u8981\u91CD\u4F20\u7684 task \u4E3A\uFF1A\u7B2C\u4E00\u4E2A worker \u7684\u7B2C\u4E00\u4E2A task\uFF0C\u7B2C\u4E8C\u4E2A worker \u7684\u7B2C\u4E00\u4E2A task\u3002'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"--auto_retry_times"}),(0,d.jsx)(n.td,{children:"\u81EA\u52A8\u91CD\u4F20\u7684\u6B21\u6570"}),(0,d.jsx)(n.td,{children:"3"}),(0,d.jsx)(n.td,{children:"\u4FDD\u6301\u9ED8\u8BA4\uFF0C\u5982\u679C\u4E0D\u60F3\u91CD\u4F20\u9700\u8981\u628A\u8FD9\u4E2A\u503C\u8BBE\u7F6E\u4E3A 0"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"--auto_retry_interval"}),(0,d.jsx)(n.td,{children:"\u81EA\u52A8\u91CD\u4F20\u7684\u95F4\u9694"}),(0,d.jsx)(n.td,{children:"60"}),(0,d.jsx)(n.td,{children:"\u4FDD\u6301\u9ED8\u8BA4\uFF0C\u5982\u679C Doris \u56E0\u5B95\u673A\u5BFC\u81F4\u5931\u8D25\uFF0C\u5EFA\u8BAE\u6839\u636E\u5B9E\u9645 Doris \u91CD\u542F\u7684\u65F6\u95F4\u95F4\u9694\u6765\u8BBE\u7F6E\u8BE5\u503C"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"--log_filename"}),(0,d.jsx)(n.td,{children:"\u65E5\u5FD7\u5B58\u50A8\u7684\u4F4D\u7F6E"}),(0,d.jsx)(n.td,{children:'""'}),(0,d.jsx)(n.td,{children:'\u9ED8\u8BA4\u5C06\u65E5\u5FD7\u6253\u5370\u5230\u63A7\u5236\u53F0\u4E0A\uFF0C\u5982\u679C\u8981\u6253\u5370\u5230\u65E5\u5FD7\u6587\u4EF6\u4E2D\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u5B58\u50A8\u65E5\u5FD7\u6587\u4EF6\u7684\u8DEF\u5F84\uFF0C\u5982--log_filename = "/var/log"'})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u7ED3\u679C\u8BF4\u660E",children:"\u7ED3\u679C\u8BF4\u660E"}),"\n",(0,d.jsx)(n.p,{children:"\u65E0\u8BBA\u6210\u529F\u4E0E\u5931\u8D25\uFF0C\u90FD\u4F1A\u663E\u793A\u6700\u7EC8\u7684\u7ED3\u679C\uFF0C\u7ED3\u679C\u53C2\u6570\u8BF4\u660E\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u53C2\u6570\u540D"}),(0,d.jsx)(n.th,{children:"\u63CF\u8FF0"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Status"}),(0,d.jsx)(n.td,{children:"\u5BFC\u5165\u6210\u529F\uFF08Success\uFF09\u4E0E\u5426\uFF08Failed\uFF09"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"TotalRows"}),(0,d.jsx)(n.td,{children:"\u60F3\u8981\u5BFC\u5165\u6587\u4EF6\u4E2D\u6240\u6709\u7684\u884C\u6570"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"FailLoadRows"}),(0,d.jsx)(n.td,{children:"\u60F3\u8981\u5BFC\u5165\u6587\u4EF6\u4E2D\u6CA1\u6709\u5BFC\u5165\u7684\u884C\u6570"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"LoadedRows"}),(0,d.jsx)(n.td,{children:"\u5B9E\u9645\u5BFC\u5165 Doris \u7684\u884C\u6570"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"FilteredRows"}),(0,d.jsx)(n.td,{children:"\u5B9E\u9645\u5BFC\u5165\u8FC7\u7A0B\u4E2D\u88AB Doris \u8FC7\u6EE4\u7684\u884C\u6570"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"UnselectedRows"}),(0,d.jsx)(n.td,{children:"\u5B9E\u9645\u5BFC\u5165\u8FC7\u7A0B\u4E2D\u88AB Doris \u5FFD\u7565\u7684\u884C\u6570"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"LoadBytes"}),(0,d.jsx)(n.td,{children:"\u5B9E\u9645\u5BFC\u5165\u7684 byte \u5927\u5C0F"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"LoadTimeMs"}),(0,d.jsx)(n.td,{children:"\u5B9E\u9645\u5BFC\u5165\u7684\u65F6\u95F4"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"LoadFiles"}),(0,d.jsx)(n.td,{children:"\u5B9E\u9645\u5BFC\u5165\u7684\u6587\u4EF6\u5217\u8868"})]})]})]}),"\n",(0,d.jsx)(n.p,{children:"\u5177\u4F53\u4F8B\u5B50\u5982\u4E0B\uFF1A"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u5BFC\u5165\u6210\u529F\uFF0C\u6210\u529F\u4FE1\u606F\u5982\u4E0B\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-Go",children:'Load Result: {\n        "Status": "Success",\n        "TotalRows": 120,\n        "FailLoadRows": 0,\n        "LoadedRows": 120,\n        "FilteredRows": 0,\n        "UnselectedRows": 0,\n        "LoadBytes": 40632,\n        "LoadTimeMs": 971,\n        "LoadFiles": [\n                "basic.csv",\n                "basic_data1.csv",\n                "basic_data2.csv",\n                "dir1/basic_data.csv",\n                "dir1/basic_data.csv.1",\n                "dir1/basic_data1.csv"\n        ]\n}\n'})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u5BFC\u5165\u5931\u8D25\uFF1A\u5982\u679C\u5BFC\u5165\u8FC7\u7A0B\u4E2D\u90E8\u5206\u6570\u636E\u6CA1\u6709\u5BFC\u5165\u5931\u8D25\u4E86\uFF0C\u4F1A\u7ED9\u51FA\u91CD\u4F20\u4FE1\u606F\uFF0C\u5982\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-Go",children:'load has some error, and auto retry failed, you can retry by : \n./doris-streamloader --source_file /mnt/disk1/laihui/doris/tools/tpch-tools/bin/tpch-data/lineitem.tbl.1  --url="http://127.0.0.1:8239" --header="column_separator:|?columns: l_orderkey, l_partkey, l_suppkey, l_linenumber, l_quantity, l_extendedprice, l_discount, l_tax, l_returnflag,l_linestatus, l_shipdate,l_commitdate,l_receiptdate,l_shipinstruct,l_shipmode,l_comment,temp" --db="db" --table="lineitem1" -u root -p "" --compress=false --timeout=36000 --workers=3 --batch=4096 --batch_byte=943718400 --max_byte_per_task=1073741824 --check_utf8=true --report_duration=1 --auto_retry="2,1;1,1;0,1" --auto_retry_times=0 --auto_retry_interval=60\n'})}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u53EA\u9700\u590D\u5236\u8FD0\u884C\u8BE5\u547D\u4EE4\u5373\u53EF\uFF0C",(0,d.jsx)(n.code,{children:"auto_retry"})," \u8BF4\u660E\u53EF\u53C2\u8003\uFF0C\u5E76\u7ED9\u51FA\u5931\u8D25\u7684\u7ED3\u679C\u4FE1\u606F\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-Go",children:'Load Result: {\n      "Status": "Failed",\n      "TotalRows": 1,\n      "FailLoadRows": 1,\n      "LoadedRows": 0,\n      "FilteredRows": 0,\n      "UnselectedRows": 0,\n      "LoadBytes": 0,\n      "LoadTimeMs": 104,\n      "LoadFiles": [\n              "/mnt/disk1/laihui/doris/tools/tpch-tools/bin/tpch-data/lineitem.tbl.1"\n      ]\n}\n\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"}),"\n",(0,d.jsx)(n.h3,{id:"1-\u53C2\u6570\u63A8\u8350",children:"1. \u53C2\u6570\u63A8\u8350"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u5FC5\u8981\u53C2\u6570\uFF0C\u4E00\u5B9A\u8981\u914D\u7F6E\uFF1A ",(0,d.jsx)(n.code,{children:"--source_file=FILE_LIST --url=FE_OR_BE_SERVER_URL_WITH_PORT --header=STREAMLOAD_HEADER --db=TARGET_DATABASE --table=TARGET_TABLE"})," \uFF0C",(0,d.jsx)(n.strong,{children:"\u5982\u679C\u9700\u8981\u5BFC\u5165\u591A\u4E2A\u6587\u4EF6\u65F6\uFF0C\u63A8\u8350\u4F7F\u7528"})," ",(0,d.jsx)(n.code,{children:"source_file"})," ",(0,d.jsx)(n.strong,{children:"\u65B9\u5F0F\u3002"})]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"workers"}),"\uFF0C\u9ED8\u8BA4\u503C\u4E3A CPU \u6838\u6570\uFF0C\u5728 CPU \u6838\u6570\u8FC7\u591A\u7684\u573A\u666F\uFF08\u6BD4\u5982 96 \u6838\uFF09\u4F1A\u4EA7\u751F\u592A\u591A\u7684\u5E76\u53D1\uFF0C\u9700\u8981\u51CF\u5C11\u8FD9\u4E2A\u503C\uFF0C",(0,d.jsx)(n.strong,{children:"\u63A8\u8350\u4E00\u822C\u8BBE\u7F6E\u4E3A 8 \u5373\u53EF\u3002"})]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"max_byte_per_task"}),"\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E00\u4E2A\u5F88\u5927\u7684\u503C\u6765\u51CF\u5C11\u5BFC\u5165\u7684 version \u6570\u3002\u4F46\u5982\u679C\u9047\u5230 ",(0,d.jsx)(n.code,{children:"body exceed max size"})," \u9519\u8BEF\u4E14\u4E0D\u60F3\u8C03\u6574 ",(0,d.jsx)(n.code,{children:"streaming_load_max_mb"})," \u53C2\u6570\uFF08\u9700\u91CD\u542F BE\uFF09\uFF0C\u53C8\u6216\u662F\u9047\u5230 ",(0,d.jsx)(n.code,{children:"-238 TOO MANY SEGMENT"})," \u9519\u8BEF\uFF0C\u53EF\u4EE5\u4E34\u65F6\u8C03\u5C0F\u8FD9\u4E2A\u914D\u7F6E\uFF0C",(0,d.jsx)(n.strong,{children:"\u4E00\u822C\u4F7F\u7528\u9ED8\u8BA4\u5373\u53EF\u3002"})]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u5F71\u54CD version \u6570\u7684\u4E24\u4E2A\u53C2\u6570\uFF1A"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"workers"}),"\uFF1Aworker \u6570\u8D8A\u591A\uFF0C\u7248\u672C\u53F7\u8D8A\u591A\uFF0C\u5E76\u53D1\u8D8A\u9AD8\uFF0C\u4E00\u822C\u4F7F\u7528 8 \u5373\u53EF\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"max_byte_per_task"}),"\uFF1A",(0,d.jsx)(n.code,{children:"max_byte_per_task"})," \u8D8A\u5927\uFF0C\u5355\u4E2A version \u6570\u636E\u91CF\u8D8A\u5927\uFF0Cversion \u6570\u8D8A\u5C11\uFF0C\u4F46\u662F\u8FD9\u4E2A\u503C\u8FC7\u5927\u53EF\u80FD\u4F1A\u9047\u5230 ",(0,d.jsx)(n.code,{children:"-238 TOO MANY SEGMENT "}),"\u7684\u95EE\u9898\u3002\u4E00\u822C\u4F7F\u7528\u9ED8\u8BA4\u503C\u5373\u53EF\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"2-\u63A8\u8350\u547D\u4EE4",children:"2. \u63A8\u8350\u547D\u4EE4"}),"\n",(0,d.jsxs)(n.p,{children:["\u8BBE\u7F6E\u5FC5\u8981\u53C2\u6570\u4EE5\u53CA\u8BBE\u7F6E ",(0,d.jsx)(n.code,{children:"workers=8"})," \u5373\u53EF\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-text",children:'./doris-streamloader --source_file="demo.csv,demoFile*.csv,demoDir" --url="http://127.0.0.1:8030" --header="column_separator:," --db="demo" --table="test_load" --u="root" --workers=8\n'})}),"\n",(0,d.jsx)(n.h3,{id:"3-faq",children:"3. FAQ"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u5728\u5BFC\u5165\u8FC7\u7A0B\u4E2D\uFF0C\u9047\u5230\u4E86\u90E8\u5206\u5B50\u4EFB\u52A1\u5931\u8D25\u7684\u95EE\u9898\uFF0C\u5F53\u65F6\u6CA1\u6709\u65AD\u70B9\u7EED\u4F20\u7684\u529F\u80FD\uFF0C\u5BFC\u5165\u5931\u8D25\u540E\u91CD\u65B0\u5220\u8868\u5BFC\u5165\uFF0C\u5982\u679C\u9047\u5230\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5DE5\u5177\u4F1A\u8FDB\u884C\u81EA\u52A8\u91CD\u4F20\uFF0C\u5982\u679C\u91CD\u4F20\u5931\u8D25\u4F1A\u6253\u5370\u51FA\u91CD\u4F20\u547D\u4EE4\uFF0C\u590D\u5236\u540E\u53EF\u4EE5\u624B\u52A8\u91CD\u4F20\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u8BE5\u5DE5\u5177\u7684\u9ED8\u8BA4\u5355\u4E2A\u5BFC\u5165\u662F 100G\uFF0C\u8D85\u8FC7\u4E86 BE \u9ED8\u8BA4\u7684 ",(0,d.jsx)(n.code,{children:"streaming_load_max_mb"})," \u9608\u503C\u5982\u679C\u4E0D\u5E0C\u671B\u91CD\u542F BE\uFF0C\u53EF\u4EE5\u51CF\u5C11 ",(0,d.jsx)(n.code,{children:"max_byte_per_task"})," \u8FD9\u4E2A\u53C2\u6570\u7684\u5927\u5C0F\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u67E5\u770B ",(0,d.jsx)(n.code,{children:"streaming_load_max_mb"})," \u5927\u5C0F\u7684\u65B9\u6CD5\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-Go",children:'-curl "http://127.0.0.1:8040/api/show_config"\n'})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u5BFC\u5165\u8FC7\u7A0B\u5982\u679C\u9047\u5230 ",(0,d.jsx)(n.code,{children:"-238 TOO MANY SEGMENT"})," \u7684\u95EE\u9898\uFF0C\u53EF\u4EE5\u51CF\u5C11 ",(0,d.jsx)(n.code,{children:"max_byte_per_task"})," \u7684\u5927\u5C0F\u3002"]}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return t}});var r=s(667294);let d={},l=r.createContext(d);function t(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);