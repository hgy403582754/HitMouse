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
/**
* name
*/
var Hammer = /** @class */ (function (_super) {
    __extends(Hammer, _super);
    function Hammer() {
        return _super.call(this) || this;
    }
    //锤子使用开始
    Hammer.prototype.startHammer = function () {
        Laya.Mouse.hide();
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        this.onMouseMove();
    };
    Hammer.prototype.onMouseMove = function () {
        this.pos(Laya.stage.mouseX - this.width / 2, Laya.stage.mouseY - this.height / 3);
    };
    Hammer.prototype.onMouseDown = function () {
        this.hit.play(0, false);
    };
    //锤子使用结束
    Hammer.prototype.endHammer = function () {
        Laya.Mouse.show();
        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
        Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
    };
    return Hammer;
}(ui.HammerUI));
//# sourceMappingURL=Hammer.js.map