"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["243233"],{534506:function(e,i,n){n.r(i),n.d(i,{metadata:()=>r,contentTitle:()=>h,default:()=>d,assets:()=>a,toc:()=>o,frontMatter:()=>l});var r=JSON.parse('{"id":"releasenotes/v2.1/release-2.1.8","title":"Release 2.1.8","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/releasenotes/v2.1/release-2.1.8.md","sourceDirName":"releasenotes/v2.1","slug":"/releasenotes/v2.1/release-2.1.8","permalink":"/docs/releasenotes/v2.1/release-2.1.8","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Release 2.1.8","language":"en"},"sidebar":"docs","previous":{"title":"Release 3.0.0","permalink":"/docs/releasenotes/v3.0/release-3.0.0"},"next":{"title":"Release 2.1.7","permalink":"/docs/releasenotes/v2.1/release-2.1.7"}}'),s=n("785893"),t=n("250065");let l={title:"Release 2.1.8",language:"en"},h=void 0,a={},o=[{value:"Behavior Changes",id:"behavior-changes",level:2},{value:"New Features",id:"new-features",level:2},{value:"Improvements",id:"improvements",level:2},{value:"Lakehouse",id:"lakehouse",level:3},{value:"Asynchronous Materialized Views",id:"asynchronous-materialized-views",level:3},{value:"Query Optimizer",id:"query-optimizer",level:3},{value:"Query Execution Engine",id:"query-execution-engine",level:3},{value:"Storage Management",id:"storage-management",level:3},{value:"Others",id:"others",level:3},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Lakehouse",id:"lakehouse-1",level:3},{value:"Hive",id:"hive",level:4},{value:"Iceberg",id:"iceberg",level:4},{value:"Paimon",id:"paimon",level:4},{value:"Hudi",id:"hudi",level:4},{value:"JDBC",id:"jdbc",level:4},{value:"MaxCompute",id:"maxcompute",level:4},{value:"Others",id:"others-1",level:4},{value:"Asynchronous Materialized Views",id:"asynchronous-materialized-views-1",level:3},{value:"Inverted Index",id:"inverted-index",level:3},{value:"Semi-Structure Data",id:"semi-structure-data",level:3},{value:"Query Optimizer",id:"query-optimizer-1",level:3},{value:"Query Execution Engine",id:"query-execution-engine-1",level:3},{value:"Storage Management",id:"storage-management-1",level:3},{value:"Permission Management",id:"permission-management",level:3},{value:"Others",id:"others-2",level:3}];function c(e){let i={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:["Dear Community, ",(0,s.jsx)(i.strong,{children:"Apache Doris version 2.1.8 was officially released on January 24, 2025."})," This version introduces continuous upgrades and enhancements in several key areas, including Lakehouse, Asynchronous Materialized Views, Query Optimizer and Execution Engine, Storage Management, and more."]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://doris.apache.org/download",children:"Quick Download"})}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/releases/tag/2.1.8-rc01",children:"GitHub Release"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"behavior-changes",children:"Behavior Changes"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Add the environment variable ",(0,s.jsx)(i.code,{children:"SKIP_CHECK_ULIMIT"})," to skip the ulimit value verification check within the BE process. This is only available to applications in the Docker quick start scenario. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45267",children:"#45267"})]}),"\n",(0,s.jsxs)(i.li,{children:["Add the ",(0,s.jsx)(i.code,{children:"enable_cooldown_replica_affinity"})," session variable to control the selection of replica affinity for queries under cold - hot separation."]}),"\n",(0,s.jsxs)(i.li,{children:["In FE, add the configurations ",(0,s.jsx)(i.code,{children:"restore_job_compressed_serialization"})," and ",(0,s.jsx)(i.code,{children:"backup_job_compressed_serialization"})," to solve the OOM problem of FE during backup and restore operations when the number of db tablets is extremely large. By default, these configurations are disabled, and once enabled, they cannot be downgraded."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"new-features",children:"New Features"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["The Arrow flight protocol supports accessing BE through a load - balancing device. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/43281",children:"#43281"})]}),"\n",(0,s.jsxs)(i.li,{children:["Now lambda expressions support capturing external columns (#45186).",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45186",children:"#45186"})]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"improvements",children:"Improvements"}),"\n",(0,s.jsx)(i.h3,{id:"lakehouse",children:"Lakehouse"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Update the Hudi version to 0.15. And optimize the query planning performance of Hudi tables."}),"\n",(0,s.jsxs)(i.li,{children:["Optimize the read performance of MaxCompute partitioned tables. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45148",children:"#45148"})]}),"\n",(0,s.jsxs)(i.li,{children:["Support the session variable ",(0,s.jsx)(i.code,{children:"enable_text_validate_utf8"}),", which can ignore the UTF8 encoding detection in CSV format. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45537",children:"#45537"})]}),"\n",(0,s.jsxs)(i.li,{children:["Optimize the performance of Parquet file lazy materialization under high - filtering - rate conditions. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46183",children:"#46183"})]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"asynchronous-materialized-views",children:"Asynchronous Materialized Views"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Now it supports manually refreshing partitions that do not exist in an asynchronous materialized view ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45290",children:"#45290"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["Optimize the performance of transparent rewrite planning ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44786",children:"#44786"}),"."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"query-optimizer",children:"Query Optimizer"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Improve the adaptive ability of runtime filters ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/42640",children:"#42640"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["Add the ability to generate original column filter conditions from filter conditions on ",(0,s.jsx)(i.code,{children:"max/min"})," aggregate function columns ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/39252",children:"#39252"})]}),"\n",(0,s.jsxs)(i.li,{children:["Add the ability to extract single - side filter conditions from join predicates ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/38479",children:"#38479"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["Optimize the ability of predicate derivation on set operators to better generate filter predicates ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/39450",children:"#39450"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["Optimize the exception handling ability of statistic information collection and usage to avoid generating unexpected execution plans when collection exceptions occur. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/43009",children:"#43009"})," ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/43776",children:"#43776"})," ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/43865",children:"#43865"})," ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/42104",children:"#42104"})," ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/42399",children:"#42399"})," ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/41729",children:"#41729"})]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"query-execution-engine",children:"Query Execution Engine"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Optimize the execution of queries with ",(0,s.jsx)(i.code,{children:"limit"})," to end faster and avoid unnecessary data scanning ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44255",children:"#44255"}),"."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"storage-management",children:"Storage Management"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["CCR supports more comprehensive operations, such as ",(0,s.jsx)(i.code,{children:"rename table"}),", ",(0,s.jsx)(i.code,{children:"rename column"}),", ",(0,s.jsx)(i.code,{children:"modify comment"}),", ",(0,s.jsx)(i.code,{children:"drop view"}),", ",(0,s.jsx)(i.code,{children:"drop rollup"}),", etc."]}),"\n",(0,s.jsx)(i.li,{children:"Improve the accuracy of the broker load import progress and the performance when importing multiple compressed files."}),"\n",(0,s.jsx)(i.li,{children:"Improve the routine load timeout strategy and thread - pool usage to prevent routine load timeout failures and impacts on queries."}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"others",children:"Others"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["The Docker quick - start image supports starting without setting environment parameters. Add the environment variable ",(0,s.jsx)(i.code,{children:"SKIP_CHECK_ULIMIT"})," to skip the ",(0,s.jsx)(i.code,{children:"start_be.sh"})," script and the swap, ",(0,s.jsx)(i.code,{children:"max_map_count"}),", ulimit - related verification checks within the BE process. This is only applicable to applications in the Docker quick - start scenario.  ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45269",children:"#45269"})]}),"\n",(0,s.jsxs)(i.li,{children:["Add the new LDAP configuration ",(0,s.jsx)(i.code,{children:"ldap_group_filter"})," for custom group filtering. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/43292",children:"#43292"})]}),"\n",(0,s.jsxs)(i.li,{children:["Optimize performance when using ranger. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/41207",children:"#41207"})]}),"\n",(0,s.jsxs)(i.li,{children:["Fix the inaccurate statistics of ",(0,s.jsx)(i.code,{children:"scan bytes"})," in the audit log. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45167",children:"#45167"})]}),"\n",(0,s.jsxs)(i.li,{children:["Now, the default values of columns can be correctly displayed in the ",(0,s.jsx)(i.code,{children:"COLUMNS"})," system table. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44849",children:"#44849"})]}),"\n",(0,s.jsxs)(i.li,{children:["Now, the definition of views can be correctly displayed in the ",(0,s.jsx)(i.code,{children:"VIEWS"})," system table. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45857",children:"#45857"})]}),"\n",(0,s.jsxs)(i.li,{children:["Now, the ",(0,s.jsx)(i.code,{children:"admin"})," user cannot be deleted. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44751",children:"#44751"})]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"bug-fixes",children:"Bug Fixes"}),"\n",(0,s.jsx)(i.h3,{id:"lakehouse-1",children:"Lakehouse"}),"\n",(0,s.jsx)(i.h4,{id:"hive",children:"Hive"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Fix the problem of being unable to query Hive views created by Spark. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/43553",children:"#43553"})]}),"\n",(0,s.jsxs)(i.li,{children:["Fix the problem of being unable to correctly read some Hive Transaction tables. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45753",children:"#45753"})]}),"\n",(0,s.jsxs)(i.li,{children:["Fix the problem of incorrect partition pruning when Hive table partitions contain special characters. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/42906",children:"#42906"})]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"iceberg",children:"Iceberg"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Fix the problem of being unable to create Iceberg tables in a Kerberos - authenticated environment. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/43445",children:"#43445"})]}),"\n",(0,s.jsxs)(i.li,{children:["Fix the problem of inaccurate ",(0,s.jsx)(i.code,{children:"count(*)"})," queries when there are dangling deletes in Iceberg tables in some cases. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44039",children:"#44039"})]}),"\n",(0,s.jsxs)(i.li,{children:["Fix the problem of query errors due to column name mismatches in Iceberg tables in some cases . ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44470",children:"#44470"})]}),"\n",(0,s.jsxs)(i.li,{children:["Fix the problem of being unable to read Iceberg tables when their partitions are modified in some cases .",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45367",children:"#45367"})]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"paimon",children:"Paimon"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Fix the problem that the Paimon Catalog cannot access Alibaba Cloud OSS - HDFS. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/42585",children:"#42585"})]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"hudi",children:"Hudi"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Fix the problem of ineffective partition pruning in Hudi tables in some cases. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44669",children:"#44669"})]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"jdbc",children:"JDBC"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Fix the problem of being unable to obtain tables using the JDBC Catalog after enabling the case insensitive table name feature in some cases."}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"maxcompute",children:"MaxCompute"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Fix the problem of ineffective partition pruning in MaxCompute tables in some cases",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44508",children:"#44508"}),"."]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"others-1",children:"Others"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Fix the problem of FE memory leaks caused by EXPORT tasks in some cases.",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44019",children:"#44019"})]}),"\n",(0,s.jsxs)(i.li,{children:["Fix the problem of being unable to access S3 object storage using the https protocol in some cases ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44242",children:"#44242"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["Fix the problem of the inability to automatically refresh Kerberos authentication tickets in some cases  ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44916",children:"#44916"})]}),"\n",(0,s.jsxs)(i.li,{children:["Fix the problem of errors when reading Hadoop Block compressed format files in some cases. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45289",children:"#45289"})]}),"\n",(0,s.jsxs)(i.li,{children:["When querying ORC - formatted data, no longer push down CHAR - type predicates to avoid possible result errors. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45484",children:"#45484"})]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"asynchronous-materialized-views-1",children:"Asynchronous Materialized Views"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Fix the problem that when there is a CTE in the materialized view definition, it cannot be refreshed ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44857",children:"#44857"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["Fix the problem that when columns are added to the base table, the asynchronous materialized view cannot hit the transparent rewrite. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44867",children:"#44867"})]}),"\n",(0,s.jsxs)(i.li,{children:["Fix the problem that when the same filter predicate is included in different positions in a query, the transparent rewrite fails. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44575",children:"#44575"})]}),"\n",(0,s.jsxs)(i.li,{children:["Fix the problem that when column aliases are used in filter predicates or join predicates, the transparent rewrite cannot be performed. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44779",children:"#44779"})]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"inverted-index",children:"Inverted Index"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Fix the problem of abnormal handling of inverted index compaction. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45773",children:"#45773"})]}),"\n",(0,s.jsxs)(i.li,{children:["Fix the problem that inverted index construction fails due to lock - waiting timeout. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/43589",children:"#43589"})]}),"\n",(0,s.jsxs)(i.li,{children:["Fix the problem of inverted index write crashes in abnormal situations. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46075",children:"#46075"})]}),"\n",(0,s.jsxs)(i.li,{children:["Fix the null - pointer problem of the ",(0,s.jsx)(i.code,{children:"match"})," function with special parameters. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45774",children:"#45774"})]}),"\n",(0,s.jsxs)(i.li,{children:["Fix problems related to the variant inverted index and disable the use of the index v1 format for variants ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/43971",children:"#43971"})," ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45179/",children:"#45179"})]}),"\n",(0,s.jsxs)(i.li,{children:["Fix the problem of crashes when setting ",(0,s.jsx)(i.code,{children:"gram_size = 65535"})," for the ngram bloomfilter index ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/43654",children:"#43654"})]}),"\n",(0,s.jsxs)(i.li,{children:["Fix the problem of incorrect calculation of DATE and DATETIME for the bloomfilter index ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/43622",children:"#43622"})]}),"\n",(0,s.jsxs)(i.li,{children:["Fix the problem that dropping a column does not automatically drop the bloomfilter index ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44478",children:"#44478"})]}),"\n",(0,s.jsxs)(i.li,{children:["Reduce the memory footprint when writing the bloomfilter index ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46047",children:"#46047"})]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"semi-structure-data",children:"Semi-Structure Data"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Optimize memory usage and reduce the memory consumption of the ",(0,s.jsx)(i.code,{children:"variant"})," data type ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/43349",children:"#43349"})," ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44585",children:"#44585"})," ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45734",children:"#45734"})]}),"\n",(0,s.jsxs)(i.li,{children:["Optimize the performance of ",(0,s.jsx)(i.code,{children:"variant"})," schema copy. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45731",children:"#45731"})]}),"\n",(0,s.jsxs)(i.li,{children:["Do not use ",(0,s.jsx)(i.code,{children:"variant"})," as a key when automatically inferring tablet keys. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44736",children:"#44736"})]}),"\n",(0,s.jsxs)(i.li,{children:["Fix the problem of changing ",(0,s.jsx)(i.code,{children:"variant"})," from ",(0,s.jsx)(i.code,{children:"NOT NULL"})," to ",(0,s.jsx)(i.code,{children:"NULL"})," ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45734",children:"#45734"})]}),"\n",(0,s.jsxs)(i.li,{children:["Fix the problem of incorrect type inference of lambda functions. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45798",children:"#45798"})]}),"\n",(0,s.jsxs)(i.li,{children:["Fix the coredump problem at the boundary conditions of the ",(0,s.jsx)(i.code,{children:"ipv6_cidr_to_range"})," function ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46252",children:"#46252"})]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"query-optimizer-1",children:"Query Optimizer"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Fix the potential deadlock problem caused by mutual exclusion of table read locks and optimize the lock - using logic ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45045",children:"#45045"})," ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/43376",children:"#43376"})," ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44164",children:"#44164"})," ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44967",children:"#44967"})," ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45995",children:"#45995"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["Fix the problem that the SQL Cache function incorrectly uses constant folding, resulting in incorrect results when using functions containing time formats . ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44631",children:"#44631"})]}),"\n",(0,s.jsxs)(i.li,{children:["Fix the problem of incorrect optimization of comparison expressions in edge cases, which may lead to incorrect results. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44054",children:"#44054"})," ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44725",children:"#44725"})," ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44922",children:"#44922"})," ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45735",children:"#45735"})," ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45868",children:"#45868"})]}),"\n",(0,s.jsxs)(i.li,{children:["Fix the problem of incorrect audit logs for high - concurrent point queries ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/43345",children:" #43345 "}),(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44588",children:"#44588"})]}),"\n",(0,s.jsxs)(i.li,{children:["Fix the problem of continuous error reporting after an exception occurs in high - concurrent point queries ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44582",children:"#44582"})]}),"\n",(0,s.jsxs)(i.li,{children:["Fix the problem of incorrectly prepared statements for some fields.",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45732",children:"#45732 "})]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"query-execution-engine-1",children:"Query Execution Engine"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Fix the problem of incorrect results of regular expressions and ",(0,s.jsx)(i.code,{children:"like"})," functions for special characters. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44547",children:"#44547"})]}),"\n",(0,s.jsxs)(i.li,{children:["Fix the problem that the SQL Cache may have incorrect results when switching databases. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44782",children:"#44782"})]}),"\n",(0,s.jsxs)(i.li,{children:["Fix the problem of incorrect results of the ",(0,s.jsx)(i.code,{children:"cut_ipv6"})," function. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/43921",children:"#43921"})]}),"\n",(0,s.jsxs)(i.li,{children:["Fix the problem of casting from numeric types to bool types. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46275",children:"#46275"})]}),"\n",(0,s.jsxs)(i.li,{children:["Fix a series of problems related to arrow flight. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45661",children:"#45661"})," ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45023",children:"#45023"})," ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/43960",children:"#43960"})," ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/43929",children:"#43929"})]}),"\n",(0,s.jsxs)(i.li,{children:["Fix the problem of incorrect results in some cases when the hash table of hash join exceeds 4G. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46461/files",children:"#46461"})]}),"\n",(0,s.jsxs)(i.li,{children:["Fix the overflow problem of the ",(0,s.jsx)(i.code,{children:"convert_to"})," function for Chinese characters. ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46405",children:"#46505"})]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"storage-management-1",children:"Storage Management"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Fix the problem that high - concurrent DDL may cause FE startup failure."}),"\n",(0,s.jsx)(i.li,{children:"Fix the problem that auto - increment columns may have duplicate values."}),"\n",(0,s.jsx)(i.li,{children:"Fix the problem that routine load cannot use the newly expanded BE during expansion."}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"permission-management",children:"Permission Management"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Fix the problem of frequent access to the Ranger service when using Ranger as the authentication plugin ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45645",children:"#45645"}),"."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"others-2",children:"Others"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Fix the potential memory leak problem when ",(0,s.jsx)(i.code,{children:"enable_jvm_monitor=true"})," is enabled on the BE side ",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44311",children:"#44311"}),"."]}),"\n"]})]})}function d(e={}){let{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,i,n){n.d(i,{Z:function(){return h},a:function(){return l}});var r=n(667294);let s={},t=r.createContext(s);function l(e){let i=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function h(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(t.Provider,{value:i},e.children)}}}]);