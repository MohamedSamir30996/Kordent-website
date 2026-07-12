export type ProductDetailSection = {
  title: string;
  items: string[];
};

export type ProductPackageSection = {
  title?: string;
  items: string[];
};

export type EquipmentProduct = {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  highlights: string[];
  details: ProductDetailSection[];
  packages: ProductPackageSection[];
  /** Short card blurb on /equipment listing */
  description: string;
};

export type EquipmentSubcategory = {
  id: string;
  name: string;
  products: EquipmentProduct[];
};

export type EquipmentCategory = {
  id: string;
  name: string;
  description: string;
  subcategories: EquipmentSubcategory[];
};

export type LocalizedProductFields = Pick<
  EquipmentProduct,
  "tagline" | "summary" | "highlights" | "description" | "details" | "packages"
>;
