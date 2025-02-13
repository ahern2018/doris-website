"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["135616"],{718783:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/json-functions/json-exists-path","title":"JSON_EXISTS_PATH","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/json-functions/json-exists-path.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/json-functions","slug":"/sql-manual/sql-functions/scalar-functions/json-functions/json-exists-path","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/json-functions/json-exists-path","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"JSON_EXISTS_PATH","language":"en"},"sidebar":"docs","previous":{"title":"JSON_EXTRACT","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/json-functions/json-extract"},"next":{"title":"JSON_TYPE","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/json-functions/json-type"}}'),i=s("785893"),a=s("250065");let l={title:"JSON_EXISTS_PATH",language:"en"},r=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Alias",id:"alias",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"It is used to judge whether the field specified by json_path exists in the JSON data. If it exists, it returns TRUE, and if it does not exist, it returns FALSE"}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"JSON_EXISTS_PATH (<json_str>,  <path>)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"alias",children:"Alias"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"JSONB_EXISTS_PATH"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<json_str>"})}),(0,i.jsx)(n.td,{children:"The element to be included in the JSON array. It can be a value of any type, including NULL. If no element is specified, an empty array is returned."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<path>"})}),(0,i.jsx)(n.td,{children:"The JSON path to be judged. If it is NULL, then return NULL."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"return-values",children:"Return Values"}),"\n",(0,i.jsx)(n.p,{children:"If it exists, return TRUE; if it does not exist, return FALSE."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'SELECT JSON_EXISTS_PATH(\'{"id": 123, "name": "doris"}\', \'$.name\');\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'+---------------------------------------------------------------------------+\n| jsonb_exists_path(cast(\'{"id": 123, "name": "doris"}\' as JSON), \'$.name\') |\n+---------------------------------------------------------------------------+\n|                                                                         1 |\n+---------------------------------------------------------------------------+\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'SELECT JSON_EXISTS_PATH(\'{"id": 123, "name": "doris"}\', \'$.age\');\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'+--------------------------------------------------------------------------+\n| jsonb_exists_path(cast(\'{"id": 123, "name": "doris"}\' as JSON), \'$.age\') |\n+--------------------------------------------------------------------------+\n|                                                                        0 |\n+--------------------------------------------------------------------------+\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'SELECT JSONB_EXISTS_PATH(\'{"id": 123, "name": "doris"}\', \'$.age\');\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'+--------------------------------------------------------------------------+\n| jsonb_exists_path(cast(\'{"id": 123, "name": "doris"}\' as JSON), \'$.age\') |\n+--------------------------------------------------------------------------+\n|                                                                        0 |\n+--------------------------------------------------------------------------+\n'})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return l}});var t=s(667294);let i={},a=t.createContext(i);function l(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);