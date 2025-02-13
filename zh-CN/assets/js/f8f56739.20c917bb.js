"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["507310"],{5573:function(n,e,s){s.r(e),s.d(e,{metadata:()=>l,contentTitle:()=>o,default:()=>u,assets:()=>i,toc:()=>c,frontMatter:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-functions/table-functions/explode-json-array-json","title":"EXPLODE_JSON_ARRAY_JSON","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/table-functions/explode-json-array-json.md","sourceDirName":"sql-manual/sql-functions/table-functions","slug":"/sql-manual/sql-functions/table-functions/explode-json-array-json","permalink":"/zh-CN/docs/sql-manual/sql-functions/table-functions/explode-json-array-json","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"EXPLODE_JSON_ARRAY_JSON","language":"zh-CN"},"sidebar":"docs","previous":{"title":"EXPLODE_JSON_ARRAY_STRING","permalink":"/zh-CN/docs/sql-manual/sql-functions/table-functions/explode-json-array-string"},"next":{"title":"EXPLODE_VARIANT_ARRAY","permalink":"/zh-CN/docs/sql-manual/sql-functions/table-functions/explode-variant-array"}}'),a=s("785893"),t=s("250065");let r={title:"EXPLODE_JSON_ARRAY_JSON",language:"zh-CN"},o=void 0,i={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function d(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"explode_json_array_json"})," \u8868\u51FD\u6570\uFF0C\u63A5\u53D7\u4E00\u4E2A JSON \u6570\u7EC4\uFF0C\u5176\u4E2D\u6BCF\u4E2A\u5143\u7D20\u662F JSON \u5BF9\u8C61\u7C7B\u578B\uFF0C\u5C06\u8BE5 JSON \u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A JSON \u5BF9\u8C61\u5C55\u5F00\u4E3A\u591A\u884C\uFF0C\u6BCF\u884C\u5305\u542B\u4E00\u4E2A JSON \u5BF9\u8C61\u3002\u914D\u5408 LATERAL VIEW \u4F7F\u7528\u3002"]}),"\n",(0,a.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"EXPLODE_JSON_ARRAY_JSON(<json>)\nEXPLODE_JSON_ARRAY_JSON_OUTER(<json>)\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"\u53C2\u6570"}),(0,a.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,a.jsx)(e.tbody,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"<json>"})}),(0,a.jsx)(e.td,{children:"json \u7C7B\u578B"})]})})]}),"\n",(0,a.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,a.jsx)(e.p,{children:"\u5C55\u5F00 JSON \u6570\u7EC4\uFF0C\u6BCF\u4E2A\u5143\u7D20\u751F\u6210\u4E00\u884C\uFF0C\u8FD4\u56DE JSON \u5BF9\u8C61\u5217\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE json_array_example (\n    id INT,\n    json_array STRING\n)DUPLICATE KEY(id)\nDISTRIBUTED BY HASH(id) BUCKETS AUTO\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1");\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"INSERT INTO json_array_example (id, json_array) VALUES\n(1, '[1, 2, 3, 4, 5]'),\n(2, '[1.1, 2.2, 3.3, 4.4]'),\n(3, '[\"apple\", \"banana\", \"cherry\"]'),\n(4, '[{\"a\": 1}, {\"b\": 2}, {\"c\": 3}]'),\n(5, '[]'),\n(6, 'NULL');\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"SELECT id, e1\nFROM json_array_example\nLATERAL VIEW EXPLODE_JSON_ARRAY_JSON(json_array) tmp1 AS e1\nWHERE id = 4;\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:'+------+---------+\n| id   | e1      |\n+------+---------+\n|    4 | {"a":1} |\n|    4 | {"b":2} |\n|    4 | {"c":3} |\n+------+---------+\n'})})]})}function u(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return o},a:function(){return r}});var l=s(667294);let a={},t=l.createContext(a);function r(n){let e=l.useContext(t);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),l.createElement(t.Provider,{value:e},n.children)}}}]);