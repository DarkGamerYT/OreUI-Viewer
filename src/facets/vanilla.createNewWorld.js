const crypto = require( "node:crypto" );
const experimentals = () => {
    let amount = 8;
    let experiments = [];
    for (let i = 1; i <= amount; i++) {
        experiments.push({
            id: i,
            title: crypto.randomUUID(),
            description: crypto.randomUUID(),
            isEnabled: (Math.round(Math.random())) == 0 ? false : true,
            category: 1
        });
    };

    return experiments;
};
module.exports = {
    isEditorWorld: false,
    isUsingTemplate: false,
    isLockedTemplate: false,
    generalWarningState: 0,
    showedAchievementWarning: false,
    applyTemplate: (templateId) => console.log( "[EngineWrapper/CNWFacet] applyTemplate();", templateId ),
    createOnRealms: {
        call: () => console.log( "[EngineWrapper/CNWFacet] createOnRealms.call();" ),
        error: null
    },
	createWorld: {
        call: () => console.log( "[EngineWrapper/CNWFacet] createWorld.call();" ),
        error: null
    },
	createWorldOnPreviewRealm: (id) => {},
	unlockTemplateSettings: () => true,
	checkIfUserHasChangedSettings: () => true,
    worldCreationData: {
        general: {
            worldName: "Test World",
            difficulty: 3,
            gameMode: 1
        },
        advanced: {
            useFlatWorld: true,
            simulationDistance: 8,
            startWithMap: false,
            bonusChest: false,
            showCoordinates: true,
            recipesUnlock: true,
            firesSpreads: true,
            tntExplodes: true,
            respawnBlocksExplode: true,
            mobLoot: true,
            naturalRegeneration: true,
            tileDrops: true,
            immediateRespawn: true,
            respawnRadius: "5",
            worldSeed: "-1"
        },
        cheats: {
            cheatsEnabled: false,
            tickSpeed: 1
        },
        betaFeatures: [ ...(experimentals()) ],
        multiplayer: {
            generalWarningState: 0,
            multiplayerSupported: true,
            playerPermissions: 1,
            multiplayerGame: true,
            playerAccess: 3,
            visibleToLanPlayers: true,
            friendlyFire: true,
            platformPlayerAccess: 3,
            platformPlayerAccessSupported: true,
            platformPlayerAccessEnabled: true,
            platformPlayerInviteAccessSupported: true
        },
        scriptingCoding: {
            codeBuilderEnabled: true
        }
    }
};