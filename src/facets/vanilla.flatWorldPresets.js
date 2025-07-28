module.exports = () => ({
    presets: {
        Desert: {
            layers: [
                { height: 8, material: "minecraft:sand" },
                { height: 52, material: "minecraft:sandstone" },
                { height: 3, material: "minecraft:stone" },
                { height: 1, material: "minecraft:bedrock" },
            ],
            biome: "desert",
            id: 6,
        },
        BottomlessPit: {
            layers: [
                { height: 1, material: "minecraft:grass_block" },
                { height: 3, material: "minecraft:dirt" },
                { height: 2, material: "minecraft:cobblestone" },
            ],
            biome: "plains",
            id: 5,
        },
        WaterWorld: {
            layers: [
                { height: 90, material: "minecraft:water" },
                { height: 5, material: "minecraft:gravel" },
                { height: 5, material: "minecraft:dirt" },
                { height: 5, material: "minecraft:stone" },
                { height: 64, material: "minecraft:deepslate" },
                { height: 1, material: "minecraft:bedrock" },
            ],
            biome: "deep_ocean",
            id: 2,
        },
        TunnelersDream: {
            layers: [
                { height: 1, material: "minecraft:grass_block" },
                { height: 5, material: "minecraft:dirt" },
                { height: 230, material: "minecraft:stone" },
                { height: 1, material: "minecraft:bedrock" },
            ],
            biome: "extreme_hills",
            id: 1,
        },
        ClassicFlat: {
            layers: [
                { height: 1, material: "minecraft:grass_block" },
                { height: 2, material: "minecraft:dirt" },
                { height: 1, material: "minecraft:bedrock" },
            ],
            biome: "plains",
            id: 0,
        },
        Overworld: {
            layers: [
                { height: 1, material: "minecraft:grass_block" },
                { height: 3, material: "minecraft:dirt" },
                { height: 59, material: "minecraft:stone" },
                { height: 1, material: "minecraft:bedrock" },
            ],
            biome: "plains",
            id: 3,
        },
        SnowyKingdom: {
            layers: [
                { height: 1, material: "minecraft:snow_layer" },
                { height: 1, material: "minecraft:grass_block" },
                { height: 3, material: "minecraft:dirt" },
                { height: 59, material: "minecraft:stone" },
                { height: 1, material: "minecraft:bedrock" },
            ],
            biome: "ice_plains",
            id: 4,
        },
        RedstoneReady: {
            layers: [
                { height: 116, material: "minecraft:sandstone" },
                { height: 3, material: "minecraft:stone" },
                { height: 1, material: "minecraft:bedrock" },
            ],
            biome: "desert",
            id: 7,
        },
    },
});
