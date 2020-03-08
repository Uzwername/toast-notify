"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var style = document.createElement('style');
style.innerHTML = "\n.toast-title {\n    font-weight: bold;\n}\n.toast-message {\n    -ms-word-wrap: break-word;\n    word-wrap: break-word;\n}\n.toast-message a,\n.toast-message label {\n    color: #FFFFFF;\n}\n.toast-message a:hover {\n    color: #CCCCCC;\n    text-decoration: none;\n}\n.toast-close-button {\n    position: relative;\n    right: -0.3em;\n    top: -0.3em;\n    float: right;\n    font-size: 20px;\n    font-weight: bold;\n    color: #FFFFFF;\n    -webkit-text-shadow: 0 1px 0 #ffffff;\n    text-shadow: 0 1px 0 #ffffff;\n    opacity: 0.8;\n    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);\n    filter: alpha(opacity=80);\n    line-height: 1;\n}\n.toast-close-button:hover,\n.toast-close-button:focus {\n    color: #000000;\n    text-decoration: none;\n    cursor: pointer;\n    opacity: 0.4;\n    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=40);\n    filter: alpha(opacity=40);\n}\n.rtl .toast-close-button {\n    left: -0.3em;\n    float: left;\n    right: 0.3em;\n}\n/*Additional properties for button version\n iOS requires the button element instead of an anchor tag.\n If you want the anchor version, it requires `href=\"#\"`.*/\nbutton.toast-close-button {\n    padding: 0;\n    cursor: pointer;\n    background: transparent;\n    border: 0;\n    -webkit-appearance: none;\n}\n.topcenter {\n    top: 0;\n    right: 0;\n    width: 100%;\n    align-items: center;\n    display: flex;\n        flex-direction: column;\n         width: 300px;\n}\n.bottomcenter {\n    bottom: 0;\n    right: 0;\n    width: 100%;\n     align-items: center;\n    display: flex;\n        flex-direction: column;\n         width: 300px;\n}\n.topfullwidth {\n    top: 0;\n    right: 0;\n    width: 100%;\n}\n.bottomfullwidth {\n    bottom: 0;\n    right: 0;\n    width: 100%;\n}\n.topleft {\n    top: 12px;\n    left: 12px;\n     width: 300px;\n}\n.topright {\n    top: 12px;\n    right: 12px;\n     width: 300px;\n}\n.bottomright {\n    right: 12px;\n    bottom: 12px;\n     width: 300px;\n}\n.bottomleft {\n    bottom: 12px;\n    left: 12px;\n     width: 300px;\n}\n#igho-toast-container {\n    position: fixed;\n    z-index: 999999;\n    pointer-events: none;\n    /*overrides*/\n}\n#igho-toast-container * {\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n#igho-toast-container > div {\n    position: relative;\n    pointer-events: auto;\n    overflow: hidden;\n    margin: 0 0 6px;\n    padding: 15px 15px 15px 50px;\n   \n    -moz-border-radius: 3px 3px 3px 3px;\n    -webkit-border-radius: 3px 3px 3px 3px;\n    border-radius: 3px 3px 3px 3px;\n    background-position: 15px center;\n    background-repeat: no-repeat;\n    -moz-box-shadow: 0 0 12px #999999;\n    -webkit-box-shadow: 0 0 12px #999999;\n    box-shadow: 0 0 12px #999999;\n    color: #FFFFFF;\n    opacity: 0.8;\n    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);\n    filter: alpha(opacity=80);\n}\n#igho-toast-container > div.rtl {\n    direction: rtl;\n    padding: 15px 50px 15px 15px;\n    background-position: right 15px center;\n}\n#igho-toast-container > div:hover {\n    -moz-box-shadow: 0 0 12px #000000;\n    -webkit-box-shadow: 0 0 12px #000000;\n    box-shadow: 0 0 12px #000000;\n    opacity: 1;\n    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n    filter: alpha(opacity=100);\n    cursor: pointer;\n}\n\n#igho-toast-container.toast-top-center > div,\n#igho-toast-container.toast-bottom-center > div {\n    width: 300px;\n    margin-left: auto;\n    margin-right: auto;\n}\n#igho-toast-container.toast-top-full-width > div,\n#igho-toast-container.toast-bottom-full-width > div {\n    width: 96%;\n    margin-left: auto;\n    margin-right: auto;\n}\n.toast {\n    background-color: #030303;\n}\n.success {\n    color: #155724 !important;\n    background-color: #d4edda;\n    border-color: #c3e6cb;\n}\n.alert {\n    color: #383d41 !important;\n    background-color: #e2e3e5;\n    border-color: #d6d8db;\n}\n.error {\n    background-color: #BD362F;\n}\n.info {\n    color: #0c5460 !important;\n    background-color: #d1ecf1;\n    border-color: #bee5eb;\n}\n.warning {\n     color: #856404 !important;\n    background-color: #fff3cd;\n    border-color: #ffeeba;\n}\n.toast-progress {\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    height: 4px;\n    background-color: #000000;\n    opacity: 0.4;\n    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=40);\n    filter: alpha(opacity=40);\n}\n/*Responsive Design*/\n@media all and (max-width: 240px) {\n    #igho-toast-container > div {\n        padding: 8px 8px 8px 50px;\n        width: 11em;\n    }\n    #igho-toast-container > div.rtl {\n        padding: 8px 50px 8px 8px;\n    }\n    #igho-toast-container .toast-close-button {\n        right: -0.2em;\n        top: -0.2em;\n    }\n    #igho-toast-container .rtl .toast-close-button {\n        left: -0.2em;\n        right: 0.2em;\n    }\n}\n@media all and (min-width: 241px) and (max-width: 480px) {\n    #igho-toast-container > div {\n        padding: 8px 8px 8px 50px;\n        width: 18em;\n    }\n    #igho-toast-container > div.rtl {\n        padding: 8px 50px 8px 8px;\n    }\n    #igho-toast-container .toast-close-button {\n        right: -0.2em;\n        top: -0.2em;\n    }\n    #igho-toast-container .rtl .toast-close-button {\n        left: -0.2em;\n        right: 0.2em;\n    }\n}\n@media all and (min-width: 481px) and (max-width: 768px) {\n    #igho-toast-container > div {\n        padding: 15px 15px 15px 50px;\n        width: 25em;\n    }\n    #igho-toast-container > div.rtl {\n        padding: 15px 50px 15px 15px;\n    }\n}\n  ";
document.head.appendChild(style);
var toastDefault = {
    tapToDismiss: true,
    toastClass: 'toast',
    containerId: 'igho-toast-container',
    debug: false,
    showMethod: 'fadeIn',
    showDuration: 300,
    showEasing: 'swing',
    onShown: undefined,
    hideMethod: 'fadeOut',
    hideDuration: 1000,
    hideEasing: 'swing',
    onHidden: undefined,
    closeMethod: false,
    closeDuration: false,
    closeEasing: false,
    closeOnHover: true,
    extendedTimeOut: 1000,
    iconClasses: {
        error: 'error',
        info: 'info',
        success: 'success',
        warning: 'warning',
        alert: 'alert'
    },
    iconClass: 'info',
    position: 'topleft',
    timeOut: 5000,
    titleClass: 'toast-title',
    messageClass: 'toast-message',
    escapeHtml: false,
    target: 'body',
    closeHtml: '<button type="button">&times;</button>',
    closeClass: 'toast-close-button',
    newestOnTop: true,
    preventDuplicates: false,
    progressBar: false,
    progressClass: 'toast-progress',
    rtl: false
};
var toastId = 0;
var intervalId = null;
function hideToast(_a) {
    var override = _a.override, options = _a.options, progressBar = _a.progressBar, toastElement = _a.toastElement;
    var method = override && options.closeMethod !== false ? options.closeMethod : options.hideMethod;
    var duration = override && options.closeDuration !== false ?
        options.closeDuration : options.hideDuration;
    var easing = override && options.closeEasing !== false ? options.closeEasing : options.hideEasing;
    if ($(':focus', $toastElement).length && !override) {
        return;
    }
    clearTimeout(progressBar.intervalId);
    return toastElement[method]({
        duration: duration,
        easing: easing,
        complete: function () {
            removeToast($toastElement);
            clearTimeout(intervalId);
            if (options.onHidden && response.state !== 'hidden') {
                options.onHidden();
            }
            response.state = 'hidden';
            response.endTime = new Date();
            publish(response);
        }
    });
}
function fadeOut(element) {
    var op = 1; // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}
function infade(element) {
    var op = 0.1; // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}
function displayToast(_a) {
    var toastElement = _a.toastElement, options = _a.options, progressBar = _a.progressBar;
    toastElement.style.display = "none";
    infade(toastElement);
    if (options.timeOut > 0) {
        intervalId = setTimeout(function () {
            fadeOut(toastElement);
        }, options.timeOut);
        progressBar.maxHideTime = parseFloat(options.timeOut);
        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
    }
}
function setSequence(_a) {
    var options = _a.options, toastElement = _a.toastElement, container = _a.container;
    if (options.newestOnTop) {
        container.prepend(toastElement);
    }
    else {
        container.appendChild(toastElement);
    }
}
function setTitle(_a) {
    var toastObj = _a.toastObj, titleElement = _a.titleElement, toastElement = _a.toastElement, options = _a.options;
    if (toastObj.title) {
        var suffix = toastObj.title;
        var att = document.createAttribute("class"); // Create a "class" attribute
        att.value = options.titleClass; // Set the value of the class attribute
        titleElement.setAttributeNode(att);
        titleElement.innerHTML = suffix.toString();
        toastElement.appendChild(titleElement);
    }
}
function createContainer(options) {
    console.log(options);
    var div = document.createElement("div");
    var att = document.createAttribute("id"); // Create a "id" attribute
    att.value = options.containerId;
    var classAtt = document.createAttribute("class"); // Create a "id" attribute
    classAtt.value = options.position;
    div.setAttributeNode(att);
    div.setAttributeNode(classAtt);
    document.body.appendChild(div);
    return div;
}
function getContainer(options, create) {
    if (!options) {
        options = __assign({}, toastDefault);
    }
    var container = document.getElementById(options.containerId);
    if (container) {
        return container;
    }
    if (create) {
        container = createContainer(options);
    }
    return container;
}
function show(toastObj) {
    var options = __assign(__assign({}, toastDefault), toastObj);
    var iconClass = toastObj.type || options.iconClass;
    var container = getContainer(options, true);
    var toastElement = document.createElement("div");
    var titleElement = document.createElement("div");
    var messageElement = document.createElement("div");
    var progressElement = document.createElement("div");
    var progressBar = {
        intervalId: null,
        hideEta: null,
        maxHideTime: null
    };
    var response = {
        toastId: toastId,
        state: 'visible',
        startTime: new Date(),
        options: options,
    };
    if (iconClass) {
        var att = document.createAttribute("class"); // Create a "class" attribute
        att.value = options.titleClass; // Set the value of the class attribute
        toastElement.setAttributeNode(att);
        toastElement.classList.add(options.toastClass);
        toastElement.classList.add(iconClass);
    }
    setTitle({ toastObj: toastObj, titleElement: titleElement, toastElement: toastElement, options: options });
    setSequence({ container: container, titleElement: titleElement, toastElement: toastElement, options: options });
    displayToast({ toastElement: toastElement, options: options, progressBar: progressBar });
    console.log(container);
    return "Displaying: " + toastObj.title;
}
exports.toast = { show: show };
