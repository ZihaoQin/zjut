// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","./Util"],function(f,g,d){return function(){function b(){this.shaderVariators={};this._nextId=0;this._programsByName={};this._namesById=[];this._programRefCount=[];this._commonUniforms={model:[],modelNormal:[],lightDirection:[],proj:[],shadowMapDistance:[],viewportPixelSz:[],lightingMainDirection:[]}}b.prototype.dispose=function(){for(var a in this._programsByName)this._programsByName[a].dispose();this._programRefCount=this._namesById=this._programsByName=null};b.prototype.add=
function(a,c){d.assert(null==this._programsByName[a]);this._programsByName[a]=c;this._namesById[c.id]=a};b.prototype.get=function(a){return this._programsByName[a]};b.prototype.addShaderVariations=function(a,c){this.shaderVariators[a]=c};b.prototype.getShaderVariations=function(a){return this.shaderVariators[a]};b.prototype.getShaderVariationsProgram=function(a,c,b,e,d){return(a=this.getShaderVariations(a))&&a.getProgram(c,b,e,d)};b.prototype.getProgramsUsingUniform=function(a){return this._commonUniforms[a]||
[]};b.prototype.increaseRefCount=function(a){var c=a.id;this._programRefCount[c]?this._programRefCount[c]++:(this._programRefCount[c]=1,this._findCommonUniforms(a))};b.prototype.decreaseRefCount=function(a){var c=a.id;1<this._programRefCount[c]?this._programRefCount[c]--:(this._forgetCommonUniforms(a),this._programRefCount[c]=0)};b.prototype._getNextId=function(){return this._nextId++};b.prototype._findCommonUniforms=function(a){for(var c in this._commonUniforms)a.hasUniform(c)&&(d.assert(-1===this._commonUniforms[c].indexOf(a),
"common uniforms of program have already been determined"),this._commonUniforms[c].push(a))};b.prototype._forgetCommonUniforms=function(a){for(var c in this._commonUniforms){var b=this._commonUniforms[c],d=b.indexOf(a);-1<d&&(b[d]=b[b.length-1],b.pop())}};return b}()});