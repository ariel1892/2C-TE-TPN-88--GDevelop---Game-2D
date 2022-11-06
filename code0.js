gdjs.inicioCode = {};
gdjs.inicioCode.GDSALIRObjects1= [];
gdjs.inicioCode.GDSALIRObjects2= [];
gdjs.inicioCode.GDinicioObjects1= [];
gdjs.inicioCode.GDinicioObjects2= [];
gdjs.inicioCode.GDNewTextObjects1= [];
gdjs.inicioCode.GDNewTextObjects2= [];
gdjs.inicioCode.GDNewText2Objects1= [];
gdjs.inicioCode.GDNewText2Objects2= [];
gdjs.inicioCode.GDfondoObjects1= [];
gdjs.inicioCode.GDfondoObjects2= [];
gdjs.inicioCode.GDNewTiledSpriteObjects1= [];
gdjs.inicioCode.GDNewTiledSpriteObjects2= [];

gdjs.inicioCode.conditionTrue_0 = {val:false};
gdjs.inicioCode.condition0IsTrue_0 = {val:false};
gdjs.inicioCode.condition1IsTrue_0 = {val:false};


gdjs.inicioCode.mapOfGDgdjs_46inicioCode_46GDinicioObjects1Objects = Hashtable.newFrom({"inicio": gdjs.inicioCode.GDinicioObjects1});
gdjs.inicioCode.mapOfGDgdjs_46inicioCode_46GDSALIRObjects1Objects = Hashtable.newFrom({"SALIR": gdjs.inicioCode.GDSALIRObjects1});
gdjs.inicioCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("inicio"), gdjs.inicioCode.GDinicioObjects1);

gdjs.inicioCode.condition0IsTrue_0.val = false;
{
gdjs.inicioCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.inicioCode.mapOfGDgdjs_46inicioCode_46GDinicioObjects1Objects, runtimeScene, true, false);
}if (gdjs.inicioCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "cap1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SALIR"), gdjs.inicioCode.GDSALIRObjects1);

gdjs.inicioCode.condition0IsTrue_0.val = false;
{
gdjs.inicioCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.inicioCode.mapOfGDgdjs_46inicioCode_46GDSALIRObjects1Objects, runtimeScene, true, false);
}if (gdjs.inicioCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.inicioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.inicioCode.GDSALIRObjects1.length = 0;
gdjs.inicioCode.GDSALIRObjects2.length = 0;
gdjs.inicioCode.GDinicioObjects1.length = 0;
gdjs.inicioCode.GDinicioObjects2.length = 0;
gdjs.inicioCode.GDNewTextObjects1.length = 0;
gdjs.inicioCode.GDNewTextObjects2.length = 0;
gdjs.inicioCode.GDNewText2Objects1.length = 0;
gdjs.inicioCode.GDNewText2Objects2.length = 0;
gdjs.inicioCode.GDfondoObjects1.length = 0;
gdjs.inicioCode.GDfondoObjects2.length = 0;
gdjs.inicioCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.inicioCode.GDNewTiledSpriteObjects2.length = 0;

gdjs.inicioCode.eventsList0(runtimeScene);
return;

}

gdjs['inicioCode'] = gdjs.inicioCode;
