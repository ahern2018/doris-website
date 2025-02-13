"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["149960"],{400328:function(n,e,s){s.r(e),s.d(e,{metadata:()=>l,contentTitle:()=>r,default:()=>j,assets:()=>o,toc:()=>d,frontMatter:()=>c});var l=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/json-functions/get-json-bigint","title":"GET_JSON_BIGINT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/json-functions/get-json-bigint.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/json-functions","slug":"/sql-manual/sql-functions/scalar-functions/json-functions/get-json-bigint","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/json-functions/get-json-bigint","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"GET_JSON_BIGINT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"GET_JSON_INT","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/json-functions/get-json-int"},"next":{"title":"GET_JSON_STRING","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/json-functions/get-json-string"}}'),t=s("785893"),i=s("250065");let c={title:"GET_JSON_BIGINT",language:"zh-CN"},r=void 0,o={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function a(n){let e={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(e.p,{children:"\u89E3\u6790\u5E76\u83B7\u53D6 json \u5B57\u7B26\u4E32\u5185\u6307\u5B9A\u8DEF\u5F84\u7684\u6574\u578B(BIGINT)\u5185\u5BB9\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.code,{children:" GET_JSON_BIGINT( <json_str>, <json_path>)"})}),"\n",(0,t.jsx)(e.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u53C2\u6570"}),(0,t.jsx)(e.th,{children:"\u63CF\u8FF0"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<json_str>"})}),(0,t.jsx)(e.td,{children:"\u9700\u8981\u4ECE\u4E2D\u63D0\u53D6\u6570\u636E\u7684 JSON \u5B57\u7B26\u4E32\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<json_path>"})}),(0,t.jsx)(e.td,{children:"JSON \u8DEF\u5F84\uFF0C\u6307\u5B9A\u5B57\u6BB5\u7684\u4F4D\u7F6E\u3002\u8DEF\u5F84\u53EF\u4EE5\u4F7F\u7528\u70B9\u53F7\u8868\u793A\u6CD5\u3002"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,t.jsxs)(e.p,{children:["\u5176\u4E2D ",(0,t.jsx)(e.code,{children:"<json_str>"}),'  \u5FC5\u987B\u4EE5 $ \u7B26\u53F7\u4F5C\u4E3A\u5F00\u5934\uFF0C\u4F7F\u7528 . \u4F5C\u4E3A\u8DEF\u5F84\u5206\u5272\u7B26\u3002\u5982\u679C\u8DEF\u5F84\u4E2D\u5305\u542B . \uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528\u53CC\u5F15\u53F7\u5305\u56F4\u3002\n\u4F7F\u7528 [ ] \u8868\u793A\u6570\u7EC4\u4E0B\u6807\uFF0C\u4ECE 0 \u5F00\u59CB\u3002\npath \u7684\u5185\u5BB9\u4E0D\u80FD\u5305\u542B ", [ \u548C ]\u3002\n\u5982\u679C ',(0,t.jsx)(e.code,{children:"<json_str>"}),"  \u683C\u5F0F\u4E0D\u5BF9\uFF0C\u6216 ",(0,t.jsx)(e.code,{children:"<json_path>"})," \u683C\u5F0F\u4E0D\u5BF9\uFF0C\u6216\u65E0\u6CD5\u627E\u5230\u5339\u914D\u9879\uFF0C\u5219\u8FD4\u56DE NULL\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u53E6\u5916\uFF0C\u63A8\u8350\u4F7F\u7528jsonb\u7C7B\u578B\u548Cjsonb_extract_XXX\u51FD\u6570\u5B9E\u73B0\u540C\u6837\u7684\u529F\u80FD\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u7279\u6B8A\u60C5\u51B5\u5904\u7406\u5982\u4E0B\uFF1A"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u5982\u679C ",(0,t.jsx)(e.code,{children:"<json_path>"})," \u6307\u5B9A\u7684\u5B57\u6BB5\u5728JSON\u4E2D\u4E0D\u5B58\u5728\uFF0C\u8FD4\u56DENULL"]}),"\n",(0,t.jsxs)(e.li,{children:["\u5982\u679C ",(0,t.jsx)(e.code,{children:"<json_path>"})," \u6307\u5B9A\u7684\u5B57\u6BB5\u5728JSON\u4E2D\u7684\u5B9E\u9645\u7C7B\u578B\u548Cjson_extract_t\u6307\u5B9A\u7684\u7C7B\u578B\u4E0D\u4E00\u81F4\uFF0C\u5982\u679C\u80FD\u65E0\u635F\u8F6C\u6362\u6210\u6307\u5B9A\u7C7B\u578B\u8FD4\u56DE\u6307\u5B9A\u7C7B\u578Bt\uFF0C\u5982\u679C\u4E0D\u80FD\u5219\u8FD4\u56DENULL"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u8FD4\u56DE\u8DEF\u5F84\u6307\u5411\u5B57\u6BB5\u7684 BIGINT \u503C\u3002"}),"\n",(0,t.jsx)(e.li,{children:"\u5982\u679C\u6307\u5B9A\u8DEF\u5F84\u6CA1\u6709\u627E\u5230\u5BF9\u5E94\u7684\u5B57\u6BB5\uFF0C\u6216\u8005\u5B57\u6BB5\u503C\u65E0\u6CD5\u8F6C\u6362\u4E3A BIGINT \u7C7B\u578B\uFF0C\u8FD4\u56DE NULL\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:'\u83B7\u53D6 key \u4E3A "k1" \u7684 value'}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'\nSELECT get_json_bigint(\'{"k1":1, "k2":"2"}\', "$.k1");\n\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'\n+-----------------------------------------------+\n| get_json_bigint(\'{"k1":1, "k2":"2"}\', \'$.k1\') |\n+-----------------------------------------------+\n|                                             1 |\n+-----------------------------------------------+\n\n'})}),"\n",(0,t.jsxs)(e.ol,{start:"2",children:["\n",(0,t.jsx)(e.li,{children:'\u83B7\u53D6 key \u4E3A "my.key" \u7684\u6570\u7EC4\u4E2D\u7B2C\u4E8C\u4E2A\u5143\u7D20'}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'\nSELECT get_json_bigint(\'{"k1":"v1", "my.key":[1, 1678708107000, 3]}\', \'$."my.key"[1]\');\n\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'\n+---------------------------------------------------------------------------------+\n| get_json_bigint(\'{"k1":"v1", "my.key":[1, 1678708107000, 3]}\', \'$."my.key"[1]\') |\n+---------------------------------------------------------------------------------+\n|                                                                   1678708107000 |\n+---------------------------------------------------------------------------------+\n\n'})}),"\n",(0,t.jsxs)(e.ol,{start:"3",children:["\n",(0,t.jsx)(e.li,{children:"\u83B7\u53D6\u4E8C\u7EA7\u8DEF\u5F84\u4E3A k1.key -> k2 \u7684\u6570\u7EC4\u4E2D\uFF0C\u7B2C\u4E00\u4E2A\u5143\u7D20"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'\nSELECT get_json_bigint(\'{"k1.key":{"k2":[1678708107000, 2]}}\', \'$."k1.key".k2[0]\');\n\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'\n+-----------------------------------------------------------------------------+\n| get_json_bigint(\'{"k1.key":{"k2":[1678708107000, 2]}}\', \'$."k1.key".k2[0]\') |\n+-----------------------------------------------------------------------------+\n|                                                               1678708107000 |\n+-----------------------------------------------------------------------------+\n\n'})})]})}function j(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return r},a:function(){return c}});var l=s(667294);let t={},i=l.createContext(t);function c(n){let e=l.useContext(i);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),l.createElement(i.Provider,{value:e},n.children)}}}]);