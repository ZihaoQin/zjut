// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/tsSupport/extendsHelper","./Container"],function(m,n,g,l){return function(c){function b(){return null!==c&&c.apply(this,arguments)||this}g(b,c);b.prototype.createElement=function(){var a=document.createElement("div");a.setAttribute("class","esri-display-object");return a};b.prototype.setElement=function(a){this.element=a};b.prototype.doRender=function(a){var d=this.element.style;this.visible?(d.display="block",c.prototype.doRender.call(this,a)):d.display=
"none"};b.prototype.prepareChildrenRenderParameters=function(a){return a};b.prototype.attachChild=function(a,d){var b=a.element;b||(b=a.createElement(),a.setElement(b));return a.attach(d)};b.prototype.detachChild=function(a,b){a.detach(b);this.element.contains(a.element)&&this.element.removeChild(a.element);a.setElement(null)};b.prototype.renderChildren=function(a){for(var b=this.children,h=this.element.childNodes,e=0,g=b.length,f=0;f<g;f++)if(b[f].attached){var k=b[f].element;h[e]!==k&&(null!=h[e+
1]?this.element.insertBefore(k,h[e]):this.element.appendChild(k));e+=1}c.prototype.renderChildren.call(this,a)};return b}(l)});