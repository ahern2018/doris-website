"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["142249"],{745949:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-DATA","title":"SHOW DATA","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-DATA.md","sourceDirName":"sql-manual/sql-statements/table-and-view/data-and-status-management","slug":"/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-DATA","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-DATA","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW DATA","language":"en"},"sidebar":"docs","previous":{"title":"CANCEL REBALANCE DISK","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/CANCEL-REBALANCE-DISK"},"next":{"title":"SHOW DATA SKEW","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-DATA-SKEW"}}'),l=t("785893"),a=t("250065");let i={title:"SHOW DATA",language:"en"},r=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"SHOW DATA"})," statement is used to display information about data volume, replica count, and row statistics. This statement has the following functionalities:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"It can display the data volume and replica count for all tables in the current database."}),"\n",(0,l.jsx)(n.li,{children:"It can show the data volume, replica count, and row statistics for a specified table's materialized views."}),"\n",(0,l.jsx)(n.li,{children:"It can display the quota usage of the database."}),"\n",(0,l.jsx)(n.li,{children:"It supports sorting by data volume, replica count, etc."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW DATA [ FROM [<db_name>.]<table_name> ] [ ORDER BY <order_by_clause> ];\n"})}),"\n",(0,l.jsx)(n.p,{children:"Where:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"order_by_clause:\n    <column_name> [ ASC | DESC ] [ , <column_name> [ ASC | DESC ] ... ]\n"})}),"\n",(0,l.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["1. ",(0,l.jsx)(n.code,{children:"FROM [<db_name>.]<table_name>"})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Specifies the name of the table to view. The database name can be included."}),"\n",(0,l.jsx)(n.p,{children:"If this parameter is not specified, it will display data information for all tables in the current database."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["2. ",(0,l.jsx)(n.code,{children:"ORDER BY <order_by_clause>"})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Specifies the sorting method for the result set."}),"\n",(0,l.jsx)(n.p,{children:"Any column can be sorted in ascending (ASC) or descending (DESC) order."}),"\n",(0,l.jsx)(n.p,{children:"Supports multi-column combination sorting."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"return-values",children:"Return Values"}),"\n",(0,l.jsx)(n.p,{children:"Depending on different query scenarios, the following result sets are returned:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["When the ",(0,l.jsx)(n.code,{children:"FROM"})," clause is not specified (displaying database-level information):"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Column Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"DbId"}),(0,l.jsx)(n.td,{children:"Database ID"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"DbName"}),(0,l.jsx)(n.td,{children:"Database name"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Size"}),(0,l.jsx)(n.td,{children:"Total data volume of the database"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"RemoteSize"}),(0,l.jsx)(n.td,{children:"Remote storage data volume"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"RecycleSize"}),(0,l.jsx)(n.td,{children:"Recycle bin data volume"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"RecycleRemoteSize"}),(0,l.jsx)(n.td,{children:"Recycle bin remote storage volume"})]})]})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["When the ",(0,l.jsx)(n.code,{children:"FROM"})," clause is specified (displaying table-level information):"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Column Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"TableName"}),(0,l.jsx)(n.td,{children:"Table name"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"IndexName"}),(0,l.jsx)(n.td,{children:"Index (materialized view) name"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Size"}),(0,l.jsx)(n.td,{children:"Data size"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"ReplicaCount"}),(0,l.jsx)(n.td,{children:"Replica count"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"RowCount"}),(0,l.jsx)(n.td,{children:"Row statistics (shown only when viewing a specific table)"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,l.jsx)(n.p,{children:"Users executing this SQL command must have at least the following permissions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Privilege"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"SELECT"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Table"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"SELECT permission is required for viewing the table."})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"The data volume statistics include the total data volume of all replicas."}),"\n",(0,l.jsx)(n.li,{children:"The replica count includes all partitions and replicas of all materialized views for the table."}),"\n",(0,l.jsx)(n.li,{children:"When counting rows, it considers the maximum row count among multiple replicas."}),"\n",(0,l.jsxs)(n.li,{children:["The ",(0,l.jsx)(n.code,{children:"Total"})," row in the result set indicates aggregated data."]}),"\n",(0,l.jsxs)(n.li,{children:["The ",(0,l.jsx)(n.code,{children:"Quota"})," row in the result set indicates the current quota set for the database."]}),"\n",(0,l.jsxs)(n.li,{children:["The ",(0,l.jsx)(n.code,{children:"Left"})," row in the result set indicates remaining quota."]}),"\n",(0,l.jsxs)(n.li,{children:["If you need to view the size of each partition, use the ",(0,l.jsx)(n.code,{children:"SHOW PARTITIONS"})," command."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Display data volume information for all databases:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW DATA;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"+-------+-----------------------------------+--------+------------+-------------+-------------------+\n| DbId  | DbName                            | Size   | RemoteSize | RecycleSize | RecycleRemoteSize |\n+-------+-----------------------------------+--------+------------+-------------+-------------------+\n| 21009 | db1                               | 0      | 0          | 0           | 0                 |\n| 22011 | regression_test_inverted_index_p0 | 72764  | 0          | 0           | 0                 |\n| Total | NULL                              | 118946 | 0          | 0           | 0                 |\n+-------+-----------------------------------+--------+------------+-------------+-------------------+\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Display data volume information for all tables in the current database:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"USE db1;\nSHOW DATA;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+-----------+-------------+--------------+\n| TableName | Size        | ReplicaCount |\n+-----------+-------------+--------------+\n| tbl1      | 900.000 B   | 6            |\n| tbl2      | 500.000 B   | 3            |\n| Total     | 1.400 KB    | 9            |\n| Quota     | 1024.000 GB | 1073741824   |\n| Left      | 1021.921 GB | 1073741815   |\n+-----------+-------------+--------------+\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Display detailed data volume information for a specified table:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW DATA FROM example_db.test;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+-----------+-----------+-----------+--------------+----------+\n| TableName | IndexName | Size      | ReplicaCount | RowCount |\n+-----------+-----------+-----------+--------------+----------+\n| test      | r1        | 10.000MB  | 30           | 10000    |\n|           | r2        | 20.000MB  | 30           | 20000    |\n|           | test2     | 50.000MB  | 30           | 50000    |\n|           | Total     | 80.000MB  | 90           |          |\n+-----------+-----------+-----------+--------------+----------+\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Sort by replica count in descending order and by data volume in ascending order:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW DATA ORDER BY ReplicaCount DESC, Size ASC;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+-----------+-------------+--------------+\n| TableName | Size        | ReplicaCount |\n+-----------+-------------+--------------+\n| table_c   | 3.102 KB    | 40           |\n| table_d   | .000        | 20           |\n| table_b   |=324.000 B   |=20           |\n|=table_a   |=1.266 KB   |=10           |\n|=Total     |=4.684 KB   |=90           |\n|=Quota     |=1024.000 GB |=1073741824   |\n|=Left      |=1024.000 GB |=1073741734   |\n+-----------+-------------+--------------+\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(667294);let l={},a=s.createContext(l);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);