(window.webpackJsonp=window.webpackJsonp||[]).push([[4,9],{521:function(e,t,i){"use strict";i.r(t),i.d(t,"default",function(){return a});var n=i(18),s=i(19),r=i(529),a=function(){function e(t){Object(n.a)(this,e),this.container=t}return Object(s.a)(e,[{key:"init",value:function(){this.w=this.container.offsetWidth,this.h=this.container.offsetHeight,this.game=new r.d({container:this.container}),this.scene=this.game.sceneManager.createScene({name:"main",x:0,y:0,w:this.w,h:this.h}),this.game.showFrames(),this.game.run(60),this.render()}},{key:"render",value:function(){}},{key:"destory",value:function(){}},{key:"stopGame",value:function(){this.game.stop(),this.game.sceneManager.clearAll(),this.destory()}}]),e}()},523:function(e,t,i){"use strict";i.r(t),i.d(t,"End",function(){return l}),i.d(t,"Stick",function(){return d}),i.d(t,"default",function(){return g});var n=i(530),s=i(18),r=i(19),a=i(21),c=i(20),h=i(22),o=i(529),u=i(521),l=function(e){function t(){return Object(s.a)(this,t),Object(a.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){e.font="30px Arial",e.strokeText("Game Over!",10,50)}}]),t}(o.i),d=function(e){function t(e){var i;return Object(s.a)(this,t),(i=Object(a.a)(this,Object(c.a)(t).call(this,e))).color=e.color,i.speed=e.speed||5,i}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){e.beginPath(),e.fillStyle=this.color,e.fillRect(this.x,this.y,this.w,this.h),e.closePath()}},{key:"update",value:function(){o.e.pressed(o.e.LEFT)?this.dx=-this.speed:o.e.pressed(o.e.RIGHT)?this.dx=this.speed:this.dx=0,this.x<=0&&o.e.pressed(o.e.LEFT)&&(this.dx=0),this.x+this.w>=this.owner.w&&o.e.pressed(o.e.RIGHT)&&(this.dx=0),Object(n.a)(Object(c.a)(t.prototype),"update",this).call(this)}}]),t}(o.i),f=function(e){function t(e){var i;return Object(s.a)(this,t),(i=Object(a.a)(this,Object(c.a)(t).call(this,e))).r=e.r,i.color="#000",i.stick=e.stick,i.state=0,i.bricks=e.bricks,i.game=e.game,i}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){e.beginPath(),e.fillStyle=this.color,e.arc(this.x,this.y,this.r,0,2*Math.PI),e.fill()}},{key:"update",value:function(){if(0===this.state&&o.e.pressed(o.e.SPACE)&&(this.dx=-3,this.dy=-3,this.state=1),2!==this.state){var e=this.owner.w,i=this.owner.h;(this.x<this.r||this.x>e-this.r)&&(this.dx=-this.dx),(this.y<this.r||this.y>i-this.r)&&(this.dy=-this.dy),this.ballHitStick(),this.ballHitBricks(),this.ballOut(),Object(n.a)(Object(c.a)(t.prototype),"update",this).call(this)}}},{key:"ballOut",value:function(){this.y+2*this.r>=this.owner.h&&(this.state=2,this.showOver())}},{key:"showOver",value:function(){var e=this.game.sceneManager.createScene({name:"endSc",x:this.game.container.clientWidth/2-100,y:this.game.container.clientHeight/2-50,w:200,h:100}),t=new l({name:"end"});e.addRObj(t),this.game.sceneManager.bringToFront("endSc")}},{key:"ballHitStick",value:function(){var e=this.stick.x,t=this.stick.x+this.stick.w,i=this.stick.y,n=this.stick.y+this.stick.h;this.x>=e&&this.x<=t&&this.y>=i&&this.y<=n&&(this.dy=-this.dy,this.dx=this.dx+this.stick.dx)}},{key:"ballHitBricks",value:function(){for(var e=0;e<this.bricks.length;e++){var t=this.bricks[e].x,i=this.bricks[e].x+this.bricks[e].w,n=this.bricks[e].y,s=this.bricks[e].y+this.bricks[e].h;this.bricks[e].isVisible&&this.x>=t&&this.x<=i&&this.y>=n&&this.y<=s&&(this.dy=-this.dy,this.bricks[e].isVisible=!1,this.bricks[e].value>1&&this.generateReward(this.bricks[e]))}}},{key:"generateReward",value:function(e){var t=new y({name:"reward".concat(e.x+""+e.y),x:e.x,y:e.y,w:e.w,h:e.h,dy:1,value:e.value});this.owner.addRObj(t)}}]),t}(o.i),m=function(e){function t(e){var i;return Object(s.a)(this,t),(i=Object(a.a)(this,Object(c.a)(t).call(this,e))).value=e.value,i}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){e.fillStyle="#afb42b",e.fillRect(this.x,this.y,this.w,this.h)}},{key:"update",value:function(){Object(n.a)(Object(c.a)(t.prototype),"update",this).call(this)}}]),t}(o.i),y=function(e){function t(e){var i;return Object(s.a)(this,t),(i=Object(a.a)(this,Object(c.a)(t).call(this,e))).color=e.color,i.value=e.value,i}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){e.fillStyle=this.color,e.fillRect(this.x,this.y,this.w,this.h),2===this.value&&(e.strokeStyle="#fff",e.strokeText("Reward Size",this.x,this.y+this.h/2)),3===this.value&&(e.strokeStyle="#fff",e.strokeText("Reward Speed",this.x,this.y+this.h/2))}},{key:"update",value:function(){Object(n.a)(Object(c.a)(t.prototype),"update",this).call(this)}}]),t}(o.i),v=function(e){function t(e){var i;return Object(s.a)(this,t),(i=Object(a.a)(this,Object(c.a)(t).call(this,e))).originW=i.w,i.originSpeed=i.speed,i}return Object(h.a)(t,e),Object(r.a)(t,[{key:"update",value:function(){this.stickHitReward(),Object(n.a)(Object(c.a)(t.prototype),"update",this).call(this)}},{key:"resetState",value:function(e){switch(e){case 2:this.w=this.originW;break;case 3:this.speed=this.originSpeed}}},{key:"updateState",value:function(e){var t=this;switch(e){case 2:this.w=2*this.originW,setTimeout(function(){t.resetState(e)},3e4);break;case 3:this.speed=2*this.originSpeed,setTimeout(function(){t.resetState(e)},3e4)}}},{key:"stickHitReward",value:function(){for(var e=this.owner.rObjs,t=this.x,i=this.x+this.w,n=this.y,s=this.y+this.h,r=0;r<e.length;r++)e[r].name.includes("reward")&&e[r].x>=t-e[r].w&&e[r].x<=i+e[r].w&&e[r].y+e[r].h>=n&&e[r].y+e[r].h<=s&&(e[r].isVisible=!1,this.updateState(e[r].value))}}]),t}(d),b=function(e){function t(e){var i;return Object(s.a)(this,t),(i=Object(a.a)(this,Object(c.a)(t).call(this,e))).w=200,i.h=20,i.from=0,i.percentage=0,i.loadingSpeed=e.loadingSpeed||10,i}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){e.fillStyle="green",e.fillRect(this.x,this.y,this.from,this.h),e.strokeStyle="blue",e.rect(this.x,this.y,this.w,this.h),e.stroke(),e.strokeText(Number.parseInt(this.from/this.w*100)+"%",this.x+80,this.y-10)}},{key:"update",value:function(){this.from<this.w*this.percentage&&(this.from+=this.loadingSpeed),Object(n.a)(Object(c.a)(t.prototype),"update",this).call(this)}}]),t}(o.i),k=function(e){function t(){return Object(s.a)(this,t),Object(a.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(r.a)(t,[{key:"start",value:function(e){this.container=this.game.container,this.sceneName="loadingSc",this.scene=this.game.sceneManager.createScene({name:this.sceneName,x:0,y:0,w:this.container.clientWidth,h:this.container.clientHeight}),this.loadingContent=new b({x:this.container.clientWidth/2-100,y:this.container.clientHeight/2-10}),this.scene.addRObj(this.loadingContent),this.game.sceneManager.bringToFront(this.sceneName)}},{key:"loaded",value:function(e,t,i){this.loadingContent.percentage=i}},{key:"completed",value:function(e){this.game.sceneManager.bringToBack(this.sceneName)}}]),t}(o.f),g=function(e){function t(){return Object(s.a)(this,t),Object(a.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(r.a)(t,[{key:"getStick",value:function(){return new v({name:"stick",x:100,y:500,w:100,h:10,color:"#1976d2"})}},{key:"getBricks",value:function(e){for(var t=[],i=0;i<e.length;i++)for(var n=0;n<e[i].length;n++){var s=new m({name:"brick".concat(i+""+n),x:81*n+20,y:21*i+20,w:80,h:20,value:e[i][n],isVisible:Boolean(e[i][n])});t.push(s)}return t}},{key:"getBall",value:function(e,t,i){return new f({name:"ball",x:e.x+e.w/2,y:e.y-5,r:5,stick:e,bricks:t,game:i})}},{key:"render",value:function(){var e=this;new o.h({config:[{name:"brickData",desc:"Render silly brickes...",src:"./data/brickes.json",type:"JSON"}],game:this.game,loading:new k}).load().then(function(t){var i=t.brickData;e.stick=e.getStick(),e.bricks=e.getBricks(i),e.ball=e.getBall(e.stick,e.bricks,e.game),e.scene.addRObj(e.stick);for(var n=0;n<e.bricks.length;n++)e.scene.addRObj(e.bricks[n]);e.scene.addRObj(e.ball)})}}]),t}(u.default)},529:function(e,t,i){"use strict";var n={};i.r(n),i.d(n,"randomColor",function(){return m}),i.d(n,"degreesToRadians",function(){return y});var s=i(18),r=i(19),a=function(){function e(t){Object(s.a)(this,e),this.name=t.name||"Unnamed_".concat(++e.SID),this.owner=t.owner||null,this.x=t.x||0,this.y=t.y||0,this.w=t.w||0,this.h=t.h||0,this.dx=t.dx||0,this.dy=t.dy||0,this.vx=t.vx||0,this.vy=t.vy||0,this.deg=t.deg||0,this.zIndex=t.zIndex||0,this.isVisible=t.isVisible||!0,this.canRemove=t.canRemove||!1}return Object(r.a)(e,[{key:"moveTo",value:function(e,t){this.x=e||this.x,this.y=t||this.y}},{key:"move",value:function(e,t){this.x+=e,this.y+=t}},{key:"moveStep",value:function(){this.dx+=this.vx,this.dy+=this.vy,this.x+=this.dx,this.y+=this.dy}},{key:"rotate",value:function(e){this.deg=e}},{key:"update",value:function(){this.moveStep()}},{key:"render",value:function(e){}}]),e}();a.SID=0;var c=function(){function e(t){Object(s.a)(this,e),t=t||{},this.name=t.name||"Unnamed_"+ ++e.SID,this.x=t.x||0,this.y=t.y||0,this.w=t.w||320,this.h=t.h||280,this.color=t.color||"#fff",this.holder=document.createElement("div"),this.holder.setAttribute("id","sc_".concat(this.name)),this.holder.setAttribute("class","sc_container"),this.cvs=document.createElement("canvas"),this.cvs.setAttribute("id","cv_".concat(this.name)),this.cvs.setAttribute("class","sc_cv"),this.ctx=this.cvs.getContext("2d"),this.setPos(),this.setSize(),this.setColor(this.color),this.holder.appendChild(this.cvs),t.container.appendChild(this.holder),this.listeners=[],this.rObjs=[],this.namedRobjs={}}return Object(r.a)(e,[{key:"setPos",value:function(e,t){this.x=e||this.x,this.y=t||this.y,this.holder.style.left=this.x+"px",this.holder.style.top=this.y+"px"}},{key:"setSize",value:function(e,t){this.w=e||this.w,this.h=t||this.h,this.holder.style.width=this.w,this.holder.style.height=this.h,this.cvs.setAttribute("width",this.w),this.cvs.setAttribute("height",this.h)}},{key:"setColor",value:function(e){this.color=e||"#fff",this.holder.style.backgroundColor=this.color}},{key:"update",value:function(){for(var e=0;e<this.rObjs.length;e++)this.rObjs[e].update();this.removeAllCanRemove()}},{key:"removeAllCanRemove",value:function(){}},{key:"render",value:function(){var e=this.listeners;this.clear();for(var t=0,i=e.length;t<i;t++)e[t].enabled&&e[t].onBeforeRender(this);this.renderRObj();for(var n=0,s=e.length;n<s;n++)e[n].enabled&&e[n].onAfterRender(this)}},{key:"renderRObj",value:function(){for(var e=0,t=this.rObjs.length;e<t;e++)this.ctx.save(),this.rObjs[e].isVisible&&this.rObjs[e].render(this.ctx),this.ctx.restore()}},{key:"clear",value:function(){this.ctx.clearRect(0,0,this.w,this.h)}},{key:"show",value:function(){this.holder.style.display="block"}},{key:"hide",value:function(){this.holder.style.display="none"}},{key:"setBGImg",value:function(e,t){switch(this.holder.style.backgroundImage='url("'.concat(e.src,'")'),t){case 0:this.holder.style.backgroundRepeat="no-repeat",this.holder.style.backgroundPosition="center";break;case 1:this.holder.style.backgroundSize="".concat(this.w,"px, ").concat(this.h,"px")}}},{key:"clean",value:function(){this.cvs.parentNode.removeChild(this.cvs),this.holder.parentNode.removeChild(this.holder),this.cvs=this.holder=this.ctx=null}},{key:"addRObj",value:function(e){e.owner=this,this.rObjs.push(e),this.namedRobjs[e.name]=e}}]),e}();c.SID=0;var h=i(44);var o=function(){function e(t){Object(s.a)(this,e),this.namedScenes={},this.scenes=[],this.container=t.container}return Object(r.a)(e,[{key:"createScene",value:function(e){var t=new c(function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),n.forEach(function(t){Object(h.a)(e,t,i[t])})}return e}({},e,{container:this.container}));return this.push(t),t}},{key:"sortSceneIdx",value:function(){for(var e=0,t=this.scenes.length;e<t;e++){this.scenes[e].holder.style.zIndex=e}}},{key:"push",value:function(e){this.getScene(e.name)||(this.scenes.push(e),this.namedScenes[e.name]=e,this.sortSceneIdx())}},{key:"pop",value:function(){var e=this.scenes.pop();null!==e&&(e.clean(),delete this.namedScenes[e.name],this.sortSceneIdx())}},{key:"getIndex",value:function(e){for(var t=0;t<this.scenes.length;t++)if(e===this.scenes[t].name)return t;return null}},{key:"bringToBack",value:function(e){var t=this.scenes,i=this.getIndex(e);if(0!==i){var n=t[0];t[0]=t[i],t[i]=n,this.sortSceneIdx()}}},{key:"bringToFront",value:function(e){var t=this.scenes,i=this.getIndex(e);if(i!==t.length-1){var n=t[t.length-1];t[t.length-1]=t[i],t[i]=n,this.sortSceneIdx()}}},{key:"remove",value:function(e){var t=this.getScene(e);null!==t&&(t.clean(),delete this.namedScenes[e],this.sortSceneIdx())}},{key:"getScene",value:function(e){return this.namedScenes[e]}},{key:"getCurrentScene",value:function(){return this.scenes[this.scenes.length-1]}},{key:"clearAll",value:function(){for(var e=0;e<this.scenes.length;e++)this.scenes[e].clean();this.namedScenes={},this.scenes=[]}}]),e}(),u=function(){function e(t){Object(s.a)(this,e),this.enabled=!0,this.onBeforeRender=t.beforeRender||this.onBeforeRender,this.onAfterRender=t.afterRender||this.onAfterRender}return Object(r.a)(e,[{key:"onBeforeRender",value:function(){return!0}},{key:"onAfterRender",value:function(){return!0}}]),e}(),l={maxFrame:0,minFrame:9999,currFrame:0,currTime:0,elapseTime:0,_sTime:0,_sTFrame:0,start:function(){this.currTime=this._sTime=new Date},update:function(){var e=new Date;e-this._sTime>=1e3?(this.currFrame=this._sTFrame,this.maxFrame=this.currFrame>this.maxFrame?this.currFrame:this.maxFrame,this.minFrame=this.currFrame<this.minFrame?this.currFrame:this.minFrame,this._sTFrame=0,this._sTime=e):this._sTFrame+=1,this.elapseTime=e-this.currTime,this.currTime=e},clear:function(){this.maxFrame=0,this.minFrame=9999,this.currFrame=0,this.currTime=0,this.elapseTime=0,this._sTime=0,this._sTFrame=0}},d=function(){var e={A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,N0:48,N1:49,N2:50,N3:51,N4:52,N5:53,N6:54,N7:55,N8:56,N9:57,LEFT:37,RIGHT:39,UP:38,DOWN:40,ENTER:13,SPACE:32,TAB:9,SHIFT:16,ALT:18,CTRL:17,states:new Array(255),setEnabled:function(e){if(e){var t=this.states;this.clearKeyStates(),document.onkeydown=function(e){t[e.keyCode]=1},document.onkeyup=function(e){t[e.keyCode]=0}}else document.onkeydown=null,document.onkeyup=null},pressed:function(e){return this.states[e]},clearKeyStates:function(){for(var e=0;e<255;e++)this.states[e]=0}};return e.setEnabled(!0),e}(),f=function(){function e(t){Object(s.a)(this,e),this.paused=!1,this.listeners=[],this.container=t.container,this.sceneManager=new o({container:t.container})}return Object(r.a)(e,[{key:"addListener",value:function(e){this.listeners.push(e)}},{key:"clearListener",value:function(){this.listeners.length=0}},{key:"mainLoop",value:function(){for(var e=this.listeners,t=0;t<e.length;t++)e[t].enabled&&e[t].onBeforeRender();var i=this.sceneManager.getCurrentScene();i&&(i.update(),i.render());for(var n=0;n<e.length;n++)e[n].enabled&&e[n].onAfterRender()}},{key:"run",value:function(e){var t=this,i=1e3/(e=e||60)||0;l.start(),t.tHand=setInterval(function(){l.update(),t.paused||t.mainLoop()},i)}},{key:"pause",value:function(){this.paused=!0}},{key:"stop",value:function(){clearInterval(this.tHand),l.clear()}},{key:"showFrames",value:function(){var e=this.container;try{e.removeChild(document.querySelector(".max-frame-ele")),e.removeChild(document.querySelector(".min-frame-ele")),e.removeChild(document.querySelector(".curr-frame-ele"))}catch(s){}var t=document.createElement("div"),i=document.createElement("div"),n=document.createElement("div");t.setAttribute("class","max-frame-ele"),i.setAttribute("class","min-frame-ele"),n.setAttribute("class","curr-frame-ele"),e.appendChild(t),e.appendChild(i),e.appendChild(n),this.addListener(new u({afterRender:function(){t.innerText="\u6700\u5927\u5e27\u6570\uff1a"+l.maxFrame,i.innerText="\u6700\u5c0f\u5e27\u6570\uff1a"+l.minFrame,n.innerText="\u5f53\u524d\u5e27\u6570\uff1a"+l.currFrame}}))}}]),e}(),m=function(){var e=Number.parseInt(256*Math.random()),t=Number.parseInt(256*Math.random()),i=Number.parseInt(256*Math.random());return"rgba(".concat(e,", ").concat(t,", ").concat(i,", 1)")};function y(e){return e*(Math.PI/180)}var v=i(21),b=i(20),k=i(22),g=function(){function e(t){Object(s.a)(this,e),this.name=t.name,this.duration=t.duration||50,this.frames=[],this.img=t.img}return Object(r.a)(e,[{key:"add",value:function(e,t,i,n,s,r){r=r||this.duration,s=s||this.img,this.frames.push([s,e,t,i,n,r])}},{key:"insert",value:function(e,t,i,n,s,r,a){a=a||this.duration,r=r||this.img,this.frames.splice(e,0,[r,t,i,n,s,a])}},{key:"remove",value:function(e){this.frames.splice(e,1)}},{key:"clear",value:function(){this.frames=[]}},{key:"get",value:function(e){return this.frames[e]}},{key:"getCount",value:function(){return this.frames.length}}]),e}(),p=function(){function e(t){Object(s.a)(this,e),this.anims={}}return Object(r.a)(e,[{key:"add",value:function(e,t){this.anims[e]=t}},{key:"remove",value:function(e){this.anims[e]=null}},{key:"clear",value:function(){this.anims=[]}},{key:"get",value:function(e){return this.anims[e]}}]),e}(),x=function(){function e(t){Object(s.a)(this,e),this.processFrame=t.processFrame||function(){this.fDur+=l.elapseTime*this.speed,this.fDur>=this.currFrames.frames[this.currFIdx][5]&&(this.fDur=0,this.currFIdx<this.feIdx-1?++this.currFIdx:this.isCycle&&(this.currFIdx=this.fsIdx))}}return Object(r.a)(e,[{key:"reset",value:function(){this.fsIdx=0,this.feIdx=this.currFrames.getCount(),this.currFIdx=0,this.isCycle=!0,this.fDur=0,this.speed=1}},{key:"setCurrent",value:function(e){var t=this.anims.get(e);if(this.currFrames!==t){var i=this.speed||1;this.currFrames=t,this.reset(),this.speed=i}}},{key:"getCurrent",value:function(){return this.currFrames}},{key:"setAnims",value:function(e,t){this.anims=e,t=t||"def",this.setCurrent(t)}},{key:"getCurrFrameIdx",value:function(){return this.currFIdx}},{key:"getCurrFrame",value:function(){return this.currFrames.get(this.currFIdx)}},{key:"getNextFrame",value:function(){return this.processFrame(),this.currFrames.get(this.currFIdx)}}]),e}(),O=function(e){function t(e){var i;return Object(s.a)(this,t),(i=Object(v.a)(this,Object(b.a)(t).call(this,e))).anims=null,i.animCtrl=new x({}),i.isXFlip=!1,i.isYFlip=!1,i.scaleX=1,i.scaleY=1,i}return Object(k.a)(t,e),Object(r.a)(t,[{key:"setAnims",value:function(e,t){t=t||"def",this.anims=e,this.animCtrl.setAnims(e,t)}},{key:"addAnim",value:function(e,t,i){this.anims.add(e,t),i&&this.animCtrl.setCurrent(e)}},{key:"removeAnim",value:function(e){this.anims.remove(e)}},{key:"setCAnim",value:function(e){this.animCtrl.setCurrent(e)}},{key:"setAnimSpeed",value:function(e){this.animCtrl.speed=e}},{key:"getAnim",value:function(e){return this.anims.get(e)}},{key:"getCurrentAnim",value:function(){return this.animCtrl.getCurrent()}},{key:"getCurrentFrame",value:function(){return this.animCtrl.getCurrFrame()}},{key:"getNextFrame",value:function(){return this.animCtrl.getNextFrame()}},{key:"render",value:function(e){e.translate(this.x,this.y);var t=.5*this.w,i=.5*this.h,n=this.isXFlip?-this.scaleX:this.scaleX,s=this.isYFlip?-this.scaleY:this.scaleY;0!==this.deg&&e.rotate(y(this.deg)),e.scale(n,s);var r=this.getNextFrame();e.drawImage(r[0],r[1],r[2],r[3],r[4],-t,-i,this.w,this.h)}}]),t}(a),j=function(){function e(t){Object(s.a)(this,e),this.game=t&&t.game}return Object(r.a)(e,[{key:"start",value:function(e){console.log("Starting Loading...")}},{key:"loaded",value:function(e,t,i){console.log("Loading ".concat(e.name,"..."))}},{key:"completed",value:function(e){console.log("Completed Loading...")}}]),e}(),w=function(){function e(t){Object(s.a)(this,e),this.index=0,this.resources={},this.disable=!1,this.configArr=t.config,this.count=t.config.length,t.loading&&(t.loading.game=t.game),this.loading=t.loading||new j({game:t.game})}return Object(r.a)(e,[{key:"loadImage",value:function(e){return new Promise(function(t,i){try{var n=new Image;n.onload=function(){t(n)},n.src=e}catch(s){i(s)}})}},{key:"loadJson",value:function(e){return new Promise(function(t,i){try{fetch(e).then(function(e){e.json().then(function(e){t(e)})})}catch(n){i(n)}})}},{key:"loadAudio",value:function(e){return new Promise(function(t,i){try{fetch(e).then(function(e){return e.arrayBuffer().then(function(e){t(e)})})}catch(n){i(n)}})}},{key:"loadedEach",value:function(e,t,i){var n=this;this.index++,this.loading.loaded(t,i,this.index/this.count),this.resources[t.name]=i,this.index>=this.count&&setTimeout(function(){n.loading.completed(n.resources),e(n.resources)},500)}},{key:"load",value:function(){var e=this;return new Promise(function(t,i){try{e.loading.start(e.configArr),e.configArr.forEach(function(i){switch(i.type){case"IMAGE":e.loadImage(i.src).then(function(n){e.loadedEach(t,i,n)});break;case"JSON":e.loadJson(i.src).then(function(n){e.loadedEach(t,i,n)});break;case"AUDIO":e.loadAudio(i.src).then(function(n){e.loadedEach(t,i,n)})}})}catch(n){i(n)}})}}]),e}(),S={_getContext:function(){try{return AudioContext&&new window.AudioContext||new window.webkitAudioContext}catch(e){console.log("Your browser can not support Web Audio API")}return null},play:function(e){var t=this._getContext(),i=t.createBufferSource();t.decodeAudioData(e,function(e){i.buffer=e,i.connect(t.destination),i.start(0)})}};i.d(t,"g",function(){return a}),i.d(t,"d",function(){return f}),i.d(t,"j",function(){return n}),i.d(t,"i",function(){return O}),i.d(t,"c",function(){return g}),i.d(t,"a",function(){return p}),i.d(t,"e",function(){return d}),i.d(t,"h",function(){return w}),i.d(t,"b",function(){return S}),i.d(t,"f",function(){return j})},530:function(e,t,i){"use strict";var n=i(20);function s(e,t,i){return(s="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var s=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Object(n.a)(e)););return e}(e,t);if(s){var r=Object.getOwnPropertyDescriptor(s,t);return r.get?r.get.call(i):r.value}})(e,t,i||e)}i.d(t,"a",function(){return s})}}]);
//# sourceMappingURL=4.60bf961f.chunk.js.map