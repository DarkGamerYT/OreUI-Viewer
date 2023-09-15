module.exports = {
    isTrialAccount: false,
    isLoggedInWithMicrosoftAccount: false,
    hasPremiumNetworkAccess: true,
    hasValidCrossPlatformSkin: true,
    showPremiumNetworkUpsellModal: () => console.log( "[EngineWrapper/UserAccountFacet] showPremiumNetworkUpsellModal()" ),
    showMicrosoftAccountLogInScreen: () => console.log( "[EngineWrapper/UserAccountFacet] showMicrosoftAccountLogInScreen()" )
};