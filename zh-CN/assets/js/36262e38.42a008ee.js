"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["903702"],{555027:function(e,n,l){l.r(n),l.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-reference/Show-Statements/SHOW-SQL-BLOCK-RULE","title":"SHOW-SQL-BLOCK-RULE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-SQL-BLOCK-RULE.md","sourceDirName":"sql-manual/sql-reference/Show-Statements","slug":"/sql-manual/sql-reference/Show-Statements/SHOW-SQL-BLOCK-RULE","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-SQL-BLOCK-RULE","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"SHOW-SQL-BLOCK-RULE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW-SNAPSHOT","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-SNAPSHOT"},"next":{"title":"SHOW-ROUTINE-LOAD","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-ROUTINE-LOAD"}}'),t=l("785893"),r=l("250065");let a={title:"SHOW-SQL-BLOCK-RULE",language:"zh-CN"},i=void 0,c={},o=[{value:"SHOW-SQL-BLOCK-RULE",id:"show-sql-block-rule",level:2},{value:"Name",id:"name",level:3},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"show-sql-block-rule",children:"SHOW-SQL-BLOCK-RULE"}),"\n",(0,t.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,t.jsx)(n.p,{children:"SHOW SQL  BLOCK RULE"}),"\n",(0,t.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(n.p,{children:"\u67E5\u770B\u5DF2\u914D\u7F6E\u7684SQL\u963B\u6B62\u89C4\u5219\uFF0C\u4E0D\u6307\u5B9A\u89C4\u5219\u540D\u5219\u4E3A\u67E5\u770B\u6240\u6709\u89C4\u5219\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW SQL_BLOCK_RULE [FOR RULE_NAME];\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u67E5\u770B\u6240\u6709\u89C4\u5219\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"mysql> SHOW SQL_BLOCK_RULE;\n+------------+------------------------+---------+--------------+-----------+-------------+--------+--------+\n| Name       | Sql                    | SqlHash | PartitionNum | TabletNum | Cardinality | Global | Enable |\n+------------+------------------------+---------+--------------+-----------+-------------+--------+--------+\n| test_rule  | select * from order_analysis | NULL    | 0            | 0         | 0           | true   | true   |\n| test_rule2 | NULL                   | NULL    | 30           | 0         | 10000000000 | false  | true   |\n+------------+------------------------+---------+--------------+-----------+-------------+--------+--------+\n2 rows in set (0.01 sec)\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u6307\u5B9A\u89C4\u5219\u540D\u67E5\u8BE2"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"mysql> SHOW SQL_BLOCK_RULE FOR test_rule2;\n+------------+------+---------+--------------+-----------+-------------+--------+--------+\n| Name       | Sql  | SqlHash | PartitionNum | TabletNum | Cardinality | Global | Enable |\n+------------+------+---------+--------------+-----------+-------------+--------+--------+\n| test_rule2 | NULL | NULL    | 30           | 0         | 10000000000 | false  | true   |\n+------------+------+---------+--------------+-----------+-------------+--------+--------+\n1 row in set (0.00 sec)\n\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"SHOW, SQL_BLOCK_RULE\n"})}),"\n",(0,t.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return i},a:function(){return a}});var s=l(667294);let t={},r=s.createContext(t);function a(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);