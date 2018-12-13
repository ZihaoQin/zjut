// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["../../core/declare","../../core/lang"],function(c,a){return c(null,{declaredClass:"esri.layers.support.LayerTimeOptions",constructor:function(b){b&&a.mixin(this,b)},toJSON:function(){return a.fixJson({timeDataCumulative:this.timeDataCumulative,timeOffset:this.timeOffset,timeOffsetUnits:this.timeOffsetUnits,useTime:this.useTime})}})});