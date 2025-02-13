"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["468780"],{305129:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/data-and-status-management/CANCEL-REBALANCE-DISK","title":"CANCEL REBALANCE DISK","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/CANCEL-REBALANCE-DISK.md","sourceDirName":"sql-manual/sql-statements/table-and-view/data-and-status-management","slug":"/sql-manual/sql-statements/table-and-view/data-and-status-management/CANCEL-REBALANCE-DISK","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/CANCEL-REBALANCE-DISK","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"CANCEL REBALANCE DISK","language":"en"},"sidebar":"docs","previous":{"title":"REBALANCE DISK","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/REBALANCE-DISK"},"next":{"title":"SHOW DATA","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-DATA"}}'),i=t("785893"),l=t("250065");let a={title:"CANCEL REBALANCE DISK",language:"en"},r=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"CANCEL REBALANCE DISK"})," statement is used to cancel the high-priority disk data balancing for Backend (BE) nodes. This statement has the following functionalities:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"It can cancel the high-priority disk balancing for specified BE nodes."}),"\n",(0,i.jsx)(n.li,{children:"It can cancel the high-priority disk balancing for all BE nodes in the entire cluster."}),"\n",(0,i.jsx)(n.li,{children:"After cancellation, the system will still balance the disk data of BE nodes using the default scheduling method."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ADMIN CANCEL REBALANCE DISK [ ON ( "<host>:<port>" [, ... ] ) ];\n'})}),"\n",(0,i.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["1. ",(0,i.jsx)(n.code,{children:'"<host>:<port>"'})]})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Specifies the list of BE nodes for which the high-priority disk balancing needs to be canceled."}),"\n",(0,i.jsx)(n.p,{children:"Each node consists of a hostname (or IP address) and a heartbeat port."}),"\n",(0,i.jsx)(n.p,{children:"If this parameter is not specified, it will cancel the high-priority disk balancing for all BE nodes."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,i.jsx)(n.p,{children:"Users executing this SQL command must have at least the following permissions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Privilege"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Object"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"ADMIN"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"System"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"The user must have ADMIN privileges to execute this command."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This statement only indicates that the system will no longer prioritize balancing the disk data of specified BEs; however, the system will still balance BE's disk data using the default scheduling method."}),"\n",(0,i.jsx)(n.li,{children:"After executing this command, any previously set high-priority balancing strategy will become immediately invalid."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Cancel high-priority disk balancing for all BEs in the cluster:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"ADMIN CANCEL REBALANCE DISK;\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Cancel high-priority disk balancing for specified BEs:"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ADMIN CANCEL REBALANCE DISK ON ("192.168.1.1:1234", "192.168.1.2:1234");\n'})})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var s=t(667294);let i={},l=s.createContext(i);function a(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);