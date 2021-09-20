import "./CardMain.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CardArtist = (props) => {
  return (
    <div className="cardArtist cardArtistImage">
      <div className="borderArtist">
        <h2 className="h2Artist">Al Pacino</h2>
      </div>
    </div>
  );
};

const CardMain = (props) => {
  return (
    <div className="container-sm rounded">
      <div class="row">
        <div class="col">
          <CardArtist />
        </div>
        <div class="col">
          <CardArtist />
        </div>
      </div>
    </div>
  );
};

export default CardMain;
