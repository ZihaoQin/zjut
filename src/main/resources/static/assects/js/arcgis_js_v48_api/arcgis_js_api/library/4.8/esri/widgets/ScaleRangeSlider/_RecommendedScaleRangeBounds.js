// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["./recommendedScales","../../core/declare"],function(d,e){return e(null,{declaredClass:"esri.dijit.ScaleRangeSlider._RecommendedScaleRangeBounds",beyondMinScale:function(b){var a=this.get("firstRange"),c=a.minScale,a=d.getRecommendedScale(a.id)||a.maxScale;return b<=c&&b>a},beyondMaxScale:function(b){var a=this.get("lastRange"),c=a.maxScale,a=d.getRecommendedScale(a.id)||a.minScale;return b<a&&b>=c}})});