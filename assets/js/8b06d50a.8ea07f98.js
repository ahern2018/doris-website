"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["125394"],{60952:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/sum","title":"SUM","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/aggregate-functions/sum.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/sum","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/sum","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SUM","language":"en"},"sidebar":"docs","previous":{"title":"AVG_WEIGHTED","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/avg-weighted"},"next":{"title":"STDDEV,STDDEV_POP","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/stddev"}}'),a=t("785893"),l=t("250065");let r={title:"SUM",language:"en"},i=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Used to return the sum of all values of the selected field"}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SUM(<expr>)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<expr>"})}),(0,a.jsx)(n.td,{children:"The field to calculate the sum of"})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,a.jsx)(n.p,{children:"Return the sum of all values of the selected field."}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'-- Create sample tables\nCREATE TABLE sales_table (\n    product_id INT,\n    price DECIMAL(10,2),\n    quantity INT\n) DISTRIBUTED BY HASH(product_id)\nPROPERTIES (\n    "replication_num" = "1"\n);\n\n-- Insert test data\nINSERT INTO sales_table VALUES\n(1, 99.99, 2),\n(2, 159.99, 1),\n(3, 49.99, 5),\n(4, 299.99, 1),\n(5, 79.99, 3);\n\n-- Calculate the total sales amount\nSELECT SUM(price * quantity) as total_sales\nFROM sales_table;\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+-------------+\n| total_sales |\n+-------------+\n|     1149.88 |\n+-------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return r}});var s=t(667294);let a={},l=s.createContext(a);function r(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);