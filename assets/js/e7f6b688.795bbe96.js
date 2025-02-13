"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["63152"],{93657:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>d,default:()=>h,assets:()=>r,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/data-and-status-management/REBALANCE-DISK","title":"REBALANCE DISK","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/table-and-view/data-and-status-management/REBALANCE-DISK.md","sourceDirName":"sql-manual/sql-statements/table-and-view/data-and-status-management","slug":"/sql-manual/sql-statements/table-and-view/data-and-status-management/REBALANCE-DISK","permalink":"/docs/dev/sql-manual/sql-statements/table-and-view/data-and-status-management/REBALANCE-DISK","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"REBALANCE DISK","language":"en"},"sidebar":"docs","previous":{"title":"RESUME MATERIALIZED VIEW","permalink":"/docs/dev/sql-manual/sql-statements/table-and-view/async-materialized-view/RESUME-MATERIALIZED-VIEW-JOB"},"next":{"title":"CANCEL REBALANCE DISK","permalink":"/docs/dev/sql-manual/sql-statements/table-and-view/data-and-status-management/CANCEL-REBALANCE-DISK"}}'),a=n("785893"),l=n("250065");let i={title:"REBALANCE DISK",language:"en"},d=void 0,r={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let t={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"REBALANCE DISK"})," statement is used to optimize the data distribution on Backend (BE) nodes. This statement has the following functionalities:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"It can perform data balancing for specified BE nodes."}),"\n",(0,a.jsx)(t.li,{children:"It can balance data across all BE nodes in the entire cluster."}),"\n",(0,a.jsx)(t.li,{children:"It prioritizes balancing the data of specified nodes, regardless of the overall balance state of the cluster."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'ADMIN REBALANCE DISK [ ON ( "<host>:<port>" [, ... ] ) ];\n'})}),"\n",(0,a.jsx)(t.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.strong,{children:["1. ",(0,a.jsx)(t.code,{children:'"<host>:<port>"'})]})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Specifies the list of BE nodes that need to be balanced."}),"\n",(0,a.jsx)(t.p,{children:"Each node consists of a hostname (or IP address) and a heartbeat port."}),"\n",(0,a.jsx)(t.p,{children:"If this parameter is not specified, it will balance all BE nodes."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,a.jsx)(t.p,{children:"Users executing this SQL command must have at least the following permissions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Privilege"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Object"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"ADMIN"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"System"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"The user must have ADMIN privileges to execute this command."})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The default timeout for this command is 24 hours. After this period, the system will no longer prioritize balancing the disk data of specified BEs. To continue balancing, the command needs to be executed again."}),"\n",(0,a.jsx)(t.li,{children:"Once the disk data balancing for a specified BE node is completed, the high-priority setting for that node will automatically become invalid."}),"\n",(0,a.jsx)(t.li,{children:"This command can be executed even when the cluster is in an unbalanced state."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Balance data across all BE nodes in the cluster:"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"ADMIN REBALANCE DISK;\n"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Balance data for two specified BE nodes:"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'ADMIN REBALANCE DISK ON ("192.168.1.1:1234", "192.168.1.2:1234");\n'})})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return i}});var s=n(667294);let a={},l=s.createContext(a);function i(e){let t=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);