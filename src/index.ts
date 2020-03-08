import {IOption, IToastObject} from "./interfaces/index";
import {toastDefault} from "./constants";
import {toastStyle} from "./style";

const style = document.createElement('style');
style.innerHTML = toastStyle
document.head.appendChild(style);

let intervalId = null;

function fadeOut(element: HTMLElement) {
    let op = 1;  // initial opacity
    const timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = `${op}`;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}


function infade(element : HTMLElement) {
    let op = 0.1;  // initial opacity
    element.style.display = 'block';
    let timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = `${op}`;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

function displayToast({toastElement, options} :{ toastElement: HTMLElement, options: IOption}) {
    toastElement.style.display = "none";
    infade(toastElement)
    if (options.timeOut > 0) {
        intervalId = setTimeout(() => {
            fadeOut(toastElement)
        }, options.timeOut);

    }
}

function setSequence({options, toastElement, container}: {options: IToastObject, toastElement: HTMLElement, container: HTMLElement}) {
    if (options.newestOnTop) {
        container.prepend(toastElement);
    }
    else {
        container.appendChild(toastElement);
    }
}

function setTitle({toastObj, titleElement, toastElement, options}: {toastObj: IToastObject, titleElement: HTMLElement, toastElement: HTMLElement, options: IOption}) {
    if (toastObj.title) {
        const suffix = toastObj.title;

        const att = document.createAttribute("class");       // Create a "class" attribute
        att.value = options.titleClass;                           // Set the value of the class attribute
        titleElement.setAttributeNode(att);

        titleElement.innerHTML = suffix.toString()
        toastElement.appendChild(titleElement)
    }
}

function setMessage({toastObj, messageElement, toastElement, options}: {toastObj: IToastObject, messageElement: HTMLElement, toastElement: HTMLElement, options: IOption}) {
    if (toastObj.message) {
        const att = document.createAttribute("class");       // Create a "class" attribute
        att.value = options.messageClass;                           // Set the value of the class attribute
        messageElement.setAttributeNode(att);

        messageElement.innerHTML = toastObj.message
        toastElement.appendChild(messageElement)

    }
}



function createContainer(options: IOption) {
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

function getContainer(options: IOption, create: boolean) {
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

function show(toastObj: IToastObject) {
    const options = {...toastDefault,...toastObj}
    const iconClass = toastObj.type || options.iconClass;
    const container = getContainer(options, true);


    const toastElement = document.createElement("div");
    const titleElement = document.createElement("div");
    const messageElement = document.createElement("div");

    if (iconClass) {
        const att = document.createAttribute("class");       // Create a "class" attribute
        att.value = options.titleClass;                           // Set the value of the class attribute
        toastElement.setAttributeNode(att);

        toastElement.classList.add(options.toastClass);
        toastElement.classList.add(iconClass);
    }
    setTitle({toastObj, titleElement, toastElement, options})
    setMessage({toastObj, messageElement, toastElement, options})
    setSequence({container, toastElement, options})
    displayToast({toastElement, options});
    return `Displaying: ${toastObj.message}`;
}

export const toast = { show }
