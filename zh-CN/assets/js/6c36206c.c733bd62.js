"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["250727"],{215633:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>u,assets:()=>l,toc:()=>d,frontMatter:()=>a});var t=JSON.parse('{"id":"admin-manual/open-api/fe-http/profile-action","title":"Profile Action","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/open-api/fe-http/profile-action.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/profile-action","permalink":"/zh-CN/docs/dev/admin-manual/open-api/fe-http/profile-action","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Profile Action","language":"zh-CN"}}'),s=r("785893"),i=r("250065");let a={title:"Profile Action",language:"zh-CN"},o="Profile Action",l={},d=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function c(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"profile-action",children:"Profile Action"})}),"\n",(0,s.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"GET /api/profile"}),"\n",(0,s.jsx)(n.code,{children:"GET /api/profile/text"})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"\u7528\u4E8E\u83B7\u53D6\u6307\u5B9A query id \u7684 query profile\n\u5982\u679C query_id \u4E0D\u5B58\u5728\uFF0C\u76F4\u63A5\u8FD4\u56DE 404 NOT FOUND \u9519\u8BEF\n\u5982\u679C query_id \u5B58\u5728\uFF0C\u8FD4\u56DE\u4E0B\u5217\u6587\u672C\u7684 profile:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Query:\n  Summary:\n     - Query ID: a0a9259df9844029-845331577440a3bd\n     - Start Time: 2020-06-15 14:10:05\n     - End Time: 2020-06-15 14:10:05\n     - Total: 8ms\n     - Query Type: Query\n     - Query State: EOF\n     - Doris Version: trunk\n     - User: root\n     - Default Db: default_cluster:test\n     - Sql Statement: select * from table1\n  Execution Profile a0a9259df9844029-845331577440a3bd:(Active: 7.315ms, % non-child: 100.00%)\n    Fragment 0:\n      Instance a0a9259df9844029-845331577440a3be (host=TNetworkAddress(hostname:172.26.108.176, port:9560)):(Active: 1.523ms, % non-child: 0.24%)\n         - MemoryLimit: 2.00 GB\n         - PeakUsedReservation: 0.00\n         - PeakMemoryUsage: 72.00 KB\n         - RowsProduced: 5\n         - AverageThreadTokens: 0.00\n         - PeakReservation: 0.00\n        BlockMgr:\n           - BlocksCreated: 0\n           - BlockWritesOutstanding: 0\n           - BytesWritten: 0.00\n           - TotalEncryptionTime: 0ns\n           - BufferedPins: 0\n           - TotalReadBlockTime: 0ns\n           - TotalBufferWaitTime: 0ns\n           - BlocksRecycled: 0\n           - TotalIntegrityCheckTime: 0ns\n           - MaxBlockSize: 8.00 MB\n        DataBufferSender (dst_fragment_instance_id=a0a9259df9844029-845331577440a3be):\n           - AppendBatchTime: 9.23us\n             - ResultSendTime: 956ns\n             - TupleConvertTime: 5.735us\n           - NumSentRows: 5\n        OLAP_SCAN_NODE (id=0):(Active: 1.506ms, % non-child: 20.59%)\n           - TotalRawReadTime: 0ns\n           - CompressedBytesRead: 6.47 KB\n           - PeakMemoryUsage: 0.00\n           - RowsPushedCondFiltered: 0\n           - ScanRangesComplete: 0\n           - ScanTime: 25.195us\n           - BitmapIndexFilterTimer: 0ns\n           - BitmapIndexFilterCount: 0\n           - NumScanners: 65\n           - RowsStatsFiltered: 0\n           - VectorPredEvalTime: 0ns\n           - BlockSeekTime: 1.299ms\n           - RawRowsRead: 1.91K (1910)\n           - ScannerThreadsVoluntaryContextSwitches: 0\n           - RowsDelFiltered: 0\n           - IndexLoadTime: 911.104us\n           - NumDiskAccess: 1\n           - ScannerThreadsTotalWallClockTime: 0ns\n             - MaterializeTupleTime: 0ns\n             - ScannerThreadsUserTime: 0ns\n             - ScannerThreadsSysTime: 0ns\n           - TotalPagesNum: 0\n           - RowsReturnedRate: 3.319K /sec\n           - BlockLoadTime: 539.289us\n           - CachedPagesNum: 0\n           - BlocksLoad: 384\n           - UncompressedBytesRead: 0.00\n           - RowsBloomFilterFiltered: 0\n           - TabletCount : 1\n           - RowsReturned: 5\n           - ScannerThreadsInvoluntaryContextSwitches: 0\n           - DecompressorTimer: 0ns\n           - RowsVectorPredFiltered: 0\n           - ReaderInitTime: 6.498ms\n           - RowsRead: 5\n           - PerReadThreadRawHdfsThroughput: 0.0 /sec\n           - BlockFetchTime: 4.318ms\n           - ShowHintsTime: 0ns\n           - TotalReadThroughput: 0.0 /sec\n           - IOTimer: 1.154ms\n           - BytesRead: 48.49 KB\n           - BlockConvertTime: 97.539us\n           - BlockSeekCount: 0\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679C\u4E3A text \u63A5\u53E3\uFF0C\u76F4\u63A5\u8FD4\u56DE profile \u7684\u7EAF\u6587\u672C\u5185\u5BB9"}),"\n",(0,s.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,s.jsx)(n.p,{children:"\u65E0"}),"\n",(0,s.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"query_id"})}),"\n",(0,s.jsx)(n.p,{children:"\u6307\u5B9A\u7684 query id"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,s.jsx)(n.p,{children:"\u65E0"}),"\n",(0,s.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"profile": "query profile ..."\n	},\n	"count": 0\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u83B7\u53D6\u6307\u5B9A query_id \u7684 query profile"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'GET /api/profile?query_id=f732084bc8e74f39-8313581c9c3c0b58\n\nResponse:\n{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"profile": "query profile ..."\n	},\n	"count": 0\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u83B7\u53D6\u6307\u5B9A query_id \u7684 query profile \u7684\u7EAF\u6587\u672C"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"GET /api/profile/text?query_id=f732084bc8e74f39-8313581c9c3c0b58\n\nResponse:\n    Summary:\n    - Profile ID: 48bdf6d75dbb46c9-998b9c0368f4561f\n    - Task Type: QUERY\n    - Start Time: 2023-12-20 11:09:41\n    - End Time: 2023-12-20 11:09:45\n    - Total: 3s680ms\n    - Task State: EOF\n    - User: root\n    - Default Db: tpcds\n    - Sql Statement: with customer_total_return as\n  select sr_customer_sk as ctr_customer_sk\n  ,sr_store_sk as ctr_store_sk\n  ,sum(SR_FEE) as ctr_total_return\n  ...\n"})}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return a}});var t=r(667294);let s={},i=t.createContext(s);function a(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);