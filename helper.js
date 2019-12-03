import {Dimension, pixelRatio, Platform, StatusBar} from 'react-native';


//UI设计图的宽度
const DesignWidth = 750;
//UI设计图的高度
const DesignHeight = 1334;

const width = Dimension.get('window').width;
const height = Dimension.get('window').height;


const scaleRatio = width/DesignWidth;

// 状态栏的高度
export const statusBarHeight = getStatusBarHeight();

// 系统字体的缩放比例 做字体的缩放
const FontScaleRatio = pixelRatio.getFontScale();

export function px(size){
    // 
    if (PixelRatio.get() >= 3 && Platform.Os === 'ios' && size === 1) {
        return size;
    } else{
        return scaleRatio*size;
    }
}

export const px2dp = px => PixelRatio.roundToNearestPixel(px);
export const dp2px = dp => PixelRatio.getPixelSizeForLayoutSize(dp);

/**
 * 判断是否为iphoneX
 * @returns {boolean}
 */
export function isIphoneX() {
    const X_WIDTH = 375;
    const X_HEIGHT = 812;
    return Platform.OS == 'ios' && (height == X_HEIGHT && width == X_WIDTH)
}

//状态栏的高度
export function getStatusBarHeight() {
    if (Platform.OS == 'android') return StatusBar.currentHeight;
    if (isIphoneX()) {
        return 44
    }
    return 20
}