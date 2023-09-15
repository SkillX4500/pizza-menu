import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>React Pizzaria Ltd.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const havePizza = pizzas.length > 0;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {havePizza ? (
        <ul className="pizzas">
          {pizzaData.map(pizza => (
            <Pizza key={pizza.name} {...pizza} />
          ))}
        </ul>
      ) : (
        <h1>We Sold Out! Come back later.</h1>
      )}
    </main>
  );
}

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openingHour = 10;
  const closingHour = 20;
  const isOpen = hour >= openingHour && hour <= closingHour;

  // if (!isOpen) {
  //   return <p>
  //   Our store is available from {openingHour}:00 to {closingHour}:00.
  // </p>
  // }

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We are open till {closingHour}:00. Come visit us or order online !
          </p>
          <button className="btn">Order Now</button>
        </div>
      ) : (
        <p>
          Our store is available from {openingHour}:00 to {closingHour}:00.
        </p>
      )}
    </footer>
  );

  // return React.createElement("footer", null, "We are Open !");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
