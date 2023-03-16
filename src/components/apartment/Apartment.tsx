import React, {FC} from 'react';
import Image from "next/image";
import {textReduce} from "@/utils/text";
import ApartmentProps from "@/components/apartment/apartment.props";


const Apartment: FC<ApartmentProps> = ({item}) => {
  return (
      <div className="apartments__item">
        <Image className="apartments__item-img" alt={item.title} src={item.img}/>
        <div className="apartments__item-content">
          <h4 className="apartments__item-title">{item.title}</h4>
          <div className="apartments__item-district">{item.district}</div>
          <div className="apartments__item-desc">{textReduce(item.desc, 120)}</div>
          <div className="apartments__item-price">{item.price} сом</div>
        </div>
      </div>
  );
};

export default Apartment;