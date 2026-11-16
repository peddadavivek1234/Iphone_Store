
const products = [
  {
    id: 1,
    name: "iPhone 11",
    category: "Standard",
    subtitle: "Powerful performance and beautiful design.",
    price: 29900,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800",
    tag: "Classic"
  },
  {
    id: 2,
    name: "iPhone 11 Pro",
    category: "Pro",
    subtitle: "Pro performance in a compact design.",
    price: 34900,
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800",
    tag: "Pro"
  },
  {
    id: 3,
    name: "iPhone 11 Pro Max",
    category: "Pro Max",
    subtitle: "A bigger Pro experience.",
    price: 39900,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800",
    tag: "Pro Max"
  },
  {
    id: 4,
    name: "iPhone SE (2nd Generation)",
    category: "SE Series",
    subtitle: "Compact design with powerful performance.",
    price: 19900,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
    tag: "SE Series"
  },
  {
    id: 5,
    name: "iPhone 12",
    category: "Standard",
    subtitle: "Beautiful design and powerful performance.",
    price: 32900,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800",
    tag: "Classic"
  },
  {
    id: 6,
    name: "iPhone 12 mini",
    category: "Mini",
    subtitle: "Big features in a compact size.",
    price: 29900,
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800",
    tag: "Mini"
  },
  {
    id: 7,
    name: "iPhone 12 Pro",
    category: "Pro",
    subtitle: "Advanced camera and Pro performance.",
    price: 42900,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800",
    tag: "Pro"
  },
  {
    id: 8,
    name: "iPhone 12 Pro Max",
    category: "Pro Max",
    subtitle: "A powerful experience with a large display.",
    price: 47900,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
    tag: "Pro Max"
  },
  {
    id: 9,
    name: "iPhone 13",
    category: "Standard",
    subtitle: "A powerful everyday iPhone.",
    price: 39900,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800",
    tag: "Popular"
  },
  {
    id: 10,
    name: "iPhone 13 mini",
    category: "Mini",
    subtitle: "Small size. Big possibilities.",
    price: 35900,
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800",
    tag: "Mini"
  },
  {
    id: 11,
    name: "iPhone 13 Pro",
    category: "Pro",
    subtitle: "Professional performance and photography.",
    price: 49900,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800",
    tag: "Pro"
  },
  {
    id: 12,
    name: "iPhone 13 Pro Max",
    category: "Pro Max",
    subtitle: "The ultimate Pro experience.",
    price: 55900,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
    tag: "Pro Max"
  },
  {
    id: 13,
    name: "iPhone SE (3rd Generation)",
    category: "SE Series",
    subtitle: "Powerful features in a familiar design.",
    price: 24900,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800",
    tag: "SE Series"
  },
  {
    id: 14,
    name: "iPhone 14",
    category: "Standard",
    subtitle: "Amazing photos and dependable performance.",
    price: 44900,
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800",
    tag: "Popular"
  },
  {
    id: 15,
    name: "iPhone 14 Plus",
    category: "Plus",
    subtitle: "A bigger display for more possibilities.",
    price: 49900,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800",
    tag: "Plus"
  },
  {
    id: 16,
    name: "iPhone 14 Pro",
    category: "Pro",
    subtitle: "Pro camera system and advanced performance.",
    price: 59900,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
    tag: "Pro"
  },
  {
    id: 17,
    name: "iPhone 14 Pro Max",
    category: "Pro Max",
    subtitle: "The ultimate large-screen Pro.",
    price: 64900,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800",
    tag: "Pro Max"
  },
  {
    id: 18,
    name: "iPhone 15",
    category: "Standard",
    subtitle: "A dynamic experience in every way.",
    price: 54900,
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800",
    tag: "Popular"
  },
  {
    id: 19,
    name: "iPhone 15 Plus",
    category: "Plus",
    subtitle: "More display. More possibilities.",
    price: 59900,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800",
    tag: "Plus"
  },
  {
    id: 20,
    name: "iPhone 15 Pro",
    category: "Pro",
    subtitle: "Titanium design and powerful performance.",
    price: 74900,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
    tag: "Pro"
  },
  {
    id: 21,
    name: "iPhone 15 Pro Max",
    category: "Pro Max",
    subtitle: "Advanced photography and Pro power.",
    price: 84900,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800",
    tag: "Pro Max"
  },
  {
    id: 22,
    name: "iPhone 16",
    category: "Standard",
    subtitle: "Amazing performance. Durable design.",
    price: 89900,
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800",
    tag: "Popular"
  },
  {
    id: 23,
    name: "iPhone 16 Plus",
    category: "Plus",
    subtitle: "More room for everything you love.",
    price: 99900,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800",
    tag: "Plus"
  },
  {
    id: 24,
    name: "iPhone 16 Pro",
    category: "Pro",
    subtitle: "Built for powerful performance.",
    price: 119900,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
    tag: "Pro"
  },
  {
    id: 25,
    name: "iPhone 16 Pro Max",
    category: "Pro Max",
    subtitle: "The ultimate iPhone experience.",
    price: 139900,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800",
    tag: "Pro Max"
  },
  {
    id: 26,
    name: "iPhone 16e",
    category: "e Series",
    subtitle: "Powerful features at a great value.",
    price: 69900,
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800",
    tag: "Value Choice"
  },
  {
    id: 27,
    name: "iPhone 17",
    category: "Standard",
    subtitle: "Powerful, durable and delightful.",
    price: 99900,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800",
    tag: "New Arrival"
  },
  {
    id: 28,
    name: "iPhone Air",
    category: "Air",
    subtitle: "Incredibly thin. Impressively powerful.",
    price: 149900,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
    tag: "Premium"
  },
  {
    id: 29,
    name: "iPhone 17 Pro",
    category: "Pro",
    subtitle: "Pro performance for demanding users.",
    price: 134900,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800",
    tag: "Pro"
  },
  {
    id: 30,
    name: "iPhone 17 Pro Max",
    category: "Pro Max",
    subtitle: "The ultimate Pro experience.",
    price: 154900,
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800",
    tag: "Best Seller"
  },
  {
    id: 31,
    name: "iPhone 17e",
    category: "e Series",
    subtitle: "Feature packed. Value focused.",
    price: 79900,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800",
    tag: "Value Choice"
  },
  {
    id: 32,
    name: "iPhone 18 Pro",
    category: "Pro",
    subtitle: "Pro power for the next generation.",
    price: 164900,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
    tag: "Latest"
  },
  {
    id: 33,
    name: "iPhone 18 Pro Max",
    category: "Pro Max",
    subtitle: "The ultimate next-generation iPhone.",
    price: 179900,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800",
    tag: "Latest"
  },
  {
    id: 34,
    name: "iPhone Duo",
    category: "Foldable",
    subtitle: "A new dimension of iPhone.",
    price: 299900,
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800",
    tag: "Latest"
  }
];

export const featuredProducts = [
  products.find((product) => product.name === "iPhone 18 Pro Max"),
  products.find((product) => product.name === "iPhone 18 Pro"),
  products.find((product) => product.name === "iPhone Air"),
  products.find((product) => product.name === "iPhone 17")
].filter(Boolean);

export default products;
