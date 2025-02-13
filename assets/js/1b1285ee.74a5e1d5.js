"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["5261"],{636267:function(e,n,a){a.r(n),a.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>p,assets:()=>d,toc:()=>l,frontMatter:()=>i});var t=JSON.parse('{"id":"data-operate/import/data-source/azure-storage","title":"Azure Storage","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/data-operate/import/data-source/azure-storage.md","sourceDirName":"data-operate/import/data-source","slug":"/data-operate/import/data-source/azure-storage","permalink":"/docs/data-operate/import/data-source/azure-storage","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Azure Storage","language":"en"},"sidebar":"docs","previous":{"title":"Google Cloud Storage","permalink":"/docs/data-operate/import/data-source/google-cloud-storage"},"next":{"title":"Alibaba Cloud OSS","permalink":"/docs/data-operate/import/data-source/aliyun-oss"}}'),s=a("785893"),r=a("250065");let i={title:"Azure Storage",language:"en"},o=void 0,d={},l=[{value:"load with S3 Load",id:"load-with-s3-load",level:2},{value:"Step 1: Prepare the data",id:"step-1-prepare-the-data",level:3},{value:"Step 2: Create a table in Doris",id:"step-2-create-a-table-in-doris",level:3},{value:"Step 3: Load data using S3 Load",id:"step-3-load-data-using-s3-load",level:3},{value:"Step 4: Check the imported data",id:"step-4-check-the-imported-data",level:3},{value:"Load with TVF",id:"load-with-tvf",level:2},{value:"Step 1: Prepare the data",id:"step-1-prepare-the-data-1",level:3},{value:"Step 2: Create a table in Doris",id:"step-2-create-a-table-in-doris-1",level:3},{value:"Step 3: Load data using TVF",id:"step-3-load-data-using-tvf",level:3},{value:"Step 4: Check the imported data",id:"step-4-check-the-imported-data-1",level:3}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Doris provides two ways to load files from Azure Storage:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use S3 Load to load Azure Storage files into Doris, which is an asynchronous load method."}),"\n",(0,s.jsx)(n.li,{children:"Use TVF to load Azure Storage files into Doris, which is a synchronous load method."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"load-with-s3-load",children:"load with S3 Load"}),"\n",(0,s.jsxs)(n.p,{children:["Use S3 Load to import files on object storage. For detailed steps, please refer to the ",(0,s.jsx)(n.a,{href:"../import-way/broker-load-manual",children:"Broker Load Manual"})]}),"\n",(0,s.jsx)(n.h3,{id:"step-1-prepare-the-data",children:"Step 1: Prepare the data"}),"\n",(0,s.jsx)(n.p,{children:"Create a CSV file s3load_example.csv The file is stored on Azure Storage and its content is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"1,Emily,25\n2,Benjamin,35\n3,Olivia,28\n4,Alexander,60\n5,Ava,17\n6,William,69\n7,Sophia,32\n8,James,64\n9,Emma,37\n10,Liam,64\n"})}),"\n",(0,s.jsx)(n.h3,{id:"step-2-create-a-table-in-doris",children:"Step 2: Create a table in Doris"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE test_s3load(\n    user_id            BIGINT       NOT NULL COMMENT "user id",\n    name               VARCHAR(20)           COMMENT "name",\n    age                INT                   COMMENT "age"\n)\nDUPLICATE KEY(user_id)\nDISTRIBUTED BY HASH(user_id) BUCKETS 10;\n'})}),"\n",(0,s.jsx)(n.h3,{id:"step-3-load-data-using-s3-load",children:"Step 3: Load data using S3 Load"}),"\n",(0,s.jsxs)(n.admonition,{title:"Caution",type:"caution",children:[(0,s.jsxs)(n.p,{children:["Azure Storage requires HTTPS transmission by default, with the corresponding storage account configuration being ",(0,s.jsx)(n.code,{children:"Secure transfer required: Enabled"}),".\nTo access Azure Storage properly, you need to set ",(0,s.jsx)(n.code,{children:"s3_client_http_scheme = https"})," in Doris's ",(0,s.jsx)(n.code,{children:"be.conf"}),"."]}),(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"s3.region"})," setting for Azure S3 properties can be omitted."]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'LOAD LABEL s3_load_2022_04_01\n(\n    DATA INFILE("s3://your_bucket_name/s3load_example.csv")\n    INTO TABLE test_s3load\n    COLUMNS TERMINATED BY ","\n    FORMAT AS "CSV"\n    (user_id, name, age)\n)\nWITH S3\n(\n    "provider" = "AZURE",\n    "s3.endpoint" = "StorageAccountA.blob.core.windows.net",  \n    "s3.region" = "westus3",\n    "s3.access_key" = "<your-ak>",\n    "s3.secret_key" = "<your-sk>"\n)\nPROPERTIES\n(\n    "timeout" = "3600"\n);\n'})}),"\n",(0,s.jsx)(n.h3,{id:"step-4-check-the-imported-data",children:"Step 4: Check the imported data"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM test_s3load;\n"})}),"\n",(0,s.jsx)(n.p,{children:"Results:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql> select * from test_s3load;\n+---------+-----------+------+\n| user_id | name      | age  |\n+---------+-----------+------+\n|       5 | Ava       |   17 |\n|      10 | Liam      |   64 |\n|       7 | Sophia    |   32 |\n|       9 | Emma      |   37 |\n|       1 | Emily     |   25 |\n|       4 | Alexander |   60 |\n|       2 | Benjamin  |   35 |\n|       3 | Olivia    |   28 |\n|       6 | William   |   69 |\n|       8 | James     |   64 |\n+---------+-----------+------+\n10 rows in set (0.04 sec)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"load-with-tvf",children:"Load with TVF"}),"\n",(0,s.jsx)(n.h3,{id:"step-1-prepare-the-data-1",children:"Step 1: Prepare the data"}),"\n",(0,s.jsx)(n.p,{children:"Create a CSV file s3load_example.csv The file is stored on Azure Storage and its content is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"1,Emily,25\n2,Benjamin,35\n3,Olivia,28\n4,Alexander,60\n5,Ava,17\n6,William,69\n7,Sophia,32\n8,James,64\n9,Emma,37\n10,Liam,64\n"})}),"\n",(0,s.jsx)(n.h3,{id:"step-2-create-a-table-in-doris-1",children:"Step 2: Create a table in Doris"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE test_s3load(\n    user_id            BIGINT       NOT NULL COMMENT "user id",\n    name               VARCHAR(20)           COMMENT "name",\n    age                INT                   COMMENT "age"\n)\nDUPLICATE KEY(user_id)\nDISTRIBUTED BY HASH(user_id) BUCKETS 10;\n'})}),"\n",(0,s.jsx)(n.h3,{id:"step-3-load-data-using-tvf",children:"Step 3: Load data using TVF"}),"\n",(0,s.jsxs)(n.admonition,{title:"Caution",type:"caution",children:[(0,s.jsxs)(n.p,{children:["Azure Storage requires HTTPS transmission by default, with the corresponding storage account configuration being ",(0,s.jsx)(n.code,{children:"Secure transfer required: Enabled"}),".\nTo access Azure Storage properly, you need to set ",(0,s.jsx)(n.code,{children:"s3_client_http_scheme = https"})," in Doris's ",(0,s.jsx)(n.code,{children:"be.conf"}),"."]}),(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"s3.region"})," setting for Azure S3 properties can be omitted."]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'INSERT INTO test_s3load\nSELECT * FROM S3\n(\n    "uri" = "s3://your_bucket_name/s3load_example.csv",\n    "format" = "csv",\n    "provider" = "AZURE",\n    "s3.endpoint" = "StorageAccountA.blob.core.windows.net",\n    "s3.region" = "westus3",\n    "s3.access_key" = "<your-ak>",\n    "s3.secret_key" = "<your-sk>",\n    "column_separator" = ",",\n    "csv_schema" = "user_id:int;name:string;age:int"\n);\n'})}),"\n",(0,s.jsx)(n.h3,{id:"step-4-check-the-imported-data-1",children:"Step 4: Check the imported data"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM test_s3load;\n"})}),"\n",(0,s.jsx)(n.p,{children:"Results:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql> select * from test_s3load;\n+---------+-----------+------+\n| user_id | name      | age  |\n+---------+-----------+------+\n|       5 | Ava       |   17 |\n|      10 | Liam      |   64 |\n|       7 | Sophia    |   32 |\n|       9 | Emma      |   37 |\n|       1 | Emily     |   25 |\n|       4 | Alexander |   60 |\n|       2 | Benjamin  |   35 |\n|       3 | Olivia    |   28 |\n|       6 | William   |   69 |\n|       8 | James     |   64 |\n+---------+-----------+------+\n10 rows in set (0.04 sec)\n"})})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return o},a:function(){return i}});var t=a(667294);let s={},r=t.createContext(s);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);