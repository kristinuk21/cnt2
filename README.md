
# Budget Calculator

A beautifully designed budget calculator that determines your daily spending limit in Romanian Leu (RON) based on working days between the 10th and 25th of the next month.

## Features

- **Modern Design**: Beautiful gradient interface with glassmorphism effects
- **Budget Input**: Set your total budget in RON with real-time validation
- **Local Storage**: Automatically saves and restores your budget input between sessions
- **Smart Date Calculation**: Automatically calculates working days between 10th and 25th of next month (excludes weekends)
- **Progress Tracking**: Visual progress bar showing current position in the budget cycle (10th to 25th)
- **Comprehensive Day Breakdown**: Shows working days, weekends, and total days in the calculation period
- **Real-time Calculation**: Daily budget updates automatically as you type
- **Error Handling**: Validates input and provides helpful error messages
- **Responsive Design**: Clean, modern interface that works on all devices

## Architecture & SOLID Principles

This application follows SOLID principles for maintainable, extensible code:

### Single Responsibility Principle (SRP)
- **DateCalculator**: Handles only date-related calculations
- **BudgetCalculator**: Handles only budget calculations and validation  
- **DisplayManager**: Manages only UI updates and display logic
- **StorageManager**: Manages only local storage operations
- **BudgetApp**: Coordinates between components

### Open/Closed Principle (OCP)
- Classes are open for extension but closed for modification
- New calculation methods can be added without changing existing code

### Liskov Substitution Principle (LSP)
- Components can be substituted with compatible implementations
- Interface contracts are maintained

### Interface Segregation Principle (ISP)
- Small, focused interfaces instead of large monolithic ones
- Elements object provides only needed DOM references

### Dependency Inversion Principle (DIP)
- High-level modules don't depend on low-level modules
- Dependencies are injected rather than created internally

## Quick Start

1. Open `index.html` in your browser
2. Enter your total budget
3. View your daily budget instantly calculated for working days (10th-25th of next month)

## File Structure

```
cnt3/
├── index.html    # Complete calculator with SOLID architecture
├── README.md     # Project info and architecture details
└── .gitignore    # Ignore rules
```

## Usage

Enter your total budget in RON in the input field. The calculator will:
1. Automatically calculate working days between the 10th and 25th of next month
2. Exclude weekends from the calculation
3. Display your daily spending limit in RON in real-time
4. Show a detailed breakdown of working days, weekends, and total days in the period
5. Show helpful information about the calculation period
6. **Automatically save your budget** - your input will be remembered when you return
7. Show the next working day that matches the criteria
8. **Display a progress bar** showing your current position in the budget cycle

### Progress Bar Features:
- **Visual Progress**: Shows how far you are between budget cycle milestones (10th and 25th)
- **Smart Calculation**: Automatically determines last and next criteria dates
- **Real-time Updates**: Progress updates based on current date
- **Detailed Info**: Shows exact dates and day counts
- **Three Scenarios**:
  - Before 10th: Progress from 25th of previous month to 10th of current month
  - 10th-25th: Progress from 10th to 25th of current month  
  - After 25th: Progress from 25th of current month to 10th of next month

### Local Storage Features:
- **Automatic Save**: Budget is saved as you type
- **Persistent Data**: Your budget persists between browser sessions
- **Clear Option**: Use the "Clear Saved Budget" button to reset stored data
- **Visual Feedback**: Green checkmark confirms when budget is saved

## Technical Details

- **Currency**: Uses Romanian Leu (RON) for all calculations and display
- **Working Days**: Only Monday-Friday are counted
- **Date Range**: Always 10th to 25th of the following month
- **Calculation**: Total Budget (RON) ÷ Working Days = Daily Budget (RON)
- **Validation**: Ensures positive numbers and handles edge cases

## Browser Compatibility

Works in all modern browsers (ES6+ required for class syntax).

## License

MIT License
