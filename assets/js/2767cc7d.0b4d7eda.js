"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["34231"],{49704:function(e,n,i){i.r(n),i.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>h,assets:()=>d,toc:()=>t,frontMatter:()=>c});var s=JSON.parse('{"id":"releasenotes/v1.2/release-1.2.2","title":"Release 1.2.2","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/releasenotes/v1.2/release-1.2.2.md","sourceDirName":"releasenotes/v1.2","slug":"/releasenotes/v1.2/release-1.2.2","permalink":"/docs/2.0/releasenotes/v1.2/release-1.2.2","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Release 1.2.2","language":"en"},"sidebar":"docs","previous":{"title":"Release 1.2.3","permalink":"/docs/2.0/releasenotes/v1.2/release-1.2.3"},"next":{"title":"Release 1.2.1","permalink":"/docs/2.0/releasenotes/v1.2/release-1.2.1"}}'),r=i("785893"),l=i("250065");let c={title:"Release 1.2.2",language:"en"},a="New Features",d={},t=[{value:"Lakehouse",id:"lakehouse",level:3},{value:"Auto Bucket",id:"auto-bucket",level:3},{value:"New Functions",id:"new-functions",level:3},{value:"Compaction",id:"compaction",level:3},{value:"Lakehouse",id:"lakehouse-1",level:3},{value:"Other",id:"other",level:3}];function o(e){let n={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"new-features",children:"New Features"})}),"\n",(0,r.jsx)(n.h3,{id:"lakehouse",children:"Lakehouse"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Support automatic synchronization of Hive metastore."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Support reading the Iceberg Snapshot, and viewing the Snapshot history."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"JDBC Catalog supports PostgreSQL, Clickhouse, Oracle, SQLServer"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"JDBC Catalog supports Insert operation"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Reference: ",(0,r.jsx)(n.a,{href:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/",children:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/"})]}),"\n",(0,r.jsx)(n.h3,{id:"auto-bucket",children:"Auto Bucket"}),"\n",(0,r.jsx)(n.p,{children:"Set and scale the number of buckets for different partitions to keep the number of tablet in a relatively appropriate range."}),"\n",(0,r.jsx)(n.h3,{id:"new-functions",children:"New Functions"}),"\n",(0,r.jsxs)(n.p,{children:["Add the new function ",(0,r.jsx)(n.code,{children:"width_bucket"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Reference: ",(0,r.jsx)(n.a,{href:"https://doris.apache.org/zh-CN/docs/dev/sql-manual/sql-functions/width-bucket/#description",children:"https://doris.apache.org/zh-CN/docs/dev/sql-manual/sql-functions/width-bucket/#description"})]}),"\n",(0,r.jsx)(n.h1,{id:"behavior-changes",children:"Behavior Changes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Disable BE's page cache by default: ",(0,r.jsx)(n.code,{children:"disable_storage_page_cache=true"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Turn off this configuration to optimize memory usage and reduce the risk of memory OOM.\nBut it will reduce the query latency of some small queries.\nIf you are sensitive to query latency, or have high concurrency and small query scenarios, you can configure ",(0,r.jsx)(n.em,{children:"disable_storage_page_cache=false"})," to enable page cache again."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Add new session variable ",(0,r.jsx)(n.code,{children:"group_by_and_having_use_alias_first"}),", used to control whether the group and having clauses use alias."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Reference: ",(0,r.jsx)(n.a,{href:"https://doris.apache.org/docs/dev/advanced/variables",children:"https://doris.apache.org/docs/dev/advanced/variables"})]}),"\n",(0,r.jsx)(n.h1,{id:"improvement",children:"Improvement"}),"\n",(0,r.jsx)(n.h3,{id:"compaction",children:"Compaction"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Support ",(0,r.jsx)(n.code,{children:"Vertical Compaction"}),". To optimize the compaction overhead and efficiency of wide tables."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Support ",(0,r.jsx)(n.code,{children:"Segment ompaction"}),". Fix -238 and -235 issues with high frequency imports."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"lakehouse-1",children:"Lakehouse"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Hive Catalog can be compatible with Hive version 1/2/3"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Hive Catalog can access JuiceFS based HDFS with Broker."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Iceberg Catalog Support Hive Metastore and Rest Catalog type."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"ES Catalog support _id column mapping."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Optimize Iceberg V2 read performance with large number of delete rows."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Support for reading Iceberg tables after Schema Evolution"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Parquet Reader handles column name case correctly."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"other",children:"Other"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Support for accessing Hadoop KMS-encrypted HDFS."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Support to cancel the Export export task in progress."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Optimize the performance of ",(0,r.jsx)(n.code,{children:"explode_split"})," with 1x."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Optimize the read performance of nullable columns with 3x."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Optimize some problems of Memtracker, improve memory management accuracy, and optimize memory application."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"bug-fix",children:"Bug Fix"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fixed memory leak when loading data with Doris Flink Connector."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Fixed the possible thread scheduling problem of BE and reduce the ",(0,r.jsx)(n.code,{children:"Fragment sent timeout"})," error caused by BE thread exhaustion."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fixed various correctness and precision issues of column type datetimev2/decimalv3."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fixed the problem data correctness issue with Unique Key Merge-on-Read table."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fixed various known issues with the Light Schema Change feature."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fixed various data correctness issues of bitmap type Runtime Filter."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fixed the problem of poor reading performance of csv reader introduced in version 1.2.1."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fixed the problem of BE OOM caused by Spark Load data download phase."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fixed possible metadata compatibility issues when upgrading from version 1.1 to version 1.2."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fixed the metadata problem when creating JDBC Catalog with Resource."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fixed the problem of high CPU usage caused by load operation."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fixed the problem of FE OOM caused by a large number of failed Broker Load jobs."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fixed the problem of precision loss when loading floating-point types."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fixed the problem of memory leak when useing 2PC stream load"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"other-1",children:"Other"}),"\n",(0,r.jsx)(n.p,{children:"Add metrics to view the total rowset and segment numbers on BE"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"doris_be_all_rowsets_num and doris_be_all_segments_num"}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"big-thanks",children:"Big Thanks"}),"\n",(0,r.jsx)(n.p,{children:"Thanks to ALL who contributed to this release!"}),"\n",(0,r.jsx)(n.p,{children:"@adonis0147"}),"\n",(0,r.jsx)(n.p,{children:"@AshinGau"}),"\n",(0,r.jsx)(n.p,{children:"@BePPPower"}),"\n",(0,r.jsx)(n.p,{children:"@BiteTheDDDDt"}),"\n",(0,r.jsx)(n.p,{children:"@ByteYue"}),"\n",(0,r.jsx)(n.p,{children:"@caiconghui"}),"\n",(0,r.jsx)(n.p,{children:"@cambyzju"}),"\n",(0,r.jsx)(n.p,{children:"@chenlinzhong"}),"\n",(0,r.jsx)(n.p,{children:"@DarvenDuan"}),"\n",(0,r.jsx)(n.p,{children:"@dataroaring"}),"\n",(0,r.jsx)(n.p,{children:"@Doris-Extras"}),"\n",(0,r.jsx)(n.p,{children:"@dutyu"}),"\n",(0,r.jsx)(n.p,{children:"@englefly"}),"\n",(0,r.jsx)(n.p,{children:"@freemandealer"}),"\n",(0,r.jsx)(n.p,{children:"@Gabriel39"}),"\n",(0,r.jsx)(n.p,{children:"@HappenLee"}),"\n",(0,r.jsx)(n.p,{children:"@Henry2SS"}),"\n",(0,r.jsx)(n.p,{children:"@htyoung"}),"\n",(0,r.jsx)(n.p,{children:"@isHuangXin"}),"\n",(0,r.jsx)(n.p,{children:"@JackDrogon"}),"\n",(0,r.jsx)(n.p,{children:"@jacktengg"}),"\n",(0,r.jsx)(n.p,{children:"@Jibing-Li"}),"\n",(0,r.jsx)(n.p,{children:"@kaka11chen"}),"\n",(0,r.jsx)(n.p,{children:"@Kikyou1997"}),"\n",(0,r.jsx)(n.p,{children:"@Lchangliang"}),"\n",(0,r.jsx)(n.p,{children:"@LemonLiTree"}),"\n",(0,r.jsx)(n.p,{children:"@liaoxin01"}),"\n",(0,r.jsx)(n.p,{children:"@liqing-coder"}),"\n",(0,r.jsx)(n.p,{children:"@luozenglin"}),"\n",(0,r.jsx)(n.p,{children:"@morningman"}),"\n",(0,r.jsx)(n.p,{children:"@morrySnow"}),"\n",(0,r.jsx)(n.p,{children:"@mrhhsg"}),"\n",(0,r.jsx)(n.p,{children:"@nextdreamblue"}),"\n",(0,r.jsx)(n.p,{children:"@qidaye"}),"\n",(0,r.jsx)(n.p,{children:"@qzsee"}),"\n",(0,r.jsx)(n.p,{children:"@spaces-X"}),"\n",(0,r.jsx)(n.p,{children:"@stalary"}),"\n",(0,r.jsx)(n.p,{children:"@starocean999"}),"\n",(0,r.jsx)(n.p,{children:"@weizuo93"}),"\n",(0,r.jsx)(n.p,{children:"@wsjz"}),"\n",(0,r.jsx)(n.p,{children:"@xiaokang"}),"\n",(0,r.jsx)(n.p,{children:"@xinyiZzz"}),"\n",(0,r.jsx)(n.p,{children:"@xy720"}),"\n",(0,r.jsx)(n.p,{children:"@yangzhg"}),"\n",(0,r.jsx)(n.p,{children:"@yiguolei"}),"\n",(0,r.jsx)(n.p,{children:"@yixiutt"}),"\n",(0,r.jsx)(n.p,{children:"@Yukang-Lian"}),"\n",(0,r.jsx)(n.p,{children:"@Yulei-Yang"}),"\n",(0,r.jsx)(n.p,{children:"@zclllyybb"}),"\n",(0,r.jsx)(n.p,{children:"@zddr"}),"\n",(0,r.jsx)(n.p,{children:"@zhangstar333"}),"\n",(0,r.jsx)(n.p,{children:"@zhannngchen"}),"\n",(0,r.jsx)(n.p,{children:"@zy-kkk"})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return c}});var s=i(667294);let r={},l=s.createContext(r);function c(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);