module.exports = {
    isChatTextToSpeechEnabled: false,
    isIdle: false,
    isUITextToSpeechEnabled: false,
    read: (text) => window.speechSynthesis.speak(new SpeechSynthesisUtterance(text)),
    clear: () => console.log( "[EngineWrapper/ScreenReaderFacet] clear()" ),
};