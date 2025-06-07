# Email Input Component

A modern, interactive email input component built with Next.js, React, and TypeScript. This component provides an intuitive interface for selecting and managing email recipients with features like autocomplete, email validation, and a sleek dropdown interface.

## 🌟 Features

- **Smart Autocomplete**: Real-time email suggestions with debounced search
- **Email Validation**: Visual indicators for valid/invalid email addresses
- **Multi-Selection**: Add multiple email recipients with easy management
- **Keyboard Navigation**: Tab and Enter key support for quick selection
- **Visual Feedback**: Loading states and hover effects
- **Responsive Design**: Works seamlessly across different screen sizes
- **Remove Recipients**: Click to remove individual email addresses
- **Error Handling**: Clear visual cues for invalid email formats

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd dt-final-assessment-email-input
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🎯 Usage

### Basic Implementation

The email input component is ready to use out of the box:

```tsx
import SearchBar from "@/components/searchbar";

export default function MyPage() {
  return (
    <div>
      <SearchBar />
    </div>
  );
}
```

### Keyboard Shortcuts

- **Tab**: Select the first suggested email or add current input as email
- **Enter**: Select the first suggested email or add current input as email
- **Type**: Start typing to see autocomplete suggestions

### Visual Indicators

- **Valid emails**: Display with gray background and removable 'X' button
- **Invalid emails**: Display with red background and warning indicator (!)
- **Hover effects**: Interactive feedback on all clickable elements

## 🏗️ Project Structure

```
dt-final-assessment-email-input/
├── app/
│   ├── page.tsx          # Main page component
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   └── searchbar.tsx     # Email input component
├── data/
│   └── emails.ts         # Mock email data (1000+ emails)
├── public/
│   └── loading.gif       # Loading animation
└── package.json          # Dependencies and scripts
```

## 🛠️ Technologies Used

- **[Next.js 15.3.3](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library with latest features
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety and developer experience
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[@uidotdev/usehooks](https://usehooks.com/)** - Custom React hooks (useDebounce)
- **ESLint** - Code linting and formatting

## 🎨 Component Features

### SearchBar Component

The main component that handles:

- Email input and validation
- Autocomplete functionality
- Keyboard event handling
- State management for selected emails

### Emails Component

The dropdown component that provides:

- Filtered email suggestions
- Loading states with animation
- Click-to-select functionality
- Smooth user interactions

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🎯 Key Implementation Details

### Debounced Search

Uses a 500ms debounce to optimize search performance and reduce unnecessary API calls.

### Email Validation

Implements regex-based email validation with visual feedback:

```typescript
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
```

### Responsive Design

Built with Tailwind CSS for mobile-first responsive design with hover states and smooth transitions.

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy with zero configuration

### Other Deployment Options

This app can be deployed on any platform that supports Next.js:

- Netlify
- Railway
- AWS
- Google Cloud Platform
- Azure

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🔗 Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [React Documentation](https://react.dev/) - Learn about React
- [Tailwind CSS](https://tailwindcss.com/docs) - Learn about utility-first CSS
- [TypeScript](https://www.typescriptlang.org/docs/) - Learn about TypeScript
