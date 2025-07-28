module.exports = ({ container, index } = {}) => {
    switch (container) {
        case 28: {
            switch (index) {
                case 0: return {
                    type: "item",
                    name: "Diamond Sword",
                    image: "/src/assets/items/diamond_sword.png",
                    amount: 1,
                    showName: true
                };
                case 1: return {
                    type: "item", //recipe, armor
                    name: "Apple",
                    image: "/src/assets/items/apple.png",
                    amount: 5,
                    showName: true
                };
                
                default: return {};
            };
        };
        case 7:
        case 58: {
            switch (index) {
                case 13: return {
                    type: "item",
                    name: "Diamond",
                    image: "/src/assets/items/diamond.png",
                    amount: 2,
                    showName: true
                };
                
                default: return {};
            };
        };
        default: return {};
    };
};