gdjs.Start_32ScreenCode = {};
gdjs.Start_32ScreenCode.GDPlayerObjects1= [];
gdjs.Start_32ScreenCode.GDPlayerObjects2= [];
gdjs.Start_32ScreenCode.GDPlayerObjects3= [];
gdjs.Start_32ScreenCode.GDPlayerObjects4= [];
gdjs.Start_32ScreenCode.GDTitleObjects1= [];
gdjs.Start_32ScreenCode.GDTitleObjects2= [];
gdjs.Start_32ScreenCode.GDTitleObjects3= [];
gdjs.Start_32ScreenCode.GDTitleObjects4= [];
gdjs.Start_32ScreenCode.GDPlayerNameObjects1= [];
gdjs.Start_32ScreenCode.GDPlayerNameObjects2= [];
gdjs.Start_32ScreenCode.GDPlayerNameObjects3= [];
gdjs.Start_32ScreenCode.GDPlayerNameObjects4= [];
gdjs.Start_32ScreenCode.GDCityScapeBackgroundObjects1= [];
gdjs.Start_32ScreenCode.GDCityScapeBackgroundObjects2= [];
gdjs.Start_32ScreenCode.GDCityScapeBackgroundObjects3= [];
gdjs.Start_32ScreenCode.GDCityScapeBackgroundObjects4= [];
gdjs.Start_32ScreenCode.GDBuildingBackgroundsObjects1= [];
gdjs.Start_32ScreenCode.GDBuildingBackgroundsObjects2= [];
gdjs.Start_32ScreenCode.GDBuildingBackgroundsObjects3= [];
gdjs.Start_32ScreenCode.GDBuildingBackgroundsObjects4= [];
gdjs.Start_32ScreenCode.GDStartTextObjects1= [];
gdjs.Start_32ScreenCode.GDStartTextObjects2= [];
gdjs.Start_32ScreenCode.GDStartTextObjects3= [];
gdjs.Start_32ScreenCode.GDStartTextObjects4= [];
gdjs.Start_32ScreenCode.GDKwakuSpriteObjects1= [];
gdjs.Start_32ScreenCode.GDKwakuSpriteObjects2= [];
gdjs.Start_32ScreenCode.GDKwakuSpriteObjects3= [];
gdjs.Start_32ScreenCode.GDKwakuSpriteObjects4= [];
gdjs.Start_32ScreenCode.GDLightBuildingBackgroundsObjects1= [];
gdjs.Start_32ScreenCode.GDLightBuildingBackgroundsObjects2= [];
gdjs.Start_32ScreenCode.GDLightBuildingBackgroundsObjects3= [];
gdjs.Start_32ScreenCode.GDLightBuildingBackgroundsObjects4= [];
gdjs.Start_32ScreenCode.GDPlaneSpriteObjects1= [];
gdjs.Start_32ScreenCode.GDPlaneSpriteObjects2= [];
gdjs.Start_32ScreenCode.GDPlaneSpriteObjects3= [];
gdjs.Start_32ScreenCode.GDPlaneSpriteObjects4= [];
gdjs.Start_32ScreenCode.GDMusicEmoteObjects1= [];
gdjs.Start_32ScreenCode.GDMusicEmoteObjects2= [];
gdjs.Start_32ScreenCode.GDMusicEmoteObjects3= [];
gdjs.Start_32ScreenCode.GDMusicEmoteObjects4= [];
gdjs.Start_32ScreenCode.GDOnTxtObjects1= [];
gdjs.Start_32ScreenCode.GDOnTxtObjects2= [];
gdjs.Start_32ScreenCode.GDOnTxtObjects3= [];
gdjs.Start_32ScreenCode.GDOnTxtObjects4= [];
gdjs.Start_32ScreenCode.GDOffTxtObjects1= [];
gdjs.Start_32ScreenCode.GDOffTxtObjects2= [];
gdjs.Start_32ScreenCode.GDOffTxtObjects3= [];
gdjs.Start_32ScreenCode.GDOffTxtObjects4= [];
gdjs.Start_32ScreenCode.GDNameSpriteObjects1= [];
gdjs.Start_32ScreenCode.GDNameSpriteObjects2= [];
gdjs.Start_32ScreenCode.GDNameSpriteObjects3= [];
gdjs.Start_32ScreenCode.GDNameSpriteObjects4= [];
gdjs.Start_32ScreenCode.GDLeaderboardTxtObjects1= [];
gdjs.Start_32ScreenCode.GDLeaderboardTxtObjects2= [];
gdjs.Start_32ScreenCode.GDLeaderboardTxtObjects3= [];
gdjs.Start_32ScreenCode.GDLeaderboardTxtObjects4= [];
gdjs.Start_32ScreenCode.GDInstructionsTxtObjects1= [];
gdjs.Start_32ScreenCode.GDInstructionsTxtObjects2= [];
gdjs.Start_32ScreenCode.GDInstructionsTxtObjects3= [];
gdjs.Start_32ScreenCode.GDInstructionsTxtObjects4= [];
gdjs.Start_32ScreenCode.GDSignInTxtObjects1= [];
gdjs.Start_32ScreenCode.GDSignInTxtObjects2= [];
gdjs.Start_32ScreenCode.GDSignInTxtObjects3= [];
gdjs.Start_32ScreenCode.GDSignInTxtObjects4= [];

