# Budget & Time Tracker

A modern, responsive web-based budget and time tracking application that helps you manage your finance4. **Customization**:
   - Switch between dark and light themes anytime
   - Choose your preferred currency
   - Adjust payday dates as needed
   - Modify work schedule settings
   - Reset to defaults anytime work schedule with real-time progress tracking.

## Features

- **Dark & Light Theme**: Automatic system theme detection with manual toggle support
- **Budget Management**: Configure monthly budget amount with intelligent daily allocation
- **Flexible Payday Schedule**: Support for one or two paydays per month (default: 10th and 25th)
- **Working Days Integration**: Option to observe income on next working day if payday falls on a non-working day
- **Time Tracking**: Configure work end time (default: 18:00) with real-time countdown
- **Progress Visualization**: 
  - Days remaining until next payday with budget per day calculation
  - Working hours progress with time remaining until end of work day
  - Visual progress bars with dynamic color coding
- **Currency Support**: Multiple currency symbols (USD, EUR, GBP, RON, CAD, AUD)
- **Responsive Design**: Works on desktop and mobile devices
- **Local Storage**: Automatic saving of all settings including theme preference
- **Zero Dependencies**: Self-contained application with no external dependencies

## Quick Start

### For VS Code Preview (Recommended):
```powershell
# Start local HTTP server using included PowerShell script
.\serve.ps1

# Then open in VS Code Simple Browser:
# http://localhost:8000
```

### Alternative Methods:
```bash
# Using Python HTTP server
python -m http.server 8000

# Using Node.js (if available)
npx http-server -p 8000
```

### Direct Browser Use:
Simply open `index.html` in your web browser.

## Project Structure

```
index.html          # Main application (48KB, self-contained)
serve.ps1           # PowerShell script to start HTTP server
README.md           # This documentation
CHANGELOG.md        # Project cleanup and development log
.eslintrc.json      # ESLint configuration (minimal)
.prettierrc.json    # Prettier configuration (minimal)
.gitignore          # Git ignore rules
.vscode/            # VS Code workspace settings
├── settings.json   # Editor configuration
└── extensions.json # Recommended extensions
```

## Application Features

### Budget Tracking
- Set monthly budget amount
- Automatic daily budget calculation based on days remaining
- Real-time budget remaining display
- Progress visualization showing "payday freshness"

### Payday Configuration
- Single payday: One payday per month on specified date
- Double payday: Two paydays per month (e.g., 10th and 25th)
- Working day adjustment: Automatically moves payday to next working day if needed
- Custom payday hour configuration

### Time Management
- Configure end of working day (hours and minutes)
- Real-time countdown to end of work day
- Working hours progress visualization
- Time remaining display in hours and minutes

### Settings Panel
- **Budget Settings**: Currency selection and budget amount input
- **Payday Schedule**: Choose between single or double payday setup
- **Time Configuration**: Set payday time and end of work day
- **Working Days**: Enable/disable working day adjustments
- **Reset Options**: Reset all settings to defaults

### Visual Design
- Clean, modern interface with progress bars
- **Dark and Light themes** with automatic system detection
- **Manual theme toggle** for user preference override
- Dynamic color coding (green for fresh budget, red for low budget)
- Responsive design that works on all screen sizes
- Tooltips for helpful information
- Professional color scheme that adapts to theme

## Technical Details

### Implementation
- **Pure JavaScript**: No frameworks or external dependencies
- **Inline CSS**: All styles contained within the HTML file for portability
- **Local Storage**: Automatic persistence of user settings
- **Real-time Updates**: Application updates every second
- **Cross-browser Compatible**: Works in all modern browsers

### File Size
- Single HTML file (~50KB) contains the entire application
- No external resources or internet connection required
- Fully offline capable

### Performance
- Lightweight and fast loading
- Minimal resource usage
- Optimized for long-running sessions

## Usage

1. **First Time Setup**:
   - Choose your preferred theme using the moon/sun button (top-right)
   - Click the settings gear icon
   - Configure your budget amount
   - Set your payday schedule (single or double)
   - Adjust working hours if needed
   - Enable working days feature if desired

2. **Daily Use**:
   - View days remaining until next payday
   - Check your daily budget allocation
   - Monitor progress through your pay cycle
   - Track remaining work hours for the day

3. **Customization**:
   - Choose your preferred currency
   - Adjust payday dates as needed
   - Modify work schedule settings
   - Reset to defaults anytime

## Browser Compatibility

- ✅ Chrome/Chromium (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Microsoft Edge
- ✅ Mobile browsers (iOS Safari, Android Chrome)

## Development

### No Build Process Required
This is a single-file application with no build tools, dependencies, or compilation steps needed.

### Local Development:
1. Edit `index.html` directly
2. Refresh browser to see changes
3. Use browser developer tools for debugging

### Testing:
- Use the included `serve.ps1` script for local HTTP server
- Test in different browsers and screen sizes
- Verify settings persistence across browser sessions

## License

MIT License - Feel free to use, modify, and distribute as needed.
