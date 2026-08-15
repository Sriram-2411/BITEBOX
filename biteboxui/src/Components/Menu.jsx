import "./Menu.css";
import { useState } from "react";
import menuData from "../data/menuData";

function Menu() {

  const [category, setCategory] = useState("Starters");

  const filteredMenu = menuData.filter(
    (item) => item.category === category
  );

  return (
    <section className="menu">

      {/* Heading */}

      <div className="menu-title">

        <span>OUR MENU</span>

        <h2>
          Check Our <span>Yummy Menu</span>
        </h2>

      </div>

      {/* Category Buttons */}

      <div className="menu-tabs">

        <button
          className={category === "Starters" ? "active" : ""}
          onClick={() => setCategory("Starters")}
        >
          Starters
        </button>

        <button
          className={category === "Breakfast" ? "active" : ""}
          onClick={() => setCategory("Breakfast")}
        >
          Breakfast
        </button>

        <button
          className={category === "Lunch" ? "active" : ""}
          onClick={() => setCategory("Lunch")}
        >
          Lunch
        </button>

        <button
          className={category === "Dinner" ? "active" : ""}
          onClick={() => setCategory("Dinner")}
        >
          Dinner
        </button>

      </div>

      {/* Category Name */}

      <div className="menu-subtitle">

        <p>MENU</p>

        <h3>{category}</h3>

      </div>

      {/* Menu Cards */}

      <div className="menu-grid">

        {filteredMenu.map((item) => (

          <div className="food-card" key={item.id}>

            <img src={item.image} alt={item.name} />

            <h4>{item.name}</h4>

            <p>{item.desc}</p>

            <h5>₹ {item.price}</h5>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Menu;