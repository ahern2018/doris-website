"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["1779"],{272356:function(e,n,s){s.r(n),s.d(n,{metadata:()=>l,contentTitle:()=>i,default:()=>u,assets:()=>t,toc:()=>a,frontMatter:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/numeric-functions/round","title":"ROUND","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/numeric-functions/round.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/numeric-functions","slug":"/sql-manual/sql-functions/scalar-functions/numeric-functions/round","permalink":"/docs/sql-manual/sql-functions/scalar-functions/numeric-functions/round","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ROUND","language":"en"},"sidebar":"docs","previous":{"title":"PMOD","permalink":"/docs/sql-manual/sql-functions/scalar-functions/numeric-functions/pmod"},"next":{"title":"ROUND_BANKERS","permalink":"/docs/sql-manual/sql-functions/scalar-functions/numeric-functions/round-bankers"}}'),c=s("785893"),d=s("250065");let r={title:"ROUND",language:"en"},i=void 0,t={},a=[{value:"Description",id:"description",level:2},{value:"Alias",id:"alias",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Usage Note",id:"usage-note",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,c.jsxs)(n.p,{children:["Rounds the number ",(0,c.jsx)(n.code,{children:"x"})," to the specified number of digits."]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["If ",(0,c.jsx)(n.code,{children:"d"})," is not specified, ",(0,c.jsx)(n.code,{children:"x"})," is rounded to the nearest integer."]}),"\n",(0,c.jsxs)(n.li,{children:["If ",(0,c.jsx)(n.code,{children:"d"})," is negative, the result is rounded to the left of the decimal point by ",(0,c.jsx)(n.code,{children:"d"})," places."]}),"\n",(0,c.jsxs)(n.li,{children:["If ",(0,c.jsx)(n.code,{children:"x"})," or ",(0,c.jsx)(n.code,{children:"d"})," is ",(0,c.jsx)(n.code,{children:"null"}),", returns ",(0,c.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,c.jsxs)(n.li,{children:["If ",(0,c.jsx)(n.code,{children:"d"})," is a column and the first argument is of type ",(0,c.jsx)(n.code,{children:"Decimal"}),", the resulting ",(0,c.jsx)(n.code,{children:"Decimal"})," will have the same number of decimal places as the input ",(0,c.jsx)(n.code,{children:"Decimal"}),"."]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"alias",children:"Alias"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"DROUND"})}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"ROUND(<x> [ , <d> ])\n"})}),"\n",(0,c.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Parameter"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"<x>"})}),(0,c.jsx)(n.td,{children:"The number to be rounded"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"<d>"})}),(0,c.jsx)(n.td,{children:"Optional, the number of decimal places to round to"})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"select round(2.4);\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"+------------+\n| round(2.4) |\n+------------+\n|          2 |\n+------------+\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"select round(2.5);\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"+------------+\n| round(2.5) |\n+------------+\n|          3 |\n+------------+\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"select round(-3.4);\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"+-------------+\n| round(-3.4) |\n+-------------+\n|          -3 |\n+-------------+\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"select round(-3.5);\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"+-------------+\n| round(-3.5) |\n+-------------+\n|          -4 |\n+-------------+\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"select round(1667.2725, 2);\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"+---------------------+\n| round(1667.2725, 2) |\n+---------------------+\n|             1667.27 |\n+---------------------+\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"select round(1667.2725, -2);\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"+----------------------+\n| round(1667.2725, -2) |\n+----------------------+\n|                 1700 |\n+----------------------+\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE test_enhanced_round (\n    rid int, flo float, dou double,\n    dec90 decimal(9, 0), dec91 decimal(9, 1), dec99 decimal(9, 9),\n    dec100 decimal(10,0), dec109 decimal(10,9), dec1010 decimal(10,10),\n    number int DEFAULT 1)\nDISTRIBUTED BY HASH(rid)\nPROPERTIES("replication_num" = "1" );\n\nINSERT INTO test_enhanced_round\nVALUES\n(1, 12345.123, 123456789.123456789,\n    123456789, 12345678.1, 0.123456789,\n    123456789.1, 1.123456789, 0.123456789, 1);\n\nSELECT number, dec90, round(dec90, number), dec91, round(dec91, number), dec99, round(dec99, number) FROM test_enhanced_round order by rid;\n'})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"+--------+-----------+----------------------+------------+----------------------+-------------+----------------------+\n| number | dec90     | round(dec90, number) | dec91      | round(dec91, number) | dec99       | round(dec99, number) |\n+--------+-----------+----------------------+------------+----------------------+-------------+----------------------+\n|      1 | 123456789 |            123456789 | 12345678.1 |           12345678.1 | 0.123456789 |          0.100000000 |\n+--------+-----------+----------------------+------------+----------------------+-------------+----------------------+\n"})}),"\n",(0,c.jsx)(n.h2,{id:"usage-note",children:"Usage Note"}),"\n",(0,c.jsxs)(n.p,{children:["2.5 will round to 3. If you want to round to 2, use the ",(0,c.jsx)(n.code,{children:"round_bankers"})," function."]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return r}});var l=s(667294);let c={},d=l.createContext(c);function r(e){let n=l.useContext(d);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),l.createElement(d.Provider,{value:n},e.children)}}}]);