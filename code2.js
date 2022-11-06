gdjs.cap2Code = {};
gdjs.cap2Code.GDfondoObjects1= [];
gdjs.cap2Code.GDfondoObjects2= [];
gdjs.cap2Code.GDpersonajeObjects1= [];
gdjs.cap2Code.GDpersonajeObjects2= [];
gdjs.cap2Code.GDparedObjects1= [];
gdjs.cap2Code.GDparedObjects2= [];
gdjs.cap2Code.GDNewSpriteObjects1= [];
gdjs.cap2Code.GDNewSpriteObjects2= [];
gdjs.cap2Code.GDteletrasporteObjects1= [];
gdjs.cap2Code.GDteletrasporteObjects2= [];

gdjs.cap2Code.conditionTrue_0 = {val:false};
gdjs.cap2Code.condition0IsTrue_0 = {val:false};
gdjs.cap2Code.condition1IsTrue_0 = {val:false};


gdjs.cap2Code.mapOfGDgdjs_46cap2Code_46GDpersonajeObjects1Objects = Hashtable.newFrom({"personaje": gdjs.cap2Code.GDpersonajeObjects1});
gdjs.cap2Code.mapOfGDgdjs_46cap2Code_46GDparedObjects1Objects = Hashtable.newFrom({"pared": gdjs.cap2Code.GDparedObjects1});
gdjs.cap2Code.mapOfGDgdjs_46cap2Code_46GDpersonajeObjects1Objects = Hashtable.newFrom({"personaje": gdjs.cap2Code.GDpersonajeObjects1});
gdjs.cap2Code.mapOfGDgdjs_46cap2Code_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.cap2Code.GDNewSpriteObjects1});
gdjs.cap2Code.mapOfGDgdjs_46cap2Code_46GDpersonajeObjects1Objects = Hashtable.newFrom({"personaje": gdjs.cap2Code.GDpersonajeObjects1});
gdjs.cap2Code.mapOfGDgdjs_46cap2Code_46GDteletrasporteObjects1Objects = Hashtable.newFrom({"teletrasporte": gdjs.cap2Code.GDteletrasporteObjects1});
gdjs.cap2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("pared"), gdjs.cap2Code.GDparedObjects1);
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.cap2Code.GDpersonajeObjects1);

gdjs.cap2Code.condition0IsTrue_0.val = false;
{
gdjs.cap2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.cap2Code.mapOfGDgdjs_46cap2Code_46GDpersonajeObjects1Objects, gdjs.cap2Code.mapOfGDgdjs_46cap2Code_46GDparedObjects1Objects, false, runtimeScene, false);
}if (gdjs.cap2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "cap2");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.cap2Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.cap2Code.GDpersonajeObjects1);

gdjs.cap2Code.condition0IsTrue_0.val = false;
{
gdjs.cap2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.cap2Code.mapOfGDgdjs_46cap2Code_46GDpersonajeObjects1Objects, gdjs.cap2Code.mapOfGDgdjs_46cap2Code_46GDNewSpriteObjects1Objects, false, runtimeScene, false);
}if (gdjs.cap2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "cap2");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.cap2Code.GDpersonajeObjects1);
gdjs.copyArray(runtimeScene.getObjects("teletrasporte"), gdjs.cap2Code.GDteletrasporteObjects1);

gdjs.cap2Code.condition0IsTrue_0.val = false;
{
gdjs.cap2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.cap2Code.mapOfGDgdjs_46cap2Code_46GDpersonajeObjects1Objects, gdjs.cap2Code.mapOfGDgdjs_46cap2Code_46GDteletrasporteObjects1Objects, false, runtimeScene, false);
}if (gdjs.cap2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "cap3", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.cap2Code.GDpersonajeObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.cap2Code.GDpersonajeObjects1.length !== 0 ? gdjs.cap2Code.GDpersonajeObjects1[0] : null), true, "", 0);
}}

}


};

gdjs.cap2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.cap2Code.GDfondoObjects1.length = 0;
gdjs.cap2Code.GDfondoObjects2.length = 0;
gdjs.cap2Code.GDpersonajeObjects1.length = 0;
gdjs.cap2Code.GDpersonajeObjects2.length = 0;
gdjs.cap2Code.GDparedObjects1.length = 0;
gdjs.cap2Code.GDparedObjects2.length = 0;
gdjs.cap2Code.GDNewSpriteObjects1.length = 0;
gdjs.cap2Code.GDNewSpriteObjects2.length = 0;
gdjs.cap2Code.GDteletrasporteObjects1.length = 0;
gdjs.cap2Code.GDteletrasporteObjects2.length = 0;

gdjs.cap2Code.eventsList0(runtimeScene);
return;

}

gdjs['cap2Code'] = gdjs.cap2Code;
