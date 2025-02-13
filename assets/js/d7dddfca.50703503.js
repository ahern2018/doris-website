"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["88952"],{116581:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>r});var t=JSON.parse('{"id":"query-acceleration/performance-tuning-overview/analysis-tools","title":"Analysis Tools","description":"\x3c!--","source":"@site/docs/query-acceleration/performance-tuning-overview/analysis-tools.md","sourceDirName":"query-acceleration/performance-tuning-overview","slug":"/query-acceleration/performance-tuning-overview/analysis-tools","permalink":"/docs/dev/query-acceleration/performance-tuning-overview/analysis-tools","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Analysis Tools","language":"en"},"sidebar":"docs","previous":{"title":"Diagnostic Tools","permalink":"/docs/dev/query-acceleration/performance-tuning-overview/diagnostic-tools"},"next":{"title":"Tuning Process","permalink":"/docs/dev/query-acceleration/performance-tuning-overview/tuning-process"}}'),o=i("785893"),s=i("250065");let r={title:"Analysis Tools",language:"en"},a=void 0,l={},c=[{value:"Overview",id:"overview",level:2},{value:"Doris Explain",id:"doris-explain",level:2},{value:"Doris Profile",id:"doris-profile",level:2},{value:"Profile File Structure",id:"profile-file-structure",level:3},{value:"Merged Profile",id:"merged-profile",level:3},{value:"Execution Profile",id:"execution-profile",level:3},{value:"PipelineTask Execution Time",id:"pipelinetask-execution-time",level:3},{value:"System-Level Performance Tools",id:"system-level-performance-tools",level:2},{value:"Summary",id:"summary",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsxs)(n.p,{children:["The previous section on ",(0,o.jsx)(n.a,{href:"/docs/dev/query-acceleration/performance-tuning-overview/diagnostic-tools",children:"diagnostic tools"})," helped business and operations personnel pinpoint specific slow SQL queries. This section will introduce how to analyze the performance bottlenecks of slow SQL to determine which part of the SQL execution process is causing the slowdown."]}),"\n",(0,o.jsx)(n.p,{children:"The execution process of an SQL query can be roughly divided into two stages: plan generation and plan execution. The former is responsible for generating the execution plan, while the latter executes the specific plan. Issues in either part can lead to performance bottlenecks. For example, if a poor plan is generated, no matter how excellent the executor is, good performance cannot be achieved. Similarly, even with a correct plan, inappropriate execution methods can also lead to performance bottlenecks. Furthermore, the performance of the executor is closely related to the current hardware and system architecture. Deficiencies in infrastructure or incorrect configurations can also cause performance issues."}),"\n",(0,o.jsx)(n.p,{children:"All three types of problems require the support of good analysis tools. Based on this, the Doris system provides two performance analysis tools to analyze bottlenecks in planning and execution respectively. Additionally, the system level also offers corresponding performance monitoring tools to assist in locating performance bottlenecks. The following sections will introduce these three aspects:"}),"\n",(0,o.jsx)(n.h2,{id:"doris-explain",children:"Doris Explain"}),"\n",(0,o.jsx)(n.p,{children:"An execution plan describes the specific execution method and process of an SQL query. For example, for an SQL query that joins two tables, the execution plan will show information such as how the tables are accessed, the join method, and the join order."}),"\n",(0,o.jsx)(n.p,{children:"Doris provides the Explain tool, which conveniently displays detailed information about an SQL query's execution plan. By analyzing the plan output by Explain, users can quickly locate bottlenecks at the planning level and perform plan-level tuning based on different situations."}),"\n",(0,o.jsx)(n.p,{children:"Doris offers multiple Explain tools with different levels of granularity, such as Explain Verbose, Explain All Plan, Explain Memo Plan, and Explain Shape Plan, which are used to display the final physical plan, logical plans at various stages, plans based on cost optimization processes, and plan shapes, respectively. For detailed information, please refer to the Execution Plan Explain section to learn about the usage of various Explain tools and the interpretation of their output information."}),"\n",(0,o.jsx)(n.p,{children:"By analyzing the output of Explain, business personnel and DBAs can quickly locate performance bottlenecks in the current plan. For example, by analyzing the execution plan, it may be discovered that filters are not pushed down to the base tables, resulting in data not being filtered early and an excessive amount of data being involved in calculations, leading to performance issues. Another example is that in an Inner equi-join of two tables, the filter conditions on one side of the join condition are not derived to the other side, resulting in the data of the other table not being filtered early, which may also lead to suboptimal performance. Such performance bottlenecks can be located and resolved by analyzing the output of Explain."}),"\n",(0,o.jsxs)(n.p,{children:["For cases of using Doris Explain output to perform plan-level tuning, please refer to the ",(0,o.jsx)(n.a,{href:"/docs/dev/query-acceleration/tuning/tuning-plan/optimizing-table-schema",children:"Plan Tuning"})," section."]}),"\n",(0,o.jsx)(n.h2,{id:"doris-profile",children:"Doris Profile"}),"\n",(0,o.jsx)(n.p,{children:"The Explain tool described above outlines the execution plan for an SQL query, such as planning a join operation between tables t1 and t2 as a Hash Join, with t1 designated as the build side and t2 as the probe side. When the SQL query is actually executed, understanding how much time each specific execution step takes\u2014for instance, how long the build phase lasts and how long the probe phase lasts\u2014is crucial for performance analysis and tuning. The Profile tool provides detailed execution information for this purpose. The following section first gives an overview of the Profile file structure and then introduces the meanings of execution times in Merged Profile, Execution Profile, and PipelineTask."}),"\n",(0,o.jsx)(n.h3,{id:"profile-file-structure",children:"Profile File Structure"}),"\n",(0,o.jsx)(n.p,{children:"A Profile file contains several main sections:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Basic query information: including ID, time, database, etc."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"The SQL statement and its execution plan."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Time spent by the Frontend (FE) on tasks like Plan Time, Schedule Time, etc."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Execution time spent by each operator during the Backend (BE) processing (including Merged Profile and Execution Profile)."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"The detailed information about the execution side is mainly contained in the last part. Next, we will mainly introduce what information the Profile can provide for performance analysis."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"merged-profile",children:"Merged Profile"}),"\n",(0,o.jsx)(n.p,{children:"To help users more accurately analyze performance bottlenecks, Doris provides aggregated profile results for each operator. Taking the EXCHANGE_OPERATOR as an example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"EXCHANGE_OPERATOR  (id=4):\n    -  BlocksProduced:  sum  0,  avg  0,  max  0,  min  0\n    -  CloseTime:  avg  34.133us,  max  38.287us,  min  29.979us\n    -  ExecTime:  avg  700.357us,  max  706.351us,  min  694.364us\n    -  InitTime:  avg  648.104us,  max  648.604us,  min  647.605us\n    -  MemoryUsage:  sum  ,  avg  ,  max  ,  min  \n    -  PeakMemoryUsage:  sum  0.00  ,  avg  0.00  ,  max  0.00  ,  min  0.00  \n    -  OpenTime:  avg  4.541us,  max  5.943us,  min  3.139us\n    -  ProjectionTime:  avg  0ns,  max  0ns,  min  0ns\n    -  RowsProduced:  sum  0,  avg  0,  max  0,  min  0\n    -  WaitForDependencyTime:  avg  0ns,  max  0ns,  min  0ns\n    -  WaitForData0:  avg  9.434ms,  max  9.476ms,  min  9.391ms\n"})}),"\n",(0,o.jsx)(n.p,{children:"The Merged Profile consolidates key metrics for each operator, with the core metrics and their meanings outlined below:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Metric Name"}),(0,o.jsx)(n.th,{children:"Metric Definition"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"BlocksProduced"}),(0,o.jsx)(n.td,{children:"Number of Data Blocks produced"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"CloseTime"}),(0,o.jsx)(n.td,{children:"Time spent by the Operator during the close phase"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"ExecTime"}),(0,o.jsx)(n.td,{children:"Total execution time of the Operator across all phases"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"InitTime"}),(0,o.jsx)(n.td,{children:"Time spent by the Operator during the initialization phase"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"MemoryUsage"}),(0,o.jsx)(n.td,{children:"Memory usage of the Operator during execution"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"OpenTime"}),(0,o.jsx)(n.td,{children:"Time spent by the Operator during the open phase"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"ProjectionTime"}),(0,o.jsx)(n.td,{children:"Time spent by the Operator on projections"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"RowsProduced"}),(0,o.jsx)(n.td,{children:"Number of rows returned by the Operator"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"WaitForDependencyTime"}),(0,o.jsx)(n.td,{children:"Time the Operator waits for its execution dependencies"})]})]})]}),"\n",(0,o.jsx)(n.p,{children:"In Doris, each operator executes concurrently based on the concurrency level set by the user. Therefore, the Merged Profile calculates the Max, Avg, and Min values for each metric across all concurrent executions."}),"\n",(0,o.jsx)(n.p,{children:"WaitForDependencyTime varies for each Operator, as the execution dependencies differ. For instance, in the case of an EXCHANGE_OPERATOR, the dependency is on data being sent by upstream operators via RPC. Thus, WaitForDependencyTime in this context specifically refers to the time spent waiting for upstream operators to send data."}),"\n",(0,o.jsx)(n.h3,{id:"execution-profile",children:"Execution Profile"}),"\n",(0,o.jsx)(n.p,{children:"Unlike the Merged Profile, the Execution Profile displays detailed metrics for a specific concurrent execution. Taking the exchange operator with id=4 as an example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"EXCHANGE_OPERATOR  (id=4):(ExecTime:  706.351us)\n      -  BlocksProduced:  0\n      -  CloseTime:  38.287us\n      -  DataArrivalWaitTime:  0ns\n      -  DecompressBytes:  0.00  \n      -  DecompressTime:  0ns\n      -  DeserializeRowBatchTimer:  0ns\n      -  ExecTime:  706.351us\n      -  FirstBatchArrivalWaitTime:  0ns\n      -  InitTime:  647.605us\n      -  LocalBytesReceived:  0.00  \n      -  MemoryUsage:  \n      -  PeakMemoryUsage:  0.00  \n      -  OpenTime:  5.943us\n      -  ProjectionTime:  0ns\n      -  RemoteBytesReceived:  0.00  \n      -  RowsProduced:  0\n      -  SendersBlockedTotalTimer(*):  0ns\n      -  WaitForDependencyTime:  0ns\n      -  WaitForData0:  9.476ms\n"})}),"\n",(0,o.jsx)(n.p,{children:"In this profile, for instance, LocalBytesReceived is a metric specific to the exchange operator and not found in other operators, hence it is not included in the Merged Profile."}),"\n",(0,o.jsx)(n.h3,{id:"pipelinetask-execution-time",children:"PipelineTask Execution Time"}),"\n",(0,o.jsx)(n.p,{children:"In Doris, a PipelineTask consists of multiple operators. When analyzing the execution time of a PipelineTask, several key aspects need to be focused on:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"ExecuteTime: 1.656ms (The actual execution time of the entire PipelineTask, which is approximately the sum of the ExecTime of all operators within the task)."}),"\n",(0,o.jsx)(n.li,{children:"WaitWorkerTime: 63.868us (The time the task waits for an execution worker. When the task is in a runnable state, it waits for an available worker to execute it, and this duration primarily depends on the cluster load)."}),"\n",(0,o.jsx)(n.li,{children:"Time Waiting for Execution Dependencies: 10.495ms (WaitForBroadcastBuffer + WaitForRpcBufferQueue + WaitForDependency[AGGREGATION_OPERATOR_DEPENDENCY]Time). The time a task waits for execution dependencies is the sum of the waiting times for these dependencies."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["For cases of using Profile for execution-level tuning, please refer to the ",(0,o.jsx)(n.a,{href:"/docs/dev/query-acceleration/tuning/tuning-execution/adjustment-of-runtimefilter-wait-time",children:"Tuning Execution"})," section."]}),"\n",(0,o.jsx)(n.h2,{id:"system-level-performance-tools",children:"System-Level Performance Tools"}),"\n",(0,o.jsx)(n.p,{children:"Commonly used system tools can assist in identifying performance bottlenecks during execution. For instance, widely used Linux tools such as top, free, perf, sar, and iostats can be utilized to observe the CPU, memory, I/O, and network status of the system while SQL is running, thereby aiding in the identification of performance bottlenecks."}),"\n",(0,o.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,o.jsx)(n.p,{children:"Effective performance analysis tools are crucial for quickly identifying performance bottlenecks. Doris provides Explain and Profile, offering powerful support for analyzing issues with execution plans and identifying which operations consume the most time during execution. Additionally, proficient use of system-level analysis tools can greatly assist in locating performance bottlenecks."})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return r}});var t=i(667294);let o={},s=t.createContext(o);function r(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);