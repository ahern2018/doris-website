"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["942118"],{923493:function(n,e,s){s.r(e),s.d(e,{metadata:()=>l,contentTitle:()=>a,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/json-functions/json-parse-nullable","title":"JSON_PARSE_NULLABLE","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/json-functions/json-parse-nullable.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/json-functions","slug":"/sql-manual/sql-functions/scalar-functions/json-functions/json-parse-nullable","permalink":"/docs/sql-manual/sql-functions/scalar-functions/json-functions/json-parse-nullable","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"JSON_PARSE_NULLABLE","language":"en"},"sidebar":"docs","previous":{"title":"JSON_PARSE_NOTNULL_ERROR_TO_VALUE","permalink":"/docs/sql-manual/sql-functions/scalar-functions/json-functions/json-parse-notnull-error-to-value"},"next":{"title":"JSON_PARSE_NULLABLE_ERROR_TO_INVALID","permalink":"/docs/sql-manual/sql-functions/scalar-functions/json-functions/json-parse-nullable-error-to-invalid"}}'),t=s("785893"),i=s("250065");let r={title:"JSON_PARSE_NULLABLE",language:"en"},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Alias",id:"alias",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(e.p,{children:["The ",(0,t.jsx)(e.code,{children:"JSON_PARSE_NULLABLE"})," function is used to parse a JSON string into a valid JSON object. If the input string is invalid or NULL, it returns NULL without throwing an error."]}),"\n",(0,t.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"JSON_PARSE_NULLABLE( <str> )\n\n"})}),"\n",(0,t.jsx)(e.h2,{id:"alias",children:"Alias"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"JSONB_PARSE_NULLABLE"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"required-parameters",children:"Required Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Parameter"}),(0,t.jsx)(e.th,{children:"Description"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<str>"})}),(0,t.jsx)(e.td,{children:"The input string in JSON format to be parsed."})]})})]}),"\n",(0,t.jsx)(e.h2,{id:"return-value",children:"Return Value"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"If the input string is valid JSON, it returns the corresponding JSON object."}),"\n",(0,t.jsx)(e.li,{children:"If the input string is invalid or NULL, it returns NULL."}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(e.p,{children:"1.Valid JSON string:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'SELECT JSON_PARSE_NULLABLE(\'{"name": "John", "age": 30}\');\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'+-------------------------------------------------------+\n| JSON_PARSE_NULLABLE(\'{"name": "John", "age": 30}\')    |\n+-------------------------------------------------------+\n| {"name": "John", "age": 30}                           |\n+-------------------------------------------------------+\n\n'})}),"\n",(0,t.jsx)(e.p,{children:"2.Invalid JSON string:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'SELECT JSON_PARSE_NULLABLE(\'{"name": "John", "age": }\');\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'+-------------------------------------------------------+\n| JSON_PARSE_NULLABLE(\'{"name": "John", "age": }\')      |\n+-------------------------------------------------------+\n| NULL                                                  |\n+-------------------------------------------------------+\n\n'})})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return a},a:function(){return r}});var l=s(667294);let t={},i=l.createContext(t);function r(n){let e=l.useContext(i);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),l.createElement(i.Provider,{value:e},n.children)}}}]);