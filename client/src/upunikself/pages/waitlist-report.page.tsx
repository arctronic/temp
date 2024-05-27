import { Stack } from "@chakra-ui/react";
import React from "react";
import { WaitlistReportComponent } from "../components/waitlist-report.component";

interface WaitlistReportPageProps {}

export const WaitlistReportPage: React.FC<WaitlistReportPageProps> = () => {
  return (
    <Stack>
      <WaitlistReportComponent />
    </Stack>
  );
};
