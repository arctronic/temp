import { Stack } from "@chakra-ui/react";
import React from "react";
import { RegisterComponent } from "../components/register.component";

interface RegisterPageProps {}

export const RegisterPage: React.FC<RegisterPageProps> = () => {
  return (
    <Stack>
      <RegisterComponent />
    </Stack>
  );
};
