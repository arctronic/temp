import { Stack } from "@chakra-ui/react";
import React from "react";
import { PageHeaderComponent } from "../components/page-header.component";
import { AboutUsComponent } from "../components/about-us.component";
import { PageFooterComponent } from "../components/page-footer.component";

interface AboutUsPageProps {}

export const AboutUsPage: React.FC<AboutUsPageProps> = () => {
  return (
    <Stack>
      <PageHeaderComponent />
      <AboutUsComponent />
      <PageFooterComponent />
    </Stack>
  );
};
