---
title: "zask: A Cross-platform Media Conversion Tool" 
description:  Open-source cross-platform (Linux and Windows x64) media conversion tool using the wxWidgets GUI library and FFmpeg
order: 3
layout: project.njk
---

# zask: A Cross-platform Media Conversion Tool in C++
#### [GitHub](https://github.com/judahx67/zask)

## Overview
Zask is a cross-platform media converter tool built with the WxWidgets GUI library and powered by FFmpeg. 
## Functionality

- Input/output file pickers, with output defaulting to “-converted” in the same folder
- Trimming support using `-ss` (start) and `-to` (end); accurate trim mode uses `-t` duration
- Video codecs: Copy, H.264 (`libx264`), HEVC (`libx265`), VP9 (`libvpx-vp9`, slow), AV1 (`libaom-av1`)
- Video speed presets, optional video bitrate, and threads selector
- Audio-only mode: MP3, WAV (PCM), FLAC (levels), Ogg Vorbis (q1–q6), Opus
- Live FFmpeg output in a log box; Stop button to terminate; optional debug command view

**Application UI:**

![App UI](/assets/images/projects/003/App_UI.png)
## Dependencies

- wxWidgets 3.2+ (UI framework)
- FFmpeg (media processing)
- CMake 3.16+ and a C++17 compiler
- vcpkg (for managing dependencies)

## Credits:

[WxWidgets](https://wxwidgets.org/)

[FFmpeg](https://ffmpeg.org/)
