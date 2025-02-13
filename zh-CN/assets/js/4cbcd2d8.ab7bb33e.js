"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["715447"],{399252:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>u,assets:()=>o,toc:()=>d,frontMatter:()=>a});var s=JSON.parse('{"id":"admin-manual/open-api/be-http/tablet-info","title":"\u67E5\u8BE2 tablet \u4FE1\u606F","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/open-api/be-http/tablet-info.md","sourceDirName":"admin-manual/open-api/be-http","slug":"/admin-manual/open-api/be-http/tablet-info","permalink":"/zh-CN/docs/dev/admin-manual/open-api/be-http/tablet-info","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u67E5\u8BE2 tablet \u4FE1\u606F","language":"zh-CN"}}'),i=t("785893"),l=t("250065");let a={title:"\u67E5\u8BE2 tablet \u4FE1\u606F",language:"zh-CN"},r=void 0,o={},d=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function c(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GET /tablets_json?limit={int}"})}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"\u83B7\u53D6\u7279\u5B9A BE \u8282\u70B9\u4E0A\u6307\u5B9A\u6570\u91CF\u7684 tablet \u7684 tablet id \u548C schema hash \u4FE1\u606F"}),"\n",(0,i.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"limit"}),"\n\u8FD4\u56DE\u7684 tablet \u6570\u91CF\uFF0C\u9009\u586B\uFF0C\u9ED8\u8BA4 1000 \u4E2A\uFF0C\u53EF\u586B",(0,i.jsx)(n.code,{children:"all"}),"\u8FD4\u56DE\u5168\u90E8 tablet\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,i.jsx)(n.p,{children:"\u65E0"}),"\n",(0,i.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'```json\n{\n    msg: "OK",\n    code: 0,\n    data: {\n        host: "10.38.157.107",\n        tablets: [\n            {\n                tablet_id: 11119,\n                schema_hash: 714349777\n            },\n\n                ...\n\n            {\n                tablet_id: 11063,\n                schema_hash: 714349777\n            }\n        ]\n    },\n    count: 30\n}\n```\n'})}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"```shell\ncurl http://127.0.0.1:8040/api/tablets_json?limit=123\n\n```\n"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var s=t(667294);let i={},l=s.createContext(i);function a(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);