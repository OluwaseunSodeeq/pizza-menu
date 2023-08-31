import React from "react";
function App() {
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

  return (
    <div className="container">
      <Header />
      <Menu pizzaData={pizzaData} />
      <Footer />
    </div>
  );
}
function Header() {
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu({ pizzaData }) {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numOfPizzas = pizzas.length;
  const condition = numOfPizzas > 0;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {condition ? (
        <React.Fragment>
          <p>Authentic Italian cuisine</p>
          <Pizza pizzaData={pizzas} />
        </React.Fragment>
      ) : (
        <>
          <p>We're still working on the menu, check back later. Thanks!</p>
        </>
      )}

      {/* conditional rendering with and opearator */}
      {/* {numOfPizzas > 0 && <Pizza pizzaData={pizzas} />} */}

      {/* conditional rendering with ternary opearator */}
    </main>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHours = 13;
  const closeHour = 22;
  const isOpen = hour >= openHours && hour <= closeHour;

  // return React.createElement("footer", null, "We are currently Open!")
  return (
    <footer className="footer">
      {isOpen ? <Order closeHour={closeHour} /> : <p>We're closed for today</p>}
    </footer>
  );
}
function Pizza({ pizzaData }) {
  const pizzas = pizzaData.map((pizza, i) => {
    // console.log(pizza.soldOut);
    // if (pizza.soldOut) return null;
    return (
      <div key={i + 1} className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
        <img src={pizza.photoName} alt={pizza.photoName} />
        <div>
          <h3>{pizza.name}</h3>
          <p>{pizza.ingredients}</p>
          <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
        </div>
      </div>
    );
  });

  return <div className="pizzas">{pizzas}</div>;
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We're open until {closeHour}:00. come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

export default App;
