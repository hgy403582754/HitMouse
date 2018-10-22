
class GameView extends ui.GameUI {
    private moles: Array<Mole>;
    private moleNum: number = 9;
    private scroe: number;
    private hammer: Hammer;
    constructor() {
        super();
        this.moles = new Array<Mole>();
        var hitCallBackhd: Laya.Handler = new Laya.Handler(this, this.setScore);
        for (let i = 0; i < this.moleNum; i++) {
            var box: Laya.Box = this.getChildByName("item" + i) as Laya.Box;
            var mole: Mole = new Mole(
                box.getChildByName("narmal") as Laya.Image,
                box.getChildByName("hit") as Laya.Image,
                21, box.getChildByName("score") as Laya.Image, hitCallBackhd);
            this.moles.push(mole);
        }
        this.hammer = new Hammer();
        this.addChild(this.hammer);
        this.hammer.visible = false;
    }
    //游戏结束
    gameOver() {
        Laya.timer.clear(this, this.onLoop);
        this.hammer.visible = false;
        this.hammer.endHammer();
        //游戏结算界面
      
        if (!GameMain.gameOver) {
              GameMain.gameOver = new GameOver;
        }
        GameMain.gameOver.centerX = 0;
        GameMain.gameOver.centerY = 40;
        GameMain.gameOver.setScore(this.scroe);
         Laya.stage.addChild(GameMain.gameOver);

    }

    //游戏开始
    gameStart() {
        this.timeBar.value = 1;
        this.scroe = 0;
        this.hammer.visible = true;
        this.updateScoreUI();
        this.hammer.startHammer();
        Laya.timer.loop(1000, this, this.onLoop);
    }
    //设置游戏分数
    setScore(type: number) {
        this.scroe += type == 1 ? -100 : +100;
        if (this.scroe < 0) {
            this.scroe = 0
        }
        this.updateScoreUI();
    }
    //更新UI显示
    updateScoreUI() {
        var data: Object = {};
        var temp: number = this.scroe;
        for (var i: number = 9; i >= 0; i--) {
            data["item" + i] = { index: Math.floor(temp % 10) };
            temp /= 10;
        }
        this.scoreNums.dataSource = data;

    }

    onLoop() {
        //设置游戏时间
        this.timeBar.value -= 1 / 60;
        if (this.timeBar.value <= 0) {
            this.gameOver();
            return;
        }
        let index: number = Math.floor(Math.random() * this.moleNum)
        this.moles[index].show();

    }
}