"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["270920"],{685537:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>o,assets:()=>d,toc:()=>c,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-REPLICA-STATUS","title":"SHOW REPLICA STATUS","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-REPLICA-STATUS.md","sourceDirName":"sql-manual/sql-statements/table-and-view/data-and-status-management","slug":"/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-REPLICA-STATUS","permalink":"/docs/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-REPLICA-STATUS","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SHOW REPLICA STATUS","language":"en"},"sidebar":"docs","previous":{"title":"ADMIN SET REPLICA VERSION","permalink":"/docs/sql-manual/sql-statements/table-and-view/data-and-status-management/ADMIN-SET-REPLICA-VERSION"},"next":{"title":"SHOW REPLICA DISTRIBUTION","permalink":"/docs/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-REPLICA-DISTRIBUTION"}}'),i=t("785893"),r=t("250065");let a={title:"SHOW REPLICA STATUS",language:"en"},l=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Examples",id:"examples",level:2}];function h(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"This statement is used to display the replica status information for a table or partition."}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SHOW REPLICA STATUS FROM [ <database_name>.]<table_name> [<partition_list>] \n[where_clause]\n"})}),"\n",(0,i.jsx)(n.p,{children:"Where:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"partition_list\n  : PARTITION (<partition_name>[ , ... ])\n"})}),"\n",(0,i.jsx)(n.p,{children:"Where:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"where_clause\n: WHERE <output_column_name> = <value>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["1. ",(0,i.jsx)(n.code,{children:"<table_name>"})]})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"The identifier (i.e., name) of the table, which must be unique within the database (Database)."}),"\n",(0,i.jsx)(n.p,{children:"The identifier must start with a letter character (or any character from supported languages if Unicode name support is enabled), and cannot contain spaces or special characters unless the entire identifier string is enclosed in backticks (e.g., My Object)."}),"\n",(0,i.jsx)(n.p,{children:"Identifiers cannot use reserved keywords."}),"\n",(0,i.jsx)(n.p,{children:"For more details, refer to the identifier requirements and reserved keywords."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["1. ",(0,i.jsx)(n.code,{children:"<db_name>"})]})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"The identifier (i.e., name) of the database, which must be unique within the cluster (Cluster)."}),"\n",(0,i.jsx)(n.p,{children:"The identifier must start with a letter character (or any character from supported languages if Unicode name support is enabled), and cannot contain spaces or special characters unless the entire identifier string is enclosed in backticks (e.g., My Object)."}),"\n",(0,i.jsx)(n.p,{children:"Identifiers cannot use reserved keywords."}),"\n",(0,i.jsx)(n.p,{children:"For more details, refer to the identifier requirements and reserved keywords."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["2. ",(0,i.jsx)(n.code,{children:"<partition_list>"})]})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"A comma-separated list of partition identifiers (i.e., names), which must be unique within the table (Table)."}),"\n",(0,i.jsx)(n.p,{children:"The identifier must start with a letter character (or any character from supported languages if Unicode name support is enabled), and cannot contain spaces or special characters unless the entire identifier string is enclosed in backticks (e.g., My Object)."}),"\n",(0,i.jsx)(n.p,{children:"Identifiers cannot use reserved keywords."}),"\n",(0,i.jsx)(n.p,{children:"For more details, refer to the identifier requirements and reserved keywords."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["3. ",(0,i.jsx)(n.code,{children:"WHERE <output_column_name> = <value>"})]})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Specifies the filtering condition for the output. The output_column_name must be part of the output field list."}),"\n",(0,i.jsx)(n.p,{children:"When output_column_name is STATUS, the value can be one of the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"DEAD:           The backend where the replica resides is unavailable."}),"\n",(0,i.jsx)(n.li,{children:"VERSION_ERROR:  The replica\u2019s data version is incomplete."}),"\n",(0,i.jsx)(n.li,{children:"SCHEMA_ERROR:   The schema hash of the replica is incorrect."}),"\n",(0,i.jsx)(n.li,{children:"MISSING:        The replica does not exist."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Column"}),(0,i.jsx)(n.th,{children:"DataType"}),(0,i.jsx)(n.th,{children:"Note"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"TabletId"}),(0,i.jsx)(n.td,{children:"Int"}),(0,i.jsx)(n.td,{children:"Unique identifier for the tablet."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ReplicaId"}),(0,i.jsx)(n.td,{children:"Int"}),(0,i.jsx)(n.td,{children:"Unique identifier for the replica."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"BackendId"}),(0,i.jsx)(n.td,{children:"Int"}),(0,i.jsx)(n.td,{children:"ID of the Backend (BE) node where the replica is located."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Version"}),(0,i.jsx)(n.td,{children:"Int"}),(0,i.jsx)(n.td,{children:"The current version of the replica."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"LastFailedVersion"}),(0,i.jsx)(n.td,{children:"Int"}),(0,i.jsx)(n.td,{children:"The version when the replica last failed. A value of -1 means no failure."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"LastSuccessVersion"}),(0,i.jsx)(n.td,{children:"Int"}),(0,i.jsx)(n.td,{children:"The version when the replica last succeeded."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"CommittedVersion"}),(0,i.jsx)(n.td,{children:"Int"}),(0,i.jsx)(n.td,{children:"The committed version of the replica."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"SchemaHash"}),(0,i.jsx)(n.td,{children:"Int"}),(0,i.jsx)(n.td,{children:"A hash value representing the schema of the replica."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"VersionNum"}),(0,i.jsx)(n.td,{children:"Int"}),(0,i.jsx)(n.td,{children:"The number of versions the replica has gone through."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"IsBad"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"Indicates whether the replica is in a bad state (true/false)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"IsUserDrop"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"Indicates if the replica has been marked for user-driven deletion."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"State"}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"The current state of the replica (e.g., NORMAL)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Status"}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"The health status of the replica (e.g., OK)."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,i.jsx)(n.p,{children:"The user executing this SQL command must have at least the following privileges:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Privilege"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Object"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Admin_priv"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Database"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Required to execute administrative operations on the database, including managing tables, partitions, and system-level commands."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Display the replica status for all replicas of a table"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SHOW REPLICA STATUS FROM db1.tbl1;\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+----------+-----------+-----------+---------+-------------------+--------------------+------------------+------------+------------+-------+------------+--------+--------+\n| TabletId | ReplicaId | BackendId | Version | LastFailedVersion | LastSuccessVersion | CommittedVersion | SchemaHash | VersionNum | IsBad | IsUserDrop | State  | Status |\n+----------+-----------+-----------+---------+-------------------+--------------------+------------------+------------+------------+-------+------------+--------+--------+\n| 10145    | 10146     | 10009     | 14      | -1                | 14                 | 14               | 182881783  | 1          | false | false      | NORMAL | OK     |\n| 10147    | 10148     | 10009     | 14      | -1                | 14                 | 14               | 182881783  | 1          | false | false      | NORMAL | OK     |\n| 10149    | 10150     | 10009     | 14      | -1                | 14                 | 14               | 182881783  | 1          | false | false      | NORMAL | OK     |\n| 10151    | 10152     | 10009     | 14      | -1                | 14                 | 14               | 182881783  | 1          | false | false      | NORMAL | OK     |\n+----------+-----------+-----------+---------+-------------------+--------------------+------------------+------------+------------+-------+------------+--------+--------+\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Display the replicas of specific partitions with a VERSION_ERROR status"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'SHOW REPLICA STATUS FROM tbl1 PARTITION (p1, p2)\nWHERE STATUS = "VERSION_ERROR";\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Display all replicas of a table that are in unhealthy states"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'SHOW REPLICA STATUS FROM tbl1\nWHERE STATUS != "OK";\n'})}),"\n"]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var s=t(667294);let i={},r=s.createContext(i);function a(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);