"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["184369"],{465889:function(e,a,n){n.r(a),n.d(a,{metadata:()=>t,contentTitle:()=>d,default:()=>p,assets:()=>c,toc:()=>o,frontMatter:()=>s});var t=JSON.parse('{"id":"data-operate/import/complex-types/variant","title":"Variant","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/data-operate/import/complex-types/variant.md","sourceDirName":"data-operate/import/complex-types","slug":"/data-operate/import/complex-types/variant","permalink":"/zh-CN/docs/3.0/data-operate/import/complex-types/variant","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Variant","language":"zh-CN"},"sidebar":"docs","previous":{"title":"HLL","permalink":"/zh-CN/docs/3.0/data-operate/import/complex-types/hll"},"next":{"title":"\u5F02\u5E38\u6570\u636E\u5904\u7406","permalink":"/zh-CN/docs/3.0/data-operate/import/handling-messy-data"}}'),r=n("785893"),i=n("250065");let s={title:"Variant",language:"zh-CN"},d=void 0,c={},o=[{value:"\u4F7F\u7528\u9650\u5236",id:"\u4F7F\u7528\u9650\u5236",level:2},{value:"CSV \u683C\u5F0F\u5BFC\u5165",id:"csv-\u683C\u5F0F\u5BFC\u5165",level:2},{value:"\u7B2C 1 \u6B65\uFF1A\u51C6\u5907\u6570\u636E",id:"\u7B2C-1-\u6B65\u51C6\u5907\u6570\u636E",level:3},{value:"\u7B2C 2 \u6B65\uFF1A\u5728\u5E93\u4E2D\u521B\u5EFA\u8868",id:"\u7B2C-2-\u6B65\u5728\u5E93\u4E2D\u521B\u5EFA\u8868",level:3},{value:"\u7B2C 3 \u6B65\uFF1A\u5BFC\u5165\u6570\u636E",id:"\u7B2C-3-\u6B65\u5BFC\u5165\u6570\u636E",level:3},{value:"\u7B2C 4 \u6B65\uFF1A\u68C0\u67E5\u5BFC\u5165\u6570\u636E",id:"\u7B2C-4-\u6B65\u68C0\u67E5\u5BFC\u5165\u6570\u636E",level:3},{value:"JSON \u683C\u5F0F\u5BFC\u5165",id:"json-\u683C\u5F0F\u5BFC\u5165",level:2},{value:"\u7B2C 1 \u6B65\uFF1A\u51C6\u5907\u6570\u636E",id:"\u7B2C-1-\u6B65\u51C6\u5907\u6570\u636E-1",level:3},{value:"\u7B2C 2 \u6B65\uFF1A\u5728\u5E93\u4E2D\u521B\u5EFA\u8868",id:"\u7B2C-2-\u6B65\u5728\u5E93\u4E2D\u521B\u5EFA\u8868-1",level:3},{value:"\u7B2C 3 \u6B65\uFF1A\u5BFC\u5165\u6570\u636E",id:"\u7B2C-3-\u6B65\u5BFC\u5165\u6570\u636E-1",level:3},{value:"\u7B2C 4 \u6B65\uFF1A\u68C0\u67E5\u5BFC\u5165\u6570\u636E",id:"\u7B2C-4-\u6B65\u68C0\u67E5\u5BFC\u5165\u6570\u636E-1",level:3}];function l(e){let a={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.p,{children:["VARIANT \u7C7B\u578B\u53EF\u4EE5\u5B58\u50A8\u534A\u7ED3\u6784\u5316\u7684 JSON \u6570\u636E\uFF0C\u5141\u8BB8\u5B58\u50A8\u5305\u542B\u4E0D\u540C\u6570\u636E\u7C7B\u578B\uFF08\u5982\u6574\u6570\u3001\u5B57\u7B26\u4E32\u3001\u5E03\u5C14\u503C\u7B49\uFF09\u7684\u590D\u6742\u6570\u636E\u7ED3\u6784\uFF0C\u800C\u65E0\u9700\u5728\u8868\u7ED3\u6784\u4E2D\u9884\u5148\u5B9A\u4E49\u5177\u4F53\u7684\u5217\u3002\u8BE5\u7C7B\u578B\u7279\u522B\u9002\u5408\u5904\u7406\u590D\u6742\u7684\u5D4C\u5957\u7ED3\u6784\uFF0C\u8FD9\u4E9B\u7ED3\u6784\u53EF\u80FD\u4F1A\u968F\u65F6\u53D1\u751F\u53D8\u5316\u3002\u5728\u5199\u5165\u8FC7\u7A0B\u4E2D\uFF0CVARIANT \u7C7B\u578B\u80FD\u591F\u81EA\u52A8\u63A8\u65AD\u5217\u7684\u7ED3\u6784\u548C\u7C7B\u578B\uFF0C\u52A8\u6001\u5408\u5E76\u5199\u5165\u7684 schema\uFF0C\u5E76\u901A\u8FC7\u5C06 JSON \u952E\u53CA\u5176\u5BF9\u5E94\u7684\u503C\u5B58\u50A8\u4E3A\u5217\u548C\u52A8\u6001\u5B50\u5217\u3002\u66F4\u591A\u6587\u6863\u8BF7\u53C2\u8003",(0,r.jsx)(a.a,{href:"/zh-CN/docs/3.0/sql-manual/sql-data-types/semi-structured/VARIANT",children:"VARIANT"}),"\u3002"]}),"\n",(0,r.jsx)(a.h2,{id:"\u4F7F\u7528\u9650\u5236",children:"\u4F7F\u7528\u9650\u5236"}),"\n",(0,r.jsx)(a.p,{children:"\u652F\u6301 CSV \u548C JSON \u683C\u5F0F\u3002"}),"\n",(0,r.jsx)(a.h2,{id:"csv-\u683C\u5F0F\u5BFC\u5165",children:"CSV \u683C\u5F0F\u5BFC\u5165"}),"\n",(0,r.jsx)(a.h3,{id:"\u7B2C-1-\u6B65\u51C6\u5907\u6570\u636E",children:"\u7B2C 1 \u6B65\uFF1A\u51C6\u5907\u6570\u636E"}),"\n",(0,r.jsxs)(a.p,{children:["\u521B\u5EFA\u540D\u4E3A ",(0,r.jsx)(a.code,{children:"test_variant.csv"})," \u7684 CSV \u6587\u4EF6\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:'14186154924|PushEvent|{"avatar_url":"https://avatars.githubusercontent.com/u/282080?","display_login":"brianchandotcom","gravatar_id":"","id":282080,"login":"brianchandotcom","url":"https://api.github.com/users/brianchandotcom"}|{"id":1920851,"name":"brianchandotcom/liferay-portal","url":"https://api.github.com/repos/brianchandotcom/liferay-portal"}|{"before":"abb58cc0db673a0bd5190000d2ff9c53bb51d04d","commits":[""],"distinct_size":4,"head":"91edd3c8c98c214155191feb852831ec535580ba","push_id":6027092734,"ref":"refs/heads/master","size":4}|1|2020-11-14 02:00:00\n'})}),"\n",(0,r.jsx)(a.h3,{id:"\u7B2C-2-\u6B65\u5728\u5E93\u4E2D\u521B\u5EFA\u8868",children:"\u7B2C 2 \u6B65\uFF1A\u5728\u5E93\u4E2D\u521B\u5EFA\u8868"}),"\n",(0,r.jsx)(a.p,{children:"\u6267\u884C\u4EE5\u4E0B SQL \u8BED\u53E5\u521B\u5EFA\u8868\uFF1A"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:'CREATE TABLE IF NOT EXISTS testdb.test_variant (\n    id BIGINT NOT NULL,\n    type VARCHAR(30) NULL,\n    actor VARIANT NULL,\n    repo VARIANT NULL,\n    payload VARIANT NULL,\n    public BOOLEAN NULL,\n    created_at DATETIME NULL,\n    INDEX idx_payload (`payload`) USING INVERTED PROPERTIES("parser" = "english") COMMENT \'inverted index for payload\'\n)\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(id) BUCKETS 10\nproperties("replication_num" = "1");\n'})}),"\n",(0,r.jsx)(a.h3,{id:"\u7B2C-3-\u6B65\u5BFC\u5165\u6570\u636E",children:"\u7B2C 3 \u6B65\uFF1A\u5BFC\u5165\u6570\u636E"}),"\n",(0,r.jsx)(a.p,{children:"\u4EE5 stream load \u4E3A\u4F8B\uFF0C\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u5BFC\u5165\u6570\u636E\uFF1A"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:'curl --location-trusted -u root:  -T test_variant.csv -H "column_separator:|" http://127.0.0.1:8030/api/testdb/test_variant/_stream_load\n'})}),"\n",(0,r.jsx)(a.p,{children:"\u5BFC\u5165\u7ED3\u679C\u793A\u4F8B\uFF1A"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:'{\n    "TxnId": 12,\n    "Label": "96cd6250-9c78-4a9f-b8b3-2b7cef0dd606",\n    "Comment": "",\n    "TwoPhaseCommit": "false",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 1,\n    "NumberLoadedRows": 1,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 660,\n    "LoadTimeMs": 213,\n    "BeginTxnTimeMs": 0,\n    "StreamLoadPutTimeMs": 6,\n    "ReadDataTimeMs": 0,\n    "WriteDataTimeMs": 183,\n    "ReceiveDataTimeMs": 14,\n    "CommitAndPublishTimeMs": 20\n}\n'})}),"\n",(0,r.jsx)(a.h3,{id:"\u7B2C-4-\u6B65\u68C0\u67E5\u5BFC\u5165\u6570\u636E",children:"\u7B2C 4 \u6B65\uFF1A\u68C0\u67E5\u5BFC\u5165\u6570\u636E"}),"\n",(0,r.jsx)(a.p,{children:"\u4F7F\u7528\u4EE5\u4E0B SQL \u67E5\u8BE2\u68C0\u67E5\u5BFC\u5165\u7684\u6570\u636E\uFF1A"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:'mysql> select * from testdb.test_variant\\G\n*************************** 1. row ***************************\n        id: 14186154924\n      type: PushEvent\n     actor: {"avatar_url":"https://avatars.githubusercontent.com/u/282080?","display_login":"brianchandotcom","gravatar_id":"","id":282080,"login":"brianchandotcom","url":"https://api.github.com/users/brianchandotcom"}\n      repo: {"id":1920851,"name":"brianchandotcom/liferay-portal","url":"https://api.github.com/repos/brianchandotcom/liferay-portal"}\n   payload: {"before":"abb58cc0db673a0bd5190000d2ff9c53bb51d04d","commits":[""],"distinct_size":4,"head":"91edd3c8c98c214155191feb852831ec535580ba","push_id":6027092734,"ref":"refs/heads/master","size":4}\n    public: 1\ncreated_at: 2020-11-14 02:00:00\n'})}),"\n",(0,r.jsx)(a.h2,{id:"json-\u683C\u5F0F\u5BFC\u5165",children:"JSON \u683C\u5F0F\u5BFC\u5165"}),"\n",(0,r.jsx)(a.h3,{id:"\u7B2C-1-\u6B65\u51C6\u5907\u6570\u636E-1",children:"\u7B2C 1 \u6B65\uFF1A\u51C6\u5907\u6570\u636E"}),"\n",(0,r.jsxs)(a.p,{children:["\u521B\u5EFA\u540D\u4E3A ",(0,r.jsx)(a.code,{children:"test_variant.json"})," \u7684 JSON \u6587\u4EF6\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:'{"id": "14186154924","type": "PushEvent","actor": {"id": 282080,"login":"brianchandotcom","display_login": "brianchandotcom","gravatar_id": "","url": "https://api.github.com/users/brianchandotcom","avatar_url": "https://avatars.githubusercontent.com/u/282080?"},"repo": {"id": 1920851,"name": "brianchandotcom/liferay-portal","url": "https://api.github.com/repos/brianchandotcom/liferay-portal"},"payload": {"push_id": 6027092734,"size": 4,"distinct_size": 4,"ref": "refs/heads/master","head": "91edd3c8c98c214155191feb852831ec535580ba","before": "abb58cc0db673a0bd5190000d2ff9c53bb51d04d","commits": [""]},"public": true,"created_at": "2020-11-13T18:00:00Z"}\n'})}),"\n",(0,r.jsx)(a.h3,{id:"\u7B2C-2-\u6B65\u5728\u5E93\u4E2D\u521B\u5EFA\u8868-1",children:"\u7B2C 2 \u6B65\uFF1A\u5728\u5E93\u4E2D\u521B\u5EFA\u8868"}),"\n",(0,r.jsx)(a.p,{children:"\u6267\u884C\u4EE5\u4E0B SQL \u8BED\u53E5\u521B\u5EFA\u8868\uFF1A"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:'CREATE TABLE IF NOT EXISTS testdb.test_variant (\n    id BIGINT NOT NULL,\n    type VARCHAR(30) NULL,\n    actor VARIANT NULL,\n    repo VARIANT NULL,\n    payload VARIANT NULL,\n    public BOOLEAN NULL,\n    created_at DATETIME NULL,\n    INDEX idx_payload (`payload`) USING INVERTED PROPERTIES("parser" = "english") COMMENT \'inverted index for payload\'\n)\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(id) BUCKETS 10;\n'})}),"\n",(0,r.jsx)(a.h3,{id:"\u7B2C-3-\u6B65\u5BFC\u5165\u6570\u636E-1",children:"\u7B2C 3 \u6B65\uFF1A\u5BFC\u5165\u6570\u636E"}),"\n",(0,r.jsx)(a.p,{children:"\u4EE5 stream load \u4E3A\u4F8B\uFF0C\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u5BFC\u5165\u6570\u636E\uFF1A"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:'curl --location-trusted -u root:  -T test_variant.json -H "format:json"  http://127.0.0.1:8030/api/testdb/test_variant/_stream_load\n'})}),"\n",(0,r.jsx)(a.p,{children:"\u5BFC\u5165\u7ED3\u679C\u793A\u4F8B\uFF1A"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:'{\n    "TxnId": 12,\n    "Label": "96cd6250-9c78-4a9f-b8b3-2b7cef0dd606",\n    "Comment": "",\n    "TwoPhaseCommit": "false",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 1,\n    "NumberLoadedRows": 1,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 660,\n    "LoadTimeMs": 213,\n    "BeginTxnTimeMs": 0,\n    "StreamLoadPutTimeMs": 6,\n    "ReadDataTimeMs": 0,\n    "WriteDataTimeMs": 183,\n    "ReceiveDataTimeMs": 14,\n    "CommitAndPublishTimeMs": 20\n}\n'})}),"\n",(0,r.jsx)(a.h3,{id:"\u7B2C-4-\u6B65\u68C0\u67E5\u5BFC\u5165\u6570\u636E-1",children:"\u7B2C 4 \u6B65\uFF1A\u68C0\u67E5\u5BFC\u5165\u6570\u636E"}),"\n",(0,r.jsx)(a.p,{children:"\u4F7F\u7528\u4EE5\u4E0B SQL \u67E5\u8BE2\u68C0\u67E5\u5BFC\u5165\u7684\u6570\u636E\uFF1A"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:'mysql> select * from testdb.test_variant\\G\n*************************** 1. row ***************************\n        id: 14186154924\n      type: PushEvent\n     actor: {"avatar_url":"https://avatars.githubusercontent.com/u/282080?","display_login":"brianchandotcom","gravatar_id":"","id":282080,"login":"brianchandotcom","url":"https://api.github.com/users/brianchandotcom"}\n      repo: {"id":1920851,"name":"brianchandotcom/liferay-portal","url":"https://api.github.com/repos/brianchandotcom/liferay-portal"}\n   payload: {"before":"abb58cc0db673a0bd5190000d2ff9c53bb51d04d","commits":[""],"distinct_size":4,"head":"91edd3c8c98c214155191feb852831ec535580ba","push_id":6027092734,"ref":"refs/heads/master","size":4}\n    public: 1\ncreated_at: 2020-11-14 02:00:00\n'})})]})}function p(e={}){let{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,a,n){n.d(a,{Z:function(){return d},a:function(){return s}});var t=n(667294);let r={},i=t.createContext(r);function s(e){let a=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:a},e.children)}}}]);