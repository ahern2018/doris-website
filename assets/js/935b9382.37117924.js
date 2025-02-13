"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["35661"],{454457:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>i,default:()=>d,assets:()=>o,toc:()=>c,frontMatter:()=>a});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/json-functions/json-parse-notnull-error-to-invalid","title":"JSON_PARSE_NOTNULL_ERROR_TO_INVALID","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/json-functions/json-parse-notnull-error-to-invalid.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/json-functions","slug":"/sql-manual/sql-functions/scalar-functions/json-functions/json-parse-notnull-error-to-invalid","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/json-functions/json-parse-notnull-error-to-invalid","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"JSON_PARSE_NOTNULL_ERROR_TO_INVALID","language":"en"},"sidebar":"docs","previous":{"title":"json_parse_notnull","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/json-functions/json-parse-notnull"},"next":{"title":"JSON_PARSE_NOTNULL_ERROR_TO_VALUE","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/json-functions/json-parse-notnull-error-to-value"}}'),r=s("785893"),l=s("250065");let a={title:"JSON_PARSE_NOTNULL_ERROR_TO_INVALID",language:"en"},i=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Aliases",id:"aliases",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function u(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(e.p,{children:["This function is used to parse a JSON string. If the JSON string is malformed or a parsing error occurs, the function will return an invalid JSON object (usually ",(0,r.jsx)(e.code,{children:"{}"}),"). The main purpose of this function is to ensure that when a JSON format error occurs, a safe default value is returned, preventing query failures due to parsing errors."]}),"\n",(0,r.jsx)(e.h2,{id:"aliases",children:"Aliases"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"JSONB_PARSE_NOTNULL_ERROR_TO_INVALID"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"JSON_PARSE_NOTNULL_ERROR_TO_INVALID( <str> )\n"})}),"\n",(0,r.jsx)(e.h2,{id:"required-parameters",children:"Required Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"parameters"}),(0,r.jsx)(e.th,{children:"described"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<str>"})}),(0,r.jsx)(e.td,{children:"The JSON string to be parsed. This parameter should be a valid string containing JSON-formatted data. If the JSON format is invalid, the function will return an invalid JSON object."})]})})]}),"\n",(0,r.jsx)(e.h2,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsxs)(e.p,{children:["Returns an invalid JSON object (usually ",(0,r.jsx)(e.code,{children:"{}"}),")."]}),"\n",(0,r.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'\nSELECT JSON_PARSE_NOTNULL_ERROR_TO_INVALID(\'{"name": "Alice", "age": 30}\') AS parsed_json;\n\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'+---------------------------+\n| parsed_json               |\n+---------------------------+\n| {"name":"Alice","age":30} |\n+---------------------------+\n\n'})})]})}function d(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return a}});var t=s(667294);let r={},l=t.createContext(r);function a(n){let e=t.useContext(l);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);