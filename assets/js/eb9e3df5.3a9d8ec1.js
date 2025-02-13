"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["352875"],{420501:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>i,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>r});var a=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/percentile-array","title":"PERCENTILE_ARRAY","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/aggregate-functions/percentile-array.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/percentile-array","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/percentile-array","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"PERCENTILE_ARRAY","language":"en"},"sidebar":"docs","previous":{"title":"PERCENTILE","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/percentile"},"next":{"title":"PERCENTILE_APPROX","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/percentile-approx"}}'),l=t("785893"),s=t("250065");let r={title:"PERCENTILE_ARRAY",language:"en"},i=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"PERCENTILE_ARRAY"})," function calculates exact percentile arrays, allowing multiple percentile values to be computed at once. This function is primarily suitable for small datasets."]}),"\n",(0,l.jsx)(n.p,{children:"Key features:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Exact Calculation: Provides exact percentile results rather than approximations"}),"\n",(0,l.jsx)(n.li,{children:"Batch Processing: Can calculate multiple percentiles in a single operation"}),"\n",(0,l.jsx)(n.li,{children:"Scope: Best suited for handling small-scale datasets"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"PERCENTILE_ARRAY(<col>, <array_p>)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parameter"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<col>"})}),(0,l.jsx)(n.td,{children:"The column to calculate the percentile for"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<array_p>"})}),(0,l.jsxs)(n.td,{children:["Percentile array, each element must be in the range ",(0,l.jsx)(n.code,{children:"[0.0, 1.0]"}),", e.g., ",(0,l.jsx)(n.code,{children:"[0.5, 0.95, 0.99]"})]})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,l.jsxs)(n.p,{children:["Return a ",(0,l.jsx)(n.code,{children:"DOUBLE"})," type array, containing the calculated percentile values."]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'-- Create sample table\nCREATE TABLE sales_data (\n    id INT,\n    amount DECIMAL(10, 2)\n) DUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS AUTO\nPROPERTIES (\n    "replication_allocation" = "tag.location.default: 1"\n);\n\n-- Insert sample data\nINSERT INTO sales_data VALUES\n(1, 10.5),\n(2, 15.2),\n(3, 20.1),\n(4, 25.8),\n(5, 30.3),\n(6, 35.7),\n(7, 40.2),\n(8, 45.9),\n(9, 50.4),\n(10, 100.6);\n\n-- Calculate multiple percentiles\nSELECT percentile_array(amount, [0.25, 0.5, 0.75, 0.9]) as percentiles\nFROM sales_data;\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+-----------------------------------------+\n| percentiles                             |\n+-----------------------------------------+\n| [21.25, 32.5, 43.75, 54.99999999999998] |\n+-----------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return r}});var a=t(667294);let l={},s=a.createContext(l);function r(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);