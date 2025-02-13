"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["480835"],{542920:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>d,default:()=>h,assets:()=>a,toc:()=>i,frontMatter:()=>t});var r=JSON.parse('{"id":"sql-manual/sql-statements/catalog/CREATE-CATALOG","title":"CREATE CATALOG","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/catalog/CREATE-CATALOG.md","sourceDirName":"sql-manual/sql-statements/catalog","slug":"/sql-manual/sql-statements/catalog/CREATE-CATALOG","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/catalog/CREATE-CATALOG","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"CREATE CATALOG","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW TRANSACTION","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/transaction/SHOW-TRANSACTION"},"next":{"title":"ALTER CATALOG","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/catalog/ALTER-CATALOG"}}'),l=s("785893"),c=s("250065");let t={title:"CREATE CATALOG",language:"zh-CN"},d=void 0,a={},i=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u521B\u5EFA\u5916\u90E8\u6570\u636E\u76EE\u5F55\uFF08catalog\uFF09"}),"\n",(0,l.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG [IF NOT EXISTS] <catalog_name> [ COMMENT "<comment>"]\n	PROPERTIES ("<key>"="<value>" [, ... ]);\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"hms\uFF1AHive MetaStore"}),"\n",(0,l.jsx)(n.li,{children:"es\uFF1AElasticsearch"}),"\n",(0,l.jsx)(n.li,{children:"jdbc\uFF1A\u6570\u636E\u5E93\u8BBF\u95EE\u7684\u6807\u51C6\u63A5\u53E3 (JDBC), \u5F53\u524D\u652F\u6301 MySQL \u548C PostgreSQL"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["1. ",(0,l.jsx)(n.code,{children:"<catalog_name>"})]})}),"\n",(0,l.jsx)(n.p,{children:"\u9700\u8981\u521B\u5EFA catalog \u7684\u540D\u5B57"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["2. ",(0,l.jsx)(n.code,{children:'"<key>"="<value>"'})]})}),"\n",(0,l.jsx)(n.p,{children:"\u9700\u8981\u521B\u5EFA catalog \u7684\u53C2\u6570"}),"\n",(0,l.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["1. ",(0,l.jsx)(n.code,{children:"<comment>"})]})}),"\n",(0,l.jsx)(n.p,{children:"\u9700\u8981\u521B\u5EFA catalog \u7684\u6CE8\u91CA"}),"\n",(0,l.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"CREATE_PRIV"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Catalog"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u9700\u8981\u6709\u5BF9\u5E94catalog\u7684CREATE_PRIV\u6743\u9650"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u65B0\u5EFA\u6570\u636E\u76EE\u5F55 hive"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"CREATE CATALOG hive comment 'hive catalog' PROPERTIES (\n	'type'='hms',\n	'hive.metastore.uris' = 'thrift://127.0.0.1:7004',\n	'dfs.nameservices'='HANN',\n	'dfs.ha.namenodes.HANN'='nn1,nn2',\n	'dfs.namenode.rpc-address.HANN.nn1'='nn1_host:rpc_port',\n	'dfs.namenode.rpc-address.HANN.nn2'='nn2_host:rpc_port',\n	'dfs.client.failover.proxy.provider.HANN'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u65B0\u5EFA\u6570\u636E\u76EE\u5F55 es"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG es PROPERTIES (\n	"type"="es",\n	"hosts"="http://127.0.0.1:9200"\n);\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u65B0\u5EFA\u6570\u636E\u76EE\u5F55 jdbc"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"mysql"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG jdbc PROPERTIES (\n	"type"="jdbc",\n	"user"="root",\n	"password"="123456",\n	"jdbc_url" = "jdbc:mysql://127.0.0.1:3316/doris_test?useSSL=false",\n	"driver_url" = "https://doris-community-test-1308700295.cos.ap-hongkong.myqcloud.com/jdbc_driver/mysql-connector-java-8.0.25.jar",\n	"driver_class" = "com.mysql.cj.jdbc.Driver"\n);\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"postgresql"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG jdbc PROPERTIES (\n	"type"="jdbc",\n	"user"="postgres",\n	"password"="123456",\n	"jdbc_url" = "jdbc:postgresql://127.0.0.1:5432/demo",\n	"driver_url" = "file:///path/to/postgresql-42.5.1.jar",\n	"driver_class" = "org.postgresql.Driver"\n);\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"clickhouse"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG jdbc PROPERTIES (\n    "type"="jdbc",\n    "user"="default",\n    "password"="123456",\n    "jdbc_url" = "jdbc:clickhouse://127.0.0.1:8123/demo",\n    "driver_url" = "file:///path/to/clickhouse-jdbc-0.3.2-patch11-all.jar",\n    "driver_class" = "com.clickhouse.jdbc.ClickHouseDriver"\n)\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"oracle"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG jdbc PROPERTIES (\n	"type"="jdbc",\n	"user"="doris",\n	"password"="123456",\n	"jdbc_url" = "jdbc:oracle:thin:@127.0.0.1:1521:helowin",\n	"driver_url" = "file:///path/to/ojdbc8.jar",\n	"driver_class" = "oracle.jdbc.driver.OracleDriver"\n);	\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"SQLServer"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG sqlserver_catalog PROPERTIES (\n	"type"="jdbc",\n	"user"="SA",\n	"password"="Doris123456",\n	"jdbc_url" = "jdbc:sqlserver://localhost:1433;DataBaseName=doris_test",\n	"driver_url" = "file:///path/to/mssql-jdbc-11.2.3.jre8.jar",\n	"driver_class" = "com.microsoft.sqlserver.jdbc.SQLServerDriver"\n);	\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"SAP HANA"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG saphana_catalog PROPERTIES (\n   "type"="jdbc",\n   "user"="SYSTEM",\n   "password"="SAPHANA",\n   "jdbc_url" = "jdbc:sap://localhost:31515/TEST",\n   "driver_url" = "file:///path/to/ngdbc.jar",\n   "driver_class" = "com.sap.db.jdbc.Driver"\n);\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Trino"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG trino_catalog PROPERTIES (\n   "type"="jdbc",\n   "user"="hadoop",\n   "password"="",\n   "jdbc_url" = "jdbc:trino://localhost:8080/hive",\n   "driver_url" = "file:///path/to/trino-jdbc-389.jar",\n   "driver_class" = "io.trino.jdbc.TrinoDriver"\n);\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"OceanBase"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG oceanbase_catalog PROPERTIES (\n   "type"="jdbc",\n   "user"="root",\n   "password"="",\n   "jdbc_url" = "jdbc:oceanbase://localhost:2881/demo",\n   "driver_url" = "file:///path/to/oceanbase-client-2.4.2.jar",\n   "driver_class" = "com.oceanbase.jdbc.Driver"\n);\n'})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return t}});var r=s(667294);let l={},c=r.createContext(l);function t(e){let n=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);