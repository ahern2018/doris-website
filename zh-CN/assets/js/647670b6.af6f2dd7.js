"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["294079"],{274838:function(n,e,t){t.r(e),t.d(e,{metadata:()=>a,contentTitle:()=>i,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>r});var a=JSON.parse('{"id":"sql-manual/sql-functions/table-functions/explode-variant-array","title":"EXPLODE_VARIANT_ARRAY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/table-functions/explode-variant-array.md","sourceDirName":"sql-manual/sql-functions/table-functions","slug":"/sql-manual/sql-functions/table-functions/explode-variant-array","permalink":"/zh-CN/docs/sql-manual/sql-functions/table-functions/explode-variant-array","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"EXPLODE_VARIANT_ARRAY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"EXPLODE_JSON_ARRAY_JSON","permalink":"/zh-CN/docs/sql-manual/sql-functions/table-functions/explode-json-array-json"},"next":{"title":"EXPLODE","permalink":"/zh-CN/docs/sql-manual/sql-functions/table-functions/explode"}}'),s=t("785893"),l=t("250065");let r={title:"EXPLODE_VARIANT_ARRAY",language:"zh-CN"},i=void 0,o={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function d(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"explode_variant_array"})," \u8868\u51FD\u6570\uFF0C\u63A5\u53D7\u4E00\u4E2A variant \u7C7B\u578B\uFF0C\u5176\u4E2D\u6BCF\u4E2A\u5143\u7D20\u662F JSON \u5BF9\u8C61\u7C7B\u578B\uFF0C\u5C06\u8BE5 json \u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A json \u5BF9\u8C61\u5C55\u5F00\u4E3A\u591A\u884C\uFF0C\u6BCF\u884C\u5305\u542B\u4E00\u4E2A JSON \u5BF9\u8C61\u3002\u914D\u5408 LATERAL VIEW \u4F7F\u7528\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"EXPLODE_VARIANT_ARRAY(<variant>)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u53C2\u6570"}),(0,s.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"<variant>"})}),(0,s.jsx)(e.td,{children:"variant \u7C7B\u578B"})]})})]}),"\n",(0,s.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,s.jsx)(e.p,{children:"\u5C55\u5F00 JSON \u6570\u7EC4\uFF0C\u6BCF\u4E2A\u5143\u7D20\u751F\u6210\u4E00\u884C\uFF0C\u8FD4\u56DE JSON \u5BF9\u8C61\u5217\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE `simple_nested_test` (\n  `k` bigint NULL,\n  `v` variant NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`k`)\nDISTRIBUTED BY HASH(`k`) BUCKETS 8\nPROPERTIES (\n"file_cache_ttl_seconds" = "0",\n"is_being_synced" = "false",\n"storage_medium" = "hdd",\n"storage_format" = "V2",\n"inverted_index_storage_format" = "V2",\n"light_schema_change" = "true",\n"disable_auto_compaction" = "false",\n"variant_enable_flatten_nested" = "true",\n"enable_single_replica_compaction" = "false",\n"group_commit_interval_ms" = "10000",\n"group_commit_data_bytes" = "134217728"\n);\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'insert into simple_nested_test values(1, \'{\n  "eventId": 1,\n  "firstName": "Name1",\n  "lastName": "Eric",\n  "body": {\n    "phoneNumbers": [\n      {\n        "number": "1111111111",\n        "type": "GSM",\n        "callLimit": 5\n      },\n      {\n        "number": "222222222",\n        "type": "HOME",\n        "callLimit": 3\n      },\n      {\n        "number": "33333333",\n        "callLimit": 2,\n        "type": "WORK"\n      }\n    ]\n  }\n}\');\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"select v['eventId'], phone_numbers\n    from simple_nested_test lateral view explode_variant_array(v['body']['phoneNumbers']) tmp1 as phone_numbers\n    where phone_numbers['type'] = 'GSM' OR phone_numbers['type'] = 'HOME' and phone_numbers['callLimit'] > 2;   \n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:'+--------------------------+----------------------------------------------------+\n| element_at(v, \'eventId\') | phone_numbers                                      |\n+--------------------------+----------------------------------------------------+\n| 1                        | {"callLimit":5,"number":"1111111111","type":"GSM"} |\n| 1                        | {"callLimit":3,"number":"222222222","type":"HOME"} |\n+--------------------------+----------------------------------------------------+\n'})})]})}function u(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return i},a:function(){return r}});var a=t(667294);let s={},l=a.createContext(s);function r(n){let e=a.useContext(l);return a.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),a.createElement(l.Provider,{value:e},n.children)}}}]);