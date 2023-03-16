import React from 'react';
const DATA = {
  categories: [
    "Все",
    "Апартаменты",
    "Районы",
  ]
}

const Intro = () => {
  const [activeCategory, setActiveCategory] = React.useState<string>();

  return (
      <div className="intro-wrapper">
        <div className="intro">
          <div className="intro__title">
            Lorem ipsum dolor.
          </div>
          <div className="intro__subtitle">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </div>
          <div className="intro__district-items">
            {DATA.categories.map(cat =>
              <div onClick={()=>{setActiveCategory(cat)}}
                   key={cat} className={`intro__district-item ${activeCategory==cat && 'active'}` }>
                {cat}
              </div>
            )}
          </div>
          <div className="intro__search-field">
            <input type="text"/>
            <button>Поиск</button>
          </div>
        </div>
      </div>
  );
};

export default Intro;