"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["989233"],{248515:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>i,default:()=>u,assets:()=>l,toc:()=>d,frontMatter:()=>r});var a=JSON.parse('{"id":"data-operate/import/data-source/kafka","title":"Kafka","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/data-operate/import/data-source/kafka.md","sourceDirName":"data-operate/import/data-source","slug":"/data-operate/import/data-source/kafka","permalink":"/docs/data-operate/import/data-source/kafka","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Kafka","language":"en"},"sidebar":"docs","previous":{"title":"local file","permalink":"/docs/data-operate/import/data-source/local-file"},"next":{"title":"Flink","permalink":"/docs/data-operate/import/data-source/flink"}}'),o=t("785893"),s=t("250065");let r={title:"Kafka",language:"en"},i=void 0,l={},d=[{value:"Using Routine Load to consume Kafka data",id:"using-routine-load-to-consume-kafka-data",level:2},{value:"Usage Restrictions",id:"usage-restrictions",level:3},{value:"Operation Example",id:"operation-example",level:3},{value:"Single Table Load",id:"single-table-load",level:4},{value:"Multi-Table Load",id:"multi-table-load",level:4},{value:"<strong>Configure Security Authentication</strong>",id:"configure-security-authentication",level:4},{value:"Using Doris Kafka Connector to consume Kafka data",id:"using-doris-kafka-connector-to-consume-kafka-data",level:2},{value:"Start in Distributed Mode",id:"start-in-distributed-mode",level:3},{value:"Load Ordinary Data",id:"load-ordinary-data",level:3},{value:"Load Data Collected by Debezium Component",id:"load-data-collected-by-debezium-component",level:3},{value:"Load Data in AVRO Serialization Format",id:"load-data-in-avro-serialization-format",level:3},{value:"Load Data in Protobuf Serialization Format",id:"load-data-in-protobuf-serialization-format",level:3}];function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Doris provides the following methods to load data from Kafka:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"Using Routine Load to consume Kafka data"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Doris continuously consumes data from Kafka Topics through Routine Load. After submitting a Routine Load job, Doris generates load tasks in real-time to consume messages from the specified Topic in the Kafka cluster. Routine Load supports CSV and JSON formats, with Exactly-Once semantics, ensuring that data is neither lost nor duplicated.For more documentation, please refer to ",(0,o.jsx)(n.a,{href:"/docs/data-operate/import/import-way/routine-load-manual",children:"Routine Load"}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"Doris Kafka Connector to consume Kafka data"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The Doris Kafka Connector is a tool for loading Kafka data streams into the Doris database. Users can easily load various serialization formats (such as JSON, Avro, Protobuf) through the Kafka Connect plugin, and it supports parsing data formats from the Debezium component. For more documentation, please refer to ",(0,o.jsx)(n.a,{href:"/docs/ecosystem/doris-kafka-connector",children:"Doris Kafka Connector"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"In most cases, you can directly choose Routine Load for loading data without the need to integrate external components to consume Kafka data. When you need to load data in Avro or Protobuf formats, or data collected from upstream databases via Debezium, you can use the Doris Kafka Connector."}),"\n",(0,o.jsx)(n.h2,{id:"using-routine-load-to-consume-kafka-data",children:"Using Routine Load to consume Kafka data"}),"\n",(0,o.jsx)(n.h3,{id:"usage-restrictions",children:"Usage Restrictions"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Supported message formats are CSV and JSON. Each CSV message is one line, and the line does not contain a newline character at the end;"}),"\n",(0,o.jsxs)(n.li,{children:["By default, it supports Kafka version 0.10.0.0 and above. If you need to use older versions (such as 0.9.0, 0.8.2, 0.8.1, 0.8.0), you need to modify the BE configuration to set ",(0,o.jsx)(n.code,{children:"kafka_broker_version_fallback"})," to a compatible older version, or set ",(0,o.jsx)(n.code,{children:"property.broker.version.fallback"})," when creating the Routine Load. Using older versions may result in some new features being unavailable, such as setting Kafka partition offsets based on time."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"operation-example",children:"Operation Example"}),"\n",(0,o.jsxs)(n.p,{children:["In Doris, create a persistent Routine Load load task through the CREATE ROUTINE LOAD command, which can be divided into single-table load and multi-table load. For detailed syntax, please refer to ",(0,o.jsx)(n.a,{href:"../../../sql-manual/sql-statements/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD",children:"CREATE ROUTINE LOAD"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"single-table-load",children:"Single Table Load"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Step 1: Prepare Data"})}),"\n",(0,o.jsx)(n.p,{children:"In Kafka, sample data is as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:"kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test-routine-load-csv --from-beginning\n1,Emily,25\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Step 2: Create Table in Database"})}),"\n",(0,o.jsx)(n.p,{children:"Create the table to be loaded in Doris, with the following syntax:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE testdb.test_routineload_tbl(\n    user_id            BIGINT       NOT NULL COMMENT "user id",\n    name               VARCHAR(20)           COMMENT "name",\n    age                INT                   COMMENT "age"\n)\nDUPLICATE KEY(user_id)\nDISTRIBUTED BY HASH(user_id) BUCKETS 10;\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Step 3: Create Routine Load job to load data into a single table"})}),"\n",(0,o.jsx)(n.p,{children:"In Doris, use the CREATE ROUTINE LOAD command to create the load job:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:'CREATE ROUTINE LOAD testdb.example_routine_load_csv ON test_routineload_tbl\nCOLUMNS TERMINATED BY ",",\nCOLUMNS(user_id, name, age)\nFROM KAFKA(\n    "kafka_broker_list" = "192.168.88.62:9092",\n    "kafka_topic" = "test-routine-load-csv",\n    "property.kafka_default_offsets" = "OFFSET_BEGINNING"\n);\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Step 4: Check Loaded Data"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:"mysql> select * from test_routineload_tbl;\n+-----------+----------------+------+\n| user_id   | name           | age  |\n+-----------+----------------+------+\n|  1        | Emily          | 25   |\n+-----------+----------------+------+\n1 rows in set (0.01 sec)\n"})}),"\n",(0,o.jsx)(n.h4,{id:"multi-table-load",children:"Multi-Table Load"}),"\n",(0,o.jsxs)(n.p,{children:["In scenarios where multiple tables need to be loaded simultaneously, the data in Kafka must include table name information, formatted as: ",(0,o.jsx)(n.code,{children:"table_name|data"}),". For example, when loading CSV data, the format should be: ",(0,o.jsx)(n.code,{children:"table_name|val1,val2,val3"}),". Please note that the table name must exactly match the table name in Doris; otherwise, the loading will fail, and the column_mapping configuration introduced later is not supported."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Step 1: Prepare Data"})}),"\n",(0,o.jsx)(n.p,{children:"In Kafka, sample data is as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:"kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test-multi-table-load --from-beginning\ntest_multi_table_load1|1,Emily,25\ntest_multi_table_load2|2,Benjamin,35\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Step 2: Create Tables in Database"})}),"\n",(0,o.jsx)(n.p,{children:"Create the tables to be loaded in Doris, with the following syntax:"}),"\n",(0,o.jsx)(n.p,{children:"Table 1:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE test_multi_table_load1(\n    user_id            BIGINT       NOT NULL COMMENT "User ID",\n    name               VARCHAR(20)           COMMENT "User Name",\n    age                INT                   COMMENT "User Age"\n)\nDUPLICATE KEY(user_id)\nDISTRIBUTED BY HASH(user_id) BUCKETS 10;\n'})}),"\n",(0,o.jsx)(n.p,{children:"Table 2:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE test_multi_table_load2(\n    user_id            BIGINT       NOT NULL COMMENT "User ID",\n    name               VARCHAR(20)           COMMENT "User Name",\n    age                INT                   COMMENT "User Age"\n)\nDUPLICATE KEY(user_id)\nDISTRIBUTED BY HASH(user_id) BUCKETS 10;\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Step 3: Create Routine Load job to load data into multiple tables"})}),"\n",(0,o.jsx)(n.p,{children:"In Doris, use the CREATE ROUTINE LOAD command to create the load job:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:'CREATE ROUTINE LOAD example_multi_table_load\nCOLUMNS TERMINATED BY ","\nFROM KAFKA(\n    "kafka_broker_list" = "192.168.88.62:9092",\n    "kafka_topic" = "test-multi-table-load",\n    "property.kafka_default_offsets" = "OFFSET_BEGINNING"\n);\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Step 4: Check Loaded Data"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:"mysql> select * from test_multi_table_load1;\n+------+----------------+------+\n| id   | name           | age  |\n+------+----------------+------+\n|  1   | Emily          | 25   |\n+------+----------------+------+\n1 rows in set (0.01 sec)\n\nmysql> select * from test_multi_table_load2;\n+------+----------------+------+\n| id   | name           | age  |\n+------+----------------+------+\n|  2   | Benjamin       | 35   |\n+------+----------------+------+\n1 rows in set (0.01 sec)\n"})}),"\n",(0,o.jsx)(n.h4,{id:"configure-security-authentication",children:(0,o.jsx)(n.strong,{children:"Configure Security Authentication"})}),"\n",(0,o.jsxs)(n.p,{children:["For methods of configuring Kafka with authentication, please refer to ",(0,o.jsx)(n.a,{href:"/docs/data-operate/import/import-way/routine-load-manual#kafka-security-authentication",children:"Kafka Security Authentication"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"using-doris-kafka-connector-to-consume-kafka-data",children:"Using Doris Kafka Connector to consume Kafka data"}),"\n",(0,o.jsx)(n.p,{children:"The Doris Kafka Connector is a tool for loading Kafka data streams into the Doris database. Users can easily load various serialization formats (such as JSON, Avro, Protobuf) through the Kafka Connect plugin, and it supports parsing data formats from the Debezium component."}),"\n",(0,o.jsx)(n.h3,{id:"start-in-distributed-mode",children:"Start in Distributed Mode"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://docs.confluent.io/platform/current/connect/index.html#distributed-workers",children:"Distributed"})," mode provides scalability and automatic fault tolerance for Kafka Connect. In this mode, multiple worker processes can be started using the same ",(0,o.jsx)(n.code,{children:"group.id"}),", which will coordinate the execution of connectors and tasks across all available worker processes."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Create a plugins directory under ",(0,o.jsx)(n.code,{children:"$KAFKA_HOME"})," and place the downloaded doris-kafka-connector jar package inside."]}),"\n",(0,o.jsxs)(n.li,{children:["Configure ",(0,o.jsx)(n.code,{children:"config/connect-distributed.properties"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Bash",children:"# Modify kafka server address\nbootstrap.servers=127.0.0.1:9092\n\n# Modify group.id, which needs to be consistent across the same cluster\ngroup.id=connect-cluster\n\n# Modify to the created plugins directory\n# Note: Please fill in the direct path of Kafka here. For example: plugin.path=/opt/kafka/plugins\nplugin.path=$KAFKA_HOME/plugins\n\n# It is recommended to increase Kafka's max.poll.interval.ms time to over 30 minutes, default is 5 minutes\n# To avoid Stream Load data load consumption timeout, causing the consumer to be kicked out of the consumption group\nmax.poll.interval.ms=1800000\nconsumer.max.poll.interval.ms=1800000\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"Start:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Bash",children:"$KAFKA_HOME/bin/connect-distributed.sh -daemon $KAFKA_HOME/config/connect-distributed.properties\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsx)(n.li,{children:"Consume Kafka data:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Bash",children:'curl -i http://127.0.0.1:8083/connectors -H "Content-Type: application/json" -X POST -d \'{\n  "name":"test-doris-sink-cluster",\n  "config":{\n    "connector.class":"org.apache.doris.kafka.connector.DorisSinkConnector",\n    "topics":"topic_test",\n    "doris.topic2table.map": "topic_test:test_kafka_tbl",\n    "buffer.count.records":"10000",\n    "buffer.flush.time":"120",\n    "buffer.size.bytes":"5000000",\n    "doris.urls":"10.10.10.1",\n    "doris.user":"root",\n    "doris.password":"",\n    "doris.http.port":"8030",\n    "doris.query.port":"9030",\n    "doris.database":"test_db",\n    "key.converter":"org.apache.kafka.connect.storage.StringConverter",\n    "value.converter":"org.apache.kafka.connect.storage.StringConverter"\n  }\n}\'\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Operate Kafka Connect"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Bash",children:"# View connector status\ncurl -i http://127.0.0.1:8083/connectors/test-doris-sink-cluster/status -X GET\n# Delete current connector\ncurl -i http://127.0.0.1:8083/connectors/test-doris-sink-cluster -X DELETE\n# Pause current connector\ncurl -i http://127.0.0.1:8083/connectors/test-doris-sink-cluster/pause -X PUT\n# Resume current connector\ncurl -i http://127.0.0.1:8083/connectors/test-doris-sink-cluster/resume -X PUT\n# Restart tasks within the connector\ncurl -i http://127.0.0.1:8083/connectors/test-doris-sink-cluster/tasks/0/restart -X POST\n"})}),"\n",(0,o.jsxs)(n.p,{children:["For an introduction to Distributed mode, please refer to ",(0,o.jsx)(n.a,{href:"https://docs.confluent.io/platform/current/connect/index.html#distributed-workers",children:"Distributed Workers"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"load-ordinary-data",children:"Load Ordinary Data"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Load sample data:"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"In Kafka, sample data is as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Bash",children:'kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test-data-topic --from-beginning\n{"user_id":1,"name":"Emily","age":25}\n{"user_id":2,"name":"Benjamin","age":35}\n{"user_id":3,"name":"Olivia","age":28}\n{"user_id":4,"name":"Alexander","age":60}\n{"user_id":5,"name":"Ava","age":17}\n{"user_id":6,"name":"William","age":69}\n{"user_id":7,"name":"Sophia","age":32}\n{"user_id":8,"name":"James","age":64}\n{"user_id":9,"name":"Emma","age":37}\n{"user_id":10,"name":"Liam","age":64}\n'})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"Create the table to be loaded:"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Create the table to be loaded in Doris, with the following syntax:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE test_db.test_kafka_connector_tbl(\n    user_id            BIGINT       NOT NULL COMMENT "user id",\n    name               VARCHAR(20)           COMMENT "name",\n    age                INT                   COMMENT "age"\n)\nDUPLICATE KEY(user_id)\nDISTRIBUTED BY HASH(user_id) BUCKETS 12;\n'})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"Create the load task:"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"On the machine where Kafka Connect is deployed, submit the following load task via curl command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Bash",children:'curl -i http://127.0.0.1:8083/connectors -H "Content-Type: application/json" -X POST -d \'{\n  "name":"test-doris-sink-cluster",\n  "config":{\n    "connector.class":"org.apache.doris.kafka.connector.DorisSinkConnector",\n    "tasks.max":"10",\n    "topics":"test-data-topic",\n    "doris.topic2table.map": "test-data-topic:test_kafka_connector_tbl",\n    "buffer.count.records":"10000",\n    "buffer.flush.time":"120",\n    "buffer.size.bytes":"5000000",\n    "doris.urls":"10.10.10.1",\n    "doris.user":"root",\n    "doris.password":"",\n    "doris.http.port":"8030",\n    "doris.query.port":"9030",\n    "doris.database":"test_db",\n    "key.converter":"org.apache.kafka.connect.storage.StringConverter",\n    "value.converter":"org.apache.kafka.connect.storage.StringConverter"\n  }\n}\'\n'})}),"\n",(0,o.jsx)(n.h3,{id:"load-data-collected-by-debezium-component",children:"Load Data Collected by Debezium Component"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"The MySQL database has the following table:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE test.test_user (\n  user_id int NOT NULL ,\n  name varchar(20),\n  age int,\n  PRIMARY KEY (user_id)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;\n\ninsert into test.test_user values(1,'zhangsan',20);\ninsert into test.test_user values(2,'lisi',21);\ninsert into test.test_user values(3,'wangwu',22);\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"Create the table to be loaded in Doris:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE test_db.test_user(\n    user_id            BIGINT       NOT NULL COMMENT "user id",\n    name               VARCHAR(20)           COMMENT "name",\n    age                INT                   COMMENT "age"\n)\nUNIQUE KEY(user_id)\nDISTRIBUTED BY HASH(user_id) BUCKETS 12;\n'})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Deploy the Debezium connector for MySQL component, refer to: ",(0,o.jsx)(n.a,{href:"https://debezium.io/documentation/reference/stable/connectors/mysql.html",children:"Debezium connector for MySQL"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Create the doris-kafka-connector load task:"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Assuming the data from the MySQL table collected by Debezium is in the ",(0,o.jsx)(n.code,{children:"mysql_debezium.test.test_user"})," Topic:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Bash",children:'curl -i http://127.0.0.1:8083/connectors -H "Content-Type: application/json" -X POST -d \'{\n  "name":"test-debezium-doris-sink",\n  "config":{\n    "connector.class":"org.apache.doris.kafka.connector.DorisSinkConnector",\n    "tasks.max":"10",\n    "topics":"mysql_debezium.test.test_user",\n    "doris.topic2table.map": "mysql_debezium.test.test_user:test_user",\n    "buffer.count.records":"10000",\n    "buffer.flush.time":"120",\n    "buffer.size.bytes":"5000000",\n    "doris.urls":"10.10.10.1",\n    "doris.user":"root",\n    "doris.password":"",\n    "doris.http.port":"8030",\n    "doris.query.port":"9030",\n    "doris.database":"test_db",\n    "converter.mode":"debezium_ingestion",\n    "enable.delete":"true",\n    "key.converter":"org.apache.kafka.connect.json.JsonConverter",\n    "value.converter":"org.apache.kafka.connect.json.JsonConverter"\n  }\n}\'\n'})}),"\n",(0,o.jsx)(n.h3,{id:"load-data-in-avro-serialization-format",children:"Load Data in AVRO Serialization Format"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Bash",children:'curl -i http://127.0.0.1:8083/connectors -H "Content-Type: application/json" -X POST -d \'{ \n  "name":"doris-avro-test", \n  "config":{ \n    "connector.class":"org.apache.doris.kafka.connector.DorisSinkConnector", \n    "topics":"avro_topic", \n    "tasks.max":"10",\n    "doris.topic2table.map": "avro_topic:avro_tab", \n    "buffer.count.records":"100000", \n    "buffer.flush.time":"120", \n    "buffer.size.bytes":"10000000", \n    "doris.urls":"10.10.10.1", \n    "doris.user":"root", \n    "doris.password":"", \n    "doris.http.port":"8030", \n    "doris.query.port":"9030", \n    "doris.database":"test", \n    "load.model":"stream_load",\n    "key.converter":"io.confluent.connect.avro.AvroConverter",\n    "key.converter.schema.registry.url":"http://127.0.0.1:8081",\n    "value.converter":"io.confluent.connect.avro.AvroConverter",\n    "value.converter.schema.registry.url":"http://127.0.0.1:8081"\n  } \n}\'\n'})}),"\n",(0,o.jsx)(n.h3,{id:"load-data-in-protobuf-serialization-format",children:"Load Data in Protobuf Serialization Format"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Bash",children:'curl -i http://127.0.0.1:8083/connectors -H "Content-Type: application/json" -X POST -d \'{ \n  "name":"doris-protobuf-test", \n  "config":{ \n    "connector.class":"org.apache.doris.kafka.connector.DorisSinkConnector", \n    "topics":"proto_topic", \n    "tasks.max":"10",\n    "doris.topic2table.map": "proto_topic:proto_tab", \n    "buffer.count.records":"100000", \n    "buffer.flush.time":"120", \n    "buffer.size.bytes":"10000000", \n    "doris.urls":"10.10.10.1", \n    "doris.user":"root", \n    "doris.password":"", \n    "doris.http.port":"8030", \n    "doris.query.port":"9030", \n    "doris.database":"test", \n    "load.model":"stream_load",\n    "key.converter":"io.confluent.connect.protobuf.ProtobufConverter",\n    "key.converter.schema.registry.url":"http://127.0.0.1:8081",\n    "value.converter":"io.confluent.connect.protobuf.ProtobufConverter",\n    "value.converter.schema.registry.url":"http://127.0.0.1:8081"\n  } \n}\'\n'})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return r}});var a=t(667294);let o={},s=a.createContext(o);function r(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);