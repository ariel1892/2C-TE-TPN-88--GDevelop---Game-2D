gdjs.cap1Code = {};
gdjs.cap1Code.GDNewTiledSpriteObjects1= [];
gdjs.cap1Code.GDNewTiledSpriteObjects2= [];
gdjs.cap1Code.GDparedObjects1= [];
gdjs.cap1Code.GDparedObjects2= [];
gdjs.cap1Code.GDNewSpriteObjects1= [];
gdjs.cap1Code.GDNewSpriteObjects2= [];
gdjs.cap1Code.GDparedinObjects1= [];
gdjs.cap1Code.GDparedinObjects2= [];
gdjs.cap1Code.GDtrasportadorObjects1= [];
gdjs.cap1Code.GDtrasportadorObjects2= [];

gdjs.cap1Code.conditionTrue_0 = {val:false};
gdjs.cap1Code.condition0IsTrue_0 = {val:false};
gdjs.cap1Code.condition1IsTrue_0 = {val:false};


gdjs.cap1Code.mapOfGDgdjs_46cap1Code_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.cap1Code.GDNewSpriteObjects1});
gdjs.cap1Code.mapOfGDgdjs_46cap1Code_46GDparedObjects1Objects = Hashtable.newFrom({"pared": gdjs.cap1Code.GDparedObjects1});
gdjs.cap1Code.mapOfGDgdjs_46cap1Code_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.cap1Code.GDNewSpriteObjects1});
gdjs.cap1Code.mapOfGDgdjs_46cap1Code_46GDparedinObjects1Objects = Hashtable.newFrom({"paredin": gdjs.cap1Code.GDparedinObjects1});
gdjs.cap1Code.mapOfGDgdjs_46cap1Code_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.cap1Code.GDNewSpriteObjects1});
gdjs.cap1Code.mapOfGDgdjs_46cap1Code_46GDtrasportadorObjects1Objects = Hashtable.newFrom({"trasportador": gdjs.cap1Code.GDtrasportadorObjects1});
gdjs.cap1Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.cap1Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("pared"), gdjs.cap1Code.GDparedObjects1);

gdjs.cap1Code.condition0IsTrue_0.val = false;
{
gdjs.cap1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.cap1Code.mapOfGDgdjs_46cap1Code_46GDNewSpriteObjects1Objects, gdjs.cap1Code.mapOfGDgdjs_46cap1Code_46GDparedObjects1Objects, false, runtimeScene, true);
}if (gdjs.cap1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.cap1Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("paredin"), gdjs.cap1Code.GDparedinObjects1);

gdjs.cap1Code.condition0IsTrue_0.val = false;
{
gdjs.cap1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.cap1Code.mapOfGDgdjs_46cap1Code_46GDNewSpriteObjects1Objects, gdjs.cap1Code.mapOfGDgdjs_46cap1Code_46GDparedinObjects1Objects, false, runtimeScene, false);
}if (gdjs.cap1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene));
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.cap1Code.GDNewSpriteObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.cap1Code.GDNewSpriteObjects1.length !== 0 ? gdjs.cap1Code.GDNewSpriteObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.cap1Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("trasportador"), gdjs.cap1Code.GDtrasportadorObjects1);

gdjs.cap1Code.condition0IsTrue_0.val = false;
{
gdjs.cap1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.cap1Code.mapOfGDgdjs_46cap1Code_46GDNewSpriteObjects1Objects, gdjs.cap1Code.mapOfGDgdjs_46cap1Code_46GDtrasportadorObjects1Objects, false, runtimeScene, false);
}if (gdjs.cap1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "cap2", false);
}}

}


{


{
}

}


};

gdjs.cap1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.cap1Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.cap1Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.cap1Code.GDparedObjects1.length = 0;
gdjs.cap1Code.GDparedObjects2.length = 0;
gdjs.cap1Code.GDNewSpriteObjects1.length = 0;
gdjs.cap1Code.GDNewSpriteObjects2.length = 0;
gdjs.cap1Code.GDparedinObjects1.length = 0;
gdjs.cap1Code.GDparedinObjects2.length = 0;
gdjs.cap1Code.GDtrasportadorObjects1.length = 0;
gdjs.cap1Code.GDtrasportadorObjects2.length = 0;

gdjs.cap1Code.eventsList0(runtimeScene);
return;

}

gdjs['cap1Code'] = gdjs.cap1Code;
