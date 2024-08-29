gdjs.LobbyCode = {};
gdjs.LobbyCode.localVariables = [];
gdjs.LobbyCode.GDjoinObjects1= [];
gdjs.LobbyCode.GDjoinObjects2= [];
gdjs.LobbyCode.GDcreateObjects1= [];
gdjs.LobbyCode.GDcreateObjects2= [];
gdjs.LobbyCode.GDChannelObjects1= [];
gdjs.LobbyCode.GDChannelObjects2= [];


gdjs.LobbyCode.userFunc0x87ed68 = function GDJSInlineCode(runtimeScene) {
"use strict";
function detectEnvironment() {
    // Check if Telegram WebApp API is available
    if (typeof window.Telegram !== 'undefined' && typeof window.Telegram.WebApp !== 'undefined') {
        console.log("Telegram WebApp is available");

        // Initialize the WebApp (this prepares the app for interaction with Telegram)
        const telegramWebApp = window.Telegram.WebApp;
        telegramWebApp.ready();

        // Access and log Telegram WebApp features
        console.log("Telegram WebApp initialized.");
    } else {
        // Telegram WebApp API is not available, checking other environments
        console.log("Telegram WebApp is not available");

        // Detect if running inside an iframe
        if (window.self !== window.top) {
            console.log("App is running inside an iframe.");
        } else if (typeof window.cordova !== 'undefined') {
            console.log("App is running in a Cordova/PhoneGap environment.");
        } else if (typeof window.ReactNativeWebView !== 'undefined') {
            console.log("App is running in a React Native WebView.");
        } else if (typeof window.navigator.standalone !== 'undefined' && window.navigator.standalone) {
            console.log("App is running as a standalone PWA on iOS.");
        } else if (window.matchMedia('(display-mode: standalone)').matches) {
            console.log("App is running as a standalone PWA.");
        } else if (window.matchMedia('(display-mode: fullscreen)').matches) {
            console.log("App is running in fullscreen mode.");
        } else {
            console.log("App is running in a regular browser window.");
        }

        // Log the entire window object for further inspection
        console.log("window object:", window);
    }
}

// Call the function to detect the environment
detectEnvironment();

};
gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDjoinObjects1Objects = Hashtable.newFrom({"join": gdjs.LobbyCode.GDjoinObjects1});
gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDcreateObjects1Objects = Hashtable.newFrom({"create": gdjs.LobbyCode.GDcreateObjects1});
gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDChannelObjects1Objects = Hashtable.newFrom({"Channel": gdjs.LobbyCode.GDChannelObjects1});
gdjs.LobbyCode.eventsList0 = function(runtimeScene) {

{



}


{



}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.LobbyCode.userFunc0x87ed68(runtimeScene);

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("join"), gdjs.LobbyCode.GDjoinObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDjoinObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Join", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("create"), gdjs.LobbyCode.GDcreateObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDcreateObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Create", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Channel"), gdjs.LobbyCode.GDChannelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDChannelObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9684420);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/channel/UCsZ4Ue8c94YLJDbGRafCI5Q", runtimeScene);
}}

}


};

gdjs.LobbyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LobbyCode.GDjoinObjects1.length = 0;
gdjs.LobbyCode.GDjoinObjects2.length = 0;
gdjs.LobbyCode.GDcreateObjects1.length = 0;
gdjs.LobbyCode.GDcreateObjects2.length = 0;
gdjs.LobbyCode.GDChannelObjects1.length = 0;
gdjs.LobbyCode.GDChannelObjects2.length = 0;

gdjs.LobbyCode.eventsList0(runtimeScene);

return;

}

gdjs['LobbyCode'] = gdjs.LobbyCode;
