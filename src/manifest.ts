export const manifest = {
    id: "com.optimal.sosac.subtitles",

    version: "1.0.0",

    name: "Optimal Sosac Subtitles",

    description:
        "Provides subtitles for SosacTV2 content by exposing subtitle tracks through the official Stremio Subtitle API.",

    resources: [
        "subtitles"
    ],

    types: [
        "movie",
        "series"
    ],

    idPrefixes: [
        "sosac2_"
    ],

    catalogs: []
};