module.exports = {
    data: {
        messages: [
            {
                id: "0",
                template: "ImageText",
                surface: "LoginAnnouncement",
                additionalProperties: [
                    { key: "header", value: "Test" },
                    { key: "body", value: "Hello World!" }
                ],
                "images": [
                    {
                        id: "Primary",
                        isLoaded: true,
                        url: "/hbui/assets/welcome_graphic-edbb3.png"
                    }
                ],
                "buttons": [
                    {
                        id: "Dismiss",
                        text: "",
                        link: "",
                        action: "dismiss",
                        reportClick: () => console.log( "[EngineWrapper/PlayerMessagingServiceFacet] reportClick()" ),
                        additionalProperties: []
                    }
                ]
            },
            {
                id: "1",
                template: "HeroImageCTA",
                surface: "LoginAnnouncement",
                additionalProperties: [
                    { key: "header", value: "Test" },
                    { key: "body", value: "Hello World!" }
                ],
                "images": [
                    {
                        id: "Primary",
                        isLoaded: true,
                        url: "/hbui/assets/welcome_graphic-edbb3.png"
                    }
                ],
                "buttons": [
                    {
                        id: "Dismiss",
                        text: "",
                        link: "",
                        action: "dismiss",
                        reportClick: () => console.log( "[EngineWrapper/PlayerMessagingServiceFacet] reportClick()" ),
                        additionalProperties: []
                    },
                    {
                        id: "CallToAction",
                        text: "",
                        link: "",
                        action: "productId",
                        reportClick: () => console.log( "[EngineWrapper/PlayerMessagingServiceFacet] reportClick()" ),
                        additionalProperties: []
                    }
                ]
            },
            {
                id: "2",
                template: "ImageThumbnailCTA",
                surface: "LoginAnnouncement",
                additionalProperties: [
                    { key: "header", value: "Test" },
                    { key: "body", value: "Hello World!" }
                ],
                "images": [
                    {
                        id: "Primary",
                        isLoaded: true,
                        url: "/hbui/assets/welcome_graphic-edbb3.png"
                    },
                    {
                        id: "Secondary",
                        isLoaded: true,
                        url: "/hbui/assets/welcome_graphic-edbb3.png"
                    }
                ],
                buttons: [
                    {
                        id: "CallToAction",
                        text: "",
                        reportClick: () => console.log( "[EngineWrapper/PlayerMessagingServiceFacet] reportClick()" )
                    }
                ]
            }
        ]
    },
    reportClick: () => console.log( "[EngineWrapper/PlayerMessagingServiceFacet] reportClick.bind()" ),
    reportDismiss: () => console.log( "[EngineWrapper/PlayerMessagingServiceFacet] reportDismiss.bind()" )
};