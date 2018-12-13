// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../lib/glMatrix ../../support/mathUtils ../lib/LongVectorMath ./Lightsources".split(" "),function(D,f,y,z,k,m){function q(b){return(b+1)*(b+1)}function u(b){return z.clamp(Math.floor(Math.sqrt(b)-1),0,2)}function r(b,a,c){var d=b[0],g=b[1];b=b[2];c=c||[];c.length=q(a);0<=a&&(c[0]=.28209479177);1<=a&&(c[1]=.4886025119*d,c[2]=.4886025119*b,c[3]=.4886025119*g);2<=a&&(c[4]=1.09254843059*d*g,c[5]=1.09254843059*g*b,c[6]=.31539156525*(3*b*b-1),c[7]=1.09254843059*d*b,c[8]=.54627421529*
(d*d-g*g));return c}function v(b,a){b=q(b);a=a||{r:[],g:[],b:[]};a.r.length=a.g.length=a.b.length=b;for(var c=0;c<b;c++)a.r[c]=a.g[c]=a.b[c]=0;return a}function w(b,a){for(var c=u(a.r.length),d=0;d<b.length;d++){var g=b[d];n.negate(g.direction,t);r(t,c,h);k.elementwiseProduct(h,p);k.scalarProduct(h,g.intensity[0],l);k.add(a.r,l);k.scalarProduct(h,g.intensity[1],l);k.add(a.g,l);k.scalarProduct(h,g.intensity[2],l);k.add(a.b,l)}return a}function x(b,a){r(t,0,h);for(var c=0;c<b.length;c++){var d=b[c];
a.r[0]+=h[0]*p[0]*d.intensity[0]*4*Math.PI;a.g[0]+=h[0]*p[0]*d.intensity[1]*4*Math.PI;a.b[0]+=h[0]*p[0]*d.intensity[2]*4*Math.PI}return a}Object.defineProperty(f,"__esModule",{value:!0});var n=y.vec3d;f.numberOfCoefficients=q;f.numberOfCoefficientsInBand=function(b){return 2*b+1};f.orderFromNumberOfCoefficients=u;f.computeCoefficients=r;f.initSHCoefficients=v;f.projectFillLights=w;f.projectAmbientLights=x;f.combineLights=function(b,a,c,d){v(a,d.sh);n.set3(0,0,0,c.intensity);var g=!1,f=A,h=B;a=C;f.length=
0;h.length=0;for(var l=a.length=0;l<b.length;l++){var e=b[l];e instanceof m.MainLight&&!g?(n.set(e.direction,c.direction),c.intensity[0]=e.intensity[0],c.intensity[1]=e.intensity[1],c.intensity[2]=e.intensity[2],c.castShadows=e.castShadows,g=!0):e instanceof m.MainLight||e instanceof m.FillLight?f.push(e):e instanceof m.AmbientLight?h.push(e):e instanceof m.SphericalHarmonicsLight&&a.push(e)}w(f,d.sh);x(h,d.sh);for(b=0;b<a.length;b++)e=a[b],k.add(d.sh.r,e.sh.r),k.add(d.sh.g,e.sh.g),k.add(d.sh.b,e.sh.b)};
var A=[],B=[],C=[],h=[0],l=[0],t=n.create(),p=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398]});