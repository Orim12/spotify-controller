---
sidebar_position: 4
---

# Usage Guide

Learn how to effectively use **Spotify Controller** in your daily VS Code workflow.

## Getting Started

### 1. Start Spotify
Make sure the **Spotify desktop application** is running on your system. The extension cannot control the web player.

### 2. Open the Extension
Click the **Spotify icon** in the VS Code Activity Bar (left sidebar) to open the extension panel.

### 3. View Current Track
Once Spotify is detected, you'll see:
- Current song title
- Artist name
- Album information
- Playback controls

## Playback Control Methods

### Sidebar Controls
Use the buttons in the Spotify panel:
- **▶️ / ⏸️** Play/Pause button
- **⏮️** Previous track
- **⏭️** Next track

### Command Palette
Access controls via `Ctrl+Shift+P` (Windows) or `Cmd+Shift+P` (macOS):

```
> Spotify: Play / Pause
> Spotify: Next  
> Spotify: Previous
```

## Tips & Best Practices

### Workflow Integration
- Keep the Spotify panel **pinned** for easy access
- Use Command Palette for **keyboard-only** control
- The extension works **in the background** - no need to keep the panel open

### Troubleshooting Common Issues

#### "Spotify not detected"
1. Ensure Spotify desktop app is **running**
2. Try **restarting** VS Code
3. Check if Spotify is **playing** something

#### Controls not responding
1. **Restart** Spotify application
2. **Reload** VS Code window (`Ctrl+R` / `Cmd+R`)
3. Check [platform-specific requirements](./installation)

#### Track info not updating
1. Track information updates every **few seconds**
2. **Play/pause** a track to force refresh
3. Ensure Spotify has **focus** (click on Spotify window)

## Platform-Specific Notes

### Windows
- Uses **System Media Transport Controls**
- Works with **any media playing** through SMTC
- Requires Spotify to be the **active media source**

### macOS
- Uses **AppleScript** integration
- Direct communication with **Spotify app**
- May require **accessibility permissions** on first run

## Advanced Usage

### Multiple VS Code Windows
- Extension works **independently** in each window
- All windows control the **same Spotify instance**
- Changes reflect **across all VS Code instances**

### With Remote Development
- Works with **VS Code Remote** extensions
- Spotify must be running on the **local machine**
- Controls operate on **local Spotify instance**

## Keyboard Workflow

For a completely keyboard-driven experience:

1. `Ctrl+Shift+P` / `Cmd+Shift+P` - Open Command Palette
2. Type `Spotify` - Filter to extension commands
3. Select desired action with arrow keys
4. Press `Enter` to execute

This allows full control without touching the mouse!

## Next Steps

- Learn about [Troubleshooting](./troubleshooting) common issues
- Check out [Advanced Configuration](./configuration) options
- Explore [Keyboard Shortcuts](./shortcuts) setup