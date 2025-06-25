# Law.BD - Legal Services Platform

A modern React-based web application that connects users with verified lawyers across various legal specialties in Bangladesh. Built with React 19, Vite, and Tailwind CSS.

## 🏛️ About

Law.BD is a comprehensive legal services platform that provides users with easy access to qualified lawyers across different legal specialties. The platform features a clean, modern interface with booking management, lawyer profiles, and educational blog content.

## ✨ Features

### 🏠 Home Page
- **Hero Section**: Eye-catching banner with compelling legal service messaging
- **Lawyer Directory**: Display of verified lawyers with their specialties, experience, and fees
- **Success Metrics**: Statistics showcasing platform achievements
- **Responsive Design**: Mobile-friendly interface with modern UI

### 👨‍💼 Lawyer Management
- **Lawyer Profiles**: Detailed information including:
  - Professional photos
  - Specialties (Criminal, Family Law, Corporate, Immigration, etc.)
  - Years of experience
  - License numbers
  - Consultation fees
  - Availability schedules
- **Lawyer Details**: Individual lawyer pages with comprehensive information
- **Show/Hide Functionality**: Toggle between showing all lawyers or limited selection

### 📅 Booking System
- **My Bookings**: Personal dashboard for managing lawyer appointments
- **Interactive Charts**: Visual representation of booking data using Recharts
- **Booking Management**: Add/remove lawyers from booking list
- **Local Storage**: Persistent booking data using browser storage

### 📚 Blog Section
- **Educational Content**: React-related blog posts and tutorials
- **Q&A Format**: Common React questions and detailed answers
- **Knowledge Base**: Helpful resources for developers

### 🧭 Navigation
- **Responsive Navbar**: Mobile-friendly navigation with dropdown menu
- **Route Protection**: Error handling for invalid routes
- **Loading States**: Smooth transitions between pages

## 🛠️ Technology Stack

### Frontend
- **React 19**: Latest React with modern hooks and features
- **React Router 7**: Client-side routing with data loading
- **Vite**: Fast build tool and development server
- **Tailwind CSS 4**: Utility-first CSS framework
- **DaisyUI**: Component library for Tailwind CSS

### UI/UX Libraries
- **Lucide React**: Beautiful icons
- **React Icons**: Comprehensive icon library
- **React CountUp**: Animated number counters
- **React Intersection Observer**: Scroll-based animations
- **React Toastify**: Toast notifications

### Data Visualization
- **Recharts**: Interactive charts and graphs for booking analytics

### Development Tools
- **ESLint**: Code linting and formatting
- **TypeScript Support**: Type definitions for better development experience

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Law-BD
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── Components/          # Reusable UI components
│   ├── Footer/         # Footer component
│   ├── Hero/           # Hero banner component
│   └── Navbar/         # Navigation component
├── Pages/              # Main application pages
│   ├── Blogs/          # Blog page and components
│   ├── Bookings/       # Booking management
│   ├── ErrorPage/      # Error handling pages
│   ├── Home/           # Home page components
│   ├── Lawyers/        # Lawyer-related pages
│   └── Root/           # Root layout component
├── Routes/             # Routing configuration
├── Utility/            # Utility functions
└── assets/             # Static assets (images, icons)
```

## 🎨 Design Features

- **Modern UI**: Clean, professional design with legal industry aesthetics
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile
- **Loading States**: Smooth loading indicators and transitions
- **Error Handling**: User-friendly error pages and notifications
- **Accessibility**: Semantic HTML and keyboard navigation support

## 📊 Data Management

- **Static JSON Data**: Lawyer and blog data stored in JSON files
- **Local Storage**: Booking data persisted in browser storage
- **Data Loading**: Efficient data fetching with React Router loaders

## 🔧 Customization

The application is built with modularity in mind, making it easy to:
- Add new lawyer specialties
- Modify the booking system
- Update the blog content
- Customize the UI theme
- Extend functionality with new features

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contact

For questions or support, please contact the development team.

---

**Law.BD** - Connecting you with trusted legal professionals in Bangladesh.
