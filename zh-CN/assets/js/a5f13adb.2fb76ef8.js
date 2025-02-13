"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["120345"],{435597:function(e,r,a){a.r(r),a.d(r,{metadata:()=>i,contentTitle:()=>m,default:()=>B,assets:()=>o,toc:()=>t,frontMatter:()=>s});var i=JSON.parse('{"id":"admin-manual/trouble-shooting/memory-management/memory-analysis/memory-log-analysis","title":"\u5185\u5B58\u65E5\u5FD7\u5206\u6790","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/trouble-shooting/memory-management/memory-analysis/memory-log-analysis.md","sourceDirName":"admin-manual/trouble-shooting/memory-management/memory-analysis","slug":"/admin-manual/trouble-shooting/memory-management/memory-analysis/memory-log-analysis","permalink":"/zh-CN/docs/3.0/admin-manual/trouble-shooting/memory-management/memory-analysis/memory-log-analysis","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"\u5185\u5B58\u65E5\u5FD7\u5206\u6790","language":"zh-CN"},"sidebar":"docs","previous":{"title":"OOM Killer Crash \u5206\u6790","permalink":"/zh-CN/docs/3.0/admin-manual/trouble-shooting/memory-management/memory-analysis/oom-crash-analysis"},"next":{"title":"Heap Profile \u5206\u6790\u5185\u5B58","permalink":"/zh-CN/docs/3.0/admin-manual/trouble-shooting/memory-management/memory-analysis/heap-profile-memory-analysis"}}'),l=a("785893"),n=a("250065");let s={title:"\u5185\u5B58\u65E5\u5FD7\u5206\u6790",language:"zh-CN"},m=void 0,o={},t=[{value:"\u8FDB\u7A0B\u5185\u5B58\u72B6\u6001\u65E5\u5FD7\u5206\u6790",id:"\u8FDB\u7A0B\u5185\u5B58\u72B6\u6001\u65E5\u5FD7\u5206\u6790",level:2},{value:"\u8FDB\u7A0B\u5185\u5B58\u7EDF\u8BA1\u65E5\u5FD7\u5206\u6790",id:"\u8FDB\u7A0B\u5185\u5B58\u7EDF\u8BA1\u65E5\u5FD7\u5206\u6790",level:2}];function c(e){let r={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.code,{children:"be/log/be.INFO"})," \u4E2D\u7684\u8FDB\u7A0B\u5185\u5B58\u65E5\u5FD7\u4E3B\u8981\u5206\u4E3A\u4E24\u7C7B\uFF0C\u4E00\u662F\u8FDB\u7A0B\u5185\u5B58\u72B6\u6001\u65E5\u5FD7\uFF0C\u5305\u62EC\u8FDB\u7A0B\u5185\u5B58\u5927\u5C0F\u548C\u7CFB\u7EDF\u5269\u4F59\u53EF\u7528\u5185\u5B58\u5927\u5C0F\u3002\u4E8C\u662F\u66F4\u52A0\u8BE6\u7EC6\u7684\u8FDB\u7A0B\u5185\u5B58\u7EDF\u8BA1\u65E5\u5FD7\uFF0C\u5305\u542B Memory Tracker \u7EDF\u8BA1\u7684\u5185\u5B58\u5927\u5C0F\u3002"]}),"\n",(0,l.jsx)(r.h2,{id:"\u8FDB\u7A0B\u5185\u5B58\u72B6\u6001\u65E5\u5FD7\u5206\u6790",children:"\u8FDB\u7A0B\u5185\u5B58\u72B6\u6001\u65E5\u5FD7\u5206\u6790"}),"\n",(0,l.jsxs)(r.p,{children:["Doris BE \u8FDB\u7A0B\u5185\u5B58\u6BCF\u6B21\u589E\u957F\u6216\u51CF\u5C11 256 MB \u90FD\u4F1A\u5728 ",(0,l.jsx)(r.code,{children:"log/be.INFO"})," \u65E5\u5FD7\u6253\u5370\u4E00\u6B21\u8FDB\u7A0B\u5185\u5B58\u72B6\u6001\uFF0C\u53E6\u5916\u8FDB\u7A0B\u5185\u5B58\u4E0D\u8DB3\u65F6\uFF0C\u4E5F\u4F1A\u968F\u5176\u4ED6\u65E5\u5FD7\u4E00\u8D77\u6253\u5370\u8FDB\u7A0B\u5185\u5B58\u72B6\u6001\u3002"]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{children:"os physical memory 375.81 GB. process memory used 4.09 GB(= 3.49 GB[vm/rss] - 410.44 MB[tc/jemalloc_cache] + 1 GB[reserved] + 0B[waiting_refresh]), limit 3.01 GB, soft limit 2.71 GB. sys available memory 134.41 GB(= 135.41 GB[proc/available] - 1 GB[reserved] - 0B[waiting_refresh]), low water mark 3.20 GB, warning water mark 6.40 GB.\n"})}),"\n",(0,l.jsxs)(r.ol,{children:["\n",(0,l.jsxs)(r.li,{children:["\n",(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.code,{children:"os physical memory 375.81 GB"})," \u6307\u7CFB\u7EDF\u7269\u7406\u5185\u5B58 375.81 GB\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(r.li,{children:["\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.code,{children:"process memory used 4.09 GB(= 3.49 GB[vm/rss] - 410.44 MB[tc/jemalloc_cache] + 1 GB[reserved] + 0B[waiting_refresh])"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:["\u5F53\u524D\u6211\u4EEC\u8BA4\u4E3A BE \u8FDB\u7A0B\u4F7F\u7528\u4E86 4.09 GB \u5185\u5B58\uFF0C\u5B9E\u9645 BE \u8FDB\u7A0B\u4F7F\u7528\u7684\u7269\u7406\u5185\u5B58 ",(0,l.jsx)(r.code,{children:"vm/rss"})," \u662F 3.49 GB\uFF0C"]}),"\n",(0,l.jsxs)(r.li,{children:["\u5176\u4E2D\u6709 410.44 MB \u662F ",(0,l.jsx)(r.code,{children:"tc/jemalloc_cache"}),"\uFF0C\u8FD9\u90E8\u5206 Cache \u4F1A\u5728\u4E4B\u540E\u6267\u884C\u8FC7\u7A0B\u4E2D\u88AB\u4F18\u5148\u590D\u7528\uFF0C\u6240\u4EE5\u8FD9\u91CC\u4E0D\u5C06\u5176\u7B97\u4F5C BE \u8FDB\u7A0B\u5185\u5B58\u3002"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:"reserved"})," \u662F\u5728\u6267\u884C\u8FC7\u7A0B\u4E2D\u88AB\u9884\u7559\u7684\u5185\u5B58\uFF0C\u901A\u5E38\u5728\u6784\u5EFA HashTable \u7B49\u4F1A\u8017\u8D39\u5927\u91CF\u5185\u5B58\u7684\u64CD\u4F5C\u524D\u4F1A\u63D0\u524D\u9884\u7559 HashTable \u7684\u5185\u5B58\uFF0C\u786E\u4FDD\u6784\u5EFA HashTable \u7684\u8FC7\u7A0B\u4E0D\u4F1A\u56E0\u4E3A\u5185\u5B58\u4E0D\u8DB3\u800C\u7EC8\u6B62\uFF0C\u8FD9\u90E8\u5206\u9884\u7559\u7684\u5185\u5B58\u88AB\u8BA1\u7B97\u5728 BE \u8FDB\u7A0B\u5185\u5B58\u4E2D\uFF0C\u5373\u4F7F\u5B9E\u9645\u4E0A\u8FD8\u6CA1\u6709\u88AB\u5206\u914D\u3002"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:"waiting_refresh"})," \u662F\u4E24\u6B21\u5185\u5B58\u72B6\u6001\u5237\u65B0\u7684\u95F4\u9694\u4E2D\u7533\u8BF7\u7684\u5927\u5185\u5B58\uFF0CDoris \u5185\u5B58\u72B6\u6001\u5237\u65B0\u7684\u95F4\u9694\u9ED8\u8BA4\u662F 100ms\uFF0C\u4E3A\u907F\u514D\u4E24\u6B21\u5185\u5B58\u72B6\u6001\u5237\u65B0\u7684\u95F4\u9694\u4E2D\u53D1\u751F\u5927\u91CF\u5185\u5B58\u7533\u8BF7\uFF0C\u5728\u5185\u5B58\u8D85\u9650\u540E\u6CA1\u6709\u53CA\u65F6\u611F\u77E5\u548C\u89E6\u53D1\u5185\u5B58 GC\uFF0C\u6240\u4EE5\u95F4\u9694\u4E2D\u7533\u8BF7\u7684\u5927\u5185\u5B58\u88AB\u8BA1\u7B97\u5728 BE \u8FDB\u7A0B\u5185\u5B58\u4E2D\uFF0C\u6BCF\u6B21\u5185\u5B58\u72B6\u6001\u5237\u65B0\u540E",(0,l.jsx)(r.code,{children:"waiting_refresh"}),"\u90FD\u5C06\u6E05 0\uFF0C"]}),"\n"]}),"\n",(0,l.jsxs)(r.ol,{start:"3",children:["\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"sys available memory 134.41 GB(= 135.41 GB[proc/available] - 1 GB[reserved] - 0B[waiting_refresh])"})}),"\n"]}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:["\u5F53\u524D BE \u8FDB\u7A0B\u5269\u4F59\u53EF\u4F7F\u7528\u7684\u5185\u5B58\u662F 134.41 GB\uFF0C\u7CFB\u7EDF\u4E2D\u5B9E\u9645\u53EF\u63D0\u4F9B\u7ED9 BE \u8FDB\u7A0B\u4F7F\u7528\u7684\u5185\u5B58 ",(0,l.jsx)(r.code,{children:"proc/available"})," \u662F 135.41 GB."]}),"\n",(0,l.jsxs)(r.li,{children:["\u5176\u4E2D\u6709 1GB \u7684\u5185\u5B58\u5DF2\u7ECF\u88AB\u9884\u7559\uFF0C\u6240\u4EE5\u5728\u8BA1\u7B97 BE \u8FDB\u7A0B\u5269\u4F59\u53EF\u7528\u5185\u5B58\u65F6\u51CF\u53BB ",(0,l.jsx)(r.code,{children:"reserved"}),"\uFF0C\u5173\u4E8E ",(0,l.jsx)(r.code,{children:"reserved"})," \u548C ",(0,l.jsx)(r.code,{children:"waiting_refresh"})," \u7684\u4ECB\u7ECD\u53C2\u8003\u4E0A\u9762\u5BF9 BE \u8FDB\u7A0B\u5185\u5B58\u7684\u6CE8\u89E3\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(r.ol,{start:"4",children:["\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:"limit 3.01 GB, soft limit 2.71 GB"})," \u548C ",(0,l.jsx)(r.code,{children:"low water mark 3.20 GB, warning water mark 6.40 GB"}),"\uFF0C\u6709\u5173 MemLimit \u548C WaterMark \u7684\u66F4\u591A\u4ECB\u7ECD\u89C1 [\u5185\u5B58\u9650\u5236\u548C\u6C34\u4F4D\u7EBF\u8BA1\u7B97\u65B9\u6CD5]\u3002"]}),"\n"]}),"\n",(0,l.jsx)(r.h2,{id:"\u8FDB\u7A0B\u5185\u5B58\u7EDF\u8BA1\u65E5\u5FD7\u5206\u6790",children:"\u8FDB\u7A0B\u5185\u5B58\u7EDF\u8BA1\u65E5\u5FD7\u5206\u6790"}),"\n",(0,l.jsxs)(r.p,{children:["\u5F53\u8FDB\u7A0B\u53EF\u7528\u5185\u5B58\u4E0D\u8DB3\u540E\uFF0CBE \u5927\u591A\u6570\u4F4D\u7F6E\u7684\u5185\u5B58\u7533\u8BF7\u90FD\u4F1A\u611F\u77E5\uFF0C\u5C1D\u8BD5\u505A\u51FA\u9884\u5B9A\u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u5305\u62EC\u89E6\u53D1 Memory GC \u6216 Cancel \u67E5\u8BE2\u7B49\uFF0C\u5E76\u6253\u5370\u8FDB\u7A0B\u5185\u5B58\u7EDF\u8BA1\u65E5\u5FD7\uFF0C\u6253\u5370\u9ED8\u8BA4\u95F4\u9694\u662F 1s\uFF0C\u65E5\u5FD7\u5206\u4E3A\u4E24\u90E8\u5206 ",(0,l.jsx)(r.code,{children:"Process Memory Summary"})," \u548C ",(0,l.jsx)(r.code,{children:"Memory Tracker Summary"})," \u4E24\u90E8\u5206\uFF0C\u5728",(0,l.jsx)(r.code,{children:"be/log/be.INFO"})," \u4E2D\u53EF\u4EE5\u627E\u5230\uFF0C\u636E\u6B64\u786E\u8BA4\u5F53\u524D\u8FDB\u7A0B\u5185\u5B58\u4F7F\u7528\u662F\u5426\u7B26\u5408\u9884\u671F\u3002"]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-sql",children:"Process Memory Summary:\n    os physical memory 375.81 GB. process memory used 4.09 GB(= 3.49 GB[vm/rss] - 410.44 MB[tc/jemalloc_cache] + 1 GB[reserved] + 0B[waiting_refresh]), limit 3.01 GB, soft limit 2.71 GB. sys available memory 134.41 GB(= 135.41 GB[proc/available] - 1 GB[reserved] - 0B[waiting_refresh]), low water mark 3.20 GB, warning water mark 6.40 GB.\nMemory Tracker Summary:\n    MemTrackerLimiter Label=other, Type=overview, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=schema_change, Type=overview, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=compaction, Type=overview, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=load, Type=overview, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=query, Type=overview, Limit=-1.00 B(-1 B), Used=83.32 MB(87369024 B), Peak=88.33 MB(92616000 B)\n    MemTrackerLimiter Label=global, Type=overview, Limit=-1.00 B(-1 B), Used=199.37 MB(209053204 B), Peak=199.37 MB(209053204 B)\n    MemTrackerLimiter Label=tc/jemalloc_cache, Type=overview, Limit=-1.00 B(-1 B), Used=410.44 MB(430376896 B), Peak=-1.00 B(-1 B)\n    MemTrackerLimiter Label=tc/jemalloc_metadata, Type=overview, Limit=-1.00 B(-1 B), Used=144 MB(151759440 B), Peak=-1.00 B(-1 B)\n    MemTrackerLimiter Label=sum of all trackers, Type=overview, Limit=-1.00 B(-1 B), Used=114.80 MB(726799124 B), Peak=-1.00 B(-1 B)\n    MemTrackerLimiter Label=process resident memory, Type=overview, Limit=-1.00 B(-1 B), Used=3.49 GB(3743289344 B), Peak=3.49 GB(3743289344 B)\n    MemTrackerLimiter Label=reserved_memory, Type=overview, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=-1.00 B(-1 B)\n    MemTrackerLimiter Label=process virtual memory, Type=overview, Limit=-1.00 B(-1 B), Used=44.25 GB(47512956928 B), Peak=44.25 GB(47512956928 B)\n    MemTrackerLimiter Label=Orphan, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=DetailsTrackerSet, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTracker Label=IOBufBlockMemory, Parent Label=DetailsTrackerSet, Used=1.41 MB(1474560 B), Peak=1.41 MB(1474560 B)\n    MemTracker Label=SegmentCache[size], Parent Label=DetailsTrackerSet, Used=1.64 MB(1720543 B), Peak=18.78 MB(19691997 B)\n    MemTracker Label=SchemaCache[number], Parent Label=DetailsTrackerSet, Used=9.21 KB(9428 B), Peak=9.21 KB(9428 B)\n    MemTracker Label=TabletSchemaCache[number], Parent Label=DetailsTrackerSet, Used=9.29 MB(9738798 B), Peak=9.29 MB(9738798 B)\n    MemTracker Label=TabletMeta(experimental), Parent Label=DetailsTrackerSet, Used=25.08 MB(26303456 B), Peak=25.08 MB(26303456 B)\n    MemTracker Label=RuntimeFilterMergeControllerEntity(experimental), Parent Label=DetailsTrackerSet, Used=32.00 B(32 B), Peak=32.00 B(32 B)\n    MemTrackerLimiter Label=SegCompaction, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=PointQueryExecutor, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=BlockCompression, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=RowIdStorageReader, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=SubcolumnsTree, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=S3FileBuffer, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=DataPageCache[size](AllocByAllocator), Type=global, Limit=-1.00 B(-1 B), Used=198.70 MB(208357157 B), Peak=198.73 MB(208381892 B)\n    MemTrackerLimiter Label=IndexPageCache[size](AllocByAllocator), Type=global, Limit=-1.00 B(-1 B), Used=679.73 KB(696047 B), Peak=679.73 KB(696047 B)\n    MemTrackerLimiter Label=PKIndexPageCache[size](AllocByAllocator), Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=Query#Id=529e3cb37dff464c-93bd9eafa8944ea6, Type=query, Limit=2.00 GB(2147483648 B), Used=83.32 MB(87369024 B), Peak=88.33 MB(92616000 B)\n    MemTrackerLimiter Label=MemTableTrackerSet, Type=load, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=SnapshotManager, Type=other, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTracker Label=AllMemTableMemory, Parent Label=DetailsTrackerSet, Used=0(0 B), Peak=0(0 B)\n"})}),"\n",(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.code,{children:"Process Memory Summary"})," \u662F\u8FDB\u7A0B\u5185\u5B58\u72B6\u6001\uFF0C\u53C2\u8003\u4E0A\u6587 [\u8FDB\u7A0B\u5185\u5B58\u72B6\u6001\u65E5\u5FD7\u5206\u6790]\u3002"]}),"\n",(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.code,{children:"Memory Tracker Summary"})," \u662F\u8FDB\u7A0B Memory Tracker \u6C47\u603B\uFF0C\u5305\u542B\u6240\u6709 ",(0,l.jsx)(r.code,{children:"Type=overview"})," \u548C ",(0,l.jsx)(r.code,{children:"Type=global"})," \u7684 Memory Tracker\uFF0C\u5E2E\u52A9\u4F7F\u7528\u8005\u5206\u6790\u5F53\u65F6\u7684\u5185\u5B58\u72B6\u6001\uFF0C\u53C2\u8003 ",(0,l.jsx)(r.a,{href:"/zh-CN/docs/3.0/admin-manual/trouble-shooting/memory-management/overview",children:"Overview"})," \u5206\u6790\u6BCF\u4E00\u90E8\u5206\u5185\u5B58\u7684\u542B\u4E49\u3002"]})]})}function B(e={}){let{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,r,a){a.d(r,{Z:function(){return m},a:function(){return s}});var i=a(667294);let l={},n=i.createContext(l);function s(e){let r=i.useContext(n);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function m(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(n.Provider,{value:r},e.children)}}}]);