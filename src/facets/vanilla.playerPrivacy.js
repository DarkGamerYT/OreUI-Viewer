module.exports = () => ({
    loaded: true,
    data: { viewTargetProfile: true },
    load() {
        console.log("Player privacy data loaded");
    },
});
