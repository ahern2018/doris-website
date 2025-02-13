"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["30197"],{165566:function(e,a,n){n.r(a),n.d(a,{metadata:()=>o,contentTitle:()=>r,default:()=>h,assets:()=>i,toc:()=>l,frontMatter:()=>c});var o=JSON.parse('{"id":"lakehouse/catalogs/jdbc-oceanbase-catalog","title":"Oceanbase JDBC Catalog","description":"\x3c!--","source":"@site/docs/lakehouse/catalogs/jdbc-oceanbase-catalog.md","sourceDirName":"lakehouse/catalogs","slug":"/lakehouse/catalogs/jdbc-oceanbase-catalog","permalink":"/docs/dev/lakehouse/catalogs/jdbc-oceanbase-catalog","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Oceanbase JDBC Catalog","language":"en"},"sidebar":"docs","previous":{"title":"SAP HANA JDBC Catalog","permalink":"/docs/dev/lakehouse/catalogs/jdbc-saphana-catalog"},"next":{"title":"Analyze Files on S3/HDFS","permalink":"/docs/dev/lakehouse/file-analysis"}}'),t=n("785893"),s=n("250065");let c={title:"Oceanbase JDBC Catalog",language:"en"},r=void 0,i={},l=[{value:"Usage Notes",id:"usage-notes",level:2},{value:"Connect to OceanBase",id:"connect-to-oceanbase",level:2},{value:"Schema Compatibility",id:"schema-compatibility",level:2}];function d(e){let a={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"Doris JDBC Catalog supports connecting to OceanBase database through the standard JDBC interface. This document describes how to configure the OceanBase database connection."}),"\n",(0,t.jsxs)(a.p,{children:["For an overview of JDBC Catalog, please refer to: ",(0,t.jsx)(a.a,{href:"/docs/dev/lakehouse/catalogs/jdbc-catalog-overview",children:"JDBC Catalog Overview"})]}),"\n",(0,t.jsx)(a.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,t.jsx)(a.p,{children:"To connect to the OceanBase database, you need"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"OceanBase 3.1.0 or higher"}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["JDBC driver for OceanBase database, which you can download the latest or specified version of OceanBase JDBC driver from ",(0,t.jsx)(a.a,{href:"https://mvnrepository.com/artifact/com.oceanbase/oceanbase-client",children:"Maven Repository"}),". It is recommended to use OceanBase Connector/J 2.4.8 or above."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Network connection between each FE and BE node of Doris and the OceanBase server."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"connect-to-oceanbase",children:"Connect to OceanBase"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"CREATE CATALOG oceanbase_catalog PROPERTIES (\n    'type' = 'jdbc',\n    'user' = 'username',\n    'password' = 'pwd',\n    'jdbc_url' = 'jdbc:oceanbase://host:port/db',\n    'driver_url' = 'oceanbase-client-2.4.8.jar',\n    'driver_class' = 'com.oceanbase.jdbc.Driver'\n)\n"})}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"jdbc_url"})," defines the connection information and parameters to be passed to the OceanBase JDBC driver. Supported URL parameters can be found in ",(0,t.jsx)(a.a,{href:"https://www.oceanbase.com/docs/common-oceanbase-connector-j-cn-1000000000517111",children:"OceanBase JDBC Driver Configuration"}),"."]}),"\n",(0,t.jsx)(a.h2,{id:"schema-compatibility",children:"Schema Compatibility"}),"\n",(0,t.jsx)(a.p,{children:"When creating an OceanBase Catalog, Doris will automatically recognize whether OceanBase is in MySQL or Oracle mode to correctly parse metadata."}),"\n",(0,t.jsx)(a.p,{children:"The hierarchy mapping, type mapping, and query optimization in different modes are handled in the same way as the Catalog of MySQL or Oracle databases, and you can refer to the documentation"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"/docs/dev/lakehouse/catalogs/jdbc-mysql-catalog",children:"MySQL Catalog"})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"/docs/dev/lakehouse/catalogs/jdbc-oracle-catalog",children:"Oracle Catalog"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,a,n){n.d(a,{Z:function(){return r},a:function(){return c}});var o=n(667294);let t={},s=o.createContext(t);function c(e){let a=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),o.createElement(s.Provider,{value:a},e.children)}}}]);