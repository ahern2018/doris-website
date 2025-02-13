"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["520141"],{411155:function(e,s,n){n.r(s),n.d(s,{metadata:()=>t,contentTitle:()=>a,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>r});var t=JSON.parse('{"id":"sql-manual/sql-statements/session/variable/UNSET-VARIABLE","title":"UNSET VARIABLE","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/session/variable/UNSET-VARIABLE.md","sourceDirName":"sql-manual/sql-statements/session/variable","slug":"/sql-manual/sql-statements/session/variable/UNSET-VARIABLE","permalink":"/docs/3.0/sql-manual/sql-statements/session/variable/UNSET-VARIABLE","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"UNSET VARIABLE","language":"en"},"sidebar":"docs","previous":{"title":"SET VARIABLE","permalink":"/docs/3.0/sql-manual/sql-statements/session/variable/SET-VARIABLE"},"next":{"title":"SHOW VARIABLES","permalink":"/docs/3.0/sql-manual/sql-statements/session/variable/SHOW-VARIABLES"}}'),l=n("785893"),i=n("250065");let r={title:"UNSET VARIABLE",language:"en"},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Example",id:"example",level:2}];function d(e){let s={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(s.p,{children:"This statement is used to restore Doris system variables. These system variables can be modified at global or session level."}),"\n",(0,l.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sql",children:"UNSET [<effective_scope>] VARIABLE (<variable_name>)\n"})}),"\n",(0,l.jsx)(s.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsxs)(s.strong,{children:["1. ",(0,l.jsx)(s.code,{children:"<variable_name>"})]})}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsxs)(s.p,{children:["Specifies the variable name, or if you want to unset all variables, this parameter you can give a keyword ",(0,l.jsx)(s.code,{children:"ALL"}),"."]}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsxs)(s.strong,{children:["1. ",(0,l.jsx)(s.code,{children:"<effective_scope>"})]})}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsxs)(s.p,{children:["Effective scope is one of ",(0,l.jsx)(s.code,{children:"GLOBAL"})," or ",(0,l.jsx)(s.code,{children:"SESSION"})," or ",(0,l.jsx)(s.code,{children:"LOCAL"}),". If there is no effective scope, default value is ",(0,l.jsx)(s.code,{children:"SESSION"}),". ",(0,l.jsx)(s.code,{children:"LOCAL"})," is an alias of ",(0,l.jsx)(s.code,{children:"SESSION"}),"."]}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,l.jsx)(s.p,{children:"Users executing this SQL command must have at least the following privileges:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{style:{textAlign:"left"},children:"Privilege"}),(0,l.jsx)(s.th,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(s.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,l.jsx)(s.tbody,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:"ADMIN_PRIV"}),(0,l.jsx)(s.td,{style:{textAlign:"left"},children:"Session"}),(0,l.jsx)(s.td,{style:{textAlign:"left"},children:"unset global variables need admin privilege"})]})})]}),"\n",(0,l.jsx)(s.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"Only ADMIN users can unset variables to take effect globally"}),"\n",(0,l.jsxs)(s.li,{children:["When restore a variable with ",(0,l.jsx)(s.code,{children:"GLOBAL"}),",  it only affects your current using session and new open sessions. It does not affect other current open sessions."]}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"Restore value of the time zone"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:"UNSET VARIABLE time_zone;\n"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"Restore the global execution memory size"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:"UNSET GLOBAL VARIABLE exec_mem_limit;\n"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"Restore all variables globally"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:"UNSET GLOBAL VARIABLE ALL;\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return a},a:function(){return r}});var t=n(667294);let l={},i=t.createContext(l);function r(e){let s=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);