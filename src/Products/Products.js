



import React, { useState } from "react";
import Card from "./Card";
import './Products.css';
import Navbar from "../Navbar/Navbar";
import Products1 from '../Assets/Products/Products1.jpg';
import Products2 from '../Assets/Products/Products2.jpg';
import Products3 from '../Assets/Products/Product3.jpg';
import Products4 from '../Assets/Products/Product4.jpg';
import Products5 from '../Assets/Products/Product5.jpg';
import Products6 from '../Assets/Products/Product6.png';
import Products7 from '../Assets/Products/DialysisEquipments1.jpg';
import Products8 from '../Assets/Products/DialysisEquipments2.jpg';
import Products9 from '../Assets/Products/DialysisEquipments3.png';
import Products10 from '../Assets/Products/DialysisEquipments4.png';
import Products11 from '../Assets/Products/Ventilator1.jpg';
import Products12 from '../Assets/Products/Ventilator2.jpg';
import Products13 from '../Assets/Products/AnesthesiaMachine1.jpg';
import Products14 from '../Assets/Products/AnesthesiaMachine2.jpg';
import Products15 from '../Assets/Products/AnesthesiaMachine3.jpg';

const data = [
  {
    id: 1,
    title: "SWS 4000A New Dialysis Machine",
    description: "Description 1",
    category: "Dialysis Products",
    subcategory: "Dialysis Machines",
    image: Products1 
  },
  {
    id: 2,
    title: "Card 2",
    description: "Description 2",
    category: "Dialysis Products",
    subcategory: "Dialysis Machines",
    image: Products2 
  },
  {
    id: 3,
    title: "Refurbished Fresenius 4008S NG Dialysis Machine",
    description: "Description 2",
    category: "Dialysis Products",
    subcategory: "Dialysis Machines",
    image: Products3 
  },
  {
    id: 4,
    title: "SWS 4000A New Dialysis Machine",
    description: "Product Description",
    category: "Dialysis Products",
    subcategory: "Dialysis Machines",
    image: Products4 
  },
  {
    id: 5,
    title: "Refurbished Fresenius 4008S Dialysis Machine",
    description: "Description 2",
    category: "Dialysis Products",
    subcategory: "Dialysis Machines",
    image: Products5 
  },
  {
    id: 6,
    title: "Refurbished BBraun Dialog+ Plus Dialysis Machine",
    description: "Description 2",
    category: "Dialysis Products",
    subcategory: "Dialysis Machines",
    image: Products6 
  },
  {
    id: 7,
    title: "RO Plant for Dialysis ",
    description: "Description 2",
    category: "Dialysis Products",
    subcategory: "Dialysis Equipments",
    image: Products7 
  },
  {
    id: 8,
    title: "Fully Automatic Comfort Dialysis Chair",
    description: "Description 2",
    category: "Dialysis Products",
    subcategory: "Dialysis Equipments",
    image: Products8 
  },
  {
    id: 9,
    title: "5 Function Electric Dialysis ICU Bed",
    description: "Description 2",
    category: "Dialysis Products",
    subcategory: "Dialysis Equipments",
    image: Products9 
  },
  {
    id: 10,
    title: "Diaclean Dialyzer Reprocessor Machine",
    description: "Description 2",
    category: "Dialysis Products",
    subcategory: "Dialysis Equipments",
    image: Products10 
  },
  {
    id: 11,
    title: "Diaclean Dialyzer Reprocessor Machine",
    description: "Description 2",
    category: "Criticare Products",
    subcategory: "Ventilator",
    image: Products11
  },
  {
    id: 12,
    title: "Diaclean Dialyzer Reprocessor Machine",
    description: "Description 2",
    category: "Criticare Products",
    subcategory: "Ventilator",
    image: Products12 
  },
  {
    id: 13,
    title: "Diaclean Dialyzer Reprocessor Machine",
    description: "Description 2",
    category: "Criticare Products",
    subcategory: "Anesthesia Machine",
    image: Products13 
  },
  {
    id: 14,
    title: "Diaclean Dialyzer Reprocessor Machine",
    description: "Description 2",
    category: "Criticare Products",
    subcategory:"Anesthesia Machine",
    image: Products14 
  },
  {
    id: 15,
    title: "Diaclean Dialyzer Reprocessor Machine",
    description: "Description 2",
    category: "Criticare Products",
    subcategory:"Anesthesia Machine",
    image: Products15 
  }
];

const categories = Array.from(new Set(data.map(product => product.category)));

const subcategories = {
  "Dialysis Products": ["Dialysis Machines", "Dialysis Equipments"],
  "Criticare Products": ["Ventilator","Anesthesia Machine"],
  "Category 4": ["Subcategory A"]
};

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedSubcategory("All"); // Reset subcategory when category changes
  };

  const handleSubcategoryChange = (e) => {
    setSelectedSubcategory(e.target.value);
  };

  const filteredCards = data.filter(
    (card) =>
      (selectedCategory === "All" || card.category === selectedCategory) &&
      (selectedSubcategory === "All" || card.subcategory === selectedSubcategory)
  );

  return (
    <div>
      <Navbar />
      <br /><br /><br /><br />
      <div className="filter-container2">
        <select onChange={handleCategoryChange} value={selectedCategory}>
          <option value="All">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {selectedCategory !== "All" && subcategories[selectedCategory] && (
          <select onChange={handleSubcategoryChange} value={selectedSubcategory}>
            <option value="All">All Subcategories</option>
            {subcategories[selectedCategory].map((subcategory) => (
              <option key={subcategory} value={subcategory}>
                {subcategory}
              </option>
            ))}
          </select>
        )}

        <div className="card-container1">
          {filteredCards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              category={card.category}
              image={card.image} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
