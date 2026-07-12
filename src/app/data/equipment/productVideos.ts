/** YouTube video IDs keyed by equipment product id. */
export const productVideoIdsByProductId: Record<number, string[]> = {
  1: ["EAzEvcVfLQ4", "4F7GKauQGnM"], // K. Composite Resin
  4: ["_y9y7XW9P8Y"], // K. Flow Resin (flowable composite)
  5: ["XuewexHQtNI"], // K. Temp Flow
  10: ["OwJr92ZRI_0"], // K.Lay
  11: ["df4-2E8sn6s", "2EK8JoEtylw"], // K. Etch-37
  12: ["bdl5Oa17Zh4"], // K. Bond
  14: ["HigjhEw90TE"], // K. Temp Cement NE (K. Cem)
  17: ["uwE3f5kejik"], // K. Sealer
  18: ["CPjbmHIhirc"], // K. Bio ceramic sealer
  20: ["oUamBvD-_g0"], // K. Paste
  21: ["hFdQdAB2nWo"], // K. MTA
  28: ["vklxXeZIfNs"], // K. Base Liner
  43: ["3robbMKaKcQ"], // K. Dam
  44: ["WgbIULva7ac"], // K. Fluoride Varnish
};

export function getProductVideoIds(productId: number): string[] {
  return productVideoIdsByProductId[productId] ?? [];
}

export function youtubeEmbedUrl(videoId: string): string {
  return `https://www.youtube.com/embed/${videoId}`;
}
