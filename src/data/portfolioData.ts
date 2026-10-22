export type PortfolioCategory =
  | 'Delivered'
  | 'Recently handed over'
  | 'Rising now';

export interface ProjectHighlight {
  title: string;
  desc: string;
  category?: string;
}

export interface ProjectSpecCategory {
  title: string;
  items: string[];
}

export interface ProjectGalleryImage {
  src: string;
  caption: string;
  category?: 'exterior' | 'interior' | 'amenity' | 'aerial';
}

export interface LocationHub {
  category: string;
  distance: string;
  places: string[];
}

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

  // Rich Landing Page Fields
  tagline?: string;
  heroSubtitle?: string;
  overview?: string[];
  architect?: string;
  structuralEngineer?: string;
  reraNumber?: string;
  landParcel?: string;
  totalResidences?: string;
  keyStats?: { label: string; value: string }[];
  highlights?: ProjectHighlight[];
  specifications?: ProjectSpecCategory[];
  gallery?: ProjectGalleryImage[];
  locationAdvantages?: LocationHub[];
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. DELIVERED
  // Display (Corrected Locations):
  // • Belvedere, Khar · 2007
  // • Ira Chhaya, Santacruz · 2015
  // • Sea Garden, Santacruz · 2016
  // • 36 AB, Bandra · 2018
  // • Vastu, Sion · 2021
  // ─────────────────────────────────────────────────────────────
  {
    id: 'belvedere',
    name: 'Belvedere',
    location: 'Khar',
    category: 'Delivered',
    badge: 'Delivered',
    year: '2007',
    completedYear: '2007',
    configuration: '2 & 3 BHK Luxury Residences',
    constructionStart: '2004',
    possessionDate: '2007',
    image: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1790975653/vaswani_belvedere_redesigned_sqvfmt.jpg',
    tagline: 'A Landmark of Understated Elegance in Khar',
    overview: [
      'Delivered ahead of schedule in 2007, Belvedere stands as an enduring testament to timeless design in Khar West. Crafted with meticulous architectural restraint, it has matured gracefully over two decades.',
    ],
  },
  {
    id: 'ira-chhaya',
    name: 'Ira Chhaya',
    location: 'Santacruz',
    category: 'Delivered',
    badge: 'Delivered',
    year: '2015',
    completedYear: '2015',
    configuration: '3 BHK Exclusive Residences',
    constructionStart: '2011',
    possessionDate: '2015',
    image: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1790975653/Ira_Chhaya.jpg_20261003023150_xj6tz7.jpg',
    tagline: 'Private Boutique Sanctuary in Santacruz',
    overview: [
      'An intimate residential address nestled within a tranquil residential enclave of Santacruz. Delivered in 2015, Ira Chhaya provides exceptional daylight, cross-ventilation, and privacy.',
    ],
  },
  {
    id: 'sea-garden',
    name: 'Sea Garden',
    location: 'Santacruz',
    category: 'Delivered',
    badge: 'Delivered',
    year: '2016',
    completedYear: '2016',
    configuration: '2 & 3 BHK Sea View Residences',
    constructionStart: '2008',
    possessionDate: '2016',
    image: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1790975652/Sea_Garden.JPG_20261003023534_ookbaq.jpg',
    tagline: 'Coastal Horizons & Breezy Living in Santacruz',
    overview: [
      'Oriented to capture natural sea breezes and sunset horizons, Sea Garden in Santacruz was delivered in 2016 with complete Vaastu harmony and high-spec construction.',
    ],
  },
  {
    id: '36-ab',
    name: '36 AB',
    location: 'Bandra',
    category: 'Delivered',
    badge: 'Delivered',
    year: '2018',
    completedYear: '2018',
    configuration: '2 & 3 BHK High-Rise Residences',
    constructionStart: '2013',
    possessionDate: '2018',
    image: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1790975654/Vaswani_36_AB.png_20261003022855_om2zjx.jpg',
    tagline: 'Sculptural Modernism in Bandra West',
    overview: [
      'Towering over Bandra, 36 AB represents contemporary urban luxury delivered with uncompromised precision in 2018.',
    ],
  },
  {
    id: 'vastu',
    name: 'Vastu',
    location: 'Sion',
    category: 'Delivered',
    badge: 'Delivered',
    year: '2021',
    completedYear: '2021',
    configuration: '3 BHK Vastu-Compliant Homes',
    constructionStart: '2010',
    possessionDate: '2021',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85',
    tagline: 'Architectural Harmony in Central Mumbai',
    overview: [
      'Delivered in 2021, Vastu brings calm geometries, expansive living zones, and serene connectivity to the cultural hub of Sion.',
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 2. RECENTLY HANDED OVER
  // Display:
  // • Vista One
  // • Avania
  // • Bel Air
  // ─────────────────────────────────────────────────────────────
  {
    id: 'vista-one',
    name: 'Vista One',
    location: 'Kandivali West, Mumbai',
    category: 'Recently handed over',
    badge: 'Recently handed over',
    year: '2025',
    completedYear: '2025',
    occupancyCertificate: '23 April 2022',
    buildingHeight: '19 Storeys',
    image: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1790975654/vista_one_vaswani_d8lkkw.jpg',
    bedrooms: '2 & 3 BHK Mastercrafted Residences',
    area: '1,100 - 1,950 Sq. Ft.',
    tagline: 'Urban Elevation & Unbroken Horizons in Kandivali West',
    heroSubtitle: 'A signature residential tower featuring full Occupancy Certificate, panoramic city vistas, and refined architectural spaces tailored for modern multi-generational families.',
    architect: 'Reza Kabul Architects',
    structuralEngineer: 'JW Consultants LLP',
    reraNumber: 'P51800008421',
    totalResidences: '68 Exclusive Homes',
    keyStats: [
      { label: 'Completion', value: '2025' },
      { label: 'Occupancy Certificate', value: 'Full OC Received' },
      { label: 'Height', value: '19 Storeys' },
      { label: 'Configurations', value: '2 & 3 BHK' },
      { label: 'Carpet Area', value: '1,100 – 1,950 Sq. Ft.' },
      { label: 'Status', value: 'Ready to Move' },
    ],
    overview: [
      'Vista One is a landmark residential tower crafted in Kandivali West that sets a benchmark in architectural precision, structural integrity, and peaceful community living.',
      'Designed with maximum cross-ventilation and generous ceiling heights, each residence enjoys uninterrupted vistas across the Western suburbs skyline. With its Full Occupancy Certificate secured, homeowners experience immediate possession without ambiguity or delay.',
      'From the double-height grand entrance lobby clad in Italian Statuario marble to the rooftop leisure promenade, every square foot at Vista One reflects the Vaswani Group’s four-decade commitment to uncompromised craftsmanship.',
    ],
    highlights: [
      {
        title: 'Full Occupancy Certificate Received',
        desc: 'All statutory compliances, approvals, and OC secured, ensuring seamless title ownership and ready move-in.',
      },
      {
        title: 'Grand Double-Height Entrance Lobby',
        desc: 'Air-conditioned arrival portal styled with Italian marble, custom brass lighting fixtures, and dedicated reception concierge.',
      },
      {
        title: 'Rooftop Horizon Sky Lounge',
        desc: 'Landscaped rooftop wellness zone featuring wooden viewing decks, yoga lawn, and evening leisure pavilions.',
      },
      {
        title: 'High-Speed Automated Elevators',
        desc: 'Equipped with regenerative braking, biometric access, and 100% generator power backup for zero downtime.',
      },
      {
        title: 'Zero Vehicle Movement on Podium',
        desc: 'Safe, pedestrian-only residential podium ensuring child-friendly courtyards and serene strolls for senior residents.',
      },
      {
        title: 'Multi-Tier Smart Security System',
        desc: '24/7 CCTV surveillance, video door phone in every residence, boom barriers, and biometric resident access.',
      },
    ],
    specifications: [
      {
        title: 'Living, Dining & Bedrooms',
        items: [
          'Imported Italian marble flooring in living and dining zones',
          'Premium engineered wooden flooring in master bedroom suite',
          'High 10’6” clear floor-to-ceiling heights maximizing daylight',
          'Full-height anodized aluminum sliding French windows with double glazing for thermal and acoustic silence',
          'Concealed copper wiring with Legrand Arteor smart modular switches',
        ],
      },
      {
        title: 'Kitchen & Utility',
        items: [
          'Designer granite countertop with Franke double-bowl stainless steel sink',
          'Piped city gas connection with auto-shutoff safety sensor',
          'Dedicated dry balcony with plumbing provision for washing machine and dryer',
          'Glazed designer ceramic tiles up to 2 feet above platform',
        ],
      },
      {
        title: 'Bathrooms & Sanitary',
        items: [
          'Grohe and Kohler concealed divertors and thermostatic showers',
          'Wall-hung European water closets with soft-close mechanisms',
          'Full-height antiskid vitrified tiles and granite vanity counter',
          'Toughened frameless glass shower cubicles in master en-suite',
        ],
      },
      {
        title: 'Structure & Sustainability',
        items: [
          'Earthquake-resistant RCC framed structure compliant with Seismic Zone IV norms',
          'Rainwater harvesting system and decentralized sewage treatment plant (STP)',
          'Solar-powered lighting for all common landscaped areas and basement driveways',
        ],
      },
    ],
    gallery: [
      {
        src: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1790975654/vista_one_vaswani_d8lkkw.jpg',
        caption: 'Vista One Exterior Architectural Tower & Podium Facade',
        category: 'exterior',
      },
      {
        src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
        caption: 'Expansive Living & Dining Suite with Panoramic City Views',
        category: 'interior',
      },
      {
        src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85',
        caption: 'Master Bedroom Suite with Engineered Wooden Flooring',
        category: 'interior',
      },
      {
        src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85',
        caption: 'Double-Height Designer Arrival Lobby & Concierge Desk',
        category: 'amenity',
      },
    ],
    locationAdvantages: [
      {
        category: 'Transit & Arterial Roads',
        distance: '3 - 8 Mins',
        places: ['Western Express Highway', 'Kandivali Railway Station', 'Metro Line 2A & 7 Station'],
      },
      {
        category: 'Leading Schools & Academia',
        distance: '5 - 10 Mins',
        places: ['Cambridge School', 'Thakur Public School', 'Ryan International School'],
      },
      {
        category: 'Healthcare & Wellness',
        distance: '4 - 12 Mins',
        places: ['Shatabdi Hospital', 'DNA Multispeciality Hospital', 'Kokilaben Dhirubhai Ambani Clinic'],
      },
      {
        category: 'Shopping & Dining',
        distance: '6 - 15 Mins',
        places: ['Growel’s 101 Mall', 'Inorbit Mall Malad', 'Centrum Square'],
      },
    ],
  },
  {
    id: 'avania-delivered',
    name: 'Avania',
    location: 'Bandra West, Mumbai',
    category: 'Recently handed over',
    badge: 'Recently handed over',
    year: '2026',
    completedYear: '2026',
    occupancyCertificate: 'Full OC Granted',
    buildingHeight: '16 Storeys',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
    bedrooms: '2, 3 & 4 BHK High-Rise Residences',
    area: '1,400 - 2,800 Sq. Ft.',
    tagline: 'Artisanal Luxury & Timeless Seclusion in Bandra West',
    heroSubtitle: 'An exclusive boutique address tucked into the quiet residential avenues of Bandra West, delivering rare privacy, generous sundecks, and bespoke architectural finishes.',
    architect: 'Talati & Partners',
    structuralEngineer: 'Sterling Engineering Consultants',
    reraNumber: 'P51800012903',
    totalResidences: '28 Handcrafted Residences',
    keyStats: [
      { label: 'Completion', value: '2026' },
      { label: 'Occupancy Certificate', value: 'Ready to Move' },
      { label: 'Address', value: 'Bandra West' },
      { label: 'Configurations', value: '2, 3 & 4 BHK' },
      { label: 'Carpet Area', value: '1,400 – 2,800 Sq. Ft.' },
      { label: 'Exclusivity', value: 'Only 2 Residences Per Floor' },
    ],
    overview: [
      'Avania is an address of rare distinction. Located in the heart of Bandra West, this boutique tower has been recently completed and handed over to its discerning homeowners.',
      'Conceived for residents who value private sanctum living over crowded complexes, Avania features just two expansive residences per floor, private elevator lobbies, and panoramic Arabian Sea light filtering through wrap-around balconies.',
      'The exterior strikes a balance between sleek contemporary lines and timeless Art Deco geometry, rooted firmly in the architectural heritage of Bandra’s most coveted residential lanes.',
    ],
    highlights: [
      {
        title: 'Ultra-Low Density Architecture',
        desc: 'Limited to just 28 residences with private elevator foyer access, ensuring complete privacy and quietude.',
      },
      {
        title: 'Wrap-Around Coastal Sundecks',
        desc: 'Expansive balconies with tempered glass balustrades to savor morning breezes and Arabian Sea twilight.',
      },
      {
        title: 'Temperature-Controlled Plunge Pool',
        desc: 'Rooftop wellness deck featuring a heated infinity dipping pool, cabanas, and open-air gymnasium.',
      },
      {
        title: 'Automated Multi-Level Parking with EV Ready Bays',
        desc: 'Subterranean mechanical parking with dedicated fast-charging infrastructure for electric vehicles.',
      },
      {
        title: 'Acoustic-Grade Soundproofing',
        desc: 'Triple-layer acoustic fenestrations and sound-dampened plumbing cores to keep street ambience out.',
      },
      {
        title: 'Concierge & Valet Desk',
        desc: 'Dedicated white-glove front-desk team providing mail management, guest screening, and on-call valet services.',
      },
    ],
    specifications: [
      {
        title: 'Living & Dining Salons',
        items: [
          'Hand-selected Statuario and Botticino marble flooring with satin polish',
          'Floor-to-ceiling clear heights of 11 feet with custom architectural reveals',
          'Acoustic double-glazed Schuco aluminum window frames with thermal break technology',
          'Discreet provisions for integrated motorized drapes and concealed VRV air conditioning',
        ],
      },
      {
        title: 'Master Bedroom & Dressing Suite',
        items: [
          'Engineered herringbone natural oak wood flooring from European mills',
          'Dedicated walk-in wardrobe zone with bespoke lighting channels',
          'Acoustically insulated solid teak core flush doors with brass hardware',
        ],
      },
      {
        title: 'Bathrooms & Spa Suites',
        items: [
          'Freestanding soaking tub in master suite with Dornbracht CP fittings',
          'Rain dance ceiling-mounted shower heads and wall-mounted Toto Washlets',
          'Full-height bookmatched marble cladding and backlit vanity mirrors',
        ],
      },
      {
        title: 'Smart Automation & Security',
        items: [
          'Lutron smart lighting scenes and automated climate controls',
          'Biometric digital mortise locks on all main residential entrance portals',
          '24/7 centralized surveillance with IP perimeter cameras and panic alarm system',
        ],
      },
    ],
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
        caption: 'Avania Architectural Tower Silhouette in Sunset Glow',
        category: 'exterior',
      },
      {
        src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
        caption: 'Formal Living Room with Floor-to-Ceiling Coastal Glazing',
        category: 'interior',
      },
      {
        src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85',
        caption: 'Designer Modular Kitchen with Island Breakfast Counter',
        category: 'interior',
      },
      {
        src: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=85',
        caption: 'Spa Master Bathroom with Bookmatched Marble Cladding',
        category: 'interior',
      },
    ],
    locationAdvantages: [
      {
        category: 'Bandra Waterfronts & Clubs',
        distance: '2 - 7 Mins',
        places: ['Carter Road Promenade', 'Bandra Gymkhana', 'Otters Club'],
      },
      {
        category: 'Connectivity & Expressways',
        distance: '6 - 15 Mins',
        places: ['Bandra-Worli Sea Link', 'BKC (Bandra Kurla Complex)', 'Western Express Highway'],
      },
      {
        category: 'Iconic Gastronomy & Culture',
        distance: '3 - 8 Mins',
        places: ['Pali Hill cafes & bistros', 'Bastian', 'Veronica’s', 'Subko Coffee Roasters'],
      },
      {
        category: 'Premier Hospitals & Schools',
        distance: '5 - 10 Mins',
        places: ['Lilavati Hospital', 'Holy Family Hospital', 'St. Stanislaus High School'],
      },
    ],
  },
  {
    id: 'bel-air',
    name: 'Bel Air',
    location: 'Bandra West, Mumbai',
    category: 'Recently handed over',
    badge: 'Recently handed over',
    year: '2024',
    completedYear: '2024',
    occupancyCertificate: 'Full OC Received',
    buildingHeight: '14 Storeys',
    image: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1790975653/Vaswani_Bel_Air.png_20261003022620_cwxncm.jpg',
    bedrooms: '2 & 3 BHK High-Rise Residences',
    area: '1,250 - 2,200 Sq. Ft.',
    tagline: 'A 14-Storey Architectural Jewel in Prime Bandra West',
    heroSubtitle: 'Meticulously crafted with 100% Vaastu compliance, cross-ventilated dual-aspect layouts, and intimate rooftop gardens in Bandra’s celebrated cultural quarter.',
    architect: 'Hafeez Contractor Architects',
    structuralEngineer: 'Sterling Engineering Consultants',
    reraNumber: 'P51800004910',
    totalResidences: '26 Curated Residences',
    keyStats: [
      { label: 'Completed', value: '2024' },
      { label: 'Occupancy Certificate', value: 'Full OC in Hand' },
      { label: 'Elevation', value: '14 Storeys' },
      { label: 'Configurations', value: '2 & 3 BHK' },
      { label: 'Carpet Area', value: '1,250 – 2,200 Sq. Ft.' },
      { label: 'Status', value: 'Handed Over & Inhabited' },
    ],
    overview: [
      'Bel Air rises 14 storeys above Bandra West, presenting a harmonious dialogue between modern structural engineering and serene residential living.',
      'Recently handed over to homeowners in 2024, Bel Air features dual-aspect corner residences engineered for cross-ventilation, abundant sunlight, and unobstructed vistas of the leafy Bandra treetops.',
      'Every finish has been selected to provide longevity and tactile warmth — from bespoke teak entrance doors to whisper-quiet elevators and an intimate rooftop leisure sanctuary.',
    ],
    highlights: [
      {
        title: '14-Storey Boutique Landmark',
        desc: 'Graceful mid-rise scale that fosters a tight-knit community of discerning homeowners with utmost security.',
      },
      {
        title: '100% Vaastu Compliant Orientations',
        desc: 'Planned strictly according to classical solar and directional alignments to invite light, prosperity, and harmony.',
      },
      {
        title: 'Sky Garden & Yoga Pavilion',
        desc: 'Lushly landscaped rooftop retreat with meditation deck, reflexology path, and panoramic western skyline views.',
      },
      {
        title: 'Air-Conditioned Designer Arrival Lobby',
        desc: 'Double-height lobby with imported marble, artisanal chandeliers, and discrete mail room.',
      },
      {
        title: 'High-Efficiency Multi-Level Car Parking',
        desc: 'Smooth puzzle car parking system with dedicated driver waiting area and restroom facilities.',
      },
      {
        title: '24/7 Redundant Power & Water Infrastructure',
        desc: 'Automatic generator backup for all common services and apartments, plus multi-stage water filtration.',
      },
    ],
    specifications: [
      {
        title: 'Living & Entertaining Areas',
        items: [
          'Imported Turkish Crema marble flooring in living, dining, and foyer',
          'Clear ceiling heights of 10’8” allowing natural airflow',
          'Large floor-to-ceiling sliding French doors with toughened safety glass',
          'Sleek recessed cove lighting provisions and Schneider modular switches',
        ],
      },
      {
        title: 'Bedrooms & Private Quarters',
        items: [
          'Premium large-format vitrified / engineered wood finishes in master suites',
          'Heavy-gauge acoustic sliding windows with built-in mosquito mesh',
          'Pre-wired conduit for high-speed fiber internet and smart home automation',
        ],
      },
      {
        title: 'Kitchen & Service Enclaves',
        items: [
          'Polished black granite platform with Franke stainless steel basin',
          'Provision for piped gas connection and water purifier',
          'Separate utility balcony with anti-skid rustic ceramic tiles',
        ],
      },
      {
        title: 'Bathrooms & Sanitaryware',
        items: [
          'Hansgrohe CP fittings and Duravit sanitaryware',
          'Wall-to-wall Spanish vitrified tiles with designer accent borders',
          'Concealed cisterns and glass partition screens for dry/wet segregation',
        ],
      },
    ],
    gallery: [
      {
        src: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1790975653/Vaswani_Bel_Air.png_20261003022620_cwxncm.jpg',
        caption: 'Bel Air Architectural Facade — 14 Storeys of Refined Bandra Elevation',
        category: 'exterior',
      },
      {
        src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
        caption: 'Panoramic Rooftop Terrace & Observation Lounge',
        category: 'amenity',
      },
      {
        src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85',
        caption: 'Bright Sunlit Living & Entertaining Lounge',
        category: 'interior',
      },
      {
        src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
        caption: 'Master Suite with French Windows and Leafy Treetop Views',
        category: 'interior',
      },
    ],
    locationAdvantages: [
      {
        category: 'Transit & Arteries',
        distance: '4 - 10 Mins',
        places: ['Bandra Railway Station', 'S.V. Road & Linking Road', 'Bandra-Worli Sea Link'],
      },
      {
        category: 'Culture & Promenade',
        distance: '5 - 10 Mins',
        places: ['Mount Mary Basilica', 'Bandstand Promenade', 'Jogger’s Park'],
      },
      {
        category: 'Fine Dining & Retail',
        distance: '2 - 7 Mins',
        places: ['Linking Road boutiques', 'Pali Village cafes', 'Olive Bar & Kitchen'],
      },
      {
        category: 'Elite Schools & Healthcare',
        distance: '4 - 12 Mins',
        places: ['St. Andrew’s College', 'Lilavati Hospital', 'Bhabha Hospital'],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 3. RISING NOW
  // Display:
  // • Seascape
  // • Verano / Montclaire
  // • Viona
  // ─────────────────────────────────────────────────────────────
  {
    id: 'seascape',
    name: 'Seascape',
    location: 'Juhu',
    category: 'Rising now',
    badge: 'Rising now',
    externalUrl: 'https://vaswaniseascape.in',
    image: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1779550159/Make_setting_night_time_202605232058_w4cpyk.jpg',
    bedrooms: '4 & 5 BHK Coastal Sky Villas',
    area: '2,300 - 4,500 Sq. Ft.',
    tagline: 'Coastal Sky Villas Overlooking the Arabian Sea in Juhu',
  },
  {
    id: 'verano-montclaire',
    name: 'Verano / Montclaire',
    location: 'Bandra West',
    category: 'Rising now',
    badge: 'Rising now',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    bedrooms: '3 & 4 BHK Luxury Residences',
    area: '1,800 - 3,200 Sq. Ft.',
    tagline: 'Ultra-Luxury Contemporary Residences in Bandra West',
    overview: [
      'Currently rising in Bandra West, Verano / Montclaire represents the pinnacle of modern architectural achievement, offering private residential floors and panoramic cityscapes.',
    ],
  },
  {
    id: 'viona',
    name: 'Viona',
    location: 'Andheri',
    category: 'Rising now',
    badge: 'Rising now',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    bedrooms: '2 & 3 BHK Contemporary Homes',
    area: '1,200 - 2,100 Sq. Ft.',
    tagline: 'Smart Contemporary Residences in Andheri',
    overview: [
      'Under construction in Andheri, Viona combines seamless metro connectivity with serene landscaped courtyard living.',
    ],
  },
];

// Additional projects catalog for direct deep links or aliases
export const ADDITIONAL_PROJECTS: PortfolioProject[] = [
  {
    id: 'hamara-ghar',
    name: 'Hamara Ghar',
    location: 'Santacruz West',
    category: 'Delivered',
    badge: 'Delivered',
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
    category: 'Delivered',
    badge: 'Delivered',
    year: '2012',
    completedYear: '2012',
    configuration: '3 & 4 BHK Luxury Residences',
    constructionStart: '2009',
    possessionDate: '2012',
    image: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1790975652/Exotica.png_20261003023004_ukmw81.jpg',
  },
];

export const ALL_PROJECTS = [...PORTFOLIO_PROJECTS, ...ADDITIONAL_PROJECTS];
