// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../Color ../../../core/Accessor ../../../core/accessorSupport/decorators".split(" "),function(h,k,f,c,e,g,b){return function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.color=new e([0,255,255]);a.haloOpacity=1;a.fillOpacity=.5;return a}f(a,d);c([b.property({type:e})],a.prototype,"color",void 0);c([b.property()],a.prototype,"haloOpacity",void 0);c([b.property()],a.prototype,
"fillOpacity",void 0);return a=c([b.subclass("esri.views.2d.support.HighlightOptions")],a)}(b.declared(g))});