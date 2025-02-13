"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["240196"],{218014:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>r,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/json-functions/json-exists-path","title":"json-exists-path","description":"---","source":"@site/docs/sql-manual/sql-functions/scalar-functions/json-functions/json-exists-path.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/json-functions","slug":"/sql-manual/sql-functions/scalar-functions/json-functions/json-exists-path","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/json-functions/json-exists-path","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"JSON_EXTRACT","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/json-functions/json-extract"},"next":{"title":"JSON_TYPE","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/json-functions/json-type"}}'),i=s("785893"),a=s("250065");let l={},r=void 0,c={},o=[{value:"{\n&quot;title&quot;: &quot;JSON_EXISTS_PATH&quot;,\n&quot;language&quot;: &quot;en&quot;\n}",id:"title-json_exists_pathlanguage-en",level:2},{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Alias",id:"alias",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2}];function d(n){let e={code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"title-json_exists_pathlanguage-en",children:'{\n"title": "JSON_EXISTS_PATH",\n"language": "en"\n}'}),"\n",(0,i.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(e.p,{children:"It is used to judge whether the field specified by json_path exists in the JSON data. If it exists, it returns TRUE, and if it does not exist, it returns FALSE"}),"\n",(0,i.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"JSON_EXISTS_PATH (<json_str>,  <path>)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"alias",children:"Alias"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"JSONB_EXISTS_PATH"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Parameter"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<json_str>"})}),(0,i.jsx)(e.td,{children:"The element to be included in the JSON array. It can be a value of any type, including NULL. If no element is specified, an empty array is returned."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<path>"})}),(0,i.jsx)(e.td,{children:"The JSON path to be judged. If it is NULL, then return NULL."})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"return-values",children:"Return Values"}),"\n",(0,i.jsx)(e.p,{children:"If it exists, return TRUE; if it does not exist, return FALSE."}),"\n",(0,i.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'SELECT JSON_EXISTS_PATH(\'{"id": 123, "name": "doris"}\', \'$.name\');\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:'+---------------------------------------------------------------------------+\n| jsonb_exists_path(cast(\'{"id": 123, "name": "doris"}\' as JSON), \'$.name\') |\n+---------------------------------------------------------------------------+\n|                                                                         1 |\n+---------------------------------------------------------------------------+\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'SELECT JSON_EXISTS_PATH(\'{"id": 123, "name": "doris"}\', \'$.age\');\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:'+--------------------------------------------------------------------------+\n| jsonb_exists_path(cast(\'{"id": 123, "name": "doris"}\' as JSON), \'$.age\') |\n+--------------------------------------------------------------------------+\n|                                                                        0 |\n+--------------------------------------------------------------------------+\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'SELECT JSONB_EXISTS_PATH(\'{"id": 123, "name": "doris"}\', \'$.age\');\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:'+--------------------------------------------------------------------------+\n| jsonb_exists_path(cast(\'{"id": 123, "name": "doris"}\' as JSON), \'$.age\') |\n+--------------------------------------------------------------------------+\n|                                                                        0 |\n+--------------------------------------------------------------------------+\n'})})]})}function u(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return r},a:function(){return l}});var t=s(667294);let i={},a=t.createContext(i);function l(n){let e=t.useContext(a);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);