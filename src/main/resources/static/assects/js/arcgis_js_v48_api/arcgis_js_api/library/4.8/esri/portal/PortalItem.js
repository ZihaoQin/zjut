// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/Error ../core/JSONSupport ../core/lang ../core/Loadable ../core/promiseUtils ../core/urlUtils ../core/accessorSupport/decorators ../geometry/Extent ./Portal ./PortalRating".split(" "),function(r,x,t,c,h,u,v,w,k,l,d,m,n,f){return function(p){function b(a){a=p.call(this)||this;a.access=null;a.accessInformation=null;a.applicationProxies=null;a.avgRating=null;a.categories=null;a.created=null;a.culture=
null;a.description=null;a.extent=null;a.groupCategories=null;a.id=null;a.itemControl=null;a.licenseInfo=null;a.modified=null;a.name=null;a.numComments=null;a.numRatings=null;a.numViews=null;a.owner=null;a.portal=null;a.screenshots=null;a.size=null;a.snippet=null;a.tags=null;a.title=null;a.type=null;a.typeKeywords=null;a.url=null;return a}t(b,p);g=b;Object.defineProperty(b.prototype,"displayName",{get:function(){var a=this.type,e=this.typeKeywords||[],b=a;"Feature Service"===a||"Feature Collection"===
a?b=-1<e.indexOf("Table")?"Table":-1<e.indexOf("Route Layer")?"Route Layer":-1<e.indexOf("Markup")?"Markup":"Feature Layer":"Image Service"===a?b=-1<e.indexOf("Elevation 3D Layer")?"Elevation Layer":"Imagery Layer":"Scene Service"===a?b="Scene Layer":"Scene Package"===a?b="Scene Layer Package":"Stream Service"===a?b="Feature Layer":"Geoprocessing Service"===a&&this.portal&&this.portal.isPortal?b=-1<e.indexOf("Web Tool")?"Tool":"Geoprocessing Service":"Geocoding Service"===a?b="Locator":"Microsoft Powerpoint"===
a?b="Microsoft PowerPoint":"GeoJson"===a?b="GeoJSON":"Globe Service"===a?b="Globe Layer":"Vector Tile Service"===a?b="Tile Layer":"netCDF"===a?b="NetCDF":"Map Service"===a?b=-1===e.indexOf("Spatiotemporal")&&(-1<e.indexOf("Hosted Service")||-1<e.indexOf("Tiled"))?"Tile Layer":"Map Image Layer":a&&-1<a.toLowerCase().indexOf("add in")?b=a.replace(/(add in)/gi,"Add-In"):"datastore catalog service"===a&&(b="Big Data File Share");return b},enumerable:!0,configurable:!0});b.prototype.readExtent=function(a){return a&&
a.length?new m(a[0][0],a[0][1],a[1][0],a[1][1]):null};Object.defineProperty(b.prototype,"iconUrl",{get:function(){var a=this.type&&this.type.toLowerCase()||"",b=this.typeKeywords||[],d=!1,c=!1,q=!1,f=!1,g=!1;0<a.indexOf("service")||"feature collection"===a||"kml"===a||"wms"===a||"wmts"===a||"wfs"===a?(d=-1<b.indexOf("Hosted Service"),"feature service"===a||"feature collection"===a||"kml"===a||"wfs"===a?(c=-1<b.indexOf("Table"),q=-1<b.indexOf("Route Layer"),f=-1<b.indexOf("Markup"),a=(g=-1!==b.indexOf("Spatiotemporal"))&&
c?"spatiotemporaltable":c?"table":q?"routelayer":f?"markup":g?"spatiotemporal":d?"featureshosted":"features"):a="map service"===a||"wms"===a||"wmts"===a?d||-1<b.indexOf("Tiled")||"wmts"===a?"maptiles":"mapimages":"scene service"===a?-1<b.indexOf("Line")?"sceneweblayerline":-1<b.indexOf("3DObject")?"sceneweblayermultipatch":-1<b.indexOf("Point")?"sceneweblayerpoint":-1<b.indexOf("IntegratedMesh")?"sceneweblayermesh":-1<b.indexOf("PointCloud")?"sceneweblayerpointcloud":-1<b.indexOf("Polygon")?"sceneweblayerpolygon":
"sceneweblayer":"image service"===a?-1<b.indexOf("Elevation 3D Layer")?"elevationlayer":"imagery":"stream service"===a?"streamlayer":"vector tile service"===a?"vectortile":"datastore catalog service"===a?"datastorecollection":"geocoding service"===a?"geocodeservice":"geoprocessing service"===a?-1<b.indexOf("Web Tool")&&this.portal&&this.portal.isPortal?"tool":"layers":"layers"):a="web map"===a||"cityengine web scene"===a?"maps":"web scene"===a?-1<b.indexOf("ViewingMode-Local")?"webscenelocal":"websceneglobal":
"web mapping application"===a||"mobile application"===a||"application"===a||"operation view"===a||"desktop application"===a?"apps":"map document"===a||"map package"===a||"published map"===a||"scene document"===a||"globe document"===a||"basemap package"===a||"mobile basemap package"===a||"mobile map package"===a||"project package"===a||"project template"===a||"pro map"===a||"layout"===a||"layer"===a&&-1<b.indexOf("ArcGIS Pro")||"explorer map"===a&&b.indexOf("Explorer Document")?"mapsgray":"service definition"===
a||"csv"===a||"shapefile"===a||"cad drawing"===a||"geojson"===a||"360 vr experience"===a||"netcdf"===a?"datafiles":"explorer add in"===a||"desktop add in"===a||"windows viewer add in"===a||"windows viewer configuration"===a?"appsgray":"arcgis pro add in"===a||"arcgis pro configuration"===a?"addindesktop":"rule package"===a||"file geodatabase"===a||"sqlite geodatabase"===a||"csv collection"===a||"kml collection"===a||"windows mobile package"===a||"map template"===a||"desktop application template"===
a||"arcpad package"===a||"code sample"===a||"form"===a||"document link"===a||"operations dashboard add in"===a||"rules package"===a||"image"===a||"workflow manager package"===a||"explorer map"===a&&-1<b.indexOf("Explorer Mapping Application")||-1<b.indexOf("Document")?"datafilesgray":"network analysis service"===a||"geoprocessing service"===a||"geodata service"===a||"geometry service"===a||"geoprocessing package"===a||"locator package"===a||"geoprocessing sample"===a||"workflow manager service"===
a?"toolsgray":"layer"===a||"layer package"===a||"explorer layer"===a?"layersgray":"scene package"===a?"scenepackage":"mobile scene package"===a?"mobilescenepackage":"tile package"===a?"tilepackage":"task file"===a?"taskfile":"report template"===a?"report-template":"statistical data collection"===a?"statisticaldatacollection":"insights workbook"===a?"workbook":"insights model"===a?"insightsmodel":"insights page"===a?"insightspage":"insights theme"===a?"insightstheme":"hub initiative"===a?"hubinitiative":
"hubpage"===a?"hubpage":"hub site application"===a?"hubsite":"relational database connection"===a?"relationaldatabaseconnection":"big data file share"===a?"datastorecollection":"image collection"===a?"imagecollection":"style"===a?"style":"desktop style"===a?"desktopstyle":"dashboard"===a?"dashboard":"raster function template"===a?"rasterprocessingtemplate":"vector tile package"===a?"vectortilepackage":"ortho mapping project"===a?"orthomappingproject":"ortho mapping template"===a?"orthomappingtemplate":
"solution"===a?"solutions":"maps";return a?r.toUrl("../images/portal/"+a+"16.png"):null},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"isLayer",{get:function(){return-1<"Map Service;Feature Service;Feature Collection;Scene Service;Image Service;Stream Service;Vector Tile Service;WMTS;WMS".split(";").indexOf(this.type)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"itemUrl",{get:function(){var a=this.get("portal.restUrl");return a?a+"/content/items/"+this.id:
null},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"thumbnailUrl",{get:function(){var a=this.itemUrl,b=this.thumbnail;return a&&b?this.portal._normalizeUrl(a+"/info/"+b+"?f\x3djson"):null},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"userItemUrl",{get:function(){var a=this.get("portal.restUrl");if(!a)return null;var b=this.owner||this.get("portal.user.username");return b?a+"/content/users/"+(this.ownerFolder?b+"/"+this.ownerFolder:b)+"/items/"+this.id:null},
enumerable:!0,configurable:!0});b.prototype.load=function(){var a=this;this.portal||(this.portal=n.getDefault());var b=this.portal.load().then(function(){return a.resourceInfo?a.resourceInfo:a.id&&a.itemUrl?a.portal._request(a.itemUrl):{}}).then(function(b){a.resourceInfo=b;a.read(b)});this.addResolvingPromise(b);return this.when()};b.prototype.addRating=function(a){var b={method:"post",query:{}};a instanceof f&&(a=a.rating);isNaN(a)||"number"!==typeof a||(b.query.rating=a);return this.portal._request(this.itemUrl+
"/addRating",b).then(function(){return new f({rating:a,created:new Date})})};b.prototype.deleteRating=function(){return this.portal._request(this.itemUrl+"/deleteRating",{method:"post"}).then(function(){})};b.prototype.fetchData=function(a){void 0===a&&(a="json");return this.portal._request(this.itemUrl+"/data",{responseType:a})};b.prototype.fetchRating=function(){return this.portal._request(this.itemUrl+"/rating").then(function(a){return null!=a.rating?(a.created=new Date(a.created),new f(a)):null})};
b.prototype.fetchRelatedItems=function(a){return this.portal._requestToTypedArray(this.itemUrl+"/relatedItems",{query:a},"PortalItem")};b.prototype.getThumbnailUrl=function(a){var b=this.thumbnailUrl;b&&a&&(b+="\x26w\x3d"+a);return b};b.prototype.update=function(a){var b=this;return this.id?this.load().then(function(){return b.portal._signIn()}).then(function(){var d=a&&a.data,c={method:"post"};c.query=b._getPostQuery();for(var e in c.query)null===c.query[e]&&(c.query[e]="");c.query.clearEmptyFields=
!0;null!=d&&("string"===typeof d?c.query.text=d:"object"===typeof d&&(c.query.text=JSON.stringify(d)));return b.portal._request(b.userItemUrl+"/update",c).then(function(){return b._reload()})}):k.reject(new h("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))};b.prototype.updateThumbnail=function(a){var b=this;return this.id?this.load().then(function(){return b.portal._signIn()}).then(function(){var c=a.thumbnail,d={method:"post"};if("string"===typeof c)l.isDataProtocol(c)?
d.query={data:c}:d.query={url:l.makeAbsolute(c)};else{var e=new FormData;e.append("file",c);d.body=e}return b.portal._request(b.userItemUrl+"/updateThumbnail",d).then(function(){return b._reload()})}):k.reject(new h("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))};b.prototype.toJSON=function(){var a=this.extent,a={created:this.created&&this.created.getTime(),description:this.description,extent:a&&[[a.xmin,a.ymin],[a.xmax,a.ymax]],id:this.id,modified:this.modified&&
this.modified.getTime(),name:this.name,owner:this.owner,ownerFolder:this.ownerFolder,snippet:this.snippet,tags:this.tags,thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:this.typeKeywords,url:this.url};return v.fixJson(a)};b.fromJSON=function(a){if(!a)return null;if(a.declaredClass)throw Error("JSON object is already hydrated");return new g({resourceInfo:a})};b.prototype._reload=function(){var a=this;return this.portal._request(this.itemUrl,{query:{_ts:(new Date).getTime()}}).then(function(b){a.resourceInfo=
b;a.read(b);return a})};b.prototype._getPostQuery=function(){var a=this.toJSON(),b;for(b in a)"tags"===b&&null!==a[b]&&(a[b]=a[b].join(", ")),"typeKeywords"===b&&null!==a[b]&&(a[b]=a[b].join(", "));return a};var g;c([d.property()],b.prototype,"access",void 0);c([d.property()],b.prototype,"accessInformation",void 0);c([d.property({json:{read:{source:"appProxies"}}})],b.prototype,"applicationProxies",void 0);c([d.property()],b.prototype,"avgRating",void 0);c([d.property()],b.prototype,"categories",
void 0);c([d.property({type:Date})],b.prototype,"created",void 0);c([d.property()],b.prototype,"culture",void 0);c([d.property()],b.prototype,"description",void 0);c([d.property({dependsOn:["type","typeKeywords"],readOnly:!0})],b.prototype,"displayName",null);c([d.property({type:m})],b.prototype,"extent",void 0);c([d.reader("extent")],b.prototype,"readExtent",null);c([d.property()],b.prototype,"groupCategories",void 0);c([d.property({dependsOn:["type","typeKeywords"],readOnly:!0})],b.prototype,"iconUrl",
null);c([d.property()],b.prototype,"id",void 0);c([d.property({dependsOn:["type"],readOnly:!0})],b.prototype,"isLayer",null);c([d.property()],b.prototype,"itemControl",void 0);c([d.property({dependsOn:["portal.restUrl","id"],readOnly:!0})],b.prototype,"itemUrl",null);c([d.property()],b.prototype,"licenseInfo",void 0);c([d.property({type:Date})],b.prototype,"modified",void 0);c([d.property()],b.prototype,"name",void 0);c([d.property()],b.prototype,"numComments",void 0);c([d.property()],b.prototype,
"numRatings",void 0);c([d.property()],b.prototype,"numViews",void 0);c([d.property()],b.prototype,"owner",void 0);c([d.property()],b.prototype,"ownerFolder",void 0);c([d.property({type:n})],b.prototype,"portal",void 0);c([d.property()],b.prototype,"resourceInfo",void 0);c([d.property()],b.prototype,"screenshots",void 0);c([d.property()],b.prototype,"size",void 0);c([d.property()],b.prototype,"snippet",void 0);c([d.property()],b.prototype,"tags",void 0);c([d.property()],b.prototype,"thumbnail",void 0);
c([d.property({dependsOn:["itemUrl","thumbnail","portal.credential.token"],readOnly:!0})],b.prototype,"thumbnailUrl",null);c([d.property()],b.prototype,"title",void 0);c([d.property()],b.prototype,"type",void 0);c([d.property()],b.prototype,"typeKeywords",void 0);c([d.property()],b.prototype,"url",void 0);c([d.property({dependsOn:["portal.restUrl","portal.user.username","owner","ownerFolder","id"],readOnly:!0})],b.prototype,"userItemUrl",null);return b=g=c([d.subclass("esri.portal.PortalItem")],b)}(d.declared(u,
w))});