import React from 'react';
import LayoutBlock from "@/layouts/layout-block/LayoutBlock";
import ApartmentItem from "@/components/apartment-item/ApartmentItem";
import {DATA} from "@/common/data";
import ButtonLoad from "@/components/button-load/ButtonLoad";
import SearchField from "@/components/search-field/SearchField";

const Index = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [dropdownActive, setDropdownActive] = React.useState<boolean>(false);

  return (
    <>
      <LayoutBlock title="Апартаменты">
        <div className="apartment-list__search-field">
          <SearchField/>
        </div>
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

            <div onClick={()=>setDropdownActive(!dropdownActive)} className="filter district">
              <div>hello</div>
              <div className={["dropdown", dropdownActive ? "active" : ""].join(" ")}>
                {DATA.districts.map(item =>
                  <div className="dropdown__item" key={item.id}>{item.title}</div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="apartment-list__main">
          <div className="apartment-list__items">
            {DATA.apartments.map((item, index) =>
                <ApartmentItem key={item.id} item={{...item, price: item.price + index}}/>
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