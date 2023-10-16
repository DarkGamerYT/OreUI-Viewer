const ScreenType = {
    TV_SCREEN_TYPE: 0,
    DESKTOP_SCREEN_TYPE: 1,
    HANDHELD_SCREEN_TYPE: 2,
    VR_SCREEN_TYPE: 3,
};

const HandheldDeviceType = { PHONE: 0, TABLET: 1 };
const InputMethod = {
    GAMEPAD: 0,
    TOUCH: 1,
    MOUSE: 2,
    MOTION: 3,
    KEYBOARD: 4,
};

const ARVRPlatform = {
    ARVR_None: 0,
    ARVR_Rift: 1,
    ARVR_Holographic: 2,
    ARVR_WindowsMR: 3,
    ARVR_PSVR: 4,
    ARVR_GearVR: 5,
    ARVR_DesktopXR: 6,
};

const Platform = {
    IOS: 0,
    GOOGLE: 1,
    AMAZON_HANDHELD: 2,
    UWP: 3,
    XBOX: 4,
    NX_HANDHELD: 5,
    PS4: 6,
    GEARVR: 7,
    WIN32: 8,
    MACOS: 9,
    AMAZON_TV: 10,
    NX_TV: 11,
    PS5: 12,
};

const Controller = {
    XBOX: 0,
    PS: 1,
    STEAM: 2,
    SWITCH: 3,
    QUEST: 4,
};

const StorageType = {
    NONE: 0,
    EXTERNAL: 1,
    APPDATA: 2,
};

const RealmPlayerRoleEnum = {
    NONMEMBER: -1,
    VISITOR: 0,
    MEMBER: 1,
    OPERATOR: 2,
    OWNER: 3,
};

module.exports = {
    ScreenType,
    HandheldDeviceType,
    InputMethod,
    ARVRPlatform,
    Platform,
    Controller,
    StorageType,
    RealmPlayerRoleEnum,
};