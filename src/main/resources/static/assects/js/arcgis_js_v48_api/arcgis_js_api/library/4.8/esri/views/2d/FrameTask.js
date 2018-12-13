// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/scheduling"],function(g,k,l){Object.defineProperty(k,"__esModule",{value:!0});g=function(){function d(a){var c=this;this.view=a;this._frameTaskHandle=null;this.updateEnabled=this.stationary=!0;this.prepare=function(){c._updateParameters.state=c.view.state;c._updateParameters.stationary=c.view.stationary;c._updateParameters.pixelRatio=window.devicePixelRatio};this.update=function(){if(c.updateEnabled){for(var b=c.view,a=b.labelManager,d=b.allLayerViews.toArray().filter(function(a){return a.isFulfilled()&&
null==a.layerViews}),e=d.length,f=b.state,h=0;h<d.length;h++)if(b=d[h],b.attached){var g=b.lastUpdateId;if(null==g||!c.stationary&&!b.moving)b.moving=!0,b.moveStart();g!==f.id&&b.viewChange();c.stationary&&b.moving&&(b.moving=!1,b.moveEnd());b.lastUpdateId=f.id}a.lastUpdateId!==f.id&&(a.viewChange(),a.lastUpdateId=f.id);a=c._layerViewsTrash;for(f=0;f<a.length;f++)b=a[f],c._detachLayerView(b);for(f=a.length=0;f<e;f++)b=d[f],b.isFulfilled()&&!b.attached&&c._attachLayerView(b);d=c._updateParameters;
e=c._layerViewsToUpdate;b=e.slice();e=e.length=0;for(f=b;e<f.length;e++)b=f[e],b.processUpdate(d);e=c._updatablesToUpdate;b=e.slice();for(e=e.length=0;e<b.length;e++)b[e].processUpdate(d);0===c._layerViewsToUpdate.length&&0===c._updatablesToUpdate.length&&0===a.length&&c._frameTaskHandle.pause()}};a.watch("ready",function(a){a?c.start():c.stop()})}d.prototype.destroy=function(){this.stop()};d.prototype.start=function(){var a=this;this._updateParameters={state:this.view.state,pixelRatio:window.devicePixelRatio,
stationary:!0};this._layerViewsTrash=[];this._layerViewsToUpdate=[];this._updatablesToUpdate=[];this._allLayerViewsChangeHandle=this.view.allLayerViews.on("change",function(c){Array.prototype.push.apply(a._layerViewsTrash,c.removed);a.requestFrame()});this._stationaryHandle=this.view.watch("stationary",function(c){a.stationary=c;a.requestFrame()});this._frameTaskHandle=l.addFrameTask(this)};d.prototype.stop=function(){var a=this;this._frameTaskHandle&&(this.view.allLayerViews.forEach(function(c){return a._detachLayerView(c)}),
this._stationaryHandle.remove(),this._allLayerViewsChangeHandle.remove(),this._frameTaskHandle.remove(),this._updateParameters=this._stationaryHandle=this._allLayerViewsChangeHandle=this._frameTaskHandle=this._layerViewsTrash=this._layerViewsToUpdate=null,this.stationary=!0)};d.prototype.requestLayerViewUpdate=function(a){this._layerViewsToUpdate.push(a);this.requestFrame()};d.prototype.requestUpdate=function(a){this._updatablesToUpdate.push(a);this.requestFrame()};d.prototype.requestFrame=function(){this._frameTaskHandle&&
this._frameTaskHandle.resume()};d.prototype._attachLayerView=function(a){a.attached||(a.attached=!0,a.moving=!1,a.attach())};d.prototype._detachLayerView=function(a){a.attached&&(a.detach(),a.attached=!1,a.moving=!1)};return d}();k.default=g});