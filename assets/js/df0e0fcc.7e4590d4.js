"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["532748"],{530938:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>r});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/json-functions/json-type","title":"JSON_TYPE","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/json-functions/json-type.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/json-functions","slug":"/sql-manual/sql-functions/scalar-functions/json-functions/json-type","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/json-functions/json-type","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"JSON_TYPE","language":"en"},"sidebar":"docs","previous":{"title":"JSON_EXISTS_PATH","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/json-functions/json-exists-path"},"next":{"title":"JSON_ARRAY","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/json-functions/json-array"}}'),l=s("785893"),i=s("250065");let r={title:"JSON_TYPE",language:"en"},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Alias",id:"alias",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["Used to determine the type of the field specified by ",(0,l.jsx)(n.code,{children:"json_path"})," in the JSONB data. If the field does not exist, it returns NULL. If the field exists, it returns one of the following types:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"object"}),"\n",(0,l.jsx)(n.li,{children:"array"}),"\n",(0,l.jsx)(n.li,{children:"null"}),"\n",(0,l.jsx)(n.li,{children:"bool"}),"\n",(0,l.jsx)(n.li,{children:"int"}),"\n",(0,l.jsx)(n.li,{children:"bigint"}),"\n",(0,l.jsx)(n.li,{children:"largeint"}),"\n",(0,l.jsx)(n.li,{children:"double"}),"\n",(0,l.jsx)(n.li,{children:"string"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"STRING JSON_TYPE( <JSON j> )\n"})}),"\n",(0,l.jsx)(n.h2,{id:"alias",children:"Alias"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"JSONB_TYPE"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parameter"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<JSON j>"})}),(0,l.jsx)(n.td,{children:"The JSON string to check the type of."})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,l.jsx)(n.p,{children:"Returns the type of the JSON string. Possible values include:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:'"NULL": Indicates that the value in the JSON document is null.'}),"\n",(0,l.jsx)(n.li,{children:'"BOOLEAN": Indicates that the value in the JSON document is of boolean type (true or false).'}),"\n",(0,l.jsx)(n.li,{children:'"NUMBER": Indicates that the value in the JSON document is a number.'}),"\n",(0,l.jsx)(n.li,{children:'"STRING": Indicates that the value in the JSON document is a string.'}),"\n",(0,l.jsx)(n.li,{children:'"OBJECT": Indicates that the value in the JSON document is a JSON object.'}),"\n",(0,l.jsx)(n.li,{children:'"ARRAY": Indicates that the value in the JSON document is a JSON array.'}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,l.jsxs)(n.p,{children:["JSON_TYPE returns the type of the outermost value in the JSON document. If the JSON document contains multiple different types of values, it will return the type of the outermost value. For invalid JSON strings, JSON_TYPE returns NULL. Refer to ",(0,l.jsx)(n.a,{href:"../../sql-reference/Data-Types/JSON.md",children:"json tutorial"})]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"JSON is of string type:"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT JSON_TYPE('\"Hello, World!\"');\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"+------------------------------------------+\n| JSON_TYPE('\"Hello, World!\"')            |\n+------------------------------------------+\n| STRING                                   |\n+------------------------------------------+\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:"JSON is of number type:"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT JSON_TYPE('123');\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"+------------------------------------------+\n| JSON_TYPE('123')                        |\n+------------------------------------------+\n| NUMBER                                   |\n+------------------------------------------+\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsx)(n.li,{children:"JSON is of null type:"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT JSON_TYPE('null');\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"+------------------------------------------+\n| JSON_TYPE('null')                        |\n+------------------------------------------+\n| NULL                                     |\n+------------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return r}});var t=s(667294);let l={},i=t.createContext(l);function r(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);