export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold">DENTALTECH</div>

          <div className="flex gap-8 text-sm text-neutral-400">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#equipment" className="hover:text-white transition-colors">
              Equipment
            </a>
            <a href="#solutions" className="hover:text-white transition-colors">
              Solutions
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          <div className="text-sm text-neutral-400">
            © 2026 DentalTech. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
