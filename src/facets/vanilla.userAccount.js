module.exports = {
    isBanned: false,
    banReason: "Test",
    banExpiration: "",
    isTrialAccount: false,
    isAllowedToAddFriends: true,
    isLoggedInWithMicrosoftAccount: true,
    hasPremiumNetworkAccess: true,
    hasValidCrossPlatformSkin: true,
    isParentalPermissionRequiredForMultiplayer: false,
    showPremiumNetworkUpsellModal: () => console.log( "[EngineWrapper/UserAccountFacet] showPremiumNetworkUpsellModal()" ),
    showMicrosoftAccountLogInScreen: () => console.log( "[EngineWrapper/UserAccountFacet] showMicrosoftAccountLogInScreen()" )
};