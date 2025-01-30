module.exports = () => ({
    loadPacksData: () => {},
    continuePackActivation: () => undefined,
    continuePackDeactivation: () => undefined,
    changePackPriority: () => undefined,
    activatePack: () => undefined,
    deactivatePack: () => undefined,
    downloadPacks: () => {},
    cancelPackDownload: () => {},
    packDownloadProgress: 0,
    packDownloadName: "Test",
    packDownloadError: undefined,
    packDownloadStatus: 0,
    packDownloadTaskState: 0,
    worldPacksData: {
        globalTexturePacks: [
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
        activeTexturePacks: [
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
        availableTexturePacks: [
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
        realmsTexturePacks: [
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
        unownedTexturePacks: [],
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

        realmsPlusSupported: true,
        realmsSubscriber: true,
        sharedPacks: false
    },
    isInitialized: true,
    getPackSizes: () => {},
    getPackSizesReset: () => {},
    lastConsultedPackSizesError: undefined,
    lastConsultedPackSizesTaskState: 0,
    lastConsultedPackSizes: ""
});