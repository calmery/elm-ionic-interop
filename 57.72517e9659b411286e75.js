(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{101:function(t,e,r){"use strict";r.d(e,"a",function(){return o}),r.d(e,"b",function(){return i}),r.d(e,"c",function(){return s}),r.d(e,"d",function(){return n});var n=function(){var t=window.TapticEngine;t&&t.selection()},o=function(){var t=window.TapticEngine;t&&t.gestureSelectionStart()},i=function(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()},s=function(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}},65:function(t,e,i){"use strict";i.r(e),i.d(e,"ion_reorder",function(){return n}),i.d(e,"ion_reorder_group",function(){return l});var s=i(1),r=i(2),d=(i(0),i(101)),n=(o.prototype.onClick=function(t){t.preventDefault(),t.stopImmediatePropagation()},o.prototype.render=function(){return Object(r.i)(r.a,{class:Object(r.e)(this)},Object(r.i)("slot",null,Object(r.i)("ion-icon",{name:"reorder",lazy:!1,class:"reorder-icon"})))},Object.defineProperty(o,"style",{get:function(){return":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px;font-size:34px;opacity:.4}"},enumerable:!0,configurable:!0}),o);function o(t){Object(r.l)(this,t)}var l=(c.prototype.disabledChanged=function(){this.gesture&&this.gesture.setDisabled(this.disabled)},c.prototype.connectedCallback=function(){return Object(s.a)(this,void 0,void 0,function(){var e,r,n,o=this;return Object(s.c)(this,function(t){switch(t.label){case 0:return(e=this.el.closest("ion-content"))?(r=this,[4,e.getScrollElement()]):[3,2];case 1:r.scrollEl=t.sent(),t.label=2;case 2:return n=this,[4,i.e(1).then(i.bind(null,96))];case 3:return n.gesture=t.sent().createGesture({el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:function(t){return o.canStart(t)},onStart:function(t){return o.onStart(t)},onMove:function(t){return o.onMove(t)},onEnd:function(){return o.onEnd()}}),this.disabledChanged(),[2]}})})},c.prototype.disconnectedCallback=function(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},c.prototype.complete=function(t){return Promise.resolve(this.completeSync(t))},c.prototype.canStart=function(t){if(this.selectedItemEl||0!==this.state)return!1;var e=t.event.target.closest("ion-reorder");if(!e)return!1;var r=a(e,this.el);return!!r&&(t.data=r,!0)},c.prototype.onStart=function(t){t.event.preventDefault();var e=this.selectedItemEl=t.data,r=this.cachedHeights;r.length=0;var n=this.el,o=n.children;if(o&&0!==o.length){for(var i=0,s=0;s<o.length;s++){var l=o[s];r.push(i+=l.offsetHeight),l.$ionIndex=s}var c=n.getBoundingClientRect();if(this.containerTop=c.top,this.containerBottom=c.bottom,this.scrollEl){var a=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=a.top+u,this.scrollElBottom=a.bottom-u}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=h(e),this.selectedItemHeight=e.offsetHeight,this.state=1,e.classList.add(f),Object(d.a)()}},c.prototype.onMove=function(t){var e=this.selectedItemEl;if(e){var r=this.autoscroll(t.currentY),n=this.containerTop-r,o=Math.max(n,Math.min(t.currentY,this.containerBottom-r)),i=r+o-t.startY,s=this.itemIndexForTop(o-n);if(s!==this.lastToIndex){var l=h(e);this.lastToIndex=s,Object(d.b)(),this.reorderMove(l,s)}e.style.transform="translateY("+i+"px)"}},c.prototype.onEnd=function(){var t=this.selectedItemEl;if(this.state=2,t){var e=this.lastToIndex,r=h(t);e===r?this.completeSync():this.ionItemReorder.emit({from:r,to:e,complete:this.completeSync.bind(this)}),Object(d.c)()}else this.state=0},c.prototype.completeSync=function(t){var e=this.selectedItemEl;if(e&&2===this.state){var r=this.el.children,n=r.length,o=this.lastToIndex,i=h(e);o===i||t&&!0!==t||this.el.insertBefore(e,i<o?r[o+1]:r[o]),Array.isArray(t)&&(t=b(t,i,o));for(var s=0;s<n;s++)r[s].style.transform="";e.style.transition="",e.classList.remove(f),this.selectedItemEl=void 0,this.state=0}return t},c.prototype.itemIndexForTop=function(t){var e=this.cachedHeights,r=0;for(r=0;r<e.length&&e[r]<=t;r++);return r},c.prototype.reorderMove=function(t,e){for(var r=this.selectedItemHeight,n=this.el.children,o=0;o<n.length;o++){var i="";t<o&&o<=e?i="translateY("+-r+"px)":o<t&&e<=o&&(i="translateY("+r+"px)"),n[o].style.transform=i}},c.prototype.autoscroll=function(t){if(!this.scrollEl)return 0;var e=0;return t<this.scrollElTop?e=-p:this.scrollElBottom<t&&(e=p),0!==e&&this.scrollEl.scrollBy(0,e),this.scrollEl.scrollTop-this.scrollElInitial},c.prototype.render=function(){var t,e=Object(r.e)(this);return Object(r.i)(r.a,{class:(t={},t[e]=!0,t["reorder-enabled"]=!this.disabled,t["reorder-list-active"]=0!==this.state,t)})},Object.defineProperty(c.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(c,"watchers",{get:function(){return{disabled:["disabledChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(c,"style",{get:function(){return".reorder-list-active>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none!important;transition:none!important;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translateZ(0);transform:translateZ(0)}"},enumerable:!0,configurable:!0}),c);function c(t){Object(r.l)(this,t),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0,this.ionItemReorder=Object(r.d)(this,"ionItemReorder",7)}var h=function(t){return t.$ionIndex},a=function(t,e){for(var r;t;){if((r=t.parentElement)===e)return t;t=r}},u=60,p=10,f="reorder-selected",b=function(t,e,r){var n=t[e];return t.splice(e,1),t.splice(r,0,n),t.slice()}}}]);
//# sourceMappingURL=57.72517e9659b411286e75.js.map