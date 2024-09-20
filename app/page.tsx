import {
  HeroSection,
  // NewArrivals,
  OurFeatures,
  Banner,
  Articles,
  Categories,
} from "@/components/homePageComponents";
import NewArrivals from "@/components/homePageComponents/newArrivals/NewArrivals";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Categories />
      <NewArrivals />
      <OurFeatures />
      <Banner />
      <Articles />
    </div>
  );
};

export default Home;
