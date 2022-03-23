import { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard"

const ItemCardContainer = ({productData}) => {
  return (
    <ItemCard productData={productData}/>
  );
};

export default ItemCardContainer;