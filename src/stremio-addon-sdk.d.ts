declare module "stremio-addon-sdk" {
    export interface AddonBuilder {
        defineStreamHandler(handler: (args: any) => Promise<any> | any): void;
        defineSubtitlesHandler(
            handler: (args: any) => Promise<any> | any,
        ): void;
        getInterface(): any;
    }

    export class addonBuilder implements AddonBuilder {
        constructor(manifest: any);
        defineStreamHandler(handler: (args: any) => Promise<any> | any): void;
        defineSubtitlesHandler(
            handler: (args: any) => Promise<any> | any,
        ): void;
        getInterface(): any;
    }

    export function serveHTTP(interfaceObject: any, options?: any): void;
    export function getRouter(interfaceObject: any): any;
}
