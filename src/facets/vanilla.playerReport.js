module.exports = () => ({
    reportPlayer: () => console.log( "[EngineWrapper/PlayerReportFacet] reportPlayer()" ),
    isChatAvailable: () => true,
    decideReportReasonOptions: () => {},
    reportAreaOptions: [
        { label: "xbox.report.area.chat", value: 0 },
        { label: "xbox.report.area.skin", value: 1 },
        { label: "xbox.report.area.gameplay", value: 2 },
        { label: "xbox.report.area.ingame", value: 3 },
        { label: "xbox.report.area.nameOrGamertag", value: 4 },
        { label: "xbox.report.area.other", value: 5 }
    ],
    reportReasonOptions: [
        { label: "wantToReportThem", value: 11 },
        { label: "hateSpeech", value: 8 },
        { label: "bullying", value: 12 },
        { label: "selfHarmOrSuicide", value: 13 },
        { label: "sexuallyInappropriate", value: 14 },
        { label: "imminentHarm", value: 9 },
        { label: "unsportingBehavior", value: 4 },
        { label: "cheating", value: 1 },
        { label: "impersonation", value: 15 },
        { label: "drugsOrAlcohol", value: 16 },
        { label: "childSexualExploitationOrAbuse", value: 6 },
        { label: "terrorismOrViolentExtremism", value: 7 },
        { label: "nonConsensualIntimateImagery", value: 10 }
    ],
    reportArea: 0,
    reportReason: 0,
    reportMessage: "",
    xuid: "",
    uuid: "",
    selectedChatMessages: [],
    reportableChatMessages: [
        {
            message: "Reportable Message!",
            author: "xKingDark",
            isAuthorBeingReported: true
        },
        {
            message: "Hello!",
            author: "Random User",
            isAuthorBeingReported: false
        }
    ]
});