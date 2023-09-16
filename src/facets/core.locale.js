const fs = require( "node:fs" );
const Config = require( "../../config.json" );
let translations = {};
if (Config.use_translation) {
	console.log(
		"[EngineWrapper/LocaleFacet] Loading " + Config.locale + ".lang file..."
	);

	const locdat = fs.readFileSync( "./src/texts/" + Config.locale + ".lang" ).toString();
	for (const item of locdat.split( "\n" ))
	translations[item.split( "=" )[0]] = item.split( "=" )[1]?.replace( "\r", "" );
};

module.exports = {
	locale: Config.locale,
	translate: (id) => Config.use_translation ? translations[id]?.split( "#" )[0]?.trim() : id,
	translateWithParameters: (id, params) => {
		if (Config.use_translation) {
			let translation = translations[id];
			if (/%\d+|$s/g.test(translation)) {
				for (i = 1; i <= params.length; i++) {
					translation = translation?.replaceAll( "%" + i + "$s", params[i - 1] );
				};
			} else translation = translation?.replaceAll( "%s", params[0] );
			
			return translation?.split( "#" )[0]?.trim();
		} else return id;
	},
	
	formatDate: (timestampInSeconds) => new Date( timestampInSeconds * 1000 ).toLocaleDateString(),
};