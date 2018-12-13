// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","./gl-matrix"],function(p,q,c){var f=c.vec3d,b=c.mat4d;return function(){function a(e,d,a,b,c,g,h,k,l,m,n){this.shaderTransformationDirty=!0;this.data=e.toRenderData();this.componentOffsets=e.componentOffsets;this.boundingInfo=d;this.material=a;this.origin=null;this.center=f.create();this.bsRadius=0;this.transformation=null;this.calculateShaderTransformation=c;b&&this.updateTransformation(b,g);this.castShadow=h;this.singleUse=k;this.name=l;this.uniqueName=m;this.idx=n;
this.canBeMerged=!0;this.instanceParameters={}}a.prototype.updateTransformation=function(a,b){this.transformation=a;this.shaderTransformationDirty=!0;this.bsRadius=this.getBoundingSphere(a,b,this.center)};a.prototype.shaderTransformationChanged=function(){this.shaderTransformationDirty=!0};a.prototype.getBoundingSphere=function(a,d,c){d=d||b.maxScale(a);b.multiplyVec3(a,this.boundingInfo.getCenter(),c);return this.boundingInfo.getBSRadius()*d};Object.defineProperty(a.prototype,"hasShaderTransformation",
{get:function(){return!!this.calculateShaderTransformation},enumerable:!0,configurable:!0});a.prototype.getShaderTransformation=function(){return this.calculateShaderTransformation?(this.shaderTransformationDirty&&(this.shaderTransformation||(this.shaderTransformation=b.create()),b.set(this.calculateShaderTransformation(this.transformation),this.shaderTransformation),this.shaderTransformationDirty=!1),this.shaderTransformation):this.transformation};return a}()});