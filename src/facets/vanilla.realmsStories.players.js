const { RealmPlayerRoleEnum } = require( "../types.js" );
module.exports = () => ({
    players: [
        {
            gamerTag: "xKingDark",
            xuid: "0",
            gamerIcon: "/src/assets/mcpreview.png",
            isOnline: true,
            role: RealmPlayerRoleEnum.OWNER,
            fetchProfileStatus: 0
        },
        {
            gamerTag: "xKingDark",
            xuid: "0",
            gamerIcon: "/src/assets/mcpreview.png",
            isOnline: true,
            role: RealmPlayerRoleEnum.OPERATOR,
            fetchProfileStatus: 0
        },
        {
            gamerTag: "xKingDark",
            xuid: "0",
            gamerIcon: "/src/assets/mcpreview.png",
            isOnline: true,
            role: RealmPlayerRoleEnum.MEMBER,
            fetchProfileStatus: 0
        },
        {
            gamerTag: "xKingDark",
            xuid: "0",
            gamerIcon: "/src/assets/mcpreview.png",
            isOnline: true,
            role: RealmPlayerRoleEnum.VISITOR,
            fetchProfileStatus: 0
        },
        {
            gamerTag: "xKingDark",
            xuid: "0",
            gamerIcon: "/src/assets/mcpreview.png",
            isOnline: true,
            role: RealmPlayerRoleEnum.NONMEMBER,
            fetchProfileStatus: 0
        }
    ]
});