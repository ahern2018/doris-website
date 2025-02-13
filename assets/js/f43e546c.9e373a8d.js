"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["728713"],{68198:function(e,s,r){r.r(s),r.d(s,{metadata:()=>t,contentTitle:()=>l,default:()=>d,assets:()=>o,toc:()=>h,frontMatter:()=>n});var t=JSON.parse('{"id":"releasenotes/v1.1/release-1.1.5","title":"Release 1.1.5","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/releasenotes/v1.1/release-1.1.5.md","sourceDirName":"releasenotes/v1.1","slug":"/releasenotes/v1.1/release-1.1.5","permalink":"/docs/2.0/releasenotes/v1.1/release-1.1.5","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Release 1.1.5","language":"en"},"sidebar":"docs","previous":{"title":"Release 1.2.0","permalink":"/docs/2.0/releasenotes/v1.2/release-1.2.0"},"next":{"title":"Release 1.1.4","permalink":"/docs/2.0/releasenotes/v1.1/release-1.1.4"}}'),a=r("785893"),i=r("250065");let n={title:"Release 1.1.5",language:"en"},l="Behavior Changes",o={},h=[];function c(e){let s={a:"a",h1:"h1",header:"header",p:"p",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"In this release, Doris Team has fixed about 36 issues or performance improvement since 1.1.4. This release is a bugfix release on 1.1 and all users are encouraged to upgrade to this release."}),"\n",(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"behavior-changes",children:"Behavior Changes"})}),"\n",(0,a.jsx)(s.p,{children:"When alias name is same as the original column name like \"select year(birthday) as birthday\" and use it in group by, order by , having clause, doris's behavior is different from MySQL in the past. In this release, we make it follow MySQL's behavior. Group by and having clause will use original column at first and order by will use alias first. It maybe a litter confuse here so there is a simple advice here, you'd better not use an alias the same as original column name."}),"\n",(0,a.jsx)(s.h1,{id:"features",children:"Features"}),"\n",(0,a.jsxs)(s.p,{children:["Add support of murmur_hash3_64. ",(0,a.jsx)(s.a,{href:"https://github.com/apache/doris/pull/14636",children:"#14636"})]}),"\n",(0,a.jsx)(s.h1,{id:"improvements",children:"Improvements"}),"\n",(0,a.jsxs)(s.p,{children:["Add timezone cache for convert_tz to improve performance. ",(0,a.jsx)(s.a,{href:"https://github.com/apache/doris/pull/14616",children:"#14616"})]}),"\n",(0,a.jsxs)(s.p,{children:["Sort result by tablename when call show clause. ",(0,a.jsx)(s.a,{href:"https://github.com/apache/doris/pull/14492",children:"#14492"})]}),"\n",(0,a.jsx)(s.h1,{id:"bug-fix",children:"Bug Fix"}),"\n",(0,a.jsxs)(s.p,{children:["Fix coredump when there is a if constant expr in select clause.  ",(0,a.jsx)(s.a,{href:"https://github.com/apache/doris/pull/14858",children:"#14858"})]}),"\n",(0,a.jsxs)(s.p,{children:["ColumnVector::insert_date_column may crashed. ",(0,a.jsx)(s.a,{href:"https://github.com/apache/doris/pull/14839",children:"#14839"})]}),"\n",(0,a.jsxs)(s.p,{children:["Update high_priority_flush_thread_num_per_store default value to 6 and it will improve the load performance. ",(0,a.jsx)(s.a,{href:"https://github.com/apache/doris/pull/14775",children:"#14775"})]}),"\n",(0,a.jsxs)(s.p,{children:["Fix quick compaction core.  ",(0,a.jsx)(s.a,{href:"https://github.com/apache/doris/pull/14731",children:"#14731"})]}),"\n",(0,a.jsxs)(s.p,{children:["Partition column is not duplicate key, spark load will throw IndexOutOfBounds error. ",(0,a.jsx)(s.a,{href:"https://github.com/apache/doris/pull/14661",children:"#14661"})]}),"\n",(0,a.jsxs)(s.p,{children:["Fix a memory leak problem in VCollectorIterator. ",(0,a.jsx)(s.a,{href:"https://github.com/apache/doris/pull/14549",children:"#14549"})]}),"\n",(0,a.jsxs)(s.p,{children:["Fix create table like when having sequence column. ",(0,a.jsx)(s.a,{href:"https://github.com/apache/doris/pull/14511",children:"#14511"})]}),"\n",(0,a.jsxs)(s.p,{children:["Using avg rowset to calculate batch size instead of using total_bytes since it costs a lot of cpu. ",(0,a.jsx)(s.a,{href:"https://github.com/apache/doris/pull/14273",children:"#14273"})]}),"\n",(0,a.jsxs)(s.p,{children:["Fix right outer join core with conjunct. ",(0,a.jsx)(s.a,{href:"https://github.com/apache/doris/pull/14821",children:"#14821"})]}),"\n",(0,a.jsxs)(s.p,{children:["Optimize policy of tcmalloc gc.  ",(0,a.jsx)(s.a,{href:"https://github.com/apache/doris/pull/14777",children:"#14777"})," ",(0,a.jsx)(s.a,{href:"https://github.com/apache/doris/pull/14738",children:"#14738"})," ",(0,a.jsx)(s.a,{href:"https://github.com/apache/doris/pull/14374",children:"#14374"})]})]})}function d(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return l},a:function(){return n}});var t=r(667294);let a={},i=t.createContext(a);function n(e){let s=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);