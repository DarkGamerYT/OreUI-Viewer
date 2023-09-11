/*
engine.js
--------
pretend to be the bedrock engine for oreUI's sake
(C) Luminoso 2022 / MIT Licensed
*/

const fs = require( "fs" );
const { Cubemap } = require( "@hatchibombotar/cubemap" );

let _ME_Translations = {};
const Config = require( "./config.json" );

if (navigator.userAgent.match( "/cohtml/i" )) {
	console.warn(
		"[EngineWrapper] OreUI Shim Injected, but the UI is being loaded in gameface!"
	);
};

const _ME_LocaleFacet = {
	locale: Config.locale,
	translate: (id) => {
		if (Config.use_translation) return _ME_Translations[id]?.split( "#" )[0]?.trim();
		else {
			console.warn(
				`[EngineWrapper/LocaleFacet] USE_TRANSLATIONS not set, skipping translate: ${id}`
			);

			return id;
		};
	},
	translateWithParameters: (id, params) => {
		if (Config.use_translation) {
			let translation = _ME_Translations[id];
			if (/%\d+|$s/g.test(translation)) {
				for (i = 1; i <= params.length; i++) {
					translation = translation?.replaceAll( "%" + i + "$s", params[i - 1] );
				};
			} else {
				translation = translation?.replaceAll( "%s", params[0] );
			};
			
			return translation?.split( "#" )[0]?.trim();
		} else {
			console.warn(
				`[EngineWrapper/LocaleFacet] USE_TRANSLATIONS not set, skipping translate w/ param: ${id}`
			);
      
			return id;
		};
	},
	formatDate: (timestampInSeconds) => new Date( timestampInSeconds * 1000 ).toLocaleDateString(),
};

const _ME_SoundFacet = {
  play: (id) => {
    console.log( `[EngineWrapper/SoundFacet] Sound ${id} requested.` );
    fetch( "/hbui/sound_definitions.json" )
    .then( (response) => response.json() )
    .then(
      (sounddat) => {
        if(
          sounddat[id]
          && sounddat[id].sounds.length != false
        ) new Audio( sounddat[id].sounds[Math.floor( Math.random() * sounddat[id].sounds.length )].name ).play();
      },
    );
  },
};

const _ME_RouterFacet = {
  engineUITransitionTime: 800,
  history: {
    list: [
      {
        hash: "",
        search: "",
        state: "",
        pathname: Config.pathname,
      },
    ],
    length: 5,
    action: "REPLACE",
    replace(path) {
	    if (path.includes( "?" )) return;
      this.action = "REPLACE";
      this.list.push(
        {
          hash: "",
          search: "",
          state: "",
          pathname: path,
        },
      );

      console.log( "[EngineWrapper/RouterFacet] replacing path to " + path );
      window.engine.bindings[ `facet:updated:core.router` ]( _ME_Facets[ "core.router" ] );
    },
    goBack() {
      console.warn( "goBack currently doesn't seem to work!" );
      console.log( "[EngineWrapper/RouterFacet] goingBack." );
      this.list.pop();
      window.engine.bindings[ `facet:updated:core.router` ]( _ME_Facets[ "core.router" ] );
    },
    push(path) {
      this.action = "PUSH";
      this.list.push(
        {
          hash: "",
          search: "",
          state: "",
          pathname: path,
        },
      );

      console.log( "[EngineWrapper/RouterFacet] pushing path to " + path );
      window.engine.bindings[ `facet:updated:core.router` ]( _ME_Facets[ "core.router" ] );
    },
  },
};

let _ME_Facets = {
  "core.locale": _ME_LocaleFacet,
  "core.router": _ME_RouterFacet,
  "core.sound": _ME_SoundFacet,
};

const loadFacet = async (facet) => {
  const f = await JSON.parse(fs.readFileSync( "./src/facets/" + facet + ".json" ));
  for (let fac in f) {
    let face = f[fac];
    if (face?.function) {
      f[fac] = new Function( face.arguments, face.body );
    };

    toFunction( face );
  };

  console.log( "[EngineWrapper] Facet Loaded: " + facet, f );
  _ME_Facets[facet] = f;
};

