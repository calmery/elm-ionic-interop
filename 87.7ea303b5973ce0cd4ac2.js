(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{39:function(t,i,o){"use strict";o.r(i),o.d(i,"ion_img",function(){return n});var e=o(2),n=(o(0),r.prototype.srcChanged=function(){this.addIO()},r.prototype.componentDidLoad=function(){this.addIO()},r.prototype.addIO=function(){var i=this;void 0!==this.src&&("IntersectionObserver"in window?(this.removeIO(),this.io=new IntersectionObserver(function(t){t[0].isIntersecting&&(i.load(),i.removeIO())}),this.io.observe(this.el)):setTimeout(function(){return i.load()},200))},r.prototype.load=function(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()},r.prototype.removeIO=function(){this.io&&(this.io.disconnect(),this.io=void 0)},r.prototype.render=function(){return Object(e.i)(e.a,{class:Object(e.e)(this)},Object(e.i)("img",{decoding:"async",src:this.loadSrc,alt:this.alt,onLoad:this.onLoad,onError:this.loadError}))},Object.defineProperty(r.prototype,"el",{get:function(){return Object(e.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(r,"watchers",{get:function(){return{src:["srcChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(r,"style",{get:function(){return":host{-o-object-fit:contain;object-fit:contain}:host,img{display:block}img{width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"},enumerable:!0,configurable:!0}),r);function r(t){var i=this;Object(e.l)(this,t),this.onLoad=function(){i.ionImgDidLoad.emit()},this.onError=function(){i.ionError.emit()},this.ionImgWillLoad=Object(e.d)(this,"ionImgWillLoad",7),this.ionImgDidLoad=Object(e.d)(this,"ionImgDidLoad",7),this.ionError=Object(e.d)(this,"ionError",7)}}}]);
//# sourceMappingURL=87.7ea303b5973ce0cd4ac2.js.map