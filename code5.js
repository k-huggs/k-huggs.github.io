gdjs.Enter_32sceneCode = {};
gdjs.Enter_32sceneCode.GDEnterTxtObjects1= [];
gdjs.Enter_32sceneCode.GDEnterTxtObjects2= [];
gdjs.Enter_32sceneCode.GDEmoteHeartObjects1= [];
gdjs.Enter_32sceneCode.GDEmoteHeartObjects2= [];

gdjs.Enter_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Enter_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Enter_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.Enter_32sceneCode.condition2IsTrue_0 = {val:false};


gdjs.Enter_32sceneCode.mapOfGDgdjs_46Enter_9532sceneCode_46GDEnterTxtObjects1Objects = Hashtable.newFrom({"EnterTxt": gdjs.Enter_32sceneCode.GDEnterTxtObjects1});
gdjs.Enter_32sceneCode.mapOfGDgdjs_46Enter_9532sceneCode_46GDEnterTxtObjects1Objects = Hashtable.newFrom({"EnterTxt": gdjs.Enter_32sceneCode.GDEnterTxtObjects1});
gdjs.Enter_32sceneCode.mapOfGDgdjs_46Enter_9532sceneCode_46GDEnterTxtObjects1Objects = Hashtable.newFrom({"EnterTxt": gdjs.Enter_32sceneCode.GDEnterTxtObjects1});
gdjs.Enter_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("EnterTxt"), gdjs.Enter_32sceneCode.GDEnterTxtObjects1);

gdjs.Enter_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Enter_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Enter_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Enter_32sceneCode.mapOfGDgdjs_46Enter_9532sceneCode_46GDEnterTxtObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Enter_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Enter_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Enter_32sceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Splash Screen", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("EnterTxt"), gdjs.Enter_32sceneCode.GDEnterTxtObjects1);

gdjs.Enter_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Enter_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Enter_32sceneCode.mapOfGDgdjs_46Enter_9532sceneCode_46GDEnterTxtObjects1Objects, runtimeScene, true, true);
}if (gdjs.Enter_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Enter_32sceneCode.GDEnterTxtObjects1 */
{for(var i = 0, len = gdjs.Enter_32sceneCode.GDEnterTxtObjects1.length ;i < len;++i) {
    gdjs.Enter_32sceneCode.GDEnterTxtObjects1[i].enableEffect("Hover", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("EnterTxt"), gdjs.Enter_32sceneCode.GDEnterTxtObjects1);

gdjs.Enter_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Enter_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Enter_32sceneCode.mapOfGDgdjs_46Enter_9532sceneCode_46GDEnterTxtObjects1Objects, runtimeScene, true, false);
}if (gdjs.Enter_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Enter_32sceneCode.GDEnterTxtObjects1 */
{for(var i = 0, len = gdjs.Enter_32sceneCode.GDEnterTxtObjects1.length ;i < len;++i) {
    gdjs.Enter_32sceneCode.GDEnterTxtObjects1[i].enableEffect("Hover", true);
}
}}

}


};

gdjs.Enter_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Enter_32sceneCode.GDEnterTxtObjects1.length = 0;
gdjs.Enter_32sceneCode.GDEnterTxtObjects2.length = 0;
gdjs.Enter_32sceneCode.GDEmoteHeartObjects1.length = 0;
gdjs.Enter_32sceneCode.GDEmoteHeartObjects2.length = 0;

gdjs.Enter_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Enter_32sceneCode'] = gdjs.Enter_32sceneCode;
