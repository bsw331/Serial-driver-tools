# Serial Driver Installer

A modern AI-style web page for installing serial drivers for microcontroller boards such as Arduino Uno, Mega2560, Nano, and similar devices.

## Features

- One-click serial port detection
- Driver type selection, including CH340, CP2102, FT232R, and PL2303
- Animated installation progress bar
- Bilingual switch support: Chinese and English
- Clean interface inspired by modern AI product design
- Single-page HTML + CSS + JavaScript implementation

## Project Structure

```text
serial-driver-installer/
├── index.html
├── styles.css
├── script.js
├── LICENSE
├── README.md
└── README.zh-CN.md
```

## Quick Start

1. Open `index.html` directly in a browser, or serve the folder with a static web server.
2. Select the detected serial port.
3. Choose the correct driver type.
4. Click "Install now" and watch the progress animation.

## Browser Notes

This demo uses browser serial API support when available. In browsers without Web Serial support, the app falls back to manual port selection.

## License

This project is released under the MIT License. See `LICENSE` for details.

## Disclaimer

This is a UI prototype and demonstration project. It is intended for learning and demonstration purposes only and does not provide actual hardware driver installation or system-level device management.
