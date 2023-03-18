import ApartmentItem from "@/components/apartment-item/ApartmentItem";
import {DATA} from "@/common/data";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";


const PreviewApartments = () => {
  return (
    <div className="preview-apartments__items">
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
              <ApartmentItem item={item}/>
            </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default PreviewApartments;