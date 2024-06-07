import SearchBar from "./SearchBar";
import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
  const [resList, setResList] = useState(restaurants);

  const setFilteredList = () => {
    const filteredData = resList.filter((res) => res.rating > 4);
    setResList(filteredData);
  };

  return (
    <div className="body">
      <SearchBar />
      <button className="filter-btn" onClick={() => setFilteredList()}>
        Top Rated Restaurants
      </button>
      <div className="restaurant-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
