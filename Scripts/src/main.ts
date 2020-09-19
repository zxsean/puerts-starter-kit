import { tiny } from 'csharp';


/** JavaScript 入口函数 */
export default function main(lancher: tiny.JavaScriptLauncher) { // tslint:disable-line
	new JavaScriptApplication(lancher); // tslint:disable-line
}

class JavaScriptApplication {
	private readonly lancher: tiny.JavaScriptLauncher;
	private static $inst : JavaScriptApplication;
	public static get inst() : JavaScriptApplication { return this.$inst; }

	constructor(launcher: tiny.JavaScriptLauncher) {
		JavaScriptApplication.$inst = this;
		this.lancher = launcher;
		this.lancher.JS_fixedUpdate = this.fixedUpdate.bind(this);
		this.lancher.JS_update = this.update.bind(this);
		this.lancher.JS_lateUpdate = this.lateUpdate.bind(this);
		this.lancher.JS_finalize = this.finalize.bind(this);
		this.initialize();
	}

	private initialize() {
		console.log("JavaScriptApplication", 'initialized');
	}

	private fixedUpdate(delta: number) { }

	private update(delta: number) {
		WebAPI.tick();
	}

	private lateUpdate(delta: number) {
	}

	private finalize() {
		WebAPI.finalize();
	}
}
