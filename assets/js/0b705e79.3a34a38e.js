"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["12787"],{173238:function(e,t,a){a.r(t),a.d(t,{metadata:()=>n,contentTitle:()=>l,default:()=>c,assets:()=>d,toc:()=>o,frontMatter:()=>i});var n=JSON.parse('{"id":"data-operate/import/complex-types/map","title":"MAP","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/data-operate/import/complex-types/map.md","sourceDirName":"data-operate/import/complex-types","slug":"/data-operate/import/complex-types/map","permalink":"/docs/3.0/data-operate/import/complex-types/map","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"MAP","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY","permalink":"/docs/3.0/data-operate/import/complex-types/array"},"next":{"title":"STRUCT","permalink":"/docs/3.0/data-operate/import/complex-types/struct"}}'),s=a("785893"),r=a("250065");let i={title:"MAP",language:"en"},l=void 0,d={},o=[{value:"CSV format import",id:"csv-format-import",level:2},{value:"Step 1: Prepare the data",id:"step-1-prepare-the-data",level:3},{value:"Step 2: Create a table in the database",id:"step-2-create-a-table-in-the-database",level:3},{value:"Step 3: Load data",id:"step-3-load-data",level:3},{value:"Step 4: Check the imported data",id:"step-4-check-the-imported-data",level:3},{value:"JSON format import",id:"json-format-import",level:2},{value:"Step 1: Prepare the data",id:"step-1-prepare-the-data-1",level:3},{value:"Step 2: Create a table in the database",id:"step-2-create-a-table-in-the-database-1",level:3},{value:"Step 3: Load data",id:"step-3-load-data-1",level:3},{value:"Step 4: Check the imported data",id:"step-4-check-the-imported-data-1",level:3}];function p(e){let t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"MAP<K, V>"})," A Map of K, V items, it cannot be used as a key column. Now MAP can only used in Duplicate and Unique Model Tables."]}),"\n",(0,s.jsx)(t.p,{children:"K,V could be any of:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, DECIMAL, DECIMALV3, DATE,\nDATEV2, DATETIME, DATETIMEV2, CHAR, VARCHAR, STRING\n"})}),"\n",(0,s.jsx)(t.h2,{id:"csv-format-import",children:"CSV format import"}),"\n",(0,s.jsx)(t.h3,{id:"step-1-prepare-the-data",children:"Step 1: Prepare the data"}),"\n",(0,s.jsxs)(t.p,{children:["Create the following csv file: ",(0,s.jsx)(t.code,{children:"test_map.csv"}),"\nThe separator is ",(0,s.jsx)(t.code,{children:"|"})," instead of comma to distinguish it from the comma in map."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'1|{"Emily":101,"age":25}\n2|{"Benjamin":102}\n3|{}\n4|null\n'})}),"\n",(0,s.jsx)(t.h3,{id:"step-2-create-a-table-in-the-database",children:"Step 2: Create a table in the database"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'CREATE TABLE map_test (\n    id       INT                 NOT NULL,\n    c_map    MAP<STRING, INT>    NULL\n)\nDUPLICATE KEY(id)\nDISTRIBUTED BY HASH(id) BUCKETS 1\nPROPERTIES (\n    "replication_allocation" = "tag.location.default: 1"\n);\n'})}),"\n",(0,s.jsx)(t.h3,{id:"step-3-load-data",children:"Step 3: Load data"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'curl --location-trusted \\\n        -u "root":"" \\\n        -H "column_separator:|" \\\n        -H "columns: id, c_map" \\\n        -T "test_map.csv" \\\n        http://localhost:8040/api/testdb/map_test/_stream_load\n'})}),"\n",(0,s.jsx)(t.h3,{id:"step-4-check-the-imported-data",children:"Step 4: Check the imported data"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'mysql> SELECT * FROM map_test;\n+------+-------------------------+\n| id   | c_map                   |\n+------+-------------------------+\n|    1 | {"Emily":101, "age":25} |\n|    2 | {"Benjamin":102}        |\n|    3 | {}                      |\n|    4 | NULL                    |\n+------+-------------------------+\n4 rows in set (0.01 sec)\n'})}),"\n",(0,s.jsx)(t.h2,{id:"json-format-import",children:"JSON format import"}),"\n",(0,s.jsx)(t.h3,{id:"step-1-prepare-the-data-1",children:"Step 1: Prepare the data"}),"\n",(0,s.jsxs)(t.p,{children:["Create the following JSON file, ",(0,s.jsx)(t.code,{children:"test_map.json"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'[\n    {"id":1, "c_map":{"Emily":101, "age":25}},\n    {"id":2, "c_map":{"Benjamin":102}},\n    {"id":3, "c_map":{}},\n    {"id":4, "c_map":null}\n]\n'})}),"\n",(0,s.jsx)(t.h3,{id:"step-2-create-a-table-in-the-database-1",children:"Step 2: Create a table in the database"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'CREATE TABLE map_test (\n    id       INT                 NOT NULL,\n    c_map    MAP<STRING, INT>    NULL\n)\nDUPLICATE KEY(id)\nDISTRIBUTED BY HASH(id) BUCKETS 1\nPROPERTIES (\n    "replication_allocation" = "tag.location.default: 1"\n);\n'})}),"\n",(0,s.jsx)(t.h3,{id:"step-3-load-data-1",children:"Step 3: Load data"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'curl --location-trusted \\\n        -u "root":"" \\\n        -H "format:json" \\\n        -H "columns: id, c_map" \\\n        -H "strip_outer_array:true" \\\n        -T "test_map.json" \\\n        http://localhost:8040/api/testdb/map_test/_stream_load\n'})}),"\n",(0,s.jsx)(t.h3,{id:"step-4-check-the-imported-data-1",children:"Step 4: Check the imported data"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'mysql> SELECT * FROM map_test;\n+------+-------------------------+\n| id   | c_map                   |\n+------+-------------------------+\n|    1 | {"Emily":101, "age":25} |\n|    2 | {"Benjamin":102}        |\n|    3 | {}                      |\n|    4 | NULL                    |\n+------+-------------------------+\n4 rows in set (0.01 sec)\n'})})]})}function c(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},250065:function(e,t,a){a.d(t,{Z:function(){return l},a:function(){return i}});var n=a(667294);let s={},r=n.createContext(s);function i(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);