"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["787161"],{139440:function(n,e,i){i.r(e),i.d(e,{metadata:()=>t,contentTitle:()=>r,default:()=>u,assets:()=>l,toc:()=>c,frontMatter:()=>a});var t=JSON.parse('{"id":"sql-manual/sql-functions/window-functions/window-function","title":"WINDOW_FUNCTION","description":"\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the \\"License\\"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/window-functions/window-function.md","sourceDirName":"sql-manual/sql-functions/window-functions","slug":"/sql-manual/sql-functions/window-functions/window-function","permalink":"/docs/sql-manual/sql-functions/window-functions/window-function","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"WINDOW_FUNCTION","language":"en"},"sidebar":"docs","previous":{"title":"FOREACH","permalink":"/docs/sql-manual/sql-functions/combinators/foreach"},"next":{"title":"RANK","permalink":"/docs/sql-manual/sql-functions/window-functions/rank"}}'),s=i("785893"),o=i("250065");let a={title:"WINDOW_FUNCTION",language:"en"},r=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(n){let e={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.p,{children:"Window functions (also known as analytic functions) are special built-in functions that perform calculations while preserving the original rows. Unlike aggregate functions, window functions:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Process data within a specific window range rather than by GROUP BY grouping"}),"\n",(0,s.jsx)(e.li,{children:"Calculate a value for each row in the result set"}),"\n",(0,s.jsx)(e.li,{children:"Can add additional columns in the SELECT list"}),"\n",(0,s.jsx)(e.li,{children:"Execute last in query processing (after JOIN, WHERE, GROUP BY)"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Window functions are commonly used in financial and scientific computing for trend analysis, outlier calculation, and data bucketing."}),"\n",(0,s.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"function(<args>) OVER(\n    [PARTITION BY <expr> [, <expr> ...]]\n    [ORDER BY <expr> [ASC | DESC] [, <expr> [ASC | DESC] ...]]\n    [<window_clause>]\n)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Parameter"}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"<args>"})}),(0,s.jsx)(e.td,{children:"Input parameters for the window function, specific to the function being used"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"<function>"})}),(0,s.jsx)(e.td,{children:"Supported functions include: AVG(), COUNT(), DENSE_RANK(), FIRST_VALUE(), LAG(), LAST_VALUE(), LEAD(), MAX(), MIN(), RANK(), ROW_NUMBER(), SUM()"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"<partition_by>"})}),(0,s.jsx)(e.td,{children:"Similar to GROUP BY, groups data by specified columns"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"<order_by>"})}),(0,s.jsx)(e.td,{children:"Defines the ordering of data within the window"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"<window_clause>"})}),(0,s.jsx)(e.td,{children:"Defines the window range, syntax: ROWS BETWEEN [ { m | UNBOUNDED } PRECEDING | CURRENT ROW] [ AND [CURRENT ROW | { UNBOUNDED | n } FOLLOWING] ]"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"return-value",children:"Return Value"}),"\n",(0,s.jsx)(e.p,{children:"Returns the same data type as the input expression."}),"\n",(0,s.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"Assume we have the following stock data, with stock symbol JDR and daily closing prices:"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"create table stock_ticker (stock_symbol string, closing_price decimal(8,2), closing_date timestamp);    \n...load some data...    \nselect * from stock_ticker order by stock_symbol, closing_date\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:" | stock_symbol | closing_price | closing_date        |\n |--------------|---------------|---------------------|\n | JDR          | 12.86         | 2014-10-02 00:00:00 |\n | JDR          | 12.89         | 2014-10-03 00:00:00 |\n | JDR          | 12.94         | 2014-10-04 00:00:00 |\n | JDR          | 12.55         | 2014-10-05 00:00:00 |\n | JDR          | 14.03         | 2014-10-06 00:00:00 |\n | JDR          | 14.75         | 2014-10-07 00:00:00 |\n | JDR          | 13.98         | 2014-10-08 00:00:00 |\n"})}),"\n",(0,s.jsxs)(e.ol,{start:"2",children:["\n",(0,s.jsx)(e.li,{children:"This query uses an analytic function to generate a moving_average column, which calculates the 3-day average stock price (previous day, current day, and next day). The first day has no previous day value, and the last day has no next day value, so these rows only calculate a two-day average. The Partition By clause has no effect here since all data is for JDR, but if there were other stock information, Partition By would ensure the analytic function only operates within its own partition."}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"select stock_symbol, closing_date, closing_price,    \navg(closing_price) over (partition by stock_symbol order by closing_date    \nrows between 1 preceding and 1 following) as moving_average    \nfrom stock_ticker;\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:" | stock_symbol | closing_date        | closing_price | moving_average |\n |--------------|---------------------|---------------|----------------|\n | JDR          | 2014-10-02 00:00:00 | 12.86         | 12.87          |\n | JDR          | 2014-10-03 00:00:00 | 12.89         | 12.89          |\n | JDR          | 2014-10-04 00:00:00 | 12.94         | 12.79          |\n | JDR          | 2014-10-05 00:00:00 | 12.55         | 13.17          |\n | JDR          | 2014-10-06 00:00:00 | 14.03         | 13.77          |\n | JDR          | 2014-10-07 00:00:00 | 14.75         | 14.25          |\n | JDR          | 2014-10-08 00:00:00 | 13.98         | 14.36          |\n"})})]})}function u(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return r},a:function(){return a}});var t=i(667294);let s={},o=t.createContext(s);function a(n){let e=t.useContext(o);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);