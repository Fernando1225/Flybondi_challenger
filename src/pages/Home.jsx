import FlightsList from "../components/FlightsList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Offer from "../components/Offer";
import Banner from "../components/Banner";
import AboutSectionRight from "../components/AboutSectionRight";
import AboutSectionLeft from "../components/AboutSectionLeft";

const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <Banner />
      <FlightsList />
      <AboutSectionLeft
        title="Unmatched Global Travel: Journey with Our Top-Rated Aircraft for Ultimate Comfort and Efficiency"
        imageURL="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fviatrolebus.com.br%2Fwp-content%2Fuploads%2F2020%2F01%2FFlybondi.jpg&f=1&nofb=1&ipt=0717643b13b6644fe70caf9d5894bad59d0325a61e9422ebf495f69c6295e381&ipo=images"
      />
      <AboutSectionRight />
      <AboutSectionLeft
        title="Experience Affordable and Quality Air Travel with Budget Airlines"
        imageURL="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.reportur.com%2Fwp-content%2Fuploads%2F2019%2F02%2FFlybondi-550x337.png&f=1&nofb=1&ipt=6bc80d9e465a4bdfad45d60d05a81380006da818013115083f196c8a6aa3e016&ipo=images"
      />
      <Offer />
      <Footer />
    </>
  );
};

export default Home;
