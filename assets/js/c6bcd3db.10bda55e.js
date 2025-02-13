"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["923966"],{294005:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>m,assets:()=>o,toc:()=>c,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/instance-management/ADD-BROKER","title":"ADD BROKER","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/cluster-management/instance-management/ADD-BROKER.md","sourceDirName":"sql-manual/sql-statements/cluster-management/instance-management","slug":"/sql-manual/sql-statements/cluster-management/instance-management/ADD-BROKER","permalink":"/docs/sql-manual/sql-statements/cluster-management/instance-management/ADD-BROKER","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ADD BROKER","language":"en"},"sidebar":"docs","previous":{"title":"CANCEL DECOMMISSION BACKEND","permalink":"/docs/sql-manual/sql-statements/cluster-management/instance-management/CANCEL-DECOMMISSION-BACKEND"},"next":{"title":"DROP BROKER","permalink":"/docs/sql-manual/sql-statements/cluster-management/instance-management/DROP-BROKER"}}'),r=s("785893"),a=s("250065");let l={title:"ADD BROKER",language:"en"},i=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"This statement is used to add one or more BROKER nodes."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM ADD BROKER <broker_name> "<host>:<ipc_port>" [, "host>:<ipc_port>" [, ... ] ];\n'})}),"\n",(0,r.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["1. ",(0,r.jsx)(n.code,{children:"<broker_name>"})]})}),"\n",(0,r.jsx)(n.p,{children:"The name given to the added broker process. It is recommended to keep the broker_name consistent within the same cluster."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["2. ",(0,r.jsx)(n.code,{children:"<host>"})]})}),"\n",(0,r.jsx)(n.p,{children:"The IP of the node where the broker process needs to be added. If FQDN is enabled, use the FQDN of the node."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["3. ",(0,r.jsx)(n.code,{children:"<ipc_port>"})]})}),"\n",(0,r.jsx)(n.p,{children:"The PORT of the node where the broker process needs to be added, and the default value of this port is 8000."}),"\n",(0,r.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,r.jsx)(n.p,{children:"The user who executes this operation needs to have the NODE_PRIV permission."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Add two Brokers"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM ADD BROKER "host1:port", "host2:port";\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Add a Broker using FQDN"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM ADD BROKER "broker_fqdn1:port";\n'})}),"\n"]}),"\n"]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return l}});var t=s(667294);let r={},a=t.createContext(r);function l(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);