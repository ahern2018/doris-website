"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["804457"],{674325:function(e,n,d){d.r(n),d.d(n,{metadata:()=>i,contentTitle:()=>c,default:()=>a,assets:()=>h,toc:()=>t,frontMatter:()=>r});var i=JSON.parse('{"id":"compute-storage-decoupled/before-deployment","title":"Doris \u5B58\u7B97\u5206\u79BB\u6A21\u5F0F\u90E8\u7F72\u51C6\u5907","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/compute-storage-decoupled/before-deployment.md","sourceDirName":"compute-storage-decoupled","slug":"/compute-storage-decoupled/before-deployment","permalink":"/zh-CN/docs/dev/compute-storage-decoupled/before-deployment","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Doris \u5B58\u7B97\u5206\u79BB\u6A21\u5F0F\u90E8\u7F72\u51C6\u5907","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u5B58\u7B97\u4E00\u4F53 VS \u5B58\u7B97\u5206\u79BB","permalink":"/zh-CN/docs/dev/compute-storage-decoupled/overview"},"next":{"title":"\u7F16\u8BD1\u90E8\u7F72","permalink":"/zh-CN/docs/dev/compute-storage-decoupled/compilation-and-deployment"}}'),l=d("785893"),s=d("250065");let r={title:"Doris \u5B58\u7B97\u5206\u79BB\u6A21\u5F0F\u90E8\u7F72\u51C6\u5907",language:"zh-CN"},c="Doris \u5B58\u7B97\u5206\u79BB\u6A21\u5F0F\u90E8\u7F72\u51C6\u5907",h={},t=[{value:"1. \u6982\u8FF0",id:"1-\u6982\u8FF0",level:2},{value:"2. \u67B6\u6784\u7EC4\u4EF6",id:"2-\u67B6\u6784\u7EC4\u4EF6",level:2},{value:"3. \u7CFB\u7EDF\u8981\u6C42",id:"3-\u7CFB\u7EDF\u8981\u6C42",level:2},{value:"3.1 \u786C\u4EF6\u8981\u6C42",id:"31-\u786C\u4EF6\u8981\u6C42",level:3},{value:"3.2 \u8F6F\u4EF6\u4F9D\u8D56",id:"32-\u8F6F\u4EF6\u4F9D\u8D56",level:3},{value:"4. \u90E8\u7F72\u89C4\u5212",id:"4-\u90E8\u7F72\u89C4\u5212",level:2},{value:"4.1 \u6D4B\u8BD5\u73AF\u5883\u90E8\u7F72",id:"41-\u6D4B\u8BD5\u73AF\u5883\u90E8\u7F72",level:3},{value:"4.2 \u751F\u4EA7\u90E8\u7F72",id:"42-\u751F\u4EA7\u90E8\u7F72",level:3},{value:"5. \u5B89\u88C5\u6B65\u9AA4",id:"5-\u5B89\u88C5\u6B65\u9AA4",level:2},{value:"5.1 \u5B89\u88C5 FoundationDB",id:"51-\u5B89\u88C5-foundationdb",level:3},{value:"5.1.1 \u673A\u5668\u8981\u6C42",id:"511-\u673A\u5668\u8981\u6C42",level:4},{value:"5.1.2 <code>fdb_vars.sh</code> \u914D\u7F6E",id:"512-fdb_varssh-\u914D\u7F6E",level:4},{value:"\u5FC5\u9700\u7684\u81EA\u5B9A\u4E49\u8BBE\u7F6E",id:"\u5FC5\u9700\u7684\u81EA\u5B9A\u4E49\u8BBE\u7F6E",level:5},{value:"\u53EF\u9009\u7684\u81EA\u5B9A\u4E49\u8BBE\u7F6E",id:"\u53EF\u9009\u7684\u81EA\u5B9A\u4E49\u8BBE\u7F6E",level:5},{value:"5.1.3 \u90E8\u7F72 FDB \u96C6\u7FA4",id:"513-\u90E8\u7F72-fdb-\u96C6\u7FA4",level:4},{value:"5.1.4 \u542F\u52A8 FDB \u670D\u52A1",id:"514-\u542F\u52A8-fdb-\u670D\u52A1",level:4},{value:"5.2 \u5B89\u88C5 OpenJDK 17",id:"52-\u5B89\u88C5-openjdk-17",level:3},{value:"5.3 \u5B89\u88C5 S3 \u6216 HDFS \u670D\u52A1\uFF08\u53EF\u9009\uFF09",id:"53-\u5B89\u88C5-s3-\u6216-hdfs-\u670D\u52A1\u53EF\u9009",level:3},{value:"6. \u540E\u7EED\u6B65\u9AA4",id:"6-\u540E\u7EED\u6B65\u9AA4",level:2},{value:"7. \u6CE8\u610F\u4E8B\u9879",id:"7-\u6CE8\u610F\u4E8B\u9879",level:2},{value:"8. \u53C2\u8003\u8D44\u6599",id:"8-\u53C2\u8003\u8D44\u6599",level:2}];function o(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"doris-\u5B58\u7B97\u5206\u79BB\u6A21\u5F0F\u90E8\u7F72\u51C6\u5907",children:"Doris \u5B58\u7B97\u5206\u79BB\u6A21\u5F0F\u90E8\u7F72\u51C6\u5907"})}),"\n",(0,l.jsx)(n.h2,{id:"1-\u6982\u8FF0",children:"1. \u6982\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u672C\u6587\u6863\u4ECB\u7ECD\u4E86 Apache Doris \u5B58\u7B97\u5206\u79BB\u6A21\u5F0F\u7684\u90E8\u7F72\u51C6\u5907\u5DE5\u4F5C\u3002\u5B58\u7B97\u5206\u79BB\u67B6\u6784\u65E8\u5728\u63D0\u9AD8\u7CFB\u7EDF\u7684\u53EF\u6269\u5C55\u6027\u548C\u6027\u80FD\uFF0C\u9002\u7528\u4E8E\u5927\u89C4\u6A21\u6570\u636E\u5904\u7406\u573A\u666F\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"2-\u67B6\u6784\u7EC4\u4EF6",children:"2. \u67B6\u6784\u7EC4\u4EF6"}),"\n",(0,l.jsx)(n.p,{children:"Doris \u5B58\u7B97\u5206\u79BB\u67B6\u6784\u5305\u542B\u4E09\u4E2A\u4E3B\u8981\u6A21\u5757\uFF1A"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Frontend (FE)"}),"\uFF1A\u5904\u7406\u7528\u6237\u8BF7\u6C42\u548C\u7BA1\u7406\u5143\u6570\u636E\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Backend (BE)"}),"\uFF1A\u65E0\u72B6\u6001\u8BA1\u7B97\u8282\u70B9\uFF0C\u6267\u884C\u67E5\u8BE2\u4EFB\u52A1\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Meta Service (MS)"}),"\uFF1A\u7BA1\u7406\u5143\u6570\u636E\u64CD\u4F5C\u548C\u6570\u636E\u56DE\u6536\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"3-\u7CFB\u7EDF\u8981\u6C42",children:"3. \u7CFB\u7EDF\u8981\u6C42"}),"\n",(0,l.jsx)(n.h3,{id:"31-\u786C\u4EF6\u8981\u6C42",children:"3.1 \u786C\u4EF6\u8981\u6C42"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u6700\u5C0F\u914D\u7F6E\uFF1A3 \u53F0\u670D\u52A1\u5668"}),"\n",(0,l.jsx)(n.li,{children:"\u63A8\u8350\u914D\u7F6E\uFF1A5 \u53F0\u6216\u66F4\u591A\u670D\u52A1\u5668"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"32-\u8F6F\u4EF6\u4F9D\u8D56",children:"3.2 \u8F6F\u4EF6\u4F9D\u8D56"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"FoundationDB (FDB) 7.1.38 \u6216\u66F4\u9AD8\u7248\u672C"}),"\n",(0,l.jsx)(n.li,{children:"OpenJDK 17"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"4-\u90E8\u7F72\u89C4\u5212",children:"4. \u90E8\u7F72\u89C4\u5212"}),"\n",(0,l.jsx)(n.h3,{id:"41-\u6D4B\u8BD5\u73AF\u5883\u90E8\u7F72",children:"4.1 \u6D4B\u8BD5\u73AF\u5883\u90E8\u7F72"}),"\n",(0,l.jsx)(n.p,{children:"\u5355\u673A\u90E8\u7F72\u6240\u6709\u6A21\u5757\uFF0C\u4E0D\u9002\u7528\u4E8E\u751F\u4EA7\u73AF\u5883\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"42-\u751F\u4EA7\u90E8\u7F72",children:"4.2 \u751F\u4EA7\u90E8\u7F72"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"3 \u53F0\u6216\u66F4\u591A\u673A\u5668\u90E8\u7F72 FDB"}),"\n",(0,l.jsx)(n.li,{children:"3 \u53F0\u6216\u66F4\u591A\u673A\u5668\u90E8\u7F72 FE \u548C Meta Service"}),"\n",(0,l.jsx)(n.li,{children:"3 \u53F0\u6216\u66F4\u591A\u673A\u5668\u90E8\u7F72 BE"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u673A\u5668\u914D\u7F6E\u9AD8\u65F6\uFF0C\u53EF\u4EE5\u8003\u8651 FDB\u3001FE \u548C Meta Service \u6DF7\u5E03\uFF0C\u4F46\u662F\u78C1\u76D8\u4E0D\u8981\u6DF7\u7528\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"5-\u5B89\u88C5\u6B65\u9AA4",children:"5. \u5B89\u88C5\u6B65\u9AA4"}),"\n",(0,l.jsx)(n.h3,{id:"51-\u5B89\u88C5-foundationdb",children:"5.1 \u5B89\u88C5 FoundationDB"}),"\n",(0,l.jsxs)(n.p,{children:["\u672C\u8282\u63D0\u4F9B\u4E86\u811A\u672C ",(0,l.jsx)(n.code,{children:"fdb_vars.sh"})," \u548C ",(0,l.jsx)(n.code,{children:"fdb_ctl.sh"})," \u914D\u7F6E\u3001\u90E8\u7F72\u548C\u542F\u52A8 FDB\uFF08FoundationDB\uFF09\u670D\u52A1\u7684\u5206\u6B65\u6307\u5357\u3002\u60A8\u53EF\u4EE5\u4E0B\u8F7D ",(0,l.jsx)(n.a,{href:"http://apache-doris-releases.oss-accelerate.aliyuncs.com/apache-doris-3.0.2-tools.tar.gz",children:"doris tools"})," \u5E76\u4ECE ",(0,l.jsx)(n.code,{children:"fdb"})," \u76EE\u5F55\u83B7\u53D6 ",(0,l.jsx)(n.code,{children:"fdb_vars.sh"})," \u548C ",(0,l.jsx)(n.code,{children:"fdb_ctl.sh"}),"\u3002"]}),"\n",(0,l.jsx)(n.h4,{id:"511-\u673A\u5668\u8981\u6C42",children:"5.1.1 \u673A\u5668\u8981\u6C42"}),"\n",(0,l.jsx)(n.p,{children:"\u901A\u5E38\uFF0C\u81F3\u5C11\u9700\u8981 3 \u53F0\u914D\u5907 SSD \u7684\u673A\u5668\u6765\u5F62\u6210\u5177\u6709\u53CC\u6570\u636E\u526F\u672C\u5E76\u5141\u8BB8\u5355\u673A\u6545\u969C\u7684 FoundationDB \u96C6\u7FA4\u3002"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"\u5982\u679C\u4EC5\u7528\u4E8E\u5F00\u53D1/\u6D4B\u8BD5\u76EE\u7684\uFF0C\u5355\u53F0\u673A\u5668\u5C31\u8DB3\u591F\u4E86\u3002"})}),"\n",(0,l.jsxs)(n.h4,{id:"512-fdb_varssh-\u914D\u7F6E",children:["5.1.2 ",(0,l.jsx)(n.code,{children:"fdb_vars.sh"})," \u914D\u7F6E"]}),"\n",(0,l.jsx)(n.h5,{id:"\u5FC5\u9700\u7684\u81EA\u5B9A\u4E49\u8BBE\u7F6E",children:"\u5FC5\u9700\u7684\u81EA\u5B9A\u4E49\u8BBE\u7F6E"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u53C2\u6570"}),(0,l.jsx)(n.th,{children:"\u63CF\u8FF0"}),(0,l.jsx)(n.th,{children:"\u7C7B\u578B"}),(0,l.jsx)(n.th,{children:"\u793A\u4F8B"}),(0,l.jsx)(n.th,{children:"\u6CE8\u610F\u4E8B\u9879"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"DATA_DIRS"})}),(0,l.jsx)(n.td,{children:"\u6307\u5B9A FoundationDB \u5B58\u50A8\u7684\u6570\u636E\u76EE\u5F55"}),(0,l.jsx)(n.td,{children:"\u4EE5\u9017\u53F7\u5206\u9694\u7684\u7EDD\u5BF9\u8DEF\u5F84\u5217\u8868"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"/mnt/foundationdb/data1,/mnt/foundationdb/data2,/mnt/foundationdb/data3"})}),(0,l.jsxs)(n.td,{children:["- \u8FD0\u884C\u811A\u672C\u524D\u786E\u4FDD\u76EE\u5F55\u5DF2\u521B\u5EFA",(0,l.jsx)(n.br,{}),"- \u751F\u4EA7\u73AF\u5883\u5EFA\u8BAE\u4F7F\u7528 SSD \u548C\u72EC\u7ACB\u76EE\u5F55"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"FDB_CLUSTER_IPS"})}),(0,l.jsx)(n.td,{children:"\u5B9A\u4E49\u96C6\u7FA4 IP"}),(0,l.jsx)(n.td,{children:"\u5B57\u7B26\u4E32\uFF08\u4EE5\u9017\u53F7\u5206\u9694\u7684 IP \u5730\u5740\uFF09"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"172.200.0.2,172.200.0.3,172.200.0.4"})}),(0,l.jsxs)(n.td,{children:["- \u751F\u4EA7\u96C6\u7FA4\u81F3\u5C11\u5E94\u6709 3 \u4E2A IP \u5730\u5740",(0,l.jsx)(n.br,{}),"- \u7B2C\u4E00\u4E2A IP \u5730\u5740\u5C06\u7528\u4F5C\u534F\u8C03\u5668",(0,l.jsx)(n.br,{}),"- \u4E3A\u9AD8\u53EF\u7528\u6027\uFF0C\u5C06\u673A\u5668\u653E\u7F6E\u5728\u4E0D\u540C\u673A\u67B6\u4E0A"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"FDB_HOME"})}),(0,l.jsx)(n.td,{children:"\u5B9A\u4E49 FoundationDB \u4E3B\u76EE\u5F55"}),(0,l.jsx)(n.td,{children:"\u7EDD\u5BF9\u8DEF\u5F84"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"/fdbhome"})}),(0,l.jsxs)(n.td,{children:["- \u9ED8\u8BA4\u8DEF\u5F84\u4E3A /fdbhome",(0,l.jsx)(n.br,{}),"- \u786E\u4FDD\u6B64\u8DEF\u5F84\u662F\u7EDD\u5BF9\u8DEF\u5F84"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"FDB_CLUSTER_ID"})}),(0,l.jsx)(n.td,{children:"\u5B9A\u4E49\u96C6\u7FA4 ID"}),(0,l.jsx)(n.td,{children:"\u5B57\u7B26\u4E32"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"SAQESzbh"})}),(0,l.jsxs)(n.td,{children:["- \u6BCF\u4E2A\u96C6\u7FA4\u7684 ID \u5FC5\u987B\u552F\u4E00",(0,l.jsx)(n.br,{}),"- \u53EF\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"mktemp -u XXXXXXXX"})," \u751F\u6210"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"FDB_CLUSTER_DESC"})}),(0,l.jsx)(n.td,{children:"\u5B9A\u4E49 FDB \u96C6\u7FA4\u7684\u63CF\u8FF0"}),(0,l.jsx)(n.td,{children:"\u5B57\u7B26\u4E32"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"dorisfdb"})}),(0,l.jsx)(n.td,{children:"- \u5EFA\u8BAE\u66F4\u6539\u4E3A\u5BF9\u90E8\u7F72\u6709\u610F\u4E49\u7684\u5185\u5BB9"})]})]})]}),"\n",(0,l.jsx)(n.h5,{id:"\u53EF\u9009\u7684\u81EA\u5B9A\u4E49\u8BBE\u7F6E",children:"\u53EF\u9009\u7684\u81EA\u5B9A\u4E49\u8BBE\u7F6E"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u53C2\u6570"}),(0,l.jsx)(n.th,{children:"\u63CF\u8FF0"}),(0,l.jsx)(n.th,{children:"\u7C7B\u578B"}),(0,l.jsx)(n.th,{children:"\u793A\u4F8B"}),(0,l.jsx)(n.th,{children:"\u6CE8\u610F\u4E8B\u9879"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"MEMORY_LIMIT_GB"})}),(0,l.jsx)(n.td,{children:"\u5B9A\u4E49 FDB \u8FDB\u7A0B\u7684\u5185\u5B58\u9650\u5236\uFF0C\u5355\u4F4D\u4E3A GB"}),(0,l.jsx)(n.td,{children:"\u6574\u6570"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"MEMORY_LIMIT_GB=16"})}),(0,l.jsx)(n.td,{children:"\u6839\u636E\u53EF\u7528\u5185\u5B58\u8D44\u6E90\u548C FDB \u8FDB\u7A0B\u7684\u8981\u6C42\u8C03\u6574\u6B64\u503C"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"CPU_CORES_LIMIT"})}),(0,l.jsx)(n.td,{children:"\u5B9A\u4E49 FDB \u8FDB\u7A0B\u7684 CPU \u6838\u5FC3\u9650\u5236"}),(0,l.jsx)(n.td,{children:"\u6574\u6570"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"CPU_CORES_LIMIT=8"})}),(0,l.jsx)(n.td,{children:"\u6839\u636E\u53EF\u7528\u7684 CPU \u6838\u5FC3\u6570\u91CF\u548C FDB \u8FDB\u7A0B\u7684\u8981\u6C42\u8BBE\u7F6E\u6B64\u503C"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"513-\u90E8\u7F72-fdb-\u96C6\u7FA4",children:"5.1.3 \u90E8\u7F72 FDB \u96C6\u7FA4"}),"\n",(0,l.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"fdb_vars.sh"})," \u914D\u7F6E\u73AF\u5883\u540E\uFF0C\u60A8\u53EF\u4EE5\u5728\u6BCF\u4E2A\u8282\u70B9\u4E0A\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"fdb_ctl.sh"})," \u811A\u672C\u90E8\u7F72 FDB \u96C6\u7FA4\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"./fdb_ctl.sh deploy\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6B64\u547D\u4EE4\u542F\u52A8 FDB \u96C6\u7FA4\u7684\u90E8\u7F72\u8FC7\u7A0B\u3002"}),"\n",(0,l.jsx)(n.h4,{id:"514-\u542F\u52A8-fdb-\u670D\u52A1",children:"5.1.4 \u542F\u52A8 FDB \u670D\u52A1"}),"\n",(0,l.jsxs)(n.p,{children:["FDB \u96C6\u7FA4\u90E8\u7F72\u5B8C\u6210\u540E\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"fdb_ctl.sh"})," \u811A\u672C\u542F\u52A8 FDB \u670D\u52A1\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"./fdb_ctl.sh start\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6B64\u547D\u4EE4\u542F\u52A8 FDB \u670D\u52A1\uFF0C\u4F7F\u96C6\u7FA4\u5DE5\u4F5C\u5E76\u83B7\u53D6 FDB \u96C6\u7FA4\u8FDE\u63A5\u5B57\u7B26\u4E32\uFF0C\u540E\u7EED\u53EF\u4EE5\u7528\u4E8E\u914D\u7F6E MetaService\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"52-\u5B89\u88C5-openjdk-17",children:"5.2 \u5B89\u88C5 OpenJDK 17"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u4E0B\u8F7D ",(0,l.jsx)(n.a,{href:"https://download.java.net/java/GA/jdk17.0.1/2a2082e5a09d4267845be086888add4f/12/GPL/openjdk-17.0.1_linux-x64_bin.tar.gz",children:"OpenJDK 17"})]}),"\n",(0,l.jsx)(n.li,{children:"\u89E3\u538B\u5E76\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF JAVA_HOME."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"53-\u5B89\u88C5-s3-\u6216-hdfs-\u670D\u52A1\u53EF\u9009",children:"5.3 \u5B89\u88C5 S3 \u6216 HDFS \u670D\u52A1\uFF08\u53EF\u9009\uFF09"}),"\n",(0,l.jsx)(n.p,{children:"Apache Doris \u5B58\u7B97\u5206\u79BB\u6A21\u5F0F\u4F1A\u5C06\u6570\u636E\u5B58\u50A8\u5728 S3 \u670D\u52A1\u6216 HDFS \u670D\u52A1\u4E0A\u9762\uFF0C\u5982\u679C\u60A8\u5DF2\u7ECF\u6709\u76F8\u5173\u670D\u52A1\uFF0C\u76F4\u63A5\u4F7F\u7528\u5373\u53EF\u3002\u5982\u679C\u6CA1\u6709\uFF0C\u672C\u6587\u6863\u63D0\u4F9B MinIO \u7684\u7B80\u5355\u90E8\u7F72\u6559\u7A0B\uFF1A"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u5728 MinIO \u7684",(0,l.jsx)(n.a,{href:"https://min.io/download?license=agpl&platform=linux",children:"\u4E0B\u8F7D\u9875\u9762"}),"\u9009\u62E9\u5408\u9002\u7684\u7248\u672C\u4EE5\u53CA\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u4E0B\u8F7D\u5BF9\u5E94\u7684 Server \u4EE5\u53CA Client \u7684\u4E8C\u8FDB\u5236\u5305\u6216\u5B89\u88C5\u5305\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u542F\u52A8 MinIO Server\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"export MINIO_REGION_NAME=us-east-1\nexport MINIO_ROOT_USER=minio # \u5728\u8F83\u8001\u7248\u672C\u4E2D\uFF0C\u8BE5\u914D\u7F6E\u4E3A MINIO_ACCESS_KEY=minio\nexport MINIO_ROOT_PASSWORD=minioadmin # \u5728\u8F83\u8001\u7248\u672C\u4E2D\uFF0C\u8BE5\u914D\u7F6E\u4E3A MINIO_SECRET_KEY=minioadmin\nnohup ./minio server /mnt/data 2>&1 &\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u914D\u7F6E MinIO Client\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# \u5982\u679C\u4F60\u4F7F\u7528\u7684\u662F\u5B89\u88C5\u5305\u5B89\u88C5\u7684\u5BA2\u6237\u7AEF\uFF0C\u90A3\u4E48\u5BA2\u6237\u7AEF\u540D\u4E3A mcli\uFF0C\u76F4\u63A5\u4E0B\u8F7D\u5BA2\u6237\u7AEF\u4E8C\u8FDB\u5236\u5305\uFF0C\u5219\u5176\u540D\u4E3A mc\n./mc config host add myminio http://127.0.0.1:9000 minio minioadmin\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u521B\u5EFA\u4E00\u4E2A\u6876\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"./mc mb myminio/doris\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u9A8C\u8BC1\u662F\u5426\u6B63\u5E38\u5DE5\u4F5C\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# \u4E0A\u4F20\u4E00\u4E2A\u6587\u4EF6\n./mc mv test_file myminio/doris\n# \u67E5\u770B\u8FD9\u4E2A\u6587\u4EF6\n./mc ls myminio/doris\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"6-\u540E\u7EED\u6B65\u9AA4",children:"6. \u540E\u7EED\u6B65\u9AA4"}),"\n",(0,l.jsx)(n.p,{children:"\u5B8C\u6210\u4E0A\u8FF0\u51C6\u5907\u5DE5\u4F5C\u540E\uFF0C\u8BF7\u53C2\u8003\u4EE5\u4E0B\u6587\u6863\u7EE7\u7EED\u90E8\u7F72\uFF1A"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh-CN/docs/dev/compute-storage-decoupled/compilation-and-deployment",children:"\u90E8\u7F72"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh-CN/docs/dev/compute-storage-decoupled/managing-compute-cluster",children:"\u7BA1\u7406 Compute Group"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh-CN/docs/dev/compute-storage-decoupled/managing-storage-vault",children:"\u7BA1\u7406 Storage Vault"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"7-\u6CE8\u610F\u4E8B\u9879",children:"7. \u6CE8\u610F\u4E8B\u9879"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u786E\u4FDD\u6240\u6709\u8282\u70B9\u7684\u65F6\u95F4\u540C\u6B65"}),"\n",(0,l.jsx)(n.li,{children:"\u5B9A\u671F\u5907\u4EFD FoundationDB \u6570\u636E"}),"\n",(0,l.jsx)(n.li,{children:"\u6839\u636E\u5B9E\u9645\u8D1F\u8F7D\u8C03\u6574 FoundationDB \u548C Doris \u7684\u914D\u7F6E\u53C2\u6570"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"8-\u53C2\u8003\u8D44\u6599",children:"8. \u53C2\u8003\u8D44\u6599"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://apple.github.io/foundationdb/index.html",children:"FoundationDB \u5B98\u65B9\u6587\u6863"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://doris.apache.org/",children:"Apache Doris \u5B98\u65B9\u7F51\u7AD9"})}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return c},a:function(){return r}});var i=d(667294);let l={},s=i.createContext(l);function r(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);