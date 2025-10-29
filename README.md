# React Bill Splitter 💰

A simple and elegant React application for splitting bills among friends. Calculate individual shares with ease, including tip calculations.

## Features

- 💵 **Bill Amount Input**: Enter the total bill amount
- 💡 **Tip Calculator**: Automatically calculate tips based on percentage
- 👥 **Multiple People**: Add or remove people to split the bill
- 🎯 **Real-time Calculations**: See instant updates as you change values
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- ✨ **Beautiful UI**: Modern gradient design with smooth interactions

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/robertpfaff/react-bill-split.git
cd react-bill-split
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open in your browser at [http://localhost:3000](http://localhost:3000)

## Usage

1. **Enter Bill Amount**: Input the total bill amount in dollars
2. **Set Tip Percentage**: Adjust the tip percentage (default is 15%)
3. **Add People**: Click "Add Person" to add more people to split the bill
4. **Customize Names**: Click on person names to edit them
5. **Remove People**: Click the ✕ button to remove a person
6. **View Results**: See the subtotal, tip amount, total, and amount per person

## Available Scripts

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## Technologies Used

- **React 18**: Modern React with hooks
- **CSS3**: Custom styling with gradients and animations
- **Create React App**: Standard React application setup

## Project Structure

```
react-bill-split/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── BillSplitter.js
│   │   └── BillSplitter.css
│   ├── App.js
│   ├── App.css
│   ├── App.test.js
│   ├── index.js
│   ├── index.css
│   └── setupTests.js
├── .gitignore
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Author

robertpfaff
