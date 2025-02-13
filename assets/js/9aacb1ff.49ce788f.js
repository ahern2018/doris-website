"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["807893"],{864736:function(e,r,a){a.r(r),a.d(r,{metadata:()=>s,contentTitle:()=>n,default:()=>d,assets:()=>l,toc:()=>m,frontMatter:()=>o});var s=JSON.parse('{"id":"admin-manual/trouble-shooting/memory-management/memory-analysis/memory-log-analysis","title":"Memory Log Analysis","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/admin-manual/trouble-shooting/memory-management/memory-analysis/memory-log-analysis.md","sourceDirName":"admin-manual/trouble-shooting/memory-management/memory-analysis","slug":"/admin-manual/trouble-shooting/memory-management/memory-analysis/memory-log-analysis","permalink":"/docs/3.0/admin-manual/trouble-shooting/memory-management/memory-analysis/memory-log-analysis","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Memory Log Analysis","language":"en"},"sidebar":"docs","previous":{"title":"OOM Killer Crash Analysis","permalink":"/docs/3.0/admin-manual/trouble-shooting/memory-management/memory-analysis/oom-crash-analysis"},"next":{"title":"Heap Profile Memory Analysis","permalink":"/docs/3.0/admin-manual/trouble-shooting/memory-management/memory-analysis/heap-profile-memory-analysis"}}'),i=a("785893"),t=a("250065");let o={title:"Memory Log Analysis",language:"en"},n=void 0,l={},m=[{value:"Process memory status log analysis",id:"process-memory-status-log-analysis",level:2},{value:"Process memory statistics log analysis",id:"process-memory-statistics-log-analysis",level:2}];function c(e){let r={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:["The process memory logs in ",(0,i.jsx)(r.code,{children:"be/log/be.INFO"})," are mainly divided into two categories. One is the process memory status log, including the process memory size and the remaining available memory size of the system. The other is a more detailed process memory statistics log, including the memory size counted by Memory Tracker."]}),"\n",(0,i.jsx)(r.h2,{id:"process-memory-status-log-analysis",children:"Process memory status log analysis"}),"\n",(0,i.jsxs)(r.p,{children:["The process memory status of Doris BE will be printed in the ",(0,i.jsx)(r.code,{children:"log/be.INFO"})," log every time the process memory increases or decreases by 256 MB. In addition, when the process memory is insufficient, the process memory status will also be printed along with other logs."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"os physical memory 375.81 GB. process memory used 4.09 GB(= 3.49 GB[vm/rss] - 410.44 MB[tc/jemalloc_cache] + 1 GB[reserved] + 0B[waiting_refresh]), limit 3.01 GB, soft limit 2.71 GB. sys available memory 134.41 GB(= 1 35.41 GB[proc/available] - 1 GB[reserved] - 0B[waiting_refresh]), low water mark 3.20 GB, warning water mark 6.40 GB.\n"})}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"os physical memory 375.81 GB"})," refers to the system physical memory 375.81 GB."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"process memory used 4.09 GB (= 3.49 GB [vm/rss] - 410.44 MB [tc/jemalloc_cache] + 1 GB [reserved] + 0B [waiting_refresh])"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["Currently we think that the BE process uses 4.09 GB of memory, and the actual physical memory used by the BE process ",(0,i.jsx)(r.code,{children:"vm/rss"})," is 3.49 GB,"]}),"\n",(0,i.jsxs)(r.li,{children:["410.44 MB of which is ",(0,i.jsx)(r.code,{children:"tc/jemalloc_cache"}),". This part of the cache will be reused first in the subsequent execution process, so it is not counted as BE process memory here."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"reserved"})," is the memory reserved during the execution process. Usually, before building HashTable and other operations that consume a lot of memory, the memory of HashTable is reserved in advance to ensure that the process of building HashTable will not be terminated due to insufficient memory. This part of the reserved memory is calculated in the BE process memory, even if it has not actually been allocated."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"waiting_refresh"})," is the large memory requested in the interval between two memory status refreshes. The default interval for Doris memory status refreshes is 100ms. To avoid a large number of memory requests in the interval between two memory status refreshes, the memory GC is not detected and triggered in time after the memory exceeds the limit. Therefore, the large memory requested in the interval is calculated in the BE process memory. ",(0,i.jsx)(r.code,{children:"waiting_refresh"})," will be cleared to 0 after each memory status refresh."]}),"\n"]}),"\n",(0,i.jsxs)(r.ol,{start:"3",children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"sys available memory 134.41 GB (= 135.41 GB [proc/available] - 1 GB [reserved] - 0B [waiting_refresh])"})}),"\n"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["The current remaining available memory for the BE process is 134.41 GB, and the actual memory ",(0,i.jsx)(r.code,{children:"proc/available"})," available to the BE process in the system is 135.41 GB."]}),"\n",(0,i.jsxs)(r.li,{children:["1GB of the memory has been reserved, so ",(0,i.jsx)(r.code,{children:"reserved"})," is subtracted when calculating the remaining available memory of the BE process. Regarding ",(0,i.jsx)(r.code,{children:"reserved"})," and ",(0,i.jsx)(r.code,{children:"waiting_refresh"})," For an introduction to ",(0,i.jsx)(r.code,{children:"limit 3.01 GB, soft limit 2.71 GB"})," and ",(0,i.jsx)(r.code,{children:"low water mark 3.20 GB, warning water mark 6.40 GB"}),", for more information about MemLimit and WaterMark, see [Memory limit and watermark calculation method]."]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"process-memory-statistics-log-analysis",children:"Process memory statistics log analysis"}),"\n",(0,i.jsxs)(r.p,{children:["When the available memory of the process is insufficient, most memory requests in BE will be aware of it and try to make a predetermined callback method, including triggering Memory GC or Cancel query, etc., and print the process memory statistics log. The default printing interval is 1s. The log is divided into two parts: ",(0,i.jsx)(r.code,{children:"Process Memory Summary"})," and ",(0,i.jsx)(r.code,{children:"Memory Tracker Summary"}),". You can find it in ",(0,i.jsx)(r.code,{children:"be/log/be.INFO"})," to confirm whether the current process memory usage is in line with expectations."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sql",children:"Process Memory Summary:\n    os physical memory 375.81 GB. process memory used 4.09 GB(= 3.49 GB[vm/rss] - 410.44 MB[tc/jemalloc_cache] + 1 GB[reserved] + 0B[waiting_refresh]), limit 3.01 GB, soft limit 2.71 GB. sys available memory 134.41 GB(= 135.41 GB[proc/available] - 1 GB[reserved] - 0B[waiting_refresh]), low water mark 3.20 GB, warning water mark 6.40 GB.\nMemory Tracker Summary:\n    MemTrackerLimiter Label=other, Type=overview, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=schema_change, Type=overview, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=compaction, Type=overview, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=load, Type=overview, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=query, Type=overview, Limit=-1.00 B(-1 B), Used=83.32 MB(87369024 B), Peak=88.33 MB(92616000 B)\n    MemTrackerLimiter Label=global, Type=overview, Limit=-1.00 B(-1 B), Used=199.37 MB(209053204 B), Peak=199.37 MB(209053204 B)\n    MemTrackerLimiter Label=tc/jemalloc_cache, Type=overview, Limit=-1.00 B(-1 B), Used=410.44 MB(430376896 B), Peak=-1.00 B(-1 B)\n    MemTrackerLimiter Label=tc/jemalloc_metadata, Type=overview, Limit=-1.00 B(-1 B), Used=144 MB(151759440 B), Peak=-1.00 B(-1 B)\n    MemTrackerLimiter Label=sum of all trackers, Type=overview, Limit=-1.00 B(-1 B), Used=114.80 MB(726799124 B), Peak=-1.00 B(-1 B)\n    MemTrackerLimiter Label=process resident memory, Type=overview, Limit=-1.00 B(-1 B), Used=3.49 GB(3743289344 B), Peak=3.49 GB(3743289344 B)\n    MemTrackerLimiter Label=reserved_memory, Type=overview, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=-1.00 B(-1 B)\n    MemTrackerLimiter Label=process virtual memory, Type=overview, Limit=-1.00 B(-1 B), Used=44.25 GB(47512956928 B), Peak=44.25 GB(47512956928 B)\n    MemTrackerLimiter Label=Orphan, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=DetailsTrackerSet, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTracker Label=IOBufBlockMemory, Parent Label=DetailsTrackerSet, Used=1.41 MB(1474560 B), Peak=1.41 MB(1474560 B)\n    MemTracker Label=SegmentCache[size], Parent Label=DetailsTrackerSet, Used=1.64 MB(1720543 B), Peak=18.78 MB(19691997 B)\n    MemTracker Label=SchemaCache[number], Parent Label=DetailsTrackerSet, Used=9.21 KB(9428 B), Peak=9.21 KB(9428 B)\n    MemTracker Label=TabletSchemaCache[number], Parent Label=DetailsTrackerSet, Used=9.29 MB(9738798 B), Peak=9.29 MB(9738798 B)\n    MemTracker Label=TabletMeta(experimental), Parent Label=DetailsTrackerSet, Used=25.08 MB(26303456 B), Peak=25.08 MB(26303456 B)\n    MemTracker Label=RuntimeFilterMergeControllerEntity(experimental), Parent Label=DetailsTrackerSet, Used=32.00 B(32 B), Peak=32.00 B(32 B)\n    MemTrackerLimiter Label=SegCompaction, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=PointQueryExecutor, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=BlockCompression, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=RowIdStorageReader, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=SubcolumnsTree, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=S3FileBuffer, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=DataPageCache[size](AllocByAllocator), Type=global, Limit=-1.00 B(-1 B), Used=198.70 MB(208357157 B), Peak=198.73 MB(208381892 B)\n    MemTrackerLimiter Label=IndexPageCache[size](AllocByAllocator), Type=global, Limit=-1.00 B(-1 B), Used=679.73 KB(696047 B), Peak=679.73 KB(696047 B)\n    MemTrackerLimiter Label=PKIndexPageCache[size](AllocByAllocator), Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=Query#Id=529e3cb37dff464c-93bd9eafa8944ea6, Type=query, Limit=2.00 GB(2147483648 B), Used=83.32 MB(87369024 B), Peak=88.33 MB(92616000 B)\n    MemTrackerLimiter Label=MemTableTrackerSet, Type=load, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=SnapshotManager, Type=other, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTracker Label=AllMemTableMemory, Parent Label=DetailsTrackerSet, Used=0(0 B), Peak=0(0 B)\n"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Process Memory Summary"})," is the process memory status, refer to [Process Memory Status Log Analysis] above."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Memory Tracker Summary"})," is a summary of the process Memory Tracker, including all Memory Trackers of ",(0,i.jsx)(r.code,{children:"Type=overview"})," and ",(0,i.jsx)(r.code,{children:"Type=global"}),", to help users analyze the current memory status. Refer to ",(0,i.jsx)(r.a,{href:"/docs/3.0/admin-manual/trouble-shooting/memory-management/overview",children:"Overview"})," to analyze the meaning of each part of memory."]})]})}function d(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,r,a){a.d(r,{Z:function(){return n},a:function(){return o}});var s=a(667294);let i={},t=s.createContext(i);function o(e){let r=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function n(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);