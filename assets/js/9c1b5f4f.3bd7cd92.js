"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["166950"],{877473:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>h,assets:()=>l,toc:()=>d,frontMatter:()=>o});var s=JSON.parse('{"id":"lakehouse/database/mysql","title":"MySQL","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/lakehouse/database/mysql.md","sourceDirName":"lakehouse/database","slug":"/lakehouse/database/mysql","permalink":"/docs/lakehouse/database/mysql","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"MySQL","language":"en"},"sidebar":"docs","previous":{"title":"JDBC Catalog","permalink":"/docs/lakehouse/database/jdbc"},"next":{"title":"PostgreSQL","permalink":"/docs/lakehouse/database/postgresql"}}'),i=t("785893"),r=t("250065");let o={title:"MySQL",language:"en"},c=void 0,l={},d=[{value:"Terms and Conditions",id:"terms-and-conditions",level:2},{value:"Connect to MySQL",id:"connect-to-mysql",level:2},{value:"Connection security",id:"connection-security",level:3},{value:"Hierarchical mapping",id:"hierarchical-mapping",level:2},{value:"Type mapping",id:"type-mapping",level:2},{value:"MySQL to Doris type mapping",id:"mysql-to-doris-type-mapping",level:3},{value:"Timestamp type processing",id:"timestamp-type-processing",level:3},{value:"Query optimization",id:"query-optimization",level:2},{value:"Predicate pushdown",id:"predicate-pushdown",level:3},{value:"Row limit",id:"row-limit",level:3},{value:"Escape characters",id:"escape-characters",level:3},{value:"Troubleshoot connection exceptions",id:"troubleshoot-connection-exceptions",level:2},{value:"FAQ",id:"faq",level:2}];function a(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Doris JDBC Catalog supports connecting to MySQL database through the standard JDBC interface. This document describes how to configure a MySQL database connection."}),"\n",(0,i.jsx)(n.h2,{id:"terms-and-conditions",children:"Terms and Conditions"}),"\n",(0,i.jsx)(n.p,{children:"To connect to a MySQL database you need"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"MySQL 5.7, 8.0 or higher"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["JDBC driver for MySQL database, you can download it from ",(0,i.jsx)(n.a,{href:"https://mvnrepository.com/artifact/com.mysql/mysql-connector-j",children:"Maven repository"}),"\nDownload the latest or specified version of the MySQL JDBC driver. ",(0,i.jsx)(n.strong,{children:"It is recommended to use MySQL Connector/J 8.0.31 and above. "})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Doris Network connection between each FE and BE node and the MySQL server, the default port is 3306."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"connect-to-mysql",children:"Connect to MySQL"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG mysql PROPERTIES (\n    "type"="jdbc",\n    "user"="root",\n    "password"="secret",\n    "jdbc_url" = "jdbc:mysql://example.net:3306",\n    "driver_url" = "mysql-connector-j-8.3.0.jar",\n    "driver_class" = "com.mysql.cj.jdbc.Driver"\n)\n'})}),"\n",(0,i.jsx)(n.admonition,{title:"remarks",type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"jdbc_url"})," defines the connection information and parameters to be passed to the MySQL JDBC driver.\nThe parameters for supported URLs can be found in the ",(0,i.jsx)(n.a,{href:"https://dev.mysql.com/doc/connector-j/en/connector-j-reference-configuration-properties.html",children:"MySQL Development Guide"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"connection-security",children:"Connection security"}),"\n",(0,i.jsx)(n.p,{children:"If you configured TLS with a globally trusted certificate installed on the data source, you can enable TLS between the cluster and the data source by appending the parameter to the JDBC connection string set in the jdbc_url property."}),"\n",(0,i.jsx)(n.p,{children:"For example, with MySQL Connector/J version 8.0, use the sslMode parameter to secure the connection over TLS. By default, this parameter is set to PREFERRED, which protects the connection if the server is enabled. You can also set this parameter to REQUIRED, which will cause the connection to fail if TLS is not established."}),"\n",(0,i.jsxs)(n.p,{children:["You can configure this by adding the sslMode parameter to ",(0,i.jsx)(n.code,{children:"jdbc_url"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'"jdbc_url" = "jdbc:mysql://example.net:3306/?sslMode=REQUIRED"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["For more information about TLS configuration options, see the ",(0,i.jsx)(n.a,{href:"https://dev.mysql.com/doc/connector-j/en/connector-j-connp-props-security.html#cj-conn-prop_sslMode",children:"MySQL JDBC security documentation"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"hierarchical-mapping",children:"Hierarchical mapping"}),"\n",(0,i.jsx)(n.p,{children:"When mapping MySQL, a Database in Doris corresponds to a Database in MySQL. The Table under Doris' Database corresponds to the Tables under the Database in MySQL. That is, the mapping relationship is as follows:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Doris"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"MySQL"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Catalog"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"MySQL Server"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Database"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Database"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Table"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Table"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"type-mapping",children:"Type mapping"}),"\n",(0,i.jsx)(n.h3,{id:"mysql-to-doris-type-mapping",children:"MySQL to Doris type mapping"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"MYSQL Type"}),(0,i.jsx)(n.th,{children:"Doris Type"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"BOOLEAN"}),(0,i.jsx)(n.td,{children:"TINYINT"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"TINYINT"}),(0,i.jsx)(n.td,{children:"TINYINT"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"SMALLINT"}),(0,i.jsx)(n.td,{children:"SMALLINT"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"MEDIUMINT"}),(0,i.jsx)(n.td,{children:"INT"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"INT"}),(0,i.jsx)(n.td,{children:"INT"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"BIGINT"}),(0,i.jsx)(n.td,{children:"BIGINT"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"UNSIGNED TINYINT"}),(0,i.jsx)(n.td,{children:"SMALLINT"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"UNSIGNED MEDIUMINT"}),(0,i.jsx)(n.td,{children:"INT"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"UNSIGNED INT"}),(0,i.jsx)(n.td,{children:"BIGINT"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"UNSIGNED BIGINT"}),(0,i.jsx)(n.td,{children:"LARGEINT"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"DOUBLE"}),(0,i.jsx)(n.td,{children:"DOUBLE"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"DECIMAL"}),(0,i.jsx)(n.td,{children:"DECIMAL"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"UNSIGNED DECIMAL(p,s)"}),(0,i.jsx)(n.td,{children:"DECIMAL(p+1,s) / STRING"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"DATE"}),(0,i.jsx)(n.td,{children:"DATE"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"TIMESTAMP"}),(0,i.jsx)(n.td,{children:"DATETIME"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"DATETIME"}),(0,i.jsx)(n.td,{children:"DATETIME"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"YEAR"}),(0,i.jsx)(n.td,{children:"SMALLINT"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"TIME"}),(0,i.jsx)(n.td,{children:"STRING"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"CHAR"}),(0,i.jsx)(n.td,{children:"CHAR"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"VARCHAR"}),(0,i.jsx)(n.td,{children:"VARCHAR"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"JSON"}),(0,i.jsx)(n.td,{children:"STRING"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"SET"}),(0,i.jsx)(n.td,{children:"STRING"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ENUM"}),(0,i.jsx)(n.td,{children:"STRING"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"BIT"}),(0,i.jsx)(n.td,{children:"BOOLEAN/STRING"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"TINYTEXT,TEXT,MEDIUMTEXT,LONGTEXT"}),(0,i.jsx)(n.td,{children:"STRING"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"BLOB,MEDIUMBLOB,LONGBLOB,TINYBLOB"}),(0,i.jsx)(n.td,{children:"STRING"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"BINARY,VARBINARY"}),(0,i.jsx)(n.td,{children:"STRING"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Other"}),(0,i.jsx)(n.td,{children:"UNSUPPORTED"}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Doris does not support UNSIGNED data types, so UNSIGNED data types will be mapped to Doris corresponding data types that are an order of magnitude larger."}),"\n",(0,i.jsx)(n.li,{children:"UNSIGNED DECIMAL(p,s) will be mapped to DECIMAL(p+1,s) or STRING. Note that when this type is mapped to String, it can only support queries and cannot write to MySQL."}),"\n",(0,i.jsx)(n.li,{children:"In order to better balance reading and computing performance, Doris will map the JSON type to the STRING type."}),"\n",(0,i.jsx)(n.li,{children:"Doris does not support the BIT type. The BIT type will be mapped to BOOLEAN when BIT(1) is used, and to STRING in other cases."}),"\n",(0,i.jsx)(n.li,{children:"Doris does not support YEAR type, YEAR type will be mapped to SMALLINT."}),"\n",(0,i.jsx)(n.li,{children:"Doris does not support the TIME type, and the TIME type will be mapped to STRING."}),"\n"]})}),"\n",(0,i.jsx)(n.h3,{id:"timestamp-type-processing",children:"Timestamp type processing"}),"\n",(0,i.jsx)(n.p,{children:"The Java part of BE uses the JVM time zone when reading data from the JDBC type catalog. The JVM time zone defaults to the time zone of the BE deployment machine, which affects the time zone conversion when JDBC reads data."}),"\n",(0,i.jsxs)(n.p,{children:["In order to ensure time zone consistency, it is recommended to set the JVM time zone in JAVA_OPTS of be.conf to be consistent with the ",(0,i.jsx)(n.code,{children:"time_zone"})," of the Doris session."]}),"\n",(0,i.jsxs)(n.p,{children:["When reading MySQL's TIMESTAMP type, add parameters to the JDBC URL: ",(0,i.jsx)(n.code,{children:"connectionTimeZone=LOCAL"})," and ",(0,i.jsx)(n.code,{children:"forceConnectionTimeZoneToSession=true"}),". These parameters are applicable to MySQL Connector/J 8 and above and ensure that the time read is the Doris BE JVM time zone, not the MySQL session time zone."]}),"\n",(0,i.jsx)(n.h2,{id:"query-optimization",children:"Query optimization"}),"\n",(0,i.jsx)(n.h3,{id:"predicate-pushdown",children:"Predicate pushdown"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["When executing a query like ",(0,i.jsx)(n.code,{children:"where dt = '2022-01-01'"}),", Doris can push these filtering conditions down to the external data source, thereby directly excluding data that does not meet the conditions at the data source level, reducing unnecessary data acquisition and transmission. This greatly improves query performance while also reducing the load on external data sources."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["When the variable ",(0,i.jsx)(n.code,{children:"enable_ext_func_pred_pushdown"})," is set to true, the function conditions after where will also be pushed down to the external data source. Doris will automatically identify some functions that are not supported by MySQL, which can be viewed through explain sql."]}),"\n",(0,i.jsx)(n.p,{children:"Currently, the functions that Doris will not push down to MySQL by default are as follows:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Function"})})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"DATE_TRUNC"})}),(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"MONEY_FORMAT"})}),(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"NEGATIVE"})})]})]}),"\n",(0,i.jsxs)(n.p,{children:["When you find that there are other functions that do not support pushdown, you can configure ",(0,i.jsx)(n.code,{children:"jdbc_mysql_unsupported_pushdown_functions"})," through ",(0,i.jsx)(n.code,{children:"fe.conf"})," to specify the functions that do not support pushdown. Such as: ",(0,i.jsx)(n.code,{children:"jdbc_mysql_unsupported_pushdown_functions=func1,func2"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"row-limit",children:"Row limit"}),"\n",(0,i.jsx)(n.p,{children:"If you have the limit keyword in the query, Doris will push the limit down to MySQL to reduce the amount of data transfer."}),"\n",(0,i.jsx)(n.h3,{id:"escape-characters",children:"Escape characters"}),"\n",(0,i.jsx)(n.p,{children:"Doris will automatically add the escape character (``) to the field names and table names in the query statements sent to MySQL to avoid conflicts between field names, table names and MySQL internal keywords."}),"\n",(0,i.jsx)(n.h2,{id:"troubleshoot-connection-exceptions",children:"Troubleshoot connection exceptions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Communications link failure The last packet successfully received from the server was 7 milliseconds ago."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["reason:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Internet problem:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The network is unstable or the connection is interrupted."}),"\n",(0,i.jsx)(n.li,{children:"Network latency between client and server is too high."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["MySQL server settings\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The MySQL server may be configured with connection timeout parameters, such as wait_timeout or interactive_timeout, causing the connection to timeout and be closed."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Firewall settings\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Firewall rules may be blocking communication between the client and the server."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Connection pool settings\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The configuration connection_pool_max_life_time in the connection pool may cause the connection to be closed or recycled, or the connection may not be detected in time."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Server resource issues\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The MySQL server may have insufficient resources to handle new connection requests."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Client configuration\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Client JDBC driver configuration error, for example, the autoReconnect parameter is not set or set improperly."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["solve\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Check network connection:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Confirm that the network connection between the client and the server is stable to avoid excessive network latency."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Check MySQL server configuration:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Review and adjust the MySQL server's wait_timeout and interactive_timeout parameters to ensure they are set appropriately."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Check firewall configuration:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Verify that firewall rules allow communication between client and server."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Adjust connection pool settings:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Check and adjust the connection pool configuration parameter connection_pool_max_life_time to ensure it is smaller than MySQL's wait_timeout and interactive_timeout parameters and larger than the SQL with the longest execution time"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Monitor server resources:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Monitor the resource usage of the MySQL server to ensure that there are sufficient resources to handle connection requests."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Optimize client configuration:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Confirm that the configuration parameters of the JDBC driver are correct, such as autoReconnect=true, to ensure that the connection can automatically reconnect after being interrupted."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"java.io.EOFException MESSAGE: Can not read response from server. Expected to read 819 bytes, read 686 bytes before connection was unexpectedly lost."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Reason: The connection was killed by MySQL or MySQL crashed"}),"\n",(0,i.jsx)(n.li,{children:"Solution: Check whether MySQL has a mechanism to actively kill connections, or whether MySQL crashes because of too large a query."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The emoji expressions read and written in MySQL are garbled."}),"\n",(0,i.jsx)(n.p,{children:"When Doris performs MySQL Catalog query, because the default utf8 encoding in MySQL is utf8mb3, it cannot express emoji expressions that require 4-byte encoding. Here you need to modify the encoding of MySQL to utf8mb4 to support 4-byte encoding."}),"\n",(0,i.jsx)(n.p,{children:"Configuration items can be modified globally"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Modify the my.ini file in the mysql directory (for Linux systems, it is the my.cnf file in the etc directory)\n[client]\ndefault-character-set=utf8mb4\n\n[mysql]\nSet mysql default character set\ndefault-character-set=utf8mb4\n\n[mysqld]\nSet mysql character set server\ncharacter-set-server=utf8mb4\ncollation-server=utf8mb4_unicode_ci\ninit_connect='SET NAMES utf8mb4\n\nModify the types of corresponding tables and columns\nALTER TABLE table_name MODIFY colum_name VARCHAR(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;\nALTER TABLE table_name CHARSET=utf8mb4;\nSET NAMES utf8mb4\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"An exception occurred while reading the MySQL DATE/DATETIME type."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"ERROR 1105 (HY000): errCode = 2, detailMessage = (10.16.10.6)[INTERNAL_ERROR]UdfRuntimeException: get next block failed:\nCAUSED BY: SQLException: Zero date value prohibited\nCAUSED BY: DataReadException: Zero date value prohibited\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This is because the default handling of illegal DATE/DATETIME in JDBC is to throw an exception, and this behavior can be controlled through the parameter ",(0,i.jsx)(n.code,{children:"zeroDateTimeBehavior"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Optional parameters are: ",(0,i.jsx)(n.code,{children:"exception"}),", ",(0,i.jsx)(n.code,{children:"convertToNull"}),", ",(0,i.jsx)(n.code,{children:"round"}),', respectively: exception error report, converted to NULL value, converted to "0001-01-01 00:00:00";']}),"\n",(0,i.jsxs)(n.p,{children:["You need to add ",(0,i.jsx)(n.code,{children:"zeroDateTimeBehavior=convertToNull"})," to the end of the JDBC connection string when creating the Catalog ",(0,i.jsx)(n.code,{children:"jdbc_url"}),", such as ",(0,i.jsx)(n.code,{children:'"jdbc_url" = "jdbc:mysql://127.0.0.1:3306/test?zeroDateTimeBehavior=convertToNull"'}),"\nIn this case, JDBC will convert 0000-00-00 or 0000-00-00 00:00:00 into null, and then Doris will process all Date/DateTime type columns in the current Catalog as nullable types, so that It can be read normally."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"When reading MySQL Catalog or other JDBC Catalog, a class loading failure occurs"}),"\n",(0,i.jsx)(n.p,{children:"Such as the following exception:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"failed to load driver class com.mysql.cj.jdbc.driver in either of hikariconfig class loader\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This is because when creating the Catalog, the driver_class filled in is incorrect and needs to be filled in correctly. For example, the above example has a case problem and should be filled in as ",(0,i.jsx)(n.code,{children:'"driver_class" = "com.mysql.cj.jdbc.Driver"'})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Communication link abnormality occurs when reading MySQL"}),"\n",(0,i.jsx)(n.p,{children:"If the following error occurs:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"ERROR 1105 (HY000): errCode = 2, detailMessage = PoolInitializationException: Failed to initialize pool: Communications link failure\n\nThe last packet successfully received from the server was 7 milliseconds ago. The last packet sent successfully to the server was 4 milliseconds ago.\nCAUSED BY: CommunicationsException: Communications link failure\n    \nThe last packet successfully received from the server was 7 milliseconds ago. The last packet sent successfully to the server was 4 milliseconds ago.\nCAUSED BY: SSLHandshakeExcepti\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can view the be.out log of be"}),"\n",(0,i.jsx)(n.p,{children:"If the following information is included:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"WARN: Establishing SSL connection without server's identity verification is not recommended.\nAccording to MySQL 5.5.45+, 5.6.26+ and 5.7.6+ requirements SSL connection must be established by default if explicit option isn't set.\nFor compliance with existing applications not using SSL the verifyServerCertificate property is set to 'false'.\nYou need either to explicitly disable SSL by setting useSSL=false, or set useSSL=true and provide truststore for server certificate verification.\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can add ",(0,i.jsx)(n.code,{children:"?useSSL=false"})," to the end of the JDBC connection string when creating the Catalog, such as ",(0,i.jsx)(n.code,{children:'"jdbc_url" = "jdbc:mysql://127.0.0.1:3306/test?useSSL=false"'})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"When querying a large amount of MySQL data, if the query is occasionally successful, the following error will occasionally be reported. When this error occurs, all MySQL connections are disconnected and cannot be connected to the MySQL Server. After a while, MySQL returns to normal, but All previous connections are gone:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"ERROR 1105 (HY000): errCode = 2, detailMessage = [INTERNAL_ERROR]UdfRuntimeException: JDBC executor sql has error:\nCAUSED BY: CommunicationsException: Communications link failure\nThe last packet successfully received from the server was 4,446 milliseconds ago. The last packet sent successfully to the server was 4,446 milliseconds ago.\n"})}),"\n",(0,i.jsx)(n.p,{children:"When the above phenomenon occurs, it may be that MySQL Server's own memory or CPU resources are exhausted, causing the MySQL service to be unavailable. You can try to increase the memory or CPU configuration of MySQL Server."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"During the process of querying MySQL, if it is found that the query results are inconsistent with the query results in the MySQL library"}),"\n",(0,i.jsx)(n.p,{children:'First, check whether the string in the query field is case-sensitive. For example, there is a field c_1 in Table that contains two pieces of data: "aaa" and "AAA". If case-sensitivity of strings is not specified when initializing the MySQL database, then MySQL does not case-sensitive strings by default, but in Doris is strictly case-sensitive, so the following situations may occur:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'MySQL behavior:\nselect count(c_1) from table where c_1 = "aaa"; The string size is not distinguished, so the result is: 2\n\nDoris behavior:\nselect count(c_1) from table where c_1 = "aaa"; strictly distinguishes the string size, so the result is: 1\n'})}),"\n",(0,i.jsx)(n.p,{children:"If the above phenomenon occurs, it needs to be adjusted according to needs, as follows:"}),"\n",(0,i.jsxs)(n.p,{children:['Add the "BINARY" keyword to force case sensitivity when querying in MySQL: ',(0,i.jsx)(n.code,{children:'select count(c_1) from table where BINARY c_1 = "aaa";'})]}),"\n",(0,i.jsxs)(n.p,{children:["Or specify when creating a table in MySQL: ",(0,i.jsx)(n.code,{children:"CREATE TABLE table (c_1 VARCHAR(255) CHARACTER SET binary);"})]}),"\n",(0,i.jsx)(n.p,{children:"Or specify collation rules to make case sensitive when initializing the MySQL database:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[mysqld]\ncharacter-set-server=utf8\ncollation-server=utf8_bin\n[client]\ndefault-character-set=utf8\n[mysql]\ndefault-character-set=utf8\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["When querying MySQL, if you are stuck for a long time and no results are returned, or if you are stuck for a long time and a large number of write lock logs appear in fe.warn.log, you can try adding socketTimeout to the URL, for example: ",(0,i.jsx)(n.code,{children:"jdbc:mysql ://host:port/database?socketTimeout=30000"}),", prevents the JDBC client from waiting indefinitely after the connection is closed by MySQL."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In the process of using MySQL Catalog, it is found that the JVM memory or the number of Threads in FE continues to grow and does not decrease, and a Forward to master connection timed out error may appear at the same time."}),"\n",(0,i.jsxs)(n.p,{children:["Print the FE thread stack ",(0,i.jsx)(n.code,{children:"jstack fe_pid > fe.js"}),". If a large number of ",(0,i.jsx)(n.code,{children:"mysql-cj-abandoned-connection-cleanup"})," threads appear, it means there is a problem with the MySQL JDBC driver."]}),"\n",(0,i.jsx)(n.p,{children:"Proceed as follows:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Upgrade the MySQL JDBC driver to version 8.0.31 and above"}),"\n",(0,i.jsxs)(n.li,{children:["Add the ",(0,i.jsx)(n.code,{children:"-Dcom.mysql.cj.disableAbandonedConnectionCleanup=true"})," parameter to JAVA_OPTS in the FE and BE conf files, disable the connection cleanup function of the MySQL JDBC driver, and restart the cluster"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," If the version of Doris is 2.0.13 and above (2.0 Release), or 2.1.5 and above (2.1 Release), there is no need to increase this parameter, because Doris has disabled the connection cleaning function of the MySQL JDBC driver by default. . Just change the MySQL JDBC driver version. However, the Doris cluster needs to be restarted to clean up the previous Threads."]}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return o}});var s=t(667294);let i={},r=s.createContext(i);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);