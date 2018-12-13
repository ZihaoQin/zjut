// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/tsSupport/decorateHelper ../../../core/ObjectPool ../tiling ./Bitmap ./Tiled ../tiling/enums".split(" "),function(b,c,d,l,e,f,g,h,k){Object.defineProperty(c,"__esModule",{value:!0});b=function(b){function a(a){a=b.call(this,a)||this;a.key=new f.TileKey(0,0,0,0);return a}d(a,b);a.prototype.acquire=function(a){};a.prototype.release=function(){this.key.set(0,0,0,0);this.status=k.TileStatus.INITIALIZED;this.source=null};a.pool=
new e(a,!0);return a}(h(g));c.default=b});