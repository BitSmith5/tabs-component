# Tabs Component

A modern, responsive React tabs component built with TypeScript and Vite. This component allows users to switch between different content sections without page redirects, providing a smooth and intuitive user experience.

## ✨ Features

- **Smooth Content Switching**: Switch between tabs without page redirects
- **Responsive Design**: Adapts to different screen sizes (mobile-first approach)
- **Modern UI**: Clean, modern design with smooth animations and hover effects
- **Accessibility**: Keyboard navigation and focus management
- **TypeScript Support**: Fully typed for better development experience
- **Customizable**: Easy to customize styling and content

## 🚀 Demo

The component displays a centered panel with 5 tabs (Tab 1 through Tab 5) that users can click to switch between different content sections. Each tab shows its corresponding content when activated.

## 🛠️ Technology Stack

- **React 19.1.1** - Modern React with hooks
- **TypeScript 5.8.3** - Type-safe development
- **Vite 7.1.0** - Fast build tool and dev server
- **CSS3** - Modern styling with animations and responsive design

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tabs-component
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

## 🎯 Usage

### Basic Usage

```tsx
import { Tabs } from './components/Tabs';

function App() {
  return (
    <Tabs />
  );
}
```

### Component Structure

The `Tabs` component consists of:

- **Tab Navigation**: Horizontal list of clickable tab buttons
- **Content Area**: Dynamic content that changes based on the selected tab
- **Active State**: Visual indication of the currently selected tab

### Key Features

- **State Management**: Uses React's `useState` hook to manage active tab state
- **Dynamic Content**: Content changes based on the selected tab
- **Smooth Transitions**: CSS animations for content switching
- **Responsive Layout**: Adapts to mobile and desktop screens

## 🎨 Styling

The component uses modern CSS with:

- **Flexbox Layout**: For responsive tab arrangement
- **CSS Grid**: For content organization
- **Smooth Animations**: Fade-in effects for content transitions
- **Modern Design**: Clean, professional appearance with shadows and borders
- **Hover Effects**: Interactive feedback on user interactions

### CSS Classes

- `.tabs` - Container for tab buttons
- `.tab-active` - Styling for the active tab
- `.tab-inactive` - Styling for inactive tabs
- `.tab-content` - Content area styling
- `.panel` - Main container styling

## 📱 Responsive Design

The component is fully responsive and includes:

- **Mobile-First Approach**: Optimized for mobile devices
- **Flexible Layout**: Adapts to different screen sizes
- **Touch-Friendly**: Large touch targets for mobile users
- **Readable Typography**: Appropriate font sizes for all devices

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Project Structure

```
src/
├── components/
│   └── Tabs.tsx          # Main tabs component
├── styles/
│   └── Tabs.css          # Component styles
├── App.tsx               # Main application
└── main.tsx             # Entry point
```

## 🎯 Key Implementation Details

- **State Management**: Uses `useState` to track the active tab
- **Event Handling**: `handleTabClick` function manages tab switching
- **Conditional Rendering**: Content is conditionally rendered based on active tab
- **Accessibility**: Proper button semantics and keyboard navigation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with React and TypeScript
- Styled with modern CSS
- Developed as a learning project for component development
