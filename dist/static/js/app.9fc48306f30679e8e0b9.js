webpackJsonp([13],{126:function(n,t){},127:function(n,t){},131:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("transition",{attrs:{name:"router-fade",mode:"out-in"}},[e("router-view")],1),n._v(" "),e("audio",{ref:"player",attrs:{src:"",autoplay:"autoplay"}})],1)},staticRenderFns:[]}},37:function(n,t,e){"use strict";var a=e(40),i=e.n(a),o=e(81),r=e.n(o),c=e(41),u=e.n(c),s=e(42),l=e.n(s),d=e(77),f=e.n(d),p=e(39),v=e.n(p),h=this;t.a=function(){var n=v()(i.a.mark(function n(){var t,e,a,o,c,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"GET",d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",p=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},v=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(s=s.toUpperCase(),"GET"==s&&(t="",f()(p).forEach(function(n){t+=n+"="+p[n]+"&"}),""!==t&&(t=t.substr(0,t.lastIndexOf("&")),d=d+"?"+t)),!window.fetch||"fetch"!=v){n.next=20;break}return e={credentials:"include",method:s,headers:{Accept:"*/*","Content-Type":"application/x-www-form-urlencoded","Access-Control-Allow-Origin":"*",Origin:"*"},mode:"cors",cache:"force-cache"},"POST"==s&&(a="",f()(p).forEach(function(n){a+=n+"="+p[n]+"&"}),Object.defineProperty(e,"body",{value:a})),n.prev=5,n.next=8,fetch(d,e);case 8:return o=n.sent,n.next=11,o.json();case 11:c=n.sent,n.next=17;break;case 14:throw n.prev=14,n.t0=n.catch(5),new Error(n.t0);case 17:return n.abrupt("return",c);case 20:return n.abrupt("return",new l.a(function(n,t){var e=void 0;e=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject;var a="";"POST"==s&&(a=u()(p)),e.onreadystatechange=function(){if(4==e.readyState)if(200==e.status){var a=e.response;"object"!==(void 0===a?"undefined":r()(a))&&(a=JSON.parse(a)),a&&n(a)}else t(e)},e.open(s,d,!0),e.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e.send(a)}));case 21:case"end":return n.stop()}},n,h,[[5,14]])}));return function(){return n.apply(this,arguments)}}()},56:function(n,t){var e={};e.install=function(n,t){var e={defaultType:"bottom",duration:"2500"};for(var a in t)e[a]=t[a];n.prototype.$toast=function(t,a){var i=a||e.defaultType;if(!document.querySelector(".lx-toast")){var o=n.extend({template:'<div class="lx-toast lx-toast-'+i+'">'+t+"</div>"}),r=(new o).$mount().$el;document.body.appendChild(r),setTimeout(function(){document.body.removeChild(r)},e.duration)}},["bottom","center","top"].forEach(function(t){n.prototype.$toast[t]=function(e){return n.prototype.$toast(e,t)}}),n.prototype.$loading=function(t,e){var a=document.querySelector(".lx-load-mark");if("close"==e)a&&document.body.removeChild(a);else{if(a)return;var i=n.extend({template:'<div class="lx-load-mark"><div class="lx-load-box"><div class="lx-loading"><div class="loading_leaf loading_leaf_0"></div><div class="loading_leaf loading_leaf_1"></div><div class="loading_leaf loading_leaf_3"></div><div class="loading_leaf loading_leaf_4"></div><div class="loading_leaf loading_leaf_5"></div><div class="loading_leaf loading_leaf_6"></div><div class="loading_leaf loading_leaf_7"></div><div class="loading_leaf loading_leaf_8"></div><div class="loading_leaf loading_leaf_9"></div><div class="loading_leaf loading_leaf_10"></div><div class="loading_leaf loading_leaf_11"></div></div><div class="lx-load-content">'+t+"</div></div></div>"}),o=(new i).$mount().$el;document.body.appendChild(o)}},["open","close"].forEach(function(t){n.prototype.$loading[t]=function(e){return n.prototype.$loading(e,t)}})},n.exports=e},57:function(n,t){!function(n,t){var e=n.documentElement,a="orientationchange"in window?"orientationchange":"resize",i=function(){var n=e.clientWidth;if(800==n){n=320;var t=document.createElement("style");t.type="text/css",t.innerHTML="html{width:40%;margin:0 auto;}.roping-ft,.goback-btn,.topnavbar-fixed{width:40%;margin:0 auto;}",document.getElementsByTagName("head")[0].appendChild(t)}n&&(e.style.fontSize=n/375*100+"px")};n.addEventListener&&(t.addEventListener(a,i,!1),n.addEventListener("DOMContentLoaded",i,!1),i())}(document,window)},58:function(n,t,e){"use strict";var a=e(22),i=e(69);a.a.use(i.a);var o=new i.a({routes:[{path:"",redirect:"/index/discover/songList"},{path:"/index",name:"index",redirect:"/index/discover/songList",component:function(n){return e.e(0).then(function(){var t=[e(136)];n.apply(null,t)}.bind(this)).catch(e.oe)},children:[{path:"my",name:"my",component:function(n){return e.e(5).then(function(){var t=[e(143)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"discover",redirect:"/index/discover/songList"},{path:"discover",name:"discover",component:function(n){return e.e(11).then(function(){var t=[e(137)];n.apply(null,t)}.bind(this)).catch(e.oe)},children:[{path:"recommend",name:"recommend",component:function(n){return e.e(8).then(function(){var t=[e(140)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"songList",name:"songList",component:function(n){return e.e(7).then(function(){var t=[e(141)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"fmList",name:"fmList",component:function(n){return e.e(10).then(function(){var t=[e(138)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"rankingList",name:"rankingList",component:function(n){return e.e(9).then(function(){var t=[e(139)];n.apply(null,t)}.bind(this)).catch(e.oe)}}]},{path:"friends",name:"friends",component:function(n){return e.e(6).then(function(){var t=[e(142)];n.apply(null,t)}.bind(this)).catch(e.oe)}}]},{path:"/albumDetail/:id",name:"albumDetail",component:function(n){return e.e(1).then(function(){var t=[e(135)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/login",name:"login",component:function(n){return e.e(3).then(function(){var t=[e(144)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/player",name:"player",component:function(n){return e.e(4).then(function(){var t=[e(145)];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/search",name:"search",component:function(n){return e.e(2).then(function(){var t=[e(146)];n.apply(null,t)}.bind(this)).catch(e.oe)}}]});o.afterEach(function(n,t){}),t.a=o},59:function(n,t,e){"use strict";var a=e(22),i=e(38),o=e(74),r=e(72),c=e(73);a.a.use(i.a);var u={islogin:null,userInfo:null,isSign:null,playInfo:null,musicDom:null,playState:!0};t.a=new i.a.Store({state:u,getters:c.a,actions:r.a,mutations:o.a})},61:function(n,t){},62:function(n,t,e){e(127),e(126);var a=e(65)(e(70),e(131),null,null);n.exports=a.exports},68:function(n,t,e){"use strict";var a=e(37);e.d(t,"a",function(){return o}),e.d(t,"c",function(){return r}),e.d(t,"b",function(){return c});var i="https://api.imjad.cn/cloudmusic/",o=function(n){return e.i(a.a)("GET",i,{type:"song",br:128e3,id:n})},r=function(n){return e.i(a.a)("GET","http://musicapi.duapp.com/api.php",{offset:n,limit:10,type:"topPlayList",cat:"全部"})},c=function(n){return e.i(a.a)("GET",i,{type:"playlist",id:n})}},70:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(66),i=e.n(a),o=e(38);t.default={name:"app",data:function(){return{}},methods:i()({},e.i(o.b)(["initLocal"]),e.i(o.c)(["INIT_USERINFO","INIT_PLAYINFO"])),created:function(){this.$store.dispatch("initLocal")},computed:i()({},e.i(o.d)(["playInfo"])),mounted:function(){this.$store.dispatch("initAudio",this.$refs.player)}}},71:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(60),i=e.n(a),o=e(57),r=(e.n(o),e(22)),c=e(59),u=e(62),s=e.n(u),l=e(58),d=e(61),f=(e.n(d),e(56)),p=e.n(f);r.a.use(p.a),r.a.config.productionTip=!1,new r.a({el:"#app",router:l.a,template:"<App/>",components:{App:s.a},store:c.a}),r.a.prototype.debounce=function(n,t){var e,a,i=null,o=function(){n.apply(e,a),i=null};return function(){e=this,a=arguments,i&&(clearTimeout(i),i=null),i=setTimeout(o,t)}},r.a.directive("infiniteScroll",{inserted:function(n,t,e){var a=0,i=r.a.prototype.debounce(t.value,100);n.addEventListener("scroll",function(t){var e=n.childNodes[0],o=e.offsetHeight,r=n.offsetHeight,c=n.scrollTop;o-c-2<=r&&c>a&&i(),a=c})},update:function(n){}}),r.a.filter("artists",function(n){var t="";if(n.length>0){var e=!0,a=!1,o=void 0;try{for(var r,c=i()(n);!(e=(r=c.next()).done);e=!0){t+=r.value.name+","}}catch(n){a=!0,o=n}finally{try{!e&&c.return&&c.return()}finally{if(a)throw o}}return t.substring(0,t.length-1)}return"歌手"})},72:function(n,t,e){"use strict";var a=e(40),i=e.n(a),o=e(39),r=e.n(o),c=e(37),u=e(68);t.a={sign:function(n){var t=this,a=n.commit;n.state;return r()(i.a.mark(function n(){var o;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.i(c.a)("GET","/api/point/dailyTask",{type:1});case 2:o=n.sent,200==o.code&&a("SIGN_IN");case 4:case"end":return n.stop()}},n,t)}))()},initLocal:function(n){var t=this,e=n.commit;n.dispatch,n.state;return r()(i.a.mark(function n(){return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e("INIT_USERINFO");case 2:e("INIT_PLAYINFO");case 3:case"end":return n.stop()}},n,t)}))()},initAudio:function(n,t){var e=this,a=n.commit,o=n.state;return r()(i.a.mark(function n(){return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a("INIT_AUDIO",t);case 2:o.playInfo.mp3Url&&(t.src=o.playInfo.mp3Url);case 3:case"end":return n.stop()}},n,e)}))()},selectSong:function(n,t){var a=this,o=n.commit,c=n.state;return r()(i.a.mark(function n(){var r,s;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return o("RECORD_PLAYINFO",t),r=t.id,n.next=4,e.i(u.a)(r);case 4:s=n.sent,200==s.code&&(c.musicDom.src=s.data[0].url);case 6:case"end":return n.stop()}},n,a)}))()},play:function(n){var t=this,e=n.commit,a=n.state;return r()(i.a.mark(function n(){return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:0==a.playState?(a.musicDom.play(),e("PLAY")):(a.musicDom.pause(),e("PAUSE"));case 1:case"end":return n.stop()}},n,t)}))()}}},73:function(n,t,e){"use strict";t.a={}},74:function(n,t,e){"use strict";var a,i=e(80),o=e.n(i),r=e(41),c=e.n(r);t.a=(a={},o()(a,"INIT_USERINFO",function(n){var t=localStorage.getItem("userInfo");t&&(n.userInfo=JSON.parse(t),n.islogin=!0)}),o()(a,"INIT_PLAYINFO",function(n){var t=localStorage.getItem("playInfo");t&&(n.playInfo=JSON.parse(t))}),o()(a,"INIT_AUDIO",function(n,t){n.musicDom=t}),o()(a,"RECORD_USERINFO",function(n,t){n.userInfo=t,localStorage.setItem("userInfo",c()(t)),n.islogin=!0}),o()(a,"OUT_LOGIN",function(n){n.userInfo=null,n.islogin=!1}),o()(a,"SIGN_IN",function(n){n.isSign=!0}),o()(a,"RECORD_PLAYINFO",function(n,t){n.playInfo=t,localStorage.setItem("playInfo",c()(t))}),o()(a,"PLAY",function(n){n.playState=!0}),o()(a,"PAUSE",function(n){n.playState=!1}),a)}},[71]);
//# sourceMappingURL=app.9fc48306f30679e8e0b9.js.map