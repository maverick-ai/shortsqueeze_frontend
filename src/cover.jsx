import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./styles.css";
import ListProductComponent from "./Components/ListProductComponent";

function Cover(prop) {
  return (
    <div
      className="divOfCoverPage"
      style={{ display: prop.Show ? "block" : "none" }}
    >
      <img
        onLoad={prop.LoadEvent}
        className="coverImageStyle"
        alt="Flower pot"
        src={process.env.PUBLIC_URL + "/cover.jpg"}
      />
      <div className="coverTextDiv">
        <h1 className="coverHeading1">Artisan's</h1>
        <h1 className="coverHeading">Voice</h1>
      </div>
      <div className="StoriesPadding">
        <div
          className="container-lg Stories"
          style={{
            background: `url('${process.env.PUBLIC_URL}/StoriesIntro.jpg')`,
          }}
        >
          <h1 className="StoryTitle">We believe that Art tells stories.</h1>
          <h2 className="StorySubTitle">not just of artist but also of you.</h2>
          <h4 className="StorySubSubTitle">#ThinkDifferent</h4>
        </div>
      </div>
      <div className="StoriesPadding">
        <div className="container-lg ProblemDIV">
          <div className="row">
            <div className="col-lg-6">
              <img
                className="ProbleImage"
                alt="the genius"
                src={process.env.PUBLIC_URL + "/ArtTellsStories.jpg"}
              />
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="d-flex justify-content-center ProblemPaddingContent">
                <h1 className="ProblemHeading">
                  All around the world,{" "}
                  <span className="ProblemHighlight">artist</span> and{" "}
                  <span className="ProblemHighlight">artisans</span> fail to
                  keep up with{" "}
                  <span className="ProblemHighlight">exploitation</span>,{" "}
                  <span className="ProblemHighlight">ideas stolen</span> and end
                  up losing their craft and skills.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="StoriesPadding">
        <div className="container-lg SolutionDIV" style={{
            background: `url('${process.env.PUBLIC_URL}/ArtSolution2.jpg')`,
          }}>
          <div className="d-flex justify-content-center ProblemPaddingContent">
            <h1 className="SolutionHeading">
              We <span className="ProblemHighlight">redefine</span> the artisnal
              and art industry through{" "}
              <span className="ProblemHighlight">unbelievable </span> power of{" "}
              <span className="ProblemHighlight">blockchain</span> technology
              using <span className="ProblemHighlight">NFT</span>
            </h1>
          </div>
          <div className="d-flex justify-content-center ProblemPaddingContent">
            <h2 className="ProblemSUbHeading">
              We <span className="ProblemHighlight">redefine</span> the artisnal
              and art industry through{" "}
              <span className="ProblemHighlight">unbelievable </span> power of{" "}
              <span className="ProblemHighlight">blockchain</span> technology
              using <span className="ProblemHighlight">NFT</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <h1 className="profileHeading">oh so Pro!</h1>
      </div>
    </div>
  );
}

export default Cover;
