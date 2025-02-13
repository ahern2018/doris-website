"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["433542"],{684826:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>u,assets:()=>o,toc:()=>l,frontMatter:()=>a});var s=JSON.parse('{"id":"admin-manual/workload-management/analysis-diagnosis","title":"\u5DE5\u4F5C\u8D1F\u8F7D\u5206\u6790\u4E0E\u8BCA\u65AD","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/workload-management/analysis-diagnosis.md","sourceDirName":"admin-manual/workload-management","slug":"/admin-manual/workload-management/analysis-diagnosis","permalink":"/zh-CN/docs/3.0/admin-manual/workload-management/analysis-diagnosis","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"\u5DE5\u4F5C\u8D1F\u8F7D\u5206\u6790\u4E0E\u8BCA\u65AD","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Workload Group","permalink":"/zh-CN/docs/3.0/admin-manual/workload-management/workload-group"},"next":{"title":"\u5E76\u53D1\u63A7\u5236\u4E0E\u6392\u961F","permalink":"/zh-CN/docs/3.0/admin-manual/workload-management/concurrency-control-and-queuing"}}'),i=r("785893"),t=r("250065");let a={title:"\u5DE5\u4F5C\u8D1F\u8F7D\u5206\u6790\u4E0E\u8BCA\u65AD",language:"zh-CN"},d=void 0,o={},l=[{value:"\u8FD0\u884C\u65F6\u7684\u5DE5\u4F5C\u8D1F\u8F7D\u5206\u6790",id:"\u8FD0\u884C\u65F6\u7684\u5DE5\u4F5C\u8D1F\u8F7D\u5206\u6790",level:2},{value:"\u901A\u8FC7\u5386\u53F2\u6570\u636E\u5206\u6790\u5DE5\u4F5C\u8D1F\u8F7D",id:"\u901A\u8FC7\u5386\u53F2\u6570\u636E\u5206\u6790\u5DE5\u4F5C\u8D1F\u8F7D",level:2},{value:"\u5E38\u7528 SQL",id:"\u5E38\u7528-sql",level:2}];function c(e){let n={admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u96C6\u7FA4\u7684\u5DE5\u4F5C\u8D1F\u8F7D\u5206\u6790\u4E3B\u8981\u5206\u6210\u4E24\u4E2A\u9636\u6BB5\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7B2C\u4E00\u4E2A\u662F\u8FD0\u884C\u65F6\u7684\u5DE5\u4F5C\u8D1F\u8F7D\u5206\u6790\uFF0C\u5F53\u96C6\u7FA4\u53EF\u7528\u6027\u4E0B\u964D\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u76D1\u63A7\u53D1\u73B0\u8D44\u6E90\u5F00\u9500\u6BD4\u8F83\u5927\u7684\u67E5\u8BE2\uFF0C\u5E76\u8FDB\u884C\u964D\u7EA7\u5904\u7406\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u7B2C\u4E8C\u4E2A\u662F\u5206\u6790\u5386\u53F2\u6570\u636E\uFF0C\u6BD4\u5982\u5BA1\u8BA1\u65E5\u5FD7\u8868\u7B49\uFF0C\u627E\u51FA\u4E0D\u5408\u7406\u7684\u5DE5\u4F5C\u8D1F\u8F7D\uFF0C\u5E76\u8FDB\u884C\u4F18\u5316\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8FD0\u884C\u65F6\u7684\u5DE5\u4F5C\u8D1F\u8F7D\u5206\u6790",children:"\u8FD0\u884C\u65F6\u7684\u5DE5\u4F5C\u8D1F\u8F7D\u5206\u6790"}),"\n",(0,i.jsx)(n.p,{children:"\u5F53\u901A\u8FC7\u76D1\u63A7\u53D1\u73B0\u96C6\u7FA4\u7684\u53EF\u7528\u6027\u4E0B\u964D\u65F6\uFF0C\u53EF\u4EE5\u6309\u7167\u4EE5\u4E0B\u6D41\u7A0B\u8FDB\u884C\u5904\u7406\uFF1A"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u5148\u901A\u8FC7\u76D1\u63A7\u5927\u81F4\u5224\u65AD\u76EE\u524D\u96C6\u7FA4\u7684\u74F6\u9888\u70B9\uFF0C\u6BD4\u5982\u662F\u5185\u5B58\u7528\u91CF\u8FC7\u9AD8\uFF0CCPU \u7528\u91CF\u8FC7\u9AD8\uFF0C\u8FD8\u662F IO \u8FC7\u9AD8\uFF0C\u5982\u679C\u90FD\u5F88\u9AD8\uFF0C\u90A3\u4E48\u53EF\u4EE5\u8003\u8651\u4F18\u5148\u89E3\u51B3\u5185\u5B58\u7684\u95EE\u9898\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u786E\u5B9A\u4E86\u96C6\u7FA4\u74F6\u9888\u70B9\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7 workload_group_resource_usage \u8868\u6765\u67E5\u770B\u76EE\u524D\u8D44\u6E90\u7528\u91CF\u6700\u9AD8\u7684 Group\uFF0C\u6BD4\u5982\u662F\u5185\u5B58\u74F6\u9888\uFF0C\u90A3\u4E48\u53EF\u4EE5\u5148\u627E\u51FA\u5185\u5B58\u7528\u91CF\u6700\u9AD8\u7684 N \u4E2A Group\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u786E\u5B9A\u4E86\u8D44\u6E90\u7528\u91CF\u6700\u9AD8\u7684 Group \u4E4B\u540E\uFF0C\u9996\u5148\u53EF\u4EE5\u5C1D\u8BD5\u8C03\u4F4E\u8FD9\u4E2A Group \u7684\u67E5\u8BE2\u5E76\u53D1\uFF0C\u56E0\u4E3A\u6B64\u65F6\u96C6\u7FA4\u8D44\u6E90\u5DF2\u7ECF\u5F88\u7D27\u5F20\u4E86\uFF0C\u8981\u907F\u514D\u6301\u7EED\u6709\u65B0\u7684\u67E5\u8BE2\u8FDB\u6765\u8017\u5C3D\u96C6\u7FA4\u7684\u8D44\u6E90\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5BF9\u5F53\u524D Group \u7684\u67E5\u8BE2\u8FDB\u884C\u964D\u7EA7\uFF0C\u6839\u636E\u74F6\u9888\u70B9\u7684\u4E0D\u540C\uFF0C\u53EF\u4EE5\u6709\u4E0D\u540C\u7684\u5904\u7406\u65B9\u6CD5\uFF1A"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5982\u679C\u662F CPU \u74F6\u9888\uFF0C\u90A3\u4E48\u53EF\u4EE5\u5C1D\u8BD5\u628A\u8FD9\u4E2A Group \u7684 CPU \u4FEE\u6539\u4E3A\u786C\u9650\uFF0C\u5E76\u5C06 cpu_hard_limit \u8BBE\u7F6E\u4E3A\u4E00\u4E2A\u8F83\u4F4E\u7684\u503C\uFF0C\u4E3B\u52A8\u8BA9\u51FA CPU \u8D44\u6E90\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5982\u679C\u662F IO \u74F6\u9888\uFF0C\u53EF\u4EE5\u901A\u8FC7 read_bytes_per_second \u53C2\u6570\u9650\u5236\u8BE5 Group \u7684\u6700\u5927 IO\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5982\u679C\u662F\u5185\u5B58\u74F6\u9888\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E\u8BE5 Group \u7684\u5185\u5B58\u4E3A\u786C\u9650\uFF0C\u5E76\u8C03\u4F4E memory_limit \u7684\u503C\uFF0C\u6765\u91CA\u653E\u90E8\u5206\u5185\u5B58\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\u8FD9\u53EF\u80FD\u4F1A\u5BFC\u81F4\u5F53\u524D Group \u5927\u91CF\u67E5\u8BE2\u5931\u8D25\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:"\u5B8C\u6210\u4EE5\u4E0A\u6B65\u9AA4\u540E\uFF0C\u901A\u5E38\u96C6\u7FA4\u7684\u53EF\u7528\u6027\u4F1A\u6709\u6240\u6062\u590D\u3002\u6B64\u65F6\u53EF\u4EE5\u505A\u66F4\u8FDB\u4E00\u6B65\u7684\u5206\u6790\uFF0C\u4E5F\u5C31\u662F\u5F15\u8D77\u8BE5 Group \u8D44\u6E90\u7528\u91CF\u5347\u9AD8\u7684\u4E3B\u8981\u539F\u56E0\uFF0C\n\u662F\u8FD9\u4E2A Group \u7684\u6574\u4F53\u67E5\u8BE2\u5E76\u53D1\u5347\u9AD8\u5BFC\u81F4\u7684\u8FD8\u662F\u67D0\u4E9B\u5927\u67E5\u8BE2\u5BFC\u81F4\u7684\uFF0C\u5982\u679C\u662F\u67D0\u4E9B\u5927\u67E5\u8BE2\u5BFC\u81F4\u7684\uFF0C\u90A3\u4E48\u53EF\u4EE5\u901A\u8FC7\u5FEB\u901F\u6740\u6B7B\u8FD9\u4E9B\u5927\u67E5\u8BE2\u7684\u65B9\u5F0F\u8FDB\u884C\u6545\u969C\u6062\u590D\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u53EF\u4EE5\u4F7F\u7528 backend_active_tasks \u7ED3\u5408 active_queries \u627E\u51FA\u76EE\u524D\u96C6\u7FA4\u4E2D\u8D44\u6E90\u7528\u91CF\u6BD4\u8F83\u5F02\u5E38\u7684 SQL\uFF0C\u7136\u540E\u901A\u8FC7 kill \u8BED\u53E5\u6740\u6B7B\u8FD9\u4E9B SQL \u91CA\u653E\u8D44\u6E90\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u901A\u8FC7\u5386\u53F2\u6570\u636E\u5206\u6790\u5DE5\u4F5C\u8D1F\u8F7D",children:"\u901A\u8FC7\u5386\u53F2\u6570\u636E\u5206\u6790\u5DE5\u4F5C\u8D1F\u8F7D"}),"\n",(0,i.jsx)(n.p,{children:"\u76EE\u524D Doris \u7684\u5BA1\u8BA1\u65E5\u5FD7\u8868\u4E2D\u7559\u5B58\u4E86 sql \u6267\u884C\u65F6\u7684\u7B80\u8981\u4FE1\u606F\uFF0C\u53EF\u4EE5\u7528\u4E8E\u627E\u51FA\u5386\u53F2\u4E0A\u6267\u884C\u8FC7\u7684\u4E0D\u5408\u7406\u7684\u67E5\u8BE2\uFF0C\u7136\u540E\u505A\u51FA\u4E00\u4E9B\u8C03\u6574\uFF0C\u5177\u4F53\u6D41\u7A0B\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u67E5\u770B\u76D1\u63A7\u786E\u8BA4\u96C6\u7FA4\u5386\u53F2\u7684\u8D44\u6E90\u7528\u91CF\u60C5\u51B5\uFF0C\u627E\u51FA\u96C6\u7FA4\u7684\u74F6\u9888\u70B9\uFF0C\u6BD4\u5982\u662F CPU\uFF0C\u5185\u5B58\u8FD8\u662F IO\u3002"}),"\n",(0,i.jsxs)(n.li,{children:["\u786E\u5B9A\u4E86\u96C6\u7FA4\u7684\u74F6\u9888\u70B9\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5BA1\u8BA1\u65E5\u5FD7\u8868\u627E\u51FA\u5BF9\u5E94\u65F6\u6BB5\u8D44\u6E90\u7528\u91CF\u6BD4\u8F83\u5F02\u5E38\u7684 SQL\uFF0C\u5F02\u5E38 SQL \u6709\u4E24\u79CD\u5B9A\u4E49\u65B9\u5F0F\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u7528\u6237\u5BF9\u4E8E\u96C6\u7FA4\u4E2D SQL \u8D44\u6E90\u7684\u4F7F\u7528\u91CF\u6709\u4E00\u5B9A\u7684\u9884\u671F\uFF0C\u6BD4\u5982\u5927\u90E8\u5206\u5EF6\u8FDF\u90FD\u662F\u79D2\u7EA7\uFF0C\u626B\u63CF\u884C\u6570\u5728\u5343\u4E07\uFF0C\u90A3\u4E48\u5F53\u6709\u626B\u63CF\u884C\u6570\u5728\u4EBF\u7EA7\u522B\u5341\u4EBF\u7EA7\u522B\u7684 SQL\uFF0C\u5C31\u5C5E\u4E8E\u5F02\u5E38 SQL\uFF0C\u9700\u8981\u4EBA\u5DE5\u8FDB\u884C\u5904\u7406"}),"\n",(0,i.jsx)(n.li,{children:"\u7528\u6237\u5982\u679C\u5BF9\u4E8E\u96C6\u7FA4\u4E2D SQL \u8D44\u6E90\u7528\u91CF\u4E5F\u6CA1\u6709\u9884\u671F\uFF0C\u8FD9\u4E2A\u65F6\u5019\u53EF\u4EE5\u901A\u8FC7\u767E\u5206\u4F4D\u51FD\u6570\u8BA1\u7B97\u8D44\u6E90\u7528\u91CF\u7684\u65B9\u5F0F\uFF0C\u627E\u51FA\u8D44\u6E90\u7528\u91CF\u6BD4\u8F83\u5F02\u5E38\u7684 SQL\u3002\u4EE5 CPU \u74F6\u9888\u4E3A\u4F8B\uFF0C\u53EF\u4EE5\u5148\u8BA1\u7B97\u5386\u53F2\u65F6\u95F4\u6BB5\u5185\u67E5\u8BE2 CPU \u65F6\u95F4\u7684 tp50/tp75/tp99/tp999\uFF0C\u4EE5\u8BE5\u503C\u4E3A\u6B63\u5E38\u503C\uFF0C\u5BF9\u7167\u5F53\u524D\u96C6\u7FA4\u76F8\u540C\u65F6\u95F4\u6BB5\u5185\u67E5\u8BE2 CPU \u65F6\u95F4\u7684\u767E\u5206\u4F4D\u51FD\u6570\uFF0C\u6BD4\u5982\u5386\u53F2\u65F6\u6BB5\u7684 tp999 \u4E3A 1min\uFF0C\u4F46\u662F\u5F53\u524D\u96C6\u7FA4\u76F8\u540C\u65F6\u6BB5 CPU \u65F6\u95F4\u7684 tp50 \u5C31\u5DF2\u7ECF\u662F 1min\uFF0C\u8BF4\u660E\u5F53\u524D\u65F6\u6BB5\u5185\u76F8\u6BD4\u4E8E\u5386\u53F2\u51FA\u73B0\u4E86\u5927\u91CF\u7684 CPU \u65F6\u95F4\u5728 1min \u4EE5\u4E0A\u7684 sql\uFF0C\u90A3\u4E48 CPU \u65F6\u95F4\u5927\u4E8E 1min \u7684 SQL \u5C31\u53EF\u4EE5\u5B9A\u4E49\u4E3A\u5F02\u5E38 SQL\u3002\u5176\u4ED6\u6307\u6807\u7684\u5F02\u5E38\u503C\u7684\u67E5\u770B\u4E5F\u662F\u540C\u7406\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"\u5BF9\u8D44\u6E90\u7528\u91CF\u5F02\u5E38\u7684 SQL \u8FDB\u884C\u4F18\u5316\uFF0C\u6BD4\u5982 SQL \u6539\u5199\uFF0C\u8868\u7ED3\u6784\u4F18\u5316\uFF0C\u5E76\u884C\u5EA6\u8C03\u8282\u7B49\u65B9\u5F0F\u964D\u4F4E\u5355 SQL \u7684\u8D44\u6E90\u7528\u91CF\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5982\u679C\u901A\u8FC7\u5BA1\u8BA1\u8868\u53D1\u73B0 SQL \u7684\u8D44\u6E90\u7528\u91CF\u90FD\u6BD4\u8F83\u6B63\u5E38\uFF0C\u90A3\u4E48\u53EF\u4EE5\u901A\u8FC7\u76D1\u63A7\u548C\u5BA1\u8BA1\u67E5\u770B\u5F53\u65F6\u6267\u884C\u7684 SQL \u7684\u6570\u91CF\u76F8\u6BD4\u4E8E\u5386\u53F2\u65F6\u671F\u662F\u5426\u6709\u589E\u52A0\uFF0C\u5982\u679C\u6709\u7684\u8BDD\uFF0C\u53EF\u4EE5\u8DDF\u4E0A\u6E38\u4E1A\u52A1\u786E\u8BA4\u5BF9\u5E94\u65F6\u95F4\u6BB5\u4E0A\u6E38\u7684\u8BBF\u95EE\u6D41\u91CF\u662F\u5426\u6709\u589E\u52A0\uFF0C\u4ECE\u800C\u9009\u62E9\u662F\u8FDB\u884C\u96C6\u7FA4\u6269\u5BB9\u8FD8\u662F\u6392\u961F\u9650\u6D41\u64CD\u4F5C\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5E38\u7528-sql",children:"\u5E38\u7528 SQL"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0Cactive_queries \u8868\u8BB0\u5F55\u4E86\u5728 FE \u8FD0\u884C\u7684 query\uFF0Cbackend_active_tasks \u8BB0\u5F55\u4E86\u5728 BE \u8FD0\u884C\u7684 query\uFF0C\u5E76\u975E\u6240\u6709 query \u8FD0\u884C\u65F6\u5728 FE \u6CE8\u518C\uFF0C\u6BD4\u5982 stream load \u5C31\u5E76\u672A\u5728 FE \u6CE8\u518C\u3002\n\u56E0\u6B64\u4F7F\u7528 backend_active_tasks \u8868 left join active_queries \u5982\u679C\u6CA1\u6709\u5339\u914D\u7684\u7ED3\u679C\u5C5E\u4E8E\u6B63\u5E38\u60C5\u51B5\u3002\n\u5F53\u4E00\u4E2A Query \u662F select \u67E5\u8BE2\u65F6\uFF0C\u90A3\u4E48 active_queries \u548C backend_active_tasks \u4E2D\u8BB0\u5F55\u7684 queryId \u662F\u4E00\u81F4\u7684\u3002\u5F53\u4E00\u4E2A Query \u662F stream load \u65F6\uFF0C\u90A3\u4E48\u5728 active_queries \u8868\u4E2D\u7684 queryId \u4E3A\u7A7A\uFF0Cbackend_active_tasks \u7684 queryId \u662F\u8BE5 stream load \u7684 Id\u3002"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u67E5\u770B\u76EE\u524D\u6240\u6709\u7684 Workload Group \u5E76\u4F9D\u6B21\u6309\u7167\u5185\u5B58/CPU/IO \u964D\u5E8F\u663E\u793A\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"select be_id,workload_group_id,memory_usage_bytes,cpu_usage_percent,local_scan_bytes_per_second \n   from workload_group_resource_usage\norder by  memory_usage_bytes,cpu_usage_percent,local_scan_bytes_per_second desc\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"CPU \u4F7F\u7528 topN \u7684 sql"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"select \n        t1.query_id as be_query_id,\n        t1.query_type,\n        t2.query_id,\n        t2.workload_group_id,\n        t2.`database`,\n        t1.cpu_time,\n        t2.`sql`\nfrom\n(select query_id, query_type,sum(task_cpu_time_ms) as cpu_time from backend_active_tasks group by query_id, query_type) \n        t1 left join active_queries t2\non t1.query_id = t2.query_id\norder by cpu_time desc limit 10;\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5185\u5B58\u4F7F\u7528 topN \u7684 sql"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"select \n        t1.query_id as be_query_id,\n        t1.query_type,\n        t2.query_id,\n        t2.workload_group_id,\n        t1.mem_used\nfrom\n(select query_id, query_type, sum(current_used_memory_bytes) as mem_used from backend_active_tasks group by query_id, query_type) \n        t1 left join active_queries t2\non t1.query_id = t2.query_id \norder by mem_used desc limit 10;\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u626B\u63CF\u6570\u636E\u91CF topN \u7684 sql"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"select \n        t1.query_id as be_query_id,\n        t1.query_type,\n        t2.query_id,\n        t2.workload_group_id,\n        t1.scan_rows,\n        t1.scan_bytes\nfrom\n(select query_id, query_type, sum(scan_rows) as scan_rows,sum(scan_bytes) as scan_bytes from backend_active_tasks group by query_id,query_type) \n        t1 left join active_queries t2\non t1.query_id = t2.query_id \norder by scan_rows desc,scan_bytes desc limit 10;\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5404\u4E2A workload group \u7684 scan \u6570\u636E\u91CF"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"select \n        t2.workload_group_id,\n        sum(t1.scan_rows) as wg_scan_rows,\n        sum(t1.scan_bytes) as wg_scan_bytes\nfrom\n(select query_id, sum(scan_rows) as scan_rows,sum(scan_bytes) as scan_bytes from backend_active_tasks group by query_id) \n        t1 left join active_queries t2\non t1.query_id = t2.query_id \ngroup by t2.workload_group_id\norder by wg_scan_rows desc,wg_scan_bytes desc\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u67E5\u770B\u5404\u4E2A workload group \u6392\u961F\u7684\u90FD\u662F\u54EA\u4E9B\u67E5\u8BE2\uFF0C\u4EE5\u53CA\u6392\u961F\u7684\u65F6\u95F4"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"select \n         workload_group_id,\n         query_id,\n         query_status,\n         now() - queue_start_time as queued_time\nfrom \n     active_queries\nwhere query_status='queued'\norder by workload_group_id\n"})}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return a}});var s=r(667294);let i={},t=s.createContext(i);function a(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);