"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["402227"],{543295:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>d,assets:()=>l,toc:()=>c,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/combinators/union","title":"UNION","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/combinators/union.md","sourceDirName":"sql-manual/sql-functions/combinators","slug":"/sql-manual/sql-functions/combinators/union","permalink":"/docs/dev/sql-manual/sql-functions/combinators/union","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"UNION","language":"en"},"sidebar":"docs","previous":{"title":"MERGE","permalink":"/docs/dev/sql-manual/sql-functions/combinators/merge"},"next":{"title":"FOREACH","permalink":"/docs/dev/sql-manual/sql-functions/combinators/foreach"}}'),i=t("785893"),o=t("250065");let r={title:"UNION",language:"en"},a=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:2},{value:"Keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Aggregate multiple aggregation intermediate results into one.\nThe type of the result is agg_state, and the function signature is consistent with the input parameter."}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"AGGREGATE_FUNCTION_UNION(agg_state)"})}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql [test]>select avg_merge(t) from (select avg_union(avg_state(1)) as t from d_table group by k1)p;\n+----------------+\n| avg_merge(`t`) |\n+----------------+\n|              1 |\n+----------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,i.jsx)(n.p,{children:"AGG_STATE, UNION"})]})}function d(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var s=t(667294);let i={},o=s.createContext(i);function r(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);