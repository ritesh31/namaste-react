import { CLOUDINARY_CDN_URL } from "../utils/constants";

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
      <img src={`${CLOUDINARY_CDN_URL}${cloudinaryImageId}`} />
      <h3 className="mt-mb-5">{name}</h3>
      <h4 className="mt-mb-5">
        {rating} | {minDeliveryTime}-{maxDeliveryTime} mins
      </h4>
      <span>{cuisine.join(",")}</span>
    </div>
  );
};

export default RestaurantCard;
