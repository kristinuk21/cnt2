# cnt2 - Custom Down Counter

A modern, responsive web-based countdown timer that displays remaining days and budget amount until a monthly reset point.

## Quick Start

### For VS Code Preview (Recommended):
```bash
# Start local HTTP server for best compatibility
python -m http.server 8000

# Then open in VS Code Simple Browser:
# http://localhost:8000/index.html
```

### For Development:
```batch
# Windows Batch
start-dev.bat

# Or PowerShell
.\start-dev.ps1
```

### For Direct Browser Use:
Open `index.html` in your browser

## Features

- Configure budget amount
- Configure one or two pay days per month (default: 10th and 25th)
- Configure income observed on next working day if pay day falls on a non-working day
- Configure pay day hour
- Configure end of working day (default: 18:00)
- Display days remaining until new budget and budget per day
- Display remaining minutes in the day until end of working day


## Project Structure

```
index.html                 # Main countdown timer (VS Code compatible)
src/
├── index.html              # AngularJS version (with local libraries)
├── standalone.html         # Vanilla JS version
├── lib/
│   ├── js/                # Local JavaScript libraries
│   │   ├── angular.min.js
│   │   └── ui-bootstrap-tpls.min.js
│   └── css/               # Local CSS libraries
│       └── bootstrap.min.css
├── css/
│   ├── main.css           # Styles for AngularJS version
│   └── standalone.css     # Styles for standalone version
├── js/
│   ├── countdown-controller.js    # AngularJS controller
│   └── countdown-standalone.js    # Vanilla JS implementation
└── assets/                # Static assets

lib/                       # Local copies of libraries for root files
start-dev.bat             # Windows batch script to start development
start-dev.ps1             # PowerShell script to start development
```

## Main Features

### `index.html` - Primary Version ⭐
- **Recommended for VS Code Preview**
- Self-contained vanilla JavaScript with inline styles
- No external dependencies required
- Real-time countdown with interactive budget slider
- Modern responsive design with animations
- Works with HTTP server: `http://localhost:8000/index.html`

## Development

### No Dependencies Required!
This project runs entirely with local files - no npm, Node.js, or build tools needed.

### Development Scripts:
- `start-dev.bat` - Opens both versions in your browser (Windows)
- `start-dev.ps1` - PowerShell version of the development starter
- Simply double-click any HTML file to open it directly

### Manual Development:
1. Open `src/index.html` in your browser for the AngularJS version
2. Open `src/standalone.html` in your browser for the vanilla JS version
3. Edit files directly and refresh browser to see changes

## VS Code Preview Setup

### Option 1: HTTP Server (Recommended) ⭐
```bash
# Start local HTTP server
python -m http.server 8000

# Open in VS Code Simple Browser:
# http://localhost:8000/index.html
```

### Option 2: Direct File Preview
- Right-click `index.html` → "Open with Live Server" (if extension installed)
- Or use VS Code's built-in Simple Browser with file:// URLs

**Why HTTP Server?** VS Code preview works best with HTTP URLs rather than file:// URLs for security and compatibility reasons.

## Server Management

The Python HTTP server serves your files locally and doesn't need to restart when you edit HTML/CSS/JS files. It serves fresh files on each request.

**To start server:**
```bash
python -m http.server 8000
```

**To stop server:**
Press `Ctrl+C` in the terminal running the server

## How it Works

The counter automatically resets monthly on the 20th at 6:00 PM. It calculates:
- Days remaining until next reset
- Budget amount remaining (proportional to time left, rounded to nearest 50)
- Precise hourly countdown for today
- Visual progress indicators with percentages
- Next reset date display

## Technical Improvements

- **Zero Dependencies**: No npm, Node.js, or build tools required
- **Local Libraries**: All JavaScript and CSS libraries included locally
- **Organized Structure**: Clean separation of source files and libraries
- **Performance Optimized**: Updates every 1 second instead of 100ms
- **Clean Code**: Separated concerns, constants management, proper error handling
- **Dual Implementation**: Both AngularJS and vanilla JavaScript versions available
- **Offline Ready**: Works completely offline with no external dependencies

## Technologies Used

### Main Version (`index.html`)
- Pure vanilla JavaScript (ES2017)
- CSS3 animations and modern styling
- Self-contained with no external dependencies
- Optimized for VS Code preview compatibility

### Source Files (`src/` directory)
- AngularJS 1.3.15 (local minified)
- UI Bootstrap for progress bars (local minified)
- Bootstrap 3.1.1 CSS framework (local minified)
- Custom CSS for enhanced styling

### Development Tools
- **HTTP Server**: `python -m http.server 8000` for VS Code preview
- Simple batch/PowerShell scripts for easy startup
- Direct file editing with browser refresh
- No complex build processes or dependencies

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers with responsive design
- Progressive enhancement for accessibility
- **VS Code Preview**: Use HTTP server with `http://localhost:8000/index.html`

## License

MIT License - see the LICENSE file for details.
