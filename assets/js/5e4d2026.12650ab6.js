"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["793262"],{505501:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>i,default:()=>d,assets:()=>c,toc:()=>o,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/char-length","title":"CHAR_LENGTH","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/string-functions/char-length.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/char-length","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/char-length","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"CHAR_LENGTH","language":"en"},"sidebar":"docs","previous":{"title":"DOMAIN_WITHOUT_WWW","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/domain-without-www"},"next":{"title":"LPAD","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/lpad"}}'),l=t("785893"),r=t("250065");let a={title:"CHAR_LENGTH",language:"en"},i=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Alias",id:"alias",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function u(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",str:"str",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(e.p,{children:"Calculates the length of a string. For multi-byte characters, returns the number of characters."}),"\n",(0,l.jsxs)(e.p,{children:["Currently only supports ",(0,l.jsx)(e.code,{children:"utf8"})," encoding"]}),"\n",(0,l.jsx)(e.h2,{id:"alias",children:"Alias"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"CHARACTER_LENGTH"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"CHAR_LENGTH ( <str> )\n"})}),"\n",(0,l.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"Parameter"}),(0,l.jsx)(e.th,{children:"Description"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<str>"})}),(0,l.jsx)(e.td,{children:"The string to calculate the length of"})]})})]}),"\n",(0,l.jsx)(e.h2,{id:"return-value",children:"Return value"}),"\n",(0,l.jsxs)(e.p,{children:["The length of the string ",(0,l.jsx)(e.str,{children:"."})]}),"\n",(0,l.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:'select CHAR_LENGTH("abc"),CHAR_LENGTH("\u4E2D\u56FD")\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+-------------------------+----------------------------+\n| character_length('abc') | character_length('\u4E2D\u56FD')   |\n+-------------------------+----------------------------+\n|                       3 |                          2 |\n+-------------------------+----------------------------+\n"})})]})}function d(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return i},a:function(){return a}});var s=t(667294);let l={},r=s.createContext(l);function a(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:a(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);