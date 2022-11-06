gdjs.cap3Code = {};
gdjs.cap3Code.GDfondoObjects1= [];
gdjs.cap3Code.GDfondoObjects2= [];
gdjs.cap3Code.GDpersonajeObjects1= [];
gdjs.cap3Code.GDpersonajeObjects2= [];
gdjs.cap3Code.GDparedObjects1= [];
gdjs.cap3Code.GDparedObjects2= [];
gdjs.cap3Code.GDteletrasporteObjects1= [];
gdjs.cap3Code.GDteletrasporteObjects2= [];
gdjs.cap3Code.GDcartelObjects1= [];
gdjs.cap3Code.GDcartelObjects2= [];
gdjs.cap3Code.GDNewTextObjects1= [];
gdjs.cap3Code.GDNewTextObjects2= [];
gdjs.cap3Code.GDpaObjects1= [];
gdjs.cap3Code.GDpaObjects2= [];
gdjs.cap3Code.GDNewText2Objects1= [];
gdjs.cap3Code.GDNewText2Objects2= [];

gdjs.cap3Code.conditionTrue_0 = {val:false};
gdjs.cap3Code.condition0IsTrue_0 = {val:false};
gdjs.cap3Code.condition1IsTrue_0 = {val:false};


gdjs.cap3Code.mapOfGDgdjs_46cap3Code_46GDpersonajeObjects1Objects = Hashtable.newFrom({"personaje": gdjs.cap3Code.GDpersonajeObjects1});
gdjs.cap3Code.mapOfGDgdjs_46cap3Code_46GDparedObjects1Objects = Hashtable.newFrom({"pared": gdjs.cap3Code.GDparedObjects1});
gdjs.cap3Code.mapOfGDgdjs_46cap3Code_46GDpersonajeObjects1Objects = Hashtable.newFrom({"personaje": gdjs.cap3Code.GDpersonajeObjects1});
gdjs.cap3Code.mapOfGDgdjs_46cap3Code_46GDpaObjects1Objects = Hashtable.newFrom({"pa": gdjs.cap3Code.GDpaObjects1});
gdjs.cap3Code.mapOfGDgdjs_46cap3Code_46GDpersonajeObjects1Objects = Hashtable.newFrom({"personaje": gdjs.cap3Code.GDpersonajeObjects1});
gdjs.cap3Code.mapOfGDgdjs_46cap3Code_46GDteletrasporteObjects1Objects = Hashtable.newFrom({"teletrasporte": gdjs.cap3Code.GDteletrasporteObjects1});
gdjs.cap3Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("pared"), gdjs.cap3Code.GDparedObjects1);
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.cap3Code.GDpersonajeObjects1);

gdjs.cap3Code.condition0IsTrue_0.val = false;
{
gdjs.cap3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.cap3Code.mapOfGDgdjs_46cap3Code_46GDpersonajeObjects1Objects, gdjs.cap3Code.mapOfGDgdjs_46cap3Code_46GDparedObjects1Objects, false, runtimeScene, false);
}if (gdjs.cap3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "cap1");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("pa"), gdjs.cap3Code.GDpaObjects1);
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.cap3Code.GDpersonajeObjects1);

gdjs.cap3Code.condition0IsTrue_0.val = false;
{
gdjs.cap3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.cap3Code.mapOfGDgdjs_46cap3Code_46GDpersonajeObjects1Objects, gdjs.cap3Code.mapOfGDgdjs_46cap3Code_46GDpaObjects1Objects, false, runtimeScene, false);
}if (gdjs.cap3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "cap1");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.cap3Code.GDpersonajeObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.cap3Code.GDpersonajeObjects1.length !== 0 ? gdjs.cap3Code.GDpersonajeObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.cap3Code.GDpersonajeObjects1);
gdjs.copyArray(runtimeScene.getObjects("teletrasporte"), gdjs.cap3Code.GDteletrasporteObjects1);

gdjs.cap3Code.condition0IsTrue_0.val = false;
{
gdjs.cap3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.cap3Code.mapOfGDgdjs_46cap3Code_46GDpersonajeObjects1Objects, gdjs.cap3Code.mapOfGDgdjs_46cap3Code_46GDteletrasporteObjects1Objects, false, runtimeScene, false);
}if (gdjs.cap3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "final", false);
}}

}


};

gdjs.cap3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.cap3Code.GDfondoObjects1.length = 0;
gdjs.cap3Code.GDfondoObjects2.length = 0;
gdjs.cap3Code.GDpersonajeObjects1.length = 0;
gdjs.cap3Code.GDpersonajeObjects2.length = 0;
gdjs.cap3Code.GDparedObjects1.length = 0;
gdjs.cap3Code.GDparedObjects2.length = 0;
gdjs.cap3Code.GDteletrasporteObjects1.length = 0;
gdjs.cap3Code.GDteletrasporteObjects2.length = 0;
gdjs.cap3Code.GDcartelObjects1.length = 0;
gdjs.cap3Code.GDcartelObjects2.length = 0;
gdjs.cap3Code.GDNewTextObjects1.length = 0;
gdjs.cap3Code.GDNewTextObjects2.length = 0;
gdjs.cap3Code.GDpaObjects1.length = 0;
gdjs.cap3Code.GDpaObjects2.length = 0;
gdjs.cap3Code.GDNewText2Objects1.length = 0;
gdjs.cap3Code.GDNewText2Objects2.length = 0;

gdjs.cap3Code.eventsList0(runtimeScene);
return;

}

gdjs['cap3Code'] = gdjs.cap3Code;
