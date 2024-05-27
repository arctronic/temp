import { Stack } from "@chakra-ui/react";
import React from "react";
import { WaitlistComponent } from "../components/waitlist.component";
import { PageHeaderComponent } from "../components/page-header.component";
import { PageFooterComponent } from "../components/page-footer.component";

interface WaitlistPageProps {}

export const WaitlistPage: React.FC<WaitlistPageProps> = () => {
  return (
    <Stack>
      <PageHeaderComponent />
      <WaitlistComponent />
      <PageFooterComponent />
    </Stack>
  );
};
