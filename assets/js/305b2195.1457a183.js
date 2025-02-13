"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["266051"],{797870:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>u,assets:()=>i,toc:()=>d,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/table-valued-functions/query","title":"QUERY","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/table-valued-functions/query.md","sourceDirName":"sql-manual/sql-functions/table-valued-functions","slug":"/sql-manual/sql-functions/table-valued-functions/query","permalink":"/docs/dev/sql-manual/sql-functions/table-valued-functions/query","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"QUERY","language":"en"},"sidebar":"docs","previous":{"title":"LOCAL","permalink":"/docs/dev/sql-manual/sql-functions/table-valued-functions/local"},"next":{"title":"HUDI_META","permalink":"/docs/dev/sql-manual/sql-functions/table-valued-functions/hudi-meta"}}'),a=t("785893"),r=t("250065");let l={title:"QUERY",language:"en"},c=void 0,i={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Query table function (table-valued-function, tvf) can be used to transparently transmit query statements directly to a catalog for data query"}),"\n",(0,a.jsx)(n.p,{children:"Supported by Doris version 2.1.3, currently only transparent query jdbc catalog is supported.\nYou need to create the corresponding catalog in Doris first."}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'QUERY(\n    "catalog" = "<catalog>", \n    "query" = "<query_sql>"\n  );\n'})}),"\n",(0,a.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,a.jsxs)(n.p,{children:["Each parameter in the query table function tvf is a ",(0,a.jsx)(n.code,{children:'"key"="value"'})," pair."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Field"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"catalog"})}),(0,a.jsx)(n.td,{children:"Catalog name, which needs to be filled in according to the name of the catalog."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"query"})}),(0,a.jsx)(n.td,{children:"The query statement to be executed."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.p,{children:["Can be used with ",(0,a.jsx)(n.code,{children:"desc function"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'desc function query("catalog" = "jdbc", "query" = "select * from test.student");\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+-------+------+------+-------+---------+-------+\n| Field | Type | Null | Key   | Default | Extra |\n+-------+------+------+-------+---------+-------+\n| id    | int  | Yes  | true  | NULL    |       |\n| name  | text | Yes  | false | NULL    | NONE  |\n+-------+------+------+-------+---------+-------+\n"})}),"\n",(0,a.jsx)(n.p,{children:"Transparent query for tables in jdbc catalog data source"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'select * from query("catalog" = "jdbc", "query" = "select * from test.student");\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+------+---------+\n| id   | name    |\n+------+---------+\n| 1    | alice   |\n| 2    | bob     |\n| 3    | jack    |\n+------+---------+\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'select * from query("catalog" = "jdbc", "query" = "select * from test.score");\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+------+---------+\n| id   | score   |\n+------+---------+\n| 1    | 100     |\n| 2    | 90      |\n| 3    | 80      |\n+------+---------+\n"})}),"\n",(0,a.jsx)(n.p,{children:"Transparent join query for tables in jdbc catalog data source"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'select * from query("catalog" = "jdbc", "query" = "select a.id, a.name, b.score from test.student a join test.score b on a.id = b.id");\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"+------+---------+---------+\n| id   | name    | score   |\n+------+---------+---------+\n| 1    | alice   | 100     |\n| 2    | bob     | 90      |\n| 3    | jack    | 80      |\n+------+---------+---------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return l}});var s=t(667294);let a={},r=s.createContext(a);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);