import { Center, IconButton, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiCrunchbase } from "react-icons/si";

interface PageFooterComponentProps {}

export const PageFooterComponent: React.FC<PageFooterComponentProps> = () => {
  return (
    <Stack mt="4" position={"relative"} bottom={"0"} w="100%">
      <Stack
        direction={"row"}
        align={"center"}
        justify={"left"}
        textAlign={"left"}
      >
        <IconButton
          aria-label="Search database"
          icon={<FaSquareXTwitter />}
          background={"transparent"}
          _hover={{ background: "transparent" }}
          fontSize={"48"}
          color={"#002060"}
        />
        <IconButton
          aria-label="Search database"
          icon={<SiCrunchbase />}
          background={"transparent"}
          _hover={{ background: "transparent" }}
          fontSize={"42"}
          color={"#002060"}
        />
        <IconButton
          aria-label="Search database"
          icon={<FaLinkedin />}
          background={"transparent"}
          _hover={{ background: "transparent" }}
          fontSize={"48"}
          color={"#002060"}
        />
      </Stack>
      <Stack
        bg="#002060"
        textColor={"white"}
        fontFamily={"Montserrat"}
        fontSize={"lg"}
      >
        <Stack direction={"row"} justify={"space-between"} ml="4" mt="4" mb="4">
          <Stack width={["50%", "80%", "80%"]} fontSize={["sm", "md", "md"]}>
            <Link href="/in-progress">Support</Link>
            <Link href="/">About</Link>
            <Link href="/in-progress">Careers</Link>
            <Link href="/in-progress">Alumni Network</Link>
            <Link href="/in-progress">Social Networker Diplomas</Link>
            <Link href="/in-progress">Marketplace Entrepreneur Diplomas</Link>
          </Stack>
          <Stack width={["50%", "20%", "20%"]} fontSize={["sm", "md", "md"]}>
            <Link href="/in-progress">Sign Up For Emails</Link>
            <Link href="/terms-and-conditions">Terms and Conditions</Link>
            <Link href="/terms-and-conditions">Privacy</Link>
            <Link href="/terms-and-conditions">CA Privacy</Link>
            <Link href="/terms-and-conditions">Terms of Use</Link>
            <Link href="/terms-and-conditions">Your Privacy Choice</Link>
          </Stack>
        </Stack>
        <Center>
          <Text pb="4" fontSize={["sm", "md", "md"]}>
            © 2024 UpUnikSelf Inc. All rights reserved.
          </Text>
        </Center>
      </Stack>
    </Stack>
  );
};
