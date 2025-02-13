"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["974544"],{333837:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>h,assets:()=>a,toc:()=>d,frontMatter:()=>l});var r=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/grouping-id","title":"GROUPING_ID","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/aggregate-functions/grouping-id.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/grouping-id","permalink":"/docs/sql-manual/sql-functions/aggregate-functions/grouping-id","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"GROUPING_ID","language":"en"},"sidebar":"docs","previous":{"title":"GROUPING","permalink":"/docs/sql-manual/sql-functions/aggregate-functions/grouping"},"next":{"title":"ANY_VALUE","permalink":"/docs/sql-manual/sql-functions/aggregate-functions/any-value"}}'),s=i("785893"),t=i("250065");let l={title:"GROUPING_ID",language:"en"},o=void 0,a={},d=[{value:"GROUPING_ID",id:"grouping_id",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Return Type",id:"return-type",level:4},{value:"Remarks",id:"remarks",level:4},{value:"Comparing GROUPING_ID() to GROUPING()",id:"comparing-grouping_id-to-grouping",level:4},{value:"Technical Definition of GROUPING_ID()",id:"technical-definition-of-grouping_id",level:4},{value:"GROUPING_ID() Equivalents",id:"grouping_id-equivalents",level:4},{value:"Example",id:"example",level:3},{value:"A. Using GROUPING_ID to identify grouping levels",id:"a-using-grouping_id-to-identify-grouping-levels",level:4},{value:"B. Using GROUPING_ID to filter a result set",id:"b-using-grouping_id-to-filter-a-result-set",level:4},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"grouping_id",children:"GROUPING_ID"}),"\n",(0,s.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,s.jsx)(n.p,{children:"GROUPING_ID"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Is a function that computes the level of grouping. ",(0,s.jsx)(n.code,{children:"GROUPING_ID"})," can be used only in the ",(0,s.jsx)(n.code,{children:"SELECT <select> list"}),", ",(0,s.jsx)(n.code,{children:"HAVING"}),", or ",(0,s.jsx)(n.code,{children:"ORDER BY"})," clauses when ",(0,s.jsx)(n.code,{children:"GROUP BY"})," is specified."]}),"\n",(0,s.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"GROUPING_ID ( <column_expression>[ ,...n ] )\n"})}),"\n",(0,s.jsx)(n.h4,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"<column_expression>"})}),"\n",(0,s.jsxs)(n.p,{children:["Is a ",(0,s.jsx)(n.code,{children:"column_expression"})," in a GROUP BY clause."]}),"\n",(0,s.jsx)(n.h4,{id:"return-type",children:"Return Type"}),"\n",(0,s.jsx)(n.p,{children:"BIGINT"}),"\n",(0,s.jsx)(n.h4,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(n.p,{children:["The GROUPING_ID's ",(0,s.jsx)(n.code,{children:"<column_expression>"})," must exactly match the expression in the ",(0,s.jsx)(n.code,{children:"GROUP BY"})," list. For example, if you are grouping by ",(0,s.jsx)(n.code,{children:"user_id"}),", use ",(0,s.jsx)(n.code,{children:"GROUPING_ID (user_id)"}),"; or if you are grouping by ",(0,s.jsx)(n.code,{children:"name"}),", use ",(0,s.jsx)(n.code,{children:"GROUPING_ID (name)"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"comparing-grouping_id-to-grouping",children:"Comparing GROUPING_ID() to GROUPING()"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"GROUPING_ID(<column_expression> [ ,...n ])"})," inputs the equivalent of the ",(0,s.jsx)(n.code,{children:"GROUPING(<column_expression>)"})," return for each column in its column list in each output row as a string of ones and zeros. GROUPING_ID interprets that string as a base-2 number and returns the equivalent integer. For example consider the following statement: ",(0,s.jsx)(n.code,{children:"SELECT a, b, c, SUM(d), GROUPING_ID(a,b,c) FROM T GROUP BY <group by list>"}),". The following table shows the GROUPING_ID() input and output values."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Columns aggregated"}),(0,s.jsx)(n.th,{children:"GROUPING_ID (a, b, c) input = GROUPING(a) + GROUPING(b) + GROUPING(c)"}),(0,s.jsx)(n.th,{children:"GROUPING_ID () output"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"a"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"100"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"4"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"b"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"010"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"2"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"c"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"001"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"1"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ab"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"110"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"6"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ac"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"101"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"5"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"bc"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"011"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"3"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"abc"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"111"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"7"})})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"technical-definition-of-grouping_id",children:"Technical Definition of GROUPING_ID()"}),"\n",(0,s.jsx)(n.p,{children:"Each GROUPING_ID argument must be an element of the GROUP BY list. GROUPING_ID() returns an integer bitmap whose lowest N bits may be lit. A lit bit indicates the corresponding argument is not a grouping column for the given output row. The lowest-order bit corresponds to argument N, and the (N-1)\u1D57\u02B0 lowest-order bit corresponds to argument 1."}),"\n",(0,s.jsx)(n.h4,{id:"grouping_id-equivalents",children:"GROUPING_ID() Equivalents"}),"\n",(0,s.jsxs)(n.p,{children:["For a single grouping query, ",(0,s.jsx)(n.code,{children:"GROUPING (<column_expression>)"})," is equivalent to ",(0,s.jsx)(n.code,{children:"GROUPING_ID(<column_expression>)"}),", and both return 0.\nFor example, the following statements are equivalent:"]}),"\n",(0,s.jsx)(n.p,{children:"Statement A:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT GROUPING_ID(A,B)  \nFROM T   \nGROUP BY CUBE(A,B)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Statement B:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT 3 FROM T GROUP BY ()  \nUNION ALL  \nSELECT 1 FROM T GROUP BY A  \nUNION ALL  \nSELECT 2 FROM T GROUP BY B  \nUNION ALL  \nSELECT 0 FROM T GROUP BY A,B\n"})}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Before starting our example, We first prepare the following data."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE employee (\n  uid        INT,\n  name       VARCHAR(32),\n  level      VARCHAR(32),\n  title      VARCHAR(32),\n  department VARCHAR(32),\n  hiredate   DATE\n)\nUNIQUE KEY(uid)\nDISTRIBUTED BY HASH(uid) BUCKETS 1\nPROPERTIES (\n  \"replication_num\" = \"1\"\n);\n\nINSERT INTO employee VALUES\n  (1, 'Abby', 'Senior', 'President', 'Board of Directors', '1999-11-13'),\n  (2, 'Bob', 'Senior', 'Vice-President', 'Board of Directors', '1999-11-13'),\n  (3, 'Candy', 'Senior', 'System Engineer', 'Technology', '2005-3-7'),\n  (4, 'Devere', 'Senior', 'Hardware Engineer', 'Technology', '2006-7-9'),\n  (5, 'Emilie', 'Senior', 'System Analyst', 'Technology', '2003-8-28'),\n  (6, 'Fredrick', 'Senior', 'Sales Manager', 'Sales', '2004-9-7'),\n  (7, 'Gitel', 'Assistant', 'Business Executive', 'Sales', '2003-3-19'),\n  (8, 'Haden', 'Trainee', 'Sales Assistant', 'Sales', '2007-6-30'),\n  (9, 'Irene', 'Assistant', 'Business Executive', 'Sales', '2005-10-20'),\n  (10, 'Jankin', 'Senior', 'Marketing Supervisor', 'Marketing', '2001-4-13'),\n  (11, 'Louis', 'Trainee', 'Marketing Assistant', 'Marketing', '2007-8-2'),\n  (12, 'Martin', 'Trainee', 'Marketing Assistant', 'Marketing', '2007-7-1'),\n  (13, 'Nasir', 'Assistant', 'Marketing Executive', 'Marketing', '2004-9-3');\n"})}),"\n",(0,s.jsx)(n.p,{children:"Here is the result."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+------+----------+-----------+----------------------+--------------------+------------+\n| uid  | name     | level     | title                | department         | hiredate   |\n+------+----------+-----------+----------------------+--------------------+------------+\n|    1 | Abby     | Senior    | President            | Board of Directors | 1999-11-13 |\n|    2 | Bob      | Senior    | Vice-President       | Board of Directors | 1999-11-13 |\n|    3 | Candy    | Senior    | System Engineer      | Technology         | 2005-03-07 |\n|    4 | Devere   | Senior    | Hardware Engineer    | Technology         | 2006-07-09 |\n|    5 | Emilie   | Senior    | System Analyst       | Technology         | 2003-08-28 |\n|    6 | Fredrick | Senior    | Sales Manager        | Sales              | 2004-09-07 |\n|    7 | Gitel    | Assistant | Business Executive   | Sales              | 2003-03-19 |\n|    8 | Haden    | Trainee   | Sales Assistant      | Sales              | 2007-06-30 |\n|    9 | Irene    | Assistant | Business Executive   | Sales              | 2005-10-20 |\n|   10 | Jankin   | Senior    | Marketing Supervisor | Marketing          | 2001-04-13 |\n|   11 | Louis    | Trainee   | Marketing Assistant  | Marketing          | 2007-08-02 |\n|   12 | Martin   | Trainee   | Marketing Assistant  | Marketing          | 2007-07-01 |\n|   13 | Nasir    | Assistant | Marketing Executive  | Marketing          | 2004-09-03 |\n+------+----------+-----------+----------------------+--------------------+------------+\n13 rows in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"a-using-grouping_id-to-identify-grouping-levels",children:"A. Using GROUPING_ID to identify grouping levels"}),"\n",(0,s.jsxs)(n.p,{children:["The following example returns the count of employees by ",(0,s.jsx)(n.code,{children:"department"})," and ",(0,s.jsx)(n.code,{children:"level"}),". GROUPING_ID() is used to create a value for each row in the ",(0,s.jsx)(n.code,{children:"Job Title"})," column that identifies its level of aggregation."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT\n  department,\n  CASE \n  	WHEN GROUPING_ID(department, level) = 0 THEN level\n  	WHEN GROUPING_ID(department, level) = 1 THEN CONCAT('Total: ', department)\n  	WHEN GROUPING_ID(department, level) = 3 THEN 'Total: Company'\n  	ELSE 'Unknown'\n  END AS 'Job Title',\n  COUNT(uid) AS 'Employee Count'\nFROM employee \nGROUP BY ROLLUP(department, level)\nORDER BY GROUPING_ID(department, level) ASC;\n"})}),"\n",(0,s.jsx)(n.p,{children:"Here is the result."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+--------------------+---------------------------+----------------+\n| department         | Job Title                 | Employee Count |\n+--------------------+---------------------------+----------------+\n| Board of Directors | Senior                    |              2 |\n| Technology         | Senior                    |              3 |\n| Sales              | Senior                    |              1 |\n| Sales              | Assistant                 |              2 |\n| Sales              | Trainee                   |              1 |\n| Marketing          | Senior                    |              1 |\n| Marketing          | Trainee                   |              2 |\n| Marketing          | Assistant                 |              1 |\n| Board of Directors | Total: Board of Directors |              2 |\n| Technology         | Total: Technology         |              3 |\n| Sales              | Total: Sales              |              4 |\n| Marketing          | Total: Marketing          |              4 |\n| NULL               | Total: Company            |             13 |\n+--------------------+---------------------------+----------------+\n13 rows in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"b-using-grouping_id-to-filter-a-result-set",children:"B. Using GROUPING_ID to filter a result set"}),"\n",(0,s.jsx)(n.p,{children:"In the following code, to return only the rows that have the count of  senior in department."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT\n  department,\n  CASE \n  	WHEN GROUPING_ID(department, level) = 0 THEN level\n  	WHEN GROUPING_ID(department, level) = 1 THEN CONCAT('Total: ', department)\n  	WHEN GROUPING_ID(department, level) = 3 THEN 'Total: Company'\n  	ELSE 'Unknown'\n  END AS 'Job Title',\n  COUNT(uid)\nFROM employee \nGROUP BY ROLLUP(department, level)\nHAVING `Job Title` IN ('Senior');\n"})}),"\n",(0,s.jsx)(n.p,{children:"Here is the result."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+--------------------+-----------+--------------+\n| department         | Job Title | count(`uid`) |\n+--------------------+-----------+--------------+\n| Board of Directors | Senior    |            2 |\n| Technology         | Senior    |            3 |\n| Sales              | Senior    |            1 |\n| Marketing          | Senior    |            1 |\n+--------------------+-----------+--------------+\n5 rows in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(n.p,{children:"GROUPING_ID"}),"\n",(0,s.jsx)(n.h3,{id:"best-practice",children:"Best Practice"}),"\n",(0,s.jsx)(n.p,{children:"For more information, see also:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/sql-manual/sql-functions/aggregate-functions/grouping",children:"GROUPING"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return l}});var r=i(667294);let s={},t=r.createContext(s);function l(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);