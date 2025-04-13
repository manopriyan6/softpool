
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured: boolean;
  downloadLink?: string;
}

export const products: Product[] = [
  {
    id: "1",
    title: "Premium UI Design Kit",
    description: "A comprehensive UI design kit with 500+ components, 50+ templates, and 1000+ icons. Perfect for web and mobile app design projects.",
    price: 49.99,
    image: "/placeholder.svg",
    category: "Design",
    featured: true,
  },
  {
    id: "2",
    title: "Business Plan Template",
    description: "Professional business plan template with financial projections, market analysis, and executive summary sections.",
    price: 29.99,
    image: "/placeholder.svg",
    category: "Business",
    featured: true,
  },
  {
    id: "3",
    title: "Social Media Marketing Guide",
    description: "Complete guide to social media marketing with strategies for Instagram, Facebook, Twitter, LinkedIn, and TikTok.",
    price: 19.99,
    image: "/placeholder.svg",
    category: "Marketing",
    featured: true,
  },
  {
    id: "4",
    title: "E-commerce Website Template",
    description: "Fully responsive e-commerce website template with product pages, cart, and checkout functionality.",
    price: 59.99,
    image: "/placeholder.svg",
    category: "Development",
    featured: false,
  },
  {
    id: "5",
    title: "Content Calendar Template",
    description: "12-month content calendar template with topic ideas, publishing schedules, and performance tracking.",
    price: 14.99,
    image: "/placeholder.svg",
    category: "Marketing",
    featured: false,
  },
  {
    id: "6",
    title: "Photography Lightroom Presets",
    description: "Collection of 50 professional Lightroom presets for portrait, landscape, and street photography.",
    price: 24.99,
    image: "/placeholder.svg",
    category: "Photography",
    featured: true,
  },
];

export const categories = [
  "All",
  "Design",
  "Development",
  "Marketing",
  "Business",
  "Photography"
];
