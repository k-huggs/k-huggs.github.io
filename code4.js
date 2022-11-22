gdjs.Splash_32ScreenCode = {};
gdjs.Splash_32ScreenCode.GDLogoVideoObjects1= [];
gdjs.Splash_32ScreenCode.GDLogoVideoObjects2= [];
gdjs.Splash_32ScreenCode.GDPresentsTxtObjects1= [];
gdjs.Splash_32ScreenCode.GDPresentsTxtObjects2= [];

gdjs.Splash_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.Splash_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.Splash_32ScreenCode.condition1IsTrue_0 = {val:false};


gdjs.Splash_32ScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.Splash_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Splash_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Splash_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("LogoVideo"), gdjs.Splash_32ScreenCode.GDLogoVideoObjects1);
gdjs.copyArray(runtimeScene.getObjects("PresentsTxt"), gdjs.Splash_32ScreenCode.GDPresentsTxtObjects1);
{for(var i = 0, len = gdjs.Splash_32ScreenCode.GDLogoVideoObjects1.length ;i < len;++i) {
    gdjs.Splash_32ScreenCode.GDLogoVideoObjects1[i].play();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "A FOOLS VOYAGE START SCREEN LOOP.mp3", true, 100, 1);
}{for(var i = 0, len = gdjs.Splash_32ScreenCode.GDLogoVideoObjects1.length ;i < len;++i) {
    gdjs.Splash_32ScreenCode.GDLogoVideoObjects1[i].resetTimer("VidDuration");
}
}{for(var i = 0, len = gdjs.Splash_32ScreenCode.GDPresentsTxtObjects1.length ;i < len;++i) {
    gdjs.Splash_32ScreenCode.GDPresentsTxtObjects1[i].setOpacity(0);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("PresentsTxt"), gdjs.Splash_32ScreenCode.GDPresentsTxtObjects1);
{for(var i = 0, len = gdjs.Splash_32ScreenCode.GDPresentsTxtObjects1.length ;i < len;++i) {
    gdjs.Splash_32ScreenCode.GDPresentsTxtObjects1[i].setOpacity(gdjs.Splash_32ScreenCode.GDPresentsTxtObjects1[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 40));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LogoVideo"), gdjs.Splash_32ScreenCode.GDLogoVideoObjects1);

gdjs.Splash_32ScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Splash_32ScreenCode.GDLogoVideoObjects1.length;i<l;++i) {
    if ( gdjs.Splash_32ScreenCode.GDLogoVideoObjects1[i].getTimerElapsedTimeInSecondsOrNaN("VidDuration") > 7 ) {
        gdjs.Splash_32ScreenCode.condition0IsTrue_0.val = true;
        gdjs.Splash_32ScreenCode.GDLogoVideoObjects1[k] = gdjs.Splash_32ScreenCode.GDLogoVideoObjects1[i];
        ++k;
    }
}
gdjs.Splash_32ScreenCode.GDLogoVideoObjects1.length = k;}if (gdjs.Splash_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start Screen", true);
}}

}


};

gdjs.Splash_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Splash_32ScreenCode.GDLogoVideoObjects1.length = 0;
gdjs.Splash_32ScreenCode.GDLogoVideoObjects2.length = 0;
gdjs.Splash_32ScreenCode.GDPresentsTxtObjects1.length = 0;
gdjs.Splash_32ScreenCode.GDPresentsTxtObjects2.length = 0;

gdjs.Splash_32ScreenCode.eventsList0(runtimeScene);

return;

}

gdjs['Splash_32ScreenCode'] = gdjs.Splash_32ScreenCode;
