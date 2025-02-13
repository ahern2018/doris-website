"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["9969"],{563575:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/json-functions/json-extract","title":"JSON_EXTRACT","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/json-functions/json-extract.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/json-functions","slug":"/sql-manual/sql-functions/scalar-functions/json-functions/json-extract","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/json-functions/json-extract","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"JSON_EXTRACT","language":"en"},"sidebar":"docs","previous":{"title":"JSON_PARSE","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/json-functions/json-parse"},"next":{"title":"JSON_EXISTS_PATH","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/json-functions/json-exists-path"}}'),a=s("785893"),l=s("250065");let i={title:"JSON_EXTRACT",language:"en"},r=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Alias",id:"alias",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"JSON_EXTRACT is a series of functions that extract the field specified by json_path from JSON data and provide different series of functions according to the type of the field to be extracted."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"JSON_EXTRACT returns the VARCHAR type for a json string of the VARCHAR type."}),"\n",(0,a.jsx)(n.li,{children:"JSON_EXTRACT_ISNULL returns the BOOLEAN type indicating whether it is a json null."}),"\n",(0,a.jsx)(n.li,{children:"JSON_EXTRACT_BOOL returns the BOOLEAN type."}),"\n",(0,a.jsx)(n.li,{children:"JSON_EXTRACT_INT returns the INT type."}),"\n",(0,a.jsx)(n.li,{children:"JSON_EXTRACT_BIGINT returns the BIGINT type."}),"\n",(0,a.jsx)(n.li,{children:"JSON_EXTRACT_LARGEINT returns the LARGEINT type."}),"\n",(0,a.jsx)(n.li,{children:"JSON_EXTRACT_DOUBLE returns the DOUBLE type."}),"\n",(0,a.jsx)(n.li,{children:"JSON_EXTRACT_STRING returns the STRING type."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"alias",children:"Alias"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"JSONB_EXTRACT is the same as JSON_EXTRACT."}),"\n",(0,a.jsx)(n.li,{children:"JSONB_EXTRACT_ISNULL is the same as JSON_EXTRACT_ISNULL."}),"\n",(0,a.jsx)(n.li,{children:"JSONB_EXTRACT_BOOL is the same as JSON_EXTRACT_BOOL."}),"\n",(0,a.jsx)(n.li,{children:"JSONB_EXTRACT_INT is the same as JSON_EXTRACT_INT."}),"\n",(0,a.jsx)(n.li,{children:"JSONB_EXTRACT_BIGINT is the same as JSON_EXTRACT_BIGINT."}),"\n",(0,a.jsx)(n.li,{children:"JSONB_EXTRACT_LARGEINT is the same as JSON_EXTRACT_LARGEINT."}),"\n",(0,a.jsx)(n.li,{children:"JSONB_EXTRACT_DOUBLE is the same as JSON_EXTRACT_DOUBLE."}),"\n",(0,a.jsx)(n.li,{children:"JSONB_EXTRACT_STRING is the same as JSON_EXTRACT_STRING."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"JSON_EXTRACT (<json_str>, <path>[, path] ...)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"JSON_EXTRACT_ISNULL (<json_str>, <path>)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"JSON_EXTRACT_BOOL (<json_str>, <path>)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"JSON_EXTRACT_INT (<json_str>, <path>)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"JSON_EXTRACT_BIGINT (<json_str>, <path>)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"JSON_EXTRACT_LARGEINT (<json_str>, <path>)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"JSON_EXTRACT_DOUBLE (<json_str>, <path>)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"JSON_EXTRACT_STRING (<json_str>, <path>)\n"})}),"\n",(0,a.jsx)(n.p,{children:"Alias functions have the same syntax and usage as the above functions, except for the function names."}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<json_str>"})}),(0,a.jsx)(n.td,{children:"The JSON-type parameter or field to be extracted."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<path>"})}),(0,a.jsx)(n.td,{children:"The JSON path to extract the target element from the target JSON."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"json path syntax:"}),(0,a.jsx)(n.td,{})]})]})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"'$' for json document root"}),"\n",(0,a.jsxs)(n.li,{children:["'.k1' for element of json object with key 'k1'\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:'If the key column value contains ".", double quotes are required in json_path, For example: SELECT json_extract(\'{"k1.a":"abc","k2":300}\', \'$."k1.a"\');'}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["'[i]' for element of json array at index i\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Use '$[last]' to get the last element of json_array, and '$[last-1]' to get the penultimate element, and so on."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"return-values",children:"Return Values"}),"\n",(0,a.jsx)(n.p,{children:"According to the type of the field to be extracted, return the data type of the specified JSON_PATH in the target JSON. Special case handling is as follows:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"If the field specified by json_path does not exist in the JSON, return NULL."}),"\n",(0,a.jsx)(n.li,{children:"If the actual type of the field specified by json_path in the JSON is inconsistent with the type specified by json_extract_t."}),"\n",(0,a.jsx)(n.li,{children:"if it can be losslessly converted to the specified type, return the specified type t; if not, return NULL."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'SELECT json_extract(\'{"id": 123, "name": "doris"}\', \'$.id\');\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:'+------------------------------------------------------+\n| json_extract(\'{"id": 123, "name": "doris"}\', \'$.id\') |\n+------------------------------------------------------+\n| 123                                                  |\n+------------------------------------------------------+\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT json_extract('[1, 2, 3]', '$.[1]');\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+------------------------------------+\n| json_extract('[1, 2, 3]', '$.[1]') |\n+------------------------------------+\n| 2                                  |\n+------------------------------------+\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT json_extract('{\"k1\": \"v1\", \"k2\": { \"k21\": 6.6, \"k22\": [1, 2] } }', '$.k1', '$.k2.k21', '$.k2.k22', '$.k2.k22[1]');\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:'+-------------------------------------------------------------------------------------------------------------------+\n| json_extract(\'{"k1": "v1", "k2": { "k21": 6.6, "k22": [1, 2] } }\', \'$.k1\', \'$.k2.k21\', \'$.k2.k22\', \'$.k2.k22[1]\') |\n+-------------------------------------------------------------------------------------------------------------------+\n| ["v1",6.6,[1,2],2]                                                                                                |\n+-------------------------------------------------------------------------------------------------------------------+\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT json_extract('{\"id\": 123, \"name\": \"doris\"}', '$.aaa', '$.name');\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:'+-----------------------------------------------------------------+\n| json_extract(\'{"id": 123, "name": "doris"}\', \'$.aaa\', \'$.name\') |\n+-----------------------------------------------------------------+\n| [null,"doris"]                                                  |\n+-----------------------------------------------------------------+\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'SELECT JSON_EXTRACT_ISNULL(\'{"id": 123, "name": "doris"}\', \'$.id\');\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:'+----------------------------------------------------------------------------+\n| jsonb_extract_isnull(cast(\'{"id": 123, "name": "doris"}\' as JSON), \'$.id\') |\n+----------------------------------------------------------------------------+\n|                                                                          0 |\n+----------------------------------------------------------------------------+\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'SELECT JSON_EXTRACT_BOOL(\'{"id": 123, "name": "NULL"}\', \'$.id\');\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:'+-------------------------------------------------------------------------+\n| jsonb_extract_bool(cast(\'{"id": 123, "name": "NULL"}\' as JSON), \'$.id\') |\n+-------------------------------------------------------------------------+\n|                                                                    NULL |\n+-------------------------------------------------------------------------+\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'SELECT JSON_EXTRACT_INT(\'{"id": 123, "name": "NULL"}\', \'$.id\');\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:'+------------------------------------------------------------------------+\n| jsonb_extract_int(cast(\'{"id": 123, "name": "NULL"}\' as JSON), \'$.id\') |\n+------------------------------------------------------------------------+\n|                                                                    123 |\n+------------------------------------------------------------------------+\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'SELECT JSON_EXTRACT_INT(\'{"id": 123, "name": "doris"}\', \'$.name\');\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:'+---------------------------------------------------------------------------+\n| jsonb_extract_int(cast(\'{"id": 123, "name": "doris"}\' as JSON), \'$.name\') |\n+---------------------------------------------------------------------------+\n|                                                                      NULL |\n+---------------------------------------------------------------------------+\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'SELECT JSON_EXTRACT_STRING(\'{"id": 123, "name": "doris"}\', \'$.name\');\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:'+------------------------------------------------------------------------------+\n| jsonb_extract_string(cast(\'{"id": 123, "name": "doris"}\' as JSON), \'$.name\') |\n+------------------------------------------------------------------------------+\n| doris                                                                        |\n+------------------------------------------------------------------------------+\n'})})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return i}});var t=s(667294);let a={},l=t.createContext(a);function i(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);