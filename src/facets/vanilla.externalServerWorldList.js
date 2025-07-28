module.exports = () => ({
    externalServerWorlds: [
        {
            id: "external-id1",
            name: "Test External Server",
            ping: 0,
            capacity: 5000,
            playerCount: 1,
            msgOfTheDay: "The best server ever!",
            image: "",
            pingStatus: 3,
            description: "",
        },
    ],
    addExternalServerWorld: () => {},
    editExternalServerWorld: () => {},
    removeExternalServerWorld: () => {},
    addedServerId: 1,
});
