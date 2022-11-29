gdjs.Instructions_32ScreenCode = {};
gdjs.Instructions_32ScreenCode.GDInstructionsTxtObjects1= [];
gdjs.Instructions_32ScreenCode.GDInstructionsTxtObjects2= [];
gdjs.Instructions_32ScreenCode.GDFarBackgroundObjects1= [];
gdjs.Instructions_32ScreenCode.GDFarBackgroundObjects2= [];
gdjs.Instructions_32ScreenCode.GDBackgroundObjects1= [];
gdjs.Instructions_32ScreenCode.GDBackgroundObjects2= [];
gdjs.Instructions_32ScreenCode.GDCloudsObjects1= [];
gdjs.Instructions_32ScreenCode.GDCloudsObjects2= [];
gdjs.Instructions_32ScreenCode.GDPlaneObjects1= [];
gdjs.Instructions_32ScreenCode.GDPlaneObjects2= [];
gdjs.Instructions_32ScreenCode.GDNearBackgroundObjects1= [];
gdjs.Instructions_32ScreenCode.GDNearBackgroundObjects2= [];
gdjs.Instructions_32ScreenCode.GDMenuBtnObjects1= [];
gdjs.Instructions_32ScreenCode.GDMenuBtnObjects2= [];

gdjs.Instructions_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.Instructions_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.Instructions_32ScreenCode.condition1IsTrue_0 = {val:false};


gdjs.Instructions_32ScreenCode.mapOfGDgdjs_46Instructions_9532ScreenCode_46GDMenuBtnObjects1Objects = Hashtable.newFrom({"MenuBtn": gdjs.Instructions_32ScreenCode.GDMenuBtnObjects1});
gdjs.Instructions_32ScreenCode.mapOfGDgdjs_46Instructions_9532ScreenCode_46GDMenuBtnObjects1Objects = Hashtable.newFrom({"MenuBtn": gdjs.Instructions_32ScreenCode.GDMenuBtnObjects1});
gdjs.Instructions_32ScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.Instructions_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Instructions_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Instructions_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start Screen", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MenuBtn"), gdjs.Instructions_32ScreenCode.GDMenuBtnObjects1);

gdjs.Instructions_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Instructions_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Instructions_32ScreenCode.mapOfGDgdjs_46Instructions_9532ScreenCode_46GDMenuBtnObjects1Objects, runtimeScene, true, false);
}if (gdjs.Instructions_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Instructions_32ScreenCode.GDMenuBtnObjects1 */
{for(var i = 0, len = gdjs.Instructions_32ScreenCode.GDMenuBtnObjects1.length ;i < len;++i) {
    gdjs.Instructions_32ScreenCode.GDMenuBtnObjects1[i].enableEffect("Hovering", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MenuBtn"), gdjs.Instructions_32ScreenCode.GDMenuBtnObjects1);

gdjs.Instructions_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Instructions_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Instructions_32ScreenCode.mapOfGDgdjs_46Instructions_9532ScreenCode_46GDMenuBtnObjects1Objects, runtimeScene, true, true);
}if (gdjs.Instructions_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Instructions_32ScreenCode.GDMenuBtnObjects1 */
{for(var i = 0, len = gdjs.Instructions_32ScreenCode.GDMenuBtnObjects1.length ;i < len;++i) {
    gdjs.Instructions_32ScreenCode.GDMenuBtnObjects1[i].enableEffect("Hovering", false);
}
}}

}


};

gdjs.Instructions_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Instructions_32ScreenCode.GDInstructionsTxtObjects1.length = 0;
gdjs.Instructions_32ScreenCode.GDInstructionsTxtObjects2.length = 0;
gdjs.Instructions_32ScreenCode.GDFarBackgroundObjects1.length = 0;
gdjs.Instructions_32ScreenCode.GDFarBackgroundObjects2.length = 0;
gdjs.Instructions_32ScreenCode.GDBackgroundObjects1.length = 0;
gdjs.Instructions_32ScreenCode.GDBackgroundObjects2.length = 0;
gdjs.Instructions_32ScreenCode.GDCloudsObjects1.length = 0;
gdjs.Instructions_32ScreenCode.GDCloudsObjects2.length = 0;
gdjs.Instructions_32ScreenCode.GDPlaneObjects1.length = 0;
gdjs.Instructions_32ScreenCode.GDPlaneObjects2.length = 0;
gdjs.Instructions_32ScreenCode.GDNearBackgroundObjects1.length = 0;
gdjs.Instructions_32ScreenCode.GDNearBackgroundObjects2.length = 0;
gdjs.Instructions_32ScreenCode.GDMenuBtnObjects1.length = 0;
gdjs.Instructions_32ScreenCode.GDMenuBtnObjects2.length = 0;

gdjs.Instructions_32ScreenCode.eventsList0(runtimeScene);

return;

}

gdjs['Instructions_32ScreenCode'] = gdjs.Instructions_32ScreenCode;
