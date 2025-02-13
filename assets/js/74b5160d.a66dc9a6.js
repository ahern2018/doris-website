"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["846552"],{243583:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>o,default:()=>d,assets:()=>r,toc:()=>u,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/table-functions/posexplode-outer","title":"posexplode_outer","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/table-functions/posexplode-outer.md","sourceDirName":"sql-manual/sql-functions/table-functions","slug":"/sql-manual/sql-functions/table-functions/posexplode-outer","permalink":"/docs/dev/sql-manual/sql-functions/table-functions/posexplode-outer","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"posexplode_outer","language":"en"}}'),a=t("785893"),l=t("250065");let i={title:"posexplode_outer",language:"en"},o=void 0,r={},u=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}];function c(n){let e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(e.p,{children:"The table function is used in conjunction with Lateral View and can support multiple Lateral Views. It only supports the new optimizer."}),"\n",(0,a.jsx)(e.p,{children:"It expands an array column into multiple rows and adds a column indicating the position, returning a struct type. When the array is NULL or empty, posexplode_outer returns NULL. Both posexplode and posexplode_outer will return NULL elements within the array."}),"\n",(0,a.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"posexplode(array)\nposexplode_outer(array)\n"})}),"\n",(0,a.jsx)(e.h3,{id:"example",children:"Example"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'    CREATE TABLE IF NOT EXISTS `table_test`(\n                `id` INT NULL,\n                `name` TEXT NULL,\n                `score` array<string> NULL\n              ) ENGINE=OLAP\n        DUPLICATE KEY(`id`)\n        COMMENT \'OLAP\'\n        DISTRIBUTED BY HASH(`id`) BUCKETS 1\n        PROPERTIES ("replication_allocation" = "tag.location.default: 1");\n\nmysql> insert into table_test values (0, "zhangsan", ["Chinese","Math","English"]),(1, "lisi", ["null"]),(2, "wangwu", ["88a","90b","96c"]),(3, "lisi2", [null]),(4, "amory", NULL);\n\n\nmysql [test_query_qa]>select * from table_test order by id;\n+------+----------+--------------------------------+\n| id   | name     | score                          |\n+------+----------+--------------------------------+\n|    0 | zhangsan | ["Chinese", "Math", "English"] |\n|    1 | lisi     | ["null"]                       |\n|    2 | wangwu   | ["88a", "90b", "96c"]          |\n|    3 | lisi2    | [null]                         |\n|    4 | amory    | NULL                           |\n+------+----------+--------------------------------+\n\nmysql [test_query_qa]>select id,name,score, k,v from table_test lateral view posexplode(score) tmp as k,v order by id;\n+------+----------+--------------------------------+------+---------+\n| id   | name     | score                          | k    | v       |\n+------+----------+--------------------------------+------+---------+\n|    0 | zhangsan | ["Chinese", "Math", "English"] |    0 | Chinese |\n|    0 | zhangsan | ["Chinese", "Math", "English"] |    1 | Math    |\n|    0 | zhangsan | ["Chinese", "Math", "English"] |    2 | English |\n|    1 | lisi     | ["null"]                       |    0 | null    |\n|    2 | wangwu   | ["88a", "90b", "96c"]          |    0 | 88a     |\n|    2 | wangwu   | ["88a", "90b", "96c"]          |    1 | 90b     |\n|    2 | wangwu   | ["88a", "90b", "96c"]          |    2 | 96c     |\n|    3 | lisi2    | [null]                         |    0 | NULL    |\n+------+----------+--------------------------------+------+---------+\n\nmysql [test_query_qa]>select id,name,score, k,v from table_test lateral view posexplode_outer(score) tmp as k,v order by id;\n+------+----------+--------------------------------+------+---------+\n| id   | name     | score                          | k    | v       |\n+------+----------+--------------------------------+------+---------+\n|    0 | zhangsan | ["Chinese", "Math", "English"] |    0 | Chinese |\n|    0 | zhangsan | ["Chinese", "Math", "English"] |    1 | Math    |\n|    0 | zhangsan | ["Chinese", "Math", "English"] |    2 | English |\n|    1 | lisi     | ["null"]                       |    0 | null    |\n|    2 | wangwu   | ["88a", "90b", "96c"]          |    0 | 88a     |\n|    2 | wangwu   | ["88a", "90b", "96c"]          |    1 | 90b     |\n|    2 | wangwu   | ["88a", "90b", "96c"]          |    2 | 96c     |\n|    3 | lisi2    | [null]                         |    0 | NULL    |\n|    4 | amory    | NULL                           | NULL | NULL    |\n+------+----------+--------------------------------+------+---------+\n'})}),"\n",(0,a.jsx)(e.h3,{id:"keywords",children:"Keywords"}),"\n",(0,a.jsx)(e.p,{children:"POSEXPLODE,POSEXPLODE_OUTER"})]})}function d(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(c,{...n})}):c(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return i}});var s=t(667294);let a={},l=s.createContext(a);function i(n){let e=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:i(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);