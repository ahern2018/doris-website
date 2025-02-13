"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["719907"],{717714:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>c,default:()=>d,assets:()=>r,toc:()=>o,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/multi-match-any","title":"MULTI_MATCH_ANY","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/string-functions/multi-match-any.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/multi-match-any","permalink":"/docs/sql-manual/sql-functions/scalar-functions/string-functions/multi-match-any","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"MULTI_MATCH_ANY","language":"en"},"sidebar":"docs","previous":{"title":"MULTI_SEARCH_ALL_POSITIONS","permalink":"/docs/sql-manual/sql-functions/scalar-functions/string-functions/multi-search-all-positions"},"next":{"title":"MASK","permalink":"/docs/sql-manual/sql-functions/scalar-functions/string-functions/mask"}}'),l=t("785893"),i=t("250065");let a={title:"MULTI_MATCH_ANY",language:"en"},c=void 0,r={},o=[{value:"multi_match_any",id:"multi_match_any",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"multi_match_any",children:"multi_match_any"}),"\n",(0,l.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,l.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.code,{children:"TINYINT multi_match_any(VARCHAR haystack, ARRAY<VARCHAR> patterns)"})}),"\n",(0,l.jsxs)(e.p,{children:["Checks whether the string ",(0,l.jsx)(e.code,{children:"haystack"})," matches the regular expressions ",(0,l.jsx)(e.code,{children:"patterns"})," in re2 syntax. returns 0 if none of the regular expressions are matched and 1 if any of the patterns matches."]}),"\n",(0,l.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"mysql> select multi_match_any('Hello, World!', ['hello', '!', 'world']);\n+-----------------------------------------------------------+\n| multi_match_any('Hello, World!', ['hello', '!', 'world']) |\n+-----------------------------------------------------------+\n| 1                                                         |\n+-----------------------------------------------------------+\n\nmysql> select multi_match_any('abc', ['A', 'bcd']);\n+--------------------------------------+\n| multi_match_any('abc', ['A', 'bcd']) |\n+--------------------------------------+\n| 0                                    |\n+--------------------------------------+\n"})}),"\n",(0,l.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"MULTI_MATCH,MATCH,ANY\n"})})]})}function d(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return a}});var s=t(667294);let l={},i=s.createContext(l);function a(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:a(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);