"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["223358"],{573579:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>r,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>a});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/json-functions/json-valid","title":"JSON_VALID","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/json-functions/json-valid.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/json-functions","slug":"/sql-manual/sql-functions/scalar-functions/json-functions/json-valid","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/json-functions/json-valid","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"JSON_VALID","language":"en"},"sidebar":"docs","previous":{"title":"JSON_UNQUOTE","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/json-functions/json-unquote"},"next":{"title":"JSON_CONTAINS","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/json-functions/json-contains"}}'),l=s("785893"),i=s("250065");let a={title:"JSON_VALID",language:"en"},r=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Alias",id:"alias",level:2},{value:"Examples",id:"examples",level:2}];function d(n){let e={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(e.p,{children:"The JSON_VALID function returns 0 or 1 to indicate whether the input is a valid JSON. If the input is NULL, it returns NULL."}),"\n",(0,l.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"JSON_VALID( <str> )\n\n"})}),"\n",(0,l.jsx)(e.p,{children:"Required Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"Parameter"}),(0,l.jsx)(e.th,{children:"Description"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<str>"})}),(0,l.jsx)(e.td,{children:"The input string in JSON format to be parsed."})]})})]}),"\n",(0,l.jsx)(e.h2,{id:"alias",children:"Alias"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"JSONB_VALID"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"Valid JSON string"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:'SELECT json_valid(\'{"k1":"v31","k2":300}\');\n+-------------------------------------+\n| json_valid(\'{"k1":"v31","k2":300}\') |\n+-------------------------------------+\n|                                   1 |\n+-------------------------------------+\n\n'})}),"\n",(0,l.jsxs)(e.ol,{start:"2",children:["\n",(0,l.jsx)(e.li,{children:"Invalid JSON string"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT json_valid('invalid json');\n+----------------------------+\n| json_valid('invalid json') |\n+----------------------------+\n|                          0 |\n+----------------------------+\n\n"})}),"\n",(0,l.jsxs)(e.ol,{start:"3",children:["\n",(0,l.jsx)(e.li,{children:"NULL\u53C2\u6570"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT json_valid(NULL);\n+------------------+\n| json_valid(NULL) |\n+------------------+\n|             NULL |\n+------------------+\n\n"})})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return r},a:function(){return a}});var t=s(667294);let l={},i=t.createContext(l);function a(n){let e=t.useContext(i);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:a(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);