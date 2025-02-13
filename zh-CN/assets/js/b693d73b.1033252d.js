"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["916002"],{292447:function(n,e,s){s.r(e),s.d(e,{metadata:()=>l,contentTitle:()=>c,default:()=>u,assets:()=>a,toc:()=>d,frontMatter:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/ltrim-in","title":"LTRIM_IN","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/string-functions/ltrim-in.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/ltrim-in","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/ltrim-in","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"LTRIM_IN","language":"zh-CN"},"sidebar":"docs","previous":{"title":"TRIM_IN","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/trim-in"},"next":{"title":"RTRIM_IN","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/rtrim-in"}}'),t=s("785893"),i=s("250065");let r={title:"LTRIM_IN",language:"zh-CN"},c=void 0,a={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(e.p,{children:"LTRIM_IN \u51FD\u6570\u7528\u4E8E\u79FB\u9664\u5B57\u7B26\u4E32\u5DE6\u4FA7\u7684\u6307\u5B9A\u5B57\u7B26\u3002\u5F53\u4E0D\u6307\u5B9A\u79FB\u9664\u5B57\u7B26\u96C6\u5408\u65F6\uFF0C\u9ED8\u8BA4\u79FB\u9664\u5DE6\u4FA7\u7684\u7A7A\u683C\uFF1B\u5F53\u6307\u5B9A\u5B57\u7B26\u96C6\u5408\u65F6\uFF0C\u5C06\u79FB\u9664\u5DE6\u4FA7\u51FA\u73B0\u7684\u6240\u6709\u6307\u5B9A\u5B57\u7B26\uFF08\u4E0D\u8003\u8651\u5B57\u7B26\u96C6\u5408\u987A\u5E8F\uFF09\u3002\nLTRIM_IN \u7684\u7279\u70B9\u662F\u4F1A\u79FB\u9664\u6307\u5B9A\u5B57\u7B26\u96C6\u5408\u4E2D\u7684\u4EFB\u610F\u5B57\u7B26\u7EC4\u5408\uFF0C\u800C LTRIM \u51FD\u6570\u5219\u662F\u6309\u7167\u5B8C\u6574\u7684\u5B57\u7B26\u4E32\u5339\u914D\u8FDB\u884C\u79FB\u9664\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"LTRIM_IN(<str>[, <rhs>])\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u53C2\u6570"}),(0,t.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<str>"})}),(0,t.jsx)(e.td,{children:"\u9700\u8981\u5904\u7406\u7684\u5B57\u7B26\u4E32\u3002\u7C7B\u578B\uFF1AVARCHAR"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<rhs>"})}),(0,t.jsx)(e.td,{children:"\u53EF\u9009\u53C2\u6570\uFF0C\u8981\u79FB\u9664\u7684\u5B57\u7B26\u96C6\u5408\u3002\u7C7B\u578B\uFF1AVARCHAR"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,t.jsx)(e.p,{children:"\u8FD4\u56DE VARCHAR \u7C7B\u578B\uFF0C\u8868\u793A\u5904\u7406\u540E\u7684\u5B57\u7B26\u4E32\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u7279\u6B8A\u60C5\u51B5\uFF1A"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u5982\u679C str \u4E3A NULL\uFF0C\u8FD4\u56DE NULL"}),"\n",(0,t.jsx)(e.li,{children:"\u5982\u679C\u4E0D\u6307\u5B9A rhs\uFF0C\u79FB\u9664\u5DE6\u4FA7\u6240\u6709\u7A7A\u683C"}),"\n",(0,t.jsx)(e.li,{children:"\u5982\u679C\u6307\u5B9A rhs\uFF0C\u79FB\u9664\u5DE6\u4FA7\u51FA\u73B0\u5728 rhs \u4E2D\u7684\u6240\u6709\u5B57\u7B26\uFF0C\u76F4\u5230\u9047\u5230\u7B2C\u4E00\u4E2A\u4E0D\u5728 rhs \u4E2D\u7684\u5B57\u7B26"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"\u79FB\u9664\u5DE6\u4FA7\u7A7A\u683C"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SELECT ltrim_in('   ab d') str;\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+------+\n| str  |\n+------+\n| ab d |\n+------+\n"})}),"\n",(0,t.jsxs)(e.ol,{start:"2",children:["\n",(0,t.jsx)(e.li,{children:"\u79FB\u9664\u6307\u5B9A\u5B57\u7B26\u96C6\u5408"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SELECT ltrim_in('ababccaab', 'ab') str;\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+-------+\n| str   |\n+-------+\n| ccaab |\n+-------+\n"})}),"\n",(0,t.jsxs)(e.ol,{start:"3",children:["\n",(0,t.jsx)(e.li,{children:"\u4E0E LTRIM \u51FD\u6570\u7684\u5BF9\u6BD4"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SELECT ltrim_in('abcd', 'ae'),ltrim('abcd', 'abe');\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+------------------------+----------------------+\n| ltrim_in('abcd', 'ae') | ltrim('abcd', 'abe') |\n+------------------------+----------------------+\n| bcd                    | abcd                 |\n+------------------------+----------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return r}});var l=s(667294);let t={},i=l.createContext(t);function r(n){let e=l.useContext(i);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),l.createElement(i.Provider,{value:e},n.children)}}}]);