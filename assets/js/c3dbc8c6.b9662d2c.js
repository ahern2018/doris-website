"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["809535"],{99036:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>c,default:()=>u,assets:()=>a,toc:()=>o,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/find-in-set","title":"FIND_IN_SET","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/string-functions/find-in-set.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/find-in-set","permalink":"/docs/sql-manual/sql-functions/scalar-functions/string-functions/find-in-set","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"FIND_IN_SET","language":"en"},"sidebar":"docs","previous":{"title":"LEFT","permalink":"/docs/sql-manual/sql-functions/scalar-functions/string-functions/left"},"next":{"title":"REPLACE","permalink":"/docs/sql-manual/sql-functions/scalar-functions/string-functions/replace"}}'),r=s("785893"),i=s("250065");let l={title:"FIND_IN_SET",language:"en"},c=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(e.p,{children:"Returns the position of the first occurrence of str in strlist (counting starts at 1)."}),"\n",(0,r.jsx)(e.p,{children:"strlist is a comma-delimited string. Special cases:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"If not found, returns 0."}),"\n",(0,r.jsx)(e.li,{children:"If any parameter is NULL, returns NULL."}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"FIND_IN_SET ( <str> , <strlist> )\n"})}),"\n",(0,r.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Parameter"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<str>"})}),(0,r.jsx)(e.td,{children:"String to be searched"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<strlist>"})}),(0,r.jsx)(e.td,{children:"String to be searched"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"return-value",children:"Return value"}),"\n",(0,r.jsxs)(e.p,{children:["The position of the first occurrence of parameter ",(0,r.jsx)(e.code,{children:"<str>"})," in parameter ",(0,r.jsx)(e.code,{children:"<strlist>"}),". Special cases:"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"If not found, returns 0."}),"\n",(0,r.jsx)(e.li,{children:"If any parameter is NULL, returns NULL."}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'SELECT FIND_IN_SET("b", "a,b,c")\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"| find_in_set('b', 'a,b,c') |\n+---------------------------+\n|                         2 |\n+---------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return l}});var t=s(667294);let r={},i=t.createContext(r);function l(n){let e=t.useContext(i);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);