"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["648692"],{688384:function(n,s,t){t.r(s),t.d(s,{metadata:()=>e,contentTitle:()=>l,default:()=>d,assets:()=>a,toc:()=>c,frontMatter:()=>i});var e=JSON.parse('{"id":"sql-manual/sql-functions/json-functions/json-extract","title":"JSON_EXTRACT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/json-functions/json-extract.md","sourceDirName":"sql-manual/sql-functions/json-functions","slug":"/sql-manual/sql-functions/json-functions/json-extract","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/json-functions/json-extract","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"JSON_EXTRACT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"JSON_PARSE","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/json-functions/json-parse"},"next":{"title":"JSON_EXISTS_PATH","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/json-functions/json-exists-path"}}'),o=t("785893"),r=t("250065");let i={title:"JSON_EXTRACT",language:"zh-CN"},l=void 0,a={},c=[{value:"json_extract",id:"json_extract",level:2},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"keywords",id:"keywords",level:3}];function j(n){let s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h2,{id:"json_extract",children:"json_extract"}),"\n",(0,o.jsx)(s.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,o.jsx)(s.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-sql",children:"VARCHAR json_extract(VARCHAR json_str, VARCHAR path[, VARCHAR path] ...)\nJSON jsonb_extract(JSON j, VARCHAR json_path)\nBOOLEAN json_extract_isnull(JSON j, VARCHAR json_path)\nBOOLEAN json_extract_bool(JSON j, VARCHAR json_path)\nINT json_extract_int(JSON j, VARCHAR json_path)\nBIGINT json_extract_bigint(JSON j, VARCHAR json_path)\nLARGEINT json_extract_largeint(JSON j, VARCHAR json_path)\nDOUBLE json_extract_double(JSON j, VARCHAR json_path)\nSTRING json_extract_string(JSON j, VARCHAR json_path)\n"})}),"\n",(0,o.jsx)(s.p,{children:"json_extract\u662F\u4E00\u7CFB\u5217\u51FD\u6570\uFF0C\u4ECEJSON\u7C7B\u578B\u7684\u6570\u636E\u4E2D\u63D0\u53D6json_path\u6307\u5B9A\u7684\u5B57\u6BB5\uFF0C\u6839\u636E\u8981\u63D0\u53D6\u7684\u5B57\u6BB5\u7C7B\u578B\u4E0D\u540C\u63D0\u4F9B\u4E0D\u540C\u7684\u7CFB\u5217\u51FD\u6570\u3002"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"json_extract\u5BF9VARCHAR\u7C7B\u578B\u7684json string\u8FD4\u56DEVARCHAR\u7C7B\u578B"}),"\n",(0,o.jsx)(s.li,{children:"jsonb_extract\u8FD4\u56DEJSON\u7C7B\u578B"}),"\n",(0,o.jsx)(s.li,{children:"json_extract_isnull\u8FD4\u56DE\u662F\u5426\u4E3Ajson null\u7684BOOLEAN\u7C7B\u578B"}),"\n",(0,o.jsx)(s.li,{children:"json_extract_bool\u8FD4\u56DEBOOLEAN\u7C7B\u578B"}),"\n",(0,o.jsx)(s.li,{children:"json_extract_int\u8FD4\u56DEINT\u7C7B\u578B"}),"\n",(0,o.jsx)(s.li,{children:"json_extract_bigint\u8FD4\u56DEBIGINT\u7C7B\u578B"}),"\n",(0,o.jsx)(s.li,{children:"json_extract_largeint\u8FD4\u56DELARGEINT\u7C7B\u578B"}),"\n",(0,o.jsx)(s.li,{children:"json_extract_double\u8FD4\u56DEDOUBLE\u7C7B\u578B"}),"\n",(0,o.jsx)(s.li,{children:"json_extract_STRING\u8FD4\u56DESTRING\u7C7B\u578B"}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"json path\u7684\u8BED\u6CD5\u5982\u4E0B"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"'$' \u4EE3\u8868json root"}),"\n",(0,o.jsxs)(s.li,{children:["'.k1' \u4EE3\u8868json object\u4E2Dkey\u4E3A'k1'\u7684\u5143\u7D20\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:'\u5982\u679C key \u5217\u503C\u5305\u542B ".", json_path \u4E2D\u9700\u8981\u7528\u53CC\u5F15\u53F7\uFF0C\u4F8B\u5982 SELECT json_extract(\'{"k1.a":"abc","k2":300}\', \'$."k1.a"\');'}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["'[i]' \u4EE3\u8868json array\u4E2D\u4E0B\u6807\u4E3Ai\u7684\u5143\u7D20\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"\u83B7\u53D6 json_array \u7684\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u53EF\u4EE5\u7528'$[last]'\uFF0C\u5012\u6570\u7B2C\u4E8C\u4E2A\u5143\u7D20\u53EF\u4EE5\u7528'$[last-1]'\uFF0C\u4EE5\u6B64\u7C7B\u63A8"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"\u7279\u6B8A\u60C5\u51B5\u5904\u7406\u5982\u4E0B\uFF1A"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"\u5982\u679C json_path \u6307\u5B9A\u7684\u5B57\u6BB5\u5728JSON\u4E2D\u4E0D\u5B58\u5728\uFF0C\u8FD4\u56DENULL"}),"\n",(0,o.jsx)(s.li,{children:"\u5982\u679C json_path \u6307\u5B9A\u7684\u5B57\u6BB5\u5728JSON\u4E2D\u7684\u5B9E\u9645\u7C7B\u578B\u548Cjson_extract_t\u6307\u5B9A\u7684\u7C7B\u578B\u4E0D\u4E00\u81F4\uFF0C\u5982\u679C\u80FD\u65E0\u635F\u8F6C\u6362\u6210\u6307\u5B9A\u7C7B\u578B\u8FD4\u56DE\u6307\u5B9A\u7C7B\u578Bt\uFF0C\u5982\u679C\u4E0D\u80FD\u5219\u8FD4\u56DENULL"}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,o.jsxs)(s.p,{children:["\u53C2\u8003 ",(0,o.jsx)(s.a,{href:"../../sql-reference/Data-Types/JSON.md",children:"json tutorial"})," \u4E2D\u7684\u793A\u4F8B"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:"mysql> SELECT json_extract('{\"id\": 123, \"name\": \"doris\"}', '$.id');\n+------------------------------------------------------+\n| json_extract('{\"id\": 123, \"name\": \"doris\"}', '$.id') |\n+------------------------------------------------------+\n| 123                                                  |\n+------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> SELECT json_extract('[1, 2, 3]', '$.[1]');\n+------------------------------------+\n| json_extract('[1, 2, 3]', '$.[1]') |\n+------------------------------------+\n| 2                                  |\n+------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> SELECT json_extract('{\"k1\": \"v1\", \"k2\": { \"k21\": 6.6, \"k22\": [1, 2] } }', '$.k1', '$.k2.k21', '$.k2.k22', '$.k2.k22[1]');\n+-------------------------------------------------------------------------------------------------------------------+\n| json_extract('{\"k1\": \"v1\", \"k2\": { \"k21\": 6.6, \"k22\": [1, 2] } }', '$.k1', '$.k2.k21', '$.k2.k22', '$.k2.k22[1]') |\n+-------------------------------------------------------------------------------------------------------------------+\n| [\"v1\",6.6,[1,2],2]                                                                                                |\n+-------------------------------------------------------------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> SELECT json_extract('{\"id\": 123, \"name\": \"doris\"}', '$.aaa', '$.name');\n+-----------------------------------------------------------------+\n| json_extract('{\"id\": 123, \"name\": \"doris\"}', '$.aaa', '$.name') |\n+-----------------------------------------------------------------+\n| [null,\"doris\"]                                                  |\n+-----------------------------------------------------------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,o.jsx)(s.h3,{id:"keywords",children:"keywords"}),"\n",(0,o.jsx)(s.p,{children:"JSONB, JSON, json_extract, json_extract_isnull, json_extract_bool, json_extract_int, json_extract_bigint, json_extract_largeint, json_extract_double, json_extract_string"})]})}function d(n={}){let{wrapper:s}={...(0,r.a)(),...n.components};return s?(0,o.jsx)(s,{...n,children:(0,o.jsx)(j,{...n})}):j(n)}},250065:function(n,s,t){t.d(s,{Z:function(){return l},a:function(){return i}});var e=t(667294);let o={},r=e.createContext(o);function i(n){let s=e.useContext(r);return e.useMemo(function(){return"function"==typeof n?n(s):{...s,...n}},[s,n])}function l(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),e.createElement(r.Provider,{value:s},n.children)}}}]);