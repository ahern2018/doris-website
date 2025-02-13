"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["589223"],{501410:function(n,e,s){s.r(e),s.d(e,{metadata:()=>l,contentTitle:()=>r,default:()=>d,assets:()=>c,toc:()=>i,frontMatter:()=>o});var l=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/json-functions/json-quote","title":"JSON_QUOTE","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/json-functions/json-quote.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/json-functions","slug":"/sql-manual/sql-functions/scalar-functions/json-functions/json-quote","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/json-functions/json-quote","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"JSON_QUOTE","language":"en"},"sidebar":"docs","previous":{"title":"JSON_OBJECT","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/json-functions/json-object"},"next":{"title":"JSON_UNQUOTE","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/json-functions/json-unquote"}}'),t=s("785893"),a=s("250065");let o={title:"JSON_QUOTE",language:"en"},r=void 0,c={},i=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(e.p,{children:'Enclose json_value in double quotes ("), escape special characters contained.'}),"\n",(0,t.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"JSON_QUOTE (<a>)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Parameter"}),(0,t.jsx)(e.th,{children:"Description"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<a>"})}),(0,t.jsx)(e.td,{children:"The value of the json_value to be enclosed."})]})})]}),"\n",(0,t.jsx)(e.h2,{id:"return-values",children:"Return Values"}),"\n",(0,t.jsx)(e.p,{children:"Return a json_value. Special cases are as follows:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"If the passed parameter is NULL, return NULL."}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SELECT json_quote('null'), json_quote('\"null\"');\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:'+--------------------+----------------------+\n| json_quote(\'null\') | json_quote(\'"null"\') |\n+--------------------+----------------------+\n| "null"             | "\\"null\\""           |\n+--------------------+----------------------+\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SELECT json_quote('[1, 2, 3]');\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+-------------------------+\n| json_quote('[1, 2, 3]') |\n+-------------------------+\n| \"[1, 2, 3]\"             |\n+-------------------------+\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SELECT json_quote(null);\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+------------------+\n| json_quote(null) |\n+------------------+\n| NULL             |\n+------------------+\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'select json_quote("\\n\\b\\r\\t");\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+------------------------+\n| json_quote('\\n\\b\\r\\t') |\n+------------------------+\n| \"\\n\\b\\r\\t\"             |\n+------------------------+\n"})})]})}function d(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return r},a:function(){return o}});var l=s(667294);let t={},a=l.createContext(t);function o(n){let e=l.useContext(a);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),l.createElement(a.Provider,{value:e},n.children)}}}]);