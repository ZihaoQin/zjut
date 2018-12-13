// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/ObjectPool ./TerrainConst ./TileAgent ./UpsampleInfo".split(" "),function(m,n,h,k,e,l,g){return function(d){function a(){var b=null!==d&&d.apply(this,arguments)||this;b._scaleRangeEnabled=!1;return b}h(a,d);a.prototype.dataArrived=function(b){b!==this.tile?this._setUpsamplingTile(b):(this._unsetUpsamplingTile(),this.updateGeometry());this._dataRequested=null;this._requestNext()};a.prototype.updateGeometry=function(){this._tileLayerInfo.pendingUpdates|=
e.TileUpdateTypes.UPDATE_GEOMETRY;this.tile.updateGeometry()};a.prototype._findAncestorWithData=function(){for(var b=this.layerClass,a=this.layerIdx,c=this.tile,d=c.vlevel,f;c&&!(c.layerInfo[b][a].data&&(f=c,d-c.lij[0]>=e.ELEVATION_DESIRED_RESOLUTION_LEVEL));)c=c.parent;return f?(b=g.Pool.acquire(),b.init(f,0,0,1),b):null};a.prototype._desiredMinLevelDelta=function(){return e.ELEVATION_DESIRED_RESOLUTION_LEVEL-(this.tile.vlevel-this.tile.lij[0])};a.prototype._setUpsamplingTile=function(b){this._unsetUpsamplingTile();
var a=g.Pool.acquire();a.init(b,0,0,1);this._tileLayerInfo.upsampleFromTile=a;this.updateGeometry()};a.Pool=new k(a);return a}(l)});