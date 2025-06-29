# 🛒 Modern E-commerce Store

A full-featured e-commerce application built with Next.js 15, featuring product browsing, filtering, search functionality, and responsive design.

## 🌐 Live Demo

[View Live Application](https://ecommerce-a3jr74q0w-midestics-projects.vercel.app/)

## ✨ Features

- Product Catalog - Browse a comprehensive collection of products from various categories
- Advanced Filtering - Filter products by category, price range, and search terms
- Product Details - Detailed product pages with descriptions, images, and pricing
- Responsive Design - Fully responsive layout optimized for desktop, tablet, and mobile devices
- Real-time Search - Dynamic search functionality with instant results
- Modern UI - Clean and intuitive user interface with smooth animations
- Fast Loading - Optimized performance with Next.js server-side rendering
- Error Handling - Robust error handling and loading states

## 🛠️ Tech Stack

- Framework: [Next.js 15](https://nextjs.org/) with App Router
- Language: TypeScript
- Styling: Tailwind CSS
- Data Source: Fake Store API
- Deployment: Vercel
- State Management: React Hooks (useState, useEffect)
- Navigation: Next.js Navigation API

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd ecommerce-store
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser
Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── ProductsCard.tsx
│   │   ├── SidebarFilter.tsx
│   │   └── HomeContent.tsx
│   ├── product/
│   │   └── [id]/
│   │       ├── page.tsx
│   │       └── ProductClient.tsx
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── public/
├── next.config.js
├── tailwind.config.js
└── package.json
```

## 🎯 Key Components

### Home Page
- Product grid layout with responsive design
- Integrated search and filter functionality
- Loading states and error handling

### Product Detail Page
- Dynamic routing for individual products
- Comprehensive product information display
- Server-side rendering for SEO optimization

### Filter System
- Category-based filtering
- Price range filtering
- Real-time search integration

### Header Component
- Search functionality
- Navigation elements
- Responsive mobile menu

## 🔧 API Integration

The application integrates with the [Fake Store API](https://fakestoreapi.com/) to fetch:
- Product listings
- Individual product details
- Category information

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- Desktop: Full sidebar and grid layout
- Tablet: Adaptive grid system
- Mobile: Collapsed sidebar, optimized touch interface

## 🚀 Deployment

The application is deployed on Vercel with automatic deployments from the main branch.

### Deploy Your Own

1. Fork this repository
2. Import to Vercel
3. Deploy with zero configuration

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/your-repo-name)

## 🎨 Styling

- Tailwind CSS for utility-first styling
- Custom components with consistent design system
- Responsive breakpoints for all device sizes
- Hover effects and smooth transitions

## 📊 Performance Features

- Server-side rendering for faster initial loads
- Image optimization with Next.js Image component
- Code splitting for reduced bundle sizes
- Caching strategies for API calls

## 🔄 State Management

- React hooks for local component state
- URL parameters for filter persistence
- Optimistic UI updates for better UX

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Fake Store API](https://fakestoreapi.com/) for providing the product data
- [Next.js](https://nextjs.org/) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vercel](https://vercel.com/) for seamless deployment

## 📧 Contact

For any questions or suggestions, feel free to reach out:

- Project Link: [https://ecommerce-a3jr74q0w-midestics-projects.vercel.app/](https://ecommerce-a3jr74q0w-midestics-projects.vercel.app/)
- Email: badmususman50@gmail.com

---

⭐ Star this repo if you found it helpful!
