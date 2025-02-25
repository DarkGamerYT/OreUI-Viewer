module.exports = () => ({
    realmsSubscriber: true,
    marketplacePassSubscriber: true,
    settings: {
        showOnlyFriendInvites: true,
        showInvitesBadges: true,
        showRealmsBadges: true,
        showNewsBadges: true,
        showMarketplacePassBadges: true,
    },
    inboxMessages: [
        {
            id: "1",
            dateReceived: 1681687651,
            dateString: "11:35 am",
            dateLabel: "",
            title: "News :D",
            sender: "xKingDark",
            content: "Hello World!",
            read: false,
            announcementType: 0,
            imgSource: "/src/assets/screenshot4.png",
            buttons: [
                {
                    id: "",
                    text: "CTA Button",
                    link: "http://www.minecraft.net",
                    action: "external",
                    reportClick: () => {},
                },
            ]
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
        },
        {
            id: "4",
            dateReceived: 1681687651,
            dateString: "11:35 am",
            dateLabel: "",
            title: "Marketplace Pass :D",
            sender: "xKingDark",
            content: "Hello World!",
            read: false,
            announcementType: 3,
            imgSource: "/src/assets/screenshot4.png",
        },
        {
            id: "4",
            dateReceived: 1681687651,
            dateString: "11:35 am",
            dateLabel: "",
            title: "Feedback :D",
            sender: "xKingDark",
            content: "Hello World!",
            read: true,
            announcementType: 4,
            imgSource: "/src/assets/screenshot4.png",
        }
    ],
    categoryUnreadMessages: {
        NEWS: 1,
        INVITES: 1,
        REALMS: 1,
        MARKETPLACEPASS: 1,
    },
    deleteNotification: (id) => id,
    saveSettings: () => {},
    setNotificationRead: () => {},
});