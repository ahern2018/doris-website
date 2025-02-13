"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["760163"],{304705:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>l,default:()=>h,assets:()=>a,toc:()=>d,frontMatter:()=>o});var i=JSON.parse('{"id":"data-operate/export/outfile","title":"SELECT INTO OUTFILE","description":"\x3c!--","source":"@site/docs/data-operate/export/outfile.md","sourceDirName":"data-operate/export","slug":"/data-operate/export/outfile","permalink":"/docs/dev/data-operate/export/outfile","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SELECT INTO OUTFILE","language":"en"},"sidebar":"docs","previous":{"title":"EXPORT","permalink":"/docs/dev/data-operate/export/export-manual"},"next":{"title":"Using MySQL Dump","permalink":"/docs/dev/data-operate/export/export-with-mysql-dump"}}'),s=n("785893"),r=n("250065");let o={title:"SELECT INTO OUTFILE",language:"en"},l=void 0,a={},d=[{value:"Applicable Scenarios",id:"applicable-scenarios",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Creating Tables and Importing Data",id:"creating-tables-and-importing-data",level:3},{value:"Export to HDFS",id:"export-to-hdfs",level:3},{value:"Export to Object Storage",id:"export-to-object-storage",level:3},{value:"Export Instructions",id:"export-instructions",level:2},{value:"Export Desctination",id:"export-desctination",level:3},{value:"Supported File Types",id:"supported-file-types",level:3},{value:"Export Examples",id:"export-examples",level:2},{value:"Export to an HDFS Cluster with High Availability Enabled",id:"export-to-an-hdfs-cluster-with-high-availability-enabled",level:3},{value:"Export to an HDFS Cluster with High Availability and Kerberos Authentication Enabled",id:"export-to-an-hdfs-cluster-with-high-availability-and-kerberos-authentication-enabled",level:3},{value:"Generating an Export Success Indicator File",id:"generating-an-export-success-indicator-file",level:3},{value:"Clearing the Export Directory Before Exporting",id:"clearing-the-export-directory-before-exporting",level:3},{value:"Setting the Size of Exported Files",id:"setting-the-size-of-exported-files",level:3},{value:"Notice",id:"notice",level:2},{value:"Appendix",id:"appendix",level:2},{value:"Export to Local File System",id:"export-to-local-file-system",level:3}];function c(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["This document will introduce how to use the ",(0,s.jsx)(t.code,{children:"SELECT INTO OUTFILE"})," command to perform the export operation of query results."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"SELECT INTO OUTFILE"})," command exports the result data of the ",(0,s.jsx)(t.code,{children:"SELECT"})," part to the target storage system in the specified file format, including object storage or HDFS."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"SELECT INTO OUTFILE"})," is a synchronous command, the return of the command means the export is finished. If the export is successful, information such as the number, size, and path of the exported files will be returned. If the export fails, error information will be returned."]}),"\n",(0,s.jsxs)(t.p,{children:["Regarding how to choose between ",(0,s.jsx)(t.code,{children:"SELECT INTO OUTFILE"})," and ",(0,s.jsx)(t.code,{children:"EXPORT"}),", please refer to ",(0,s.jsx)(t.a,{href:"/docs/dev/data-operate/export/export-overview",children:"Export Overview"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["For a detailed introduction to the ",(0,s.jsx)(t.code,{children:"SELECT INTO OUTFILE"})," command, please refer to: ",(0,s.jsx)(t.a,{href:"../../sql-manual/sql-statements/data-modification/load-and-export/OUTFILE",children:"SELECT INTO OUTFILE"})]}),"\n",(0,s.jsx)(t.h2,{id:"applicable-scenarios",children:"Applicable Scenarios"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"SELECT INTO OUTFILE"})," is applicable to the following scenarios:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"When the exported data needs to go through complex calculation logic, such as filtering, aggregation, joining, etc."}),"\n",(0,s.jsx)(t.li,{children:"It is suitable for scenarios where synchronous tasks need to be executed."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The following limitations should be noted when using the ",(0,s.jsx)(t.code,{children:"SELECT INTO OUTFILE"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Compression formats for text is not supported."}),"\n",(0,s.jsx)(t.li,{children:"The pipeline engine in version 2.1 does not support concurrent exports."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,s.jsx)(t.h3,{id:"creating-tables-and-importing-data",children:"Creating Tables and Importing Data"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE IF NOT EXISTS tbl (\n    `c1` int(11) NULL,\n    `c2` string NULL,\n    `c3` bigint NULL\n)\nDISTRIBUTED BY HASH(c1) BUCKETS 20\nPROPERTIES(\"replication_num\" = \"1\");\n\n\ninsert into tbl values\n    (1, 'doris', 18),\n    (2, 'nereids', 20),\n    (3, 'pipelibe', 99999),\n    (4, 'Apache', 122123455),\n    (5, null, null);\n"})}),"\n",(0,s.jsx)(t.h3,{id:"export-to-hdfs",children:"Export to HDFS"}),"\n",(0,s.jsxs)(t.p,{children:["Export the query results to the directory ",(0,s.jsx)(t.code,{children:"hdfs://path/to/"})," and specify the export format as Parquet:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'SELECT c1, c2, c3 FROM tbl\nINTO OUTFILE "hdfs://ip:port/path/to/result_"\nFORMAT AS PARQUET\nPROPERTIES\n(\n    "fs.defaultFS" = "hdfs://ip:port",\n    "hadoop.username" = "hadoop"\n);\n'})}),"\n",(0,s.jsx)(t.h3,{id:"export-to-object-storage",children:"Export to Object Storage"}),"\n",(0,s.jsxs)(t.p,{children:["Export the query results to the ",(0,s.jsx)(t.code,{children:"s3://bucket/export/"})," directory in the s3 storage, specify the export format as ORC, and information such as ",(0,s.jsx)(t.code,{children:"sk"})," (secret key) and ",(0,s.jsx)(t.code,{children:"ak"})," (access key) needs to be provided."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'SELECT * FROM tbl\nINTO OUTFILE "s3://bucket/export/result_"\nFORMAT AS ORC\nPROPERTIES(\n    "s3.endpoint" = "xxxxx",\n    "s3.region" = "xxxxx",\n    "s3.secret_key"="xxxx",\n    "s3.access_key" = "xxxxx"\n);\n'})}),"\n",(0,s.jsx)(t.h2,{id:"export-instructions",children:"Export Instructions"}),"\n",(0,s.jsx)(t.h3,{id:"export-desctination",children:"Export Desctination"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"SELECT INTO OUTFILE"})," currently supports exporting to the following storage locations:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Object Storage: Amazon S3, COS, OSS, OBS, Google GCS"}),"\n",(0,s.jsx)(t.li,{children:"HDFS"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"supported-file-types",children:"Supported File Types"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"SELECT INTO OUTFILE"})," currently supports exporting the following file formats:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Parquet"}),"\n",(0,s.jsx)(t.li,{children:"ORC"}),"\n",(0,s.jsx)(t.li,{children:"csv"}),"\n",(0,s.jsx)(t.li,{children:"csv_with_names"}),"\n",(0,s.jsx)(t.li,{children:"csv_with_names_and_types"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"export-examples",children:"Export Examples"}),"\n",(0,s.jsx)(t.h3,{id:"export-to-an-hdfs-cluster-with-high-availability-enabled",children:"Export to an HDFS Cluster with High Availability Enabled"}),"\n",(0,s.jsx)(t.p,{children:"If HDFS has high availability enabled, HA (High Availability) information needs to be provided, such as:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'SELECT c1, c2, c3 FROM tbl\nINTO OUTFILE "hdfs://HDFS8000871/path/to/result_"\nFORMAT AS PARQUET\nPROPERTIES\n(\n    "fs.defaultFS" = "hdfs://HDFS8000871",\n    "hadoop.username" = "hadoop",\n    "dfs.nameservices" = "your-nameservices",\n    "dfs.ha.namenodes.your-nameservices" = "nn1,nn2",\n    "dfs.namenode.rpc-address.HDFS8000871.nn1" = "ip:port",\n    "dfs.namenode.rpc-address.HDFS8000871.nn2" = "ip:port",\n    "dfs.client.failover.proxy.provider.HDFS8000871" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n);\n'})}),"\n",(0,s.jsx)(t.h3,{id:"export-to-an-hdfs-cluster-with-high-availability-and-kerberos-authentication-enabled",children:"Export to an HDFS Cluster with High Availability and Kerberos Authentication Enabled"}),"\n",(0,s.jsx)(t.p,{children:"If the HDFS cluster has high availability enabled and Kerberos authentication is enabled, you can refer to the following SQL statement:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'SELECT * FROM tbl\nINTO OUTFILE "hdfs://path/to/result_"\nFORMAT AS PARQUET\nPROPERTIES\n(\n    "fs.defaultFS"="hdfs://hacluster/",\n    "hadoop.username" = "hadoop",\n    "dfs.nameservices"="hacluster",\n    "dfs.ha.namenodes.hacluster"="n1,n2",\n    "dfs.namenode.rpc-address.hacluster.n1"="192.168.0.1:8020",\n    "dfs.namenode.rpc-address.hacluster.n2"="192.168.0.2:8020",\n    "dfs.client.failover.proxy.provider.hacluster"="org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider",\n    "dfs.namenode.kerberos.principal"="hadoop/_HOST@REALM.COM",\n    "hadoop.security.authentication"="kerberos",\n    "hadoop.kerberos.principal"="doris_test@REALM.COM",\n    "hadoop.kerberos.keytab"="/path/to/doris_test.keytab"\n);\n'})}),"\n",(0,s.jsx)(t.h3,{id:"generating-an-export-success-indicator-file",children:"Generating an Export Success Indicator File"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"SELECT INTO OUTFILE"})," command is a synchronous command. Therefore, it is possible that the task connection is disconnected during the execution of the SQL, making it impossible to know whether the exported data has ended normally or is complete. At this time, you can use the ",(0,s.jsx)(t.code,{children:"success_file_name"})," parameter to require that a file indicator be generated in the directory after a successful export."]}),"\n",(0,s.jsxs)(t.p,{children:["Similar to Hive, users can judge whether the export has ended normally and whether the files in the export directory are complete by checking whether there is a file specified by the ",(0,s.jsx)(t.code,{children:"success_file_name"})," parameter in the export directory."]}),"\n",(0,s.jsxs)(t.p,{children:["For example: Export the query results of the select statement to the object storage: ",(0,s.jsx)(t.code,{children:"s3://bucket/export/"}),". Specify the export format as ",(0,s.jsx)(t.code,{children:"csv"}),". Specify the name of the export success indicator file as ",(0,s.jsx)(t.code,{children:"SUCCESS"}),". After the export is completed, a indicator file will be generated."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'SELECT k1,k2,v1 FROM tbl1 LIMIT 100000\nINTO OUTFILE "s3://bucket/export/result_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "s3.endpoint" = "xxxxx",\n    "s3.region" = "xxxxx",\n    "s3.secret_key"="xxxx",\n    "s3.access_key" = "xxxxx",\n    "column_separator" = ",",\n    "line_delimiter" = "\\n",\n    "success_file_name" = "SUCCESS"\n);\n'})}),"\n",(0,s.jsxs)(t.p,{children:["After the export is completed, one more file will be written, and the file name of this file is ",(0,s.jsx)(t.code,{children:"SUCCESS"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"clearing-the-export-directory-before-exporting",children:"Clearing the Export Directory Before Exporting"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'SELECT * FROM tbl1\nINTO OUTFILE "s3://bucket/export/result_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "s3.endpoint" = "xxxxx",\n    "s3.region" = "xxxxx",\n    "s3.secret_key"="xxxx",\n    "s3.access_key" = "xxxxx",\n    "column_separator" = ",",\n    "line_delimiter" = "\\n",\n    "delete_existing_files" = "true"\n);\n'})}),"\n",(0,s.jsxs)(t.p,{children:["If ",(0,s.jsx)(t.code,{children:'"delete_existing_files" = "true"'})," is set, the export job will first delete all files and directories under the ",(0,s.jsx)(t.code,{children:"s3://bucket/export/"})," directory, and then export the data to this directory."]}),"\n",(0,s.jsxs)(t.p,{children:["If you want to use the ",(0,s.jsx)(t.code,{children:"delete_existing_files"})," parameter, you also need to add the configuration ",(0,s.jsx)(t.code,{children:"enable_delete_existing_files = true"})," in ",(0,s.jsx)(t.code,{children:"fe.conf"})," and restart the FE. Only then will the ",(0,s.jsx)(t.code,{children:"delete_existing_files"})," parameter take effect. This operation will delete the data of the external system, which is a high-risk operation. Please ensure the permissions and data security of the external system on your own."]}),"\n",(0,s.jsx)(t.h3,{id:"setting-the-size-of-exported-files",children:"Setting the Size of Exported Files"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'SELECT * FROM tbl\nINTO OUTFILE "s3://path/to/result_"\nFORMAT AS ORC\nPROPERTIES(\n    "s3.endpoint" = "xxxxx",\n    "s3.region" = "xxxxx",\n    "s3.secret_key"="xxxx",\n    "s3.access_key" = "xxxxx",\n    "max_file_size" = "2048MB"\n);\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Since ",(0,s.jsx)(t.code,{children:'"max_file_size" = "2048MB"'})," is specified, if the final generated file is not larger than 2GB, there will be only one file. If it is larger than 2GB, there will be multiple files."]}),"\n",(0,s.jsx)(t.h2,{id:"notice",children:"Notice"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Export Data Volume and Export Efficiency"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"SELECT INTO OUTFILE"})," function is essentially executing an SQL query command. If concurrent exports are not enabled, the query results are exported by a single BE node in a single thread. Therefore, the entire export time includes the time consumed by the query itself and the time consumed by writing out the final result set. Enabling concurrent exports can reduce the export time."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Export Timeout"}),"\n",(0,s.jsxs)(t.p,{children:["The timeout period of the export command is the same as that of the query. If the export data times out due to a large amount of data, you can set the session variable ",(0,s.jsx)(t.code,{children:"query_timeout"})," to appropriately extend the query timeout period."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Management of Exported Files"}),"\n",(0,s.jsx)(t.p,{children:"Doris does not manage the exported files. Whether the files are successfully exported or left over after a failed export, users need to handle them on their own."}),"\n",(0,s.jsxs)(t.p,{children:["In addition, the ",(0,s.jsx)(t.code,{children:"SELECT INTO OUTFILE"})," command does not check whether files or file paths exist. Whether the ",(0,s.jsx)(t.code,{children:"SELECT INTO OUTFILE"})," command will automatically create paths or overwrite existing files is completely determined by the semantics of the remote storage system."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"If the Query Result Set Is Empty"}),"\n",(0,s.jsx)(t.p,{children:"For an export with an empty result set, an empty file will still be generated."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"File Splitting"}),"\n",(0,s.jsxs)(t.p,{children:["File splitting ensures that a row of data is completely stored in a single file. Therefore, the size of the file is not strictly equal to ",(0,s.jsx)(t.code,{children:"max_file_size"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Functions with Non-visible Characters"}),"\n",(0,s.jsxs)(t.p,{children:["For some functions whose output is non-visible characters, such as BITMAP and HLL types, when exported to the CSV file format, the output is ",(0,s.jsx)(t.code,{children:"\\N"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"appendix",children:"Appendix"}),"\n",(0,s.jsx)(t.h3,{id:"export-to-local-file-system",children:"Export to Local File System"}),"\n",(0,s.jsx)(t.p,{children:"The function of exporting to the local file system is turned off by default. This function is only used for local debugging and development, and should not be used in the production environment."}),"\n",(0,s.jsxs)(t.p,{children:["If you want to enable this function, please add ",(0,s.jsx)(t.code,{children:"enable_outfile_to_local=true"})," in ",(0,s.jsx)(t.code,{children:"fe.conf"})," and restart the FE."]}),"\n",(0,s.jsxs)(t.p,{children:["Example: Export all the data in the tbl table to the local file system, set the file format of the export job to csv (the default format), and set the column separator to ",(0,s.jsx)(t.code,{children:","}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'SELECT c1, c2 FROM db.tbl\nINTO OUTFILE "file:///path/to/result_"\nFORMAT AS CSV\nPROPERTIES(\n    "column_separator" = ","\n);\n'})}),"\n",(0,s.jsx)(t.p,{children:"This function will export and write data to the disk of the node where the BE is located. If there are multiple BE nodes, the data will be scattered on different BE nodes according to the concurrency of the export task, and each node will have a part of the data."}),"\n",(0,s.jsxs)(t.p,{children:["As in this example, a set of files similar to ",(0,s.jsx)(t.code,{children:"result_c6df5f01bd664dde-a2168b019b6c2b3f_0.csv"})," will eventually be produced under ",(0,s.jsx)(t.code,{children:"/path/to/"})," of the BE node."]}),"\n",(0,s.jsx)(t.p,{children:"The specific BE node IP will be displayed in the returned results, such as:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"+------------+-----------+----------+--------------------------------------------------------------------------+\n| FileNumber | TotalRows | FileSize | URL                                                                      |\n+------------+-----------+----------+--------------------------------------------------------------------------+\n|          1 |   1195072 |  4780288 | file:///172.20.32.136/path/to/result_c6df5f01bd664dde-a2168b019b6c2b3f_* |\n|          1 |   1202944 |  4811776 | file:///172.20.32.136/path/to/result_c6df5f01bd664dde-a2168b019b6c2b40_* |\n|          1 |   1198880 |  4795520 | file:///172.20.32.137/path/to/result_c6df5f01bd664dde-a2168b019b6c2b43_* |\n|          1 |   1198880 |  4795520 | file:///172.20.32.137/path/to/result_c6df5f01bd664dde-a2168b019b6c2b45_* |\n+------------+-----------+----------+--------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsx)(t.p,{children:"This function is not suitable for the production environment, and please ensure the permissions and data security of the export directory on your own."})})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return o}});var i=n(667294);let s={},r=i.createContext(s);function o(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);