import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useHotels } from "../context/HotelsProvider";
import { useEffect } from "react";

function SingleHotel() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getHotel, isLoadingCurrHotel, currentHotel } = useHotels();

  useEffect(() => {
    getHotel(id);
  }, [id]);

  if (isLoadingCurrHotel || !currentHotel) return <Loader />;

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
      <div className="room">
        <div className="roomDetail">
          <h2>{currentHotel.name}</h2>
          <div>
            {currentHotel.number_of_reviews} reviews &bull;{" "}
            {currentHotel.smart_location}
          </div>
          <img src={currentHotel.xl_picture_url} alt={currentHotel.name} />
        </div>
      </div>
    </div>
  );
}

export default SingleHotel;
