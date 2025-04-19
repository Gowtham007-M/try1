
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import EventsList from "@/components/EventsList";
import TestimonialSection from "@/components/TestimonialSection";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeatureSection />
      <EventsList featured={true} />
      <TestimonialSection />
      <CallToAction />
    </Layout>
  );
};

export default Index;
