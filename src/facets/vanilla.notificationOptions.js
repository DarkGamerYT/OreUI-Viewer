// @ts-check
/**
 * Maps world IDs to whether the experimental world warning should not be shown.
 *
 * @type {Map<string, boolean>}
 */
let doNotShowExperimentalWorldWarning = new Map();

module.exports = () => ({
    doNotShowEntitlementsWarning: false,
    doNotShowOldWorldsWarning: false,
    doNotShowAddonStackingWarning: false,
    doNotShowManageShowcaseReplaceWarning: false,
    doNotShowManageShowcaseClearWarning: false,
    doNotShowAlternativeStorageHasWorlds: false,
    doNotShowHiddenAlternativeStorageWorldsWarning: false,
    doNotShowHiddenLocalWorldsWarning: false,
    doNotShowUsingExternalStorageWarning: false,
    doNotShowMultiplayerOnlineSafetyWarning: false,
    doNotShowMultiplayerIpSafetyWarning: false,
    doNotShowHardcoreModeWarning: false,
    /**
     * @param {string} worldId
     * @returns {boolean | undefined}
     */
    getDoNotShowExperimentalWorldWarning(worldId) {
        return typeof worldId === "string" ? doNotShowExperimentalWorldWarning.get(worldId) || false : undefined;
    },
    /**
     * @param {string} worldId
     * @param {boolean} value
     * @returns {null | undefined}
     */
    setDoNotShowExperimentalWorldWarning(worldId, value) {
        return typeof worldId === "string"
            ? typeof value === "boolean"
                ? (doNotShowExperimentalWorldWarning.set(worldId, value), null)
                : undefined
            : undefined;
    },
});
