import React from "react";
import { Stack } from "@chakra-ui/react";
import { PageHeaderComponent } from "../components/page-header.component";
import { HeroComponent } from "../components/hero-component";
import { PageFooterComponent } from "../components/page-footer.component";
interface LandingPageProps {}

export const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <Stack>
      <PageHeaderComponent />
      <HeroComponent />
      <PageFooterComponent />
    </Stack>
  );
};
