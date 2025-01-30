const Permissions = {
    Build: 0,
    Mine: 1,
    DoorsAndSwitches: 2,
    OpenContainers: 3,
    AttackPlayers: 4,
    AttackMobs: 5,
    OperatorCommands: 6,
    Teleport: 7,
};

module.exports = () => ({
    playerPermissionLevel: 2,
    canEditPermissions: true,
    canKickPlayer: true,
    isWorldTemplateOptionsLocked: false,
    areCheatsEnabled: true,
    playerPermissionList: [
        { abilityIndex: Permissions.Build, isEnabled: true },
        { abilityIndex: Permissions.Mine, isEnabled: true },
        { abilityIndex: Permissions.DoorsAndSwitches, isEnabled: true },
        { abilityIndex: Permissions.OpenContainers, isEnabled: true },
        { abilityIndex: Permissions.AttackPlayers, isEnabled: true },
        { abilityIndex: Permissions.AttackMobs, isEnabled: true },
        { abilityIndex: Permissions.OperatorCommands, isEnabled: true },
        { abilityIndex: Permissions.Teleport, isEnabled: true },
    ],
    setPlayerPermissionLevel: () => {},
    kickPlayer: (player) => {},
    loadPlayerPermissions: () => {},
    enableCheats: () => {},
});