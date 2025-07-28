// @ts-check
module.exports = () => ({
    missingPacksToStart: [],
    backupThenStartLocalWorld: {
        progress: null,
        state: 0,
        result: null,
        run: "function run() { [native code] }",
        cancel: "function cancel() { [native code] }",
        clear: "function clear() { [native code] }",
    },
    startLocalWorld: Object.assign(
        function startLocalWorld(/** @type {unknown} */ worldId) {
            console.log(`[EngineWrapper/VanillaWorldStartupFacet] startLocalWorld(): Starting local world with id: ${worldId}`);
        },
        {
            result: 0,
            /**
             * @param {unknown} worldId
             */
            run(worldId) {
                console.log(`[EngineWrapper/VanillaWorldStartupFacet] startLocalWorld.run(): Starting local world with id: ${worldId}`);
            },
            clear: () => {},
        }
    ),
    brokenPacksToStart: [],
    missingPacksSize: "",
    missingTemplateToStart: "",
    hasMissingResources: false,
    startLocalWorldTaskState: 0,
    startLocalWorldResult: null,
    clearStartLocalWorldResult() {},
});

