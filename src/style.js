export const toastStyle = `
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
