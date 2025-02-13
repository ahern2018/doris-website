"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["564652"],{789478:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>o,default:()=>u,assets:()=>a,toc:()=>t,frontMatter:()=>l});var i=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/grouping","title":"GROUPING","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/aggregate-functions/grouping.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/grouping","permalink":"/docs/dev/sql-manual/sql-functions/aggregate-functions/grouping","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"GROUPING","language":"en"},"sidebar":"docs","previous":{"title":"HLL_UNION_AGG","permalink":"/docs/dev/sql-manual/sql-functions/aggregate-functions/hll-union-agg"},"next":{"title":"GROUPING_ID","permalink":"/docs/dev/sql-manual/sql-functions/aggregate-functions/grouping-id"}}'),r=s("785893"),c=s("250065");let l={title:"GROUPING",language:"en"},o=void 0,a={},t=[{value:"GROUPING",id:"grouping",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"grouping",children:"GROUPING"}),"\n",(0,r.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,r.jsx)(n.p,{children:"GROUPING"}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["Indicates whether a specified column expression in a ",(0,r.jsx)(n.code,{children:"GROUP BY"})," list is aggregated or not. ",(0,r.jsx)(n.code,{children:"GROUPING"})," returns 1 for aggregated or 0 for not aggregated in the result set. ",(0,r.jsx)(n.code,{children:"GROUPING"})," can be used only in the ",(0,r.jsx)(n.code,{children:"SELECT <select> list"}),", ",(0,r.jsx)(n.code,{children:"HAVING"}),", and ",(0,r.jsx)(n.code,{children:"ORDER BY"})," clauses when ",(0,r.jsx)(n.code,{children:"GROUP BY"})," is specified."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"GROUPING"})," is used to distinguish the null values that are returned by ",(0,r.jsx)(n.code,{children:"ROLLUP"}),", ",(0,r.jsx)(n.code,{children:"CUBE"})," or ",(0,r.jsx)(n.code,{children:"GROUPING SETS"})," from standard null values. The ",(0,r.jsx)(n.code,{children:"NULL"})," returned as the result of a ",(0,r.jsx)(n.code,{children:"ROLLUP"}),", ",(0,r.jsx)(n.code,{children:"CUBE"})," or ",(0,r.jsx)(n.code,{children:"GROUPING SETS"})," operation is a special use of ",(0,r.jsx)(n.code,{children:"NULL"}),". This acts as a column placeholder in the result set and means all."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"GROUPING( <column_expression> )\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"<column_expression>"}),"\nIs a column or an expression that contains a column in a ",(0,r.jsx)(n.code,{children:"GROUP BY"})," clause."]}),"\n",(0,r.jsx)(n.p,{children:"Return Types: BIGINT"}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["The following example groups ",(0,r.jsx)(n.code,{children:"camp"})," and aggregates ",(0,r.jsx)(n.code,{children:"occupation"})," amounts in the database. The ",(0,r.jsx)(n.code,{children:"GROUPING"})," function is applied to the ",(0,r.jsx)(n.code,{children:"camp"})," column."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `roles` (\n  role_id       INT,\n  occupation    VARCHAR(32),\n  camp          VARCHAR(32),\n  register_time DATE\n)\nUNIQUE KEY(role_id)\nDISTRIBUTED BY HASH(role_id) BUCKETS 1\nPROPERTIES (\n  \"replication_allocation\" = \"tag.location.default: 1\"\n);\n\nINSERT INTO `roles` VALUES\n(0, 'who am I', NULL, NULL),\n(1, 'mage', 'alliance', '2018-12-03 16:11:28'),\n(2, 'paladin', 'alliance', '2018-11-30 16:11:28'),\n(3, 'rogue', 'horde', '2018-12-01 16:11:28'),\n(4, 'priest', 'alliance', '2018-12-02 16:11:28'),\n(5, 'shaman', 'horde', NULL),\n(6, 'warrior', 'alliance', NULL),\n(7, 'warlock', 'horde', '2018-12-04 16:11:28'),\n(8, 'hunter', 'horde', NULL);\n\nSELECT \n  camp, \n  COUNT(occupation) AS 'occ_cnt',\n  GROUPING(camp)    AS 'grouping'\nFROM\n   `roles`\nGROUP BY\n  ROLLUP(camp); -- CUBE(camp) and GROUPING SETS((camp)) also can work;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The result set shows two null value under ",(0,r.jsx)(n.code,{children:"camp"}),". The first NULL is in the summary row added by the ",(0,r.jsx)(n.code,{children:"ROLLUP"})," operation. The summary row shows the occupation counts for all ",(0,r.jsx)(n.code,{children:"camp"})," groups and is indicated by 1 in the Grouping column. The second NULL represents the group of null values from this column in the table."]}),"\n",(0,r.jsx)(n.p,{children:"Here is the result set."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-log",children:"+----------+---------+----------+\n| camp     | occ_cnt | grouping |\n+----------+---------+----------+\n| NULL     |       9 |        1 |\n| NULL     |       1 |        0 |\n| alliance |       4 |        0 |\n| horde    |       4 |        0 |\n+----------+---------+----------+\n4 rows in set (0.01 sec)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,r.jsx)(n.p,{children:"GROUPING"}),"\n",(0,r.jsx)(n.h3,{id:"best-practice",children:"Best Practice"}),"\n",(0,r.jsxs)(n.p,{children:["See also ",(0,r.jsx)(n.a,{href:"./grouping_id.md",children:"GROUPING_ID"})]})]})}function u(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return l}});var i=s(667294);let r={},c=i.createContext(r);function l(e){let n=i.useContext(c);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);