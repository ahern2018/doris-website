"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["550673"],{438771:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>d,assets:()=>c,toc:()=>o,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/null-or-empty","title":"NULL_OR_EMPTY","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/string-functions/null-or-empty.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/null-or-empty","permalink":"/docs/2.0/sql-manual/sql-functions/string-functions/null-or-empty","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"NULL_OR_EMPTY","language":"en"},"sidebar":"docs","previous":{"title":"RTRIM","permalink":"/docs/2.0/sql-manual/sql-functions/string-functions/rtrim"},"next":{"title":"NOT_NULL_OR_EMPTY","permalink":"/docs/2.0/sql-manual/sql-functions/string-functions/not-null-or-empty"}}'),l=t("785893"),r=t("250065");let i={title:"NULL_OR_EMPTY",language:"en"},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function u(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"null_or_empty"})," function checks if the given value is NULL or an empty string. It returns true if the input value is NULL or an empty string, otherwise, it returns false."]}),"\n",(0,l.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"NULL_OR_EMPTY (<str>)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parameter"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<str>"})}),(0,l.jsx)(n.td,{children:"The string to check."})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,l.jsx)(n.p,{children:"Returns true if the string is an empty string or NULL, otherwise returns false."}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"select null_or_empty(null);\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+---------------------+\n| null_or_empty(NULL) |\n+---------------------+\n|                   1 |\n+---------------------+\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'select null_or_empty("");\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+-------------------+\n| null_or_empty('') |\n+-------------------+\n|                 1 |\n+-------------------+\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'select null_or_empty("a");\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+--------------------+\n| null_or_empty('a') |\n+--------------------+\n|                  0 |\n+--------------------+\n"})})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var s=t(667294);let l={},r=s.createContext(l);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);