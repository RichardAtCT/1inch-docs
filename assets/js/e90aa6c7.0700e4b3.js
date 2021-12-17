"use strict";(self.webpackChunk_1_inch_docs=self.webpackChunk_1_inch_docs||[]).push([[5849],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(n),f=o,d=h["".concat(c,".").concat(f)]||h[f]||l[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},99195:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return h}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={sidebar_position:4},c="1inch Network DAO Treasury",p={unversionedId:"governance/dao-treasury",id:"governance/dao-treasury",isDocsHomePage:!1,title:"1inch Network DAO Treasury",description:"The 1inch Network DAO Treasury is the pool of funds under the direct domain and ownership of the community.",source:"@site/docs/governance/dao-treasury.mdx",sourceDirName:"governance",slug:"/governance/dao-treasury",permalink:"/docs/governance/dao-treasury",editUrl:"https://github.com/1inch/1inch-docs/edit/master/docs/governance/dao-treasury.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Voting Process",permalink:"/docs/governance/voting-process"},next:{title:"Instant Governance",permalink:"/docs/governance/instant-governance"}},u=[{value:"DAO Treasury",id:"dao-treasury",children:[]},{value:"Gnosis Safe + Snapshot + SafeSnap",id:"gnosis-safe--snapshot--safesnap",children:[]},{value:"Revenue stream",id:"revenue-stream",children:[]}],l={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1inch-network-dao-treasury"},"1inch Network DAO Treasury"),(0,a.kt)("p",null,"The 1inch Network DAO Treasury is the pool of funds under the direct domain and ownership of the community. "),(0,a.kt)("p",null,"All protocol revenues are directed to the Treasury and referral rewards."),(0,a.kt)("h2",{id:"dao-treasury"},"DAO Treasury"),(0,a.kt)("p",null,"The 1inch Network DAO Treasury is a ",(0,a.kt)("a",{parentName:"p",href:"https://gnosis-safe.io/app/eth:0x7951c7ef839e26F63DA87a42C9a87986507f1c07/balances"},"Gnosis Safe")," smart contract wallet with multi-signature (multisig) functionality on the Ethereum mainnet. 12 multisig owners have initially been selected by the 1inch Foundation from the core contributor team and other well-known projects, such as ",(0,a.kt)("a",{parentName:"p",href:"https://tornado.cash/"},"Tornado Cash"),", ",(0,a.kt)("a",{parentName:"p",href:"https://synthetix.io/"},"Synthetix"),", ",(0,a.kt)("a",{parentName:"p",href:"https://opium.network/"},"Opium"),", ",(0,a.kt)("a",{parentName:"p",href:"https://near.org/"},"NEAR protocol"),", and ",(0,a.kt)("a",{parentName:"p",href:"https://zksync.io/"},"zkSync"),", to name a few. These signers are able to veto malicious transactions in a 7 of 12 fashion. "),(0,a.kt)("h2",{id:"gnosis-safe--snapshot--safesnap"},"Gnosis Safe + Snapshot + SafeSnap"),(0,a.kt)("p",null,"Snapshot allows for gasless voting. SafeSnap is a Snapshot module that allows for on-chain execution of off-chain voting. The combination of these tools gives the DAO\u2019s votes direct control over the Gnosis Safe that holds the Treasury funds."),(0,a.kt)("h2",{id:"revenue-stream"},"Revenue stream"),(0,a.kt)("p",null,"The 1inch Pathfinder algorithm always provides users the most current and best possible prices on a swap. However, the swap price sometimes moves between the time of the quote and the time that the transaction is mined \u2014 resulting in a Swap Surplus. "),(0,a.kt)("p",null,"Funds are collected from the Swap Surplus on all chains. A portion of these funds are paid out to the referral program on the chain the swaps were performed. The remainder are sent to the Ethereum mainnet, swapped for USDC and sent directly to the 1inch Network DAO Treasury. "),(0,a.kt)("p",null,"Governance participants are able to control the revenue split of the ",(0,a.kt)("a",{parentName:"p",href:"https://app.1inch.io/#/1/dao/governance/aggregation?action=stake"},"Aggregation protocol")," and ",(0,a.kt)("a",{parentName:"p",href:"https://app.1inch.io/#/1/dao/governance?action=stake"},"Liquidity protocol")," by voting with Instant Governance."))}h.isMDXComponent=!0}}]);