"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["249238"],{222533:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return o},metadata:function(){return a},toc:function(){return c}});var a=r(374730),n=r(785893),s=r(250065);let o={title:"Arrow Flight SQL for 10X faster data transfer",description:"Apache Doris 2.1 supports Arrow Flight SQL protocol for reading data from Doris. It delivers tens-fold speedups compared to PyMySQL and Pandas.",date:"2024-04-16",author:"Apache Doris",tags:["Tech Sharing"],image:"/images/arrow-flight-sql-in-apache-doris-for-10x-faster-data-transfer.png"},i=void 0,l={authorsImageUrls:[void 0]},c=[{value:"High-speed data transfer based on Arrow Flight SQL",id:"high-speed-data-transfer-based-on-arrow-flight-sql",level:2},{value:"Performance test",id:"performance-test",level:2},{value:"Usage",id:"usage",level:2},{value:"01  Install library",id:"01--install-library",level:3},{value:"02  Connect to Doris",id:"02--connect-to-doris",level:3},{value:"03  Create table and retrieve metadata",id:"03--create-table-and-retrieve-metadata",level:3},{value:"04  Ingest data",id:"04--ingest-data",level:3},{value:"05  Execute queries",id:"05--execute-queries",level:3},{value:"06  Complete code",id:"06--complete-code",level:3},{value:"Examples of data transmission at scale",id:"examples-of-data-transmission-at-scale",level:2},{value:"01  Python",id:"01--python",level:3},{value:"02  JDBC",id:"02--jdbc",level:3},{value:"03  JAVA",id:"03--java",level:3},{value:"04  Spark",id:"04--spark",level:3},{value:"Hop on the trend train",id:"hop-on-the-trend-train",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["For years, JDBC and ODBC have been commonly adopted norms for database interaction. Now, as we gaze upon the vast expanse of the data realm, the rise of data science and data lake analytics brings bigger and bigger datasets. Correspondingly, we need faster and faster data reading and transmission, so we start to look for better answers than JDBC and ODBC. Thus, we include ",(0,n.jsx)(t.strong,{children:"Arrow Flight SQL protocol"})," into ",(0,n.jsx)(t.a,{href:"https://doris.apache.org",children:"Apache Doris 2.1"}),", which provides ",(0,n.jsx)(t.strong,{children:"tens-fold speedups for data transfer"}),"."]}),"\n",(0,n.jsx)(t.admonition,{title:"Tip",type:"tip",children:(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?v=zIqy24gI8DE",children:"demo"})," of loading data from Apache Doris to Python using Arrow Flight SQL."]})}),"\n",(0,n.jsx)(t.h2,{id:"high-speed-data-transfer-based-on-arrow-flight-sql",children:"High-speed data transfer based on Arrow Flight SQL"}),"\n",(0,n.jsx)(t.p,{children:"As a column-oriented data warehouse, Apache Doris arranges its query results in the form of data Blocks in a columnar format. Before version 2.1, the Blocks must be serialized into bytes in row-oriented formats before they can be transferred to a target client via a MySQL client or JDBC/ODBC driver. Moreover, if the target client is a columnar database or a column-oriented data science component like Pandas, the data should then be de-serialized. The serialization-deserialization process is a speed bump for data transmission."}),"\n",(0,n.jsxs)(t.p,{children:["Apache Doris 2.1 has a data transmission channel built on ",(0,n.jsx)(t.a,{href:"https://arrow.apache.org/docs/format/FlightSql.html",children:"Arrow Flight SQL"}),". (",(0,n.jsx)(t.a,{href:"https://arrow.apache.org/",children:"Apache Arrow"})," is a software development platform designed for high data movement efficiency across systems and languages, and the Arrow format aims for high-performance, lossless data exchange.) It allows ",(0,n.jsx)(t.strong,{children:"high-speed, large-scale data reading from Doris via SQL in various mainstream programming languages"}),". For target clients that also support the Arrow format, the whole process will be free of serialization/deserialization, thus no performance loss. Another upside is, Arrow Flight can make full use of multi-node and multi-core architecture and implement parallel data transfer, which is another enabler of high data throughput."]}),"\n",(0,n.jsx)(t.p,{children:"For example, if a Python client reads data from Apache Doris, Doris will first convert the column-oriented Blocks to Arrow RecordBatch. Then in the Python client, Arrow RecordBatch will be converted to Pandas DataFrame. Both conversions are fast because the Doris Blocks, Arrow RecordBatch, and Pandas DataFrame are all column-oriented."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"img",src:r(718636).Z+"",width:"1280",height:"647"})}),"\n",(0,n.jsx)(t.p,{children:"In addition, Arrow Flight SQL provides a general JDBC driver to facilitate seamless communication between databases that supports the Arrow Flight SQL protocol. This unlocks the the potential of Doris to be connected to a wider ecosystem and to be used in more cases."}),"\n",(0,n.jsx)(t.h2,{id:"performance-test",children:"Performance test"}),"\n",(0,n.jsx)(t.p,{children:'The "tens-fold speedups" conclusion is based on our benchmark tests. We tried reading data from Doris using PyMySQL, Pandas, and Arrow Flight SQL, and jotted down the durations, respectively. The test data is the ClickBench dataset.'}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Performance test",src:r(244775).Z+"",width:"1980",height:"1062"})}),"\n",(0,n.jsx)(t.p,{children:"Results on various data types are as follows:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Performance test results",src:r(505368).Z+"",width:"1280",height:"481"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"As shown, Arrow Flight SQL outperforms PyMySQL and Pandas in all data types by a factor ranging from 20 to several hundreds"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Arrow Flight SQL outperforms PyMySQL and Pandas",src:r(307888).Z+"",width:"1280",height:"502"})}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:["With support for Arrow Flight SQL, Apache Doris can leverage the Python ADBC Driver for fast data reading. I will showcase a few frequently executed database operations using the Python ADBC Driver (version 3.9 or later), including DDL, DML, session variable setting, and ",(0,n.jsx)(t.code,{children:"show"})," statements."]}),"\n",(0,n.jsx)(t.h3,{id:"01--install-library",children:"01  Install library"}),"\n",(0,n.jsx)(t.p,{children:"The relevant library is already published on PyPI. It can be installed simply as follows:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-C++",children:"pip install adbc_driver_manager\npip install adbc_driver_flightsql\n"})}),"\n",(0,n.jsx)(t.p,{children:"Import the following module/library to interact with the installed library:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-Python",children:"import adbc_driver_manager\nimport adbc_driver_flightsql.dbapi as flight_sql\n\n>>> print(adbc_driver_manager.__version__)\n1.1.0\n>>> print(adbc_driver_flightsql.__version__)\n1.1.0\n"})}),"\n",(0,n.jsx)(t.h3,{id:"02--connect-to-doris",children:"02  Connect to Doris"}),"\n",(0,n.jsx)(t.p,{children:"Create a client for interacting with the Doris Arrow Flight SQL service. Prerequisites include: Doris frontend (FE) host, Arrow Flight port, and login username/password."}),"\n",(0,n.jsx)(t.p,{children:"Configure parameters for Doris frontend (FE) and backend (BE):"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["In ",(0,n.jsx)(t.code,{children:"fe/conf/fe.conf"}),", set ",(0,n.jsx)(t.code,{children:"arrow_flight_sql_port "})," to an available port, such as 9090."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["In ",(0,n.jsx)(t.code,{children:"be/conf/be.conf"}),", set ",(0,n.jsx)(t.code,{children:"arrow_flight_sql_port "})," to an available port, such as 9091."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:'Suppose that the Arrow Flight SQL services for the Doris instance will run on ports 9090 and 9091 for FE and BE respectively, and the Doris username/password is "user" and "pass", the connection process would be:'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-C++",children:'conn = flight_sql.connect(uri="grpc://{FE_HOST}:{fe.conf:arrow_flight_sql_port}", db_kwargs={\n            adbc_driver_manager.DatabaseOptions.USERNAME.value: "user",\n            adbc_driver_manager.DatabaseOptions.PASSWORD.value: "pass",\n        })\ncursor = conn.cursor()\n'})}),"\n",(0,n.jsx)(t.p,{children:"Once the connection is established, you can interact with Doris using SQL statements through the returned cursor object. This allows you to perform various operations such as table creation, metadata retrieval, data import, and query execution."}),"\n",(0,n.jsx)(t.h3,{id:"03--create-table-and-retrieve-metadata",children:"03  Create table and retrieve metadata"}),"\n",(0,n.jsxs)(t.p,{children:["Pass the query to the ",(0,n.jsx)(t.code,{children:"cursor.execute()"})," function, which creates tables and retrieves metadata."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-C++",children:'cursor.execute("DROP DATABASE IF EXISTS arrow_flight_sql FORCE;")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("create database arrow_flight_sql;")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("show databases;")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("use arrow_flight_sql;")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("""CREATE TABLE arrow_flight_sql_test\n    (\n         k0 INT,\n         k1 DOUBLE,\n         K2 varchar(32) NULL DEFAULT "" COMMENT "",\n         k3 DECIMAL(27,9) DEFAULT "0",\n         k4 BIGINT NULL DEFAULT \'10\',\n         k5 DATE,\n    )\n    DISTRIBUTED BY HASH(k5) BUCKETS 5\n    PROPERTIES("replication_num" = "1");""")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("show create table arrow_flight_sql_test;")\nprint(cursor.fetchallarrow().to_pandas())\n'})}),"\n",(0,n.jsxs)(t.p,{children:["If the returned ",(0,n.jsx)(t.code,{children:"StatusResult"})," is 0, that means the query is executed successfully. (Such design is to ensure compatibility with JDBC.)"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-C++",children:"  StatusResult\n0            0\n\n  StatusResult\n0            0\n\n                   Database\n0         __internal_schema\n1          arrow_flight_sql\n..                      ...\n507             udf_auth_db\n\n[508 rows x 1 columns]\n\n  StatusResult\n0            0\n\n  StatusResult\n0            0\n                   Table                                       Create Table\n0  arrow_flight_sql_test  CREATE TABLE `arrow_flight_sql_test` (\\n  `k0`...\n"})}),"\n",(0,n.jsx)(t.h3,{id:"04--ingest-data",children:"04  Ingest data"}),"\n",(0,n.jsx)(t.p,{children:"Execute an INSERT INTO statement to load test data into the table created:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-C++",children:"cursor.execute(\"\"\"INSERT INTO arrow_flight_sql_test VALUES\n        ('0', 0.1, \"ID\", 0.0001, 9999999999, '2023-10-21'),\n        ('1', 0.20, \"ID_1\", 1.00000001, 0, '2023-10-21'),\n        ('2', 3.4, \"ID_1\", 3.1, 123456, '2023-10-22'),\n        ('3', 4, \"ID\", 4, 4, '2023-10-22'),\n        ('4', 122345.54321, \"ID\", 122345.54321, 5, '2023-10-22');\"\"\")\nprint(cursor.fetchallarrow().to_pandas())\n"})}),"\n",(0,n.jsx)(t.p,{children:"If you see the following returned result, the data ingestion is successful."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-C++",children:"  StatusResult\n0            0\n"})}),"\n",(0,n.jsxs)(t.p,{children:["If the data size to ingest is huge, you can apply the Stream Load method using ",(0,n.jsx)(t.a,{href:"https://pypi.org/project/pydoris/",children:"pydoris"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"05--execute-queries",children:"05  Execute queries"}),"\n",(0,n.jsx)(t.p,{children:"Perform queries on the above table, such as aggregation, sorting, and session variable setting."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-C++",children:'cursor.execute("select * from arrow_flight_sql_test order by k0;")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("set exec_mem_limit=2000;")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("show variables like \\"%exec_mem_limit%\\";")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("select k5, sum(k1), count(1), avg(k3) from arrow_flight_sql_test group by k5;")\nprint(cursor.fetchallarrow().to_pandas())\n'})}),"\n",(0,n.jsx)(t.p,{children:"The results are as follows:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-C++",children:"   k0            k1    K2                k3          k4          k5\n0   0       0.10000    ID       0.000100000  9999999999  2023-10-21\n1   1       0.20000  ID_1       1.000000010           0  2023-10-21\n2   2       3.40000  ID_1       3.100000000      123456  2023-10-22\n3   3       4.00000    ID       4.000000000           4  2023-10-22\n4   4  122345.54321    ID  122345.543210000           5  2023-10-22\n\n[5 rows x 6 columns]\n\n  StatusResult\n0            0\n\n    Variable_name Value Default_Value Changed\n0  exec_mem_limit  2000    2147483648       1\n\n           k5  Nullable(Float64)_1  Int64_2 Nullable(Decimal(38, 9))_3\n0  2023-10-22         122352.94321        3            40784.214403333\n1  2023-10-21              0.30000        2                0.500050005\n\n[2 rows x 5 columns]\n"})}),"\n",(0,n.jsx)(t.h3,{id:"06--complete-code",children:"06  Complete code"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-Python",children:'# Doris Arrow Flight SQL Test\n\n# step 1, library is released on PyPI and can be easily installed.\n# pip install adbc_driver_manager\n# pip install adbc_driver_flightsql\nimport adbc_driver_manager\nimport adbc_driver_flightsql.dbapi as flight_sql\n\n# step 2, create a client that interacts with the Doris Arrow Flight SQL service.\n# Modify arrow_flight_sql_port in fe/conf/fe.conf to an available port, such as 9090.\n# Modify arrow_flight_sql_port in be/conf/be.conf to an available port, such as 9091.\nconn = flight_sql.connect(uri="grpc://{FE_HOST}:{fe.conf:arrow_flight_sql_port}", db_kwargs={\n            adbc_driver_manager.DatabaseOptions.USERNAME.value: "root",\n            adbc_driver_manager.DatabaseOptions.PASSWORD.value: "",\n        })\ncursor = conn.cursor()\n\n# interacting with Doris via SQL using Cursor\ndef execute(sql):\n    print("\\n### execute query: ###\\n " + sql)\n    cursor.execute(sql)\n    print("### result: ###")\n    print(cursor.fetchallarrow().to_pandas())\n\n# step3, execute DDL statements, create database/table, show stmt.\nexecute("DROP DATABASE IF EXISTS arrow_flight_sql FORCE;")\nexecute("show databases;")\nexecute("create database arrow_flight_sql;")\nexecute("show databases;")\nexecute("use arrow_flight_sql;")\nexecute("""CREATE TABLE arrow_flight_sql_test\n    (\n         k0 INT,\n         k1 DOUBLE,\n         K2 varchar(32) NULL DEFAULT "" COMMENT "",\n         k3 DECIMAL(27,9) DEFAULT "0",\n         k4 BIGINT NULL DEFAULT \'10\',\n         k5 DATE,\n    )\n    DISTRIBUTED BY HASH(k5) BUCKETS 5\n    PROPERTIES("replication_num" = "1");""")\nexecute("show create table arrow_flight_sql_test;")\n\n\n# step4, insert into\nexecute("""INSERT INTO arrow_flight_sql_test VALUES\n        (\'0\', 0.1, "ID", 0.0001, 9999999999, \'2023-10-21\'),\n        (\'1\', 0.20, "ID_1", 1.00000001, 0, \'2023-10-21\'),\n        (\'2\', 3.4, "ID_1", 3.1, 123456, \'2023-10-22\'),\n        (\'3\', 4, "ID", 4, 4, \'2023-10-22\'),\n        (\'4\', 122345.54321, "ID", 122345.54321, 5, \'2023-10-22\');""")\n\n\n# step5, execute queries, aggregation, sort, set session variable\nexecute("select * from arrow_flight_sql_test order by k0;")\nexecute("set exec_mem_limit=2000;")\nexecute("show variables like \\"%exec_mem_limit%\\";")\nexecute("select k5, sum(k1), count(1), avg(k3) from arrow_flight_sql_test group by k5;")\n\n# step6, close cursor \ncursor.close()\n'})}),"\n",(0,n.jsx)(t.h2,{id:"examples-of-data-transmission-at-scale",children:"Examples of data transmission at scale"}),"\n",(0,n.jsx)(t.h3,{id:"01--python",children:"01  Python"}),"\n",(0,n.jsx)(t.p,{children:"In Python, after connecting to Doris using the ADBC Driver, you can use various ADBC APIs to load the Clickbench dataset from Doris into Python. Here's how:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-Python",children:'#!/usr/bin/env python\n# -*- coding: utf-8 -*-\n\nimport adbc_driver_manager\nimport adbc_driver_flightsql.dbapi as flight_sql\nimport pandas\nfrom datetime import datetime\n\nmy_uri = "grpc://0.0.0.0:`fe.conf_arrow_flight_sql_port`"\nmy_db_kwargs = {\n    adbc_driver_manager.DatabaseOptions.USERNAME.value: "root",\n    adbc_driver_manager.DatabaseOptions.PASSWORD.value: "",\n}\nsql = "select * from clickbench.hits limit 1000000;"\n\n# PEP 249 (DB-API 2.0) API wrapper for the ADBC Driver Manager.\ndef dbapi_adbc_execute_fetchallarrow():\n    conn = flight_sql.connect(uri=my_uri, db_kwargs=my_db_kwargs)\n    cursor = conn.cursor()\n    start_time = datetime.now()\n    cursor.execute(sql)\n    arrow_data = cursor.fetchallarrow()\n    dataframe = arrow_data.to_pandas()\n    print("\\n##################\\n dbapi_adbc_execute_fetchallarrow" + ", cost:" + str(datetime.now() - start_time) + ", bytes:" + str(arrow_data.nbytes) + ", len(arrow_data):" + str(len(arrow_data)))\n    print(dataframe.info(memory_usage=\'deep\'))\n    print(dataframe)\n\n# ADBC reads data into pandas dataframe, which is faster than fetchallarrow first and then to_pandas.\ndef dbapi_adbc_execute_fetch_df():\n    conn = flight_sql.connect(uri=my_uri, db_kwargs=my_db_kwargs)\n    cursor = conn.cursor()\n    start_time = datetime.now()\n    cursor.execute(sql)\n    dataframe = cursor.fetch_df()    \n    print("\\n##################\\n dbapi_adbc_execute_fetch_df" + ", cost:" + str(datetime.now() - start_time))\n    print(dataframe.info(memory_usage=\'deep\'))\n    print(dataframe)\n\n# Can read multiple partitions in parallel.\ndef dbapi_adbc_execute_partitions():\n    conn = flight_sql.connect(uri=my_uri, db_kwargs=my_db_kwargs)\n    cursor = conn.cursor()\n    start_time = datetime.now()\n    partitions, schema = cursor.adbc_execute_partitions(sql)\n    cursor.adbc_read_partition(partitions[0])\n    arrow_data = cursor.fetchallarrow()\n    dataframe = arrow_data.to_pandas()\n    print("\\n##################\\n dbapi_adbc_execute_partitions" + ", cost:" + str(datetime.now() - start_time) + ", len(partitions):" + str(len(partitions)))\n    print(dataframe.info(memory_usage=\'deep\'))\n    print(dataframe)\n\ndbapi_adbc_execute_fetchallarrow()\ndbapi_adbc_execute_fetch_df()\ndbapi_adbc_execute_partitions()\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Results are as follows (omitting the repeated outputs). ",(0,n.jsx)(t.strong,{children:"It only takes 3s"})," to load a Clickbench dataset containing 1 million rows and 105 columns."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-Python",children:"##################\n dbapi_adbc_execute_fetchallarrow, cost:0:00:03.548080, bytes:784372793, len(arrow_data):1000000\n<class 'pandas.core.frame.DataFrame'>\nRangeIndex: 1000000 entries, 0 to 999999\nColumns: 105 entries, CounterID to CLID\ndtypes: int16(48), int32(19), int64(6), object(32)\nmemory usage: 2.4 GB\nNone\n        CounterID   EventDate               UserID            EventTime              WatchID  JavaEnable                                              Title  GoodEvent  ...  UTMCampaign  UTMContent  UTMTerm  FromTag  HasGCLID          RefererHash              URLHash  CLID\n0          245620  2013-07-09  2178958239546411410  2013-07-09 19:30:27  8302242799508478680           1  OWAProfessionov \u2014 \u041C\u043E\u0439 \u041A\u0440\u0443\u0433 (\u0421\u0412\u0410\u041E \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D          1  ...                                                    0 -7861356476484644683 -2933046165847566158     0\n999999       1095  2013-07-03  4224919145474070397  2013-07-03 14:36:17  6301487284302774604           0  @\u0434\u043D\u0435\u0432\u043D\u0438\u043A\u0438 Sinatra (\u041B\u0410\u0414\u0410, \u0446\u0435\u043D\u0430 \u0434\u043B\u044F \u0434\u0435\u0442\u0430\u043B\u043B\u0438 \u043A\u0442\u043E ...          1  ...                                                    0  -296158784638538920  1335027772388499430     0\n\n[1000000 rows x 105 columns]\n\n##################\n dbapi_adbc_execute_fetch_df, cost:0:00:03.611664\n##################\n dbapi_adbc_execute_partitions, cost:0:00:03.483436, len(partitions):1\n##################\n low_level_api_execute_query, cost:0:00:03.523598, stream.address:139992182177600, rows:-1, bytes:784322926, len(arrow_data):1000000\n##################\n low_level_api_execute_partitions, cost:0:00:03.738128streams.size:3, 1, -1\n"})}),"\n",(0,n.jsx)(t.h3,{id:"02--jdbc",children:"02  JDBC"}),"\n",(0,n.jsx)(t.p,{children:"The open-source JDBC driver for the Arrow Flight SQL protocol provides compatibility with the standard JDBC API. It allows most BI tools to access Doris via JDBC and supports high-speed transfer of Apache Arrow data."}),"\n",(0,n.jsxs)(t.p,{children:["Usage of this driver is similar to using that for the MySQL protocol. You just need to replace ",(0,n.jsx)(t.code,{children:"jdbc:mysql"})," in the connection URL with ",(0,n.jsx)(t.code,{children:"jdbc:arrow-flight-sql"}),". The returned result will be in the JDBC ResultSet data structure."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-Java",children:'import java.sql.Connection;\nimport java.sql.DriverManager;\nimport java.sql.ResultSet;\nimport java.sql.Statement;\n\nClass.forName("org.apache.arrow.driver.jdbc.ArrowFlightJdbcDriver");\nString DB_URL = "jdbc:arrow-flight-sql://{FE_HOST}:{fe.conf:arrow_flight_sql_port}?useServerPrepStmts=false"\n        + "&cachePrepStmts=true&useSSL=false&useEncryption=false";\nString USER = "root";\nString PASS = "";\n\nConnection conn = DriverManager.getConnection(DB_URL, USER, PASS);\nStatement stmt = conn.createStatement();\nResultSet resultSet = stmt.executeQuery("show tables;");\nwhile (resultSet.next()) {\n    String col1 = resultSet.getString(1);\n    System.out.println(col1);\n}\n\nresultSet.close();\nstmt.close();\nconn.close();\n'})}),"\n",(0,n.jsx)(t.h3,{id:"03--java",children:"03  JAVA"}),"\n",(0,n.jsx)(t.p,{children:"Similar to that with Python, you can directly create an ADBC client with JAVA to read data from Doris. Firstly, you need to obtain the FlightInfo. Then, you connect to each endpoint to pull the data."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-Java",children:'// method one\nAdbcStatement stmt = connection.createStatement()\nstmt.setSqlQuery("SELECT * FROM " + tableName)\n// executeQuery, two steps:\n// 1. Execute Query and get returned FlightInfo;\n// 2. Create FlightInfoReader to sequentially traverse each Endpoint;\nQueryResult queryResult = stmt.executeQuery()\n\n\n// method two\nAdbcStatement stmt = connection.createStatement()\nstmt.setSqlQuery("SELECT * FROM " + tableName)\n// Execute Query and parse each Endpoint in FlightInfo, and use the Location and Ticket to construct a PartitionDescriptor\npartitionResult = stmt.executePartitioned();\npartitionResult.getPartitionDescriptors()\n//Create ArrowReader for each PartitionDescriptor to read data\nArrowReader reader = connection2.readPartition(partitionResult.getPartitionDescriptors().get(0).getDescriptor()))\n'})}),"\n",(0,n.jsx)(t.h3,{id:"04--spark",children:"04  Spark"}),"\n",(0,n.jsxs)(t.p,{children:["For Spark users, apart from connecting to Flight SQL Server using JDBC and JAVA, you can apply the ",(0,n.jsx)(t.a,{href:"https://github.com/qwshen/spark-flight-connector",children:"Spark-Flight-Connector"}),", which enables Spark to act as a client for reading and writing data from/to a Flight SQL Server. This is made possible by the fast data conversion between the Arrow format and the Block in Apache Doris, which is ",(0,n.jsx)(t.strong,{children:"10 times faster than the conversion between CSV and Block"}),". Moreover, the Arrow data format provides more comprehensive and robust support for complex data types such as Map and Array."]}),"\n",(0,n.jsx)(t.h2,{id:"hop-on-the-trend-train",children:"Hop on the trend train"}),"\n",(0,n.jsx)(t.p,{children:"A number of enterprise users of Doris has tried loading data from Doris to Python, Spark, and Flink using Arrow Flight SQL and enjoyed much faster data reading speed. In the future, we plan to include the support for Arrow Flight SQL in data writing, too. By then, most systems built with mainstream programming languages will be able to read and write data from/to Apache Doris by an ADBC client. That's high-speed data interaction which opens up numerous possibilities. On our to-do list, we also envision leveraging Arrow Flight to implement parallel data reading by multiple backends and facilitate federated queries across Doris and Spark."}),"\n",(0,n.jsxs)(t.p,{children:["Download ",(0,n.jsx)(t.a,{href:"https://doris.apache.org/download/",children:"Apache Doris 2.1"})," and get a taste of 100 times faster data transfer powered by Arrow Flight SQL. If you need assistance, come find us in the ",(0,n.jsx)(t.a,{href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2unfw3a3q-MtjGX4pAd8bCGC1UV0sKcw",children:"Apache Doris developer and user community"}),"."]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},505368:function(e,t,r){r.d(t,{Z:function(){return a}});let a=r.p+"assets/images/doris-performance-test-2-8c60cb82710df9d37e6707593830da6c.png"},307888:function(e,t,r){r.d(t,{Z:function(){return a}});let a=r.p+"assets/images/doris-performance-test-3-b48f9e4bdec4a27877fcddbb33e6375a.png"},244775:function(e,t,r){r.d(t,{Z:function(){return a}});let a=r.p+"assets/images/doris-performance-test-a0ccb1f783b2f85210c63d8aa961f649.png"},718636:function(e,t,r){r.d(t,{Z:function(){return a}});let a=r.p+"assets/images/high-speed-data-transfer-based-on-doris-arrow-flight-sql-c51538bca23f1062d141adab8fe055cb.png"},250065:function(e,t,r){r.d(t,{Z:function(){return i},a:function(){return o}});var a=r(667294);let n={},s=a.createContext(n);function o(e){let t=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(s.Provider,{value:t},e.children)}},374730:function(e){e.exports=JSON.parse('{"permalink":"/blog/arrow-flight-sql-in-apache-doris-for-10x-faster-data-transfer","source":"@site/blog/arrow-flight-sql-in-apache-doris-for-10x-faster-data-transfer.md","title":"Arrow Flight SQL for 10X faster data transfer","description":"Apache Doris 2.1 supports Arrow Flight SQL protocol for reading data from Doris. It delivers tens-fold speedups compared to PyMySQL and Pandas.","date":"2024-04-16T00:00:00.000Z","tags":[{"inline":true,"label":"Tech Sharing","permalink":"/blog/tags/tech-sharing"}],"hasTruncateMarker":false,"authors":[{"name":"Apache Doris","key":null,"page":null}],"frontMatter":{"title":"Arrow Flight SQL for 10X faster data transfer","description":"Apache Doris 2.1 supports Arrow Flight SQL protocol for reading data from Doris. It delivers tens-fold speedups compared to PyMySQL and Pandas.","date":"2024-04-16","author":"Apache Doris","tags":["Tech Sharing"],"image":"/images/arrow-flight-sql-in-apache-doris-for-10x-faster-data-transfer.png"},"unlisted":false,"prevItem":{"title":"Apache Doris version 2.0.9 has been released","permalink":"/blog/release-note-2.0.9"},"nextItem":{"title":"Apache Doris 2.1.2 just released","permalink":"/blog/release-note-2.1.2"}}')}}]);