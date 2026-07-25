# Optimal Sosac Subtitles

A lightweight Stremio Subtitle Addon that restores subtitles for content provided by the SosacTV2 addon.

The addon retrieves subtitle URLs directly from SosacTV2 and exposes them through Stremio's official Subtitle API.

## Features

- ✅ Works with SosacTV2
- ✅ Automatic subtitle detection
- ✅ Supports movies and TV series
- ✅ Supports all subtitle languages returned by SosacTV2 (CZ, SK, EN, ...)
- ✅ Lightweight and fast
- ✅ Deployed on Railway
- ✅ No manual SRT download required

## Why?

Some users experience an issue where subtitles included in the SosacTV2 stream response are not available inside Stremio.

This addon solves the problem by implementing Stremio's `subtitles` resource and returning subtitle tracks through the official Subtitle API.

## Installation

Open Stremio and install the addon using the following URL:

```
https://YOUR-RAILWAY-DOMAIN/manifest.json
```

Replace `YOUR-RAILWAY-DOMAIN` with your deployed Railway URL.

You can use a URL from the [RailWay](https://railway.com/) website. For example, the URL I use (which you can also use) is:
```
https://stremio-sosac-subtitles-production.up.railway.app/manifest.json
```

## How it works

```
Stremio
      │
      ▼
Subtitle request
      │
      ▼
Optimal Sosac Subtitles
      │
      ▼
SosacTV2 Stream API
      │
      ▼
Subtitle URL
      │
      ▼
Stremio Player
```

The addon:

1. Receives a subtitle request from Stremio.
2. Requests stream information from SosacTV2.
3. Extracts subtitle URLs.
4. Returns them through Stremio's Subtitle API.

## Technology

- TypeScript
- Node.js
- Express
- Axios
- Stremio Addon SDK
- Railway

## Development

Install dependencies:

```bash
pnpm install
```

Run locally:

```bash
pnpm dev
```

Build:

```bash
pnpm build
```

Run production build:

```bash
pnpm start
```

## Project Structure

```
src/
 ├── index.ts
 └── manifest.ts

public/

package.json
tsconfig.json
README.md
```

## License

MIT License

## Disclaimer

This project is an unofficial Stremio addon.

It does not host, modify or distribute any video or subtitle content.

All subtitle data is obtained directly from the SosacTV2 addon.