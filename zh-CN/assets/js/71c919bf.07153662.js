"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["609361"],{189087:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>a});var s=JSON.parse('{"id":"admin-manual/open-api/fe-http/table-row-count-action","title":"Table Row Count Action","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/open-api/fe-http/table-row-count-action.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/table-row-count-action","permalink":"/zh-CN/docs/dev/admin-manual/open-api/fe-http/table-row-count-action","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Table Row Count Action","language":"zh-CN"}}'),r=t("785893"),i=t("250065");let a={title:"Table Row Count Action",language:"zh-CN"},l=void 0,o={},c=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET /api/<db>/<table>/_count"})}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"\u7528\u4E8E\u83B7\u53D6\u6307\u5B9A\u8868\u7684\u884C\u6570\u7EDF\u8BA1\u4FE1\u606F\u3002\u8BE5\u63A5\u53E3\u76EE\u524D\u7528\u4E8E Spark-Doris-Connector \u4E2D\uFF0CSpark \u83B7\u53D6 Doris \u7684\u8868\u7EDF\u8BA1\u4FE1\u606F\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"<db>"})}),"\n",(0,r.jsx)(n.p,{children:"\u6307\u5B9A\u6570\u636E\u5E93"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"<table>"})}),"\n",(0,r.jsx)(n.p,{children:"\u6307\u5B9A\u8868"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,r.jsx)(n.p,{children:"\u65E0"}),"\n",(0,r.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,r.jsx)(n.p,{children:"\u65E0"}),"\n",(0,r.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"size": 1,\n		"status": 200\n	},\n	"count": 0\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4E2D ",(0,r.jsx)(n.code,{children:"data.size"})," \u5B57\u6BB5\u8868\u793A\u6307\u5B9A\u8868\u7684\u884C\u6570\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u83B7\u53D6\u6307\u5B9A\u8868\u7684\u884C\u6570\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'GET /api/db1/tbl1/_count\n\nResponse:\n{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"size": 1,\n		"status": 200\n	},\n	"count": 0\n}\n'})}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var s=t(667294);let r={},i=s.createContext(r);function a(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);