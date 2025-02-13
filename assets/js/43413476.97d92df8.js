"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["831797"],{963398:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>l,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>a});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/json-functions/json-insert","title":"JSON_INSERT","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/json-functions/json-insert.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/json-functions","slug":"/sql-manual/sql-functions/scalar-functions/json-functions/json-insert","permalink":"/docs/sql-manual/sql-functions/scalar-functions/json-functions/json-insert","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"JSON_INSERT","language":"en"},"sidebar":"docs","previous":{"title":"GET_JSON_STRING","permalink":"/docs/sql-manual/sql-functions/scalar-functions/json-functions/get-json-string"},"next":{"title":"JSON_REPLACE","permalink":"/docs/sql-manual/sql-functions/scalar-functions/json-functions/json-replace"}}'),i=s("785893"),r=s("250065");let a={title:"JSON_INSERT",language:"en"},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:3}];function d(n){let e={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(e.p,{children:"The JSON_INSERT function is used to insert data into JSON and return the result."}),"\n",(0,i.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"JSON_INSERT (<json_str>, <path>,  <val>[, <path>,  <val>, ...])\n"})}),"\n",(0,i.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Parameter"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<json_str>"})}),(0,i.jsx)(e.td,{children:"The JSON object to be inserted. It can be a JSON object with elements of any type, including NULL. If no elements are specified, an empty array is returned. If json_str is not a valid JSON or any path parameter is not a valid path expression or contains a * wildcard, an error is returned."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<path>"})}),(0,i.jsx)(e.td,{children:"The JSON path to be inserted. If it is NULL, then return NULL."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<val>"})}),(0,i.jsx)(e.td,{children:"The value to be inserted into the JSON. If it is NULL, then a NULL value will be inserted at the corresponding position."})]})]})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"json_insert"})," function inserts data in a JSON and returns the result.Returns NULL if ",(0,i.jsx)(e.code,{children:"json_str"})," or ",(0,i.jsx)(e.code,{children:"path"})," is NULL. Otherwise, an error occurs if the ",(0,i.jsx)(e.code,{children:"json_str"})," argument is not a valid JSON or any path argument is not a valid path expression or contains a * wildcard."]}),"\n",(0,i.jsx)(e.p,{children:"The path-value pairs are evaluated left to right."}),"\n",(0,i.jsx)(e.p,{children:"A path-value pair for a nonexisting path in the json adds the value to the json if the path identifies one of these types of values:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"A member not present in an existing object. The member is added to the object and associated with the new value."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"A position past the end of an existing array. The array is extended with the new value. If the existing value is not an array, it is autowrapped as an array, then extended with the new value."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Otherwise, a path-value pair for a nonexisting path in the json is ignored and has no effect."}),"\n",(0,i.jsx)(e.h2,{id:"return-values",children:"Return Values"}),"\n",(0,i.jsx)(e.p,{children:"Returns a JSON value."}),"\n",(0,i.jsx)(e.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select json_insert(null, null, null);\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+---------------------------------+\n| json_insert(NULL, NULL, 'NULL') |\n+---------------------------------+\n| NULL                            |\n+---------------------------------+\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'select json_insert(\'{"k": 1}\', "$.k", 2);\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+---------------------------------------+\n| json_insert('{\\\"k\\\": 1}', '$.k', '2') |\n+---------------------------------------+\n| {\"k\":1}                               |\n+---------------------------------------+\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'select json_insert(\'{"k": 1}\', "$.j", 2);\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+---------------------------------------+\n| json_insert('{\\\"k\\\": 1}', '$.j', '2') |\n+---------------------------------------+\n| {\"k\":1,\"j\":2}                         |\n+---------------------------------------+\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'select json_insert(\'{"k": 1}\', "$.j", null);\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+-----------------------------------------------+\n| json_insert('{\"k\": 1}', '$.j', 'NULL', '660') |\n+-----------------------------------------------+\n| {\"k\":1,\"j\":null}                              |\n+-----------------------------------------------+\n"})})]})}function h(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return l},a:function(){return a}});var t=s(667294);let i={},r=t.createContext(i);function a(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);