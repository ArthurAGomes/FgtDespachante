import PKM from "../assets/img/pkm.jpg";
import bancoRendimento from "../assets/img/banco-rendimento.png";

function Parceiros() {
  return (
    <div className="py-12 border">
      <h2 className="text-4xl font-bold text-customDarkBlue text-center mb-10">
        Parceiros
      </h2>
      <div className="flex justify-around items-center space-x-24">
        <a
          href="https://www.pkmracing.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={PKM} alt="PKM" className="h-32 w-32 object-contain rounded-sm" />
        </a>

        <a
          href="https://www.rendimento.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={bancoRendimento}
            alt="Banco Rendimento"
            className="h-40 w-40 object-contain rounded-sm"
          />
        </a>
      </div>
    </div>
  );
}

export default Parceiros;
