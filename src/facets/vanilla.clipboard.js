module.exports = () => ({
    copyToClipboard: (text) => {
        require("electron").clipboard.writeText(text);
    },
    isClipboardCopySupported: true,
});
