"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["807261"],{80312:function(t,e,n){n.r(e),n.d(e,{metadata:()=>l,contentTitle:()=>r,default:()=>d,assets:()=>i,toc:()=>u,frontMatter:()=>o});var l=JSON.parse('{"id":"sql-manual/sql-reference/Data-Manipulation-Statements/Load/MULTI-LOAD","title":"MULTI-LOAD","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/MULTI-LOAD.md","sourceDirName":"sql-manual/sql-reference/Data-Manipulation-Statements/Load","slug":"/sql-manual/sql-reference/Data-Manipulation-Statements/Load/MULTI-LOAD","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/MULTI-LOAD","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"MULTI-LOAD","language":"zh-CN"},"sidebar":"docs","previous":{"title":"STREAM-LOAD","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD"},"next":{"title":"BROKER-LOAD","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD"}}'),a=n("785893"),s=n("250065");let o={title:"MULTI-LOAD",language:"zh-CN"},r=void 0,i={},u=[{value:"MULTI-LOAD",id:"multi-load",level:2},{value:"Name",id:"name",level:3},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function c(t){let e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"multi-load",children:"MULTI-LOAD"}),"\n",(0,a.jsx)(e.h3,{id:"name",children:"Name"}),"\n",(0,a.jsx)(e.p,{children:"MULTI LOAD"}),"\n",(0,a.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,a.jsx)(e.p,{children:"\u7528\u6237\u901A\u8FC7 HTTP \u534F\u8BAE\u63D0\u4EA4\u591A\u4E2A\u5BFC\u5165\u4F5C\u4E1A\u3002Multi Load \u53EF\u4EE5\u4FDD\u8BC1\u591A\u4E2A\u5BFC\u5165\u4F5C\u4E1A\u7684\u539F\u5B50\u751F\u6548"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"Syntax:\n    curl --location-trusted -u user:passwd -XPOST http://host:port/api/{db}/_multi_start?label=xxx\n    curl --location-trusted -u user:passwd -T data.file http://host:port/api/{db}/{table1}/_load?label=xxx\\&sub_label=yyy\n    curl --location-trusted -u user:passwd -T data.file http://host:port/api/{db}/{table2}/_load?label=xxx\\&sub_label=zzz\n    curl --location-trusted -u user:passwd -XPOST http://host:port/api/{db}/_multi_commit?label=xxx\n    curl --location-trusted -u user:passwd -XPOST http://host:port/api/{db}/_multi_desc?label=xxx\n\n'MULTI LOAD'\u5728'MINI LOAD'\u7684\u57FA\u7840\u4E0A\uFF0C\u53EF\u4EE5\u652F\u6301\u7528\u6237\u540C\u65F6\u5411\u591A\u4E2A\u8868\u8FDB\u884C\u5BFC\u5165\uFF0C\u5177\u4F53\u7684\u547D\u4EE4\u5982\u4E0A\u9762\u6240\u793A\n'/api/{db}/_multi_start'    \u5F00\u59CB\u4E00\u4E2A\u591A\u8868\u5BFC\u5165\u4EFB\u52A1\n'/api/{db}/{table}/_load'   \u5411\u4E00\u4E2A\u5BFC\u5165\u4EFB\u52A1\u6DFB\u52A0\u4E00\u4E2A\u8981\u5BFC\u5165\u7684\u8868\uFF0C\u4E0E'MINI LOAD'\u7684\u4E3B\u8981\u533A\u522B\u662F\uFF0C\u9700\u8981\u4F20\u5165'sub_label'\u53C2\u6570\n'/api/{db}/_multi_commit'   \u63D0\u4EA4\u6574\u4E2A\u591A\u8868\u5BFC\u5165\u4EFB\u52A1\uFF0C\u540E\u53F0\u5F00\u59CB\u8FDB\u884C\u5904\u7406\n'/api/{db}/_multi_abort'    \u653E\u5F03\u4E00\u4E2A\u591A\u8868\u5BFC\u5165\u4EFB\u52A1\n'/api/{db}/_multi_desc'     \u53EF\u4EE5\u5C55\u793A\u67D0\u4E2A\u591A\u8868\u5BFC\u5165\u4EFB\u52A1\u5DF2\u7ECF\u63D0\u4EA4\u7684\u4F5C\u4E1A\u6570\n\nHTTP\u534F\u8BAE\u76F8\u5173\u8BF4\u660E\n    \u6743\u9650\u8BA4\u8BC1            \u5F53\u524D Doris \u4F7F\u7528http\u7684Basic\u65B9\u5F0F\u6743\u9650\u8BA4\u8BC1\u3002\u6240\u4EE5\u5728\u5BFC\u5165\u7684\u65F6\u5019\u9700\u8981\u6307\u5B9A\u7528\u6237\u540D\u5BC6\u7801\n                        \u8FD9\u79CD\u65B9\u5F0F\u662F\u660E\u6587\u4F20\u9012\u5BC6\u7801\u7684\uFF0C\u9274\u4E8E\u6211\u4EEC\u5F53\u524D\u90FD\u662F\u5185\u7F51\u73AF\u5883\u3002\u3002\u3002\n\n    Expect              Doris \u9700\u8981\u53D1\u9001\u8FC7\u6765\u7684http\u8BF7\u6C42\uFF0C\u9700\u8981\u6709'Expect'\u5934\u90E8\u4FE1\u606F\uFF0C\u5185\u5BB9\u4E3A'100-continue'\n                        \u4E3A\u4EC0\u4E48\u5462\uFF1F\u56E0\u4E3A\u6211\u4EEC\u9700\u8981\u5C06\u8BF7\u6C42\u8FDB\u884Credirect\uFF0C\u90A3\u4E48\u5FC5\u987B\u5728\u4F20\u8F93\u6570\u636E\u5185\u5BB9\u4E4B\u524D\uFF0C\n                        \u8FD9\u6837\u53EF\u4EE5\u907F\u514D\u9020\u6210\u6570\u636E\u7684\u591A\u6B21\u4F20\u8F93\uFF0C\u4ECE\u800C\u63D0\u9AD8\u6548\u7387\u3002\n\n    Content-Length      Doris \u9700\u8981\u5728\u53D1\u9001\u8BF7\u6C42\u662F\u5E26\u6709'Content-Length'\u8FD9\u4E2A\u5934\u90E8\u4FE1\u606F\u3002\u5982\u679C\u53D1\u9001\u7684\u5185\u5BB9\u6BD4\n                        'Content-Length'\u8981\u5C11\uFF0C\u90A3\u4E48Palo\u8BA4\u4E3A\u4F20\u8F93\u51FA\u73B0\u95EE\u9898\uFF0C\u5219\u63D0\u4EA4\u6B64\u6B21\u4EFB\u52A1\u5931\u8D25\u3002\n                        NOTE: \u5982\u679C\uFF0C\u53D1\u9001\u7684\u6570\u636E\u6BD4'Content-Length'\u8981\u591A\uFF0C\u90A3\u4E48 Doris \u53EA\u8BFB\u53D6'Content-Length'\n                        \u957F\u5EA6\u7684\u5185\u5BB9\uFF0C\u5E76\u8FDB\u884C\u5BFC\u5165\n\n\u53C2\u6570\u8BF4\u660E\uFF1A\n    user:               \u7528\u6237\u5982\u679C\u662F\u5728default_cluster\u4E2D\u7684\uFF0Cuser\u5373\u4E3Auser_name\u3002\u5426\u5219\u4E3Auser_name@cluster_name\u3002\n\n    label:              \u7528\u4E8E\u6307\u5B9A\u8FD9\u4E00\u6279\u6B21\u5BFC\u5165\u7684label\u53F7\uFF0C\u7528\u4E8E\u540E\u671F\u8FDB\u884C\u4F5C\u4E1A\u72B6\u6001\u67E5\u8BE2\u7B49\u3002\n                        \u8FD9\u4E2A\u53C2\u6570\u662F\u5FC5\u987B\u4F20\u5165\u7684\u3002\n\n    sub_label:          \u7528\u4E8E\u6307\u5B9A\u4E00\u4E2A\u591A\u8868\u5BFC\u5165\u4EFB\u52A1\u5185\u90E8\u7684\u5B50\u7248\u672C\u53F7\u3002\u5BF9\u4E8E\u591A\u8868\u5BFC\u5165\u7684load\uFF0C \u8FD9\u4E2A\u53C2\u6570\u662F\u5FC5\u987B\u4F20\u5165\u7684\u3002\n\n    columns:            \u7528\u4E8E\u63CF\u8FF0\u5BFC\u5165\u6587\u4EF6\u4E2D\u5BF9\u5E94\u7684\u5217\u540D\u5B57\u3002\n                        \u5982\u679C\u4E0D\u4F20\u5165\uFF0C\u90A3\u4E48\u8BA4\u4E3A\u6587\u4EF6\u4E2D\u7684\u5217\u987A\u5E8F\u4E0E\u5EFA\u8868\u7684\u987A\u5E8F\u4E00\u81F4\uFF0C\n                        \u6307\u5B9A\u7684\u65B9\u5F0F\u4E3A\u9017\u53F7\u5206\u9694\uFF0C\u4F8B\u5982\uFF1Acolumns=k1,k2,k3,k4\n\n    column_separator:   \u7528\u4E8E\u6307\u5B9A\u5217\u4E0E\u5217\u4E4B\u95F4\u7684\u5206\u9694\u7B26\uFF0C\u9ED8\u8BA4\u7684\u4E3A'\\t'\n                        NOTE: \u9700\u8981\u8FDB\u884Curl\u7F16\u7801\uFF0C\u8B6C\u5982\u9700\u8981\u6307\u5B9A'\\t'\u4E3A\u5206\u9694\u7B26\uFF0C\n                        \u90A3\u4E48\u5E94\u8BE5\u4F20\u5165'column_separator=%09'\n\n    max_filter_ratio:   \u7528\u4E8E\u6307\u5B9A\u5141\u8BB8\u8FC7\u6EE4\u4E0D\u89C4\u8303\u6570\u636E\u7684\u6700\u5927\u6BD4\u4F8B\uFF0C\u9ED8\u8BA4\u662F0\uFF0C\u4E0D\u5141\u8BB8\u8FC7\u6EE4\n                        \u81EA\u5B9A\u4E49\u6307\u5B9A\u5E94\u8BE5\u5982\u4E0B\uFF1A'max_filter_ratio=0.2'\uFF0C\u542B\u4E49\u662F\u5141\u8BB820%\u7684\u9519\u8BEF\u7387\n                        \u5728'_multi_start'\u65F6\u4F20\u5165\u6709\u6548\u679C\n\nNOTE: \n    1. \u6B64\u79CD\u5BFC\u5165\u65B9\u5F0F\u5F53\u524D\u662F\u5728\u4E00\u53F0\u673A\u5668\u4E0A\u5B8C\u6210\u5BFC\u5165\u5DE5\u4F5C\uFF0C\u56E0\u800C\u4E0D\u5B9C\u8FDB\u884C\u6570\u636E\u91CF\u8F83\u5927\u7684\u5BFC\u5165\u5DE5\u4F5C\u3002\n    \u5EFA\u8BAE\u5BFC\u5165\u6570\u636E\u91CF\u4E0D\u8981\u8D85\u8FC71GB\n\n    2. \u5F53\u524D\u65E0\u6CD5\u4F7F\u7528`curl -T \"{file1, file2}\"`\u8FD9\u6837\u7684\u65B9\u5F0F\u63D0\u4EA4\u591A\u4E2A\u6587\u4EF6\uFF0C\u56E0\u4E3Acurl\u662F\u5C06\u5176\u62C6\u6210\u591A\u4E2A\n    \u8BF7\u6C42\u53D1\u9001\u7684\uFF0C\u591A\u4E2A\u8BF7\u6C42\u4E0D\u80FD\u5171\u7528\u4E00\u4E2Alabel\u53F7\uFF0C\u6240\u4EE5\u65E0\u6CD5\u4F7F\u7528\n\n    3. \u652F\u6301\u7C7B\u4F3Cstreaming\u7684\u65B9\u5F0F\u4F7F\u7528curl\u6765\u5411 Doris \u4E2D\u5BFC\u5165\u6570\u636E\uFF0C\u4F46\u662F\uFF0C\u53EA\u6709\u7B49\u8FD9\u4E2Astreaming\u7ED3\u675F\u540E Doris\n    \u624D\u4F1A\u53D1\u751F\u771F\u5B9E\u7684\u5BFC\u5165\u884C\u4E3A\uFF0C\u8FD9\u4E2D\u65B9\u5F0F\u6570\u636E\u91CF\u4E5F\u4E0D\u80FD\u8FC7\u5927\u3002\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"1. \u5C06\u672C\u5730\u6587\u4EF6'testData1'\u4E2D\u7684\u6570\u636E\u5BFC\u5165\u5230\u6570\u636E\u5E93'testDb'\u4E2D'testTbl1'\u7684\u8868\uFF0C\u5E76\u4E14\n\u628A'testData2'\u7684\u6570\u636E\u5BFC\u5165\u5230'testDb'\u4E2D\u7684\u8868'testTbl2'(\u7528\u6237\u662Fdefalut_cluster\u4E2D\u7684)\n    curl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_start?label=123\n    curl --location-trusted -u root -T testData1 http://host:port/api/testDb/testTbl1/_load?label=123\\&sub_label=1\n    curl --location-trusted -u root -T testData2 http://host:port/api/testDb/testTbl2/_load?label=123\\&sub_label=2\n    curl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_commit?label=123\n\n2. \u591A\u8868\u5BFC\u5165\u4E2D\u9014\u653E\u5F03(\u7528\u6237\u662Fdefalut_cluster\u4E2D\u7684)\n    curl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_start?label=123\n    curl --location-trusted -u root -T testData1 http://host:port/api/testDb/testTbl1/_load?label=123\\&sub_label=1\n    curl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_abort?label=123\n\n3. \u591A\u8868\u5BFC\u5165\u67E5\u770B\u5DF2\u7ECF\u63D0\u4EA4\u591A\u5C11\u5185\u5BB9(\u7528\u6237\u662Fdefalut_cluster\u4E2D\u7684)\n    curl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_start?label=123\n    curl --location-trusted -u root -T testData1 http://host:port/api/testDb/testTbl1/_load?label=123\\&sub_label=1\n    curl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_desc?label=123\n"})}),"\n",(0,a.jsx)(e.h3,{id:"keywords",children:"Keywords"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"MULTI, MINI, LOAD\n"})}),"\n",(0,a.jsx)(e.h3,{id:"best-practice",children:"Best Practice"})]})}function d(t={}){let{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(c,{...t})}):c(t)}},250065:function(t,e,n){n.d(e,{Z:function(){return r},a:function(){return o}});var l=n(667294);let a={},s=l.createContext(a);function o(t){let e=l.useContext(s);return l.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:o(t.components),l.createElement(s.Provider,{value:e},t.children)}}}]);