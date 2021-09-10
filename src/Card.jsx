import react from "react";
import "./styles.css";

const CardArtist = (props) => {
  return (
    <div className="cardArtist cardArtistImage">
      <div class="borderArtist">
        <h2 className="h2Artist">{props.name}</h2>
      </div>
    </div>
  );
};

export default CardArtist;
