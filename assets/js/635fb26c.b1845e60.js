"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["263378"],{163078:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>o,assets:()=>c,toc:()=>a,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/instance-management/SHOW-FRONTENDS","title":"SHOW FRONTENDS","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/cluster-management/instance-management/SHOW-FRONTENDS.md","sourceDirName":"sql-manual/sql-statements/cluster-management/instance-management","slug":"/sql-manual/sql-statements/cluster-management/instance-management/SHOW-FRONTENDS","permalink":"/docs/sql-manual/sql-statements/cluster-management/instance-management/SHOW-FRONTENDS","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SHOW FRONTENDS","language":"en"},"sidebar":"docs","previous":{"title":"MODIFY FRONTEND HOSTNAME","permalink":"/docs/sql-manual/sql-statements/cluster-management/instance-management/MODIFY-FRONTEND-HOSTNAME"},"next":{"title":"SHOW FRONTENDS DISKS","permalink":"/docs/sql-manual/sql-statements/cluster-management/instance-management/SHOW-FRONTENDS-DISKS"}}'),r=t("785893"),l=t("250065");let i={title:"SHOW FRONTENDS",language:"en"},d=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function h(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"This statement is used to view the basic status information of the FE nodes."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SHOW FRONTENDS\n"})}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Column"}),(0,r.jsx)(n.th,{children:"Note"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Name"}),(0,r.jsxs)(n.td,{children:["The name of the current FE in Doris. This name is usually a random string prefixed with ",(0,r.jsx)(n.code,{children:"fe"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Host"}),(0,r.jsx)(n.td,{children:"The IP address or host name of the current FE."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"EditLogPort"}),(0,r.jsx)(n.td,{children:"The bdbje communication port of the current FE."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HttpPort"}),(0,r.jsx)(n.td,{children:"The http communication port of the current FE."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"QueryPort"}),(0,r.jsx)(n.td,{children:"The MySQL protocol communication port of the current FE."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RpcPort"}),(0,r.jsx)(n.td,{children:"The thrift RPC communication port of the current FE."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ArrowFlightSqlPort"}),(0,r.jsx)(n.td,{children:"The ArrowFlight protocol communication port of the current FE."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Role"}),(0,r.jsx)(n.td,{children:"The role of the current FE. Possible values are FOLLOWER and OBSERVER."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"IsMaster"}),(0,r.jsx)(n.td,{children:"Whether the current FE is elected as the Master."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ClusterId"}),(0,r.jsx)(n.td,{children:"The ID of the current Doris cluster, usually a randomly generated number."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Join"}),(0,r.jsx)(n.td,{children:"Used to indicate whether the current FE node has successfully joined the current Doris cluster."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Alive"}),(0,r.jsx)(n.td,{children:"Whether the current FE is alive."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ReplayedJournalId"}),(0,r.jsx)(n.td,{children:"The ID of the largest metadata log that the current FE has replayed."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"LastStartTime"}),(0,r.jsx)(n.td,{children:"The timestamp when the current FE started."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"LastHeartbeat"}),(0,r.jsx)(n.td,{children:"The timestamp of the last successful heartbeat sent by the current FE."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"IsHelper"}),(0,r.jsx)(n.td,{children:"Whether the current FE is a helper node in bdbje."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ErrMsg"}),(0,r.jsx)(n.td,{children:"The error message when the heartbeat of the current FE fails."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Version"}),(0,r.jsx)(n.td,{children:"The version information of the current FE."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CurrentConnected"}),(0,r.jsx)(n.td,{children:"Whether the current client connection is connected to the current FE node."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,r.jsx)(n.p,{children:"The user who executes this SQL must have at least the following permissions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Privilege"}),(0,r.jsx)(n.th,{children:"Object"}),(0,r.jsx)(n.th,{children:"Notes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ADMIN_PRIV"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,r.jsxs)(n.p,{children:["If you need to further filter the query results, you can use the table-valued function ",(0,r.jsx)(n.a,{href:"/docs/sql-manual/sql-functions/table-valued-functions/frontends",children:"frontends()"}),". SHOW FRONTENDS is equivalent to the following statement:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM FRONTENDS();\n"})}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SHOW FRONTENDS\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+-----------------------------------------+-----------+-------------+----------+-----------+---------+--------------------+----------+----------+-----------+------+-------+-------------------+---------------------+---------------------+----------+--------+-----------------------------+------------------+\n| Name                                    | Host      | EditLogPort | HttpPort | QueryPort | RpcPort | ArrowFlightSqlPort | Role     | IsMaster | ClusterId | Join | Alive | ReplayedJournalId | LastStartTime       | LastHeartbeat       | IsHelper | ErrMsg | Version                     | CurrentConnected |\n+-----------------------------------------+-----------+-------------+----------+-----------+---------+--------------------+----------+----------+-----------+------+-------+-------------------+---------------------+---------------------+----------+--------+-----------------------------+------------------+\n| fe_65a0c6f0_b31f_42ac_bd20_26d851299f1a | 127.0.0.1 | 9010        | 8030     | 9030      | 9020    | 10030              | FOLLOWER | true     | 840241689 | true | true  | 302891            | 2025-01-20 02:11:39 | 2025-01-21 09:48:36 | true     |        | doris-2.1.7-rc03-443e87e203 | Yes              |\n+-----------------------------------------+-----------+-------------+----------+-----------+---------+--------------------+----------+----------+-----------+------+-------+-------------------+---------------------+---------------------+----------+--------+-----------------------------+------------------+\n"})})]})}function o(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var s=t(667294);let r={},l=s.createContext(r);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);