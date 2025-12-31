# PasteVault Frontend

A clean, modern frontend application for temporary paste-sharing with expiry controls.

## Overview

PasteVault Frontend provides an intuitive interface for creating and sharing temporary text pastes. The application is intentionally kept stateless, with all business rules and expiry logic enforced by the backend API.

## Features

- **Create pastes** with optional time-to-live (TTL)
- **Set view limits** with maximum view counts
- **Generate shareable links** instantly
- **View consumption tracking** - each view automatically counts
- **Auto-expiry enforcement** when paste expires or reaches view limit
- **Developer-focused UI** with clean, modern design

## Tech Stack

- **Framework:** React
- **Styling:** Tailwind CSS
- **Build Tool:** Vite

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js v18 or higher
- npm

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd pastevault-frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the frontend root:

   ```env
   VITE_BACKEND_URL=http://localhost:3000
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:5173`

## Application Behavior

### Creating a Paste

1. Enter your text content in the editor
2. Optionally set an expiry time (TTL)
3. Optionally set a maximum view count
4. Click "Create Paste" to generate a shareable link

### Viewing a Paste

- Opening a paste link automatically consumes one view
- The remaining view count is displayed (if applicable)
- Once a paste expires or reaches its view limit, it becomes permanently inaccessible
- Expired pastes display an appropriate error message

### User Experience

- **Loading states** provide feedback during API operations
- **Error handling** displays clear messages for expired or invalid pastes
- **Responsive design** works seamlessly across devices
- **Copy-to-clipboard** functionality for easy link sharing

## Backend Integration

The frontend is designed to be completely stateless and relies entirely on the backend API for all operations:

- **No local storage** of paste data
- **No client-side expiry logic** - all rules enforced by backend
- **API-driven state** ensures consistency across sessions
- **Backend responses** are the single source of truth

### API Endpoints Used

- `POST /pastes` - Create a new paste
- `GET /pastes/:id` - Retrieve a paste by ID

For detailed API documentation, see the [backend README](../backend/README.md).

## Project Structure

```
pastevault-frontend/
├── src/
│   ├── components/      # React components
│   ├── pages/           # Page components
│   ├── assets/          # Assets
│   ├── App.jsx          # Root component
│   └── main.jsx         # Application entry point
├── public/              # Static assets
├── .env                 # Environment configuration
├── index.html           # HTML template
├── package.json
├── vite.config.js       # Vite configuration
└── README.md
```

## Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_BACKEND_URL` | Backend API URL | `http://localhost:3000` |

## Building for Production

1. **Build the application**

   ```bash
   npm run build
   ```

2. **Preview the production build**

   ```bash
   npm run preview
   ```

The optimized production files will be generated in the `dist/` directory.

## Deployment

PasteVault Frontend can be deployed to any static hosting service:

- **Vercel** - Zero-config deployment
- **Netlify** - Automatic builds from Git
- **AWS S3 + CloudFront** - Traditional static hosting
- **GitHub Pages** - Free hosting for public repos

### Environment Configuration

Ensure your production environment has the `VITE_BACKEND_URL` variable set to your production backend URL.

### Example Deployment (Vercel)

```bash
vercel --prod
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Guidelines

- Follow React best practices
- Use Tailwind CSS utility classes for styling
- Ensure components are accessible (ARIA labels, semantic HTML)
- Write meaningful commit messages

## License

[Your License Here]

## Related Projects

- [PasteVault Backend](../backend/README.md) - Backend API service

## Support

For issues, questions, or contributions, please open an issue on the repository.