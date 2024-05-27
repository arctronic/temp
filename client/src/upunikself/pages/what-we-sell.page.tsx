import React from "react";
import { PageHeaderComponent } from "../components/page-header.component";
import { PageFooterComponent } from "../components/page-footer.component";
import { WhatWeSellComponent } from "../components/what-we-sell.component";
import { Stack } from "@chakra-ui/react";

interface WhatWeSellPageProps {}

export const WhatWeSellPage: React.FC<WhatWeSellPageProps> = () => {
  return (
    <Stack>
      <PageHeaderComponent />
      <WhatWeSellComponent />
      <PageFooterComponent />
    </Stack>
  );
};
