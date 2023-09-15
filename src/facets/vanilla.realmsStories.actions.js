module.exports = {
    init: (realmId) => {},
    reset: () => {},
    postStory: () => {},
    clearPostStoryStatus: () => {},
    postComment: () => {},
    clearPostCommentStatus: () => {},
    fetchStories: () => {},
    fetchMembers: () => {},
    fetchStoryImage: (storyId) => {},
    fetchStoryComments: (storyId) => {},
    setViewed: (feedItemId, parentId) => {},
    clearSetViewedStatus: (feedItemId) => {},
    toggleLike: (feedItemId, parentId) => {},
    clearToggleLikeStatus: (feedItemId) => {},
    delete: (feedItemId, parentId) => {},
    clearDeleteStatus: (feedItemId) => {},
    setRealmsOptInStatus: (state) => {},
    setPlayerOptInStatus: (state) => {},
    setRealmEventsStatus: (state) => {},
    setRealmTimelineStatus: (state) => {},
    setRealmCoordinatesStatus: (state) => {},
    setRealmNotificationStatus: (state) => {},
    postSettings: () => {},
    fetchSettings: () => {},
    consumeSettingsState: () => {}
};