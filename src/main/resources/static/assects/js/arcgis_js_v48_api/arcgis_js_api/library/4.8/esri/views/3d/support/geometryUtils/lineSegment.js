// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","../../lib/glMatrix","../mathUtils"],function(k,e,b,h){function f(a,c){void 0===a&&(a=b.vec3d.create());void 0===c&&(c=b.vec3d.create());return{origin:a,vector:c}}Object.defineProperty(e,"__esModule",{value:!0});e.create=f;e.fromOriginAndVector=function(a,c,d){void 0===d&&(d=f());b.vec3d.set(a,d.origin);b.vec3d.set(c,d.vector);return d};e.distance2=function(a,c){c=b.vec3d.subtract(c,a.origin);var d=b.vec3d.dot(a.vector,c),e=b.vec3d.dot(a.vector,a.vector),d=h.clamp(d/e,
0,1);a=b.vec3d.subtract(b.vec3d.scale(a.vector,d,g),c,g);return b.vec3d.dot(a,a)};var g=b.vec3d.create()});