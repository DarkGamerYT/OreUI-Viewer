const { RealmsStoriesTimelineOptInStatus } = require("../types");

module.exports = () => ({
    timelineRequiredStatus: false,
    realmOptIn: RealmsStoriesTimelineOptInStatus.OptedIn,
    playerOptIn: RealmsStoriesTimelineOptInStatus.OptedIn,
    realmEventsStatus: true,
    realmCoordinatesStatus: true,
    realmNotificationsStatus: true,
    realmTimelineStatus: true,
    currentFetchState: 2,
    currentPostState: 2,
});

