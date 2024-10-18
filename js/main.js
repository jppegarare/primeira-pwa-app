window.onload = () => {
    "use strict";
    if("servicdWorker" in navigator){
        navigator.serviceWorker.register("./sw,js");
    }
};