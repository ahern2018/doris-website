"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["465921"],{849053:function(e,n,s){s.r(n),s.d(n,{metadata:()=>l,contentTitle:()=>r,default:()=>u,assets:()=>c,toc:()=>a,frontMatter:()=>o});var l=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/multi-search-all-positions","title":"MULTI_SEARCH_ALL_POSITIONS","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/string-functions/multi-search-all-positions.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/multi-search-all-positions","permalink":"/docs/sql-manual/sql-functions/scalar-functions/string-functions/multi-search-all-positions","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"MULTI_SEARCH_ALL_POSITIONS","language":"en"},"sidebar":"docs","previous":{"title":"RANDOM_BYTES","permalink":"/docs/sql-manual/sql-functions/scalar-functions/string-functions/random_bytes"},"next":{"title":"MULTI_MATCH_ANY","permalink":"/docs/sql-manual/sql-functions/scalar-functions/string-functions/multi-match-any"}}'),t=s("785893"),i=s("250065");let o={title:"MULTI_SEARCH_ALL_POSITIONS",language:"en"},r=void 0,c={},a=[{value:"multi_search_all_positions",id:"multi_search_all_positions",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"multi_search_all_positions",children:"multi_search_all_positions"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"ARRAY<INT> multi_search_all_positions(VARCHAR haystack, ARRAY<VARCHAR> needles)"})}),"\n",(0,t.jsxs)(n.p,{children:["Returns an ",(0,t.jsx)(n.code,{children:"ARRAY"})," where the ",(0,t.jsx)(n.code,{children:"i"}),"-th element is the position of the ",(0,t.jsx)(n.code,{children:"i"}),"-th element in ",(0,t.jsx)(n.code,{children:"needles"}),"(i.e. ",(0,t.jsx)(n.code,{children:"needle"}),")'s ",(0,t.jsx)(n.strong,{children:"first"})," occurrence in the string ",(0,t.jsx)(n.code,{children:"haystack"}),". Positions are counted from 1, with 0 meaning the element was not found. ",(0,t.jsx)(n.strong,{children:"Case-sensitive"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"mysql> select multi_search_all_positions('Hello, World!', ['hello', '!', 'world']);\n+----------------------------------------------------------------------+\n| multi_search_all_positions('Hello, World!', ['hello', '!', 'world']) |\n+----------------------------------------------------------------------+\n| [0,13,0]                                                             |\n+----------------------------------------------------------------------+\n\nselect multi_search_all_positions(\"Hello, World!\", ['hello', '!', 'world', 'Hello', 'World']);\n+---------------------------------------------------------------------------------------------+\n| multi_search_all_positions('Hello, World!', ARRAY('hello', '!', 'world', 'Hello', 'World')) |\n+---------------------------------------------------------------------------------------------+\n| [0, 13, 0, 1, 8]                                                                            |\n+---------------------------------------------------------------------------------------------+\n"})}),"\n",(0,t.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"MULTI_SEARCH,SEARCH,POSITIONS\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return o}});var l=s(667294);let t={},i=l.createContext(t);function o(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);