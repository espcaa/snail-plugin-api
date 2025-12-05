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
//# sourceMappingURL=types.d.ts.map