import axios from "axios";
import express from "express";
import { addonBuilder, getRouter } from "stremio-addon-sdk";
import { manifest } from "./manifest.js";

const builder = new addonBuilder(manifest);

builder.defineSubtitlesHandler(async (args) => {

    try {

        const response = await axios.get(
            `https://stremio.sosac.tv/cs/stream/${args.type}/${args.id}.json`
        );

        const subtitles = [];
        const used = new Set<string>();

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

    } catch {

        return {
            subtitles: []
        };

    }

});

const app = express();

app.use("/", getRouter(builder.getInterface()));

const PORT = Number(process.env.PORT) || 7000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});