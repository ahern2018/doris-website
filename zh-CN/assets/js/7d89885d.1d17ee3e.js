"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["856439"],{356516:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>u,default:()=>o,assets:()=>c,toc:()=>m,frontMatter:()=>a});var i=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/unix-timestamp","title":"UNIX_TIMESTAMP","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/date-time-functions/unix-timestamp.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/unix-timestamp","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/unix-timestamp","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"UNIX_TIMESTAMP","language":"zh-CN"},"sidebar":"docs","previous":{"title":"FROM_UNIXTIME","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/from-unixtime"},"next":{"title":"UTC_TIMESTAMP","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/utc-timestamp"}}'),s=t("785893"),l=t("250065");let a={title:"UNIX_TIMESTAMP",language:"zh-CN"},u=void 0,c={},m=[{value:"unix_timestamp",id:"unix_timestamp",level:2},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"keywords",id:"keywords",level:3}];function r(n){let e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"unix_timestamp",children:"unix_timestamp"}),"\n",(0,s.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"INT UNIX_TIMESTAMP([DATETIME date[, STRING fmt]])"})}),"\n",(0,s.jsx)(e.p,{children:"\u5C06 Date \u6216\u8005 Datetime \u7C7B\u578B\u8F6C\u5316\u4E3A unix \u65F6\u95F4\u6233\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679C\u6CA1\u6709\u53C2\u6570\uFF0C\u5219\u662F\u5C06\u5F53\u524D\u7684\u65F6\u95F4\u8F6C\u5316\u4E3A\u65F6\u95F4\u6233\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u53C2\u6570\u9700\u8981\u662F Date \u6216\u8005 Datetime \u7C7B\u578B\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5BF9\u4E8E\u5728 1970-01-01 00:00:00 \u4E4B\u524D\u6216 2038-01-19 03:14:07 \u4E4B\u540E\u7684\u65F6\u95F4\uFF0C\u8BE5\u51FD\u6570\u5C06\u8FD4\u56DE 0\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["Format \u7684\u683C\u5F0F\u8BF7\u53C2\u9605 ",(0,s.jsx)(e.code,{children:"date_format"})," \u51FD\u6570\u7684\u683C\u5F0F\u8BF4\u660E\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u8BE5\u51FD\u6570\u53D7\u65F6\u533A\u5F71\u54CD\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"mysql> select unix_timestamp();\n+------------------+\n| unix_timestamp() |\n+------------------+\n|       1558589570 |\n+------------------+\n\nmysql> select unix_timestamp('2007-11-30 10:30:19');\n+---------------------------------------+\n| unix_timestamp('2007-11-30 10:30:19') |\n+---------------------------------------+\n|                            1196389819 |\n+---------------------------------------+\n\nmysql> select unix_timestamp('2007-11-30 10:30-19', '%Y-%m-%d %H:%i-%s');\n+---------------------------------------+\n| unix_timestamp('2007-11-30 10:30-19') |\n+---------------------------------------+\n|                            1196389819 |\n+---------------------------------------+\n\nmysql> select unix_timestamp('2007-11-30 10:30%3A19', '%Y-%m-%d %H:%i%%3A%s');\n+---------------------------------------+\n| unix_timestamp('2007-11-30 10:30%3A19') |\n+---------------------------------------+\n|                            1196389819 |\n+---------------------------------------+\n\nmysql> select unix_timestamp('1969-01-01 00:00:00');\n+---------------------------------------+\n| unix_timestamp('1969-01-01 00:00:00') |\n+---------------------------------------+\n|                                     0 |\n+---------------------------------------+\n"})}),"\n",(0,s.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"UNIX_TIMESTAMP,UNIX,TIMESTAMP\n"})})]})}function o(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(r,{...n})}):r(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return u},a:function(){return a}});var i=t(667294);let s={},l=i.createContext(s);function a(n){let e=i.useContext(l);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function u(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);