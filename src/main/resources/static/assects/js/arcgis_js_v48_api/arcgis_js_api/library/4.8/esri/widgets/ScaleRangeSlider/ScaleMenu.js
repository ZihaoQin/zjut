// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/widgets/ScaleRangeSlider/templates/ScaleMenu.html":'\x3cdiv\x3e\r\n  \x3cdiv\x3e\r\n    \x3cdiv class\x3d"${css.header}"\x3e${labels.current}\x3c/div\x3e\r\n    \x3cdiv class\x3d"${css.content}"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"dap_currentScaleLabel" class\x3d"${css.item} ${css.current}"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"dap_scaleInput" data-dojo-type\x3d"dijit/form/TextBox" class\x3d"${css.input}"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"dap_recommendedScaleSection"\x3e\r\n    \x3cdiv class\x3d"${css.header}" data-dojo-attach-point\x3d"dap_scaleListHeader"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"${css.content}"\x3e\r\n      \x3col data-dojo-attach-point\x3d"dap_recommendedScales" class\x3d"${css.list}"\x3e\r\n        \x3cli data-dojo-attach-point\x3d"dap_mapScaleItem" class\x3d"${css.item} ${css.selectable}"\x3e\x3c/li\x3e\r\n        \x3c!--additional list items added dynamically--\x3e\r\n      \x3c/ol\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("../support/_Tooltip ./recommendedScales ./ScaleRanges dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/dom-class dojo/dom-construct dojo/dom-prop dojo/dom-style dojo/keys dojo/number dojo/on dojo/query dojo/string dojox/html/entities dojox/lang/functional/object dojo/i18n!./nls/ScaleRangeSlider dojo/text!./templates/ScaleMenu.html dijit/form/TextBox".split(" "),function(c,n,p,q,r,t,f,h,k,u,v,g,d,w,l,x,m,y,z){return q.createSubclass([r,t,c],{declaredClass:"esri.dijit.ScaleRangeSlider.ScaleMenu",
templateString:z,baseClass:"esri-scale-menu",labels:y,css:{header:"esri-scale-menu__header",content:"esri-scale-menu__content",current:"esri-scale-menu__item--current",input:"esri-scale-menu__input",list:"esri-scale-menu__list",item:"esri-scale-menu__item",inline:"esri-inline",selectable:"esri-selectable",secondaryLabel:"esri-scale-menu__label--secondary",hidden:"esri-hidden"},_elementValueMap:null,_elements:null,_scaleRangeCategories:null,_scaleRanges:null,_rangeToScaleAndNodeLookup:null,constructor:function(){this._scaleRanges=
new p},buildRendering:function(){this.inherited(arguments);this._rangeToScaleAndNodeLookup={map:{scale:null,node:this.dap_mapScaleItem}};var a=this.labels,b=a.featuredScaleLabels,e=n.all(),f=this.css.item+" "+this.css.selectable,g;m.keys(e).forEach(function(a){g=b[a];var d=e[a],c=l.substitute(g,{scaleLabel:this._formatScale(d)}),c=h.create("li",{innerHTML:c,className:f},this.dap_recommendedScales);this._rangeToScaleAndNodeLookup[a]={scale:d,node:c}},this);var d=h.create("span",{innerHTML:a.setTo}),
c=h.create("span",{innerHTML:a.selectOne,className:this.css.secondaryLabel});k.set(this.dap_scaleListHeader,"innerHTML",l.substitute(a.setToSelectOne,{setTo:d.outerHTML,selectOne:c.outerHTML}))},_formatScale:function(a){return"1:"+g.format(a)},postCreate:function(){this.inherited(arguments);this.own(d(this.domNode,d.selector("."+this.css.item+"."+this.css.selectable,"click"),function(a){a=a.target===this.dap_mapScaleItem?this.options.scale.map:this._parseScale(a.target.innerHTML);this._emitScaleSelected(a)}.bind(this)));
this.dap_scaleInput.on("keyDown",function(a){a.keyCode===v.ENTER&&this._handleCustomScaleInput()}.bind(this));this.createTooltip(this.dap_scaleInput,this.labels.customScaleInputTooltip)},_emitScaleSelected:function(a){this.emit("scale-selected",{scale:a})},_handleCustomScaleInput:function(){var a=this._parseScale(this.dap_scaleInput.get("value"));isNaN(a)||this._emitScaleSelected(this._scaleRanges.clampScale(a))},_parseScale:function(a){a=x.decode(a).replace(/.*\(/,"").replace(/\).*$/,"").replace(/.*1:/,
"").replace(/[^0-9.\s]/g,"");return g.parse(a)},_setOptionsAttr:function(a){var b=a.scale,e=this._formatScale(b.current);k.set(this.dap_currentScaleLabel,"innerHTML",a.label);this.dap_scaleInput.set("value",e,!1);e=l.substitute(this.labels.featuredScaleLabels.current,{scaleLabel:this._formatScale(b.map)});this._rangeToScaleAndNodeLookup.map.scale=b.map;k.set(this.dap_mapScaleItem,"innerHTML",e);f.toggle(this.dap_mapScaleItem,this.css.hidden,-1===b.map);this._scaleRanges.set("scaleRangeBounds",{minScale:b.min,
maxScale:b.max});this._hideOutOfScaleRanges();this._set("options",a)},_hideOutOfScaleRanges:function(){var a=w("."+this.css.item+"."+this.css.selectable,this.dap_recommendedScales),b=this._scaleRanges;m.keys(this._rangeToScaleAndNodeLookup).forEach(function(a){a=this._rangeToScaleAndNodeLookup[a];f.toggle(a.node,this.css.hidden,!b.contains(a.scale))},this);a=a.every(function(a){return"none"===u.get(a,"display")});f.toggle(this.dap_recommendedScaleSection,this.css.hidden,a)}})});