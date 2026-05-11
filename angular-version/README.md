# L2Prestige x15 Interlude - Angular Version

Angular 17 + TypeScript replica of the React L2Prestige gaming server website with modern UI and authentication system.

## 🚀 Features

- **Standalone Components**: Modern Angular 17 architecture
- **Authentication System**: Fake login/register with localStorage persistence
- **Form Validation**: Custom validation with error messages
- **Internationalization**: Ukrainian/Russian language support
- **Responsive Design**: Mobile-friendly with hamburger menu
- **Modern UI**: Dark theme with violet/cyan accents
- **Type Safety**: Full TypeScript implementation

## 🛠️ Tech Stack

- **Angular 17**: Latest version with standalone components
- **TypeScript**: Type-safe development
- **SCSS**: Modular styling with CSS variables
- **RxJS**: Reactive programming for state management
- **Angular Forms**: Reactive forms with validation

## 📁 Project Structure

```
src/
├── app/
│   ├── pages/
│   │   ├── home/
│   │   ├── login/
│   │   ├── register/
│   │   └── server/
│   ├── shared/
│   │   ├── header/
│   │   └── footer/
│   ├── services/
│   │   ├── auth.service.ts
│   │   └── i18n.service.ts
│   ├── app.component.ts
│   ├── app.routes.ts
│   └── app.config.ts
├── styles.scss
└── main.ts
```

## 🎨 UI Features

- **Dark Theme**: Gaming-oriented dark color scheme
- **Custom Scrollbar**: Styled to match site theme
- **Form Validation**: Real-time validation with error messages
- **User State**: Dynamic header based on authentication
- **Mobile Menu**: Responsive navigation for mobile devices
- **Loading States**: Visual feedback during async operations

## 🔐 Authentication

- **Fake API**: Simulated authentication with localStorage
- **Form Validation**: Username, email, password validation
- **Session Management**: Persistent login state across page refreshes
- **User Info Display**: Username with ellipsis for long names
- **Logout Functionality**: Clean session termination

## 🌍 Internationalization

- **Ukrainian**: Primary language (ua)
- **Russian**: Secondary language (ru)
- **Dynamic Switching**: Runtime language switching
- **Type Safety**: Full TypeScript schema for translations

## 📱 Responsive Design

- **Mobile-First**: Optimized for mobile devices
- **Hamburger Menu**: Collapsible navigation for small screens
- **Flexible Grid**: Adaptive layout system
- **Touch-Friendly**: Mobile-optimized interactions

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm start
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## 🎯 Best Practices Used

- **Standalone Components**: Modern Angular 17 approach
- **Dependency Injection**: Proper service injection
- **Reactive Forms**: Angular reactive forms with validation
- **Type Safety**: Comprehensive TypeScript usage
- **Modular Architecture**: Separated concerns and reusable components
- **Performance**: Optimized rendering and state management
