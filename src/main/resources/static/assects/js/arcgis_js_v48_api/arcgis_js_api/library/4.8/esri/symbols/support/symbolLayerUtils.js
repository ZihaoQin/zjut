// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../request ../../core/Error ../../core/LRUCache ../../core/promiseUtils ../../geometry/support/aaBoundingBox ../../views/3d/layers/graphics/Graphics3DIconSymbolLayer ../../views/3d/layers/graphics/graphicUtils ../../views/3d/layers/graphics/objectResourceUtils ../../views/3d/layers/graphics/primitiveObjectSymbolUtils".split(" "),function(x,c,l,m,f,d,n,p,q,g,r){function h(a){if(a.resource.href)return t(a.resource.href).then(function(a){return[a.width,a.height]});if(a.resource.primitive)return d.resolve(p.PRIMITIVE_SIZE)}
function u(a){return h(a).then(function(b){if(null==a.size)return b;b=b[0]/b[1];return 1<b?[a.size,a.size/b]:[a.size*b,a.size]})}function t(a){return l(a,{responseType:"image"}).then(function(a){return a.data})}function k(a){return v(a).then(function(a){return n.size(a)})}function w(a){return k(a).then(function(b){return q.computeSizeWithResourceSize(b,a)})}function v(a){if(a.isPrimitive){var b=null;a.resource&&a.resource.primitive&&(b=r.primitiveBoundingBox(a.resource.primitive));return b?d.resolve(b):
d.reject(new m("symbol:invalid-resource","The symbol does not have a valid resource"))}var c=a.resource.href;return e.has(c)?d.resolve(e.use(c)):g.fetch(c).then(function(a){a=g.computeBoundingBox(a);e.insert(c,a);return a})}Object.defineProperty(c,"__esModule",{value:!0});var e=new f(50);c.clearBoundingBoxCache=function(){e=new f(50)};c.computeLayerResourceSize=function(a){if("icon"===a.type)return h(a);if("object"===a.type)return k(a)};c.computeLayerSize=function(a){if("icon"===a.type)return u(a);
if("object"===a.type)return w(a)}});