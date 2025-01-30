module.exports = () => ({
    messageList: [
        {
            level: 3,
            message: "Hello World!",
            timeStamp: Date.now(),
            getTagsString: () => [ "Test" ]
        }
    ],
    tagList: [ "Test" ]
});