// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/throttle ../../../../core/accessorSupport/decorators ../../../../geometry/Point ../../lib/glMatrix ../debugFlags ../earthUtils ../mathUtils ../PropertiesPool ./PointOfInterest".split(" "),function(g,e,m,h,n,f,p,d,q,k,l,r,t){Object.defineProperty(e,"__esModule",{value:!0});var u=Array;g=function(g){function a(b){b=g.call(this,b)||this;b.propertiesPool=new r.default({location:p,
renderLocation:u},b);b.currentSurfaceAltitude=0;b.latestSurfaceAltitude=0;b.distance=0;b.renderLocation=[0,0,0];return b}m(a,g);e=a;a.prototype.initialize=function(){this.measureSurfaceAltitudeThrottle=n.throttle(this.measureSurfaceAltitude,this.altitudeEstimationInterval,this);this.handles.add(this.measureSurfaceAltitudeThrottle);this.measureSurfaceAltitude()};Object.defineProperty(a.prototype,"location",{get:function(){var b=this.propertiesPool.get("location");this.renderCoordsHelper.fromRenderCoords(this.renderLocation,
b,this.state.spatialReference);return b},enumerable:!0,configurable:!0});a.prototype.update=function(b){this.measureSurfaceAltitudeThrottle();this.updateCenterOnSurface()};a.prototype.forceUpdate=function(){this.measureSurfaceAltitudeThrottle.forceUpdate();this.updateCenterOnSurface()};a.prototype.hasPendingUpdates=function(){return this.measureSurfaceAltitudeThrottle.hasPendingUpdates()};Object.defineProperty(a.prototype,"estimatedSurfaceAltitude",{get:function(){return this.latestSurfaceAltitude},
enumerable:!0,configurable:!0});a.prototype.measureSurfaceAltitude=function(){this.latestSurfaceAltitude=this.estimateSurfaceAltitudeAtCenter();this.updateCenterOnSurface()};a.prototype.updateCenterOnSurface=function(){var b=v,c=this.calculateSurfaceIntersection(this.currentSurfaceAltitude,b),a=this.currentSurfaceAltitude!==this.latestSurfaceAltitude;!c&&a&&(c=this.calculateSurfaceIntersection(this.latestSurfaceAltitude,b))&&(this.currentSurfaceAltitude=this.latestSurfaceAltitude);a=w;c&&this.latestSurfaceAltitudeChangesDistanceSignificantly(b,
a)&&(d.vec3d.set(a,b),this.currentSurfaceAltitude=this.latestSurfaceAltitude);c?(c=d.vec3d.dist(this.state.camera.eye,b),c!==this._get("distance")&&this._set("distance",c)):(c=this.state.camera,d.vec3d.add(d.vec3d.scale(c.viewForward,this._get("distance"),b),c.eye));c=this._get("renderLocation");c[0]===b[0]&&c[1]===b[1]&&c[2]===b[2]||this._set("renderLocation",d.vec3d.set(b,this.propertiesPool.get("renderLocation")))};a.prototype.calculateSurfaceIntersection=function(b,c){var a=this.state.camera;
if(!this.renderCoordsHelper.intersectManifold(a.eye,a.viewForward,b,c))return!1;if(this.state.isGlobal){b=k.earthRadius+b;var e=d.vec3d.length2(a.eye),f=e<b*b,g=d.vec3d.dist(a.eye,c);f&&g>k.earthRadius/4&&d.vec3d.add(d.vec3d.scale(a.viewForward,b-Math.sqrt(e),c),a.eye)}else if(a=this.surface.ready&&this.surface.extent)c[0]=l.clamp(c[0],a[0],a[2]),c[1]=l.clamp(c[1],a[1],a[3]);return!0};a.prototype.latestSurfaceAltitudeChangesDistanceSignificantly=function(a,c){if(this.latestSurfaceAltitude===this.currentSurfaceAltitude||
null==a)return!1;if(this.calculateSurfaceIntersection(this.latestSurfaceAltitude,c)){var b=this.state.camera.eye;a=d.vec3d.dist(b,a);c=d.vec3d.dist(b,c);if(q.TESTS_DISABLE_UPDATE_THROTTLE_THRESHOLDS||Math.abs(c-a)/a>e.RELATIVE_ALTITUDE_CHANGE_THRESHOLD)return!0}return!1};var e;a.RELATIVE_ALTITUDE_CHANGE_THRESHOLD=.05;h([f.property({constructOnly:!0})],a.prototype,"altitudeEstimationInterval",void 0);h([f.property({readOnly:!0})],a.prototype,"distance",void 0);h([f.property({constructOnly:!0})],a.prototype,
"estimateSurfaceAltitudeAtCenter",void 0);h([f.property({readOnly:!0,dependsOn:["renderLocation"]})],a.prototype,"location",null);h([f.property({readOnly:!0})],a.prototype,"renderLocation",void 0);return a=e=h([f.subclass("esri.views.3d.support.CenterOnSurface")],a)}(f.declared(t.PointOfInterest));e.CenterOnSurface=g;var v=d.vec3d.create(),w=d.vec3d.create();e.default=g});