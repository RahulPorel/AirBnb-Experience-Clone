import { useState } from "react";
export default function ReviewBtn() {
  let [isLiked, setIsLiked] = useState(false);
  let toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div>
      <p onClick={toggleLike}>
        {isLiked ? (
          <i className="fa-solid fa-heart heart-solid"></i>
        ) : (
          <i className="fa-regular fa-heart "></i>
        )}
      </p>
    </div>
  );
}
