import { useEffect, useState } from "react";
import { useCallback } from "react";
import { ListArtistURL, Host } from "./constants";
import LoadingImage from "./Loading";
import ArtistComponent from "./Components/ArtistComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./ArtistList.css";

function ArtisitList(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [artistList, setArtistList] = useState([]);

  const fetchArtistList = useCallback(async () => {
    try {
      const response = await fetch(ListArtistURL, {
        headers: {
          Accept: "*/*",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          Host: Host,
        },
      });
      if (!response.ok) {
        throw new Error("Response is not ok");
      }
      const data = await response.json();
      const responseArtistList = data.results.map((item) => {
        return (
          <ArtistComponent
            ArtistFirstName={item.first_name}
            ArtistLastName={item.last_name}
            ArtistStory={item.story}
            Category={item.category_name}
            SubCategory={item.sub_category_name}
          />
        );
      });
      setArtistList(responseArtistList);
      setIsLoading(false);
    } catch (error) {}
  }, []);

  useEffect(() => {
    fetchArtistList();
  }, [fetchArtistList]);

  return (
    <div>
      {isLoading === true ? (
        <LoadingImage Show={!isLoading} />
      ) : (
        <div className="ArtistListMainDiv">
      <div className="container-lg MarginForContainer">
        <h2 className="MadeByHashtagArtistList">#MadeBy</h2>
      </div>
      {artistList}
    </div>
      )}
    </div>
  );
}
export default ArtisitList;
