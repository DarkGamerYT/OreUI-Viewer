module.exports = {
    saveLocalWorldProgress: 0,
    currentWorldId: 1234567890,
    addWorld: () => console.log("[EngineWrapper/WorldEditorFacet] addWorld();"),
    closeWorld: () => {},
    deleteWorld: () => {},
    startSaveLocalWorld: (worldId) => {},
    startLocalWorld: {
        run: (worldId) => {},
        clear: () => {}
    },
    loadWorld: {
        run: () => {},
        clear: () => {}
    },
    duplicateWorld: {
        run: () => {},
        clear: () => {},
        result: null
    },
    worldData: {
        general: {
            worldName: "Test World",
            gameMode: 0,
            difficulty: 1
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
        lastPlayed: "2 Jan 2023",
        worldIconPath: ""
    },
    saveLocalWorld: {
        run: () => {},
        clear: () => {},
        cancel: () => true,
        result: null,
        state: 0
    },
    activatePack: {
        run: () => {},
        clear: () => {},
        result: null
    },
    deactivatePack: {
        run: () => {},
        clear: () => {},
        result: null
    },
    activatePackContinue: {
        run: () => {},
        clear: () => {},
        result: null
    },
    deactivatePackContinue: {
        run: () => {},
        clear: () => {},
        result: null
    },
    changePackPriority: {
        run: () => {},
        clear: () => {},
        result: null
    },
    downloadPack: {
        run: () => {},
        clear: () => {},
        cancel: () => true,
        result: null,
        state: 0
    },
    isAchievementsEditDisabled: false,
    worldPacks: {
        texturePacks: {
            activeGlobal: [
                {
                    id: "0",
                    contentId: "0",
                    name: "Test Pack #0",
                    creator: "xKingDark",
                    description: "Test",
                    size: "3.5MB",
                    image: "/src/assets/mc.png",
                    isMarketplaceItem: true,
                    isPlatformLocked: false,
                    hasSettings: true
                }
            ],
            active: [
                {
                    id: "1",
                    contentId: "1",
                    name: "Test Pack #1",
                    creator: "xKingDark",
                    description: "Test",
                    size: "3.5MB",
                    image: "/src/assets/mc.png",
                    isMarketplaceItem: true,
                    isPlatformLocked: false,
                    hasSettings: true
                }
            ],
            available: [
                {
                    id: "2",
                    contentId: "2",
                    name: "Test Pack #2",
                    creator: "xKingDark",
                    description: "Test",
                    size: "3.5MB",
                    image: "/src/assets/mcpreview.png",
                    isMarketplaceItem: true,
                    isPlatformLocked: false,
                    hasSettings: true
                }
            ],
            realms: [
                {
                    id: "3",
                    contentId: "3",
                    name: "Test Pack #3",
                    creator: "xKingDark",
                    description: "Test",
                    size: "3.5MB",
                    image: "/src/assets/mcpreview.png",
                    isMarketplaceItem: true,
                    isPlatformLocked: false,
                    hasSettings: true
                }
            ],
            unowned: []
        },
        behaviorPacks: {
            active: [
                {
                    id: "0",
                    contentId: "0",
                    name: "Test Pack #0",
                    creator: "xKingDark",
                    description: "Test",
                    size: "3.5MB",
                    image: "/src/assets/mc.png",
                    isMarketplaceItem: true,
                    isPlatformLocked: false,
                    hasSettings: true
                }
            ],
            available: [
                {
                    id: "1",
                    contentId: "1",
                    name: "Test Pack #1",
                    creator: "xKingDark",
                    description: "Test",
                    size: "3.5MB",
                    image: "/src/assets/mcpreview.png",
                    isMarketplaceItem: true,
                    isPlatformLocked: false,
                    hasSettings: true
                }
            ]
      },
      realmsPlusSupported: true,
      realmsSubscriber: true,
      sharedPacks: false
    },
    downloadPackActionProgress: 0,
    downloadPackActionStatus: 0
};