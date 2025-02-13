"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["986354"],{704109:function(e,n,r){r.r(n),r.d(n,{metadata:()=>i,contentTitle:()=>d,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>l});var i=JSON.parse('{"id":"admin-manual/workload-management/spill-disk","title":"Spill Disk","description":"\x3c!--","source":"@site/docs/admin-manual/workload-management/spill-disk.md","sourceDirName":"admin-manual/workload-management","slug":"/admin-manual/workload-management/spill-disk","permalink":"/docs/dev/admin-manual/workload-management/spill-disk","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Spill Disk","language":"en"}}'),s=r("785893"),t=r("250065");let l={title:"Spill Disk",language:"en"},d=void 0,o={},c=[{value:"\u6982\u8FF0",id:"\u6982\u8FF0",level:2},{value:"BE Process Memory Configuration",id:"be-process-memory-configuration",level:3},{value:"Workload Group Memory Configuration",id:"workload-group-memory-configuration",level:3},{value:"Query Memory Management",id:"query-memory-management",level:2},{value:"Static Memory Allocation",id:"static-memory-allocation",level:3},{value:"Slot-Based Memory Allocation",id:"slot-based-memory-allocation",level:3},{value:"Spilling",id:"spilling",level:2},{value:"Enabling Query Intermediate Result Spilling",id:"enabling-query-intermediate-result-spilling",level:3},{value:"BE Configuration Items",id:"be-configuration-items",level:4},{value:"FE Session Variable",id:"fe-session-variable",level:4},{value:"Workload Group",id:"workload-group",level:4},{value:"Monitoring Spilling",id:"monitoring-spilling",level:3},{value:"Audit Logs",id:"audit-logs",level:4},{value:"Profile",id:"profile",level:4},{value:"System Tables",id:"system-tables",level:4},{value:"backend_active_tasks",id:"backend_active_tasks",level:5},{value:"workload_group_resource_usage",id:"workload_group_resource_usage",level:5},{value:"Testing",id:"testing",level:2},{value:"Test Environment",id:"test-environment",level:3},{value:"Machine Configuration",id:"machine-configuration",level:4},{value:"\u6D4B\u8BD5\u6570\u636E",id:"\u6D4B\u8BD5\u6570\u636E",level:4},{value:"Test Results",id:"test-results",level:3}];function a(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u6982\u8FF0",children:"\u6982\u8FF0"}),"\n",(0,s.jsx)(n.p,{children:"Doris's computing layer adopts an MPP (Massively Parallel Processing) architecture, where all computing tasks are completed in the memory of BEs (Backends), and data exchange between BEs is also conducted through memory. Therefore, memory management plays a crucial role in ensuring the stability of queries. According to online query statistics, a significant portion of query errors are related to memory issues. As more and more users migrate tasks such as ETL data processing, multi-table materialized view processing, and complex AdHoc queries to Doris, it is necessary to offload intermediate operation results to disk to enable the execution of queries that require more memory than each query or each node can handle. Specifically, when processing large datasets or executing complex queries, memory consumption can increase rapidly, exceeding the memory limits of a single node or the entire query processing process. Doris alleviates memory pressure by writing intermediate results (such as intermediate states of aggregation, temporary data for sorting, etc.) to disk rather than relying solely on memory to store these data. This approach offers several benefits:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Scalability: Allows Doris to handle datasets much larger than the memory limit of a single node."}),"\n",(0,s.jsx)(n.li,{children:"Stability: Reduces the risk of query failures or system crashes due to insufficient memory."}),"\n",(0,s.jsx)(n.li,{children:"Flexibility: Enables users to execute more complex queries without increasing hardware resources."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"To avoid triggering OOM (Out of Memory) when requesting memory, Doris has introduced a reserve memory mechanism. The workflow of this mechanism is as follows:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"During execution, Doris estimates the memory size required to process each block and then requests it from a unified memory manager."}),"\n",(0,s.jsx)(n.li,{children:"The global memory allocator determines whether the current memory request exceeds the memory limit of the query or the entire process. If it does, the request fails."}),"\n",(0,s.jsx)(n.li,{children:"When Doris receives a failure message, it suspends the current query, selects the largest operator for spilling to disk, and resumes query execution after spilling is complete."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Currently, the operators that support spilling include:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Hash Join operator"}),"\n",(0,s.jsx)(n.li,{children:"Aggregation operator"}),"\n",(0,s.jsx)(n.li,{children:"Sort operator"}),"\n",(0,s.jsx)(n.li,{children:"CTE"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"When a query triggers spilling, additional disk read/write operations may significantly increase query time. It is recommended to increase the FE Session variable query_timeout. Additionally, spilling can generate significant disk I/O, so it is advisable to configure a separate disk directory or use SSD disks to reduce the impact of query spilling on normal data ingestion or queries. The query spilling feature is currently disabled by default."}),"\n",(0,s.jsxs)(n.p,{children:["##Memory Management Mechanism\nDoris's memory management is divided into three levels: process level, WorkloadGroup level, and Query level.\n",(0,s.jsx)(n.img,{alt:"spill_disk_memory",src:r(507499).Z+"",width:"1738",height:"1122"})]}),"\n",(0,s.jsx)(n.h3,{id:"be-process-memory-configuration",children:"BE Process Memory Configuration"}),"\n",(0,s.jsx)(n.p,{children:"The memory of the entire BE process is controlled by the mem_limit parameter in be.conf. Once Doris's memory usage exceeds this threshold, Doris cancels the current query that is requesting memory. Additionally, a background task asynchronously kills some queries to release memory or cache. Therefore, Doris's internal management operations (such as spilling to disk, flushing memtable, etc.) need to run when approaching this threshold to avoid reaching it. Once the threshold is reached, to prevent the entire process from experiencing OOM, Doris takes some drastic self-protection measures.\nWhen Doris's BE is collocated with other processes (such as Doris FE, Kafka, HDFS), the actual available memory for Doris BE may be significantly less than the user-set mem_limit, causing the internal memory release mechanism to fail and potentially leading to the Doris process being killed by the operating system's OOM Killer.\nWhen the Doris process is deployed in K8S or managed by Cgroup, Doris automatically senses the memory configuration of the container."}),"\n",(0,s.jsx)(n.h3,{id:"workload-group-memory-configuration",children:"Workload Group Memory Configuration"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"memory_limit, default is 30%. Represents the percentage of memory allocated to the current workload group as a fraction of the entire process memory."}),"\n",(0,s.jsx)(n.li,{children:"enable_memory_overcommit, default is true. Indicates whether the memory limit for the current workload group is a hard or soft limit. When this value is true, it means that the memory usage of all tasks within this workload group can exceed the memory_limit. However, when the memory of the entire process is insufficient, to ensure rapid memory reclamation, BE will prioritize canceling queries from workload groups that exceed their limits without waiting for spilling to disk. This is a user-friendly configuration strategy when users are unsure how much memory to allocate to multiple workload groups."}),"\n",(0,s.jsx)(n.li,{children:"write_buffer_ratio, default is 20%. Represents the size of the write buffer within the current workload group. To speed up data ingestion, Doris first accumulates data in memory (i.e., constructs a Memtable), sorts it in its entirety when it reaches a certain size, and then writes it to disk. However, accumulating too many Memtables in memory can affect the memory available for normal queries, leading to query cancellation. Therefore, Doris allocates a separate write buffer for each workload group. For workload groups with heavy write operations, a larger write buffer can effectively improve ingestion throughput; for workload groups with more query operations, this value can be reduced."}),"\n",(0,s.jsx)(n.li,{children:"low watermark: Default is 75%."}),"\n",(0,s.jsx)(n.li,{children:"high watermark: Default is 90%."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"query-memory-management",children:"Query Memory Management"}),"\n",(0,s.jsx)(n.h3,{id:"static-memory-allocation",children:"Static Memory Allocation"}),"\n",(0,s.jsx)(n.p,{children:"The memory used by a query is controlled by the following two parameters:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"exec_mem_limit, representing the maximum memory that a query can use, with a default value of 2GB."}),"\n",(0,s.jsx)(n.li,{children:"enable_mem_overcommit, default is true. Indicates whether the memory used by a query can exceed the exec_mem_limit. The default value is true, meaning it can exceed this limit. When the process memory is insufficient, queries that exceed the memory limit will be killed. If set to false, the query's memory usage cannot exceed this limit. When exceeded, spilling to disk or query killing will occur based on user settings. These two parameters must be set by the user in the session variable before query execution and cannot be dynamically modified during execution."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"slot-based-memory-allocation",children:"Slot-Based Memory Allocation"}),"\n",(0,s.jsx)(n.p,{children:"In practice, we found that with static memory allocation, users often do not know how much memory to allocate to a query. Therefore, exec_mem_limit is frequently set to half of the entire BE process memory, meaning that the memory used by all queries within the BE cannot exceed half of the process memory. In this scenario, this feature effectively becomes a kind of fuse. When we need to implement more granular policy control based on memory size, such as spilling to disk, this value is too large to rely on for control.\nTherefore, we have implemented a new slot-based memory limitation method based on workload groups. The principle of this strategy is as follows:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Each workload group is configured with two parameters by the user: memory_limit and max_concurrency. It is assumed that the memory of the entire BE is divided into max_concurrency slots, with each slot occupying memory_limit / max_concurrency of memory."}),"\n",(0,s.jsx)(n.li,{children:"By default, each query occupies one slot during execution. If the user wants a query to use more memory, they need to modify the query_slot_count value."}),"\n",(0,s.jsx)(n.li,{children:"Since the total number of slots in a workload group is fixed, increasing query_slot_count means each query occupies more slots, dynamically reducing the number of queries that can run concurrently in the workload group, causing new queries to automatically queue."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The slot_memory_policy for workload groups can have three optional values:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"disabled, the default value, indicating that it is not enabled and the static memory allocation method is used."}),"\n",(0,s.jsx)(n.li,{children:"fixed, where the memory that each query can use is calculated as workload group's mem_limit * query_slot_count / max_concurrency."}),"\n",(0,s.jsx)(n.li,{children:"dynamic, where the memory that each query can use is calculated as workload group's mem_limit * query_slot_count / sum(running query slots). This mainly overcomes the issue of unused slots in fixed mode. Both fixed and dynamic set hard limits for queries. Once exceeded, spilling to disk or query killing will occur, and these will override the static memory allocation parameters set by the user. Therefore, when setting slot_memory_policy, it is essential to properly configure max_concurrency for the workload group to avoid memory insufficiency issues."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"spilling",children:"Spilling"}),"\n",(0,s.jsx)(n.h3,{id:"enabling-query-intermediate-result-spilling",children:"Enabling Query Intermediate Result Spilling"}),"\n",(0,s.jsx)(n.h4,{id:"be-configuration-items",children:"BE Configuration Items"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"spill_storage_root_path=/mnt/disk1/spilltest/doris/be/storage;/mnt/disk2/doris-spill;/mnt/disk3/doris-spill\nspill_storage_limit=100%\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"spill_storage_root_path: The storage path for query intermediate result spilling files, which defaults to the same as storage_root_path."}),"\n",(0,s.jsx)(n.li,{children:"spill_storage_limit: The disk space limit for spilling files. It can be configured with a specific space size (e.g., 100GB, 1TB) or a percentage, with a default of 20%. If spill_storage_root_path is configured with a separate disk, it can be set to 100%. This parameter primarily prevents spilling from occupying too much disk space, impeding normal data storage. After modifying the configuration items, you need to restart BE for them to take effect."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"fe-session-variable",children:"FE Session Variable"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"set enable_spill=true;\nset exec_mem_limit = 10g\nset enable_mem_overcommit = false\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"enable_spill, indicates whether spilling is enabled for a query."}),"\n",(0,s.jsx)(n.li,{children:"exec_mem_limit, represents the maximum memory size used by a query."}),"\n",(0,s.jsx)(n.li,{children:"enable_mem_overcommit, indicates whether a query can use memory exceeding the exec_mem_limit."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"workload-group",children:"Workload Group"}),"\n",(0,s.jsx)(n.p,{children:"The default memory_limit for workload groups is 30%, which can be adjusted based on the actual number of workload groups. If there is only one workload group, it can be adjusted to 90%."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"alter workload group normal properties ( 'memory_limit'='90%' );\n"})}),"\n",(0,s.jsx)(n.h3,{id:"monitoring-spilling",children:"Monitoring Spilling"}),"\n",(0,s.jsx)(n.h4,{id:"audit-logs",children:"Audit Logs"}),"\n",(0,s.jsx)(n.p,{children:"The FE audit log has added the SpillWriteBytesToLocalStorage and SpillReadBytesFromLocalStorage fields, representing the total amount of data written to and read from local storage during spilling, respectively."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"SpillWriteBytesToLocalStorage=503412182|SpillReadBytesFromLocalStorage=503412182\n"})}),"\n",(0,s.jsx)(n.h4,{id:"profile",children:"Profile"}),"\n",(0,s.jsx)(n.p,{children:"If spilling is triggered during a query, some Spill-prefixed counters are added to the Query Profile to mark and count spilling-related activities. Taking HashJoin's Build HashTable as an example, you can see the following counters:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"PARTITIONED_HASH_JOIN_SINK_OPERATOR  (id=4  ,  nereids_id=179):(ExecTime:  6sec351ms)\n      -  Spilled:  true\n      -  CloseTime:  528ns\n      -  ExecTime:  6sec351ms\n      -  InitTime:  5.751us\n      -  InputRows:  6.001215M  (6001215)\n      -  MemoryUsage:  0.00  \n      -  MemoryUsagePeak:  554.42  MB\n      -  MemoryUsageReserved:  1024.00  KB\n      -  OpenTime:  2.267ms\n      -  PendingFinishDependency:  0ns\n      -  SpillBuildTime:  2sec437ms\n      -  SpillInMemRow:  0\n      -  SpillMaxRowsOfPartition:  68.569K  (68569)\n      -  SpillMinRowsOfPartition:  67.455K  (67455)\n      -  SpillPartitionShuffleTime:  836.302ms\n      -  SpillPartitionTime:  131.839ms\n      -  SpillTotalTime:  5sec563ms\n      -  SpillWriteBlockBytes:  714.13  MB\n      -  SpillWriteBlockCount:  1.344K  (1344)\n      -  SpillWriteFileBytes:  244.40  MB\n      -  SpillWriteFileTime:  350.754ms\n      -  SpillWriteFileTotalCount:  32\n      -  SpillWriteRows:  6.001215M  (6001215)\n      -  SpillWriteSerializeBlockTime:  4sec378ms\n      -  SpillWriteTaskCount:  417\n      -  SpillWriteTaskWaitInQueueCount:  0\n      -  SpillWriteTaskWaitInQueueTime:  8.731ms\n      -  SpillWriteTime:  5sec549ms\n"})}),"\n",(0,s.jsx)(n.h4,{id:"system-tables",children:"System Tables"}),"\n",(0,s.jsx)(n.h5,{id:"backend_active_tasks",children:"backend_active_tasks"}),"\n",(0,s.jsx)(n.p,{children:"The SPILL_WRITE_BYTES_TO_LOCAL_STORAGE and SPILL_READ_BYTES_FROM_LOCAL_STORAGE fields have been added, representing the total amount of data currently being written to and read from local storage for intermediate results during a query."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql [information_schema]>select * from backend_active_tasks;\n+-------+------------+-------------------+-----------------------------------+--------------+------------------+-----------+------------+----------------------+---------------------------+--------------------+-------------------+------------+------------------------------------+-------------------------------------+\n| BE_ID | FE_HOST    | WORKLOAD_GROUP_ID | QUERY_ID                          | TASK_TIME_MS | TASK_CPU_TIME_MS | SCAN_ROWS | SCAN_BYTES | BE_PEAK_MEMORY_BYTES | CURRENT_USED_MEMORY_BYTES | SHUFFLE_SEND_BYTES | SHUFFLE_SEND_ROWS | QUERY_TYPE | SPILL_WRITE_BYTES_TO_LOCAL_STORAGE | SPILL_READ_BYTES_FROM_LOCAL_STORAGE |\n+-------+------------+-------------------+-----------------------------------+--------------+------------------+-----------+------------+----------------------+---------------------------+--------------------+-------------------+------------+------------------------------------+-------------------------------------+\n| 10009 | 10.16.10.8 |                 1 | 6f08c74afbd44fff-9af951270933842d |        13612 |            11025 |  12002430 | 1960955904 |            733243057 |                  70113260 |                  0 |                 0 | SELECT     |                          508110119 |                            26383070 |\n| 10009 | 10.16.10.8 |                 1 | 871d643b87bf447b-865eb799403bec96 |            0 |                0 |         0 |          0 |                    0 |                         0 |                  0 |                 0 | SELECT     |                                  0 |                                   0 |\n+-------+------------+-------------------+-----------------------------------+--------------+------------------+-----------+------------+----------------------+---------------------------+--------------------+-------------------+------------+------------------------------------+-------------------------------------+\n2 rows in set (0.00 sec)\n"})}),"\n",(0,s.jsx)(n.h5,{id:"workload_group_resource_usage",children:"workload_group_resource_usage"}),"\n",(0,s.jsx)(n.p,{children:"The WRITE_BUFFER_USAGE_BYTES field has been added, representing the memory usage of Memtables for ingestion tasks within the workload group."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql [information_schema]>select * from workload_group_resource_usage;\n+-------+-------------------+--------------------+-------------------+-----------------------------+------------------------------+--------------------------+\n| BE_ID | WORKLOAD_GROUP_ID | MEMORY_USAGE_BYTES | CPU_USAGE_PERCENT | LOCAL_SCAN_BYTES_PER_SECOND | REMOTE_SCAN_BYTES_PER_SECOND | WRITE_BUFFER_USAGE_BYTES |\n+-------+-------------------+--------------------+-------------------+-----------------------------+------------------------------+--------------------------+\n| 10009 |                 1 |          102314948 |              0.69 |                           0 |                            0 |                 23404836 |\n+-------+-------------------+--------------------+-------------------+-----------------------------+------------------------------+--------------------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"testing",children:"Testing"}),"\n",(0,s.jsx)(n.h3,{id:"test-environment",children:"Test Environment"}),"\n",(0,s.jsx)(n.h4,{id:"machine-configuration",children:"Machine Configuration"}),"\n",(0,s.jsx)(n.p,{children:"The test used Alibaba Cloud servers with the following specific configurations:"}),"\n",(0,s.jsx)(n.p,{children:"1FE:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"16 cores(vCPU) 32 GiB 200 Mbps ecs.c6.4xlarge\n"})}),"\n",(0,s.jsx)(n.p,{children:"3BE:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"16 cores(vCPU) 64 GiB 0 Mbps ecs.g6.4xlarge\n"})}),"\n",(0,s.jsx)(n.h4,{id:"\u6D4B\u8BD5\u6570\u636E",children:"\u6D4B\u8BD5\u6570\u636E"}),"\n",(0,s.jsx)(n.p,{children:"The test data used TPC-DS 10TB as input, sourced from Alibaba Cloud DLF, and mounted to Doris using the Catalog method. The SQL statement is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'CREATE CATALOG dlf PROPERTIES (\n"type"="hms",\n"hive.metastore.type" = "dlf",\n"dlf.proxy.mode" = "DLF_ONLY",\n"dlf.endpoint" = "dlf-vpc.cn-beijing.aliyuncs.com",\n"dlf.region" = "cn-beijing",\n"dlf.uid" = "217316283625971977",\n"dlf.catalog.id" = "emr_dev",\n"dlf.access_key" = "fill in as applicable",\n"dlf.secret_key" = "fill in as applicable"\n);\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Reference website: ",(0,s.jsx)(n.a,{href:"https://doris.apache.org/zh-CN/docs/dev/benchmark/tpcds",children:"https://doris.apache.org/zh-CN/docs/dev/benchmark/tpcds"})]}),"\n",(0,s.jsx)(n.h3,{id:"test-results",children:"Test Results"}),"\n",(0,s.jsx)(n.p,{children:"The dataset size was 10TB. The ratio of memory to dataset size was 1:52. The overall runtime was 32,000 seconds, and all 99 queries were successfully executed. In the future, we will provide spilling capabilities for more operators (such as window functions, Intersect, etc.) and continue to optimize performance under spilling conditions, reduce disk consumption, and improve query stability."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"query"}),(0,s.jsx)(n.th,{children:"Time(ms)"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query1"}),(0,s.jsx)(n.td,{children:"25590"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query2"}),(0,s.jsx)(n.td,{children:"126445"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query3"}),(0,s.jsx)(n.td,{children:"103859"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query4"}),(0,s.jsx)(n.td,{children:"1174702"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query5"}),(0,s.jsx)(n.td,{children:"266281"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query6"}),(0,s.jsx)(n.td,{children:"62950"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query7"}),(0,s.jsx)(n.td,{children:"212745"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query8"}),(0,s.jsx)(n.td,{children:"67000"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query9"}),(0,s.jsx)(n.td,{children:"602291"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query10"}),(0,s.jsx)(n.td,{children:"70904"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query11"}),(0,s.jsx)(n.td,{children:"544436"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query12"}),(0,s.jsx)(n.td,{children:"25759"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query13"}),(0,s.jsx)(n.td,{children:"229144"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query14"}),(0,s.jsx)(n.td,{children:"1120895"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query15"}),(0,s.jsx)(n.td,{children:"29409"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query16"}),(0,s.jsx)(n.td,{children:"117287"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query17"}),(0,s.jsx)(n.td,{children:"260122"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query18"}),(0,s.jsx)(n.td,{children:"97453"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query19"}),(0,s.jsx)(n.td,{children:"127384"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query20"}),(0,s.jsx)(n.td,{children:"32749"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query21"}),(0,s.jsx)(n.td,{children:"4471"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query22"}),(0,s.jsx)(n.td,{children:"10162"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query23"}),(0,s.jsx)(n.td,{children:"1772561"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query24"}),(0,s.jsx)(n.td,{children:"535506"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query25"}),(0,s.jsx)(n.td,{children:"272458"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query26"}),(0,s.jsx)(n.td,{children:"83342"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query27"}),(0,s.jsx)(n.td,{children:"175264"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query28"}),(0,s.jsx)(n.td,{children:"887007"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query29"}),(0,s.jsx)(n.td,{children:"427229"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query30"}),(0,s.jsx)(n.td,{children:"13661"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query31"}),(0,s.jsx)(n.td,{children:"108778"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query32"}),(0,s.jsx)(n.td,{children:"37303"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query33"}),(0,s.jsx)(n.td,{children:"181351"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query34"}),(0,s.jsx)(n.td,{children:"84159"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query35"}),(0,s.jsx)(n.td,{children:"81701"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query36"}),(0,s.jsx)(n.td,{children:"152990"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query37"}),(0,s.jsx)(n.td,{children:"36815"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query38"}),(0,s.jsx)(n.td,{children:"172531"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query39"}),(0,s.jsx)(n.td,{children:"20155"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query40"}),(0,s.jsx)(n.td,{children:"75749"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query41"}),(0,s.jsx)(n.td,{children:"527"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query42"}),(0,s.jsx)(n.td,{children:"95910"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query43"}),(0,s.jsx)(n.td,{children:"66821"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query44"}),(0,s.jsx)(n.td,{children:"209947"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query45"}),(0,s.jsx)(n.td,{children:"26946"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query46"}),(0,s.jsx)(n.td,{children:"131490"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query47"}),(0,s.jsx)(n.td,{children:"158011"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query48"}),(0,s.jsx)(n.td,{children:"149482"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query49"}),(0,s.jsx)(n.td,{children:"303515"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query50"}),(0,s.jsx)(n.td,{children:"298089"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query51"}),(0,s.jsx)(n.td,{children:"156487"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query52"}),(0,s.jsx)(n.td,{children:"97440"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query53"}),(0,s.jsx)(n.td,{children:"98258"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query54"}),(0,s.jsx)(n.td,{children:"202583"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query55"}),(0,s.jsx)(n.td,{children:"93268"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query56"}),(0,s.jsx)(n.td,{children:"185255"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query57"}),(0,s.jsx)(n.td,{children:"80308"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query58"}),(0,s.jsx)(n.td,{children:"252746"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query59"}),(0,s.jsx)(n.td,{children:"171545"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query60"}),(0,s.jsx)(n.td,{children:"202915"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query61"}),(0,s.jsx)(n.td,{children:"272184"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query62"}),(0,s.jsx)(n.td,{children:"38749"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query63"}),(0,s.jsx)(n.td,{children:"94327"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query64"}),(0,s.jsx)(n.td,{children:"247074"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query65"}),(0,s.jsx)(n.td,{children:"270705"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query66"}),(0,s.jsx)(n.td,{children:"101465"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query67"}),(0,s.jsx)(n.td,{children:"3744186"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query68"}),(0,s.jsx)(n.td,{children:"151543"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query69"}),(0,s.jsx)(n.td,{children:"15559"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query70"}),(0,s.jsx)(n.td,{children:"132505"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query71"}),(0,s.jsx)(n.td,{children:"180079"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query72"}),(0,s.jsx)(n.td,{children:"3085373"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query73"}),(0,s.jsx)(n.td,{children:"82623"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query74"}),(0,s.jsx)(n.td,{children:"330087"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query75"}),(0,s.jsx)(n.td,{children:"830993"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query76"}),(0,s.jsx)(n.td,{children:"188805"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query77"}),(0,s.jsx)(n.td,{children:"239730"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query78"}),(0,s.jsx)(n.td,{children:"1895765"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query79"}),(0,s.jsx)(n.td,{children:"144829"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query80"}),(0,s.jsx)(n.td,{children:"463652"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query81"}),(0,s.jsx)(n.td,{children:"15319"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query82"}),(0,s.jsx)(n.td,{children:"76961"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query83"}),(0,s.jsx)(n.td,{children:"32437"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query84"}),(0,s.jsx)(n.td,{children:"22849"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query85"}),(0,s.jsx)(n.td,{children:"58186"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query86"}),(0,s.jsx)(n.td,{children:"33933"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query87"}),(0,s.jsx)(n.td,{children:"185421"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query88"}),(0,s.jsx)(n.td,{children:"434867"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query89"}),(0,s.jsx)(n.td,{children:"108265"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query90"}),(0,s.jsx)(n.td,{children:"31131"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query91"}),(0,s.jsx)(n.td,{children:"18864"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query92"}),(0,s.jsx)(n.td,{children:"24510"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query93"}),(0,s.jsx)(n.td,{children:"281904"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query94"}),(0,s.jsx)(n.td,{children:"67761"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query95"}),(0,s.jsx)(n.td,{children:"3738968"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query96"}),(0,s.jsx)(n.td,{children:"47245"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query97"}),(0,s.jsx)(n.td,{children:"536702"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query98"}),(0,s.jsx)(n.td,{children:"97800"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query99"}),(0,s.jsx)(n.td,{children:"62210"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sum"}),(0,s.jsx)(n.td,{children:"31797707"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},507499:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/spill_disk_memory-978ace0fa9f62c3e20b74e4508838866.png"},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return l}});var i=r(667294);let s={},t=i.createContext(s);function l(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);