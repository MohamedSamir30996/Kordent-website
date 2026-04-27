import { motion, useInView } from "motion/react";
import { useRef } from "react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1770321119305-f191c09c5801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjB0ZWNobm9sb2d5JTIwbWVkaWNhbCUyMGVxdWlwbWVudCUyMGNsZWFufGVufDF8fHx8MTc3NTY3NTEwNXww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Dental equipment with monitor",
  },
  {
    url: "https://images.unsplash.com/photo-1771442873035-474765b40ac6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxkZW50YWwlMjB0ZWNobm9sb2d5JTIwbWVkaWNhbCUyMGVxdWlwbWVudCUyMGNsZWFufGVufDF8fHx8MTc3NTY3NTEwNXww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Dental implant and crown",
  },
  {
    url: "https://images.unsplash.com/photo-1642844771937-23accb161a3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBkZW50YWwlMjBjbGluaWMlMjBlcXVpcG1lbnQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc1Njc1MTA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Modern dental operatory",
  },
];

export function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    null
  );
}
