"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["929540"],{178446:function(e,t,a){a.r(t),a.d(t,{metadata:()=>n,contentTitle:()=>l,default:()=>c,assets:()=>i,toc:()=>p,frontMatter:()=>o});var n=JSON.parse('{"id":"data-operate/import/complex-types/bitmap","title":"Bitmap","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/data-operate/import/complex-types/bitmap.md","sourceDirName":"data-operate/import/complex-types","slug":"/data-operate/import/complex-types/bitmap","permalink":"/docs/3.0/data-operate/import/complex-types/bitmap","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Bitmap","language":"en"},"sidebar":"docs","previous":{"title":"JSON","permalink":"/docs/3.0/data-operate/import/complex-types/json"},"next":{"title":"HLL","permalink":"/docs/3.0/data-operate/import/complex-types/hll"}}'),s=a("785893"),r=a("250065");let o={title:"Bitmap",language:"en"},l=void 0,i={},p=[{value:"Usage Example",id:"usage-example",level:2},{value:"Step 1: Prepare Data",id:"step-1-prepare-data",level:3},{value:"Step 2: Create Table in Database",id:"step-2-create-table-in-database",level:3},{value:"Step 3: Load Data",id:"step-3-load-data",level:3},{value:"Step 4: Check Loaded Data",id:"step-4-check-loaded-data",level:3}];function d(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The BITMAP type can be used in Duplicate tables, Unique tables, and Aggregate tables, and can only be used as a Key type, not as a Value column. When using the BITMAP type in an Aggregate table, the table must be created with the aggregate type BITMAP_UNION. Users do not need to specify length and default values. The length is controlled by the system based on the degree of data aggregation. For more documentation, refer to ",(0,s.jsx)(t.a,{href:"/docs/3.0/sql-manual/sql-data-types/aggregate/BITMAP",children:"Bitmap"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"usage-example",children:"Usage Example"}),"\n",(0,s.jsx)(t.h3,{id:"step-1-prepare-data",children:"Step 1: Prepare Data"}),"\n",(0,s.jsx)(t.p,{children:"Create the following CSV file: test_bitmap.csv"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"1|koga|17723\n2|nijg|146285\n3|lojn|347890\n4|lofn|489871\n5|jfin|545679\n6|kon|676724\n7|nhga|767689\n8|nfubg|879878\n9|huang|969798\n10|buag|97997\n"})}),"\n",(0,s.jsx)(t.h3,{id:"step-2-create-table-in-database",children:"Step 2: Create Table in Database"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'CREATE TABLE testdb.test_bitmap(\n    typ_id     BIGINT                NULL   COMMENT "ID",\n    hou        VARCHAR(10)           NULL   COMMENT "one",\n    arr        BITMAP  BITMAP_UNION  NOT NULL   COMMENT "two"\n)\nAGGREGATE KEY(typ_id,hou)\nDISTRIBUTED BY HASH(typ_id,hou) BUCKETS 10;\n'})}),"\n",(0,s.jsx)(t.h3,{id:"step-3-load-data",children:"Step 3: Load Data"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'curl --location-trusted -u <doris_user>:<doris_password> \\\n    -H "column_separator:|" \\\n    -H "columns:typ_id,hou,arr,arr=to_bitmap(arr)" \\\n    -T test_bitmap.csv \\\n    -XPUT http://<fe_ip>:<fe_http_port>/api/testdb/test_bitmap/_stream_load\n'})}),"\n",(0,s.jsx)(t.h3,{id:"step-4-check-loaded-data",children:"Step 4: Check Loaded Data"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"mysql> select typ_id,hou,bitmap_to_string(arr) from testdb.test_bitmap;\n+--------+-------+-----------------------+\n| typ_id | hou   | bitmap_to_string(arr) |\n+--------+-------+-----------------------+\n|      4 | lofn  | 489871                |\n|      6 | kon   | 676724                |\n|      9 | huang | 969798                |\n|      3 | lojn  | 347890                |\n|      8 | nfubg | 879878                |\n|      7 | nhga  | 767689                |\n|      1 | koga  | 17723                 |\n|      2 | nijg  | 146285                |\n|      5 | jfin  | 545679                |\n|     10 | buag  | 97997                 |\n+--------+-------+-----------------------+\n10 rows in set (0.07 sec)\n"})})]})}function c(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,t,a){a.d(t,{Z:function(){return l},a:function(){return o}});var n=a(667294);let s={},r=n.createContext(s);function o(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);