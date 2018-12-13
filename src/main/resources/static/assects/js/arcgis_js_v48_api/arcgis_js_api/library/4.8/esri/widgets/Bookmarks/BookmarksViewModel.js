// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/Collection ../../core/Error ../../core/Evented ../../core/Handles ../../core/Logger ../../core/promiseUtils ../../core/watchUtils ../../core/accessorSupport/decorators ./Bookmark ../support/GoTo".split(" "),function(x,y,m,e,n,p,f,q,r,t,u,g,d,v,w){var h=t.getLogger("esri.widgets.Bookmarks.BookmarksViewModel"),k=p.ofType(v);return function(l){function b(a){a=l.call(this)||
this;a._handles=new r;a.bookmarks=new k;return a}m(b,l);b.prototype.initialize=function(){var a=this;this._handles.add(g.init(this,"view",function(c){return a._viewUpdated(c)}))};b.prototype.destroy=function(){this._handles.destroy();this.view=this._handles=null;this.bookmarks.removeAll()};Object.defineProperty(b.prototype,"state",{get:function(){var a=this.get("view");return a&&"2d"===a.type?a.ready?"ready":"loading":"disabled"},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"view",
{get:function(){return this._get("view")},set:function(a){a&&"2d"!==a.type&&h.error(new f("view:invalid-view","SceneView is not supported",{view:a}));this._set("view",a)},enumerable:!0,configurable:!0});b.prototype.goTo=function(a){var c=this.view;if(!c||!a||!a.extent)return c=new f("go-to:invalid-bookmark-or-view","Cannot go to a bookmark without a view and a bookmark containing an extent.",{bookmark:a,view:c}),h.error(c),u.reject(c);a.active=!0;c=this.callGoTo({target:{target:a.extent}});this.emit("select-bookmark",
{bookmark:a});c.then(function(){a.active=!1}).catch(function(){a.active=!1});return c};b.prototype._viewUpdated=function(a){var c=this,b=this._handles;b.remove("map");a&&a.when(function(){b.add(g.init(a,["map","map.bookmarks"],function(){return c._bookmarksChange(a)}),"map")})};b.prototype._bookmarksChange=function(a){if(a){a=a.get("map.bookmarks");var b=this.bookmarks;b.removeAll();b.addMany(a)}};e([d.property({type:k})],b.prototype,"bookmarks",void 0);e([d.property({dependsOn:["view.ready"],readOnly:!0})],
b.prototype,"state",null);e([d.property({value:null})],b.prototype,"view",null);e([d.property()],b.prototype,"goTo",null);return b=e([d.subclass("esri.widgets.Bookmarks.BookmarksViewModel")],b)}(d.declared(n,w,q))});