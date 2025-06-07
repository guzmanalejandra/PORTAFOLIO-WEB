import dogImg from '../assets/my-dogs.jpeg'
import blackCloverGif from '../assets/Asta.gif'

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#FE554A] text-white py-20 px-6 font-['Press Start 2P'] overflow-hidden"
    >

      <div className="absolute inset-0 z-0">
        <div className="w-[600px] h-[600px] bg-gradient-to-br from-purple-500 to-pink-500 opacity-30 rounded-full blur-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center animate__animated animate__fadeInUp">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 animate__animated animate__pulse animate__delay-1s">
          About Me
        </h2>

        <img
          src={dogImg}
          alt="My dogs"
          className="mx-auto mb-6 rounded-xl w-full max-w-xs border-4 border-yellow-400 animate__animated animate__zoomIn"
        />

        <p className="text-sm md:text-base text-white/90 leading-loose mb-6 animate__animated animate__fadeIn animate__delay-1s">
          I'm Alejandra Guzman, a passionate Computer Science student who loves transforming data into stories and building playful, colorful interfaces.
          Whether it's a dashboard or a mini game, I bring creative logic to every line of code. I’m always exploring new ideas, technologies, and ways to make users smile.
        </p>

        <p className="text-sm md:text-base text-white/90 mb-6 animate__animated animate__fadeIn animate__delay-2s">
          I’m currently working on Python automation projects, and I’ve also worked on data analysis dashboards. I enjoy mixing logic and visuals to create smooth user experiences.
        </p>

        <img
          src={blackCloverGif}
          alt="Black Clover Gif"
          className="mx-auto mb-4 rounded-lg border border-white max-w-sm animate__animated animate__fadeInUp animate__delay-3s"
        />

        <p className="text-sm md:text-base text-white/90 mb-6 animate__animated animate__fadeIn animate__delay-4s">
          I absolutely enjoy anime — my favorite is <strong>Black Clover</strong> (Asta scream included). I'm trying to get into One Piece... but I fail every time I start.
        </p>
      </div>
    </section>
  )
}