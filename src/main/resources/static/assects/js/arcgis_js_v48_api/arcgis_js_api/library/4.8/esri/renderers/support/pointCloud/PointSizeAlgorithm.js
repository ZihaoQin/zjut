// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/JSONSupport ../../../core/kebabDictionary ../../../core/accessorSupport/decorators".split(" "),function(a,b,f,e,g,h,d){Object.defineProperty(b,"__esModule",{value:!0});b.typeKebabDictionary=h({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});a=function(a){function c(){return null!==a&&a.apply(this,arguments)||this}f(c,a);e([d.property({type:String,readOnly:!0,
nonNullable:!0,json:{read:!1,write:b.typeKebabDictionary.write}})],c.prototype,"type",void 0);return c=e([d.subclass("esri.renderers.support.pointCloud.PointSizeAlgorithm")],c)}(d.declared(g));b.PointSizeAlgorithm=a;b.default=a});