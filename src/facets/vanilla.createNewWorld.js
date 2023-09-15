module.exports = {
    isEditorWorld: false,
    isUsingTemplate: false,
    isLockedTemplate: false,
    generalWarningState: 0,
    showedAchievementWarning: false,
    applyTemplate: (templateId) => console.log( "[EngineWrapper/CNWFacet] applyTemplate();", templateId ),
    createOnRealms: {
        call: () => console.log( "[EngineWrapper/CNWFacet] createOnRealms.call()" ),
        error: null
    },
	createWorld: {
        call: () => console.log( "[EngineWrapper/CNWFacet] createWorld.call()" ),
        error: null
    },
	createWorldOnPreviewRealm: (id) => {},
	unlockTemplateSettings: () => true,
	checkIfUserHasChangedSettings: () => true,
    worldCreationData: {
        general: {
            worldName: "Test World",
            difficulty: 0,
            gameMode: 0
        },
        advanced: {
            useFlatWorld: false,
            simulationDistance: 8,
            startWithMap: false,
            bonusChest: false,
            showCoordinates: false,
            firesSpreads: true,
            tntExplodes: true,
            respawnBlocksExplode: true,
            mobLoot: true,
            naturalRegeneration: true,
            tileDrops: true,
            immediateRespawn: true,
            respawnRadius: "5",
            worldSeed: ""
        },
        cheats: {
            cheatsEnabled: false,
            tickSpeed: 1
        },
        betaFeatures: [
            {
                id: "0",
                title: "The next major update",
                description: "Minecraft: Banana Update",
                isEnabled: false,
                category: 0
            },
            {
                id: "0",
                title: "Beta APIs",
                description: "",
                isEnabled: false,
                category: 1
            },
            {
                id: "0",
                title: "The Add-on breaker",
                description: "Breaks every add-on ever created.",
                isEnabled: true,
                category: 2
            }
        ],
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