import Room from "../../assets/images/rooms/room1.jpg";
import { Link } from "react-router-dom";

const id = {
  id1: "1bd9ae1e-cbdf-47ad-9556-48793baeda45",
  id2: "ae2a6598-9c92-4dc2-8fae-470e24bf0f9d",
  id3: "d7c4b07e-711f-419e-a989-eb14ad80043a",
};

function Rating() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-4">
          <div class="card shadow">
            <img class="card-img-top" src={Room} alt="homestay-bg-card" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to={`/homestay/${id.id3}`}>
                <button class="btn btn-primary">Learn more</button>
              </Link>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <img class="card-img-top" src={Room} alt="homestay-bg-card" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to={`/homestay/${id.id1}`}>
                <button class="btn btn-primary">Learn more</button>
              </Link>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <img class="card-img-top" src={Room} alt="homestay-bg-card" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to={`/homestay/${id.id2}`}>
                <button class="btn btn-primary">Learn more</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rating;
