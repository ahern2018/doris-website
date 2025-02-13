"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["943613"],{942417:function(n,e,l){l.r(e),l.d(e,{metadata:()=>t,contentTitle:()=>i,default:()=>d,assets:()=>o,toc:()=>r,frontMatter:()=>c});var t=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/count-by-enum","title":"COUNT_BY_ENUM","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/aggregate-functions/count-by-enum.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/count-by-enum","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/aggregate-functions/count-by-enum","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"COUNT_BY_ENUM","language":"zh-CN"},"sidebar":"docs","previous":{"title":"GROUPING_ID","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/aggregate-functions/grouping-id"},"next":{"title":"HISTOGRAM","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/aggregate-functions/histogram"}}'),u=l("785893"),s=l("250065");let c={title:"COUNT_BY_ENUM",language:"zh-CN"},i=void 0,o={},r=[{value:"COUNT_BY_ENUM",id:"count_by_enum",level:2},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"keywords",id:"keywords",level:3}];function a(n){let e={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(e.h2,{id:"count_by_enum",children:"COUNT_BY_ENUM"}),"\n",(0,u.jsx)(e.p,{children:"COUNT_BY_ENUM"}),"\n",(0,u.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,u.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,u.jsx)(e.p,{children:(0,u.jsx)(e.code,{children:"count_by_enum(expr1, expr2, ... , exprN);"})}),"\n",(0,u.jsx)(e.p,{children:"\u5C06\u5217\u4E2D\u6570\u636E\u770B\u4F5C\u679A\u4E3E\u503C\uFF0C\u7EDF\u8BA1\u6BCF\u4E2A\u679A\u4E3E\u503C\u7684\u4E2A\u6570\u3002\u8FD4\u56DE\u5404\u4E2A\u5217\u679A\u4E3E\u503C\u7684\u4E2A\u6570\uFF0C\u4EE5\u53CA\u975E null \u503C\u7684\u4E2A\u6570\u4E0E null \u503C\u7684\u4E2A\u6570\u3002"}),"\n",(0,u.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n",(0,u.jsxs)(e.p,{children:[(0,u.jsx)(e.code,{children:"expr1"})," \u2014 \u81F3\u5C11\u586B\u5199\u4E00\u4E2A\u8F93\u5165\u3002\u503C\u4E3A\u5B57\u7B26\u4E32\uFF08STRING\uFF09\u7C7B\u578B\u7684\u5217\u3002"]}),"\n",(0,u.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,u.jsx)(e.p,{children:"\u8FD4\u56DE\u4E00\u4E2A JSONArray \u5B57\u7B26\u4E32\u3002"}),"\n",(0,u.jsx)(e.p,{children:"\u4F8B\u5982\uFF1A"}),"\n",(0,u.jsx)(e.pre,{children:(0,u.jsx)(e.code,{className:"language-json",children:'[{\n	"cbe": {\n		"F": 100,\n		"M": 99\n	},\n	"notnull": 199,\n	"null": 1,\n	"all": 200\n}, {\n	"cbe": {\n		"20": 10,\n		"30": 5,\n		"35": 1\n	},\n	"notnull": 16,\n	"null": 184,\n	"all": 200\n}, {\n	"cbe": {\n		"\u5317\u4EAC": 10,\n		"\u4E0A\u6D77": 9,\n		"\u5E7F\u5DDE": 20,\n		"\u6DF1\u5733": 30\n	},\n	"notnull": 69,\n	"null": 131,\n	"all": 200\n}]\n'})}),"\n",(0,u.jsx)(e.p,{children:"\u8BF4\u660E\uFF1A\u8FD4\u56DE\u503C\u4E3A\u4E00\u4E2A JSON array \u5B57\u7B26\u4E32\uFF0C\u5185\u90E8\u5BF9\u8C61\u7684\u987A\u5E8F\u662F\u8F93\u5165\u53C2\u6570\u7684\u987A\u5E8F\u3002"}),"\n",(0,u.jsxs)(e.ul,{children:["\n",(0,u.jsx)(e.li,{children:"cbe\uFF1A\u6839\u636E\u679A\u4E3E\u503C\u7EDF\u8BA1\u975E null \u503C\u7684\u7EDF\u8BA1\u7ED3\u679C"}),"\n",(0,u.jsx)(e.li,{children:"notnull\uFF1A\u975E null \u7684\u4E2A\u6570"}),"\n",(0,u.jsx)(e.li,{children:"null\uFF1Anull \u503C\u4E2A\u6570"}),"\n",(0,u.jsx)(e.li,{children:"all\uFF1A\u603B\u6570\uFF0C\u5305\u62EC null \u503C\u4E0E\u975E null \u503C"}),"\n"]}),"\n",(0,u.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,u.jsx)(e.pre,{children:(0,u.jsx)(e.code,{className:"language-sql",children:'DROP TABLE IF EXISTS count_by_enum_test;\n\nCREATE TABLE count_by_enum_test(\n                `id` varchar(1024) NULL,\n                `f1` text REPLACE_IF_NOT_NULL NULL,\n                `f2` text REPLACE_IF_NOT_NULL NULL,\n                `f3` text REPLACE_IF_NOT_NULL NULL\n                )\nAGGREGATE KEY(`id`)\nDISTRIBUTED BY HASH(id) BUCKETS 3 \nPROPERTIES ( \n    "replication_num" = "1"\n); \n\nINSERT into count_by_enum_test (id, f1, f2, f3) values\n                                        (1, "F", "10", "\u5317\u4EAC"),\n                                        (2, "F", "20", "\u5317\u4EAC"),\n                                        (3, "M", NULL, "\u4E0A\u6D77"),\n                                        (4, "M", NULL, "\u4E0A\u6D77"),\n                                        (5, "M", NULL, "\u5E7F\u5DDE");\n\nSELECT * from count_by_enum_test;\n\n+------+------+------+--------+\n| id   | f1   | f2   | f3     |\n+------+------+------+--------+\n| 2    | F    | 20   | \u5317\u4EAC   |\n| 3    | M    | NULL | \u4E0A\u6D77   |\n| 4    | M    | NULL | \u4E0A\u6D77   |\n| 5    | M    | NULL | \u5E7F\u5DDE   |\n| 1    | F    | 10   | \u5317\u4EAC   |\n+------+------+------+--------+\n\nselect count_by_enum(f1) from count_by_enum_test;\n\n+------------------------------------------------------+\n| count_by_enum(`f1`)                                  |\n+------------------------------------------------------+\n| [{"cbe":{"M":3,"F":2},"notnull":5,"null":0,"all":5}] |\n+------------------------------------------------------+\n\nselect count_by_enum(f2) from count_by_enum_test;\n\n+--------------------------------------------------------+\n| count_by_enum(`f2`)                                    |\n+--------------------------------------------------------+\n| [{"cbe":{"10":1,"20":1},"notnull":2,"null":3,"all":5}] |\n+--------------------------------------------------------+\n\nselect count_by_enum(f1,f2,f3) from count_by_enum_test;\n\n+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| count_by_enum(`f1`, `f2`, `f3`)                                                                                                                                                   |\n+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| [{"cbe":{"M":3,"F":2},"notnull":5,"null":0,"all":5},{"cbe":{"20":1,"10":1},"notnull":2,"null":3,"all":5},{"cbe":{"\u5E7F\u5DDE":1,"\u4E0A\u6D77":2,"\u5317\u4EAC":2},"notnull":5,"null":0,"all":5}]       |\n+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n\n'})}),"\n",(0,u.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,u.jsx)(e.p,{children:"COUNT_BY_ENUM"})]})}function d(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,u.jsx)(e,{...n,children:(0,u.jsx)(a,{...n})}):a(n)}},250065:function(n,e,l){l.d(e,{Z:function(){return i},a:function(){return c}});var t=l(667294);let u={},s=t.createContext(u);function c(n){let e=t.useContext(s);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(u):n.components||u:c(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);