module.exports = () => ({
    fetchThirdPartyWorldsTaskState: 2,
    thirdPartyServersStatus: 0,
    thirdPartyWorlds: [
        {
            id: "id1",
            name: "Test Featured Server",
            ping: 12,
            capacity: 5000,
            playerCount: 1200,
            pingStatus: 1,
            image: "/src/assets/mcpreview.png",
            msgOfTheDay: "Welcome to the best server ever!",
            description: "This is a test description for the featured server.",
        },
    ],
});
