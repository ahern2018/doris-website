"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["937412"],{212612:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>i,default:()=>o,assets:()=>c,toc:()=>a,frontMatter:()=>l});var t=JSON.parse('{"id":"lakehouse/catalogs/jdbc-pg-catalog","title":"PostgreSQL JDBC Catalog","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/lakehouse/catalogs/jdbc-pg-catalog.md","sourceDirName":"lakehouse/catalogs","slug":"/lakehouse/catalogs/jdbc-pg-catalog","permalink":"/zh-CN/docs/dev/lakehouse/catalogs/jdbc-pg-catalog","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"PostgreSQL JDBC Catalog","language":"zh-CN"},"sidebar":"docs","previous":{"title":"MySQL JDBC Catalog","permalink":"/zh-CN/docs/dev/lakehouse/catalogs/jdbc-mysql-catalog"},"next":{"title":"Oracle JDBC Catalog","permalink":"/zh-CN/docs/dev/lakehouse/catalogs/jdbc-oracle-catalog"}}'),r=s("785893"),d=s("250065");let l={title:"PostgreSQL JDBC Catalog",language:"zh-CN"},i=void 0,c={},a=[{value:"\u4F7F\u7528\u987B\u77E5",id:"\u4F7F\u7528\u987B\u77E5",level:2},{value:"\u8FDE\u63A5 PostgreSQL",id:"\u8FDE\u63A5-postgresql",level:2},{value:"\u8FDE\u63A5\u5B89\u5168",id:"\u8FDE\u63A5\u5B89\u5168",level:3},{value:"\u5C42\u7EA7\u6620\u5C04",id:"\u5C42\u7EA7\u6620\u5C04",level:2},{value:"\u5217\u7C7B\u578B\u6620\u5C04",id:"\u5217\u7C7B\u578B\u6620\u5C04",level:2},{value:"\u9644\u5F55",id:"\u9644\u5F55",level:2},{value:"\u65F6\u533A\u95EE\u9898",id:"\u65F6\u533A\u95EE\u9898",level:3}];function h(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"Doris JDBC Catalog \u652F\u6301\u901A\u8FC7\u6807\u51C6 JDBC \u63A5\u53E3\u8FDE\u63A5 PostgreSQL \u6570\u636E\u5E93\u3002\u672C\u6587\u6863\u4ECB\u7ECD\u5982\u4F55\u914D\u7F6E PostgreSQL \u6570\u636E\u5E93\u8FDE\u63A5\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u5173\u4E8E JDBC Catalog \u6982\u8FF0\uFF0C\u8BF7\u53C2\u9605\uFF1A",(0,r.jsx)(e.a,{href:"/zh-CN/docs/dev/lakehouse/catalogs/jdbc-catalog-overview",children:" JDBC Catalog \u6982\u8FF0"})]}),"\n",(0,r.jsx)(e.h2,{id:"\u4F7F\u7528\u987B\u77E5",children:"\u4F7F\u7528\u987B\u77E5"}),"\n",(0,r.jsx)(e.p,{children:"\u8981\u8FDE\u63A5\u5230 PostgreSQL \u6570\u636E\u5E93\uFF0C\u60A8\u9700\u8981"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"PostgreSQL 11.x \u6216\u66F4\u9AD8\u7248\u672C"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["PostgreSQL \u6570\u636E\u5E93\u7684 JDBC \u9A71\u52A8\u7A0B\u5E8F\uFF0C\u60A8\u53EF\u4EE5\u4ECE ",(0,r.jsx)(e.a,{href:"https://mvnrepository.com/artifact/org.postgresql/postgresql",children:"Maven \u4ED3\u5E93"}),"\u4E0B\u8F7D\u6700\u65B0\u6216\u6307\u5B9A\u7248\u672C\u7684 PostgreSQL JDBC \u9A71\u52A8\u7A0B\u5E8F\u3002\u63A8\u8350\u4F7F\u7528 PostgreSQL JDBC Driver 42.5.x \u53CA\u4EE5\u4E0A\u7248\u672C\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Doris \u6BCF\u4E2A FE \u548C BE \u8282\u70B9\u548C PostgreSQL \u670D\u52A1\u5668\u4E4B\u95F4\u7684\u7F51\u7EDC\u8FDE\u63A5\uFF0C\u9ED8\u8BA4\u7AEF\u53E3\u4E3A 5432\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u8FDE\u63A5-postgresql",children:"\u8FDE\u63A5 PostgreSQL"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"CREATE CATALOG postgresql_catalog PROPERTIES (\n    'type' = 'jdbc',\n    'user' = 'username',\n    'password' = 'pwd',\n    'jdbc_url' = 'jdbc:postgresql://host:5432/postgres',\n    'driver_url' = 'postgresql-42.5.6.jar',\n    'driver_class' = 'org.postgresql.Driver'\n);\n"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"jdbc_url"})," \u5B9A\u4E49\u8981\u4F20\u9012\u7ED9 PostgreSQL JDBC \u9A71\u52A8\u7A0B\u5E8F\u7684\u8FDE\u63A5\u4FE1\u606F\u548C\u53C2\u6570\u3002\u652F\u6301\u7684 URL \u7684\u53C2\u6570\u53EF\u5728 ",(0,r.jsx)(e.a,{href:"https://jdbc.postgresql.org/documentation/use/#connecting-to-the-database",children:"PostgreSQL JDBC \u9A71\u52A8\u7A0B\u5E8F\u6587\u6863"})," \u4E2D\u627E\u5230\u3002"]}),"\n",(0,r.jsx)(e.h3,{id:"\u8FDE\u63A5\u5B89\u5168",children:"\u8FDE\u63A5\u5B89\u5168"}),"\n",(0,r.jsx)(e.p,{children:"\u5982\u679C\u60A8\u4F7F\u7528\u6570\u636E\u6E90\u4E0A\u5B89\u88C5\u7684\u5168\u5C40\u4FE1\u4EFB\u8BC1\u4E66\u914D\u7F6E\u4E86 TLS\uFF0C\u5219\u53EF\u4EE5\u901A\u8FC7\u5C06\u53C2\u6570\u9644\u52A0\u5230\u5728 jdbc_url \u5C5E\u6027\u4E2D\u8BBE\u7F6E\u7684 JDBC \u8FDE\u63A5\u5B57\u7B26\u4E32\u6765\u542F\u7528\u96C6\u7FA4\u548C\u6570\u636E\u6E90\u4E4B\u95F4\u7684 TLS\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u4F8B\u5982\uFF0C\u5BF9\u4E8E\u7248\u672C 42 \u7684 PostgreSQL JDBC \u9A71\u52A8\u7A0B\u5E8F\uFF0C\u901A\u8FC7\u5C06 ssl=true \u53C2\u6570\u6DFB\u52A0\u5230 jdbc_url \u914D\u7F6E\u5C5E\u6027\u4E2D\u542F\u7528 TLS\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'"jdbc_url"="jdbc:postgresql://example.net:5432/database?ssl=true"\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u6709\u5173 TLS \u914D\u7F6E\u9009\u9879\u7684\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605 ",(0,r.jsx)(e.a,{href:"https://jdbc.postgresql.org/documentation/use/#connecting-to-the-database",children:"PostgreSQL JDBC \u9A71\u52A8\u7A0B\u5E8F\u6587\u6863"}),"\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u5C42\u7EA7\u6620\u5C04",children:"\u5C42\u7EA7\u6620\u5C04"}),"\n",(0,r.jsxs)(e.p,{children:["\u6620\u5C04 PostgreSQL \u65F6\uFF0CDoris \u7684\u4E00\u4E2A Database \u5BF9\u5E94\u4E8E PostgreSQL \u4E2D\u6307\u5B9A database \u4E0B\u7684\u4E00\u4E2A Schema\uFF08\u5982\u793A\u4F8B\u4E2D ",(0,r.jsx)(e.code,{children:"jdbc_url"})," \u53C2\u6570\u4E2D ",(0,r.jsx)(e.code,{children:"postgres"})," \u4E0B\u7684 schemas\uFF09\u3002\u800C Doris \u7684 Database \u4E0B\u7684 Table \u5219\u5BF9\u5E94\u4E8E PostgreSQL \u4E2D\uFF0C\u8BE5 Schema \u4E0B\u7684 Tables\u3002\u5373\u6620\u5C04\u5173\u7CFB\u5982\u4E0B\uFF1A"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Doris"}),(0,r.jsx)(e.th,{children:"PostgreSQL"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Catalog"}),(0,r.jsx)(e.td,{children:"Database"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Database"}),(0,r.jsx)(e.td,{children:"Schema"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Table"}),(0,r.jsx)(e.td,{children:"Table"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u5217\u7C7B\u578B\u6620\u5C04",children:"\u5217\u7C7B\u578B\u6620\u5C04"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"PostgreSQL Type"}),(0,r.jsx)(e.th,{children:"Doris Type"}),(0,r.jsx)(e.th,{})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"boolean"}),(0,r.jsx)(e.td,{children:"boolean"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"smallint/int2"}),(0,r.jsx)(e.td,{children:"smallint"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"integer/int4"}),(0,r.jsx)(e.td,{children:"int"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"bigint/int8"}),(0,r.jsx)(e.td,{children:"bigint"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"decimal/numeric"}),(0,r.jsx)(e.td,{children:"decimal(P, S) / string"}),(0,r.jsx)(e.td,{children:"\u65E0\u7CBE\u5EA6 numeric \u4F1A\u88AB\u6620\u5C04\u4E3A string \u7C7B\u578B\uFF0C\u8FDB\u884C\u6570\u503C\u8BA1\u7B97\u65F6\u9700\u8981\u5148\u8F6C\u6362\u4E3A decimal \u7C7B\u578B\uFF0C\u4E14\u4E0D\u652F\u6301\u56DE\u5199\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"real/float4"}),(0,r.jsx)(e.td,{children:"float"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"double"}),(0,r.jsx)(e.td,{children:"double"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"smallserial"}),(0,r.jsx)(e.td,{children:"smallint"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"serial"}),(0,r.jsx)(e.td,{children:"int"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"bigserial"}),(0,r.jsx)(e.td,{children:"bigint"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"char(N)"}),(0,r.jsx)(e.td,{children:"char(N)"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"varchar/text"}),(0,r.jsx)(e.td,{children:"string"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"timestamp(S)/timestampz(S)"}),(0,r.jsx)(e.td,{children:"datetime(S)"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"date"}),(0,r.jsx)(e.td,{children:"date"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"json/jsonb"}),(0,r.jsx)(e.td,{children:"string"}),(0,r.jsx)(e.td,{children:"\u4E3A\u4E86\u66F4\u597D\u7684\u8BFB\u53D6\u4E0E\u8BA1\u7B97\u6027\u80FD\u5747\u8861\uFF0CDoris \u4F1A\u5C06 JSON \u7C7B\u578B\u6620\u5C04\u4E3A STRING \u7C7B\u578B\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"time"}),(0,r.jsx)(e.td,{children:"string"}),(0,r.jsx)(e.td,{children:"Doris \u4E0D\u652F\u6301 time \u7C7B\u578B\uFF0Ctime \u7C7B\u578B\u4F1A\u88AB\u6620\u5C04\u4E3A string\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"interval"}),(0,r.jsx)(e.td,{children:"string"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"point/line/lseg/box/path/polygon/circle"}),(0,r.jsx)(e.td,{children:"string"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"cidr/inet/macaddr"}),(0,r.jsx)(e.td,{children:"string"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"uuid"}),(0,r.jsx)(e.td,{children:"string"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"bit"}),(0,r.jsx)(e.td,{children:"boolean / string"}),(0,r.jsx)(e.td,{children:"Doris \u4E0D\u652F\u6301 bit \u7C7B\u578B\uFF0Cbit \u7C7B\u578B\u4F1A\u5728 bit(1) \u65F6\u88AB\u6620\u5C04\u4E3A boolean\uFF0C\u5176\u4ED6\u60C5\u51B5\u4E0B\u6620\u5C04\u4E3A string\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"other"}),(0,r.jsx)(e.td,{children:"UNSUPPORTED"}),(0,r.jsx)(e.td,{})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u9644\u5F55",children:"\u9644\u5F55"}),"\n",(0,r.jsx)(e.h3,{id:"\u65F6\u533A\u95EE\u9898",children:"\u65F6\u533A\u95EE\u9898"}),"\n",(0,r.jsx)(e.p,{children:"\u7531\u4E8E Doris \u4E0D\u652F\u6301\u5E26\u65F6\u533A\u7684\u65F6\u95F4\u6233\u7C7B\u578B\uFF0C\u6240\u4EE5\u5728\u8BFB\u53D6 PostgreSQL \u7684 timestampz \u7C7B\u578B\u65F6\uFF0CDoris \u4F1A\u5C06\u5176\u6620\u5C04\u4E3A DATETIME \u7C7B\u578B\uFF0C\u4E14\u4F1A\u5728\u8BFB\u53D6\u65F6\u8F6C\u6362\u6210\u672C\u5730\u65F6\u533A\u7684\u65F6\u95F4\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u4E14\u7531\u4E8E\u5728 JDBC \u7C7B\u578B Catalog \u8BFB\u53D6\u6570\u636E\u65F6\uFF0CBE \u7684 Java \u90E8\u5206\u4F7F\u7528 JVM \u65F6\u533A\u3002JVM \u65F6\u533A\u9ED8\u8BA4\u4E3A BE \u90E8\u7F72\u673A\u5668\u7684\u65F6\u533A\uFF0C\u8FD9\u4F1A\u5F71\u54CD JDBC \u8BFB\u53D6\u6570\u636E\u65F6\u7684\u65F6\u533A\u8F6C\u6362\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u4E3A\u4E86\u786E\u4FDD\u65F6\u533A\u4E00\u81F4\u6027\uFF0C\u5EFA\u8BAE\u5728 ",(0,r.jsx)(e.code,{children:"be.conf"})," \u7684 ",(0,r.jsx)(e.code,{children:"JAVA_OPTS"})," \u4E2D\u8BBE\u7F6E JVM \u65F6\u533A\u4E0E Doris session \u7684 ",(0,r.jsx)(e.code,{children:"time_zone"})," \u4E00\u81F4\u3002"]})]})}function o(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return l}});var t=s(667294);let r={},d=t.createContext(r);function l(n){let e=t.useContext(d);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),t.createElement(d.Provider,{value:e},n.children)}}}]);