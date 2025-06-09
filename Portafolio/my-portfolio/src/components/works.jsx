import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import fallbackImg from '../assets/no-preview.png'
import memoriaImg from '../assets/memoria-photo.png'
import chatImg from '../assets/chat-photo.png'
import churnImg from '../assets/Churn-photo.png'
import calculatorImg from '../assets/calculadora-photo.png'
import dashboardImg from '../assets/dashboard-photo.png'
import heroesImg from '../assets/frontend-api.png'
export default function Works() {
  const projects = [
    {
      id: 1,
      title: "Calculadora JS",
      description: "Una calculadora simple en JavaScript para operaciones básicas.",
      image: calculatorImg,
      github: "https://github.com/guzmanalejandra/Proyecto-Calculadora01",
      demo: null,
      tags: ["JavaScript", "HTML", "CSS"],
      type: "App"
    },
    {
      id: 2,
      title: "Memoria React",
      description: "Juego de memoria con tarjetas en React y lógica simple.",
      image: memoriaImg,
      github: "https://github.com/guzmanalejandra/Memoria-react",
      demo: "https://memoria-react-ten.vercel.app/",
      tags: ["React", "Game"],
      type: "Mini Juego"
    },
    {
      id: 3,
      title: "Chat App",
      description: "Aplicación de chat simple usando JavaScript y localStorage.",
      image: chatImg,
      github: "https://github.com/guzmanalejandra/Chat-JavaScript",
      demo: "https://chat-javascript-green.vercel.app/",
      tags: ["JavaScript", "HTML", "CSS"],
      type: "App"
    },
    {
      id: 4,
      title: "Churn Dashboard",
      description: "Visualización de análisis de comportamiento de clientes.",
      image: churnImg,
      github: "https://github.com/guzmanalejandra/Customer-Purchase-Behavior-Churn-Analysis-Dashboard",
      demo: "https://guzmanalejandra-customer-purchase-behavior-churn-an-main-2r0mer.streamlit.app/",
      tags: ["Streamlit", "Dashboard"],
      type: "Data Viz"
    },
    {
      id: 5,
      title: "E-commerce Dashboard",
      description: "Análisis visual de consumidores de e-commerce.",
      image: dashboardImg,
      github: "https://github.com/guzmanalejandra/E-commerce-Consumer-Behavior-Analysis-Dashboard",
      demo: "https://guzmanalejandra-e-commerce-consumer-behavior-analys-main-kltwel.streamlit.app/",
      tags: ["Power BI", "Business"],
      type: "Data Viz"
    },

    {
      id: 6,
      title: "Heroes Api",
      description: "Visualización de datos de héroes usando una API.",
      image: heroesImg,
      github: "https://github.com/guzmanalejandra/Frontend-Test",
      demo: "https://frontend-test-xh64.vercel.app/",
      tags: ["Frontend", "API"],
      type: "Web"
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

              <div className="flex flex-wrap gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 text-[#FE554A] font-bold text-xs py-2 px-4 rounded-full hover:bg-white inline-block"
                >
                  ▶ View Case
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-[#FE554A] font-bold text-xs py-2 px-4 rounded-full hover:bg-yellow-300 inline-block"
                  >
                    Ver Demo
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
