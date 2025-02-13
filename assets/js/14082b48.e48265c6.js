"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["972234"],{981017:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>t});var i=JSON.parse('{"id":"data-operate/import/file-format/csv","title":"CSV","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/data-operate/import/file-format/csv.md","sourceDirName":"data-operate/import/file-format","slug":"/data-operate/import/file-format/csv","permalink":"/docs/3.0/data-operate/import/file-format/csv","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"CSV","language":"en"},"sidebar":"docs","previous":{"title":"MySQL Load","permalink":"/docs/3.0/data-operate/import/import-way/mysql-load-manual"},"next":{"title":"JSON","permalink":"/docs/3.0/data-operate/import/file-format/json"}}'),l=s("785893"),r=s("250065");let t={title:"CSV",language:"en"},a=void 0,d={},c=[{value:"Loading Methods",id:"loading-methods",level:2},{value:"Parameter Configuration",id:"parameter-configuration",level:2},{value:"Parameter Support",id:"parameter-support",level:3},{value:"Parameter Description",id:"parameter-description",level:3},{value:"Line Delimiter",id:"line-delimiter",level:4},{value:"Column Delimiter",id:"column-delimiter",level:4},{value:"Enclosure",id:"enclosure",level:4},{value:"Escape Character",id:"escape-character",level:4},{value:"Skip Lines",id:"skip-lines",level:4},{value:"Trim Double Quotes",id:"trim-double-quotes",level:4},{value:"Compression Format",id:"compression-format",level:4},{value:"Usage Examples",id:"usage-examples",level:2},{value:"Stream Load",id:"stream-load",level:3},{value:"Broker Load",id:"broker-load",level:3},{value:"Routine Load",id:"routine-load",level:3},{value:"MySQL Load",id:"mysql-load",level:3},{value:"TVF Load",id:"tvf-load",level:3}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"This document explains how to load CSV format data files into Doris. Doris supports flexible CSV format configuration, including custom delimiters, field enclosures, and provides various loading methods to meet data loading requirements in different scenarios."}),"\n",(0,l.jsx)(n.h2,{id:"loading-methods",children:"Loading Methods"}),"\n",(0,l.jsx)(n.p,{children:"Doris supports the following methods to load CSV format data:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/3.0/data-operate/import/import-way/stream-load-manual",children:"Stream Load"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/3.0/data-operate/import/import-way/broker-load-manual",children:"Broker Load"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/3.0/data-operate/import/import-way/routine-load-manual",children:"Routine Load"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/3.0/data-operate/import/import-way/mysql-load-manual",children:"MySQL Load"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"../../sql-manual/sql-functions/table-valued-functions/s3",children:"INSERT INTO FROM S3 TVF"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"../../sql-manual/sql-functions/table-valued-functions/hdfs",children:"INSERT INTO FROM HDFS TVF"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"parameter-configuration",children:"Parameter Configuration"}),"\n",(0,l.jsx)(n.h3,{id:"parameter-support",children:"Parameter Support"}),"\n",(0,l.jsx)(n.p,{children:"The following table lists the CSV format parameters supported by various loading methods:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parameter"}),(0,l.jsx)(n.th,{children:"Default Value"}),(0,l.jsx)(n.th,{children:"Stream Load"}),(0,l.jsx)(n.th,{children:"Broker Load"}),(0,l.jsx)(n.th,{children:"Routine Load"}),(0,l.jsx)(n.th,{children:"MySQL Load"}),(0,l.jsx)(n.th,{children:"TVF"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Line Delimiter"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"\\n"})}),(0,l.jsx)(n.td,{children:"line_delimiter"}),(0,l.jsx)(n.td,{children:"LINES TERMINATED BY"}),(0,l.jsx)(n.td,{children:"Not supported"}),(0,l.jsx)(n.td,{children:"LINES TERMINATED BY"}),(0,l.jsx)(n.td,{children:"line_delimiter"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Column Delimiter"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"\\t"})}),(0,l.jsx)(n.td,{children:"column_separator"}),(0,l.jsx)(n.td,{children:"COLUMNS TERMINATED BY"}),(0,l.jsx)(n.td,{children:"COLUMNS TERMINATED BY"}),(0,l.jsx)(n.td,{children:"COLUMNS TERMINATED BY"}),(0,l.jsx)(n.td,{children:"column_separator"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Enclosure"}),(0,l.jsx)(n.td,{children:"None"}),(0,l.jsx)(n.td,{children:"enclose"}),(0,l.jsx)(n.td,{children:"PROPERTIES.enclose"}),(0,l.jsx)(n.td,{children:"PROPERTIES.enclose"}),(0,l.jsx)(n.td,{children:"PROPERTIES.enclose"}),(0,l.jsx)(n.td,{children:"enclose"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Escape Character"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"\\"})}),(0,l.jsx)(n.td,{children:"escape"}),(0,l.jsx)(n.td,{children:"PROPERTIES.escape"}),(0,l.jsx)(n.td,{children:"PROPERTIES.escape"}),(0,l.jsx)(n.td,{children:"PROPERTIES.escape"}),(0,l.jsx)(n.td,{children:"escape"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Skip Lines"}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{children:"skip_lines"}),(0,l.jsx)(n.td,{children:"PROPERTIES.skip_lines"}),(0,l.jsx)(n.td,{children:"Not supported"}),(0,l.jsx)(n.td,{children:"IGNORE LINES"}),(0,l.jsx)(n.td,{children:"skip_lines"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Trim Double Quotes"}),(0,l.jsx)(n.td,{children:"false"}),(0,l.jsx)(n.td,{children:"trim_double_quotes"}),(0,l.jsx)(n.td,{children:"Not supported"}),(0,l.jsx)(n.td,{children:"PROPERTIES.trim_double_quotes"}),(0,l.jsx)(n.td,{children:"Not supported"}),(0,l.jsx)(n.td,{children:"trim_double_quotes"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Compression Format"}),(0,l.jsx)(n.td,{children:"plain"}),(0,l.jsx)(n.td,{children:"compress_type"}),(0,l.jsx)(n.td,{children:"PROPERTIES.compress_type"}),(0,l.jsx)(n.td,{children:"Not supported"}),(0,l.jsx)(n.td,{children:"Not supported"}),(0,l.jsx)(n.td,{children:"compress_type"})]})]})]}),"\n",(0,l.jsx)(n.admonition,{title:"Note",type:"tip",children:(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Stream Load: Parameters are specified directly through HTTP Headers, e.g., ",(0,l.jsx)(n.code,{children:'-H "line_delimiter:\\n"'})]}),"\n",(0,l.jsxs)(n.li,{children:["Broker Load: Parameters are specified in SQL statements, where:\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Delimiters are specified through ",(0,l.jsx)(n.code,{children:"COLUMNS TERMINATED BY"}),", ",(0,l.jsx)(n.code,{children:"LINES TERMINATED BY"})]}),"\n",(0,l.jsxs)(n.li,{children:["Other parameters are specified through ",(0,l.jsx)(n.code,{children:"PROPERTIES"}),", e.g., ",(0,l.jsx)(n.code,{children:'PROPERTIES("compress_type"="gz")'})]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Routine Load: Parameters are specified in SQL statements, where:\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Delimiters are specified through ",(0,l.jsx)(n.code,{children:"COLUMNS TERMINATED BY"})]}),"\n",(0,l.jsxs)(n.li,{children:["Other parameters are specified through ",(0,l.jsx)(n.code,{children:"PROPERTIES"}),", e.g., ",(0,l.jsx)(n.code,{children:'PROPERTIES("enclose"="\\"")'})]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["MySQL Load: Parameters are specified in SQL statements, where:\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Delimiters are specified through ",(0,l.jsx)(n.code,{children:"LINES TERMINATED BY"}),", ",(0,l.jsx)(n.code,{children:"COLUMNS TERMINATED BY"})]}),"\n",(0,l.jsxs)(n.li,{children:["Other parameters are specified through ",(0,l.jsx)(n.code,{children:"PROPERTIES"}),", e.g., ",(0,l.jsx)(n.code,{children:'PROPERTIES("escape"="\\\\")'})]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["TVF: Parameters are specified in TVF statements, e.g., ",(0,l.jsx)(n.code,{children:'S3("line_delimiter"="\\n")'})]}),"\n"]})}),"\n",(0,l.jsx)(n.h3,{id:"parameter-description",children:"Parameter Description"}),"\n",(0,l.jsx)(n.h4,{id:"line-delimiter",children:"Line Delimiter"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Purpose: Specifies the line break character in the data file"}),"\n",(0,l.jsxs)(n.li,{children:["Default Value: ",(0,l.jsx)(n.code,{children:"\\n"})]}),"\n",(0,l.jsx)(n.li,{children:"Features: Supports multiple characters combination as line break"}),"\n",(0,l.jsxs)(n.li,{children:["Use Cases and Examples:\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Linux/Unix System Files:\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"Data File:\nJohn,25\\n\nMary,30\\n\n\nParameter Setting:\nline_delimiter: \\n (default value, can be omitted)\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Windows System Files:\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"Data File:\nJohn,25\\r\\n\nMary,30\\r\\n\n\nParameter Setting:\nline_delimiter: \\r\\n\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Special Program Generated Files:\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"Data File:\nJohn,25\\r\nMary,30\\r\n\nParameter Setting:\nline_delimiter: \\r\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Custom Multi-character Delimiter:\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"Data File:\nJohn,25||\nMary,30||\n\nParameter Setting:\nline_delimiter: ||\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"column-delimiter",children:"Column Delimiter"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Purpose: Specifies the column delimiter in the data file"}),"\n",(0,l.jsxs)(n.li,{children:["Default Value: ",(0,l.jsx)(n.code,{children:"\\t"})," (tab)"]}),"\n",(0,l.jsxs)(n.li,{children:["Features:\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Supports visible and invisible characters"}),"\n",(0,l.jsx)(n.li,{children:"Supports multiple character combinations"}),"\n",(0,l.jsxs)(n.li,{children:["Invisible characters need to use hex representation with ",(0,l.jsx)(n.code,{children:"\\x"})," prefix"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Special Handling for MySQL Protocol:\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Invisible characters need an extra backslash"}),"\n",(0,l.jsxs)(n.li,{children:["For example, Hive's ",(0,l.jsx)(n.code,{children:"\\x01"})," needs to be written as ",(0,l.jsx)(n.code,{children:"\\\\x01"})," in Broker Load"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Use Cases and Examples:\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Common Visible Characters:\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"Data File:\nJohn,25,New York\nMary,30,Los Angeles\n\nParameter Setting:\ncolumn_separator: ,\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Tab (Default):\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"Data File:\nJohn    25    New York\nMary    30    Los Angeles\n\nParameter Setting:\ncolumn_separator: \\t (default value, can be omitted)\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Hive Files (Stream Load):\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"Data File:\nJohn\\x0125\\x01New York\nMary\\x0130\\x01Los Angeles\n\nParameter Setting:\ncolumn_separator: \\x01\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Hive Files (Broker Load):\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'Data File:\nJohn\\x0125\\x01New York\nMary\\x0130\\x01Los Angeles\n\nParameter Setting:\nPROPERTIES("column_separator"="\\\\x01")\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Multi-character Delimiter:\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"Data File:\nJohn||25||New York\nMary||30||Los Angeles\n\nParameter Setting:\ncolumn_separator: ||\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"enclosure",children:"Enclosure"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Purpose: Protects fields containing special characters from being incorrectly parsed"}),"\n",(0,l.jsx)(n.li,{children:"Limitation: Only supports single-byte characters"}),"\n",(0,l.jsxs)(n.li,{children:["Common Characters:\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Single quote: ",(0,l.jsx)(n.code,{children:"'"})]}),"\n",(0,l.jsxs)(n.li,{children:["Double quote: ",(0,l.jsx)(n.code,{children:'"'})]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Use Cases and Examples:\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Field Contains Column Delimiter:\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"Data: a,'b,c',d\nColumn Delimiter: ,\nEnclosure: '\nParsing Result: 3 fields [a] [b,c] [d]\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Field Contains Line Delimiter:\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"Data: a,'b\\nc',d\nColumn Delimiter: ,\nEnclosure: '\nParsing Result: 3 fields [a] [b\\nc] [d]\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Field Contains Both Column and Line Delimiters:\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"Data: a,'b,c\\nd,e',f\nColumn Delimiter: ,\nEnclosure: '\nParsing Result: 3 fields [a] [b,c\\nd,e] [f]\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"escape-character",children:"Escape Character"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Purpose: Escapes characters in fields that are the same as the enclosure character"}),"\n",(0,l.jsxs)(n.li,{children:["Limitation: Only supports single-byte characters, default is ",(0,l.jsx)(n.code,{children:"\\"})]}),"\n",(0,l.jsxs)(n.li,{children:["Use Cases and Examples:\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Field Contains Enclosure Character:\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"Data: a,'b,\\'c',d\nColumn Delimiter: ,\nEnclosure: '\nEscape Character: \\\nParsing Result: 3 fields [a] [b,'c] [d]\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Field Contains Multiple Enclosure Characters:\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'Data: a,"b,\\"c\\"d",e\nColumn Delimiter: ,\nEnclosure: "\nEscape Character: \\\nParsing Result: 3 fields [a] [b,"c"d] [e]\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Field Contains Escape Character Itself:\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"Data: a,'b\\\\c',d\nColumn Delimiter: ,\nEnclosure: '\nEscape Character: \\\nParsing Result: 3 fields [a] [b\\c] [d]\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"skip-lines",children:"Skip Lines"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Purpose: Skips the first few lines of the CSV file"}),"\n",(0,l.jsx)(n.li,{children:"Type: Integer"}),"\n",(0,l.jsx)(n.li,{children:"Default Value: 0"}),"\n",(0,l.jsxs)(n.li,{children:["Special Note:\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["When format is ",(0,l.jsx)(n.code,{children:"csv_with_names"}),", the system automatically skips the first line (column names), ignoring the skip_lines parameter"]}),"\n",(0,l.jsxs)(n.li,{children:["When format is ",(0,l.jsx)(n.code,{children:"csv_with_names_and_types"}),", the system automatically skips the first two lines (column names and types), ignoring the skip_lines parameter"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Use Cases and Examples:\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Skip Title Line:\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"Data File:\nName,Age,City\nJohn,25,New York\nMary,30,Los Angeles\n\nParameter Setting:\nskip_lines: 1\nResult: Skip title line, load subsequent data\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Skip Comment Lines:\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"Data File:\n# User Information Table\n# Created Time: 2024-01-01\nJohn,25,New York\nMary,30,Los Angeles\n\nParameter Setting:\nskip_lines: 2\nResult: Skip comment lines, load subsequent data\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Use csv_with_names Format:\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"Data File:\nname,age,city\nJohn,25,New York\nMary,30,Los Angeles\n\nParameter Setting:\nformat: csv_with_names\nResult: System automatically skips the first line of column names\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Use csv_with_names_and_types Format:\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"Data File:\nname,age,city\nstring,int,string\nJohn,25,New York\nMary,30,Los Angeles\n\nParameter Setting:\nformat: csv_with_names_and_types\nResult: System automatically skips the first two lines of column names and types\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"trim-double-quotes",children:"Trim Double Quotes"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Purpose: Trims the outermost double quotes from each field in the CSV file"}),"\n",(0,l.jsx)(n.li,{children:"Type: Boolean"}),"\n",(0,l.jsx)(n.li,{children:"Default Value: false"}),"\n",(0,l.jsxs)(n.li,{children:["Use Cases and Examples:\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Trim Double Quotes:\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'Data File:\n"John","25","New York"\n"Mary","30","Los Angeles"\n\nParameter Setting:\ntrim_double_quotes: true\nResult:\nJohn,25,New York\nMary,30,Los Angeles\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"compression-format",children:"Compression Format"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Purpose: Specifies the compression format of the data file"}),"\n",(0,l.jsx)(n.li,{children:"Type: String, ignoring case"}),"\n",(0,l.jsx)(n.li,{children:"Default Value: plain"}),"\n",(0,l.jsxs)(n.li,{children:["Supported Compression Formats:\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"plain: No compression (default)"}),"\n",(0,l.jsx)(n.li,{children:"bz2: BZIP2 compression"}),"\n",(0,l.jsx)(n.li,{children:"deflate: DEFLATE compression"}),"\n",(0,l.jsx)(n.li,{children:"gz: GZIP compression"}),"\n",(0,l.jsx)(n.li,{children:"lz4: LZ4 Frame format compression"}),"\n",(0,l.jsx)(n.li,{children:"lz4_block: LZ4 Block format compression"}),"\n",(0,l.jsx)(n.li,{children:"lzo: LZO compression"}),"\n",(0,l.jsx)(n.li,{children:"lzop: LZOP compression"}),"\n",(0,l.jsx)(n.li,{children:"snappy_block: SNAPPY Block format compression"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Note:\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"tar is a file packaging format, not a compression format, so it is not supported"}),"\n",(0,l.jsx)(n.li,{children:"If you need to use tar packaged files, please unpack them first before loading"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,l.jsx)(n.p,{children:"This section demonstrates the usage of CSV format in different loading methods."}),"\n",(0,l.jsx)(n.h3,{id:"stream-load",children:"Stream Load"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'# Specify delimiter\ncurl --location-trusted -u root: \\\n    -H "column_separator:," \\\n    -H "line_delimiter:\\n" \\\n    -T example.csv \\\n    http://<fe_host>:<fe_http_port>/api/test_db/test_table/_stream_load\n\n# Handle quoted data\ncurl --location-trusted -u root: \\\n    -H "column_separator:," \\\n    -H "enclose:\\"" \\\n    -T example.csv \\\n    http://<fe_host>:<fe_http_port>/api/test_db/test_table/_stream_load\n\n# Load compressed file\ncurl --location-trusted -u root: \\\n    -H "compress_type:gz" \\\n    -T example.csv.gz \\\n    http://<fe_host>:<fe_http_port>/api/test_db/test_table/_stream_load\n'})}),"\n",(0,l.jsx)(n.h3,{id:"broker-load",children:"Broker Load"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'-- Specify delimiter\nLOAD LABEL test_db.test_label\n(\n    DATA INFILE("s3://bucket/example.csv")\n    INTO TABLE test_table\n    COLUMNS TERMINATED BY ","\n    LINES TERMINATED BY "\\n"\n    ...\n);\n\n-- Handle quoted data\nLOAD LABEL test_db.test_label\n(\n    DATA INFILE("s3://bucket/example.csv")\n    INTO TABLE test_table\n    COLUMNS TERMINATED BY ","\n    LINES TERMINATED BY "\\n"\n    PROPERTIES\n    (\n        "enclose" = "\\"",\n        "escape" = "\\\\"\n    )\n    ...\n);\n\n-- Load compressed file\nLOAD LABEL test_db.test_label\n(\n    DATA INFILE("s3://bucket/example.csv.gz")\n    INTO TABLE test_table\n    COLUMNS TERMINATED BY ","\n    LINES TERMINATED BY "\\n"\n    PROPERTIES\n    (\n        "compress_type" = "gz"\n    )\n    ...\n);\n'})}),"\n",(0,l.jsx)(n.h3,{id:"routine-load",children:"Routine Load"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'-- Specify delimiter\nCREATE ROUTINE LOAD test_db.test_job ON test_table\nCOLUMNS TERMINATED BY ","\nFROM KAFKA\n(\n     ...\n);\n\n-- Handle quoted data\nCREATE ROUTINE LOAD test_db.test_job ON test_table\nCOLUMNS TERMINATED BY ","\nPROPERTIES\n(\n    "enclose" = "\\"",\n    "escape" = "\\\\"\n)\nFROM KAFKA\n(\n     ...\n);\n'})}),"\n",(0,l.jsx)(n.h3,{id:"mysql-load",children:"MySQL Load"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"-- Specify delimiter\nLOAD DATA LOCAL INFILE 'example.csv'\nINTO TABLE test_table\nCOLUMNS TERMINATED BY ','\nLINES TERMINATED BY '\\n';\n\n-- Handle quoted data\nLOAD DATA LOCAL INFILE 'example.csv'\nINTO TABLE test_table\nCOLUMNS TERMINATED BY ','\nLINES TERMINATED BY '\\n'\nPROPERTIES\n(\n    \"enclose\" = \"\\\"\",\n    \"escape\" = \"\\\\\"\n);\n\n-- Skip table header\nLOAD DATA LOCAL INFILE 'example.csv'\nINTO TABLE test_table\nCOLUMNS TERMINATED BY ','\nLINES TERMINATED BY '\\n'\nIGNORE 1 LINES;\n"})}),"\n",(0,l.jsx)(n.h3,{id:"tvf-load",children:"TVF Load"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'-- Specify delimiter\nINSERT INTO test_table\nSELECT *\nFROM S3\n(\n    "path" = "s3://bucket/example.csv",\n    "column_separator" = ",",\n    "line_delimiter" = "\\n",\n    ...\n);\n\n-- Handle quoted data\nINSERT INTO test_table\nSELECT *\nFROM S3\n(\n    "path" = "s3://bucket/example.csv",\n    "column_separator" = ",",\n    "enclose" = "\\"",\n    "escape" = "\\\\",\n    ...\n);\n\n-- Load compressed file\nINSERT INTO test_table\nSELECT *\nFROM S3\n(\n    "path" = "s3://bucket/example.csv.gz",\n    "column_separator" = ",",\n    "line_delimiter" = "\\n",\n    "compress_type" = "gz",\n    ...\n);\n'})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return t}});var i=s(667294);let l={},r=i.createContext(l);function t(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);