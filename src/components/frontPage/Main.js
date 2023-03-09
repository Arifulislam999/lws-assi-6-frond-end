import React from "react";
import ProductList from "./ProductList";
import SideBar from "./SideBar";

function Main() {
  return (
    <div className="wrapper">
      <SideBar />
      <ProductList />
    </div>
  );
}

export default Main;
