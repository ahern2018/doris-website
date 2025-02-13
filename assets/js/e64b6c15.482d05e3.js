"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["957612"],{324081:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>a,default:()=>g,assets:()=>d,toc:()=>c,frontMatter:()=>i});var r=JSON.parse('{"id":"table-design/tiered-storage/overview","title":"Tiered Storage Overview","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/table-design/tiered-storage/overview.md","sourceDirName":"table-design/tiered-storage","slug":"/table-design/tiered-storage/overview","permalink":"/docs/3.0/table-design/tiered-storage/overview","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Tiered Storage Overview","language":"en-US"},"sidebar":"docs","previous":{"title":"Auto-Increment Column","permalink":"/docs/3.0/table-design/auto-increment"},"next":{"title":"Tiered Storage of SSD and HDD","permalink":"/docs/3.0/table-design/tiered-storage/tiered-ssd-hdd"}}'),s=n("785893"),o=n("250065");let i={title:"Tiered Storage Overview",language:"en-US"},a=void 0,d={},c=[];function l(e){let t={br:"br",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"To help users reduce storage costs, Doris provides flexible options for cold data management."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Cold Data Options"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Applicable Conditions"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Features"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Compute-Storage Separation"})}),(0,s.jsx)(t.td,{children:"Users have the capability to deploy a compute-storage separation setup"}),(0,s.jsxs)(t.td,{children:["- Data is stored as a single replica in object storage",(0,s.jsx)(t.br,{}),"- Local caching accelerates hot data access",(0,s.jsx)(t.br,{}),"- Independent scaling of storage and compute resources significantly reduces costs"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Local Tiering"})}),(0,s.jsx)(t.td,{children:"In the compute-storage integrated mode, users want to further optimize local storage resources"}),(0,s.jsxs)(t.td,{children:["- Supports cooling cold data from SSD to HDD",(0,s.jsx)(t.br,{}),"- Fully utilizes the tiered characteristics of local storage to save high-performance storage costs"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Remote Tiering"})}),(0,s.jsx)(t.td,{children:"In the compute-storage integrated mode, users want to reduce costs using affordable object storage or HDFS"}),(0,s.jsxs)(t.td,{children:["- Cold data is stored as a single replica in object storage or HDFS",(0,s.jsx)(t.br,{}),"- Hot data continues to use local storage",(0,s.jsx)(t.br,{}),"- Cannot be combined with local tiering for the same table"]})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"With the above options, Doris can flexibly adapt to different deployment scenarios, achieving a balance between query efficiency and storage cost."})]})}function g(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return i}});var r=n(667294);let s={},o=r.createContext(s);function i(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);