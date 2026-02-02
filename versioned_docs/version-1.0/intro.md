---
sidebar_position: 1
---

# Getting Started

Control **Spotify locally from VS Code** without any external APIs or internet connection.

## What is Spotify Controller?

Spotify Controller is a VS Code extension that lets you control your Spotify playback directly from Visual Studio Code. It works on both **Windows** and **macOS** using native system APIs.

### Key Features

- **🎵 Playback Controls**: Play, pause, next, and previous track controls
- **📱 Track Information**: See current song, artist, and album in the sidebar
- **💻 Cross-Platform**: Works on Windows 10/11 and macOS
- **🔒 Privacy-First**: No Spotify Web API, no OAuth, no internet required
- **⚡ Instant Response**: Uses native system media transport controls

## Quick Start

### Installation

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
3. Search for "Spotify Controller"
4. Click **Install**

Or [install directly from VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=orim12.spotify-controller).

### Requirements

#### Windows
- Windows 10/11
- Spotify desktop app running

#### macOS  
- macOS 10.12 or later
- Spotify desktop app running

## Usage

1. **Start Spotify**: Make sure the Spotify desktop app is running
2. **Open Extension**: Click on the Spotify icon in the VS Code Activity Bar
3. **Control Playback**: Use the play/pause, next, and previous buttons
4. **View Track Info**: See current song information in the sidebar

The extension will automatically detect your current track and display controls in the sidebar view.

## How It Works

### Windows
The extension uses a local .NET 6 helper that communicates with Windows' **System Media Transport Controls (SMTC)** to control Spotify and retrieve track information.

### macOS
The extension uses embedded **AppleScript** commands to communicate directly with the Spotify application.

Both implementations provide instant, local control without requiring any external services or internet connectivity.

## Next Steps

- Learn about all [Features](./tutorial-basics/features)
- Explore [Installation Details](./tutorial-basics/installation) 
- Check out [Troubleshooting](./tutorial-basics/troubleshooting) if you encounter issues
