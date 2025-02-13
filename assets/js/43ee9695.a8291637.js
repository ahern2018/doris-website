"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["950832"],{299869:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>s,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>l});var a=JSON.parse('{"id":"query-acceleration/tuning/tuning-plan/transparent-rewriting-with-async-mv","title":"Transparent Rewriting by Async-Materialized View","description":"\x3c!--","source":"@site/docs/query-acceleration/tuning/tuning-plan/transparent-rewriting-with-async-mv.md","sourceDirName":"query-acceleration/tuning/tuning-plan","slug":"/query-acceleration/tuning/tuning-plan/transparent-rewriting-with-async-mv","permalink":"/docs/dev/query-acceleration/tuning/tuning-plan/transparent-rewriting-with-async-mv","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Transparent Rewriting by Async-Materialized View","language":"en"},"sidebar":"docs","previous":{"title":"Transparent Rewriting with Sync-Materialized View","permalink":"/docs/dev/query-acceleration/tuning/tuning-plan/transparent-rewriting-with-sync-mv"},"next":{"title":"Optimizing Join with Colocate Group","permalink":"/docs/dev/query-acceleration/tuning/tuning-plan/optimizing-join-with-colocate-group"}}'),i=t("785893"),r=t("250065");let l={title:"Transparent Rewriting by Async-Materialized View",language:"en"},s=void 0,o={},c=[{value:"Overview",id:"overview",level:2},{value:"Case",id:"case",level:2},{value:"Create Base Tables",id:"create-base-tables",level:3},{value:"Create an Asynchronous Materialized View",id:"create-an-asynchronous-materialized-view",level:3},{value:"Use the Materialized View for Transparent Rewriting",id:"use-the-materialized-view-for-transparent-rewriting",level:3},{value:"Summary",id:"summary",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"/docs/dev/query-acceleration/materialized-view/async-materialized-view/overview",children:"Async-materialized view"})," adopts a transparent rewriting algorithm based on the SPJG (SELECT-PROJECT-JOIN-GROUP-BY) pattern. This algorithm can analyze the structural information of the query SQL, automatically find the appropriate materialized views, and attempt to perform transparent rewriting to express the query SQL using the optimal materialized views. By using the pre-computed results of materialized views, the query performance can be significantly improved and the computing cost can be reduced."]}),"\n",(0,i.jsx)(n.h2,{id:"case",children:"Case"}),"\n",(0,i.jsx)(n.p,{children:"Next, an example will be used to demonstrate in detail how to utilize async-materialized views to accelerate queries."}),"\n",(0,i.jsx)(n.h3,{id:"create-base-tables",children:"Create Base Tables"}),"\n",(0,i.jsxs)(n.p,{children:["Firstly, create the tpch database and then create two tables, namely ",(0,i.jsx)(n.code,{children:"orders"})," and ",(0,i.jsx)(n.code,{children:"lineitem"}),", within it, and insert corresponding data."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE DATABASE IF NOT EXISTS tpch;\nUSE tpch;\n\nCREATE TABLE IF NOT EXISTS orders (\n    o_orderkey       integer not null,\n    o_custkey        integer not null,\n    o_orderstatus    char(1) not null,\n    o_totalprice     decimalv3(15,2) not null,\n    o_orderdate      date not null,\n    o_orderpriority  char(15) not null,\n    o_clerk          char(15) not null,\n    o_shippriority   integer not null,\n    o_comment        varchar(79) not null\n)\nDUPLICATE KEY(o_orderkey, o_custkey)\nPARTITION BY RANGE(o_orderdate)(\n    FROM ('2023-10-17') TO ('2023-10-20') INTERVAL 1 DAY\n)\nDISTRIBUTED BY HASH(o_orderkey) BUCKETS 3\nPROPERTIES (\"replication_num\" = \"1\");\n\nINSERT INTO orders VALUES\n    (1, 1, 'o', 99.5, '2023-10-17', 'a', 'b', 1, 'yy'),\n    (2, 2, 'o', 109.2, '2023-10-18', 'c','d',2, 'mm'),\n    (3, 3, 'o', 99.5, '2023-10-19', 'a', 'b', 1, 'yy');\n\nCREATE TABLE IF NOT EXISTS lineitem (\n    l_orderkey    integer not null,\n    l_partkey     integer not null,\n    l_suppkey     integer not null,\n    l_linenumber  integer not null,\n    l_quantity    decimalv3(15,2) not null,\n    l_extendedprice  decimalv3(15,2) not null,\n    l_discount    decimalv3(15,2) not null,\n    l_tax         decimalv3(15,2) not null,\n    l_returnflag  char(1) not null,\n    l_linestatus  char(1) not null,\n    l_shipdate    date not null,\n    l_commitdate  date not null,\n    l_receiptdate date not null,\n    l_shipinstruct char(25) not null,\n    l_shipmode     char(10) not null,\n    l_comment      varchar(44) not null\n)\nDUPLICATE KEY(l_orderkey, l_partkey, l_suppkey, l_linenumber)\nPARTITION BY RANGE(l_shipdate)\n(FROM ('2023-10-17') TO ('2023-10-20') INTERVAL 1 DAY)\nDISTRIBUTED BY HASH(l_orderkey) BUCKETS 3\nPROPERTIES (\"replication_num\" = \"1\");\n\nINSERT INTO lineitem VALUES\n    (1, 2, 3, 4, 5.5, 6.5, 7.5, 8.5, 'o', 'k', '2023-10-17', '2023-10-17', '2023-10-17', 'a', 'b', 'yyyyyyyyy'),\n    (2, 2, 3, 4, 5.5, 6.5, 7.5, 8.5, 'o', 'k', '2023-10-18', '2023-10-18', '2023-10-18', 'a', 'b', 'yyyyyyyyy'),\n    (3, 2, 3, 6, 7.5, 8.5, 9.5, 10.5, 'k', 'o', '2023-10-19', '2023-10-19', '2023-10-19', 'c', 'd', 'xxxxxxxxx');\n"})}),"\n",(0,i.jsx)(n.h3,{id:"create-an-asynchronous-materialized-view",children:"Create an Asynchronous Materialized View"}),"\n",(0,i.jsxs)(n.p,{children:["Based on several original tables in the tpch benchmark, create an asynchronous materialized view named ",(0,i.jsx)(n.code,{children:"mv1"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE MATERIALIZED VIEW mv1   \nBUILD IMMEDIATE REFRESH COMPLETE ON MANUAL\nPARTITION BY(l_shipdate)  \nDISTRIBUTED BY RANDOM BUCKETS 2  \nPROPERTIES ('replication_num' = '1')   \nAS   \nSELECT l_shipdate, o_orderdate, l_partkey, l_suppkey, SUM(o_totalprice) AS sum_total  \nFROM lineitem  \nLEFT JOIN orders ON lineitem.l_orderkey = orders.o_orderkey AND l_shipdate = o_orderdate  \nGROUP BY  \nl_shipdate,  \no_orderdate,  \nl_partkey,  \nl_suppkey;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"use-the-materialized-view-for-transparent-rewriting",children:"Use the Materialized View for Transparent Rewriting"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"mysql> explain shape plan SELECT l_shipdate, SUM(o_totalprice) AS total_price\n    -> FROM lineitem\n    -> LEFT JOIN orders ON lineitem.l_orderkey = orders.o_orderkey AND l_shipdate = o_orderdate\n    -> WHERE l_partkey = 2 AND l_suppkey = 3\n    -> GROUP BY l_shipdate;\n+-------------------------------------------------------------------+\n| Explain String(Nereids Planner)                                   |\n+-------------------------------------------------------------------+\n| PhysicalResultSink                                                |\n| --PhysicalDistribute[DistributionSpecGather]                      |\n| ----PhysicalProject                                               |\n| ------hashAgg[GLOBAL]                                             |\n| --------PhysicalDistribute[DistributionSpecHash]                  |\n| ----------hashAgg[LOCAL]                                          |\n| ------------PhysicalProject                                       |\n| --------------filter((mv1.l_partkey = 2) and (mv1.l_suppkey = 3)) |\n| ----------------PhysicalOlapScan[mv1]                             |\n+-------------------------------------------------------------------+\n"})}),"\n",(0,i.jsxs)(n.p,{children:["It can be seen from the ",(0,i.jsx)(n.code,{children:"explain shape plan"})," that the plan after being transparently rewritten by ",(0,i.jsx)(n.code,{children:"mv1"})," has already hit ",(0,i.jsx)(n.code,{children:"mv1"}),". You can also use ",(0,i.jsx)(n.code,{children:"explain"})," to view the current state of the plan after being rewritten by the materialized view, including whether it has hit and which materialized view has been hit, etc., as shown below:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"| ========== MATERIALIZATIONS ==========                                            |\n|                                                                                   |\n| MaterializedView                                                                  |\n| MaterializedViewRewriteSuccessAndChose:                                           |\n|   internal.tpch.mv1 chose,                                                        |\n|                                                                                   |\n| MaterializedViewRewriteSuccessButNotChose:                                        |\n|   not chose: none,                                                                |\n|                                                                                   |\n| MaterializedViewRewriteFail:                                                      |\n"})}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(n.p,{children:"By using async-materialized views, the query performance can be significantly improved, especially for complex join and aggregation queries. When using them, the following points need to be noted:"}),"\n",(0,i.jsx)(n.admonition,{title:"Usage Suggestions",type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Pre-computed Results: Materialized views pre-compute and store the query results, avoiding the overhead of repeated computations for each query. This is especially effective for complex queries that need to be executed frequently."}),"\n",(0,i.jsx)(n.li,{children:"Reducing Join Operations: Materialized views can combine the data of multiple tables into one view, reducing the join operations during queries and thus improving query efficiency."}),"\n",(0,i.jsx)(n.li,{children:"Automatic Updates: When the data in the base tables changes, materialized views can be updated automatically to maintain data consistency. This ensures that the query results always reflect the latest data status."}),"\n",(0,i.jsx)(n.li,{children:"Space Overhead: Materialized views require additional storage space to save the pre-computed results. When creating materialized views, it is necessary to balance the improvement in query performance and the consumption of storage space."}),"\n",(0,i.jsx)(n.li,{children:"Maintenance Cost: The maintenance of materialized views requires certain system resources and time. Base tables that are updated frequently may lead to relatively high update overheads for materialized views. Therefore, it is necessary to choose an appropriate refresh strategy according to the actual situation."}),"\n",(0,i.jsx)(n.li,{children:"Applicable Scenarios: Materialized views are suitable for scenarios where the data change frequency is low and the query frequency is high. For frequently changing data, real-time computation may be more appropriate."}),"\n"]})}),"\n",(0,i.jsx)(n.p,{children:"Reasonable utilization of async-materialized views can significantly improve the query performance of the database, especially in the case of complex queries and large data volumes. Meanwhile, factors such as storage and maintenance also need to be considered comprehensively to achieve a balance between performance and cost."})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return l}});var a=t(667294);let i={},r=a.createContext(i);function l(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);