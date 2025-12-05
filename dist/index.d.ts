export * from "./utils";
export * from "./types";
export interface PluginFile {
    code?: string;
    css?: string;
}
type ReactElementType = string | React.JSXElementConstructor<any>;
interface ReactPatchAPI {
    replaceComponent: (original: ReactElementType, replacement: ReactElementType | null) => void;
    patchComponent: (original: ReactElementType, replacement: ReactElementType | null) => void;
    removeReplacement: (original: ReactElementType) => void;
    clearReplacements: () => void;
    getReplacements: () => Map<ReactElementType, ReactElementType>;
}
export interface WebpackHelpersAPI {
    allExports: () => any[];
    wrapFilter: <T extends any>(filter: (mod: T) => boolean) => (mod: T) => boolean;
    find: <T = any>(filter: (mod: T) => boolean, tryDefault?: boolean) => T | undefined;
    findByProps: <T = any>(...props: string[]) => T | undefined;
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
    }
    var PLUGIN_ID: string;
}
export declare function getPluginList(): PluginListItem[];
export declare function getThemeList(): ThemeListItem[];
export declare function enableTheme(themeId: string): boolean;
export declare function disableTheme(themeId: string): boolean;
export declare function enablePlugin(pluginId: string): boolean;
export declare function disablePlugin(pluginId: string): boolean;
export declare function findByProps(...props: string[]): any;
//# sourceMappingURL=index.d.ts.map