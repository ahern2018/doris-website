"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["634973"],{341329:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>d,assets:()=>c,toc:()=>o,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/array-functions/array-popfront","title":"ARRAY_POPFRONT","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/array-functions/array-popfront.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/array-functions","slug":"/sql-manual/sql-functions/scalar-functions/array-functions/array-popfront","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/array-functions/array-popfront","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ARRAY_POPFRONT","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_POPBACK","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/array-functions/array-popback"},"next":{"title":"ARRAY_PUSHFRONT","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/array-functions/array-pushfront"}}'),a=r("785893"),s=r("250065");let l={title:"ARRAY_POPFRONT",language:"en"},i=void 0,c={},o=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"example",id:"example",level:2}];function u(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"description"}),"\n",(0,a.jsx)(n.p,{children:"Remove the first element from array."}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ARRAY_POPFRONT(<arr>)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<arr>"})}),(0,a.jsx)(n.td,{children:"ARRAY array"})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,a.jsx)(n.p,{children:"Returns the array after removing the first element. Special cases:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"If the input parameter is NULL, returns NULL."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select array_popfront(['test', NULL, 'value']);\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+-----------------------------------------------------+\n| array_popfront(ARRAY('test', NULL, 'value'))        |\n+-----------------------------------------------------+\n| [NULL, \"value\"]                                       |\n+-----------------------------------------------------+\n"})})]})}function d(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return l}});var t=r(667294);let a={},s=t.createContext(a);function l(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);