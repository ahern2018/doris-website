"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["491029"],{444076:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>h,assets:()=>d,toc:()=>o,frontMatter:()=>l});var t=JSON.parse('{"id":"data-operate/import/load-manual","title":"\u5BFC\u5165\u6982\u89C8","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/data-operate/import/load-manual.md","sourceDirName":"data-operate/import","slug":"/data-operate/import/load-manual","permalink":"/zh-CN/docs/3.0/data-operate/import/load-manual","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"\u5BFC\u5165\u6982\u89C8","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u6570\u636E\u5E93\u5EFA\u8868\u6700\u4F73\u5B9E\u8DF5","permalink":"/zh-CN/docs/3.0/table-design/best-practice"},"next":{"title":"\u672C\u5730\u6587\u4EF6","permalink":"/zh-CN/docs/3.0/data-operate/import/data-source/local-file"}}'),s=r("785893"),i=r("250065");let l={title:"\u5BFC\u5165\u6982\u89C8",language:"zh-CN"},a=void 0,d={},o=[{value:"\u5BFC\u5165\u65B9\u5F0F\u5FEB\u901F\u6D4F\u89C8",id:"\u5BFC\u5165\u65B9\u5F0F\u5FEB\u901F\u6D4F\u89C8",level:2}];function c(e){let n={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Apache Doris \u63D0\u4F9B\u4E86\u591A\u79CD\u5BFC\u5165\u548C\u96C6\u6210\u6570\u636E\u7684\u65B9\u6CD5\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528\u5408\u9002\u7684\u5BFC\u5165\u65B9\u5F0F\u4ECE\u5404\u79CD\u6E90\u5C06\u6570\u636E\u5BFC\u5165\u5230\u6570\u636E\u5E93\u4E2D\u3002Apache Doris \u63D0\u4F9B\u7684\u6570\u636E\u5BFC\u5165\u65B9\u5F0F\u53EF\u4EE5\u5206\u4E3A\u56DB\u7C7B\uFF1A"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u5B9E\u65F6\u5199\u5165"}),"\uFF1A\u5E94\u7528\u7A0B\u5E8F\u901A\u8FC7 HTTP \u6216\u8005 JDBC \u5B9E\u65F6\u5199\u5165\u6570\u636E\u5230 Doris \u8868\u4E2D\uFF0C\u9002\u7528\u4E8E\u9700\u8981\u5B9E\u65F6\u5206\u6790\u548C\u67E5\u8BE2\u7684\u573A\u666F\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u6781\u5C11\u91CF\u6570\u636E\uFF085 \u5206\u949F\u4E00\u6B21\uFF09\u65F6\u53EF\u4EE5\u4F7F\u7528 ",(0,s.jsx)(n.a,{href:"/zh-CN/docs/3.0/data-operate/import/import-way/insert-into-manual",children:"JDBC INSERT"})," \u5199\u5165\u6570\u636E\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5E76\u53D1\u8F83\u9AD8\u6216\u8005\u9891\u6B21\u8F83\u9AD8\uFF08\u5927\u4E8E 20 \u5E76\u53D1\u6216\u8005 1 \u5206\u949F\u5199\u5165\u591A\u6B21\uFF09\u65F6\u5EFA\u8BAE\u6253\u5F00 ",(0,s.jsx)(n.a,{href:"/zh-CN/docs/3.0/data-operate/import/group-commit-manual",children:"Group Commit"}),"\uFF0C\u4F7F\u7528 JDBC INSERT \u6216\u8005 Stream Load \u5199\u5165\u6570\u636E\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u541E\u5410\u8F83\u9AD8\u65F6\u63A8\u8350\u4F7F\u7528 ",(0,s.jsx)(n.a,{href:"./import-way/stream-load-manual",children:"Stream Load"})," \u901A\u8FC7 HTTP \u5199\u5165\u6570\u636E\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u6D41\u5F0F\u540C\u6B65"}),"\uFF1A\u901A\u8FC7\u5B9E\u65F6\u6570\u636E\u6D41\uFF08\u5982 Flink\u3001Kafka\u3001\u4E8B\u52A1\u6570\u636E\u5E93\uFF09\u5C06\u6570\u636E\u5B9E\u65F6\u5BFC\u5165\u5230 Doris \u8868\u4E2D\uFF0C\u9002\u7528\u4E8E\u9700\u8981\u5B9E\u65F6\u5206\u6790\u548C\u67E5\u8BE2\u7684\u573A\u666F\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u53EF\u4EE5\u4F7F\u7528 ",(0,s.jsx)(n.a,{href:"/zh-CN/docs/3.0/ecosystem/flink-doris-connector",children:"Flink Doris Connector"})," \u5C06 Flink \u7684\u5B9E\u65F6\u6570\u636E\u6D41\u5199\u5165\u5230 Doris \u8868\u4E2D\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u53EF\u4EE5\u4F7F\u7528 ",(0,s.jsx)(n.a,{href:"/zh-CN/docs/3.0/data-operate/import/import-way/routine-load-manual",children:"Routine Load"})," \u6216\u8005 ",(0,s.jsx)(n.a,{href:"/zh-CN/docs/3.0/ecosystem/doris-kafka-connector",children:"Doris Kafka Connector"})," \u5C06 Kafka \u7684\u5B9E\u65F6\u6570\u636E\u6D41\u5199\u5165\u5230 Doris \u8868\u4E2D\u3002Routine Load \u65B9\u5F0F\u4E0B\uFF0CDoris \u4F1A\u8C03\u5EA6\u4EFB\u52A1\u5C06 Kafka \u4E2D\u7684\u6570\u636E\u62C9\u53D6\u5E76\u5199\u5165 Doris \u4E2D\uFF0C\u76EE\u524D\u652F\u6301 csv \u548C json \u683C\u5F0F\u7684\u6570\u636E\u3002Kafka Connector \u65B9\u5F0F\u4E0B\uFF0C\u7531 Kafka \u5C06\u6570\u636E\u5199\u5165\u5230 Doris \u4E2D\uFF0C\u652F\u6301 avro\u3001json\u3001csv\u3001protobuf \u683C\u5F0F\u7684\u6570\u636E\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u53EF\u4EE5\u4F7F\u7528 ",(0,s.jsx)(n.a,{href:"/zh-CN/docs/3.0/ecosystem/flink-doris-connector",children:"Flink CDC"})," \u6216 ",(0,s.jsx)(n.a,{href:"/zh-CN/docs/3.0/ecosystem/datax",children:" Datax"})," \u5C06\u4E8B\u52A1\u6570\u636E\u5E93\u7684 CDC \u6570\u636E\u6D41\u5199\u5165\u5230 Doris \u4E2D\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u6279\u91CF\u5BFC\u5165"}),"\uFF1A\u5C06\u6570\u636E\u4ECE\u5916\u90E8\u5B58\u50A8\u7CFB\u7EDF\uFF08\u5982\u5BF9\u8C61\u5B58\u50A8\u3001HDFS\u3001\u672C\u5730\u6587\u4EF6\u3001NAS\uFF09\u6279\u91CF\u52A0\u8F7D\u5230 Doris \u8868\u4E2D\uFF0C\u9002\u7528\u4E8E\u975E\u5B9E\u65F6\u6570\u636E\u5BFC\u5165\u7684\u9700\u6C42\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u53EF\u4EE5\u4F7F\u7528 ",(0,s.jsx)(n.a,{href:"/zh-CN/docs/3.0/data-operate/import/import-way/broker-load-manual",children:"Broker Load"})," \u5C06\u5BF9\u8C61\u5B58\u50A8\u548C HDFS \u4E2D\u7684\u6587\u4EF6\u5199\u5165\u5230 Doris \u4E2D\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u53EF\u4EE5\u4F7F\u7528 ",(0,s.jsx)(n.a,{href:"/zh-CN/docs/3.0/data-operate/import/import-way/insert-into-manual",children:"INSERT INTO SELECT"})," \u5C06\u5BF9\u8C61\u5B58\u50A8\u3001HDFS \u548C NAS \u4E2D\u7684\u6587\u4EF6\u540C\u6B65\u5199\u5165\u5230 Doris \u4E2D\uFF0C\u914D\u5408 ",(0,s.jsx)(n.a,{href:"../scheduler/job-scheduler.md",children:"JOB"})," \u53EF\u4EE5\u5F02\u6B65\u5199\u5165\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u53EF\u4EE5\u4F7F\u7528 ",(0,s.jsx)(n.a,{href:"./import-way/stream-load-manual",children:"Stream Load"})," \u6216\u8005 ",(0,s.jsx)(n.a,{href:"/zh-CN/docs/3.0/ecosystem/doris-streamloader",children:"Doris Streamloader"})," \u5C06\u672C\u5730\u6587\u4EF6\u5199\u5165 Doris \u4E2D\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u5916\u90E8\u6570\u636E\u6E90\u96C6\u6210"}),"\uFF1A\u901A\u8FC7\u4E0E\u5916\u90E8\u6570\u636E\u6E90\uFF08\u5982 Hive\u3001JDBC\u3001Iceberg \u7B49\uFF09\u7684\u96C6\u6210\uFF0C\u5B9E\u73B0\u5BF9\u5916\u90E8\u6570\u636E\u7684\u67E5\u8BE2\u548C\u90E8\u5206\u6570\u636E\u5BFC\u5165\u5230 Doris \u8868\u4E2D\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u53EF\u4EE5\u521B\u5EFA ",(0,s.jsx)(n.a,{href:"/zh-CN/docs/3.0/lakehouse/lakehouse-overview",children:"Catalog"})," \u8BFB\u53D6\u5916\u90E8\u6570\u636E\u6E90\u4E2D\u7684\u6570\u636E\uFF0C\u4F7F\u7528 ",(0,s.jsx)(n.a,{href:"/zh-CN/docs/3.0/data-operate/import/import-way/insert-into-manual",children:"INSERT INTO SELECT"})," \u5C06\u5916\u90E8\u6570\u636E\u6E90\u4E2D\u7684\u6570\u636E\u540C\u6B65\u5199\u5165\u5230 Doris \u4E2D\uFF0C\u914D\u5408 ",(0,s.jsx)(n.a,{href:"../scheduler/job-scheduler.md",children:"JOB"})," \u53EF\u4EE5\u5F02\u6B65\u5199\u5165\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u53EF\u4EE5\u4F7F\u7528 ",(0,s.jsx)(n.a,{href:"/zh-CN/docs/3.0/data-operate/import/data-source/migrate-data-from-other-olap",children:"X2Doris"})," \u5C06\u5176\u4ED6 AP \u7CFB\u7EDF\u7684\u6570\u636E\u8FC1\u79FB\u5230 Doris \u4E2D\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Doris \u7684\u6BCF\u4E2A\u5BFC\u5165\u9ED8\u8BA4\u90FD\u662F\u4E00\u4E2A\u9690\u5F0F\u4E8B\u52A1\uFF0C\u4E8B\u52A1\u76F8\u5173\u7684\u66F4\u591A\u4FE1\u606F\u8BF7\u53C2\u8003",(0,s.jsx)(n.a,{href:"/zh-CN/docs/3.0/data-operate/transaction",children:"\u4E8B\u52A1"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5BFC\u5165\u65B9\u5F0F\u5FEB\u901F\u6D4F\u89C8",children:"\u5BFC\u5165\u65B9\u5F0F\u5FEB\u901F\u6D4F\u89C8"}),"\n",(0,s.jsx)(n.p,{children:"Doris \u7684\u5BFC\u5165\u4E3B\u8981\u6D89\u53CA\u6570\u636E\u6E90\u3001\u6570\u636E\u683C\u5F0F\u3001\u5BFC\u5165\u65B9\u5F0F\u3001\u9519\u8BEF\u6570\u636E\u5904\u7406\u3001\u6570\u636E\u8F6C\u6362\u3001\u4E8B\u52A1\u591A\u4E2A\u65B9\u9762\u3002\u60A8\u53EF\u4EE5\u5728\u5982\u4E0B\u8868\u683C\u4E2D\u5FEB\u901F\u6D4F\u89C8\u5404\u5BFC\u5165\u65B9\u5F0F\u9002\u5408\u7684\u573A\u666F\u548C\u652F\u6301\u7684\u6587\u4EF6\u683C\u5F0F\u3002"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BFC\u5165\u65B9\u5F0F"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u4F7F\u7528\u573A\u666F"}),(0,s.jsx)(n.th,{children:"\u652F\u6301\u7684\u6587\u4EF6\u683C\u5F0F"}),(0,s.jsx)(n.th,{children:"\u5BFC\u5165\u6A21\u5F0F"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"./import-way/stream-load-manual",children:"Stream Load"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u5BFC\u5165\u672C\u5730\u6587\u4EF6\u6216\u8005\u5E94\u7528\u7A0B\u5E8F\u5199\u5165"}),(0,s.jsx)(n.td,{children:"csv\u3001json\u3001parquet\u3001orc"}),(0,s.jsx)(n.td,{children:"\u540C\u6B65"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"/zh-CN/docs/3.0/data-operate/import/import-way/broker-load-manual",children:"Broker Load"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u4ECE\u5BF9\u8C61\u5B58\u50A8\u3001HDFS \u7B49\u5BFC\u5165"}),(0,s.jsx)(n.td,{children:"csv\u3001json\u3001parquet\u3001orc"}),(0,s.jsx)(n.td,{children:"\u5F02\u6B65"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"/zh-CN/docs/3.0/data-operate/import/import-way/insert-into-manual",children:"INSERT INTO VALUES"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u901A\u8FC7 JDBC \u7B49\u63A5\u53E3\u5BFC\u5165"}),(0,s.jsx)(n.td,{children:"SQL"}),(0,s.jsx)(n.td,{children:"\u540C\u6B65"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"/zh-CN/docs/3.0/data-operate/import/import-way/insert-into-manual",children:"INSERT INTO SELECT"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u53EF\u4EE5\u5BFC\u5165\u5916\u90E8\u8868\u6216\u8005\u5BF9\u8C61\u5B58\u50A8\u3001HDFS \u4E2D\u7684\u6587\u4EF6"}),(0,s.jsx)(n.td,{children:"SQL"}),(0,s.jsx)(n.td,{children:"\u540C\u6B65"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"/zh-CN/docs/3.0/data-operate/import/import-way/routine-load-manual",children:"Routine Load"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u4ECE kakfa \u5B9E\u65F6\u5BFC\u5165"}),(0,s.jsx)(n.td,{children:"csv\u3001json"}),(0,s.jsx)(n.td,{children:"\u5F02\u6B65"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"/zh-CN/docs/3.0/data-operate/import/import-way/mysql-load-manual",children:"MySQL Load"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u4ECE\u672C\u5730\u6570\u636E\u5BFC\u5165"}),(0,s.jsx)(n.td,{children:"csv"}),(0,s.jsx)(n.td,{children:"\u540C\u6B65"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"/zh-CN/docs/3.0/data-operate/import/group-commit-manual",children:"Group Commit"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u9AD8\u9891\u5C0F\u6279\u91CF\u5BFC\u5165"}),(0,s.jsx)(n.td,{children:"\u6839\u636E\u4F7F\u7528\u7684\u5BFC\u5165\u65B9\u5F0F\u800C\u5B9A"}),(0,s.jsx)(n.td,{children:"-"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return l}});var t=r(667294);let s={},i=t.createContext(s);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);