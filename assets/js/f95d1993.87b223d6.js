"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["698844"],{310606:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>i,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>l});var a=JSON.parse('{"id":"sql-manual/sql-functions/table-functions/explode-variant-array","title":"EXPLODE_VARIANT_ARRAY","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/table-functions/explode-variant-array.md","sourceDirName":"sql-manual/sql-functions/table-functions","slug":"/sql-manual/sql-functions/table-functions/explode-variant-array","permalink":"/docs/sql-manual/sql-functions/table-functions/explode-variant-array","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"EXPLODE_VARIANT_ARRAY","language":"en"},"sidebar":"docs","previous":{"title":"EXPLODE_JSON_ARRAY_JSON","permalink":"/docs/sql-manual/sql-functions/table-functions/explode-json-array-json"},"next":{"title":"EXPLODE","permalink":"/docs/sql-manual/sql-functions/table-functions/explode"}}'),s=t("785893"),r=t("250065");let l={title:"EXPLODE_VARIANT_ARRAY",language:"en"},i=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"explode_variant_array"})," table function accepts a variant type, where each element is a JSON object, and expands each JSON object in the array into multiple rows, with each row containing one JSON object. It is used in conjunction with LATERAL VIEW."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"EXPLODE_VARIANT_ARRAY(<variant>)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<variant>"})}),(0,s.jsx)(n.td,{children:"variant type"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:"Expands the JSON array, creating a row for each element, returning a JSON object column."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `simple_nested_test` (\n  `k` bigint NULL,\n  `v` variant NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`k`)\nDISTRIBUTED BY HASH(`k`) BUCKETS 8\nPROPERTIES (\n"file_cache_ttl_seconds" = "0",\n"is_being_synced" = "false",\n"storage_medium" = "hdd",\n"storage_format" = "V2",\n"inverted_index_storage_format" = "V2",\n"light_schema_change" = "true",\n"disable_auto_compaction" = "false",\n"variant_enable_flatten_nested" = "true",\n"enable_single_replica_compaction" = "false",\n"group_commit_interval_ms" = "10000",\n"group_commit_data_bytes" = "134217728"\n);\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'insert into simple_nested_test values(1, \'{\n  "eventId": 1,\n  "firstName": "Name1",\n  "lastName": "Eric",\n  "body": {\n    "phoneNumbers": [\n      {\n        "number": "1111111111",\n        "type": "GSM",\n        "callLimit": 5\n      },\n      {\n        "number": "222222222",\n        "type": "HOME",\n        "callLimit": 3\n      },\n      {\n        "number": "33333333",\n        "callLimit": 2,\n        "type": "WORK"\n      }\n    ]\n  }\n}\');\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select v['eventId'], phone_numbers\n    from simple_nested_test lateral view explode_variant_array(v['body']['phoneNumbers']) tmp1 as phone_numbers\n    where phone_numbers['type'] = 'GSM' OR phone_numbers['type'] = 'HOME' and phone_numbers['callLimit'] > 2;   \n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'+--------------------------+----------------------------------------------------+\n| element_at(v, \'eventId\') | phone_numbers                                      |\n+--------------------------+----------------------------------------------------+\n| 1                        | {"callLimit":5,"number":"1111111111","type":"GSM"} |\n| 1                        | {"callLimit":3,"number":"222222222","type":"HOME"} |\n+--------------------------+----------------------------------------------------+\n'})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var a=t(667294);let s={},r=a.createContext(s);function l(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);