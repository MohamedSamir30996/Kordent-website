import imgImage34 from "../Hero_3-1.png";

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
    <div className="overflow-clip relative rounded-[16px] size-full" data-name="Hero section 3">
      <div className="absolute inset-0" data-name="image 34">
        <img alt="" className="absolute inset-0 w-full h-full object-contain pointer-events-none" src={imgImage34} />
      </div>
      <Container />
      <TextHolder />
    </div>
  );
}
