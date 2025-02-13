"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["198101"],{860858:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>a,default:()=>d,assets:()=>l,toc:()=>c,frontMatter:()=>r});var i=JSON.parse('{"id":"sql-manual/sql-functions/window-functions/dense-rank","title":"DENSE_RANK","description":"\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the \\"License\\"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/window-functions/dense-rank.md","sourceDirName":"sql-manual/sql-functions/window-functions","slug":"/sql-manual/sql-functions/window-functions/dense-rank","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/window-functions/dense-rank","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"DENSE_RANK","language":"zh-CN"},"sidebar":"docs","previous":{"title":"RANK","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/window-functions/rank"},"next":{"title":"PERCENT_RANK","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/window-functions/percent-rank"}}'),s=t("785893"),o=t("250065");let r={title:"DENSE_RANK",language:"zh-CN"},a=void 0,l={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function u(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(e.p,{children:"DENSE_RANK() \u662F\u4E00\u79CD\u7A97\u53E3\u51FD\u6570\uFF0C\u7528\u4E8E\u8BA1\u7B97\u5206\u7EC4\u5185\u503C\u7684\u6392\u540D\uFF0C\u4E0E RANK() \u4E0D\u540C\u7684\u662F\uFF0CDENSE_RANK() \u8FD4\u56DE\u7684\u6392\u540D\u662F\u8FDE\u7EED\u7684\uFF0C\u4E0D\u4F1A\u51FA\u73B0\u7A7A\u7F3A\u6570\u5B57\u3002\u6392\u540D\u503C\u4ECE 1 \u5F00\u59CB\u6309\u987A\u5E8F\u9012\u589E\uFF0C\u5982\u679C\u51FA\u73B0\u76F8\u540C\u7684\u503C\uFF0C\u5B83\u4EEC\u5C06\u5177\u6709\u76F8\u540C\u7684\u6392\u540D\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"DENSE_RANK()\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,s.jsx)(e.p,{children:"\u8FD4\u56DE BIGINT \u7C7B\u578B\u7684\u6392\u540D\u503C\uFF0C\u4ECE 1 \u5F00\u59CB\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"select x, y, dense_rank() over(partition by x order by y) as rank from int_t;\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"+-----+-----+------+\n| x   | y   | rank |\n| --- | --- | ---- |\n| 1   | 1   | 1    |\n| 1   | 2   | 2    |\n| 1   | 2   | 2    | -- \u76F8\u540C\u503C\u5177\u6709\u76F8\u540C\u6392\u540D |\n| 2   | 1   | 1    |\n| 2   | 2   | 2    |\n| 2   | 3   | 3    | -- \u6392\u540D\u8FDE\u7EED\uFF0C\u6CA1\u6709\u7A7A\u7F3A |\n| 3   | 1   | 1    |\n| 3   | 1   | 1    |\n| 3   | 2   | 2    |\n+-----+-----+------+\n"})})]})}function d(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return r}});var i=t(667294);let s={},o=i.createContext(s);function r(n){let e=i.useContext(o);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);