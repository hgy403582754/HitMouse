var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameView = /** @class */ (function (_super) {
    __extends(GameView, _super);
    function GameView() {
        var _this = _super.call(this) || this;
        _this.moleNum = 9;
        _this.moles = new Array();
        var hitCallBackhd = new Laya.Handler(_this, _this.setScore);
        for (var i = 0; i < _this.moleNum; i++) {
            var box = _this.getChildByName("item" + i);
            var mole = new Mole(box.getChildByName("narmal"), box.getChildByName("hit"), 21, box.getChildByName("score"), hitCallBackhd);
            _this.moles.push(mole);
        }
        _this.hammer = new Hammer();
        _this.addChild(_this.hammer);
        _this.hammer.visible = false;
        return _this;
    }
    //游戏结束
    GameView.prototype.gameOver = function () {
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
    };
    //游戏开始
    GameView.prototype.gameStart = function () {
        this.timeBar.value = 1;
        this.scroe = 0;
        this.hammer.visible = true;
        this.updateScoreUI();
        this.hammer.startHammer();
        Laya.timer.loop(1000, this, this.onLoop);
    };
    //设置游戏分数
    GameView.prototype.setScore = function (type) {
        this.scroe += type == 1 ? -100 : +100;
        if (this.scroe < 0) {
            this.scroe = 0;
        }
        this.updateScoreUI();
    };
    //更新UI显示
    GameView.prototype.updateScoreUI = function () {
        var data = {};
        var temp = this.scroe;
        for (var i = 9; i >= 0; i--) {
            data["item" + i] = { index: Math.floor(temp % 10) };
            temp /= 10;
        }
        this.scoreNums.dataSource = data;
    };
    GameView.prototype.onLoop = function () {
        //设置游戏时间
        this.timeBar.value -= 1 / 60;
        if (this.timeBar.value <= 0) {
            this.gameOver();
            return;
        }
        var index = Math.floor(Math.random() * this.moleNum);
        this.moles[index].show();
    };
    return GameView;
}(ui.GameUI));
//# sourceMappingURL=GameView.js.map