"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["505990"],{594995:function(n,e,c){c.r(e),c.d(e,{metadata:()=>d,contentTitle:()=>i,default:()=>u,assets:()=>t,toc:()=>a,frontMatter:()=>r});var d=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/numeric-functions/round","title":"ROUND","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/numeric-functions/round.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/numeric-functions","slug":"/sql-manual/sql-functions/scalar-functions/numeric-functions/round","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/numeric-functions/round","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ROUND","language":"zh-CN"},"sidebar":"docs","previous":{"title":"PMOD","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/numeric-functions/pmod"},"next":{"title":"ROUND_BANKERS","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/numeric-functions/round-bankers"}}'),l=c("785893"),s=c("250065");let r={title:"ROUND",language:"zh-CN"},i=void 0,t={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u522B\u540D",id:"\u522B\u540D",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsxs)(e.p,{children:["\u5C06\u6570\u5B57 ",(0,l.jsx)(e.code,{children:"x"})," \u56DB\u820D\u4E94\u5165\u540E\u4FDD\u7559 ",(0,l.jsx)(e.code,{children:"d"})," \u4F4D\u5C0F\u6570\u3002"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u5982\u679C\u6CA1\u6709\u6307\u5B9A ",(0,l.jsx)(e.code,{children:"d"}),"\uFF0C\u5219\u5C06 ",(0,l.jsx)(e.code,{children:"x"})," \u56DB\u820D\u4E94\u5165\u5230\u6700\u8FD1\u7684\u6574\u6570\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:["\u5982\u679C ",(0,l.jsx)(e.code,{children:"d"})," \u4E3A\u8D1F\u6570\uFF0C\u5219\u7ED3\u679C\u5C0F\u6570\u70B9\u5DE6\u8FB9 ",(0,l.jsx)(e.code,{children:"d"})," \u4F4D\u4E3A 0\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:["\u5982\u679C ",(0,l.jsx)(e.code,{children:"x"})," \u6216 ",(0,l.jsx)(e.code,{children:"d"})," \u4E3A ",(0,l.jsx)(e.code,{children:"null"})," \uFF0C\u8FD4\u56DE ",(0,l.jsx)(e.code,{children:"null"}),"\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:["\u5982\u679C ",(0,l.jsx)(e.code,{children:"d"})," \u4E3A\u4E00\u4E2A\u5217\uFF0C\u5E76\u4E14\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A ",(0,l.jsx)(e.code,{children:"Decimal"})," \u7C7B\u578B\uFF0C\u90A3\u4E48\u7ED3\u679C ",(0,l.jsx)(e.code,{children:"Decimal"})," \u4F1A\u8DDF\u5165\u53C2 ",(0,l.jsx)(e.code,{children:"Decimal"})," \u5177\u6709\u76F8\u540C\u7684\u5C0F\u6570\u90E8\u5206\u957F\u5EA6\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u522B\u540D",children:"\u522B\u540D"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"DROUND"})}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"ROUND(<x> [ , <d> ])\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u53C2\u6570"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<x>"})}),(0,l.jsx)(e.td,{children:"\u9700\u8981\u56DB\u820D\u4E94\u5165\u7684\u6570\u503C"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<d>"})}),(0,l.jsx)(e.td,{children:"\u53EF\u9009\uFF0C\u56DB\u820D\u4E94\u5165\u9700\u8981\u4FDD\u7559\u7684\u5C0F\u6570\u4F4D\u6570"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"select round(2.4);\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+------------+\n| round(2.4) |\n+------------+\n|          2 |\n+------------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"select round(2.5);\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+------------+\n| round(2.5) |\n+------------+\n|          3 |\n+------------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"select round(-3.4);\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+-------------+\n| round(-3.4) |\n+-------------+\n|          -3 |\n+-------------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"select round(-3.5);\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+-------------+\n| round(-3.5) |\n+-------------+\n|          -4 |\n+-------------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"select round(1667.2725, 2);\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+---------------------+\n| round(1667.2725, 2) |\n+---------------------+\n|             1667.27 |\n+---------------------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"select round(1667.2725, -2);\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+----------------------+\n| round(1667.2725, -2) |\n+----------------------+\n|                 1700 |\n+----------------------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE test_enhanced_round (\n    rid int, flo float, dou double,\n    dec90 decimal(9, 0), dec91 decimal(9, 1), dec99 decimal(9, 9),\n    dec100 decimal(10,0), dec109 decimal(10,9), dec1010 decimal(10,10),\n    number int DEFAULT 1)\nDISTRIBUTED BY HASH(rid)\nPROPERTIES("replication_num" = "1" );\n\nINSERT INTO test_enhanced_round\nVALUES\n(1, 12345.123, 123456789.123456789,\n    123456789, 12345678.1, 0.123456789,\n    123456789.1, 1.123456789, 0.123456789, 1);\n\nSELECT number, dec90, round(dec90, number), dec91, round(dec91, number), dec99, round(dec99, number) FROM test_enhanced_round order by rid;\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+--------+-----------+----------------------+------------+----------------------+-------------+----------------------+\n| number | dec90     | round(dec90, number) | dec91      | round(dec91, number) | dec99       | round(dec99, number) |\n+--------+-----------+----------------------+------------+----------------------+-------------+----------------------+\n|      1 | 123456789 |            123456789 | 12345678.1 |           12345678.1 | 0.123456789 |          0.100000000 |\n+--------+-----------+----------------------+------------+----------------------+-------------+----------------------+\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,l.jsxs)(e.p,{children:["2.5 \u4F1A\u820D\u5165\u5230 3\uFF0C\u5982\u679C\u60F3\u8981\u820D\u5165\u5230 2 \u7684\u7B97\u6CD5\uFF0C\u8BF7\u4F7F\u7528 ",(0,l.jsx)(e.code,{children:"round_bankers"})," \u51FD\u6570\u3002"]})]})}function u(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},250065:function(n,e,c){c.d(e,{Z:function(){return i},a:function(){return r}});var d=c(667294);let l={},s=d.createContext(l);function r(n){let e=d.useContext(s);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),d.createElement(s.Provider,{value:e},n.children)}}}]);