import Gallery from "../components/home/Gallery";
import HeroContent from "../components/home/HeroContent";

import OpportunitiesSection from "../components/home/OpportunitiesSection";
import Partners from "../components/home/Partners";
import StatsSection from "../components/home/stats-section";
import TeamSection from "../components/home/TeamSection";

const HomePage = () => {
  return (
    <div>
      {/* <HeroSection /> */}
      <HeroContent />
      <TeamSection />
      <OpportunitiesSection />
      <Gallery />
      <Partners />
      <StatsSection />
    </div>
  );
};

export default HomePage;
