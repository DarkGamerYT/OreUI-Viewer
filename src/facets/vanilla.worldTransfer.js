// @ts-check
module.exports = () => ({
    importWorld: {
        progress: null,
        state: 0,
        result: null,
        run() {
            console.log(`[EngineWrapper/VanillaWorldTransferFacet] importWorld.run();`);
        },
        cancel() {},
        clear() {},
    },
    backupWorldProgress: 0,
    backupWorldResult: null,
    importWorldProgress: 0,
    importWorldProgressPercentage: 0,
    importWorldResult: null,
    importWorld_v2() {
        console.log(`[EngineWrapper/VanillaWorldTransferFacet] importWorld_v2();`);
    },
    resetImportWorld() {},
    backupWorld() {},
    resetBackupWorld() {},
});

