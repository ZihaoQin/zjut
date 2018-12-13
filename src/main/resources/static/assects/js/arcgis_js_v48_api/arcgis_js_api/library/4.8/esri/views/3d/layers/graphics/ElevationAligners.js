// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../../geometry/Point ./Graphics3DSymbolCommonCode ./graphicUtils ../../lib/glMatrix ../../support/debugFlags ../../support/projectionUtils ../../webgl-engine/lib/Util".split(" "),function(J,l,F,z,G,b,A,v,H){Object.defineProperty(l,"__esModule",{value:!0});var I=H.VertexAttrConstants,w=new F,f=b.vec3d.create(),g=b.vec3d.create(),t=b.vec3d.create(),u=b.vec3d.create(),x=b.mat4d.create(),p={verticalDistanceToGround:0,terrainElevation:0};l.perVertexElevationAligner=function(d,
a,D,c){d=d.stageObject;w.spatialReference=D.spatialReference;for(var h=d.getGeometryRecords(),q=h.length,m="absolute-height"!==a.mode,E=0,b=0;b<q;b++){var e=h[b].geometry,n=h[b].getShaderTransformation(),r=e.getData();g[0]=n[12];g[1]=n[13];g[2]=n[14];e.invalidateBoundingInfo();for(var n=r.getVertexAttr(),r=n[I.POSITION],e=r.data,n=n.mapPos.data,r=r.size,u=e.length/r,k=0,B=0,C=!1,v=0,x=0;x<u;x++){w.x=n[B++];w.y=n[B++];w.z=n[B++];t[0]=e[k];t[1]=e[k+1];t[2]=e[k+2];var y=z.computeElevation(D,w,a,c,m?
p:null);m&&(v+=p.terrainElevation);f[0]=e[k]+g[0];f[1]=e[k+1]+g[1];f[2]=e[k+2]+g[2];c.setAltitude(y,f);e[k]=f[0]-g[0];e[k+1]=f[1]-g[1];e[k+2]=f[2]-g[2];if(A.TESTS_DISABLE_UPDATE_THROTTLE_THRESHOLDS)C=!0;else if(y=l.updateThresholdInMeters/c.unitInMeters,Math.abs(t[0]-e[k])>=y||Math.abs(t[1]-e[k+1])>=y||Math.abs(t[2]-e[k+2])>=y)C=!0;k+=r}E+=v/u;C&&d.geometryVertexAttrsUpdated(b)}return E/q};l.perObjectElevationAligner=function(d,a,b,c,h){d=d.stageObject;var q=a.centerPointInElevationSR,m=0;h=0;if(d.metadata.usesVerticalDistanceToGround)m=
z.computeElevation(b,q,a,c,p),G.updateVertexAttributeAuxpos1w(d,p.verticalDistanceToGround),h=p.terrainElevation;else{var g="absolute-height"!==a.mode,m=z.computeElevation(b,q,a,c,g?p:null);g&&(h=p.terrainElevation)}a=d.getObjectTransformation();b=[a[12],a[13],a[14]];A.DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES?(f[0]=q.x,f[1]=q.y,f[2]=m,v.computeLinearTransformation(q.spatialReference,f,a,c.spatialReference)&&d.setObjectTransformation(a)):c.setAltitudeOfTransformation(m,a);c=l.updateThresholdInMeters/
c.unitInMeters;(Math.abs(a[12]-b[0])>=c||Math.abs(a[13]-b[1])>=c||Math.abs(a[14]-b[2])>=c)&&d.setObjectTransformation(a);return h};l.perLodInstanceElevationAligner=function(b,a,g,c,h){h=a.centerPointInElevationSR;var d=0,m=0,l="absolute-height"!==a.mode,d=z.computeElevation(g,h,a,c,l?p:null);l&&(m=p.terrainElevation);a=b.graphics3DSymbolLayer.lodRenderer.instanceData;a.getTranslation(b.instanceIndex,u);A.DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES?(f[0]=h.x,f[1]=h.y,f[2]=d,v.computeLinearTransformation(h.spatialReference,
f,x,c.spatialReference)&&a.setTransform(b.instanceIndex,x)):c.setAltitude(d,u);a.setTranslation(b.instanceIndex,u);return m};l.updateThresholdInMeters=.01;l.iterativeUpdatesEnabled=!0});