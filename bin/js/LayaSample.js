var WebGL = Laya.WebGL;
// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        Laya.MiniAdpter.init();
        Laya.init(800, 600);
        Laya.stage.scaleMode = Laya.Stage.SCALE_NOSCALE;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.bgColor = "#ffcccc";
        var resArray = [
            { url: "res/atlas/ui.atlas", type: Laya.Loader.ATLAS },
            { url: "ui/back.png", type: Laya.Loader.IMAGE }
        ];
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onLoaded));
    }
    GameMain.prototype.onLoaded = function () {
        // const view:GameView = new GameView();
        GameMain.gamenStart = new GameStart();
        Laya.stage.addChild(GameMain.gamenStart);
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map