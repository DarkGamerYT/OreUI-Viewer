module.exports = () => ({
    missingPacksToStart: [],
    backupThenStartLocalWorld: { state: 0 },
    startLocalWorld: {
        result: 0,
        run: () => console.log( `[EngineWrapper/VanillaWorldStartupFacet] Starting local world with id: ${worldId}` ),
        clear: () => {}
    }});