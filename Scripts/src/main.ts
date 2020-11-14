interface IScriptLauncher {
	JS_start();
	JS_fixedUpdate(delta: number);
	JS_lateUpdate(delta: number);
	JS_update(delta: number);
	JS_finalize();
}

export default function main(lancher: IScriptLauncher) {
	new JavaScriptApplication(lancher); // tslint:disable-line
}

class JavaScriptApplication {
	private readonly lancher: IScriptLauncher;
	private static $inst : JavaScriptApplication;
	public static get inst() : JavaScriptApplication { return this.$inst; }

	constructor(launcher: IScriptLauncher) {
		JavaScriptApplication.$inst = this;
		this.lancher = launcher;
		this.lancher.JS_start = this.start.bind(this);
		this.lancher.JS_fixedUpdate = this.fixedUpdate.bind(this);
		this.lancher.JS_update = this.update.bind(this);
		this.lancher.JS_lateUpdate = this.lateUpdate.bind(this);
		this.lancher.JS_finalize = this.finalize.bind(this);
		console.log("JavaScript 虚拟器启动成功");
		this.initialize();
	}

	private initialize() {
	}

	private start() {
	}

	private fixedUpdate(delta: number) {
	}

	private update(delta: number) {
		WebAPI.tick();
	}

	private lateUpdate(delta: number) {
	}

	private finalize() {
		WebAPI.finalize();
	}
}
