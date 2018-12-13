// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/kebabDictionary ../../core/urlUtils ../../core/accessorSupport/decorators".split(" "),function(b,d,h,e,k,l,f,c){Object.defineProperty(d,"__esModule",{value:!0});var g=l({invertedCone:"inverted-cone"});b=function(b){function a(){return null!==b&&b.apply(this,arguments)||this}h(a,b);d=a;a.prototype.readHref=function(a,c,b){return f.read(a,b)};a.prototype.writeHref=
function(a,b,c,d){a&&(b.href=f.write(a,d),f.isAbsolute(b.href)&&(b.href=f.normalize(b.href)))};a.prototype.readPrimitive=function(a){return g.fromJSON(a)};a.prototype.writePrimitive=function(a,b){b.primitive=g.toJSON(a)};a.prototype.clone=function(){return new d({href:this.href,primitive:this.primitive})};var d;e([c.property({type:String,json:{write:!0}})],a.prototype,"href",void 0);e([c.reader("href")],a.prototype,"readHref",null);e([c.writer("href")],a.prototype,"writeHref",null);e([c.property({type:String,
json:{write:!0}})],a.prototype,"primitive",void 0);e([c.reader("primitive")],a.prototype,"readPrimitive",null);e([c.writer("primitive")],a.prototype,"writePrimitive",null);return a=d=e([c.subclass("esri.symbols.support.ObjectSymbol3DLayerResource")],a)}(c.declared(k));d.ObjectSymbol3DLayerResource=b;d.default=b});