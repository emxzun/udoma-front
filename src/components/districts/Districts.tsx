import React  from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";
import District from "@/components/district/District";
import {DATA} from "@/common/data";



const Districts = () => {
  return (
    <div className="districts">
      <div className="districts__header">
        <div className="districts__title">
          Новости и аналитика рынка недвижимости
        </div>
        <div className="districts__subtitle">Последние новости и аналитический отчеты, а также полезные советы наших экспетров</div>
      </div>
      <div className="districts__items">
        <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              }
            }}
        >
          {DATA.districts.map(item =>
              <SwiperSlide key={item.title}>
                <District item={item}/>
              </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  )
};

export default Districts;