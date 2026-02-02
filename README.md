# Spotify Controller Documentation

This documentation site is built using [Docusaurus](https://docusaurus.io/) and provides comprehensive documentation for the **Spotify Controller VS Code Extension**.

## About Spotify Controller

Control Spotify locally from VS Code without any external APIs or internet connection. Works on Windows and macOS using native system APIs.

- **🎵 Playback Controls**: Play, pause, next, and previous track
- **📱 Track Information**: Current song, artist, and album in sidebar
- **💻 Cross-Platform**: Windows 10/11 and macOS support
- **🔒 Privacy-First**: No Spotify Web API, OAuth, or internet required
- **⚡ Instant Response**: Uses native system media transport controls

## Links

- **Extension**: [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=orim12.spotify-controller)
- **Source Code**: [GitHub Repository](https://github.com/Orim12/spotify-extension)
- **Documentation**: [Live Site](https://orim12.github.io/spotify-extension/)

## Development

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
