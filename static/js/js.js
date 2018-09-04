(window.webpackJsonpForReact = window.webpackJsonpForReact || []).push([[11], {
    "+kK4": function (e, t, n) {
    }, "+rLv": function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_html.js")
    }, "0/R4": function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_is-object.js")
    }, "17x9": function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/prop-types/index.js")
    }, "1Ck6": function (e, t, n) {
    }, "1TsA": function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_iter-step.js")
    }, "2BFW": function (e, t, n) {
    }, "2OiF": function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_a-function.js")
    }, "3Lyj": function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_redefine-all.js")
    }, "4LiD": function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_collection.js")
    }, "4R4u": function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_enum-bug-keys.js")
    }, "4piF": function (e, t, n) {
    }, 86: function (e, t, n) {
        e.exports = n("Bi8l")
    }, "9AAn": function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/es6.map.js")
    }, "9Oxa": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return a
        });
        var i = {
            Sapling: {remainStage: 4, desc: "幼苗"},
            Growing: {remainStage: 3, desc: "成树"},
            Blooming: {remainStage: 2, desc: "花"},
            Fruiting: {remainStage: 1, desc: "结果"},
            Mature: {remainStage: 0, desc: "成熟"}
        }, a = {
            1: null,
            2: {title: "我的{ftruitName}树成长到幼苗期啦，你想来看看嘛。", message: "【多多果园】种树得水果，免费送回家"},
            3: {title: "我的{ftruitName}树长成大树啦，你也来认领你的小果树吧。", message: "【多多果园】种树得水果，免费送回家"},
            4: {title: "我的{ftruitName}树开花啦，送你一颗果树种子来一起种树吧！", message: "【多多果园】种树得水果，免费送回家"},
            5: {title: "我的{ftruitName}树已经长出果子啦，你快来认领你的水果树吧！", message: "【多多果园】种树得水果，免费送回家"},
            6: {title: "我的{ftruitName}树收获啦，想请你一起品尝我亲手种的水果。", message: "【多多果园】种树得水果，免费送回家"}
        };
        t.b = function (e) {
            var t = i[e].desc;
            i[e].remainStage;
            return {
                MASK_BG: {left: 0, top: 0, width: 5e3, height: 5e3, fillColor: 0, alpha: .9},
                SHOW_AREA: {left: 375, top: 503},
                SHOW_AREA_BG: {left: 100, top: 230, width: 548, height: 620, radius: 16, fillColor: 16777215, alpha: 1},
                CLOSE_BUTTON: {
                    name: "commonPopupCloseButtonV2",
                    left: 642,
                    top: 72,
                    eventName: "commonPopupCloseButtonTap"
                },
                SILK_RIBBON: {name: "commonPopupSilkRibbonV2", left: 84, top: 148},
                MAIN_TITLE: {name: "commonPopup" + e + "Desc", left: 164, top: 168},
                SHOW_ROBBIN: !0,
                MAIN_TEXT: {
                    content: "到" + t + "期啦！",
                    style: {
                        fontFamily: "PingFangSC-Medium",
                        fontSize: 36,
                        fill: 1381654,
                        align: "center",
                        lineHeight: 50
                    },
                    horizontalCenter: 375,
                    left: 303,
                    top: 504
                },
                ROOT_IMAGE: {name: "commonPopupTreeRoot", left: 125, top: 650},
                SHINE_IMAGE: {name: "commonPopupShineV2", left: 125, top: 256},
                MAIN_IMAGE: {name: "commonPopup" + e, left: 175, top: 290},
                MAIN_BUTTON: {
                    left: 95,
                    top: 910,
                    width: 560,
                    height: 96,
                    radius: 10,
                    fillColor: 8637747,
                    alpha: 1,
                    eventName: "commonPopupMainButtonTap"
                },
                MAIN_BUTTON_TEXT: {
                    content: "点击领取",
                    style: {
                        fontFamily: "PingFangSC-Medium",
                        fontSize: 36,
                        fill: 16777215,
                        align: "center",
                        lineHeight: 50
                    },
                    left: 210,
                    top: 935,
                    extra: {
                        plus: {
                            content: "+",
                            style: {
                                fontFamily: "PingFangSC-Medium",
                                fontSize: 36,
                                fill: 16777215,
                                align: "center",
                                lineHeight: 50
                            },
                            left: 415,
                            top: 935
                        },
                        weight: {
                            content: "20g",
                            style: {
                                fontFamily: "PingFangSC-Medium",
                                fontSize: 32,
                                fill: 16777215,
                                align: "center",
                                lineHeight: 44
                            },
                            left: 476,
                            top: 940
                        },
                        drip: {name: "commonPopupDrip", left: 440, top: 940}
                    }
                }
            }
        }
    }, "9gX7": function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_an-instance.js")
    }, Afnz: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_iter-define.js")
    }, AvRE: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_string-at.js")
    }, Bi8l: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("P2sY"), a = n.n(i),
            o = (n("xm80"), n("sFw1"), n("NO8f"), n("aqI/"), n("Faw5"), n("r1bV"), n("tuSo"), n("nCnK"), n("Y9lz"), n("Tdpu"), n("9AAn"), n("T39b"), n("EK0E"), n("wCsR"), n("3xty"), n("I5cv"), n("iMoV"), n("uhZd"), n("0YWM"), n("694e"), n("LTTk"), n("9rMk"), n("IlFx"), n("xpiv"), n("oZ/O"), n("klPD"), n("knU9"), n("VRzm"), n("ioFf"), n("DW2E"), n("z2o2"), n("mura"), n("Zshi"), n("V/DX"), n("FlsD"), n("mYba"), n("5Pf0"), n("RW0V"), n("JduL"), n("91GP"), n("25dN"), n("/SS/"), n("f3/d"), n("eI33"), n("VpUO"), n("oDIu"), n("FLlr"), n("9VmF"), n("rvZc"), n("L9s1"), n("OEbY"), n("SRfc"), n("pIFo"), n("KKXr"), n("OG14"), n("HEwt"), n("6AQ9"), n("dE+T"), n("dRSK"), n("INYr"), n("bHtr"), n("yt8O"), n("/KAi"), n("fN96"), n("sbF8"), n("7h0T"), n("Ljet"), n("knhD"), n("h/M4"), n("fyVe"), n("U2t9"), n("2atp"), n("+auO"), n("MtdB"), n("Jcmo"), n("nzyx"), n("BC7C"), n("x8ZO"), n("9P93"), n("BJ/l"), n("eHKK"), n("pp/T"), n("CyHz"), n("bBoP"), n("x8Yj"), n("hLT2"), n("Z2Ku"), n("hhXQ"), n("/8Fb"), n("jm62"), n("9XZr"), n("7VC1"), n("R5XZ"), n("Ew+T"), n("rGqo"), n("ls82"), n("q1tI")),
            r = n.n(o), s = n("4d7F"), l = n.n(s), c = n("QbLZ"), d = n.n(c), u = n("Yz+Y"), p = n.n(u), m = n("iCc5"),
            h = n.n(m), f = n("V7oC"), g = n.n(f), v = n("FYw3"), y = n.n(v), b = n("mRg0"), w = n.n(b), _ = n("vxsV"),
            E = (function (e) {
                function t() {
                    return h()(this, t), y()(this, e.apply(this, arguments))
                }

                w()(t, e), t.prototype.render = function () {
                    return r.a.createElement("script", {dangerouslySetInnerHTML: {__html: '(function pageStart(){(window._plt=window._plt||[]).push(["tm","ps",+new Date])})()'}})
                }, t.prototype.componentDidMount = function () {
                    (window._plt = window._plt || []).push(["tm", "ps", +new Date])
                }
            }(o.PureComponent), function (e) {
                function t() {
                    return h()(this, t), y()(this, e.apply(this, arguments))
                }

                w()(t, e), t.prototype.render = function () {
                    return r.a.createElement("script", {dangerouslySetInnerHTML: {__html: '(function firstPaint(){(window._plt=window._plt||[]).push(["tm","fp",+new Date])})()'}})
                }, t.prototype.componentDidMount = function () {
                    (window._plt = window._plt || []).push(["tm", "fp", +new Date])
                }
            }(o.PureComponent), function (e) {
                function t() {
                    return h()(this, t), y()(this, e.apply(this, arguments))
                }

                return w()(t, e), t.prototype.render = function () {
                    return r.a.createElement("script", {dangerouslySetInnerHTML: {__html: '(function firstScreen(){!function(e,t){var n=e._plt=e._plt||[],r=+new Date;n.push(["tm","fsn",r]);var a=t.getElementsByTagName("img"),i=t.documentElement.clientHeight,o=[],l="complete"===t.readyState,m=function(){for(var e=0;e<o.length;e++){var t=o[e],a=t.img.offsetTop||0;a>0&&i>a&&(r=Math.max(t.time,r))}n.push(["tm","fs",r])};function c(){for(var e=!0,t=0;t<o.length;t++)if(!(e=e&&o[t].time))return;m()}for(var f=0;f<a.length;f++){var s=a[f];s.complete||function(){var e={img:s},t=s.addEventListener,n=function t(n){var r=this.removeEventListener;r.call(this,"load",t,!1),r.call(this,"error",t,!1),e.time=+new Date,l&&c()};t.call(s,"load",n,!1),t.call(s,"error",n,!1),o.push(e)}()}l?c():e.addEventListener("load",m)}(window,document)})()'}})
                }, t.prototype.componentDidMount = function () {
                    !function (e, t) {
                        var n = e._plt = e._plt || [], i = +new Date;
                        n.push(["tm", "fsn", i]);
                        var a = t.getElementsByTagName("img"), o = t.documentElement.clientHeight, r = [],
                            s = "complete" === t.readyState, l = function () {
                                for (var e = 0; e < r.length; e++) {
                                    var t = r[e], a = t.img.offsetTop || 0;
                                    a > 0 && o > a && (i = Math.max(t.time, i))
                                }
                                n.push(["tm", "fs", i])
                            };

                        function c() {
                            for (var e = !0, t = 0; t < r.length; t++) if (!(e = e && r[t].time)) return;
                            l()
                        }

                        for (var d = 0; d < a.length; d++) {
                            var u = a[d];
                            u.complete || function () {
                                var e = {img: u}, t = u.addEventListener, n = function t(n) {
                                    var i = this.removeEventListener;
                                    i.call(this, "load", t, !1), i.call(this, "error", t, !1), e.time = +new Date, s && c()
                                };
                                t.call(u, "load", n, !1), t.call(u, "error", n, !1), r.push(e)
                            }()
                        }
                        s ? c() : e.addEventListener("load", l)
                    }(window, document)
                }, t
            }(o.PureComponent)), S = (function (e) {
                function t() {
                    return h()(this, t), y()(this, e.apply(this, arguments))
                }

                w()(t, e), t.prototype.render = function () {
                    return r.a.createElement("script", {dangerouslySetInnerHTML: {__html: '(function pageEnd(){var n=window._plt=window._plt||[];document.addEventListener("DOMContentLoaded",function(){n.push(["tm","dr",+new Date])}),window.addEventListener("load",function(){n.push(["tm","ld",+new Date])})})()'}})
                }, t.prototype.componentDidMount = function () {
                    !function () {
                        var e = window._plt = window._plt || [];
                        document.addEventListener("DOMContentLoaded", function () {
                            e.push(["tm", "dr", +new Date])
                        }), window.addEventListener("load", function () {
                            e.push(["tm", "ld", +new Date])
                        })
                    }()
                }
            }(o.PureComponent), n("tl7A")), C = {
                init: function (e) {
                    function t() {
                        setTimeout(function () {
                            return new S.a(e)
                        }, 0)
                    }

                    "complete" === document.readyState ? t() : window.addEventListener("load", t)
                }
            }, T = n("s5u9"), A = {BanList: 2, Eco: 3, ZJ: 4, SubEco: 5, Other: 6}, x = n("ykYb"), k = n("8UZH"),
            N = n("GQeE"), O = n.n(N), I = n("FyfS"), P = n.n(I), M = n("ct/d"), D = n("IgcI"), j = n("tWR7"),
            L = n("xnWZ"), R = n("9yEv"), B = function (e) {
                function t(e) {
                    h()(this, t);
                    var i = y()(this, (t.__proto__ || p()(t)).call(this, e));
                    return n("ksS8"), i.state = {
                        leftDays: 0,
                        leftHours: 0,
                        leftMinutes: 0,
                        leftSeconds: 0,
                        milliSeconds: 0,
                        serverTime: 0
                    }, i
                }

                return w()(t, e), g()(t, [{
                    key: "initData", value: function (e, t) {
                        if (e - t < 0) return this.props.countDownEndCB && this.props.countDownEndCB(), void(this.interval && clearInterval(this.interval));
                        var n = Math.max(1e3 * (e - t), 0), i = Math.floor(n / 1e3), a = Math.floor(i / 60),
                            o = Math.floor(a / 60), r = Math.floor(o / 24);
                        r %= 365, o = this.padleft(o % 24), a = this.padleft(a % 60), i = this.padleft(Math.floor(i % 60)), this.setState({
                            leftDays: r,
                            leftHours: o,
                            leftMinutes: a,
                            leftSeconds: i,
                            milliSeconds: n,
                            serverTime: t
                        })
                    }
                }, {
                    key: "padleft", value: function (e) {
                        return e < 10 ? "0" + e : e
                    }
                }, {
                    key: "changeEndTime", value: function () {
                        var e = this;
                        this.interval = window.setInterval(function () {
                            var t = e.props.endTime || 0, n = e.state.serverTime + 1 || Date.now();
                            e.initData(t, n)
                        }, 1e3)
                    }
                }, {
                    key: "componentWillMount", value: function () {
                        var e = this.props.endTime || 0, t = this.props.serverTime || Date.now();
                        this.initData(e, t)
                    }
                }, {
                    key: "componentDidMount", value: function () {
                        this.changeEndTime()
                    }
                }, {
                    key: "componentWillUnmount", value: function () {
                        this.interval && clearInterval(this.interval)
                    }
                }, {
                    key: "render", value: function () {
                        var e = this.state;
                        return e.milliSeconds >= 0 ? e.leftDays > 0 ? r.a.createElement("div", {className: "count-down-timer"}, e.leftDays, "天 ", e.leftHours, ":", e.leftMinutes, ":", e.leftSeconds, "后可领取") : r.a.createElement("div", {className: "count-down-timer"}, e.leftHours, ":", e.leftMinutes, ":", e.leftSeconds, "后可领取") : r.a.createElement("div", {className: "count-down-timer"}, "--:--:--后可领取")
                    }
                }]), t
            }(r.a.Component), W = n("ca5d"), G = n("R06r"), F = n("v3n6"), U = n("1egF"), H = n("sPxU"),
            V = "undefined" != typeof window, q = n("3uCO"), X = {
                1: {
                    type: 1,
                    imageName: "missionShare",
                    mainDesc: "分享领水",
                    subDesc1: "奖励${min_reward_amount}-${max_reward_amount}g",
                    subDesc2: "，每天${max_count}次"
                },
                9: {
                    type: 9,
                    imageName: "scanGoods",
                    mainDesc: "点击浏览商品",
                    subDesc1: "奖励${reward_amount}g",
                    subDesc2: "，每天${max_count}次"
                },
                2: {
                    type: 2,
                    imageName: "missionCollect",
                    mainDesc: "收藏商品",
                    subDesc1: "成功收藏1件商品",
                    subDesc2: "奖励${reward_amount}g,每天${max_count}次"
                },
                3: {
                    type: 3,
                    imageName: "missionPin",
                    mainDesc: "指定页面拼单成团",
                    subDesc1: "奖励${reward_amount}g",
                    subDesc2: "，每天${max_count}次"
                },
                4: {
                    type: 4,
                    imageName: "missionInviteDownload",
                    mainDesc: "邀请好友下载APP",
                    subDesc1: "奖励${reward_amount}g",
                    subDesc2: "，次数不限"
                },
                5: {
                    type: 5,
                    imageName: "missionInviteJoin",
                    mainDesc: "邀请好友来种树",
                    subDesc1: "奖励${reward_amount}g",
                    subDesc2: "，次数不限"
                },
                18: {
                    type: 18,
                    imageName: "missionScanTime",
                    mainDesc: "浏览商品1分钟",
                    subDesc1: "奖励${reward_amount}g",
                    subDesc2: "，每天${max_count}次"
                }
            };
        if (V) {
            Object(F.b)("missionLackWater");
            var z = !0, Y = !1, Q = void 0;
            try {
                for (var K, J = P()(O()(X)); !(z = (K = J.next()).done); z = !0) {
                    var Z = K.value;
                    X[Z].imageUrl = Object(F.b)("" + X[Z].imageName)
                }
            } catch (e) {
                Y = !0, Q = e
            } finally {
                try {
                    !z && J.return && J.return()
                } finally {
                    if (Y) throw Q
                }
            }
        }
        var $, ee, te = function (e) {
                function t(e) {
                    h()(this, t);
                    var i = y()(this, (t.__proto__ || p()(t)).call(this, e));
                    return i.state = {
                        playerInfo: {},
                        secondLoadImg: !1
                    }, n("O0qa"), i.hideMask = i.hideMask.bind(i), i.goToMission = i.goToMission.bind(i), i.refreshPlayInfo = i.refreshPlayInfo.bind(i), i.countDownEnd = i.countDownEnd.bind(i), i
                }

                return w()(t, e), g()(t, [{
                    key: "componentDidMount", value: function () {
                        var e = this;
                        T.a.on(x.a.MAINSTAGR_LOADED, function (t, n) {
                            t && n && e.refreshPlayInfo(n)
                        })
                    }
                }, {
                    key: "hideMask", value: function () {
                        this.props.showMissionMask && this.props.showMissionMask()
                    }
                }, {
                    key: "componentWillReceiveProps", value: function (e) {
                        var t = this;
                        e.secondLoadImg && this.setState({secondLoadImg: e.secondLoadImg}), e.missionVisible ? (D.default.disableScrollNew(document.getElementById("mission-lists-container")), setTimeout(function () {
                            t.refreshPlayInfo()
                        }, 300)) : D.default.enableScrollNew()
                    }
                }, {
                    key: "componentWillUnmount", value: function () {
                        D.default.enableScrollNew()
                    }
                }, {
                    key: "refreshPlayInfo", value: function (e) {
                        var t = this;
                        e ? this.setState({playerInfo: e}) : q.getMissionList().then(function (e) {
                            R.a.waterAmount = e.water_amount, R.a.missionList = e.mission_list, t.setState({playerInfo: e})
                        })
                    }
                }, {
                    key: "goToMission", value: function (e, t) {
                        var n = this, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                            o = function (e, t) {
                                G.a.ins.getRiskControlInfoAsync().then(function (i) {
                                    q.gainWater(e, t, i).then(function (t) {
                                        R.a.waterAmount = t.water_amount, R.a.missionList = t.mission_list;
                                        var i = n.state.playerInfo, o = a()({}, i, t);
                                        n.setState({playerInfo: o}), 1 === Number(e) && R.a.product.level > 3 ? n.props.toggleMissionAdPopup(t.gain_amount) : D.default.showToast("已成功领取水滴" + t.gain_amount + "g,快去浇水吧~")
                                    }).catch(function () {
                                    })
                                })
                            };
                        if (i = 1, "gain" === t) (this.state.playerInfo.water_amount || R.a.waterAmount) >= 490 ? T.a.emit(x.a.MAINSTAGE_WATER_ALMOST_FULL, function (t, n) {
                            o(e = t || e, i = n || i)
                        }) : o(e, i); else if (1 === e || 4 === e || 5 === e) this.props.showShareMask && this.props.showShareMask(e, function () {
                            var t = j.a.getParameter("refer_share_uid") || "";
                            1 === e && q.completeMission(e, t).then(function (e) {
                                R.a.waterAmount = e.water_amount, R.a.missionList = e.mission_list;
                                var t = n.state.playerInfo, i = a()({}, t, e);
                                n.setState({playerInfo: i})
                            }).catch(function (e) {
                                e && e.message && D.default.showToast(e.message)
                            })
                        }); else if (2 === e) this.hideMask(), M.a.home(); else {
                            this.hideMask();
                            var r = void 0;
                            3 === e ? r = "97066" : 9 === e ? r = "97065" : 18 === e && (r = "88653");
                            var s = void 0;
                            3 === e ? s = Object(H.a)("ddgy_order") : 9 === e ? s = Object(H.a)("ddgy_view") : 18 === e && (s = Object(H.a)("ddgy_view_1min"));
                            var l = 3 === e ? "group" : "scan", c = 3 === e ? "normal_order" : "",
                                d = "cartoon_fruit_goods.html?" + j.a.buildQuery({
                                    page_el_sn: r,
                                    app_name: s,
                                    page_type: l,
                                    page: 1,
                                    size: 20,
                                    dest_mission: c
                                });
                            M.a.forward(d)
                        }
                    }
                }, {
                    key: "countDownEnd", value: function () {
                        this.refreshPlayInfo()
                    }
                }, {
                    key: "gainLoginAward", value: function () {
                        var e = this;
                        q.apiGetLoginAppAward().then(function () {
                            e.refreshPlayInfo()
                        }).catch(function (e) {
                            e && e.message && D.default.showToast(e.message)
                        })
                    }
                }, {
                    key: "render", value: function () {
                        var e = this;
                        if (!this.state.secondLoadImg) return null;
                        for (var t = this.state.playerInfo, n = this.props.missionVisible, i = t.mission_list || {}, a = [], o = 0; o < W.k.length; o++) i[W.k[o]] && a.push(i[W.k[o]]);
                        var s = t.server_time, l = (t.water_amount, void 0);
                        if (!t.login_app && t && 0 !== O()(t).length) {
                            var c = void 0, d = Object(F.b)("missionDownload");
                            L.b.isNativePlatform() || (c = r.a.createElement("div", {
                                className: "detail-button detail-button-init",
                                role: "button",
                                "data-active": "before-red",
                                onClick: function () {
                                    return Object(U.c)()
                                }
                            }, "去下载")), L.b.isNativePlatform() && (c = r.a.createElement("div", {
                                className: "detail-button detail-button-enabled",
                                role: "button",
                                "data-active": "before-red",
                                onClick: function (t) {
                                    return e.gainLoginAward()
                                }
                            }, "领取")), l = r.a.createElement("div", {className: "single-list"}, r.a.createElement("div", {className: "single-list-image"}, r.a.createElement("img", {src: d})), r.a.createElement("div", {className: "single-list-detail"}, r.a.createElement("div", {className: "detail-txt"}, r.a.createElement("div", {className: "detail-main-desc"}, "下载APP"), r.a.createElement("div", {className: "detail-sub"}, r.a.createElement("div", {className: "detail-sub-download"}, "微信登录可领", k.d, "g", r.a.createElement("span", {className: "water-img"})))), c))
                        } else l = null;
                        var u = a.map(function (t, n) {
                            var i = X[t.type], a = t.next_available_time || 0, o = t.finished_count || 0,
                                l = o - (t.drawed_count || 0), c = t.max_count || 0, d = t.reward_amount || 0, u = null;
                            if (i.subDesc1 = i.subDesc1.replace("${reward_amount}", t.reward_amount), i.subDesc1 = i.subDesc1.replace("${min_reward_amount}", t.min_reward_amount), i.subDesc1 = i.subDesc1.replace("${max_reward_amount}", t.max_reward_amount), i.subDesc2 = i.subDesc2.replace("${max_count}", t.max_count), a > s && -1 === [4, 9].indexOf(t.type) && l <= 0) u = o < c && 1 === t.type ? r.a.createElement("div", {className: "detail-button-cold"}, r.a.createElement("div", {className: "reward-amount-wrapper"}, r.a.createElement("div", {className: "reward-amount-img"}), r.a.createElement("div", {className: "reward-amount"}, t.min_reward_amount, "-", t.max_reward_amount, "g")), r.a.createElement(B, {
                                endTime: a,
                                serverTime: s,
                                countDownEndCB: e.countDownEnd
                            })) : 1 === t.type ? r.a.createElement("div", {className: "detail-button-complete"}, "明日再来") : r.a.createElement("div", {className: "button-status-enabled"}, r.a.createElement("div", {className: "detail-progress"}, "今日已完成"), r.a.createElement("div", {
                                className: "detail-button detail-button-init detail-button-init-low",
                                "data-active": "before-red",
                                role: "button",
                                onClick: function (t) {
                                    return e.goToMission(i.type, "init")
                                }
                            }, "再逛逛")); else if (l > 0) {
                                var p = -1 !== [3, 5].indexOf(t.type) ? d + "g×" + l : d + "g";
                                u = r.a.createElement("div", {className: "button-status-enabled"}, r.a.createElement("div", {className: "reward-amount-wrapper"}, r.a.createElement("div", {className: "reward-amount-img water-img"}), 1 !== t.type ? r.a.createElement("div", {className: "reward-amount"}, p) : r.a.createElement("div", {className: "reward-amount"}, t.min_reward_amount, "-", t.max_reward_amount, "g")), r.a.createElement("div", {
                                    className: "detail-button detail-button-enabled",
                                    role: "button",
                                    "data-active": "before-red",
                                    onClick: function (t) {
                                        return e.goToMission(i.type, "gain", l)
                                    }
                                }, "领取"))
                            } else u = r.a.createElement("div", {
                                className: "detail-button detail-button-init",
                                "data-active": "before-red",
                                role: "button",
                                onClick: function (t) {
                                    return e.goToMission(i.type, "init")
                                }
                            }, "去完成");
                            return 9 === i.type && (o === c && t.is_draw ? u = r.a.createElement("div", {className: "button-status-enabled"}, r.a.createElement("div", {className: "reward-amount-wrapper"}, r.a.createElement("div", {className: "reward-amount-img"}), r.a.createElement("div", {className: "reward-amount"}, d + "g")), r.a.createElement("div", {
                                className: "detail-button detail-button-enabled",
                                role: "button",
                                "data-active": "before-red",
                                onClick: function (t) {
                                    return e.goToMission(i.type, "gain", l)
                                }
                            }, "领取")) : o < c ? u = r.a.createElement("div", {className: "button-status-enabled"}, r.a.createElement("div", {className: "detail-progress"}, "还需浏览" + (c - o) + "个"), r.a.createElement("div", {
                                className: "detail-button detail-button-init detail-button-init-low",
                                role: "button",
                                "data-active": "before-red",
                                onClick: function (t) {
                                    return e.goToMission(i.type, "init")
                                }
                            }, "去完成")) : o !== c || t.is_draw || (u = r.a.createElement("div", {className: "button-status-enabled"}, r.a.createElement("div", {className: "detail-progress"}, "今日已完成"), r.a.createElement("div", {
                                className: "detail-button detail-button-init detail-button-init-low",
                                "data-active": "before-red",
                                role: "button",
                                onClick: function (t) {
                                    return e.goToMission(i.type, "init")
                                }
                            }, "再逛逛")))), r.a.createElement("div", {className: "single-list single-list-" + (t.type - 1)}, r.a.createElement("div", {className: "single-list-image"}, r.a.createElement("img", {src: i.imageUrl})), r.a.createElement("div", {className: "single-list-detail"}, r.a.createElement("div", {className: "detail-txt"}, r.a.createElement("div", {className: "detail-main-desc"}, i.mainDesc), r.a.createElement("div", {className: "detail-sub"}, r.a.createElement("span", {className: "detail-sub-desc1"}, i.subDesc1), r.a.createElement("span", {className: "water-img"}), r.a.createElement("span", {className: "detail-sub-desc2"}, i.subDesc2))), u))
                        }), p = "mission-lists-wrapper mission-lists-wrapper-" + (n ? "show" : "hide");
                        return r.a.createElement("div", null, r.a.createElement("div", {
                            className: "mission-lists-mask",
                            style: {display: n ? "" : "none"},
                            onClick: this.hideMask
                        }), r.a.createElement("div", {
                            className: p, onClick: function (e) {
                                return e.stopPropagation()
                            }
                        }, r.a.createElement("div", {className: "title"}, r.a.createElement("span", {className: "title-desc"}, "领水滴任务"), r.a.createElement("span", {
                            className: "title-close",
                            role: "button",
                            onClick: this.hideMask
                        }, "×")), r.a.createElement("div", {
                            className: "mission-container",
                            id: "mission-lists-container"
                        }, r.a.createElement("div", {className: "mission-container-spread"}, l, u), r.a.createElement("div", {className: "bottom-desc"}, "完成任务后会获得水滴，超过当天24点未领取会消失哦"))))
                    }
                }]), t
            }(r.a.Component), ne = n("ouH+"), ie = "undefined" != typeof window ? n("pbNj") : {},
            ae = "undefined" != typeof window, oe = n("3uCO"), re = function (e) {
                function t(e) {
                    h()(this, t);
                    var i = y()(this, (t.__proto__ || p()(t)).call(this, e));
                    return i.state = {
                        showMask: !1,
                        dynamicList: [],
                        noMore: !1
                    }, n("glqi"), i.dynamicLogo = Object(F.b)("dynamicLogo"), ae && (i.uid = ne.a.userID || 0, n("Wr5T")), i.hideDynamicList = i.hideDynamicList.bind(i), i
                }

                return w()(t, e), g()(t, [{
                    key: "componentDidMount", value: function () {
                        var e = this;
                        T.a.on(x.a.MAINSTAGE_OPEN_DYNAMICNEWS, function () {
                            e.setState({showMask: !0})
                        }), this.observer = new IntersectionObserver(function (t) {
                            t[0].isIntersecting && e.state.dynamicList && e.state.dynamicList.length > 0 && e.getMoreDynamic()
                        }, {}), this.observer.observe(document.getElementById("endFlag"))
                    }
                }, {
                    key: "componentWillReceiveProps", value: function (e) {
                        var t = this;
                        e.dynamicVisible ? oe.apiGetDynamic().then(function (e) {
                            t.judgeNoMore(e.trend_list), t.setState({dynamicList: e.trend_list}), setTimeout(function () {
                                t.wrapper = document.querySelector(".dynamic-item-container"), D.default.disableScrollNew(document.getElementsByClassName("dynamic-item-container")[0]), t.scrollInstance || (t.scrollInstance = new ie(t.wrapper, {
                                    momentum: !0,
                                    bounce: !1,
                                    mouseWheel: !1,
                                    click: !1,
                                    tap: !0,
                                    scrollX: !0,
                                    scrollY: !1,
                                    preventDefault: !1
                                }), t.scrollInstance.refresh())
                            }, 100)
                        }) : D.default.enableScrollNew()
                    }
                }, {
                    key: "componentDidUpdate", value: function () {
                        this.scrollInstance && this.scrollInstance.refresh()
                    }
                }, {
                    key: "componentWillUnmount", value: function () {
                        D.default.enableScrollNew()
                    }
                }, {
                    key: "hideDynamicList", value: function (e) {
                        e.stopPropagation(), this.props.showDynamic && this.props.showDynamic(), this.setState({
                            showMask: !1,
                            dynamicList: [],
                            noMore: !1
                        })
                    }
                }, {
                    key: "getDynamicList", value: function () {
                        var e = this;
                        if (this.state.dynamicList.length > 0) {
                            var t = null, n = [];
                            return this.state.dynamicList.forEach(function (i) {
                                if (i) {
                                    var a = void 0, o = void 0, s = void 0;
                                    if (9 !== i.trend_type && 10 !== i.trend_type || (o = !0), o) {
                                        var l = "dynamic" + k.j[i.fruit_type];
                                        a = Object(F.b)(l)
                                    } else a = i.avatar;
                                    var c = o ? "myself-content" : "content", d = e.getTime(i.trend_time),
                                        u = d.year + "-" + d.month + ":" + d.day;
                                    if (u !== t) {
                                        t = u;
                                        var p = e.getDayName(i.trend_time);
                                        s = r.a.createElement("li", {className: "newDay"}, p), n.push(s)
                                    }
                                    i.content && n.push(r.a.createElement("li", {className: "dynamic-item-wrapper"}, r.a.createElement("div", {className: "dynamic-item"}, r.a.createElement("img", {
                                        src: a,
                                        className: "avatar"
                                    }), !o && r.a.createElement("div", {className: "nick-name"}, i.nickname), r.a.createElement("div", {className: c}, i.content), i.order_sn && r.a.createElement("div", {
                                        className: "orderBtn",
                                        onClick: function () {
                                            M.a.forward("order.html?order_sn=" + i.order_sn)
                                        }
                                    }, "查看订单 >>"), r.a.createElement("div", {className: "timeHM"}, d.hour + ":" + d.min))))
                                }
                            }), n
                        }
                        return null
                    }
                }, {
                    key: "getTime", value: function (e, t) {
                        var n = new Date(1e3 * e), i = function (e) {
                            return e < 10 ? "0" + e : e
                        };
                        return t ? {
                            year: n.getFullYear(),
                            month: n.getMonth() + 1,
                            day: n.getDate(),
                            hour: n.getHours(),
                            min: n.getMinutes()
                        } : {
                            year: i(n.getFullYear()),
                            month: i(n.getMonth() + 1),
                            day: i(n.getDate()),
                            hour: i(n.getHours()),
                            min: i(n.getMinutes())
                        }
                    }
                }, {
                    key: "getDayName", value: function (e) {
                        var t = (new Date).getTime() / 1e3, n = this.getTime(t, !0), i = this.getTime(e, !0);
                        if (n.year === i.year && n.month === i.month && n.day === i.day) return "今天";
                        var a = parseInt(new Date(n.year + "/" + n.month + "/" + n.day).getTime() / 1e3, 10);
                        if (e < a && e > a - 86400) return "昨天";
                        var o = this.getTime(e);
                        return o.month + "-" + o.day
                    }
                }, {
                    key: "getLastId", value: function () {
                        if (this.state.dynamicList.length > 0) return this.state.dynamicList[this.state.dynamicList.length - 1].id
                    }
                }, {
                    key: "judgeNoMore", value: function (e) {
                        e.length < 10 && this.setState({noMore: !0})
                    }
                }, {
                    key: "getMoreDynamic", value: function () {
                        var e = this, t = this.getLastId();
                        this.state.noMore || oe.apiGetDynamic(t).then(function (n) {
                            e.judgeNoMore(n.trend_list), n.trend_list && n.trend_list.length > 0 && n.trend_list[n.trend_list.length - 1].id !== t && (e.state.dynamicList.length + n.trend_list.length >= 300 && e.setState({noMore: !0}), e.setState({dynamicList: e.state.dynamicList.concat(n.trend_list).slice(0, 300)}))
                        })
                    }
                }, {
                    key: "render", value: function () {
                        var e = this,
                            t = "dynamic-wrapper dynamic-wrapper-" + (this.props.dynamicVisible ? "show" : "hide");
                        return r.a.createElement("div", {className: "dynamic-container"}, this.state.showMask && r.a.createElement("div", {
                            className: "dynamic-lists-mask",
                            onClick: function (t) {
                                e.hideDynamicList(t)
                            }
                        }), r.a.createElement("div", {className: t}, r.a.createElement("div", {className: "title"}, r.a.createElement("span", {className: "title-desc"}, "动态"), r.a.createElement("span", {
                            className: "title-close",
                            role: "button",
                            onClick: function (t) {
                                e.hideDynamicList(t)
                            }
                        }, "×")), r.a.createElement("div", {className: "dynamic-item-container"}, r.a.createElement("ul", {className: "dynamic-item-container-ul"}, this.getDynamicList(), this.state.noMore && r.a.createElement("li", {className: "noMore"}, this.state.dynamicList.length < 300 ? "没有更多动态了" : "最多显示300条动态"), r.a.createElement("li", {
                            className: "getMore",
                            id: "endFlag"
                        })))))
                    }
                }]), t
            }(r.a.Component), se = n("okNM"), le = !!("undefined" != typeof window) && n("X7B7").ifIphoneX,
            ce = (n("3uCO"), Object(se.a)($ = function (e) {
                function t(e) {
                    h()(this, t);
                    var i = y()(this, (t.__proto__ || p()(t)).call(this, e));
                    return n("K59h"), i.dynamicBubbleImg = Object(F.b)("dynamicBubble_v2"), i
                }

                return w()(t, e), g()(t, [{
                    key: "componentDidMount", value: function () {
                        var e = this;
                        T.a.on(x.a.MAINSTAGE_OPEN_DYNAMICNEWS, function () {
                            e.setState({showMask: !0})
                        })
                    }
                }, {
                    key: "openDynamicNews", value: function () {
                        T.a.emit(x.a.MAINSTAGE_OPEN_DYNAMICNEWS, function () {
                        })
                    }
                }, {
                    key: "render", value: function () {
                        var e = this.props.trend;
                        return k.h.open || !e ? null : r.a.createElement("div", {
                            className: "dynamic-bubble-wrapper " + (le ? "dynamic-bubble-wrapper-iphonex" : ""),
                            style: {display: this.props.dynamicBubbleVisible ? "" : "none"},
                            onClick: this.openDynamicNews.bind(this)
                        }, r.a.createElement("img", {
                            className: "bg",
                            src: this.dynamicBubbleImg
                        }), r.a.createElement("img", {
                            className: "avatar",
                            src: e.avatar
                        }), r.a.createElement("div", {className: "text"}, e.content))
                    }
                }]), t
            }(r.a.Component)) || $), de = n("Fcpp"), ue = n("3uCO"), pe = Object(se.a)(ee = function (e) {
                function t(e) {
                    h()(this, t);
                    var i = y()(this, (t.__proto__ || p()(t)).call(this, e));
                    return n("e9kv"), i.gainRecordBubbleImg = Object(F.b)("recordBubblePanel"), i.gainList = [], i.state = {
                        preGainRecord: null,
                        currentGainRecord: null,
                        fade: "",
                        loaded: !1
                    }, i.moveIntervalId = null, i
                }

                return w()(t, e), g()(t, [{
                    key: "componentDidMount", value: function () {
                        var e = this;
                        T.a.on(x.a.SECOND_LOAD_IMG, function () {
                            ue.apiGetGainRecord().then(function (t) {
                                e.gainList = t.gain_list, e.getCurrentGainRecord(), setInterval(e.getCurrentGainRecord.bind(e), 5e3)
                            }), e.setState({loaded: !0})
                        }), T.a.on(x.a.MAINSTAGE_ARRIVE_GARDEN, function (t, n, i) {
                            e.setState({loaded: !0})
                        }), T.a.on(x.a.MAINSTAGE_GOTO_GARDEN, function (t, n, i) {
                            e.setState({loaded: !1})
                        })
                    }
                }, {
                    key: "getGainRecord", value: function (e) {
                        var t = this;
                        ue.apiGetGainRecord(e - 1).then(function (e) {
                            t.gainList = e.gain_list
                        })
                    }
                }, {
                    key: "getCurrentGainRecord", value: function () {
                        if (this.gainList && this.gainList.length > 0) {
                            var e = this.state.currentGainRecord, t = this.gainList.shift();
                            this.setState({
                                preGainRecord: e,
                                currentGainRecord: t
                            }), 0 === this.gainList.length && this.getGainRecord(t.record_time)
                        }
                    }
                }, {
                    key: "goToGainRecord", value: function () {
                        de.a.trackingRecord({op: "click", page_el_sn: "97213"}, function () {
                            M.a.forward("cartoon_fruit_gain_record.html")
                        })
                    }
                }, {
                    key: "getRecordPanel", value: function (e, t) {
                        var n = e ? "种的" + k.i[e.fruit_type] + "正在配送" : "";
                        return e && r.a.createElement("li", {className: "content-wrapper content-wrapper-" + t}, r.a.createElement("img", {
                            className: "avatar",
                            src: e.avatar
                        }), r.a.createElement("div", {className: "text"}, r.a.createElement("span", {className: "text-nickname"}, e.nickname), r.a.createElement("span", null, n)))
                    }
                }, {
                    key: "getRotationPanel", value: function () {
                        var e = this, t = this.state, n = t.preGainRecord, i = t.currentGainRecord,
                            a = document.getElementsByClassName("moving-wrapper")[0],
                            o = document.getElementsByClassName("content-wrapper")[0];
                        return a && o && (a.style.top = "0", this.moveIntervalId && clearInterval(this.moveIntervalId), this.moveIntervalId = setInterval(function () {
                            a.style.top = parseFloat(getComputedStyle(a).top.split("px")[0]) - .4 + "px", parseFloat(getComputedStyle(a).top.split("px")[0]) < 1.1 * -parseFloat(getComputedStyle(o).height.split("px")[0]) && clearInterval(e.moveIntervalId)
                        }, 10)), r.a.createElement("div", {className: "rotation-panel"}, r.a.createElement("div", {className: "moving-wrapper"}, this.getRecordPanel(n, "pre"), this.getRecordPanel(i, "current")))
                    }
                }, {
                    key: "render", value: function () {
                        this.state.currentGainRecord;
                        var e = this.state, t = e.loaded;
                        e.preGainRecord, e.currentGainRecord;
                        return t && !k.h.open ? r.a.createElement("div", {
                            className: "gain-record-bubble-wrapper",
                            onClick: this.goToGainRecord.bind(this)
                        }, r.a.createElement("img", {
                            className: "bg",
                            src: this.gainRecordBubbleImg
                        }), this.getRotationPanel()) : null
                    }
                }]), t
            }(r.a.Component)) || ee, me = n("c2DU"), he = n("/O6k"), fe = void 0;
        "undefined" != typeof window && (fe = Object(F.b)("force_contact_qrcode"));
        var ge, ve, ye, be, we, _e, Ee, Se, Ce = function (e) {
                function t(e) {
                    h()(this, t);
                    var i = y()(this, (t.__proto__ || p()(t)).call(this, e));
                    return i.state = {}, n("oLjW"), i
                }

                return w()(t, e), g()(t, [{
                    key: "componentDidMount", value: function () {
                        D.default.disableScroll(), this.trackBeforeSubscribe()
                    }
                }, {
                    key: "trackBeforeSubscribe", value: function () {
                        he.a.apiRequest("post", "subscriber/track", {src: "cartoon_fruiter"}, function (e) {
                        }, function (e) {
                        })
                    }
                }, {
                    key: "render", value: function () {
                        this.props;
                        return r.a.createElement("div", {className: "mask force-contact-mask"}, r.a.createElement("div", {className: "fc-wrapper"}, r.a.createElement("div", {className: "fc-title-top"}, "长按指纹识别二维码, 关注拼多多"), r.a.createElement("div", {className: "fc-title-bottom"}, "关注后进入果园，种树0元领水果"), r.a.createElement("div", {className: "fc-qrcode"}, r.a.createElement("img", {src: fe}), r.a.createElement("div", {className: "scan-line"}))))
                    }
                }, {
                    key: "hide", value: function () {
                        D.default.enableScroll(), this.props.closeCallback && this.props.closeCallback()
                    }
                }]), t
            }(o.Component), Te = "undefined" != typeof window, Ae = function (e) {
                function t(e) {
                    h()(this, t);
                    var i = y()(this, (t.__proto__ || p()(t)).call(this, e));
                    return i.showBoard = !1, i.play = !1, i.state = {
                        guideOneLoaded: !1,
                        guideTwoLoaded: !1,
                        showGuideOne: !0,
                        showGuideTwo: !1,
                        showEnterBtn: !0
                    }, Te && n("HhZJ"), i.guideBgImg = Object(F.b)("guideBg"), i.guideBoardImg = Object(F.b)("guideBoard_v2"), i.guideImgOneImg = Object(F.b)("guideImgOne"), i.guideImgTwoImg = Object(F.b)("guideImgTwo"), i.guideBtnImg = Object(F.b)("guideBtn"), i
                }

                return w()(t, e), g()(t, [{
                    key: "componentDidMount", value: function () {
                        var e = this;
                        document.getElementById("guideImgOne").onload = function () {
                            e.setState({guideOneLoaded: !0})
                        }, document.getElementById("guideImgTwo").onload = function () {
                            e.setState({guideTwoLoaded: !0})
                        }
                    }
                }, {
                    key: "render", value: function () {
                        var e = this, t = this.state;
                        this.showBoard = t.guideOneLoaded && t.guideTwoLoaded, this.showBoard && !this.play && (this.play = !0, setTimeout(function () {
                            e.setState({showGuideOne: !1, showGuideTwo: !0})
                        }, 1200));
                        var n = t.showGuideTwo ? "showTwo" : "hideTwo";
                        return r.a.createElement("div", null, r.a.createElement("img", {
                            src: this.guideBgImg,
                            className: "img-bg"
                        }), r.a.createElement("div", {className: "newplayer-wrapper"}, r.a.createElement("div", {className: "guide-board-wrapper "}, r.a.createElement("img", {
                            id: "guide-board",
                            src: this.guideBoardImg
                        }), r.a.createElement("img", {
                            id: "guideImgOne",
                            className: "guideImg showOne",
                            src: this.guideImgOneImg
                        }), r.a.createElement("img", {
                            id: "guideImgTwo",
                            className: "guideImg " + n,
                            src: this.guideImgTwoImg
                        }), r.a.createElement("img", {
                            className: "guideBtnImg show",
                            src: this.guideBtnImg,
                            onClick: function () {
                                e.props.onEnterGarden()
                            }
                        }))))
                    }
                }]), t
            }(r.a.Component), xe = n("9Oxa"), ke = n("YEIV"), Ne = n.n(ke), Oe = n("X121"), Ie = n("Vkgz"),
            Pe = "undefined" != typeof window, Me = (n("3uCO"), {
                10: "showCoinAward",
                11: "showCashCoupons",
                12: "showGoodsCoupons",
                13: "showHightAward"
            }), De = function (e) {
                function t(e) {
                    h()(this, t);
                    var i = y()(this, (t.__proto__ || p()(t)).call(this, e));
                    return i.state = {
                        data: {},
                        showTreasureBox: !1,
                        showCoinAward: !1,
                        showCashCoupons: !1,
                        showGoodsCoupons: !1,
                        showHightAward: !1
                    }, n("+kK4"), Pe && (i.uid = ne.a.userID || 0), i.cloudOpen = !1, i
                }

                return w()(t, e), g()(t, [{
                    key: "componentDidMount", value: function () {
                        var e = this;
                        T.a.on(x.a.REACT_AWARD_POPUP, function (t) {
                            if (t && t.alertTreasureBox) e.setState({showTreasureBox: !0, data: t}); else if (t && t.type) {
                                var n, i = Me[t.type];
                                e.setState((n = {}, Ne()(n, i, !0), Ne()(n, "data", t), n))
                            }
                            setTimeout(function () {
                                e.cloudOpen = !0
                            }, 1e3)
                        })
                    }
                }, {
                    key: "componentDidUpdate", value: function () {
                    }
                }, {
                    key: "openTreasureBox", value: function () {
                        if (this.cloudOpen) {
                            var e = this.state.data;
                            if (e && e.type) {
                                var t, n = Me[e.type];
                                this.setState((t = {}, Ne()(t, n, !0), Ne()(t, "showTreasureBox", !1), t))
                            }
                        }
                    }
                }, {
                    key: "closePopup", value: function () {
                        this.setState({
                            data: {},
                            showTreasureBox: !1,
                            showCoinAward: !1,
                            showCashCoupons: !1,
                            showGoodsCoupons: !1,
                            showHightAward: !1,
                            type: null
                        }), this.state.data.alertTreasureBox && T.a.emit(x.a.MAINSTAGE_AWARS_ICON, this.state.data)
                    }
                }, {
                    key: "getCloseIcon", value: function () {
                        var e = this.state.data.alertTreasureBox ? "commonPopupCloseButtonV2" : "commonPopupCloseButton",
                            t = Object(F.b)("" + e),
                            n = this.state.data.alertTreasureBox ? "close-icon-wrapper-v2" : "close-icon-wrapper";
                        return r.a.createElement("div", {className: n}, r.a.createElement("img", {
                            className: "common-close-icon-gray",
                            src: t
                        }))
                    }
                }, {
                    key: "getSpecialEffects", value: function () {
                        var e = Object(F.b)("awardPopupCircle"), t = Object(F.b)("awardPopupStar");
                        return this.state.data.alertTreasureBox ? r.a.createElement("div", {className: "special-effects-wrapper"}, r.a.createElement("img", {
                            className: "special-effects-circle",
                            src: e
                        }), r.a.createElement("img", {className: "special-effects-star", src: t})) : null
                    }
                }, {
                    key: "getTreasureBox", value: function () {
                        var e = Object(F.b)("treasureBoxLight"), t = Object(F.b)("treasureBoxDot_v2"),
                            n = Object(F.b)("treasureBox");
                        return r.a.createElement("div", {
                            className: "treasure-box-wrapper",
                            onClick: this.openTreasureBox.bind(this)
                        }, r.a.createElement("img", {
                            className: "treasure-box-item treasure-box-light",
                            src: e
                        }), r.a.createElement("img", {
                            className: "treasure-box-item treasure-box-dot",
                            src: t
                        }), r.a.createElement("img", {
                            src: n,
                            className: "treasure-box-item treasure-box-img"
                        }), r.a.createElement("div", {className: "treasure-box-item treasure-box-text"}, this.state.data.boxDecs))
                    }
                }, {
                    key: "gainCoinAward", value: function (e) {
                        this.closePopup();
                        var t = this.state.data;
                        R.a.waterAmount = R.a.waterAmount + e, D.default.showToast("成功领取" + t.water_amount + "g水滴")
                    }
                }, {
                    key: "getCoinAward", value: function () {
                        var e = this, t = Object(F.b)("awardTitleBg"), n = Object(F.b)("awardBg"),
                            i = Object(F.b)("awardWater"), a = this.state.data;
                        return a ? r.a.createElement("div", {className: "coin-award-wrapper"}, this.getSpecialEffects(), r.a.createElement("div", {
                            className: "close-icon",
                            onClick: function () {
                                e.gainCoinAward(a.water_amount)
                            }
                        }, this.getCloseIcon()), r.a.createElement("div", {className: "popup-item coin-award-bg"}), this.state.data.alertTreasureBox ? r.a.createElement("img", {
                            className: "popup-item award-title",
                            src: t
                        }) : null, this.state.data.alertTreasureBox ? r.a.createElement("div", {className: "popup-item award-title-desc"}, "领取成功") : null, r.a.createElement("div", {className: "popup-item coin-award-main-desc"}, "恭喜你获得", a.water_amount, "g水滴"), r.a.createElement("img", {
                            className: "popup-item coin-award-img-bg",
                            src: n
                        }), r.a.createElement("img", {
                            className: "popup-item coin-award-img",
                            src: i
                        }), r.a.createElement("div", {
                            className: "popup-item coin-award-main-button", onClick: function () {
                                e.gainCoinAward(a.water_amount)
                            }
                        }, "去浇水")) : null
                    }
                }, {
                    key: "getHighAward", value: function () {
                        var e = this, t = Object(F.b)("awardTitleBg"), n = Object(F.b)("awardBg"),
                            i = Object(F.b)("highWaterAward"),
                            a = this.state.data && this.state.data.time_limit_water ? this.state.data.time_limit_water : {},
                            o = a.water_amount;
                        return r.a.createElement("div", {className: "high-water-award-wrapper"}, this.getSpecialEffects(), r.a.createElement("div", {
                            className: "close-icon",
                            onClick: this.closePopup.bind(this)
                        }, this.getCloseIcon()), r.a.createElement("div", {className: "popup-item high-water-award-bg"}), this.state.data.alertTreasureBox ? r.a.createElement("img", {
                            className: "popup-item award-title",
                            src: t
                        }) : null, this.state.data.alertTreasureBox ? r.a.createElement("div", {className: "popup-item award-title-desc"}, "领取成功") : null, r.a.createElement("div", {className: "popup-item high-water-award-main-desc"}, "恭喜你获得高额水滴任务"), r.a.createElement("img", {
                            className: "popup-item high-water-award-img-bg",
                            src: n
                        }), r.a.createElement("img", {
                            className: "popup-item high-water-award-img",
                            src: i
                        }), r.a.createElement("div", {className: "popup-item high-water-award-sub-desc"}, "在活动页面完成拼单可获得", r.a.createElement("span", {className: "water-amount"}, o || 0, "g"), "水滴"), r.a.createElement("div", {className: "popup-item high-water-award-count-down-container"}, r.a.createElement(Oe.a, {
                            endTime: a.end_time,
                            serverTime: this.state.data.server_time,
                            styleConfig: {
                                timerClassName: "high-water-award-count-down-wrapper",
                                timeBgClass: "high-water-award-count-down-red-bg",
                                timeBgMillSecondBgClass: "high-water-award-count-down-red-mill-second-bg",
                                timerDescClass: "high-water-award-count-down-desc",
                                breakUpClass: "high-water-award-count-down-break",
                                breakMillisecondClass: "high-water-award-count-down-break"
                            }
                        })), r.a.createElement("div", {
                            className: "popup-item high-water-award-main-button",
                            onClick: function () {
                                e.goToFruitAdGoods("highWater")
                            }
                        }, "去拼单 +", r.a.createElement("div", {className: "reward-amount-img"}), "50g"), r.a.createElement("div", {className: "popup-item high-water-award-warn"}, "注：活动若发生恶意退款将会冻结任务"))
                    }
                }, {
                    key: "goToFruitAdGoods", value: function (e) {
                        if ("cashCoupons" === e) de.a.trackingRecord({op: "click", page_el_sn: "95013"}, function () {
                            var e = Object(H.a)("ddgy_coupon");
                            M.a.forward("cartoon_fruit_goods.html?page=1&size=20&page_el_sn=95013&app_name=" + e + "&page_type=group")
                        }); else {
                            var t = Object(H.a)("ddgy_highwater");
                            M.a.forward("cartoon_fruit_goods.html?page=1&size=20&page_el_sn=91230&app_name=" + t + "&page_type=group&dest_mission=high_water")
                        }
                    }
                }, {
                    key: "getCashCoupons", value: function () {
                        var e = this, t = Object(F.b)("awardTitleBg"), n = Object(F.b)("cashCouponsBg"),
                            i = this.state.data.platform_coupon;
                        if (!i) return null;
                        return r.a.createElement("div", {className: "cash-coupons-wrapper"}, this.getSpecialEffects(), r.a.createElement("div", {
                            className: "close-icon",
                            onClick: this.closePopup.bind(this)
                        }, this.getCloseIcon()), this.state.data.alertTreasureBox ? r.a.createElement("img", {
                            className: "popup-item award-title",
                            src: t
                        }) : null, this.state.data.alertTreasureBox ? r.a.createElement("div", {className: "popup-item award-title-desc"}, "领取成功") : null, r.a.createElement("div", {className: "popup-item cash-coupons-bg"}), r.a.createElement("div", {className: "popup-item cash-coupons-main-desc"}, "恭喜你获得1张现金券"), r.a.createElement("div", {className: "popup-item cash-coupons-card"}, r.a.createElement("img", {src: n}), r.a.createElement("div", {className: "cash-coupons-card-discount"}, r.a.createElement("span", null, "¥"), Ie.a.price(i.discount, 100)), r.a.createElement("div", {className: "cash-coupons-card-desc"}, "现金券"), r.a.createElement("div", {className: "cash-coupons-card-min-amount"}, "满", Ie.a.price(i.min_amount + 1, 100), "可用"), r.a.createElement("div", {className: "cash-coupons-card-cutdown"}, r.a.createElement(Oe.a, {
                            endTime: i.end_time,
                            serverTime: this.state.data.server_time,
                            styleConfig: {
                                timerClassName: "cash-coupons-count-down",
                                timeBgClass: "cash-coupons-count-down-red-bg",
                                timeBgMillSecondBgClass: "cash-coupons-count-down-red-mill-second-bg",
                                timerDescClass: "cash-coupons-count-down-desc",
                                breakUpClass: "cash-coupons-count-down-break",
                                breakMillisecondClass: "cash-coupons-count-down-break"
                            }
                        }))), r.a.createElement("div", {
                            className: "popup-item cash-coupons-main-button",
                            onClick: function () {
                                e.goToFruitAdGoods("cashCoupons")
                            }
                        }, "立即使用"))
                    }
                }, {
                    key: "goToGoodsPage", value: function (e) {
                        M.a.forward("goods.html?goods_id=" + e + "&_oc_biz_type=2002")
                    }
                }, {
                    key: "getGoodsCoupons", value: function () {
                        var e = this, t = Object(F.b)("awardTitleBg"), n = Object(F.b)("goodsCouponsBg"),
                            i = Object(F.b)("priceAfterCoupons"), a = this.state.data.merchant_coupon || {};
                        return r.a.createElement("div", {className: "goods-coupons-wrapper"}, this.getSpecialEffects(), r.a.createElement("img", {
                            className: "popup-item goods-coupons-bg",
                            src: n
                        }), r.a.createElement("div", {
                            className: "close-icon",
                            onClick: this.closePopup.bind(this)
                        }, this.getCloseIcon()), this.state.data.alertTreasureBox ? r.a.createElement("img", {
                            className: "popup-item award-title",
                            src: t
                        }) : null, this.state.data.alertTreasureBox ? r.a.createElement("div", {className: "popup-item award-title-desc"}, "领取成功") : null, r.a.createElement("div", {className: "popup-item goods-coupons-main-desc"}, "恭喜你获得1次低价尝鲜机会"), r.a.createElement("div", {className: "popup-item goods-coupons-discount"}, r.a.createElement("span", null, "¥"), Ie.a.price(a.discount, 100)), r.a.createElement("div", {className: "popup-item goods-coupons-count-down"}, r.a.createElement(Oe.a, {
                            endTime: a.end_time,
                            serverTime: this.state.data.server_time,
                            styleConfig: {
                                timerClassName: "high-water-award-count-down-wrapper",
                                timeBgClass: "high-water-award-count-down-red-bg",
                                timeBgMillSecondBgClass: "high-water-award-count-down-red-mill-second-bg",
                                timerDescClass: "high-water-award-count-down-desc",
                                breakUpClass: "high-water-award-count-down-break",
                                breakMillisecondClass: "high-water-award-count-down-break"
                            }
                        })), r.a.createElement("img", {
                            className: "goods-coupons-goods-img",
                            src: a.thumb_url,
                            onClick: function () {
                                e.goToGoodsPage(a.goods_id)
                            }
                        }), r.a.createElement("div", {
                            className: "goods-coupons-desc", onClick: function () {
                                e.goToGoodsPage(a.goods_id)
                            }
                        }, a.goods_name), r.a.createElement("div", {
                            className: "goods-coupons-now-price",
                            onClick: function () {
                                e.goToGoodsPage(a.goods_id)
                            }
                        }, "现价 ", r.a.createElement("span", null, "¥"), Ie.a.price(a.group_price, 100)), r.a.createElement("img", {
                            className: "goods-coupons-price-after-coupons-bg",
                            src: i,
                            onClick: function () {
                                e.goToGoodsPage(a.goods_id)
                            }
                        }), r.a.createElement("div", {
                            className: "goods-coupons-price-after-coupons-text",
                            onClick: function () {
                                e.goToGoodsPage(a.goods_id)
                            }
                        }, "券后价"), r.a.createElement("div", {
                            className: "goods-coupons-price-after-coupons-price",
                            onClick: function () {
                                e.goToGoodsPage(a.goods_id)
                            }
                        }, r.a.createElement("span", null, "¥"), Ie.a.price(Math.max(a.group_price - a.discount, 0), 100)), r.a.createElement("div", {
                            className: "popup-item goods-coupons-main-button",
                            onClick: function () {
                                e.goToGoodsPage(a.goods_id)
                            }
                        }, "去看看"))
                    }
                }, {
                    key: "render", value: function () {
                        var e = this.state, t = e.showTreasureBox, n = e.showCoinAward, i = e.showCashCoupons,
                            a = e.showGoodsCoupons, o = e.showHightAward, s = t || n || i || a || o;
                        return r.a.createElement("div", {
                            className: "react-popup-container",
                            style: {display: s ? "block" : "none"}
                        }, r.a.createElement("div", {className: "mask"}), r.a.createElement("div", {className: "popup-wrapper"}, t ? this.getTreasureBox() : null, n ? this.getCoinAward() : null, i ? this.getCashCoupons() : null, a ? this.getGoodsCoupons() : null, o ? this.getHighAward() : null))
                    }
                }]), t
            }(r.a.Component), je = n("TSYQ"), Le = n.n(je), Re = (n("2BFW"), ve = ge = function (e) {
                function t(e) {
                    h()(this, t);
                    for (var n = y()(this, (t.__proto__ || p()(t)).call(this, e)), i = Number(e.fromNumber), a = Number(e.toNumber), o = a >= i ? a - i + 1 : a + 11 - i, r = [], s = 0; s < o; s++) r.push((i + s) % 10);
                    var l = e.height.search(/[a-zA-Z]/);
                    return n.state = {
                        numberArr: r,
                        isActive: !1,
                        isDone: !1,
                        heightNumber: e.height.slice(0, l),
                        heightUnit: e.height.slice(l)
                    }, n
                }

                return w()(t, e), g()(t, [{
                    key: "componentDidMount", value: function () {
                        var e = this;
                        setTimeout(function () {
                            e.setState({isActive: !0}, function () {
                                setTimeout(function () {
                                    e.setState({isDone: !0})
                                }, 1e3)
                            })
                        }, this.props.delay)
                    }
                }, {
                    key: "render", value: function () {
                        var e = this, t = this.state.heightNumber * (this.state.numberArr.length - 1);
                        return r.a.createElement("div", {
                            className: "number-item-jump-warp",
                            style: {height: this.props.height}
                        }, this.state.isDone ? r.a.createElement("div", null, this.props.toNumber) : r.a.createElement("ul", {
                            className: Le()("number-item-jump"),
                            style: this.state.isActive ? {transform: "translate(0, -" + (t + this.state.heightUnit) + ")"} : {}
                        }, this.state.numberArr.map(function (t, n) {
                            return r.a.createElement("li", {
                                key: n,
                                className: Le()(["jump-item"]),
                                style: {height: e.props.height}
                            }, t)
                        })))
                    }
                }]), t
            }(o.Component), ge.defaultProps = {fromNumber: "0", toNumber: "0", delay: 500, height: "1em"}, ve),
            Be = (n("RH/P"), be = ye = function (e) {
                function t(e) {
                    h()(this, t);
                    var n = y()(this, (t.__proto__ || p()(t)).call(this)), i = String(e.fromNumber),
                        a = String(e.toNumber), o = a.length - i.length;
                    return o > 0 && (i = "0".repeat(o) + i), n.state = {
                        fromNumberArr: i.split(""),
                        toNumberArr: a.split("")
                    }, n
                }

                return w()(t, e), g()(t, [{
                    key: "render", value: function () {
                        var e = this;
                        return r.a.createElement("div", {
                            className: "number-jump-wrap",
                            style: {height: this.props.height, lineHeight: this.props.height}
                        }, this.state.fromNumberArr.map(function (t, n) {
                            return r.a.createElement(Re, {
                                key: n,
                                fromNumber: t,
                                toNumber: e.state.toNumberArr[n],
                                delay: e.props.delay,
                                height: e.props.height
                            })
                        }))
                    }
                }]), t
            }(o.Component), ye.defaultProps = {fromNumber: 0, toNumber: 0, delay: 500, height: "1.5em"}, be),
            We = n("3uCO"), Ge = 20, Fe = function (e) {
                function t(e) {
                    h()(this, t);
                    var i = y()(this, (t.__proto__ || p()(t)).call(this, e));
                    return i.shareDoubleWater = function (e) {
                        e.stopPropagation(), e.preventDefault(), i.props.showShareMask && i.props.showShareMask(Ge, function () {
                            G.a.ins.getRiskControlInfoAsync().then(function (e) {
                                We.shareBagDouble(Ge, e).then(function (e) {
                                    i.doubleGainWater = e.gain_amount, i.setState({doubleNumber: i.drawedWater + i.doubleGainWater}), R.a.waterAmount = e.gain_amount + R.a.waterAmount, i.setState({missionStatus: "shared"})
                                }).catch(function (e) {
                                    D.default.showToast("翻倍失败，原因：" + e)
                                })
                            })
                        })
                    }, i.state = {
                        missionStatus: null,
                        isOpenNotify: !1,
                        doubleNumber: 0
                    }, n("nAeS"), i.drawedLock = !0, i.doubleGainWater = 0, i
                }

                return w()(t, e), g()(t, [{
                    key: "componentDidMount", value: function () {
                        var e = this;
                        T.a.on(x.a.NOON_NIGHT_POPUP, function (t) {
                            We.getMissionList().then(function (t) {
                                e.updateStatus(t.mission_list, t.server_time), t && 0 === t.open_notify_type ? e.switchNotify(!0) : e.setState({isOpenNotify: 1 === t.open_notify_type})
                            })
                        })
                    }
                }, {
                    key: "updateStatus", value: function (e, t) {
                        var n = Object(W.f)(e, t);
                        this.setState({missionStatus: n})
                    }
                }, {
                    key: "getCloseIcon", value: function () {
                        var e = Object(F.b)("commonPopupCloseButton");
                        return r.a.createElement("div", {className: "close-icon-wrapper"}, r.a.createElement("img", {
                            className: "common-close-icon-gray",
                            src: e
                        }))
                    }
                }, {
                    key: "closePopup", value: function () {
                        this.setState({missionStatus: null})
                    }
                }, {
                    key: "toFinish", value: function (e) {
                        var t = this;
                        if ("toFinish" !== e) return this.state.isOpenNotify || this.switchNotify(!0), void this.setState({missionStatus: null});
                        this.props.showShareMask && this.props.showShareMask(14, function () {
                            We.completeMission(14).then(function (e) {
                                T.a.emit(x.a.COMPLETE_MISSION, 14), R.a.missionList = e.mission_list, t.updateStatus(e.mission_list, e.server_time)
                            }).catch(function (e) {
                            })
                        }, null, null, null, Object(W.g)(R.a.missionList))
                    }
                }, {
                    key: "shareHighDrawed", value: function (e) {
                        this.props.showShareMask && this.props.showShareMask(14, null, null, null, null, 3)
                    }
                }, {
                    key: "toDraw", value: function (e) {
                        var t = this;
                        "drawed" !== e || this.drawedLock || (this.setState({missionStatus: null}), D.default.showToast("已成功领取水滴,快去浇水吧~")), "shared" !== e || this.drawedLock || this.setState({missionStatus: null}), "couldDraw" === e && G.a.ins.getRiskControlInfoAsync().then(function (e) {
                            We.gainWater(14, 1, e).then(function (e) {
                                t.drawedWater = e.gain_amount, R.a.waterAmount = e.water_amount, R.a.missionList = e.mission_list, t.setState({missionStatus: "drawed"}), setTimeout(function () {
                                    t.drawedLock = !1
                                }, 1e3)
                            }).catch(function (e) {
                            })
                        })
                    }
                }, {
                    key: "getMainPopup", value: function (e) {
                        var t = this;
                        if ("forbidOne" === e || "forbidTwo" === e || "forbidThree" === e || "toFinish" === e) {
                            var n = void 0, i = void 0;
                            "toFinish" === e ? (n = "分享开福袋", i = "toFinish") : "forbidOne" === e ? (n = "开启福袋时间提醒", i = "toFinish") : "forbidTwo" === e ? (n = "开启福袋时间提醒", i = "toFinish") : "forbidThree" === e && (n = "开启福袋时间提醒", i = "toFinish");
                            var a = Object(F.b)("noonNightSmallBag");
                            return r.a.createElement("div", {className: "noon-night-container"}, r.a.createElement("div", {className: "mask"}), r.a.createElement("div", {className: "popup-wrapper popup-wrapper-to-finish"}, r.a.createElement("div", {
                                className: "close-icon",
                                onClick: function () {
                                    t.closePopup()
                                }
                            }, this.getCloseIcon()), r.a.createElement("img", {
                                className: "popup-item noon-night-small-bag",
                                src: a
                            }), r.a.createElement("div", {className: "popup-item title-to-finish"}, "每日水滴福袋"), r.a.createElement("div", {className: "popup-item desc-to-finish"}, "每天", r.a.createElement("span", null, "14:00-16:00"), "和", r.a.createElement("span", null, "20:00-22:00"), "期间，都可以获得一个水滴福袋"), r.a.createElement("div", {
                                className: "popup-item main-button main-button-" + i,
                                onClick: function () {
                                    t.toFinish(e)
                                }
                            }, n), this.getNotifySwitch()))
                        }
                        return null
                    }
                }, {
                    key: "getSpecialEffects", value: function (e) {
                        var t = Object(F.b)("awardPopupCircle"), n = Object(F.b)("awardPopupStar");
                        return "drawed" !== e ? null : r.a.createElement("div", {className: "special-effects-wrapper"}, r.a.createElement("img", {
                            className: "special-effects-circle",
                            src: t
                        }), r.a.createElement("img", {className: "special-effects-star", src: n}))
                    }
                }, {
                    key: "getDrawPopup", value: function (e) {
                        var t = this;
                        if ("couldDraw" === e || "drawed" === e || "shared" === e) {
                            var n = "couldDraw" === e ? Object(F.b)("noonNightBigBag") : Object(F.b)("noonNightDrawWater"),
                                i = this.drawedWater ? this.drawedWater + "g" : "", a = "";
                            if ("couldDraw" === e && (a = "分享成功, 点击开启福袋"), "drawed" === e) a = 50 === this.drawedWater ? "获得" + i + "水滴，你就是天选之人!" : "恭喜你获得" + i + "水滴"; else if ("shared" === e) {
                                a = "翻倍成功，共计获得" + (this.drawedWater + this.doubleGainWater) + "g水滴"
                            }
                            var o = Object(F.b)("treasureBoxLight"), s = Object(F.b)("treasureBoxDot_v2");
                            return r.a.createElement("div", {className: "noon-night-container"}, r.a.createElement("div", {className: "mask"}), r.a.createElement("div", {
                                className: "popup-wrapper popup-wrapper-draw",
                                onClick: function () {
                                    t.toDraw(e)
                                }
                            }, this.getSpecialEffects(e), r.a.createElement("img", {
                                className: "popup-item " + e,
                                src: n
                            }), r.a.createElement("img", {
                                className: "popup-item light",
                                src: o
                            }), r.a.createElement("img", {
                                className: "popup-item dot",
                                src: s
                            }), r.a.createElement("span", {className: "popup-item " + e}, "shared" !== e ? a : r.a.createElement("span", {className: "double-txt"}, r.a.createElement("span", null, "翻倍成功，共计获得"), r.a.createElement(Be, {
                                fromNumber: this.drawedWater,
                                toNumber: this.state.doubleNumber,
                                height: "0.27rem"
                            }), r.a.createElement("span", null, "g水滴")), "drawed" === e && 50 !== this.drawedWater ? r.a.createElement("span", {className: "double-sm-title"}, "再次分享到不同的群，随机翻倍最高", r.a.createElement("span", {className: "highlight"}, "2.5倍")) : null), "drawed" === e && 50 === this.drawedWater ? r.a.createElement("div", {
                                class: "btn-share-bag high-drawed",
                                onClick: function (e) {
                                    t.shareHighDrawed(e)
                                }
                            }, "分享炫耀") : null, "drawed" === e && 50 !== this.drawedWater ? r.a.createElement("div", {
                                className: "btn-share-bag double-drawed",
                                onClick: this.shareDoubleWater
                            }, "分享翻倍") : null))
                        }
                        return null
                    }
                }, {
                    key: "switchNotify", value: function (e) {
                        var t = this;
                        We.apiGetNotifySwitch(e).then(function (n) {
                            if (n && n.success) {
                                t.setState({isOpenNotify: e});
                                var i = e ? "开启" : "关闭";
                                D.default.showToast("福袋时间提醒已" + i)
                            }
                        })
                    }
                }, {
                    key: "getNotifySwitch", value: function () {
                        var e = this;
                        return r.a.createElement("div", {
                            className: "popup-item notify-switch", onClick: function () {
                                e.switchNotify(!e.state.isOpenNotify)
                            }
                        }, this.state.isOpenNotify ? r.a.createElement("div", {className: "wrapper open"}, r.a.createElement("div", {className: "circle"})) : r.a.createElement("div", {className: "wrapper close"}, r.a.createElement("div", {className: "circle"})), r.a.createElement("div", {className: "text"}, "到时提醒我"))
                    }
                }, {
                    key: "render", value: function () {
                        var e = this.state.missionStatus;
                        return r.a.createElement("div", null, this.getMainPopup(e), this.getDrawPopup(e))
                    }
                }]), t
            }(r.a.Component), Ue = n("3uCO"), He = function (e) {
                function t(e) {
                    h()(this, t);
                    var i = y()(this, (t.__proto__ || p()(t)).call(this, e));
                    return i.state = {show: !1}, n("uICl"), i
                }

                return w()(t, e), g()(t, [{
                    key: "componentDidMount", value: function () {
                        var e = this;
                        T.a.on(x.a.NEW_PLAYER_LOGINPOPUP, function (t) {
                            e.setState({show: !0})
                        })
                    }
                }, {
                    key: "getCloseIcon", value: function () {
                        var e = Object(F.b)("commonPopupCloseButton");
                        return r.a.createElement("div", {className: "close-icon-wrapper"}, r.a.createElement("img", {
                            className: "common-close-icon-gray",
                            src: e
                        }))
                    }
                }, {
                    key: "closePopup", value: function () {
                        this.setState({show: !1})
                    }
                }, {
                    key: "goToAppOrGain", value: function () {
                        var e = this;
                        L.b.isNativePlatform() ? Ue.apiGetLoginAppAward().then(function () {
                            e.setState({show: !1}), D.default.showToast("已成功领取" + k.d + "g水滴,快去浇水吧~")
                        }).catch(function (e) {
                            e && e.message && D.default.showToast(e.message)
                        }) : Object(U.c)()
                    }
                }, {
                    key: "getAppRights", value: function (e, t) {
                        var n = Object(F.b)(e);
                        return r.a.createElement("div", {className: "app-rights"}, r.a.createElement("img", {src: n}), r.a.createElement("span", null, t))
                    }
                }, {
                    key: "getMainPopup", value: function () {
                        var e = this;
                        if (!this.state.show) return null;
                        var t = Object(F.b)("downloadPopup"),
                            n = r.a.createElement("div", {className: "popup-item desc"}, r.a.createElement("div", null, "微信登录APP"), this.getAppRights("goToAppAwardWater", "直接奖励200g水滴"), this.getAppRights("goToAppAddSpeed", "水滴吸收加速30%")),
                            i = L.b.isNativePlatform() ? r.a.createElement("div", null, r.a.createElement("div", null, "领取")) : r.a.createElement("div", null, r.a.createElement("div", null, "前往App +"), r.a.createElement("div", {className: "reward-amount-img"}), r.a.createElement("div", null, "200g"));
                        return r.a.createElement("div", {className: "login-app-popup-wrapper"}, r.a.createElement("div", {className: "mask"}), r.a.createElement("div", {className: "popup-wrapper common-popup-wrapper"}, r.a.createElement("div", {
                            className: "close-icon",
                            onClick: function () {
                                e.closePopup()
                            }
                        }, this.getCloseIcon()), r.a.createElement("img", {
                            className: "popup-item app-watering",
                            src: t
                        }), n, r.a.createElement("div", {
                            className: "popup-item main-button", onClick: function () {
                                e.goToAppOrGain()
                            }
                        }, i)))
                    }
                }, {
                    key: "render", value: function () {
                        return r.a.createElement("div", null, this.getMainPopup())
                    }
                }]), t
            }(r.a.Component), Ve = (n("3uCO"), function (e) {
                function t(e) {
                    h()(this, t);
                    var i = y()(this, (t.__proto__ || p()(t)).call(this, e));
                    return i.state = {show: !1}, n("O4Gu"), i
                }

                return w()(t, e), g()(t, [{
                    key: "componentDidMount", value: function () {
                        var e = this;
                        T.a.on(x.a.GO_TO_APP_POPUP, function (t) {
                            t && t.product && t.login_app && (e.login_app = !0), e.setState({show: !0})
                        })
                    }
                }, {
                    key: "closePopup", value: function () {
                        this.setState({show: !1})
                    }
                }, {
                    key: "getCloseIcon", value: function () {
                        var e = Object(F.b)("commonPopupCloseButton");
                        return r.a.createElement("div", {className: "close-icon-wrapper"}, r.a.createElement("img", {
                            className: "common-close-icon-gray",
                            src: e
                        }))
                    }
                }, {
                    key: "getAppRights", value: function (e, t) {
                        var n = Object(F.b)(e);
                        return r.a.createElement("div", {class: "app-rights"}, r.a.createElement("img", {src: n}), r.a.createElement("span", null, t))
                    }
                }, {
                    key: "wateringInWeb", value: function () {
                        this.closePopup(), T.a.emit(x.a.MAINSTAGE_WATERING)
                    }
                }, {
                    key: "goToAppPopup", value: function () {
                        var e = this;
                        if (!this.state.show) return null;
                        var t = Object(F.b)("goToAppWatering"),
                            n = this.login_app ? r.a.createElement("div", {className: "popup-item desc"}, r.a.createElement("div", null, "前往拼多多App浇水享特权"), this.getAppRights("goToAppAddSpeed", "水滴吸收加速30%"), this.getAppRights("goToAppSteal", "拜访偷水更方便")) : r.a.createElement("div", {className: "popup-item desc"}, r.a.createElement("div", null, "前往拼多多App浇水享特权"), this.getAppRights("goToAppAwardWater", "直接奖励200g水滴"), this.getAppRights("goToAppAddSpeed", "水滴吸收加速30%")),
                            i = this.login_app ? r.a.createElement("div", null, r.a.createElement("div", null, "前往App "), r.a.createElement("div", {className: "reward-amount-img"}), r.a.createElement("div", null, "加速30%")) : r.a.createElement("div", null, r.a.createElement("div", null, "前往App +"), r.a.createElement("div", {className: "reward-amount-img"}), r.a.createElement("div", null, "200g")),
                            a = this.login_app ? "" : "short-height";
                        return r.a.createElement("div", {className: "go-to-app-popup-wrapper"}, r.a.createElement("div", {className: "mask"}), r.a.createElement("div", {className: "popup-wrapper common-popup-wrapper common-popup-wrapper-" + a}, r.a.createElement("div", {
                            className: "close-icon",
                            onClick: function () {
                                e.closePopup()
                            }
                        }, this.getCloseIcon()), r.a.createElement("img", {
                            className: "popup-item app-watering",
                            src: t
                        }), n, r.a.createElement("div", {
                            className: "popup-item main-button", onClick: function () {
                                Object(U.c)("cartoon_fruit_two")
                            }
                        }, i), this.login_app ? r.a.createElement("div", {
                            className: "popup-item sub-button",
                            onClick: function () {
                                e.wateringInWeb()
                            }
                        }, "放弃加速，继续浇水") : null))
                    }
                }, {
                    key: "render", value: function () {
                        return r.a.createElement("div", null, this.goToAppPopup())
                    }
                }]), t
            }(r.a.Component)), qe = ("undefined" != typeof window && n("3uCO"), function (e) {
                function t(e) {
                    h()(this, t);
                    var i = y()(this, (t.__proto__ || p()(t)).call(this, e));
                    return n("zkLa"), i.awardAmount = 200, i.state = {show: !1}, i
                }

                return w()(t, e), g()(t, [{
                    key: "componentDidMount", value: function () {
                        var e = this;
                        T.a.on(x.a.FRESHER_AWARD, function () {
                            e.setState({show: !0})
                        })
                    }
                }, {
                    key: "closePopup", value: function () {
                        this.setState({show: !1})
                    }
                }, {
                    key: "goShopping", value: function () {
                        var e = "cartoon_fruit_goods.html?" + j.a.buildQuery({
                            page: 1,
                            size: 20,
                            page_el_sn: 91161,
                            app_name: Object(H.a)("ddgy_freshman"),
                            page_type: "new_user_group"
                        });
                        M.a.forward(e)
                    }
                }, {
                    key: "render", value: function () {
                        var e = this;
                        return this.state.show ? r.a.createElement("div", {className: "fresh-award-wraper"}, r.a.createElement("div", {className: "mask"}), r.a.createElement("div", {className: "popup-body"}, r.a.createElement("div", {
                            className: "close-icon",
                            onClick: function () {
                                return e.closePopup()
                            }
                        }, r.a.createElement("img", {
                            className: "common-close-icon-gray",
                            src: Object(F.b)("commonPopupCloseButton")
                        })), r.a.createElement("figure", {className: "icon"}, r.a.createElement("img", {src: Object(F.b)("fresherWater")})), r.a.createElement("div", {className: "title"}, "获得新人专享水滴福利"), r.a.createElement("div", {className: "content"}, "在指定页面完成拼单，获得", r.a.createElement("span", null, this.awardAmount, "g"), "水滴"), r.a.createElement("div", {className: "footer"}, r.a.createElement("button", {
                            onClick: function () {
                                return e.goShopping()
                            }
                        }, "去拼单+", r.a.createElement("img", {
                            src: Object(F.b)("commonPopupDrip"),
                            className: "btn-img"
                        }), this.awardAmount, "g")))) : r.a.createElement("div", null)
                    }
                }]), t
            }(r.a.Component)), Xe = "undefined" != typeof window ? n("3uCO") : {}, ze = function (e) {
                function t(e) {
                    h()(this, t);
                    var i = y()(this, (t.__proto__ || p()(t)).call(this, e));
                    return n("4piF"), i.state = {show: !1, goods: []}, i
                }

                return w()(t, e), g()(t, [{
                    key: "componentDidMount", value: function () {
                        var e = this;
                        T.a.on(x.a.FRESHER_AWARED_WITH_GOODS, function (t) {
                            e.setState({show: !0}), Xe.getFresherGoods().then(function (t) {
                                e.setState({goods: t.goods_info_list}), e.goodUrl = t.ext.jump_url
                            }), de.a.trackingRecord({
                                op: "impr",
                                page_el_sn: "91162"
                            }), Xe.apiRecordClickGoods(null, "NEW_USER_ZONE")
                        })
                    }
                }, {
                    key: "closePopup", value: function () {
                        this.setState({show: !1})
                    }
                }, {
                    key: "goShopping", value: function () {
                        var e = this;
                        de.a.trackingRecord({op: "click", page_el_sn: "91162"}, function () {
                            M.a.forward(e.goodUrl)
                        })
                    }
                }, {
                    key: "go", value: function (e, t) {
                        var n = this;
                        de.a.trackingRecord({op: "click", page_el_sn: ["84634", "84633", "84632"][t]}, function () {
                            M.a.forward(n.goodUrl)
                        })
                    }
                }, {
                    key: "goodList", value: function (e) {
                        var t = this;
                        return e.map(function (e, n) {
                            return r.a.createElement("div", {
                                className: "item-container",
                                key: e.goods_id,
                                onClick: function () {
                                    return t.go(e.goods_id, n)
                                }
                            }, r.a.createElement("div", {className: "left"}, r.a.createElement("img", {
                                className: "item-img",
                                src: e.thumb_url
                            })), r.a.createElement("div", {className: "right"}, r.a.createElement("div", {className: "title"}, e.goods_name), r.a.createElement("div", {className: "price"}, r.a.createElement("span", {className: "new-price"}, "￥", r.a.createElement("span", null, Ie.a.price(e.min_on_sale_group_price, 100))), r.a.createElement("span", {className: "old-price"}, "￥", Ie.a.price(e.market_price, 100))), r.a.createElement("div", {className: "item-btn"}, r.a.createElement("button", null, "去拼单>"))))
                        })
                    }
                }, {
                    key: "render", value: function () {
                        var e = this;
                        return this.state.show ? r.a.createElement("div", {className: "fresh-award-wraper"}, r.a.createElement("div", {className: "mask"}), r.a.createElement("div", {className: "large-popup-body"}, r.a.createElement("header", {className: "fresh-header"}, r.a.createElement("img", {src: Object(F.b)("fresherTitle_v2")}), r.a.createElement("div", {
                            className: "closeBtn",
                            onClick: function () {
                                return e.closePopup()
                            }
                        }, r.a.createElement("img", {src: Object(F.b)("freshClose")}))), r.a.createElement("section", {className: "items"}, this.goodList(this.state.goods)), this.state.goods.length > 0 && r.a.createElement("footer", {className: "footer-btn"}, r.a.createElement("button", {
                            onClick: function () {
                                return e.goShopping()
                            }
                        }, "查看更多")))) : r.a.createElement("div", null)
                    }
                }]), t
            }(r.a.Component), Ye = "undefined" != typeof window ? n("3uCO") : {}, Qe = function (e) {
                function t(e) {
                    h()(this, t);
                    var i = y()(this, (t.__proto__ || p()(t)).call(this, e));
                    return n("1Ck6"), i.state = {
                        showChoose: !1,
                        showGoods: !1,
                        showExangeConfirm: !1,
                        showExangeCoupons: !1,
                        goods: [],
                        serverTime: Date.now() / 1e3
                    }, i
                }

                return w()(t, e), g()(t, [{
                    key: "componentDidMount", value: function () {
                        var e = this;
                        T.a.on(x.a.ADDRESS_EXANGE_GOODS_POPUP, function (t, n) {
                            e.setState({
                                data: t,
                                showChoose: !0,
                                goods: t.goods_info_list,
                                platformCoupon: t.platform_coupon,
                                serverTime: t.server_time
                            }), e.addressID = n, e.sourceType = "exangeChoice"
                        }), T.a.on(x.a.ADDRESS_REMOTE_EXANGE_COUPONS, function (t, n) {
                            e.setState({
                                showExangeCoupons: !0,
                                platformCoupon: !0,
                                serverTime: t.server_time
                            }), e.addressID = n, e.sourceType = "remoteAddress"
                        })
                    }
                }, {
                    key: "getCloseIcon", value: function () {
                        var e = this, t = Object(F.b)("commonPopupCloseButton");
                        return r.a.createElement("div", {
                            className: "close-icon-wrapper", onClick: function () {
                                e.closePopup()
                            }
                        }, r.a.createElement("img", {className: "common-close-icon-gray", src: t}))
                    }
                }, {
                    key: "openChoice", value: function (e) {
                        this.setState(Ne()({showChoose: !1}, e, !0))
                    }
                }, {
                    key: "closePopup", value: function () {
                        this.setState({showChoose: !1, showGoods: !1, showExangeConfirm: !1, showExangeCoupons: !1})
                    }
                }, {
                    key: "getChoosePopup", value: function () {
                        var e = this;
                        if (!this.state.showChoose) return null;
                        var t = this.state.data;
                        return t ? r.a.createElement("div", {className: "wrapper choose-wrapper"}, r.a.createElement("div", {className: "close-wrapper"}, this.getCloseIcon()), r.a.createElement("div", {className: "text-wrapper"}, r.a.createElement("div", {className: "text main-text"}, "由于水果产地天气原因"), r.a.createElement("div", {className: "text sub-text"}, "需要延长发货时间，你可以选择")), t.has_coupon ? r.a.createElement("div", {
                            className: "btn cash-coupons",
                            onClick: function () {
                                e.openChoice("showExangeCoupons")
                            }
                        }, "兑换12元现金券") : null, t.goods_info_list && t.goods_info_list.length > 0 ? r.a.createElement("div", {
                            className: "btn exange-goods",
                            onClick: function () {
                                e.openChoice("showGoods")
                            }
                        }, "兑换其他水果商品") : null, t.has_pre_sale_goods ? r.a.createElement("div", {
                            className: "delay-goods",
                            onClick: function () {
                                e.delayFruitConfirm()
                            }
                        }, "延迟7~15天发货 >") : null) : null
                    }
                }, {
                    key: "choseToExange", value: function (e) {
                        this.currentGoods = e, this.setState({showGoods: !1, showExangeConfirm: !0})
                    }
                }, {
                    key: "goodList", value: function (e) {
                        var t = this;
                        return e.map(function (e, n) {
                            return r.a.createElement("div", {
                                className: "item-container",
                                key: e.goods_id
                            }, r.a.createElement("div", {className: "left"}, r.a.createElement("img", {
                                className: "item-img",
                                src: e.thumb_url
                            })), r.a.createElement("div", {className: "right"}, r.a.createElement("div", {className: "title"}, e.goods_name), r.a.createElement("div", {className: "price"}, r.a.createElement("span", {className: "new-price"}, "￥", r.a.createElement("span", null, "0")), r.a.createElement("span", {className: "old-price"}, "￥", Ie.a.price(e.market_price, 100))), r.a.createElement("div", {className: "item-btn"}, r.a.createElement("button", {
                                onClick: function () {
                                    t.choseToExange(e)
                                }
                            }, "选这个"))))
                        })
                    }
                }, {
                    key: "getGoodsPopup", value: function () {
                        var e = this;
                        return this.state.showGoods ? r.a.createElement("div", {className: "large-popup-body"}, r.a.createElement("header", {className: "header"}, r.a.createElement("img", {src: Object(F.b)("exangeGoodsBanner")}), r.a.createElement("div", {
                            className: "closeBtn",
                            onClick: function () {
                                e.goToChoicePopup()
                            }
                        }, "x")), r.a.createElement("div", {className: "banner-title banner-main-title"}, "你可以任选以下1件商品免费拿"), r.a.createElement("section", {className: "items"}, this.goodList(this.state.goods))) : null
                    }
                }, {
                    key: "exange", value: function (e, t, n) {
                        var i = this;
                        Ye.createOrder(this.addressID, e, t).then(function (e) {
                            e && e.result ? (T.a.emit(x.a.DELIVERY_SUCCESS_STAGE_SHOW, n, e.order_sn), i.closePopup()) : e.goods_info_list && (i.setState({goods: e.goods_info_list}), D.default.showToast("该商品已发完"))
                        })
                    }
                }, {
                    key: "exangeGoods", value: function () {
                        this.exange(this.currentGoods.goods_id, 1, "exangeGoods")
                    }
                }, {
                    key: "exangeCash", value: function () {
                        this.exange(null, 2, "exangeCoupons")
                    }
                }, {
                    key: "delayFruitConfirm", value: function () {
                        var e = this;
                        D.default.showConfirm2({
                            onConfirm: function (t) {
                                e.delayFruit()
                            }, title: "确认接受延长7-15天发货吗？", confirmButtonLabel: "确认", cancelButtonLabel: "取消"
                        })
                    }
                }, {
                    key: "delayFruit", value: function () {
                        this.exange(null, 3, "delayFruit")
                    }
                }, {
                    key: "goToChoicePopup", value: function () {
                        this.setState({
                            showChoose: !0,
                            showGoods: !1,
                            showExangeConfirm: !1,
                            showExangeCoupons: !1
                        }), this.currentGoods = null
                    }
                }, {
                    key: "getExangeConfirm", value: function () {
                        var e = this;
                        if (!this.state.showExangeConfirm) return null;
                        var t = this.currentGoods;
                        return t ? r.a.createElement("div", {className: "wrapper exange-confirm-wrapper"}, r.a.createElement("img", {src: t.thumb_url}), r.a.createElement("div", {className: "text"}, "确定将水果兑换为这件商品吗?"), r.a.createElement("div", {
                            className: "btn btn-cancel",
                            onClick: function () {
                                e.goToChoicePopup()
                            }
                        }, "取消"), r.a.createElement("div", {
                            className: "btn btn-confirm", onClick: function () {
                                e.exangeGoods()
                            }
                        }, "确定")) : null
                    }
                }, {
                    key: "cancelCoupons", value: function () {
                        "exangeChoice" === this.sourceType && this.goToChoicePopup(), "remoteAddress" === this.sourceType && this.closePopup()
                    }
                }, {
                    key: "exangeCashCoupons", value: function () {
                        var e = this;
                        if (!this.state.showExangeCoupons) return null;
                        var t = Object(F.b)("cashCouponsBg"), n = (this.state.platformCoupon, this.state.serverTime),
                            i = n + 604800;
                        return r.a.createElement("div", {className: "wrapper cash-coupons-wrapper"}, r.a.createElement("img", {
                            src: t,
                            alt: ""
                        }), r.a.createElement("div", {className: "coupons discount"}, r.a.createElement("span", null, "¥"), "12"), r.a.createElement("div", {className: "coupons discount-type"}, "无门槛"), r.a.createElement("div", {className: "coupons desc"}, "全场通用（除话费等特殊商品）"), r.a.createElement("div", {className: "coupons time"}, Object(U.b)(n).year + "." + Object(U.b)(n).month + "." + Object(U.b)(n).day + "-" + Object(U.b)(i).year + "." + Object(U.b)(i).month + "." + Object(U.b)(i).day), r.a.createElement("div", {className: "text"}, "确定兑换为12元无门槛优惠券吗?"), r.a.createElement("div", {
                            className: "btn btn-cancel",
                            onClick: function () {
                                e.cancelCoupons()
                            }
                        }, "取消"), r.a.createElement("div", {
                            className: "btn btn-confirm", onClick: function () {
                                e.exangeCash()
                            }
                        }, "确定"))
                    }
                }, {
                    key: "render", value: function () {
                        var e = this.state, t = e.showGoods, n = e.showExangeConfirm, i = e.showChoose,
                            a = e.showExangeCoupons;
                        return t || n || i || a ? r.a.createElement("div", {className: "exange-goods-wraper"}, r.a.createElement("div", {className: "mask"}), this.getChoosePopup(), this.getGoodsPopup(), this.getExangeConfirm(), this.exangeCashCoupons()) : r.a.createElement("div", null)
                    }
                }]), t
            }(r.a.Component), Ke = n("84OR"), Je = n("gDS+"), Ze = n.n(Je), $e = n("7xme"), et = n("3uCO"),
            tt = function (e) {
                function t(e) {
                    h()(this, t);
                    var i = y()(this, (t.__proto__ || p()(t)).call(this, e));
                    return i.state = {show: !1}, n("SotW"), i
                }

                return w()(t, e), g()(t, [{
                    key: "componentDidMount", value: function () {
                        var e = this;
                        L.b.isNativePlatform() && $e.a.setBackButton({
                            callback: function (t) {
                                e.onBeforeUnload()
                            }
                        })
                    }
                }, {
                    key: "getCloseIcon", value: function () {
                        var e = Object(F.b)("commonPopupCloseButton");
                        return r.a.createElement("div", {className: "close-icon-wrapper"}, r.a.createElement("img", {
                            className: "common-close-icon-gray",
                            src: e
                        }))
                    }
                }, {
                    key: "closePopup", value: function () {
                        this.setState({show: !1})
                    }
                }, {
                    key: "onBeforeUnload", value: function (e) {
                        this.jdugeIfRetain() ? this.setState({show: !0}) : M.a.back()
                    }
                }, {
                    key: "jdugeIfRetain", value: function () {
                        var e = JSON.parse(localStorage.getItem("cartoon_fruit_retain_times")),
                            t = Object(U.b)(Date.now() / 1e3 + k.b.dt, !0);
                        this.timeStr = t.year + t.month + t.day, e && e[this.timeStr] ? this.poptimes = e[this.timeStr] : this.poptimes = 0;
                        var n = R.a.missionList;
                        if (!n || !n[1]) return !1;
                        var i = n[1];
                        if (i.finished_count < i.max_count && Date.now() / 1e3 + k.b.dt > i.next_available_time) {
                            this.type = "shareToComplete", this.missionType = 1, this.mainImg = "missionShare", this.mainDesc = "今日还有可获得的水滴";
                            var a = i.max_count - i.finished_count, o = i.max_reward_amount * a;
                            return this.subDesc = "分享领水滴，今日最多还可领" + o + "g", !0
                        }
                        if (Math.random() < .4) {
                            if (this.poptimes >= 3) return !1;
                            this.poptimes = this.poptimes + 1, localStorage.setItem("cartoon_fruit_retain_times", Ze()(Ne()({}, this.timeStr, this.poptimes))), this.missionType = 5, this.type = "inviteFriend", this.mainImg = "missionInviteJoin", this.mainDesc = "邀请好友种果树可获得水滴";
                            var r = n[5].reward_amount;
                            return this.subDesc = "成功邀请1名好友奖励" + r + "g水滴", !0
                        }
                        return !1
                    }
                }, {
                    key: "goToMisson", value: function (e) {
                        var t = this;
                        this.props.showShareMask && this.props.showShareMask(e, function () {
                            var n = j.a.getParameter("refer_share_uid") || "";
                            1 === e && et.completeMission(e, n).then(function (e) {
                                R.a.waterAmount = e.water_amount, R.a.missionList = e.mission_list, t.setState({show: !1}), T.a.emit(x.a.MAIN_STAGR_OPEN_MISSIONLIST)
                            }).catch(function (e) {
                                t.setState({show: !1}), e && e.message && D.default.showToast(e.message)
                            }), 5 === e && t.setState({show: !1})
                        })
                    }
                }, {
                    key: "getMainPopup", value: function () {
                        var e = this, t = Object(F.b)(this.mainImg);
                        return r.a.createElement("div", {className: "retain-popup-wrapper"}, r.a.createElement("div", {className: "mask"}), r.a.createElement("div", {className: "popup-wrapper common-popup-wrapper"}, r.a.createElement("div", {
                            className: "close-icon",
                            onClick: function () {
                                e.closePopup()
                            }
                        }, this.getCloseIcon()), r.a.createElement("img", {
                            className: "popup-item main-img",
                            src: t
                        }), r.a.createElement("div", {className: "popup-item main-desc"}, this.mainDesc), r.a.createElement("div", {className: "popup-item sub-desc"}, this.subDesc), r.a.createElement("div", {
                            className: "btn btn-cancel",
                            onClick: function () {
                                M.a.back()
                            }
                        }, "直接离开"), r.a.createElement("div", {
                            className: "btn btn-confirm", onClick: function () {
                                e.goToMisson(e.missionType)
                            }
                        }, "去完成")))
                    }
                }, {
                    key: "render", value: function () {
                        return this.state.show ? r.a.createElement("div", null, this.getMainPopup()) : null
                    }
                }]), t
            }(r.a.Component), nt = (n("sjXj"), n("3uCO")), it = n("UNS8"), at = function (e) {
                var t = e.img, n = e.title, i = e.description, a = e.btnData,
                    o = a.active ? "还剩" + (a.remainNum || 0) + "袋" : "还需" + (a.requireNum || 0) + "人",
                    s = a.active ? "去使用" : a.btnText;
                return r.a.createElement("section", {className: "health-popup-item small-item"}, r.a.createElement("div", {className: "img"}, r.a.createElement("img", {src: Object(F.b)(t)})), r.a.createElement("div", {className: "description"}, r.a.createElement("h3", null, n), r.a.createElement("div", null, i)), r.a.createElement("div", {className: "btn"}, (a.active || a.showTextWhenDisable) && r.a.createElement("div", null, o), r.a.createElement("button", {
                    onClick: function () {
                        return a.clickFn(a.active)
                    }, className: a.active ? "active" : null
                }, s)))
            }, ot = function (e) {
                function t(e) {
                    h()(this, t);
                    var n = y()(this, (t.__proto__ || p()(t)).call(this, e));
                    return n.onClose = function () {
                        n.setState({show: !1})
                    }, n.goShopping = function (e) {
                        if (e) n.useFertilizer(1); else {
                            M.a.forward("cartoon_fruit_goods.html?page=1&size=20&page_el_sn=97066&app_name=ddgy_order_npk&page_type=group&dest_mission=health"), n.setState({show: !1})
                        }
                    }, n.goInvite = function (e) {
                        e ? n.useFertilizer(2) : (n.props.showShareMask && n.props.showShareMask(5), n.setState({show: !1}))
                    }, n.state = {show: !1, health: 0, healthMax: 100}, n.clickDisabled = !1, n
                }

                return w()(t, e), g()(t, [{
                    key: "componentDidMount", value: function () {
                        var e = this;
                        T.a.on(x.a.OPEN_HEALTH_POPUP, function () {
                            Object(nt.getHealthInfo)().then(function (t) {
                                e.setState(function (e) {
                                    var t = e.health_degree > 1 ? e.health_degree : 1, n = e.max_health_degree || 100,
                                        i = e.backpack_goods_list, a = function (e) {
                                            if (!e) return {requireNum: 0, active: !1, remainNum: 1};
                                            var t = e.exchange_amount || 1, n = e.available_amount || 0;
                                            return {
                                                requireNum: t - (n || 0),
                                                active: n >= t,
                                                remainNum: Math.floor((n || 0) / t),
                                                exchange: t
                                            }
                                        };
                                    return function (o) {
                                        return {
                                            show: !0,
                                            health: t,
                                            healthMax: n,
                                            hideGroup: e.restricted_collage,
                                            groupData: a(i[1]),
                                            inviteData: a(i[2])
                                        }
                                    }
                                }(t)), T.a.emit(x.a.CHANGE_HEALTH, {health: t.health_degree, dynamicUpdate: !1})
                            }).catch(function (e) {
                                var t = e && e.message || "获取数据失败";
                                D.default.showToast(t)
                            })
                        })
                    }
                }, {
                    key: "useFertilizer", value: function (e) {
                        var t = this;
                        this.state.health !== this.state.healthMax ? this.clickDisabled || (this.clickDisabled = !0, Object(nt.getFertilizer)(1, e).then(function (e) {
                            t.setState({show: !1}), T.a.emit(x.a.CHANGE_HEALTH, {
                                health: e.health_degree,
                                dynamicUpdate: !0
                            }), t.clickDisabled = !1
                        }).catch(function (e) {
                            var n = e && e.message || "获取数据失败";
                            D.default.showToast(n), t.clickDisabled = !1
                        })) : D.default.showToast("健康度已满，不需要再用化肥啦")
                    }
                }, {
                    key: "render", value: function () {
                        if (!this.state.show) return r.a.createElement("div", null);
                        var e = Math.floor(this.state.health / this.state.healthMax * 100), t = Object(it.b)(e) || {},
                            n = {width: (e > 5 ? e : 0) + "%", backgroundColor: t.popupFgColor}, i = {
                                img: "missionPin",
                                title: "拼单领化肥",
                                description: "拼单成功，领1袋化肥  (每天限2次)",
                                btnData: d()({}, this.state.groupData, {btnText: "去拼单", clickFn: this.goShopping})
                            }, a = {
                                img: "missionInviteJoin",
                                title: "邀请种树领化肥",
                                description: "每邀请" + this.state.inviteData.exchange + "人，领1袋化肥",
                                btnData: d()({}, this.state.inviteData, {
                                    btnText: "去邀请",
                                    showTextWhenDisable: !0,
                                    clickFn: this.goInvite
                                })
                            };
                        return r.a.createElement("div", {className: "health-popup"}, r.a.createElement("div", {className: "mask"}), r.a.createElement("div", {className: "health-popup-window"}, r.a.createElement("div", {className: "title-img"}, r.a.createElement("img", {src: Object(F.b)(t.popupImg)})), r.a.createElement("div", {
                            className: "health-popup-close",
                            onClick: this.onClose
                        }, "×"), r.a.createElement("section", {className: "health-popup-item big-item"}, r.a.createElement("h2", null, "果树健康值"), r.a.createElement("div", {
                            className: "progress",
                            style: {backgroundColor: t.popupBgColor}
                        }, r.a.createElement("div", {
                            className: "sub-progress",
                            style: n
                        }), r.a.createElement("span", null, this.state.health, "/", this.state.healthMax)), r.a.createElement("ul", {className: "informs " + t.popupPointColor}, r.a.createElement("li", null, "健康值会影响浇水效果"), r.a.createElement("li", null, "长期不施肥果树的健康值会下降"), r.a.createElement("li", null, "使用一袋化肥增加约30点健康值"))), !this.state.hideGroup && r.a.createElement(at, i), r.a.createElement(at, a)))
                    }
                }]), t
            }(o.Component), rt = n("m1cH"), st = n.n(rt), lt = n("b5fu"), ct = (n("q1Sx"), _e = we = function (e) {
                function t() {
                    var e, n, i, a;
                    h()(this, t);
                    for (var o = arguments.length, r = Array(o), s = 0; s < o; s++) r[s] = arguments[s];
                    return n = i = y()(this, (e = t.__proto__ || p()(t)).call.apply(e, [this].concat(r))), i.state = {
                        smWaterImgUrl: Object(F.b)("commonPopupDrip"),
                        nowTime: parseInt(Date.now() / 1e3) + k.b.dt
                    }, i.data = {pushTimer: null, timer: null}, a = n, y()(i, a)
                }

                return w()(t, e), g()(t, [{
                    key: "render", value: function () {
                        var e = this;
                        return r.a.createElement("div", {className: "gain-list-ctn"}, r.a.createElement("ui", {
                            className: Le()("gain-list", {
                                pre: !this.props.isActive,
                                active: this.props.isActive
                            })
                        }, this.props.gainFruitArray.map(function (t, n) {
                            return r.a.createElement("li", {
                                className: "fruit-item",
                                key: String(t.avatar)
                            }, r.a.createElement("div", {className: "info-box"}, r.a.createElement("div", {className: "sm-avatar"}, r.a.createElement("img", {src: t.avatar})), r.a.createElement("div", {className: "list-user-name"}, t.nickname), r.a.createElement("div", null, "浇水"), r.a.createElement("div", {className: "water-box"}, r.a.createElement("img", {src: e.state.smWaterImgUrl})), r.a.createElement("div", null, "10g"), r.a.createElement("div", {className: "gain-fruit"}, "收获了" + t.spec + t.fruit_name)), r.a.createElement("div", {className: "time"}, e.state.nowTime - t.record_time >= 60 ? parseInt((e.state.nowTime - t.record_time) / 60) + "分钟前" : parseInt(e.state.nowTime - t.record_time) + "秒前"))
                        })))
                    }
                }]), t
            }(o.PureComponent), we.defaultProps = {gainFruitArray: []}, _e), dt = (n("JQlP"), n("3uCO")),
            ut = (Se = Ee = function (e) {
                function t() {
                    var e, n, i, a;
                    h()(this, t);
                    for (var o = arguments.length, r = Array(o), s = 0; s < o; s++) r[s] = arguments[s];
                    return n = i = y()(this, (e = t.__proto__ || p()(t)).call.apply(e, [this].concat(r))), i.state = {
                        bgImgUrl: Object(F.b)("bootBg_v2"),
                        tipBubbleImgUrl: Object(F.b)("bootBubble"),
                        smWaterImgUrl: Object(F.b)("commonPopupDrip"),
                        shadowImgUrl: Object(F.b)("bootShadow"),
                        gainFruitArray: [],
                        shareInfo: {},
                        isShow: !1,
                        isActive: !1
                    }, i.data = {gainFruitAllArray: [], showFruitIndex: 0}, i.autoPushList = function () {
                        i.data.showFruitIndex <= 0 && (i.data.showFruitIndex = i.data.gainFruitAllArray.length), i.setState(function (e) {
                            return {
                                gainFruitArray: [i.data.gainFruitAllArray[--i.data.showFruitIndex]].concat(st()(e.gainFruitArray.slice(0, -1))),
                                isActive: !1
                            }
                        }), setTimeout(i.autoPushList, 2e3), setTimeout(function () {
                            i.setState({isActive: !0})
                        }, 1400)
                    }, i.giveUpReward = function () {
                        i.setState({isShow: !1}), i.props.gardenInit()
                    }, i.goDownload = function () {
                        Object(U.c)("cartoon_fruit_three")
                    }, a = n, y()(i, a)
                }

                return w()(t, e), g()(t, [{
                    key: "componentDidMount", value: function () {
                        var e = this;
                        T.a.on(x.a.INVITE_DOWNLOAD_POPUP, function (t) {
                            t.isDownloadApp || t.isCreateTree || (e.setState({isShow: !0}), e.getInfo())
                        })
                    }
                }, {
                    key: "getInfo", value: function () {
                        var e = this, t = lt.a.getSelfUID() || 0, n = j.a.getParameter("refer_share_uid") || "";
                        if (!n) return !1;
                        dt.getBootDownloadMsg(t, n).then(function (t) {
                            var n = t.gain_list.length,
                                i = {shareInfo: {avatar: t.share_avatar, nickname: t.share_nickname}};
                            e.data.gainFruitAllArray = e.arrangeGainList(t.gain_list), 0 !== n && (e.data.showFruitIndex = n - 6, i.gainFruitArray = t.gain_list.slice(e.data.showFruitIndex, n), e.startAutoPushList()), e.setState(i)
                        })
                    }
                }, {
                    key: "startAutoPushList", value: function () {
                        var e = this;
                        setTimeout(this.autoPushList, 2e3), setTimeout(function () {
                            e.setState({isActive: !0})
                        }, 1400)
                    }
                }, {
                    key: "arrangeGainList", value: function (e) {
                        return e.sort(function (e, t) {
                            return t.record_time - e.record_time
                        })
                    }
                }, {
                    key: "render", value: function () {
                        return this.state.isShow ? r.a.createElement("article", {className: Le()("boot-download")}, r.a.createElement("div", {className: "boot-bg"}, r.a.createElement("img", {src: this.state.bgImgUrl})), r.a.createElement("header", {className: "user-info"}, r.a.createElement("div", {className: "avatar"}, r.a.createElement("img", {src: this.state.shareInfo.avatar})), r.a.createElement("div", {className: "user-name"}, this.state.shareInfo.nickname), r.a.createElement("div", {className: "tip-bubble"}, r.a.createElement("span", null, "送你一颗果树和200g水滴"), r.a.createElement("span", {className: "sm-water"}, r.a.createElement("img", {src: this.state.smWaterImgUrl})), r.a.createElement("span", null, "，免费拿水果"), r.a.createElement("div", {className: "tip-bg"}, r.a.createElement("img", {src: this.state.tipBubbleImgUrl})))), r.a.createElement("article", {className: "bottom-content"}, r.a.createElement("section", {className: "btn-box"}, r.a.createElement("button", {
                            className: "btn-download",
                            onClick: this.goDownload
                        }, "前往种树免费拿水果"), r.a.createElement("div", {className: "btn-shadow"}, r.a.createElement("img", {src: this.state.shadowImgUrl}))), r.a.createElement("section", {className: "gain-list-box"}, r.a.createElement("header", {className: "gain-title"}, "已有800万+人收获了水果"), r.a.createElement(ct, {
                            gainFruitArray: this.state.gainFruitArray,
                            isActive: this.state.isActive
                        })))) : null
                    }
                }]), t
            }(o.PureComponent), Ee.defaultProps = {}, Se), pt = (n("Pv0I"), Object(F.b)("missionAdIcon")),
            mt = Object(F.b)("missionAdConference"), ht = Object(F.b)("commonPopupCloseButtonV2"), ft = function (e) {
                function t() {
                    var e, n, i, a;
                    h()(this, t);
                    for (var o = arguments.length, r = Array(o), s = 0; s < o; s++) r[s] = arguments[s];
                    return n = i = y()(this, (e = t.__proto__ || p()(t)).call.apply(e, [this].concat(r))), i.state = {btnShow: !1}, i.btnClose = function () {
                        i.props.toggleMissionAdPopup()
                    }, a = n, y()(i, a)
                }

                return w()(t, e), g()(t, [{
                    key: "toShop", value: function () {
                        M.a.forward("//mobile.yangkeduo.com/promotion_op.html?type=6&id=827")
                    }
                }, {
                    key: "render", value: function () {
                        return r.a.createElement("article", {className: Le()("mission-ad-popup full-mask", {hide: !this.props.isShow})}, r.a.createElement("div", {className: "main-content"}, r.a.createElement("section", {className: Le()("popup", {open: this.props.isShow})}, r.a.createElement("div", {className: "title"}, "恭喜你获得", this.props.awardWater, "g水滴"), r.a.createElement("div", {className: "icon"}, r.a.createElement("img", {src: pt})), r.a.createElement("div", {className: "support"}, r.a.createElement("span", {className: "line"}), r.a.createElement("span", {className: ""}, "本次水滴由美食汇赞助提供"), r.a.createElement("span", {className: "line"})), r.a.createElement("div", {
                            className: "banner",
                            onClick: this.toShop
                        }, r.a.createElement("img", {src: mt}))), r.a.createElement("div", {
                            className: "btn-close",
                            onClick: this.btnClose
                        }, r.a.createElement("img", {src: ht}))))
                    }
                }]), t
            }(o.Component), gt = (n("xyiK"), Object(F.b)("missionAdSongshu")), vt = Object(F.b)("commonPopupCloseButtonV2"),
            yt = function (e) {
                function t() {
                    var e, n, i, a;
                    h()(this, t);
                    for (var o = arguments.length, r = Array(o), s = 0; s < o; s++) r[s] = arguments[s];
                    return n = i = y()(this, (e = t.__proto__ || p()(t)).call.apply(e, [this].concat(r))), i.state = {isShow: !1}, i.close = function () {
                        i.setState({isShow: !1}), T.a.emit(x.a.CLOSE_GARDEN_AD_POPUP)
                    }, a = n, y()(i, a)
                }

                return w()(t, e), g()(t, [{
                    key: "componentDidMount", value: function () {
                        var e = this;
                        T.a.on(x.a.GARDEN_AD_POPUP, function () {
                            e.setState({isShow: !0})
                        })
                    }
                }, {
                    key: "toShop", value: function () {
                        M.a.forward("//mobile.yangkeduo.com/promotion_op.html?type=16&id=282")
                    }
                }, {
                    key: "render", value: function () {
                        return r.a.createElement("article", {className: Le()("garden-ad-popup full-mask", {hide: !this.state.isShow})}, r.a.createElement("div", {className: "main-content"}, r.a.createElement("section", {className: Le()("popup", {open: this.state.isShow})}, r.a.createElement("div", {
                            className: "banner",
                            onClick: this.toShop
                        }, r.a.createElement("img", {src: gt}))), r.a.createElement("div", {
                            className: "btn-close",
                            onClick: this.close
                        }, r.a.createElement("img", {src: vt}))))
                    }
                }]), t
            }(o.Component), bt = n("17x9"), wt = n.n(bt), _t = n("i8i4"), Et = n.n(_t), St = n("u/J7"),
            Ct = function (e) {
                function t(n) {
                    h()(this, t);
                    var i = y()(this, e.call(this, n)), a = document;
                    return i.isDisableScroll = void 0 === i.props.isDisableScroll || i.props.isDisableScroll, i.isExtraDiv = i.props.container && a.querySelector(i.props.container), i.node = i.isExtraDiv ? a.querySelector(i.props.container) : a.createElement("div"), i
                }

                return w()(t, e), t.prototype.render = function () {
                    return Object(_t.createPortal)(this.props.children, this.node)
                }, t.prototype.componentDidMount = function () {
                    this.isDisableScroll && St.a.disableScrollNew(), this.isExtraDiv || document.body.appendChild(this.node)
                }, t.prototype.componentWillUnmount = function () {
                    this.isDisableScroll && St.a.enableScrollNew(), this.isExtraDiv || document.body.removeChild(this.node)
                }, t
            }(r.a.Component);
        Ct.defaultProps = {};
        var Tt = Ct;
        n("9mNp");
        var At = function (e) {
            var t = e.desc, n = e.confirm, i = e.cancel, a = e.title, o = e.clickCancel, s = e.clickConfirm,
                l = e.container;
            return r.a.createElement(Tt, {container: l}, r.a.createElement("div", {className: "bg-fill app-bg-fill"}, r.a.createElement("div", {id: "confirm-default-v3"}, r.a.createElement("div", {className: "content-wrapper"}, r.a.createElement("div", {
                className: "detail",
                id: "confirm-default-v3-detail"
            }, a && r.a.createElement("p", {className: "title"}, a), t.map(function (e, t) {
                return r.a.createElement("p", {className: "desc", key: t}, e)
            })), r.a.createElement("div", {className: "buttons buttons-confirm"}, r.a.createElement("div", {
                className: "button",
                onClick: function (e) {
                    o(e)
                }
            }, i), r.a.createElement("div", {
                className: "button", onClick: function (e) {
                    s(e)
                }
            }, n))))))
        };
        At.defaultProps = {
            desc: ["您未关注拼多多公众号，无法更新资料哦~"],
            confirm: "我知道了",
            cancel: "取消"
        }, At.propTypes = {
            desc: wt.a.array,
            confirm: wt.a.string,
            cancel: wt.a.string,
            title: wt.a.string,
            clickCancel: wt.a.func,
            clickConfirm: wt.a.func,
            container: wt.a.string
        };
        var xt = At, kt = n("3OdE"), Nt = n("kk8N"), Ot = n("+qE3"),
            It = ["‍", "‼", "⁉", "⃣", "™", "ℹ", "↔", "↕", "↖", "↗", "↘", "↙", "↩", "↪", "⌚", "⌛", "⌨", "⏏", "⏩", "⏪", "⏫", "⏬", "⏭", "⏮", "⏯", "⏰", "⏱", "⏲", "⏳", "⏸", "⏹", "⏺", "Ⓜ", "▪", "▫", "▶", "◀", "◻", "◼", "◽", "◾", "☀", "☁", "☂", "☃", "☄", "☎", "☑", "☔", "☕", "☘", "☝", "☠", "☢", "☣", "☦", "☪", "☮", "☯", "☸", "☹", "☺", "♀", "♂", "♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓", "♠", "♣", "♥", "♦", "♨", "♻", "♿", "⚒", "⚓", "⚔", "⚕", "⚖", "⚗", "⚙", "⚛", "⚜", "⚠", "⚡", "⚪", "⚫", "⚰", "⚱", "⚽", "⚾", "⛄", "⛅", "⛈", "⛎", "⛏", "⛑", "⛓", "⛔", "⛩", "⛪", "⛰", "⛱", "⛲", "⛳", "⛴", "⛵", "⛷", "⛸", "⛹", "⛺", "⛽", "✂", "✅", "✈", "✉", "✊", "✋", "✌", "✍", "✏", "✒", "✔", "✖", "✝", "✡", "✨", "✳", "✴", "❄", "❇", "❌", "❎", "❓", "❔", "❕", "❗", "❣", "❤", "➕", "➖", "➗", "➡", "➰", "➿", "⤴", "⤵", "⬅", "⬆", "⬇", "⬛", "⬜", "⭐", "⭕", "〰", "〽", "㊗", "㊙", "️", "🀄", "🃏", "🅰", "🅱", "🅾", "🅿", "🆎", "🆑", "🆒", "🆓", "🆔", "🆕", "🆖", "🆗", "🆘", "🆙", "🆚", "🇦", "🇧", "🇨", "🇩", "🇪", "🇫", "🇬", "🇭", "🇮", "🇯", "🇰", "🇱", "🇲", "🇳", "🇴", "🇵", "🇶", "🇷", "🇸", "🇹", "🇺", "🇻", "🇼", "🇽", "🇾", "🇿", "🈁", "🈂", "🈚", "🈯", "🈲", "🈳", "🈴", "🈵", "🈶", "🈷", "🈸", "🈹", "🈺", "🉐", "🉑", "🌀", "🌁", "🌂", "🌃", "🌄", "🌅", "🌆", "🌇", "🌈", "🌉", "🌊", "🌋", "🌌", "🌍", "🌎", "🌏", "🌐", "🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘", "🌙", "🌚", "🌛", "🌜", "🌝", "🌞", "🌟", "🌠", "🌡", "🌤", "🌥", "🌦", "🌧", "🌨", "🌩", "🌪", "🌫", "🌬", "🌭", "🌮", "🌯", "🌰", "🌱", "🌲", "🌳", "🌴", "🌵", "🌶", "🌷", "🌸", "🌹", "🌺", "🌻", "🌼", "🌽", "🌾", "🌿", "🍀", "🍁", "🍂", "🍃", "🍄", "🍅", "🍆", "🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🍎", "🍏", "🍐", "🍑", "🍒", "🍓", "🍔", "🍕", "🍖", "🍗", "🍘", "🍙", "🍚", "🍛", "🍜", "🍝", "🍞", "🍟", "🍠", "🍡", "🍢", "🍣", "🍤", "🍥", "🍦", "🍧", "🍨", "🍩", "🍪", "🍫", "🍬", "🍭", "🍮", "🍯", "🍰", "🍱", "🍲", "🍳", "🍴", "🍵", "🍶", "🍷", "🍸", "🍹", "🍺", "🍻", "🍼", "🍽", "🍾", "🍿", "🎀", "🎁", "🎂", "🎃", "🎄", "🎅", "🎆", "🎇", "🎈", "🎉", "🎊", "🎋", "🎌", "🎍", "🎎", "🎏", "🎐", "🎑", "🎒", "🎓", "🎖", "🎗", "🎙", "🎚", "🎛", "🎞", "🎟", "🎠", "🎡", "🎢", "🎣", "🎤", "🎥", "🎦", "🎧", "🎨", "🎩", "🎪", "🎫", "🎬", "🎭", "🎮", "🎯", "🎰", "🎱", "🎲", "🎳", "🎴", "🎵", "🎶", "🎷", "🎸", "🎹", "🎺", "🎻", "🎼", "🎽", "🎾", "🎿", "🏀", "🏁", "🏂", "🏃", "🏄", "🏅", "🏆", "🏇", "🏈", "🏉", "🏊", "🏋", "🏌", "🏍", "🏎", "🏏", "🏐", "🏑", "🏒", "🏓", "🏔", "🏕", "🏖", "🏗", "🏘", "🏙", "🏚", "🏛", "🏜", "🏝", "🏞", "🏟", "🏠", "🏡", "🏢", "🏣", "🏤", "🏥", "🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🏰", "🏳", "🏴", "🏵", "🏷", "🏸", "🏹", "🏺", "🏻", "🏼", "🏽", "🏾", "🏿", "🐀", "🐁", "🐂", "🐃", "🐄", "🐅", "🐆", "🐇", "🐈", "🐉", "🐊", "🐋", "🐌", "🐍", "🐎", "🐏", "🐐", "🐑", "🐒", "🐓", "🐔", "🐕", "🐖", "🐗", "🐘", "🐙", "🐚", "🐛", "🐜", "🐝", "🐞", "🐟", "🐠", "🐡", "🐢", "🐣", "🐤", "🐥", "🐦", "🐧", "🐨", "🐩", "🐪", "🐫", "🐬", "🐭", "🐮", "🐯", "🐰", "🐱", "🐲", "🐳", "🐴", "🐵", "🐶", "🐷", "🐸", "🐹", "🐺", "🐻", "🐼", "🐽", "🐾", "🐿", "👀", "👁", "👂", "👃", "👄", "👅", "👆", "👇", "👈", "👉", "👊", "👋", "👌", "👍", "👎", "👏", "👐", "👑", "👒", "👓", "👔", "👕", "👖", "👗", "👘", "👙", "👚", "👛", "👜", "👝", "👞", "👟", "👠", "👡", "👢", "👣", "👤", "👥", "👦", "👧", "👨", "👩", "👪", "👫", "👬", "👭", "👮", "👯", "👰", "👱", "👲", "👳", "👴", "👵", "👶", "👷", "👸", "👹", "👺", "👻", "👼", "👽", "👾", "👿", "💀", "💁", "💂", "💃", "💄", "💅", "💆", "💇", "💈", "💉", "💊", "💋", "💌", "💍", "💎", "💏", "💐", "💑", "💒", "💓", "💔", "💕", "💖", "💗", "💘", "💙", "💚", "💛", "💜", "💝", "💞", "💟", "💠", "💡", "💢", "💣", "💤", "💥", "💦", "💧", "💨", "💩", "💪", "💫", "💬", "💭", "💮", "💯", "💰", "💱", "💲", "💳", "💴", "💵", "💶", "💷", "💸", "💹", "💺", "💻", "💼", "💽", "💾", "💿", "📀", "📁", "📂", "📃", "📄", "📅", "📆", "📇", "📈", "📉", "📊", "📋", "📌", "📍", "📎", "📏", "📐", "📑", "📒", "📓", "📔", "📕", "📖", "📗", "📘", "📙", "📚", "📛", "📜", "📝", "📞", "📟", "📠", "📡", "📢", "📣", "📤", "📥", "📦", "📧", "📨", "📩", "📪", "📫", "📬", "📭", "📮", "📯", "📰", "📱", "📲", "📳", "📴", "📵", "📶", "📷", "📸", "📹", "📺", "📻", "📼", "📽", "📿", "🔀", "🔁", "🔂", "🔃", "🔄", "🔅", "🔆", "🔇", "🔈", "🔉", "🔊", "🔋", "🔌", "🔍", "🔎", "🔏", "🔐", "🔑", "🔒", "🔓", "🔔", "🔕", "🔖", "🔗", "🔘", "🔙", "🔚", "🔛", "🔜", "🔝", "🔞", "🔟", "🔠", "🔡", "🔢", "🔣", "🔤", "🔥", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "🔬", "🔭", "🔮", "🔯", "🔰", "🔱", "🔲", "🔳", "🔴", "🔵", "🔶", "🔷", "🔸", "🔹", "🔺", "🔻", "🔼", "🔽", "🕉", "🕊", "🕋", "🕌", "🕍", "🕎", "🕐", "🕑", "🕒", "🕓", "🕔", "🕕", "🕖", "🕗", "🕘", "🕙", "🕚", "🕛", "🕜", "🕝", "🕞", "🕟", "🕠", "🕡", "🕢", "🕣", "🕤", "🕥", "🕦", "🕧", "🕯", "🕰", "🕳", "🕴", "🕵", "🕶", "🕷", "🕸", "🕹", "🕺", "🖇", "🖊", "🖋", "🖌", "🖍", "🖐", "🖕", "🖖", "🖤", "🖥", "🖨", "🖱", "🖲", "🖼", "🗂", "🗃", "🗄", "🗑", "🗒", "🗓", "🗜", "🗝", "🗞", "🗡", "🗣", "🗨", "🗯", "🗳", "🗺", "🗻", "🗼", "🗽", "🗾", "🗿", "😀", "😁", "😂", "😃", "😄", "😅", "😆", "😇", "😈", "😉", "😊", "😋", "😌", "😍", "😎", "😏", "😐", "😑", "😒", "😓", "😔", "😕", "😖", "😗", "😘", "😙", "😚", "😛", "😜", "😝", "😞", "😟", "😠", "😡", "😢", "😣", "😤", "😥", "😦", "😧", "😨", "😩", "😪", "😫", "😬", "😭", "😮", "😯", "😰", "😱", "😲", "😳", "😴", "😵", "😶", "😷", "😸", "😹", "😺", "😻", "😼", "😽", "😾", "😿", "🙀", "🙁", "🙂", "🙃", "🙄", "🙅", "🙆", "🙇", "🙈", "🙉", "🙊", "🙋", "🙌", "🙍", "🙎", "🙏", "🚀", "🚁", "🚂", "🚃", "🚄", "🚅", "🚆", "🚇", "🚈", "🚉", "🚊", "🚋", "🚌", "🚍", "🚎", "🚏", "🚐", "🚑", "🚒", "🚓", "🚔", "🚕", "🚖", "🚗", "🚘", "🚙", "🚚", "🚛", "🚜", "🚝", "🚞", "🚟", "🚠", "🚡", "🚢", "🚣", "🚤", "🚥", "🚦", "🚧", "🚨", "🚩", "🚪", "🚫", "🚬", "🚭", "🚮", "🚯", "🚰", "🚱", "🚲", "🚳", "🚴", "🚵", "🚶", "🚷", "🚸", "🚹", "🚺", "🚻", "🚼", "🚽", "🚾", "🚿", "🛀", "🛁", "🛂", "🛃", "🛄", "🛅", "🛋", "🛌", "🛍", "🛎", "🛏", "🛐", "🛑", "🛒", "🛠", "🛡", "🛢", "🛣", "🛤", "🛥", "🛩", "🛫", "🛬", "🛰", "🛳", "🛴", "🛵", "🛶", "🛷", "🛸", "🤐", "🤑", "🤒", "🤓", "🤔", "🤕", "🤖", "🤗", "🤘", "🤙", "🤚", "🤛", "🤜", "🤝", "🤞", "🤟", "🤠", "🤡", "🤢", "🤣", "🤤", "🤥", "🤦", "🤧", "🤨", "🤩", "🤪", "🤫", "🤬", "🤭", "🤮", "🤯", "🤰", "🤱", "🤲", "🤳", "🤴", "🤵", "🤶", "🤷", "🤸", "🤹", "🤺", "🤼", "🤽", "🤾", "🥀", "🥁", "🥂", "🥃", "🥄", "🥅", "🥇", "🥈", "🥉", "🥊", "🥋", "🥌", "🥐", "🥑", "🥒", "🥓", "🥔", "🥕", "🥖", "🥗", "🥘", "🥙", "🥚", "🥛", "🥜", "🥝", "🥞", "🥟", "🥠", "🥡", "🥢", "🥣", "🥤", "🥥", "🥦", "🥧", "🥨", "🥩", "🥪", "🥫", "🦀", "🦁", "🦂", "🦃", "🦄", "🦅", "🦆", "🦇", "🦈", "🦉", "🦊", "🦋", "🦌", "🦍", "🦎", "🦏", "🦐", "🦑", "🦒", "🦓", "🦔", "🦕", "🦖", "🦗", "🧀", "🧐", "🧑", "🧒", "🧓", "🧔", "🧕", "🧖", "🧗", "🧘", "🧙", "🧚", "🧛", "🧜", "🧝", "🧞", "🧟", "🧠", "🧡", "🧢", "🧣", "🧤", "🧥", "🧦", "󠁢", "󠁣", "󠁥", "󠁧", "󠁬", "󠁮", "󠁳", "󠁴", "󠁷", "󠁿"],
            Pt = function (e) {
                for (var t = 0; t < It.length; t++) if (e.indexOf(It[t]) >= 0) return !0;
                return !1
            }, Mt = n("19V+"), Dt = kt.a.constant, jt = "undefined" != typeof window, Lt = void 0;
        jt && (Lt = D.default);
        var Rt = {
            RegionChina: parseInt(Dt.Region.China, 10),
            PROVINCE: parseInt(Dt.RegionType.Province, 10),
            CITY: parseInt(Dt.RegionType.City, 10),
            DISTRICT: parseInt(Dt.RegionType.District, 10)
        }, Bt = function (e) {
            function t(n) {
                h()(this, t);
                var i = y()(this, e.call(this, n));
                return i.state = {
                    currentRegionTab: Rt.PROVINCE,
                    panelStyle: {transform: "translateY(3.86rem)"},
                    provinceID: "0",
                    provinceName: "",
                    provinces: null,
                    cityID: "0",
                    cityName: "",
                    cities: null,
                    districtID: "0",
                    districtName: "",
                    districts: null
                }, i.provincesLoaded = !1, i.citiesLoaded = !1, i.districtsLoaded = !1, i.selectCity = i.selectCity.bind(i), i.loadRegions = i.loadRegions.bind(i), i.onCityEdited = i.onCityEdited.bind(i), i.selectDistrict = i.selectDistrict.bind(i), i.generateHeader = i.generateHeader.bind(i), i.onCitiesLoaded = i.onCitiesLoaded.bind(i), i.selectProvince = i.selectProvince.bind(i), i.selectRegionTab = i.selectRegionTab.bind(i), i.onDistrictEdited = i.onDistrictEdited.bind(i), i.onProvinceEdited = i.onProvinceEdited.bind(i), i.onDistrictsLoaded = i.onDistrictsLoaded.bind(i), i.onProvincesLoaded = i.onProvincesLoaded.bind(i), i.setRegionUnionName = i.setRegionUnionName.bind(i), i.onAddressInfoLoaded = i.onAddressInfoLoaded.bind(i), i.hideRegionSelectorPanel = i.hideRegionSelectorPanel.bind(i), i.showRegionSelectorPanel = i.showRegionSelectorPanel.bind(i), i
            }

            return w()(t, e), t.prototype.componentWillMount = function () {
                jt && n("QROL")
            }, t.prototype.render = function () {
                var e = this, t = e.state.panelStyle, n = e.props.isShow;
                return r.a.createElement("div", {
                    id: "region-selector",
                    className: "m-addr-region-selector",
                    style: {display: n ? "" : "none"}
                }, r.a.createElement("div", {
                    className: "mars-panel-mask", onClick: function (t) {
                        return e.hideRegionSelectorPanel(t)
                    }
                }), r.a.createElement("div", {
                    id: "region-selector-panel",
                    ref: "regionSelectorPanel",
                    className: "mars-panel",
                    style: t
                }, e.generateHeader(), e.generateRegions()))
            }, t.prototype.componentDidMount = function () {
                Lt.disableScrollNew();
                var e = this;
                e.props.addressId + "" == "" ? (e.props.eventEmitter.emit("fillEditAddress"), e.onAddressInfoLoaded({})) : he.a.apiRequest("GET", "address/" + e.props.addressId, null, function (t) {
                    e.props.eventEmitter.emit("fillEditAddress", t), e.onAddressInfoLoaded(t)
                }, null)
            }, t.prototype.componentWillReceiveProps = function (e) {
                var t = e.addressInfo || {}, n = this.props.addressInfo || {};
                t.province_id + "" == n.province_id + "" && t.city_id + "" == n.city_id + "" && t.district_id + "" == n.district_id + "" || this.onAddressInfoLoaded(t)
            }, t.prototype.componentDidUpdate = function (e, t) {
                var n = e.isShow;
                if (!n && this.props.isShow !== n) {
                    var i = this.state.currentRegionTab;
                    Lt.disableScrollNew(document.getElementById("region-selector-list-" + i)), this.showRegionSelectorPanel()
                }
            }, t.prototype.generateHeader = function () {
                var e = this, t = e.state, n = t.currentRegionTab, i = t.provinceID, a = t.provinceName, o = t.cityID,
                    s = t.cityName, l = t.districtID, c = t.districtName;
                return r.a.createElement("div", {className: "mars-panel-header"}, r.a.createElement("div", {
                    className: "mars-ph-province " + (1 === n ? "mars-ph-active" : ""),
                    onClick: function (t) {
                        return e.selectRegionTab(Rt.PROVINCE, t)
                    }
                }, i + "" == "0" ? r.a.createElement("span", null, "请选择") : r.a.createElement("span", null, a)), i + "" != "0" && r.a.createElement("div", {
                    className: "mars-ph-city " + (2 === n ? "mars-ph-active" : ""),
                    onClick: function (t) {
                        return e.selectRegionTab(Rt.CITY, t)
                    }
                }, o + "" == "0" ? r.a.createElement("span", null, "请选择") : r.a.createElement("span", null, s)), o + "" != "0" && r.a.createElement("div", {
                    className: "mars-ph-district " + (3 === n ? "mars-ph-active" : ""),
                    onClick: function (t) {
                        return e.selectRegionTab(Rt.DISTRICT, t)
                    }
                }, l + "" == "0" ? r.a.createElement("span", null, "请选择") : r.a.createElement("span", null, c)), r.a.createElement("div", {
                    className: "mars-ph-cancel",
                    onClick: function (t) {
                        return e.hideRegionSelectorPanel(t)
                    }
                }, "取消"))
            }, t.prototype.generateRegions = function () {
                var e = this, t = e.state, n = t.currentRegionTab, i = t.provinces, a = t.provinceID, o = t.cities,
                    s = t.cityID, l = t.districts, c = t.districtID, d = 1 === n && i && i.map(function (t, n) {
                        var i = t.region_id + "" == a + "" ? "region-active" : "";
                        return r.a.createElement("li", {
                            key: "province-" + n, onClick: function (t) {
                                return e.selectProvince(t, n)
                            }
                        }, r.a.createElement("span", {className: i}, t.region_name))
                    }), u = 2 === n && o && o.map(function (t, n) {
                        var i = t.region_id + "" == s + "" ? "region-active" : "";
                        return r.a.createElement("li", {
                            key: "city-" + n, onClick: function (t) {
                                return e.selectCity(t, n)
                            }
                        }, r.a.createElement("span", {className: i}, t.region_name))
                    }), p = 3 === n && l && l.map(function (t, n) {
                        var i = t.region_id + "" == c + "" ? "region-active" : "";
                        return r.a.createElement("li", {
                            key: "city-" + n, onClick: function (t) {
                                return e.selectDistrict(t, n)
                            }
                        }, r.a.createElement("span", {className: i}, t.region_name))
                    });
                return r.a.createElement("div", {className: "mars-regions"}, 1 === n && r.a.createElement("ul", {
                    id: "region-selector-list-1",
                    className: "mars-regions-p"
                }, d), 2 === n && r.a.createElement("ul", {
                    id: "region-selector-list-2",
                    className: "mars-regions-c"
                }, u), 3 === n && r.a.createElement("ul", {
                    id: "region-selector-list-3",
                    className: "mars-regions-d"
                }, p))
            }, t.prototype.selectDistrict = function (e, t) {
                e && e.stopPropagation();
                var n = this.state.districts[t];
                n && this.onDistrictEdited(n)
            }, t.prototype.onDistrictEdited = function () {
                var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = {districtID: t.region_id, districtName: t.region_name};
                this.setState(function (e) {
                    return n
                }, function (t) {
                    e.hideRegionSelectorPanel(), e.setRegionUnionName()
                })
            }, t.prototype.selectCity = function (e, t) {
                e && e.stopPropagation();
                var n = this.state.cities[t];
                n && this.onCityEdited(n)
            }, t.prototype.onCityEdited = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = this;
                if (!t.citiesLoaded) return !1;
                var n = e.region_id, i = e.region_name;
                if (n + "" != "0") {
                    var a = {cityID: n, cityName: i};
                    t.districtsLoaded = !1, t.onDistrictsLoaded("0", []).then(function () {
                        t.setState(function (e) {
                            return a
                        }, function (e) {
                            t.loadRegions(Rt.DISTRICT, n).then(function (e) {
                                var n = t.state.districtID;
                                t.onDistrictsLoaded(n, e), t.selectRegionTab(Rt.DISTRICT)
                            })
                        })
                    })
                }
            }, t.prototype.onDistrictsLoaded = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = this;
                t = t.regions || [];
                var i = this.isRegionIDContainInRegions(e, t),
                    a = {districts: t || [], districtID: i && e || "0", districtName: i && i.region_name || ""};
                return new l.a(function (e, t) {
                    n.setState(function (e) {
                        return a
                    }, function (t) {
                        n.districtsLoaded = !0, e()
                    })
                })
            }, t.prototype.setRegionUnionName = function () {
                var e = this.state, t = e.provinceID, n = e.cityID, i = e.districtID, a = e.provinceName,
                    o = e.cityName, r = e.districtName, s = {};
                t + "" != "0" && n + "" != "0" && i + "" != "0" && (s = lt.a.extend(s, {
                    currentProvinceID: t,
                    currentCityID: n,
                    currentDistrictID: i,
                    currentProvinceName: a,
                    currentCityName: o,
                    currentDistrictName: r
                })), s = lt.a.extend(s, {regionUnionName: a + "  " + o + "  " + r}), this.props.eventEmitter.emit("setRegionUnionName", s)
            }, t.prototype.selectProvince = function (e, t) {
                e && e.stopPropagation();
                var n = this.state.provinces[t];
                n && this.onProvinceEdited(n)
            }, t.prototype.onProvinceEdited = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = this;
                if (t.provincesLoaded) {
                    var n = e.region_id, i = e.region_name;
                    n + "" != "0" && (t.citiesLoaded = !1, t.districtsLoaded = !1, t.onCitiesLoaded("0", []).then(function () {
                        t.onDistrictsLoaded("0", []).then(function () {
                            var e = {provinceID: n, provinceName: i};
                            t.setState(function (t) {
                                return e
                            }, function (e) {
                                t.loadRegions(Rt.CITY, n).then(function (e) {
                                    var n = t.state.cityID;
                                    t.onCitiesLoaded(n, e), t.selectRegionTab(Rt.CITY)
                                })
                            })
                        })
                    }))
                }
            }, t.prototype.onCitiesLoaded = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = this,
                    i = t.self_city_id;
                t = t.regions || [], n.removeToFirst(t, i);
                var a = n.isRegionIDContainInRegions(e, t),
                    o = {cities: t, cityID: a && e || 0, cityName: a && a.region_name || ""};
                return new l.a(function (e, t) {
                    n.setState(function (e) {
                        return o
                    }, function (t) {
                        n.citiesLoaded = !0, e()
                    })
                })
            }, t.prototype.loadRegions = function (e, t) {
                return new l.a(function (e, n) {
                    he.a.apiRequest("GET", "api/galen/v2/regions/" + t, null, function (t) {
                        e(t)
                    }, null)
                })
            }, t.prototype.onAddressInfoLoaded = function (e) {
                if (e) {
                    var t = this, n = e.region_id || Rt.RegionChina, i = e.province_id, a = e.city_id,
                        o = e.district_id;
                    t.loadRegions(Rt.PROVINCE, n).then(function (e) {
                        t.onProvincesLoaded(i, e).then(function () {
                            i + "" == t.state.provinceID + "" && t.loadRegions(Rt.CITY, i).then(function (e) {
                                t.onCitiesLoaded(a, e).then(function () {
                                    a + "" == t.state.cityID + "" ? t.loadRegions(Rt.DISTRICT, a).then(function (e) {
                                        t.onDistrictsLoaded(o, e), t.isRegionIDContainInRegions(o, e.regions) || D.default.showToast("请重新选择地区")
                                    }) : D.default.showToast("请重新选择地区")
                                })
                            })
                        })
                    })
                }
            }, t.prototype.isRegionIDContainInRegions = function (e, t) {
                if (!t) return null;
                for (var n = 0; n < t.length; ++n) {
                    var i = t[n];
                    if (i.region_id + "" == e + "") return i
                }
                return null
            }, t.prototype.removeToFirst = function (e, t) {
                var n = this.isRegionIDContainInRegions(t, e), i = e.indexOf(n);
                i < 0 || (e.splice(i, 1), e.unshift(n))
            }, t.prototype.onProvincesLoaded = function (e) {
                var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = n.self_province_id;
                n = n.regions || [], this.removeToFirst(n, i);
                var a = this.isRegionIDContainInRegions(e, n),
                    o = {provinces: n, provinceID: e || "0", provinceName: a && a.region_name || ""};
                return new l.a(function (e, n) {
                    t.setState(function (e) {
                        return o
                    }, function (n) {
                        t.provincesLoaded = !0, e()
                    })
                })
            }, t.prototype.selectRegionTab = function (e, t) {
                t && t.stopPropagation();
                this.setState(function (t) {
                    return {currentRegionTab: e}
                }, function (t) {
                    Lt.disableScrollNew(document.getElementById("region-selector-list-" + e))
                })
            }, t.prototype.hideRegionSelectorPanel = function (e) {
                e && e.stopPropagation();
                var t = this, n = t.refs.regionSelectorPanel;
                St.a.Animation.gradualChange(n, 386, {
                    wrapValueFn: function (e) {
                        return "translateY(" + e / 100 + "rem)"
                    }, getValueFn: function (e) {
                        return e || 0
                    }, inStyle: !0, attr: "transform", during: 25, stopAdvance: 6
                }, function () {
                    t.props.onClose && t.props.onClose()
                })
            }, t.prototype.showRegionSelectorPanel = function (e) {
                e && e.stopPropagation() && e.preventDefault();
                var t = this.refs.regionSelectorPanel;
                St.a.Animation.gradualChange(t, 0, {
                    wrapValueFn: function (e, t) {
                        return "translateY(" + e / 100 + "rem)"
                    }, getValueFn: function (e) {
                        return e || 386
                    }, inStyle: !0, attr: "transform", during: 25
                })
            }, t
        }(o.Component);
        Bt.defaultProps = {addressId: "", isShow: !1}, Bt.propTypes = {
            onClose: bt.PropTypes.func.isRequired,
            addressId: bt.PropTypes.string,
            isShow: bt.PropTypes.bool
        };
        var Wt = Bt, Gt = kt.a.error, Ft = "undefined" != typeof window, Ut = void 0, Ht = void 0;
        Ft && (Ut = D.default, Ht = L.b.IOSSystemVersion && L.b.compareVersion(L.b.IOSSystemVersion, "11.0.0") >= 0);
        var Vt = function (e) {
            function t(n) {
                h()(this, t);
                var i = y()(this, e.call(this, n));
                return i.state = {
                    loaded: !i.props.addressId,
                    title: i.props.title,
                    saveAndUse: i.props.saveAndUse,
                    isDefault: "0",
                    name: "",
                    mobile: "",
                    address: "",
                    showRegionSelector: !1,
                    isSubmitBtnActived: !1,
                    currentProvinceID: "0",
                    currentCityID: "0",
                    currentDistrictID: "0",
                    currentProvinceName: "",
                    currentCityName: "",
                    currentDistrictName: "",
                    isNameError: !1,
                    isMobileError: !1,
                    isAddressError: !1,
                    focused: !1,
                    addressInfo: null,
                    addressSuggestionList: [],
                    isPositionBtnActived: !1
                }, i.eventEmitter = new Ot.EventEmitter, i.locateOvertimeCount = 0, i.addrClose = i.addrClose.bind(i), i.saveAddress = i.saveAddress.bind(i), i.reduceMobile = i.reduceMobile.bind(i), i.getUserCoords = i.getUserCoords.bind(i), i.getGeolocation = i.getGeolocation.bind(i), i.dealSaveResult = i.dealSaveResult.bind(i), i.checkSubmitState = i.checkSubmitState.bind(i), i.generateAddrTitle = i.generateAddrTitle.bind(i), i.generateAddrBottom = i.generateAddrBottom.bind(i), i.generateAddrAddress = i.generateAddrAddress.bind(i), i.generateAddrReceiver = i.generateAddrReceiver.bind(i), i.generateRegionSelector = i.generateRegionSelector.bind(i), i.setAddressInputFocused = i.setAddressInputFocused.bind(i), i.showDialogRegionSelector = i.showDialogRegionSelector.bind(i), i.hideDialogRegionSelector = i.hideDialogRegionSelector.bind(i), i
            }

            return w()(t, e), t.prototype.componentWillMount = function () {
                var e = this;
                Ft && n("3EMY"), e.eventEmitter.on("setRegionUnionName", function (t) {
                    e.setState(function (e) {
                        return t
                    })
                }), e.eventEmitter.on("fillEditAddress", function (t) {
                    if (t) {
                        var n = t.is_default, i = t.name, a = t.mobile, o = t.address, r = t.province_id, s = t.city_id,
                            l = t.district_id, c = t.province, d = t.city, u = t.district, p = {
                                isDefault: n,
                                name: i,
                                mobile: a,
                                address: o,
                                currentProvinceID: r,
                                currentCityID: s,
                                currentDistrictID: l,
                                currentProvinceName: c,
                                currentCityName: d,
                                currentDistrictName: u,
                                regionUnionName: c + "  " + d + "  " + u,
                                loaded: !0
                            };
                        Mt.a.hide(), e.setState(function (e) {
                            return p
                        })
                    }
                })
            }, t.prototype.render = function () {
                var e = this, t = e.state.loaded;
                return r.a.createElement("div", {
                    className: "bg-fill",
                    style: {display: t ? "" : "none"}
                }, r.a.createElement("div", {className: "m-addr-main"}, e.generateAddrTitle(), e.generateAddrReceiver(), e.generateAddrRegion(), e.generateAddrAddress(), e.generateAddrBottom(), r.a.createElement("div", {
                    className: "m-addr-close",
                    onClick: function (t) {
                        return e.addrClose(t)
                    }
                })), e.generateRegionSelector())
            }, t.prototype.componentDidUpdate = function () {
                this.checkSubmitState()
            }, t.prototype.componentDidMount = function () {
                this.props.onShowTrackingBase && de.a.trackingRecord(lt.a.extend(this.props.onShowTrackingBase, this.props.trackingContext)), Ht && (this.bodyPositionStyle = document.body.style.position, this.bodyScrollTop = St.a.getScrollTop(), document.body.style.position = "fixed")
            }, t.prototype.componentWillUnmount = function () {
                Ut.enableScrollNew(), this.geoHandler && clearTimeout(this.geoHandler), Ht && (document.body.style.position = this.bodyPositionStyle, St.a.setScrollTop(this.bodyScrollTop))
            }, t.prototype.generateRegionSelector = function () {
                var e = this.state, t = e.showRegionSelector, n = e.addressInfo, i = {
                    onClose: this.hideDialogRegionSelector,
                    eventEmitter: this.eventEmitter,
                    isShow: t,
                    addressId: this.props.addressId,
                    addressInfo: n
                };
                return r.a.createElement(Wt, i)
            }, t.prototype.generateAddrTitle = function () {
                var e = this.state.title;
                return r.a.createElement("div", {className: "m-addr-title"}, e)
            }, t.prototype.generateAddrReceiver = function () {
                var e = this, t = e.state, n = t.name, i = t.mobile, a = t.isNameError, o = t.isMobileError, s = {
                    className: "m-addr-name " + (a ? "input-error" : ""),
                    id: "name",
                    placeholder: "名字",
                    value: n,
                    type: "text",
                    onChange: function (t) {
                        return e.nameOnChange.bind(e, t)()
                    },
                    onFocus: function (t) {
                        return e.removeNameError.bind(e, t)()
                    }
                }, l = {
                    className: "m-addr-mobile " + (o ? "input-error" : ""),
                    id: "mobile",
                    placeholder: "电话",
                    value: i,
                    type: "tel",
                    onChange: function (t) {
                        return e.mobileChange.bind(e, t)()
                    },
                    onFocus: function (t) {
                        return e.removeMobileError.bind(e, t)()
                    }
                };
                return r.a.createElement("div", {className: "m-address-receiver"}, r.a.createElement("input", s), r.a.createElement("input", l))
            }, t.prototype.generateAddrRegion = function () {
                var e = this, t = e.state, n = t.currentProvinceName, i = t.currentCityName, a = t.currentDistrictName,
                    o = t.regionUnionName, s = n && i && a;
                return r.a.createElement("div", {
                    className: "m-addr-region", onClick: function (t) {
                        return e.showDialogRegionSelector(t)
                    }
                }, s ? r.a.createElement("span", null, o) : r.a.createElement("span", null, "选择地区"))
            }, t.prototype.generateAddrAddress = function () {
                var e = this, t = e.state, n = t.address, i = t.isAddressError, a = t.isPositionBtnActived,
                    o = !!t.addressSuggestionList.length && !!n.length, s = {
                        id: "address", value: n, placeholder: "详细地址（如街道、小区、乡镇、村）", onChange: function (t) {
                            return e.addressOnChange.bind(e, t)()
                        }, onFocus: function (t) {
                            return e.removeAddressError.bind(e, t)()
                        }, className: (i ? "input-error" : "") + " " + (o ? "short" : "")
                    }, l = {
                        className: "position-icon " + (a ? "active" : "inactive"), onClick: function (t) {
                            return e.requestPosition.bind(e, t)()
                        }
                    };
                return r.a.createElement("div", {className: "m-addr-address"}, r.a.createElement("textarea", s), o && r.a.createElement("div", {
                    className: "m-addr-save-supplement",
                    onClick: function (t) {
                        return e.pickUpSuggestionList.bind(e, t)()
                    }
                }, "完成"), L.b && !L.b.isNativePlatform() && r.a.createElement("div", l))
            }, t.prototype.generateAddrBottom = function () {
                var e = this, t = e.state, n = t.isSubmitBtnActived, i = t.saveAndUse, a = t.addressSuggestionList,
                    o = void 0;
                if (a.length) o = r.a.createElement("div", {className: "m-addr-address-suggestion"}, r.a.createElement("ul", {id: "m-addr-address-suggestion-ul"}, a && a.map(function (t, n) {
                    return r.a.createElement("li", {
                        key: "suggestion-" + n, onClick: function (n) {
                            return e.selectSuggestionAddress.bind(e, n, t)()
                        }
                    }, r.a.createElement("div", {className: "m-addr-suggestion-title"}, t.title), r.a.createElement("div", {className: "m-addr-suggestion-address"}, t.address))
                }))); else {
                    var s = "m-addr-save " + (n ? "active" : "inactive");
                    o = r.a.createElement("div", {
                        className: s, onClick: function (t) {
                            return e.saveAddress(t)
                        }
                    }, i ? "保存并使用" : "保存")
                }
                return o
            }, t.prototype.pickUpSuggestionList = function (e) {
                e && e.stopPropagation(), this.setState(function (e) {
                    return {addressSuggestionList: []}
                })
            }, t.prototype.selectSuggestionAddress = function (e, t) {
                e && e.stopPropagation(), this.props.locationAddrClickTracking && de.a.trackingRecord(lt.a.extend(this.props.locationAddrClickTracking, this.props.trackingContext));
                var n = this.state, i = n.currentProvinceID, a = n.currentCityID, o = n.currentDistrictID;
                i + "" == t.province_id + "" && a + "" == t.city_id + "" && o + "" == t.district_id + "" || D.default.showToast("省市区的信息已修改");
                var r = t.province_id, s = t.city_id, l = t.district_id, c = t.title, d = t.thumb_address,
                    u = t.province, p = t.city, m = t.district, h = (t.address, {
                        currentProvinceID: r,
                        currentCityID: s,
                        currentDistrictID: l,
                        currentProvinceName: u,
                        currentCityName: p,
                        currentDistrictName: m,
                        regionUnionName: u + "  " + p + "  " + m,
                        address: d + " " + c,
                        addressSuggestionList: [],
                        addressInfo: t
                    });
                this.setState(function (e) {
                    return h
                }), this.setAddressInputFocused()
            }, t.prototype.setAddressInputFocused = function () {
                var e = document.getElementById("address"), t = e.value.length, n = t, i = t;
                if (e.setSelectionRange) e.focus && e.focus(), e.setSelectionRange(n, i); else if (e.createTextRange) {
                    var a = e.createTextRange();
                    a.collapse(!0), a.moveEnd("character", i), a.moveStart("character", n), a.select()
                } else e.focus && e.focus()
            }, t.prototype.checkSubmitState = function (e) {
                e && e.stopPropagation();
                var t = this.state, n = t.isSubmitBtnActived, i = t.name, a = t.mobile, o = t.address,
                    r = t.currentProvinceID, s = t.currentCityID, l = t.currentDistrictID;
                "" === i || "" === a || "" === o || r + "" == "0" || s + "" === 0 || l + "" == "0" ? n && this.setState(function (e) {
                    return {isSubmitBtnActived: !1}
                }) : !n && this.setState(function (e) {
                    return {isSubmitBtnActived: !0}
                })
            }, t.prototype.requestPosition = function (e) {
                e && e.stopPropagation();
                var t = this;
                t.state.isPositionBtnActived || (t.props.locationBtnClickTracking && de.a.trackingRecord(lt.a.extend(t.props.locationBtnClickTracking, t.props.trackingContext)), t.setState(function (e) {
                    return {isPositionBtnActived: !0}
                }, function (e) {
                    t.getUserCoords(function (e, n) {
                        t.setState(function (e) {
                            return {isPositionBtnActived: !1}
                        }), n === t.locateOvertimeCount && (0 !== (e = t.addressListFilter(e)).length ? t.setState(function (t) {
                            return {addressSuggestionList: e || []}
                        }, function (e) {
                            Ut.disableScrollNew(document.getElementById("m-addr-address-suggestion-ul"))
                        }) : D.default.showToast("无法获取你的位置"))
                    }, t.locateOvertimeCount), t.geoHandler && clearTimeout(t.geoHandler), t.geoHandler = setTimeout(function () {
                        t.state.isPositionBtnActived && (D.default.showToast("无法获取你的位置"), t.locateOvertimeCount += 1, t.setState(function (e) {
                            return {isPositionBtnActived: !1}
                        }))
                    }, 15e3)
                }))
            }, t.prototype.getUserCoords = function (e, t) {
                var n = this;
                L.b.isWeChatPlatform() ? wx.getLocation({
                    type: "wgs84", success: function (i) {
                        var a = i.latitude, o = i.longitude;
                        n.geolocationDecoder(e, {lat: a, lng: o}, t)
                    }, cancel: function () {
                        e(null, t)
                    }
                }) : L.b.isQQPlatform() ? mqq.sensor.getLocation({allowCacheTime: 60}, function (i, a, o, r) {
                    0 !== i ? e(null, t) : n.geolocationDecoder(e, {lat: a, lng: o, coord_type: 5}, t)
                }) : n.getGeolocation(function (i) {
                    var a = i.coords, o = a.latitude, r = a.longitude;
                    n.geolocationDecoder(e, {lat: o, lng: r}, t)
                }, function (n) {
                    e(null, t)
                }, null, t)
            }, t.prototype.geolocationDecoder = function (e, t, n) {
                t && t.lat && t.lng ? (t.coord_type || (t.coord_type = 1), he.a.apiRequest("GET", "api/galen/huygens/location/decoder?" + j.a.buildQuery(t), null, function (t) {
                    t && 0 === t.code ? e(t.data, n) : (t && t.message, e(null, n))
                }, function (t) {
                    e(null, n)
                })) : e(null)
            }, t.prototype.getGeolocation = function (e, t, n) {
                t || (t = function (e) {
                    switch (e.code) {
                        case e.TIMEOUT:
                            D.default.showToast("定位超时，请重试");
                            break;
                        case e.PERMISSION_DENIED:
                            D.default.showToast("请同意定位请求");
                            break;
                        case e.POSITION_UNAVAILABLE:
                        case e.UNKNOWN_ERROR:
                            D.default.showToast("无法获取你的位置")
                    }
                }), n || (n = {
                    enableHighAccuracy: !1,
                    timeout: 6e4,
                    maximumAge: 6e4
                }), navigator.geolocation ? navigator.geolocation.getCurrentPosition(e, t, n) : D.default.showToast("你的浏览器不支持定位功能")
            }, t.prototype.addressListFilter = function (e) {
                return e && e.length > 0 ? e.filter(function (e) {
                    return -1 !== parseInt(e.city_id, 10) && -1 !== parseInt(e.district_id, 10) && -1 !== parseInt(e.province_id, 10)
                }) : []
            }, t.prototype.reduceMobile = function (e) {
                for (var t = "", n = e.length, i = 0; i < n; i++) e.charCodeAt(i) < 255 && (t += e.substr(i, 1));
                return t.replace(/\s|\-/g, "").replace(/^\+86/, "")
            }, t.prototype.dealSaveResult = function (e) {
                var t = this;
                t.props.onSaveClickTrackingBase && de.a.trackingRecord(lt.a.extend(t.props.onSaveClickTrackingBase, t.props.trackingContext)), he.a.apiRequest("GET", "address/" + e, null, function (e) {
                    t.props.onConfirm && t.props.onConfirm(e)
                }, null)
            }, t.prototype.saveAddress = function () {
                if (!this.isSaveBtnClicked) {
                    var e = this;
                    if (e.isSaveBtnClicked = !0, !e.validAddressInfo()) return setTimeout(function (t) {
                        e.isSaveBtnClicked = !1
                    }, 2600), !1;
                    var t = e.state, n = t.name, i = t.mobile, a = t.currentProvinceID, o = t.currentCityID,
                        r = t.currentDistrictID, s = t.address, l = t.isDefault, c = {
                            name: n,
                            mobile: e.reduceMobile(i),
                            province_id: a,
                            city_id: o,
                            district_id: r,
                            address: s,
                            is_default: l
                        };
                    Mt.a.show(), e.props.addressId ? he.a.apiRequest("POST", "api/apollo/address_info/" + e.props.addressId, c, function (t) {
                        e.dealSaveResult(e.props.addressId), e.isSaveBtnClicked = !1, Mt.a.hide()
                    }, function (t) {
                        D.default.showToast("网络异常，请刷新页面后重试", {center: !0}), e.isSaveBtnClicked = !1, Mt.a.hide()
                    }) : he.a.apiRequest("POST", "address", c, function (t) {
                        t.address_id && e.dealSaveResult(t.address_id), e.isSaveBtnClicked = !1, Mt.a.hide()
                    }, function (t) {
                        var n = Gt.getMsgFromCode(t) || "网络异常，请刷新页面后重试";
                        D.default.showToast(n, {center: !0}), e.isSaveBtnClicked = !1, Mt.a.hide()
                    })
                }
            }, t.prototype.addrClose = function (e) {
                e && e.stopPropagation();
                this.props.onClose && this.props.onClose()
            }, t.prototype.nameOnChange = function (e) {
                e && e.stopPropagation();
                var t = e.target.value;
                this.setState(function (e) {
                    return {name: t}
                })
            }, t.prototype.mobileChange = function (e) {
                var t = e.target.value;
                this.setState(function (e) {
                    return {mobile: t}
                })
            }, t.prototype.addressOnChange = function (e) {
                e && e.stopPropagation();
                var t = e.target.value;
                this.setState(function (e) {
                    return {address: t}
                })
            }, t.prototype.showDialogRegionSelector = function (e) {
                e && e.stopPropagation() && e.preventDefault();
                this.setState(function (e) {
                    return {showRegionSelector: !0}
                })
            }, t.prototype.hideDialogRegionSelector = function (e) {
                e && e.stopPropagation() && e.preventDefault();
                this.setState(function (e) {
                    return {showRegionSelector: !1}
                })
            }, t.prototype.validAddressInfo = function () {
                var e = this.state, t = e.name, n = e.mobile, i = e.currentProvinceID, a = e.currentCityID,
                    o = e.currentDistrictID, r = e.address;
                if ("" === t.trim()) return D.default.showToast("收货人的名字不能为空", {center: !0}), !1;
                if (lt.a.getStringCharLength(t) > 16) return D.default.showToast("名字不能超过8个字", {center: !0}), this.setState(function (e) {
                    return {isNameError: !0}
                }), !1;
                if (Pt(t)) return D.default.showToast("姓名含有非法字符，请重新编辑", {center: !0}), this.setState(function (e) {
                    return {isNameError: !0}
                }), !1;
                if ("" === n) return D.default.showToast("收货人的电话不能为空", {center: !0}), !1;
                for (var s = n.replace(/\s|\-/g, ""), l = s.length, c = "", d = 0; d < l; d++) s.charCodeAt(d) < 255 && (c += s.substr(d, 1));
                if (!/^(\+86)?(1)\d{10}$/.test(c)) return D.default.showToast("请输入正确的手机号", {center: !0}), this.setState(function (e) {
                    return {isMobileError: !0}
                }), !1;
                if (i + "" == "0" || a + "" == "0" || o + "" == "0") return D.default.showToast("请选择地区", {center: !0}), !1;
                if ("" === r.trim()) return D.default.showToast("详细地址不能为空", {center: !0}), !1;
                if (lt.a.getStringCharLength(r) > 100) return D.default.showToast("地址填写过长", {center: !0}), this.setState(function (e) {
                    return {isAddressError: !0}
                }), !1;
                return /^[0-9]*$/.test(r) ? (D.default.showToast("详细地址不能全为数字", {center: !0}), this.setState(function (e) {
                    return {isAddressError: !0}
                }), !1) : !Pt(r) || (D.default.showToast("详细地址含有非法字符，请重新编辑", {center: !0}), this.setState(function (e) {
                    return {isAddressError: !0}
                }), !1)
            }, t.prototype.removeNameError = function (e) {
                e && e.stopPropagation(), this.setState(function (e) {
                    return {isNameError: !1, focused: !0}
                })
            }, t.prototype.removeMobileError = function (e) {
                e && e.stopPropagation(), this.setState(function (e) {
                    return {isMobileError: !1, focused: !0}
                })
            }, t.prototype.removeAddressError = function (e) {
                e && e.stopPropagation(), this.setState(function (e) {
                    return {isAddressError: !1, focused: !0}
                })
            }, t
        }(o.Component);
        Vt.defaultProps = {
            title: "编辑地址",
            addressId: "",
            trackingContext: {}
        }, Vt.propTypes = {
            title: bt.PropTypes.string,
            addressId: bt.PropTypes.string,
            trackingContext: bt.PropTypes.object,
            onClose: bt.PropTypes.func.isRequired,
            onConfirm: bt.PropTypes.func.isRequired,
            onShowTrackingBase: bt.PropTypes.object,
            onSaveClickTrackingBase: bt.PropTypes.object,
            locationBtnClickTracking: bt.PropTypes.object,
            locationAddrClickTracking: bt.PropTypes.object
        };
        var qt = Vt, Xt = n("n2/S");
        "undefined" != typeof window && n("hNnl");
        var zt, Yt, Qt, Kt, Jt = "addressPopupAddressListInstance", Zt = function (e) {
                function t(n) {
                    h()(this, t);
                    var i = y()(this, e.call(this, n));
                    return i.state = {
                        isLoaded: !1,
                        addresses: []
                    }, i.close = i.close.bind(i), i.select = i.select.bind(i), i.add = i.add.bind(i), i.addresslistDOMId = Jt, i
                }

                return w()(t, e), t.prototype.componentWillUnmount = function () {
                    D.default.enableScrollNew(), D.default.enableScroll()
                }, t.prototype.componentDidMount = function () {
                    var e = this;
                    Xt.a.apiRequest("GET", "addresses", null, function (t) {
                        e.setState({
                            isLoaded: !0,
                            addresses: t
                        }), D.default.disableScrollNew(document.querySelector("#" + Jt)), D.default.disableScroll(Jt)
                    }, function () {
                        e.close()
                    })
                }, t.prototype.close = function () {
                    D.default.enableScrollNew(), D.default.enableScroll(), this.props.onClose && this.props.onClose(), this.props.onCancel && this.props.onCancel()
                }, t.prototype.select = function (e) {
                    this.props.onSelect && this.props.onSelect(e)
                }, t.prototype.add = function () {
                    this.props.onAdd && this.props.onAdd()
                }, t.prototype.render = function () {
                    var e = this, t = this.props.doNotShowCloseBtn, n = !1;
                    return n = this.state.isLoaded ? r.a.createElement("div", null, this.state.addresses.map(function (t, n) {
                        return r.a.createElement("li", {
                            key: n, className: "address-popup-list-item", onClick: function () {
                                e.select(t)
                            }
                        }, r.a.createElement("p", null, t.name + ", " + t.mobile), r.a.createElement("p", null, t.province + t.city + t.district + t.address))
                    }), r.a.createElement("li", {
                        className: "address-popup-list-item address-popup-list-item-last",
                        onClick: this.add
                    }, r.a.createElement("p", null, "添加新收货地址"))) : r.a.createElement("img", {
                        className: "ps-rotate-img",
                        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAGwElEQVRo3u2af4wdVRXHP2/XLm1BTMCCtGNLEQS6nUoVEiIwUEkMDTGZBqq0JOrQSBSE4sMKhEMW5aQCtg0W6w9Qp4Gm/AGUMRL5IabJiKSgQnWEVi1gy0CXrcJCIuiybPnjztvO3jfv7XvPNwYSvskme879ce537o9z7rmvQskQkRnACcBOVd1Xpq2ekoksBXYDMbBHRJa/Z8kAa4Fp2f9TM/ndRUZEjhSRD7VQ9aOW/JEW+p4uIrNKJ5MZug/YCwyJyMpOjDbpfwkwCKQiEovIEaWRAS4HfKAC9AFrRWR+l4jMAELgg5nqDGB1mWSOseReYH03yGQDt5fu3DLJ3FugW5Qtj44hIicBFxUU3VMaGVV9CHiwoGitiEz9H/isLxjLM8DtpZHJ8A3gLUs3F7iiExaZLzqjyI6qjpZKRlV3AhsKiq4VkaPaJDIVWFNQ9EtVfbjdsXXqNL8N2KHJIcB3Ld1uS37JklcBsy3df4ErOxlUxfpS04GNwBJgBzCgqvcVNRSRrwI/stT7gY+p6vNZnaXAncBBwAhwoarek5UdjPEph1h9rFHVVQ1sngrcDHwaEyJdoKpDtXJ7Zq4GlgIfAFxgi4g8ICLzCvq+HfhTwceZUxNU9W5MFHA6MLNGJMNhBUQGgRsKSMwWkc3AY5j91QssAm5pNjNbgbMKBj4K3AZcp6qv5OqfCfwm6xzg78ACVf0PLaDA3pdU9Y5c+TSgClzLgRgvjxdUdXyZ9uZLPM87DvAKGvUApwArPM/7t+d5T8VxPBbH8W7P8x7PPsrDwApVfb0VIpm9ezF7ZAi4UVU3ZSQqnuctAyLMkp/SoItfxXE87vvsmekDvgdcgllqjfA0sExVk1YH3ipEZCawGTizSbX9wF3Apao6XFNOGLCqjgArReQnmHD9nAad9WO88/HdJgP8bBIiTwGXqerv7IJKk0a1KPZm4NgGVQ5W1Te6yURE9lJ8VdgLCLBRVceK2jb1M9mx3A98E7D3wm+7TSTDA5Y8glklx6vqzxsRgeb7okZoBBN7bQYGgMWYuOniEoiACZemAadhjmJR1V0l2Xof/xdUAETkEuAawGlSdwyzvL6mqo+WPbB169YtwlwN5tF8bw8CA9Vq9baKiJyI8RuVFmwAvAjMUdW3SyQyJbMzo8UmbwP9PcD8NogAzGrDSKc4sk0bvcD8Hkyw2M5X3qOqgyWTeQkzM61iFHiyR1X/BqwAngVeneTvj8D5JROhWq2OAedl9iYb0x4gqFarz5c9rvfRKVre+Gma9gGXAudijmhxHKflcL9VhGHYh7m/nAZsA9YEQTDcNTJpmhYFnFscxzmvBDI3Ad/KqYYwPnBjEARjzdo2DTTTNJ2XpukjwBbqI2c/TdNpdB8XWvIRmGvBH8IwbHY1KCaTpumH0zTdgDm2z27Qdgho6XrcJl5ooF8IbA3DcHMYhrOLKkxYZmmaVjDR8GpMwqER/gksdxzn191mEobhAuAXwNFNqr2JybfdEATBeELSJrMSK+NhYRT4ITDgOM4wQJIkJwJfAFJgk+u6Lc9WFEU9GL+1ALjf9/1tGaFaIuNq6jM4eawPgmD8WcUm0yg7AybHfKXjOM/UFEmS9ANPANMz1aPAWa7rthRRRFG0iQN7ZAw4x/f98dkOw3AWJidxAcWH1e4gCI6uCfae+UtBg13A5xzHWZwnkuHWHBEw+bFT7Q7iOK7LrkRRdBQTN3sPsCGKor6aIgiCF4MgWI5J+j1eMLYdWB3k8R1ge/b/q5jrcr/jOPfbvSRJsgSTiLMx7nviOP5UHMc7gJE4jp+O4/iTuXpvYK7EeRwHXGZ3GATBtozQCg6keP+BWYrjqJu67BCYA7zsOM6bBYMlSZKpGMdpPwY96Lru4hyZ3wMn58q3e563MDc7twJfL/gYH/d9/+Ui22EYTsFkSfcEQTDhlaAuB+A4zv6MdTNcUUDkLcz9PY+FlrzAkq8HlgGH53SHAgp8pchwdno9V1TW9itAkiQzMeGGjQ2u6+60dL2WPMGe7/v/ygjZuCiKopNpE508aaym/rjch3nm6AQ/pv7g6QHWRVHUzqWxPTJJkpwCfLGg6DrXdYc7YeL7/ij1yxNMtv/zpZEBvkz9obEd+GknRHKEHsEkyYvslUZmuEBXbdVJToJVmBeBPF4rk8wtHPBDAOtd193aBSL4vr8LuAqT4QdzHR4ojYzruvswfuN04BOu63b15ya+738f83Ouz2B8zV/bad/WadEu4jgexKSNanjF87zDO+1vMpT9Ey37AfcHZRordWYA4jj+LMbz/9nzvLbf9tvBO0XbJi+MSyc4AAAAAElFTkSuQmCC"
                    }), r.a.createElement("div", {className: "bg-fill app-bg-fill"}, r.a.createElement("div", {className: "address-popup-content"}, r.a.createElement("div", {className: "address-popup-title"}, "选择收货地址", !t && r.a.createElement("i", {
                        className: "address-popup-title-close",
                        onClick: this.close
                    })), r.a.createElement("ul", {id: Jt, className: "address-popup-list"}, n)))
                }, t
            }(r.a.Component), $t = n("qiMe"), en = (n("yIiy"), function (e) {
                function t() {
                    return h()(this, t), y()(this, (t.__proto__ || p()(t)).apply(this, arguments))
                }

                return w()(t, e), g()(t, [{
                    key: "componentWillUnmount", value: function () {
                        this.defaultNode && document.body.removeChild(this.defaultNode), this.defaultNode = null
                    }
                }, {
                    key: "render", value: function () {
                        return document ? (this.defaultNode || (this.defaultNode = document.createElement("div"), document.body.appendChild(this.defaultNode)), Et.a.createPortal(this.props.children, this.props.node || this.defaultNode)) : null
                    }
                }]), t
            }(o.Component)), tn = function (e) {
                function t() {
                    return h()(this, t), y()(this, (t.__proto__ || p()(t)).apply(this, arguments))
                }

                return w()(t, e), g()(t, [{
                    key: "render", value: function () {
                        return r.a.createElement(en, null, r.a.createElement("div", {className: "common-popup"}, r.a.createElement("div", {className: "common-popup-mask"}), this.props.children))
                    }
                }]), t
            }(o.Component), nn = (n("stqZ"), function (e) {
                function t() {
                    return h()(this, t), y()(this, (t.__proto__ || p()(t)).apply(this, arguments))
                }

                return w()(t, e), g()(t, [{
                    key: "render", value: function () {
                        var e = Object(it.b)(this.props.number), t = Math.floor(this.props.number / this.props.max * 100),
                            n = {width: (t > 5 ? t : 0) + "%", backgroundColor: e.popupFgColor};
                        return r.a.createElement("div", {
                            className: "progress",
                            style: {backgroundColor: e.popupBgColor}
                        }, r.a.createElement("div", {
                            className: "sub-progress",
                            style: n
                        }), r.a.createElement("span", null, this.props.number, "/", this.props.max))
                    }
                }]), t
            }(o.Component)), an = function (e) {
                function t(e) {
                    h()(this, t);
                    var n = y()(this, (t.__proto__ || p()(t)).call(this, e));
                    return n.onClose = function () {
                        n.setState({show: !1})
                    }, n.useFertilizer = function () {
                        T.a.emit(x.a.OPEN_HEALTH_POPUP), n.setState({show: !1})
                    }, n.watering = function () {
                        T.a.emit(x.a.MAINSTAGE_WATERING), n.setState({show: !1})
                    }, n.state = {show: !1, health: 0, max: 100, levelAmount: 0}, n
                }

                return w()(t, e), g()(t, [{
                    key: "componentDidMount", value: function () {
                        var e = this;
                        T.a.on(x.a.LOW_HEALTH_INFORM, function (t) {
                            if (t) {
                                var n = t.health_degree || 1, i = t.level_amount || 1200;
                                e.setState({show: !0, health: n, levelAmount: i})
                            }
                        })
                    }
                }, {
                    key: "render", value: function () {
                        var e = this;
                        if (!this.state.show) return null;
                        var t = (this.state.health / 10 + 2) / this.state.levelAmount;
                        return t = Math.floor(1e4 * t) / 100, r.a.createElement(tn, null, r.a.createElement("div", {className: "health-inform-popup"}, r.a.createElement("div", {
                            className: "close-btn",
                            onClick: function (t) {
                                return e.onClose()
                            }
                        }, r.a.createElement("img", {src: Object(F.b)("commonPopupCloseButton")})), r.a.createElement("div", {className: "big-img"}, r.a.createElement("img", {src: Object(F.b)("health-inform-img")})), r.a.createElement(nn, {
                            number: this.state.health,
                            max: 100
                        }), r.a.createElement("h2", {className: "title"}, "健康度过低"), r.a.createElement("div", {className: "text"}, "本次浇水提升的进度小于", r.a.createElement("span", null, t, "%")), r.a.createElement("div", {className: "text"}, "使用化肥可以提高浇水效果"), r.a.createElement("button", {
                            className: "btn",
                            onClick: this.useFertilizer
                        }, "使用化肥"), r.a.createElement("div", {
                            className: "sub-btn",
                            onClick: this.watering
                        }, "放弃使用，继续浇水 >")))
                    }
                }]), t
            }(o.Component), on = (n("Dr8A"), n("cb/7"), Object(F.b)("awardPopupCircle")),
            rn = Object(F.b)("awardPopupStar"), sn = Object(F.b)("treasureBoxLight"),
            ln = Object(F.b)("treasureBoxDot_v2"), cn = Object(F.b)("noonNightDrawWater"),
            dn = (Yt = zt = function (e) {
                function t() {
                    var e, n, i, a;
                    h()(this, t);
                    for (var o = arguments.length, r = Array(o), s = 0; s < o; s++) r[s] = arguments[s];
                    return n = i = y()(this, (e = t.__proto__ || p()(t)).call.apply(e, [this].concat(r))), i.state = {
                        isShow: !0,
                        isLocked: !0
                    }, i.close = function () {
                        i.props.isLocked || i.props.init()
                    }, a = n, y()(i, a)
                }

                return w()(t, e), g()(t, [{
                    key: "render", value: function () {
                        return r.a.createElement("article", {
                            className: "shine-water popup-wrapper popup-wrapper-draw",
                            onClick: this.close
                        }, r.a.createElement("div", {className: "special-effects-wrapper"}, r.a.createElement("img", {
                            className: "special-effects-circle",
                            src: on
                        }), r.a.createElement("img", {
                            className: "special-effects-star",
                            src: rn
                        })), r.a.createElement("img", {
                            className: "popup-item drawed",
                            src: cn
                        }), r.a.createElement("img", {
                            className: "popup-item light",
                            src: sn
                        }), r.a.createElement("img", {
                            className: "popup-item dot",
                            src: ln
                        }), r.a.createElement("span", {className: "popup-item drawed"}, "恭喜你获得了15g水滴"))
                    }
                }]), t
            }(o.PureComponent), zt.defaultProps = {
                isLocked: !1, init: function () {
                }
            }, Yt), un = "undefined" != typeof window ? n("3uCO") : {}, pn = Object(F.b)("popupIconDry"),
            mn = Object(F.b)("popupIconFresh"), hn = 19, fn = function (e) {
                function t() {
                    var e, n, i, a;
                    h()(this, t);
                    for (var o = arguments.length, r = Array(o), s = 0; s < o; s++) r[s] = arguments[s];
                    return n = i = y()(this, (e = t.__proto__ || p()(t)).call.apply(e, [this].concat(r))), i.state = {
                        closeBtnImg: Object(F.b)("commonPopupCloseButton"),
                        popupStatus: null,
                        popupType: "",
                        isShowPopup: !1,
                        isShared: !1,
                        isLocked: !0
                    }, i.data = {
                        waterPopup: {
                            dry: {
                                topIcon: pn,
                                title: "小树干枯了，帮TA浇水吧",
                                smTitle: "拯救干枯的小树奖励",
                                lightSmTile: "15g水滴",
                                btnTxt: "消耗10g水滴帮TA浇水"
                            }, normal: {topIcon: mn, title: "帮好友的小树浇水吧", smTitle: "有了你的帮助，小树将加速成长", btnTxt: "消耗10g水滴帮TA浇水"}
                        },
                        sharePopup: {
                            dry: {
                                topIcon: mn,
                                title: "好友的小树重新焕发了生机",
                                smTitle: "告知好友后可领取",
                                lightSmTile: "15g水滴",
                                btnTxt: "去告诉TA"
                            },
                            normal: {
                                topIcon: mn,
                                title: "好友的小树正在茁壮成长",
                                smTitle: "你为小树浇了",
                                lightSmTile: "10g水滴",
                                btnTxt: "去告诉TA"
                            }
                        },
                        helpWaterIcon: null
                    }, i.init = function () {
                        i.setState({isShowPopup: !1, isShared: !1, isLocked: !0})
                    }, i.btnClick = function () {
                        if (i.state.popupType.includes("waterPopup")) i.watering(); else {
                            if (!i.state.popupType.includes("sharePopup")) throw new Error("错误的弹窗状态");
                            i.share()
                        }
                    }, i.shareBackToGainWater = function () {
                        if ("sharePopup.normal" === i.state.popupType) return i.closePopup(), void D.default.showToast("分享成功");
                        G.a.ins.getRiskControlInfoAsync().then(function (e) {
                            un.gainWater(hn, 1, e).then(function (e) {
                                R.a.waterAmount = e.water_amount, R.a.missionList = e.mission_list, i.setState({
                                    isShared: !0,
                                    isLocked: !0
                                }), setTimeout(function () {
                                    i.setState({isLocked: !1})
                                }, 1e3)
                            })
                        })
                    }, i.closePopup = function () {
                        i.state.popupType.includes("sharePopup") ? i.init() : i.setState({isShowPopup: !1})
                    }, a = n, y()(i, a)
                }

                return w()(t, e), g()(t, [{
                    key: "componentDidMount", value: function () {
                        var e = this;
                        T.a.on(x.a.SHOW_HELP_WATER_POPUP, function (t, n) {
                            var i = t.split(".");
                            if (i.length <= 1 || i.length > 2) return !1;
                            var o = a()({}, e.data[i[0]][i[1]]);
                            o.title = o.title.replace("${friendName}", k.g.info.nickname), e.setState({
                                popupType: t,
                                popupStatus: o,
                                isShowPopup: !0
                            }), e.data.helpWaterIcon = n
                        })
                    }
                }, {
                    key: "watering", value: function () {
                        var e = this;
                        this.closePopup();
                        var t = k.g.info.uid, n = lt.a.getSelfUID();
                        G.a.ins.getRiskControlInfoAsync().then(function (i) {
                            e.data.helpWaterIcon && e.data.helpWaterIcon.watering(n, t, i, e.state.popupType)
                        })
                    }
                }, {
                    key: "share", value: function () {
                        var e = void 0;
                        this.state.popupType.includes("dry") ? e = hn : this.state.popupType.includes("normal") && (e = "helpWaterNotReward"), this.props.showShareMask(e, this.shareBackToGainWater, null, null, k.g.info.nickname)
                    }
                }, {
                    key: "render", value: function () {
                        return this.state.isShowPopup ? r.a.createElement("section", {className: "help-water-box"}, this.state.isShared ? r.a.createElement(dn, {
                            isLocked: this.state.isLocked,
                            init: this.init
                        }) : r.a.createElement("article", {className: "help-water"}, r.a.createElement("div", {
                            className: "btn-close",
                            onClick: this.closePopup
                        }, r.a.createElement("img", {src: this.state.closeBtnImg})), r.a.createElement("div", {className: "top-icon"}, r.a.createElement("img", {src: this.state.popupStatus.topIcon})), r.a.createElement("div", {className: "title"}, r.a.createElement("span", null, this.state.popupStatus.title), r.a.createElement("div", {className: "sm-title"}, r.a.createElement("span", null, this.state.popupStatus.smTitle, r.a.createElement("span", {className: "water-amount"}, this.state.popupStatus.lightSmTile)))), r.a.createElement("div", {
                            className: "btn-operate",
                            onClick: this.btnClick
                        }, this.state.popupStatus.btnTxt))) : null
                    }
                }]), t
            }(o.Component), gn = n("g2EY"), vn = n("IlRi"), yn = (n("VH5b"), Object(F.b)("awardTitleBg")),
            bn = Object(F.b)("luckyWaterPopupIcon"), wn = Object(F.b)("commonPopupCloseButtonV2"),
            _n = Object(F.b)("awardBg"), En = (Kt = Qt = function (e) {
                function t() {
                    var e, n, i, a;
                    h()(this, t);
                    for (var o = arguments.length, r = Array(o), s = 0; s < o; s++) r[s] = arguments[s];
                    return n = i = y()(this, (e = t.__proto__ || p()(t)).call.apply(e, [this].concat(r))), i.state = {isShow: !1}, i.sendLuckyWater = function () {
                        Object(vn.e)(i.props.luckyWaterId).then(function (e) {
                            e.success ? T.a.emit(x.a.SHARE_LUCKY_WATER_SUCCESS) : setTimeout(function () {
                                D.default.showToast("发红包失败")
                            }, 4e3)
                        }).catch(function (e) {
                            D.default.showToast(String(e))
                        }), i.props.showShareMask("sendLuckyWater", function () {
                            i.closePopup()
                        }, null, null, k.g.info.nickname ? k.g.info.nickname : "我")
                    }, i.closePopup = function () {
                        i.setState({isShow: !1})
                    }, a = n, y()(i, a)
                }

                return w()(t, e), g()(t, [{
                    key: "componentDidMount", value: function () {
                        var e = this;
                        T.a.on(x.a.LUCKY_WATER_POPUP, function () {
                            e.setState({isShow: !0})
                        })
                    }
                }, {
                    key: "render", value: function () {
                        return r.a.createElement("section", {className: Le()("send-lucky-water-popup full-mask", {hide: !this.state.isShow})}, r.a.createElement("div", {
                            className: "btn-close",
                            onClick: this.closePopup
                        }, r.a.createElement("img", {src: wn})), r.a.createElement("article", {className: "popup-main main-content"}, r.a.createElement("header", {className: "title"}, r.a.createElement("img", {src: yn}), r.a.createElement("span", null, "拼团成功")), r.a.createElement("div", {className: "mid-icon"}, r.a.createElement("div", {className: "desc"}, "恭喜你获得100g水滴红包"), r.a.createElement("img", {
                            className: "shine",
                            src: _n
                        }), r.a.createElement("img", {
                            className: "mid-bag",
                            src: bn
                        }), r.a.createElement("div", {className: "share-txt"}, "分享后你和好友都能抢，自己得更多")), r.a.createElement("button", {
                            className: "btn-send",
                            onClick: this.sendLuckyWater
                        }, "发水滴红包")))
                    }
                }]), t
            }(o.Component), Qt.defaultProps = {
                showShareMask: function () {
                }
            }, Kt), Sn = (n("LNDp"), function (e) {
                function t(e) {
                    h()(this, t);
                    var n = y()(this, (t.__proto__ || p()(t)).call(this, e));
                    return n.state = {show: !1}, n
                }

                return w()(t, e), g()(t, [{
                    key: "componentDidMount", value: function () {
                        var e = this;
                        T.a.on(x.a.SHOW_HEALTH_STARTUP_POPUP, function (t) {
                            setTimeout(function () {
                                localStorage && (localStorage.haveShowedHealthStartup = !0), e.setState({show: !0})
                            }, 500)
                        })
                    }
                }, {
                    key: "onClose", value: function () {
                        this.setState({show: !1})
                    }
                }, {
                    key: "goHealthPopup", value: function () {
                        T.a.emit(x.a.OPEN_HEALTH_POPUP), this.setState({show: !1})
                    }
                }, {
                    key: "render", value: function () {
                        var e = this;
                        return this.state.show ? r.a.createElement(tn, null, r.a.createElement("div", {className: "health-startup-popup"}, r.a.createElement("div", {
                            className: "common-popup-close-btn2",
                            onClick: function (t) {
                                return e.onClose()
                            }
                        }, r.a.createElement("img", {src: Object(F.b)("commonPopupCloseButtonV2")})), r.a.createElement("div", {className: "common-popup-title"}, r.a.createElement("img", {src: Object(F.b)("health-startup-popup-title")}), r.a.createElement("div", null, "果树健康值上线啦")), r.a.createElement("div", {className: "title"}, "让你的果树飞速成长"), r.a.createElement("div", {className: "content-img"}, r.a.createElement("img", {src: Object(F.b)("health-startup-tree")})), r.a.createElement("div", {className: "description"}, "健康度越高，收获水果越快！"), r.a.createElement("button", {
                            className: "common-popup-btn",
                            onClick: function (t) {
                                return e.goHealthPopup()
                            }
                        }, "查看详情"))) : r.a.createElement("div", null)
                    }
                }]), t
            }(o.Component)), Cn = {
                orange: {id: 0, img: "seedsOrange_v3", name: "橘子"},
                lemon: {id: 1, img: "seedsLemon", name: "柠檬", type: 6},
                pear: {id: 2, img: "seedsPear_v2", name: "梨子", type: 2},
                apple: {id: 3, img: "seedsApple_v2", name: "苹果", type: 1},
                kiwi: {id: 4, img: "seedsKiwi", name: "猕猴桃", type: 7},
                shiliu: {id: 5, img: "seedsShiliu", name: "石榴", type: 8}
            }, Tn = (n("Jp1d"), [{avatar: null, nickname: "猴哥猴哥", gain_number: 10}, {
                avatar: null,
                nickname: "雨天",
                gain_number: 8
            }, {avatar: null, nickname: "一飞冲天", gain_number: 1}]);

        function An(e) {
            if (e) {
                var t = e.choice === e.id ? {border: "none"} : null;
                return r.a.createElement("figure", {
                    onClick: function () {
                        e.onChoose(e.id)
                    }
                }, r.a.createElement("div", {className: "img"}, e.choice === e.id && r.a.createElement("img", {
                    className: "shine-bg",
                    src: Object(F.b)("seedsSelectedShine_v2")
                }), r.a.createElement("img", {src: Object(F.b)(e.img)})), r.a.createElement("div", {className: "radio-btn"}, r.a.createElement("div", {
                    className: "circle",
                    style: t
                }, e.choice === e.id && r.a.createElement("img", {src: Object(F.b)("seedsSelectedMark_v2")})), r.a.createElement("span", null, e.name)))
            }
        }

        function xn(e) {
            if (e) return r.a.createElement("div", {className: "info"}, r.a.createElement("img", {src: e.avatar}), r.a.createElement("div", {className: "name"}, r.a.createElement("span", null, "好友"), r.a.createElement("span", {class: "select-seed-strong"}, e.nickname)), r.a.createElement("div", {className: "desc"}, r.a.createElement("span", null, "已免费收获"), r.a.createElement("span", {class: "select-seed-strong"}, e.gain_number, "箱水果")))
        }

        var kn = function (e) {
            function t(e) {
                h()(this, t);
                var n = y()(this, (t.__proto__ || p()(t)).call(this, e));
                return n.choose = function (e) {
                    var t = {};
                    for (var i in Cn) if (Cn[i].id === e) {
                        t = Cn[i];
                        break
                    }
                    n.setState({choice: t})
                }, n.fruitChoice = function (e) {
                    return r.a.createElement(An, d()({}, Cn[e], {choice: n.state.choice.id, onChoose: n.choose}))
                }, n.go = function () {
                    T.a.emit(x.a.MAINSTAGE_CREATETREE_TAP, n.state.choice.type), n.setState({show: !1})
                }, n.state = {show: !1, choice: {}, dynamicInfo: []}, n
            }

            return w()(t, e), g()(t, [{
                key: "componentDidMount", value: function () {
                    var e = this;
                    T.a.on(x.a.SELECT_SEED, function () {
                        e.choose(4), e.setState({show: !0}), Object(nt.getFriendProduct)().then(function (t) {
                            t instanceof Array && 0 !== t.length || (t = Tn), t.sort(function (e, t) {
                                return t.gain_number - e.gain_number
                            }), e.setState({dynamicInfo: t.slice(0, 3)})
                        }).catch(function (t) {
                            e.setState({dynamicInfo: Tn})
                        })
                    })
                }
            }, {
                key: "render", value: function () {
                    return this.state.show ? r.a.createElement("section", null, r.a.createElement("img", {
                        className: "select-seed-bg",
                        src: Object(F.b)("select-seed-bg")
                    }), r.a.createElement("div", {className: "select-seed"}, r.a.createElement("h1", null, r.a.createElement("span", null, "选择水果种下，成熟后"), r.a.createElement("span", {class: "select-seed-strong"}, "包邮送到您家")), r.a.createElement("div", {className: "select-seed-imgs"}, r.a.createElement("div", null, r.a.createElement("div", {className: "row two-item"}, ["shiliu", "lemon"].map(this.fruitChoice)), r.a.createElement("div", {className: "row three-item"}, ["pear", "apple", "kiwi"].map(this.fruitChoice)))), r.a.createElement("div", {className: "bottom-align"}, r.a.createElement("div", {className: "select-seed-main-btn"}, r.a.createElement("button", {onClick: this.go}, "开始种植", this.state.choice.name)), r.a.createElement("div", {className: "select-seed-dynamic-info"}, r.a.createElement("h2", null, "已有900000+人收获了水果"), r.a.createElement("div", {className: "select-seed-dynamic-info-con"}, this.state.dynamicInfo.map(function (e) {
                        return r.a.createElement(xn, e)
                    })))))) : r.a.createElement("div", null)
                }
            }]), t
        }(r.a.PureComponent);
        n("MDMN");
        var Nn = "undefined" != typeof window, On = n("3uCO"), In = A, Pn = void 0, Mn = void 0;
        Nn && (Object(F.b)("missionLackWater"), Pn = Object(F.b)("shareThumbnailV4"), Mn = Object(F.b)("missionFullWater"));
        var Dn = !1, jn = function (e) {
                function t(e) {
                    h()(this, t);
                    var n = y()(this, (t.__proto__ || p()(t)).call(this));
                    return n.toggleMissionAdPopup = function (e) {
                        var t = {};
                        e && (t.missionOneAwardWater = e), n.setState(function (e) {
                            return d()({isShowMissionAdPopup: !e.isShowMissionAdPopup}, t)
                        })
                    }, n.state = {
                        shareMaskVisible: !1,
                        dynamicVisible: !1,
                        dynamicBubbleVisible: !1,
                        dynamicBubbleTrend: {},
                        missionVisible: !1,
                        friendVisible: !1,
                        friendOpacity: 1,
                        isAddressSelectorShow: !1,
                        showEditAddress: !1,
                        showConfirmDialog: !1,
                        showWaterFullDialog: !1,
                        showFCPopup: !1,
                        userInfo: {},
                        showShareArrow: !1,
                        showNewPLayerMask: !1,
                        shareTarget: "",
                        luckyWaterId: null,
                        isShowMissionAdPopup: !1,
                        missionOneAwardWater: 0,
                        SECOND_LOAD_IMG: !1,
                        MAIN_STAGE_LOADED: !1
                    }, n.shareMissionType = null, n.shareText = null, n.orderSn = null, n.confirmGainWater = null, n.updateToGain = !1, n.changeFn = null, n.showShareMask = n.showShareMask.bind(n), n.showMissionMask = n.showMissionMask.bind(n), n.showFriendList = n.showFriendList.bind(n), n.showDynamic = n.showDynamic.bind(n), n.shareCallback = n.shareCallback.bind(n), n.showEditAddress = n.showEditAddress.bind(n), n.setAddressSelector = n.setAddressSelector.bind(n), n.showConfirmAddress = n.showConfirmAddress.bind(n), n.closeEditAddress = n.closeEditAddress.bind(n), n.confirmNewAddress = n.confirmNewAddress.bind(n), n.renderConfirmDialog = n.renderConfirmDialog.bind(n), n.clickConfirmAddressCancel = n.clickConfirmAddressCancel.bind(n), n.clickConfirmAddress = n.clickConfirmAddress.bind(n), n.renderDialog = n.renderDialog.bind(n), n.clickCancel = n.clickCancel.bind(n), n.clickConfirm = n.clickConfirm.bind(n), n.confirmDialogConfig = {
                        title: "请确认您的收货地址",
                        desc: [],
                        confirm: "确认",
                        cancel: "取消"
                    }, n.waterFulldialogConfig = {
                        title: "水壶已经满了",
                        desc: "水壶还能装下不到10g ，确定领取吗？",
                        confirm: "确定",
                        cancel: "去浇水"
                    }, n.openGroupData = {
                        address_id: "",
                        goods_id: "",
                        sku_id: "",
                        group_id: ""
                    }, n.selectedProvinceId = "", n
                }

                return w()(t, e), g()(t, [{
                    key: "componentDidMount", value: function () {
                        var e = this;
                        this.init(), this.leaveSceneStopJs(), window.onload = function () {
                            e.performanceCmt()
                        }, this.prepareShareInfo(), T.a.on(x.a.MAINSTAGE_LOADED, function (t) {
                            t && (e.checkCompleteMission(), e.setState({MAIN_STAGE_LOADED: !0}))
                        }), "undefined" != typeof window && n("nHhc"), L.b.isNativePlatform() && $t.a.registerSceneNotification({
                            onSceneReturn: function () {
                                T.a.emit(x.a.MAIN_STAGE_UPDATE_SCENE), "1" === (localStorage.getItem("getWater") || "0") && (T.a.emit(x.a.MAIN_STAGR_OPEN_MISSIONLIST), localStorage.setItem("getWater", "0"))
                            }
                        }), T.a.on(x.a.MAINSTAGE_OPEN_FRIENDLIST, function () {
                            e.setState({friendVisible: !0})
                        }), T.a.on(x.a.MAINSTAGE_OPEN_DYNAMICNEWS, function () {
                            e.setState({dynamicVisible: !0, dynamicBubbleVisible: !1})
                        }), T.a.on(x.a.SHOW_DYNAMIC_BUBBLE, function (t) {
                            e.setState({dynamicBubbleVisible: !0, dynamicBubbleTrend: t}), setTimeout(function () {
                                e.setState({dynamicBubbleVisible: !1})
                            }, 5e3)
                        }), T.a.on(x.a.MAINSTAGE_GOTO_GARDEN, function (t, n, i, a) {
                            a && "clickBackHome" === a && e.setState({friendVisible: !1})
                        }), T.a.on(x.a.MAINSTAGE_GETWATER_TAP, function () {
                            e.setState({missionVisible: !0, shareMaskVisible: !1}), de.a.trackingRecord({
                                op: "impr",
                                page_el_sn: "97917"
                            })
                        }), T.a.on(x.a.MAINSTAGE_NEW_PLAYER, function () {
                            e.setState({showNewPLayerMask: !0})
                        }), T.a.on(x.a.COMMON_POPUP_MAIN_BUTTON_TAP, function (t, n) {
                            e.shareMissionType = t, "deinsectization" === t || "weeding" === t || "mature" === t ? e.showShareMask(t, null, null, n) : "hydropenia" === t ? (T.a.emit(x.a.COMMON_POPUP_CLOSE_BUTTON_TAP), e.showMissionMask()) : (e.shareMissionType = 6, 2 === n && (e.updateToGain = !0), e.updateToGain ? G.a.ins.getRiskControlInfoAsync().then(function (t) {
                                On.gainWater(6, 1, t).then(function (t) {
                                    R.a.waterAmount = t.water_amount, R.a.missionList = t.mission_list, T.a.emit(x.a.CHANGE_UPDATE_BUTTON_STATUS, !0), D.default.showToast("已成功领取水滴,快去浇水吧~"), e.updateToGain = !1
                                })
                            }) : e.showShareMask(e.shareMissionType, null, null, n))
                        }), T.a.on(x.a.DELIVERY_ADDRESS_MAIN_BUTTON_TAP, function () {
                            e.setAddressSelector()
                        }), T.a.on(x.a.DELIVERY_SUCCESS_LOGISTICS_INFO_TAP, function (t) {
                            "exangeCoupons" === t ? M.a.forward("coupons.html") : M.a.forward("order.html?order_sn=" + e.orderSn)
                        }), T.a.on(x.a.DELIVERY_SUCCESS_MAIN_BUTTON_TAP, function () {
                            M.a.reload("cartoon_fruiter.html")
                        }), T.a.on(x.a.MAINSTAGE_WATER_ALMOST_FULL, function (t) {
                            e.confirmGainWater = t, e.setState({showWaterFullDialog: !0})
                        }), T.a.on(x.a.MAINSTAGE_MISSION_LIST, function () {
                            var e = R.a.missionList, t = !1;
                            if (!e) return !0;
                            for (var n = 0; n < W.k.length; n++) e[W.k[n]] && e[W.k[n]].is_draw && (t = !0);
                            T.a.emit(x.a.MAINSTAGE_GET_WATER_RED_POINT, t), Object(W.b)(e[1], function (e) {
                                return T.a.emit(x.a.SHOW_SHARE_BADGE, e)
                            })
                        }), T.a.on(x.a.SHOW_SHARE_MASK, function (t, n, i, a, o, r) {
                            e.showShareMask(t, n, i, a, o)
                        }), T.a.on(x.a.DELIVERY_SUCCESS_STAGE_SHOW, function (t, n) {
                            n && (e.order_sn = n)
                        }), T.a.on(x.a.MAIN_STAGR_OPEN_MISSIONLIST, function () {
                            e.setState({missionVisible: !0})
                        }), T.a.on(x.a.FRUITER_GET_LUCKY_WATER_INFO, function (t) {
                            e.setState({luckyWaterId: t})
                        }), "1" === (localStorage.getItem("getWater") || "0") && (T.a.emit(x.a.MAIN_STAGR_OPEN_MISSIONLIST), localStorage.setItem("getWater", "0"))
                    }
                }, {
                    key: "init", value: function () {
                        var e = this;
                        if (L.b.isNativePlatform() && $e.a.setupNativeShareButton(), L.b.isQQPlatform()) return D.default.showToast("该活动仅支持微信用户参与"), void setTimeout(function () {
                            M.a.home()
                        }, 3e3);
                        T.a.on(x.a.MAINSTAGE_LOADED, function (t) {
                            t && l.a.all([On.getUserInfo(), On.getUserGrade()]).then(function (t) {
                                var n = t[0] || {}, i = t[1], a = n.isSubscribed,
                                    o = (n.fcQRCodeImg, n.fcQRCodeImgQQ, (L.b.isQQPlatform() || L.b.isWeChatPlatform()) && !a && [In.BanList, In.Eco].indexOf(i) < 0),
                                    r = [In.BanList, In.Eco].indexOf(i) < 0;
                                e.setState({
                                    showFCPopup: o,
                                    userInfo: n,
                                    showShareArrow: r
                                }), T.a.emit(x.a.SECOND_LOAD_IMG), e.setState({SECOND_LOAD_IMG: !0})
                            }).catch(function () {
                                e.setState({SECOND_LOAD_IMG: !0})
                            })
                        })
                    }
                }, {
                    key: "performanceCmt", value: function () {
                        var e = {id: 3}, t = function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            t.webViewLocalCache && (8 === t.webViewCacheHittedCount ? e.id = 8 : 0 === t.webViewCacheHittedCount ? e.id = 7 : e.id = 4), C.init(e)
                        };
                        if (L.b.isNativePlatform()) {
                            var n = L.b.getAppVersion();
                            $t.a.compareVersion(n, "4.14.0") > 0 ? Nt.a.callNative("WebScene", "getTiming", {}, t, t) : t()
                        } else t()
                    }
                }, {
                    key: "leaveSceneStopJs", value: function () {
                        if (L.b.Current === L.b.Android) {
                            var e = L.b.getAppVersion();
                            $t.a.compareVersion(e, "4.19.0") >= 0 && Nt.a.callNative("JSUIControl", "allowWebViewPause", {allowPause: !0})
                        }
                    }
                }, {
                    key: "prepareShareInfo", value: function () {
                        var e = kt.a.constant.ShareChannel, t = this.shareCallback, n = this.shareMissionType,
                            i = (this.shareText, {
                                title: this.shareText && this.shareText.title || "【送你一个果园】自己亲手种水果，包邮送到家",
                                message: this.shareText && this.shareText.message || "浇树种水果，包邮送回家。点击前往>>",
                                thumbnailURL: Pn,
                                shareURL: Dn ? "cartoon_fruit_lucky_water.html?red_envelope_id=" + this.state.luckyWaterId : "cartoon_fruiter.html?mission_type=" + n,
                                waterMark: kt.a.constant.WaterMark.NoLogo,
                                onlyWeChat: !0,
                                appMessageShareSuccess: function () {
                                    t(e.AppMessage, !0)
                                },
                                appMessageShareCancel: function () {
                                    t(e.AppMessage, "cancel")
                                },
                                timelineShareSuccess: function () {
                                    t(e.Timeline, !0)
                                },
                                timelineShareCancel: function () {
                                    t(e.Timeline, "cancel")
                                },
                                qqShareSuccess: function () {
                                    t(e.QQ, !0)
                                },
                                qqShareCancel: function () {
                                    t(e.QQ, "cancel")
                                },
                                qqZoneShareSuccess: function () {
                                    t(e.QQZone, !0)
                                },
                                qqZoneShareCancel: function () {
                                    t(e.QQZone, "cancel")
                                }
                            });
                        $e.a.prepareShare(i), L.b.isNativePlatform() && $t.a.setupPullReload(!0)
                    }
                }, {
                    key: "checkCompleteMission", value: function () {
                        var e = lt.a.getSelfUID() || 0, t = j.a.getParameter("refer_share_uid") || "";
                        if ("" + e !== t) {
                            var n = j.a.getParameter("mission_type") || "";
                            parseInt(e, 10) % 100 < 10 || (t && "1" === n || "5" === n) && On.recordShareRealtion(Number(t), n, e)
                        }
                    }
                }, {
                    key: "shareCallback", value: function (e, t) {
                        var n = this;
                        Mt.a.hide();
                        this.state.missionVisible;
                        var i = this.shareMissionType;
                        "cancel" !== t && ("mature" === i ? T.a.emit(x.a.DELIVERY_ADDRESS_STAGE_SHOW, i) : "weeding" === i || "deinsectization" === i ? T.a.emit(x.a.REMOVE_RANDOM_EVENT_SHARE_BACK, i) : 6 === i ? (T.a.emit(x.a.CHANGE_UPDATE_BUTTON_STATUS), this.updateToGain = !0) : 8 === i ? T.a.emit(x.a.GET_TOMORROW_GAIN) : "number" == typeof i || 14 === i ? "function" == typeof this.changeFn && this.changeFn() : 19 === i || "helpWaterNotReward" === i ? "function" == typeof this.changeFn && this.changeFn() : "sendLuckyWater" === i ? (D.default.showToast("发送红包成功"), "function" == typeof this.changeFn && this.changeFn()) : i || On.completeMission(1).then(function (e) {
                            R.a.waterAmount = e.water_amount, R.a.missionList = e.mission_list;
                            var t = n.state.playerInfo;
                            a()({}, t, e)
                        })), this.setState({shareMaskVisible: !1}), this.shareMissionType = null, this.shareText = null, this.changeFn = null, Dn = !1, Pn = Object(F.b)("shareThumbnailV4"), this.prepareShareInfo()
                    }
                }, {
                    key: "showShareMask", value: function (e, t, n, i, a, o) {
                        var r = this, s = k.i[R.a.product.type];
                        if (e && (this.shareMissionType = e), o ? this.subMissionType = o : this.subMissionTye = null, i && (this.shareText = xe.a[i], this.shareText.title = this.shareText.title.replace("{ftruitName}", s)), 1 === e && R.a && R.a.product && R.a.product.product_number) {
                            var l = R.a.product.product_number;
                            l > 0 && l < 100 ? "【果林盟主】邀你一起来种树拿水果" : l > 100 && l < 1e4 ? "【天选之人】邀你一起来种树拿水果" : l > 1e4 && l < 1e5 ? "【种树达人】邀你一起来种树拿水果" : l > 1e5 && l < 1e6 ? "" : l > 1e6 && ""
                        }
                        14 === e ? (Pn = Object(F.b)("noonNightShare"), 1 === o ? this.shareText = {
                            title: "【限时福袋】送你1箱水果，浇浇水就包邮送到家",
                            message: "每天14:00-16:00可领取5-50g水滴福袋"
                        } : 2 === o ? this.shareText = {
                            title: "【限时福袋】送你1箱水果，浇浇水就包邮送到家",
                            message: "每天20:00-22:00可领取5-50g水滴福袋"
                        } : 3 === o && (this.shareText = {
                            title: "【天选之人】福袋居然开出了50g水滴",
                            message: "多多果园，种树免费得水果"
                        })) : 4 === e || 5 === e ? (Pn = Object(F.b)("shareThumbnailV4"), this.shareText = {
                            title: "【送你5棵果树】每天浇浇水，水果就包邮送到家",
                            message: "当前已累计送出800万+份水果"
                        }) : 19 === e || "helpWaterNotReward" === e ? (Pn = Object(F.b)("shareThumbnailV4"), this.shareText = {
                            title: a + "，我帮你的小树浇了水，快回来看看吧",
                            message: "多多果园，种树免费得水果"
                        }) : "sendLuckyWater" === e && (Pn = Object(F.b)("luckyWaterShareIcon"), this.shareText = {
                            title: a + "给大家发一个100g水滴红包，快来抢吧~",
                            message: "多多果园，种树免费得水果，包邮送到家"
                        }, Dn = !0), t && (this.changeFn = t), n && (this.shareMissionType = null, this.changeFn = null, this.shareText = null), this.setState(function (t) {
                            return r.prepareShareInfo(), {
                                shareMaskVisible: !t.shareMaskVisible,
                                missionType: e,
                                shareTarget: a
                            }
                        })
                    }
                }, {
                    key: "showFriendList", value: function () {
                        this.setState(function (e) {
                            return {friendVisible: !e.friendVisible}
                        })
                    }
                }, {
                    key: "showDynamic", value: function () {
                        this.setState(function (e) {
                            return {dynamicVisible: !e.dynamicVisible}
                        })
                    }
                }, {
                    key: "showMissionMask", value: function () {
                        this.setState(function (e) {
                            return {missionVisible: !e.missionVisible}
                        })
                    }
                }, {
                    key: "showEditAddress", value: function () {
                        this.setState(function (e) {
                            return {isAddressSelectorShow: !e.isAddressSelectorShow, showEditAddress: !e.showEditAddress}
                        })
                    }
                }, {
                    key: "setAddressSelector", value: function () {
                        this.setState(function (e) {
                            return {isAddressSelectorShow: !e.isAddressSelectorShow}
                        })
                    }
                }, {
                    key: "clickCancel", value: function () {
                        this.setState(function (e) {
                            return {showWaterFullDialog: !e.showWaterFullDialog}
                        })
                    }
                }, {
                    key: "clickConfirm", value: function () {
                        "function" == typeof this.confirmGainWater && this.confirmGainWater(), this.setState(function (e) {
                            return {showWaterFullDialog: !e.showWaterFullDialog}
                        })
                    }
                }, {
                    key: "renderDialog", value: function () {
                        var e = this.waterFulldialogConfig;
                        return this.state.showWaterFullDialog ? r.a.createElement("div", {className: "full-water-bg"}, r.a.createElement("div", {id: "confirm-default-v3"}, r.a.createElement("div", {className: "content-wrapper"}, r.a.createElement("img", {
                            src: Mn,
                            className: "full-water-image"
                        }), r.a.createElement("div", {
                            className: "detail",
                            id: "confirm-default-v3-detail"
                        }, r.a.createElement("p", {className: "title"}, e.title), r.a.createElement("p", {className: "desc"}, e.desc)), r.a.createElement("div", {className: "buttons buttons-confirm"}, r.a.createElement("div", {
                            className: "button can-btn",
                            onClick: this.clickConfirm
                        }, e.confirm), r.a.createElement("div", {
                            className: "button cir-btn",
                            onClick: this.clickCancel
                        }, e.cancel))))) : null
                    }
                }, {
                    key: "showConfirmAddress", value: function (e) {
                        e && (this.confirmDialogConfig.desc = [e.name + "，" + e.mobile + "，" + e.province + e.city + e.district + e.address]), this.openGroupData.address_id = parseInt(e.address_id, 10), this.selectedProvinceId = e.province_id, this.setState(function (e) {
                            return {showConfirmDialog: !e.showConfirmDialog}
                        })
                    }
                }, {
                    key: "closeEditAddress", value: function () {
                        this.setState(function (e) {
                            return {showEditAddress: !e.showEditAddress}
                        })
                    }
                }, {
                    key: "confirmNewAddress", value: function () {
                        this.setState(function (e) {
                            return {showEditAddress: !e.showEditAddress, isAddressSelectorShow: !e.isAddressSelectorShow}
                        }), D.default.enableScroll()
                    }
                }, {
                    key: "renderConfirmDialog", value: function () {
                        var e = this.confirmDialogConfig;
                        return this.state.showConfirmDialog ? r.a.createElement(xt, {
                            title: e.title,
                            desc: e.desc,
                            confirm: e.confirm || "确认",
                            cancel: e.cancel || "取消",
                            clickCancel: this.clickConfirmAddressCancel,
                            clickConfirm: this.clickConfirmAddress
                        }) : null
                    }
                }, {
                    key: "clickConfirmAddressCancel", value: function () {
                        this.openGroupData.address_id = "", this.selectedProvinceId = "", this.setState(function (e) {
                            return {showConfirmDialog: !e.showConfirmDialog}
                        })
                    }
                }, {
                    key: "clickConfirmAddress", value: function (e) {
                        var t = this, n = this.openGroupData.address_id;
                        On.createOrder(n).then(function (e) {
                            e.result && e.order_sn ? (t.orderSn = e.order_sn, T.a.emit(x.a.DELIVERY_SUCCESS_STAGE_SHOW, "fruit")) : e.delivery ? e.goods_info_list && T.a.emit(x.a.ADDRESS_EXANGE_GOODS_POPUP, e, n) : D.default.showConfirm2({
                                onConfirm: function (t) {
                                    T.a.emit(x.a.ADDRESS_REMOTE_EXANGE_COUPONS, e, n)
                                },
                                onCancel: function (e) {
                                    T.a.emit(x.a.DELIVERY_ADDRESS_MAIN_BUTTON_TAP)
                                },
                                title: "当前选择的地址不支持发货",
                                text: t.confirmDialogConfig.desc[0],
                                confirmButtonLabel: "兑换成优惠券",
                                cancelButtonLabel: "重新选择地址"
                            })
                        }), this.setState(function (e) {
                            return {
                                showConfirmDialog: !e.showConfirmDialog,
                                isAddressSelectorShow: !e.isAddressSelectorShow
                            }
                        })
                    }
                }, {
                    key: "enterGarden", value: function () {
                        this.setState({showNewPLayerMask: !1}), de.a.trackingRecord({
                            op: "click",
                            page_el_sn: "97607"
                        }), T.a.emit(x.a.NEWPLYER_ENTER)
                    }
                }, {
                    key: "render", value: function () {
                        var e = this.state;
                        return r.a.createElement("div", {id: "fruiter-main-container"}, r.a.createElement(ut, null), r.a.createElement("div", {
                            id: "fruiter-main",
                            className: "mobile-container"
                        }), r.a.createElement(re, {
                            showDynamic: this.showDynamic,
                            dynamicVisible: e.dynamicVisible
                        }), r.a.createElement(ce, {
                            dynamicBubbleVisible: e.dynamicBubbleVisible,
                            trend: e.dynamicBubbleTrend
                        }), r.a.createElement(pe, null), r.a.createElement(De, null), r.a.createElement(Fe, {showShareMask: this.showShareMask}), r.a.createElement(He, null), r.a.createElement(Ve, null), r.a.createElement(qe, null), r.a.createElement(ze, null), r.a.createElement(Qe, null), r.a.createElement(Ke.a, null), r.a.createElement(En, {
                            luckyWaterId: this.state.luckyWaterId,
                            showShareMask: this.showShareMask
                        }), r.a.createElement(ft, {
                            awardWater: this.state.missionOneAwardWater,
                            isShow: this.state.isShowMissionAdPopup,
                            toggleMissionAdPopup: this.toggleMissionAdPopup
                        }), r.a.createElement(tt, {
                            showMissionMask: this.showMissionMask,
                            showShareMask: this.showShareMask
                        }), r.a.createElement(yt, null), Object(gn.a)(lt.a.getSelfUID()) ? r.a.createElement(fn, {showShareMask: this.showShareMask}) : null, r.a.createElement(te, {
                            showMissionMask: this.showMissionMask,
                            showShareMask: this.showShareMask,
                            missionVisible: e.missionVisible,
                            secondLoadImg: e.SECOND_LOAD_IMG,
                            toggleMissionAdPopup: this.toggleMissionAdPopup
                        }), e.shareMaskVisible && r.a.createElement(me.a, {
                            showShareArrow: e.showShareArrow,
                            missionType: e.missionType,
                            subMissionType: this.subMissionType,
                            showShareMask: this.showShareMask,
                            shareTarget: e.shareTarget
                        }), e.showFCPopup && r.a.createElement(Ce, {fcQRCodeImg: L.b.isQQPlatform() ? e.userInfo.fcQRCodeImgQQ : e.userInfo.fcQRCodeImg}), e.isAddressSelectorShow && r.a.createElement(Zt, {
                            onAdd: this.showEditAddress,
                            onClose: this.setAddressSelector,
                            onSelect: this.showConfirmAddress
                        }), e.showEditAddress && r.a.createElement(qt, {
                            onClose: this.closeEditAddress,
                            title: "添加新收货地址",
                            onConfirm: this.confirmNewAddress
                        }), e.showNewPLayerMask && r.a.createElement(Ae, {onEnterGarden: this.enterGarden.bind(this)}), this.renderDialog(), this.renderConfirmDialog(), e.MAIN_STAGE_LOADED ? r.a.createElement(E, null) : null, r.a.createElement(ot, {showShareMask: this.showShareMask}), r.a.createElement(an, null), r.a.createElement(Sn, null), r.a.createElement(kn, null))
                    }
                }]), t
            }(_.a), Ln = n("u1/V"), Rn = n("tfYw"), Bn = n.n(Rn), Wn = n("Hxbd"), Gn = (n("r4fA"), n("UAMo")),
            Fn = function (e) {
                function t(e) {
                    h()(this, t);
                    var n = y()(this, (t.__proto__ || p()(t)).call(this, e));
                    return n.name = "PlayerInfoModel", n.uid = e.uid, n.accessToken = e.accessToken || "", n
                }

                return w()(t, e), g()(t, [{
                    key: "dealPath", value: function () {
                        Bn()(t.prototype.__proto__ || p()(t.prototype), "dealPath", this).call(this), this.path = "api/manor/tree/get"
                    }
                }, {
                    key: "dealHeaders", value: function () {
                        Bn()(t.prototype.__proto__ || p()(t.prototype), "dealHeaders", this).call(this), this.headers.AccessToken = this.accessToken
                    }
                }, {
                    key: "dealParams", value: function () {
                        Bn()(t.prototype.__proto__ || p()(t.prototype), "dealParams", this).call(this)
                    }
                }, {
                    key: "getPlayerInfo", value: function () {
                        var e = this;
                        return new l.a(function (t, n) {
                            e.post().then(function () {
                                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {failMsg: "获取游戏信息失败"};
                                t(e.processData(n))
                            }, function (e) {
                                if ("needLogin" === e) return n(e);
                                var i = void 0;
                                e && e.error.error_code && (i = e.error.error_code);
                                var a = i && Gn.a[i] ? Gn.a[i] : "获取游戏信息失败";
                                i && 10006 === i && t({}), i && 10046 === i && t("forbid_multi_user"), t(i && 10044 === i ? "server busy" : {failMsg: a})
                            })
                        })
                    }
                }, {
                    key: "processData", value: function (e) {
                        return e
                    }
                }]), t
            }(Wn.a), Un = function (e) {
                function t(e) {
                    h()(this, t);
                    var n = y()(this, (t.__proto__ || p()(t)).call(this, e));
                    return n.name = "CouponsModel", n.uid = e.uid, n.accessToken = e.accessToken || "", n
                }

                return w()(t, e), g()(t, [{
                    key: "dealPath", value: function () {
                        Bn()(t.prototype.__proto__ || p()(t.prototype), "dealPath", this).call(this), this.path = "api/lisbon/query_usable_duo_duo_orchard_coupon"
                    }
                }, {
                    key: "dealHeaders", value: function () {
                        Bn()(t.prototype.__proto__ || p()(t.prototype), "dealHeaders", this).call(this), this.headers.AccessToken = this.accessToken
                    }
                }, {
                    key: "getCouponsModel", value: function () {
                        var e = this;
                        return new l.a(function (t, n) {
                            e.get().then(function () {
                                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                t(e.processData(n))
                            }, function (e) {
                                if ("needLogin" === e) return n(e);
                                t([])
                            })
                        })
                    }
                }, {
                    key: "processData", value: function (e) {
                        return e
                    }
                }]), t
            }(Wn.a), Hn = function (e) {
                function t(e) {
                    h()(this, t);
                    var n = y()(this, (t.__proto__ || p()(t)).call(this, e));
                    return n.name = "RecordShareRealtionModel", n.uid = e.uid, n.shareUid = e.shareUid || "", n.missionType = e.missionType || "", n.accessToken = e.accessToken || "", n
                }

                return w()(t, e), g()(t, [{
                    key: "dealPath", value: function () {
                        Bn()(t.prototype.__proto__ || p()(t.prototype), "dealPath", this).call(this), this.path = "api/manor/share/mark"
                    }
                }, {
                    key: "dealHeaders", value: function () {
                        Bn()(t.prototype.__proto__ || p()(t.prototype), "dealHeaders", this).call(this), this.headers.AccessToken = this.accessToken
                    }
                }, {
                    key: "dealParams", value: function () {
                        Bn()(t.prototype.__proto__ || p()(t.prototype), "dealParams", this).call(this), this.params = lt.a.extend(this.params, {
                            share_uid: this.shareUid,
                            mission_type: this.missionType
                        })
                    }
                }, {
                    key: "getResult", value: function () {
                        var e = this;
                        return new l.a(function (t, n) {
                            e.post().then(function () {
                                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                t(e.processData(n))
                            }, function (e) {
                                if ("needLogin" === e) return n(e);
                                t({error: e})
                            })
                        })
                    }
                }, {
                    key: "processData", value: function (e) {
                        return e
                    }
                }]), t
            }(Wn.a), Vn = Object(Ln.a)({
                view: jn, fetchData: function (e) {
                    var t = e.requestContext;
                    return t.fetchAccessToken().then(function (e) {
                        var n = t.queries, i = (t.hostname, t.userAgent, t.cookies), a = t.__req, o = t.__res,
                            r = i.pdd_user_id, s = n.refer_share_uid, c = n.mission_type;
                        i && i.webp;
                        var d = {req: a, res: o, uid: r, shareUid: s, missionType: 4, accessToken: e};
                        return function () {
                            var e = new Fn(d), t = new Un(d), n = new Hn(d), i = [e.getPlayerInfo(), t.getCouponsModel()],
                                a = parseInt(r, 10) % 100;
                            return s && a < 10 ? i.push(n.getResult(d)) : s && "4" === c && "" + r !== s && i.push(n.getResult(d)), l.a.all(i).catch(function () {
                                return [{failMsg: "获取游戏信息失败"}]
                            })
                        }()
                    }, function () {
                        return l.a.reject({handled: !0, errorCode: "needLogin"})
                    })
                }
            }), qn = n("TxqL"), Xn = n("i8i4"), zn = document.getElementById("main");
        de.a.addMiddleware([function (e) {
            return a()({}, e, {page_sn: "10269"})
        }]), $e.a.prepare({
            requireLogin: !0,
            shareInfo: {noDefaultShare: !0, forceShareToWeChatTimeline: !1, shareToWeChatTimelineInAppDisabled: !0}
        }, function () {
            Xn.hydrate(r.a.createElement(qn.a, null, r.a.createElement(Vn, {data: window.rawData})), zn)
        })
    }, Btvt: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/es6.object.to-string.js")
    }, DVgA: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_object-keys.js")
    }, Dr8A: function (e, t, n) {
    }, EemH: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_object-gopd.js")
    }, FJW5: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_object-dps.js")
    }, H6hf: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_iter-call.js")
    }, HhZJ: function (e, t, n) {
    }, "I8a+": function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_classof.js")
    }, Iw71: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_dom-create.js")
    }, "J+6e": function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/core.get-iterator-method.js")
    }, JQlP: function (e, t, n) {
    }, Jp1d: function (e, t, n) {
    }, K0xU: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_wks.js")
    }, K59h: function (e, t, n) {
    }, KroJ: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_redefine.js")
    }, Kuth: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_object-create.js")
    }, LNDp: function (e, t, n) {
    }, LQAc: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_library.js")
    }, LZWt: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_cof.js")
    }, M6Qj: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_is-array-iter.js")
    }, MDMN: function (e, t, n) {
    }, MgzW: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/object-assign/index.js")
    }, Mukb: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_hide.js")
    }, O0qa: function (e, t, n) {
    }, O4Gu: function (e, t, n) {
    }, OP3Y: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_object-gpo.js")
    }, Pv0I: function (e, t, n) {
    }, QaDb: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_iter-create.js")
    }, "RH/P": function (e, t, n) {
    }, RYi7: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_to-integer.js")
    }, "RjD/": function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_property-desc.js")
    }, "S/j/": function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_to-object.js")
    }, SlkY: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_for-of.js")
    }, SotW: function (e, t, n) {
    }, T39b: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/es6.set.js")
    }, TSYQ: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/classnames/index.js")
    }, UNS8: function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return v
        });
        var i, a, o = n("SEkw"), r = n.n(o), s = n("JO7F"), l = n.n(s), c = n("iCc5"), d = n.n(c), u = n("V7oC"),
            p = n.n(u), m = n("2vnA");

        function h(e, t, n, i, a) {
            var o = {};
            return Object.keys(i).forEach(function (e) {
                o[e] = i[e]
            }), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = n.slice().reverse().reduce(function (n, i) {
                return i(e, t, n) || n
            }, o), a && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(a) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(e, t, o), o = null), o
        }

        var f = [{
            bubbleId: 11004,
            icon: "health_icon_4",
            popupImg: "health_img_4",
            iconTextColor: 9306112,
            popupFgColor: "#F03232",
            popupBgColor: "#A70008",
            popupPointColor: "deep-red"
        }, {
            bubbleId: 11003,
            icon: "health_icon_3",
            popupImg: "health_img_3",
            iconTextColor: 9315840,
            popupFgColor: "#E25C32",
            popupBgColor: "#AC3009",
            popupPointColor: "red"
        }, {
            bubbleId: 11002,
            icon: "health_icon_2",
            popupImg: "health_img_2",
            iconTextColor: 9588736,
            popupFgColor: "#EBA600",
            popupBgColor: "#AB7900",
            popupPointColor: "orange"
        }, {
            bubbleId: 11001,
            icon: "health_icon_1",
            popupImg: "health_img_1",
            iconTextColor: 5079061,
            popupFgColor: "#7ED321",
            popupBgColor: "#6EB620",
            popupPointColor: "green"
        }], g = [25, 50, 75, 101], v = function (e) {
            for (var t = 0; t < g.length; t++) if (e < g[t]) return f[t];
            return f[0]
        }, y = new (i = function () {
            function e() {
                var t = this;
                d()(this, e), function (e, t, n, i) {
                    n && r()(e, t, {
                        enumerable: n.enumerable,
                        configurable: n.configurable,
                        writable: n.writable,
                        value: n.initializer ? n.initializer.call(i) : void 0
                    })
                }(this, "health", a, this), this.getHealthBubbleId = function () {
                    return t.healthData.bubbleId
                }
            }

            return p()(e, [{
                key: "healthData", get: function () {
                    return v(this.health)
                }
            }]), e
        }(), a = h(i.prototype, "health", [m.k], {
            enumerable: !0,
            initializer: null
        }), h(i.prototype, "healthData", [m.d], l()(i.prototype, "healthData"), i.prototype), i);
        t.a = y
    }, UqcF: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_object-pie.js")
    }, VH5b: function (e, t, n) {
    }, VTer: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_shared.js")
    }, XKFU: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_export.js")
    }, XMVh: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_iter-detect.js")
    }, Xbzi: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_inherit-if-required.js")
    }, XfO3: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/es6.string.iterator.js")
    }, Xqgh: function (e, t) {
        e.exports = react_vendor_library
    }, Ymqv: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_iobject.js")
    }, Z6vF: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_meta.js")
    }, aCFj: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_to-iobject.js")
    }, aagx: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_has.js")
    }, apmT: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_to-primitive.js")
    }, "cb/7": function (e, t, n) {
    }, "d/Gc": function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_to-absolute-index.js")
    }, dyZX: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_global.js")
    }, e9kv: function (e, t, n) {
    }, eeVq: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_fails.js")
    }, elZq: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_set-species.js")
    }, fhzG: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/create-react-class/index.js")
    }, fyDq: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_set-to-string-tag.js")
    }, g2EY: function (e, t, n) {
        "use strict";
        t.a = function (e) {
            return !0
        }
    }, g3g5: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_core.js")
    }, glqi: function (e, t, n) {
    }, hPIQ: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_iterators.js")
    }, hswa: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_object-dp.js")
    }, i5dc: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_set-proto.js")
    }, i8i4: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/react-dom/index.js")
    }, ksS8: function (e, t, n) {
    }, m0Pp: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_ctx.js")
    }, nAeS: function (e, t, n) {
    }, nGyu: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_add-to-unscopables.js")
    }, nHhc: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("kSzJ"), a = n("XEX6"), o = n("4d7F"), r = n.n(o), s = n("GQeE"), l = n.n(s), c = n("QbLZ"),
            d = n.n(c), u = n("P2sY"), p = n.n(u), m = n("sk9p"), h = n.n(m), f = n("UdPh"), g = (n("Z1RV"), n("Fcpp")),
            v = n("s5u9"), y = n("IgcI"), b = n("ct/d"), w = n("tWR7"), _ = n("xnWZ"), E = n("ouH+"), S = n("X7B7"),
            C = n("8UZH"), T = n("ykYb"), A = {
                bigTree: new i.Polygon(0, -727, 320, -535, 83, -203, 192, 0, -173, 0, -60, -203, -320, -356, -116, -727),
                bud: new i.Polygon(-133, -360, 133, -360, 133, 0, -133, 0),
                youngTree: new i.Polygon(-78, -239, 79, -239, 78, 0, -78, 0)
            }, x = n("DW1F"), k = n("3uCO"), N = n("aDSW"), O = function (e, t) {
                return new r.a(function (n, i) {
                    Object(k.apiStealWater)(e, t).then(function (e) {
                        n("抓贼啦,有人偷了我水壶里的水滴")
                    }).catch(function (e) {
                        e.message && i(e.message)
                    })
                })
            }, I = function (e) {
                return new r.a(function (t, n) {
                    Object(k.completeMission)(7, null, e).then(function (e) {
                        e.reward_amount ? t({
                            type: "thanksForVisitAndGain",
                            rewardAmount: e.reward_amount
                        }) : t({type: "thanksForVisit"})
                    }).catch(function (e) {
                    })
                })
            }, P = 0, M = Object(a.debounce)(2e3, function () {
                Object(k.apiMinusCD)(P).then(function (e) {
                    if (e.success) return P = 0, !0
                }).catch(function (e) {
                    return P = 0, !1
                })
            }), D = function (e) {
                return P += 1, e -= 1, M(), e
            }, j = n("9yEv"), L = n("m1cH"), R = n.n(L), B = function (e, t, n, a) {
                var o = new i.Graphics;
                return t && o.lineStyle.apply(o, R()(t)), o.beginFill(e), o.drawRoundedRect.apply(o, R()(n).concat([a])), o.endFill(), o
            }, W = function (e, t, n, a) {
                if (n < a) throw Error("width less then height");
                var o = n - a, r = a / 2, s = new i.Graphics;
                return t && s.lineStyle.apply(s, R()(t)), s.beginFill(e), s.moveTo(r, 0), s.lineTo(o + r, 0), s.arc(o + r, r, r, -Math.PI / 2, Math.PI / 2), s.lineTo(r, a), s.arc(r, r, r, Math.PI / 2, -Math.PI / 2), s.endFill(), s
            }, G = function (e) {
                var t = new i.Graphics;
                return t.lineStyle.apply(t, R()(e.lineStyle)), t.beginFill.apply(t, R()(e.fillColor)), t.drawCircle(e.x, e.y, e.radius), t.endFill(), t
            }, F = function (e, t) {
                var n, i = e.graphicsData, a = l()(t), o = a.length, r = void 0, s = void 0, c = void 0, d = void 0;
                for (s = 0; s < o; s++) e[c = a[s]] = t[c];
                for (r = 0, n = i.length; r < n; r++) for (d = i[r], s = 0; s < o; s++) d[c = a[s]] = t[c];
                e.dirty++, e.clearDirty++
            }, U = function (e, t, n, o, r, s, l, c, d, u) {
                var p = void 0, m = void 0, f = void 0;

                function g(e) {
                    return "health" === d ? (p = "wateringHealthBubbleBg", m = "wateringHealthBubbleArrow", f = "single") : (e && e.length > 0 ? (p = "textBgWithBtn", f = "double") : (p = "textBgWithoutBtn", f = "single"), m = e && e.length > 0 ? "textArrowWithBtn" : "textArrowWithoutBtn", e && e.length > 0 ? (s = 30, l = 20, r = 20) : (s = 20, l = 14, r = 20)), [p, m]
                }

                var v = g(c), y = h()(v, 2);
                p = y[0], m = y[1], r = r || 16, s = s || 11, l = l || 11;
                var b = a.singleLoader.createSprite(p);
                b.anchor.y = 1;
                var w = new i.Container;
                w.name = "bubbleText";
                var _ = a.singleLoader.createSprite(m);
                u = u ? new i.TextStyle(u) : new i.TextStyle({
                    fontSize: o,
                    lineHeight: 36,
                    align: "center",
                    fill: 872202,
                    wordWrap: !0,
                    wordWrapWidth: 1e3,
                    breakWords: !0,
                    fontWeight: 500
                }), n || (n = "");
                var E = new i.Text(n, u);
                E.anchor.x = .5, E.anchor.y = 1, w.x = e, w.y = t, b.anchor.x = .5, b.x = 0, _.anchor.x = .5, _.x = 0;
                var S = void 0, C = void 0, T = 16;

                function A() {
                    var e = E.height + s + l + (S ? S.height + T : 0), n = E.width + 2 * r;
                    b.width = n, b.height = e, E.y = t - l - (S ? S.height + T : 0), b.y = t, S && (S.y = E.y + T, C.y = S.y + .5 * (S.height - C.height) - 2), "single" === f ? _.y = b.y - 5 : "double" === f && (_.y = b.y - 8)
                }

                A(), w.addChild(b, _, E), w.setText = function (e) {
                    if (E) {
                        e.text && (E.text = e.text), this.removeChild(b), this.removeChild(_), S && (this.removeChild(S), this.removeChild(C)), function (e) {
                            if (!(e.btn && e.btn.length > 0 && e.btn[0])) return S = null, void(C = null);
                            var t = e.btnImg || "textBtn";
                            (S = a.singleLoader.createSprite(t)).anchor.x = .5, (C = new i.Text(e.btn[0], new i.TextStyle({
                                fontSize: 28,
                                align: "center",
                                fill: 16777215,
                                wordWrap: !0,
                                wordWrapWidth: 1e3,
                                breakWords: !0,
                                stroke: 16777215,
                                strokeThickness: 1
                            }))).anchor.x = .5, C.cacheAsBitmap = !0, S.interactive = !0, S.on("tap", e.btnFunc)
                        }(e);
                        var t = g(e.btn), n = h()(t, 2);
                        p = n[0], m = n[1], b.texture = i.Texture.fromFrame(p), _.texture = i.Texture.fromFrame(m), this.addChildAt(b, 0), this.addChildAt(_, 1), A(), S && (this.addChild(S), this.addChild(C))
                    }
                }, w.changeTextOnly = function (e) {
                    E.text = e
                }, w.hide = function () {
                    Object(a.showSprite)(w, !1, 2e3)
                };
                var x = void 0, k = void 0;
                return w.show = function () {
                    x && x.stop(), k && k.stop(), A(), w.visible = !0;
                    var e = b.width, t = b.height;
                    k = Object(a.tweenUtil)(w, 0, e, "width", 500, "Quadratic", "InOut"), x = Object(a.tweenUtil)(w, 0, t, "height", 500, "Quadratic", "InOut")
                }, w
            }, H = [{
                id: 1001,
                type: "clickTree",
                text: "拼多多~拼多多~我和你~拼多多~\n拼多多~拼多多~拼的多~省的多~",
                priority: 2,
                btn: [],
                level: [1, 2],
                auto: !0
            }, {
                id: 1024,
                type: "clickTree",
                text: "通过下方的领水滴按钮可以查看任务,\n完成任务即可获得大量水滴",
                priority: 2,
                btn: ["领水滴"],
                level: [1, 2],
                auto: !0
            }, {
                id: 1025,
                type: "clickTree",
                text: "分享领水任务是性价比最高的任务,\n轻轻一分享,10g水滴就到手啦",
                priority: 2,
                btn: [],
                level: [1, 2],
                auto: !0
            }, {
                id: 1027,
                type: "clickTree",
                text: "每天拼单成功之后,都可以获得一次\n20g水滴的奖励,记得要来领取噢",
                priority: 2,
                btn: [],
                level: [1, 2],
                auto: !0
            }, {
                id: 1028,
                type: "clickTree",
                text: "每次浇水我都要一段时间来吸收,\n吸水期间不能再浇水噢~",
                priority: 2,
                btn: [],
                level: [1, 2],
                auto: !0
            }, {
                id: 1029,
                type: "clickTree",
                text: "随着成长我吸收水滴的时间会有所变化,\n这么可爱的我值得你的等待~",
                priority: 2,
                btn: [],
                level: [1, 2],
                auto: !0
            }, {
                id: 1030,
                type: "clickTree",
                text: "无聊的时候,就戳戳我吧,让我\n陪你说说话逗你开心呀!",
                priority: 2,
                btn: [],
                level: [1, 2],
                auto: !0
            }, {
                id: 1031,
                type: "clickTree",
                text: "再给我浇浇水,马上就可以长成树苗啦",
                priority: 2,
                btn: [],
                level: [1],
                auto: !0
            }, {
                id: 1032,
                type: "clickTree",
                text: "我还在发芽阶段,要多给我浇水噢,\n这样我才能尽快长成树苗",
                priority: 2,
                btn: [],
                level: [1],
                auto: !0
            }, {id: 1033, type: "clickTree", text: "我很快就会变成一棵大果树啦!", priority: 2, btn: [], level: [2], auto: !0}, {
                id: 1034,
                type: "clickTree",
                text: "哎呀,马上就要开花啦,也还有点小激动呢!",
                priority: 2,
                btn: [],
                level: [3],
                auto: !0
            }, {id: 1035, type: "clickTree", text: "花都开啦,结果也不会远了吧~", priority: 2, btn: [], level: [4], auto: !0}, {
                id: 1036,
                type: "clickTree",
                text: "果子就快要成熟啦~",
                priority: 2,
                btn: [],
                level: [5],
                auto: !0
            }, {
                id: 1037,
                type: "clickTree",
                text: "果实成熟之后,就可以包邮寄回家啦.",
                priority: 2,
                btn: [],
                level: [5],
                auto: !0
            }, {
                id: 1038,
                type: "clickTree",
                text: "马上就可以寄到你身边啦,心里还有点小激动呢",
                priority: 2,
                btn: [],
                level: [5],
                auto: !0
            }, {
                id: 1039,
                type: "clickTree",
                text: "种植一颗果树需要经历【发芽】,【幼苗】,\n【成树】,【开花】,【结果】才能成熟",
                priority: 2,
                btn: [],
                level: [1, 2],
                auto: !0
            }, {
                id: 1901,
                type: "clickTree",
                text: "再长大一点,我就会变得更聪明噢",
                priority: 2,
                btn: [],
                level: [1, 2],
                auto: !0
            }, {
                id: 1902,
                type: "clickTree",
                text: "再长大一点,我就会学会一项新技能噢",
                priority: 2,
                btn: [],
                level: [1, 2],
                auto: !0
            }, {
                id: 1903,
                type: "clickTree",
                text: "每当我进入一个新的阶段\n我都会学会一项新技能噢",
                priority: 2,
                btn: [],
                level: [1, 2, 3, 4, 5],
                auto: !0
            }, {
                id: 1904,
                type: "clickTree",
                text: "给我浇水可以让我升级\n每次升级我都会变得更好玩",
                priority: 2,
                btn: [],
                level: [1, 2, 3, 4, 5],
                auto: !0
            }, {
                id: 1905,
                type: "clickTree",
                text: "我有很多好玩的事情想告诉你",
                priority: 2,
                btn: [],
                level: [1, 2, 3, 4, 5],
                auto: !0
            }, {
                id: 1906,
                type: "clickTree",
                text: "风车好像可以越转越快噢",
                priority: 2,
                btn: [],
                level: [1, 2, 3, 4, 5],
                auto: !0
            }, {
                id: 1907,
                type: "clickTree",
                text: "你有没有看到过云后面的彩虹呀",
                priority: 2,
                btn: [],
                level: [1, 2, 3, 4, 5],
                auto: !0
            }, {
                id: 1908,
                type: "clickTree",
                text: "下面的黄色草垛,好像经常有小蜜蜂飞出来诶",
                priority: 2,
                btn: [],
                level: [1, 2, 3, 4, 5],
                auto: !0
            }, {
                id: 1909,
                type: "clickTree",
                text: "地上的野花,你要不要采呀",
                priority: 2,
                btn: [],
                level: [1, 2, 3, 4, 5],
                auto: !0
            }, {id: 1910, type: "clickTree", text: "快点击收获带我回家吧", priority: 2, btn: [], level: [6], auto: !0}, {
                id: 1911,
                type: "clickTree",
                text: "终于可以见到你啦",
                priority: 2,
                btn: [],
                level: [6],
                auto: !0
            }, {
                id: 1912,
                type: "clickTree",
                text: "点击动态按钮可以查看果树的成长信息\n还有好友和你的互动信息",
                priority: 2,
                btn: [],
                level: [1, 2, 3],
                auto: !0
            }, {
                id: 1913,
                type: "clickTree",
                text: "点击好友按钮可以进入好友的果园\n拜访好友还可以偷好友的水滴噢",
                priority: 2,
                btn: [],
                level: [1, 2, 3],
                auto: !0
            }, {
                id: 1914,
                type: "clickTree",
                text: "点击好友按钮可以进入好友的果园\n拜访好友还可以偷好友的水滴噢",
                priority: 2,
                btn: [],
                level: [1, 2, 3],
                auto: !0
            }, {
                id: 1915,
                type: "clickTree",
                text: "点击动态按钮可以查看果树的成长信息\n还有好友和你的互动信息",
                priority: 2,
                btn: [],
                level: [1, 2, 3],
                auto: !0
            }, {
                id: 1040,
                type: "clickTree",
                text: "我掐指一算!你命里缺我",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                auto: !0
            }, {
                id: 1041,
                type: "clickTree",
                text: "别的小果树都长得又高又大的,\n我什么时候才能长大呢",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                auto: !0
            }, {
                id: 1042,
                type: "clickTree",
                text: "别戳啦,别戳啦,我怕痒的.",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                auto: !0
            }, {
                id: 1043,
                type: "clickTree",
                text: "你怎么那么无聊啊,一直调戏一棵树.",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                auto: !0
            }, {
                id: 1044,
                type: "clickTree",
                text: "别戳啦别戳啦,今天的任务做完了嘛,\n今天的水都浇完了没!",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                auto: !0
            }, {
                id: 1045,
                type: "clickTree",
                text: "先浇水,再戳我,浇一次,才能戳一下.行不行啊？",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                auto: !0
            }, {
                id: 1046,
                type: "clickTree",
                text: "我这么可爱,是不是应该给我买一个可爱多吃呀？",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                auto: !0
            }, {
                id: 1047,
                type: "clickTree",
                text: "随着成长我吸收水滴的时间会有所变化,\n美好的我值得你的等待~",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                auto: !0
            }, {
                id: 1048,
                type: "clickTree",
                text: "一直说话不会累的嘛,我想喝点水再说!",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                auto: !0
            }, {
                id: 1049,
                type: "clickTree",
                text: "承蒙你出现,够我喜欢你很久~",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                auto: !0
            }, {
                id: 1050,
                type: "clickTree",
                text: "还要见什么世面呀,见见你就好~",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                auto: !0
            }, {
                id: 1051,
                type: "clickTree",
                text: "一想到昨天的我也喜欢你~今天的我也吃醋了呢",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                auto: !0
            }, {
                id: 1052,
                type: "clickTree",
                text: "拼多多~拼多多~拼的多~省的多~",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                auto: !0
            }, {
                id: 1053,
                type: "clickTree",
                text: "随着成长我吸收水滴的时间会有所变化,\n美好的我值得你的等待~",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                auto: !0
            }, {
                id: 1054,
                type: "clickTree",
                text: "我觉得你照顾我是为了害我!\n害得我好喜欢你呀!",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                auto: !0
            }, {
                id: 1055,
                type: "clickTree",
                text: "再给我浇浇水,我就可以从发芽长成到幼苗啦",
                priority: 2,
                btn: [],
                level: [1],
                auto: !0
            }, {
                id: 1056,
                type: "clickTree",
                text: "谢谢你让我破土而出.初次见面,请多关照.",
                priority: 2,
                btn: [],
                level: [1],
                auto: !0
            }, {
                id: 1057,
                type: "clickTree",
                text: "好渴啊~一个正在萌芽的我需要水滴的浇灌~~",
                priority: 2,
                btn: [],
                level: [1],
                auto: !0
            }, {
                id: 1058,
                type: "clickTree",
                text: "我的梦想是从小树苗长成一棵大树,\n你的梦想是什么呀？",
                priority: 2,
                btn: [],
                level: [2],
                auto: !0
            }, {id: 1059, type: "clickTree", text: "我马上就快要开花啦", priority: 2, btn: [], level: [3], auto: !0}, {
                id: 1060,
                type: "clickTree",
                text: "不知道周围有没有小蜜蜂呀",
                priority: 2,
                btn: [],
                level: [4],
                auto: !0
            }, {
                id: 1061,
                type: "clickTree",
                text: "不要着急,我的果子现在还不能吃噢",
                priority: 2,
                btn: [],
                level: [5],
                auto: !0
            }, {
                id: 1062,
                type: "clickTree",
                text: "我让自己那么那么喜欢你,\n就是让你不忍心和我分离",
                priority: 2,
                btn: [],
                level: [5],
                auto: !0
            }, {
                id: 1063,
                type: "clickTree",
                text: "我是不是你最疼爱的树,\n你为什么不和我说话",
                priority: 2,
                btn: [],
                level: [5],
                auto: !0
            }, {
                id: 1064,
                type: "clickTree",
                text: "如果喜欢我,你就戳戳我!\n如果爱我,你就给我浇浇水呀",
                priority: 2,
                btn: [],
                level: [5],
                auto: !0
            }, {
                id: 1072,
                type: "clickTree",
                text: "唯有美食与爱,还有我不可辜负",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                auto: !0
            }, {
                id: 1073,
                type: "clickTree",
                text: "孤独的人都要吃饱饭,孤独的果树都需要浇灌",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                auto: !0
            }, {
                id: 1074,
                type: "clickTree",
                text: "好好吃饭,用心生活,比什么都幸福\n对啦,还有喝水!",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                auto: !0
            }, {
                id: 1075,
                type: "clickTree",
                text: "好春光不如梦一场,梦里青草香.",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1076,
                type: "clickTree",
                text: "如果灰姑娘的玻璃鞋是完美合脚,\n为何跑步还会掉鞋子",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                auto: !0
            }, {
                id: 1077,
                type: "clickTree",
                text: "如果月光是源自太阳的阳光,\n为何它无法杀死吸血鬼",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                auto: !0
            }, {
                id: 1078,
                type: "clickTree",
                text: "没有事是绝对的,但这句话\n不是已经是绝对的了吗？",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                auto: !0
            }, {
                id: 1079,
                type: "clickTree",
                text: "如果凡事都有可能,\n那有没有可能有的事是不可能的",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                auto: !0
            }, {
                id: 1080,
                type: "clickTree",
                text: "如果下一句话是假的,\n那上一句就是真的？",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                auto: !0
            }, {
                id: 1081,
                type: "clickTree",
                text: "花儿最理解的阳光和雨露的爱,\n寒流和风霜的恨",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                auto: !0
            }, {
                id: 1082,
                type: "clickTree",
                text: "等待收获的人只能得到凋零的枯枝败叶",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                auto: !0
            }, {
                id: 1083,
                type: "clickTree",
                text: "等待,不是因为那个人会回来,\n是因为还有爱",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                auto: !0
            }, {
                id: 1093,
                type: "clickTree",
                text: "每棵大树,都曾只是一粒种子",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                auto: !0
            }, {
                id: 1094,
                type: "clickTree",
                text: "我不想只存在你的手机里,\n我想存在你的心里",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                auto: !0
            }, {
                id: 1095,
                type: "clickTree",
                text: "你知道的我不是一棵真的果树,\n但是我真的可以给你水果",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                auto: !0
            }, {
                id: 1096,
                type: "clickTree",
                text: "别人的果树都长大了,你什么时候给我浇水啊？？",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                auto: !0
            }, {
                id: 1097,
                type: "clickTree",
                text: "给我浇水的你也要多喝水呀",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                auto: !0
            }, {
                id: 1022,
                type: "clickTree",
                text: "【你知道吗】经常食用煮好的熟梨,\n能增加口中的津液,保养嗓子",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1084,
                type: "clickTree",
                text: "【你知道吗】草莓是唯一一种种子\n长在表皮外面的水果.平均\n一颗草莓上有200个种子",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1085,
                type: "clickTree",
                text: "【你知道吗】挤压柠檬前先加热,\n便可以挤出更多汁液,",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1086,
                type: "clickTree",
                text: "【你知道吗】猕猴桃、苹果、石榴、梨\n存放时间较久,适合在网上购买",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1087,
                type: "clickTree",
                text: "【你知道吗】芒果的最佳保存温度是在\n10℃~13℃,只要低于8度,果皮就会变黑,",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1088,
                type: "clickTree",
                text: "【你知道吗】没削皮的菠萝在温度\n11℃~13℃时一般可以放一个月,放进冰箱反而容易变质,",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1089,
                type: "clickTree",
                text: "【你知道吗】香蕉保存8℃~23℃时最合适\n高温容易过熟变黑,但低于5℃容易冻伤发黑",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1090,
                type: "clickTree",
                text: "【你知道吗】冷藏西瓜时用保鲜膜\n将整个西瓜全部包起来,才能起到保鲜作用,",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1091,
                type: "clickTree",
                text: "【你知道吗】甜果不适宜冷藏,\n存放在干燥的房间即可,25℃最好,",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1092,
                type: "clickTree",
                text: "【你知道吗】木瓜不能放入冰箱保存,\n置于阴凉避光处即可",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1098,
                type: "clickTree",
                text: "【你知道吗】杨桃能减少对脂肪的吸收\n有降低血脂、胆固醇的作用,",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1099,
                type: "clickTree",
                text: "【你知道吗】杨桃果汁中含有大量酸\n能提高胃液的酸度,促进食物的消化",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1100,
                type: "clickTree",
                text: "【你知道吗】杨桃含有大量维生素B、C等,可消除\n咽喉炎症及口腔溃疡,防治风火牙痛",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1101,
                type: "clickTree",
                text: "【你知道吗】杨桃性寒,凡脾胃虚寒或\n有腹泻的人宜少食",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1065,
                type: "clickTree",
                text: "【你知道吗】空气中60％以上的氧气\n来自陆地上的树木和绿色植物.",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1066,
                type: "clickTree",
                text: "【你知道吗】橘子含有丰富的膳食纤维,\n可以促进肠道蠕动,加快消化食物.",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1067,
                type: "clickTree",
                text: "【你知道吗】橘子含有丰富的维生素C,它\n可以阻碍我们体内黑色素的生成,让你年轻漂亮.",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1068,
                type: "clickTree",
                text: "【你知道吗】橘子乃酸性,可以\n让我们更有食欲,促进体内新陈代谢.",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1069,
                type: "clickTree",
                text: "【你知道吗】橘子可以减少体内的胆固醇\n从而降低高血压,冠心病\n患病风险.",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1070,
                type: "clickTree",
                text: "【你知道吗】橘瓤上的网状经络叫橘络,\n有通络化痰,顺气活血的功效.",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1071,
                type: "clickTree",
                text: "【你知道吗】橘子中的“诺米灵”可以分解\n人体内的致癌物质,抑制癌细胞的生长.",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1002,
                type: "clickTree",
                text: "【你知道吗】2017年拼多多帮助卖出\n【183万吨】农货,\n可以装下【3万节】火车皮",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1003,
                type: "clickTree",
                text: "【你知道吗】苹果可以减低胆固醇,起到降血压\n降血脂的作用,对于中老年人很有好处",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1004,
                type: "clickTree",
                text: "【你知道吗】苹果中的苹果酸可以起到\n降低血脂,软化脂肪的作用,对于减肥很有用处",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1005,
                type: "clickTree",
                text: "【你知道吗】吃苹果富含铁元素,针对\n缺铁性贫血有较好的防治作用.",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1007,
                type: "clickTree",
                text: "【你知道吗】苹果富含叶酸,\n是维生素B的主要成分,有助于预防心脏病",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1009,
                type: "clickTree",
                text: "【你知道吗】苹果为高纤维,低热量食品\n有助于减肥",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1010,
                type: "clickTree",
                text: "【你知道吗】苹果富含的黄酮类化合物\n有助于防止癌症的发生",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1011,
                type: "clickTree",
                text: "【你知道吗】苹果中富含镁,\n镁可以使皮肤红润光泽,有弹性.",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1012,
                type: "clickTree",
                text: "【你知道吗】苹果可以提高记忆力,\n儿童和青少年应该多吃苹果",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1013,
                type: "clickTree",
                text: "【你知道吗】苹果中含有的磷和铁元素\n有补脑养血,宁神安眠作用",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1014,
                type: "clickTree",
                text: "【你知道吗】吃苹果可以预防痉挛.",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1015,
                type: "clickTree",
                text: "【你知道吗】成年人每周至少吃3个苹果\n患哮喘病的几率就会降低30%.",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1016,
                type: "clickTree",
                text: "【你知道吗】梨所含的配糖体及鞣酸等成分,\n能祛痰止咳,对咽喉有养护作用",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1017,
                type: "clickTree",
                text: "【你知道吗】梨有较多糖类物质和多种\n维生素增进食欲,对肝脏具有保护作用",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1018,
                type: "clickTree",
                text: "【你知道吗】梨性凉并能清热镇静,常食能\n使血压恢复正常,改善头晕目眩等症状;",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1019,
                type: "clickTree",
                text: "【你知道吗】梨能防止动脉粥样硬化,\n抑制致癌物质亚硝胺的形成,从而防癌抗癌;",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1020,
                type: "clickTree",
                text: "【你知道吗】梨中的果胶含量很高,\n有助于消化,通便.",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 1021,
                type: "clickTree",
                text: "【你知道吗】脾胃虚弱的人不宜吃生梨,\n可把梨切块煮水食用",
                priority: 2,
                btn: [],
                level: [4, 5, 6],
                auto: !0
            }, {
                id: 2062,
                type: "clickTree",
                text: "【考考你】粉脸红唇模样美, \n偏偏是个大歪嘴.（打一水果）",
                priority: 2,
                btn: [],
                level: [5],
                nextMessage: 2063,
                auto: !0
            }, {id: 2063, type: "", text: "【谜底】:桃子,你答对了吗？", priority: 2, btn: [], level: [3, 4, 5]}, {
                id: 2064,
                type: "clickTree",
                text: "【考考你】草地上来了一只羊.\n（打一水果）",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                nextMessage: 2065,
                auto: !0
            }, {id: 2065, type: "", text: "【谜底】:草莓（草没）,你答对了吗？", priority: 2, btn: [], level: [3, 4, 5]}, {
                id: 2066,
                type: "clickTree",
                text: "【考考你】看看圆,摸摸麻,\n包着一肚小月牙.（打一水果）",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                nextMessage: 2067,
                auto: !0
            }, {id: 2067, type: "", text: "【谜底】:橘子,你答对了吗？", priority: 2, btn: [], level: [3, 4, 5]}, {
                id: 2068,
                type: "clickTree",
                text: "【考考你】身穿绿衣裳,肚里水汪汪,\n生的子儿多,个个黑脸膛.（打一水果）",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                nextMessage: 2069,
                auto: !0
            }, {id: 2069, type: "", text: "【谜底】:西瓜,你答对了吗？", priority: 2, btn: [], level: [3, 4, 5]}, {
                id: 2070,
                type: "clickTree",
                text: "【考考你】千姊妹,万姊妹,\n同床睡,各盖被.（打一水果）",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                nextMessage: 2071,
                auto: !0
            }, {id: 2071, type: "", text: "【谜底】:石榴,你答对了吗？", priority: 2, btn: [], level: [3, 4, 5]}, {
                id: 2072,
                type: "clickTree",
                text: "【考考你】无事献殷勤,非________?",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                nextMessage: 2073,
                auto: !0
            }, {id: 2073, type: "", text: "非...非常喜欢你~", priority: 2, btn: [], level: [3, 4, 5]}, {
                id: 2074,
                type: "clickTree",
                text: "【考考你】会当凌绝顶,一________?",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                nextMessage: 2075,
                auto: !0
            }, {id: 2075, type: "", text: "一….一把抱住你~", priority: 2, btn: [], level: [3, 4, 5]}, {
                id: 2076,
                type: "clickTree",
                text: "【考考你】苦海无涯,回________?",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                nextMessage: 2077,
                auto: !0
            }, {id: 2077, type: "", text: "回...回头是我呀~", priority: 2, btn: [], level: [3, 4, 5]}, {
                id: 2078,
                type: "clickTree",
                text: "我有一个超能力噢哦,你猜猜是什么",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                nextMessage: 2079,
                auto: !0
            }, {id: 2079, type: "", text: "超喜欢你!", priority: 2, btn: [], level: [3, 4, 5]}, {
                id: 2080,
                type: "clickTree",
                text: "【考考你】什么水果视力最差?",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                nextMessage: 2081,
                auto: !0
            }, {id: 2081, type: "", text: "【谜底】:芒(盲)果,你答对了嘛", priority: 2, btn: [], level: [3, 4, 5]}, {
                id: 2082,
                type: "clickTree",
                text: "【考考你】一只羊在喝水,\n突然来了一只狼(打一水果)",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                nextMessage: 2083,
                auto: !0
            }, {id: 2083, type: "", text: "【谜底】:杨(羊)梅,你答对了嘛", priority: 2, btn: [], level: [3, 4, 5]}, {
                id: 2084,
                type: "clickTree",
                text: "【考考你】红果子,麻点子,\n咬一口,甜丝丝.(打一水果)",
                priority: 2,
                btn: [],
                level: [3, 4, 5],
                nextMessage: 2085,
                auto: !0
            }, {id: 2085, type: "", text: "【谜底】:草莓,你答对了嘛", priority: 2, btn: [], level: [3, 4, 5]}, {
                id: 2086,
                type: "clickTree",
                text: '【猜歌名】"有些故事还没讲完那就算了吧\n那些心情在岁月中已经难辨真假"',
                priority: 2,
                btn: [],
                level: [5],
                nextMessage: 2087,
                auto: !0
            }, {id: 2087, type: "", text: "——朴树《那些花儿》", priority: 2, btn: [], level: [5]}, {
                id: 2088,
                type: "clickTree",
                text: '【猜歌名】"给我你的心作纪念,\n我的梦有你的祝福才能够完全."',
                priority: 2,
                btn: [],
                level: [5],
                nextMessage: 2089,
                auto: !0
            }, {id: 2089, type: "", text: "——可米小子《青春纪念册》", priority: 2, btn: [], level: [5]}, {
                id: 2090,
                type: "clickTree",
                text: '【猜歌名】"谁娶了多愁善感的你,\n谁看了你的日记"',
                priority: 2,
                btn: [],
                level: [5],
                nextMessage: 2091,
                auto: !0
            }, {id: 2091, type: "", text: "——老狼《同桌的你》", priority: 2, btn: [], level: [5]}, {
                id: 2092,
                type: "clickTree",
                text: '【猜歌名】"最美的不是下雨天,\n是曾与你躲过雨的屋檐."',
                priority: 2,
                btn: [],
                level: [5],
                nextMessage: 2093,
                auto: !0
            }, {id: 2093, type: "", text: "——周杰伦《不能说的秘密》", priority: 2, btn: [], level: [5]}, {
                id: 2094,
                type: "clickTree",
                text: '【猜歌名】"让我们红尘作伴活得潇潇洒洒,\n策马奔腾共享人世繁华"',
                priority: 2,
                btn: [],
                level: [5],
                nextMessage: 2095,
                auto: !0
            }, {id: 2095, type: "", text: "——动力火车《当》", priority: 2, btn: [], level: [5]}, {
                id: 2096,
                type: "clickTree",
                text: '【猜歌名】"如果过去还值得眷恋,\n别太快冰释前嫌,"',
                priority: 2,
                btn: [],
                level: [5],
                nextMessage: 2097,
                auto: !0
            }, {id: 2097, type: "", text: "——王菲《匆匆那年》", priority: 2, btn: [], level: [5]}, {
                id: 2098,
                type: "clickTree",
                text: '【猜歌名】"也许放弃,才能靠近你,\n不再见你你才能把我记起"',
                priority: 2,
                btn: [],
                level: [5],
                nextMessage: 2099,
                auto: !0
            }, {id: 2099, type: "", text: "――莫文蔚《盛夏的果实》", priority: 2, btn: [], level: [5]}, {
                id: 2100,
                type: "clickTree",
                text: '【猜歌名】"我得到的都是侥幸啊,\n失去的都是人生."',
                priority: 2,
                btn: [],
                level: [5],
                nextMessage: 2101,
                auto: !0
            }, {id: 2101, type: "", text: "——张悬《关于我爱你》", priority: 2, btn: [], level: [5]}, {
                id: 2102,
                type: "clickTree",
                text: '【猜歌名】"有一种想见不敢见的伤痛,\n有一种爱还埋藏在我心中"',
                priority: 2,
                btn: [],
                level: [5],
                nextMessage: 2103,
                auto: !0
            }, {id: 2103, type: "", text: "——林忆莲《听说爱情回来过》", priority: 2, btn: [], level: [5]}, {
                id: 2104,
                type: "clickTree",
                text: '【猜歌名】"谁还记得,\n是谁先说,永远的爱我."',
                priority: 2,
                btn: [],
                level: [5],
                nextMessage: 2105,
                auto: !0
            }, {id: 2105, type: "", text: "——张惠妹《记得》", priority: 2, btn: [], level: [5]}, {
                id: 2106,
                type: "clickTree",
                text: '【猜歌名】"想念你的笑,\n想念你的外套"',
                priority: 2,
                btn: [],
                level: [5],
                nextMessage: 2107,
                auto: !0
            }, {id: 2107, type: "", text: "——辛晓琪《味道》", priority: 2, btn: [], level: [5]}, {
                id: 2108,
                type: "clickTree",
                text: '【猜歌名】"在漫天风沙里,\n望着你远去"',
                priority: 2,
                btn: [],
                level: [5],
                nextMessage: 2109,
                auto: !0
            }, {id: 2109, type: "", text: "——李宗盛《漂洋过海来看你》", priority: 2, btn: [], level: [5]}, {
                id: 2110,
                type: "clickTree",
                text: '【猜歌名】"闭起双眼你最挂念谁,\n眼睛张开身边竟是谁."',
                priority: 2,
                btn: [],
                level: [5],
                nextMessage: 2111,
                auto: !0
            }, {id: 2111, type: "", text: "——陈奕迅《人来人往》", priority: 2, btn: [], level: [5]}, {
                id: 2112,
                type: "clickTree",
                text: '【猜歌名】"多少人曾爱慕你年轻时的容颜,\n可是谁能承受岁月无情的变迁"',
                priority: 2,
                btn: [],
                level: [5],
                nextMessage: 2113,
                auto: !0
            }, {id: 2113, type: "", text: "——水木年华《一生有你》", priority: 2, btn: [], level: [5]}, {
                id: 2114,
                type: "clickTree",
                text: '【猜歌名】"雪白明月照在大地,\n藏著你最深处的秘密"',
                priority: 2,
                btn: [],
                level: [5],
                nextMessage: 2115,
                auto: !0
            }, {id: 2115, type: "", text: "——伍佰《挪威的森林》", priority: 2, btn: [], level: [5]}, {
                id: 2116,
                type: "clickTree",
                text: '【猜歌名】"不问你为何流眼泪,\n不在乎你心里还有谁."',
                priority: 2,
                btn: [],
                level: [5],
                nextMessage: 2117,
                auto: !0
            }, {id: 2117, type: "", text: "——张信哲《爱如潮水》", priority: 2, btn: [], level: [5]}, {
                id: 2118,
                type: "clickTree",
                text: '【猜歌名】"他说风雨中这点痛算什么."',
                priority: 2,
                btn: [],
                level: [5],
                nextMessage: 2119,
                auto: !0
            }, {id: 2119, type: "", text: "——郑智化《水手》", priority: 2, btn: [], level: [5]}, {
                id: 2120,
                type: "clickTree",
                text: '【猜歌名】"早知道伤心总是难免的,\n你又何苦一往情深."',
                priority: 2,
                btn: [],
                level: [5],
                nextMessage: 2121,
                auto: !0
            }, {id: 2121, type: "", text: "——陈淑桦《:梦醒时分 》", priority: 2, btn: [], level: [5]}, {
                id: 2122,
                type: "clickTree",
                text: '【猜歌名】"想到你想起我,\n胸口依然温柔."',
                priority: 2,
                btn: [],
                level: [5],
                nextMessage: 2123,
                auto: !0
            }, {id: 2123, type: "", text: "——张惠妹《如果你也听说》", priority: 2, btn: [], level: [5]}, {
                id: 2124,
                type: "clickTree",
                text: '【猜歌名】"从那遥远海边慢慢消失的你\n本来模糊的脸竟然渐渐清晰."',
                priority: 2,
                btn: [],
                level: [5],
                nextMessage: 2125,
                auto: !0
            }, {id: 2125, type: "", text: "——张雨生《大海》", priority: 2, btn: [], level: [5]}, {
                id: 2126,
                type: "clickTree",
                text: '【猜歌名】"曾经在幽幽暗暗反反复复中追问\n才知道平平淡淡从从容容是最真."',
                priority: 2,
                btn: [],
                level: [5],
                nextMessage: 2127,
                auto: !0
            }, {id: 2127, type: "", text: "——姜育恒《再回首》", priority: 2, btn: [], level: [5]}, {
                id: 2128,
                type: "clickTree",
                text: '【猜歌名】"听见你说,\n朝阳起又落晴雨难测."',
                priority: 2,
                btn: [],
                level: [5],
                nextMessage: 2129,
                auto: !0
            }, {id: 2129, type: "", text: "——伍佰《突然的自我》", priority: 2, btn: [], level: [5]}, {
                id: 2130,
                type: "clickTree",
                text: '【猜歌名】"我要送你日不落的想念,\n寄出代表爱的明信片."',
                priority: 2,
                btn: [],
                level: [5],
                nextMessage: 2131,
                auto: !0
            }, {id: 2131, type: "", text: "——蔡依林《日不落》", priority: 2, btn: [], level: [5]}, {
                id: 2132,
                type: "clickTree",
                text: '【猜歌名】"往事如风 痴心只是难懂,\n借酒相送 送不走身影蒙蒙."',
                priority: 2,
                btn: [],
                level: [5],
                nextMessage: 2133,
                auto: !0
            }, {id: 2133, type: "", text: "——邰正宵《九百九十九朵玫瑰》", priority: 2, btn: [], level: [5]}, {
                id: 2134,
                type: "clickTree",
                text: '【猜歌名】"池塘边的榕树上,知了在声声叫着夏天."',
                priority: 2,
                btn: [],
                level: [5],
                nextMessage: 2135,
                auto: !0
            }, {id: 2135, type: "", text: "——罗大佑《童年》", priority: 2, btn: [], level: [5]}, {
                id: 2136,
                type: "clickTree",
                text: '【猜歌名】"如果没有遇见你,\n我将会是在哪里."',
                priority: 2,
                btn: [],
                level: [5],
                nextMessage: 2137,
                auto: !0
            }, {id: 2137, type: "", text: "——邓丽君《我只在乎你》", priority: 2, btn: [], level: [5]}, {
                id: 2138,
                type: "clickTree",
                text: '【猜歌名】"我的世界开始下雪,\n冷得让我无法多爱一天."',
                priority: 2,
                btn: [],
                level: [5],
                nextMessage: 2139,
                auto: !0
            }, {id: 2139, type: "", text: "——张学友《吻别》", priority: 2, btn: [], level: [5]}, {
                id: 2140,
                type: "clickTree",
                text: '【猜歌名】"心 跳乱了节奏,\n梦也不自由."',
                priority: 2,
                btn: [],
                level: [5],
                nextMessage: 2141,
                auto: !0
            }, {id: 2141, type: "", text: "——林俊杰《一千年以后》", priority: 2, btn: [], level: [5]}, {
                id: 2142,
                type: "clickTree",
                text: '【猜歌名】"你是不是像我曾经茫然失措,\n一次一次徘徊在十字街头."',
                priority: 2,
                btn: [],
                level: [5],
                nextMessage: 2143,
                auto: !0
            }, {id: 2143, type: "", text: "——张雨生《我的未来不是梦》", priority: 2, btn: [], level: [5]}, {
                id: 2144,
                type: "clickTree",
                text: '【猜歌名】"轻轻的我将离开你,\n请将眼角的泪拭去."',
                priority: 2,
                btn: [],
                level: [5],
                nextMessage: 2145,
                auto: !0
            }, {id: 2145, type: "", text: "——齐秦《大约在冬季》", priority: 2, btn: [], level: [5]}, {
                id: 2146,
                type: "clickTree",
                text: '【猜歌名】"昨天所有的荣誉,\n已变成遥远的回忆."',
                priority: 2,
                btn: [],
                level: [5],
                nextMessage: 2147,
                auto: !0
            }, {id: 2147, type: "", text: "——刘欢《从头再来》", priority: 2, btn: [], level: [5]}, {
                id: 2148,
                type: "clickTree",
                text: '【猜歌名】"命运就算颠沛流离,\n命运就算曲折离奇."',
                priority: 2,
                btn: [],
                level: [5],
                nextMessage: 2149,
                auto: !0
            }, {id: 2149, type: "", text: "——李克勤《红日》", priority: 2, btn: [], level: [5]}, {
                id: 2150,
                type: "clickTree",
                text: '【猜歌名】"栀子花白花瓣,\n落在我蓝色百褶裙上."',
                priority: 2,
                btn: [],
                level: [5],
                nextMessage: 2151,
                auto: !0
            }, {id: 2151, type: "", text: "——刘若英《后来》", priority: 2, btn: [], level: [5]}, {
                id: 2152,
                type: "clickTree",
                text: '【猜歌名】"雨一直下 气氛不算融洽,\n在同个屋檐下 你渐渐感到心在变化."',
                priority: 2,
                btn: [],
                level: [5],
                nextMessage: 2153,
                auto: !0
            }, {id: 2153, type: "", text: "——张宇《雨一直下》", priority: 2, btn: [], level: [5]}, {
                id: 2154,
                type: "clickTree",
                text: '【猜歌名】"你对我说离开就会解脱,\n试着自已去生活."',
                priority: 2,
                btn: [],
                level: [5],
                nextMessage: 2155,
                auto: !0
            }, {id: 2155, type: "", text: "——赵传《爱要怎么说出口》", priority: 2, btn: [], level: [5]}, {
                id: 2156,
                type: "clickTree",
                text: "今天的领水滴任务做完了吗？",
                priority: 2,
                btn: ["领水滴"],
                level: [1, 2, 3, 4, 5]
            }, {
                id: 3090,
                type: "watering",
                text: "我正在用力的吸收水分!\n点点水泡可以加速噢",
                priority: 2,
                btn: [],
                level: [2, 3, 4, 5]
            }, {id: 3099, type: "watering", text: "浇水可以让我长大!\n再次点击浇水我就长成幼苗啦！", priority: 2, btn: [], level: [1]}, {
                id: 4097,
                type: "noCouldWatering",
                text: "倒计时结束才可以再次浇水!\n点点水泡可以加速噢",
                priority: 0,
                btn: [],
                level: [1, 2, 3, 4, 5]
            }, {
                id: 96,
                type: "showGrass",
                text: "杂草还在,你不能浇水,先替我\n拔草吧",
                priority: 2,
                btn: [],
                level: [1, 2, 3, 4, 5],
                stay: !0
            }, {
                id: 97,
                type: "showInsect",
                text: "害虫还在,你不能浇水,先替我\n消灭害虫吧",
                priority: 2,
                btn: [],
                level: [1, 2, 3, 4, 5],
                stay: !0
            }, {
                id: 98,
                type: "newPlayer",
                text: "浇水可以让我长大,\n果子成熟后就可以包邮寄回家啦！",
                priority: 6,
                btn: [],
                level: [1, 2, 3, 4, 5],
                stay: !0
            }, {
                id: 99,
                type: "couldWatering",
                text: "快给我浇浇水吧.我快要渴死啦 ",
                priority: 0,
                btn: [],
                level: [1, 2, 3, 4, 5],
                auto: !0
            }, {
                id: 5100,
                type: "couldWatering",
                text: "我的花快要枯萎啦,给我浇浇水吧",
                priority: 0,
                btn: [],
                level: [4],
                auto: !0
            }, {
                id: 5101,
                type: "couldWatering",
                text: "马上就长出果子啦,快来给我浇浇水吧",
                priority: 0,
                btn: [],
                level: [4],
                auto: !0
            }, {
                id: 5102,
                type: "couldWatering",
                text: "就要开花啦,快来给我浇浇水吧",
                priority: 0,
                btn: [],
                level: [3],
                auto: !0
            }, {
                id: 104,
                type: "couldWatering",
                text: "我这么可爱,你难道不想给我浇水嘛",
                priority: 0,
                btn: [],
                level: [1, 2, 3, 4, 5],
                auto: !0
            }, {
                id: 105,
                type: "afterRemoveRandom",
                text: "谢谢你的帮助,我现在感觉好多啦,\n快来给我浇水吧!",
                priority: 2,
                btn: [],
                level: [1, 2, 3, 4, 5]
            }, {
                id: 106,
                type: "shouldRemoveGrass",
                text: "杂草会抢走我的水滴噢,请先帮我拔除杂草吧",
                priority: 2,
                btn: [],
                level: [1, 2, 3, 4, 5]
            }, {
                id: 107,
                type: "shouldRemoveInsect",
                text: "我现在不能吸收水滴,请先帮我去除害虫吧",
                priority: 2,
                btn: [],
                level: [1, 2, 3, 4, 5]
            }, {id: 108, type: "cd", text: "你的操作太快啦, 我都跟不上了", priority: 1, btn: [], level: [1, 2, 3, 4, 5]}, {
                id: 6109,
                type: "init",
                text: "你终于回来啦,我很想你啊!",
                priority: 6,
                btn: [],
                level: [1, 2, 3, 4, 5],
                stay: !0
            }, {
                id: 6110,
                type: "init",
                text: "风里雨里,我在拼多多里等你噢",
                priority: 6,
                btn: [],
                level: [1, 2, 3, 4, 5],
                stay: !0
            }, {
                id: 6111,
                type: "init",
                text: "你怎么才来呀,哼!",
                priority: 6,
                btn: [],
                level: [1, 2, 3, 4, 5],
                stay: !0
            }, {
                id: 6112,
                type: "init",
                text: "你不在的时候,我就\n看看花,看看草,顺便,想想你.",
                priority: 6,
                btn: [],
                level: [1, 2, 3, 4, 5],
                stay: !0
            }, {
                id: 6114,
                type: "init",
                text: "谢谢你又来看我~",
                priority: 6,
                btn: [],
                level: [1, 2, 3, 4, 5],
                stay: !0
            }, {
                id: 6115,
                type: "init",
                text: "希望每一次从黑暗中醒来,\n你都能在我身边~",
                priority: 6,
                btn: [],
                level: [1, 2, 3, 4, 5],
                stay: !0
            }, {
                id: 6116,
                type: "init",
                text: "我喜欢你那么多,\n你能不能也喜欢我一点呀",
                priority: 6,
                btn: [],
                level: [1, 2, 3, 4, 5],
                stay: !0
            }, {
                id: 6117,
                type: "init",
                text: "我想说其实你很好,\n你知道不知道呀",
                priority: 6,
                btn: [],
                level: [1, 2, 3, 4, 5],
                stay: !0
            }, {
                id: 6118,
                type: "init",
                text: "号外号外,果园上新啦\n欢迎柠檬加入果园大家庭!",
                priority: 6,
                btn: [],
                level: [1, 2, 3, 4, 5],
                stay: !0,
                auto: !0
            }, {
                id: 8e3,
                type: "thanksForVisitAndGain",
                text: "谢谢你的每日拜访, 给我的水\n壶增加了${rewardAmount}g水滴",
                priority: 0,
                btn: [],
                level: [1, 2, 3, 4, 5],
                stay: !0
            }, {
                id: 8001,
                type: "thanksForVisit",
                text: "谢谢你今天来看我~\n我和我的主人都很高兴",
                priority: 0,
                btn: [],
                level: [1, 2, 3, 4, 5],
                stay: !0
            }, {
                id: 9e3,
                type: "tomorrowGain",
                text: "明天再来看我才可以领取50g水滴噢!\n要记得哦~",
                priority: 2,
                btn: [],
                level: [1, 2, 3, 4, 5],
                stay: !0
            }, {
                id: 9001,
                type: "todayGainFail",
                text: "领取失败",
                priority: 2,
                btn: [],
                level: [1, 2, 3, 4, 5],
                stay: !0
            }, {
                id: 1e4,
                type: "helpWater",
                text: "你没水了哦，去领水滴再来给我浇水吧！",
                priority: 0,
                btn: [],
                level: [1, 2, 3, 4, 5],
                stay: !1
            }, {
                id: 10001,
                type: "helpWater",
                text: "今天已经有很多朋友帮我浇过水了，已经\n足够了哦，谢谢你！",
                priority: 0,
                btn: [],
                level: [1, 2, 3, 4, 5],
                stay: !1
            }, {
                id: 11001,
                type: "health",
                text: "我现在很健康，趁现在持续浇水\n我可以长得更快噢！",
                priority: 0,
                btn: [],
                level: [4, 5],
                stay: !1
            }, {
                id: 11002,
                type: "health",
                text: "我现在的健康值是${param}，健康值\n越高我的浇水效果就越好噢！",
                priority: 0,
                btn: [],
                level: [4, 5],
                stay: !1
            }, {
                id: 11003,
                type: "health",
                text: "土壤缺乏营养，给我施肥让我\n恢复健康才能长得快！",
                priority: 0,
                btn: ["去施肥"],
                btnImg: "textBtn_red",
                level: [4, 5],
                stay: !1
            }, {
                id: 11004,
                type: "health",
                text: "我已经极度营养不良，很难吸收\n水分了，求求你给我施点肥料吧！",
                priority: 0,
                btn: ["去施肥"],
                btnImg: "textBtn_deep_red",
                level: [4, 5],
                stay: !1
            }], V = function (e, t, n, i) {
                var a = j.a.product ? j.a.product.level : null;
                t = t || "";
                var o = H.filter(function (t) {
                    return (!e || t.type === e) && (!(n && !t.auto) && (!(0 !== t.level && t.level.indexOf(a) < 0) && (!i || t.id === i)))
                });
                if (o) {
                    var r = Math.floor(Math.random() * o.length), s = p()({}, o[r]);
                    return s.text = s.text ? s.text.replace("${param}", t) : "", s.btn && s.btn.length > 0 && s.btn[0] && (s.btnFunc = function (e) {
                        var t = void 0;
                        switch (e) {
                            case"前往首页":
                                t = function () {
                                    b.a.home()
                                };
                                break;
                            case"领水滴任务":
                            case"领水滴":
                                t = function () {
                                    return v.a.emit(T.a.MAINSTAGE_GETWATER_TAP), this
                                };
                                break;
                            case"去施肥":
                                t = function () {
                                    return v.a.emit(T.a.OPEN_HEALTH_POPUP), this
                                };
                                break;
                            default:
                                t = function () {
                                }
                        }
                        return t
                    }(s.btn[0])), s
                }
                return null
            }, q = n("cSZr"), X = n("9Oxa"), z = {
                deinsectization: {
                    MASK_BG: {left: 0, top: 0, width: 5e3, height: 5e3, fillColor: 0, alpha: .9},
                    SHOW_AREA: {left: 375, top: 503},
                    SHOW_AREA_BG: {left: 96, top: 214, width: 560, height: 578, radius: 16, fillColor: 16777215, alpha: 1},
                    CLOSE_BUTTON: {
                        name: "commonPopupCloseButton",
                        left: 626,
                        top: 186,
                        eventName: "commonPopupCloseButtonTap"
                    },
                    TYPE_IMAGE: {name: "commonPopupDeinsectization", left: 282, top: 274},
                    MAIN_TEXT: {
                        content: "果树上有虫子了",
                        style: {
                            fontFamily: "PingFangSC-Medium",
                            fontSize: 36,
                            fill: 1381654,
                            align: "center",
                            lineHeight: 50
                        },
                        horizontalCenter: 375,
                        left: 249,
                        top: 502
                    },
                    SUB_TEXT: {
                        content: "快喊好友来帮你除虫",
                        style: {
                            fontFamily: "PingFangSC-Regular",
                            fontSize: 30,
                            fill: 10263708,
                            align: "center",
                            lineHeight: 44
                        },
                        horizontalCenter: 375,
                        left: 240,
                        top: 572
                    },
                    MAIN_BUTTON: {
                        left: 126,
                        top: 656,
                        width: 500,
                        height: 96,
                        radius: 10,
                        fillColor: 8637747,
                        alpha: 1,
                        eventName: "commonPopupMainButtonTap"
                    },
                    MAIN_BUTTON_TEXT: {
                        content: "喊好友除虫",
                        style: {
                            fontFamily: "PingFangSC-Medium",
                            fontSize: 36,
                            fill: 16777215,
                            align: "center",
                            lineHeight: 50
                        },
                        horizontalCenter: 375,
                        left: 275,
                        top: 680
                    }
                },
                weeding: {
                    MASK_BG: {left: 0, top: 0, width: 5e3, height: 5e3, fillColor: 0, alpha: .9},
                    SHOW_AREA: {left: 375, top: 503},
                    SHOW_AREA_BG: {left: 96, top: 214, width: 560, height: 578, radius: 16, fillColor: 16777215, alpha: 1},
                    CLOSE_BUTTON: {
                        name: "commonPopupCloseButton",
                        left: 626,
                        top: 186,
                        eventName: "commonPopupCloseButtonTap"
                    },
                    TYPE_IMAGE: {name: "commonPopupWeeding", left: 282, top: 274},
                    MAIN_TEXT: {
                        content: "果树旁长杂草了",
                        style: {
                            fontFamily: "PingFangSC-Medium",
                            fontSize: 36,
                            fill: 1381654,
                            align: "center",
                            lineHeight: 50
                        },
                        horizontalCenter: 375,
                        left: 249,
                        top: 502
                    },
                    SUB_TEXT: {
                        content: "快喊好友来帮你除草",
                        style: {
                            fontFamily: "PingFangSC-Regular",
                            fontSize: 30,
                            fill: 10263708,
                            align: "center",
                            lineHeight: 44
                        },
                        horizontalCenter: 375,
                        left: 240,
                        top: 572
                    },
                    MAIN_BUTTON: {
                        left: 126,
                        top: 656,
                        width: 500,
                        height: 96,
                        radius: 10,
                        fillColor: 8637747,
                        alpha: 1,
                        eventName: "commonPopupMainButtonTap"
                    },
                    MAIN_BUTTON_TEXT: {
                        content: "喊好友除草",
                        style: {
                            fontFamily: "PingFangSC-Medium",
                            fontSize: 36,
                            fill: 16777215,
                            align: "center",
                            lineHeight: 50
                        },
                        horizontalCenter: 375,
                        left: 275,
                        top: 680
                    }
                },
                mature: Object(X.b)("Mature"),
                hydropenia: {
                    MASK_BG: {left: 0, top: 0, width: 5e3, height: 5e3, fillColor: 0, alpha: .9},
                    SHOW_AREA: {left: 375, top: 523},
                    SHOW_AREA_BG: {left: 96, top: 214, width: 560, height: 618, radius: 16, fillColor: 16777215, alpha: 1},
                    CLOSE_BUTTON: {
                        name: "commonPopupCloseButton",
                        left: 626,
                        top: 186,
                        eventName: "commonPopupCloseButtonTap"
                    },
                    TYPE_IMAGE: {name: "commonPopupHydropenia", left: 282, top: 274},
                    MAIN_TEXT: {
                        content: "剩余的水滴不足",
                        style: {
                            fontFamily: "PingFangSC-Medium",
                            fontSize: 36,
                            fill: 1381654,
                            align: "center",
                            lineHeight: 50
                        },
                        horizontalCenter: 375,
                        left: 249,
                        top: 502
                    },
                    SUB_TEXT: {
                        content: "每次浇水需要10g水滴\n完成指定任务即可以领取水滴",
                        style: {
                            fontFamily: "PingFangSC-Regular",
                            fontSize: 30,
                            fill: 10263708,
                            align: "center",
                            lineHeight: 42
                        },
                        horizontalCenter: 375,
                        left: 180,
                        top: 572
                    },
                    MAIN_BUTTON: {
                        left: 126,
                        top: 700,
                        width: 500,
                        height: 96,
                        radius: 10,
                        fillColor: 8637747,
                        alpha: 1,
                        eventName: "commonPopupMainButtonTap"
                    },
                    MAIN_BUTTON_TEXT: {
                        content: "领取水滴",
                        style: {
                            fontFamily: "PingFangSC-Medium",
                            fontSize: 36,
                            fill: 16777215,
                            align: "center",
                            lineHeight: 50
                        },
                        horizontalCenter: 375,
                        left: 303,
                        top: 724
                    }
                },
                sapling: Object(X.b)("Sapling"),
                growing: Object(X.b)("Growing"),
                blooming: Object(X.b)("Blooming"),
                fruiting: Object(X.b)("Fruiting")
            }, Y = q.a.targetHeight, Q = document.documentElement.clientHeight, K = Object(a.createloader)(), J = Q / Y;
        J < 1 && (J = 1);
        var Z = {
            deinsectization: "v1",
            weeding: "v1",
            hydropenia: "v1",
            mature: "v2",
            sapling: "v2",
            growing: "v2",
            blooming: "v2",
            fruiting: "v2"
        };

        function $() {
            var e = ["ribbons1", "ribbons2", "ribbons3", "ribbons4", "ribbons5"],
                t = a.singleLoader.createSprite(e[Math.floor(Math.random() * e.length)], {
                    x: 750 * Math.random(),
                    y: 0
                }), n = Object(a.tweenUtil)(t, -30, 2 * Q, "y", 2e3 * Y / Q, "Quadratic", "In", function () {
                    t.parent.removeChild(t), t.destroy(), t = null
                });
            return t.on("removed", function () {
                n.stop()
            }), t
        }

        var ee = function (e, t, n, o) {
                var r = new i.Container;
                if (r.name = e + t, r.y = -50, r.interactive = !0, r.on("tap", function (e) {
                        e.stopPropagation()
                    }), "v1" === Z[e]) {
                    var s = z[e], l = s.MASK_BG, c = s.SHOW_AREA, d = s.SHOW_AREA_BG, u = s.TYPE_IMAGE, p = s.CLOSE_BUTTON,
                        m = s.MAIN_TEXT, f = s.SUB_TEXT, g = s.MAIN_BUTTON, y = s.MAIN_BUTTON_TEXT;
                    s.SHOW_ROBBIN;
                    if (n && (g.fillColor = 16761891, y.content = "领取水滴", y.horizontalCenter = 375, y.extra = null), u.name += t ? "" + t : "", K.loadImage(u.name), K.loadImage(p.name), y.extra) {
                        var b = y.extra.drip, w = void 0 === b ? {} : b;
                        K.loadImage(w.name)
                    }
                    var _ = new i.Sprite(i.Texture.WHITE);
                    _.width = l.width, _.height = l.height, _.alpha = l.alpha, _.tint = l.fillColor, r.addChild(_);
                    var E = new i.Container;
                    E.x = c.left;
                    var S = -p.top + Y;
                    E.pivot.x = c.left, E.pivot.y = 0;
                    var C = Object(a.drawRectGraphics)(d), T = Object(a.drawRectGraphics)(g);
                    T.interactive = !0, T.on("tap", function () {
                        v.a.emit(g.eventName, e, o)
                    });
                    var A = Object(a.createTexts)([m, f, y]), x = h()(A, 3), k = x[0], N = x[1], O = x[2];
                    Object(a.addChildren)(E, [C, k, N, T, O]), E.y = S - E.height / 2, r.addChild(E), K.loader.load(function () {
                        var e = K.createSprite(p.name, {x: p.left, y: p.top});
                        e.interactive = !0, e.on("tap", function () {
                            v.a.emit(p.eventName)
                        });
                        var t = K.createSprite(u.name, {x: u.left, y: u.top});
                        if (Object(a.addChildren)(E, [e, t]), E.y = S - E.height / 2, y.extra) {
                            var n = y.extra, i = n.plus, o = void 0 === i ? {} : i, r = n.weight, s = void 0 === r ? {} : r,
                                l = n.drip, c = void 0 === l ? {} : l, d = K.createSprite(c.name, {x: c.left, y: c.top}),
                                m = Object(a.createTexts)([o, s]), f = h()(m, 2), g = f[0], b = f[1];
                            Object(a.addChildren)(E, [d, g, b]), E.y = S - E.height / 2
                        }
                    })
                } else "v2" === Z[e] && function () {
                    var s = z[e], l = s.MASK_BG, c = s.SHOW_AREA, d = s.SHOW_AREA_BG, u = s.CLOSE_BUTTON, p = s.SILK_RIBBON,
                        m = s.MAIN_TITLE, f = s.ROOT_IMAGE, g = s.SHINE_IMAGE, y = s.MAIN_IMAGE, b = s.MAIN_BUTTON,
                        w = s.MAIN_BUTTON_TEXT, _ = s.SHOW_ROBBIN;
                    if (n && (b.fillColor = 16761891, w.content = "领取水滴"), "mature" === e && (w.content = "分享给好友，收获果实", w.horizontalCenter = 375, w.extra = null), K.loadImages([u.name, p.name, m.name, f.name, g.name, y.name + (t ? t + "V2" : "V2")]), w.extra) {
                        var E = w.extra.drip, S = void 0 === E ? {} : E;
                        K.loadImage(S.name)
                    }
                    var C = new i.Sprite(i.Texture.WHITE);
                    C.width = l.width, C.height = l.height, C.alpha = l.alpha, C.tint = l.fillColor, r.addChild(C);
                    var T = new i.Container;
                    T.x = c.left;
                    var A = -u.top + Y;
                    T.pivot.x = c.left, T.pivot.y = 0;
                    var x = Object(a.drawRectGraphics)(d), k = Object(a.drawRectGraphics)(b);
                    k.interactive = !0, k.on("tap", function () {
                        v.a.emit(b.eventName, e, o)
                    });
                    var N = new i.Container;
                    if (_) for (var O = 0; O < 50; O++) Object(a.gardenSetTimeout)(function () {
                        N.addChild($())
                    }, 3e3 * Math.random());
                    var I = Object(a.createTexts)([w]), P = h()(I, 1)[0];
                    Object(a.addChildren)(T, [x, k, P]), T.y = A - T.height / 2, r.addChild(T), K.loader.load(function () {
                        var e = K.createSprite(u.name, {x: u.left, y: u.top});
                        e.interactive = !0, e.on("tap", function () {
                            v.a.emit(u.eventName)
                        });
                        var n = K.createSprite(p.name, {x: p.left, y: p.top}),
                            i = K.createSprite(m.name, {x: m.left, y: m.top}),
                            o = K.createSprite(f.name, {x: f.left, y: f.top}),
                            s = K.createSprite(g.name, {x: g.left, y: g.top});
                        s.scale.x = 2, s.scale.y = 2;
                        var l = K.createSprite(y.name + (t ? t + "V2" : "V2"), {x: y.left, y: y.top});
                        if (Object(a.addChildren)(T, [e, n, i, s, o, l]), T.y = A - T.height / 2, w.extra) {
                            var c = w.extra, d = c.plus, b = void 0 === d ? {} : d, _ = c.weight, E = void 0 === _ ? {} : _,
                                S = c.drip, C = void 0 === S ? {} : S, x = K.createSprite(C.name, {x: C.left, y: C.top}),
                                k = Object(a.createTexts)([b, E]), O = h()(k, 2), I = O[0], P = O[1];
                            Object(a.addChildren)(T, [x, I, P]), T.y = A - T.height / 2
                        }
                        r.addChild(N)
                    })
                }();
                return r
            }, te = {
                success: function (e) {
                    var t = {fruit: "成功收获果实", exangeGoods: "成功兑换商品", exangeCoupons: "优惠券", delayFruit: "果实"},
                        n = {exangeCoupons: "可在【个人中心-我的优惠券】里"};
                    return {
                        BG: {left: 0, top: 0, width: 5e3, height: 5e3, fillColor: 16777215, alpha: 1},
                        SHOW_AREA: {left: 0, top: 0},
                        TYPE_IMAGE: {
                            name: "exangeCoupons" === e ? "deliverySuccessCoupons" : "deliverySuccess_v2",
                            left: 176,
                            top: 130
                        },
                        MAIN_TEXT: {
                            content: t[e] ? t[e] : "成功收获果实",
                            style: {
                                fontFamily: "PingFangSC-Medium",
                                fontSize: 40,
                                fill: 1381654,
                                align: "center",
                                lineHeight: 56
                            },
                            horizontalCenter: 375,
                            left: 256,
                            top: 590
                        },
                        SUB_TEXT: {
                            content: n[e] ? n[e] : "可在【个人中心-我的订单】里",
                            style: {
                                fontFamily: "PingFangSC-Regular",
                                fontSize: 30,
                                fill: 5790043,
                                align: "center",
                                lineHeight: 50
                            },
                            horizontalCenter: 375,
                            left: 141,
                            top: 696,
                            extra: {
                                seeFruit: {
                                    content: "fruit" === e ? "查看果实" : "查看商品",
                                    style: {
                                        fontFamily: "PingFangSC-Regular",
                                        fontSize: 30,
                                        fill: 5790043,
                                        align: "center",
                                        lineHeight: 50
                                    },
                                    left: 250,
                                    top: 746
                                },
                                logisticsInfo: {
                                    content: "点击查看",
                                    style: {
                                        fontFamily: "PingFangSC-Regular",
                                        fontSize: 30,
                                        fill: 8572211,
                                        align: "center",
                                        lineHeight: 50
                                    },
                                    left: 380,
                                    top: 746,
                                    underline: {style: [1, 8572211, 1]},
                                    eventName: "deliverySuccessLogisticsInfoTap",
                                    infoType: e
                                }
                            }
                        },
                        MAIN_BUTTON: {
                            left: 94,
                            top: 892,
                            width: 560,
                            height: 96,
                            radius: 10,
                            fillColor: 8637747,
                            alpha: 1,
                            eventName: "deliverySuccessMainButtonTap"
                        },
                        MAIN_BUTTON_TEXT: {
                            content: "再种一棵",
                            style: {
                                fontFamily: "PingFangSC-Medium",
                                fontSize: 36,
                                fill: 16777215,
                                align: "center",
                                lineHeight: 50
                            },
                            horizontalCenter: 375,
                            left: 303,
                            top: 916
                        }
                    }
                }, address: function (e) {
                    return {
                        BG: {left: 0, top: 0, width: 5e3, height: 5e3, fillColor: 16777215, alpha: 1},
                        SHOW_AREA: {left: 0, top: 0},
                        TYPE_IMAGE: {name: "deliveryAddress", left: 176, top: 130},
                        MAIN_TEXT: {
                            content: "种出的水果已装箱",
                            style: {
                                fontFamily: "PingFangSC-Medium",
                                fontSize: 40,
                                fill: 1381654,
                                align: "center",
                                lineHeight: 56
                            },
                            horizontalCenter: 375,
                            left: 215,
                            top: 590
                        },
                        SUB_TEXT: {
                            content: "恭喜你，果树的果实已经成熟。请选\n择收货地址，我们会把你的水果马不\n停蹄地送到你身边～",
                            style: {
                                fontFamily: "PingFangSC-Regular",
                                fontSize: 30,
                                fill: 5790043,
                                align: "center",
                                lineHeight: 50
                            },
                            horizontalCenter: 375,
                            left: 141,
                            top: 696
                        },
                        MAIN_BUTTON: {
                            left: 94,
                            top: 892,
                            width: 560,
                            height: 96,
                            radius: 10,
                            fillColor: 8637747,
                            alpha: 1,
                            eventName: "deliveryAddressMainButtonTap"
                        },
                        MAIN_BUTTON_TEXT: {
                            content: "选择收货地址",
                            style: {
                                fontFamily: "PingFangSC-Medium",
                                fontSize: 36,
                                fill: 16777215,
                                align: "center",
                                lineHeight: 50
                            },
                            horizontalCenter: 375,
                            left: 267,
                            top: 916
                        }
                    }
                }
            }, ne = q.a.targetHeight, ie = document.documentElement.clientHeight, ae = Object(a.createloader)(),
            oe = ie / ne;
        oe < 1 && (oe = 1);
        var re = function (e, t) {
                var n = te[e](t), o = n.BG, r = n.SHOW_AREA, s = n.TYPE_IMAGE, l = n.MAIN_TEXT, c = n.SUB_TEXT,
                    d = n.MAIN_BUTTON, u = n.MAIN_BUTTON_TEXT, p = new i.Container;
                p.interactive = !0, p.on("tap", function (e) {
                    e.stopPropagation()
                }), ae.loadImage(s.name);
                var m = new i.Sprite(i.Texture.WHITE);
                m.width = o.width, m.height = o.height, m.alpha = o.alpha, m.tint = o.fillColor, p.addChild(m);
                var f = new i.Container;
                f.x = r.left, f.y = r.top, f.pivot.x = r.left, f.pivot.y = r.top;
                var g = Object(a.drawRectGraphics)(d);
                g.interactive = !0, g.on("tap", function () {
                    v.a.emit(d.eventName)
                }), p.addChild(g), p.addChild(f);
                var y = Object(a.createTexts)([l, c, u]), b = h()(y, 3), w = b[0], _ = b[1], E = b[2];
                if (Object(a.addChildren)(f, [w, _, E]), c.extra) {
                    var S = c.extra, C = S.logisticsInfo, T = void 0 === C ? {} : C, A = S.seeFruit,
                        x = void 0 === A ? {} : A, k = (S.infoType, Object(a.createTexts)([x, T])), N = h()(k, 2), O = N[0],
                        I = N[1];
                    I.interactive = !0, I.on("tap", function () {
                        v.a.emit(T.eventName, T.infoType)
                    }), Object(a.addChildren)(f, [O, I])
                }
                return ae.loader.load(function (e) {
                    var t = ae.createSprite(s.name, {x: s.left, y: s.top});
                    f.addChild(t)
                }), p
            }, se = q.a.targetHeight, le = (document.documentElement.clientHeight, 0), ce = 800, de = function () {
                var e = new i.Container;
                e.zIndex = 1e4;
                for (var t = [], n = 0; n < 8; n++) {
                    var o = a.singleLoader.createSprite("visitFriendCloud", S.spriteAttr.visitFriendCloud);
                    o.y = o.y + 400 * Math.floor(n / 2) + n % 2 * 80, n % 2 == 0 ? (o.scale.x = -1, o.x = 750 + o.width) : o.x = o.width, e.addChild(o), t.push(o)
                }
                return e.play = function () {
                    t.forEach(function (t, n) {
                        n % 2 == 1 ? (t.x = 0, Object(a.tweenUtil)(t, 0, -t.width, "x", ce, "Quadratic", "In")) : (t.x = 750, Object(a.tweenUtil)(t, 750, 750 + t.width, "x", ce, "Quadratic", "In")), Object(a.tweenUtil)(t, 1, 0, "alpha", ce, "Quadratic", "In", function () {
                            7 === n && e.parent && (e.parent.removeChild(e), e.destroy({children: !0}), e = null)
                        })
                    })
                }, e
            }, ue = n("R06r"), pe = (n("aCrv"), n("aCrv")), me = function (e, t) {
                if (!t || !t[8]) return null;
                var n = t[8];
                if (!e || !n || e.level <= 1 && 0 === e.level_own_amount || n.finished_count < 1 || n.drawed_count === n.finished_count) return null;
                var o = n.is_draw ? "today" : "tomorrow";
                if (!o) return null;
                var r = new i.Container, s = "today" === o ? "todayGainText" : "tomorrowGainText",
                    l = "today" === o ? "todayGain_v2" : "tomorrowGain_v2",
                    c = a.singleLoader.createSprite(s, S.spriteAttr.tomorrowGainText),
                    d = a.singleLoader.createSprite(l, S.spriteAttr.tomorrowGain);
                c.anchor.x = .5, r.addChild(c, d), r.interactive = !0;
                var u = {dis: 0}, p = new pe.Tween(u).to({dis: [0, -20, 0]}, 4500).onUpdate(function () {
                    r.y = 1.2 * u.dis
                });
                return p.interpolation(pe.Interpolation.CatmullRom), p.repeat(1 / 0), p.start(), r.on("tap", function () {
                    "tomorrow" === o ? v.a.emit(T.a.MAINSTAGE_BUBBLE_TEXT, "tomorrowGain") : "today" === o && ue.a.ins.getRiskControlInfoAsync().then(function (e) {
                        Object(k.gainWater)(8, 1, e).then(function (e) {
                            c.parent.removeChild(c), c.destroy(), c = null, Object(a.tweenUtil)(d, S.spriteAttr.tomorrowGain.x, S.spriteAttr.watering.x, "x", 1200, "Quadratic", "In"), Object(a.tweenUtil)(d, S.spriteAttr.tomorrowGain.y, S.spriteAttr.watering.y, "y", 1200, "Cubic", "In"), Object(a.tweenUtil)(d, 1, 0, "alpha", 1200, "Cubic", "In", function () {
                                r.parent && (p.stop(), d.parent.removeChild(d), d.destroy(), d = null, r.parent.removeChild(d), r.destroy({children: !0}), r = null), e && e.water_amount && (j.a.waterAmount = e.water_amount), v.a.emit(T.a.MAIN_STAGE_CHECK_TOMORROW_GAIN, e.mission_list)
                            })
                        }).catch(function (e) {
                        })
                    })
                }), r.play = function () {
                    d.anchor.set(.5, .5);
                    var e = {scale: 0}, t = new pe.Tween(e).to({scale: [0, .8, 1]}, 1500).onUpdate(function () {
                        d.scale.x = e.scale, d.scale.y = e.scale, c.scale.x = e.scale, c.scale.y = e.scale
                    });
                    t.interpolation(pe.Interpolation.Bezier), t.start()
                }, r
            }, he = !1, fe = function (e) {
                var t = ["rain_1", "rain_2", "rain_3", "rain_4"];
                return setInterval(function () {
                    var n = t[Math.floor(Math.random() * t.length)], i = a.singleLoader.createSprite(n);
                    i.x = Math.random() * (e.width - 100) + 50, function (e, t) {
                        var n = Object(a.tweenUtil)(e, t.height, t.height + 200, "y", 1e3, "Cubic", "In", function () {
                            e && e.parent && (e.parent.removeChild(e), e.destroy())
                        });
                        e.on("removed", function () {
                            n.stop()
                        })
                    }(i, e), e.addChild(i)
                }, 200)
            }, ge = function (e) {
                if (!he) {
                    he = !0;
                    var t = fe(e);
                    setTimeout(function () {
                        clearInterval(t)
                    }, 5e3), setTimeout(function () {
                        he = !1
                    }, 6e3)
                }
            }, ve = !0, ye = !1, be = {
                clickTree: "送你个礼物，下次轻点戳我哦",
                clickCloud: "哼，躲进云彩里面都能被你找到",
                clickGrass: "藏到草坪都能被你找到，很厉害哦",
                clickDuck: "刚从水里捞出的礼物，送给你吧",
                watering: "经常来浇水会获得惊喜哦",
                clickRoom: "藏在房子里也被你找到啦",
                clickFence: "送你个礼物，下次轻点戳我哦"
            }, we = {10: "96580", 11: "96578", 13: "96577"}, _e = function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .3,
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
                ve && (Object(N.f)(e) < i || function (e) {
                    if (ye) return !0;
                    if (e && e.missionList) {
                        for (var t = e.missionList, n = [10, 11, 12, 13], i = 0, a = 0; a < n.length; a++) t && t[n[a]] && t[n[a]].is_open && i++;
                        return !(i < 2 && 1 === t[15].finished_count) && i > 0
                    }
                    return !0
                }(e) || Math.random() > n || (ve = !1, Object(a.gardenSetTimeout)(function () {
                    ve = !0
                }, 2e3), Object(k.apiGetRandomAward)().then(function (e) {
                    !function (e, t, n, i, a) {
                        if (e.boxDecs = be[n], e.alertTreasureBox = !0, 12 === e.type && e.merchant_coupon) {
                            var o = e.merchant_coupon;
                            o.goods_id && Object(k.apiGetGoodsInfoByID)(o.goods_id).then(function (t) {
                                t && (e.merchant_coupon.thumb_url = t.thumb_url, e.merchant_coupon.goods_name = t.goods_name, e.merchant_coupon.group_price = t.group_price, v.a.emit(T.a.REACT_AWARD_POPUP, e), g.a.trackingRecord({
                                    op: "impr",
                                    page_el_sn: "96579"
                                }))
                            })
                        } else v.a.emit(T.a.REACT_AWARD_POPUP, e), g.a.trackingRecord({op: "impr", page_el_sn: we[e.type]});
                        g.a.trackingRecord({op: "impr", page_el_sn: "96581"})
                    }(e, 0, t, n = .99, i = 2), ye = !0
                }).catch(function (e) {
                    ye = !0
                })))
            }, Ee = n("/O6k"), Se = n("UAMo"), Ce = void 0, Te = void 0, Ae = function (e, t, n, a) {
                var o = new i.Container,
                    r = new i.Text(e, new i.TextStyle({fontSize: 32, lineHeight: 41.7, align: "center", fill: 16711680})),
                    s = new i.Sprite(i.Texture.WHITE);
                return s.width = r.width, s.height = r.height, o.addChild(s, r), o.textSprite = r, o.txtBG = s, o.interactive = !0, o.on("tap", a), o.x = t, o.y = n, o
            }, xe = function () {
                Te = new i.Container;
                var e = new i.Sprite(i.Texture.WHITE);
                return e.tint = 0, e.width = 550, e.height = 180, e.alpha = .5, Te.addChild(e), Te.addChild(Ae("清空用户", 10, 60, function () {
                    new r.a(function (e, t) {
                        Ee.a.apiRequest("POST", "api/manor/test/user/clear", null, function (n) {
                            n ? (e(n), y.default.showToast("清空用户数据成功!")) : t(new Error("清空用户数据失败"))
                        }, function (e, n) {
                            var i = e && Se.a[e] ? Se.a[e] : "清空用户数据失败";
                            t(new Error(i), e)
                        }, null, null, !0)
                    })
                })), Te.addChild(Ae("加水", 160, 60, function () {
                    new r.a(function (e, t) {
                        Ee.a.apiRequest("POST", "api/manor/test/user/modify_water", {water_amount: 300}, function (n) {
                            n ? (e(n), j.a.waterAmount = n, y.default.showToast("领水滴成功!")) : t(new Error("增加水滴失败"))
                        }, function (e, n) {
                            var i = e && Se.a[e] ? Se.a[e] : "增加水滴发生错误";
                            t(new Error(i), e)
                        }, null, null, !0)
                    })
                })), Te.addChild(Ae("清空奖励", 250, 60, function () {
                    new r.a(function (e, t) {
                        Ee.a.apiRequest("POST", "api/manor/test/delete/random/mission", null, function (n) {
                            n ? (e(n), y.default.showToast("清空随机奖励成功!")) : t(new Error("清空随机奖励失败"))
                        }, function (e, n) {
                            var i = e && Se.a[e] ? Se.a[e] : "清空随机奖励失败";
                            t(new Error(i), e)
                        }, null, null, !0)
                    }).then(function (e) {
                    }).catch(function (e) {
                    })
                })), Te.addChild(Ae("清空浏览时长", 10, 120, function () {
                    localStorage.removeItem("cartoon_goods_scan_time"), y.default.showToast("清空浏览成功!")
                })), Te.addChild(Ae("场景刷新", 220, 120, function () {
                    v.a.emit(T.a.MAIN_STAGE_UPDATE_SCENE)
                })), Te.addChild(Ae("加化肥", 380, 120, function () {
                    new r.a(function (e, t) {
                        Ee.a.apiRequest("POST", "/api/manor/test/add/health", null, function (n) {
                            n ? e(n) : t(new Error("增加化肥失败"))
                        }, function (e, n) {
                            var i = e && Se.a[e] ? Se.a[e] : "";
                            t(new Error(i), e)
                        }, null, null, !0)
                    })
                })), Te.visible = !1, Te
            }, ke = function () {
                return "m.hutaojie.com" === location.hostname ? ((Ce = new i.Container).name = "debugPanel", Ce.x = 50, Ce.y = 200, Ce.addChild(xe()), Ce.addChild(function () {
                    var e = new i.Container, t = new i.Text("调试", new i.TextStyle({
                        fontSize: 32,
                        lineHeight: 41.7,
                        align: "center",
                        fill: 16711680
                    })), n = new i.Sprite(i.Texture.WHITE);
                    return n.width = t.width, n.height = t.height, e.addChild(n, t), e.textSprite = t, e.txtBG = n, e.interactive = !0, e.on("tap", function () {
                        Te.visible = !Te.visible
                    }), e
                }()), Ce) : null
            }, Ne = n("gDS+"), Oe = n.n(Ne), Ie = (n("1egF"), n("sPxU")), Pe = n("ca5d"), Me = n("Vkgz"),
            De = (n("aCrv"), function (e, t, n) {
                var o = new i.Container;
                o.name = "getCouponsCardContainer";
                var r = function (e, t, n) {
                    var o = new i.Container, r = a.singleLoader.createSprite("gardenCouponsCard_v3"),
                        s = new i.Container;
                    s.width = 20, s.height = 20, s.y = 40;
                    var l = new i.TextStyle({
                        fontSize: 26,
                        lineHeight: 20,
                        align: "center",
                        fontFamily: "PingFangSC-Semibold",
                        fill: 16773044
                    }), c = new i.Text(n, l);
                    c.x = 12;
                    var d = new i.TextStyle({
                        fontSize: 20,
                        lineHeight: 20,
                        align: "center",
                        fontFamily: "PingFangSC-Semibold",
                        fill: 16773044
                    }), u = new i.Text("¥", d);
                    return u.height = 20, u.x = -2, u.y = 6, s.addChild(u, c), o.addChild(r, s), s.centerX(), o
                }(0, 0, Me.a.price(n, 100));
                return o.addChild(r), o
            }), je = {
                prefix: "bear_festival_",
                imgsLen: 16,
                imgs: [],
                type: "animation",
                url: "promotion_op.html?type=5&id=231",
                attrs: [{animationSpeed: .08}]
            }, Le = {
                prefix: "ad0801_",
                imgsLen: 10,
                imgs: [],
                type: "animation",
                url: "promotion_op.html?type=5&id=377",
                attrs: [{animationSpeed: .08, scale: {x: .85, y: .85}}]
            }, Re = {
                prefix: "ad0803_",
                imgsLen: 11,
                imgs: [],
                type: "animation",
                url: "promotion_op.html?type=5&id=473",
                attrs: [{animationSpeed: .08}]
            }, Be = {
                7: {
                    29: {
                        prefix: "ad0729_",
                        type: "list",
                        imgs: [],
                        subData: [{
                            imgsLen: 15,
                            type: "animation",
                            url: "promotion_op.html?type=17&id=429",
                            attrs: [{animationSpeed: .2, anchor: {y: 1, x: 1}, y: 64, x: 50}]
                        }, {
                            imgsLen: 16,
                            type: "animation",
                            url: "promotion_op.html?type=17&id=408",
                            attrs: [{animationSpeed: .08, anchor: {y: 1}, y: 64}]
                        }, {
                            imgsLen: 16,
                            type: "animation",
                            url: "promotion_op.html?type=17&id=406",
                            attrs: [{animationSpeed: .08, anchor: {y: 1, x: 1}, y: 64, x: 50}]
                        }, {
                            imgsLen: 4,
                            type: "animation",
                            url: "promotion_op.html?type=17&id=410",
                            attrs: [{animationSpeed: .08, anchor: {y: 1}, y: 64}]
                        }, {
                            imgsLen: 9,
                            type: "animation",
                            url: "subject.html?subject_id=8837",
                            attrs: [{animationSpeed: .06, anchor: {y: 1}, y: 64}]
                        }, {
                            imgsLen: 17,
                            type: "animation",
                            url: "promotion_op.html?type=5&id=423",
                            attrs: [{animationSpeed: .08, anchor: {y: 1, x: 1}, y: 64, x: 50}]
                        }, {
                            imgsLen: 16,
                            type: "animation",
                            url: "subject.html?subject_id=7134&_ex_banner_middle=MjAwMjcwNjI6NTIwMTY0ODo5MDc6MzowOjE1MTQ5OA&refer_page_el_sn=99299&refer_idx=1&refer_page_name=index&refer_page_id=10002_1532690155950_wO2g6T64Xg&refer_page_sn=10002",
                            attrs: [{animationSpeed: .03, anchor: {y: 1}, y: 64}]
                        }, {
                            imgsLen: 16,
                            type: "animation",
                            url: "promotion_op.html?type=17&id=308",
                            attrs: [{animationSpeed: .08, anchor: {y: 1, x: 1}, y: 64, x: 50}]
                        }, {
                            imgsLen: 16,
                            type: "animation",
                            url: "promotion_op.html?type=4&id=433",
                            attrs: [{animationSpeed: .08, anchor: {y: 1, x: 1}, y: 64, x: 53}]
                        }, {
                            imgsLen: 9,
                            type: "animation",
                            url: "promotion_op.html?type=5&id=430",
                            attrs: [{animationSpeed: .08, anchor: {y: 1}, y: 64}]
                        }]
                    }, 30: je
                },
                8: {
                    1: Le,
                    2: {
                        prefix: "ad0802_",
                        imgsLen: 17,
                        imgs: [],
                        type: "animation",
                        url: "promotion_op.html?type=5&id=470",
                        attrs: [{animationSpeed: .08}]
                    },
                    3: Re,
                    4: Re,
                    5: Le,
                    6: Le,
                    7: {
                        prefix: "ad0807_",
                        imgsLen: 16,
                        imgs: [],
                        type: "animation",
                        url: "promotion_op.html?type=5&id=488",
                        attrs: [{animationSpeed: .08}]
                    },
                    8: {
                        prefix: "ad0808_",
                        imgsLen: 16,
                        imgs: [],
                        type: "animation",
                        url: "promotion_op.html?type=5&id=231",
                        attrs: [{animationSpeed: .08}]
                    },
                    9: {
                        prefix: "ad0809_",
                        imgsLen: 4,
                        imgs: [],
                        type: "animation",
                        url: "promotion_op.html?id=521",
                        attrs: [{animationSpeed: .08}]
                    },
                    10: {
                        prefix: "ad0810_",
                        imgsLen: 16,
                        imgs: [],
                        type: "animation",
                        url: "promotion_op.html?type=5&id=473",
                        attrs: [{animationSpeed: .08}]
                    },
                    11: {
                        prefix: "ad0811_",
                        imgsLen: 16,
                        imgs: [],
                        type: "animation",
                        url: "promotion_op.html?type=5&id=473",
                        attrs: [{animationSpeed: .08}]
                    },
                    12: {
                        prefix: "ad0812_",
                        imgsLen: 16,
                        imgs: [],
                        type: "animation",
                        url: "promotion_op.html?type=5&id=231",
                        attrs: [{animationSpeed: .08}]
                    },
                    13: {
                        prefix: "ad0813_",
                        imgsLen: 16,
                        imgs: [],
                        type: "animation",
                        url: "promotion_op.html?type=5&id=231",
                        attrs: [{animationSpeed: .08, scale: {x: .85, y: .85}}]
                    },
                    14: {
                        prefix: "ad0814_",
                        imgsLen: 13,
                        imgs: [],
                        type: "animation",
                        url: "promotion_op.html?type=17&id=579",
                        attrs: [{animationSpeed: .08}]
                    },
                    15: {
                        prefix: "ad0815_",
                        imgsLen: 12,
                        imgs: [],
                        type: "animation",
                        url: "promotion_op.html?type=5&id=231",
                        attrs: [{animationSpeed: .08, scale: {x: .85, y: .85}}]
                    },
                    16: {
                        prefix: "ad0816_",
                        imgsLen: 4,
                        imgs: [],
                        type: "animation",
                        url: "subject.html?subject_id=7581&refer_subjects_id=15&refer_page_name=subjects&refer_page_id=subjects_1523159385332_vOTHiwaVsC&refer_page_sn=10046",
                        attrs: [{animationSpeed: .05}]
                    },
                    17: {
                        prefix: "ad0817_",
                        imgsLen: 6,
                        imgs: [],
                        type: "animation",
                        url: "promotion_op.html?type=4&id=637",
                        attrs: [{animationSpeed: .06}]
                    },
                    18: {
                        prefix: "ad0818_",
                        imgsLen: 16,
                        imgs: [],
                        type: "animation",
                        url: "promotion_op.html?type=5&id=473",
                        attrs: [{animationSpeed: .08}]
                    },
                    19: {
                        prefix: "ad0819_",
                        imgsLen: 10,
                        imgs: [],
                        type: "animation",
                        url: "promotion_op.html?type=16&id=396",
                        attrs: [{animationSpeed: .08, scale: {x: .85, y: .85}}]
                    },
                    20: {
                        prefix: "ad0820_",
                        imgsLen: 10,
                        imgs: [],
                        type: "animation",
                        url: "subject.html?subject_id=6225&refer_subjects_id=12&refer_page_name=subjects&refer_page_id=10046_1534424295996_KbbB9JaSkC&refer_page_sn=10046",
                        attrs: [{animationSpeed: .08, scale: {x: .85, y: .85}}]
                    },
                    21: {
                        prefix: "ad0821_v2_",
                        imgsLen: 8,
                        imgs: [],
                        type: "animation",
                        url: "promotion_op.html?type=16&id=575",
                        attrs: [{animationSpeed: .08}]
                    },
                    22: {
                        prefix: "ad0822_",
                        imgsLen: 10,
                        imgs: [],
                        type: "animation",
                        url: "promotion_op.html?type=11&id=180",
                        attrs: [{animationSpeed: .08, scale: {x: .85, y: .85}}]
                    },
                    23: {
                        prefix: "ad0823_",
                        imgsLen: 19,
                        imgs: [],
                        type: "animation",
                        url: "promotion_op.html?type=16&id=396",
                        attrs: [{animationSpeed: .08}]
                    },
                    24: {
                        prefix: "ad0824_",
                        imgsLen: 10,
                        imgs: [],
                        type: "animation",
                        url: "promotion_op.html?type=11&id=786",
                        attrs: [{animationSpeed: .08}]
                    },
                    25: {
                        prefix: "ad0825_",
                        imgsLen: 2,
                        imgs: [],
                        type: "animation",
                        url: "subject.html?subject_id=7581",
                        attrs: [{animationSpeed: .04}]
                    },
                    26: {
                        prefix: "ad0826_",
                        imgsLen: 8,
                        imgs: [],
                        type: "animation",
                        url: "promotion_op.html?type=4&id=637",
                        attrs: [{animationSpeed: .06}]
                    },
                    27: {
                        prefix: "ad0827_",
                        imgsLen: 15,
                        imgs: [],
                        type: "animation",
                        url: "promotion_op.html?type=3&id=209",
                        attrs: [{animationSpeed: .08}]
                    },
                    28: {
                        prefix: "ad0828_",
                        imgsLen: 2,
                        imgs: [],
                        type: "animation",
                        url: "promotion_op.html?type=4&id=726",
                        attrs: [{animationSpeed: .04}]
                    },
                    29: {
                        prefix: "ad0829_",
                        imgsLen: 2,
                        imgs: [],
                        type: "animation",
                        url: "promotion_op.html?type=16&id=736",
                        attrs: [{animationSpeed: .04}]
                    },
                    30: {
                        prefix: "ad0830_",
                        imgsLen: 3,
                        imgs: [],
                        type: "animation",
                        url: null,
                        attrs: [{animationSpeed: .04}]
                    },
                    31: {
                        prefix: "ad0831_",
                        imgsLen: 12,
                        imgs: [],
                        type: "animation",
                        url: null,
                        attrs: [{animationSpeed: .08}]
                    }
                },
                9: {
                    1: {
                        prefix: "ad0901_",
                        imgsLen: 7,
                        imgs: [],
                        type: "animation",
                        url: null,
                        attrs: [{animationSpeed: .08}]
                    }
                }
            }, We = je, Ge = function () {
                var e = null, t = [];
                try {
                    var n = new Date(1e3 * (Date.now() / 1e3 + C.b.dt)), i = n.getDate(), a = n.getMonth() + 1;
                    if ("list" === (e = Be[a] && Be[a][i] || We).type) {
                        var o = parseInt(E.a.userID, 10) % e.subData.length;
                        for (var r in e.subData[o]) e[r] = e.subData[o][r];
                        for (var s = 1; s <= e.imgsLen; s++) {
                            var l = e.prefix + (o + 1) + "_" + s;
                            t.push(l), e.imgs.push(l)
                        }
                    } else for (var c = 1; c <= e.imgsLen; c++) {
                        var d = e.prefix + c;
                        t.push(d), e.imgs.push(d)
                    }
                } catch (n) {
                    e = null, t = []
                }
                return {todayADData: e, imgs: t}
            }(), Fe = void 0, Ue = void 0, He = void 0, Ve = void 0, qe = void 0, Xe = void 0, ze = void 0, Ye = void 0,
            Qe = void 0, Ke = function () {
                for (var e = [Ve, Fe, Ue, void 0, He, ze], t = 0, n = 0; n < e.length; n++) e[n] && e[n].transform && (e[n].interactive = !0, Object(a.changeSpriteAttr)(e[n], S.spriteAttr.missionIconList[t]), t++);
                if (qe) {
                    var i = {x: qe.x, y: qe.y};
                    Object(a.tweenUtil)(qe, S.spriteAttr.awardIconMoveOrigin.x, i.x, "x", 600, "Quadratic", "In"), Object(a.tweenUtil)(qe, S.spriteAttr.awardIconMoveOrigin.y, i.y, "y", 600, "Quadratic", "In", function () {
                        qe = null
                    })
                }
            }, Je = function () {
                for (var e = [Fe, Ue, void 0, He], t = 0; t < e.length; t++) if (e[t]) return void Object(a.shineSprite)(e[t])
            }, Ze = function (e, t) {
                if (!t) throw Error("need container");
                Xe && Xe.parent && (Xe.parent.removeChild(Xe), Xe.destroy({children: !0})), Xe = new i.Container;
                var n = a.singleLoader.createSprite("noonNightIcon", S.spriteAttr.noonNightIcon, !0);
                if (n.anchor.x = .5, n.anchor.y = .5, n.on("tap", function () {
                        v.a.emit(T.a.NOON_NIGHT_POPUP), g.a.trackingRecord({op: "click", page_el_sn: "94962"})
                    }), Xe.addChild(n), e) {
                    var o = function (e) {
                        var t = a.singleLoader.createSprite("noonNightBadge", e, !0);
                        t.anchor.x = 0, t.anchor.y = 1;
                        var n = Object(a.shakeScale)(t);
                        return {
                            sprite: t, stop: function () {
                                n.stop()
                            }
                        }
                    }(S.spriteAttr.noonNightBadge);
                    v.a.on(T.a.COMPLETE_MISSION, function (e) {
                        14 === e && (o.stop(), Xe.removeChild(o.sprite), Je())
                    }), Xe.addChild(o.sprite)
                }
                t.addChild(Xe)
            }, $e = function (e, t) {
                if (!e) throw Error("need container");
                Ye && Ye.destroy(), Ye = new i.Container, Object(a.changeSpriteAttr)(Ye, S.spriteAttr.foodFestivalContainer);
                var n = function (e) {
                    var t = null;
                    if ("image" === e.type) t = a.singleLoader.createSprite(e.imgs[0], S.spriteAttr.newFoodChicken, !0), Object(a.changeSpriteAttrDeep)(t, e.attrs[0]); else if ("animation" === e.type) (t = Object(a.createAnimationSprite)(e.imgs, S.spriteAttr.newFoodChicken)).anchor.x = .5, t.anchor.y = .5, e.attrs && e.attrs.length > 0 && Object(a.changeSpriteAttrDeep)(t, e.attrs[0]), t.play(); else if ("combine" === e.type) {
                        t = new i.Container;
                        for (var n = 0; n < e.imgs.length; n++) {
                            var o = a.singleLoader.createSprite(e.imgs[n], S.spriteAttr.newFoodChicken, !0);
                            o.anchor.x = .5, o.anchor.y = .5, Object(a.changeSpriteAttr)(o, e.attrs[n]), e.attrs[n].animate && e.attrs[n].animate(o), t.addChild(o)
                        }
                    }
                    return t
                }(t);
                n && Ye.addChild(n);
                var o = t.url || "cartoon_fruit_goods.html?page=1&size=20&opt_id=13&page_el_sn=97067&only_fruit=1&app_name=fruitShop_v2",
                    r = null, s = function () {
                        r ? g.a.trackingRecord({op: "click", page_el_sn: "73965", ad: Oe()(r)}, function () {
                            b.a.forward(o)
                        }) : b.a.forward(o)
                    };
                Object(k.getAdsInfo)().then(function (e) {
                    e && (e.landing_page_url && "" !== e.landing_page_url.trim() && (o = e.landing_page_url), e.ad && (r = e.ad)), r && g.a.trackingRecord({
                        op: "impr",
                        page_el_sn: "73965",
                        ad: Oe()(r)
                    }), Ye.on("tap", s)
                }).catch(function (e) {
                    Ye.on("tap", s)
                }), e.addChild(Ye)
            }, et = function (e) {
                Ge.todayADData ? $e(e, Ge.todayADData) : function (e) {
                    if (!e) throw Error("need container");
                    Qe && Qe.destroy(), (Qe = a.singleLoader.createSprite("fruitShop_v2", S.spriteAttr.fruitShop, !0)).on("tap", function () {
                        var e = "cartoon_fruit_goods.html?page=1&size=20&opt_id=13&page_el_sn=97067&only_fruit=1&app_name=" + Object(Ie.a)("ddgy_fruit");
                        g.a.trackingRecord({op: "click", page_el_sn: "97256"}, function () {
                            b.a.forward(e)
                        })
                    }), e.addChild(Qe)
                }(e)
            }, tt = function (e, t, n, o, r, s) {
                var l = "toFinish" === Object(Pe.f)(e), c = Object(Pe.j)(e, 13, t), d = Object(Pe.h)(e, 13, t), u = c || d,
                    p = Object(Pe.j)(e, 15, t), m = Object(Pe.h)(e, 15, t), h = p || m;
                !function (e, t, n, o, r, s, l) {
                    if (n && (n && Fe && Fe.parent && Fe.parent.removeChild(Fe), n)) {
                        var c = e[13];
                        if (!c.reward_amount) return;
                        if (Fe && Fe.parent && Fe.parent.removeChild(Fe), (Fe = new i.Container).interactive = !0, l && (qe = Fe), o) {
                            var d = a.singleLoader.createSprite("highWaterIcon_v3"), u = new i.TextStyle({
                                fontSize: 24,
                                lineHeight: 24,
                                align: "center",
                                fontFamily: "PingFangSC-Medium",
                                fill: 16777215
                            }), p = new i.Text(c.reward_amount + "g水滴", u);
                            p.x = 9, p.y = 70, Fe.addChild(d, p), Fe.on("tap", function () {
                                v.a.emit(T.a.REACT_AWARD_POPUP, {
                                    type: 13,
                                    generateMainStageIcon: !1,
                                    server_time: t,
                                    time_limit_water: {water_amount: c.reward_amount, end_time: c.next_available_time}
                                })
                            }), s.addChild(Fe)
                        } else if (r) {
                            var m = a.singleLoader.createSprite("highWaterCouldGain_v3");
                            Fe.addChild(m), Fe.on("tap", function () {
                                ue.a.ins.getRiskControlInfoAsync().then(function (e) {
                                    Object(k.gainWater)(13, 1, e).then(function (e) {
                                        e && e.water_amount && (j.a.waterAmount = e.water_amount, y.default.showToast("成功领取水滴" + c.reward_amount + "g"), s.removeChild(Fe), Fe.destroy({children: !0}), Fe = null, Ke())
                                    }).catch(function (e) {
                                    })
                                })
                            }), s.addChild(Fe)
                        }
                        Fe.pivot.x = Fe.width / 2, Fe.pivot.y = Fe.height / 2
                    }
                }(e, t, u, c, d, o, r), function (e, t, n, o, r, s, l) {
                    if (n && (n && Ue && Ue.parent && Ue.parent.removeChild(Ue), n)) {
                        var c = e[15];
                        if (!c.reward_amount) return;
                        if (Ue && Ue.parent && Ue.parent.removeChild(Ue), (Ue = new i.Container).interactive = !0, l && (qe = Ue), o) {
                            var d = a.singleLoader.createSprite("extraWaterMissionToComplete"), u = new i.TextStyle({
                                fontSize: 24,
                                lineHeight: 24,
                                align: "center",
                                fontFamily: "PingFangSC-Medium",
                                fill: 16777215
                            }), p = new i.Text(c.reward_amount + "g水滴", u);
                            p.x = 10, p.y = 68, Ue.addChild(d, p), Ue.on("tap", function () {
                                v.a.emit(T.a.MAIN_STAGE_EXTRA_WATER_POPUP, {
                                    missionList: e,
                                    serverTime: t,
                                    showTreasureBox: !1,
                                    showExtraAward: !0,
                                    showEffective: !1,
                                    page: "mainStage"
                                })
                            }), s.addChild(Ue)
                        } else if (r) {
                            var m = a.singleLoader.createSprite("extraWaterMissionToGain"), h = new i.TextStyle({
                                fontSize: 24,
                                lineHeight: 24,
                                align: "center",
                                fontFamily: "PingFangSC-Medium",
                                fill: 16777215
                            }), f = new i.Text("可领取", h);
                            f.x = 18, f.y = 68, Ue.addChild(m, f), Ue.on("tap", function () {
                                ue.a.ins.getRiskControlInfoAsync().then(function (e) {
                                    Object(k.gainWater)(15, 1, e).then(function (e) {
                                        e && e.water_amount && (j.a.waterAmount = e.water_amount, y.default.showToast("成功领取水滴" + c.reward_amount + "g"), s.removeChild(Ue), Ue.destroy({children: !0}), Ue = null, Ke())
                                    }).catch(function (e) {
                                    })
                                })
                            }), s.addChild(Ue)
                        }
                        Ue.pivot.x = Ue.width / 2, Ue.pivot.y = Ue.height / 2
                    }
                }(e, t, h, p, m, o, r), function (e, t, n, i, a) {
                    if (e && e.platform_coupons && e.platform_coupons[0]) {
                        He && He.parent && (He.parent.removeChild(He), He.destroy({children: !0}), He = null);
                        var o = e.platform_coupons[0];
                        (He = De(0, o.end_time, o.discount)) && (He.interactive = !0, He.on("tap", function () {
                            v.a.emit(T.a.REACT_AWARD_POPUP, {
                                type: 11,
                                server_time: t,
                                platform_coupon: {
                                    coupon_id: o.coupon_id,
                                    end_time: o.end_time,
                                    min_amount: o.min_amount,
                                    discount: o.discount
                                }
                            })
                        }), i.addChild(He), He.pivot.x = He.width / 2, He.pivot.y = He.height / 2, a && (qe = He))
                    }
                }(n, t, 0, o, r), function (e, t) {
                    if (!t) throw Error("need container");
                    ze && ze.parent && (ze.parent.removeChild(ze), ze.destroy({children: !0}));
                    var n = void 0;
                    if (ze = new i.Container, e.type !== Pe.a.NO_AWARD) {
                        if (e.type === Pe.a.AWARD) {
                            var o = a.singleLoader.createSprite("fresherLimited");
                            ze.addChild(o);
                            var r = e.withGoods ? T.a.FRESHER_AWARED_WITH_GOODS : T.a.FRESHER_AWARD;
                            n = function () {
                                g.a.trackingRecord({op: "click", page_el_sn: "91960"}), v.a.emit(r)
                            }
                        } else if (e.type === Pe.a.COMPLETED) {
                            var s = a.singleLoader.createSprite("fresherLimitedDraw");
                            ze.addChild(s), n = function () {
                                var n = e.withGoods ? C.a.FRESHER_AWARD_WITH_GOODS : C.a.FRESHER_AWARD;
                                ue.a.ins.getRiskControlInfoAsync().then(function (e) {
                                    return Object(k.gainWater)(n, 1, e)
                                }).then(function (n) {
                                    y.default.showToast("已成功领取" + e.awardAmount + "水滴,快去浇水吧~"), j.a.waterAmount = n.water_amount, j.a.missionList = n.mission_list, t.removeChild(ze), ze = null, N.a.GlobalFresherAwardType.type = Pe.a.NO_AWARD
                                }).catch(function (e) {
                                    y.default.showToast(e.message)
                                })
                            }
                        }
                        ze.pivot.x = ze.width / 2, ze.pivot.y = ze.height / 2, ze.on("tap", n), t.addChild(ze)
                    }
                }(Object(Pe.c)(e), o), function (e, t) {
                    if (e && e.product && !e.login_app) {
                        Ve && Ve.parent && Ve.parent.removeChild(Ve), Ve = new i.Container;
                        var n = a.singleLoader.createSprite("downloadMissionIcon"), o = new i.TextStyle({
                            fontSize: 24,
                            lineHeight: 24,
                            align: "center",
                            fontFamily: "PingFangSC-Medium",
                            fill: 16777215
                        }), r = new i.Text(C.d + "g水滴", o);
                        r.x = 12, r.y = 80, Ve.addChild(n, r), Ve.pivot.x = Ve.width / 2, Ve.pivot.y = Ve.height / 2, Ve.on("tap", function () {
                            v.a.emit(T.a.NEW_PLAYER_LOGINPOPUP)
                        }), t.addChild(Ve), v.a.myOn(T.a.NEW_PLAYER_GAINED, function () {
                            Ve && Ve.parent && Ve.parent.removeChild(Ve), Ve.destroy({children: !0}), Ve = null
                        }), Ke()
                    }
                }(s, o), Ze(l, o), et(o), Ke(), Je()
            }, nt = {fontSize: 18, align: "center", fontFamily: "PingFangSC-Medium", fill: 16777215}, it = !0;

        function at(e) {
            var t = new i.Container;
            Object(a.changeSpriteAttr)(t, S.spriteAttr.shareBadge);
            var n = W(14697024, [2, 16777215], 68, 32);
            t.addChild(n);
            var o = new i.Text(e, new i.TextStyle(nt));
            return o.anchor.x = .5, o.anchor.y = .5, o.x = t.width / 2 - n.lineWidth / 2, o.y = t.height / 2 - n.lineWidth / 2, t.addChild(o), t.visible = !1, t
        }

        var ot = n("Yz+Y"), rt = n.n(ot), st = n("FYw3"), lt = n.n(st), ct = n("mRg0"), dt = n.n(ct), ut = n("iCc5"),
            pt = n.n(ut), mt = n("V7oC"), ht = n.n(mt), ft = n("aCrv");
        n("aCrv");
        var gt = function (e, t) {
                var n = t.scWidth, o = t.scHeight, r = t.itemLength, s = t.scrollType;
                this.scrollContainer = new i.Container, this.scrollContainer.addChild(e);
                var l = new i.Graphics;
                l.beginFill(16777215).drawRect(0, 0, n, o).endFill(), this.scrollContainer.addChild(l), e.mask = l;
                var c = {}, d = {}, u = {}, p = {}, m = 0, h = 0, f = !1, g = !1, v = "x" === s ? n : o,
                    y = Math.max(e.children.length * r - v, 0), b = null, w = "x" === s ? "clientX" : "clientY";

                function _() {
                    return Date.now() || (new Date).getTime()
                }

                function E(t) {
                    f = !1;
                    var n = _() - m;
                    if (h = _(), e[s] > 0 || e[s] < -y) b = e[s] > 0 ? Object(a.tweenUtil)(e, e[s], 0, s, 600, "Circular", "Out") : Object(a.tweenUtil)(e, e[s], -y, s, 600, "Circular", "Out"); else if (e[s] = Math.round(e[s]), d[s] = Math.abs(e[s] - c[s]), g && !(n < 200 && d[s] < 100) && n < 300) {
                        var i = function (e, t, n, i, a) {
                            var o = e - t, r = Math.abs(o) / n, s = void 0, l = void 0;
                            return l = r / 6e-4, (s = parseFloat(e) + Math.round(r * r / .0012 * (o < 0 ? -1 : 1))) < i ? (s = a ? i - a / 2.5 * (r / 8) : i, l = (o = Math.abs(s - e)) / r) : s > 0 && (s = a ? a / 2.5 * (r / 8) : 0, l = (o = Math.abs(e) + s) / r), {
                                destination: Math.round(s),
                                momentumDuration: l
                            }
                        }(e[s], c[s], n, -y, v), o = i.destination, r = i.momentumDuration;
                        (o > 0 || o < -y) && (o = o > 0 ? 0 : -y), o !== e[s] && (b = Object(a.tweenUtil)(e, e[s], o, s, r, "Circular", "Out"))
                    }
                }

                return this.scrollContainer.interactive = !0, this.scrollContainer.touchmove = function (t) {
                    var n = t.data.originalEvent.touches ? 2 * t.data.originalEvent.touches[0][w] / S.globalScale : 2 * t.data.originalEvent[w] / S.globalScale;
                    if (f) {
                        var i = n - p[s];
                        d[s] = d[s] + i;
                        var a = Math.abs(d[s]);
                        p[s] = n;
                        var o = _();
                        if (o - h > 300 && a < 10) return;
                        var r = e[s] + i;
                        (r > 0 || r < -y) && (r = e[s] + i / 3), g = !0, e[s] = r, o - m > 300 && (m = o, c[s] = e[s])
                    }
                }, this.scrollContainer.touchstart = function (t) {
                    var n = t.data.originalEvent.touches ? 2 * t.data.originalEvent.touches[0][w] / S.globalScale : 2 * t.data.originalEvent[w] / S.globalScale;
                    f = !0, g = !1, m = _(), c[s] = e[s], p[s] = n, d[s] = 0, u[s] = 0, b && b.stop()
                }, this.scrollContainer.touchend = E, this.scrollContainer.touchendoutside = E, this.scrollContainer
            }, vt = n("v3n6"), yt = n("3OdE"), bt = n("b5fu"), wt = yt.a.get(location.host), _t = void 0, Et = !0,
            St = void 0, Ct = [], Tt = function (e, t, n, i) {
                if (e.uid !== _t) if (e.level > 0 && Et) St && St.offFocus(), Et = !1, setTimeout(function () {
                    Et = !0
                }, 800), St = t, n.style.fill = 16761891, n.style.fontWeight = "bold", F(i, {
                    lineColor: 16761891,
                    fontFamily: "PingFangSC-Semibold",
                    lineWidth: 4
                }), (_t = e.uid) !== E.a.userID ? (v.a.emit(T.a.MAINSTAGE_GOTO_GARDEN, !1, !1, e.uid), document.title = e.nickname + "的果园") : (v.a.emit(T.a.MAINSTAGE_GOTO_GARDEN, !0, !1, e.uid), document.title = "多多果园"); else {
                    var a = e.nickname;
                    v.a.emit(T.a.SHOW_SHARE_MASK, 5, function () {
                    }, null, null, a)
                }
            };

        function At(e, t, n) {
            var a = new i.Container;
            a.width = 120, a.height = 164, a.x = 120 * t;
            var o = new i.Sprite.fromImage(bt.a.getAvatarURL(e.avatar, wt.shop.logo)), r = new i.Graphics;
            r.beginFill(16777215).drawCircle(60, 66, 45).endFill(), o.width = 92, o.height = 92, o.x = 14, o.y = 20, o.mask = r;
            var s = new i.TextStyle({
                fontSize: 24,
                fontFamily: "PingFangSC-Regular",
                lineHeight: 34,
                align: "center",
                fill: n ? 16761891 : 14408667,
                wordWrap: !1,
                fontWeight: n ? "bold" : "normal"
            }), l = new i.Text(e.nickname, s);
            l.x = 60, l.y = 118, l.anchor.x = .5, l.width > 102 && (l.text = e.nickname.substring(0, 3) + "...");
            var c = void 0;
            l.width > 102 && (l.x = 60 + (l.width - 102) / 2, (c = new i.Graphics).beginFill(16777215).drawRect(9, 118, 102, 34).endFill(), c.name = "nicknameMask", l.mask = c);
            var d = new i.Graphics, u = n ? 16761891 : 16448250;
            d.lineStyle(n ? 4 : 2, u).drawCircle(60, 66, 46).endFill();
            var p = void 0;
            e.type ? (p = "fl" + C.j[e.type] + "Mature", p = Object(vt.b)(p)) : p = Object(vt.b)("flToadd");
            var m = new i.Sprite.fromImage(p);
            return m.width = 32, m.height = 32, m.x = 74, m.y = 80, a.addChild(o, r, d, m, l), c && a.addChild(c), a.interactive = !0, a.tap = function () {
                Et && (C.c.canvasArea.friendPanel ? y.default.showToast("别着急，浇完水可以领取水滴奖励哦") : (C.g.info = Ct[t], Tt(e, a, l, d)))
            }, a.offFocus = function () {
                F(d, {
                    lineColor: 16448250,
                    fontFamily: "PingFangSC-Regular",
                    lineWidth: 2
                }), l.style.fill = 14408667, l.style.fontWeight = "normal"
            }, a
        }

        var xt = function (e) {
            for (var t = bt.a.getSelfUID(), n = 0, a = e.friend_list.length; n < a; n++) e.friend_list[n].uid !== t && Ct.push(e.friend_list[n]);
            if (e && e.friend_list) {
                var o = new i.Container, r = new i.Container, s = function (e, t, n, a) {
                    var o = new i.Sprite(i.Texture.WHITE);
                    return o.tint = n || 0, o.width = e || 2 * window.innerWidth, o.height = t || 2 * window.innerHeight, o.alpha = a || .5, o
                }(750, 164, 0, .2);
                o.addChild(s);
                for (var l = 0, c = 0; c < e.friend_list.length; c++) {
                    var d = e.friend_list[c];
                    if (d.uid !== E.a.userID) {
                        var u = new At(d, l);
                        r.addChild(u), l += 1
                    } else {
                        var p = new At(d, 0, !0);
                        St = p, _t = d.uid, p.x = p.x + 3, o.addChild(p), C.g.info = d
                    }
                }
                r.addChild(function (e) {
                    var t = new i.Container;
                    t.width = 120, t.height = 164, t.x = 120 * e;
                    var n = new i.TextStyle({
                        fontSize: 48,
                        fontFamily: "PingFangSC-Regular",
                        lineHeight: 48,
                        align: "center",
                        fill: 14408667,
                        wordWrap: !1,
                        fontWeight: "bold"
                    }), a = new i.Text("+", n);
                    a.anchor.x = .5, a.anchor.y = .5, a.x = 60, a.y = 64;
                    var o = new i.TextStyle({
                        fontSize: 24,
                        fontFamily: "PingFangSC-Regular",
                        lineHeight: 34,
                        align: "center",
                        fill: 14408667,
                        wordWrap: !1,
                        fontWeight: "normal"
                    }), r = new i.Text("添加好友", o);
                    r.x = 60, r.y = 118, r.anchor.x = .5;
                    var s = new i.Graphics;
                    return s.lineStyle(2, 16448250).beginFill(0, 0).drawCircle(60, 66, 46).endFill(), s.interactive = !0, t.addChild(s, a, r), t.interactive = !0, t.tap = function () {
                        v.a.emit(T.a.SHOW_SHARE_MASK, "addFriendTip", function () {
                        }, null, null, null)
                    }, t
                }(e.friend_list.length - 1));
                var m = new i.Container;
                m.width = 120, m.height = 164, m.x = 120 * e.friend_list.length, r.addChild(m);
                var h = new gt(r, {scWidth: 627, scHeight: 164, itemLength: 120, scrollType: "x"});
                return h.x = 123, o.addChild(h), o
            }
            return null
        }, kt = new i.Container, Nt = function (e) {
            var t = new i.Container;
            return t.name = "friendPanel", v.a.on(T.a.MAINSTAGE_LOADED, function (e) {
                e && Object(k.apiGetFriendList)().then(function (e) {
                    var n = xt(e);
                    t.addChild(n), Object(a.changeSpriteAttr)(n, S.spriteAttr.friendContainer)
                })
            }), t
        }(), Ot = new i.Container;
        kt.addChild(Nt, Ot), kt.popUpContainer = Ot, kt.friendPanel = Nt;
        var It = kt;
        var Pt = function () {
            function e() {
                pt()(this, e), this.btnContainer = null, this.isFullWater = !1
            }

            return ht()(e, [{
                key: "setIsFullWater", value: function (e) {
                    this.isFullWater = e
                }
            }]), e
        }(), Mt = function (e) {
            function t() {
                pt()(this, t);
                var e = lt()(this, (t.__proto__ || rt()(t)).call(this));
                return e.waterBtnInstance = null, e.render(), e.listener(), e
            }

            return dt()(t, e), ht()(t, [{
                key: "render", value: function () {
                    var e = new i.Container, t = a.secondLoader.createSprite("dryIcon");
                    e.name = "dryIcon", Object(a.changeSpriteAttr)(e, S.spriteAttr.dryIcon), function (e) {
                        var t = e.y, n = {y: t}, i = new ft.Tween(n);
                        i.to({y: [t + 10, t, t - 10, t]}, 3500).onUpdate(function () {
                            e.y = n.y
                        }), i.interpolation(ft.Interpolation.Linear), i.repeat(1 / 0), e.on("removed", function () {
                            i.stop()
                        }), i.start()
                    }(e), e.addChild(t), this.btnContainer = e
                }
            }, {
                key: "listener", value: function () {
                    var e = this;
                    this.btnContainer.on("tap", function () {
                        if (e.waterBtnInstance.isAction) return !1;
                        v.a.emit(T.a.SHOW_HELP_WATER_POPUP, "waterPopup.dry", e.waterBtnInstance)
                    })
                }
            }, {
                key: "setWaterBtn", value: function (e) {
                    this.waterBtnInstance = e
                }
            }]), t
        }(Pt), Dt = function (e) {
            function t(e, n) {
                pt()(this, t);
                var i = lt()(this, (t.__proto__ || rt()(t)).call(this));
                return i.isAction = !1, i.waterBottle = null, i.bgSprite = null, i.bgEmptySprite = null, i.wrapBox = null, i.raiseInfoBubble = null, i.dryIconInstance = null, i.isDry = !1, i.raiseInfoBubble = e, i.isDry = n, i.render(), i.listener(), i
            }

            return dt()(t, e), ht()(t, [{
                key: "render", value: function () {
                    var e = new i.Container, t = new i.Container, n = a.secondLoader.createSprite("waterBg_Friend"),
                        o = a.secondLoader.createSprite("waterBgEmpty_Friend"),
                        r = a.secondLoader.createSprite("wateringBottle_Friend");
                    r.name = "waterBottle", t.name = "wrapBox", o.visible = !1, Object(a.changeSpriteAttr)(e, S.spriteAttr.helpWater), this.btnContainer = e, this.bgSprite = n, this.bgEmptySprite = o, this.waterBottle = r, this.wrapBox = t, e.addChild(n, o, r), t.addChild(e)
                }
            }, {
                key: "listener", value: function () {
                    var e = this, t = this;
                    this.btnContainer.on("tap", function () {
                        if (t.isAction) return !1;
                        v.a.emit(T.a.SHOW_HELP_WATER_POPUP, e.isDry ? "waterPopup.dry" : "waterPopup.normal", e)
                    })
                }
            }, {
                key: "watering", value: function (e, t, n, i) {
                    var o = this;
                    this.isFullWater ? this.raiseInfoBubble(V("helpWater", null, !1, 10001)) : (this.isAction = !0, "waterPopup.dry" === i && (C.c.canvasArea.friendPanel = !0), function (e, t) {
                        var n = e.selfUid, i = e.friendUid, a = e.antiContent;
                        Object(k.helpWatering)(n, i, a).then(function (e) {
                            t && t(e)
                        }).catch(function (e) {
                            t && t(e)
                        })
                    }({selfUid: e, friendUid: t, antiContent: n}, function (e) {
                        if ("number" == typeof e) return 10010 === e ? o.raiseInfoBubble(V("helpWater", null, !1, 1e4)) : 10051 === e ? (o.setIsFullWater(!0), o.isAction = !1, o.raiseInfoBubble(V("helpWater", null, !1, 10001))) : y.default.showToast(Se.a[e] || "浇水失败"), o.isAction = !1, void(C.c.canvasArea.friendPanel = !1);
                        if (o.dryIconInstance && (e.success || e.left_water_time <= 0)) {
                            var t = o.dryIconInstance.btnContainer;
                            t.parent.removeChild(t), t.destroy({children: !0}), o.dryIconInstance = null
                        }
                        var n = {x: 0, y: 0}, i = S.spriteAttr.watering.x - S.spriteAttr.helpWater.x,
                            r = S.spriteAttr.watering.y - S.spriteAttr.helpWater.y, s = {x: i + 10, y: r - 432},
                            l = {x: i - 200, y: r - 440}, c = new ft.Tween(n),
                            d = Object(a.createAnimationSprite)(["water1_v2", "water2_v2", "water3_v2", "water4_v2", "water5_v2", "water6_v2", "water7_v2", "water8_v2", "water9_v2", "water10_v2", "water11_v2", "water12_v2"], S.spriteAttr.waterAnimate);
                        d.animationSpeed = .1, d.loop = !1, d.visible = !1, d.name = "waterAnimateSprite", d.onComplete = function () {
                            Object(a.changeSpriteAttr)(o.waterBottle, {
                                x: 0,
                                y: 0
                            }), o.waterBottle.visible = !0, o.bgEmptySprite.visible = !1, o.wrapBox.removeChild(d), d.destroy({children: !0}), d = null, j.a.product = e.product_dto, o.isAction = !1, v.a.emit(T.a.SHOW_HELP_WATER_POPUP, e.has_mission ? "sharePopup.dry" : "sharePopup.normal", o), C.c.canvasArea.friendPanel = !1, o.isDry = e.product_dto.is_withered
                        }, o.wrapBox.addChild(d), o.bgEmptySprite.visible = !0, c.to({
                            x: [0, s.x, l.x],
                            y: [0, s.y, l.y]
                        }, 1200).onUpdate(function () {
                            o.waterBottle.x = n.x, o.waterBottle.y = n.y
                        }).onComplete(function () {
                            d.visible = !0, o.waterBottle.visible = !1, d.play()
                        }), c.interpolation(ft.Interpolation.Bezier), c.start()
                    }))
                }
            }, {
                key: "setDryIcon", value: function (e) {
                    this.dryIconInstance = e
                }
            }]), t
        }(Pt), jt = n("aCrv"), Lt = function (e, t) {
            var n = Object(N.b)(e, 300), o = Object(N.b)(e, 300, null, "rotatebg"), r = !1;
            if (n) {
                var s = ["sun_face_one", "sun_face_two", "sun_face_three"];
                t.interactive = !0, Object(a.changeSpriteAttr)(t, S.spriteAttr.sunContainer);
                var l = a.singleLoader.createSprite(n.versionName, S.spriteAttr[n.imgName]),
                    c = a.singleLoader.createSprite(o.versionName, S.spriteAttr[o.imgName]);
                c.anchor.x = .5, c.anchor.y = .5;
                var d = Object(vt.a)(s[Math.floor(Math.random() * s.length)]),
                    u = a.singleLoader.createSprite(d, S.spriteAttr[d]);
                t.addChild(c, l, u), c && (Object(a.gardenSetInterval)(function () {
                    c.rotation = c.rotation + .03
                }, 100), Object(a.shineSprite)(c)), t.on("tap", function () {
                    r || (r = !0, Object(a.tweenUtil)(u, 1, 0, "alpha", 1e3, "Quadratic", "In", function () {
                        var e = Object(vt.a)(s[Math.floor(Math.random() * s.length)]);
                        u.texture = i.Texture.fromFrame(e), Object(a.changeSpriteAttr)(u, S.spriteAttr[e]), Object(a.tweenUtil)(u, 0, 1, "alpha", 1e3, "Quadratic", "Out", function () {
                            r = !1
                        })
                    }))
                })
            }
        }, Rt = function (e, t, n, o) {
            var r = Object(N.c)(e, 400);
            if (r) {
                if (n) n.texture = i.Texture.fromFrame(r.versionName), Object(a.changeSpriteAttr)(n, r.attr); else {
                    n = a.singleLoader.createSprite(r.versionName, r.attr), t.addChild(n);
                    var s = !1;
                    n.on("tap", function () {
                        if (!s) {
                            s = !0;
                            var e = {dis: 0}, t = o.y,
                                n = new jt.Tween(e).to({dis: [0, 15, 30, 40, 45, 40, 30, 15, 0]}, 2e3).onUpdate(function () {
                                    o.y = t - e.dis
                                }).onComplete(function () {
                                    s = !1
                                });
                            n.interpolation(jt.Interpolation.CatmullRom), n.start()
                        }
                    })
                }
                var l = Object(N.c)(e, 400, null, "water");
                o ? (o.texture = i.Texture.fromFrame(l.versionName), Object(a.changeSpriteAttr)(o, l.attr)) : (o = a.singleLoader.createSprite(l.versionName, l.attr), t.addChild(o))
            }
            return [n, o]
        }, Bt = function (e, t, n) {
            var o = Object(N.b)(e, 100);
            return o && (n ? (n.texture = i.Texture.fromFrame(o.versionName), Object(a.changeSpriteAttr)(n, o.attr)) : (n = a.singleLoader.createSprite(o.versionName, o.attr), t.addChild(n), n.anchor.y = 1, n.on("tap", function () {
                Object(a.elasticExpansion)(n)
            }))), n
        }, Wt = {fontSize: 18, align: "center", fontFamily: "PingFangSC-Medium", fill: 16777215};

        function Gt(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 68,
                o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32, r = new i.Container;
            Object(a.changeSpriteAttr)(r, t);
            var s = W(14697024, [2, 16777215], n, o);
            r.addChild(s);
            var l = new i.Text(e, new i.TextStyle(Wt));
            return l.anchor.x = .5, l.anchor.y = .5, l.x = r.width / 2 - s.lineWidth / 2, l.y = r.height / 2 - s.lineWidth / 2, r.addChild(l), r
        }

        var Ft = n("UERk"),
            Ut = [8813600414, 4566851055, 9269565246534, 5235989249, 8822333177251, 4884336723, 4399494835, 3605732086, 4198446039, 4031034345, 5807203627, 4186320174, 3470528081, 3570236960, 3400444348, 4448040191, 3736761317, 4172545856, 4482154108, 3425030774, 9323018135],
            Ht = function () {
                function e(t) {
                    pt()(this, e), this.props = t, this.instance = this.render(), this.instance.on("tap", function () {
                        b.a.forward("cartoon_fruit_lottery.html")
                    })
                }

                return ht()(e, [{
                    key: "render", value: function () {
                        var e = this, t = new i.Container;
                        t.interactive = !0;
                        var n = a.singleLoader.createSprite("lottery_icon", S.spriteAttr.lottery);
                        return t.addChild(n), this.badge = Gt("免费", S.spriteAttr.lotterybadge, 58), t.addChild(this.badge), this.badge.visible = !1, this.checkFree(), v.a.myOn(T.a.MAIN_STAGE_UPDATE_SCENE, function () {
                            e.checkFree()
                        }), t
                    }
                }, {
                    key: "checkFree", value: function () {
                        var e = this;
                        Object(Ft.lotteryFreeNotice)().then(function (t) {
                            e.badge.visible = !!t
                        }).catch(function (e) {
                            e && e.message
                        })
                    }
                }, {
                    key: "visible", value: function () {
                        return !0
                    }
                }, {
                    key: "_inWhiteList", value: function (e) {
                        return !("undefined" == typeof window || !location || "m.hutaojie.com" !== location.hostname) || (Ut.indexOf(e) > -1 || 0 === parseInt(e, 10) % 3)
                    }
                }]), e
            }(), Vt = (n("aCrv"), function () {
                function e() {
                    pt()(this, e);
                    var t = new i.Container;
                    Object(a.changeSpriteAttr)(t, S.spriteAttr.fruitKnowlodge);
                    var n = a.singleLoader.createSprite("fruit_room_img_v5", S.spriteAttr.fruitKnowlodgeImg, !0);
                    t.addChild(n), t.on("tap", function () {
                        b.a.forward("promotion_op.html?type=11&id=786")
                    }), this.instance = t
                }

                return ht()(e, [{
                    key: "visible", value: function () {
                        return !0
                    }
                }]), e
            }()), qt = n("UNS8"), Xt = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, t = Object(qt.b)(e) || {};
                return new i.TextStyle({
                    fontSize: 36,
                    align: "center",
                    fontFamily: "PingFang SC",
                    fill: 16777215,
                    stroke: t.iconTextColor,
                    strokeThickness: 5
                })
            }, zt = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, a = arguments[3],
                    o = new i.Text(e, a);
                return o.anchor.y = .5, o.x = t, o.y = n, o
            }, Yt = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4;
                if (!e) return {};
                return {height: 30, vy: t, va: t / 30, x: e.x, base: e.y, top: e.y - 30, bottom: e.y + 30}
            }, Qt = function () {
                function e() {
                    var t = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    pt()(this, e);
                    var a = new i.Container, o = Xt(n);
                    this.num1 = zt(1, 0, 45, o), this.num10 = zt(0, 19, 45, o), this.num100 = zt(0, 44, 45, o), a.addChild(this.num1, this.num10, this.num100), a.x = 20, this.currentNumber = n, this.instance = a, this.nums = [this.num1, this.num10, this.num100], this.staticUpdate(n), this.instance.on("removed", function () {
                        t.timer && cancelAnimationFrame(t.timer), t.timer10 && cancelAnimationFrame(t.timer10)
                    })
                }

                return ht()(e, [{
                    key: "staticUpdate", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        this.currentNumber = e, this.num1.text = Math.floor(e / 100), this.num10.text = Math.floor(e / 10) % 10, this.num100.text = e % 10, this.num100.style = Xt(e), this.num10.style = Xt(e), this.num1.style = Xt(100), this.updatePositionAndVisible(e)
                    }
                }, {
                    key: "updatePositionAndVisible", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        100 === e ? (this.nums.forEach(function (e) {
                            e.visible = !0
                        }), this.instance.x = 20) : e >= 10 ? (this.num1.visible = !1, this.num10.visible = !0, this.num100.visible = !0, this.instance.x = 11, "1" === this.num100.text && (this.instance.x = 13)) : (this.num1.visible = !1, this.num10.visible = !1, this.num100.visible = !0, this.instance.x = 0)
                    }
                }, {
                    key: "updateColor", value: function () {
                        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                        n.forEach(function (t) {
                            t.style = Xt(e)
                        })
                    }
                }, {
                    key: "dynamicUpdate", value: function () {
                        var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        this.timer && cancelAnimationFrame(this.timer), this.timer = null;
                        var n = this.currentNumber;
                        if (this.currentNumber = t, t <= n) this.staticUpdate(t); else {
                            var i = this.num100, a = Yt(i), o = (a.height, a.vy), r = a.va, s = a.x, l = a.base, c = a.top,
                                d = a.bottom;
                            i.va = r;
                            var u = zt(++n % 10, s, d, i.style);
                            this.instance.addChild(u), u.alpha = 0, u.va = -r;
                            var p = [i, u];
                            this.timer = requestAnimationFrame(function i() {
                                if (n - 1 === t) return cancelAnimationFrame(e.timer), e.num100.text = t % 10, e.num100.y = l, e.num100.alpha = 1, void e.instance.removeChild(u);
                                if (p.forEach(function (e) {
                                        e.y -= o, e.alpha -= e.va
                                    }), p[0].y <= c) {
                                    p.forEach(function (e) {
                                        e.va = r
                                    }), p[p.length - 1].alpha = 1;
                                    var a = p.shift();
                                    e.updateColor(n, e.num100, e.num10, u), n % 10 == 0 && (e.updatePositionAndVisible(n), e.update10());
                                    var s = ++n % 10;
                                    a.y = d, a.text = s, a.va = -r, a.alpha = 0, p.push(a)
                                }
                                e.timer = requestAnimationFrame(i)
                            })
                        }
                    }
                }, {
                    key: "update10", value: function () {
                        var e = this;
                        this.timer10 && cancelAnimationFrame(this.timer10);
                        var t = (Number(this.num10.text) + 1) % 10;
                        if (1 !== t) {
                            0 === t && (this.num1.text = 1);
                            var n = this.num10, i = Yt(n, 2), a = (i.height, i.vy), o = i.va, r = i.x, s = i.base,
                                l = i.top, c = i.bottom;
                            n.va = o;
                            var d = zt(t, r, c, n.style);
                            this.instance.addChild(d), d.alpha = 0, d.va = -o;
                            var u = [n, d];
                            this.timer10 = requestAnimationFrame(function n() {
                                u.forEach(function (e) {
                                    e.y -= a, e.alpha -= e.va
                                }), u[0].y <= l ? (u.shift(), e.num10.text = t, e.num10.y = s, e.num10.alpha = 1, e.instance.removeChild(d)) : e.timer10 = requestAnimationFrame(n)
                            })
                        } else this.num10.text = 1
                    }
                }]), e
            }(), Kt = n("W4Ty"), Jt = function () {
                function e(t) {
                    pt()(this, e), this.props = t || {}, this.instance = this.render(), this.clickActive = !1
                }

                return ht()(e, [{
                    key: "render", value: function () {
                        var e = this, t = new i.Container;
                        t.interactive = !0, Object(a.changeSpriteAttr)(t, {
                            x: 20,
                            y: 40
                        }), this._icon = a.singleLoader.createSprite("health_icon_green"), t.addChild(this._icon);
                        var n = this.props.health > 1 ? this.props.health : 1;
                        return this._number = new Qt(n), t.addChild(this._number.instance), t.on("tap", function () {
                            e.clickActive || (e.clickActive = !0, setTimeout(function () {
                                e.clickActive = !1
                            }, 700), v.a.emit(T.a.OPEN_HEALTH_POPUP))
                        }), v.a.myOn(T.a.CHANGE_HEALTH, function (t) {
                            var n = t.health, i = t.dynamicUpdate;
                            e.update({health: n}, i)
                        }), t
                    }
                }, {
                    key: "update", value: function (e, t) {
                        var n = this;
                        if (e) {
                            var i = this.props.health || 0;
                            this.props = e;
                            var o = this.props.health > 1 ? this.props.health : 1, r = Object(qt.b)(o) || {};
                            this.instance.removeChild(this._icon), this._icon = a.singleLoader.createSprite(r.icon), this.instance.addChildAt(this._icon, 0), t ? this._animation(function () {
                                n._sparklerAnimation(o - i), n._number.dynamicUpdate(o)
                            }) : this._number.staticUpdate(o)
                        }
                    }
                }, {
                    key: "visible", value: function () {
                        return !!this.props && (this.props.level >= 4 && Object(Kt.a)())
                    }
                }, {
                    key: "_animation", value: function (e) {
                        for (var t = this, n = [], i = 1; i <= 11; i++) n.push("fertilizer_" + i);
                        var o = Object(a.createAnimationSprite)(n, S.spriteAttr.fertilizer);
                        this.instance.addChild(o), o.animationSpeed = .1, o.loop = !1, o.onComplete = function () {
                            t.instance.removeChild(o), e()
                        }, o.play()
                    }
                }, {
                    key: "_sparklerAnimation", value: function (e) {
                        var t = this;
                        if (!(e <= 0)) for (var n = (120 * e - 500) / 200, i = S.spriteAttr.health_point_start, o = S.spriteAttr.health_point_end, r = 0; r < n; r++) setTimeout(function () {
                            var e = a.singleLoader.createSprite("health-point", i, !0);
                            t.instance.addChild(e);
                            Object(a.moveCurve)(e, i, o, 200, -200, 500, function () {
                                t.instance.removeChild(e)
                            })
                        }, 200 * (r + 1))
                    }
                }]), e
            }(), Zt = function () {
                function e(t) {
                    pt()(this, e), this.instance = new i.Container, this.children = [], this.props = t, this.init()
                }

                return ht()(e, [{
                    key: "init", value: function () {
                        var e = new Ht;
                        if (this.children.push(e), this.props.level > 2) {
                            var t = new Vt;
                            this.children.push(t)
                        }
                        var n = new Jt(this.props);
                        this.children.push(n), this.update(this.props)
                    }
                }, {
                    key: "update", value: function (e) {
                        var t;
                        this.props = e, this.children.forEach(function (t) {
                            t.update && t.update(e)
                        });
                        var n = this.children.filter(function (e) {
                            return e.visible()
                        }).map(function (e) {
                            return e.instance
                        });
                        this.instance.removeChildren(), (t = this.instance).addChild.apply(t, R()(n))
                    }
                }, {
                    key: "hide", value: function () {
                        this.instance.visible = !1
                    }
                }]), e
            }(), $t = n("IlRi"), en = null, tn = !0, nn = 1, an = Object(Kt.a)(.01);
        var on = function () {
            function e() {
                var t = this;
                if (pt()(this, e), this.btnContainer = null, this.iconSprite = null, this.isFirstVisit = !0, this.luckyWaterId = null, this.luckyWaterStatus = null, this.isRickUser = !0, this.treeLevelIsOK = !1, this.isSameDate = function (e, n, i) {
                        var a = e.lastVisitTime, o = e.nowTimeStamp, r = new Date(o), s = new Date(Number(a));
                        r.getDate() === s.getDate() ? t.isFirstVisit = !1 : t.isFirstVisit = !0
                    }, !tn) throw new Error("邀请好友按钮已实例化");
                tn = !0, this.checkIsFirstVisitGarden(), v.a.on(T.a.SHARE_LUCKY_WATER_SUCCESS, function () {
                    t.luckyWaterStatus = nn;
                    for (var e = t.btnContainer.children, n = 0; n < e.length; n++) "luckyWaterBadge" === e[n].name && t.btnContainer.removeChild(e[n])
                })
            }

            return ht()(e, [{
                key: "doRender", value: function () {
                    this.render()
                }
            }, {
                key: "changeBadge", value: function () {
                    for (var e = this.btnContainer.children, t = 0, n = e.length; t < n; t++) if ("luckyWaterBadge" === e[t].name) {
                        var i = e[t];
                        this.btnContainer.removeChild(i), i.destroy(), (0 === this.luckyWaterStatus || this.isFirstVisit) && this.btnContainer.addChildAt(Gt(0 === this.luckyWaterStatus ? "可领取" : "100g", S.spriteAttr.luckyWaterBadge))
                    }
                }
            }, {
                key: "render", value: function () {
                    var e = this;
                    this.btnContainer && this.btnContainer.destroy && this.btnContainer.destroy({children: !0});
                    var t = new i.Container;
                    if (t.name = "luckyWaterIcon", this.btnContainer = t, an) {
                        var n = a.singleLoader.createSprite("luckyWaterIcon");
                        Object(a.changeSpriteAttr)(n, S.spriteAttr.luckyWaterIcon);
                        var o = Gt(0 === this.luckyWaterStatus ? "可领取" : "100g", S.spriteAttr.luckyWaterBadge);
                        o.name = "luckyWaterBadge", this.btnContainer.addChild(n), (0 === this.luckyWaterStatus || this.isFirstVisit) && this.btnContainer.addChild(o), this.iconSprite = n, this.isRickUser || !this.treeLevelIsOK ? ue.a.ins.getRiskControlInfoAsync().then(function (t) {
                            Object($t.b)(t).then(function (t) {
                                e.luckyWaterId = t.red_envelope_id, e.luckyWaterStatus = t.status, e.isRickUser = t.is_risk, e.treeLevelIsOK = t.can_send_red_envelope, v.a.emit(T.a.FRUITER_GET_LUCKY_WATER_INFO, e.luckyWaterId), e.renderSprite()
                            })
                        }) : this.renderSprite()
                    }
                }
            }, {
                key: "renderSprite", value: function () {
                    if (an || this.treeLevelIsOK && !this.isRickUser) this.listener(); else for (var e = this.btnContainer.children, t = 0; t < e.length; t++) this.btnContainer.removeChild(e[t])
                }
            }, {
                key: "listener", value: function () {
                    var e = this;
                    this.iconSprite.on("tap", function () {
                        e.luckyWaterId && 0 === e.luckyWaterStatus ? v.a.emit(T.a.LUCKY_WATER_POPUP, e.luckyWaterId) : b.a.forward("cartoon_fruit_lucky_water_goods.html")
                    })
                }
            }, {
                key: "checkIsFirstVisitGarden", value: function () {
                    !function (e) {
                        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                        var a = 0;
                        n[0](e, function t(i) {
                            n[++a] && n[a](i, e, t)
                        })
                    }(null, this.isSurportStorage, this.isFirstUseStorage, this.isSameDate)
                }
            }, {
                key: "isSurportStorage", value: function (e, t) {
                    if ("undefined" == typeof localStorage) this.isFirstVisit = !0; else {
                        var n = Date.now() + 1e3 * C.b.dt;
                        t({nowTimeStamp: n}), localStorage.setItem("lastVisitTime", String(n))
                    }
                }
            }, {
                key: "isFirstUseStorage", value: function (e, t, n) {
                    var i = localStorage.getItem("lastVisitTime");
                    i ? n(d()({}, e, {lastVisitTime: i})) : this.isFirstVisit = !0
                }
            }], [{
                key: "getInstance", value: function () {
                    return en || (en = new e), en
                }
            }]), e
        }(), rn = n("g2EY"), sn = n("aCrv");
        var ln = function (e, t, n, o) {
                Object(v.b)();
                var s = new i.Container, c = e.popUpContainer, u = e.friendPanel,
                    m = document.getElementById("welcome-text"), P = void 0, M = void 0, L = void 0, R = function () {
                    }, W = function () {
                    }, F = {left: 1, right: -1}, H = {duckOne: 1, duckTwo: -1}, q = {duckOne: .3, duckTwo: .3}, X = !1, z = !1,
                    Y = {duckOne: .03, duckTwo: .04}, Q = null, K = void 0, J = void 0, Z = 1, $ = 200, te = 10, ne = !1,
                    ie = !1, ae = void 0, oe = void 0, se = void 0, pe = void 0, he = void 0, fe = void 0, ve = void 0,
                    ye = void 0, be = void 0, we = void 0, Ee = void 0, Se = void 0, Ce = void 0, Te = void 0, Ae = void 0,
                    xe = void 0, Ne = void 0, Oe = void 0, Ie = void 0, Me = void 0, De = void 0, je = void 0, Le = void 0,
                    Re = void 0, Be = void 0, We = void 0, Ge = void 0, Fe = void 0, Ue = void 0, He = void 0, Ve = void 0,
                    qe = void 0, Xe = void 0, ze = void 0, Ye = void 0, Qe = void 0, Ke = void 0, Je = void 0, Ze = void 0,
                    $e = void 0, et = void 0, nt = void 0, ot = void 0, rt = void 0, st = void 0, lt = void 0, ct = void 0,
                    dt = void 0, ut = void 0, pt = void 0, mt = void 0, ht = void 0, ft = void 0, gt = void 0, vt = void 0,
                    yt = void 0, bt = void 0, wt = void 0, _t = void 0, Et = void 0, St = void 0, Ct = void 0, Tt = void 0,
                    At = void 0, xt = void 0, kt = void 0, Nt = void 0, Ot = void 0, It = void 0, Pt = void 0, jt = void 0,
                    Wt = void 0, Gt = void 0, Ft = void 0, Ut = 0, Ht = !1, Vt = !1, Xt = void 0, zt = void 0, Yt = void 0,
                    Qt = !1, Jt = void 0, $t = void 0, en = void 0, tn = 3e3, nn = 800, an = void 0, ln = .7, cn = .1,
                    dn = void 0, un = void 0, pn = void 0, mn = !1, hn = [], fn = 0, gn = 4;

                function vn() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, t = pn - un;
                    t > 0 && Object(k.imgLoadingTimeCmt)(t, e), window && window.loadingGifTime > 0 && Object(k.imgLoadingTimeCmt)(window.loadingGifTime, 2), window && window.preloadimgDone && performance && performance.timing && performance.timing.navigationStart && Object(k.imgLoadingTimeCmt)(window.preloadimgDone - performance.timing.navigationStart, 4), pn && performance && performance.timing && performance.timing.navigationStart && Object(k.imgLoadingTimeCmt)(pn - performance.timing.navigationStart, 3)
                }

                function yn(e, t, n) {
                    e.x < -e.width - 6 && (F[t] = 1), e.x > 756 && (F[t] = -1), e.x = e.x + n * F[t]
                }

                function bn(e) {
                    var t = q[e.name], n = t + 3.8, i = {step: t};
                    e.interactive = !1, e.playing || e.play(), e.animationSpeed = 2 * Y[e.name], X = !0;
                    var a = new sn.Tween(i).to({step: [n, t]}, 1e3).onUpdate(function () {
                        q[e.name] = i.step
                    }).onComplete(function () {
                        q[e.name] = t, e.animationSpeed = Y[e.name], e.interactive = !0, Object(N.f)(j.a) < 2 && (X = !1, e.stop())
                    });
                    a.interpolation(sn.Interpolation.Bezier), a.start()
                }

                function wn() {
                    rt.interactive = !1;
                    var e = a.singleLoader.createSprite("smoke", S.spriteAttr.smoke);
                    ot.addChild(e), function (e, t) {
                        e.anchor.set(.5, .5);
                        var n = {scale: 1}, i = new sn.Tween(n).to({scale: [2, 3]}, 3e3).onUpdate(function () {
                            e.scale.x = n.scale, e.scale.y = n.scale, e.x = e.x + 1, e.y = e.y - 1
                        });
                        i.interpolation(sn.Interpolation.Bezier), i.start(), Object(a.tweenUtil)(e, 1, 0, "alpha", 1e3, "Cubic", "In")
                    }(e), Object(a.gardenSetTimeout)(function () {
                        rt.interactive = !0
                    }, 100)
                }

                function _n(e) {
                    X && (e.x < 654 + e.width && (H[e.name] = 1, e.scale.x = -1), e.x > 756 + e.width + 5 && (H[e.name] = -1, e.scale.x = 1), e.x = e.x + q[e.name] * H[e.name])
                }

                function En(e) {
                    var t = Math.random();
                    e.interactive = !1, Object(a.tweenUtil)(e, 1, 0, "alpha", 1500, "Cubic", "In", function () {
                        e.x = t > .5 ? 766 + 20 * Math.random() : -e.width - 10 - 10 * Math.random(), e.alpha = 1, e.interactive = !0
                    }), 10 * Math.random() < 11 && !nt && (nt = a.singleLoader.createSprite("rainbow", S.spriteAttr.rainbow), ae.addChild(nt), Object(a.tweenUtil)(nt, 0, 1, "alpha", 1e3, "Cubic", "In"), Object(a.gardenSetTimeout)(function () {
                        Object(a.tweenUtil)(nt, 1, 0, "alpha", 1e3, "Cubic", "In", function () {
                            ae.removeChild(nt), nt.destroy(), nt = null
                        })
                    }, 3e3))
                }

                function Sn() {
                    var e = (new Date).getTime() / 1e3, t = ["absorb1", "absorb2", "absorb3", "absorb4"],
                        n = Q ? Math.ceil(Q - e) : 0, a = (n = n < 0 ? 0 : n) % 60, o = (n - a) / 60;
                    a < 10 && (a = "0" + a), o < 10 && (o = "0" + o), ut.text = o + ":" + a;
                    var r = void 0;
                    return (r = an && n < .1 * an ? t[0] : an && n < .3 * an ? t[1] : an && n < .5 * an ? t[2] : t[3]) && dn !== r && (ct.texture = i.Texture.fromFrame(r), dn = r), n
                }

                function Cn(e) {
                    var t = Object(a.tweenUtil)(e, 1, 0, "alpha", tn, "Cubic", "In"),
                        n = Object(a.tweenUtil)(e, e.y, e.y - 300, "y", tn, "Cubic", "In");
                    e.on("removed", function () {
                        t.stop(), n.stop()
                    })
                }

                function Tn(e, t, n) {
                    if ("waterEffectiveVerLine" === e && (e = ["waterEffectiveVerLine1", "waterEffectiveVerLine2", "waterEffectiveVerLine3"][Math.floor(3 * Math.random(0, 1))]), n) return Object(a.gardenSetInterval)(function () {
                        var t = {
                            x: Math.random() * (S.spriteAttr[e].x.max - S.spriteAttr[e].x.min) + S.spriteAttr[e].x.min,
                            y: S.spriteAttr[e].y
                        }, n = a.singleLoader.createSprite(e, t);
                        n.anchor.x = .5, pt.addChild(n), Cn(n), Object(a.gardenSetTimeout)(function () {
                            pt.removeChild(n), n.destroy(), n = null
                        }, tn)
                    }, t);
                    var i = {
                        x: Math.random() * (S.spriteAttr[e].x.max - S.spriteAttr[e].x.min) + S.spriteAttr[e].x.min,
                        y: S.spriteAttr[e].y
                    }, o = a.singleLoader.createSprite(e, i);
                    o.anchor.x = .5, pt.addChild(o), Cn(o), Object(a.gardenSetTimeout)(function () {
                        pt.removeChild(o), o.destroy(), o = null
                    }, tn)
                }

                var An = Object(a.debounce)(100, function () {
                    Math.random() > .5 ? (Tn("waterEffectiveWaterDrop1"), Tn("waterEffectiveLight1")) : (Tn("waterEffectiveWaterDrop2"), Tn("waterEffectiveLight2")), Math.random() > .666 && Tn("waterEffectiveVerLine")
                }), xn = function () {
                    if (Sn() > 0 && !Vt) {
                        Q = D(Q), An();
                        var e = {rotation: .05};
                        new sn.Tween(e).to({rotation: 0}, 3e3).onUpdate(function () {
                            dt.rotation = dt.rotation + e.rotation
                        }).start(), ft.breath || (ft.breath = !0, Object(a.breathSprite)(ft, 1e3, function () {
                            ft.breath = !1
                        }))
                    }
                };

                function kn() {
                    if (!(Sn() > 0) && j.a.product && j.a.product.level > 3) {
                        var e = [["fallLeaveOne1", "fallLeaveOne2"], ["fallLeaveTwo1", "fallLeaveTwo2"]],
                            t = ["good1", "good2", "good3", "good4", "good5", "good6", "good7", "good8", "good9", "good10", "good11", "good12"],
                            n = e[Math.floor(Math.random() * e.length)], i = Object(a.createAnimationSprite)(n);
                        if (i.x = Math.random() * (S.spriteAttr.leaveAnimate.maxX - S.spriteAttr.leaveAnimate.minX) + S.spriteAttr.leaveAnimate.minX, i.y = S.spriteAttr.leaveAnimate.y, i.animationSpeed = .1, i.loop = !0, i.play(), Object(a.tweenUtil)(i, 1, 0, "alpha", 1e3, "Cubic", "In", null), Object(a.tweenUtil)(i, i.y, S.spriteAttr.leaveAnimate.y + 300, "y", 1e3, "Cubic", "In", function () {
                                gt.removeChild(i), i.destroy({children: !0}), i = null
                            }), gt.addChild(i), Math.random() > .6) {
                            var o = t[Math.floor(Math.random() * t.length)], r = a.singleLoader.createSprite(o);
                            r.x = Math.random() * (S.spriteAttr.leaveAnimate.maxX - S.spriteAttr.leaveAnimate.minX) + S.spriteAttr.leaveAnimate.minX, r.y = S.spriteAttr.leaveAnimate.y, Object(a.tweenUtil)(r, 1, 0, "alpha", 1e3, "Cubic", "In", null), Object(a.tweenUtil)(r, i.y, S.spriteAttr.leaveAnimate.y + 300, "y", 1e3, "Quadratic", null, function () {
                                gt.removeChild(r), r.destroy(), r = null
                            }), r.rotation = 10, r.rotation = (60 * Math.random() - 30) * Math.PI / 360, gt.addChild(r)
                        }
                    }
                }

                function Nn(e) {
                    if (z && (Ve.rotation = Ve.rotation + .006), dt && (dt.rotation = dt.rotation + .018), yn(be, "left", .2), yn(we, "right", .2), _n(Xe), _n(ze), Sn(), j.a.product && (Sn() > 0 && !Qt && !Vt ? (pt.children.forEach(function (e) {
                            e.alpha = 1
                        }), lt.children.forEach(function (e) {
                            e.alpha = 1
                        }), Qt = !0, Math.random() > .5 ? (Jt = Tn("waterEffectiveWaterDrop1", nn, !0), $t = Tn("waterEffectiveLight1", nn, !0)) : (Jt = Tn("waterEffectiveWaterDrop2", nn, !0), $t = Tn("waterEffectiveLight2", nn, !0)), en = Tn("waterEffectiveVerLine", 3 * nn, !0)) : 0 === Sn() && (Qt = !1, pt.children.forEach(function (e) {
                            1 === e.alpha && Object(a.tweenUtil)(e, 1, 0, "alpha", 2e3, "Cubic", "In")
                        }), lt.children.forEach(function (e) {
                            1 === e.alpha && Object(a.tweenUtil)(e, 1, 0, "alpha", 2e3, "Cubic", "In")
                        }), clearInterval(Jt), clearInterval($t), clearInterval(en))), Sn() > 0 && !Vt) {
                        var t = Object(N.c)(e, 300, "wateringBottleForbid", "forbid");
                        fe.texture = i.Texture.fromFrame(t.versionName), Object(a.changeSpriteAttr)(fe, t.attr)
                    } else {
                        var n = Object(N.c)(e, 300, "wateringBottle", "bottle");
                        fe.texture = i.Texture.fromFrame(n.versionName), Object(a.changeSpriteAttr)(fe, n.attr)
                    }
                    if (!Vt) {
                        var o = Object(N.c)(e, 300, "wateringBg", "bg");
                        he.texture = i.Texture.fromFrame(o.versionName)
                    }
                }

                function On(e) {
                    v.a.myOn(T.a.COMMON_POPUP_CLOSE_BUTTON_TAP, function () {
                        v.a._events[T.a.COMMON_POPUP_CLOSE_BUTTON_TAP] && delete v.a._events[T.a.COMMON_POPUP_CLOSE_BUTTON_TAP], e.parent && e.parent.removeChild(e), e.destroy({children: !0}), C.h.closePopup()
                    })
                }

                function In(e) {
                    v.a.emit(T.a.SELECT_SEED), v.a.myOn(T.a.MAINSTAGE_CREATETREE_TAP, function (e) {
                        ue.a.ins.getRiskControlInfoAsync().then(function (t) {
                            var n = w.a.getParameter("refer_share_uid") || "", i = w.a.getParameter("mission_type") || "",
                                a = void 0;
                            "4" !== i && n && ne ? a = {
                                type: e,
                                mission_type: "5",
                                share_uid: n
                            } : "4" === i && n && ne ? (v.a.emit(T.a.COMPLETE_MISSION, 4), a = {
                                type: e,
                                mission_type: "4",
                                share_uid: n
                            }) : a = {type: e}, a.screen_token = t, Object(k.createTree)(a).then(function (t) {
                                if (C.b.dt = t.server_time - Date.now() / 1e3, ne && (Ze.visible = !0, pe.visible = !0, et.visible = !0, bt.visible = !0), t && t.product) {
                                    var n = t.product.health_degree || 0, i = t.product.level || 1;
                                    qt.a.health = n, Ot.update({health: n, level: i})
                                }
                                tt(t.mission_list, Date.now() / 1e3 + C.b.dt, null, Ze, null, t), Q = (new Date).getTime() / 1e3, C.h.closePopup(), j.a.product = t.product, j.a.waterAmount = t.water_amount, j.a.missionList = t.mission_list, s.animate = function () {
                                    Nn(t)
                                }, R(V("newPlayer")), g.a.trackingRecord({op: "click", seedType: e, page_el_sn: "97605"})
                            }).catch(function (e) {
                                y.default.showToast(e.message)
                            })
                        })
                    })
                }

                function Pn() {
                    var e = S.treeContainerMap.type[j.a.product.type];
                    e = e[0].toUpperCase() + e.slice(1);
                    var t = ee("mature", e, null, j.a.product.level);
                    On(t), c.addPopup(t)
                }

                function Mn() {
                    return j.a.product && j.a.product.episode_type ? j.a.product.episode_type : null
                }

                function Dn() {
                    var e = Mn();
                    1 === e ? R(V("showGrass", null, null, null)) : 2 === e && R(V("showInsect", null, null, null))
                }

                function jn() {
                    if (function () {
                            var e = (new Date).getTime() / 1e3;
                            return !!(!Vt && j.a && j.a.waterAmount && j.a.waterAmount >= 10 && Q && e >= Q)
                        }()) {
                        var e = {rotation: 0}, t = Math.PI / 360, n = [30, -30, 20, -20, 15, -15, 0];
                        n = n.map(function (e) {
                            return e * t
                        });
                        var i = new sn.Tween(e).to({rotation: n}, 800).onUpdate(function () {
                            fe.rotation = e.rotation
                        }).onComplete(function () {
                            fe.rotation = 0
                        });
                        i.interpolation(sn.Interpolation.CatmullRom), i.start()
                    }
                    Object(a.gardenSetTimeout)(function () {
                        jn()
                    }, 3e3)
                }

                function Ln(e) {
                    M = ee(e), c.addPopup(M), On(M)
                }

                function Rn(e, n) {
                    if (t) if (e) {
                        var o = Object(N.e)(n);
                        if (!o) return;
                        Re.texture = i.Texture.fromFrame(o), Object(a.changeSpriteAttr)(Re, S.spriteAttr[o]), Re.visible = !0, Ge.visible = !0, Dn()
                    } else Re.visible = !1, Ge.visible = !1, R(V("afterRemoveRandom"))
                }

                function Bn(e, n) {
                    if (t) if (e) {
                        var o = Object(N.d)(n);
                        if (!o) return;
                        Be.texture = i.Texture.fromFrame(o), Object(a.changeSpriteAttr)(Be, S.spriteAttr[o]), Be.visible = !0, We.visible = !0, Dn()
                    } else Be.visible = !1, We.visible = !1, R(V("afterRemoveRandom"))
                }

                function Wn(e, n) {
                    if (e) {
                        if (function (e, n) {
                                var o = Object(N.h)(e), r = Object(N.g)(e);
                                if (r && (Te ? (Object(a.changeSpriteAttr)(Te, S.spriteAttr[r.split("_v")[0]]), Te.texture = i.Texture.fromFrame(r)) : (Te = a.singleLoader.createSprite(r, S.spriteAttr[r.split("_v")[0]])).anchor.y = 1), Object(a.changeSpriteAttr)(Ae, S.spriteAttr.treeBubbleText[o]), Ce) {
                                    if (Object(a.changeSpriteAttr)(Ce, S.spriteAttr[o.split("_v")[0]]), Ce.hitArea = A[o], Ce.texture = i.Texture.fromFrame(o), "youngTree" === o && !Ut) {
                                        var s = {scale: .05},
                                            l = new sn.Tween(s).to({scale: 1}, 5e3).easing(sn.Easing.Back.Out);
                                        l.onUpdate(function () {
                                            Ce.scale.x = s.scale, Ce.scale.y = s.scale
                                        }), l.start()
                                    }
                                } else o && ((Ce = a.singleLoader.createSprite(o, S.spriteAttr[o.split("_v")[0]])).anchor.x = .5, Ce.anchor.y = 1, Ce.interactive = !0, Ce.hitArea = A[o], (st = a.singleLoader.createSprite("clickGrass", S.spriteAttr.clickGrass)).width = 590, st.on("tap", function (e) {
                                    t && _e(j.a, "clickGrass")
                                }), pt = new i.Container, ht = a.singleLoader.createSprite("waterEffectiveBottom", S.spriteAttr.waterEffectiveBottom), pt.addChild(ht), gt = new i.Container, Object(a.addChildren)(Se, [st, Ce, gt, pt, Ct, Tt, At]));
                                var c = "treeBottomPanel";
                                e.is_withered && Object(rn.a)(E.a.userID) && (c = "treeBottomPanel_Dry_v2"), St || (St = a.singleLoader.createSprite(c, S.spriteAttr.treeBottomPanel), Se.addChildAt(St, 1)), St.texture = i.Texture.fromFrame(c);
                                var d = !1;
                                Te && r && (Xt = Ce.y, zt = Te.y), Ce.off("tap");
                                var u = function (e) {
                                    if (!d) {
                                        d = !0, Object(a.gardenSetTimeout)(function () {
                                            d = !1
                                        }, $);
                                        var n = Mn();
                                        if (n && t) 1 === n ? Ln("weeding") : 2 === n && Ln("deinsectization"); else {
                                            xn(), t && R(V("clickTree")), kn(), Object(a.gardenSetTimeout)(kn, 200), t && _e(j.a, "clickTree");
                                            var i = {scale: 1},
                                                o = new sn.Tween(i).to({scale: [1, 1.02, 1.05, 1.02, 1, 1.02, 1]}, 1e3).onUpdate(function () {
                                                    Ce.scale.y = i.scale, Te && r && (Te.scale.y = i.scale, Te.y = zt - (Xt - zt) * (i.scale - 1))
                                                });
                                            o.interpolation(sn.Interpolation.CatmullRom), o.start()
                                        }
                                    }
                                };
                                Ce.on("tap", u), Ae && Ae.on("tap", u), Te && Se.addChild(Te), Gt || (Gt = new i.Container, Se.addChild(Gt)), At = Bt(n, Gt, At), Wt || (Wt = new i.Container, Se.addChild(Wt));
                                var p = Rt(n, Wt, Ct, Tt), m = h()(p, 2);
                                Ct = m[0], Tt = m[1], e && 6 === e.level && t && !Fe && ((Fe = a.singleLoader.createSprite("gainFruit", S.spriteAttr.gainFruit[e.type] ? S.spriteAttr.gainFruit[e.type] : S.spriteAttr.gainFruit.default, !0)).name = "gainFruit", Ue = a.singleLoader.createSprite("gainFruitBtn", S.spriteAttr.gainFruitBtn[e.type] ? S.spriteAttr.gainFruitBtn[e.type] : S.spriteAttr.gainFruitBtn.default, !0), Fe.off("tap"), Ue.off("tap"), Fe.on("tap", Pn), Ue.on("tap", Pn), $e.addChild(Fe, Ue))
                            }(e, n), function (e) {
                                var t = Mn();
                                t && (2 === t ? Rn(!0, e) : 1 === t && Bn(!0, e))
                            }(e), function (e) {
                                if (e) {
                                    var n = Math.max(e.level_amount - e.level_own_amount, 0),
                                        o = Math.min(e.level_own_amount / e.level_amount, 1),
                                        r = 100 - Math.floor(100 * (100 * o).toFixed(2)) / 100, s = (r + "").split(".")[1];
                                    if (s && s.length > 2 && (s = s[0] + s[1], r = (r + "").split(".")[0] + "." + s), xe) {
                                        mt.visible = !0, mt.alpha = 1;
                                        var l = {width: Ie.width},
                                            c = new sn.Tween(l).to({width: De * o}, 2e3).easing(sn.Easing.Quadratic.InOut);
                                        c.onUpdate(function () {
                                            Ie.width = l.width, Oe.x = Me + Ie.width, mt.x = Oe.x - 68
                                        }).onComplete(function () {
                                            Object(a.tweenUtil)(mt, 1, 0, "alpha", 2e3, "Cubic", "In")
                                        }), c.start()
                                    } else xe = new i.Container, Object(a.changeSpriteAttr)(xe, S.spriteAttr.healthBar), Ne = a.singleLoader.createSprite("healthBg_v4", S.spriteAttr.healthBg, !0), Oe = a.singleLoader.createSprite("healthBlueHead_v3", S.spriteAttr.healthBlueHead), Ie = a.singleLoader.createSprite("healthBlueMid_v3", S.spriteAttr.healthBlueMid), Me = Oe.x, De = 8.05 * Ie.width, Ie.width = 0, (mt = a.singleLoader.createSprite("healthBarLightTail_v2", S.spriteAttr.healthBarLightTail)).visible = !1, xe.addChild(Ne, Ie, Oe, mt), Ze.addChild(xe), Ie.width = De * o, Oe.x = Me + Ie.width;
                                    var d = S.treeContainerMap.healthText[e.level], u = void 0, p = Math.ceil(n / 10);
                                    u = e.level <= 2 ? n > 0 ? "再浇水" + p + "次" + d : "" : n > 0 && o > 0 ? "再浇水" + r + "%" + d : "", je ? je.text = u : ((je = new i.Text(u, new i.TextStyle({
                                        fontSize: 25.1,
                                        lineHeight: 41.7,
                                        align: "center",
                                        fill: 16777215
                                    }))).anchor.x = .5, je.x = S.spriteAttr.healthBubbleText.x, je.y = S.spriteAttr.healthBubbleText.y, xe.addChild(je)), t || (je.alpha = 0)
                                }
                            }(e), t && function (e) {
                                e && 2 === e.level && 20 === e.level_own_amount && 0 === j.a.waterAmount && !_t ? ((_t = a.singleLoader.createSprite("beginClick_v3", S.spriteAttr.guideGetWaterMoving)).name = "guideGetWaterMoving", _t.tween = Object(a.moveReciprocate)(_t), $e.addChild(_t)) : _t && _t.parent && (_t.parent.removeChild(_t), _t.tween.stop(), _t.destroy(), _t = null)
                            }(e), t && Ut && e && Ut !== e.level) {
                            if (6 !== e.level) {
                                var o = Object(N.i)(e), r = void 0;
                                (5 === e.level || N.l.indexOf(e.type) > 0 && e.level > 2) && (r = (r = S.treeContainerMap.type[j.a.product.type])[0].toUpperCase() + r.slice(1));
                                var s = 2 === e.level;
                                P = ee(o, r, s, e.level), c.addPopup(P), On(P)
                            } else 6 === e.level && Pn();
                            2 === Object(N.f)(j.a) && (Xe.play(), ze.play(), X = !0, z = !0)
                        }
                        Ut = e && e.level ? e.level : 0
                    }
                }

                function Gn(e, n) {
                    if (t) if (e.product && 6 === e.product.level && e.product.status && 3 !== e.product.status && n) Object(k.apiGainFruit)().then(function (e) {
                        if (e.success) {
                            var t = re("address");
                            c.addPopup(t)
                        }
                    }).catch(function (e) {
                        R({text: e.message, priority: Z})
                    }); else if (e.product && 6 === e.product.level && e.product.status && 3 === e.product.status) {
                        var i = re("address");
                        c.addPopup(i)
                    }
                }

                function Fn(e, t) {
                    if (e.progress > 0) {
                        var n = Math.floor(e.progress);
                        m.innerHTML = 0 === fn ? "正在进入..." + n + "%" : "当前网络环境不佳\n正在努力加载逃跑的资源..." + n + "%"
                    }
                }

                function Un() {
                    j.a.isSteal ? j.a.waterAmount < te ? R({text: "别点啦,我的水壶内已经没有水可以偷啦"}) : (j.a.isSteal = !1, ue.a.ins.getRiskControlInfoAsync().then(function (e) {
                        O(o, e).then(function (e) {
                            R({text: e}), vt && (Ze.removeChild(vt), vt.destroy(), vt = null);
                            var t = a.singleLoader.createSprite("addStealWater_v2", S.spriteAttr.addStealWater);
                            Ze.addChild(t);
                            var n = {y: t.y}, i = new sn.Tween(n).to({y: [t.y - 200]}, 2e3).onUpdate(function () {
                                t.y = n.y
                            });
                            i.interpolation(sn.Interpolation.Linear), i.start();
                            var o = {alpha: 1}, r = new sn.Tween(o).to({alpha: [0]}, 2e3).onUpdate(function () {
                                t.alpha = o.alpha
                            });
                            r.interpolation(sn.Interpolation.Linear), r.start(), R({text: e})
                        }).catch(function (e) {
                            R({text: e})
                        })
                    })) : R({text: "别点啦,我的水壶内已经没有水可以偷啦"})
                }

                function Hn(e) {
                    Vt = !0;
                    var n = void 0;
                    j.a.product.level_amount - j.a.product.level_own_amount != 10 && (n = !0), ue.a.ins.getRiskControlInfoAsync().then(function (e) {
                        return Object(k.apiWatering)(e)
                    }).then(function (o) {
                        var r = j.a.waterAmount - o.now_water_amount;
                        return r && (function (e, n, o, r, s, l) {
                            var c = Object(N.j)(l);
                            0 === c.length && (c = ["water1_v2", "water2_v2", "water3_v2", "water4_v2", "water5_v2", "water6_v2", "water7_v2", "water8_v2", "water9_v2", "water10_v2", "water11_v2", "water12_v2"]), (Ye = Object(a.createAnimationSprite)(c, S.spriteAttr.waterAnimate)).animationSpeed = .1, Ye.loop = !1, Object(Kt.a)() && s >= 4 ? R(V("health", qt.a.health, null, qt.a.getHealthBubbleId())) : R(V("watering", j.a.product.level)), Ye.onComplete = function () {
                                fe.visible = !0;
                                var a = Object(N.c)(l, 300, "wateringBg", "bg");
                                if (he.texture = i.Texture.fromFrame(a.versionName), $e.removeChild(Ye), Ye.destroy({children: !0}), Ye = null, Qe.alpha = 1, Je.text = "+ " + e, Qe.hide(), je.visible = !0, j.a.product = n.product, Vt = !1, g.a.trackingRecord({
                                        op: "impr",
                                        page_el_sn: "97929"
                                    }), o) {
                                    var c = N.a.GlobalFresherAwardType;
                                    if (s >= 5 && r < 10 && c.type === Pe.a.AWARD) {
                                        var d = c.withGoods ? T.a.FRESHER_AWARED_WITH_GOODS : T.a.FRESHER_AWARD;
                                        v.a.emit(d)
                                    } else t && _e(j.a, "watering", .8)
                                }
                                t && !Et && ((Et = me(n.product, j.a.missionList)) && Ze.addChild(Et), Et && Et.play())
                            }, $e.addChild(Ye), fe.visible = !1, Ye.visible = !1, Le.visible = !0;
                            var d = Object(N.c)(l, 300, "wateringBgEmpty", "empty");
                            he.texture = i.Texture.fromFrame(d.versionName);
                            var u = {x: S.spriteAttr.waterMovingBottle.x, y: S.spriteAttr.waterMovingBottle.y},
                                p = S.spriteAttr.watering.x, m = S.spriteAttr.watering.y, h = {x: p + 10, y: m - 432},
                                f = {x: p - 200, y: m - 440}, y = new sn.Tween(u).to({
                                    x: [S.spriteAttr.waterMovingBottle.x, h.x, f.x],
                                    y: [S.spriteAttr.waterMovingBottle.y, h.y, f.y]
                                }, 1200).onUpdate(function () {
                                    Le.x = u.x, Le.y = u.y
                                }).onComplete(function () {
                                    Ye.visible = !0, Le.visible = !1, Ye.play()
                                });
                            y.interpolation(sn.Interpolation.Bezier), y.start()
                        }(r, o, n, o.now_water_amount, o.product.level, e), 1 === j.a.product.level && 0 === j.a.product.level_own_amount && g.a.trackingRecord({
                            op: "click",
                            page_el_sn: "97069"
                        })), j.a.waterAmount = o.now_water_amount, o.next_valid_water_time
                    }).then(function (e) {
                        var t = Nt ? cn : _.b.isNativePlatform() ? ln : 0;
                        t > 0 ? Object(k.apiMinusCD)(Math.floor(e * (1 - t))).then(function (n) {
                            if (n.success) {
                                var i = Math.ceil(e * t);
                                Q = i + (new Date).getTime() / 1e3, an = i
                            }
                        }) : (Q = e + (new Date).getTime() / 1e3, an = e)
                    }).catch(function (e) {
                        Q = (new Date).getTime() / 1e3, an = 0, Vt = !1, e.message && R({text: e.message, priority: Z})
                    })
                }

                function Vn(e) {
                    var t = Object(N.b)(e, 200, "cloudLeft", "left");
                    be ? (be.texture = i.Texture.fromFrame(t.versionName), be.tap = function () {
                        Object(N.b)(e, 200) ? ge(be) : En(be)
                    }) : (be = a.singleLoader.createSprite(t.versionName, t.attr)).tap = function () {
                        Object(N.b)(e, 200) ? ge(be) : En(be)
                    };
                    var n = Object(N.b)(e, 200, "cloudRight", "right");
                    we ? (we.texture = i.Texture.fromFrame(n.versionName), we.tap = function () {
                        En(we)
                    }) : (we = a.singleLoader.createSprite(n.versionName, n.attr)).tap = function () {
                        En(we)
                    }, xt || (xt = new i.Container), Lt(e, xt)
                }

                function qn(e, t) {
                    t ? (lt = new i.Container, Ze.addChild(lt)) : (lt && lt.parent && (lt.parent.removeChild(lt), lt.destroy({children: !0})), lt = new i.Container, Ze.addChild(lt)), Nt = Object(N.c)(e, 500) && _.b.isNativePlatform(), lt.x = S.spriteAttr.absorbWaterContainer.x, lt.y = S.spriteAttr.absorbWaterContainer.y, lt.interactive = !0, ct = a.singleLoader.createSprite("absorb4"), dn = "absorb4", (dt = a.singleLoader.createSprite("scanning")).anchor.set(0, 1), dt.x = .5 * ct.width, dt.y = .5 * ct.height, Ft = B(Nt ? 7929758 : 9163456, [2, Nt ? 4964707 : 1146258, 1], [16, 45, 73, 28], 6);
                    var n = {
                        fontSize: 24,
                        align: "center",
                        dropShadowBlur: 2,
                        fill: Nt ? 1020446 : 417648,
                        wordWrap: !1,
                        breakWords: !0
                    };
                    (ut = new i.Text("", n)).x = 21, ut.y = 45, ft = a.singleLoader.createSprite("absorbBg_v2", S.spriteAttr.absorbBg), Nt && (kt = a.singleLoader.createSprite("landmrak_absorb_bg")), Object(a.addChildren)(lt, [kt, ft, ct, Ft, ut, dt]), (t || 0 === Sn()) && lt.children.forEach(function (e) {
                        e.alpha = 0
                    }), lt.on("tap", xn)
                }

                function Xn(e, r, l, m, h, f) {
                    if (v.a.myOn(T.a.MAINSTAGE_PRODUCT_UPDATE, function (e) {
                            Wn(e, h)
                        }), v.a.myOn(T.a.MAINSTAGE_WATERING, function () {
                            Hn(h)
                        }), ae = new i.Container, Se = new i.Container, Ze = new i.Container, $e = new i.Container, ae.zIndex = 1, Se.zIndex = 10, Ze.zIndex = 100, $e.zIndex = 1e3, c.addPopup = function (e) {
                            C.h.openPopup(), c.addChild(e)
                        }, S.ifIphoneX) {
                        var y = new i.Graphics;
                        y.beginFill(212502).drawRect(0, S.spriteAttr.iphoneXBg.y, 750, S.iPhoneMoveHeight).endFill(), s.addChild(y)
                    }
                    if (oe = a.singleLoader.createSprite("bg4", S.spriteAttr.bg, !0), (ye = a.singleLoader.createSprite("light_v3", S.spriteAttr.light, !0)).anchor.x = 1, a.singleLoader.createSprite("strategy_v2", S.spriteAttr.strategy, !0).on("tap", function () {
                            g.a.trackingRecord({op: "click", page_el_sn: "97930"}, function () {
                                b.a.forward("cartoon_fruit_strategy.html")
                            })
                        }), parseInt(E.a.userID, 10), Ee = a.singleLoader.createSprite("message_v2", S.spriteAttr.message, !0), !t) {
                        if (j.a.isSteal = m, Object(rn.a)(E.a.userID) && (jt = new Dt(R, h.product.is_withered), Ze.addChild(jt.wrapBox)), h.product.is_withered && Object(rn.a)(E.a.userID)) (Pt = new Mt).setWaterBtn(jt), jt.setDryIcon(Pt), Ze.addChild(Pt.btnContainer); else if (j.a.isSteal) {
                            (vt = a.singleLoader.createSprite("couldSteal_v2", S.spriteAttr.couldSteal)).on("tap", Un);
                            var w = vt.y, _ = {y: w},
                                A = new sn.Tween(_).to({y: [w + 10, w, w - 10, w]}, 3500).onUpdate(function () {
                                    vt.y = _.y
                                });
                            A.interpolation(sn.Interpolation.Linear), A.repeat(1 / 0), vt.on("removed", function () {
                                A.stop()
                            }), A.start(), Ze.addChild(vt)
                        }
                        var x = void 0;
                        x = Object(rn.a)(E.a.userID) ? S.spriteAttr.stealWaterSprite : S.spriteAttr.stealWaterSpriteRight, (yt = a.singleLoader.createSprite("stealWater_v3", x)).on("tap", Un)
                    }
                    if (Ee.on("tap", function () {
                            v.a.emit(T.a.MAINSTAGE_OPEN_DYNAMICNEWS), g.a.trackingRecord({op: "click", page_el_sn: "97210"})
                        }), We = a.singleLoader.createSprite("removeGrass_v2", S.spriteAttr.removeGrass, !0), Ge = a.singleLoader.createSprite("removeInsect_v2", S.spriteAttr.removeInsect, !0), We.visible = !1, Ge.visible = !1, se = function (e) {
                            var t = new i.Container, n = a.singleLoader.createSprite("getWater_v2");
                            Object(a.changeSpriteAttr)(n, S.spriteAttr.getWater);
                            var o = at("可分享");
                            v.a.myOn(T.a.SHOW_SHARE_BADGE, function (e) {
                                e ? it && (it = !1, o.visible = !0) : o.visible = !1
                            });
                            var r = at("可领取");
                            return v.a.myOn(T.a.MAINSTAGE_GET_WATER_RED_POINT, function (e) {
                                r.visible = e
                            }), t.interactive = !0, t.on("tap", function () {
                                g.a.trackingRecord({
                                    op: "click",
                                    page_el_sn: "97933"
                                }), v.a.emit(T.a.MAINSTAGE_GETWATER_TAP), o.visible = !1
                            }), t.addChild(n, o, r), t
                        }(), t) {
                        var k = r ? r.health_degree : 100, O = r ? r.level : 0;
                        Ot = new Zt({
                            health: k,
                            level: O
                        }), O >= 4 && localStorage && !localStorage.haveShowedHealthStartup && v.a.emit(T.a.SHOW_HEALTH_STARTUP_POPUP), (It = on.getInstance()).doRender()
                    }
                    v.a.myOn(T.a.MAINSTAGE_GETWATER_TAP, function () {
                        _t && _t.parent && (_t.parent.removeChild(_t), _t.tween.stop(), _t.destroy(), _t = null)
                    }), (pe = new i.Container).position.set(S.spriteAttr.watering.x, S.spriteAttr.watering.y);
                    var P = Object(N.c)(h, 300, "wateringBg", "bg");
                    he = a.singleLoader.createSprite(P.versionName, P.attr);
                    var M = Object(N.c)(h, 300, "wateringBottle", "bottle");
                    (fe = a.singleLoader.createSprite(M.versionName, M.attr)).anchor.set(.5, .5), (ve = new i.Text(e + "g", {
                        fontSize: 28,
                        align: "center",
                        dropShadowBlur: 2,
                        fill: 16777215,
                        wordWrap: !1,
                        breakWords: !0
                    })).position.set(S.spriteAttr.waterAmountText.x, S.spriteAttr.waterAmountText.y), ve.anchor.set(.5, .5), j.a.waterAmount = e, (Le = a.singleLoader.createSprite(M.imgName, M.attr)).visible = !1, pe.addChild(he, fe, ve), (Re = a.singleLoader.createSprite("maxInsect", S.spriteAttr.maxInsect, !0)).visible = !1, (Be = a.singleLoader.createSprite("littleGrass", S.spriteAttr.littleGrass, !0)).visible = !1, (Ae = U(0, 0, "", 30, null, null, null, null, null, null)).visible = !1, Ae.interactive = !0, j.a.product = r, Se.addChild(Re, Be), $e.addChild(Ae, Le), Vn(h), He = new i.Container, (Ve = a.singleLoader.createSprite("windMill_v2", S.spriteAttr.windMill)).on("tap", function () {
                        t && t && _e(j.a, "clickCloud");
                        var e = {rotation: .03};
                        new sn.Tween(e).to({rotation: 0}, 3e3).onUpdate(function () {
                            Ve.rotation = Ve.rotation + e.rotation
                        }).start()
                    }), qe = a.singleLoader.createSprite("windMillBg_v2", S.spriteAttr.windMillBg), Ve.anchor.x = .5, Ve.anchor.y = .5, He.addChild(qe, Ve), (Xe = Object(a.createAnimationSprite)(["duckOne1", "duckOne2"], p()(S.spriteAttr.duckOne, {
                        name: "duckOne",
                        interactive: !0
                    }))).scale.x = -1, ze = Object(a.createAnimationSprite)(["duckTwo1_v2", "duckTwo2_v2"], p()(S.spriteAttr.duckTwo, {
                        name: "duckTwo",
                        interactive: !0
                    })), Xe.animationSpeed = Y[Xe.name], ze.animationSpeed = Y[ze.name], Object(N.f)(j.a) > 1 && (Xe.play(), ze.play(), X = !0, z = !0), Xe.on("tap", function () {
                        t && _e(j.a, "clickDuck"), bn(Xe)
                    }), ze.on("tap", function () {
                        t && _e(j.a, "clickDuck"), bn(ze)
                    }), (Qe = new i.Container).alpha = 0, Qe.hide = function () {
                        Object(a.tweenUtil)(Qe, 1, 0, "alpha", 3e3, "Cubic", "In"), Object(a.tweenUtil)(Qe, 0, 250, "y", 3e3, "Cubic", "In")
                    }, Ke = a.singleLoader.createSprite("addWaterBubble", S.spriteAttr.addWaterBubble), (Je = new i.Text("", {
                        fontSize: 34,
                        align: "center",
                        dropShadowBlur: 2,
                        fill: 417648,
                        wordWrap: !1,
                        breakWords: !0
                    })).position.set(S.spriteAttr.addWaterText.x, S.spriteAttr.addWaterText.y), Qe.addChild(Ke, Je), qn(h, !0);
                    var D = Object(N.c)(h, 103);
                    if (D && ((ot = new i.Container).x = S.spriteAttr[D.imimagName].x, ot.y = S.spriteAttr[D.imimagName].y, (rt = a.singleLoader.createSprite(D.versionName)).interactive = !0, rt.on("tap", function () {
                            t && _e(j.a, "clickRoom"), wn()
                        }), ot.addChild(rt)), Object(a.addChildren)(ae, [oe, ot, be, we, ye, xt, He]), We.on("tap", function () {
                            Ln("weeding")
                        }), Ge.on("tap", function () {
                            Ln("deinsectization")
                        }), qt.a.health = j.a && j.a.product && j.a.product.health_degree, v.a.myOn(T.a.CHANGE_HEALTH, function (e) {
                            qt.a.health = e.health
                        }), fe.on("tap", function () {
                            if (g.a.trackingRecord({
                                    op: "click",
                                    page_el_sn: "97934",
                                    level: j.a.product.level
                                }), !Ht && !Vt) if (et && (Ze.removeChild(et), Ze.removeChild(bt), et.tween.stop(), et.destroy(), et = null, bt.destroy(), bt = null, ne = !1, se.visible = !0, Ee.visible = !0, u.visible = !0, t && (Ot.visible = !0, It.btnContainer.visible = !0)), Ht = !0, Object(a.gardenSetTimeout)(function () {
                                    Ht = !1
                                }, 200), Sn() > 0) {
                                var e = V("noCouldWatering", Sn(), null, null);
                                R(e), g.a.trackingRecord({op: "impr", page_el_sn: "97928"});
                                var n = Object(a.gardenSetInterval)(function () {
                                    if (Sn() > 0 && K && K.id === e.id) {
                                        var t = V("noCouldWatering", Sn(), null, e.id);
                                        Ae.changeTextOnly(t.text)
                                    } else clearInterval(n)
                                }, 1e3)
                            } else if (j.a.product) {
                                var i = Mn();
                                if (1 !== i) if (2 !== i) {
                                    if (j.a.waterAmount < 10) {
                                        var o = ee("hydropenia");
                                        return c.addPopup(o), void On(o)
                                    }
                                    t && Object(N.k)(j.a) ? v.a.emit(T.a.GO_TO_APP_POPUP, h) : Object(Kt.a)() && j.a.product.level_amount > j.a.product.level_own_amount && qt.a.health <= 10 ? v.a.emit(T.a.LOW_HEALTH_INFORM, d()({}, j.a.product, {health_degree: qt.a.health})) : Hn(h)
                                } else R(V("shouldRemoveInsect")); else R(V("shouldRemoveGrass"))
                            }
                        }), t ? Object(a.addChildren)(Ze, [Ee, We, Ge, se, pe, It.btnContainer, Ot.instance]) : Object(a.addChildren)(Ze, [yt]), t && Fe && Ue && (Object(a.moveReciprocate)(Fe), $e.addChild(Fe, Ue)), t && (h.is_new_trend && (wt = G(S.spriteAttr.messageRedPoint), Ze.addChild(wt), v.a.myOn(T.a.MAINSTAGE_OPEN_DYNAMICNEWS, function (e) {
                            Ze.removeChild(wt), wt && (wt.destroy(), wt = null)
                        })), ne || ie || tt(l, Date.now() / 1e3 + C.b.dt, f, Ze, null, h), v.a.myOn(T.a.MAINSTAGE_AWARS_ICON, function (e) {
                            tt({
                                13: {
                                    is_open: !!e.time_limit_water,
                                    finished_count: 0,
                                    draw_count: 0,
                                    max_count: 1,
                                    next_available_time: e.time_limit_water && e.time_limit_water.end_time ? e.time_limit_water.end_time : 0,
                                    reward_amount: e.time_limit_water && e.time_limit_water.water_amount ? e.time_limit_water.water_amount : 0
                                }
                            }, e.server_time, {
                                platform_coupons: [e.platform_coupon],
                                merchant_coupons: [e.merchant_coupon]
                            }, Ze, !0, h)
                        })), t && h.trend && v.a.emit(T.a.SHOW_DYNAMIC_BUBBLE, h.trend), v.a.emit(T.a.MAINSTAGE_LOADED, n), t && n) {
                        var L = document.getElementById("loading-welcome");
                        L && document.body.removeChild(L)
                    }
                    if (n || (ae.visible = !1, Se.visible = !1, Ze.visible = !1, $e.visible = !1), Object(a.addChildren)(s, [ae, Se, Ze, $e]), !n) {
                        var B = de();
                        s.addChild(B), B.play(), Object(a.gardenSetTimeout)(function () {
                            ae.visible = !0, Se.visible = !0, Ze.visible = !0, $e.visible = !0
                        }, le), Object(a.gardenSetTimeout)(function () {
                            v.a.emit(T.a.MAINSTAGE_ARRIVE_GARDEN)
                        }, le + ce - 500)
                    }
                    !ne && t && R(V("init")), t && W(), jn(), j.a.missionList = l || {}, !t && o && h.is_first_visit && I(o).then(function (e) {
                        var t = V(e.type);
                        t.text = t.text.replace("${rewardAmount}", e.rewardAmount), R(t)
                    }), t && !Et && ((Et = me(r, l)) && Ze.addChild(Et), Et && Et.play());
                    var F = ke();
                    F && Ze.addChild(F), Gn(j.a)
                }

                function zn(e) {
                    function i(e, i) {
                        e && e.server_time && (Yt = e.server_time, C.b.dt = Yt - Date.now() / 1e3), ue.a.ins = Object(ue.b)(Yt), function (e) {
                            e.hasOwnProperty("failMsg") || (0 === l()(e).length && t && (ne = !0), e && !e.product && t && (ie = !0))
                        }(e), vn(ne ? 1 : 0), Xn(e.water_amount, e.product, e.mission_list, e.is_steal, e, i), ne && (Se.visible = !1, ae.visible = !1, Ze.visible = !1, $e.visible = !1, v.a.myOn(T.a.NEWPLYER_ENTER, function () {
                            ne && (Se.visible = !0, ae.visible = !0, $e.visible = !0)
                        }), se.visible = !1, Ee.visible = !1, u.visible = !1, pe.visible = !1, t && (It.btnContainer.visible = !1), Ot && Ot.hide(), (et = a.singleLoader.createSprite("beginClick_v3", S.spriteAttr.beginClickNewplayer)).name = "beginClickNewplayer", bt = a.singleLoader.createSprite("guideWater", S.spriteAttr.guideWater), et.tween = Object(a.moveReciprocate)(et), Ze.addChild(et), Ze.addChild(bt), et.visible = !1, bt.visible = !1), (ne || ie) && In(), Q = e.next_valid_water_time + (new Date).getTime() / 1e3, an = e.next_valid_water_time, s.animate = function () {
                            Nn(e)
                        }, v.a.emit(T.a.MAINSTAGR_LOADED, n, e), v.a.emit(T.a.NEWPLYER_ENTER)
                    }

                    if (v.a.myOn(T.a.MAINSTAGE_WATER_AMOUNT_UPDATE, function (e) {
                            !function (e) {
                                if (ve) {
                                    var t = e || 0;
                                    ve.text = t + "g"
                                }
                            }(e)
                        }), v.a.myOn(T.a.MAIN_STAGE_UPDATE_SCENE, function () {
                            t && r.a.all([Object(k.getPlayerInfo)(), Object(k.apiGetCouponsData)()]).then(function (e) {
                                var t = h()(e, 2), n = t[0], i = t[1];
                                if ("server busy" === n) y.default.showToast("当前服务器忙，请稍后重试"); else if ("forbid_multi_user" === n) y.default.showToast("【一个设备每天只能登录一个账号参与活动】"); else {
                                    j.a.product = n.product, j.a.waterAmount = n.water_amount, tt(n.mission_list, Date.now() / 1e3 + C.b.dt, i, Ze, null, n), Vn(n);
                                    var a = Rt(n, Wt, Ct, Tt), o = h()(a, 2);
                                    Ct = o[0], Tt = o[1], At = Bt(n, Gt, At), qn(n), s.animate = function () {
                                        Nn(n)
                                    }
                                }
                            }).catch(function (e) {
                                y.default.showToast(e.message)
                            })
                        }), n) {
                        var c = h()(e, 2), d = c[0], p = c[1];
                        "server busy" === d ? m.innerHTML = "当前参与活动的人数过多，正在排队进入...." : "forbid_multi_user" === d ? m.innerHTML = "【一个设备每天只能登录一个账号参与活动】" : i(d, p)
                    } else t ? r.a.all([Object(k.getPlayerInfo)(), Object(k.apiGetCouponsData)()]).then(function (e) {
                        var t = h()(e, 2), n = t[0], a = t[1];
                        "server busy" === n ? y.default.showToast("当前参与活动的人数过多，正在排队进入....") : "forbid_multi_user" === n ? y.default.showToast("【一个设备每天只能登录一个账号参与活动】") : i(n, a)
                    }).catch(function (e) {
                        y.default.showToast(e.message)
                    }) : Object(k.getPlayerInfo)(o).then(function (e) {
                        i(e)
                    })
                }

                function Yn(e) {
                    mn && fn < gn ? (fn += 1, mn = !1, a.singleLoader.loadImages(hn), hn = [], a.singleLoader.loader.load()) : mn && fn === gn && !x.a ? m.innerHTML = "当前网络环境不佳，请稍后重试" : (pn = (new Date).getTime(), p()(a.globalResources, a.singleLoader.loader.resources), a.singleLoader.loader.reset(), zn(e))
                }

                function Qn(e, t, n) {
                    mn = !0, hn.push(n.name)
                }

                if (W = function () {
                        var e = Math.floor(0 * Math.random()) + 15;
                        clearTimeout(J), J = Object(a.gardenSetTimeout)(function () {
                            if (1 === Mn() || 2 === Mn()) Dn(); else if (!ne) {
                                var e = V(null, null, !0, null);
                                R(e, !0)
                            }
                            W()
                        }, 1e3 * e)
                    }, R = function (e, n) {
                        if (Ae && K && K.nextMessage && e && e.text && e.priority >= V(null, null, null, K.nextMessage).priority) Ae.setText(V(null, null, null, K.nextMessage)), Ae.show(), K = V(null, null, null, K.nextMessage), n || (clearTimeout(J), t && W()); else {
                            if (K && e && e.priority > K.priority || !e) return;
                            Ae && e && e.text && (Ae.setText(e), Ae.show(), K = e, n || (clearTimeout(J), t && W()))
                        }
                        L && clearInterval(L), !K || K.stay || K.nextMessage || (L = Object(a.gardenSetTimeout)(function () {
                            Ae.visible = !1, K = null
                        }, 5e3))
                    }, v.a.myOn(T.a.REMOVE_RANDOM_EVENT_SHARE_BACK, function (e) {
                        Object(k.apiRemoveRandomEvent)().then(function (e) {
                            e.result && (j.a.product.episode_type = 0, M && (M.parent && M.parent.removeChild(M), M.destroy({children: !0}), M = null), Rn(!1, j.a.product), Bn(!1, j.a.product))
                        }).catch(function (e) {
                            R({text: e.message, priority: Z})
                        })
                    }), v.a.myOn(T.a.DELIVERY_SUCCESS_STAGE_SHOW, function (e) {
                        var t = re("success", e);
                        c.addPopup(t)
                    }), v.a.myOn(T.a.CHANGE_UPDATE_BUTTON_STATUS, function (e) {
                        if (e && P) return P.parent && P.parent.removeChild(P), P.destroy({children: !0}), void(P = null);
                        var t = j.a.product, n = Object(N.i)(t);
                        P && (P.parent && P.parent.removeChild(P), P.destroy({children: !0}), P = null);
                        var i = "";
                        (5 === t.level || N.l.indexOf(t.type) > 0 && t.level > 2) && (i = (i = S.treeContainerMap.type[j.a.product.type])[0].toUpperCase() + i.slice(1)), P = ee(n, i, !0), c.addPopup(P), On(P)
                    }), v.a.myOn(T.a.MAINSTAGE_BUBBLE_TEXT, function (e) {
                        R(V(e))
                    }), v.a.myOn(T.a.MAIN_STAGE_CHECK_TOMORROW_GAIN, function (e) {
                        (Et = me(j.a.product, e)) && Ze.addChild(Et), Et && Et.play()
                    }), v.a.myOn(T.a.DELIVERY_ADDRESS_STAGE_SHOW, function (e) {
                        v.a._events[T.a.DELIVERY_ADDRESS_STAGE_SHOW] && delete v.a._events[T.a.DELIVERY_ADDRESS_STAGE_SHOW], "mature" === e && Gn(j.a, !0)
                    }), n || zn(), v.a.myOn(T.a.SECOND_LOAD_IMG, function () {
                        a.secondLoader.loadImages(["commonPopupHydropenia", "commonPopupCloseButton", "commonPopupCloseButtonV2", "commonPopupSilkRibbonV2", "commonPopupSaplingDesc", "commonPopupGrowingDesc", "commonPopupBloomingDesc", "commonPopupFruitingDesc", "commonPopupMatureDesc", "commonPopupSaplingV2", "commonPopupGrowingV2", "commonPopupFruitingAppleV2", "commonPopupMatureAppleV2", "commonPopupFruitingOrangeV2", "commonPopupMatureOrangeV2", "commonPopupFruitingPearV2", "commonPopupMaturePearV2", "commonPopupGrowingMangoV2", "commonPopupBloomingMangoV2", "commonPopupFruitingMangoV2", "commonPopupMatureMangoV2", "commonPopupGrowingPapayaV2", "commonPopupBloomingPapayaV2", "commonPopupFruitingPapayaV2", "commonPopupMaturePapayaV2", "commonPopupGrowingLemonV2", "commonPopupBloomingLemonV2", "commonPopupFruitingLemonV2", "commonPopupMatureLemonV2", "commonPopupGrowingKiwiV2", "commonPopupBloomingKiwiV2", "commonPopupFruitingKiwiV2", "commonPopupMatureKiwiV2", "commonPopupGrowingShiliuV2", "commonPopupBloomingShiliuV2", "commonPopupFruitingShiliuV2", "commonPopupMatureShiliuV2", "commonPopupTreeRoot", "commonPopupShineV2", "commonPopupBloomingV2", "commonPopupDrip", "commonPopupDeinsectization", "commonPopupWeeding", "deliveryAddress", "deliverySuccess_v2", "deliverySuccessCoupons", "waterBgEmpty_Friend", "waterBg_Friend", "wateringBottle_Friend", "dryIcon"]).load()
                    }), t && n) {
                    un = Date.now();
                    var Kn = window.rawData;
                    Kn && Kn[0] && Kn[0].hasOwnProperty("failMsg") ? Kn[0].failMsg ? y.default.showToast(Kn[0].failMsg) : y.default.showToast("获取游戏信息失败") : window.preload.then(function (e) {
                        var t = e.loadedImgs, n = e.errorImgs;
                        l()(n).forEach(function (e) {
                            Qn(0, 0, n[e])
                        }), function (e) {
                            var t = this;
                            l()(e).forEach(function (n) {
                                var i = e[n];
                                f.eachSeries(a.singleLoader.loader._afterMiddleware.slice(1, 2), function (e, n) {
                                    e.call(t, i, n)
                                }, function () {
                                }, !1)
                            })
                        }(t), p()(a.globalResources, t)
                    }).then(function () {
                        if (hn && hn.length > 0 ? a.singleLoader.loadImages(hn).on("progress", Fn).on("error", Qn).on("complete", function () {
                                Yn(Kn)
                            }).load() : Yn(Kn), Kn.length > 2 && Kn[2]) {
                            var e = Kn[2];
                            if (e.success) {
                                var t = e.create_tree, n = e.download_app;
                                if (!n && !t) {
                                    var i = document.getElementById("loading-welcome");
                                    i && document.body.removeChild(i), v.a.emit(T.a.INVITE_DOWNLOAD_POPUP, {
                                        isDownloadApp: n,
                                        isCreateTree: t
                                    })
                                }
                            }
                        }
                    })
                }
                return s.name = t ? "myGarden" : "friendGarden", s
            }, cn = n("aCrv"), dn = Math.min(window.innerWidth, 640), un = window.innerHeight, pn = a.constants.targetWidth,
            mn = a.constants.targetHeight;
        dn / un > pn / mn && (un = mn * (dn / pn));
        var hn = window.devicePixelRatio > 2 ? 2 : window.devicePixelRatio,
            fn = (_.b.Current, _.b.IOS, new i.Application({
                width: dn,
                height: un,
                antialias: !0,
                transparent: !1,
                forceCanvas: !0,
                autoResize: !0,
                resolution: hn,
                backgroundColor: 16186879
            }));
        if (v.a.on(T.a.MAINSTAGE_GOTO_GARDEN, function (e, t, n) {
                cn.removeAll(), Object(a.clearGardenInterval)();
                var i = ln(It, e, t, n);
                a.stageUtil.loadNewStage(i, fn, "mainStage", 0)
            }), v.a.on(T.a.MAINSTAGE_LOADED, function () {
                fn.renderer.backgroundColor = 10478316
            }), !_.b.isQQPlatform()) {
            document.getElementById("fruiter-main").appendChild(fn.view);
            var gn = ln(It, !0, !0);
            fn.ticker.add(function (e) {
                cn.update()
            }), a.stageUtil.loadNewStage(gn, fn, "mainStage", 0), a.stageUtil.loadNewStage(It, fn, "ui", 1)
        }
    }, ne8i: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_to-length.js")
    }, nh4g: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_descriptors.js")
    }, oLjW: function (e, t, n) {
    }, pbNj: function (e, t, n) {
        e.exports = n("Xqgh")("./components/vendor/iscroll-lite.js")
    }, q1Sx: function (e, t, n) {
    }, q1tI: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/react/index.js")
    }, rGqo: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/web.dom.iterable.js")
    }, s5qY: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_validate-collection.js")
    }, sjXj: function (e, t, n) {
    }, stqZ: function (e, t, n) {
    }, tl7A: function (e, t, n) {
        "use strict";
        (function (e) {
            var i = n("P2sY"), a = n.n(i), o = n("gDS+"), r = n.n(o), s = n("4d7F"), l = n.n(s), c = n("iCc5"),
                d = n.n(c), u = n("b5fu"), p = n("s8Ge"), m = n("xnWZ"), h = n("kk8N"), f = n("qiMe"),
                g = {unknown: 0, wifi: 1, "2g": 2, "3g": 3, "4g": 4}, v = Array.prototype.slice, y = function () {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").split(".").reverse().reduce(function (e, t, n) {
                        return +e + t * Math.pow(100, n)
                    })
                }, b = function () {
                    function t(e) {
                        var n = this;
                        d()(this, t);
                        var i = Date.now(), a = u.a.getRandomInteger(6);
                        this.data = {
                            v: 1,
                            t: i,
                            r: a,
                            c: Object(p.a)(i + "-" + a),
                            d: {t: Date.now(), n: 0, rts: this.getRts(), v: y(m.b.getAppVersion()) || "-1", pn: e.id, e: {}}
                        }, this.isSend = !1;
                        var o = window._plt || [], r = o.push;
                        o.push = function () {
                            for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                            var a = r.apply(o, t);
                            return n.checkReady(), a
                        }, window._plt = o, this.checkReady()
                    }

                    return t.prototype.checkReady = function () {
                        if (!this.isSend) {
                            var e = this.getGlobalParams().tm;
                            ["ps", "fp", "fs", "dr", "ld", "fsn"].reduce(function (t, n) {
                                return t && e.hasOwnProperty(n)
                            }) && (this.isSend = !0, this.send())
                        }
                    }, t.prototype.getRts = function () {
                        var e = window.performance;
                        if (!e || !e.timing) return [];
                        var t = e.timing;
                        return [t.navigationStart, t.redirectStart, t.redirectEnd, t.fetchStart, t.domainLookupStart, t.domainLookupEnd, t.connectStart, t.secureConnectionStart, t.connectEnd, t.requestStart, t.responseStart, t.unloadEventStart, t.unloadEventEnd, t.responseEnd, t.domLoading, t.domInteractive, t.domContentLoadedEventStart, t.domContentLoadedEventEnd, t.domComplete, t.loadEventStart, t.loadEventEnd]
                    }, t.prototype.getGlobalParams = function () {
                        var e = {cfg: {}, tm: {}};
                        return (window._plt = window._plt || []).forEach(function (t) {
                            var n = t[0], i = t[1], a = t[2], o = e[n];
                            o && !o[i] && (o[i] = a)
                        }), e
                    }, t.prototype.getWebviewRts = function () {
                        return new l.a(function (e) {
                            if (!m.b.isNativePlatform() || f.a.compareVersion(m.b.getAppVersion(), "4.16.0") < 0) return e([]);
                            var t = function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                return e(t.webViewRefresh ? [] : [t.webviewInit, t.webviewSetUrl, t.webviewLoadStart, t.webviewLoadEnd, t.webviewFirstPaint].map(function (e) {
                                    return +e || 0
                                }))
                            };
                            h.a.callNative("WebScene", "getTiming", {}, t, t)
                        })
                    }, t.prototype.getCustomizedRts = function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = 0, n = 0,
                            i = window.performance;
                        if (i && i.getEntriesByName) {
                            var a = i.timing.navigationStart, o = i.getEntriesByName("first-paint")[0],
                                r = i.getEntriesByName("first-contentful-paint")[0];
                            o && (t = o.startTime + a), r && (n = r.startTime + a)
                        }
                        return [e.ps, e.fp, e.fs, e.dr, e.ld, e.fsn, t, n].map(function (e) {
                            return +parseInt(e, 10) || 0
                        })
                    }, t.prototype.getNetWorkType = function () {
                        var e = "unknown";
                        return new l.a(function (t, n) {
                            if (window.WeixinJSBridge && window.wx && wx.getNetworkType) wx.ready(function () {
                                wx.getNetworkType({
                                    success: function (n) {
                                        n && n.networkType && (e = n.networkType), t(e)
                                    }, fail: function () {
                                        t(e)
                                    }
                                })
                            }); else if (m.b.isNativePlatform() && f.a.compareVersion(m.b.getAppVersion(), "4.10.0") > 0) {
                                var i = function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return t(e.network_type)
                                };
                                h.a.callNative("AMNetwork", "info", {}, i, i)
                            } else navigator && navigator.connection && (e = navigator.connection.type || "unknown"), t(e)
                        })
                    }, t.prototype.getAssetsId = function () {
                        var e = [["script", function (e) {
                            return e.src || ""
                        }], ["link", function (e) {
                            return "stylesheet" === e.rel && e.href || ""
                        }]].map(function (e) {
                            return v.apply(document.getElementsByTagName(e[0])).map(e[1]).join("")
                        });
                        return Object(p.a)(e.join(""))
                    }, t.prototype.isNewVersion = function () {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        var e = this.getAssetsId();
                        if (e) {
                            var t = location.pathname, n = localStorage.getItem("pdd_build_version");
                            try {
                                n = JSON.parse(n) || {}
                            } catch (e) {
                                n = {}
                            }
                            var i = e === n[t];
                            return i || (n[t] = e, localStorage.setItem("pdd_build_version", r()(n))), !i
                        }
                        return !1
                    }, t.prototype.send = function () {
                        var t = this;
                        if (this.data.d.pn) {
                            var n = this, i = this.getGlobalParams();
                            l.a.all([n.getNetWorkType(), n.getWebviewRts()]).then(function (o) {
                                var s = o[0], l = o[1], c = n.data.d;
                                c.n = "number" == typeof s ? s : g[s] || 0, c.wrts = l, c.crts = t.getCustomizedRts(i.tm), c.nv = t.isNewVersion();
                                var d = {
                                    method: "POST",
                                    body: r()(n.data),
                                    data: r()(n.data),
                                    headers: {"Content-Type": "application/json;charset=UTF-8"},
                                    credentials: "include"
                                }, u = "/api/cmt/ua_performance", p = "https://cmtw.pinduoduo.com" + u;
                                location.hostname.indexOf("hutaojie.com") >= 0 && (p = "http://cmt-gateway-api.infra.a.test.yiran.com" + u), m.b.isNativePlatform() ? (a()(d, {url: p}), h.a.callNative("JSNetwork", "request", d)) : e(p, d)
                            })
                        }
                    }, t
                }();
            t.a = b
        }).call(this, n("BlQd"))
    }, uICl: function (e, t, n) {
    }, vhPU: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_defined.js")
    }, w2a5: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_array-includes.js")
    }, xyiK: function (e, t, n) {
    }, y3w9: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_an-object.js")
    }, yIiy: function (e, t, n) {
    }, ylqs: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_uid.js")
    }, yt8O: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/es6.array.iterator.js")
    }, zhAb: function (e, t, n) {
        e.exports = n("Xqgh")("./node_modules/core-js/modules/_object-keys-internal.js")
    }, zkLa: function (e, t, n) {
    }
}, [[86, 0, 3, 2, 1]]]);