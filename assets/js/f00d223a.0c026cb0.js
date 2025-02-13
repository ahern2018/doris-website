"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["96842"],{349263:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>c,default:()=>d,assets:()=>i,toc:()=>o,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/concat","title":"CONCAT","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/string-functions/concat.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/concat","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/concat","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"CONCAT","language":"en"},"sidebar":"docs","previous":{"title":"CHAR","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/char"},"next":{"title":"CONCAT_WS","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/concat-ws"}}'),a=t("785893"),r=t("250065");let l={title:"CONCAT",language:"en"},c=void 0,i={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function u(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(e.p,{children:"Concatenates multiple strings. Special cases:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"If any of the parameter values \u200B\u200Bis NULL, the result returned is NULL"}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"CONCAT ( <expr> [ , <expr> ... ] )\n"})}),"\n",(0,a.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"Parameter"}),(0,a.jsx)(e.th,{children:"Description"})]})}),(0,a.jsx)(e.tbody,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"<expr>"})}),(0,a.jsx)(e.td,{children:"The strings to be concatenated"})]})})]}),"\n",(0,a.jsx)(e.h2,{id:"return-value",children:"Return value"}),"\n",(0,a.jsxs)(e.p,{children:["Parameter list ",(0,a.jsx)(e.code,{children:"<expr>"})," The strings to be concatenated. Special cases:"]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"If any of the parameter values \u200B\u200Bis NULL, the result returned is NULL"}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'SELECT  CONCAT("a", "b"),CONCAT("a", "b", "c"),CONCAT("a", null, "c")\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:"+------------------+-----------------------+------------------------+\n| concat('a', 'b') | concat('a', 'b', 'c') | concat('a', NULL, 'c') |\n+------------------+-----------------------+------------------------+\n| ab               | abc                   | NULL                   |\n+------------------+-----------------------+------------------------+\n"})})]})}function d(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return l}});var s=t(667294);let a={},r=s.createContext(a);function l(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);