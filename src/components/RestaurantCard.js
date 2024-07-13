import { CLOUDINARY_CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, sla, avgRating, cuisines } = resData?.info;
  return (
    <div className="w-80 bg-gray-200 p-5 rounded-xl mb-6 hover:bg-gray-300">
      <img
        src={`${CLOUDINARY_CDN_URL}${cloudinaryImageId}`}
        className="rounded-lg"
      />
      <h3 className="pt-4 text-lg font-bold">{name}</h3>
      <h4 className="">
        {avgRating} | {sla?.slaString}
      </h4>
      <div>{cuisines.join(",")}</div>
    </div>
  );
};

// Higher order component (Restaurant is open or not)
export const withOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <div className="absolute bg-black px-3 py-1 text-white">Opened</div>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
