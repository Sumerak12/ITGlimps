// pages/index.jsx or app/page.jsx
import Header from '../components/Home/Header';
import Footer from '../components/Shared/Footer';
import RecentPost from '../components/Home/recentpost';
import ImageSlider from '../components/Home/ImageSlider';
import TeamRoundCards from '../components/Home/TeamCard';
import Newsletter from '../components/Home/subscription';
import HeroSection from '../components/Home/HeroSection';
import AutoSlider from '@/components/Home/blogSlider';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ImageSlider />
      <div className="container mx-auto px-4">
        <RecentPost />
      </div>
      <Newsletter />
      <AutoSlider/>
      <TeamRoundCards />
      <Footer />
    </>
  );
}
