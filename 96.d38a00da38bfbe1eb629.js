(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{12:function(t,e,r){"use strict";function u(t,i){var a=function(t){for(var e=t.split(C),r=[],n=[],s=0,c=[],o=0;o<e.length;o++){var i=e[o];"}"===i&&s--,0<s?c.push(i):(0<c.length&&(n.push(c.join("")),r.push(L),c=[]),r.push(i)),"{"===i&&s++}return 0<c.length&&(n.push(c.join("")),r.push(L)),{escapedString:r.join(""),blocks:n}}(t),u=0;return a.escapedString.replace(s,function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=t[2],n="",s=t[4],c="";s&&s.startsWith("{"+L)&&(n=a.blocks[u++],s=s.substring(8),c="{");var o=i({selector:r,content:n});return""+t[1]+o.selector+t[3]+c+o.content+s})}function l(t,e,o){return t.replace(e,function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t[2]){for(var r=t[2].split(","),n=[],s=0;s<r.length;s++){var c=r[s].trim();if(!c)break;n.push(o(w,c,t[3]))}return n.join(",")}return w+t[3]})}function p(t,e,r){return t+e.replace(g,"")+r}function h(t,e,r){return~e.indexOf(g)?p(t,e,r):t+e+r+", "+e+" "+t+r}r.r(e),r.d(e,"scopeCss",function(){return c});var f=r(1),g="-shadowcsshost",d="-shadowcssslotted",m="-shadowcsscontext",n=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",v=RegExp("("+g+n,"gim"),_=RegExp("("+m+n,"gim"),x=RegExp("("+d+n,"gim"),w=g+"-no-combinator",b=/-shadowcsshost-no-combinator([^\s]*)/,O=[/::shadow/g,/::content/g],W=/-shadowcsshost/gim,j=/:host/gim,k=/::slotted/gim,E=/:host-context/gim,R=/\/\*\s*[\s\S]*?\*\//g,S=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,s=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,C=/([{}])/g,L="%BLOCK%",B=function(t,o,i,a){return u(t,function(t){var e,r,n,s=t.selector,c=t.content;return"@"!==t.selector[0]?(e=o,r=i,n=a,s=t.selector.split(",").map(function(t){return n&&~t.indexOf("."+n)?t.trim():function(t,e){return!(r=(r=e).replace(/\[/g,"\\[").replace(/\]/g,"\\]"),RegExp("^("+r+")([>\\s~+[.,{:][\\s\\S]*)?$","m")).test(t);var r}(t,e)?function(t,s,c){for(var e,o="."+(s=s.replace(/\[is=([^\]]*)\]/g,function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return e[0]})),r=function(t){var e=t.trim();if(!e)return"";if(~t.indexOf(w))e=function(t,e,r){if(W.lastIndex=0,W.test(t)){var s="."+r;return t.replace(b,function(t,e){return e.replace(/([^:]*)(:*)(.*)/,function(t,e,r,n){return e+s+r+n})}).replace(W,s+" ")}return e+" "+t}(t,s,c);else{var r=t.replace(W,"");if(0<r.length){var n=r.match(/([^:]*)(:*)(.*)/);n&&(e=n[1]+o+n[2]+n[3])}}return e},n=function(){var s=[],c=0;return{content:t.replace(/(\[[^\]]*\])/g,function(t,e){var r="__ph-"+c+"__";return s.push(e),c++,r}).replace(/(:nth-[-\w]+)(\([^)]+\))/g,function(t,e,r){var n="__ph-"+c+"__";return s.push(r),c++,e+n}),placeholders:s}}(),i="",a=0,u=/( |>|\+|~(?!=))\s*/g,l=!~(t=n.content).indexOf(w);null!==(e=u.exec(t));){var p=e[1],h=t.slice(a,e.index).trim();i+=((l=l||!!~h.indexOf(w))?r(h):h)+" "+p+" ",a=u.lastIndex}var f,g=t.substring(a);return i+=(l=l||!!~g.indexOf(w))?r(g):g,f=n.placeholders,i.replace(/__ph-(\d+)__/g,function(t,e){return f[+e]})}(t,e,r).trim():t.trim()}).join(", ")):(t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(c=B(t.content,o,i,a)),{selector:s.replace(/\s{2,}/g," ").trim(),content:c}})},c=function(e,t,r){var n=t+"-h",s=t+"-s",c=e.match(S)||[];e=e.replace(R,"");var o=[];if(r){var i=function(t){var e="/*!@___"+o.length+"___*/";return o.push({placeholder:e,comment:"/*!@"+t.selector+"*/"}),t.selector=e+t.selector,t};e=u(e,function(t){return"@"!==t.selector[0]?i(t):((t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(t.content=u(t.content,i)),t)})}var a=function(t,e,r,n){return c=t=l(t=l(t=t.replace(E,m).replace(j,g).replace(k,d),v,p),_,h),o=n,s=t=c.replace(x,function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t[2]){var r=t[2].trim();return"."+o+" > "+r+t[3]}return w+t[3]}),t=O.reduce(function(t,e){return t.replace(e," ")},s),e&&(t=B(t,e,r,n)),(t=(t=t.replace(/-shadowcsshost-no-combinator/g,"."+r)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim();var s,c,o}(e,t,n,s);return e=Object(f.d)([a],c).join("\n"),r&&o.forEach(function(t){e=e.replace(t.placeholder,t.comment)}),e};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *
 * This file is a port of shadowCSS from webcomponents.js to TypeScript.
 * https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
 * https://github.com/angular/angular/blob/master/packages/compiler/src/shadow_css.ts
 */}}]);
//# sourceMappingURL=96.d38a00da38bfbe1eb629.js.map