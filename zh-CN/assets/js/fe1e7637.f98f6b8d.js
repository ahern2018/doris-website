"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["984569"],{567978:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>i,default:()=>c,assets:()=>l,toc:()=>d,frontMatter:()=>o});var a=JSON.parse('{"id":"admin-manual/open-api/fe-http/ha-action","title":"HA Action","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/open-api/fe-http/ha-action.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/ha-action","permalink":"/zh-CN/docs/dev/admin-manual/open-api/fe-http/ha-action","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"HA Action","language":"zh-CN"}}'),r=t("785893"),s=t("250065");let o={title:"HA Action",language:"zh-CN"},i=void 0,l={},d=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2}];function u(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"GET /rest/v1/ha\n"})}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"HA Action \u7528\u4E8E\u83B7\u53D6 FE \u96C6\u7FA4\u7684\u9AD8\u53EF\u7528\u7EC4\u4FE1\u606F\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,r.jsx)(n.p,{children:"\u65E0"}),"\n",(0,r.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,r.jsx)(n.p,{children:"\u65E0"}),"\n",(0,r.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,r.jsx)(n.p,{children:"\u65E0"}),"\n",(0,r.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"Observernodes": [],\n		"CurrentJournalId": [{\n			"Value": 433648,\n			"Name": "FrontendRole"\n		}],\n		"Electablenodes": [{\n			"Value": "host1",\n			"Name": "host1"\n		}],\n		"allowedFrontends": [{\n			"Value": "name: 192.168.1.1_9213_1597652404352, role: FOLLOWER, 192.168.1.1:9213",\n			"Name": "192.168.1.1_9213_1597652404352"\n		}],\n		"removedFrontends": [],\n		"CanRead": [{\n			"Value": true,\n			"Name": "Status"\n		}],\n		"databaseNames": [{\n			"Value": "433436 ",\n			"Name": "DatabaseNames"\n		}],\n		"FrontendRole": [{\n			"Value": "MASTER",\n			"Name": "FrontendRole"\n		}],\n		"CheckpointInfo": [{\n			"Value": 433435,\n			"Name": "Version"\n		}, {\n			"Value": "2020-09-03T02:07:37.000+0000",\n			"Name": "lastCheckPointTime"\n		}]\n	},\n	"count": 0\n}\n'})})]})}function c(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return o}});var a=t(667294);let r={},s=a.createContext(r);function o(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);