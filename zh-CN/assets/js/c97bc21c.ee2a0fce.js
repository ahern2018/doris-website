"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["656985"],{571149:function(n,e,d){d.r(e),d.d(e,{metadata:()=>r,contentTitle:()=>l,default:()=>j,assets:()=>c,toc:()=>h,frontMatter:()=>i});var r=JSON.parse('{"id":"data-operate/export/export-overview","title":"\u6570\u636E\u5BFC\u51FA\u6982\u8FF0","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/data-operate/export/export-overview.md","sourceDirName":"data-operate/export","slug":"/data-operate/export/export-overview","permalink":"/zh-CN/docs/3.0/data-operate/export/export-overview","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"\u6570\u636E\u5BFC\u51FA\u6982\u8FF0","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u4E8B\u52A1","permalink":"/zh-CN/docs/3.0/data-operate/transaction"},"next":{"title":"Export","permalink":"/zh-CN/docs/3.0/data-operate/export/export-manual"}}'),t=d("785893"),s=d("250065");let i={title:"\u6570\u636E\u5BFC\u51FA\u6982\u8FF0",language:"zh-CN"},l=void 0,c={},h=[{value:"\u9009\u62E9\u5BFC\u51FA\u65B9\u5F0F",id:"\u9009\u62E9\u5BFC\u51FA\u65B9\u5F0F",level:2},{value:"SELECT INTO OUTFILE",id:"select-into-outfile",level:3},{value:"EXPORT",id:"export",level:3},{value:"MySQL Dump",id:"mysql-dump",level:3},{value:"\u5BFC\u51FA\u6587\u4EF6\u5217\u7C7B\u578B\u6620\u5C04",id:"\u5BFC\u51FA\u6587\u4EF6\u5217\u7C7B\u578B\u6620\u5C04",level:2}];function x(n){let e={h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"\u6570\u636E\u5BFC\u51FA\u529F\u80FD\uFF0C\u7528\u4E8E\u5C06\u67E5\u8BE2\u7ED3\u679C\u96C6\u6216\u8005 Apache Doris \u7684\u8868\u6570\u636E\uFF0C\u4F7F\u7528\u6307\u5B9A\u7684\u6587\u4EF6\u683C\u5F0F\uFF0C\u5199\u5165\u6307\u5B9A\u7684\u5B58\u50A8\u7CFB\u7EDF\u4E2D\u7684\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u5BFC\u51FA\u529F\u80FD\u548C\u6570\u636E\u5907\u4EFD\u529F\u80FD\u6709\u4EE5\u4E0B\u533A\u522B\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u2003"}),(0,t.jsx)(e.th,{children:"\u6570\u636E\u5BFC\u51FA"}),(0,t.jsx)(e.th,{children:"\u6570\u636E\u5907\u4EFD"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u6570\u636E\u6700\u7EC8\u5B58\u50A8\u4F4D\u7F6E"}),(0,t.jsx)(e.td,{children:"HDFS\u3001\u5BF9\u8C61\u5B58\u50A8\u3001\u672C\u5730\u6587\u4EF6\u7CFB\u7EDF"}),(0,t.jsx)(e.td,{children:"HDFS\u3001\u5BF9\u8C61\u5B58\u50A8"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u6570\u636E\u683C\u5F0F"}),(0,t.jsx)(e.td,{children:"Parquet\u3001ORC\u3001CSV \u7B49\u5F00\u653E\u683C\u5F0F"}),(0,t.jsx)(e.td,{children:"Apache Doris \u5185\u90E8\u5B58\u50A8\u683C\u5F0F"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u6267\u884C\u901F\u5EA6"}),(0,t.jsx)(e.td,{children:"\u4E2D\u7B49\uFF08\u9700\u8981\u8BFB\u53D6\u6570\u636E\u5E76\u8F6C\u6362\u6210\u76EE\u6807\u6570\u636E\u683C\u5F0F\uFF09"}),(0,t.jsx)(e.td,{children:"\u5FEB\u901F\uFF08\u65E0\u9700\u89E3\u6790\u548C\u8F6C\u6362\uFF0C\u76F4\u63A5\u4E0A\u4F20 Apache Doris \u6570\u636E\u6587\u4EF6\uFF09"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u7075\u6D3B\u5EA6"}),(0,t.jsx)(e.td,{children:"\u53EF\u4EE5\u901A\u8FC7 SQL \u8BED\u53E5\u7075\u6D3B\u5B9A\u4E49\u8981\u5BFC\u51FA\u7684\u6570\u636E"}),(0,t.jsx)(e.td,{children:"\u4EC5\u652F\u6301\u8868\u7EA7\u522B\u5168\u91CF\u5907\u4EFD"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u4F7F\u7528\u573A\u666F"}),(0,t.jsx)(e.td,{children:"\u7ED3\u679C\u96C6\u4E0B\u8F7D\u3001\u4E0D\u540C\u7CFB\u7EDF\u4E4B\u95F4\u7684\u6570\u636E\u4EA4\u6362"}),(0,t.jsx)(e.td,{children:"\u6570\u636E\u5907\u4EFD\u3001Apache Doris \u96C6\u7FA4\u95F4\u7684\u6570\u636E\u8FC1\u79FB"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"\u9009\u62E9\u5BFC\u51FA\u65B9\u5F0F",children:"\u9009\u62E9\u5BFC\u51FA\u65B9\u5F0F"}),"\n",(0,t.jsx)(e.p,{children:"Apache Doris \u63D0\u4F9B\u4EE5\u4E0B\u4E09\u79CD\u4E0D\u540C\u7684\u6570\u636E\u5BFC\u51FA\u65B9\u5F0F\uFF1A"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"SELECT INTO OUTFILE\uFF1A\u652F\u6301\u4EFB\u610F SQL \u7ED3\u679C\u96C6\u7684\u5BFC\u51FA\u3002"}),"\n",(0,t.jsx)(e.li,{children:"EXPORT\uFF1A\u652F\u6301\u8868\u7EA7\u522B\u7684\u90E8\u5206\u6216\u5168\u90E8\u6570\u636E\u5BFC\u51FA\u3002"}),"\n",(0,t.jsx)(e.li,{children:"MySQL DUMP\uFF1A\u517C\u5BB9 MySQL Dump \u6307\u4EE4\u7684\u6570\u636E\u5BFC\u51FA\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u4E09\u79CD\u5BFC\u51FA\u65B9\u5F0F\u7684\u5F02\u540C\u70B9\u5982\u4E0B\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u2003"}),(0,t.jsx)(e.th,{children:"SELECT INTO OUTFILE"}),(0,t.jsx)(e.th,{children:"EXPORT"}),(0,t.jsx)(e.th,{children:"MySQL DUMP"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u540C\u6B65/\u5F02\u6B65"}),(0,t.jsx)(e.td,{children:"\u540C\u6B65"}),(0,t.jsx)(e.td,{children:"\u5F02\u6B65\uFF08\u63D0\u4EA4 EXPORT \u4EFB\u52A1\u540E\u901A\u8FC7 SHOW EXPORT \u547D\u4EE4\u67E5\u770B\u4EFB\u52A1\u8FDB\u5EA6\uFF09"}),(0,t.jsx)(e.td,{children:"\u540C\u6B65"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u652F\u6301\u4EFB\u610F SQL"}),(0,t.jsx)(e.td,{children:"\u652F\u6301"}),(0,t.jsx)(e.td,{children:"\u4E0D\u652F\u6301"}),(0,t.jsx)(e.td,{children:"\u4E0D\u652F\u6301"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u5BFC\u51FA\u6307\u5B9A\u5206\u533A"}),(0,t.jsx)(e.td,{children:"\u652F\u6301"}),(0,t.jsx)(e.td,{children:"\u652F\u6301"}),(0,t.jsx)(e.td,{children:"\u4E0D\u652F\u6301"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u5BFC\u51FA\u6307\u5B9A Tablets"}),(0,t.jsx)(e.td,{children:"\u652F\u6301"}),(0,t.jsx)(e.td,{children:"\u4E0D\u652F\u6301"}),(0,t.jsx)(e.td,{children:"\u4E0D\u652F\u6301"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u5E76\u53D1\u5BFC\u51FA"}),(0,t.jsx)(e.td,{children:"\u652F\u6301\u4E14\u5E76\u53D1\u9AD8\uFF08\u4F46\u53D6\u51B3\u4E8E SQL \u8BED\u53E5\u662F\u5426\u6709 ORDER BY \u7B49\u9700\u8981\u5355\u673A\u5904\u7406\u7684\u7B97\u5B50\uFF09"}),(0,t.jsx)(e.td,{children:"\u652F\u6301\u4E14\u5E76\u53D1\u9AD8\uFF08\u652F\u6301 Tablet \u7C92\u5EA6\u7684\u5E76\u53D1\u5BFC\u51FA\uFF09"}),(0,t.jsx)(e.td,{children:"\u4E0D\u652F\u6301\uFF0C\u53EA\u80FD\u5355\u7EBF\u7A0B\u5BFC\u51FA"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u652F\u6301\u5BFC\u51FA\u7684\u6570\u636E\u683C\u5F0F"}),(0,t.jsx)(e.td,{children:"Parquet\u3001ORC\u3001CSV"}),(0,t.jsx)(e.td,{children:"Parquet\u3001ORC\u3001CSV"}),(0,t.jsx)(e.td,{children:"MySQL Dump \u4E13\u6709\u683C\u5F0F"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u662F\u5426\u652F\u6301\u5BFC\u51FA\u5916\u8868"}),(0,t.jsx)(e.td,{children:"\u652F\u6301"}),(0,t.jsx)(e.td,{children:"\u90E8\u5206\u652F\u6301"}),(0,t.jsx)(e.td,{children:"\u4E0D\u652F\u6301"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u662F\u5426\u652F\u6301\u5BFC\u51FA View"}),(0,t.jsx)(e.td,{children:"\u652F\u6301"}),(0,t.jsx)(e.td,{children:"\u652F\u6301"}),(0,t.jsx)(e.td,{children:"\u652F\u6301"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u652F\u6301\u7684\u5BFC\u51FA\u4F4D\u7F6E"}),(0,t.jsx)(e.td,{children:"S3\u3001HDFS"}),(0,t.jsx)(e.td,{children:"S3\u3001HDFS"}),(0,t.jsx)(e.td,{children:"LOCAL"})]})]})]}),"\n",(0,t.jsx)(e.h3,{id:"select-into-outfile",children:"SELECT INTO OUTFILE"}),"\n",(0,t.jsx)(e.p,{children:"\u9002\u7528\u4E8E\u4EE5\u4E0B\u573A\u666F\uFF1A"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u5BFC\u51FA\u6570\u636E\u9700\u8981\u7ECF\u8FC7\u590D\u6742\u8BA1\u7B97\u903B\u8F91\u7684\uFF0C\u5982\u8FC7\u6EE4\u3001\u805A\u5408\u3001\u5173\u8054\u7B49\u3002"}),"\n",(0,t.jsx)(e.li,{children:"\u9002\u5408\u6267\u884C\u540C\u6B65\u4EFB\u52A1\u7684\u573A\u666F\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"export",children:"EXPORT"}),"\n",(0,t.jsx)(e.p,{children:"\u9002\u7528\u4E8E\u4EE5\u4E0B\u573A\u666F\uFF1A"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u5927\u6570\u636E\u91CF\u7684\u5355\u8868\u5BFC\u51FA\u3001\u4EC5\u9700\u7B80\u5355\u7684\u8FC7\u6EE4\u6761\u4EF6\u3002"}),"\n",(0,t.jsx)(e.li,{children:"\u9700\u8981\u5F02\u6B65\u63D0\u4EA4\u4EFB\u52A1\u7684\u573A\u666F\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"mysql-dump",children:"MySQL Dump"}),"\n",(0,t.jsx)(e.p,{children:"\u9002\u7528\u4E8E\u4EE5\u4E0B\u573A\u666F\uFF1A"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u517C\u5BB9 MySQL \u751F\u6001\uFF0C\u9700\u8981\u540C\u65F6\u5BFC\u51FA\u8868\u7ED3\u6784\u548C\u6570\u636E\u3002"}),"\n",(0,t.jsx)(e.li,{children:"\u4EC5\u7528\u4E8E\u5F00\u53D1\u6D4B\u8BD5\u6216\u8005\u6570\u636E\u91CF\u5F88\u5C0F\u7684\u60C5\u51B5\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u5BFC\u51FA\u6587\u4EF6\u5217\u7C7B\u578B\u6620\u5C04",children:"\u5BFC\u51FA\u6587\u4EF6\u5217\u7C7B\u578B\u6620\u5C04"}),"\n",(0,t.jsx)(e.p,{children:"Parquet\u3001ORC \u6587\u4EF6\u683C\u5F0F\u62E5\u6709\u81EA\u5DF1\u7684\u6570\u636E\u7C7B\u578B\u3002Apache Doris \u7684\u5BFC\u51FA\u529F\u80FD\u80FD\u591F\u81EA\u52A8\u5C06 Apache Doris \u7684\u6570\u636E\u7C7B\u578B\u5BFC\u51FA\u4E3A Parquet\u3001ORC \u6587\u4EF6\u683C\u5F0F\u7684\u5BF9\u5E94\u6570\u636E\u7C7B\u578B\u3002CSV \u683C\u5F0F\u6CA1\u6709\u7C7B\u578B\uFF0C\u6240\u6709\u6570\u636E\u90FD\u4EE5\u6587\u672C\u5F62\u5F0F\u8F93\u51FA\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u4EE5\u4E0B\u662F Apache Doris \u6570\u636E\u7C7B\u578B\u548C Parquet\u3001ORC \u6587\u4EF6\u683C\u5F0F\u7684\u6570\u636E\u7C7B\u578B\u6620\u5C04\u5173\u7CFB\u8868\uFF1A"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Doris \u5BFC\u51FA\u5230 Orc \u6587\u4EF6\u683C\u5F0F\u7684\u6570\u636E\u7C7B\u578B\u6620\u5C04\u8868\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Doris Type"}),(0,t.jsx)(e.th,{children:"Orc Type"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"boolean"}),(0,t.jsx)(e.td,{children:"boolean"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"tinyint"}),(0,t.jsx)(e.td,{children:"tinyint"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"smallint"}),(0,t.jsx)(e.td,{children:"smallint"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"int"}),(0,t.jsx)(e.td,{children:"int"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"bigint"}),(0,t.jsx)(e.td,{children:"bigint"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"largeInt"}),(0,t.jsx)(e.td,{children:"string"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"date"}),(0,t.jsx)(e.td,{children:"string"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"datev2"}),(0,t.jsx)(e.td,{children:"string"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"datetime"}),(0,t.jsx)(e.td,{children:"string"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"datetimev2"}),(0,t.jsx)(e.td,{children:"timestamp"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"float"}),(0,t.jsx)(e.td,{children:"float"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"double"}),(0,t.jsx)(e.td,{children:"double"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"char / varchar / string"}),(0,t.jsx)(e.td,{children:"string"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"decimal"}),(0,t.jsx)(e.td,{children:"decimal"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"struct"}),(0,t.jsx)(e.td,{children:"struct"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"map"}),(0,t.jsx)(e.td,{children:"map"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"array"}),(0,t.jsx)(e.td,{children:"array"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"json"}),(0,t.jsx)(e.td,{children:"\u4E0D\u652F\u6301"})]})]})]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Apache Doris \u5BFC\u51FA\u5230 Parquet \u6587\u4EF6\u683C\u5F0F\u65F6\uFF0C\u4F1A\u5148\u5C06 Apache Doris \u5185\u5B58\u6570\u636E\u8F6C\u6362\u4E3A Arrow \u5185\u5B58\u6570\u636E\u683C\u5F0F\uFF0C\u7136\u540E\u7531 Arrow \u5199\u51FA\u5230 Parquet \u6587\u4EF6\u683C\u5F0F\u3002Apache Doris \u6570\u636E\u7C7B\u578B\u5230 Arrow \u6570\u636E\u7C7B\u7684\u6620\u5C04\u5173\u7CFB\u4E3A\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Doris Type"}),(0,t.jsx)(e.th,{children:"Arrow Type"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"boolean"}),(0,t.jsx)(e.td,{children:"boolean"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"tinyint"}),(0,t.jsx)(e.td,{children:"int8"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"smallint"}),(0,t.jsx)(e.td,{children:"int16"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"int"}),(0,t.jsx)(e.td,{children:"int32"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"bigint"}),(0,t.jsx)(e.td,{children:"int64"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"largeInt"}),(0,t.jsx)(e.td,{children:"utf8"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"date"}),(0,t.jsx)(e.td,{children:"utf8"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"datev2"}),(0,t.jsx)(e.td,{children:"Date32Type"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"datetime"}),(0,t.jsx)(e.td,{children:"utf8"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"datetimev2"}),(0,t.jsx)(e.td,{children:"TimestampType"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"float"}),(0,t.jsx)(e.td,{children:"float32"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"double"}),(0,t.jsx)(e.td,{children:"float64"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"char / varchar / string"}),(0,t.jsx)(e.td,{children:"utf8"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"decimal"}),(0,t.jsx)(e.td,{children:"decimal128"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"struct"}),(0,t.jsx)(e.td,{children:"struct"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"map"}),(0,t.jsx)(e.td,{children:"map"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"array"}),(0,t.jsx)(e.td,{children:"list"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"json"}),(0,t.jsx)(e.td,{children:"utf8"})]})]})]}),"\n"]}),"\n"]})]})}function j(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(x,{...n})}):x(n)}},250065:function(n,e,d){d.d(e,{Z:function(){return l},a:function(){return i}});var r=d(667294);let t={},s=r.createContext(t);function i(n){let e=r.useContext(s);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);