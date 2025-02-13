"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["948072"],{984554:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>a});var t=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/corr","title":"CORR","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/aggregate-functions/corr.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/corr","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/corr","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"CORR","language":"en"},"sidebar":"docs","previous":{"title":"COVAR_SAMP","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/covar-samp"},"next":{"title":"TOPN","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/topn"}}'),s=r("785893"),l=r("250065");let a={title:"CORR",language:"en"},i=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Calculate the Pearson coefficient of two random variables."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CORR(<expr1>, <expr2>)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<expr1>"})}),(0,s.jsx)(n.td,{children:"Numeric expression (column)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<expr2>"})}),(0,s.jsx)(n.td,{children:"Numeric expression (column)"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,s.jsx)(n.p,{children:"The return value is of type DOUBLE, the covariance of expr1 and expr2, except the product of the standard deviation of expr1 and expr2, special case:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If the standard deviation of expr1 or expr2 is 0, 0 will be returned."}),"\n",(0,s.jsx)(n.li,{children:"If a column of expr1 or expr2 is NULL, the row data will not be counted in the final result."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select * from test_corr;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+------+------+------+\n| id   | k1   | k2   |\n+------+------+------+\n|    1 |   20 |   22 |\n|    1 |   10 |   20 |\n|    2 |   36 |   21 |\n|    2 |   30 |   22 |\n|    2 |   25 |   20 |\n|    3 |   25 | NULL |\n|    4 |   25 |   21 |\n|    4 |   25 |   22 |\n|    4 |   25 |   20 |\n+------+------+------+\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select id,corr(k1,k2) from test_corr group by id;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+------+--------------------+\n| id   | corr(k1, k2)       |\n+------+--------------------+\n|    4 |                  0 |\n|    1 |                  1 |\n|    3 |               NULL |\n|    2 | 0.4539206495016019 |\n+------+--------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return a}});var t=r(667294);let s={},l=t.createContext(s);function a(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);