"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["456085"],{706953:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>i});var r=JSON.parse('{"id":"sql-manual/sql-functions/table-valued-functions/hdfs","title":"HDFS","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/table-valued-functions/hdfs.md","sourceDirName":"sql-manual/sql-functions/table-valued-functions","slug":"/sql-manual/sql-functions/table-valued-functions/hdfs","permalink":"/docs/3.0/sql-manual/sql-functions/table-valued-functions/hdfs","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"HDFS","language":"en"},"sidebar":"docs","previous":{"title":"S3","permalink":"/docs/3.0/sql-manual/sql-functions/table-valued-functions/s3"},"next":{"title":"LOCAL","permalink":"/docs/3.0/sql-manual/sql-functions/table-valued-functions/local"}}'),t=s("785893"),d=s("250065");let i={title:"HDFS",language:"en"},l=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["HDFS table-valued-function(tvf), allows users to read and access file contents on S3-compatible object storage, just like accessing relational table. Currently supports ",(0,t.jsx)(n.code,{children:"csv/csv_with_names/csv_with_names_and_types/json/parquet/orc"})," file format."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'HDFS(\n    "uri" = "<uri>",\n    "fs.defaultFS" = "<fs_defaultFS>",\n    "hadoop.username" = "<hadoop_username>",\n    "format" = "<format>",\n    [, "<optional_property_key>" = "<optional_property_value>" [, ...] ]\n  );\n'})}),"\n",(0,t.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"uri"})}),(0,t.jsx)(n.td,{children:"The URI for accessing HDFS. If the URI path does not exist or the file is empty, the HDFS TVF will return an empty set."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"fs.defaultFS"})}),(0,t.jsx)(n.td,{children:"The default file system URI for HDFS"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"hadoop.username"})}),(0,t.jsx)(n.td,{children:"Required, can be any string but cannot be empty."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"format"})}),(0,t.jsxs)(n.td,{children:["File format, required. Currently supports ",(0,t.jsx)(n.code,{children:"csv/csv_with_names/csv_with_names_and_types/json/parquet/orc/avro"}),"."]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional_property_key"})," in the above syntax can select the corresponding parameter from the following list as needed, and ",(0,t.jsx)(n.code,{children:"optional_property_value"})," is the value of the parameter"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Remarks"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"hadoop.security.authentication"})}),(0,t.jsx)(n.td,{children:"HDFS security authentication type"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"hadoop.username"})}),(0,t.jsx)(n.td,{children:"Alternative HDFS username"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"hadoop.kerberos.principal"})}),(0,t.jsx)(n.td,{children:"Kerberos principal"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"hadoop.kerberos.keytab"})}),(0,t.jsx)(n.td,{children:"Kerberos keytab"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"dfs.client.read.shortcircuit"})}),(0,t.jsx)(n.td,{children:"Enable short-circuit read"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"dfs.domain.socket.path"})}),(0,t.jsx)(n.td,{children:"Domain socket path"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"dfs.nameservices"})}),(0,t.jsx)(n.td,{children:"The nameservice for HA mode"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"dfs.ha.namenodes.your-nameservices"})}),(0,t.jsx)(n.td,{children:"Configuration for namenode in HA mode"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"dfs.namenode.rpc-address.your-nameservices.your-namenode"})}),(0,t.jsx)(n.td,{children:"Specify the RPC address for the namenode"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"dfs.client.failover.proxy.provider.your-nameservices"})}),(0,t.jsx)(n.td,{children:"Specify the proxy provider for failover"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"column_separator"})}),(0,t.jsxs)(n.td,{children:["Column separator, default is ",(0,t.jsx)(n.code,{children:"\\t"})]}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"line_delimiter"})}),(0,t.jsxs)(n.td,{children:["Line separator, default is ",(0,t.jsx)(n.code,{children:"\\n"})]}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"compress_type"})}),(0,t.jsxs)(n.td,{children:["Supported types: ",(0,t.jsx)(n.code,{children:"UNKNOWN/PLAIN/GZ/LZO/BZ2/LZ4FRAME/DEFLATE/SNAPPYBLOCK"}),". Default is ",(0,t.jsx)(n.code,{children:"UNKNOWN"}),", and the type will be automatically inferred based on the URI suffix."]}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"read_json_by_line"})}),(0,t.jsxs)(n.td,{children:["For JSON format imports, default is ",(0,t.jsx)(n.code,{children:"true"})]}),(0,t.jsxs)(n.td,{children:["Reference: ",(0,t.jsx)(n.a,{href:"../../../data-operate/import/import-way/load-json-format.md",children:"JSON Load"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"strip_outer_array"})}),(0,t.jsxs)(n.td,{children:["For JSON format imports, default is ",(0,t.jsx)(n.code,{children:"false"})]}),(0,t.jsxs)(n.td,{children:["Reference: ",(0,t.jsx)(n.a,{href:"../../../data-operate/import/import-way/load-json-format.md",children:"JSON Load"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"json_root"})}),(0,t.jsx)(n.td,{children:"For JSON format imports, default is empty"}),(0,t.jsxs)(n.td,{children:["Reference: ",(0,t.jsx)(n.a,{href:"../../../data-operate/import/import-way/load-json-format.md",children:"JSON Load"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"json_paths"})}),(0,t.jsx)(n.td,{children:"For JSON format imports, default is empty"}),(0,t.jsxs)(n.td,{children:["Reference: ",(0,t.jsx)(n.a,{href:"../../../data-operate/import/import-way/load-json-format.md",children:"JSON Load"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"num_as_string"})}),(0,t.jsxs)(n.td,{children:["For JSON format imports, default is ",(0,t.jsx)(n.code,{children:"false"})]}),(0,t.jsxs)(n.td,{children:["Reference: ",(0,t.jsx)(n.a,{href:"../../../data-operate/import/import-way/load-json-format.md",children:"JSON Load"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"fuzzy_parse"})}),(0,t.jsxs)(n.td,{children:["For JSON format imports, default is ",(0,t.jsx)(n.code,{children:"false"})]}),(0,t.jsxs)(n.td,{children:["Reference: ",(0,t.jsx)(n.a,{href:"../../../data-operate/import/import-way/load-json-format.md",children:"JSON Load"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"trim_double_quotes"})}),(0,t.jsxs)(n.td,{children:["For CSV format imports, boolean type. Default is ",(0,t.jsx)(n.code,{children:"false"}),". If ",(0,t.jsx)(n.code,{children:"true"}),", removes the outermost double quotes from each field."]}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"skip_lines"})}),(0,t.jsxs)(n.td,{children:["For CSV format imports, integer type. Default is 0. Skips the first few lines of the CSV file. This parameter is ignored if ",(0,t.jsx)(n.code,{children:"csv_with_names"})," or ",(0,t.jsx)(n.code,{children:"csv_with_names_and_types"})," is set."]}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"path_partition_keys"})}),(0,t.jsxs)(n.td,{children:["Specify the partition column names carried in the file path, for example ",(0,t.jsx)(n.code,{children:'/path/to/city=beijing/date="2023-07-09"'}),", then fill in ",(0,t.jsx)(n.code,{children:'path_partition_keys="city,date"'}),", which will automatically read the corresponding column names and values from the path for import."]}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"resource"})}),(0,t.jsxs)(n.td,{children:["Specify the resource name. HDFS TVF can directly access HDFS using an existing HDFS resource. Refer to ",(0,t.jsx)(n.a,{href:"../../sql-statements/Data-Definition-Statements/Create/CREATE-RESOURCE.md",children:"CREATE-RESOURCE"})," for creating HDFS resources."]}),(0,t.jsx)(n.td,{children:"Supported from version 2.1.4 and above."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Privilege"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Object"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"USAGE_PRIV"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"table"}),(0,t.jsx)(n.td,{style:{textAlign:"left"}})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"SELECT_PRIV"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"table"}),(0,t.jsx)(n.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Read and access csv format files on hdfs storage."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'select * from hdfs(\n              "uri" = "hdfs://127.0.0.1:842/user/doris/csv_format_test/student.csv",\n              "fs.defaultFS" = "hdfs://127.0.0.1:8424",\n              "hadoop.username" = "doris",\n              "format" = "csv");\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"  +------+---------+------+\n  | c1   | c2      | c3   |\n  +------+---------+------+\n  | 1    | alice   | 18   |\n  | 2    | bob     | 20   |\n  | 3    | jack    | 24   |\n  | 4    | jackson | 19   |\n  | 5    | liming  | 18   |\n  +------+---------+------+\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Read and access csv format files on hdfs storage in HA mode."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'select * from hdfs(\n            "uri" = "hdfs://127.0.0.1:842/user/doris/csv_format_test/student.csv",\n            "fs.defaultFS" = "hdfs://127.0.0.1:8424",\n            "hadoop.username" = "doris",\n            "format" = "csv",\n            "dfs.nameservices" = "my_hdfs",\n            "dfs.ha.namenodes.my_hdfs" = "nn1,nn2",\n            "dfs.namenode.rpc-address.my_hdfs.nn1" = "nanmenode01:8020",\n            "dfs.namenode.rpc-address.my_hdfs.nn2" = "nanmenode02:8020",\n            "dfs.client.failover.proxy.provider.my_hdfs" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider");\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"  +------+---------+------+\n  | c1   | c2      | c3   |\n  +------+---------+------+\n  | 1    | alice   | 18   |\n  | 2    | bob     | 20   |\n  | 3    | jack    | 24   |\n  | 4    | jackson | 19   |\n  | 5    | liming  | 18   |\n  +------+---------+------+\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Can be used with ",(0,t.jsx)(n.code,{children:"desc function"})," :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'desc function hdfs(\n            "uri" = "hdfs://127.0.0.1:8424/user/doris/csv_format_test/student_with_names.csv",\n            "fs.defaultFS" = "hdfs://127.0.0.1:8424",\n            "hadoop.username" = "doris",\n            "format" = "csv_with_names");\n'})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var r=s(667294);let t={},d=r.createContext(t);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);