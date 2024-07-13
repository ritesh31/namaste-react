import React from "react";
import { CLOUDINARY_CDN_URL } from "../utils/constants";

function Itemcard({ item }) {
  const { name, price, ratings, imageId, description } = item;
  
  return (
    <div className="flex justify-between border-b-2 pb-7 mt-6">
      <div className="flex flex-col">
        <span className="font-bold text-gray-600 text-lg">{name}</span>
        <span className="font-medium text-sm mb-2">${price / 100}</span>
        <span className="text-sm text-green-700 font-bold mb-2">
          *{ratings?.aggregatedRating?.rating}(5)
        </span>
        <span className="text-gray-500 text-sm">{description}</span>
      </div>
      <div className="flex flex-col">
        <img
          src={`${CLOUDINARY_CDN_URL}${imageId}`}
          className="rounded-lg w-72 h-32"
        />
        <button className="border-2 mt-3 font-bold text-green-700 rounded-lg bg-white py-1 shadow-sm">
          ADD
        </button>
      </div>
    </div>
  );
}

export default Itemcard;
