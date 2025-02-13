"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["393571"],{692552:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>a,default:()=>c,assets:()=>l,toc:()=>d,frontMatter:()=>o});var r=JSON.parse('{"id":"admin-manual/workload-management/workload-management-summary","title":"Overview","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/admin-manual/workload-management/workload-management-summary.md","sourceDirName":"admin-manual/workload-management","slug":"/admin-manual/workload-management/workload-management-summary","permalink":"/docs/3.0/admin-manual/workload-management/workload-management-summary","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Overview","language":"en"},"sidebar":"docs","previous":{"title":"FQDN","permalink":"/docs/3.0/admin-manual/cluster-management/fqdn"},"next":{"title":"Resource Group","permalink":"/docs/3.0/admin-manual/workload-management/resource-group"}}'),i=n("785893"),s=n("250065");let o={title:"Overview",language:"en"},a=void 0,l={},d=[{value:"Resource Isolation Methods",id:"resource-isolation-methods",level:2},{value:"Soft Limit and Hard Limit",id:"soft-limit-and-hard-limit",level:2}];function u(e){let t={h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Workload management is an very important feature of Doris, playing a critical role in the overall system management. Through reasonable workload management strategies, resource utilization can be optimized, system stability enhanced, and response time reduced. It has the following abilities:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Resource Isolation: By dividing into multiple groups and setting resource (CPU, Memory, IO) limits for each group, it ensures that there is no interference between multiple users or different tasks (such as read and write operations) of the same user."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Concurrency Control and Queuing: It can limit the number of tasks that can be executed simultaneously in the entire cluster. When threshold is exceeded, tasks will be queued."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Circuit Breaker: During query planning phase or execution phase, tasks can be automatically cancelled based on conditions such as the estimated number of partitions to be read, the amount of data to be scanned, the allocated memory size, and the execution time. This avoids unreasonable tasks from occupying too many system resources."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"resource-isolation-methods",children:"Resource Isolation Methods"}),"\n",(0,i.jsx)(t.p,{children:"Doris can divide resource in the following three ways:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Resource Group: Divide multiple BE processes into groups setting tag for each BE."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Workload Group: The resource (CPU, Memory, IO) within a BE are divided into multiple resource groups through Cgroup, enabling more fine-grained resource isolation."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Compute Group: It is a way of resource partitioning method in compute-storage decoupled mode. Similar to Resource Group, it also takes BE as the minimum granularity to divide multiple groups."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The following table records the characteristics and advantageous scenarios of different resource partitioning methods:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Resource Isolation Method"}),(0,i.jsx)(t.th,{children:"Isolation Granularity"}),(0,i.jsx)(t.th,{children:"Soft/Hard Limit"}),(0,i.jsx)(t.th,{children:"Cross Resource Group Query"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Resource Group"}),(0,i.jsx)(t.td,{children:"BE node level, with complete resource isolation, can isolate BE failures"}),(0,i.jsx)(t.td,{children:"Hard limit"}),(0,i.jsx)(t.td,{children:"Not support. And it is necessary to ensure that at least one copy of data is stored within the resource group."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Workload Group"}),(0,i.jsx)(t.td,{children:"Isolation within BE process; cannot isolate BE failures"}),(0,i.jsx)(t.td,{children:"Both hard and soft limit"}),(0,i.jsx)(t.td,{children:"Support"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Compute Group"}),(0,i.jsx)(t.td,{children:"BE node level, with complete resource isolation, can isolate BE failures"}),(0,i.jsx)(t.td,{children:"Hard limit"}),(0,i.jsx)(t.td,{children:"Not support"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"soft-limit-and-hard-limit",children:"Soft Limit and Hard Limit"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Hard Limit: The hard limit refers to the absolute upper limit of resource usage that tenants cannot exceed. Once the hard limit is reached, resource requests for the excess part will be rejected. Hard limit are generally used to prevent the depletion of resources within the cluster or resource preemption between different businesses, ensuring the stability and performance of the cluster."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Soft Limit: The soft limit is a resource limit that can be exceeded, usually representing the recommended upper limit of resource usage. When the system is not busy, if a tenant requests more resources than the soft limit, it can borrow resources from other groups. When the system is busy and there is resource contention, if a tenant requests resources exceeding the soft limit, it will not be able to obtain additional resources."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"When using the Resource Group / Compute Group method to partition resources, only the hard limit mode is supported. When using the Workload Group method to partition resources, both the soft limit and hard limit of Workload Group are supported. The soft limit of Workload Group is usually used for sudden resource control, such as temporary query peaks or short-term increases in data writing."})]})}function c(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return o}});var r=n(667294);let i={},s=r.createContext(i);function o(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);