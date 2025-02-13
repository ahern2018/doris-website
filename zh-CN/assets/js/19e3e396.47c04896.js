"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["670867"],{730980:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>i,default:()=>h,assets:()=>a,toc:()=>t,frontMatter:()=>c});var r=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/compute-management/CREATE-RESOURCE","title":"CREATE RESOURCE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/cluster-management/compute-management/CREATE-RESOURCE.md","sourceDirName":"sql-manual/sql-statements/cluster-management/compute-management","slug":"/sql-manual/sql-statements/cluster-management/compute-management/CREATE-RESOURCE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/cluster-management/compute-management/CREATE-RESOURCE","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"CREATE RESOURCE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW BROKER","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/cluster-management/instance-management/SHOW-BROKER"},"next":{"title":"ALTER RESOURCE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/cluster-management/compute-management/ALTER-RESOURCE"}}'),l=s("785893"),d=s("250065");let c={title:"CREATE RESOURCE",language:"zh-CN"},i=void 0,a={},t=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u521B\u5EFA\u8D44\u6E90\u3002\u4EC5 root \u6216 admin \u7528\u6237\u53EF\u4EE5\u521B\u5EFA\u8D44\u6E90\u3002\u76EE\u524D\u652F\u6301 Spark, ODBC, S3, JDBC, HDFS, HMS, ES \u5916\u90E8\u8D44\u6E90\u3002\n\u5C06\u6765\u5176\u4ED6\u5916\u90E8\u8D44\u6E90\u53EF\u80FD\u4F1A\u52A0\u5165\u5230 Doris \u4E2D\u4F7F\u7528\uFF0C\u5982 Spark/GPU \u7528\u4E8E\u67E5\u8BE2\uFF0CHDFS/S3 \u7528\u4E8E\u5916\u90E8\u5B58\u50A8\uFF0CMapReduce \u7528\u4E8E ETL \u7B49\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE [EXTERNAL] RESOURCE "<resource_name>"\nPROPERTIES (\n   `<property>`\n    [ , ... ]\n);\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n",(0,l.jsxs)(n.p,{children:["1.",(0,l.jsx)(n.code,{children:"<property>"})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"<property>"})," \u683C\u5F0F\u4E3A ",(0,l.jsx)(n.code,{children:"<key>"})," = ",(0,l.jsx)(n.code,{children:"<value>"}),"\uFF0C",(0,l.jsx)(n.code,{children:"<key>"}),"\u7684\u5177\u4F53\u53EF\u9009\u503C\u5982\u4E0B\uFF1A"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u53C2\u6570"}),(0,l.jsx)(n.th,{children:"\u8BF4\u660E"}),(0,l.jsx)(n.th,{children:"\u662F\u5426\u5FC5\u586B"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<type>"})}),(0,l.jsx)(n.td,{children:"\u6307\u5B9A\u8D44\u6E90\u7684\u7C7B\u578B\uFF0C\u652F\u6301 spark/odbc_catalog/s3/jdbc/hdfs/hms/es\u3002"}),(0,l.jsx)(n.td,{children:"\u662F"})]})})]}),"\n",(0,l.jsxs)(n.p,{children:["\u6839\u636E",(0,l.jsx)(n.code,{children:"<type>"}),"\u7684\u4E0D\u540C PROPERTIES \u7684\u53C2\u6570\u6709\u6240\u4E0D\u540C\uFF0C\u5177\u4F53\u89C1\u793A\u4F8B\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"1. \u521B\u5EFA yarn cluster \u6A21\u5F0F\uFF0C\u540D\u4E3A spark0 \u7684 Spark \u8D44\u6E90\u3002"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE EXTERNAL RESOURCE "spark0"\nPROPERTIES\n(\n  "type" = "spark",\n  "spark.master" = "yarn",\n  "spark.submit.deployMode" = "cluster",\n  "spark.jars" = "xxx.jar,yyy.jar",\n  "spark.files" = "/tmp/aaa,/tmp/bbb",\n  "spark.executor.memory" = "1g",\n  "spark.yarn.queue" = "queue0",\n  "spark.hadoop.yarn.resourcemanager.address" = "127.0.0.1:9999",\n  "spark.hadoop.fs.defaultFS" = "hdfs://127.0.0.1:10000",\n  "working_dir" = "hdfs://127.0.0.1:10000/tmp/doris",\n  "broker" = "broker0",\n  "broker.username" = "user0",\n  "broker.password" = "password0"\n);\n'})}),"\n",(0,l.jsx)(n.p,{children:"Spark \u76F8\u5173\u53C2\u6570\u5982\u4E0B\uFF1A"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"spark.master: \u5FC5\u586B\uFF0C\u76EE\u524D\u652F\u6301 yarn\uFF0Cspark://host:port\u3002"}),"\n",(0,l.jsx)(n.li,{children:"spark.submit.deployMode: Spark \u7A0B\u5E8F\u7684\u90E8\u7F72\u6A21\u5F0F\uFF0C\u5FC5\u586B\uFF0C\u652F\u6301 cluster\uFF0Cclient \u4E24\u79CD\u3002"}),"\n",(0,l.jsx)(n.li,{children:"spark.hadoop.yarn.resourcemanager.address: master \u4E3A yarn \u65F6\u5FC5\u586B\u3002"}),"\n",(0,l.jsx)(n.li,{children:"spark.hadoop.fs.defaultFS: master \u4E3A yarn \u65F6\u5FC5\u586B\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["\u5176\u4ED6\u53C2\u6570\u4E3A\u53EF\u9009\uFF0C\u53C2\u8003",(0,l.jsx)(n.a,{href:"http://spark.apache.org/docs/latest/configuration.html",children:"\u8FD9\u91CC"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Spark \u7528\u4E8E ETL \u65F6\u9700\u8981\u6307\u5B9A working_dir \u548C broker\u3002\u8BF4\u660E\u5982\u4E0B\uFF1A"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"working_dir: ETL \u4F7F\u7528\u7684\u76EE\u5F55\u3002spark \u4F5C\u4E3A ETL \u8D44\u6E90\u4F7F\u7528\u65F6\u5FC5\u586B\u3002\u4F8B\u5982\uFF1Ahdfs://host:port/tmp/doris\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["broker: broker \u540D\u5B57\u3002spark \u4F5C\u4E3A ETL \u8D44\u6E90\u4F7F\u7528\u65F6\u5FC5\u586B\u3002\u9700\u8981\u4F7F\u7528",(0,l.jsx)(n.code,{children:"ALTER SYSTEM ADD BROKER"})," \u547D\u4EE4\u63D0\u524D\u5B8C\u6210\u914D\u7F6E\u3002"]}),"\n",(0,l.jsx)(n.li,{children:"broker.property_key: broker \u8BFB\u53D6 ETL \u751F\u6210\u7684\u4E2D\u95F4\u6587\u4EF6\u65F6\u9700\u8981\u6307\u5B9A\u7684\u8BA4\u8BC1\u4FE1\u606F\u7B49\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"2. \u521B\u5EFA ODBC resource"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE EXTERNAL RESOURCE `oracle_odbc`\nPROPERTIES (\n   "type" = "odbc_catalog",\n   "host" = "192.168.0.1",\n   "port" = "8086",\n   "user" = "test",\n   "password" = "test",\n   "database" = "test",\n   "odbc_type" = "oracle",\n   "driver" = "Oracle 19 ODBC driver"\n);\n'})}),"\n",(0,l.jsx)(n.p,{children:"ODBC \u7684\u76F8\u5173\u53C2\u6570\u5982\u4E0B\uFF1A"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"hosts\uFF1A\u5916\u8868\u6570\u636E\u5E93\u7684 IP \u5730\u5740"}),"\n",(0,l.jsx)(n.li,{children:"driver\uFF1AODBC \u5916\u8868\u7684 Driver \u540D\uFF0C\u8BE5\u540D\u5B57\u9700\u8981\u548C be/conf/odbcinst.ini \u4E2D\u7684 Driver \u540D\u4E00\u81F4\u3002"}),"\n",(0,l.jsx)(n.li,{children:"odbc_type\uFF1A\u5916\u8868\u6570\u636E\u5E93\u7684\u7C7B\u578B\uFF0C\u5F53\u524D\u652F\u6301 oracle, mysql, postgresql"}),"\n",(0,l.jsx)(n.li,{children:"user\uFF1A\u5916\u8868\u6570\u636E\u5E93\u7684\u7528\u6237\u540D"}),"\n",(0,l.jsx)(n.li,{children:"password\uFF1A\u5BF9\u5E94\u7528\u6237\u7684\u5BC6\u7801\u4FE1\u606F"}),"\n",(0,l.jsx)(n.li,{children:"charset: \u6570\u636E\u5E93\u94FE\u63A5\u7684\u7F16\u7801\u4FE1\u606F"}),"\n",(0,l.jsx)(n.li,{children:"\u53E6\u5916\u8FD8\u652F\u6301\u6BCF\u4E2A ODBC Driver \u5B9E\u73B0\u81EA\u5B9A\u4E49\u7684\u53C2\u6570\uFF0C\u53C2\u89C1\u5BF9\u5E94 ODBC Driver \u7684\u8BF4\u660E"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"3. \u521B\u5EFA S3 resource"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE RESOURCE "remote_s3"\nPROPERTIES\n(\n   "type" = "s3",\n   "s3.endpoint" = "bj.s3.com",\n   "s3.region" = "bj",\n   "s3.access_key" = "bbb",\n   "s3.secret_key" = "aaaa",\n   -- the followings are optional\n   "s3.connection.maximum" = "50",\n   "s3.connection.request.timeout" = "3000",\n   "s3.connection.timeout" = "1000"\n);\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679C s3 reource \u5728",(0,l.jsx)(n.a,{href:"../../../../../docs/advanced/cold_hot_separation.md",children:"\u51B7\u70ED\u5206\u5C42"}),"\u4E2D\u4F7F\u7528\uFF0C\u9700\u8981\u6DFB\u52A0\u989D\u5916\u7684\u5B57\u6BB5\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE RESOURCE "remote_s3"\nPROPERTIES\n(\n   "type" = "s3",\n   "s3.endpoint" = "bj.s3.com",\n   "s3.region" = "bj",\n   "s3.access_key" = "bbb",\n   "s3.secret_key" = "aaaa",\n   -- required by cooldown\n   "s3.root.path" = "/path/to/root",\n   "s3.bucket" = "test-bucket"\n);\n'})}),"\n",(0,l.jsx)(n.p,{children:"S3 \u76F8\u5173\u53C2\u6570\u5982\u4E0B\uFF1A"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u5FC5\u9700\u53C2\u6570\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"s3.endpoint"}),"\uFF1As3 endpoint"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"s3.region"}),"\uFF1As3 region"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"s3.root.path"}),"\uFF1As3 \u6839\u76EE\u5F55"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"s3.access_key"}),"\uFF1As3 access key"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"s3.secret_key"}),"\uFF1As3 secret key"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"s3.bucket"}),"\uFF1As3 \u7684\u6876\u540D"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u53EF\u9009\u53C2\u6570\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"s3.connection.maximum"}),"\uFF1As3 \u6700\u5927\u8FDE\u63A5\u6570\u91CF\uFF0C\u9ED8\u8BA4\u4E3A 50"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"s3.connection.request.timeout"}),"\uFF1As3 \u8BF7\u6C42\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2\uFF0C\u9ED8\u8BA4\u4E3A 3000"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"s3.connection.timeout"}),"\uFF1As3 \u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2\uFF0C\u9ED8\u8BA4\u4E3A 1000"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"4. \u521B\u5EFA JDBC resource"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE RESOURCE mysql_resource PROPERTIES (\n   "type"="jdbc",\n   "user"="root",\n   "password"="123456",\n   "jdbc_url" = "jdbc:mysql://127.0.0.1:3316/doris_test?useSSL=false",\n   "driver_url" = "https://doris-community-test-1308700295.cos.ap-hongkong.myqcloud.com/jdbc_driver/mysql-connector-java-8.0.25.jar",\n"driver_class" = "com.mysql.cj.jdbc.Driver"\n);\n'})}),"\n",(0,l.jsx)(n.p,{children:"JDBC \u7684\u76F8\u5173\u53C2\u6570\u5982\u4E0B\uFF1A"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"user\uFF1A\u8FDE\u63A5\u6570\u636E\u5E93\u4F7F\u7528\u7684\u7528\u6237\u540D"}),"\n",(0,l.jsx)(n.li,{children:"password\uFF1A\u8FDE\u63A5\u6570\u636E\u5E93\u4F7F\u7528\u7684\u5BC6\u7801"}),"\n",(0,l.jsx)(n.li,{children:"jdbc_url: \u8FDE\u63A5\u5230\u6307\u5B9A\u6570\u636E\u5E93\u7684\u6807\u8BC6\u7B26"}),"\n",(0,l.jsx)(n.li,{children:"driver_url: jdbc \u9A71\u52A8\u5305\u7684 url"}),"\n",(0,l.jsx)(n.li,{children:"driver_class: jdbc \u9A71\u52A8\u7C7B"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"5. \u521B\u5EFA HDFS resource"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE RESOURCE hdfs_resource PROPERTIES (\n   "type"="hdfs",\n   "hadoop.username"="user",\n   "dfs.nameservices" = "my_ha",\n   "dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n   "dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n   "dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n   "dfs.client.failover.proxy.provider.my_ha" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n);\n'})}),"\n",(0,l.jsx)(n.p,{children:"HDFS \u76F8\u5173\u53C2\u6570\u5982\u4E0B\uFF1A"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"fs.defaultFS: namenode \u5730\u5740\u548C\u7AEF\u53E3"}),"\n",(0,l.jsx)(n.li,{children:"hadoop.username: hdfs \u7528\u6237\u540D"}),"\n",(0,l.jsx)(n.li,{children:"dfs.nameservices: name service \u540D\u79F0\uFF0C\u4E0E hdfs-site.xml \u4FDD\u6301\u4E00\u81F4"}),"\n",(0,l.jsx)(n.li,{children:"dfs.ha.namenodes.[nameservice ID]: namenode \u7684 id \u5217\u8868\uFF0C\u4E0E hdfs-site.xml \u4FDD\u6301\u4E00\u81F4"}),"\n",(0,l.jsx)(n.li,{children:"dfs.namenode.rpc-address.[nameservice ID].[name node ID]: Name node \u7684 rpc \u5730\u5740\uFF0C\u6570\u91CF\u4E0E namenode \u6570\u91CF\u76F8\u540C\uFF0C\u4E0E hdfs-site.xml \u4FDD\u6301\u4E00\u81F4"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"6. \u521B\u5EFA HMS resource"})}),"\n",(0,l.jsxs)(n.p,{children:["HMS resource \u7528\u4E8E ",(0,l.jsx)(n.a,{href:"../../../../lakehouse/datalake-analytics/hive",children:"hms catalog"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"CREATE RESOURCE hms_resource PROPERTIES (\n   'type'='hms',\n   'hive.metastore.uris' = 'thrift://127.0.0.1:7004',\n   'dfs.nameservices'='HANN',\n   'dfs.ha.namenodes.HANN'='nn1,nn2',\n   'dfs.namenode.rpc-address.HANN.nn1'='nn1_host:rpc_port',\n   'dfs.namenode.rpc-address.HANN.nn2'='nn2_host:rpc_port',\n   'dfs.client.failover.proxy.provider.HANN'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n"})}),"\n",(0,l.jsx)(n.p,{children:"HMS \u7684\u76F8\u5173\u53C2\u6570\u5982\u4E0B\uFF1A"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"hive.metastore.uris: hive metastore server \u5730\u5740\n\u53EF\u9009\u53C2\u6570\uFF1A"}),"\n",(0,l.jsx)(n.li,{children:"dfs.*: \u5982\u679C hive \u6570\u636E\u5B58\u653E\u5728 hdfs\uFF0C\u9700\u8981\u6DFB\u52A0\u7C7B\u4F3C HDFS resource \u7684\u53C2\u6570\uFF0C\u4E5F\u53EF\u4EE5\u5C06 hive-site.xml \u62F7\u8D1D\u5230 fe/conf \u76EE\u5F55\u4E0B"}),"\n",(0,l.jsxs)(n.li,{children:["s3.*: \u5982\u679C hive \u6570\u636E\u5B58\u653E\u5728 s3\uFF0C\u9700\u8981\u6DFB\u52A0\u7C7B\u4F3C S3 resource \u7684\u53C2\u6570\u3002\u5982\u679C\u8FDE\u63A5 ",(0,l.jsx)(n.a,{href:"https://www.aliyun.com/product/bigdata/dlf",children:"\u963F\u91CC\u4E91 Data Lake Formation"}),"\uFF0C\u53EF\u4EE5\u5C06 hive-site.xml \u62F7\u8D1D\u5230 fe/conf \u76EE\u5F55\u4E0B"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"7. \u521B\u5EFA ES resource"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE RESOURCE es_resource PROPERTIES (\n   "type"="es",\n   "hosts"="http://127.0.0.1:29200",\n   "nodes_discovery"="false",\n   "enable_keyword_sniff"="true"\n);\n'})}),"\n",(0,l.jsx)(n.p,{children:"ES \u7684\u76F8\u5173\u53C2\u6570\u5982\u4E0B\uFF1A"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"hosts: ES \u5730\u5740\uFF0C\u53EF\u4EE5\u662F\u4E00\u4E2A\u6216\u591A\u4E2A\uFF0C\u4E5F\u53EF\u4EE5\u662F ES \u7684\u8D1F\u8F7D\u5747\u8861\u5730\u5740"}),"\n",(0,l.jsx)(n.li,{children:"user: ES \u7528\u6237\u540D"}),"\n",(0,l.jsx)(n.li,{children:"password: \u5BF9\u5E94\u7528\u6237\u7684\u5BC6\u7801\u4FE1\u606F"}),"\n",(0,l.jsx)(n.li,{children:"enable_docvalue_scan: \u662F\u5426\u5F00\u542F\u901A\u8FC7 ES/Lucene \u5217\u5F0F\u5B58\u50A8\u83B7\u53D6\u67E5\u8BE2\u5B57\u6BB5\u7684\u503C\uFF0C\u9ED8\u8BA4\u4E3A true"}),"\n",(0,l.jsx)(n.li,{children:"enable_keyword_sniff: \u662F\u5426\u5BF9 ES \u4E2D\u5B57\u7B26\u4E32\u5206\u8BCD\u7C7B\u578B text.fields \u8FDB\u884C\u63A2\u6D4B\uFF0C\u901A\u8FC7 keyword \u8FDB\u884C\u67E5\u8BE2 (\u9ED8\u8BA4\u4E3A true\uFF0C\u8BBE\u7F6E\u4E3A false \u4F1A\u6309\u7167\u5206\u8BCD\u540E\u7684\u5185\u5BB9\u5339\u914D)"}),"\n",(0,l.jsx)(n.li,{children:"nodes_discovery: \u662F\u5426\u5F00\u542F ES \u8282\u70B9\u53D1\u73B0\uFF0C\u9ED8\u8BA4\u4E3A true\uFF0C\u5728\u7F51\u7EDC\u9694\u79BB\u73AF\u5883\u4E0B\u8BBE\u7F6E\u4E3A false\uFF0C\u53EA\u8FDE\u63A5\u6307\u5B9A\u8282\u70B9"}),"\n",(0,l.jsx)(n.li,{children:"http_ssl_enabled: ES \u662F\u5426\u5F00\u542F https \u8BBF\u95EE\u6A21\u5F0F\uFF0C\u76EE\u524D\u5728 fe/be \u5B9E\u73B0\u65B9\u5F0F\u4E3A\u4FE1\u4EFB\u6240\u6709"}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return c}});var r=s(667294);let l={},d=r.createContext(l);function c(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);