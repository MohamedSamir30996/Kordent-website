import imgHeroDesktop from "../../assets/figma/hero-3.png";
import imgHeroMobile from "../../assets/figma/Hero 3 mobile.png";

function Container() {
  return (
    null
  );
}

function TextHolder() {
  return (
    null
  );
}

export default function HeroSection() {
  return (
    <div className="overflow-clip relative max-md:rounded-none rounded-[16px] size-full" data-name="Hero section 3">
      <div className="absolute inset-0" data-name="image 34">
        <img
          alt=""
          src={imgHeroMobile}
          className="absolute inset-0 h-full w-full min-w-full object-cover object-center pointer-events-none md:hidden"
        />
        <img
          alt=""
          src={imgHeroDesktop}
          className="absolute inset-0 hidden h-full w-full object-contain pointer-events-none md:block"
        />
      </div>
      <Container />
      <TextHolder />
    </div>
  );
}
