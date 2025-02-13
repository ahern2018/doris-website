"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["129668"],{247573:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>d,assets:()=>c,toc:()=>u,frontMatter:()=>a});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/murmur-hash3-32","title":"MURMUR_HASH3_32","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/murmur-hash3-32.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/encrypt-digest-functions","slug":"/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/murmur-hash3-32","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/murmur-hash3-32","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"MURMUR_HASH3_32","language":"en"},"sidebar":"docs","previous":{"title":"SHA2","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/sha2"},"next":{"title":"MURMUR_HASH3_32","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/murmur-hash3-32"}}'),r=s("785893"),l=s("250065");let a={title:"MURMUR_HASH3_32",language:"en"},i=void 0,c={},u=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Calculate 32-bit murmur3 hash value"}),"\n",(0,r.jsxs)(n.p,{children:["-Note: When calculating hash values, it is recommended to use ",(0,r.jsx)(n.code,{children:"xxhash_32"})," instead of ",(0,r.jsx)(n.code,{children:"murmur_hash3_32"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"MURMUR_HASH3_32( <str> [ , <str> ... ] )\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"parameter"}),(0,r.jsx)(n.th,{children:"description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<str>"})}),(0,r.jsx)(n.td,{children:"The 32-bit murmur3 hash value to be calculated"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsx)(n.p,{children:"Returns the 32-bit murmur3 hash of the input string\u3002"}),"\n",(0,r.jsx)(n.p,{children:"-When the parameter is NULL, it returns NULL"}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'select murmur_hash3_32(null), murmur_hash3_32("hello"), murmur_hash3_32("hello", "world");\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+-----------------------+--------------------------+-----------------------------------+\n| murmur_hash3_32(NULL) | murmur_hash3_32('hello') | murmur_hash3_32('hello', 'world') |\n+-----------------------+--------------------------+-----------------------------------+\n|                  NULL |               1321743225 |                         984713481 |\n+-----------------------+--------------------------+-----------------------------------+\n"})})]})}function d(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return a}});var t=s(667294);let r={},l=t.createContext(r);function a(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);