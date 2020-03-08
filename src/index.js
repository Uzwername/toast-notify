const style = document.createElement('style');
style.innerHTML = `
.toast-title {
    font-weight: bold;
}
.toast-message {
    -ms-word-wrap: break-word;
    word-wrap: break-word;
}
.toast-message a,
.toast-message label {
    color: #FFFFFF;
}
.toast-message a:hover {
    color: #CCCCCC;
    text-decoration: none;
}
.toast-close-button {
    position: relative;
    right: -0.3em;
    top: -0.3em;
    float: right;
    font-size: 20px;
    font-weight: bold;
    color: #FFFFFF;
    -webkit-text-shadow: 0 1px 0 #ffffff;
    text-shadow: 0 1px 0 #ffffff;
    opacity: 0.8;
    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);
    filter: alpha(opacity=80);
    line-height: 1;
}
.toast-close-button:hover,
.toast-close-button:focus {
    color: #000000;
    text-decoration: none;
    cursor: pointer;
    opacity: 0.4;
    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=40);
    filter: alpha(opacity=40);
}
.rtl .toast-close-button {
    left: -0.3em;
    float: left;
    right: 0.3em;
}
/*Additional properties for button version
 iOS requires the button element instead of an anchor tag.
 If you want the anchor version, it requires \`href="#"\`.*/
button.toast-close-button {
    padding: 0;
    cursor: pointer;
    background: transparent;
    border: 0;
    -webkit-appearance: none;
}
.topcenter {
    top: 0;
    right: 0;
    width: 100%;
    align-items: center;
    display: flex;
        flex-direction: column;
         width: 300px;
}
.bottomcenter {
    bottom: 0;
    right: 0;
    width: 100%;
     align-items: center;
    display: flex;
        flex-direction: column;
         width: 300px;
}
.topfullwidth {
    top: 0;
    right: 0;
    width: 100%;
}
.bottomfullwidth {
    bottom: 0;
    right: 0;
    width: 100%;
}
.topleft {
    top: 12px;
    left: 12px;
     width: 300px;
}
.topright {
    top: 12px;
    right: 12px;
     width: 300px;
}
.bottomright {
    right: 12px;
    bottom: 12px;
     width: 300px;
}
.bottomleft {
    bottom: 12px;
    left: 12px;
     width: 300px;
}
#igho-toast-container {
    position: fixed;
    z-index: 999999;
    pointer-events: none;
    /*overrides*/
}
#igho-toast-container * {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
#igho-toast-container > div {
    position: relative;
    pointer-events: auto;
    overflow: hidden;
    margin: 0 0 6px;
    padding: 15px 15px 15px 50px;
   
    -moz-border-radius: 3px 3px 3px 3px;
    -webkit-border-radius: 3px 3px 3px 3px;
    border-radius: 3px 3px 3px 3px;
    background-position: 15px center;
    background-repeat: no-repeat;
    -moz-box-shadow: 0 0 12px #999999;
    -webkit-box-shadow: 0 0 12px #999999;
    box-shadow: 0 0 12px #999999;
    color: #FFFFFF;
    opacity: 0.8;
    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);
    filter: alpha(opacity=80);
}
#igho-toast-container > div.rtl {
    direction: rtl;
    padding: 15px 50px 15px 15px;
    background-position: right 15px center;
}
#igho-toast-container > div:hover {
    -moz-box-shadow: 0 0 12px #000000;
    -webkit-box-shadow: 0 0 12px #000000;
    box-shadow: 0 0 12px #000000;
    opacity: 1;
    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
    filter: alpha(opacity=100);
    cursor: pointer;
}

#igho-toast-container.toast-top-center > div,
#igho-toast-container.toast-bottom-center > div {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
}
#igho-toast-container.toast-top-full-width > div,
#igho-toast-container.toast-bottom-full-width > div {
    width: 96%;
    margin-left: auto;
    margin-right: auto;
}
.toast {
    background-color: #030303;
}
.success {
    color: #155724 !important;
    background-color: #d4edda;
    border-color: #c3e6cb;
}
.alert {
    color: #383d41 !important;
    background-color: #e2e3e5;
    border-color: #d6d8db;
}
.error {
    background-color: #BD362F;
}
.info {
    color: #0c5460 !important;
    background-color: #d1ecf1;
    border-color: #bee5eb;
}
.warning {
     color: #856404 !important;
    background-color: #fff3cd;
    border-color: #ffeeba;
}
.toast-progress {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 4px;
    background-color: #000000;
    opacity: 0.4;
    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=40);
    filter: alpha(opacity=40);
}
/*Responsive Design*/
@media all and (max-width: 240px) {
    #igho-toast-container > div {
        padding: 8px 8px 8px 50px;
        width: 11em;
    }
    #igho-toast-container > div.rtl {
        padding: 8px 50px 8px 8px;
    }
    #igho-toast-container .toast-close-button {
        right: -0.2em;
        top: -0.2em;
    }
    #igho-toast-container .rtl .toast-close-button {
        left: -0.2em;
        right: 0.2em;
    }
}
@media all and (min-width: 241px) and (max-width: 480px) {
    #igho-toast-container > div {
        padding: 8px 8px 8px 50px;
        width: 18em;
    }
    #igho-toast-container > div.rtl {
        padding: 8px 50px 8px 8px;
    }
    #igho-toast-container .toast-close-button {
        right: -0.2em;
        top: -0.2em;
    }
    #igho-toast-container .rtl .toast-close-button {
        left: -0.2em;
        right: 0.2em;
    }
}
@media all and (min-width: 481px) and (max-width: 768px) {
    #igho-toast-container > div {
        padding: 15px 15px 15px 50px;
        width: 25em;
    }
    #igho-toast-container > div.rtl {
        padding: 15px 50px 15px 15px;
    }
}
  `;
