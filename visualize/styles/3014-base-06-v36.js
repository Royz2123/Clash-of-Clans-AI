function obj(n, t) {
    var r = n.substr(0, 1), u, i;
    if (r == "." || r == "#" || r == "[" || t) {
        if (n = document.querySelectorAll(n), n.length == 0) return !1;
        if (n.length == 1) return n[0];
        for (u = [], i = 0; i < n.length; i++) u.push(n[i]);
        return u
    }
    return document.getElementById(n)
}

function setWait(n, t, i, r) {
    (t = t ? t : document.body, t) && (t.wait = n, t.setAttribute("wait", n), i ? (t.wdelay = i, t.setAttribute("wdelay", n)) : n == 0 && t.wdelay && (delete t.wdelay, t.removeAttribute(
        "wdelay")), t.wtmr && clearTimeout(t.wtmr), n != 1 || t.wblock || (r = r ? r : 3e3, t.wtmr = setTimeout(function (n) {
        return function () {
            setWait(0, n)
        }
    }(t), r)))
}

function adsenseResize(n, t, i) {
    var u = document.getElementById("content"),
        r = "";
    if (u) {
        switch (parseInt(u.offsetWidth)) {
            case 768:
            case 768:
                r = i ? i.split(";") : "";
                break;
            case 450:
            case 480:
                r = n ? n.split(";") : "";
                break;
            case 300:
            case 320:
                r = t ? t.split(";") : ""
        }
        r && (google_ad_slot = r[0] + "", google_ad_width =
            parseInt(r[1]), google_ad_height = parseInt(r[2]))
    }
}

function medianetResize(n, t, i) {
    var u = document.getElementById("content"), r = "";
    if (u) {
        switch (parseInt(u.offsetWidth)) {
            case 768:
            case 768:
                r = i ? i.split(";") : "";
                break;
            case 450:
            case 480:
                r = n ? n.split(";") : "";
                break;
            case 300:
            case 320:
                r = t ? t.split(";") : ""
        }
        r && (console.log(r), medianet_crid = r[0] + "", medianet_width = parseInt(r[1]), medianet_height = parseInt(r[2]))
    }
}

function contentSize() {
    var n = document.getElementById("content");
    if (n) {
        if (parseInt(n.offsetWidth) < 450) return 2;
        if (parseInt(n.offsetWidth) < 767) return 1
    }
    return 0
}

function setAttr(n) {
    try {
        for (var t in n.attributes) (n.attributes[
            t].nodeName + "").substr(0, 2) != "on" && (n[n.attributes[t].nodeName] = n.attributes[t].nodeValue)
    } catch (i) {
    }
}

function getCookie(n) {
    for (var r = (document.cookie + "").split(";"), i, t = 0; t < r.length; t++) if (i = r[t].split(
        "="), i[0].replace(/[\s]/gi, "") == n) return i[1].replace(/[\s]/gi, "");
    return ""
}

function setCookie(n, t) {
    var i = new Date;
    i.setFullYear(i.getFullYear() + 10);
    document.cookie = n + "=" + t + "; expires=" + i.toUTCString(
    )
}

