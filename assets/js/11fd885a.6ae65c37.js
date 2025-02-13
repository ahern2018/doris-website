"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["229499"],{175412:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>o,default:()=>h,assets:()=>a,toc:()=>d,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/load-and-export/OUTFILE","title":"OUTFILE","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/data-modification/load-and-export/OUTFILE.md","sourceDirName":"sql-manual/sql-statements/data-modification/load-and-export","slug":"/sql-manual/sql-statements/data-modification/load-and-export/OUTFILE","permalink":"/docs/dev/sql-manual/sql-statements/data-modification/load-and-export/OUTFILE","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"OUTFILE","language":"en"},"sidebar":"docs","previous":{"title":"SHOW EXPORT","permalink":"/docs/dev/sql-manual/sql-statements/data-modification/load-and-export/SHOW-EXPORT"},"next":{"title":"CLEAN LABEL","permalink":"/docs/dev/sql-manual/sql-statements/data-modification/load-and-export/CLEAN-LABEL"}}'),r=n("785893"),i=n("250065");let l={title:"OUTFILE",language:"en"},o=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"DataType Mapping",id:"datatype-mapping",level:3},{value:"Export data volume and export efficiency",id:"export-data-volume-and-export-efficiency",level:3},{value:"Management of export files",id:"management-of-export-files",level:3},{value:"Export to local file",id:"export-to-local-file",level:3},{value:"Results Integrity Guarantee",id:"results-integrity-guarantee",level:3},{value:"Concurrent Export",id:"concurrent-export",level:3},{value:"Examples",id:"examples",level:2}];function c(e){let t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["This statement is used to export query results to a file using the ",(0,r.jsx)(t.code,{children:"SELECT INTO OUTFILE"})," command. Currently, it supports exporting to remote storage, such as HDFS, S3, BOS, COS (Tencent Cloud), through the Broker process, S3 protocol, or HDFS protocol."]}),"\n",(0,r.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:'<query_stmt>\nINTO OUTFILE "<file_path>"\n[ FORMAT AS <format_as> ]\n[ <properties> ]\n'})}),"\n",(0,r.jsx)(t.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["1. ",(0,r.jsx)(t.code,{children:"<query_stmt>"})]})}),"\n",(0,r.jsxs)(t.p,{children:["The query statement must be a valid SQL statement. Please refer to the ",(0,r.jsx)(t.a,{href:"/docs/dev/sql-manual/sql-statements/data-query/SELECT",children:"query statement documentation"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["2. ",(0,r.jsx)(t.code,{children:"<file_path>"})]})}),"\n",(0,r.jsxs)(t.p,{children:["file_path points to the path where the file is stored and the file prefix. Such as ",(0,r.jsx)(t.code,{children:"hdfs://path/to/my_file_"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The final filename will consist of ",(0,r.jsx)(t.code,{children:"my_file_"}),", the file number and the file format suffix. The file serial number starts from 0, and the number is the number of files to be divided. Such as:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"my_file_abcdefg_0.csv"}),"\n",(0,r.jsx)(t.li,{children:"my_file_abcdefg_1.csv"}),"\n",(0,r.jsx)(t.li,{children:"my_file_abcdegf_2.csv"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["You can also omit the file prefix and specify only the file directory, such as: ",(0,r.jsx)(t.code,{children:"hdfs://path/to/"})]}),"\n",(0,r.jsx)(t.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["1. ",(0,r.jsx)(t.code,{children:"<format_as>"})]})}),"\n",(0,r.jsx)(t.p,{children:"Specifies the export format. Supported formats include :"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"CSV"})," (Default)"]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"PARQUET"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"CSV_WITH_NAMES"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"CSV_WITH_NAMES_AND_TYPES"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"ORC"})}),"\n"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Note: PARQUET, CSV_WITH_NAMES, CSV_WITH_NAMES_AND_TYPES, and ORC are supported starting in version 1.2 ."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["2. ",(0,r.jsx)(t.code,{children:"<properties>"})]})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:'[ PROPERTIES ("<key>"="<value>" [, ... ]) ]\n'})}),"\n",(0,r.jsx)(t.p,{children:"Specify related properties. Currently exporting via the Broker process, S3 protocol, or HDFS protocol is supported."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"File properties"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"column_separator"}),': column separator,is only for CSV format. mulit-bytes is supported starting in version 1.2, such as: "\\x01", "abc".']}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"line_delimiter"}),': line delimiter,is only for CSV format. mulit-bytes supported starting in version 1.2, such as: "\\x01", "abc".']}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"max_file_size"}),": the size limit of a single file, if the result exceeds this value, it will be cut into multiple files, the value range of max_file_size is [5MB, 2GB] and the default is 1GB. (When specified that the file format is ORC, the size of the actual division file will be a multiples of 64MB, such as: specify max_file_size = 5MB, and actually use 64MB as the division; specify max_file_size = 65MB, and will actually use 128MB as cut division points.)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"delete_existing_files"}),": default ",(0,r.jsx)(t.code,{children:"false"}),'. If it is specified as true, you will first delete all files specified in the directory specified by the file_path, and then export the data to the directory.For example: "file_path" = "/user/tmp", then delete all files and directory under "/user/"; "file_path" = "/user/tmp/", then delete all files and directory under "/user/tmp/"']}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"file_suffix"}),": Specify the suffix of the export file. If this parameter is not specified, the default suffix for the file format will be used."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Broker properties"}),"  ",(0,r.jsxs)(t.em,{children:["(need to be prefixed with ",(0,r.jsx)(t.code,{children:"broker"}),")"]})]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"broker.name: broker"}),": broker name"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"broker.hadoop.security.authentication"}),": specify the authentication method as kerberos"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"broker.kerberos_principal"}),": specifies the principal of kerberos"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"broker.kerberos_keytab"}),": specifies the path to the keytab file of kerberos. The file must be the absolute path to the file on the server where the broker process is located. and can be accessed by the Broker process"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"HDFS properties"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"fs.defaultFS"}),": namenode address and port"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"hadoop.username"}),": hdfs username"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"dfs.nameservices"}),": if hadoop enable HA, please set fs nameservice. See hdfs-site.xml"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"dfs.ha.namenodes.[nameservice ID]"}),": unique identifiers for each NameNode in the nameservice. See hdfs-site.xml"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"dfs.namenode.rpc-address.[nameservice ID].[name node ID]"}),": the fully-qualified RPC address for each NameNode to listen on. See hdfs-site.xml"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"dfs.client.failover.proxy.provider.[nameservice ID]"}),": the Java class that HDFS clients use to contact the Active NameNode, usually it is org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"For a kerberos-authentication enabled Hadoop cluster, additional properties need to be set:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"dfs.namenode.kerberos.principal"}),": HDFS namenode service principal"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"hadoop.security.authentication"}),": kerberos"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"hadoop.kerberos.principal"}),": the Kerberos pincipal that Doris will use when connectiong to HDFS."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"hadoop.kerberos.keytab"}),": HDFS client keytab location."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"For the S3 protocol, you can directly execute the S3 protocol configuration:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"s3.endpoint"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"s3.access_key"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"s3.secret_key"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"s3.region"})}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"use_path_style"}),": (optional) default false . The S3 SDK uses the virtual-hosted style by default. However, some object storage systems may not be enabled or support virtual-hosted style access. At this time, we can add the use_path_style parameter to force the use of path style access method."]}),"\n"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Note that to use the ",(0,r.jsx)(t.code,{children:"delete_existing_files"})," parameter, you also need to add the configuration ",(0,r.jsx)(t.code,{children:"enable_delete_existing_files = true"})," to the fe.conf file and restart the FE. Only then will the ",(0,r.jsx)(t.code,{children:"delete_existing_files"})," parameter take effect. Setting ",(0,r.jsx)(t.code,{children:"delete_existing_files = true"})," is a dangerous operation and it is recommended to only use it in a testing environment."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsxs)(t.p,{children:["The results returned by the ",(0,r.jsx)(t.code,{children:"Outfile"})," statement are explained as follows:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Column"}),(0,r.jsx)(t.th,{children:"DataType"}),(0,r.jsx)(t.th,{children:"Note"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"FileNumber"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"The total number of files generated."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"TotalRows"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"The number of rows in the result set."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"FileSize"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"The total size of the exported files, in bytes."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"URL"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsxs)(t.td,{children:["The prefix of the exported file paths. Multiple files are numbered sequentially with suffixes like ",(0,r.jsx)(t.code,{children:"_0"}),", ",(0,r.jsx)(t.code,{children:"_1"}),"."]})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,r.jsx)(t.p,{children:"The user executing this SQL command must have at least the following privileges:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Privilege"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Object"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"SELECT_PRIV"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Database"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Requires read access to the database and table."})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,r.jsx)(t.h3,{id:"datatype-mapping",children:"DataType Mapping"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"All file formats support the export of basic data types, while only csv/orc/csv_with_names/csv_with_names_and_types currently support the export of complex data types (ARRAY/MAP/STRUCT). Nested complex data types are not supported."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Parquet and ORC file formats have their own data types. The export function of Doris can automatically export the Doris data types to the corresponding data types of the Parquet/ORC file format. The following are the data type mapping relationship of the Doris data types and the Parquet/ORC file format data types:"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"The mapping relationship between the Doris data types to the ORC data types is:"}),"\n",(0,r.jsx)(t.p,{children:"| Doris Type              | Orc Type  |\n|-------------------------|-----------|\n| boolean                 | boolean   |\n| tinyint                 | tinyint   |\n| smallint                | smallint  |\n| int                     | int       |\n| bigint                  | bigint    |\n| largeInt                | string    |\n| date                    | string    |\n| datev2                  | string    |\n| datetime                | string    |\n| datetimev2              | timestamp |\n| float                   | float     |\n| double                  | double    |\n| char / varchar / string | string    |\n| decimal                 | decimal   |\n| struct                  | struct    |\n| map                     | map       |\n| array                   | array     |"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"When Doris exports data to the Parquet file format, the Doris memory data will be converted to Arrow memory data format first, and then the paraquet file format is written by Arrow. The mapping relationship between the Doris data types to the ARROW data types is:"}),"\n",(0,r.jsx)(t.p,{children:"| Doris Type              | Arrow Type |\n|-------------------------|------------|\n| boolean                 | boolean    |\n| tinyint                 | int8       |\n| smallint                | int16      |\n| int                     | int32      |\n| bigint                  | int64      |\n| largeInt                | utf8       |\n| date                    | utf8       |\n| datev2                  | utf8       |\n| datetime                | utf8       |\n| datetimev2              | utf8       |\n| float                   | float32    |\n| double                  | float64    |\n| char / varchar / string | utf8       |\n| decimal                 | decimal128 |\n| struct                  | struct     |\n| map                     | map        |\n| array                   | list       |"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"export-data-volume-and-export-efficiency",children:"Export data volume and export efficiency"}),"\n",(0,r.jsxs)(t.p,{children:["This function essentially executes an SQL query command. The final result is a single-threaded output. Therefore, the time-consuming of the entire export includes the time-consuming of the query itself and the time-consuming of writing the final result set. If the query is large, you need to set the session variable ",(0,r.jsx)(t.code,{children:"query_timeout"})," to appropriately extend the query timeout."]}),"\n",(0,r.jsx)(t.h3,{id:"management-of-export-files",children:"Management of export files"}),"\n",(0,r.jsx)(t.p,{children:"Doris does not manage exported files. Including the successful export, or the remaining files after the export fails, all need to be handled by the user."}),"\n",(0,r.jsx)(t.h3,{id:"export-to-local-file",children:"Export to local file"}),"\n",(0,r.jsxs)(t.p,{children:["To export to a local file, you need configure ",(0,r.jsx)(t.code,{children:"enable_outfile_to_local=true"})," in fe.conf."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:'select * from tbl1 limit 10\nINTO OUTFILE "file:///home/work/path/result_";\n'})}),"\n",(0,r.jsx)(t.p,{children:"The ability to export to a local file is not available for public cloud users, only for private deployments. And the default user has full control over the cluster nodes. Doris will not check the validity of the export path filled in by the user. If the process user of Doris does not have write permission to the path, or the path does not exist, an error will be reported. At the same time, for security reasons, if a file with the same name already exists in this path, the export will also fail."}),"\n",(0,r.jsx)(t.p,{children:"Doris does not manage files exported locally, nor does it check disk space, etc. These files need to be managed by the user, such as cleaning and so on."}),"\n",(0,r.jsx)(t.h3,{id:"results-integrity-guarantee",children:"Results Integrity Guarantee"}),"\n",(0,r.jsxs)(t.p,{children:["This command is a synchronous command, so it is possible that the task connection is disconnected during the execution process, so that it is impossible to live the exported data whether it ends normally, or whether it is complete. At this point, you can use the ",(0,r.jsx)(t.code,{children:"success_file_name"})," parameter to request that a successful file identifier be generated in the directory after the task is successful. Users can use this file to determine whether the export ends normally."]}),"\n",(0,r.jsx)(t.h3,{id:"concurrent-export",children:"Concurrent Export"}),"\n",(0,r.jsxs)(t.p,{children:["Setting the session variable ",(0,r.jsx)(t.code,{children:"set enable_parallel_outfile = true;"})," enables concurrent export using outfile. For detailed usage, see ",(0,r.jsx)(t.a,{href:"../../../data-operate/export/outfile.md",children:"Export Query Result"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Use the broker method to export, and export the simple query results to the file ",(0,r.jsx)(t.code,{children:"hdfs://path/to/result.txt"}),". Specifies that the export format is CSV. Use ",(0,r.jsx)(t.code,{children:"my_broker"})," and set kerberos authentication information. Specify the column separator as ",(0,r.jsx)(t.code,{children:","})," and the row separator as ",(0,r.jsx)(t.code,{children:"\\n"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:'SELECT * FROM tbl\nINTO OUTFILE "hdfs://path/to/result_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.hadoop.security.authentication" = "kerberos",\n    "broker.kerberos_principal" = "doris@YOUR.COM",\n    "broker.kerberos_keytab" = "/home/doris/my.keytab",\n    "column_separator" = ",",\n    "line_delimiter" = "\\n",\n    "max_file_size" = "100MB"\n);\n'})}),"\n",(0,r.jsxs)(t.p,{children:["If the final generated file is not larger than 100MB, it will be: ",(0,r.jsx)(t.code,{children:"result_0.csv"}),".\nIf larger than 100MB, it may be ",(0,r.jsx)(t.code,{children:"result_0.csv, result_1.csv, ..."}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Export the simple query results to the file ",(0,r.jsx)(t.code,{children:"hdfs://path/to/result.parquet"}),". Specify the export format as PARQUET. Use ",(0,r.jsx)(t.code,{children:"my_broker"})," and set kerberos authentication information."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:'SELECT c1, c2, c3 FROM tbl\nINTO OUTFILE "hdfs://path/to/result_"\nFORMAT AS PARQUET\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.hadoop.security.authentication" = "kerberos",\n    "broker.kerberos_principal" = "doris@YOUR.COM",\n    "broker.kerberos_keytab" = "/home/doris/my.keytab"\n);\n'})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Export the query result of the CTE statement to the file ",(0,r.jsx)(t.code,{children:"hdfs://path/to/result.txt"}),". The default export format is CSV. Use ",(0,r.jsx)(t.code,{children:"my_broker"})," and set hdfs high availability information. Use the default row and column separators."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:'WITH\nx1 AS\n(SELECT k1, k2 FROM tbl1),\nx2 AS\n(SELECT k3 FROM tbl2)\nSELEC k1 FROM x1 UNION SELECT k3 FROM x2\nINTO OUTFILE "hdfs://path/to/result_"\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.username"="user",\n    "broker.password"="passwd",\n    "broker.dfs.nameservices" = "my_ha",\n    "broker.dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n    "broker.dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n    "broker.dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n    "broker.dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n);\n'})}),"\n",(0,r.jsxs)(t.p,{children:["If the final generated file is not larger than 1GB, it will be: ",(0,r.jsx)(t.code,{children:"result_0.csv"}),".\nIf larger than 1GB, it may be ",(0,r.jsx)(t.code,{children:"result_0.csv, result_1.csv, ..."}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Export the query result of the UNION statement to the file ",(0,r.jsx)(t.code,{children:"bos://bucket/result.txt"}),". Specify the export format as PARQUET. Use ",(0,r.jsx)(t.code,{children:"my_broker"})," and set hdfs high availability information. The PARQUET format does not require a column delimiter to be specified.\nAfter the export is complete, an identity file is generated."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:'SELECT k1 FROM tbl1 UNION SELECT k2 FROM tbl1\nINTO OUTFILE "bos://bucket/result_"\nFORMAT AS PARQUET\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.bos_endpoint" = "http://bj.bcebos.com",\n    "broker.bos_accesskey" = "xxxxxxxxxxxxxxxxxxxxxxxxxx",\n    "broker.bos_secret_accesskey" = "yyyyyyyyyyyyyyyyyyyyyyyyyy"\n);\n'})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Export the query result of the select statement to the file ",(0,r.jsx)(t.code,{children:"s3a://${bucket_name}/path/result.txt"}),". Specify the export format as csv.\nAfter the export is complete, an identity file is generated."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:'select k1,k2,v1 from tbl1 limit 100000\ninto outfile "s3a://my_bucket/export/my_file_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "broker.name" = "hdfs_broker",\n    "broker.fs.s3a.access.key" = "xxx",\n    "broker.fs.s3a.secret.key" = "xxxx",\n    "broker.fs.s3a.endpoint" = "https://cos.xxxxxx.myqcloud.com/",\n    "column_separator" = ",",\n    "line_delimiter" = "\\n",\n    "max_file_size" = "1024MB",\n    "success_file_name" = "SUCCESS"\n)\n'})}),"\n",(0,r.jsxs)(t.p,{children:["If the final generated file is not larger than 1GB, it will be: ",(0,r.jsx)(t.code,{children:"my_file_0.csv"}),".\nIf larger than 1GB, it may be ",(0,r.jsx)(t.code,{children:"my_file_0.csv, result_1.csv, ..."}),".\nVerify on cos"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"    1. A path that does not exist will be automatically created\n    2. Access.key/secret.key/endpoint needs to be confirmed with students of cos. Especially the value of endpoint does not need to fill in bucket_name.\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Use the s3 protocol to export to bos, and enable concurrent export."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:'set enable_parallel_outfile = true;\nselect k1 from tb1 limit 1000\ninto outfile "s3://my_bucket/export/my_file_"\nformat as csv\nproperties\n(\n    "s3.endpoint" = "http://s3.bd.bcebos.com",\n    "s3.access_key" = "xxxx",\n    "s3.secret_key" = "xxx",\n    "s3.region" = "bd"\n)\n'})}),"\n",(0,r.jsxs)(t.p,{children:["The resulting file is prefixed with ",(0,r.jsx)(t.code,{children:"my_file_{fragment_instance_id}_"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Use the s3 protocol to export to bos, and enable concurrent export of session variables.\nNote: However, since the query statement has a top-level sorting node, even if the concurrently exported session variable is enabled for this query, it cannot be exported concurrently."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:'set enable_parallel_outfile = true;\nselect k1 from tb1 order by k1 limit 1000\ninto outfile "s3://my_bucket/export/my_file_"\nformat as csv\nproperties\n(\n    "s3.endpoint" = "http://s3.bd.bcebos.com",\n    "s3.access_key" = "xxxx",\n    "s3.secret_key" = "xxx",\n    "s3.region" = "bd"\n)\n'})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Use hdfs export to export simple query results to the file ",(0,r.jsx)(t.code,{children:"hdfs://${host}:${fileSystem_port}/path/to/result.txt"}),". Specify the export format as CSV and the user name as work. Specify the column separator as ",(0,r.jsx)(t.code,{children:","})," and the row separator as ",(0,r.jsx)(t.code,{children:"\\n"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:'-- fileSystem_port \u9ED8\u8BA4\u503C\u4E3A 9000\nSELECT * FROM tbl\nINTO OUTFILE "hdfs://${host}:${fileSystem_port}/path/to/result_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "fs.defaultFS" = "hdfs://ip:port",\n    "hadoop.username" = "work"\n);\n'})}),"\n",(0,r.jsx)(t.p,{children:"If the Hadoop cluster is highly available and Kerberos authentication is enabled, you can refer to the following SQL statement:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM tbl\nINTO OUTFILE \"hdfs://path/to/result_\"\nFORMAT AS CSV\nPROPERTIES\n(\n'fs.defaultFS'='hdfs://hacluster/',\n'dfs.nameservices'='hacluster',\n'dfs.ha.namenodes.hacluster'='n1,n2',\n'dfs.namenode.rpc-address.hacluster.n1'='192.168.0.1:8020',\n'dfs.namenode.rpc-address.hacluster.n2'='192.168.0.2:8020',\n'dfs.client.failover.proxy.provider.hacluster'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider',\n'dfs.namenode.kerberos.principal'='hadoop/_HOST@REALM.COM'\n'hadoop.security.authentication'='kerberos',\n'hadoop.kerberos.principal'='doris_test@REALM.COM',\n'hadoop.kerberos.keytab'='/path/to/doris_test.keytab'\n);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["If the final generated file is not larger than 100MB, it will be: ",(0,r.jsx)(t.code,{children:"result_0.csv"}),".\nIf larger than 100MB, it may be ",(0,r.jsx)(t.code,{children:"result_0.csv, result_1.csv, ..."}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Export the query result of the select statement to the file ",(0,r.jsx)(t.code,{children:"cosn://${bucket_name}/path/result.txt"})," on Tencent Cloud Object Storage (COS). Specify the export format as csv.\nAfter the export is complete, an identity file is generated."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:'select k1,k2,v1 from tbl1 limit 100000\ninto outfile "cosn://my_bucket/export/my_file_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "broker.name" = "broker_name",\n    "broker.fs.cosn.userinfo.secretId" = "xxx",\n    "broker.fs.cosn.userinfo.secretKey" = "xxxx",\n    "broker.fs.cosn.bucket.endpoint_suffix" = "cos.xxxxxx.myqcloud.com",\n    "column_separator" = ",",\n    "line_delimiter" = "\\n",\n    "max_file_size" = "1024MB",\n    "success_file_name" = "SUCCESS"\n)\n'})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return l}});var s=n(667294);let r={},i=s.createContext(r);function l(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);