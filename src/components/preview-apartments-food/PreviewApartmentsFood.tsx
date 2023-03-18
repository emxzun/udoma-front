import ApartmentItem from "@/components/apartment-item/ApartmentItem";
import {DATA} from "@/common/data";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";
import Link from "next/link";
import 'swiper/css';
import 'swiper/css/pagination';


const PreviewApartmentsFood = () => {
  return (
    <div className="preview-apartments__food">
      <Link href="/apartments">
        <button>Смотреть все объекты</button>
      </Link>
    </div>
  );
};

export default PreviewApartmentsFood;