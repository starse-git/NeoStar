// Image paths for the NeoStar website
// These reference images in the public/images folder

export const images = {
  hero: {
    background: "/images/hero/hero-bg.jpg",
  },
  service: {
    background: "/images/service/service-bg.jpg",
  },
  contact: {
    background: "/images/contact/contact-bg.jpg",
  },
  logo: {
    main: "/images/logo/neostar-logo.png",
  },
} as const;

// Helper function to get image path
export const getImagePath = (path: string) => `/images/${path}`;
