import {StaticImageData} from "next/image";


export default interface DistrictItemProps {
  item: {
    id?: number | string,
    img: StaticImageData | string;
    title: string;
  }
}
