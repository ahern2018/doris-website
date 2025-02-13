"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["267194"],{358811:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>d,assets:()=>c,toc:()=>o,frontMatter:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/var-samp","title":"VAR_SAMP,VARIANCE_SAMP","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/aggregate-functions/var-samp.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/var-samp","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/var-samp","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"VAR_SAMP,VARIANCE_SAMP","language":"en"},"sidebar":"docs","previous":{"title":"VARIANCE,VAR_POP,VARIANCE_POP","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/variance"},"next":{"title":"COVAR,COVAR_POP","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/covar"}}'),a=s("785893"),r=s("250065");let i={title:"VAR_SAMP,VARIANCE_SAMP",language:"en"},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Alias",id:"alias",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function u(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"The VAR_SAMP function calculates the sample variance of a specified expression. Unlike VARIANCE (population variance), VAR_SAMP uses n-1 as the divisor, which is considered an unbiased estimate of the population variance in statistics."}),"\n",(0,a.jsx)(n.h2,{id:"alias",children:"Alias"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"VARIANCE_SAMP"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"VAR_SAMP(<expr>)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<expr>"})}),(0,a.jsx)(n.td,{children:"The column or expression to calculate sample variance for. Must be numeric type"})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,a.jsx)(n.p,{children:"Returns a DOUBLE value representing the calculated sample variance."}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'-- Create sample table\nCREATE TABLE student_scores (\n    student_id INT,\n    score DECIMAL(4,1)\n) DISTRIBUTED BY HASH(student_id)\nPROPERTIES (\n    "replication_num" = "1"\n);\n\n-- Insert test data\nINSERT INTO student_scores VALUES\n(1, 85.5),\n(2, 92.0),\n(3, 78.5),\n(4, 88.0),\n(5, 95.5),\n(6, 82.0),\n(7, 90.0),\n(8, 87.5);\n\n-- Calculate sample variance of student scores\nSELECT \n    VAR_SAMP(score) as sample_variance,\n    VARIANCE(score) as population_variance\nFROM student_scores;\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+------------------+---------------------+\n| sample_variance  | population_variance |\n+------------------+---------------------+\n| 29.4107142857143 |   25.73437500000001 |\n+------------------+---------------------+\n"})})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var t=s(667294);let a={},r=t.createContext(a);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);