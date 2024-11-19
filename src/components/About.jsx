import aboutImg from '../assets/img/about-img.png';

function About() {
  return (
    <div className="w-full bg-gray-800 py-10 flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-10 px-5">
      <div className="w-full md:w-1/2 flex justify-center">
        <img 
          src={aboutImg} 
          alt="Sobre nós" 
          className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
      <div className="w-full md:w-1/2 text-white text-start space-y-5">
        <h1 className="text-4xl font-bold border-b-4 border-blue-600 inline-block pb-2">
          Quem Somos
        </h1>
        <p className="text-lg leading-relaxed">
          Nossa missão é fornecer soluções criativas e eficientes que transformam ideias em realidade. Com uma equipe apaixonada e dedicada, buscamos a excelência em cada projeto, sempre colocando nossos clientes em primeiro lugar.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-slate-100 font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors duration-300">
          Saiba Mais
        </button>
      </div>
    </div>
  );
}

export default About;
