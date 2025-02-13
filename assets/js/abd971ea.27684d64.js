"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["391267"],{501243:function(e,n,a){a.r(n),a.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>h,assets:()=>o,toc:()=>r,frontMatter:()=>s});var t=JSON.parse('{"id":"data-operate/delete/batch-delete-manual","title":"Batch Deletion Based on Load","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/data-operate/delete/batch-delete-manual.md","sourceDirName":"data-operate/delete","slug":"/data-operate/delete/batch-delete-manual","permalink":"/docs/data-operate/delete/batch-delete-manual","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Batch Deletion Based on Load","language":"en"},"sidebar":"docs","previous":{"title":"Deleting Data with DELETE Command","permalink":"/docs/data-operate/delete/delete-manual"},"next":{"title":"Deleting Data with TRUNCATE Command","permalink":"/docs/data-operate/delete/truncate-manual"}}'),l=a("785893"),i=a("250065");let s={title:"Batch Deletion Based on Load",language:"en"},d=void 0,o={},r=[{value:"Batch Deletion Based on Load",id:"batch-deletion-based-on-load",level:2},{value:"Working Principle of Delete Signs",id:"working-principle-of-delete-signs",level:2},{value:"Principle Explanation",id:"principle-explanation",level:3},{value:"Data Example",id:"data-example",level:3},{value:"Table Structure",id:"table-structure",level:4},{value:"Data Load",id:"data-load",level:4},{value:"Query",id:"query",level:4},{value:"Syntax Explanation",id:"syntax-explanation",level:2},{value:"Load Merge Type Selection",id:"load-merge-type-selection",level:3},{value:"Stream Load",id:"stream-load",level:3},{value:"Broker Load",id:"broker-load",level:3},{value:"Routine Load",id:"routine-load",level:3}];function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"batch-deletion-based-on-load",children:"Batch Deletion Based on Load"}),"\n",(0,l.jsx)(n.p,{children:"The delete operation is a special form of data update. In the primary key model (Unique Key) table, Doris supports deletion by adding a delete sign when loading data."}),"\n",(0,l.jsxs)(n.p,{children:["Compared to the ",(0,l.jsx)(n.code,{children:"DELETE"})," statement, using delete signs offers better usability and performance in the following scenarios:"]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"CDC Scenario"}),": When synchronizing data from an OLTP database to Doris, Insert and Delete operations in the binlog usually appear alternately. The ",(0,l.jsx)(n.code,{children:"DELETE"})," statement cannot efficiently handle these operations. Using delete signs allows Insert and Delete operations to be processed uniformly, simplifying the CDC code for writing to Doris and improving data load and query performance."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Batch Deletion of Specified Primary Keys"}),": If a large number of primary keys need to be deleted, using the ",(0,l.jsx)(n.code,{children:"DELETE"})," statement is inefficient. Each execution of ",(0,l.jsx)(n.code,{children:"DELETE"})," generates an empty rowset to record the delete condition and produces a new data version. Frequent deletions or too many delete conditions can severely affect query performance."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"working-principle-of-delete-signs",children:"Working Principle of Delete Signs"}),"\n",(0,l.jsx)(n.h3,{id:"principle-explanation",children:"Principle Explanation"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Table Structure"}),": The delete sign is stored as a hidden column ",(0,l.jsx)(n.code,{children:"__DORIS_DELETE_SIGN__"})," in the primary key table. When the value of this column is 1, it indicates that the delete sign is effective."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Data Load"}),": Users can specify the mapping condition of the delete sign column in the load task. The usage varies for different load tasks, as detailed in the syntax explanation below."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Query"}),": During the query, Doris FE automatically adds the filter condition ",(0,l.jsx)(n.code,{children:"__DORIS_DELETE_SIGN__ != true"})," in the query plan to filter out data with a delete sign value of 1."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Data Compaction"}),": Doris's background data compaction periodically cleans up data with a delete sign value of 1."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"data-example",children:"Data Example"}),"\n",(0,l.jsx)(n.h4,{id:"table-structure",children:"Table Structure"}),"\n",(0,l.jsx)(n.p,{children:"Create an example table:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE example_table (\n    id BIGINT NOT NULL,\n    value STRING\n)\nUNIQUE KEY(id)\nDISTRIBUTED BY HASH(id) BUCKETS 10\nPROPERTIES (\n    "replication_num" = "3"\n);\n'})}),"\n",(0,l.jsxs)(n.p,{children:["Use the session variable ",(0,l.jsx)(n.code,{children:"show_hidden_columns"})," to view hidden columns:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"mysql> set show_hidden_columns=true;\n\nmysql> desc example_table;\n+-----------------------+---------+------+-------+---------+-------+\n| Field                 | Type    | Null | Key   | Default | Extra |\n+-----------------------+---------+------+-------+---------+-------+\n| id                    | bigint  | No   | true  | NULL    |       |\n| value                 | text    | Yes  | false | NULL    | NONE  |\n| __DORIS_DELETE_SIGN__ | tinyint | No   | false | 0       | NONE  |\n| __DORIS_VERSION_COL__ | bigint  | No   | false | 0       | NONE  |\n+-----------------------+---------+------+-------+---------+-------+\n"})}),"\n",(0,l.jsx)(n.h4,{id:"data-load",children:"Data Load"}),"\n",(0,l.jsx)(n.p,{children:"The table has the following existing data:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"+------+-------+\n| id   | value |\n+------+-------+\n|    1 | foo   |\n|    2 | bar   |\n+------+-------+\n"})}),"\n",(0,l.jsx)(n.p,{children:"Insert a delete sign for id 1 (this is only for principle demonstration, not introducing various methods of using delete signs in load):"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"mysql> insert into example_table (id, __DORIS_DELETE_SIGN__) values (1, 1);\n"})}),"\n",(0,l.jsx)(n.h4,{id:"query",children:"Query"}),"\n",(0,l.jsx)(n.p,{children:"Directly view the data, and you can find that the record with id 1 has been deleted:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"mysql> select * from example_table;\n+------+-------+\n| id   | value |\n+------+-------+\n|    2 | bar   |\n+------+-------+\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Use the session variable ",(0,l.jsx)(n.code,{children:"show_hidden_columns"})," to view hidden columns, and you can see that the row with id 1 has not been actually deleted. Its hidden column ",(0,l.jsx)(n.code,{children:"__DORIS_DELETE_SIGN__"})," value is 1 and is filtered out during the query:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"mysql> set show_hidden_columns=true;\nmysql> select * from example_table;\n+------+-------+-----------------------+-----------------------+\n| id   | value | __DORIS_DELETE_SIGN__ | __DORIS_VERSION_COL__ |\n+------+-------+-----------------------+-----------------------+\n|    1 | NULL  |                     1 |                     3 |\n|    2 | bar   |                     0 |                     2 |\n+------+-------+-----------------------+-----------------------+\n"})}),"\n",(0,l.jsx)(n.h2,{id:"syntax-explanation",children:"Syntax Explanation"}),"\n",(0,l.jsx)(n.p,{children:"Different load types have different syntax for setting delete signs. Below are the usage syntax for delete signs in various load types."}),"\n",(0,l.jsx)(n.h3,{id:"load-merge-type-selection",children:"Load Merge Type Selection"}),"\n",(0,l.jsx)(n.p,{children:"There are several merge types when loading data:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"APPEND"}),": All data is appended to the existing data."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"DELETE"}),": Delete all rows with the same key column values as the loaded data."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"MERGE"}),": Decide whether to APPEND or DELETE based on the DELETE ON condition."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"stream-load",children:"Stream Load"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"Stream Load"})," syntax is to add a field for setting the delete sign column in the header's columns field, for example: ",(0,l.jsx)(n.code,{children:'-H "columns: k1, k2, label_c3" -H "merge_type: [MERGE|APPEND|DELETE]" -H "delete: label_c3=1"'}),"."]}),"\n",(0,l.jsxs)(n.p,{children:['For usage examples of Stream Load, please refer to the "Specify merge_type for Delete Operation" and "Specify merge_type for Merge Operation" sections in the ',(0,l.jsx)(n.a,{href:"../load/load-way/stream-load-manual.md",children:"Stream Load Manual"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"broker-load",children:"Broker Load"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"Broker Load"})," syntax is to set the delete sign column field in ",(0,l.jsx)(n.code,{children:"PROPERTIES"}),", as follows:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'LOAD LABEL db1.label1\n(\n    [MERGE|APPEND|DELETE] DATA INFILE("hdfs://abc.com:8888/user/palo/test/ml/file1")\n    INTO TABLE tbl1\n    COLUMNS TERMINATED BY ","\n    (tmp_c1,tmp_c2, label_c3)\n    SET\n    (\n        id=tmp_c2,\n        name=tmp_c1,\n    )\n    [DELETE ON label_c3=true]\n)\nWITH BROKER \'broker\'\n(\n    "username"="user",\n    "password"="pass"\n)\nPROPERTIES\n(\n    "timeout" = "3600"\n);\n'})}),"\n",(0,l.jsx)(n.h3,{id:"routine-load",children:"Routine Load"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"Routine Load"})," syntax is to add a mapping in the ",(0,l.jsx)(n.code,{children:"columns"})," field, with the same mapping method as above, as follows:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE ROUTINE LOAD example_db.test1 ON example_tbl \n [WITH MERGE|APPEND|DELETE]\n COLUMNS(k1, k2, k3, v1, v2, label),\n WHERE k1  100 and k2 like "%doris%"\n [DELETE ON label=true]\n PROPERTIES\n (\n     "desired_concurrent_number"="3",\n     "max_batch_interval" = "20",\n     "max_batch_rows" = "300000",\n     "max_batch_size" = "209715200",\n     "strict_mode" = "false"\n )\n FROM KAFKA\n (\n     "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n     "kafka_topic" = "my_topic",\n     "kafka_partitions" = "0,1,2,3",\n     "kafka_offsets" = "101,0,0,200"\n );\n'})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return d},a:function(){return s}});var t=a(667294);let l={},i=t.createContext(l);function s(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);