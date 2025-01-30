module.exports = () => ({
    texturePacks: {
        global: [
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
    activeBehaviorPacks: [
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
    availableBehaviorPacks: [
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
    ],
    status: 0,
    downloadProgress: 0.5,
    importProgress: 0.1,
    resourcePackToDownload: { title: "Test" },
    marketplacePackId: "1",
    userOwnsAtLeastOnePack: true,
    prompt: {
        actions: [],
        active: false,
        body: "",
        id: "prompt",
        title: "",
        handleAction: () => console.log( "[EngineWrapper/RPFacet] prompt.handleAction()" )
    },
    activate: () => console.log( "[EngineWrapper/RPFacet] activate()" ),
    deactivate: () => console.log( "[EngineWrapper/RPFacet] deactivate()" ),
    showSettings: (packId) => console.log( "[EngineWrapper/RPFacet] showSettings();", packId )
});