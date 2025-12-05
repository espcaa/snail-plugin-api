import type { PluginListItem, ThemeListItem, ReactElementType } from "./types";

// Snail API
export const getPluginList = (): PluginListItem[] =>
  window.Snail.getPluginList();
export const getThemeList = (): ThemeListItem[] => window.Snail.getThemeList();
export const enableTheme = (themeId: string): boolean =>
  window.Snail.enableTheme(themeId);
export const disableTheme = (themeId: string): boolean =>
  window.Snail.disableTheme(themeId);
export const enablePlugin = (pluginId: string): boolean =>
  window.Snail.enablePlugin(pluginId);
export const disablePlugin = (pluginId: string): boolean =>
  window.Snail.disablePlugin(pluginId);

// Webpack Helpers
export const findByProps = (...props: string[]) =>
  window.webpackHelpers.findByProps(...props);
export const findComponent = (
  name: string,
  all = false,
  filter?: (comp: any) => boolean,
) => window.webpackHelpers.findComponent(name, all, filter);

// React Patch API
export const replaceComponent = (
  original: ReactElementType,
  replacement: ReactElementType | null,
) => window.reactPatchAPI.replaceComponent(original, replacement);

export const patchComponent = (
  original: ReactElementType,
  replacement: ReactElementType | null,
) => window.reactPatchAPI.patchComponent(original, replacement);

export const removeComponentReplacement = (original: ReactElementType) =>
  window.reactPatchAPI.removeReplacement(original);

export const clearComponentReplacements = () =>
  window.reactPatchAPI.clearReplacements();
export const getComponentReplacements = () =>
  window.reactPatchAPI.getReplacements();
