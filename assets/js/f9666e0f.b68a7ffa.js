"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["733880"],{440111:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>h,assets:()=>o,toc:()=>d,frontMatter:()=>s});var i=JSON.parse('{"id":"data-operate/import/import-way/mysql-load-manual","title":"MySQL Load","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/data-operate/import/import-way/mysql-load-manual.md","sourceDirName":"data-operate/import/import-way","slug":"/data-operate/import/import-way/mysql-load-manual","permalink":"/docs/3.0/data-operate/import/import-way/mysql-load-manual","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"MySQL Load","language":"en"},"sidebar":"docs","previous":{"title":"Insert Into Values","permalink":"/docs/3.0/data-operate/import/import-way/insert-into-values-manual"},"next":{"title":"CSV","permalink":"/docs/3.0/data-operate/import/file-format/csv"}}'),a=t("785893"),r=t("250065");let s={title:"MySQL Load",language:"en"},l=void 0,o={},d=[{value:"Applicable scenarios",id:"applicable-scenarios",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Get started",id:"get-started",level:2},{value:"Preparations",id:"preparations",level:3},{value:"Create a MySQL Load job",id:"create-a-mysql-load-job",level:3},{value:"View results",id:"view-results",level:3},{value:"Cancel a MySQL Load job",id:"cancel-a-mysql-load-job",level:3},{value:"Manual",id:"manual",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Example",id:"example",level:2},{value:"Specify load timeout",id:"specify-load-timeout",level:3},{value:"Specify allowable error rate",id:"specify-allowable-error-rate",level:3},{value:"Import column mapping",id:"import-column-mapping",level:3},{value:"Specify column and row delimiters",id:"specify-column-and-row-delimiters",level:3},{value:"Specify target partition",id:"specify-target-partition",level:3},{value:"Specify time zone",id:"specify-time-zone",level:3},{value:"Specify the memory limit for the import",id:"specify-the-memory-limit-for-the-import",level:3},{value:"More help",id:"more-help",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Apache Doris is compatible with the MySQL protocol and supports the use of the standard MySQL ",(0,a.jsx)(n.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/load-data.html",children:"LOAD DATA"})," syntax to import local files. MySQL Load is a synchronous import method where the import result is returned upon completion. That means users can tell whether the import suceeds from the returned result. Generally, the MySQL Load method can be used to ingest files smaller than 10GB in size. For files larger than 10GB, it is recommended to split them into smaller ones. MySQL Load ensures the atomicity of a batch of import tasks, meaning that either all imports succeed or all imports fail."]}),"\n",(0,a.jsx)(n.h2,{id:"applicable-scenarios",children:"Applicable scenarios"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Supported format"})}),"\n",(0,a.jsx)(n.p,{children:"MySQL Load is primarily designed for importing CSV files from the client's local machine or importing data from data streams through programs."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Restrictions"})}),"\n",(0,a.jsx)(n.p,{children:"When importing CSV files, it is important to differentiate between null values and empty strings (''):"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Null values are represented by the escape sequence \\N. For example, in ",(0,a.jsx)(n.code,{children:"a,\\N,b"}),", the middle column represents a null value."]}),"\n",(0,a.jsxs)(n.li,{children:["Empty strings are represented directly as empty, such as ",(0,a.jsx)(n.code,{children:"a, ,b"}),", where the middle column represents an empty string."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsx)(n.p,{children:"MySQL Load is similar to Stream Load in terms of functionality. They both involve importing local files into the Doris cluster. Therefore, the implementation of MySQL Load reuses the basic import capabilities of Stream Load."}),"\n",(0,a.jsx)(n.p,{children:"The main processes of MySQL Load include:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"The user submits a LOAD DATA request to the frontend (FE), which performs the parsing and encapsulates the request into a Stream Load task."}),"\n",(0,a.jsx)(n.li,{children:"The FE selects a backend (BE) node and sends the Stream Load request to it."}),"\n",(0,a.jsx)(n.li,{children:"Meanwhile, the FE reads the local file data from the MySQL client in an asynchronous and streaming manner and sends it in real time to the HTTP request of the Stream Load."}),"\n",(0,a.jsx)(n.li,{children:"Once the data transfer from the MySQL client is complete, the FE waits for the Stream Load to finish and displays the import result (success or failure) to the client."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"get-started",children:"Get started"}),"\n",(0,a.jsx)(n.h3,{id:"preparations",children:"Preparations"}),"\n",(0,a.jsx)(n.p,{children:"MySQL Load requires INSERT permission on the target table. You can grant permissions to user account using the GRANT command."}),"\n",(0,a.jsx)(n.h3,{id:"create-a-mysql-load-job",children:"Create a MySQL Load job"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Prepare the test data"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Create a data file ",(0,a.jsx)(n.code,{children:"client_local.csv"})," containing the following sample data:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"1,10\n2,20\n3,30\n4,40\n5,50\n6,60\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"Connect to MySQL client"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Connect to the MySQL client before executing the LOAD DATA command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Shell",children:"mysql --local-infile  -h <fe_ip> -P <fe_query_port> -u root -D testdb\n"})}),"\n",(0,a.jsxs)(n.admonition,{type:"caution",children:[(0,a.jsx)(n.p,{children:"Specific parameter options need to be used during the connection:"}),(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["When connecting to the MySQL client, ",(0,a.jsx)(n.code,{children:"--local-infile"})," must be included, otherwise an error might be thrown."]}),"\n",(0,a.jsxs)(n.li,{children:["When connecting via JDBC, ",(0,a.jsx)(n.code,{children:"allowLoadLocalInfile=true"})," must be specified in the URL."]}),"\n"]})]}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"Create the test table"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Create a table as follows in Doris:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE testdb.t1 (\n    pk     INT, \n    v1     INT SUM\n) AGGREGATE KEY (pk) \nDISTRIBUTED BY hash (pk);\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"Run the LOAD DATA command"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"After connecting to the MySQL client, create a Load job. The command is as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"LOAD DATA LOCAL\nINFILE 'client_local.csv'\nINTO TABLE testdb.t1\nCOLUMNS TERMINATED BY ','\nLINES TERMINATED BY '\\n';\n"})}),"\n",(0,a.jsx)(n.h3,{id:"view-results",children:"View results"}),"\n",(0,a.jsx)(n.p,{children:"MySQL Load is a synchronous import method, and the results of the import are returned to the user in the command-line interface. If the import execution fails, it will display specific error messages."}),"\n",(0,a.jsx)(n.p,{children:"Below is an example of a successful import result, which returns the number of imported rows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"Query OK, 6 row affected (0.17 sec)\nRecords: 6  Deleted: 0  Skipped: 0  Warnings: 0\n"})}),"\n",(0,a.jsx)(n.p,{children:"When there are exceptions during the import, the corresponding error will be displayed on the client:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"ERROR 1105 (HY000): errCode = 2, detailMessage = [DATA_QUALITY_ERROR]too many filtered rows with load id b612907c-ccf4-4ac2-82fe-107ece655f0f\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"loadId"})," is included in the error message, based on which you can view the detailed information via the ",(0,a.jsx)(n.code,{children:"show load warnings"})," command:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"show load warnings where label='b612907c-ccf4-4ac2-82fe-107ece655f0f';\n"})}),"\n",(0,a.jsx)(n.h3,{id:"cancel-a-mysql-load-job",children:"Cancel a MySQL Load job"}),"\n",(0,a.jsx)(n.p,{children:"Doris does not allow manual cancellation of MySQL Load jobs. In the event of a timeout or import error, the corresponding MySQL Load job will be automatically cancelled by the system."}),"\n",(0,a.jsx)(n.h2,{id:"manual",children:"Manual"}),"\n",(0,a.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.p,{children:"The syntax for LOAD DATA is as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"LOAD DATA LOCAL\nINFILE '<load_data_file>'\nINTO TABLE [<db_name>.]<table_name>\n[PARTITION (partition_name [, partition_name] ...)]\n[COLUMNS TERMINATED BY '<column_terminated_operator>']\n[LINES TERMINATED BY '<line_terminated_operator>']\n[IGNORE <ignore_lines> LINES]\n[(col_name_or_user_var[, col_name_or_user_var] ...)]\n[SET col_name={expr | DEFAULT}[, col_name={expr | DEFAULT}] ...]\n[PROPERTIES (key1 = value1 [, key2=value2]) ]\n"})}),"\n",(0,a.jsx)(n.p,{children:"Descriptions of modules in the Load job:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Module"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"INFILE"}),(0,a.jsx)(n.td,{children:"This specifies the local file path, which can be either a relative path or an absolute path.Currently, load_data_file only supports a single file."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"INTO TABLE"}),(0,a.jsx)(n.td,{children:"This specifies the database and table, and the database name can be omitted."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"PARTITION"}),(0,a.jsx)(n.td,{children:"This specifies the target partition. If the user can determine the partition corresponding to the data, it is recommended to specify this. Data that does not fit into the specified partitions will be filtered out."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"COLUMNS TERMINATED BY"}),(0,a.jsx)(n.td,{children:"This specifies the column delimiter."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"LINE TERMINATED BY"}),(0,a.jsx)(n.td,{children:"This specifies the row delimiter."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"IGNORE num LINES"}),(0,a.jsx)(n.td,{children:"This specifies the number of rows to skip in the CSV import, typically specified as 1 to skip the header."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"col_name_or_user_var"}),(0,a.jsxs)(n.td,{children:["This specifies the column mapping syntax. For more information, refer to ",(0,a.jsx)(n.a,{href:"https://doris.apache.org/docs/2.0/data-operate/import/load-data-convert#column-mapping",children:"Column Mapping"}),"."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"PROPERTIES"}),(0,a.jsx)(n.td,{children:"Parameters for the Load."})]})]})]}),"\n",(0,a.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.p,{children:["By the ",(0,a.jsx)(n.code,{children:"PROPERTIES (key1 = value1 [, key2=value2])"})," syntax, you can configure the parameters for the Load."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"max_filter_ratio"}),(0,a.jsx)(n.td,{children:"The maximum filtering rate allowed. Must be between 0 and 1, inclusive. The default value is 0, indicating no tolerance for any error rows."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"timeout"}),(0,a.jsx)(n.td,{children:"The import timeout, measured in seconds. The default value is 600. The range allowed is from 1s to 259200s."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"strict_mode"}),(0,a.jsx)(n.td,{children:"Whether to enable strict mode for this import. Disabled by default."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"timezone"}),(0,a.jsx)(n.td,{children:"The time zone for this import. The default time zone is UTC+8. This parameter will affect the results of any time zone-related functions involved in the import."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"exec_mem_limit"}),(0,a.jsx)(n.td,{children:"Memory limit for the import, defaults to 2GB, measured in bytes."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"trim_double_quotes"}),(0,a.jsx)(n.td,{children:"Boolean, defaults to false. If this is set to true, the outermost double quotes will be trimmed from each field in the import file."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"enclose"}),(0,a.jsx)(n.td,{children:'This specifies the enclosure character. When a CSV data field contains line breaks or column delimiters, you can specify a single-byte character as the enclosure character to prevent accidental truncation.For example, if the column delimiter is ",", and the enclosure character is "\'", in data "a,\'b,c\'", "b,c" will be parsed as one field.'})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"escape"}),(0,a.jsx)(n.td,{children:'This specifies the escape character. This is used when the data contains the same character as the enclosure character, which needs to be treated as part of the field.For example, if the data is "a,\'b,\'c\'", the enclosure character is "\'", and you want "b,\'c" to be parsed as one field, you need to specify a single-byte escape character, such as "", to modify the data to "a,\'b,\'c\'".'})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.h3,{id:"specify-load-timeout",children:"Specify load timeout"}),"\n",(0,a.jsxs)(n.p,{children:["You can adjust the import timeout by specifying ",(0,a.jsx)(n.code,{children:"timeout"})," in PROPERTIES. For example, set it to 100s:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES ("timeout"="100");\n'})}),"\n",(0,a.jsx)(n.h3,{id:"specify-allowable-error-rate",children:"Specify allowable error rate"}),"\n",(0,a.jsxs)(n.p,{children:["You can adjust the allowable error rate by specifying ",(0,a.jsx)(n.code,{children:"max_filter_ratio"})," in PROPERTIES. For example, set it to 20%:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES ("max_filter_ratio"="0.2");\n'})}),"\n",(0,a.jsx)(n.h3,{id:"import-column-mapping",children:"Import column mapping"}),"\n",(0,a.jsx)(n.p,{children:"The following example adjusts the order of columns in the CSV file."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"LOAD DATA LOCAL\nINFILE 'testData'\nINTO TABLE testDb.testTbl\n(k2, k1, v1);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"specify-column-and-row-delimiters",children:"Specify column and row delimiters"}),"\n",(0,a.jsxs)(n.p,{children:["You can specify the column and row delimiters using the ",(0,a.jsx)(n.code,{children:"COLUMNS TERMINATED BY"})," and ",(0,a.jsx)(n.code,{children:"LINES TERMINATED BY"})," clauses. In the following example, (,) and (\\n) are used as the column and row delimiters, respectively."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"LOAD DATA LOCAL\nINFILE 'testData'\nINTO TABLE testDb.testTbl\nCOLUMNS TERMINATED BY ','\nLINES TERMINATED BY '\\n';\n"})}),"\n",(0,a.jsx)(n.h3,{id:"specify-target-partition",children:"Specify target partition"}),"\n",(0,a.jsxs)(n.p,{children:["You can specify the target partition for the import using the ",(0,a.jsx)(n.code,{children:"PARTITION"})," clause. In the following example, data will be loaded into the specified partitions 'p1' and 'p2', and any data that does not belong to these two partitions will be filtered out:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"LOAD DATA LOCAL\nINFILE 'testData'\nINTO TABLE testDb.testTbl\nPARTITION (p1, p2);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"specify-time-zone",children:"Specify time zone"}),"\n",(0,a.jsxs)(n.p,{children:["You can specify the ",(0,a.jsx)(n.code,{children:"timezone"})," in PROPERTIES. In the following example, the timezone is set to Africa/Abidjan:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES ("timezone"="Africa/Abidjan");\n'})}),"\n",(0,a.jsx)(n.h3,{id:"specify-the-memory-limit-for-the-import",children:"Specify the memory limit for the import"}),"\n",(0,a.jsxs)(n.p,{children:["You can specify the memory limit for the import by the ",(0,a.jsx)(n.code,{children:"exec_mem_limit"})," parameter in PROPERTIES. In the following example, the memory limit is set to 10G:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES ("exec_mem_limit"="10737418240");\n'})}),"\n",(0,a.jsx)(n.h2,{id:"more-help",children:"More help"}),"\n",(0,a.jsxs)(n.p,{children:["For more detailed syntax and best practices related to MySQL Load, refer to the ",(0,a.jsx)(n.a,{href:"../../../sql-manual/sql-statements/data-modification/load-and-export/MYSQL-LOAD/",children:"MySQL Load"})," command manual."]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return s}});var i=t(667294);let a={},r=i.createContext(a);function s(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);