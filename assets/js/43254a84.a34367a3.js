"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["801606"],{414529:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>h,assets:()=>o,toc:()=>d,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/instance-management/ADD-BACKEND","title":"ADD BACKEND","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/cluster-management/instance-management/ADD-BACKEND.md","sourceDirName":"sql-manual/sql-statements/cluster-management/instance-management","slug":"/sql-manual/sql-statements/cluster-management/instance-management/ADD-BACKEND","permalink":"/docs/sql-manual/sql-statements/cluster-management/instance-management/ADD-BACKEND","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ADD BACKEND","language":"en"},"sidebar":"docs","previous":{"title":"SHOW FRONTENDS DISKS","permalink":"/docs/sql-manual/sql-statements/cluster-management/instance-management/SHOW-FRONTENDS-DISKS"},"next":{"title":"DROP BACKEND","permalink":"/docs/sql-manual/sql-statements/cluster-management/instance-management/DROP-BACKEND"}}'),a=t("785893"),r=t("250065");let l={title:"ADD BACKEND",language:"en"},i=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function c(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",host:"host",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"The ADD BACKEND is used to add one or more BE nodes to the Doris cluster. This command allows administrators to specify the host and port of the new BE nodes, as well as optional properties to configure their behavior."}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM ADD BACKEND "<host>:<heartbeat_port>"[,"<host>:<heartbeat_port>" [, ...]] [PROPERTIES ("<key>"="<value>" [, ...] )]\n'})}),"\n",(0,a.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["1. ",(0,a.jsx)(n.host,{})]})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"It can be the hostname or IP address of the BE node."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"2. <heartbeat_port>"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"The heartbeat port of the BE node, the default is 9050."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["1. ",(0,a.jsx)(n.code,{children:'PROPERTIES ("<key>"="<value>" [, ... ] )'})]})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"A set of key-value pairs used to define additional properties of the BE node. These properties can be used to customize the configuration of the BE being added. Available properties include:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"tag.location"}),": Used to specify the Resource Group to which the BE node belongs."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,a.jsx)(n.p,{children:"The user executing this SQL must have at least the following permissions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Privilege"}),(0,a.jsx)(n.th,{children:"Object"}),(0,a.jsx)(n.th,{children:"Notes"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"NODE_PRIV"}),(0,a.jsx)(n.td,{}),(0,a.jsx)(n.td,{})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Before adding a new BE node, make sure the node is correctly configured and running."}),"\n",(0,a.jsxs)(n.li,{children:["Using ",(0,a.jsx)(n.a,{href:"/docs/admin-manual/workload-management/resource-group",children:"Resource Group"})," can help you better manage and organize the BE nodes in the cluster."]}),"\n",(0,a.jsx)(n.li,{children:"When adding multiple BE nodes, you can specify them in one command to improve efficiency."}),"\n",(0,a.jsxs)(n.li,{children:["After adding the BE nodes, use the ",(0,a.jsx)(n.a,{href:"/docs/sql-manual/sql-statements/cluster-management/instance-management/SHOW-BACKENDS",children:(0,a.jsx)(n.code,{children:"SHOW BACKENDS"})})," to verify whether they have been successfully added and are in a normal state."]}),"\n",(0,a.jsx)(n.li,{children:"Consider adding BE nodes in different physical locations or racks to improve the availability and fault tolerance of the cluster."}),"\n",(0,a.jsx)(n.li,{children:"Regularly check and balance the load in the cluster to ensure that the newly added BE nodes are properly utilized."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Add BE nodes without additional properties"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM ADD BACKEND "192.168.0.1:9050,192.168.0.2:9050";\n'})}),"\n",(0,a.jsx)(n.p,{children:"This command adds two BE nodes to the cluster:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"192.168.0.1\uFF0Cport 9050"}),"\n",(0,a.jsx)(n.li,{children:"192.168.0.2\uFF0Cport 9050\nNo additional properties are specified, so the default settings will be applied."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Add a BE node to a specified Resource Group"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM ADD BACKEND "doris-be01:9050" PROPERTIES ("tag.location" = "groupb");\n'})}),"\n",(0,a.jsxs)(n.p,{children:["This command adds a single BE node (hostname doris-be01, port 9050) to the Resource Group ",(0,a.jsx)(n.code,{children:"groupb"})," in the cluster."]}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var s=t(667294);let a={},r=s.createContext(a);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);