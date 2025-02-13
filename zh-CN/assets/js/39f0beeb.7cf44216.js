"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["910578"],{227576:function(n,e,s){s.r(e),s.d(e,{metadata:()=>l,contentTitle:()=>i,default:()=>u,assets:()=>d,toc:()=>c,frontMatter:()=>t});var l=JSON.parse('{"id":"sql-manual/sql-functions/table-functions/explode-json-array-string","title":"EXPLODE_JSON_ARRAY_STRING","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/table-functions/explode-json-array-string.md","sourceDirName":"sql-manual/sql-functions/table-functions","slug":"/sql-manual/sql-functions/table-functions/explode-json-array-string","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/explode-json-array-string","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"EXPLODE_JSON_ARRAY_STRING","language":"zh-CN"},"sidebar":"docs","previous":{"title":"EXPLODE_JSON_ARRAY_DOUBLE","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/explode-json-array-double"},"next":{"title":"EXPLODE_JSON_ARRAY_JSON","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/explode-json-array-json"}}'),a=s("785893"),r=s("250065");let t={title:"EXPLODE_JSON_ARRAY_STRING",language:"zh-CN"},i=void 0,d={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"explode_json_array_string"})," \u8868\u51FD\u6570\uFF0C\u63A5\u53D7\u4E00\u4E2A JSON \u6570\u7EC4\uFF0C\u5176\u4E2D\u6BCF\u4E2A\u5143\u7D20\u662F\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u5C06\u8BE5 JSON \u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5B57\u7B26\u4E32\u5C55\u5F00\u4E3A\u591A\u884C\uFF0C\u6BCF\u884C\u5305\u542B\u4E00\u4E2A\u5B57\u7B26\u4E32\u3002\u914D\u5408 LATERAL VIEW \u4F7F\u7528\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"explode_json_array_string_outer"})," \u548C ",(0,a.jsx)(e.code,{children:"explode_json_array_string"})," \u7C7B\u4F3C\uFF0C\u5BF9\u4E8E\u7A7A\u503C\u6216 NULL \u7684\u5904\u7406\u4E0D\u540C\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:["\u5982\u679C JSON \u5B57\u7B26\u4E32\u672C\u8EAB\u4E3A NULL\uFF0C",(0,a.jsx)(e.code,{children:"OUTER"})," \u7248\u672C\u4F1A\u8FD4\u56DE\u4E00\u884C\uFF0C\u4E14\u8BE5\u884C\u4E2D\u7684\u503C\u4E3A NULL\u3002\u666E\u901A\u7248\u672C\u4F1A\u5B8C\u5168\u5FFD\u7565\u8FD9\u7C7B\u8BB0\u5F55\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:["\u5982\u679C JSON \u6570\u7EC4\u4E3A\u7A7A\uFF0C",(0,a.jsx)(e.code,{children:"OUTER"})," \u7248\u672C\u4F1A\u8FD4\u56DE\u4E00\u884C\uFF0C\u4E14\u8BE5\u884C\u7684\u503C\u4E3A NULL\u3002\u666E\u901A\u7248\u672C\u5219\u4E0D\u4F1A\u8FD4\u56DE\u4EFB\u4F55\u7ED3\u679C\u3002"]}),"\n",(0,a.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"EXPLODE_JSON_ARRAY_STRING(<json>)\nEXPLODE_JSON_ARRAY_STRING_OUTER(<json>)\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"\u53C2\u6570"}),(0,a.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,a.jsx)(e.tbody,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"<json>"})}),(0,a.jsx)(e.td,{children:"json \u7C7B\u578B"})]})})]}),"\n",(0,a.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,a.jsx)(e.p,{children:"\u5C55\u5F00 JSON \u6570\u7EC4\uFF0C\u6BCF\u4E2A\u5143\u7D20\u751F\u6210\u4E00\u884C\uFF0C\u8FD4\u56DE\u6574\u6570\u5217\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE json_array_example (\n    id INT,\n    json_array STRING\n)DUPLICATE KEY(id)\nDISTRIBUTED BY HASH(id) BUCKETS AUTO\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1");\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"INSERT INTO json_array_example (id, json_array) VALUES\n(1, '[1, 2, 3, 4, 5]'),\n(2, '[1.1, 2.2, 3.3, 4.4]'),\n(3, '[\"apple\", \"banana\", \"cherry\"]'),\n(4, '[{\"a\": 1}, {\"b\": 2}, {\"c\": 3}]'),\n(5, '[]'),\n(6, 'NULL');\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"SELECT id, e1\nFROM json_array_example\nLATERAL VIEW EXPLODE_JSON_ARRAY_STRING(json_array) tmp1 AS e1\nWHERE id = 3;\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:"+------+--------+\n| id   | e1     |\n+------+--------+\n|    3 | apple  |\n|    3 | banana |\n|    3 | cherry |\n+------+--------+\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"SELECT id, e1\nFROM json_array_example\nLATERAL VIEW EXPLODE_JSON_ARRAY_STRING(json_array) tmp1 AS e1\nWHERE id = 6;\nEmpty set (0.02 sec)\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"SELECT id, e1\nFROM json_array_example\nLATERAL VIEW EXPLODE_JSON_ARRAY_STRING_OUTER(json_array) tmp1 AS e1\nWHERE id = 6;\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:"+------+------+\n| id   | e1   |\n+------+------+\n|    6 | NULL |\n+------+------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return t}});var l=s(667294);let a={},r=l.createContext(a);function t(n){let e=l.useContext(r);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:t(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);