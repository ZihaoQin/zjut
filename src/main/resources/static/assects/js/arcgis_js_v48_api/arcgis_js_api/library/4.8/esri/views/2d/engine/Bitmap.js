// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/tsSupport/extendsHelper","./DisplayObject"],function(n,p,k,l){var m=[0,0];return function(h){function g(b){var a=h.call(this)||this;a.height=0;a.resolution=0;a.rotation=0;a._source=null;a._sourceHandle=null;a.width=0;a.x=0;a.y=0;a.source=b;a.requestRender=a.requestRender.bind(a);return a}k(g,h);Object.defineProperty(g.prototype,"source",{get:function(){return this._source},set:function(b){this._sourceHandle&&(this._sourceHandle.remove(),this._sourceHandle=
null);if(this._source=b)this._sourceHandle=this._source.on("update",this.requestRender);this.requestRender()},enumerable:!0,configurable:!0});g.prototype.doRender=function(b){this.source&&this.source.ready&&this.renderCanvas2D(b)};g.prototype.renderCanvas2D=function(b){var a=this.source,d=b.context,e=b.state;b=e.rotation;var f=this.resolution/e.resolution*e.pixelRatio;if(!(.05>f)){d.save();var c=e.toScreen(m,this.x,this.y),e=c[0],c=c[1];.99<f&&1.01>f?d.translate(Math.round(e),Math.round(c)):(d.translate(e,
c),d.scale(f,f));b&&d.rotate(b*Math.PI/180);a.rotation&&(d.translate(.5*this.width,.5*this.height),d.rotate(-a.rotation*Math.PI/180),d.translate(.5*-this.width,.5*-this.height));c=a.resolution||this.resolution;b=(this.x-a.x)/c;f=-(this.y-a.y)/c;e=this.resolution/c*(a.width||this.width);c=this.resolution/c*(a.height||this.height);d.clearRect(0,0,this.width,this.height);a.draw(d,Math.round(b),Math.round(f),Math.round(e),Math.round(c),0,0,this.width,this.height);d.restore()}};return g}(l)});