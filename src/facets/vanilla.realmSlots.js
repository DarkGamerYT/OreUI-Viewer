module.exports = () => ({
    realmSlots: [
        {
            id: 1,
            worldName: "My World",
            slotImage: ""
        },
        {
            id: -1,
            worldName: "New World",
            slotImage: ""
        },
        {
            id: 3,
            worldName: "Celebration Map",
            slotImage: "https://packsbedrockstage-endpoint.azureedge.net/pack-images/celebration_world_icon.jpg"
        }
    ],
	isLoading: false,
    selectedRealmIndex: 0,
	isSlotSelected: true,
    didFailToActivateSlot: false,
    didFailToQuerySelectedRealmDetails: false,
	isShowingConfirmationModal: false,
    selectedRealmName: "My Realm",
    getSelectedRealmDetails: (id) => {},
	selectSlot: (index) => {},
	confirm: () => {},
	reset: () => {}
});