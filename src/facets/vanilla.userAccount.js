module.exports = {
    hasPremiumNetworkAccess: true,
    isLoggedInWithMicrosoftAccount: true,
    isTrialAccount: false,
    hasValidCrossPlatformSkin: true,
    isBanned: false,
    banReason: "",
    banExpiration: "",
    showPremiumNetworkUpsellModal: () => {},
    userPermissions: {
        multiplayer: {
            denyReasons: [],
            allowed: true
        },
        addFriends: {
            denyReasons: [],
            allowed: true
        },
        viewProfiles: {
            denyReasons: [],
            allowed: true
        }
    },
    isSignedInPlatformNetwork: true,
    signOutOfMicrosoftAccount: () => {},
    manageMicrosoftAccount: () => {},
};