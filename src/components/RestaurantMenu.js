import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

function RestaurantMenu() {
  const { resId } = useParams();
  // const [resInfo, setResInfo] = useState(null);

  // useEffect(async () => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   // Using promise ... then
  //   // const data = fetch(
  //   //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   // );
  //   // data.then((data) => data.json()).then((res) => console.log(res));

  //   // Using async & await
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();
  //   setResInfo(json.data);
  // };

  const resInfo = useRestaurantMenu(resId);
  const [categoryIndex, setCategoryIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatings,
    locality,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1].card
      ?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) =>
        card.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="flex flex-col place-items-center mt-10">
      <div className="font-bold text-2xl mb-4">{name}</div>

      <div className="border-2 border-gray p-4 w-6/12 h-40 rounded-2xl shadow-2xl mb-8">
        <div className="mb-2">
          <span className="font-medium text-lg">
            *{avgRating} ({totalRatings}+ ratings) . {costForTwoMessage}
          </span>
          <span></span>
        </div>
        <div className="text-red-500 underline text-sm mb-2">Pizzas</div>
        <div className="text-sm mb-2">
          <span className="font-bold mr-6">Outlet</span>
          <span className="text-gray-500">{locality}</span>
        </div>
      </div>

      {/* Item types */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.title}
          category={category?.card?.card}
          showItems={index === categoryIndex}
          setCategoryIndex={() => setCategoryIndex(index)}
        />
      ))}
    </div>
  );
}

export default RestaurantMenu;
