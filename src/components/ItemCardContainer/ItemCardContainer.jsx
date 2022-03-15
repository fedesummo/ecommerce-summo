import { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard"

const ItemCardContainer = ({productData}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  useEffect(
    () => { console.log(isExpanded) },
    [isExpanded] 
  );
  return (
    <ItemCard productData={productData} isExpanded={isExpanded} setIsExpanded={setIsExpanded}/>
  );
};

export default ItemCardContainer;