// For UCBrowser and Opera specifically
if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) !== -1 ){
    //render unsupported message
    alert("This browser isn't fully supported for this application and might experience issues. Please update or use other browsers, preferably firefox or chrome!");
}else if(navigator.userAgent.indexOf("UBrowser") !== -1 ){
    //render unsupported message
    alert("This browser isn't fully supported for this application and might experience issues. Please update or use other browsers, preferably firefox or chrome!");
}

// Get the browser
function get_browser() {
    let ua = navigator.userAgent, tem,
        M = ua.match(/(opera|chrome|safari|firefox|msie|ucbrowser|trident(?=\/))\/?\s*(\d+)/i) || [];

    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return { name: 'IE', version: (tem[1] || '') };
    }

    if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR\/(\d+)/)
        if (tem != null) { return { name: 'Opera', version: tem[1] }; }
    }

    if (window.navigator.userAgent.indexOf("Edge") > -1) {
        tem = ua.match(/\Edge\/(\d+)/)
        if (tem != null) { return { name: 'Edge', version: tem[1] }; }
    }

    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];

    if ((tem = ua.match(/version\/(\d+)/i)) != null) {
        M.splice(1, 1, tem[1]);
    }

    return {
        name: M[0],
        version: +M[1]
    };
}

const browser = get_browser();
const is_supported = isSupported(browser);

// Check if the browser is supported
function isSupported(browser) {
    let supported = false;

    if (browser.name === "Chrome" && browser.version >= 48) {
        supported = true;
    } else if (browser.name === "Firefox" && browser.version >= 52) {
        supported = true;
    } else if (browser.name === "Safari" && browser.version >= 10) {
        supported = true;
    } else if ((browser.name === "MSIE" || browser.name === "IE") && browser.version <= 11) {
        supported = false;
    } else if (browser.name === "UCBrowser") {
        supported = false;
    } else if (browser.name === "Edge" && browser.version >= 14) {
        supported = true;
    }
    return supported;
}

if (!is_supported) {
    //render unsupported message
    alert("This browser isn't fully supported for this application and might experience issues. Please update or use other browsers, preferably firefox or chrome!");
}

// if (!is_supported) {
//     //render unsupported message
//     alert("This browser is not supported for this application. Please use other browsers!");
//     document.write("<h1>The app is not supported in IE. Please use other browsers!</h1>");
// } else {
//     alert("The browser is supported");
//     //render app
//     const elem = document.createElement("div");
//     elem.setAttribute("id", "app")
//     document.body.appendChild(elem);
// }


// else if(navigator.userAgent.indexOf("Edge") !== -1 )
// {
//     alert('Edge');
// }
// else if(navigator.userAgent.indexOf("Chrome") !== -1 )
// {
//     alert('Chrome');
// }
// else if(navigator.userAgent.indexOf("Safari") !== -1)
// {
//     alert('Safari');
// }
// else if(navigator.userAgent.indexOf("Firefox") !== -1 )
// {
//     alert('Firefox');
// }
// else if((navigator.userAgent.indexOf("MSIE") !== -1 ) || (!!document.documentMode === true )) //IF IE > 10
// {
//     alert('IE');
// }
