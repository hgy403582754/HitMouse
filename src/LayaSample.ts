import WebGL = Laya.WebGL;
// 程序入口
class GameMain{
  public static gamenStart:GameStart;
  public static  gameView:GameView;
   public static  gameOver:GameOver;
    constructor()
    {
        Laya.MiniAdpter.init();
        Laya.init(800,600);
        Laya.stage.scaleMode=Laya.Stage.SCALE_NOSCALE;
        Laya.stage.alignH=Laya.Stage.ALIGN_CENTER;
          Laya.stage.alignV=Laya.Stage.ALIGN_MIDDLE;

        Laya.stage.bgColor="#ffcccc";
        let resArray:Array<any>=[
            {url:"res/atlas/ui.atlas",type:Laya.Loader.ATLAS},
            {url:"ui/back.png",type:Laya.Loader.IMAGE}
        ];
       
       Laya.loader.load(resArray,Laya.Handler.create(this,this.onLoaded));
    }
    
    onLoaded(){
        // const view:GameView = new GameView();
        GameMain.gamenStart = new GameStart();
        Laya.stage.addChild(GameMain.gamenStart);
    }
 
}
new GameMain();