"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["97812"],{701303:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/table-valued-functions/numbers","title":"NUMBERS","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/table-valued-functions/numbers.md","sourceDirName":"sql-manual/sql-functions/table-valued-functions","slug":"/sql-manual/sql-functions/table-valued-functions/numbers","permalink":"/docs/dev/sql-manual/sql-functions/table-valued-functions/numbers","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"NUMBERS","language":"en"},"sidebar":"docs","previous":{"title":"JOBS","permalink":"/docs/dev/sql-manual/sql-functions/table-valued-functions/jobs"},"next":{"title":"MV_INFOS","permalink":"/docs/dev/sql-manual/sql-functions/table-valued-functions/mv_infos"}}'),r=t("785893"),l=t("250065");let i={title:"NUMBERS",language:"en"},a=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["Table function that generates a temporary table containing only one column with the column name ",(0,r.jsx)(n.code,{children:"number"})," and all element values are ",(0,r.jsx)(n.code,{children:"const_value"})," if ",(0,r.jsx)(n.code,{children:"const_value"})," is specified, otherwise they are [0,",(0,r.jsx)(n.code,{children:"number"}),") incremented."]}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'NUMBERS(\n    "number" = "<number>"\n    [, "<const_value>" = "<const_value>" ]\n  );\n'})}),"\n",(0,r.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"number"})}),(0,r.jsx)(n.td,{children:"The number of rows"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"const_value"})}),(0,r.jsx)(n.td,{children:"Specifies the constant value generated"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"number"})}),(0,r.jsx)(n.td,{children:"BIGINT"}),(0,r.jsx)(n.td,{children:"The value returned for each row"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'select * from numbers("number" = "5");\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+--------+\n| number |\n+--------+\n|      0 |\n|      1 |\n|      2 |\n|      3 |\n|      4 |\n+--------+\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'select * from numbers("number" = "5", "const_value" = "-123");\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+--------+\n| number |\n+--------+\n|   -123 |\n|   -123 |\n|   -123 |\n|   -123 |\n|   -123 |\n+--------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var s=t(667294);let r={},l=s.createContext(r);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);