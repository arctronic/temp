import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";

interface ExploreComponentProps {}

export const ExploreComponent: React.FC<ExploreComponentProps> = () => {
  return (
    <Stack minH="40vh">
      <Stack direction={"row"} mt="4">
        <Stack width={["1%", "25%", "25%"]}></Stack>
        <Stack width={["98%", "50%", "50%"]}>
          <Stack width={"100%"} gap="2px">
            <Stack direction={"row"} gap="2px">
              <Stack
                width={"50%"}
                border={"4px solid #002060"}
                borderRadius={"8"}
              >
                <Text
                  fontSize={{ base: "2xl", lg: "4xl" }}
                  fontFamily={"Montserrat"}
                  color={"#002060"}
                  textAlign={"center"}
                  fontWeight={"bold"}
                >
                  {" "}
                  SHOP
                </Text>
              </Stack>
              <Stack
                width={"50%"}
                border={"4px solid #002060"}
                borderRadius={"8"}
              >
                <Text
                  fontSize={{ base: "2xl", lg: "4xl" }}
                  fontFamily={"Montserrat"}
                  color={"#002060"}
                  textAlign={"center"}
                  fontWeight={"bold"}
                >
                  VENDOR
                </Text>
              </Stack>
            </Stack>
            <Stack direction={"row"} gap="2px">
              <Stack
                width={"50%"}
                height={{ base: "250px", lg: "300px" }}
                gap={{ base: "5", lg: "10" }}
                padding={"4"}
                border={"4px solid #002060"}
                borderRadius={"8"}
              >
                <Stack direction={"row"} align={"center"}>
                  <Box
                    width={{ base: "15px", lg: "40px" }}
                    height={{ base: "24px ", lg: "60px" }}
                    bg="#002060"
                    borderRadius="50%"
                  ></Box>
                  <Text
                    fontSize={{ base: "lg", lg: "3xl" }}
                    fontFamily={"Montserrat"}
                    color={"#002060"}
                    fontWeight={"bold"}
                  >
                    Guest
                  </Text>
                </Stack>
                <Stack direction={"row"} align={"center"}>
                  <Box
                    width={{ base: "15px", lg: "40px" }}
                    height={{ base: "24px ", lg: "60px" }}
                    bg="#002060"
                    borderRadius="50%"
                  ></Box>
                  <Text
                    fontSize={{ base: "lg", lg: "3xl" }}
                    fontFamily={"Montserrat"}
                    color={"#002060"}
                    fontWeight={"bold"}
                  >
                    Create New Account
                  </Text>
                </Stack>
                <Stack direction={"row"} align={"center"}>
                  <Box
                    width={{ base: "15px", lg: "40px" }}
                    height={{ base: "24px ", lg: "60px" }}
                    bg="#002060"
                    borderRadius="50%"
                  ></Box>
                  <Text
                    fontSize={{ base: "lg", lg: "3xl" }}
                    fontFamily={"Montserrat"}
                    color={"#002060"}
                    fontWeight={"bold"}
                  >
                    Log In
                  </Text>
                </Stack>
              </Stack>

              <Stack
                width={"50%"}
                height={{ base: "250px", lg: "300px" }}
                gap={{ base: "5", lg: "10" }}
                padding={"4"}
                border={"4px solid #002060"}
                borderRadius={"8"}
              >
                <Stack direction={"row"} align={"center"}>
                  <Box
                    width={{ base: "15px", lg: "40px" }}
                    height={{ base: "24px ", lg: "60px" }}
                    bg="#002060"
                    borderRadius="50%"
                  ></Box>
                  <Text
                    fontSize={{ base: "lg", lg: "3xl" }}
                    fontFamily={"Montserrat"}
                    color={"#002060"}
                    fontWeight={"bold"}
                  >
                    Support
                    {/* <br /> */}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </Text>
                </Stack>
                <Stack direction={"row"} align={"center"}>
                  <Box
                    width={{ base: "15px", lg: "40px" }}
                    height={{ base: "24px ", lg: "60px" }}
                    bg="#002060"
                    borderRadius="50%"
                  ></Box>
                  <Text
                    fontSize={{ base: "lg", lg: "3xl" }}
                    fontFamily={"Montserrat"}
                    color={"#002060"}
                    fontWeight={"bold"}
                  >
                    Create New Account
                  </Text>
                </Stack>
                <Stack direction={"row"} align={"center"}>
                  <Box
                    width={{ base: "15px", lg: "40px" }}
                    height={{ base: "24px ", lg: "60px" }}
                    bg="#002060"
                    borderRadius="50%"
                  ></Box>
                  <Text
                    fontSize={{ base: "lg", lg: "3xl" }}
                    fontFamily={"Montserrat"}
                    color={"#002060"}
                    fontWeight={"bold"}
                  >
                    Log In
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack width={["1%", "25%", "25%"]}></Stack>
      </Stack>
    </Stack>
  );
};
