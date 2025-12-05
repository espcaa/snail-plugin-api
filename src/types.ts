export interface Plugin {
  name: string;
  description: string;
  version: string;
  start(): void;
  stop(): void;
}

export interface Theme {
  name?: string;
  css?: string | string[];
  description?: string;
  version?: string;
}

export interface PluginFile {
  code?: string;
  css?: string;
}

export type ReactElementType = string | React.JSXElementConstructor<any>;

export interface ReactPatchAPI {
  replaceComponent: (
    original: ReactElementType,
    replacement: ReactElementType | null,
  ) => void;
  patchComponent: (
    original: ReactElementType,
    replacement: ReactElementType | null,
  ) => void;
  removeReplacement: (original: ReactElementType) => void;
  clearReplacements: () => void;
  getReplacements: () => Map<ReactElementType, ReactElementType>;
}

export interface WebpackHelpersAPI {
  allExports: () => any[];
  wrapFilter: <T>(filter: (mod: T) => boolean) => (mod: T) => boolean;
  find: <T = any>(
    filter: (mod: T) => boolean,
    tryDefault?: boolean,
  ) => T | undefined;
  findByProps: <T = any>(...props: string[]) => T | undefined;
  findComponent: <T = any>(
    name: string,
    all?: boolean,
    filter?: (comp: T) => boolean,
  ) => T | T[] | undefined;
}

export interface SnailPluginInstance {
  id: string;
  start?: () => void;
  stop?: () => void;
  [key: string]: any;
}

export interface PluginListItem {
  id: string;
  name: string;
  description: string;
  version: string;
  enabled: boolean;
}

export interface ThemeListItem {
  id: string;
  name?: string;
  description?: string;
  version?: string;
  enabled: boolean;
}

export interface SnailAPI {
  registerPlugin: (pluginId: string) => void;
  getPluginList: () => PluginListItem[];
  getThemeList: () => ThemeListItem[];
  enableTheme: (themeId: string) => boolean;
  disableTheme: (themeId: string) => boolean;
  enablePlugin: (pluginId: string) => boolean;
  disablePlugin: (pluginId: string) => boolean;
}

export interface PluginManifest {
  entry?: string;
  css?: string | string[];
  name?: string;
  description?: string;
  version?: string;
}

export interface ThemeManifest {
  css?: string | string[];
  name?: string;
  description?: string;
  version?: string;
}

declare global {
  interface Window {
    Snail: SnailAPI;
    webpackHelpers: WebpackHelpersAPI;
    reactPatchAPI: ReactPatchAPI;
    SnailPlugins: Record<string, Plugin>;
  }

  var PLUGIN_ID: string;
}