gdjs.Start_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.Start_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.Start_32ScreenCode.condition1IsTrue_0 = {val:false};
gdjs.Start_32ScreenCode.condition2IsTrue_0 = {val:false};
gdjs.Start_32ScreenCode.condition3IsTrue_0 = {val:false};
gdjs.Start_32ScreenCode.conditionTrue_1 = {val:false};
gdjs.Start_32ScreenCode.condition0IsTrue_1 = {val:false};
gdjs.Start_32ScreenCode.condition1IsTrue_1 = {val:false};
gdjs.Start_32ScreenCode.condition2IsTrue_1 = {val:false};
gdjs.Start_32ScreenCode.condition3IsTrue_1 = {val:false};


gdjs.Start_32ScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), true);
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "A FOOLS VOYAGE START SCREEN LOOP2.mp3", true, 100, 1);
}}

}


};gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDStartTextObjects3Objects = Hashtable.newFrom({"StartText": gdjs.Start_32ScreenCode.GDStartTextObjects3});
gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDLeaderboardTxtObjects2Objects = Hashtable.newFrom({"LeaderboardTxt": gdjs.Start_32ScreenCode.GDLeaderboardTxtObjects2});
gdjs.Start_32ScreenCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartText"), gdjs.Start_32ScreenCode.GDStartTextObjects3);

gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDStartTextObjects3Objects, runtimeScene, true, false);
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "A Fools Voyage Game", false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeaderboardTxt"), gdjs.Start_32ScreenCode.GDLeaderboardTxtObjects2);

gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Start_32ScreenCode.condition1IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDLeaderboardTxtObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Start_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.Start_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Start_32ScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "c260479f-b0f0-47f9-b826-0bcd3b603099", true);
}}

}


};gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDInstructionsTxtObjects1Objects = Hashtable.newFrom({"InstructionsTxt": gdjs.Start_32ScreenCode.GDInstructionsTxtObjects1});
gdjs.Start_32ScreenCode.eventsList2 = function(runtimeScene) {

{


gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
{gdjs.Start_32ScreenCode.conditionTrue_1 = gdjs.Start_32ScreenCode.condition0IsTrue_0;
gdjs.Start_32ScreenCode.condition0IsTrue_1.val = false;
gdjs.Start_32ScreenCode.condition1IsTrue_1.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.Start_32ScreenCode.condition0IsTrue_1.val ) {
    gdjs.Start_32ScreenCode.conditionTrue_1.val = true;
}
}
{
gdjs.Start_32ScreenCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.Start_32ScreenCode.condition1IsTrue_1.val ) {
    gdjs.Start_32ScreenCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Start_32ScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("InstructionsTxt"), gdjs.Start_32ScreenCode.GDInstructionsTxtObjects1);

gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Start_32ScreenCode.condition1IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDInstructionsTxtObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Start_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.Start_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Start_32ScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Instructions Screen", false);
}}

}


};gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDOnTxtObjects2Objects = Hashtable.newFrom({"OnTxt": gdjs.Start_32ScreenCode.GDOnTxtObjects2});
gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDOffTxtObjects1Objects = Hashtable.newFrom({"OffTxt": gdjs.Start_32ScreenCode.GDOffTxtObjects1});
gdjs.Start_32ScreenCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("OnTxt"), gdjs.Start_32ScreenCode.GDOnTxtObjects2);

gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
{gdjs.Start_32ScreenCode.conditionTrue_1 = gdjs.Start_32ScreenCode.condition0IsTrue_0;
gdjs.Start_32ScreenCode.condition0IsTrue_1.val = false;
gdjs.Start_32ScreenCode.condition1IsTrue_1.val = false;
gdjs.Start_32ScreenCode.condition2IsTrue_1.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}if ( gdjs.Start_32ScreenCode.condition0IsTrue_1.val ) {
{
gdjs.Start_32ScreenCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDOnTxtObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Start_32ScreenCode.condition1IsTrue_1.val ) {
{
gdjs.Start_32ScreenCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
}
gdjs.Start_32ScreenCode.conditionTrue_1.val = true && gdjs.Start_32ScreenCode.condition0IsTrue_1.val && gdjs.Start_32ScreenCode.condition1IsTrue_1.val && gdjs.Start_32ScreenCode.condition2IsTrue_1.val;
}
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MusicEmote"), gdjs.Start_32ScreenCode.GDMusicEmoteObjects2);
gdjs.copyArray(runtimeScene.getObjects("OffTxt"), gdjs.Start_32ScreenCode.GDOffTxtObjects2);
/* Reuse gdjs.Start_32ScreenCode.GDOnTxtObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}{for(var i = 0, len = gdjs.Start_32ScreenCode.GDMusicEmoteObjects2.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDMusicEmoteObjects2[i].setAnimationName("Style 1");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}{for(var i = 0, len = gdjs.Start_32ScreenCode.GDOnTxtObjects2.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDOnTxtObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Start_32ScreenCode.GDOffTxtObjects2.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDOffTxtObjects2[i].setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OffTxt"), gdjs.Start_32ScreenCode.GDOffTxtObjects1);

gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
{gdjs.Start_32ScreenCode.conditionTrue_1 = gdjs.Start_32ScreenCode.condition0IsTrue_0;
gdjs.Start_32ScreenCode.condition0IsTrue_1.val = false;
gdjs.Start_32ScreenCode.condition1IsTrue_1.val = false;
gdjs.Start_32ScreenCode.condition2IsTrue_1.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}if ( gdjs.Start_32ScreenCode.condition0IsTrue_1.val ) {
{
gdjs.Start_32ScreenCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDOffTxtObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Start_32ScreenCode.condition1IsTrue_1.val ) {
{
gdjs.Start_32ScreenCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
}
gdjs.Start_32ScreenCode.conditionTrue_1.val = true && gdjs.Start_32ScreenCode.condition0IsTrue_1.val && gdjs.Start_32ScreenCode.condition1IsTrue_1.val && gdjs.Start_32ScreenCode.condition2IsTrue_1.val;
}
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MusicEmote"), gdjs.Start_32ScreenCode.GDMusicEmoteObjects1);
/* Reuse gdjs.Start_32ScreenCode.GDOffTxtObjects1 */
gdjs.copyArray(runtimeScene.getObjects("OnTxt"), gdjs.Start_32ScreenCode.GDOnTxtObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}{for(var i = 0, len = gdjs.Start_32ScreenCode.GDMusicEmoteObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDMusicEmoteObjects1[i].setAnimationName("Style 2");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}{for(var i = 0, len = gdjs.Start_32ScreenCode.GDOnTxtObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDOnTxtObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.Start_32ScreenCode.GDOffTxtObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDOffTxtObjects1[i].setOpacity(0);
}
}}

}


};gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDLeaderboardTxtObjects2Objects = Hashtable.newFrom({"LeaderboardTxt": gdjs.Start_32ScreenCode.GDLeaderboardTxtObjects2});
gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDLeaderboardTxtObjects2Objects = Hashtable.newFrom({"LeaderboardTxt": gdjs.Start_32ScreenCode.GDLeaderboardTxtObjects2});
gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDOnTxtObjects2Objects = Hashtable.newFrom({"OnTxt": gdjs.Start_32ScreenCode.GDOnTxtObjects2});
gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDOnTxtObjects2Objects = Hashtable.newFrom({"OnTxt": gdjs.Start_32ScreenCode.GDOnTxtObjects2});
gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDOffTxtObjects2Objects = Hashtable.newFrom({"OffTxt": gdjs.Start_32ScreenCode.GDOffTxtObjects2});
gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDOffTxtObjects2Objects = Hashtable.newFrom({"OffTxt": gdjs.Start_32ScreenCode.GDOffTxtObjects2});
gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDStartTextObjects2Objects = Hashtable.newFrom({"StartText": gdjs.Start_32ScreenCode.GDStartTextObjects2});
gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDStartTextObjects2Objects = Hashtable.newFrom({"StartText": gdjs.Start_32ScreenCode.GDStartTextObjects2});
gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDSignInTxtObjects2Objects = Hashtable.newFrom({"SignInTxt": gdjs.Start_32ScreenCode.GDSignInTxtObjects2});
gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDSignInTxtObjects2Objects = Hashtable.newFrom({"SignInTxt": gdjs.Start_32ScreenCode.GDSignInTxtObjects2});
gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDInstructionsTxtObjects2Objects = Hashtable.newFrom({"InstructionsTxt": gdjs.Start_32ScreenCode.GDInstructionsTxtObjects2});
gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDInstructionsTxtObjects1Objects = Hashtable.newFrom({"InstructionsTxt": gdjs.Start_32ScreenCode.GDInstructionsTxtObjects1});
gdjs.Start_32ScreenCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LeaderboardTxt"), gdjs.Start_32ScreenCode.GDLeaderboardTxtObjects2);

gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDLeaderboardTxtObjects2Objects, runtimeScene, true, false);
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32ScreenCode.GDLeaderboardTxtObjects2 */
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDLeaderboardTxtObjects2.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDLeaderboardTxtObjects2[i].enableEffect("Hovering", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeaderboardTxt"), gdjs.Start_32ScreenCode.GDLeaderboardTxtObjects2);

gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDLeaderboardTxtObjects2Objects, runtimeScene, true, true);
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32ScreenCode.GDLeaderboardTxtObjects2 */
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDLeaderboardTxtObjects2.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDLeaderboardTxtObjects2[i].enableEffect("Hovering", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OnTxt"), gdjs.Start_32ScreenCode.GDOnTxtObjects2);

gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDOnTxtObjects2Objects, runtimeScene, true, false);
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32ScreenCode.GDOnTxtObjects2 */
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDOnTxtObjects2.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDOnTxtObjects2[i].enableEffect("Hovering", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OnTxt"), gdjs.Start_32ScreenCode.GDOnTxtObjects2);

gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDOnTxtObjects2Objects, runtimeScene, true, true);
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32ScreenCode.GDOnTxtObjects2 */
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDOnTxtObjects2.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDOnTxtObjects2[i].enableEffect("Hovering", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OffTxt"), gdjs.Start_32ScreenCode.GDOffTxtObjects2);

gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDOffTxtObjects2Objects, runtimeScene, true, false);
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32ScreenCode.GDOffTxtObjects2 */
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDOffTxtObjects2.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDOffTxtObjects2[i].enableEffect("Hovering", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OffTxt"), gdjs.Start_32ScreenCode.GDOffTxtObjects2);

gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDOffTxtObjects2Objects, runtimeScene, true, true);
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32ScreenCode.GDOffTxtObjects2 */
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDOffTxtObjects2.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDOffTxtObjects2[i].enableEffect("Hovering", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartText"), gdjs.Start_32ScreenCode.GDStartTextObjects2);

gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDStartTextObjects2Objects, runtimeScene, true, false);
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32ScreenCode.GDStartTextObjects2 */
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDStartTextObjects2.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDStartTextObjects2[i].enableEffect("Hovering", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartText"), gdjs.Start_32ScreenCode.GDStartTextObjects2);

gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDStartTextObjects2Objects, runtimeScene, true, true);
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32ScreenCode.GDStartTextObjects2 */
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDStartTextObjects2.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDStartTextObjects2[i].enableEffect("Hovering", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SignInTxt"), gdjs.Start_32ScreenCode.GDSignInTxtObjects2);

gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDSignInTxtObjects2Objects, runtimeScene, true, false);
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32ScreenCode.GDSignInTxtObjects2 */
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDSignInTxtObjects2.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDSignInTxtObjects2[i].enableEffect("Hovering", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SignInTxt"), gdjs.Start_32ScreenCode.GDSignInTxtObjects2);

gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDSignInTxtObjects2Objects, runtimeScene, true, true);
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32ScreenCode.GDSignInTxtObjects2 */
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDSignInTxtObjects2.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDSignInTxtObjects2[i].enableEffect("Hovering", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("InstructionsTxt"), gdjs.Start_32ScreenCode.GDInstructionsTxtObjects2);

gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDInstructionsTxtObjects2Objects, runtimeScene, true, false);
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32ScreenCode.GDInstructionsTxtObjects2 */
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDInstructionsTxtObjects2.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDInstructionsTxtObjects2[i].enableEffect("Hovering", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("InstructionsTxt"), gdjs.Start_32ScreenCode.GDInstructionsTxtObjects1);

gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDInstructionsTxtObjects1Objects, runtimeScene, true, true);
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32ScreenCode.GDInstructionsTxtObjects1 */
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDInstructionsTxtObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDInstructionsTxtObjects1[i].enableEffect("Hovering", false);
}
}}

}


};gdjs.Start_32ScreenCode.eventsList5 = function(runtimeScene) {

};gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDSignInTxtObjects1Objects = Hashtable.newFrom({"SignInTxt": gdjs.Start_32ScreenCode.GDSignInTxtObjects1});
gdjs.Start_32ScreenCode.eventsList6 = function(runtimeScene) {

{

/* Reuse gdjs.Start_32ScreenCode.GDSignInTxtObjects1 */

gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Start_32ScreenCode.condition1IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDSignInTxtObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Start_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.Start_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Start_32ScreenCode.condition1IsTrue_0.val) {
{gdjs.playerAuthentication.openAuthenticationWindow(runtimeScene);
}}

}


};gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDSignInTxtObjects1Objects = Hashtable.newFrom({"SignInTxt": gdjs.Start_32ScreenCode.GDSignInTxtObjects1});
gdjs.Start_32ScreenCode.eventsList7 = function(runtimeScene) {

{

/* Reuse gdjs.Start_32ScreenCode.GDSignInTxtObjects1 */

gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Start_32ScreenCode.condition1IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDSignInTxtObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Start_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.Start_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Start_32ScreenCode.condition1IsTrue_0.val) {
{gdjs.playerAuthentication.logout(runtimeScene);
}}

}


};gdjs.Start_32ScreenCode.eventsList8 = function(runtimeScene) {

{


gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Start_32ScreenCode.condition1IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.Start_32ScreenCode.condition0IsTrue_0.val ) {
{
{gdjs.Start_32ScreenCode.conditionTrue_1 = gdjs.Start_32ScreenCode.condition1IsTrue_0;
gdjs.Start_32ScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9216924);
}
}}
if (gdjs.Start_32ScreenCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MusicEmote"), gdjs.Start_32ScreenCode.GDMusicEmoteObjects1);
gdjs.copyArray(runtimeScene.getObjects("OffTxt"), gdjs.Start_32ScreenCode.GDOffTxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.Start_32ScreenCode.GDTitleObjects1);
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDTitleObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Start_32ScreenCode.GDOffTxtObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDOffTxtObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Start_32ScreenCode.GDMusicEmoteObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDMusicEmoteObjects1[i].setAnimationName("Style 2");
}
}
{ //Subevents
gdjs.Start_32ScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), true);
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.Start_32ScreenCode.GDTitleObjects1);
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDTitleObjects1[i].setOpacity(gdjs.Start_32ScreenCode.GDTitleObjects1[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 40));
}
}}

}


