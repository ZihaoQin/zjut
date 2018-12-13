// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../geometry/Point ../../../geometry/SpatialReference ../../../geometry/support/aaBoundingRect ../lib/glMatrix ./earthUtils ./mathUtils ../webgl-engine/lib/BufferVectorMath".split(" "),function(P,g,K,F,L,n,M,y,N){function C(a,c,b,e){2===a.length?(d[0]=a[0],d[1]=a[1],d[2]=0,a=d):a===b&&(n.vec3d.set(a,d),a=d);return m(a,c,0,b,e,0,1)}function m(a,c,b,e,f,d,k){void 0===k&&(k=1);G!==c&&(t=u(c),G=c);H!==f&&(z=u(f),H=f);k=b+3*k;if(t!==z||t===h.UNKNOWN&&!c.equals(f))if(t>h.UNKNOWN&&
z>h.UNKNOWN)if(z!==h.WGS84)if(c=O[z],t!==h.WGS84)for(f=v[t];b<k;b+=3,d+=3)f(a,b,l,0),c(l,0,e,d);else for(;b<k;b+=3,d+=3)c(a,b,e,d);else for(f=v[t];b<k;b+=3,d+=3)f(a,b,e,d);else return!1;else if(e!==a||b!==d)for(;b<k;b++,d++)e[d]=a[b];return!0}function u(a){return a.wkt===g.SphericalECEFSpatialReference.wkt?h.SPHERICAL_ECEF:a.isWGS84?h.WGS84:a.isWebMercator?h.WEBMERC:a.wkt===g.WGS84ECEFSpatialReference.wkt?h.WGS84_ECEF:h.UNKNOWN}function I(a,c,b,e){b[e++]=a[c++];b[e++]=a[c++];b[e]=a[c]}function D(a,
c,b,e){var f=.4999999*Math.PI,f=y.clamp(r*a[c+1],-f,f),f=Math.sin(f);b[e++]=r*a[c]*q;b[e++]=q/2*Math.log((1+f)/(1-f));b[e]=a[c+2]}function E(a,c,b,e){var f=q+a[c+2],d=r*a[c+1];a=r*a[c];c=Math.cos(d);b[e++]=Math.cos(a)*c*f;b[e++]=Math.sin(a)*c*f;b[e]=Math.sin(d)*f}Object.defineProperty(g,"__esModule",{value:!0});g.SphericalECEFSpatialReference=new F({wkt:'GEOCCS["Spherical geocentric",\n  DATUM["Not specified",\n    SPHEROID["Sphere",\' + earthUtils.earthRadius + \',0]],\n  PRIMEM["Greenwich",0.0,\n    AUTHORITY["EPSG","8901"]],\n  UNIT["m",1.0],\n  AXIS["Geocentric X",OTHER],\n  AXIS["Geocentric Y",EAST],\n  AXIS["Geocentric Z",NORTH]\n]'});
g.WGS84ECEFSpatialReference=new F({wkt:'GEOCCS["WGS 84",\n  DATUM["WGS_1984",\n    SPHEROID["WGS 84",6378137,298.257223563,\n      AUTHORITY["EPSG","7030"]],\n    AUTHORITY["EPSG","6326"]],\n  PRIMEM["Greenwich",0,\n    AUTHORITY["EPSG","8901"]],\n  UNIT["m",1.0,\n    AUTHORITY["EPSG","9001"]],\n  AXIS["Geocentric X",OTHER],\n  AXIS["Geocentric Y",OTHER],\n  AXIS["Geocentric Z",NORTH],\n  AUTHORITY["EPSG","4978"]\n]'});var h;(function(a){a[a.UNKNOWN=0]="UNKNOWN";a[a.SPHERICAL_ECEF=1]="SPHERICAL_ECEF";
a[a.WGS84=2]="WGS84";a[a.WEBMERC=3]="WEBMERC";a[a.WGS84_ECEF=4]="WGS84_ECEF"})(h||(h={}));var G,t,H,z;g.vectorToVector=C;g.pointToVector=function(a,c,b){d[0]=a.x;d[1]=a.y;var e=a.z;d[2]=void 0!==e?e:0;return m(d,a.spatialReference,0,c,b,0,1)};g.vectorToPoint=function(a,c,b,e){"esri.geometry.SpatialReference"===b.declaredClass?(e=b,b=new K({spatialReference:e})):e=e||b.spatialReference;return m(a,c,0,d,e,0,1)?(b.x=d[0],b.y=d[1],b.z=d[2],b.spatialReference=e,b):null};g.xyzToVector=function(a,c,b,e,
f,h){d[0]=a;d[1]=c;d[2]=b;return m(d,e,0,f,h,0,1)};g.bufferToBuffer=m;g.computeLinearTransformation=function(a,c,b,e){var f=u(a),d=u(e);if(f===d&&d!==h.SPHERICAL_ECEF&&(f!==h.UNKNOWN||a.equals(e)))return n.mat4d.identity(b),n.mat4d.translate(b,c),!0;if(d===h.SPHERICAL_ECEF){if(a=v[f])return a(c,0,l,0),E(l,0,w,0),e=r*l[0],a=r*l[1],c=Math.sin(e),e=Math.cos(e),f=Math.sin(a),a=Math.cos(a),b[0]=-c,b[4]=-f*e,b[8]=a*e,b[12]=w[0],b[1]=e,b[5]=-f*c,b[9]=a*c,b[13]=w[1],b[2]=0,b[6]=a,b[10]=f,b[14]=w[2],b[3]=
0,b[7]=0,b[11]=0,b[15]=1,!0}else if(d===h.WEBMERC&&(f===h.WGS84||f===h.SPHERICAL_ECEF))return v[f](c,0,l,0),c=r*l[1],D(l,0,w,0),n.mat4d.identity(b),n.mat4d.translate(b,w),c=1/Math.cos(c),n.mat4d.scale(b,[c,c,1]),!0;return!1};g.transformDirection=function(a,c,b,e,d){n.vec3d.set(a,A);n.vec3d.add(a,c,B);C(A,b,A,d);C(B,b,B,d);n.vec3d.subtract(B,A,e);n.vec3d.normalize(e)};g.mbsToMbs=function(a,c,b,e){var d=u(c),g=u(e);if(d===g&&(d!==h.UNKNOWN||c.equals(e)))return b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],
!0;if(g===h.SPHERICAL_ECEF){if(c=v[d])return c(a,0,l,0),E(l,0,b,0),b[3]=a[3],!0}else if(g===h.WEBMERC&&(d===h.WGS84||d===h.SPHERICAL_ECEF))return v[d](a,0,l,0),c=Math.abs(r*l[1])+Math.asin(a[3]/(q+a[2])),D(l,0,b,0),b[3]=c>.9999*Math.PI?Number.MAX_VALUE:1/Math.cos(c)*a[3],!0;return!1};g.extentToBoundingBox=function(a,c,b){if(null==a)return!1;var e;d[0]=null!=a.xmin?a.xmin:0;d[1]=null!=a.ymin?a.ymin:0;d[2]=null!=a.zmin?a.zmin:0;e=m(d,a.spatialReference,0,c,b,0,1);d[0]=null!=a.xmax?a.xmax:0;d[1]=null!=
a.ymax?a.ymax:0;d[2]=null!=a.zmax?a.zmax:0;e=e&&m(d,a.spatialReference,0,c,b,3,1);null==a.xmin&&(c[0]=-Infinity);null==a.ymin&&(c[1]=-Infinity);null==a.zmin&&(c[2]=-Infinity);null==a.xmax&&(c[3]=Infinity);null==a.ymax&&(c[4]=Infinity);null==a.zmax&&(c[5]=Infinity);return e};g.extentToBoundingRect=function(a,c,b){if(null==a)return!1;var e;d[0]=null!=a.xmin?a.xmin:0;d[1]=null!=a.ymin?a.ymin:0;d[2]=null!=a.zmin?a.zmin:0;e=m(d,a.spatialReference,0,d,b,0,1);c[0]=d[0];c[1]=d[1];d[0]=null!=a.xmax?a.xmax:
0;d[1]=null!=a.ymax?a.ymax:0;d[2]=null!=a.zmax?a.zmax:0;e=e&&m(d,a.spatialReference,0,d,b,0,1);c[2]=d[0];c[3]=d[1];null==a.xmin&&(c[0]=-Infinity);null==a.ymin&&(c[1]=-Infinity);null==a.xmax&&(c[2]=Infinity);null==a.ymax&&(c[3]=Infinity);return e};g.boundingRectToBoundingRect=function(a,c,b,e){if(null==a)return!1;if(c.equals(e))return L.set(b,a),!0;var f;d[0]=a[0];d[1]=a[1];d[2]=0;f=m(d,c,0,d,e,0,1);b[0]=d[0];b[1]=d[1];d[0]=a[2];d[1]=a[3];d[2]=0;f=f&&m(d,c,0,d,e,0,1);b[2]=d[0];b[3]=d[1];return f};
(function(a){a.x2lon=function(a){return a/q};a.y2lat=function(a){return Math.PI/2-2*Math.atan(Math.exp(-1*a/q))};a.lon2x=function(a){return a*q};a.lat2y=function(a){a=Math.sin(a);return q/2*Math.log((1+a)/(1-a))}})(g.webMercator||(g.webMercator={}));var O=[void 0,E,I,D,function(a,c,b,d){var e=J,h=r*a[c],k=r*a[c+1];a=a[c+2];c=Math.sin(k);var k=Math.cos(k),g=e.a/Math.sqrt(1-e.e2*c*c);b[d++]=(g+a)*k*Math.cos(h);b[d++]=(g+a)*k*Math.sin(h);b[d++]=(g*(1-e.e2)+a)*c}],v=[void 0,function(a,c,b,d){var e=N.Vec3Compact.length(a,
c),h=y.asin(a[c+2]/e);a=(0<a[c+1]?1:-1)*y.acos(a[c]/(Math.cos(h)*e));b[d++]=x*a;b[d++]=x*h;b[d]=e-q},I,function(a,c,b,d){b[d++]=x*(a[c++]/q);b[d++]=x*(Math.PI/2-2*Math.atan(Math.exp(-1*a[c++]/q)));b[d]=a[c]},function(a,c,b,d){var e=J,h=a[c],k=a[c+1];a=a[c+2];var g,n,p,l,m,q;c=Math.abs(a);g=h*h+k*k;n=Math.sqrt(g);p=g+a*a;l=Math.sqrt(p);h=Math.atan2(k,h);m=a*a/p;p=g/p;k=e.a2/l;g=e.a3-e.a4/l;.3<p?(m=c/l*(1+p*(e.a1+k+m*g)/l),l=Math.asin(m),k=m*m,p=Math.sqrt(1-k)):(p=n/l*(1-m*(e.a5-k-p*g)/l),l=Math.acos(p),
k=1-p*p,m=Math.sqrt(k));q=1-e.e2*k;k=e.a/Math.sqrt(q);e=e.a6*k;k=n-k*p;g=c-e*m;c=p*k+m*g;n=p*g-m*k;e=n/(e/q+c);l+=e;0>a&&(l=-l);b[d++]=x*h;b[d++]=x*l;b[d]=c+n*e/2}],r=y.deg2rad(1),x=y.rad2deg(1),q=M.earthRadius,J={a:6378137,e2:.006694379990137799,a1:42697.67270715754,a2:1.8230912546075456E9,a3:142.91722289812412,a4:4.557728136518864E9,a5:42840.589930055656,a6:.9933056200098622},d=n.vec3d.create(),l=n.vec3d.create(),w=n.vec3d.create(),A=n.vec3d.create(),B=n.vec3d.create()});