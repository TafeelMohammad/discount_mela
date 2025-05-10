import React, { useState } from 'react';
import './sidebar.css';

const menuItems = [
  { name: 'Home' },
  { name: "Today's Exclusive Offers" },
  {
    name: 'Electronics',
    subCategories: ['Mobiles', 'Laptops', 'Cameras'],
  },
  {
    name: 'Groceries',
    subCategories: ['Fruits', 'Vegetables', 'Snacks'],
  },
  {
    name: "Men's Fashion",
    subCategories: ['Shirts', 'Jeans', 'Shoes'],
  },
  {
    name: "Women's Fashion",
    subCategories: ['Dresses', 'Handbags', 'Jewelry'],
  },
];

function Sidebar({ isOpen, toggleSidebar }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSubMenu = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      {menuItems.map((item, index) => (
        <div
          className="menu-item"
          key={index}
          onClick={() => item.subCategories && toggleSubMenu(index)}
        >
          <span>{item.name}</span>
          {item.subCategories && activeIndex === index && (
            <div className="submenu">
              {item.subCategories.map((sub, subIndex) => (
                <div className="submenu-item" key={subIndex}>
                  {sub}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
