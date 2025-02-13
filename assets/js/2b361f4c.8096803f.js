"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["63047"],{349780:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>s,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>i});var t=JSON.parse('{"id":"db-connect/arrow-flight-sql-connect","title":"Connecting by Arrow Flight SQL Protocol","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/db-connect/arrow-flight-sql-connect.md","sourceDirName":"db-connect","slug":"/db-connect/arrow-flight-sql-connect","permalink":"/docs/db-connect/arrow-flight-sql-connect","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Connecting by Arrow Flight SQL Protocol","language":"en"},"sidebar":"docs","previous":{"title":"Connecting by MySQL Protocol","permalink":"/docs/db-connect/database-connect"},"next":{"title":"Overview","permalink":"/docs/table-design/overview"}}'),o=r("785893"),a=r("250065");let i={title:"Connecting by Arrow Flight SQL Protocol",language:"en"},s=void 0,l={},c=[{value:"Implementation Principle",id:"implementation-principle",level:2},{value:"Python Usage",id:"python-usage",level:2},{value:"Install Library",id:"install-library",level:3},{value:"Connect to Doris",id:"connect-to-doris",level:3},{value:"Create a table and get metadata",id:"create-a-table-and-get-metadata",level:3},{value:"Import data",id:"import-data",level:3},{value:"Execute a query",id:"execute-a-query",level:3},{value:"Complete code",id:"complete-code",level:3},{value:"Jdbc Connector with Arrow Flight SQL",id:"jdbc-connector-with-arrow-flight-sql",level:2},{value:"Java Usage",id:"java-usage",level:2},{value:"ADBC Driver",id:"adbc-driver",level:3},{value:"JDBC Driver",id:"jdbc-driver",level:3},{value:"Choice of Jdbc and Java connection methods",id:"choice-of-jdbc-and-java-connection-methods",level:3},{value:"Interaction with other big data components",id:"interaction-with-other-big-data-components",level:2},{value:"Spark &amp; \u200B\u200BFlink",id:"spark--flink",level:3},{value:"FAQ",id:"faq",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Since Doris 2.1, a high-speed data link based on the Arrow Flight SQL protocol has been implemented, allowing SQL queries to rapidly retrieve large volumes of data from Doris in multiple languages. Arrow Flight SQL also provides a universal JDBC driver, supporting seamless interaction with databases that also follow the Arrow Flight SQL protocol. In some scenarios, performance can improve by up to a hundred times compared to data transfer solutions using MySQL Client or JDBC/ODBC drivers."}),"\n",(0,o.jsx)(n.h2,{id:"implementation-principle",children:"Implementation Principle"}),"\n",(0,o.jsx)(n.p,{children:"In Doris, query results are organized in columnar format as Blocks. In versions prior to 2.1, data could be transferred to the target client via MySQL Client or JDBC/ODBC drivers, but this required deserializing row-based Bytes into columnar format. By building a high-speed data transfer link based on Arrow Flight SQL, if the target client also supports Arrow columnar format, the entire transfer process avoids serialization and deserialization operations, completely eliminating the time and performance overhead associated with them."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Arrow_Flight_SQL",src:r(347174).Z+"",width:"1280",height:"647"})}),"\n",(0,o.jsxs)(n.p,{children:["To install Apache Arrow, you can find detailed installation instructions in the official documentation ",(0,o.jsx)(n.a,{href:"https://arrow.apache.org/install/",children:"Apache Arrow"}),". For more information on how Doris implements the Arrow Flight protocol, you can refer to ",(0,o.jsx)(n.a,{href:"https://github.com/apache/doris/issues/25514",children:"Doris support Arrow Flight SQL protocol"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"python-usage",children:"Python Usage"}),"\n",(0,o.jsx)(n.p,{children:"Use Python's ADBC \u200B\u200BDriver to connect to Doris to achieve extremely fast data reading. The following steps use Python (version >= 3.9) ADBC \u200B\u200BDriver to perform a series of common database syntax operations, including DDL, DML, setting Session variables, and Show statements."}),"\n",(0,o.jsx)(n.h3,{id:"install-library",children:"Install Library"}),"\n",(0,o.jsx)(n.p,{children:"The library is published on PyPI and can be easily installed in the following ways:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"pip install adbc_driver_manager\npip install adbc_driver_flightsql\n"})}),"\n",(0,o.jsx)(n.p,{children:"Import the following modules/libraries in the code to use the installed Library:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Python",children:"import adbc_driver_manager\nimport adbc_driver_flightsql.dbapi as flight_sql\n\n>>> print(adbc_driver_manager.__version__)\n1.1.0\n>>> print(adbc_driver_flightsql.__version__)\n1.1.0\n"})}),"\n",(0,o.jsx)(n.h3,{id:"connect-to-doris",children:"Connect to Doris"}),"\n",(0,o.jsx)(n.p,{children:"Create a client to interact with the Doris Arrow Flight SQL service. You need to provide Doris FE's Host, Arrow Flight Port, login username and password, and perform the following configuration.\nModify the configuration parameters of Doris FE and BE:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Modify arrow_flight_sql_port in fe/conf/fe.conf to an available port, such as 9090."}),"\n",(0,o.jsx)(n.li,{children:"Modify arrow_flight_sql_port in be/conf/be.conf to an available port, such as 9091."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"Note: arrow_flight_sql_port configured in fe.conf and be.conf are different"})}),"\n",(0,o.jsx)(n.p,{children:'Assuming that the Arrow Flight SQL services of FE and BE in the Doris instance will run on ports 9090 and 9091 respectively, and the Doris username/password is "user"/"pass", the connection process is as follows:'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Python",children:'conn = flight_sql.connect(uri="grpc://{FE_HOST}:{fe.conf:arrow_flight_sql_port}", db_kwargs={\n            adbc_driver_manager.DatabaseOptions.USERNAME.value: "user",\n            adbc_driver_manager.DatabaseOptions.PASSWORD.value: "pass",\n        })\ncursor = conn.cursor()\n'})}),"\n",(0,o.jsx)(n.p,{children:"After the connection is completed, the returned Cursor can be used to interact with Doris through SQL to perform operations such as creating tables, obtaining metadata, importing data, and querying."}),"\n",(0,o.jsx)(n.h3,{id:"create-a-table-and-get-metadata",children:"Create a table and get metadata"}),"\n",(0,o.jsx)(n.p,{children:"Pass Query to the cursor.execute() function to execute the table creation and metadata acquisition operations:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Python",children:'cursor.execute("DROP DATABASE IF EXISTS arrow_flight_sql FORCE;")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("create database arrow_flight_sql;")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("show databases;")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("use arrow_flight_sql;")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("""CREATE TABLE arrow_flight_sql_test\n    (\n         k0 INT,\n         k1 DOUBLE,\n         K2 varchar(32) NULL DEFAULT "" COMMENT "",\n         k3 DECIMAL(27,9) DEFAULT "0",\n         k4 BIGINT NULL DEFAULT \'10\',\n         k5 DATE,\n    )\n    DISTRIBUTED BY HASH(k5) BUCKETS 5\n    PROPERTIES("replication_num" = "1");""")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("show create table arrow_flight_sql_test;")\nprint(cursor.fetchallarrow().to_pandas())\n'})}),"\n",(0,o.jsx)(n.p,{children:"If StatusResult returns 0, it means that the Query is executed successfully (the reason for this design is to be compatible with JDBC)."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"  StatusResult\n0            0\n\n  StatusResult\n0            0\n\n                   Database\n0         __internal_schema\n1          arrow_flight_sql\n..                      ...\n507             udf_auth_db\n\n[508 rows x 1 columns]\n\n  StatusResult\n0            0\n\n  StatusResult\n0            0\n                   Table                                       Create Table\n0  arrow_flight_sql_test  CREATE TABLE `arrow_flight_sql_test` (\\n  `k0`...\n"})}),"\n",(0,o.jsx)(n.h3,{id:"import-data",children:"Import data"}),"\n",(0,o.jsx)(n.p,{children:"Execute INSERT INTO to import a small amount of test data into the created table:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Python",children:"cursor.execute(\"\"\"INSERT INTO arrow_flight_sql_test VALUES\n        ('0', 0.1, \"ID\", 0.0001, 9999999999, '2023-10-21'),\n        ('1', 0.20, \"ID_1\", 1.00000001, 0, '2023-10-21'),\n        ('2', 3.4, \"ID_1\", 3.1, 123456, '2023-10-22'),\n        ('3', 4, \"ID\", 4, 4, '2023-10-22'),\n        ('4', 122345.54321, \"ID\", 122345.54321, 5, '2023-10-22');\"\"\")\nprint(cursor.fetchallarrow().to_pandas())\n"})}),"\n",(0,o.jsx)(n.p,{children:"The following proves that the import was successful:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"  StatusResult\n0            0\n"})}),"\n",(0,o.jsx)(n.p,{children:"If you need to import large amounts of data into Doris, you can use pydoris to perform Stream Load."}),"\n",(0,o.jsx)(n.h3,{id:"execute-a-query",children:"Execute a query"}),"\n",(0,o.jsx)(n.p,{children:"Then query the table imported above, including operations such as aggregation, sorting, and Set Session Variable."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Python",children:'cursor.execute("select * from arrow_flight_sql_test order by k0;")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("set exec_mem_limit=2000;")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("show variables like \\"%exec_mem_limit%\\";")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("select k5, sum(k1), count(1), avg(k3) from arrow_flight_sql_test group by k5;")\nprint(cursor.fetchallarrow().to_pandas())\n'})}),"\n",(0,o.jsx)(n.p,{children:"The result is as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"   k0            k1    K2                k3          k4          k5\n0   0       0.10000    ID       0.000100000  9999999999  2023-10-21\n1   1       0.20000  ID_1       1.000000010           0  2023-10-21\n2   2       3.40000  ID_1       3.100000000      123456  2023-10-22\n3   3       4.00000    ID       4.000000000           4  2023-10-22\n4   4  122345.54321    ID  122345.543210000           5  2023-10-22\n\n[5 rows x 6 columns]\n\n  StatusResult\n0            0\n\n    Variable_name Value Default_Value Changed\n0  exec_mem_limit  2000    2147483648       1\n\n           k5  Nullable(Float64)_1  Int64_2 Nullable(Decimal(38, 9))_3\n0  2023-10-22         122352.94321        3            40784.214403333\n1  2023-10-21              0.30000        2                0.500050005\n\n[2 rows x 5 columns]\n"})}),"\n",(0,o.jsx)(n.h3,{id:"complete-code",children:"Complete code"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Python",children:'# Doris Arrow Flight SQL Test\n\n# step 1, library is released on PyPI and can be easily installed.\n# pip install adbc_driver_manager\n# pip install adbc_driver_flightsql\nimport adbc_driver_manager\nimport adbc_driver_flightsql.dbapi as flight_sql\n\n# step 2, create a client that interacts with the Doris Arrow Flight SQL service.\n# Modify arrow_flight_sql_port in fe/conf/fe.conf to an available port, such as 9090.\n# Modify arrow_flight_sql_port in be/conf/be.conf to an available port, such as 9091.\nconn = flight_sql.connect(uri="grpc://{FE_HOST}:{fe.conf:arrow_flight_sql_port}", db_kwargs={\n            adbc_driver_manager.DatabaseOptions.USERNAME.value: "root",\n            adbc_driver_manager.DatabaseOptions.PASSWORD.value: "",\n        })\ncursor = conn.cursor()\n\n# interacting with Doris via SQL using Cursor\ndef execute(sql):\n    print("\\n### execute query: ###\\n " + sql)\n    cursor.execute(sql)\n    print("### result: ###")\n    print(cursor.fetchallarrow().to_pandas())\n\n# step3, execute DDL statements, create database/table, show stmt.\nexecute("DROP DATABASE IF EXISTS arrow_flight_sql FORCE;")\nexecute("show databases;")\nexecute("create database arrow_flight_sql;")\nexecute("show databases;")\nexecute("use arrow_flight_sql;")\nexecute("""CREATE TABLE arrow_flight_sql_test\n    (\n         k0 INT,\n         k1 DOUBLE,\n         K2 varchar(32) NULL DEFAULT "" COMMENT "",\n         k3 DECIMAL(27,9) DEFAULT "0",\n         k4 BIGINT NULL DEFAULT \'10\',\n         k5 DATE,\n    )\n    DISTRIBUTED BY HASH(k5) BUCKETS 5\n    PROPERTIES("replication_num" = "1");""")\nexecute("show create table arrow_flight_sql_test;")\n\n\n# step4, insert into\nexecute("""INSERT INTO arrow_flight_sql_test VALUES\n        (\'0\', 0.1, "ID", 0.0001, 9999999999, \'2023-10-21\'),\n        (\'1\', 0.20, "ID_1", 1.00000001, 0, \'2023-10-21\'),\n        (\'2\', 3.4, "ID_1", 3.1, 123456, \'2023-10-22\'),\n        (\'3\', 4, "ID", 4, 4, \'2023-10-22\'),\n        (\'4\', 122345.54321, "ID", 122345.54321, 5, \'2023-10-22\');""")\n\n\n# step5, execute queries, aggregation, sort, set session variable\nexecute("select * from arrow_flight_sql_test order by k0;")\nexecute("set exec_mem_limit=2000;")\nexecute("show variables like \\"%exec_mem_limit%\\";")\nexecute("select k5, sum(k1), count(1), avg(k3) from arrow_flight_sql_test group by k5;")\n\n# step6, close cursor \ncursor.close()\n'})}),"\n",(0,o.jsx)(n.h2,{id:"jdbc-connector-with-arrow-flight-sql",children:"Jdbc Connector with Arrow Flight SQL"}),"\n",(0,o.jsx)(n.p,{children:"The open source JDBC driver of Arrow Flight SQL protocol is compatible with the standard JDBC API, which can be used by most BI tools to access Doris through JDBC and supports high-speed transmission of Apache Arrow data. The usage is similar to connecting to Doris through the JDBC driver of MySQL protocol. You only need to replace the jdbc:mysql protocol in the link URL with the jdbc:arrow-flight-sql protocol. The query results are still returned in the JDBC ResultSet data structure."}),"\n",(0,o.jsx)(n.p,{children:"POM dependency:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Java",children:"<properties>\n    <arrow.version>15.0.1</arrow.version>\n</properties>\n<dependencies>\n    <dependency>\n        <groupId>org.apache.arrow</groupId>\n        <artifactId>flight-sql-jdbc-core</artifactId>\n        <version>${arrow.version}</version>\n    </dependency>\n</dependencies>\n"})}),"\n",(0,o.jsx)(n.p,{children:"The connection code example is as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Java",children:'import java.sql.Connection;\nimport java.sql.DriverManager;\nimport java.sql.ResultSet;\nimport java.sql.Statement;\n\nClass.forName("org.apache.arrow.driver.jdbc.ArrowFlightJdbcDriver");\nString DB_URL = "jdbc:arrow-flight-sql://{FE_HOST}:{fe.conf:arrow_flight_sql_port}?useServerPrepStmts=false"\n        + "&cachePrepStmts=true&useSSL=false&useEncryption=false";\nString USER = "root";\nString PASS = "";\n\nConnection conn = DriverManager.getConnection(DB_URL, USER, PASS);\nStatement stmt = conn.createStatement();\nResultSet resultSet = stmt.executeQuery("select * from information_schema.tables;");\nwhile (resultSet.next()) {\n    System.out.println(resultSet.toString());\n}\n\nresultSet.close();\nstmt.close();\nconn.close();\n'})}),"\n",(0,o.jsx)(n.h2,{id:"java-usage",children:"Java Usage"}),"\n",(0,o.jsx)(n.p,{children:"In addition to using JDBC, similar to Python, JAVA can also create a Driver to read Doris and return data in Arrow format. The following are how to use AdbcDriver and JdbcDriver to connect to Doris Arrow Flight Server."}),"\n",(0,o.jsx)(n.p,{children:"POM dependency:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Java",children:"<properties>\n    <adbc.version>0.12.0</adbc.version>\n</properties>\n\n<dependencies>\n    <dependency>\n        <groupId>org.apache.arrow.adbc</groupId>\n        <artifactId>adbc-driver-jdbc</artifactId>\n        <version>${adbc.version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.apache.arrow.adbc</groupId>\n        <artifactId>adbc-core</artifactId>\n        <version>${adbc.version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.apache.arrow.adbc</groupId>\n        <artifactId>adbc-driver-manager</artifactId>\n        <version>${adbc.version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.apache.arrow.adbc</groupId>\n        <artifactId>adbc-sql</artifactId>\n        <version>${adbc.version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.apache.arrow.adbc</groupId>\n        <artifactId>adbc-driver-flight-sql</artifactId>\n        <version>${adbc.version}</version>\n    </dependency>\n</dependencies>\n"})}),"\n",(0,o.jsx)(n.h3,{id:"adbc-driver",children:"ADBC Driver"}),"\n",(0,o.jsx)(n.p,{children:"The connection code example is as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Java",children:'// 1. new driver\nfinal BufferAllocator allocator = new RootAllocator();\nFlightSqlDriver driver = new FlightSqlDriver(allocator);\nMap<String, Object> parameters = new HashMap<>();\nAdbcDriver.PARAM_URI.set(parameters, Location.forGrpcInsecure("{FE_HOST}", {fe.conf:arrow_flight_sql_port}).getUri().toString());\nAdbcDriver.PARAM_USERNAME.set(parameters, "root");\nAdbcDriver.PARAM_PASSWORD.set(parameters, "");\nAdbcDatabase adbcDatabase = driver.open(parameters);\n\n// 2. new connection\nAdbcConnection connection = adbcDatabase.connect();\nAdbcStatement stmt = connection.createStatement();\n\n// 3. execute query\nstmt.setSqlQuery("select * from information_schema.tables;");\nQueryResult queryResult = stmt.executeQuery();\nArrowReader reader = queryResult.getReader();\n\n// 4. load result\nList<String> result = new ArrayList<>();\nwhile (reader.loadNextBatch()) {\n    VectorSchemaRoot root = reader.getVectorSchemaRoot();\n    String tsvString = root.contentToTSVString();\n    result.add(tsvString);\n}\nSystem.out.printf("batchs %d\\n", result.size());\n\n// 5. close\nreader.close();\nqueryResult.close();\nstmt.close();\nconnection.close();\n'})}),"\n",(0,o.jsx)(n.h3,{id:"jdbc-driver",children:"JDBC Driver"}),"\n",(0,o.jsx)(n.p,{children:"When using Java 9 or later, some JDK internals must be exposed by adding --add-opens=java.base/java.nio=org.apache.arrow.memory.core,ALL-UNNAMED to the java command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'# Directly on the command line\n$ java --add-opens=java.base/java.nio=org.apache.arrow.memory.core,ALL-UNNAMED -jar ...\n# Indirectly via environment variables\n$ env _JAVA_OPTIONS="--add-opens=java.base/java.nio=org.apache.arrow.memory.core,ALL-UNNAMED" java -jar ...\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Otherwise, you may see some errors such as ",(0,o.jsx)(n.code,{children:'module java.base does not "opens java.nio" to unnamed module'})," or ",(0,o.jsx)(n.code,{children:'module java.base does not "opens java.nio" to org.apache.arrow.memory.core'})," or ",(0,o.jsx)(n.code,{children:"ava.lang.NoClassDefFoundError: Could not initialize class org.apache.arrow.memory.util.MemoryUtil (Internal; Prepare)"})]}),"\n",(0,o.jsxs)(n.p,{children:["If you debug in IntelliJ IDEA, you need to add ",(0,o.jsx)(n.code,{children:"--add-opens=java.base/java.nio=ALL-UNNAMED"})," in ",(0,o.jsx)(n.code,{children:"Build and run"})," of ",(0,o.jsx)(n.code,{children:"Run/Debug Configurations"}),", refer to the picture below:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://github.com/user-attachments/assets/7439ee6d-9013-40bf-89af-0365925d3fdb",alt:"IntelliJ IDEA"})}),"\n",(0,o.jsx)(n.p,{children:"The connection code example is as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Java",children:'final Map<String, Object> parameters = new HashMap<>();\nAdbcDriver.PARAM_URI.set(\n        parameters,"jdbc:arrow-flight-sql://{FE_HOST}:{fe.conf:arrow_flight_sql_port}?useServerPrepStmts=false&cachePrepStmts=true&useSSL=false&useEncryption=false");\nAdbcDriver.PARAM_USERNAME.set(parameters, "root");\nAdbcDriver.PARAM_PASSWORD.set(parameters, "");\ntry (\n        BufferAllocator allocator = new RootAllocator();\n        AdbcDatabase db = new JdbcDriver(allocator).open(parameters);\n        AdbcConnection connection = db.connect();\n        AdbcStatement stmt = connection.createStatement()\n) {\n    stmt.setSqlQuery("select * from information_schema.tables;");\n    AdbcStatement.QueryResult queryResult = stmt.executeQuery();\n    ArrowReader reader = queryResult.getReader();\n    List<String> result = new ArrayList<>();\n    while (reader.loadNextBatch()) {\n        VectorSchemaRoot root = reader.getVectorSchemaRoot();\n        String tsvString = root.contentToTSVString();\n        result.add(tsvString);\n    }\n    long etime = System.currentTimeMillis();\n    System.out.printf("batchs %d\\n", result.size());\n\n    reader.close();\n    queryResult.close();\n    stmt.close();\n}  catch (Exception e) {\n    e.printStackTrace();\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"choice-of-jdbc-and-java-connection-methods",children:"Choice of Jdbc and Java connection methods"}),"\n",(0,o.jsxs)(n.p,{children:["Compared with the traditional ",(0,o.jsx)(n.code,{children:"jdbc:mysql"})," connection method, the performance test of the Arrow Flight SQL connection method of Jdbc and Java can be found at ",(0,o.jsx)(n.a,{href:"https://github.com/apache/doris/issues/25514",children:"GitHub Issue"}),". Here are some usage suggestions based on the test conclusions."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"For the above three Java Arrow Flight SQL connection methods, if the subsequent data analysis will be based on the row-based data format, then use jdbc:arrow-flight-sql, which will return data in the JDBC ResultSet format; if the subsequent data analysis can be based on the Arrow format or other column-based data formats, then use Flight AdbcDriver or Flight JdbcDriver to directly return data in the Arrow format, which will avoid row-column conversion and use the characteristics of Arrow to accelerate data parsing."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Whether parsing data in JDBC ResultSet or Arrow format, the time spent is longer than the time spent reading data. If the performance of Arrow Flight SQL is not as expected and the improvement is limited compared with ",(0,o.jsx)(n.code,{children:"jdbc:mysql://"}),", you may want to analyze whether it takes too long to parse the data."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"For all connection methods, JDK 17 reads data faster than JDK 1.8."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["When reading a large amount of data, Arrow Flight SQL will use less memory than ",(0,o.jsx)(n.code,{children:"jdbc:mysql://"}),", so if you are troubled by insufficient memory, you can also try Arrow Flight SQL."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"In addition to the above three connection methods, you can also use the native FlightClient to connect to Arrow Flight Server, which can read multiple endpoints in parallel more flexibly. Flight AdbcDriver is also a link created based on FlightClient, which is simpler than using FlightClient directly."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"interaction-with-other-big-data-components",children:"Interaction with other big data components"}),"\n",(0,o.jsx)(n.h3,{id:"spark--flink",children:"Spark & \u200B\u200BFlink"}),"\n",(0,o.jsxs)(n.p,{children:["Arrow Flight currently has no official plan to support Spark and Flink (",(0,o.jsx)(n.a,{href:"https://github.com/apache/arrow-adbc/issues/1490",children:"GitHub Issue"}),"). Doris' own ",(0,o.jsx)(n.a,{href:"https://github.com/apache/doris-spark-connector",children:"Spark Connector"})," and ",(0,o.jsx)(n.a,{href:"https://github.com/apache/doris-flink-connector",children:"Flink Connector"})," do not currently support accessing Doris through Arrow Flight SQL. Among them, Doris Flink Connector supporting Arrow Flight SQL is under development, and it is expected to improve the reading performance several times."]}),"\n",(0,o.jsxs)(n.p,{children:["The community previously referred to the open source ",(0,o.jsx)(n.a,{href:"https://github.com/qwshen/spark-flight-connector",children:"Spark-Flight-Connector"})," and used FlightClient in Spark to connect to Doris for testing. It was found that the data format conversion between Arrow and Doris Block is faster, which is 10 times the conversion speed between CSV format and Doris Block, and it has better support for complex types such as Map and Array. This is because the Arrow data format has a high compression rate and low network overhead during transmission. However, Doris Arrow Flight has not yet implemented multi-node parallel reading. It still aggregates query results to a BE node and returns them. For simple batch export of data, the performance may not be as fast as Doris Spark Connector, which supports Tablet-level parallel reading. If you want to use Arrow Flight SQL to connect to Doris in Spark, you can refer to the open-sourced ",(0,o.jsx)(n.a,{href:"https://github.com/qwshen/spark-flight-connector",children:"Spark-Flight-Connector"})," and ",(0,o.jsx)(n.a,{href:"https://github.com/dremio-hub/dremio-flight-connector",children:"Dremio-Flight-Connector"})," to implement it yourself."]}),"\n",(0,o.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["ARM environment reports an error ",(0,o.jsx)(n.code,{children:"get flight info statement failed, arrow flight schema timeout, TimeoutException: Waited 5000 milliseconds for io.grpc.stub.Client"}),". If the Linux kernel version is <= 4.19.90, you need to upgrade to 4.19.279 or above, or recompile Doris BE in the environment of the lower version of the Linux kernel. For specific compilation methods, refer to the document <docs/dev/install/source-install/compilation-arm>"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Problem cause: This is because there is a compatibility issue between the old version of the Linux kernel and Arrow. ",(0,o.jsx)(n.code,{children:"cpp: arrow::RecordBatch::MakeEmpty()"})," will get stuck when constructing Arrow Record Batch, causing Doris BE's Arrow Flight Server to fail to respond to Doris FE's Arrow Flight Server RPC request within 5000ms, causing FE to return rpc timeout failed to Client. When Spark and Flink read Doris, they also convert the query results into Arrow Record Batch and return them, so the same problem exists."]}),"\n",(0,o.jsx)(n.p,{children:"The Linux kernel version of kylinv10 SP2 and SP3 is only up to 4.19.90-24.4.v2101.ky10.aarch64. You cannot continue to upgrade the kernel version. You can only recompile Doris BE on kylinv10. If the problem still exists after compiling Doris BE with the new version of ldb_toolchain, you can try to compile it with the lower version of ldb_toolchain v0.17. If your ARM environment cannot connect to the Internet, Huawei Cloud provides ARM + kylinv10, and Alibaba Cloud provides x86 + kylinv10"}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Currently, ",(0,o.jsx)(n.code,{children:"jdbc:arrow-flight-sql"})," and Java ADBC/JDBCDriver do not support prepared statement passing parameters. For example, ",(0,o.jsx)(n.code,{children:"select * from xxx where id=?"})," will report an error ",(0,o.jsx)(n.code,{children:"parameter ordinal 1 out of range"}),". This is a bug in Arrow Flight SQL (",(0,o.jsx)(n.a,{href:"https://github.com/apache/arrow/issues/40118",children:"GitHub Issue"}),")"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Modification ",(0,o.jsx)(n.code,{children:"jdbc:arrow-flight-sql"})," The batch size of each read can improve performance in some scenarios. By modifying the ",(0,o.jsx)(n.code,{children:"setTargetBatchSize"})," in the ",(0,o.jsx)(n.code,{children:"makeJdbcConfig"})," method in the ",(0,o.jsx)(n.code,{children:"org.apache.arrow.adbc.driver.jdbc.JdbcArrowReader"})," file, the default is 1024, and then saving the modified file to the local directory with the same name, it will overwrite the original file to take effect."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["ADBC \u200B\u200Bv0.10, JDBC and Java ADBC/JDBCDriver do not support parallel reading, and the ",(0,o.jsx)(n.code,{children:"stmt.executePartitioned()"})," method is not implemented. You can only use the native FlightClient to implement parallel reading of multiple Endpoints, using the method ",(0,o.jsx)(n.code,{children:"sqlClient=new FlightSqlClient, execute=sqlClient.execute(sql), endpoints=execute.getEndpoints(), for(FlightEndpoint endpoint: endpoints)"}),". In addition, the default AdbcStatement of ADBC \u200B\u200BV0.10 is actually JdbcStatement. After executeQuery, the row-format JDBC ResultSet is converted back to the Arrow column-format. It is expected that Java ADBC \u200B\u200Bwill be fully functional by ADBC \u200B\u200B1.0.0 ",(0,o.jsx)(n.a,{href:"https://github.com/apache/arrow-adbc/issues/1490",children:"GitHub Issue"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["As of Arrow v15.0, Arrow JDBC Connector does not support specifying the database name in the URL. For example, ",(0,o.jsx)(n.code,{children:"jdbc:arrow-flight-sql://{FE_HOST}:{fe.conf:arrow_flight_sql_port}/test?useServerPrepStmts=false"})," specifies that the connection to the ",(0,o.jsx)(n.code,{children:"test"})," database is invalid. You can only execute the SQL ",(0,o.jsx)(n.code,{children:"use database"})," manually."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["There is a bug in Doris 2.1.4 version. There is a chance of error when reading large amounts of data. This bug is fixed in ",(0,o.jsx)(n.a,{href:"https://github.com/apache/doris/pull/36827",children:"Fix arrow flight result sink #36827"})," PR. Upgrading Doris 2.1.5 version can solve this problem. For details of the problem, see: ",(0,o.jsx)(n.a,{href:"https://ask.selectdb.com/questions/D1Ia1/arrow-flight-sql-shi-yong-python-de-adbc-driver-lian-jie-doris-zhi-xing-cha-xun-sql-du-qu-bu-dao-shu-ju",children:"Questions"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Warning: Cannot disable autocommit; conn will not be DB-API 2.0 compliant"})," Ignore this warning when using Python. This is a problem with the Python ADBC \u200B\u200BClient and will not affect the query."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Python reports an error ",(0,o.jsx)(n.code,{children:"grpc: received message larger than max (20748753 vs. 16777216)"}),". Refer to ",(0,o.jsx)(n.a,{href:"https://github.com/apache/arrow-adbc/issues/2078",children:"Python: grpc: received message larger than max (20748753 vs. 16777216) #2078"})," to add ",(0,o.jsx)(n.code,{children:"adbc_driver_flightsql.DatabaseOptions.WITH_MAX_MSG_SIZE.value"})," in Database Option."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Before Doris version 2.1.7, the error ",(0,o.jsx)(n.code,{children:"Reach limit of connections"})," is reported. This is because there is no limit on the number of Arrow Flight connections for a single user, which is less than ",(0,o.jsx)(n.code,{children:"max_user_connections"})," in ",(0,o.jsx)(n.code,{children:"UserProperty"}),", which is 100 by default. You can modify the current maximum number of connections for Billie user to 100 by ",(0,o.jsx)(n.code,{children:"SET PROPERTY FOR 'Billie' 'max_user_connections' = '1000';"}),", or add ",(0,o.jsx)(n.code,{children:"arrow_flight_token_cache_size=50"})," in ",(0,o.jsx)(n.code,{children:"fe.conf"})," to limit the overall number of Arrow Flight connections. Before Doris version 2.1.7, Arrow Flight connections are disconnected after a default timeout of 3 days. It only forces the number of connections to be less than ",(0,o.jsx)(n.code,{children:"qe_max_connection/2"}),". If the number of connections exceeds the limit, they will be eliminated according to lru. ",(0,o.jsx)(n.code,{children:"qe_max_connection"})," is the total number of connections for all fe users, which is 1024 by default. For details, see the introduction of the conf ",(0,o.jsx)(n.code,{children:"arrow_flight_token_cache_size"}),". Fixed in ",(0,o.jsx)(n.a,{href:"https://github.com/apache/doris/pull/39127",children:"Fix exceed user property max connection cause Reach limit of connections #39127"}),". For details, please see: [Questions](",(0,o.jsx)(n.a,{href:"https://ask.selectdb.com/questions/D18b1/2-1-4-ban-ben-python-shi-yong-arrow-flight-sql-lian-jie-bu-hui-duan-kai-lian-jie-",children:"https://ask.selectdb.com/questions/D18b1/2-1-4-ban-ben-python-shi-yong-arrow-flight-sql-lian-jie-bu-hui-duan-kai-lian-jie-"})," shu-zhan-man-da-dao-100/E1ic1?commentId=10070000000005324)"]}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},347174:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/Arrow_Flight_SQL-c51538bca23f1062d141adab8fe055cb.png"},250065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return i}});var t=r(667294);let o={},a=t.createContext(o);function i(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);