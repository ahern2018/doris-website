"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["45367"],{323270:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/table-functions/explode-json-array-int","title":"EXPLODE_JSON_ARRAY_INT","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/table-functions/explode-json-array-int.md","sourceDirName":"sql-manual/sql-functions/table-functions","slug":"/sql-manual/sql-functions/table-functions/explode-json-array-int","permalink":"/docs/dev/sql-manual/sql-functions/table-functions/explode-json-array-int","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"EXPLODE_JSON_ARRAY_INT","language":"en"},"sidebar":"docs","previous":{"title":"NTILE","permalink":"/docs/dev/sql-manual/sql-functions/window-functions/ntile"},"next":{"title":"EXPLODE_JSON_ARRAY_DOUBLE","permalink":"/docs/dev/sql-manual/sql-functions/table-functions/explode-json-array-double"}}'),a=r("785893"),t=r("250065");let l={title:"EXPLODE_JSON_ARRAY_INT",language:"en"},i=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"explode_json_array_int"})," table function accepts a JSON array, where each element is of integer type, and expands each integer in the array into multiple rows, with each row containing one integer. It is used in conjunction with LATERAL VIEW."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"explode_json_array_int_outer"})," is similar to ",(0,a.jsx)(n.code,{children:"explode_json_array_int"}),", but the handling of NULL values is different."]}),"\n",(0,a.jsxs)(n.p,{children:["If the JSON string itself is NULL, the ",(0,a.jsx)(n.code,{children:"OUTER"})," version will return one row, with the value as NULL. The normal version will completely ignore such records."]}),"\n",(0,a.jsxs)(n.p,{children:["If the JSON array is empty, the ",(0,a.jsx)(n.code,{children:"OUTER"})," version will return one row, with the value as NULL. The normal version will return no results."]}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"EXPLODE_JSON_ARRAY_INT(<json>)\nEXPLODE_JSON_ARRAY_INT_OUTER(<json>)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<json>"})}),(0,a.jsx)(n.td,{children:"json type"})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsx)(n.p,{children:"Expands the JSON array, creating a row for each element, returning an integer column."}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE json_array_example (\n    id INT,\n    json_array STRING\n)DUPLICATE KEY(id)\nDISTRIBUTED BY HASH(id) BUCKETS AUTO\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1");\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"INSERT INTO json_array_example (id, json_array) VALUES\n(1, '[1, 2, 3, 4, 5]'),\n(2, '[1.1, 2.2, 3.3, 4.4]'),\n(3, '[\"apple\", \"banana\", \"cherry\"]'),\n(4, '[{\"a\": 1}, {\"b\": 2}, {\"c\": 3}]'),\n(5, '[]'),\n(6, 'NULL');\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT id, e1\nFROM json_array_example\nLATERAL VIEW EXPLODE_JSON_ARRAY_INT(json_array) tmp1 AS e1\nWHERE id = 1;\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+------+------+\n| id   | e1   |\n+------+------+\n|    1 |    1 |\n|    1 |    2 |\n|    1 |    3 |\n|    1 |    4 |\n|    1 |    5 |\n+------+------+\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT id, e1\nFROM json_array_example\nLATERAL VIEW EXPLODE_JSON_ARRAY_INT(json_array) tmp1 AS e1\nWHERE id = 5;\nEmpty set (0.01 sec)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT id, e1\nFROM json_array_example\nLATERAL VIEW EXPLODE_JSON_ARRAY_INT_OUTER(json_array) tmp1 AS e1\nWHERE id = 5;\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+------+------+\n| id   | e1   |\n+------+------+\n|    5 | NULL |\n+------+------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return l}});var s=r(667294);let a={},t=s.createContext(a);function l(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);