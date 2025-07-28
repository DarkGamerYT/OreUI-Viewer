module.exports = () => ({
    failedToFetch: false,
    templates: [
        {
            seedValue: "0",
            title: "The Nothing Seed",
            image: "/hbui/assets/welcome_graphic-edbb3.png",
        },
    ],
    refresh() {
        console.log("Refreshing seed templates...");
    },
});
