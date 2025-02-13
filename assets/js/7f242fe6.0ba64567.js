"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["239687"],{722159:function(e,n,i){i.r(n),i.d(n,{assets:function(){return l},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return a},metadata:function(){return r},toc:function(){return c}});var r=i(865493),s=i(785893),t=i(250065);let a={title:"Apache Doris announced the official release of version 1.2.1",description:"Dear community, Apache Doris 1.2.1 is now available, with several enhancements and bug fixes based on 1.2.0\uFF0Cenabling smoother user experience.",date:"2023-01-04",author:"Apache Doris",tags:["Release Notes"],image:"/images/1.2.1-release.png"},o=void 0,l={authorsImageUrls:[void 0]},c=[{value:"Improvements",id:"improvements",level:2},{value:"Supports new type DecimalV3",id:"supports-new-type-decimalv3",level:3},{value:"Support Iceberg V2",id:"support-iceberg-v2",level:3},{value:"Support OR condition to IN",id:"support-or-condition-to-in",level:3},{value:"Optimize the import and query performance of JSONB type",id:"optimize-the-import-and-query-performance-of-jsonb-type",level:3},{value:"Stream load supports quoted csv data",id:"stream-load-supports-quoted-csv-data",level:3},{value:"Broker supports Tencent Cloud CHDFS and Baidu Cloud BOS, AFS",id:"broker-supports-tencent-cloud-chdfs-and-baidu-cloud-bos-afs",level:3},{value:"New function",id:"new-function",level:3},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Upgrade Notices",id:"upgrade-notices",level:2},{value:"Known Issues",id:"known-issues",level:3},{value:"Behavior Changed",id:"behavior-changed",level:3},{value:"Big Thanks",id:"big-thanks",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"improvements",children:"Improvements"}),"\n",(0,s.jsx)(n.h3,{id:"supports-new-type-decimalv3",children:"Supports new type DecimalV3"}),"\n",(0,s.jsx)(n.p,{children:"DecimalV3, which supports higher precision and better performance, has the following advantages over past versions."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Larger representable range, the range of values are significantly expanded, and the valid number range [1,38]."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Higher performance, adaptive adjustment of the storage space occupied according to different precision."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"More complete precision derivation support, for different expressions, different precision derivation rules are applied to the accuracy of the result."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://doris.apache.org/docs/2.0/sql-manual/sql-reference/Data-Types/DECIMAL",children:"DecimalV3"})}),"\n",(0,s.jsx)(n.h3,{id:"support-iceberg-v2",children:"Support Iceberg V2"}),"\n",(0,s.jsx)(n.p,{children:"Support Iceberg V2 (only Position Delete is supported, Equality Delete will be supported in subsequent versions)."}),"\n",(0,s.jsx)(n.p,{children:"Tables in Iceberg V2 format can be accessed through the Multi-Catalog feature."}),"\n",(0,s.jsx)(n.h3,{id:"support-or-condition-to-in",children:"Support OR condition to IN"}),"\n",(0,s.jsxs)(n.p,{children:["Support converting  OR condition to IN condition, which can improve the execution efficiency in some scenarios.",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/pull/15437",children:"#15437"})," ",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/pull/12872",children:"#12872"})]}),"\n",(0,s.jsx)(n.h3,{id:"optimize-the-import-and-query-performance-of-jsonb-type",children:"Optimize the import and query performance of JSONB type"}),"\n",(0,s.jsxs)(n.p,{children:["Optimize the import and query performance of JSONB type. ",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/pull/15219",children:"#15219"}),"  ",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/pull/15219",children:"#15219"})]}),"\n",(0,s.jsx)(n.h3,{id:"stream-load-supports-quoted-csv-data",children:"Stream load supports quoted csv data"}),"\n",(0,s.jsxs)(n.p,{children:["Search trim_double_quotes in Document:",(0,s.jsx)(n.a,{href:"https://doris.apache.org/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD",children:"https://doris.apache.org/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD"})]}),"\n",(0,s.jsx)(n.h3,{id:"broker-supports-tencent-cloud-chdfs-and-baidu-cloud-bos-afs",children:"Broker supports Tencent Cloud CHDFS and Baidu Cloud BOS, AFS"}),"\n",(0,s.jsxs)(n.p,{children:["Data on CHDFS, BOS, and AFS can be accessed through Broker. ",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/pull/15297",children:"#15297"})," ",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/pull/15448",children:"#15448"})]}),"\n",(0,s.jsx)(n.h3,{id:"new-function",children:"New function"}),"\n",(0,s.jsxs)(n.p,{children:["Add function ",(0,s.jsx)(n.code,{children:"substring_index"}),". ",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/pull/15373",children:"#15373"})]}),"\n",(0,s.jsx)(n.h2,{id:"bug-fixes",children:"Bug Fixes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In some cases, after upgrading from version 1.1 to version 1.2, the user permission information will be lost. ",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/pull/15144",children:"#15144"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Fix the problem that the partition value is wrong when using datev2/datetimev2 type for partitioning. ",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/pull/15094",children:"#15094"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Bug fixes for a large number of released features. For a complete list see: ",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/pulls?q=is%3Apr+label%3Adev%2F1.2.1-merged+is%3Aclosed",children:"PR List"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"upgrade-notices",children:"Upgrade Notices"}),"\n",(0,s.jsx)(n.h3,{id:"known-issues",children:"Known Issues"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Do not use JDK11 as the runtime JDK of BE, it will cause BE Crash."}),"\n",(0,s.jsx)(n.li,{children:"The reading performance of the csv format in this version has declined, which will affect the import and reading efficiency of the csv format. We will fix it as soon as possible in the next three-digit version"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"behavior-changed",children:"Behavior Changed"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The default value of the BE configuration item ",(0,s.jsx)(n.code,{children:"high_priority_flush_thread_num_per_store"})," is changed from 1 to 6, to improve the write efficiency of Routine Load. (",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/pull/14775",children:"https://github.com/apache/doris/pull/14775"}),")"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The default value of the FE configuration item ",(0,s.jsx)(n.code,{children:"enable_new_load_scan_node"})," is changed to true. Import tasks will be performed using the new File Scan Node. No impact on users.",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/pull/14808",children:"#14808"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Delete the FE configuration item ",(0,s.jsx)(n.code,{children:"enable_multi_catalog"}),". The Multi-Catalog function is enabled by default."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The vectorized execution engine is forced to be enabled by default.",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/pull/15213",children:"#15213"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The session variable enable_vectorized_engine will no longer take effect. Enabled by default."}),"\n",(0,s.jsxs)(n.p,{children:["To make it valid again, set the FE configuration item ",(0,s.jsx)(n.code,{children:"disable_enable_vectorized_engine"})," to false, and restart FE to make ",(0,s.jsx)(n.code,{children:"enable_vectorized_engine"})," valid again."]}),"\n",(0,s.jsx)(n.h2,{id:"big-thanks",children:"Big Thanks"}),"\n",(0,s.jsx)(n.p,{children:"Thanks to ALL who contributed to this release!"}),"\n",(0,s.jsx)(n.p,{children:"@adonis0147"}),"\n",(0,s.jsx)(n.p,{children:"@AshinGau"}),"\n",(0,s.jsx)(n.p,{children:"@BePPPower"}),"\n",(0,s.jsx)(n.p,{children:"@BiteTheDDDDt"}),"\n",(0,s.jsx)(n.p,{children:"@ByteYue"}),"\n",(0,s.jsx)(n.p,{children:"@caiconghui"}),"\n",(0,s.jsx)(n.p,{children:"@cambyzju"}),"\n",(0,s.jsx)(n.p,{children:"@chenlinzhong"}),"\n",(0,s.jsx)(n.p,{children:"@dataroaring"}),"\n",(0,s.jsx)(n.p,{children:"@Doris-Extras"}),"\n",(0,s.jsx)(n.p,{children:"@dutyu"}),"\n",(0,s.jsx)(n.p,{children:"@eldenmoon"}),"\n",(0,s.jsx)(n.p,{children:"@englefly"}),"\n",(0,s.jsx)(n.p,{children:"@freemandealer"}),"\n",(0,s.jsx)(n.p,{children:"@Gabriel39"}),"\n",(0,s.jsx)(n.p,{children:"@HappenLee"}),"\n",(0,s.jsx)(n.p,{children:"@Henry2SS"}),"\n",(0,s.jsx)(n.p,{children:"@hf200012"}),"\n",(0,s.jsx)(n.p,{children:"@jacktengg"}),"\n",(0,s.jsx)(n.p,{children:"@Jibing-Li"}),"\n",(0,s.jsx)(n.p,{children:"@Kikyou1997"}),"\n",(0,s.jsx)(n.p,{children:"@liaoxin01"}),"\n",(0,s.jsx)(n.p,{children:"@luozenglin"}),"\n",(0,s.jsx)(n.p,{children:"@morningman"}),"\n",(0,s.jsx)(n.p,{children:"@morrySnow"}),"\n",(0,s.jsx)(n.p,{children:"@mrhhsg"}),"\n",(0,s.jsx)(n.p,{children:"@nextdreamblue"}),"\n",(0,s.jsx)(n.p,{children:"@qidaye"}),"\n",(0,s.jsx)(n.p,{children:"@spaces-X"}),"\n",(0,s.jsx)(n.p,{children:"@starocean999"}),"\n",(0,s.jsx)(n.p,{children:"@wangshuo128"}),"\n",(0,s.jsx)(n.p,{children:"@weizuo93"}),"\n",(0,s.jsx)(n.p,{children:"@wsjz"}),"\n",(0,s.jsx)(n.p,{children:"@xiaokang"}),"\n",(0,s.jsx)(n.p,{children:"@xinyiZzz"}),"\n",(0,s.jsx)(n.p,{children:"@xutaoustc"}),"\n",(0,s.jsx)(n.p,{children:"@yangzhg"}),"\n",(0,s.jsx)(n.p,{children:"@yiguolei"}),"\n",(0,s.jsx)(n.p,{children:"@yixiutt"}),"\n",(0,s.jsx)(n.p,{children:"@Yulei-Yang"}),"\n",(0,s.jsx)(n.p,{children:"@yuxuan-luo"}),"\n",(0,s.jsx)(n.p,{children:"@zenoyang"}),"\n",(0,s.jsx)(n.p,{children:"@zhangstar333"}),"\n",(0,s.jsx)(n.p,{children:"@zhannngchen"}),"\n",(0,s.jsx)(n.p,{children:"@zhengshengjun"})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return a}});var r=i(667294);let s={},t=r.createContext(s);function a(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(t.Provider,{value:n},e.children)}},865493:function(e){e.exports=JSON.parse('{"permalink":"/blog/release-note-1.2.1","source":"@site/blog/release-note-1.2.1.md","title":"Apache Doris announced the official release of version 1.2.1","description":"Dear community, Apache Doris 1.2.1 is now available, with several enhancements and bug fixes based on 1.2.0\uFF0Cenabling smoother user experience.","date":"2023-01-04T00:00:00.000Z","tags":[{"inline":true,"label":"Release Notes","permalink":"/blog/tags/release-notes"}],"hasTruncateMarker":false,"authors":[{"name":"Apache Doris","key":null,"page":null}],"frontMatter":{"title":"Apache Doris announced the official release of version 1.2.1","description":"Dear community, Apache Doris 1.2.1 is now available, with several enhancements and bug fixes based on 1.2.0\uFF0Cenabling smoother user experience.","date":"2023-01-04","author":"Apache Doris","tags":["Release Notes"],"image":"/images/1.2.1-release.png"},"unlisted":false,"prevItem":{"title":"A glimpse of the next-generation analytical database","permalink":"/blog/summit"},"nextItem":{"title":"The Efficiency of the data warehouse greatly improved in LY Digital\\"","permalink":"/blog/LY"}}')}}]);