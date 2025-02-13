"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["738335"],{884230:function(e,n,a){a.r(n),a.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>h,assets:()=>d,toc:()=>r,frontMatter:()=>l});var s=JSON.parse('{"id":"data-operate/import/data-source/aliyun-oss","title":"Alibaba Cloud OSS","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/data-operate/import/data-source/aliyun-oss.md","sourceDirName":"data-operate/import/data-source","slug":"/data-operate/import/data-source/aliyun-oss","permalink":"/docs/3.0/data-operate/import/data-source/aliyun-oss","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Alibaba Cloud OSS","language":"en"},"sidebar":"docs","previous":{"title":"Azure Storage","permalink":"/docs/3.0/data-operate/import/data-source/azure-storage"},"next":{"title":"Huawei Cloud OBS","permalink":"/docs/3.0/data-operate/import/data-source/huawei-obs"}}'),i=a("785893"),t=a("250065");let l={title:"Alibaba Cloud OSS",language:"en"},o=void 0,d={},r=[{value:"load with S3 Load",id:"load-with-s3-load",level:2},{value:"Step 1: Prepare the data",id:"step-1-prepare-the-data",level:3},{value:"Step 2: Create a table in Doris",id:"step-2-create-a-table-in-doris",level:3},{value:"Step 3: Load data using S3 Load",id:"step-3-load-data-using-s3-load",level:3},{value:"Step 4: Check the imported data",id:"step-4-check-the-imported-data",level:3},{value:"Load with TVF",id:"load-with-tvf",level:2},{value:"Step 1: Prepare the data",id:"step-1-prepare-the-data-1",level:3},{value:"Step 2: Create a table in Doris",id:"step-2-create-a-table-in-doris-1",level:3},{value:"Step 3: Load data using TVF",id:"step-3-load-data-using-tvf",level:3},{value:"Step 4: Check the imported data",id:"step-4-check-the-imported-data-1",level:3}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Doris provides two ways to load files from Alibaba Cloud OSS:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use S3 Load to load Alibaba Cloud OSS files into Doris, which is an asynchronous load method."}),"\n",(0,i.jsx)(n.li,{children:"Use TVF to load Alibaba Cloud OSS files into Doris, which is a synchronous load method."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"load-with-s3-load",children:"load with S3 Load"}),"\n",(0,i.jsxs)(n.p,{children:["Use S3 Load to import files on object storage. For detailed steps, please refer to the ",(0,i.jsx)(n.a,{href:"../import-way/broker-load-manual",children:"Broker Load Manual"})]}),"\n",(0,i.jsx)(n.h3,{id:"step-1-prepare-the-data",children:"Step 1: Prepare the data"}),"\n",(0,i.jsx)(n.p,{children:"Create a CSV file s3load_example.csv The file is stored on Alibaba Cloud OSS and its content is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"1,Emily,25\n2,Benjamin,35\n3,Olivia,28\n4,Alexander,60\n5,Ava,17\n6,William,69\n7,Sophia,32\n8,James,64\n9,Emma,37\n10,Liam,64\n"})}),"\n",(0,i.jsx)(n.h3,{id:"step-2-create-a-table-in-doris",children:"Step 2: Create a table in Doris"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE test_s3load(\n    user_id            BIGINT       NOT NULL COMMENT "user id",\n    name               VARCHAR(20)           COMMENT "name",\n    age                INT                   COMMENT "age"\n)\nDUPLICATE KEY(user_id)\nDISTRIBUTED BY HASH(user_id) BUCKETS 10;\n'})}),"\n",(0,i.jsx)(n.h3,{id:"step-3-load-data-using-s3-load",children:"Step 3: Load data using S3 Load"}),"\n",(0,i.jsxs)(n.admonition,{title:"Caution",type:"caution",children:[(0,i.jsx)(n.p,{children:"The endpoint URLs for public and internal access are different.\nIf the server and OSS are in the same region, it is recommended to use the internal endpoint link."}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["internal endpoint: ",(0,i.jsx)(n.code,{children:"oss-cn-hangzhou-internal.aliyuncs.com"})]}),"\n",(0,i.jsxs)(n.li,{children:["public endpoint: ",(0,i.jsx)(n.code,{children:"oss-cn-hangzhou.aliyuncs.com"})]}),"\n"]})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'LOAD LABEL s3_load_2022_04_01\n(\n    DATA INFILE("s3://your_bucket_name/s3load_example.csv")\n    INTO TABLE test_s3load\n    COLUMNS TERMINATED BY ","\n    FORMAT AS "CSV"\n    (user_id, name, age)\n)\nWITH S3\n(\n    "provider" = "OSS",\n    "s3.endpoint" = "oss-cn-hangzhou.aliyuncs.com",  \n    "s3.region" = "oss-cn-hangzhou",\n    "s3.access_key" = "<your-ak>",\n    "s3.secret_key" = "<your-sk>"\n)\nPROPERTIES\n(\n    "timeout" = "3600"\n);\n'})}),"\n",(0,i.jsx)(n.h3,{id:"step-4-check-the-imported-data",children:"Step 4: Check the imported data"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM test_s3load;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Results:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select * from test_s3load;\n+---------+-----------+------+\n| user_id | name      | age  |\n+---------+-----------+------+\n|       5 | Ava       |   17 |\n|      10 | Liam      |   64 |\n|       7 | Sophia    |   32 |\n|       9 | Emma      |   37 |\n|       1 | Emily     |   25 |\n|       4 | Alexander |   60 |\n|       2 | Benjamin  |   35 |\n|       3 | Olivia    |   28 |\n|       6 | William   |   69 |\n|       8 | James     |   64 |\n+---------+-----------+------+\n10 rows in set (0.04 sec)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"load-with-tvf",children:"Load with TVF"}),"\n",(0,i.jsx)(n.h3,{id:"step-1-prepare-the-data-1",children:"Step 1: Prepare the data"}),"\n",(0,i.jsx)(n.p,{children:"Create a CSV file s3load_example.csv The file is stored on Alibaba Cloud OSS and its content is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"1,Emily,25\n2,Benjamin,35\n3,Olivia,28\n4,Alexander,60\n5,Ava,17\n6,William,69\n7,Sophia,32\n8,James,64\n9,Emma,37\n10,Liam,64\n"})}),"\n",(0,i.jsx)(n.h3,{id:"step-2-create-a-table-in-doris-1",children:"Step 2: Create a table in Doris"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE test_s3load(\n    user_id            BIGINT       NOT NULL COMMENT "user id",\n    name               VARCHAR(20)           COMMENT "name",\n    age                INT                   COMMENT "age"\n)\nDUPLICATE KEY(user_id)\nDISTRIBUTED BY HASH(user_id) BUCKETS 10;\n'})}),"\n",(0,i.jsx)(n.h3,{id:"step-3-load-data-using-tvf",children:"Step 3: Load data using TVF"}),"\n",(0,i.jsxs)(n.admonition,{title:"Caution",type:"caution",children:[(0,i.jsx)(n.p,{children:"The endpoint URLs for public and internal access are different.\nIf the server and OSS are in the same region, it is recommended to use the internal endpoint link."}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["internal endpoint: ",(0,i.jsx)(n.code,{children:"oss-cn-hangzhou-internal.aliyuncs.com"})]}),"\n",(0,i.jsxs)(n.li,{children:["public endpoint: ",(0,i.jsx)(n.code,{children:"oss-cn-hangzhou.aliyuncs.com"})]}),"\n"]})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'INSERT INTO test_s3load\nSELECT * FROM S3\n(\n    "uri" = "s3://your_bucket_name/s3load_example.csv",\n    "format" = "csv",\n    "provider" = "OSS",\n    "s3.endpoint" = "oss-cn-hangzhou.aliyuncs.com",\n    "s3.region" = "oss-cn-hangzhou",\n    "s3.access_key" = "<your-ak>",\n    "s3.secret_key" = "<your-sk>",\n    "column_separator" = ",",\n    "csv_schema" = "user_id:int;name:string;age:int"\n);\n'})}),"\n",(0,i.jsx)(n.h3,{id:"step-4-check-the-imported-data-1",children:"Step 4: Check the imported data"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM test_s3load;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Results:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select * from test_s3load;\n+---------+-----------+------+\n| user_id | name      | age  |\n+---------+-----------+------+\n|       5 | Ava       |   17 |\n|      10 | Liam      |   64 |\n|       7 | Sophia    |   32 |\n|       9 | Emma      |   37 |\n|       1 | Emily     |   25 |\n|       4 | Alexander |   60 |\n|       2 | Benjamin  |   35 |\n|       3 | Olivia    |   28 |\n|       6 | William   |   69 |\n|       8 | James     |   64 |\n+---------+-----------+------+\n10 rows in set (0.04 sec)\n"})})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return o},a:function(){return l}});var s=a(667294);let i={},t=s.createContext(i);function l(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);