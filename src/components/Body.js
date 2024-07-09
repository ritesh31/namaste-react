import { useState, useEffect } from "react";

import SearchBar from "./SearchBar";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setResList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredResList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const setTopResList = () => {
    const filteredData = resList.filter((res) => res?.info?.avgRating > 4);
    setResList(filteredData);
  };

  const onHandleSearchText = (searchText) => {
    let data = resList.filter((res) =>
      res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredResList(data);
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <h1>
        Looks like you're offline !! Please check your internet connection
      </h1>
    );
  }
  return resList?.length <= 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-container flex m-4 place-content-evenly">
        <SearchBar handleSearchText={onHandleSearchText} />
        <button
          className="filter-btn bg-pink-200 p-3 rounded-lg hover:bg-pink-300"
          onClick={() => setTopResList()}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container flex flex-wrap place-content-around">
        {filteredResList?.length > 0 &&
          filteredResList?.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={`/restaurants/${restaurant?.info?.id}`}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;
