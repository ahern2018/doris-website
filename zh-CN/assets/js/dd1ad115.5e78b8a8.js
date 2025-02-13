"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["684253"],{742076:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>d,assets:()=>c,toc:()=>o,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/instance-management/SHOW-FRONTEND-CONFIG","title":"SHOW FRONTEND CONFIG","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/cluster-management/instance-management/SHOW-FRONTEND-CONFIG.md","sourceDirName":"sql-manual/sql-statements/cluster-management/instance-management","slug":"/sql-manual/sql-statements/cluster-management/instance-management/SHOW-FRONTEND-CONFIG","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/cluster-management/instance-management/SHOW-FRONTEND-CONFIG","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SHOW FRONTEND CONFIG","language":"en"},"sidebar":"docs","previous":{"title":"SET FRONTEND CONFIG","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/cluster-management/instance-management/SET-FRONTEND-CONFIG"},"next":{"title":"MODIFY FRONTEND HOSTNAME","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/cluster-management/instance-management/MODIFY-FRONTEND-HOSTNAME"}}'),a=t("785893"),l=t("250065");let i={title:"SHOW FRONTEND CONFIG",language:"en"},r=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function m(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"This statement is used to display the configuration of the current cluster (currently only the configuration items of FE are supported)"}),"\n",(0,a.jsx)(n.p,{children:"grammar:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'SHOW FRONTEND CONFIG [LIKE "pattern"];\n'})}),"\n",(0,a.jsx)(n.p,{children:"The columns in the results have the following meanings:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Key: Configuration item name"}),"\n",(0,a.jsx)(n.li,{children:"Value: Configuration item value"}),"\n",(0,a.jsx)(n.li,{children:"Type: Configuration item type"}),"\n",(0,a.jsx)(n.li,{children:"IsMutable: Whether it can be set by ADMIN SET CONFIG command"}),"\n",(0,a.jsx)(n.li,{children:"MasterOnly: Is it only applicable to Master FE"}),"\n",(0,a.jsx)(n.li,{children:"Comment: Configuration item description"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"View the configuration of the current FE node"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SHOW FRONTEND CONFIG;\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Use the like predicate to search the configuration of the current Fe node"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"mysql> SHOW FRONTEND CONFIG LIKE '%check_java_version%';\n+--------------------+-------+---------+---------- -+------------+---------+\n| Key | Value | Type | IsMutable | MasterOnly | Comment |\n+--------------------+-------+---------+---------- -+------------+---------+\n| check_java_version | true | boolean | false | false | |\n+--------------------+-------+---------+---------- -+------------+---------+\n1 row in set (0.01 sec)\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,a.jsx)(n.p,{children:"SHOW, CONFIG"}),"\n",(0,a.jsx)(n.h2,{id:"best-practice",children:"Best Practice"})]})}function d(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(667294);let a={},l=s.createContext(a);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);