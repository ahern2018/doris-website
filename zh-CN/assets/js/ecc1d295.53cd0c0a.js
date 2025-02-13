"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["496197"],{869132:function(n,e,l){l.r(e),l.d(e,{metadata:()=>s,contentTitle:()=>c,default:()=>o,assets:()=>d,toc:()=>r,frontMatter:()=>t});var s=JSON.parse('{"id":"sql-manual/sql-functions/table-functions/explode-map","title":"EXPLODE_MAP","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/table-functions/explode-map.md","sourceDirName":"sql-manual/sql-functions/table-functions","slug":"/sql-manual/sql-functions/table-functions/explode-map","permalink":"/zh-CN/docs/sql-manual/sql-functions/table-functions/explode-map","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"EXPLODE_MAP","language":"zh-CN"},"sidebar":"docs","previous":{"title":"EXPLODE","permalink":"/zh-CN/docs/sql-manual/sql-functions/table-functions/explode"},"next":{"title":"EXPLODE_JSON_OBJECT","permalink":"/zh-CN/docs/sql-manual/sql-functions/table-functions/explode-json-object"}}'),a=l("785893"),i=l("250065");let t={title:"EXPLODE_MAP",language:"zh-CN"},c=void 0,d={},r=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function h(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"explode_mpa"})," \u51FD\u6570\u63A5\u53D7\u4E00\u4E2A map (\u6620\u5C04\u7C7B\u578B)\uFF0C\u5C06 map\uFF08\u6620\u5C04\u7C7B\u578B\uFF09\u5C55\u5F00\u6210\u591A\u4E2A\u884C\uFF0C\u6BCF\u884C\u5305\u542B\u4E00\u4E2A\u952E\u503C\u5BF9\u3002\u901A\u5E38\u4E0E LATERAL VIEW \u914D\u5408\u4F7F\u7528\uFF0C\u53EF\u4EE5\u652F\u6301\u591A\u4E2A Lateral view\u3002\u4EC5\u652F\u6301\u65B0\u4F18\u5316\u5668\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"explode_map"})," \u548C ",(0,a.jsx)(e.code,{children:"explode_map_outer"})," \u533A\u522B\u4E3B\u8981\u5728\u4E8E\u7A7A\u503C\u5904\u7406\u3002"]}),"\n",(0,a.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"EXPLODE_MAP(map<k,v>)\nEXPLODE_MAP_OUTER(map<k,v>)\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"\u53C2\u6570"}),(0,a.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,a.jsx)(e.tbody,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"map<k,v>"})}),(0,a.jsx)(e.td,{children:"map\u7C7B\u578B"})]})})]}),"\n",(0,a.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,a.jsxs)(e.p,{children:["\u5F53 map \u4E0D\u4E3A\u7A7A\u6216 NULL \u65F6\uFF0C",(0,a.jsx)(e.code,{children:"explode_map"})," \u548C ",(0,a.jsx)(e.code,{children:"explode_map_outer"})," \u7684\u8FD4\u56DE\u503C\u76F8\u540C\u3002"]}),"\n",(0,a.jsx)(e.p,{children:"\u5F53\u6570\u636E\u4E3A\u7A7A\u6216 NULL \u65F6\uFF1A"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"explode_map"})," \u53EA\u5904\u7406\u5305\u542B\u5143\u7D20\u7684 map\u3002\u5982\u679C map \u662F\u7A7A\u7684\u6216\u4E3A NULL\uFF0Cexplode_map \u4E0D\u4F1A\u8FD4\u56DE\u4EFB\u4F55\u884C\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"explode_map_outer"})," \u5982\u679C map \u662F\u7A7A\u7684\u6216\u4E3A NULL\uFF0C\u4F1A\u4FDD\u7559\u7A7A map \u6216 NULL \u7684\u8BB0\u5F55\uFF0C\u8FD4\u56DE\u7684\u884C\u5C06\u5305\u542B NULL \u503C\u3002"]}),"\n",(0,a.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"SET enable_nereids_planner=true\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"SET enable_fallback_to_original_planner=false\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE IF NOT EXISTS `sdu`(\n                   `id` INT NULL,\n                   `name` TEXT NULL,\n                   `score` MAP<TEXT,INT> NULL\n                 ) ENGINE=OLAP\n                 DUPLICATE KEY(`id`)\n                 COMMENT \'OLAP\'\n                 DISTRIBUTED BY HASH(`id`) BUCKETS 1\n                 PROPERTIES ("replication_allocation" = "tag.location.default: 1");\nQuery OK, 0 rows affected (0.15 sec)\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'insert into sdu values (0, "zhangsan", {"Chinese":"80","Math":"60","English":"90"}), (1, "lisi", {"null":null}), (2, "wangwu", {"Chinese":"88","Math":"90","English":"96"}), (3, "lisi2", {null:null}), (4, "amory", NULL);\nQuery OK, 5 rows affected (0.23 sec)\n{\'label\':\'label_9b35d9d9d59147f5_bffb974881ed2133\', \'status\':\'VISIBLE\', \'txnId\':\'4005\'}\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"select * from sdu order by id;\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:'+------+----------+-----------------------------------------+\n| id   | name     | score                                   |\n+------+----------+-----------------------------------------+\n|    0 | zhangsan | {"Chinese":80, "Math":60, "English":90} |\n|    1 | lisi     | {"null":null}                           |\n|    2 | wangwu   | {"Chinese":88, "Math":90, "English":96} |\n|    3 | lisi2    | {null:null}                             |\n|    4 | amory    | NULL                                    |\n+------+----------+-----------------------------------------+\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"select name, k,v from sdu lateral view explode_map(score) tmp as k,v;\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:"+----------+---------+------+\n| name     | k       | v    |\n+----------+---------+------+\n| zhangsan | Chinese |   80 |\n| zhangsan | Math    |   60 |\n| zhangsan | English |   90 |\n| lisi     | null    | NULL |\n| wangwu   | Chinese |   88 |\n| wangwu   | Math    |   90 |\n| wangwu   | English |   96 |\n| lisi2    | NULL    | NULL |\n+----------+---------+------+\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"select name, k,v from sdu lateral view explode_map_outer(score) tmp as k,v;\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:"+----------+---------+------+\n| name     | k       | v    |\n+----------+---------+------+\n| zhangsan | Chinese |   80 |\n| zhangsan | Math    |   60 |\n| zhangsan | English |   90 |\n| lisi     | null    | NULL |\n| wangwu   | Chinese |   88 |\n| wangwu   | Math    |   90 |\n| wangwu   | English |   96 |\n| lisi2    | NULL    | NULL |\n| amory    | NULL    | NULL |\n+----------+---------+------+\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"select name, k,v,k1,v1 from sdu lateral view explode_map_outer(score) tmp as k,v lateral view explode_map(score) tmp2 as k1,v1;\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:"+----------+---------+------+---------+------+\n| name     | k       | v    | k1      | v1   |\n+----------+---------+------+---------+------+\n| zhangsan | Chinese |   80 | Chinese |   80 |\n| zhangsan | Chinese |   80 | Math    |   60 |\n| zhangsan | Chinese |   80 | English |   90 |\n| zhangsan | Math    |   60 | Chinese |   80 |\n| zhangsan | Math    |   60 | Math    |   60 |\n| zhangsan | Math    |   60 | English |   90 |\n| zhangsan | English |   90 | Chinese |   80 |\n| zhangsan | English |   90 | Math    |   60 |\n| zhangsan | English |   90 | English |   90 |\n| lisi     | null    | NULL | null    | NULL |\n| wangwu   | Chinese |   88 | Chinese |   88 |\n| wangwu   | Chinese |   88 | Math    |   90 |\n| wangwu   | Chinese |   88 | English |   96 |\n| wangwu   | Math    |   90 | Chinese |   88 |\n| wangwu   | Math    |   90 | Math    |   90 |\n| wangwu   | Math    |   90 | English |   96 |\n| wangwu   | English |   96 | Chinese |   88 |\n| wangwu   | English |   96 | Math    |   90 |\n| wangwu   | English |   96 | English |   96 |\n| lisi2    | NULL    | NULL | NULL    | NULL |\n+----------+---------+------+---------+------+\n"})})]})}function o(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(h,{...n})}):h(n)}},250065:function(n,e,l){l.d(e,{Z:function(){return c},a:function(){return t}});var s=l(667294);let a={},i=s.createContext(a);function t(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:t(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);