// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../Color ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators ../../core/accessorSupport/ensureType ./ImageMeshColor ./MeshColor ./ValueMeshColor".split(" "),function(d,c,l,g,m,n,p,e,q,f,r,h){Object.defineProperty(c,"__esModule",{value:!0});var k={base:r.default,key:"type",defaultKeyValue:"value",typeMap:{value:h,image:f}};d=function(d){function b(a){a=d.call(this)||this;
a.color=null;return a}l(b,d);c=b;b.prototype.castColor=function(a){return a?"string"===typeof a?t.test(a)||m.named[a]?new h({value:a}):new f({url:a}):Array.isArray(a)?new h({value:a}):a instanceof HTMLImageElement?new f({url:a.src}):a instanceof HTMLCanvasElement?new f({url:a.toDataURL()}):q.ensureOneOfType(k,a):a};b.prototype.readColor=function(a,b,c){if(a)switch(a.type){case "image":return new f(a);case "value":return new h(a)}};b.prototype.clone=function(){return new c({color:p.clone(this.color)})};
var c;g([e.property({types:k,json:{write:!0}})],b.prototype,"color",void 0);g([e.cast("color")],b.prototype,"castColor",null);g([e.reader("color")],b.prototype,"readColor",null);return b=c=g([e.subclass("esri.geometry.support.MeshResources")],b)}(e.declared(n));c.MeshMaterial=d;var t=/^\s*(#|rgba?\()/;c.default=d});