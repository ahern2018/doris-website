"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["108247"],{144154:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-statements/statistics/SHOW-ANALYZE","title":"SHOW ANALYZE","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/statistics/SHOW-ANALYZE.md","sourceDirName":"sql-manual/sql-statements/statistics","slug":"/sql-manual/sql-statements/statistics/SHOW-ANALYZE","permalink":"/docs/3.0/sql-manual/sql-statements/statistics/SHOW-ANALYZE","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW ANALYZE","language":"en"},"sidebar":"docs","previous":{"title":"KILL ANALYZE JOB","permalink":"/docs/3.0/sql-manual/sql-statements/statistics/KILL-ANALYZE-JOB"},"next":{"title":"ADD FOLLOWER","permalink":"/docs/3.0/sql-manual/sql-statements/cluster-management/instance-management/ADD-FOLLOWER"}}'),i=t("785893"),l=t("250065");let r={title:"SHOW ANALYZE",language:"en"},a=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"This statement is used to view the status of the statistics collection job."}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'SHOW [AUTO] ANALYZE [ <table_name> | <job_id> ]\n    [ WHERE STATE = {"PENDING" | "RUNNING" | "FINISHED" | "FAILED"} ];\n'})}),"\n",(0,i.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"None"})}),"\n",(0,i.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["1. ",(0,i.jsx)(n.code,{children:"AUTO"})]})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Show information about automatic jobs. If not specified, information about manual jobs will be displayed by default."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["2. ",(0,i.jsx)(n.code,{children:"<table_name>"})]})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Table name. After specifying it, you can view the job information corresponding to this table. When not specified, the job information of all tables will be returned by default."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["3. ",(0,i.jsx)(n.code,{children:"<job_id>"})]})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Statistics Job ID\uFF0CObtained when performing asynchronous collection with ANALYZE. When the ID is not specified, this command returns information about all jobs."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["4. ",(0,i.jsx)(n.code,{children:'WHERE STATE = {"PENDING" | "RUNNING" | "FINISHED" | "FAILED"}'})]})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Filter conditions of job state. If not specified, information about jobs in all states will be displayed by default."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Column"}),(0,i.jsx)(n.th,{children:"Note"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"job_id"}),(0,i.jsx)(n.td,{children:"Unique statistics job id"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"catalog_name"}),(0,i.jsx)(n.td,{children:"Catalog name"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"db_name"}),(0,i.jsx)(n.td,{children:"database name"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tbl_name"}),(0,i.jsx)(n.td,{children:"table name"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"col_name"}),(0,i.jsx)(n.td,{children:"column name list"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"job_type"}),(0,i.jsx)(n.td,{children:"job type"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"analysis_type"}),(0,i.jsx)(n.td,{children:"analysis type"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"message"}),(0,i.jsx)(n.td,{children:"error message"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"last_exec_time_in_ms"}),(0,i.jsx)(n.td,{children:"last analyze time"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"state"}),(0,i.jsx)(n.td,{children:"job state"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"progress"}),(0,i.jsx)(n.td,{children:"job progress"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"schedule_type"}),(0,i.jsx)(n.td,{children:"schedule type"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"start_time"}),(0,i.jsx)(n.td,{children:"job start time"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"end_time"}),(0,i.jsx)(n.td,{children:"job end time"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"priority"}),(0,i.jsx)(n.td,{children:"job priority"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"enable_partition"}),(0,i.jsx)(n.td,{children:"enable partition collection flag"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,i.jsx)(n.p,{children:"The user who executes this SQL must have at least the following permissions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Privilege"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Object"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"SELECT_PRIV"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Table"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"When executing SHOW, the SELECT_PRIV privilege for the queried table is required."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Show jobs by table name."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'SHOW ANALYZE test1 WHERE STATE="FINISHED";\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+---------------+--------------+---------+----------+-----------------------+----------+---------------+---------+----------------------+----------+-------------------------------------------------------+---------------+---------------------+---------------------+----------+------------------+\n| job_id        | catalog_name | db_name | tbl_name | col_name              | job_type | analysis_type | message | last_exec_time_in_ms | state    | progress                                              | schedule_type | start_time          | end_time            | priority | enable_partition |\n+---------------+--------------+---------+----------+-----------------------+----------+---------------+---------+----------------------+----------+-------------------------------------------------------+---------------+---------------------+---------------------+----------+------------------+\n| 1737454119144 | internal     | test    | test1    | [test1:name,test1:id] | MANUAL   | FUNDAMENTALS  |         | 2025-01-21 18:10:11  | FINISHED | 2 Finished  |  0 Failed  |  0 In Progress  |  2 Total | ONCE          | 2025-01-21 18:10:10 | 2025-01-21 18:10:11 | MANUAL   | false            |\n| 1738725887879 | internal     | test    | test1    | [test1:name,test1:id] | MANUAL   | FUNDAMENTALS  |         | 2025-02-05 11:26:15  | FINISHED | 2 Finished  |  0 Failed  |  0 In Progress  |  2 Total | ONCE          | 2025-02-05 11:26:15 | 2025-02-05 11:26:15 | MANUAL   | false            |\n| 1738725887890 | internal     | test    | test1    | [test1:name,test1:id] | MANUAL   | FUNDAMENTALS  |         | 2025-02-05 12:17:09  | FINISHED | 2 Finished  |  0 Failed  |  0 In Progress  |  2 Total | ONCE          | 2025-02-05 12:17:08 | 2025-02-05 12:17:09 | MANUAL   | false            |\n| 1738725887895 | internal     | test    | test1    | [test1:id]            | MANUAL   | FUNDAMENTALS  |         | 2025-02-05 12:17:24  | FINISHED | 1 Finished  |  0 Failed  |  0 In Progress  |  1 Total | ONCE          | 2025-02-05 12:17:23 | 2025-02-05 12:17:24 | MANUAL   | false            |\n| 1738725887903 | internal     | test    | test1    | [test1:id]            | MANUAL   | FUNDAMENTALS  |         | 2025-02-05 12:17:42  | FINISHED | 1 Finished  |  0 Failed  |  0 In Progress  |  1 Total | ONCE          | 2025-02-05 12:17:41 | 2025-02-05 12:17:42 | MANUAL   | false            |\n+---------------+--------------+---------+----------+-----------------------+----------+---------------+---------+----------------------+----------+-------------------------------------------------------+---------------+---------------------+---------------------+----------+------------------+\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Show job by job id."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"show analyze 1738725887903;\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+---------------+--------------+---------+----------+------------+----------+---------------+---------+----------------------+----------+-------------------------------------------------------+---------------+---------------------+---------------------+----------+------------------+\n| job_id        | catalog_name | db_name | tbl_name | col_name   | job_type | analysis_type | message | last_exec_time_in_ms | state    | progress                                              | schedule_type | start_time          | end_time            | priority | enable_partition |\n+---------------+--------------+---------+----------+------------+----------+---------------+---------+----------------------+----------+-------------------------------------------------------+---------------+---------------------+---------------------+----------+------------------+\n| 1738725887903 | internal     | test    | test1    | [test1:id] | MANUAL   | FUNDAMENTALS  |         | 2025-02-05 12:17:42  | FINISHED | 1 Finished  |  0 Failed  |  0 In Progress  |  1 Total | ONCE          | 2025-02-05 12:17:41 | 2025-02-05 12:17:42 | MANUAL   | false            |\n+---------------+--------------+---------+----------+------------+----------+---------------+---------+----------------------+----------+-------------------------------------------------------+---------------+---------------------+---------------------+----------+------------------+\n"})})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var s=t(667294);let i={},l=s.createContext(i);function r(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);