"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["866449"],{345212:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>i,default:()=>d,assets:()=>l,toc:()=>o,frontMatter:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/ngram-search","title":"NGRAM_SEARCH","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/string-functions/ngram-search.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/ngram-search","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/string-functions/ngram-search","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"NGRAM_SEARCH","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SUBSTRING_INDEX","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/string-functions/substring-index"},"next":{"title":"PARSE_URL","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/string-functions/parse-url"}}'),r=t("785893"),a=t("250065");let c={title:"NGRAM_SEARCH",language:"zh-CN"},i=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:2},{value:"keywords",id:"keywords",level:2}];function u(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"DOUBLE ngram_search(VARCHAR text,VARCHAR pattern,INT gram_num)"})}),"\n",(0,r.jsxs)(e.p,{children:["\u8BA1\u7B97 text \u548C pattern \u7684 N-gram \u76F8\u4F3C\u5EA6\u3002\u76F8\u4F3C\u5EA6\u4ECE 0 \u5230 1\uFF0C\u76F8\u4F3C\u5EA6\u8D8A\u9AD8\u8BC1\u660E\u4E24\u4E2A\u5B57\u7B26\u4E32\u8D8A\u76F8\u4F3C\u3002\n\u5176\u4E2D",(0,r.jsx)(e.code,{children:"pattern"}),"\uFF0C",(0,r.jsx)(e.code,{children:"gram_num"}),"\u5FC5\u987B\u4E3A\u5E38\u91CF\u3002\n\u5982\u679C",(0,r.jsx)(e.code,{children:"text"}),"\u6216\u8005",(0,r.jsx)(e.code,{children:"pattern"}),"\u7684\u957F\u5EA6\u5C0F\u4E8E",(0,r.jsx)(e.code,{children:"gram_num"}),"\uFF0C\u8FD4\u56DE 0\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"N-gram \u76F8\u4F3C\u5EA6\uFF08N-gram similarity\uFF09\u662F\u4E00\u79CD\u57FA\u4E8E N-gram\uFF08N \u5143\u8BED\u6CD5\uFF09\u7684\u6587\u672C\u76F8\u4F3C\u5EA6\u8BA1\u7B97\u65B9\u6CD5\u3002N-gram \u662F\u6307\u5C06\u4E00\u4E2A\u6587\u672C\u4E32\u5206\u6210\u8FDE\u7EED\u7684 N \u4E2A\u5B57\u7B26\u6216\u8BCD\u8BED\u7684\u96C6\u5408\u3002\u4F8B\u5982\uFF0C\u5BF9\u4E8E\u5B57\u7B26\u4E32\u201Ctext\u201D\uFF0C\u5F53 N=2 \u65F6\uFF0C\u5176\u4E8C\u5143\u7EC4\uFF08bi-gram\uFF09\u4E3A\uFF1A{\u201Cte\u201D, \u201Cex\u201D, \u201Cxt\u201D}\u3002"}),"\n",(0,r.jsx)(e.p,{children:"N-gram \u76F8\u4F3C\u5EA6\u7684\u8BA1\u7B97\u4E3A 2 * |Intersection| / (|text set| + |pattern set|)"}),"\n",(0,r.jsxs)(e.p,{children:["\u5176\u4E2D|text set|\uFF0C|pattern set|\u4E3A text \u548C pattern \u7684 N-gram\uFF0C",(0,r.jsx)(e.code,{children:"Intersection"}),"\u4E3A\u4E24\u4E2A\u96C6\u5408\u7684\u4EA4\u96C6\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u6CE8\u610F\uFF0C\u6839\u636E\u5B9A\u4E49\uFF0C\u76F8\u4F3C\u5EA6\u4E3A 1 \u4E0D\u4EE3\u8868\u4E24\u4E2A\u5B57\u7B26\u4E32\u76F8\u540C\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u4EC5\u652F\u6301 ASCII \u7F16\u7801\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"DOUBLE ngram_search(VARCHAR text,VARCHAR pattern,INT gram_num)"})}),"\n",(0,r.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"mysql> select ngram_search('123456789' , '12345' , 3);\n+---------------------------------------+\n| ngram_search('123456789', '12345', 3) |\n+---------------------------------------+\n|                                   0.6 |\n+---------------------------------------+\n\nmysql> select ngram_search(\"abababab\",\"babababa\",2);\n+-----------------------------------------+\n| ngram_search('abababab', 'babababa', 2) |\n+-----------------------------------------+\n|                                       1 |\n+-----------------------------------------+\n"})}),"\n",(0,r.jsx)(e.h2,{id:"keywords",children:"keywords"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"NGRAM_SEARCH,NGRAM,SEARCH\n"})})]})}function d(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return i},a:function(){return c}});var s=t(667294);let r={},a=s.createContext(r);function c(n){let e=s.useContext(a);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);