"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["86293"],{72887:function(n,e,r){r.r(e),r.d(e,{metadata:()=>a,contentTitle:()=>c,default:()=>u,assets:()=>i,toc:()=>d,frontMatter:()=>l});var a=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/array-functions/array-apply","title":"ARRAY_APPLY","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/array-functions/array-apply.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/array-functions","slug":"/sql-manual/sql-functions/scalar-functions/array-functions/array-apply","permalink":"/docs/sql-manual/sql-functions/scalar-functions/array-functions/array-apply","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ARRAY_APPLY","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_COUNT","permalink":"/docs/sql-manual/sql-functions/scalar-functions/array-functions/array-count"},"next":{"title":"ARRAY_REPEAT","permalink":"/docs/sql-manual/sql-functions/scalar-functions/array-functions/array-repeat"}}'),s=r("785893"),t=r("250065");let l={title:"ARRAY_APPLY",language:"en"},c=void 0,i={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function o(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.p,{children:"Filter array to match specific binary condition"}),"\n",(0,s.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"ARRAY_APPLY(<arr>, <op>, <val>)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Parameter"}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"<arr>"})}),(0,s.jsx)(e.td,{children:"Input array"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"<op>"})}),(0,s.jsxs)(e.td,{children:["Filter condition, including ",(0,s.jsx)(e.code,{children:"="}),", ",(0,s.jsx)(e.code,{children:">="}),", ",(0,s.jsx)(e.code,{children:"<="}),", ",(0,s.jsx)(e.code,{children:">"}),", ",(0,s.jsx)(e.code,{children:"<"}),", ",(0,s.jsx)(e.code,{children:"!="})]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"<val>"})}),(0,s.jsxs)(e.td,{children:["Filter value. If ",(0,s.jsx)(e.code,{children:"null"}),", the result will be ",(0,s.jsx)(e.code,{children:"null"}),". Only constant values are supported."]})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"return-value",children:"Return Value"}),"\n",(0,s.jsx)(e.p,{children:"The filtered array matched with condition."}),"\n",(0,s.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'select array_apply([1, 2, 3, 4, 5], ">=", 2);\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"+--------------------------------------------+\n| array_apply(ARRAY(1, 2, 3, 4, 5), '>=', 2) |\n+--------------------------------------------+\n| [2, 3, 4, 5]                               |\n+--------------------------------------------+\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'select array_apply([1000000, 1000001, 1000002], "=", "1000002");\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"+-------------------------------------------------------------+\n| array_apply(ARRAY(1000000, 1000001, 1000002), '=', 1000002) |\n+-------------------------------------------------------------+\n| [1000002]                                                   |\n+-------------------------------------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return c},a:function(){return l}});var a=r(667294);let s={},t=a.createContext(s);function l(n){let e=a.useContext(t);return a.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),a.createElement(t.Provider,{value:e},n.children)}}}]);