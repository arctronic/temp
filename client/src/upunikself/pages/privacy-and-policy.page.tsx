import { Stack } from "@chakra-ui/react";
import React from "react";
import { PageHeaderComponent } from "../components/page-header.component";
import { PrivacyAndPolicyComponent } from "../components/privacy-and-policy.component";
import { PageFooterComponent } from "../components/page-footer.component";

interface PrivacyAndPolicyPageProps {}

export const PrivacyAndPolicyPage: React.FC<PrivacyAndPolicyPageProps> = () => {
  return (
    <Stack>
      <PageHeaderComponent />
      <PrivacyAndPolicyComponent />
      <PageFooterComponent />
    </Stack>
  );
};
