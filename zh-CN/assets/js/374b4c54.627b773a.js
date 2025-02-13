"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["940219"],{44700:function(e,r,l){l.r(r),l.d(r,{metadata:()=>n,contentTitle:()=>s,default:()=>t,assets:()=>i,toc:()=>m,frontMatter:()=>c});var n=JSON.parse('{"id":"admin-manual/trouble-shooting/memory-management/memory-analysis/oom-crash-analysis","title":"OOM Killer Crash \u5206\u6790","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/trouble-shooting/memory-management/memory-analysis/oom-crash-analysis.md","sourceDirName":"admin-manual/trouble-shooting/memory-management/memory-analysis","slug":"/admin-manual/trouble-shooting/memory-management/memory-analysis/oom-crash-analysis","permalink":"/zh-CN/docs/admin-manual/trouble-shooting/memory-management/memory-analysis/oom-crash-analysis","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"OOM Killer Crash \u5206\u6790","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u67E5\u8BE2\u62A5\u9519 Memory Tracker Limit Exceeded","permalink":"/zh-CN/docs/admin-manual/trouble-shooting/memory-management/memory-analysis/query-cancelled-after-query-memory-exceeded"},"next":{"title":"\u5185\u5B58\u65E5\u5FD7\u5206\u6790","permalink":"/zh-CN/docs/admin-manual/trouble-shooting/memory-management/memory-analysis/memory-log-analysis"}}'),o=l("785893"),a=l("250065");let c={title:"OOM Killer Crash \u5206\u6790",language:"zh-CN"},s=void 0,i={},m=[{value:"\u627E\u5230\u89E6\u53D1 OOM Killer \u65F6\u95F4\u70B9\u524D\u7684\u5185\u5B58\u65E5\u5FD7",id:"\u627E\u5230\u89E6\u53D1-oom-killer-\u65F6\u95F4\u70B9\u524D\u7684\u5185\u5B58\u65E5\u5FD7",level:2},{value:"\u96C6\u7FA4\u5185\u5B58\u538B\u529B\u8FC7\u5927\u5BFC\u81F4\u89E6\u53D1 OOM Killer",id:"\u96C6\u7FA4\u5185\u5B58\u538B\u529B\u8FC7\u5927\u5BFC\u81F4\u89E6\u53D1-oom-killer",level:2},{value:"\u4E00\u4E9B\u5F02\u5E38\u95EE\u9898\u5BFC\u81F4\u89E6\u53D1 OOM Killer",id:"\u4E00\u4E9B\u5F02\u5E38\u95EE\u9898\u5BFC\u81F4\u89E6\u53D1-oom-killer",level:2},{value:"Memory Tracker \u7EDF\u8BA1\u7F3A\u5931",id:"memory-tracker-\u7EDF\u8BA1\u7F3A\u5931",level:3},{value:"Query Cancel \u8FC7\u7A0B\u4E2D\u5361\u4F4F",id:"query-cancel-\u8FC7\u7A0B\u4E2D\u5361\u4F4F",level:3},{value:"Jemalloc Metadata \u5185\u5B58\u5360\u7528\u5927",id:"jemalloc-metadata-\u5185\u5B58\u5360\u7528\u5927",level:3},{value:"Jemalloc Cache \u5185\u5B58\u5360\u7528\u5927",id:"jemalloc-cache-\u5185\u5B58\u5360\u7528\u5927",level:3}];function d(e){let r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:["\u5982\u679C BE \u8FDB\u7A0B Crash \u540E ",(0,o.jsx)(r.code,{children:"log/be.out"})," \u4E2D\u6CA1\u6709\u62A5\u9519\u4FE1\u606F\uFF0C\u6267\u884C ",(0,o.jsx)(r.code,{children:"dmesg -T"})," \u5982\u679C\u770B\u5230\u4E0B\u9762\u7684\u65E5\u5FD7\uFF0C\u8BF4\u660E\u89E6\u53D1\u4E86 OOM Killer\uFF0C\u53EF\u89C1 ",(0,o.jsx)(r.code,{children:"20240718 15:03:59"})," \u65F6 pid \u4E3A 360303 \u7684 doris_be \u8FDB\u7A0B\u7269\u7406\u5185\u5B58\uFF08anon-rss\uFF09\u7EA6 60 GB\u3002"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"[Thu Jul 18 15:03:59 2024] Out of memory: Killed process 360303 (doris_be) total-vm:213416916kB, anon-rss:62273128kB, file-rss:0kB, shmem-rss:0kB, UID:0 pgtables:337048kB oom_score_adj:0\n"})}),"\n",(0,o.jsx)(r.p,{children:"\u7406\u60F3\u60C5\u51B5\u4E0B\uFF0CDoris \u4F1A\u5B9A\u65F6\u68C0\u6D4B\u64CD\u4F5C\u7CFB\u7EDF\u5269\u4F59\u53EF\u7528\u5185\u5B58\uFF0C\u5E76\u5728\u5185\u5B58\u4E0D\u8DB3\u65F6\u91C7\u53D6\u5305\u62EC\u963B\u6B62\u540E\u7EED\u5185\u5B58\u7533\u8BF7\u3001\u89E6\u53D1\u5185\u5B58 GC \u5728\u5185\u7684\u4E00\u7CFB\u5217\u64CD\u4F5C\u6765\u907F\u514D\u89E6\u53D1 OOM Killer\uFF0C\u4F46\u5237\u65B0\u5185\u5B58\u72B6\u6001\u548C\u5185\u5B58 GC \u90FD\u5177\u6709\u4E00\u5B9A\u7684\u6EDE\u540E\u6027\uFF0C\u5E76\u4E14\u5F88\u96BE\u5B8C\u5168 Catch \u6240\u6709\u5927\u5185\u5B58\u7533\u8BF7\uFF0C\u5728\u96C6\u7FA4\u538B\u529B\u8FC7\u5927\u65F6\u4ECD\u6709\u4E00\u5B9A\u51E0\u7387\u89E6\u53D1 OOM Killer\uFF0C\u5BFC\u81F4 BE \u8FDB\u7A0B Crash\u3002\u6B64\u5916\u5982\u679C\u8FDB\u7A0B\u5185\u5B58\u72B6\u6001\u5F02\u5E38\uFF0C\u5BFC\u81F4\u5185\u5B58 GC \u65E0\u6CD5\u91CA\u653E\u5185\u5B58\uFF0C\u5BFC\u81F4\u8FDB\u7A0B\u5B9E\u9645\u53EF\u7528\u5185\u5B58\u51CF\u5C11\uFF0C\u8FD9\u5C06\u52A0\u5267\u96C6\u7FA4\u7684\u5185\u5B58\u538B\u529B\u3002"}),"\n",(0,o.jsx)(r.p,{children:"\u5982\u679C\u4E0D\u5E78\u89E6\u53D1\u4E86 OOM Killer\uFF0C\u9996\u5148\u4F9D\u636E\u65E5\u5FD7\u5206\u6790 BE \u8FDB\u7A0B\u89E6\u53D1 OOM Killer \u524D\u7684\u5185\u5B58\u72B6\u6001\u548C\u4EFB\u52A1\u6267\u884C\u60C5\u51B5\uFF0C\u7136\u540E\u9488\u5BF9\u6027\u8C03\u53C2\u8BA9\u96C6\u7FA4\u6062\u590D\u7A33\u5B9A\u3002"}),"\n",(0,o.jsx)(r.h2,{id:"\u627E\u5230\u89E6\u53D1-oom-killer-\u65F6\u95F4\u70B9\u524D\u7684\u5185\u5B58\u65E5\u5FD7",children:"\u627E\u5230\u89E6\u53D1 OOM Killer \u65F6\u95F4\u70B9\u524D\u7684\u5185\u5B58\u65E5\u5FD7"}),"\n",(0,o.jsxs)(r.p,{children:["\u89E6\u53D1 OOM Killer \u65F6\u610F\u5473\u7740\u8FDB\u7A0B\u53EF\u7528\u5185\u5B58\u4E0D\u8DB3\uFF0C\u53C2\u8003 ",(0,o.jsx)(r.a,{href:"/zh-CN/docs/admin-manual/trouble-shooting/memory-management/memory-analysis/memory-log-analysis",children:"\u5185\u5B58\u65E5\u5FD7\u5206\u6790"})," \u5728 ",(0,o.jsx)(r.code,{children:"be/log/be.INFO"})," \u89E6\u53D1 OOM Killer \u65F6\u95F4\u70B9\u81EA\u4E0B\u800C\u4E0A\u627E\u5230\u6700\u540E\u4E00\u6B21\u6253\u5370\u7684 ",(0,o.jsx)(r.code,{children:"Memory Tracker Summary"})," \u5173\u952E\u8BCD\u5E76\u5206\u6790 BE \u8FDB\u7A0B\u7684\u4E3B\u8981\u5185\u5B58\u4F4D\u7F6E\u3002"]}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"less be/log/be.INFO"})," \u6253\u5F00\u6587\u4EF6\u540E\uFF0C\u9996\u5148\u8DF3\u8F6C\u5230\u89E6\u53D1 OOM Killer \u5BF9\u5E94\u65F6\u95F4\u7684\u65E5\u5FD7\uFF0C\u4EE5\u4E0A\u9762 ",(0,o.jsx)(r.code,{children:"dmesg -T"})," \u7684\u7ED3\u679C\u4E3A\u4F8B\uFF0C\u8F93\u5165 ",(0,o.jsx)(r.code,{children:"/20240718 15:03:59"})," \u540E\u56DE\u8F66\u641C\u7D22\u5BF9\u5E94\u65F6\u95F4\uFF0C\u5982\u679C\u641C\u4E0D\u5230\uFF0C\u53EF\u80FD\u662F\u89E6\u53D1 OOM Killer \u7684\u65F6\u95F4\u6709\u4E9B\u504F\u5DEE\uFF0C\u53EF\u4EE5\u641C\u7D22 ",(0,o.jsx)(r.code,{children:"/20240718 15:03:"}),"\u3002\u65E5\u5FD7\u8DF3\u8F6C\u5230\u5BF9\u5E94\u65F6\u95F4\u540E\uFF0C\u8F93\u5165 ",(0,o.jsx)(r.code,{children:"/Memory Tracker Summary"})," \u540E\u56DE\u8F66\u641C\u7D20\u5173\u952E\u8BCD\uFF0C\u9ED8\u8BA4\u4F1A\u5728\u65E5\u5FD7\u5411\u4E0B\u641C\u7D22\uFF0C\u5982\u679C\u641C\u7D22\u4E0D\u5230\u6216\u65F6\u95F4\u5BF9\u5E94\u4E0D\u4E0A\uFF0C\u9700\u8981 ",(0,o.jsx)(r.code,{children:"shift + n"})," \u5148\u4E0A\u641C\u7D22\uFF0C\u627E\u5230\u6700\u540E\u4E00\u6B21\u6253\u5370\u7684 ",(0,o.jsx)(r.code,{children:"Memory Tracker Summary"})," \u4EE5\u53CA\u540C\u65F6\u6253\u5370\u7684 ",(0,o.jsx)(r.code,{children:"Process Memory Summary"})," \u5185\u5B58\u65E5\u5FD7\u3002"]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"\u96C6\u7FA4\u5185\u5B58\u538B\u529B\u8FC7\u5927\u5BFC\u81F4\u89E6\u53D1-oom-killer",children:"\u96C6\u7FA4\u5185\u5B58\u538B\u529B\u8FC7\u5927\u5BFC\u81F4\u89E6\u53D1 OOM Killer"}),"\n",(0,o.jsx)(r.p,{children:"\u82E5\u6EE1\u8DB3\u5982\u4E0B\u73B0\u8C61\uFF0C\u90A3\u4E48\u53EF\u4EE5\u8BA4\u4E3A\u662F\u96C6\u7FA4\u5185\u5B58\u538B\u529B\u8FC7\u5927\uFF0C\u5BFC\u81F4\u5728\u67D0\u4E00\u65F6\u523B\u8FDB\u7A0B\u5185\u5B58\u72B6\u6001\u6CA1\u6709\u53CA\u65F6\u5237\u65B0\uFF0C\u5185\u5B58 GC \u6CA1\u80FD\u53CA\u65F6\u91CA\u653E\u5185\u5B58\uFF0C\u5BFC\u81F4\u6CA1\u80FD\u6709\u6548\u63A7\u5236 BE \u8FDB\u7A0B\u5185\u5B58\u3002"}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsx)(r.p,{children:"Doris 2.1 \u4E4B\u524D Memory GC \u8FD8\u4E0D\u5B8C\u5584\uFF0C\u5185\u5B58\u6301\u7EED\u7D27\u5F20\u65F6\u5F80\u5F80\u66F4\u5BB9\u6613\u89E6\u53D1 OOM Killer\u3002"}),"\n"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["\u5BF9 ",(0,o.jsx)(r.code,{children:"Memory Tracker Summary"})," \u7684\u5206\u6790\u53D1\u73B0\u67E5\u8BE2\u548C\u5176\u4ED6\u4EFB\u52A1\u3001\u5404\u4E2A Cache\u3001\u5143\u6570\u636E\u7B49\u5185\u5B58\u4F7F\u7528\u90FD\u5408\u7406\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:"\u5BF9\u5E94\u65F6\u95F4\u6BB5\u7684 BE \u8FDB\u7A0B\u5185\u5B58\u76D1\u63A7\u663E\u793A\u957F\u65F6\u95F4\u7EF4\u6301\u5728\u8F83\u9AD8\u7684\u5185\u5B58\u4F7F\u7528\u7387\uFF0C\u4E0D\u5B58\u5728\u5185\u5B58\u6CC4\u6F0F\u7684\u8FF9\u8C61"}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["\u5B9A\u4F4D ",(0,o.jsx)(r.code,{children:"be/log/be.INFO"})," \u4E2D OOM Killer \u65F6\u95F4\u70B9\u524D\u7684\u5185\u5B58\u65E5\u5FD7\uFF0C\u81EA\u4E0B\u800C\u4E0A\u641C\u7D22 ",(0,o.jsx)(r.code,{children:"GC"})," \u5173\u952E\u5B57\uFF0C\u53D1\u73B0 BE \u8FDB\u7A0B\u9891\u7E41\u6267\u884C\u5185\u5B58 GC\u3002"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["\u6B64\u65F6\u53C2\u8003 ",(0,o.jsx)(r.a,{href:"../../../admin-manual/config/be-config.md",children:"BE \u914D\u7F6E\u9879"})," \u5728",(0,o.jsx)(r.code,{children:"be/conf/be.conf"}),"\u4E2D\u8C03\u5C0F",(0,o.jsx)(r.code,{children:"mem_limit"}),"\uFF0C\u8C03\u5927 ",(0,o.jsx)(r.code,{children:"max_sys_mem_available_low_water_mark_bytes"}),"\uFF0C\u6709\u5173\u5185\u5B58\u9650\u5236\u548C\u6C34\u4F4D\u7EBF\u8BA1\u7B97\u65B9\u6CD5\u3001\u5185\u5B58 GC \u7684\u66F4\u591A\u4ECB\u7ECD\u89C1 ",(0,o.jsx)(r.a,{href:"/zh-CN/docs/admin-manual/trouble-shooting/memory-management/memory-feature/memory-control-strategy",children:"\u5185\u5B58\u63A7\u5236\u7B56\u7565"}),"\u3002"]}),"\n",(0,o.jsxs)(r.p,{children:["\u6B64\u5916\u8FD8\u53EF\u4EE5\u8C03\u8282\u5176\u4ED6\u53C2\u6570\u63A7\u5236\u5185\u5B58\u72B6\u6001\u5237\u65B0\u548C GC\uFF0C\u5305\u62EC ",(0,o.jsx)(r.code,{children:"memory_gc_sleep_time_ms"}),"\uFF0C",(0,o.jsx)(r.code,{children:"soft_mem_limit_frac"}),"\uFF0C",(0,o.jsx)(r.code,{children:"memory_maintenance_sleep_time_ms"}),"\uFF0C",(0,o.jsx)(r.code,{children:"process_minor_gc_size"}),"\uFF0C",(0,o.jsx)(r.code,{children:"process_full_gc_size"}),"\uFF0C",(0,o.jsx)(r.code,{children:"enable_query_memory_overcommit"}),"\uFF0C",(0,o.jsx)(r.code,{children:"thread_wait_gc_max_milliseconds"})," \u7B49\u3002"]}),"\n",(0,o.jsx)(r.h2,{id:"\u4E00\u4E9B\u5F02\u5E38\u95EE\u9898\u5BFC\u81F4\u89E6\u53D1-oom-killer",children:"\u4E00\u4E9B\u5F02\u5E38\u95EE\u9898\u5BFC\u81F4\u89E6\u53D1 OOM Killer"}),"\n",(0,o.jsx)(r.p,{children:"\u82E5\u4E0D\u6EE1\u8DB3\u96C6\u7FA4\u5185\u5B58\u538B\u529B\u8FC7\u5927\u7684\u73B0\u8C61\uFF0C\u90A3\u4E48\u53EF\u80FD\u6B64\u65F6\u5185\u5B58\u72B6\u6001\u5F02\u5E38\uFF0C\u5185\u5B58 GC \u53EF\u80FD\u65E0\u6CD5\u53CA\u65F6\u91CA\u653E\u5185\u5B58\uFF0C\u4E0B\u9762\u5217\u4E3E\u4E00\u4E9B\u5E38\u89C1\u7684\u5BFC\u81F4\u89E6\u53D1 OOM Killer \u7684\u5F02\u5E38\u95EE\u9898\u3002"}),"\n",(0,o.jsx)(r.h3,{id:"memory-tracker-\u7EDF\u8BA1\u7F3A\u5931",children:"Memory Tracker \u7EDF\u8BA1\u7F3A\u5931"}),"\n",(0,o.jsxs)(r.p,{children:["\u82E5\u65E5\u5FD7 ",(0,o.jsx)(r.code,{children:"Memory Tracker Summary"})," \u4E2D ",(0,o.jsx)(r.code,{children:"Label=process resident memory"})," Memory Tracker \u51CF\u53BB ",(0,o.jsx)(r.code,{children:"Label=sum of all trackers"})," Memory Tracker \u5DEE\u503C\u8F83\u5927\uFF0C\u6216\u8005 Orphan Memory Tracker \u503C\u8FC7\u5927\uFF0C\u8BF4\u660E Memory Tracker \u5B58\u5728\u7EDF\u8BA1\u7F3A\u5931\uFF0C\u53C2\u8003 ",(0,o.jsx)(r.a,{href:"/zh-CN/docs/admin-manual/trouble-shooting/memory-management/memory-feature/memory-tracker",children:"\u5185\u5B58\u8DDF\u8E2A\u5668"})," \u4E2D [Memory Tracker \u7EDF\u8BA1\u7F3A\u5931] \u7AE0\u8282\u8FDB\u4E00\u6B65\u5206\u6790\u3002"]}),"\n",(0,o.jsx)(r.h3,{id:"query-cancel-\u8FC7\u7A0B\u4E2D\u5361\u4F4F",children:"Query Cancel \u8FC7\u7A0B\u4E2D\u5361\u4F4F"}),"\n",(0,o.jsxs)(r.p,{children:["\u518D ",(0,o.jsx)(r.code,{children:"be/log/be.INFO"})," \u65E5\u5FD7\u4E2D\u5B9A\u4F4D\u5230 OOM Killer \u7684\u65F6\u95F4\u70B9\uFF0C\u7136\u540E\u5728\u4E0A\u4E0B\u6587\u641C\u7D22 ",(0,o.jsx)(r.code,{children:"Memory Tracker Summary"})," \u627E\u5230\u8FDB\u7A0B\u5185\u5B58\u7EDF\u8BA1\u65E5\u5FD7\uFF0C\u82E5 ",(0,o.jsx)(r.code,{children:"Memory Tracker Summary"})," \u4E2D\u5B58\u5728\u4F7F\u7528\u5185\u5B58\u8F83\u5927\u7684 Query\u3002\u6267\u884C ",(0,o.jsx)(r.code,{children:"grep {queryID} be/log/be.INFO"})," \u786E\u8BA4\u662F\u5426\u6709 ",(0,o.jsx)(r.code,{children:"Cancel"})," \u5173\u952E\u8BCD\u7684\u65E5\u5FD7\uFF0C\u5BF9\u5E94\u65F6\u95F4\u70B9\u5C31\u662F Query \u88AB Cancel \u7684\u65F6\u95F4\uFF0C\u82E5\u8BE5 Query \u5DF2\u7ECF\u88AB Cancel\uFF0C\u4E14 Query \u88AB Cancel \u7684\u65F6\u95F4\u70B9\u548C\u89E6\u53D1 OOM Killer \u7684\u65F6\u95F4\u70B9\u76F8\u9694\u8F83\u4E45\uFF0C\u53C2\u8003 ",(0,o.jsx)(r.a,{href:"./memory-issue-faq.md",children:"\u5185\u5B58\u95EE\u9898 FAQ"})," \u4E2D\u5BF9 [Query Cancel \u8FC7\u7A0B\u4E2D\u5361\u4F4F] \u7684\u5206\u6790\u3002\u6709\u5173 ",(0,o.jsx)(r.code,{children:"Memory Tracker Summary"})," \u7684\u5206\u6790\u53C2\u8003 ",(0,o.jsx)(r.a,{href:"/zh-CN/docs/admin-manual/trouble-shooting/memory-management/memory-analysis/memory-log-analysis",children:"\u5185\u5B58\u65E5\u5FD7\u5206\u6790"}),"\u3002"]}),"\n",(0,o.jsx)(r.h3,{id:"jemalloc-metadata-\u5185\u5B58\u5360\u7528\u5927",children:"Jemalloc Metadata \u5185\u5B58\u5360\u7528\u5927"}),"\n",(0,o.jsxs)(r.p,{children:["\u5185\u5B58 GC \u76EE\u524D\u65E0\u6CD5\u91CA\u653E Jemalloc Metadata\uFF0C\u53C2\u8003 ",(0,o.jsx)(r.a,{href:"/zh-CN/docs/admin-manual/trouble-shooting/memory-management/memory-feature/memory-tracker",children:"\u5185\u5B58\u8DDF\u8E2A\u5668"})," \u4E2D\u5BF9 ",(0,o.jsx)(r.code,{children:"Label=tc/jemalloc_metadata"})," Memory Tracker \u7684\u5206\u6790\uFF0C\u51CF\u5C11\u5185\u5B58\u4F7F\u7528\u3002"]}),"\n",(0,o.jsx)(r.h3,{id:"jemalloc-cache-\u5185\u5B58\u5360\u7528\u5927",children:"Jemalloc Cache \u5185\u5B58\u5360\u7528\u5927"}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsx)(r.p,{children:"\u5E38\u89C1\u4E8E Doris 2.0"}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["Doris 2.0 ",(0,o.jsx)(r.code,{children:"be.conf"})," \u4E2D ",(0,o.jsx)(r.code,{children:"JEMALLOC_CONF"})," \u7684 ",(0,o.jsx)(r.code,{children:"lg_tcache_max"})," \u9ED8\u8BA4\u503C\u662F 20\uFF0C\u8FD9\u5728\u67D0\u4E9B\u573A\u666F\u4F1A\u5BFC\u81F4 Jemalloc Cache \u592A\u5927\u4E14\u65E0\u6CD5\u81EA\u52A8\u91CA\u653E\uFF0C\u53C2\u8003 ",(0,o.jsx)(r.a,{href:"/zh-CN/docs/admin-manual/trouble-shooting/memory-management/memory-analysis/jemalloc-memory-analysis",children:"Jemalloc \u5185\u5B58\u5206\u6790"})," \u51CF\u5C11 Jemalloc Cache \u5185\u5B58\u5360\u7528\u3002"]})]})}function t(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},250065:function(e,r,l){l.d(r,{Z:function(){return s},a:function(){return c}});var n=l(667294);let o={},a=n.createContext(o);function c(e){let r=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);