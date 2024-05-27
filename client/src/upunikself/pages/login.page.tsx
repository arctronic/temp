import { Stack } from "@chakra-ui/react";
import React from "react";
import { LogInComponent } from "../components/log-in.component";

interface LoginPageProps {}

export const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <Stack>
      <LogInComponent />
    </Stack>
  );
};