document.head.appendChild(style);

const toastDefault = {
    tapToDismiss: true,
    toastClass: 'toast',
    containerId: 'igho-toast-container',
    debug: false,

    showMethod: 'fadeIn', //fadeIn, slideDown, and show are built into jQuery
    showDuration: 300,
    showEasing: 'swing', //swing and linear are built into jQuery
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
    timeOut: 5000, // Set timeOut and extendedTimeOut to 0 to make it sticky
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
}

let toastId = 0;

let intervalId = null;


function hideToast({override, options, progressBar, toastElement}) {
    const method = override && options.closeMethod !== false ? options.closeMethod : options.hideMethod;
    const duration = override && options.closeDuration !== false ?
        options.closeDuration : options.hideDuration;
    const easing = override && options.closeEasing !== false ? options.closeEasing : options.hideEasing;
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
    let op = 1;  // initial opacity
    const timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}


function infade(element) {
    let op = 0.1;  // initial opacity
    element.style.display = 'block';
    let timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

function displayToast({toastElement, options, progressBar}) {
    toastElement.style.display = "none";
    infade(toastElement)
    if (options.timeOut > 0) {
        intervalId = setTimeout(() => {
            fadeOut(toastElement)
        }, options.timeOut);
        progressBar.maxHideTime = parseFloat(options.timeOut);
        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;

    }
}

function setSequence({options, toastElement, container}) {
    if (options.newestOnTop) {
        container.prepend(toastElement);
    }
    else {
        container.appendChild(toastElement);
    }
}

function setTitle({toastObj, titleElement, toastElement, options}) {
    if (toastObj.title) {
        const suffix = toastObj.title;

        const att = document.createAttribute("class");       // Create a "class" attribute
        att.value = options.titleClass;                           // Set the value of the class attribute
        titleElement.setAttributeNode(att);

        titleElement.innerHTML = suffix.toString()
        toastElement.appendChild(titleElement)
    }
}



function createContainer(options) {
    console.log(options)
    const div = document.createElement("div");
    const att = document.createAttribute("id");     // Create a "id" attribute
    att.value = options.containerId;

    const classAtt = document.createAttribute("class");     // Create a "id" attribute
    classAtt.value = options.position;


    div.setAttributeNode(att);
    div.setAttributeNode(classAtt);

    document.body.appendChild(div);

    return div;
}

function getContainer(options, create) {
    if (!options) { options = {...toastDefault} }
    let container = document.getElementById(options.containerId);
    if (container) {
        return container;
    }
    if (create) {
        container = createContainer(options);
    }
    return container;
}

function show(toastObj) {
    const options = {...toastDefault,...toastObj}
    const iconClass = toastObj.type || options.iconClass;
    const container = getContainer(options, true);


    const toastElement = document.createElement("div");
    const titleElement = document.createElement("div");
    const messageElement = document.createElement("div");
    const progressElement = document.createElement("div");
    const progressBar = {
        intervalId: null,
        hideEta: null,
        maxHideTime: null
    };
    const response = {
        toastId: toastId,
        state: 'visible',
        startTime: new Date(),
        options: options,
    };

    if (iconClass) {
        const att = document.createAttribute("class");       // Create a "class" attribute
        att.value = options.titleClass;                           // Set the value of the class attribute
        toastElement.setAttributeNode(att);

        toastElement.classList.add(options.toastClass);
        toastElement.classList.add(iconClass);
    }
    setTitle({toastObj, titleElement, toastElement, options})
    setSequence({container, titleElement, toastElement, options})
    displayToast({toastElement, options, progressBar});
    console.log(container)
    return `Displaying: ${toastObj.title}`;
}

export const toast = { show }
