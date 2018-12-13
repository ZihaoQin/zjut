// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(F,d){function h(b,a){return Math.round((a-b.translate[0])/b.scale[0])}function p(b,a){return Math.round((b.translate[1]-a)/b.scale[1])}function u(b,a,c){for(var e=[],f,d,t,k,g=0;g<c.length;g++){var l=c[g];if(0<g){if(t=h(b,l[0]),k=p(b,l[1]),t!==f||k!==d)e.push(a(l,t-f,k-d)),f=t,d=k}else f=h(b,l[0]),d=p(b,l[1]),e.push(a(l,f,d))}return 0<e.length?e:null}function z(b,a,c,e){return u(b,c?e?q:g:e?g:r,a)}function A(b,a,c,e){var f=[];c=c?e?q:g:e?g:r;for(e=0;e<a.length;e++){var d=
u(b,c,a[e]);d&&3<=d.length&&f.push(d)}return f.length?f:null}function B(b,a,c,e){var f=[];c=c?e?q:g:e?g:r;for(e=0;e<a.length;e++){var d=u(b,c,a[e]);d&&2<=d.length&&f.push(d)}return f.length?f:null}function m(b,a){return a*b.scale[0]+b.translate[0]}function n(b,a){return b.translate[1]-a*b.scale[1]}function v(b,a,c){var e=Array(c.length);if(!c.length)return e;var f=b.scale,d=f[0],f=f[1],g=m(b,c[0][0]);b=n(b,c[0][1]);e[0]=a(c[0],g,b);for(var k=1;k<c.length;k++){var h=c[k],g=g+h[0]*d;b-=h[1]*f;e[k]=
a(h,g,b)}return e}function w(b,a,c){for(var e=Array(c.length),f=0;f<c.length;f++)e[f]=v(b,a,c[f]);return e}function C(b,a,c,e){return v(b,c?e?q:g:e?g:r,a)}function D(b,a,c,e){return w(b,c?e?q:g:e?g:r,a)}function E(b,a,c,e){return w(b,c?e?q:g:e?g:r,a)}function x(b,a,c){var e=c[0],f=e[0],e=e[1],d=Math.min(f,a[0]),g=Math.min(e,a[1]),k=Math.max(f,a[2]);a=Math.max(e,a[3]);for(var h=1;h<c.length;h++){var l=c[h],m=l[0],l=l[1],f=f+m,e=e+l;0>m&&(d=Math.min(d,f));0<m&&(k=Math.max(k,f));0>l?g=Math.min(g,e):
0<l&&(a=Math.max(a,e))}b[0]=d;b[1]=g;b[2]=k;b[3]=a;return b}function y(b,a){if(!a.length)return null;b[0]=b[1]=Number.POSITIVE_INFINITY;b[2]=b[3]=Number.NEGATIVE_INFINITY;for(var c=0;c<a.length;c++)x(b,b,a[c]);return b}Object.defineProperty(d,"__esModule",{value:!0});var r=function(b,a,c){return[a,c]},g=function(b,a,c){return[a,c,b[2]]},q=function(b,a,c){return[a,c,b[2],b[3]]};d.toTransform=function(b){return{originPosition:"upperLeft",scale:[b.tolerance,b.tolerance],translate:[b.extent.xmin,b.extent.ymax]}};
d.equals=function(b,a){if(b===a||null==b&&null==a)return!0;if(null==b||null==a)return!1;var c,e,f,d;b&&"upperLeft"===b.originPosition?(c=b.translate[0],e=b.translate[1],b=b.scale[0]):(c=b.extent.xmin,e=b.extent.ymax,b=b.tolerance);a&&"upperLeft"===a.originPosition?(f=a.translate[0],d=a.translate[1],a=a.scale[0]):(f=a.extent.xmin,d=a.extent.ymax,a=a.tolerance);return c===f&&e===d&&b===a};d.quantizeX=h;d.quantizeY=p;d.quantizeBounds=function(b,a,c){a[0]=h(b,c[0]);a[3]=p(b,c[1]);a[2]=h(b,c[2]);a[1]=
p(b,c[3]);return a};d.quantizePoints=z;d.quantizeRings=A;d.quantizePaths=B;d.hydrateX=m;d.hydrateY=n;d.hydrateCoordsArray=v;d.hydrateCoordsArrayArray=w;d.hydrateBounds=function(b,a,c){return c?(a[0]=m(b,c[0]),a[1]=n(b,c[3]),a[2]=m(b,c[2]),a[3]=n(b,c[1]),a):[m(b,a[0]),n(b,a[3]),m(b,a[2]),n(b,a[1])]};d.hydratePoints=C;d.hydratePaths=D;d.hydrateRings=E;d.getQuantizedBoundsCoordsArray=x;d.getQuantizedBoundsCoordsArrayArray=y;d.getQuantizedBoundsPoints=function(b){var a=[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,
Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY];return x(a,a,b)};d.getQuantizedBoundsPaths=function(b){return y([0,0,0,0],b)};d.getQuantizedBoundsRings=function(b){return y([0,0,0,0],b)};d.quantizeExtent=function(b,a,c,e,d){a.xmin=h(b,c.xmin);a.ymin=p(b,c.ymin);a.xmax=h(b,c.xmax);a.ymax=p(b,c.ymax);a!==c&&(e&&(a.zmin=c.zmin,a.zmax=c.zmax),d&&(a.mmin=c.mmin,a.mmax=c.mmax));return a};d.quantizeMultipoint=function(b,a,c,e,d){a.points=z(b,c.points,e,d);return a};d.quantizePoint=function(b,a,c,e,d){a.x=
h(b,c.x);a.y=p(b,c.y);a!==c&&(e&&(a.z=c.z),d&&(a.m=c.m));return a};d.quantizePolygon=function(b,a,c,e,d){b=A(b,c.rings,e,d);if(!b)return null;a.rings=b;return a};d.quantizePolyline=function(b,a,c,e,d){b=B(b,c.paths,e,d);if(!b)return null;a.paths=b;return a};d.hydrateExtent=function(b,a,c,e,d){a.xmin=m(b,c.xmin);a.ymin=n(b,c.ymin);a.xmax=m(b,c.xmax);a.ymax=n(b,c.ymax);a!==c&&(e&&(a.zmin=c.zmin,a.zmax=c.zmax),d&&(a.mmin=c.mmin,a.mmax=c.mmax));return a};d.hydrateMultipoint=function(b,a,c,e,d){a.points=
C(b,c.points,e,d);return a};d.hydratePoint=function(b,a,c,e,d){a.x=m(b,c.x);a.y=n(b,c.y);a!==c&&(e&&(a.z=c.z),d&&(a.m=c.m));return a};d.hydratePolygon=function(b,a,c,d,f){a.rings=E(b,c.rings,d,f);return a};d.hydratePolyline=function(b,a,c,d,f){a.paths=D(b,c.paths,d,f);return a}});