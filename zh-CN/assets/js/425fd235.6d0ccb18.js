"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["434933"],{977624:function(n,e,i){i.r(e),i.d(e,{metadata:()=>s,contentTitle:()=>r,default:()=>h,assets:()=>o,toc:()=>d,frontMatter:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-functions/window-functions/window-function","title":"WINDOW_FUNCTION","description":"\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the \\"License\\"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/window-functions/window-function.md","sourceDirName":"sql-manual/sql-functions/window-functions","slug":"/sql-manual/sql-functions/window-functions/window-function","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/window-functions/window-function","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"WINDOW_FUNCTION","language":"zh-CN"},"sidebar":"docs","previous":{"title":"FOREACH","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/combinators/foreach"},"next":{"title":"RANK","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/window-functions/rank"}}'),t=i("785893"),l=i("250065");let c={title:"WINDOW_FUNCTION",language:"zh-CN"},r=void 0,o={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function a(n){let e={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(e.p,{children:"\u7A97\u53E3\u51FD\u6570\uFF08\u4E5F\u79F0\u4E3A\u5206\u6790\u51FD\u6570\uFF09\u662F\u4E00\u7C7B\u7279\u6B8A\u7684\u5185\u7F6E\u51FD\u6570\uFF0C\u5B83\u80FD\u5728\u4FDD\u7559\u539F\u59CB\u884C\u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u8BA1\u7B97\u3002\u4E0E\u805A\u5408\u51FD\u6570\u4E0D\u540C\uFF0C\u7A97\u53E3\u51FD\u6570\uFF1A"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u5728\u7279\u5B9A\u7A97\u53E3\u8303\u56F4\u5185\u5904\u7406\u6570\u636E\uFF0C\u800C\u4E0D\u662F\u6309 GROUP BY \u5206\u7EC4"}),"\n",(0,t.jsx)(e.li,{children:"\u4E3A\u7ED3\u679C\u96C6\u7684\u6BCF\u4E00\u884C\u8BA1\u7B97\u4E00\u4E2A\u503C"}),"\n",(0,t.jsx)(e.li,{children:"\u53EF\u4EE5\u5728 SELECT \u5217\u8868\u4E2D\u6DFB\u52A0\u989D\u5916\u7684\u5217"}),"\n",(0,t.jsx)(e.li,{children:"\u5728\u67E5\u8BE2\u5904\u7406\u4E2D\u6700\u540E\u6267\u884C\uFF08\u5728 JOIN\u3001WHERE\u3001GROUP BY \u4E4B\u540E\uFF09"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u7A97\u53E3\u51FD\u6570\u5E38\u7528\u4E8E\u91D1\u878D\u548C\u79D1\u5B66\u8BA1\u7B97\u9886\u57DF\uFF0C\u7528\u4E8E\u5206\u6790\u8D8B\u52BF\u3001\u8BA1\u7B97\u79BB\u7FA4\u503C\u548C\u6570\u636E\u5206\u6876\u7B49\u573A\u666F\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"function(<args>) OVER(\n    [PARTITION BY <expr> [, <expr> ...]]\n    [ORDER BY <expr> [ASC | DESC] [, <expr> [ASC | DESC] ...]]\n    [<window_clause>]\n)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u53C2\u6570"}),(0,t.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<args>"})}),(0,t.jsx)(e.td,{children:"\u7A97\u53E3\u51FD\u6570\u7684\u8F93\u5165\u53C2\u6570\uFF0C\u5177\u4F53\u53C2\u6570\u6839\u636E\u6240\u4F7F\u7528\u7684\u51FD\u6570\u800C\u5B9A"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<function>"})}),(0,t.jsx)(e.td,{children:"\u652F\u6301\u7684\u51FD\u6570\u5305\u62EC: AVG(), COUNT(), DENSE_RANK(), FIRST_VALUE(), LAG(), LAST_VALUE(), LEAD(), MAX(), MIN(), RANK(), ROW_NUMBER(), SUM()"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<partition_by>"})}),(0,t.jsx)(e.td,{children:"\u7C7B\u4F3C\u4E8E GROUP BY\uFF0C\u6309\u6307\u5B9A\u5217\u5BF9\u6570\u636E\u8FDB\u884C\u5206\u7EC4"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<order_by>"})}),(0,t.jsx)(e.td,{children:"\u5B9A\u4E49\u7A97\u53E3\u5185\u6570\u636E\u7684\u6392\u5E8F\u65B9\u5F0F"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<window_clause>"})}),(0,t.jsx)(e.td,{children:"\u5B9A\u4E49\u7A97\u53E3\u8303\u56F4\uFF0C\u8BED\u6CD5\u4E3A\uFF1AROWS BETWEEN [ { m | UNBOUNDED } PRECEDING | CURRENT ROW] [ AND [CURRENT ROW | { UNBOUNDED | n } FOLLOWING] ]"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,t.jsx)(e.p,{children:"\u8FD4\u56DE\u4E0E\u8F93\u5165\u8868\u8FBE\u5F0F\u76F8\u540C\u7684\u6570\u636E\u7C7B\u578B\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"\u5047\u8BBE\u6211\u4EEC\u6709\u5982\u4E0B\u7684\u80A1\u7968\u6570\u636E\uFF0C\u80A1\u7968\u4EE3\u7801\u662F JDR\uFF0Cclosing price \u662F\u6BCF\u5929\u7684\u6536\u76D8\u4EF7\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"create table stock_ticker (stock_symbol string, closing_price decimal(8,2), closing_date timestamp);    \n...load some data...    \nselect * from stock_ticker order by stock_symbol, closing_date\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:" | stock_symbol | closing_price | closing_date        |\n |--------------|---------------|---------------------|\n | JDR          | 12.86         | 2014-10-02 00:00:00 |\n | JDR          | 12.89         | 2014-10-03 00:00:00 |\n | JDR          | 12.94         | 2014-10-04 00:00:00 |\n | JDR          | 12.55         | 2014-10-05 00:00:00 |\n | JDR          | 14.03         | 2014-10-06 00:00:00 |\n | JDR          | 14.75         | 2014-10-07 00:00:00 |\n | JDR          | 13.98         | 2014-10-08 00:00:00 |\n"})}),"\n",(0,t.jsxs)(e.ol,{start:"2",children:["\n",(0,t.jsx)(e.li,{children:"\u8FD9\u4E2A\u67E5\u8BE2\u4F7F\u7528\u5206\u6790\u51FD\u6570\u4EA7\u751F moving_average \u8FD9\u4E00\u5217\uFF0C\u5B83\u7684\u503C\u662F3\u5929\u7684\u80A1\u7968\u5747\u4EF7\uFF0C\u5373\u524D\u4E00\u5929\u3001\u5F53\u524D\u4EE5\u53CA\u540E\u4E00\u5929\u4E09\u5929\u7684\u5747\u4EF7\u3002\u7B2C\u4E00\u5929\u6CA1\u6709\u524D\u4E00\u5929\u7684\u503C\uFF0C\u6700\u540E\u4E00\u5929\u6CA1\u6709\u540E\u4E00\u5929\u7684\u503C\uFF0C\u6240\u4EE5\u8FD9\u4E24\u884C\u53EA\u8BA1\u7B97\u4E86\u4E24\u5929\u7684\u5747\u503C\u3002\u8FD9\u91CC Partition By \u6CA1\u6709\u8D77\u5230\u4F5C\u7528\uFF0C\u56E0\u4E3A\u6240\u6709\u7684\u6570\u636E\u90FD\u662F JDR \u7684\u6570\u636E\uFF0C\u4F46\u5982\u679C\u8FD8\u6709\u5176\u4ED6\u80A1\u7968\u4FE1\u606F\uFF0CPartition By \u4F1A\u4FDD\u8BC1\u5206\u6790\u51FD\u6570\u503C\u4F5C\u7528\u5728\u672C Partition \u4E4B\u5185\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select stock_symbol, closing_date, closing_price,    \navg(closing_price) over (partition by stock_symbol order by closing_date    \nrows between 1 preceding and 1 following) as moving_average    \nfrom stock_ticker;\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:" | stock_symbol | closing_date        | closing_price | moving_average |\n |--------------|---------------------|---------------|----------------|\n | JDR          | 2014-10-02 00:00:00 | 12.86         | 12.87          |\n | JDR          | 2014-10-03 00:00:00 | 12.89         | 12.89          |\n | JDR          | 2014-10-04 00:00:00 | 12.94         | 12.79          |\n | JDR          | 2014-10-05 00:00:00 | 12.55         | 13.17          |\n | JDR          | 2014-10-06 00:00:00 | 14.03         | 13.77          |\n | JDR          | 2014-10-07 00:00:00 | 14.75         | 14.25          |\n | JDR          | 2014-10-08 00:00:00 | 13.98         | 14.36          |\n"})})]})}function h(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return r},a:function(){return c}});var s=i(667294);let t={},l=s.createContext(t);function c(n){let e=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);