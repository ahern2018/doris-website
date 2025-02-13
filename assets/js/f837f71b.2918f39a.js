"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["749739"],{512631:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>r,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>s});var a=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-PROPERTY","title":"ALTER TABLE PROPERTY","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-PROPERTY.md","sourceDirName":"sql-manual/sql-statements/table-and-view/table","slug":"/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-PROPERTY","permalink":"/docs/dev/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-PROPERTY","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ALTER TABLE PROPERTY","language":"en"},"sidebar":"docs","previous":{"title":"ALTER TABLE REPLACE","permalink":"/docs/dev/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-REPLACE"},"next":{"title":"ALTER TABLE COMMENT","permalink":"/docs/dev/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-COMMENT"}}'),l=n("785893"),i=n("250065");let s={title:"ALTER TABLE PROPERTY",language:"en"},r=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.admonition,{type:"caution",children:[(0,l.jsx)(t.p,{children:"Differences between Partition Attributes and Table Attributes"}),(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["Partition attributes generally focus on the number of buckets (buckets), storage medium (storage_medium), replication num (replication_num), and hot/cold data separation policies (storage_policy).\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"For existing partitions, you can use ALTER TABLE {tableName} MODIFY PARTITION ({partitionName}) SET ({key}={value}) to modify them, but the number of buckets (buckets) cannot be changed."}),"\n",(0,l.jsx)(t.li,{children:"For not-created dynamic partitions, you can use ALTER TABLE {tableName} SET (dynamic_partition.{key} = {value}) to modify their attributes."}),"\n",(0,l.jsx)(t.li,{children:"For not-created auto partitions, you can use ALTER TABLE {tableName} SET ({key} = {value}) to modify their attributes."}),"\n",(0,l.jsx)(t.li,{children:"If users want to modify partition attributes, they need to modify the attributes of the already created partitions, as well as the attributes of not-created partitions."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.li,{children:"Aside from the above attributes, all others are at the table level."}),"\n",(0,l.jsxs)(t.li,{children:["For the specific attributes, please refer to ",(0,l.jsx)(t.a,{href:"/docs/dev/sql-manual/sql-statements/table-and-view/table/CREATE-TABLE#properties",children:"create table attributes"})]}),"\n"]})]}),"\n",(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"This statement is used to modify the properties of an existing table. This operation is synchronous, and the return of the command indicates the completion of the execution."}),"\n",(0,l.jsx)(t.p,{children:"Modify the properties of the table, currently supports modifying the bloom filter column, the colocate_with attribute and the dynamic_partition attribute,  the replication_num and default.replication_num."}),"\n",(0,l.jsx)(t.p,{children:"grammar:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"ALTER TABLE [database.]table alter_clause;\n"})}),"\n",(0,l.jsx)(t.p,{children:"The alter_clause of property supports the following modification methods."}),"\n",(0,l.jsx)(t.p,{children:"Note:"}),"\n",(0,l.jsx)(t.p,{children:"Can also be merged into the above schema change operation to modify, see the example below"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsx)(t.li,{children:"Modify the bloom filter column of the table"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table SET ("bloom_filter_columns"="k1,k2,k3");\n'})}),"\n",(0,l.jsx)(t.p,{children:"Can also be incorporated into the schema change operation above (note that the syntax for multiple clauses is slightly different)"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nDROP COLUMN col2\nPROPERTIES ("bloom_filter_columns"="k1,k2,k3");\n'})}),"\n",(0,l.jsxs)(t.ol,{start:"2",children:["\n",(0,l.jsx)(t.li,{children:"Modify the Colocate property of the table"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table set ("colocate_with" = "t1");\n'})}),"\n",(0,l.jsxs)(t.ol,{start:"3",children:["\n",(0,l.jsx)(t.li,{children:"Change the bucketing method of the table from Hash Distribution to Random Distribution"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table set ("distribution_type" = "random");\n'})}),"\n",(0,l.jsxs)(t.ol,{start:"4",children:["\n",(0,l.jsx)(t.li,{children:"Modify the dynamic partition attribute of the table (support adding dynamic partition attribute to the table without dynamic partition attribute)"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table set ("dynamic_partition.enable" = "false");\n'})}),"\n",(0,l.jsx)(t.p,{children:"If you need to add dynamic partition attributes to tables without dynamic partition attributes, you need to specify all dynamic partition attributes\n(Note: adding dynamic partition attributes is not supported for non-partitioned tables)"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table set (\n  "dynamic_partition.enable" = "true", \n  "dynamic_partition.time_unit" = "DAY", \n  "dynamic_partition.end" = "3", \n  "dynamic_partition.prefix" = "p", \n  "dynamic_partition. buckets" = "32"\n);\n'})}),"\n",(0,l.jsxs)(t.ol,{start:"5",children:["\n",(0,l.jsx)(t.li,{children:"Modify the in_memory attribute of the table, only can set value 'false'"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table set ("in_memory" = "false");\n'})}),"\n",(0,l.jsxs)(t.ol,{start:"6",children:["\n",(0,l.jsx)(t.li,{children:"Enable batch delete function"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table ENABLE FEATURE "BATCH_DELETE";\n'})}),"\n",(0,l.jsx)(t.p,{children:"Note:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Only support unique tables"}),"\n",(0,l.jsx)(t.li,{children:"Batch deletion is supported for old tables, while new tables are already supported when they are created"}),"\n"]}),"\n",(0,l.jsxs)(t.ol,{start:"7",children:["\n",(0,l.jsx)(t.li,{children:"Enable the function of ensuring the import order according to the value of the sequence column"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table ENABLE FEATURE "SEQUENCE_LOAD" WITH PROPERTIES (\n  "function_column.sequence_type" = "Date"\n);\n'})}),"\n",(0,l.jsx)(t.p,{children:"Note:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Only support unique tables"}),"\n",(0,l.jsx)(t.li,{children:"The sequence_type is used to specify the type of the sequence column, which can be integral and time type"}),"\n",(0,l.jsx)(t.li,{children:"Only the orderliness of newly imported data is supported. Historical data cannot be changed"}),"\n"]}),"\n",(0,l.jsxs)(t.ol,{start:"8",children:["\n",(0,l.jsx)(t.li,{children:"Change the default number of buckets for the table to 50"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"ALTER TABLE example_db.my_table MODIFY DISTRIBUTION DISTRIBUTED BY HASH(k1) BUCKETS 50;\n"})}),"\n",(0,l.jsx)(t.p,{children:"Note:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Only support non colocate table with RANGE partition and HASH distribution"}),"\n"]}),"\n",(0,l.jsxs)(t.ol,{start:"9",children:["\n",(0,l.jsx)(t.li,{children:"Modify table comments"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table MODIFY COMMENT "new comment";\n'})}),"\n",(0,l.jsxs)(t.ol,{start:"10",children:["\n",(0,l.jsx)(t.li,{children:"Modify column comments"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table MODIFY COLUMN k1 COMMENT "k1", MODIFY COLUMN k2 COMMENT "k2";\n'})}),"\n",(0,l.jsxs)(t.ol,{start:"11",children:["\n",(0,l.jsx)(t.li,{children:"Modify the engine type"}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"Only the MySQL type can be changed to the ODBC type. The value of driver is the name of the driver in the odbc.init configuration."}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE example_db.mysql_table MODIFY ENGINE TO odbc PROPERTIES("driver" = "MySQL");\n'})}),"\n",(0,l.jsxs)(t.ol,{start:"12",children:["\n",(0,l.jsx)(t.li,{children:"Modify the number of copies"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE example_db.mysql_table SET ("replication_num" = "2");\nALTER TABLE example_db.mysql_table SET ("default.replication_num" = "2");\nALTER TABLE example_db.mysql_table SET ("replication_allocation" = "tag.location.default: 1");\nALTER TABLE example_db.mysql_table SET ("default.replication_allocation" = "tag.location.default: 1");\n'})}),"\n",(0,l.jsx)(t.p,{children:"Note:"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsx)(t.li,{children:"The property with the default prefix indicates the default replica distribution for the modified table. This modification does not modify the current actual replica distribution of the table, but only affects the replica distribution of newly created partitions on the partitioned table."}),"\n",(0,l.jsxs)(t.li,{children:["For non-partitioned tables, modifying the replica distribution property without the default prefix will modify both the default replica distribution and the actual replica distribution of the table. That is, after the modification, through the ",(0,l.jsx)(t.code,{children:"show create table"})," and ",(0,l.jsx)(t.code,{children:"show partitions from tbl"})," statements, you can see that the replica distribution has been modified.\nchanged."]}),"\n",(0,l.jsxs)(t.li,{children:["For partitioned tables, the actual replica distribution of the table is at the partition level, that is, each partition has its own replica distribution, which can be viewed through the ",(0,l.jsx)(t.code,{children:"show partitions from tbl"})," statement. If you want to modify the actual replica distribution, see ",(0,l.jsx)(t.code,{children:"ALTER TABLE PARTITION"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["13. ",(0,l.jsx)(t.strong,{children:"[Experimental]"})," turn on ",(0,l.jsx)(t.code,{children:"light_schema_change"})]}),"\n",(0,l.jsx)(t.p,{children:"For tables that were not created with light_schema_change enabled, you can enable it by using the following statement."}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE example_db.mysql_table SET ("light_schema_change" = "true");\n'})}),"\n",(0,l.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsx)(t.li,{children:"Modify the bloom filter column of the table"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table SET ("bloom_filter_columns"="k1,k2,k3");\n'})}),"\n",(0,l.jsx)(t.p,{children:"Can also be incorporated into the schema change operation above (note that the syntax for multiple clauses is slightly different)"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nDROP COLUMN col2\nPROPERTIES ("bloom_filter_columns"="k1,k2,k3");\n'})}),"\n",(0,l.jsxs)(t.ol,{start:"2",children:["\n",(0,l.jsx)(t.li,{children:"Modify the Colocate property of the table"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table set ("colocate_with" = "t1");\n'})}),"\n",(0,l.jsxs)(t.ol,{start:"3",children:["\n",(0,l.jsx)(t.li,{children:"Change the bucketing method of the table from Hash Distribution to Random Distribution"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table set ("distribution_type" = "random");\n'})}),"\n",(0,l.jsxs)(t.ol,{start:"4",children:["\n",(0,l.jsx)(t.li,{children:"Modify the dynamic partition attribute of the table (support adding dynamic partition attribute to the table without dynamic partition attribute)"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table set ("dynamic_partition.enable" = "false");\n'})}),"\n",(0,l.jsx)(t.p,{children:"If you need to add dynamic partition attributes to tables without dynamic partition attributes, you need to specify all dynamic partition attributes\n(Note: adding dynamic partition attributes is not supported for non-partitioned tables)"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table set ("dynamic_partition.enable" = "true", "dynamic_partition.time_unit" = "DAY", "dynamic_partition.end" = "3", "dynamic_partition.prefix" = "p", "dynamic_partition. buckets" = "32");\n'})}),"\n",(0,l.jsxs)(t.ol,{start:"5",children:["\n",(0,l.jsx)(t.li,{children:"Modify the in_memory attribute of the table, only can set value 'false'"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table set ("in_memory" = "false");\n'})}),"\n",(0,l.jsxs)(t.ol,{start:"6",children:["\n",(0,l.jsx)(t.li,{children:"Enable batch delete function"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table ENABLE FEATURE "BATCH_DELETE";\n'})}),"\n",(0,l.jsxs)(t.ol,{start:"7",children:["\n",(0,l.jsx)(t.li,{children:"Enable the function of ensuring the import order according to the value of the sequence column"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table ENABLE FEATURE "SEQUENCE_LOAD" WITH PROPERTIES ("function_column.sequence_type" = "Date");\n'})}),"\n",(0,l.jsxs)(t.ol,{start:"8",children:["\n",(0,l.jsx)(t.li,{children:"Change the default number of buckets for the table to 50"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"ALTER TABLE example_db.my_table MODIFY DISTRIBUTION DISTRIBUTED BY HASH(k1) BUCKETS 50;\n"})}),"\n",(0,l.jsxs)(t.ol,{start:"9",children:["\n",(0,l.jsx)(t.li,{children:"Modify table comments"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table MODIFY COMMENT "new comment";\n'})}),"\n",(0,l.jsxs)(t.ol,{start:"10",children:["\n",(0,l.jsx)(t.li,{children:"Modify column comments"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table MODIFY COLUMN k1 COMMENT "k1", MODIFY COLUMN k2 COMMENT "k2";\n'})}),"\n",(0,l.jsxs)(t.ol,{start:"11",children:["\n",(0,l.jsx)(t.li,{children:"Modify the engine type"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE example_db.mysql_table MODIFY ENGINE TO odbc PROPERTIES("driver" = "MySQL");\n'})}),"\n",(0,l.jsxs)(t.ol,{start:"12",children:["\n",(0,l.jsx)(t.li,{children:"Add a cold and hot separation data migration strategy to the table"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:' ALTER TABLE create_table_not_have_policy set ("storage_policy" = "created_create_table_alter_policy");\n'})}),"\n",(0,l.jsx)(t.p,{children:"NOTE: The table can be successfully added only if it hasn't been associated with a storage policy. A table just can have one storage policy."}),"\n",(0,l.jsxs)(t.ol,{start:"13",children:["\n",(0,l.jsx)(t.li,{children:"Add a hot and cold data migration strategy to the partition of the table"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE create_table_partition MODIFY PARTITION (*) SET("storage_policy"="created_create_table_partition_alter_policy");\n'})}),"\n",(0,l.jsx)(t.p,{children:"NOTE: The table's partition can be successfully added only if it hasn't been associated with a storage policy. A table just can have one storage policy."}),"\n",(0,l.jsx)(t.h2,{id:"keywords",children:"Keywords"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-text",children:"ALTER, TABLE, PROPERTY, ALTER TABLE\n"})}),"\n",(0,l.jsx)(t.h2,{id:"best-practice",children:"Best Practice"})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return s}});var a=n(667294);let l={},i=a.createContext(l);function s(e){let t=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);