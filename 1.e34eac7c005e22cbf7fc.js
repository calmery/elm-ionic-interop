(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{96:function(t,e,r){"use strict";r.r(e),r.d(e,"GESTURE_CONTROLLER",function(){return tt}),r.d(e,"createGesture",function(){return h});var i=(n.prototype.createGesture=function(t){return new s(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},n.prototype.createBlocker=function(t){return void 0===t&&(t={}),new a(this,this.newID(),t.disable,!!t.disableScroll)},n.prototype.start=function(t,e,r){return this.canStart(t)?(this.requestedStart.set(e,r),!0):(this.requestedStart.delete(e),!1)},n.prototype.capture=function(t,e,r){if(!this.start(t,e,r))return!1;var i=this.requestedStart,n=-1e4;if(i.forEach(function(t){n=Math.max(n,t)}),n!==r)return i.delete(e),!1;this.capturedId=e,i.clear();var s=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(s),!0},n.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},n.prototype.disableGesture=function(t,e){var r=this.disabledGestures.get(t);void 0===r&&(r=new Set,this.disabledGestures.set(t,r)),r.add(e)},n.prototype.enableGesture=function(t,e){var r=this.disabledGestures.get(t);void 0!==r&&r.delete(e)},n.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add(l)},n.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove(l)},n.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},n.prototype.isCaptured=function(){return void 0!==this.capturedId},n.prototype.isScrollDisabled=function(){return 0<this.disabledScroll.size},n.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);return!(!e||e.size<=0)},n.prototype.newID=function(){return this.gestureId++,this.gestureId},n);function n(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}var s=(o.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},o.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},o.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},o.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},o.prototype.destroy=function(){this.release(),this.ctrl=void 0},o);function o(t,e,r,i,n){this.id=e,this.name=r,this.disableScroll=n,this.priority=1e6*i+e,this.ctrl=t}var a=(c.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.disableGesture(e[t],this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}},c.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.enableGesture(e[t],this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}},c.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},c);function c(t,e,r,i){this.id=e,this.disable=r,this.disableScroll=i,this.ctrl=t}function Z(t,e,r,i){var n,s,o=d(t)?{capture:!!i.capture,passive:!!i.passive}:!!i.capture;return s=t.__zone_symbol__addEventListener?(n="__zone_symbol__addEventListener","__zone_symbol__removeEventListener"):(n="addEventListener","removeEventListener"),t[n](e,r,o),function(){t[s](e,r,o)}}function $(t){return t instanceof Document?t:t.ownerDocument}var u,l="backdrop-no-scroll",tt=new i,d=function(t){if(void 0===u)try{var e=Object.defineProperty({},"passive",{get:function(){u=!0}});t.addEventListener("optsTest",function(){},e)}catch(t){u=!1}return!!u},h=function(t){function i(){z=!(M=q=k=!1),B.release()}function e(t){var e=k,r=z;i(),r&&(et(j,t),e?P&&P(j):A&&A(j))}function r(){k&&(M=!1,N&&N(j))}function n(){return!(B&&!B.capture()||(z=!(k=!0),j.startX=j.currentX,j.startY=j.currentY,j.startTimeStamp=j.timeStamp,C?C(j).then(F):F(),0))}var s,o,a,c,u,l,d,h,p,f,v,b,y,m,S,g,w,X,Y,G,_,D,E,I,L,k=!1,q=!1,z=!0,M=!1,T=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),x=T.canStart,C=T.onWillStart,O=T.onStart,P=T.onEnd,A=T.notCaptured,N=T.onMove,R=T.threshold,j={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},J=(X=T.threshold,Y="x"===T.direction,G=Math.cos(T.maxAngle*(Math.PI/180)),_=X*X,I=!1,L=E=D=0,{start:function(t,e){D=t,E=e,I=!(L=0)},detect:function(t,e){if(!I)return!1;var r=t-D,i=e-E,n=r*r+i*i;if(n<_)return!1;var s=(Y?r:i)/Math.sqrt(n);return L=G<s?1:s<-G?-1:0,!(I=!1)},isGesture:function(){return 0!==L},getDirection:function(){return L}}),B=tt.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),F=function(){O&&O(j),z=!0},U=(s=T.el,o=function(t){var e=it(t);return!(q||!z)&&(rt(t,j),j.startX=j.currentX,j.startY=j.currentY,j.startTimeStamp=j.timeStamp=e,j.velocityX=j.velocityY=j.deltaX=j.deltaY=0,j.event=t,(!x||!1!==x(j))&&(B.release(),!!B.start()&&(q=!0,0===R?n():(J.start(j.startX,j.startY),!0))))},c=e,u={capture:!(a=function(t){k?!M&&z&&(M=!0,et(j,t),requestAnimationFrame(r)):(et(j,t),J.detect(j.currentX,j.currentY)&&(J.isGesture()&&n()||W()))})},y=0,m=function(t){g(),c&&c(t)},S=function(t){w(),c&&c(t)},g=function(){d&&d(),h&&h(),p&&p(),d=h=p=void 0},w=function(){v&&v(),b&&b(),v=b=void 0},{setDisabled:V,stop:Q,destroy:function(){V(!0),c=a=o=void 0}}),W=function(){i(),U.stop(),A&&A(j)};function H(t){y=Date.now()+2e3,o(t)&&(!d&&a&&(d=Z(s,"touchmove",a,u)),h=h||Z(s,"touchend",m,u),p=p||Z(s,"touchcancel",m,u))}function K(t){y>Date.now()||o(t)&&(!v&&a&&(v=Z($(s),"mousemove",a,u)),b=b||Z($(s),"mouseup",S,u))}function Q(){g(),w()}function V(t){t?(l&&l(),f&&f(),l=f=void 0,Q()):(l=l||Z(s,"touchstart",H,u),f=f||Z(s,"mousedown",K,u))}return{setDisabled:function(t){t&&k&&e(void 0),U.setDisabled(t)},destroy:function(){B.destroy(),U.destroy()}}},et=function(t,e){if(e){var r=t.currentX,i=t.currentY,n=t.timeStamp;rt(e,t);var s=t.currentX,o=t.currentY,a=(t.timeStamp=it(e))-n;if(0<a&&a<100){var c=(o-i)/a;t.velocityX=(s-r)/a*.7+.3*t.velocityX,t.velocityY=.7*c+.3*t.velocityY}t.deltaX=s-t.startX,t.deltaY=o-t.startY,t.event=e}},rt=function(t,e){var r=0,i=0;if(t){var n=t.changedTouches;if(n&&0<n.length){var s=n[0];r=s.clientX,i=s.clientY}else void 0!==t.pageX&&(r=t.pageX,i=t.pageY)}e.currentX=r,e.currentY=i},it=function(t){return t.timeStamp||Date.now()}}}]);
//# sourceMappingURL=1.e34eac7c005e22cbf7fc.js.map