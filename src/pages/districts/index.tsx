import React from 'react';
import LayoutBlock from "@/layouts/layout-block/LayoutBlock";
import {DATA} from "@/common/data";
import ButtonLoad from "@/components/button-load/ButtonLoad";
import SearchField from "@/components/search-field/SearchField";
import DistrictItem from "@/components/district-item/DistrictItem";
import Link from "next/link";
import slug from "slug";


const Index = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  return (
      <>
        <LayoutBlock title="Районы">
          <div className="district-list__search-field">
            <SearchField/>
          </div>
          <div className="district-list__main">
            <div className="district-list__items">
              {DATA.districts.map((item) =>
                    <DistrictItem key={item.title} item={item}/>
              )}
            </div>
          </div>
          <div className="district-list__food">
            <div onClick={()=>setLoading(!loading)}>
              <ButtonLoad isLoad={loading} className="small">показать еще</ButtonLoad>
            </div>
          </div>
        </LayoutBlock>
      </>
  );
};

export default Index;