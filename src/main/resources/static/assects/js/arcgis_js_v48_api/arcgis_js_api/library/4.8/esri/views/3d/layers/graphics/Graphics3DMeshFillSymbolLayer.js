// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../Color ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/MeshComponent ../../../../geometry/support/webMercatorUtils ../../../../geometry/support/meshUtils/projection ./ElevationAligners ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolCommonCode ./Graphics3DSymbolLayer ../support/edgeUtils ../support/symbolColorUtils ../../lib/glMatrix ../../support/debugFlags ../../support/projectionUtils ../../webgl-engine/Stage ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/GeometryData ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/Texture ../../webgl-engine/lib/Util ../../webgl-engine/materials/DefaultMaterial ../../webgl-engine/materials/NativeLineMaterial".split(" "),
function(K,ka,T,L,U,V,W,X,Y,Z,q,aa,ba,ca,h,M,da,w,H,I,ea,fa,ga,ha,N){var k=ga.VertexAttrConstants;K=function(E){function e(){var a=null!==E&&E.apply(this,arguments)||this;a._edgeStageObjects=new Set;a._materials={};a._textures={};return a}T(e,E);e.prototype._prepareResources=function(){M.DRAW_MESH_GEOMETRY_NORMALS&&(this._debugVertexNormalMaterial=new N({color:[1,0,1,1]},"debugVertexNormal"),this._debugFaceNormalMaterial=new N({color:[0,1,1,1]},"debugFAceNormal"));this.resolve()};e.prototype.destroy=
function(){E.prototype.destroy.call(this);this.isFulfilled()||this.reject();for(var a in this._materials)this._context.stage.remove(w.ModelContentType.MATERIAL,this._materials[a].material.id);for(a in this._textures)this._context.stage.remove(w.ModelContentType.TEXTURE,this._textures[a].id);this._materials={};this._textures={}};e.prototype.createGraphics3DGraphic=function(a){var b=a.graphic;if("mesh"!==b.geometry.type)return this._logWarning("unsupported geometry type for fill on mesh-3d symbol: "+
b.geometry.type),null;if(!this._validateGeometry(b.geometry))return null;var c="graphic"+b.uid,d=this.getGraphicElevationContext(b);return this._createAs3DShape(b,a.renderingInfo,d,c,b.uid)};e.prototype.layerPropertyChanged=function(a,b,c){if("opacity"===a){b=this._getLayerOpacity();for(var d in this._materials){c=this._materials[d];c.material.setParameterValues({layerOpacity:b});var f=c.material.getParameterValues();this._setMaterialTransparentParameter(f);c.material.setParameterValues({transparent:f.transparent})}if(0<
this._edgeStageObjects.size){var l=this._context.stage.view.getEdgeView(),n=this._getLayerOpacity();this._edgeStageObjects.forEach(function(a){l.updateAllComponentOpacities(a,[n])})}return!0}if("elevationInfo"===a){this._updateElevationContext();for(f in b)if(a=b[f],d=c(a))a=this.getGraphicElevationContext(a.graphic),d.needsElevationUpdates=q.needsElevationUpdates3D(a.mode),d.elevationContext.set(a);return!0}return!1};Object.defineProperty(e.prototype,"numberOfVertices",{get:function(){return 0},
enumerable:!0,configurable:!0});e.prototype._requiresVertexColors=function(){return this._isPropertyDriven("color")||this._isPropertyDriven("opacity")};e.prototype._colorUid=function(a){a=a.material&&a.material.color;if(!a)return"-";if(a)switch(a.type){case "value":return a.value.toHex();case "image":return a.uid}};e.prototype._materialProperties=function(a,b){a=this._requiresVertexColors();var c=b.material&&b.material.color;b=this._colorUid(b);return{hasVertexColors:a,color:c,uid:"vc:"+a+",cmuid:"+
b}};e.prototype._setInternalColorValueParameters=function(a,b){b.diffuse=L.toUnitRGB(a.value);b.opacity=a.value.a};e.prototype._setInternalColorImageParameters=function(a,b,c){var d=a.url;if(d){var f=this._textures[a.uid];f||(f=new fa(d,b+"_"+a.uid+"_tex",{mipmap:!0,wrapClamp:!1,noUnpackFlip:!0}),this._textures[a.uid]=f,this._context.stage.add(w.ModelContentType.TEXTURE,f));c.textureId=f.id}};e.prototype._setInternalMaterialParameters=function(a,b,c){if(a=a.material&&a.material.color)switch(a.type){case "value":this._setInternalColorValueParameters(a,
c);break;case "image":this._setInternalColorImageParameters(a,b,c)}};e.prototype._setExternalMaterialParameters=function(a){if(this._isPropertyDriven("color"))a.externalColor=O;else{var b=this.symbol.material?L.toUnitRGBA(this.symbol.material.color):O;a.externalColor=b}if(b=this.symbol.material&&this.symbol.material.colorMixMode)a.colorMixMode=b};e.prototype._getOrCreateMaterial=function(a,b){a=this._materialProperties(a,b);var c=this._materials[a.uid];if(c)return c.material;var c=this._getStageIdHint(),
d={specular:P,symbolColors:a.hasVertexColors,ambient:P,diffuse:ia,opacity:1,doubleSided:!0,doubleSidedType:"winding-order",cullFace:"none",layerOpacity:this._getLayerOpacity()};this._setInternalMaterialParameters(b,c,d);this._setExternalMaterialParameters(d);this._setMaterialTransparentParameter(d);c=new ha(d,c+"_"+a.uid+"_mat");b=b.material&&b.material.color&&"value"===b.material.color.type&&b.material.color.value;this._materials[a.uid]={geometryOpacity:b?b.a:1,material:c};this._context.stage.add(w.ModelContentType.MATERIAL,
c);return c};e.prototype._setMaterialTransparentParameter=function(a){this._isPropertyDriven("opacity")&&(a.transparent=!0);a.transparent=1>a.layerOpacity||1>a.opacity||a.externalColor&&1>a.externalColor[3]};e.prototype._addDebugNormals=function(a,b,c,d){var f,l,n,e,A=b.length,u=a.spatialReference.isWGS84?20015077/180:1,Q=.1*Math.max(a.extent.width*u,a.extent.height*u,a.extent.zmax-a.extent.zmin),J=[],z=[];a=[];for(var u=[],B=0;B<A;B++)for(var x=b[B],r=x.data.getAttribute(k.POSITION),p=x.data.getAttribute(k.NORMAL),
t=x.data.getIndices(k.POSITION),x=x.data.getIndices(k.NORMAL),r=r.data,p=p.data,v=0;v<t.length;v++){for(var q=3*t[v],w=3*x[v],m=0;3>m;m++)J.push(r[q+m]);for(m=0;3>m;m++)J.push(r[q+m]+p[w+m]*Q);z.push(z.length);z.push(z.length);if(0===v%3){this._calculateFaceNormal(r,t,v,y);this._getFaceVertices(r,t,v,g,C,D);h.vec3d.add(g,C);h.vec3d.add(g,D);h.vec3d.scale(g,1/3);for(m=0;3>m;m++)a.push(g[m]);for(m=0;3>m;m++)a.push(g[m]+y[m]*Q);u.push(u.length);u.push(u.length)}}A=(f={},f[k.POSITION]={data:new Float64Array(J),
size:3},f);f=(l={},l[k.POSITION]=new Uint32Array(z),l);l=new I(A,f,void 0,"line");l=new H(l,"debugVertexNormal");l.singleUse=!0;b.push(l);c.push([this._debugVertexNormalMaterial]);d.push(h.mat4d.create(d[0]));A=(n={},n[k.POSITION]={data:new Float64Array(a),size:3},n);f=(e={},e[k.POSITION]=new Uint32Array(u),e);l=new I(A,f,void 0,"line");l=new H(l,"debugFaceNormal");l.singleUse=!0;b.push(l);c.push([this._debugFaceNormalMaterial]);d.push(h.mat4d.create(d[0]))};e.prototype._createAs3DShape=function(a,
b,c,d,f){var l=this;a=a.geometry;if("mesh"!==a.type)return null;var n=this._createGeometryInfo(a,b,d);if(!n)return null;b=n.geometries;var e=n.materials,g=n.transformations,n=n.objectTransformation;M.DRAW_MESH_GEOMETRY_NORMALS&&this._addDebugNormals(a,b,e,g);var h=new ea({geometries:b,materials:e,transformations:g,castShadow:!0,metadata:{layerUid:this._context.layer.uid,graphicUid:f},idHint:d});h.setObjectTransformation(n);var k=function(a){var b=l._context.stage.view.getEdgeView();if(b){b.removeObject(a);
l._edgeStageObjects.delete(a);var c=ba.createMaterial(b,l.symbol,l._getLayerOpacity());c&&(l._edgeStageObjects.add(a),b.addObject(a,[c],{mergeGeometries:!0}))}};k(h);d=function(a,b,c,d,f){a=Y.perObjectElevationAligner(a,b,c,d,f);k(h);return a};f=new Z(this,h,b,null,null,d,c);f.needsElevationUpdates=q.needsElevationUpdates3D(c.mode);c=a.extent.center.clone();c.z=0;f.elevationContext.centerPointInElevationSR=c;f.alignedTerrainElevation=d(f,f.elevationContext,this._context.elevationProvider,this._context.renderCoordsHelper,
this._context.featureExpressionInfoContext);return f};e.prototype._createComponentNormals=function(a,b,c,d){switch(c.shading||"flat"){case "source":return this._createComponentNormalsSource(a,b,c,d);case "flat":return this._createComponentNormalsFlat(a,c,d);case "smooth":return this._createComponentNormalsSmooth(a,c,d)}};e.prototype._createComponentNormalsSource=function(a,b,c,d){if(!b)return this._createComponentNormalsFlat(a,c,d);c=!1;for(var f=0;f<d.length;f+=3){this._calculateFaceNormal(a,d,f,
y);for(var l=0;3>l;l++){var e=3*d[f+l];g[0]=b[e+0];g[1]=b[e+1];g[2]=b[e+2];0>h.vec3d.dot(y,g)&&(b[e+0]=-b[e+0],b[e+1]=-b[e+1],b[e+2]=-b[e+2],c=!0)}}return{normals:b,indices:d,didFlipNormals:c}};e.prototype._createComponentNormalsFlat=function(a,b,c){b=new Float32Array(c.length);for(var d=new Uint32Array(3*c.length),f=0;f<c.length;f+=3)for(var e=this._calculateFaceNormal(a,c,f,y),h=0;3>h;h++)b[f+h]=e[h],d[f+h]=f/3;return{normals:b,indices:d,didFlipNormals:!1}};e.prototype._createComponentNormalsSmooth=
function(a,b,c){b={};for(var d=0;d<c.length;d+=3)for(var f=this._calculateFaceNormal(a,c,d,y),e=0;3>e;e++){var g=c[d+e],k=b[g];k||(k={normal:h.vec3d.create(),count:0},b[g]=k);h.vec3d.add(k.normal,f);k.count++}a=new Float32Array(3*c.length);f=new Uint32Array(3*c.length);for(d=0;d<c.length;d++){g=c[d];k=b[g];1!==k.count&&(h.vec3d.normalize(h.vec3d.scale(k.normal,1/k.count)),k.count=1);for(e=0;3>e;e++)a[3*d+e]=k.normal[e];f[d]=d}return{normals:a,indices:f,didFlipNormals:!1}};e.prototype._getFaceVertices=
function(a,b,c,d,f,e){var h=3*b[c+0],g=3*b[c+1];b=3*b[c+2];d[0]=a[h+0];d[1]=a[h+1];d[2]=a[h+2];f[0]=a[g+0];f[1]=a[g+1];f[2]=a[g+2];e[0]=a[b+0];e[1]=a[b+1];e[2]=a[b+2]};e.prototype._calculateFaceNormal=function(a,b,c,d){this._getFaceVertices(a,b,c,g,C,D);h.vec3d.subtract(C,g);h.vec3d.subtract(D,g);h.vec3d.cross(C,D,g);h.vec3d.normalize(g,d);return d};e.prototype._getOrCreateComponents=function(a){return a.components?a.components:ja};e.prototype._createPositionBuffer=function(a){var b=a.vertexAttributes.position,
c=new Float64Array(b.length);q.reproject(a.vertexAttributes.position,0,a.spatialReference,c,0,this._context.renderSpatialReference,b.length/3);return c};e.prototype._createNormalBuffer=function(a,b){var c=a.vertexAttributes.normal;if(!c)return null;if("local"===this._context.layerView.view.viewingMode)return c;var d=a.vertexAttributes.position,e=new Float32Array(c.length);return X.projectNormalToECEF(c,d,b,a.spatialReference,e)};e.prototype._createColorBuffer=function(a){if(this._requiresVertexColors()){a=
this._getVertexOpacityAndColor(a);var b=this.symbol.material&&this.symbol.material.colorMixMode||null,c=new Uint8Array(4);ca.encodeSymbolColor(a,b,c);return c}return null};e.prototype._createColorIndices=function(a,b){a=new Uint32Array(b.length);for(b=0;b<a.length;b++)a[b]=0;return a};e.prototype._createBuffers=function(a,b){var c=a.vertexAttributes&&a.vertexAttributes.position;if(!c)return this._logWarning("Mesh geometry must contain position vertex attributes"),null;var d=a.vertexAttributes.normal,
e=a.vertexAttributes.uv;if(d&&d.length!==c.length)return this._logWarning("Mesh normal vertex buffer must contain the same number of elements as the position buffer"),null;if(e&&e.length/2!==c.length/3)return this._logWarning("Mesh uv vertex buffer must contain the same number of elements as the position buffer"),null;c=this._createPositionBuffer(a);b=this._createColorBuffer(b);d=this._createNormalBuffer(a,c);a=this._transformCenterLocal(a,c,d);return{positionBuffer:c,normalBuffer:d,uvBuffer:e,colorBuffer:b,
objectTransformation:a}};e.prototype._transformCenterLocal=function(a,b,c){var d=a.extent.center,e=this._context.renderSpatialReference;F[0]=d.x;F[1]=d.y;F[2]=0;d=h.mat4d.create();da.computeLinearTransformation(a.spatialReference,F,d,e);h.mat4d.inverse(d,R);for(a=0;a<b.length;a+=3)g[0]=b[a+0],g[1]=b[a+1],g[2]=b[a+2],h.mat4d.multiplyVec3(R,g),b[a+0]=g[0],b[a+1]=g[1],b[a+2]=g[2];if(c)for(h.mat4d.toMat3(d,G),h.mat3d.transpose(G,G),a=0;a<c.length;a+=3)g[0]=c[a+0],g[1]=c[a+1],g[2]=c[a+2],h.mat3d.multiplyVec3(G,
g),c[a+0]=g[0],c[a+1]=g[1],c[a+2]=g[2];return d};e.prototype._validateFaces=function(a,b){a=a.vertexAttributes.position.length/3;if(b=b.faces){for(var c=-1,d=0;d<b.length;d++){var e=b[d];e>c&&(c=e)}if(a<=c)return this._logWarning("Vertex index "+c+" is out of bounds of the mesh position buffer"),!1}else if(0!==a%3)return this._logWarning("Mesh position buffer length must be a multiple of 9 if no component faces are defined (3 values per vertex * 3 vertices per triangle)"),!1;return!0};e.prototype._getOrCreateFaces=
function(a,b){if(b.faces)return b.faces;a=new Uint32Array(a.vertexAttributes.position.length/3);for(b=0;b<a.length;b++)a[b]=b;return a};e.prototype._isOutsideClippingArea=function(a){if(!this._context.clippingExtent)return!1;var b=a.vertexAttributes&&a.vertexAttributes.position;if(!b)return!1;var c=this._context.elevationProvider.spatialReference,d=b.length/3;a.spatialReference.equals(c)||(b=new Float64Array(b.length),q.reproject(a.vertexAttributes.position,0,a.spatialReference,b,0,c,d));q.computeBoundingBox(b,
0,d,S);return q.boundingBoxClipped(S,this._context.clippingExtent)};e.prototype._createGeometryInfo=function(a,b,c){var d,e;if(!W.canProject(a,this._context.layerView.view.spatialReference))return this._logWarning("Geometry spatial reference is not compatible with the view"),null;if(this._isOutsideClippingArea(a))return null;var g=this._createBuffers(a,b);if(!g)return null;b=g.positionBuffer;for(var n=g.uvBuffer,q=g.colorBuffer,A=g.normalBuffer,g=g.objectTransformation,u=[],w=[],y=[],z=!1,B=0,x=this._getOrCreateComponents(a);B<
x.length;B++){var r=x[B];if(!this._validateFaces(a,r))return null;var p=this._getOrCreateFaces(a,r);if(0!==p.length){var t=this._createComponentNormals(b,A,r,p);t.didFlipNormals&&(z=!0);var v=(d={},d[k.POSITION]={size:3,data:b},d[k.NORMAL]={size:3,data:t.normals},d),t=(e={},e[k.POSITION]=p,e[k.NORMAL]=t.indices,e);q&&(v[k.SYMBOLCOLOR]={size:4,data:q},t[k.SYMBOLCOLOR]=this._createColorIndices(r,p));a.vertexAttributes.uv&&(v[k.UV0]={size:2,data:n},t[k.UV0]=p);p=new I(v,t);p=new H(p,c+"_mesh");p.singleUse=
!0;u.push(p);w.push(h.mat4d.identity());y.push([this._getOrCreateMaterial(a,r)])}}z&&this._logWarning("Normals have been automatically flipped to be consistent with the counter clock wise face winding order. It is better to generate mesh geometries that have consistent normals.");return{geometries:u,transformations:w,materials:y,objectTransformation:g}};return e}(aa);var ia=[1,1,1],O=[1,1,1,1],P=[0,0,0],F=h.vec3d.create(),g=h.vec3d.create(),C=h.vec3d.create(),D=h.vec3d.create(),y=h.vec3d.create(),
R=h.mat4d.create(),G=h.mat3d.create(),S=U.create(),ja=[new V];return K});