{


gdjs.Start_32ScreenCode.eventsList2(runtimeScene);
}


{


gdjs.Start_32ScreenCode.eventsList3(runtimeScene);
}


{


gdjs.Start_32ScreenCode.eventsList4(runtimeScene);
}


{


gdjs.Start_32ScreenCode.eventsList5(runtimeScene);
}


{


gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = !(gdjs.playerAuthentication.isAuthenticated());
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SignInTxt"), gdjs.Start_32ScreenCode.GDSignInTxtObjects1);
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDSignInTxtObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDSignInTxtObjects1[i].setString("Sign In");
}
}
{ //Subevents
gdjs.Start_32ScreenCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.playerAuthentication.isAuthenticated();
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SignInTxt"), gdjs.Start_32ScreenCode.GDSignInTxtObjects1);
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDSignInTxtObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDSignInTxtObjects1[i].setString("Sign Out");
}
}
{ //Subevents
gdjs.Start_32ScreenCode.eventsList7(runtimeScene);} //End of subevents
}

}


};

gdjs.Start_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_32ScreenCode.GDPlayerObjects1.length = 0;
gdjs.Start_32ScreenCode.GDPlayerObjects2.length = 0;
gdjs.Start_32ScreenCode.GDPlayerObjects3.length = 0;
gdjs.Start_32ScreenCode.GDPlayerObjects4.length = 0;
gdjs.Start_32ScreenCode.GDTitleObjects1.length = 0;
gdjs.Start_32ScreenCode.GDTitleObjects2.length = 0;
gdjs.Start_32ScreenCode.GDTitleObjects3.length = 0;
gdjs.Start_32ScreenCode.GDTitleObjects4.length = 0;
gdjs.Start_32ScreenCode.GDPlayerNameObjects1.length = 0;
gdjs.Start_32ScreenCode.GDPlayerNameObjects2.length = 0;
gdjs.Start_32ScreenCode.GDPlayerNameObjects3.length = 0;
gdjs.Start_32ScreenCode.GDPlayerNameObjects4.length = 0;
gdjs.Start_32ScreenCode.GDCityScapeBackgroundObjects1.length = 0;
gdjs.Start_32ScreenCode.GDCityScapeBackgroundObjects2.length = 0;
gdjs.Start_32ScreenCode.GDCityScapeBackgroundObjects3.length = 0;
gdjs.Start_32ScreenCode.GDCityScapeBackgroundObjects4.length = 0;
gdjs.Start_32ScreenCode.GDBuildingBackgroundsObjects1.length = 0;
gdjs.Start_32ScreenCode.GDBuildingBackgroundsObjects2.length = 0;
gdjs.Start_32ScreenCode.GDBuildingBackgroundsObjects3.length = 0;
gdjs.Start_32ScreenCode.GDBuildingBackgroundsObjects4.length = 0;
gdjs.Start_32ScreenCode.GDStartTextObjects1.length = 0;
gdjs.Start_32ScreenCode.GDStartTextObjects2.length = 0;
gdjs.Start_32ScreenCode.GDStartTextObjects3.length = 0;
gdjs.Start_32ScreenCode.GDStartTextObjects4.length = 0;
gdjs.Start_32ScreenCode.GDKwakuSpriteObjects1.length = 0;
gdjs.Start_32ScreenCode.GDKwakuSpriteObjects2.length = 0;
gdjs.Start_32ScreenCode.GDKwakuSpriteObjects3.length = 0;
gdjs.Start_32ScreenCode.GDKwakuSpriteObjects4.length = 0;
gdjs.Start_32ScreenCode.GDLightBuildingBackgroundsObjects1.length = 0;
gdjs.Start_32ScreenCode.GDLightBuildingBackgroundsObjects2.length = 0;
gdjs.Start_32ScreenCode.GDLightBuildingBackgroundsObjects3.length = 0;
gdjs.Start_32ScreenCode.GDLightBuildingBackgroundsObjects4.length = 0;
gdjs.Start_32ScreenCode.GDPlaneSpriteObjects1.length = 0;
gdjs.Start_32ScreenCode.GDPlaneSpriteObjects2.length = 0;
gdjs.Start_32ScreenCode.GDPlaneSpriteObjects3.length = 0;
gdjs.Start_32ScreenCode.GDPlaneSpriteObjects4.length = 0;
gdjs.Start_32ScreenCode.GDMusicEmoteObjects1.length = 0;
gdjs.Start_32ScreenCode.GDMusicEmoteObjects2.length = 0;
gdjs.Start_32ScreenCode.GDMusicEmoteObjects3.length = 0;
gdjs.Start_32ScreenCode.GDMusicEmoteObjects4.length = 0;
gdjs.Start_32ScreenCode.GDOnTxtObjects1.length = 0;
gdjs.Start_32ScreenCode.GDOnTxtObjects2.length = 0;
gdjs.Start_32ScreenCode.GDOnTxtObjects3.length = 0;
gdjs.Start_32ScreenCode.GDOnTxtObjects4.length = 0;
gdjs.Start_32ScreenCode.GDOffTxtObjects1.length = 0;
gdjs.Start_32ScreenCode.GDOffTxtObjects2.length = 0;
gdjs.Start_32ScreenCode.GDOffTxtObjects3.length = 0;
gdjs.Start_32ScreenCode.GDOffTxtObjects4.length = 0;
gdjs.Start_32ScreenCode.GDNameSpriteObjects1.length = 0;
gdjs.Start_32ScreenCode.GDNameSpriteObjects2.length = 0;
gdjs.Start_32ScreenCode.GDNameSpriteObjects3.length = 0;
gdjs.Start_32ScreenCode.GDNameSpriteObjects4.length = 0;
gdjs.Start_32ScreenCode.GDLeaderboardTxtObjects1.length = 0;
gdjs.Start_32ScreenCode.GDLeaderboardTxtObjects2.length = 0;
gdjs.Start_32ScreenCode.GDLeaderboardTxtObjects3.length = 0;
gdjs.Start_32ScreenCode.GDLeaderboardTxtObjects4.length = 0;
gdjs.Start_32ScreenCode.GDInstructionsTxtObjects1.length = 0;
gdjs.Start_32ScreenCode.GDInstructionsTxtObjects2.length = 0;
gdjs.Start_32ScreenCode.GDInstructionsTxtObjects3.length = 0;
gdjs.Start_32ScreenCode.GDInstructionsTxtObjects4.length = 0;
gdjs.Start_32ScreenCode.GDSignInTxtObjects1.length = 0;
gdjs.Start_32ScreenCode.GDSignInTxtObjects2.length = 0;
gdjs.Start_32ScreenCode.GDSignInTxtObjects3.length = 0;
gdjs.Start_32ScreenCode.GDSignInTxtObjects4.length = 0;

gdjs.Start_32ScreenCode.eventsList8(runtimeScene);

return;

}

gdjs['Start_32ScreenCode'] = gdjs.Start_32ScreenCode;
