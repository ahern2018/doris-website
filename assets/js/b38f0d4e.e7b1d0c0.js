"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["47406"],{137695:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>r});var t=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/table/SHOW-ALTER-TABLE","title":"SHOW ALTER","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/table-and-view/table/SHOW-ALTER-TABLE.md","sourceDirName":"sql-manual/sql-statements/table-and-view/table","slug":"/sql-manual/sql-statements/table-and-view/table/SHOW-ALTER-TABLE","permalink":"/docs/dev/sql-manual/sql-statements/table-and-view/table/SHOW-ALTER-TABLE","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SHOW ALTER","language":"en"},"sidebar":"docs","previous":{"title":"CANCEL-ALTER-TABLE","permalink":"/docs/dev/sql-manual/sql-statements/table-and-view/table/CANCEL-ALTER-TABLE"},"next":{"title":"TRUNCATE-TABLE","permalink":"/docs/dev/sql-manual/sql-statements/table-and-view/table/TRUNCATE-TABLE"}}'),i=s("785893"),l=s("250065");let r={title:"SHOW ALTER",language:"en"},d=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Result",id:"result",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practices",id:"best-practices",level:2}];function o(e){let n={code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"This statement is used to display the execution status of various ongoing modification tasks."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SHOW ALTER [TABLE [COLUMN | ROLLUP] [FROM db_name]];\n"})}),"\n",(0,i.jsx)(n.p,{children:"Notes:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"TABLE COLUMN: Displays ALTER tasks for modifying columns."}),"\n",(0,i.jsx)(n.li,{children:"Supported syntax: [WHERE TableName|CreateTime|FinishTime|State] [ORDER BY] [LIMIT]."}),"\n",(0,i.jsx)(n.li,{children:"TABLE ROLLUP: Displays tasks for creating or deleting ROLLUP."}),"\n",(0,i.jsx)(n.li,{children:"If db_name is not specified, the current default database is used."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"result",children:"Result"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"SHOW ALTER TABLE COLUMN"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"JobId"}),(0,i.jsx)(n.td,{children:"Unique ID for each Schema Change job."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"TableName"}),(0,i.jsx)(n.td,{children:"The name of the base table corresponding to the Schema Change."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"CreateTime"}),(0,i.jsx)(n.td,{children:"Job creation time."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"FinishedTime"}),(0,i.jsx)(n.td,{children:'Job completion time. If not completed, shows "N/A".'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"IndexName"}),(0,i.jsx)(n.td,{children:"The name of a base table/synchronized materialized view involved in this modification."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"IndexId"}),(0,i.jsx)(n.td,{children:"ID of the new base table/synchronized materialized view."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"OriginIndexId"}),(0,i.jsx)(n.td,{children:"ID of a base table/synchronized materialized view involved in this modification."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"SchemaVersion"}),(0,i.jsx)(n.td,{children:"Displays in M:N format. M represents the version of the Schema Change, and N represents the corresponding hash value. Each Schema Change increments the version."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"TransactionId"}),(0,i.jsx)(n.td,{children:"Transaction ID for converting historical data."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"State"}),(0,i.jsx)(n.td,{children:"The phase of the job."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"- PENDING: The job is waiting to be scheduled in the queue."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"- WAITING_TXN: Waiting for import tasks before the boundary transaction ID to complete."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"- RUNNING: Currently performing historical data conversion."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"- FINISHED: The job has successfully completed."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"- CANCELLED: The job has failed."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Msg"}),(0,i.jsx)(n.td,{children:"If the job fails, displays the failure message."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Progress"}),(0,i.jsx)(n.td,{children:"Job progress. Only displayed in RUNNING state. Progress is shown in M/N format. N is the total number of replicas involved in the Schema Change. M is the number of replicas for which historical data conversion has been completed."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Timeout"}),(0,i.jsx)(n.td,{children:"Job timeout in seconds."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Display the execution status of all modification column tasks for the default database."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SHOW ALTER TABLE COLUMN;\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Display the execution status of the most recent modification column task for a specific table."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'SHOW ALTER TABLE COLUMN WHERE TableName = "table1" ORDER BY CreateTime DESC LIMIT 1;\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Display the execution status of creating or deleting ROLLUP tasks for a specified database."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SHOW ALTER TABLE ROLLUP FROM example_db;\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"SHOW, ALTER\n"})}),"\n",(0,i.jsx)(n.h2,{id:"best-practices",children:"Best Practices"})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return r}});var t=s(667294);let i={},l=t.createContext(i);function r(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);