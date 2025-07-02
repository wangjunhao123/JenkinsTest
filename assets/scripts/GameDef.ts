import { ANDROID, BUILD, DEBUG, NATIVE, WECHAT } from 'cc/env';
import DBRecord from '../frameworks/tool/DBRecord';

export enum SDKType {
    GMSDK = 'gmSdk', //h5走暂时走这个？
    P800 = 'p800',
    H5 = 'H5' // yy 新增  h5
}

export enum EDeviceType {
    Web,
    Android,
    Ios
}

/**组件枚举 */
export enum ComponentType {
    Sprite,
    Spine,
    DragonBones
}

export enum GamePlatform_002_Enum { //登录方式相关
    standAlone = 1, // 直连
    andoird = 2, //android 登录方式    sdk 返回再 连接
    wx = 3, //wx同上
    p8_h5 = 4, //p8 h5
    zong_you_h5 = 5, //zongyou h5
    zong_you_android = 6, //zongyou android
    tt = 7, //头条系列
    qq = 8, //手q
    p8_h5_ios = 9, //p8 h5 --新的接入方式
    android_tt = 10, //andrid 头条。
    p8_ios = 11
}
export enum GamePlatform_Enum { //区分平台
    DEBUG_H5 = 0, //DEBUG
    YIWANG_WX = 1, //
    YIWANG_H5 = 2, //
    YONGYE_H5_1 = 3, //
    YONGYE_H5_2 = 4, //
    YONGYE_WX = 5, //
    YONGYE_P8H5 = 7, //
    YONGYE_tt_androidxxx = 8, //
    IOS = 9, //原生ios
    TANXIAN_WX = 10, //探险 - wx
    YONGYE_tt_andoird = 11, //
    TANXIAN_tt_android = 12, //
    Mother_bag_android = 13 //
}

/** 后台开关配置 */
export type SwitchConfig = {
    /** 兑换码入口开关 */
    cdkeySwitch: string;
    /**社区入口开关 */
    communitySwitch: string;
    /**分享入口开关 */
    shareSwitch: string;
    /**订阅入口开关 */
    subscribeSwitch: string;
    /**社区配置 */
    list: any;
};

/** 后台开关配置状态 */
export enum SwitchConfigState {
    /** 开启 */
    Open = '1',
    /** 关闭 */
    Close = '0'
}

export default class GameDef {
   
}

export class plalform_config {
    public static version = `2.0.0`;

   

    public static init() {
       
    }
}
