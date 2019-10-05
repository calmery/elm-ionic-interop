(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{41:function(i,n,e){"use strict";e.r(n),e.d(n,"ion_infinite_scroll",function(){return s}),e.d(n,"ion_infinite_scroll_content",function(){return a});var r=e(1),l=e(2),t=e(0),o=e(95),s=(c.prototype.thresholdChanged=function(){var i=this.threshold;this.thrPc=~i.lastIndexOf("%")?(this.thrPx=0,parseFloat(i)/100):(this.thrPx=parseFloat(i),0)},c.prototype.disabledChanged=function(){var i=this.disabled;i&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!i)},c.prototype.connectedCallback=function(){return Object(r.a)(this,void 0,void 0,function(){var n,e,t=this;return Object(r.c)(this,function(i){switch(i.label){case 0:return(n=this.el.closest("ion-content"))?(e=this,[4,n.getScrollElement()]):(console.error("<ion-infinite-scroll> must be used inside an <ion-content>"),[2]);case 1:return e.scrollEl=i.sent(),this.thresholdChanged(),this.disabledChanged(),"top"===this.position&&Object(l.m)(function(){t.scrollEl&&(t.scrollEl.scrollTop=t.scrollEl.scrollHeight-t.scrollEl.clientHeight)}),[2]}})})},c.prototype.disconnectedCallback=function(){this.enableScrollEvents(!1),this.scrollEl=void 0},c.prototype.complete=function(){return Object(r.a)(this,void 0,void 0,function(){var n,e,t=this;return Object(r.c)(this,function(){return n=this.scrollEl,this.isLoading&&n&&(this.isLoading=!1,"top"===this.position&&(this.isBusy=!0,e=n.scrollHeight-n.scrollTop,requestAnimationFrame(function(){Object(l.g)(function(){var i=n.scrollHeight-e;requestAnimationFrame(function(){Object(l.m)(function(){n.scrollTop=i,t.isBusy=!1})})})}))),[2]})})},c.prototype.canStart=function(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading)},c.prototype.enableScrollEvents=function(i){this.scrollEl&&(i?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))},c.prototype.render=function(){var i,n=Object(l.e)(this),e=this.disabled;return Object(l.i)(l.a,{class:(i={},i[n]=!0,i["infinite-scroll-loading"]=this.isLoading,i["infinite-scroll-enabled"]=!e,i)})},Object.defineProperty(c.prototype,"el",{get:function(){return Object(l.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(c,"watchers",{get:function(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(c,"style",{get:function(){return"ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}"},enumerable:!0,configurable:!0}),c);function c(i){var o=this;Object(l.l)(this,i),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom",this.onScroll=function(){var i=o.scrollEl;if(!i||!o.canStart())return 1;var n=o.el.offsetHeight;if(0===n)return 2;var e=i.scrollTop,t=i.offsetHeight,r=0!==o.thrPc?t*o.thrPc:o.thrPx;if(("bottom"===o.position?i.scrollHeight-n-e-r-t:e-n-r)<0){if(!o.didFire)return o.isLoading=!0,o.didFire=!0,o.ionInfinite.emit(),3}else o.didFire=!1;return 4},this.ionInfinite=Object(l.d)(this,"ionInfinite",7)}var a=(d.prototype.componentDidLoad=function(){if(void 0===this.loadingSpinner){var i=Object(l.e)(this);this.loadingSpinner=t.b.get("infiniteLoadingSpinner",t.b.get("spinner","ios"===i?"lines":"crescent"))}},d.prototype.render=function(){var i,n=Object(l.e)(this);return Object(l.i)(l.a,{class:(i={},i[n]=!0,i["infinite-scroll-content-"+n]=!0,i)},Object(l.i)("div",{class:"infinite-loading"},this.loadingSpinner&&Object(l.i)("div",{class:"infinite-loading-spinner"},Object(l.i)("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&Object(l.i)("div",{class:"infinite-loading-text",innerHTML:Object(o.a)(this.loadingText)})))},Object.defineProperty(d,"style",{get:function(){return"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600,#666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line{stroke:var(--ion-color-step-600,#666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600,#666)}"},enumerable:!0,configurable:!0}),d);function d(i){Object(l.l)(this,i)}},95:function(i,n,e){"use strict";e.d(n,"a",function(){return t});var t=function(i){try{if("string"!=typeof i||""===i)return i;var l=document.createDocumentFragment(),n=document.createElement("div");l.appendChild(n),n.innerHTML=i,a.forEach(function(i){for(var n=l.querySelectorAll(i),e=n.length-1;0<=e;e--){var t=n[e];t.parentNode?t.parentNode.removeChild(t):l.removeChild(t);for(var r=c(t),o=0;o<r.length;o++)s(r[o])}});for(var e=c(l),t=0;t<e.length;t++)s(e[t]);var r=document.createElement("div");r.appendChild(l);var o=r.querySelector("div");return null!==o?o.innerHTML:r.innerHTML}catch(i){return console.error(i),""}},s=function(i){if(!i.nodeType||1===i.nodeType){for(var n=i.attributes.length-1;0<=n;n--){var e=i.attributes.item(n),t=e.name;if(l.includes(t.toLowerCase())){var r=e.value;null!=r&&r.toLowerCase().includes("javascript:")&&i.removeAttribute(t)}else i.removeAttribute(t)}var o=c(i);for(n=0;n<o.length;n++)s(o[n])}},c=function(i){return null!=i.children?i.children:i.childNodes},l=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]}}]);
//# sourceMappingURL=62.d173b7813607bafcacc1.js.map