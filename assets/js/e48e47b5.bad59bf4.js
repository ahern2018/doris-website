"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["962781"],{37499:function(e,a,o){o.r(a),o.d(a,{metadata:()=>n,contentTitle:()=>s,default:()=>h,assets:()=>i,toc:()=>m,frontMatter:()=>t});var n=JSON.parse('{"id":"admin-manual/trouble-shooting/memory-management/memory-analysis/global-memory-analysis","title":"Global Memory Analysis","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/admin-manual/trouble-shooting/memory-management/memory-analysis/global-memory-analysis.md","sourceDirName":"admin-manual/trouble-shooting/memory-management/memory-analysis","slug":"/admin-manual/trouble-shooting/memory-management/memory-analysis/global-memory-analysis","permalink":"/docs/3.0/admin-manual/trouble-shooting/memory-management/memory-analysis/global-memory-analysis","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Global Memory Analysis","language":"en"},"sidebar":"docs","previous":{"title":"Jemalloc Memory Analysis","permalink":"/docs/3.0/admin-manual/trouble-shooting/memory-management/memory-analysis/jemalloc-memory-analysis"},"next":{"title":"Cache Memory Analysis","permalink":"/docs/3.0/admin-manual/trouble-shooting/memory-management/memory-analysis/doris-cache-memory-analysis"}}'),r=o("785893"),l=o("250065");let t={title:"Global Memory Analysis",language:"en"},s=void 0,i={},m=[{value:"Global Memory View Method",id:"global-memory-view-method",level:2},{value:"Global Memory occupies a lot",id:"global-memory-occupies-a-lot",level:2},{value:"Cache analysis method",id:"cache-analysis-method",level:3},{value:"Metadata analysis method",id:"metadata-analysis-method",level:3},{value:"Orphan analysis method",id:"orphan-analysis-method",level:3}];function c(e){let a={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.p,{children:"GLobal Memory is Doris's globally shared memory, mainly including Cache and Metadata."}),"\n",(0,r.jsx)(a.h2,{id:"global-memory-view-method",children:"Global Memory View Method"}),"\n",(0,r.jsxs)(a.p,{children:["The web page ",(0,r.jsx)(a.code,{children:"http://{be_host}:{be_web_server_port}/mem_tracker?type=global"})," displays all Memory Trackers of ",(0,r.jsx)(a.code,{children:"type=global"}),"."]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{src:"https://github.com/apache/doris/assets/13197424/e0b4a327-5bfb-4dfd-9e1e-bf58a482a456",alt:"image"})}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:"- Orphan: Collects memory that does not know where it belongs, and ideally it is expected to be equal to 0.\n- DataPageCache\\[size\\](AllocByAllocator): The size of the data Page cache.\n- IndexPageCache\\[size\\](AllocByAllocator): The size of the index cache of the data Page.\n- PKIndexPageCache\\[size\\](AllocByAllocator): Primary key index of data Page.\n- DetailsTrackerSet: Contains some memory that is not currently tracked accurately. These memories will not be counted in Global memory, including some Cache and metadata memory, etc. By default, only Memory Trackers with Peak Consumption not equal to 0 are displayed, mainly including the following:\n- SegmentCache[size]: Caches the memory size of the opened Segment, such as index information.\n- SchemaCache[number]: Caches the number of entries of Rowset Schema.\n- TabletSchemaCache[number]: Caches the number of entries of Tablet Schema.\n- TabletMeta(experimental): Memory size of all Tablet Schema.\n- CreateTabletRRIdxCache[number]: Caches the number of entries of create tabelt index.\n- PageNoCache: If page cache is turned off, this Memory Trakcer will track the sum of all page memory used by all Queries.\n- IOBufBlockMemory: The total IOBuf memory used by BRPC.\n- PointQueryLookupConnectionCache[number]: The number of cached Point Query Lookup Connection entries.\n- AllMemTableMemory: The total Memtable memory of all loads cached in memory waiting to be flushed.\n- MowTabletVersionCache[number]: The number of cached Mow Tablet Version entries.\n- MowDeleteBitmapAggCache[size]: The cached Mow DeleteBitmap memory size.\n- SegCompaction: The total memory allocated from `Doris Allocator` by all SegCompaction tasks.\n- PointQueryExecutor: Some memory shared by all Point Queries.\n- BlockCompression: Some memory used in the decompression process shared by all Queries.\n- RowIdStorageReader: All Multiget Data requests use memory in RowIdStorageReader.\n- SubcolumnsTree: Some memory used by Point Query in SubcolumnsTree.\n- S3FileBuffer: Memory allocated by the File Buffer when reading S3.\n"})}),"\n",(0,r.jsx)(a.p,{children:"Some of the Memory Tracker tags have suffixes, which mean:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"[size]"})," means that the Cache Tracker records the memory size."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"[number]"})," means that the Cache Tracker records the number of cached entries, which is usually because the memory cannot be accurately counted at present."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"(AllocByAllocator)"})," means that the Tracker value is tracked by Doris Allocator."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"(experimental)"})," means that this Memory Tracker is still experimental and the value may not be accurate."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"global-memory-occupies-a-lot",children:"Global Memory occupies a lot"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:"MemTrackerLimiter Label=global, Type=overview, Limit=-1.00 B(-1 B), Used=199.37 MB(209053204 B), Peak=199.37 MB(209053204 B)\n"})}),"\n",(0,r.jsxs)(a.p,{children:["The value of Global Memory Tracker ",(0,r.jsx)(a.code,{children:"Label=global, Type=overview"})," is equal to the sum of all Memory Trackers with ",(0,r.jsx)(a.code,{children:"Type=global"})," and ",(0,r.jsx)(a.code,{children:"Parent Label != DetailsTrackerSet"}),", mainly including Cache and metadata, which are shared between different tasks."]}),"\n",(0,r.jsx)(a.h3,{id:"cache-analysis-method",children:"Cache analysis method"}),"\n",(0,r.jsxs)(a.p,{children:["Refer to ",(0,r.jsx)(a.a,{href:"/docs/3.0/admin-manual/trouble-shooting/memory-management/memory-analysis/doris-cache-memory-analysis",children:"Doris Cache Memory Analysis"})]}),"\n",(0,r.jsx)(a.h3,{id:"metadata-analysis-method",children:"Metadata analysis method"}),"\n",(0,r.jsxs)(a.p,{children:["Refer to ",(0,r.jsx)(a.a,{href:"/docs/3.0/admin-manual/trouble-shooting/memory-management/memory-analysis/metadata-memory-analysis",children:"Metadata Memory Analysis"})]}),"\n",(0,r.jsx)(a.h3,{id:"orphan-analysis-method",children:"Orphan analysis method"}),"\n",(0,r.jsxs)(a.p,{children:["If the Orphan Memory Tracker value is too large, it means that the Memory Tracker statistics are missing. Refer to the analysis in [Memory Tracker Statistics Missing] in ",(0,r.jsx)(a.a,{href:"/docs/3.0/admin-manual/trouble-shooting/memory-management/memory-feature/memory-tracker",children:"Memory Tracker"}),"."]})]})}function h(e={}){let{wrapper:a}={...(0,l.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,a,o){o.d(a,{Z:function(){return s},a:function(){return t}});var n=o(667294);let r={},l=n.createContext(r);function t(e){let a=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(l.Provider,{value:a},e.children)}}}]);