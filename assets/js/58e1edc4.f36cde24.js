"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["644575"],{173379:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>h,assets:()=>a,toc:()=>o,frontMatter:()=>d});var s=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/backup-and-restore/SHOW-RESTORE","title":"SHOW RESTORE","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/data-modification/backup-and-restore/SHOW-RESTORE.md","sourceDirName":"sql-manual/sql-statements/data-modification/backup-and-restore","slug":"/sql-manual/sql-statements/data-modification/backup-and-restore/SHOW-RESTORE","permalink":"/docs/sql-manual/sql-statements/data-modification/backup-and-restore/SHOW-RESTORE","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SHOW RESTORE","language":"en"},"sidebar":"docs","previous":{"title":"RESTORE","permalink":"/docs/sql-manual/sql-statements/data-modification/backup-and-restore/RESTORE"},"next":{"title":"CANCEL RESTORE","permalink":"/docs/sql-manual/sql-statements/data-modification/backup-and-restore/CANCEL-RESTORE"}}'),i=t("785893"),r=t("250065");let d={title:"SHOW RESTORE",language:"en"},l=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function c(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"This statement is used to view RESTORE tasks"}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"SHOW [BRIEF] RESTORE [FROM <db_name>]\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["1.",(0,i.jsx)(n.code,{children:"<db_name>"})]})}),"\n",(0,i.jsx)(n.p,{children:"The name of the database to which the recovery task belongs."}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"brief: only show key information of RESTORE tasks, columns RestoreObjs, Progress, TaskErrMsg will not show"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Column"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"JobId"}),(0,i.jsx)(n.td,{children:"Unique job id"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Label"}),(0,i.jsx)(n.td,{children:"The name of the backup to restore"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Timestamp"}),(0,i.jsx)(n.td,{children:"The time version of the backup to restore"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"DbName"}),(0,i.jsx)(n.td,{children:"belongs to the database"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"State"}),(0,i.jsxs)(n.td,{children:["current stage: ",(0,i.jsxs)(n.ul,{children:[(0,i.jsx)(n.li,{children:"PENDING: The initial state after submitting the job."}),(0,i.jsx)(n.li,{children:"SNAPSHOTING: Executing snapshot."}),(0,i.jsx)(n.li,{children:"DOWNLOAD: The snapshot is complete, ready to download the snapshot in the repository."}),(0,i.jsx)(n.li,{children:"DOWNLOADING: Snapshot downloading."}),(0,i.jsx)(n.li,{children:"COMMIT: Snapshot download is complete, ready to take effect."}),(0,i.jsx)(n.li,{children:"COMMITTING: in effect."}),(0,i.jsx)(n.li,{children:"FINISHED: Job finish time."}),(0,i.jsx)(n.li,{children:"CANCELLED: Job failed."})]})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"AllowLoad"}),(0,i.jsx)(n.td,{children:"Whether to allow import when restoring (currently not supported)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ReplicationNum"}),(0,i.jsx)(n.td,{children:"Specifies the number of replicas to restore"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ReserveReplica"}),(0,i.jsx)(n.td,{children:"Whether to keep a copy"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ReplicaAllocation"}),(0,i.jsx)(n.td,{children:"Whether to keep dynamic partitioning enabled"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"RestoreJobs"}),(0,i.jsx)(n.td,{children:"Tables and partitions to restore"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"CreateTime"}),(0,i.jsx)(n.td,{children:"task submission time"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"MetaPreparedTime"}),(0,i.jsx)(n.td,{children:"Metadata preparation completion time"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"SnapshotFinishedTime"}),(0,i.jsx)(n.td,{children:"Snapshot completion time"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"DownloadFinishedTime"}),(0,i.jsx)(n.td,{children:"Snapshot download completion time"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"FinishedTime"}),(0,i.jsx)(n.td,{children:"Job finish time"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"UnfinishedTasks"}),(0,i.jsx)(n.td,{children:"Displays unfinished subtask ids during SNAPSHOTING, DOWNLOADING and COMMITING stages"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Progress"}),(0,i.jsx)(n.td,{children:"Task progress"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"TaskErrMsg"}),(0,i.jsx)(n.td,{children:"Display task error messages"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Status"}),(0,i.jsx)(n.td,{children:"If the job fails, display the failure message"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Timeout"}),(0,i.jsx)(n.td,{children:"Job timeout, in seconds"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"View the latest RESTORE task under example_db."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SHOW RESTORE FROM example_db;\n"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var s=t(667294);let i={},r=s.createContext(i);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);