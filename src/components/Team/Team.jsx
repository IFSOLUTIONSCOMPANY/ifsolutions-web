import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import teamData from "./TeamData";
import Card from "./Card";

export default function Team() {
  return (
    <>
      <div className="mt-28 block">
        <h2 className="text-3xl font-bold text-center mt-20 mb-10">
          Notre équipe d'experts
        </h2>
        <p className="text-center text-black/60 mb-20 w-96 md:w-full mx-auto">
          Chez nous, notre mission principale est de vous fournir un soutien
          inébranlable et des conseils experts pour vous aider à réaliser vos
          ambitions et à mener vos projets à bien, car votre réussite est notre
          plus grande satisfaction.
        </p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        navigation
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          880: {
            slidesPerView: 3,
            spaceBetween: 50,
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {teamData.map((member, index) => (
          <SwiperSlide className="swiper-container" key={index}>
            <Card
              imageUrl={member.imageUrl}
              name={member.name}
              role={member.role}
              position={member.position}
              linkedInUrl={member.linkedInUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <p className="w-96 text-center mx-auto mt-2 text-sm text-black/60">
        Nos experts sont dédiés à votre réussite grâce à une approche axée sur
        la formation et l'accompagnement.
      </p>
    </>
  );
}
