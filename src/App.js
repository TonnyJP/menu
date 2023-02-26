import React from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [ menus, setMenus ] = React.useState(items);

  const allCategories = new Set( items.map((item) => {
      return item.category
    }))

  const categoryList = ["all",...allCategories()];

  const filterMenu = (category) =>{
     if(category === "all"){
      setMenus(items);
      return
     }
     const newMenuList = items.filter((menu) => menu.category === category)
     setMenus(newMenuList);
  }

  return (
  <main className='menu' >
    <div className='container'>
      <section className='title' >
        <h1>Our menu</h1>
        <div className='underline'/>
      </section>
      <section className='btn-container'>
        {categoryList.map((cat,idx) => {
          return <Categories key={idx} title={cat} setCategorie = {filterMenu}/>
        })}
      </section>
      <section className='section-center'>
        {menus.map((menu) => {
          return <Menu key={menu.id} {...menu} />
        })}
      </section>
    </div>
  </main>)
}

export default App;
