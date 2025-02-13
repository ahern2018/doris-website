"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["368320"],{363594:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-data-types/semi-structured/ARRAY","title":"ARRAY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-data-types/semi-structured/ARRAY.md","sourceDirName":"sql-manual/sql-data-types/semi-structured","slug":"/sql-manual/sql-data-types/semi-structured/ARRAY","permalink":"/zh-CN/docs/3.0/sql-manual/sql-data-types/semi-structured/ARRAY","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ARRAY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"STRING","permalink":"/zh-CN/docs/3.0/sql-manual/sql-data-types/string-type/STRING"},"next":{"title":"MAP","permalink":"/zh-CN/docs/3.0/sql-manual/sql-data-types/semi-structured/MAP"}}'),r=t("785893"),l=t("250065");let a={title:"ARRAY",language:"zh-CN"},i=void 0,c={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"ARRAY<T>"})}),"\n",(0,r.jsx)(n.p,{children:"\u7531 T \u7C7B\u578B\u5143\u7D20\u7EC4\u6210\u7684\u6570\u7EC4\uFF0C\u4E0D\u80FD\u4F5C\u4E3A key \u5217\u4F7F\u7528\u3002\u76EE\u524D\u652F\u6301\u5728 Duplicate \u548C Unique \u6A21\u578B\u7684\u8868\u4E2D\u4F7F\u7528\u3002"}),"\n",(0,r.jsx)(n.p,{children:"2.0 \u7248\u672C\u4E4B\u540E\u652F\u6301\u5728 Unique \u6A21\u578B\u7684\u8868\u4E2D\u975E key \u5217\u4F7F\u7528\u3002"}),"\n",(0,r.jsx)(n.p,{children:"T \u652F\u6301\u7684\u7C7B\u578B\u6709\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, DECIMAL, DATE,\nDATEV2, DATETIME, DATETIMEV2, CHAR, VARCHAR, STRING\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,r.jsx)(n.p,{children:"\u5EFA\u8868\u793A\u4F8B\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'mysql> CREATE TABLE `array_test` (\n  `id` int(11) NULL COMMENT "",\n  `c_array` ARRAY<int(11)> NULL COMMENT ""\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`id`) BUCKETS 1\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1",\n"in_memory" = "false",\n"storage_format" = "V2"\n);\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u63D2\u5165\u6570\u636E\u793A\u4F8B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"mysql> INSERT INTO `array_test` VALUES (1, [1,2,3,4,5]);\nmysql> INSERT INTO `array_test` VALUES (2, [6,7,8]), (3, []), (4, null);\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u67E5\u8BE2\u6570\u636E\u793A\u4F8B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"mysql> SELECT * FROM `array_test`;\n+------+-----------------+\n| id   | c_array         |\n+------+-----------------+\n|    1 | [1, 2, 3, 4, 5] |\n|    2 | [6, 7, 8]       |\n|    3 | []              |\n|    4 | NULL            |\n+------+-----------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return a}});var s=t(667294);let r={},l=s.createContext(r);function a(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);