# GMZ Computer Trading

A modern, minimalist e-commerce website for GMZ Computer Trading, specializing in office supplies and computer accessories.

## Features

- **Home Page**: Welcome landing page with company introduction
- **Products Page**: Display of available products with add to cart functionality
- **About Us**: Company information and mission
- **Contact Page**: Contact details including phone, email, and physical address
- **Shopping Cart**: Full cart management with quantity updates
- **Checkout**: Customer information form with payment options (cash on delivery or card)
- **Admin Panel**: Add new products with details, price, and optional image

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **State Management**: React Context for cart
- **Data Storage**: JSON file for products (expandable to database)

## Theme

- Baby blue background
- Minimalist and modern design
- Clean typography with Geist font

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/app/`: Next.js app router pages and API routes
- `src/components/`: Reusable React components
- `src/context/`: React context for state management
- `src/lib/`: Utility functions and types

## Admin Features

Access the admin panel at `/admin` to add new products. Products are stored in `src/lib/products.json`.

## Deployment

This project can be deployed on Vercel, Netlify, or any platform supporting Next.js.
