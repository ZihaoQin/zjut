// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(c,d){return function(a,b){a.geometryType=b&7;b>>=3;a.sdf=0!==(b&4);a.vvSizeMinMaxValue=0!==(b&8);a.vvSizeScaleStops=0!==(b&16);a.vvSizeFieldStops=0!==(b&32);a.vvSizeUnitValue=0!==(b&64);a.vvColor=0!==(b&128);a.vvRotation=0!==(b&256);a.vvOpacity=0!==(b&512);a.visibility=0!==(b&1024);a.pattern=0!==(b&2048);a.heatmap=0!==(b&4096);return a}});