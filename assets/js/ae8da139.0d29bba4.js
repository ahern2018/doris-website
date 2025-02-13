"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["983132"],{900279:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/avg-weighted","title":"AVG_WEIGHTED","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/aggregate-functions/avg-weighted.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/avg-weighted","permalink":"/docs/sql-manual/sql-functions/aggregate-functions/avg-weighted","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"AVG_WEIGHTED","language":"en"},"sidebar":"docs","previous":{"title":"AVG","permalink":"/docs/sql-manual/sql-functions/aggregate-functions/avg"},"next":{"title":"SUM","permalink":"/docs/sql-manual/sql-functions/aggregate-functions/sum"}}'),a=t("785893"),i=t("250065");let r={title:"AVG_WEIGHTED",language:"en"},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Calculates the weighted arithmetic mean, i.e., the result is the sum of the products of corresponding values and weights, divided by the total sum of weights. If the total sum of weights is 0, it will return NaN."}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"AVG_WEIGHTED(<x>, <weight>)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<x>"})}),(0,a.jsx)(n.td,{children:"It is the numeric expression for which the average needs to be calculated, and can be a column name, constant, or a complex numeric expression."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<weight>"})}),(0,a.jsx)(n.td,{children:"It is a numeric expression, typically a column name, constant, or the result of another numeric calculation."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,a.jsx)(n.p,{children:"The sum of the products of corresponding values and weights is accumulated, divided by the total sum of weights. If the total sum of weights equals 0, NaN will be returned."}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select k1,k2 from test_doris_avg_weighted;\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+------+------+\n| k1   | k2   |\n+------+------+\n|   10 |  100 |\n|   20 |  200 |\n|   30 |  300 |\n|   40 |  400 |\n+------+------+\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select avg_weighted(k2,k1) from test_doris_avg_weighted;\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+--------------------------------------+\n| avg_weighted(k2, cast(k1 as DOUBLE)) |\n+--------------------------------------+\n|                                  300 |\n+--------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var s=t(667294);let a={},i=s.createContext(a);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);