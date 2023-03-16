import Apartment from "@/components/apartment/Apartment";
import apartmentExample from "@/images/examples/apartment.jpeg";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";

const Apartments = () => {
  const DATA = {
    apartments: [
      {
        title: " ЖК «Atlantis Deluxe»",
        district: "Аламедин",
        img: apartmentExample,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque culpa, dignissimos, distinctio eaque enim error esse facere hic illum inventore magni nihil officiis quae quaerat quisquam recusandae totam ut.",
        price: 123
      },
      {
        title: " ЖК «Atlantis Deluxe»",
        district: "Аламедин",
        img: apartmentExample,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque culpa, dignissimos, distinctio eaque enim error esse facere hic illum inventore magni nihil officiis quae quaerat quisquam recusandae totam ut.",
        price: 123
      },
      {
        title: " ЖК «Atlantis Deluxe»",
        district: "Аламедин",
        img: apartmentExample,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque culpa, dignissimos, distinctio eaque enim error esse facere hic illum inventore magni nihil officiis quae quaerat quisquam recusandae totam ut.",
        price: 123
      },
      {
        title: " ЖК «Atlantis Deluxe»",
        district: "Аламедин",
        img: apartmentExample,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque culpa, dignissimos, distinctio eaque enim error esse facere hic illum inventore magni nihil officiis quae quaerat quisquam recusandae totam ut.",
        price: 123
      },
      {
        title: " ЖК «Atlantis Deluxe»",
        district: "Аламедин",
        img: apartmentExample,
        desc: "Lo quisquam recusandae totam ut.",
        price: 123
      },
      {
        title: " ЖК «Atlantis Deluxe»",
        district: "Аламедин",
        img: apartmentExample,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque culpa, dignissimos, distinctio eaque enim error esse facere hic illum inventore magni nihil officiis quae quaerat quisquam recusandae totam ut.",
        price: 123
      },

    ]
  }

  return (
      <div className="apartments">
        <div className="apartments__header">
          <h2 className="apartments__header-title">Наши лучшие инвестиционные предложения</h2>
          <h3 className="apartments__header-subtitle">Мы отобрали, проверили и рассчитали прибыльность каждого объекта</h3>
        </div>
        <div className="apartments__items">
          <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              spaceBetween={20}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              breakpoints={{
                510: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 4,
                }
              }}
          >
            {DATA.apartments.map(item =>
                <SwiperSlide key={item.title}>
                  <Apartment item={item}/>
                </SwiperSlide>
            )}
          </Swiper>
        </div>
        <div className="apartments__food">
          <button>Смотреть все объекты</button>
        </div>
      </div>

  );
};

export default Apartments;