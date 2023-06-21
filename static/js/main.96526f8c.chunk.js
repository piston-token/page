(this["webpackJsonpreact-ts-material-01"]=this["webpackJsonpreact-ts-material-01"]||[]).push([[0],{41:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"Users","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"option","type":"uint256"}],"name":"getTotalAnswers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"getUserAnswer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_value","type":"address"}],"name":"getWalletStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_value","type":"bool"}],"name":"setStarted","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"started","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"option","type":"uint256"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},56:function(e,t,n){},57:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(39),o=n.n(r),s=(n(56),n(40)),l=n(47),c=n(46),d=n(37),p=(n(57),n(11)),u=n(81),h=n(84),b=n(41);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var y=a.createElement("defs",null,a.createElement("linearGradient",{id:"a",x1:.667,x2:.417,y1:.167,y2:.75},a.createElement("stop",{offset:0,stopColor:"#37aee2"}),a.createElement("stop",{offset:1,stopColor:"#1e96c8"})),a.createElement("linearGradient",{id:"b",x1:.66,x2:.851,y1:.437,y2:.802},a.createElement("stop",{offset:0,stopColor:"#eff7fc"}),a.createElement("stop",{offset:1,stopColor:"#fff"}))),w=a.createElement("circle",{cx:120,cy:120,r:120,fill:"url(#a)"}),j=a.createElement("path",{fill:"#c8daea",d:"M98 175c-3.888 0-3.227-1.468-4.568-5.17L82 132.207 170 80"}),g=a.createElement("path",{fill:"#a9c9dd",d:"M98 175c3 0 4.325-1.372 6-3l16-15.558-19.958-12.035"}),v=a.createElement("path",{fill:"url(#b)",d:"M100.04 144.41l48.36 35.729c5.519 3.045 9.501 1.468 10.876-5.123l19.685-92.763c2.015-8.08-3.08-11.746-8.36-9.349l-115.59 44.571c-7.89 3.165-7.843 7.567-1.438 9.528l29.663 9.259 68.673-43.325c3.242-1.966 6.218-.91 3.776 1.258"});function O(e,t){var n=e.title,i=e.titleId,r=m(e,["title","titleId"]);return a.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 240 240",ref:t,"aria-labelledby":i},r),n?a.createElement("title",{id:i},n):null,y,w,j,g,v)}var x=a.forwardRef(O),T=(n.p,n(2));window.chainIdExpected=56;Object(p.a)(h.a)((function(e){var t=e.theme;return Object(d.a)(Object(d.a)({},t.typography.h3),{},{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary})}));window.dataRefreshInterval=3e3;var S=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={radioValue:"",progress:!1,walletAccepted:!1,alreadyVoted:!1,totalYES:0,totalNO:0,totalVotes:0,votingEnded:!1},a.baseState=void 0,a._stateInterval=void 0,a.componentDidMount=function(){window.contractAddress="0x4af53af7784f1a67f72fd623EB0Ab8C79aDA3700",window.contract_abi=b,a.checkState(),a._stateInterval&&clearInterval(a._stateInterval),a._stateInterval=setInterval(a.checkState,window.dataRefreshInterval)},a.componentWillUnmount=function(){},a.checkState=function(){!0===window.connected?(a.setState({yourAddress:window.walletAddress}),window.farm_contract.methods.getWalletStatus(window.walletAddress).call().then((function(e){a.setState({walletAccepted:e})})),window.farm_contract.methods.getUserAnswer(window.walletAddress).call().then((function(e){a.setState({alreadyVoted:"0"!=e})})),window.farm_contract.methods.getTotalAnswers("1").call().then((function(e){var t=parseInt(e);window.farm_contract.methods.getTotalAnswers("2").call().then((function(e){var n=parseInt(e);a.setState({totalYES:100/(t+n)*t,totalNO:100/(t+n)*n,totalVotes:t+n}),window.farm_contract.methods.started().call().then((function(e){0==e&&t+n>0&&a.setState({votingEnded:!0})}))}))}))):a.setState(a.baseState)},a.onClick_Telegram=function(){window.location.href="https://t.me/PISTON_TOKEN"},a.onClick_Submit=function(){var e="";"op1"==a.state.radioValue.toLowerCase()?e="1":"op2"==a.state.radioValue.toLowerCase()&&(e="2"),a.setState({progress:!0}),window.farm_contract.methods.vote(e).send({from:window.walletAddress}).then((function(e){a.setState({progress:!1})})).catch((function(e){alert("transaction failed"),a.setState({progress:!1})}))},a.handleRadioChange=function(e,t){a.setState({radioValue:t})},a.render=function(){return Object(T.jsxs)("div",{children:[Object(T.jsxs)("div",{className:"wrapper",children:[Object(T.jsx)("img",{className:"logo",src:"https://piston-token.com/images/logo.svg"}),Object(T.jsx)("h2",{children:"PISTON TOKEN"}),Object(T.jsx)("h3",{children:"final claim"})]}),Object(T.jsx)("a",{id:"details"}),Object(T.jsxs)("div",{className:"wrapper left",style:{marginTop:"16px"},children:[Object(T.jsx)("h4",{children:"Hello and welcome to the PSTN info and claim page."}),"As you all know, PSTN has unfortunately come to and end.",Object(T.jsx)("br",{}),Object(T.jsx)("br",{})," We have run a vote amongst the holders via the website and Telegram group and here are the results: ",Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),"81% of Voters decided that the best thing to do with the very little liquidity we had left ($45,000) was to invest it.",Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),"As promised, we will do exactly this via two FX trading bots and every $5000 collected in profit from our investment will be placed in a pool.",Object(T.jsx)("br",{}),Object(T.jsx)("b",{children:" If you are a voter, and have not gained back your initial investment in PSTN, you have been white listed for this pool."}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),"A claim button will appear from which you will be able to withdraw $50 per day per wallet. Users will be able to do this until the claim pool reaches zero. We will continue to fill the pool ideally monthly in increments of $5000 for the foreseeable future. We will be able to track all users and the amount each person is entitled to. Once we are down to the last $45,000 to give back, we will release the full $45,000 in one transaction thus bringing all users to break even giving a clear and final end to the project. The next steps are to pull the liquidity and start the investment process. This will sell all tokens and bring the chart to $0. It is the only way to pull out the money remaining in this project. Once this is done, the steps explained above will start.",Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),"Thank you for being a part of the Piston Project"]}),Object(T.jsxs)("div",{className:"wrapper left",style:{marginTop:"16px"},children:[Object(T.jsx)("h4",{children:"Roadmap"}),Object(T.jsx)("p",{children:"\u2705 pause trading"}),Object(T.jsx)("p",{children:"\u2705 voting"}),Object(T.jsx)("p",{children:"\u2705 setup tradingbots"}),Object(T.jsx)("p",{children:"\u27a1\ufe0f move the remaining liquidity into the bot pool"}),Object(T.jsxs)("p",{style:{paddingLeft:"32px",paddingBottom:"16px"},children:["\u2705",Object(T.jsx)("i",{children:" Update Sun 07th May: the first 30k of liquidity was removed from the LPs and made available for the bot."})]}),Object(T.jsx)("p",{children:"\u2705 start trading bots"}),Object(T.jsxs)("p",{style:{paddingLeft:"32px",paddingBottom:"16px"},children:["\u2705",Object(T.jsx)("i",{children:" Update Sun 21th June: Our trading bot is performing well and we are building up capital. The Pancakeswap and Apeswap liquidty have now been pulled and put to work in our trading bot."})]}),Object(T.jsx)("p",{children:"\ud83d\udcc6 next step: publish claim dapp"})]}),Object(T.jsxs)(u.a,{fullWidth:!0,variant:"outlined",color:"secondary",sx:{my:1,marginRight:1},size:"small",onClick:a.onClick_Telegram,children:[Object(T.jsx)(x,{style:{height:"30px",marginRight:"8px"}}),"Telegram"]})]})},a.baseState=a.state,a}return n}(i.a.Component),E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),r(e),o(e)}))},k=n(45),A=n(83),I=Object(k.a)({palette:{mode:"light",primary:{main:"#FFFFFF"},secondary:{main:"#193d7d"},background:{default:"#FFFFFF"}}});o.a.render(Object(T.jsx)(i.a.StrictMode,{children:Object(T.jsx)(A.a,{theme:I,children:Object(T.jsx)(S,{})})}),document.getElementById("root")),E()}},[[63,1,2]]]);
//# sourceMappingURL=main.96526f8c.chunk.js.map