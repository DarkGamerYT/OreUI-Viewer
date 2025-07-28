module.exports = () => ({
    openLink() {
        console.log("[EngineWrapper/VanillaWebBrowserFacet] openLink()", arguments);
    },
    openLinkWithParams() {
        console.log("[EngineWrapper/VanillaWebBrowserFacet] openLinkWithParams()", arguments);
    },
});
