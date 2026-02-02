---
sidebar_position: 2
---

# Installation

Install the **Spotify Controller** extension from the VS Code Marketplace.

## From VS Code Marketplace

### Method 1: VS Code Extensions View

1. Open **VS Code**
2. Press `Ctrl+Shift+X` (Windows) or `Cmd+Shift+X` (macOS) to open Extensions view
3. Search for `Spotify Controller`
4. Look for the extension by **orim12**
5. Click **Install**

### Method 2: Direct Link

Install directly from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=orim12.spotify-controller).

### Method 3: Command Line

```bash
code --install-extension orim12.spotify-controller
```

## Verify Installation

After installation, you should see:

1. **Spotify icon** in the Activity Bar (left sidebar)
2. **Spotify Controller** in the Extensions list
3. Available commands when you press `Ctrl+Shift+P` (Windows) or `Cmd+Shift+P` (macOS):
   - `Spotify: Play / Pause`
   - `Spotify: Next`
   - `Spotify: Previous`

## System Requirements

### Windows
- **OS**: Windows 10 or Windows 11
- **Spotify**: Desktop application (not web player)
- **.NET**: The extension includes a self-contained helper

### macOS
- **OS**: macOS 10.12 (Sierra) or later
- **Spotify**: Desktop application (not web player)
- **Permissions**: VS Code may request permission to control Spotify

## Next Steps

Once installed, learn about the [Features](./features) or jump to [Usage](./usage).