var app;
var dojoConfig = {
    packages: [{
        name: "geolocate",
        location: "../assects/mock-geolocation-master/dist",
        main: "geolocate"
    }]
};
require([
    "geolocate",
    "esri/widgets/Track",
    "esri/Map",
    "esri/WebScene",
    "esri/views/MapView",
    "esri/views/SceneView",
    "esri/widgets/Search",
    "esri/widgets/BasemapGallery",
    "esri/core/watchUtils",
    "esri/layers/SceneLayer",
    "esri/widgets/Home",
    "esri/widgets/Locate",
    "esri/Camera",
    "esri/geometry/Polyline",
    "esri/geometry/Point",
    "esri/geometry/Multipoint",
    "esri/symbols/SimpleLineSymbol",
    "esri/Graphic",
    "esri/layers/GraphicsLayer",
    "./js/Clock.js",
    "dojo/query",
    "dojo/on",
    // Calcite Maps
    "calcite-maps/calcitemaps-v0.8",
    // Calcite Maps ArcGIS Support
    "calcite-maps/calcitemaps-arcgis-support-v0.8",
    // Bootstrap
    "bootstrap/Collapse",
    "bootstrap/Dropdown",
    "bootstrap/Tab",

    "dojo/domReady!"
], function (geolocate, Track, Map, WebScene, MapView, SceneView, Search, Basemaps, watchUtils, SceneLayer,
             Home, Locate, Camera, Polyline, Point, Multipoint, SimpleLineSymbol, Graphic,
             GraphicsLayer, Clock, query, on, CalciteMaps, CalciteMapsArcGIS) {
    app = {
        center: [-40, 40],
        scale: 50000000,
        basemap: "streets",
        id: "1effe520d2dc45b283d47dd8034be8d5",
        viewPadding: {
            top: 50,
            bottom: 0
        },
        uiComponents: ["zoom", "compass", "attribution"],
        mapView: null,
        sceneView: null,
        containerMap: "mapViewDiv",
        containerScene: "sceneViewDiv",
        activeView: null,
        searchWidget: null
    };

    /** ------------------------------------------------
     * 搜索控件
     */
    app.searchWidget = new Search({
        view: app.activeView
    }, "searchWidgetDiv");

    CalciteMapsArcGIS.setSearchExpandEvents(app.searchWidget);

    /** ------------------------------------------------
     * SceneView
     */
    var webScene = new WebScene({
        portalItem: {
            id: app.id
        }
    });
    app.sceneView = new SceneView({
        container: app.containerScene,
        map: webScene,
        center: app.center,
        scale: app.scale,
        padding: app.viewPadding,
        ui: {
            components: app.uiComponents
        },
        environment: {
            atmosphere: { // creates a realistic view of the atmosphere
                quality: "high"
            },
            lighting: {
                date: new Date(),
                directShadowsEnabled: true,
                cameraTrackingEnabled: false
            }
            /*starsEnabled: false,
            atmosphereEnabled: false*/
        }
    });
    CalciteMapsArcGIS.setPopupPanelSync(app.sceneView);

    /** ------------------------------------------------
     *MapView
     */
    var map = new Map({
        basemap: app.basemap
    });
    app.mapView = new MapView({
        container: app.containerMap,
        map: map,
        center: app.center,
        scale: app.scale,
        padding: app.viewPadding,
        ui: {
            components: app.uiComponents
        }
    });
    CalciteMapsArcGIS.setPopupPanelSync(app.mapView);

    /** ------------------------------------------------
     *时间控件
     */
    var clock = new Clock({
        el: "clock",
        skin: require.toUrl("./svg/clock.svg"),
        time: app.sceneView.environment.lighting.date.getTime()
    });
    app.sceneView.ui.add("clock", "bottom-right");
    //控件时间与地图绑定
    clock.on("time-change", function (time) {
        app.sceneView.environment.lighting.date = time;
    });

    /** ------------------------------------------------
     * 2D与3D底图切换，popup弹框
     */
    // Views
    function setActiveView(view) {
        app.activeView = view;
    }

    function syncViews(fromView, toView) {
        var viewPt = fromView.viewpoint.clone();
        fromView.container = null;
        if (fromView.type === "3d") {
            toView.container = app.containerMap;
        } else {
            toView.container = app.containerScene;
        }
        toView.padding = app.viewPadding;
        toView.viewpoint = viewPt;
    }

    // 搜索功能
    function syncSearch(view) {
        watchUtils.whenTrueOnce(view, "ready", function () {
            app.searchWidget.view = view;
            if (app.searchWidget.selectedResult) {
                app.searchWidget.search(app.searchWidget.selectedResult.name)
            }
        });
    }

    // 2D、3D地图切换
    query(".calcite-navbar li a[data-toggle='tab']").on("click", function (event) {
        if (event.target.text.indexOf("2D") > -1) {
            syncViews(app.sceneView, app.mapView);
            setActiveView(app.mapView);
        } else {
            syncViews(app.mapView, app.sceneView);
            setActiveView(app.sceneView);

        }
        syncSearch(app.activeView);
    });


    /** ------------------------------------------------
     *定位控件
     */
    var locateBtn = new Locate({
        view: app.sceneView,
        //goToLocationEnabled:false,
        goToOverride: gotoHome
    });
    app.sceneView.ui.add(locateBtn, {
        position: "top-left"
    });
    const camera = new Camera({
        heading: -50,
        tilt: 90,
        position: [120.058899, 30.214912]
    });

    function gotoHome() {
        app.sceneView.goTo(camera);
    }

    /** --------------------------------------------------
     * 地图取点
     */
    //var view = app.sceneView;
    app.sceneView.on("double-click", function (event) {
        var long = event.mapPoint.longitude;
        var lat = event.mapPoint.latitude;
        console.log("[" + long + "," + lat + "]");
        //app.sceneView.graphics.removeAll();
        onePolyline(long, lat);

        /*userIds.splice(0, userIds.length);
        jsonCoors.splice(0, jsonCoors.length);*/
        //realLoc();
    });

    /** --------------------------------------------------
     * @Description: TODO(人生第一条轨迹)
     * @auther: qzh
     * @date: 2018/11/1 23:14
     * @version:1.0
     */
    function onePolyline(long, lat) {
        var loc;
        var polyline;
        var lineSymbol;
        var graLine;
        $.get({
            url: "http://localhost:8080/userLoc/find/4",
            dataType: "json",
            success: function (data) {
                console.log("经度", data);
                loc = data.locVO;
                var array = new Array();
                for (var i = 0; i < loc.length; i++) {
                    var tempLocation = [loc[i].longitude, loc[i].latitude];
                    array.push(tempLocation);
                }
                walkWay();
                function walkWay() {
                    polyline = new Polyline({
                        paths: array
                    });
                    lineSymbol = {
                        type: "simple-line",
                        color: "#0505dd",
                        width: 4
                    };
                    graLine = new Graphic({
                        geometry: polyline,
                        symbol: lineSymbol,
                        popupTemplate: {
                            title: "<h4 style='text-align: center'><b>历史轨迹查询</b></h4>",
                            content: [{
                                type: "text",
                                text: "<div style='width: 320px;height: 120px;padding-left: 15px'>" +
                                "<div style='width: 85px;height: 100px;float:left;'><img src=\"picture\/stu\/" + data.userName + ".jpg\"></div>" +
                                "<div style='float: left;padding-left: 50px'><p><b>姓名：</b>" + data.nickName + "</p>" +
                                "<p><b>学院：</b>信息工程学院</p>" +
                                "<p><b>电话：</b>" + data.phone + "</p>" +
                                "<p><b>坐标：</b>" + long.toFixed(6) + "," + lat.toFixed(6) + "</p>" +
                                "</div>" +
                                "</div>"
                            }]
                        }
                    });
                    app.sceneView.graphics.add(graLine);

                }
            }
        })
    }

    /** ---------------------------------------------------
     * @Description: TODO(别跑！我看见你了)
     * @auther: qzh
     * @date: 2018/11/4 11:00
     * @version:1.0
     */
        //新建用户id数组，用来存放已经存在的用户
    var userIds = new Array();
    var jsonCoors = new Array();
    var pointGra;

    //var locPointLayer = new GraphicsLayer();
    function realLoc() {
        userIds.splice(0, userIds.length);
        jsonCoors.splice(0, jsonCoors.length);
        window.CHAT = {
            socket: null,
            init: function () {
                if (window.WebSocket) {
                    CHAT.socket = new WebSocket("ws://106.14.119.166:8000/websocket/3");
                    CHAT.socket.onopen = function () {
                        console.log("连接建立成功...");
                    },
                        CHAT.socket.onclose = function () {
                            console.log("连接关闭...");
                        },
                        CHAT.socket.onerror = function () {
                            console.log("发生错误...");
                        },
                        CHAT.socket.onmessage = function (e) {
                            console.log("接受到消息：" + e.data);
                            var jsonCoordinate = "";
                            if (e.data.indexOf("用") < 0) {
                                jsonCoordinate = JSON.parse(e.data);
                                console.log(jsonCoordinate);
                                //遍历用户id数组，判断该任务是否渲染
                                if (userIds.indexOf(jsonCoordinate.userId) === -1) {
                                    userIds.push(jsonCoordinate.userId);
                                    jsonCoors.push(jsonCoordinate);
                                    //app.sceneView.graphics.removeAll();
                                    console.log("jsonCoors::", jsonCoors);
                                    console.log("jsonCoors::", jsonCoors.length);
                                    //调用渲染点的函数
                                    for (var i = 0; i < jsonCoors.length; i++) {
                                        locrender(jsonCoors, i);
                                    }
                                } else {
                                    app.sceneView.graphics.removeAll();
                                    //locPointLayer.remove(pointGra);
                                    for (var i = 0; i < jsonCoors.length; i++) {
                                        if (jsonCoors[i].userId === jsonCoordinate.userId) {
                                            jsonCoors[i] = jsonCoordinate;
                                        }
                                        locrender(jsonCoors, i);
                                    }
                                }

                            }
                        }
                } else {
                    alert("浏览器不支持websocket协议...");
                }
            },
            /*chat: function () {
                var msg = document.getElementById("msgContent");
                CHAT.socket.send(msg.value);
            }*/
        };

        CHAT.init();
    }

    //定义人物实时渲染的点
    function locrender(jsonCoors, i) {
        var point = new Point({
            longitude: jsonCoors[i].locVO.longitude,
            latitude: jsonCoors[i].locVO.latitude
        });
        var symbol = {
            type: "simple-marker",
            color: "#3e5cff",
            outline: {
                color: [255, 255, 255],
                width: 2
            }
        };
        /*var symbol = {
            type: "picture-fill",  // autocasts as new PictureFillSymbol()
            url: "https://static.arcgis.com/images/Symbols/Shapes/BlackStarLargeB.png",
            width: "24px",
            height: "24px",
            outline: {
                style: "solid"
            }
        };*/
        pointGra = new Graphic({
            geometry: point,
            symbol: symbol,
            popupTemplate: {
                title: "<h4 style='text-align: center'><b>实时位置显示</b></h4>",
                content: [{
                    type: "text",
                    text: "<div style='width: 320px;height: 120px;padding-left: 15px'>" +
                    "<div style='width: 85px;height: 100px;float:left;'><img src=\"picture\/stu\/" + jsonCoors[i].userName + ".jpg\"></div>" +
                    "<div style='float: left;padding-left: 50px'><p><b>姓名：</b>" + jsonCoors[i].nickName + "</p>" +
                    "<p><b>学院：</b>信息工程学院</p>" +
                    "<p><b>电话：</b>" + jsonCoors[i].phone + "</p>" +
                    "<p><b>坐标：</b>" + jsonCoors[i].locVO.longitude.toFixed(6) + "," + jsonCoors[i].locVO.latitude.toFixed(6) + "</p>" +
                    "</div>" +
                    "</div>"
                }]
            }
        });
        //app.sceneView.graphics.removeAll();
        //webScene.add(locPointLayer);
        //console.log("pointGra::::",pointGra);
        //locPointLayer.add(pointGra);
        app.sceneView.graphics.add(pointGra);
    }

    /** ---------------------------------------------------
     * @Description: TODO(popupTemplates)
     * @auther: yfq
     * @date: 2018/11/4 11:01
     * @version:1.0
     */
    app.sceneView.when(function () {
        //新草坪序号01
        (function (win) {
            var xincaoping = webScene.layers.find(function (a) {
                return a.title === "新草坪";
            });
            win.xincaoping = xincaoping;
        })(window);
        xincaoping.popupTemplate = xincaoping_template;

        //新河流02
        (function (win) {
            var xinriver = webScene.layers.find(function (b) {
                return b.title === "新河流";
            });
            win.xinriver = xinriver;
        })(window);
        xinriver.popupTemplate = xinriver_template;

        //路面03
        (function (win) {
            var lumian = webScene.layers.find(function (c) {
                return c.title === "路面";
            });
            win.lumian = lumian;
        })(window);
        lumian.popupTemplate = lumian_template;
        //跑到04
        (function (win) {
            var paodao = webScene.layers.find(function (d) {
                return d.title === "跑道";
            });
            win.paodao = paodao;
        })(window);
        paodao.popupTemplate = paodao_template;
        //图书馆05
        (function (win) {
            var tushuguan = webScene.layers.find(function (e) {
                return e.title === "图书馆";
            });
            win.tushuguan = tushuguan;
        })(window);
        tushuguan.popupTemplate = tushuguan_template;
        //凉亭06
        (function (win) {
            var liangting = webScene.layers.find(function (f) {
                return f.title === "凉亭";
            });
            win.liangting = liangting;
        })(window);
        liangting.popupTemplate = liangting_template;
        //教学楼07
        (function (win) {
            var jiaoxuelou = webScene.layers.find(function (g) {
                return g.title === "教学楼";
            });
            win.jiaoxuelou = jiaoxuelou;
        })(window);
        jiaoxuelou.popupTemplate = jiaoxuelou_template;

        //体育馆08
        (function (win) {
            var tiyuguan = webScene.layers.find(function (h) {
                return h.title === "体育馆";
            });
            win.tiyuguan = tiyuguan;
        })(window);

        tiyuguan.popupTemplate = tiyuguan_template;

        //信息楼10
        (function (win) {
            var xinxilou = webScene.layers.find(function (i) {
                return i.title === "信息楼";
            });
            win.xinxilou = xinxilou;
        })(window);
        xinxilou.visible = true;
        xinxilou.popupTemplate = xinxilou_template;
        InfoBuilding = xinxilou;

        //路灯11
        (function (win) {
            var ludeng = webScene.layers.find(function (j) {
                return j.title === "路灯";
            });
            win.ludeng = ludeng;
        })(window);
        ludeng.popupTemplate = ludeng_template;

        //宿舍楼12
        (function (win) {
            var sushelou = webScene.layers.find(function (k) {
                return k.title === "宿舍楼";
            });
            win.sushelou = sushelou;
        })(window);
        sushelou.popupTemplate = sushelou_template;
        //房间13
        (function (win) {
            var fangjian = webScene.layers.find(function (l) {
                return l.title === "房间";
            });
            win.fangjian = fangjian;
        })(window);
        fangjian.popupTemplate = fangjian_template;

        //走廊14
        (function (win) {
            var zoulang = webScene.layers.find(function (m) {
                return m.title === "走廊";
            })
            win.zoulang = zoulang;
        })(window);
        zoulang.popupTemplate = zoulang_template;

        //墙15
        (function (win) {
            var qiang = webScene.layers.find(function (n) {
                return n.title === "墙";
            });
            win.qiang = qiang;
        })(window);
        qiang.popupTemplate = qiang_template;
        //门16
        (function (win) {
            var men = webScene.layers.find(function (o) {
                return o.title === "门";
            });
            win.men = men;
        })(window);
        men.popupTemplate = men_template;
        //树17
        (function (win) {
            var shu = webScene.layers.find(function (p) {
                return p.title === "树";
            });
            win.shu = shu;
        })(window);

        shu.popupTemplate = shu_template;
        //养贤18
        (function (win) {
            var yangxian = webScene.layers.find(function (q) {
                return q.title === "YangXian";
            });
            win.yangxian = yangxian;
        })(window);
        yangxian.popupTemplate = yangxian_template;

        //食堂19
        (function (win) {
            var shitang = webScene.layers.find(function (r) {
                return r.title === "食堂1";
            });
            win.shitang = shitang;
        })(window);
        shitang.popupTemplate = shitang_template;
    });
    //新草坪popupTempalte开始
    //创建新草坪的action开始
    var xincaopingAction = {
        title: "简介",
        id: "xincaoping",
        className: "esri-icon-documentation \ue64b"
        //image:"pic/action/detail.png"
    };
    var xincaopingAction_pic = {
        title: "图片",
        id: "xincaoping_star",
        //image:"pic/action/pic.png"
        className: "esri-icon-media \ue661"
    };
    var xincaopingAction_return = {
        title: "返回",
        id: "xincaoping_return",
        className: "esri-icon-rotate \ue66e"
        //image:"pic/action/return.png"
    };

    function xincaopingInfo() {
        //alert("新草坪的action");
        xincaoping.popupTemplate.content = [
            //文本域开始
            {
                type: "text",
                text: "<strong>简介：</strong>{Introduce}"
            }
            //文本结束
        ];
    }

    function xincaopingstar() {
        xincaoping.popupTemplate.content = [
            {
                type: "media",
                mediaInfos: [{
                    //title:"图片标题",
                    type: "image",  //图片
                    value: {
                        sourceURL: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536736461375&di=f0c4ba35dbd12037f5351c76206bf4df&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb2de9c82d158ccbf0228b12813d8bc3eb135410f.jpg" //图片URL
                    }
                }]
            }
        ]
    }

    app.sceneView.popup.on("trigger-action", function (event) {
        if (event.action.id === "xincaoping") {
            xincaopingInfo();
        } else if (event.action.id === "xincaoping_star") {
            xincaopingstar();
        } else if (event.action.id === "xincaoping_return") {
            xincaoping.popupTemplate = xincaoping_template;
        }
    });
    //新草坪popupTempalte开始
    var xincaoping_template = {
        title: "<font color='green'>草坪</font>",
        content: [{
            type: "fields",
            fieldInfos: [{
                fieldName: "Name",
                label: "名称",
                visible: true,
            },
                {
                    fieldName: "introduce",
                    label: "介绍",
                    visible: true,
                    /* format:{
                        digitSeparator:true,
                        places:0
                    } */
                }
            ]  //fieldInfos 结束
        }],
        actions: [xincaopingAction, xincaopingAction_pic, xincaopingAction_return]//新草坪的action
    };
    //新草坪结束
    //新河流action开始
    /* var xinriverAction={
         title:"详解",
         id:"xinriver1",
         className:"esri-icon-documentation \ue64b"
     };*/
    var xinriver_pic = {
        title: "图片",
        id: "xinriver1",
        //image:"pic/action/pic.png"
        className: "esri-icon-media \ue661"
    };

    var xinriver_video = {
        title: "视频",
        id: "xinriver2",
        className: "esri-icon-media2 \ue662"
    };

    var xinriver_return = {
        title: "返回",
        id: "xincaoping3",
        className: "esri-icon-rotate \ue66e"
        //image:"pic/action/return.png"
    };

    function xinriverPic() {
        xinriver.popupTemplate.content = [
            {
                type: "media",
                mediaInfos: [{
                    //title:"图片标题",
                    type: "image",  //图片
                    value: {
                        sourceURL: "picture/river/{Name}.jpg" //图片URL
                    }
                }]
            }
        ];
    }

    function xinriverVideo() {
        xinriver.popupTemplate.content = [
            {
                type: "text",
                text: "<video width='320' height='240' controls><source src='video/movie.mp4' type='video/mp4'></video>"
            }
        ];
    }

    app.sceneView.popup.on("trigger-action", function (event) {
        if (event.action.id === "xinriver1") {
            xinriverPic();
        } else if (event.action.id === "xinriver2") {
            xinriverVideo();
        }
        else if (event.action.id === "xincaoping3") {
            xinriver.popupTemplate = xinriver_template;
        }
    });

    //新河流开始，序号是2
    var xinriver_template = {
        title: "<font color='DarkTurquoise '>河流</font>",
        content: [{
            type: "fields",
            fieldInfos: [{
                fieldName: "Name",
                label: "名称",
                visible: true,
            },
                {
                    fieldName: "time",
                    label: "创建时间",
                    visible: true,
                }]  //fieldInfos 结束
        }],
        actions: [xinriver_pic, xinriver_video, xinriver_return]
    };
    //新河流结束

    //新路面action开始
    var lumianAction = {
        title: "简介",
        id: "lumian1",
        className: "esri-icon-documentation \ue64b"

    };
    var lumian_pic = {
        title: "图片",
        id: "lumian2",

        className: "esri-icon-media \ue661"
    };
    var lumian_return = {
        title: "返回",
        id: "lumian3",
        className: "esri-icon-rotate \ue66e"

    };

    function lumianInfo() {
        lumian.popupTemplate.content = [
            //文本域开始
            {
                type: "text",
                text: "<strong>简介：</strong>{introduce}"
            }
        ];
    }

    function lumianPic() {
        lumian.popupTemplate.content = [
            {
                type: "media",
                mediaInfos: [{
                    //title:"图片标题",
                    type: "image",  //图片
                    value: {
                        //sourceURL:"road/lumian.jpg" //图片URL
                        sourceURL: "picture/road/lumian.jpg" //图片URL
                    }
                }]
            }
        ];
    }

    app.sceneView.popup.on("trigger-action", function (event) {
        if (event.action.id === "lumian1") {
            lumianInfo();
        } else if (event.action.id === "lumian2") {
            lumianPic();
        }
        else if (event.action.id === "lumian3") {
            lumian.popupTemplate = lumian_template;
        }
    });
    //路面开始
    var lumian_template = {
        title: "<font color='black'>路面</font>",
        content: [{
            type: "fields",
            fieldInfos: [{
                fieldName: "Name",
                label: "名称",
                visible: true,
            },
                {
                    fieldName: "time",
                    label: "创建时间",
                    visible: true,
                }]  //fieldInfos 结束
        }],
        actions: [lumianAction, lumian_pic, lumian_return]
    };
    //跑的action开始
    var paodaoAction = {
        title: "简介",
        id: "paodao1",
        className: "esri-icon-documentation \ue64b"

    };
    var paodao_pic = {
        title: "图片",
        id: "paodao2",
        className: "esri-icon-media \ue661"
    };
    var paodao_return = {
        title: "返回",
        id: "paodao3",
        className: "esri-icon-rotate \ue66e"

    };

    function paodaoInfo() {
        paodao.popupTemplate.content = [
            {
                type: "text",
                text: "<strong>简介：</strong>{introduce}"
            }
        ];
    }

    function paodaoPic() {
        paodao.popupTemplate.content = [
            {
                type: "media",
                mediaInfos: [{
                    //title:"图片标题",
                    type: "image",  //图片
                    value: {
                        sourceURL: "picture/run/{Name}.jpg" //图片URL
                    }
                }]
            }
        ];
    }

    app.sceneView.popup.on("trigger-action", function (event) {
        if (event.action.id === "paodao1") {
            paodaoInfo();
        } else if (event.action.id === "paodao2") {
            paodaoPic();
        }
        else if (event.action.id === "paodao3") {
            paodao.popupTemplate = paodao_template;
        }
    });

    //跑道tempalte序号是04开始
    var paodao_template = {
        title: "<font color='Brown'>跑道</font>",
        content: [{
            type: "fields",
            fieldInfos: [{
                fieldName: "Name",
                label: "名称",
                visible: true,
            },
                {
                    fieldName: "time",
                    label: "创建时间",
                    visible: true,
                }

            ]  //fieldInfos 结束
        }],
        actions: [paodaoAction, paodao_pic, paodao_return]
    };
    //跑道结束

    //图书馆action开始
    var tushuguanAction = {
        title: "简介",
        id: "tushuguan1",
        className: "esri-icon-documentation \ue64b"

    };
    var tushuguan_pic = {
        title: "图片",
        id: "tushuguan2",
        className: "esri-icon-media \ue661"
    };
    var tushuguan_return = {
        title: "返回",
        id: "tushuguan3",
        className: "esri-icon-rotate \ue66e"

    };

    function tushuguanInfo() {
        tushuguan.popupTemplate.content = [
            //文本域开始
            {
                type: "text",
                text: "<strong>简介：</strong>{introduce}"
            }
            //文本结束
        ];
    }

    function tushuguanPic() {
        tushuguan.popupTemplate.content = [
            {
                type: "media",
                mediaInfos: [{
                    //title:"图片标题",
                    type: "image", //图片
                    value: {
                        sourceURL: "picture/libary/{objectid}.jpg" //图片URL
                    }
                }]
            }
        ];
    }

    app.sceneView.popup.on("trigger-action", function (event) {
        if (event.action.id === "tushuguan1") {
            tushuguanInfo();
        } else if (event.action.id === "tushuguan2") {
            tushuguanPic();
        }
        else if (event.action.id === "tushuguan3") {
            tushuguan.popupTemplate = tushuguan_template;
        }
    });
    //图书馆开始
    var tushuguan_template = {
        title: "<font color='CornflowerBlue'>图书馆</font>",
        content: [
            {
                type: "fields",
                fieldInfos: [{
                    fieldName: "height",
                    label: "高度",
                    visible: true,
                },
                    {
                        fieldName: "tier",
                        label: "层数",
                        visible: true,
                    },
                    {
                        fieldName: "number",
                        label: "数量",
                        visible: true,
                    },
                    {
                        fieldName: "openinghours",
                        label: "开放时间",
                        visible: true,
                    },
                    {
                        fieldName: "classify",
                        label: "种类",
                        visible: true,
                    },
                    {
                        fieldName: "objectid",
                        label: "序号",
                        visible: false,
                    }
                ]
            }],
        actions: [tushuguanAction, tushuguan_pic, tushuguan_return]
    };
    //图书馆结束
    //凉亭action开始
    var liangting_pic = {
        title: "图片",
        id: "liangting1",
        className: "esri-icon-media \ue661"
    };
    var liangting_return = {
        title: "返回",
        id: "tliangting2",
        className: "esri-icon-rotate \ue66e"

    };

    function liangtingPic() {
        liangting.popupTemplate.content = [
            {
                type: "media",
                mediaInfos: [{
                    //title:"图片标题",
                    type: "image",  //图片
                    value: {
                        sourceURL: "picture/liangting/{objectid}.jpg" //图片URL
                    }
                }]
            }
        ];
    }

    app.sceneView.popup.on("trigger-action", function (event) {
        if (event.action.id === "liangting1") {
            liangtingPic();
        } else if (event.action.id === "tliangting2") {
            liangting.popupTemplate = liangting_template;
        }

    });

    //凉亭开始
    var liangting_template = {
        title: "<font color='DarkSlateGray'>凉亭</font>",
        content: [
            {
                type: "fields",
                fieldInfos: [
                    {
                        fieldName: "height",
                        label: "高度",
                        visible: true,
                    },
                    {
                        fieldName: "objectid",
                        label: "序号",
                        visible: false,
                    }
                ]
                //fieldInfos 结束
            }
        ],
        actions: [liangting_pic, liangting_return]
    };
    //凉亭结束

    //教学楼action
    var jiaoxuelouAction = {
        title: "简介",
        id: "jiaoxuelou1",
        className: "esri-icon-documentation \ue64b"

    };

    //饼图的action
    var jiaoxuelou_pie = {
        title: "饼状图",
        id: "jiaoxuelou4",
        className: "esri-icon-polyline\n" + "\ue68c"

    };
    var jiaoxuelou_pic = {
        title: "图片",
        id: "jiaoxuelou2",
        className: "esri-icon-media \ue661"
    };
    var jiaoxuelou_return = {
        title: "返回",
        id: "jiaoxuelou3",
        className: "esri-icon-rotate \ue66e"

    };

    function jiaoxuelouInfo() {
        jiaoxuelou.popupTemplate.content = [
            //文本域开始
            {
                type: "text",
                text: "<strong>简介：</strong>{introduce}"
            }
        ];
    }

    //饼图实例函数
    function pieTest1() {
        var myChart = echarts.init(document.getElementById("PieTest"));
        myChart.setOption({
            title: {
                text: '教学楼情况',
                // subtext: '',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                //orient: 'vertical',
                x: 'center',
                bottom: '20%',
                data: ['休息室', '教室', '实验室', '空余教室', '室类运动场', '自习室', '会议室']
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '40%'],
                    data: [
                        {value: 186, name: '休息室'},
                        {value: 65, name: '教室'},
                        {value: 24, name: '实验室'},
                        {value: 1, name: '空余教室'},
                        {value: 3, name: '室类运动场'},
                        {value: 14, name: '自习室'},
                        {value: 8, name: '会议室'}

                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        });
    }

    //教学楼饼图函数
    function jiaoxuelouPie() {
        var results = "<div id=\"PieTest\" style=\"width:300px;height:380px;margin:0 auto;\"></div>";
        jiaoxuelou.popupTemplate.content = results;
        pieTest1();
    }

    function jiaoxuelouPic() {
        jiaoxuelou.popupTemplate.content = [
            //文本结束
            {
                type: "media",
                mediaInfos: [{
                    //title:"图片标题",
                    type: "image", //图片
                    value: {
                        sourceURL: "picture/jiaoxuelou/{name}.jpg" //图片URL
                    }
                }]
            }
        ];
    }

    app.sceneView.popup.on("trigger-action", function (event) {
        if (event.action.id === "jiaoxuelou1") {
            jiaoxuelouInfo();
        } else if (event.action.id === "jiaoxuelou2") {
            jiaoxuelouPic();
        }
        else if (event.action.id === "jiaoxuelou3") {
            jiaoxuelou.popupTemplate = jiaoxuelou_template;
        }
        else if (event.action.id === "jiaoxuelou4") {
            jiaoxuelouPie();
        }
    });

    //教学楼开始
    var jiaoxuelou_template = {
        title: "<font color='Peru'>教学楼</font>",
        content: [
            {
                type: "fields",
                fieldInfos: [{
                    fieldName: "height",
                    label: "高度",
                    visible: true,
                },
                    {
                        fieldName: "number",
                        label: "楼牌号",
                        visible: true,
                    },
                    {
                        fieldName: "name",
                        label: "名称",
                        visible: true,
                    },
                    {
                        fieldName: "time",
                        label: "建造时间",
                        visible: true,
                    },
                    {
                        fieldName: "college",
                        label: "学院名称",
                        visible: true,
                    },
                    {
                        fieldName: "roomnumber",
                        label: "休息室（间）",
                        visible: true,
                    },
                    {
                        fieldName: "classroomnumber",
                        label: "教室（间）",
                        visible: true,
                    },
                    {
                        fieldName: "labnumber",
                        label: "实验室（间）",
                        visible: true,
                    },
                    {
                        fieldName: "emptyroomnumber",
                        label: "空余教室（间）",
                        visible: true,
                    },
                    {
                        fieldName: "playroomnumber",
                        label: "室类运动场（间）",
                        visible: true,
                    },
                    {
                        fieldName: "studyroomnumber",
                        label: "自习室（间）",
                        visible: true,
                    },
                    {
                        fieldName: "meetingroomnumber",
                        label: "会议室（间）",
                        visible: true,
                    }
                ]
            }

        ],
        actions: [jiaoxuelouAction, jiaoxuelou_pic, jiaoxuelou_pie, jiaoxuelou_return]
    };
    //教学楼结束
    //体育馆开始
    var tiyuguanAction = {
        title: "简介",
        id: "tiyuguan1",
        className: "esri-icon-documentation \ue64b"

    };
    var tiyuguan_pic = {
        title: "图片",
        id: "tiyuguan2",
        className: "esri-icon-media \ue661"
    };
    var tiyuguan_return = {
        title: "返回",
        id: "tiyuguan3",
        className: "esri-icon-rotate \ue66e"

    };

    function tiyuguanInfo() {
        tiyuguan.popupTemplate.content = [
            //文本域开始
            {
                type: "text",
                text: "<strong>简介：</strong>{introduce}"
            }
        ];
    }

    function tiyuguanPic() {
        tiyuguan.popupTemplate.content = [
            //文本结束
            {
                type: "media",
                mediaInfos: [{
                    //title:"图片标题",
                    type: "image", //图片
                    value: {
                        sourceURL: "picture/tiyuguan/{height}.jpg" //图片URL
                    }
                }]
            }
        ];
    }

    app.sceneView.popup.on("trigger-action", function (event) {
        if (event.action.id === "tiyuguan1") {
            tiyuguanInfo();
        } else if (event.action.id === "tiyuguan2") {
            tiyuguanPic();
        }
        else if (event.action.id === "tiyuguan3") {
            tiyuguan.popupTemplate = tiyuguan_template;
        }
    });

    var tiyuguan_template = {
        title: "<font color='LightSlateGray'>体育馆</font>",
        content: [{
            type: "fields",
            fieldInfos: [
                {
                    fieldName: "objectid",
                    label: "序号",
                    visible: false,
                },
                {
                    fieldName: "height",
                    label: "高度",
                    visible: true,
                },
                {
                    fieldName: "belong",
                    label: "所属部门",
                    visible: true,
                },
                {
                    fieldName: "exercise",
                    label: "体育活动",
                    visible: true,
                },
                {
                    fieldName: "time",
                    label: "建造时间",
                    visible: true,
                },
                {
                    fieldName: "game",
                    label: "举办比赛",
                    visible: true,
                },
                {
                    fieldName: "capcity",
                    label: "容纳人数",
                    visible: true,
                }
            ]
            //fieldInfos 结束
        }
        ],
        actions: [tiyuguanAction, tiyuguan_pic, tiyuguan_return]
    };
    //体育馆结束
    //信息楼开始
    var xinxilouAction = {
        title: "简介",
        id: "xinxilou1",
        className: "esri-icon-documentation \ue64b"

    };
    var xinxilou_pic = {
        title: "图片",
        id: "xinxilou2",
        className: "esri-icon-media \ue661"
    };
    var xinxilou_return = {
        title: "返回",
        id: "xinxilou3",
        className: "esri-icon-rotate \ue66e"

    };

    function xinxilouInfo() {
        xinxilou.popupTemplate.content = [
            {
                type: "text",
                text: "<strong>简介：</strong>{introduce}<br><video width='430' height='240' controls><source src='video/xinxi.mp4' type='video/mp4'></video>"
            }
        ];
    }

    function xinxilouPic() {
        xinxilou.popupTemplate.content = [
            {
                type: "media",
                mediaInfos: [{
                    //title:"图片标题",
                    type: "image",  //图片
                    value: {
                        sourceURL: "picture/1-A/1号楼.jpg" //图片URL
                    }
                }]
            }
        ];
    }

    app.sceneView.popup.on("trigger-action", function (event) {
        if (event.action.id === "xinxilou1") {
            xinxilouInfo();
        } else if (event.action.id === "xinxilou2") {
            xinxilouPic();
        }
        else if (event.action.id === "xinxilou3") {
            xinxilou.popupTemplate = xinxilou_template;
        }
    });

    var xinxilou_template = {
        title: "<font color='Peru'>信息楼</font>",
        content: [{
            type: "fields",
            fieldInfos: [
                {
                    fieldName: "height",
                    label: "高度",
                    visible: true,
                },
                {
                    fieldName: "number",
                    label: "",
                    visible: false,
                },
                {
                    fieldName: "name",
                    label: "名字",
                    visible: true,
                },
                {
                    fieldName: "time",
                    label: "建造时间",
                    visible: true,
                },
                {
                    fieldName: "college",
                    label: "信息学院",
                    visible: true,
                },
                {
                    fieldName: "roomnumber",
                    label: "房间数量",
                    visible: true,
                },
                {
                    fieldName: "officenum",
                    label: "办公室数量",
                    visible: true,
                },
                {
                    fieldName: "classroomnum",
                    label: "教室数量",
                    visible: true,
                },
                {
                    fieldName: "labnum",
                    label: "实验室数量",
                    visible: true,
                },
                {
                    fieldName: "officenum",
                    label: "办公室数量",
                    visible: true,
                },
                {
                    fieldName: "emptyroomnum",
                    label: "空房间数量",
                    visible: true,
                },
                {
                    fieldName: "playroomnum",
                    label: "活动室数量",
                    visible: true,
                },
                {
                    fieldName: "meetingroomnum",
                    label: "会议室数量",
                    visible: true,
                },
                {
                    fieldName: "studyroomnum",
                    label: "自习室数量",
                    visible: true,
                }
            ]
            //fieldInfos 结束
        }],

        actions: [xinxilouAction, xinxilou_pic, xinxilou_return],
    };
    //信息楼结束
    //路灯开始

    var ludeng_pic = {
        title: "图片",
        id: "ludeng2",
        className: "esri-icon-media \ue661"
    };
    var ludeng_return = {
        title: "返回",
        id: "ludeng3",
        className: "esri-icon-rotate \ue66e"

    };

    function ludengPic() {
        ludeng.popupTemplate.content = [
            {
                type: "media",
                mediaInfos: [{
                    //title:"图片标题",
                    type: "image",  //图片
                    value: {
                        sourceURL: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536770035919&di=98c121a7ccac2e85ee561735b6c736cd&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F11%2F97%2F65%2F10b58PICSKQ.jpg" //图片URL
                    }
                }]
            }
        ];
    }

    app.sceneView.popup.on("trigger-action", function (event) {
        if (event.action.id === "ludeng2") {
            ludengPic();
        }
        else if (event.action.id === "ludeng3") {
            ludeng.popupTemplate = ludeng_template;
        }
    });

    var ludeng_template = {
        title: "<font color='PaleGodenrod'>路灯</font>",
        content: [
            {
                type: "fields",
                fieldInfos: [
                    {
                        fieldName: "height",
                        label: "高度",
                        visible: true,
                    },
                    {
                        fieldName: "name",
                        label: "路灯",
                        visible: true,
                    }
                ]
                //fieldInfos 结束
            }
        ],
        actions: [ludeng_pic, ludeng_return],
    };
    //路灯结束
    //宿舍楼开始

    var sushelou_pic = {
        title: "图片",
        id: "sushelou2",
        className: "esri-icon-media \ue661"
    };
    var sushelou_return = {
        title: "返回",
        id: "sushelou3",
        className: "esri-icon-rotate \ue66e"

    };

    function sushelouPic() {
        sushelou.popupTemplate.content = [
            {
                type: "media",
                mediaInfos: [{
                    //title:"图片标题",
                    type: "image",  //图片
                    value: {
                        sourceURL: "picture/suse/{name}.jpg" //图片URL
                    }
                }]
            }
        ];
    }

    app.sceneView.popup.on("trigger-action", function (event) {
        if (event.action.id === "sushelou2") {
            sushelouPic();
        }
        else if (event.action.id === "sushelou3") {
            sushelou.popupTemplate = sushelou_template;
        }
    });

    var sushelou_template = {
        title: "<font color='SaddleBrown'>宿舍楼</font>",
        content: [

            {
                type: "fields",
                fieldInfos: [
                    {
                        fieldName: "height",
                        label: "高度",
                        visible: true,
                    },
                    {
                        fieldName: "name",
                        label: "楼名",
                        visible: true,
                    },
                    {
                        fieldName: "number",
                        label: "序列号",
                        visible: true,
                    },
                    {
                        fieldName: "tier",
                        label: "层数",
                        visible: true,
                    },
                    {
                        fieldName: "principal",
                        label: "总负责人",
                        visible: true,
                    },
                    {
                        fieldName: "administrator",
                        label: "管理员",
                        visible: true,
                    }, {
                        fieldName: "layerresponsible",
                        label: "层长",
                        visible: true,
                    }, {
                        fieldName: "roomnum",
                        label: "房间数",
                        visible: true,
                    }
                    , {
                        fieldName: "capcity",
                        label: "容纳人数",
                        visible: true,
                    }, {
                        fieldName: "time",
                        label: "建造时间",
                        visible: true,
                    }
                ]
                //fieldInfos 结束
            }],
        actions: [sushelou_pic, sushelou_return]
    };
    //宿舍楼结束
    //房间开始

    var fangjian_pic = {
        title: "图片",
        id: "fangjian2",
        className: "esri-icon-media \ue661"
    };
    var fangjian_return = {
        title: "返回",
        id: "fangjian3",
        className: "esri-icon-rotate \ue66e"

    };

    function fangjianPic() {
        fangjian.popupTemplate.content = [
            {
                type: "media",
                mediaInfos: [{
                    //title:"图片标题",
                    type: "image",  //图片
                    value: {
                        sourceURL: "http://fscomps.fotosearch.com/compc/CSP/CSP620/k21296352.jpg" //图片URL
                    }
                }]
            }
        ];
    }

    app.sceneView.popup.on("trigger-action", function (event) {
        if (event.action.id === "fangjian2") {
            fangjianPic();
        }
        else if (event.action.id === "fangjian3") {
            fangjian.popupTemplate = fangjian_template;
        }
    });

    var fangjian_template = {
        title: "<font color='Bisque'>房间</font>",
        content: [
            {
                type: "fields",
                fieldInfos: [
                    {
                        fieldName: "height",
                        label: "高度",
                        visible: true,
                    },
                    {
                        fieldName: "number",
                        label: "",
                        visible: true,
                    },
                    {
                        fieldName: "name",
                        label: "名字",
                        visible: true,
                    },
                    {
                        fieldName: "research_direction",
                        label: "研究方向",
                        visible: true,
                    },
                    {
                        fieldName: "number_master",
                        label: "硕士人数",
                        visible: true,
                    },
                    {
                        fieldName: "number_doctor",
                        label: "博士人数",
                        visible: true,
                    },
                    {
                        fieldName: "tutor",
                        label: "导师",
                        visible: true,
                    },
                    {
                        fieldName: "introduce",
                        label: "简介",
                        visible: true,
                    },
                    {
                        fieldName: "number_class",
                        label: "容纳人数",
                        visible: true,
                    }
                ]
                //fieldInfos 结束
            }
        ],
        actions: [fangjian_pic, fangjian_return]
    };
    //房间结束
    //走廊开始
    var zoulang_pic = {
        title: "图片",
        id: "zoulang2",
        className: "esri-icon-media \ue661"
    };
    var zoulang_return = {
        title: "返回",
        id: "zoulang3",
        className: "esri-icon-rotate \ue66e"

    };

    function zoulangInfo() {
        zoulang.popupTemplate.content = [
            {
                type: "text",
                text: "<strong>简介：</strong>{introduce}"
            }
        ];
    }

    function zoulangPic() {
        zoulang.popupTemplate.content = [
            {
                type: "media",
                mediaInfos: [{
                    //title:"图片标题",
                    type: "image",  //图片
                    value: {
                        sourceURL: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536775124206&di=b2f63113af0d531620dd2148dca1a188&imgtype=0&src=http%3A%2F%2Fs8.sinaimg.cn%2Fmiddle%2F5f5b4c994842bb5b92677%26690" //图片URL
                    }
                }]
            }
        ];
    }

    app.sceneView.popup.on("trigger-action", function (event) {
        if (event.action.id === "zoulang2") {
            zoulangPic();
        }
        else if (event.action.id === "zoulang3") {
            zoulang.popupTemplate = zoulang_template;
        }
    });

    var zoulang_template = {
        title: "<font color='RosyBrown'>走廊</font>",
        content: [{
            type: "fields",
            fieldInfos: [
                {
                    fieldName: "corridor",
                    label: "走廊",
                    visible: true,
                },
                {
                    fieldName: "floor",
                    label: "层数",
                    visible: true,
                }
            ]
            //fieldInfos 结束
        }],
        actions: [zoulang_pic, zoulang_return]
    };
    //走廊结束
    //墙开始
    var qiang_pic = {
        title: "图片",
        id: "qiang2",
        className: "esri-icon-media \ue661"
    };
    var qiang_return = {
        title: "返回",
        id: "qiang3",
        className: "esri-icon-rotate \ue66e"

    };

    function qiangPic() {
        qiang.popupTemplate.content = [
            {
                type: "media",
                mediaInfos: [{
                    //title:"图片标题",
                    type: "image",  //图片
                    value: {
                        sourceURL: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536816750488&di=a68344ae62aba51ea1efdec92f4a35af&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3Dadc3ca8095510fb36c147fd7b04badf9%2F4b90f603738da977721c0212bb51f8198618e3dc.jpg" //图片URL
                    }
                }]
            }
        ];
    }

    app.sceneView.popup.on("trigger-action", function (event) {
        if (event.action.id === "qiang2") {
            qiangPic();
        }
        else if (event.action.id === "qiang3") {
            qiang.popupTemplate = qiang_template;
        }
    });

    var qiang_template = {
        title: "<font color='RosyBrown'>墙</font>",
        content: [
            {
                type: "fields",
                fieldInfos: [
                    {
                        fieldName: "height",
                        label: "高度",
                        visible: true,
                    },
                    {
                        fieldName: "floor",
                        label: "楼层",
                        visible: true,
                    }
                ]
                //fieldInfos 结束
            }
        ],
        actions: [qiang_pic, qiang_return]
    };
    //墙结束

    //门开始
    var men_pic = {
        title: "图片",
        id: "men2",
        className: "esri-icon-media \ue661"
    };
    var men_return = {
        title: "返回",
        id: "men3",
        className: "esri-icon-rotate \ue66e"

    };

    function menPic() {
        men.popupTemplate.content = [
            {
                type: "media",
                mediaInfos: [{
                    //title:"图片标题",
                    type: "image",  //图片
                    value: {
                        sourceURL: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537412816&di=eeeb2e2511b446ae190e797fee82d38b&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ztautoparts.com%2F220%2Ftimg07%2Fuploaded%2Fi7%2FT1qquhFn4dXXXXXXXX_%21%210-item_pic.jpg" //图片URL
                    }
                }]
            }
        ];
    }

    app.sceneView.popup.on("trigger-action", function (event) {
        if (event.action.id === "men2") {
            menPic();
        }
        else if (event.action.id === "men3") {
            men.popupTemplate = men_template;
        }
    });

    var men_template = {
        title: "<font color='Brown'>门</font>",
        content: [
            {
                type: "fields",
                fieldInfos: [
                    {
                        fieldName: "height",
                        label: "高度",
                        visible: true,
                    },
                    {
                        fieldName: "floor",
                        label: "楼层",
                        visible: true,
                    }
                ]
                //fieldInfos 结束
            }
        ],
        actions: [men_pic, men_return]
    };
    //门结束
    //树开始
    var shuAction = {
        title: "简介",
        id: "shu1",
        className: "esri-icon-docushutation \ue64b"

    };
    var shu_pic = {
        title: "图片",
        id: "shu2",
        className: "esri-icon-media \ue661"
    };
    var shu_return = {
        title: "返回",
        id: "shu3",
        className: "esri-icon-rotate \ue66e"

    };

    function shuInfo() {
        shu.popupTemplate.content = [
            {
                type: "text",
                text: "<audio src='music/birds.mp3' type='audio/mpeg' autoplay='autoplay'></audio>"
            }
        ];
    }

    function shuPic() {
        shu.popupTemplate.content = [
            {
                type: "media",
                mediaInfos: [{
                    //title:"图片标题",
                    type: "image",  //图片
                    value: {
                        sourceURL: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536818451736&di=b53a1098bf97051bebc28e14bc937916&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f758d8f13a790e0cf3d7cad667.jpg" //图片URL
                    }
                }]
            }
        ];
    }

    app.sceneView.popup.on("trigger-action", function (event) {
        if (event.action.id === "shu1") {
            shuInfo();
        } else if (event.action.id === "shu2") {
            shuPic();
        }
        else if (event.action.id === "shu3") {
            shu.popupTemplate = shu_template;
        }
    });

    var shu_template = {
        title: "<font color='green'>树</font>",
        content: [
            {
                type: "fields",
                fieldInfos: [
                    {
                        fieldName: "height",
                        label: "高度",
                        visible: true
                    }
                ]
                //fieldInfos 结束
            }],
        actions: [shuAction, shu_pic, shu_return]
    };
    //树结束
    //养贤结束
    //食堂开始

    var shitang_pic = {
        title: "图片",
        id: "shitang2",
        className: "esri-icon-media \ue661"
    };
    var shitang_return = {
        title: "返回",
        id: "shitang3",
        className: "esri-icon-rotate \ue66e"

    };

    function shitangPic() {
        shitang.popupTemplate.content = [
            {
                type: "media",
                mediaInfos: [{
                    //title:"图片标题",
                    type: "image",  //图片
                    value: {
                        sourceURL: "picture/canting/{name}.jpg" //图片URL
                    }
                }]
            }
        ];
    }

    app.sceneView.popup.on("trigger-action", function (event) {
        if (event.action.id === "shitang2") {
            shitangPic();
        }
        else if (event.action.id === "shitang3") {
            shitang.popupTemplate = shitang_template;
        }
    });

    var shitang_template = {
        title: "<font color='black'>食堂</font>",
        content: [
            {
                type: "fields",
                fieldInfos: [
                    {
                        fieldName: "height",
                        label: "高度",
                        visible: true,
                    },
                    {
                        fieldName: "name",
                        label: "名称",
                        visible: true,
                    },
                    {
                        fieldName: "floor",
                        label: "层数",
                        visible: true,
                    },
                    {
                        fieldName: "introduce",
                        label: "简介",
                        visible: true,
                    }
                ]
                //fieldInfos 结束
            }],
        actions: [shitang_pic, shitang_return]
    };

});


