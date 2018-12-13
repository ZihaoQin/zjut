// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/lang ../core/accessorSupport/decorators ./Extent ./Geometry ./Point ./support/zmUtils".split(" "),function(f,D,A,h,p,g,B,C,m,y){function z(g){return function(b,e){return null==b?e:null==e?b:g(b,e)}}f=function(f){function b(){for(var a=0;a<arguments.length;a++);a=f.call(this)||this;a.points=[];a.type="multipoint";return a}A(b,f);e=b;b.prototype.normalizeCtorArgs=function(a,d){if(!a&&!d)return null;
var c={};Array.isArray(a)?(c.points=a,c.spatialReference=d):!a||"esri.geometry.SpatialReference"!==a.declaredClass&&null==a.wkid?(a.points&&(c.points=a.points),a.spatialReference&&(c.spatialReference=a.spatialReference),a.hasZ&&(c.hasZ=a.hasZ),a.hasM&&(c.hasM=a.hasM)):c.spatialReference=a;if(a=c.points&&c.points[0])void 0===c.hasZ&&void 0===c.hasM?(c.hasZ=2<a.length,c.hasM=!1):void 0===c.hasZ?c.hasZ=3<a.length:void 0===c.hasM&&(c.hasM=3<a.length);return c};Object.defineProperty(b.prototype,"extent",
{get:function(){var a=this.points;if(!a.length)return null;for(var d=new B,c=this.hasZ,b=this.hasM,g=c?3:2,l=a[0],e=z(Math.min),f=z(Math.max),h=l[0],q=l[1],r=l[0],l=l[1],t,u,v,w,x=0,p=a.length;x<p;x++){var k=a[x],n=k[0],m=k[1],h=e(h,n),q=e(q,m),r=f(r,n),l=f(l,m);c&&2<k.length&&(n=k[2],t=e(t,n),v=f(v,n));b&&k.length>g&&(k=k[g],u=e(u,k),w=f(w,k))}d.xmin=h;d.ymin=q;d.xmax=r;d.ymax=l;d.spatialReference=this.spatialReference;c?(d.zmin=t,d.zmax=v):(d.zmin=null,d.zmax=null);b?(d.mmin=u,d.mmax=w):(d.mmin=
null,d.mmax=null);return d},enumerable:!0,configurable:!0});b.prototype.writePoints=function(a,d,c,b){d.points=p.clone(this.points)};b.prototype.addPoint=function(a){this.clearCache();y.updateSupportFromPoint(this,a);Array.isArray(a)?this.points.push(a):this.points.push(a.toArray());return this};b.prototype.clone=function(){var a={points:p.clone(this.points),spatialReference:this.spatialReference};this.hasZ&&(a.hasZ=!0);this.hasM&&(a.hasM=!0);return new e(a)};b.prototype.getPoint=function(a){if(!this._validateInputs(a))return null;
a=this.points[a];var b={x:a[0],y:a[1],spatialReference:this.spatialReference},c=2;this.hasZ&&(b.z=a[2],c=3);this.hasM&&(b.m=a[c]);return new m(b)};b.prototype.removePoint=function(a){if(!this._validateInputs(a))return null;this.clearCache();return new m(this.points.splice(a,1)[0],this.spatialReference)};b.prototype.setPoint=function(a,b){if(!this._validateInputs(a))return this;this.clearCache();y.updateSupportFromPoint(b);this.points[a]=b.toArray();return this};b.prototype.toJSON=function(a){return this.write(null,
a)};b.prototype._validateInputs=function(a){return null!=a&&0<=a&&a<this.points.length};var e;h([g.property({dependsOn:["points","hasZ","hasM","spatialReference"]})],b.prototype,"cache",void 0);h([g.property({dependsOn:["cache"]})],b.prototype,"extent",null);h([g.property({type:[[Number]],json:{write:{isRequired:!0}}})],b.prototype,"points",void 0);h([g.writer("points")],b.prototype,"writePoints",null);return b=e=h([g.subclass("esri.geometry.Multipoint")],b)}(g.declared(C));f.prototype.toJSON.isDefaultToJSON=
!0;return f});