import HomeSectionComponent from "@/components/UI/Home-items/BackgroundSection";
import CustomerServices from "@/components/UI/Home-items/CustomerService";
import HomeDealsComponent from "@/components/UI/Home-items/HomeDealsComponent";
import HomeServiceComponent from "@/components/UI/Home-items/HomeServices";
import HomePageBanner from "@/components/UI/Home-items/HomeSlider/HomeSlider";
import HomeSuperComponent from "@/components/UI/Home-items/HomeSuperComponent";
import TestimonialCarousel from "@/components/UI/Home-items/HomeTestimonial";

export default function Home() {
  return (
    <div>
      <HomePageBanner />
      <HomeServiceComponent />
      <HomeDealsComponent />
      <HomeSuperComponent />
      <HomeSectionComponent />
      {/* <HomeGoldTastmonial /> */}
      {/* <CustomerServices /> */}
      <TestimonialCarousel />
    </div>
  );
}
