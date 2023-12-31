module.exports = {
    networkDetails: {
        name: "Test External server",
        imagePath: "",
        ping: "12",
        pingStatus: 3,
        playerCount: 1,
        capacity: 100,
        newsTitle: "",
        newsDescription: "",
        type: 1,
        activities: [],
        address: "play.test.com",
        port: 19123,
        id: "external-id-1"
    },
    networkDetails1: {
        name: "Test Featured Server",
        ping: "12",
        imagePath: "/hbui/assets/10_3_ratio-16d67.png",
        pingStatus: 3,
        playerCount: 1,
        capacity: 5000,
        newsTitle: "Big news here!",
        newsDescription: "We have some big news here, we will going under maintenance the 07/07 and the server will not be available that day. Everything done that day will be discarded",
        type: 0,
        activities: [
            {
                title: "Random activity!",
                subtitle: "Subtitle",
                description: "This activity includes some random events that will happening along the day, we have event 24/7",
                imagePath: "/hbui/assets/1_1_ratio-fd8f8.png",   
            }
        ],
        address: "",
        port: 0,
        id: "id-1"
    },
    loadNetworkWorldDetails: () => {
        return {};
    },
};