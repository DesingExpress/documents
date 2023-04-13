"use strict";(self.webpackChunkdesign_express_docs=self.webpackChunkdesign_express_docs||[]).push([[326],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},g=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,m=p["".concat(l,".").concat(u)]||p[u]||c[u]||i;return n?r.createElement(m,s(s({ref:t},g),{},{components:n})):r.createElement(m,s({ref:t},g))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var d=2;d<i;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1,slug:"/getting-started/make-design",id:"design-getting_started-make_design",title:"Make Design"},s="Make Design",o={unversionedId:"getting-started/design-getting_started-make_design",id:"getting-started/design-getting_started-make_design",title:"Make Design",description:"Fabrica Control Panel",source:"@site/docs/design/getting-started/create_design.md",sourceDirName:"getting-started",slug:"/getting-started/make-design",permalink:"/design/getting-started/make-design",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/getting-started/make-design",id:"design-getting_started-make_design",title:"Make Design"},sidebar:"default",previous:{title:"Getting Started",permalink:"/design/category/getting-started"},next:{title:"Use Nodes",permalink:"/design/getting-started/use-node"}},l={},d=[{value:"Fabrica Control Panel",id:"fabrica-control-panel",level:2},{value:"List",id:"list",level:3},{value:"Variables",id:"variables",level:3},{value:"EventTeleports",id:"eventteleports",level:3},{value:"Details",id:"details",level:3},{value:"Save Design",id:"save-design",level:2}],g={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"make-design"},"Make Design"),(0,a.kt)("h2",{id:"fabrica-control-panel"},"Fabrica Control Panel"),(0,a.kt)("h3",{id:"list"},"List"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Fabrica"))," \ud30c\uc77c\uc744 \uc0dd\uc131\ud558\uac70\ub098 \uc0ad\uc81c \ubc0f \uc774\ub984 \ubcc0\uacbd\uc744 \ud560 \uc218 \uc788\ub294 \ud0ed\uc785\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"variables"},"Variables"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Node(variables/Setter)"))," \ub97c \ud1b5\ud574 \uc800\uc7a5\ub41c \ubcc0\uc218\ub4e4\uc744 \ubcf4\uc5ec\uc8fc\ub294 \ud0ed\uc785\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"eventteleports"},"EventTeleports"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Node(events/Teleport[in])"))," \uc758 \uc704\uce58\ub97c \ubcf4\uc5ec\uc8fc\ub294 \ud0ed\uc785\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"details"},"Details"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\ud65c\uc131\ud654\ub41c Node"))," \uc758 \uc124\uc815 \ubc0f \uac12\uc744 \ud655\uc778 \ub610\ub294 \ud3b8\uc9d1\ud560 \uc218 \uc788\ub294 \ud0ed\uc785\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"save-design"},"Save Design"))}c.isMDXComponent=!0}}]);