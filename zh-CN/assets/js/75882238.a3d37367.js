"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["833771"],{674609:function(n,e,s){s.r(e),s.d(e,{metadata:()=>l,contentTitle:()=>d,default:()=>x,assets:()=>c,toc:()=>h,frontMatter:()=>r});var l=JSON.parse('{"id":"lakehouse/database/clickhouse","title":"ClickHouse","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/lakehouse/database/clickhouse.md","sourceDirName":"lakehouse/database","slug":"/lakehouse/database/clickhouse","permalink":"/zh-CN/docs/lakehouse/database/clickhouse","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ClickHouse","language":"zh-CN"},"sidebar":"docs","previous":{"title":"IBM Db2","permalink":"/zh-CN/docs/lakehouse/database/ibm-db2"},"next":{"title":"SAP HANA","permalink":"/zh-CN/docs/lakehouse/database/sap-hana"}}'),i=s("785893"),t=s("250065");let r={title:"ClickHouse",language:"zh-CN"},d=void 0,c={},h=[{value:"\u4F7F\u7528\u987B\u77E5",id:"\u4F7F\u7528\u987B\u77E5",level:2},{value:"\u8FDE\u63A5 ClickHouse",id:"\u8FDE\u63A5-clickhouse",level:2},{value:"\u8FDE\u63A5\u5B89\u5168",id:"\u8FDE\u63A5\u5B89\u5168",level:3},{value:"\u5C42\u7EA7\u6620\u5C04",id:"\u5C42\u7EA7\u6620\u5C04",level:2},{value:"\u7C7B\u578B\u6620\u5C04",id:"\u7C7B\u578B\u6620\u5C04",level:2},{value:"ClickHouse \u5230 Doris \u7C7B\u578B\u6620\u5C04",id:"clickhouse-\u5230-doris-\u7C7B\u578B\u6620\u5C04",level:3},{value:"\u67E5\u8BE2\u4F18\u5316",id:"\u67E5\u8BE2\u4F18\u5316",level:2},{value:"\u8C13\u8BCD\u4E0B\u63A8",id:"\u8C13\u8BCD\u4E0B\u63A8",level:3},{value:"\u884C\u6570\u9650\u5236",id:"\u884C\u6570\u9650\u5236",level:3},{value:"\u8F6C\u4E49\u5B57\u7B26",id:"\u8F6C\u4E49\u5B57\u7B26",level:3},{value:"\u5E38\u89C1\u95EE\u9898",id:"\u5E38\u89C1\u95EE\u9898",level:2}];function o(n){let e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"Doris JDBC Catalog \u652F\u6301\u901A\u8FC7\u6807\u51C6 JDBC \u63A5\u53E3\u8FDE\u63A5 ClickHouse \u6570\u636E\u5E93\u3002\u672C\u6587\u6863\u4ECB\u7ECD\u5982\u4F55\u914D\u7F6E ClickHouse \u6570\u636E\u5E93\u8FDE\u63A5\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u4F7F\u7528\u987B\u77E5",children:"\u4F7F\u7528\u987B\u77E5"}),"\n",(0,i.jsx)(e.p,{children:"\u8981\u8FDE\u63A5\u5230 ClickHouse \u6570\u636E\u5E93\uFF0C\u60A8\u9700\u8981"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"ClickHouse 23.x \u6216\u66F4\u9AD8\u7248\u672C (\u4F4E\u4E8E\u6B64\u7248\u672C\u672A\u7ECF\u5145\u5206\u6D4B\u8BD5)\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["ClickHouse \u6570\u636E\u5E93\u7684 JDBC \u9A71\u52A8\u7A0B\u5E8F\uFF0C\u60A8\u53EF\u4EE5\u4ECE ",(0,i.jsx)(e.a,{href:"https://mvnrepository.com/artifact/com.clickhouse/clickhouse-jdbc",children:"Maven \u4ED3\u5E93"}),"\u4E0B\u8F7D\u6700\u65B0\u6216\u6307\u5B9A\u7248\u672C\u7684 ClickHouse JDBC \u9A71\u52A8\u7A0B\u5E8F\u3002",(0,i.jsx)(e.strong,{children:"\u63A8\u8350\u4F7F\u7528 ClickHouse JDBC Driver 0.4.6 \u7248\u672C\u3002"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Doris \u6BCF\u4E2A FE \u548C BE \u8282\u70B9\u548C ClickHouse \u670D\u52A1\u5668\u4E4B\u95F4\u7684\u7F51\u7EDC\u8FDE\u63A5\uFF0C\u9ED8\u8BA4\u7AEF\u53E3\u4E3A 8123\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u8FDE\u63A5-clickhouse",children:"\u8FDE\u63A5 ClickHouse"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'CREATE CATALOG clickhouse PROPERTIES (\n    "type"="jdbc",\n    "user"="default",\n    "password"="password",\n    "jdbc_url" = "jdbc:clickhouse://example.net:8123/",\n    "driver_url" = "clickhouse-jdbc-0.4.6-all.jar",\n    "driver_class" = "com.clickhouse.jdbc.ClickHouseDriver"\n)\n'})}),"\n",(0,i.jsx)(e.admonition,{title:"\u5907\u6CE8",type:"info",children:(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"jdbc_url"})," \u5B9A\u4E49\u8981\u4F20\u9012\u7ED9 ClickHouse JDBC \u9A71\u52A8\u7A0B\u5E8F\u7684\u8FDE\u63A5\u4FE1\u606F\u548C\u53C2\u6570\u3002\n\u652F\u6301\u7684 URL \u7684\u53C2\u6570\u53EF\u5728 ",(0,i.jsx)(e.a,{href:"https://clickhouse.com/docs/en/integrations/java#configuration",children:"ClickHouse JDBC \u9A71\u52A8\u914D\u7F6E"})," \u4E2D\u627E\u5230\u3002"]})}),"\n",(0,i.jsx)(e.h3,{id:"\u8FDE\u63A5\u5B89\u5168",children:"\u8FDE\u63A5\u5B89\u5168"}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679C\u60A8\u4F7F\u7528\u6570\u636E\u6E90\u4E0A\u5B89\u88C5\u7684\u5168\u5C40\u4FE1\u4EFB\u8BC1\u4E66\u914D\u7F6E\u4E86 TLS\uFF0C\u5219\u53EF\u4EE5\u901A\u8FC7\u5C06\u53C2\u6570\u9644\u52A0\u5230\u5728 jdbc_url \u5C5E\u6027\u4E2D\u8BBE\u7F6E\u7684 JDBC \u8FDE\u63A5\u5B57\u7B26\u4E32\u6765\u542F\u7528\u96C6\u7FA4\u548C\u6570\u636E\u6E90\u4E4B\u95F4\u7684 TLS\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4F8B\u5982\uFF0C\u901A\u8FC7\u5C06 ssl=true \u53C2\u6570\u6DFB\u52A0\u5230 jdbc_url \u914D\u7F6E\u5C5E\u6027\u6765\u542F\u7528 TLS\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'"jdbc_url"="jdbc:clickhouse://example.net:8123/db?ssl=true"\n'})}),"\n",(0,i.jsxs)(e.p,{children:["\u6709\u5173 TLS \u914D\u7F6E\u9009\u9879\u7684\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605 ",(0,i.jsx)(e.a,{href:"https://clickhouse.com/docs/en/integrations/java#connect-to-clickhouse-with-ssl",children:"Clickhouse JDBC \u9A71\u52A8\u7A0B\u5E8F\u6587\u6863 SSL \u914D\u7F6E\u90E8\u5206"})]}),"\n",(0,i.jsx)(e.h2,{id:"\u5C42\u7EA7\u6620\u5C04",children:"\u5C42\u7EA7\u6620\u5C04"}),"\n",(0,i.jsx)(e.p,{children:"\u6620\u5C04 ClickHouse \u65F6\uFF0CDoris \u7684\u4E00\u4E2A Database \u5BF9\u5E94\u4E8E ClickHouse \u4E2D\u7684\u4E00\u4E2A Database\u3002\u800C Doris \u7684 Database \u4E0B\u7684 Table \u5219\u5BF9\u5E94\u4E8E ClickHouse \u4E2D\uFF0C\u8BE5 Database \u4E0B\u7684 Tables\u3002\u5373\u6620\u5C04\u5173\u7CFB\u5982\u4E0B\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{style:{textAlign:"center"},children:"Doris"}),(0,i.jsx)(e.th,{style:{textAlign:"center"},children:"ClickHouse"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Catalog"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"ClickHouse Server"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Database"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Database"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Table"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Table"})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"\u7C7B\u578B\u6620\u5C04",children:"\u7C7B\u578B\u6620\u5C04"}),"\n",(0,i.jsx)(e.h3,{id:"clickhouse-\u5230-doris-\u7C7B\u578B\u6620\u5C04",children:"ClickHouse \u5230 Doris \u7C7B\u578B\u6620\u5C04"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"ClickHouse Type"}),(0,i.jsx)(e.th,{children:"Doris Type"}),(0,i.jsx)(e.th,{children:"Comment"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Bool"}),(0,i.jsx)(e.td,{children:"BOOLEAN"}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"String"}),(0,i.jsx)(e.td,{children:"STRING"}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Date/Date32"}),(0,i.jsx)(e.td,{children:"DATE"}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"DateTime/DateTime64"}),(0,i.jsx)(e.td,{children:"DATETIME"}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Float32"}),(0,i.jsx)(e.td,{children:"FLOAT"}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Float64"}),(0,i.jsx)(e.td,{children:"DOUBLE"}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Int8"}),(0,i.jsx)(e.td,{children:"TINYINT"}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Int16/UInt8"}),(0,i.jsx)(e.td,{children:"SMALLINT"}),(0,i.jsx)(e.td,{children:"Doris \u6CA1\u6709 UNSIGNED \u6570\u636E\u7C7B\u578B\uFF0C\u6240\u4EE5\u6269\u5927\u4E00\u4E2A\u6570\u91CF\u7EA7"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Int32/UInt16"}),(0,i.jsx)(e.td,{children:"INT"}),(0,i.jsx)(e.td,{children:"Doris \u6CA1\u6709 UNSIGNED \u6570\u636E\u7C7B\u578B\uFF0C\u6240\u4EE5\u6269\u5927\u4E00\u4E2A\u6570\u91CF\u7EA7"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Int64/Uint32"}),(0,i.jsx)(e.td,{children:"BIGINT"}),(0,i.jsx)(e.td,{children:"Doris \u6CA1\u6709 UNSIGNED \u6570\u636E\u7C7B\u578B\uFF0C\u6240\u4EE5\u6269\u5927\u4E00\u4E2A\u6570\u91CF\u7EA7"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Int128/UInt64"}),(0,i.jsx)(e.td,{children:"LARGEINT"}),(0,i.jsx)(e.td,{children:"Doris \u6CA1\u6709 UNSIGNED \u6570\u636E\u7C7B\u578B\uFF0C\u6240\u4EE5\u6269\u5927\u4E00\u4E2A\u6570\u91CF\u7EA7"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Int256/UInt128/UInt256"}),(0,i.jsx)(e.td,{children:"STRING"}),(0,i.jsx)(e.td,{children:"Doris \u6CA1\u6709\u8FD9\u4E2A\u6570\u91CF\u7EA7\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u91C7\u7528 STRING \u5904\u7406"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"DECIMAL"}),(0,i.jsx)(e.td,{children:"DECIMALV3/STRING"}),(0,i.jsx)(e.td,{children:"\u5C06\u6839\u636E DECIMAL \u5B57\u6BB5\u7684\uFF08precision, scale) \u9009\u62E9\u7528\u4F55\u79CD\u7C7B\u578B"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Enum/IPv4/IPv6/UUID"}),(0,i.jsx)(e.td,{children:"STRING"}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Array"}),(0,i.jsx)(e.td,{children:"ARRAY"}),(0,i.jsx)(e.td,{children:"Array \u5185\u90E8\u7C7B\u578B\u9002\u914D\u903B\u8F91\u53C2\u8003\u4E0A\u8FF0\u7C7B\u578B"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Other"}),(0,i.jsx)(e.td,{children:"UNSUPPORTED"}),(0,i.jsx)(e.td,{})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"\u67E5\u8BE2\u4F18\u5316",children:"\u67E5\u8BE2\u4F18\u5316"}),"\n",(0,i.jsx)(e.h3,{id:"\u8C13\u8BCD\u4E0B\u63A8",children:"\u8C13\u8BCD\u4E0B\u63A8"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u5F53\u6267\u884C\u7C7B\u4F3C\u4E8E ",(0,i.jsx)(e.code,{children:"where dt = '2022-01-01'"})," \u8FD9\u6837\u7684\u67E5\u8BE2\u65F6\uFF0CDoris \u80FD\u591F\u5C06\u8FD9\u4E9B\u8FC7\u6EE4\u6761\u4EF6\u4E0B\u63A8\u5230\u5916\u90E8\u6570\u636E\u6E90\uFF0C\u4ECE\u800C\u76F4\u63A5\u5728\u6570\u636E\u6E90\u5C42\u9762\u6392\u9664\u4E0D\u7B26\u5408\u6761\u4EF6\u7684\u6570\u636E\uFF0C\u51CF\u5C11\u4E86\u4E0D\u5FC5\u8981\u7684\u6570\u636E\u83B7\u53D6\u548C\u4F20\u8F93\u3002\u8FD9\u5927\u5927\u63D0\u9AD8\u4E86\u67E5\u8BE2\u6027\u80FD\uFF0C\u540C\u65F6\u4E5F\u964D\u4F4E\u4E86\u5BF9\u5916\u90E8\u6570\u636E\u6E90\u7684\u8D1F\u8F7D\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u5F53\u53D8\u91CF ",(0,i.jsx)(e.code,{children:"enable_ext_func_pred_pushdown"})," \u8BBE\u7F6E\u4E3A true\uFF0C\u4F1A\u5C06 where \u4E4B\u540E\u7684\u51FD\u6570\u6761\u4EF6\u4E5F\u4E0B\u63A8\u5230\u5916\u90E8\u6570\u636E\u6E90\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u76EE\u524D\u652F\u6301\u4E0B\u63A8\u5230 ClickHouse \u7684\u51FD\u6570\u6709\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsx)(e.tr,{children:(0,i.jsx)(e.th,{style:{textAlign:"center"},children:"Function"})})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsx)(e.tr,{children:(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"FROM_UNIXTIME"})}),(0,i.jsx)(e.tr,{children:(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"UNIX_TIMESTAMP"})})]})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u884C\u6570\u9650\u5236",children:"\u884C\u6570\u9650\u5236"}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679C\u5728\u67E5\u8BE2\u4E2D\u5E26\u6709 limit \u5173\u952E\u5B57\uFF0CDoris \u4F1A\u5C06 limit \u4E0B\u63A8\u5230 ClickHouse\uFF0C\u4EE5\u51CF\u5C11\u6570\u636E\u4F20\u8F93\u91CF\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u8F6C\u4E49\u5B57\u7B26",children:"\u8F6C\u4E49\u5B57\u7B26"}),"\n",(0,i.jsx)(e.p,{children:'Doris \u4F1A\u5728\u4E0B\u53D1\u5230 ClickHouse \u7684\u67E5\u8BE2\u8BED\u53E5\u4E2D\uFF0C\u81EA\u52A8\u5728\u5B57\u6BB5\u540D\u4E0E\u8868\u540D\u4E0A\u52A0\u4E0A\u8F6C\u4E49\u7B26\uFF1A("")\uFF0C\u4EE5\u907F\u514D\u5B57\u6BB5\u540D\u4E0E\u8868\u540D\u4E0E ClickHouse \u5185\u90E8\u5173\u952E\u5B57\u51B2\u7A81\u3002'}),"\n",(0,i.jsx)(e.h2,{id:"\u5E38\u89C1\u95EE\u9898",children:"\u5E38\u89C1\u95EE\u9898"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u901A\u8FC7 ClickHouse Catalog \u8BFB\u53D6 Clickhouse \u6570\u636E\u51FA\u73B0",(0,i.jsx)(e.code,{children:"NoClassDefFoundError: net/jpountz/lz4/LZ4Factory"})," \u9519\u8BEF\u4FE1\u606F"]}),"\n",(0,i.jsxs)(e.p,{children:["\u53EF\u4EE5\u5148\u4E0B\u8F7D",(0,i.jsx)(e.a,{href:"https://repo1.maven.org/maven2/net/jpountz/lz4/lz4/1.3.0/lz4-1.3.0.jar",children:"lz4-1.3.0.jar"}),"\u5305\u5E76\u653E\u5230\u6BCF\u4E2A FE \u548C BE \u7684\u76EE\u5F55\u4E0B\u7684 ",(0,i.jsx)(e.code,{children:"custom_lib/"})," \u76EE\u5F55\u4E0B\uFF08\u5982\u4E0D\u5B58\u5728\uFF0C\u624B\u52A8\u521B\u5EFA\u5373\u53EF\uFF09\u3002"]}),"\n"]}),"\n"]})]})}function x(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return d},a:function(){return r}});var l=s(667294);let i={},t=l.createContext(i);function r(n){let e=l.useContext(t);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),l.createElement(t.Provider,{value:e},n.children)}}}]);