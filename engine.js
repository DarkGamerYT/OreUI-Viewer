/*
engine.js
--------
pretend to be the bedrock engine for oreUI's sake
(C) Luminoso 2022 / MIT Licensed
*/

const fs = require( "fs" );
const { Cubemap } = require( "./libs/@hatchibombotar-cubemap" );
const Config = require( "./config.json" );
if (window.location.pathname != Config.file) window.location.pathname = Config.file;

let loadedFacets = {};
const loadFacet = async (facet) => {
	try {
		const f = await require( __dirname + "/src/facets/" + facet + ".js" );
	
		//console.log( "[EngineWrapper] Facet Loaded: " + facet, f );
		loadedFacets[ facet ] = f;
	} catch(e) {
		console.error(e);
	};
};

window.engine = {
	facets: loadedFacets,
	bindings: {},
	WindowLoaded: false,
	AddOrRemoveOnHandler: (id, func) => window.engine.bindings[ id ] = func,
	RemoveOnHandler: (id, func) => {},
	AddOrRemoveOffHandler: (id) => delete window.engine.bindings[id],
	BindingsReady: () => console.log( "[EngineWrapper] BindingsReady called" ),
	TriggerEvent: {
		apply: (_, [ id, facet ]) => {
			const interval = setInterval(() => {
				if (!window.engine.WindowLoaded) return;
				clearInterval(interval);

				switch (id) {
					case "facet:request":
						if (window.engine.facets.hasOwnProperty(facet)) {
							console.log( `[EngineWrapper] Sending Dummy Facet: ${facet}` );
							window.engine.bindings[ "facet:updated:" + facet ]( window.engine.facets[facet] );
						} else {
							console.error( `[EngineWrapper] MISSING FACET: ${facet}` );
							window.engine.bindings[ "facet:error:" + facet ]( window.engine.facets[facet] );
						};
					break;
					case "core:exception":
						console.error( `[EngineWrapper] oreUI guest has reported exception: ${facet}` );
					break;
					default:
						console.warn( `[EngineWrapper] OreUI triggered ${id} but we don't handle it!` );
					break;
				};
			});
		},
	},
};

const facets = JSON.parse(fs.readFileSync( __dirname + "/src/facets.json" ));
(async() => {
	for (const facet of facets) await loadFacet( facet );
	window.engine.WindowLoaded = true;
})();

window.addEventListener(
	"DOMContentLoaded", () => {
		document.title = "Minecraft";
		document.getElementsByTagName( "body" )[0].style = "user-select: none;";

		const link = document.createElement( "link" );
		link.href = "/libs/@hatchibombotar-cubemap/index.css";
		link.type = "text/css";
		link.rel = "stylesheet";
		document.getElementsByTagName( "head" )[0].appendChild( link );

		new Cubemap(
			document.getElementsByTagName( "body" )[0],
			[
				"/src/assets/cubemap/" + Config.panorama + "/front.png",
				"/src/assets/cubemap/" + Config.panorama + "/right.png",
				"/src/assets/cubemap/" + Config.panorama + "/back.png",
				"/src/assets/cubemap/" + Config.panorama + "/left.png",
				"/src/assets/cubemap/" + Config.panorama + "/top.png",
				"/src/assets/cubemap/" + Config.panorama + "/bottom.png",
			],
			{
				width: "auto",
				height: "100%",
				perspective: 400,
				rotate_type: "auto",
				rotate_speed: 2.5,
			},
		);

		const styleEl = document.createElement( "style" );
		document.head.appendChild( styleEl );
		
		const styleSheet = styleEl.sheet;
		styleSheet.insertRule( `#root { position: absolute; z-index: 1000; }`, styleSheet.cssRules.length );
		styleSheet.insertRule( `::-webkit-scrollbar { width: 0; }`, styleSheet.cssRules.length );
		styleSheet.insertRule( `input { outline: none; }`, styleSheet.cssRules.length );
		styleSheet.insertRule( `.RdcBM { flex-wrap: unset; }`, styleSheet.cssRules.length );
		styleSheet.insertRule( `.OnsGF,.qUBzu { height: fit-content; }`, styleSheet.cssRules.length );
		styleSheet.insertRule( `.ekhCp { overflow: auto; }`, styleSheet.cssRules.length );
		styleSheet.insertRule( `.iWrTh,.vPqz2,.XiGeZ,.MneaI,.c_o_5,.oQouW,.P3s5b,.nDjUk,.T3q0T,.R8eUQ,.BLVBU,.b_Dcf { width: auto; }`, styleSheet.cssRules.length );
		styleSheet.insertRule( `.nUoyP { height: 1.5rem; }`, styleSheet.cssRules.length );
		styleSheet.insertRule( `.uHy0P { min-height: 2.8rem; }`, styleSheet.cssRules.length );
		styleSheet.insertRule( `.mbdeF { width: auto; min-width: auto; }`, styleSheet.cssRules.length );
		styleSheet.insertRule( `.JcX32 { padding-bottom: 12px;margin-bottom: -12px; }`, styleSheet.cssRules.length );
		styleSheet.insertRule( `.IxVml { margin-left: -13px; }`, styleSheet.cssRules.length );
		styleSheet.insertRule( `.X5AON { display: none; }`, styleSheet.cssRules.length );
	},
);