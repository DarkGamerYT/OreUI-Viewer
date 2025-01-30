const Config = require( "../../config.json" );
let list = [ { pathname: Config.pathname, hash: "", search: "", state: "" } ];
module.exports = () => ({
	history: {
		length: 0,
		action: "REPLACE",
		list,
		goBack() {
			if (list.length <= 1) return;
			console.log( "[EngineWrapper/RouterFacet] Going back." );

			list = list.filter((_, i) => i !== list.length - 1);
			window.engine.bindings["facet:updated:core.router"](window.engine.facets["core.router"]({}));
		},

		replace(path, action) {
			const url = new URL(path, "http://localhost/");
			if (list[list.length - 1].pathname == url.pathname) return;

			this.action = action ?? "REPLACE";
			list.push({ pathname: url.pathname, hash: "", search: url.search, state: "" });

			if (this.action == "REPLACE") console.log( `[EngineWrapper/RouterFacet] Replacing path (${path})` );
			else console.log( `[EngineWrapper/RouterFacet] Pushing path (${path})` );
			window.engine.bindings["facet:updated:core.router"](window.engine.facets["core.router"]({}));
		},

		push(path) { this.replace(path, "PUSH"); },
	},
});