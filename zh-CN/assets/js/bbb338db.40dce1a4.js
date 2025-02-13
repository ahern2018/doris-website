"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["359193"],{651429:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>u,assets:()=>o,toc:()=>d,frontMatter:()=>a});var i=JSON.parse('{"id":"admin-manual/open-api/be-http/tablet-distribution","title":"\u67E5\u8BE2 tablet \u5206\u5E03","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/open-api/be-http/tablet-distribution.md","sourceDirName":"admin-manual/open-api/be-http","slug":"/admin-manual/open-api/be-http/tablet-distribution","permalink":"/zh-CN/docs/admin-manual/open-api/be-http/tablet-distribution","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"\u67E5\u8BE2 tablet \u5206\u5E03","language":"zh-CN"},"sidebar":"docs","previous":{"title":"metrics \u4FE1\u606F","permalink":"/zh-CN/docs/admin-manual/open-api/be-http/metrics"},"next":{"title":"\u8FC1\u79FB tablet","permalink":"/zh-CN/docs/admin-manual/open-api/be-http/tablet-migration"}}'),s=t("785893"),r=t("250065");let a={title:"\u67E5\u8BE2 tablet \u5206\u5E03",language:"zh-CN"},l=void 0,o={},d=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function p(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET /api/tablets_distribution?group_by={enum}&partition_id={int}"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"\u83B7\u53D6 BE \u8282\u70B9\u4E0A\u6BCF\u4E00\u4E2A partition \u4E0B\u7684 tablet \u5728\u4E0D\u540C\u78C1\u76D8\u4E0A\u7684\u5206\u5E03\u60C5\u51B5"}),"\n",(0,s.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"group_by"}),"\n\u5206\u7EC4\uFF0C\u5F53\u524D\u53EA\u652F\u6301",(0,s.jsx)(n.code,{children:"partition"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"partition_id"}),"\n\u6307\u5B9A partition \u7684 id\uFF0C\u9009\u586B\uFF0C\u9ED8\u8BA4\u8FD4\u56DE\u6240\u6709 partition\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,s.jsx)(n.p,{children:"\u65E0"}),"\n",(0,s.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'```json\n{\n    msg: "OK",\n    code: 0,\n    data: {\n        host: "***",\n        tablets_distribution: [\n            {\n                partition_id:***,\n                disks:[\n                    {\n                        disk_path:"***",\n                        tablets_num:***,\n                        tablets:[\n                            {\n                                tablet_id:***,\n                                schema_hash:***,\n                                tablet_size:***\n                            },\n\n                            ...\n\n                        ]\n                    },\n\n                    ...\n\n                ]\n            }\n        ]\n    },\n    count: ***\n}\n```\n'})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'```shell\ncurl "http://127.0.0.1:8040/api/tablets_distribution?group_by=partition&partition_id=123"\n\n```\n'})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var i=t(667294);let s={},r=i.createContext(s);function a(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);