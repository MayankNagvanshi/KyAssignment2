import React from 'react';

const Menu = ({items}) => { // this  items is not orginial list ,it is menu items state variable(prop)
  return (
    <div className='section-center'>
      {items.map((menuItem)=>{
        const {id,title,img,desc,price,flink,glink,llink} = menuItem;
        return( //map ke andar ofcourse ek return rakhoge//bar bar iterate hoge value dega ye
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className='price'>{price}</h4>
              </header>
              <div className="item-text">{desc}</div>
              
              {/* Data me hme link dalne pdenge profile ke aur yhn destructure krke dalna pdega
              hme Taki hr bande ke liye uske Specific link Khule,Done bs data change krdo whn se Ab */}
              <div className="item-text">
                  <a href={flink} target="_blank"> Facebook  </a>
                  <a href={glink} target="_blank"> Email </a>
                  <a href={llink} target="_blank">  LinkedIn </a>
                </div>
              
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
