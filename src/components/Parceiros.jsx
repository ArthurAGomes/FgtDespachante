function Parceiros() {
  const logos = [
    "/logo1.png",
    "/logo2.png",
    "/logo3.png",
    "/logo4.png",
    "/logo5.png",
  ];

  return (
    <div className="shadow-sm border-b border-t py-6">
      <h2 className="text-4xl font-bold text-customDarkBlue text-center my-10">
        Parceiros
      </h2>
      <div className="overflow-hidden relative">
        {/* Linha 1 - Direção para a direita */}
        <div className="flex animate-marquee hover:pause space-x-8">
          {logos.map((logo, index) => (
            <img
              key={`line1-${index}`}
              src={logo}
              alt={`Parceiro ${index + 1}`}
              className="h-16 object-contain"
            />
          ))}
          {logos.map((logo, index) => (
            <img
              key={`line1-copy-${index}`}
              src={logo}
              alt={`Parceiro ${index + 1}`}
              className="h-16 object-contain"
            />
          ))}
        </div>

        {/* Linha 2 - Direção para a esquerda */}
        <div className="flex animate-marquee-reverse hover:pause space-x-8 mt-6">
          {logos.map((logo, index) => (
            <img
              key={`line2-${index}`}
              src={logo}
              alt={`Parceiro ${index + 1}`}
              className="h-16 object-contain"
            />
          ))}
          {logos.map((logo, index) => (
            <img
              key={`line2-copy-${index}`}
              src={logo}
              alt={`Parceiro ${index + 1}`}
              className="h-16 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Parceiros;
