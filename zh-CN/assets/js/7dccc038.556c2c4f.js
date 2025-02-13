"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["624930"],{922775:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>r,default:()=>u,assets:()=>i,toc:()=>c,frontMatter:()=>d});var a=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/data-and-status-management/CLEAN-TRASH","title":"CLEAN TRASH","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/table-and-view/data-and-status-management/CLEAN-TRASH.md","sourceDirName":"sql-manual/sql-statements/table-and-view/data-and-status-management","slug":"/sql-manual/sql-statements/table-and-view/data-and-status-management/CLEAN-TRASH","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/data-and-status-management/CLEAN-TRASH","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"CLEAN TRASH","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW REPLICA DISTRIBUTION","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-REPLICA-DISTRIBUTION"},"next":{"title":"SHOW TRASH","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TRASH"}}'),s=t("785893"),l=t("250065");let d={title:"CLEAN TRASH",language:"zh-CN"},r=void 0,i={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u6E05\u7406 backend \u5185\u7684\u5783\u573E\u6570\u636E"}),"\n",(0,s.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ADMIN CLEAN TRASH [ON ("BackendHost1:BackendHeartBeatPort1", "BackendHost2:BackendHeartBeatPort2", ...)];\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u8BF4\u660E\uFF1A"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u4EE5 BackendHost:BackendHeartBeatPort \u8868\u793A\u9700\u8981\u6E05\u7406\u7684 backend\uFF0C\u4E0D\u6DFB\u52A0 on \u9650\u5B9A\u5219\u6E05\u7406\u6240\u6709 backend\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6E05\u7406\u6240\u6709 be \u8282\u70B9\u7684\u5783\u573E\u6570\u636E\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:" ADMIN CLEAN TRASH;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6E05\u7406'192.168.0.1:9050'\u548C'192.168.0.2:9050'\u7684\u5783\u573E\u6570\u636E\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:' ADMIN CLEAN TRASH ON ("192.168.0.1:9050","192.168.0.2:9050");\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"ADMIN, CLEAN, TRASH\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return d}});var a=t(667294);let s={},l=a.createContext(s);function d(e){let n=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);