"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["648959"],{989897:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>h,assets:()=>a,toc:()=>d,frontMatter:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/replace-empty","title":"REPLACE_EMPTY","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/string-functions/replace-empty.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/replace-empty","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/replace-empty","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"REPLACE_EMPTY","language":"en"},"sidebar":"docs","previous":{"title":"REPLACE","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/replace"},"next":{"title":"STRLEFT","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/strleft"}}'),r=s("785893"),l=s("250065");let i={title:"REPLACE_EMPTY",language:"en"},c=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The REPLACE_EMPTY function is used to replace a part of the characters in a string with other characters. Unlike the ",(0,r.jsx)(n.a,{href:"/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/replace",children:"REPLACE"})," function, when old is an empty string, the new string will be inserted before each character of the str string and at the end of the str string."]}),"\n",(0,r.jsx)(n.p,{children:"Apart from this, all other behaviors are exactly the same as the REPLACE() function."}),"\n",(0,r.jsxs)(n.p,{children:["This function is mainly used to be compatible with Presto and Trino, and its behavior is exactly the same as the ",(0,r.jsx)(n.code,{children:"REPLACE()"})," function in Presto and Trino."]}),"\n",(0,r.jsx)(n.p,{children:"Supported since version 2.1.5."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"REPLACE_EMPTY ( <str>, <old>, <new> )\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<str>"})}),(0,r.jsx)(n.td,{children:"The string that needs to be replaced."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<old>"})}),(0,r.jsxs)(n.td,{children:["The substring that needs to be replaced. If ",(0,r.jsx)(n.code,{children:"<old>"})," is not in ",(0,r.jsx)(n.code,{children:"<str>"}),", no replacement will be performed. If ",(0,r.jsx)(n.code,{children:"<old>"})," is an empty string, the ",(0,r.jsx)(n.code,{children:"<new>"})," string will be inserted before each character of the str string."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<new>"})}),(0,r.jsxs)(n.td,{children:["The new substring used to replace ",(0,r.jsx)(n.code,{children:"<old>"}),"."]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsx)(n.p,{children:"Returns the new string after replacing the substring. Special cases:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If any Parameter is NULL, NULL will be returned."}),"\n",(0,r.jsxs)(n.li,{children:["If ",(0,r.jsx)(n.code,{children:"<old>"})," is an empty string, the string with the ",(0,r.jsx)(n.code,{children:"<new>"})," string inserted before each character of the ",(0,r.jsx)(n.code,{children:"<str>"})," string will be returned."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT replace('hello world', 'world', 'universe');\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+---------------------------------------------+\n| replace('hello world', 'world', 'universe') |\n+---------------------------------------------+\n| hello universe                              |\n+---------------------------------------------+\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT replace_empty(\"abc\", '', 'xyz');\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+---------------------------------+\n| replace_empty('abc', '', 'xyz') |\n+---------------------------------+\n| xyzaxyzbxyzcxyz                 |\n+---------------------------------+\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'SELECT replace_empty("", "", "xyz");\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+------------------------------+\n| replace_empty('', '', 'xyz') |\n+------------------------------+\n| xyz                          |\n+------------------------------+\n"})})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var t=s(667294);let r={},l=t.createContext(r);function i(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);