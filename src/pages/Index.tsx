
import React from "react";
import MainLayout from "@/layout/MainLayout";
import CaseSlider from "@/components/home/CaseSlider";
import RecentDrops from "@/components/home/RecentDrops";
import FeatureSection from "@/components/home/FeatureSection";
import CTA from "@/components/home/CTA";

const Index = () => {
  return (
    <MainLayout>
      <CaseSlider />
      <RecentDrops />
      <FeatureSection />
      <CTA />
    </MainLayout>
  );
};

export default Index;
