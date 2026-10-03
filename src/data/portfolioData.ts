export type PortfolioCategory =
  | 'Completed Portfolio'
  | 'Recently Delivered'
  | 'Ongoing & Upcoming';

export interface PortfolioProject {
  id: string;
  name: string;
  location: string;
  category: PortfolioCategory;
  badge: string;
  status?: string;
  year?: string;
  image: string;
  externalUrl?: string;

  // Specific fields for Recently Delivered & Legacy
  completedYear?: string;
  occupancyCertificate?: string;
  buildingHeight?: string;
  configuration?: string;
  constructionStart?: string;
  possessionDate?: string;

  // Simple details for project dossier
  bedrooms?: string;
  area?: string;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. COMPLETED PORTFOLIO
  // Display:
  // • Belvedere
  // • IRA Chhaya
  // • Sea Garden
  // • 36 AB
  // • Vastu
  // ─────────────────────────────────────────────────────────────
  {
    id: 'belvedere',
    name: 'Belvedere',
    location: 'Bandra West',
    category: 'Completed Portfolio',
    badge: 'Completed',
    year: '2007',
    completedYear: '2007',
    configuration: '2 & 3 BHK Luxury Residences',
    constructionStart: '2004',
    possessionDate: '2007',
    image: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1790975653/vaswani_belvedere_redesigned_sqvfmt.jpg',
  },
  {
    id: 'ira-chhaya',
    name: 'IRA Chhaya',
    location: 'Khar West',
    category: 'Completed Portfolio',
    badge: 'Completed',
    year: '2015',
    completedYear: '2015',
    configuration: '3 BHK Exclusive Residences',
    constructionStart: '2011',
    possessionDate: '2015',
    image: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1790975653/Ira_Chhaya.jpg_20261003023150_xj6tz7.jpg',
  },
  {
    id: 'sea-garden',
    name: 'Sea Garden',
    location: 'Santacruz West',
    category: 'Completed Portfolio',
    badge: 'Completed',
    year: '2016',
    completedYear: '2016',
    configuration: '2 & 3 BHK Sea View Residences',
    constructionStart: '2008',
    possessionDate: '2016',
    image: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1790975652/Sea_Garden.JPG_20261003023534_ookbaq.jpg',
  },
  {
    id: '36-ab',
    name: '36 AB',
    location: 'Bandra West',
    category: 'Completed Portfolio',
    badge: 'Completed',
    year: '2018',
    completedYear: '2018',
    configuration: '2 & 3 BHK High-Rise Residences',
    constructionStart: '2013',
    possessionDate: '2018',
    image: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1790975654/Vaswani_36_AB.png_20261003022855_om2zjx.jpg',
  },
  {
    id: 'vastu',
    name: 'Vastu',
    location: 'Sion West',
    category: 'Completed Portfolio',
    badge: 'Completed',
    year: '2021',
    completedYear: '2021',
    configuration: '3 BHK Vastu-Compliant Homes',
    constructionStart: '2010',
    possessionDate: '2021',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85',
  },

  // ─────────────────────────────────────────────────────────────
  // 2. RECENTLY DELIVERED
  // Display:
  // • Vista One
  // • Avania
  // • Bel Air
  // ─────────────────────────────────────────────────────────────
  {
    id: 'vista-one',
    name: 'Vista One',
    location: 'Kandivali West',
    category: 'Recently Delivered',
    badge: 'Recently Delivered',
    year: '2025',
    completedYear: '2025',
    occupancyCertificate: '23 April 2022',
    image: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1790975654/vista_one_vaswani_d8lkkw.jpg',
    bedrooms: '2 & 3 BHK Mastercrafted Residences',
    area: '1,100 - 1,950 Sq. Ft.',
  },
  {
    id: 'avania-delivered',
    name: 'Avania',
    location: 'Bandra West',
    category: 'Recently Delivered',
    badge: 'Recently Delivered',
    year: '2026',
    completedYear: '2026',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
    bedrooms: '2, 3 & 4 BHK High-Rise Residences',
    area: '1,400 - 2,800 Sq. Ft.',
  },
  {
    id: 'bel-air',
    name: 'Bel Air',
    location: 'Bandra West',
    category: 'Recently Delivered',
    badge: 'Recently Delivered',
    year: '2024',
    completedYear: '2024',
    buildingHeight: '14 Storeys',
    image: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1790975653/Vaswani_Bel_Air.png_20261003022620_cwxncm.jpg',
    bedrooms: '2 & 3 BHK High-Rise Residences',
    area: '1,250 - 2,200 Sq. Ft.',
  },

  // ─────────────────────────────────────────────────────────────
  // 3. ONGOING & UPCOMING
  // Display:
  // • Seascape
  // • Verano / Montclaire
  // • Viona
  // ─────────────────────────────────────────────────────────────
  {
    id: 'seascape',
    name: 'Seascape',
    location: 'Juhu',
    category: 'Ongoing & Upcoming',
    badge: 'Ongoing & Upcoming',
    externalUrl: 'https://vaswaniseascape.in',
    image: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1779550159/Make_setting_night_time_202605232058_w4cpyk.jpg',
    bedrooms: '4 & 5 BHK Coastal Sky Villas',
    area: '2,300 - 4,500 Sq. Ft.',
  },
  {
    id: 'verano-montclaire',
    name: 'Verano / Montclaire',
    location: 'Bandra West',
    category: 'Ongoing & Upcoming',
    badge: 'Ongoing & Upcoming',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    bedrooms: '3 & 4 BHK Luxury Residences',
    area: '1,800 - 3,200 Sq. Ft.',
  },
  {
    id: 'viona',
    name: 'Viona',
    location: 'Andheri',
    category: 'Ongoing & Upcoming',
    badge: 'Ongoing & Upcoming',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    bedrooms: '2 & 3 BHK Contemporary Homes',
    area: '1,200 - 2,100 Sq. Ft.',
  },
];

// Additional projects catalog for direct deep links or aliases
export const ADDITIONAL_PROJECTS: PortfolioProject[] = [
  {
    id: 'hamara-ghar',
    name: 'Hamara Ghar',
    location: 'Santacruz West',
    category: 'Completed Portfolio',
    badge: 'Completed',
    year: '2005',
    completedYear: '2005',
    configuration: '2 & 3 BHK Premium Residences',
    constructionStart: '2002',
    possessionDate: '2005',
    image: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1790975652/Hamara_Ghar.jpg_20261003023231_b71vrf.jpg',
  },
  {
    id: 'exotica',
    name: 'Exotica',
    location: 'Bandra West',
    category: 'Completed Portfolio',
    badge: 'Completed',
    year: '2012',
    completedYear: '2012',
    configuration: '3 & 4 BHK Luxury Residences',
    constructionStart: '2009',
    possessionDate: '2012',
    image: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1790975652/Exotica.png_20261003023004_ukmw81.jpg',
  },
];

export const ALL_PROJECTS = [...PORTFOLIO_PROJECTS, ...ADDITIONAL_PROJECTS];
