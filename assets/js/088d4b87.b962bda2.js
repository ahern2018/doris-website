"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["661628"],{186359:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>i,default:()=>m,assets:()=>o,toc:()=>d,frontMatter:()=>r});var a=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/storage-management/SHOW-STORAGE-VAULTS","title":"SHOW STORAGE VAULTS","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/cluster-management/storage-management/SHOW-STORAGE-VAULTS.md","sourceDirName":"sql-manual/sql-statements/cluster-management/storage-management","slug":"/sql-manual/sql-statements/cluster-management/storage-management/SHOW-STORAGE-VAULTS","permalink":"/docs/dev/sql-manual/sql-statements/cluster-management/storage-management/SHOW-STORAGE-VAULTS","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SHOW STORAGE VAULTS","language":"en"},"sidebar":"docs","previous":{"title":"UNSET DEFAULT STORAGE VAULT","permalink":"/docs/dev/sql-manual/sql-statements/cluster-management/storage-management/UNSET-DEFAULT-STORAGE-VAULT"},"next":{"title":"CREATE STORAGE POLICY","permalink":"/docs/dev/sql-manual/sql-statements/cluster-management/storage-management/CREATE-STORAGE-POLICY"}}'),s=t("785893"),l=t("250065");let r={title:"SHOW STORAGE VAULTS",language:"en"},i=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Related Commands",id:"related-commands",level:2},{value:"Keywords",id:"keywords",level:2}];function c(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"The SHOW STORAGE VAULTS command is used to display information about all storage vaults configured in the system. Storage vaults are used to manage external storage locations for data."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"    SHOW STORAGE VAULTS\n"})}),"\n",(0,s.jsx)(n.h2,{id:"return-values",children:"Return Values"}),"\n",(0,s.jsx)(n.p,{children:"This command returns a result set with the following columns:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"StorageVaultName"}),": The name of the storage vault."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"StorageVaultId"}),": The id of the storage vault."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Properties"}),": A JSON string containing the configuration properties of the vault."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"IsDefault"}),": Indicates whether this vault is set as the default (TRUE or FALSE)."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"related-commands",children:"Related Commands"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../Data-Definition-Statements/CREATE-STORAGE-VAULT.md",children:"CREATE STORAGE VAULT"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../account-management/GRANT-TO.md",children:"GRANT"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../account-management/REVOKE-FROM.md",children:"REVOKE"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../Data-Definition-Statements/SET-DEFAULT-STORAGE-VAULT.md",children:"SET DEFAULT STORAGE VAULT"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"SHOW, STORAGE VAULTS\n"})})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return r}});var a=t(667294);let s={},l=a.createContext(s);function r(e){let n=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);