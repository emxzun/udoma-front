import React, {FC} from 'react';
import Image from "next/image";
import {textReduce} from "@/utils/text";
import ApartmentItemProps from "@/components/apartment-item/apartment-item.props";


const ApartmentItem: FC<ApartmentItemProps> = ({item}) => {
  return (
      <div className="apartment-item">
        <Image className="apartment-item__img" alt={item.title} src={item.img}/>
        <div className="apartment-item__content">
          <h4 className="apartment-item__title">{item.title}</h4>
          <div className="apartment-item__district">{item.district}</div>
          <div className="apartment-item__desc">{textReduce(item.desc, 120)}</div>
          <div className="apartment-item__price">{item.price} сом</div>
        </div>
      </div>
  );
};

export default ApartmentItem;