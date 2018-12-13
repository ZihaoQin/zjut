// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","./viewUtils","../../../lib/glMatrix"],function(A,c,r,a){function t(e,b,a){e.projectPoint(b,d);if(0>d[2]||1<d[2])return!1;a[0]=d[0];a[1]=d[1];l(e,a);return!0}function u(e,b,z,m,h,g){if(!b)return!1;r.screenSpaceTangent(b.start,b.end,p,e);a.vec2d.set2(-p[1],p[0],f);var c=!1;switch(m){case "top":c=0>f[1];break;case "bottom":c=0<f[1];break;case "left":c=0<f[0];break;case "right":c=0>f[0]}c&&a.vec2d.negate(f);if(0===a.vec2d.length(f))switch(m){case "top":f[1]=1;break;case "bottom":f[1]=
-1;break;case "left":f[0]=-1;break;case "right":f[0]=1}e.projectPoint(b.origin,d);if(0>d[2]||1<d[2])return!1;h[0]=d[0];h[1]=d[1];a.vec2d.scale(f,z,g);a.vec2d.add(g,h,g);l(e,h);l(e,g);return!0}function v(e,b,c,m,h,g){if(!b||!c)return!1;r.screenSpaceTangent(b.end,b.start,p,e);r.screenSpaceTangent(c.start,c.end,w,e);a.vec2d.add(p,w,f);a.vec2d.negate(f);a.vec2d.normalize(f);e.projectPoint(b.end,d);if(0>d[2]||1<d[2])return!1;h[0]=d[0];h[1]=d[1];a.vec2d.scale(f,m,g);a.vec2d.add(g,h,g);l(e,h);l(e,g);return!0}
function x(e,b,c,m,h,g){e.projectPoint(b,d);a.vec3d.add(b,c,y);e.projectPoint(y,q);if(0>d[2]||1<d[2]||0>q[2]||1<q[2])return!1;a.vec2d.subtract(q,d,f);a.vec2d.normalize(f);a.vec2d.set(d,h);a.vec2d.scale(f,m,g);a.vec2d.add(g,h,g);l(e,h);l(e,g);return!0}function l(e,b){b[1]=e.fullHeight-b[1]}Object.defineProperty(c,"__esModule",{value:!0});c.mirrorPosition=function(e){switch(e){case "top":return"bottom";case "right":return"left";case "bottom":return"top";case "left":return"right"}};c.computeLabelPositionFromPoint=
t;c.positionLabelOnPoint=function(e,b,a){(b=t(a,b,k))&&e.updatePosition(k,null);return b};c.computeLabelPositionFromSegment=u;c.positionLabelOnSegment=function(a,b,c,d,f){(b=u(f,b,c,d,k,n))&&a.updatePosition(k,n);return b};c.computeLabelPositionFromCorner=v;c.computeLabelPositionFromPlane=x;c.positionLabelOnCorner=function(a,b,c,d,f){(b=v(f,b,c,d,k,n))&&a.updatePosition(k,n);return b};c.positionLabelOnPlane=function(a,b,c,d,f,g){(b=x(g,b,c,d,k,n))&&a.updatePosition(k,n);return b};var p=a.vec2d.create(),
w=a.vec2d.create(),f=a.vec2d.create(),d=a.vec3d.create(),q=a.vec3d.create(),y=a.vec3d.create(),k=a.vec2d.create(),n=a.vec2d.create()});