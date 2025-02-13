"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["632165"],{164969:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>u,assets:()=>l,toc:()=>c,frontMatter:()=>o});var t=JSON.parse('{"id":"query-acceleration/tuning/tuning-plan/controlling-hints-with-cbo-rule","title":"Control CBO Rules With Hint","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/query-acceleration/tuning/tuning-plan/controlling-hints-with-cbo-rule.md","sourceDirName":"query-acceleration/tuning/tuning-plan","slug":"/query-acceleration/tuning/tuning-plan/controlling-hints-with-cbo-rule","permalink":"/docs/3.0/query-acceleration/tuning/tuning-plan/controlling-hints-with-cbo-rule","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Control CBO Rules With Hint","language":"en"},"sidebar":"docs","previous":{"title":"Adjusting Join Shuffle Mode with Hint","permalink":"/docs/3.0/query-acceleration/tuning/tuning-plan/adjusting-join-shuffle"},"next":{"title":"Reordering Join With Leading Hint","permalink":"/docs/3.0/query-acceleration/tuning/tuning-plan/reordering-join-with-leading-hint"}}'),s=i("785893"),r=i("250065");let o={title:"Control CBO Rules With Hint",language:"en"},a=void 0,l={},c=[{value:"Overview",id:"overview",level:2},{value:"Case",id:"case",level:2},{value:"Summary",id:"summary",level:2}];function d(e){let n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"The query optimizer applies a series of rules when generating execution plans. These rules are mainly categorized into two types: Rule-Based Optimizer (RBO) and Cost-Based Optimizer (CBO)."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"RBO: This type of optimization improves query plans by applying a set of predefined heuristic rules without considering specific data statistics. Strategies such as predicate pushdown and projection pushdown fall into this category."}),"\n",(0,s.jsx)(n.li,{children:"CBO: This type of optimization leverages data statistics to estimate the cost of different execution plans and selects the plan with the lowest cost for execution. This includes choices of access paths and join algorithms."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In some cases, database administrators or developers may need more granular control over the query optimization process. Based on this, this document will introduce how to use query hints to manage CBO rules."}),"\n",(0,s.jsx)(n.admonition,{title:"Note",type:"caution",children:(0,s.jsx)(n.p,{children:"Currently, Doris has good out-of-the-box capabilities. This means that in most scenarios, Doris will adaptively optimize performance in various scenarios, and users do not need to manually control hints for performance tuning. The content introduced in this chapter is mainly for professional tuners, and business personnel only need a simple understanding."})}),"\n",(0,s.jsx)(n.p,{children:"The basic syntax for CBO rule control hints is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT /*+ USE_CBO_RULE(rule1, rule2, ...) */ ...\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This hint immediately follows the ",(0,s.jsx)(n.code,{children:"SELECT"})," keyword and specifies the names of the rules to be enabled within parentheses (rule names are case-insensitive)."]}),"\n",(0,s.jsxs)(n.p,{children:["Currently, the Doris optimizer supports several cost-based rewrites, which can be explicitly enabled using the ",(0,s.jsx)(n.code,{children:"USE_CBO_RULE"})," hint, such as:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"PUSH_DOWN_AGG_THROUGH_JOIN"}),"\n",(0,s.jsx)(n.li,{children:"PUSH_DOWN_AGG_THROUGH_JOIN_ONE_SIDE"}),"\n",(0,s.jsx)(n.li,{children:"PUSH_DOWN_DISTINCT_THROUGH_JOIN"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"case",children:"Case"}),"\n",(0,s.jsx)(n.p,{children:"Here is a query example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"explain shape plan\r\n    select /*+ USE_CBO_RULE(push_down_agg_through_join_one_side) */\r\n            a.event_id,\r\n            b.group_id,\r\n            COUNT(a.event_id)\r\n    from a\r\n    join b on\r\n            a.device_id = b.device_id\r\n    group by\r\n            a.event_id,\r\n            b.group_id\r\n    ;\n"})}),"\n",(0,s.jsx)(n.p,{children:"In this example, a CBO rule for aggregation pushdown is enabled. This operation allows table a to be aggregated before the join operation, reducing the cost of the join and speeding up the query. The plan after pushdown is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"PhysicalResultSink\r\n--hashAgg[GLOBAL]\r\n----hashAgg[LOCAL]\r\n------hashJoin[INNER_JOIN] hashCondition=((a.device_id = b.device_id)) otherCondition=()\r\n--------hashAgg[LOCAL]\r\n----------PhysicalOlapScan[a]\r\n--------filter((cast(experiment_id as DOUBLE) = 73.0))\r\n----------PhysicalOlapScan[b]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsxs)(n.p,{children:["Proper use of the ",(0,s.jsx)(n.code,{children:"USE_CBO_RULE"})," hint can help manually enable certain advanced CBO optimization rules, optimizing performance in specific scenarios. However, using CBO optimization rules requires a deep understanding of the query optimization process and data characteristics. In most cases, relying on the automatic decisions of the Doris optimizer is still the best choice."]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return o}});var t=i(667294);let s={},r=t.createContext(s);function o(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);