---
sidebar_position: 3
---

# Features

Spotify Controller provides a comprehensive set of features for controlling your Spotify playback directly from VS Code.

## Sidebar View

The extension adds a **Spotify panel** to the VS Code Activity Bar with:

### Track Information Display
- **Song Title**: Currently playing track name
- **Artist**: Primary artist(s)
- **Album**: Album name and artwork
- **Real-time Updates**: Information refreshes automatically

### Playback Controls
- **Play/Pause Button**: Toggle playback state
- **Previous Track**: Skip to previous song
- **Next Track**: Skip to next song
- **Visual Feedback**: Buttons show current state

## Command Palette Integration

Access Spotify controls via Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`):

```
Spotify: Play / Pause
Spotify: Next
Spotify: Previous
```

## Cross-Platform Support

### Windows Implementation
- Uses **System Media Transport Controls (SMTC)**
- Native Windows 10/11 integration
- Instant response times
- Works with any media player (optimized for Spotify)

### macOS Implementation  
- Uses **AppleScript** for native integration
- Direct communication with Spotify app
- No additional permissions required
- Seamless macOS experience

## Privacy & Security

### No External Dependencies
- **No Spotify Web API** required
- **No OAuth** authentication needed
- **No internet connection** required
- **No data collection** or tracking

### Local Operation
- All communication happens locally
- Direct system-level integration
- Your listening data stays private
- No third-party services involved

## Performance

- **Lightweight**: Minimal impact on VS Code performance
- **Fast Response**: Instant control response
- **Efficient Polling**: Smart track information updates
- **Background Operation**: Works without interfering with coding

## Limitations

- **Desktop App Required**: Web player is not supported
- **Single Instance**: Works with one Spotify instance at a time
- **Platform Specific**: Windows and macOS only (Linux support planned)

## Upcoming Features

- Volume control
- Playlist management
- Linux support
- Keyboard shortcuts customization
- Multiple Spotify account support