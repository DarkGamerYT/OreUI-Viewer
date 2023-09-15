module.exports = {
    deactivatePackContinue: () => undefined,
    activatePackContinue: () => undefined,
    changePackPriority: () => undefined,
    activatePack: () => undefined,
    deactivatePack: () => undefined,
    startPackDownload: () => {},
    cancelPackDownload: () => {},
    loadPackData: () => {},
    packDownloadProgress: 0,
    packDownloadError: undefined,
    packDownloadStatus: 0,
    worldPackData: {
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
    }
};