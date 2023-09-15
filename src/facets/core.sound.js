const fs = require( "node:fs" );
module.exports = {
	play: (id) => {
		console.log( `[EngineWrapper/SoundFacet] Sound ${id} requested.` );
        const soundDefinitions = fs.readFileSync( __dirname + "/../../hbui/sound_definitions.json" );
        if(
            soundDefinitions[id]
            && soundDefinitions[id].sounds.length != false
        ) {
            const sound = soundDefinitions[id];
            const audio = new Audio( sound.sounds[Math.floor( Math.random() * sound.sounds.length )].name );
            audio.play();
        };
	},
};