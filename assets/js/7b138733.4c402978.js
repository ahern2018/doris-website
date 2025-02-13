"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["611472"],{826668:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>u,assets:()=>o,toc:()=>d,frontMatter:()=>r});var i=JSON.parse('{"id":"query-data/udf/java-user-defined-function","title":"Java UDF, UDAF, UDTF","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/query-data/udf/java-user-defined-function.md","sourceDirName":"query-data/udf","slug":"/query-data/udf/java-user-defined-function","permalink":"/docs/query-data/udf/java-user-defined-function","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Java UDF, UDAF, UDTF","language":"en"},"sidebar":"docs","previous":{"title":"Alias Function","permalink":"/docs/query-data/udf/alias-function"},"next":{"title":"Complex Type","permalink":"/docs/query-data/complex-type"}}'),a=t("785893"),s=t("250065");let r={title:"Java UDF, UDAF, UDTF",language:"en"},l=void 0,o={},d=[{value:"Overview",id:"overview",level:2},{value:"Type Correspondence",id:"type-correspondence",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Introduction to Java-UDF Example",id:"introduction-to-java-udf-example",level:3},{value:"Introduction to Java-UDAF Example",id:"introduction-to-java-udaf-example",level:3},{value:"Introduction to Java-UDTF Example",id:"introduction-to-java-udtf-example",level:3},{value:"Best Practices",id:"best-practices",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(n.p,{children:'Java UDF provides a Java interface for users to implement user-defined functions (UDFs) conveniently using the Java programming language.\nDoris supports the use of Java to develop UDFs, UDAFs, and UDTFs. Unless otherwise specified, "UDF" in the following text refers to all types of user-defined functions.'}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Java UDF: A Java UDF is a commonly used scalar function, where each input row produces a corresponding output row. Common examples include ABS and LENGTH. Notably, Hive UDFs can be directly migrated to Doris, which is convenient for users."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Java UDAF: A Java UDAF is a user-defined aggregate function that aggregates multiple input rows into a single output row. Common examples include MIN, MAX, and COUNT."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Java UDTF: A Java UDTF is a user-defined table function, where a single input row can generate one or multiple output rows. In Doris, UDTFs must be used with Lateral View to achieve row-to-column transformations. Common examples include EXPLODE and EXPLODE_SPLIT."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"type-correspondence",children:"Type Correspondence"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"UDF Argument Type"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Bool"}),(0,a.jsx)(n.td,{children:"Boolean"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"TinyInt"}),(0,a.jsx)(n.td,{children:"Byte"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"SmallInt"}),(0,a.jsx)(n.td,{children:"Short"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Int"}),(0,a.jsx)(n.td,{children:"Integer"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"BigInt"}),(0,a.jsx)(n.td,{children:"Long"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"LargeInt"}),(0,a.jsx)(n.td,{children:"BigInteger"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Float"}),(0,a.jsx)(n.td,{children:"Float"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Double"}),(0,a.jsx)(n.td,{children:"Double"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Date"}),(0,a.jsx)(n.td,{children:"LocalDate"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Datetime"}),(0,a.jsx)(n.td,{children:"LocalDateTime"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"IPV4/IPV6"}),(0,a.jsx)(n.td,{children:"InetAddress"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"String"}),(0,a.jsx)(n.td,{children:"String"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Decimal"}),(0,a.jsx)(n.td,{children:"BigDecimal"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"array<Type>"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"ArrayList<Type>"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"map<Type1,Type2>"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"HashMap<Type1,Type2>"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"struct<Type...>"})}),(0,a.jsxs)(n.td,{children:[(0,a.jsx)(n.code,{children:"ArrayList<Object>"})," (from version 3.0.0)"]})]})]})]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"array/map/struct"})," types can be nested with other types. For instance, Doris: ",(0,a.jsx)(n.code,{children:"array<array<int>>"})," corresponds to JAVA UDF Argument Type: ",(0,a.jsx)(n.code,{children:"ArrayList<ArrayList<Integer>>"}),". Other types follow the same pattern."]})}),"\n",(0,a.jsx)(n.admonition,{title:"Warning",type:"caution",children:(0,a.jsxs)(n.p,{children:["When creating functions, avoid using ",(0,a.jsx)(n.code,{children:"varchar"})," in place of ",(0,a.jsx)(n.code,{children:"string"}),", as this may cause the function to fail."]})}),"\n",(0,a.jsx)(n.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Complex data types (HLL, Bitmap) are not supported."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Users are currently allowed to specify the maximum JVM heap size. The configuration item is the ",(0,a.jsx)(n.code,{children:"-Xmx"})," part of ",(0,a.jsx)(n.code,{children:"JAVA_OPTS"})," in ",(0,a.jsx)(n.code,{children:"be.conf"}),". The default is 1024m. If you need to aggregate data, it is recommended to increase this value to enhance performance and reduce the risk of memory overflow."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Due to issues with JVM loading classes with the same name, do not use multiple classes with the same name as UDF implementations simultaneously. If you want to update a UDF with a class of the same name, you need to restart BE to reload the classpath."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,a.jsxs)(n.p,{children:["This section mainly introduces how to develop a Java UDF. Examples are provided in ",(0,a.jsx)(n.code,{children:"samples/doris-demo/java-udf-demo/"})," for reference. Click ",(0,a.jsx)(n.a,{href:"https://github.com/apache/doris/tree/master/samples/doris-demo/java-udf-demo",children:"here"})," to view details."]}),"\n",(0,a.jsx)(n.p,{children:"The usage of UDFs is identical to standard functions, with the primary distinction being that built-in functions have a global scope, while UDFs are scoped within the DB."}),"\n",(0,a.jsxs)(n.p,{children:["When the session is linked within the database, directly using the UDF name will search for the corresponding UDF within the current DB. Otherwise, users must explicitly specify the UDF's database name, for example, ",(0,a.jsx)(n.code,{children:"dbName.funcName"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["In the following sections, examples will use the table ",(0,a.jsx)(n.code,{children:"test_table"}),". The corresponding table creation script is as follows:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `test_table` (\n    id int NULL,\n    d1 double NULL,\n    str string NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 1\nPROPERTIES (\n"replication_num" = "1");\n\ninsert into test_table values (1, 111.11, "a,b,c");\ninsert into test_table values (6, 666.66, "d,e");\n'})}),"\n",(0,a.jsx)(n.h3,{id:"introduction-to-java-udf-example",children:"Introduction to Java-UDF Example"}),"\n",(0,a.jsxs)(n.p,{children:["When writing a UDF in Java, the main entry point must be the ",(0,a.jsx)(n.code,{children:"evaluate"})," function. This is consistent with other engines like Hive. In this example, we write an ",(0,a.jsx)(n.code,{children:"AddOne"})," UDF to perform an increment operation on integer inputs."]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Write the corresponding Java code and package it into a JAR file."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public class AddOne extends UDF {\n    public Integer evaluate(Integer value) {\n        return value == null ? null : value + 1;\n    }\n}\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Register and create the Java-UDF function in Doris. For more details on the syntax, refer to ",(0,a.jsx)(n.a,{href:"../../sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-FUNCTION.md",children:"CREATE FUNCTION"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'CREATE FUNCTION java_udf_add_one(int) RETURNS int PROPERTIES (\n    "file"="file:///path/to/java-udf-demo-jar-with-dependencies.jar",\n    "symbol"="org.apache.doris.udf.AddOne",\n    "always_nullable"="true",\n    "type"="JAVA_UDF"\n);\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["To utilize UDFs, users must possess the ",(0,a.jsx)(n.code,{children:"SELECT"})," privilege for the corresponding database. And to verify the successful registration of the UDF, you can use the ",(0,a.jsx)(n.a,{href:"../../sql-manual/sql-statements/Show-Statements/SHOW-FUNCTIONS.md",children:"SHOW FUNCTIONS"})," command."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select id,java_udf_add_one(id) from test_table;\n+------+----------------------+\n| id   | java_udf_add_one(id) |\n+------+----------------------+\n|    1 |                    2 |\n|    6 |                    7 |\n+------+----------------------+\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["If a UDF is no longer needed, it can be dropped using the following command, as detailed in ",(0,a.jsx)(n.a,{href:"../../sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-FUNCTION",children:"DROP FUNCTION"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Additionally, if your UDF requires loading large resource files or defining global static variables, you can refer to the method for loading static variables described later in this document."}),"\n",(0,a.jsx)(n.h3,{id:"introduction-to-java-udaf-example",children:"Introduction to Java-UDAF Example"}),"\n",(0,a.jsxs)(n.p,{children:["When writing a ",(0,a.jsx)(n.code,{children:"UDAF"})," using Java, there are some functions that must be implemented (marked as required) along with an internal class State. The following example will illustrate how to implement them."]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Write the corresponding Java UDAF code and package it into a JAR file."}),"\n"]}),"\n",(0,a.jsxs)(n.details,{children:["\n",(0,a.jsx)(n.summary,{children:" Example 1: SimpleDemo will implement a simple function similar to sum, where the input parameter is INT and the output parameter is INT."})," \n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'package org.apache.doris.udf;\n\nimport java.io.DataInputStream;\nimport java.io.DataOutputStream;\nimport java.io.IOException;\nimport java.util.logging.Logger;\n\npublic class SimpleDemo  {\n\n    Logger log = Logger.getLogger("SimpleDemo");\n\n    //Need an inner class to store data\n    /*required*/\n    public static class State {\n        /*some variables if you need */\n        public int sum = 0;\n    }\n\n    /*required*/\n    public State create() {\n        /* here could do some init work if needed */\n        return new State();\n    }\n\n    /*required*/\n    public void destroy(State state) {\n        /* here could do some destroy work if needed */\n    }\n\n    /*Not Required*/\n    public void reset(State state) {\n        /*if you want this udaf function can work with window function.*/\n        /*Must impl this, it will be reset to init state after calculate every window frame*/\n        state.sum = 0;\n    }\n\n    /*required*/\n    //first argument is State, then other types your input\n    public void add(State state, Integer val) throws Exception {\n        /* here doing update work when input data*/\n        if (val != null) {\n            state.sum += val;\n        }\n    }\n\n    /*required*/\n    public void serialize(State state, DataOutputStream out) throws Exception {\n        /* serialize some data into buffer */\n        out.writeInt(state.sum);\n    }\n\n    /*required*/\n    public void deserialize(State state, DataInputStream in) throws Exception {\n        /* deserialize get data from buffer before you put */\n        int val = in.readInt();\n        state.sum = val;\n    }\n\n    /*required*/\n    public void merge(State state, State rhs) throws Exception {\n        /* merge data from state */\n        state.sum += rhs.sum;\n    }\n\n    /*required*/\n    //return Type you defined\n    public Integer getValue(State state) throws Exception {\n        /* return finally result */\n        return state.sum;\n    }\n}\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.details,{children:["\n",(0,a.jsx)(n.summary,{children:" Example 2: MedianUDAF is a function that calculates the median. The input types are (DOUBLE, INT), and the output type is DOUBLE. "}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'package org.apache.doris.udf.demo;  \n\nimport java.io.DataInputStream;  \nimport java.io.DataOutputStream;\nimport java.io.IOException;\nimport java.math.BigDecimal;  \nimport java.util.Arrays;  \nimport java.util.logging.Logger;  \n\n/* UDAF to calculate the median */  \npublic class MedianUDAF {  \n    Logger log = Logger.getLogger("MedianUDAF");  \n\n    // State storage  \n    public static class State {  \n        // Precision of the return result  \n        int scale = 0;  \n        // Whether it is the first time to execute the add method for a certain aggregation condition under a certain tablet  \n        boolean isFirst = true;  \n        // Data storage  \n        public StringBuilder stringBuilder;  \n    }  \n\n    // Initialize the state  \n    public State create() {  \n        State state = new State();  \n        // Pre-initialize based on the amount of data that needs to be aggregated under each aggregation condition of each tablet to increase performance  \n        state.stringBuilder = new StringBuilder(1000);  \n        return state;  \n    }  \n\n    // Process each data under respective aggregation conditions for each tablet  \n    public void add(State state, Double val, int scale) {  \n        if (val != null && state.isFirst) {  \n            state.stringBuilder.append(scale).append(",").append(val).append(",");  \n            state.isFirst = false;  \n        } else if (val != null) {  \n            state.stringBuilder.append(val).append(",");  \n        }  \n    }  \n\n    // Data needs to be output for aggregation after processing  \n    public void serialize(State state, DataOutputStream out) throws IOException {  \n        // Currently, only DataOutputStream is provided. If serialization of objects is required, methods such as concatenating strings, converting to JSON, or serializing into byte arrays can be considered  \n        // If the State object needs to be serialized, it may be necessary to implement a serialization interface for the State inner class  \n        // Ultimately, everything needs to be transmitted via DataOutputStream  \n        out.writeUTF(state.stringBuilder.toString());  \n    }  \n\n    // Obtain the output data from the data processing execution unit  \n    public void deserialize(State state, DataInputStream in) throws IOException {  \n        String string = in.readUTF();  \n        state.scale = Integer.parseInt(String.valueOf(string.charAt(0)));  \n        StringBuilder stringBuilder = new StringBuilder(string.substring(2));  \n        state.stringBuilder = stringBuilder;   \n    }  \n\n    // The aggregation execution unit merges the processing results of data under certain aggregation conditions for a given key. The state1 parameter is the initialized instance during the first merge of each key  \n    public void merge(State state1, State state2) {  \n        state1.scale = state2.scale;  \n        state1.stringBuilder.append(state2.stringBuilder.toString());  \n    }  \n\n    // Output the final result after merging the data for each key  \n    public Double getValue(State state) {  \n        String[] strings = state.stringBuilder.toString().split(",");  \n        double[] doubles = new double[strings.length];  \n        for (int i = 0; i < strings.length - 1; i++) {  \n            doubles[i] = Double.parseDouble(strings[i + 1]);  \n        }  \n\n        Arrays.sort(doubles);  \n        double n = doubles.length;  \n        if (n == 0) {  \n            return 0.0;  \n        }  \n        double index = (n - 1) / 2.0;  \n\n        int low = (int) Math.floor(index);  \n        int high = (int) Math.ceil(index);  \n\n        double value = low == high ? (doubles[low] + doubles[high]) / 2 : doubles[high];  \n\n        BigDecimal decimal = new BigDecimal(value);  \n        return decimal.setScale(state.scale, BigDecimal.ROUND_HALF_UP).doubleValue();  \n    }  \n\n    // Executed after each execution unit completes  \n    public void destroy(State state) {  \n    }  \n}\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Register and create the Java-UDAF function in Doris. For more syntax details, please refer to ",(0,a.jsx)(n.a,{href:"../../sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-FUNCTION.md",children:"CREATE FUNCTION"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'CREATE AGGREGATE FUNCTION simple_demo(INT) RETURNS INT PROPERTIES (\n    "file"="file:///pathTo/java-udaf.jar",\n    "symbol"="org.apache.doris.udf.SimpleDemo",\n    "always_nullable"="true",\n    "type"="JAVA_UDF"\n);\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"When using Java-UDAF, you can perform aggregation either by grouping or by aggregating all results:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select simple_demo(id) from test_table group by id;\n+-----------------+\n| simple_demo(id) |\n+-----------------+\n|               1 |\n|               6 |\n+-----------------+\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select simple_demo(id) from test_table;\n+-----------------+\n| simple_demo(id) |\n+-----------------+\n|               7 |\n+-----------------+\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"introduction-to-java-udtf-example",children:"Introduction to Java-UDTF Example"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"UDTF is supported starting from Doris version 3.0."})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Similar to UDFs, UDTFs require users to implement an ",(0,a.jsx)(n.code,{children:"evaluate"})," method. However, the return value of a UDTF must be of the Array type."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-JAVA",children:"public class UDTFStringTest {\n    public ArrayList<String> evaluate(String value, String separator) {\n        if (value == null || separator == null) {\n            return null;\n        } else {\n            return new ArrayList<>(Arrays.asList(value.split(separator)));\n        }\n    }\n}\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Register and create the Java-UDTF function in Doris. Two UDTF functions will be registered. Table functions in Doris may exhibit different behaviors due to the ",(0,a.jsx)(n.code,{children:"_outer"})," suffix. For more details, refer to ",(0,a.jsx)(n.a,{href:"../../sql-manual/sql-functions/table-functions/explode-numbers-outer.md",children:"OUTER combinator"}),".\nFor more syntax details, please refer to ",(0,a.jsx)(n.a,{href:"../../sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-FUNCTION.md",children:"CREATE FUNCTION"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'CREATE TABLES FUNCTION java-utdf(string, string) RETURNS array<string> PROPERTIES (\n    "file"="file:///pathTo/java-udtf.jar",\n    "symbol"="org.apache.doris.udf.demo.UDTFStringTest",\n    "always_nullable"="true",\n    "type"="JAVA_UDF"\n);\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["When using Java-UDTF, in Doris, UDTFs must be used with ",(0,a.jsx)(n.a,{href:"/docs/query-data/lateral-view",children:(0,a.jsx)(n.code,{children:"Lateral View"})})," to achieve the row-to-column transformation effect:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select id, str, e1 from test_table lateral view java_utdf(str,',') tmp as e1;\n+------+-------+------+\n| id   | str   | e1   |\n+------+-------+------+\n|    1 | a,b,c | a    |\n|    1 | a,b,c | b    |\n|    1 | a,b,c | c    |\n|    6 | d,e   | d    |\n|    6 | d,e   | e    |\n+------+-------+------+\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Loading static variables"})}),"\n",(0,a.jsxs)(n.p,{children:["Currently, in Doris, executing a UDF function, e.g., ",(0,a.jsx)(n.code,{children:"select udf(col) from table"}),", will load the udf.jar package for each concurrent instance, and unload the udf.jar package when the instance finish."]}),"\n",(0,a.jsx)(n.p,{children:"If the udf.jar file needs to load a file of several hundred MBs, the memory usage will increase sharply due to concurrency, potentially leading to OOM (Out of Memory)."}),"\n",(0,a.jsx)(n.p,{children:"Alternatively, if you want to use a connection pool, this approach will not allow you to initialize it only once in the static area."}),"\n",(0,a.jsx)(n.p,{children:"Here are two solutions, with the second solution requiring Doris version branch-3.0 or above."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Solution 1:"})}),"\n",(0,a.jsx)(n.p,{children:"The solution is to split the resource loading code, generate a separate jar package, and have other packages directly reference this resource jar package."}),"\n",(0,a.jsxs)(n.p,{children:["Assume the files have been split into ",(0,a.jsx)(n.code,{children:"DictLibrary"})," and ",(0,a.jsx)(n.code,{children:"FunctionUdfAR"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'public class DictLibrary {\n    private static HashMap<String, String> res = new HashMap<>();\n\n    static {\n        // suppose we built this dictionary from a certain local file.\n        res.put("key1", "value1");\n        res.put("key2", "value2");\n        res.put("key3", "value3");\n        res.put("0", "value4");\n        res.put("1", "value5");\n        res.put("2", "value6");\n    }\n\n    public static String evaluate(String key) {\n        if (key == null) {\n            return null;\n        }\n        return res.get(key);\n    }\n}\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public class FunctionUdf {\n    public String evaluate(String key) {\n        String value = DictLibrary.evaluate(key);\n        return value;\n    }\n}\n"})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Compile the DictLibrary file separately to generate an independent jar package, resulting in a resource file DictLibrary.jar:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"javac ./DictLibrary.java\njar -cf ./DictLibrary.jar ./DictLibrary.class\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Then compile the FunctionUdf file, directly referencing the resource package from the previous step, resulting in the FunctionUdf.jar package:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"javac -cp ./DictLibrary.jar ./FunctionUdf.java\njar -cvf ./FunctionUdf.jar ./FunctionUdf.class\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["After the above two steps, you will get two jar packages. To allow the resource jar package to be referenced by all concurrent instances, place it in the deployment path ",(0,a.jsx)(n.code,{children:"be/custom_lib"}),". After the restarting, it will be loaded with the JVM startup. As a result, the resources will be loaded when the service starts and released when the service stops."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Finally, use the ",(0,a.jsx)(n.code,{children:"create function"})," statement to create a UDF function"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'CREATE FUNCTION java_udf_dict(string) RETURNS string PROPERTIES (\n "file"="file:///pathTo/FunctionUdf.jar",\n "symbol"="org.apache.doris.udf.FunctionUdf",\n "always_nullable"="true",\n "type"="JAVA_UDF"\n);\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Solution 2:"})}),"\n",(0,a.jsx)(n.p,{children:"The BE (Backend) globally caches the JAR file and customizes the expiration and eviction time. When creating a function, two additional properties are added:"}),"\n",(0,a.jsx)(n.p,{children:"static_load: This defines whether to use the static cache loading method.\nexpiration_time: This defines the expiration time of the JAR file, in minutes.\nIf the static cache loading method is used, the UDF instance will be cached after the first call and initialization. On subsequent calls to the UDF, the system will first search in the cache. If not found, the initialization process will be triggered."}),"\n",(0,a.jsx)(n.p,{children:"Additionally, a background thread regularly checks the cache. If the function has not been called within the configured expiration time, it will be evicted from the cache. If the function is called, the cache timestamp will be automatically updated."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"public class Print extends UDF {\n    static Integer val = 0;\n    public Integer evaluate() {\n        val = val + 1;\n        return val;\n    }\n}\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'CREATE FUNCTION print_12() RETURNS int \nPROPERTIES (\n    "file" = "file:///path/to/java-udf-demo-jar-with-dependencies.jar",\n    "symbol" = "org.apache.doris.udf.Print", \n    "always_nullable"="true",\n    "type" = "JAVA_UDF",\n    "static_load" = "true", // default value is false\n    "expiration_time" = "60" // default value is 360 minutes\n);\n'})}),"\n",(0,a.jsx)(n.p,{children:"As we can see, the result keeps incrementing, which proves that the loaded JAR file is not being unloaded and reloaded. Instead, the variables are being re-initialized to 0."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"mysql [test_query_qa]>select print_12();\n+------------+\n| print_12() |\n+------------+\n|          1 |\n+------------+\n1 row in set (0.40 sec)\n\nmysql [test_query_qa]>select print_12();\n+------------+\n| print_12() |\n+------------+\n|          2 |\n+------------+\n1 row in set (0.03 sec)\n\nmysql [test_query_qa]>select print_12();\n+------------+\n| print_12() |\n+------------+\n|          3 |\n+------------+\n1 row in set (0.04 sec)\n\n"})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var i=t(667294);let a={},s=i.createContext(a);function r(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);