import React from 'react';
import ApartmentItem from "@/components/apartment-item/ApartmentItem";
import {DATA} from "@/common/data";

import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";


const Intro = () => {
  const [activeCategory, setActiveCategory] = React.useState<string>();

  return (
      <div className="intro-wrapper">
        <div className="intro">
          <div className="intro__inner">
            <div className="intro__content">
              <div className="intro__title">
                Lorem ipsum dolor.
              </div>
              <div className="intro__subtitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </div>
              <div className="intro__district-items">
                {DATA.categories.map(cat =>
                    <div onClick={()=>{setActiveCategory(cat)}}
                         key={cat} className={`intro__district-item ${activeCategory==cat && 'active'}` }>
                      {cat}
                    </div>
                )}
              </div>
              <div className="intro__search-field">
                <input type="text"/>
                <button>Поиск</button>
              </div>
            </div>
            <div className="last-apartment">
                <Swiper
                    modules={[Pagination]}
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                  {DATA.apartments.map(item =>
                      <SwiperSlide key={item.title}>
                        <ApartmentItem item={item}/>
                      </SwiperSlide>
                  )}
                </Swiper>
            </div>
          </div>
        </div>

      </div>
  );
};

export default Intro;