import { Stack } from "@chakra-ui/react";
import React from "react";
import { PageHeaderComponent } from "../components/page-header.component";
import { TermsOfUseComponent } from "../components/terms-of-use.component";
import { PageFooterComponent } from "../components/page-footer.component";
import { PrivacyAndPolicyComponent } from "../components/privacy-and-policy.component";

interface TermsOfUsePageProps {}

export const TermsOfUsePage: React.FC<TermsOfUsePageProps> = () => {
  return (
    <Stack>
      <PageHeaderComponent />
      <TermsOfUseComponent />
      <PrivacyAndPolicyComponent />
      <PageFooterComponent />
    </Stack>
  );
};
