"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const express_1 = __importDefault(require("express"));
const stremio_addon_sdk_1 = require("stremio-addon-sdk");
const manifest_js_1 = require("./manifest.js");
const builder = new stremio_addon_sdk_1.addonBuilder(manifest_js_1.manifest);
builder.defineSubtitlesHandler(async (args) => {
    try {
        const response = await axios_1.default.get(`https://stremio.sosac.tv/cs/stream/${args.type}/${args.id}.json`);
        const subtitles = [];
        const used = new Set();
        for (const stream of response.data.streams ?? []) {
            for (const subtitle of stream.subtitles ?? []) {
                if (used.has(subtitle.url))
                    continue;
                used.add(subtitle.url);
                subtitles.push({
                    id: subtitle.url,
                    lang: (subtitle.lang ?? "cs").toLowerCase(),
                    url: subtitle.url
                });
            }
        }
        return {
            subtitles
        };
    }
    catch {
        return {
            subtitles: []
        };
    }
});
const app = (0, express_1.default)();
app.use("/", (0, stremio_addon_sdk_1.getRouter)(builder.getInterface()));
const PORT = Number(process.env.PORT) || 7000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
