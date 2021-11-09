import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./ArtistComponent.css";




function ArtistComponent(props){
    return(
    <div className="container-lg paddingForArtistComponent">
    <div className="row">
      <div className="col-md-6 ">
        <h2 className="ArtistComponentTitle">
          I AM {props.ArtistFirstName} {props.ArtistLastName}
        </h2>
        <h5 className="categoryHashtags">{`#${props.Category} #${props.SubCategory}`}</h5>
        <p className="ArtistComponentDescription">{props.ArtistStory}</p>
      </div>
      <div className="col-md-6">
        <img
        alt="Artist"
          className="ArtistComponentImage"
          src={props.ArtistImage}
        />
      </div>
    </div>
  </div>);
}

export default ArtistComponent;