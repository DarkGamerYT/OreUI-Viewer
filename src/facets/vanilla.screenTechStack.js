module.exports = () => ({
    selectTechStackForScreen: () => console.log("[EngineWrapper/VanillaScreenTechStack] selectTechStackForScreen()"),
    getTechStackForScreen(pathname) {
        return +["/play", "/edit-world"].includes(pathname);
    },
    getPreferredTechStackForScreen(pathname) {
        return 0;
    },
});

