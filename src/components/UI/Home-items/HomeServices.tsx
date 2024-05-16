"use client";

import serviceLogo1 from "../../../assets/HomePageBannerImg/servicelogo1.png";
import serviceLogo2 from "../../../assets/HomePageBannerImg/servicelogo2.png";
import serviceLogo3 from "../../../assets/HomePageBannerImg/servicelogo3.png";
import serviceLogo4 from "../../../assets/HomePageBannerImg/servicelogo4.png";
import useInView from "@/Hooks/useInView";
import LeftToRight from "../Framer-motion/LeftToRight";
import BottomToTop from "../Framer-motion/BottomToTop";
import RightToLeft from "../Framer-motion/RightToLeft";

import ServiceCard from "../ServiceCard";

const HomeServiceComponent = () => {
  const { ref: ref1, isInView: isInView1, hasAnimated: hasAnimated1 } = useInView();
  const { ref: ref2, isInView: isInView2, hasAnimated: hasAnimated2 } = useInView();
  const { ref: ref3, isInView: isInView3, hasAnimated: hasAnimated3 } = useInView();
  const { ref: ref4, isInView: isInView4, hasAnimated: hasAnimated4 } = useInView();

  return (
    <section className="px-5 md:px-10">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 max-w-screen-2xl mx-auto justify-items-center items-center sm:grid-cols-1 gap-5 mt-5 extra-small-margin">
        
        <div ref={ref1}>
          {(isInView1 || hasAnimated1) && (
            <LeftToRight>
              <ServiceCard
                imageSrc={serviceLogo1}
                title="Amazing Value Every Day"
                description="Items prices that fit your budget"
                link="/accordian"
                linkText="Read more"
              />
            </LeftToRight>
          )}
        </div>

        <div ref={ref2}>
          {(isInView2 || hasAnimated2) && (
            <BottomToTop>
              <ServiceCard
                imageSrc={serviceLogo2}
                title="Successful Customer Service"
                description="We work with a focus on 100% customer satisfaction."
                link="/accordian"
                linkText="Read more"
              />
            </BottomToTop>
          )}
        </div>

        <div ref={ref3}>
          {(isInView3 || hasAnimated3) && (
            <BottomToTop>
              <ServiceCard
                imageSrc={serviceLogo3}
                title="All Payment Methods"
                description="Don't bother with payment details."
                link="/accordian"
                linkText="Read more"
              />
            </BottomToTop>
          )}
        </div>

        <div ref={ref4}>
          {(isInView4 || hasAnimated4) && (
            <RightToLeft>
              <ServiceCard
                imageSrc={serviceLogo4}
                title="Completely Free Shipping Service"
                description="Items prices that fit your budget"
                link="/accordian"
                linkText="Read more"
              />
            </RightToLeft>
          )}
        </div>

      </div>
    </section>
  );
};

export default HomeServiceComponent;
