"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["370818"],{763391:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>a,default:()=>p,assets:()=>c,toc:()=>d,frontMatter:()=>i});var r=JSON.parse('{"id":"admin-manual/open-api/fe-http/show-proc-action","title":"Show Proc Action","description":"\x3c!--","source":"@site/docs/admin-manual/open-api/fe-http/show-proc-action.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/show-proc-action","permalink":"/docs/dev/admin-manual/open-api/fe-http/show-proc-action","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Show Proc Action","language":"en"}}'),s=t("785893"),o=t("250065");let i={title:"Show Proc Action",language:"en"},a="Show Proc Action",c={},d=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function l(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"show-proc-action",children:"Show Proc Action"})}),"\n",(0,s.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET /api/show_proc"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Used to obtain PROC information."}),"\n",(0,s.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,s.jsx)(n.p,{children:"None"}),"\n",(0,s.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"path"}),"\n",(0,s.jsx)(n.p,{children:"Specify Proc Path"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"forward"}),"\n",(0,s.jsx)(n.p,{children:"Whether to forward to Master FE for execution"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,s.jsx)(n.p,{children:"None"}),"\n",(0,s.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": [\n		proc infos ...\n	],\n	"count": 0\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["View ",(0,s.jsx)(n.code,{children:"/statistic"})," information"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'GET /api/show_proc?path=/statistic\n\nResponse:\n{\n	"msg": "success",\n	"code": 0,\n	"data": [\n		["10003", "default_cluster:db1", "2", "3", "3", "3", "3", "0", "0", "0"],\n		["10013", "default_cluster:doris_audit_db__", "1", "4", "4", "4", "4", "0", "0", "0"],\n		["Total", "2", "3", "7", "7", "7", "7", "0", "0", "0"]\n	],\n	"count": 0\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Forward to Master for execution"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'GET /api/show_proc?path=/statistic&forward=true\n\nResponse:\n{\n	"msg": "success",\n	"code": 0,\n	"data": [\n		["10003", "default_cluster:db1", "2", "3", "3", "3", "3", "0", "0", "0"],\n		["10013", "default_cluster:doris_audit_db__", "1", "4", "4", "4", "4", "0", "0", "0"],\n		["Total", "2", "3", "7", "7", "7", "7", "0", "0", "0"]\n	],\n	"count": 0\n}\n'})}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var r=t(667294);let s={},o=r.createContext(s);function i(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);