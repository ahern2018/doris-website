"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["738651"],{531997:function(n,e,a){a.r(e),a.d(e,{metadata:()=>r,contentTitle:()=>c,default:()=>u,assets:()=>o,toc:()=>i,frontMatter:()=>l});var r=JSON.parse('{"id":"admin-manual/data-admin/ccr/quickstart","title":"\u5FEB\u901F\u5F00\u59CB","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/data-admin/ccr/quickstart.md","sourceDirName":"admin-manual/data-admin/ccr","slug":"/admin-manual/data-admin/ccr/quickstart","permalink":"/zh-CN/docs/admin-manual/data-admin/ccr/quickstart","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"\u5FEB\u901F\u5F00\u59CB","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u6982\u8FF0","permalink":"/zh-CN/docs/admin-manual/data-admin/ccr/overview"},"next":{"title":"\u64CD\u4F5C\u624B\u518C","permalink":"/zh-CN/docs/admin-manual/data-admin/ccr/manual"}}'),t=a("785893"),s=a("250065");let l={title:"\u5FEB\u901F\u5F00\u59CB",language:"zh-CN"},c=void 0,o={},i=[{value:"1. \u6253\u5F00\u6E90\u548C\u76EE\u6807\u96C6\u7FA4\u7684 binlog \u914D\u7F6E",id:"1-\u6253\u5F00\u6E90\u548C\u76EE\u6807\u96C6\u7FA4\u7684-binlog-\u914D\u7F6E",level:2},{value:"2. \u90E8\u7F72 Syncer",id:"2-\u90E8\u7F72-syncer",level:2},{value:"\u7B2C\u4E09\u6B65\u3002\u6253\u5F00\u6E90\u96C6\u7FA4\u4E2D\u540C\u6B65\u5E93/\u8868\u7684 Binlog",id:"\u7B2C\u4E09\u6B65\u6253\u5F00\u6E90\u96C6\u7FA4\u4E2D\u540C\u6B65\u5E93\u8868\u7684-binlog",level:2},{value:"\u7B2C\u56DB\u6B65\u3002\u5411 Syncer \u53D1\u8D77\u540C\u6B65\u4EFB\u52A1",id:"\u7B2C\u56DB\u6B65\u5411-syncer-\u53D1\u8D77\u540C\u6B65\u4EFB\u52A1",level:2}];function d(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"1-\u6253\u5F00\u6E90\u548C\u76EE\u6807\u96C6\u7FA4\u7684-binlog-\u914D\u7F6E",children:"1. \u6253\u5F00\u6E90\u548C\u76EE\u6807\u96C6\u7FA4\u7684 binlog \u914D\u7F6E"}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u6E90\u96C6\u7FA4\u548C\u76EE\u6807\u96C6\u7FA4\u7684 fe.conf \u548C be.conf \u4E2D\u914D\u7F6E\u5982\u4E0B\u4FE1\u606F\uFF1A"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"enable_feature_binlog=true\n"})}),"\n",(0,t.jsx)(e.h2,{id:"2-\u90E8\u7F72-syncer",children:"2. \u90E8\u7F72 Syncer"}),"\n",(0,t.jsx)(e.p,{children:"2.1. \u4ECE\u5982\u4E0B\u94FE\u63A5\u4E0B\u8F7D\u6700\u65B0\u7684\u5305"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.code,{children:"https://apache-doris-releases.oss-accelerate.aliyuncs.com/ccr-syncer-2.1.4-x64.tar.xz"})}),"\n",(0,t.jsx)(e.p,{children:"2.2. \u542F\u52A8\u548C\u505C\u6B62 Syncer"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"# \u542F\u52A8\ncd bin && sh start_syncer.sh --daemon\n\n# \u505C\u6B62\nsh stop_syncer.sh\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u7B2C\u4E09\u6B65\u6253\u5F00\u6E90\u96C6\u7FA4\u4E2D\u540C\u6B65\u5E93\u8868\u7684-binlog",children:"\u7B2C\u4E09\u6B65\u3002\u6253\u5F00\u6E90\u96C6\u7FA4\u4E2D\u540C\u6B65\u5E93/\u8868\u7684 Binlog"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:'-- \u5982\u679C\u662F\u6574\u5E93\u540C\u6B65\uFF0C\u53EF\u4EE5\u6267\u884C\u5982\u4E0B\u811A\u672C\uFF0C\u4F7F\u5F97\u8BE5\u5E93\u4E0B\u9762\u6240\u6709\u7684\u8868\u90FD\u8981\u6253\u5F00 binlog.enable\n./enable_db_binlog.sh --host $host --port $port --user $user --password $password --db $db\n\n-- \u5982\u679C\u662F\u5355\u8868\u540C\u6B65\uFF0C\u5219\u53EA\u9700\u8981\u6253\u5F00 table \u7684 binlog.enable\uFF0C\u5728\u6E90\u96C6\u7FA4\u4E0A\u6267\u884C\uFF1A\nALTER TABLE enable_binlog SET ("binlog.enable" = "true");\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u7B2C\u56DB\u6B65\u5411-syncer-\u53D1\u8D77\u540C\u6B65\u4EFB\u52A1",children:"\u7B2C\u56DB\u6B65\u3002\u5411 Syncer \u53D1\u8D77\u540C\u6B65\u4EFB\u52A1"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:'curl -X POST -H "Content-Type: application/json" -d \'{\n    "name": "ccr_test",\n    "src": {\n      "host": "localhost",\n      "port": "9030",\n      "thrift_port": "9020",\n      "user": "root",\n      "password": "",\n      "database": "your_db_name",\n      "table": "your_table_name"\n    },\n    "dest": {\n      "host": "localhost",\n      "port": "9030",\n      "thrift_port": "9020",\n      "user": "root",\n      "password": "",\n      "database": "your_db_name",\n      "table": "your_table_name"\n    }\n}\' http://127.0.0.1:9190/create_ccr\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u540C\u6B65\u4EFB\u52A1\u7684\u53C2\u6570\u8BF4\u660E\uFF1A"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"name: CCR\u540C\u6B65\u4EFB\u52A1\u7684\u540D\u79F0\uFF0C\u552F\u4E00\u5373\u53EF\nhost\u3001port\uFF1A\u5BF9\u5E94\u96C6\u7FA4 Master FE\u7684host\u548Cmysql(jdbc) \u7684\u7AEF\u53E3\nuser\u3001password\uFF1Asyncer\u4EE5\u4F55\u79CD\u8EAB\u4EFD\u53BB\u5F00\u542F\u4E8B\u52A1\u3001\u62C9\u53D6\u6570\u636E\u7B49\ndatabase\u3001table\uFF1A\n\u5982\u679C\u662F\u5E93\u7EA7\u522B\u7684\u540C\u6B65\uFF0C\u5219\u586B\u5165your_db_name\uFF0Cyour_table_name\u4E3A\u7A7A\n\u5982\u679C\u662F\u8868\u7EA7\u522B\u540C\u6B65\uFF0C\u5219\u9700\u8981\u586B\u5165your_db_name\uFF0Cyour_table_name\n\u5411syncer\u53D1\u8D77\u540C\u6B65\u4EFB\u52A1\u4E2D\u7684name\u53EA\u80FD\u4F7F\u7528\u4E00\u6B21\n"})})]})}function u(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},250065:function(n,e,a){a.d(e,{Z:function(){return c},a:function(){return l}});var r=a(667294);let t={},s=r.createContext(t);function l(n){let e=r.useContext(s);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);