import { Stack } from "@chakra-ui/react";
import React from "react";
import { PageHeaderComponent } from "../components/page-header.component";
import { ExploreComponent } from "../components/explore.component";
import { PageFooterComponent } from "../components/page-footer.component";

interface ExplorePageProps {}

export const ExplorePage: React.FC<ExplorePageProps> = () => {
  return (
    <Stack>
      <PageHeaderComponent />
      <ExploreComponent />
      <PageFooterComponent />
    </Stack>
  );
};
