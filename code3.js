gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.GDLeaderBoardObjects1= [];
gdjs.LeaderboardCode.GDLeaderBoardObjects2= [];

gdjs.LeaderboardCode.conditionTrue_0 = {val:false};
gdjs.LeaderboardCode.condition0IsTrue_0 = {val:false};
gdjs.LeaderboardCode.condition1IsTrue_0 = {val:false};


gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

{


gdjs.LeaderboardCode.condition0IsTrue_0.val = false;
{
gdjs.LeaderboardCode.condition0IsTrue_0.val = !(gdjs.evtTools.leaderboards.isLeaderboardViewLoaded());
}if (gdjs.LeaderboardCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDLeaderBoardObjects1.length = 0;
gdjs.LeaderboardCode.GDLeaderBoardObjects2.length = 0;

gdjs.LeaderboardCode.eventsList0(runtimeScene);

return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
