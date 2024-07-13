import React, { useState } from "react";
import Itemcard from "./Itemcard";

function RestaurantCategory({ category, showItems, setCategoryIndex }) {
  const { title, itemCards } = category;
  // const [showItems, setShowItems] = useState(false);

  return (
    <div className="border-b-8 border-gray p-4 w-6/12 bg-gray-50">
      <div
        className="flex justify-between font-bold text-lg cursor-pointer"
        onClick={() => setCategoryIndex()}
      >
        <span>
          {title} ({itemCards?.length})
        </span>
        <span>^</span>
      </div>
      {showItems && (
        <div>
          {itemCards?.map((item) => (
            <Itemcard key={item?.id} item={item?.card?.info} />
          ))}
          <div></div>
        </div>
      )}
    </div>
  );
}

export default RestaurantCategory;
