import React from 'react';
import LayoutBlock from "@/layouts/layout-block/LayoutBlock";
import {DATA} from "@/common/data";
import Image from "next/image";
import {A11y, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const ApartamentPage = () => {

  return (
      <>
        <LayoutBlock>
          <div className="apartment-detail">
            <div className="apartment-detail__title">{DATA.apartment.title}</div>
            <div className="apartment-detail__head">
              <div className="apartment-detail__district">{DATA.apartment.district}</div>
              <div className="apartment-detail__price">20{DATA.apartment.price} сом</div>
            </div>
            <Image className="apartment-detail__img" src={DATA.apartment.img} alt={DATA.apartment.title}/>
            <div className="apartment-detail__description">{DATA.apartment.desc}</div>
          </div>
          <Swiper
              modules={[Navigation, Pagination, A11y]}
              slidesPerView={1}
              spaceBetween={20}
              style={{width: "100%"}}
              className="apartment-detail__img-items"
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
          >
            {DATA.apartments.map(item =>
                <SwiperSlide key={item.title}>
                    <Image className="apartment-detail__img-item" src={DATA.apartment.img} alt={DATA.apartment.title}/>
                </SwiperSlide>
            )}
          </Swiper>
        </LayoutBlock>

      </>
  );
};


export default ApartamentPage;