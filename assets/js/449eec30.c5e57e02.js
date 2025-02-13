"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["321052"],{444685:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>i,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>l});var a=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/array-agg","title":"ARRAY_AGG","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/aggregate-functions/array-agg.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/array-agg","permalink":"/docs/dev/sql-manual/sql-functions/aggregate-functions/array-agg","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ARRAY_AGG","language":"en"},"sidebar":"docs","previous":{"title":"ANY_VALUE","permalink":"/docs/dev/sql-manual/sql-functions/aggregate-functions/any-value"},"next":{"title":"MAP_AGG","permalink":"/docs/dev/sql-manual/sql-functions/aggregate-functions/map-agg"}}'),r=t("785893"),s=t("250065");let l={title:"ARRAY_AGG",language:"en"},i=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Concatenates the values (including null values) in a column into an array, which can be used for pivoting rows into columns."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"ARRAY_AGG(<col>)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<col>"})}),(0,r.jsx)(n.td,{children:"An expression that determines the values to be placed into the array (usually column names)."})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsx)(n.p,{children:"Returns a value of ARRAY type.Special cases:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The order of elements in the array is not guaranteed."}),"\n",(0,r.jsx)(n.li,{children:"Returns the array generated by the conversion. The element type in the array is consistent with the type of col."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"select * from test_doris_array_agg;\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+------+------+\n\n| c1   | c2   |\n\n+------+------+\n\n|    1 | a    |\n\n|    1 | b    |\n\n|    2 | c    |\n\n|    2 | NULL |\n\n|    3 | NULL |\n\n+------+------+\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"select c1, array_agg(c2) from test_doris_array_agg group by c1;\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'+------+-----------------+\n\n| c1   | array_agg(`c2`) |\n\n+------+-----------------+\n\n|    1 | ["a","b"]       |\n\n|    2 | [NULL,"c"]      |\n\n|    3 | [NULL]          |\n\n+------+-----------------+\n'})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var a=t(667294);let r={},s=a.createContext(r);function l(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);