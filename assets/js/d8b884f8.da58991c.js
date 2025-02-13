"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["187751"],{984946:function(e,n,t){t.r(n),t.d(n,{metadata:()=>l,contentTitle:()=>r,default:()=>p,assets:()=>c,toc:()=>o,frontMatter:()=>a});var l=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/percentile","title":"PERCENTILE","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/aggregate-functions/percentile.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/percentile","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/percentile","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"PERCENTILE","language":"en"},"sidebar":"docs","previous":{"title":"APPROX_COUNT_DISTINCT","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/approx-count-distinct"},"next":{"title":"PERCENTILE_ARRAY","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/percentile-array"}}'),i=t("785893"),s=t("250065");let a={title:"PERCENTILE",language:"en"},r=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["Calculates the exact percentile, suitable for small datasets. First sorts the specified column in descending order, then takes the exact p-th percentile. The value of ",(0,i.jsx)(n.code,{children:"p"})," is between ",(0,i.jsx)(n.code,{children:"0"})," and ",(0,i.jsx)(n.code,{children:"1"}),". If ",(0,i.jsx)(n.code,{children:"p"})," does not point to an exact position, it returns the ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Linear_interpolation",children:"linear interpolation"})," of the adjacent values at position ",(0,i.jsx)(n.code,{children:"p"}),". Note that this is not the average of the two numbers. Special cases:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Returns ",(0,i.jsx)(n.code,{children:"NULL"})," when the input column is ",(0,i.jsx)(n.code,{children:"NULL"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"PERCENTILE(<col>, <p>)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<col>"})}),(0,i.jsx)(n.td,{children:"The column to be calculated as the exact percentile, which must be an integer column."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<p>"})}),(0,i.jsxs)(n.td,{children:["The exact percentile to be calculated, a constant value, with a value range of ",(0,i.jsx)(n.code,{children:"[0.0, 1.0]"}),"."]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsxs)(n.p,{children:["Return the exact percentile of the specified column, with a return type of ",(0,i.jsx)(n.code,{children:"DOUBLE"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'-- Create sample table\nCREATE TABLE sales_data\n(\n    product_id INT,\n    sale_price DECIMAL(10, 2)\n) DUPLICATE KEY(`product_id`)\nDISTRIBUTED BY HASH(`product_id`) BUCKETS AUTO\nPROPERTIES (\n    "replication_allocation" = "tag.location.default: 1"\n);\n\n-- Insert sample data\nINSERT INTO sales_data VALUES\n(1, 10.00),\n(1, 15.00),\n(1, 20.00),\n(1, 25.00),\n(1, 30.00),\n(1, 35.00),\n(1, 40.00),\n(1, 45.00),\n(1, 50.00),\n(1, 100.00);\n\n-- Calculate different percentiles of sales prices\nSELECT \n    percentile(sale_price, 0.5)  as median_price,     -- Median\n    percentile(sale_price, 0.75) as p75_price,        -- 75th percentile\n    percentile(sale_price, 0.90) as p90_price,        -- 90th percentile\n    percentile(sale_price, 0.95) as p95_price,        -- 95th percentile\n    percentile(null, 0.99)       as p99_null          -- Null value at 99th percentile\nFROM sales_data;\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+--------------+-----------+-------------------+-------------------+----------+\n| median_price | p75_price | p90_price         | p95_price         | p99_null |\n+--------------+-----------+-------------------+-------------------+----------+\n|         32.5 |     43.75 | 54.99999999999998 | 77.49999999999994 |     NULL |\n+--------------+-----------+-------------------+-------------------+----------+\n"})})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var l=t(667294);let i={},s=l.createContext(i);function a(e){let n=l.useContext(s);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);