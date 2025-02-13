"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["186186"],{602448:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>p,assets:()=>o,toc:()=>l,frontMatter:()=>d});var s=JSON.parse('{"id":"admin-manual/open-api/be-http/pad-rowset","title":"Pad Rowset","description":"\x3c!--","source":"@site/docs/admin-manual/open-api/be-http/pad-rowset.md","sourceDirName":"admin-manual/open-api/be-http","slug":"/admin-manual/open-api/be-http/pad-rowset","permalink":"/docs/dev/admin-manual/open-api/be-http/pad-rowset","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Pad Rowset","language":"en"}}'),r=t("785893"),i=t("250065");let d={title:"Pad Rowset",language:"en"},a="Pad Rowset",o={},l=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function c(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"pad-rowset",children:"Pad Rowset"})}),"\n",(0,r.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"POST /api/pad_rowset?tablet_id={int}&start_version={int}&end_version={int}"})}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Pad one empty rowset as one substitute for error replica."}),"\n",(0,r.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"tablet_id"}),"\nID of the tablet"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"start_version"}),"\nStart version"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"end_version"}),"\nEnd version"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,r.jsx)(n.p,{children:"None"}),"\n",(0,r.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'```\n{\n    msg: "OK",\n    code: 0\n}\n```\n'})}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'```\ncurl -X POST "http://127.0.0.1:8040/api/pad_rowset?tablet_id=123456&start_version=1111111&end_version=1111112"\n\n```\n'})})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return d}});var s=t(667294);let r={},i=s.createContext(r);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);