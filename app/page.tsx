import {
  HeroSection,
  // NewArrivals,
  OurFeatures,
  Banner,
  Articles,
  Categories,
} from "@/components/homePageComponents";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Categories />
      {/* <NewArrivals /> */}
      <OurFeatures />
      <Banner />
      <Articles />
    </div>
  );
};

export default Home;
