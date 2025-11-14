import axios from "axios";

const STRAPI = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

// Interfaces TypeScript
interface StrapiImage {
  data?: {
    attributes?: {
      url?: string;
    };
  };
}

interface StrapiProduct {
  id: number;
  attributes: {
    name: string;
    description?: string;
    price: string;
    image?: StrapiImage;
    category?: {
      data?: {
        attributes?: {
          name?: string;
        };
      };
    };
  };
}

interface StrapiBanner {
  id: number;
  attributes: {
    title: string;
    subtitle: string;
    image?: StrapiImage;
  };
}

// =========================
// Obtener Productos
// =========================
export const fetchProducts = async () => {
  try {
    const res = await axios.get(`${STRAPI}/api/products?populate=*`);

    const items = res.data.data.map((p: StrapiProduct) => ({
      id: String(p.id),
      name: p.attributes.name,
      description: p.attributes.description || "",
      price: parseFloat(p.attributes.price),
      image: p.attributes.image?.data?.attributes?.url
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${p.attributes.image.data.attributes.url}`
        : "/images/productos/polo-classic.jpg",
      category: p.attributes.category?.data?.attributes?.name || "General",
    }));

    return items;
  } catch (error) {
    console.error("Error al obtener productos:", error);

    return [
      {
        id: "1",
        name: "Polo Clásico",
        price: 79.9,
        image: "/images/productos/polo-classic.jpg",
        category: "Ropa",
      },
      {
        id: "2",
        name: "Sudadera Negra",
        price: 149.9,
        image: "/images/productos/hoodie-black.jpg",
        category: "Ropa",
      },
    ];
  }
};

// =========================
// Obtener Banners
// =========================
export const fetchBanners = async () => {
  try {
    const res = await axios.get(`${STRAPI}/api/banners?populate=*`);

    return res.data.data.map((b: StrapiBanner) => ({
      id: String(b.id),
      title: b.attributes.title,
      subtitle: b.attributes.subtitle,
      image: b.attributes.image?.data?.attributes?.url
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${b.attributes.image.data.attributes.url}`
        : "/images/banner-1.jpg",
    }));
  } catch (error) {
    console.error("Error al obtener banners:", error);
    return [];
  }
};
