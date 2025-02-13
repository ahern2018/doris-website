"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["405039"],{50228:function(e,n,a){a.r(n),a.d(n,{metadata:()=>i,contentTitle:()=>o,default:()=>u,assets:()=>l,toc:()=>c,frontMatter:()=>s});var i=JSON.parse('{"id":"admin-manual/data-admin/overview","title":"Disaster Recovery Management Overview","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/admin-manual/data-admin/overview.md","sourceDirName":"admin-manual/data-admin","slug":"/admin-manual/data-admin/overview","permalink":"/docs/3.0/admin-manual/data-admin/overview","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Disaster Recovery Management Overview","language":"en"},"sidebar":"docs","previous":{"title":"Job Scheduler","permalink":"/docs/3.0/admin-manual/workload-management/job-scheduler"},"next":{"title":"Backup and Restore Overview","permalink":"/docs/3.0/admin-manual/data-admin/backup-restore/overview"}}'),r=a("785893"),t=a("250065");let s={title:"Disaster Recovery Management Overview",language:"en"},o=void 0,l={},c=[{value:"1. Cross-Cluster Data Synchronization",id:"1-cross-cluster-data-synchronization",level:2},{value:"Key Features:",id:"key-features",level:3},{value:"Application Scenario Example:",id:"application-scenario-example",level:3},{value:"2. Backup and Recovery",id:"2-backup-and-recovery",level:2},{value:"Key Features:",id:"key-features-1",level:3},{value:"Application Scenario Example:",id:"application-scenario-example-1",level:3},{value:"3. Recycle Bin Recovery",id:"3-recycle-bin-recovery",level:2},{value:"Key Features:",id:"key-features-2",level:3},{value:"Application Scenario Example:",id:"application-scenario-example-2",level:3}];function d(e){let n={h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Doris provides disaster recovery capabilities, helping users effectively respond to data loss issues caused by hardware failures, software errors, or human mistakes through three main functions: cross-cluster data synchronization, backup and recovery, and recycle bin recovery, ensuring high availability and reliability of data."}),"\n",(0,r.jsx)(n.h2,{id:"1-cross-cluster-data-synchronization",children:"1. Cross-Cluster Data Synchronization"}),"\n",(0,r.jsx)(n.p,{children:"Doris's cross-cluster data synchronization feature supports real-time data replication between different Doris clusters, ensuring that important data is distributed across multiple physically isolated clusters, achieving regional disaster recovery."}),"\n",(0,r.jsx)(n.h3,{id:"key-features",children:"Key Features:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Real-time Synchronization"}),": Supports full and incremental synchronization. Full synchronization replicates all data in the initial phase; incremental synchronization continuously captures and synchronizes data changes, including data (addition, modification, deletion) and table structure changes (DDL)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Data Consistency"}),": Records data changes through a logging mechanism (such as Binlog), ensuring that the target cluster's data is completely consistent with the source cluster's data."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Regional Disaster Recovery"}),": Supports synchronization between clusters in different geographical locations, allowing other clusters to quickly take over business when one cluster fails."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Multi-Scenario Applications"}),": Suitable for disaster recovery backups, business separation (such as read-write separation), active-active clusters, and other scenarios."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"application-scenario-example",children:"Application Scenario Example:"}),"\n",(0,r.jsx)(n.p,{children:"A company has deployed two Doris clusters in different cities, with Cluster A as the primary cluster and Cluster B as the backup cluster. Through cross-cluster data synchronization, when Cluster A is interrupted due to a natural disaster, Cluster B can take over the business, minimizing downtime."}),"\n",(0,r.jsx)(n.h2,{id:"2-backup-and-recovery",children:"2. Backup and Recovery"}),"\n",(0,r.jsx)(n.p,{children:"Doris provides backup and recovery functions to regularly save data snapshots, preventing data loss due to unexpected events."}),"\n",(0,r.jsx)(n.h3,{id:"key-features-1",children:"Key Features:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Backup"}),": Supports full backups of specified databases, tables, or partitions, saving complete data snapshots."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Recovery"}),": Supports recovery of databases, tables, or partitions from snapshots."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"application-scenario-example-1",children:"Application Scenario Example:"}),"\n",(0,r.jsx)(n.p,{children:"A company regularly backs up data and stores backup files in object storage services (such as Amazon S3). When an important table is accidentally deleted, the backup function quickly restores the lost data, ensuring normal business operations."}),"\n",(0,r.jsx)(n.h2,{id:"3-recycle-bin-recovery",children:"3. Recycle Bin Recovery"}),"\n",(0,r.jsx)(n.p,{children:"Doris provides a recycle bin feature, offering users a quick way to recover recently deleted data, reducing the impact of operational errors."}),"\n",(0,r.jsx)(n.h3,{id:"key-features-2",children:"Key Features:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Temporary Deletion"}),": Tables or databases that are deleted are first moved to the recycle bin instead of being permanently deleted immediately."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Retention Period"}),": Deleted data is retained in the recycle bin for a configurable period, during which users can choose to recover it."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Quick Recovery"}),": Data can be easily retrieved from the recycle bin without needing a complete backup recovery."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Data Security"}),": If recovery is not needed, data in the recycle bin will be automatically cleared after the retention period."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"application-scenario-example-2",children:"Application Scenario Example:"}),"\n",(0,r.jsx)(n.p,{children:"A team accidentally deleted an important table during routine operations. Using the recycle bin feature, they quickly recovered the deleted data, avoiding a complex backup recovery process while ensuring business continuity."})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return o},a:function(){return s}});var i=a(667294);let r={},t=i.createContext(r);function s(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);