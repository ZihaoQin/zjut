// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../request ../core/Error ../core/promiseUtils ../core/accessorSupport/decorators ./Layer".split(" "),function(k,r,n,p,l,g,d,m,q){return function(e){function b(){return null!==e&&e.apply(this,arguments)||this}n(b,e);b.prototype.getImageUrl=function(c,b,d,a){throw new g("dynamiclayer:getImageUrl-not-implemented","getImageUrl() is not implemented");};b.prototype.fetchImage=function(c,b,e,a){c=this.getImageUrl(c,
b,e,a);var h={responseType:"image",allowImageDataAccess:a&&a.allowImageDataAccess||!1};a&&a.timestamp&&(h.query={_ts:a.timestamp});var f;"string"===typeof c?(f=c,a=l(c,h)):a=c.then(function(a){f=a;return l(f,h)});return a.then(function(a){return a.data}).catch(function(a){return a&&"cancel"===a.dojoType?d.reject(a):f?d.reject(new g("dynamiclayer:image-fetch-error","Unable to load image: "+f,{error:a})):d.reject(new g("dynamiclayer:getImageUrl-error","Unable to create image url",{error:a}))})};b.prototype.importLayerViewModule=
function(b){switch(b.type){case "2d":return d.create(function(b){return k(["../views/2d/layers/MapImageLayerView2D"],b)});case "3d":return d.create(function(b){return k(["../views/3d/layers/MapImageLayerView3D"],b)})}};return b=p([m.subclass("esri.layers.DynamicLayer")],b)}(m.declared(q))});