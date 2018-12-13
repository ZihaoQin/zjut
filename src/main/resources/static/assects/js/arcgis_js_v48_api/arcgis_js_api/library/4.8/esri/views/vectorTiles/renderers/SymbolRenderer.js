// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","./IconRenderer","./SDFRenderer"],function(r,t,c,d){return function(){function a(){this._iconRenderer=new c;this._sdfRenderer=new d}a.prototype.dispose=function(){this._iconRenderer&&(this._iconRenderer.dispose(),this._iconRenderer=null);this._sdfRenderer&&(this._sdfRenderer.dispose(),this._sdfRenderer=null)};a.prototype.render=function(a,b,e,f,g,h,k,l,c,d,m,n,q,p){b.hasData()&&(0<b.markerPerPageElementsMap.size&&this._iconRenderer.render(a,b,e,f,g,h,k,l,c,m,n,p),0<b.glyphPerPageElementsMap.size&&
this._sdfRenderer.render(a,b,e,f,g,h,k,l,d,m,n,q,p))};return a}()});