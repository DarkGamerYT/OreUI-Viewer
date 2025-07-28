module.exports = () => ({
    fireEvent(event) {
        console.log(`[EngineWrapper/VanillaTelem] Event: ${event}`);
    },
    fireEventButtonPressed(event) {
        console.log(`[EngineWrapper/VanillaTelem] EventButtonPressed: ${event}`);
    },
    fireEventModalShown(event) {
        console.log(`[EngineWrapper/VanillaTelem] EventModalShown: ${event}`);
    },
    trackOptionChanged(event) {
        console.log(`[EngineWrapper/VanillaTelem] TrackOptionChanged: ${event}`);
    },
    fireEventOptionsChanged(event) {
        console.log(`[EngineWrapper/VanillaTelem] EventOptionsChanged: ${event}`);
    },
    discardTrackedOptions(event) {
        console.log(`[EngineWrapper/VanillaTelem] DiscardTrackedOptions: ${event}`);
    },
    fireEventRealmsStoriesOptIn(event) {
        console.log(`[EngineWrapper/VanillaTelem] EventRealmsStoriesOptIn: ${event}`);
    },
});

