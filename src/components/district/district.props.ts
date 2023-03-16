import {StaticImageData} from "next/image";


export default interface DistrictProps{
  item: {
    img: StaticImageData | string;
    title: string;
  }
}
