import paymentLogos from "../../assets/figma/Payment logos.png";

export function PaymentLogos() {
  return (
    <div className="flex justify-center px-4">
      <img
        src={paymentLogos}
        alt=""
        className="w-full max-w-4xl h-auto object-contain"
      />
    </div>
  );
}
