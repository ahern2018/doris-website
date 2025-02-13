"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["830639"],{71157:function(e,n,t){t.r(n),t.d(n,{metadata:()=>l,contentTitle:()=>a,default:()=>u,assets:()=>d,toc:()=>c,frontMatter:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-statements/plugin/UNINSTALL-PLUGIN","title":"UNINSTALL PLUGIN","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/plugin/UNINSTALL-PLUGIN.md","sourceDirName":"sql-manual/sql-statements/plugin","slug":"/sql-manual/sql-statements/plugin/UNINSTALL-PLUGIN","permalink":"/docs/dev/sql-manual/sql-statements/plugin/UNINSTALL-PLUGIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"UNINSTALL PLUGIN","language":"en"},"sidebar":"docs","previous":{"title":"INSTALL PLUGIN","permalink":"/docs/dev/sql-manual/sql-statements/plugin/INSTALL-PLUGIN"},"next":{"title":"SHOW PLUGINS","permalink":"/docs/dev/sql-manual/sql-statements/plugin/SHOW-PLUGINS"}}'),s=t("785893"),i=t("250065");let r={title:"UNINSTALL PLUGIN",language:"en"},a=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax\uFF1A",id:"syntax",level:2},{value:"Required parameters",id:"required-parameters",level:2},{value:"Permission Control",id:"permission-control",level:2},{value:"Precautions",id:"precautions",level:2},{value:"Example",id:"example",level:2}];function o(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"This statement is used to uninstall a plugin."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"UNINSTALL PLUGIN <plugin_name>;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"required-parameters",children:"Required parameters"}),"\n",(0,s.jsxs)(n.p,{children:["** 1. ",(0,s.jsx)(n.code,{children:"<plugin_name>"}),"**"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"The name of the uninstalled plugin"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"permission-control",children:"Permission Control"}),"\n",(0,s.jsx)(n.p,{children:"The user executing this SQL command must have at least the following permissions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Permissions"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Object"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"ADMIN_PRIV"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"The entire cluster"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Requires administrative privileges for the entire cluster"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"precautions",children:"Precautions"}),"\n",(0,s.jsx)(n.p,{children:"Only non-builtin plugins can be uninstalled"}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"To uninstall a plugin:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"UNINSTALL PLUGIN auditdemo;\n"})}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var l=t(667294);let s={},i=l.createContext(s);function r(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);