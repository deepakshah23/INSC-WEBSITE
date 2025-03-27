import Gallery from "../components/home/Gallery";
import HeroSection from "../components/home/HeroSection";
import OpportunitiesSection from "../components/home/OpportunitiesSection";
import Partners from "../components/home/Partners";
import StatsSection from "../components/home/stats-section";
import TeamSection from "../components/home/TeamSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <TeamSection />
      <OpportunitiesSection />
      <Gallery />
      <Partners />
      <StatsSection />
    </div>
  );
};

export default HomePage;
