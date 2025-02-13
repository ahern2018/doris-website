"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["959961"],{526568:function(e,n,s){s.r(n),s.d(n,{metadata:()=>c,contentTitle:()=>l,default:()=>h,assets:()=>i,toc:()=>a,frontMatter:()=>d});var c=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/sequence-match","title":"SEQUENCE_MATCH","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/aggregate-functions/sequence-match.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/sequence-match","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/sequence-match","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SEQUENCE_MATCH","language":"zh-CN"},"sidebar":"docs","previous":{"title":"RETENTION","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/retention"},"next":{"title":"SEQUENCE_COUNT","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/sequence-count"}}'),t=s("785893"),r=s("250065");let d={title:"SEQUENCE_MATCH",language:"zh-CN"},l=void 0,i={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function u(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(n.p,{children:"\u68C0\u67E5\u5E8F\u5217\u662F\u5426\u5305\u542B\u4E0E\u6A21\u5F0F\u5339\u914D\u7684\u4E8B\u4EF6\u94FE\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u8B66\u544A!"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u540C\u4E00\u79D2\u949F\u53D1\u751F\u7684\u4E8B\u4EF6\u53EF\u80FD\u4EE5\u672A\u5B9A\u4E49\u7684\u987A\u5E8F\u6392\u5217\u5728\u5E8F\u5217\u4E2D\uFF0C\u4F1A\u5F71\u54CD\u6700\u7EC8\u7ED3\u679C\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SEQUENCE_MATCH(<pattern>, <timestamp>, <cond_1> [, <cond_2>, ..., <cond_n>])\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u53C2\u6570"}),(0,t.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"<pattern>"})}),(0,t.jsxs)(n.td,{children:["\u6A21\u5F0F\u5B57\u7B26\u4E32\uFF0C\u53EF\u53C2\u8003\u4E0B\u9762\u7684",(0,t.jsx)(n.strong,{children:"\u6A21\u5F0F\u8BED\u6CD5"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"<timestamp>"})}),(0,t.jsxs)(n.td,{children:["\u5305\u542B\u65F6\u95F4\u7684\u5217\u3002\u5178\u578B\u7684\u65F6\u95F4\u7C7B\u578B\u662F\uFF1A ",(0,t.jsx)(n.code,{children:"Date"})," \u548C ",(0,t.jsx)(n.code,{children:"DateTime"}),"\u3002\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4EFB\u4F55\u652F\u6301\u7684 ",(0,t.jsx)(n.code,{children:"UInt"})," \u6570\u636E\u7C7B\u578B\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"<cond_n>"})}),(0,t.jsxs)(n.td,{children:["\u4E8B\u4EF6\u94FE\u7684\u7EA6\u675F\u6761\u4EF6\u3002 \u6570\u636E\u7C7B\u578B\u662F\uFF1A ",(0,t.jsx)(n.code,{children:"UInt8"}),"\u3002\u6700\u591A\u53EF\u4EE5\u4F20\u901232\u4E2A\u6761\u4EF6\u53C2\u6570\u3002\u8BE5\u51FD\u6570\u53EA\u8003\u8651\u8FD9\u4E9B\u6761\u4EF6\u4E2D\u63CF\u8FF0\u7684\u4E8B\u4EF6\u3002\u5982\u679C\u5E8F\u5217\u5305\u542B\u672A\u5728\u6761\u4EF6\u4E2D\u63CF\u8FF0\u7684\u6570\u636E\uFF0C\u5219\u51FD\u6570\u5C06\u8DF3\u8FC7\u8FD9\u4E9B\u6570\u636E\u3002"]})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u6A21\u5F0F\u8BED\u6CD5"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"(?N)"})," \u2014 \u5728\u4F4D\u7F6EN\u5339\u914D\u6761\u4EF6\u53C2\u6570\u3002 \u6761\u4EF6\u5728\u7F16\u53F7 ",(0,t.jsx)(n.code,{children:"[1, 32]"})," \u8303\u56F4\u3002 \u4F8B\u5982, ",(0,t.jsx)(n.code,{children:"(?1)"})," \u5339\u914D\u4F20\u9012\u7ED9 ",(0,t.jsx)(n.code,{children:"cond1"})," \u53C2\u6570\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:".*"})," \u2014 \u5339\u914D\u4EFB\u4F55\u4E8B\u4EF6\u7684\u6570\u5B57\u3002 \u4E0D\u9700\u8981\u6761\u4EF6\u53C2\u6570\u6765\u5339\u914D\u8FD9\u4E2A\u6A21\u5F0F\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"(?t operator value)"})," \u2014 \u5206\u5F00\u4E24\u4E2A\u4E8B\u4EF6\u7684\u65F6\u95F4\u3002 \u5355\u4F4D\u4E3A\u79D2\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"t"}),"\u8868\u793A\u4E3A\u4E24\u4E2A\u65F6\u95F4\u7684\u5DEE\u503C\uFF0C\u5355\u4F4D\u4E3A\u79D2\u3002 \u4F8B\u5982\uFF1A ",(0,t.jsx)(n.code,{children:"(?1)(?t>1800)(?2)"})," \u5339\u914D\u5F7C\u6B64\u53D1\u751F\u8D85\u8FC71800\u79D2\u7684\u4E8B\u4EF6\uFF0C ",(0,t.jsx)(n.code,{children:"(?1)(?t>10000)(?2)"}),"\u5339\u914D\u5F7C\u6B64\u53D1\u751F\u8D85\u8FC710000\u79D2\u7684\u4E8B\u4EF6\u3002 \u8FD9\u4E9B\u4E8B\u4EF6\u4E4B\u95F4\u53EF\u4EE5\u5B58\u5728\u4EFB\u610F\u6570\u91CF\u7684\u4EFB\u4F55\u4E8B\u4EF6\u3002 \u60A8\u53EF\u4EE5\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:">="}),", ",(0,t.jsx)(n.code,{children:">"}),", ",(0,t.jsx)(n.code,{children:"<"}),", ",(0,t.jsx)(n.code,{children:"<="}),", ",(0,t.jsx)(n.code,{children:"=="})," \u8FD0\u7B97\u7B26\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,t.jsx)(n.p,{children:"1\uFF1A\u6A21\u5F0F\u5339\u914D\u3002"}),"\n",(0,t.jsx)(n.p,{children:"0\uFF1A\u6A21\u5F0F\u4E0D\u5339\u914D\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u5339\u914D\u4F8B\u5B50"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE sequence_match_test1(\n    `uid` int COMMENT 'user id',\n    `date` datetime COMMENT 'date time', \n    `number` int NULL COMMENT 'number' \n) DUPLICATE KEY(uid) \nDISTRIBUTED BY HASH(uid) BUCKETS AUTO\nPROPERTIES ( \n    \"replication_num\" = \"1\"\n); \n\nINSERT INTO sequence_match_test1(uid, date, number) values\n(1, '2022-11-02 10:41:00', 1),\n(2, '2022-11-02 13:28:02', 2),\n(3, '2022-11-02 16:15:01', 1),\n(4, '2022-11-02 19:05:04', 2),\n(5, '2022-11-02 20:08:44', 3); \n\n\nSELECT \nsequence_match('(?1)(?2)', date, number = 1, number = 3) as c1,\nsequence_match('(?1)(?2)', date, number = 1, number = 2) as c2,\nsequence_match('(?1)(?t>=3600)(?2)', date, number = 1, number = 2) as c3\nFROM sequence_match_test1;\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+------+------+------+\n| c1   | c2   | c3   |\n+------+------+------+\n|    1 |    1 |    1 |\n+------+------+------+\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u4E0D\u5339\u914D\u4F8B\u5B50"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE sequence_match_test2(\n    `uid` int COMMENT 'user id',\n    `date` datetime COMMENT 'date time', \n    `number` int NULL COMMENT 'number' \n) DUPLICATE KEY(uid) \nDISTRIBUTED BY HASH(uid) BUCKETS AUTO\nPROPERTIES ( \n    \"replication_num\" = \"1\"\n); \n\nINSERT INTO sequence_match_test2(uid, date, number) values\n(1, '2022-11-02 10:41:00', 1),\n(2, '2022-11-02 11:41:00', 7),\n(3, '2022-11-02 16:15:01', 3),\n(4, '2022-11-02 19:05:04', 4),\n(5, '2022-11-02 21:24:12', 5);\n\nSELECT \nsequence_match('(?1)(?2)', date, number = 1, number = 2) as c1,\nsequence_match('(?1)(?2).*', date, number = 1, number = 2) as c2,\nsequence_match('(?1)(?t>3600)(?2)', date, number = 1, number = 7) as c3\nFROM sequence_match_test2;\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+------+------+------+\n| c1   | c2   | c3   |\n+------+------+------+\n|    0 |    0 |    0 |\n+------+------+------+\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u7279\u6B8A\u4F8B\u5B50"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE sequence_match_test3(\n    `uid` int COMMENT 'user id',\n    `date` datetime COMMENT 'date time', \n    `number` int NULL COMMENT 'number' \n) DUPLICATE KEY(uid) \nDISTRIBUTED BY HASH(uid) BUCKETS AUTO\nPROPERTIES ( \n    \"replication_num\" = \"1\"\n); \n\nINSERT INTO sequence_match_test3(uid, date, number) values\n(1, '2022-11-02 10:41:00', 1),\n(2, '2022-11-02 11:41:00', 7),\n(3, '2022-11-02 16:15:01', 3),\n(4, '2022-11-02 19:05:04', 4),\n(5, '2022-11-02 21:24:12', 5);\n\nSELECT sequence_match('(?1)(?2)', date, number = 1, number = 5)\nFROM sequence_match_test3;\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+----------------------------------------------------------------+\n| sequence_match('(?1)(?2)', `date`, `number` = 1, `number` = 5) |\n+----------------------------------------------------------------+\n|                                                              1 |\n+----------------------------------------------------------------+\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4E0A\u9762\u4E3A\u4E00\u4E2A\u975E\u5E38\u7B80\u5355\u7684\u5339\u914D\u4F8B\u5B50\uFF0C \u8BE5\u51FD\u6570\u627E\u5230\u4E86\u6570\u5B575\u8DDF\u968F\u6570\u5B571\u7684\u4E8B\u4EF6\u94FE\u3002 \u5B83\u8DF3\u8FC7\u4E86\u5B83\u4EEC\u4E4B\u95F4\u7684\u6570\u5B577\uFF0C3\uFF0C4\uFF0C\u56E0\u4E3A\u8BE5\u6570\u5B57\u6CA1\u6709\u88AB\u63CF\u8FF0\u4E3A\u4E8B\u4EF6\u3002 \u5982\u679C\u6211\u4EEC\u60F3\u5728\u641C\u7D22\u793A\u4F8B\u4E2D\u7ED9\u51FA\u7684\u4E8B\u4EF6\u94FE\u65F6\u8003\u8651\u8FD9\u4E2A\u6570\u5B57\uFF0C\u6211\u4EEC\u5E94\u8BE5\u4E3A\u5B83\u521B\u5EFA\u4E00\u4E2A\u6761\u4EF6\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u73B0\u5728\uFF0C\u8003\u8651\u5982\u4E0B\u6267\u884C\u8BED\u53E5\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT sequence_match('(?1)(?2)', date, number = 1, number = 5, number = 4)\nFROM sequence_match_test3;\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+------------------------------------------------------------------------------+\n| sequence_match('(?1)(?2)', `date`, `number` = 1, `number` = 5, `number` = 4) |\n+------------------------------------------------------------------------------+\n|                                                                            0 |\n+------------------------------------------------------------------------------+\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u60A8\u53EF\u80FD\u5BF9\u8FD9\u4E2A\u7ED3\u679C\u6709\u4E9B\u8BB8\u7591\u60D1\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u51FD\u6570\u627E\u4E0D\u5230\u4E0E\u6A21\u5F0F\u5339\u914D\u7684\u4E8B\u4EF6\u94FE\uFF0C\u56E0\u4E3A\u6570\u5B574\u7684\u4E8B\u4EF6\u53D1\u751F\u57281\u548C5\u4E4B\u95F4\u3002 \u5982\u679C\u5728\u76F8\u540C\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u68C0\u67E5\u4E86\u6570\u5B576\u7684\u6761\u4EF6\uFF0C\u5219\u5E8F\u5217\u5C06\u4E0E\u6A21\u5F0F\u5339\u914D\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT sequence_match('(?1)(?2)', date, number = 1, number = 5, number = 6)\nFROM sequence_match_test3;\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+------------------------------------------------------------------------------+\n| sequence_match('(?1)(?2)', `date`, `number` = 1, `number` = 5, `number` = 6) |\n+------------------------------------------------------------------------------+\n|                                                                            1 |\n+------------------------------------------------------------------------------+\n"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var c=s(667294);let t={},r=c.createContext(t);function d(e){let n=c.useContext(r);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);