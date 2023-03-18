import {StaticImageData} from "next/image";


export default interface ApartmentItemProps {
  item: {
    id?: number,
    title: string;
    img: StaticImageData;
    district: string;
    desc: string;
    price: number;
  }
}