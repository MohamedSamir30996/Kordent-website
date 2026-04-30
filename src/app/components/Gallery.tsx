import { motion, useInView } from "motion/react";
import { useRef } from "react";
import galleryImg1 from "../../assets/figma/solutions-pic-1.png";
import galleryImg2 from "../../assets/figma/leading-dental-innovation.png";
import galleryImg3 from "../../assets/figma/solutions-pic-2.png";

const images = [
  {
    url: galleryImg1,
    alt: "",
  },
  {
    url: galleryImg2,
    alt: "",
  },
  {
    url: galleryImg3,
    alt: "",
  },
];

export function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    null
  );
}
