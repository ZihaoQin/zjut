// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["../../core/declare","../../core/lang"],function(c,b){return c(null,{declaredClass:"esri.layers.support.DimensionalDefinition",variableName:null,dimensionName:null,values:[],isSlice:!1,constructor:function(a){a&&"object"===typeof a&&b.mixin(this,a)},toJSON:function(){return b.filter({variableName:this.variableName,dimensionName:this.dimensionName,values:this.values,isSlice:this.isSlice},function(a){return null!==a})}})});