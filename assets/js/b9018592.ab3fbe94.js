"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["220081"],{914698:function(e,n,a){a.r(n),a.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>r});var t=JSON.parse('{"id":"lakehouse/lakehouse-best-practices/doris-paimon","title":"Using Doris and Paimon","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/lakehouse/lakehouse-best-practices/doris-paimon.md","sourceDirName":"lakehouse/lakehouse-best-practices","slug":"/lakehouse/lakehouse-best-practices/doris-paimon","permalink":"/docs/lakehouse/lakehouse-best-practices/doris-paimon","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Using Doris and Paimon","language":"en"},"sidebar":"docs","previous":{"title":"Using Doris and Hudi","permalink":"/docs/lakehouse/lakehouse-best-practices/doris-hudi"},"next":{"title":"Using Doris and Iceberg","permalink":"/docs/lakehouse/lakehouse-best-practices/doris-iceberg"}}'),i=a("785893"),s=a("250065");let r={title:"Using Doris and Paimon",language:"en"},o=void 0,c={},l=[{value:"Apache Doris &amp; Paimon",id:"apache-doris--paimon",level:2},{value:"User Guide",id:"user-guide",level:2},{value:"01 Environment Preparation",id:"01-environment-preparation",level:3},{value:"02 Environment Deployment",id:"02-environment-deployment",level:3},{value:"03 Data Preparation",id:"03-data-preparation",level:3},{value:"04 Data Query",id:"04-data-query",level:3},{value:"05 Read Incremental Data",id:"05-read-incremental-data",level:3},{value:"Benchmark",id:"benchmark",level:3},{value:"Query Optimization",id:"query-optimization",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"As a new open data management architecture, the Data Lakehouse integrates the high performance and real-time capabilities of data warehouses with the low cost and flexibility of data lakes, helping users more conveniently meet various data processing and analysis needs. It has been increasingly applied in enterprise big data systems."}),"\n",(0,i.jsx)(n.p,{children:"In recent versions, Apache Doris has deepened its integration with data lakes and has evolved a mature Data Lakehouse solution."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Since version 0.15, Apache Doris has introduced Hive and Iceberg external tables, exploring the capabilities of combining with Apache Iceberg for data lakes."}),"\n",(0,i.jsx)(n.li,{children:"Starting from version 1.2, Apache Doris officially introduced the Multi-Catalog feature, achieving automatic metadata mapping and data access for various data sources, along with many performance optimizations for external data reading and query execution. It now fully possesses the ability to build a high-speed and user-friendly Lakehouse architecture."}),"\n",(0,i.jsx)(n.li,{children:"In version 2.1, Apache Doris' Data Lakehouse architecture was significantly enhanced, strengthening the reading and writing capabilities of mainstream data lake formats (Hudi, Iceberg, Paimon, etc.), introducing compatibility with multiple SQL dialects, and seamless migration from existing systems to Apache Doris. For data science and large-scale data reading scenarios, Doris integrated the Arrow Flight high-speed reading interface, achieving a 100-fold improvement in data transfer efficiency."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Building lakehouse using Doris and Paimon",src:a(855237).Z+"",width:"2560",height:"1280"})}),"\n",(0,i.jsx)(n.h2,{id:"apache-doris--paimon",children:"Apache Doris & Paimon"}),"\n",(0,i.jsx)(n.p,{children:"Apache Paimon is a data lake format that innovatively combines the advantages of data lake formats and LSM structures, successfully introducing efficient real-time streaming update capabilities into data lake architecture. This enables Paimon to efficiently manage data and perform real-time analysis, providing strong support for building real-time Data Lakehouse architecture."}),"\n",(0,i.jsx)(n.p,{children:"To fully leverage Paimon's capabilities and improve query efficiency for Paimon data, Apache Doris provides native support for several of Paimon's latest features:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Supports various types of Paimon Catalogs such as Hive Metastore and FileSystem."}),"\n",(0,i.jsx)(n.li,{children:"Native support for Paimon 0.6's Primary Key Table Read Optimized feature."}),"\n",(0,i.jsx)(n.li,{children:"Native support for Paimon 0.8's Primary Key Table Deletion Vector feature."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"With Apache Doris' high-performance query engine and Apache Paimon's efficient real-time streaming update capabilities, users can achieve:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Real-time data ingestion into the lake: Leveraging Paimon's LSM-Tree model, data ingestion into the lake can be reduced to a minute-level timeliness. Additionally, Paimon supports various data update capabilities including aggregation, deduplication, and partial column updates, making data flow more flexible and efficient."}),"\n",(0,i.jsx)(n.li,{children:"High-performance data processing and analysis: Paimon's technologies such as Append Only Table, Read Optimized, and Deletion Vector can be seamlessly integrated with Doris' powerful query engine, enabling fast querying and analysis responses for lake data."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In the future, Apache Doris will gradually support more advanced features of Apache Paimon, including Time Travel and incremental data reading, to jointly build a unified, high-performance, real-time lakehouse platform."}),"\n",(0,i.jsx)(n.p,{children:"This article will explain how to quickly set up an Apache Doris + Apache Paimon testing & demonstration environment in a Docker environment and demonstrate the usage of various features."}),"\n",(0,i.jsxs)(n.p,{children:["For more information, please refer to ",(0,i.jsx)(n.a,{href:"../../../lakehouse/datalake-analytics/paimon.md",children:"Paimon Catalog"})]}),"\n",(0,i.jsx)(n.h2,{id:"user-guide",children:"User Guide"}),"\n",(0,i.jsxs)(n.p,{children:["All scripts and code mentioned in this article can be obtained from the following address: ",(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/tree/master/samples/datalake/iceberg_and_paimon",children:"https://github.com/apache/doris/tree/master/samples/datalake/iceberg_and_paimon"})]}),"\n",(0,i.jsx)(n.h3,{id:"01-environment-preparation",children:"01 Environment Preparation"}),"\n",(0,i.jsx)(n.p,{children:"This article uses Docker Compose for deployment, with the following components and versions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Component"}),(0,i.jsx)(n.th,{children:"Version"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Apache Doris"}),(0,i.jsx)(n.td,{children:"Default 2.1.5, can be modified"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Apache Paimon"}),(0,i.jsx)(n.td,{children:"0.8"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Apache Flink"}),(0,i.jsx)(n.td,{children:"1.18"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"MinIO"}),(0,i.jsx)(n.td,{children:"RELEASE.2024-04-29T09-56-05Z"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"02-environment-deployment",children:"02 Environment Deployment"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Start all components"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"bash ./start_all.sh"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"After starting, you can use the following scripts to log in to the Flink command line or Doris command line:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"-- login flink\nbash ./start_flink_client.sh\n\n-- login doris\nbash ./start_doris_client.sh\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"03-data-preparation",children:"03 Data Preparation"}),"\n",(0,i.jsx)(n.p,{children:"After logging into the Flink command line, you can see a pre-built table. The table already contains some data that can be viewed using Flink SQL."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Flink SQL> use paimon.db_paimon;\n[INFO] Execute statement succeed.\n\nFlink SQL> show tables;\n+------------+\n| table name |\n+------------+\n|   customer |\n+------------+\n1 row in set\n\nFlink SQL> show create table customer;\n+------------------------------------------------------------------------+\n|                                                                 result |\n+------------------------------------------------------------------------+\n| CREATE TABLE `paimon`.`db_paimon`.`customer` (\n  `c_custkey` INT NOT NULL,\n  `c_name` VARCHAR(25),\n  `c_address` VARCHAR(40),\n  `c_nationkey` INT NOT NULL,\n  `c_phone` CHAR(15),\n  `c_acctbal` DECIMAL(12, 2),\n  `c_mktsegment` CHAR(10),\n  `c_comment` VARCHAR(117),\n  CONSTRAINT `PK_c_custkey_c_nationkey` PRIMARY KEY (`c_custkey`, `c_nationkey`) NOT ENFORCED\n) PARTITIONED BY (`c_nationkey`)\nWITH (\n  'bucket' = '1',\n  'path' = 's3://warehouse/wh/db_paimon.db/customer',\n  'deletion-vectors.enabled' = 'true'\n)\n |\n+-------------------------------------------------------------------------+\n1 row in set\n\nFlink SQL> desc customer;\n+--------------+----------------+-------+-----------------------------+--------+-----------+\n|         name |           type |  null |                         key | extras | watermark |\n+--------------+----------------+-------+-----------------------------+--------+-----------+\n|    c_custkey |            INT | FALSE | PRI(c_custkey, c_nationkey) |        |           |\n|       c_name |    VARCHAR(25) |  TRUE |                             |        |           |\n|    c_address |    VARCHAR(40) |  TRUE |                             |        |           |\n|  c_nationkey |            INT | FALSE | PRI(c_custkey, c_nationkey) |        |           |\n|      c_phone |       CHAR(15) |  TRUE |                             |        |           |\n|    c_acctbal | DECIMAL(12, 2) |  TRUE |                             |        |           |\n| c_mktsegment |       CHAR(10) |  TRUE |                             |        |           |\n|    c_comment |   VARCHAR(117) |  TRUE |                             |        |           |\n+--------------+----------------+-------+-----------------------------+--------+-----------+\n8 rows in set\n\nFlink SQL> select * from customer order by c_custkey limit 4;\n+-----------+--------------------+--------------------------------+-------------+-----------------+-----------+--------------+--------------------------------+\n| c_custkey |             c_name |                      c_address | c_nationkey |         c_phone | c_acctbal | c_mktsegment |                      c_comment |\n+-----------+--------------------+--------------------------------+-------------+-----------------+-----------+--------------+--------------------------------+\n|         1 | Customer#000000001 |              IVhzIApeRb ot,c,E |          15 | 25-989-741-2988 |    711.56 |     BUILDING | to the even, regular platel... |\n|         2 | Customer#000000002 | XSTf4,NCwDVaWNe6tEgvwfmRchLXak |          13 | 23-768-687-3665 |    121.65 |   AUTOMOBILE | l accounts. blithely ironic... |\n|         3 | Customer#000000003 |                   MG9kdTD2WBHm |           1 | 11-719-748-3364 |   7498.12 |   AUTOMOBILE |  deposits eat slyly ironic,... |\n|        32 | Customer#000000032 | jD2xZzi UmId,DCtNBLXKj9q0Tl... |          15 | 25-430-914-2194 |   3471.53 |     BUILDING | cial ideas. final, furious ... |\n+-----------+--------------------+--------------------------------+-------------+-----------------+-----------+--------------+--------------------------------+\n4 rows in set\n"})}),"\n",(0,i.jsx)(n.h3,{id:"04-data-query",children:"04 Data Query"}),"\n",(0,i.jsxs)(n.p,{children:["As shown below, a Catalog named ",(0,i.jsx)(n.code,{children:"paimon"})," has been created in the Doris cluster (can be viewed using SHOW CATALOGS). The following is the statement for creating this Catalog:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'-- \u5DF2\u521B\u5EFA\uFF0C\u65E0\u9700\u6267\u884C\nCREATE CATALOG `paimon` PROPERTIES (\n    "type" = "paimon",\n    "warehouse" = "s3://warehouse/wh/",\n    "s3.endpoint"="http://minio:9000",\n    "s3.access_key"="admin",\n    "s3.secret_key"="password",\n    "s3.region"="us-east-1"\n);\n'})}),"\n",(0,i.jsx)(n.p,{children:"You can query Paimon's data in Doris:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> use paimon.db_paimon;\nReading table information for completion of table and column names\nYou can turn off this feature to get a quicker startup with -A\n\nDatabase changed\nmysql> show tables;\n+---------------------+\n| Tables_in_db_paimon |\n+---------------------+\n| customer            |\n+---------------------+\n1 row in set (0.00 sec)\n\nmysql> select * from customer order by c_custkey limit 4;\n+-----------+--------------------+---------------------------------------+-------------+-----------------+-----------+--------------+--------------------------------------------------------------------------------------------------------+\n| c_custkey | c_name             | c_address                             | c_nationkey | c_phone         | c_acctbal | c_mktsegment | c_comment                                                                                              |\n+-----------+--------------------+---------------------------------------+-------------+-----------------+-----------+--------------+--------------------------------------------------------------------------------------------------------+\n|         1 | Customer#000000001 | IVhzIApeRb ot,c,E                     |          15 | 25-989-741-2988 |    711.56 | BUILDING     | to the even, regular platelets. regular, ironic epitaphs nag e                                         |\n|         2 | Customer#000000002 | XSTf4,NCwDVaWNe6tEgvwfmRchLXak        |          13 | 23-768-687-3665 |    121.65 | AUTOMOBILE   | l accounts. blithely ironic theodolites integrate boldly: caref                                        |\n|         3 | Customer#000000003 | MG9kdTD2WBHm                          |           1 | 11-719-748-3364 |   7498.12 | AUTOMOBILE   |  deposits eat slyly ironic, even instructions. express foxes detect slyly. blithely even accounts abov |\n|        32 | Customer#000000032 | jD2xZzi UmId,DCtNBLXKj9q0Tlp2iQ6ZcO3J |          15 | 25-430-914-2194 |   3471.53 | BUILDING     | cial ideas. final, furious requests across the e                                                       |\n+-----------+--------------------+---------------------------------------+-------------+-----------------+-----------+--------------+--------------------------------------------------------------------------------------------------------+\n4 rows in set (1.89 sec)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"05-read-incremental-data",children:"05 Read Incremental Data"}),"\n",(0,i.jsx)(n.p,{children:"You can update the data in the Paimon table using Flink SQL:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Flink SQL> update customer set c_address='c_address_update' where c_nationkey = 1;\n[INFO] Submitting SQL update statement to the cluster...\n[INFO] SQL update statement has been successfully submitted to the cluster:\nJob ID: ff838b7b778a94396b332b0d93c8f7ac\n"})}),"\n",(0,i.jsx)(n.p,{children:"After the Flink SQL execution is complete, you can directly view the latest data in Doris:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select * from customer where c_nationkey=1 limit 2;\n+-----------+--------------------+-----------------+-------------+-----------------+-----------+--------------+--------------------------------------------------------------------------------------------------------+\n| c_custkey | c_name             | c_address       | c_nationkey | c_phone         | c_acctbal | c_mktsegment | c_comment                                                                                              |\n+-----------+--------------------+-----------------+-------------+-----------------+-----------+--------------+--------------------------------------------------------------------------------------------------------+\n|         3 | Customer#000000003 | c_address_update |           1 | 11-719-748-3364 |   7498.12 | AUTOMOBILE   |  deposits eat slyly ironic, even instructions. express foxes detect slyly. blithely even accounts abov |\n|       513 | Customer#000000513 | c_address_update |           1 | 11-861-303-6887 |    955.37 | HOUSEHOLD    | press along the quickly regular instructions. regular requests against the carefully ironic s          |\n+-----------+--------------------+-----------------+-------------+-----------------+-----------+--------------+--------------------------------------------------------------------------------------------------------+\n2 rows in set (0.19 sec)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"benchmark",children:"Benchmark"}),"\n",(0,i.jsx)(n.p,{children:"We conducted a simple test on the TPCDS 1000 dataset in Paimon (0.8) version, using Apache Doris 2.1.5 version and Trino 422 version, both with the Primary Key Table Read Optimized feature enabled."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:a(895453).Z+"",width:"1280",height:"591"})}),"\n",(0,i.jsx)(n.p,{children:"From the test results, it can be seen that Doris' average query performance on the standard static test set is 3-5 times that of Trino. In the future, we will optimize the Deletion Vector to further improve query efficiency in real business scenarios."}),"\n",(0,i.jsx)(n.h2,{id:"query-optimization",children:"Query Optimization"}),"\n",(0,i.jsx)(n.p,{children:"For baseline data, after introducing the Primary Key Table Read Optimized feature in Apache Paimon version 0.6, the query engine can directly access the underlying Parquet/ORC files, significantly improving the reading efficiency of baseline data. For unmerged incremental data (data increments generated by INSERT, UPDATE, or DELETE), they can be read through Merge-on-Read. In addition, Paimon introduced the Deletion Vector feature in version 0.8, which further enhances the query engine's efficiency in reading incremental data.\nApache Doris supports reading Deletion Vector through native Reader and performing Merge on Read. We demonstrate the query methods for baseline data and incremental data in a query using Doris' EXPLAIN statement."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> explain verbose select * from customer where c_nationkey < 3;\n+------------------------------------------------------------------------------------------------------------------------------------------------+\n| Explain String(Nereids Planner)                                                                                                                |\n+------------------------------------------------------------------------------------------------------------------------------------------------+\n| ...............                                                                                                                                |\n|                                                                                                                                                |\n|   0:VPAIMON_SCAN_NODE(68)                                                                                                                      |\n|      table: customer                                                                                                                           |\n|      predicates: (c_nationkey[#3] < 3)                                                                                                         |\n|      inputSplitNum=4, totalFileSize=238324, scanRanges=4                                                                                       |\n|      partition=3/0                                                                                                                             |\n|      backends:                                                                                                                                 |\n|        10002                                                                                                                                   |\n|          s3://warehouse/wh/db_paimon.db/customer/c_nationkey=1/bucket-0/data-15cee5b7-1bd7-42ca-9314-56d92c62c03b-0.orc start: 0 length: 66600 |\n|          s3://warehouse/wh/db_paimon.db/customer/c_nationkey=1/bucket-0/data-5d50255a-2215-4010-b976-d5dc656f3444-0.orc start: 0 length: 44501 |\n|          s3://warehouse/wh/db_paimon.db/customer/c_nationkey=2/bucket-0/data-e98fb7ef-ec2b-4ad5-a496-713cb9481d56-0.orc start: 0 length: 64059 |\n|          s3://warehouse/wh/db_paimon.db/customer/c_nationkey=0/bucket-0/data-431be05d-50fa-401f-9680-d646757d0f95-0.orc start: 0 length: 63164 |\n|      cardinality=18751, numNodes=1                                                                                                             |\n|      pushdown agg=NONE                                                                                                                         |\n|      paimonNativeReadSplits=4/4                                                                                                                |\n|      PaimonSplitStats:                                                                                                                         |\n|        SplitStat [type=NATIVE, rowCount=1542, rawFileConvertable=true, hasDeletionVector=true]                                                 |\n|        SplitStat [type=NATIVE, rowCount=750, rawFileConvertable=true, hasDeletionVector=false]                                                 |\n|        SplitStat [type=NATIVE, rowCount=750, rawFileConvertable=true, hasDeletionVector=false]                                                 |\n|      tuple ids: 0\n| ...............                                                                                                           |                                                                                                  |\n+------------------------------------------------------------------------------------------------------------------------------------------------+\n67 rows in set (0.23 sec)\n"})}),"\n",(0,i.jsx)(n.p,{children:"It can be seen that the table just updated by Flink SQL contains 4 shards, and all shards can be accessed through Native Reader (paimonNativeReadSplits=4/4). In addition, the hasDeletionVector property of the first shard is true, indicating that the shard has a corresponding Deletion Vector, and data will be filtered according to the Deletion Vector when reading."})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},855237:function(e,n,a){a.d(n,{Z:function(){return t}});let t=a.p+"assets/images/lakehouse-architecture-for-doris-and-paimon-c3b290691e3b669dcb3c28d1dd269de4.png"},895453:function(e,n,a){a.d(n,{Z:function(){return t}});let t=a.p+"assets/images/lakehouse-paimon-benchmark-e541bdf261a3a2061218e99665173249.PNG"},250065:function(e,n,a){a.d(n,{Z:function(){return o},a:function(){return r}});var t=a(667294);let i={},s=t.createContext(i);function r(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);