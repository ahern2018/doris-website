"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["871877"],{215585:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>a,default:()=>u,assets:()=>l,toc:()=>o,frontMatter:()=>c});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/concat-ws","title":"CONCAT_WS","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/string-functions/concat-ws.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/concat-ws","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/concat-ws","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"CONCAT_WS","language":"en"},"sidebar":"docs","previous":{"title":"CONCAT","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/concat"},"next":{"title":"SUBSTRING","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/substring"}}'),r=s("785893"),i=s("250065");let c={title:"CONCAT_WS",language:"en"},a=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(e.p,{children:"Use the first parameter sep as the connector to concatenate the second parameter and all subsequent parameters (or all strings in ARRAY) into a string. Special cases:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"If the separator is NULL, NULL is returned."}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.code,{children:"CONCAT_WS"})," function does not skip empty strings, but skips NULL values."]}),"\n",(0,r.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"CONCAT_WS ( <sep> , <str> [ , <str> ] )\nCONCAT_WS ( <sep> , <array> )\n"})}),"\n",(0,r.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Parameter"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<sep>"})}),(0,r.jsx)(e.td,{children:"Connector for concatenating strings"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<str>"})}),(0,r.jsx)(e.td,{children:"String to be concatenated"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<array>"})}),(0,r.jsx)(e.td,{children:"Array to be concatenated"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"return-value",children:"Return value"}),"\n",(0,r.jsxs)(e.p,{children:["Parameter ",(0,r.jsx)(e.code,{children:"<sep>"})," or ",(0,r.jsx)(e.code,{children:"<array>"})," The string concatenated with ",(0,r.jsx)(e.code,{children:"<str>"}),". Special cases:"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"If delimiter is NULL, returns NULL."}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(e.p,{children:"Concatenate strings together using or"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'SELECT CONCAT_WS("or", "d", "is"),CONCAT_WS(NULL, "d", "is"),CONCAT_WS(\'or\', \'d\', NULL, \'is\')\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+----------------------------+----------------------------+------------------------------------------+\n| concat_ws('or', 'd', 'is') | concat_ws(NULL, 'd', 'is') | concat_ws('or', 'd', NULL, 'is') |\n+----------------------------+----------------------------+------------------------------------------+\n| doris                      | NULL                       | doris                              |\n+----------------------------+----------------------------+------------------------------------------+\n"})}),"\n",(0,r.jsx)(e.p,{children:"Concatenate array arrays together using or"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'SELECT CONCAT_WS("or", ["d", "is"]),CONCAT_WS(NULL, ["d", "is"]),CONCAT_WS("or", ["d", NULL,"is"])\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+------------------------------+------------------------------+------------------------------------+\n| concat_ws('or', ['d', 'is']) | concat_ws(NULL, ['d', 'is']) | concat_ws('or', ['d', NULL, 'is']) |\n+------------------------------+------------------------------+------------------------------------+\n| doris                        | NULL                         | doris                              |\n+------------------------------+------------------------------+------------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return a},a:function(){return c}});var t=s(667294);let r={},i=t.createContext(r);function c(n){let e=t.useContext(i);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);