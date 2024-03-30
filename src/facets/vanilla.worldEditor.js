module.exports = {
    currentWorldId: "test",
    worldData: {
        general: {
            worldName: "Test World",
            gameMode: 0,
            difficulty: 1,
            isHardcore: true,
        },
        advanced: {
            worldSeed: "Test World Seed :D",
            useFlatWorld: false,
            startWithMap: false,
            bonusChest: false,
            showCoordinates: false,
            firesSpreads: true,
            tntExplodes: true,
            respawnBlocksExplode: true,
            mobLoot: true,
            naturalRegeneration: true,
            tileDrops: true,
            immediateRespawn: false,
            respawnRadius: "5",
            simulationDistance: 8
        },
        multiplayer: {
            generalWarningState: 0,
            multiplayerSupported: true,
            playerPermissions: 1,
            multiplayerGame: true,
            playerAccess: 2,
            visibleToLanPlayers: true,
            friendlyFire: true,
            platformPlayerAccess: 2,
            platformPlayerAccessSupported: false,
            platformPlayerAccessEnabled: true,
            platformPlayerInviteAccessSupported: true
        },
        cheats: {
            cheatsEnabled: false,
            commandsEnabled: true,
            daylightCycle: 1,
            keepInventory: false,
            mobSpawning: false,
            mobGriefing: false,
            entitiesDropLoot: false,
            weather: false,
            commandBlocks: false,
            educationEdition: false,
            tickSpeed: "1"
        },
        betaFeatures: [
            {
                id: "0",
                title: "Gameplay Test",
                description: "Hello!",
                isEnabled: false,
                category: 0
            },
            {
                id: "0",
                title: "Add-on Creators Test",
                description: "Hello!",
                isEnabled: false,
                category: 1
            },
            {
                id: "0",
                title: "Internal Test",
                description: "Hello!",
                isEnabled: false,
                category: 2
            }
        ],
        lockedTemplate: false,
        isUsingTemplate: false
    },
    worldSummary: {
        fileSize: "300 MB",
        lastPlayed: "15 March 2024",
        worldIconPath: ""
    },
    isAchievementsEditDisabled: false,
    worldIsInitialized: true,
    closeWorld: () => {},
    loadWorld: () => {},
    addWorld: () => {},
    saveLocalWorld: () => {},
    clearSaveLocalWorldTaskState: () => {},
    saveLocalWorldError: undefined,
    saveLocalWorldTaskState: 0,
    loadWorldError: undefined,
    loadWorldTaskState: 0,
    isEditorWorld: false,
    worldHasBeenModified: false,
    reloadWorld: () => {}
};