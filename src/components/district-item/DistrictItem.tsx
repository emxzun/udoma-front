import React, {FC} from 'react';
import {StaticImageData} from "next/image";
import DistrictItemProps from "@/components/district-item/district-item.props";


const DistrictItem: FC<DistrictItemProps> =({item}) => {
  const styles = {
    // backgroundImage: `url(${item.img})`,
    background: `
      linear-gradient(0deg, rgba(0, 0, 0, 0.2), 
      rgba(0, 0, 0, 0.2)), 
      url(${item.img}),
      no-repeat
    `,
    backgroundSize: "cover",
    backgroundPposition: "center",
  }
  return (
      <div className="district-item" style={styles}>
        <div className="district-item__title">
          {item.title}
        </div>
      </div>
  );
};

export default DistrictItem;