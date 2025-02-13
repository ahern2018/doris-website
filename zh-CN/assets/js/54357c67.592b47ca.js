"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["291106"],{930277:function(n,e,s){s.r(e),s.d(e,{metadata:()=>r,contentTitle:()=>i,default:()=>h,assets:()=>c,toc:()=>E,frontMatter:()=>d});var r=JSON.parse('{"id":"benchmark/ssb","title":"Star Schema Benchmark","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/benchmark/ssb.md","sourceDirName":"benchmark","slug":"/benchmark/ssb","permalink":"/zh-CN/docs/3.0/benchmark/ssb","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Star Schema Benchmark","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u52A0\u5BC6\u548C\u8131\u654F\u51FD\u6570","permalink":"/zh-CN/docs/3.0/admin-manual/auth/encryption-function"},"next":{"title":"TPC-H Benchmark","permalink":"/zh-CN/docs/3.0/benchmark/tpch"}}'),t=s("785893"),l=s("250065");let d={title:"Star Schema Benchmark",language:"zh-CN"},i="Star Schema Benchmark",c={},E=[{value:"1. \u786C\u4EF6\u73AF\u5883",id:"1-\u786C\u4EF6\u73AF\u5883",level:2},{value:"2. \u8F6F\u4EF6\u73AF\u5883",id:"2-\u8F6F\u4EF6\u73AF\u5883",level:2},{value:"3. \u6D4B\u8BD5\u6570\u636E\u91CF",id:"3-\u6D4B\u8BD5\u6570\u636E\u91CF",level:2},{value:"4. SSB \u5BBD\u8868\u6D4B\u8BD5\u7ED3\u679C",id:"4-ssb-\u5BBD\u8868\u6D4B\u8BD5\u7ED3\u679C",level:2},{value:"5. \u6807\u51C6 SSB \u6D4B\u8BD5\u7ED3\u679C",id:"5-\u6807\u51C6-ssb-\u6D4B\u8BD5\u7ED3\u679C",level:2},{value:"6. \u73AF\u5883\u51C6\u5907",id:"6-\u73AF\u5883\u51C6\u5907",level:2},{value:"7. \u6570\u636E\u51C6\u5907",id:"7-\u6570\u636E\u51C6\u5907",level:2},{value:"7.1 \u4E0B\u8F7D\u5B89\u88C5 SSB \u6570\u636E\u751F\u6210\u5DE5\u5177\u3002",id:"71-\u4E0B\u8F7D\u5B89\u88C5-ssb-\u6570\u636E\u751F\u6210\u5DE5\u5177",level:3},{value:"7.2 \u751F\u6210 SSB \u6D4B\u8BD5\u96C6",id:"72-\u751F\u6210-ssb-\u6D4B\u8BD5\u96C6",level:3},{value:"7.3 \u5EFA\u8868",id:"73-\u5EFA\u8868",level:3},{value:"7.3.1 \u51C6\u5907 <code>doris-cluster.conf</code> \u6587\u4EF6",id:"731-\u51C6\u5907-doris-clusterconf-\u6587\u4EF6",level:4},{value:"7.3.2 \u6267\u884C\u4EE5\u4E0B\u811A\u672C\u751F\u6210\u521B\u5EFA SSB \u8868",id:"732-\u6267\u884C\u4EE5\u4E0B\u811A\u672C\u751F\u6210\u521B\u5EFA-ssb-\u8868",level:4},{value:"7.4 \u5BFC\u5165\u6570\u636E",id:"74-\u5BFC\u5165\u6570\u636E",level:3},{value:"7.5 \u68C0\u67E5\u5BFC\u5165\u6570\u636E",id:"75-\u68C0\u67E5\u5BFC\u5165\u6570\u636E",level:3},{value:"7.6 \u67E5\u8BE2\u6D4B\u8BD5",id:"76-\u67E5\u8BE2\u6D4B\u8BD5",level:3},{value:"7.6.1 SSB FLAT \u6D4B\u8BD5 SQL",id:"761-ssb-flat-\u6D4B\u8BD5-sql",level:4},{value:"<strong>7.6.2 SSB \u6807\u51C6\u6D4B\u8BD5 SQL</strong>",id:"762-ssb-\u6807\u51C6\u6D4B\u8BD5-sql",level:4}];function a(n){let e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"star-schema-benchmark",children:"Star Schema Benchmark"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"https://www.cs.umb.edu/~poneil/StarSchemaB.PDF",children:"Star Schema Benchmark(SSB)"})," \u662F\u4E00\u4E2A\u8F7B\u91CF\u7EA7\u7684\u6570\u4ED3\u573A\u666F\u4E0B\u7684\u6027\u80FD\u6D4B\u8BD5\u96C6\u3002SSB \u57FA\u4E8E ",(0,t.jsx)(e.a,{href:"http://www.tpc.org/tpch/",children:"TPC-H"})," \u63D0\u4F9B\u4E86\u4E00\u4E2A\u7B80\u5316\u7248\u7684\u661F\u578B\u6A21\u578B\u6570\u636E\u96C6\uFF0C\u4E3B\u8981\u7528\u4E8E\u6D4B\u8BD5\u5728\u661F\u578B\u6A21\u578B\u4E0B\uFF0C\u591A\u8868\u5173\u8054\u67E5\u8BE2\u7684\u6027\u80FD\u8868\u73B0\u3002\u53E6\u5916\uFF0C\u4E1A\u754C\u5185\u901A\u5E38\u4E5F\u4F1A\u5C06 SSB \u6253\u5E73\u4E3A\u5BBD\u8868\u6A21\u578B\uFF08\u4EE5\u4E0B\u7B80\u79F0\uFF1ASSB flat\uFF09\uFF0C\u6765\u6D4B\u8BD5\u67E5\u8BE2\u5F15\u64CE\u7684\u6027\u80FD\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u672C\u6587\u6863\u4E3B\u8981\u4ECB\u7ECD Apache Doris \u5728 SSB 1000G \u6D4B\u8BD5\u96C6\u4E0A\u7684\u6027\u80FD\u8868\u73B0\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u5728 SSB \u6807\u51C6\u6D4B\u8BD5\u6570\u636E\u96C6\u4E0A\u7684 13 \u4E2A\u67E5\u8BE2\u4E0A\uFF0C\u6211\u4EEC\u57FA\u4E8E Apache Doris 2.0.15.1 \u7248\u672C\u8FDB\u884C\u4E86\u6D4B\u8BD5\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"1-\u786C\u4EF6\u73AF\u5883",children:"1. \u786C\u4EF6\u73AF\u5883"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u786C\u4EF6"}),(0,t.jsx)(e.th,{children:"\u914D\u7F6E\u8BF4\u660E"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u673A\u5668\u6570\u91CF"}),(0,t.jsx)(e.td,{children:"4 \u53F0\u963F\u91CC\u4E91\u4E3B\u673A\uFF081 \u4E2A FE\uFF0C3 \u4E2A BE\uFF09"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"CPU"}),(0,t.jsx)(e.td,{children:"Intel Xeon (Ice Lake) Platinum 8369B 32 \u6838"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u5185\u5B58"}),(0,t.jsx)(e.td,{children:"128G"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u78C1\u76D8"}),(0,t.jsx)(e.td,{children:"\u963F\u91CC\u4E91 ESSD (PL0)"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"2-\u8F6F\u4EF6\u73AF\u5883",children:"2. \u8F6F\u4EF6\u73AF\u5883"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Doris \u90E8\u7F72 3BE 1FE"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u6838\u7248\u672C\uFF1ALinux version 5.15.0-101-generic"}),"\n",(0,t.jsx)(e.li,{children:"\u64CD\u4F5C\u7CFB\u7EDF\u7248\u672C\uFF1AUbuntu 20.04 LTS (Focal Fossa)"}),"\n",(0,t.jsx)(e.li,{children:"Doris \u8F6F\u4EF6\u7248\u672C\uFF1AApache Doris 2.0.15.1"}),"\n",(0,t.jsx)(e.li,{children:'JDK\uFF1Aopenjdk version "1.8.0_352-352"'}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"3-\u6D4B\u8BD5\u6570\u636E\u91CF",children:"3. \u6D4B\u8BD5\u6570\u636E\u91CF"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{style:{textAlign:"left"},children:"SSB \u8868\u540D"}),(0,t.jsx)(e.th,{style:{textAlign:"left"},children:"\u884C\u6570"}),(0,t.jsx)(e.th,{style:{textAlign:"left"},children:"\u5907\u6CE8"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"lineorder"}),(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"5,999,989,709"}),(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"\u5546\u54C1\u8BA2\u5355\u660E\u7EC6\u8868\u8868"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"customer"}),(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"30,000,000"}),(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"\u5BA2\u6237\u4FE1\u606F\u8868"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"part"}),(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"2,000,000"}),(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"\u96F6\u4EF6\u4FE1\u606F\u8868"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"supplier"}),(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"2,000,000"}),(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"\u4F9B\u5E94\u5546\u4FE1\u606F\u8868"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"dates"}),(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"2,556"}),(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"\u65E5\u671F\u8868"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"lineorder_flat"}),(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"5,999,989,709"}),(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"\u6570\u636E\u5C55\u5E73\u540E\u7684\u5BBD\u8868"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"4-ssb-\u5BBD\u8868\u6D4B\u8BD5\u7ED3\u679C",children:"4. SSB \u5BBD\u8868\u6D4B\u8BD5\u7ED3\u679C"}),"\n",(0,t.jsx)(e.p,{children:"\u4F7F\u7528 Apache Doris 2.0.15.1 \u7248\u672C\u8FDB\u884C\u6D4B\u8BD5\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Query"}),(0,t.jsx)(e.th,{children:"Doris 2.0.15.1 (ms)"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"q1.1"}),(0,t.jsx)(e.td,{children:"80"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"q1.2"}),(0,t.jsx)(e.td,{children:"10"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"q1.3"}),(0,t.jsx)(e.td,{children:"110"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"q2.1"}),(0,t.jsx)(e.td,{children:"1680"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"q2.2"}),(0,t.jsx)(e.td,{children:"1210"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"q2.3"}),(0,t.jsx)(e.td,{children:"1060"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"q3.1"}),(0,t.jsx)(e.td,{children:"2010"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"q3.2"}),(0,t.jsx)(e.td,{children:"1560"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"q3.3"}),(0,t.jsx)(e.td,{children:"600"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"q3.4"}),(0,t.jsx)(e.td,{children:"10"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"q4.1"}),(0,t.jsx)(e.td,{children:"2380"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"q4.2"}),(0,t.jsx)(e.td,{children:"190"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"q4.3"}),(0,t.jsx)(e.td,{children:"120"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"Total"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"11020"})})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"5-\u6807\u51C6-ssb-\u6D4B\u8BD5\u7ED3\u679C",children:"5. \u6807\u51C6 SSB \u6D4B\u8BD5\u7ED3\u679C"}),"\n",(0,t.jsx)(e.p,{children:"\u4F7F\u7528 Apache Doris 2.0.15.1 \u7248\u672C\u8FDB\u884C\u6D4B\u8BD5\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Query"}),(0,t.jsx)(e.th,{children:"Doris 2.0.15.1 (ms)"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"q1.1"}),(0,t.jsx)(e.td,{children:"330"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"q1.2"}),(0,t.jsx)(e.td,{children:"80"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"q1.3"}),(0,t.jsx)(e.td,{children:"80"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"q2.1"}),(0,t.jsx)(e.td,{children:"1780"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"q2.2"}),(0,t.jsx)(e.td,{children:"1970"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"q2.3"}),(0,t.jsx)(e.td,{children:"1510"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"q3.1"}),(0,t.jsx)(e.td,{children:"4000"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"q3.2"}),(0,t.jsx)(e.td,{children:"1720"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"q3.3"}),(0,t.jsx)(e.td,{children:"1510"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"q3.4"}),(0,t.jsx)(e.td,{children:"160"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"q4.1"}),(0,t.jsx)(e.td,{children:"4010"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"q4.2"}),(0,t.jsx)(e.td,{children:"840"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"q4.3"}),(0,t.jsx)(e.td,{children:"400"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"Total"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"19390"})})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"6-\u73AF\u5883\u51C6\u5907",children:"6. \u73AF\u5883\u51C6\u5907"}),"\n",(0,t.jsxs)(e.p,{children:["\u8BF7\u5148\u53C2\u7167 ",(0,t.jsx)(e.a,{href:"../install/cluster-deployment/standard-deployment",children:"\u5B98\u65B9\u6587\u6863"})," \u8FDB\u884C Apache Doris \u7684\u5B89\u88C5\u90E8\u7F72\uFF0C\u4EE5\u83B7\u5F97\u4E00\u4E2A\u6B63\u5E38\u8FD0\u884C\u4E2D\u7684 Doris \u96C6\u7FA4\uFF08\u81F3\u5C11\u5305\u542B 1 FE 1 BE\uFF0C\u63A8\u8350 1 FE 3 BE\uFF09\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"7-\u6570\u636E\u51C6\u5907",children:"7. \u6570\u636E\u51C6\u5907"}),"\n",(0,t.jsx)(e.h3,{id:"71-\u4E0B\u8F7D\u5B89\u88C5-ssb-\u6570\u636E\u751F\u6210\u5DE5\u5177",children:"7.1 \u4E0B\u8F7D\u5B89\u88C5 SSB \u6570\u636E\u751F\u6210\u5DE5\u5177\u3002"}),"\n",(0,t.jsxs)(e.p,{children:["\u6267\u884C\u4EE5\u4E0B\u811A\u672C\u4E0B\u8F7D\u5E76\u7F16\u8BD1 ",(0,t.jsx)(e.a,{href:"https://github.com/apache/doris/tree/master/tools/ssb-tools",children:"ssb-tools"})," \u5DE5\u5177\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"sh bin/build-ssb-dbgen.sh\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u5B89\u88C5\u6210\u529F\u540E\uFF0C\u5C06\u5728 ",(0,t.jsx)(e.code,{children:"ssb-dbgen/"})," \u76EE\u5F55\u4E0B\u751F\u6210 ",(0,t.jsx)(e.code,{children:"dbgen"})," \u4E8C\u8FDB\u5236\u6587\u4EF6\u3002"]}),"\n",(0,t.jsx)(e.h3,{id:"72-\u751F\u6210-ssb-\u6D4B\u8BD5\u96C6",children:"7.2 \u751F\u6210 SSB \u6D4B\u8BD5\u96C6"}),"\n",(0,t.jsx)(e.p,{children:"\u6267\u884C\u4EE5\u4E0B\u811A\u672C\u751F\u6210 SSB \u6570\u636E\u96C6\uFF1A"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"sh bin/gen-ssb-data.sh -s 1000\n"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u6CE8 1\uFF1A\u901A\u8FC7 ",(0,t.jsx)(e.code,{children:"sh gen-ssb-data.sh -h"})," \u67E5\u770B\u811A\u672C\u5E2E\u52A9\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u6CE8 2\uFF1A\u6570\u636E\u4F1A\u4EE5 ",(0,t.jsx)(e.code,{children:".tbl"})," \u4E3A\u540E\u7F00\u751F\u6210\u5728  ",(0,t.jsx)(e.code,{children:"ssb-data/"})," \u76EE\u5F55\u4E0B\u3002\u6587\u4EF6\u603B\u5927\u5C0F\u7EA6 600GB\u3002\u751F\u6210\u65F6\u95F4\u53EF\u80FD\u5728\u6570\u5206\u949F\u5230 1 \u5C0F\u65F6\u4E0D\u7B49\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u6CE8 3\uFF1A\u9ED8\u8BA4\u751F\u6210 100G \u7684\u6807\u51C6\u6D4B\u8BD5\u6570\u636E\u96C6"}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"73-\u5EFA\u8868",children:"7.3 \u5EFA\u8868"}),"\n",(0,t.jsxs)(e.h4,{id:"731-\u51C6\u5907-doris-clusterconf-\u6587\u4EF6",children:["7.3.1 \u51C6\u5907 ",(0,t.jsx)(e.code,{children:"doris-cluster.conf"})," \u6587\u4EF6"]}),"\n",(0,t.jsxs)(e.p,{children:["\u5728\u8C03\u7528\u5BFC\u5165\u811A\u672C\u524D\uFF0C\u9700\u8981\u5C06 FE \u7684 ip \u7AEF\u53E3\u7B49\u4FE1\u606F\u5199\u5728 ",(0,t.jsx)(e.code,{children:"doris-cluster.conf"})," \u6587\u4EF6\u4E2D\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u6587\u4EF6\u4F4D\u7F6E\u5728 ",(0,t.jsx)(e.code,{children:"${DORIS_HOME}/tools/ssb-tools/conf/"})," \u76EE\u5F55\u4E0B\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u6587\u4EF6\u5185\u5BB9\u5305\u62EC FE \u7684 ip\uFF0CHTTP \u7AEF\u53E3\uFF0C\u7528\u6237\u540D\uFF0C\u5BC6\u7801\u4EE5\u53CA\u5F85\u5BFC\u5165\u6570\u636E\u7684 DB \u540D\u79F0\uFF1A"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"# Any of FE host\nexport FE_HOST='127.0.0.1'\n# http_port in fe.conf\nexport FE_HTTP_PORT=8030\n# query_port in fe.conf\nexport FE_QUERY_PORT=9030\n# Doris username\nexport USER='root'\n# Doris password\nexport PASSWORD=''\n# The database where SSB tables located\nexport DB='ssb'\n"})}),"\n",(0,t.jsx)(e.h4,{id:"732-\u6267\u884C\u4EE5\u4E0B\u811A\u672C\u751F\u6210\u521B\u5EFA-ssb-\u8868",children:"7.3.2 \u6267\u884C\u4EE5\u4E0B\u811A\u672C\u751F\u6210\u521B\u5EFA SSB \u8868"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"sh bin/create-ssb-tables.sh -s 1000\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u6216\u8005\u590D\u5236 ",(0,t.jsx)(e.a,{href:"https://github.com/apache/doris/blob/master/tools/ssb-tools/ddl/create-ssb-tables-sf1000.sql",children:"create-ssb-tables.sql"}),"  \u548C ",(0,t.jsx)(e.a,{href:"https://github.com/apache/doris/blob/master/tools/ssb-tools/ddl/create-ssb-flat-tables-sf1000.sql",children:"create-ssb-flat-table.sql"}),"  \u4E2D\u7684\u5EFA\u8868\u8BED\u53E5\uFF0C\u5728 MySQL \u5BA2\u6237\u7AEF\u4E2D\u6267\u884C\u3002"]}),"\n",(0,t.jsx)(e.h3,{id:"74-\u5BFC\u5165\u6570\u636E",children:"7.4 \u5BFC\u5165\u6570\u636E"}),"\n",(0,t.jsx)(e.p,{children:"\u6211\u4EEC\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u5B8C\u6210 SSB \u6D4B\u8BD5\u96C6\u6240\u6709\u6570\u636E\u5BFC\u5165\u53CA SSB FLAT \u5BBD\u8868\u6570\u636E\u5408\u6210\u5E76\u5BFC\u5165\u5230\u8868\u91CC\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"sh bin/load-ssb-data.sh\n"})}),"\n",(0,t.jsx)(e.h3,{id:"75-\u68C0\u67E5\u5BFC\u5165\u6570\u636E",children:"7.5 \u68C0\u67E5\u5BFC\u5165\u6570\u636E"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select count(*) from part;\nselect count(*) from customer;\nselect count(*) from supplier;\nselect count(*) from dates;\nselect count(*) from lineorder;\nselect count(*) from lineorder_flat;\n"})}),"\n",(0,t.jsx)(e.h3,{id:"76-\u67E5\u8BE2\u6D4B\u8BD5",children:"7.6 \u67E5\u8BE2\u6D4B\u8BD5"}),"\n",(0,t.jsxs)(e.p,{children:["SSB-FlAT \u67E5\u8BE2\u8BED\u53E5\uFF1A",(0,t.jsx)(e.a,{href:"https://github.com/apache/doris/tree/master/tools/ssb-tools/ssb-flat-queries",children:"ssb-flat-queries"})]}),"\n",(0,t.jsxs)(e.p,{children:["\u6807\u51C6 SSB \u67E5\u8BE2\u8BED\u53E5\uFF1A",(0,t.jsx)(e.a,{href:"https://github.com/apache/doris/tree/master/tools/ssb-tools/ssb-queries",children:"ssb-queries"})]}),"\n",(0,t.jsx)(e.h4,{id:"761-ssb-flat-\u6D4B\u8BD5-sql",children:"7.6.1 SSB FLAT \u6D4B\u8BD5 SQL"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"--Q1.1\nSELECT SUM(LO_EXTENDEDPRICE * LO_DISCOUNT) AS revenue\nFROM lineorder_flat\nWHERE\n    LO_ORDERDATE >= 19930101\n    AND LO_ORDERDATE <= 19931231\n    AND LO_DISCOUNT BETWEEN 1 AND 3\n    AND LO_QUANTITY < 25;\n\n--Q1.2\nSELECT SUM(LO_EXTENDEDPRICE * LO_DISCOUNT) AS revenue\nFROM lineorder_flat\nWHERE\n    LO_ORDERDATE >= 19940101\n  AND LO_ORDERDATE <= 19940131\n  AND LO_DISCOUNT BETWEEN 4 AND 6\n  AND LO_QUANTITY BETWEEN 26 AND 35;\n\n--Q1.3\nSELECT SUM(LO_EXTENDEDPRICE * LO_DISCOUNT) AS revenue\nFROM lineorder_flat\nWHERE\n    weekofyear(LO_ORDERDATE) = 6\n  AND LO_ORDERDATE >= 19940101\n  AND LO_ORDERDATE <= 19941231\n  AND LO_DISCOUNT BETWEEN 5 AND 7\n  AND LO_QUANTITY BETWEEN 26 AND 35;\n\n--Q2.1\nSELECT\n    SUM(LO_REVENUE), (LO_ORDERDATE DIV 10000) AS YEAR,\n    P_BRAND\nFROM lineorder_flat\nWHERE P_CATEGORY = 'MFGR#12' AND S_REGION = 'AMERICA'\nGROUP BY YEAR, P_BRAND\nORDER BY YEAR, P_BRAND;\n\n--Q2.2\nSELECT\n    SUM(LO_REVENUE), (LO_ORDERDATE DIV 10000) AS YEAR,\n    P_BRAND\nFROM lineorder_flat\nWHERE\n    P_BRAND >= 'MFGR#2221'\n  AND P_BRAND <= 'MFGR#2228'\n  AND S_REGION = 'ASIA'\nGROUP BY YEAR, P_BRAND\nORDER BY YEAR, P_BRAND;\n\n--Q2.3\nSELECT\n    SUM(LO_REVENUE), (LO_ORDERDATE DIV 10000) AS YEAR,\n    P_BRAND\nFROM lineorder_flat\nWHERE\n    P_BRAND = 'MFGR#2239'\n  AND S_REGION = 'EUROPE'\nGROUP BY YEAR, P_BRAND\nORDER BY YEAR, P_BRAND;\n\n--Q3.1\nSELECT\n    C_NATION,\n    S_NATION, (LO_ORDERDATE DIV 10000) AS YEAR,\n    SUM(LO_REVENUE) AS revenue\nFROM lineorder_flat\nWHERE\n    C_REGION = 'ASIA'\n  AND S_REGION = 'ASIA'\n  AND LO_ORDERDATE >= 19920101\n  AND LO_ORDERDATE <= 19971231\nGROUP BY C_NATION, S_NATION, YEAR\nORDER BY YEAR ASC, revenue DESC;\n\n--Q3.2\nSELECT\n    C_CITY,\n    S_CITY, (LO_ORDERDATE DIV 10000) AS YEAR,\n    SUM(LO_REVENUE) AS revenue\nFROM lineorder_flat\nWHERE\n    C_NATION = 'UNITED STATES'\n  AND S_NATION = 'UNITED STATES'\n  AND LO_ORDERDATE >= 19920101\n  AND LO_ORDERDATE <= 19971231\nGROUP BY C_CITY, S_CITY, YEAR\nORDER BY YEAR ASC, revenue DESC;\n\n--Q3.3\nSELECT\n    C_CITY,\n    S_CITY, (LO_ORDERDATE DIV 10000) AS YEAR,\n    SUM(LO_REVENUE) AS revenue\nFROM lineorder_flat\nWHERE\n    C_CITY IN ('UNITED KI1', 'UNITED KI5')\n  AND S_CITY IN ('UNITED KI1', 'UNITED KI5')\n  AND LO_ORDERDATE >= 19920101\n  AND LO_ORDERDATE <= 19971231\nGROUP BY C_CITY, S_CITY, YEAR\nORDER BY YEAR ASC, revenue DESC;\n\n--Q3.4\nSELECT\n    C_CITY,\n    S_CITY, (LO_ORDERDATE DIV 10000) AS YEAR,\n    SUM(LO_REVENUE) AS revenue\nFROM lineorder_flat\nWHERE\n    C_CITY IN ('UNITED KI1', 'UNITED KI5')\n  AND S_CITY IN ('UNITED KI1', 'UNITED KI5')\n  AND LO_ORDERDATE >= 19971201\n  AND LO_ORDERDATE <= 19971231\nGROUP BY C_CITY, S_CITY, YEAR\nORDER BY YEAR ASC, revenue DESC;\n\n--Q4.1\nSELECT (LO_ORDERDATE DIV 10000) AS YEAR,\n    C_NATION,\n    SUM(LO_REVENUE - LO_SUPPLYCOST) AS profit\nFROM lineorder_flat\nWHERE\n    C_REGION = 'AMERICA'\n  AND S_REGION = 'AMERICA'\n  AND P_MFGR IN ('MFGR#1', 'MFGR#2')\nGROUP BY YEAR, C_NATION\nORDER BY YEAR ASC, C_NATION ASC;\n\n--Q4.2\nSELECT (LO_ORDERDATE DIV 10000) AS YEAR,\n    S_NATION,\n    P_CATEGORY,\n    SUM(LO_REVENUE - LO_SUPPLYCOST) AS profit\nFROM lineorder_flat\nWHERE\n    C_REGION = 'AMERICA'\n  AND S_REGION = 'AMERICA'\n  AND LO_ORDERDATE >= 19970101\n  AND LO_ORDERDATE <= 19981231\n  AND P_MFGR IN ('MFGR#1', 'MFGR#2')\nGROUP BY YEAR, S_NATION, P_CATEGORY\nORDER BY\n    YEAR ASC,\n    S_NATION ASC,\n    P_CATEGORY ASC;\n\n--Q4.3\nSELECT (LO_ORDERDATE DIV 10000) AS YEAR,\n    S_CITY,\n    P_BRAND,\n    SUM(LO_REVENUE - LO_SUPPLYCOST) AS profit\nFROM lineorder_flat\nWHERE\n    S_NATION = 'UNITED STATES'\n  AND LO_ORDERDATE >= 19970101\n  AND LO_ORDERDATE <= 19981231\n  AND P_CATEGORY = 'MFGR#14'\nGROUP BY YEAR, S_CITY, P_BRAND\nORDER BY YEAR ASC, S_CITY ASC, P_BRAND ASC;\n"})}),"\n",(0,t.jsx)(e.h4,{id:"762-ssb-\u6807\u51C6\u6D4B\u8BD5-sql",children:(0,t.jsx)(e.strong,{children:"7.6.2 SSB \u6807\u51C6\u6D4B\u8BD5 SQL"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"--Q1.1\nSELECT SUM(lo_extendedprice * lo_discount) AS REVENUE\nFROM lineorder, dates\nWHERE\n    lo_orderdate = d_datekey\n  AND d_year = 1993\n  AND lo_discount BETWEEN 1 AND 3\n  AND lo_quantity < 25;\n\n--Q1.2\nSELECT SUM(lo_extendedprice * lo_discount) AS REVENUE\nFROM lineorder, dates\nWHERE\n    lo_orderdate = d_datekey\n  AND d_yearmonth = 'Jan1994'\n  AND lo_discount BETWEEN 4 AND 6\n  AND lo_quantity BETWEEN 26 AND 35;\n    \n--Q1.3\nSELECT\n    SUM(lo_extendedprice * lo_discount) AS REVENUE\nFROM lineorder, dates\nWHERE\n    lo_orderdate = d_datekey\n  AND d_weeknuminyear = 6\n  AND d_year = 1994\n  AND lo_discount BETWEEN 5 AND 7\n  AND lo_quantity BETWEEN 26 AND 35;\n    \n--Q2.1\nSELECT SUM(lo_revenue), d_year, p_brand\nFROM lineorder, dates, part, supplier\nWHERE\n    lo_orderdate = d_datekey\n  AND lo_partkey = p_partkey\n  AND lo_suppkey = s_suppkey\n  AND p_category = 'MFGR#12'\n  AND s_region = 'AMERICA'\nGROUP BY d_year, p_brand\nORDER BY p_brand;\n\n--Q2.2\nSELECT SUM(lo_revenue), d_year, p_brand\nFROM lineorder, dates, part, supplier\nWHERE\n    lo_orderdate = d_datekey\n  AND lo_partkey = p_partkey\n  AND lo_suppkey = s_suppkey\n  AND p_brand BETWEEN 'MFGR#2221' AND 'MFGR#2228'\n  AND s_region = 'ASIA'\nGROUP BY d_year, p_brand\nORDER BY d_year, p_brand;\n\n--Q2.3\nSELECT SUM(lo_revenue), d_year, p_brand\nFROM lineorder, dates, part, supplier\nWHERE\n    lo_orderdate = d_datekey\n  AND lo_partkey = p_partkey\n  AND lo_suppkey = s_suppkey\n  AND p_brand = 'MFGR#2239'\n  AND s_region = 'EUROPE'\nGROUP BY d_year, p_brand\nORDER BY d_year, p_brand;\n\n--Q3.1\nSELECT\n    c_nation,\n    s_nation,\n    d_year,\n    SUM(lo_revenue) AS REVENUE\nFROM customer, lineorder, supplier, dates\nWHERE\n    lo_custkey = c_custkey\n  AND lo_suppkey = s_suppkey\n  AND lo_orderdate = d_datekey\n  AND c_region = 'ASIA'\n  AND s_region = 'ASIA'\n  AND d_year >= 1992\n  AND d_year <= 1997\nGROUP BY c_nation, s_nation, d_year\nORDER BY d_year ASC, REVENUE DESC;\n\n--Q3.2\nSELECT\n    c_city,\n    s_city,\n    d_year,\n    SUM(lo_revenue) AS REVENUE\nFROM customer, lineorder, supplier, dates\nWHERE\n    lo_custkey = c_custkey\n  AND lo_suppkey = s_suppkey\n  AND lo_orderdate = d_datekey\n  AND c_nation = 'UNITED STATES'\n  AND s_nation = 'UNITED STATES'\n  AND d_year >= 1992\n  AND d_year <= 1997\nGROUP BY c_city, s_city, d_year\nORDER BY d_year ASC, REVENUE DESC;\n\n--Q3.3\nSELECT\n    c_city,\n    s_city,\n    d_year,\n    SUM(lo_revenue) AS REVENUE\nFROM customer, lineorder, supplier, dates\nWHERE\n    lo_custkey = c_custkey\n  AND lo_suppkey = s_suppkey\n  AND lo_orderdate = d_datekey\n  AND (\n            c_city = 'UNITED KI1'\n        OR c_city = 'UNITED KI5'\n    )\n  AND (\n            s_city = 'UNITED KI1'\n        OR s_city = 'UNITED KI5'\n    )\n  AND d_year >= 1992\n  AND d_year <= 1997\nGROUP BY c_city, s_city, d_year\nORDER BY d_year ASC, REVENUE DESC;\n\n--Q3.4\nSELECT\n    c_city,\n    s_city,\n    d_year,\n    SUM(lo_revenue) AS REVENUE\nFROM customer, lineorder, supplier, dates\nWHERE\n    lo_custkey = c_custkey\n  AND lo_suppkey = s_suppkey\n  AND lo_orderdate = d_datekey\n  AND (\n            c_city = 'UNITED KI1'\n        OR c_city = 'UNITED KI5'\n    )\n  AND (\n            s_city = 'UNITED KI1'\n        OR s_city = 'UNITED KI5'\n    )\n  AND d_yearmonth = 'Dec1997'\nGROUP BY c_city, s_city, d_year\nORDER BY d_year ASC, REVENUE DESC;\n\n--Q4.1\nSELECT\n    d_year,\n    c_nation,\n    SUM(lo_revenue - lo_supplycost) AS PROFIT\nFROM dates, customer, supplier, part, lineorder\nWHERE\n    lo_custkey = c_custkey\n  AND lo_suppkey = s_suppkey\n  AND lo_partkey = p_partkey\n  AND lo_orderdate = d_datekey\n  AND c_region = 'AMERICA'\n  AND s_region = 'AMERICA'\n  AND (\n            p_mfgr = 'MFGR#1'\n        OR p_mfgr = 'MFGR#2'\n    )\nGROUP BY d_year, c_nation\nORDER BY d_year, c_nation;\n\n--Q4.2\nSELECT\n    d_year,\n    s_nation,\n    p_category,\n    SUM(lo_revenue - lo_supplycost) AS PROFIT\nFROM dates, customer, supplier, part, lineorder\nWHERE\n    lo_custkey = c_custkey\n  AND lo_suppkey = s_suppkey\n  AND lo_partkey = p_partkey\n  AND lo_orderdate = d_datekey\n  AND c_region = 'AMERICA'\n  AND s_region = 'AMERICA'\n  AND (\n            d_year = 1997\n        OR d_year = 1998\n    )\n  AND (\n            p_mfgr = 'MFGR#1'\n        OR p_mfgr = 'MFGR#2'\n    )\nGROUP BY d_year, s_nation, p_category\nORDER BY d_year, s_nation, p_category;\n\n--Q4.3\nSELECT\n    d_year,\n    s_city,\n    p_brand,\n    SUM(lo_revenue - lo_supplycost) AS PROFIT\nFROM dates, customer, supplier, part, lineorder\nWHERE\n    lo_custkey = c_custkey\n  AND lo_suppkey = s_suppkey\n  AND lo_partkey = p_partkey\n  AND lo_orderdate = d_datekey\n  AND s_nation = 'UNITED STATES'\n  AND (\n            d_year = 1997\n        OR d_year = 1998\n    )\n  AND p_category = 'MFGR#14'\nGROUP BY d_year, s_city, p_brand\nORDER BY d_year, s_city, p_brand;\n\n"})})]})}function h(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return d}});var r=s(667294);let t={},l=r.createContext(t);function d(n){let e=r.useContext(l);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:d(n.components),r.createElement(l.Provider,{value:e},n.children)}}}]);