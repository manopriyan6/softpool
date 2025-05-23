
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
    title: "SoftPool UI Design Kit",
    description: "A comprehensive UI design kit by SoftPool with 500+ components, 50+ templates, and 1000+ icons. Perfect for web and mobile app design projects.",
    price: 3999,
    image: "/placeholder.svg",
    category: "Design",
    featured: true,
  },
  {
    id: "2",
    title: "SoftPool Business Plan Template",
    description: "Professional business plan template by SoftPool with financial projections, market analysis, and executive summary sections.",
    price: 2499,
    image: "/placeholder.svg",
    category: "Business",
    featured: true,
  },
  {
    id: "3",
    title: "Social Media Marketing Guide",
    description: "Complete guide to social media marketing with strategies for Instagram, Facebook, Twitter, LinkedIn, and TikTok.",
    price: 1499,
    image: "/placeholder.svg",
    category: "Marketing",
    featured: true,
  },
  {
    id: "4",
    title: "E-commerce Website Template",
    description: "Fully responsive e-commerce website template with product pages, cart, and checkout functionality.",
    price: 4999,
    image: "/placeholder.svg",
    category: "Development",
    featured: false,
  },
  {
    id: "5",
    title: "Content Calendar Template",
    description: "12-month content calendar template with topic ideas, publishing schedules, and performance tracking.",
    price: 999,
    image: "/placeholder.svg",
    category: "Marketing",
    featured: false,
  },
  {
    id: "6",
    title: "Photography Lightroom Presets",
    description: "Collection of 50 professional Lightroom presets for portrait, landscape, and street photography.",
    price: 1999,
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
