"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["440237"],{251158:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>u,assets:()=>d,toc:()=>l,frontMatter:()=>o});var t=JSON.parse('{"id":"admin-manual/open-api/fe-http/session-action","title":"Session Action","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/open-api/fe-http/session-action.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/session-action","permalink":"/zh-CN/docs/dev/admin-manual/open-api/fe-http/session-action","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Session Action","language":"zh-CN"}}'),r=s("785893"),i=s("250065");let o={title:"Session Action",language:"zh-CN"},a=void 0,d={},l=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"\u83B7\u53D6\u5F53\u524D FE \u7684\u4F1A\u8BDD\u4FE1\u606F",id:"\u83B7\u53D6\u5F53\u524D-fe-\u7684\u4F1A\u8BDD\u4FE1\u606F",level:2},{value:"Response",id:"response",level:2},{value:"\u83B7\u53D6\u6240\u6709 FE \u7684\u4F1A\u8BDD\u4FE1\u606F",id:"\u83B7\u53D6\u6240\u6709-fe-\u7684\u4F1A\u8BDD\u4FE1\u606F",level:2},{value:"Response",id:"response-1",level:2}];function c(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET /rest/v1/session"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET /rest/v1/session/all"})}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Session Action \u7528\u4E8E\u83B7\u53D6\u5F53\u524D\u7684\u4F1A\u8BDD\u4FE1\u606F\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,r.jsx)(n.p,{children:"\u65E0"}),"\n",(0,r.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,r.jsx)(n.p,{children:"\u65E0"}),"\n",(0,r.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,r.jsx)(n.p,{children:"\u65E0"}),"\n",(0,r.jsx)(n.h2,{id:"\u83B7\u53D6\u5F53\u524D-fe-\u7684\u4F1A\u8BDD\u4FE1\u606F",children:"\u83B7\u53D6\u5F53\u524D FE \u7684\u4F1A\u8BDD\u4FE1\u606F"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET /rest/v1/session"})}),"\n",(0,r.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"column_names": ["Id", "User", "Host", "Cluster", "Db", "Command", "Time", "State", "Info"],\n		"rows": [{\n			"User": "root",\n			"Command": "Sleep",\n			"State": "",\n			"Cluster": "default_cluster",\n			"Host": "10.81.85.89:31465",\n			"Time": "230",\n			"Id": "0",\n			"Info": "",\n			"Db": "db1"\n		}]\n	},\n	"count": 2\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u83B7\u53D6\u6240\u6709-fe-\u7684\u4F1A\u8BDD\u4FE1\u606F",children:"\u83B7\u53D6\u6240\u6709 FE \u7684\u4F1A\u8BDD\u4FE1\u606F"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET /rest/v1/session/all"})}),"\n",(0,r.jsx)(n.h2,{id:"response-1",children:"Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"column_names": ["FE", "Id", "User", "Host", "Cluster", "Db", "Command", "Time", "State", "Info"],\n		"rows": [{\n		    "FE": "10.14.170.23",\n			"User": "root",\n			"Command": "Sleep",\n			"State": "",\n			"Cluster": "default_cluster",\n			"Host": "10.81.85.89:31465",\n			"Time": "230",\n			"Id": "0",\n			"Info": "",\n			"Db": "db1"\n		},\n		{\n            "FE": "10.14.170.24",\n			"User": "root",\n			"Command": "Sleep",\n			"State": "",\n			"Cluster": "default_cluster",\n			"Host": "10.81.85.88:61465",\n			"Time": "460",\n			"Id": "1",\n			"Info": "",\n			"Db": "db1"\n		}]\n	},\n	"count": 2\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u8FD4\u56DE\u7ED3\u679C\u540C ",(0,r.jsx)(n.code,{children:"System Action"}),"\u3002\u662F\u4E00\u4E2A\u8868\u683C\u7684\u63CF\u8FF0\u3002"]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return o}});var t=s(667294);let r={},i=t.createContext(r);function o(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);