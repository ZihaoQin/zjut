// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(c,d){return function(){function b(){this.heatmap=this.pattern=this.visibility=this.vvOpacity=this.vvRotation=this.vvColor=this.vvSizeUnitValue=this.vvSizeFieldStops=this.vvSizeScaleStops=this.vvSizeMinMaxValue=this.sdf=!1}b.prototype.copy=function(a){this.geometryType=a.geometryType;this.sdf=a.sdf;this.vvSizeMinMaxValue=a.vvSizeMinMaxValue;this.vvSizeScaleStops=a.vvSizeScaleStops;this.vvSizeFieldStops=a.vvSizeFieldStops;this.vvSizeUnitValue=a.vvSizeUnitValue;
this.vvColor=a.vvColor;this.vvRotation=a.vvRotation;this.vvOpacity=a.vvOpacity;this.visibility=a.visibility;this.pattern=a.pattern;this.heatmap=a.heatmap};b.prototype.hasVV=function(){void 0===this._hasVV&&(this._hasVV=this.vvColor||this.vvOpacity||this.vvRotation||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue);return this._hasVV};b.prototype.hasVVSize=function(){return this.vvSizeMinMaxValue||this.vvSizeFieldStops||this.vvSizeScaleStops||this.vvSizeUnitValue};
b.prototype.hasVVColor=function(){return this.vvColor};b.prototype.hasVVRotation=function(){return this.vvRotation};b.prototype.hasVVOpacity=function(){return this.vvOpacity};return b}()});