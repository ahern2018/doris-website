"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["625681"],{146596:function(n,a,r){r.r(a),r.d(a,{metadata:()=>e,contentTitle:()=>i,default:()=>d,assets:()=>c,toc:()=>o,frontMatter:()=>l});var e=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-last","title":"ARRAY_LAST","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/array-functions/array-last.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-last","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-last","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ARRAY_LAST","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAY_FIRST","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-first"},"next":{"title":"ARRAYS_OVERLAP","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/arrays-overlap"}}'),s=r("785893"),t=r("250065");let l={title:"ARRAY_LAST",language:"zh-CN"},i=void 0,c={},o=[{value:"array_last",id:"array_last",level:2},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"keywords",id:"keywords",level:3}];function u(n){let a={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h2,{id:"array_last",children:"array_last"}),"\n",(0,s.jsx)(a.p,{children:"array_last"}),"\n",(0,s.jsx)(a.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsxs)(a.p,{children:["\u8FD4\u56DE\u6570\u7EC4\u4E2D\u7684\u6700\u540E\u4E00\u4E2A func(arr1[i]) \u503C\u4E0D\u4E3A 0 \u7684\u5143\u7D20\u3002\u5F53\u6570\u7EC4\u4E2D\u6240\u6709\u5143\u7D20\u8FDB\u884C func(arr1[i]) \u90FD\u4E3A 0 \u65F6\uFF0C\u7ED3\u679C\u8FD4\u56DE",(0,s.jsx)(a.code,{children:"NULL"}),"\u503C\u3002"]}),"\n",(0,s.jsx)(a.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"T array_last(lambda, ARRAY<T>)\n"})}),"\n",(0,s.jsx)(a.p,{children:"\u4F7F\u7528\u4E00\u4E2A lambda \u8868\u8FBE\u5F0F\u548C\u4E00\u4E2A ARRAY \u4F5C\u4E3A\u8F93\u5165\u53C2\u6570\uFF0Clambda \u8868\u8FBE\u5F0F\u4E3A\u5E03\u5C14\u578B\uFF0C\u7528\u4E8E\u5BF9 ARRAY \u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u8FDB\u884C\u5224\u65AD\u8FD4\u56DE\u503C\u3002"}),"\n",(0,s.jsx)(a.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"mysql> select array_last(x->x>2, [1,2,3,0]) ;\n+------------------------------------------------------------------------------------------------+\n| array_last(array_filter(ARRAY(1, 2, 3, 0), array_map([x] -> x(0) > 2, ARRAY(1, 2, 3, 0))), -1) |\n+------------------------------------------------------------------------------------------------+\n|                                                                                              3 |\n+------------------------------------------------------------------------------------------------+\n\n\nmysql> select array_last(x->x>4, [1,2,3,0]) ; \n+------------------------------------------------------------------------------------------------+\n| array_last(array_filter(ARRAY(1, 2, 3, 0), array_map([x] -> x(0) > 4, ARRAY(1, 2, 3, 0))), -1) |\n+------------------------------------------------------------------------------------------------+\n|                                                                                           NULL |\n+------------------------------------------------------------------------------------------------+\n\n\n"})}),"\n",(0,s.jsx)(a.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(a.p,{children:"ARRAY, LAST, ARRAY_LAST"})]})}function d(n={}){let{wrapper:a}={...(0,t.a)(),...n.components};return a?(0,s.jsx)(a,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},250065:function(n,a,r){r.d(a,{Z:function(){return i},a:function(){return l}});var e=r(667294);let s={},t=e.createContext(s);function l(n){let a=e.useContext(t);return e.useMemo(function(){return"function"==typeof n?n(a):{...a,...n}},[a,n])}function i(n){let a;return a=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),e.createElement(t.Provider,{value:a},n.children)}}}]);