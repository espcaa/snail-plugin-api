export interface Plugin {
    id: string;
    name: string;
    description: string;
    version: string;
    start(): void;
    stop(): void;
}
//# sourceMappingURL=Plugin.d.ts.map