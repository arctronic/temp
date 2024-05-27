import { Stack, Text } from "@chakra-ui/react";
import React from "react";

interface AboutUsComponentProps {}

export const AboutUsComponent: React.FC<AboutUsComponentProps> = () => {
  return (
    <Stack>
      <Stack direction={"row"} mt="10">
        <Stack>
          <Text
            fontSize={["xx-large", "xx-large", "xxx-large"]}
            textAlign={"center"}
            fontFamily={"Montserrat"}
            fontWeight={"bold"}
            color={"#002060"}
          >
            About Us
          </Text>
          <Stack
            bg="#E0EAFF"
            pb="24"
            paddingX={{ base: "4", md: "10", lg: "24" }}
            pt="10"
            borderRadius={"12"}
            mt="8"
            fontSize={["md", "xl", "xl"]}
            textAlign={"left"}
            fontFamily={"Montserrat"}
            color={"#002060"}
            gap="4"
          >
            <Text>
              Welcome to UpUnikSelf Inc., founded by two visionary women who
              recognized the untapped potential of cryptocurrency beyond quick
              profit.
            </Text>
            <Text>
              During the pandemic, we realized that every minute in life should
              be used to build.
            </Text>

            <Text>
              Our mission is to revolutionize the perception of crypto by
              building a secure marketplace where crypto will slowly be adopted
              as a trusted payment method by the 80% of global retailers lacking
              an online presence.
            </Text>
            <Text>
              We have, alongside our Tech Head, crafted a platform that makes it
              accessible and affordable for vendors to join the digital economy.
            </Text>
            <Text>Join us in shaping the future of online business!</Text>
          </Stack>
          <Text
            fontSize={{ base: "3xl", lg: "xxx-large" }}
            textAlign={"center"}
            fontFamily={"Montserrat"}
            color={"#002060"}
            fontWeight={"semibold"}
          >
            Contact
          </Text>
          <Text
            fontSize={{ base: "2xl", lg: "xx-large" }}
            textAlign={"center"}
            fontFamily={"Montserrat"}
            color={"#002060"}
            fontWeight={"semibold"}
          >
            mail@upunikself.xyz
          </Text>
        </Stack>
        {/* <Stack width={["5%", "35%", "35%"]}></Stack> */}
      </Stack>
    </Stack>
  );
};
