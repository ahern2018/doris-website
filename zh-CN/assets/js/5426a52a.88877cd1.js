"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["612904"],{953460:function(n,e,s){s.r(e),s.d(e,{metadata:()=>l,contentTitle:()=>d,default:()=>o,assets:()=>r,toc:()=>a,frontMatter:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/numeric-functions/width-bucket","title":"WIDTH_BUCKET","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/numeric-functions/width-bucket.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/numeric-functions","slug":"/sql-manual/sql-functions/scalar-functions/numeric-functions/width-bucket","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/numeric-functions/width-bucket","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"WIDTH_BUCKET","language":"zh-CN"},"sidebar":"docs","previous":{"title":"UUID_NUMERIC","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/numeric-functions/uuid_numeric"},"next":{"title":"TO_BASE64","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/to-base64"}}'),c=s("785893"),t=s("250065");let i={title:"WIDTH_BUCKET",language:"zh-CN"},d=void 0,r={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function u(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,c.jsx)(e.p,{children:"\u6784\u9020\u7B49\u5BBD\u76F4\u65B9\u56FE\uFF0C\u5176\u4E2D\u76F4\u65B9\u56FE\u8303\u56F4\u88AB\u5212\u5206\u4E3A\u76F8\u540C\u5927\u5C0F\u7684\u533A\u95F4\uFF0C\u5E76\u5728\u8BA1\u7B97\u540E\u8FD4\u56DE\u8868\u8FBE\u5F0F\u7684\u503C\u6240\u5728\u7684\u6876\u53F7\u3002\u7279\u6B8A\u60C5\u51B5\uFF1A"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u8BE5\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u6574\u6570\u503C\u6216\u7A7A\u503C\uFF08\u5982\u679C\u4EFB\u4F55\u8F93\u5165\u4E3A\u7A7A\u503C\u5219\u8FD4\u56DE\u7A7A\u503C\uFF09\u3002"}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"WIDTH_BUCKET(<expr>, <min_value>, <max_value>, <num_buckets>)\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"\u53C2\u6570"}),(0,c.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,c.jsxs)(e.tbody,{children:[(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"<expr>"})}),(0,c.jsxs)(e.td,{children:["\u521B\u5EFA\u76F4\u65B9\u56FE\u7684\u8868\u8FBE\u5F0F\u3002\u6B64\u8868\u8FBE\u5F0F\u5FC5\u987B\u8BA1\u7B97\u4E3A\u6570\u503C\u6216\u53EF\u9690\u5F0F\u8F6C\u6362\u4E3A\u6570\u503C\u7684\u503C,\u6B64\u503C\u7684\u8303\u56F4\u5FC5\u987B\u4E3A ",(0,c.jsx)(e.code,{children:"-(2^53 - 1)"})," \u5230 ",(0,c.jsx)(e.code,{children:"2^53 - 1"})," (\u542B)"]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"<min_value>"})}),(0,c.jsxs)(e.td,{children:["\u8868\u8FBE\u5F0F\u53EF\u63A5\u53D7\u8303\u56F4\u7684\u6700\u4F4E\u503C\u70B9\u3002\u53C2\u6570\u5FC5\u987B\u4E3A\u6570\u503C\u4E14\u4E0D\u7B49\u4E8E",(0,c.jsx)(e.code,{children:"<max_value>"}),"\uFF0C\u8303\u56F4\u5FC5\u987B\u4E3A ",(0,c.jsx)(e.code,{children:"-(2^53 - 1)"})," to ",(0,c.jsx)(e.code,{children:"2^53 - 1"})," (\u542B)). \u6B64\u5916\uFF0C\u6700\u9AD8\u503C\u70B9\u4E0E\u6700\u4F4E\u503C\u70B9\u7684\u5DEE\u5FC5\u987B\u5C0F\u4E8E ",(0,c.jsx)(e.code,{children:"2^53"})," (\u4F8B\u5982\uFF1A ",(0,c.jsx)(e.code,{children:"abs(max_value - min_value) < 2^53)"})]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"<max_value>"})}),(0,c.jsxs)(e.td,{children:["\u8868\u8FBE\u5F0F\u53EF\u63A5\u53D7\u8303\u56F4\u7684\u6700\u9AD8\u503C\u70B9\u3002\u53C2\u6570\u5FC5\u987B\u4E3A\u6570\u503C\u4E14\u4E0D\u7B49\u4E8E",(0,c.jsx)(e.code,{children:"<min_value>"}),"\uFF0C\u8303\u56F4\u5FC5\u987B\u4E3A ",(0,c.jsx)(e.code,{children:"-(2^53 - 1)"})," to ",(0,c.jsx)(e.code,{children:"2^53 - 1"})," (\u542B)). \u6B64\u5916\uFF0C\u6700\u9AD8\u503C\u70B9\u4E0E\u6700\u4F4E\u503C\u70B9\u7684\u5DEE\u5FC5\u987B\u5C0F\u4E8E ",(0,c.jsx)(e.code,{children:"2^53"})," (\u4F8B\u5982\uFF1A ",(0,c.jsx)(e.code,{children:"abs(max_value - min_value) < 2^53)"})]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"<num_buckets>"})}),(0,c.jsx)(e.td,{children:"\u5206\u6876\u7684\u6570\u91CF\uFF0C\u5FC5\u987B\u662F\u6B63\u6574\u6570\u503C\u3002\u5C06\u8868\u8FBE\u5F0F\u4E2D\u7684\u4E00\u4E2A\u503C\u5206\u914D\u7ED9\u6BCF\u4E2A\u5B58\u50A8\u6876\uFF0C\u7136\u540E\u8BE5\u51FD\u6570\u8FD4\u56DE\u76F8\u5E94\u7684\u5B58\u50A8\u6876\u7F16\u53F7"})]})]})]}),"\n",(0,c.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,c.jsx)(e.p,{children:"\u8FD4\u56DE\u8868\u8FBE\u5F0F\u503C\u6240\u5728\u7684\u6876\u53F7\u3002\u5F53\u8868\u8FBE\u5F0F\u8D85\u51FA\u8303\u56F4\u65F6\uFF0C\u51FD\u6570\u8FD4\u56DE\u89C4\u5219\u5982\u4E0B\uFF1A"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\u5982\u679C\u8868\u8FBE\u5F0F\u7684\u503C\u5C0F\u4E8E",(0,c.jsx)(e.code,{children:"min_value"}),"\u8FD4\u56DE",(0,c.jsx)(e.code,{children:"0"}),"."]}),"\n",(0,c.jsxs)(e.li,{children:["\u5982\u679C\u8868\u8FBE\u5F0F\u7684\u503C\u5927\u4E8E\u6216\u7B49\u4E8E",(0,c.jsx)(e.code,{children:"max_value"}),"\u8FD4\u56DE",(0,c.jsx)(e.code,{children:"num_buckets + 1"}),"."]}),"\n",(0,c.jsxs)(e.li,{children:["\u5982\u679C\u4EFB\u610F\u53C2\u6570\u4E3A",(0,c.jsx)(e.code,{children:"null"}),"\u8FD4\u56DE",(0,c.jsx)(e.code,{children:"null"}),"."]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:'DROP TABLE IF EXISTS width_bucket_test;\n\nCREATE TABLE IF NOT EXISTS width_bucket_test (\n`k1` int NULL COMMENT "",\n`v1` date NULL COMMENT "",\n`v2` double NULL COMMENT "",\n`v3` bigint NULL COMMENT ""\n) ENGINE=OLAP\nDUPLICATE KEY(`k1`)\nDISTRIBUTED BY HASH(`k1`) BUCKETS 1\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1",\n"storage_format" = "V2"\n);\n\nINSERT INTO width_bucket_test VALUES  \n(1, "2022-11-18", 290000.00, 290000),\n(2, "2023-11-18", 320000.00, 320000),\n(3, "2024-11-18", 399999.99, 399999), \n(4, "2025-11-18", 400000.00, 400000), \n(5, "2026-11-18", 470000.00, 470000), \n(6, "2027-11-18", 510000.00, 510000), \n(7, "2028-11-18", 610000.00, 610000), \n(8, null, null, null);\n'})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"SELECT * FROM width_bucket_test ORDER BY k1;                                      \n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-text",children:"+------+------------+-----------+--------+\n| k1   | v1         | v2        | v3     |\n+------+------------+-----------+--------+\n|    1 | 2022-11-18 |    290000 | 290000 |\n|    2 | 2023-11-18 |    320000 | 320000 |\n|    3 | 2024-11-18 | 399999.99 | 399999 |\n|    4 | 2025-11-18 |    400000 | 400000 |\n|    5 | 2026-11-18 |    470000 | 470000 |\n|    6 | 2027-11-18 |    510000 | 510000 |\n|    7 | 2028-11-18 |    610000 | 610000 |\n|    8 | NULL       |      NULL |   NULL |\n+------+------------+-----------+--------+\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"SELECT k1, v1, v2, v3, width_bucket(v1, date('2023-11-18'), date('2027-11-18'), 4) AS w FROM width_bucket_test ORDER BY k1;\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-text",children:"+------+------------+-----------+--------+------+\n| k1   | v1         | v2        | v3     | w    |\n+------+------------+-----------+--------+------+\n|    1 | 2022-11-18 |    290000 | 290000 |    0 |\n|    2 | 2023-11-18 |    320000 | 320000 |    1 |\n|    3 | 2024-11-18 | 399999.99 | 399999 |    2 |\n|    4 | 2025-11-18 |    400000 | 400000 |    3 |\n|    5 | 2026-11-18 |    470000 | 470000 |    4 |\n|    6 | 2027-11-18 |    510000 | 510000 |    5 |\n|    7 | 2028-11-18 |    610000 | 610000 |    5 |\n|    8 | NULL       |      NULL |   NULL | NULL |\n+------+------------+-----------+--------+------+\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"SELECT k1, v1, v2, v3, width_bucket(v2, 200000, 600000, 4) AS w FROM width_bucket_test ORDER BY k1;\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-text",children:"+------+------------+-----------+--------+------+\n| k1   | v1         | v2        | v3     | w    |\n+------+------------+-----------+--------+------+\n|    1 | 2022-11-18 |    290000 | 290000 |    1 |\n|    2 | 2023-11-18 |    320000 | 320000 |    2 |\n|    3 | 2024-11-18 | 399999.99 | 399999 |    2 |\n|    4 | 2025-11-18 |    400000 | 400000 |    3 |\n|    5 | 2026-11-18 |    470000 | 470000 |    3 |\n|    6 | 2027-11-18 |    510000 | 510000 |    4 |\n|    7 | 2028-11-18 |    610000 | 610000 |    5 |\n|    8 | NULL       |      NULL |   NULL | NULL |\n+------+------------+-----------+--------+------+\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"SELECT k1, v1, v2, v3, width_bucket(v3, 200000, 600000, 4) AS w FROM width_bucket_test ORDER BY k1;\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-text",children:"+------+------------+-----------+--------+------+\n| k1   | v1         | v2        | v3     | w    |\n+------+------------+-----------+--------+------+\n|    1 | 2022-11-18 |    290000 | 290000 |    1 |\n|    2 | 2023-11-18 |    320000 | 320000 |    2 |\n|    3 | 2024-11-18 | 399999.99 | 399999 |    2 |\n|    4 | 2025-11-18 |    400000 | 400000 |    3 |\n|    5 | 2026-11-18 |    470000 | 470000 |    3 |\n|    6 | 2027-11-18 |    510000 | 510000 |    4 |\n|    7 | 2028-11-18 |    610000 | 610000 |    5 |\n|    8 | NULL       |      NULL |   NULL | NULL |\n+------+------------+-----------+--------+------+\n"})})]})}function o(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(u,{...n})}):u(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return d},a:function(){return i}});var l=s(667294);let c={},t=l.createContext(c);function i(n){let e=l.useContext(t);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:i(n.components),l.createElement(t.Provider,{value:e},n.children)}}}]);