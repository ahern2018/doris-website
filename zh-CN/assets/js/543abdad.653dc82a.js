"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["91202"],{240530:function(n,e,t){t.r(e),t.d(e,{metadata:()=>r,contentTitle:()=>i,default:()=>p,assets:()=>a,toc:()=>c,frontMatter:()=>l});var r=JSON.parse('{"id":"benchmark/tpch","title":"TPC-H Benchmark","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/benchmark/tpch.md","sourceDirName":"benchmark","slug":"/benchmark/tpch","permalink":"/zh-CN/docs/benchmark/tpch","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"TPC-H Benchmark","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Star Schema Benchmark","permalink":"/zh-CN/docs/benchmark/ssb"},"next":{"title":"TPC-DS Benchmark","permalink":"/zh-CN/docs/benchmark/tpcds"}}'),s=t("785893"),d=t("250065");let l={title:"TPC-H Benchmark",language:"zh-CN"},i="TPC-H Benchmark",a={},c=[{value:"1. \u786C\u4EF6\u73AF\u5883",id:"1-\u786C\u4EF6\u73AF\u5883",level:2},{value:"2. \u8F6F\u4EF6\u73AF\u5883",id:"2-\u8F6F\u4EF6\u73AF\u5883",level:2},{value:"3. \u6D4B\u8BD5\u6570\u636E\u91CF",id:"3-\u6D4B\u8BD5\u6570\u636E\u91CF",level:2},{value:"4. \u6D4B\u8BD5 SQL",id:"4-\u6D4B\u8BD5-sql",level:2},{value:"5. \u6D4B\u8BD5\u7ED3\u679C",id:"5-\u6D4B\u8BD5\u7ED3\u679C",level:2},{value:"6. \u73AF\u5883\u51C6\u5907",id:"6-\u73AF\u5883\u51C6\u5907",level:2},{value:"7. \u6570\u636E\u51C6\u5907",id:"7-\u6570\u636E\u51C6\u5907",level:2},{value:"7.1 \u4E0B\u8F7D\u5B89\u88C5 TPC-H \u6570\u636E\u751F\u6210\u5DE5\u5177",id:"71-\u4E0B\u8F7D\u5B89\u88C5-tpc-h-\u6570\u636E\u751F\u6210\u5DE5\u5177",level:3},{value:"7.2 \u751F\u6210 TPC-H \u6D4B\u8BD5\u96C6",id:"72-\u751F\u6210-tpc-h-\u6D4B\u8BD5\u96C6",level:3},{value:"7.3 \u5EFA\u8868",id:"73-\u5EFA\u8868",level:3},{value:"7.3.1 \u51C6\u5907 <code>doris-cluster.conf</code> \u6587\u4EF6",id:"731-\u51C6\u5907-doris-clusterconf-\u6587\u4EF6",level:4},{value:"7.3.2 \u6267\u884C\u4EE5\u4E0B\u811A\u672C\u751F\u6210\u521B\u5EFA TPC-H \u8868",id:"732-\u6267\u884C\u4EE5\u4E0B\u811A\u672C\u751F\u6210\u521B\u5EFA-tpc-h-\u8868",level:4},{value:"7.4 \u5BFC\u5165\u6570\u636E",id:"74-\u5BFC\u5165\u6570\u636E",level:3},{value:"7.5 \u68C0\u67E5\u5BFC\u5165\u6570\u636E",id:"75-\u68C0\u67E5\u5BFC\u5165\u6570\u636E",level:3},{value:"7.6 \u67E5\u8BE2\u6D4B\u8BD5",id:"76-\u67E5\u8BE2\u6D4B\u8BD5",level:3},{value:"7.6.1 \u6267\u884C\u67E5\u8BE2\u811A\u672C",id:"761-\u6267\u884C\u67E5\u8BE2\u811A\u672C",level:3},{value:"7.6.2 \u5355\u4E2A SQL \u6267\u884C",id:"762-\u5355\u4E2A-sql-\u6267\u884C",level:3}];function o(n){let e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"tpc-h-benchmark",children:"TPC-H Benchmark"})}),"\n",(0,s.jsx)(e.p,{children:"TPC-H \u662F\u4E00\u4E2A\u51B3\u7B56\u652F\u6301\u57FA\u51C6\uFF08Decision Support Benchmark\uFF09\uFF0C\u5B83\u7531\u4E00\u5957\u9762\u5411\u4E1A\u52A1\u7684\u7279\u522B\u67E5\u8BE2\u548C\u5E76\u53D1\u6570\u636E\u4FEE\u6539\u7EC4\u6210\u3002\u67E5\u8BE2\u548C\u586B\u5145\u6570\u636E\u5E93\u7684\u6570\u636E\u5177\u6709\u5E7F\u6CDB\u7684\u884C\u4E1A\u76F8\u5173\u6027\u3002\u8FD9\u4E2A\u57FA\u51C6\u6D4B\u8BD5\u6F14\u793A\u4E86\u68C0\u67E5\u5927\u91CF\u6570\u636E\u3001\u6267\u884C\u9AD8\u5EA6\u590D\u6742\u7684\u67E5\u8BE2\u5E76\u56DE\u7B54\u5173\u952E\u4E1A\u52A1\u95EE\u9898\u7684\u51B3\u7B56\u652F\u6301\u7CFB\u7EDF\u3002TPC-H \u62A5\u544A\u7684\u6027\u80FD\u6307\u6807\u79F0\u4E3A TPC-H \u6BCF\u5C0F\u65F6\u590D\u5408\u67E5\u8BE2\u6027\u80FD\u6307\u6807 (QphH@Size)\uFF0C\u53CD\u6620\u4E86\u7CFB\u7EDF\u5904\u7406\u67E5\u8BE2\u80FD\u529B\u7684\u591A\u4E2A\u65B9\u9762\u3002\u8FD9\u4E9B\u65B9\u9762\u5305\u62EC\u6267\u884C\u67E5\u8BE2\u65F6\u6240\u9009\u62E9\u7684\u6570\u636E\u5E93\u5927\u5C0F\uFF0C\u7531\u5355\u4E2A\u6D41\u63D0\u4EA4\u67E5\u8BE2\u65F6\u7684\u67E5\u8BE2\u5904\u7406\u80FD\u529B\uFF0C\u4EE5\u53CA\u7531\u591A\u4E2A\u5E76\u53D1\u7528\u6237\u63D0\u4EA4\u67E5\u8BE2\u65F6\u7684\u67E5\u8BE2\u541E\u5410\u91CF\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u672C\u6587\u6863\u4E3B\u8981\u4ECB\u7ECD Doris \u5728 TPC-H 1000G \u6D4B\u8BD5\u96C6\u4E0A\u7684\u6027\u80FD\u8868\u73B0\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5728 TPC-H \u6807\u51C6\u6D4B\u8BD5\u6570\u636E\u96C6\u4E0A\u7684 22 \u4E2A\u67E5\u8BE2\u4E0A\uFF0C\u6211\u4EEC\u57FA\u4E8E Apache Doris 2.1.7-rc03 \u548C Apache Doris 2.0.15.1 \u7248\u672C\u8FDB\u884C\u4E86\u5BF9\u6BD4\u6D4B\u8BD5\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"TPCDS_1000G",src:t(701257).Z+"",width:"2716",height:"966"})}),"\n",(0,s.jsx)(e.h2,{id:"1-\u786C\u4EF6\u73AF\u5883",children:"1. \u786C\u4EF6\u73AF\u5883"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u786C\u4EF6"}),(0,s.jsx)(e.th,{children:"\u914D\u7F6E\u8BF4\u660E"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u673A\u5668\u6570\u91CF"}),(0,s.jsx)(e.td,{children:"4 \u53F0\u963F\u91CC\u4E91\u4E3B\u673A\uFF081 \u4E2A FE\uFF0C3 \u4E2A BE\uFF09"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"CPU"}),(0,s.jsx)(e.td,{children:"Intel Xeon (Ice Lake) Platinum 8369B 32 \u6838"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u5185\u5B58"}),(0,s.jsx)(e.td,{children:"128G"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u78C1\u76D8"}),(0,s.jsx)(e.td,{children:"\u963F\u91CC\u4E91 ESSD (PL0)"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"2-\u8F6F\u4EF6\u73AF\u5883",children:"2. \u8F6F\u4EF6\u73AF\u5883"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Doris \u90E8\u7F72 3BE 1FE"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u6838\u7248\u672C\uFF1ALinux version 5.15.0-101-generic"}),"\n",(0,s.jsx)(e.li,{children:"\u64CD\u4F5C\u7CFB\u7EDF\u7248\u672C\uFF1AUbuntu 20.04 LTS (Focal Fossa)"}),"\n",(0,s.jsx)(e.li,{children:"Doris \u8F6F\u4EF6\u7248\u672C\uFF1AApache Doris 2.1.7-rc03\u3001Apache Doris 2.0.15.1"}),"\n",(0,s.jsx)(e.li,{children:'JDK\uFF1Aopenjdk version "1.8.0_352-352"'}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"3-\u6D4B\u8BD5\u6570\u636E\u91CF",children:"3. \u6D4B\u8BD5\u6570\u636E\u91CF"}),"\n",(0,s.jsx)(e.p,{children:"\u6574\u4E2A\u6D4B\u8BD5\u6A21\u62DF\u751F\u6210 TPC-H 1000G \u7684\u6570\u636E\u5206\u522B\u5BFC\u5165\u5230 Apache Doris 2.1.7-rc03 \u548C Apache Doris 2.0.15.1 \u7248\u672C\u8FDB\u884C\u6D4B\u8BD5\uFF0C\u4E0B\u9762\u662F\u8868\u7684\u76F8\u5173\u8BF4\u660E\u53CA\u6570\u636E\u91CF\u3002"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"TPC-H \u8868\u540D"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u884C\u6570"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u5907\u6CE8"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"REGION"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"5"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u533A\u57DF\u8868"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"NATION"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"25"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u56FD\u5BB6\u8868"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"SUPPLIER"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"1000 \u4E07"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u4F9B\u5E94\u5546\u8868"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"PART"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"2 \u4EBF"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u96F6\u90E8\u4EF6\u8868"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"PARTSUPP"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"8 \u4EBF"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u96F6\u90E8\u4EF6\u4F9B\u5E94\u8868"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"CUSTOMER"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"1.5 \u4EBF"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u5BA2\u6237\u8868"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"ORDERS"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"15 \u4EBF"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u8BA2\u5355\u8868"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"LINEITEM"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"60 \u4EBF"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u8BA2\u5355\u660E\u7EC6\u8868"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"4-\u6D4B\u8BD5-sql",children:"4. \u6D4B\u8BD5 SQL"}),"\n",(0,s.jsxs)(e.p,{children:["TPC-H 22 \u4E2A\u6D4B\u8BD5\u67E5\u8BE2\u8BED\u53E5\uFF1A ",(0,s.jsx)(e.a,{href:"https://github.com/apache/doris/tree/master/tools/tpch-tools/queries",children:"TPCH-Query-SQL"})]}),"\n",(0,s.jsx)(e.h2,{id:"5-\u6D4B\u8BD5\u7ED3\u679C",children:"5. \u6D4B\u8BD5\u7ED3\u679C"}),"\n",(0,s.jsx)(e.p,{children:"\u8FD9\u91CC\u6211\u4EEC\u4F7F\u7528 Apache Doris 2.1.7-rc03 \u548C Apache Doris 2.0.15.1 \u7248\u672C\u8FDB\u884C\u5BF9\u6BD4\u6D4B\u8BD5\uFF0C\u6D4B\u8BD5\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Query"}),(0,s.jsx)(e.th,{children:"Apache Doris 2.1.7-rc03 (ms)"}),(0,s.jsx)(e.th,{children:"Apache Doris 2.0.15.1-rc01 (ms)"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Q1"}),(0,s.jsx)(e.td,{children:"11880"}),(0,s.jsx)(e.td,{children:"12270"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Q2"}),(0,s.jsx)(e.td,{children:"280"}),(0,s.jsx)(e.td,{children:"290"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Q3"}),(0,s.jsx)(e.td,{children:"3890"}),(0,s.jsx)(e.td,{children:"4610"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Q4"}),(0,s.jsx)(e.td,{children:"2570"}),(0,s.jsx)(e.td,{children:"3040"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Q5"}),(0,s.jsx)(e.td,{children:"6630"}),(0,s.jsx)(e.td,{children:"8450"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Q6"}),(0,s.jsx)(e.td,{children:"170"}),(0,s.jsx)(e.td,{children:"180"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Q7"}),(0,s.jsx)(e.td,{children:"2420"}),(0,s.jsx)(e.td,{children:"4870"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Q8"}),(0,s.jsx)(e.td,{children:"3730"}),(0,s.jsx)(e.td,{children:"3850"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Q9"}),(0,s.jsx)(e.td,{children:"15910"}),(0,s.jsx)(e.td,{children:"25860"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Q10"}),(0,s.jsx)(e.td,{children:"7880"}),(0,s.jsx)(e.td,{children:"8650"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Q11"}),(0,s.jsx)(e.td,{children:"560"}),(0,s.jsx)(e.td,{children:"490"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Q12"}),(0,s.jsx)(e.td,{children:"500"}),(0,s.jsx)(e.td,{children:"660"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Q13"}),(0,s.jsx)(e.td,{children:"9540"}),(0,s.jsx)(e.td,{children:"9920"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Q14"}),(0,s.jsx)(e.td,{children:"590"}),(0,s.jsx)(e.td,{children:"740"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Q15"}),(0,s.jsx)(e.td,{children:"1170"}),(0,s.jsx)(e.td,{children:"1150"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Q16"}),(0,s.jsx)(e.td,{children:"910"}),(0,s.jsx)(e.td,{children:"1520"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Q17"}),(0,s.jsx)(e.td,{children:"1920"}),(0,s.jsx)(e.td,{children:"1770"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Q18"}),(0,s.jsx)(e.td,{children:"17700"}),(0,s.jsx)(e.td,{children:"18760"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Q19"}),(0,s.jsx)(e.td,{children:"2370"}),(0,s.jsx)(e.td,{children:"3240"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Q20"}),(0,s.jsx)(e.td,{children:"560"}),(0,s.jsx)(e.td,{children:"830"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Q21"}),(0,s.jsx)(e.td,{children:"9150"}),(0,s.jsx)(e.td,{children:"10150"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Q22"}),(0,s.jsx)(e.td,{children:"1130"}),(0,s.jsx)(e.td,{children:"1390"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"Total"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"101460"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"122690"})})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"6-\u73AF\u5883\u51C6\u5907",children:"6. \u73AF\u5883\u51C6\u5907"}),"\n",(0,s.jsxs)(e.p,{children:["\u8BF7\u5148\u53C2\u7167 ",(0,s.jsx)(e.a,{href:"../install/cluster-deployment/standard-deployment",children:"\u5B98\u65B9\u6587\u6863"})," \u8FDB\u884C Doris \u7684\u5B89\u88C5\u90E8\u7F72\uFF0C\u4EE5\u83B7\u5F97\u4E00\u4E2A\u6B63\u5E38\u8FD0\u884C\u4E2D\u7684 Doris \u96C6\u7FA4\uFF08\u81F3\u5C11\u5305\u542B 1 FE 1 BE\uFF0C\u63A8\u8350 1 FE 3 BE\uFF09\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"7-\u6570\u636E\u51C6\u5907",children:"7. \u6570\u636E\u51C6\u5907"}),"\n",(0,s.jsx)(e.h3,{id:"71-\u4E0B\u8F7D\u5B89\u88C5-tpc-h-\u6570\u636E\u751F\u6210\u5DE5\u5177",children:"7.1 \u4E0B\u8F7D\u5B89\u88C5 TPC-H \u6570\u636E\u751F\u6210\u5DE5\u5177"}),"\n",(0,s.jsxs)(e.p,{children:["\u6267\u884C\u4EE5\u4E0B\u811A\u672C\u4E0B\u8F7D\u5E76\u7F16\u8BD1  ",(0,s.jsx)(e.a,{href:"https://github.com/apache/doris/tree/master/tools/tpch-tools",children:"tpch-tools"}),"  \u5DE5\u5177\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"sh bin/build-tpch-dbgen.sh\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5B89\u88C5\u6210\u529F\u540E\uFF0C\u5C06\u5728 ",(0,s.jsx)(e.code,{children:"TPC-H_Tools_v3.0.0/"})," \u76EE\u5F55\u4E0B\u751F\u6210 ",(0,s.jsx)(e.code,{children:"dbgen"})," \u4E8C\u8FDB\u5236\u6587\u4EF6\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"72-\u751F\u6210-tpc-h-\u6D4B\u8BD5\u96C6",children:"7.2 \u751F\u6210 TPC-H \u6D4B\u8BD5\u96C6"}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884C\u4EE5\u4E0B\u811A\u672C\u751F\u6210 TPC-H \u6570\u636E\u96C6\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"sh bin/gen-tpch-data.sh -s 1000\n"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u6CE8 1\uFF1A\u901A\u8FC7 ",(0,s.jsx)(e.code,{children:"sh gen-tpch-data.sh -h"})," \u67E5\u770B\u811A\u672C\u5E2E\u52A9\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u6CE8 2\uFF1A\u6570\u636E\u4F1A\u4EE5 ",(0,s.jsx)(e.code,{children:".tbl"})," \u4E3A\u540E\u7F00\u751F\u6210\u5728  ",(0,s.jsx)(e.code,{children:"tpch-data/"})," \u76EE\u5F55\u4E0B\u3002\u6587\u4EF6\u603B\u5927\u5C0F\u7EA6 1000GB\u3002\u751F\u6210\u65F6\u95F4\u53EF\u80FD\u5728\u6570\u5206\u949F\u5230 1 \u5C0F\u65F6\u4E0D\u7B49\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u6CE8 3\uFF1A\u9ED8\u8BA4\u751F\u6210 100G \u7684\u6807\u51C6\u6D4B\u8BD5\u6570\u636E\u96C6"}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"73-\u5EFA\u8868",children:"7.3 \u5EFA\u8868"}),"\n",(0,s.jsxs)(e.h4,{id:"731-\u51C6\u5907-doris-clusterconf-\u6587\u4EF6",children:["7.3.1 \u51C6\u5907 ",(0,s.jsx)(e.code,{children:"doris-cluster.conf"})," \u6587\u4EF6"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5728\u8C03\u7528\u5BFC\u5165\u811A\u672C\u524D\uFF0C\u9700\u8981\u5C06 FE \u7684 ip \u7AEF\u53E3\u7B49\u4FE1\u606F\u5199\u5728 ",(0,s.jsx)(e.code,{children:"doris-cluster.conf"})," \u6587\u4EF6\u4E2D\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u6587\u4EF6\u4F4D\u7F6E\u5728 ",(0,s.jsx)(e.code,{children:"${DORIS_HOME}/tools/tpch-tools/conf/"})," \u76EE\u5F55\u4E0B\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u6587\u4EF6\u5185\u5BB9\u5305\u62EC FE \u7684 ip\uFF0CHTTP \u7AEF\u53E3\uFF0C\u7528\u6237\u540D\uFF0C\u5BC6\u7801\u4EE5\u53CA\u5F85\u5BFC\u5165\u6570\u636E\u7684 DB \u540D\u79F0\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"# Any of FE host\nexport FE_HOST='127.0.0.1'\n# http_port in fe.conf\nexport FE_HTTP_PORT=8030\n# query_port in fe.conf\nexport FE_QUERY_PORT=9030\n# Doris username\nexport USER='root'\n# Doris password\nexport PASSWORD=''\n# The database where TPC-H tables located\nexport DB='tpch'\n"})}),"\n",(0,s.jsx)(e.h4,{id:"732-\u6267\u884C\u4EE5\u4E0B\u811A\u672C\u751F\u6210\u521B\u5EFA-tpc-h-\u8868",children:"7.3.2 \u6267\u884C\u4EE5\u4E0B\u811A\u672C\u751F\u6210\u521B\u5EFA TPC-H \u8868"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"sh bin/create-tpch-tables.sh -s 1000\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u6216\u8005\u590D\u5236 ",(0,s.jsx)(e.a,{href:"https://github.com/apache/doris/blob/master/tools/tpch-tools/ddl/create-tpch-tables-sf1000.sql",children:"create-tpch-tables.sql"})," \u4E2D\u7684\u5EFA\u8868\u8BED\u53E5\uFF0C\u5728 Doris \u4E2D\u6267\u884C\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"74-\u5BFC\u5165\u6570\u636E",children:"7.4 \u5BFC\u5165\u6570\u636E"}),"\n",(0,s.jsx)(e.p,{children:"\u901A\u8FC7\u4E0B\u9762\u7684\u547D\u4EE4\u6267\u884C\u6570\u636E\u5BFC\u5165\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"sh bin/load-tpch-data.sh\n"})}),"\n",(0,s.jsx)(e.h3,{id:"75-\u68C0\u67E5\u5BFC\u5165\u6570\u636E",children:"7.5 \u68C0\u67E5\u5BFC\u5165\u6570\u636E"}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884C\u4E0B\u9762\u7684 SQL \u8BED\u53E5\u68C0\u67E5\u5BFC\u5165\u7684\u6570\u636E\u4E0E\u4E0A\u9762\u7684\u6570\u636E\u91CF\u4E00\u81F4\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"select count(*)  from  lineitem;\nselect count(*)  from  orders;\nselect count(*)  from  partsupp;\nselect count(*)  from  part;\nselect count(*)  from  customer;\nselect count(*)  from  supplier;\nselect count(*)  from  nation;\nselect count(*)  from  region;\nselect count(*)  from  revenue0;\n"})}),"\n",(0,s.jsx)(e.h3,{id:"76-\u67E5\u8BE2\u6D4B\u8BD5",children:"7.6 \u67E5\u8BE2\u6D4B\u8BD5"}),"\n",(0,s.jsx)(e.h3,{id:"761-\u6267\u884C\u67E5\u8BE2\u811A\u672C",children:"7.6.1 \u6267\u884C\u67E5\u8BE2\u811A\u672C"}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884C\u4E0A\u9762\u7684\u6D4B\u8BD5 SQL \u6216\u8005 \u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"sh bin/run-tpch-queries.sh -s 1000\n"})}),"\n",(0,s.jsx)(e.h3,{id:"762-\u5355\u4E2A-sql-\u6267\u884C",children:"7.6.2 \u5355\u4E2A SQL \u6267\u884C"}),"\n",(0,s.jsxs)(e.p,{children:["\u4E0B\u9762\u662F\u6D4B\u8BD5\u65F6\u4F7F\u7528\u7684 SQL \u8BED\u53E5\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u4ECE\u4EE3\u7801\u5E93\u91CC\u83B7\u53D6\u6700\u65B0\u7684 SQL\u3002\u6700\u65B0\u6D4B\u8BD5\u67E5\u8BE2\u8BED\u53E5\u5730\u5740\uFF1A",(0,s.jsx)(e.a,{href:"https://github.com/apache/doris/tree/master/tools/tpch-tools/queries",children:"TPC-H \u6D4B\u8BD5\u67E5\u8BE2\u8BED\u53E5"})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"--Q1\nselect\n    l_returnflag,\n    l_linestatus,\n    sum(l_quantity) as sum_qty,\n    sum(l_extendedprice) as sum_base_price,\n    sum(l_extendedprice * (1 - l_discount)) as sum_disc_price,\n    sum(l_extendedprice * (1 - l_discount) * (1 + l_tax)) as sum_charge,\n    avg(l_quantity) as avg_qty,\n    avg(l_extendedprice) as avg_price,\n    avg(l_discount) as avg_disc,\n    count(*) as count_order\nfrom\n    lineitem\nwhere\n    l_shipdate <= date '1998-12-01' - interval '90' day\ngroup by\n    l_returnflag,\n    l_linestatus\norder by\n    l_returnflag,\n    l_linestatus;\n\n--Q2\nselect\n    s_acctbal,\n    s_name,\n    n_name,\n    p_partkey,\n    p_mfgr,\n    s_address,\n    s_phone,\n    s_comment\nfrom\n    part,\n    supplier,\n    partsupp,\n    nation,\n    region\nwhere\n    p_partkey = ps_partkey\n    and s_suppkey = ps_suppkey\n    and p_size = 15\n    and p_type like '%BRASS'\n    and s_nationkey = n_nationkey\n    and n_regionkey = r_regionkey\n    and r_name = 'EUROPE'\n    and ps_supplycost = (\n        select\n            min(ps_supplycost)\n        from\n            partsupp,\n            supplier,\n            nation,\n            region\n        where\n        p_partkey = ps_partkey\n        and s_suppkey = ps_suppkey\n        and s_nationkey = n_nationkey\n        and n_regionkey = r_regionkey\n        and r_name = 'EUROPE'\n)\norder by\n    s_acctbal desc,\n    n_name,\n    s_name,\n    p_partkey\nlimit 100;\n\n--Q3\nselect\n    l_orderkey,\n    sum(l_extendedprice * (1 - l_discount)) as revenue,\n    o_orderdate,\n    o_shippriority\nfrom\n    customer,\n    orders,\n    lineitem\nwhere\n    c_mktsegment = 'BUILDING'\n    and c_custkey = o_custkey\n    and l_orderkey = o_orderkey\n    and o_orderdate < date '1995-03-15'\n    and l_shipdate > date '1995-03-15'\ngroup by\n    l_orderkey,\n    o_orderdate,\n    o_shippriority\norder by\n    revenue desc,\n    o_orderdate\nlimit 10;\n\n--Q4\nselect\n    o_orderpriority,\n    count(*) as order_count\nfrom\n    orders\nwhere\n    o_orderdate >= date '1993-07-01'\n    and o_orderdate < date '1993-07-01' + interval '3' month\n    and exists (\n        select\n            *\n        from\n            lineitem\n        where\n                l_orderkey = o_orderkey\n          and l_commitdate < l_receiptdate\n    )\ngroup by\n    o_orderpriority\norder by\n    o_orderpriority;\n\n--Q5\nselect\n    n_name,\n    sum(l_extendedprice * (1 - l_discount)) as revenue\nfrom\n    customer,\n    orders,\n    lineitem,\n    supplier,\n    nation,\n    region\nwhere\n    c_custkey = o_custkey\n    and l_orderkey = o_orderkey\n    and l_suppkey = s_suppkey\n    and c_nationkey = s_nationkey\n    and s_nationkey = n_nationkey\n    and n_regionkey = r_regionkey\n    and r_name = 'ASIA'\n    and o_orderdate >= date '1994-01-01'\n    and o_orderdate < date '1994-01-01' + interval '1' year\ngroup by\n    n_name\norder by\n    revenue desc;\n\n--Q6\nselect\n    sum(l_extendedprice * l_discount) as revenue\nfrom\n    lineitem\nwhere\n    l_shipdate >= date '1994-01-01'\n    and l_shipdate < date '1994-01-01' + interval '1' year\n    and l_discount between .06 - 0.01 and .06 + 0.01\n    and l_quantity < 24;\n\n--Q7\nselect\n    supp_nation,\n    cust_nation,\n    l_year,\n    sum(volume) as revenue\nfrom\n    (\n        select\n            n1.n_name as supp_nation,\n            n2.n_name as cust_nation,\n            extract(year from l_shipdate) as l_year,\n            l_extendedprice * (1 - l_discount) as volume\n        from\n            supplier,\n            lineitem,\n            orders,\n            customer,\n            nation n1,\n            nation n2\n        where\n            s_suppkey = l_suppkey\n            and o_orderkey = l_orderkey\n            and c_custkey = o_custkey\n            and s_nationkey = n1.n_nationkey\n            and c_nationkey = n2.n_nationkey\n            and (\n                (n1.n_name = 'FRANCE' and n2.n_name = 'GERMANY')\n                or (n1.n_name = 'GERMANY' and n2.n_name = 'FRANCE')\n            )\n            and l_shipdate between date '1995-01-01' and date '1996-12-31'\n    ) as shipping\ngroup by\n    supp_nation,\n    cust_nation,\n    l_year\norder by\n    supp_nation,\n    cust_nation,\n    l_year;\n\n--Q8\n\nselect\n    o_year,\n    sum(case\n        when nation = 'BRAZIL' then volume\n        else 0\n    end) / sum(volume) as mkt_share\nfrom\n    (\n        select\n            extract(year from o_orderdate) as o_year,\n            l_extendedprice * (1 - l_discount) as volume,\n            n2.n_name as nation\n        from\n            part,\n            supplier,\n            lineitem,\n            orders,\n            customer,\n            nation n1,\n            nation n2,\n            region\n        where\n            p_partkey = l_partkey\n            and s_suppkey = l_suppkey\n            and l_orderkey = o_orderkey\n            and o_custkey = c_custkey\n            and c_nationkey = n1.n_nationkey\n            and n1.n_regionkey = r_regionkey\n            and r_name = 'AMERICA'\n            and s_nationkey = n2.n_nationkey\n            and o_orderdate between date '1995-01-01' and date '1996-12-31'\n            and p_type = 'ECONOMY ANODIZED STEEL'\n    ) as all_nations\ngroup by\n    o_year\norder by\n    o_year;\n\n--Q9\nselect\n    nation,\n    o_year,\n    sum(amount) as sum_profit\nfrom\n    (\n        select\n            n_name as nation,\n            extract(year from o_orderdate) as o_year,\n            l_extendedprice * (1 - l_discount) - ps_supplycost * l_quantity as amount\n        from\n            part,\n            supplier,\n            lineitem,\n            partsupp,\n            orders,\n            nation\n        where\n            s_suppkey = l_suppkey\n            and ps_suppkey = l_suppkey\n            and ps_partkey = l_partkey\n            and p_partkey = l_partkey\n            and o_orderkey = l_orderkey\n            and s_nationkey = n_nationkey\n            and p_name like '%green%'\n    ) as profit\ngroup by\n    nation,\n    o_year\norder by\n    nation,\n    o_year desc;\n\n--Q10\nselect\n    c_custkey,\n    c_name,\n    sum(l_extendedprice * (1 - l_discount)) as revenue,\n    c_acctbal,\n    n_name,\n    c_address,\n    c_phone,\n    c_comment\nfrom\n    customer,\n    orders,\n    lineitem,\n    nation\nwhere\n    c_custkey = o_custkey\n    and l_orderkey = o_orderkey\n    and o_orderdate >= date '1993-10-01'\n    and o_orderdate < date '1993-10-01' + interval '3' month\n    and l_returnflag = 'R'\n    and c_nationkey = n_nationkey\ngroup by\n    c_custkey,\n    c_name,\n    c_acctbal,\n    c_phone,\n    n_name,\n    c_address,\n    c_comment\norder by\n    revenue desc\nlimit 20;\n\n\n--Q11\nselect\n    ps_partkey,\n    sum(ps_supplycost * ps_availqty) as value\nfrom\n    partsupp,\n    supplier,\n    nation\nwhere\n    ps_suppkey = s_suppkey\n    and s_nationkey = n_nationkey\n    and n_name = 'GERMANY'\ngroup by\n    ps_partkey having\n    sum(ps_supplycost * ps_availqty) > (\n        select\n        sum(ps_supplycost * ps_availqty) * 0.000002\n        from\n            partsupp,\n            supplier,\n            nation\n        where\n            ps_suppkey = s_suppkey\n            and s_nationkey = n_nationkey\n            and n_name = 'GERMANY'\n    )\norder by\n    value desc;\n\n--Q12\nselect\n    l_shipmode,\n    sum(case\n        when o_orderpriority = '1-URGENT'\n            or o_orderpriority = '2-HIGH'\n            then 1\n        else 0\n    end) as high_line_count,\n    sum(case\n        when o_orderpriority <> '1-URGENT'\n            and o_orderpriority <> '2-HIGH'\n            then 1\n        else 0\n    end) as low_line_count\nfrom\n    orders,\n    lineitem\nwhere\n    o_orderkey = l_orderkey\n    and l_shipmode in ('MAIL', 'SHIP')\n    and l_commitdate < l_receiptdate\n    and l_shipdate < l_commitdate\n    and l_receiptdate >= date '1994-01-01'\n    and l_receiptdate < date '1994-01-01' + interval '1' year\ngroup by\n    l_shipmode\norder by\n    l_shipmode;\n\n--Q13\nselect\n    c_count,\n    count(*) as custdist\nfrom\n    (\n        select\n            c_custkey,\n            count(o_orderkey) as c_count\n        from\n            customer left outer join orders on\n                c_custkey = o_custkey\n                and o_comment not like '%special%requests%'\n        group by\n            c_custkey\n    ) as c_orders\ngroup by\n    c_count\norder by\n    custdist desc,\n    c_count desc;\n\n--Q14\nselect\n    100.00 * sum(case\n        when p_type like 'PROMO%'\n            then l_extendedprice * (1 - l_discount)\n        else 0\n    end) / sum(l_extendedprice * (1 - l_discount)) as promo_revenue\nfrom\n    lineitem,\n    part\nwhere\n    l_partkey = p_partkey\n    and l_shipdate >= date '1995-09-01'\n    and l_shipdate < date '1995-09-01' + interval '1' month;\n\n--Q15\nselect\n    s_suppkey,\n    s_name,\n    s_address,\n    s_phone,\n    total_revenue\nfrom\n    supplier,\n    revenue0\nwhere\n    s_suppkey = supplier_no\n    and total_revenue = (\n        select\n            max(total_revenue)\n        from\n            revenue0\n    )\norder by\n    s_suppkey;\n\n--Q16\nselect\n    p_brand,\n    p_type,\n    p_size,\n    count(distinct ps_suppkey) as supplier_cnt\nfrom\n    partsupp,\n    part\nwhere\n    p_partkey = ps_partkey\n    and p_brand <> 'Brand#45'\n    and p_type not like 'MEDIUM POLISHED%'\n    and p_size in (49, 14, 23, 45, 19, 3, 36, 9)\n    and ps_suppkey not in (\n        select\n            s_suppkey\n        from\n            supplier\n        where\n            s_comment like '%Customer%Complaints%'\n    )\ngroup by\n    p_brand,\n    p_type,\n    p_size\norder by\n    supplier_cnt desc,\n    p_brand,\n    p_type,\n    p_size;\n\n--Q17\nselect\n    sum(l_extendedprice) / 7.0 as avg_yearly\nfrom\n    lineitem,\n    part\nwhere\n    p_partkey = l_partkey\n    and p_brand = 'Brand#23'\n    and p_container = 'MED BOX'\n    and l_quantity < (\n        select\n            0.2 * avg(l_quantity)\n        from\n            lineitem\n        where\n            l_partkey = p_partkey\n    );\n\n--Q18\nselect\n    c_name,\n    c_custkey,\n    o_orderkey,\n    o_orderdate,\n    o_totalprice,\n    sum(l_quantity)\nfrom\n    customer,\n    orders,\n    lineitem\nwhere\n    o_orderkey  in  (\n        select\n            l_orderkey\n        from\n            lineitem\n        group  by\n            l_orderkey  having\n                sum(l_quantity)  >  300\n    )\n    and  c_custkey  =  o_custkey\n    and  o_orderkey  =  l_orderkey\ngroup  by\n    c_name,\n    c_custkey,\n    o_orderkey,\n    o_orderdate,\n    o_totalprice\norder  by\n    o_totalprice  desc,\n    o_orderdate\nlimit  100;\n\n\n--Q19\nselect\n    sum(l_extendedprice* (1 - l_discount)) as revenue\nfrom\n    lineitem,\n    part\nwhere\n    (\n        p_partkey = l_partkey\n        and p_brand = 'Brand#12'\n        and p_container in ('SM CASE', 'SM BOX', 'SM PACK', 'SM PKG')\n        and l_quantity >= 1 and l_quantity <= 1 + 10\n        and p_size between 1 and 5\n        and l_shipmode in ('AIR', 'AIR REG')\n        and l_shipinstruct = 'DELIVER IN PERSON'\n    )\n    or\n    (\n        p_partkey = l_partkey\n        and p_brand = 'Brand#23'\n        and p_container in ('MED BAG', 'MED BOX', 'MED PKG', 'MED PACK')\n        and l_quantity >= 10 and l_quantity <= 10 + 10\n        and p_size between 1 and 10\n        and l_shipmode in ('AIR', 'AIR REG')\n        and l_shipinstruct = 'DELIVER IN PERSON'\n    )\n    or\n    (\n        p_partkey = l_partkey\n        and p_brand = 'Brand#34'\n        and p_container in ('LG CASE', 'LG BOX', 'LG PACK', 'LG PKG')\n        and l_quantity >= 20 and l_quantity <= 20 + 10\n        and p_size between 1 and 15\n        and l_shipmode in ('AIR', 'AIR REG')\n        and l_shipinstruct = 'DELIVER IN PERSON'\n    );\n\n--Q20\nselect\n    s_name,\n    s_address\nfrom\n    supplier,\n    nation\nwhere\n    s_suppkey in (\n        select\n            ps_suppkey\n        from\n            partsupp\n        where\n            ps_partkey in (\n                select\n                    p_partkey\n                from\n                    part\n                where\n                        p_name like 'forest%'\n            )\n            and ps_availqty > (\n                select\n                    0.5 * sum(l_quantity)\n                from\n                    lineitem\n                where\n                    l_partkey = ps_partkey\n                    and l_suppkey = ps_suppkey\n                    and l_shipdate >= date '1994-01-01'\n                    and l_shipdate < date '1994-01-01' + interval '1' year\n            )\n    )\n    and s_nationkey = n_nationkey\n    and n_name = 'CANADA'\norder by\n    s_name;\n\n--Q21\nselect\n    s_name,\n    count(*) as numwait\nfrom\n    supplier,\n    lineitem l1,\n    orders,\n    nation\nwhere\n    s_suppkey = l1.l_suppkey\n    and o_orderkey = l1.l_orderkey\n    and o_orderstatus = 'F'\n    and l1.l_receiptdate > l1.l_commitdate\n    and exists (\n        select\n            *\n        from\n            lineitem l2\n        where\n                l2.l_orderkey = l1.l_orderkey\n          and l2.l_suppkey <> l1.l_suppkey\n    )\n    and not exists (\n        select\n            *\n        from\n            lineitem l3\n        where\n                l3.l_orderkey = l1.l_orderkey\n          and l3.l_suppkey <> l1.l_suppkey\n          and l3.l_receiptdate > l3.l_commitdate\n    )\n    and s_nationkey = n_nationkey\n    and n_name = 'SAUDI ARABIA'\ngroup by\n    s_name\norder by\n    numwait desc,\n    s_name\nlimit 100;\n\n--Q22\nselect\n    cntrycode,\n    count(*) as numcust,\n    sum(c_acctbal) as totacctbal\nfrom\n    (\n        select\n            substring(c_phone, 1, 2) as cntrycode,\n            c_acctbal\n        from\n            customer\n        where\n            substring(c_phone, 1, 2) in\n            ('13', '31', '23', '29', '30', '18', '17')\n            and c_acctbal > (\n                select\n                    avg(c_acctbal)\n                from\n                    customer\n                where\n                    c_acctbal > 0.00\n                    and substring(c_phone, 1, 2) in\n                      ('13', '31', '23', '29', '30', '18', '17')\n            )\n            and not exists (\n                select\n                    *\n                from\n                    orders\n                where\n                    o_custkey = c_custkey\n            )\n    ) as custsale\ngroup by\n    cntrycode\norder by\n    cntrycode;\n\n"})})]})}function p(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},701257:function(n,e,t){t.d(e,{Z:function(){return r}});let r=t.p+"assets/images/tpch_2.1-0d40033aa8ff637163ac1f8bcb2f3626.png"},250065:function(n,e,t){t.d(e,{Z:function(){return i},a:function(){return l}});var r=t(667294);let s={},d=r.createContext(s);function l(n){let e=r.useContext(d);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),r.createElement(d.Provider,{value:e},n.children)}}}]);