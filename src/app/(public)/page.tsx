
import HomePageBanner from '@/components/UI/Home-items/HomeSlider';
import HomeSectionComponent from '@/components/UI/Home-items/SeasonUpdate';
import HeroSection from '@/components/UI/Home-items/HeroSection';
import HomeDealsComponent from '@/components/UI/Home-items/HomeDealsComponent';
import HomeServiceComponent from '@/components/UI/Home-items/HomeServices';
import HomeSuperComponent from '@/components/UI/Home-items/HomeSuperComponent';
import TestimonialCarousel from '@/components/UI/Home-items/HomeTestimonial';
import LatestCollection from '@/components/UI/Home-items/LatestCollection';
import { Metadata } from 'next';
import FooterHero from '@/components/UI/Home-items/FooterHero';
import HomeModal from '@/components/UI/Home-items/HomeModal';


export const metadata: Metadata = {
  title: "Trendy Fashion / home",
  description: "This is home page. Latest product, hero section, deals of the week",
};

const fetchSliders = async () => {
  try {
    const response = await fetch('https://trendy-fashion-server.vercel.app/api/v1/slider', {
      next: { revalidate: 10 } 
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching sliders:', error);
    return []; 
  }
};
const fetchSlidersHero = async () => {
  try {
    const response = await fetch('https://trendy-fashion-server.vercel.app/api/v1/slider_hero', {
      next: { revalidate: 10 } 
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching sliders:', error);
    return []; 
  }
};
const fetchOfferModal = async () => {
  try {
    const response = await fetch('https://trendy-fashion-server.vercel.app/api/v1/modal', {
      next: { revalidate: 10 } 
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching sliders:', error);
    return []; 
  }
};
const fetchLatestHero = async () => {
  try {
    const response = await fetch('https://trendy-fashion-server.vercel.app/api/v1/latest_section', {
      next: { revalidate: 10 } 
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching sliders:', error);
    return []; 
  }
};
const fetchHeroSection = async () => {
  try {
    const response = await fetch('https://trendy-fashion-server.vercel.app/api/v1/hero_section', {
      next: { revalidate: 10 } 
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching sliders:', error);
    return []; 
  }
};
const fetchDealSection = async () => {
  try {
    const response = await fetch('https://trendy-fashion-server.vercel.app/api/v1/deal_section', {
      next: { revalidate: 10 } 
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching sliders:', error);
    return []; 
  }
};

export default async function Home() {
  const sliders = await fetchSliders();
  const sliderHero=await fetchSlidersHero();
  const offerModal=await fetchOfferModal();
  const latestHero=await fetchLatestHero();
  const heroSection=await fetchHeroSection();
  const dealSection=await fetchDealSection();

  return (
    <div>
      <HomePageBanner sliders={sliders?.data} hero={sliderHero?.data}/>
      <HomeServiceComponent />
      <HomeModal offer={offerModal.data}/>
      <LatestCollection latestHero={latestHero?.data}/>
      <HeroSection hero_section={heroSection?.data}/>
      <HomeDealsComponent deal_section={dealSection?.data}/>
      {/* <HomeSuperComponent /> */}
      <HomeSectionComponent />
      {/* <EcommerceStats /> */}
      <TestimonialCarousel />
      <FooterHero/>
    </div>
  );
}
