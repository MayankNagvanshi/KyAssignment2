import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


function App() {
  const [menuItems, setMenuItems] = useState(items);
  const allCategories = ["all", ...new Set(items.map((item) => item.category))];
  const [categories,setCategories] = useState(allCategories);
  const filterItems = (category)=>{ //very imp note this will help in filters
    //according to tags and all //also note the how to use filter , if inside
    //cnodition is true it returs that value.
    if(category==='all'){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item)=> item.category===category); //always take
    //original list to filter,since setMenuItems will change menuItems, and it will filter
    //from that , so whole content will never be dipalyed
    // setMenuItems = { newItems }; // changed menu items//wrong
    setMenuItems(newItems); //aise krte h 
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>CORE TEAM</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        {/* function passed as prop */}
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
