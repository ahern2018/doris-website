"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["535421"],{370763:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>i,default:()=>x,assets:()=>r,toc:()=>c,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TABLET-DIAGNOSIS","title":"SHOW TABLET DIAGNOSIS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TABLET-DIAGNOSIS.md","sourceDirName":"sql-manual/sql-statements/table-and-view/data-and-status-management","slug":"/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TABLET-DIAGNOSIS","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TABLET-DIAGNOSIS","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SHOW TABLET DIAGNOSIS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW TABLET STORAGE FORMAT","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TABLET-STORAGE-FORMAT"},"next":{"title":"ADMIN SET REPLICA STATUS","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/data-and-status-management/ADMIN-SET-REPLICA-STATUS"}}'),l=t("785893"),d=t("250065");let a={title:"SHOW TABLET DIAGNOSIS",language:"zh-CN"},i=void 0,r={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function h(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u8BCA\u65AD\u6307\u5B9A tablet\u3002\u7ED3\u679C\u4E2D\u5C06\u663E\u793A\u8FD9\u4E2A tablet \u7684\u4FE1\u606F\u548C\u4E00\u4E9B\u6F5C\u5728\u7684\u95EE\u9898\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SHOW TABLET DIAGNOSIS <tablet_id>\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsxs)(e.strong,{children:["1. ",(0,l.jsx)(e.code,{children:"<tablet_id>"})]})}),"\n",(0,l.jsx)(e.p,{children:"\u9700\u8981\u8FDB\u884C\u6267\u884C\u8BCA\u65AD\u7684 tablet ID\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u5217\u540D"}),(0,l.jsx)(e.th,{children:"\u7C7B\u578B"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"TabletExist"}),(0,l.jsx)(e.td,{children:"String"}),(0,l.jsx)(e.td,{children:"Tablet \u662F\u5426\u5B58\u5728"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"TabletId"}),(0,l.jsx)(e.td,{children:"String"}),(0,l.jsx)(e.td,{children:"Tablet ID"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"Database"}),(0,l.jsx)(e.td,{children:"String"}),(0,l.jsx)(e.td,{children:"Tablet \u6240\u5C5E DB \u548C\u5176 ID"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"Table"}),(0,l.jsx)(e.td,{children:"String"}),(0,l.jsx)(e.td,{children:"Tablet \u6240\u5C5E Table \u548C\u5176 ID"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"Partition"}),(0,l.jsx)(e.td,{children:"String"}),(0,l.jsx)(e.td,{children:"Tablet \u6240\u5C5E Partition \u548C\u5176 ID"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"MaterializedIndex"}),(0,l.jsx)(e.td,{children:"String"}),(0,l.jsx)(e.td,{children:"Tablet \u6240\u5C5E\u7269\u5316\u89C6\u56FE\u548C\u5176 ID"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"Replicas(ReplicaId -> BackendId)"}),(0,l.jsx)(e.td,{children:"String"}),(0,l.jsx)(e.td,{children:"Tablet \u5404\u526F\u672C\u548C\u5176\u6240\u5728 BE"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"ReplicasNum"}),(0,l.jsx)(e.td,{children:"String"}),(0,l.jsx)(e.td,{children:"\u526F\u672C\u6570\u91CF\u662F\u5426\u6B63\u786E"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"ReplicaBackendStatus"}),(0,l.jsx)(e.td,{children:"String"}),(0,l.jsx)(e.td,{children:"\u526F\u672C\u6240\u5728 BE \u8282\u70B9\u662F\u5426\u6B63\u5E38"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"ReplicaVersionStatus"}),(0,l.jsx)(e.td,{children:"String"}),(0,l.jsx)(e.td,{children:"\u526F\u672C\u7684\u7248\u672C\u53F7\u662F\u5426\u6B63\u5E38"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"ReplicaStatus"}),(0,l.jsx)(e.td,{children:"String"}),(0,l.jsx)(e.td,{children:"\u526F\u672C\u72B6\u6001\u662F\u5426\u6B63\u5E38"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"ReplicaCompactionStatus"}),(0,l.jsx)(e.td,{children:"String"}),(0,l.jsx)(e.td,{children:"\u526F\u672C Compaction \u72B6\u6001\u662F\u5426\u6B63\u5E38"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,l.jsx)(e.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u62E5\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\u6743\u9650"}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61"}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\u8BF4\u660E"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"Admin_priv"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"Database"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u6267\u884C\u6570\u636E\u5E93\u7BA1\u7406\u64CD\u4F5C\u6240\u9700\u7684\u6743\u9650\uFF0C\u5305\u62EC\u7BA1\u7406\u8868\u3001\u5206\u533A\u4EE5\u53CA\u7CFB\u7EDF\u7EA7\u547D\u4EE4\u7B49\u64CD\u4F5C\u3002"})]})})]}),"\n",(0,l.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SHOW TABLET DIAGNOSIS 10145;\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:'+----------------------------------+------------------+------------+\n| Item                             | Info             | Suggestion |\n+----------------------------------+------------------+------------+\n| TabletExist                      | Yes              |            |\n| TabletId                         | 10145            |            |\n| Database                         | test: 10103      |            |\n| Table                            | sell_user: 10143 |            |\n| Partition                        | sell_user: 10142 |            |\n| MaterializedIndex                | sell_user: 10144 |            |\n| Replicas(ReplicaId -> BackendId) | {"10146":10009}  |            |\n| ReplicasNum                      | OK               |            |\n| ReplicaBackendStatus             | OK               |            |\n| ReplicaVersionStatus             | OK               |            |\n| ReplicaStatus                    | OK               |            |\n| ReplicaCompactionStatus          | OK               |            |\n+----------------------------------+------------------+------------+\n'})})]})}function x(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(h,{...n})}):h(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return i},a:function(){return a}});var s=t(667294);let l={},d=s.createContext(l);function a(n){let e=s.useContext(d);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:a(n.components),s.createElement(d.Provider,{value:e},n.children)}}}]);