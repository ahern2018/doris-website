"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["883122"],{284582:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>a,default:()=>u,assets:()=>d,toc:()=>c,frontMatter:()=>l});var r=JSON.parse('{"id":"sql-manual/sql-reference/Show-Statements/SHOW-FUNCTIONS","title":"SHOW-FUNCTIONS","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-FUNCTIONS.md","sourceDirName":"sql-manual/sql-reference/Show-Statements","slug":"/sql-manual/sql-reference/Show-Statements/SHOW-FUNCTIONS","permalink":"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-FUNCTIONS","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"SHOW-FUNCTIONS","language":"en"},"sidebar":"docs","previous":{"title":"SHOW-ENCRYPT-KEY","permalink":"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-ENCRYPT-KEY"},"next":{"title":"SHOW-TYPECAST","permalink":"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-TYPECAST"}}'),s=t("785893"),i=t("250065");let l={title:"SHOW-FUNCTIONS",language:"en"},a=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Varaint Syntax",id:"varaint-syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"View all custom and system provided functions under the database."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW [ FULL ] [ BUILTIN ] FUNCTIONS [ { IN | FROM } <db> ]  [ LIKE '<function_pattern>' ]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"varaint-syntax",children:"Varaint Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW GLOBAL [ FULL ] FUNCTIONS [ LIKE '<function_pattern>' ]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["1. ",(0,s.jsx)(n.code,{children:"<function_pattern>"})]})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Matching pattern rules used to filter function names"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["1. ",(0,s.jsx)(n.code,{children:"FULL"})]})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"FULL is an optional parameter."}),"\n",(0,s.jsx)(n.p,{children:"This parameter indicates the detailed information about the function."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["2. ",(0,s.jsx)(n.code,{children:"BUILTIN"})]})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"BUILTIN is an optional parameter."}),"\n",(0,s.jsx)(n.p,{children:"This parameter indicates that the functions provided by the system need to be displayed"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["3. ",(0,s.jsx)(n.code,{children:"<db>"})]})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"db is an optional parameter."}),"\n",(0,s.jsx)(n.p,{children:"This parameter indicates the query under the specified database"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Column"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Signature"}),(0,s.jsx)(n.td,{children:"Function name and parameter type"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Return Type"}),(0,s.jsx)(n.td,{children:"The data type of the value returned by the function"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function Type"}),(0,s.jsx)(n.td,{children:"Type of function"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Intermediate Type"}),(0,s.jsx)(n.td,{children:"Intermediate result type"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Properties"}),(0,s.jsx)(n.td,{children:"Detailed properties of a function"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,s.jsx)(n.p,{children:"The user who executes this SQL command must have at least the following permissions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Privilege"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Object"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"SHOW_PRIV"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Function"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"You need to have the show permission on this function"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"show full functions in testDb\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'*************************** 1. row ***************************\nSignature: my_add(INT,INT)\nReturn Type: INT\nFunction Type: Scalar\nIntermediate Type: NULL\nProperties: {"symbol":"_ZN9doris_udf6AddUdfEPNS_15FunctionContextERKNS_6IntValES4_","object_file":"http://host:port/libudfsample.so","md5":"cfe7a362d10f3aaf6c49974ee0f1f878"}\n*************************** 2. row ***************************\nSignature: my_count(BIGINT)\nReturn Type: BIGINT\nFunction Type: Aggregate\nIntermediate Type: NULL\nProperties: {"object_file":"http://host:port/libudasample.so","finalize_fn":"_ZN9doris_udf13CountFinalizeEPNS_15FunctionContextERKNS_9BigIntValE","init_fn":"_ZN9doris_udf9CountInitEPNS_15FunctionContextEPNS_9BigIntValE","merge_fn":"_ZN9doris_udf10CountMergeEPNS_15FunctionContextERKNS_9BigIntValEPS2_","md5":"37d185f80f95569e2676da3d5b5b9d2f","update_fn":"_ZN9doris_udf11CountUpdateEPNS_15FunctionContextERKNS_6IntValEPNS_9BigIntValE"}\n*************************** 3. row ***************************\nSignature: id_masking(BIGINT)\nReturn Type: VARCHAR\nFunction Type: Alias\nIntermediate Type: NULL\nProperties: {"parameter":"id","origin_function":"concat(left(`id`, 3), `****`, right(`id`, 4))"}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"show builtin functions in testDb like 'year%';\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+---------------+\n| Function Name |\n+---------------+\n| year          |\n| years_add     |\n| years_diff    |\n| years_sub     |\n+---------------+\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"show global full functions\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'*************************** 1. row ***************************\n        Signature: decimal(ALL, INT, INT)\n      Return Type: VARCHAR\n    Function Type: Alias\nIntermediate Type: NULL\n       Properties: {"parameter":"col, precision, scale","origin_function":"CAST(`col` AS decimal(`precision`, `scale`))"}\n*************************** 2. row ***************************\n        Signature: id_masking(BIGINT)\n      Return Type: VARCHAR\n    Function Type: Alias\nIntermediate Type: NULL\n       Properties: {"parameter":"id","origin_function":"concat(left(`id`, 3), `****`, right(`id`, 4))"}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"show global functions\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+---------------+\n| Function Name |\n+---------------+\n| decimal       |\n| id_masking    |\n+---------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var r=t(667294);let s={},i=r.createContext(s);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);