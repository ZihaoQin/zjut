//>>built
require({cache:{"url:dijit/templates/TreeNode.html":'\x3cdiv class\x3d"dijitTreeNode" role\x3d"presentation"\r\n\t\x3e\x3cdiv data-dojo-attach-point\x3d"rowNode" class\x3d"dijitTreeRow" role\x3d"presentation"\r\n\t\t\x3e\x3cspan data-dojo-attach-point\x3d"expandoNode" class\x3d"dijitInline dijitTreeExpando" role\x3d"presentation"\x3e\x3c/span\r\n\t\t\x3e\x3cspan data-dojo-attach-point\x3d"expandoNodeText" class\x3d"dijitExpandoText" role\x3d"presentation"\x3e\x3c/span\r\n\t\t\x3e\x3cspan data-dojo-attach-point\x3d"contentNode"\r\n\t\t\tclass\x3d"dijitTreeContent" role\x3d"presentation"\x3e\r\n\t\t\t\x3cspan role\x3d"presentation" class\x3d"dijitInline dijitIcon dijitTreeIcon" data-dojo-attach-point\x3d"iconNode"\x3e\x3c/span\r\n\t\t\t\x3e\x3cspan data-dojo-attach-point\x3d"labelNode,focusNode" class\x3d"dijitTreeLabel" role\x3d"treeitem"\r\n\t\t\t\t   tabindex\x3d"-1" aria-selected\x3d"false" id\x3d"${id}_label"\x3e\x3c/span\x3e\r\n\t\t\x3c/span\r\n\t\x3e\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"containerNode" class\x3d"dijitTreeNodeContainer" role\x3d"presentation"\r\n\t\t style\x3d"display: none;" aria-labelledby\x3d"${id}_label"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:dijit/templates/Tree.html":'\x3cdiv role\x3d"tree"\x3e\r\n\t\x3cdiv class\x3d"dijitInline dijitTreeIndent" style\x3d"position: absolute; top: -9999px" data-dojo-attach-point\x3d"indentDetector"\x3e\x3c/div\x3e\r\n\t\x3cdiv class\x3d"dijitTreeExpando dijitTreeExpandoLoading" data-dojo-attach-point\x3d"rootLoadingIndicator"\x3e\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"containerNode" class\x3d"dijitTreeContainer" role\x3d"presentation"\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/array dojo/aspect dojo/cookie dojo/_base/declare dojo/Deferred dojo/promise/all dojo/dom dojo/dom-class dojo/dom-geometry dojo/dom-style dojo/errors/create dojo/fx dojo/has dojo/_base/kernel dojo/keys dojo/_base/lang dojo/on dojo/topic dojo/touch dojo/when ./a11yclick ./focus ./registry ./_base/manager ./_Widget ./_TemplatedMixin ./_Container ./_Contained ./_CssStateMixin ./_KeyNavMixin dojo/text!./templates/TreeNode.html dojo/text!./templates/Tree.html ./tree/TreeStoreModel ./tree/ForestStoreModel ./tree/_dndSelector dojo/query!css2".split(" "),function(d,
p,z,A,r,t,m,l,B,u,K,C,v,w,U,c,k,L,D,M,E,N,q,F,G,H,I,O,J,P,Q,R,V,S,T){function h(a){return c.delegate(a.promise||a,{addCallback:function(a){this.then(a)},addErrback:function(a){this.otherwise(a)}})}var y=A("dijit._TreeNode",[G,H,I,O,J],{item:null,isTreeNode:!0,label:"",_setLabelAttr:function(a){this.labelNode["html"==this.labelType?"innerHTML":"innerText"in this.labelNode?"innerText":"textContent"]=a;this._set("label",a);v("dojo-bidi")&&this.applyTextDir(this.labelNode)},labelType:"text",isExpandable:null,
isExpanded:!1,state:"NotLoaded",templateString:Q,baseClass:"dijitTreeNode",cssStateNodes:{rowNode:"dijitTreeRow"},_setTooltipAttr:{node:"rowNode",type:"attribute",attribute:"title"},buildRendering:function(){this.inherited(arguments);this._setExpando();this._updateItemClasses(this.item);this.isExpandable&&this.labelNode.setAttribute("aria-expanded",this.isExpanded);this.setSelected(!1)},_setIndentAttr:function(a){var b=Math.max(a,0)*this.tree._nodePixelIndent+"px";u.set(this.domNode,"backgroundPosition",
b+" 0px");u.set(this.rowNode,this.isLeftToRight()?"paddingLeft":"paddingRight",b);d.forEach(this.getChildren(),function(b){b.set("indent",a+1)});this._set("indent",a)},markProcessing:function(){this.state="Loading";this._setExpando(!0)},unmarkProcessing:function(){this._setExpando(!1)},_updateItemClasses:function(a){var b=this.tree,e=b.model;b._v10Compat&&a===e.root&&(a=null);this._applyClassAndStyle(a,"icon","Icon");this._applyClassAndStyle(a,"label","Label");this._applyClassAndStyle(a,"row","Row");
this.tree._startPaint(!0)},_applyClassAndStyle:function(a,b,e){var f="_"+b+"Class";b+="Node";var g=this[f];this[f]=this.tree["get"+e+"Class"](a,this.isExpanded);l.replace(this[b],this[f]||"",g||"");u.set(this[b],this.tree["get"+e+"Style"](a,this.isExpanded)||{})},_updateLayout:function(){var a=this.getParent(),a=!a||!a.rowNode||"none"==a.rowNode.style.display;l.toggle(this.domNode,"dijitTreeIsRoot",a);l.toggle(this.domNode,"dijitTreeIsLast",!a&&!this.getNextSibling())},_setExpando:function(a){var b=
["dijitTreeExpandoLoading","dijitTreeExpandoOpened","dijitTreeExpandoClosed","dijitTreeExpandoLeaf"];a=a?0:this.isExpandable?this.isExpanded?1:2:3;l.replace(this.expandoNode,b[a],b);this.expandoNodeText.innerHTML=["*","-","+","*"][a]},expand:function(){if(this._expandDeferred)return h(this._expandDeferred);this._collapseDeferred&&(this._collapseDeferred.cancel(),delete this._collapseDeferred);this.isExpanded=!0;this.labelNode.setAttribute("aria-expanded","true");(this.tree.showRoot||this!==this.tree.rootNode)&&
this.containerNode.setAttribute("role","group");l.add(this.contentNode,"dijitTreeContentExpanded");this._setExpando();this._updateItemClasses(this.item);this==this.tree.rootNode&&this.tree.showRoot&&this.tree.domNode.setAttribute("aria-expanded","true");var a=C.wipeIn({node:this.containerNode,duration:F.defaultDuration}),b=this._expandDeferred=new r(function(){a.stop()});p.after(a,"onEnd",function(){b.resolve(!0)},!0);a.play();return h(b)},collapse:function(){if(this._collapseDeferred)return h(this._collapseDeferred);
this._expandDeferred&&(this._expandDeferred.cancel(),delete this._expandDeferred);this.isExpanded=!1;this.labelNode.setAttribute("aria-expanded","false");this==this.tree.rootNode&&this.tree.showRoot&&this.tree.domNode.setAttribute("aria-expanded","false");l.remove(this.contentNode,"dijitTreeContentExpanded");this._setExpando();this._updateItemClasses(this.item);var a=C.wipeOut({node:this.containerNode,duration:F.defaultDuration}),b=this._collapseDeferred=new r(function(){a.stop()});p.after(a,"onEnd",
function(){b.resolve(!0)},!0);a.play();return h(b)},indent:0,setChildItems:function(a){var b=this.tree,e=b.model,f=[],g=b.focusedChild,c=this.getChildren();d.forEach(c,function(a){I.prototype.removeChild.call(this,a)},this);this.defer(function(){d.forEach(c,function(a){if(!a._destroyed&&!a.getParent()){var f=function(a){var g=e.getIdentity(a.item),c=b._itemNodesMap[g];1==c.length?delete b._itemNodesMap[g]:(g=d.indexOf(c,a),-1!=g&&c.splice(g,1));d.forEach(a.getChildren(),f)};b.dndController.removeTreeNode(a);
f(a);if(b.persist){var c=d.map(a.getTreePath(),function(a){return b.model.getIdentity(a)}).join("/"),x;for(x in b._openedNodes)x.substr(0,c.length)==c&&delete b._openedNodes[x];b._saveExpandedNodes()}b.lastFocusedChild&&!m.isDescendant(b.lastFocusedChild.domNode,b.domNode)&&delete b.lastFocusedChild;g&&!m.isDescendant(g.domNode,b.domNode)&&b.focus();a.destroyRecursive()}})});this.state="Loaded";a&&0<a.length?(this.isExpandable=!0,d.forEach(a,function(a){var g=e.getIdentity(a),c=b._itemNodesMap[g],
d;if(c)for(var h=0;h<c.length;h++)if(c[h]&&!c[h].getParent()){d=c[h];d.set("indent",this.indent+1);break}d||(d=this.tree._createTreeNode({item:a,tree:b,isExpandable:e.mayHaveChildren(a),label:b.getLabel(a),labelType:b.model&&b.model.labelType||"text",tooltip:b.getTooltip(a),ownerDocument:b.ownerDocument,dir:b.dir,lang:b.lang,textDir:b.textDir,indent:this.indent+1}),c?c.push(d):b._itemNodesMap[g]=[d]);this.addChild(d);(this.tree.autoExpand||this.tree._state(d))&&f.push(b._expandNode(d))},this),d.forEach(this.getChildren(),
function(a){a._updateLayout()})):this.isExpandable=!1;this._setExpando&&this._setExpando(!1);this._updateItemClasses(this.item);a=t(f);this.tree._startPaint(a);return h(a)},getTreePath:function(){for(var a=this,b=[];a&&a!==this.tree.rootNode;)b.unshift(a.item),a=a.getParent();b.unshift(this.tree.rootNode.item);return b},getIdentity:function(){return this.tree.model.getIdentity(this.item)},removeChild:function(a){this.inherited(arguments);var b=this.getChildren();0==b.length&&(this.isExpandable=!1,
this.collapse());d.forEach(b,function(a){a._updateLayout()})},makeExpandable:function(){this.isExpandable=!0;this._setExpando(!1)},setSelected:function(a){this.labelNode.setAttribute("aria-selected",a?"true":"false");l.toggle(this.rowNode,"dijitTreeRowSelected",a)},focus:function(){N.focus(this.focusNode)}});v("dojo-bidi")&&y.extend({_setTextDirAttr:function(a){!a||this.textDir==a&&this._created||(this._set("textDir",a),this.applyTextDir(this.labelNode),d.forEach(this.getChildren(),function(b){b.set("textDir",
a)},this))}});var n=A("dijit.Tree",[G,P,H,J],{baseClass:"dijitTree",store:null,model:null,query:null,label:"",showRoot:!0,childrenAttr:["children"],paths:[],path:[],selectedItems:null,selectedItem:null,openOnClick:!1,openOnDblClick:!1,templateString:R,persist:!1,autoExpand:!1,dndController:T,dndParams:"onDndDrop itemCreator onDndCancel checkAcceptance checkItemAcceptance dragThreshold betweenThreshold".split(" "),onDndDrop:null,itemCreator:null,onDndCancel:null,checkAcceptance:null,checkItemAcceptance:null,
dragThreshold:5,betweenThreshold:0,_nodePixelIndent:19,_publish:function(a,b){L.publish(this.id,c.mixin({tree:this,event:a},b||{}))},postMixInProperties:function(){this.tree=this;this.autoExpand&&(this.persist=!1);this._itemNodesMap={};!this.cookieName&&this.id&&(this.cookieName=this.id+"SaveStateCookie");this.expandChildrenDeferred=new r;this.pendingCommandsPromise=this.expandChildrenDeferred.promise;this.inherited(arguments)},postCreate:function(){this._initState();var a=this;this.own(k(this.containerNode,
k.selector(".dijitTreeNode",D.enter),function(b){a._onNodeMouseEnter(q.byNode(this),b)}),k(this.containerNode,k.selector(".dijitTreeNode",D.leave),function(b){a._onNodeMouseLeave(q.byNode(this),b)}),k(this.containerNode,k.selector(".dijitTreeRow",E.press),function(b){a._onNodePress(q.getEnclosingWidget(this),b)}),k(this.containerNode,k.selector(".dijitTreeRow",E),function(b){a._onClick(q.getEnclosingWidget(this),b)}),k(this.containerNode,k.selector(".dijitTreeRow","dblclick"),function(b){a._onDblClick(q.getEnclosingWidget(this),
b)}));this.model||this._store2model();this.own(p.after(this.model,"onChange",c.hitch(this,"_onItemChange"),!0),p.after(this.model,"onChildrenChange",c.hitch(this,"_onItemChildrenChange"),!0),p.after(this.model,"onDelete",c.hitch(this,"_onItemDelete"),!0));this.inherited(arguments);if(this.dndController){c.isString(this.dndController)&&(this.dndController=c.getObject(this.dndController));for(var b={},e=0;e<this.dndParams.length;e++)this[this.dndParams[e]]&&(b[this.dndParams[e]]=this[this.dndParams[e]]);
this.dndController=new this.dndController(this,b)}this._load();this.onLoadDeferred=h(this.pendingCommandsPromise);this.onLoadDeferred.then(c.hitch(this,"onLoad"))},_store2model:function(){this._v10Compat=!0;w.deprecated("Tree: from version 2.0, should specify a model object rather than a store/query");var a={id:this.id+"_ForestStoreModel",store:this.store,query:this.query,childrenAttrs:this.childrenAttr};this.params.mayHaveChildren&&(a.mayHaveChildren=c.hitch(this,"mayHaveChildren"));this.params.getItemChildren&&
(a.getChildren=c.hitch(this,function(a,e,f){this.getItemChildren(this._v10Compat&&a===this.model.root?null:a,e,f)}));this.model=new S(a);this.showRoot=!!this.label},onLoad:function(){},_load:function(){this.model.getRoot(c.hitch(this,function(a){var b=this.rootNode=this.tree._createTreeNode({item:a,tree:this,isExpandable:!0,label:this.label||this.getLabel(a),labelType:this.model.labelType||"text",textDir:this.textDir,indent:this.showRoot?0:-1});this.showRoot?(this.domNode.setAttribute("aria-multiselectable",
!this.dndController.singular),this.rootLoadingIndicator.style.display="none"):(b.rowNode.style.display="none",this.domNode.setAttribute("role","presentation"),this.domNode.removeAttribute("aria-expanded"),this.domNode.removeAttribute("aria-multiselectable"),this["aria-label"]?(b.containerNode.setAttribute("aria-label",this["aria-label"]),this.domNode.removeAttribute("aria-label")):this["aria-labelledby"]&&(b.containerNode.setAttribute("aria-labelledby",this["aria-labelledby"]),this.domNode.removeAttribute("aria-labelledby")),
b.labelNode.setAttribute("role","presentation"),b.labelNode.removeAttribute("aria-selected"),b.containerNode.setAttribute("role","tree"),b.containerNode.setAttribute("aria-expanded","true"),b.containerNode.setAttribute("aria-multiselectable",!this.dndController.singular));this.containerNode.appendChild(b.domNode);a=this.model.getIdentity(a);this._itemNodesMap[a]?this._itemNodesMap[a].push(b):this._itemNodesMap[a]=[b];b._updateLayout();this._expandNode(b).then(c.hitch(this,function(){this._destroyed||
(this.rootLoadingIndicator.style.display="none",this.expandChildrenDeferred.resolve(!0))}))}),c.hitch(this,function(a){console.error(this,": error loading root: ",a)}))},getNodesByItem:function(a){if(!a)return[];a=c.isString(a)?a:this.model.getIdentity(a);return[].concat(this._itemNodesMap[a])},_setSelectedItemAttr:function(a){this.set("selectedItems",[a])},_setSelectedItemsAttr:function(a){var b=this;return this.pendingCommandsPromise=this.pendingCommandsPromise.always(c.hitch(this,function(){var e=
d.map(a,function(a){return!a||c.isString(a)?a:b.model.getIdentity(a)}),f=[];d.forEach(e,function(a){f=f.concat(b._itemNodesMap[a]||[])});this.set("selectedNodes",f)}))},_setPathAttr:function(a){return a.length?h(this.set("paths",[a]).then(function(a){return a[0]})):h(this.set("paths",[]).then(function(a){return a[0]}))},_setPathsAttr:function(a){function b(a,c){var f=a.shift(),g=d.filter(c,function(a){return a.getIdentity()==f})[0];if(g)return a.length?e._expandNode(g).then(function(){return b(a,
g.getChildren())}):g;throw new n.PathError("Could not expand path at "+f);}var e=this;return h(this.pendingCommandsPromise=this.pendingCommandsPromise.always(function(){return t(d.map(a,function(a){a=d.map(a,function(a){return a&&c.isObject(a)?e.model.getIdentity(a):a});if(a.length)return b(a,[e.rootNode]);throw new n.PathError("Empty path");}))}).then(function(a){e.set("selectedNodes",a);return e.paths}))},_setSelectedNodeAttr:function(a){this.set("selectedNodes",[a])},_setSelectedNodesAttr:function(a){this.dndController.setSelection(a)},
expandAll:function(){function a(e){return b._expandNode(e).then(function(){var b=d.filter(e.getChildren()||[],function(a){return a.isExpandable});return t(d.map(b,a))})}var b=this;return h(a(this.rootNode))},collapseAll:function(){function a(e){var c=d.filter(e.getChildren()||[],function(a){return a.isExpandable}),c=t(d.map(c,a));return!e.isExpanded||e==b.rootNode&&!b.showRoot?c:c.then(function(){return b._collapseNode(e)})}var b=this;return h(a(this.rootNode))},mayHaveChildren:function(){},getItemChildren:function(){},
getLabel:function(a){return this.model.getLabel(a)},getIconClass:function(a,b){return!a||this.model.mayHaveChildren(a)?b?"dijitFolderOpened":"dijitFolderClosed":"dijitLeaf"},getLabelClass:function(){},getRowClass:function(){},getIconStyle:function(){},getLabelStyle:function(){},getRowStyle:function(){},getTooltip:function(){return""},_onDownArrow:function(a,b){(a=this._getNext(b))&&a.isTreeNode&&this.focusNode(a)},_onUpArrow:function(a,b){if(a=b.getPreviousSibling())for(b=a;b.isExpandable&&b.isExpanded&&
b.hasChildren();)b=b.getChildren(),b=b[b.length-1];else if(a=b.getParent(),this.showRoot||a!==this.rootNode)b=a;b&&b.isTreeNode&&this.focusNode(b)},_onRightArrow:function(a,b){b.isExpandable&&!b.isExpanded?this._expandNode(b):b.hasChildren()&&(b=b.getChildren()[0])&&b.isTreeNode&&this.focusNode(b)},_onLeftArrow:function(a,b){b.isExpandable&&b.isExpanded?this._collapseNode(b):(a=b.getParent())&&a.isTreeNode&&(this.showRoot||a!==this.rootNode)&&this.focusNode(a)},focusLastChild:function(){var a=this._getLast();
a&&a.isTreeNode&&this.focusNode(a)},_getFirst:function(){return this.showRoot?this.rootNode:this.rootNode.getChildren()[0]},_getLast:function(){for(var a=this.rootNode;a.isExpanded;){var b=a.getChildren();if(!b.length)break;a=b[b.length-1]}return a},_getNext:function(a){if(a.isExpandable&&a.isExpanded&&a.hasChildren())return a.getChildren()[0];for(;a&&a.isTreeNode;){var b=a.getNextSibling();if(b)return b;a=a.getParent()}return null},childSelector:".dijitTreeRow",isExpandoNode:function(a,b){return m.isDescendant(a,
b.expandoNode)||m.isDescendant(a,b.expandoNodeText)},_onNodePress:function(a,b){this.focusNode(a)},__click:function(a,b,e,c){var d=this.isExpandoNode(b.target,a);a.isExpandable&&(e||d)?this._onExpandoClick({node:a}):(this._publish("execute",{item:a.item,node:a,evt:b}),this[c](a.item,a,b),this.focusNode(a));b.stopPropagation();b.preventDefault()},_onClick:function(a,b){this.__click(a,b,this.openOnClick,"onClick")},_onDblClick:function(a,b){this.__click(a,b,this.openOnDblClick,"onDblClick")},_onExpandoClick:function(a){a=
a.node;this.focusNode(a);a.isExpanded?this._collapseNode(a):this._expandNode(a)},onClick:function(){},onDblClick:function(){},onOpen:function(){},onClose:function(){},_getNextNode:function(a){w.deprecated(this.declaredClass+"::_getNextNode(node) is deprecated. Use _getNext(node) instead.","","2.0");return this._getNext(a)},_getRootOrFirstNode:function(){w.deprecated(this.declaredClass+"::_getRootOrFirstNode() is deprecated. Use _getFirst() instead.","","2.0");return this._getFirst()},_collapseNode:function(a){a._expandNodeDeferred&&
delete a._expandNodeDeferred;if("Loading"!=a.state&&a.isExpanded){var b=a.collapse();this.onClose(a.item,a);this._state(a,!1);this._startPaint(b);return b}},_expandNode:function(a){if(a._expandNodeDeferred)return a._expandNodeDeferred;var b=this.model,e=a.item,d=this;a._loadDeferred||(a.markProcessing(),a._loadDeferred=new r,b.getChildren(e,function(b){a.unmarkProcessing();a.setChildItems(b).then(function(){a._loadDeferred.resolve(b)})},function(b){console.error(d,": error loading "+a.label+" children: ",
b);a._loadDeferred.reject(b)}));b=a._loadDeferred.then(c.hitch(this,function(){var b=a.expand();this.onOpen(a.item,a);this._state(a,!0);return b}));this._startPaint(b);return b},focusNode:function(a){var b=this.domNode.scrollLeft;this.focusChild(a);this.domNode.scrollLeft=b},_onNodeMouseEnter:function(){},_onNodeMouseLeave:function(){},_onItemChange:function(a){var b=this.model.getIdentity(a);if(b=this._itemNodesMap[b]){var e=this.getLabel(a),c=this.getTooltip(a);d.forEach(b,function(b){b.set({item:a,
label:e,tooltip:c});b._updateItemClasses(a)})}},_onItemChildrenChange:function(a,b){a=this.model.getIdentity(a);(a=this._itemNodesMap[a])&&d.forEach(a,function(a){a.setChildItems(b)})},_onItemDelete:function(a){a=this.model.getIdentity(a);var b=this._itemNodesMap[a];b&&(d.forEach(b,function(a){this.dndController.removeTreeNode(a);var b=a.getParent();b&&b.removeChild(a);this.lastFocusedChild&&!m.isDescendant(this.lastFocusedChild.domNode,this.domNode)&&delete this.lastFocusedChild;this.focusedChild&&
!m.isDescendant(this.focusedChild.domNode,this.domNode)&&this.focus();a.destroyRecursive()},this),delete this._itemNodesMap[a])},_initState:function(){this._openedNodes={};if(this.persist&&this.cookieName){var a=z(this.cookieName);a&&d.forEach(a.split(","),function(a){this._openedNodes[a]=!0},this)}},_state:function(a,b){if(!this.persist)return!1;var c=d.map(a.getTreePath(),function(a){return this.model.getIdentity(a)},this).join("/");if(1===arguments.length)return this._openedNodes[c];b?this._openedNodes[c]=
!0:delete this._openedNodes[c];this._saveExpandedNodes()},_saveExpandedNodes:function(){if(this.persist&&this.cookieName){var a=[],b;for(b in this._openedNodes)a.push(b);z(this.cookieName,a.join(","),{expires:365})}},destroy:function(){this._curSearch&&(this._curSearch.timer.remove(),delete this._curSearch);this.rootNode&&this.rootNode.destroyRecursive();this.dndController&&!c.isString(this.dndController)&&this.dndController.destroy();this.rootNode=null;this.inherited(arguments)},destroyRecursive:function(){this.destroy()},
resize:function(a){a&&B.setMarginBox(this.domNode,a);this._nodePixelIndent=B.position(this.tree.indentDetector).w||this._nodePixelIndent;this.expandChildrenDeferred.then(c.hitch(this,function(){this.rootNode.set("indent",this.showRoot?0:-1);this._adjustWidths()}))},_outstandingPaintOperations:0,_startPaint:function(a){this._outstandingPaintOperations++;this._adjustWidthsTimer&&(this._adjustWidthsTimer.remove(),delete this._adjustWidthsTimer);var b=c.hitch(this,function(){this._outstandingPaintOperations--;
0>=this._outstandingPaintOperations&&!this._adjustWidthsTimer&&this._started&&(this._adjustWidthsTimer=this.defer("_adjustWidths"))});M(a,b,b)},_adjustWidths:function(){this._adjustWidthsTimer&&(this._adjustWidthsTimer.remove(),delete this._adjustWidthsTimer);this.containerNode.style.width="auto";this.containerNode.style.width=this.domNode.scrollWidth>this.domNode.offsetWidth?"auto":"100%"},_createTreeNode:function(a){return new y(a)},focus:function(){this.lastFocusedChild?this.focusNode(this.lastFocusedChild):
this.focusFirstChild()}});v("dojo-bidi")&&n.extend({_setTextDirAttr:function(a){a&&this.textDir!=a&&(this._set("textDir",a),this.rootNode.set("textDir",a))}});n.PathError=K("TreePathError");n._TreeNode=y;return n});