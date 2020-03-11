import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";

let personStyle = {
  color: "gold",
  border: "2px solid cyan",
  margin: "20px",
  padding: "20px",
  borderRadius: "20px",
  width: "400px",
  height: "150px"
};

/*
=================
End Of App
=================
*/

function App() {
  const nayoks = ["anwar", "jafor", "alamgir", "salman"];

  const products = [
    { name: "photoshop", price: "$99.96" },
    { name: "illistrator", price: "$21.56" },
    { name: "pdf", price: "10.33" },
    { name: "Ux/Ui", price: "100.33" }
  ];

  const nayokName = nayoks.map(nayok => nayok);

  const friends = [
    { name: "minhaz", age: 28, gender: "M" },
    { name: "Thithy", age: 22, gender: "F" },
    { name: "Hasib", age: 23, gender: "M" }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <User></User>
        {friends.map(fr => (
          <FriendsDetails friend={fr}></FriendsDetails>
        ))}
        <ul>
          {nayoks.map(nayok => (
            <li>{nayok}</li>
          ))}

          {products.map(product => (
            <li>
              {product.name} {product.price}
            </li>
          ))}
        </ul>

        {/* <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product> */}
        {products.map(product => (
          <Product product={product}></Product>
        ))}

        {nayoks.map(nayok => (
          <Nayok nayok={nayok}></Nayok>
        ))}
      </header>
    </div>
  );
}
/*
=================
End Of App
=================
*/
function User() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h3>Dynamic User{users.length}</h3>

      <ul>
        {users.map(user => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  // const handelIncrease = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // };

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

function FriendsDetails(props) {
  const friendStyle = {
    border: "2px solid green",
    borderRadius: "5%",
    width: "400px",
    height: "300px",
    margin: "20px"
  };

  const { name, age, gender } = props.friend;
  return (
    <div style={friendStyle}>
      <h5>Name :{name} </h5>
      <h5>Name : {age}</h5>
      <h6>Gender : {gender}</h6>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "7px",
    backgroundColor: "#333",
    color: "#eee",
    height: "200px",
    width: "200PX",
    float: "left",
    margin: "10px"
  };
  const { name, price } = props.product;
  return (
    // <div style={productStyle}>
    //   <h5>Name : {props.name}</h5>
    //   <h3>Price : {props.price}</h3>
    //   <button>Buy Now</button>
    // </div>
    <div style={productStyle}>
      <h5>Name : {name}</h5>
      <h3>Price : {price}</h3>
      <button>Buy Now</button>
    </div>
  );
}

function Nayok(props) {
  return (
    <div style={personStyle}>
      <h3>Name : {props.nayok}</h3>
    </div>
  );
}

function Person(props) {
  return (
    <div style={personStyle}>
      <h3>Name : {props.name}</h3>
      <h3>job : {props.job}</h3>
    </div>
  );
}

export default App;
