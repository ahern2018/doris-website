"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["462515"],{691814:function(n,e,c){c.r(e),c.d(e,{metadata:()=>i,contentTitle:()=>a,default:()=>p,assets:()=>l,toc:()=>r,frontMatter:()=>s});var i=JSON.parse('{"id":"admin-manual/trouble-shooting/compaction","title":"Compaction \u4F18\u5316","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/trouble-shooting/compaction.md","sourceDirName":"admin-manual/trouble-shooting","slug":"/admin-manual/trouble-shooting/compaction","permalink":"/zh-CN/docs/3.0/admin-manual/trouble-shooting/compaction","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Compaction \u4F18\u5316","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u5185\u5B58\u63A7\u5236\u7B56\u7565","permalink":"/zh-CN/docs/3.0/admin-manual/trouble-shooting/memory-management/memory-feature/memory-control-strategy"},"next":{"title":"\u5143\u6570\u636E\u8FD0\u7EF4","permalink":"/zh-CN/docs/3.0/admin-manual/trouble-shooting/metadata-operation"}}'),o=c("785893"),t=c("250065");let s={title:"Compaction \u4F18\u5316",language:"zh-CN"},a=void 0,l={},r=[{value:"Vertical compaction",id:"vertical-compaction",level:2},{value:"Segment compaction",id:"segment-compaction",level:2},{value:"\u5355\u526F\u672C compaction",id:"\u5355\u526F\u672C-compaction",level:2},{value:"Compaction \u7B56\u7565",id:"compaction-\u7B56\u7565",level:2},{value:"size_based compaction \u7B56\u7565",id:"size_based-compaction-\u7B56\u7565",level:3},{value:"time_series compaction \u7B56\u7565",id:"time_series-compaction-\u7B56\u7565",level:3},{value:"Compaction \u5E76\u53D1\u63A7\u5236",id:"compaction-\u5E76\u53D1\u63A7\u5236",level:2}];function m(n){let e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:"Doris \u901A\u8FC7\u7C7B\u4F3C LSM-Tree \u7684\u7ED3\u6784\u5199\u5165\u6570\u636E\uFF0C\u5728\u540E\u53F0\u901A\u8FC7 Compaction \u673A\u5236\u4E0D\u65AD\u5C06\u5C0F\u6587\u4EF6\u5408\u5E76\u6210\u6709\u5E8F\u7684\u5927\u6587\u4EF6\uFF0C\u540C\u65F6\u4E5F\u4F1A\u5904\u7406\u6570\u636E\u7684\u5220\u9664\u3001\u66F4\u65B0\u7B49\u64CD\u4F5C\u3002\u9002\u5F53\u7684\u8C03\u6574 Compaction \u7684\u7B56\u7565\uFF0C\u53EF\u4EE5\u6781\u5927\u5730\u63D0\u5347\u5BFC\u5165\u6548\u7387\u548C\u67E5\u8BE2\u6548\u7387\u3002\nDoris \u63D0\u4F9B\u5982\u4E0B\u51E0\u79CD compaction \u65B9\u5F0F\u8FDB\u884C\u8C03\u4F18\uFF1A"}),"\n",(0,o.jsx)(e.h2,{id:"vertical-compaction",children:"Vertical compaction"}),"\n",(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsx)(e.p,{children:"\u81EA Doris 1.2.2 \u7248\u672C\u8D77\u652F\u6301 Vertical compaction"})}),"\n",(0,o.jsx)(e.p,{children:"Vertical compaction \u662F Doris 1.2.2 \u7248\u672C\u4E2D\u5B9E\u73B0\u7684\u65B0\u7684 Compaction \u7B97\u6CD5\uFF0C\u7528\u4E8E\u89E3\u51B3\u5927\u5BBD\u8868\u573A\u666F\u4E0B\u7684 Compaction \u6267\u884C\u6548\u7387\u548C\u8D44\u6E90\u5F00\u9500\u95EE\u9898\u3002\u53EF\u4EE5\u6709\u6548\u964D\u4F4E Compaction \u7684\u5185\u5B58\u5F00\u9500\uFF0C\u5E76\u63D0\u5347 Compaction \u7684\u6267\u884C\u901F\u5EA6\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u5B9E\u9645\u6D4B\u8BD5\u4E2D\uFF0CVertical compaction \u4F7F\u7528\u5185\u5B58\u4EC5\u4E3A\u539F\u6709 compaction \u7B97\u6CD5\u7684 1/10\uFF0C\u540C\u65F6 compaction \u901F\u7387\u63D0\u5347 15%\u3002"}),"\n",(0,o.jsx)(e.p,{children:"Vertical compaction \u4E2D\u5C06\u6309\u884C\u5408\u5E76\u7684\u65B9\u5F0F\u6539\u53D8\u4E3A\u6309\u5217\u7EC4\u5408\u5E76\uFF0C\u6BCF\u6B21\u53C2\u4E0E\u5408\u5E76\u7684\u7C92\u5EA6\u53D8\u6210\u5217\u7EC4\uFF0C\u964D\u4F4E\u5355\u6B21 compaction \u5185\u90E8\u53C2\u4E0E\u7684\u6570\u636E\u91CF\uFF0C\u51CF\u5C11 compaction \u671F\u95F4\u7684\u5185\u5B58\u4F7F\u7528\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u5F00\u542F\u548C\u914D\u7F6E\u65B9\u6CD5 (BE \u914D\u7F6E)\uFF1A"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"enable_vertical_compaction = true"})," \u53EF\u4EE5\u5F00\u542F\u8BE5\u529F\u80FD"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"vertical_compaction_num_columns_per_group = 5"})," \u6BCF\u4E2A\u5217\u7EC4\u5305\u542B\u7684\u5217\u4E2A\u6570\uFF0C\u7ECF\u6D4B\u8BD5\uFF0C\u9ED8\u8BA4 5 \u5217\u4E00\u7EC4 compaction \u7684\u6548\u7387\u53CA\u5185\u5B58\u4F7F\u7528\u8F83\u53CB\u597D"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"vertical_compaction_max_segment_size"})," \u7528\u4E8E\u914D\u7F6E vertical compaction \u4E4B\u540E\u843D\u76D8\u6587\u4EF6\u7684\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u503C 268435456(\u5B57\u8282)"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"segment-compaction",children:"Segment compaction"}),"\n",(0,o.jsx)(e.p,{children:"Segment compaction \u4E3B\u8981\u5E94\u5BF9\u5355\u6279\u6B21\u5927\u6570\u636E\u91CF\u7684\u5BFC\u5165\u573A\u666F\u3002\u548C Vertical compaction \u7684\u89E6\u53D1\u673A\u5236\u4E0D\u540C\uFF0CSegment compaction \u662F\u5728\u5BFC\u5165\u8FC7\u7A0B\u4E2D\uFF0C\u9488\u5BF9\u4E00\u6279\u6B21\u6570\u636E\u5185\uFF0C\u591A\u4E2A Segment \u8FDB\u884C\u7684\u5408\u5E76\u64CD\u4F5C\u3002\u8FD9\u79CD\u673A\u5236\u53EF\u4EE5\u6709\u6548\u51CF\u5C11\u6700\u7EC8\u751F\u6210\u7684 Segment \u6570\u91CF\uFF0C\u907F\u514D -238\uFF08OLAP_ERR_TOO_MANY_SEGMENTS\uFF09\u9519\u8BEF\u7684\u51FA\u73B0\u3002\nSegment compaction \u6709\u4EE5\u4E0B\u7279\u70B9\uFF1A"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"\u53EF\u4EE5\u51CF\u5C11\u5BFC\u5165\u4EA7\u751F\u7684 segment \u6570\u91CF"}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"\u5408\u5E76\u8FC7\u7A0B\u4E0E\u5BFC\u5165\u8FC7\u7A0B\u5E76\u884C\uFF0C\u4E0D\u4F1A\u989D\u5916\u589E\u52A0\u5BFC\u5165\u65F6\u95F4"}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"\u5BFC\u5165\u8FC7\u7A0B\u4E2D\u7684\u5185\u5B58\u548C\u8BA1\u7B97\u8D44\u6E90\u7684\u4F7F\u7528\u91CF\u4F1A\u6709\u589E\u52A0\uFF0C\u4F46\u56E0\u4E3A\u5E73\u644A\u5728\u6574\u4E2A\u5BFC\u5165\u8FC7\u7A0B\u4E2D\u6240\u4EE5\u6DA8\u5E45\u8F83\u4F4E"}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"\u7ECF\u8FC7 Segment compaction \u540E\u7684\u6570\u636E\u5728\u8FDB\u884C\u540E\u7EED\u67E5\u8BE2\u4EE5\u53CA\u6807\u51C6 compaction \u65F6\u4F1A\u6709\u8D44\u6E90\u548C\u6027\u80FD\u4E0A\u7684\u4F18\u52BF"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"\u5F00\u542F\u548C\u914D\u7F6E\u65B9\u6CD5 (BE \u914D\u7F6E)\uFF1A"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"enable_segcompaction = true"})," \u53EF\u4EE5\u4F7F\u80FD\u8BE5\u529F\u80FD"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"segcompaction_batch_size"})," \u7528\u4E8E\u914D\u7F6E\u5408\u5E76\u7684\u95F4\u9694\u3002\u9ED8\u8BA4 10 \u8868\u793A\u6BCF\u751F\u6210 10 \u4E2A segment \u6587\u4EF6\u5C06\u4F1A\u8FDB\u884C\u4E00\u6B21 segment compaction\u3002\u4E00\u822C\u8BBE\u7F6E\u4E3A 10 - 30\uFF0C\u8FC7\u5927\u7684\u503C\u4F1A\u589E\u52A0 segment compaction \u7684\u5185\u5B58\u7528\u91CF\u3002"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"\u5982\u6709\u4EE5\u4E0B\u573A\u666F\u6216\u95EE\u9898\uFF0C\u5EFA\u8BAE\u5F00\u542F\u6B64\u529F\u80FD\uFF1A"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"\u5BFC\u5165\u5927\u91CF\u6570\u636E\u89E6\u53D1 OLAP_ERR_TOO_MANY_SEGMENTS (errcode -238) \u9519\u8BEF\u5BFC\u81F4\u5BFC\u5165\u5931\u8D25\u3002\u6B64\u65F6\u5EFA\u8BAE\u6253\u5F00 segment compaction \u7684\u529F\u80FD\uFF0C\u5728\u5BFC\u5165\u8FC7\u7A0B\u4E2D\u5BF9 segment \u8FDB\u884C\u5408\u5E76\u63A7\u5236\u6700\u7EC8\u7684\u6570\u91CF\u3002"}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"\u5BFC\u5165\u8FC7\u7A0B\u4E2D\u4EA7\u751F\u5927\u91CF\u7684\u5C0F\u6587\u4EF6\uFF1A\u867D\u7136\u5BFC\u5165\u6570\u636E\u91CF\u4E0D\u5927\uFF0C\u4F46\u56E0\u4E3A\u4F4E\u57FA\u6570\u6570\u636E\uFF0C\u6216\u56E0\u4E3A\u5185\u5B58\u7D27\u5F20\u89E6\u53D1 memtable \u63D0\u524D\u4E0B\u5237\uFF0C\u4EA7\u751F\u5927\u91CF\u5C0F segment  \u6587\u4EF6\u4E5F\u53EF\u80FD\u4F1A\u89E6\u53D1 OLAP_ERR_TOO_MANY_SEGMENTS \u5BFC\u81F4\u5BFC\u5165\u5931\u8D25\u3002\u6B64\u65F6\u5EFA\u8BAE\u6253\u5F00\u8BE5\u529F\u80FD\u3002"}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"\u5BFC\u5165\u5927\u91CF\u6570\u636E\u540E\u7ACB\u5373\u8FDB\u884C\u67E5\u8BE2\uFF1A\u521A\u5BFC\u5165\u5B8C\u6210\u3001\u6807\u51C6 compaction \u8FD8\u6CA1\u6709\u5B8C\u6210\u5DE5\u4F5C\u65F6\uFF0C\u6B64\u65F6 segment \u6587\u4EF6\u8FC7\u591A\u4F1A\u5F71\u54CD\u540E\u7EED\u67E5\u8BE2\u6548\u7387\u3002\u5982\u679C\u7528\u6237\u6709\u5BFC\u5165\u540E\u7ACB\u5373\u67E5\u8BE2\u7684\u9700\u6C42\uFF0C\u5EFA\u8BAE\u6253\u5F00\u8BE5\u529F\u80FD\u3002"}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"\u5BFC\u5165\u540E\u6807\u51C6 compaction \u538B\u529B\u5927\uFF1Asegment compaction \u672C\u8D28\u4E0A\u662F\u628A\u6807\u51C6 compaction \u7684\u4E00\u90E8\u5206\u538B\u529B\u653E\u5728\u4E86\u5BFC\u5165\u8FC7\u7A0B\u4E2D\u8FDB\u884C\u5904\u7406\uFF0C\u6B64\u65F6\u5EFA\u8BAE\u6253\u5F00\u8BE5\u529F\u80FD\u3002"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u7684\u60C5\u51B5\uFF1A"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"\u5BFC\u5165\u64CD\u4F5C\u672C\u8EAB\u5DF2\u7ECF\u8017\u5C3D\u4E86\u5185\u5B58\u8D44\u6E90\u65F6\uFF0C\u4E0D\u5EFA\u8BAE\u4F7F\u7528 segment compaction \u4EE5\u514D\u8FDB\u4E00\u6B65\u589E\u52A0\u5185\u5B58\u538B\u529B\u4F7F\u5BFC\u5165\u5931\u8D25\u3002"}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["\u5173\u4E8E segment compaction \u7684\u5B9E\u73B0\u548C\u6D4B\u8BD5\u7ED3\u679C\u53EF\u4EE5\u67E5\u9605",(0,o.jsx)(e.a,{href:"https://github.com/apache/doris/pull/12866",children:"\u6B64\u94FE\u63A5"}),"\u3002"]}),"\n",(0,o.jsx)(e.h2,{id:"\u5355\u526F\u672C-compaction",children:"\u5355\u526F\u672C compaction"}),"\n",(0,o.jsx)(e.p,{children:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u591A\u4E2A\u526F\u672C\u7684 compaction \u662F\u72EC\u7ACB\u8FDB\u884C\u7684\uFF0C\u6BCF\u4E2A\u526F\u672C\u5728\u90FD\u9700\u8981\u6D88\u8017 CPU \u548C IO \u8D44\u6E90\u3002\u5F00\u542F\u5355\u526F\u672C compaction \u540E\uFF0C\u5728\u4E00\u4E2A\u526F\u672C\u8FDB\u884C compaction \u540E\uFF0C\u5176\u4ED6\u51E0\u4E2A\u526F\u672C\u62C9\u53D6 compaction \u540E\u7684\u6587\u4EF6\uFF0C\u56E0\u6B64 CPU \u8D44\u6E90\u53EA\u9700\u8981\u6D88\u8017 1 \u6B21\uFF0C\u8282\u7701\u4E86 N - 1 \u500D CPU \u6D88\u8017\uFF08N \u662F\u526F\u672C\u6570\uFF09\u3002"}),"\n",(0,o.jsxs)(e.p,{children:["\u5355\u526F\u672C compaction \u5728\u8868\u7684 PROPERTIES \u4E2D\u901A\u8FC7\u53C2\u6570 ",(0,o.jsx)(e.code,{children:"enable_single_replica_compaction"})," \u6307\u5B9A\uFF0C\u9ED8\u8BA4\u4E3A false \u4E0D\u5F00\u542F\uFF0C\u8BBE\u7F6E\u4E3A true \u5F00\u542F\u3002"]}),"\n",(0,o.jsxs)(e.p,{children:["\u8BE5\u53C2\u6570\u53EF\u4EE5\u5728\u5EFA\u8868\u65F6\u6307\u5B9A\uFF0C\u6216\u8005\u901A\u8FC7 ",(0,o.jsx)(e.code,{children:'ALTER TABLE table_name SET("enable_single_replica_compaction" = "true")'})," \u6765\u4FEE\u6539\u3002"]}),"\n",(0,o.jsx)(e.h2,{id:"compaction-\u7B56\u7565",children:"Compaction \u7B56\u7565"}),"\n",(0,o.jsxs)(e.p,{children:["Compaction \u7B56\u7565\u51B3\u5B9A\u4EC0\u4E48\u65F6\u5019\u5C06\u54EA\u4E9B\u5C0F\u6587\u4EF6\u5408\u5E76\u6210\u5927\u6587\u4EF6\u3002Doris \u5F53\u524D\u63D0\u4F9B\u4E86 2 \u79CD compaction \u7B56\u7565\uFF0C\u901A\u8FC7\u8868\u5C5E\u6027\u7684 ",(0,o.jsx)(e.code,{children:"compaction_policy"})," \u53C2\u6570\u6307\u5B9A\u3002"]}),"\n",(0,o.jsx)(e.h3,{id:"size_based-compaction-\u7B56\u7565",children:"size_based compaction \u7B56\u7565"}),"\n",(0,o.jsx)(e.p,{children:"size_based compaction \u7B56\u7565\u662F\u9ED8\u8BA4\u7B56\u7565\uFF0C\u5BF9\u5927\u591A\u6570\u573A\u666F\u9002\u7528\u3002"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:'"compaction_policy" = "size_based"\n'})}),"\n",(0,o.jsx)(e.h3,{id:"time_series-compaction-\u7B56\u7565",children:"time_series compaction \u7B56\u7565"}),"\n",(0,o.jsx)(e.p,{children:"time_series compaction \u7B56\u7565\u662F\u4E3A\u65E5\u5FD7\u3001\u65F6\u5E8F\u7B49\u573A\u666F\u4F18\u5316\u7684\u7B56\u7565\u3002\u5B83\u5229\u7528\u65F6\u5E8F\u6570\u636E\u5177\u6709\u65F6\u95F4\u5C40\u90E8\u6027\u7684\u7279\u70B9\uFF0C\u5C06\u76F8\u90BB\u65F6\u95F4\u5199\u5165\u7684\u5C0F\u6587\u4EF6\u5408\u5E76\u6210\u5927\u6587\u4EF6\uFF0C\u6BCF\u4E2A\u6587\u4EF6\u53EA\u4F1A\u53C2\u4E0E\u4E00\u6B21 compaction \u5C31\u5408\u5E76\u6210\u6BD4\u8F83\u5927\u7684\u6587\u4EF6\uFF0C\u51CF\u5C11\u53CD\u590D compaction \u5E26\u6765\u7684\u5199\u653E\u5927\u3002"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:'"compaction_policy" = "time_series"\n'})}),"\n",(0,o.jsx)(e.p,{children:"time_series compaction \u7B56\u7565\u5728\u4E0B\u9762 3 \u4E2A\u6761\u4EF6\u4EFB\u610F\u4E00\u4E2A\u6EE1\u8DB3\u7684\u65F6\u5019\u89E6\u53D1\u5C0F\u6587\u4EF6\u5408\u5E76\uFF1A"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\u672A\u5408\u5E76\u7684\u6587\u4EF6\u5927\u5C0F\u8D85\u8FC7 ",(0,o.jsx)(e.code,{children:"time_series_compaction_goal_size_mbytes"})," (\u9ED8\u8BA4 1GB)"]}),"\n",(0,o.jsxs)(e.li,{children:["\u672A\u5408\u5E76\u7684\u6587\u4EF6\u4E2A\u6570\u8D85\u8FC7 ",(0,o.jsx)(e.code,{children:"time_series_compaction_file_count_threshold"})," (\u9ED8\u8BA4 2000)"]}),"\n",(0,o.jsxs)(e.li,{children:["\u8DDD\u79BB\u4E0A\u6B21\u5408\u5E76\u7684\u65F6\u95F4\u8D85\u8FC7 ",(0,o.jsx)(e.code,{children:"time_series_compaction_time_threshold_seconds"})," (\u9ED8\u8BA4 1 \u5C0F\u65F6)"]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["\u4E0A\u8FF0\u53C2\u6570\u5728\u8868\u7684 PROPERTIES \u4E2D\u8BBE\u7F6E\uFF0C\u53EF\u4EE5\u5728\u5EFA\u8868\u65F6\u6307\u5B9A\uFF0C\u6216\u8005\u901A\u8FC7 ",(0,o.jsx)(e.code,{children:'ALTER TABLE table_name SET("name" = "value")'})," \u4FEE\u6539\u3002"]}),"\n",(0,o.jsx)(e.h2,{id:"compaction-\u5E76\u53D1\u63A7\u5236",children:"Compaction \u5E76\u53D1\u63A7\u5236"}),"\n",(0,o.jsx)(e.p,{children:"Compaction \u5728\u540E\u53F0\u6267\u884C\u9700\u8981\u6D88\u8017 CPU \u548C IO \u8D44\u6E90\uFF0C\u53EF\u4EE5\u901A\u8FC7\u63A7\u5236 compaction \u5E76\u53D1\u7EBF\u7A0B\u6570\u6765\u63A7\u5236\u8D44\u6E90\u6D88\u8017\u3002"}),"\n",(0,o.jsx)(e.p,{children:"compaction \u5E76\u53D1\u7EBF\u7A0B\u6570\u5728 BE \u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\u914D\u7F6E\uFF0C\u5305\u62EC\u4E0B\u9762\u51E0\u4E2A\uFF1A"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"max_base_compaction_threads"}),"\uFF1Abase compaction \u7684\u7EBF\u7A0B\u6570\uFF0C\u9ED8\u8BA4\u662F 4"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"max_cumu_compaction_threads"}),"\uFF1Acumulative compaction \u7684\u7EBF\u7A0B\u6570\uFF0C\u9ED8\u8BA4\u662F -1\uFF0C\u8868\u793A\u6BCF\u5757\u76D8 1 \u4E2A\u7EBF\u7A0B"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"max_single_replica_compaction_threads"}),"\uFF1A\u5355\u526F\u672C compaction \u62C9\u53D6\u6570\u636E\u6587\u4EF6\u7684\u7EBF\u7A0B\u6570\uFF0C\u9ED8\u8BA4\u662F 10"]}),"\n"]})]})}function p(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(m,{...n})}):m(n)}},250065:function(n,e,c){c.d(e,{Z:function(){return a},a:function(){return s}});var i=c(667294);let o={},t=i.createContext(o);function s(n){let e=i.useContext(t);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);