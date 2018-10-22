/*
* name;
*/
class GameStart extends ui.GameStartUI{
    constructor(){
        super();
        this.startBtn.on(Laya.Event.CLICK,this,this.startGame);
    }
    startGame(){
        // 移除游戏开始界面
        // Laya.stage.removeChild(this);
        this.removeSelf();
       if(!GameMain.gameView){
           GameMain.gameView = new GameView;
       }
        GameMain.gameView.gameStart();
       Laya.stage.addChild(GameMain.gameView);
    }
}