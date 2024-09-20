import {
  HeroSection,
  OurFeatures,
  Banner,
  Articles,
  Categories,
  BestSeller,
} from "@/components/homePageComponents";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Categories />
      <BestSeller />
      <OurFeatures />
      <Banner />
      <Articles />
    </div>
  );
};

export default Home;
