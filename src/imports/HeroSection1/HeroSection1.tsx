import svgPaths from "./svg-b2dv6cjr3n";
import imgHeroDesktop from "../../assets/figma/hero-1.png";
import imgHeroMobile from "../../assets/figma/Hero 1 mobile.png";

function Button() {
  return (
    <div className="absolute bg-[rgba(159,159,159,0.5)] left-[1244px] rounded-[1000px] size-[48px] top-[515px]" data-name="Button">
      <div className="absolute left-[8px] overflow-clip size-[32px] top-[8px]" data-name="Icon / Facebook">
        <div className="absolute inset-[9.34%_8.33%_7.32%_8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6667 26.6667">
            <path d={svgPaths.p1a0f4670} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[rgba(159,159,159,0.5)] left-[1308px] rounded-[1000px] size-[48px] top-[515px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[32px] top-1/2" data-name="Icon / Instagram">
        <div className="absolute inset-[13.51%_12.5%_11.49%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path clipRule="evenodd" d={svgPaths.p3fa05080} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[32px] top-1/2" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <path d={svgPaths.p23aa3200} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[rgba(159,159,159,0.5)] left-[1372px] rounded-[1000px] size-[48px] top-[515px]" data-name="Button">
      <Frame />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[1244px] top-[515px]">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Shadow() {
  return (
    null
  );
}

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
    <div className="overflow-clip relative max-md:rounded-none rounded-[16px] size-full" data-name="Hero section 1">
      <div className="absolute inset-0" data-name="image 32">
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
      <Shadow />
      <Container />
      <TextHolder />
    </div>
  );
}
