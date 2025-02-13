"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["593851"],{194828:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/instance-management/SHOW-BROKER","title":"SHOW BROKER","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/cluster-management/instance-management/SHOW-BROKER.md","sourceDirName":"sql-manual/sql-statements/cluster-management/instance-management","slug":"/sql-manual/sql-statements/cluster-management/instance-management/SHOW-BROKER","permalink":"/docs/sql-manual/sql-statements/cluster-management/instance-management/SHOW-BROKER","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SHOW BROKER","language":"en"},"sidebar":"docs","previous":{"title":"DROP BROKER","permalink":"/docs/sql-manual/sql-statements/cluster-management/instance-management/DROP-BROKER"},"next":{"title":"CREATE RESOURCE","permalink":"/docs/sql-manual/sql-statements/cluster-management/compute-management/CREATE-RESOURCE"}}'),r=t("785893"),a=t("250065");let l={title:"SHOW BROKER",language:"en"},i=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax\uFF1A",id:"syntax",level:2},{value:"Output",id:"output",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"This statement is used to view the status of the currently existing broker processes."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SHOW BROKER;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"output",children:"Output"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Column"}),(0,r.jsx)(n.th,{children:"DateType"}),(0,r.jsx)(n.th,{children:"Note"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Name"}),(0,r.jsx)(n.td,{children:"varchar"}),(0,r.jsx)(n.td,{children:"Broker Process Name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Host"}),(0,r.jsx)(n.td,{children:"varchar"}),(0,r.jsx)(n.td,{children:"Broker Process Node IP"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Port"}),(0,r.jsx)(n.td,{children:"varchar"}),(0,r.jsx)(n.td,{children:"Broker Process Node Port"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Alive"}),(0,r.jsx)(n.td,{children:"varchar"}),(0,r.jsx)(n.td,{children:"Broker Process Node Status"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"LastStartTime"}),(0,r.jsx)(n.td,{children:"varchar"}),(0,r.jsx)(n.td,{children:"Broker Process Last Start Time"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"LastUpdateTime"}),(0,r.jsx)(n.td,{children:"varchar"}),(0,r.jsx)(n.td,{children:"Broker Process Last Update Time"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ErrMsg"}),(0,r.jsx)(n.td,{children:"varchar"}),(0,r.jsx)(n.td,{children:"Error message of the last failed startup of the Broker process"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,r.jsxs)(n.p,{children:["The user executing this statement needs to have the ",(0,r.jsx)(n.code,{children:"ADMIN/OPERATOR"})," permission."]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["View the status of the currently existing broker processes\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"show broker;\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+-------------+------------+------+-------+---------------------+---------------------+--------+\n| Name        | Host       | Port | Alive | LastStartTime       | LastUpdateTime      | ErrMsg |\n+-------------+------------+------+-------+---------------------+---------------------+--------+\n| broker_test | 10.10.10.1 | 8196 | true  | 2025-01-21 11:30:10 | 2025-01-21 11:31:40 |        |\n+-------------+------------+------+-------+---------------------+---------------------+--------+\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var s=t(667294);let r={},a=s.createContext(r);function l(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);