(window.webpackJsonp=window.webpackJsonp||[]).push([[39,1],{25:function(t,e,r){"use strict";r.r(e),r.d(e,"ion_backdrop",function(){return s});var i=r(2),n=(r(0),r(92)),o=r(96),s=(a.prototype.connectedCallback=function(){this.stopPropagation&&this.blocker.block()},a.prototype.disconnectedCallback=function(){this.blocker.unblock()},a.prototype.onTouchStart=function(t){this.lastClick=Object(n.j)(t),this.emitTap(t)},a.prototype.onMouseDown=function(t){this.lastClick<Object(n.j)(t)-2500&&this.emitTap(t)},a.prototype.emitTap=function(t){this.stopPropagation&&(t.preventDefault(),t.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()},a.prototype.render=function(){var t,e=Object(i.e)(this);return Object(i.i)(i.a,{tabindex:"-1",class:(t={},t[e]=!0,t["backdrop-hide"]=!this.visible,t["backdrop-no-tappable"]=!this.tappable,t)})},Object.defineProperty(a,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color,#000)}"},enumerable:!0,configurable:!0}),a);function a(t){Object(i.l)(this,t),this.lastClick=-1e4,this.blocker=o.GESTURE_CONTROLLER.createBlocker({disableScroll:!0}),this.visible=!0,this.tappable=!0,this.stopPropagation=!0,this.ionBackdropTap=Object(i.d)(this,"ionBackdropTap",7)}},92:function(t,e,r){"use strict";r.d(e,"a",function(){return c}),r.d(e,"b",function(){return n}),r.d(e,"c",function(){return u}),r.d(e,"d",function(){return f}),r.d(e,"e",function(){return l}),r.d(e,"f",function(){return a}),r.d(e,"g",function(){return b}),r.d(e,"h",function(){return s}),r.d(e,"i",function(){return h}),r.d(e,"j",function(){return d}),r.d(e,"k",function(){return p}),r.d(e,"l",function(){return i});var o=r(1),i=function(t){return"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(t):"function"==typeof requestAnimationFrame?requestAnimationFrame(t):setTimeout(t)},n=function(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)},s=function(t){return!!t.shadowRoot&&!!t.attachShadow},a=function(t){var e=t.closest("ion-item");return e?e.querySelector("ion-label"):null},c=function(t,e,r,i,n){if(t||s(e)){var o=e.querySelector("input.aux-input");o||((o=e.ownerDocument.createElement("input")).type="hidden",o.classList.add("aux-input"),e.appendChild(o)),o.disabled=n,o.name=r,o.value=i||""}},u=function(t,e,r){return Math.max(t,Math.min(e,r))},l=function(t,e){if(!t){var r="ASSERT: "+e;throw console.error(r),Error(r)}},d=function(t){return t.timeStamp||Date.now()},p=function(t){if(t){var e=t.changedTouches;if(e&&0<e.length){var r=e[0];return{x:r.clientX,y:r.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}},h=function(t){var e="rtl"===document.dir;switch(t){case"start":return e;case"end":return!e;default:throw Error('"'+t+'" is not a valid value for [side]. Use "start" or "end" instead.')}},f=function(t,e){var r=t._original||t;return{_original:t,emit:b(r.emit.bind(r),e)}},b=function(r,i){var n;return void 0===i&&(i=0),function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];clearTimeout(n),n=setTimeout.apply(void 0,Object(o.d)([r,i],t))}}},96:function(t,e,r){"use strict";r.r(e),r.d(e,"GESTURE_CONTROLLER",function(){return tt}),r.d(e,"createGesture",function(){return p});var i=(n.prototype.createGesture=function(t){return new o(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},n.prototype.createBlocker=function(t){return void 0===t&&(t={}),new a(this,this.newID(),t.disable,!!t.disableScroll)},n.prototype.start=function(t,e,r){return this.canStart(t)?(this.requestedStart.set(e,r),!0):(this.requestedStart.delete(e),!1)},n.prototype.capture=function(t,e,r){if(!this.start(t,e,r))return!1;var i=this.requestedStart,n=-1e4;if(i.forEach(function(t){n=Math.max(n,t)}),n!==r)return i.delete(e),!1;this.capturedId=e,i.clear();var o=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(o),!0},n.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},n.prototype.disableGesture=function(t,e){var r=this.disabledGestures.get(t);void 0===r&&(r=new Set,this.disabledGestures.set(t,r)),r.add(e)},n.prototype.enableGesture=function(t,e){var r=this.disabledGestures.get(t);void 0!==r&&r.delete(e)},n.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add(l)},n.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove(l)},n.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},n.prototype.isCaptured=function(){return void 0!==this.capturedId},n.prototype.isScrollDisabled=function(){return 0<this.disabledScroll.size},n.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);return!(!e||e.size<=0)},n.prototype.newID=function(){return this.gestureId++,this.gestureId},n);function n(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}var o=(s.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},s.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},s.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},s.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},s.prototype.destroy=function(){this.release(),this.ctrl=void 0},s);function s(t,e,r,i,n){this.id=e,this.name=r,this.disableScroll=n,this.priority=1e6*i+e,this.ctrl=t}var a=(c.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.disableGesture(e[t],this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}},c.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.enableGesture(e[t],this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}},c.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},c);function c(t,e,r,i){this.id=e,this.disable=r,this.disableScroll=i,this.ctrl=t}function V(t,e,r,i){var n,o,s=d(t)?{capture:!!i.capture,passive:!!i.passive}:!!i.capture;return o=t.__zone_symbol__addEventListener?(n="__zone_symbol__addEventListener","__zone_symbol__removeEventListener"):(n="addEventListener","removeEventListener"),t[n](e,r,s),function(){t[o](e,r,s)}}function $(t){return t instanceof Document?t:t.ownerDocument}var u,l="backdrop-no-scroll",tt=new i,d=function(t){if(void 0===u)try{var e=Object.defineProperty({},"passive",{get:function(){u=!0}});t.addEventListener("optsTest",function(){},e)}catch(t){u=!1}return!!u},p=function(t){function i(){I=!(O=C=q=!1),N.release()}function e(t){var e=q,r=I;i(),r&&(et(B,t),e?M&&M(B):P&&P(B))}function r(){q&&(O=!1,A&&A(B))}function n(){return!(N&&!N.capture()||(I=!(q=!0),B.startX=B.currentX,B.startY=B.currentY,B.startTimeStamp=B.timeStamp,L?L(B).then(U):U(),0))}var o,s,a,c,u,l,d,p,h,f,b,v,m,y,S,g,w,k,_,X,Y,T,E,D,G,q=!1,C=!1,I=!0,O=!1,j=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),x=j.canStart,L=j.onWillStart,z=j.onStart,M=j.onEnd,P=j.notCaptured,A=j.onMove,R=j.threshold,B={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},F=(k=j.threshold,_="x"===j.direction,X=Math.cos(j.maxAngle*(Math.PI/180)),Y=k*k,D=!1,G=E=T=0,{start:function(t,e){T=t,E=e,D=!(G=0)},detect:function(t,e){if(!D)return!1;var r=t-T,i=e-E,n=r*r+i*i;if(n<Y)return!1;var o=(_?r:i)/Math.sqrt(n);return G=X<o?1:o<-X?-1:0,!(D=!1)},isGesture:function(){return 0!==G},getDirection:function(){return G}}),N=tt.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),U=function(){z&&z(B),I=!0},J=(o=j.el,s=function(t){var e=it(t);return!(C||!I)&&(rt(t,B),B.startX=B.currentX,B.startY=B.currentY,B.startTimeStamp=B.timeStamp=e,B.velocityX=B.velocityY=B.deltaX=B.deltaY=0,B.event=t,(!x||!1!==x(B))&&(N.release(),!!N.start()&&(C=!0,0===R?n():(F.start(B.startX,B.startY),!0))))},c=e,u={capture:!(a=function(t){q?!O&&I&&(O=!0,et(B,t),requestAnimationFrame(r)):(et(B,t),F.detect(B.currentX,B.currentY)&&(F.isGesture()&&n()||Z()))})},m=0,y=function(t){g(),c&&c(t)},S=function(t){w(),c&&c(t)},g=function(){d&&d(),p&&p(),h&&h(),d=p=h=void 0},w=function(){b&&b(),v&&v(),b=v=void 0},{setDisabled:Q,stop:K,destroy:function(){Q(!0),c=a=s=void 0}}),Z=function(){i(),J.stop(),P&&P(B)};function W(t){m=Date.now()+2e3,s(t)&&(!d&&a&&(d=V(o,"touchmove",a,u)),p=p||V(o,"touchend",y,u),h=h||V(o,"touchcancel",y,u))}function H(t){m>Date.now()||s(t)&&(!b&&a&&(b=V($(o),"mousemove",a,u)),v=v||V($(o),"mouseup",S,u))}function K(){g(),w()}function Q(t){t?(l&&l(),f&&f(),l=f=void 0,K()):(l=l||V(o,"touchstart",W,u),f=f||V(o,"mousedown",H,u))}return{setDisabled:function(t){t&&q&&e(void 0),J.setDisabled(t)},destroy:function(){N.destroy(),J.destroy()}}},et=function(t,e){if(e){var r=t.currentX,i=t.currentY,n=t.timeStamp;rt(e,t);var o=t.currentX,s=t.currentY,a=(t.timeStamp=it(e))-n;if(0<a&&a<100){var c=(s-i)/a;t.velocityX=(o-r)/a*.7+.3*t.velocityX,t.velocityY=.7*c+.3*t.velocityY}t.deltaX=o-t.startX,t.deltaY=s-t.startY,t.event=e}},rt=function(t,e){var r=0,i=0;if(t){var n=t.changedTouches;if(n&&0<n.length){var o=n[0];r=o.clientX,i=o.clientY}else void 0!==t.pageX&&(r=t.pageX,i=t.pageY)}e.currentX=r,e.currentY=i},it=function(t){return t.timeStamp||Date.now()}}}]);
//# sourceMappingURL=39.d8bb02814dc12a99951d.js.map