// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/widgets/ClassedSizeSlider/templates/ClassedSizeSlider.html":'\x3cdiv class\x3d"${_css.container}"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"_containerNode"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"_titleNode"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"_sliderNode"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"_scaleNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("./Widgette ./RendererSlider ./RendererSlider/sliderUtils ../Color ../core/lang ../core/numberUtils ../renderers/support/utils dijit/_TemplatedMixin dojo/dom-style dojox/gfx dojo/text!./ClassedSizeSlider/templates/ClassedSizeSlider.html".split(" "),function(l,m,e,n,d,p,k,q,h,r,t){return l.createSubclass([q],{_rampNode:null,_sliderHeight:null,_colorRampSurface:null,_histogramSurface:null,_surfaceRect:null,_barsGroup:null,_updateTimer:null,_css:null,declaredClass:"esri.widgets.ClassedSizeSlider",
templateString:t,properties:{breakInfos:null,histogram:null,statistics:null,handles:[],showHistogram:!0,showStatistics:!0,showLabels:!0,showTicks:!0,showHandles:!0,classificationMethod:null,normalizationType:null,histogramWidth:100,rampWidth:26},constructor:function(a,b){b&&(this.breakInfos=d.clone(a.breakInfos),this.set("values",this._getHandleInfo(this.breakInfos)),this._css={container:"esri-classed-size-slider"})},postCreate:function(){this.inherited(arguments);this._setupDataDefaults()},startup:function(){this.inherited(arguments);
this._slider=new m({type:"ClassedSizeSlider",values:this.values,minimum:this.minValue,maximum:this.maxValue,showLabels:this.showLabels,showTicks:this.showTicks,showHandles:this.showHandles,classificationMethod:this.classificationMethod,normalizationType:this.normalizationType},this._sliderNode);this._slider.startup();this._rampNode=this._slider._sliderAreaRight;this._sliderHeight=h.get(this._rampNode,"height")||155;this._createSVGSurfaces();this._slider.on("slide",function(a){this._updateBreakInfos(a.values);
this._updateBreakInfoLabels();this._fillRamp()}.bind(this));this._slider.on("data-change",function(a){a.values&&(this.set("values",a.values),this._updateBreakInfos(a.values),this._updateBreakInfoLabels());this._fillRamp();this.emit("change",{minValue:this.minValue,maxValue:this.maxValue,breakInfos:d.clone(this.breakInfos)})}.bind(this));this._slider.on("handle-value-change",function(a){this._updateBreakInfos(a.values);this._updateBreakInfoLabels();this._fillRamp();this.emit("handle-value-change",
{minValue:this.minValue,maxValue:this.maxValue,breakInfos:d.clone(this.breakInfos)})}.bind(this));this._slider.on("data-value-change",function(a){this.set("minValue",a.min);this.breakInfos[0].minValue=a.min;this.set("maxValue",a.max);this.breakInfos[this.breakInfos.length-1].maxValue=a.max;this._updateBreakInfoLabels();this._updateRendererSlider();this.emit("data-value-change",{minValue:this.minValue,maxValue:this.maxValue,breakInfos:d.clone(this.breakInfos)})}.bind(this));this._slider.on("stop",
function(a){this.emit("handle-value-change",{minValue:this.minValue,maxValue:this.maxValue,breakInfos:d.clone(this.breakInfos)})}.bind(this));this.histogram&&this.showHistogram&&this._generateHistogram();this.statistics&&this.showStatistics&&this._generateStatistics();this.watch("breakInfos, handles, statistics, showHandles, showLabels, showTicks",this._updateTimeout);this.watch("histogram",this._showHistogram);this.watch("showHistogram",this._toggleHistogram)},destroy:function(){this.inherited(arguments);
this._slider&&this._slider.destroy();this._avgHandleObjs&&this._avgHandleObjs.avgHandleTooltip&&this._avgHandleObjs.avgHandleTooltip.destroy();this.countTooltips&&this.countTooltips.forEach(function(a){a.destroy()})},_updateTimeout:function(){this._updateRendererSlider()},_updateRendererSlider:function(){this.set({minValue:this.breakInfos[0].minValue,maxValue:this.breakInfos[this.breakInfos.length-1].maxValue});this._slider.set({minimum:this.minValue,maximum:this.maxValue,values:this._getHandleInfo(this.breakInfos),
handles:this.handles});this._slider._reset();this._slider._updateRoundedLabels();this._slider._generateMoveables();this._clearRect();this._createSVGSurfaces();this.histogram&&this.showHistogram&&this._generateHistogram();this.statistics&&this.showStatistics&&this._generateStatistics()},_getHandleInfo:function(a){a=(a||[]).map(function(a,g){return a.maxValue});a.pop();return a},_updateBreakInfos:function(a){var b=this.breakInfos;k.updateClassBreak({classBreaks:b,normalizationType:this.normalizationType,
classificationMethod:this.classificationMethod,change:a});(a||[]).forEach(function(a,c){b[c].maxValue=a;b[c+1]&&(b[c+1].minValue=a)})},_updateBreakInfoLabels:function(){k.setLabelsForClassBreaks({classBreaks:this.breakInfos,normalizationType:this.normalizationType,classificationMethod:this.classificationMethod,round:!0})},_setupDataDefaults:function(){null!==this.breakInfos&&1<this.breakInfos.length?this.set({minValue:this.breakInfos[0].minValue,maxValue:this.breakInfos[this.breakInfos.length-1].maxValue}):
null!==this.breakInfos&&1===this.breakInfos.length?this.set({minValue:this.breakInfos[0].minValue,maxValue:this.breakInfos[0].maxValue}):(this.set({minValue:0,maxValue:100,breakInfos:[{minValue:0,maxValue:20},{minValue:20,maxValue:80},{minValue:80,maxValue:100}]}),this.set("values",this._getHandleInfo(this.breakInfos)),this._updateBreakInfoLabels())},_createSVGSurfaces:function(){this._colorRampSurface=r.createSurface(this._rampNode,this.rampWidth,this._sliderHeight);this._surfaceRect=this._colorRampSurface.createRect({width:this.rampWidth,
height:this._sliderHeight});this._histogramSurface=e.generateHistogramSurface(this._rampNode,this.histogramWidth,this._sliderHeight,this.rampWidth);this._fillRamp()},_clearRect:function(){this._colorRampSurface.destroy();this._histogramSurface.destroy()},_fillRamp:function(){var a=this.breakInfos,b=this._slider,g=this._sliderHeight,c=[],f,e,d,c=(a||[]).map(function(a){return[g-Math.round((a.minValue-b.minimum)/(b.maximum-b.minimum)*g),g-Math.round((a.maxValue-b.minimum)/(b.maximum-b.minimum)*g)]});
c.reverse();this._colorRampSurface.clear();f=this.rampWidth/a.length;e=this.rampWidth;d=this._colorRampSurface.createPath().moveTo(e,0);c.forEach(function(a,b){d.lineTo(e,a[0]);e=this.rampWidth-f*(b+1);d.lineTo(e,a[0])},this);d.lineTo(1,g).lineTo(0,g).lineTo(0,0).closePath().setFill(new n([0,121,193,.8]))},_showHistogram:function(){this.histogram?this._generateHistogram():this._barsGroup&&(this._barsGroup.destroy(),this._barsGroup=null)},_toggleHistogram:function(){this.showHistogram?(h.set(this._barsGroup.rawNode,
"display","inline-block"),this._showHistogram()):h.set(this._barsGroup.rawNode,"display","none")},_generateHistogram:function(){this._barsGroup=e.generateHistogram(this._histogramSurface,this.histogram,this.histogramWidth,this.rampWidth,this.isLeftToRight());this.countTooltips=e.generateCountTooltips(this.histogram,this._barsGroup)},_generateStatistics:function(){if(!(2>this.statistics.count||isNaN(this.statistics.avg))){var a=this.statistics,b=this._slider,d=e.getPrecision(this.maxValue),c,f;a.min===
a.max&&a.min===a.avg?(c=0,f=2*a.avg):(c=a.min,f=a.max);if(c!==b.minimum||f!==b.maximum)c=b.minimum,f=b.maximum;b=this._sliderHeight*(f-a.avg)/(f-c);a=p.round([a.avg,f,c])[0];this._avgHandleObjs=e.generateAvgLine(this._histogramSurface,a,b,d,!1,this.isLeftToRight())}}})});