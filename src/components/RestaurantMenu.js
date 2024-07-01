import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

function RestaurantMenu() {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);

  useEffect(async () => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    // Using promise ... then
    // const data = fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    // data.then((data) => data.json()).then((res) => console.log(res));

    // Using async & await
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1].card
      ?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} | {costForTwoMessage}
      </p>

      <ul>
        {itemCards?.map((item) => (
          <li key={item?.id}>
            {item?.card?.info?.name} | Rs. {item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
