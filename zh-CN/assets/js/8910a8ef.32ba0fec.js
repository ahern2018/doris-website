"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["996602"],{169393:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>h,assets:()=>i,toc:()=>d,frontMatter:()=>c});var t=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/instance-management/ADD-BROKER","title":"ADD BROKER","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/cluster-management/instance-management/ADD-BROKER.md","sourceDirName":"sql-manual/sql-statements/cluster-management/instance-management","slug":"/sql-manual/sql-statements/cluster-management/instance-management/ADD-BROKER","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/cluster-management/instance-management/ADD-BROKER","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ADD BROKER","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CANCEL DECOMMISSION BACKEND","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/cluster-management/instance-management/CANCEL-DECOMMISSION-BACKEND"},"next":{"title":"DROP BROKER","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/cluster-management/instance-management/DROP-BROKER"}}'),l=s("785893"),r=s("250065");let c={title:"ADD BROKER",language:"zh-CN"},a=void 0,i={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u8F93\u51FA\u5B57\u6BB5",id:"\u8F93\u51FA\u5B57\u6BB5",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u6DFB\u52A0\u4E00\u4E2A\u6216\u8005\u591A\u4E2A BROKER \u8282\u70B9\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM ADD BROKER <broker_name> "<host>:<ipc_port>" [,"<host>:<ipc_port>" [, ...] ];\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["1. ",(0,l.jsx)(n.code,{children:"<broker_name>"})]})}),"\n",(0,l.jsxs)(n.p,{children:["\u7ED9\u6DFB\u52A0\u7684 ",(0,l.jsx)(n.code,{children:"broker"})," \u8FDB\u7A0B\u8D77\u7684\u540D\u5B57\u3002\u540C\u4E00\u4E2A\u96C6\u7FA4\u4E2D\u7684 broker_name \u5EFA\u8BAE\u4FDD\u6301\u4E00\u81F4\u3002"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["2. ",(0,l.jsx)(n.code,{children:"<host>"})]})}),"\n",(0,l.jsxs)(n.p,{children:["\u9700\u8981\u6DFB\u52A0\u7684 ",(0,l.jsx)(n.code,{children:"broker"})," \u8FDB\u7A0B\u6240\u5728\u8282\u70B9\u7684 ",(0,l.jsx)(n.code,{children:"IP"})," \uFF0C\u5982\u679C\u542F\u7528\u4E86 ",(0,l.jsx)(n.code,{children:"FQDN"}),"\uFF0C\u5219\u4F7F\u7528\u8BE5\u8282\u70B9\u7684 ",(0,l.jsx)(n.code,{children:"FQDN"}),"\u3002"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["3. ",(0,l.jsx)(n.code,{children:"<ipc_port>"})]})}),"\n",(0,l.jsxs)(n.p,{children:["\u9700\u8981\u6DFB\u52A0\u7684 ",(0,l.jsx)(n.code,{children:"broker"})," \u8FDB\u7A0B\u6240\u5728\u8282\u70B9\u7684 ",(0,l.jsx)(n.code,{children:"PORT"})," \uFF0C\u8BE5\u7AEF\u53E3\u9ED8\u8BA4\u503C\u4E3A ",(0,l.jsx)(n.code,{children:"8000"}),"\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u8F93\u51FA\u5B57\u6BB5",children:"\u8F93\u51FA\u5B57\u6BB5"}),"\n",(0,l.jsx)(n.p,{children:"\u65E0"}),"\n",(0,l.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,l.jsxs)(n.p,{children:["\u6267\u884C\u8BE5\u64CD\u4F5C\u7684\u7528\u6237\u9700\u8981\u5177\u5907 ",(0,l.jsx)(n.code,{children:"NODE_PRIV"})," \u7684\u6743\u9650\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u589E\u52A0\u4E24\u4E2A Broker"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM ADD BROKER "host1:port", "host2:port";\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u589E\u52A0\u4E00\u4E2A Broker\uFF0C\u4F7F\u7528 FQDN"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM ADD BROKER "broker_fqdn1:port";\n'})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return c}});var t=s(667294);let l={},r=t.createContext(l);function c(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);