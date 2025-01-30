module.exports = () => ({
    load: (playerId) => {},
    unload: () => {},
    ...require("./vanilla.achievements"),
});