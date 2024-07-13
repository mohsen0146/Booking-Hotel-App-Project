import { Link, useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useHotels } from "../context/HotelsProvider";

function Hotels() {
  const navigate = useNavigate();
  const { isLoading, hotels, currentHotel } = useHotels();
  if (isLoading) return <Loader />;
  return (
    <div>
      <div className="buttons">
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
          className="btn btn--back"
        >
          &larr; Back
        </button>
      </div>
      <div className="searchList">
        <h2>Search Results ({hotels.length})</h2>
        {hotels.map((item) => {
          return (
            <Link
              key={item.id}
              to={`/hotels/${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
            >
              <div
                className={`searchItem ${
                  item.id === currentHotel?.id ? "current-hotel" : ""
                }`}
              >
                <img src={item.xl_picture_url} alt={item.name} />
                <div className="searchItemDesc">
                  <p className="location">{item.smart_location}</p>
                  <p className="name">{item.name}</p>
                  <p className="price">
                    € &nbsp;{item.price}&nbsp;
                    <span>night</span>
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Hotels;
