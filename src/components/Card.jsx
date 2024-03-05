import ReviewBtn from "./ReviewBtn";

export default function Card(prop) {
  let badgeText;
  if (prop.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (prop.location === "Online") {
    badgeText = "ONLINE";
  }
  console.log(prop);
  return (
    <div className="card">
      {badgeText && <div className="card--badge ">{badgeText}</div>}
      <img src={prop.coverImg} className="card-img" />
      <div className="card-stats">
        <ReviewBtn />
    
        {/* red-heart */}
      
        <span>{prop.rating}</span>
        <span className="gray">{prop.reviewCount} &nbsp; • &nbsp;</span>
        <span className="gray">{prop.location}</span>
      </div>
      <p className="title">{prop.title}</p>
      <p>
        <span className="bold">From ${prop.price}</span>
      </p>
    </div>
  );
}
