/*
* name;
*/
class GameOver extends ui.GameOverUI{
    constructor(){
       super();
       this.restartBtn.on(Laya.Event.CLICK,this,this.restarGame);
    }

    restarGame(){
        //移除游戏界面
        this.removeSelf();
        //移除游戏界面
        Laya.stage.removeChild(GameMain.gameView);
        //添加游戏开始界面
        Laya.stage.addChild(GameMain.gamenStart);
    }

    //设置分数
    setScore(score:number){
       var data:any ={};
        var temp:number = score;
        for(var i:number=9;i>=0;i--){
            data["item"+i]={index:Math.floor(temp%10)};
            temp/=10;
        }
         this.scoreNums.dataSource = data;
    }
}