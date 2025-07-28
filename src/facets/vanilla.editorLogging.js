module.exports = () => ({
    tagFilter: "",
    logLevelFilter: 8,
    messageList: [
        {
            level: 3,
            message: "Hello World!",
            timeStamp: Date.now(),
            getTagsString: () => ["Test"],
        },
    ],
    tagList: ["Test"],
    flush() {},
});
