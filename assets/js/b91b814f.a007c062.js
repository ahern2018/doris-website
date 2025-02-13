"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["305397"],{712659:function(e,i,n){n.r(i),n.d(i,{assets:function(){return a},contentTitle:function(){return h},default:function(){return d},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return c}});var s=n(829583),l=n(785893),t=n(250065);let r={title:"Apache Doris 2.0.3 just released",description:"Thanks to our community users and developers, 1000 improvements and bug fixes have been made in Doris 2.0.3.",date:"2023-12-14",author:"Apache Doris",tags:["Release Notes"],image:"/images/2.0.3.png"},h=void 0,a={authorsImageUrls:[void 0]},c=[{value:"Behavior changes",id:"behavior-changes",level:2},{value:"New features",id:"new-features",level:2},{value:"1. Support collecting statistics for optimizer automatically",id:"1-support-collecting-statistics-for-optimizer-automatically",level:3},{value:"2. Support complex datatypes for more datalake source",id:"2-support-complex-datatypes-for-more-datalake-source",level:3},{value:"3. Add more builtin functions",id:"3-add-more-builtin-functions",level:3},{value:"Improvements",id:"improvements",level:2},{value:"Performance optimizations",id:"performance-optimizations",level:3},{value:"Distributed replica management improvements",id:"distributed-replica-management-improvements",level:3},{value:"Security enhancement",id:"security-enhancement",level:3},{value:"Bug fixes",id:"bug-fixes",level:2},{value:"Complex datatypes",id:"complex-datatypes",level:3},{value:"Inverted index",id:"inverted-index",level:3},{value:"Materialized View",id:"materialized-view",level:3},{value:"Table sample",id:"table-sample",level:3},{value:"Unique with merge on write",id:"unique-with-merge-on-write",level:3},{value:"Load and compaction",id:"load-and-compaction",level:3},{value:"Data Lake compatibility",id:"data-lake-compatibility",level:3},{value:"JDBC external table compatibility",id:"jdbc-external-table-compatibility",level:3},{value:"SQL Planner and Optimizer",id:"sql-planner-and-optimizer",level:3},{value:"Others",id:"others",level:3}];function o(e){let i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.p,{children:"Thanks to our community users and developers, about 1000 improvements and bug fixes have been made in Doris 2.0.3 version, including optimizer statistics, inverted index, complex datatypes, data lake, replica management."}),"\n",(0,l.jsx)(i.h2,{id:"behavior-changes",children:"Behavior changes"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["The output format of the complex data type array/map/struct has been changed to be consistent to the input format and JSON specification. The main changes from the previous version are that DATE/DATETIME and STRING/VARCHAR are enclosed in double quotes and null values inside ARRAY/MAP are displayed as ",(0,l.jsx)(i.code,{children:"null"})," instead of ",(0,l.jsx)(i.code,{children:"NULL"}),".\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/25946",children:"https://github.com/apache/doris/pull/25946"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["SHOW_VIEW permission is supported. Users with SELECT or LOAD permission will no longer be able to execute the 'SHOW CREATE VIEW' statement and must be granted the SHOW_VIEW permission separately.\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/25370",children:"https://github.com/apache/doris/pull/25370"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.h2,{id:"new-features",children:"New features"}),"\n",(0,l.jsx)(i.h3,{id:"1-support-collecting-statistics-for-optimizer-automatically",children:"1. Support collecting statistics for optimizer automatically"}),"\n",(0,l.jsx)(i.p,{children:"Collecting statistics helps the optimizer understand the data distribution characteristics and choose a better plan to greatly improve query performance. It is officially supported starting from version 2.0.3 and is enabled all day by default."}),"\n",(0,l.jsxs)(i.p,{children:["see more: ",(0,l.jsx)(i.a,{href:"https://doris.apache.org/docs/2.0/query/nereids/statistics",children:"https://doris.apache.org/docs/2.0/query/nereids/statistics"})]}),"\n",(0,l.jsx)(i.h3,{id:"2-support-complex-datatypes-for-more-datalake-source",children:"2. Support complex datatypes for more datalake source"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Support complex datatypes for JAVA UDF, JDBC and Hudi MOR\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24810",children:"https://github.com/apache/doris/pull/24810"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/26236",children:"https://github.com/apache/doris/pull/26236"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["Support complex datatypes for Paimon\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/25364",children:"https://github.com/apache/doris/pull/25364"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["Suport Paimon version 0.5\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24985",children:"https://github.com/apache/doris/pull/24985"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"3-add-more-builtin-functions",children:"3. Add more builtin functions"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Support the BitmapAgg function in new optimizer\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/25508",children:"https://github.com/apache/doris/pull/25508"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["Supports SHA series digest functions\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24342",children:"https://github.com/apache/doris/pull/24342"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["Support the BITMAP datatype in the aggregate functions min_by and max_by\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/25430",children:"https://github.com/apache/doris/pull/25430"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["Add milliseconds/microseconds_add/sub/diff functions\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24114",children:"https://github.com/apache/doris/pull/24114"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["Add some json functions: json_insert, json_replace, json_set\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24384",children:"https://github.com/apache/doris/pull/24384"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.h2,{id:"improvements",children:"Improvements"}),"\n",(0,l.jsx)(i.h3,{id:"performance-optimizations",children:"Performance optimizations"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"When the inverted index MATCH WHERE condition with a high filter rate is combined with the common WHERE condition with a low filter rate, the I/O of the index column is greatly reduced."}),"\n",(0,l.jsx)(i.li,{children:"Optimize the efficiency of random data access after the where filter."}),"\n",(0,l.jsx)(i.li,{children:"Optimizes the performance of the old get_json_xx function on JSON data types by 2~4x."}),"\n",(0,l.jsx)(i.li,{children:"Supports the configuration to reduce the priority of the data read thread, ensuring the CPU resources for real-time writing."}),"\n",(0,l.jsxs)(i.li,{children:["Adds ",(0,l.jsx)(i.code,{children:"uuid-numeric"})," function that returns largeint, which is 20 times faster than ",(0,l.jsx)(i.code,{children:"uuid"})," function that returns string."]}),"\n",(0,l.jsx)(i.li,{children:"Optimized the performance of case when by 3x."}),"\n",(0,l.jsx)(i.li,{children:"Cut out unnecessary predicate calculations in storage engine execution."}),"\n",(0,l.jsx)(i.li,{children:"Accelerate count performance by pushing down count operator to storage tier."}),"\n",(0,l.jsx)(i.li,{children:"Optimizes the computation performance of the nullable type in and or expressions."}),"\n",(0,l.jsxs)(i.li,{children:["Supports rewriting the limit operator before ",(0,l.jsx)(i.code,{children:"join"})," in more scenarios to improve query performance."]}),"\n",(0,l.jsxs)(i.li,{children:["Eliminate useless ",(0,l.jsx)(i.code,{children:"order by"})," operators from inline view to improve query performance."]}),"\n",(0,l.jsx)(i.li,{children:"Optimizes the accuracy of cardinality estimates and cost models in some cases."}),"\n",(0,l.jsx)(i.li,{children:"Optimized jdbc catalog predicate pushdown logic."}),"\n",(0,l.jsx)(i.li,{children:"Optimized the read efficiency of the file cache when it's enable for the first time."}),"\n",(0,l.jsx)(i.li,{children:"Optimizes the hive table sql cache policy and uses the partition update time stored in HMS to improve the cache hit ratio."}),"\n",(0,l.jsx)(i.li,{children:"Optimize mow compaction efficiency."}),"\n",(0,l.jsx)(i.li,{children:"Optimized thread allocation logic for external table query to reduce memory usage"}),"\n",(0,l.jsx)(i.li,{children:"Optimize memory usage for column reader."}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"distributed-replica-management-improvements",children:"Distributed replica management improvements"}),"\n",(0,l.jsx)(i.p,{children:"Distributed replica management improvements include skipping partition deletion, colocate group deletion, balance failure due to continuous write, and hot and cold seperation table balance."}),"\n",(0,l.jsx)(i.h3,{id:"security-enhancement",children:"Security enhancement"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["The audit log plug-in uses a token instead of a plaintext password to enhance security\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/26278",children:"https://github.com/apache/doris/pull/26278"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["log4j configures security enhancement\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24861",children:"https://github.com/apache/doris/pull/24861"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["Sensitive user information is not displayed in logs\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/26912",children:"https://github.com/apache/doris/pull/26912"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.h2,{id:"bug-fixes",children:"Bug fixes"}),"\n",(0,l.jsx)(i.h3,{id:"complex-datatypes",children:"Complex datatypes"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Fix issues that fixed-length CHAR(n) was not truncated correctly in map/struct.\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/25725",children:"https://github.com/apache/doris/pull/25725"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["Fix write failure for struct datatype nested for map/array\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/26973",children:"https://github.com/apache/doris/pull/26973"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["Fix the issue that count distinct did not support array/map/struct\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/25483",children:"https://github.com/apache/doris/pull/25483"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["Fix be crash in updating to 2.0.3 after the delete complex type appeared in query\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/26006",children:"https://github.com/apache/doris/pull/26006"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["Fix be crash when JSON datatype is in WHERE clause.\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/27325",children:"https://github.com/apache/doris/pull/27325"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["Fix be crash when ARRAY datatype is in OUTER JOIN clause.\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/25669",children:"https://github.com/apache/doris/pull/25669"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["Fix reading incorrect result for DECIMAL datatype in ORC format.\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/26548",children:"https://github.com/apache/doris/pull/26548"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/25977",children:"https://github.com/apache/doris/pull/25977"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/26633",children:"https://github.com/apache/doris/pull/26633"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"inverted-index",children:"Inverted index"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Fix incorrect result for OR NOT combination in WHERE clause were incorrect when disable inverted index query.\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/26327",children:"https://github.com/apache/doris/pull/26327"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["Fix be crash when write a empty with inverted index\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/25984",children:"https://github.com/apache/doris/pull/25984"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["Fix be crash in index compaction when the output of compaction is empty.\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/25486",children:"https://github.com/apache/doris/pull/25486"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.li,{children:"Fixed the problem of adding an inverted index to be crashed when no data is written to the newly added column."}),"\n",(0,l.jsxs)(i.li,{children:["Fix be crash when BUILD INDEX after ADD COLUMN without new data written.\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/27276",children:"https://github.com/apache/doris/pull/27276"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["Fix missing and leak problem of hardlink for inverted index file.\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/26903",children:"https://github.com/apache/doris/pull/26903"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["Fix index file corrupt when disk is full temporarilly\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/28191",children:"https://github.com/apache/doris/pull/28191"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["Fix incorrect result due to optimization for skip reading index column\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/28104",children:"https://github.com/apache/doris/pull/28104"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"materialized-view",children:"Materialized View"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"Fix the problem of BE crash caused by repeated expressions in the group by statement"}),"\n",(0,l.jsxs)(i.li,{children:["Fix be crash when there are duplicate expressions in ",(0,l.jsx)(i.code,{children:"group by"})," statements.\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/27523",children:"https://github.com/apache/doris/pull/27523"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["Disables the float/doubld type in the ",(0,l.jsx)(i.code,{children:"group by"})," clause when a view is created.\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/25823",children:"https://github.com/apache/doris/pull/25823"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["Improve the function of select query matching materialized view\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24691",children:"https://github.com/apache/doris/pull/24691"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["Fix an issue that materialized views could not be matched when a table alias was used\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/25321",children:"https://github.com/apache/doris/pull/25321"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["Fix the problem using percentile_approx when creating materialized views\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/26528",children:"https://github.com/apache/doris/pull/26528"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"table-sample",children:"Table sample"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Fix the problem that table sample query can not work on table with partitions.\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/25912",children:"https://github.com/apache/doris/pull/25912"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["Fix the problem that table sample query can not work when specify tablet.\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/25378",children:"https://github.com/apache/doris/pull/25378"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"unique-with-merge-on-write",children:"Unique with merge on write"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Fix null pointer exception in conditional update based on primary key\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/26881",children:"https://github.com/apache/doris/pull/26881"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["Fix field name capitalization issues in partial update\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/27223",children:"https://github.com/apache/doris/pull/27223"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["Fix duplicate keys occur in mow during schema change repairement.\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/25705",children:"https://github.com/apache/doris/pull/25705"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"load-and-compaction",children:"Load and compaction"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Fix unkown slot descriptor error in routineload for running multiple tables\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/25762",children:"https://github.com/apache/doris/pull/25762"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["Fix be crash due to concurrent memory access when caculating memory\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/27101",children:"https://github.com/apache/doris/pull/27101"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["Fix be crash on duplicate cancel for load.\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/27111",children:"https://github.com/apache/doris/pull/27111"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["Fix broker connection error during broker load\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/26050",children:"https://github.com/apache/doris/pull/26050"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["Fix incorrect result delete predicates in concurrent case of compation and scan.\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24638",children:"https://github.com/apache/doris/pull/24638"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["Fix the problem tha compaction task would print too many stacktrace logs\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/25597",children:"https://github.com/apache/doris/pull/25597"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"data-lake-compatibility",children:"Data Lake compatibility"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Solve the problem that the iceberg table contains special characters that cause query failure\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/27108",children:"https://github.com/apache/doris/pull/27108"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["Fix compatibility issues of different hive metastore versions\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/27327",children:"https://github.com/apache/doris/pull/27327"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["Fix an error reading max compute partition table\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24911",children:"https://github.com/apache/doris/pull/24911"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["Fix the issue that backup to object storage failed\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/25496",children:"https://github.com/apache/doris/pull/25496"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/25803",children:"https://github.com/apache/doris/pull/25803"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"jdbc-external-table-compatibility",children:"JDBC external table compatibility"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Fix Oracle date type format error in jdbc catalog\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/25487",children:"https://github.com/apache/doris/pull/25487"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["Fix MySQL 0000-00-00 date exception in jdbc catalog\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/26569",children:"https://github.com/apache/doris/pull/26569"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["Fix an exception in reading data from Mariadb where the default value of the time type is current_timestamp\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/25016",children:"https://github.com/apache/doris/pull/25016"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["Fix be crash when processing BITMAP datatype in jdbc catalog\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/25034",children:"https://github.com/apache/doris/pull/25034"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/26933",children:"https://github.com/apache/doris/pull/26933"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"sql-planner-and-optimizer",children:"SQL Planner and Optimizer"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsx)(i.p,{children:"Fix partition prune error in some scenes"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/27047",children:"https://github.com/apache/doris/pull/27047"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/26873",children:"https://github.com/apache/doris/pull/26873"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/25769",children:"https://github.com/apache/doris/pull/25769"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/27636",children:"https://github.com/apache/doris/pull/27636"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsx)(i.p,{children:"Fix incorrect sub-query processing in some scenarios"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/26034",children:"https://github.com/apache/doris/pull/26034"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/25492",children:"https://github.com/apache/doris/pull/25492"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/25955",children:"https://github.com/apache/doris/pull/25955"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/27177",children:"https://github.com/apache/doris/pull/27177"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsx)(i.p,{children:"Fix some semantic parsing errors"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24928",children:"https://github.com/apache/doris/pull/24928"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/25627",children:"https://github.com/apache/doris/pull/25627"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsx)(i.p,{children:"Fix data loss during right outer/anti join"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/26529",children:"https://github.com/apache/doris/pull/26529"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsx)(i.p,{children:"Fix incorrect pushing down of predicate pass aggregation operators."}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/25525",children:"https://github.com/apache/doris/pull/25525"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsx)(i.p,{children:"Fix incorrect result header in some cases"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/25372",children:"https://github.com/apache/doris/pull/25372"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsx)(i.p,{children:"Fix incorrect plan when the nullsafeEquals expression (<=>) is used as the join condition"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/27127",children:"https://github.com/apache/doris/pull/27127"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsx)(i.p,{children:"Fix correct column prune in set operation operator."}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/26884",children:"https://github.com/apache/doris/pull/26884"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"others",children:"Others"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Fix BE crash when the order of columns in a table is changed and then upgraded to 2.0.3.\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/pull/28205",children:"https://github.com/apache/doris/pull/28205"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.p,{children:["See the complete list of improvements and bug fixes on ",(0,l.jsx)(i.a,{href:"https://github.com/apache/doris/issues?q=label%3Adev%2F2.0.3-merged+is%3Aclosed",children:"github dev/2.0.3-merged"})," ."]})]})}function d(e={}){let{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,i,n){n.d(i,{Z:function(){return h},a:function(){return r}});var s=n(667294);let l={},t=s.createContext(l);function r(e){let i=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function h(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(t.Provider,{value:i},e.children)}},829583:function(e){e.exports=JSON.parse('{"permalink":"/blog/release-note-2.0.3","source":"@site/blog/release-note-2.0.3.md","title":"Apache Doris 2.0.3 just released","description":"Thanks to our community users and developers, 1000 improvements and bug fixes have been made in Doris 2.0.3.","date":"2023-12-14T00:00:00.000Z","tags":[{"inline":true,"label":"Release Notes","permalink":"/blog/tags/release-notes"}],"hasTruncateMarker":false,"authors":[{"name":"Apache Doris","key":null,"page":null}],"frontMatter":{"title":"Apache Doris 2.0.3 just released","description":"Thanks to our community users and developers, 1000 improvements and bug fixes have been made in Doris 2.0.3.","date":"2023-12-14","author":"Apache Doris","tags":["Release Notes"],"image":"/images/2.0.3.png"},"unlisted":false,"prevItem":{"title":"From Elasticsearch to Apache Doris: upgrading an observability platform","permalink":"/blog/from-elasticsearch-to-apache-doris-upgrading-an-observability-platform"},"nextItem":{"title":"Empowering cyber security by enabling 7 times faster log analysis","permalink":"/blog/empowering-cyber-security-by-enabling-seven-times-faster-log-analysis"}}')}}]);