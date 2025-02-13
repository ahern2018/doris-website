"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["830019"],{995194:function(e,i,n){n.r(i),n.d(i,{metadata:()=>t,contentTitle:()=>l,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>r});var t=JSON.parse('{"id":"query-acceleration/tuning/tuning-plan/transparent-rewriting-with-sync-mv","title":"Transparent Rewriting with Sync-Materialized View","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/query-acceleration/tuning/tuning-plan/transparent-rewriting-with-sync-mv.md","sourceDirName":"query-acceleration/tuning/tuning-plan","slug":"/query-acceleration/tuning/tuning-plan/transparent-rewriting-with-sync-mv","permalink":"/docs/3.0/query-acceleration/tuning/tuning-plan/transparent-rewriting-with-sync-mv","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Transparent Rewriting with Sync-Materialized View","language":"en"},"sidebar":"docs","previous":{"title":"Optimizing Table Scanning","permalink":"/docs/3.0/query-acceleration/tuning/tuning-plan/optimizing-table-scanning"},"next":{"title":"Transparent Rewriting by Async-Materialized View","permalink":"/docs/3.0/query-acceleration/tuning/tuning-plan/transparent-rewriting-with-async-mv"}}'),a=n("785893"),s=n("250065");let r={title:"Transparent Rewriting with Sync-Materialized View",language:"en"},l=void 0,o={},c=[{value:"Overview",id:"overview",level:2},{value:"Case",id:"case",level:2},{value:"Create a Sync-Materialized View",id:"create-a-sync-materialized-view",level:3},{value:"Transparent Rewriting",id:"transparent-rewriting",level:3},{value:"Summary",id:"summary",level:2}];function d(e){let i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsxs)(i.p,{children:["The ",(0,a.jsx)(i.a,{href:"/docs/3.0/query-acceleration/materialized-view/sync-materialized-view",children:"Sync-Materialized View"})," is a special kind of table that pre-computes and stores data according to a predefined SELECT statement. Its main purpose is to meet users' needs for analyzing raw detailed data from any dimension and also enable quick analysis and queries on fixed dimensions."]}),"\n",(0,a.jsx)(i.p,{children:"The applicable scenarios for synchronous materialized views are as follows:"}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsx)(i.li,{children:"The analysis requirements cover both detailed data queries and fixed-dimension queries."}),"\n",(0,a.jsx)(i.li,{children:"The queries only involve a small number of columns or rows in the table."}),"\n",(0,a.jsx)(i.li,{children:"The queries include time-consuming processing operations, such as long-duration aggregation operations, etc."}),"\n",(0,a.jsx)(i.li,{children:"The queries need to match different prefix indexes."}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"For queries that frequently and repeatedly use the results of the same subqueries, synchronous materialized views can significantly improve performance. Doris will automatically maintain the data of materialized views to ensure data consistency between the base table and the materialized view table, without requiring additional manual maintenance costs. During a query, the system will automatically match the optimal materialized view and directly read data from it."}),"\n",(0,a.jsx)(i.admonition,{title:"Precautions",type:"tip",children:(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"In Doris 2.0 and subsequent versions, materialized views have some enhanced functions. It is recommended that users confirm in the test environment whether the expected queries can hit the materialized views they want to create before using materialized views in the formal production environment."}),"\n",(0,a.jsx)(i.li,{children:"It is not recommended to create multiple materialized views with similar forms on the same table, as this may lead to conflicts among multiple materialized views and thus cause query hit failures."}),"\n"]})}),"\n",(0,a.jsx)(i.h2,{id:"case",children:"Case"}),"\n",(0,a.jsx)(i.p,{children:"The following uses a specific example to demonstrate the process of using synchronous materialized views to accelerate queries:"}),"\n",(0,a.jsxs)(i.p,{children:["Suppose we have a detailed sales record table named ",(0,a.jsx)(i.code,{children:"sales_records"}),", which records various pieces of information for each transaction in detail, including the transaction ID, salesperson ID, selling store ID, sales date, and transaction amount. Now, we often need to conduct analysis and queries on the sales volume of different stores."]}),"\n",(0,a.jsxs)(i.p,{children:["To optimize the performance of these queries, we can create a materialized view named ",(0,a.jsx)(i.code,{children:"store_amt"}),". This view groups by the selling store and sums up the sales amounts of the same store. The specific steps are as follows:"]}),"\n",(0,a.jsx)(i.h3,{id:"create-a-sync-materialized-view",children:"Create a Sync-Materialized View"}),"\n",(0,a.jsxs)(i.p,{children:["Firstly, we use the following SQL statement to create the materialized view ",(0,a.jsx)(i.code,{children:"store_amt"}),":"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-sql",children:"CREATE MATERIALIZED VIEW store_amt AS \nSELECT store_id, SUM(sale_amt) \nFROM sales_records\nGROUP BY store_id;\n"})}),"\n",(0,a.jsx)(i.p,{children:"After submitting the creation task, Doris will build this synchronous materialized view asynchronously in the background. We can use the following command to check the creation progress of the materialized view:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-sql",children:"SHOW ALTER TABLE MATERIALIZED VIEW FROM db_name;\n"})}),"\n",(0,a.jsxs)(i.p,{children:["When the ",(0,a.jsx)(i.code,{children:"State"})," field becomes ",(0,a.jsx)(i.code,{children:"FINISHED"}),", it means that the ",(0,a.jsx)(i.code,{children:"store_amt"})," materialized view has been successfully created."]}),"\n",(0,a.jsx)(i.h3,{id:"transparent-rewriting",children:"Transparent Rewriting"}),"\n",(0,a.jsxs)(i.p,{children:["After the materialized view is created, when we query the sales volume of different stores, Doris will automatically match the ",(0,a.jsx)(i.code,{children:"store_amt"})," materialized view and directly read the pre-aggregated data from it, thus significantly improving the query efficiency. The query statement is as follows:"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-sql",children:"SELECT store_id, SUM(sale_amt) FROM sales_records GROUP BY store_id;\n"})}),"\n",(0,a.jsxs)(i.p,{children:["We can also use the ",(0,a.jsx)(i.code,{children:"EXPLAIN"})," command to check whether the query has successfully hit the materialized view:"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-sql",children:"EXPLAIN SELECT store_id, SUM(sale_amt) FROM sales_records GROUP BY store_id;\n"})}),"\n",(0,a.jsxs)(i.p,{children:["At the end of the execution plan, if something like the following is displayed, it means that the query has successfully hit the ",(0,a.jsx)(i.code,{children:"store_amt"})," materialized view:"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-sql",children:"TABLE: default_cluster:test.sales_records(store_amt), PREAGGREGATION: ON\n"})}),"\n",(0,a.jsx)(i.p,{children:"Through the above steps, we can use synchronous materialized views to optimize query performance and improve the efficiency of data analysis."}),"\n",(0,a.jsx)(i.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsx)(i.p,{children:"By creating synchronous materialized views, we can significantly improve the query speed for relevant aggregation analysis. Single-table materialized views not only enable us to conduct statistical analysis quickly but also flexibly support the query needs for detailed data, which is a very powerful feature in Doris."})]})}function h(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,i,n){n.d(i,{Z:function(){return l},a:function(){return r}});var t=n(667294);let a={},s=t.createContext(a);function r(e){let i=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);