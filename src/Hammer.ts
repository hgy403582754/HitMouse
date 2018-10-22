/**
* name 
*/
class Hammer extends ui.HammerUI {
	constructor() {
		super();
	}

	//锤子使用开始
	startHammer() {
		Laya.Mouse.hide();
		Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
		Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
		this.onMouseMove();
	}
	onMouseMove() {
		this.pos(Laya.stage.mouseX - this.width / 2, Laya.stage.mouseY - this.height / 3);
	}
	onMouseDown() {
		this.hit.play(0,false);
	}
	//锤子使用结束
	endHammer() {
		Laya.Mouse.show();
		Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
		Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
	}
}