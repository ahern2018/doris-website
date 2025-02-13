"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["18095"],{324212:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>d,default:()=>u,assets:()=>s,toc:()=>l,frontMatter:()=>o});var i=JSON.parse('{"id":"data-operate/update/update-overview","title":"Updating Overview","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/data-operate/update/update-overview.md","sourceDirName":"data-operate/update","slug":"/data-operate/update/update-overview","permalink":"/docs/data-operate/update/update-overview","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Updating Overview","language":"en"},"sidebar":"docs","previous":{"title":"High Concurrency LOAD Optimization(Group Commit)","permalink":"/docs/data-operate/import/group-commit-manual"},"next":{"title":"Updating Data with UPDATE Command","permalink":"/docs/data-operate/update/unique-update"}}'),r=n("785893"),a=n("250065");let o={title:"Updating Overview",language:"en"},d=void 0,s={},l=[{value:"Comparison of Update Capabilities for Different Models/Implementations",id:"comparison-of-update-capabilities-for-different-modelsimplementations",level:2},{value:"Performance Comparison",id:"performance-comparison",level:3},{value:"Supported Feature Comparison",id:"supported-feature-comparison",level:3},{value:"Updates in the Primary Key (Unique) Model",id:"updates-in-the-primary-key-unique-model",level:2},{value:"Two Update Methods for the Primary Key Model",id:"two-update-methods-for-the-primary-key-model",level:3},{value:"Updating with the <code>UPDATE</code> Statement",id:"updating-with-the-update-statement",level:4},{value:"Update during Data Loading",id:"update-during-data-loading",level:4},{value:"Concurrency Control for Updates in the Primary Key Model",id:"concurrency-control-for-updates-in-the-primary-key-model",level:3},{value:"Updating Data with the <code>UPDATE</code> Statement",id:"updating-data-with-the-update-statement",level:4},{value:"Batch Updates Based on Data Loading",id:"batch-updates-based-on-data-loading",level:4},{value:"Updates in the Aggregate Model",id:"updates-in-the-aggregate-model",level:2},{value:"Recommendations for Choosing Between Primary Key and Aggregate Models",id:"recommendations-for-choosing-between-primary-key-and-aggregate-models",level:2}];function c(e){let t={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Data update refers to modifying the value columns in data records with the same key. The approach to handling data updates varies depending on the data model:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Primary Key (Unique) Model"}),": This model is designed specifically for data updates. Doris supports two storage implementations: Merge-on-Read (MoR) and Merge-on-Write (MoW). MoR optimizes write performance, while MoW enhances analytical performance. From Doris version 2.1, MoW is the default storage implementation. The primary key model supports the ",(0,r.jsx)(t.code,{children:"UPDATE"}),' statement for small data updates and batch updates through data loading methods such as Stream Load, Broker Load, Routine Load, and Insert Into, all following "UPSERT" semantics. This means if the record does not exist, it is inserted; if it exists, it is updated. Both whole row updates (default) and partial column updates are supported.']}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Aggregate Model"}),": In this model, data updates are a special use case. When the aggregate function is set to REPLACE or REPLACE_IF_NOT_NULL, data updates can be performed. The aggregate model supports updates only through data loading and does not support the ",(0,r.jsx)(t.code,{children:"UPDATE"})," statement. By setting the aggregate function to REPLACE_IF_NOT_NULL, partial column updates can be achieved."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Understanding the data update methods for different models helps in selecting the appropriate update strategy to meet specific business needs."}),"\n",(0,r.jsx)(t.h2,{id:"comparison-of-update-capabilities-for-different-modelsimplementations",children:"Comparison of Update Capabilities for Different Models/Implementations"}),"\n",(0,r.jsx)(t.h3,{id:"performance-comparison",children:"Performance Comparison"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Unique Key MoW"}),(0,r.jsx)(t.th,{children:"Unique Key MoR"}),(0,r.jsx)(t.th,{children:"Aggregate Key"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Loading Speed"}),(0,r.jsx)(t.td,{children:"Deduplication during data loading, small batch real-time writes have about 10%-20% performance loss compared to MoR, large batch data loading (e.g., tens of millions/billions of data) have about 30%-50% performance loss compared to MoR"}),(0,r.jsx)(t.td,{children:"Similar to Duplicate Key"}),(0,r.jsx)(t.td,{children:"Similar to Duplicate Key"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Query Speed"}),(0,r.jsx)(t.td,{children:"Similar to Duplicate Key"}),(0,r.jsx)(t.td,{children:"Deduplication during query, query time is about 3-10 times that of MoW"}),(0,r.jsx)(t.td,{children:"If the aggregate function is REPLACE/REPLACE_IF_NOT_NULL, query speed is similar to MoR"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Predicate Pushdown"}),(0,r.jsx)(t.td,{children:"Supported"}),(0,r.jsx)(t.td,{children:"Not supported"}),(0,r.jsx)(t.td,{children:"Not supported"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Resource Consumption"}),(0,r.jsxs)(t.td,{children:["- ",(0,r.jsx)(t.strong,{children:"Loading Resource Consumption"}),": Compared to Duplicate Key/Unique Key MoR, about 10%-30% additional CPU consumption.",(0,r.jsx)(t.br,{}),(0,r.jsx)(t.br,{})," - ",(0,r.jsx)(t.strong,{children:"Query Resource Consumption"}),": Similar to Duplicate Key, no additional resource consumption.",(0,r.jsx)(t.br,{}),(0,r.jsx)(t.br,{})," - ",(0,r.jsx)(t.strong,{children:"Compaction Resource Consumption"}),": Consumes more memory and CPU compared to Duplicate Key, depending on data characteristics and volume."]}),(0,r.jsxs)(t.td,{children:["- ",(0,r.jsx)(t.strong,{children:"Loading Resource Consumption"}),": Similar to Duplicate Key, no additional resource consumption.",(0,r.jsx)(t.br,{}),(0,r.jsx)(t.br,{})," - ",(0,r.jsx)(t.strong,{children:"Query Resource Consumption"}),": Consumes more CPU and memory during query compared to Duplicate Key/Unique Key MoW.",(0,r.jsx)(t.br,{}),(0,r.jsx)(t.br,{})," - ",(0,r.jsx)(t.strong,{children:"Compaction Resource Consumption"}),": Consumes more memory and CPU compared to Duplicate Key, depending on data characteristics and volume."]}),(0,r.jsx)(t.td,{children:"Similar to Unique Key MoR"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"supported-feature-comparison",children:"Supported Feature Comparison"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Unique Key MoW"}),(0,r.jsx)(t.th,{children:"Unique Key MoR"}),(0,r.jsx)(t.th,{children:"Aggregate Key"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"UPDATE"}),(0,r.jsx)(t.td,{children:"Supported"}),(0,r.jsx)(t.td,{children:"Supported"}),(0,r.jsx)(t.td,{children:"Not supported"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DELETE"}),(0,r.jsx)(t.td,{children:"Supported"}),(0,r.jsx)(t.td,{children:"Supported"}),(0,r.jsx)(t.td,{children:"Not supported"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Sequence Column"}),(0,r.jsx)(t.td,{children:"Supported"}),(0,r.jsx)(t.td,{children:"Supported"}),(0,r.jsx)(t.td,{children:"Not supported"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Delete Sign"}),(0,r.jsx)(t.td,{children:"Supported"}),(0,r.jsx)(t.td,{children:"Supported"}),(0,r.jsx)(t.td,{children:"Not supported"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Partial Column Update"}),(0,r.jsx)(t.td,{children:"Supported"}),(0,r.jsx)(t.td,{children:"Not supported"}),(0,r.jsx)(t.td,{children:"Supported (but cannot update null values)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Inverted Index"}),(0,r.jsx)(t.td,{children:"Supported"}),(0,r.jsx)(t.td,{children:"Not supported"}),(0,r.jsx)(t.td,{children:"Not supported"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"updates-in-the-primary-key-unique-model",children:"Updates in the Primary Key (Unique) Model"}),"\n",(0,r.jsx)(t.p,{children:"Starting from Doris 2.0, the primary key (unique) model introduces the Merge-on-Write (MoW) storage implementation in addition to the original Merge-on-Read (MoR). MoR is optimized for write performance, while MoW is optimized for faster analytical performance. In practical tests, the analytical performance of typical tables using the MoW storage implementation can be 5-10 times that of the MoR implementation."}),"\n",(0,r.jsx)(t.p,{children:'In Doris 2.0, the default unique model created is still MoR. To create a MoW table, you need to manually specify it with the parameter "enable_unique_key_merge_on_write" = "true", as shown in the example below:'}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:'CREATE TABLE IF NOT EXISTS example_tbl_unique_merge_on_write\n(\n  `user_id` LARGEINT NOT NULL,\n  `username` VARCHAR(50) NOT NULL ,\n  `city` VARCHAR(20),\n  `age` SMALLINT,\n  `sex` TINYINT,\n  `phone` LARGEINT,\n  `address` VARCHAR(500),\n  `register_time` DATETIME\n)\nUNIQUE KEY(`user_id`, `username`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 1\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1",\n"enable_unique_key_merge_on_write" = "true"\n);\n'})}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsx)(t.p,{children:"From Doris version 2.1, MoW is the default implementation for the primary key model. Therefore, if using Doris version 2.1 and above, be sure to read the relevant table creation documentation."})}),"\n",(0,r.jsx)(t.h3,{id:"two-update-methods-for-the-primary-key-model",children:"Two Update Methods for the Primary Key Model"}),"\n",(0,r.jsxs)(t.h4,{id:"updating-with-the-update-statement",children:["Updating with the ",(0,r.jsx)(t.code,{children:"UPDATE"})," Statement"]}),"\n",(0,r.jsx)(t.p,{children:"Whether using MoR or MoW, the semantics are to complete the update of the specified columns. The time taken for a single UPDATE increases with the amount of data being updated."}),"\n",(0,r.jsx)(t.h4,{id:"update-during-data-loading",children:"Update during Data Loading"}),"\n",(0,r.jsx)(t.p,{children:'Doris supports multiple data loading methods, including Stream Load, Broker Load, Routine Load, and Insert Into. For primary key tables, all loading operations use the "UPSERT" semantics by default: if the record with the same primary key does not exist, an insert operation is performed; if the record exists, an update operation is performed. Update methods include whole row updates and partial column updates:'}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Whole Row Update"}),": The default update method for Unique Key tables is whole row update. When loading data, users can choose to provide all fields or only some fields. If users only provide some fields, Doris will fill in the missing fields with default values, generate a complete record, and perform the update."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Partial Column Update"}),": Unique Key MoW supports partial column updates. Users can enable this feature by setting the session variable ",(0,r.jsx)(t.code,{children:"enable_unique_key_partial_update = true"})," or specifying ",(0,r.jsx)(t.code,{children:"partial_columns:true"})," in the HTTP Header. Once enabled, if the primary key of the loaded data already exists, only the specified fields will be updated; if the primary key does not exist, the missing fields will be filled with default values."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["We will introduce the two update methods in detail in the documents ",(0,r.jsx)(t.a,{href:"../update/unique-update",children:"Update of Primary Key Model"})," and ",(0,r.jsx)(t.a,{href:"../update/update-of-unique-model",children:"Load Update of Primary Key Model"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"concurrency-control-for-updates-in-the-primary-key-model",children:"Concurrency Control for Updates in the Primary Key Model"}),"\n",(0,r.jsxs)(t.h4,{id:"updating-data-with-the-update-statement",children:["Updating Data with the ",(0,r.jsx)(t.code,{children:"UPDATE"})," Statement"]}),"\n",(0,r.jsxs)(t.p,{children:["By default, Doris does not allow multiple ",(0,r.jsx)(t.code,{children:"UPDATE"})," operations on the same table at the same time. The ",(0,r.jsx)(t.code,{children:"UPDATE"})," statement ensures isolation through table-level locks."]}),"\n",(0,r.jsxs)(t.p,{children:["Users can adjust the concurrency limit by modifying the FE configuration ",(0,r.jsx)(t.code,{children:"enable_concurrent_update=true"}),". When the concurrency limit is relaxed, if multiple ",(0,r.jsx)(t.code,{children:"UPDATE"})," statements update the same row of data, the result will be undefined."]}),"\n",(0,r.jsx)(t.h4,{id:"batch-updates-based-on-data-loading",children:"Batch Updates Based on Data Loading"}),"\n",(0,r.jsx)(t.p,{children:"Doris provides atomicity guarantees for all loading update operations, meaning that each load job is either fully applied or fully rolled back."}),"\n",(0,r.jsx)(t.p,{children:"For concurrent load updates, Doris uses internal version control (assigned in the order of load completion) and the MVCC mechanism to determine the order of concurrent updates."}),"\n",(0,r.jsx)(t.p,{children:"Since the submission order of multiple concurrent loading may be unpredictable, if these concurrent loading involve updates to the same primary key, the effective order will also be unpredictable, resulting in uncertainty in the final visible result. To solve this problem, Doris provides a sequence column mechanism, allowing users to specify a version for each row of data during concurrent load updates to clearly control the order of concurrent updates and achieve determinism."}),"\n",(0,r.jsxs)(t.p,{children:["We will introduce the concurrency control mechanism for updates in detail in the document ",(0,r.jsx)(t.a,{href:"/docs/data-operate/update/unique-update-concurrent-control",children:"Concurrency Control for Updates in the Primary Key Model"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"updates-in-the-aggregate-model",children:"Updates in the Aggregate Model"}),"\n",(0,r.jsx)(t.p,{children:"Updates in the aggregate model mainly refer to producing new aggregate values using new column values and old aggregate values according to the requirements of the aggregate function."}),"\n",(0,r.jsx)(t.p,{children:"New Agg Value = Agg Func (Old Agg Value, New Column Value)"}),"\n",(0,r.jsxs)(t.p,{children:["The aggregate model only supports updates based on load methods and does not support updates using the ",(0,r.jsx)(t.code,{children:"UPDATE"})," statement. When defining an aggregate model table, if the aggregate function of the value column is defined as REPLACE_IF_NOT_NULL, it can indirectly achieve the ability to update partial columns similar to the primary key table. For more information, please refer to ",(0,r.jsx)(t.a,{href:"../update/update-of-aggregate-model",children:"Load Update of Aggregate Model"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"recommendations-for-choosing-between-primary-key-and-aggregate-models",children:"Recommendations for Choosing Between Primary Key and Aggregate Models"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["For most scenarios with data update requirements, it is recommended to ",(0,r.jsx)(t.strong,{children:"prefer the primary key model"}),". For example, synchronizing from TP databases to Doris, user profiling, audience selection, etc."]}),"\n",(0,r.jsxs)(t.li,{children:["The following two scenarios are recommended to use the aggregate model:\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Some fields need to be aggregated as metrics, and some fields need to be updated."}),"\n",(0,r.jsx)(t.li,{children:"For scenarios with partial column update requirements, high sensitivity to write performance, and low query latency requirements, it is recommended to use the aggregate table + REPLACE_IF_NOT_NULL aggregate function."}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return o}});var i=n(667294);let r={},a=i.createContext(r);function o(e){let t=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);