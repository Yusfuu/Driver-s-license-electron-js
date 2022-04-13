const electron = require("electron");
window.logMe =()=>{
    console.log("preload");
}
window.api = electron