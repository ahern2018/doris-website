"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["160454"],{584036:function(n,e,t){t.r(e),t.d(e,{metadata:()=>l,contentTitle:()=>a,default:()=>h,assets:()=>s,toc:()=>c,frontMatter:()=>i});var l=JSON.parse('{"id":"lakehouse/datalake-analytics/deltalake","title":"Delta Lake Catalog","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/lakehouse/datalake-analytics/deltalake.md","sourceDirName":"lakehouse/datalake-analytics","slug":"/lakehouse/datalake-analytics/deltalake","permalink":"/zh-CN/docs/3.0/lakehouse/datalake-analytics/deltalake","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Delta Lake Catalog","language":"zh-CN"},"sidebar":"docs","previous":{"title":"BigQuery Catalog","permalink":"/zh-CN/docs/3.0/lakehouse/datalake-analytics/bigquery"},"next":{"title":"Kudu Catalog","permalink":"/zh-CN/docs/3.0/lakehouse/datalake-analytics/kudu"}}'),r=t("785893"),d=t("250065");let i={title:"Delta Lake Catalog",language:"zh-CN"},a=void 0,s={},c=[{value:"\u4F7F\u7528\u987B\u77E5",id:"\u4F7F\u7528\u987B\u77E5",level:2},{value:"\u7F16\u8BD1 Delta Lake Connector \u63D2\u4EF6",id:"\u7F16\u8BD1-delta-lake-connector-\u63D2\u4EF6",level:2},{value:"\u90E8\u7F72 Delta Lake Connector",id:"\u90E8\u7F72-delta-lake-connector",level:2},{value:"\u521B\u5EFA Delta Lake Catalog",id:"\u521B\u5EFA-delta-lake-catalog",level:2},{value:"\u5217\u7C7B\u578B\u6620\u5C04",id:"\u5217\u7C7B\u578B\u6620\u5C04",level:2}];function o(n){let e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:["Delta Lake Catalog \u901A\u8FC7 ",(0,r.jsx)(e.a,{href:"https://doris.apache.org/zh-CN/community/how-to-contribute/trino-connector-developer-guide/",children:"Trino Connector"})," \u517C\u5BB9\u6846\u67B6\uFF0C\u4F7F\u7528 Delta Lake Connector \u6765\u8BBF\u95EE Delta Lake \u8868\u3002"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\u8BE5\u529F\u80FD\u81EA Doris 3.0.1 \u7248\u672C\u5F00\u59CB\u652F\u6301\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.admonition,{title:"\u5907\u6CE8",type:"tip",children:(0,r.jsx)(e.p,{children:"\u8FD9\u662F\u4E00\u4E2A\u5B9E\u9A8C\u529F\u80FD\u3002"})}),"\n",(0,r.jsx)(e.h2,{id:"\u4F7F\u7528\u987B\u77E5",children:"\u4F7F\u7528\u987B\u77E5"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u5728\u4F7F\u7528 Trino Catalog \u8BBF\u95EE Delta Lake \u8868\u4E4B\u524D\uFF0C\u5FC5\u987B\u5148\u7F16\u8BD1 Trino \u7684 Delta Lake \u63D2\u4EF6\uFF0C\u5E76\u5C06\u5176\u653E\u5728\u6307\u5B9A\u76EE\u5F55\u4E0B\u3002\u5177\u4F53\u64CD\u4F5C\u6B65\u9AA4\u53C2\u8003\u4E0B\u6587\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u5F53\u524D Doris \u9002\u914D Trino 435 \u7248\u672C\u7684\u63D2\u4EF6\uFF0C\u5982\u679C\u4F7F\u7528\u4F4E\u4E8E\u6216\u9AD8\u4E8E 435 \u7248\u672C\u7684 Trino \u63D2\u4EF6\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u517C\u5BB9\u6027\u95EE\u9898\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u5F53\u524D\u4E0D\u652F\u6301 Delta Lake \u7684 Time Travel \u529F\u80FD\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u5F53\u524D\u4E0D\u652F\u6301\u67E5\u8BE2 Delta Lake \u7684 history \u4FE1\u606F\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u7F16\u8BD1-delta-lake-connector-\u63D2\u4EF6",children:"\u7F16\u8BD1 Delta Lake Connector \u63D2\u4EF6"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\u9700\u8981 JDK 17 \u7248\u672C\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"$ git clone https://github.com/apache/Doris-thirdparty.git\n$ cd Doris-thirdparty\n$ git checkout trino-435\n$ cd plugin/trino-delta-lake\n$ mvn clean install -DskipTest\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u5B8C\u6210\u7F16\u8BD1\u540E\uFF0C\u4F1A\u5728 ",(0,r.jsx)(e.code,{children:"trino/plugin/trino-delta-lake/target/"})," \u4E0B\u5F97\u5230 ",(0,r.jsx)(e.code,{children:"trino-delta-lake-435"})," \u76EE\u5F55\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4E0B\u8F7D\u9884\u7F16\u8BD1\u7684 ",(0,r.jsx)(e.a,{href:"https://github.com/apache/Doris-thirdparty/releases/download/trino-435-20240724/trino-delta-lake-435-20240724.tar.gz",children:"trino-delta-lake-435-20240724.tar.gz"})," \u5E76\u89E3\u538B\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u90E8\u7F72-delta-lake-connector",children:"\u90E8\u7F72 Delta Lake Connector"}),"\n",(0,r.jsxs)(e.p,{children:["\u5C06 ",(0,r.jsx)(e.code,{children:"trino-delta-lake-435/"})," \u76EE\u5F55\u653E\u5230\u6240\u6709 FE \u548C BE \u90E8\u7F72\u8DEF\u5F84\u7684 ",(0,r.jsx)(e.code,{children:"connectors/"})," \u76EE\u5F55\u4E0B\u3002\uFF08\u5982\u679C\u6CA1\u6709\uFF0C\u53EF\u4EE5\u624B\u52A8\u521B\u5EFA\uFF09\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"\u251C\u2500\u2500 bin\n\u251C\u2500\u2500 conf\n\u251C\u2500\u2500 connectors\n\u2502   \u251C\u2500\u2500 trino-delta-lake-435\n...\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u90E8\u7F72\u5B8C\u6210\u540E\uFF0C\u5EFA\u8BAE\u91CD\u542F FE\u3001BE \u8282\u70B9\u4EE5\u786E\u4FDD Connector \u53EF\u4EE5\u88AB\u6B63\u786E\u52A0\u8F7D\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u521B\u5EFA-delta-lake-catalog",children:"\u521B\u5EFA Delta Lake Catalog"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'create catalog delta_lake_catalog properties ( \n    "type"="trino-connector", \n    "trino.connector.name"="delta_lake",\n    "trino.hive.metastore"="thrift",\n    "trino.hive.metastore.uri"= "thrift://ip:portrait ",\n    "trino.hive.config.resources"="/path/to/core-site.xml,/path/to/hdfs-site.xml"\n);\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u5176\u4E2D\uFF1A\u4EE5 ",(0,r.jsx)(e.code,{children:"trino."})," \u4E3A\u524D\u7F00\u7684\u5C5E\u6027\u90FD\u662F trino \u539F\u751F\u7684\u5C5E\u6027\uFF0C\u66F4\u591A\u6709\u5173 Delta Lake \u7684\u5C5E\u6027\u53EF\u4EE5\u53C2\u8003 ",(0,r.jsx)(e.a,{href:"https://trino.io/docs/current/connector/delta-lake.html",children:"Trino \u6587\u6863"}),"\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u5217\u7C7B\u578B\u6620\u5C04",children:"\u5217\u7C7B\u578B\u6620\u5C04"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Delta Lake"}),(0,r.jsx)(e.th,{children:"Trino"}),(0,r.jsx)(e.th,{children:"Doris"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"BOOLEAN"}),(0,r.jsx)(e.td,{children:"BOOLEAN"}),(0,r.jsx)(e.td,{children:"BOOLEAN"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"INTEGER"}),(0,r.jsx)(e.td,{children:"INTEGER"}),(0,r.jsx)(e.td,{children:"INT"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"BYTE"}),(0,r.jsx)(e.td,{children:"TINYINT"}),(0,r.jsx)(e.td,{children:"TINYINT"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"SHORT"}),(0,r.jsx)(e.td,{children:"SMALLINT"}),(0,r.jsx)(e.td,{children:"SMALLINT"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"LONG"}),(0,r.jsx)(e.td,{children:"BIGINT"}),(0,r.jsx)(e.td,{children:"BIGINT"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"FLOAT"}),(0,r.jsx)(e.td,{children:"REAL"}),(0,r.jsx)(e.td,{children:"FLOAT"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"DOUBLE"}),(0,r.jsx)(e.td,{children:"DOUBLE"}),(0,r.jsx)(e.td,{children:"DOUBLE"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"DECIMAL(p,s)"}),(0,r.jsx)(e.td,{children:"DECIMAL(p,s)"}),(0,r.jsx)(e.td,{children:"DECIMAL(p,s)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"STRING"}),(0,r.jsx)(e.td,{children:"VARCHAR"}),(0,r.jsx)(e.td,{children:"STRING"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"BINARY"}),(0,r.jsx)(e.td,{children:"VARBINARY"}),(0,r.jsx)(e.td,{children:"STRING"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"DATE"}),(0,r.jsx)(e.td,{children:"DATE"}),(0,r.jsx)(e.td,{children:"DATE"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"TIMESTAMPNTZ (TIMESTAMP_NTZ)"}),(0,r.jsx)(e.td,{children:"TIMESTAMP(6)"}),(0,r.jsx)(e.td,{children:"DATETIME"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"TIMESTAMP"}),(0,r.jsx)(e.td,{children:"TIMESTAMP(3) WITH TIME ZONE"}),(0,r.jsx)(e.td,{children:"DATETIME"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"ARRAY"}),(0,r.jsx)(e.td,{children:"ARRAY"}),(0,r.jsx)(e.td,{children:"ARRAY"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"MAP"}),(0,r.jsx)(e.td,{children:"MAP"}),(0,r.jsx)(e.td,{children:"MAP"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"STRUCT"}),(0,r.jsx)(e.td,{children:"ROW"}),(0,r.jsx)(e.td,{children:"STRUCT"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return i}});var l=t(667294);let r={},d=l.createContext(r);function i(n){let e=l.useContext(d);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),l.createElement(d.Provider,{value:e},n.children)}}}]);