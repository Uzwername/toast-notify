export const toastDefault = {
    tapToDismiss: true,
    toastClass: 'toast',
    containerId: 'igho-toast-container',
    debug: false,

    showMethod: 'fadeIn', //fadeIn, slideDown, and show are built into jQuery
    showDuration: 300,
    showEasing: 'swing', //swing and linear are built into jQuery
    hideMethod: 'fadeOut',
    hideDuration: 1000,
    hideEasing: 'swing',
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


// bottomfullwidth, topfullwidth, bottomcenter, topcenter


