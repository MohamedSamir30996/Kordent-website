import imgImage33 from "../Hero_2-1.png";

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
    <div className="overflow-clip relative rounded-[16px] size-full" data-name="Hero section 2">
      <div className="absolute inset-0" data-name="image 33">
        <img alt="" className="absolute inset-0 w-full h-full object-contain pointer-events-none" src={imgImage33} />
      </div>
      <Container />
      <TextHolder />
    </div>
  );
}
