"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["515759"],{739879:function(e,n,i){i.r(n),i.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>h,assets:()=>o,toc:()=>d,frontMatter:()=>a});var s=JSON.parse('{"id":"releasenotes/v1.2/release-1.2.3","title":"Release 1.2.3","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/releasenotes/v1.2/release-1.2.3.md","sourceDirName":"releasenotes/v1.2","slug":"/releasenotes/v1.2/release-1.2.3","permalink":"/docs/3.0/releasenotes/v1.2/release-1.2.3","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Release 1.2.3","language":"en"},"sidebar":"docs","previous":{"title":"Release 1.2.4","permalink":"/docs/3.0/releasenotes/v1.2/release-1.2.4"},"next":{"title":"Release 1.2.2","permalink":"/docs/3.0/releasenotes/v1.2/release-1.2.2"}}'),t=i("785893"),r=i("250065");let a={title:"Release 1.2.3",language:"en"},l="Improvement",o={},d=[{value:"JDBC Catalog",id:"jdbc-catalog",level:3},{value:"Elasticsearch Catalog",id:"elasticsearch-catalog",level:3},{value:"Hive Catalog",id:"hive-catalog",level:3},{value:"Dynamic Partition Improvement",id:"dynamic-partition-improvement",level:3},{value:"Optimize BE&#39;s Threading Model",id:"optimize-bes-threading-model",level:3}];function c(e){let n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"improvement",children:"Improvement"})}),"\n",(0,t.jsx)(n.h3,{id:"jdbc-catalog",children:"JDBC Catalog"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Support connecting to Doris clusters through JDBC Catalog."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Currently, Jdbc Catalog only support to use 5.x version of JDBC jar package to connect another Doris database. If you use 8.x version of JDBC jar package, the data type of column may not be matched."}),"\n",(0,t.jsxs)(n.p,{children:["Reference: ",(0,t.jsx)(n.a,{href:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/jdbc/#doris",children:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/jdbc/#doris"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Support to synchronize only the specified database through the ",(0,t.jsx)(n.code,{children:"only_specified_database"})," attribute."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Support synchronizing table names in the form of lowercase through ",(0,t.jsx)(n.code,{children:"lower_case_table_names"})," to solve the problem of case sensitivity of table names."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Reference: ",(0,t.jsx)(n.a,{href:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/jdbc",children:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/jdbc"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Optimize the read performance of JDBC Catalog."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"elasticsearch-catalog",children:"Elasticsearch Catalog"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Support Array type mapping."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Support whether to push down the like expression through the ",(0,t.jsx)(n.code,{children:"like_push_down"})," attribute to control the CPU overhead of the ES cluster."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Reference: ",(0,t.jsx)(n.a,{href:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/es",children:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/es"})]}),"\n",(0,t.jsx)(n.h3,{id:"hive-catalog",children:"Hive Catalog"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Support Hive table default partition ",(0,t.jsx)(n.code,{children:"_HIVE_DEFAULT_PARTITION_"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Hive Metastore metadata automatic synchronization supports notification event in compressed format."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"dynamic-partition-improvement",children:"Dynamic Partition Improvement"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Dynamic partition supports specifying the ",(0,t.jsx)(n.code,{children:"storage_medium"})," parameter to control the storage medium of the newly added partition."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Reference: ",(0,t.jsx)(n.a,{href:"https://doris.apache.org/docs/dev/advanced/partition/dynamic-partition",children:"https://doris.apache.org/docs/dev/advanced/partition/dynamic-partition"})]}),"\n",(0,t.jsx)(n.h3,{id:"optimize-bes-threading-model",children:"Optimize BE's Threading Model"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Optimize BE's threading model to avoid stability problems caused by frequent thread creation and destroy."}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"bugfix",children:"Bugfix"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fixed issues with Merge-On-Write Unique Key tables."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fixed compaction related issues."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fixed some delete statement issues causing data errors."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fixed several query execution errors."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fixed the problem of using JDBC catalog to cause BE crash on some operating system."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fixed Multi-Catalog issues."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fixed memory statistics and optimization issues."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fixed decimalV3 and date/datetimev2 related issues."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fixed load transaction stability issues."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fixed light-weight schema change issues."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Fixed the issue of using ",(0,t.jsx)(n.code,{children:"datetime"})," type for batch partition creation."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fixed the problem that a large number of failed broker loads would cause the FE memory usage to be too high."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fixed the problem that stream load cannot be canceled after dropping the table."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Fixed querying ",(0,t.jsx)(n.code,{children:"information_schema"})," timeout in some cases."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Fixed the problem of BE crash caused by concurrent data export using ",(0,t.jsx)(n.code,{children:"select outfile"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fixed transactional insert operation memory leak."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fixed several query/load profile issues, and supports direct download of profiles through FE web ui."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fixed the problem that the BE tablet GC thread caused the IO util to be too high."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fixed the problem that the commit offset is inaccurate in Kafka routine load."}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return a}});var s=i(667294);let t={},r=s.createContext(t);function a(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);