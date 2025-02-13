"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["117938"],{828977:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>o,assets:()=>c,toc:()=>d,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/numeric-functions/negative","title":"NEGATIVE","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/numeric-functions/negative.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/numeric-functions","slug":"/sql-manual/sql-functions/scalar-functions/numeric-functions/negative","permalink":"/docs/sql-manual/sql-functions/scalar-functions/numeric-functions/negative","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"NEGATIVE","language":"en"},"sidebar":"docs","previous":{"title":"POSITIVE","permalink":"/docs/sql-manual/sql-functions/scalar-functions/numeric-functions/positive"},"next":{"title":"RANDOM","permalink":"/docs/sql-manual/sql-functions/scalar-functions/numeric-functions/random"}}'),a=t("785893"),l=t("250065");let i={title:"NEGATIVE",language:"en"},r=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function u(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Returns the negative value of the parameter x."}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"NEGATIVE(<x>)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<x>"})}),(0,a.jsxs)(n.td,{children:["The independent variable supports the types ",(0,a.jsx)(n.code,{children:"BIGINT, DOUBLE, and DECIMAL"})]})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,a.jsx)(n.p,{children:"Returns an integer or a floating-point number. Special cases:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"If the parameter is NULL, return NULL."}),"\n",(0,a.jsx)(n.li,{children:"If the parameter is 0, return 0."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT negative(-10);\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+---------------+\n| negative(-10) |\n+---------------+\n|            10 |\n+---------------+\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT negative(12);\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+--------------+\n| negative(12) |\n+--------------+\n|          -12 |\n+--------------+\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT negative(0);\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+-------------+\n| negative(0) |\n+-------------+\n|           0 |\n+-------------+\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT negative(null);\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+----------------+\n| negative(NULL) |\n+----------------+\n|           NULL |\n+----------------+\n"})})]})}function o(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(667294);let a={},l=s.createContext(a);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);