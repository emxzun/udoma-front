import {StaticImageData} from "next/image";


export default interface DistrictItemProps {
  item: {
    img: StaticImageData | string;
    title: string;
  }
}
