"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["801380"],{210219:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>l,default:()=>N,assets:()=>c,toc:()=>a,frontMatter:()=>r});var i=JSON.parse('{"id":"sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-RANK","title":"WINDOW_FUNCTION_RANK","description":"\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the \\"License\\"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-RANK.md","sourceDirName":"sql-manual/sql-functions/window-functions","slug":"/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-RANK","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-RANK","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"WINDOW_FUNCTION_RANK","language":"zh-CN"},"sidebar":"docs","previous":{"title":"WINDOW_FUNCTION_COUNT","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-COUNT"},"next":{"title":"WINDOW_FUNCTION_DENSE_RANK","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-DENSE-RANK"}}'),o=t("785893"),s=t("250065");let r={title:"WINDOW_FUNCTION_RANK",language:"zh-CN"},l=void 0,c={},a=[{value:"WINDOW FUNCTION RANK",id:"window-function-rank",level:2},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"window-function-rank",children:"WINDOW FUNCTION RANK"}),"\n",(0,o.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,o.jsx)(e.p,{children:"RANK() \u51FD\u6570\u7528\u6765\u8868\u793A\u6392\u540D\uFF0C\u4E0E DENSE_RANK() \u4E0D\u540C\u7684\u662F\uFF0CRANK() \u4F1A\u51FA\u73B0\u7A7A\u7F3A\u6570\u5B57\u3002\u6BD4\u5982\uFF0C\u5982\u679C\u51FA\u73B0\u4E86\u4E24\u4E2A\u5E76\u5217\u76841\uFF0C RANK() \u7684\u7B2C\u4E09\u4E2A\u6570\u5C31\u662F3\uFF0C\u800C\u4E0D\u662F2\u3002"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sql",children:"RANK() OVER(partition_by_clause order_by_clause)\n"})}),"\n",(0,o.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,o.jsx)(e.p,{children:"\u6839\u636E x \u8FDB\u884C\u6392\u540D"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sql",children:"select x, y, rank() over(partition by x order by y) as rank from int_t;\n\n| x  | y    | rank     |\n|----|------|----------|\n| 1  | 1    | 1        |\n| 1  | 2    | 2        |\n| 1  | 2    | 2        |\n| 2  | 1    | 1        |\n| 2  | 2    | 2        |\n| 2  | 3    | 3        |\n| 3  | 1    | 1        |\n| 3  | 1    | 1        |\n| 3  | 2    | 3        |\n"})}),"\n",(0,o.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"WINDOW,FUNCTION,RANK\n"})})]})}function N(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return l},a:function(){return r}});var i=t(667294);let o={},s=i.createContext(o);function r(n){let e=i.useContext(s);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);