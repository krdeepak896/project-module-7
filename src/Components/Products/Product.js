import React from "react";
import "./ProductComp.css";
import Card from "./Card";

function Product() {
  const [data, setData] = React.useState({});

  let apiData = [];

  React.useEffect(() => {
    fetch(
      "https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    )
      .then((res) => res.json())
      .then((res) => {
        for (const item in res) {
          apiData.push(res[item]);
        }
        setData(apiData);
      });
      }, []);

  let allCards = "";

  if (data.length > 0) {
    allCards = data.map((item) => (
      <Card
        id={item.id}
        key = {item.id}
        name={item["productName"]}
        img={item["productImage"]}
        oldPrice={item["oldPrice"]}
        newPrice={item["newPrice"]}
      />
    ));
  }

  return (
    <div className="products-comp">
      <h3>Products</h3>
      <div className="all-cards">{allCards}</div>
    </div>
  );
}

export default Product;
