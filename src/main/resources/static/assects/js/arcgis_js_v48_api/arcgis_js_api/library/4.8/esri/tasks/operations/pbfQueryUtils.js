// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../core/Error ../../core/Logger ../../core/pbf ../../layers/graphics/optimizedFeatures".split(" "),function(P,y,E,I,J,v){function F(a){if(a>=z.length){var f=new E("query:parsing-pbf","Error while parsing FeatureSet PBF payload. Unknown GeometryType");G.error(f)}return z[a]}function K(a){for(;a.next();)switch(a.tag()){case g.STRING:return a.getString();case g.FLOAT:return a.getFloat();case g.DOUBLE:return a.getDouble();case g.SINT32:return a.getSInt32();case g.UINT32:return a.getUInt32();
case g.INT64:return a.getInt64();case g.UINT64:return a.getUInt64();case g.SINT64:return a.getSInt64();case g.BOOL:return a.getBool();default:return a.skip(),null}return null}function L(a){for(var f={type:A[0]};a.next();)switch(a.tag()){case h.NAME:f.name=a.getString();break;case h.TYPE:f.type=A[a.getEnum()];break;case h.ALIAS:f.alias=a.getString();break;case h.SQL_TYPE:f.sqlType=M[a.getEnum()];break;case h.DOMAIN:a.skip();break;case h.DEFAULT_VALUE:a.skip();break;default:a.skip()}return f}function N(a,
f){for(var d=new v.OptimizedFeature,g=0;a.next();)switch(a.tag()){case n.ATTRIBUTES:var b=a.getMessage(),c=f[g++].name;d.attributes[c]=K(b);break;case n.GEOMETRY:for(var b=a.getMessage(),c=new v.OptimizedGeometry,l=c.coords,e=c.lengths;b.next();)switch(b.tag()){case p.LENGTHS:for(var k=b.getUInt32(),k=b.pos()+k;b.pos()<k;)e.push(b.getUInt32());break;case p.COORDS:for(var k=b.getUInt32(),k=b.pos()+k,h=0;b.pos()<k;)l[h++]=b.getSInt32();break;default:b.skip()}d.geometry=c;break;case n.CENTROID:b=a.getMessage();
c=new v.OptimizedGeometry;for(l=c.coords;b.next();)switch(b.tag()){case p.COORDS:e=b.getUInt32();e=b.pos()+e;for(k=0;b.pos()<e;)l[k++]=b.getSInt32();break;default:b.skip()}d.centroid=c;break;default:a.skip()}return d}Object.defineProperty(y,"__esModule",{value:!0});var G=I.getLogger("esri.tasks.operations.pbfQueryUtils"),A="esriFieldTypeSmallInteger esriFieldTypeInteger esriFieldTypeSingle esriFieldTypeDouble esriFieldTypeString esriFieldTypeDate esriFieldTypeOID esriFieldTypeGeometry esriFieldTypeBlob esriFieldTypeRaster esriFieldTypeGUID esriFieldTypeGlobalID esriFieldTypeXML".split(" "),
M="sqlTypeBigInt sqlTypeBinary sqlTypeBit sqlTypeChar sqlTypeDate sqlTypeDecimal sqlTypeDouble sqlTypeFloat sqlTypeGeometry sqlTypeGUID sqlTypeInteger sqlTypeLongNVarchar sqlTypeLongVarbinary sqlTypeLongVarchar sqlTypeNChar sqlTypeNVarchar sqlTypeOther sqlTypeReal sqlTypeSmallInt sqlTypeSqlXml sqlTypeTime sqlTypeTimestamp sqlTypeTimestamp2 sqlTypeTinyInt sqlTypeVarbinary sqlTypeVarchar".split(" "),z=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],H=["upperLeft",
"lowerLeft"],p;(function(a){a[a.TYPE=1]="TYPE";a[a.LENGTHS=2]="LENGTHS";a[a.COORDS=3]="COORDS"})(p||(p={}));var g;(function(a){a[a.STRING=1]="STRING";a[a.FLOAT=2]="FLOAT";a[a.DOUBLE=3]="DOUBLE";a[a.SINT32=4]="SINT32";a[a.UINT32=5]="UINT32";a[a.INT64=6]="INT64";a[a.UINT64=7]="UINT64";a[a.SINT64=8]="SINT64";a[a.BOOL=9]="BOOL"})(g||(g={}));var h;(function(a){a[a.NAME=1]="NAME";a[a.TYPE=2]="TYPE";a[a.ALIAS=3]="ALIAS";a[a.SQL_TYPE=4]="SQL_TYPE";a[a.DOMAIN=5]="DOMAIN";a[a.DEFAULT_VALUE=6]="DEFAULT_VALUE"})(h||
(h={}));var n;(function(a){a[a.ATTRIBUTES=1]="ATTRIBUTES";a[a.GEOMETRY=2]="GEOMETRY";a[a.CENTROID=4]="CENTROID"})(n||(n={}));var l;(function(a){a[a.X=1]="X";a[a.Y=2]="Y";a[a.M=3]="M";a[a.Z=4]="Z"})(l||(l={}));var w;(function(a){a[a.ORIGIN_POSTION=1]="ORIGIN_POSTION";a[a.SCALE=2]="SCALE";a[a.TRANSLATE=3]="TRANSLATE"})(w||(w={}));var x;(function(a){a[a.AREA_FIELD_NAME=1]="AREA_FIELD_NAME";a[a.LENGTH_FIELD_NAME=2]="LENGTH_FIELD_NAME";a[a.UNITS=3]="UNITS"})(x||(x={}));var B;(function(a){a[a.WKID=1]="WKID";
a[a.LASTEST_WKID=2]="LASTEST_WKID";a[a.VCS_WKID=3]="VCS_WKID";a[a.LATEST_VCS_WKID=4]="LATEST_VCS_WKID";a[a.WKT=5]="WKT"})(B||(B={}));var d;(function(a){a[a.OBJECT_ID_NAME=1]="OBJECT_ID_NAME";a[a.UNIQUE_ID_NAME=2]="UNIQUE_ID_NAME";a[a.GLOBAL_ID_NAME=3]="GLOBAL_ID_NAME";a[a.GEOHASH_NAME=4]="GEOHASH_NAME";a[a.GEOMETRY_PROPERTIES=5]="GEOMETRY_PROPERTIES";a[a.SERVER_GENS=6]="SERVER_GENS";a[a.GEOMETRY_TYPE=7]="GEOMETRY_TYPE";a[a.SPATIAL_REFERENCE=8]="SPATIAL_REFERENCE";a[a.EXCEEDED_TRANSFER_LIMIT=9]="EXCEEDED_TRANSFER_LIMIT";
a[a.HAS_Z=10]="HAS_Z";a[a.HAS_M=11]="HAS_M";a[a.TRANSFORM=12]="TRANSFORM";a[a.FIELDS=13]="FIELDS";a[a.FEATURES=15]="FEATURES"})(d||(d={}));var C;(function(a){a[a.FEATURE_RESULT=1]="FEATURE_RESULT"})(C||(C={}));var D;(function(a){a[a.QUERY_RESULT=2]="QUERY_RESULT"})(D||(D={}));y.parsePBFFeatureQuery=function(a){try{for(var f=new J(new Uint8Array(a),new DataView(a)),g;f.next();)switch(f.tag()){case D.QUERY_RESULT:var h=f.getMessage();for(a={};h.next();)switch(h.tag()){case C.FEATURE_RESULT:var b=h.getMessage(),
c=new v.OptimizedFeatureSet;for(c.geometryType=F(0);b.next();)switch(b.tag()){case d.OBJECT_ID_NAME:c.objectIdFieldName=b.getString();break;case d.GLOBAL_ID_NAME:c.globalIdFieldName=b.getString();break;case d.GEOHASH_NAME:c.geohashFieldName=b.getString();break;case d.GEOMETRY_PROPERTIES:for(var t=b.getMessage(),e={};t.next();)switch(t.tag()){case x.AREA_FIELD_NAME:e.shapeAreaFieldName=t.getString();break;case x.LENGTH_FIELD_NAME:e.shapeLengthFieldName=t.getString();break;case x.UNITS:e.units=t.getString();
break;default:t.skip()}c.geometryProperties=e;break;case d.GEOMETRY_TYPE:c.geometryType=F(b.getEnum());break;case d.SPATIAL_REFERENCE:for(var k=b.getMessage(),e={};k.next();)switch(k.tag()){case B.WKID:e.wkid=k.getUInt32();break;case B.WKT:e.wkt=k.getString();break;default:k.skip()}c.spatialReference=e;break;case d.HAS_Z:c.hasZ=b.getBool();break;case d.HAS_M:c.hasM=b.getBool();break;case d.TRANSFORM:for(var u=b.getMessage(),n=H[0],p=e=void 0;u.next();)switch(u.tag()){case w.ORIGIN_POSTION:n=H[u.getEnum()];
break;case w.SCALE:for(var q=u.getMessage(),m=[0,0];q.next();)switch(q.tag()){case l.X:m[0]=q.getDouble();break;case l.Y:m[1]=q.getDouble();break;case l.M:m.push(q.getDouble());break;case l.Z:m.push(q.getDouble());break;default:q.skip()}e=m;break;case w.TRANSLATE:for(var r=u.getMessage(),m=[0,0];r.next();)switch(r.tag()){case l.X:m[0]=r.getDouble();break;case l.Y:m[1]=r.getDouble();break;case l.M:m.push(r.getDouble());break;case l.Z:m.push(r.getDouble());break;default:r.skip()}p=m;break;default:u.skip()}c.transform=
{originPosition:n,scale:e,translate:p};break;case d.EXCEEDED_TRANSFER_LIMIT:var y=b.getBool();c.exceededTransferLimit=y;break;case d.FIELDS:var z=b.getMessage();c.fields.push(L(z));break;case d.FEATURES:var A=b.getMessage();c.features.push(N(A,c.fields));break;default:b.skip()}a.featureResult=c;break;default:h.skip()}g=a;break;default:f.skip()}return g.featureResult}catch(O){return f=new E("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:O}),G.error(f),new v.OptimizedFeatureSet}}});