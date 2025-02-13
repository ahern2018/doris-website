"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["642857"],{261214:function(e,r,t){t.r(r),t.d(r,{metadata:()=>n,contentTitle:()=>a,default:()=>d,assets:()=>c,toc:()=>l,frontMatter:()=>o});var n=JSON.parse('{"id":"query/query-data/subquery","title":"\u5B50\u67E5\u8BE2","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/query/query-data/subquery.md","sourceDirName":"query/query-data","slug":"/query/query-data/subquery","permalink":"/zh-CN/docs/2.0/query/query-data/subquery","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"\u5B50\u67E5\u8BE2","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u590D\u6742\u7C7B\u578B\u67E5\u8BE2","permalink":"/zh-CN/docs/2.0/query/query-data/complex-type"},"next":{"title":"\u516C\u7528\u8868\u8868\u8FBE\u5F0F\uFF08CTE\uFF09","permalink":"/zh-CN/docs/2.0/query/query-data/cte"}}'),u=t("785893"),s=t("250065");let o={title:"\u5B50\u67E5\u8BE2",language:"zh-CN"},a=void 0,c={},l=[{value:"Where \u5B50\u53E5\u4E2D\u7684\u5B50\u67E5\u8BE2\u4E3E\u4F8B",id:"where-\u5B50\u53E5\u4E2D\u7684\u5B50\u67E5\u8BE2\u4E3E\u4F8B",level:2},{value:"Join \u5B50\u53E5\u4E2D\u7684\u5B50\u67E5\u8BE2\u4E3E\u4F8B",id:"join-\u5B50\u53E5\u4E2D\u7684\u5B50\u67E5\u8BE2\u4E3E\u4F8B",level:2}];function i(e){let r={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(r.p,{children:["\u5B50\u67E5\u8BE2\u662F\u4E00\u79CD\u5D4C\u5957\u5728\u5176\u4ED6 ",(0,u.jsx)(r.code,{children:"SELECT"})," \u8BED\u53E5\u4E2D\u7684 ",(0,u.jsx)(r.code,{children:"SELECT"})," \u8BED\u53E5\u3002\u5D4C\u5957\u5B50\u67E5\u8BE2\u901A\u5E38\u79F0\u4E3A\u67E5\u8BE2\u5185\u8BED\u53E5\uFF0C\u800C\u5305\u542B\u67E5\u8BE2\u901A\u5E38\u79F0\u4E3A\u67E5\u8BE2\u8BED\u53E5\u6216\u5916\u67E5\u8BE2\u5757\u3002\u5B50\u67E5\u8BE2\u8FD4\u56DE\u5916\u67E5\u8BE2\u7528\u4F5C\u6761\u4EF6\u7684\u6570\u636E\uFF0C\u4EE5\u786E\u5B9A\u9700\u8981\u68C0\u7D22\u54EA\u4E9B\u6570\u636E\u3002\u60A8\u53EF\u4EE5\u521B\u5EFA\u7684\u5D4C\u5957\u5B50\u67E5\u8BE2\u7684\u6570\u91CF\u6CA1\u6709\u9650\u5236\u3002"]}),"\n",(0,u.jsx)(r.p,{children:"\u4E0E\u4EFB\u4F55\u67E5\u8BE2\u4E00\u6837\uFF0C\u5B50\u67E5\u8BE2\u8FD4\u56DE\uFF08\u5355\u5217\u5355\u8BB0\u5F55\u3001\u5355\u5217\u591A\u8BB0\u5F55\u6216\u591A\u5217\u591A\u8BB0\u5F55\uFF09\u8868\u4E2D\u7684\u8BB0\u5F55\u3002"}),"\n",(0,u.jsx)(r.h2,{id:"where-\u5B50\u53E5\u4E2D\u7684\u5B50\u67E5\u8BE2\u4E3E\u4F8B",children:"Where \u5B50\u53E5\u4E2D\u7684\u5B50\u67E5\u8BE2\u4E3E\u4F8B"}),"\n",(0,u.jsx)(r.pre,{children:(0,u.jsx)(r.code,{className:"language-Plain",children:"SELECT * FROM sub_query_correlated_subquery1 WHERE k1 > (SELECT AVG(k1) FROM sub_query_correlated_subquery3) OR k1 < 10 order by k1, k2;\nselect * from sub_query_correlated_subquery1 where sub_query_correlated_subquery1.k1 not in (select sub_query_correlated_subquery3.k3 from sub_query_correlated_subquery3 where sub_query_correlated_subquery3.v2 = sub_query_correlated_subquery1.k2) or k1 < 10 order by k1, k2\n"})}),"\n",(0,u.jsx)(r.h2,{id:"join-\u5B50\u53E5\u4E2D\u7684\u5B50\u67E5\u8BE2\u4E3E\u4F8B",children:"Join \u5B50\u53E5\u4E2D\u7684\u5B50\u67E5\u8BE2\u4E3E\u4F8B"}),"\n",(0,u.jsx)(r.pre,{children:(0,u.jsx)(r.code,{className:"language-Plaintext",children:"select t1.* from t1 left join t2 on t1.k2 = t2.k3 and t1.k1 in ( select t3.k1 from t3 where t1.k2 = t3.k2 ) or t1.k1 < 10 order by t1.k1, t1.k2;\nselect t1.* from t1 left join t2 on t1.k2 = t2.k3 and exists ( select t3.k1 from t3 where t1.k2 = t3.k2 ) or t1.k1 < 10 order by t1.k1, t1.k2;\n"})})]})}function d(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,u.jsx)(r,{...e,children:(0,u.jsx)(i,{...e})}):i(e)}},250065:function(e,r,t){t.d(r,{Z:function(){return a},a:function(){return o}});var n=t(667294);let u={},s=n.createContext(u);function o(e){let r=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(u):e.components||u:o(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);