module.exports = () => ({
    data: {
        messageCount: 4,
        messages: [
            {
                id: "0",
                template: "ImageText",
                surface: "LoginAnnouncement",
                additionalProperties: [
                    { key: "header", value: "Test" },
                    { key: "body", value: "Hello World!" },
                ],
                images: [
                    {
                        id: "Primary",
                        isLoaded: true,
                        url: "/hbui/assets/welcome_graphic-edbb3.png",
                    },
                ],
                buttons: [
                    {
                        id: "Dismiss",
                        text: "",
                        link: "",
                        action: "dismiss",
                        reportClick: () => console.log("[EngineWrapper/PlayerMessagingServiceFacet] reportClick()"),
                        additionalProperties: [],
                    },
                ],
            },
            {
                id: "1",
                template: "HeroImageCTA",
                surface: "LoginAnnouncement",
                additionalProperties: [
                    { key: "header", value: "Test" },
                    { key: "body", value: "Hello World!" },
                ],
                images: [
                    {
                        id: "Primary",
                        isLoaded: true,
                        url: "/hbui/assets/welcome_graphic-edbb3.png",
                    },
                ],
                buttons: [
                    {
                        id: "Dismiss",
                        text: "",
                        link: "",
                        action: "dismiss",
                        reportClick: () => console.log("[EngineWrapper/PlayerMessagingServiceFacet] reportClick()"),
                        additionalProperties: [],
                    },
                    {
                        id: "CallToAction",
                        text: "",
                        link: "",
                        action: "productId",
                        reportClick: () => console.log("[EngineWrapper/PlayerMessagingServiceFacet] reportClick()"),
                        additionalProperties: [],
                    },
                ],
            },
            {
                id: "2",
                template: "ImageThumbnailCTA",
                surface: "LoginAnnouncement",
                additionalProperties: [
                    { key: "header", value: "Test" },
                    { key: "body", value: "Hello World!" },
                ],
                images: [
                    {
                        id: "Primary",
                        isLoaded: true,
                        url: "/hbui/assets/welcome_graphic-edbb3.png",
                    },
                    {
                        id: "Secondary",
                        isLoaded: true,
                        url: "/hbui/assets/welcome_graphic-edbb3.png",
                    },
                ],
                buttons: [
                    {
                        id: "CallToAction",
                        text: "",
                        reportClick: () => console.log("[EngineWrapper/PlayerMessagingServiceFacet] reportClick()"),
                    },
                ],
            },
            {
                style: 0,
                gamedrop: null,
                buttons: [
                    {
                        action: 2,
                        link: "/marketplace?productId=61c7a786-d7ad-49e0-a710-817121cd9795&origin=PlayerMessaging",
                        description: "",
                        text: "Available Now",
                        id: "CallToAction",
                        openExternalLink: "function openExternalLink() { [native code] }",
                    },
                    {
                        action: 0,
                        link: "",
                        description: "",
                        text: "Continue",
                        id: "Dismiss",
                        openExternalLink: "function openExternalLink() { [native code] }",
                    },
                ],
                images: [
                    {
                        isLoaded: true,
                        imageSize: null,
                        nonAnimatedUrl: "id://813",
                        animatedUrl: "id://813",
                        id: "Primary",
                    },
                ],
                body: "Level up your Minecraft worlds with Actions & Stuff! Enjoy custom player and mob animations, 3D item models, retextured armor, visual effects, and more. The latest 1.5 update adds 60 new blocks, expressions, and new animations for happy ghasts, ghastlings, baby enderman, and so much more! You can also play with this pack for free with Marketplace Pass!",
                subtitle: "",
                header: "Actions and Stuff 1.5",
                template: "HeroImageCTA",
                surface: "MarketplaceAnnouncement",
                instanceId: "a0a89a32-2133-4968-8a20-90a21792d2c7",
                id: "a0a89a32-2133-4968-8a20-90a21792d2c7",
            },
        ],
    },
    status: 2,
    reportClick: () => console.log("[EngineWrapper/PlayerMessagingServiceFacet] reportClick.bind()"),
    reportDismiss: () => console.log("[EngineWrapper/PlayerMessagingServiceFacet] reportDismiss.bind()"),
});

