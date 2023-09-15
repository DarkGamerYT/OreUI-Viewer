module.exports = {
    status: 1,
    data: {
        achievementsUnlocked: 1,
        maxGamerScore: 90,
        hoursPlayed: 100,
        achievements: [
            {
                id: "0",
                name: "Placeholder Achievement",
                description: "Placeholder",
                gamerScore: 30,
                progress: 0,
                progressTarget: 0,
                isLocked: false,
                isSecret: false,
                dateUnlocked: Date.now() / 1000,
                hasReward: true,
                isRewardOwned: false,
                rewardId: "test",
                rewardName: "Test",
                rewardImage: "/hbui/assets/minecraft-texture-pack-070c0.png"
            },
            {
                id: "1",
                name: "Placeholder Achievement",
                description: "Placeholder",
                gamerScore: 30,
                progress: 0,
                progressTarget: 0,
                isLocked: true,
                isSecret: false,
                dateUnlocked: Date.now() / 1000,
                hasReward: true,
                isRewardOwned: false,
                rewardId: "test",
                rewardName: "Test",
                rewardImage: "/hbui/assets/minecraft-texture-pack-070c0.png"
            },
            {
                id: "2",
                name: "Placeholder Achievement",
                description: "Placeholder",
                gamerScore: 30,
                progress: 0.5,
                progressTarget: 16,
                isLocked: true,
                isSecret: false,
                dateUnlocked: Date.now() / 1000,
                hasReward: true,
                isRewardOwned: false,
                rewardId: "test",
                rewardName: "Test",
                rewardImage: "/hbui/assets/minecraft-texture-pack-070c0.png"
            }
        ],
        currentGamerScore: 30,
        maxAchievements: 3
    }
};