import React  from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";
import DistrictItem from "@/components/district-item/DistrictItem";
import {DATA} from "@/common/data";



const PreviewDistricts = () => {
  return (
    <div className="preview-districts__items">
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
              <DistrictItem item={item}/>
            </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
};

export default PreviewDistricts;