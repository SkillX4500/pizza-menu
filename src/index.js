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

const desc =
  "Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.";

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
  // const pizzas = [];
  const havePizza = pizzas.length > 0;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {havePizza ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzaData.map(pizza => (
              <Pizza key={pizza.name} pizzaObj={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <h1>We Sold Out! Come back later 😊</h1>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
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
        <Order closingHour={closingHour} openingHour={openingHour} />
      ) : (
        <p>
          Our store is available from {openingHour}:00 to {closingHour}:00.
        </p>
      )}
    </footer>
  );

  // return React.createElement("footer", null, "We are Open !");
}

function Order({ closingHour, openingHour }) {
  return (
    <div className="order">
      <p>
        We are open from {openingHour}:00 to {closingHour}:00. Come visit us or
        order online !
      </p>
      <button className="btn">Order Now</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
