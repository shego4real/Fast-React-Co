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

// The root or parent component
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
// Header component
function Header() {
  //   const style = { color: "red", fontSize: "42px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}
// Pizza Menu component
function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>This is a 6 dish cuisine made to nourish your soul and body</p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are currently working on our Menu</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Funghi"
        ingredients="Tomato, cheese, egg, mocarella"
        photoName="pizzas/funghi.jpg"
        price={13}
      />
      <Pizza
        name="Margherita"
        ingredients="Carbanero pepper, Milk, Lettuce, mocarella"
        photoName="pizzas/margherita.jpg"
        price={15}
      /> */}
    </main>
  );
}
// Footer component
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  //   if (hour >= openHour && hour <= closeHour) alert("We're Open");
  //   else {
  //     alert("We're closed");
  //   }
  return (
    <footer className="footer">
      {/* Used ternary operator */}
      {isOpen ? (
        <Order closeHours={closeHour} />
      ) : (
        <p>
          We're currently closed, but we're happy to have you between {openHour}
          : 00 and {closeHour} : 00
        </p>
      )}
    </footer>
  );
}

// Pizza component
function Pizza({ pizzaObj }) {
  // Using Multple returns
  // if (pizzaObj.soldOut === true) return null;
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
function Order({ closeHours }) {
  return (
    <div className="order">
      <p>We're open and taking orders till {closeHours} : 00. </p>
      <button className="btn">Order</button>
    </div>
  );
}
// React version 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
