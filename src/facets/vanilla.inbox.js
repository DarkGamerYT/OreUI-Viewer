module.exports = {
    inboxMessages: [
        {
            id: 1,
            dateReceived: 1681687651,
            dateString: "11:35 am",
            dateLabel: "",
            title: "News :D",
            sender: "xKingDark",
            content: "Hello World!",
            read: true,
            invitationId: "InvIdTest",
            announcementType: 0,
            imgSource: "/src/assets/screenshot4.png",
            invType: 0,
            invStatus: 0
        },
        {
            id: "2",
            dateReceived: 1681687651,
            dateString: "11:35 am",
            dateLabel: "",
            title: "Game Invite :D",
            sender: "xKingDark",
            content: "Hello World!",
            read: false,
            invitationId: "InvIdTest",
            announcementType: 1,
            imgSource: "/src/assets/screenshot4.png",
            invType: 2,
            invStatus: 0,
            template: "",
            instanceId: "2"
        },
        {
            id: "3",
            dateReceived: 1681687651,
            dateString: "11:35 am",
            dateLabel: "",
            title: "Realm Invite :D",
            sender: "xKingDark",
            content: "Hello World!",
            read: false,
            invitationId: "InvIdTest",
            announcementType: 2,
            imgSource: "/src/assets/screenshot4.png",
            invType: 2,
            invStatus: 0,
            template: "",
            instanceId: "3"
        }
    ],
    categoryUnreadMessages: [],
    realmsSubscriber: true,
    deleteNotification: (id) => id,
    saveSettings: () => {},
    setNotificationRead: () => {},
    settings: {
        showOnlyFriendInvites: true,
        showInvitesBadges: true,
        showRealmsBadges: true,
        showNewsBadges: true
    }
};