window.engine = {
  bindings: {},
  on: (event, callback) => console.log( `[EngineWrapper] engine.on called for ${event}` ),
  off: (event, callback) => console.log( `[EngineWrapper] engine.off called for ${event}` ),
  AddOrRemoveOnHandler: (id, func, unk) => window.engine.bindings[id] = func,
  RemoveOnHandler: (id, func, unk) => console.log( `[EngineWrapper] RemoveOnHandler for ID ${id}. func: ${func}` ),
  AddOrRemoveOffHandler: (id) => true,
  BindingsReady: () => console.log( "[EngineWrapper] BindingsReady called" ),
  TriggerEvent: {
    apply: (unk, data) => {
      const e = setInterval(
        () => {
          if (window.engine.WindowLoaded) {
            clearInterval(e);
            if (data[0] == "facet:request") {
              if (_ME_Facets.hasOwnProperty(data[1])) {
                console.log( `[EngineWrapper] Sending Dummy Facet: ${data[1]}` );
                window.engine.bindings[`facet:updated:${data[1]}`]( _ME_Facets[data[1]] );
              } else {
                console.error( `[EngineWrapper] MISSING FACET: ${data[1]}` );
                window.engine.bindings[`facet:error:${data[1]}`]( _ME_Facets[data[1]] );
              };
            } else if (data[0] == "core:exception") console.error( `[EngineWrapper] oreUI guest has reported exception: ${data[1]}` );
            else console.warn( `[EngineWrapper] OreUI triggered ${data[0]} but we don't handle it!` );
          };
        },
      );
    },
  },
};

const facets = JSON.parse(fs.readFileSync( "./src/facets.json" ));
(
  async() => {
    for (const facet of facets) await loadFacet( facet );
    window.engine.WindowLoaded = true;
  }
)();

const toFunction = (o) => {
  if (typeof o == "object") {
    for (let obj in o) {
      let ob = o[obj];
      if (ob?.function) {
        o[obj] = new Function( ob.arguments, ob.body );
      } else if (typeof o == "object") {
        toFunction( ob );
      };
    };
  };

  return o;
};

if (Config.use_translation) {
  console.log(
    "[EngineWrapper] Actual Translation Support was enabled (USE_TRANSLATIONS). Loading " + Config.locale + ".lang file..."
  );

  const locdat = fs.readFileSync( "./src/texts/" + Config.locale + ".lang" ).toString();
  for (const item of locdat.split( "\n" ))
  _ME_Translations[item.split( "=" )[0]] = item.split( "=" )[1]?.replace( "\r", "" );
};

window.addEventListener(
	"DOMContentLoaded",
	() => {
		document.getElementsByTagName( "body" )[0].style = "user-select: none;";
		
    const link = document.createElement( "link" );
    link.href = "/node_modules/@hatchibombotar/cubemap/lib/index.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    document.getElementsByTagName( "head" )[0].appendChild( link );

    const info = document.createElement( "div" );
    info.style = "position: absolute;z-index: 1000;width: 100%;"
    //document.body.appendChild( info );

    const times = [];
    let fps;
    setInterval(
      () => window.requestAnimationFrame(
        () => {
          const now = performance.now();
          while (
            times.length > 0
            && times[0] <= now - 1000
          ) times.shift();
          times.push(now);
          fps = times.length;
        },
      ),
    );

    setInterval(
      () => {
        info.innerHTML = (
          `<div style="margin: auto;color: #545454;font-family: 'Minecraft Seven v2';font-size: 14px;font-weight: bold;text-align: center;line-height: 16px;">
            <div>OreUI - ${window.clientInformation.platform} Build, Intel(R) UHD Graphics, Win 10.0.22000.2295</div>
            <div>FPS: ${fps.toFixed(1)}, GUI Scale: 0.0, Resolution: ${window.innerWidth}x${window.innerHeight}</div>
          </div>`
        );
      }, 1000,
    );

    new Cubemap(
      document.getElementsByTagName( "body" )[0],
      [
          "/src/assets/cubemap/front.png",
          "/src/assets/cubemap/right.png",
          "/src/assets/cubemap/back.png",
          "/src/assets/cubemap/left.png",
          "/src/assets/cubemap/top.png",
          "/src/assets/cubemap/bottom.png",
      ],
      {
        width: "auto",
        height: "100%",
        perspective: 350,
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
		styleSheet.insertRule( `.OnsGF { height: fit-content; }`, styleSheet.cssRules.length );
		styleSheet.insertRule( `.ekhCp { overflow: auto; }`, styleSheet.cssRules.length );
		styleSheet.insertRule( `.iWrTh,.vPqz2,.XiGeZ,.MneaI,.c_o_5,.oQouW,.P3s5b,.nDjUk,.T3q0T,.R8eUQ,.BLVBU,.b_Dcf { width: auto; }`, styleSheet.cssRules.length );
		styleSheet.insertRule( `.nUoyP { height: 1.5rem; }`, styleSheet.cssRules.length );
		styleSheet.insertRule( `.uHy0P { min-height: 2.8rem; }`, styleSheet.cssRules.length );
		styleSheet.insertRule( `.mbdeF { width: auto; min-width: auto; }`, styleSheet.cssRules.length );
    styleSheet.insertRule( `.qUBzu { height: fit-content; }`, styleSheet.cssRules.length );
    styleSheet.insertRule( `.JcX32 { padding-bottom: 12px;margin-bottom: -12px; }`, styleSheet.cssRules.length );
	},
);