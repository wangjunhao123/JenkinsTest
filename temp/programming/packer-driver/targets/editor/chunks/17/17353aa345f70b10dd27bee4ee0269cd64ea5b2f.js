System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, GameDef, plalform_config, _crd, SDKType, EDeviceType, ComponentType, GamePlatform_002_Enum, GamePlatform_Enum, SwitchConfigState;

  _export({
    default: void 0,
    plalform_config: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "363fbbrgXZKt4ZmGBIrpPjz", "GameDef", undefined);

      _export("SDKType", SDKType = /*#__PURE__*/function (SDKType) {
        SDKType["GMSDK"] = "gmSdk";
        SDKType["P800"] = "p800";
        SDKType["H5"] = "H5";
        return SDKType;
      }({}));

      _export("EDeviceType", EDeviceType = /*#__PURE__*/function (EDeviceType) {
        EDeviceType[EDeviceType["Web"] = 0] = "Web";
        EDeviceType[EDeviceType["Android"] = 1] = "Android";
        EDeviceType[EDeviceType["Ios"] = 2] = "Ios";
        return EDeviceType;
      }({}));
      /**组件枚举 */


      _export("ComponentType", ComponentType = /*#__PURE__*/function (ComponentType) {
        ComponentType[ComponentType["Sprite"] = 0] = "Sprite";
        ComponentType[ComponentType["Spine"] = 1] = "Spine";
        ComponentType[ComponentType["DragonBones"] = 2] = "DragonBones";
        return ComponentType;
      }({}));

      _export("GamePlatform_002_Enum", GamePlatform_002_Enum = /*#__PURE__*/function (GamePlatform_002_Enum) {
        GamePlatform_002_Enum[GamePlatform_002_Enum["standAlone"] = 1] = "standAlone";
        GamePlatform_002_Enum[GamePlatform_002_Enum["andoird"] = 2] = "andoird";
        GamePlatform_002_Enum[GamePlatform_002_Enum["wx"] = 3] = "wx";
        GamePlatform_002_Enum[GamePlatform_002_Enum["p8_h5"] = 4] = "p8_h5";
        GamePlatform_002_Enum[GamePlatform_002_Enum["zong_you_h5"] = 5] = "zong_you_h5";
        GamePlatform_002_Enum[GamePlatform_002_Enum["zong_you_android"] = 6] = "zong_you_android";
        GamePlatform_002_Enum[GamePlatform_002_Enum["tt"] = 7] = "tt";
        GamePlatform_002_Enum[GamePlatform_002_Enum["qq"] = 8] = "qq";
        GamePlatform_002_Enum[GamePlatform_002_Enum["p8_h5_ios"] = 9] = "p8_h5_ios";
        GamePlatform_002_Enum[GamePlatform_002_Enum["android_tt"] = 10] = "android_tt";
        GamePlatform_002_Enum[GamePlatform_002_Enum["p8_ios"] = 11] = "p8_ios";
        return GamePlatform_002_Enum;
      }({}));

      _export("GamePlatform_Enum", GamePlatform_Enum = /*#__PURE__*/function (GamePlatform_Enum) {
        GamePlatform_Enum[GamePlatform_Enum["DEBUG_H5"] = 0] = "DEBUG_H5";
        GamePlatform_Enum[GamePlatform_Enum["YIWANG_WX"] = 1] = "YIWANG_WX";
        GamePlatform_Enum[GamePlatform_Enum["YIWANG_H5"] = 2] = "YIWANG_H5";
        GamePlatform_Enum[GamePlatform_Enum["YONGYE_H5_1"] = 3] = "YONGYE_H5_1";
        GamePlatform_Enum[GamePlatform_Enum["YONGYE_H5_2"] = 4] = "YONGYE_H5_2";
        GamePlatform_Enum[GamePlatform_Enum["YONGYE_WX"] = 5] = "YONGYE_WX";
        GamePlatform_Enum[GamePlatform_Enum["YONGYE_P8H5"] = 7] = "YONGYE_P8H5";
        GamePlatform_Enum[GamePlatform_Enum["YONGYE_tt_androidxxx"] = 8] = "YONGYE_tt_androidxxx";
        GamePlatform_Enum[GamePlatform_Enum["IOS"] = 9] = "IOS";
        GamePlatform_Enum[GamePlatform_Enum["TANXIAN_WX"] = 10] = "TANXIAN_WX";
        GamePlatform_Enum[GamePlatform_Enum["YONGYE_tt_andoird"] = 11] = "YONGYE_tt_andoird";
        GamePlatform_Enum[GamePlatform_Enum["TANXIAN_tt_android"] = 12] = "TANXIAN_tt_android";
        GamePlatform_Enum[GamePlatform_Enum["Mother_bag_android"] = 13] = "Mother_bag_android";
        return GamePlatform_Enum;
      }({}));
      /** 后台开关配置 */


      /** 后台开关配置状态 */
      _export("SwitchConfigState", SwitchConfigState = /*#__PURE__*/function (SwitchConfigState) {
        SwitchConfigState["Open"] = "1";
        SwitchConfigState["Close"] = "0";
        return SwitchConfigState;
      }({}));

      _export("default", GameDef = class GameDef {});

      _export("plalform_config", plalform_config = class plalform_config {
        static init() {}

      });

      plalform_config.version = `2.0.0`;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=17353aa345f70b10dd27bee4ee0269cd64ea5b2f.js.map