"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["881783"],{958409:function(e,n,t){t.r(n),t.d(n,{metadata:()=>l,contentTitle:()=>a,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-reference/Show-Statements/SHOW-FRONTENDS","title":"SHOW-FRONTENDS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-FRONTENDS.md","sourceDirName":"sql-manual/sql-reference/Show-Statements","slug":"/sql-manual/sql-reference/Show-Statements/SHOW-FRONTENDS","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-FRONTENDS","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"SHOW-FRONTENDS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW-PARTITIONS","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-PARTITIONS"},"next":{"title":"SHOW-FRONTENDS-DISKS","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-FRONTENDS-DISKS"}}'),r=t("785893"),s=t("250065");let i={title:"SHOW-FRONTENDS",language:"zh-CN"},a=void 0,c={},d=[{value:"SHOW-FRONTENDS",id:"show-frontends",level:2},{value:"Name",id:"name",level:3},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"show-frontends",children:"SHOW-FRONTENDS"}),"\n",(0,r.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,r.jsx)(n.p,{children:"SHOW FRONTENDS"}),"\n",(0,r.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u67E5\u770B FE \u8282\u70B9"}),"\n",(0,r.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SHOW FRONTENDS;\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8BF4\u660E\uFF1A"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"name \u8868\u793A\u8BE5 FE \u8282\u70B9\u5728 bdbje \u4E2D\u7684\u540D\u79F0\u3002"}),"\n",(0,r.jsx)(n.li,{children:"Join \u4E3A true \u8868\u793A\u8BE5\u8282\u70B9\u66FE\u7ECF\u52A0\u5165\u8FC7\u96C6\u7FA4\u3002\u4F46\u4E0D\u4EE3\u8868\u5F53\u524D\u8FD8\u5728\u96C6\u7FA4\u5185\uFF08\u53EF\u80FD\u5DF2\u5931\u8054\uFF09"}),"\n",(0,r.jsx)(n.li,{children:"Alive \u8868\u793A\u8282\u70B9\u662F\u5426\u5B58\u6D3B\u3002"}),"\n",(0,r.jsx)(n.li,{children:"ReplayedJournalId \u8868\u793A\u8BE5\u8282\u70B9\u5F53\u524D\u5DF2\u7ECF\u56DE\u653E\u7684\u6700\u5927\u5143\u6570\u636E\u65E5\u5FD7id\u3002"}),"\n",(0,r.jsx)(n.li,{children:"LastHeartbeat \u662F\u6700\u8FD1\u4E00\u6B21\u5FC3\u8DF3\u3002"}),"\n",(0,r.jsx)(n.li,{children:"IsHelper \u8868\u793A\u8BE5\u8282\u70B9\u662F\u5426\u662F bdbje \u4E2D\u7684 helper \u8282\u70B9\u3002"}),"\n",(0,r.jsx)(n.li,{children:"ErrMsg \u7528\u4E8E\u663E\u793A\u5FC3\u8DF3\u5931\u8D25\u65F6\u7684\u9519\u8BEF\u4FE1\u606F\u3002"}),"\n",(0,r.jsx)(n.li,{children:"CurrentConnected \u8868\u793A\u662F\u5426\u662F\u5F53\u524D\u8FDE\u63A5\u7684FE\u8282\u70B9"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,r.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"SHOW, FRONTENDS\n"})}),"\n",(0,r.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var l=t(667294);let r={},s=l.createContext(r);function i(e){let n=l.useContext(s);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);