import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import fallbackImg from '../assets/no-preview.png'

export default function Works() {
  const projects = [
    {
      id: 1,
      title: "Calculadora JS",
      description: "Una calculadora simple en JavaScript para operaciones básicas.",
      image: "https://raw.githubusercontent.com/guzmanalejandra/Proyecto-Calculadora01/main/public/demo.png",
      github: "https://github.com/guzmanalejandra/Proyecto-Calculadora01",
      tags: ["JavaScript", "HTML", "CSS"],
      type: "App"
    },
    {
      id: 2,
      title: "Memoria React",
      description: "Juego de memoria con tarjetas en React y lógica simple.",
      image: "https://raw.githubusercontent.com/guzmanalejandra/Memoria-react/main/public/demo.png",
      github: "https://github.com/guzmanalejandra/Memoria-react",
      tags: ["React", "Game"],
      type: "Mini Juego"
    },
    {
      id: 3,
      title: "Churn Dashboard",
      description: "Visualización de análisis de comportamiento de clientes.",
      image: "https://raw.githubusercontent.com/guzmanalejandra/Customer-Purchase-Behavior-Churn-Analysis-Dashboard/main/demo.png",
      github: "https://github.com/guzmanalejandra/Customer-Purchase-Behavior-Churn-Analysis-Dashboard",
      tags: ["Power BI", "Dashboard"],
      type: "Data Viz"
    },
    {
      id: 4,
      title: "E-commerce Dashboard",
      description: "Análisis visual de consumidores de e-commerce.",
      image: "https://raw.githubusercontent.com/guzmanalejandra/E-commerce-Consumer-Behavior-Analysis-Dashboard/main/demo.png",
      github: "https://github.com/guzmanalejandra/E-commerce-Consumer-Behavior-Analysis-Dashboard",
      tags: ["Power BI", "Business"],
      type: "Data Viz"
    }
  ]

  return (
    <section className="bg-[#F84D2F] py-20 px-6 font-['Press Start 2P'] text-white">
      <h2 className="text-2xl text-center font-bold mb-12">Featured Projects</h2>
      <Swiper
        slidesPerView={1.2}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
        speed={5000}
        allowTouchMove={false}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3.2 },
        }}
        modules={[Autoplay]}

      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="bg-[#FE554A] rounded-xl p-5 shadow-md h-full flex flex-col justify-between">
              <div className="text-xs bg-yellow-400 text-black px-3 py-1 rounded-full inline-block mb-2">
                {`0${project.id}`} {project.type.toUpperCase()}
              </div>
              <img
                src={project.image}
                alt={project.title}
                onError={(e) => { e.target.onerror = null; e.target.src = fallbackImg }}
                className="w-full h-[180px] object-contain bg-white p-2 mb-4"
              />
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="text-sm text-white/90 mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-white text-[#FE554A] text-xs px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <a href={project.github} className="bg-yellow-400 text-[#FE554A] font-bold text-xs py-2 px-4 rounded-full hover:bg-white inline-block">
                ▶ View Case
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
