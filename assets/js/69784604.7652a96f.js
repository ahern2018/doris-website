"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["942945"],{141788:function(e,t,n){n.r(t),n.d(t,{metadata:()=>l,contentTitle:()=>a,default:()=>o,assets:()=>d,toc:()=>c,frontMatter:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/table/SHOW-TABLE-STATUS","title":"SHOW TABLE STATUS","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/table-and-view/table/SHOW-TABLE-STATUS.md","sourceDirName":"sql-manual/sql-statements/table-and-view/table","slug":"/sql-manual/sql-statements/table-and-view/table/SHOW-TABLE-STATUS","permalink":"/docs/sql-manual/sql-statements/table-and-view/table/SHOW-TABLE-STATUS","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SHOW TABLE STATUS","language":"en"},"sidebar":"docs","previous":{"title":"SHOW TABLE ID","permalink":"/docs/sql-manual/sql-statements/table-and-view/table/SHOW-TABLE-ID"},"next":{"title":"SHOW CONVERT LIGHT SCHEMA CHANGE PROCESS","permalink":"/docs/sql-manual/sql-statements/table-and-view/table/SHOW-CONVERT-LIGHT-SCHEMA-CHANGE-PROCESS"}}'),s=n("785893"),i=n("250065");let r={title:"SHOW TABLE STATUS",language:"en"},a=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Optional parameters",id:"optional-parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function h(e){let t={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"This statement is used to display some information about a table or view."}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"SHOW TABLE STATUS [ FROM [ <catalog_name>.]<db_name> ] [ LIKE <like_condition> ]\n"})}),"\n",(0,s.jsx)(t.h2,{id:"optional-parameters",children:"Optional parameters"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.strong,{children:["1. ",(0,s.jsx)(t.code,{children:" FROM [ <catalog_name>.]<db_name>"})]})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"The catalog name and database name to be queried can be specified in the FROM clause."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.strong,{children:["2. ",(0,s.jsx)(t.code,{children:"LIKE <like_condition>"})]})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"The LIKE clause can perform fuzzy queries based on the table name."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"return-value",children:"Return value"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Column"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"DataType"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Table name"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Engine"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Storage engine for the table"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Version"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Version"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Row_format"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Row format. For the MyISAM engine, this may be Dynamic, Fixed, or Compressed. Dynamic rows have variable length, such as Varchar or Blob type fields. Fixed rows have fixed length, such as Char and Integer type fields."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Rows"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Number of rows in the table. For non-transactional tables, this value is exact, for transactional engines, this value is usually estimated."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Avg_row_length"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Integer"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Average number of bytes per row"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Data_length"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Integer"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The amount of data in the entire table (in bytes)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Max_data_length"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Integer"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The maximum amount of data that a table can hold"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Index_length"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Integer"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The amount of disk space occupied by an index"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Data_free"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Integer"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"For the MyISAM engine, identifies the space that has been allocated but is now unused, and includes the space for deleted rows."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Auto_increment"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Integer"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The value of the next Auto_increment"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Create_time"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Datetime"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The creation time of the table"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Update_time"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Datetime"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The last update time of the table"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Check_time"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Datetime"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The last time to check the table using the check table or myisamchk tool"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Collation"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The default character set of the table, currently only supports utf-8"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Checksum"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"If enabled, the checksum calculated for the entire table content"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Create_options"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Refers to all other options when the table is created"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Comment"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Table comment"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,s.jsx)(t.p,{children:"The user who executes this SQL command must have at least the following permissions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Privilege"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Object"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"ADMIN_PRIV"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Table, View"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Currently only supports ",(0,s.jsx)(t.strong,{children:"ADMIN"})," permissions to perform this operation"]})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"This statement is mainly used for compatibility with MySQL syntax. Currently, only a small amount of information such as Comment is displayed."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"View information about all tables in the current database"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"SHOW TABLE STATUS\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"+------------+--------+---------+------------+------+----------------+-------------+-----------------+--------------+-----------+----------------+---------------------+---------------------+------------+-----------+----------+----------------+---------+\n| Name       | Engine | Version | Row_format | Rows | Avg_row_length | Data_length | Max_data_length | Index_length | Data_free | Auto_increment | Create_time         | Update_time         | Check_time | Collation | Checksum | Create_options | Comment |\n+------------+--------+---------+------------+------+----------------+-------------+-----------------+--------------+-----------+----------------+---------------------+---------------------+------------+-----------+----------+----------------+---------+\n| test_table | Doris  |    NULL | NULL       |    0 |              0 |           0 |            NULL |         NULL |      NULL |           NULL | 2025-01-22 11:45:36 | 2025-01-22 11:45:36 | NULL       | utf-8     |     NULL | NULL           |         |\n| test_view  | View   |    NULL | NULL       |    0 |              0 |           0 |            NULL |         NULL |      NULL |           NULL | 2025-01-22 11:46:32 | NULL                | NULL       | utf-8     |     NULL | NULL           |         |\n+------------+--------+---------+------------+------+----------------+-------------+-----------------+--------------+-----------+----------------+---------------------+---------------------+------------+-----------+----------+----------------+---------+\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"View information about tables whose names contain example under the specified database"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'SHOW TABLE STATUS FROM db LIKE "%test%"\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"+------------+--------+---------+------------+------+----------------+-------------+-----------------+--------------+-----------+----------------+---------------------+---------------------+------------+-----------+----------+----------------+---------+\n| Name       | Engine | Version | Row_format | Rows | Avg_row_length | Data_length | Max_data_length | Index_length | Data_free | Auto_increment | Create_time         | Update_time         | Check_time | Collation | Checksum | Create_options | Comment |\n+------------+--------+---------+------------+------+----------------+-------------+-----------------+--------------+-----------+----------------+---------------------+---------------------+------------+-----------+----------+----------------+---------+\n| test_table | Doris  |    NULL | NULL       |    0 |              0 |           0 |            NULL |         NULL |      NULL |           NULL | 2025-01-22 11:45:36 | 2025-01-22 11:45:36 | NULL       | utf-8     |     NULL | NULL           |         |\n| test_view  | View   |    NULL | NULL       |    0 |              0 |           0 |            NULL |         NULL |      NULL |           NULL | 2025-01-22 11:46:32 | NULL                | NULL       | utf-8     |     NULL | NULL           |         |\n+------------+--------+---------+------------+------+----------------+-------------+-----------------+--------------+-----------+----------------+---------------------+---------------------+------------+-----------+----------+----------------+---------+\n"})}),"\n"]}),"\n"]})]})}function o(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return r}});var l=n(667294);let s={},i=l.createContext(s);function r(e){let t=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(i.Provider,{value:t},e.children)}}}]);