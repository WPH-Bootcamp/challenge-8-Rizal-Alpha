export type ButtonVariant = 'primary' | 'secondary' | 'outline';

export interface INavData {
  title: string;
  href: string;
}

export interface ICompanyProof {
  img: string;
}

export interface ISupports {
  title: string;
  text: string;
}

export interface IProcess {
  title: string;
  text: string;
  index: number;
  isLast: boolean;
}

export interface IAchievement {
  title: string;
  text: string;
}

export interface ITestimonials {
  text: string;
  name: string;
  title: string;
  img: string;
}

export interface IProjects {
  img: string;
  title: string;
}

export interface IServices {
  img: string;
  title: string;
  text: string;
}

export interface IIndustries {
  img: string;
  title: string;
  text: string;
}

export interface ISocialApp {
  title: string;
  img: string;
  link: string;
}
/**
 * Type Definitions
 *
 * File ini berisi semua TypeScript interfaces dan types yang digunakan
 * di berbagai tempat dalam aplikasi.
 *
 * Best Practices:
 * - Gunakan PascalCase untuk interface names
 * - Export semua interfaces agar bisa digunakan di file lain
 * - Group related interfaces bersama
 * - Add comments untuk explain complex types
 */

// ==========================================
// UI Component Types
// ==========================================

/**
 * Button variant types
 * Gunakan ini untuk Button component
 */

/**
 * Example: Button Props
 * Uncomment dan sesuaikan dengan kebutuhan
 */
// export interface ButtonProps {
//   variant?: ButtonVariant;
//   children: React.ReactNode;
//   onClick?: () => void;
//   className?: string;
//   disabled?: boolean;
// }

// ==========================================
// Section Data Types
// ==========================================

/**
 * TODO: Define interfaces untuk data yang digunakan di sections
 *
 * Contoh:
 * - ServiceItem untuk services section
 * - TeamMember untuk team section
 * - Testimonial untuk testimonials section
 * - dll.
 */

/**
 * Example: Service/Product Item
 */
// export interface ServiceItem {
//   id: number;
//   title: string;
//   description: string;
//   icon?: string;
//   image?: string;
// }

/**
 * Example: Team Member
 */
// export interface TeamMember {
//   id: number;
//   name: string;
//   position: string;
//   bio?: string;
//   image: string;
//   socialLinks?: {
//     linkedin?: string;
//     twitter?: string;
//     github?: string;
//   };
// }

/**
 * Example: Testimonial
 */
// export interface Testimonial {
//   id: number;
//   name: string;
//   position: string;
//   company: string;
//   message: string;
//   avatar?: string;
//   rating?: number;
// }

// ==========================================
// Navigation Types
// ==========================================

/**
 * Navigation menu item
 */
// export interface NavItem {
//   label: string;
//   href: string;
//   external?: boolean;
// }

// ==========================================
// Form Types (if needed)
// ==========================================

/**
 * Contact form data
 */
// export interface ContactFormData {
//   name: string;
//   email: string;
//   message: string;
// }

// ==========================================
// TODO: Add more types as needed!
// ==========================================

/**
 * Tips:
 * 1. Define types berdasarkan data yang kamu perlukan
 * 2. Lihat design Figma untuk understand data structure
 * 3. Make types reusable across components
 * 4. Use optional properties (?) untuk data yang tidak selalu ada
 * 5. Consider creating separate files jika types terlalu banyak
 *    Example: types/components.ts, types/data.ts, etc.
 */
