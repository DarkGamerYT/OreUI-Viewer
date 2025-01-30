module.exports = ({ container }) => {
    switch (container) {
        case 28: return { size: 9 };
        case 7: return { size: 54 };
        
        default: return { size: 27 };
    };
};