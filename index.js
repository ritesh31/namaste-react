import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://fastly.picsum.photos/id/1041/200/200.jpg?hmac=1CDPtzGhHDqltV1i3b5YV4hY9UYY_6ubvXbxJO9QchQ" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const SearchBar = () => (
  <div className="search-bar">
    <input type="text" placeholder="Search..." />
    <button type="button">Search</button>
  </div>
);

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cloudinaryImageId,
    minDeliveryTime,
    maxDeliveryTime,
    rating,
    cuisine,
  } = resData;
  return (
    <div className="res-card">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h3 className="mt-mb-5">{name}</h3>
      <h4 className="mt-mb-5">
        {rating} | {minDeliveryTime}-{maxDeliveryTime} mins
      </h4>
      <span>{cuisine.join(",")}</span>
    </div>
  );
};

const restaurants = [
  {
    id: "1",
    name: "The Cozy Corner",
    cuisine: ["Italian"],
    rating: 4.5,
    minDeliveryTime: 25,
    maxDeliveryTime: 30,
    cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
  },
  {
    id: "2",
    name: "Spicy Dragon",
    cuisine: ["Szechuan Chinese"],
    rating: 4.8,
    minDeliveryTime: 25,
    maxDeliveryTime: 30,
    cloudinaryImageId: "53aa76734ecf3ab065ba3d65957cee0c",
  },
  {
    id: "3",
    name: "The Green Plate",
    cuisine: ["Vegan"],
    rating: 4.2,
    minDeliveryTime: 25,
    maxDeliveryTime: 30,
    cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  },
  {
    id: "4",
    name: "Burger Barn",
    cuisine: ["American"],
    rating: 4.0,
    minDeliveryTime: 25,
    maxDeliveryTime: 30,
    cloudinaryImageId: "iydxtay1mnne2ktw7txe",
  },
  {
    id: "5",
    name: "Sushi Paradise",
    cuisine: ["Japanese"],
    rating: 4.7,
    minDeliveryTime: 25,
    maxDeliveryTime: 30,
    cloudinaryImageId: "hfwa38io1akqusshdyug",
  },
  {
    id: "6",
    name: "Taco Fiesta",
    cuisine: ["Mexican"],
    rating: 4.3,
    minDeliveryTime: 25,
    maxDeliveryTime: 30,
    cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
  },
  {
    id: "7",
    name: "Le Petit Cafe",
    cuisine: ["French"],
    rating: 4.9,
    minDeliveryTime: 25,
    maxDeliveryTime: 30,
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/5d0c595a-dfb2-472b-8ca0-f4701adaa38d_752535.JPG",
  },
  {
    id: "8",
    name: "Flavors of India",
    cuisine: ["Indian"],
    rating: 4.4,
    minDeliveryTime: 25,
    maxDeliveryTime: 30,
    cloudinaryImageId: "iydxtay1mnne2ktw7txe",
  },
  {
    id: "9",
    name: "Kung Fu Kitchen",
    cuisine: ["Chinese"],
    rating: 4.1,
    minDeliveryTime: 25,
    maxDeliveryTime: 30,
    cloudinaryImageId: "53aa76734ecf3ab065ba3d65957cee0c",
  },
  {
    id: "10",
    name: "The Grill House",
    cuisine: ["Steakhouse"],
    rating: 4.6,
    minDeliveryTime: 25,
    maxDeliveryTime: 30,
    cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  },
];

const Body = () => (
  <div className="body">
    <SearchBar />
    <div className="restaurant-container">
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} resData={restaurant} />
      ))}
    </div>
  </div>
);

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
