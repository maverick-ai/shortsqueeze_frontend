import ArtistComponent from "./Components/ArtistComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./ArtistList.css";

function ArtisitList(props) {
  return (
    <div className="ArtistListMainDiv">
      <div className="container-lg MarginForContainer">
        <h2 className="MadeByHashtagArtistList">#MadeBy</h2>
      </div>
      <ArtistComponent
        ArtistFirstName="erghrth"
        ArtistLastName="rfghrgh"
        ArtistStory="rgrgfnh"
        Category="Metal"
        SubCategory="Dokra"
      />
    </div>
  );
}
export default ArtisitList;
