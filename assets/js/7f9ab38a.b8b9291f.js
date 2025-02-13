"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["963963"],{552743:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>r});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/json-functions/json-replace","title":"JSON_REPLACE","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/json-functions/json-replace.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/json-functions","slug":"/sql-manual/sql-functions/scalar-functions/json-functions/json-replace","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/json-functions/json-replace","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"JSON_REPLACE","language":"en"},"sidebar":"docs","previous":{"title":"JSON_INSERT","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/json-functions/json-insert"},"next":{"title":"JSON_SET","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/json-functions/json-set"}}'),a=s("785893"),l=s("250065");let r={title:"JSON_REPLACE",language:"en"},i=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"The JSON_REPLACE function is used to update data in a JSON and return the result."}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"JSON_REPLACE (<json_str>, <path>, <val>[, <jsonPath>, <val>, ...])\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<json_str>"})}),(0,a.jsx)(n.td,{children:"The JSON data to be replaced. It can be a JSON object with elements of any type, including NULL. If no elements are specified, an empty array is returned. If json_str is not a valid JSON, an error will be returned."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<path>"})}),(0,a.jsx)(n.td,{children:"The JSON path to be replaced."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<val>"})}),(0,a.jsx)(n.td,{children:"The value to replace the value corresponding to the JSON_PATH Key. If it is NULL, then a NULL value will be inserted at the corresponding position."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"return-values",children:"Return Values"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"json_replace"})," function updates data in a JSON and returns the result.Returns NULL if ",(0,a.jsx)(n.code,{children:"json_str"})," or ",(0,a.jsx)(n.code,{children:"path"})," is NULL. Otherwise, an error occurs if the ",(0,a.jsx)(n.code,{children:"json_str"})," argument is not a valid JSON or any path argument is not a valid path expression or contains a * wildcard."]}),"\n",(0,a.jsx)(n.p,{children:"The path-value pairs are evaluated left to right."}),"\n",(0,a.jsx)(n.p,{children:"A path-value pair for an existing path in the json overwrites the existing json value with the new value."}),"\n",(0,a.jsx)(n.p,{children:"Otherwise, a path-value pair for a nonexisting path in the json is ignored and has no effect."}),"\n",(0,a.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select json_replace(null, null, null);\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+----------------------------------+\n| json_replace(NULL, NULL, 'NULL') |\n+----------------------------------+\n| NULL                             |\n+----------------------------------+\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'select json_replace(\'{"k": 1}\', "$.k", 2);\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+----------------------------------------+\n| json_replace('{\\\"k\\\": 1}', '$.k', '2') |\n+----------------------------------------+\n| {\"k\":2}                                |\n+----------------------------------------+\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'select json_replace(\'{"k": 1}\', "$.j", 2);\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+----------------------------------------+\n| json_replace('{\\\"k\\\": 1}', '$.j', '2') |\n+----------------------------------------+\n| {\"k\":1}                                |\n+----------------------------------------+\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select json_replace(null, null, 's');\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+--------------------------------------+\n| json_replace(NULL, NULL, 's', '006') |\n+--------------------------------------+\n| NULL                                 |\n+--------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return r}});var t=s(667294);let a={},l=t.createContext(a);function r(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);