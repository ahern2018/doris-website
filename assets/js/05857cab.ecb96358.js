"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["971880"],{63681:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>d,assets:()=>a,toc:()=>l,frontMatter:()=>o});var r=JSON.parse('{"id":"admin-manual/open-api/fe-http/cluster-action","title":"Cluster Action","description":"\x3c!--","source":"@site/docs/admin-manual/open-api/fe-http/cluster-action.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/cluster-action","permalink":"/docs/dev/admin-manual/open-api/fe-http/cluster-action","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Cluster Action","language":"en"}}'),s=t("785893"),i=t("250065");let o={title:"Cluster Action",language:"en"},c="Cluster Action",a={},l=[{value:"Request",id:"request",level:2},{value:"Cluster Connection Information",id:"cluster-connection-information",level:2},{value:"Description",id:"description",level:3},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:3},{value:"Examples",id:"examples",level:3}];function u(e){let n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"cluster-action",children:"Cluster Action"})}),"\n",(0,s.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET /rest/v2/manager/cluster/cluster_info/conn_info"})}),"\n",(0,s.jsx)(n.h2,{id:"cluster-connection-information",children:"Cluster Connection Information"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET /rest/v2/manager/cluster/cluster_info/conn_info"})}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Used to get cluster http, mysql connection information."}),"\n",(0,s.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,s.jsx)(n.p,{children:"None"}),"\n",(0,s.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,s.jsx)(n.p,{children:"None"}),"\n",(0,s.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,s.jsx)(n.p,{children:"None"}),"\n",(0,s.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "http": [\n            "fe_host:http_ip"\n        ],\n        "mysql": [\n            "fe_host:query_ip"\n        ]\n    },\n    "count": 0\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'GET /rest/v2/manager/cluster/cluster_info/conn_info\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "http": [\n            "127.0.0.1:8030"\n        ],\n        "mysql": [\n            "127.0.0.1:9030"\n        ]\n    },\n    "count": 0\n}\n'})})]})}function d(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return o}});var r=t(667294);let s={},i=r.createContext(s);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);