module.exports = {
    reload: () => {},
    sendMessage: (messageType, message) => {
        console.log("[EngineWrapper/EditorScriptingFacet] sendMessage()", messageType, message);
        
        return true;
    },
};