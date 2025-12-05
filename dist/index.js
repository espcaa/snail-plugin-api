"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPluginList = getPluginList;
exports.getThemeList = getThemeList;
exports.enableTheme = enableTheme;
exports.disableTheme = disableTheme;
exports.enablePlugin = enablePlugin;
exports.disablePlugin = disablePlugin;
exports.findByProps = findByProps;
__exportStar(require("./utils"), exports);
__exportStar(require("./types"), exports);
function getPluginList() {
    return window.Snail.getPluginList();
}
function getThemeList() {
    return window.Snail.getThemeList();
}
function enableTheme(themeId) {
    return window.Snail.enableTheme(themeId);
}
function disableTheme(themeId) {
    return window.Snail.disableTheme(themeId);
}
function enablePlugin(pluginId) {
    return window.Snail.enablePlugin(pluginId);
}
function disablePlugin(pluginId) {
    return window.Snail.disablePlugin(pluginId);
}
function findByProps(...props) {
    return window.webpackHelpers.findByProps(...props);
}
//# sourceMappingURL=index.js.map