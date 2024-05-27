import { Stack } from "@chakra-ui/react";
import React from "react";
import { PageHeaderComponent } from "../components/page-header.component";
import { PageFooterComponent } from "../components/page-footer.component";
import { WorkInProgressComponent } from "../components/work-in-progress.component";

interface WorkInProgressPageProps {}

export const WorkInProgressPage: React.FC<WorkInProgressPageProps> = () => {
  return (
    <Stack>
      <PageHeaderComponent />
      <WorkInProgressComponent />
      <PageFooterComponent />
    </Stack>
  );
};
