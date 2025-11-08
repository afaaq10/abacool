# Abacool 🧮

A beautiful, interactive abacus application built with React, Vite, and Tailwind CSS. Great for mental arithmetic practice, or just enjoying a classic calculating tool with a modern twist.

![Abacool](https://img.shields.io/badge/React-19.1.1-blue) ![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF) ![Tailwind](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC)

##  Features

- **Interactive Beads**: Click or touch beads to move them to the calculation bar
- **Real-time Calculation**: See your calculated value update instantly
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Smooth Animations**: Beautiful transitions and hover effects
- **13 Columns**: Support for large numbers up to trillions
- **Mobile Optimized**: Automatically adjusts to 7 columns on smaller screens
- **Reset Function**: Quick reset button to start fresh

## Screenshot

<img width="3788" height="1865" alt="image" src="https://github.com/user-attachments/assets/adab429e-4bbc-4385-99ed-5290a29f5bc9" />

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm 

### Installation

1. Clone the repository:
```bash
git clone https://github.com/afaaq10/abacool.git
cd abacool
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

##  How to Use

1. **Upper Beads (Green)**: Each represents a value of 5, 50, 500 and so on. Click to move it to the calculation bar.
2. **Lower Beads (Blue)**: Each represents a value of 1 in first column (from the extreme right and then 10 and so on). Click to move beads up to the bar.
3. **Calculation**: The total value is displayed below the abacus in real-time.
4. **Reset**: Click the reset button to clear all beads and start over.

### Example

To represent the number **23**:
- Column 1 (tens): Move 2 lower beads to the bar = 20
- Column 2 (ones): Move 3 lower beads to the bar = 3
- Total: 23

##  Tech Stack

- **React** 19.1.1 - UI framework
- **Vite** 7.1.7 - Build tool and dev server
- **Tailwind CSS** 3.4.1 - Styling
- **Lucide React** 0.553.0 - Icons

##  Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

##  Customization

The abacus features a gradient background and can be easily customized by modifying the Tailwind classes in the component:

- Background gradients: `from-slate-900 via-purple-900 to-slate-900`
- Bead colors: Upper beads (emerald), Lower beads (blue)
- Frame styling: Gray with shadow effects

## 📄 License

Copyright © 2025 Afaaq Majeed

## 👤 Author

**Afaaq Majeed**
- GitHub: [@afaaq10](https://github.com/afaaq10)

##  Contributing

Contributions, issues, and feature requests are welcome!

##  Show Your Support

Give a ⭐️ if you like this project!

---

Made with ❤️ by Afaaq Majeed
