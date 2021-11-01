import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./Story.css";

function Story(props) {
  return (
      <div className="parentDiv">
    <div className="container-lg storyPadding">
        <img
        className="storyImage"
        alt="Product"
        src={process.env.PUBLIC_URL + "/newInternet.jpg"}
      />
      <h1 className="heading1">We help artisans tell stories to the world.</h1>
      <h2 className="heading2">Powered by NFT using Ethereum Blockchain</h2>
      <div className="paragraphDiv">
      <p className="paragraph">
        Every piece of art tells a story, and stories keep us alive. Hailing
        from the culturally dense land of Madhya Pradesh, India. We witnessed
        firsthand the art and craftsmanship around us. We knew that these were
        sacred traditions handed over from generations, and it was a struggle to
        keep them alive, especially when our society is moving towards
        digital-first. These were not mere trinkets used to decorate, but they
        carried memories and emotions, not only of the one who buys them but
        also of the craftsman who made them.
      </p>
      <p className="paragraph">
        But, unfortunately, the very art that helps us create memories may
        become a big nightmare for the artisans who produce it. Around the
        world, artisans are giving up their art and skills because they fail to
        compete with big factories and protect their intellectual property. At
        shortsqueeze, we wanted to bring a change in the world through
        technology. We aim at supporting artisans through promoting their talent
        and craft on a global platform and help them sustain their livelihood.
        We protect the intellectual property of the artist through NFT using
        Ethereum Blockchain. NFT are digital assets in the digital world which can be
        sold or resold . When you buy from us, you don't just get the art in its
        physical form but also a NFT of the art on Ethereum Blockchain.
      </p>
      <p className="paragraph">
        Help us make a difference in the world by supporting these artisans. We
        also accept cryptocurrency as a form of payment.
      </p>
      <p className="paragraph">
        -Built by Artists for the new internet
      </p>
      </div>
    </div>
    </div>
  );
}

export default Story;
