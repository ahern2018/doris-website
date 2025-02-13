"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["417769"],{877877:function(e,n,a){a.r(n),a.d(n,{metadata:()=>r,contentTitle:()=>i,default:()=>d,assets:()=>c,toc:()=>o,frontMatter:()=>l});var r=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/array-functions/array-popback","title":"ARRAY_POPBACK","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/array-functions/array-popback.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/array-functions","slug":"/sql-manual/sql-functions/scalar-functions/array-functions/array-popback","permalink":"/docs/sql-manual/sql-functions/scalar-functions/array-functions/array-popback","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ARRAY_POPBACK","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_ENUMERATE_UNIQ","permalink":"/docs/sql-manual/sql-functions/scalar-functions/array-functions/array-enumerate-uniq"},"next":{"title":"ARRAY_POPFRONT","permalink":"/docs/sql-manual/sql-functions/scalar-functions/array-functions/array-popfront"}}'),t=a("785893"),s=a("250065");let l={title:"ARRAY_POPBACK",language:"en"},i=void 0,c={},o=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"example",id:"example",level:2}];function u(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"description",children:"description"}),"\n",(0,t.jsx)(n.p,{children:"Remove the last element from array."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ARRAY_POPBACK(<arr>)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"<arr>"})}),(0,t.jsx)(n.td,{children:"ARRAY array"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,t.jsx)(n.p,{children:"Returns the array after removing the last element. Special cases:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If the input parameter is NULL, returns NULL."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select array_popback(['test', NULL, 'value']);\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+-----------------------------------------------------+\n| array_popback(ARRAY('test', NULL, 'value'))         |\n+-----------------------------------------------------+\n| [\"test\", NULL]                                        |\n+-----------------------------------------------------+\n"})})]})}function d(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return i},a:function(){return l}});var r=a(667294);let t={},s=r.createContext(t);function l(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);