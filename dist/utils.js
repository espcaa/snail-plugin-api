"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerPlugin = registerPlugin;
exports.pluginLog = pluginLog;
function registerPlugin(plugin) {
    window.SnailPlugins[PLUGIN_ID] = plugin;
}
function pluginLog(message) {
    console.log(`[snail][${PLUGIN_ID}] ${message}`);
}
//# sourceMappingURL=utils.js.map