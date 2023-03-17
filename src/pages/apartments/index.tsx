import React from 'react';
import LayoutBlock from "@/layouts/layout-block/LayoutBlock";
import ApartmentItem from "@/components/apartment-item/ApartmentItem";
import {DATA} from "@/common/data";
import ButtonLoad from "@/components/button-load/ButtonLoad";


const Index = () => {
  const [loading, setLoading] = React.useState<boolean>(false);


  return (
    <>
      <LayoutBlock title="Апартаменты">
        <div className="apartment-list__head">
          <div className="apartment-list__filter-price">
            цена:
            <div className="filter price">
              <label htmlFor="start-price">от</label>
              <input id="start-price" className="" type="text"/>
            </div>
            <div className="filter price">
              <label htmlFor="end-price">до</label>
              <input id="end-price" className="" type="text"/>
            </div>
          </div>
          <div className="apartment-list__filter-price-item">
            район:
            <div className="filter district">
              <input id="district" className="" type="text"/>
            </div>
          </div>
        </div>
        <div className="apartment-list__main">
          <div className="apartment-list__items">
            {DATA.apartments.map((item, index) =>
                <ApartmentItem key={item.title} item={{...item, price: item.price + index}}/>
            )}
          </div>
        </div>
        <div className="apartment-list__food">
          <div onClick={()=>setLoading(!loading)}>
            <ButtonLoad isLoad={loading} className="small">показать еще</ButtonLoad>
          </div>
        </div>
      </LayoutBlock>
    </>
  );
};

export default Index;