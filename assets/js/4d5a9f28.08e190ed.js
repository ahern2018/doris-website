"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["451427"],{634898:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>r,default:()=>u,assets:()=>o,toc:()=>d,frontMatter:()=>s});var i=JSON.parse('{"id":"admin-manual/open-api/be-http/tablet-info","title":"View Tablet Info","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/admin-manual/open-api/be-http/tablet-info.md","sourceDirName":"admin-manual/open-api/be-http","slug":"/admin-manual/open-api/be-http/tablet-info","permalink":"/docs/admin-manual/open-api/be-http/tablet-info","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"View Tablet Info","language":"en"},"sidebar":"docs","previous":{"title":"Migration Tablet","permalink":"/docs/admin-manual/open-api/be-http/tablet-migration"},"next":{"title":"Checksum","permalink":"/docs/admin-manual/open-api/be-http/checksum"}}'),a=t("785893"),l=t("250065");let s={title:"View Tablet Info",language:"en"},r="View Tablet Info",o={},d=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function c(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"view-tablet-info",children:"View Tablet Info"})}),"\n",(0,a.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET /tablets_json?limit={int}"})}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"View Tablet Info, including ID and schema hash."}),"\n",(0,a.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"limit"}),"\nNumber of tablets output, Optional with default 1000. Take ",(0,a.jsx)(n.code,{children:"all"})," to output all tablets."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,a.jsx)(n.p,{children:"None"}),"\n",(0,a.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'```\n{\n    msg: "OK",\n    code: 0,\n    data: {\n        host: "10.38.157.107",\n        tablets: [\n            {\n                tablet_id: 11119,\n                schema_hash: 714349777\n            },\n\n                ...\n\n            {\n                tablet_id: 11063,\n                schema_hash: 714349777\n            }\n        ]\n    },\n    count: 30\n}\n```\n'})}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"```\ncurl http://127.0.0.1:8040/api/tablets_json?limit=all\n\n```\n"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return s}});var i=t(667294);let a={},l=i.createContext(a);function s(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);