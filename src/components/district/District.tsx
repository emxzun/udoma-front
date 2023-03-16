import React, {FC} from 'react';
import {StaticImageData} from "next/image";
import DistrictProps from "@/components/district/district.props";


const District: FC<DistrictProps> =({item}) => {
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
      <div className="district" style={styles}>
        <div className="district__title">
          {item.title}
        </div>
      </div>
  );
};

export default District;