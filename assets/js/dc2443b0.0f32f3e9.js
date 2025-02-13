"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["441292"],{118187:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>h,assets:()=>s,toc:()=>c,frontMatter:()=>r});var t=JSON.parse('{"id":"query-acceleration/optimization-technology-principle/pipeline-execution-engine","title":"Parallel Execution","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/query-acceleration/optimization-technology-principle/pipeline-execution-engine.md","sourceDirName":"query-acceleration/optimization-technology-principle","slug":"/query-acceleration/optimization-technology-principle/pipeline-execution-engine","permalink":"/docs/query-acceleration/optimization-technology-principle/pipeline-execution-engine","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Parallel Execution","language":"en","toc_min_heading_level":2,"toc_max_heading_level":4},"sidebar":"docs","previous":{"title":"Query Optimizers","permalink":"/docs/query-acceleration/optimization-technology-principle/query-optimizer"},"next":{"title":"Runtime Filter","permalink":"/docs/query-acceleration/optimization-technology-principle/runtime-filter"}}'),a=i("785893"),o=i("250065");let r={title:"Parallel Execution",language:"en",toc_min_heading_level:2,toc_max_heading_level:4},l=void 0,s={},c=[{value:"Physical Plan",id:"physical-plan",level:2},{value:"Pipeline Execution",id:"pipeline-execution",level:2},{value:"Pipeline",id:"pipeline",level:3},{value:"PipelineTask",id:"pipelinetask",level:3},{value:"Operator",id:"operator",level:3},{value:"Scan \u5E76\u884C\u5316",id:"scan-\u5E76\u884C\u5316",level:2},{value:"Local Shuffle",id:"local-shuffle",level:2}];function p(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["The parallel execution model of Doris is a Pipeline execution model, primarily inspired by the implementation described in the ",(0,a.jsx)(n.a,{href:"https://db.in.tum.de/~leis/papers/morsels.pdf",children:"Hyper"})," paper. The Pipeline execution model fully leverages the computational power of multi-core CPUs while limiting the number of query threads in Doris, addressing the issue of thread explosion during execution. For details on its design, implementation, and effectiveness, refer to [DSIP-027](DSIP-027: Support Pipeline Exec Engine - DORIS - Apache Software Foundation) and [DSIP-035](DSIP-035: PipelineX Execution Engine - DORIS - Apache Software Foundation)."]}),"\n",(0,a.jsx)(n.p,{children:"Starting from Doris 3.0, the Pipeline execution model has completely replaced the original Volcano model. Based on the Pipeline execution model, Doris supports the parallel processing of Query, DDL, and DML statements."}),"\n",(0,a.jsx)(n.h2,{id:"physical-plan",children:"Physical Plan"}),"\n",(0,a.jsx)(n.p,{children:"To better understand the Pipeline execution model, it is first necessary to introduce two important concepts in the physical query plan: PlanFragment and PlanNode. We will use the following SQL statement as an example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"SELECT k1, SUM(v1) FROM A,B WHERE A.k2 = B.k2 GROUP BY k1 ORDER BY SUM(v1);\n"})}),"\n",(0,a.jsx)(n.p,{children:"FE will first translate it into the following logical plan, each node represents a PlanNode. The detail meaning of each node type can be found in the introduction of physical plan."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"pip_exec_1",src:i(366754).Z+"",width:"692",height:"988"})}),"\n",(0,a.jsx)(n.p,{children:"Since Doris is built on an MPP architecture, each query aims to involve all BEs in parallel execution as much as possible to reduce query latency. Therefore, the logical plan must be transformed into a physical plan. The transformation essentially involves inserting DataSink and ExchangeNode into the logical plan. These two nodes facilitate the shuffling of data across multiple BEs."}),"\n",(0,a.jsx)(n.p,{children:"After the transformation, each PlanFragment corresponds to a portion of the PlanNode and can be sent as an independent task to a BE. Each BE processes the PlanNode contained within the PlanFragment and then uses the DataSink and ExchangeNode operators to shuffle data to other BEs for subsequent computation."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"pip_exec_2",src:i(168613).Z+"",width:"1548",height:"2286"})}),"\n",(0,a.jsx)(n.p,{children:"Doris's plan is divided into three layers:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"PLAN: The execution plan. A SQL statement is translated by the query planner into an execution plan, which is then provided to the execution engine for execution."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"FRAGMENT: Since Doris is a distributed execution engine, a complete execution plan is divided into multiple single-machine execution fragments. A FRAGMENT represents a complete single-machine execution fragment. Multiple fragments combine to form a complete PLAN."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"PLAN NODE: Operators, which are the smallest units of the execution plan. A FRAGMENT consists of multiple operators, each responsible for a specific execution logic, such as aggregation or join operations."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"pipeline-execution",children:"Pipeline Execution"}),"\n",(0,a.jsx)(n.p,{children:"A PlanFragment is the smallest unit of a task sent by the FE to the BE for execution. A BE may receive multiple different PlanFragments for the same query, and each PlanFragment is processed independently. Upon receiving a PlanFragment, the BE splits it into multiple Pipelines and then starts multiple PipelineTasks to achieve parallel execution, thereby improving query efficiency."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"pip_exec_3",src:i(167987).Z+"",width:"2480",height:"1374"})}),"\n",(0,a.jsx)(n.h3,{id:"pipeline",children:"Pipeline"}),"\n",(0,a.jsx)(n.p,{children:"Pipeline consists of a SourceOperator, a SinkOperator, and several intermediate operators. The SourceOperator represents reading data from an external source, which can be a table (e.g., OlapTable) or a buffer (e.g., Exchange). The SinkOperator represents the data output, which can either be shuffled to other nodes over the network (e.g., DataStreamSinkOperator) or output to a hash table (e.g., aggregation operators, join build hash tables, etc.)."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"pip_exec_4",src:i(98953).Z+"",width:"1144",height:"256"})}),"\n",(0,a.jsx)(n.p,{children:"Multiple Pipelines are actually interdependent. Take the JoinNode as an example\u2014it is split into two Pipelines. Pipeline-0 reads data from Exchange to build the hash table, while Pipeline-1 reads data from the table to perform the probe operation. These two Pipelines are connected by a dependency relationship, meaning Pipeline-1 can only execute after Pipeline-0 has completed. This dependency relationship is referred to as a Dependency. Once Pipeline-0 finishes execution, it calls the set_ready method of the Dependency to notify Pipeline-1 that it is ready to execute."}),"\n",(0,a.jsx)(n.h3,{id:"pipelinetask",children:"PipelineTask"}),"\n",(0,a.jsx)(n.p,{children:"Pipeline is actually a logical concept; it is not an executable entity. Once a Pipeline is defined, it needs to be further instantiated into multiple PipelineTasks. The data that needs to be read is then distributed to different PipelineTasks, ultimately achieving parallel processing. The operators within the multiple PipelineTasks of the same Pipeline are identical, but they differ in their states. For example, they might read different data or build different hash tables. These differing states are referred to as LocalState."}),"\n",(0,a.jsx)(n.p,{children:"Each PipelineTask is eventually submitted to a thread pool to be executed as an independent task. With the Dependency trigger mechanism, this approach allows better utilization of multi-core CPUs and achieves full parallelism."}),"\n",(0,a.jsx)(n.h3,{id:"operator",children:"Operator"}),"\n",(0,a.jsx)(n.p,{children:"In most cases, each operator in a Pipeline corresponds to a PlanNode, but there are some special operators with exceptions:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"JoinNode is split into JoinBuildOperator and JoinProbeOperator."}),"\n",(0,a.jsx)(n.li,{children:"AggNode is split into AggSinkOperator and AggSourceOperator."}),"\n",(0,a.jsx)(n.li,{children:'SortNode is split into SortSinkOperator and SortSourceOperator.\nThe basic principle is that for certain "breaking" operators (those that need to collect all the data before performing computation), the data ingestion part is split into a Sink, while the part that retrieves data from the operator is referred to as the Source.'}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"scan-\u5E76\u884C\u5316",children:"Scan \u5E76\u884C\u5316"}),"\n",(0,a.jsx)(n.p,{children:"Scanning data is a very heavy I/O operation, as it requires reading large amounts of data from local disks (or from HDFS or S3 in the case of data lake scenarios, which introduces even longer latency), consuming a significant amount of time. Therefore, we have introduced parallel scanning technology in the ScanOperator. The ScanOperator dynamically generates multiple Scanners, each of which scans around 1 to 2 million rows of data. While performing the scan, each Scanner handles tasks such as data decompression, filtering, and other calculations, and then sends the data to a DataQueue for the ScanOperator to read."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"pip_exec_5",src:i(750530).Z+"",width:"1554",height:"608"})}),"\n",(0,a.jsx)(n.p,{children:"By using parallel scanning technology, we can effectively avoid issues where certain ScanOperators take an excessively long time due to improper bucketing or data skew, which would otherwise slow down the entire query latency."}),"\n",(0,a.jsx)(n.h2,{id:"local-shuffle",children:"Local Shuffle"}),"\n",(0,a.jsx)(n.p,{children:"In the Pipeline execution model, Local Shuffle acts as a Pipeline Breaker, a technique that redistributes data locally across different execution tasks. It evenly distributes all the data output by the upstream Pipeline to all the tasks in the downstream Pipeline using methods like HASH or Round Robin. This helps solve the problem of data skew during execution, ensuring that the execution model is no longer limited by data storage or the query plan. Let's now provide an example to illustrate how Local Exchange works."}),"\n",(0,a.jsx)(n.p,{children:"We will further explain how Local Exchange can prevent data skew using Pipeline-1 from the previous example."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"pip_exec_6",src:i(103561).Z+"",width:"2044",height:"1174"})}),"\n",(0,a.jsx)(n.p,{children:"As shown in the figure above, by inserting a Local Exchange in Pipeline-1, we further split Pipeline-1 into Pipeline-1-0 and Pipeline-1-1."}),"\n",(0,a.jsx)(n.p,{children:"Now, let's assume the current concurrency level is 3 (each Pipeline has 3 tasks), and each task reads one bucket from the storage layer. The number of rows in the three buckets is 1, 1, and 7, respectively. The execution before and after inserting the Local Exchange changes as follows:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"pip_exec_7",src:i(202482).Z+"",width:"4382",height:"1716"})}),"\n",(0,a.jsx)(n.p,{children:"As can be seen from the figure on the right, the amount of data that the HashJoin and Agg operators need to process changes from (1, 1, 7) to (3, 3, 3), thereby avoiding data skew."}),"\n",(0,a.jsx)(n.p,{children:"Local Shuffle is planned based on a series of rules. For example, when a query involves time-consuming operators like Join, Aggregation, or Window Functions, Local Shuffle is used to minimize data skew as much as possible."})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},366754:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/pip_exec_1-92f1adf96aabc308b9c0517b7a96c0c5.png"},168613:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/pip_exec_2-c2ee830e62f58f7717eb57f68f851f5f.png"},167987:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/pip_exec_3-d0f58e16950b3caba35268d217c5fca8.png"},98953:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/pip_exec_4-41c29e5934fe7e1e5e3b149a0a890378.png"},750530:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/pip_exec_5-6b5079a7333a42175ea8c0a7b24dee58.png"},103561:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/pip_exec_6-bcee6cf888a797d515f1c21b604a564c.png"},202482:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/pip_exec_7-c7efcd37f8334fb4e0ea0c9a55c81d39.png"},250065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return r}});var t=i(667294);let a={},o=t.createContext(a);function r(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);