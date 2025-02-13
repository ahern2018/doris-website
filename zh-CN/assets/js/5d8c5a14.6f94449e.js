"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["95797"],{645314:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>o,default:()=>h,assets:()=>a,toc:()=>l,frontMatter:()=>c});var i=JSON.parse('{"id":"admin-manual/fe/show-meta-info-action","title":"Show Meta Info Action","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/admin-manual/fe/show-meta-info-action.md","sourceDirName":"admin-manual/fe","slug":"/admin-manual/fe/show-meta-info-action","permalink":"/zh-CN/docs/2.0/admin-manual/fe/show-meta-info-action","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Show Meta Info Action","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Show Data Action","permalink":"/zh-CN/docs/2.0/admin-manual/fe/show-data-action"},"next":{"title":"Show Proc Action","permalink":"/zh-CN/docs/2.0/admin-manual/fe/show-proc-action"}}'),t=s("785893"),r=s("250065");let c={title:"Show Meta Info Action",language:"zh-CN"},o=void 0,a={},l=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"GET /api/show_meta_info"})}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"\u7528\u4E8E\u663E\u793A\u4E00\u4E9B\u5143\u6570\u636E\u4FE1\u606F"}),"\n",(0,t.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,t.jsx)(n.p,{children:"\u65E0"}),"\n",(0,t.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"action"}),"\n",(0,t.jsx)(n.p,{children:"\u6307\u5B9A\u8981\u83B7\u53D6\u7684\u5143\u6570\u636E\u4FE1\u606F\u7C7B\u578B\u3002\u76EE\u524D\u652F\u6301\u5982\u4E0B\uFF1A"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"SHOW_DB_SIZE"})}),"\n",(0,t.jsx)(n.p,{children:"\u83B7\u53D6\u6307\u5B9A\u6570\u636E\u5E93\u7684\u6570\u636E\u91CF\u5927\u5C0F\uFF0C\u5355\u4F4D\u4E3A\u5B57\u8282\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"SHOW_HA"})}),"\n",(0,t.jsx)(n.p,{children:"\u83B7\u53D6 FE \u5143\u6570\u636E\u65E5\u5FD7\u7684\u56DE\u653E\u60C5\u51B5\uFF0C\u4EE5\u53CA\u53EF\u9009\u4E3E\u7EC4\u7684\u60C5\u51B5\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,t.jsx)(n.p,{children:"\u65E0"}),"\n",(0,t.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"SHOW_DB_SIZE"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"default_cluster:information_schema": 0,\n		"default_cluster:db1": 381\n	},\n	"count": 0\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"SHOW_HA"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"can_read": "true",\n		"role": "MASTER",\n		"is_ready": "true",\n		"last_checkpoint_version": "1492",\n		"last_checkpoint_time": "1596465109000",\n		"current_journal_id": "1595",\n		"electable_nodes": "",\n		"observer_nodes": "",\n		"master": "10.81.85.89"\n	},\n	"count": 0\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u67E5\u770B\u96C6\u7FA4\u5404\u4E2A\u6570\u636E\u5E93\u7684\u6570\u636E\u91CF\u5927\u5C0F"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'GET /api/show_meta_info?action=show_db_size\n\nResponse:\n{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"default_cluster:information_schema": 0,\n		"default_cluster:db1": 381\n	},\n	"count": 0\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u67E5\u770B FE \u9009\u4E3E\u7EC4\u60C5\u51B5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'GET /api/show_meta_info?action=show_ha\n\nResponse:\n{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"can_read": "true",\n		"role": "MASTER",\n		"is_ready": "true",\n		"last_checkpoint_version": "1492",\n		"last_checkpoint_time": "1596465109000",\n		"current_journal_id": "1595",\n		"electable_nodes": "",\n		"observer_nodes": "",\n		"master": "10.81.85.89"\n	},\n	"count": 0\n}\n'})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return c}});var i=s(667294);let t={},r=i.createContext(t);function c(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);