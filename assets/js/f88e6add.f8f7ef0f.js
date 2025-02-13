"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["436194"],{965181:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>d,assets:()=>c,toc:()=>u,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/histogram","title":"HISTOGRAM","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/aggregate-functions/histogram.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/histogram","permalink":"/docs/sql-manual/sql-functions/aggregate-functions/histogram","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"HISTOGRAM","language":"en"},"sidebar":"docs","previous":{"title":"PERCENTILE_APPROX","permalink":"/docs/sql-manual/sql-functions/aggregate-functions/percentile-approx"},"next":{"title":"GROUP_ARRAY_INTERSECT","permalink":"/docs/sql-manual/sql-functions/aggregate-functions/group-array-intersect"}}'),r=t("785893"),a=t("250065");let i={title:"HISTOGRAM",language:"en"},l=void 0,c={},u=[{value:"Description",id:"description",level:2},{value:"Alias",id:"alias",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function o(e){let n={code:"code",expr:"expr",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:'The histogram function is used to describe the distribution of the data. It uses an "equal height" bucking strategy, and divides the data into buckets according to the value of the data. It describes each bucket with some simple data, such as the number of values that fall in the bucket.'}),"\n",(0,r.jsx)(n.h2,{id:"alias",children:"Alias"}),"\n",(0,r.jsx)(n.p,{children:"HIST"}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"HISTOGRAM(<expr>[, <num_buckets>])\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameters"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"expr"})}),(0,r.jsx)(n.td,{children:"The expression that needs to be obtained."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"num_buckets"})}),(0,r.jsx)(n.td,{children:"Optional. Limit the number of histogram buckets. The default value is 128."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsx)(n.p,{children:"Returns a value of JSON type after histogram estimation. Special cases:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["When the parameter ",(0,r.jsx)(n.expr,{children:" is NULL, it returns NULL."})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT histogram(c_float) FROM histogram_test;\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'+-------------------------------------------------------------------------------------------------------------------------------------+\n| histogram(`c_float`)                                                                                                                |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| {"num_buckets":3,"buckets":[{"lower":"0.1","upper":"0.1","count":1,"pre_sum":0,"ndv":1},...]} |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT histogram(c_string, 2) FROM histogram_test;\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'+-------------------------------------------------------------------------------------------------------------------------------------+\n| histogram(`c_string`)                                                                                                               |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| {"num_buckets":2,"buckets":[{"lower":"str1","upper":"str7","count":4,"pre_sum":0,"ndv":3},...]} |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n'})}),"\n",(0,r.jsx)(n.p,{children:"Query result description\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "num_buckets": 3, \n    "buckets": [\n        {\n            "lower": "0.1", \n            "upper": "0.2", \n            "count": 2, \n            "pre_sum": 0, \n            "ndv": 2\n        }, \n        {\n            "lower": "0.8", \n            "upper": "0.9", \n            "count": 2, \n            "pre_sum": 2, \n            "ndv": 2\n        }, \n        {\n            "lower": "1.0", \n            "upper": "1.0", \n            "count": 2, \n            "pre_sum": 4, \n            "ndv": 1\n        }\n    ]\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"Field description\uFF1A\n- num_buckets\uFF1AThe number of buckets\n- buckets\uFF1AAll buckets\n    - lower\uFF1AUpper bound of the bucket\n    - upper\uFF1ALower bound of the bucket\n    - count\uFF1AThe number of elements contained in the bucket\n    - pre_sum\uFF1AThe total number of elements in the front bucket\n    - ndv\uFF1AThe number of different values in the bucket\n\n> Total number of histogram elements = number of elements in the last bucket(count) + total number of elements in the previous bucket(pre_sum).\n"})})]})}function d(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(667294);let r={},a=s.createContext(r);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);