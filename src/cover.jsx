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
                  <span className="ProblemHighlight">artists</span> and{" "}
                  <span className="ProblemHighlight">artisans</span> fail to
                  keep up with{" "}
                  <span className="ProblemHighlight">exploitation</span>,{" "}
                  <span className="ProblemHighlight">ideas stolen</span> and
                  eventually <span className="ProblemHighlight">losing</span>{" "}
                  their craft and skills.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="StoriesPadding">
        <div
          className="container-lg SolutionDIV"
          style={{
            background: `url('${process.env.PUBLIC_URL}/ArtSolution2.jpg')`,
          }}
        >
          <div className="d-flex justify-content-center SolutionPaddingContent">
            <h1 className="SolutionHeading">
              We <span className="ProblemHighlight">redefine</span> the artisnal
              and art industry through{" "}
              <span className="ProblemHighlight">unbelievable </span> power of{" "}
              <span className="ProblemHighlight">blockchain</span> technology
              using <span className="ProblemHighlight">NFT</span>
            </h1>
          </div>
          <div className="SolutionHashtagPadding">
            <h1 className="SolutionHashtag">#NoNeedOfLawyers</h1>
          </div>
          <div className="SolutionHashtagSecondPadding">
            <h1 className="SolutionHashtag">#NoMiddleMan</h1>
          </div>
        </div>
      </div>
      <div className="StoriesPadding">
        <div
          className="container-lg SolutionDIV"
          style={{
            background: `url('${process.env.PUBLIC_URL}/Cork.jpeg')`,
            backgroundSize: "cover",
          }}
        >
          <div className="d-flex justify-content-center SolutionPaddingContent">
            <h1 className="CustomerHeading">
              You can now own a{" "}
              <span className="CustomerHighlight">breathtaking</span> piece of{" "}
              <span className="CustomerHighlight">art</span> or{" "}
              <span className="CustomerHighlight">handicraft</span> directly
              from our listed{" "}
              <span className="CustomerHighlight">incredible</span> artists and
              artisans.
            </h1>
          </div>
          <div className="SolutionHashtagPadding">
            <h1 className="SolutionHashtag">#Exotic #UnbelievableQuality</h1>
          </div>
        </div>
      </div>
      <div className="StoriesPadding">
        <div
          className="container-lg SolutionDIV"
          style={{
            background: `url('${process.env.PUBLIC_URL}/Trust.jpg') center center / cover`,
          }}
        >
          <div className="d-flex justify-content-center SolutionPaddingContent">
            <h1 className="CustomerHeading">
              Building the metaverse just for you{" "}
              <span className="CustomerHighlight">you</span>. The{" "}
              <span className="CustomerHighlight">incredible</span> digital
              canvas for the <span className="CustomerHighlight">creators</span>
              . The <span className="CustomerHighlight">trusted</span> platform
              for the collectors
            </h1>
          </div>

          <div className="SolutionHashtagPadding">
            <h1 className="SolutionHashtag">#creators #you</h1>
          </div>
        </div>
      </div>
      <div className="StoriesPadding">
        <div
          className="container-lg SolutionDIV"
          style={{
            background: `linear-gradient(rgba(90,90,90,0.5), rgba(90,90,90,0.5)), url('${process.env.PUBLIC_URL}/BoxCover.jpg') center center / cover`,
            // backgroundSize: "cover",
            // backgroundPosition:"center center"
          }}
        >
          <div className="SolutionPaddingContent">
            <h1 className="CustomerHeading">What you get?</h1>
          </div>
          <div className="SolutionHashtagPadding">
            <h2 className="CustomerAnswer">
              After buying, You get a digital version of your art through{" "}
              <span className="CustomerHighlight">NFT</span>, which is unique to
              you and resell on Opensea or to a digital art collector. You also
              get art or handicraft in the physical version, which can be
              shipped to you{" "}
              <span className="CustomerHighlight">anywhere in the world.</span>{" "}
              We also accept ETH (cryptocurrency) as a form of payment.
            </h2>
          </div>
          <div className="SolutionHashtagPadding">
            <h1 className="SolutionHashtag">#Timeless #Forever</h1>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center footerTag">
        <h1 className="profileHeading">Oh. So. Pro!</h1>
      </div>
    </div>
  );
}

export default Cover;
