import heroImg from '../assets/web-cool.png'
import 'animate.css'
import '../assets/snow.css'
import '../assets/typing.css'

export default function Hero() {
  return (
    <section className="bg-[#F84D2F] text-white py-12 px-6 flex flex-col-reverse lg:flex-row items-center justify-center gap-10 font-['Press Start 2P'] relative overflow-hidden">
      {/* Snow animation layer */}
      <div className="absolute inset-0 z-0 pointer-events-none snow-layer" />

      <div className="lg:w-[45%] text-center lg:text-left z-10">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight uppercase typing">
          aLEJANDRA gUZMAN
        </h1>
        <p className="text-sm md:text-base mb-6 text-white/90">
          Computer Science Student, loves data, dogs, and watching Anime.
        </p>
        <a
          href="#about"
          className="bg-yellow-400 text-[#F84D2F] px-6 py-3 rounded-full font-bold hover:bg-white inline-block shadow-lg animate-bounce transition duration-300"
        >
          ▶ Learn More
        </a>
      </div>

      <div className="lg:w-[45%] flex justify-center z-10">
        <img src={heroImg} alt="Hero Illustration" className="w-full max-w-lg" />
      </div>
    </section>
  )
}
