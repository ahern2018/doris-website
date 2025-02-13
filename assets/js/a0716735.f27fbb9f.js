"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["361785"],{358108:function(e,n,i){i.r(n),i.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>h,assets:()=>a,toc:()=>d,frontMatter:()=>l});var s=JSON.parse('{"id":"releasenotes/v1.2/release-1.2.1","title":"Release 1.2.1","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/releasenotes/v1.2/release-1.2.1.md","sourceDirName":"releasenotes/v1.2","slug":"/releasenotes/v1.2/release-1.2.1","permalink":"/docs/2.0/releasenotes/v1.2/release-1.2.1","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Release 1.2.1","language":"en"},"sidebar":"docs","previous":{"title":"Release 1.2.2","permalink":"/docs/2.0/releasenotes/v1.2/release-1.2.2"},"next":{"title":"Release 1.2.0","permalink":"/docs/2.0/releasenotes/v1.2/release-1.2.0"}}'),r=i("785893"),t=i("250065");let l={title:"Release 1.2.1",language:"en"},o="Improvement",a={},d=[{value:"Supports new type DecimalV3",id:"supports-new-type-decimalv3",level:3},{value:"Support Iceberg V2",id:"support-iceberg-v2",level:3},{value:"Support OR condition to IN",id:"support-or-condition-to-in",level:3},{value:"Optimize the import and query performance of JSONB type",id:"optimize-the-import-and-query-performance-of-jsonb-type",level:3},{value:"Stream load supports quoted csv data",id:"stream-load-supports-quoted-csv-data",level:3},{value:"Broker supports Tencent Cloud CHDFS and Baidu Cloud BOS, AFS",id:"broker-supports-tencent-cloud-chdfs-and-baidu-cloud-bos-afs",level:3},{value:"New function",id:"new-function",level:3},{value:"Known Issues",id:"known-issues",level:3},{value:"Behavior Changed",id:"behavior-changed",level:3}];function c(e){let n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"improvement",children:"Improvement"})}),"\n",(0,r.jsx)(n.h3,{id:"supports-new-type-decimalv3",children:"Supports new type DecimalV3"}),"\n",(0,r.jsx)(n.p,{children:"DecimalV3, which supports higher precision and better performance, has the following advantages over past versions."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Larger representable range, the range of values are significantly expanded, and the valid number range [1,38]."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Higher performance, adaptive adjustment of the storage space occupied according to different precision."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"More complete precision derivation support, for different expressions, different precision derivation rules are applied to the accuracy of the result."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://doris.apache.org/docs/dev/sql-manual/sql-reference/Data-Types/DECIMALV3/",children:"DecimalV3"})}),"\n",(0,r.jsx)(n.h3,{id:"support-iceberg-v2",children:"Support Iceberg V2"}),"\n",(0,r.jsx)(n.p,{children:"Support Iceberg V2 (only Position Delete is supported, Equality Delete will be supported in subsequent versions)."}),"\n",(0,r.jsx)(n.p,{children:"Tables in Iceberg V2 format can be accessed through the Multi-Catalog feature."}),"\n",(0,r.jsx)(n.h3,{id:"support-or-condition-to-in",children:"Support OR condition to IN"}),"\n",(0,r.jsxs)(n.p,{children:["Support converting  OR condition to IN condition, which can improve the execution efficiency in some scenarios.",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/15437",children:"#15437"})," ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/12872",children:"#12872"})]}),"\n",(0,r.jsx)(n.h3,{id:"optimize-the-import-and-query-performance-of-jsonb-type",children:"Optimize the import and query performance of JSONB type"}),"\n",(0,r.jsxs)(n.p,{children:["Optimize the import and query performance of JSONB type. ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/15219",children:"#15219"}),"  ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/15219",children:"#15219"})]}),"\n",(0,r.jsx)(n.h3,{id:"stream-load-supports-quoted-csv-data",children:"Stream load supports quoted csv data"}),"\n",(0,r.jsxs)(n.p,{children:["Search trim_double_quotes in Document:",(0,r.jsx)(n.a,{href:"https://doris.apache.org/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD",children:"https://doris.apache.org/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD"})]}),"\n",(0,r.jsx)(n.h3,{id:"broker-supports-tencent-cloud-chdfs-and-baidu-cloud-bos-afs",children:"Broker supports Tencent Cloud CHDFS and Baidu Cloud BOS, AFS"}),"\n",(0,r.jsxs)(n.p,{children:["Data on CHDFS, BOS, and AFS can be accessed through Broker. ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/15297",children:"#15297"})," ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/15448",children:"#15448"})]}),"\n",(0,r.jsx)(n.h3,{id:"new-function",children:"New function"}),"\n",(0,r.jsxs)(n.p,{children:["Add function ",(0,r.jsx)(n.code,{children:"substring_index"}),". ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/15373",children:"#15373"})]}),"\n",(0,r.jsx)(n.h1,{id:"bug-fix",children:"Bug Fix"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In some cases, after upgrading from version 1.1 to version 1.2, the user permission information will be lost. ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/15144",children:"#15144"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Fix the problem that the partition value is wrong when using datev2/datetimev2 type for partitioning. ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/15094",children:"#15094"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Bug fixes for a large number of released features. For a complete list see: ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pulls?q=is%3Apr+label%3Adev%2F1.2.1-merged+is%3Aclosed",children:"PR List"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"upgrade-notice",children:"Upgrade Notice"}),"\n",(0,r.jsx)(n.h3,{id:"known-issues",children:"Known Issues"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Do not use JDK11 as the runtime JDK of BE, it will cause BE Crash."}),"\n",(0,r.jsx)(n.li,{children:"The reading performance of the csv format in this version has declined, which will affect the import and reading efficiency of the csv format. We will fix it as soon as possible in the next three-digit version"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"behavior-changed",children:"Behavior Changed"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The default value of the BE configuration item ",(0,r.jsx)(n.code,{children:"high_priority_flush_thread_num_per_store"})," is changed from 1 to 6, to improve the write efficiency of Routine Load. (",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/14775",children:"https://github.com/apache/doris/pull/14775"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The default value of the FE configuration item ",(0,r.jsx)(n.code,{children:"enable_new_load_scan_node"})," is changed to true. Import tasks will be performed using the new File Scan Node. No impact on users.",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/14808",children:"#14808"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Delete the FE configuration item ",(0,r.jsx)(n.code,{children:"enable_multi_catalog"}),". The Multi-Catalog function is enabled by default."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The vectorized execution engine is forced to be enabled by default.",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/15213",children:"#15213"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The session variable enable_vectorized_engine will no longer take effect. Enabled by default."}),"\n",(0,r.jsxs)(n.p,{children:["To make it valid again, set the FE configuration item ",(0,r.jsx)(n.code,{children:"disable_enable_vectorized_engine"})," to false, and restart FE to make ",(0,r.jsx)(n.code,{children:"enable_vectorized_engine"})," valid again."]}),"\n",(0,r.jsx)(n.h1,{id:"big-thanks",children:"Big Thanks"}),"\n",(0,r.jsx)(n.p,{children:"Thanks to ALL who contributed to this release!"}),"\n",(0,r.jsx)(n.p,{children:"@adonis0147"}),"\n",(0,r.jsx)(n.p,{children:"@AshinGau"}),"\n",(0,r.jsx)(n.p,{children:"@BePPPower"}),"\n",(0,r.jsx)(n.p,{children:"@BiteTheDDDDt"}),"\n",(0,r.jsx)(n.p,{children:"@ByteYue"}),"\n",(0,r.jsx)(n.p,{children:"@caiconghui"}),"\n",(0,r.jsx)(n.p,{children:"@cambyzju"}),"\n",(0,r.jsx)(n.p,{children:"@chenlinzhong"}),"\n",(0,r.jsx)(n.p,{children:"@dataroaring"}),"\n",(0,r.jsx)(n.p,{children:"@Doris-Extras"}),"\n",(0,r.jsx)(n.p,{children:"@dutyu"}),"\n",(0,r.jsx)(n.p,{children:"@eldenmoon"}),"\n",(0,r.jsx)(n.p,{children:"@englefly"}),"\n",(0,r.jsx)(n.p,{children:"@freemandealer"}),"\n",(0,r.jsx)(n.p,{children:"@Gabriel39"}),"\n",(0,r.jsx)(n.p,{children:"@HappenLee"}),"\n",(0,r.jsx)(n.p,{children:"@Henry2SS"}),"\n",(0,r.jsx)(n.p,{children:"@hf200012"}),"\n",(0,r.jsx)(n.p,{children:"@jacktengg"}),"\n",(0,r.jsx)(n.p,{children:"@Jibing-Li"}),"\n",(0,r.jsx)(n.p,{children:"@Kikyou1997"}),"\n",(0,r.jsx)(n.p,{children:"@liaoxin01"}),"\n",(0,r.jsx)(n.p,{children:"@luozenglin"}),"\n",(0,r.jsx)(n.p,{children:"@morningman"}),"\n",(0,r.jsx)(n.p,{children:"@morrySnow"}),"\n",(0,r.jsx)(n.p,{children:"@mrhhsg"}),"\n",(0,r.jsx)(n.p,{children:"@nextdreamblue"}),"\n",(0,r.jsx)(n.p,{children:"@qidaye"}),"\n",(0,r.jsx)(n.p,{children:"@spaces-X"}),"\n",(0,r.jsx)(n.p,{children:"@starocean999"}),"\n",(0,r.jsx)(n.p,{children:"@wangshuo128"}),"\n",(0,r.jsx)(n.p,{children:"@weizuo93"}),"\n",(0,r.jsx)(n.p,{children:"@wsjz"}),"\n",(0,r.jsx)(n.p,{children:"@xiaokang"}),"\n",(0,r.jsx)(n.p,{children:"@xinyiZzz"}),"\n",(0,r.jsx)(n.p,{children:"@xutaoustc"}),"\n",(0,r.jsx)(n.p,{children:"@yangzhg"}),"\n",(0,r.jsx)(n.p,{children:"@yiguolei"}),"\n",(0,r.jsx)(n.p,{children:"@yixiutt"}),"\n",(0,r.jsx)(n.p,{children:"@Yulei-Yang"}),"\n",(0,r.jsx)(n.p,{children:"@yuxuan-luo"}),"\n",(0,r.jsx)(n.p,{children:"@zenoyang"}),"\n",(0,r.jsx)(n.p,{children:"@zhangstar333"}),"\n",(0,r.jsx)(n.p,{children:"@zhannngchen"}),"\n",(0,r.jsx)(n.p,{children:"@zhengshengjun"})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return l}});var s=i(667294);let r={},t=s.createContext(r);function l(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);