function aspError(n, t, i) {
    return n != "System.ASP_Error" && i.indexOf('<font face="Arial" size=2>') != -1 && i.indexOf("error") != -1 ? (i = i.replace(/([\<][\/]*(font|p)( face[\=][\"]Arial[\"] size[\=]2)*[\>]|^[\s]+|[\s]+$)/gi,
        "").replace(/[\s]+/gi, " "), xSend("System.ASP_Error", "loc=" + encodeURIComponent(document.location) + "&sv=" + encodeURIComponent(n) + "&dv=" + encodeURIComponent(t) + "&rv=" + encodeURIComponent(i), function () {
        }), i) :
        !1
}

function xTest() {
    return (document.location + "").indexOf("//test.") != -1
}

function iSend(n, t) {
    var i;
    if (document.trkV || (document.trkV = []), !document.trkV[t]) {
        try {
            i = new ActiveXObject("Microsoft.XMLHTTP")
        } catch (r) {
            i = new XMLHttpRequest
        }
        i.open("POST", "/code/get_data.asp?d=Inventory.Intel", !1);
        i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        i.onreadystatechange = function () {
            document.trkV[t] = !0
        }
        ;i.send("idata=" + escape(qRef + "~" + n))
    }
}

function xSend(n, t, i) {
    var r, u;
    typeof n == "string" && (n = {s: n, d: t, cb: i});
    n.stm = (new Date).getTime();
    document.xtt = 0;
    r = document.location + "";
    n.xTest = r.indexOf("//test.") !=
        -1 && !n.noLog && !document.noLog && n.s.indexOf("Facebook.Heat_save") == -1 && n.s.indexOf("System.ASP_Error") == -1;
    u = r.match(/[\&\?]fbuid[\=]([\d]+)/i);
    u && u.length && (n.uid = u[1]);
    try {
        n.objXML = new XMLHttpRequest
    } catch (f) {
        n.objXML = new ActiveXObject("Microsoft.XMLHTTP")
    }
    if (n.s = escape(n.s), n.tURL = "/api/" + n.s + (n.uid ? "&fbuid=" + n.uid : "") + "&tt=" + n.stm + (document.utf || n.utf ? "&utf=y" : ""), n.tURL = n.tURL.replace(/[\+]/gi,
        "%20"), n.fLive && r.indexOf("//test.") != -1 && (n.tURL = "//" + (document.location.host + "").replace(/test./gi, "www.") + n.tURL + "&cors=y"), n.log = function (t, i) {
        if (n.xTest) try {
            if (i && i.substr(0, 1) == "{") {
                var r = JSON.parse(
                    i);
                r ? (console.log(r), console.groupCollapsed(t), console.log(i), console.groupEnd()) : console.log(i)
            } else i && i.length > 110 ? (console.groupCollapsed(t), console.log(i), console.groupEnd()) : console.log(t + ": " + i)
        } catch (u) {
        }
    }, n.xTest) try {
        console.groupEnd();
        console.groupCollapsed("XURLVR", n.tURL);
        console.trace();
        n.start = performance.now()
    } catch (f) {
        n.log("XURLVR", n.tURL)
    }
    return n.d ? (n.log("XPOST", decodeURIComponent(
        n.d)), n.objXML.open("POST", n.tURL, n.cb ? !0 : !1), n.objXML.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), n.objXML.send(n.d)) : (n.log("XGET", decodeURIComponent(n.s)), n.objXML.open("GET",
        n.tURL, n.cb ? !0 : !1), n.objXML.send(null)), n.catchErr = function (n) {
        return function () {
            if (document.xtt = (new Date).getTime() - n.stm, n.isErr = aspError(n.s, n.d, n.objXML.responseText), n.xTest) {
                n.log("XRESP", n.objXML.responseText);
                try {
                    console.log("%d, %fms, %fkb", n.objXML.status, Math.round((performance.now() - n.start) * 1e3) / 1e3, Math.round((n.objXML.responseText + "").length * 100 / 1024) / 100);
                    console.groupEnd();
                    n.isErr && console.error(n.isErr)
                } catch (t) {
                }
            }
        }
    }(n), n.cb ? (n.cb !== !0 && (n.objXML.onreadystatechange = function (n) {
        return function () {
            n.objXML.readyState == 4 && (n.catchErr(), n.cb(n.objXML.responseText, n))
        }
    }(n)), n) : (n.catchErr(),
        n.objXML.responseText)
}

function xSave(n, t) {
    var f = "", r = 2, u = new Array(0), i;
    for ((arguments[r] + "").indexOf(";") != -1 && (u = arguments[0].split(";"), r++), i = r; i < arguments.length; i++) f += (i == r ? "" : "&") + (u[i - r] ? u[i -
    r] : "v" + (i - r + 1)) + "=" + window.encodeURIComponent(arguments[i]);
    return xSend(n, f, t)
}

function sTimeTrack(n, t) {
    document.cTime || (document.cTime = []);
    document.cTime[n + "-" + t + ":s"] = new Date;
    document.cTime[n + "-" +
    t + ":o"] = setTimeout("eTimeTrack('" + n + "','" + t + "')", 121e3)
}

function eTimeTrack(n, t) {
    if (document.cTime || (document.cTime = []), document.cTime[n + "-" + t + ":s"]) {
        clearTimeout(document.cTime[n + "-" + t + ":o"]);
        var i = (
                new Date).getTime() - document.cTime[n + "-" + t + ":s"].getTime(),
            r = "120+";
        switch (!0) {
            case i <= 1e3:
                r = "0-1";
                break;
            case i > 1e3 && i <= 5e3:
                r = "1-5";
                break;
            case i > 5e3 && i <= 1e4:
                r = "5-10";
                break;
            case i > 1e4 && i <= 3e4:
                r = "10-30";
                break;
            case i > 3e4 && i <= 6e4:
                r = "30-60";
                break;
            case i > 6e4 && i <= 12e4:
                r = "60-120"
        }
        gEvent(n + "-TIMER", t, r)
    }
}

function gEvent(n, t, i, r, u) {
    if (r = r ? r : 0, (document.location + "").indexOf("test.") != -1) return console.log("gEvent('" +
        n + "','" + t + "','" + i + "'," + r + ");", u), u && u(), !1;
    u || (u = function () {
    });
    try {
        return ga("send", "event", n, t, i, r, {hitCallback: u}), !0
    } catch (f) {
    }
    try {
        return _gaq.push(["_trackEvent", n, t, i, r]), u(), !0
    } catch (f) {
    }
    try {
        return pageTracker._trackEvent(n, t, i, r), u(), !0
    } catch (f) {
    }
    u()
}

function gEventS(n, t, i, r) {
    document.gEventT || (document.gEventT = []);
    var u = n + ":" + t + ":" + i;
    return document.gEventT[u] ? r && r() : (gEvent(n, t, i, 0, r), document.gEventT[u] =
        1), !0
}

function qsV(n, t) {
    t = t ? t : document.location + "";
    try {
        return new RegExp("[\\?\\&]" + n + "[\\=]([^\\&\\?\\=\\#]+)").exec(t)[1]
    } catch (i) {
    }
    return ""
}

function addBodyClass(n, t) {
    var i = document.body.className +
        "", r = i.replace(new RegExp("[\\s]*" + n, "gi"), ""),
        u = t + "" == "undefined" ? i.indexOf(n) == -1 : t;
    return document.body.className = r + (u ? (r ? " " : "") + n : ""), u
}

function setEvents() {
    var n = document.getElementById("top-menu"),
        t;
    n && (attachE(n, "mouseover", menuHover), attachE(n, "mouseout", menuHover));
    t = document.getElementById("top-menu-mobile");
    t && attachE(t, "change", mobileChange)
}

function evtByTag(n, t, i, r) {
    for (var f = document.getElementsByTagName(
        n), u = 0; u < f.length; u++) f[u].className == t && attachE(f[u], i, r)
}

function attachE(n, t, i) {
    var r;
    if (t != "DOMContentLoaded" || document.addEventListener || (n = window, t = "load"), typeof n == "string" && (n = obj(n)), t instanceof
    Array) {
        for (r in t) attachE(n, t[r], i);
        return
    }
    if (n instanceof Array) for (r in n) attachE(n[r], t, i); else {
        if (!n) return;
        if (t == "tclick") {
            attachE(n, "click", i);
            n.touchEvt = function (n) {
                if (document.moveing) return !1;
                i(n);
                n.preventDefault()
            };
            attachE(n, "touchstart", n.touchEvt);
            return
        }
        n.addEventListener ? n.addEventListener(t, i, !0) : n.attachEvent("on" + t, i)
    }
}

function dettachE(n, t, i) {
    var r;
    if (typeof n == "string" && (n = obj(n)),
    t instanceof Array) {
        for (r in t) dettachE(n, t[r], i);
        return
    }
    if (n instanceof Array) for (r in n) dettachE(n[r], t, i); else {
        if (!n) return;
        if (t == "tclick") {
            dettachE(n, "click", i);
            dettachE(n, "touchstart", n.touchEvt);
            return
        }
        n.attachEvent ? n.detachEvent("on" + t, i) : n.removeEventListener(t, i, !0)
    }
}

function menuHover(n) {
    var t, u, i, r;
    for (n = n ? n : event, t = n.target ? n.target : n.srcElement, u = t; t && ((t.className + "").indexOf("top-item") ==
        -1 || t.parentNode.id != "top-menu" && t.parentNode.id != "toolbar");) t = t.parentNode;
    if (!t || (i = t.getElementsByTagName("SPAN")[0], !i)) return !1;
    i.hasT || (attachE(i, "mouseup", function () {
        i.style.visibility = "hidden";
        i.style.opacity = 0;
        document.menuV = !1
    }), i.hasT = 1);
    r = n.type == "mouseover";
    i.style.visibility = r ? "visible" : "hidden";
    i.style.opacity = r ? "1" : "0";
    document.menuV = r ? i : !1
}

function menuTouch(n) {
    var t, i;
    for (n = n ? n : event,
             t = n.target ? n.target : n.srcElement; t && ((t.className + "").indexOf("top-item") == -1 || t.parentNode.id != "top-menu" && t.parentNode.id != "toolbar");) t = t.parentNode;
    if (!t || (i = t.getElementsByTagName("SPAN")[0], !i))
        return !1;
    i.style.visibility = "visible";
    i.style.opacity = "1";
    document.menuV = i
}

function menuTouchE(n) {
    var t, i;
    document.menuV && (n = n ? n : event, t = n.target ? n.target : n.srcElement, t && t.className && (t.className + "")
        .indexOf("top-item") != -1 || (n.preventDefault(), n.stopPropagation(), i = document.menuV, i.style.visibility = "hidden", i.style.opacity = "0", document.menuV = !1))
}

function mobileChange(n) {
    n = n ? n : event;
    var t = n.target ?
        n.target : n.srcElement;
    t.value && t.value != "#" && (document.location = t.value)
}

function docWait(n, t) {
    document.body.className = (document.body.className + "").replace(/[\s]*doc[\-]wait([\-][\w\d]+)*/gi, "") + (n ? "" :
        " doc-wait" + (t ? "-" + t : ""))
}

function objVis(n, t) {
    var u = window.innerHeight ? window.innerHeight : document.documentElement ? document.documentElement.clientHeight : 0,
        r = window.pageYOffset ? window.pageYOffset : Math.max(document.documentElement.scrollTop, document.body.scrollTop),
        i;
    for (myScroll && (r += 0 - myScroll.y), i = 0; n && n.tagName.toLowerCase() != "body";) i += n.offsetTop, n = n.offsetParent;
    return i > r && (!t || i < r + u)
}

function async(
    n, t, i) {
    var f = document;
    if (f.getElementById(n)) return i && i(), !1;
    var u = t.indexOf(".css") == -1 ? "script" : "link",
        r = f.createElement(u), e = f.getElementsByTagName(u)[0];
    u == "link" && (r.setAttribute("type", "text/css"),
        r.setAttribute("rel", "stylesheet"));
    r[u == "script" ? "src" : "href"] = t.substr(0, 1) == "/" || t.substr(0, 4) == "http" ? t : "//" + t;
    r.id = n;
    i && r.addEventListener("load", function (n) {
        i(null, n)
    }, !1);
    e.parentNode.insertBefore(
        r, e)
}

function asyncR(n, t, i) {
    var o, e, r, f, s, i, u;
    if (n || (n = document.asyncQ, document.asyncQ = !1), !n) return t && t(), !0;
    if (document.asyncKNTR || (document.asyncKNTR = 0, document.asyncTMR = []), i || (i = document.asyncKNTR++),
        n = n.split(";"), o = n.shift(), e = function () {
        clearTimeout(document.asyncTMR[i]);
        n.length ? asyncR(n.join(";"), t, i) : t && t()
    }, document.asyncTMR[i] = setTimeout(e, 1e4), o.indexOf(":") != -1) {
        r = o.split(":");
        f = [];
        switch (
            r[0].substr(0, 1)) {
            case".":
                if (document.getElementsByClassName) f = document.getElementsByClassName(r[0].substr(1)); else for (i = 0; i < document.all.length; i++) document.all[i].className == r[0].substr(1) && f.push(
                    document.all[i]);
                break;
            case"<":
                f = document.getElementsByTagName(r[0].substr(1));
                break;
            default:
                f.push(obj(r[0]))
        }
        if (f.length) {
            for (s = !1, i = 0; i < f.length; i++) u = f[i], u && !u.asyncLoaded && (r[1].substr(0, 1) == "/" ?
                (u.style.height == "1px" && attachE(u, "load", function () {
                    u.style.height = ""
                }), i == f.length - 1 && attachE(u, "load", e), u.src = r[1]) : xSend(r[1], 0, function (n) {
                    r[2] && (n = r[2](n));
                    u.innerHTML = n;
                    e()
                }), u.asyncLoaded = !0, s =
                !0);
            s || e()
        } else e()
    } else e();
    return !0
}

function asyncA(n, t) {
    document.asyncQ || t || attachE(window, "load", function () {
        setTimeout("asyncR()", 100)
    });
    document.asyncQ = (document.asyncQ ? document.asyncQ + ";" : "") + n
}

function asyncP(n) {
    var f, e, t;
    if (n && document.asyncQ) for (f = n.split(";"), e = f.length - 1; e >= 0; e--) {
        var o = f[e], i = document.asyncQ.split(";"), r = "", u = "";
        for (t = 0; t < i.length; t++) (i[t] + ":").split(":")[0] == o ? f.length >
        1 ? asyncR(i[t]) : r = (r ? r + ";" : "") + i[t] : u = (u ? u + ";" : "") + i[t];
        document.asyncQ = r + (!r || !u ? "" : ";") + u
    }
    return asyncR()
}

function loadTextEdit(n, t) {
    for (var r = !1, u = document.getElementsByTagName("textarea"), i = 0; i < u.length;
         i++) (u[i].className + "").indexOf("textedit") != -1 && (r = !0);
    r && async("tiny-mce", "tinymce.cachefly.net/4.2/tinymce.min.js", function (t) {
        return function () {
            loadTextEditCB(n, t)
        }
    }(t))
}

function loadTextEditCB(n,
                        t) {
    try {
        tinymce.dom.Event.domLoaded = !0
    } catch (r) {
        return !1
    }
    tinymceNImage();
    var i = {
        selector: "textarea.textedit",
        theme: "modern",
        external_plugins: {nanospell: "/nanospell/plugin.js"},
        nanospell_server: "asp",
        init_instance_callback:
        mceEditLoaded,
        forced_root_block: "div",
        image_advtab: !0,
        statusbar: !1,
        tb: ""
    };
    t && (i = copyObj(i, t));
    sys && sys.tmsg && (i.language_url = "/nanospell/lang/" + sys.tmsg.code + ".js");
    contentSize() == 0 ? (i.plugins = ["advlist autolink link nimage lists charmap print preview hr anchor pagebreak spellchecker",
        "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking", "save table contextmenu directionality emoticons template paste textcolor noneditable"], i.menubar = "edit insert view format table tools",
        i.toolbar1 = "bold italic underline | alignleft aligncenter alignright | bullist numlist outdent indent | link image media | forecolor backcolor", i.toolbar2 = "fontselect | fontsizeselect | emoticons | table" +
        i.tb) : (i.plugins = ["advlist autolink link nimage lists charmap print preview hr anchor pagebreak spellchecker", "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
        "save table contextmenu directionality emoticons template paste textcolor"], i.toolbar = "bold italic underline | bullist outdent indent | forecolor | alignleft aligncenter alignright | link image media | emoticons" +
        i.tb, i.menubar = !1);
    tinymce.init(i);
    n && n()
}

function mceEditLoaded() {
    tinyMCE.fcb && tinyMCE.fcb()
}

function randomTestVersion(n, t, i) {
    var r = getTestVersion(n), u = r;
    return r || (r = Math.floor(Math.random() * t + 1), i &&
    (u = i[r - 1]), setTestVersion(n, u)), u
}

function getTestVersion(n) {
    return localStorage.getItem(n + "-v")
}

function setTestVersion(n, t) {
    try {
        localStorage.setItem(n + "-v", t)
    } catch (i) {
    }
    try {
        _gaq.push(["_setCustomVar",
            1, n, t, 1]);
        _gaq.push(["_trackEvent", "Test", n, t])
    } catch (i) {
    }
}

function findPos(n) {
    var t = {x: 0, y: 0, sp: document.body}, i;
    if (n.offsetParent) do t.x += n.offsetLeft - n.scrollLeft, t.y += n.offsetTop - n.scrollTop, (n.scrollHeight >
        n.offsetHeight || n.scrollWidth > n.offsetWidth) && (i = getComputedStyle(n, null).overflow, i != "hidden" && i != "visible" && (t.sp = n)); while (n = n.offsetParent);
    return t
}

function isIn(n, t) {
    while (t) {
        if (t == n) return !0;
        t =
            t.parentNode
    }
    return !1
}

function stopProp(n) {
    try {
        n.stopPropagation()
    } catch (n) {
        try {
            n.cancelBubble = !0
        } catch (n) {
        }
    }
}

function jsRPT(n) {
    document.jsLog = (document.jsLog ? document.jsLog + ", " : "") + n
}

function ccInitCombo(
    n, t) {
    t.iname || (t.iname = 'cc-"+id+"-f');
    t.type || (t.type = "");
    t.innerHTML = "<div id='cc-" + n + "-inp' class='cc-combo-inp' contenteditable='true' onKeyDown='ccComboKey(event," + n + ")' onKeyUp='ccComboSearch(" + n +
        ")' onBlur='ccComboSaveList(" + n + ")'>" + (t.value ? t.value : t.defaultv ? t.defaultv : "") + "<\/div><div id='cc-" + n + "-drop' class='cc-combo-drop' tabindex=-1><div class='cc-combo-drop-i'><\/div><\/div><input id='cc-" +
        n + "-form' name=" + t.iname + " type=hidden value=''>";
    t.hideDrop = function () {
        ccObj(n).tmr = setTimeout("ccComboHideDrop(" + n + ")", 100)
    };
    t.saveList = function (t) {
        ccComboSaveList(n, t)
    };
    t.addItem = function (t, i) {
        ccComboAdd(
            n, i, t)
    };
    t.clear = function () {
        ccObj(n, "inp").innerHTML = ""
    };
    ccAttachE(ccObj(n, "inp"), "blur", function (n) {
        n = n ? n : event;
        var t = n.srcElement ? n.srcElement : n.target;
        t.className + "" == "cc-combo-drop" && t.parentNode.hideDrop(
        )
    });
    t.loaded = !0
}

function ccComboKey(n, t) {
    var i, e, u, r, f;
    if (n = n ? n : event, i = ccObj(t), (navigator.userAgent + "").indexOf("Firefox") != -1 && (e = window.getSelection(), u = e.getRangeAt(0), u.collapsed && (n.keyCode == 8 &&
    (r = u.startContainer.previousSibling, r && r.tagName == "SPAN" && r.parentNode.removeChild(r)), n.keyCode == 46 && (r = u.startContainer.nextSibling, r && r.tagName == "SPAN" && r.parentNode.removeChild(r)))), !ccObj(t, "drop").offsetWidth) return !0;
    if (n.keyCode == 9) {
        if (i.CID) {
            try {
                n.preventDefault()
            } catch (n) {
            }
            n.returnValue = !1;
            n.cancelBubble = !0;
            ccComboAdd(t, i.CID, i.CV)
        }
        return !1
    }
    if ((n.keyCode == 38 || n.keyCode == 40) && i.CID) {
        try {
            n.preventDefault(
            )
        } catch (n) {
        }
        return (n.returnValue = !1, n.cancelBubble = !0, n.keyCode == 38 && i.IDX == 0 || n.keyCode == 40 && i.IDX == i.AC.length - 1) ? !1 : (f = i.IDX + (n.keyCode == 38 ? -1 : 1), ccComboSetSel(t, f, i.AC[f][0], i.AC[f][1]), !1)
    }
    if (n.keyCode ==
        188 && i.CID && (i.AVp == i.CV || i.AVp == i.CRV)) {
        try {
            n.preventDefault()
        } catch (n) {
        }
        n.returnValue = !1;
        n.cancelBubble = !0;
        ccComboAdd(t, i.CID, i.CV)
    }
}

function ccComboSearch(n) {
    var r = ccObj(n, "inp"), i = ccObj(n), t, u, f;
    if (
        r.tagName == "DIV" && (r.value = r.innerHTML), r.value == i.defaultv) return !1;
    if (t = r.value, t = t.toLowerCase(), u = t.replace(/[\<]br[\>]/gi, " ").replace(/[\>]/gi, ",").replace(/[\,]+[\s]*/gi, ",").split(","), f = u.length ?
        u.length - 1 : 0, t = u[f], t = t.replace(/[\&]nbsp[\;]/gi, " ").replace(/^[\s]+|[\s]+$/gi, "").replace(/[\-\_\.\:\;\/]/gi, " ").replace(/([^a-zA-Z ])/gi, "").replace(/[\s]{2,}/gi, " "), t.length < 3) return ccObj(n, "drop").style.display = "none", !1;
    i.Inp = r;
    i.AVp = t;
    i.A || (i.A = []);
    i.ALL || (i.ALL = [], i.ID = []);
    i.A[t] ? ccComboSearchCB(n, t, i.A[t]) : xSend(i.src + " item|" + i.type + "|" + t.replace(/[\|]/g, ""), !1, function (i) {
        ccComboSearchCB(
            n, t, i)
    })
}

function ccComboSearchCB(n, t, i) {
    var u, o, r;
    if (!i || (u = ccObj(n), u.AV == t || !u.AVp)) return !1;
    u.A[t] = i;
    u.AV = t;
    u.AC = [];
    var h = i.split(";"), s = "", e = ccObj(n, "drop").childNodes[0], f = 0;
    for (o = 0; o < h.length; o++)
        r = h[o].split(":"), u.AC[f] = r, u.ALL[r[1]] = r[1], u.ID[r[1]] = r[0], r[2] && (u.ALL[r[2]] = r[1], u.ID[r[2]] = r[0]), f == 0 && (u.IDX = 0, u.CID = r[0], u.CV = r[1], u.CRV = r[2]), s += "<a id='cc-" + n + "-combotag-" + r[0] + "' class='cc-combo-tag" +
            (f == 0 ? " cc-combo-tag-sel" : "") + "' href='javascript:void(0);' onMouseOver=\"ccComboSetSel(" + n + "," + f + "," + r[0] + ",'" + r[1] + "','" + r[2] + '\')" onClick="ccComboAdd(' + n + "," + r[0] + ",'" + r[1] + "')\" unselectable='on' tabindex=-1>" +
            r[1] + "<\/a>", f++;
    e.innerHTML = s;
    e.parentNode.style.display = s ? "block" : "none";
    e.parentNode.style.width = u.offsetWidth - 2 + "px";
    e.style.height = f * e.childNodes[0].offsetHeight + "px"
}

function ccComboAdd(n, t, i) {
    var
        r = ccObj(n), u = ccObj(n, "inp"), l = ccObj(n, "drop"), f, c, e, o, s,
        h;
    clearTimeout(r.tmr);
    f = (u.innerHTML + "").replace(/[\&]nbsp[\;]/gi, " ").replace(/[\<][\/]span[\>]/gi, "<\/span>,").replace(/[\,]+[\s]*/gi, ", ").split(
        ",");
    c = f.length ? f.length - 1 : 0;
    f[c] = "<span contentEditable='false' unselectable='on' tabindex=-1>" + i + "<\/span>";
    e = f.join(",");
    e = e.replace(/[\,]([^\s])/gi, ", $1");
    u.innerHTML = e + ",&nbsp;";
    o = l.childNodes[0];
    o.innerHTML = "";
    o.parentNode.style.display = "none";
    r.ALL || (r.ALL = [], r.ID = []);
    t && i && (r.ID[i] = t, r.ALL[i] = i);
    document.createRange ? (s = document.createRange(), s.setStartAfter(u.childNodes[u.childNodes.length -
    1]), u.focus(), h = window.getSelection(), h.removeAllRanges(), h.addRange(s)) : setTimeout(function () {
        u.focus()
    }, 100);
    r.AVp = !1;
    ccComboSaveList(n)
}

function ccComboSetSel(n, t, i, r, u) {
    var f = ccObj(n);
    if (f.CID == i)
        return !1;
    f.CID && (ccObj(n, "combotag-" + f.CID).className = "cc-combo-tag");
    f.IDX = t;
    f.CID = i;
    f.CV = r;
    f.CRV = u;
    ccObj(n, "combotag-" + f.CID).className = "cc-combo-tag cc-combo-tag-sel"
}

function ccComboHideDrop(n) {
    ccObj(
        n, "drop").style.display = "none";
    ccComboConvertAll(n, !0)
}

function ccComboConvertAll(n, t) {
    var r = ccObj(n), f = ccObj(n, "inp"), o, i;
    if (r.ALL || (r.ALL = [], r.ID = []), i = f.innerHTML, i == r.defaultv) return !1;
    var s = i.toLowerCase(
    ).replace(/[\<][^\<\>]+[\>]/gi, ",").split(","), u = "", e = "";
    for (o = 0; o < s.length; o++) i = s[o].replace(/[\&]nbsp[\;]/gi, "").replace(/[\-\_\.\:\;\/]/gi, " ").replace(/([^a-zA-Z ])/gi, "").replace(/[\s]{2,}/gi, " ").replace(/^[\s]+|[\s]+$/gi, ""), i && (e = (e ? e + ", " : "") + (r.ALL[i] ? "<span contentEditable='false' unselectable='on' tabindex=-1>" + r.ALL[i] + "<\/span>" : i), t && !r.ALL[i] && (u = (u ? u + "," : "") + i));
    f.innerHTML = e + ((f.innerHTML +
        "").substr((f.innerHTML + "").length - 7, 7) == ",&nbsp;" ? ",&nbsp;" : "");
    t && u && xSend(r.src + "list|" + r.type + "|" + u.replace(/[\|]/g, ""), !1, function (t) {
        ccComboConvertAllCB(n, t)
    });
    ccComboSaveList(n)
}

function ccComboConvertAllCB(
    n, t) {
    var r = ccObj(n), f = t.split(";"), e = 0, u, i;
    for (r.ALL || (r.ALL = [], r.ID = []), u = 0; u < f.length; u++) i = f[u].split(":"), r.ALL[i[1]] = i[1], r.ID[i[1]] = i[0], i[2] && (r.ALL[i[2]] = i[1], r.ID[i[2]] = i[0]), e++;
    e > 0 && ccComboConvertAll(
        n)
}

function ccComboSaveList(n, t) {
    var i = ccObj(n), e = ccObj(n, "inp"), f, r, u, t;
    for (i.ALL || (i.ALL = [], i.ID = []), t ? e.innerHTML = t : t = e.innerHTML, t == i.defaultv && (rv = ""), f = t.toLowerCase().replace(/[\<][^\<\>]+[\>]/gi,
        ",").split(","), r = "", u = 0; u < f.length; u++) t = f[u].replace(/[\&]nbsp[\;]/gi, "").replace(/[\.\:\;\/]/gi, " ").replace(/([^a-zA-Z0-9\_\- ])/gi, "").replace(/[\s]{2,}/gi, " ").replace(/^[\s]+|[\s]+$/gi, ""), t && (
        r = (r ? r + "," : "") + (i.ID[t] ? "#" + i.ID[t] : t));
    document.getElementsByName(i.iname)[0].value = r
}

function ccMoneyFormat(n) {
    var t = (n + "").split(".");
    return t[0].split("").reverse().join("").replace(/([\d]{3})(?=[\d])/gi,
        "$1,").split("").reverse().join("") + "." + (t[1] ? (t[1] + "00").substr(0, 2) : "00")
}

function ccValidateE(n) {
    var r, t, i;
    return document.ccValidateO ? (r = document.ccValidateO.status == "y", n && (t = document.getElementById(
        n), i = (t.className + "").replace(/[\s]*cc[\-]validate[\-]topmsg/gi, ""), document.ccValidateO.topmsg && (t.innerHTML = document.ccValidateO.topmsg, i += " cc-validate-topmsg"), t.className = i), document.ccValidateO =
        !1, r) : !0
}

function ccValidate(n) {
    var t, u, f, i, r;
    if (document.ccValidateO || (document.ccValidateO = [], document.ccValidateO.status = "y", document.ccValidateO.topmsg = ""), t = document.ccValidateO, t.inpmsg = "", n.setA ||
    (u = n.value + "", f = n.checked, ccSetA(n), n.value = u, n.checked = f, n.setA = !0), (n.className + "").indexOf("cc-validate-err") != -1 && (n.className = (n.className + "").replace(/[\s]*cc[\-]validate[\-]err/gi, "")), n.mandatory &&
    !n.value && (t.status == "y" && (t.status = "m"), t.topmsg = "Please complete the fields marked in red below as they are mandatory", t.inpmsg = n.mmsg ? n.mmsg : "This field is mandatory"), n.format && n.value) {
        i = !1;
        n.ierr &&
        (n.ierr.style.display = "none");
        switch (n.format) {
            case"email":
                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(n.value) || (i = !0, t.inpmsg = "email address");
                break;
            case"int":
                /^([\+]|[\-])[\d]+$/i.test(n.value) ||
                (i = !0, t.inpmsg = "number");
                break;
            case"float":
                /^([\+]|[\-])[\d]+([\.][\d]+){0,1}$/i.test(n.value) || (i = !0, t.inpmsg = "number");
                break;
            case"date":
                /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/i.test(n.value) || (i = !0, t.inpmsg = "date in the format dd-mm-yyyy")
        }
        i && (t.inpmsg = n.fmsg ? n.fmsg : "Please enter a valid " + t.inpmsg, t.status = "f", t.topmsg = "The fields marked below in red have been filled out incorrectly, please fix them and try again")
    }
    return t.inpmsg && (n.className += " cc-validate-err", n.ierr || (r = document.createElement("SPAN"), r.className = "cc-validate-err-msg", n.ierr = n.parentNode.insertBefore(r, n.nextSibling)), n.ierr.innerHTML = t.inpmsg,
        n.ierr.style.display = ""), document.ccValidateO = t, t
}

function ccValidateChange(n, t) {
    var r, u, i;
    if (!t || (r = t.childNodes, !r)) return !1;
    for (u = 0; u < r.length; u++) i = r[u], ccValidateChange(n, i), (i.id + "    ").substr(
        0, 4) == n + "-" && ccAttachE(i, "blur", function () {
        ccValidate(i);
        document.ccValidateO = !1
    });
    return !0
}

function ccSaveData(n, t, i) {
    var f, u, e, r;
    if (!t || (f = t.childNodes, u = "", !f)) return "";
    for (e = 0; e < f.length; e++) if (r =
        f[e], u += ccSaveData(n, r, 1), (r.id + "-").split("-")[0] == n && (ccValidate(r), r.value + "" != "undefined")) switch ((r.type + "").toLowerCase()) {
        case"checkbox":
            u += "&" + r.id + "=" + (r.checked ? encodeURIComponent(r.value) : "")
            ;
            break;
        default:
            u += "&" + r.id + "=" + encodeURIComponent(r.value)
    }
    return i || (u + " ").substr(0, 1) != "&" || (u = u.substr(1)), u
}

function ccSaveForm(n, t, i, r, u, f) {
    i || (i = n + "-win");
    r || (r = n + "-err");
    p = ccObj(i, "m");
    u && (p = obj(
        u));
    document.ulAfter = function () {
        ccWinL(i, 0, "", function () {
            ccWinSave("E¦Save Timed Out, please try again", i, r, f)
        });
        xSend(t, ccSaveData(n, p), function (n) {
            ccWinSave(n, i, r, f)
        })
    };
    document.ulAfter()
}

function obj(
    n, t) {
    var r = n.substr(0, 1), u, i;
    if (r == "." || r == "#" || r == "[" || t) {
        if (n = document.querySelectorAll(n), n.length == 0) return !1;
        if (n.length == 1) return n[0];
        for (u = [], i = 0; i < n.length; i++) u.push(n[i]);
        return u
    }
    return document.getElementById(n)
}

function ccIE() {
    return navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.indexOf("MSIE 10.") == -1
}

function ccObj(n, t) {
    return !t || t == "m" ? document.ccID[n] : document.getElementById(
        "cc-" + n + "-" + t)
}

function ccSetA(n) {
    var t, i;
    try {
        for (t in n.attributes) i = n.attributes[t].nodeName, (i + "").substr(0, 2) != "on" && (n[i] = n.attributes[t].nodeValue)
    } catch (r) {
    }
}

function ccFireChange(n, t) {
    var r = ccObj(
        n, "m"), i;
    r.eventType = t;
    i = r.attributes.onChange;
    i || (i = r.attributes.onchange);
    i && eval((i.nodeValue + "").replace(/this/gi, "ccObj(" + n + ",'m')"))
}

function ccXY(n) {
    if (!n.offsetX) {
        if (!n.layerX) return !1;
        n.offsetX =
            n.layerX;
        n.offsetY = n.layerY
    }
}

function ccSetE(n, t, i, r, u) {
    var o = navigator.appName == "Microsoft Internet Explorer", e, f;
    for (o || t.preventDefault(), e = ("mousemove,mouseup" + (o ? ",losecapture" : "")).split(","), f =
        0; f < e.length; f++) o ? u ? i.detachEvent("on" + e[f], r) : i.attachEvent("on" + e[f], r) : u ? document.removeEventListener(e[f], r, !0) : document.addEventListener(e[f], r, !0);
    o && (u ? i.releaseCapture() : i.setCapture());
    document.ccCap = u ? "" : n
}

function ccAttachE(n, t, i) {
    var u, r;
    if (typeof n == "string") for (u = document.querySelectorAll(n), r = 0; r < u.length; r++) u[r].attachEvent ? u[r].attachEvent("on" + t, i) : u[r].addEventListener(t, i, !0); else
        n.attachEvent ? n.attachEvent("on" + t, i) : n.addEventListener(t, i, !0)
}

function ccDettachE(n, t, i) {
    n.attachEvent ? n.detachEvent("on" + t, i) : n.removeEventListener(t, i, !0)
}

function ccScrollXY() {
    var n = [];
    return n.y = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop, n.x = document.body.scrollLeft ? document.body.scrollLeft : document.documentElement.scrollLeft, n.y = n.y ? n.y : 0, n.x = n.x ? n.x :
        0, n
}

function ccClassToggle(n, t, i) {
    var r = n.className ? n.className + "" : "",
        u = r.replace(new RegExp("[\\s]*" + t, "gi"), ""),
        f = i + "" == "undefined" ? r.indexOf(t) == -1 : i;
    return n.className = u + (f ? (u ? " " : "") + t : ""), f
}

function ccClassAdd(
    n, t) {
    ccClassToggle(n, t, 1)
}

function ccClassDel(n, t) {
    ccClassToggle(n, t, 0)
}

function controlLoad() {
    var i = document.getElementsByTagName("DIV"), t = [], r, n;
    for (document.ccK || (document.ccK = 0, document.ccID = []), n =
        0; n < i.length; n++) r = (i[n].className + "-").split("-"), r[0] == "control" && (t[t.length] = i[n]);
    for (n = 0; n < t.length; n++) controlInit(t[n])
}

function controlInit(n) {
    if (n.ccSet || (ccSetA(n), document.ccK++, n.ccID = document.ccK, n.ccType = n.className.split("-")[1].split(" ")[0], document.ccID[n.ccID] = n, n.ccname && (document.ccID[n.ccname] = n), n.ccSet = !0), (n.offsetWidth > 0 || n.ccType == "win") && !n.loaded) switch (n.ccType) {
        case"colour":
            ccInitColour(n.ccID, n);
            break;
        case"cbtn":
            ccInitColourBtn(n.ccID, n);
            break;
        case"slider":
            ccInitSlider(n.ccID, n);
            break;
        case"btn":
            ccInitButton(n.ccID, n);
            break;
        case"menu":
            ccInitMenu(n.ccID, n);
            break;
        case"win":
            ccInitWin(n.ccID);
            break;
        case"tabs":
            ccInitTabs(n.ccID, n);
            break;
        case"combo":
            ccInitCombo(n.ccID, n);
            break;
        case"troopcalc":
            ccInitTroopcalc(n.ccID, n);
            break;
        case"grid":
            ccInitGrid(n.ccID, n);
            break;
        default:
            eval(
                "ccInit" + n.ccType.substr(0, 1).toUpperCase() + n.ccType.substr(1).toLowerCase() + "(" + n.ccID + ",i)")
    }
}

function controlFirstLoad() {
    document.controlLoaded || (document.controlLoaded = !0, controlLoad())
}

function ccInitTabs(
    n, t) {
    var r, f, c, l, s, v, e, i, h, u, a;
    if (!t.loaded) {
        ccTabSetEvents(t);
        document.tabsIDX || (document.tabsIDX = 0);
        t.tabsIDX = document.tabsIDX;
        document.tabsIDX++;
        r = t.getElementsByTagName("DIV");
        t.tabs = [];
        t.names = [];
        var o = 0, p = r[0].offestHeight, y = document.createElement("DIV");
        for (y.className = "cc-tabs-f", y = t.appendChild(y), f = document.createElement("DIV"), f.className = "cc-tabs-b", f.style.height = p + "px", f.style.visibility =
            "hidden", f = t.insertBefore(f, t.childNodes[0]), c = document.createElement("DIV"), c.className = "cc-tabs-h", c = t.insertBefore(c, t.childNodes[0]), l = (document.location + "#").split("#")[1].split("_"), i = 0; i < l.length;
             i++) e = l[i].split("-"), e[0] == "tab" && t.tabsIDX == (e[2] ? e[2] - 1 : 0) && (o = parseInt(e[1]) - 1);
        for (i = 0; i < r.length; i++) if (ccSetA(r[i]), ccTabSetEvents(r[i]), r[i].tab && (f.appendChild(r[i]), s = t.tabs.length, t.tabs[s] =
            r[i], r[i].idx = s, t.names[r[i].tab] = s, r[i].tab && !o)) for (v = 0; v < l.length; v++) e = l[v].split("-"), e[0] + "" == (r[i].tab + "").replace(/[\s\-]+/gi, "") && t.tabsIDX == (e[1] ? e[1] - 1 : 0) && (t.byname = !0, o = s);
        for ((o >= t.tabs.length || o == t.names["+"]) && (o = 0, t.cIDX = 0, ccTabHash(n)), i = 0; i < t.tabs.length; i++) h = t.tabs[i], u = document.createElement("DIV"), u.className = "cc-tab-n", u.ccID = n, u.tb = h, u.idx = i, u.innerHTML = h.tab, ccAttachE(u, "click",
            function (n, t) {
                return function () {
                    ccTabClick(n, t)
                }
            }(n, i)), u = c.appendChild(u), h.h = u, ccClassAdd(h, "cc-tab"), ccClassAdd(h, "cc-t" + i), i == o && (ccClassAdd(u, "cc-tab-sel"), ccClassAdd(h, "cc-tab-sel"));
        t.cIDX = o;
        a =
            t.tabs[o];
        a.ontab && (a.ontab(s) || (t.cIDX = 0));
        a.aftertab && a.aftertab(s);
        t.aftertab && t.aftertab(s);
        t.tabClick = function (t, i) {
            ccTabClick(n, t, i)
        };
        t.tabNext = function (t, i, r) {
            ccTabClick(n, t, i, r)
        };
        f.style.height =
            "";
        f.style.minHeight = "";
        f.style.visibility = ""
    }
    return t.loaded = !0, t
}

function ccTabSetEvents(n) {
    for (var u = ["onTab", "afterTab"], r, t, i = 0; i < u.length; i++) if (r = u[i], t = u[i].toLowerCase(), n.attributes[r] || n.attributes[
        t]) {
        n[t + "v"] = n.attributes[r] ? n.attributes[r].nodeValue : n.attributes[t].nodeValue;
        switch (t) {
            case"ontab":
                n[t] = function () {
                    return eval(this.ontabv)
                };
                break;
            case"aftertab":
                n[t] = function () {
                    return eval(this.aftertabv)
                }
        }
    }
}

function ccTabClick(n, t, i, r) {
    var u = document.ccID[n], f, e;
    if ((t != parseInt(t) + "" && (t = u.names[t]), f = u.tabs[t], f.ontab && !i && !f.ontab(t)) || u.ontab && !i && !u.ontab(t)) return !1;
    clearTimeout(u.btmr);
    e = u.childNodes[
        1];
    ccClassAdd(e, "cc-tabs-m");
    e.style.height = e.offsetHeight + "px";
    u.btmr = setTimeout(function () {
        ccClassDel(e, "cc-tabs-m");
        e.style.height = "auto"
    }, 400);
    u.last && ccClassDel(u.last, "cc-tab-last");
    ccClassDel(u.tabs[u.cIDX].h, "cc-tab-sel");
    ccClassDel(u.tabs[u.cIDX], "cc-tab-sel");
    ccClassAdd(u.tabs[u.cIDX], "cc-tab-last");
    u.last = u.tabs[u.cIDX];
    u.className = (u.className ? u.className + "" : "").replace(/[\s]*cc[\-]tab[\-][rl\d]+/gi,
        "") + " cc-tab-" + t + (t == u.cIDX || r ? "" : u.cIDX < t ? " cc-tab-r" : " cc-tab-l");
    u.cIDX = t;
    u.setAttribute("tn", f.getAttribute("tab"));
    u.setAttribute("tidx", t);
    document.body.setAttribute("tn-" + n, f.getAttribute("tab"));
    document.body.setAttribute("tidx-" + n, t);
    ccClassAdd(f.h, "cc-tab-sel");
    ccClassAdd(f.h, "cc-tab-anim-end");
    ccClassAdd(f, "cc-tab-sel");
    ccTabHash(n);
    u.tnCB && u.tnCB(ccTabNext(n, -1, 0, 1), ccTabNext(n, 1, 0, 1));
    u.aftertab && !i && setTimeout(function () {
        u.aftertab(t)
    }, 301);
    f.aftertab && !i && setTimeout(function () {
        f.aftertab(t)
    }, 301)
}

function ccTabHash(n) {
    var i = document.ccID[n], r = i.cIDX, t;
    i.nohash || (t = (document.location +
        "#").split("#")[1], i.byname ? (t = t.replace(new RegExp("(^|[\\_])[\\w\\d]+" + (i.tabsIDX ? "[\\-]" + (i.tabsIDX + 1) : "([\\s]*|[\\-][01])") + "(?=[_]|$)", "gi"), ""), t.substr(0, 1) == "_" && (t = t.substr(1)), t = (t ? t + "_" : "")
        + i.tabs[r].tab + (i.tabsIDX ? "-" + (i.tabsIDX + 1) : "")) : (t = t.replace(new RegExp("(^|[\\_])tab[\\-][\\d]+" + (i.tabsIDX ? "[\\-]" + (i.tabsIDX + 1) : "([\\s]*|[\\-][01])") + "(?=[_]|$)", "gi"), ""), t.substr(0, 5) == "_tab-" &&
    (t = t.substr(1)), t = (t ? t + "_" : "") + "tab-" + (r + 1) + (i.tabsIDX ? "-" + (i.tabsIDX + 1) : "")), document.location = (document.location + "#").split("#")[0] + "#" + t)
}

function ccTabAdd(n, t) {
    var f = document.ccID[n], u, i, r;
    return n =
        f.ccID, u = f.tabs.length, f.names[t] = u, i = document.createElement("DIV"), i.tab = t, i.idx = u, i.className = "cc-tab cc-t" + u, i = f.childNodes[1].appendChild(i), r = document.createElement("A"), r.className = "cc-tab-n", r.idx = u, r.innerHTML = t, r.href = "javascript:void(0);", ccAttachE(r, "click", function (n, t) {
        return function () {
            ccTabClick(n, t)
        }
    }(n, u)), r = f.childNodes[0].appendChild(r), i.h = r, f.tabs[u] = i, i
}

function ccTabNext(n, t,
                   i, r) {
    var u = document.ccID[n];
    return (i && (u.tnCB = i), u.tabs[u.cIDX + t]) ? (r || ccTabClick(n, u.cIDX + t), !0) : !1
}

function ccInitTroopcalc(n, t) {
    var u, i, r;
    if (!obj("troop-defaults")) return document.loadingDefaults ? !1 :
        (document.loadingDefaults = !0, async("troop-defaults", "www.clashofclans-tools.com/3014/defaults-min.js?v=1", controlLoad), !1);
    if (!t.loaded) {
        for (t.tmix = [{
            name: "Barb/Arch Army",
            troops: [{type: "archer", q: 110},
                {type: "barbarian", q: 110}],
            subs: [{
                name: "+Wallbreakers",
                troops: [{type: "archer", q: 100}, {
                    type: "barbarian",
                    q: 96
                }, {type: "wallbreaker", q: 24}]
            }, {
                name: "+Goblins", troops: [{type: "archer", q: 80}, {
                    type: "barbarian",
                    q: 80
                }, {type: "goblin", q: 60}]
            }]
        }, {
            name: "BAM Army",
            troops: [{type: "archer", q: 80}, {
                type: "barbarian",
                q: 60
            }, {type: "minion", q: 80}],
            subs: [{
                name: "+Wallbreakers", troops: [{type: "archer", q: 60}, {
                    type: "barbarian", q:
                        56
                }, {type: "wallbreaker", q: 24}, {type: "minion", q: 80}]
            }, {
                name: "+Goblins",
                troops: [{type: "archer", q: 60}, {
                    type: "barbarian",
                    q: 60
                }, {type: "goblin", q: 40}, {type: "minion", q: 60}]
            }]
        }, {
            name: "WAGG Army",
            troops: [{
                type:
                    "goblin", q: 136
            }, {type: "giant", q: 60}, {type: "wallbreaker", q: 24}],
            subs: [{
                name: "+Archers",
                troops: [{type: "archer", q: 80}, {
                    type: "giant",
                    q: 60
                }, {type: "wallbreaker", q: 20}, {type: "goblin", q: 60}]
            }, {
                name: "No Wallbreakers",
                troops: [{type: "goblin", q: 160}, {type: "giant", q: 60}]
            }, {
                name: "No Giants",
                troops: [{type: "goblin", q: 196}, {
                    type: "wallbreaker",
                    q: 24
                }]
            }, {
                name: "Less Goblins",
                troops: [{type: "goblin", q: 100}, {type: "giant", q: 80}, {
                    type: "wallbreaker", q: 40
                }]
            }]
        }, {
            name: "Healer/Giant Army",
            troops: [{type: "archer", q: 80}, {
                type: "healer",
                q: 14
            }, {type: "giant", q: 90}, {
                type: "wallbreaker",
                q: 20
            }, {type: "barbarian", q: 16}],
            subs: [{
                name: "No Healer",
                troops: [{type: "archer", q: 80}, {
                    type: "giant",
                    q: 80
                }, {type: "wallbreaker", q: 20}, {type: "barbarian", q: 40}]
            }, {
                name: "Less Giants",
                troops: [{type: "archer", q: 80}, {
                    type: "healer",
                    q: 14
                }, {type: "giant", q: 60}, {
                    type: "wallbreaker",
                    q: 20
                }, {type: "barbarian", q: 46}]
            }]
        }, {
            name: "GoWiPe Army",
            troops: [{type: "wizard", q: 15}, {
                type: "golem",
                q: 60
            }, {type: "pekka", q: 100}],
            subs: [{
                name: "Economy GoWiPe",
                troops: [{type: "wizard", q: 20}, {type: "golem", q: 30},
                    {type: "giant", q: 85}, {type: "pekka", q: 25}]
            }, {
                name: "More Wizards",
                troops: [{type: "wizard", q: 35}, {
                    type: "golem",
                    q: 30
                }, {type: "pekka", q: 50}]
            }]
        }, {
            name: "Dragons+ Army", troops: [{type: "dragon", q: 220}], subs: [{
                name:
                    "Dragon/Archer",
                troops: [{type: "dragon", q: 160}, {type: "archer", q: 86}]
            }, {
                name: "Dragon/Giant",
                troops: [{type: "dragon", q: 160}, {type: "giant", q: 12}]
            }, {
                name: "Dragon/Wizard", troops: [{type: "dragon", q: 160}, {
                    type:
                        "wizard", q: 15
                }]
            }, {
                name: "Dragon/Minion",
                troops: [{type: "dragon", q: 160}, {type: "minion", q: 30}]
            }, {
                name: "Dragon/Balloon",
                troops: [{type: "dragon", q: 160}, {type: "balloon", q: 12}]
            }]
        }, {
            name: "Witch Wipeout Army",
            space:
                240,
            troops: [{type: "witch", q: 240}],
            subs: [{
                name: "Witch/Giant",
                troops: [{type: "witch", q: 180}, {type: "giant", q: 40}]
            }]
        }, {
            name: "Your Custom Armies",
            troops: !1,
            subs: []
        }], t.mixv && (u = JSON.parse(t.mixv), t.tmix = t.tmix.concat(u)), t.mix || (t.mix = localStorage.getItem("troop-calc-mix"), t.mix || (t.mix = t.tmix[0].name)), t.th || (t.th = localStorage.getItem("troop-calc-th"), t.th || (t.th = 9)), i = "", i += "<div id='cc-" + n + "-m' class='troop-distribution'>",
                 i += "    <div class='troop-th'><div class='troop-th-n'>Troop Mix:<\/div><select id='cc-" + n + "-mix' onChange='ccTroopMixSel(" + n + ",this.value)' class='troop-th-v'>", r = 0; r < t.tmix.length; r++) t.tmix[r].name ==
        t.mix && (t.mixIDX = r), i += "<option " + (t.tmix[r].name == t.mix ? " SELECTED" : "") + " value=" + r + ">" + t.tmix[r].name + "<\/option>";
        for (i += "    <\/select><\/div>", i += "    <div class='troop-th'><div class='troop-th-n'>Variation:<\/div><select id='cc-" +
            n + "-subs' onChange='ccTroopMixSubSel(" + n + ",this.value)' class='troop-th-v'><\/select><\/div>", i += "    <div class='troop-th'><div class='troop-th-n'>Upgrade Levels:<\/div><select id='cc-" + n + "-th' onChange='ccTroopLevelSel(" +
            n + ",this.value)' class='troop-th-v'><option value='c'>Your Current Layout<\/option>", r = 1; r < 11; r++) i += "<option " + (t.th == r ? " SELECTED" : "") + " value=" + r + ">Townhall " + r + "<\/option>";
        i += "    <\/select><\/div>";
        i += "    <div id='cc-" + n + "-b' class='th-info'>4 Barracks / 2 Dark Barracks / 220 Spaces<\/div>";
        i += "     <div class='troops'>";
        i += "          <div class='troop-row'><div class='troop-n'> <\/div><div class='troops-t'><\/div><div class='troops-b'>B1<\/div><div class='troops-b'>B2<\/div><div class='troops-b'>B3<\/div><div class='troops-b'>B4<\/div><div class='troops-b'>D1<\/div><div class='troops-b'>D2<\/div><\/div>";
        i += "          <div id='cc-" + n + "-troops'><\/div>";
        i += "    <\/div>";
        i += "    <div class='troop-stats'>";
        i += "        <div class='troop-info'><div class='troop-info-n'>Build Time:<\/div><div id='cc-" + n + "-bt' class='troop-info-v'><\/div><\/div>";
        i += "        <div class='troop-info'><div class='troop-info-n'>Build Cost:<\/div><div id='cc-" + n + "-bc' class='troop-info-v'><\/div><\/div>";
        i += "        <div class='troop-info'><div class='troop-info-n'>Total HP:<\/div><div id='cc-" +
            n + "-hp' class='troop-info-v'><\/div><\/div>";
        i += "        <div class='troop-info'><div class='troop-info-n'>Total DPS:<\/div><div id='cc-" + n + "-dps' class='troop-info-v'><\/div><\/div>";
        i += "    <\/div>";
        i += "    <div id='cc-" + n + "-e' class='troop-edit'><a href='javascript:void(0);' onClick=\"var i=ccObj(" + n + ",'m'); ccNewArmy(" + n + ",i.tmix[i.tmix.length-1].subs[i.subIDX-1].id);\">Edit<\/a><a href='javascript:void(0);' onClick=\"var i=ccObj(" +
            n + ",'m'); ccDelArmy(" + n + ',i.tmix[i.tmix.length-1].subs[i.subIDX-1].id);">Delete<\/a><\/div>';
        i += "<\/div>";
        t.innerHTML = i;
        t.loaded = !0;
        document.troopCalcs || (document.troopCalcs = []);
        document.troopCalcs.push(
            t);
        ccTroopMixSel(n, t.mixIDX, 1)
    }
}

function ccNewArmy(n, t) {
    var s = !1, r, e, i, c, f;
    if (ccObj("troops-win", "m") ? r = obj("cc-build-army") : (ccInitWin("troops-win", "Build your Own Army", 400, 0, 0, 0, "<div id='cc-build-army'>" +
        u + "<\/div>", 1), r = obj("cc-build-army"), r.kntr = 1), t) for (e = document.carmy, i = 0; i < e.length; i++) e[i].id == parseInt(t) && (s = e[i].troops);
    var u = "", l = ["", ""], h = 0,
        o = ["Barbarian", "Archer", "Goblin", "Giant", "Wallbreaker",
            "Balloon", "Wizard", "Healer", "Dragon", "PEKKA", "Minion", "HogRider", "Valkyrie", "Golem", "Witch"];
    for (u += "<div class='troop-row troop-army-name'><div class='troop-n'>Army Name:<\/div><input id='cc-armyname' onKeyUp=\"ccSaveTroopTotal()\" onChange=\"ccSaveTroopTotal()\" value='My Custom Army " +
        obj("cc-build-army").kntr + "' type=text><\/div>", i = 0; i < o.length; i++) c = o[i].toLowerCase(), f = 0, s && (f = ccGetTroop(s, c, "q"), f = Math.floor(parseInt(f) / defaultTS["t" + c][3])), l[h] += "<div class='troop-row'><div class='troop-n'>" +
        o[i] + "s:<\/div><input id='tinp-" + o[i].toLowerCase() + "' onKeyUp=\"ccSaveTroopTotal()\" onChange=\"ccSaveTroopTotal()\" class='troop-inp' value='" + (f ? f : 0) + "' type=text><\/div>", h = h == 1 ? 0 : 1;
    u += "<div class='troop-col'>" +
        l.join("<\/div><div class='troop-col'>") + "<\/div>";
    u += "<div class='troop-btn'><div class='control-btn' type=2 onClick=\"ccSaveTroopMix()\">Save<\/div><\/div>";
    u += "<div class='troop-total'>Total: <span id='cc-trooptotal'>0<\/span> / <span id='cc-troopspace'>220<\/span><\/div>";
    r.innerHTML = u;
    r.cc = n;
    r.sid = t ? t : 0;
    obj("cc-troopspace").innerHTML = statsV.armyspace ? statsV.armyspace : 220;
    ccSaveTroopTotal();
    ccWinS("troops-win")
}

function ccDelArmy(n, t) {
    confirm("Are your sure you wish to delete this army?") &&
    (ccWinS("wait-win"), xSend("Clash.Delete_Army " + t, 0, function (t) {
        ccDelArmyCB(t, n)
    }))
}

function ccDelArmyCB(n, t) {
    var i, u, r, f;
    if (ccWinH("wait-win"), n = (n + ";").split(";"), n[0] == "Y") {
        for (i = document.carmy, u = -1,
                 r = 0; r < i.length; r++) i[r].id == parseInt(n[1]) && (u = r);
        u != -1 && (i.splice(u, 1), document.carmy = i);
        document.carmy.length >= 1 ? (f = ccObj(t, "m"), f.subIDX = 1, ccTroopMixSel(t, f.tmix.length - 1)) : (ccObj(t, "mix").value = 1,
            ccTroopMixSel(t, 1))
    } else alert(n)
}

function ccGetTroop(n, t, i) {
    if (!n) return "";
    for (var r = 0; r < n.length; r++) if (n[r].type == t) return n[r][i];
    return ""
}

function ccSaveTroopTotal() {
    var n = obj("cc-build-army"), i =
            n.getElementsByTagName("INPUT"), r = 0,
        u = parseInt(obj("cc-troopspace").innerHTML), t, f, e, o;
    for (n.armyname = (obj("cc-armyname").value + "").replace(/[\'\"]/gi, ""), n.mix = '{"name":"' + n.armyname + '","space":' + u + ',"id":' +
        n.sid + ',"troops":[', t = 0; t < i.length; t++) (i[t].id + "").indexOf("tinp-") != -1 && parseInt(i[t].value) && (f = i[t].id.split("-")[1], e = parseInt(i[t].value) * defaultTS["t" + f][3], n.mix += (r ? "," : "") + '{"type":"' + f + '","q":' +
        e + "}", r += e);
    n.mix += "]}";
    n.troopq = r;
    n.troopspace = u;
    o = obj("cc-trooptotal");
    o.innerHTML = r;
    o.parentNode.style.color = r <= u ? "" : "red"
}

function ccSaveTroopMix() {
    var n = obj("cc-build-army"), i, t;
    if (!n.armyname) return alert(
        "You must enter a name for your army"), !1;
    if (n.troopq < n.troopspace) return alert("You must fill up all " + n.troopspace + " available spaces for your army"), !1;
    if (n.troopq > n.troopspace) return alert("You have selected " +
        (n.troopq - n.troopspace) + " too many troops for the available spaces (" + n.troopspace + ")"), !1;
    for (i = document.carmy, t = 0; t < i.length; t++) if (i[t].name == n.armyname && !n.sid) if (confirm("You already have an army with this name\n\nDo you wish to save over it?"))
        n.sid = i[t].id; else return !1;
    xSend("Clash.Save_Army", "id=" + n.sid + "&n=" + window.encodeURIComponent(n.armyname) + "&army=" + window.encodeURIComponent(n.mix), ccSaveTroopMixCB);
    ccWinH("troops-win");
    ccWinS("wait-win")
}

function ccSaveTroopMixCB(n) {
    var i;
    if (n = (n + ";").split(";"), n[0] == "Y") {
        ccWinH("wait-win");
        var t = obj("cc-build-army"), r = ccObj(t.cc, "m"),
            f = JSON.parse(t.mix);
        f.id = parseInt(n[1]);
        var u = r.tmix.length - 1, e = document.carmy, o = !1;
        if (t.sid) for (i = 0; i < e.length; i++) e[i].id == t.sid && (document.carmy[i] = f, r.subIDX = i + 1, o = !0);
        o || (document.carmy = e.concat(f), r.subIDX = document.carmy.length, t.kntr = document.carmy.length + 1);
        r.tmix[
            u].subs = document.carmy;
        localStorage.setItem("troop-calc-mix-" + u, r.subIDX);
        ccObj(t.cc, "mix").value = u;
        ccTroopMixSel(t.cc, u, 1)
    }
}

function ccLoadArmy(n) {
    ccWinS("wait-win");
    xSend("Clash.Load_Army", 0, function (
        t) {
        ccLoadArmyCB(t, n)
    })
}

function ccLoadArmyCB(n, t) {
    ccWinH("wait-win");
    document.carmy = n.substr(0, 1) == "Y" ? JSON.parse("[" + n.substr(1) + "]") : [];
    t && t()
}

function ccTroopMixSel(n, t, i) {
    var r = ccObj(n, "m"), f, u;
    if (
        !r.tmix[t]) return !1;
    if (r.tmix[t].name == "Your Custom Armies") {
        if (i = 1, !document.carmy || document.carmy.length == 0) return document.carmy ? (ccObj(n, "mix").value = r.mixIDX, ccNewArmy(n), !1) : (ccLoadArmy(function () {
            ccTroopMixSel(n, t, 1)
        }), !1);
        r.tmix[t].subs = document.carmy;
        ccObj(n, "e").style.display = "block"
    }
    if (r.subIDX = localStorage.getItem("troop-calc-mix-" + t), r.subIDX = r.subIDX ? r.subIDX : r.tmix[t].troops ? 0 : 1, r.subIDX >
    r.tmix[t].subs.length && (r.subIDX = r.tmix[t].troops ? 0 : 1), f = r.tmix[t].troops ? "<option value='0'>None<\/option>" : "<option value='c'>Create New Variation...<\/option>", r.tmix[t].subs) for (u = 0; u < r.tmix[t].subs.length; u++) f += "<option" + (r.subIDX == u + 1 ? " SELECTED" : "") + " value=" + (u + 1) + ">" + r.tmix[t].subs[u].name + "<\/option>";
    ccObj(n, "subs").innerHTML = f;
    r.mixIDX = t;
    r.mix = r.tmix[t].name;
    i || localStorage.setItem("troop-calc-mix",
        r.tmix[t].name);
    ccTroopCalc(n)
}

function ccTroopMixSubSel(n, t) {
    var i = ccObj(n, "m");
    if (t == "c") return ccObj(n, "subs").value = i.subIDX ? i.subIDX : 0, ccNewArmy(n), !1;
    i.subIDX = t;
    localStorage.setItem("troop-calc-mix-" +
        i.mixIDX, t);
    ccTroopCalc(n)
}

function ccTroopLevelSel(n, t, i) {
    var r = ccObj(n, "m");
    r.pth = r.th;
    r.th = t;
    localStorage.setItem("troop-calc-th", t);
    ccTroopCalc(n);
    i || ccTroopLevelAll(n, t)
}

function ccTroopLevelAll(
    n, t) {
    var i, r;
    if (t == "c" && !document.layoutLoaded) return !1;
    for (i = 0; i < document.troopCalcs.length; i++) r = document.troopCalcs[i], n != r.ccID && (ccObj(r.ccID, "th").value = t, ccTroopLevelSel(r.ccID, t, 1))
}

function ccTroopCalc(
    n, t) {
    var o = ccObj(n, "m"), tt = "", r = o.tmix[o.mixIDX], y, ot, k, e, d, lt,
        h, st, f, ut, ht, i, w, b, a, p, s, ft, ct, u;
    if (!r && r.subs && (o.subIDX = 1), o.subIDX > 0 && (r = r.subs[o.subIDX - 1]), r || (r = o.tmix[o.mixIDX], !r && r.subs && (r = r.subs[
        0])), o.th == "c") if (document.layout) document.layoutLoaded || (document.layoutLoaded = !0, statsV.army = !1, statsV.barracks = !1, statsV.dbarracks = !1, ccLoadLayout(document.layout), statsV.lab = statsV.research ? statsV.research[1] : defaultLVL.research[statsV.th], ccTroopLevelAll(n, "c")); else return document.layoutLoading ? !1 : (document.layoutLoading = !0, ccWinS("wait-win"), xSend("Clash.Get_Default_Layout", 0, function (t) {
        ccWinH(
            "wait-win");
        t.substr(0, 1) == "Y" ? (document.layout = t.substr(1), ccTroopCalc(n)) : (alert("You must be logged in and have a current layout set to use this feature\n\nCreate your base in the Layout Builder, then go to the\npage for that layout and select 'Set as Current Layout'"),
            ccObj(n, "th").value = o.pth ? o.pth : 9)
    }), !1); else e = defaultLVL.army[o.th], statsV.army = [defaultQ.army[o.th], e, e, e, e], e = defaultLVL.barracks[o.th], statsV.barracks = [defaultQ.barracks[o.th], e, e, e, e], e = defaultLVL.dbarracks[o.th], statsV.dbarracks = [defaultQ.dbarracks[o.th], e, e, e, e], statsV.lab = defaultLVL.research[o.th];
    var nt = 0, l = statsV.barracks[0], g = statsV.dbarracks[0],
        v = [0, 0, 0, 0, 0, 0, 0], et = {d: 0, e: 0}, c = {
            ahp: 0, ghp:
                0, adps: 0, gdps: 0
        };
    for (i = 0; i < statsV.army[0]; i++) nt += defaultQ.armysize[statsV.army[i + 1]];
    for (statsV.armyspace = nt, ccObj(n, "b").innerHTML = l + " Barracks / " + g + " Dark Barracks / " + nt + " Army Size", y = nt, ot = 0, i =
        0; i < r.troops.length; i++) k = r.troops[i].isD = "minion,hogrider,valkyrie,golem,witch".indexOf(r.troops[i].type) != -1, r.space = r.space ? r.space : 220, e = r.troops[i].lvl = !defaultLVL["t" + r.troops[i].type][0] || o.th !=
    "c" ? defaultLVL["t" + r.troops[i].type][statsV.lab] : defaultLVL["t" + r.troops[i].type][0], e > 0 && (d = r.troops[i].sp = defaultTS["t" + r.troops[i].type][3], lt = nt * (r.troops[i].q / r.space), h = nt == r.space ? Math.round(lt /
        d) * d : Math.round(lt / d / (k ? g : l)) * d * (k ? g : l), d > 5 && h < d && (h = d), r.troops[i].tq = h / d, y -= h, d == 1 && ot++);
    if (y < 0) {
        for (y = 0 - y, i = r.troops.length - 1; i >= 0; i--) r.troops[i].sp == 1 && r.troops[i].tq > 0 && (y <= r.troops[i].tq ? (r.troops[
            i].tq -= y, i = -1) : (y -= r.troops[i].tq, r.troops[i].tq = 0));
        y = 0
    }
    if (y > 0) {
        var vt = Math.floor(y / ot), a = y % ot, p = 0;
        for (i = 0; i < r.troops.length; i++) r.troops[i].lvl > 0 && r.troops[i].sp == 1 && (r.troops[i].tq += vt + (p < a ? 1 : 0), p++)
    }
    for (st = !1, f = [{time: 0, troops: []}, {time: 0, troops: []}, {
        time: 0,
        troops: []
    }, {time: 0, troops: []}, {time: 0, troops: []}, {
        time: 0,
        troops: []
    }, {time: 0, troops: []}], i = 0; i < r.troops.length; i++) {
        w = r.troops[i].type;
        b = "t" + w;
        h = r.troops[i].tq;
        var k = r.troops[i].isD,
            it = "balloon,dragon,healer,minion".indexOf(w) != -1,
            e = r.troops[i].lvl;
        for (u = 0; u < 6; u++) f[u].troops[i] = {q: 0, t: r.troops[i]};
        if (e > 0) if (k) for (a = h % g, p = 0, u = 0; u < g; u++) s = Math.floor((h - a) / g) + (p < a ? 1 : 0), p++, f[u + 5].time += defaultTS[b][8] * s, f[u].troops[i].q = s; else for (a = h % l, p = 0, a >= l - 1 && (st = !0), u = 0; u < l; u++) s = Math.floor((h - a) / l) + (t ? u == 0 ? a : 0 : p < a ? 1 : 0), p++, s >= l - 1 && (st = !0), f[u].time +=
            defaultTS[b][8] * s, f[u].tq = h, f[u].troops[i].q = s
    }
    if (f.checkT = function () {
        var t, n;
        for (f.minT = -1, f.maxT = 0, f.minIDx = 0, f.maxIDX = 0, t = 0; t < r.troops.length; t++) for (n = 0; n < 4; n++) t == 0 && (f[n].time = 0), f[n].time += defaultTS[
        "t" + r.troops[t].type][8] * f[n].troops[t].q;
        for (n = 0; n < 4; n++) f[n].time > 0 && (f[n].time < f.minT || f.minT == -1) && (f.minT = f[n].time, f.minIDX = n), f[n].time > f.maxT && (f.maxT = f[n].time, f.maxIDX = n);
        f.diff = f.maxT - f.minT
    }
        , t) {
        f.checkT();
        var at = 0, rt = f[0].troops.length - 2, yt = -1, pt = -1;
        for (i = 0; i < r.troops.length; i++) r.troops[i].checked = 0;
        while (at < 100 && f.diff > 30) {
            if (ut = rt == 0 ? f[0].troops.length - 1 : rt, ht = f[f.maxIDX].troops[ut], ht.q >= l - 1 && r.troops[ut].checked <= l + 1) {
                for (ht.q = ht.q - (l - 1), u = 0; u < l; u++) u != f.maxIDX && f[u].troops[ut].q++;
                yt = rt;
                pt = f.maxIDX;
                r.troops[ut].checked++
            } else rt--;
            rt < 0 && (at = 100);
            f.checkT();
            at++
        }
    }
    for (i = 0; i < r.troops.length; i++) {
        w = r.troops[i].type;
        b = "t" + w;
        h = r.troops[i].tq;
        var k = r.troops[i].isD,
            it = "balloon,dragon,healer,minion".indexOf(w) != -1,
            e = r.troops[i].lvl;
        if (e > 0) {
            for (tt += "<div class='troop-row'><div class='troop-n'>" +
                w.substr(0, 1).toUpperCase() + w.substr(1) + "s (L" + e + ")<\/div><div class='troops-t'>" + (h ? h : "-") + "<\/div>", a = h % l, p = 0, u = 0; u < 4; u++) s = f[u].troops[i].q, tt += "<div class='troops-b'>" + (k || u >= l ? "-" : s) + "<\/div>", k ||
            (v[u + 1] += defaultTS[b][8] * s, w != "healer" && w != "wallbreaker" && (c[(it ? "a" : "g") + "hp"] += defaultHP[b][e] * s, c[(it ? "a" : "g") + "dps"] += defaultDPS[b][e] * s));
            for (u = 0; u < 2; u++) s = Math.round(h / g), tt += "<div class='troops-b'>" +
                (!k || u >= g ? "-" : s) + "<\/div>", k && (v[u + 6] += defaultTS[b][8] * s, c[(it ? "a" : "g") + "hp"] += defaultHP[b][e] * s, c[(it ? "a" : "g") + "dps"] += defaultDPS[b][e] * s)
        }
        tt += "<\/div>";
        et[statsV.tcost["t" + r.troops[i].type][0]] += statsV.tcost["t" + r.troops[i].type][e] * h
    }
    for (ft = -1, ct = 0, u = 1; u < 7; u++) v[u] > v[0] && (v[0] = v[u]), u < 5 && (v[u] > 0 && (v[u] < ft || ft == -1) && (ft = v[u]), v[u] > ct && (ct = v[u]));
    if (ct - ft > 20 && !t && r.troops.length > 1 && st) return ccTroopCalc(
        n, 1), !1;
    ccObj(n, "bt").innerHTML = ccFormatN(v[0] / 60, "t");
    ccObj(n, "bc").innerHTML = ccFormatN(et.e) + " Elixir" + (et.d ? ", " + ccFormatN(et.d) + " Dark Elixir" : "");
    ccObj(n, "hp").innerHTML = ccFormatN(c.ahp + c.ghp) + (c.ahp ? c.ghp ? " (" + ccFormatN(c.ahp) + " Air, " + ccFormatN(c.ghp) + " G)" : " Air" : " Ground");
    ccObj(n, "dps").innerHTML = ccFormatN(c.adps + c.gdps) + (c.adps ? c.gdps ? " (" + ccFormatN(c.adps) + " Air, " + ccFormatN(c.gdps) + " G)" :
        " Air" : " Ground");
    ccObj(n, "troops").innerHTML = tt;
    ccObj(n, "e").style.display = o.mixIDX == o.tmix.length - 1 ? "block" : "none"
}

function ccFormatN(n, t) {
    var i = "";
    switch (t) {
        case"t":
            var r = 0, u = 0, f = 0;
            return r = Math.floor(
                n / 1440), u = Math.floor((n - r * 1440) / 60), f = Math.floor(n - r * 1440 - u * 60), i = r < 1 ? "" : r + " day" + (r > 1 ? "s" : ""), i += (!i || u < 1 ? "" : ", ") + (u < 1 ? "" : u + " hour" + (u > 1 ? "s" : "")), i + ((!i || f < 1 ? "" : ", ") + (f < 1 ? "" : f + " min" + (f > 1 ? "s" : "")))
        default:
            return n = Math.round(n, 0), i = (n + "").split("").reverse().join(""), i = i.replace(/([\d]{3})/g, "$1,"), i = i.split("").reverse().join(""), i.substr(0, 1) == "," && (i = i.substr(1)), i
    }
}

function ccGetBIDX() {
    for (
        var t = "cannon,archer,air,xbow,goldstorage,elixerstorage,delixerstorage,mortar,wizard,herobarbarian,heroarcher,gold,elixer,delixer,tesla,bigbomb,bomb,spring,airbomb,airmine,barracks,dbarracks,spells,townhall,research,army,builder,castle,inferno".split(","), i = {}, r, n = 0; n < t.length; n++) i["coc-" + t[n]] = n, i["B" + n] = "coc-" + t[n], r = "", ",bigbomb,bomb,spring,airbomb,airmine,".indexOf("," + t[n] + ",") != -1 && (r = "traps"), i["G" + n] = r;
    for (t = "barbarian,archer,goblin,giant,wallbreaker,balloon,wizard,healer,dragon,pekka,minion,hogrider,valkyrie,golem,lightning,healing,rage,jump".split(","), n = 0; n < t.length; n++) i["troop-" + t[n]] = n, i["T" + n] = t[n];
    return i
}

function putC(n) {
    var t = n.charCodeAt(0);
    return t > 96 ? t - 97 : t - 39
}

function ccSExpand(n) {
    return n.replace(/[a-zA-Z][\d]+/g, function (n) {
        var t = n.substr(0, 1), i = parseInt(n.substr(1));
        return Array(i + 2).join(t)
    })
}

function ccLoadLayout(n) {
    var e = ccGetBIDX(), o = 0, c, f, u, l, i, p, r, w, b, y, t;
    if (n) {
        n.substr(0, 2) == "10" ? (o = 10, n = n.substr(2)) : (o = n.substr(
            0, 1), n = n.substr(1));
        statsV.th = o;
        var s = (n + "----------").split("-"), a = ccSExpand(s[0]),
            v = ccSExpand(s[2]), h = ccSExpand(s[3]);
        if (a) for (c = a.split("_"), f = !1, v && (f = v.split("_")), t = 0; t < c.length; t++) if (u = c[t], l =
            0, u) for (i = e["B" + t].split("-")[1], p = e["G" + t], r = 0; r < u.length; r = r + 2) w = putC(u.substr(r, 1)), b = putC(u.substr(r + 1, 1)), statsV[i] || (statsV[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), statsV[i][0]++, f && (y = putC(
            f[t].substr(l, 1)), statsV[i][statsV[i][0]] = y), l++;
        if (h) for (t = 0; t < h.length - 1; t++) defaultLVL["t" + e["T" + t]][0] = putC(h.substr(t, 1))
    }
}

function mSub(n, t) {
    t || t == 0 || (t = ccClassToggle(obj("thread-" + n), "sub"));
    xSend(
        "WUsers.Thread_Subscribe+" + n + "," + (t ? 1 : 0))
}

function postPages() {
    var i = document.getElementById("post-pages"),
        n = document.getElementById("posts-end"),
        r = document.getElementById("thread-menu");
    if (i && n) {
        var t =
            n.innerHTML + "", u = 1, f = n.childNodes.length;
        f > 3 && (u = parseInt(n.childNodes[f - 2].innerHTML));
        cp = parseInt(t.replace(/^[\s\S]+<span[^<>]*>(\d+)<\/span>[\s\S]+$/gi, "$1"));
        t = t.replace(/((?:<(?:a|span)[^<>]*><\/(?:a|span)>)(?:<a[^<>]*>1<\/a>){0,1})[\s\S]*?((?:<a[^<>]*>\d+<\/a>){0,1})(<span[^<>]*>\d+<\/span>)((?:<a[^<>]*>\d+<\/a>){0,1})[\s\S]*?((?:<a[^<>]*>\d+<\/a>){0,1}<(?:a|span)[^<>]*><\/(?:a|span)>)/gi,
            "$1" + (cp > 3 ? "<span class='lt-page-link'>...<\/span>" : "") + "$2$3$4" + (cp < u - 2 ? "<span class='lt-page-link'>...<\/span>" : "") + "$5");
        i.innerHTML = t;
        r && (n.innerHTML = r.innerHTML + n.innerHTML)
    }
}

function mPost(n, t, i) {
    try {
        tinyMCE.triggerSave()
    } catch (f) {
    }
    document.mPage || (document.mPage = [], document.mPage[n] = 1);
    i && (document.mPage[n] = i);
    var r = encodeURIComponent(document.getElementById("msg-" + n).value),
        u = escape(document.getElementById("ptype-" + n).value);
    docWait(0, "m");
    xSend("WUsers.Post_Message", "pg=" + document.mPage[n] + "&thread=" + t + "&ptype=" + u + "&msg=" + r, function (t) {
        mPostCB(n, t)
    })
}

function mPostCB(n, t) {
    docWait(1);
    var i =
            document.getElementById("msg-list-" + n),
        r = document.getElementById("msg-" + n);
    t = (t + "�").split("�");
    switch (t[0]) {
        case"M":
            i.innerHTML = t[1];
            break;
        case"Y":
            r.value = "";
            try {
                tinyMCE.get("msg-" + n).setContent("")
            } catch (u) {
            }
            i.innerHTML = t[1];
            break;
        case"A":
            ccWinH("wait-win");
            objVis(i) || i.parentNode.scrollIntoView();
            i.innerHTML = t[1];
            break;
        case"E":
            alert(t[1]);
            break;
        case"T":
            ulTimeout(t[1]);
            break;
        default:
            alert("Error: Unable to complete action")
    }
    postPages()
}

function mDelete(n, t, i, r, u) {
    if (!confirm("Are you sure you wish to delete this post?")) return !1;
    document.mPage || (document.mPage = []);
    document.mPage[t] = i;
    docWait(0, "p");
    xSend("WUsers.Post_Delete",
        "postid=" + n + "&pg=" + document.mPage[t] + "&thread=" + r + "&ptype=" + u, function (n) {
            mPostCB(t, n)
        })
}

function mEdit(n, t) {
    document.mPage || (document.mPage = [], document.mPage[1] = 1);
    t && (document.mPage[1] = t);
    document.cPostId =
        n;
    document.getElementById("msg-edit").value = document.getElementById("post-" + n).innerHTML;
    try {
        tinyMCE.get("msg-edit").setContent(document.getElementById("msg-edit").value)
    } catch (i) {
    }
    ccWinS("msg-edit-win")
}

function mEditSave(n, t, i) {
    document.mPage || (document.mPage = [], document.mPage[t] = 1);
    try {
        tinyMCE.triggerSave()
    } catch (u) {
    }
    var r = encodeURIComponent(document.getElementById("msg-edit").value);
    ccWinH("msg-edit-win");
    ccWinS("wait-win");
    xSend("WUsers.Post_Edit", "postid=" + n + "&pg=" + document.mPage[t] + "&thread=" + i + "&msg=" + r, function (n) {
        mPostCB(t, n)
    })
}

function mThreadSave(n, t, i) {
    document.cThreadId = n;
    document.mPage || (document.mPage = [], document.mPage[t] = 1);
    try {
        tinyMCE.triggerSave()
    } catch (o) {
    }
    var r = encodeURIComponent(document.getElementById("thread-edit").value),
        u = encodeURIComponent(document.getElementById("thread-title").value),
        f = document.getElementById("thread-status") ? encodeURIComponent(document.getElementById("thread-status").value) : 0,
        e = encodeURIComponent(document.getElementById("post-types").value);
    ccWinH("thread-win");
    ccWinS(
        "wait-win");
    xSend("WUsers.Thread_Edit", "thread=" + (n ? n : 0) + "&pg=" + document.mPage[t] + "&ttype=" + i + "&ptype=" + e + "&title=" + u + "&status=" + f + "&msg=" + r, function (n) {
        mThreadCB(t, n)
    })
}

function mThreadCB(n, t) {
    t = (t + "�")
        .split("�");
    t[0] != "Y" && (ccWinS("thread-win"), ccWinH("wait-win"));
    switch (t[0]) {
        case"Y":
            document.location = t[1];
            break;
        case"E":
            alert(t[1]);
            break;
        case"T":
            ulTimeout(t[1]);
            break;
        default:
            alert("Error: Unable to complete action")
    }
}

function loadFB(n) {
    var i, r, t;
    if (n && (document.fbCB || (document.fbCB = []), document.fbCB === 1 ? n() : document.fbCB.push(n)), !document.fbloaded) {
        i = "en_US";
        try {
            for (r = document.head.getElementsByTagName("META"), t =
                0; t < r.length; t++) r[t].getAttribute("name") == "language" && (i = r[t].getAttribute("content"));
            document.body && document.body.getAttribute("lang") && (i = document.body.getAttribute("lang"))
        } catch (u) {
        }
        (function (n,
                   t, r) {
            var u, f = n.getElementsByTagName(t)[0];
            n.getElementById(r) || (u = n.createElement(t), u.id = r, u.src = "//connect.facebook.net/" + i + "/sdk.js", f.parentNode.insertBefore(u, f))
        })(document, "script", "facebook-jssdk");
        document.fbloaded = !0
    }
}

function checkFBCMT() {
    var n = document.querySelectorAll(".fb-comments-count"), t;
    if (n && n[0]) {
        if (!n[0].childNodes || !n[0].childNodes[0]) {
            setTimeout(checkFBCMT, 500);
            return
        }
        try {
            t = parseInt(
                n[0].childNodes[0].innerHTML);
            t != parseInt(n[0].getAttribute("q")) && qzfb.xSend("Poll.Update_Comments " + encodeURIComponent(n[0].getAttribute("data-href").split("/")[3]) + ";" + t, 0, !0)
        } catch (i) {
        }
    }
}

function ccInitWin(
    n, t, i, r, u, f, e, o, s, h) {
    var c, a, y, l, v, p, k, d, w, b;
    return document.ccID[n] ? c = document.ccID[n] : (c = document.createElement("DIV"), document.ccK++, c.ccID = document.ccK, n = n ? n : "win-" + c.ccID, c.ccName = n, c.ccType = "win",
        c.className = "control-win", c.w = i, c.h = r, c.ttl = t, c.x = u, c.y = f, c.innerHTML = e, c.modal = o, c.scrolltop = s, c.noclose = h, c = document.body.appendChild(c), document.ccID[n] = c, document.ccID[c.ccID] = c, c.ccSet = !0), c.loaded ||
    (a = c.ccID, c.value = c.innerHTML, c.innerHTML = "", y = document.createElement("DIV"), y.id = "cc-" + a + "-m", y.className = "cc-win" + (c.modal ? " cc-modal" : ""), y = c.appendChild(y), l = document.createElement("DIV"), l.id = "cc-" +
        a + "-sz", l.className = "cc-win-sz", l = y.appendChild(l), v = document.createElement("DIV"), v.id = "cc-" + a + "-n", v.className = "cc-win-n", v.innerHTML = "<a id='cc-" + a + "-close' href='javascript:void(0);' onClick='ccWinH(" +
        a + ")' class='cc-win-x'" + (c.noclose ? " style='display:none;'" : "") + ">x<\/a><span id='cc-" + a + "-n-txt' class='cc-win-n-txt'>" + c.ttl + "<\/span>", v = l.appendChild(v), p = document.createElement("DIV"), p.id = "cc-" +
        a + "-c", p.className = "cc-win-c", p.innerHTML = c.value, p = l.appendChild(p), k = document.createElement("DIV"), k.id = "cc-" + a + "-f", k.className = "cc-win-f", k = l.appendChild(k), c.drag + "" != "false" ? (ccAttachE(v, "mousedown",
        ccWinE), ccAttachE(v.childNodes[0], "mousedown", ccWinE)) : v.style.cursor = "default", l.style.height = c.h ? c.h + "px" : "auto", c.h || (c.style.visibility = "hidden", d = c.style.display, c.style.display = "block", c.h = l.offsetHeight,
        c.style.display = d, c.style.visibility = "", (!c.h || c.h < 50) && (c.h = 300)), c.p ? (c.p = document.getElementById(c.p), w = c.p.offsetWidth, b = c.p.offsetHeight) : (w = window.innerWidth ? window.innerWidth : document.body.offsetWidth,
        b = window.innerHeight ? window.innerHeight : document.body.offsetHeight, c.p = document.body), w || (w = 800), b || (b = 600), c.w || (c.w = 500), c.ttl || (c.ttl = "Window " + c.ccID), c.x || (c.x = Math.round((w - c.w) / 2)), c.y || (c.y = Math.round((b - c.h) / 2)), c.y < 0 && c.y != "auto" && (c.y = 0), c.x < 0 && c.x != "auto" && (c.x = 0), c.x != "auto" && (c.style.left = c.x + "px"), c.y != "auto" && (c.style.top = c.y + "px"), l.style.width = (c.w + "").indexOf("%") != -1 ? c.w : c.w + "px",
    (c.h + "").indexOf("%") != -1 && (l.style.height = c.h), c.obj = function (n) {
        return ccObj(a, n)
    }, (c.show || c.style.display == "block" || c.className.indexOf("cc-win-show") != -1) && (c.loaded = !0, ccWinS(a))), c.loaded = !0, c
}

function ccWinL(n, t, i, r) {
    document.emptyW || (document.emptyW = {});
    var u = n == "none" ? document.emptyW : ccObj(n, "m");
    if (!u) return !1;
    t || (t = 20);
    i || (i = "Action failed, please try again or contact us if this message persists.");
    ccWinH(n);
    u.failed = function (t) {
        var f = ccObj("wait-win", "m");
        f.tmr && clearTimeout(f.tmr);
        ccWinS("msg-win", t ? t : i, function () {
            ccWinS(n)
        });
        u.failed = !1;
        r && r()
    };
    ccWinS("wait-win", t, u.failed)
}

function ccWinMsg(
    n, t, i) {
    ccWinS("msg-win", n, function () {
        ccObj("msg-win", "m").obj("n-txt").innerHTML = "Alert";
        i && i()
    });
    t && (ccObj("msg-win", "m").obj("n-txt").innerHTML = t)
}

function ccWinF(n, t) {
    var i = n == "none" ? document.emptyW :
        ccObj(n, "m");
    if (!i) return !1;
    i.failed && (ccWinH("wait-win"), i.failed(t))
}

function ccWinH(n) {
    var t = ccObj(n, "m"), r, i, u;
    if (!t) return !1;
    if (t.msg && (t.msg.innerHTML = "", t.msg.className = "", t.msg = !1, r = ccObj(t.ccID,
        "sz"), (r.style.height + "").indexOf("px") != -1 && (r.style.height = parseInt(t.h) + "px")), t.tmr && clearTimeout(t.tmr), t.style.display == "block" && (t.style.display = ""), ccClassDel(t, "cc-win-show"), t.modal && document.ccWinM) {
        delete document.ccWinM.w[t.ccID];
        i = 0;
        for (u in document.ccWinM.w) document.ccWinM.w[u] > i && (i = document.ccWinM.w[u]);
        i ? document.ccWinM.style.zIndex = i : document.ccWinM.className = ""
    }
    t.hideCB && t.hideCB(
    )
}

function ccWinS(n, t, i) {
    var r = ccObj(n, "m"), f, u, e;
    if (r || n != "wait-win" || (r = ccInitWin("wait-win", "Please Wait...", 300, 0, 0, 0, "<div id='cc-wait'>Saving<br>Please Wait...<\/div>", 1, 0, 1), r.style.zIndex = 1003),
    r || n != "msg-win" || (r = ccInitWin("msg-win", "Alert Message", 300, 0, 0, 0, "<div id='cc-msg'><\/div><br><a id='cc-msg-ok' class='orange-btn' href=\"javascript:ccWinH('msg-win');void(0);\">OK<\/a>", 1, 0, 1), r.style.zIndex = 1003), !r) return !1;
    if (r.movexy) {
        r.w = parseInt(r.w);
        r.h = parseInt(r.h);
        try {
            t = t ? t : event
        } catch (l) {
        }
        if (t) {
            var o = document.body.scrollTop + document.documentElement.scrollTop,
                h = document.body.scrollLeft + document.documentElement.scrollLeft,
                c = t.clientX + h - r.w, s = t.clientY + o - r.h;
            t.clientY < r.h + 20 && (s = t.clientY + o);
            r.style.left = c + "px";
            r.style.top = s + "px";
            r.style.position = "absolute"
        }
    }
    return r.modal && (document.ccWinM || (
        f = document.createElement("DIV"), f.id = "cc-win-modal", f.w = [], document.ccWinM = document.body.appendChild(f)), document.ccWinM.className = "cc-modal-show", r.movexy || r.w == "auto" || (r.style.position = "fixed"), document.ccWinM.w[r.ccID] = getComputedStyle(r).zIndex - 1, document.ccWinM.style.zIndex = getComputedStyle(r).zIndex - 1), u = ccObj(r.ccID, "sz"), r.style.display == "none" && (r.style.display = ""), ccClassAdd(r, "cc-win-show"),
    r.msg && (u.style.height + "").indexOf("px") != -1 && (u.style.height = parseInt(r.h) + r.msg.offsetHeight + 30 + "px"), n == "wait-win" ? (r.tmr && clearTimeout(r.tmr), parseInt(t) && (r.tmr = setTimeout(function () {
        ccWinH("wait-win");
        i && i()
    }, parseInt(t) * 1e3))) : r.hideCB = i ? i : !1, n == "msg-win" && t && (document.getElementById("cc-msg").innerHTML = t), window.innerHeight && (e = ccObj(r.ccID, "c"), e && (e.offsetHeight > u.offsetHeight && (u.style.height =
        "auto"), e.offsetHeight > window.innerHeight && (r.style.position = "absolute")), u && (u.offsetHeight > window.innerHeight && (r.style.top = "0px", r.style.position = "absolute"), r.w > window.innerWidth && (u.style.width = window.innerWidth + "px", r.style.left = "0px"), parseInt(r.y) + u.offsetHeight > window.innerHeight && (r.style.top = "0px"), parseInt(r.w) + parseInt(r.x) > window.innerWidth && (r.style.left = "0px"))), r.scrolltop && (document.body.scrollTop = document.documentElement.scrollTop = 0), controlLoad(), r
}

function ccWinE(n) {
    var i;
    n = n ? n : event;
    ccXY(n);
    var r = n.target ? n.target : n.srcElement, u = r.id.split("-"), t = u[1];
    if (document.ccCap && (t = document.ccCap), !t) return !1;
    i = ccObj(t, "n");
    switch (n.type) {
        case"mousedown":
            i.drag = !0;
            ccSetE(t, n, i, ccWinE);
            break;
        case"mouseup":
        case"onlosecapture":
            i.drag = !1;
            ccSetE(t, n, i, ccWinE, 1);
            ccWinSE(t, n, 1);
            ccObj(t, "m").topY =
                0;
            ccFireChange(t, "win-move");
            break;
        case"mousemove":
            i.drag && ccWinSE(t, n, 1)
    }
}

function ccWinSE(n, t) {
    var r = t.offsetY, u = t.offsetX, f = t.target ? t.target : t.srcElement,
        i = ccObj(n, "m");
    (i.topY ? (r = t.clientY - i.topY,
        u = t.clientX - i.topX) : (f.id.split("-")[2] == "n" && parseInt(i.style.top) && (r = parseInt(i.style.top), u = parseInt(i.style.left)), i.topY || (i.topY = t.clientY - r, i.topX = t.clientX - u)), r != t.offsetY || u != t.offsetX) && (i.style.top = r + "px", i.style.left = u + "px")
}

function ccWinSave(n, t, i, r) {
    ccWinH("wait-win");
    var u = document.getElementById(i), f = document.ccID[t];
    u || (u = document.createElement("DIV"), u = ccObj(f.ccID, "c").insertBefore(
        u, ccObj(f.ccID, "c").childNodes[0]));
    f.msg = u;
    n = (n + "�").split("�");
    n[0] != "T" && (document.ulAfter = !1);
    switch (n[0]) {
        case"Y":
            return r && r(n), !0;
        case"A":
            return n[1] && alert(n[1]), !0;
        case"M":
            return n[1] && alert(
                n[1]), !1;
        case"E":
            u && n[1] && (u.className = "cc-msg cc-error", u.innerHTML = n[1]);
            break;
        case"T":
            if (u && n[1] && (u.className = "cc-msg cc-error", u.innerHTML = n[1]), ulTimeout(n[1] ? n[1] : "Your login has timed out, please login and try again"),
                document.ulAfter) return !1;
            break;
        default:
            u && (u.className = "cc-msg cc-error", u.innerHTML = "Error: Your details were unable to be saved, please contact us or try again later");
            console.log("ERROR: " + n)
    }
    return ccWinS(
        t), !1
}

function setWait(n, t, i, r) {
    (t = t ? t : document.body, t) && (t.wait = n, t.setAttribute("wait", n), i ? (t.wdelay = i, t.setAttribute("wdelay", n)) : n == 0 && t.wdelay && (delete t.wdelay, t.removeAttribute("wdelay")), t.wtmr &&
    clearTimeout(t.wtmr), n != 1 || t.wblock || (r = r ? r : 3e3, t.wtmr = setTimeout(function (n) {
        return function () {
            setWait(0, n)
        }
    }(t), r)))
}

function ulObj(n) {
    return document.getElementById("ul-" + n)
}

function ulHide(n) {
    var t,
        i;
    if (n = n ? n : event, t = n.target ? n.target : n.srcElement, t.id != "logo" && t.id != "header" && t.id != "ul-main") return !1;
    i = ulObj("top");
    i && i.className == "ul-login" && ulProg(1)
}

function ulShow(n, t) {
    if (document.ulWinR) {
        if (
            t) return;
        document.ulWinR("", n == 5)
    } else {
        ulLoadE();
        try {
            controlLoad()
        } catch (i) {
        }
        ulProg(n);
        ulObj("inp-em").focus()
    }
}

function ulLoadCB() {
    for (var n = 0; n < cUser.loadCB.length; n++) cUser.loadCB[n]();
    cUser.loadCB =
        []
}

function ulCopyCB(n) {
    n.loadCB || (n.loadCB = []);
    for (var t = 0; t < cUser.loadCB.length; t++) n.loadCB.push(cUser.loadCB[t]);
    return n
}

function ulLoad(n) {
    var u, f, i, r, t;
    if (!ulObj("pos")) if (r = document.createElement(
        "div"), r.id = "ul-pos", ulGetSite().notop || (r.innerHTML = "<div id='ul-main'><div id='ul-top'><div id='ul-lnk'><a href='javascript:ulShow(2);void(0);' onMouseOver='ulShow(2,1)'>Login<\/a>|<a href='javascript:void(0);' onClick='ulShow(5)'>Sign up<\/a><\/div><\/div><\/div>"),
        r = document.getElementById("main").appendChild(r), n.fbBlock && (cUser.fbBlock = 1), n.id) u = document.body.className + "", document.body.className = u.replace(/[\s]*ul[\-]in/gi, "") + (u ? " " : "") + "ul-in", ulObj("top") &&
    (ulObj("top").className = "ul-logout"), cUser = ulCopyCB(n), cUser.tz != (new Date).getTimezoneOffset() / 60 && ulTimeZone(), ulLoadE(), ulLoadCB(); else {
        for (i = document.querySelectorAll("[prnt]"), t = 0; t < i.length; t++)
            f = document.querySelectorAll(i[t].getAttribute("prnt"))[0], f && f.appendChild(i[t]);
        for (i = document.querySelectorAll("[utc-n]"), r = new Date, t = 0; t < i.length; t++) r.setServerUTC(parseFloat(i[t].getAttribute("utc-n"))),
            i[t].innerHTML = r.format(i[t].getAttribute("utc-f"))
    }
    ulNotify(cUser.nc)
}

function ulLoadE() {
    var n, t;
    !ulObj("out") && ulObj("main") && (n = document.createElement("div"), n.id = "ul-data", t = "<div id='ul-out'><span>User:<\/span><div id='ul-name'>" +
        (cUser.em ? cUser.em : "") + "<\/div><div class='ul-out-l'><a href='/Account-Home'>Account<\/a>|<a href='javascript:void(0);' onClick='ulLogout()'>Logout<\/a><\/div><\/div><div id='ul-box'><div class='ul-row'><span>Email:<\/span><input id='ul-inp-em' type=text value=''><\/div><div class='ul-row' id='ul-un'><span>Username:<\/span><input id='ul-inp-un' type=text value=''><\/div><div class='ul-row'><span>Pass:<\/span><input id='ul-inp-pw' type=password value='' onKeyUp='if(event.keyCode==13){ulSend()}'><\/div><div class='ul-row' id='ul-rp'><span>Retype Pass:<\/span><input id='ul-inp-rp' type=password value='' onKeyUp='if(event.keyCode==13){ulSend()}'><\/div><div class='ul-row'><div id='ul-btn' class='control-btn' onClick='ulSend()' type=3>Login<\/div><\/div><a class='ul-lnk-su' onClick='ulProg(1)' href='javascript:void(0);'>Cancel<\/a><\/div><div id='ul-err'>",
        t += "<div id='ul-err-msg'>Unfortunately the details you have provided are incorrect<\/div><div class='control-btn' onClick=\"ulShow((ulObj('btn').su?5:2))\" type=3>Try Again<\/div><\/div><div id='ul-prog' class='ul-prog-img'><\/div><\/div><div id='ul-notify'><\/div>",
        n.innerHTML = t, n = ulObj("top").appendChild(n))
}

function ulTimeZone() {
    xSend("WUsers.Set_TZH+" + (new Date).getTimezoneOffset() / 60, 0, function (n) {
        if (n.substr(0, 1) == "Y") {
            var t = parseInt(n.substr(1));
            cUser.tz = t;
            localStorage && localStorage.setItem("TZH", t);
            document.tzOffset = t
        } else console.log("Timezone Error", n)
    })
}

function ulLocalDate() {
    var n = new Date, t = n.getTime() / 6e4 - (n.getTimezoneOffset() + 660);
    return t / 1440 +
        25569.458333333332
}

function ulProg(n, t, i) {
    t = t ? t : 100;
    i = i ? i : "";
    var r = "ul-prog";
    switch (n) {
        case 1:
            r = "";
            break;
        case 2:
            r = "ul-login";
            ccBtnV("ul-btn" + i, "Login");
            ulObj("btn" + i).su = 0;
            break;
        case 3:
            r = "ul-logout";
            break
        case 4:
            r = "ul-err";
            break;
        case 5:
            r = "ul-signup";
            ccBtnV("ul-btn" + i, "Sign Up");
            ulObj("btn" + i).su = 1
    }
    r += i;
    ulObj("top" + i) && (ulObj("top" + i).className = r, r != "ul-prog" + i && (setTimeout("ulObj('top" + i + "').className='" +
        r + "';try{controlLoad()}catch(e){}", t), setTimeout("ulObj('top" + i + "').className='" + r + "'", t * 2)), setTimeout("ulObj('top" + i + "').scrollTop=0", t * 2 + 10))
}

function ulSource() {
    if (document.ulSourceN) return document.ulSourceN;
    var n = "PI", t = (document.location + "").toLowerCase();
    return t.indexOf("poll") != -1 && (n = "QP"), t.indexOf("quiz") != -1 && (n = "QP"), t.indexOf("quizzes") != -1 && (n = "QP"), t.indexOf("teaser") != -1 && (n = "BT"),
    t.indexOf("trainer") != -1 && (n = "GM"), t.indexOf("account-signup") != -1 && (n = "LM"), t.indexOf("clashofclans") != -1 && (n = "CL"), t.indexOf("mychallengetribe") != -1 && (n = "SI"), n
}

function ulAutoFill(n) {
    n = n ? "-" + n : "";
    xSend(
        "WUsers.AutoFill_User", "", function (n) {
            return function (t) {
                if (t.substr(0, 1) == "Y") {
                    var i = parseInt(t.substr(1));
                    ulObj("inp-em" + n) && (ulObj("inp-em" + n).value = "autofillu" + i + "@mychallengetribe.com");
                    ulObj("inp-re" +
                        n) && (ulObj("inp-re" + n).value = "autofillu" + i + "@mychallengetribe.com");
                    ulObj("inp-un" + n) && (ulObj("inp-un" + n).value = "autofillu" + i);
                    ulObj("inp-pw" + n) && (ulObj("inp-pw" + n).value = "autofill");
                    ulObj("inp-rp" + n) &&
                    (ulObj("inp-rp" + n).value = "autofill")
                }
            }
        }(n))
}

function ulWait(n, t, i, r) {
    var u = 1e3 - document.xtt;
    setTimeout(function (n, t, i, r) {
        return function () {
            r(n, t, i)
        }
    }(n, i, r, t), u < 1 ? 1 : u)
}

function ulEsc(n) {
    return escape(
        n.replace(/[\~]/gi, "@TILDA@").replace(/[\|]/gi, "@PIPE@"))
}

function ulSend(n, t, i) {
    var r, u, e, f;
    n = n ? "-" + n : "";
    r = ulObj("btn" + n);
    !i && document.loginR && (i = document.loginR);
    !t && document.ulSendV && (t = document.ulSendV);
    try {
        for (u = r; u;) u.innerHTML == "Sign Up" && (r.su = 1, r.setAttribute("su", 1)), u = u.childNodes ? u.childNodes[0] : !1
    } catch (o) {
    }
    if (gEvent("Account", "Send Data", r.su ? "Signup" : "Login"), e = "", f = "", e = ulObj("inp-un" + n) ?
        ulObj("inp-un" + n).value : (ulObj("inp-em" + n).value + "").replace(/[^a-zA-Z0-9\-\_]/g, "_"), ulObj("inp-re" + n) && r.su && ulObj("inp-re" + n).value != ulObj("inp-em" + n).value) return ulWait("You must type your email the same each time",
        ulSendCB, n, i ? i : ""), !1;
    if (ulObj("inp-rp" + n) && r.su && ulObj("inp-rp" + n).value != ulObj("inp-pw" + n).value) return ulWait("You must type your password the same each time", ulSendCB, n, i ? i : ""), !1;
    if (ulObj("inp-nn" +
        n) && r.su && (f = ulObj("inp-nn" + n).value + "", f.length < 3 || !f.split(" ")[1])) return ulWait("You must enter your full name", ulSendCB, n, i ? i : ""), !1;
    ulProg(0, 0, n);
    cUser = ulCopyCB({});
    xSend("WUsers.Login", "data=" +
        (r.su ? "S" : "L") + "~" + ulEsc(ulObj("inp-em" + n).value) + "~" + ulEsc(ulObj("inp-pw" + n).value) + "|" + ulEsc(ulObj("inp-pw" + n).value) + "~" + ulEsc(e) + "~" + ulSource() + "~" + t + "&tz=" + (new Date).getTimezoneOffset() / 60 + (f ? "&nn=" +
            encodeURIComponent(f) : ""), function (t) {
        ulWait(t, ulSendCB, n, i ? i : "")
    })
}

function ulSendCB(n, t, i) {
    var r, u;
    try {
        ccWinH("wait-win")
    } catch (f) {
    }
    try {
        setWait(0)
    } catch (f) {
    }
    if (n.substr(0, 1) == "{") {
        try {
            ulObj("inp-em" +
                t).value = "";
            ulObj("inp-pw" + t).value = ""
        } catch (f) {
        }
        ulObj("inp-rp" + t) && (ulObj("inp-rp" + t).value = "");
        r = {};
        r = JSON && JSON.parse ? JSON.parse(n) : eval("(" + n + ")");
        cUser = ulCopyCB(r);
        ulLoadE();
        ulObj("name") && (ulObj(
            "name").innerHTML = cUser.em);
        document.liHome = "";
        ulProg(3);
        t && ulProg(3, 0, t);
        u = document.body.className + "";
        document.body.className = u.replace(/[\s]*ul[\-]in/gi, "") + (u ? " " : "") + "ul-in";
        ulLoadCB();
        gEvent("Account",
            ulObj("btn" + t).su ? "Signup" : "Login", "", 0, function (n, t) {
                return function () {
                    n == "-99" && ccWinH("ul-timeout-win");
                    t && (document.location = t == "refresh" ? document.location + "" : t);
                    document.ulAfter && document.ulAfter(
                    );
                    ulNotify(cUser.nc)
                }
            }(t, i))
    } else cUser = ulCopyCB({}), ulObj("err-msg" + t).innerHTML = n, t == 1 && document.ulWinR && document.ulWinR(n, ulObj("btn" + t).su), ulProg(4, 0, t);
    document.ulResult && document.ulResult(cUser.id ? !0 : !1, n)
}

function ulLogout(n) {
    ulProg();
    var t = 0, i = 0;
    try {
        FB && (t = 1)
    } catch (r) {
    }
    try {
        GP && (i = 1)
    } catch (r) {
    }
    if (cUser.fb && t && cUser.fbS) {
        FB.logout(function (n) {
            return function () {
                cUser.fb = !1;
                ulLogout(n)
            }
        }(n));
        return
    }
    cUser.gp && i && GP.signOut();
    cUser.fb = !1;
    cUser.gp = !1;
    xSend("WUsers.Logout", !1, function (n) {
        return function (t) {
            cUser = ulCopyCB({});
            ulWait(t, ulLogoutCB);
            n && n(t == "Y")
        }
    }(n))
}

function ulLogoutCB() {
    ulSetLogout();
    var n = ulObj("top");
    document.body.getAttribute("force") && (document.location = "/")
}

function ulSetLogout() {
    ulProg(1);
    var n = document.body.className + "";
    document.body.className = n.replace(/[\s]*ul[\-]in/gi, "");
    cUser = ulCopyCB({})
}

function ulCheck(n, t) {
    if (cUser.block) {
        alert("This site is currently under maintenance,\nplease try again in 5 minutes");
        return
    }
    return cUser.id ? (n && n(), t && (document.location = t), !0) : (
        t || sysA.s ? (document.ulAfterO = {
            loc: t,
            fn: n
        }, document.ulAfter = function () {
            var n = document.ulAfterO.fn;
            n && sysA.sysCB(n);
            document.ulAfterO.loc && (document.location = document.ulAfterO.loc)
        }) : n && (document.ulAfter =
            n, document.ulResult = !1), ulTimeout("s"), !1)
}

function ulTimeout(n) {
    var i, t;
    if (ulSetLogout(), i = "", n == "s" && (i = "You must login or signup for an account before you can do this"), i = n ? i ? i : n : "Your login has timed out due to inactivity, please login below to continue",
        document.ulWinR) {
        document.ulWinR(i, n == "s");
        return
    }
    if (!document.ulTimeoutW) {
        t = document.createElement("DIV");
        t.ccname = "ul-timeout-win";
        t.ttl = n == "s" ? "Login or Signup" : "You have been logged out";
        t.className =
            "control-win ul-timeout-win";
        t.scrolltop = 1;
        t.modal = 1;
        t.w = 430;
        t.noclose = 1;
        t.innerHTML = "<div id='ul-top-99' class='ul-login-99'><div id='ul-box-99'><span id='ul-err-msg-99'><\/span><div class='ul-row'><span>Email:<\/span><input id='ul-inp-em-99' onkeyup='if(event.keyCode==13){ulSend(99)}' type=email><\/div><div class='ul-row' id='ul-un-99'><span>Username:<\/span><input id='ul-inp-un-99' onkeyup='if(event.keyCode==13){ulSend(99)}' type=text><\/div><div class='ul-row'><span>Pass:<\/span><input id='ul-inp-pw-99' onkeyup='if(event.keyCode==13){ulSend(99)}' type=password><\/div><div class='ul-row' id='ul-rp-99'><span>Retype Pass:<\/span><input id='ul-inp-rp-99' onkeyup='if(event.keyCode==13){ulSend(99)}' type=password><\/div><div id='ul-btn-99' class='control-btn' onclick='ulSend(99)' type='3'>Login<\/div><a class='ul-lnk-su' onClick=\"ulProg(5,0,'-99')\" href='javascript:void(0);'>Sign Up<\/a><a class='ul-lnk-li' onClick=\"ulProg(2,0,'-99')\" href='javascript:void(0);'>Login<\/a><\/div><div id='ul-prog-99' class='ul-prog-img'><\/div><\/div>";
        document.ulTimeoutW = document.body.appendChild(t);
        try {
            controlLoad();
            controlLoad()
        } catch (r) {
        }
    }
    document.getElementById("ul-err-msg-99").innerHTML = i;
    ccWinS("ul-timeout-win")
}

function ulSignup(n, t, i) {
    i && (document.ulAfter = i);
    ulTimeout("s");
    var r = document.ulTimeoutW;
    r.obj("close").style.display = "";
    t && (r.obj("n-txt").innerHTML = t);
    document.getElementById("ul-err-msg-99").innerHTML = n;
    ulProg(5, 0, "-99")
}

function ulNotify(
    n) {
    var t;
    if (ulDevice(), document.ulNLast = (new Date).getTime(), t = document.getElementById("ul-notify"), t || (t = document.getElementById("notify-tmp")), !t) return !1;
    t.innerHTML = n && n != 0 && n != "0" && n + "" != "undefined" &&
    n != !1 ? "<a href='javascript:void(0)' onClick='ulNotifyShow()'>" + n + "<\/a>" : "";
    ulCheckNotify()
}

function ulNotifyDelete(n) {
    xSend("WUsers.Delete_Notification " + n, 0, ulNotifyDeleteCB)
}

function ulNotifyDeleteCB(
    n) {
    n = (n + "�").split("�");
    n[0] == "Y" ? (ulNotify(n[1]), document.getElementById("user-notifications").innerHTML = n[2]) : alert("Unable to delete notification")
}

function ulCheckNotify(n) {
    var i, t;
    (!document.ulSite ||
        document.ulSite.notify) && (i = 18e4, document.ulNTmr && (clearTimeout(document.ulNTmr), document.ulNTmr = !1), t = (new Date).getTime() - (document.ulNLast ? document.ulNLast : 0), t = t < 0 ? 0 : t, t < i && !n ? document.ulNTmr = setTimeout(
        "ulCheckNotify()", i - t) : (document.ulNTmr = setTimeout("ulCheckNotify()", i), xSend("WUsers.Check_Notify", 0, ulCheckNotifyCB)))
}

function ulCheckNotifyCB(n) {
    switch ((n + " ").substr(0, 1)) {
        case"N":
            ulNotify(0);
            break
        case"Y":
            ulNotify(parseInt(n.substr(1)));
            break;
        case"R":
            ulNotify(parseInt(n.substr(1)));
            xSend("WUsers.Refresh_Login");
            break;
        default:
            clearTimeout(document.ulNTmr)
    }
}

function ulNotifyShow() {
    (document.location +
        "").indexOf("/Account-Home") == -1 ? document.location = "/Account-Home#tab-6" : xSend("WUsers.Load_Notifications", 0, ulNotifyShowCB)
}

function ulNotifyShowCB(n) {
    n = (n + "�").split("�");
    switch (n[0]) {
        case"Y":
            ulNotify(
                n[1]);
            document.getElementById("user-notifications").innerHTML = n[2];
            try {
                controlLoad()
            } catch (t) {
            }
            document.getElementById("tab-top").className = "acc-tabs t6";
            document.location = (document.location + "#").split(
                "#")[0] + "#tab-6";
            break;
        case"T":
            ulTimeout();
            break;
        default:
            alert("Unable to load notifications, please reload the page and try again")
    }
}

function ulNewPM(n, t) {
    var i = ccObj("pm-win"), r;
    i || (i = ccInitWin("pm-win",
        "Private Message", 600, 0, 0, 0, "<div class='pm-win'><div class='acc-row'><div class='acc-n'>Message To:<\/div><div class='acc-v'><div id='pm-combo' iname='pm-to' class='control-combo' src='WUsers.User_Search'><\/div><\/div><\/div><div class='acc-row'><textarea id='pm-msg' class='textedit'><\/textarea><\/div><div class='acc-row'><br><\/div><div class='acc-row'><div onClick=\"ulSendPM()\" class='control-btn' type=2>OK<\/div><div onClick=\"ccWinH('pm-win')\" class='control-btn' type=2>Cancel<\/div><\/div><\/div>",
        1, 0, 0), i.className += " pm-win-c");
    ccWinS("pm-win");
    loadTextEdit(n ? function () {
        tinymce.execCommand("mceFocus", !1, "pm-msg")
    } : !1);
    obj("pm-combo").clear();
    n && (r = (n + ";").split(";"), obj("pm-combo").addItem(r[
        0], r[1]));
    t = t ? t : "";
    obj("pm-msg").value = t;
    try {
        tinyMCE.get("pm-msg").setContent(obj("pm-msg").value);
        n && tinymce.execCommand("mceFocus", !1, "pm-msg")
    } catch (u) {
    }
}

function ulSendPM() {
    obj("pm-combo").saveList(
    );
    try {
        tinyMCE.triggerSave()
    } catch (i) {
    }
    var n = encodeURIComponent(document.getElementsByName("pm-to")[0].value),
        t = encodeURIComponent(obj("pm-msg").value);
    ccWinS("wait-win");
    xSend("WUsers.Send_PM", "pm-to=" +
        n + "&pm-msg=" + t, ulSendPMCB)
}

function ulSendPMCB(n) {
    n = (n + "�").split("�");
    ccWinH("wait-win");
    switch (n[0]) {
        case"T":
            ulTimeout();
            break;
        case"Y":
            ccWinH("pm-win");
            alert(n[1]);
            break;
        case"E":
            console.log(n);
            alert(
                n[1])
    }
}

function ulDevice() {
    var n = 0;
    return !n && hasLS() && (n = localStorage.getItem("device-id")), n || (n = getCookie("device-id")), n || document.regDeviceW || (document.regDeviceW = !0, xSend("WUsers.Register_Device " +
        (navigator ? navigator.platform : "") + ";" + screen.width + ";" + screen.height + ";" + screen.colorDepth, 0, function (t) {
        document.regDeviceW = !1;
        t.substr(0, 1) == "Y" && (n = t.split(";")[1], hasLS() && localStorage.setItem("device-id",
            n), setCookie("device-id", n))
    })), ""
}

function hasLS() {
    try {
        return "localStorage" in window && window.localStorage !== null
    } catch (n) {
        return !1
    }
}

function statusChangeCallback(n, t, i, r, u) {
    var f = !1;
    if (n.status === "connected") {
        if (cUser.fbS = n, cUser.id && !i || cUser.fbBlock) {
            setWait(0);
            return
        }
        setWait(1);
        FB.api("/me", function (n) {
            return function (f) {
                var e = function (n, t) {
                    return t = t ? t : n, "&" + n + "=" + encodeURIComponent(f[t] ? f[t] : "")
                };
                xSend(
                    "WUsers.Facebook_Login " + (!t || i ? 0 : 1) + ";" + (!i || !cUser.id ? 0 : i), "sr=" + encodeURIComponent(n.authResponse.signedRequest) + "&at=" + encodeURIComponent(n.authResponse.accessToken) + e("id") + (!t && !i ? "" : e("first_name") +
                    e("last_name") + e("gender") + e("email") + "&src=" + ulSource()) + "&sv=" + encodeURIComponent(document.ulSendV ? document.ulSendV : "") + "&tz=" + (new Date).getTimezoneOffset() / 60 + (u ? "&" + u : ""), function (n) {
                        var t, i, u;
                        setWait(
                            0);
                        n.substr(0, 1) == "{" ? ulSendCB(n, "-1") : (console.log(n), t = obj("ul-top-1"), t && (t.className = "ul-err-1"), i = n.split(":"), u = obj("ul-err-msg-1"), u && (u.innerHTML = i[0] == "E" ? i[1] : "Unable to login please try again later"),
                        document.ulResult && document.ulResult(cUser.id ? !0 : !1, n));
                        r && r(cUser.id ? !0 : !1, !0, n)
                    })
            }
        }(n))
    } else f = n.status === "not_authorized" ? !0 : !0;
    f && (cUser.fb && !cUser.fbBlock ? (setWait(1), xSend("WUsers.Is_Facebook_Signup",
        "", function (n) {
            switch (n) {
                case"N":
                    setWait(0);
                    cUser.fb = "";
                    cUser.fbBlock = 1;
                    r && r(!0, !1);
                    break;
                default:
                    document.location.reload()
            }
        })) : (setWait(0), r && r(cUser.id ? !0 : !1, !1)))
}

function checkLoginState() {
    setWait(
        1);
    FB.getLoginStatus(function (n) {
        statusChangeCallback(n, 1)
    })
}

function doFBLogin(n, t, i) {
    gEvent("Account", "Facebook Button", document.body.getAttribute("signup") + "" == "1" ? "Signup" : "Login");
    setWait(1);
    cUser.fbBlock = 0;
    FB.login(function (n, t, i) {
        return function (r) {
            statusChangeCallback(r, 1, n, t, i)
        }
    }(n, t, i), {scope: "email,public_profile"})
}

function doFBAttach(n) {
    var t = (n.className + "").indexOf("attach") != -1 ? 1 : 2;
    doFBLogin(
        t, function (n, t) {
            return function (i, r, u) {
                u.substr(0, 1) != "{" ? u.substr(0, 1) == "P" ? dettachPass(n, "Facebook") : alert(u.substr(1)) : n.className = (n.className + "").replace(/[\s]*(a|de)ttach/gi, "") + " " + (t == 1 && i ? "dettach" :
                    "attach")
            }
        }(n, t), !t || !n.pass ? "" : "pass=" + n.pass)
}

function dettachPass(n, t) {
    n.pass = "";
    sys.create({
        id: "dettachpass",
        template: "window",
        visible: 1,
        btn: n,
        title: "Choose a Password",
        msg: "You need to create a password for this account<br>before you can dettach " +
            t + " or you won't be able to login again",
        inputs: {
            dppass1: {label: "Password:", type: "password"},
            dppass2: {label: "Retype Password:", type: "password"}
        },
        okCB: function () {
            if (obj("dppass1").value.length < 6) return alert(
                "Please type a password that is at least 6 characters long"), !1;
            if (obj("dppass1").value != obj("dppass2").value) return alert("Please type your password the same twice"), !1;
            var n = sys.dettachpass.btn;
            return n.pass = obj("dppass1").value, n.click(), !0
        }
    })
}

function fbCheckPublish(n) {
    if (!document.fbInit) {
        setTimeout(function (n) {
            return function () {
                fbCheckPublish(n)
            }
        }(n), 500);
        return
    }
    FB.api("/me/permissions", function (
        n) {
        return function (t) {
            if (isG = !1, t.data) for (var i = 0; i < t.data.length; i++) t.data[i].permission == "publish_actions" && t.data[i].status == "granted" && (isG = !0);
            n(isG)
        }
    }(n))
}

function fbGetPublish(n) {
    FB.login(function (
        n) {
        return function (t) {
            t.status == "connected" ? fbCheckPublish(n) : n(!1)
        }
    }(n), {scope: "publish_actions"})
}

function loadFBSignup() {
    window.fbAsyncInit = function () {
        FB.init({
            appId: document.ulSite.fbAppId, cookie:
                !0, xfbml: !0, frictionlessRequests: !0, version: "v2.0"
        });
        FB.getLoginStatus(function (n) {
            statusChangeCallback(n, 0);
            document.fbInit = !0
        })
    }, function (n, t, i) {
        var r, u = n.getElementsByTagName(t)[0];
        n.getElementById(
            i) || (r = n.createElement(t), r.id = i, r.src = "//connect.facebook.net/en_US/sdk.js", u.parentNode.insertBefore(r, u))
    }(document, "script", "facebook-jssdk")
}

function ulFormSet(n) {
    document.body.signup = n;
    document.body.setAttribute("signup", n)
}

function ulGetSite() {
    var n = (document.location + "").split(".")[1].toLowerCase(), t = {
        "poll-maker": "614685298654342",
        "quiz-maker": "614685298654342",
        mychallengetribe: "1447460432175374",
        "clashofclans-tools": "518538828247675"
    }[n], i = {
        "poll-maker": "AIzaSyC1CpL6lwfuHPbOTvb2eq-H6RIJ4HvSvJ4",
        doquizzes: "AIzaSyCZrpvsU7Fp4ULSRqvyrDjoWW34R8AhitU",
        "quiz-maker": "AIzaSyCMiIR6f-joHQ3ZouQFDsp6oaZnXcp8bqw"
    }[
        n], u = {
        "poll-maker": "770332139225-9q1r99c8tgbqf5paqt483unhvjgar1oi",
        "quiz-maker": "542839396530-1bjke1mk7llf1fn7i5d7llhkbglcpah3",
        doquizzes: "948161007244-70n0omq03qbds8ii3bhtaomafocvv8k3"
    }[n], r = {
        fbAppId:
            t ? t : !1,
        fb: t ? !0 : !1,
        gpAppId: i ? i : !1,
        gpClientId: u ? u : !1,
        gp: i ? !0 : !1,
        notify: !1,
        notop: !0
    };
    return r.fb && loadFBSignup(), r.gp && loadGPSignup(), r
}

function loadGPSignup() {
    var n = function () {
        var n, t;
        document.getElementById(
            "google-signup") || (n = document.createElement("SCRIPT"), n.id = "google-signup", n.src = "//apis.google.com/js/api:client.js?onload=loadGBSignupCB", t = document.getElementsByTagName("SCRIPT")[0], t.parentNode.insertBefore(
            n, t))
    };
    window.addEventListener ? window.addEventListener("DOMContentLoaded", n, !0) : window.attachEvent("onload", n)
}

function loadGBSignupCB() {
    gapi.load("auth2", function () {
        var t, n;
        for (GP = gapi.auth2.init({
            client_id:
                document.ulSite.gpClientId + ".apps.googleusercontent.com",
            cookiepolicy: "single_host_origin"
        }), t = document.querySelectorAll(".gpconnect"), n = 0; n < t.length; n++) GP.attachClickHandler(t[n], {}, function (n) {
            return function (
                t) {
                var i = 0;
                (n.className + "").indexOf("attach") != -1 && (i = 1);
                (n.className + "").indexOf("dettach") != -1 && (i = 2);
                console.log(n, i);
                GP.nolisten = 1;
                googleLogin(t, document.body.getAttribute("signup") + "" == "1" && !i ? 1 :
                    0, i, function (n, t) {
                    return function (i, r, u) {
                        GP.nolisten = 0;
                        t && (u.substr(0, 1) != "{" ? u.substr(0, 1) == "P" ? dettachPass(n, "Google") : alert(u.substr(1)) : n.className = (n.className + "").replace(/[\s]*(a|de)ttach/gi, "") +
                            " " + (t == 1 && i ? "dettach" : "attach"))
                    }
                }(n, i), !i || !n.pass ? "" : "pass=" + n.pass)
            }
        }(t[n]), function (n) {
            console.log(n)
        });
        GP.currentUser.listen(function (n) {
            !GP.nolisten && n && n.getBasicProfile() && (cUser.id ? cUser.gp ==
                n.getBasicProfile().getId() : googleLogin(n, 0, 0))
        })
    })
}

function googleLogin(n, t, i, r, u) {
    setWait(1);
    xSend("WUsers.Google_Login " + (!t || i ? 0 : 1) + ";" + (!i || !cUser.id ? 0 : i), "sr=" + encodeURIComponent(n.getAuthResponse(
    ).id_token) + "&src=" + ulSource() + "&sv=" + encodeURIComponent(document.ulSendV ? document.ulSendV : "") + "&tz=" + (new Date).getTimezoneOffset() / 60 + (u ? "&" + u : ""), function (n, t, i) {
        return function (n) {
            var t, r, u;
            setWait(
                0);
            n.substr(0, 1) == "{" ? ulSendCB(n, "-1") : (console.log(n), t = obj("ul-top-1"), t && (t.className = "ul-err-1"), r = n.split(":"), u = obj("ul-err-msg-1"), u && (u.innerHTML = r[0] == "E" ? r[1] : "Unable to login please try again later"),
            document.ulResult && document.ulResult(cUser.id ? !0 : !1, n));
            i && i(cUser.id ? !0 : !1, !0, n)
        }
    }(t, i, r))
}

function ccInitButton(n, t) {
    var r, i;
    t.value = t.innerHTML;
    t.type || (t.type = 1);
    i = t.type;
    t.state = 1;
    t.innerHTML = "<a id='cc-" +
        n + "-m' class='cc-btn cc-tp-" + i + (t.sel == 2 ? " cc-btn-sel" : "") + "' href='javascript:void(0);' onClick='ccBtnE(" + n + ")'><div id='cc-" + n + "-t' class='cc-btn-i'>" + t.value + "<\/div><\/a>";
    r = Math.round((t.offsetHeight -
        t.childNodes[0].offsetHeight) / 2);
    r > 0 && (i = t.childNodes[0].childNodes[0], i.style.paddingTop = r + "px", i.style.paddingBottom = r + "px");
    t.loaded = !0
}

function ccBtnE(n) {
    var t = ccObj(n);
    t.sel && (t.sel = t.sel == 1 ? 2 : 1,
    t.loaded && (t.childNodes[0].className = "cc-btn cc-tp-" + t.type + (t.sel == 2 ? " cc-btn-sel" : "")))
}

function ccBtnSel(n, t) {
    var i = ccObj(n);
    i.sel = t;
    i.loaded && (i.childNodes[0].className = "cc-btn cc-tp-" + i.type + (i.sel ==
    2 ? " cc-btn-sel" : ""))
}

function ccBtnV(n, t) {
    var i = document.getElementById(n);
    i.loaded ? ccObj(i.ccID, "t").innerHTML = t : i.innerHTML = t
}

function soundObject(n) {
    var t = {};
    try {
        t.context = typeof AudioContext != "undefined" ?
            new AudioContext : new webkitAudioContext
    } catch (i) {
    }
    return t.buffer = [], t.srcb = [], t.sounds = {}, t.bIDX = 0, t.readyState = 0, t.loading = 0, t.muteSound = localStorage.getItem("mute-sound") == "true", t.muteMusic = localStorage.getItem("mute-music") == "true", t.loadCallback = n, t.clearTMR = function (n) {
        n.stmr && (clearTimeout(n.stmr), n.stmr = !1);
        n.etmr && (clearTimeout(n.etmr), n.etmr = !1);
        n.ltmr && (clearInterval(n.ltmr), n.ltmr = !1)
    }, t.stopItem =
        function (n, i) {
            if (t.clearTMR(n), i) n.etmr = setTimeout(function () {
                try {
                    n.pause()
                } catch (t) {
                }
                n.busy = !1
            }, i * 1e3); else {
                try {
                    n.pause()
                } catch (r) {
                }
                n.busy = !1
            }
        }, t.load = function (n, i, r) {
        var h, o, u, f, s, e;
        if (t.readyState =
            0, t.loading++, t.iKntr = 0, i.indexOf("music") == -1 && t.context) e = new XMLHttpRequest, e.open("GET", n, !0), e.responseType = "arraybuffer", e.onload = function () {
            var f, u, n, o;
            for (t.buffer[t.bIDX] = e.response, f = i.split(
                ";"), u = 0; u < f.length; u++) n = (f[u] + ",,").split(","), n[1] = n[1] ? parseFloat(n[1]) : 0, n[2] = n[2] ? parseFloat(n[2]) : 0, t.sounds[n[0]] = {
                name: n[0],
                offset: n[1],
                duration: n[2],
                bidx: t.bIDX,
                sources: [],
                sidx: 0
            };
            o = document.createElement("DIV");
            o.onclick = function () {
                t.getSrc(t.buffer[t.bIDX], function (n) {
                    n.noteGrainOn ? (n.noteGrainOn(0, 0, 0), n.noteOff(0)) : (n.start(0, 0, 0), n.stop(0))
                })
            };
            t.runClick(o);
            t.bIDX++;
            t.loading--;
            t.readyState =
                t.loading == 0 ? 2 : 1;
            r && r();
            t.loadCallback && t.readyState == 2 && t.loadCallback()
        }, e.send(); else for (h = i.split(";"), o = 0; o < h.length; o++) o > 0 && t.loading++, u = (h[o] + ",,").split(","), u[1] = u[1] ? parseFloat(u[1]) : 0, u[
            2] = u[2] ? parseFloat(u[2]) : 0, f = document.createElement("AUDIO"), f.addEventListener("loadedmetadata", function () {
            f.firstStop && (f.pause(), f.firstStop = !1);
            t.loading--;
            t.readyState = t.loading == 0 ? 2 : 1;
            r && r();
            t.loadCallback &&
            t.readyState == 2 && t.loadCallback()
        }, !0), f.src = n, f.loop = u == "music", f.idx = t.iKntr++, s = document.createElement("DIV"), s.item = f, s.addEventListener("click", function (n) {
            n = n ? n : event;
            var t = n.target ? n.target : n.srcElement;
            try {
                t.item.play()
            } catch (n) {
            }
        }), navigator.userAgent.match(/iPhone|iPod|iPad/i) && (f.firstStop = !0, t.runClick(s)), t.sounds[u[0]] = {
            name: u[0],
            offset: u[1],
            duration: u[2],
            bidx: 0,
            sources: !1,
            sidx: 0,
            item: f,
            clickitem:
            s
        }
    }, t.getSrc = function (n, i) {
        var r = t.context.createBufferSource();
        t.context.decodeAudioData ? t.context.decodeAudioData(n, function (n) {
            r.buffer = n;
            r.connect(t.context.destination);
            i(r)
        }, function () {
        }) : (r.buffer =
            t.context.createBuffer(n, !1), r.connect(t.context.destination), i(r))
    }, t.loadFiles = function (n, t, i) {
        for (var u = i.split(","), f, r = 0; r < u.length; r++) u[r] && (f = n + "/" + u[r] + (u[r].indexOf(".") == -1 ? "." + t : ""), snd.load(
            f, (u[r] + ".").split(".")[0]))
    }, t.play = function (n, i) {
        var r = t.sounds[n];
        if (!r) return console.log("sound " + n + " not found"), !1;
        if (n == "music" && t.muteMusic || n != "music" && t.muteSound) return !1;
        if (!r.sources && r.item) {
            if (r.item.busy) return !1;
            if (t.clearTMR(r.item), i) return r.item.stmr = setTimeout(function () {
                t.play(n)
            }, i * 1e3), r.item;
            r.item.currentTime = r.offset ? r.offset : 0;
            r.duration && t.stopItem(r.item, r.duration);
            t.runClick(r.clickitem)
        } else t.getSrc(t.buffer[r.bidx], function (n) {
            r.sources[r.sidx] = n;
            n.noteGrainOn ? (n.noteGrainOn(i ? i : 0, r.offset, r.duration ? r.duration : n.buffer.duration), n.stop = function (t) {
                n.noteOff(
                    t ? t : 0)
            }) : (n.start(i ? i : 0, r.offset, r.duration ? r.duration : n.buffer.duration), n.stop = function (t) {
                n.stop(t ? t : 0)
            })
        }), r.sidx++
    }, t.stop = function (n, i) {
        var u, r, f;
        if (n) {
            if (r = t.sounds[n], !r) return console.log("sound " +
                n + " not found"), !1;
            if (!r.sources && r.item) t.stopItem(r.item, i); else for (f = 0; f < r.sidx; f++) r.sources[f].noteOff(i ? i : 0)
        } else for (u in t.sounds) u && u != "music" && t.stop(u, i)
    }, t.music = function (n, i) {
        var r = t.sounds.music;
        if (n != -1 && (r.item.lastS = n), i != -1 && (r.item.lastD = i), t.muteMusic) return !1;
        n == -1 && (n = r.item.lastS);
        i == -1 && (i = r.item.lastD);
        n != -1 ? r.item.currentTime = n ? n : 0 : i && r.item.lastB && (i -= r.item.currentTime - r.item.lastB);
        t.clearTMR(r.item);
        i && i != -1 && (r.item.ltmr = setInterval(function () {
            r.item.currentTime = n
        }, i * 1e3));
        t.runClick(r.clickitem)
    }, t.mute = function (n, i) {
        try {
            localStorage.setItem("mute-" + n, !i || i == "on" ? "true" :
                "false")
        } catch (u) {
        }
        if (n == "music" ? t.muteMusic = !i || i == "on" : t.muteSound = !i || i == "on", i && i != "on") n == "music" && t.music(-1, -1); else if (n == "music") {
            t.stop("music");
            var r = t.sounds.music;
            r.item.lastB = r.item.lastS;
            r.item.lastS = -1
        } else t.stop()
    }, t.runClick = function (n) {
        if (n.click) n.click(); else {
            var t = document.createEvent("MouseEvents");
            t.initMouseEvent("click", !0, !0, window);
            n.dispatchEvent(t)
        }
    }, t
}

function setDefaultFields(
    n) {
    for (var t, i = 0; i < n.childNodes.length; i++) t = n.childNodes[i], setAttr(t), t.defaultv && (t.tagName == "DIV" && (t.value = t.innerHTML), t.value == "" && (t.value = t.defaultv, t.tagName == "DIV" && (t.innerHTML = t.defaultv)),
    t.value == t.defaultv && (t.className = t.className + " lt-default"), t.attachEvent ? (t.attachEvent("onfocus", setDefaultFocus), t.attachEvent("onblur", setDefaultBlur)) : (t.addEventListener("focus", setDefaultFocus,
        !0), t.addEventListener("blur", setDefaultBlur, !0))), t.childNodes && setDefaultFields(t)
}

function setDefaultFocus(n) {
    n = n ? n : event;
    var t = n.srcElement ? n.srcElement : n.target;
    t.tagName == "DIV" && (t.value = t.innerHTML);
    t.value == t.defaultv && (t.value = "", t.tagName == "DIV" && (t.innerHTML = "&nbsp;", setTimeout("var i=document.getElementById('" + t.id + "');i.focus();i.innerHTML=''", 1)), t.className = (t.className + "").replace(/[\s]*lt[\-]default/gi,
        ""))
}

function setDefaultBlur(n) {
    n = n ? n : event;
    var t = n.srcElement ? n.srcElement : n.target;
    t.tagName == "DIV" && (t.value = t.innerHTML);
    (t.value == "" || t.value == "<br>") && (t.value = t.defaultv, t.tagName == "DIV" && (t.innerHTML =
        t.defaultv), t.className = (t.className + "").replace(/[\s]*lt[\-]default/gi, "") + " lt-default");
    t.id == "lt-tags" && (document.tsTmr = setTimeout("tagHideDrop()", 100))
}

function checkFields() {
    return !0
}

function tagKey(
    n) {
    var u, i, t, r;
    if (n = n ? n : event, (navigator.userAgent + "").indexOf("Firefox") != -1 && (u = window.getSelection(), i = u.getRangeAt(0), i.collapsed && (n.keyCode == 8 && (t = i.startContainer.previousSibling, t && t.tagName ==
    "SPAN" && t.parentNode.removeChild(t)), n.keyCode == 46 && (t = i.startContainer.nextSibling, t && t.tagName == "SPAN" && t.parentNode.removeChild(t)))), !document.getElementById("lt-taglist").offsetWidth) return !0;
    if (
        n.keyCode == 9) {
        if (document.tsCID) {
            try {
                n.preventDefault()
            } catch (n) {
            }
            n.returnValue = !1;
            n.cancelBubble = !0;
            tagAdd(document.tsCID, document.tsCV)
        }
        return !1
    }
    if ((n.keyCode == 38 || n.keyCode == 40) && document.tsCID) {
        try {
            n.preventDefault()
        } catch (n) {
        }
        return (n.returnValue = !1, n.cancelBubble = !0, n.keyCode == 38 && document.tsIDX == 0 || n.keyCode == 40 && document.tsIDX == document.tsAC.length - 1) ? !1 : (r = document.tsIDX + (n.keyCode == 38 ? -1 : 1)
            , tagSetSel(r, document.tsAC[r][0], document.tsAC[r][1]), !1)
    }
    if (n.keyCode == 188 && document.tsCID && (document.tsAVp == document.tsCV || document.tsAVp == document.tsCRV)) {
        try {
            n.preventDefault()
        } catch (n) {
        }
        n.returnValue =
            !1;
        n.cancelBubble = !0;
        tagAdd(document.tsCID, document.tsCV)
    }
}

function tagSearch(n) {
    var t, i, r;
    if (n.tagName == "DIV" && (n.value = n.innerHTML), document.tsInp = n, document.tsA || (document.tsA = []), document.tsALL || (
        document.tsALL = [], document.tsID = []), n.value == n.defaultv) return !1;
    if (t = n.value, t = t.toLowerCase(), i = t.replace(/[\<]br[\>]/gi, " ").replace(/[\>]/gi, ",").replace(/[\,]+[\s]*/gi, ",").split(","), r = i.length ?
        i.length - 1 : 0, t = i[r], t = t.replace(/[\&]nbsp[\;]/gi, " ").replace(/^[\s]+|[\s]+$/gi, "").replace(/[\-\_\.\:\;\/]/gi, " ").replace(/([^a-zA-Z ])/gi, "").replace(/[\s]{2,}/gi, " "), t.length < 3) return document.getElementById(
        "lt-taglist").style.display = "none", !1;
    document.tsAVp = t;
    document.tsA[t] ? tagSearchCB(t, document.tsA[t]) : xSend("LifeTips.Tag_Search " + (document.ltType ? document.ltType : "Tips") + "|" + t.replace(/[\|]/g, ""), !1,
        function (n) {
            tagSearchCB(t, n)
        })
}

function tagSearchCB(n, t) {
    var f, i;
    if (!t || document.tsAV == n || !document.tsAVp) return !1;
    document.tsA[n] = t;
    document.tsAV = n;
    document.tsAC = [];
    var o = t.split(";"), e = "",
        u = document.getElementById("lt-taglist").childNodes[0], r = 0;
    for (f = 0; f < o.length; f++) i = o[f].split(":"), document.tsAC[r] = i, document.tsALL[i[1]] = i[1], document.tsID[i[1]] = i[0], i[2] && (document.tsALL[i[2]] = i[1], document.tsID[i[2]] = i[0]), r == 0 && (document.tsIDX = 0, document.tsCID = i[0], document.tsCV = i[1], document.tsCRV = i[2]), e += "<a id='lt-tag-" + i[0] + "' class='lt-tag" + (r == 0 ? " lt-tag-sel" : "") + "' href='javascript:void(0);' onMouseOver=\"tagSetSel(" +
        r + "," + i[0] + ",'" + i[1] + "','" + i[2] + '\')" onClick="tagAdd(' + i[0] + ",'" + i[1] + "')\" unselectable='on' tabindex=-1>" + i[1] + "<\/a>", r++;
    u.innerHTML = e;
    u.parentNode.style.display = e ? "block" : "none";
    u.style.height = r *
        u.childNodes[0].offsetHeight + "px"
}

function tagAdd(n, t, i) {
    var r, s, u, f, e, o;
    clearTimeout(document.tsTmr);
    r = (document.tsInp.innerHTML + "").replace(/[\&]nbsp[\;]/gi, " ").replace(/[\<][\/]span[\>]/gi, "<\/span>,").replace(/[\,]+[\s]*/gi, ", ").split(",");
    s = r.length ? r.length - 1 : 0;
    r[s] = "<span contentEditable='false' unselectable='on' tabindex=-1>" + t + "<\/span>";
    u = r.join(",");
    u = u.replace(/[\,]([^\s])/gi, ", $1");
    document.tsInp.innerHTML = u + ",&nbsp;";
    n && i && !document.tsALL[t] && (document.tsALL[t] = t, document.tsID[t] = n);
    f = document.getElementById("lt-taglist").childNodes[0];
    f.innerHTML = "";
    f.parentNode.style.display = "none";
    document.createRange ? (e = document.createRange(), e.setStartAfter(document.tsInp.childNodes[document.tsInp.childNodes.length - 1]), document.tsInp.focus(), o = window.getSelection(), o.removeAllRanges(), o.addRange(e)) : setTimeout(
        "document.tsInp.focus()", 100);
    document.tsAVp = !1;
    tagSaveList()
}

function tagSetSel(n, t, i, r) {
    if (document.tsCID == t) return !1;
    document.tsCID && (document.getElementById("lt-tag-" + document.tsCID).className = "lt-tag");
    document.tsIDX = n;
    document.tsCID = t;
    document.tsCV = i;
    document.tsCRV = r;
    document.getElementById("lt-tag-" + document.tsCID).className = "lt-tag lt-tag-sel"
}

function tagHideDrop() {
    var n = document.getElementById(
        "lt-taglist");
    n.style.display = "none";
    tagConvertAll(!0)
}

function tagConvertAll(n) {
    var i = document.getElementById("lt-tags"), f, t;
    if (document.tsALL || (document.tsALL = [], document.tsID = []), t = i.innerHTML, t == i.defaultv && i.defaultv) return !1;
    var e = t.toLowerCase().replace(/[\<][^\<\>]+[\>]/gi, ",").split(","),
        r = "", u = "";
    for (f = 0; f < e.length; f++) t = e[f].replace(/[\&]nbsp[\;]/gi, "").replace(/[\-\_\.\:\;\/]/gi, " ").replace(
        /([^a-zA-Z ])/gi, "").replace(/[\s]{2,}/gi, " ").replace(/^[\s]+|[\s]+$/gi, ""), t && (u = (u ? u + ", " : "") + (document.tsALL[t] ? "<span contentEditable='false' unselectable='on' tabindex=-1>" + document.tsALL[t] + "<\/span>" :
        t), n && !document.tsALL[t] && (r = (r ? r + "," : "") + t));
    i.innerHTML = u + ((i.innerHTML + "").substr((i.innerHTML + "").length - 7, 7) == ",&nbsp;" ? ",&nbsp;" : "");
    n && r && xSend("LifeTips.Tag_Search_List " + (document.ltType ? document.ltType : "Tips") + "|" + r.replace(/[\|]/g, ""), !1, tagConvertAllCB);
    tagSaveList()
}

function tagConvertAllCB(n) {
    var r = n.split(";"), u = 0, i, t;
    for (document.tsALL || (document.tsALL = [], document.tsID = []), i = 0; i < r.length;
         i++) t = r[i].split(":"), document.tsALL[t[1]] = t[1], document.tsID[t[1]] = t[0], t[2] && (document.tsALL[t[2]] = t[1], document.tsID[t[2]] = t[0]), u++;
    u > 0 && tagConvertAll()
}

function tagSaveList() {
    var u = document.getElementById(
        "lt-tags"), r, t, i, n;
    for (document.tsALL || (document.tsALL = [], document.tsID = []), n = u.innerHTML, n == u.defaultv && (rv = ""), r = n.toLowerCase().replace(/[\<][^\<\>]+[\>]/gi, ",").split(","), t = "", i = 0; i < r.length; i++)
        n = r[i].replace(/[\&]nbsp[\;]/gi, "").replace(/[\-\_\.\:\;\/]/gi, " ").replace(/([^a-zA-Z ])/gi, "").replace(/[\s]{2,}/gi, " ").replace(/^[\s]+|[\s]+$/gi, ""), n && (t = (t ? t + "," : "") + (document.tsID[n] ? "#" + document.tsID[n] : n));
    document.getElementsByName("lt-tag-v")[0].value = t
}

function piFeedback(n, t, i) {
    ltVote(n, i)
}

function ltVote(n, t) {
    var r = document.getElementById("lt-" + n), i = "", u = t ? "up" : "down";
    r.className.indexOf(
        "lt-up") != -1 && (i = "up");
    r.className.indexOf("lt-down") != -1 && (i = "down");
    (t && i == "up" || !t && i == "down") && (u = "clear");
    xSend("LifeTips.Vote " + n + ";" + u + ";" + i, !1, ltVoteCB)
}

function ltVoteCB(n) {
    var e = n.split(";"),
        o = e[0], i = e[1], r = document.getElementById("lt-" + o), u = "", t,
        f;
    r.className.indexOf("lt-up") != -1 && (u = "up");
    r.className.indexOf("lt-down") != -1 && (u = "down");
    t = document.getElementById("lt-" + o + "-vnum");
    f = parseInt(
        t.innerHTML);
    ev = 0;
    t.oset || (t.onum = parseInt(t.innerHTML), u == "up" && t.onum--, u == "down" && t.onum++, t.oset = !0);
    f = t.onum + (i == "clear" ? 0 : i == "up" ? 1 : -1);
    t.innerHTML = f < 0 ? 0 : f;
    r.className = (r.className + "").replace(/[\s]*lt[\-](up|down)/gi,
        "") + (i == "clear" ? "" : " lt-" + i)
}

function ltSearch(n) {
    n = n ? n : "Tips";
    var t = document.getElementById("search-inp");
    t.value == t.defaultv ? alert("Please enter some words to search for") : document.location = "/search-" +
        n.toLowerCase() + "/" + encodeURIComponent((t.value + "").replace(/[^a-zA-Z0-9\s]/gi, " ").toLowerCase().replace(/^[\s]+|[\s]+$/gi, ""))
}

function setEventsTB() {
    var n = obj("toolbar");
    n && (attachE(n, "mouseover", menuHover),
        attachE(n, "mouseout", menuHover), attachE(n, "touchstart", menuTouch), attachE(document.body, "touchstart", menuTouchE))
}

function gmAttack(n) {
    ulCheck(function (n) {
        return function () {
            if (addPoints(!1, "attack", !0))
                setWait(1), document.location = "/Attack#Layout-" + n; else return sys.walk.sel || (sys.walk.end = "", sys.walk.stepend = ""), sys.walk.load({
                c: 1, list: [{
                    rid: 98,
                    next: sys.walk.sel ? sys.walk.sel.rid + 1 : "",
                    sel: "#attacks-used",
                    txt: "<p>You have used all " + sys.points["attack-day"] + " of your attacks, come back tomorrow for more!<\/p><p>The orange icon fills up as you use your attacks<\/p>",
                    b: "OK",
                    delay: 1,
                    noscroll: !0
                }]
            }), sys.walk.setSel(98), !1
        }
    }(n))
}

function gmReplay(n) {
    ulCheck(function (n) {
        return function () {
            setWait(1);
            document.location = "/Attack#Replay-" + n
        }
    }(n))
}

function gmVote(n, t) {
    var i = n.parentNode, r;
    (i.className + "").indexOf(
        "voted-" + n.id.split("-")[1]) != -1 && (t = 0);
    r = (xSend("Clash.Layout_Vote " + n.id.split("-")[2] + ";" + t, 0, 0, 1) + ";").split(";");
    r[0] == "Y" && (i.className = (i.className + "").replace(/voted[\-](u|d)*/gi, "") + (t ? " voted-" +
        (t == 1 ? "u" : "d") : ""), i.childNodes[0].childNodes[0].innerHTML = r[1], i.childNodes[1].childNodes[0].innerHTML = r[2])
}

function gmDeleteLayout(n) {
    if (!confirm("Are you sure you wish to delete this layout?")) return !1;
    ccWinS("wait-win");
    xSend("Clash.Delete_Layout+" + n, 0, gmDeleteLayoutCB)
}

function gmDeleteLayoutCB(n) {
    ccWinH("wait-win");
    n = (n + ";").split(";");
    switch (n[0]) {
        case"Y":
            var t = obj("layout-" + n[1]);
            t.parentNode.removeChild(
                t);
            break;
        case"E":
            alert(n[1]);
            break;
        case"T":
            ulTimeout(n[1]);
            break;
        default:
            alert("Unfortunately an error has occured, please try again");
            console.log(n)
    }
}

function accSave() {
    obj("acc-save-msg").style.display =
        "none";
    ccWinS("wait-win");
    var n = ccSaveData("acc", obj("acc-form"));
    if (!ccValidateE("acc-save-msg")) return ccWinH("wait-win"), !1;
    xSend("WUsers.Update_Account", n, accSaveCB)
}

function accSaveCB(n) {
    ccWinH("wait-win");
    var t = obj("acc-save-msg");
    n = (n + ";").split(";");
    switch (n[0]) {
        case"Y":
            t.className = "lt-msg lt-thanks";
            t.innerHTML = n[1];
            break;
        case"E":
            t.className = "lt-msg lt-error";
            t.innerHTML = n[1];
            break;
        case"T":
            t.className =
                "lt-msg lt-error";
            t.innerHTML = n[1];
            ulTimeout(n[1]);
            break;
        default:
            t.className = "lt-msg lt-error";
            t.innerHTML = "Error: Your account details were unable to be saved, please contact us or try again later";
            console.log("ERROR: " + n)
    }
    t.style.display = "block"
}

function accChangePW() {
    var t = obj("cp-old").value, n = obj("cp-new").value,
        i = obj("cp-rnew").value;
    if (!t || !n || !i) return alert("Please fill out all the fields"), !1;
    if (
        n != i) return alert("Retype Password needs to exactly match your New Password"), !1;
    ccWinH("change-pwd-win");
    ccWinS("wait-win");
    xSend("WUsers.Change_Password", "op=" + escape(t) + "&np=" + escape(n), accChangePWCB)
}

function accChangePWCB(n) {
    ccWinH("wait-win");
    var n = (n + ";").split(";");
    switch (n[0]) {
        case"Y":
            alert("Your password has been changed");
            break;
        case"T":
            ulTimeout("Your login has timed out, please login again");
            break;
        case"E":
            alert("Error: " + n[1]);
            break;
        default:
            console.log(n);
            alert("Error: Unable to change password")
    }
}

function clanSave(n) {
    ccWinH(n + "-win");
    ccWinS("wait-win");
    var t = ccSaveData(n + "v", obj(n + "-form"));
    if (!ccValidateE(n + "-save-msg")) return ccWinH("wait-win"), !1;
    console.log(t);
    xSend("Clash.Update_" + n, t, function (t) {
        clanSaveCB(t, n)
    })
}

function clanSaveCB(n, t) {
    ccWinH("wait-win");
    var i = obj(t + "-save-msg");
    n = (n + "�").split("�");
    obj(t + "-form").className = "control-win clan-win clan-win-msg";
    n[0] != "Y" && ccWinS(t + "-win");
    switch (n[0]) {
        case"Y":
            obj(t + "-details").innerHTML = n[1];
            setAllianceLink();
            controlLoad();
            break
        case"E":
            i.className = "lt-msg lt-error";
            i.innerHTML = n[1];
            break;
        case"T":
            i.className = "lt-msg lt-error";
            i.innerHTML = n[1];
            ulTimeout(n[1]);
            break;
        default:
            i.className = "lt-msg lt-error";
            i.innerHTML = "Error: Your account details were unable to be saved, please contact us or try again later";
            console.log("ERROR: " + n)
    }
}

function clanAction(n) {
    var t = (n + " ").split(" ")[0] == "Alliance" ? "alliance" : "clan";
    if ((n == "Promote to Leader" || n == "Leave" || n == "Alliance Leave" || n == "Alliance Main") && !confirm("Are you sure?"))
        return !1;
    ccWinH(t + "-member-win");
    ccWinS("wait-win");
    xSend("Clash.Clan_Action " + document.clanMID + ";" + n, 0, function (n) {
        clanActionCB(n, t)
    })
}

function clanActionCB(n, t) {
    n = (n + "�").split("�");
    ccWinH("wait-win");
    switch (n[0]) {
        case"Y":
            obj(t + "-details").innerHTML = n[1];
            setAllianceLink();
            controlLoad();
            break;
        case"E":
            alert(n[1]);
            break;
        case"T":
            ulTimeout(n[1]);
            break;
        default:
            alert("Error: Unable to complete action")
    }
}

function setAllianceLink() {
    var n = obj("alliance-link-a"), t = obj("alliance-link-c");
    if (!t) return !1;
    t.innerHTML = n ? n.innerHTML : "<a href='javascript:void(0);' onclick=\"document.location='/Alliances';\">Join Alliance<\/a> | <a href='javascript:void(0);' onclick=\"document.getElementById('tab-top').className='acc-tabs t6'; document.location=(document.location+'#').split('#')[0]+'#tab-6'; ccWinS('alliance-win')\">Create Alliance<\/a>"
}

function clanJoin(n, t, i) {
    if (i) switch (t) {
        case"Closed":
            alert("This Alliance is closed and can not be joined at this time");
            break;
        case"Anyone can Join":
            ccWinS("wait-win");
            xSend("Clash.Join_Alliance " + n, "",
                function (n) {
                    clanJoinCB(n, i)
                });
            break;
        case"Invite Only":
            document.clanID = n;
            ccWinS("join-win");
            break;
        case"Send":
            ccWinH("join-win");
            ccWinS("wait-win");
            xSend("Clash.Join_Alliance " + n, "msg=" + encodeURIComponent(
                obj("join-request").value), function (n) {
                clanJoinCB(n, i)
            });
            break;
        case"Accept":
            xSend("Clash.Join_Request Accept;" + n + ";Alliance", 0, clanRequestCB);
            break;
        case"Reject":
            ccWinH("reject-win");
            ccWinS("wait-win");
            xSend("Clash.Join_Request Reject;" + document.rejectID + ";Alliance", "msg=" + encodeURIComponent(obj("reject-msg").value), clanRequestCB)
    } else switch (t) {
        case"Full":
            alert("This Clan already has 50 out of 50 members");
            break;
        case"Closed":
            alert("This clan is closed and can not be joined at this time");
            break;
        case"Anyone can Join":
            ccWinS("wait-win");
            xSend("Clash.Join_Clan " + n, "", clanJoinCB);
            break;
        case"Invite Only":
            document.clanID = n;
            ccWinS("join-win");
            break;
        case"Send":
            ccWinH("join-win");
            ccWinS("wait-win");
            xSend("Clash.Join_Clan " + n, "msg=" + encodeURIComponent(obj("join-request").value), clanJoinCB);
            break;
        case"Reject-Msg":
            document.rejectID = n;
            ccWinS("reject-win");
            break;
        case"Accept":
            xSend("Clash.Join_Request Accept;" + n, 0, clanRequestCB);
            break;
        case"Reject":
            ccWinH("reject-win");
            ccWinS("wait-win");
            xSend("Clash.Join_Request Reject;" + document.rejectID, "msg=" + encodeURIComponent(obj("reject-msg").value), clanRequestCB)
    }
}

function clanRequestCB(n) {
    ccWinSave(n, "reject-win", "clan-reject-msg") && (n = (n + "�").split("�"), alert(n[1]), ulNotify(n[2]), obj(
        "user-notifications").innerHTML = n[3])
}

function clanJoinCB(n, t) {
    if (ccWinSave(n, "join-win", "clan-join-msg")) {
        if (n = (n + "�").split("�"), n[2] == "Sent") return alert("Your Join Request has been sent"), !0;
        document.location = (t ? "/Alliance-" : "/Clan-") + n[1]
    }
}

function clanSaveMM() {
    var t, n, i, r, u;
    for (ccWinH("clan-mm-win"), ccWinS("wait-win"), t = "", n = 0; n < 50; n++) i = obj("mm-id-" + n), i && (r = obj("mm-name-" + n), u = obj("mm-role-" + n),
    (r.value != "" || i.value != "0") && (t += (t ? "~" : "") + i.value + "|" + (r.value + "").replace(/[\|]/g, "@CHAR-PIPE@").replace(/[\~]/g, "@CHAR-TILDA@") + "|" + u.value));
    if (!t) return alert("Please enter some names"), !1;
    xSend(
        "Clash.Manual_Members", "mm=" + encodeURIComponent(t), clanSaveMMCB)
}

function clanSaveMMCB(n) {
    n = (n + "�").split("�");
    ccWinH("wait-win");
    switch (n[0]) {
        case"Y":
            return obj("clan-details").innerHTML = n[1], controlLoad(
            ), !0;
        case"E":
            alert(n[1]);
            break;
        case"T":
            ulTimeout(n[1]);
            break;
        default:
            alert("Error: Unable to complete action")
    }
    ccWinS("clan-mm-win")
}

function clanStatSave() {
    var r = obj("clan-stats").getElementsByTagName(
        "INPUT"), n;
    for (txt = "", n = 0; n < r.length; n++) {
        var t = r[n], i = t.parentNode, u = i.parentNode;
        ccSetA(i);
        t.value != i.ovalue && (ccSetA(u), txt += (txt ? ";" : "") + u.m + "," + i.d + "," + (t.value ? parseInt(t.value) : ""))
    }
    if (!txt) return alert(
        "You have not made any changes"), !1;
    clanStatLoad(0, "sd=" + encodeURIComponent(txt))
}

function clanStatLoad(n, t) {
    docWait(0, "s");
    document.statP || (document.statP = 0);
    document.statP += n ? n : 0;
    var i = obj("clan-stat-type").value, r = obj("clan-stat-date").value;
    xSend("Clash.Clan_Stats " + i + ";" + r + ";" + document.statP, t, clanStatLoadCB)
}

function clanStatLoadCB(n) {
    docWait(1, "s");
    obj("clan-stats").innerHTML = n
}

function clanStylesSave(
    n) {
    ccWinS("wait-win");
    xSend("Clash.Clan_Styles_Save", "st=" + (n ? "alliance" : "clan") + "&s=" + escape(obj("clan-styles").value), function (n) {
        ccWinH("wait-win");
        n == "T" ? ulTimeout() : alert(n)
    })
}

function editClanAward(
    n, t) {
    switch (t) {
        case"delete":
            ccWinS("wait-win");
            xSend("Clash.Clan_Award_Delete " + n, !1, editClanAwardCB);
            break;
        case"save":
            ccWinS("wait-win");
            xSend("Clash.Clan_Award_Update " + n, ccSaveData("awa", obj("clan-award-win")),
                editClanAwardCB);
            break;
        default:
            if (document.awardID = n, n) {
                var i = obj("clan-award-" + n);
                setAttr(i);
                obj("awa-reason").value = i.reason;
                obj("awa-user").value = i.uid;
                obj("awa-medal").value = i.medal
            } else obj("awa-reason").value = "", obj("awa-medal").value = 1;
            obj("awa-medal").className = "clan-award-medal clan-medal-" + obj("awa-medal").value;
            ccWinS("award-win")
    }
}

function editClanAwardCB(n) {
    ccWinSave(n, "award-win", "award-win-msg") &&
    (ccWinH("award-win"), n = (n + "�").split("�"), obj("clan-awards").innerHTML = n[2])
}

function setVScrollAd(n) {
    var i, t;
    try {
        if (i = document.getElementById(n), !i) return !1;
        for (t = i.offsetParent; t && (!t.clientHeight ||
            !t.scrollHeight || t.scrollHeight <= t.clientHeight + 300);) t = t.offsetParent;
        t.scrollHeight > t.clientHeight && (i.pScroll = t, window.addEventListener("scroll", function () {
            var r = t.offsetParent ? t.offsetHeight : window.innerHeight, n;
            i.oy || (i.oy = findPos(i).y - (i.style.marginTop ? parseInt(i.style.marginTop) : 0) + i.offsetHeight - r);
            n = t.offsetHeight - t.scrollTop - 120 - r;
            n = n > 0 ? 0 : n;
            i.style.position = t.scrollTop > i.oy ? "fixed" : "static";
            i.style.bottom = 15 - n + "px"
        }, !1))
    } catch (r) {
    }
}

function signupShow(n) {
    document.body.signup = n;
    document.body.setAttribute("signup", n);
    document.body.setAttribute("menu", 0);
    var t = document.body.className + "";
    t = t.replace(/[\s]*signup[\-][\d]+/gi, "");
    document.body.className = (t ? t + " " : "") + "signup-" + n;
    document.body.blur = document.body.blur == 2 ? 2 : n ? 1 : 0;
    document.body.setAttribute("blur", document.body.blur);
    n && (gEventS(
        "Account", "Form Shown", n == 1 ? "Signup" : "Login"), document.ulResult !== !1 && (document.ulResult = function (n) {
        return function (t) {
            t ? signupShow(0) : (setWait(0), signupShow(n))
        }
    }(n)))
}

function gmLogin() {
    obj("ul-inp-pw-1").blur();
    setWait(1);
    ulObj("btn-1").su = document.body.getAttribute("signup") + "" == "1" ? 1 : 0;
    signupShow(0);
    ulObj("err-msg-1").innerHTML = "100% Free";
    ulObj("top-1").className = "";
    ulSend(1, "")
}

function getOG(n) {
    var
        t = document.querySelectorAll("META[property='og:" + n + "']")[0];
    if (t) return t.getAttribute("content");
    switch (n) {
        case"url":
            return document.location + "";
        case"description":
            return document.title + ""
    }
    return ""
}

function ccClassToggle(
    n, t, i) {
    var r = n.className ? n.className + "" : "",
        u = r.replace(new RegExp("[\\s]*" + t, "gi"), ""),
        f = i + "" == "undefined" ? r.indexOf(t) == -1 : i;
    return n.className = u + (f ? (u ? " " : "") + t : ""), f
}

function ccClassAdd(n, t) {
    ccClassToggle(
        n, t, 1)
}

function ccClassDel(n, t) {
    ccClassToggle(n, t, 0)
}

function tinymceNImage() {
    tinymce.PluginManager.add("nimage", function (n) {
        function u(n, t) {
            function u(n, r) {
                i.parentNode && i.parentNode.removeChild(i);
                t(
                    {width: n, height: r})
            }

            var i = document.createElement("img"), r;
            i.onload = function () {
                u(i.clientWidth, i.clientHeight)
            };
            i.onerror = function () {
                u()
            };
            r = i.style;
            r.visibility = "hidden";
            r.position = "fixed";
            r.bottom = r.left =
                0;
            r.width = r.height = "auto";
            document.body.appendChild(i);
            i.src = n
        }

        function r(n, t, i) {
            function r(n, i) {
                return i = i || [], tinymce.each(n, function (n) {
                    var u = {text: n.text || n.title};
                    n.menu ? u.menu = r(n.menu) : (u.value =
                        n.value, t(u));
                    i.push(u)
                }), i
            }

            return r(n, i || [])
        }

        function i(t) {
            return function () {
                var i = n.settings.image_list;
                typeof i == "string" ? tinymce.util.XHR.send({
                    url: i, success: function (n) {
                        t(tinymce.util.JSON.parse(
                            n))
                    }
                }) : typeof i == "function" ? i(t) : t(i)
            }
        }

        function t(t) {
            function w() {
                var i, r, n, t;
                (i = e.find("#width")[0], r = e.find("#height")[0], i && r) && (n = i.value(), t = r.value(), (!s && c || !h && l) && (s = c, h = l), e.find("#constrain")[
                    0].checked() && s && h && n && t && (s != n ? (t = Math.round(n / s * t), r.value(t || t === 0 ? t : "")) : (n = Math.round(t / h * n), i.value(n || n === 0 ? n : ""))), s = n, h = t)
            }

            function g() {
                function t(t) {
                    function r() {
                        t.onload = t.onerror = null;
                        n.selection &&
                        (n.selection.select(t), n.nodeChanged())
                    }

                    t.onload = function () {
                        i.width || i.height || !p || o.setAttribs(t, {
                            width: t.clientWidth,
                            height: t.clientHeight
                        });
                        r()
                    };
                    t.onerror = r
                }

                if (tinyMCE.upload.status == 1) return alert(
                    "Please wait for upload to finish or click cancel"), !1;
                tt();
                w();
                i = tinymce.extend(i, e.toJSON());
                i.alt || (i.alt = "");
                i.dmn == "auto" ? (i.width = "50%", i.height = null, i.style = "min-width:100px; -mce-width:" + c + "px;",
                    i["class"] = "img-auto") : i["class"] == "img-auto" && (i["class"] = null);
                i.width === "" && (i.width = null);
                i.height === "" && (i.height = null);
                i.style || (i.style = null);
                i = {
                    src: i.src, alt: i.alt, width: i.width, height: i.height,
                    style: i.style, "class": i["class"]
                };
                n.undoManager.transact(function () {
                    if (!i.src) {
                        f && (o.remove(f), n.focus(), n.nodeChanged());
                        return
                    }
                    if (f) {
                        var u = f.getAttribute("alt"), r;
                        !u && i.alt ? (r = document.createElement(
                            "DIV"), r.style.paddingBottom = "5px", r.innerHTML = i.alt, f.parentNode.insertBefore(r, f), n.selection.select(f), n.nodeChanged()) : (r = f.previousSibling, r && r.innerHTML == u && (i.alt ? r.innerHTML = i.alt : r.parentNode.removeChild(r)));
                        o.setAttribs(f, i)
                    } else i.id = "__mcenew", n.focus(), n.selection.setContent((i.alt ? "<div style='padding-bottom:5px;'>" + i.alt + "<\/div>" : "") + o.createHTML("img", i)), f = o.get("__mcenew"), o.setAttrib(
                        f, "id", null);
                    t(f)
                })
            }

            function b(n) {
                return n && (n = n.replace(/px$/, "")), n
            }

            function nt(t) {
                var f = t.meta || {}, i;
                if (v && v.value(n.convertURL(this.value(), "src")), tinymce.each(f, function (n, t) {
                    e.find("#" + t).value(
                        n)
                }), i = e.find("#src"), !f.width && !f.height) {
                    var o = i.value(), a = new RegExp("^(?:[a-z]+:)?//", "i"),
                        r = n.settings.document_base_url;
                    r && !a.test(o) && o.substring(0, r.length) !== r && i.value(r + o);
                    u(i.value(), function (
                        n) {
                        n.width && n.height && p && (c = s = n.width, l = h = n.height, e.find("#width").value(s), e.find("#height").value(h))
                    })
                }
            }

            function tt() {
                function r(n) {
                    return n.length > 0 && /^[0-9]+$/.test(n) && (n += "px"), n
                }

                if (n.settings.image_advtab) {
                    var i = e.toJSON(), t = o.parseStyle(i.style);
                    delete t.margin;
                    t["margin-top"] = t["margin-bottom"] = r(i.vspace);
                    t["margin-left"] = t["margin-right"] = r(i.hspace);
                    t["border-width"] = r(i.border);
                    e.find(
                        "#style").value(o.serializeStyle(o.parseStyle(o.serializeStyle(t))))
                }
            }

            var e, i = {}, o = n.dom, f = n.selection.getNode(), c, l, s, h, v,
                d, p = n.settings.image_dimensions !== !1, y, k, a;
            s = o.getAttrib(f, "width");
            h = o.getAttrib(
                f, "height");
            f && f.naturalWidth && (c = f.naturalWidth, l = f.naturalHeight);
            y = !1;
            k = !1;
            f.nodeName != "IMG" || f.getAttribute("data-mce-object") || f.getAttribute("data-mce-placeholder") ? f = null : (f.className == "img-auto" &&
            (s == "50%" || s == "100%") ? f.naturalWidth && (s = f.naturalWidth, h = f.naturalHeight) : s == f.naturalWidth && h == f.naturalHeight ? k = !0 : y = !0, i = {
                src: o.getAttrib(f, "src"),
                alt: o.getAttrib(f, "alt"),
                "class": o.getAttrib(f, "class"),
                width: s,
                height: h
            });
            t && (v = {
                type: "listbox",
                label: "Image list",
                values: r(t, function (t) {
                    t.value = n.convertURL(t.value || t.url, "src")
                }, [{text: "None", value: ""}]),
                value: i.src && n.convertURL(i.src, "src"),
                onselect:
                    function (n) {
                        var t = e.find("#alt");
                        (!t.value() || n.lastControl && t.value() == n.lastControl.text()) && t.value(n.control.text());
                        e.find("#src").value(n.control.value()).fire("change")
                    },
                onPostRender: function () {
                    v = this
                }
            });
            n.settings.image_class_list && (d = {
                name: "class",
                type: "listbox",
                label: "Class",
                values: r(n.settings.image_class_list, function (t) {
                    t.value && (t.textStyle = function () {
                        return n.formatter.getCssText({
                            inline:
                                "img", classes: [t.value]
                        })
                    })
                })
            });
            a = [{
                name: "src",
                type: "filepicker",
                filetype: "image",
                label: "Source",
                autofocus: !0,
                onchange: nt,
                onPostRender: function (n) {
                    var r = document.getElementById(this._id + "-open"),
                        i = document.getElementById(this._id + "-inp"), t;
                    i.placeholder = "Drag & Drop file or type URL here";
                    t = document.createElement("INPUT");
                    t.className = "mce-imgfile";
                    t.type = "file";
                    r.appendChild(t);
                    tinyMCE.upload.imgUp = function (
                        r) {
                        i.placeholder = "Uploading, Please Wait...";
                        var f = tinymce.activeEditor.windowManager.getWindows()[0]._id,
                            u = document.getElementById("mce-imgprogress");
                        u.setBtn = function (n) {
                            return function (t) {
                                var r = "#" +
                                    n + " .mce-btn",
                                    i = document.querySelectorAll(r + ".mce-primary")[0],
                                    u = document.querySelectorAll(r + ".mce-last")[0];
                                ccClassToggle(i, "mce-disabled", t);
                                t ? (i.upCancel = function () {
                                    tinyMCE.upload.btnRemove();
                                    tinyMCE.upload.cancel()
                                }, attachE(u, "click", i.upCancel), tinyMCE.upload.btnRemove = function (n, t) {
                                    return function () {
                                        dettachE(t, "click", n.upCancel)
                                    }
                                }(i, u)) : tinyMCE.upload.btnRemove()
                            }
                        }(f);
                        u.setBtn(1);
                        u.setAttribute(
                            "p", "0%");
                        tinyMCE.upload.init({
                            finp: t,
                            files: r,
                            prog: u,
                            extraTime: 5e3,
                            postTo: "Poll.Upload_Picture @fname",
                            postCB: function (t) {
                                t = t.split(";");
                                var i = t[2];
                                tinyMCE.upload.win.find("#src").value(i);
                                tinyMCE.upload.win.find("#alt").value(t[3]);
                                nt(n)
                            },
                            endCB: function () {
                                var n = document.getElementById("mce-imgprogress");
                                n.setBtn(0);
                                n.setAttribute("p", "")
                            }
                        })
                    };
                    attachE(i, "dragover", function () {
                        return ccClassAdd(this, "mce-uphover"),
                            !1
                    });
                    attachE(i, "dragend", function () {
                        return ccClassDel(this, "mce-uphover"), !1
                    });
                    attachE(i, "drop", function (n) {
                        ccClassDel(this, "mce-uphover");
                        n.preventDefault ? n.preventDefault() : n.returnValue = !1;
                        tinyMCE.upload.imgUp(n.dataTransfer.files)
                    });
                    attachE(t, "change", function () {
                        tinyMCE.upload.imgUp()
                    })
                }
            }, v];
            n.settings.image_description !== !1 && a.push({
                name: "alt",
                type: "textbox",
                label: "Image description"
            });
            p && (a.push({
                name: "dmn",
                type: "listbox",
                label: "Dimensions",
                values: [{text: "Auto", value: "auto"}, {
                    text: "Original",
                    value: "original",
                    selected: k
                }, {text: "Custom", value: "custom", selected: y}],
                onselect: function () {
                    document.getElementById(e.find("#cdmn")[0]._id).style.visibility = this.value() == "custom" ? "visible" : "hidden";
                    this.value() == "original" && (c && (s = c, e.find("#width").value(c)), l && (h = l, e.find("#height").value(l)))
                }
            }),
                a.push({
                    name: "cdmn",
                    type: "container",
                    label: " ",
                    layout: "flex",
                    direction: "row",
                    align: "center",
                    spacing: 5,
                    style: y ? "" : "visibility:hidden",
                    items: [{
                        name: "width",
                        type: "textbox",
                        maxLength: 5,
                        size: 3,
                        onchange: w,
                        ariaLabel:
                            "Width"
                    }, {type: "label", text: "x"}, {
                        name: "height",
                        type: "textbox",
                        maxLength: 5,
                        size: 3,
                        onchange: w,
                        ariaLabel: "Height"
                    }, {
                        name: "constrain",
                        type: "checkbox",
                        checked: !0,
                        text: "Constrain proportions"
                    }]
                }));
            a.push(d);
            n.settings.file_browser_callback = mceFileSource;
            n.settings.image_advtab ? (f && (i.hspace = b(f.style.marginLeft || f.style.marginRight), i.vspace = b(f.style.marginTop || f.style.marginBottom), i.border = b(f.style.borderWidth),
                i.style = n.dom.serializeStyle(n.dom.parseStyle(n.dom.getAttrib(f, "style")))), tinyMCE.upload.win = e = n.windowManager.open({
                title: "Insert/edit image",
                data: i,
                bodyType: "tabpanel",
                body: [{
                    name: "imgtabg", title:
                        "General", type: "form", items: a
                }, {
                    title: "Advanced",
                    type: "form",
                    pack: "start",
                    items: [{label: "Style", name: "style", type: "textbox"}, {
                        type: "form",
                        layout: "grid",
                        packV: "start",
                        columns: 2,
                        padding: 0,
                        alignH: ["left",
                            "right"],
                        defaults: {
                            type: "textbox",
                            maxWidth: 50,
                            onchange: tt
                        },
                        items: [{
                            label: "Vertical space",
                            name: "vspace"
                        }, {
                            label: "Horizontal space",
                            name: "hspace"
                        }, {label: "Border", name: "border"}]
                    }]
                }],
                onPostRender: function () {
                    var t = document.createElement("DIV");
                    t.id = "mce-imgprogress";
                    t.innerHTML = "<div><\/div>";
                    t.setAttribute("p", "");
                    document.querySelectorAll("#" + this._id + " .mce-foot .mce-container-body")[0].appendChild(t);
                    n.settings.file_browser_callback = !1
                },
                onSubmit: g
            })) : e = n.windowManager.open({
                title: "Insert/edit image",
                data: i,
                body: a,
                onSubmit: g
            })
        }

        tinyMCE.imageDialog = t;
        n.addButton("image", {
            icon: "image",
            tooltip: "Insert/edit image",
            onclick: i(t),
            stateSelector: "img:not([data-mce-object],[data-mce-placeholder])"
        });
        n.addMenuItem("image", {
            icon: "image",
            text: "Insert image",
            onclick: i(t),
            context: "insert",
            prependToContext: !0
        });
        n.addCommand(
            "mceImage", i(t))
    });
    tinyMCE.upload = {
        init: function (n) {
            var i, t, r, u;
            for (tinyMCE.upload.o = n, tinyMCE.upload.status = 0, i = n.files ? n.files : n.finp.files, t = 0; t < i.length; t++) r = i[t], u = new FileReader, u.onload = function (
                n) {
                return function (t) {
                    var i = tinyMCE.upload.o.prev, u, r, f, c, e;
                    i && (i.img || (i.img = document.querySelectorAll("#" + i.id + " img")[0]), i.img || (i.img = i.appendChild(document.createElement("IMG"))), i.img.style.opacity =
                        0, i.img.style.left = "", i.img.src = t.target.result, u = parseInt(window.getComputedStyle(i.img).width), u > i.offsetWidth && (i.img.style.left = -(u - i.offsetWidth) / 2 + "px"), i.img.style.opacity = 1);
                    r = document.createElement(
                        "IMG");
                    r.style.cssText = "position:absolute; top:-2000px; left:-2000px; opacity:0; max-width:714px; max-height:714px; pointer-events:none;";
                    document.body.appendChild(r);
                    r.src = t.target.result;
                    var y = document.body.offsetLeft, h = getComputedStyle(r),
                        u = parseInt(h.width), o = parseInt(h.height);
                    if (u >= 714 || o >= 714 || n.size / 1048576 > 4) {
                        f = document.createElement("canvas");
                        f.width = u;
                        f.height = o;
                        c = f.getContext("2d");
                        c.drawImage(
                            r, 0, 0, u, o);
                        r.src = f.toDataURL();
                        var l = r.src.match(/data:([^;]*)(;base64)?,([0-9A-Za-z+/]+)/),
                            a = atob(l[3]), v = new ArrayBuffer(a.length),
                            s = new Uint8Array(v);
                        for (e = 0; e < s.length; e++) s[e] = a.charCodeAt(e);
                        r.blob =
                            new Blob([s], {type: l[1]});
                        tinyMCE.upload.o.sysCB = function (n) {
                            return function () {
                                document.body.removeChild(n)
                            }
                        }(r);
                        tinyMCE.upload.start(r.blob.size < n.size ? r.blob : n, n.name)
                    } else document.body.removeChild(
                        r), tinyMCE.upload.o.sysCB = !1, tinyMCE.upload.start(n, n.name)
                }
            }(r), tinyMCE.upload.startP(), u.readAsDataURL(r)
        }, startP: function () {
            var n, t;
            document.body.setAttribute("upload", 1);
            tinyMCE.upload.status = 1;
            n =
                tinyMCE.upload.o.prog;
            n.bar = n.childNodes[0];
            n.p = 0;
            n.setAttribute("p", "Processing File...");
            setTrans(n.bar, "none");
            n.bar.style.width = "0%";
            n.style.opacity = 1;
            t = document.body.offsetWidth;
            setTrans(n.bar, "width 60s linear");
            n.bar.style.width = "100%";
            t = document.body.offsetWidth;
            n.st = (new Date).getTime();
            n.initial = !0;
            n.setTL = function (n) {
                return function (t) {
                    var i = window.getComputedStyle(n.bar).width,
                        f = parseInt(window.getComputedStyle(
                            n).width), r, u;
                    r = i.indexOf("%") != -1 ? parseFloat((i + "%").split("%")[0]) : Math.round(parseFloat(i) * 100 / f);
                    setTrans(n.bar, "none");
                    n.bar.style.width = r + "%";
                    u = document.body.offsetWidth;
                    setTrans(n.bar, "width " +
                        t + "ms linear");
                    n.bar.style.width = "100%";
                    u = document.body.offsetWidth
                }
            }(n);
            n.tmr = setInterval(function (n) {
                return function () {
                    var i = window.getComputedStyle(n.bar).width,
                        r = parseInt(window.getComputedStyle(n).width), t;
                    t = i.indexOf("%") != -1 ? Math.round(parseFloat((i + "%").split("%")[0])) : Math.round(parseFloat(i) * 100 / r);
                    t > 75 && t < 90 && n.initial && n.setTL(12e4);
                    t > 90 && n.initial && n.setTL(24e4);
                    t > 0 && (n.p = t, n.setAttribute(
                        "p", t + "%"))
                }
            }(n), 100)
        }, cancel: function () {
            tinyMCE.upload.xhr.abort();
            var n = tinyMCE.upload.o.prog;
            n.tmr && clearInterval(n.tmr);
            document.body.setAttribute("upload", 0);
            tinyMCE.upload.status = 0;
            n.style.opacity =
                0;
            n.setAttribute("p", "")
        }, start: function (n, t) {
            var r = tinyMCE.upload.o.prog, i, u;
            r.setAttribute("p", "0%");
            r.setTL(6e4);
            r.st = (new Date).getTime();
            tinyMCE.upload.xhr = i = new XMLHttpRequest;
            u = tinyMCE.upload.o.postTo.replace(/[\@]fname/gi, encodeURIComponent(t.replace(/[\+]/gi, " ")));
            i.open("POST", "/code/get_data.asp?d=" + u, !0);
            i.onload = function () {
                var t = i.responseText, n = tinyMCE.upload.o, u, r, f;
                n.finp && (n.finp.value = "");
                t.substr(0, 1) == "Y" ? n.postCB && n.postCB(t) : (u = "Unable to upload image", t.substr(0, 2) == "E:" ? u = t.substr(2) : console.log(t), alert(u));
                r = n.prog;
                r.tmr && clearInterval(r.tmr);
                f = document.body.offsetWidth;
                r.style.opacity = 0;
                document.body.setAttribute("upload", 0);
                tinyMCE.upload.status = 0;
                n.sysCB && n.sysCB();
                n.endCB && n.endCB()
            };
            i.upload.onprogress = function (n) {
                var t, i, e;
                if (n.lengthComputable && (t = n.loaded * 100 /
                    n.total, t = t - (100 - t) / 5, t >= 1)) {
                    var u = tinyMCE.upload.o.prog,
                        f = (new Date).getTime() - u.st,
                        r = tinyMCE.upload.o.extraTime;
                    r = r ? r : 0;
                    i = f / (t / 100) + 300 + r;
                    navigator.appVersion.indexOf("MSIE") != -1 && (t < 90 && i < 4e3 && (i = 4e3),
                        i += 2e3);
                    e = i - f;
                    u.initial = !1;
                    u.setTL(e)
                }
            };
            i.send(n)
        }
    };
    tinymce.PluginManager.add("placeholder", function (n) {
        n.on("init", function () {
            var t = obj(".placeholder[pl='" + n.getElement().getAttribute("pl") + "']");
            if (
                t) {
                r();
                tinymce.DOM.bind(t, "click", i);
                n.on("focus", i);
                n.on("blur", r);

                function i() {
                    t.style.display = "none";
                    tinyMCE.execCommand("mceFocus", !1, n)
                }

                function r() {
                    t.style.display = n.getContent() == "" || n.getContent(
                    ) == "<div>&nbsp;<\/div>" ? "" : "none"
                }
            }
        })
    });
    tinyMCE.fcb = function (n) {
        var t, i;
        try {
            t = tinyMCE.activeEditor.contentAreaContainer.childNodes[0].contentWindow.document.body;
            t.style.height = "100%";
            t.style.margin = "0px";
            t.style.padding = "8px";
            t.style.boxSizing = "border-box";
            t.parentNode.style.height = "100%";
            i = tinyMCE.activeEditor.getContainer();
            attachE(t, "dragover", function (n, t) {
                return function (i) {
                    return n ? n(i, t) : ccClassAdd(
                        this, "mce-uphover"), !1
                }
            }(n, i));
            attachE(t, "dragend", function (n, t) {
                return function (i) {
                    return n ? n(i, t) : ccClassDel(this, "mce-uphover"), !1
                }
            }(n, i));
            attachE(t, "drop", function (n, t) {
                return function (i) {
                    ccClassDel(
                        this, "mce-uphover");
                    i.dataTransfer.files.length && (i.preventDefault ? i.preventDefault() : i.returnValue = !1, n ? n(i, t) : (tinyMCE.imageDialog(), tinyMCE.upload.imgUp(i.dataTransfer.files)))
                }
            }(n, i))
        } catch (r) {
        }
    }
}

function mceFileSource() {
    return !1
}

function setTrans(n, t, i) {
    var r = document.transType, f, e, u;
    i = i ? i : "transition";
    r || r == "" || (r = "webkit", f = document.createElement("DIV"), f.style.cssText = "position:absolute; top:-1000px; left:-1000px; transform:translate3D(0,0,0); -webkit-transform:translate3D(0,0,0); -moz-transform:translate3D(0,0,0); -ms-transform:translate3D(0,0,0);",
        document.body.appendChild(f), e = window.getComputedStyle(f, null), u = e.getPropertyValue("-" + r + "-transform"), u || (u = e.getPropertyValue("transform"), r = ""), u || (u = e.getPropertyValue("-moz-transform"), r = "moz"),
    u || (u = e.getPropertyValue("-ms-transform"), r = "ms"), document.transType = r, f.parentNode.removeChild(f));
    n.style[r ? r + i.substr(0, 1).toUpperCase() + i.substr(1) : i] = t
}

var qzfb, cUser, sysA, GP;
(function (n) {
    "use strict";

    function t(n, t, i) {
        return n.addEventListener ? n.addEventListener(t, i, !1) : n.attachEvent ? n.attachEvent("on" + t, i) : void 0
    }

    function i(n, t) {
        for (var i = 0, r = n.length; r > i; i++) if (n[i] === t) return !0;
        return !1
    }

    function r(
        n, t) {
        var i;
        n.createTextRange ? (i = n.createTextRange(), i.move("character", t), i.select()) : n.selectionStart && (n.focus(), n.setSelectionRange(t, t))
    }

    function u(n, t) {
        try {
            return n.type = t, !0
        } catch (i) {
            return !1
        }
    }

    n.Placeholders = {
        Utils: {
            addEventListener: t,
            inArray: i,
            moveCaret: r,
            changeType: u
        }
    }
})(this), function (n) {
    "use strict";

    function nt() {
    }

    function tt() {
        try {
            return document.activeElement
        } catch (n) {
        }
    }

    function v(n, t) {
        var i, r, u = !!t && n.value !== t, e = n.value === n.getAttribute(f);
        return (u || e) && "true" === n.getAttribute(h) ? (n.removeAttribute(h), n.value = n.value.replace(n.getAttribute(f), ""), n.className = n.className.replace(gt,
            ""), r = n.getAttribute(w), parseInt(r, 10) >= 0 && (n.setAttribute("maxLength", r), n.removeAttribute(w)), i = n.getAttribute(a), i && (n.type = i), !0) : !1
    }

    function b(n) {
        var t, r, u = n.getAttribute(f);
        return "" === n.value && u ?
            (n.setAttribute(h, "true"), n.value = u, n.className += " " + g, r = n.getAttribute(w), r || (n.setAttribute(w, n.maxLength), n.removeAttribute("maxLength")), t = n.getAttribute(a), t ? n.type = "text" : "password" === n.type && i.changeType(n, "text") && n.setAttribute(a, "password"), !0) : !1
    }

    function it(n, t) {
        var r, s, u, o, h, l, i;
        if (n && n.getAttribute(f)) t(n); else for (u = n ? n.getElementsByTagName("input") : e, o = n ? n.getElementsByTagName("textarea") :
            c, r = u ? u.length : 0, s = o ? o.length : 0, i = 0, l = r + s; l > i; i++) h = r > i ? u[i] : o[i - r], t(h)
    }

    function rt(n) {
        it(n, v)
    }

    function at(n) {
        it(n, b)
    }

    function vt(n) {
        return function () {
            y && n.value === n.getAttribute(f) && "true" === n.getAttribute(
                h) ? i.moveCaret(n, 0) : v(n)
        }
    }

    function yt(n) {
        return function () {
            b(n)
        }
    }

    function pt(n) {
        return function (t) {
            return k = n.value, "true" === n.getAttribute(h) && k === n.getAttribute(f) && i.inArray(dt, t.keyCode) ? (t.preventDefault &&
            t.preventDefault(), !1) : void 0
        }
    }

    function wt(n) {
        return function () {
            v(n, k);
            "" === n.value && (n.blur(), i.moveCaret(n, 0))
        }
    }

    function bt(n) {
        return function () {
            n === tt() && n.value === n.getAttribute(f) && "true" === n.getAttribute(
                h) && i.moveCaret(n, 0)
        }
    }

    function kt(n) {
        return function () {
            rt(n)
        }
    }

    function ut(n) {
        n.form && (o = n.form, "string" == typeof o && (o = document.getElementById(o)), o.getAttribute(st) || (i.addEventListener(o, "submit", kt(
            o)), o.setAttribute(st, "true")));
        i.addEventListener(n, "focus", vt(n));
        i.addEventListener(n, "blur", yt(n));
        y && (i.addEventListener(n, "keydown", pt(n)), i.addEventListener(n, "keyup", wt(n)), i.addEventListener(
            n, "click", bt(n)));
        n.setAttribute(ht, "true");
        n.setAttribute(f, r);
        (y || n !== tt()) && b(n)
    }

    var e, c, y, ft, k, l, d, r, et, o, t, p, u,
        ot = ["text", "search", "url", "tel", "email", "password", "number", "textarea"],
        dt = [27, 33, 34,
            35, 36, 37, 38, 39, 40, 8, 46], g = "placeholdersjs",
        gt = RegExp("(?:^|\\s)" + g + "(?!\\S)"), f = "data-placeholder-value",
        h = "data-placeholder-active", a = "data-placeholder-type",
        st = "data-placeholder-submit", ht = "data-placeholder-bound",
        w = "data-placeholder-maxlength", ni = document.createElement("input"),
        ct = document.getElementsByTagName("head")[0],
        lt = document.documentElement, s = n.Placeholders, i = s.Utils;
    if (s.nativeSupport = void 0 !== ni.placeholder,
        !s.nativeSupport) {
        for (e = document.getElementsByTagName("input"), c = document.getElementsByTagName("textarea"), y = "false" === lt.getAttribute("data-placeholder-focus"), ft = "false" !== lt.getAttribute("data-placeholder-live"),
                 l = document.createElement("style"), l.type = "text/css", d = document.createTextNode("." + g + " { color:#ccc; }"), l.styleSheet ? l.styleSheet.cssText = d.nodeValue : l.appendChild(d), ct.insertBefore(l, ct.firstChild),
                 u = 0, p = e.length + c.length; p > u; u++) t = e.length > u ? e[u] : c[u - e.length], r = t.attributes.placeholder, r && (r = r.nodeValue, r && i.inArray(ot, t.type) && ut(t));
        et = setInterval(function () {
            for (u = 0, p = e.length + c.length; p > u; u++)
                t = e.length > u ? e[u] : c[u - e.length], r = t.attributes.placeholder, r ? (r = r.nodeValue, r && i.inArray(ot, t.type) && (t.getAttribute(ht) || ut(t), (r !== t.getAttribute(f) || "password" === t.type && !t.getAttribute(a)) && ("password" ===
                t.type && !t.getAttribute(a) && i.changeType(t, "text") && t.setAttribute(a, "password"), t.value === t.getAttribute(f) && (t.value = r), t.setAttribute(f, r)))) : t.getAttribute(h) && (v(t), t.removeAttribute(f));
            ft || clearInterval(
                et)
        }, 100)
    }
    i.addEventListener(n, "beforeunload", function () {
        s.disable()
    });
    s.disable = s.nativeSupport ? nt : rt;
    s.enable = s.nativeSupport ? nt : at
}(this);
!document.querySelectorAll && document.createStyleSheet && function (
    n, t) {
    n = document;
    t = n.createStyleSheet();
    n.querySelectorAll = function (i, r, u, f, e) {
        for (e = n.all, r = [], i = i.split(","), u = i.length; u--;) {
            for (t.addRule(i[u], "k:v"), f = e.length; f--;) e[f].currentStyle.k && r.push(e[f]);
            t.removeRule(0)
        }
        return r
    }
}();
window.console || (window.console = {
    log: function () {
    }
});
attachE(window, "load", function () {
    var n, i, t;
    try {
        if (n = document.querySelectorAll(".ad-slot, .adsbygoogle"), i = 0, n) {
            for (t = 0;
                 t < n.length; t++) n[t] && ((n[t].outerHTML + "").indexOf("google") != -1 || (n[t].outerHTML + "").indexOf("ca-pub") != -1) && (i = n[t].offsetHeight || i == 2 ? 2 : 1);
            i == 1 && gEventS("Adblock", "On")
        }
    } catch (e) {
    }
});
qzfb = {
    obj: function (
        n, t) {
        return document.qzScript ? qz.obj(n, t) : obj(n, t)
    }, addE: function (n, t, i) {
        return document.qzScript ? qz.addE(n, t, i) : attachE(n, t, i)
    }, xSend: function (n, t, i) {
        return document.qzScript ? qz.xSend(n, t, i) : xSend(n,
            t, i)
    }
};
window.fbAsyncInit = function () {
    var i = {
            "poll-maker": "614685298654342",
            "quiz-maker": "614685298654342",
            mychallengetribe: "1447460432175374",
            "clashofclans-tools": "518538828247675",
            doquizzes: "896617837121051"
        },
        t = i[(document.location + "").split(".")[1].toLowerCase()], n;
    if (t == "518538828247675" && document.location.pathname == "/embed-test.asp" && (t = 0), t || (t = i["poll-maker"]), FB.init({
        appId: t, cookie: !0, xfbml: !0, frictionlessRequests:
            !0, version: "v2.4"
    }), document.fbCB && document.fbCB !== 1) for (n = 0; n < document.fbCB.length; n++) document.fbCB[n] && typeof document.fbCB[n] == "function" && document.fbCB[n]();
    document.fbCB = 1
};
qzfb.addE(document, "DOMContentLoaded",
    function () {
        loadFB()
    });
qzfb.addE(window, "load", checkFBCMT);
Date.prototype.getLocalN = function (n) {
    var t = this.getTime() - (!n && n != 0 ? this.getTimezoneOffset() : n * 60) * 6e4;
    return 25569 + t / 864e5
};
Date.prototype.setLocalN =
    function (n, t) {
        t = (!t && t != 0 ? this.getTimezoneOffset() : t * 60) * 6e4;
        this.setTime((n - 25569) * 864e5 + t)
    };
Date.prototype.stdTimezoneOffset = function () {
    var n = new Date(this.getFullYear(), 0, 1), t = new Date(this.getFullYear(
    ), 6, 1);
    return Math.max(n.getTimezoneOffset(), t.getTimezoneOffset())
};
Date.prototype.dst = function () {
    return this.getTimezoneOffset() < this.stdTimezoneOffset()
};
Date.prototype.setServerUTC = function (n) {
    this.setTime((n - 25569) * 864e5)
};
Date.prototype.format = function (n) {
    var u = this, o = u.getDate(), s = u.getMonth() + 1, h = u.getFullYear(),
        r = u.getHours(), f = u.getMinutes(), e = u.getSeconds(),
        t = u.getTime(), i = u.toString().split(
        " "), c;
    switch (n) {
        case"full":
        case"full-short":
            return (c = parseInt((u.toLocaleString() + "/")[0]), c == o && (o = s, s = c), n == "full") ? (s < 10 ? "0" : "") + s + "-" + (o < 10 ? "0" : "") + o + "-" + h + " | " + (r > 12 ? r - 12 : r) + ":" + (f < 10 ? "0" : "") + f +
                ":" + (e < 10 ? "0" : "") + e + " " + (r > 12 ? "PM" : "AM") : s + "/" + o + "/" + (h + "").substr(2) + " " + (r < 10 ? "0" : "") + r + ":" + (f < 10 ? "0" : "") + f + ":" + (e < 10 ? "0" : "") + e;
        case"short":
            return i[1] + " " + i[2];
        case"shorty":
            return i[1] + " " + i[2] + ", " +
                h;
        case"medium":
            return i[0] + ", " + i[1] + " " + i[2];
        case"dt":
            return i[0] + ", " + i[1] + " " + parseInt(i[2]) + " at " + (r > 12 ? r - 12 : r) + ":" + (f < 10 ? "0" : "") + f + (r > 12 ? "pm" : "am");
        case"dty":
            return i[0] + ", " + i[1] + " " + parseInt(i[
                2]) + ", " + h + " at " + (r > 12 ? r - 12 : r) + ":" + (f < 10 ? "0" : "") + f + (r > 12 ? "pm" : "am");
        case"timestamp":
            return r = u.getUTCHours(), f = u.getUTCMinutes(), e = u.getUTCSeconds(), (r < 10 ? "0" : "") + r + ":" + (f < 10 ? "0" : "") + f + ":" + (e < 10 ? "0" :
                "") + e;
        case"ago":
            t = (new Date).getTime() - t;
            t = t < 1 ? 1 : t;
            switch (!0) {
                case t > 63072e6:
                    t = Math.floor(t / 31536e6);
                    i = "year";
                    break;
                case t > 7776e6:
                    t = Math.floor(t / 2592e6);
                    i = "month";
                    break;
                case t > 864e5:
                    t = Math.floor(t / 864e5);
                    i = "day";
                    break;
                case t > 36e5:
                    t = Math.floor(t / 36e5);
                    i = "hr";
                    break;
                case t > 6e4:
                    t = Math.floor(t / 6e4);
                    i = "min";
                    break;
                default:
                    t = Math.floor(t / 1e3);
                    i = "second"
            }
            return t + " " + i + (t == 1 ? "" : "s")
    }
};
cUser = {loadCB: []};
sysA = {
    s:
        0, k: 0, loadCB: [], cb: function () {
        sysA.k--;
        sysA.k == 0 && (sysA.s = 2, initUser())
    }, sysCB: function (n) {
        sysA.s == 1 ? sysA.loadCB.push(n) : n()
    }
};
document.ulSite = ulGetSite();
GP = 0;
sysA.s = 1;
cUser.loadCB.push(function () {
    for (
        var t = document.getElementsByTagName("LINK"), i, n = 0; n < t.length; n++) i = t[n].getAttribute("async-href"), i && (sysA.k++, attachE(t[n], "load", sysA.cb), t[n].href = i);
    for (t = document.getElementsByTagName("SCRIPT"),
             n = 0; n < t.length; n++) i = t[n].getAttribute("async-src"), i && (sysA.k++, attachE(t[n], "load", sysA.cb), t[n].src = i)
});
document.ulWinR = !0;
attachE(window, "load", function () {
    var r, u, i, t, n, f;
    document.ulWinR = function (
        n, t) {
        ulObj("err-msg-1").innerHTML = n;
        ulObj("top-1").className = "ul-msg-1";
        signupShow(t ? 1 : 2)
    };
    try {
        r = obj("header").offsetHeight;
        sysA.tbStick = document.body.scrollTop > r ? 1 : 0;
        document.body.setAttribute("sticky",
            sysA.tbStick);
        attachE(window, "scroll", function (n) {
            return function () {
                var t = document.body.scrollTop > n ? 1 : 0;
                t != sysA.tbStick && (sysA.tbStick = t, document.body.setAttribute("sticky", t))
            }
        }(r))
    } catch (e) {
    }
    for (u = obj(
        "comment"), u && function (n, t) {
        return function () {
            n.post = function (n) {
                ulCheck(function (n) {
                    return function () {
                        commentPost(n)
                    }
                }(n))
            };
            attachE(n, "focus", function () {
                t.setAttribute("focus", 1)
            });
            attachE(n, "blur", function () {
                n.value || setTimeout(function () {
                    t.setAttribute("focus", 0)
                }, 100)
            });
            attachE(n, "change", function () {
                setWait(0, n.parentNode)
            });
            attachE(n, "keydown", function (t) {
                n.tmr && clearTimeout(n.tmr);
                t.ctrlKey && t.keyCode ==
                83 && (preventDefault(t), n.post(t))
            });
            attachE("comment-post", "click", function (t) {
                n.post(t)
            });
            attachE("comment-cancel", "click", function () {
                n.value = "";
                n.innerHTML = "";
                n.blur();
                t.setAttribute("focus", 0)
            })
        }
    }(
        u, obj("comment-new"))(), obj("attack-count") && (attachE("activity-count", "tclick", function () {
        gEvent("Activity", "Filter", "Comments");
        document.body.setAttribute("activity-group", "comments");
        sysA.s && (sys.activity.pcount = obj("activity-count"), sys.activity.more({
            clear: !0,
            sort: "recent",
            extra: ""
        }))
    }), attachE("attack-count", "tclick", function () {
        gEvent("Activity", "Filter", "Attacks");
        ulCheck(function () {
            document.body.setAttribute(
                "activity-group", "attacks");
            sys.activity.pcount = obj("attack-count");
            sys.activity.more({clear: !0, sort: "votes", extra: "g=attacks"})
        })
    }), attachE("attack-btn", "tclick", function () {
        ulCheck(0, "/Attack#Layout-" +
            document.activityID.split("-")[1])
    })), i = obj("layout-preview"), i && attachE(i, ["touchstart", "touchmove", "touchend"], function (n) {
        return function (t) {
            var i = clientXY(t);
            switch (t.type) {
                case"touchstart":
                    n.sxy =
                        i;
                    n.exy = i;
                    break;
                case"touchmove":
                    n.exy = i;
                    break;
                default:
                    n.sxy.x == n.exy.x && n.sxy.y == n.exy.y && n.setAttribute("move", 1)
            }
        }
    }(i)), t = document.querySelectorAll(".social-share DIV"), n = 0; n < t.length; n++) f = {
        fb: "Facebook",
        tw: "Twitter",
        gp: "Google Plus",
        re: "Reddit",
        st: "Stumble Upon",
        tu: "Tumblr",
        pi: "pInterest"
    }, t[n].setAttribute("title", f[t[n].className]), attachE(t[n], "click", function (n) {
        return function () {
            var i = getOG("url"),
                t;
            txt = encodeURIComponent(getOG("description"));
            img = encodeURIComponent(getOG("image"));
            t = encodeURIComponent(i);
            gEvent("Share Click", n.className);
            switch (n.className) {
                case"fb":
                    FB.ui({
                        method: "share", href:
                        i
                    }, function (n) {
                        n && n.post_id && gEvent("Shared", "fb")
                    });
                    break;
                case"pi":
                    window.open("https://www.pinterest.com/pin/create/button/?url=" + t + "&media=" + img + "", "_blank", "width=600, height=500");
                    break;
                case"tw":
                    window.open("https://twitter.com/share?url=" + t + "&text=" + document.title + "&related=clashoflcans&hashtags=clashoflcans", "_blank", "width=600, height=300");
                    break;
                case"gp":
                    window.open("https://plus.google.com/share?url=" +
                        t, "_blank", "width=600, height=300");
                    break;
                case"re":
                    window.open("http://www.reddit.com/submit?url=" + t + "&title=" + txt + "&related=clashoflcans&hashtags=clashoflcans", "_blank", "");
                    break;
                case"st":
                    window.open(
                        "http://www.stumbleupon.com/badge/?url=" + t, "_blank", "width=800, height=600");
                    break;
                case"tu":
                    window.open("http://www.tumblr.com/share/link?url=" + t + "&name=" + txt + "&description=" + txt, "_blank", "width=900, height=700")
            }
        }
    }(t[n]))
});
attachE(window, "DOMContentLoaded", function () {
    for (var t = document.querySelectorAll(".voteup-btn"), i, n = 0; n < t.length; n++) attachE(t[n], "click", function (n) {
        return function (t) {
            if (n.p = n.parentNode,
                !cUser.id) {
                var i = n.getAttribute("pid"),
                    r = (new Date).getTimezoneOffset() / 60;
                return setWait(1, n.p), xSend("GM.Boost_Anon " + i + ";1;" + r, "", function (n, t) {
                    return function (i) {
                        var r = i.split(";");
                        setWait(0, t);
                        r[
                            0] == "Y" ? (n.childNodes[0].innerHTML = r[1], t.setAttribute("v", 1)) : (r[0] == "N" && n.p.setAttribute("v", 1), alert(r[0] == "N" ? "You have already boosted this" : r[0].split(":")[0] == "E" ? r[0].split(":")[1] : "Please try again later"))
                    }
                }(n, n.p, i)), !1
            }
            ulCheck(function () {
                gEvent("Layout", "Vote");
                n.p = n.parentNode;
                voteU(t, n)
            })
        }
    }(t[n]));
    for (t = document.querySelectorAll(".obox-report"), n = 0; n < t.length; n++) attachE(t[n], "click", function (n) {
        return function (
            t) {
            ulCheck(function () {
                gEvent("Layout", "Report");
                n.p = n.parentNode;
                cmtEdit(t, n)
            })
        }
    }(t[n]));
    i = document.location.hash + "";
    i.indexOf("signup-") == -1 || cUser.id || (signupShow(1), i = i.split("-"), i.shift(), i = i.join(
        "-"), document.ulAfter = function (n) {
        return function () {
            setWait(1);
            document.location = "/" + n
        }
    }(i), document.location.hash = "")
});
attachE(document, "DOMContentLoaded", function () {
    var i, n, t, r;
    if (obj("guide-list")) {
        for (sys.createlist({
            template: "guide-section",
            id: "guide",
            p: obj("guide-list"),
            src: "Clash.Guide_Sections",
            sort: {rid: [{n: "rid", db: "List_ID", o: 0}]},
            filter: "rid",
            global: {
                phtitle: "Enter section title", phbody:
                    "Add your section body here", add: function (n, t) {
                    sys.guide.add("p", t.getAttribute("rid"))
                }, del: function (n, t) {
                    var i = t.p.parentNode;
                    sys.guide.remove(t.p.getAttribute("rid"));
                    i.className != "glist" || i.childNodes.length || sys.guide.remove(i.parentNode.getAttribute("rid"));
                    sys.guide.save()
                }, pic: function (n, t) {
                    document.body.getAttribute("upload") != "1" && t.p.setAttribute("photo", 1)
                }, picC: function (n, t) {
                    var i = t.parentNode.parentNode,
                        u = sys.guide.find(t.p.getAttribute("rid")),
                        r = i.childNodes[0].childNodes[0];
                    sys.upload.init({
                        finp: t,
                        prev: i.childNodes[0],
                        prog: i.childNodes[1],
                        img: r,
                        postTo: "Poll.Upload_Picture @fname",
                        postCB:
                            function (n, t) {
                                return function (i) {
                                    i = i.split(";");
                                    n.src = i[2];
                                    t.img = i[2];
                                    t.photo = 1;
                                    n.style.cssText = "";
                                    sys.guide.save()
                                }
                            }(r, u)
                    })
                }, picD: function (n, t) {
                    sys.create({
                        id: "confirm-win",
                        title: "Remove Picture?",
                        msg:
                            "This will remove your Picture.",
                        okCB: function (n, t) {
                            return function () {
                                t.setAttribute("photo", 0);
                                n.src = "";
                                n.style.display = "none";
                                var i = sys.guide.find(t.getAttribute("rid"));
                                return i.img = "", i.photo = 0, sys.guide.save(), !0
                            }
                        }(t.parentNode.childNodes[0], t.p)
                    })
                }, picR: function (n, t) {
                    var i = sys.guide.find(t.p.getAttribute("rid")).pic;
                    setWait(1);
                    sys.send("Poll.Rotate_Picture", "pic=" + encodeURIComponent(i), function (
                        n) {
                        return function (t) {
                            t == "Y" ? (n.src = n.src.replace(/[\?]tt[\=][\d\.]+/gi, "") + "?tt=" + (new Date).getTime(), sys.guide.save()) : setWait(0)
                        }
                    }(t.parentNode.childNodes[0]))
                }, mup: function (n, t) {
                    sys.guide.swap(t.p, t.p.previousSibling)
                }, mdown: function (n, t) {
                    sys.guide.swap(t.p.nextSibling, t.p)
                }, opt: function (n, t) {
                    sys.guideopt || sys.create({
                        id: "guideopt",
                        template: "window",
                        title: "Section Options",
                        msg: "",
                        objtype: "ok-cancel",
                        visible: 0,
                        inputs: {
                            template: "win-select",
                            notitle: {
                                label: "Title",
                                options: [{
                                    value: 0,
                                    txt: "Visible"
                                }, {value: 1, txt: "Hidden"}]
                            },
                            imgpos: {
                                label: "Picture",
                                options: [{value: 0, txt: "Right"}, {
                                    value: 1,
                                    txt: "Left"
                                }, {
                                    value:
                                        2, txt: "Below"
                                }]
                            }
                        },
                        onShow: function () {
                            var r = sys.guideopt.o, t = sys.guideopt.inputs, i,
                                n;
                            for (i in t) t[i].dom && (n = t[i].dom.childNodes[1].childNodes[0], n.value = r[n.id] ? r[n.id] : 0)
                        },
                        okCB: function () {
                            var t, n, i, r;
                            sys.guideopt.show(0);
                            t = sys.guideopt.o;
                            n = sys.guideopt.inputs;
                            for (i in n) n[i].dom && (r = n[i].dom.childNodes[1].childNodes[0], t[r.id] = r.value);
                            sys.guide.update(t);
                            sys.guide.save()
                        }
                    });
                    sys.guideopt.o = sys.guide.find(t.p.getAttribute("rid"));
                    sys.guideopt.show(1)
                }, ch: function (n, t) {
                    var i = sys.guide.find(t.p.getAttribute("rid"));
                    i.title = t.value;
                    sys.guide.save()
                }
            },
            perItem: function (n) {
                return n.photo = n.img ? 1 : 0, n
            },
            swap:
                function (n, t) {
                    sys.guide.find(n.getAttribute("rid")).pos--;
                    sys.guide.find(t.getAttribute("rid")).pos++;
                    n.parentNode.insertBefore(n, t);
                    sys.guide.save()
                },
            save: function (n, t, i) {
                dObj.id || n ? (clearTimeout(sys.guide.tmr), n ? t ? (sys.publishwin || sys.create({
                    id: "publishwin",
                    template: "window",
                    title: "Publish Guide",
                    msg: "Please select a category and tags for your Guide",
                    objtype: "ok-cancel",
                    visible: 0,
                    inputs: {
                        template:
                            "win-input", pubcat: {
                            label: "Category",
                            template: "win-select",
                            options: [{
                                value: "Base Design",
                                txt: "Base Design"
                            }, {
                                value: "Attack Strategies",
                                txt: "Attack Strategies"
                            }, {
                                value: "Trophy Strategies",
                                txt: "Trophy Strategies"
                            },
                                {
                                    value: "Farming Strategies",
                                    txt: "Farming Strategies"
                                }, {
                                    value: "War Strategies",
                                    txt: "War Strategies"
                                }, {value: "Other", txt: "Other"}]
                        }, pubtags: {label: "Tags", template: "win-tag"}
                    },
                    onShow: function () {
                        var t = sys.publishwin.inputs, i, n;
                        for (i in t) t[i].dom && (n = t[i].dom.childNodes[1].childNodes[0], n.value = dObj[n.id.substr(3)] ? dObj[n.id.substr(3)] : "");
                        n = t.pubtags.dom.childNodes[1];
                        n.childNodes[0].name = "lt-tag-v";
                        n.childNodes[1].id = "lt-tags";
                        n.childNodes[2].id = "lt-taglist";
                        n.childNodes[1].innerHTML = dObj.tags;
                        tagConvertAllCB(dObj.taglist);
                        n.childNodes[1].innerHTML += ",&nbsp;"
                    },
                    okCB: function () {
                        var n = sys.publishwin.inputs, t, i;
                        for (t in n) n[t].dom && (i = n[t].dom.childNodes[1].childNodes[0], dObj[i.id.substr(3)] = i.value);
                        return setWait(1), sys.guide.toServer(sys.publishwin.cb, !0, !0), !0
                    }
                }), sys.publishwin.cb = i, setWait(0),
                    sys.publishwin.show(1)) : sys.guide.toServer(i, n, t) : sys.guide.tmr = setTimeout(function (n, t, i) {
                    return function () {
                        sys.guide.toServer(n, t, i)
                    }
                }(i, n, t), 3e3)) : sys.guide.toStore(i)
            },
            getValue: function () {
                for (var t =
                    sys.guide.list, i = [], u, r, n = 0; n < t.length; n++) {
                    u = {};
                    for (r in t[n]) typeof t[n][r] != "object" && (u[r] = t[n][r]);
                    i.push(u)
                }
                return i.sort(function (n, t) {
                    return n.pos == t.pos ? 0 : n.pos > t.pos ? 1 : -1
                }), gObj.list = i, gObj.c = i.length + 1, JSON.stringify(gObj)
            },
            toStore: function (n) {
                localStorage.setItem("guide", sys.guide.getValue());
                n && n(!0)
            },
            toServer: function (n, t, i) {
                obj("guide-saved").setAttribute("saved", "w");
                sys.send("Clash.Guide_Save",
                    (i ? "publish=1&" : "") + "g=" + encodeURIComponent(JSON.stringify(dObj)) + "&v=" + encodeURIComponent(sys.guide.getValue()), function (n) {
                        return function (i) {
                            i = i.split(";");
                            i[0] == "Y" ? (dObj.id = parseInt(i[1]), dObj.tref =
                                i[2], dObj.p = parseInt(i[3]), sys.guide.setPreview(), obj("guide-saved").setAttribute("saved", (t ? "" : "Auto ") + "Saved " + (new Date).format("full-short")), localStorage.setItem("guide", "")) : obj("guide-saved").setAttribute("saved", t ? "" : "Auto Save Error");
                            n && n(i[0] == "Y", i)
                        }
                    }(n))
            },
            fromStore: function () {
                var n = localStorage.getItem("guide"), t;
                t = n ? JSON.parse(n) : {
                    c: 2, list: [{
                        rid: 1,
                        pos: 1,
                        title: "",
                        body: "",
                        img: "",
                        photo:
                            0,
                        type: "p",
                        notitle: 0,
                        imgpos: 0,
                        phtitle: "Enter a title for your guide",
                        phbody: "Enter a description for your guide"
                    }, {
                        rid: 2,
                        pos: 2,
                        title: "",
                        body: "",
                        img: "",
                        photo: 0,
                        notitle: 0,
                        imgpos: 0,
                        type: "p"
                    }]
                };
                sys.guide.clear();
                sys.guide.load(t)
            },
            setPreview: function () {
                var n = obj("guide-preview");
                n.setAttribute("s", 1);
                n.setAttribute("p", dObj.p);
                n.childNodes[0].href = "/CT-" + dObj.id + "/" + dObj.tref + (dObj.p == 1 ? "" : "?preview=y")
            },
            add: function (n, t) {
                var i = sys.guide.list.length + 1, r = [];
                r.push({
                    rid: i,
                    pos: i,
                    title: "",
                    body: "",
                    type: n,
                    img: "",
                    notitle: 0,
                    imgpos: 0,
                    photo: 0
                });
                t && (r[0].p = ".guide-section[k][rid='" + t + "'] .glist");
                n == "l" && r.push(
                    {
                        rid: i + 1,
                        pos: i + 1,
                        title: "",
                        body: "",
                        type: "p",
                        img: "",
                        notitle: 0,
                        imgpos: 0,
                        photo: 0,
                        p: ".guide-section[k][rid='" + i + "'] .glist"
                    });
                sys.guide.load({c: i + (n == "l" ? 1 : 2), nosort: 1, list: r})
            },
            saveCB: function (n, t, i) {
                setWait(
                    0);
                n ? i && (sys.create({
                    id: "publish-win",
                    title: "Guide Published",
                    msg: "<p>Your guide has been published!<\/p><p><a id='publish-win-link' href='/'>Click here<\/a> to preview your guide<\/p>",
                    objtype: "ok"
                }),
                    obj("publish-win-link").href = obj("guide-preview").childNodes[0].href) : t[0] != "E" && (console.log(t), sys.postSend("E:Unable to " + (i ? "publish" : "save") + " guide, please try again later"))
            }
        }), attachE(obj("guide-btn-p"),
            "click", function () {
                sys.guide.add("p")
            }), attachE(obj("guide-btn-l"), "click", function () {
            sys.guide.add("l")
        }), attachE(obj("guide-btn-save"), "click", function () {
            setWait(1);
            sys.guide.save(!0, !1, function (n, t) {
                sys.guide.saveCB(n, t, 0)
            })
        }), attachE(obj("guide-btn-publish"), "click", function () {
            setWait(1);
            sys.guide.save(!0, !0, function (n, t) {
                sys.guide.saveCB(n, t, 1)
            })
        }), dObj.id ? (sys.guide.load(gObj), sys.guide.setPreview(
        )) : (sys.guide.fromStore(), attachE(obj("guide-preview").childNodes[0], "click", function (n) {
            return dObj.id ? !0 : (sys.create({
                id: "reset-win",
                title: "Clear Guide Editor",
                msg: "<p>This will remove all your current content, are you sure?<\/p>",
                okCB: function () {
                    return setWait(1), localStorage.setItem("guide", ""), document.location = "/Edit-Guide", !0
                }
            }), preventDefault(n), n.returnValue = !1, !1)
        })), sys.guide.postLoad = function (n) {
            for (var i, t = 0; t < n.list.length; t++) i = "textedit-" + n.list[t].rid, obj(".guide-section[k][rid='" + n.list[t].rid + "'] > .body DIV").id = i, tinymce.EditorManager.execCommand("mceAddEditor", !0, i)
        }, i = document.querySelectorAll(".guide-section .body > DIV"),
                 n = 0; n < i.length; n++) i[n].className || (i[n].className = "guideedit");
        tinymceNImage();
        t = {
            selector: "DIV.guideedit",
            theme: "modern",
            inline: !0,
            plugins: ["advlist autolink link nimage lists charmap print preview hr anchor pagebreak spellchecker",
                "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking", "save table contextmenu directionality template paste textcolor placeholder"],
            external_plugins: {
                nanospell:
                    "/nanospell/plugin.js"
            },
            nanospell_server: "asp",
            init_instance_callback: mceEditLoaded,
            forced_root_block: "div",
            image_advtab: !0,
            statusbar: !1,
            menubar: !1,
            setup: function (n) {
                n.findG = function (n) {
                    return function () {
                        var t = n.getElement().getAttribute("pl");
                        return !t || !sys.guide ? !1 : sys.guide.find(t)
                    }
                }(n);
                n.on("focus", function () {
                    var t = n.findG();
                    t && t.dom && t.dom.setAttribute("focus", 1)
                });
                n.on("blur", function () {
                    var t =
                        n.findG();
                    t && t.dom && t.dom.setAttribute("focus", 0)
                });
                n.on("change", function () {
                    var t = n.findG();
                    t && (t.body = n.getContent(), sys.guide.save())
                })
            }
        };
        r = ["bold italic underline | bullist numlist outdent indent",
            "forecolor | alignleft aligncenter alignright | link image media"];
        obj("content").offsetWidth > 480 ? t.toolbar = r.join(" | ") : (t.toolbar1 = r[0], t.toolbar2 = r[1]);
        tinymce.init(t)
    }
})