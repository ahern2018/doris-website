"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["785701"],{912006:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>h,assets:()=>d,toc:()=>o,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/instance-management/MODIFY-BACKEND","title":"MODIFY BACKEND","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/cluster-management/instance-management/MODIFY-BACKEND.md","sourceDirName":"sql-manual/sql-statements/cluster-management/instance-management","slug":"/sql-manual/sql-statements/cluster-management/instance-management/MODIFY-BACKEND","permalink":"/docs/dev/sql-manual/sql-statements/cluster-management/instance-management/MODIFY-BACKEND","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"MODIFY BACKEND","language":"en"},"sidebar":"docs","previous":{"title":"DROP BACKEND","permalink":"/docs/dev/sql-manual/sql-statements/cluster-management/instance-management/DROP-BACKEND"},"next":{"title":"SHOW BACKENDS","permalink":"/docs/dev/sql-manual/sql-statements/cluster-management/instance-management/SHOW-BACKENDS"}}'),i=t("785893"),a=t("250065");let r={title:"MODIFY BACKEND",language:"en"},l=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function c(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"This statement is used to modify the attributes of BE nodes. After modifying the attributes of BE nodes, it will affect the query, write, and data distribution of the current node. The following are the attributes that can be modified:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u5C5E\u6027"}),(0,i.jsx)(n.th,{children:"\u5F71\u54CD"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"tag.location"})}),(0,i.jsxs)(n.td,{children:["The resource tag of the BE, with the ",(0,i.jsx)(n.code,{children:"default"})," value being default. After modification, it will affect the data balancing of BEs within the same tag group and the BE nodes for data distribution during table creation. For more information, please refer to",(0,i.jsx)(n.a,{href:"/docs/dev/admin-manual/workload-management/resource-group",children:"Resource Group"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"disable_query"})}),(0,i.jsxs)(n.td,{children:["Whether to disable queries, with the default value being ",(0,i.jsx)(n.code,{children:"false"}),". After setting it to ",(0,i.jsx)(n.code,{children:"true"}),", no new query requests will be scheduled to this BE node."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"disable_load"})}),(0,i.jsxs)(n.td,{children:["Whether to disable load, with the default value being ",(0,i.jsx)(n.code,{children:"false"}),". After setting it to ",(0,i.jsx)(n.code,{children:"true"}),", no new import requests will be scheduled to this BE node."]})]})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"This command is not supported in the decoupling storage and computing mode."})}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM MODIFY BACKEND <be_identifier> [, <be_identifier> ... ]\nSET (\n     "<key>" = "<value>"\n)\n'})}),"\n",(0,i.jsx)(n.p,{children:"Where:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'be_identifier\n  : "<be_host>:<be_heartbeat_port>"\n  | "<backend_id>"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"1. <be_host>"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"It can be the hostname or IP address of the BE node."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"2. <heartbeat_port>"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"The heartbeat port of the BE node, the default is 9050."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"3. <backend_id>"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"The ID of the BE node."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"<be_host>"}),", ",(0,i.jsx)(n.code,{children:"<be_heartbeat_port>"}),", and ",(0,i.jsx)(n.code,{children:"<backend_id>"})," can all be obtained by querying with the ",(0,i.jsx)(n.a,{href:"/docs/dev/sql-manual/sql-statements/cluster-management/instance-management/SHOW-BACKENDS",children:"SHOW BACKENDS"})," statement."]})}),"\n",(0,i.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,i.jsx)(n.p,{children:"The user who executes this SQL must have at least the following permissions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Privilege"}),(0,i.jsx)(n.th,{children:"Object"}),(0,i.jsx)(n.th,{children:"Notes"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"NODE_PRIV"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,i.jsx)(n.p,{children:"Since this operation is at the entire BE level and has a wide impact, it may affect the normal querying, loading, and even table creation operations of the entire cluster if not performed carefully. Please operate with caution."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Modify the resource tag of the BE"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM MODIFY BACKEND "127.0.0.1:9050" SET ("tag.location" = "group_a");\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Modify the ",(0,i.jsx)(n.code,{children:"disable_query"})," attribute of the BE"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM MODIFY BACKEND "10002" SET ("disable_query" = "true");\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["Modify the ",(0,i.jsx)(n.code,{children:"disable_load"})," attribute of the BE"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM MODIFY BACKEND "127.0.0.1:9050" SET ("disable_load" = "true");\n'})})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var s=t(667294);let i={},a=s.createContext(i);function r(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);