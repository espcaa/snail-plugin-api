import type { Plugin } from "./types";

export function registerPlugin(plugin: Plugin) {
  if (!window.SnailPlugins) window.SnailPlugins = {};
  window.SnailPlugins[PLUGIN_ID] = plugin;
}

export function pluginLog(message: string) {
  console.log(`[snail][${PLUGIN_ID}] ${message}`);
}
