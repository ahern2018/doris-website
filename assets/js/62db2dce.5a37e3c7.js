"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["706654"],{5937:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>d,assets:()=>o,toc:()=>c,frontMatter:()=>u});var t=JSON.parse('{"id":"admin-manual/workload-management/concurrency-control-and-queuing","title":"Concurrency Control and Queuing","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/admin-manual/workload-management/concurrency-control-and-queuing.md","sourceDirName":"admin-manual/workload-management","slug":"/admin-manual/workload-management/concurrency-control-and-queuing","permalink":"/docs/admin-manual/workload-management/concurrency-control-and-queuing","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Concurrency Control and Queuing","language":"en"},"sidebar":"docs","previous":{"title":"workload analysis diagnosis","permalink":"/docs/admin-manual/workload-management/analysis-diagnosis"},"next":{"title":"Query Circuit Breaker","permalink":"/docs/admin-manual/workload-management/sql-blocking"}}'),i=r("785893"),s=r("250065");let u={title:"Concurrency Control and Queuing",language:"en"},a=void 0,o={},c=[{value:"Basic usage",id:"basic-usage",level:2},{value:"Check the queue status",id:"check-the-queue-status",level:2},{value:"Bypass the queuing",id:"bypass-the-queuing",level:2}];function l(e){let n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Concurrency control and queuing is a resource management mechanism. When multiple queries simultaneously request resources and reach the system's concurrency limit, Doris will manage the queries based on predefined strategies and restrictions, ensuring the system can still operate smoothly under high load and avoid issues like OOM (Out of Memory) or system freezes."}),"\n",(0,i.jsx)(n.p,{children:"Doris's concurrency control and queuing mechanism is primarily implemented through workload groups. A workload group defines the resource usage limits for queries, including maximum concurrency, queue length, and timeout parameters. By properly configuring these parameters, the goal of resource management can be achieved."}),"\n",(0,i.jsx)(n.h2,{id:"basic-usage",children:"Basic usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'create workload group if not exists queue_group\r\nproperties (\r\n    "max_concurrency" = "10",\r\n    "max_queue_size" = "20",\r\n    "queue_timeout" = "3000"\r\n);\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameter description"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Data type"}),(0,i.jsx)(n.th,{children:"Default value"}),(0,i.jsx)(n.th,{children:"Value range"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"max_concurrency"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"2147483647"}),(0,i.jsx)(n.td,{children:"[0, 2147483647]"}),(0,i.jsx)(n.td,{children:"Optional, the maximum number of concurrent queries. The default value is the maximum integer value, meaning there is no limit on concurrency. When the number of running queries reaches the maximum concurrency, new queries will enter the queuing process."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"max_queue_size"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"[0, 2147483647]"}),(0,i.jsx)(n.td,{children:"Optional, the length of the query queue. When the queue is full, new queries will be rejected. The default value is 0, meaning no queuing."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"queue_timeout"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"[0, 2147483647]"}),(0,i.jsx)(n.td,{children:"Optional, the maximum wait time for a query in the queue, in milliseconds. If the query exceeds this time in the queue, an exception will be thrown to the client. The default value is 0, meaning no queuing, and queries will immediately fail upon entering the queue."})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"If there is currently 1 FE in the cluster, the meaning of this configuration is as follows: The maximum number of concurrent queries in the cluster is limited to 10. When the maximum concurrency is reached, new queries will enter the queue, with the queue length limited to 20. The maximum wait time for a query in the queue is 3 seconds, and queries that exceed 3 seconds in the queue will return a failure directly to the client."}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"The current queuing design does not take into account the number of FEs. The queuing parameters only take effect at the single FE level. For example:"}),(0,i.jsx)(n.p,{children:"In a Doris cluster, if a workload group is configured with max_concurrency = 1,\r\nIf there is 1 FE in the cluster, the workload group will allow only one SQL query to run at a time in the cluster;\r\nIf there are 3 FEs in the cluster, the maximum number of SQL queries in the cluster could be 3."})]}),"\n",(0,i.jsx)(n.h2,{id:"check-the-queue-status",children:"Check the queue status"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"show workload groups\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql [(none)]>show workload groups\\G;\r\n*************************** 1. row ***************************\r\n                          Id: 1\r\n                        Name: normal\r\n                   cpu_share: 20\r\n                memory_limit: 50%\r\n    enable_memory_overcommit: true\r\n             max_concurrency: 2147483647\r\n              max_queue_size: 0\r\n               queue_timeout: 0\r\n              cpu_hard_limit: 1%\r\n             scan_thread_num: 16\r\n  max_remote_scan_thread_num: -1\r\n  min_remote_scan_thread_num: -1\r\n        memory_low_watermark: 50%\r\n       memory_high_watermark: 80%\r\n                         tag: \r\n       read_bytes_per_second: -1\r\nremote_read_bytes_per_second: -1\r\n           running_query_num: 0\r\n           waiting_query_num: 0\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"running_query_num"}),"Represents the number of queries currently running, ",(0,i.jsx)(n.code,{children:"waiting_query_num"}),"Represents the number of queries in the queue."]}),"\n",(0,i.jsx)(n.h2,{id:"bypass-the-queuing",children:"Bypass the queuing"}),"\n",(0,i.jsx)(n.p,{children:"In some operational scenarios, the administrator account needs to bypass the queuing logic to execute SQL for system management tasks. This can be done by setting session variables to bypass the queuing:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"set bypass_workload_group = true;\n"})})]})}function d(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return u}});var t=r(667294);let i={},s=t.createContext(i);function u(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:u(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);