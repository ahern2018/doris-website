"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["895749"],{489560:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>r,default:()=>u,assets:()=>o,toc:()=>d,frontMatter:()=>a});var i=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/DML/UPDATE","title":"UPDATE","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/data-modification/DML/UPDATE.md","sourceDirName":"sql-manual/sql-statements/data-modification/DML","slug":"/sql-manual/sql-statements/data-modification/DML/UPDATE","permalink":"/docs/3.0/sql-manual/sql-statements/data-modification/DML/UPDATE","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"UPDATE","language":"en"},"sidebar":"docs","previous":{"title":"SHOW LAST INSERT","permalink":"/docs/3.0/sql-manual/sql-statements/data-modification/DML/SHOW-LAST-INSERT"},"next":{"title":"DELETE","permalink":"/docs/3.0/sql-manual/sql-statements/data-modification/DML/DELETE"}}'),s=t("785893"),l=t("250065");let a={title:"UPDATE",language:"en"},r=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:4},{value:"Required Parameters",id:"required-parameters",level:4},{value:"Optional Parameters",id:"optional-parameters",level:4},{value:"Note",id:"note",level:4},{value:"Example",id:"example",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function c(e){let n={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"This statement is used to update the data. The UPDATE statement currently only supports the UNIQUE KEY model."}),"\n",(0,s.jsxs)(n.p,{children:["The UPDATE operation currently only supports updating the Value column. The update of the Key column can refer to ",(0,s.jsx)(n.a,{href:"/docs/3.0/ecosystem/flink-doris-connector#use-flink-cdc-to-update-key-column",children:"Using FlinkCDC to update Key column"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"[cte]\nUPDATE target_table [table_alias]\n    SET assignment_list\n    [ FROM additional_tables]\n    WHERE condition\n"})}),"\n",(0,s.jsx)(n.h4,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"target_table: The target table of the data to be updated. Can be of the form 'db_name.table_name'"}),"\n",(0,s.jsx)(n.li,{children:"assignment_list: The target column to be updated, in the format 'col_name = value, col_name = value'"}),"\n",(0,s.jsx)(n.li,{children:"where condition: the condition that is expected to be updated, an expression that returns true or false can be"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"cte: Common Table Expression, eg 'WITH a AS SELECT * FROM tbl'"}),"\n",(0,s.jsx)(n.li,{children:"table_alias: alias of table"}),"\n",(0,s.jsx)(n.li,{children:"FROM additional_tables: Specifies one or more tables to use for selecting rows to update or for setting new values. Note that if you want use target table here, you should give it a alias explicitly."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"note",children:"Note"}),"\n",(0,s.jsx)(n.p,{children:"The current UPDATE statement only supports row updates on the UNIQUE KEY model."}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"test"})," table is a unique model table, which contains four columns: k1, k2, v1, v2. Where k1, k2 are keys, v1, v2 are values, and the aggregation method is Replace."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Update the v1 column in the 'test' table that satisfies the conditions k1 =1 , k2 =2 to 1"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"UPDATE test SET v1 = 1 WHERE k1=1 and k2=2;\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Increment the v1 column of the k1=1 column in the 'test' table by 1"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"UPDATE test SET v1 = v1+1 WHERE k1=1;\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["use the result of ",(0,s.jsx)(n.code,{children:"t2"})," join ",(0,s.jsx)(n.code,{children:"t3"})," to update ",(0,s.jsx)(n.code,{children:"t1"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- create t1, t2, t3 tables\nCREATE TABLE t1\n  (id INT, c1 BIGINT, c2 STRING, c3 DOUBLE, c4 DATE)\nUNIQUE KEY (id)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1', \"function_column.sequence_col\" = \"c4\");\n\nCREATE TABLE t2\n  (id INT, c1 BIGINT, c2 STRING, c3 DOUBLE, c4 DATE)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1');\n\nCREATE TABLE t3\n  (id INT)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1');\n\n-- insert data\nINSERT INTO t1 VALUES\n  (1, 1, '1', 1.0, '2000-01-01'),\n  (2, 2, '2', 2.0, '2000-01-02'),\n  (3, 3, '3', 3.0, '2000-01-03');\n\nINSERT INTO t2 VALUES\n  (1, 10, '10', 10.0, '2000-01-10'),\n  (2, 20, '20', 20.0, '2000-01-20'),\n  (3, 30, '30', 30.0, '2000-01-30'),\n  (4, 4, '4', 4.0, '2000-01-04'),\n  (5, 5, '5', 5.0, '2000-01-05');\n\nINSERT INTO t3 VALUES\n  (1),\n  (4),\n  (5);\n\n-- update t1\nUPDATE t1\n  SET t1.c1 = t2.c1, t1.c3 = t2.c3 * 100\n  FROM t2 INNER JOIN t3 ON t2.id = t3.id\n  WHERE t1.id = t2.id;\n"})}),"\n",(0,s.jsx)(n.p,{children:"the expect result is only update the row where id = 1 in table t1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"+----+----+----+--------+------------+\n| id | c1 | c2 | c3     | c4         |\n+----+----+----+--------+------------+\n| 1  | 10 | 1  | 1000.0 | 2000-01-01 |\n| 2  | 2  | 2  |    2.0 | 2000-01-02 |\n| 3  | 3  | 3  |    3.0 | 2000-01-03 |\n+----+----+----+--------+------------+\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"using cte"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'create table orders(\n    o_orderkey bigint,\n    o_totalprice decimal(15, 2)\n) unique key(o_orderkey)\ndistributed by hash(o_orderkey) buckets 1 \nproperties (\n    "replication_num" = "1"\n);\n\ninsert into orders values\n(1, 34.1),\n(2, 432.8);\n\ncreate table lineitem(\n    l_linenumber int,\n    o_orderkey bigint,\n    l_discount  decimal(15, 2)\n) unique key(l_linenumber)\ndistributed by hash(l_linenumber) buckets 1 \nproperties (\n    "replication_num" = "1"\n);\n\ninsert into lineitem values\n(1, 1, 1.23),\n(2, 1, 3.21),\n(3, 2, 18.08),\n(4, 2, 23.48);\n\nwith discount_orders as (\n    select * from orders \n    where o_totalprice > 100\n)\nupdate lineitem  set l_discount = l_discount*0.9\nfrom discount_orders \nwhere lineitem.o_orderkey = discount_orders.o_orderkey;\n'})}),"\n",(0,s.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"UPDATE\n"})}),"\n",(0,s.jsx)(n.h2,{id:"best-practice",children:"Best Practice"})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var i=t(667294);let s={},l=i.createContext(s);function a(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);