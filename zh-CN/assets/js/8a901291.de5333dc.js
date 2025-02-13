"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["635880"],{215720:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>i,default:()=>o,assets:()=>l,toc:()=>d,frontMatter:()=>c});var t=JSON.parse('{"id":"admin-manual/open-api/fe-http/show-table-data-action","title":"Show Table Data Action","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/open-api/fe-http/show-table-data-action.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/show-table-data-action","permalink":"/zh-CN/docs/dev/admin-manual/open-api/fe-http/show-table-data-action","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Show Table Data Action","language":"zh-CN"}}'),r=s("785893"),a=s("250065");let c={title:"Show Table Data Action",language:"zh-CN"},i=void 0,l={},d=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function p(n){let e={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"request",children:"Request"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"GET /api/show_table_data"})}),"\n",(0,r.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(e.p,{children:"\u7528\u4E8E\u83B7\u53D6\u6240\u6709 internal \u6E90\u4E0B\u6240\u6709\u6570\u636E\u5E93\u6240\u6709\u8868\u7684\u6570\u636E\u91CF\uFF0C\u6216\u8005\u6307\u5B9A\u6570\u636E\u5E93\u6216\u6307\u5B9A\u8868\u7684\u6570\u636E\u91CF\u3002\u5355\u4F4D\u5B57\u8282\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,r.jsx)(e.p,{children:"\u65E0"}),"\n",(0,r.jsx)(e.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"db"})}),"\n",(0,r.jsx)(e.p,{children:"\u53EF\u9009\u3002\u5982\u679C\u6307\u5B9A\uFF0C\u5219\u83B7\u53D6\u6307\u5B9A\u6570\u636E\u5E93\u4E0B\u8868\u7684\u6570\u636E\u91CF\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"table"})}),"\n",(0,r.jsx)(e.p,{children:"\u53EF\u9009\u3002\u5982\u679C\u6307\u5B9A\uFF0C\u5219\u83B7\u53D6\u6307\u5B9A\u8868\u7684\u6570\u636E\u91CF\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"single_replica"})}),"\n",(0,r.jsx)(e.p,{children:"\u53EF\u9009\u3002\u5982\u679C\u6307\u5B9A\uFF0C\u5219\u83B7\u53D6\u8868\u5355\u526F\u672C\u6240\u5360\u7528\u7684\u6570\u636E\u91CF\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"request-body",children:"Request body"}),"\n",(0,r.jsx)(e.p,{children:"\u65E0"}),"\n",(0,r.jsx)(e.h2,{id:"response",children:"Response"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6307\u5B9A\u6570\u636E\u5E93\u6240\u6709\u8868\u7684\u6570\u636E\u91CF\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'{\n    "msg":"success",\n    "code":0,\n    "data":{\n        "tpch":{\n            "partsupp":9024548244,\n            "revenue0":0,\n            "customer":1906421482\n        }\n    },\n    "count":0\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6307\u5B9A\u6570\u636E\u5E93\u6307\u5B9A\u8868\u7684\u6570\u636E\u91CF\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'{\n    "msg":"success",\n    "code":0,\n    "data":{\n        "tpch":{\n            "partsupp":9024548244\n        }\n    },\n    "count":0\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6307\u5B9A\u6570\u636E\u5E93\u6307\u5B9A\u8868\u5355\u526F\u672C\u7684\u6570\u636E\u91CF\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'{\n    "msg":"success",\n    "code":0,\n    "data":{\n        "tpch":{\n            "partsupp":3008182748\n        }\n    },\n    "count":0\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u83B7\u53D6\u6307\u5B9A\u6570\u636E\u5E93\u7684\u6570\u636E\u91CF"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'GET /api/show_table_data?db=tpch\n\nResponse:\n{\n    "msg":"success",\n    "code":0,\n    "data":{\n        "tpch":{\n            "partsupp":9024548244,\n            "revenue0":0,\n            "customer":1906421482\n        }\n    },\n    "count":0\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6307\u5B9A\u6570\u636E\u5E93\u6307\u5B9A\u8868\u7684\u6570\u636E\u91CF\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'GET /api/show_table_data?db=tpch&table=partsupp\n    \nResponse:\n{\n    "msg":"success",\n    "code":0,\n    "data":{\n        "tpch":{\n            "partsupp":9024548244\n        }\n    },\n    "count":0\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6307\u5B9A\u6570\u636E\u5E93\u6307\u5B9A\u8868\u5355\u526F\u672C\u7684\u6570\u636E\u91CF\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'GET /api/show_table_data?db=tpch&table=partsupp&single_replica=true\n    \nResponse:\n{\n    "msg":"success",\n    "code":0,\n    "data":{\n        "tpch":{\n            "partsupp":3008182748\n        }\n    },\n    "count":0\n}\n'})}),"\n"]}),"\n"]})]})}function o(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(p,{...n})}):p(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return c}});var t=s(667294);let r={},a=t.createContext(r);function c(n){let e=t.useContext(a);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);