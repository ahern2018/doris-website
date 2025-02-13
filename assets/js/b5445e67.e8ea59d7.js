"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["170470"],{308326:function(e,n,a){a.r(n),a.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>p,assets:()=>o,toc:()=>l,frontMatter:()=>s});var t=JSON.parse('{"id":"lakehouse/lakehouse-best-practices/doris-iceberg","title":"Using Doris and Iceberg","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/lakehouse/lakehouse-best-practices/doris-iceberg.md","sourceDirName":"lakehouse/lakehouse-best-practices","slug":"/lakehouse/lakehouse-best-practices/doris-iceberg","permalink":"/docs/3.0/lakehouse/lakehouse-best-practices/doris-iceberg","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Using Doris and Iceberg","language":"en"},"sidebar":"docs","previous":{"title":"Using Doris and Paimon","permalink":"/docs/3.0/lakehouse/lakehouse-best-practices/doris-paimon"},"next":{"title":"Using Doris and LakeSoul","permalink":"/docs/3.0/lakehouse/lakehouse-best-practices/doris-lakesoul"}}'),i=a("785893"),r=a("250065");let s={title:"Using Doris and Iceberg",language:"en"},d=void 0,o={},l=[{value:"Apache Doris &amp; Iceberg",id:"apache-doris--iceberg",level:2},{value:"User Guide",id:"user-guide",level:2},{value:"01 Environment Preparation",id:"01-environment-preparation",level:3},{value:"02 Environment Deployment",id:"02-environment-deployment",level:3},{value:"03 Create Iceberg Table",id:"03-create-iceberg-table",level:3},{value:"04 Data Insertion",id:"04-data-insertion",level:3},{value:"05 Data Query",id:"05-data-query",level:3},{value:"06 Time Travel",id:"06-time-travel",level:3},{value:"07 Interacting with PyIceberg",id:"07-interacting-with-pyiceberg",level:3},{value:"08 Appendix",id:"08-appendix",level:3},{value:"Write iceberg table by PyIceberg",id:"write-iceberg-table-by-pyiceberg",level:4}];function c(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"As a new open data management architecture, the Data Lakehouse integrates the high performance and real-time capabilities of a data warehouse with the low cost and flexibility of a data lake, helping users more conveniently meet various data processing and analysis needs. It has been increasingly applied in enterprise big data systems."}),"\n",(0,i.jsx)(n.p,{children:"In recent versions, Apache Doris has deepened its integration with data lakes and now offers a mature Data Lakehouse solution."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Since version 0.15, Apache Doris has introduced Hive and Iceberg external tables, exploring the capabilities of combining with Apache Iceberg for data lakes."}),"\n",(0,i.jsx)(n.li,{children:"Starting from version 1.2, Apache Doris officially introduced the Multi-Catalog feature, enabling automatic metadata mapping and data access for various data sources, along with numerous performance optimizations for external data reading and query execution. It now fully supports building a high-speed and user-friendly Lakehouse architecture."}),"\n",(0,i.jsx)(n.li,{children:"In version 2.1, Apache Doris further strengthened its Data Lakehouse architecture, enhancing the reading and writing capabilities of mainstream data lake formats (Hudi, Iceberg, Paimon, etc.), introducing compatibility with multiple SQL dialects, and seamless migration from existing systems to Apache Doris. For data science and large-scale data reading scenarios, Doris integrated the Arrow Flight high-speed reading interface, achieving a 100x improvement in data transfer efficiency."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Building Lakehouse using Doris and Iceberg",src:a(317610).Z+"",width:"2560",height:"1280"})}),"\n",(0,i.jsx)(n.h2,{id:"apache-doris--iceberg",children:"Apache Doris & Iceberg"}),"\n",(0,i.jsx)(n.p,{children:"Apache Iceberg is an open-source, high-performance, and highly reliable data lake table format that enables the analysis and management of massive-scale data. It supports various mainstream query engines, including Apache Doris, is compatible with HDFS and various object cloud storage, and features ACID compliance, schema evolution, advanced filtering, hidden partitioning, and partition layout evolution to ensure high-performance queries, data reliability, consistency, and flexibility with features like time travel and version rollback."}),"\n",(0,i.jsx)(n.p,{children:"Apache Doris provides native support for several core features of Iceberg:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Supports multiple Iceberg Catalog types such as Hive Metastore, Hadoop, REST, Glue, Google Dataproc Metastore, DLF, etc."}),"\n",(0,i.jsx)(n.li,{children:"Native support for Iceberg V1/V2 table formats and reading of Position Delete, Equality Delete files."}),"\n",(0,i.jsx)(n.li,{children:"Supports querying Iceberg table snapshot history through table functions."}),"\n",(0,i.jsx)(n.li,{children:"Supports Time Travel functionality."}),"\n",(0,i.jsx)(n.li,{children:"Native support for the Iceberg table engine. It allows Apache Doris to directly create, manage, and write data to Iceberg tables. It supports comprehensive partition Transform functions, providing capabilities like hidden partitioning and partition layout evolution."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Users can quickly build an efficient Data Lakehouse solution based on Apache Doris + Apache Iceberg to flexibly address various real-time data analysis and processing needs."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use the high-performance query engine of Doris to perform data analysis by associating Iceberg table data and other data sources, building a ",(0,i.jsx)(n.strong,{children:"unified federated data analysis platform"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Manage and build Iceberg tables directly through Doris, complete data cleaning, processing, and writing to Iceberg tables in Doris, building a ",(0,i.jsx)(n.strong,{children:"unified data processing platform for data lakes"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Share Doris data with other upstream and downstream systems for further processing through the Iceberg table engine, building a ",(0,i.jsx)(n.strong,{children:"unified open data storage platform"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In the future, Apache Iceberg will serve as one of the native table engines for Apache Doris, providing more comprehensive analysis and management functions for lake-formatted data. Apache Doris will also gradually support more advanced features of Apache Iceberg, including Update/Delete/Merge, sorting during write-back, incremental data reading, metadata management, etc., to jointly build a unified, high-performance, real-time data lake platform."}),"\n",(0,i.jsxs)(n.p,{children:["For more information, please refer to ",(0,i.jsx)(n.a,{href:"../../../lakehouse/datalake-analytics/iceberg",children:"Iceberg Catalog"})]}),"\n",(0,i.jsx)(n.h2,{id:"user-guide",children:"User Guide"}),"\n",(0,i.jsx)(n.p,{children:"This document mainly explains how to quickly set up an Apache Doris + Apache Iceberg testing & demonstration environment in a Docker environment and demonstrate the usage of various functions."}),"\n",(0,i.jsxs)(n.p,{children:["All scripts and code mentioned in this document can be obtained from this address: ",(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/tree/master/samples/datalake/iceberg_and_paimon",children:"https://github.com/apache/doris/tree/master/samples/datalake/iceberg_and_paimon"})]}),"\n",(0,i.jsx)(n.h3,{id:"01-environment-preparation",children:"01 Environment Preparation"}),"\n",(0,i.jsx)(n.p,{children:"This document uses Docker Compose for deployment, with the following components and versions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Component"}),(0,i.jsx)(n.th,{children:"Version"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Apache Doris"}),(0,i.jsx)(n.td,{children:"Default 2.1.5, can be modified"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Apache Iceberg"}),(0,i.jsx)(n.td,{children:"1.4.3"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"MinIO"}),(0,i.jsx)(n.td,{children:"RELEASE.2024-04-29T09-56-05Z"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"02-environment-deployment",children:"02 Environment Deployment"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Start all components"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"bash ./start_all.sh"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"After starting, you can use the following script to log in to the Doris command line:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"-- login doris\nbash ./start_doris_client.sh\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"03-create-iceberg-table",children:"03 Create Iceberg Table"}),"\n",(0,i.jsxs)(n.p,{children:["After logging into the Doris command line, an Iceberg Catalog named Iceberg has already been created in the Doris cluster (can be viewed by ",(0,i.jsx)(n.code,{children:"SHOW CATALOGS"}),"/",(0,i.jsx)(n.code,{children:"SHOW CREATE CATALOG iceberg"}),"). The following is the creation statement for this Catalog:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'-- Already created\nCREATE CATALOG `iceberg` PROPERTIES (\n    "type" = "iceberg",\n    "iceberg.catalog.type" = "rest",\n    "warehouse" = "s3://warehouse/",\n    "uri" = "http://rest:8181",\n    "s3.access_key" = "admin",\n    "s3.secret_key" = "password",\n    "s3.endpoint" = "http://minio:9000"\n);\n'})}),"\n",(0,i.jsx)(n.p,{children:"Create a database and an Iceberg table in the Iceberg Catalog:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'mysql> SWITCH iceberg;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> CREATE DATABASE nyc;\nQuery OK, 0 rows affected (0.12 sec)\n\nmysql> CREATE TABLE iceberg.nyc.taxis\n       (\n           vendor_id BIGINT,\n           trip_id BIGINT,\n           trip_distance FLOAT,\n           fare_amount DOUBLE,\n           store_and_fwd_flag STRING,\n           ts DATETIME\n       )\n       PARTITION BY LIST (vendor_id, DAY(ts)) ()\n       PROPERTIES (\n           "compression-codec" = "zstd",\n           "write-format" = "parquet"\n       );\nQuery OK, 0 rows affected (0.15 sec)\n'})}),"\n",(0,i.jsx)(n.h3,{id:"04-data-insertion",children:"04 Data Insertion"}),"\n",(0,i.jsx)(n.p,{children:"Insert data into the Iceberg table:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> INSERT INTO iceberg.nyc.taxis\n       VALUES\n        (1, 1000371, 1.8, 15.32, 'N', '2024-01-01 9:15:23'),\n        (2, 1000372, 2.5, 22.15, 'N', '2024-01-02 12:10:11'),\n        (2, 1000373, 0.9, 9.01, 'N', '2024-01-01 3:25:15'),\n        (1, 1000374, 8.4, 42.13, 'Y', '2024-01-03 7:12:33');\nQuery OK, 4 rows affected (1.61 sec)\n{'status':'COMMITTED', 'txnId':'10085'}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Create an Iceberg table using ",(0,i.jsx)(n.code,{children:"CREATE TABLE AS SELECT"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> CREATE TABLE iceberg.nyc.taxis2 AS SELECT * FROM iceberg.nyc.taxis;\nQuery OK, 6 rows affected (0.25 sec)\n{'status':'COMMITTED', 'txnId':'10088'}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"05-data-query",children:"05 Data Query"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Simple query"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> SELECT * FROM iceberg.nyc.taxis;\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n| vendor_id | trip_id | trip_distance | fare_amount | store_and_fwd_flag | ts                         |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n|         1 | 1000374 |           8.4 |       42.13 | Y                  | 2024-01-03 07:12:33.000000 |\n|         1 | 1000371 |           1.8 |       15.32 | N                  | 2024-01-01 09:15:23.000000 |\n|         2 | 1000373 |           0.9 |        9.01 | N                  | 2024-01-01 03:25:15.000000 |\n|         2 | 1000372 |           2.5 |       22.15 | N                  | 2024-01-02 12:10:11.000000 |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n4 rows in set (0.37 sec)\n\nmysql> SELECT * FROM iceberg.nyc.taxis2;\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n| vendor_id | trip_id | trip_distance | fare_amount | store_and_fwd_flag | ts                         |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n|         1 | 1000374 |           8.4 |       42.13 | Y                  | 2024-01-03 07:12:33.000000 |\n|         1 | 1000371 |           1.8 |       15.32 | N                  | 2024-01-01 09:15:23.000000 |\n|         2 | 1000373 |           0.9 |        9.01 | N                  | 2024-01-01 03:25:15.000000 |\n|         2 | 1000372 |           2.5 |       22.15 | N                  | 2024-01-02 12:10:11.000000 |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n4 rows in set (0.35 sec)\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Partition pruning"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> SELECT * FROM iceberg.nyc.taxis where vendor_id = 2 and ts >= '2024-01-01' and ts < '2024-01-02';\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n| vendor_id | trip_id | trip_distance | fare_amount | store_and_fwd_flag | ts                         |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n|         2 | 1000373 |           0.9 |        9.01 | N                  | 2024-01-01 03:25:15.000000 |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n1 row in set (0.06 sec)\n\nmysql> EXPLAIN VERBOSE SELECT * FROM iceberg.nyc.taxis where vendor_id = 2 and ts >= '2024-01-01' and ts < '2024-01-02';\n                                                                                                                                                             \n....                                                                                                                                                                                  \n|   0:VICEBERG_SCAN_NODE(71)                                                                                                                                                          \n|      table: taxis                                                                                                                                                                   \n|      predicates: (ts[#5] < '2024-01-02 00:00:00'), (vendor_id[#0] = 2), (ts[#5] >= '2024-01-01 00:00:00')                                                                           \n|      inputSplitNum=1, totalFileSize=3539, scanRanges=1                                                                                                                              \n|      partition=1/0                                                                                                                                                                  \n|      backends:                                                                                                                                                                      \n|        10002                                                                                                                                                                        \n|          s3://warehouse/wh/nyc/taxis/data/vendor_id=2/ts_day=2024-01-01/40e6ca404efa4a44-b888f23546d3a69c_5708e229-2f3d-4b68-a66b-44298a9d9815-0.zstd.parquet start: 0 length: 3539 \n|      cardinality=6, numNodes=1                                                                                                                                                      \n|      pushdown agg=NONE                                                                                                                                                              \n|      icebergPredicatePushdown=                                                                                                                                                      \n|           ref(name=\"ts\") < 1704153600000000                                                                                                                                         \n|           ref(name=\"vendor_id\") == 2                                                                                                                                                \n|           ref(name=\"ts\") >= 1704067200000000                                                                                                                                        \n....\n"})}),"\n",(0,i.jsxs)(n.p,{children:["By examining the result of the ",(0,i.jsx)(n.code,{children:"EXPLAIN VERBOSE"})," statement, it can be seen that the predicate condition ",(0,i.jsx)(n.code,{children:"vendor_id = 2 and ts >= '2024-01-01' and ts < '2024-01-02'"})," ultimately only hits one partition (",(0,i.jsx)(n.code,{children:"partition=1/0"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:["It can also be observed that because a partition Transform function ",(0,i.jsx)(n.code,{children:"DAY(ts)"})," was specified when creating the table, the original value in the data ",(0,i.jsx)(n.code,{children:"2024-01-01 03:25:15.000000"})," will be transformed into the partition information in the file directory ",(0,i.jsx)(n.code,{children:"ts_day=2024-01-01"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"06-time-travel",children:"06 Time Travel"}),"\n",(0,i.jsx)(n.p,{children:"Let's insert a few more rows of data:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"INSERT INTO iceberg.nyc.taxis VALUES (1, 1000375, 8.8, 55.55, 'Y', '2024-01-01 8:10:22'), (3, 1000376, 7.4, 32.35, 'N', '2024-01-02  1:14:45');\nQuery OK, 2 rows affected (0.17 sec)\n{'status':'COMMITTED', 'txnId':'10086'}\n\nmysql> SELECT * FROM iceberg.nyc.taxis;\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n| vendor_id | trip_id | trip_distance | fare_amount | store_and_fwd_flag | ts                         |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n|         3 | 1000376 |           7.4 |       32.35 | N                  | 2024-01-02 01:14:45.000000 |\n|         2 | 1000372 |           2.5 |       22.15 | N                  | 2024-01-02 12:10:11.000000 |\n|         1 | 1000374 |           8.4 |       42.13 | Y                  | 2024-01-03 07:12:33.000000 |\n|         1 | 1000371 |           1.8 |       15.32 | N                  | 2024-01-01 09:15:23.000000 |\n|         1 | 1000375 |           8.8 |       55.55 | Y                  | 2024-01-01 08:10:22.000000 |\n|         2 | 1000373 |           0.9 |        9.01 | N                  | 2024-01-01 03:25:15.000000 |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n6 rows in set (0.11 sec)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.code,{children:"iceberg_meta"})," table function to query the snapshot information of the table:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'mysql> select * from iceberg_meta("table" = "iceberg.nyc.taxis", "query_type" = "snapshots");\n+---------------------+---------------------+---------------------+-----------+-----------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| committed_at        | snapshot_id         | parent_id           | operation | manifest_list                                                                                             | summary                                                                                                                                                                                                                                                        |\n+---------------------+---------------------+---------------------+-----------+-----------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| 2024-07-29 03:38:22 | 8483933166442433486 |                  -1 | append    | s3://warehouse/wh/nyc/taxis/metadata/snap-8483933166442433486-1-5f7b7736-8022-4ba1-9db2-51ae7553be4d.avro | {"added-data-files":"4","added-records":"4","added-files-size":"14156","changed-partition-count":"4","total-records":"4","total-files-size":"14156","total-data-files":"4","total-delete-files":"0","total-position-deletes":"0","total-equality-deletes":"0"} |\n| 2024-07-29 03:40:23 | 4726331391239920914 | 8483933166442433486 | append    | s3://warehouse/wh/nyc/taxis/metadata/snap-4726331391239920914-1-6aa3d142-6c9c-4553-9c04-08ad4d49a4ea.avro | {"added-data-files":"2","added-records":"2","added-files-size":"7078","changed-partition-count":"2","total-records":"6","total-files-size":"21234","total-data-files":"6","total-delete-files":"0","total-position-deletes":"0","total-equality-deletes":"0"}  |\n+---------------------+---------------------+---------------------+-----------+-----------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n2 rows in set (0.07 sec)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Query a specified snapshot using the ",(0,i.jsx)(n.code,{children:"FOR VERSION AS OF"})," statement:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> SELECT * FROM iceberg.nyc.taxis FOR VERSION AS OF 8483933166442433486;\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n| vendor_id | trip_id | trip_distance | fare_amount | store_and_fwd_flag | ts                         |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n|         1 | 1000371 |           1.8 |       15.32 | N                  | 2024-01-01 09:15:23.000000 |\n|         1 | 1000374 |           8.4 |       42.13 | Y                  | 2024-01-03 07:12:33.000000 |\n|         2 | 1000372 |           2.5 |       22.15 | N                  | 2024-01-02 12:10:11.000000 |\n|         2 | 1000373 |           0.9 |        9.01 | N                  | 2024-01-01 03:25:15.000000 |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n4 rows in set (0.05 sec)\n\nmysql> SELECT * FROM iceberg.nyc.taxis FOR VERSION AS OF 4726331391239920914;\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n| vendor_id | trip_id | trip_distance | fare_amount | store_and_fwd_flag | ts                         |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n|         1 | 1000374 |           8.4 |       42.13 | Y                  | 2024-01-03 07:12:33.000000 |\n|         1 | 1000375 |           8.8 |       55.55 | Y                  | 2024-01-01 08:10:22.000000 |\n|         3 | 1000376 |           7.4 |       32.35 | N                  | 2024-01-02 01:14:45.000000 |\n|         2 | 1000372 |           2.5 |       22.15 | N                  | 2024-01-02 12:10:11.000000 |\n|         2 | 1000373 |           0.9 |        9.01 | N                  | 2024-01-01 03:25:15.000000 |\n|         1 | 1000371 |           1.8 |       15.32 | N                  | 2024-01-01 09:15:23.000000 |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n6 rows in set (0.04 sec)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Query a specified snapshot using the ",(0,i.jsx)(n.code,{children:"FOR TIME AS OF"})," statement:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'mysql> SELECT * FROM iceberg.nyc.taxis FOR TIME AS OF "2024-07-29 03:38:23";\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n| vendor_id | trip_id | trip_distance | fare_amount | store_and_fwd_flag | ts                         |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n|         1 | 1000374 |           8.4 |       42.13 | Y                  | 2024-01-03 07:12:33.000000 |\n|         1 | 1000371 |           1.8 |       15.32 | N                  | 2024-01-01 09:15:23.000000 |\n|         2 | 1000372 |           2.5 |       22.15 | N                  | 2024-01-02 12:10:11.000000 |\n|         2 | 1000373 |           0.9 |        9.01 | N                  | 2024-01-01 03:25:15.000000 |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n4 rows in set (0.04 sec)\n\nmysql> SELECT * FROM iceberg.nyc.taxis FOR TIME AS OF "2024-07-29 03:40:22";\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n| vendor_id | trip_id | trip_distance | fare_amount | store_and_fwd_flag | ts                         |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n|         2 | 1000373 |           0.9 |        9.01 | N                  | 2024-01-01 03:25:15.000000 |\n|         1 | 1000374 |           8.4 |       42.13 | Y                  | 2024-01-03 07:12:33.000000 |\n|         2 | 1000372 |           2.5 |       22.15 | N                  | 2024-01-02 12:10:11.000000 |\n|         1 | 1000371 |           1.8 |       15.32 | N                  | 2024-01-01 09:15:23.000000 |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n4 rows in set (0.05 sec)\n'})}),"\n",(0,i.jsx)(n.h3,{id:"07-interacting-with-pyiceberg",children:"07 Interacting with PyIceberg"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Please use Doris 2.1.8/3.0.4 or above."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Load an iceberg table:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from pyiceberg.catalog import load_catalog\n\ncatalog = load_catalog(\n	"iceberg",\n	**{\n		"warehouse" = "warehouse",\n		"uri" = "http://rest:8181",\n		"s3.access-key-id" = "admin",\n		"s3.secret-access-key" = "password",\n		"s3.endpoint" = "http://minio:9000"\n	},\n)\ntable = catalog.load_table("nyc.taxis")\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Read table as ",(0,i.jsx)(n.code,{children:"Arrow Table"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'print(table.scan().to_arrow())\n\npyarrow.Table\nvendor_id: int64\ntrip_id: int64\ntrip_distance: float\nfare_amount: double\nstore_and_fwd_flag: large_string\nts: timestamp[us]\n----\nvendor_id: [[1],[1],[2],[2]]\ntrip_id: [[1000371],[1000374],[1000373],[1000372]]\ntrip_distance: [[1.8],[8.4],[0.9],[2.5]]\nfare_amount: [[15.32],[42.13],[9.01],[22.15]]\nstore_and_fwd_flag: [["N"],["Y"],["N"],["N"]]\nts: [[2024-01-01 09:15:23.000000],[2024-01-03 07:12:33.000000],[2024-01-01 03:25:15.000000],[2024-01-02 12:10:11.000000]]\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Read table as ",(0,i.jsx)(n.code,{children:"Pandas DataFrame"}),"\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"print(table.scan().to_pandas())\n\nvendor_id  trip_id  trip_distance  fare_amount store_and_fwd_flag                    ts\n0          1  1000371            1.8        15.32                  N   2024-01-01 09:15:23\n1          1  1000374            8.4        42.13                  Y   2024-01-03 07:12:33\n2          2  1000373            0.9         9.01                  N   2024-01-01 03:25:15\n3          2  1000372            2.5        22.15                  N   2024-01-02 12:10:11\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Read table as ",(0,i.jsx)(n.code,{children:"Polars DataFrame"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import polars as pl\n\nprint(pl.scan_iceberg(table).collect())\n\nshape: (4, 6)\n\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 vendor_id \u2506 trip_id \u2506 trip_distance \u2506 fare_amount \u2506 store_and_fwd_flag \u2506 ts                  \u2502\n\u2502 ---       \u2506 ---     \u2506 ---           \u2506 ---         \u2506 ---                \u2506 ---                 \u2502\n\u2502 i64       \u2506 i64     \u2506 f32           \u2506 f64         \u2506 str                \u2506 datetime[\u03BCs]        \u2502\n\u255E\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u256A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u256A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u256A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u256A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u256A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2561\n\u2502 1         \u2506 1000371 \u2506 1.8           \u2506 15.32       \u2506 N                  \u2506 2024-01-01 09:15:23 \u2502\n\u2502 1         \u2506 1000374 \u2506 8.4           \u2506 42.13       \u2506 Y                  \u2506 2024-01-03 07:12:33 \u2502\n\u2502 2         \u2506 1000373 \u2506 0.9           \u2506 9.01        \u2506 N                  \u2506 2024-01-01 03:25:15 \u2502\n\u2502 2         \u2506 1000372 \u2506 2.5           \u2506 22.15       \u2506 N                  \u2506 2024-01-02 12:10:11 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Write iceberg table by PyIceberg, please see ",(0,i.jsx)(n.a,{href:"#write-iceberg-table-by-pyiceberg",children:"step"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"08-appendix",children:"08 Appendix"}),"\n",(0,i.jsx)(n.h4,{id:"write-iceberg-table-by-pyiceberg",children:"Write iceberg table by PyIceberg"}),"\n",(0,i.jsx)(n.p,{children:"Load an iceberg table:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from pyiceberg.catalog import load_catalog\n\ncatalog = load_catalog(\n	"iceberg",\n	**{\n		"warehouse" = "warehouse",\n		"uri" = "http://rest:8181",\n		"s3.access-key-id" = "admin",\n		"s3.secret-access-key" = "password",\n		"s3.endpoint" = "http://minio:9000"\n	},\n)\ntable = catalog.load_table("nyc.taxis")\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Write table with ",(0,i.jsx)(n.code,{children:"Arrow Table"})," :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import pyarrow as pa\n\ndf = pa.Table.from_pydict(\n	{\n		"vendor_id": pa.array([1, 2, 2, 1], pa.int64()),\n		"trip_id": pa.array([1000371, 1000372, 1000373, 1000374], pa.int64()),\n		"trip_distance": pa.array([1.8, 2.5, 0.9, 8.4], pa.float32()),\n		"fare_amount": pa.array([15.32, 22.15, 9.01, 42.13], pa.float64()),\n		"store_and_fwd_flag": pa.array(["N", "N", "N", "Y"], pa.string()),\n		"ts": pa.compute.strptime(\n			["2024-01-01 9:15:23", "2024-01-02 12:10:11", "2024-01-01 3:25:15", "2024-01-03 7:12:33"],\n			"%Y-%m-%d %H:%M:%S",\n			"us",\n		),\n	}\n)\ntable.append(df)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Write table with ",(0,i.jsx)(n.code,{children:"Pandas DataFrame"})," :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import pyarrow as pa\nimport pandas as pd\n\ndf = pd.DataFrame(\n	{\n		"vendor_id": pd.Series([1, 2, 2, 1]).astype("int64[pyarrow]"),\n		"trip_id": pd.Series([1000371, 1000372, 1000373, 1000374]).astype("int64[pyarrow]"),\n		"trip_distance": pd.Series([1.8, 2.5, 0.9, 8.4]).astype("float32[pyarrow]"),\n		"fare_amount": pd.Series([15.32, 22.15, 9.01, 42.13]).astype("float64[pyarrow]"),\n		"store_and_fwd_flag": pd.Series(["N", "N", "N", "Y"]).astype("string[pyarrow]"),\n		"ts": pd.Series(["2024-01-01 9:15:23", "2024-01-02 12:10:11", "2024-01-01 3:25:15", "2024-01-03 7:12:33"]).astype("timestamp[us][pyarrow]"),\n	}\n)\ntable.append(pa.Table.from_pandas(df))\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Write table with ",(0,i.jsx)(n.code,{children:"Polars DataFrame"})," :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import polars as pl\n\ndf = pl.DataFrame(\n	{\n		"vendor_id": [1, 2, 2, 1],\n		"trip_id": [1000371, 1000372, 1000373, 1000374],\n		"trip_distance": [1.8, 2.5, 0.9, 8.4],\n		"fare_amount": [15.32, 22.15, 9.01, 42.13],\n		"store_and_fwd_flag": ["N", "N", "N", "Y"],\n		"ts": ["2024-01-01 9:15:23", "2024-01-02 12:10:11", "2024-01-01 3:25:15", "2024-01-03 7:12:33"],\n	},\n	{\n		"vendor_id": pl.Int64,\n		"trip_id": pl.Int64,\n		"trip_distance": pl.Float32,\n		"fare_amount": pl.Float64,\n		"store_and_fwd_flag": pl.String,\n		"ts": pl.String,\n	},\n).with_columns(pl.col("ts").str.strptime(pl.Datetime, "%Y-%m-%d %H:%M:%S"))\ntable.append(df.to_arrow())\n'})})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},317610:function(e,n,a){a.d(n,{Z:function(){return t}});let t=a.p+"assets/images/lakehouse-architecture-for-doris-and-iceberg-f68e6dce7852461952c5bf7ba5efae25.png"},250065:function(e,n,a){a.d(n,{Z:function(){return d},a:function(){return s}});var t=a(667294);let i={},r=t.createContext(i);function s(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);