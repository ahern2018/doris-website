"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["321776"],{38747:function(e,n,a){a.r(n),a.d(n,{metadata:()=>l,contentTitle:()=>r,default:()=>p,assets:()=>c,toc:()=>o,frontMatter:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-functions/table-functions/explode-bitmap","title":"EXPLODE_BITMAP","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/table-functions/explode-bitmap.md","sourceDirName":"sql-manual/sql-functions/table-functions","slug":"/sql-manual/sql-functions/table-functions/explode-bitmap","permalink":"/docs/sql-manual/sql-functions/table-functions/explode-bitmap","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"EXPLODE_BITMAP","language":"en"},"sidebar":"docs","previous":{"title":"EXPLODE_JSON_OBJECT","permalink":"/docs/sql-manual/sql-functions/table-functions/explode-json-object"},"next":{"title":"EXPLODE_SPLIT","permalink":"/docs/sql-manual/sql-functions/table-functions/explode-split"}}'),t=a("785893"),s=a("250065");let i={title:"EXPLODE_BITMAP",language:"en"},r=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"explode_bitmap"})," table function accepts a bitmap type data and maps each bit (bit) of the bitmap to a separate row. It is commonly used for processing bitmap data, expanding each element of the bitmap into separate records. It should be used in conjunction with LATERAL VIEW."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"explode_bitmap_outer"})," works similarly to ",(0,t.jsx)(n.code,{children:"explode_bitmap"}),", but its behavior differs when handling NULL or empty values. It allows records with empty or NULL bitmaps to exist, and in the result, it expands an empty or NULL bitmap into NULL rows."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"EXPLODE_BITMAP(<bitmap>)\nEXPLODE_BITMAP_OUTER(<bitmap>)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"<bitmap>"})}),(0,t.jsx)(n.td,{children:"bitmap type"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a row for each bit in the bitmap, with each row containing a single bit value."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE example1 (\n    k1 INT\n)DUPLICATE KEY(k1)\nDISTRIBUTED BY HASH(k1) BUCKETS AUTO\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1");\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"insert into example1 values(1),(2),(3),(4),(5),(6);\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select k1 from example1 order by k1;\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+------+\n| k1   |\n+------+\n|    1 |\n|    2 |\n|    3 |\n|    4 |\n|    5 |\n|    6 |\n+------+\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select k1, e1 from example1 lateral view explode_bitmap(bitmap_empty()) tmp1 as e1 order by k1, e1;\nEmpty set\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'select k1, e1 from example1 lateral view explode_bitmap(bitmap_from_string("1")) tmp1 as e1 order by k1, e1;\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+------+------+\n| k1   | e1   |\n+------+------+\n|    1 |    1 |\n|    2 |    1 |\n|    3 |    1 |\n|    4 |    1 |\n|    5 |    1 |\n|    6 |    1 |\n+------+------+\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'select k1, e1 from example1 lateral view explode_bitmap(bitmap_from_string("1,2")) tmp1 as e1 order by k1, e1;\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+------+------+\n| k1   | e1   |\n+------+------+\n|    1 |    1 |\n|    1 |    2 |\n|    2 |    1 |\n|    2 |    2 |\n|    3 |    1 |\n|    3 |    2 |\n|    4 |    1 |\n|    4 |    2 |\n|    5 |    1 |\n|    5 |    2 |\n|    6 |    1 |\n|    6 |    2 |\n+------+------+\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'select k1, e1 from example1 lateral view explode_bitmap(bitmap_from_string("1,1000")) tmp1 as e1 order by k1, e1;\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+------+------+\n| k1   | e1   |\n+------+------+\n|    1 |    1 |\n|    1 | 1000 |\n|    2 |    1 |\n|    2 | 1000 |\n|    3 |    1 |\n|    3 | 1000 |\n|    4 |    1 |\n|    4 | 1000 |\n|    5 |    1 |\n|    5 | 1000 |\n|    6 |    1 |\n|    6 | 1000 |\n+------+------+\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'select k1, e1, e2 from example1\nlateral view explode_bitmap(bitmap_from_string("1,1000")) tmp1 as e1\nlateral view explode_split("a,b", ",") tmp2 as e2 order by k1, e1, e2;\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+------+------+------+\n| k1   | e1   | e2   |\n+------+------+------+\n|    1 |    1 | a    |\n|    1 |    1 | b    |\n|    1 | 1000 | a    |\n|    1 | 1000 | b    |\n|    2 |    1 | a    |\n|    2 |    1 | b    |\n|    2 | 1000 | a    |\n|    2 | 1000 | b    |\n|    3 |    1 | a    |\n|    3 |    1 | b    |\n|    3 | 1000 | a    |\n|    3 | 1000 | b    |\n|    4 |    1 | a    |\n|    4 |    1 | b    |\n|    4 | 1000 | a    |\n|    4 | 1000 | b    |\n|    5 |    1 | a    |\n|    5 |    1 | b    |\n|    5 | 1000 | a    |\n|    5 | 1000 | b    |\n|    6 |    1 | a    |\n|    6 |    1 | b    |\n|    6 | 1000 | a    |\n|    6 | 1000 | b    |\n+------+------+------+\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE example (\n    k1 INT,\n    v1 bitmap\n)DUPLICATE KEY(k1)\nDISTRIBUTED BY HASH(k1) BUCKETS AUTO\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1");\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"insert into example values(1,to_bitmap('10101')),(2,to_bitmap('0')),(3,to_bitmap(NULL));\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT id, k, v\nFROM example\nLATERAL VIEW explode_json_object(value_json) exploded_table AS k , v;\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+------+-------+\n| k1   | bit   |\n+------+-------+\n|    2 |     0 |\n|    1 | 10101 |\n+------+-------+\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT id, k, v\nFROM example\nLATERAL VIEW explode_json_object_outer(value_json) exploded_table AS k, v;\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+------+-------+\n| k1   | bit   |\n+------+-------+\n|    2 |     0 |\n|    1 | 10101 |\n|    3 |  NULL |\n+------+-------+\n"})})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return r},a:function(){return i}});var l=a(667294);let t={},s=l.createContext(t);function i(e){let n=l.useContext(s);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);