"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["361818"],{94489:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>i,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>l});var a=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/array-functions/array-repeat","title":"ARRAY_REPEAT","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-repeat.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/array-functions","slug":"/sql-manual/sql-functions/scalar-functions/array-functions/array-repeat","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-repeat","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ARRAY_REPEAT","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_MATCH_ANY","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-match-any"},"next":{"title":"COUNTEQUAL","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/countequal"}}'),r=t("785893"),s=t("250065");let l={title:"ARRAY_REPEAT",language:"en"},i=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Generates an array containing n repeated elements"}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"ARRAY_REPEAT(<element>, <n>)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<n>"})}),(0,r.jsx)(n.td,{children:"Number of digits"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<element>"})}),(0,r.jsx)(n.td,{children:"Specifying Elements"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsx)(n.p,{children:"Returns an array containing n repeated elements. array_with_constant has the same function as array_repeat and is used to be compatible with the hive syntax format."}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'SELECT ARRAY_REPEAT("hello", 2),ARRAY_REPEAT(12345, 3);\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'+--------------------------+------------------------+\n| array_repeat(\'hello\', 2) | array_repeat(12345, 3) |\n+--------------------------+------------------------+\n| ["hello", "hello"]       | [12345, 12345, 12345]  |\n+--------------------------+------------------------+\n'})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var a=t(667294);let r={},s=a.createContext(r);function l(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);