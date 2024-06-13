import { CLOUDINARY_CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, sla, avgRating, cuisines } = resData?.info;
  return (
    <div className="res-card">
      <img src={`${CLOUDINARY_CDN_URL}${cloudinaryImageId}`} />
      <h3 className="mt-mb-5">{name}</h3>
      <h4 className="mt-mb-5">
        {avgRating} | {sla?.slaString}
      </h4>
      <div>{cuisines.join(",")}</div>
    </div>
  );
};

export default RestaurantCard;
