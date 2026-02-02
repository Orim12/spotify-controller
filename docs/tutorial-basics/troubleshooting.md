---
sidebar_position: 5
---

# Troubleshooting

Common issues and solutions for **Spotify Controller**.

## Installation Issues

### Extension not appearing in Activity Bar

**Problem**: Spotify icon missing from VS Code sidebar

**Solutions**:
1. **Restart VS Code** completely
2. Check **Extensions view** (`Ctrl+Shift+X`) - ensure extension is installed and enabled
3. **Right-click** Activity Bar → **Spotify Controller** should be listed
4. Try **reloading window** (`Ctrl+R` / `Cmd+R`)

### Extension installed but commands missing

**Problem**: Command Palette doesn't show Spotify commands

**Solutions**:
1. Open **Command Palette** (`Ctrl+Shift+P` / `Cmd+Shift+P`)
2. Search for `Extensions: Reload Window`
3. If still missing, **uninstall** and **reinstall** the extension

## Connection Issues

### "Spotify not detected" message

**Problem**: Extension can't find running Spotify

**Solutions**:

#### Windows
1. Ensure **Spotify desktop app** is running (not web player)
2. **Play a song** in Spotify to activate SMTC
3. Check **Windows Volume Mixer** - Spotify should appear
4. Try **restarting Spotify** as administrator
5. Verify **Windows 10/11** (older versions not supported)

#### macOS
1. Ensure **Spotify desktop app** is running
2. **Grant permissions** if macOS requests them
3. Try **clicking** on Spotify app to give it focus
4. **Restart Spotify** and try again
5. Check **System Preferences > Security & Privacy** for any blocked permissions

### Controls not responding

**Problem**: Buttons don't control Spotify playback

**Solutions**:
1. **Click once** on Spotify app window
2. **Play/pause** manually in Spotify first
3. **Restart both** VS Code and Spotify
4. Check if **another media player** is interfering

## Track Information Issues

### Track info not updating

**Problem**: Song details show old or wrong information

**Solutions**:
1. **Wait 5-10 seconds** (polling interval)
2. **Click play/pause** to force refresh
3. **Switch tracks** manually in Spotify
4. **Restart the extension** (disable → enable)

### Missing album artwork

**Problem**: No album cover displayed

**Solutions**:
1. **Album art** may not be available for all tracks
2. **Internet connection** required for artwork
3. Try **different songs** to verify functionality

## Platform-Specific Issues

### Windows

#### .NET Runtime errors

**Problem**: Helper executable fails to start

**Solutions**:
1. Extension includes **self-contained** .NET runtime
2. Try **running VS Code as administrator**
3. Check **Windows Defender** isn't blocking the helper
4. **Restart Windows** if recently updated

#### SMTC not working

**Problem**: System Media Transport Controls unavailable

**Solutions**:
1. **Update Windows** to latest version
2. **Enable Focus Assist** settings
3. Check **Windows Media Player** integration
4. Try with **different media apps** to test SMTC

### macOS

#### AppleScript permissions

**Problem**: Permission denied errors

**Solutions**:
1. **System Preferences > Security & Privacy > Privacy**
2. Add **VS Code** to **Automation** list
3. **Grant permission** for VS Code to control Spotify
4. **Restart both apps** after granting permissions

#### Script execution blocked

**Problem**: macOS blocks AppleScript execution

**Solutions**:
1. **System Preferences > Security & Privacy**
2. Click **Allow** if prompted
3. Add VS Code to **Accessibility** if needed
4. Try **right-clicking** VS Code → **Open** to override security

## Performance Issues

### High CPU usage

**Problem**: Extension using too much CPU

**Solutions**:
1. **Disable/enable** extension to reset
2. Check **VS Code Developer Tools** for errors
3. **Restart VS Code** with extension disabled, then re-enable
4. Report issue on [GitHub](https://github.com/Orim12/spotify-extension/issues)

### Slow response times

**Problem**: Commands take long time to execute

**Solutions**:
1. **Close unnecessary** VS Code extensions
2. **Restart Spotify** to clear cache
3. **Update both** VS Code and Spotify to latest versions

## Getting Help

### Reporting Issues

If problems persist:

1. **Check existing issues**: [GitHub Issues](https://github.com/Orim12/spotify-extension/issues)
2. **Create new issue** with:
   - **Operating system** and version
   - **VS Code version**
   - **Spotify version**
   - **Error messages** (if any)
   - **Steps to reproduce**

### Debug Information

To help with troubleshooting, include:

- **VS Code version**: `Help > About`
- **Extension version**: Check Extensions view
- **Console errors**: `Help > Toggle Developer Tools > Console`
- **System info**: OS version and Spotify app version

### Community Support

- **GitHub Discussions** for questions
- **VS Code Marketplace** reviews for feedback
- **Issue tracking** for bugs and feature requests