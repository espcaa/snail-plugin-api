export interface PluginSettingsSchema {
    [key: string]: "string" | "number" | "boolean";
}
export interface Plugin<T = any> {
    id: string;
    name: string;
    description: string;
    version: string;
    settings?: PluginSettingsSchema;
    defaultSettings?: T;
    start(settings: T): void;
    stop(): void;
}
//# sourceMappingURL=Plugin.d.ts.map