// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/assignHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dojo/io-query ../geometry ../request ../core/promiseUtils ../core/urlUtils ../core/accessorSupport/decorators ./Layer ./mixins/ArcGISCachedService ./mixins/ArcGISMapService ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer ./support/arcgisLayers ./support/arcgisLayerUrl".split(" "),function(k,C,f,q,d,r,l,m,g,h,c,t,u,v,w,x,y,
z,A,B){var n="Canvas/World_Dark_Gray_Base Canvas/World_Dark_Gray_Reference Canvas/World_Light_Gray_Base Canvas/World_Light_Gray_Reference Elevation/World_Hillshade Ocean/World_Ocean_Base Ocean/World_Ocean_Reference Ocean_Basemap Reference/World_Boundaries_and_Places Reference/World_Boundaries_and_Places_Alternate Reference/World_Transportation World_Imagery World_Street_Map World_Topo_Map".split(" ");return function(p){function b(a,e){a=p.call(this)||this;a.url=null;a.type="tile";a.spatialReference=
null;return a}q(b,p);b.prototype.normalizeCtorArgs=function(a,e){return"string"===typeof a?f({url:a},e):a};b.prototype.load=function(){var a=this;this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service","Map Service"]}).always(function(){return a._fetchService()}));return this.when()};Object.defineProperty(b.prototype,"operationalLayerType",{get:function(){if(this.capabilities)return this.capabilities.operations.supportsExportMap?"ArcGISTiledMapServiceLayer":"ArcGISTiledImageServiceLayer";
var a=this.url||this.portalItem&&this.portalItem.url;return a&&/\/ImageServer(\/|\/?$)/i.test(a)?"ArcGISTiledImageServiceLayer":"ArcGISTiledMapServiceLayer"},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"attributionDataUrl",{get:function(){return this._getDefaultAttribution(this._getMapName(this.parsedUrl.path.toLowerCase()))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"tileServers",{get:function(){return this._getDefaultTileServers(this.parsedUrl.path)},
enumerable:!0,configurable:!0});b.prototype.castTileServers=function(a){return Array.isArray(a)?a.map(function(a){return h.urlToObject(a).path}):null};b.prototype.readSpatialReference=function(a,e){return(a=a||e.tileInfo&&e.tileInfo.spatialReference)&&l.SpatialReference.fromJSON(a)};b.prototype.fetchTile=function(a,e,b,c){a=this.getTileUrl(a,e,b);e={responseType:"image",allowImageDataAccess:c&&c.allowImageDataAccess||!1};c&&c.timestamp&&(e.query={_ts:c.timestamp});return m(a,e).then(function(a){return a.data})};
b.prototype.getTileUrl=function(a,e,b){var c=r.objectToQuery(f({},this.parsedUrl.query,{blankTile:!this.tilemapCache&&this.supportsBlankTile?!1:null,token:this.token?encodeURIComponent(this.token):null})),d=this.tileServers;return(d&&d.length?d[e%d.length]:this.parsedUrl.path)+"/tile/"+a+"/"+e+"/"+b+(c?"?"+c:"")};b.prototype.importLayerViewModule=function(a){switch(a.type){case "2d":return g.create(function(a){return k(["../views/2d/layers/TiledLayerView2D"],a)});case "3d":return g.create(function(a){return k(["../views/3d/layers/TileLayerView3D"],
a)})}};b.prototype._fetchService=function(){var a=this;return g.create(function(b,c){a.resourceInfo?b({data:a.resourceInfo}):m(a.parsedUrl.path,{query:f({f:"json"},a.parsedUrl.query),responseType:"json",callbackParamName:"callback"}).then(b,c)}).then(function(b){b.ssl&&(a.url=a.url.replace(/^http:/i,"https:"));a.read(b.data,{origin:"service",url:a.parsedUrl});if(10.1===a.version&&!B.isHostedAgolService(a.url))return A.fetchServerVersion(a.url).then(function(b){a.read({currentVersion:b})}).catch(function(){})})};
b.prototype._getMapName=function(a){return(a=a.match(/^(?:https?:)?\/\/(server|services)\.arcgisonline\.com\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i))&&a[2]};b.prototype._getDefaultAttribution=function(a){if(a){var b;a=a.toLowerCase();for(var c=0,d=n.length;c<d;c++)if(b=n[c],-1<b.toLowerCase().indexOf(a))return h.makeAbsolute("//static.arcgis.com/attribution/"+b)}};b.prototype._getDefaultTileServers=function(a){var b=-1!==a.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),c=
-1!==a.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return b||c?[a,a.replace(b?/server\.arcgisonline/i:/services\.arcgisonline/i,b?"services.arcgisonline":"server.arcgisonline")]:[]};d([c.property({readOnly:!0})],b.prototype,"operationalLayerType",null);d([c.property({readOnly:!0,dependsOn:["parsedUrl"]})],b.prototype,"attributionDataUrl",null);d([c.property()],b.prototype,"popupTemplates",void 0);d([c.property()],b.prototype,"resourceInfo",void 0);d([c.property({dependsOn:["parsedUrl"]})],
b.prototype,"tileServers",null);d([c.cast("tileServers")],b.prototype,"castTileServers",null);d([c.property({json:{origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writer:h.writeOperationalLayerUrl}}}}})],b.prototype,"url",void 0);d([c.property({readOnly:!0,json:{read:!1}})],b.prototype,"type",void 0);d([c.property({type:l.SpatialReference})],b.prototype,"spatialReference",void 0);d([c.reader("spatialReference",["spatialReference","tileInfo"])],b.prototype,"readSpatialReference",null);return b=
d([c.subclass("esri.layers.TileLayer")],b)}(c.declared(t,v,u,z,w,x,y))});