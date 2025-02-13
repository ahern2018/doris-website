"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["676787"],{460368:function(n,e,s){s.r(e),s.d(e,{metadata:()=>o,contentTitle:()=>a,default:()=>u,assets:()=>t,toc:()=>c,frontMatter:()=>d});var o=JSON.parse('{"id":"admin-manual/open-api/fe-http/node-action","title":"Node Action","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/admin-manual/open-api/fe-http/node-action.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/node-action","permalink":"/docs/admin-manual/open-api/fe-http/node-action","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Node Action","language":"en"},"sidebar":"docs","previous":{"title":"Cluster Action","permalink":"/docs/admin-manual/open-api/fe-http/cluster-action"},"next":{"title":"Query Profile Action","permalink":"/docs/admin-manual/open-api/fe-http/query-profile-action"}}'),r=s("785893"),i=s("250065");let d={title:"Node Action",language:"en"},a=void 0,t={},c=[{value:"Request",id:"request",level:2},{value:"Get information about fe, be, broker nodes",id:"get-information-about-fe-be-broker-nodes",level:2},{value:"Description",id:"description",level:3},{value:"Response",id:"response",level:3},{value:"Get node configuration information",id:"get-node-configuration-information",level:2},{value:"Description",id:"description-1",level:3},{value:"Query parameters",id:"query-parameters",level:3},{value:"Request body",id:"request-body",level:3},{value:"Response",id:"response-1",level:3},{value:"Examples",id:"examples",level:3},{value:"Modify configuration values",id:"modify-configuration-values",level:2},{value:"Description",id:"description-2",level:3},{value:"Request body",id:"request-body-1",level:3},{value:"Response",id:"response-2",level:3},{value:"Examples",id:"examples-1",level:3},{value:"Operate be node",id:"operate-be-node",level:2},{value:"Description",id:"description-3",level:3},{value:"Request body",id:"request-body-2",level:3},{value:"Response",id:"response-3",level:3},{value:"Examples",id:"examples-2",level:3},{value:"Operate fe node",id:"operate-fe-node",level:2},{value:"Description",id:"description-4",level:3},{value:"Request body",id:"request-body-3",level:3},{value:"Response",id:"response-4",level:3},{value:"Examples",id:"examples-3",level:3}];function l(n){let e={br:"br",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"request",children:"Request"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"GET /rest/v2/manager/node/frontends"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"GET /rest/v2/manager/node/backends"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"GET /rest/v2/manager/node/brokers"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"GET /rest/v2/manager/node/configuration_name"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"GET /rest/v2/manager/node/node_list"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"POST /rest/v2/manager/node/configuration_info"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"POST /rest/v2/manager/node/set_config/fe"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"POST /rest/v2/manager/node/set_config/be"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"POST /rest/v2/manager/node/{action}/be"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"POST /rest/v2/manager/node/{action}/fe"})}),"\n",(0,r.jsx)(e.h2,{id:"get-information-about-fe-be-broker-nodes",children:"Get information about fe, be, broker nodes"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"GET /rest/v2/manager/node/frontends"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"GET /rest/v2/manager/node/backends"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"GET /rest/v2/manager/node/brokers"})}),"\n",(0,r.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(e.p,{children:"Used to get cluster to get fe, be, broker node information."}),"\n",(0,r.jsx)(e.h3,{id:"response",children:"Response"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'frontends:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "Name",\n            "IP",\n            "HostName",\n            "EditLogPort",\n            "HttpPort",\n            "QueryPort",\n            "RpcPort",\n            "ArrowFlightSqlPort",\n            "Role",\n            "IsMaster",\n            "ClusterId",\n            "Join",\n            "Alive",\n            "ReplayedJournalId",\n            "LastHeartbeat",\n            "IsHelper",\n            "ErrMsg",\n            "Version"\n        ],\n        "rows": [\n            [\n                ...\n            ]\n        ]\n    },\n    "count": 0\n}\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'backends:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "BackendId",\n            "Cluster",\n            "IP",\n            "HostName",\n            "HeartbeatPort",\n            "BePort",\n            "HttpPort",\n            "BrpcPort",\n            "LastStartTime",\n            "LastHeartbeat",\n            "Alive",\n            "SystemDecommissioned",\n            "ClusterDecommissioned",\n            "TabletNum",\n            "DataUsedCapacity",\n            "AvailCapacity",\n            "TotalCapacity",\n            "UsedPct",\n            "MaxDiskUsedPct",\n            "ErrMsg",\n            "Version",\n            "Status"\n        ],\n        "rows": [\n            [\n                ...\n            ]\n        ]\n    },\n    "count": 0\n}\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'brokers:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "Name",\n            "IP",\n            "HostName",\n            "Port",\n            "Alive",\n            "LastStartTime",\n            "LastUpdateTime",\n            "ErrMsg"\n        ],\n        "rows": [\n            [\n                ...\n            ]\n        ]\n    },\n    "count": 0\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"get-node-configuration-information",children:"Get node configuration information"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"GET /rest/v2/manager/node/configuration_name"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"GET /rest/v2/manager/node/node_list"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"POST /rest/v2/manager/node/configuration_info"})}),"\n",(0,r.jsx)(e.h3,{id:"description-1",children:"Description"}),"\n",(0,r.jsxs)(e.p,{children:["configuration_name Used to get the name of the node configuration item.",(0,r.jsx)(e.br,{}),"\nnode_list Get the list of nodes.",(0,r.jsx)(e.br,{}),"\nconfiguration_info to get the node configuration details."]}),"\n",(0,r.jsx)(e.h3,{id:"query-parameters",children:"Query parameters"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"GET /rest/v2/manager/node/configuration_name"}),(0,r.jsx)(e.br,{}),"\nnone"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"GET /rest/v2/manager/node/node_list"}),(0,r.jsx)(e.br,{}),"\nnone"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"POST /rest/v2/manager/node/configuration_info"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"type\nThe value is fe or be, which specifies to get the configuration information of fe or the configuration information of be."}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"request-body",children:"Request body"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"GET /rest/v2/manager/node/configuration_name"}),(0,r.jsx)(e.br,{}),"\nnone"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"GET /rest/v2/manager/node/node_list"}),(0,r.jsx)(e.br,{}),"\nnone"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"POST /rest/v2/manager/node/configuration_info"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'{\n	"conf_name": [\n		""\n	],\n	"node": [\n		""\n	]\n}\n\nIf no body is included, the parameters in the body use the default values.  \nconf_name specifies which configuration items to return, the default is all configuration items.\nnode is used to specify which node\'s configuration information is returned, the default is all fe nodes or be nodes configuration information.\n'})}),"\n",(0,r.jsx)(e.h3,{id:"response-1",children:"Response"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"GET /rest/v2/manager/node/configuration_name"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "backend":[\n            ""\n        ],\n        "frontend":[\n            ""\n        ]\n    },\n    "count": 0\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"GET /rest/v2/manager/node/node_list"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "backend": [\n            ""\n        ],\n        "frontend": [\n            ""\n        ]\n    },\n    "count": 0\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"POST /rest/v2/manager/node/configuration_info?type=fe"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{  \n    "msg": "success",  \n    "code": 0,  \n    "data": {  \n        "column_names": [  \n            "Configuration Item",  \n            "Node",  \n            "Node Type",  \n            "Configuration Value Type",  \n            "MasterOnly",  \n            "Configuration Value",  \n            "Modifiable"  \n        ],  \n        "rows": [  \n            [  \n                ""  \n            ]  \n        ]  \n    },  \n    "count": 0  \n}\n'})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"POST /rest/v2/manager/node/configuration_info?type=be"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "Configuration Item",\n            "Node",\n            "Node Type",\n            "Configuration Value Type",\n            "Configuration Value",\n            "Modifiable"\n        ],\n        "rows": [\n            [\n                ""\n            ]\n        ]\n    },\n    "count": 0\n}\n'})}),"\n",(0,r.jsx)(e.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Get the fe agent_task_resend_wait_time_ms configuration information:"}),"\n",(0,r.jsxs)(e.p,{children:["POST /rest/v2/manager/node/configuration_info?type=fe",(0,r.jsx)(e.br,{}),"\nbody:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n    "conf_name":[\n        "agent_task_resend_wait_time_ms"\n    ]\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"Response:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{  \n"msg": "success",  \n"code": 0,  \n"data": {  \n    "column_names": [  \n        "Configuration Item",  \n        "Node",  \n        "Node Type",  \n        "Configuration Value Type",  \n        "MasterOnly",  \n        "Configuration Value",  \n        "Modifiable"  \n    ],  \n    "rows": [  \n        [  \n            "agent_task_resend_wait_time_ms",  \n            "127.0.0.1:8030",  \n            "FE",  \n            "long",  \n            "true",  \n            "50000",  \n            "true"  \n        ]  \n    ]  \n},  \n"count": 0  \n}\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"modify-configuration-values",children:"Modify configuration values"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"POST /rest/v2/manager/node/set_config/fe"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"POST /rest/v2/manager/node/set_config/be"})}),"\n",(0,r.jsx)(e.h3,{id:"description-2",children:"Description"}),"\n",(0,r.jsx)(e.p,{children:"Used to modify fe or be node configuration values"}),"\n",(0,r.jsx)(e.h3,{id:"request-body-1",children:"Request body"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n	"config_name":{\n		"node":[\n			""\n		],\n		"value":"",\n		"persist":\n	}\n}\n\nconfig_name is the corresponding configuration item.  \nnode is a keyword indicating the list of nodes to be modified;  \nvalue is the value of the configuration.  \npersist is true for permanent modification and false for temporary modification. persist means permanent modification, false means temporary modification. permanent modification takes effect after reboot, temporary modification fails after reboot.\n'})}),"\n",(0,r.jsx)(e.h3,{id:"response-2",children:"Response"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"GET /rest/v2/manager/node/configuration_name"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n	"msg": "",\n	"code": 0,\n	"data": {\n		"failed":[\n			{\n				"config_name":"name",\n				"value"="",\n				"node":"",\n				"err_info":""\n			}\n		]\n	},\n	"count": 0\n}\n\nfailed Indicates a configuration message that failed to be modified.\n'})}),"\n",(0,r.jsx)(e.h3,{id:"examples-1",children:"Examples"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Modify the agent_task_resend_wait_time_ms and alter_table_timeout_second configuration values in the fe 127.0.0.1:8030 node:"}),"\n",(0,r.jsx)(e.p,{children:"POST /rest/v2/manager/node/set_config/fe\nbody:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n    "agent_task_resend_wait_time_ms":{\n        "node":[\n	    	"127.0.0.1:8030"\n	    ],\n	    "value":"10000",\n	    "persist":"true"\n    },\n    "alter_table_timeout_second":{\n        "node":[\n	    	"127.0.0.1:8030"\n	    ],\n	    "value":"true",\n	    "persist":"true"\n    }\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"Response:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "failed": [\n            {\n                "config_name": "alter_table_timeout_second",\n                "node": "10.81.85.89:8837",\n                "err_info": "Unsupported configuration value type.",\n                "value": "true"\n            }\n        ]\n    },\n    "count": 0\n}\n\ngent_task_resend_wait_time_ms configuration value modified successfully, alter_table_timeout_second modification failed.\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"operate-be-node",children:"Operate be node"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"POST /rest/v2/manager/node/{action}/be"})}),"\n",(0,r.jsx)(e.h3,{id:"description-3",children:"Description"}),"\n",(0,r.jsx)(e.p,{children:"Used to add/drop/offline be node"}),"\n",(0,r.jsx)(e.p,{children:"action\uFF1AADD/DROP/DECOMMISSION"}),"\n",(0,r.jsx)(e.h3,{id:"request-body-2",children:"Request body"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n    "hostPorts": ["127.0.0.1:9050"],\n    "properties": {\n        "tag.location": "test"\n    }\n}\n\nhostPorts A set of be node addresses to be operated, ip:heartbeat_port\nproperties The configuration passed in when adding a node is only used to configure the tag. If not, the default tag is used\n'})}),"\n",(0,r.jsx)(e.h3,{id:"response-3",children:"Response"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n    "msg": "Error",\n    "code": 1,\n    "data": "errCode = 2, detailMessage = Same backend already exists[127.0.0.1:9050]",\n    "count": 0\n}\n\nmsg Success/Error\ncode 0/1\ndata ""/Error message\n'})}),"\n",(0,r.jsx)(e.h3,{id:"examples-2",children:"Examples"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"add be node"}),"\n",(0,r.jsx)(e.p,{children:"post /rest/v2/manager/node/ADD/be\nRequest body"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n    "hostPorts": ["127.0.0.1:9050"]\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"Response"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n    "msg": "success",\n    "code": 0,\n    "data": null,\n    "count": 0\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"drop be node"}),"\n",(0,r.jsx)(e.p,{children:"post /rest/v2/manager/node/DROP/be\nRequest body"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n    "hostPorts": ["127.0.0.1:9050"]\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"Response"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n    "msg": "success",\n    "code": 0,\n    "data": null,\n    "count": 0\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"offline be node"}),"\n",(0,r.jsx)(e.p,{children:"post /rest/v2/manager/node/DECOMMISSION/be\nRequest body"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n    "hostPorts": ["127.0.0.1:9050"]\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"Response"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n    "msg": "success",\n    "code": 0,\n    "data": null,\n    "count": 0\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"operate-fe-node",children:"Operate fe node"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"POST /rest/v2/manager/node/{action}/fe"})}),"\n",(0,r.jsx)(e.h3,{id:"description-4",children:"Description"}),"\n",(0,r.jsx)(e.p,{children:"Used to add/drop fe node"}),"\n",(0,r.jsx)(e.p,{children:"action\uFF1AADD/DROP"}),"\n",(0,r.jsx)(e.h3,{id:"request-body-3",children:"Request body"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n    "role": "FOLLOWER",\n    "hostPort": "127.0.0.1:9030"\n}\n\nrole FOLLOWER/OBSERVER\nhostPort The address of the fe node to be operated, ip:edit_log_port\n'})}),"\n",(0,r.jsx)(e.h3,{id:"response-4",children:"Response"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n    "msg": "Error",\n    "code": 1,\n    "data": "errCode = 2, detailMessage = frontend already exists name: 127.0.0.1:9030_1670495889415, role: FOLLOWER, 127.0.0.1:9030",\n    "count": 0\n}\n\nmsg Success/Error\ncode 0/1\ndata ""/Error message\n'})}),"\n",(0,r.jsx)(e.h3,{id:"examples-3",children:"Examples"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"add FOLLOWER node"}),"\n",(0,r.jsx)(e.p,{children:"post /rest/v2/manager/node/ADD/fe\nRequest body"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n    "role": "FOLLOWER",\n    "hostPort": "127.0.0.1:9030"\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"Response"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n    "msg": "success",\n    "code": 0,\n    "data": null,\n    "count": 0\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"drop FOLLOWER node"}),"\n",(0,r.jsx)(e.p,{children:"post /rest/v2/manager/node/DROP/fe\nRequest body"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n    "role": "FOLLOWER",\n    "hostPort": "127.0.0.1:9030"\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"Response"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n    "msg": "success",\n    "code": 0,\n    "data": null,\n    "count": 0\n}\n'})}),"\n"]}),"\n"]})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return a},a:function(){return d}});var o=s(667294);let r={},i=o.createContext(r);function d(n){let e=o.useContext(i);return o.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),o.createElement(i.Provider,{value:e},n.children)}}}]);