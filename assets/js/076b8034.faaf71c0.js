"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["870416"],{148158:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>l,default:()=>p,assets:()=>i,toc:()=>d,frontMatter:()=>s});var o=JSON.parse('{"id":"admin-manual/open-api/fe-http/log-action","title":"Log Action","description":"\x3c!--","source":"@site/docs/admin-manual/open-api/fe-http/log-action.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/log-action","permalink":"/docs/dev/admin-manual/open-api/fe-http/log-action","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Log Action","language":"en"}}'),r=t("785893"),a=t("250065");let s={title:"Log Action",language:"en"},l="Log Action",i={},d=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2}];function c(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"log-action",children:"Log Action"})}),"\n",(0,r.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"GET /rest/v1/log\n"})}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"GET is used to obtain the latest part of Doris's WARNING log, and the POST method is used to dynamically set the log level of FE."}),"\n",(0,r.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,r.jsx)(n.p,{children:"None"}),"\n",(0,r.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"add_verbose"})}),"\n",(0,r.jsx)(n.p,{children:"Optional parameters for the POST method. Enable the DEBUG level log of the specified package."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"del_verbose"})}),"\n",(0,r.jsx)(n.p,{children:"Optional parameters for the POST method. Turn off the DEBUG level log of the specified package."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,r.jsx)(n.p,{children:"None"}),"\n",(0,r.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'GET /rest/v1/log\n\n{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"LogContents": {\n			"logPath": "/home/disk1/cmy/git/doris/core-for-ui/output/fe/log/fe.warn.log",\n			"log": "<pre>2020-08-26 15:54:30,081 WARN (UNKNOWN 10.81.85.89_9213_1597652404352(-1)|1) [Catalog.notifyNewFETypeTransfer():2356] notify new FE type transfer: UNKNOWN</br>2020-08-26 15:54:32,089 WARN (RepNode 10.81.85.89_9213_1597652404352(-1)|61) [Catalog.notifyNewFETypeTransfer():2356] notify new FE type transfer: MASTER</br>2020-08-26 15:54:35,121 WARN (stateListener|73) [Catalog.replayJournal():2510] replay journal cost too much time: 2975 replayedJournalId: 232383</br>2020-08-26 15:54:48,117 WARN (leaderCheckpointer|75) [Catalog.replayJournal():2510] replay journal cost too much time: 2812 replayedJournalId: 232383</br></pre>",\n			"showingLast": "603 bytes of log"\n		},\n		"LogConfiguration": {\n			"VerboseNames": "org",\n			"AuditNames": "slow_query,query",\n			"Level": "INFO"\n		}\n	},\n	"count": 0\n}  \n'})}),"\n",(0,r.jsxs)(n.p,{children:["Among them, ",(0,r.jsx)(n.code,{children:"data.LogContents.log"})," means the log content in the latest part of ",(0,r.jsx)(n.code,{children:"fe.warn.log"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'POST /rest/v1/log?add_verbose=org\n\n{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"LogConfiguration": {\n			"VerboseNames": "org",\n			"AuditNames": "slow_query,query",\n			"Level": "INFO"\n		}\n	},\n	"count": 0\n}\n'})})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return s}});var o=t(667294);let r={},a=o.createContext(r);function s(e){let n=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);