// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","@dojo/shim/Set"],function(c,d,e){Object.defineProperty(d,"__esModule",{value:!0});c=function(){function b(){this._pool=[];this._set=new e.default}b.prototype.acquire=function(){if(0===this._pool.length)return new e.default;var a=this._pool.pop();this._set.delete(a);return a};b.prototype.release=function(a){a&&!this._set.has(a)&&(a.clear(),5E4>this._pool.length&&(this._pool.push(a),this._set.add(a)))};b.acquire=function(){return f.acquire()};b.release=function(a){return f.release(a)};
return b}();d.default=c;var f=new c});