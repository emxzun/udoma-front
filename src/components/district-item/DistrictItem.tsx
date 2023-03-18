import React, {FC} from 'react';
import {StaticImageData} from "next/image";
import DistrictItemProps from "@/components/district-item/district-item.props";
import slug from "slug";
import Link from "next/link";


const DistrictItem: FC<DistrictItemProps> =({item}) => {
  const styles = {
    // backgroundImage: `url(${item.img})`,
    background: `
      linear-gradient(0deg, rgba(0, 0, 0, 0.5), 
      rgba(0, 0, 0, 0.4)), 
      url(${item.img}),
      no-repeat
    `,
    backgroundSize: "cover",
    backgroundPposition: "center",
  }
  return (
      <Link className="district-item__wrapper"
            href={{ pathname: "/apartments/", query: { district_id: item.id}}}>
        <div className="district-item" style={styles}>
          <div className="district-item__title">
            {item.title}
          </div>
        </div>
      </Link>
  );
};

export default DistrictItem;