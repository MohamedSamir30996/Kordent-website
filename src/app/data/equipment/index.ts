import { equipmentProductImageById } from "../../../assets/figma/equipmentProductImages";
import type { Language } from "../../i18n";
import {
  equipmentCategoriesSource,
  getEquipmentProductBySlug,
} from "./catalog";
import { catalogKoByProductId } from "./catalogKo";
import type { EquipmentCategory, EquipmentProduct } from "./types";

export type EquipmentProductWithContext = EquipmentProduct & {
  categoryId: string;
  subcategoryId: string;
  categoryName: string;
  image: string;
  gallery: string[];
};

const galleryExtrasById: Record<number, number[]> = {
  1: [1],
  2: [1, 2],
  3: [2, 3],
  4: [4, 5],
  5: [5],
  7: [7],
  8: [8, 3],
  22: [22, 23, 24],
  23: [23, 24, 25],
  27: [27, 21],
  28: [28, 29],
};

function resolveGallery(productId: number, primary: string): string[] {
  const ids = galleryExtrasById[productId] ?? [productId];
  const images = ids
    .map((id) => equipmentProductImageById[id])
    .filter((src): src is string => Boolean(src));
  return images.length > 0 ? [...new Set(images)] : [primary];
}

function attachImages(
  product: EquipmentProduct & {
    categoryId: string;
    subcategoryId: string;
    categoryName: string;
  },
): EquipmentProductWithContext {
  const image =
    equipmentProductImageById[product.id] ??
    equipmentProductImageById[1];
  return {
    ...product,
    image,
    gallery: resolveGallery(product.id, image),
  };
}

export function localizeProduct(
  product: EquipmentProduct,
  language: Language,
): EquipmentProduct {
  if (language === "en") return product;
  const ko = catalogKoByProductId[product.id];
  if (!ko) return product;
  return {
    ...product,
    ...ko,
    details: ko.details ?? product.details,
    packages: ko.packages ?? product.packages,
    highlights: ko.highlights ?? product.highlights,
  };
}

export function getLocalizedProductBySlug(
  slug: string,
  language: Language,
): EquipmentProductWithContext | undefined {
  const product = getEquipmentProductBySlug(slug);
  if (!product) return undefined;
  const localized = localizeProduct(product, language);
  return attachImages({ ...product, ...localized });
}

export function getEquipmentCategories(
  language: Language,
): (EquipmentCategory & {
  subcategories: (EquipmentCategory["subcategories"][number] & {
    products: EquipmentProductWithContext[];
  })[];
})[] {
  return equipmentCategoriesSource.map((category) => ({
    ...category,
    subcategories: category.subcategories.map((sub) => ({
      ...sub,
      products: sub.products.map((product) => {
        const localized = localizeProduct(product, language);
        const withContext = {
          ...product,
          ...localized,
          categoryId: category.id,
          subcategoryId: sub.id,
          categoryName: category.name,
        };
        return attachImages(withContext);
      }),
    })),
  }));
}

export { equipmentCategoriesSource, getEquipmentProductBySlug };
export { getProductVideoIds, youtubeEmbedUrl } from "./productVideos";
