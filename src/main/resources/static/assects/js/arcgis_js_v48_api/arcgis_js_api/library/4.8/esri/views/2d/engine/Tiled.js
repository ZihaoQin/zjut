// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/tsSupport/extendsHelper","./Evented","../tiling/enums"],function(g,h,d,e,f){return function(a){a=function(a){function c(){for(var b=0;b<arguments.length;b++);b=a.call(this)||this;b.status=f.TileStatus.INITIALIZED;return b}d(c,a);return c}(a);return e.EventedMixin(a)}});