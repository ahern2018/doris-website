"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["474606"],{376595:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/table/SHOW-CREATE-TABLE","title":"SHOW CREATE TABLE","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/table-and-view/table/SHOW-CREATE-TABLE.md","sourceDirName":"sql-manual/sql-statements/table-and-view/table","slug":"/sql-manual/sql-statements/table-and-view/table/SHOW-CREATE-TABLE","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/table/SHOW-CREATE-TABLE","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW CREATE TABLE","language":"en"},"sidebar":"docs","previous":{"title":"DROP TABLE","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/table/DROP-TABLE"},"next":{"title":"SHOW TABLES","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/table/SHOW-TABLES"}}'),i=t("785893"),l=t("250065");let a={title:"SHOW CREATE TABLE",language:"en"},r=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"This statement is used to display the creation statement of the data table."}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SHOW [BRIEF] CREATE TABLE [<db_name>.]<table_name>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["1.",(0,i.jsx)(n.code,{children:"<table_name>"})]})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Specifies the table identifier (name), which must be unique within the database in which it is located."}),"\n",(0,i.jsxs)(n.p,{children:["Identifiers must begin with an alphabetic character (or any character in a language if unicode name support is enabled) and cannot contain spaces or special characters unless the entire identifier string is enclosed in backticks (e.g. ",(0,i.jsx)(n.code,{children:"My Object"}),")."]}),"\n",(0,i.jsx)(n.p,{children:"Identifiers cannot use reserved keywords."}),"\n",(0,i.jsx)(n.p,{children:"For more details, see Identifier Requirements and Reserved Keywords."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["1.",(0,i.jsx)(n.code,{children:"BRIEF"})]})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Display only basic information about the table, excluding column definitions."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["2.",(0,i.jsx)(n.code,{children:"<db_name>"})]})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Specifies the identifier (i.e., name) for the database."}),"\n",(0,i.jsxs)(n.p,{children:["Identifiers must begin with an alphabetic character (or any character in a given language if unicode name support is enabled) and cannot contain spaces or special characters unless the entire identifier string is enclosed in backticks (e.g., ",(0,i.jsx)(n.code,{children:"My Database"}),")."]}),"\n",(0,i.jsx)(n.p,{children:"Identifiers cannot use reserved keywords."}),"\n",(0,i.jsx)(n.p,{children:"See Identifier Requirements and Reserved Keywords for more details."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"column name"}),(0,i.jsx)(n.th,{children:"description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Table"}),(0,i.jsx)(n.td,{children:"Table name"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Create Table"}),(0,i.jsx)(n.td,{children:"Create table statement"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,i.jsx)(n.p,{children:"The user executing this SQL command must have at least the following permissions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Privilege"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Object"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Select_priv"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Table"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"SHOW CREATE TABLE belongs to table SELECT operation"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"View the creation statement of a table"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SHOW CREATE TABLE demo.test_table;\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"View the simplified table creation statement for a table"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SHOW BRIEF CREATE TABLE demo.test_table;\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var s=t(667294);let i={},l=s.createContext(i);function a(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);