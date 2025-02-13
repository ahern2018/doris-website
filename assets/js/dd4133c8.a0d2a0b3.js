"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["110886"],{711125:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>d});var r=JSON.parse('{"id":"admin-manual/data-admin/ccr/config","title":"ConfigurationInstructions","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/admin-manual/data-admin/ccr/config.md","sourceDirName":"admin-manual/data-admin/ccr","slug":"/admin-manual/data-admin/ccr/config","permalink":"/docs/3.0/admin-manual/data-admin/ccr/config","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ConfigurationInstructions","language":"en"},"sidebar":"docs","previous":{"title":"Feature Details","permalink":"/docs/3.0/admin-manual/data-admin/ccr/feature"},"next":{"title":"Performance","permalink":"/docs/3.0/admin-manual/data-admin/ccr/performance"}}'),s=t("785893"),i=t("250065");let d={title:"ConfigurationInstructions",language:"en"},o=void 0,c={},l=[{value:"FE Configuration",id:"fe-configuration",level:2},{value:"BE",id:"be",level:2},{value:"Table Attributes",id:"table-attributes",level:2}];function a(e){let n={br:"br",code:"code",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This document provides the configurations that need to be adjusted or paid attention to when using CCR."}),"\n",(0,s.jsx)(n.h2,{id:"fe-configuration",children:"FE Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["Configured in ",(0,s.jsx)(n.code,{children:"fe.conf"}),", for example, ",(0,s.jsx)(n.code,{children:"restore_reset_index_id = true"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Name"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Default Value"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Version"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"restore_reset_index_id"})}),(0,s.jsxs)(n.td,{children:["If inverted index or bitmap index is used in the synchronized table, it should be set to ",(0,s.jsx)(n.code,{children:"false"}),"."]}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"Starting from 2.1.8 and 3.0.4."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ignore_backup_tmp_partitions"})}),(0,s.jsxs)(n.td,{children:["To avoid synchronization interruption caused by upstream creating ",(0,s.jsx)(n.code,{children:"tmp partition"}),", it should be set to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"Starting from 2.1.8 and 3.0.4."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"max_backup_restore_job_num_per_db"})}),(0,s.jsx)(n.td,{children:"Limit on the number of backup/restore jobs per DB in memory, it is recommended to set it to 2."}),(0,s.jsx)(n.td,{children:"10"}),(0,s.jsx)(n.td,{children:"All versions."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"label_num_threshold"})}),(0,s.jsx)(n.td,{children:"Controls the number of TXN Labels to prevent transaction recovery from being too fast; too large may occupy more memory, too small may cause data duplication in exceptional situations, the default value is sufficient in most cases."}),(0,s.jsx)(n.td,{children:"2000"}),(0,s.jsx)(n.td,{children:"Starting from 2.1."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"restore_job_compressed_serialization"})}),(0,s.jsxs)(n.td,{children:["It is recommended to configure as true when the number of tablets exceeds 100,000.",(0,s.jsx)(n.br,{})," Before downgrading, turn off the configuration and ensure FE completes a checkpoint.",(0,s.jsx)(n.br,{})," When upgrading from 2.1 to 3.0, at least upgrade to 3.0.3."]}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"Starting from 2.1.8 and 3.0.3."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"backup_job_compressed_serialization"})}),(0,s.jsxs)(n.td,{children:["It is recommended to configure as true when the number of tablets exceeds 100,000.",(0,s.jsx)(n.br,{})," Before downgrading, turn off the configuration and ensure FE completes a checkpoint.",(0,s.jsx)(n.br,{})," When upgrading from 2.1 to 3.0, at least upgrade to 3.0.3."]}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"Starting from 2.1.8 and 3.0.3."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"backup_job_default_timeout_ms"})}),(0,s.jsx)(n.td,{children:"Timeout for backup/restore tasks, both source and target cluster FE need to be configured."}),(0,s.jsx)(n.td,{children:"None"}),(0,s.jsx)(n.td,{children:"Set according to requirements"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"enable_restore_snapshot_rpc_compression"})}),(0,s.jsx)(n.td,{children:"Enable snapshot info compression to reduce RPC message size, it is recommended to set it to true."}),(0,s.jsx)(n.td,{children:"true"}),(0,s.jsx)(n.td,{children:"Starting from 2.1.8 and 3.0.3."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"be",children:"BE"}),"\n",(0,s.jsxs)(n.p,{children:["Configured in ",(0,s.jsx)(n.code,{children:"be.conf"}),", for example, ",(0,s.jsx)(n.code,{children:"thrift_max_message_size = 2000000000"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Name"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Default Value"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Version"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"thrift_max_message_size"})}),(0,s.jsx)(n.td,{children:"BE thrift server single RPC packet limit, it is recommended to set to 2000000000 when the number of tablets involved in CCR tasks is large."}),(0,s.jsx)(n.td,{children:"100MB"}),(0,s.jsx)(n.td,{children:"All versions"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"be_thrift_max_pkg_bytes"})}),(0,s.jsx)(n.td,{children:"BE Thrift RPC message package size limit."}),(0,s.jsx)(n.td,{children:"20MB"}),(0,s.jsx)(n.td,{children:"Specific to 2.0."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"max_download_speed_kbps"})}),(0,s.jsx)(n.td,{children:"Download speed limit for each download worker in downstream BE, default is 50MB/s per thread."}),(0,s.jsx)(n.td,{children:"50MB/s"}),(0,s.jsx)(n.td,{children:"All versions"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"download_worker_count"})}),(0,s.jsx)(n.td,{children:"Number of threads for download tasks, set according to network card, disk, and load."}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"All versions"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"table-attributes",children:"Table Attributes"}),"\n",(0,s.jsxs)(n.p,{children:["Set in ",(0,s.jsx)(n.code,{children:"Create Table"})," or ",(0,s.jsx)(n.code,{children:"Alter Table"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Name"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Default Value"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Version"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"binlog.max_bytes"})}),(0,s.jsx)(n.td,{children:"Maximum memory usage for binlog, it is recommended to keep at least 4GB."}),(0,s.jsx)(n.td,{children:"Unlimited"}),(0,s.jsx)(n.td,{children:"All versions"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"binlog.ttl_seconds"})}),(0,s.jsx)(n.td,{children:"Retention time for binlog."}),(0,s.jsx)(n.td,{children:"Unlimited before 2.0.5, starting from 2.0.5 it is 1 day (86400)"}),(0,s.jsx)(n.td,{children:"All versions"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var r=t(667294);let s={},i=r.createContext(s);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);