"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["502091"],{563336:function(e,r,o){o.r(r),o.d(r,{metadata:()=>a,contentTitle:()=>i,default:()=>h,assets:()=>m,toc:()=>c,frontMatter:()=>n});var a=JSON.parse('{"id":"admin-manual/trouble-shooting/memory-management/memory-feature/memory-tracker","title":"Memory Tracker","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/admin-manual/trouble-shooting/memory-management/memory-feature/memory-tracker.md","sourceDirName":"admin-manual/trouble-shooting/memory-management/memory-feature","slug":"/admin-manual/trouble-shooting/memory-management/memory-feature/memory-tracker","permalink":"/docs/admin-manual/trouble-shooting/memory-management/memory-feature/memory-tracker","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Memory Tracker","language":"en"},"sidebar":"docs","previous":{"title":"Heap Profile Memory Analysis","permalink":"/docs/admin-manual/trouble-shooting/memory-management/memory-analysis/heap-profile-memory-analysis"},"next":{"title":"Memory Control Strategy","permalink":"/docs/admin-manual/trouble-shooting/memory-management/memory-feature/memory-control-strategy"}}'),t=o("785893"),s=o("250065");let n={title:"Memory Tracker",language:"en"},i=void 0,m={},c=[{value:"Memory Tracking Principle",id:"memory-tracking-principle",level:2},{value:"Memory Tracker Structure",id:"memory-tracker-structure",level:2},{value:"Memory Tracker Statistics Missing",id:"memory-tracker-statistics-missing",level:2},{value:"Memory Tracker Statistics Missing Phenomenon",id:"memory-tracker-statistics-missing-phenomenon",level:3},{value:"Memory Tracker Statistics Missing Analysis",id:"memory-tracker-statistics-missing-analysis",level:3},{value:"Reasons for missing Memory Tracker statistics",id:"reasons-for-missing-memory-tracker-statistics",level:3},{value:"Doris 2.1 and later",id:"doris-21-and-later",level:4},{value:"Before Doris 2.1",id:"before-doris-21",level:4}];function l(e){let r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"Doris BE uses Memory Tracker to record process memory usage, including memory used in the life cycle of tasks such as query, load, compaction, schema change, and various caches. It supports real-time viewing of web pages and prints them to BE logs when memory-related errors are reported, which is used for memory analysis and troubleshooting of memory problems."}),"\n",(0,t.jsxs)(r.p,{children:["The viewing methods of Memory Tracker, the reasons for excessive memory usage represented by different Memory Trackers, and the analysis methods for reducing their memory usage have been introduced in ",(0,t.jsx)(r.a,{href:"/docs/admin-manual/trouble-shooting/memory-management/overview",children:"Overview"})," in conjunction with the Doris BE memory structure. This article only introduces the principles, structure, and some common problems of Memory Tracker."]}),"\n",(0,t.jsx)(r.h2,{id:"memory-tracking-principle",children:"Memory Tracking Principle"}),"\n",(0,t.jsxs)(r.p,{children:["Memory Tracker relies on Doris Allocator to track each application and release of memory. For an introduction to Doris Allocator, refer to ",(0,t.jsx)(r.a,{href:"/docs/admin-manual/trouble-shooting/memory-management/memory-feature/memory-control-strategy",children:"Memory Control Strategy"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"Process memory: Doris BE will periodically obtain Doris BE process memory from the system and is compatible with Cgroup."}),"\n",(0,t.jsx)(r.p,{children:"Task memory: Each query, load, compaction and other tasks will create its own unique Memory Tracker when initialized, and put the Memory Tracker into TLS (Thread Local Storage) during execution. Doris's main memory data structures are inherited from Allocator. Allocator will record each application and release of memory in TLS's Memory Tracker."}),"\n",(0,t.jsxs)(r.p,{children:["Operator memory: Different execution operators of tasks will also create their own Memory Trakcer, such as Join/Agg/Sink, etc., which support manual memory tracking or put it into TLS and recorded by ",(0,t.jsx)(r.code,{children:"Doris Allocator"})," for execution logic control and analysis of memory usage of different operators in Query Profile."]}),"\n",(0,t.jsxs)(r.p,{children:["Global memory: Global memory mainly includes Cache and metadata, which are shared between different tasks. Each Cache has its own unique Memory Tracker, which is tracked by ",(0,t.jsx)(r.code,{children:"Doris Allocator"})," or manually; metadata memory is not fully counted at present, and more analysis depends on various metadata Counters counted by Metrics and Bvar."]}),"\n",(0,t.jsx)(r.p,{children:"Among them, the Doris BE process memory is taken from the operating system and can be considered completely accurate. Due to implementation limitations, the memory tracked by other Memory Trackers is usually only a subset of the real memory, resulting in the sum of all Memory Trackers being less than the physical memory of the Doris BE process in most cases. There are certain omissions, but the memory recorded by Memory Tracker is more reliable in most cases and can be used for memory analysis with confidence. In addition, Memory Tracker actually tracks virtual memory, not the physical memory that is usually more concerned, and there are certain errors between them."}),"\n",(0,t.jsx)(r.h2,{id:"memory-tracker-structure",children:"Memory Tracker Structure"}),"\n",(0,t.jsx)(r.p,{children:"Based on the usage, Memory Tracker is divided into two categories. The first category, Memory Tracker Limiter, is unique in each query, load, Compaction and other tasks and global Cache, TabletMeta, and is used to observe and control memory usage; the second category, Memory Tracker, is mainly used to track memory hotspots during query execution, such as HashTable in Join/Aggregation/Sort/window functions, serialized intermediate data, etc., to analyze the memory usage of different operators in the query, and for memory control of load data flushing."}),"\n",(0,t.jsx)(r.p,{children:"The parent-child relationship between the two is only used for snapshot printing, and is associated with the label name, which is equivalent to a soft link. It does not rely on the parent-child relationship for simultaneous consumption, and the life cycle does not affect each other, reducing the cost of understanding and use. All memory trackers are stored in a set of maps, and provide methods such as printing snapshots of all memory tracker types, printing snapshots of tasks such as query/load/compaction, obtaining the group of queries/loads that currently use the most memory, and obtaining the group of queries/loads that currently use the most excessive memory."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"Memory Tracker Implement",src:o(815702).Z+"",width:"1080",height:"897"})}),"\n",(0,t.jsx)(r.h2,{id:"memory-tracker-statistics-missing",children:"Memory Tracker Statistics Missing"}),"\n",(0,t.jsx)(r.p,{children:"The phenomenon of Memory Tracker Statistics Missing is different in versions before and after Doris 2.1."}),"\n",(0,t.jsx)(r.h3,{id:"memory-tracker-statistics-missing-phenomenon",children:"Memory Tracker Statistics Missing Phenomenon"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:"There are two phenomena of Memory Tracker Statistics Missing after Doris 2.1."}),"\n"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["The difference between ",(0,t.jsx)(r.code,{children:"Label=process resident memory"})," Memory Tracker and ",(0,t.jsx)(r.code,{children:"Label=sum of all trackers"})," Memory Tracker is too large."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"The value of Orphan Memory Tracker is too large."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.ol,{start:"2",children:["\n",(0,t.jsx)(r.li,{children:"Before Doris 2.1, the value of Orphan Memory Tracker is too large, which means that the Memory Tracker statistics are missing."}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"memory-tracker-statistics-missing-analysis",children:"Memory Tracker Statistics Missing Analysis"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["In versions prior to Doris 2.1.5, if Memory Tracker statistics are missing or BE process memory does not decrease, please refer to ",(0,t.jsx)(r.a,{href:"/docs/admin-manual/trouble-shooting/memory-management/memory-analysis/doris-cache-memory-analysis",children:"Cache Memory Analysis"})," to analyze SegmentCache memory usage, and try to close Segment Cache before continuing the test."]}),"\n"]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["In versions prior to Doris 2.1.5, Segment Cache Memory Tacker is inaccurate. This is because some Index memory statistics, including Primary Key Index, are inaccurate, resulting in Segment Cache memory not being effectively limited, often occupying too much memory, especially in large wide tables with hundreds or thousands of columns. Refer to ",(0,t.jsx)(r.a,{href:"/docs/admin-manual/trouble-shooting/memory-management/memory-analysis/metadata-memory-analysis",children:"Metadata Memory Analysis"})," If you find that ",(0,t.jsx)(r.code,{children:'doris_be_cache_usage{name="SegmentCache"}'})," in Doris BE Metrics is not large, but ",(0,t.jsx)(r.code,{children:"doris_column_reader_num"})," in Doris BE Bvar is large, you need to suspect the memory usage of Segment Cache. If you see ",(0,t.jsx)(r.code,{children:"Segment"})," and ",(0,t.jsx)(r.code,{children:"ColumnReader"})," fields in the call stack with a large memory usage in Heap Profile, it can be basically confirmed that Segment Cache occupies a large amount of memory."]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["If the above phenomenon is observed, if the cluster can be easily restarted and the phenomenon can be reproduced, refer to ",(0,t.jsx)(r.a,{href:"/docs/admin-manual/trouble-shooting/memory-management/memory-analysis/heap-profile-memory-analysis",children:"Heap Profile Memory Analysis"})," to use Jemalloc Heap Profile to analyze process memory."]}),"\n",(0,t.jsxs)(r.p,{children:["Otherwise, you can first refer to ",(0,t.jsx)(r.a,{href:"/docs/admin-manual/trouble-shooting/memory-management/memory-analysis/metadata-memory-analysis",children:"Metadata Memory Analysis"})," to analyze the metadata memory of Doris BE."]}),"\n",(0,t.jsx)(r.h3,{id:"reasons-for-missing-memory-tracker-statistics",children:"Reasons for missing Memory Tracker statistics"}),"\n",(0,t.jsx)(r.p,{children:"The following introduces the reasons for missing Memory Tracker statistics, which involve the implementation of Memory Tracker and usually do not need to be paid attention to."}),"\n",(0,t.jsx)(r.h4,{id:"doris-21-and-later",children:"Doris 2.1 and later"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["The difference between ",(0,t.jsx)(r.code,{children:"Label=process resident memory"})," Memory Tracker and ",(0,t.jsx)(r.code,{children:"Label=sum of all trackers"})," Memory Tracker is too large."]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["If the value of ",(0,t.jsx)(r.code,{children:"Label=sum of all trackers"})," Memory Tracker accounts for more than 70% of ",(0,t.jsx)(r.code,{children:"Label=process resident memory"})," Memory Tracker, it usually means that Memory Tracker has counted most of the memory of the Doris BE process, and usually only needs to analyze Memory Tracker to locate the memory location."]}),"\n",(0,t.jsxs)(r.p,{children:["If the value of ",(0,t.jsx)(r.code,{children:"Label=sum of all trackers"})," Memory Tracker accounts for less than 70% of ",(0,t.jsx)(r.code,{children:"Label=process resident memory"})," Memory Tracker, it means that Memory Tracker statistics are missing, and Memory Tracker may not be able to accurately locate the memory location."]}),"\n",(0,t.jsxs)(r.p,{children:["The difference between ",(0,t.jsx)(r.code,{children:"Label=process resident memory"})," Memory Tracker and ",(0,t.jsx)(r.code,{children:"Label=sum of all trackers"})," Memory Tracker is the memory not allocated by ",(0,t.jsx)(r.code,{children:"Doris Allocator"}),". The main memory data structures of Doris are inherited from ",(0,t.jsx)(r.code,{children:"Doris Allocator"}),", but there is still a part of memory not allocated by ",(0,t.jsx)(r.code,{children:"Doris Allocator"}),", including metadata memory, RPC memory, etc., which may also be a memory leak. In this case, in addition to analyzing the Memory Tracker with a large memory value, it is usually necessary to pay attention to whether the metadata memory is reasonable and whether there is a memory leak."]}),"\n",(0,t.jsxs)(r.ol,{start:"2",children:["\n",(0,t.jsx)(r.li,{children:"Orphan Memory Tracker value is too large"}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"MemTrackerLimiter Label=Orphan, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n"})}),"\n",(0,t.jsx)(r.p,{children:"Orphan Memory Tracker is the default Memory Tracker. Positive or negative values \u200B\u200Bmean that the memory allocated by Doris Allocator is not accurately tracked. The larger the value, the lower the credibility of the overall statistical results of Memory Tracker. Its statistical value comes from two sources:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"If the Memory Tracker is not bound to TLS when the thread starts, Doris Allocator will record the memory to Orphan Memory Tracker by default, which means that this part of the memory is unknown. For the principle of Doris Allocator recording memory, please refer to the above [Memory Tracking Principle]."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"If the value of the Memory Tracker of a task such as Query or Load is not equal to 0 when it is destroyed, it usually means that this part of the memory has not been released. The remaining memory will be recorded in the Orphan Memory Tracker, which is equivalent to letting the remaining memory continue to be tracked by the Orphan Memory Tracker. This ensures that the sum of the Orphan Memory Tracker and other Memory Trackers is equal to all the memory allocated by Doris Allocator."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Ideally, the value of the Orphan Memory Tracker is expected to be close to 0. So we hope that all threads will attach a Memory Tracker other than Orphan at the beginning, such as Query or Load Memory Tracker. And all Query or Load Memory Trackers are equal to 0 when they are destroyed, which means that the memory used during the execution of Query or Load has been released when it is destroyed."}),"\n",(0,t.jsx)(r.p,{children:"If the Orphan Memory Tracker is not equal to 0 and has a large value, it means that a large amount of unknown memory has not been released, or a large amount of memory has not been released after the query and load are executed."}),"\n",(0,t.jsx)(r.h4,{id:"before-doris-21",children:"Before Doris 2.1"}),"\n",(0,t.jsxs)(r.p,{children:["Before Doris 2.1, all unknown memory was counted in the ",(0,t.jsx)(r.code,{children:"Label=Orphan"})," Memory Tracker, so a large value of the Orphan Memory Tracker means that the Memory Tracker statistics are missing."]})]})}function h(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},815702:function(e,r,o){o.d(r,{Z:function(){return a}});let a=o.p+"assets/images/memory-tracker-implement-5c548eff5415a15a098dfd931e60a99f.png"},250065:function(e,r,o){o.d(r,{Z:function(){return i},a:function(){return n}});var a=o(667294);let t={},s=a.createContext(t);function n(e){let r=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),a.createElement(s.Provider,{value:r},e.children)}}}]);