gdjs.finalCode = {};
gdjs.finalCode.GDNewSpriteObjects1= [];
gdjs.finalCode.GDNewSpriteObjects2= [];
gdjs.finalCode.GDprotagonistaObjects1= [];
gdjs.finalCode.GDprotagonistaObjects2= [];
gdjs.finalCode.GDPAREDObjects1= [];
gdjs.finalCode.GDPAREDObjects2= [];
gdjs.finalCode.GDAObjects1= [];
gdjs.finalCode.GDAObjects2= [];
gdjs.finalCode.GDprofeObjects1= [];
gdjs.finalCode.GDprofeObjects2= [];

gdjs.finalCode.conditionTrue_0 = {val:false};
gdjs.finalCode.condition0IsTrue_0 = {val:false};
gdjs.finalCode.condition1IsTrue_0 = {val:false};


gdjs.finalCode.mapOfGDgdjs_46finalCode_46GDprotagonistaObjects1Objects = Hashtable.newFrom({"protagonista": gdjs.finalCode.GDprotagonistaObjects1});
gdjs.finalCode.mapOfGDgdjs_46finalCode_46GDprofeObjects1Objects = Hashtable.newFrom({"profe": gdjs.finalCode.GDprofeObjects1});
gdjs.finalCode.mapOfGDgdjs_46finalCode_46GDprotagonistaObjects1Objects = Hashtable.newFrom({"protagonista": gdjs.finalCode.GDprotagonistaObjects1});
gdjs.finalCode.mapOfGDgdjs_46finalCode_46GDPAREDObjects1Objects = Hashtable.newFrom({"PARED": gdjs.finalCode.GDPAREDObjects1});
gdjs.finalCode.mapOfGDgdjs_46finalCode_46GDprotagonistaObjects1Objects = Hashtable.newFrom({"protagonista": gdjs.finalCode.GDprotagonistaObjects1});
gdjs.finalCode.mapOfGDgdjs_46finalCode_46GDAObjects1Objects = Hashtable.newFrom({"A": gdjs.finalCode.GDAObjects1});
gdjs.finalCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("profe"), gdjs.finalCode.GDprofeObjects1);
gdjs.copyArray(runtimeScene.getObjects("protagonista"), gdjs.finalCode.GDprotagonistaObjects1);

gdjs.finalCode.condition0IsTrue_0.val = false;
{
gdjs.finalCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.finalCode.mapOfGDgdjs_46finalCode_46GDprotagonistaObjects1Objects, gdjs.finalCode.mapOfGDgdjs_46finalCode_46GDprofeObjects1Objects, false, runtimeScene, false);
}if (gdjs.finalCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PARED"), gdjs.finalCode.GDPAREDObjects1);
gdjs.copyArray(runtimeScene.getObjects("protagonista"), gdjs.finalCode.GDprotagonistaObjects1);

gdjs.finalCode.condition0IsTrue_0.val = false;
{
gdjs.finalCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.finalCode.mapOfGDgdjs_46finalCode_46GDprotagonistaObjects1Objects, gdjs.finalCode.mapOfGDgdjs_46finalCode_46GDPAREDObjects1Objects, false, runtimeScene, false);
}if (gdjs.finalCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "final");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("A"), gdjs.finalCode.GDAObjects1);
gdjs.copyArray(runtimeScene.getObjects("protagonista"), gdjs.finalCode.GDprotagonistaObjects1);

gdjs.finalCode.condition0IsTrue_0.val = false;
{
gdjs.finalCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.finalCode.mapOfGDgdjs_46finalCode_46GDprotagonistaObjects1Objects, gdjs.finalCode.mapOfGDgdjs_46finalCode_46GDAObjects1Objects, false, runtimeScene, false);
}if (gdjs.finalCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "final");
}}

}


};

gdjs.finalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.finalCode.GDNewSpriteObjects1.length = 0;
gdjs.finalCode.GDNewSpriteObjects2.length = 0;
gdjs.finalCode.GDprotagonistaObjects1.length = 0;
gdjs.finalCode.GDprotagonistaObjects2.length = 0;
gdjs.finalCode.GDPAREDObjects1.length = 0;
gdjs.finalCode.GDPAREDObjects2.length = 0;
gdjs.finalCode.GDAObjects1.length = 0;
gdjs.finalCode.GDAObjects2.length = 0;
gdjs.finalCode.GDprofeObjects1.length = 0;
gdjs.finalCode.GDprofeObjects2.length = 0;

gdjs.finalCode.eventsList0(runtimeScene);
return;

}

gdjs['finalCode'] = gdjs.finalCode;
