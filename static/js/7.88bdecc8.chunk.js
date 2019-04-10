(window.webpackJsonp=window.webpackJsonp||[]).push([[7,9],{521:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return a});var i=n(18),s=n(19),r=n(529),a=function(){function e(t){Object(i.a)(this,e),this.container=t}return Object(s.a)(e,[{key:"init",value:function(){this.w=this.container.offsetWidth,this.h=this.container.offsetHeight,this.game=new r.d({container:this.container}),this.scene=this.game.sceneManager.createScene({name:"main",x:0,y:0,w:this.w,h:this.h}),this.game.showFrames(),this.game.run(60),this.render()}},{key:"render",value:function(){}},{key:"destory",value:function(){}},{key:"stopGame",value:function(){this.game.stop(),this.game.sceneManager.clearAll(),this.destory()}}]),e}()},527:function(e,t,n){"use strict";n.r(t),n.d(t,"Stick",function(){return l}),n.d(t,"default",function(){return d});var i=n(18),s=n(19),r=n(21),a=n(20),c=n(530),o=n(22),u=n(529),h=n(521),l=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(r.a)(this,Object(a.a)(t).call(this,e))).color=e.color,n.speed=e.speed||5,n}return Object(o.a)(t,e),Object(s.a)(t,[{key:"render",value:function(e){e.beginPath(),e.fillStyle=this.color,e.fillRect(this.x,this.y,this.w,this.h),e.closePath()}},{key:"update",value:function(){u.e.pressed(u.e.LEFT)?this.dx=-this.speed:u.e.pressed(u.e.RIGHT)?this.dx=this.speed:this.dx=0,this.x<=0&&u.e.pressed(u.e.LEFT)&&(this.dx=0),this.x+this.w>=this.owner.w&&u.e.pressed(u.e.RIGHT)&&(this.dx=0),Object(c.a)(Object(a.a)(t.prototype),"update",this).call(this)}}]),t}(u.i),d=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(a.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=new l({x:100,y:200,w:50,h:10,color:"#1976d2"});this.scene.addRObj(e)}}]),t}(h.default)},529:function(e,t,n){"use strict";var i={};n.r(i),n.d(i,"randomColor",function(){return m}),n.d(i,"degreesToRadians",function(){return v});var s=n(18),r=n(19),a=function(){function e(t){Object(s.a)(this,e),this.name=t.name||"Unnamed_".concat(++e.SID),this.owner=t.owner||null,this.x=t.x||0,this.y=t.y||0,this.w=t.w||0,this.h=t.h||0,this.dx=t.dx||0,this.dy=t.dy||0,this.vx=t.vx||0,this.vy=t.vy||0,this.deg=t.deg||0,this.zIndex=t.zIndex||0,this.isVisible=t.isVisible||!0,this.canRemove=t.canRemove||!1}return Object(r.a)(e,[{key:"moveTo",value:function(e,t){this.x=e||this.x,this.y=t||this.y}},{key:"move",value:function(e,t){this.x+=e,this.y+=t}},{key:"moveStep",value:function(){this.dx+=this.vx,this.dy+=this.vy,this.x+=this.dx,this.y+=this.dy}},{key:"rotate",value:function(e){this.deg=e}},{key:"update",value:function(){this.moveStep()}},{key:"render",value:function(e){}}]),e}();a.SID=0;var c=function(){function e(t){Object(s.a)(this,e),t=t||{},this.name=t.name||"Unnamed_"+ ++e.SID,this.x=t.x||0,this.y=t.y||0,this.w=t.w||320,this.h=t.h||280,this.color=t.color||"#fff",this.holder=document.createElement("div"),this.holder.setAttribute("id","sc_".concat(this.name)),this.holder.setAttribute("class","sc_container"),this.cvs=document.createElement("canvas"),this.cvs.setAttribute("id","cv_".concat(this.name)),this.cvs.setAttribute("class","sc_cv"),this.ctx=this.cvs.getContext("2d"),this.setPos(),this.setSize(),this.setColor(this.color),this.holder.appendChild(this.cvs),t.container.appendChild(this.holder),this.listeners=[],this.rObjs=[],this.namedRobjs={}}return Object(r.a)(e,[{key:"setPos",value:function(e,t){this.x=e||this.x,this.y=t||this.y,this.holder.style.left=this.x+"px",this.holder.style.top=this.y+"px"}},{key:"setSize",value:function(e,t){this.w=e||this.w,this.h=t||this.h,this.holder.style.width=this.w,this.holder.style.height=this.h,this.cvs.setAttribute("width",this.w),this.cvs.setAttribute("height",this.h)}},{key:"setColor",value:function(e){this.color=e||"#fff",this.holder.style.backgroundColor=this.color}},{key:"update",value:function(){for(var e=0;e<this.rObjs.length;e++)this.rObjs[e].update();this.removeAllCanRemove()}},{key:"removeAllCanRemove",value:function(){}},{key:"render",value:function(){var e=this.listeners;this.clear();for(var t=0,n=e.length;t<n;t++)e[t].enabled&&e[t].onBeforeRender(this);this.renderRObj();for(var i=0,s=e.length;i<s;i++)e[i].enabled&&e[i].onAfterRender(this)}},{key:"renderRObj",value:function(){for(var e=0,t=this.rObjs.length;e<t;e++)this.ctx.save(),this.rObjs[e].isVisible&&this.rObjs[e].render(this.ctx),this.ctx.restore()}},{key:"clear",value:function(){this.ctx.clearRect(0,0,this.w,this.h)}},{key:"show",value:function(){this.holder.style.display="block"}},{key:"hide",value:function(){this.holder.style.display="none"}},{key:"setBGImg",value:function(e,t){switch(this.holder.style.backgroundImage='url("'.concat(e.src,'")'),t){case 0:this.holder.style.backgroundRepeat="no-repeat",this.holder.style.backgroundPosition="center";break;case 1:this.holder.style.backgroundSize="".concat(this.w,"px, ").concat(this.h,"px")}}},{key:"clean",value:function(){this.cvs.parentNode.removeChild(this.cvs),this.holder.parentNode.removeChild(this.holder),this.cvs=this.holder=this.ctx=null}},{key:"addRObj",value:function(e){e.owner=this,this.rObjs.push(e),this.namedRobjs[e.name]=e}}]),e}();c.SID=0;var o=n(44);var u=function(){function e(t){Object(s.a)(this,e),this.namedScenes={},this.scenes=[],this.container=t.container}return Object(r.a)(e,[{key:"createScene",value:function(e){var t=new c(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){Object(o.a)(e,t,n[t])})}return e}({},e,{container:this.container}));return this.push(t),t}},{key:"sortSceneIdx",value:function(){for(var e=0,t=this.scenes.length;e<t;e++){this.scenes[e].holder.style.zIndex=e}}},{key:"push",value:function(e){this.getScene(e.name)||(this.scenes.push(e),this.namedScenes[e.name]=e,this.sortSceneIdx())}},{key:"pop",value:function(){var e=this.scenes.pop();null!==e&&(e.clean(),delete this.namedScenes[e.name],this.sortSceneIdx())}},{key:"getIndex",value:function(e){for(var t=0;t<this.scenes.length;t++)if(e===this.scenes[t].name)return t;return null}},{key:"bringToBack",value:function(e){var t=this.scenes,n=this.getIndex(e);if(0!==n){var i=t[0];t[0]=t[n],t[n]=i,this.sortSceneIdx()}}},{key:"bringToFront",value:function(e){var t=this.scenes,n=this.getIndex(e);if(n!==t.length-1){var i=t[t.length-1];t[t.length-1]=t[n],t[n]=i,this.sortSceneIdx()}}},{key:"remove",value:function(e){var t=this.getScene(e);null!==t&&(t.clean(),delete this.namedScenes[e],this.sortSceneIdx())}},{key:"getScene",value:function(e){return this.namedScenes[e]}},{key:"getCurrentScene",value:function(){return this.scenes[this.scenes.length-1]}},{key:"clearAll",value:function(){for(var e=0;e<this.scenes.length;e++)this.scenes[e].clean();this.namedScenes={},this.scenes=[]}}]),e}(),h=function(){function e(t){Object(s.a)(this,e),this.enabled=!0,this.onBeforeRender=t.beforeRender||this.onBeforeRender,this.onAfterRender=t.afterRender||this.onAfterRender}return Object(r.a)(e,[{key:"onBeforeRender",value:function(){return!0}},{key:"onAfterRender",value:function(){return!0}}]),e}(),l={maxFrame:0,minFrame:9999,currFrame:0,currTime:0,elapseTime:0,_sTime:0,_sTFrame:0,start:function(){this.currTime=this._sTime=new Date},update:function(){var e=new Date;e-this._sTime>=1e3?(this.currFrame=this._sTFrame,this.maxFrame=this.currFrame>this.maxFrame?this.currFrame:this.maxFrame,this.minFrame=this.currFrame<this.minFrame?this.currFrame:this.minFrame,this._sTFrame=0,this._sTime=e):this._sTFrame+=1,this.elapseTime=e-this.currTime,this.currTime=e},clear:function(){this.maxFrame=0,this.minFrame=9999,this.currFrame=0,this.currTime=0,this.elapseTime=0,this._sTime=0,this._sTFrame=0}},d=function(){var e={A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,N0:48,N1:49,N2:50,N3:51,N4:52,N5:53,N6:54,N7:55,N8:56,N9:57,LEFT:37,RIGHT:39,UP:38,DOWN:40,ENTER:13,SPACE:32,TAB:9,SHIFT:16,ALT:18,CTRL:17,states:new Array(255),setEnabled:function(e){if(e){var t=this.states;this.clearKeyStates(),document.onkeydown=function(e){t[e.keyCode]=1},document.onkeyup=function(e){t[e.keyCode]=0}}else document.onkeydown=null,document.onkeyup=null},pressed:function(e){return this.states[e]},clearKeyStates:function(){for(var e=0;e<255;e++)this.states[e]=0}};return e.setEnabled(!0),e}(),f=function(){function e(t){Object(s.a)(this,e),this.paused=!1,this.listeners=[],this.container=t.container,this.sceneManager=new u({container:t.container})}return Object(r.a)(e,[{key:"addListener",value:function(e){this.listeners.push(e)}},{key:"clearListener",value:function(){this.listeners.length=0}},{key:"mainLoop",value:function(){for(var e=this.listeners,t=0;t<e.length;t++)e[t].enabled&&e[t].onBeforeRender();var n=this.sceneManager.getCurrentScene();n&&(n.update(),n.render());for(var i=0;i<e.length;i++)e[i].enabled&&e[i].onAfterRender()}},{key:"run",value:function(e){var t=this,n=1e3/(e=e||60)||0;l.start(),t.tHand=setInterval(function(){l.update(),t.paused||t.mainLoop()},n)}},{key:"pause",value:function(){this.paused=!0}},{key:"stop",value:function(){clearInterval(this.tHand),l.clear()}},{key:"showFrames",value:function(){var e=this.container;try{e.removeChild(document.querySelector(".max-frame-ele")),e.removeChild(document.querySelector(".min-frame-ele")),e.removeChild(document.querySelector(".curr-frame-ele"))}catch(s){}var t=document.createElement("div"),n=document.createElement("div"),i=document.createElement("div");t.setAttribute("class","max-frame-ele"),n.setAttribute("class","min-frame-ele"),i.setAttribute("class","curr-frame-ele"),e.appendChild(t),e.appendChild(n),e.appendChild(i),this.addListener(new h({afterRender:function(){t.innerText="\u6700\u5927\u5e27\u6570\uff1a"+l.maxFrame,n.innerText="\u6700\u5c0f\u5e27\u6570\uff1a"+l.minFrame,i.innerText="\u5f53\u524d\u5e27\u6570\uff1a"+l.currFrame}}))}}]),e}(),m=function(){var e=Number.parseInt(256*Math.random()),t=Number.parseInt(256*Math.random()),n=Number.parseInt(256*Math.random());return"rgba(".concat(e,", ").concat(t,", ").concat(n,", 1)")};function v(e){return e*(Math.PI/180)}var y=n(21),g=n(20),p=n(22),b=function(){function e(t){Object(s.a)(this,e),this.name=t.name,this.duration=t.duration||50,this.frames=[],this.img=t.img}return Object(r.a)(e,[{key:"add",value:function(e,t,n,i,s,r){r=r||this.duration,s=s||this.img,this.frames.push([s,e,t,n,i,r])}},{key:"insert",value:function(e,t,n,i,s,r,a){a=a||this.duration,r=r||this.img,this.frames.splice(e,0,[r,t,n,i,s,a])}},{key:"remove",value:function(e){this.frames.splice(e,1)}},{key:"clear",value:function(){this.frames=[]}},{key:"get",value:function(e){return this.frames[e]}},{key:"getCount",value:function(){return this.frames.length}}]),e}(),k=function(){function e(t){Object(s.a)(this,e),this.anims={}}return Object(r.a)(e,[{key:"add",value:function(e,t){this.anims[e]=t}},{key:"remove",value:function(e){this.anims[e]=null}},{key:"clear",value:function(){this.anims=[]}},{key:"get",value:function(e){return this.anims[e]}}]),e}(),x=function(){function e(t){Object(s.a)(this,e),this.processFrame=t.processFrame||function(){this.fDur+=l.elapseTime*this.speed,this.fDur>=this.currFrames.frames[this.currFIdx][5]&&(this.fDur=0,this.currFIdx<this.feIdx-1?++this.currFIdx:this.isCycle&&(this.currFIdx=this.fsIdx))}}return Object(r.a)(e,[{key:"reset",value:function(){this.fsIdx=0,this.feIdx=this.currFrames.getCount(),this.currFIdx=0,this.isCycle=!0,this.fDur=0,this.speed=1}},{key:"setCurrent",value:function(e){var t=this.anims.get(e);if(this.currFrames!==t){var n=this.speed||1;this.currFrames=t,this.reset(),this.speed=n}}},{key:"getCurrent",value:function(){return this.currFrames}},{key:"setAnims",value:function(e,t){this.anims=e,t=t||"def",this.setCurrent(t)}},{key:"getCurrFrameIdx",value:function(){return this.currFIdx}},{key:"getCurrFrame",value:function(){return this.currFrames.get(this.currFIdx)}},{key:"getNextFrame",value:function(){return this.processFrame(),this.currFrames.get(this.currFIdx)}}]),e}(),w=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(y.a)(this,Object(g.a)(t).call(this,e))).anims=null,n.animCtrl=new x({}),n.isXFlip=!1,n.isYFlip=!1,n.scaleX=1,n.scaleY=1,n}return Object(p.a)(t,e),Object(r.a)(t,[{key:"setAnims",value:function(e,t){t=t||"def",this.anims=e,this.animCtrl.setAnims(e,t)}},{key:"addAnim",value:function(e,t,n){this.anims.add(e,t),n&&this.animCtrl.setCurrent(e)}},{key:"removeAnim",value:function(e){this.anims.remove(e)}},{key:"setCAnim",value:function(e){this.animCtrl.setCurrent(e)}},{key:"setAnimSpeed",value:function(e){this.animCtrl.speed=e}},{key:"getAnim",value:function(e){return this.anims.get(e)}},{key:"getCurrentAnim",value:function(){return this.animCtrl.getCurrent()}},{key:"getCurrentFrame",value:function(){return this.animCtrl.getCurrFrame()}},{key:"getNextFrame",value:function(){return this.animCtrl.getNextFrame()}},{key:"render",value:function(e){e.translate(this.x,this.y);var t=.5*this.w,n=.5*this.h,i=this.isXFlip?-this.scaleX:this.scaleX,s=this.isYFlip?-this.scaleY:this.scaleY;0!==this.deg&&e.rotate(v(this.deg)),e.scale(i,s);var r=this.getNextFrame();e.drawImage(r[0],r[1],r[2],r[3],r[4],-t,-n,this.w,this.h)}}]),t}(a),O=function(){function e(t){Object(s.a)(this,e),this.game=t&&t.game}return Object(r.a)(e,[{key:"start",value:function(e){console.log("Starting Loading...")}},{key:"loaded",value:function(e,t,n){console.log("Loading ".concat(e.name,"..."))}},{key:"completed",value:function(e){console.log("Completed Loading...")}}]),e}(),F=function(){function e(t){Object(s.a)(this,e),this.index=0,this.resources={},this.disable=!1,this.configArr=t.config,this.count=t.config.length,t.loading&&(t.loading.game=t.game),this.loading=t.loading||new O({game:t.game})}return Object(r.a)(e,[{key:"loadImage",value:function(e){return new Promise(function(t,n){try{var i=new Image;i.onload=function(){t(i)},i.src=e}catch(s){n(s)}})}},{key:"loadJson",value:function(e){return new Promise(function(t,n){try{fetch(e).then(function(e){e.json().then(function(e){t(e)})})}catch(i){n(i)}})}},{key:"loadAudio",value:function(e){return new Promise(function(t,n){try{fetch(e).then(function(e){return e.arrayBuffer().then(function(e){t(e)})})}catch(i){n(i)}})}},{key:"loadedEach",value:function(e,t,n){var i=this;this.index++,this.loading.loaded(t,n,this.index/this.count),this.resources[t.name]=n,this.index>=this.count&&setTimeout(function(){i.loading.completed(i.resources),e(i.resources)},500)}},{key:"load",value:function(){var e=this;return new Promise(function(t,n){try{e.loading.start(e.configArr),e.configArr.forEach(function(n){switch(n.type){case"IMAGE":e.loadImage(n.src).then(function(i){e.loadedEach(t,n,i)});break;case"JSON":e.loadJson(n.src).then(function(i){e.loadedEach(t,n,i)});break;case"AUDIO":e.loadAudio(n.src).then(function(i){e.loadedEach(t,n,i)})}})}catch(i){n(i)}})}}]),e}(),j={_getContext:function(){try{return AudioContext&&new window.AudioContext||new window.webkitAudioContext}catch(e){console.log("Your browser can not support Web Audio API")}return null},play:function(e){var t=this._getContext(),n=t.createBufferSource();t.decodeAudioData(e,function(e){n.buffer=e,n.connect(t.destination),n.start(0)})}};n.d(t,"g",function(){return a}),n.d(t,"d",function(){return f}),n.d(t,"j",function(){return i}),n.d(t,"i",function(){return w}),n.d(t,"c",function(){return b}),n.d(t,"a",function(){return k}),n.d(t,"e",function(){return d}),n.d(t,"h",function(){return F}),n.d(t,"b",function(){return j}),n.d(t,"f",function(){return O})},530:function(e,t,n){"use strict";var i=n(20);function s(e,t,n){return(s="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var s=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Object(i.a)(e)););return e}(e,t);if(s){var r=Object.getOwnPropertyDescriptor(s,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}n.d(t,"a",function(){return s})}}]);
//# sourceMappingURL=7.88bdecc8.chunk.js.map